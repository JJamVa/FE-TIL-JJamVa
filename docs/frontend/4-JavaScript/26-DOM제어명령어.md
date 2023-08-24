# DOM 제어 명령어

## 이벤트 삽입(`addEventListener`)

- `target.addEventListener(type, listener)`
  - type : `click`, `mouseover` , `wheel` 등 다양한 type이 존재
  - listener: 이벤트에 대한 정보를 함수로 표현

```html title="HTML코드"
<button class="btn">클릭</button>
```

```js title="JS코드"
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

```html title="HTML코드"
<button>클릭</button>
```

```js title="JS코드"
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

```html title="HTML코드"
<button class="btn clicked">클릭</button>
```

```js title="JS코드"
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

```html title="HTML코드"
<button>클릭</button>
```

```js title="JS코드"
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

```html title="HTML코드"
<button class="btn">클릭</button>
```

```js title="JS코드"
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(btn.classList.contains("btn"));
  console.log(btn.classList.contains("clicked"));
});
// 버튼 클릭 시
// true false
```

## 요소 제어

- HTML태그와 안의 요소를 생성, 위치 설정, 제거가 가능

### `createElement()`, `createTextNode()` ,`appendChild()`, `removeChild()`

- `createElement("HTML태그")` : HTML태그를 생성
- `createTextNode("text")` : 내용(text)을 생성
- `appendChild('요소 혹은 태그')` : 요소나 텍스트를 선택한 요소의 자식으로 삽입
- `removeChild('요소 혹은 태그')` : 요소나 텍스트가 선택한 요소안에 존재한다면 삭제

```html title="HTML코드"
<button class="btn">1번 태그</button>
<button class="btn">2번 텍스트</button>
<button class="del-btn">태그 삭제</button>
<button class="del-btn">텍스트 삭제</button>
<ul></ul>
```

```js title="JS코드"
const btn = document.querySelectorAll(".btn"); // 1번 태그, 2번 텍스트
const remove = document.querySelectorAll(".del-btn"); // 태그 삭제, 텍스트 삭제 버튼
const ul = document.querySelector("ul"); //ul 태그를 지목

const li = document.createElement("li"); //<li>태그 생성
const text = document.createTextNode("TEXT내용추가!!"); //Text

btn[0].addEventListener("click", () => {
  ul.appendChild(li); //<ul>태그 안에 자손으로 <li>태그 삽입
});

btn[1].addEventListener("click", () => {
  ul.appendChild(text); //<ul>태그안에 텍스트를 삽입 (순수한 텍스트 (HTML 태그x))
});

remove[0].addEventListener("click", () => {
  ul.removeChild(li); //<ul>태그 안에 <li>태그 삭제
});

remove[1].addEventListener("click", () => {
  ul.removeChild(text); //<ul>태그안에 동일한 텍스트 내용 삭제
});
```

### `insertBefore()`

- `parentElement.insertBefore(target, location)`: target요소를 parentElement의 자식인 location 위치 앞 배치

```html title="HTML코드"
<div id="parent">
  <p id="child">Hello World</p>
</div>
```

```js title="JS코드"
var p = document.createElement("span");
var child = document.getElementById("child");
var parent = document.getElementById("parent");
parent.insertBefore(p, child);
```

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/29354fdb-e717-4894-bcd4-b153108ef184)

id가 'parent'인 태그 내부, id가 'child'앞에 `<p>`가 생성된 것을 확인이 가능하다.

:::

## element, text 노드 생성 및 추가

- DOM을 이용하여 요소 안의 값에 접근하여 값을 가져오거나 변경이 가능

### `textContent`, `innerHTML`, `innerText` , `outerHTML`

- `textContent`: 노드의 **텍스트 콘텐츠를 표현**
- `innerHTML`: 요소 내에 포함된 **HTML 태그 및 내용을 가져오거나 설정**
- `innerText`: 요소의 **렌더링된 텍스트 콘텐츠만 표현** (사람이 읽을 수 있는 요소)
- `outerHTML`: 요소를 포함하여 **HTML 태그 및 내용을 가져오거나 설정**

