# Next.js 생성

## Next.js 프로젝트 생성

- Node.js 설치
- 프로젝트를 생성할 폴더에서 터미널에 `npx create-next-app@latest`를 입력
- 해당 프로젝트 경로에 접근해 `npm run dev`를 입력하여 프로젝트를 실행

:::info

**설치 명령어 입력 후, 옵션 설정**<br/>

- `What is your project named`: 프로젝트 이름
- `Would you like to use TypeScript?`: 타입스크립트 사용 여부(No / Yes)
- `Would you like to use ESLint?`: ESLint 사용 여부(No / Yes)
- `Would you like to use Tailwind CSS?`: Tailwind 사용 여부(No / Yes)
- `Would you like to use 'src/' directory?`: src폴더에 주요파일 및 디렉토리를 구성할지 여부(No / Yes)
- `Would you like to use App Router? (recommended)`: App Router의 사용여부(No / Yes)
- `Would you like to customize the default import alias (@/*)?`: import 사용 시, 별칭을 `@/`로 사용할지 여부(No / Yes)

:::

## Next.js 설치 주요 옵션

### `Would you like to use 'src/' directory?`

- src폴더에 주요파일 및 디렉토리를 구성할지 여부
  - Yes일 경우: 프로젝트의 **모든 주요 코드 파일(컴포넌트, 페이지, 스타일 등)을 src/ 디렉토리 내부에 구성**<br/>
    프로젝트의 구조를 더 깔끔하게 분리하기 위해 사용되는 방식<br/>
  - No일 경우: 프로젝트 파일들이 프로젝트의 **루트 디렉토리에 직접 위치**.<br/> 프로젝트의 구조가 단순할 때, 유용

### `Would you like to use App Router? (recommended)`

- App Router의 사용여부

  - Yes일 경우: App Router를 이용하여 app디렉토리 안에 페이지와 라우트를 정의.<br/>즉, **라우트 관련 설정을 한곳에서 관리**<br/>
  - No일 경우: `pages/`디렉토리 기반의 라우팅을 사용. 각 페이지와 해당 경로는 **`pages/` 디렉토리의 파일 구조를 통해 자동으로 설정**<br/>

### `Would you like to customize the default import alias (@/*)?`

- import 사용 시, 별칭을 `@/`로 사용할지 여부
  - Yes일 경우: 파일들을 import시, 별칭을 이용해서 사용(절대 경로)
  - No일 경우: 파일들을 import시, 현위치 디렉토리에서 사용할 디렉토리의 경로를 직접 작성(상대 경로)

```js
import MyComponent from "@/components/MyComponent"; // 별칭 사용(절대 경로)
import MyComponent from "../../components/MyComponent"; // 상대 경로
```

:::tip

별칭을 사용 시, `@/`는 프로젝트의 최상위 디렉토리(src폴더 혹은 root폴더)를 의미<br/>

:::

## Next.js 프로젝트 구조

### 기본 Next.js 구조

- Next.js를 설치하면 `node_modules`, `public`, `(src/)app`를 확인
- `node_modules`: 프로젝트에 의존성을 가지고 있는 모듈이 들어 있는 폴더
- `public`: 공용 폴더로 이미지나 파일과 같은 정적파일을 넣는 폴더
- `(src/)app`: Next.js 프로젝트에서 주요 코드를 관리하는 폴더

### (src/)app 구성

- (src/)app안 구성 파일은 `global.css`, `layout.js`, `page.js`, `page.module.css`가 존재
- `global.css`: 애플리케이션 전체를 공통적으로 적용되는 스타일을 정의하는 css파일
- `layout.js`: 페이지의 공통 레이아웃 구조를 정의하는 Component. ex) 헤더, 사이드바, 푸터
- `page.js`: 실제 페이지 Component를 정의하는 파일
- `page.module.css`: `page.js`에 대한 스타일을 지정하는 css 모듈 파일
