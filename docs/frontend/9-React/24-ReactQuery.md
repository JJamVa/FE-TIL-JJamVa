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
import {QueryClient,QueryClientProvider} from 'react-query';

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
import axios from "axios"

const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
};

export default fetchData
```

```js title="app.js"
import { useQuery } from "react-query";
import  fetchData  from "./Async"; 

function App() {
  const {data, isLoading, error} = useQuery('todos', fetchData);

  if(isLoading){
    return(
      <>로딩 중</>
    )
  }

  if(error) {
    return(
      <>에러 발생!!</>
    )
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
  - gcTime: 가비지 컬렉션을 위한 시간 간격 조정. 기본값은 10분(1000 * 60 * 10)
  - staleTime: 데이터가 만료되어 다시 조회되기 전까지의 시간을 설정
  - enabled: 값이 true일 경우 동기적인 함수로 실행

[React Query 속성 및 옵션 문서](https://tanstack.com/query/latest/docs/react/reference/useQuery)
:::

## useQueries
- 여러 개의 Query를 **동시에 처리**하는 데 사용되는 React Query의 함수
- useQuery와 유사하지만 여러 개의 쿼리를 배열로 받아 처리

```js title="비동기 함수"
import axios from "axios"

export const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
};

export const fetchDataUser = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return data;
};
```

```js title="app.js"
import { useQueries} from "react-query";
import  {fetchData, fetchDataUser}  from "./Async"; 

function App() {
  const queryResult = useQueries([
    {queryKey:'todos', queryFn:fetchData},
    {queryKey:'users', queryFn:fetchDataUser}
  ])

  if(queryResult[0].isLoading && queryResult[1].isLoading){
    return(
      <>로딩 중</>
    )
  }

  if(queryResult[0].error && queryResult[1].error) {
    return(
      <>에러 발생!!</>
    )
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
- `useMutation(비동기 함수)`의 형태로 사용

<!-- 코드 작성 예정 -->


## QueryCache
- Query 결과를 저장하고 관리하는 역할
- 다양한 설정을 통해 동작을 조절하고, 쿼리의 데이터를 효과적으로 관리

```js title="QueryCache 코드"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {QueryCache, QueryClient,QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log("에러 출력",error,query);
      },
      onSuccess: data => {
        console.log("성공 출력",data);
      }
    })
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
import axios from "axios"

export const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
};
```

```js title="app.js"
import { useQuery} from "react-query";
import  {fetchData}  from "./Async"; 

function App() {
  const queryResult = useQuery(
    {queryKey:'todos', queryFn:fetchData}
  )

  if(queryResult.isLoading){
    return(
      <>로딩 중</>
    )
  }

  if(queryResult.error) {
    return(
      <>에러 발생!!</>
    )
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
결론적으로 Query들이 정상적으로 실행되었는지에 대해 검사하기 위해 사용되는 React-Query의 함수 중 하나다.<br/>

:::