# React Query

## React Query란?

- 데이터를 효과적으로 관리하고 처리하기 위한 라이브러리
- 서버 상태 및 캐시를 관리하고, API 호출과 같은 **비동기 작업을 단순화** 작업
- 해당 React 프로젝트 경로 터미널에 `npm install @tanstack/react-query` 입력하여 설치

:::tip
react-query V4이하를 사용할 경우, `npm install react-query`를 설치
:::

## React Query 초기 설정

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

:::note

`queryClient` 변수는 QueryClient의 인스턴스를 생성하여 React Query의 상태와 관련 기능을 사용할 수 있도록 생성<br/>
`<QueryClientProvider client={queryClient}>`를 통해 React Query를 사용할 수 있게 최상위 Component를 감싸준다.

:::

## useQuery

- 데이터를 가져오는 비동기 작업(GET방식)을 관리하는 데 사용
- `useQuery({queryKey: 쿼리 키, queryFn: 비동기 함수, 추가 옵션})`의 형태로 사용

:::tip
**useQuery의 함수 옵션**

```js
let {useQuery 결과값에 대한 속성} = useQuery({
    queryKey,
    queryFn,
    gcTime
    ...
})
```

- 핵심 옵션
  - **queryKey**: Query를 식별하는 데 사용되는 키. 캐시에서 데이터를 찾을 때 사용
  - **queryFn**: 데이터를 가져오는 비동기 함수
  - gcTime: 가비지 컬렉션을 위한 시간 간격 조정. 기본값은 5분(1000 \* 60 \* 5)
  - staleTime: 데이터가 만료되어 다시 조회되기 전까지의 시간을 설정
  - enabled: 값이 true일 경우 동기적인 함수로 실행

[useQuery 문서](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)
:::

:::info
**gcTime과 staleTime**

- `gcTime(Garbage Collection Time)`

  - cacheTime이라고도 부름
  - 캐시에서 사용되지 않는(해당 Query unMount, inactive) Query 데이터가 메모리에서 제거될 때 까지의 시간
  - gcTime은 staleTime과 관계없이, 비활성화된 상태 기준으로 캐시 데이터 삭제를 결정

- `staleTime`
  - stale은 **오래된**의 의미
  - 이전 Query의 캐시가 존재하지만, 일정 시간동안 업데이트 되지 않는 시간
  - staleTime 동안의 데이터는 `fresh`상태, staleTime이 초과될 경우 `stale`상태
  - stale상태일 경우, 백그라운드에서 데이터를 새로고침. 캐시된 데이터는 즉시 확인

:::

### 정적 Query Key

```js title="비동기 함수"
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return data;
};

export default fetchData;
```

```js title="App.js"
import { useQuery } from "@tanstack/react-query";
import fetchData from "./Async";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <>로딩 중</>;
  }

  if (error) {
    return <>에러 발생!!</>;
  }

  return (
    <>
      <h1>제목: {data.title}</h1>
    </>
  );
}
export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/a90598d1-32ad-4351-bfef-e785801f79fa)

:::note

위의 코드는 useQuery를 이용하여 데이터를 표현하는 코드이다.<br/>
`queryKey`에 **고유 query key값**을 설정, `queryFn`에 **데이터를 받아올 비동기 함수를 등록**한다.<br/>

데이터를 받아오는 단계(pending)에서 isLoading을 통해 로딩화면을 표현<br/>
실패할 경우 error화면을 표현한다.<br/>

:::

### 동적 Query Key

- Query 동작과정은 일치하나 개별로 관리해야할 경우 사용
- 편리한 유지보수 및 가독성을 위해 사용

```jsx title="비동기 함수"
import axios from "axios";

const fetchUsers = async (page, pageSize) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`,
    {
      params: {
        _page: page,
        _limit: pageSize,
      },
    }
  );
  return response.data;
};

export default fetchUsers;
```

