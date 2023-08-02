# String

## String

- '(작은따옴표) , "(큰따옴표) , `(빽틱)으로 문자를 가르킴

```js
var a = "Hello";
var b = "world";
var word = a + "\n" + b;
var c = `외쳐!!!
갓. 병. 민`;
var d = `${a} ${b}`;

console.log(a); //Hello
console.log(word); //Hello작성 후에 한줄 띄우고 world가 출력됨
console.log(c); // c를 출력할 때, 띄워쓰기도 다 포함되서 출력됨.
console.log(d); // Hello World 작성이됨!
```

## 문자열 사칙연산

```js
// 문자열의 사칙연산
console.log("1" + 2 + 3); // 123
console.log(2 + 3 + "1"); // 51
console.log(2 + 3 + +"1"); // 결과는 6이다.  +"1"의 역할이 단항 연산자의 역할로서 뒤에 + 뒤에있는 문자열을 정수형으로 타입이 변한다.
console.log("b" + "a" + +"a"); // +'a'이 NaN
console.log("lee" + "hojun"); //leehojun
console.log("hojun" * 3); // NaN이 나온다. 3번출력할거면 repeat()을 사용해라.

// 형변환
console.log("1" + "1"); // "11"
console.log(Number("1") + Number("1")); // 권하지 않습니다.
console.log(parseInt("1") + parseInt("1")); // 권합니다!
console.log(parseInt(undefined)); //undefined를 string형태로 보는거 같음!

console.log((1).toString() + (1).toString()); // "11"로 출력
let x = 10;
console.log(x.toString() + x.toString()); // 1010이 출력된다. 둘다 문자열로 변환하였기 때문에
```
