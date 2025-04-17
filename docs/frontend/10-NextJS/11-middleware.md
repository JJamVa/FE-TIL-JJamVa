# Middleware

## Middleware란?

- 요청이 서버로 들어오거나 응답이 클라이언트로 나가기 전에 실행되는 코드
- 요청을 가로채고, 이를 변형하거나 로깅, 인증, 권한 검사 등 다양한 작업을 수행이 가능

## Middleware 사용 예제

- 인증 권한 관리
  - 사용자가 특정 페이지에 접근하기 전에 인증 및 권한을 확인하는데 주로 사용
- 로깅 및 분석
  - 모든 요청에 대한 로깅을 수행하여 트래픽 분석 및 모니터링
- URL Redirect 및 Rewrite
  - 특정 조건에 따라 요청된 URL을 다른 URL로 Redirect하거나 내부적으로 다른 경로로 Rewrite처리
- 보안 강화
  - 보안 헤더를 추가하거나, 특정 요청을 차단하여 보안을 강화

## Middleware 예시코드

```js title="(src/)middleware.js"
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware Test!");

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/new")) {
    console.log("Rewriting to /new-path");
    const newUrl = new URL("/new-path", request.url);
    return NextResponse.rewrite(newUrl);
  }

  if (pathname.includes("/old-page")) {
    console.log("Redirecting to root");
    const newUrl = new URL("/", request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
```

```js title="(src)/app/old/page.js"
export default function OldPage() {
  return <h1>Old page 입니다.</h1>;
}
```

```js title="(src/)app/new-path/page.js"
export default function NewPathPage() {
  return <h1>New path page입니다.</h1>;
}
```

:::note

```
src/
├── app
│   ├── layout.js (RootLayout)
│   ├── page.js (Home 페이지)
│   ├── old
│   │   └── page.js (Old 페이지)
│   └── new-path
│       └── page.js (NewPath 페이지)
└── middleware.js (Middleware 설정)
```

위의 코드는 middleware를 이용하여 원치않는 페이지에 접근 시, 라우트를 제어하는 코드<br/>
우선 middleware를 사용하기 위해서는 **Root경로에 `middleware.js`를 생성**해야하며, **내부 함수 선언식 또한 `middleware`로 작성**.<br/>
함수 선언식 middleware는 parameter값을 받는데, 이 때 parameter는 `NextRequest객체`이다.<br/>

- **NextRequest 객체속성**
  - `nextUrl`: `NextURL`객체를 반환하며, URL의 정보를 포함
  - `cookies`: 쿠키에 접근할 수 있는 객체
  - `headers`: 요청 헤더에 접근할 수 있는 객체
  - `method`: 요청 메소드(`GET`, `POST` 등)을 나타내는 문자열
  - `ip`: 요청을 보낸 클라이언트의 IP 주소

middleware의 parameter를 통해 **현재 접근하고 있는 라우트에 대한 정보를 얻을 수 있으며**, 이를 통해 라우트를 제어 가능하다.<br/>

---

앞서 middleware의 라우트 제어하기 전, 어느 경로에서부터 처리해야되는지에 대한 코드가 필요하다.<br/>
middleware 설정을 인식하기 위해서는 생성해야할 변수명이 `config`로 생성해야된다.<br/>

```js title="middleware 경로 설정"
export const config = {
  matcher: "/:path*",
};
```

config변수를 생성 후, config내에 여러 속성들을 정의하여 사용이 가능<br/>

- config 속성
  - `matcher`: 미들웨어가 실행될 경로를 정의
  - `regions`: 특정 지역에서만 middleware가 실행되도록 제한
  - `runtime`: 특정 런타임 환경에서만 middleware가 실행되도록 설정

`matcher`속성은 일반적으로 자주 사용되며, 나머지 `regions`, `runtime`은 요구 사항이 있을 경우에만 사용<br/>
예시 코드와 같은 경우, 간단한 라우팅에 대한 제어만 하기 위해 matcher만 사용<br/>

config의 matcher속성에 문자열로 middleware를 동작시킬 경로를 작성하면 된다.<br/>
matcher속성에 대해 경로를 작성할 경우, 여러 가지 방법이 있다.<br/>

- matcher속성
  - `단일 경로 매칭`: 해당 경로에서만 middleware가 실행
    - ex) `matcher: "/about"`
  - `와일드 카드 매칭`: 해당 경로와 그 하위 경로에 대해 middleware가 실행
    - ex) `matcher: "/about/:path*"`
  - `다중 경로 매칭`: 배열을 이용하여 여러 경로에 대해 middleware를 실행
    - ex) `matcher: ["/about", "/old/:path*"]`
  - `정규 표현식 매칭`: 정규표현식을 이용하여 표현식에 맞는 경우 middleware를 실행
    - ex) `matcher: ["/(old|new-path)", "/(about|profile)/:path*"]`

위와 같이 middleware를 사용하기 전, config에 대한 설정을 해야된다.<br/>

---

middleware함수 내부 코드 분석<br/>

```js title="Rewrite"
const { pathname } = request.nextUrl;

if (pathname.startsWith("/new")) {
  console.log("Rewriting to /new-path");
  const newUrl = new URL("/new-path", request.url);
  return NextResponse.rewrite(newUrl);
}
```

접근하려고 하는 라우트의 경로가 문자열`/new`로 시작할 경우, 해당 조건이 발생을 한다.<br/>
URL객체를 통해 첫 번째 Argument에 상대 경로 혹은 절대 경로를 작성<br/>
두 번째 Argument는 base URL을 작성하여 현재 경로의 값을 가지고 있는 `pathname`값을 URL기준을 잡는다.<br/>
새로 지정한 경로를 `newUrl`값을 rewrite한다.<br/>
즉, 내가 이동하려고 하는 라우트의 경로 이름 중 `new`가 들어갈 경우, `/new-path`페이지에 대한 리소스를 제공한다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4bb21c28-908f-4240-9a1f-ce526c946cae)

위의 이미지와 같이 `/new`경로에 진입하였을 때, 해당 경로 URL은 `/new`에 있지만<br/>
렌더링된 페이지는 `new-path`의 page.js가 렌더링된 것을 확인할 수 있다.<br/>

```js title="Redirect"
const { pathname } = request.nextUrl;

if (pathname.includes("/old-page")) {
  console.log("Redirecting to root");
  const newUrl = new URL("/old", request.url);
  return NextResponse.redirect(newUrl);
}
```

rewrite에 대한 코드 로직과 동일하지만 반환값이 redirect이다.<br/>
`/old-page`에 대한 경로를 설정하지 않아, 해당 경로에 접근을 할 경우, `/old`페이지가 렌더링이 되도록 구현하였다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8b72c1ac-a36a-4c57-81c7-b2b020cdf608)

위의 이미지는 `/old-page`를 입력 후, 페이지가 렌더링된 화면이다.<br/>
즉, redirect는 해당 경로에 접근을 할 경우, 기존 접근하려고 했던 URL에 대신 **설정한 URL 및 페이지를 렌더링**한다.<br/>

:::

:::info

**Rewrite와 Redirect**

- **Redirect**:
  - 클라이언트가 새로운 URL로 이동하며, 브라우저 주소창의 URL이 변경
  - 주로 사용자를 다른 페이지로 안내할 때 사용
- **Rewrite**:
  - 서버 측에서 요청된 URL을 다른 URL로 내부적으로 처리하며, 브라우저 주소창의 URL은 변경되지 않음.
  - 주로 서버에서 다른 리소스를 제공할 때 사용

:::
