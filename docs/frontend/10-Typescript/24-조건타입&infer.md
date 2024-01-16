# 조건으로 타입 만들기 & Infer

## 조건부 타입 만들기

- 특정 조건에 따라 타입을 선택적으로 정의하는 데 사용
- `type 이름<generic 타입> = generic타입 extends 타입 ? 타입(참일 경우) : 타입(거짓일 경우)`

```tsx
type Type<T> = T extends string ? string : boolean;

const value1: Type<string> = "Hi";
const value2: Type<number> = false;
```

:::note

일반적으로 타입을 지정할 경우, `type 이름 = 타입`으로 작성하였다.<br/>
하지만 하나의 타입으로 조건을 걸어 타입의 확장성을 이용할 수 있게 설정도 가능하다.<br/>

위의 코드에서 삼항연산자를 이용하여 타입을 지정하였다.<br/>
조건부를 보면 `T extends string`이 있다.<br/>
이건 **generic으로 입력받은 타입이 string이 포함되어 있는지 확인**하는 조건이다.<br/>

결국, generic으로 입력 받은 타입에 따라 string일 경우, Type은 string 아닐 경우는 boolean으로 지정이 된다.<br/>

:::

## 조건부 타입 + infer

- generic 타입을 사용할 때 유용하게 활용되는 TypeScript의 키워드
- 타입을 추출할 때 사용

```ts
type Type1<T> = T extends infer R ? R : T;

let a1: Type1<string> = "하이";
let b1: Type1<undefined> = undefined;

type Type2<T> = T extends (x: infer RType) => number ? RType : number;

let a2: Type2<(x: string) => number> = "JJamVa";
let b2: Type2<(x: undefined | number) => number> = 123;
let c2: Type2<(x: number) => void> = 1000;
```

:::note

위의 코드에서 Type1은 조건부 타입과 유사한 경우라고 생각하면 된다.<br/>
결국 generic으로 입력 받은 자료형을 `infer 변수 이름`을 통해 자료형을 추출한다고 생각하면 된다.<br/>
`infer 변수 이름`을 이용하여 조건부 타입으로 설정할 수 있다.<br/>

infer의 특징 중 **generic으로 입력받은 복잡한 식일 경우 간단하게 변수를 추출** 할 수 있다는 장점이 있다.<br/>
Type2와 같은 조건부 타입이 대표적인 예시다.<br/>
generic에 함수식을 넣어 infer을 이용해 어떤 타입을 추출할지 지정이 가능하다.<br/>

:::
