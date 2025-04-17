# Mock Service Workder(MSW)

## MSW란?

- 개발 및 테스트 환경에서 네트워크 요청을 가로채고 모의 응답을 제공하는 라이브러리
- `서비스 워커(Service Worker)`를 사용하여 클라이언트 애플리케이션의 네트워크 요청을 가로채고, 개발자가 정의한 핸들러에 따라 응답을 반환
- 실제 백엔드 서버가 준비되지 않았거나, 네트워크 환경에 의존하지 않고도 프론트엔드 개발 및 테스트를 진행이 가능

:::info

**서비스 워커(Service Worker)란?**

- 웹 애플리케이션에서 백그라운드에서 실행되는 스크립트
- 네트워크 요청을 가로채고 캐싱, 백그라운드 동기화, 푸시 알림 등의 기능을 제공하여 오프라인 환경에서도 웹 애플리케이션이 정상적으로 동작
- 웹 페이지와는 독립적으로 작동하며, 페이지가 로드되거나 닫혀 있는 상태에서도 백그라운드에서 실행

**서비스 워커의 특징**

- `비동기적`
  - 주 스레드와 별도의 동작을 하며, 웹페이지 성능에 영향을 끼치지 않음
- `독립적`
  - 웹 페이지가 닫히거나 새로고침되더라도 독립적이기 때문에 지속적인 실행이 가능
- `HTTPS필수`
  - 네트워크 요청을 가로채는 능력을 악용하지 않도록 하기 위해 HTTPS를 통해서만 실행 가능

:::

## MSW 사용 이유 및 장점

- **프론트엔드 개발 생산성 향상**
  - 백엔드 API가 미구현 되어있을 경우, 프론트엔드 개발을 지속적으로 가능
  - 실제 서버에 의존하지 않고 시나리오 테스트 가능
- **테스트의 신뢰성 및 일관성**
  - 외부 네트워크 요청을 방지 및 테스트의 일관성을 유지
  - 여러가지 시나리오를 통해 클라이언트 애플리케이션의 예외 처리 로직을 검증
- **실제와 유사한 환경 제공**
  - 브라우저 환경에서 실제 네트워크 요청을 가로채기 때문에 실제 요청과 동일한 조건을 제공

## Next.js + MSW

### MSW 설치 및 설정

- 프로젝트 폴더에서 터미널에 `npm install msw --save-dev`를 입력
- 이후 `npx msw init ./public --save`로 서비스 워커를 등록(public경로에 mockServiceWorker.js가 생성)

<details>
<summary>mockServiceWorker.js 코드</summary>
<div markdown="1">

