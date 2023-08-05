# 함수의 종류

## 함수 선언문

```js
function sum(x, y) {
  return x + y;
}
```

## 함수 표현식
```js
let sum = function (x, y) {
  return x + y;
};
```

## 콜백함수(CallBack)

```js
function add(x, y) {
  return x + y;
}

function addAndMultiply(x, y, z) {
  let sum = z(x, y) * z(x, y);
  return sum;
}

addAndMultiply(1, 2, add);
// 값뿐만이 아닌 argument에 실행시킬 함수를 입력해도 된다.
```

## 화살표 함수(Allow Function)

```js
let sum = (x, y) => x + y; // 한줄로 작성가능. 중괄호와 return은 필요없음.

let sum = (x, y) => {
  //두줄 이상 작성 시, 중괄호와 return을 작성
  return x + y;
};
```

## 재귀함수(Recursive Function)

```js
function factorial(n) {
  if (n <= 1) return n;
  // 재귀함수 작성시 조건문을 통하여 종료 지점을 꼭 생성해야된다.
  return n * factorial(n - 1);
  // 재귀함수 특징이 자기 자신을 재호출 하는 것이다.
  // 재귀함수는 피보나치 수열이나 팩토리얼문제 해결에 아주 용이하다.
}
```

## 즉시 실행 함수

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