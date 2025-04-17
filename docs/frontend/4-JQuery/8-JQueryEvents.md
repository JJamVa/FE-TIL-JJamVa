# JQuery Events

## 마우스 이벤트

### click

- 눌렀을 때, 이벤트가 발생

```html
<button>버튼 클릭!</button>
```

```js
$("button").click(function (e) {
  console.log("출력: " + e.target.textContent);
  //출력: 버튼 클릭!
});

// $('button').on('click', function (e) {
//   console.log("출력: " + e.target.textContent);
// })
```

### hover

- 요소에 마우스를 올렸을 때, 이벤트 발생

```html
<button>버튼 Hover!</button>
```

```js
$("button").mouseenter(function (e) {
  console.log("출력: " + e.target.textContent);
  //출력: 버튼 Hover!
});

// $('button').on('mouseenter', function (e) {
//   console.log("출력: " + e.target.textContent);
// })
```

## 키보드 이벤트

### keyup

- 키를 누르고 **뗀 상태**

```html
<button>버튼 keyup</button>
```

```js
$("button").keyup(function (e) {
  console.log(e.key);
  //현재 누르고 있는 키 값을 출력
});
```

### keydown

- 키를 처음 **눌렀을 때 상태**

```html
<button>버튼 keydown</button>
```

```js
$("button").keydown(function (e) {
  console.log(e.key);
  //현재 누르고 있는 키 값을 출력
});
```

:::tip
keydown 이벤트에서 키를 꾹 누르고 있으면 계속 이벤트 발생
:::
