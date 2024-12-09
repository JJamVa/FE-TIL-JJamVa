"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4412],{8315:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"frontend/React/Zustand","title":"Zustand","description":"Zustand\ub780?","source":"@site/docs/frontend/9-React/27-Zustand.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/Zustand","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Zustand","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{},"sidebar":"frontend","previous":{"title":"Mobx","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Mobx"},"next":{"title":"useCallback","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useCallback"}}');var r=t(6070),o=t(989);const d={},l="Zustand",i={},c=[{value:"Zustand\ub780?",id:"zustand\ub780",level:2},{value:"Zustand\uc758 \uc8fc\uc694 \ud2b9\uc9d5",id:"zustand\uc758-\uc8fc\uc694-\ud2b9\uc9d5",level:2},{value:"Zustand\uc758 \ud568\uc218 \ubc0f \uba54\uc18c\ub4dc",id:"zustand\uc758-\ud568\uc218-\ubc0f-\uba54\uc18c\ub4dc",level:2},{value:"Zustand \uad6c\ud604",id:"zustand-\uad6c\ud604",level:2}];function a(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"zustand",children:"Zustand"})}),"\n",(0,r.jsx)(e.h2,{id:"zustand\ub780",children:"Zustand\ub780?"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"React \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911 \ud558\ub098"}),"\n",(0,r.jsx)(e.li,{children:"\ub2e4\ub978 \uc0c1\ud0dc \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ube44\ud574 \uac04\ub2e8\ud558\uace0 \uac04\uacb0"}),"\n",(0,r.jsxs)(e.li,{children:["\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,r.jsx)(e.code,{children:"npm install zustand"})," \uc785\ub825\ud558\uc5ec \uc124\uce58"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"zustand\uc758-\uc8fc\uc694-\ud2b9\uc9d5",children:"Zustand\uc758 \uc8fc\uc694 \ud2b9\uc9d5"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\uac04\ub2e8\ud568\uacfc \uac00\ubcbc\uc6c0"}),": \uc124\uc815\uc774 \uac70\uc758 \ud544\uc694\uc5c6\uc774 \uba87 \uc904\uc758 \ucf54\ub4dc\ub85c \uad6c\ud604 \uac00\ub2a5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Hooks \uae30\ubc18"}),": React\uc758 Hooks \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uad6c\ub3c5\ud558\uace0 \uc5c5\ub370\uc774\ud2b8"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\ub294 \uc120\ud0dd\uc801 \uc811\uadfc"}),": \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \ub54c, \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac"}),": Component \uac04 \uc0c1\ud0dc \uacf5\uc720\uac00 \uac04\ub2e8"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654"}),": Zustand\ub294 \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub9cc \ub9ac\ub80c\ub354\ub9c1\ud558\ub3c4\ub85d \ucd5c\uc801\ud654(",(0,r.jsx)(e.strong,{children:"\uc120\ud0dd\uc801 \uad6c\ub3c5"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(e.admonition,{type:"tip",children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\uc120\ud0dd\uc801 \uad6c\ub3c5\uc774\ub780?"})}),(0,r.jsxs)(e.p,{children:["\ud558\ub098\uc758 store\uc548\uc5d0 \uc5ec\ub7ec\uac00\uc9c0\uc758 \uc0c1\ud0dc \ubc0f \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac\ud560 \uacbd\uc6b0,",(0,r.jsx)(e.br,{}),"\r\n\ud574\ub2f9 Component\uc5d0 \ud544\uc694\ub85c\ud55c \uc0c1\ud0dc\uc640 \uba54\uc18c\ub4dc\ub9cc \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9.",(0,r.jsx)(e.br,{})]}),(0,r.jsxs)(e.p,{children:["\uc774\ub97c \ud1b5\ud574, \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 store\uc758 \uc0c1\ud0dc\uc640 \uba54\uc18c\ub4dc\uc5d0 \ub300\ud574 ",(0,r.jsx)(e.strong,{children:"\uc7ac\ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\uc744 \ubc29\uc9c0\ud55c\ub2e4"}),".",(0,r.jsx)(e.br,{}),"\r\n\uc131\ub2a5 \ud5a5\uc0c1 \ubc0f \ucf54\ub4dc \uad00\ub9ac\uc758 \ud6a8\uc728\uc131\uc774 \uc88b\uc544\uc9c4\ub2e4.",(0,r.jsx)(e.br,{})]})]}),"\n",(0,r.jsx)(e.h2,{id:"zustand\uc758-\ud568\uc218-\ubc0f-\uba54\uc18c\ub4dc",children:"Zustand\uc758 \ud568\uc218 \ubc0f \uba54\uc18c\ub4dc"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"create"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Zustand ",(0,r.jsx)(e.strong,{children:"\uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131"})]}),"\n",(0,r.jsx)(e.li,{children:"\uc0c1\ud0dc\uc640 \uadf8 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\ub4e4\uc744 \uc815\uc758\ud55c\ub290 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\uc5ec \ucf5c\ubc31 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"set"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8"})}),"\n",(0,r.jsx)(e.li,{children:"\uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131\ud560 \ub54c \uac19\uc774 \uc0dd\uc131, \uc0c1\ud0dc\ub97c \uc9c1\uc811 \uc218\uc815\ud558\ub294 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"get"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\uc2a4\ud1a0\uc5b4\uc758 ",(0,r.jsx)(e.strong,{children:"\ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\ud658"})]}),"\n",(0,r.jsx)(e.li,{children:"\ube44\ub3d9\uae30 \uc791\uc5c5\uc774\ub098 Component \uc678\ubd80\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc870\ud68c\ud560 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"subscribe"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\uc0c1\ud0dc \ubcc0\uacbd\uc744 \uad6c\ub3c5"})}),"\n",(0,r.jsx)(e.li,{children:"\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub420 \ucf5c\ubc31 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"}),"\n",(0,r.jsx)(e.li,{children:"\uc0c1\ud0dc \ubcc0\uacbd \uac10\uc9c0 \ud639\uc740 \ud544\uc694 \ub3d9\uc791 \uc218\ud589"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"getState"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\uc2a4\ud1a0\uc5b4\uc758 ",(0,r.jsx)(e.strong,{children:"\ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\ud658"})]}),"\n",(0,r.jsx)(e.li,{children:"Component \ub0b4\ubd80/\uc678\ubd80\uc5d0\uc11c\ub3c4 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc870\ud68c \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"destory"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\uc2a4\ud1a0\uc5b4\uc758 ",(0,r.jsx)(e.strong,{children:"\uad6c\ub3c5\uc744 \ud574\uc81c\ud558\uace0 \uc0ad\uc81c"})]}),"\n",(0,r.jsx)(e.li,{children:"\uc2a4\ud1a0\uc5b4\uc758 \uae30\ub2a5\uc774 \ud544\uc694 \uc5c6\uc744 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"zustand-\uad6c\ud604",children:"Zustand \uad6c\ud604"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Zustand\ub97c \uc774\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c TodoList\ub97c \uad6c\ud604"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:'title="TodoStore.js"',children:'import create from "zustand";\r\n\r\nconst useTodoStore = create((set) => ({\r\n  todos: [],\r\n  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),\r\n  completeTodo: (id) =>\r\n    set((state) => ({\r\n      todos: state.todos.map((todo) =>\r\n        todo.id === id ? { ...todo, completed: true } : todo\r\n      ),\r\n    })),\r\n  completedTodosCount: () => {\r\n    const { todos } = useTodoStore.getState();\r\n    return todos.filter((todo) => todo.completed).length;\r\n  },\r\n}));\r\n\r\nexport default useTodoStore;\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:'import React, { useState } from "react";\r\nimport useTodoStore from "./TodoStore";\r\n\r\nconst App = () => {\r\n  const { todos, addTodo, completeTodo, completedTodosCount } = useTodoStore();\r\n  const [newTodo, setNewTodo] = useState("");\r\n\r\n  const handleSubmit = (e) => {\r\n    e.preventDefault();\r\n    addTodo({\r\n      id: Math.random(),\r\n      title: newTodo,\r\n      completed: false,\r\n    });\r\n    setNewTodo("");\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <form onSubmit={handleSubmit}>\r\n        <input\r\n          type="text"\r\n          value={newTodo}\r\n          onChange={(e) => setNewTodo(e.target.value)}\r\n          placeholder="Add new todo"\r\n        />\r\n        <button type="submit">Todo List \ucd94\uac00</button>\r\n      </form>\r\n\r\n      <ul>\r\n        {todos &&\r\n          todos.map((todo) => (\r\n            <li\r\n              key={todo.id}\r\n              style={{\r\n                width: "20vw",\r\n                display: "flex",\r\n                justifyContent: "space-between",\r\n              }}\r\n            >\r\n              <span>{todo.title}</span>\r\n              <button\r\n                disabled={todo.completed}\r\n                onClick={() => completeTodo(todo.id)}\r\n              >\r\n                {todo.completed ? "\uc644\ub8cc" : "\uc791\uc5c5 \uc911"}\r\n              </button>\r\n            </li>\r\n          ))}\r\n      </ul>\r\n\r\n      <div>\uc644\ub8cc\ud55c TodosList \uac1c\uc218: {completedTodosCount()}</div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default App;\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/c1fc871a-c858-4278-82cd-b33dba860a44",alt:"image"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/b77ca50e-555f-4881-92e5-4d6cd5d8d031",alt:"image"})}),"\n",(0,r.jsxs)(e.admonition,{type:"note",children:[(0,r.jsxs)(e.p,{children:["TodoStore.js\uc758 \ucf54\ub4dc\ub294 Zustand\ub97c \uc774\uc6a9\ud55c store\ub97c \uc815\uc758\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,r.jsx)(e.br,{}),"\r\ncreate\ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec todos\ub77c\ub294 \uc0c1\ud0dc\uc640 \uad00\ub828 \ud568\uc218\ub4e4\uc744 \uac1d\uccb4 \ud615\ud0dc\ub85c store\ub97c \uc815\uc758\ud55c\ub2e4.",(0,r.jsx)(e.br,{})]}),(0,r.jsx)(e.hr,{}),(0,r.jsxs)(e.p,{children:["addTodo, completeTodo\uc5d0\uc11c ",(0,r.jsx)(e.code,{children:"set"}),"\ud568\uc218\uac00 \uc874\uc7ac\ud55c\ub2e4.",(0,r.jsx)(e.br,{}),"\r\naddTodo, completeTodo\uac00 \ud638\ucd9c\ub420 \uacbd\uc6b0, ",(0,r.jsx)(e.strong,{children:"set\ud568\uc218\uac00 \uc2e4\ud589"})," \ub418\uba70 todos\uc758 ",(0,r.jsx)(e.strong,{children:"\uc0c1\ud0dc\uac00 \uc5c5\ub370\uc774\ud2b8"}),"\uac00 \ub41c\ub2e4.",(0,r.jsx)(e.br,{})]}),(0,r.jsx)(e.hr,{}),(0,r.jsxs)(e.p,{children:["completedTodosCount\ud568\uc218\ub294 completed(\uc644\ub8cc) \uac1c\uc218\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc774\ub2e4.",(0,r.jsx)(e.br,{}),"\r\n\ud568\uc218 \ub0b4\ubd80\uc5d0 getState\ub97c \uc774\uc6a9\ud558\uc5ec todos\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uac00\uc838\uc640 \uae38\uc774\ub97c \ubc18\ud658\ud55c\ub2e4.",(0,r.jsx)(e.br,{}),"\r\ncompletedTodosCount\uba54\uc18c\ub4dc\uc758 \ub3d9\uc791\uc5d0\ub294 \ubb38\uc81c \uc5c6\uc9c0\ub9cc, getState \uc0ac\uc6a9 \uc608\uc2dc\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,r.jsx)(e.br,{}),"\r\ncompletedTodosCount\uba54\uc18c\ub4dc\ub294 store\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4, \uacc4\uc0b0\uc774 ",(0,r.jsx)(e.strong,{children:"\ubd88\ud544\uc694\ud558\uac8c \ubc18\ubcf5\ub418\uc5b4 \uc2e4\ud589"}),"\ub418\ubbc0\ub85c,",(0,r.jsx)(e.br,{}),"\r\n\uc131\ub2a5\uc5d0 \ubd80\uc815\uc801\uc778 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\ub294 \ubd88\ud544\uc694\ud55c \uacc4\uc0b0\uc774 \ub420 \uc218 \uc788\ub2e4.",(0,r.jsx)(e.br,{}),"\r\n\uc704\uc758 \ucf54\ub4dc \uae30\ubc18\uc73c\ub85c\ub294 App.js\uc5d0 \uc9c1\uc811 todos\ub97c \uae38\uc774\ub97c \uad6c\ud604\ud558\uace0 \ud45c\ud604\ud558\ub294 \uac83\uc774 \uc131\ub2a5 \uac1c\uc120\uc774 \ub420 \uac83\uc774\ub2e4.",(0,r.jsx)(e.br,{})]}),(0,r.jsx)(e.hr,{}),(0,r.jsx)(e.p,{children:"App.js\uc5d0\uc11c useTodoStore\uc744 \ud638\ucd9c\ud558\uc5ec, \uc77c\ubc18 \uac1d\uccb4\uc758 \uc0ac\uc6a9\ubc95\uacfc \uac19\uc774 \uc0c1\ud0dc \ubc0f \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."})]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},989:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>l});var s=t(758);const r={},o=s.createContext(r);function d(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);