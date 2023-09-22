# ContextAPI

## ContextAPI

- React에서 상태 관리를 위한 기능을 제공하는 도구
- Component 간에 데이터를 공유하고 상태를 전파

:::info

#### props와 ContextAPI의 차이점

`props`와 `ContextAPI`의 사용 목적은 비슷하지만 차이점이 있다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/9c15d7c9-fbc1-4272-ab6e-7043aa663011)

APP1, APP2, APP3의 Component가 있다.<br/>
APP1에서 APP3에게 데이터를 전달한다고 가정한다.<br/>
props를 이용하여 데이터를 전달하기 위해서는 APP1, APP2, APP3의 순서로 전달해야한다.<br/>
하지만 ContextAPI를 이용하게 된다면 APP1에서 APP3에게 직접 전달할 수 있다.<br/>

ContextAPI는 데이터가 불필요한 Component에게 전달할 필요없이<br/>
**데이터가 필요한 Component에게 직접 전달이 가능**하다는 장점이 있다.

:::

## ContextAPI에 사용하는 문법

- `createContext`:
  - Context 생성하는 함수
  - Context객체를 반환
  - Provider와 Consumer를 만들 수 있다.
- `Provider`:
  - Context값을 제공하는 Component
  - props를 사용하여 값을 설정하고 하위 Component에서 이 값을 사용
- `Consumer`:
  - Context값을 소비하는 Component
  - Consumer Component내에 함수의 Parameter값을 이용하여 Context값을 사용

```jsx
import React, { createContext } from "react";

const Info = createContext({ name: "JJamVa", greeting: "Hello World!" });

const App = () => {
  return <App2 />;
};

const App2 = () => {
  return (
    <div>
      <h1>안녕</h1>
      <h2>반가워</h2>
      <App3 />
    </div>
  );
};

const App3 = () => {
  return (
    <Info.Consumer>
      {(context) => (
        <div>
          <h1>{context.name}</h1>
          <h2>{context.greeting}</h2>
        </div>
      )}
    </Info.Consumer>
  );
};

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/a950fb3d-f400-46d0-a1f5-a6237ce38aac)

:::note
ContextAPI를 쓰기 위해서는 `react` 라이브러리에서 모듈을 import해야한다.<br/>
이후 `createContext`를 통해 어떤 데이터를 넘길지 작성<br/>

:::