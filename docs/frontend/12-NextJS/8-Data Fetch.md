# Data Fetch

## Client Side Data Fetch

```js title="(src/)lib/api.js"
export const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json.title;
};
```

```js title="(src/)app/page.js"
"use client";

import { useEffect, useState } from "react";
import { fetchData } from "./lib/api";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetch() {
      const data = await fetchData();
      setData(data);
    }
    fetch();
  }, []);

  return (
    <>
      <div>API 결과: {data}</div>
      <Link href="/info">Info 페이지 이동</Link>
    </>
  );
}
```

```js title="(src/)app/loading.js"
export default function AppLoading() {
  return <>로딩 중...</>;
}
```

```js title="(src/)app/info/page.js"
export default function InfoPage() {
  return <p>Info Page 입니다.</p>;
}
```

:::note

위의 코드는 Next.js에서 클라이언트 사이드 방식으로 데이터를 패치해오는 코드이며,<br/>
React에서 사용되는 데이터를 가져오는 방법이다.<br/>

'use client`를 통해 Client Component로 선언이 되었다.<br/>
useEffect를 통해 페이지가 렌더링이 될 경우, API를 호출하여 데이터를 가져온다.<br/>
또한, 페이지를 전환하고 다시 돌아올 경우, Data를 새로 패치하면서 `로딩 중...`이라는 문구를 확인할 수 있다.<br/>

:::

## Next.js 서버 Data Fetch 방법

```js title="(src/)lib/api.js"
export const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json.title;
};
```

```js title="(src/)app/page.js"
import Link from "next/link";
import { fetchData } from "./lib/api";

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <div>API 결과: {data}</div>
      <Link href="/info">Info 페이지 이동</Link>
    </>
  );
}
```

```js title="(src/)app/loading.js"
export default function AppLoading() {
  return <>로딩 중...</>;
}
```

```js title="(src/)app/info/page.js"
export default function InfoPage() {
  return <p>Info Page 입니다.</p>;
}
```

:::note

클라이언트 사이드 Data Fetch 코드에서 Next.js에서 권장하는 서버에서 Data Fetch로 변경한 코드<br/>

---

**왜 useEffect없이도 데이터를 호출할까?**<br/>
위의 Component는 Server Component이다.<br/>
즉, pre-rendering을 통해 서버에서 HTML을 뿌려주는 구조를 가지고 있다.<br/>
서버에서 HTML을 만드는 단계에서 `async`와 `await`을 통해 해당 데이터가 반환되기 전까지 Client에게 전송을 하지않는다.<br/>
API의 데이터를 다 받게된다면 그때 Client에게 HTML을 제공한다.<br/>

---

**그럼 Client Side Data Fetch와 뭐가 다를까?**<br/>
Client Side Data Fetch같은 경우, useEffect를 보면 알 수 있다.<br/>
useEffect와 같은 경우, 렌더링이 될 때마다 새로 API호출을 하여 데이터를 가져온다.<br/>
반면, Next.js 서버 Data Fetch의 코드와 같은 경우 처음 한번만 렌더링이 되고, 이후에는 Data Fetch를 하지 않는다.<br/>

:::