```js
const PACKAGE_VERSION = "2.3.0";
const INTEGRITY_CHECKSUM = "26357c79639bfa20d64c0efca2a87423";
const IS_MOCKED_RESPONSE = Symbol("isMockedResponse");
const activeClientIds = new Set();

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", async function (event) {
  const clientId = event.source.id;

  if (!clientId || !self.clients) {
    return;
  }

  const client = await self.clients.get(clientId);

  if (!client) {
    return;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });

  switch (event.data) {
    case "KEEPALIVE_REQUEST": {
      sendToClient(client, {
        type: "KEEPALIVE_RESPONSE",
      });
      break;
    }

    case "INTEGRITY_CHECK_REQUEST": {
      sendToClient(client, {
        type: "INTEGRITY_CHECK_RESPONSE",
        payload: {
          packageVersion: PACKAGE_VERSION,
          checksum: INTEGRITY_CHECKSUM,
        },
      });
      break;
    }

    case "MOCK_ACTIVATE": {
      activeClientIds.add(clientId);

      sendToClient(client, {
        type: "MOCKING_ENABLED",
        payload: true,
      });
      break;
    }

    case "MOCK_DEACTIVATE": {
      activeClientIds.delete(clientId);
      break;
    }

    case "CLIENT_CLOSED": {
      activeClientIds.delete(clientId);

      const remainingClients = allClients.filter((client) => {
        return client.id !== clientId;
      });

      if (remainingClients.length === 0) {
        self.registration.unregister();
      }

      break;
    }
  }
});

self.addEventListener("fetch", function (event) {
  const { request } = event;

  if (request.mode === "navigate") {
    return;
  }

  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
    return;
  }

  if (activeClientIds.size === 0) {
    return;
  }

  const requestId = crypto.randomUUID();
  event.respondWith(handleRequest(event, requestId));
});

async function handleRequest(event, requestId) {
  const client = await resolveMainClient(event);
  const response = await getResponse(event, client, requestId);

  if (client && activeClientIds.has(client.id)) {
    (async function () {
      const responseClone = response.clone();

      sendToClient(
        client,
        {
          type: "RESPONSE",
          payload: {
            requestId,
            isMockedResponse: IS_MOCKED_RESPONSE in response,
            type: responseClone.type,
            status: responseClone.status,
            statusText: responseClone.statusText,
            body: responseClone.body,
            headers: Object.fromEntries(responseClone.headers.entries()),
          },
        },
        [responseClone.body]
      );
    })();
  }

  return response;
}

async function resolveMainClient(event) {
  const client = await self.clients.get(event.clientId);

  if (client?.frameType === "top-level") {
    return client;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });

  return allClients
    .filter((client) => {
      return client.visibilityState === "visible";
    })
    .find((client) => {
      return activeClientIds.has(client.id);
    });
}

async function getResponse(event, client, requestId) {
  const { request } = event;
  const requestClone = request.clone();

  function passthrough() {
    const headers = Object.fromEntries(requestClone.headers.entries());

    delete headers["x-msw-intention"];

    return fetch(requestClone, { headers });
  }

  if (!client) {
    return passthrough();
  }

  if (!activeClientIds.has(client.id)) {
    return passthrough();
  }

  const requestBuffer = await request.arrayBuffer();
  const clientMessage = await sendToClient(
    client,
    {
      type: "REQUEST",
      payload: {
        id: requestId,
        url: request.url,
        mode: request.mode,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        cache: request.cache,
        credentials: request.credentials,
        destination: request.destination,
        integrity: request.integrity,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        body: requestBuffer,
        keepalive: request.keepalive,
      },
    },
    [requestBuffer]
  );

  switch (clientMessage.type) {
    case "MOCK_RESPONSE": {
      return respondWithMock(clientMessage.data);
    }

    case "PASSTHROUGH": {
      return passthrough();
    }
  }

  return passthrough();
}

function sendToClient(client, message, transferrables = []) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();

    channel.port1.onmessage = (event) => {
      if (event.data && event.data.error) {
        return reject(event.data.error);
      }

      resolve(event.data);
    };

    client.postMessage(
      message,
      [channel.port2].concat(transferrables.filter(Boolean))
    );
  });
}

async function respondWithMock(response) {
  if (response.status === 0) {
    return Response.error();
  }

  const mockedResponse = new Response(response.body, response);

  Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {
    value: true,
    enumerable: true,
  });

  return mockedResponse;
}
```

:::note

위의 코드는 `npx msw init ./public --save`를 입력 후, 생성된 MSW의 서비스 워커 스크립트 코드이다.<br/>
개발 및 테스트 환경에서 네트워크 요청을 가로채고 모의 응답을 제공하기 위해 사용<br/>

**이벤트 핸들러**

- `install`: 서비스 워커가 설치될 때 즉시 활성화 처리
- `active`: 서비스 워커가 활성활 될 때 클라이언트를 즉시 제어
- `message`: 클라이언트로부터 메세지를 수신하고 처리, 메세지의 유형에 따라 모킹 (비)활성화, 무결성 검사를 처리
- `fetch`: 네트워크 요청을 가로채고, 조건에 따라 요청을 무시하거나 `handleRequest`함수를 호출하여 처리

