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
    </>
  );
}
```

`<>`를 사용할 경우 React모듈을 따로 추가할 필요가 없다.

:::
