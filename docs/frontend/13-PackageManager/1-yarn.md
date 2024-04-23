# yarn

## yarn이란?

- JS 프로젝트의 의존성을 관리하는데 사용되는 오픈소스 패키지 매니저
- 패키지의 설치, 업데이트, 구성 및 제거를 돕고, 작업공간(workspaces), 오프라인 캐싱, 병렬 설치, 강화 모드 등과<br/>
  같은 혁신적인 기능들을 통해 속도, 정확성, 보안, 개발자 경험을 개선

## yarn의 장점

- npm보다 파일을 캐시하는 방식으로 인해 설치 속도가 빠름
- 설치 과정에서 패키지의 체크섬을 검증하여 보안을 강화
- `yarn.lock` 파일을 사용하여 프로젝트의 의존성을 일관되게 관리하여 다른 환경에서도 동일한 설치 결과를 보장

## yarn 설치법

1. Node.js설치
2. `npm install -g yarn`로 yarn을 전역으로 설치
3. yarn이 설치되었는지 확인하기 위해 `yarn --version`으로 버전 확인

:::tip

yarn을 설치하였지만, 해당 프로젝트에 `yarn.lock`이 존재하지 않을 수 있다.<br/>
이 때, `yarn install`을 통해 `yarn.lock`파일을 설치할 수 있다.<br/>
설치 후, yarn만 이용하려면 `package-lock.json`을 삭제해도 된다.<br/>

**yarn.lock 파일**<br/>

- 설치된 모듈의 버전을 저장해 어디서나 같은 버전과 구조의 의존성을 가지게 하는 파일

:::

## yarn 명령어

- 의존성 모듈 설치: `yarn install`
- 패키지 설치: `yarn add {package_name}`
  - 새 패키지를 설치하거나 기존 패키지를 업데이트하며, package.json에 기록
- 패키지 업그레이드: `yarn add {package_name}`
  - 패키지의 버전을 업그레이드
- 패키지 제거: `yarn remove {package_name}`
  - 패키지를 제거하고 package.json에서 해당 항목을 삭제
- 프로젝트를 실행: `yarn start`
- 프로젝트를 초기화: `yarn init`
