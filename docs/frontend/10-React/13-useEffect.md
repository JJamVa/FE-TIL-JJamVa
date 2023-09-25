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

### useEffect 두번째 인자값이 없을 경우

- Component 업데이트 될 때마다 실행

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Hello");
});
```

### useEffect 두번째 인자값이 빈배열일 경우

- 처음 한번 실행

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Hello");
}, []);
```

### useEffect 두번째 인자값이 존재할 경우

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
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
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

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5506a17b-ca91-499e-89b9-df87dc87e006)

:::info

#### setInterval과 setTimeOut

- `setInterval`: 설정된 주기마다 **지속적으로 함수를 반복 실행**
  - `clearInterval`에 인터벌 ID를 전달하여 중지할 작업을 지정

- `setTimeout`: 일정한 시간이 경과한 후에 **한 번만 함수를 실행**
  - `clearTimeout`에 타이머 ID를 전달하여 중지할 작업을 지정

:::

:::note
useEffect를 이용하여 의존성 배열에 있는 today 변수의 값이 변할때 마다 실행이 된다.<br/>
setInterval 및 clearInterval을 사용하여 주기적으로 시간을 업데이트하고,<br/>
useEffect의 정리 함수(cleanup 함수)를 활용하여 Component가 unmount되거나 재렌더링될 때<br/>
이전에 설정한 Interval을 정리하는 방법이다.<br/>
이후 useState의 상태 관리 함수를 호출하여 현재의 Date객체로 상태변환을 시켜 현재 시간을 출력한다.<br/>

:::

</div>
</details>
