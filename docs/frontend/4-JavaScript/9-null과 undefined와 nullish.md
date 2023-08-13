# null & undefined & nullish

## null

- `null`은 **값이 없음**을 나태내면 타입은 `object`이다.
- 변수에 값이 없음을 나타내기 위한 값.

```js
let 반점수 = [10, 20, 30, null, 40, 50]
let 반평균 = 0
for (const i of 반점수) {
    console.log(i)
    반평균 += i
}
// 10 20 30 null 40 50 반평균 150

// null + 100일 경우
// 10 20 30 100 40 50 반평균 250

// null * 100일 경우
// 10 20 30 0 40 50 반평균 150
```

## undefined

- `undefined`는 **정의되지 않음**을 의미하고, 데이터 타입은 `undefined`이다.

```js
let 반점수 = [10, 20, 30, undefined, 40, 50]
let 반평균 = 0
for (const i of 반점수) {
    console.log(i)
    반평균 += i
}
// 10 20 30 undefined 40 50 반평균 NaN

// undefined + 100일 경우
// 10 20 30 NaN 40 50 반평균 NaN

// undefined * 100일 경우
// 10 20 30 NaN 40 50 반평균 NaN
```

## nullish
- 왼쪽 연사자가 `null` 또는 `undefined`일 때 오른쪽 피연산자를 반환, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자

```js
let firstName = null;
let lastName = 'JJamVa';
let nickName = "licat";

console.log(firstName ?? nickName)//"licat"
console.log(firstName ?? lastName ?? nickName)//"JJamVa"
console.log(lastName ?? nickName)//"JJamVa"

let first = null
let sec = undefined

console.log(first ?? sec)//undefined
console.log(sec ?? first)//null
// null과 undefined가 선언되었을 떄, 뒤에 값을 반환한다.

let height = 0;
console.log(height ?? 100)//0을 반환
```