```jsx title="App.js"
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import fetchUsers from "./Async";

const App = () => {
  const [page, setPage] = useState(1);
  const pageSize = 2;

  function decrease() {
    if (page > 1) setPage(page - 1);
  }

  function increase() {
    if (page < 5) setPage(page + 1);
  }

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", page, pageSize],
    queryFn: () => fetchUsers(page, pageSize),
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={decrease}>이전</button>
      <button onClick={increase}>다음</button>
    </div>
  );
};

export default App;
```

:::note

위의 코드는 Query의 key값이 동적인 경우에 대한 예시 코드이다.<br/>
page와 pageSize를 인자로 받아, 페이지에 해당하는 사용자 목록을 가져온다.<br/>
page혹은 pageSize값이 변할 때마다, 새로운 Query가 생성이 되며 독립적으로 캐시 관리를 한다.<br/>
즉, key값이 동적일 경우에 같은 기능의 비동기 함수를 사용하더라도 **개별의 Query를 관리** 할 수 있으며,<br/>
필요에 따라 특정 페이지의 Query에 대한 부가적인 동작(업데이트, 패치 등)을 구현 할 수 있다.<br/>

:::

## useQueries

- 여러 개의 Query를 **동시에 처리**하는 데 사용되는 React Query의 함수
- useQuery와 유사하지만 여러 개의 Query를 배열로 받아 처리

```js title="비동기 함수"
import axios from "axios";

export const fetchData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return data;
};

export const fetchDataUser = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return data;
};
```

```js title="App.js"
import { useQueries } from "@tanstack/react-query";
import { fetchData, fetchDataUser } from "./Async";

function App() {
  const queryResult = useQueries({
    queries: [
      { queryKey: "todos", queryFn: fetchData },
      { queryKey: "users", queryFn: fetchDataUser },
    ],
  });

  if (queryResult[0].isLoading && queryResult[1].isLoading) {
    return <>로딩 중</>;
  }

  if (queryResult[0].error && queryResult[1].error) {
    return <>에러 발생!!</>;
  }

  return (
    <>
      <h1>제목: {queryResult[0].data.title}</h1>
      <h2>유저 이름: {queryResult[1].data.name}</h2>
    </>
  );
}
export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/2479796e-6a5a-4c47-b459-851b5bce1eb5)

:::note

useQueries 같은 경우, 여러개의 Query를 `queries`속성에 배열로 정보를 저장해야된다.<br/>
각 Query의 data에 접근하기 위해서 해당 query의 index로 접근하여 데이터를 호출하면 된다.<br/>

만약 두개의 Query 중 하나가 실패, 하나가 성공할 경우, 성공한 데이터는 정상적으로 반환이 된다.<br/>
React Query에서 모든 Query가 독립적으로 처리되기 때문에 서로에게 영향을 끼치지 않는다.<br/>

:::

## useMutation

- 데이터의 생성(CREATE), 수정(UPDATE), 삭제(DELETE)와 같은 변경 작업을 처리하기 위해 사용
- API 호출과 같은 비동기 작업에 사용, 작업이 성공하면 데이터를 업데이트 실패하면 에러를 처리
- `useMutation({mutationFn: 비동기 함수, 추가 옵션})`의 형태로 사용

```js title="비동기 함수(post)"
import axios from "axios";

const createPost = async (newPost) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create post");
  }
};

export default createPost;
```

```js title="App.js"
import React from "react";
import { useMutation } from "@tanstack/react-query";
import createPost from "./Async";

