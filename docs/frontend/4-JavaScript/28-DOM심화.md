# DOM응용 및 심화

## SVG와 관련된 메소드

### getTotalLength()

- SVG파일의 총 길이를 가져오는 메소드
- `stroke-dasharray`와 `stroke-dashoffset`에 길이에 영향을 받지 않는다.

## Scroll을 이용한 View의 길이를 구하는 메소드

### scrollTop

- 현재 스크롤의 위치값을 반환

:::caution
전체 화면의 크기를 5000px이라고 두었을 때, 스크롤을 최대한 내려보면 5000px이 아닌 4200px이 나온다.<br/>

```css
body {
  background-color: skyblue;
  height: 5000px;
}
```

```js
const scroll = document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  const scroll = document.documentElement.scrollTop;
  console.log(scroll);
});
```

body의 높이는 5000px이며, 스크롤의 시작점은 0이다.<br/>
스크롤을 제일 밑까지 내렸을 경우, scroll의 변수값은 5000이 아닌 4054px이 나온다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/49e8a7fe-17f5-4d38-9d39-9fe58e0f3427)

빨간색은 **body태그의 높이 5000px**을 의미하며, 초록색은 보고있는 **화면의 Viewport**를 의미<br/>
`scrollTop` 지정한 요소의 제일 상단에서 시작한다.<br/>
즉, window객체를 지목하기 때문에 최상단에 표현이 된다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/040e3aac-46a0-4886-95bd-c84b5e263532)

결국 scroll을 전부 내렸다해도 scrollTop은 Viewport의 상단을 지목하고 있다.<br/>
결론은 body의 5000px에서 스크롤 전부내려도 scrollTop은 Viewport의 상단을 지목하고 있으며,<br/>
실제 출력된 화면의 높이(Viewport)가 포함되어 있지 않기 때문에 4054px이 출력된 것이다.

:::

### scrollHeight

- 전체 스크롤의 높이 값을 반환

```css
body {
  padding: 0;
  margin: 0;
  background-color: skyblue;
  height: 5000px;
}
```

```js
const scroll = document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
  const scroll = document.documentElement.scrollHeight;

  console.log(scroll);
});
```

:::note
scroll을 출력하면 5000px이 출력된 것을 확인.<br/>
`documentElement`기준으로 scrollHeight를 측정하기 때문에<br/>
HTML내부에 요소 혹은 브라우저의 기본 margin, padding 속성으로 height가 조금 다르게 출력될 수 있다.
:::

:::tip

### `documentElement`란?

- DOM문서의 최상위 요소인 `<html>` 요소를 나타내는 속성
- document 객체의 첫 번째 자식요소
- 문서의 최상위 요소에 쉽게 접근

:::

### clientHeight

- 현재 이용자가 보고 있는 Viewport의 크기(높이)
- 브라우저의 비율에 따라 ViewPort의 크기(높이)값이 달라진다.

## DOM요소 속성 접근

- DOM을 이용하여 개개인의 요소에 접근이 가능

### style

- 접근한 요소마다 CSS속성을 삽입/삭제/변경이 가능

```css
body {
  background-color: skyblue;
}
```

```js
const body = document.querySelector("body");
body.style.backgroundColor = "red";
```

:::note
출력 결과를 보면 body태그의 background-color 속성이 red로 변경되어 출력.<br/>
JavaScript에서는 style요소 중 속성에 접근할 때, `background-color`와 동일하게 작성이 불가능.<br/>
CSS속성이 `-`로 작성되어 있는 경우, JavaScript에서는 `-`의 바로 다음 글자를 **대문자로 표기** (카멜케이스 표기법)
:::

## 키보드 이벤트

- 키보드 입력 이벤트가 발생 되었을 때 사용하는 속성

```js
const link = document.querySelector("a");

link.addEventListener("keydown", (e) => {
  console.log(e);
});
```

:::note
키보드의 tap(앞으로), shift+tap(뒤로)을 이용하여 `아이콘 focus`가 가능.

### 키를 눌러 요소에 접근

![image](https://github.com/JJamVa/JJamVa/assets/80045006/14f172f3-0932-426f-b78a-91fe950fdd83)<br/>
tap을 이용하여 a요소에 접근하여 출력시키면 `KeyboardEvent객체` 나온다.<br/>
요소 기준으로 눌러진 키가 tap이기 때문에 key속성은 `Tap`으로 나온다.<br/>
이외에 Esc는 `Escape`, space는 `' '`등 입력에 따라 key속성 값이 달라진다.

### 요소에 shift를 눌렀을 때

![image](https://github.com/JJamVa/JJamVa/assets/80045006/12e5f34f-d4fa-4117-8588-3bce05b079d7)<br/>
해당 요소에 shift키를 누를 경우 key속성이 `Shift`로 출력된다.<br/>
동시에 `shiftkey`속성이 true인 것을 확인

:::

:::info

### `keyup`와 `keydown`의 차이점

- `keyup`: 키를 누르고 **뗀 상태**
- `keydown`: 키를 처음 **눌렀을 때 상태**

:::
