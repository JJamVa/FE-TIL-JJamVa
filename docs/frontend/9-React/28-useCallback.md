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

## useCallback 코드

## useMemo와 useCallback
