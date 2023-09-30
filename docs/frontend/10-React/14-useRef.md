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

## useRef를 이용하여 DOM 요소에 접근


```jsx
import React, { useRef, useState } from "react";

const App = () => {
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const inputCheck = (e) => {
    e.preventDefault();
    if (nameInput.current.value.length === 0) {
      ageInput.current.focus();
      return;
    } else if (ageInput.current.value.length === 0) {
      ageInput.current.focus();
      return;
    }
    setName(nameInput.current.value);
    setAge(ageInput.current.value);
  };

  return (
    <form onSubmit={inputCheck}>
      <label>
        아이디 : <input type="text" ref={nameInput} />
      </label>

      <br />

      <label>
        나이 : <input type="number" ref={ageInput} />
      </label>

      <br />

      <button type="submit">정보 전송</button>

      <br />
      <span>{name && age && `안녕하세요. ${age}살 ${name} 님!`}</span>
    </form>
  );
};

export default App;
```

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/34f63e25-207a-4f73-98ee-96b774f6d391)

위의 화면은 초기 화면이다.<br/>
각 변수에 `useRef()`에 `null`값으로 초기화를 한다.<br/>
태그의 ref를 사용하기 전에 **null 체크를 수행하여 예외를 방지하기 위함**이다.<br/>

각 input 태그에 `ref속성`을 이용하여 useRef()로 생성한 변수를 **DOM요소를 선택하여 input태그의 속성과 메소드에 접근**을 한다.<br/>
즉, `nameInput.current`와 `ageInput.current`를 이용하여 입력 요소에 접근이 가능하다.<br/>

form 태그에 onSubmit으로 inputCheck 함수로 호출하여 이벤트 핸들링 한다.<br/>
inputCheck함수를 보면 `e.preventDefault()`로 submit의 버튼을 클릭 시, 발생하는 이벤트 전파를 막는다.<br/>
각 useRef()로 생성한 변수의 속성과 input 태그의 속성을 접근하여 입력값을 빈 값인지 확인한다.<br/>
빈 값일 경우, `focus()`를 통해 해당 input태그에 focus효과를 주며, 함수를 종료한다.<br/>
각 조건문에 `return`을 작성한 이유는 랜더링을 막기위함이다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/7ffb76fb-1ff2-492a-9ab8-cb247bcb3934)

nameInput과 ageInput의 값이 빈 값이 아닐 경우, useState의 상태 변경 함수에 업데이트가 되며 렌더링 작업이 발생한다.<br/>
이후 name과 age 변수가 화면에 출력이 되는 것을 확인할 수 있다.<br/>

:::
