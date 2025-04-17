# Axios

## Axios란?

- HTTP 요청을 보내기 위해 널리 사용되는 Promise 기반의 HTTP 클라이언트 라이브러리
- 해당 React 프로젝트 경로 터미널에 `npm install axios` 입력하여 설치

:::info

**fetch와 axios의 공통점/차이점**

**공통점**

- Promise 기반으로 동작: then, catch 또는 async/await을 이용하여 비동기 처리

**차이점**<br/><br/>
`fetch`<br/>

- 표준 API : 자바스크립트의 내장 API, 별도의 라이브러리 설치가 필요 없다.
- JSON처리 : `fetch`는 응답을 JSON으로 자동 변환하지 않는다.

`axios`<br/>

- 외부 라이브러리: axios를 사용하기 위해 프로젝트에 설치를 해야된다.
- CRUD 이외 다양한 메소드 제공: `axios`의 메소드 중 `get`,`post`,`delete`, `put` 등 다양한 메소드가 존재
- 자동 JSON 변환: `axios`는 자동으로 JSON객체로 변환. 데이터를 전송 시에도 자동으로 문자열화
- 환경 지원: 브라우저와 Node.js 환경 모두 사용

:::

## Axios 메소드

- get(url[, config]): 서버로부터 데이터를 요청할 때 사용(`GET 요청`).
- post(url[, data[, config]]): 서버에 데이터를 생성하기 위해 사용(`POST 요청`).
- put(url[, data[, config]]): 서버의 데이터를 업데이트하기 위해 사용(`PUT 요청`).
- delete(url[, config]): 서버의 데이터를 삭제하기 위해 사용(`DELETE 요청`).
- patch(url[, data[, config]]): 서버의 데이터 일부를 업데이트하기 위해 사용(`PATCH 요청`).
- head(url[, config]): HEAD 요청을 서버로 보내며, 서버 헤더를 가져오기 위해 사용. 본문(body)은 반환하지 않는다.
- options(url[, config]): 서버에서 특정 URL에 대해 지원하는 HTTP 메소드를 조회하기 위해 사용(`OPTIONS 요청`).

:::tip

**axios 메소드 옵션 사용**

```js title="Axios의 post 방식"
// name, username, email이 필수 값
axios.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer my-token",
    },
    timeout: 5000,
  }
);
```

첫 번째 인자값(`url`)은 **요청할 주소**를 의미<br/>
두 번째 인자값(`data`)은 **서버에서 요구한 데이터**를 의미<br/>
세 번째 인자값(`config`)은 **서버에게 전송할 경우 설정**을 의미<br/>

세 번째 인자값의 경우 이미지 전송 타입 혹은 특별한 상황 이외에는 생략도 가능하다.<br/>

:::

## Axios 구현

```js title="Async.js"
import React from "react";
import axios from "axios";

async function Async() {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.data)
    .catch((error) => {
      console.log("에러 발생");
    });
}

export default Async;
```

```jsx title="App.js"
import React, { useState, useEffect } from "react";
import Async from "./Async";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Async();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h1>이름: {user.name}</h1>
          <p>이메일: {user.email}</p>
          <p>번호: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/41361a1c-9a8f-4ed6-882d-d3e24d9b0790)

:::note
Async는 데이터를 호출하기 위해 사용하는 코드이다.<br/>
Async의 코드를 보면 해당 주소에게 **get메소드를 이용하여 서버에게 요청**을 보낸것을 확인 가능하다.<br/>
axios도 데이터를 통신하는 비동기 함수이기 때문에 async와 await을 통해 해당 서버에서 response가 올 때까지 기다린다.<br/>

App.js에서 보면 Async를 호출하여, 데이터를 화면 표현하는 코드이다.<br/>
처음 화면에 띄워지자마자 데이터를 표현하지 않는다.<br/>
이를 해결하기 위해 **useEffect를 사용**<br/>
useEffect를 통해 처음 렌더링(`마운트`)이 될 경우, 원하는 데이터를 뿌려줄 수 있게끔 useState에 데이터를 저장한다.<br/>
useEffect가 실행이 끝날 경우, useState의 데이터를 이용하여 화면에 데이터를 보여주게 한다.<br/>

:::

:::tip

```js
axios.get("https://jsonplaceholder.typicode.com/users/1");
axios("https://jsonplaceholder.typicode.com/users/1");
```

위의 두 코드는 동일한 GET 요청<br/>
따라서 Axios를 사용할 때 GET 요청을 보낼 때는 메소드 이름을 생략하여 간결하게 작성 가능<br/>

:::