**함수**

- `handleRequest`:
  - 요청을 처리, 클라이언트와 통신하여 응답을 전송.
  - 모킹된 응답을 생성하거나 원본 요청을 전달.
  - **반환값은 Response객체**
- `resolveMainClient`:
  - 요청을 보낸 주요 클라이언트를 확인
  - **반환값은 클라이언트 객체 혹은 undefined**
- `getResponse`:
  - 요청을 처리하고 클라이언트로부터 응답을 받아 모킹된 응답을 생성하거나 원본 요청을 전달
  - **반환값은 Response 객체**
- `sendToClient`
  - 클라이언트로 메세지를 전송하고 응답을 기다린다.
  - **반환값은 Promise객체**, 성공 시 클라이언트의 응답 데이터, 실패 시 에러를 반환
- `respondWithMock`
  - 모킹된 응답 데이터를 기반으로 `Response`객체를 생성
  - **반환값은 모킹된 Response객체**

:::

</div>
</details>

## MSW 실습 코드

```js title="(src/)app/layout.js"
import "./globals.css";
import { MswComponent } from "@/_component/mswComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ width: "100vw", height: "100vh" }}>
        <MswComponent />
        {children}
      </body>
    </html>
  );
}
```

```js title="(src/)app/page.js"
"use client";

export default function Home() {
  const submit = async () => {
    const data = await fetch("http://www.jjamva.com", {
      method: "get",
    }).then((res) => {
      return res.json();
    });

    console.log(data);
  };

  return <button onClick={submit}>MSW 테스트</button>;
}
```

```js title="(src/)mocks/handlers.js"
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://www.jjamva.com", () => {
    console.log("test MSW!");
    return HttpResponse.json({
      name: "jjamVa",
      age: 87,
      message: "MSW 성공!",
    });
  }),
];
```

```js title="(src/)mocks/index.js"
const initMockAPI = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("@/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/mocks/worker");
    worker.start();
  }
};

export default initMockAPI;
```

```js title="(src/)mocks/server.js"
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
```

```js title="(src/)mocks/worker.js"
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
```

```js title="(src/)_component/mswComponent.js"
"use client";

import initMockAPI from "@/mocks";
import { useEffect } from "react";

export const MswComponent = ({ children }) => {
  useEffect(() => {
    async function InitMSW() {
      if (process.env.NODE_ENV === "development") {
        await initMockAPI();
      }
    }
    InitMSW();
  }, []);

  return <>{children}</>;
};
```

:::note

```
src/
├── _component
│   └── mswComponent.js (MswComponent)
├── app
│   ├── layout.js (RootLayout)
│   └── page.js (Home 페이지)
└── mocks
    ├── handlers.js (핸들러 정의)
    ├── index.js (initMockAPI)
    ├── server.js (MSW 서버 설정)
    └── worker.js (MSW 워커 설정)

```

위의 코드는 MSW 테스트 코드이다.<br/>
핵심적인 코드는 `mocks`폴더의 코드와 `_component`의 폴더이다.<br/>

<details>
<summary>handlers.js</summary>
<div markdown="1">

```js title="(src/)mocks/handlers.js"
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://www.jjamva.com", () => {
    console.log("test MSW!");
    return HttpResponse.json({
      name: "jjamVa",
      age: 87,
      message: "MSW 성공!",
    });
  }),
];
```

MSW의 핸들러를 정의하는 코드<br/>
handlers배열을 정의하고 배열 내에 특정 API요청을 가로채고 모의 응답을 반환한다.<br/>

`http`객체는 HTTP 요청을 정의하기 위해 사용<br/>
http 객체의 메소드(get,post,put,delete)를 이용하여 모의 핸들러를 설정하는데 사용<br/>

`HttpResponse`객체는 모의 HTTP 응답을 생성하는데 사용<br/>
HTTP 응답 상태, 헤더, 본문을 정의하여 모의 핸들러 반환값으로 사용이 가능<br/>

