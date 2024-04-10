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

:::tip

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

:::tip
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
  - 해당 필드의 **고유한 이름**
  - 폼 데이터 객체의 속성으로 사용되며, useForm hook의 handleSubmit 함수를 통해 제출 시 해당 이름으로 데이터에 접근
- **control(필수 속성)**
  - useForm hook에서 반환되는 control 객체를 전달
  - React Hook Form의 상태와 메서드를 제공하여 폼을 제어하는 데 사용
- **render(필수 속성)**
  - 필드 컴포넌트를 렌더링하는 데 사용하는 함수 속성
  - 이 함수에는 field 객체가 전달되며, 이 객체의 속성을 필드 컴포넌트에 전달하여 연결이 가능
- defaultValue
  - 필드의 초기값을 설정
  - 컴포넌트가 마운트될 때 폼 상태에 초기값이 반영
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
            {...register("sex", {
              required: "성별을 입력해주세요.",
              validate: (value) =>
                value === "남자" ||
                value === "여자" ||
                "성별은 '남자' 또는 '여자'로 입력해주세요.",
            })}
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

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6649e9be-09f7-4cd6-82a3-ef28292c6f3d)

위의 이미지는 초기화면이다.<br/>

---

```js title="이름 필드"
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
```

이름을 입력하는 필드이다.<br/>
Controller를 통해 입력 필드를 제어하기 위해 사용한다.<br/>
Controller의 속성에 `name`, `control`, `rules`, `render`가 존재한다.<br/>

- name: 필드를 식별하기 위해 사용하는 이름
- control: React Hook form의 제어 객체. form상태와 메서드에 접근 설정
- rules: 필드의 입력 규칙(위의 코드는 입력값을 필수로 설정)
- render: 필드의 렌더링을 담당하는 함수

Controller 내부에 render를 통해 input태그에 field값을 전달한다.<br/>
이때의 field값에는 Controller에 작성되었던 속성값(name, control, rules)들을 **render prop로 전달**한다.<br/>
즉, input태그에 hook form 기능을 적용하기 위해 사용된 코드이다.<br/>

erros.name은 Controller에서 적용한 rules를 위배될 경우에 실행되는 코드이다.<br/>

---

```jsx title="성별 필드"
const {
  register,
  setValue,
  formState: { errors },
  watch,
} = useForm({
  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },
});

const watchName = watch("name");

{
  watchName.length >= 3 && (
    <div>
      <label htmlFor="sex">성별: </label>
      <input
        placeholder="성별 ex)남자, 여자"
        {...register("sex", {
          required: "성별을 입력해주세요.",
          validate: (value) =>
            value === "남자" ||
            value === "여자" ||
            "성별은 '남자' 또는 '여자'로 입력해주세요.",
        })}
      />
      {errors.sex && <p>{errors.sex.message}</p>}
    </div>
  );
}
```

성별을 입력하는 필드다.<br/>
코드를 보면 useForm의 반환값 중 하나인 watch가 있다.<br/>
watch의 기능은 필드의 값을 감시한다.<br/>
즉, 위의 코드에서는 name필드를 감시하도록 설정하였다.<br/>

name필드의 입력값이 3자리가 넘을 경우, 성별 입력이 가능한 필드가 보여지게 된다.<br/>
Controller를 이용하지 않고, input태그에 직접적으로 register로 설정하였다.<br/>

register는 말그대로 **등록하다**는 의미를 가진다.<br/>
첫번째 인자값은 설정할 **필드명을 설정**한다.<br/>
두번째 인자값은 **객체 형태로 작성**을 해야되며, 필드명의 **규칙을 설정**하면 된다.<br/>

- required: 입력값을 필수로 받게 설정
- validate: 입력값의 유효성을 검사하기 위한 함수

validate로 해당 입력값이 `남자` 혹은 `여자`가 아닐 경우, 에러 메세지가 발생하도록 설정하였다.<br/>

---

```jsx title="생년월일 필드"
const {
  register,
  setValue,
  formState: { errors },
} = useForm({
  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },
});

const handleBirthChange = (event) => {
  const { value } = event.target;
  let formattedValue = value
    .replace(/[^\d.]/g, "")
    .replace(/(\d{4})(\d)/, "$1.$2")
    .replace(/(\d{4}\.\d{2})(\d)/, "$1.$2")
    .substring(0, 10);

  setValue("birth", formattedValue, { shouldValidate: true });
};

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
</div>;
```

생년월일을 입력하는 필드이다.<br/>
register를 이용하여 `입력값을 필수`로 받으며, `최소한의 길이(minLength)` 지정하는 속성도 사용하였다.<br/>
입력값이 숫자로만 구성, 해당 입력값의 길이에 따라 `.`을 자동적으로 입력되게 하기 위해 handleBirthChange함수를 구현<br/>

handleBirthChange함수를 살펴보면 현재 입력값을 받아와 정규표현식으로 문자열을 변경하고 있다.<br/>
변경된 문자는 useForm의 반환값 중 하나인 setValue를 통해 변경을 한다.<br/>
setValue의 첫번째 인자값은 변경할 필드명을 작성<br/>
두번째 인자값은 변경할 필드명의 값을 작성<br/>
세번째는 변경 사항을 적용할 때 추가 옵션을 객체 형태로 설정<br/>
세번째 인자값에 shouldValidate 설정함으로써 값이 변경될 때마다 유효성을 자동으로 검사한다.<br/>

---

```jsx title="이메일 필드"
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
```

이메일을 입력하는 필드이다.<br/>
name 필드와 같이 Controller를 사용하여 구현하였다.<br/>
차이점은 rules의 pattern이 추가가 되었다.<br/>
pattern은 render를 통해 표현될 컴포넌트의 값이 해당 정규표현식의 조건과 부합한지 확인한다.<br/>
조건이 부합하지 않을 경우, message를 통해 에러를 표출한다.<br/>

---

```jsx title="비밀번호 필드"
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
```

비밀번호를 입력하는 필드이다.<br/>
register를 이용하여 다양한 조건을 걸어 구현하였다.<br/>

---

```jsx title="submit"
const {
  handleSubmit,
  formState: { errors },
  reset,
} = useForm({
  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },
});

const onSubmit = (data) => {
  console.log(data);
  reset();
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    // 다양한 필드
    <button type="submit">전송</button>
  </form>
);
```

모든 필드의 값을 입력했을 경우에 버튼을 눌러 데이터를 확인하는 코드이다.<br/>
해당 버튼을 누를 경우, handleSubmit(onSubmit)이 발생한다.<br/>
handleSubmit은 form 제출 이벤트를 처리하기 위한 React Hook Form의 함수이다.<br/>
handleSubmit은 이벤트 헨들러가 실행되어 form데이터를 수집 및 보내줄 콜백 함수를 호출<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/9a49b97a-f861-4aa8-84b9-faea2b52932f)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4b6bea6a-1daf-4e5a-98b0-0a9745c402ef)

onSubmit에 전달된 data라는 변수는 Hook form안에 데이터이다.<br/>
출력 결과물을 보면 register 혹은 Controller 설정된 값이 key로 등록되어있고,입력값들은 value로 저장되어있다.<br/>
출력 후, useForm의 반환값 중 하나인 reset을 이용하여 값들을 초기화한다.<br/>
이때 초기화가 되는 값은 useForm안에 defaultValues로 지정된 값으로 초기화가 된다.<br/>

:::

:::info
**Controller vs register**

:::
