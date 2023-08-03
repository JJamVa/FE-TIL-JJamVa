# function

- 함수는 입력, 출력, 기능을 하나로 묶어 재사용 할 수 있도록 만드는 것. 자바스크립트는 실행 코드들이 들어있는 독립 블록 단위의 객체인 함수를 사용.

```js
function 함수이름(parameter1, parameter2...){//함수의 선언
    //실행코드...
    return 반환값
}

함수이름(argument1, argument2...)//함수의 호출
```

|   용어    |        번역        |               의미               |
| :-------: | :----------------: | :------------------------------: |
| Parameter |      매개변수      |  함수와 메서드에 입력 변수 이름  |
| Argument  | 전달인자,인자,인수 | 함수와 메서드에 실제 입력되는 값 |

## 지역변수와 전역 변수

- 전역변수(Global variable) : 어느 위치에서든 호출하면 사용이 가능
  (함수 밖에 선언하여 클래스 전체에서 사용이 가능한 변수)
- 지역변수(Local variable) : 특정구역({ }) 내에서 생성되어 그 구역에서만 사용
  (함수 속에 선언되어 해당 함수 속에서만 사용이 가능한 변수)

```js
let z = 100; //전역변수
function sum(x) {
  //x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; //y는 지역변수
  z = z + y;
  return x + y;
}
```

## 함수의 종류

### 함수 선언문

```js
function sum(x, y) {
  return x + y;
}
```

### 함수 표현식

```js
let sum = function (x, y) {
  return x + y;
};
```

### 콜백함수

```js
function sum(x, y, c) {
  c(x + y);
  return x + y;
}

function documentWrite(s) {
  document.write("콜백함수", s);
}
```

### 화살표 함수(Allow Function)

```js
let sum = (x, y) => x + y; // 한줄로 작성가능. 중괄호와 return은 필요없음.

let sum = (x, y) => {
  //두줄 이상 작성 시, 중괄호와 return을 작성
  return x + y;
};
```

### 재귀함수

```js
function factorial(n) {
  if (n <= 1) return n;
  // 재귀함수 작성시 조건문을 통하여 종료 지점을 꼭 생성해야된다.
  return n * factorial(n - 1);
  // 재귀함수 특징이 자기 자신을 재호출 하는 것이다.
  // 재귀함수는 피보나치 수열이나 팩토리얼문제 해결하는 데에 아주 용이하다.
}
```

### 즉시 실행 함수

```js
// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
})();

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();
```

## function parameter

### parameter에 지정 값이 없을 경우

```js
function test(a, b, c) {
  return a + b + c;
}

test(10, 20); // a=10, b=20 , c = undefined
test(10, 20, 30, 40); // a = 10, b = 20, c = 30
// 넘치는 값은 무시한다.
```

### parameter에 지정 값이 있을 경우

```js
function test(a = 10, b = 20, c = 30) {
  return a + b + c;
}

test(100,200)// a = 100, b = 200, c = 30
test()//a = 10, b = 20, c = 30
test(100, ,200) // error

```
