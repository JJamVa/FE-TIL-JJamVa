# Redux Toolkit

## Redux Toolkit이란?

- Redux를 더욱 쉽고 효율적으로 사용할 수 있도록 도와주는 공식적인 Redux 라이브러리 확장판
- 불변성을 이용한 상태 관리 개선
- Immer 라이브러리 사용 가능
- 해당 React 프로젝트 경로 터미널에 `npm install @reduxjs/toolkit`, `npm install react-redux` 입력하여 설치

:::tip

#### Immer라이브러리란?

- Immer은 불변성을 유지하면서 객체를 업데이트할 수 있는 방법을 제공
- 불변성은 객체를 직접 수정하지 않고 새로운 객체를 생성하여 상태 변경을 반영하는 개념을 의미

:::

## Redux Toolkit 구현

- 구현
  - "1씩 증가": 값을 하나씩 증가하여 화면 출력
  - "5씩 증가": 값을 5씩 증가하여 화면 출력
  - "-1씩 감소": 값을 -1씩 감소하여 화면 출력
  - "숫자 가리기/켜기": 버튼을 클릭시, 표현하고 있는 숫자 가리기/켜기

![image](https://github.com/JJamVa/JJamVa/assets/80045006/46b3cc94-e719-4b50-90fb-e166e979f2b6)

### store 생성 및 component에 전달

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";

import Button from "./components/Button";
import { Provider } from "react-redux";
import store from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Button />
  </Provider>
);
```

:::note
store.js에서 생성한 store을 import 받는다.<br/>
`<Provider>`를 이용하여 하위 Component들에게 Redux store의 데이터를 사용할 수 있도록 전달한다.<br/>

:::

### Reducer 생성 및 결합하여 store를 생성

- `configureStore()`: Redux Toolkit에서 제공하는 함수, Redux store를 설정하고 생성하기 위해 사용하는 함수
- `createSlice()`: Redux Toolkit에서 제공하는 함수, Redux Reducer와 action 생성자를 단일 슬라이스로 결합하여 더 간단하고 모듈화된 방식으로 Redux 코드를 작성할 수 있게 해주는 도구

```jsx title="store.js"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { count: 0 };

const counterSlice = createSlice({
  name: "숫자세기",
  initialState: initialCounterState,
  reducers: {
    increase1(state) {
      state.count++;
    },
    increase5(state, action) {
      state.count = state.count + action.payload;
    },
    decrease(state) {
      state.count--;
    },
  },
});

const initialVisibleState = { visible: true };

const visibleSlice = createSlice({
  name: "화면 표시",
  initialState: initialVisibleState,
  reducers: {
    onOff(state) {
      state.visible = !state.visible;
    },
  },
});

