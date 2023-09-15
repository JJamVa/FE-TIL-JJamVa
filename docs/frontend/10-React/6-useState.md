# Hook - useState

## useState

- `[상태, 상태 변경함수] = useState(초기값)`
- state변수와 state 변수의 상태를 바꿔줄 수 있는 함수가 반환

```jsx
import React, { useState } from "react";

function App() {
  console.log(useState());
  return <></>;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/14c3ee0b-26eb-4dc3-8ab2-cf1b839afb42)

:::note
useState를 사용하기 위해서는 `react` 라이브러리에서 useState 모듈을 받아와야한다.<br/>

```jsx
console.log(useState());
```

useState를 출력해보면 Array인 점을 확인할 수 있으며, 배열에는 undefined와 함수가 출력되는 것을 볼 수 있다.<br/>
구조분해 할당을 통해 배열 크기만큼의 변수를 선언하여 각 변수에 값을 저장할 수 있다.<br/>
배열의 크기가 2임으로 2개의 변수명을 작성하면 된다.<br/>

```jsx
let [hello, world] = useState();
console.log(hello);
console.log(world);
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/34ec840b-2aa1-429d-a18c-211ed2967e68)

hello라는 변수에는 `undefined`가 출력, world에는 `dispatchSetState`함수가 출력되었다.<br/>
즉, 초기값을 지정해주지 않아 hello에는 undefined값이 저장, world에는 상태를 업데이트하는 함수를 저장한다.<br/>

:::

:::tip

#### dispatchSetState 함수란??

사용자가 상태를 업데이트하기 위해 호출하는 함수<br/>
dispatchSetState 함수를 호출하면 Component를 다시 렌더링하고 새로운 상태를 적용<br/>
React는 내부적으로 상태 업데이트를 관리하고 컴포넌트를 최적화된 방식으로 업데이트

:::

<details>
<summary>useState 실습</summary>
<div markdown="1">

```jsx
import React, { useState } from "react";

function App() {
  let [like, setLike] = useState(0);
  function Count() {
    setLike(++like);
  }

  return (
    <>
      <button onClick={Count}>버튼을 눌러주세요!</button>
      <p>{like}</p>
    </>
  );
}

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8dcafa19-3ea5-4441-8f31-64fac2803f8c)

:::note

useState를 선언하여 like에 초기값 0을 할당, setLike에 상태 변경함수를 할당하였다.<br/>
button에 onClick 이벤트가 발생 시, Count라는 함수를 호출한다.<br/>
Count함수에서는 setLike 상태 변경함수를 호출하여 현재 like의 값에서 하나를 추가 후,<br/>
렌더링을 시켜 버튼을 누를 때마다 like 상태 변수가 1씩 증가하고 그 값을 화면에 출력한다.

:::

</div>
</details>
