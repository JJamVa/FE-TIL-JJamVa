# useCallback

## useCallback이란?

- React의 훅 중 하나, 함수형 컴포넌트에서 콜백 함수를 메모이제이션(`memoization`)하는 데 사용
- 의존성이 변경되지 않는 한, 동일한 콜백 함수 인스턴스를 재사용

```jsx
const 변수 = useMemo(() => {
  // 함수
}, [의존성 배열]);
```

## useCallback 사용 이유

- 불필요한 함수 재생성 방지
- 함수 재생성으로 인한 자식 Component의 불필요한 렌더링 방지
- 의존성 관리

:::tip

```js
const func1 = (x, y) => x + y;
const func2 = (x, y) => x + y;

console.log(func1 === func2); // false
```

위의 코드를 보게 되면 `func1`과 `func2`는 같은 인자값, 같은 내용을 반환하는 함수이다.<br/>
하지만, `func1`과 `func2` 비교 연산을 통해 출력을 해보면 `false`가 출력 된다.<br/>
이유는 `func1`과 `func2`는 함수이기도 하지만 객체이다.<br/>
함수안의 내용은 같더라도 생성 시, 다른 메모리 주소에 생성이 되기 때문에<br/>
서로 다른 객체로 인식이 되어 false가 출력이 된다.<br/>

이와 같은 상황은 React Component가 렌더링될 때도 발생할 수 있다.<br/>
처음 렌더링이 되고 함수를 실행한 후, 다시 렌더링이 발생하면<br/>
기존의 함수를 유지하는 것이 아니라 새로운 메모리 주소에 함수가 생성된다.<br/>
이로 인해 매 렌더링마다 새로운 함수 객체가 생성되어 불필요한 리소스가 소비될 수 있다.<br/>

이를 방지하고 성능을 최적화하기 위해 useCallback훅을 사용하면 된다.<br/>
특히, **이벤트 핸들러 함수**나 **props로 전달되는 함수**가 자주 생성될 경우에 사용하면 좋다.<br/>

:::

## useCallback 코드 예시

### useCallback 적용 전 코드

```jsx title="src/app.js"
import { useState } from "react";
import View from "./View";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const changeText1 = (e) => setText1(e.target.value);
  const changeText2 = (e) => setText2(e.target.value);

  return (
    <>
      <View text={text1} changeText={changeText1} />
      <View text={text2} changeText={changeText2} />
    </>
  );
}
export default App;
```

```jsx title="src/View.js"
import React from "react";

const View = ({ text, changeText }) => {
  console.log("rendering check", text);
  return (
    <div>
      <input type="text" value={text} onChange={changeText} />
      <p>{text}</p>
    </div>
  );
};

export default View;
```

:::note

위의 코드는 두개의 입력창에 값을 입력하면 해당 입력값을 표현하는 코드이다.<br/>
useCallback 예시 코드를 보여주기 전, 어떤 차이가 있는지 확인을 하면 좋을 것 같다.<br/>

![image](https://github.com/user-attachments/assets/c534bd06-0125-493e-92d9-bc7d9cee62ed)

![image](https://github.com/user-attachments/assets/58dfc5b0-31e7-4785-a393-6b654145a40d)

첫 번째 입력창에 `hi`라고 입력 하면, 위의 이미지와 같이 콘솔창에 입력 값이 뜬다.<br/>
출력 값을 보면 총 6개가 존재하는데 맨앞의 2개와 같은 경우, **처음 페이지 렌더링이 되어 나오는 출력 값**이다.<br/>
그럼 나머지 4개의 출력물을 보면, input은 입력값이 발생할 때마다 렌더링이 발생한다.<br/>
즉, `hi`라고 입력을 하면 `h`, `i` 총 2번의 렌더링이 발생한다.<br/>
그럼 공백의 출력은 바로 비어있는 다른 입력창의 출력 값이다.<br/>

즉, 하나의 입력창의 상태 변경으로 인해 App Component가 다시 렌더링이 되기 때문에<br/>
View Component도 다시 렌더링이 발생한다.<br/>
불필요한 렌더링을 최소화 시키기 위해 `useCallback`을 사용하면 된다.<br/>

:::

### useCallback 적용 후 코드

```jsx title="src/app.js"
import { useState, useCallback } from "react";
import View from "./View";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const changeText1 = useCallback((e) => setText1(e.target.value), []);
  const changeText2 = useCallback((e) => setText2(e.target.value), []);

  return (
    <>
      <View text={text1} changeText={changeText1} />
      <View text={text2} changeText={changeText2} />
    </>
  );
}
export default App;
```

```jsx title="src/View.js"
import React, { memo } from "react";

const View = ({ text, changeText }) => {
  console.log("rendering check", text);
  return (
    <div>
      <input type="text" value={text} onChange={changeText} />
      <p>{text}</p>
    </div>
  );
};

export default memo(View);
```

:::note

위의 코드는 useCallback을 적용한 코드이다.<br/>
이번에도 입력창에 `hi`라고 입력을 한다.<br/>

![image](https://github.com/user-attachments/assets/c534bd06-0125-493e-92d9-bc7d9cee62ed)

![image](https://github.com/user-attachments/assets/cad0ec28-cc2f-4cbb-8ad3-2d5d5f293bb1)

콘솔창을 확인해보면 앞에 2개 출력물을 제외한 나머지는 현재 입력하고 있는 창에 대한 입력값만 출력이 된다.<br/>
즉, **현재 입력창에 대한 Component만 렌더링이 발생했다는 의미**이다.<br/>

---

```jsx
const changeText1 = useCallback((e) => setText1(e.target.value), []);
```

useCallback을 통해 처음 렌더링(`의존성 배열 빈값`) 될 때의 함수 상태를 유지한다.<br/>
즉, 렌더링이 발생하더라도 **새로운 함수를 생성하지 않고 생성했던 함수를 그대로 사용**할 수 있다.<br/>

```jsx
export default memo(View);
```

또한, View.js의 코드 중 export를 할 때, `memo()`를 사용해야 useCallback을 제대로 사용이 가능하다.<br/>
memo는 **전달된 props가 변경되지 않는 한 Component를 재렌더링하지 않게 해주는 역할**을 한다.<br/>

useCallback은 통해 메모이제이션을 통해 불필요한 함수 재생성을 방지,<br/>
memo는 변경사항이 없는 Component를 렌더링 방지함으로써 불필요한 함수를 재생성하지 않게 해준다.<br/>

:::

## useMemo와 useCallback

- 공통점

  - **메모이제이션**: 연산의 결과나 함수를 메모이제이션하여 불필요한 재연산이나 함수 재생성을 방지
  - **성능 최적화**
  - **의존성 배열**: 의존성 배열을 통해 특정 값이 변경되었을 때, 재연산 및 함수를 재생성

- 차이점
  - `useMemo`
    - **복잡한 연산에 대한 결과 값**을 메모이제이션
    - 계산된 값 자체를 반환
  - `useCallback`
    - 함수를 메모이제이션 하며, 주로 Component가 재렌더링될 때 기존의 함수 인스턴스를 재사용
    - 메모이제이션된 함수 자체를 반환
