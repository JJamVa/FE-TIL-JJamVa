# Server, Client Component

## Server Component

- 애플리케이션의 서버 영역으로 인해 렌더링이 되는 Component
- 서버에서 실행되며 클라이언트로 코드가 전송되지 않는 React Component
- `정적 렌더링`, `동적 렌더링`, `스트리밍`을 지원

:::note

**스트리밍** 이란?<br/>

서버에서 HTML을 생성하고 이를 클라이언트에 점진적으로 전송하는 방식<br/>
Component가 데이터를 필요로 할 경우, 해당 데이터가 준비될 때까지 대기하며, 준비되는 즉시 해당 부분만 렌더링하여 전송

:::

## Server Component의 특징

- 서버에서만 실행
  - 서버에서 처리한 후 HTML만 클라이언트에게 전송
- 코드 전송 없음
  - 서버 Component에 관련된 JS코드를 Client에게 전송하지 않음
  - 페이지의 로딩속도 개선
- 보안 개선
  - 서버에서만 작동하기 때문에 Client에게 중요 코드나 데이터를 노출시키지 않음
- 서버 최적화 작업 수행
  - DB 쿼리나 파일 처리 등 서버에서 효율적으로 수행할 수 있는 작업을 처리

:::note

Next.js의 기본적으로 파일을 생성을 하게 되면 자동적으로 Server Component로 생성된다.<br/>
다만, React Hook이나 브라우저 환경의 코드 및 제공하는 API를 사용할 수 없다.<br/>
**Node 환경에서 제공하는 API는 사용이 가능**

:::

## Client Component

- 사용자와의 상호작용에 응답하여 동적인 행동을 수행할 수 있는 Component

### Client Component의 특징

- 클라이언트 사이드 실행
  - 사용자의 상호작용(클릭, 입력 이벤트)에 반응하여 UI를 업데이트
- 동적 상호작용
- React에서 사용하는 `useState`, `useEffect`와 같은 라이프사이클 훅을 사용 가능

### Client Component 코드

```js title="(src/)app/page.js"
"use client";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  const handleClickIncrease = () => {
    setValue(value + 1);
  };

  return (
    <>
      <div>현재 값:{value}</div>
      <button onClick={handleClickIncrease}>값 증가</button>
    </>
  );
}
```

:::note

위의 코드는 React의 useState를 이용하여 버튼을 클릭 시, 값을 증가하게 하는 코드<br/>

Next.js에서 기본적으로 파일을 생성하게 되어 사용할 경우 기본적으로 Server Component로 생성 된다.<br/>
Server Component로 사용될 경우, 페이지 내에서 특정 이벤트가 발생하였을 때 **동적 상호작용(interaction)이 어렵다.**.<br/>
이유는 서버에서 **미리 렌더링 되어 HTML 형태로 Client에게 전달**하기 때문에 값을 변경하더라도 렌더링 되기 전까지 반영이 되지 않는다.<br/>
즉, 형태는 서버에서 제공을 해주지만 상호작용이 필요한 부분은 Client Component에서 처리를 해야된다.<br/>

Client Component를 사용하기 위해서는 'use client'를 선언하면 된다.<br/>
이를 통해 서버에서 렌더링 없이 Client에서 상호작용 및 이벤트를 처리하면 된다.<br/>

:::

:::info

**'use client'** 란?

- Component가 클라이언트 사이드에서만 렌더링이 되어야한다고 Next.js에게 알려주는 명령어
- Client Component라고 명시적인 표현

:::
