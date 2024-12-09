"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1068],{9782:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"frontend/React/React\ud504\ub85c\uc81d\ud2b8","title":"React \ud504\ub85c\uc81d\ud2b8","description":"React\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131","source":"@site/docs/frontend/9-React/2-React\ud504\ub85c\uc81d\ud2b8.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/React\ud504\ub85c\uc81d\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/React/React\ud504\ub85c\uc81d\ud2b8","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"frontend","previous":{"title":"React","permalink":"/FE-TIL-JJamVa/docs/frontend/React/React"},"next":{"title":"JSX","permalink":"/FE-TIL-JJamVa/docs/frontend/React/JSX"}}');var c=r(6070),s=r(989);const i={},d="React \ud504\ub85c\uc81d\ud2b8",o={},l=[{value:"React\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"react\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"React import",id:"react-import",level:2},{value:"React \uc2dc\uc791",id:"react-\uc2dc\uc791",level:2},{value:"App.js",id:"appjs",level:3},{value:"App.css",id:"appcss",level:3},{value:"index.js",id:"indexjs",level:3}];function a(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"react-\ud504\ub85c\uc81d\ud2b8",children:"React \ud504\ub85c\uc81d\ud2b8"})}),"\n",(0,c.jsx)(n.h2,{id:"react\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:"React\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"Node.js \uc124\uce58(Node.js\uc124\uce58 \uc2dc, npm\ub3c4 \uc790\ub3d9\uc73c\ub85c \uc124\uce58)"}),"\n",(0,c.jsxs)(n.li,{children:["\ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uacbd\ub85c\uc5d0\uc11c \ud130\ubbf8\ub110\uc5d0 ",(0,c.jsx)(n.code,{children:"npx create-react-app \uc774\ub984"})," \uc785\ub825"]}),"\n",(0,c.jsxs)(n.li,{children:["React\ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131 \ud6c4, \ud130\ubbf8\ub110\uc5d0 ",(0,c.jsx)(n.code,{children:"npm start"})," \uc785\ub825\ud558\uc5ec \uc2e4\ud589"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"npx create-react-app \uc774\ub984 --template basic-react"}),(0,c.jsx)(n.br,{}),"\r\n\ubd88\ud544\uc694\ud55c \uc694\uc18c\uc758 \ud3f4\ub354 \ubc0f \ud30c\uc77c \uc5c6\uc774 \uc0dd\uc131"]})}),"\n",(0,c.jsx)(n.h2,{id:"react-import",children:"React import"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Component\ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c import\ub97c \ud560 \uacbd\uc6b0, ",(0,c.jsx)(n.code,{children:"import \uc774\ub984 from \uacbd\ub85c \ud639\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uba85"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"{}\ub97c \uc774\uc6a9\ud558\uc5ec \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac \ubaa8\ub4c8\ub4e4\uc744 \uac00\uc838\uc62c \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["CSS\ud30c\uc77c\uc744 import\ub97c \ud560 \uacbd\uc6b0, ",(0,c.jsx)(n.code,{children:"import \uacbd\ub85c/CSS\ud30c\uc77c\uba85.css"})]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:["import \ub2e4\uc74c\uc5d0 \ub4e4\uc5b4\uac08 \ud30c\uc77c\uba85\uc740 ",(0,c.jsx)(n.strong,{children:"\ub300\ubb38\uc790\ub85c \uc2dc\uc791"}),"\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.",(0,c.jsx)(n.br,{}),"\r\nReact\uac00 Component\ub97c \uad6c\ubd84\ud558\uace0 HTML\uc694\uc18c\uc640 \uad6c\ubd84\ud558\uae30 \uc704\ud574\uc11c\uc774\ub2e4."]})}),"\n",(0,c.jsx)(n.h2,{id:"react-\uc2dc\uc791",children:"React \uc2dc\uc791"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["React \ud504\ub85c\uc81d\ud2b8\ub97c \ub2e4\uc6b4 \ubc1b\uc740 \ud6c4, src\ud3f4\ub354\uc5d0 ",(0,c.jsx)(n.code,{children:"App.css"}),", ",(0,c.jsx)(n.code,{children:"App.js"}),", ",(0,c.jsx)(n.code,{children:"index.js"})," \ud30c\uc77c\uc774 \uc788\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"appjs",children:"App.js"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["React \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"npm start"})," \ud6c4, \ucc98\uc74c\uc73c\ub85c \ubcf4\uc5ec\uc9c0\ub294 \ud654\uba74"]}),"\n",(0,c.jsx)(n.li,{children:"\ud654\uba74\uc744 \ud45c\ud604\ud558\ub294 \ud30c\uc77c"}),"\n",(0,c.jsx)(n.li,{children:"App.js\ub85c \uaf2d \uc2dc\uc791\ud560 \ud544\uc694\ub294 \uc5c6\ub2e4."}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\r\n\r\nfunction App() {\r\n  // JavaScript \ucf54\ub4dc \ubc0f \ucef4\ud3ec\ub10c\ud2b8 \uc791\uc131\r\n  return {\r\n    /* \ud654\uba74\uc744 \ud45c\ud604\ud560 \ucf54\ub4dc*/\r\n  };\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"import React from 'react'"}),"\ub294 react\uc5d0\uc11c React\ub77c\ub294 ",(0,c.jsx)(n.code,{children:"\ubaa8\ub4c8\uc744 \uac00\uc838\uc640 \uc0ac\uc6a9\ud55c\ub2e4"}),"\ub294 \uc758\ubbf8",(0,c.jsx)(n.br,{}),"\r\nfunction App\uacfc return \uc0ac\uc774\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"Component \ubc0f JavaScript\ub85c \uae30\ub2a5 \uad6c\ud604"}),(0,c.jsx)(n.br,{}),"\r\nreturn\uc740 ",(0,c.jsx)(n.code,{children:"\uc5b4\ub5bb\uac8c \ud654\uba74\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ud45c\ud604\ud560\uc9c0 Component \ubc0f HTML \ud0dc\uadf8\ub97c \uc791\uc131"}),(0,c.jsx)(n.br,{}),"\r\nexport default App\ub294 ",(0,c.jsx)(n.code,{children:"App\ud568\uc218 \ubaa8\ub4c8\uc744 \ub0b4\ubcf4\ub0bc \ub54c \uc0ac\uc6a9"})]})}),"\n",(0,c.jsxs)(n.admonition,{type:"caution",children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"export default\uc640 export\uc758 \ucc28\uc774\uc810"})}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"export default"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\ud55c \ubaa8\ub4c8\uc548\uc5d0\uc11c \ud558\ub098\uc758 ",(0,c.jsx)(n.code,{children:"export default"}),"\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"]}),"\n",(0,c.jsx)(n.li,{children:"\ub0b4\ubcf4\ub0bc \uac12(\ud568\uc218, \ud074\ub798\uc2a4 \ub4f1)\uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\uc774 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"export"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\uc5ec\ub7ec\uac1c\uc758 ",(0,c.jsx)(n.code,{children:"export"}),"\ub97c \uc0ac\uc6a9 \uac00\ub2a5"]}),"\n",(0,c.jsxs)(n.li,{children:["import\ub97c \ud1b5\ud574 \uac00\uc838\uc62c \ub54c, ",(0,c.jsx)(n.code,{children:"{}"}),"\ub97c \ud1b5\ud574 \uc120\ud0dd\uc801\uc73c\ub85c \uac00\uc838\uc62c \uc218 \uc788\ub2e4."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,c.jsx)(n.h3,{id:"appcss",children:"App.css"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \uc0dd\uc131\ub418\ub294 CSS\ud30c\uc77c"}),"\n",(0,c.jsx)(n.li,{children:"CSS\ud30c\uc77c\uc744 \uc0ac\uc6a9\uc2dc, \ud574\ub2f9 js\ud30c\uc77c\uc5d0 import"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"indexjs",children:"index.js"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\ud574\ub2f9 Component \ucd08\uae30\ud654\ud558\uc5ec \ud654\uba74\uc5d0 \ud45c\ud604"}),"\n",(0,c.jsx)(n.li,{children:"React \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2dc\uc791\uc810"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\r\nimport ReactDOM from "react-dom/client";\r\nimport App from "./App";\r\n\r\nconst root = ReactDOM.createRoot(document.getElementById("root"));\r\nroot.render(\r\n  <React.StrictMode>\r\n    <App />\r\n  </React.StrictMode>\r\n);\n'})}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'const root = ReactDOM.createRoot(document.getElementById("root"))\n'})}),(0,c.jsxs)(n.p,{children:["root\ub77c\ub294 id\ub97c \ud638\ucd9c\ud558\uc9c0\ub9cc index.js\ud30c\uc77c\uc5d0\ub294 root\ub77c\ub294 id\uc778 \uc694\uc18c\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,c.jsx)(n.br,{}),"\r\npublic\uc758 index.html\uc5d0 ",(0,c.jsx)(n.code,{children:'<div id="root">'}),"\uac00 \uc874\uc7ac\ud55c\ub2e4.",(0,c.jsx)(n.br,{}),"\r\nindex.html\uc758 id\uac00 root\uc778 \uc601\uc5ed\uc5d0 React\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub80c\ub354\ub9c1 \ud55c\ub2e4.",(0,c.jsx)(n.br,{}),"\r\npublic \ud3f4\ub354\uc758 \ud30c\uc77c\uc740 \uc815\uc801 \ud30c\uc77c\ub85c \ucde8\uae09\ub418\uae30 \ub54c\ubb38\uc5d0 \ub530\ub85c import\ub97c \ud574\uc11c \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4."]}),(0,c.jsxs)(n.p,{children:["React.StrictMode\ub294 React Component\ub97c \uc5c4\uaca9\ubaa8\ub4dc\ub85c \uc2e4\ud589\ud55c\ub2e4\ub294 \uc758\ubbf8",(0,c.jsx)(n.br,{}),"\r\n\ucd08\uae30\ud654\uba74\uc5d0 \ub4f1\ub85d\ud560 \uacbd\uc6b0, \ud45c\ud604\ud558\uace0\uc790 \ud558\ub294 js\ud30c\uc77c\uc744 import\ub97c \ud55c \ud6c4,",(0,c.jsx)(n.br,{}),"\r\nrender()\uc548\uc5d0 \ud574\ub2f9 Component\ub97c \uc791\uc131\ud558\uba74 \ub41c\ub2e4."]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},989:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(758);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);