const App = () => {
  const mutation = useMutation({
    mutationFn: createPost,
    onMutate: (data) => {
      console.log("onMutate", data);
    },
    onError: (error, variable, context) => {
      console.log("onError", error, variable, context);
    },
    onSuccess: (data, variables, context) => {
      // data: 서버로부터 반환받은 새로 생성된 포스트 데이터
      // variables: createPost 함수에 전달된 인자, 즉 생성하려는 포스트 데이터
      // context : 뮤테이션의 생명주기 동안 특정 상태를 전달하거나, mutation이 트리거되기 전의 상태
      console.log("onSuccess", data, variables, context);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });

  const handleCreatePost = async () => {
    const newPost = {
      title: "New Post",
      body: "This is the body of the new post.",
      userId: 1,
    };

    mutation.mutate(newPost);
  };

  return (
    <div>
      <button onClick={handleCreatePost} disabled={mutation.isLoading}>
        Create Post
      </button>
      {mutation.isLoading && <p>Creating...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8c59c095-d40f-4d16-a48a-8592c687e935)

:::note

useMutation을 이용하여 비동기 함수(post)의 결과를 보여주는 코드이다.<br/>
버튼을 클릭 시, hanldeCreatePost함수가 실행이 되며 내부에서 useMutation의 mutate메소드가 Argument값과 함께 실행이 된다.<br/>
이를 통해, createPost 비동기 함수에게 값이 전달되며 실행이 되어, mutation의 결과 값이 어떻게 반환되었는지 확인할 수 있다.<br/>

**useMutation()의 추가 옵션**

- onMutate: mutation이 트리거가 되기 직전에 호출<br/>
- onSuccess: 비동기 함수의 처리가 성공적으로 수행했을 경우<br/>
- onError: 비동기 함수의 처리가 정상적으로 되지않을 경우<br/>
- onSettled: 비동기 함수의 성공/실패와 상관없이 완료되면 실행<br/>

[useMutation 문서](https://tanstack.com/query/latest/docs/framework/react/reference/useMutation)
:::

## QueryCache

- Query 결과를 저장하고 관리하는 역할
- 다양한 설정을 통해 동작을 조절하고, 쿼리의 데이터를 효과적으로 관리

```js title="QueryCache 코드"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log("에러 출력", error, query);
    },
    onSuccess: (data) => {
      console.log("성공 출력", data);
    },
  }),
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

```js title="비동기 함수"
import axios from "axios";

export const fetchData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return data;
};
```

```js title="App.js"
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./Async";

function App() {
  const queryResult = useQuery({ queryKey: ["todos"], queryFn: fetchData });

  if (queryResult.isLoading) {
    return <>로딩 중</>;
  }

  if (queryResult.error) {
    return <>에러 발생!!</>;
  }

  return (
    <>
      <h1>제목: {queryResult.data.title}</h1>
    </>
  );
}
export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e4a4ed38-781e-4e2d-99f4-cc0b93a2dc2d)

:::note

QueryCache와 같은 경우, 초기 Query의 영역을 지정할 때 함께 사용하는 함수이다.<br/>
Query가 성공적으로 실행될 경우 QueryCache안 onSuccess 속성이 실행이 되며, 실패할 경우, onError 속성이 실행된다.<br/>
QueryCache는 Query들이 **전역적으로 실행 결과에 대한 확인 및 관리**하는 React Query의 객체이다.<br/>

:::

## React Query의 Suspense모드

- 데이터 로딩을 전역적으로 간단하게 처리
- React에서 비동기 데이터 로딩 화면을 더 쉽게 다루도록 해주는 기능

<details>
<summary>선택적 Query Suspense</summary>
<div markdown="1">

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </QueryClientProvider>
);
```

```jsx title="비동기 함수"
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export default fetchPosts;
```

```jsx title="선택적 suspense 코드"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "./Async";

const App = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    suspense: true,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

:::note
위의 index.js 코드에서 Suspense를 사용하기 위해 설정을 해야된다.<br/>
Suspense를 사용하기 위해서는 **Suspense를 사용할 Component보다 상위에 존재**해야한다.<br/>
`<React.Suspense fallback={<Loading에 표현할 Component/>}`를 최상위 Component로 설정을 하면 Suspense 사용 가능<br/>

Suspense를 사용할 Query의 속성에 `{suspense:true}`을 추가로 작성하면 된다.<br/>
그럼 Suspense를 등록한 Query가 비동기 통신 진행 상태(Pending)일 경우,<br/>
`<React.Suspense>`속성의 **fallback속성에 표현할 Component 화면이 출력**된다.<br/>

이를 통해 공통으로 로딩 화면을 표현할 Query에 사용 가능하다.<br/>

:::

</div>
</details>

<details>
<summary>모든 Query Suspense</summary>
<div markdown="1">

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </QueryClientProvider>
);
```

```jsx title="비동기 함수"
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export default fetchPosts;
```

```jsx title="App.js"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "./Async";

