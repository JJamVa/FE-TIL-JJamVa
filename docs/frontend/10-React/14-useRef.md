# useRef

## useRef란?

- DOM 요소에 직접 접근하고 조작이 가능
- Component 이전 상태 또는 값을 저장
- Component의 생명주기 동안 유지되어야 하는 값을 저장 또는 조작이 가능

:::info

#### useState와 useRef의 차이

`useState`는 값이 업데이트되면 Component가 재렌더링된다.<br/>
`useRef`는 값이 업데이트 되어도 Component가 재렌더링이 되지 않는다.<br/>

화면에 표시되어야 하는 정보를 저장할 때 `useRef`는 적합하지 않는다.<br/>

:::

```jsx
import React, { useRef, useState } from "react";

function App() {
  const clickCount = useRef(0);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log("useState 클릭 수", count);
  };

  const useRefButtonClick = () => {
    clickCount.current += 1;
    console.log("useRef 클릭 수", clickCount.current);
  };

  return (
    <div>
      <h1>useRef 버튼 클릭 횟수: {clickCount.current}</h1>
      <button onClick={useRefButtonClick}>useRef 클릭</button>
      <h2>버튼 클릭 횟수: {count}</h2>
      <button onClick={handleButtonClick}>버튼 클릭</button>
    </div>
  );
}

export default App;
```

:::tip

#### useRef 객체

```jsx
console.log(useRef(0));
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6d9f28b7-59cb-4b27-afb8-e0a0c09d699a)

useRef를 console.log로 출력하면 위와 같은 화면이 나온다.<br/>
useRef가 Object타입이며, current라는 속성을 볼 수 있다.<br/>
current의 속성은 useRef의 초기값임을 확인할 수 있다.<br/>

:::

:::note

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cdef4a11-0456-46e7-a658-cd79044c115c)

count와 clickCount.current의 값이 0인 초기화면이다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f980d254-7680-41b4-a4dc-fe2bf71c38b6)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/4e702b6d-2ec5-4d3b-a050-6f577332c7fd)

`useRef 클릭`라는 버튼을 5번 누른 후 화면이다.<br/>
출력 결과물을 보면 useRef의 버튼을 5번 누른 것을 확인할 수 있다.<br/>
하지만 화면에 **clickCount.current에 대한 값을 렌더링하지 않는다.**<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f549e778-b81a-4824-807b-4553228ff068)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/a4422646-91a5-46ad-a02f-c38fedc83bf5)

`버튼 클릭`을 한번 클릭 시, 위와 같은 결과 화면을 확인할 수 있다.<br/>
useState의 상태를 변경하는 함수는 콜백 함수에서는 비동기 처리를 하기 때문에 출력은 0으로 나온 후<br/>
count의 상태가 변하고 화면에 렌더링이 된다.<br/>
useState로 인하여 화면이 렌더링되면서 useRef의 값도 함께 변경이 되었다.<br/>

즉, useRef의 현재 상태 값은 변경이 되지만 렌더링 작업이 되지 않는다는 것을 확인할 수 있다.<br/>
useState를 통해 값이 변경될 때마다, 렌더링이 되기 때문에<br/>
렌더링 작업이 발생하면 값이 바뀐다는 것도 확인이 가능했다.<br/>

:::
