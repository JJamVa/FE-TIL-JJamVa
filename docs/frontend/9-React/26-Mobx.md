# Mobx

## Mobx란?

- JavaScript 애플리케이션의 상태 관리를 위한 라이브러리
- 상태 관리를 단순하고 효율적으로 사용
- 최소한의 부분만 업데이트하여 성능 최적화
- 해당 React 프로젝트 경로 터미널에 `npm install mobx mobx-react` 입력하여 설치

## Mobx의 핵심 개념

- **Observables**
  - 상태 관리의 핵심은 관찰 가능 객체
  - MobX에 의해 자동으로 관찰
  - 상태가 변경될 때마다 반응형으로 동작
- **Actions**
  - 상태를 변경하는 모든 것을 Action으로 간주
- **Computeds Value**
  - 계산된 값은 기존 상태를 기반으로 파생된 값
  - MobX의 관련 상태가 변경될 때마다 계산된 값을 자동으로 다시 계산
- **Reactions**
  - 관찰 가능한 상태가 변경될 때 반응을 일으키는 메커니즘을 제공
  - 자동으로 UI를 업데이트, 로컬 스토리지에 데이터를 저장

## 클래스형 MobX 구현

- MobX를 이용하여 간단한 TodoList를 구현

```js title="TodoStore.js"
import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  completeTodo(id) {
    this.todos[this.todos.findIndex((e) => e.id === id)]["completed"] = true;
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }
}

export const todoStore = new TodoStore();
```

```js title="App.js"
import React, { useState } from "react";
import { observer } from "mobx-react";
import { todoStore } from "./TodoStore";

const App = observer(() => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    todoStore.addTodo({
      id: Math.random(),
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Todo List 추가</button>
      </form>

      <ul>
        {todoStore.todos &&
          todoStore.todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                width: "20vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{todo.title}</span>
              <button
                disabled={todo.completed}
                onClick={() => todoStore.completeTodo(todo.id)}
              >
                {todo.completed ? "완료" : "작업 중"}
              </button>
            </li>
          ))}
      </ul>

      <div>완료한 TodosList 개수: {todoStore.completedTodosCount}</div>
    </div>
  );
});

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d10e811c-2260-42e4-857f-a7242ca61eb5)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/841b2e42-30f4-4083-8a89-5fdc0b565778)

:::note

TodoStore.js의 코드는 MobX의 상태 관리를 위해 생성된 저장소이다.<br/>
todos는 id, title, completed(성공 여부)를 담는 변수이다.<br/>

```js
constructor() {
  makeAutoObservable(this);
}
```

객체 생성 시, `makeAutoObservable`을 통하여 클래스의 모든 속성을 자동으로 **observable상태**로 만든다.<br/>
이에 따라 상태의 속성이 변경되면 MobX가 감지하여 자동으로 업데이트를 시킨다.<br/>

`addTodo`, `completeTodo`, `completedTodosCount`는 객체의 메소드이다.<br/>
addTodo는 입력받은 Parameter값을 todos변수에 삽입시키는 메소드<br/>
completeTodo는 해당 id값을 받아 값을 수정하는 메소드이다.<br/>
completedTodosCount메소드는 TodoList를 완료했을 때의 수를 측정한다.<br/>

completedTodosCount메소드의 `get`키워드는 **클래스 내에서 계산된 속성을 정의할 때 사용**<br/>
MobX에서 자동으로 계산된 값(computed value)으로 처리되며, 이는 의존하는 todos 배열의 completed 속성이 변경될 때마다 자동으로 다시 계산

해당 TodoStore class의 객체를 생성 후, 변수를 내보냈다.<br/>

---

App.js의 코드는 MobX의 상태 변수를 이용하여, 입력 값에 대해 TodoList를 표현하는 것을 구현<br/>
TodoStore.js에서 내보냈던 todoStore변수를 받아온다.<br/>
MobX에서 생성된 변수를 사용하기 위해서는 사용할 Component를 observer함수를 이용하여 호출해야한다.<br/>
observer의 역할은 todoStore의 상태가 변경될 때마다 Component가 자동으로 리렌더링하여 최신 UI 상태로 유지<br/>

이외에 TodoStore class에서 정의했던 메소드들은 일반 객체 타입의 메소드와 같이 사용하면 된다.<br/>

:::

## 함수형 MobX 구현

- 위의 클래스형 Mobx와 같이 TodoList를 함수형 MobX로 구현

```js title="TodoStore.js"
import { observable } from "mobx";

const TodoStore = observable({
  todos: [],
  addTodo(todo) {
    this.todos.push(todo);
  },
  completeTodo(id) {
    this.todos[this.todos.findIndex((e) => e.id === id)]["completed"] = true;
  },
  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  },
});

export default TodoStore;
```

```js title="App.js"
import React, { useState } from "react";
import { useObserver } from "mobx-react";
import TodoStore from "./TodoStore";

