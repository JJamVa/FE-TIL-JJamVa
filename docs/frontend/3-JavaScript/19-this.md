# this

## this란?

- 객체를 가르키는 참조 변수
- `this`는 동적으로 결정
- `this`의 값은 함수가 어떻게 호출이 되는지, 어떤 방식으로 호출이 되는지에 따라 가르키는 대상이 다르다.

```js
let x = this;
console.log(x); //window Object
```

:::note
**window 객체**란?<br/>
브라우저 환경의 전역공간을 의미
:::

:::tip
어떤 객체의 메소드가 아닌 단독 호출되는 함수의 this는 **전역공간을 참조**
:::

<details>
<summary>this 예제1</summary>
<div markdown="1">

```js
function Call() {
  console.log(this.name); // JJamVa
}

var name = "JJamVa";
```

:::note
window 객체 내부 중 name이 있다.<br/>
`var name`은 사실 name앞에 window의 객체가 있기 때문에 window.name = "JJamVa"가 되기 때문에<br/>
this.name은 "JJamVa"를 가르키는 것이다.
:::

```js
function Call() {
  console.log(this.n); // undefined
}

var n = "JJamVa";
```

:::note
window 객체에 n이라는 속성은 없기 때문에 undefined가 출력
:::

</div>
</details>

<details>
<summary>this 예제2</summary>
<div markdown="1">

```js
function Call() {
  console.log(this.name);
}

let obj1 = {
  name: "IronMan",
  sayName: Call,
};

obj1.sayName(); //IronMan
```

:::note
obj1의 Call함수가 sayName의 속성값이다.<br/>
obj의 sayName을 호출하면 Call함수안에 this가 obj1의 name 속성을 지목하게 된다.<br/>
그래서 출력이 IronMan인 것을 확인할 수 있다.
:::

```js
function Call() {
  console.log(this.name);
}

let obj1 = {
  name: "IronMan",
  sayName: Call(),
};

obj1.sayName; // ""
```

:::note
obj1안에 sayName이 Call()로 변경만 하였는데 출력 결과가 바뀌었다.<br/>
sayName이 Call일 경우에 obj1.sayName을 호출할 경우<br/>
**호출한 후의 시점으로 객체 위치를 참조**하여 this.name의 결과물이 반환<br/>
sayName이 Call()일 경우는 obj1.sayName 호출할 경우<br/>
**Call함수의 기준**으로 this.name의 참조된 값이 obj1의 sayName속성에 저장되기 때문에<br/>
window 객체의 name 값인 ""가 반환된 것이다.

:::

</div>
</details>

## this의 특징

- this는 함수가 **실행되는 시점**에서 참조해야할 값이 결정

```js
function Call() {
  console.log(this.name);
}

let obj1 = {
  name: "IronMan",
  sayName: Call,
};

let obj2 = {
  name: "SuperMan",
  sayName: obj1.sayName,
};

obj2.sayName(); //SuperMan
```

## this 메소드

### `call()`

- 사용할 값을 전달
- 함수에 Parameter가 있을 경우, Argument값도 전달 가능

```js
var obj1 = {
  movie: "Avatar",
  print: function (str = "") {
    console.log(this.movie + str);
  },
};

var obj2 = {
  movie: "Avengers",
};

obj1.print.call(obj1); // Avatar
obj1.print.call(obj2, " veryGood"); // Avengers veryGood
```

### `apply()`

- 사용할 값을 전달
- Argument 값을를 단일한 배열로 전달한다는것이 `call()`과의 차이점

```js
var obj1 = {
  movie: "Avatar",
  print: function (str1, str2) {
    console.log(this.movie + str1 + " & " + str2);
  },
};

var obj2 = {
  movie: "Avengers",
};

obj1.print.apply(obj2, [" Good", "Awesome"]); // Avengers Good & Awesome
```

### `bind()`

- this가 고정된 함수를 반환

```js
function Call() {
  console.log(this.movie);
}

var obj1 = {
  movie: "Avatar",
  print: Call,
};

var obj2 = {
  movie: "Avengers",
  print: Call.bind(obj1),
};

obj1.print(); // Avatar
obj2.print(); // Avatar
```

## 중첩 함수의 this

### 일반 중첩 함수의 this

