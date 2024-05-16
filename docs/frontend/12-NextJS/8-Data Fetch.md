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
import { fetchData } from "@/lib/api";
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

```
src
├── lib
│   └── api.js
└── app
     │
     ├── page.js (Home 페이지(Client Component))
     ├── loading.js (loading 페이지)
     └── info
          └── page.js (info 페이지)
```

위의 코드는 Next.js에서 클라이언트 사이드 방식으로 데이터를 패치해오는 코드이며,<br/>
React에서 사용되는 데이터를 가져오는 방법이다.<br/>

'use client`를 통해 app의 page.js를 Client Component로 선언한다.<br/>
useEffect를 통해 매번 페이지가 렌더링이 될 경우, API를 호출하여 데이터를 가져와 출력한다.<br/>

:::

## Server Data Fetch 방법

```js title="(src/)lib/api.js"
export const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json.title;
};
```

```js title="(src/)app/page.js"
import Link from "next/link";
import { fetchData } from "@/lib/api";

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

```
src
├── lib
│   └── api.js
└── app
     │
     ├── page.js (Home 페이지(Server Component))
     ├── loading.js (loading 페이지)
     └── info
          └── page.js (info 페이지)
```

클라이언트 사이드 Data Fetch 코드에서 Next.js에서 권장하는 Server Data Fetch로 변경한 코드<br/>

---

**왜 useEffect없이도 데이터를 호출할까?**<br/>
위의 app의 page.js는 Server Component이다.<br/>
즉, pre-rendering을 통해 서버에서 HTML을 Client에게 전달하여 렌더링을 한다.<br/>
서버에서 HTML을 만들 때 `async`와 `await`을 통해 해당 데이터를 받기 전까지 Client에게 전송을 하지않는다.<br/>
API의 데이터를 다 받게된다면 그때 Client에게 렌더링된 HTML을 제공한다.<br/>

---

**Client Side Data Fetch와 뭐가 다를까?**<br/>
Client Side Data Fetch같은 경우, useEffect를 보면 알 수 있다.<br/>
useEffect를 통해 페이지가 렌더링될 때마다 API호출을 하여 데이터를 가져온다.<br/>
반면, Server Data Fetch 코드와 같은 경우 처음 렌더링이 될 때, 해당 **데이터를 캐싱하기 때문**이다.<br/>

app에서 info로 라우팅 후, 다시 app으로 돌아왔을 때에 대한 네트워크 이미지이다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/11d48261-9805-4ee2-8ed0-8af931dbac97)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/15eebec6-4d8e-4591-b03a-bbff125c4e8d)

app페이지로 돌아가였을 때, 별도의 API호출 없이도 데이터가 정상적으로 나오는 것을 확인 가능<br/>

:::