```html title="HTML코드"
<p></p>
<input type="text" />
```

```js title="JS코드"
const p = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener("input", function () {
  p.textContent = input.value;
  //input.value에서 **value는 입력받은 값에 대해서만 사용 가능**
});

p.innerText = "<strong>I'm Strong!!</strong>"; //<p>태그 내부에 작성된 문자열을 그대로 표현
//출력: <strong>I'm Strong!!</strong>
p.innerHTML = "<strong>I'm Strong!!</strong>"; //<p>태그 내부에 새로운 HTML 태그 및 텍스트 표현
//출력: I'm Strong!!
p.outerHTML = "<div></div>"; //<p>태그도 포함하여 새롭게 표현
//출력:
```

## 더 정밀하게 배치

### `insertAdjacentHTML`

- 요소 노드를 상세하게 배치
- `insertAdjacentHTML('위치', 'HTML태그 및 Text')`의 위치 종류

  - `beforebegin`: 여는 태그의 앞
  - `afterbegin`: 여는 태그의 뒤
  - `beforeend`: 닫는 태그의 앞
  - `afterend`: 닫는 태그의 뒤

```html title="HTML코드"
<p class="title">JJamVa</p>
```

```js title="JS코드"
const p = document.querySelector("p");

p.insertAdjacentHTML("beforebegin", "<span>안녕하세요!</span>");
p.insertAdjacentHTML("afterbegin", "<span>제 이름은 </span>");
p.insertAdjacentHTML("beforeend", "<span>입니다.</span>");
p.insertAdjacentHTML("afterend", "<span>잘 부탁 드립니다.</span>");
```

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/feb369e1-2230-4871-9f80-c99fe69889fb)

`beforebegin`, `afterend`는 `<p>`의 영역의 외부이기 때문에 같은 라인에 작성되지 않았다.<br/>
`afterbegin`, `beforeend`는 `<p>`의 영역안이기 때문에 같은 라인에 작성 되었다.
:::

## 노드 탐색

- `.firstElementChild` : 지목된 요소의 자식 중 첫번째
- `.firstChild`
- `.lastElementChild`: 지목된 요소의 자식 중 마지막
- `.lastChild`
- `.nextElementSibling`: 지목된 요소의 기준으로 다음 형제 요소
- `.previousSibling`: 지목된 요소의 기준 이전 형제 노드
- `.children`: 지목된 요소의 기준으로 모든 직계자식
- `.parentElement`: 지목된 요소의 부모 요소

```html title:"HTML코드"
<article>
  <!-- 주석 -->
  <div class="content">
    <h3>안녕하세요!!</h3>
    nice to meet you
    <p>my name is</p>
    Hello World
    <strong>Thanks</strong>
    <div>
      <p>bye~</p>
    </div>
  </div>
  <span>끝!</span>
</article>
```

```js title:"JS코드"
const content = document.querySelector(".content");

console.log(content.firstElementChild); // 자식 중 첫번째
//<h3>안녕하세요!!</h3>

console.log(content.lastElementChild); // 자식 중 마지막
// <div>
//     <p>bye~</p>
// </div>
// class content 기준에서 div태그가 마지막 요소이다.
// div태그안에 p태그가 존재하기 때문에 같이 반환

console.log(content.nextElementSibling); // 현재 요소의 기준으로 다음 형제 요소
// <span>끝!</span>

console.log(content.previousSibling); // 현재 요소의 기준 이전 형제 노드
// #text  text.data:"\n        "
// 공백없이 인접한 태그일 경우 반환
// <-- 주석 -->위치에서 한줄 띄워지고 공백만큼 추가가 되어 추가가 되었다.

console.log(content.children); // 현재 요소의 기준으로 모든 직계자식
// HTMLCollection(4) [h3, p, strong, div]

console.log(content.parentElement); // 현재 요소의 부모 요소
// <article>...</article>
// article영역 전부를 반환
```