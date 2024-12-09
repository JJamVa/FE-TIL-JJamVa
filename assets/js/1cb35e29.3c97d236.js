"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2639],{9733:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"frontend/React/Mobx","title":"Mobx","description":"Mobx\ub780?","source":"@site/docs/frontend/9-React/26-Mobx.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/Mobx","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Mobx","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{},"sidebar":"frontend","previous":{"title":"React Hook Form","permalink":"/FE-TIL-JJamVa/docs/frontend/React/ReactHookForm"},"next":{"title":"Zustand","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Zustand"}}');var t=e(6070),s=e(989);const d={},i="Mobx",l={},c=[{value:"Mobx\ub780?",id:"mobx\ub780",level:2},{value:"Mobx\uc758 \ud575\uc2ec \uac1c\ub150",id:"mobx\uc758-\ud575\uc2ec-\uac1c\ub150",level:2},{value:"\ud074\ub798\uc2a4\ud615 MobX \uad6c\ud604",id:"\ud074\ub798\uc2a4\ud615-mobx-\uad6c\ud604",level:2},{value:"\ud568\uc218\ud615 MobX \uad6c\ud604",id:"\ud568\uc218\ud615-mobx-\uad6c\ud604",level:2}];function a(o){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mobx",children:"Mobx"})}),"\n",(0,t.jsx)(n.h2,{id:"mobx\ub780",children:"Mobx\ub780?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JavaScript \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,t.jsx)(n.li,{children:"\uc0c1\ud0dc \uad00\ub9ac\ub97c \ub2e8\uc21c\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9"}),"\n",(0,t.jsx)(n.li,{children:"\ucd5c\uc18c\ud55c\uc758 \ubd80\ubd84\ub9cc \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \uc131\ub2a5 \ucd5c\uc801\ud654"}),"\n",(0,t.jsxs)(n.li,{children:["\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,t.jsx)(n.code,{children:"npm install mobx mobx-react"})," \uc785\ub825\ud558\uc5ec \uc124\uce58"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mobx\uc758-\ud575\uc2ec-\uac1c\ub150",children:"Mobx\uc758 \ud575\uc2ec \uac1c\ub150"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Observables"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0c1\ud0dc \uad00\ub9ac\uc758 \ud575\uc2ec\uc740 \uad00\ucc30 \uac00\ub2a5 \uac1d\uccb4"}),"\n",(0,t.jsx)(n.li,{children:"MobX\uc5d0 \uc758\ud574 \uc790\ub3d9\uc73c\ub85c \uad00\ucc30"}),"\n",(0,t.jsx)(n.li,{children:"\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ubc18\uc751\ud615\uc73c\ub85c \ub3d9\uc791"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Actions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ubaa8\ub4e0 \uac83\uc744 Action\uc73c\ub85c \uac04\uc8fc"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Computeds Value"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uacc4\uc0b0\ub41c \uac12\uc740 \uae30\uc874 \uc0c1\ud0dc\ub97c \uae30\ubc18\uc73c\ub85c \ud30c\uc0dd\ub41c \uac12"}),"\n",(0,t.jsx)(n.li,{children:"MobX\uc758 \uad00\ub828 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uacc4\uc0b0\ub41c \uac12\uc744 \uc790\ub3d9\uc73c\ub85c \ub2e4\uc2dc \uacc4\uc0b0"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reactions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uad00\ucc30 \uac00\ub2a5\ud55c \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c \ubc18\uc751\uc744 \uc77c\uc73c\ud0a4\ub294 \uba54\ucee4\ub2c8\uc998\uc744 \uc81c\uacf5"}),"\n",(0,t.jsx)(n.li,{children:"\uc790\ub3d9\uc73c\ub85c UI\ub97c \uc5c5\ub370\uc774\ud2b8, \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ud074\ub798\uc2a4\ud615-mobx-\uad6c\ud604",children:"\ud074\ub798\uc2a4\ud615 MobX \uad6c\ud604"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MobX\ub97c \uc774\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c TodoList\ub97c \uad6c\ud604"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="TodoStore.js"',children:'import { makeAutoObservable } from "mobx";\r\n\r\nclass TodoStore {\r\n  todos = [];\r\n\r\n  constructor() {\r\n    makeAutoObservable(this);\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  completeTodo(id) {\r\n    this.todos[this.todos.findIndex((e) => e.id === id)]["completed"] = true;\r\n  }\r\n\r\n  get completedTodosCount() {\r\n    return this.todos.filter((todo) => todo.completed).length;\r\n  }\r\n}\r\n\r\nexport const todoStore = new TodoStore();\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="App.js"',children:'import React, { useState } from "react";\r\nimport { observer } from "mobx-react";\r\nimport { todoStore } from "./TodoStore";\r\n\r\nconst App = observer(() => {\r\n  const [newTodo, setNewTodo] = useState("");\r\n\r\n  const handleSubmit = (e) => {\r\n    e.preventDefault();\r\n    todoStore.addTodo({\r\n      id: Math.random(),\r\n      title: newTodo,\r\n      completed: false,\r\n    });\r\n    setNewTodo("");\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <form onSubmit={handleSubmit}>\r\n        <input\r\n          type="text"\r\n          value={newTodo}\r\n          onChange={(e) => setNewTodo(e.target.value)}\r\n          placeholder="Add new todo"\r\n        />\r\n        <button type="submit">Todo List \ucd94\uac00</button>\r\n      </form>\r\n\r\n      <ul>\r\n        {todoStore.todos &&\r\n          todoStore.todos.map((todo) => (\r\n            <li\r\n              key={todo.id}\r\n              style={{\r\n                width: "20vw",\r\n                display: "flex",\r\n                justifyContent: "space-between",\r\n              }}\r\n            >\r\n              <span>{todo.title}</span>\r\n              <button\r\n                disabled={todo.completed}\r\n                onClick={() => todoStore.completeTodo(todo.id)}\r\n              >\r\n                {todo.completed ? "\uc644\ub8cc" : "\uc791\uc5c5 \uc911"}\r\n              </button>\r\n            </li>\r\n          ))}\r\n      </ul>\r\n\r\n      <div>\uc644\ub8cc\ud55c TodosList \uac1c\uc218: {todoStore.completedTodosCount}</div>\r\n    </div>\r\n  );\r\n});\r\n\r\nexport default App;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/b06e55ca-9e52-46a7-bf85-de39e2d43608",alt:"image"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["TodoStore.js\uc758 \ucf54\ub4dc\ub294 MobX\uc758 \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud574 \uc0dd\uc131\ub41c \uc800\uc7a5\uc18c\uc774\ub2e4.",(0,t.jsx)(n.br,{}),"\r\ntodos\ub294 id, title, completed(\uc131\uacf5 \uc5ec\ubd80)\ub97c \ub2f4\ub294 \ubcc0\uc218\uc774\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"constructor() {\r\n  makeAutoObservable(this);\r\n}\n"})}),(0,t.jsxs)(n.p,{children:["\uac1d\uccb4 \uc0dd\uc131 \uc2dc, ",(0,t.jsx)(n.code,{children:"makeAutoObservable"}),"\uc744 \ud1b5\ud558\uc5ec \ud074\ub798\uc2a4\uc758 \ubaa8\ub4e0 \uc18d\uc131\uc744 \uc790\ub3d9\uc73c\ub85c ",(0,t.jsx)(n.strong,{children:"observable\uc0c1\ud0dc"}),"\ub85c \ub9cc\ub4e0\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\uc774\uc5d0 \ub530\ub77c \uc0c1\ud0dc\uc758 \uc18d\uc131\uc774 \ubcc0\uacbd\ub418\uba74 MobX\uac00 \uac10\uc9c0\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub97c \uc2dc\ud0a8\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"addTodo"}),", ",(0,t.jsx)(n.code,{children:"completeTodo"}),", ",(0,t.jsx)(n.code,{children:"completedTodosCount"}),"\ub294 \uac1d\uccb4\uc758 \uba54\uc18c\ub4dc\uc774\ub2e4.",(0,t.jsx)(n.br,{}),"\r\naddTodo\ub294 \uc785\ub825\ubc1b\uc740 Parameter\uac12\uc744 todos\ubcc0\uc218\uc5d0 \uc0bd\uc785\uc2dc\ud0a4\ub294 \uba54\uc18c\ub4dc",(0,t.jsx)(n.br,{}),"\r\ncompleteTodo\ub294 \ud574\ub2f9 id\uac12\uc744 \ubc1b\uc544 \uac12\uc744 \uc218\uc815\ud558\ub294 \uba54\uc18c\ub4dc\uc774\ub2e4.",(0,t.jsx)(n.br,{}),"\r\ncompletedTodosCount\uba54\uc18c\ub4dc\ub294 TodoList\ub97c \uc644\ub8cc\ud588\uc744 \ub54c\uc758 \uc218\ub97c \uce21\uc815\ud55c\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsxs)(n.p,{children:["completedTodosCount\uba54\uc18c\ub4dc\uc758 ",(0,t.jsx)(n.code,{children:"get"}),"\ud0a4\uc6cc\ub4dc\ub294 ",(0,t.jsx)(n.strong,{children:"\ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c \uacc4\uc0b0\ub41c \uc18d\uc131\uc744 \uc815\uc758\ud560 \ub54c \uc0ac\uc6a9"}),(0,t.jsx)(n.br,{}),"\r\nMobX\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uacc4\uc0b0\ub41c \uac12(computed value)\uc73c\ub85c \ucc98\ub9ac\ub418\uba70, \uc774\ub294 \uc758\uc874\ud558\ub294 todos \ubc30\uc5f4\uc758 completed \uc18d\uc131\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc790\ub3d9\uc73c\ub85c \ub2e4\uc2dc \uacc4\uc0b0"]}),(0,t.jsxs)(n.p,{children:["\ud574\ub2f9 TodoStore class\uc758 \uac1d\uccb4\ub97c \uc0dd\uc131 \ud6c4, \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0c8\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:["App.js\uc758 \ucf54\ub4dc\ub294 MobX\uc758 \uc0c1\ud0dc \ubcc0\uc218\ub97c \uc774\uc6a9\ud558\uc5ec, \uc785\ub825 \uac12\uc5d0 \ub300\ud574 TodoList\ub97c \ud45c\ud604\ud558\ub294 \uac83\uc744 \uad6c\ud604",(0,t.jsx)(n.br,{}),"\r\nTodoStore.js\uc5d0\uc11c \ub0b4\ubcf4\ub0c8\ub358 todoStore\ubcc0\uc218\ub97c \ubc1b\uc544\uc628\ub2e4.",(0,t.jsx)(n.br,{}),"\r\nMobX\uc5d0\uc11c \uc0dd\uc131\ub41c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc0ac\uc6a9\ud560 Component\ub97c observer\ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud638\ucd9c\ud574\uc57c\ud55c\ub2e4.",(0,t.jsx)(n.br,{}),"\r\nobserver\uc758 \uc5ed\ud560\uc740 todoStore\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 Component\uac00 \uc790\ub3d9\uc73c\ub85c \ub9ac\ub80c\ub354\ub9c1\ud558\uc5ec \ucd5c\uc2e0 UI \uc0c1\ud0dc\ub85c \uc720\uc9c0",(0,t.jsx)(n.br,{})]}),(0,t.jsxs)(n.p,{children:["\uc774\uc678\uc5d0 TodoStore class\uc5d0\uc11c \uc815\uc758\ud588\ub358 \uba54\uc18c\ub4dc\ub4e4\uc740 \uc77c\ubc18 \uac1d\uccb4 \ud0c0\uc785\uc758 \uba54\uc18c\ub4dc\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,t.jsx)(n.br,{})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\ud568\uc218\ud615-mobx-\uad6c\ud604",children:"\ud568\uc218\ud615 MobX \uad6c\ud604"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc704\uc758 \ud074\ub798\uc2a4\ud615 Mobx\uc640 \uac19\uc774 TodoList\ub97c \ud568\uc218\ud615 MobX\ub85c \uad6c\ud604"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="TodoStore.js"',children:'import { observable } from "mobx";\r\n\r\nconst TodoStore = observable({\r\n  todos: [],\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  },\r\n  completeTodo(id) {\r\n    this.todos[this.todos.findIndex((e) => e.id === id)]["completed"] = true;\r\n  },\r\n  get completedTodosCount() {\r\n    return this.todos.filter((todo) => todo.completed).length;\r\n  },\r\n});\r\n\r\nexport default TodoStore;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="App.js"',children:'import React, { useState } from "react";\r\nimport { useObserver } from "mobx-react";\r\nimport TodoStore from "./TodoStore";\r\n\r\nconst App = () => {\r\n  const [newTodo, setNewTodo] = useState("");\r\n\r\n  const handleSubmit = (e) => {\r\n    e.preventDefault();\r\n    TodoStore.addTodo({\r\n      id: Math.random(),\r\n      title: newTodo,\r\n      completed: false,\r\n    });\r\n    setNewTodo("");\r\n  };\r\n\r\n  return useObserver(() => (\r\n    <div>\r\n      <form onSubmit={handleSubmit}>\r\n        <input\r\n          type="text"\r\n          value={newTodo}\r\n          onChange={(e) => setNewTodo(e.target.value)}\r\n          placeholder="Add new todo"\r\n        />\r\n        <button type="submit">Todo List \ucd94\uac00</button>\r\n      </form>\r\n\r\n      <ul>\r\n        {TodoStore.todos &&\r\n          TodoStore.todos.map((todo) => (\r\n            <li\r\n              key={todo.id}\r\n              style={{\r\n                width: "20vw",\r\n                display: "flex",\r\n                justifyContent: "space-between",\r\n              }}\r\n            >\r\n              <span>{todo.title}</span>\r\n              <button\r\n                disabled={todo.completed}\r\n                onClick={() => TodoStore.completeTodo(todo.id)}\r\n              >\r\n                {todo.completed ? "\uc644\ub8cc" : "\uc791\uc5c5 \uc911"}\r\n              </button>\r\n            </li>\r\n          ))}\r\n      </ul>\r\n\r\n      <div>\uc644\ub8cc\ud55c TodosList \uac1c\uc218: {TodoStore.completedTodosCount}</div>\r\n    </div>\r\n  ));\r\n};\r\n\r\nexport default App;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/d3d888b6-daf6-48cb-9913-75b56d57be05",alt:"image"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["TodoStore.js\ub294 TodoList\uc5d0 \ud544\uc694\ud55c \uc0c1\ud0dc\uc640 \uc561\uc158\uc5d0 \ub300\ud574 \uc815\uc758\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsxs)(n.p,{children:["\ud568\uc218\ud615\uc758 Mobx\uc640 \uac19\uc740 \uacbd\uc6b0\ub294 observable\ub97c \ud1b5\ud574 \uac1d\uccb4\uc758 \uc0c1\ud0dc(todos)\uc640 \uc561\uc158(addTodo,completeTodo,completedTodosCount)\uc744 \uc815\uc758\ud574\uc57c\ub41c\ub2e4.",(0,t.jsx)(n.br,{}),"\r\nobservable\ud568\uc218\uc758 \uc5ed\ud560\uc740 observable\ud568\uc218\uc758 \ub2f4\uc740 \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \uc9c1\uc811 \uac1d\uccb4\ub85c \uc0dd\uc131\ud55c\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:["App.js\uc5d0\uc11c MobX\uc5d0\uc11c \uc815\uc758\ud55c \uac1d\uccb4\ub97c \uac00\uc838\uc640 \uc0ac\uc6a9\ud55c\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ud074\ub798\uc2a4\ud615\ud0dc\uc758 MobX\uc640 \ud568\uc218\ud615 MobX\uc758 App.js\uc758 \ucf54\ub4dc\ub294 \ub3d9\uc77c\ud558\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ub2e4\ub9cc \ud568\uc218\ud615 MobX\uc758 App.js\ucf54\ub4dc\uc640 \uac19\uc740 \uacbd\uc6b0, observer\uc774 \uc544\ub2cc useObserver\uc744 \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\uc600\uc9c0\ub9cc \uae30\ub2a5\uc801\uc778 \ubd80\ubd84\uc740 \ub3d9\uc77c\ud558\ub2e4.",(0,t.jsx)(n.br,{})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"observer\uacfc useObserver"}),(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\uacf5\ud1b5\uc810"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MobX\uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\uc5ec Component\ub97c \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8"}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\ucc28\uc774\uc810"}),(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"observer"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0ac\uc6a9\ud560 Component \uc804\uccb4\ub97c \uac10\uc2fc\ub2e4"}),"\n",(0,t.jsx)(n.li,{children:"\ud568\uc218 Component\uc640 Class Component\uc5d0 \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:"Component \uc815\uc758 \uc678\ubd80\uc5d0\uc11c \uac00\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"useObserver\ubcf4\ub2e4 observer\uc744 \uad8c\uc7a5(\uc131\ub2a5 \ucd5c\uc801\ud654 \ubc0f \ucf54\ub4dc \uc77c\uad00\uc131)"})}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"useObserver"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Component \ub0b4\ubd80\uc758 Hook\uc73c\ub85c \uc0ac\uc6a9"}),"\n",(0,t.jsx)(n.li,{children:"\ud568\uc218\ud615 Component\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:"Component \uc815\uc758 \ub0b4\ubd80\uc5d0\uc11c \uac00\ub2a5. (return \ubd80\ubd84)"}),"\n"]})]})]})}function x(o={}){const{wrapper:n}={...(0,s.R)(),...o.components};return n?(0,t.jsx)(n,{...o,children:(0,t.jsx)(a,{...o})}):a(o)}},989:(o,n,e)=>{e.d(n,{R:()=>d,x:()=>i});var r=e(758);const t={},s=r.createContext(t);function d(o){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function i(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:d(o.components),r.createElement(s.Provider,{value:n},o.children)}}}]);