const App = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

:::note
Suspense를 사용하는 방법 중 다른 방법이다.<br/>
위의 코드와 같은 경우 개별적으로 Query에 대해 옵션을 부여하지 않고,<br/>
QueryClient의 옵션을 통해 **사용하는 모든 Query에 대해 Suspense를 옵션을 부여**하는 방법이다.<br/>

사용법은 최상위 Component에 접근하여 QueryClient에게 옵션을 부여하면 된다.<br/>

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
```

이를 통해, 사용할 모든 Query들에게 Suspense를 부여한다.<br/>

**모든 Query가 똑같은 로딩화면을 제공할 경우 매우 편리하다.**

:::

</div>
</details>

## PrefetchQuery

- 특정 쿼리의 데이터를 **미리 가져와 캐시에 저장**하는 역할
- 사용자가 실제로 해당 데이터를 요구하기 전에 데이터를 미리 로드

:::tip

query 캐시의 데이터를 확인하기 위해 react query devtools를 사용<br/>
해당 React 프로젝트 경로 터미널에 `npm install @tanstack/react-query-devtools` 입력하여 설치<br/>

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
```

위와 같이 ReactQueryDevtools 태그를 작성해서 사용하면 된다.<br/>

:::

<details>
<summary>prefetchQuery 구현</summary>
<div markdown="1">

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
```

```jsx title="비동기 함수"
import axios from "axios";

export const fetchPostsByPage = async (page) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return data;
};
```

```jsx title="App.js"
import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPostsByPage } from "./Async";

function App() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPostsByPage(page),
    keepPreviousData: true, // 이전 페이지 데이터 유지
    staleTime: 5000, // 캐시 데이터의 fresh 유지 시간
  });

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery({
      queryKey: ["posts", nextPage],
      queryFn: () => fetchPostsByPage(nextPage),
    });
  }, [page, queryClient]);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러: {error.message}</div>;

  return (
    <div>
      <button
        onClick={() => setPage((old) => (old > 0 ? old - 1 : old))}
        disabled={page === 1}
      >
        이전 페이지
      </button>
      <button onClick={() => setPage((old) => old + 1)} disabled={page === 10}>
        다음 페이지
      </button>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
```

:::note

App.js에는 API를 통해 10개씩 데이터를 표현하는 코드다.<br/>

```jsx
useEffect(() => {
  const nextPage = page + 1;
  queryClient.prefetchQuery({
    queryKey: ["posts", nextPage],
    queryFn: () => fetchPostsByPage(nextPage),
  });
}, [page, queryClient]);
```

useEffect를 통해 page와 queryClient의 값이 바뀔때마다 **prefetchQuery를 실행**시킨다.<br/>
useState의 page의 값에 1을 더해 다음 페이지에 대해 미리 query 데이터를 캐싱하는 작업이다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/c4725515-87dc-46ea-8e52-55715525f4ac)

처음 마운트가 될 때, prefetchQuery를 통해 먼저 `["posts",2]`를 캐싱 한다.<br/>
이후 `["posts",1]`을 캐싱하여, `["posts",1]`에 대한 데이터를 렌더링한다.<br/>
react-query-devtools을 통해 `["posts",1]`와 `["posts",2]`가 캐싱된 것을 확인할 수 있다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/01045dec-7a11-4ced-9c22-f5d2b0f8b3ed)

`다음 페이지`버튼을 누를 경우, `["posts",2]`에 대한 query 데이터를 가져온다.<br/>
prefetchQuery를 통해 `["posts",2]`에 대한 데이터가 캐싱되었기 때문에 별도의 로딩화면 없이 데이터를 표현 가능하다.<br/>
`["posts",2]`에 대한 페이지를 렌더링하기 전, `["posts",3]`에 대한 query를 prefetch를 한다.<br/>

prefetchQuery를 통해 사용자의 기준에서 별도의 로딩화면 없이 데이터를 즉시 표현할 수 있다.<br/>

:::

</div>
</details>

## invalidateQueries

- **캐시된 쿼리를 무효화**시키고, 필요에 따라 자동으로 새로운 데이터로 갱신
- 데이터의 일관성을 유지하고, **최신 상태를 반영**하기 위해 사용

<details>
<summary>invalidateQueries 구현</summary>
<div markdown="1">

```jsx title="비동기 함수"
import axios from "axios";

export const fetchComments = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?_limit=5"
  );
  return data;
};

