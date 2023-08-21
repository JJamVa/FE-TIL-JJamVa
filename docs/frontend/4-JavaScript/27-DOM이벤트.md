# DOM 이벤트

## 이벤트 객체

- 이벤트 핸들러에는 이벤트와 관련된 정보를 가지고 있는 매개변수(event)가 전송

```html title:"HTML코드"
<ol>
  <li><button class="btn" type="button">1</button></li>
  <li><button type="button">2</button></li>
</ol>
```

```js title:"JS코드"
const btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
  console.log(event);
  // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
});
```

## 이벤트 흐름

- 이벤트가 발생하고 DOM 트리에서 이벤트가 수신되는 순서

### `캡처링 단계`

- 순서는 window객체부터 시작해서 document, body 순서로 DOM 트리를 따라 내려간다.<br/>
- 이때 이벤트 탐색 과정 중 만나는 이벤트 리스너를 실행

### `버블링 단계`

- 캡처링 과정이 끝나면 캡처링 단계의 역순으로 올라가 모든 이벤트 리스너를 실행

### `이벤트 전파(event propagation)`

- 이벤트 리스너가 순차적으로 실행되는 것을 의미

```html title="HTML코드"
<article class="wrapper">
  <button class="btn" type="button">버튼</button>
</article>
```

```js title="이벤트 흐름 JS코드"
const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".btn");
btn.addEventListener(
  "click",
  (event) => {
    console.log("btn capture!");
  },
  true
); // addEventListeneer() 두번째 Argument값은 캡처링 옵션이다.

window.addEventListener(
  "click",
  () => {
    console.log("window capture!");
  },
  true
);

document.addEventListener(
  "click",
  () => {
    console.log("document capture!");
  },
  true
);

wrapper.addEventListener(
  "click",
  () => {
    console.log("wrapper capture!");
  },
  true
);

btn.addEventListener("click", (event) => {
  console.log("btn bubble!");
});

wrapper.addEventListener("click", () => {
  console.log("wrapper bubble!");
});

document.addEventListener("click", () => {
  console.log("document bubble!");
});

window.addEventListener("click", () => {
  console.log("window bubble!");
});
```

:::note

### 버튼 클릭 시 출력 결과

