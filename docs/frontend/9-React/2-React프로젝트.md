# React 프로젝트

## React프로젝트 생성

1. Node.js 설치
2. NPM 설치
3. Vscode 생성해야할 위치에 들어간 후, 터미널에 `npx create-react-app 이름` 입력
4. React프로젝트를 생성 후, 터미널에 `npm start` 입력하여 실행

:::tip

`npx create-react-app 이름 --template basic-react`<br/>
불필요한 요소의 폴더 및 파일 없이 생성

:::

## React import

- Component및 라이브러리를 import를 할 경우, `import 이름 from 경로 혹은 라이브러리명`
  - {}를 이용하여 필요한 라이브러리 모듈들을 가져올 수 있다.
- CSS파일을 import를 할 경우, `import 경로/CSS파일명.css`

:::caution

import 다음에 들어갈 파일명은 **대문자로 시작**하는 것이 좋다.<br/>
React가 Component를 구분하고 HTML요소와 구분하기 위해서이다.

:::

## React 시작

- React 프로젝트를 다운 받은 후, src폴더에 `App.css`, `App.js`, `index.js` 파일이 있다.

### App.js

- React 프로젝트에서 `npm start` 후, 처음으로 보여지는 화면
- 화면을 표현하는 파일
- App.js로 꼭 시작할 필요는 없다.

```jsx
import React from "react";

function App() {
  // JavaScript 코드 및 컴포넌트 작성
  return {
    /* 화면을 표현할 코드*/
  };
}

export default App;
```

:::note

`import React from 'react'`는 react에서 React라는 `모듈을 가져와 사용한다`는 의미<br/>
function App과 return 사이에서 `Component 및 JavaScript로 기능 구현`<br/>
return은 `어떻게 화면의 레이아웃을 표현할지 Component 및 HTML 태그를 작성`<br/>
export default App는 `App함수 모듈을 내보낼 때 사용`

:::

:::caution

**export default와 export의 차이점**

- `export default`
  - 한 모듈안에서 하나의 `export default`만 사용 가능
  - 내보낼 값(함수, 클래스 등)을 명시하지 않고 사용이 가능

- `export`
  - 여러개의 `export`를 사용 가능
  - import를 통해 가져올 때, `{}`를 통해 선택적으로 가져올 수 있다.

:::

### App.css

- 기본적으로 생성되는 CSS파일
- CSS파일을 사용시, 해당 js파일에 import

### index.js

- 해당 Component 초기화하여 화면에 표현
- React 어플리케이션의 시작점

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

:::note

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"))
```
root라는 id를 호출하지만 index.js파일에는 root라는 id인 요소가 존재하지 않는다.<br/>
public의 index.html에 `<div id="root">`가 존재한다.<br/>
index.html의 id가 root인 영역에 React어플리케이션을 렌더링 한다.<br/>
public 폴더의 파일은 정적 파일로 취급되기 때문에 따로 import를 해서 사용할 필요가 없다.

React.StrictMode는 React Component를 엄격모드로 실행한다는 의미<br/>
초기화면에 등록할 경우, 표현하고자 하는 js파일을 import를 한 후,<br/>
render()안에 해당 Component를 작성하면 된다.

:::
