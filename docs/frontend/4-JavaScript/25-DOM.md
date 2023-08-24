# DOM(Document Object Model)

## DOM이란?

- HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할
- 요소와 속성, 콘텐츠를 표현하는 단위(`HTML 태그`)를 `노드(node)`

```html title="HTML코드"
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>Practice</title>
  </head>
  <body>
    <div>
      <h1>hello</h1>
    </div>
    <h2>My name is JH</h2>
  </body>
</html>
```

```js
console.log(document.head); // <head><title>Practice</title></head>
console.log(document.body); // <body><h1>hello</h1><h2>My name is JH</h2></body>
console.log(document.head.childNodes); // NodeList(3) [text, title, text]
console.log(document.body.childNodes[1]); // <div><h1>hello</h1></div>
//childNodes에서 제일 위에 순서는 1번부터다.
console.log(document.body.childNodes[1].tagName); // DIV
console.log(document.body.innerText); // 'hello\nMy name is JH'
console.log(document.body.childNodes[2].data); // '\n    '
```

## API란?

- Application Programming Interface

## DOM 트리에 접근하는 메소드

- document 객체를 통해 HTML 문서에 접근이 가능.
- document는 브라우저가 불러온 웹페이지를 나타낸다.
- DOM 트리의 진입점 역할을 수행

### `getElementById()`

- 해당하는 Id를 가진 요소에 접근

```html title="HTML코드"
<!-- 메소드의 공통 HTML -->
<div class="wrapper">
  <h1 id="main">hello</h1>
  <h2 id="sub">My name is JH</h2>
  <p class="write content">FE</p>
  <span class="content">Fighting</span>
</div>
```

```js title="JS코드"
// 변수 하나당 하나의 Id의 값만 가져올 수 있음.
let id1 = document.getElementById("main");
let id2 = document.getElementById("sub");
let id3 = document.getElementById("write");
console.log(id1); // <h1 id="main">hello</h1>
console.log(id2); // <h2 id="sub">My name is JH</h2>
console.log(id3); // Error
```

### `getElementsByTagName()`

- 해당하는 모든 요소에 접근

```html title="HTML코드"
<div class="wrapper">
  <h1 id="main">hello</h1>
  <h2 id="sub">My name is JH</h2>
  <h2>Hello world</h2>
  <p class="write content">FE</p>
  <p class="content">Fighting</p>
</div>
```

```js title="JS코드"
let tag1 = document.getElementsByTagName("h1");
console.log(tag1); // HTMLCollection [h1#main, main: h1#main]

let tag2 = document.getElementsByTagName("h2");
console.log(tag2); // HTMLCollection(2) [h2#sub, h2, sub: h2#sub]
// h2#sub는 h2태그 안에 id가 sub라는 의미이다.
```

### `getElementsByClassName()`

- 해당하는 클래스를 가진 모든 요소에 접근

```html title="HTML코드"
<div class="wrapper">
  <h1 id="main">hello</h1>
  <div class="box">
    <p class="write content">FE</p>
  </div>
  <p class="content">Fighting</p>
</div>
```

```js title="JS코드"
let class1 = document.getElementsByClassName("box");
console.log(class1); // HTMLCollection [div.box]
// div.box는 div태그의 box라는 이름을 가진 class속성이 있다는 의미

let class2 = document.getElementsByClassName("content");
console.log(class2); // HTMLCollection(2) [p.write.content, p.content]
```

### `querySelector()`

- CSS 선택자로 단일 요소에 접근
- 태그, class, id 뿐만이 아닌 CSS 선택자도 가능

```html title="HTML코드"
<div class="wrapper">
  <h1 id="main">hello</h1>
  <h2>world</h2>
  <div class="box">
    <p class="write content">FE</p>
  </div>
  <div class="box">
    <p id="last" class="write content">Fighting</p>
  </div>
</div>
```

```js title="JS코드"
let query1 = document.querySelector("h1");
console.log(query1); //<h1 id="main">hello</h1>

let query2 = document.querySelector(".box");
console.log(query2); //<div class="box"><p class="write content">FE</p></box>
// .box안의 내부요소도 가져온다.

let query3 = document.querySelector(".box .write");
console.log(query3); //<p class="write content">FE</p>
// .box .write는 2가지가 존재. 최상단 값만 반환

let query4 = document.querySelector("#last");
console.log(query4); //<p id="last" class="write content">Fighting</p>
```

### `querySelectorAll()`

- CSS 선택자로 여러 요소에 접근

```html title="HTML코드"
<div class="wrapper">
  <h1 id="main">hello</h1>
  <h2>world</h2>
  <div class="box">
    <p class="write content">FE</p>
  </div>
  <div class="box">
    <p id="last" class="write content">Fighting</p>
  </div>
</div>
```

```js title="JS코드"
let query1 = document.querySelectorAll(".box");
console.log(query1); // NodeList(2) [div.box, div.box]

let query2 = document.querySelectorAll(".box .write");
console.log(query2); // NodeList(2) [p.write.content, p#last.write.content]
```

:::info

### HTMLCollection와 NodeList의 차이

getElementBy 형태와 querySelectorAll은 조건에 맞는 모든 요소를 반환<br/>
출력 결과 앞에 HTMLCollection나 NodeList를 출력한 경우도 있다.<br/>

#### **HTMLcollection**

- HTML태그만 포함
- 실시간으로 업데이트. 즉, 객체의 각 속성에 대한 변경 사항이 즉시 반영

#### **NodeList**

- DOM요소(text, 주석)등 모두 포함
- 객체에 대한 변경 사항은 즉시 반영되지 않는다.

:::