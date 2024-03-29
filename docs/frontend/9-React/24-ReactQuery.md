# React Query

## React Query란?

- 데이터를 효과적으로 관리하고 처리하기 위한 라이브러리
- 서버 상태 및 캐시를 관리하고, API 호출과 같은 **비동기 작업을 단순화** 작업
- 해당 React 프로젝트 경로 터미널에 `npm install react-query` 입력하여 설치

## React Query 초기 설정

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

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
- `useQuery(키 값, 비동기 함수, Query 옵션)`의 형태로 사용

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

```js title="app.js"
import { useQuery } from "react-query";
import fetchData from "./Async";

function App() {
  const { data, isLoading, error } = useQuery("todos", fetchData);

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

useQuery에 key값과 fetchData라는 비동기 함수를 넣어 실행시켰다.<br/>
구조 분해 할당으로 `{data, isLoading, error}`로 useQuery의 속성 값을 변수로 저장했다.<br/>
data는 비동기 통신에 대한 결과값을 저장해준다. <br/>
isLoading은 비동기 함수가 pending 상태일 경우를 의미한다.<br/>
error는 비동기 함수가 실패했을 때의 상태를 의미한다.<br/>

:::

:::tip
**useQuery의 함수 옵션**

```js
let {속성} = useQuery({
    queryKey,
    queryFn,
    gcTime
    ...
})
```

- 핵심 옵션
  - queryKey: 쿼리를 식별하는 데 사용되는 키. 캐시에서 데이터를 찾을 때 사용
  - queryFn: 데이터를 가져오는 비동기 함수
  - gcTime: 가비지 컬렉션을 위한 시간 간격 조정. 기본값은 10분(1000 \* 60 \* 10)
  - staleTime: 데이터가 만료되어 다시 조회되기 전까지의 시간을 설정
  - enabled: 값이 true일 경우 동기적인 함수로 실행

[useQuery 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/react/reference/useQuery)
:::

## useQueries

- 여러 개의 Query를 **동시에 처리**하는 데 사용되는 React Query의 함수
- useQuery와 유사하지만 여러 개의 쿼리를 배열로 받아 처리

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

```js title="app.js"
import { useQueries } from "react-query";
import { fetchData, fetchDataUser } from "./Async";

function App() {
  const queryResult = useQueries([
    { queryKey: "todos", queryFn: fetchData },
    { queryKey: "users", queryFn: fetchDataUser },
  ]);

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

useQueries 같은 경우, 여러개의 Query에 대한 정보를 담다보니 배열 형태로 Query들의 정보를 저장해야된다.<br/>
배열 안의 요소는 하나의 Query들이며, Query의 함수 옵션으로 정보를 저장해야된다.<br/>
이후 각 요소의 data를 접근하기 위해서는 배열 형태임으로 index로 접근하여 데이터를 사용하면된다.<br/>

:::

## useMutation

- 데이터의 생성(CREATE), 수정(UPDATE), 삭제(DELETE)와 같은 변경 작업을 처리하기 위해 사용
- API 호출과 같은 비동기 작업에 사용, 작업이 성공하면 데이터를 업데이트 실패하면 에러를 처리
- `useMutation(비동기 함수, 추가 옵션)`의 형태로 사용

<!-- 코드 작성 예정 -->

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
import { useMutation } from "react-query";
import createPost from "./Async";

const App = () => {
  const mutation = useMutation(createPost, {
    onMutate: (data) => {
      console.log("onMutate", data);
    },
    onError: (error, variable, context) => {
      console.log("onError", error, variable, context);
    },
    onSuccess: (data, variables, context) => {
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

- onMutate: mutate가 실행되었을 경우<br/>
- onSuccess: 비동기 함수의 처리가 성공적으로 수행했을 경우<br/>
- onError: 비동기 함수의 처리가 정상적으로 되지않을 경우<br/>
- onSettled: 비동기 함수의 성공/실패를 떠나 동작을 수행했을 경우<br/>

[useMutation 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/react/reference/useQuery)
:::

## QueryCache

- Query 결과를 저장하고 관리하는 역할
- 다양한 설정을 통해 동작을 조절하고, 쿼리의 데이터를 효과적으로 관리

```js title="QueryCache 코드"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

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
import { useQuery } from "react-query";
import { fetchData } from "./Async";

function App() {
  const queryResult = useQuery({ queryKey: "todos", queryFn: fetchData });

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

## key값이 배열일 경우

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
import { useQuery } from "react-query";
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
  } = useQuery(["users", page, pageSize], () => fetchUsers(page, pageSize));

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

위의 코드는 useQuery의 key값이 배열인 경우에 대한 예시 코드이다.<br/>
Query key가 배열일 경우나 다른 타입일 경우 사용 방법은 같다.<br/>
다만 배열을 이용하여 key값을 설정할 경우, **동적으로 key값을 저장**할 수 있다는 장점이 있다.<br/>
이로 인해 비동기 함수에서 필요한 parameter값을 이용하여 동적으로 query key값에 데이터를 관리한다.<br/>

또한, Query 내부의 함수는 화살표함수를 사용해야한다.<br/>
Query key값이 배열일 경우, 매번 들어오는 key값의 데이터가 변경이 된다.<br/>
변경된 key값에 대해 비동기 함수의 연산을 **안정성 및 일관성** 있게 마무리 해야함으로 화살표 함수를 사용해야한다.<br/>

:::

:::danger

key값이 static(정적)할 경우에는 비동기 함수를 굳이 호출할 필요가 없다.<br/>
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
import { QueryClient, QueryClientProvider } from "react-query";

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
import { useQuery } from "react-query";
import fetchPosts from "./Async";

const App = () => {
  const { data, isError, error } = useQuery("posts", fetchPosts, {
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

Suspense를 사용할 Query의 3번째 Argument인 옵션을 객체형태로 `{suspense:true}`로 작성하면 된다.<br/>
그럼 Suspense를 등록한 Query가 비동기 통신 진행 상태(Pending)일 경우,<br/>
`<React.Suspense>`속성의 **fallback속성에 표현할 Component 화면이 출력**된다.<br/>

이를 통해 공통으로 로딩 화면을 표현할 Query에 대해 간단히 표현이 가능하다.<br/>

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
import { QueryClient, QueryClientProvider } from "react-query";

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

```jsx
import React from "react";
import { useQuery } from "react-query";
import fetchPosts from "./Async";

const App = () => {
  const { data, isError, error } = useQuery("posts", fetchPosts);

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
