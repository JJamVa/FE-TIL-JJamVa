# useRef

## useRef란?

- DOM 요소에 직접 접근하고 조작이 가능
- Component 이전 상태 또는 값을 저장
- Component의 생명주기 동안 유지되어야 하는 값을 저장 또는 조작이 가능
- `useRef(초기값)`으로 사용

:::info

#### useState와 useRef의 차이

`useState`는 값이 업데이트되면 Component가 재렌더링된다.<br/>
`useRef`는 값이 업데이트 되어도 Component가 재렌더링이 되지 않는다.<br/>

화면에 표시되어야 하는 정보를 저장할 때 `useRef`는 적합하지 않는다.<br/>

:::