const App = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    TodoStore.addTodo({
      id: Math.random(),
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  return useObserver(() => (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Todo List 추가</button>
      </form>

      <ul>
        {TodoStore.todos &&
          TodoStore.todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                width: "20vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{todo.title}</span>
              <button
                disabled={todo.completed}
                onClick={() => TodoStore.completeTodo(todo.id)}
              >
                {todo.completed ? "완료" : "작업 중"}
              </button>
            </li>
          ))}
      </ul>

      <div>완료한 TodosList 개수: {TodoStore.completedTodosCount}</div>
    </div>
  ));
};

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d10e811c-2260-42e4-857f-a7242ca61eb5)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/841b2e42-30f4-4083-8a89-5fdc0b565778)

:::note

TodoStore.js는 TodoList에 필요한 상태와 액션에 대해 정의한 코드이다.<br/>

함수형의 Mobx와 같은 경우는 observable를 통해 객체의 상태(todos)와 액션(addTodo,completeTodo,completedTodosCount)을 정의해야된다.<br/>
observable함수의 역할은 observable함수의 담은 상태와 액션을 직접 객체로 생성한다.<br/>

---

App.js에서 MobX에서 정의한 객체를 가져와 사용한다.<br/>
클래스형태의 MobX와 함수형 MobX의 App.js의 코드는 동일하다.<br/>
다만 함수형 MobX의 App.js코드와 같은 경우, observer이 아닌 useObserver을 이용하여 구현하였지만 기능적인 부분은 동일하다.<br/>

:::

:::info
**observer과 useObserver**<br/>

`공통점`

- MobX상태의 변화를 감지하여 Component를 자동 업데이트

`차이점`<br/>

**observer**

- 사용할 Component 전체를 감싼다
- 함수 Component와 Class Component에 사용 가능
- Component 정의 외부에서 가능
- **useObserver보다 observer을 권장(성능 최적화 및 코드 일관성)**

**useObserver**

- Component 내부의 Hook으로 사용
- 함수형 Component에서만 사용 가능
- Component 정의 내부에서 가능. (return 부분)

:::

<!-- 데코레이션 및 MobX의 다양한 함수 소개 내용 추가 -->

<!-- ## MobX 데코레이션(Decorators)

- 클래스와 클래스의 멤버(속성과 메서드)에 추가적인 선언적 구문을 제공하는 기능
- 리액티브 프로그래밍 패턴을 클래스 기반 구조에 쉽게 적용
- MobX의 주요 기능들을 더 직관적으로 사용 가능

### 주요 데코레이터(Decorators)

- `@observable`:
  - 클래스의 속성을 MobX의 리액티브 상태로 변경
  - `@observable`로 표시된 속성이 변경을 자동 감지
  - `@observable`에 의존하는 계산된 값이나 반응을 업데이트
- `@computed`
  - 계산된 값. 다른 상태에 기반한 값을 정의할 때 사용
  - `@computed`로 표시된 getter는 의존하는 `@observable`상태가 변경될 때만 다시 계산
  - 변경되지 않을 경우 이전 값을 그대로 사용(성능 최적화)
- `@action`
  - 상태를 변경하는 행동을 정의할 때 사용
  - `@action`으로 표시된 메서드 내에서 이루어지는 상태 변경은 MobX에 의해 트랜잭션으로 처리(일관성 있는 상태 보장)
  - 비동기 작업을 포함한 복잡한 상태 업데이트 로직에 사용
- `@observer`
  - `@observable`상태의 변경에 자동으로 반응
  - 클래스 Component에는 `@observer`데코레이터를 직접 적용
  - 함수형 Component에서는 `observer`함수를 사용하여 Component를 감싸준다.

:::tip
**MobX데코레이션 사용 전, 설정**

**1. React(JavaScript) 사용하는 경우**<br/>
터미널에 `npm install @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties --save-dev`을 입력<br/>
`@babel/plugin-proposal-decorators`는 데코레이터를 사용할 수 있는 플러그인<br/>
`@babel/plugin-proposal-class-properties`는 클래스 프로퍼티 플러그인<br/>

```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

설치 후, 루트 디렉토리의 `.babelrc`파일 혹은 `babel.config.json`파일에 위의 옵션을 선언.<br/>
다만, **데코레이터 플러그인이 클래스 프로퍼티 플러그인 보다 먼저 선언**되어야한다.<br/>

babel관련 파일이 없을 경우<br/>
`npm install --save-dev @babel/core @babel/cli @babel/preset-env` 터미널에 입력<br/>
설치 후, `.babelrc`파일 혹은 `babel.config.json`파일을 생성하여 작성하면 된다.<br/>

**2. React(TypeScript) 사용하는 경우**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true,
    "useDefineForClassFields": true
  }
}
```

`tsconfig.json`파일에 위의 옵션을 작성<br/>

::: -->