export const updateComment = async (commentId, newInfo) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
    newInfo
  );
  return data;
};
```

```jsx title="App.js"
import React from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { fetchComments, updateComment } from "./Async";

function App() {
  const queryClient = useQueryClient();
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const { mutate } = useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  const handleUpdate = (comment) => {
    mutate(comment.id, { ...comment, body: "Updated comment!" });
  };

  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <button onClick={() => handleUpdate(comment)}>댓글 업데이트</button>
        </div>
      ))}
    </div>
  );
}

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/3fab762c-b550-4352-938f-8a337db4563f)

:::danger
실제 API는 동작하지 않는다.
:::

:::note

해당 API의 데이터 표현 및 수정을 하는 코드이다.<br/>
useQuery를 통해 comments query를 캐싱한다.<br/>
`댓글 업데이트` 버튼을 누를 경우, comment를 업데이트하는 mutation을 실행시킨다.<br/>

```js
const { mutate } = useMutation({
  mutationFn: updateComment,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["comments"] });
  },
});
```

mutation이 실행되어 성공할 경우, invalidateQueries가 실행된다.<br/>
invalidateQueries에 입력된 query 키값의 **캐싱이 무효화**가 된다.<br/>
이후, useQuery가 실행되어 새로운 데이터를 캐싱하며, 리렌더링이 발생한다.<br/>

:::

:::caution

**invalidateQueries 사용 시, 주의 사항**

query key가 `["comments"]`, `["comments",1]`, `["comments",{ type: 1}]`이 있다고 가정.<br/>

```jsx
queryClient.invalidateQueries({ queryKey: ["comments"] });
```

위의 코드와 같이 실행될 경우, `["comments"]`만 invalidate가 되는 것이 아니다.<br/>
queryKey의 값 중 `["comments"]`가 포함된 모든 query들이 다 invalidate가 되어 캐시가 무효화가 된다.<br/>

:::

:::info
**invalidateQueries 추가 옵션**

- exact: **정확히 일치하는 query Key**만 무효화(기본값 false)
- refetchActive: **활성화된 query**에 대해 데이터를 자동으로 다시 가져올지 여부를 결정(기본값 true)
- refetchInactive: **비활성된 query**에 대해서도 데이터를 다시 가져올지 여부를 결정(기본값 false)
- predicate: 특정 조건에 부합하는 쿼리만 무효화할 수 있는 함수를 제공. boolean 값을 반환
- type: query 대상을 설정
  - all: 비/활성화된 query
  - active: 활성화된 query
  - inactive: 비활성화된 query

:::

</div>
</details>

## useInfiniteQuery(무한 스크롤)

- **무한 스크롤** 혹은 **페이지 네이션**을 구현할 때 사용
- 사용자가 실제로 필요로 하는 데이터만 점진적으로 불러와 성능 개선

:::caution
**무한 스크롤에 사용 시, 고려 사항**<br/><br/>

