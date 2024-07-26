# yarn berry

## yarn berry란?

- yarn의 최신 버전(yarn v2로 알려짐)
- Node.js 어플리케이션의 의존성을 관리하는 패키지 매니저
- 기존 yarn의 기능을 개선하고 혁신적인 기능들을 도입하여 성능, 보안,개발자 경험을 극대화

## yarn berry의 장점

- `plug'n'play(pnp)`
  - node_modules 폴더를 사용하지 않는 새로운 의존성 관리 방식
  - 의존성 충돌 문제를 해결하고 설치 속도를 향상
- `zero-installs`
  - `.yarn/cache` 폴더를 저장소에 커밋하여, 별도의 패키지 설치 없이 프로젝트 실행이 가능
- `일관성 보장`
  - `./yarn/cache`폴더와 `yarn.lock` 파일을 사용하여 일관된 의존성 설치 결과를 보장
- `CLI개선`
  - 개발자 경험을 위해 많은 CLI명령어 개선
  - 작업 공간 관리와 관련된 명령어가 강화

:::info

**yarn과 yarn berry 차이**

- 구성 파일 변경
  - `.yarnrc`에서 `.yarnrc.yml`로 변경(YAML 형식을 이용하여 가독성 및 편의성 개편)
- node_modules제거
  - PnP방식을 사용하기 때문에 `node_modules`폴더를 생성하지 않는다
  - yarn 자체적인 방식으로 의존성을 관리 및 더 빠른 설치 속도 제공
- 프로젝트 별 yarn 버전 관리
  - 각 프로젝트마다 다른 yarn 버전을 사용
- 워크스페이스 강화
  - 여러 패키지를 하나의 레포지토리에서 관리 가능
  - 패키지 간 의존성을 쉽게 설정

:::

## yarn berry 설치 방법

1. Node.js설치 및 React 프로젝트를 설치
2. `npm install -g yarn`을 터미널에 입력하여 yarn 클래식을 설치
3. `yarn set version berry`을 터미널에 입력하여 yarn에서 yarn berry로 버전을 업데이트
4. 설치가 되었다면 `yarn --version`을 통해 yarn 버전이 2.x이상인지 확인
5. `yarn install`을 통해 yarn 패키지들을 설치
