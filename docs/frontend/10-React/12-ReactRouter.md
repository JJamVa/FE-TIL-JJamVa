# React Router

## React Router 설치

- 해당 React 폴더 경로에서 `npm install react-router-dom` 설치

## BrowserRouter, Routes, Route

- `BrowserRouter`: 브라우저의 URL의 라우팅을 관리하며, React Component를 연결
- `Routes`: 브라우저의 path경로와 매칭되는 모든 자식 Route Component를 관리
- `Route`: path의 경로가 일치한다면 element의 해당하는 Component의 UI로 렌더링

:::info

#### BrowserRouter 와 HashRouter

- `BrowserRouter`:
  - 페이지를 라우팅할 때 URL에 실제로는 html파일이 없지만 존재하는 것처럼 폴더를 이동
  - 읽기 쉽고 직관적인 URL을 제공
  - ex) `http://example.com/route`
- `HashRouter`:
  - URL주소에 `#`(fragment identifier)을 넣어 컨텐츠 안에서의 특정한 위치를 표현
  - 브라우저에 호환성 문제가 거의 없으며, 서버 환경에도 문제가 발생하지 않는다.
  - 정적 웹사이트를 개발할 때 유용하다.
  - ex) `http://example.com/#/route`

:::

### Route 구현

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function Practice() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>Hello JJamVa</h1>;
}

function One() {
  return <h1>1. See you again</h1>;
}

function Two() {
  return <h1>2. GoodBye</h1>;
}

export default Practice;
```

:::note

#### 주소: http://localhost:3001/

![image](https://github.com/JJamVa/JJamVa/assets/80045006/993ff355-9c0b-4eb3-9023-31f03616d7a0)

#### 주소: http://localhost:3001/one

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f945ef1c-2f6f-4d8e-af1f-a4bb343a2301)

#### 주소: http://localhost:3001/two

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0aff237c-f0d9-4cb3-94a3-0c6a0af2d59e)

위 코드에 대한 결과 이미지이다.<br/>

```jsx
<Route path="/" element={<Index />} />
<Route path="/one" element={<One />} />
<Route path="/two" element={<Two />} />
```

첫 Route Component의 path가 `'/'`의 의미는 처음 React 프로그램을 실행시켰을 때,<br/>
Index Component화면을 호출하여 렌더링 시킨다.<br/>
두번째, 세번째 Route Component의 Path는 초기 주소창에서 `/one` 또는 `/two`를 추가적으로 입력하였을 때,<br/>
호출되는 Component의 화면을 렌더링한 것이다.

:::

### Route를 통해 props를 전달

- `Route`에 사용되는 Component에 props를 전달하여 사용

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function Practice() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="JJamVa" />} />
        <Route path="/two" element={<Two greeting="JJamHa" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>Hello JJamVa</h1>;
}

function One(props) {
  return <h1>1. See you again {props.name}</h1>;
}

function Two(props) {
  return <h1>2. GoodBye {props.greeting}</h1>;
}

export default Practice;
```

:::note

#### 주소: http://localhost:3001/

![image](https://github.com/JJamVa/JJamVa/assets/80045006/993ff355-9c0b-4eb3-9023-31f03616d7a0)

#### 주소: http://localhost:3001/one

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d4d29af3-03f0-45b5-b746-2682605d82e6)

#### 주소: http://localhost:3001/two

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b264b602-4a2c-4e90-9bce-b8b22f842b9b)

동작방식은 같지만 Component의 props만 전달하면 된다.

:::

### Link
- 클릭하면 애플리케이션 내에서 새로운 경로로 이동하는 링크를 생성하는 Component
- 주소만 바꿀뿐, 페이지를 새로 불러오진 않는다.
