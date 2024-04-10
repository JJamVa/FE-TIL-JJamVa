# React Hook Form

## React Hook Form 이란?

- React 애플리케이션에서 폼을 구축하고 관리하기 위한 간단하고 효율적인 라이브러리
- 폼 상태 및 로직을 관리하며, 주로 유효성 검사(Validation)과 상태 관리에 중점
- 해당 React 프로젝트 경로 터미널에 `npm install react-hook-form` 입력하여 설치

:::info

**React Hook Form 사용하는 이유**

- 성능 최적화: 리액트 훅을 이용하여 가볍고 빠른 성능을 제공<br/>
- 상태관리: 별도의 상태 관리 라이브러리가 필요하지 않음<br/>
- 유효성 검사: 내장된 기능을 사용하여 폼 필드의 유효성을 검사<br/>
- HTML표준을 따름: HTML폼 엘리먼트와 함께 사용 가능<br/>

:::

## React Hook Form 핵심 기능

- useForm
  - React Hook Form의 핵심
  - 폼의 상태를 초기화 및 제어
- useFormContext
  - 중첩된 폼에서도 상위 폼의 useForm객체에 접근 가능
  - 중첩된 폼에서도 상태 공유 및 조작
- watch
  - 특정 필드의 값을 감시
  - 특정 필드의 값을 변경될 때마다 원하는 동작을 수행
- register
  - 각각의 폼 필드를 React Hook Form에 등록
  - 폼 필드의 상태를 추적하고, 값의 유효성 검사 및 다양한 설정
- Controller
  - 폼 피드의 상태 및 이벤트 처리하는데 도움

:::info

**useForm 반환값**

```js
const {
    control,
    handleSubmit,
    formState,
    ...
} = useForm();
```

- control: 입력 필드를 제어하기 위한 객체. Controller Component에 전달하여 폼의 상태를 제어
- handleSubmit: 폼이 제출될 때 호출되는 함수. 이 함수를 폼의 onSubmit 속성으로 전달하여 제출 이벤트를 처리
- formState: 폼의 상태에 대한 정보를 포함하는 객체. 주요 속성으로 isDirty, isValid, errors 등이 존재
  - isDirty: 사용자가 폼 필드 중 하나라도 수정했는지 여부를 확인
  - isValid: 현재 폼이 유효한지 여부를 표현
  - errors: 폼 필드의 유효성 검사 결과를 나타내는 객체
- register: 입력 필드를 form에 등록하는 함수. 이 함수를 사용하여 입력 필드를 Controller에 연결
- setValue: 입력 필드의 값을 동적으로 변경하는 함수. 특정 입력 필드의 값을 업데이트할 때 사용
- getValues: 현재 폼의 모든 입력 필드의 값을 가져오는 함수
- reset: 폼의 값을 초기화하는 함수. 기본적으로는 모든 입력 필드를 초기화하지만 특정 필드만 초기화하도록 구성도 가능
- clearErrors: 모든 입력 필드의 오류 메시지를 제거하는 함수
- setError: 특정 입력 필드에 오류 메시지를 설정하는 함수
- formStateRef: formState 객체의 참조. 직접적으로 수정되지 않는 것이 좋으며, 주로 특정 효과나 로직에서 참조할 때 사용
- trigger: 특정 입력 필드의 유효성 검사를 수동으로 트리거하는 함수. 특정 상황에서 사용자 정의 유효성 검사를 실행할 때 유용

