# JSON

## JSON이란?

- JSON(JavaScript Object Notation)은 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현
- JSON은 가볍고 자바스크립트와 호환성이 높아 널리 사용
- 텍스트로 표현된 정보

```json
{
  "GameName": "Battle Ground",
  "members": [
    {
      "nickname": "PY92",
      "Gun": "AK47",
      "Damage": 132
    },
    {
      "nickname": "JS76",
      "GUN": "M4",
      "Damage": 159
    }
  ]
}
```

<details>
<summary>JSON과 XML형태 차이</summary>
<div markdown="1">

:::note
**JSON과 XML형태 차이**

JSON은 **객체**로 표현

```json
{
  "movie": "Avengers",
  "members": [
    {
      "name": "Ironman"
    },
    {
      "name": "hulk"
    }
  ],
  "winrate": "87"
}
```

XML은 **HTML태그**로 표현

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <movie>Avengers</movie>
  <members>
    <name>아이언맨</name>
	</members>
	<members>
	  <name>헐크</name>
	</members>
  <winrate>87</winrate>
</root>
```

:::

</div>
</details>

## JSON 메소드

### `JSON.parse()`

- JSON형태의 문자열 배열을 자바스크립트 객체로 변환

```js
const json = '{"1":true, "0":false}';
// json형태를 문자열로 선언(parse()를 사용해보기 위함)
console.log(typeof json); //string

const obj = JSON.parse(json); //객체형태인 문자열을 객체로 변환
console.log(obj); //{0: false, 1: true}
console.log(typeof obj); //object
```

### `JSON.stringify()`

- 자바스크립트 객체를 JSON형태의 문자열로 변환

```js
const obj = { true: 1, false: 0 };
//stringify()를 사용해보기 위한 JSON선언
console.log(typeof obj); // object

const json = JSON.stringify(obj); //객체 -> 객체형태로 된 문자열
console.log(json); // '{"true":1,"false":0}'
console.log(typeof json); //string
```

:::tip

### **JSON을 이용하여 깊은 복사**

```js
let arr = [1, 2, 3];
let copy = JSON.parse(JSON.stringify(arr));
arr[0] = -100;

console.log(arr); //[-100,2,3]
console.log(copy); //[1,2,3]
```

arr의 배열 값이 변경해도 copy의 배열 값의 변화에 지장이 없는 것을 확인할 수 있다.<br/>

```js
let obj = {
  name: "ETA",
  func: function () {
    console.log("Hello World");
  },
};
let copy_obj = JSON.parse(JSON.stringify(obj));

console.log(obj.func); //Hello World
console.log(copy_obj.name); // ETA
console.log(copy_obj.func); // undefined
```

JSON형태로 객체가 깊은 복사는 가능하지만 함수를 복사는 불가능했다.<br/>
이를 해결하고자 **structuredClone** 메소드를 사용하면 객체 안의 요소뿐만이 아닌 함수도 깊은 복사가 가능하다.

:::
