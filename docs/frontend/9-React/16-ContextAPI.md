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
즉, `props drilling`의 문제점을 개선할 수 있다.<br/>

**props drilling** 이란?
- 리액트(React)에서 데이터를 부모 컴포넌트로부터 하위 계층의 자식 컴포넌트로 전달하는 과정을 의미

즉, ContextAPI는 데이터가 불필요한 Component에게 전달할 필요없이<br/>
**데이터가 필요한 Component에게 직접 전달이 가능**하다는 장점이 있다.

:::

## ContextAPI에 사용하는 문법

- `createContext`:
  - Context 생성하는 함수 및 Context 객체를 반환
  - Provider와 Consumer를 생성 가능
- `Provider`:
  - Context값을 제공하는 Component
  - props를 사용하여 값을 설정하고 하위 Component에서 이 값을 사용
- `Consumer`:
  - Context값을 소비하는 Component
  - Consumer Component내에 함수의 Parameter값을 이용하여 Context값을 사용

```jsx
import React, { createContext } from "react";

const Info = createContext({ name: "JJamVa", greeting: "Hello World!" });

const Parent = () => {
  return <Child1 />;
};

const Child1 = () => {
  return (
    <Info.Consumer>
      {(obj) => (
        <div>
          <h1>안녕</h1>
          <h2>{obj.name}</h2>
          <Child2 />
        </div>
      )}
    </Info.Consumer>
  );
};

const Child2 = () => {
  return (
    <>
      <Info.Provider value={{ id: 1, age: 20 }}>
        <Info.Consumer>
          {({ id, age }) => (
            <div>
              {id}번, 나이는 {age}세
            </div>
          )}
        </Info.Consumer>
      </Info.Provider>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  return (
    <Info.Consumer>
      {(value) => (
        <div>
          {value.name}님, {value.greeting}
        </div>
      )}
    </Info.Consumer>
  );
};

export default Parent;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f7b58cd1-81d4-4c3c-ac54-cb8d710483a4)

:::note
ContextAPI를 쓰기 위해서는 `react` 라이브러리에서 모듈을 import해야한다.<br/>
`createContext`에 name과 greeting의 전달하고자 하는 속성을 설정<br/>

Child1 Component에서 `<Info.**Consumer**>`를 이용하여 Info에서 정의한 createContext값을 콜백 함수로 호출하여 사용하고 있다.<br/>

Child2 Component에서는 `<Info.**Provier**>`를 통해 변경된 값을 사용하여,<br/>
`<Info.Consumer>`을 통해 변경된 ContextAPI 값을 호출하고 있다.<br/>
`<Info.Provider>` 밖에 Child3 Component를 호출하고 있다<br/>
즉, `<Info.Provider>`의 Context 값 변경 요청이 되지 않는다.<br/>

Child3 Component는 기존의 설정된 `createContext`의 데이터인 name, greeting의 속성값을 이용하고 있다.<br/>

:::

:::danger

### 주의사항

#### 1. Consumer

- Context의 값이 필요 없더라도 Consumer의 자식은 태그로 가질수 없다.
- 하나의 함수로 감싸줘야한다.

```jsx title="잘못된 예시 코드"
<Info.Consumer>
  <div>
    <h1>안녕</h1>
    {(obj) => <h2>{obj.name}</h2>}
    <Child2 />
  </div>
</Info.Consumer>
```

```jsx title="올바른 코드"
<Info.Consumer>
  {(obj) => (
    <div>
      <h1>안녕</h1>
      <h2>{obj.name}</h2>
      <Child2 />
    </div>
  )}
</Info.Consumer>
```

#### 2. Provier

- Provider을 이용시 변경하고자 하는 값이 없을 시, 에러가 발생한다
- Provider를 사용하여 Context를 구독하는 모든 하위 컴포넌트가 Provider가 제공하는 값을 사용
- Provider와 같이 공존할 수 있지만 Provider의 자식으로 존재하지 않을 경우, 이전의 Context 값이 사용
- Provider의 자식으로 Consumer가 존재해야 값이 정상적으로 전달되고 사용 가능

#### 3. ContextAPI 사용 유의

- Context API는 전역 공간에 값을 저장하므로 메모리 사용에 주의해야하며, 필요한 경우에만 사용하는 것을 권장

:::