```js
function a() {
  console.log(this); // window object
  function b() {
    console.log(this); // window object
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

### 일반 함수 호출은 모두 전역 객체를 가리킬까?

모두 전역 객체 **window를 가리킨다고 할 수는 없다.**<br/>
함수 중에는 `map`과 `forEach`와 같이 인자로 명시적으로 `this` 값을 지정하는 함수(메서드)도 있기 때문<br/>
따라서 무조건 일반 함수로써 호출되었다고 해서 `window`로 단정 짓기 전에 어디서 어떻게 함수가 호출되었는지 확인을 해야한다.

:::

### 기명 함수 안 중첩 익명 함수의 this

```js
let info = {
  name: "JJamVa",
  age: 25,
  a() {
    console.log(this); // {name: "JJamVa", age: 25, a: f}
    console.log(this.name); // JJamVa
    function b() {
      console.log(this); // window object
      console.log(this.name); // ""
      function c() {
        console.log(this); // window object
        console.log(this.name); // ""
      }
      c();
    }
    b();
  },
};
info.a();
```

:::note
위와 같은 경우 a함수는 info의 객체 안에 실행되는 함수이기 때문에 this가 info객체를 가르켜 출력을 한다.<br/>
반면 b함수와 c함수는 a함수의 **중첩 함수**이기 때문에 b함수와 c함수가 호출되면 window 객체를 가르킨다.
:::

<details>
<summary>객체안의 기명 함수 this 활용 예제</summary>
<div markdown="1">

```js
let info = {
  name: "JJamVa",
  age: 25,
  a() {
    console.log(this); // {name: "JJamVa", age: 25, a: f}
    console.log(this.name); // JJamVa
    const position = this;

    function b() {
      console.log(position); // {name: "JJamVa", age: 25, a: f}
      console.log(position.name); // JJamVa
      function c() {
        console.log(position); // {name: "JJamVa", age: 25, a: f}
        console.log(position.name); // JJamVa
      }
      c();
    }
    b();
  },
};
info.a();
```

:::note
위와 같은 경우는 전부 info 객체에 대한 정보를 출력하고 있다.<br/>

```js
const position = this;
```

a함수 안에 this에 대한 변수를 새로 선언하여 info 객체를 가르키고 있다.<br/>
이 변수를 통해 a함수 안에 있는 중첩 함수들도 info객체를 지목하고 있기 때문에<br/>
전부 info에 대한 정보를 출력한다.

:::

</div>
</details>

### 기명 함수 안 중첩 화살표 함수의 this

```js
let info = {
  name: "JJamVa",
  age: 25,
  a() {
    console.log(this); // {name: "JJamVa", age: 25, a: f}
    console.log(this.name); // JJamVa
    let b = () => {
      console.log(this); // {name: "JJamVa", age: 25, a: f}
      console.log(this.name); // JJamVa
      let c = () => {
        console.log(this); // {name: "JJamVa", age: 25, a: f}
        console.log(this.name); // JJamVa
      };
      c();
    };
    b();
  },
};
info.a();
```

:::tip
this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리<br/>
화살표 함수의 경우 상위 스코프의 this를 가르킨다.<br/>
이러한 방식을 **렉시컬(Lexical) 스코프**라고 한다.

:::

## Callback함수를 이용한 메소드 this

### Callback 화살표 함수의 this

```js
let obj = {
  price: 100,
};

[100, 200, 300].map((e) => e * (this.price / 100), obj); // [NaN, NaN, NaN]
[100, 200, 300].map((e) => this, obj); // [Window, Window, Window]
```

:::note

```js
[100, 200, 300].map((e) => this, obj);
```

Window가 3번 출력되었다.<br/>
이유는 **화살표 (콜백) 함수**를 사용하여 **상위 스코프를 참조**하고 있기 때문이다.<br/>
현재 코드에서 상위 스코프는 전역이기 때문에 window object를 의미하고 있다.<br/>

```js
[100, 200, 300].map((e) => e * (this.price / 100), obj);
```

this는 window object를 지목하고 있는 상태<br/>
window object안에 price라는 속성은 없기 떄문에 **undefined를 반환**<br/>
undefined와 정수가 연산을 하였기 때문에 NaN이 출력되었다.

:::

### Callback 익명 함수의 this

```js
//map안에서 익명함수로 실행
let obj = {
  price: 100,
};

[1, 2, 3].map(function (e) {
  return e * this.price;
}, obj); // [100,200,300]
```

:::note
map의 첫번째 Argument인 익명함수는 obj라는 map의 두번째 Argument인 객체를 참조하여 원본 배열의 값과 obj의 price값을 연산한다.
:::

### Callback 일반 함수의 this

```js
// 일반 함수 생성 후 map의 호출로 실행
let obj = {
  price: 100,
};

function rotate(x) {
  return x * this.price;
}

[1, 2, 3].map(rotate, obj); // [100,200,300]
```

:::note
map의 첫번째 Argument인 rotate함수에 배열 요소값을 전달한다.<br/>
map의 두번째 Argument인 obj의 객체를 참조하여 rotate함수에서의 결과 값을 반환한다.

obj와 rotate함수가 분리되었지만 map안에서 동작할 때는<br/>

```js
let obj = {
  price: 100,
  rotate: function (x) {
    return x * this.price;
  },
};
```

위와 같이 obj안에 rotate함수가 존재한다고 생각하면 된다.<br/>
그럼 this가 obj객체 안에 있기 때문에 this.price는 obj안에 있는 price값을 지목한다.

:::
