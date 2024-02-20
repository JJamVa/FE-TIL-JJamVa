# Mobx

## Mobx란?

- JavaScript 애플리케이션의 상태 관리를 위한 라이브러리
- 상태 관리를 단순하고 효율적으로 사용
- 최소한의 부분만 업데이트하여 성능 최적화
- 해당 React 프로젝트 경로 터미널에 `npm install mobx mobx-react` 입력하여 설치

:::tip

React 버전 16.8 이상에서 Hooks를 사용하는 경우 `npm install mobx-react-lite`를 설치하면 된다.

:::

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

## MobX 구현

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
