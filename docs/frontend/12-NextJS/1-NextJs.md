# Next.js

## Next.js란?

- 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하는 **React 프레임워크**의 일종
- Vercel에서 개발되었으며, 동적 웹 애플리케이션을 구축하기 위해 최적화된 성능과 개발자 경험을 제공
- JS와 React의 강력한 기능을 활용하여 SEO 최적화, 빠른 페이지 로딩 속도, 뛰어난 사용자 경험을 가능

## Next.js의 특징

- 서버 사이드 렌더링(SSR): 초기 페이지 로드 시 서버에서 HTML을 생성하여 전송함으로써
  빠른 페이지 로드 속도와 SEO 최적화를 제공
- 정적 사이트 렌더링(SSG): 빌드 타임에 HTML을 생성하여 배포함으로써 빠른 로딩 속도와 안정성을 보장
- 파일 기반 라우팅 시스템: 파일과 폴더 구조를 사용해 라우트를 자동으로 설정
- API 라우트: API 엔드포인트를 쉽게 생성할 수 있도록 지원하여 백엔드 로직을 같은 프로젝트 내에서 관리 가능
- 내장 최적화: 자동 이미지 최적화, 코드 스플리팅, 빌드 최적화 등이 기본으로 제공

## React와 Next.js 비교

- **공통점**

  - `React 기반`: React Component, JSX, 상태 관리 등 React의 핵심 개념을 사용
  - SPA(Single Page Application) 지원: SPA 개바을 지원하며, 사용자 인터페이스의 빠른 상호작용과 동적인 데이터 변경 처리가 가능

- **차이점**

  - **React**

    - `라이브러리`: UI 라이브러리, Component를 만들어 UI를 구성하는데 중점을 둔다.
    - `CSR(Client Side Rendering)`: 클라이언트 측에서 주로 렌더링을 처리
    - `직접 데이터 패치`: 데이터 패칭은 개발의 구현에 따라 달라지며, Component의 생명주기 메소드나 Hook들로 사용하여 처리
    - `직접 라우팅 관리`: React 자체에 라우팅 기능이 내장되어 있지 않으며 React Router 라이브러리를 이용하여 라우팅 관리

  - **Next.js**
    - `프레임워크`: React 위에 구축된 프레임워크, 어플리케이션 아키텍처에 많은 구조와 기능을 기본으로 제공
    - `SSR(Server Side Rendering), SSG(Static Side Rendering)`: SSR,SSG를 기본 제공. 페이지가 서버에서 미리 렌더링되어 클라이언트에게 전송
    - `데이터 패치 API 제공`: 페이지 수준에서 데이터 요구 사항을 정의할 수 있는 API를 제공
    - `파일 시스템 기반 라우팅 제공`: JS파일을 `pages` 디렉토리에 넣음으로써 자동으로 라우터가 설정

:::info

**클라이언트 사이드 렌더링이란?**<br/>
Client Side Rendering, CSR이라고 줄여 부름.<br/>
웹 애플리케이션의 HTML, JavaScript, CSS 등 모든 정적 자원을 클라이언트의 브라우저에 한 번에 로드한 후,<br/>
사용자의 상호작용에 따라 JavaScript를 이용해 동적으로 화면을 렌더링하는 방식<br/>
즉, 서버에서 완성된 페이지를 받는 것이 아니라, 어플리케이션 로직이 클라이언트 측에서 실행되면서<br/>
필요한 데이터만 비동기적으로 요청하고 받아 페이지를 갱신합니다.<br/>

- `장점`
  - 리치 인터렉션: 동적인 사용자 인터페이스와 복잡한 사용자 경험을 구현할 수 있어, SPA에 적합
  - 네트워크 트래픽 감소: 초기 로딩 이후에는 필요한 데이터만 서버에서 요청
- `단점`
  - 초기 로딩 지연: 모든 스크립트와 리소스를 초기에 다운로드. 이로 인해 로딩시간이 길어질 수 있다.
  - SEO 문제: 웹 크롤러가 동적으로 렌더링된 내용을 제대로 파악하기 어려워 검색 엔진 최적화에 어려움이 발생

---

**서버 사이드 렌더링이란?**<br/>
`Server Side Rendering`, `SSR`이라고 줄여 부름.<br/>
클라이언트의 요청에 따라 서버에서 페이지의 **초기 HTML을 생성하고, 그 결과를 클라이언트에 전송**하는 기법<br/>
사용자가 웹사이트에 접속할 때마다 서버는 해당 요청에 맞는 데이터를 가져와 완성된 페이지를 HTML 형태로 클라이언트에게 전달.<br/>
서버에서 페이지를 미리 렌더링 함으로써, 클라이언트는 서버로부터 받은 HTML을 즉시 렌더링할 수 있어 초기 로딩 시간을 단축.<br/>

- `장점`

  - SEO 최적화: 검색 엔진이 페이지 내용을 쉽게 인덱싱 가능
  - 빠른 초기 로딩: 사용자에게 초기 페이지 로드 시 빠른 사용자 경험 제공
  - 전체 페이지 캐싱: 서버에서 전체 페이지를 캐싱하여 빠르게 제공

- `단점`
  - 서버 부하: 각 요청에 대해 페이지를 새로 렌더링해야 함으로 서버 부하가 생길 수 있다.
  - TTFB(Time to First Byte)지연: 페이지를 서버에서 처리하고 클라이언트로 전송하는 시간 때문에<br/>
    지연이 발생할 수 있다.

---

**정적 사이드 렌더링이란?**<br/>
`Static Site Generation`, `SSG`이라고 줄여 부름.<br/>
정적 사이트 생성은 빌드 타임에 **모든 페이지를 미리 HTML로 변환하고,사용자의 요청에 따라 사전에 생성된 정적 페이지를 제공**하는 방법<br/>
**동적 데이터가 필요하지 않거나 변경되지 않는 웹사이트에 적합**<br/>
컨텐츠가 변하지 않으면 서버나 클라이언트 사이드에서 추가 작업을 수행할 필요가 없다.<br/>

- 장점

  - 높은 성능: 정적 파일들은 CDN을 통해 빠르게 전달되므로 로딩 속도가 매우 빠르다.<br/>
    `CDN`은 전 세계에 분산된 네트워크를 통해 사용자에게 빠르게 제공하는 시스템<br/>
  - 보안성 향상: 서버 사이드 코드가 없기 때문에 보안에 대한 위험도가 감소
  - 확장성: 정적 파일들을 여러 서버나 지역에 분산하여 쉽게 확장 가능

- 단점
  - 동적 기능 제한: 사용자의 입력이나 상호작용에 따른 실시간 기능 구현이 어려움
  - 빌드 시간: 페이지가 많을 수록 빌드하는데 시간이 걸릴 수 있다.

:::
