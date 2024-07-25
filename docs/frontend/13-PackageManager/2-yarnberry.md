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

## yarn berry 설치 방법
