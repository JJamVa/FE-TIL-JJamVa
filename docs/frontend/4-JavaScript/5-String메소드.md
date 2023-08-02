# String 메소드

## 문자열 대/소문자 변화(`toUpperCase()`, `toLowerCase()`)

- `toUpperCase()`: 문자열을 대문자로 변경
- `toLowerCase()`: 문자열을 소문자로 변경

```js
var a = "Hello World";

console.log(a.toUpperCase()); //HELLO WORLD
console.log(a.toLowerCase()); //hello world
```

## 문자열의 위치 찾기(`indexOf()`, `search()`)

- `indexOf('찾을 값', "시작 인덱스 위치")`: 문자열에 찾고 싶은 값이 존재한다면 **문자열의 위치값**을 반환 해준다.
  - 만약 찾고 싶값이 없다면 **-1**을 반환해준다.
  - "시작 인덱스 위치"에 빈값으로 둔다면 처음부터 시작하고, 값을 입력해준다면 그 인덱스 부분부터 시작한다.
- `search()`: indexOf()와 똑같은 기능이다.

:::info
search()와 indexOf()의 차이점은????

- search()안에서 정규표현식으로 문자열의 위치를 찾을수가 있다.
- indexOf()는 정규표현식이 사용 불가능하다.

결론적으로 차이가 없다. 정규표현식을 사용하여도 반환값은 하나.
:::

## 문자열 자르기(`slice()`, `substring()`)

- `slice(시작인덱스, 종료인덱스)`

  - 실제적으로 종료 인덱스 구간은 `종료인덱스 - 1`의 값이다.
  - 종료인덱스 구간은 비워도 된다. (범위는 끝까지라는 의미)

- `substring(시작인덱스, 종료인덱스)` 과 `substr(시작인덱스, 종료인덱스)`
  - slice()랑 사용방법은 같다.

:::info
**substring과 slice의 차이점**

```js
// 1. 음수 취급
// slice는 음수를 취급하지만 substring은 양수로 취급합니다.
let test = "hello world";
console.log(test.slice(-5, 9)); //wor
// 'worldhello wor'이다 그래서 중복값을 찾아보면 wor
console.log(test.slice(6, 9)); //wor
// 'wor'이 출력된다.
console.log(test.substring(-5, 9)); //hello wor
console.log(test.substring(-1, 9)); //hello wor
// 음수값을 받을 수 없다. 즉 시작 인덱스의 값이 -5, -1을 넣어도 0으로 변환하여 실행한다.

// hello world*h*ello world
// *h*를 인덱스를 0이라고 생각하고 보자.

// 2. 시작인덱스가 종료인덱스보다 클 경우: substring의 경우 두 값을 바꿔 실행합니다.
console.log(test.slice(7, 3)); // ""
// slice는 범위 시작값이 종료값보다 클경우, 출력이 되지않는다.
console.log(test.substring(7, 3)); //test.substring(3,7)과 같다.
// 시작 인덱스 값이 종료 인덱스 값보다 클 경우 자리를 바꾼다.
console.log(test.substring(3, 7)); //lo w
```

:::

## 문자열 대체하기(`replace()`)

- `replace(변화를 주고 싶은 문자, 변화 후의 문자)`
  - **변화를 주고 싶은 문자**에 문자열도 가능하지만 정규화표현식으로 처리가 가능
- `replaceAll(변화를 주고 싶은 문자, 변화 후의 문자)`
  - **변화를 주고 싶은 문자**가 여러 번 등장하면 전부 다 처리해준다.

:::info
replace()가 replaceAll()처럼 동작 할 수 있을까?

```js
var a = "he11o wor1d";

console.log(a.replace(/1/g, "l")); //hello world
console.log(a.replaceAll("1", "l")); //hello world
```

위와 같이 결과가 똑같이 나온다.
즉, replace()를 사용시 **/변경할 문자(들)/g**로 사용하면 replaceAll()과 똑같이 동작을 한다.

g의 의미는 global의 함축어로 전역을 의미한다. 즉, 중복값을 처리하기 위해 사용된다.
:::

## 문자가 존재하는지 확인하는 메소드(`includes()`)

- `includes(문자)`: 문자가 포함되어 있는지 확인을 한다. 존재한다면 `true`, 존재하지않는다면 `false` 반환

```js
var a = "aespa";

console.log(a.includes("spa")); //true
console.log(a.includes("es")); //true
console.log(a.includes("에스파")); //false
```

## 문자열을 분리(`split()`)

- `split(문자)`: `문자`기준으로 내용을 분리후, 배열로 바꿔준다.

```js
var a = "멋쟁이 사자처럼!!";

console.log(a.split("사자")); // ["멋쟁이 ", "처럼!!"]
console.log(a.split(" ")); //["멋쟁이","사자처럼!!"]
console.log(a.split("!")); //["멋쟁이 사자처럼","",""]
```

:::caution
**split()의 주의점**

- 문자열에 대하여 동작(Array, Set에 대하여 동작x)
- 연속으로 붙어있는 문자가 제거 대상이라면 빈값이 배열에 추가된다.

:::

## 문자열 앞,뒤에 대한 공백 제거(`trim()`)

- `trim()`: 불필요한 부분을 잘라낸다는 의미. JavaScript에서는 문자열 양옆의 공백을 제거한다.

```js
var a = `    안녕하 세요 !!!!!!           
                             `;

console.log(a.trim()); //"안녕하 세요 !!!!!!"
```

## 문자열을 추가하기(`padStart()`, `padEnd()`)

- `padStart(문자열의 크기, 문자)`: 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
- `padEnd(문자열의 크기, 문자)`: 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다.

```js
var a = "morning";
var b = " study";
var c = "good ";
console.log(a.padStart(a.length + c.length, c)); //good morning
console.log(a.padEnd(a.length + b.length, b)); //morning study

// 이해를 돕기 위해 문자열의 크기와 문자를 작성하였다.
console.log(a.padStart(7 + 5, "good ")); //good morning
console.log(a.padEnd(7 + 6, " study")); //morning study

// 여러 규칙이 있지만 직접 실습해보면 좋을거 같다.
```

## 두개의 문자열을 이어붙이기(`concat()`)

- `문자열1.concat(문자열2)`: `문자열1` 뒤에 `문자열2`를 붙인다.

```js
var a = "Front";
var b = "End";

console.log(a.concat(b)); //FrontEnd
```
