"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8324],{1946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"frontend/Typescript/\ud0c0\uc785import,export","title":"Type import\uc640 export, namespace","description":"Type import\uc640 export","source":"@site/docs/frontend/9-Typescript/14-\ud0c0\uc785import,export.md","sourceDirName":"frontend/9-Typescript","slug":"/frontend/Typescript/\ud0c0\uc785import,export","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\ud0c0\uc785import,export","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{},"sidebar":"frontend","previous":{"title":"\uac1d\uccb4 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d \ud074\ub798\uc2a4\uc758 \uba64\ubc84","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\uac1d\uccb4\uc9c0\ud5a5"},"next":{"title":"Generic","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/generic"}}');var s=r(6070),p=r(989);const i={},o="Type import\uc640 export, namespace",a={},c=[{value:"Type import\uc640 export",id:"type-import\uc640-export",level:2},{value:"export, import \ucf54\ub4dc",id:"export-import-\ucf54\ub4dc",level:3},{value:"namespace",id:"namespace",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,p.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"type-import\uc640-export-namespace",children:"Type import\uc640 export, namespace"})}),"\n",(0,s.jsx)(t.h2,{id:"type-import\uc640-export",children:"Type import\uc640 export"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"import"}),"\uc640 ",(0,s.jsx)(t.code,{children:"export"}),"\ub294 \ubcc0\uc218, \ud568\uc218, \ud074\ub798\uc2a4 \ub4f1 \uac00\ub2a5\ud558\ub098 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c type\ub3c4 \uac00\ub2a5"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../9-React/2-React%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md",children:"React import\uc640 export\uad00\ub828 \ub0b4\uc6a9"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"export-import-\ucf54\ub4dc",children:"export, import \ucf54\ub4dc"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app1.ts"',children:"export type Name? = string\r\nexport type Age = (x:number) => string;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app2.ts"',children:'import { Name, Age } from "./app1.ts";\r\n\r\nlet myName: Name = "JJamVa";\r\nlet myAge: Age = (x) => x.toString() + "\uc0b4";\r\n\r\nconsole.log(myName, myAge); // JJamVa 27\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 type\uc744 export, import\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,s.jsx)(t.br,{}),"\r\n\uae30\uc874\uc758 export,import \ubc29\uc2dd\uacfc \ub3d9\uc77c\ud558\uac8c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(t.br,{})]})}),"\n",(0,s.jsx)(t.h2,{id:"namespace",children:"namespace"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ucf54\ub4dc\ub97c \uad6c\uc870\ud654\ud558\uace0 \ubaa8\ub4c8\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uae30\ub2a5"}),"\n",(0,s.jsx)(t.li,{children:"\uc804\uc5ed \uc2a4\ucf54\ud504\uc5d0\uc11c \ucda9\ub3cc\uc744 \ubc29\uc9c0\ud558\uace0 \ucf54\ub4dc\ub97c \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app1.ts"',children:"namespace Space {\r\n  export type Name = string;\r\n  export type Age = (x: number) => string;\r\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app2.ts"',children:'/// <reference path=\'./app1.ts>/>\r\n// app1.js\uc5d0 \uc788\ub294 \uc815\ubcf4\ub97c import\r\n\r\nlet myName: Space.Name = "JJamVa";\r\nlet myAge: Space.Age = (x) => x.toString() + "\uc0b4";\r\n\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["\uc704\uc640 \uac19\uc774 namespace\ub97c \uc774\uc6a9\ud558\uba74 \uac1d\uccb4 \ud615\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc811\uadfc\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,s.jsx)(t.strong,{children:"\ubcc0\uc218\uba85 \uc911\ubcf5 \uc120\uc5b8\uc5d0 \uc788\uc5b4\uc11c \uc720\uc6a9"}),"\ud558\ub2e4.",(0,s.jsx)(t.br,{}),"\r\n\ucd5c\uadfc\uc5d0 namespace\ubcf4\ub2e4 ",(0,s.jsx)(t.code,{children:"import * as \ubcc0\uc218\uba85 from \uacbd\ub85c"}),"\ub97c \ub354 \ub9ce\uc774 \uc0ac\uc6a9\ud55c\ub2e4.",(0,s.jsx)(t.br,{})]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app1.ts"',children:"export type Name = string;\r\nexport type Age = (x: number) => string;\n"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="app2.ts"',children:'import * as T from "./app1.ts";\r\n\r\nlet myName: T.Name = "JJamVa";\r\nlet myAge: T.Age = (x) => x.toString() + "\uc0b4";\n'})}),(0,s.jsxs)(t.p,{children:["app1\ubaa8\ub4c8\uc5d0\uc11c \ub0b4\ubcf4\ub0b8 \ubaa8\ub4e0 \uac83\uc744 T\ub77c\ub294 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ub354 \uac04\uacb0\ud558\uac8c \uac00\uc838\uc62c \uc218 \uc788\ub2e4.",(0,s.jsx)(t.br,{})]})]})]})}function m(e={}){const{wrapper:t}={...(0,p.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},989:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(758);const s={},p=n.createContext(s);function i(e){const t=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(p.Provider,{value:t},e.children)}}}]);