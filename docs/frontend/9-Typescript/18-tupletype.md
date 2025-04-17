# tuple type

## tuple type이란?

- 배열의 각 요소에 타입이 미리 정해진 배열
- 고정된 크기를 가지며 각 요소의 타입이 서로 다르게 지정 가능

```ts
let tuple: [number, string, null | undefined] = [1, "JJamVa", null];
```

:::info

**`:타입[]`과 `:[타입]`의 차이점**

- `:타입[]`

  - 해당 작성 타입으로만 이루워진 배열
  - 타입만 맞다면 배열의 길이에 상관없이 값 삽입 가능

- `:[타입]`
  - 튜플은 고정된 길이의 배열이지만, 각 요소가 서로 다른 타입이 존재 가능
  - 튜플 생성시, 길이에 대한 제약

:::

## tuple type 인덱스 접근

```ts
let tuple: [number, string, null | undefined] = [1, "JJamVa", null];

let value1: number = tuple[0];
let value2: string = tuple[1];
let value3: null | undefined = tuple[2];
```

:::note

위의 코드와 같이 배열(튜플)의 요소 접근 시, 해당 인덱스의 타입과 생성할 변수의 타입을 꼭 일치시켜야 된다.<br/>

:::

## tuple의 옵션

- 튜플을 생성 시, type alias를 통해 해당 요소의 타입을 지정
- `?(undefined)`와 같은 옵션을 사용하여 선택적으로 요소 생성 가능

```ts
type Num = [number, number?, number?];

let arr1: Num = [1];
let arr2: Num = [1, 2];
let arr3: Num = [1, 2, 3];
```

## rest parameter와 튜플

```ts
function func(...x: [string, string, number]): void {
  x.map((e, i) => {
    console.log(`${i + 1}번째 값은 ${e}입니다.`);
  });
}

func("hello", "world", 15);
// 1번째 값은 hello입니다.
// 2번째 값은 world입니다.
// 3번째 값은 15입니다.

func("hello", "world", 1, "JJamVa"); //에러 발생
```

:::note

위의 코드와 같이 rest parameter은 여러개의 인자 값을 받을 수 있다.<br/>
하지만 여러개 인자 값을 받는 tuple일 경우 꼭 **튜플의 인자 개수만큼 타입 선언**을 해야된다.<br/>
혹은 tuple 옵션을 이용하여 문제를 해결할 수 있다.<br/>

```ts
function func(...x: [string, string, number, string?]): void {
  x.map((e, i) => {
    console.log(`${i + 1}번째 값은 ${e}입니다.`);
  });
}

func("hello", "world", 15);
// 1번째 값은 hello입니다.
// 2번째 값은 world입니다.
// 3번째 값은 15입니다.

func("hello", "world", 1, "JJamVa");
// 1번째 값은 hello입니다.
// 2번째 값은 world입니다.
// 3번째 값은 15입니다.
// 4번째 값은 JJamVa입니다.
```

tuple 옵션을 이용하여 문제를 해결할 수 있다.<br/>
다만 범용적으로 사용할 함수일 경우, 예외처리를 잘해야된다.<br/>

:::

## spread 연산자와 tuple

- spread연산자를 이용해서 기존의 튜플을 확장

```ts
let arr1: number[] = [1, 2, 3];
let arr2: [number, number, number] = [4, 5, 6];

let tuple1: [boolean, string, ...number[]] = [true, "JJamVa", ...arr1];
let tuple2: [boolean, string, ...[number, number, number]] = [
  false,
  "Hong",
  ...arr2,
];

console.log(tuple1); // [true, 'JJamVa', 1, 2, 3]
console.log(tuple2); // [false, 'Hong', 4, 5, 6]
```

:::caution

**주의 사항**

1. spread 문법을 이용 시, spread를 사용할 배열의 값에 대한 타입을 제대로 지정하지 않을 경우 오류가 발생
2. TypeScript 4.0이상 버전에서는 [...튜플]을 사용 가능.(이전 3.x 버전일 경우 Array.from(튜플)로 사용)

```ts
// TypeScript 4.0 이상
let tuple1: [number, string] = [1, "two"];
let tuple2: [...[number, string]] = [...tuple1]; // 가능

// TypeScript 3.x
let tuple1: [number, string] = [1, "two"];
let tuple2: [number, string] = [...tuple1]; // 에러 발생
```

:::
