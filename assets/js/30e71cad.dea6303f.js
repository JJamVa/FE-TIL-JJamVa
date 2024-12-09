"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6025],{1589:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"frontend/React/useContext","title":"useContext","description":"useContext\ub780?","source":"@site/docs/frontend/9-React/17-useContext.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/useContext","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useContext","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{},"sidebar":"frontend","previous":{"title":"ContextAPI","permalink":"/FE-TIL-JJamVa/docs/frontend/React/ContextAPI"},"next":{"title":"Axios","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Axios"}}');var o=t(6070),s=t(989);const i={},c="useContext",d={},l=[{value:"useContext\ub780?",id:"usecontext\ub780",level:2},{value:"useContext\uc640 Consumer\uc758 \ucc28\uc774",id:"usecontext\uc640-consumer\uc758-\ucc28\uc774",level:4},{value:"useContext\uc5d0\uc11c \uc0ac\uc6a9 \ubb38\ubc95",id:"usecontext\uc5d0\uc11c-\uc0ac\uc6a9-\ubb38\ubc95",level:2}];function x(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"usecontext",children:"useContext"})}),"\n",(0,o.jsx)(e.h2,{id:"usecontext\ub780",children:"useContext\ub780?"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context API\uc5d0\uc11c Context.consumer\ub85c \uc804\ub2ec\ud558\ub358 \ubc29\uc2dd\uc744 Hooks\uc758 useContext\ub97c \uc0ac\uc6a9\ud574\uc11c \ub354 \ud3b8\ub9ac\ud558\uac8c \uac12\uc744 \uc804\ub2ec"}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsx)(e.h4,{id:"usecontext\uc640-consumer\uc758-\ucc28\uc774",children:"useContext\uc640 Consumer\uc758 \ucc28\uc774"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"useContext"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context\uc758 \uac12\uc744 \ub354 \uac04\ud3b8\ud558\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Consumer"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\ud568\uc218\ud615 Component \ubc0f \ud074\ub798\uc2a4 Component\ub0b4\uc5d0 \uc0ac\uc6a9\uc774 \uac00\ub2a5"}),"\n",(0,o.jsx)(e.li,{children:"Component \ub0b4\uc5d0\uc11c \ub80c\ub354\ub9c1\ud560 \ucf5c\ubc31\ud568\uc218\ub97c \uc815\uc758"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,o.jsx)(e.h2,{id:"usecontext\uc5d0\uc11c-\uc0ac\uc6a9-\ubb38\ubc95",children:"useContext\uc5d0\uc11c \uc0ac\uc6a9 \ubb38\ubc95"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"createContext"}),":\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context \uc0dd\uc131\ud558\ub294 \ud568\uc218 \ubc0f Context \uac1d\uccb4\ub97c \ubc18\ud658"}),"\n",(0,o.jsx)(e.li,{children:"Provider\uc640 Consumer\ub97c \uc0dd\uc131 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"useContext"}),":\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\ud568\uc218 Component \ub0b4\uc5d0\uc11c Context \uac12\uc744 \uc77d\uc5b4\uc624\ub294 React \ud6c5"}),"\n",(0,o.jsx)(e.li,{children:"Context\uac12\uc744 \uc5bb\uc5b4\uc640\uc11c \ud574\ub2f9 \uac12\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 \uc5c5\ub370\uc774\ud2b8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="useContext\ub85c \uad6c\ud604\ud55c \ucf54\ub4dc"',children:'import React, { createContext } from "react";\r\nimport { useContext } from "react";\r\n\r\nconst Info = createContext({ name: "JJamVa", greeting: "Hello World!" });\r\n\r\nconst Parent = () => {\r\n  return <Child1 />;\r\n};\r\n\r\nconst Child1 = () => {\r\n  const obj = useContext(Info);\r\n  return (\r\n    <div>\r\n      <h1>\uc548\ub155</h1>\r\n      <h2>{obj.name}</h2>\r\n      <Child2 />\r\n    </div>\r\n  );\r\n};\r\n\r\nconst Child2 = () => {\r\n  return (\r\n    <>\r\n      <Info.Provider value={{ id: 1, age: 20 }}>\r\n        <Info.Consumer>\r\n          {(value) => (\r\n            <div>\r\n              {value.id}\ubc88, \ub098\uc774\ub294 {value.age}\uc138\r\n            </div>\r\n          )}\r\n        </Info.Consumer>\r\n      </Info.Provider>\r\n      <Child3 />\r\n    </>\r\n  );\r\n};\r\n\r\nconst Child3 = () => {\r\n  const { name, greeting } = useContext(Info);\r\n  return (\r\n    <div>\r\n      {name}\ub2d8, {greeting}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Parent;\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/156e2869-f962-41b6-b5bf-94037056df9b",alt:"image"})}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"useContext"}),"\ub97c \uc774\uc6a9\ud558\uc5ec Child1, Child3\uc758 Component\uc5d0\uc11c Context\uac12\ub4e4\uc744 \ud638\ucd9c\ud558\uc600\ub2e4.",(0,o.jsx)(e.br,{}),"\r\nChild2\uc640 \uac19\uc740 \uacbd\uc6b0\ub294 ",(0,o.jsx)(e.strong,{children:"Context\uc758 \uac12\ub4e4\uc744 \ubcc0\uacbd \ud6c4, \ud654\uba74\uc5d0 \ucd9c\ub825"}),"\ud558\uc5ec\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0",(0,o.jsx)(e.br,{}),"\r\nuseContext\uc758 \uc0ac\uc6a9\ubcf4\ub2e4\ub294 ",(0,o.jsx)(e.code,{children:"Provider"}),"\uc640 ",(0,o.jsx)(e.code,{children:"Consumer"}),"\ub97c \ud1b5\ud574 Context\uc758 \uac12\ub4e4\uc744 \ud638\ucd9c\ud558\uc600\ub2e4."]})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(x,{...n})}):x(n)}},989:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(758);const o={},s=r.createContext(o);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);