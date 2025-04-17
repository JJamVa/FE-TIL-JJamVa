# Fragments

## 최상위 요소에 사용되는 Fragments

- `<React.Fragments>`
- return()안 최상위 태그를 시맨틱한 마크업 작성을 향상 시키기 위해 사용

```jsx
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>안녕하세요!</h1>
      <h2>안녕히가세요!</h2>
    </React.Fragment>
  );
}
```

:::tip

Fragments 대신 `<>`를 사용해도 가능

```jsx
import React from "react";

function App() {
  return (
    <>
      <h1>안녕하세요!</h1>
      <h2>안녕히가세요!</h2>
    </>
  );
}
```

`<>`은 Fragment Short Syntax라는 의미이다.<br/>
즉, 똑같은 Fragment 이지만 더 간략하게 표현이 가능하다.<br/>
하지만 `<>`에서는 key 또는 다른 속성을 지원하지 않는다.

:::
