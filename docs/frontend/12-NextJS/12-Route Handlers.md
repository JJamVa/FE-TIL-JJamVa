# Route Handlers

## Route Handlers란?

- App Router 내에서 각 HTTP 메소드(`GET`, `POST`, `PUT`, `DELETE`)에 대해 개별 핸들러를 정의하는 기능
- 특정 경로에서 다양한 HTTP 요청을 처리가 가능
- 유용한 API 엔드포인트를 구현

## Route Handlers의 사용 목적

- HTTP 메소드별 핸들러 정의
  - GET, POST, PUT, DELETE 등의 HTTP 메소드에 따라 별도의 핸들러를 정의
- 유연한 요청 처리
  - 각 요청을 개별적으로 처리하여 세밀한 제어가 가능
- Middleware와의 통합
  - Middleware와 결합하여 인증, 권한 검사, 로깅 등의 추가 기능 구현
- 코드 구조화
  - API 엔드포인트를 보다 구조적으로 정의
