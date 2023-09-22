# useEffect

## useEffect란?

- Component가 렌더링 될 때 특정 작업을 실행하는 react의 커스텀 훅
- `useEffect(콜백 함수, 의존성 배열)`로 사용
  - 함수: 특정 작업을 수행하는 코드
  - 의존성 배열: 배열안에 값의 변화할 때마다 동작. 생략가능

```jsx
import {useEffect } from 'react';

useEffect(()=> {
    // 상태 변화가 감지되어 렌더링 될 때 실행
    return () => {
        // 렌더링 하기 전 Component를 삭제 하기 전 작업 과정
        // cleanup 함수 실행
    }
},
[count1, count2 ...] // 배열 안에 담기 요소들이 상태 변화할 때마다 감지
)
```

:::info

#### cleanup 함수란?

1. Component가 사라질 때 실행되는 함수<br/>
   Component가 화면에서 제거되기 전 cleanup함수로 비동기작업 중단 및 리소스를 해제

2. useEffect내에 새로운 useEffect가 호출이 될 경우<br/>
   이전 useEffect에서 반환한 cleanup함수가 실행되기 전 새로운 useEffect가 실행<br/>
   이전의 작업을 정리 후, 새로운 작업을 설정하는데 사용

:::

## React Component 생명주기

- 마운트(Mount): Component가 생성되고 DOM에 추가될 때의 단계
- 언마운트(Unmount): Component가 DOM에서 제거되는 단계
- 업데이트(Update): Component의 상태나 속성이 변경되었을 때의 단계

## useEffect 형태

### 두번째 인자값이 없을 경우

- Component 업데이트 될 때마다 실행

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Hello");
});
```

### 두번째 인자값이 빈배열일 경우

- 처음 한번 실행

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Hello");
}, []);
```

### 두번째 인자값이 존재할 경우

- 배열안 요소가 변화될 때 마다 실행

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Hello");
}, [변수]);
```

<details>
<summary>useEffect를 이용한 시간 구하기</summary>
<div markdown="1">

```jsx
import React, { useState, useEffect } from "react";

function Time() {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());

  useEffect(() => {
    setToday(new Date());
    setHour(today.getHours());
    setMin(today.getMinutes());
    setSec(today.getSeconds());
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function Practice() {
  return (
    <div>
      <Time />
    </div>
  );
}

export default Practice;
```

:::note

위와 같이 코드를 작성하면 현재 시간을 출력할 수 있다.<br/>
하지만 하나의 문제가 발생한다.


:::

</div>
</details>