const store = configureStore({
  reducer: {
    sliceOfCount: counterSlice.reducer,
    sliceOfVisible: visibleSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const visibleActions = visibleSlice.actions;

export default store;
```

:::note

```jsx "slice 생성"
const initialCounterState = { count: 0 };

const counterSlice = createSlice({
  name: "숫자세기",
  initialState: initialCounterState,
  reducers: {
    increase1(state) {
      state.count++;
    },
    increase5(state, action) {
      state.count = state.count + action.payload;
    },
    decrease(state) {
      state.count--;
    },
  },
});
```

`initialCounterState` 변수는 상태의 초기 값을 의미.<br/>
`createSlice`는 Reducer를 생성하는 역할을 하며, 객체(key,value) 형태로 관리를 한다.<br/>

createSlice에 필요한 속성이 있다.<br/>

- `name`: slice의 이름을 표현. action과 Reducer에 대한 이름 공간을 구별하기 위해 사용
- `initialState`: slice의 초기 상태를 정의
- `reducers`: slice의 action을 정의

---

```jsx title="Reducer가 2개 이상일 경우 store 생성 코드"
const store = configureStore({
  reducer: {
    sliceOfCount: counterSlice.reducer,
    sliceOfVisible: visibleSlice.reducer,
  },
  // reducer: counterSlice.reducer
  // reducer가 단일로 사용될 경우
});
```

`configureStore`는 store를 생성하는 함수이다.<br/>

configureStore에 필요한 속성이 있다.<br/>

- `reducer`: store가 관리할 여러 개의 slice를 정의.
  - key값은 slice를 호출할 때, 부를 이름을 정의
  - value는 slice의 reducer를 호출

---

```jsx title="export slice action"
export const counterActions = counterSlice.actions;
export const visibleActions = visibleSlice.actions;
```

위의 코드는 해당 slice의 actions을 사용할 Component에 보내기 위해 작성된 코드이다.<br/>

:::

### state 가져오기 및 action 전달

- `useSelector()`: react-redux에서 제공하는 함수, Redux store의 상태를 읽어오며, 선택하는데 사용
- `useDispatch()`: react-redux에서 제공하는 함수, action을 Conponent 내부에서 발생시키고, Redux store에 action의 type 및 추가 데이터를 전달

```jsx title="Button.jsx"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions, visibleActions } from "../store/store";

function Button() {
  const { count } = useSelector((state) => state.sliceOfCount);
  const { visible } = useSelector((state) => state.sliceOfVisible);

  const dispatch = useDispatch();

  const increase1 = () => {
    dispatch(counterActions.increase1());
  };
  const increase5 = () => {
    dispatch(counterActions.increase5(5));
  };
  const decrease = () => {
    dispatch(counterActions.decrease());
  };
  const isVisible = () => {
    dispatch(visibleActions.onOff());
  };

  return (
    <div>
      {visible && <p>{count}</p>}
      <button onClick={increase1}>1씩 증가</button>
      <button onClick={increase5}>5씩 증가</button>
      <button onClick={decrease}>-1씩 감소</button>
      <button onClick={isVisible}>숫자 {visible ? "가리기" : "켜기"}</button>
    </div>
  );
}

export default Button;
```

:::note

```jsx
const { count } = useSelector((state) => state.sliceOfCount);
const { visible } = useSelector((state) => state.sliceOfVisible);
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/94f34884-f4bb-4c34-a58f-3245fd158d8b)

useSelector함수 안 state의 값을 출력하면 위의 값이 출력된다.<br/>
`sliceOfCount`와 `sliceOfVisible`의 값은 `configureStore` 생성할 때, **reducer 속성안 객체의 key값인 것을 확인**<br/>
`sliceOfCount`와 `sliceOfVisible`의 **속성 값인 `count`와 `visible` 각 slice에 사용된 state 값**을 구조분해 할당으로 생성했다.<br/>

---

```jsx
import { counterActions, visibleActions } from "../store/store";

const dispatch = useDispatch();

const increase1 = () => {
  dispatch(counterActions.increase1());
};
const increase5 = () => {
  dispatch(counterActions.increase5(5));
};
const decrease = () => {
  dispatch(counterActions.decrease());
};
const isVisible = () => {
  dispatch(visibleActions.onOff());
};
```

store.js에서 slice의 action을 export를 하였었다.<br/>
해당 Component에 state값을 사용하기 위해 import를 하였다.<br/>
`useDispatch`를 이용하여 각 이벤트 핸들러가 호출되었을 때의 Redux의 action을 store에 전달하여 해당 slice의 함수를 실행한다.<br/>

만약 "1씩 증가" 라는 버튼을 클릭 시, increase1 함수가 실행한다.<br/>
increase1함수 안에 `dispatch(counterActions.increase1())`이 실행된다.<br/>
그럼, Redux store에 action을 받아, 해당 action에 정의된 slice에 increase1이라는 함수를 실행시킨다.<br/>

---

```jsx title="Button.jsx의 increas5함수"
import { counterActions, visibleActions } from "../store/store";

const dispatch = useDispatch();

const increase5 = () => {
  dispatch(counterActions.increase5(5));
};
```

위와 같이 store에 action을 보내 해당 slice내의 함수를 실행시키는 것은 똑같지만 Argument에 추가적인 값을 전달보낸다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/93bf09ee-1116-416a-ba9a-b6cd0740a050)

```jsx title="store.js의 counterSlice"
const counterSlice = createSlice({
  name: "숫자세기",
  initialState: initialCounterState,
  reducers: {
    // increase1(state) {
    //   state.count++;
    // },
    increase5(state, action) {
      console.log(action);
      state.count = state.count + action.payload;
    },
    // decrease(state) {
    //   state.count--;
    // },
  },
});
```

위의 출력 결과물은 "5씩 증가"라는 버튼을 눌렀을 떄,<br/>
counterSlice의 reducers 속성안 increase5 함수에 action 값에 대한 출력 결과이다.<br/>
직접적으로 객체의 속성 값을 정하지는 않았지만, Argument값을 전달함으로 type값과 함께**payload값도 전달**된다.<br/>
action.payload를 이용하여 state값 연산에 사용 후, store에 업데이트를 시킨다.<br/>

:::
