# DOM 제어 명령어

## 이벤트 삽입(`addEventListener`)

- `target.addEventListener(type, listener)`
  - type : `click`, `mouseover` , `wheel` 등 다양한 type이 존재
  - listener: 이벤트에 대한 정보를 함수로 표현

```html
<button class="btn">클릭</button>
```

```js
const btn = document.querySelector(".btn");
let count = 0;

btn.addEventListener("click", function () {
  console.log(`${++count}번 클릭`);
});

// 0번 클릭, 1번 클릭 ... (클릭 누를 때마다 출력)
```

## 클래스 제어

### `clssList.add()`

- 태그에 class속성을 생성

```html
<button>클릭</button>
```

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.classList.add("btn");
  //   btn.classList.add("btn", "clicked")// 한번에 여러가지 class속성도 넣을 수 있다
});
// 버튼을 클릭 시
// <button class="btn">클릭</button>으로 html이 변경됨
```

### `classList.remove()`

- 선택된 태그의 class 속성을 지워준다.

```html
<button class="btn clicked">클릭</button>
```

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.classList.remove("btn", "clicked"); //한번에 여러 class 속성 값 제거
});
// 버튼을 클릭 시
// <button class>클릭</button>으로 html이 변경됨
// class의 속성은 그대로 남아있다. (속성 값은 제거)
```

### `clssList.toggle()`

- class 속성명이 존재하지 않을 경우 삽입, 존재할 경우 삭제 (on/off)

```html
<button>클릭</button>
```

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.classList.toggle("btn");
});
// 버튼을 클릭 시
// <button class="btn">클릭</button>
// 다시 버튼을 클릭 시
// <button class>클릭</button>
```

### `classList.contains()`

- class 속성명이 존재하는지 확인.
- 반환값은 `true`, `false`

```html
<button class="btn">클릭</button>
```

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(btn.classList.contains("btn"));
  console.log(btn.classList.contains("clicked"));
});
// 버튼 클릭 시
// true false
```