# this

## this란?

- 객체를 가르키는 참조 변수

```js
let x = this;
console.log(x); //window Object
```

:::tip
어떤 객체의 메소드가 아닌 단독 호출되는 함수의 this는 **전역공간을 참조**
:::

## 함수 호출 방식

### 일반 함수

```js
function func() {
  "use strict"; //엄격모드
  return this;
}

console.log(func());
//use strict가 있다면 undefined
//use strict없다면 window객체
```

```js
function a() {
  console.log(this); // window
  function b() {
    console.log(this); // window
  }
  b();
}
a();
```

:::tip
**객체를 생성하지 않은 일반 함수에서는 this가 의미 없다.**<br/>
일반이던 중첩이던 this에는 전역 객체가 바인딩이 된다.<br/>
**어떤 함수라도 일반 함수로 호출되면 전역 객체가 바인딩 되는 것을 기억**

:::

:::caution

`일반 함수 호출은 모두 전역 객체를 가리킬까?`

모두 전역 객체 `window`를 가리킨다고 할 수는 없다.<br/>
함수 중에는 `map`과 `forEach`와 같이 인자로 명시적으로 `this` 값을 지정하는 함수(메서드)도 있기 때문<br/>
따라서 무조건 일반 함수로써 호출되었다고 해서 `window`로 단정 짓기 전에 어디서 어떻게 함수가 호출되었는지 확인을 해야한다.

```js
const arr = ["apple", "banana", "graph"];

// this가 window를 가리키지 않음
arr.map(
  function () {
    console.log(this);
  },
  { a: 1 }
);

// 출력
// { a: 1 }
// { a: 1 }
// { a: 1 }
// (3) [undefined, undefined, undefined]
```

:::

### 메서드 호출

```js
let fruit = {
  // 프로퍼티 : 객체 고유의 상태 데이터
  name: "Apple",
  price: 500,

  // 'this'는 '현재 객체'를 가리킵니다.
  fruitName: function () {
    alert(this.name);
  },
};

fruit.fruitName();//Apple
```
