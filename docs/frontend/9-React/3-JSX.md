# JSX

## JSX란?

- JavaScript XML의 약자로, 리액트에서 사용하는 특수한 문법
- HTML과 매우 유사하지만 엄연히 다른 언어
- HTML을 사용해 UI컴포넌트를 만드는것 같은 편리한 개발 경험을 제공
- UI를 렌더링할 수 있어서, UI 코드의 가독성과 유지보수성

## JSX문법

### 컴포넌트의 최상위 부모 요소는 1개

- `<div>`, `<>` 태그를 사용해서 최상단 태그를 생성
- return()안에 필요한 태그가 단 한개일 경우 최상위 부모 요소를 작성할 필요 없음

```jsx
// return안 자식 요소가 2개이상일 경우
function App() {
  return (
    <div>
      <h1>안녕</h1>
      <h1>반가워</h1>
      <h2>조심히 잘가!</h2>
    </div>
  );
}

//return 안에 자식요소가 1개일 경우
function App() {
  return <h1>반나서 반가워</h1>;
}
```

:::note

#### JSX에서 왜 return()에 최상위 부모 요소는 1개이여만 할까?

React의 렌더링 동작과 가상 DOM비교 및 업데이트 작업 때문이다.<br/>
React에서 UI를 업데이트 할 때, 가상 DOM을 사용하여 변경 전과 변경 후를 비교하여<br/>
변경된 부분만 실제 DOM에 반영하기 때문이다

:::

### 주석

```js
// 일반 js영역에서 //로 주석을 표현
{
  /* 주석은 이렇게 쓰는겁니다. */
}
```

### 태그에 클래스 넣기 + 스타일 적용

- JSX 속성 이름은 카멜 케이스(CamelCase)로 구분
  - ex) background-color => backgroundColor
- 문자를 제외한 속성값은 중괄호 `({})`를 사용
- `true`값을 갖는 속성은 속성 이름만으로 표현, false `{}`(중괄호)를 사용.
- `class`속성은 `className`으로 표기
  - 기존 JavaScript의 class와 CSS의 class와 중첩되기 때문
- inline style은 **객체 형태(key:value)로 사용**
- `{}` 중괄호 안에는 JavaScript 문법 중 **표현식**은 사용가능

```js
function App() {
  const bool = true;
  const greeting = "안녕";
  const number = 1;
  const css_style = { backgroundColor: "skyblue", color: "white" };
  return (
    <>
      <h1 style={css_style}>
        {/* style 안에 속성을 변수명으로 선언하여 삽입 가능 */}
        {greeting} {number}번
      </h1>
      {/* 숫자의 값은 {}를 사용*/}
      <h2 style={{ backgroundColor: "red" }}>안녕 {number + 1}번</h2>
      {/* CSS 속성 작성은{{}}으로 작성, 속성명이 -으로 구분되어 있는 경우 CalmelCase로 작성*/}
      {/* inline style을 작성하였음으로 객체형태로 표현*/}
      <div className="newClass" />
      {/* CSS의 class를 className=""으로 작성 */}
      <input type={bool ? "button" : "checkbox"} />
      {/* {} 중괄호안에 표현식 사용 가능  */}
    </>
  );
}
```

### map 메소드를 이용하여 Component 사용하기

- map메소드 내부에 Component 및 HTML태그를 이용하여 태그 생성

```jsx
import React from "react";
import { ReactDOM } from "react";
import "./App.css";

const list = [
  { no: 1, area: "서울", visited: true },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function App() {
  let time = new Date();
  function Visited() {
    const array = list.map((element, index) => {
      return (
        <div>
          {element.no}. {element.area}에 방문을{" "}
          {element.visited ? "했습니다." : "하지 않았습니다."}
        </div>
      );
    });

    return <>{array}</>;
  }
  return (
    <>
      <Visited></Visited>
    </>
  );
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cfbb043d-3cff-43e1-b018-03d7e4b48445)

:::caution
기능적인 구현에 있어서 문제는 없다.<br/>
브라우저의 개발자 모드에 들어가보면 오류가 나타나있다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5c09f401-281f-4c35-985c-8c64f1f2e2c2)

```jsx
const array = list.map((element, index) => {
  return (
    <div key={index}>
      {element.no}. {element.area}에 방문을{" "}
      {element.visited ? "했습니다." : "하지 않았습니다."}
    </div>
  );
});
```

map메소드를 이용하여 HTML태그 및 Component를 함께 사용시, 태그안에 **key**라는 속성을 부여해야 에러를 지울 수 있다.<br/>
key 속성은 React가 요소들을 식별하는 데 도움을 주는데 사용<br/>
어떤 요소가 추가, 삭제, 수정되었는지 효율적으로 판별하기가 좋다.

:::