[useForm 문서](https://react-hook-form.com/docs/useform)

:::

:::info
**Controller의 속성**

```jsx
<Controller
  name=""
  control=""
  render={{
    () => {}
  }}
  ...
>
```

- **name(필수 속성)**
  - 해당 필드의 고유한 이름
  - 폼 데이터 객체의 속성으로 사용되며, useForm hook의 handleSubmit 함수를 통해 제출 시 해당 이름으로 데이터에 접근
- **control(필수 속성)**
  - useForm hook에서 반환되는 control 객체를 전달
  - React Hook Form의 상태와 메서드를 제공하여 폼을 제어하는 데 사용
- defaultValue
  - 필드의 초기값을 설정
  - 컴포넌트가 마운트될 때 폼 상태에 초기값이 반영
- render
  - 필드 컴포넌트를 렌더링하는 데 사용하는 함수 속성
  - 이 함수에는 field 객체가 전달되며, 이 객체의 속성을 필드 컴포넌트에 전달하여 연결이 가능
- rules
  - 해당 필드의 유효성 검사 규칙을 정의
  - 객체 형태로 규칙을 지정(required나 pattern, message의 규칙을 사용)
    - required: 폼 요소가 반드시 채워져야 하는지 여부를 나타내는 데 사용
    - pattern: 정규 표현식을 사용하여 입력값의 형식을 지정하는 데 사용
- shouldUnregister
  - 폼에서 언마운트 될 때 해당 필드를 등록 해제할지 여부를 결정
  - 기본 값은 false이며, true로 설정하면 필드가 언마운트되면 자동으로 등록이 해제
- ref
  - 컴포넌트 내부에서 직접 참조할 필요가 있을 때 사용
  - 필드 컴포넌트에 ref 속성을 통해 ref를 전달 가능

:::

## ReactHookForm 실습 코드

```jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },
  });

  const watchName = watch("name");

  const handleBirthChange = (event) => {
    const { value } = event.target;
    let formattedValue = value
      .replace(/[^\d.]/g, "")
      .replace(/(\d{4})(\d)/, "$1.$2")
      .replace(/(\d{4}\.\d{2})(\d)/, "$1.$2")
      .substring(0, 10);

    setValue("birth", formattedValue, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">이름: </label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "이름을 적어주세요." }}
          render={({ field }) => <input {...field} placeholder="이름 작성" />}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      {watchName.length >= 3 && (
        <div>
          <label htmlFor="sex">성별: </label>
          <input
            placeholder="성별 ex)남자, 여자"
            {...register("sex", { required: "성별을 입력해주세요." })}
          />
          {errors.sex && <p>{errors.sex.message}</p>}
        </div>
      )}

      <div>
        <label htmlFor="birth">생년월일: </label>
        <input
          placeholder="생일 ex) YYYY.MM.DD"
          {...register("birth", {
            required: "생일을 입력해주세요.",
            onChange: (e) => handleBirthChange(e),
            minLength: { value: 10, message: "생일을 입력해주세요." },
          })}
        />
        {errors.birth && <p>{errors.birth.message}</p>}
      </div>

      <div>
        <label htmlFor="email">이메일: </label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "이메일을 적어주세요.",
            pattern: { value: /^\S+@\S+$/i, message: "유효하지 않은 이메일" },
          }}
          render={({ field }) => <input {...field} placeholder="이메일 작성" />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호: </label>
        <input
          placeholder="비밀번호"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 1, message: "1자리 이상을 입력" },
            maxLength: { value: 10, message: "10자리 이하로 입력" },
            validate: (value) =>
              !value.includes("123") || "비밀번호를 어렵게 변경해주세요.",
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">전송</button>
    </form>
  );
};

export default App;
```

:::note

![image](https://github.com/JJamVa/JJamVa/assets/80045006/85dfc33c-4f0c-4472-b5a0-8cd3f610fc26)

위의 이미지는 초기 화면이다.<br/>
크게 form태그를 형성하여 두개의 입력값과 전송 버튼이 있다.<br/>
label을 통해 입력칸 앞에 `Name:`과 `Email:`을 작성하였다.<br/>
또한 onSubmit을 통해 useForm의 onSubmit과 handleSubmit을 이용하여 제출이 되었을 경우 사용한다.<br/>
이를 통해 Controller의 name속성과 입력된 value값을 객체 타입으로 확인이 가능하다.<br/>

Controller 컴포넌트에 name속성을 label의 name속성과 일치시켰다.(꼭 일치 시킬 필요는 없지만 명시적이고 가독성을 위해 일치)<br/>
control속성은 useForm의 control객체 값을 전달한다.<br/>
이로 인해 폼 상태 관리 및 제어, 데이터 수집, 에러 처리 등 할 수 있게 연결한다.<br/>
rules 속성의 required는 입력값을 필수로 받는다는 의미이다.<br/>
또 rules의 속성 중 pattern이 있으며, value와 message가 있다.<br/>
value는 정규표현식을 이용하여 입력값의 형태를 지정할 수 있으며,<br/>
message는 해당 태그에 입력값이 value의 정규표현식이 해당되지 않을 경우에 표시된다.<br/>
render와 같은 경우 field의 값을 이용하여 표현할 태그에게 속성을 전달해주는 함수이다.<br/>
이 field값에는 `onChange`, `onBlur`, `value`, `name`, `ref`등의 속성이 있으며,<br/>
이 속성을 input태그에게 전달하여 화면에 렌더를 해주는 역할을 한다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b03134b7-5e9c-4bd2-9cf9-dd831bf6febd)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f762b09f-3ce7-43ef-b6da-a4ab43587b4f)

:::
