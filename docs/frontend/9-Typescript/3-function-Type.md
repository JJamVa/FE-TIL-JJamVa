# 함수 타입 지정

## 함수 타입 지정이란?

- 타입스크립트에서는 함수도 타입 지정이 가능
- **Parameter(함수로 들어오는 값)**과 **return(함수에서 반환되는 값)**이 존재

```ts
// 기본 자바스크립트 함수
function func(x) {
  return x;
}

func(3);

// 타입스크립트 함수
// parameter 값 정수, return 값 정수
function func(x: number): number {
  return x;
}

func(3);
```

## 함수 void 타입

- return할 자료가 없는 경우 사용하는 함수 타입
- void타입을 사용하면서 return하려고 할 시, 에러 발생

```ts
//return 없을 시, 사용하는 함수 타입
function func(x: number): void {
  console.log(x);
}

func(4);
```

## 선택적 parameter 옵션

- 함수를 실행 시, parameter 값의 유/무에 따라 실행

```ts
function func(x?: number) {
  console.log(`내가 제일 좋아하는 숫자는 ${x} 입니다.`);
}

func(10); // 내가 제일 좋아하는 숫자는 10 입니다.
func(); // 내가 제일 좋아하는 숫자는 undefined 입니다.
```

:::tip

`x?:number`는 `x:number|undefined`와 같다.<br/>
즉, x의 값이 내가 원치 않는 값으로 들어왔을 경우 예외처리를 신경써야한다.

:::

## 함수의 parameter가 UnionType인 경우

```ts
function func(x: number | string) {
  return x + 10;
}

func(10);
func("안녕");
```

:::note
위의 코드가 자바스크립트일 경우, `10일 경우 20` `"안녕"일 경우 "안녕10"` 이 출력 된다.<br/>
하지만 타입스크립트에서는 에러가 발생한다.<br/>

타입스크립트에서는 명확한 타입을 선언을 해야되기 때문에 여러 타입을 가진 변수는 정확히 예측이 불가능하다.<br/>
이를 해결하기 위해서는 **`return` 타입을 정하는 방법**과 **parameter값에 대한 조건부 설정**을 이용하면 해결이 가능 .

```ts title="함수 parameter가 UnionType일 경우 개선"
// parameter값이 여러 조건일 경우를 대비해서 작성
function func(x:number | string): string : number{
    if(typeof x === 'string') return x + "10";
    else if(typeof === 'number') return x + 10;
}

func(10)// 20
func("안녕")// "안녕10"
```

:::
