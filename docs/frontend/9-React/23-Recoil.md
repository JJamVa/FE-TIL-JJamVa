# Recoil

## Recoil이란?

- Facebook에서 개발한 상태 관리 라이브러리
- React 애플리케이션의 **전역 상태를 관리**하기 위한 간단하고 직관적인 방법을 제공
- 해당 React 프로젝트 경로 터미널에 `npm install recoil` 입력하여 설치

## Recoil의 핵심 개념

- `Atoms`: 애플리케이션의 상태를 나타내는 단위로, 원자적인 값들을 나타낸다.
  - 사용자의 정보, 테마 설정, 데이터 리스트 등 표현
- `Selectors`: Atom을 기반으로 파생된 값을 계산하는 함수. 원자값에 의존하는 복잡한 계산 로직을 구현
  - 읽기 전용으로만 사용, 다른 Selector나 Atom에 의존 가능

## Recoil 사용 문법

- `atom`: Recoil에서 상태의 원자 단위를 나타내는 것. 상태를 저장하고 관리하는데 사용
- `selector`: atom 및 selector 파생 상태를 정의하는데 사용.
- `useRecoilState`: atom의 현재 상태 값과 그 값을 업데이트하는 함수를 반환
- `useRecoilValue`: atom 또는 selector의 현재 상태 값. **값 변경은 불가능**
- `useSetRecoilState`: atom의 상태 값을 업데이트하는 함수만을 반환. **atom의 상태를 변경이 가능**
- `useResetRecoilState`: atom을 초기값(default)으로 재설정하는 함수를 반환.

## Recoil 구현

- 구현:
  - input을 이용해 입력 값을 받는다.
  - "input 값 초기화"를 누르면 값을 초기화
  - 현재 입력 값에 따라 현재 길이를 표현

![image](https://github.com/JJamVa/JJamVa/assets/80045006/85ee1e4f-7139-4b44-b509-8c401a112a45)

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
```

:::note
`<RecoilRoot>`를 이용하여 하위 Component들에게 Recoil 상태와 로직을 사용할 수 있게 선언한다.<br/>

:::

```jsx title="atom.js"
import { atom, selector } from "recoil";

export const textAtom = atom({
  key: "text",
  default: "", // 초기값
});

export const textLengthSelector = selector({
  key: "textlength",
  get: ({ get }) => {
    const current = get(textAtom);
    return current.length;
  },
});
```

:::note
위의 코드는 초기 Recoil의 상태 및 atom의 상태를 파싱하는 코드이다.<br/>
textAtom변수에는 key속성과 default속성이 있다.<br/>

- `key`: atom 또는 selector의 고유한 식별자. 다른 atom 또는 selector 중복 불가능
- `default`: atom의 초기값

```jsx
export const textAtom = atom({
  key: "text",
  default: "",
});
```

실질적으로 상태값은 `default`이며, textAtom의 상태값을 사용할 Component를 위해 export한다.<br/>

---

textLengthSelector변수에도 key속성과 get속성을 사용한다.<br/>

- get: selector가 현재 값을 계산하는 로직을 담고 있다. get함수는 `{get}`파라미터로 받으며, atom 또는 selector 현재 상태의 값을 읽는다.

```jsx
export const textLengthSelector = selector({
  key: "textlength",
  get: ({ get }) => {
    const current = get(textAtom);
    return current.length;
  },
});
```

get속성 값은 콜백 함수를 통해 현재의 textAtom 변수의 상태 값을 이용하여 길이값을 반환한다.<br/>
textLengthSelector의 상태값을 사용할 Component를 위해 export한다.<br/>

:::

```jsx title="App.js"
import React from "react";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";
import { textAtom, textLengthSelector } from "./recoil/atom";

function App() {
  // const inputvalue = useRecoilValue(textAtom);
  // const setInputValue = useSetRecoilState(textAtom);
  const [inputvalue, setInputValue] = useRecoilState(textAtom);

  const reset = useResetRecoilState(textAtom);

  const length = useRecoilValue(textLengthSelector);

  const inputEventHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input onChange={inputEventHandler} value={inputvalue} />
      <button type="button" onClick={reset}>
        input 값 초기화
      </button>
      <p>글자 길이: {length}</p>
    </>
  );
}

export default App;
```

:::note

```jsx
import { textAtom } from "./recoil/atom";

const [inputvalue, setInputValue] = useRecoilState(textAtom);
```

`useRecoilState`는 `useState`와 같이 사용하면 된다.<br/>
atom.js에서 import 받은 textAtom 변수를 이용하여<br/>
inputvalue는 **textAtom 변수의 현재 상태값**, setInputValue는 **textAtom변수의 상태 업데이트 함수**를 구조분해 할당으로 선언한다.<br/>

```jsx
import { textAtom } from "./recoil/atom";

const inputvalue = useRecoilValue(textAtom);
const setInputValue = useSetRecoilState(textAtom);
```

위의 코드 또한 `const [inputvalue, setInputValue] = useRecoilState(textAtom)`코드와 똑같은 동작을 한다.<br/>
즉, useRecoilValue는 textAtom의 **상태 값을 읽고**, useSetRecoilState는 textAtom의 **상태 값을 수정**한다.<br/>

---

```jsx
const reset = useResetRecoilState(textAtom);

return (
  <>
    <button type="button" onClick={reset}>
      input 값 초기화
    </button>
  </>
);
```

위의 코드는 textAtom 변수 속성 중 **default 초기값으로 재설정 하는 함수**를 reset변수에 저장한다.<br/>
button을 클릭 시, textAtom의 상태 초기값으로 돌아간다.<br/>

---

```jsx
import { textLengthSelector } from "./recoil/atom";

const length = useRecoilValue(textLengthSelector);
```

위의 코드는 atom.js의 textLengthSelector변수를 import한다.<br/>

```jsx title="atom.js의 textLengthSelector"
export const textLengthSelector = selector({
  key: "textlength",
  get: ({ get }) => {
    const current = get(textAtom);
    return current.length;
  },
});
```

해당 코드를 보면 현재 textAtom 변수의 상태값을 받아, 길이를 반환하고 있다.<br/>
즉, length 변수는 atom.js의 selector함수의 get속성의 함수 반환값이 저장된다.<br/>

:::
