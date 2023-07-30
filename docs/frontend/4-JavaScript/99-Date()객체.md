# Date 객체

## Date객체 생성

```js
//Date 객체 생성
var now = new Date();

//연도를 가져오는 메서드 .getFullYear()
console.log(now.getFullYear());

// 월 정보를 가져오는 메서드. .getMonth()
// getMonth()에 1값을 더해줘야 원하는 달이 출력된다.
console.log(now.getMonth());

//일 정보를 가져오는 메서드. .getDate()
console.log(now.getDate());

//1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 
// .getTime()
//  일수를 구하려면 1000(밀리세컨드) * 60(초) * 60(분) * 24(시간)
console.log(now.getTime());

//특정 일의 Date 객체 생성
var christmas = new Date('2020-12-25');
console.log(christmas);

//특정 (밀리세컨드)ms의 Date 객체 생성
var ms = new Date(1000);
console.log(ms);
```