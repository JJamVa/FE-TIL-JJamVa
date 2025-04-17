# useMemo

## useMemo란?

- 계산 비용이 높거나 렌더링 성능에 영향을 미치는 계산 결과를 캐시하고, 필요할 때 재사용
- 계산이 복잡하거나 렌더링 함수 내에서 자주 호출되는 연산의 최적화에 사용
- Component 내에서 계산 결과를 memoization, 종속성 배열을 통해 언제 다시 계산할지를 제어

```jsx

const 저장할변수 = useMemo(() => {
  return 연산이 무거운 함수
}, [의존성 배열]);

```

## useMemo의 필요성 예제

```jsx
import { useState } from "react";

function calculate() {
  let count = 0;
  for (let i = 0; i < 3000000000; i++) {
    count += i;
  }
  return count;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>calculate : {calculate()}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        클릭! {count}
      </button>
    </div>
  );
}
export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5e5e4790-67ea-45dc-b3cf-1d38363aadcb)

:::note
calculate 함수와 같은 경우는 0부터 3000000000번의 반복문을 동작하며 모든 값을 더한다.<br/>
처음 화면 렌더링이 된 이후, button을 누를 경우 useState의 상태 변화 함수에 값을 업데이트 후, 화면을 렌더링한다.<br/>
여기서 렌더링 작업이 되면서 calculate의 함수가 새로 호출이 되어 3000000000번의 반복문을 동작한다.<br/>
이로 인해서 화면의 렌더링되고 있는 작업이 느려지며 성능 저하의 문제가 발생한다.<br/>
:::

## useMemo를 이용한 개선 예제

```jsx
import { useState, useMemo } from "react";

function calculate() {
  let count = 0;
  for (let i = 0; i < 3000000000; i++) {
    count += i;
  }
  return count;
}

function App() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    return calculate();
  }, []);

  return (
    <div>
      <h1>calculate : {result}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        클릭! {count}
      </button>
    </div>
  );
}
export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5e5e4790-67ea-45dc-b3cf-1d38363aadcb)

:::note
useMemo를 사용하지 않은 코드에서 useMemo만 추가된 코드이다.<br/>
버튼을 클릭 시, useMemo가 없는 실행 코드에 비해 렌더링 속도가 빨라졌다.<br/>

```jsx
const result = useMemo(() => {
  return calculate();
}, []);
```

useMemo를 이용하여 초기 렌더링시, calculate에 대한 연산을 memoization을 하기 때문에<br/>
버튼을 클릭 시, 재랜더링이 되더라도 calculate함수를 실행하지 않고 count 상태 변수만 업데이트가 된다.<br/>
이를 이용하여 성능 최적화를 할 수 있다.

:::

:::info

#### useMemo와 useEffect의 차이

`useMemo`:

- clean-up 함수가 존재하지 않음
- 리랜더링이나 불필요한 재실행을 막기 위해 사용
- 상태 변화가 없으면 랜더링을 방지

`useEffect`:

- clean-up 함수가 존재
- 랜더링 이후 동작
- 상태 관리에 사용

:::

<!-- 추가적으로 공부 후 작성 -->
