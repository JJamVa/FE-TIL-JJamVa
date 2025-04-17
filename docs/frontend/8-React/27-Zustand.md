# Zustand

## Zustand란?

- React 상태 관리 라이브러리 중 하나
- 다른 상태 라이브러리에 비해 간단하고 간결
- 해당 React 프로젝트 경로 터미널에 `npm install zustand` 입력하여 설치

## Zustand의 주요 특징

- `간단함과 가벼움`: 설정이 거의 필요없이 몇 줄의 코드로 구현 가능
- `Hooks 기반`: React의 Hooks 시스템을 활용하여 상태를 구독하고 업데이트
- `불변성을 지키지 않는 선택적 접근`: 상태를 변경할 때, 불변성을 유지할 필요가 없다
- `전역 상태 관리`: Component 간 상태 공유가 간단
- `성능 최적화`: Zustand는 필요한 컴포넌트만 리렌더링하도록 최적화(**선택적 구독**)

:::tip
**선택적 구독이란?**

하나의 store안에 여러가지의 상태 및 메소드가 존재할 경우,<br/>
해당 Component에 필요로한 상태와 메소드만 호출하여 사용.<br/>

이를 통해, 사용하지 않는 store의 상태와 메소드에 대해 **재렌더링이 발생을 방지한다**.<br/>
성능 향상 및 코드 관리의 효율성이 좋아진다.<br/>

:::

## Zustand의 함수 및 메소드

- `create`
  - Zustand **스토어를 생성**
  - 상태와 그 상태를 업데이트하는 함수들을 정의한느 객체를 반환하여 콜백 함수를 인자로 받는다
- `set`
  - **상태를 업데이트**
  - 스토어를 생성할 때 같이 생성, 상태를 직접 수정하는 함수를 인자로 받는다
- `get`
  - 스토어의 **현재 상태를 반환**
  - 비동기 작업이나 Component 외부에서 상태를 조회할 때 사용
- `subscribe`
  - **상태 변경을 구독**
  - 상태가 변경될 때마다 호출될 콜백 함수를 인자로 받는다
  - 상태 변경 감지 혹은 필요 동작 수행
- `getState`
  - 스토어의 **현재 상태를 반환**
  - Component 내부/외부에서도 현재 상태를 조회 가능
- `destory`
  - 스토어의 **구독을 해제하고 삭제**
  - 스토어의 기능이 필요 없을 때 사용

## Zustand 구현

- Zustand를 이용하여 간단한 TodoList를 구현

```js title="TodoStore.js"
import create from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      ),
    })),
  completedTodosCount: () => {
    const { todos } = useTodoStore.getState();
    return todos.filter((todo) => todo.completed).length;
  },
}));

export default useTodoStore;
```

```jsx title="App.js"
import React, { useState } from "react";
import useTodoStore from "./TodoStore";

const App = () => {
  const { todos, addTodo, completeTodo, completedTodosCount } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
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
        {todos &&
          todos.map((todo) => (
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
                onClick={() => completeTodo(todo.id)}
              >
                {todo.completed ? "완료" : "작업 중"}
              </button>
            </li>
          ))}
      </ul>

      <div>완료한 TodosList 개수: {completedTodosCount()}</div>
    </div>
  );
};

export default App;
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/c1fc871a-c858-4278-82cd-b33dba860a44)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b77ca50e-555f-4881-92e5-4d6cd5d8d031)

:::note
TodoStore.js의 코드는 Zustand를 이용한 store를 정의한 코드이다.<br/>
create함수를 이용하여 todos라는 상태와 관련 함수들을 객체 형태로 store를 정의한다.<br/>

---

addTodo, completeTodo에서 `set`함수가 존재한다.<br/>
addTodo, completeTodo가 호출될 경우, **set함수가 실행** 되며 todos의 **상태가 업데이트**가 된다.<br/>

---

completedTodosCount함수는 completed(완료) 개수를 반환하는 함수이다.<br/>
함수 내부에 getState를 이용하여 todos의 현재 상태를 가져와 길이를 반환한다.<br/>
completedTodosCount메소드의 동작에는 문제 없지만, getState 사용 예시를 보여주기 위한 코드이다.<br/>
completedTodosCount메소드는 store의 상태가 변경될 때마다, 계산이 **불필요하게 반복되어 실행**되므로,<br/>
성능에 부정적인 영향을 미칠 수 있는 불필요한 계산이 될 수 있다.<br/>
위의 코드 기반으로는 App.js에 직접 todos를 길이를 구현하고 표현하는 것이 성능 개선이 될 것이다.<br/>

---

App.js에서 useTodoStore을 호출하여, 일반 객체의 사용법과 같이 상태 및 메소드를 사용하면 된다.

:::
