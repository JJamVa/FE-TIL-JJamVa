# object 동적 속성 및 변환

## Object Index Signatures

- 객체의 동적 속성을 정의하는 방법 중 하나

```ts
// 일반 객체 속성 정의
interface Info1 {
  name: string;
  age: string;
  job: string;
  nickname: string;
}

let obj1: Info1 = {
  name: "Hello",
  age: "10",
  job: "FE",
  nickname: "sam",
};

// Object Index Signatures
interface Info2 {
  [key: string]: string;
}

let obj2: Info2 = {
  name: "hi",
  age: "20",
  job: "BE",
  nickname: "john",
};
```

:::note

위의 코드를 보면 Info1과 Info2가 똑같이 동작을 하는 것을 확인 할 수 있다.<br/>
Object Index Signatures를 사용할 경우, 코드의 간결성과 확장성 좋아진다.<br/>
다만, **객체의 속성이 일정해야할 경우 Object Index Signatures를 권장하지 않는다.**<br/>

:::

:::danger
**Object Index Signatures의 고정 속성**

```ts title="Object Index Signatures와 고정 속성"
interface Info {
  age: string;
  [key: string]: string;
}

let obj: Info = {
  name: "JJamVa",
  age: "28",
};
```

위의 코드 같은 경우 Info에서 age라는 속성을 고정시키는 경우이다.<br/>
Info 타입을 사용 시, age속성을 무조건 사용해야된다.<br/>

```ts title="Object Index Signatures와 고정 속성"
interface Info {
  age: number;
  [key: string]: string | number;
}

let obj: Info = {
  name: "JJamVa",
  age: 28,
};
```

위의 코드와 같은 경우, Object Index Signatures와 타입이 다른 속성을 만들 경우이다.<br/>
만약 `[key: string]: string`으로 작성하였을 경우, 오류가 발생한다.<br/>
고정 속성에 대한 타입도 설정 해줘야하기 때문에 **유니온 타입으로 고정 속성의 타입도 추가**해야된다.<br/>

:::

:::tip
**Object Index Signatures의 key 타입이 number일 경우**

```ts
interface Info {
  [key: number]: string;
}

let obj: Info = {
  1: "JJamVa",
  2: "28",
};

console.log(obj[1]); // JJamVa
console.log(obj["1"]); // JJamVa
```

위의 코드는 key의 타입이 number일 경우이다.<br/>
일반적으로 key의 타입은 string을 사용하지만 number도 사용이 가능하다.<br/>
number로 사용할 경우, 객체의 속성을 숫자로 작성해도 정상적으로 동작한다.<br/>
다만, 실질적으로 객체를 생성하면 **string타입으로 변환**하기 때문에 큰 의미가 없다.<br/>
이러한 이유로 객체의 index를 number나 string으로 출력해보면 둘다 출력이 되는 것을 확인할 수 있다.<br/>

:::

## key of

- 객체 타입의 모든 속성 이름을 문자열 리터럴 유니온으로 가져오는 데 사용
- 인덱스 타입과 함께 사용되면 특히 객체의 속성에 접근하는 데 유용

```ts
interface Info {
  name: string;
  age: number;
  job: boolean;
}

type MyInfo = keyof Info;
let myName: MyInfo = "name";
let myAge: MyInfo = "age";
let myJob: MyInfo = "programmer"; // 에러 발생
```

:::note

keyof의 키워드를 통해 Info의 interface에 정의된 속성 값의 타입 추출한다.<br/>
MyInfo는 name, age, job의 string 타입의 리터럴 유니온 형태로 가지게 된다.<br/>

:::

## Object Index Signatures + keyof

```ts
type Info = {
  [key: string]: number;
};

type MyInfo = keyof Info;

let a: MyInfo = "JJamVa";
let b: MyInfo = 28;
```

:::note

Info를 통해 string타입의 key와 number타입의 값을 정의했다.<br/>
이전의 객체의 속성을 일일이 정의하여 keyof를 사용할 경우, 해당 속성의 key값들을 타입으로 가진다.<br/>
하지만 **Object Index Signatures와 keyof를 함께 사용**할 경우는 다르다.<br/>
Object Index Signatures와 keyof를 함께 사용할 경우, 해당 **key의 타입과 value의 타입이 유니온 처리되어 반환**된다.<br/>
이로 인해 MyInfo의 타입은 Info key값인 string 과 value 값인 number가 유니온 처리가 되어 `string | number`인 것을 확인할 수 있다.<br/>

```ts
type Info = {
  [key: string]: number;
};

type MyInfo = keyof Info;
```

즉, 코드상으로 보았을 때 key의 타입은 string, value값은 number 이기 때문에 MyInfo의 타입은 `string | number`이다.<br/>
인덱스 타입 정의를 통해 객체 속성을 동적으로 만들 수 있으며, 코드를 더 간단하게 만들 수 있다.<br/>

:::

:::tip

```ts
type Info = {
  [key: number]: number;
};

let obj: Info = {
  1: 100,
  2: 200,
  3: 300,
};
```

위와 같이 인덱스 타입에 key값을 number로도 사용이 가능은 하다.

:::

## Mapped Types

- 객체의 속성들을 변환하거나 수정하는데 사용
- 기존 객체 타입의 각 속성을 새로운 속성으로 매핑하거나, 기존 속성을 수정하여 새로운 타입을 생성
- `[변수 in keyof 제네릭 타입]: 변경 타입`

```ts
interface Info {
  name: boolean;
  job: number;
  age: undefined;
}

type TypeChange<Tchanger, T> = {
  [x in keyof Tchanger]: T;
};

let obj: TypeChange<Info, string> = {
  name: "짬바",
  age: "28",
  job: "programmer",
};
```

:::note

위의 코드와 같은 경우 Info의 속성 타입들이 잘못 지정되어 수정하는 코드이다.<br/>
핵심 코드는 TypeChange를 보면 된다.<br/>
TypeChange와 generic 문법을 이용하여 타입을 정의한다.<br/>
`[x in keyof Tchanger] : T`는 **generic에 입력된 객체 속성을 하나씩 T타입으로 변경 시키는 작업**이다.<br/>
이를 통해 타입 변환이 가능하다.<br/>

:::
