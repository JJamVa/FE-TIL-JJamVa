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
`<QueryClientProvider client={queryClient}>`를 통해 React Query를 사용할 수 있게 최상위 Component를 감쌓아준다.

:::

## useQuery

- 데이터를 가져오는 비동기 작업(GET방식)을 관리하는 데 사용
- `useQuery({queryKey: 쿼리 키, queryFn: 비동기 함수, Query 추가 옵션})`의 형태로 사용

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

useQuery에 key와 fetchData비동기 함수를 객체 형태로 담아 query를 실행.<br/>
구조 분해 할당으로 `{data, isLoading, error}`로 useQuery의 속성 값을 변수 생성<br/>

---

`data`는 비동기 통신에 대한 결과값을 저장해준다. <br/>
`isLoading`은 비동기 함수가 pending 상태일 경우를 의미한다.<br/>
`error`는 비동기 함수가 실패했을 때의 상태를 의미한다.<br/>

:::

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
  - queryKey: 쿼리를 식별하는 데 사용되는 키. 캐시에서 데이터를 찾을 때 사용
  - queryFn: 데이터를 가져오는 비동기 함수
  - gcTime: 가비지 컬렉션을 위한 시간 간격 조정. 기본값은 5분(1000 \* 60 \* 5)
  - staleTime: 데이터가 만료되어 다시 조회되기 전까지의 시간을 설정
  - enabled: 값이 true일 경우 동기적인 함수로 실행

[useQuery 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/react/reference/useQuery)
:::

<!-- // gcTime과 staleTime에 대해 내일 작성 -->

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

useQueries 같은 경우, 여러개의 Query를 `queries`속성에 배열 형태로 정보를 저장해야된다.<br/>
각 Query의 data에 접근하기 위해서 해당 query의 index로 접근하여 데이터를 호출하면 된다.<br/>

만약 두개의 Query 중 하나가 실패, 하나가 성공할 경우, 성공한 데이터는 정상적으로 반환이 된다.<br/>
React Query에서 모든 Query가 독립적으로 처리되기 때문에 서로에게 영향을 끼치지 않는다.<br/>

:::

<!-- 내일 부터 작성 -->

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
      // context : 뮤테이션의 생명주기 동안 특정 상태를 전달하거나, 뮤테이션이 트리거되기 전의 상태
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

useMutation을 이용하여 비동기 함수(post)에 대해 처리 결과를 보여주는 코드이다.<br/>
버튼을 클릭 시, hanldeCreatePost함수가 실행이 되며 내부에서 useMutation의 mutate메소드가 Argument값과 함께 실행이 된다.<br/>
이를 통해, createPost 비동기 함수에게 값이 전달되며 실행이 되어 결과 값이 어떻게 반환되었는지 확인할 수 있다.<br/>

**useMutation()의 추가 옵션**

- onMutate: mutation이 트리거가 되기 직전에 호출<br/>
- onSuccess: 비동기 함수의 처리가 성공적으로 수행했을 경우<br/>
- onError: 비동기 함수의 처리가 정상적으로 되지않을 경우<br/>
- onSettled: 비동기 함수의 성공/실패를 떠나 동작을 수행한 후 실행<br/>

[useMutation 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/react/reference/useQuery)
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
Query의 비동기함수가 성공적으로 실행될 경우 QueryCache안 onSuccess 속성이 실행이 되며,<br/>
반대로 실패할 경우, onError 속성이 실행된다.<br/>
결론적으로 QueryCache는 Query들이 정상적으로 실행되었는지에 대해 검사하기 위해 사용되는 React Query의 함수 중 하나다.<br/>

:::

## key값이 동적값인 배열일 경우

- 쿼리 동작과정은 일치하나 개별로 관리해야할 경우 사용
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

![image](https://github.com/JJamVa/JJamVa/assets/80045006/3055d024-786a-42fa-8658-046624219805)

:::note

위의 코드는 useQuery의 key값이 동적값이 배열안에 들어간 경우에 대한 예시 코드이다.<br/>
다만 배열을 이용하여 key값을 설정할 경우, **동적으로 key값을 저장**할 수 있다는 장점이 있다.<br/>
이로 인해 비동기 함수에서 필요한 parameter값을 이용하여 동적으로 query key값에 데이터를 관리한다.<br/>

또한, Query 내부의 함수는 화살표함수를 사용해야한다.<br/>
Query key값이 배열일 경우, 매번 들어오는 key값의 데이터가 변경이 된다.<br/>
변경된 key값에 대해 비동기 함수의 연산을 **안정성 및 일관성** 있게 마무리 해야함으로 화살표 함수를 사용해야한다.<br/>

:::

:::danger

key값이 static(정적)일 경우에는 매번 비동기 함수를 실행할 필요가 없다.<br/>
매번 랜더링될 경우에 화살표 함수를 사용해야한다.

:::

## React Query의 Suspense모드

- 데이터 로딩을 간단하게 처리
- React에서 비동기 데이터 로딩을 더 쉽게 다루도록 해주는 기능

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

Suspense를 사용할 Query의 속성에 `{suspense:true}`로 작성하면 된다.<br/>
그럼 Suspense를 등록한 Query가 비동기 통신 진행 상태(Pending)일 경우,<br/>
`<React.Suspense>`속성의 **fallback속성에 표현할 Component 화면이 출력**된다.<br/>

이를 통해 공통으로 로딩 화면을 표현할 Query에 대해 사용이 가능하다.<br/>

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

## useInfiniteQuery(무한 스크롤)

- **무한 스크롤** 혹은 **페이지 네이션**을 구현할 때 사용
- 사용자가 실제로 필요로 하는 데이터만 점진적으로 불러와 성능 개선

:::tip
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
<summary>Intersection Observer API를 이용한 무한스크롤 구현</summary>
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

:::

</div>
</details>
