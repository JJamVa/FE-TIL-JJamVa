# useContext

## useContext란?

- Context API에서 Context.consumer로 전달하던 방식을 Hooks의 useContext를 사용해서 더 편리하게 값을 전달

:::info

#### useContext와 Consumer의 차이

- `useContext`
  - Context의 값을 더 간편하게 접근할 수 있다.
- `Consumer`
  - 함수형 Component 및 클래스 Component내에 사용이 가능
  - Component 내에서 렌더링할 콜백함수를 정의

:::

## useContext에서 사용 문법

- `createContext`:
  - Context 생성하는 함수 및 Context 객체를 반환
  - Provider와 Consumer를 생성 가능
- `useContext`:
  - 함수 Component 내에서 Context 값을 읽어오는 React 훅
  - Context값을 얻어와서 해당 값을 사용하거나 업데이트

```jsx title="useContext로 구현한 코드"
import React, { createContext } from "react";
import { useContext } from "react";

const Info = createContext({ name: "JJamVa", greeting: "Hello World!" });

const Parent = () => {
  return <Child1 />;
};

const Child1 = () => {
  const obj = useContext(Info);
  return (
    <div>
      <h1>안녕</h1>
      <h2>{obj.name}</h2>
      <Child2 />
    </div>
  );
};

const Child2 = () => {
  return (
    <>
      <Info.Provider value={{ id: 1, age: 20 }}>
        <Info.Consumer>
          {(value) => (
            <div>
              {value.id}번, 나이는 {value.age}세
            </div>
          )}
        </Info.Consumer>
      </Info.Provider>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  const { name, greeting } = useContext(Info);
  return (
    <div>
      {name}님, {greeting}
    </div>
  );
};

export default Parent;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/156e2869-f962-41b6-b5bf-94037056df9b)

:::info

`useContext`를 이용하여 Child1, Child3의 Component에서 Context값들을 호출하였다.<br/>
Child2와 같은 경우는 **Context의 값들을 변경 후, 화면에 출력**하여야 하기 때문에<br/>
useContext의 사용보다는 `Provider`와 `Consumer`를 통해 Context의 값들을 호출하였다.

:::
