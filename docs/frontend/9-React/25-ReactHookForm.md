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

:::info

**useForm의 속성**

```js
let {
    control,
    handleSubmit,
    formState,
    ...
} = useForm();
```

- control: 입력 필드를 제어하기 위한 객체. Controller Component에 전달하여 폼의 상태를 제어
- handleSubmit: 폼이 제출될 때 호출되는 함수. 이 함수를 폼의 onSubmit 속성으로 전달하여 제출 이벤트를 처리.
- formState: 폼의 상태에 대한 정보를 포함하는 객체. 주요 속성으로 isDirty, isValid, errors 등이 존재.
  - isDirty
- register: 입력 필드를 form에 등록하는 함수. 이 함수를 사용하여 입력 필드를 Controller에 연결.
- setValue: 입력 필드의 값을 동적으로 변경하는 함수. 특정 입력 필드의 값을 업데이트할 때 사용.
- getValues: 현재 폼의 모든 입력 필드의 값을 가져오는 함수.
- reset: 폼의 값을 초기화하는 함수. 기본적으로는 모든 입력 필드를 초기화하지만 특정 필드만 초기화하도록 구성도 가능.
- clearErrors: 모든 입력 필드의 오류 메시지를 제거하는 함수.
- setError: 특정 입력 필드에 오류 메시지를 설정하는 함수.
- formStateRef: formState 객체의 참조. 직접적으로 수정되지 않는 것이 좋으며, 주로 특정 효과나 로직에서 참조할 때 사용.
- trigger: 특정 입력 필드의 유효성 검사를 수동으로 트리거하는 함수. 특정 상황에서 사용자 정의 유효성 검사를 실행할 때 유용.

:::

