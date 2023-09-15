# Component와 Props

## Coponent

- Component를 관리하는 법
  - 같은 파일내에 함수형으로 관리
  - 외부파일로 Component를 따로 관리
- Component 관리에 따른 장점
  1. 가독성향상
  2. 재사용성
  3. 유지보수 용이
  4. 병렬 개발이 가능

### React Component

- 간단한 코드일 경우, 쉽게 작성이 가능
- 반복된 코드를 작성할 경우 재사용성 및 유지보수가 좋지 않다

```jsx title="App.js"
function App() {
  return (
    <>
      <h1>안녕하세요.</h1>
      <h2>안녕히가세요.</h2>
    </>
  );
}

export default App;
```

### 내부 Component를 이용

- `React Component`인 경우보다 재사용성 및 유지보수 조금 향상
- 코드의 길이가 전체적으로 길어져 가독성이 떨어짐

```jsx title="App.js"
function App() {
  function Hello() {
    return <h1>안녕하세요.</h1>;
  }
  function Bye() {
    return <h2>안녕히가세요.</h2>;
  }
  return (
    <>
      <Hello />
      <Bye />
    </>
  );
}

export default App;
```

### 외부 Component를 이용

- 유지 보수 및 재사용성이 향상
- 외부 파일로 관리할 경우 다른 파일에서도 호출이 가능
- 화면을 표현해야하는 파일에서의 가독성이 향상

```jsx title="Hello.jsx"
function Hello() {
  return <h1>안녕하세요.</h1>;
}

export default Hello;
```

```jsx title="Bye.jsx"
export function Bye() {
  return <h2>안녕히가세요.</h2>;
}
```

```jsx title="App.js"
import Hello from "./coponents/Hello.jsx";
import Bye from "./components/Bye.jsx";

function App() {
  return (
    <>
      <Hello />
      <Bye />
    </>
  );
}

export default App;
```

:::danger

#### 외부 Component를 사용해야할 때 주의사항

1. Component의 이름은 항상 **앞글자가 대문자로 시작**해야된다.<br/>
2. 외부 파일을 생성 후, 코드 맨밑에 `export default 'Component이름'` 혹은 해당 Component 앞에 `export`를 작성해야된다.<br/>
3. 외부 Component를 사용 시, 해당 파일에 `import 'Component이름' from '외부 Component 경로'`

:::

## Props Parameter

- Component에 데이터를 전달하고 해당 데이터를 사용하여 구현 가능
- props는 JavaScript에서의 객체

```jsx title="App.js"
import Hello from "./coponents/Hello.jsx";

function App() {
  return <Hello name="JJamVa" age="20" />;
}

export default App;
```

```jsx title="Hello.jsx"
function Hello(props) {
  console.log(props);
  return (
    <h1>
      안녕하세요. {props.age}살 {props.name}님 반갑습니다!!
    </h1>
  );
}

export default Hello;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cc393fec-12f1-4f79-a228-2a806ff0d14e)

:::note
위의 코드는 정삭적으로 동작하는 것을 확인하였다.<br/>
App.js에서 데이터를 전송하여 Hello Coponent로 props를 전달하여 출력을 하였다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0e289499-e0e1-4034-9f82-d75835d7b08c)

위와 같이 props는 **Object**인 것을 확인이 가능하다.<br/>
props의 key를 이용하여 value에 접근하여 Hello Component를 구현하였다.<br/>

또한, props가 Object임으로 값을 구조분해 할당으로 받아올 수 있다.

```jsx title="Hello.jsx Destructuring"
function Hello({ name, age }) {
  console.log(`이름: ${name}, 나이: ${age}`);
  return (
    <h1>
      안녕하세요. {age}살 {name}님 반갑습니다!!
    </h1>
  );
}

export default Hello;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/90083bc3-87b7-411e-b309-94ae2e712e60)

위와 같이 구조분해 할당으로 값을 받은 것을 확인할 수 있다.<br/>
`구조분해 할당을 이용 시, 데이터를 보내는 key의 이름과 데이터를 받는 Component에서 변수명이 일치해야 동작이 가능`<br/>

:::
