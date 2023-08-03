# Boolean

## `Boolean()`

- `Boolean(값)`: 값에 대한 `true`,`false`를 반환한다.

| 표현  |      의미       |
| :---: | :-------------: |
| true  |      참, 1      |
| false |     거짓, 0     |
|  &&   |       and       |
| \|\|  |       or        |
|   !   |       not       |
|   &   | and, 비트논리곱 |
|  \|   | or, 비트논리합  |
|   ~   |  not, 비트부정  |

```js
console.log("가" && "나"); //나
// 둘다 true이면 맨 뒤에 선언된 값 출력
console.log("" && "나"); //""
// false인 값을 출력

let username = "hello";
console.log(username || "이름없음"); //hello

let username = "";
console.log(username || "이름없음"); //이름없음

console.log(3 & 5);
// 0011 2진법으로 3이란 의미
// 0101 2진법으로 5란 의미
//----- 자리별로 and 연산을 처리
// 0001

console.log(3 | 5);

// 0011
// 0101
//----- 자리별로 or 연산을 처리
// 0111

console.log(true && false); // false
console.log(false && true); // false
console.log(false || true); // true
console.log(true || true); // true

console.log(!!"가"); // true
console.log(!""); // true

console.log(0 && -1); // 0
console.log(0 && 1); // 0
console.log(1 && 1); // 1
console.log(1 && "안녕"); // '안녕'
console.log(1 && true); // true
console.log(0 || true); // true
console.log(1 && "안녕"); // '안녕'
```
