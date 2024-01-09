# React Hook Form

## React Hook Form 이란?
- React 애플리케이션에서 폼을 구축하고 관리하기 위한 간단하고 효율적인 라이브러리
- 폼 상태 및 로직을 관리하며, 주로 유효성 검사(Validation)과 상태 관리에 중점

:::info

**React Hook Form 사용하는 이유**

- 성능 최적화: 리액트 훅을 이용하여 가볍고 빠른 성능을 제공<br/>
- 상태관리: 별도의 상태 관리 라이브러리가 필요하지 않음<br/>
- 유효성 검사: 내장된 기능을 사용하여 폼 필드의 유효성을 검사<br/>
- HTML표준을 따름: HTML폼 엘리먼트와 함께 사용 가능<br/>

:::

## React Hook Form 중요 함수 및 태그

- 함수
  - useForm
    - React Hook Form의 핵심
    - 폼의 상태를 초기화 및 제어
  - useFormContext
    - 중첩된 폼에서도 상위 폼의 useForm객체에 접근 가능
    - 중첩된 폼에서도 상태 공유 및 조작
  - Watch
    - 특정 필드의 값을 감시
    - 특정 필드의 값을 변경될 때마다 원하는 동작을 수행
- 태그
  - register
    - 각각의 폼 필드를 React Hook Form에 등록
    - 폼 필드의 상태를 추적하고, 값의 유효성 검사 및 다양한 설정
  - Controller
    - 폼 피드의 상태 및 이벤트 처리하는데 도움