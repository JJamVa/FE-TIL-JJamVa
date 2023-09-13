# React 이벤트

## React 이벤트 종류

- `onClick` : 해당 요소를 클릭하였을 때, 이벤트가 발생
- `onChange` : 입력 값이 변경될 때, 이벤트가 발생
- `onInput` : 입력필드(input, textarea)에 텍스트를 입력할 때, 이벤트 발생
- `onFocus` : 입력 양식 요소 및 해당 요소가 포커스가 될 때, 이벤트가 발생
- `onMouseEnter` : 마우스가 요소 위에 있을 때, 이벤트 발생
- `onMouseLeave` : 마우스가 요소 영역밖으로 벗어날 때, 이벤트 발생

```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("마우스를 올려주세요!");
  const MouseOn = () => {
    setText("Hello World");
  };

  const MouseOff = () => {
    setText("Bye World");
  };

  const MouseClick = () => {
    setText("Click World");
  };

  return (
    <div>
      <p onMouseEnter={MouseOn} onMouseLeave={MouseOff} onClick={MouseClick}>
        {text}
      </p>
    </div>
  );
}

export default App;
```

:::note
마우스 동작에 대한 이벤트를 구현한 코드이다.<br/>
MouseOn, MouseOff, MouseClick을 각각 이벤트 핸들링을 구현하여 넣어주었다.<br/>

```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("마우스를 올려주세요!");
  return (
    <div>
      <p
        onMouseEnter={() => setText("Hello World")}
        onMouseLeave={() => setText("Bye World")}
        onClick={() => setText("Click World")}
      >
        {text}
      </p>
    </div>
  );
}

export default App;
```

위와 같이 React 이벤트에 직접 콜백 함수로 구현이 가능하다.<br/>

함수를 생성하여 이벤트 핸들러로 사용하였을 때, 코드 해석이 쉬우며 재사용이 좋아진다.<br/>
이벤트 안 콜백 함수를 이용하여 구현을 하였을 때, 코드는 간결해지지만 재사용성이 떨어진다.<br/>

:::