</div>
</details>

<details>
<summary>server.js와 worker.js</summary>
<div markdown="1">

```js title="(src/)mocks/server.js"
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
```

Node.js 환경에서 MSW 서버를 설정하는 코드<br/>
주로 **서버사이드 렌더링** 혹은 **테스트 환경**에서 사용<br/>
`setupServer`함수를 통해 MSW서버를 설정<br/>

```js title="(src/)mocks/worker.js"
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
```

브라우저 환경에서 MSW 워커를 설정하는 코드<br/>
주로 **클라이언트 사이드** 개발에서 사용<br/>
`setupWorker`함수로 MSW워커를 설정<br/>

server.js와 worker.js는 MSW를 사용하기 위해 handlers.js에 정의해놓은 모의 핸들러들을 적용한다.<br/>
이후 각 환경(클라이언트 사이드, 서버 사이드)를 확인하여 MSW를 동작시키기 위해 준비를 하는 단계이다.<br/>

</div>
</details>

<details>
<summary>index.js</summary>
<div markdown="1">

```js
const initMockAPI = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("@/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/mocks/worker");
    worker.start();
  }
};

export default initMockAPI;
```

위의 코드는 MSW를 초기화 역할을 하는 함수이다.<br/>
if문을 보면 window의 존재 여부에 따라 server 혹은 worker를 실행시킨다.<br/>
즉, window가 **존재하지 않을 경우 서버 사이드(Node.js환경)**, **존재할 경우 클라이언트 사이드(브라우저 환경)**이다.<br/>
**서버 사이드일 경우**엔 server.js를 호출하여 **MSW서버를 실행**, **클라이언트 사이드**일 경우 worker.js를 **MSW워커를 실행**한다.<br/>

</div>
</details>

<details>
<summary>MSW사용 영역 설정(mswComponent.js) 및 사용</summary>
<div markdown="1">

```js title="(src/)_component/mswComponent.js"
"use client";

import initMockAPI from "@/mocks";
import { useEffect } from "react";

export const MswComponent = ({ children }) => {
  useEffect(() => {
    async function InitMSW() {
      if (process.env.NODE_ENV === "development") {
        await initMockAPI();
      }
    }
    InitMSW();
  }, []);

  return <>{children}</>;
};
```

위의 코드는 MSW를 사용하기 위해 영역을 설정할 Component를 정의하는 코드<br/>
useEffect를 통해 Mount가 될 때마다 MSW를 초기화한다.<br/>
if문에 `process.env.NODE_ENV === "development"`는 개발 환경인지 여부를 확인하는 것이다.<br/>
개발 환경이 확인되었다면, mocks폴더에서 정의한 index.js를 실행시켜 MSW를 초기화 한다.<br/>

```js title="(src/)app/layout.js"
import "./globals.css";
import { MswComponent } from "@/_component/mswComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ width: "100vw", height: "100vh" }}>
        <MswComponent />
        {children}
      </body>
    </html>
  );
}
```

MSW를 사용할 영역 경로의 layout.js에 mswComponent를 넣으면 된다.<br/>
모든 영역에 사용할 경우, app경로의 layout.js에 넣으면 된다.<br/>

```js title="(src/)app/page.js"
"use client";

export default function Home() {
  const submit = async () => {
    const data = await fetch("http://www.jjamva.com", {
      method: "get",
    }).then((res) => {
      return res.json();
    });

    console.log(data);
  };

  return <button onClick={submit}>MSW 테스트</button>;
}
```

MSW영역 설정까지 완료하였다면, fetch를 통해 API 데이터를 가져오는 것처럼 사용하면 된다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4efdfed7-1e72-425c-8dca-73567c39986a)

`MSW 테스트`버튼을 눌렀을 경우, 위의 이미지와 같이 MSW가 잘 적용된 것을 확인할 수 있다.<br/>

</div>
</details>

:::