![image](https://github.com/JJamVa/JJamVa/assets/80045006/fff9475f-3f7f-4849-9611-2b8c6f6dc7c6)

### 버튼 이외에 클릭 시 출력 결과

![image](https://github.com/JJamVa/JJamVa/assets/80045006/420632ac-644a-452b-93a7-e15c38863686)

### 그림으로 표현

![image](https://github.com/JJamVa/JJamVa/assets/80045006/55fb512c-561e-4fcb-8fda-6628313d3232)

:::

## 이벤트 target, currentTarget 및 이벤트 위임

- `target`:

  - 이벤트가 발생한 진원지의 정보가 있다.
  - 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 가능

- `currentTarget`
  - 이벤트 리스너가 연결된 요소가 참조

```html title:"HTML코드"
<article class="parent">
  <button class="btn" type="button">버튼1</button>
  <button type="button">버튼2</button>
  <button type="button">버튼3</button>
</article>
```

```js title:"JS코드"
const parent = document.querySelector(".parent");
parent.addEventListener("click", function (event) {
  console.log(event.target); //현재 클릭하고 있는 버튼에 대한 요소를 출력
  console.log(event.currentTarget); //현재 등록된 요소 출력
  if (event.target.nodeName === "BUTTON") {
    event.target.innerText = "버튼2";
    // article요소안에 버튼 아무거나 클릭 시, 내용이 "버튼2"로 내용이 변경
  }
});
```

:::note

### target의 nodeName Property

addEventListener에서 Callback함수의 Parameter(event)가 있을 경우<br/>
event객체에 target 속성안에 nodeName이라는 속성이 있다.<br/>
nodeName에는 어떤 HTML태그안에 속해있는지 확인이 가능하다.<br/>
대신에 nodeName에 대한 존재를 확인하기 위해서는 HTML에 태그를 **대문자 문자열**로 확인을 해야한다.<br/>

:::

## 이벤트의 this

- 이벤트 리스너 함수 내부에서의 this 값은 이벤트가 연결된 노드를 참조

```html title:"HTML코드"
<div class="wrapper">
  <button class="btn-first" type="button">버튼1</button>
  <button type="button">버튼2</button>
</div>
```

```js title:"JS코드"
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function (event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(this); // event.currentTarget값고 똑같은 값을 가르키고 있다.
});
```

:::caution
위의 코드에서 this는 event.currentTarget 속성 값과 비슷하다.

이벤트 리스너 함수를 **화살표 함수로 쓴다면 this가 가리키는 대상이 달라진다**<br/>
화살표 함수의 this는 자신을 둘러 싸고 있는 **외부 환경의 this 값을 참조**
:::

## 이벤트 동작 취소

- `preventDefault()`: 브라우저의 기본 **이벤트 동작을 취소**

```html title:"HTML코드"
<form action="">
  <button type="submit" class="submit">제출</button>
</form>
```

```js title:"JS코드"
const submit = document.querySelector(".submit");
submit.addEventListener("click", (event) => {
  console.log("clicked");
  event.preventDefault();
});
```

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/0d57dead-f907-4f4b-84b2-0fdca8e3283c)

`event.preventDefault()`가 없을 경우 submit을 눌러보면 위와 같이 출력이 된다.<br/>
`console.log("clicked")`가 있음에도 출력이 되지않는다.<br/>
submit의 기능이 동작될 경우 동작과 동시에 페이지를 다시 로드하기 때문에 출력이 되지 않는 것처럼 보인다.

![image](https://github.com/JJamVa/JJamVa/assets/80045006/026b8f28-57b1-4fdc-bba8-cbf9147f8b97)

`event.preventDefault()`가 없을 경우 submit을 눌러보면 버튼 누른 횟수만큼 출력이 된다.<br/>
즉, 버튼을 누르지만 submit에 대한 이벤트 처리를 제어하고 있기 때문에 이벤트가 발생하지 않는다.
:::

## 이벤트 전파 차단

- `stopPropagation()`: `preventDefault()`로 이벤트 동작을 취소를 했지만 이벤트 전파를 막지 못한다. 이를 해결하기 위해 사용

```html title:"HTML코드"
<form action="">
  <button type="submit" class="submit">제출</button>
</form>
```

```js title:"JS코드"
const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
  console.log("클릭!");
  event.preventDefault();
  event.stopPropagation();
});

document.body.addEventListener("click", () => {
  console.log("이벤트 발생!!!!!!");
});
```

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/80836410-2bd2-49fd-a6da-6be318141190)

`event.stopPropagation()`이 없을 경우 위와 같이 출력이 된다.<br/>
이유는 이벤트 처리 순서 때문에 저렇게 출력된다.<br/>
`캡처링 단계`에서 submit에 대해서 동작을 부여하였기 때문에 이벤트 리스너가 동작을 한다.<br/>
`버블링 단계`에서 버튼 영역이 body위에 있기 때문에 이벤트 리스너가 동작을 한다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f94339fb-d784-4e07-9244-fece0fea8b7d)

`event.stopPropagation()`이 있을 경우 위와 같이 출력이 된다.<br/>
`캡처링 단계`에서는 위와 똑같이 동작을 하지만 `버블링 단계`에서 body에 대해서 동작을 하지 않는다.<br/>
즉, 버튼에 대하여 동작을 캡처링 단계에서 처리하고 버블링 단계에서 버튼과 같은 영역에 대해서 이벤트를 제어한다는 의미이다.
:::

:::caution

```js title:"JS코드"
const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
  console.log("클릭!");
  event.preventDefault();
  event.stopPropagation();
});

document.body.addEventListener(
  "click",
  () => {
    console.log("이벤트 발생!!!!!!");
  },
  true
);
```

위에서 body에 대하여 캡처링 옵션을 true로 주었을 때, 어떤 결과가 나올까?<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4c40f731-f8cc-431c-97d5-e5d614dfc3c4)

이벤트 처리 순서에서 `캡처리 단계`에서 버튼보다는 body가 더 최우선이다.<br/>
즉, submit에 `event.stopPropagation()`가 있더라도 캡처링 단계에서 **상위 요소**가 있을 경우 출력이 되는 것을 확인할 수 있다.<br/>
body는 `캡처링 단계`에서 이미 이벤트 리스너가 동작하였기 때문에 **submit의 event.stopPropagation() 관계 없이** `버블링 단계`에서 실행되지 않는다.

:::
