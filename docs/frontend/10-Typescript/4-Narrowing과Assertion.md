# Narrowing & Assertion

## Narrowing과 Assertion이란?

### `Type Narrowing`

- 타입의 범위를 좁히는 것을 의미
- 조건문을 이용하여 타입을 더 구체적으로 판단하고 제한하는 것

:::note

```ts
function func(x: number | string) {
  return x + 1;
}

func(12);
func("안녕");
```

위와 같은 코드에서 `return x + 1`의 구문에 에러를 표시하고 있다.<br/>
이론상 자바스크립트에서는 `func(12)`는 `13`을 반환해야하며,<br/>
`func("안녕")`은 `"안녕1"`을 반환해야한다.<br/>

하지만 func의 함수는 어떤 parameter값을 받을지 모르기 때문에 상세한 타입으로 표현을 해야한다.<br/>
이때 사용하는 방법 중 하나인 `Type Narrwoing`이다.<br/>

```ts
function func(x: number | string) {
  if (typeof x === "number") return x + 1;
  else if (typeof x === "string") return x + "1";
  else return;
}

func(12);
func("안녕");
```

위와 같이 코드에 대한 타입을 명확하게 조건 처리를 하게된다면 타입스크립트 문법 오류는 사라지게된다.<br/>
이와 같은 방법을 **Type Narrowing**이라고 한다.

:::

:::danger

`Type Narrowing`을 사용 시, 모든 입력 값에 대해 고려를 해야된다.<br/>
그렇지 않을 경우, 의도치 않은 에러를 초래할 수 도 있다.<br/>

:::

### Type Assertion

- `변수명 as 타입`으로 사용
- 이 변수명은 이런 타입이라고 알림
- 타입 체크를 무시

:::note

```ts
function func(x: number | string) {
  return x + 1;
}

func(12);
func("안녕");
```

위와 같은 Type Narrowing과 똑같은 예시 코드이다.<br/>
`Type Assertion`과 같은 경우는 한가지 변수를 타입 변환 시키기 때문에<br/>
`Type Assertion`만 사용할 경우, 모든 입력 값에 대한 결과값을 반환할 수 없다.<br/>

```ts title="x를 number로 바꾼 경우"
function func(x: number | string) {
  return (x as number) + 1;
}
func(12); // 13
func("안녕"); // NaN
```

```ts title="x를 string으로 바꾼 경우"
function func(x: number | string) {
  return (x as string) + 1;
}
func(12); // 121
func("안녕"); // "안녕1"
```

위와 같이 타입스크립트 문법상 **오류는 방지**할 수 있지만, **원치않는 값을 반환**받을 수 있다.<br/>
여러 종류의 타입값을 받아 일일이 처리해야하는 작업이면 `Type Narrowing`을 권장하며,<br/>
반환값이 하나로 명확히 고정되어있는 경우 `Type Assertion`을 권장한다.<br/>

:::