사용자가 스크롤하는 위치를 실시간으로 감지하고, 페이지 끝에 도달했을 때 추가적인 데이터를 불러와야 한다.<br/>
이 과정을 효율적으로 관리하기 위해, 주로 다음 두 가지 방법을 사용<br/>

1. **Intersection Observer API**

- 브라우저 내장 API
- 타겟 요소가 뷰포트(화면에 보이는 영역)에 들어오는지 여부를 비동기적으로 감지
- 데이터를 추가로 불러올 버튼이나 페이지 끝을 감지하는 데 유용

2. **viewport를 이용한 스크롤 이벤트 핸들링**

- 사용자의 스크롤 위치를 계산하여 특정 지점에서 추가 데이터를 요청

:::

<details>
<summary>IntersectionObserver API를 이용한 무한스크롤 구현</summary>
<div markdown="1">

```jsx title="비동기 함수"
import axios from "axios";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );
  return res.data;
};

export default fetchPosts;
```

```jsx title="무한스크롤 구현"
import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchPosts from "./Async";

const App = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infiniteScroll"],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

  const observer = useRef();

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) return;

    const observerInstance = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (observer.current) {
      observerInstance.observe(observer.current);
    }

    return () => {
      if (observer.current) {
        observerInstance.unobserve(observer.current);
      }
    };
  }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

  return (
    <div style={{ height: "30vh", overflow: "auto" }}>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((post, postIndex) => (
            <p
              key={post.id}
              ref={page.length === postIndex + 1 ? observer : null}
            >
              {post.title}
            </p>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
```

:::note
위의 코드는 useInfiniteQuery를 이용해 스크롤이 최하단에 내려갈 경우, 새로운 데이터를 보여주는 코드이다.<br/>

**useInfiniteQuery 옵션**

- `getNextPageParam`:
  - 불러온 데이터의 마지막 페이지를 기반으로 다음 페이지 데이터를 요청할 때 필요한 변수를 반환
  - 다음 페이지 데이터 요청 시 queryFn에 전달

**useInfiniteQuery 반환값**

- `fetchNextPage`: 다음 페이지의 데이터를 명시적으로 불러오는 함수
- `hasNextPage`: 더 불러올 페이지가 있는 확인하는 값(boolean). true일 경우 `fetchNextPage`를 호출
- `isFetchingNextPage`: 다음 페이지가 패칭 중인지 나타내는 값(boolean)

[useInfiniteQuery 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery)

---

IntersectionObserver를 이용해서 무한 스크롤을 구현하기 위해서는 스크롤 위치를 확인 해야한다.<br/>
useRef를 이용해서 호출된 데이터의 마지막 요소에 대해 참조한다.<br/>

```jsx
const observer = useRef();
```

`IntersectionObserver` 인스턴스를 통해 페이지의 마지막 요소가 viewport에 들어올 때 실행될 콜백 함수를 정의한다<br/>
`entries[0].isIntersecting`를 통해 viewport와 교차하는지 확인을 한다.<br/>
교차가 확인이 될 경우, fetchNextPage함수가 실행된다.<br/>
fetchNextPage가 실행되면 getNextPageParam도 실행되어,<br/>
`lastPage(이전에 불러온 페이지 데이터)`와 `page(현재까지 불러온 모든 페이지의 배열)`를 인자를 연산 후,
queryFn에 전달해 데이터를 불러오도록 요청한다.<br/>

```jsx
const observerInstance = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    fetchNextPage();
  }
});
```

ref를 참조한 요소를 IntersectionObserver의 **관찰 대상으로 설정**한다.<br/>

```jsx
if (observer.current) {
  observerInstance.observe(observer.current);
}
```

useEffect가 unMount가 될 경우, clean-up함수를 통해 **관찰 대상을 해제**한다.<br/>
Component가 사라진 후에도 **불필요한 작업이 계속되는 것을 방지**하기 위해 사용된다.<br/>

```jsx
return () => {
  if (observer.current) {
    observerInstance.unobserve(observer.current);
  }
};
```

:::

</div>
</details>
