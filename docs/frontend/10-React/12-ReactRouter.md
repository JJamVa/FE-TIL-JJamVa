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
- Link를 객체로 넣어줄 경우 필요한 속성
  - `pathname`: 이동할 경로를 나타내는 문자열
  - `search`: 쿼리스트링을 나타내는 문자열
  - `hash`: URL의 해시를 나타내는 문자열
  - `state`: 이동할 경로와 함께 전달할 상태 정보

```jsx
<Link to="/search?sort=name&sorting=asc" />

<Link
  to={{
    pathname: "/search",
    search: "?sort=name&sorting=asc",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>

```

<details>
<summary>Link 예제</summary>
<div markdown="1">

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";

function Practice() {
  return (
    <BrowserRouter>
      <Link to="/">메인 화면</Link>
      <br />
      <Link to="/one">1번 화면</Link>
      <br />
      <Link to="/two">2번 화면</Link>
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

#### 메인 화면 Link를 눌렀을 경우

![image](https://github.com/JJamVa/JJamVa/assets/80045006/66ad769f-0894-4716-ad8d-42312041e3b7)

#### 1번 화면 Link를 눌렀을 경우

![image](https://github.com/JJamVa/JJamVa/assets/80045006/dabdc6bb-d466-43e0-b8d1-457ad02f64bd)

#### 2번 화면 Link를 눌렀을 경우

![image](https://github.com/JJamVa/JJamVa/assets/80045006/67f87101-6451-4c21-b792-ab35c09d90f5)

Link버튼을 누를 경우, 주소 경로로 이동이 가능하다.<br/>
Routes에서 Route들의 주소를 비교 후, path가 동일한 화면을 렌더링한다.<br/>

:::

</div>
</details>

### 파라미터 설정 라우팅

- 동적 라우팅을 위해 사용되는 URL 패턴

```jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>메인 화면입니다.</h1>;
}

function Blog() {
  const location = useLocation();
  console.log(location);
  let number = location.pathname.split("/")[2];
  return <h1>blog의 {number} 입니다.</h1>;
}

export default App;
```

:::note

#### **useLocation()**

![image](https://github.com/JJamVa/JJamVa/assets/80045006/2da87a45-60b1-4ee0-a780-71c4f7463de4)

`/blog/10`을 방문했을 때의 화면이다.<br/>
Blog Component 내부를 보았을 때, `useLocation()`이 있다.<br/>
**useLocation()**은 현재 페이지의 URL 경로, 검색 쿼리, 해시 등의 정보를 객체로 담고 있는 react-router-dom의 커스텀 훅이다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/240cc569-c0e9-43b1-9713-18d9f07a1cda)

useLocation에 대한 출력 결과물이다.<br/>
number라는 변수를 통해 useLocation의 속성값을 이용하여 출력하였다.<br/>

:::

:::tip

#### **useParams()**

```jsx
function Blog() {
  console.log(useParams());
  let { id } = useParams();
  return <h1>blog의 {id} 입니다.</h1>;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8273c4ab-628d-460f-9bed-22f3eaf6d7b8)

Blog Component를 useParams()를 이용하여 출력하여도 똑같이 출력이 가능하다.<br/>
**useParams()**는 react-router-dom에서 제공하는 커스텀 훅으로서 **동적 라우팅에서 URL 파라미터를 추출**할 때 사용된다.<br/>
즉, `blog/:id`에서 `:id`에 따라 useParams()가 담고 있는 정보가 달라진다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/888c87ac-7a62-4cab-a900-7b8a43d21919)

useParams()도 객체 형태이며, 내부에 id라는 속성을 가지고 있는 것을 확인할 수 있다.<br/>

:::

### Nested Routing

- 중첩된 라우팅 구조를 만들 때 사용되는 개념
- 페이지나 Component 간의 계층 구조를 생성

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu/" element={<Outlet />}>
          <Route path="" element={<Menumain />} />
          <Route path="list/" element={<List />} />
          <Route path="info/" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>메인 화면</h1>;
}

function Menumain() {
  const location = useLocation();
  return <h1>MenuMain: 내경로는 "{location.pathname}" 입니다.</h1>;
}

function List() {
  const location = useLocation();
  return <h1>List: 내경로는 "{location.pathname}" 입니다.</h1>;
}

function Info() {
  const location = useLocation();
  return <h1>Info: 내경로는 "{location.pathname}" 입니다.</h1>;
}

export default App;
```

:::note

#### 주소: http://localhost:3001/menu

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cf183a31-0fef-4561-98d9-26817a5ca9d4)

#### 주소: http://localhost:3001/menu/list

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6aeb87e9-fa77-416b-a11e-6105840c4ff0)

#### 주소: http://localhost:3001/menu/Info

![image](https://github.com/JJamVa/JJamVa/assets/80045006/a701dd05-449d-44c0-91a7-d2438535af6b)

위 이미지는 각 경로에 들어갔을 때, 나오는 화면이다.<br/>

```jsx
<Route path="/menu/" element={<Outlet />}>
  <Route path="" element={<Menumain />} />
  <Route path="/list/" element={<List />} />
  <Route path="/info/" element={<Info />} />
</Route>
```

**Outlet Component**는 react-router-dom에서 만들어진 커스텀 훅이다.<br/>
이는 중첩된 라우팅을 처리하는데 사용이 된다.<br/>
즉, 코드상에서는 '/menu/'경로에 대한 하위 라우팅을 처리한다.

그럼 `/menu/` 경로에 접근 시, Outlet Component가 렌더링이 된다.<br/>
이를 통해 중첩된 라우팅을 처리하는데 사용되며 하위 경로에 대해 렌더링 작업을 해준다.<br/>
`/menu/경로` 방식으로 경로 값을 입력하게 되면<br/>
Outlet 내부에 있는 하위 라우터들의 path값이 일치하였을 때, element 작성된 Component를 렌더링 한다.

이를 통해 URL에 대해 구조적으로 표현 및 분리가 가능하다.
이 작업을 **Nested Routing(중첩 라우팅)**이라 한다.<br/>

:::

:::tip

#### 와일드카드(\*)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Index />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>메인 화면</h1>;
}

function Hello() {
  return <h1>Hello World</h1>;
}

export default App;
```

#### http://localhost:3001/

![image](https://github.com/JJamVa/JJamVa/assets/80045006/31e42212-b147-41c8-8625-47ddf6c161a5)

#### http://localhost:3001/hello

![image](https://github.com/JJamVa/JJamVa/assets/80045006/29d16bf1-4a87-4ac2-8fc7-ff8daf45b3d9)

#### http://localhost:3001/bye

![image](https://github.com/JJamVa/JJamVa/assets/80045006/31e42212-b147-41c8-8625-47ddf6c161a5)

`*(와일드카드)`는 동적으로 경로를 처리하기 위해 사용한다.<br/>
`/bye`를 입력하였을 경우, path값과 일치하지 않는다.<br/>

```jsx
<Route path="/*" element={<Index />} />
```

`/*`에서 `*`를 통하여 경로 이후에 어떤 값이든 동적으로 경로를 처리하여 Index Component를 렌더링한 것이다.<br/>
다만 경로가 path값과 일치한 경우, 일치한 path에 대한 element값의 Component를 렌더링한다.<br/>

:::

### useNavigate()

- react-router-dom에서 만들어진 커스텀 훅
- 라우팅 관련 작업을 수행할 때 사용하는 함수
- 함수 컴포넌트 내에서 라우팅을 다룰 때 유용하게 활용
