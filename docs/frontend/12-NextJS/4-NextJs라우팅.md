# Next.js 라우팅

## 일반 라우팅

- 페이지 간의 정적인 이동
- `(src/)app`내에 라우팅할 경로의 폴더명을 생성 및 해당 폴더에 `page.js`파일을 생성

```js title="(src/)app/page.js"
export default function Home() {
  return <div>Main Page</div>;
}
```

```js title="(src/)app/introduce/page.js"
export default function IntroducePage() {
  return <div>Introduce Page</div>;
}
```

:::note

Next.js의 프로젝트를 실행하면 `http://localhost:3000/`로 실행이 되며 `Main Page`문구를 확인 가능<br/>
`http://localhost:3000/introduce`에 대해 라우팅을 설정하기 위해서는 **해당 path에 대한 이름을 폴더명으로 작성**<br/>
아래 이미지는 폴더명으로 작성한 `introduce`에 대한 화면 구조<br/>
![image](https://github.com/JJamVa/JJamVa/assets/80045006/06fccdda-c1ce-4449-b75d-e2d1115458f0)

:::

## 동적 라우팅

- 페이지 간의 동적인 이동
- `(src/)app`의 경로내에 동적으로 경로의 폴더명을 **[폴더명]**로 생성 및 해당 폴더에 `page.js`파일을 생성

```js title="(src/)app/page.js"
export default function Home() {
  return <div>Main Page</div>;
}
```

```js title="(src/)app/[dynamic]/page.js"
export default function DynamicPage({ params }) {
  console.log(params);
  const { dynamic } = params;
  return <div>Dynamic {dynamic} Page</div>;
}
```

:::note
`http://localhost:3000/{path값}`주소로 접속 시, 어느 path값이 들어와도 `Dynamic {path값} Page`을 출력한다.<br/>
아래 이미지와 같이 폴더명을 `[폴더명]`을 사용하게 되면 Next.js에서 동적 라우팅이 가능하다.<br/>
즉, `폴더명`이 URL이 된다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/7a3d6e94-094d-41e9-8fec-5ac586f6ba8f)

DynamicPage함수 parameter를 보면 `{params}`가 있다.<br/>
params객체에는 **동적 라우팅된 URL parameter가 포함**된다.<br/>
즉, 동적 라우팅을 위해 생성한 `[폴더명]`안에 `폴더명`값을 params객체에 포함된다.<br/>

`http://localhost:3000/helloworld`로 이동 시, params의 값을 출력해보면 밑의 이미지와 같이 나온다.<br/>
![image](https://github.com/JJamVa/JJamVa/assets/80045006/85793732-b06e-4be7-890e-4123205dc3c7)
:::

## 페이지 라우팅하는 방법

### `<a href="/path"/>`

- 기본적인 HTML의 링크 방식

```js title="(src/)app/page.js"
export default function Home() {
  return (
    <>
      <div>Main Page</div>
      <a href="/helloworld">페이지 이동</a>
    </>
  );
}
```

```js title="(src/)app/[dynamic]/page.js"
export default function DynamicPage({ params }) {
  const { dynamic } = params;
  return <div>Dynamic {dynamic} Page</div>;
}
```

:::caution

Home Component의 `페이지 이동`를 클릭하면 동적 dynamic 페이지로 이동된다.<br/>
a태그를 사용하여 페이지를 이동하게 되면 새로운 페이지를 서버로부터 받아온다.<br/>
즉, 브라우저가 새로운 URL을 생성하고 이를 서버에 요청하여 페이지를 받아온다는 의미.<br/>
원본 데이터를 유지하며 페이지를 이동해야할 경우, a태그의 사용은 적합하지않다.<br/>
:::

### Link Component

- 클라이언트 사이드 라우팅

```js title="(src/)app/page.js"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Main Page</div>
      <Link href="/helloworld">페이지 이동</Link>
    </>
  );
}
```

```js title="(src/)app/[dynamic]/page.js"
export default function DynamicPage({ params }) {
  const { dynamic } = params;
  return <div>Dynamic {dynamic} Page</div>;
}
```

:::note

Link Component를 통해 `페이지 이동`을 클릭하게 되면 동적 dynamic 페이지로 이동한다.<br/>
Link를 통해 다른 페이지로 라우트될 경우, 전체 페이지를 다시 로드하지 않고 필요한 부분만 업데이트가 된다.<br/>
따라서 페이지 전환 시, 초기 상태 및 상태 정보가 유지<br/>

:::

### useRouter

- Next.js에서 제공하는 라우터 객체
- useRouter 객체 속성
  - back: 브라우저 히스토리에서 이전 페이지로 이동
  - forward: 브라우저 히스토리에서 다음 페이지로 이동
  - prefetch: 다음 페이지를 미리 로드하여 사용자 경험을 향상
  - replace: 현재 페이지를 새로운 페이지로 교체하여 브라우저 히스토리에 추가하지 않음
  - push: 새로운 페이지로 이동하고 브라우저 히스토리에 추가
  - refresh: 현재 페이지를 새로고침
  - fastRefresh: 빠른 새로고침을 수행(개발 모드에서만 사용)

```js
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/helloworld");
  };

  return (
    <>
      <div>Main Page</div>
      <button onClick={handleClick}>페이지 이동</button>
    </>
  );
}
```

```js title="(src/)app/[dynamic]/page.js"
export default function DynamicPage({ params }) {
  const { dynamic } = params;
  return <div>Dynamic {dynamic} Page</div>;
}
```

:::note

useRouter를 사용하기 위해서는 `'use client'`를 작성<br/>
`'use client'`는 클라이언트 측 라우팅을 사용하기 떄문에 작성해야된다.<br/>
즉, **명시적으로 클라이언트 측에서만 동작하는 특정 기능을 설정**<br/>
useRouter의 속성 중 push를 이용하여 해당 페이지로 이동시킨다.<br/>

:::
