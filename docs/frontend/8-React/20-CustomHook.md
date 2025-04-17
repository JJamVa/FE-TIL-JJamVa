# Custom Hook

## Custom Hook이란?

- React Component에서 상태 관리나 사이드 이펙트 로직을 재사용 가능한 함수로 추상화한 것

:::tip

#### Custom Hook의 장점

1. 로직의 재사용
2. 코드의 가독성 향상
3. 테스트 용이성

:::

## Custom Hook 예시

```jsx title="useAxios.js"
import { useState } from "react";

function useAxios() {
  const [data, setData] = useState(null);

  async function getData(initLink) {
    try {
      const response = await fetch(initLink);
      const jsonData = await response.json();
      setData(JSON.stringify(jsonData));
    } catch {
      setData(undefined);
    }
  }

  return [data, getData];
}

export default useAxios;
```

```jsx title="Practice.js"
import React from "react";
import useAxios from "./Hooks/useAxios";

function Practice() {
  const [linkData, getLinkData] = useAxios();

  return (
    <>
      <button
        onClick={() =>
          getLinkData("https://picsum.photos/v2/list?page=1&limit=6")
        }
      >
        데이터 가져오기
      </button>
      <div>{linkData}</div>
    </>
  );
}

export default Practice;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4577cf44-9ec7-4513-87be-1b2ac2de056f)

:::note
useAxios.js에서 useState의 초기값을 설정 및 getData 함수를 선언하여 반환한다.<br/>
Practice.js에서는 useAxios를 import하여 모듈을 가져온다.<br/>

```jsx
const [linkData, getLinkData] = useAxios();
```

import 후, useAxios를 선언하여 linkData와 getLinkData로 구조분해 할당으로 값을 가져온다.<br/>
이때, linkData와 getLinkData는 useAxios에서 `useState의 data변수`와 `getData함수`이다.<br/>
버튼을 클릭하면 getLinkData 함수가 호출되어 지정된 URL에서 데이터를 가져오며, 이 데이터는 화면에 출력된다.<br/>

```jsx
async function getData(initLink) {
  try {
    const response = await fetch(initLink);
    const jsonData = await response.json();
    setData(JSON.stringify(jsonData));
  } catch {
    setData(undefined);
  }
}
```

useAxios.js에서 getData함수를 보면 전달된 Url에 대해 fetch 작업을 하였다.<br/>
해당 Url에 데이터가 존재할 경우, json객체 타입의 데이터를 linkData변수에 업데이트한다.<br/>
통신 문제 혹은 데이터가 없을 경우, undefined로 linkData로 업데이트한다.<br/>

:::
