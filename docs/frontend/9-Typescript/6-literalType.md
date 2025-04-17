# Literal Type과 as const

## Literal Type이란?

- 특정 값들의 집합을 타입으로 정의
- 값 자체를 타입으로 사용할 수 있게 해주는 특징
- 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입

```ts
let value1: 1 = 1; // 가능
let value2: "2" = 2; // 불가능
let value3: "undefined" = undefined; //불가능
```

## Literal Type + 유니온(|)

- `|` 연산자를 통해 Literal Type의 지정해둔 특정값의 타입만 변수로 지정
- 변수 이외 함수의 **parameter 값** 또는 **return 값** 지정도 가능

```ts title="Literal Type 변수"
type T = 1 | 2 | 3 | 4;

let value1: T = 3; // 가능
let value2: T = "4"; // 불가능

let body: "hand" | "foot";
body = "hand"; // 가능
```

```ts title="Literal Type 함수"
function calc(x: "더하기" | "빼기"): 2 | 0 | "잘못된 값을 입력" {
  if (x === "더하기") return 2;
  else if (x === "빼기") return 0;
  else return "잘못된 값을 입력";
}

calc("더하기"); // 2
calc("빼기"); // 0
calc("안녕"); // 에러
```

:::note

변수의 지정된 타입 값 이외에 값을 할당 불가능

:::

## as const

### as const란?

- `Type Assertion` + `const`
- 변수가 가질 수 있는 값의 범위를 확실하게 지정
- 객체 property에 사용하면 Literal Type으로 고정

:::note

```ts
const number1 = 5;
const string1 = "hello";
```

number1과 string1의 변수 타입은 각각 `number`과 `string`이다.<br/>

```ts
const number1 = 5 as const;
const string1 = "hello" as const;
```

위와 같이 `as const`를 붙임으로서 변수타입이 `number`과 `string`이 아닌<br/>
`5`와 `"hello"`로 타입을 고정시킨다.<br/>

:::

## 객체 property + as const

- 객체 속성의 타입을 더 세밀하게 고정하기 위해 사용

:::note

```ts
let value = {
  name: "JJamVa",
};

function greeting(x: "JJamVa"): void {
  console.log(x + "님 안녕하세요!");
}

greeting(value.name);
```

위와 같은 코드에서 greeting함수를 실행할 때, value의 name속성을 argument값으로 넣었다.<br/>
하지만 value.name에 에러가 발생한다.<br/>

이유는 value.name은 value안 name속성의 값을 호출한 것이며,<br/>
greeting함수안 x의 parameter는 `"JJamVa"`라는 타입 속성을 명시하였기 때문에 에러가 발생<br/>

```ts
let value = {
  name: "JJamVa",
} as const;

function greeting(x: "JJamVa"): void {
  console.log(x + "님 안녕하세요!");
}

greeting(value.name);
```

이를 해결하고자 value에 `as const`를 이용하여 value의 name 속성을 `"JJamVa"`로 Literal Type 변경하는 방법이 있다.<br/>
value의 name속성의 타입과 greeting의 x타입이 일치하여 에러가 발생하지 않는다.<br/>

:::

:::tip

**as const와 readonly**

```ts
// as const
let value = {
  name: "JJamVa",
  age: 27,
} as const;

// readonly
type T = {
  readonly name?: string;
  readonly age: number;
};

let value: T = {
  name: "JJamVa",
  age: 27,
};
```

위의 코드는 결과론적으로 똑같은 의미를 가진 코드이다.<br/>
즉, 객체에서 `as const`를 사용하게 되면 모든 객체의 속성이 **readonly**상태로 변한다.<br/>
하지만 `as const`가 Literal Type 속성을 고정하는 추가적인 효과가 있다.<br/>

:::
