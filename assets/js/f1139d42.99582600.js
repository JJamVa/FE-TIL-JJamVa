"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1849],{4119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"frontend/React/React\uc774\ubca4\ud2b8","title":"React \uc774\ubca4\ud2b8","description":"React \uc774\ubca4\ud2b8 \uc885\ub958","source":"@site/docs/frontend/9-React/7-React\uc774\ubca4\ud2b8.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/React\uc774\ubca4\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/React/React\uc774\ubca4\ud2b8","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"frontend","previous":{"title":"useState","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useState"},"next":{"title":"Component List","permalink":"/FE-TIL-JJamVa/docs/frontend/React/\ucef4\ud3ec\ub10c\ud2b8\ub9ac\uc2a4\ud2b8"}}');var s=t(6070),o=t(989);const c={},i="React \uc774\ubca4\ud2b8",a={},l=[{value:"React \uc774\ubca4\ud2b8 \uc885\ub958",id:"react-\uc774\ubca4\ud2b8-\uc885\ub958",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"react-\uc774\ubca4\ud2b8",children:"React \uc774\ubca4\ud2b8"})}),"\n",(0,s.jsx)(n.h2,{id:"react-\uc774\ubca4\ud2b8-\uc885\ub958",children:"React \uc774\ubca4\ud2b8 \uc885\ub958"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onClick"})," : \ud574\ub2f9 \uc694\uc18c\ub97c \ud074\ub9ad\ud558\uc600\uc744 \ub54c, \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onChange"})," : \uc785\ub825 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c, \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onInput"})," : \uc785\ub825\ud544\ub4dc(input, textarea)\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud560 \ub54c, \uc774\ubca4\ud2b8 \ubc1c\uc0dd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onFocus"})," : \uc785\ub825 \uc591\uc2dd \uc694\uc18c \ubc0f \ud574\ub2f9 \uc694\uc18c\uac00 \ud3ec\ucee4\uc2a4\uac00 \ub420 \ub54c, \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onMouseEnter"})," : \ub9c8\uc6b0\uc2a4\uac00 \uc694\uc18c \uc704\uc5d0 \uc788\uc744 \ub54c, \uc774\ubca4\ud2b8 \ubc1c\uc0dd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onMouseLeave"})," : \ub9c8\uc6b0\uc2a4\uac00 \uc694\uc18c \uc601\uc5ed\ubc16\uc73c\ub85c \ubc97\uc5b4\ub0a0 \ub54c, \uc774\ubca4\ud2b8 \ubc1c\uc0dd"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\n\r\nfunction App() {\r\n  const [text, setText] = useState("\ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\uc8fc\uc138\uc694!");\r\n  const MouseOn = () => {\r\n    setText("Hello World");\r\n  };\r\n\r\n  const MouseOff = () => {\r\n    setText("Bye World");\r\n  };\r\n\r\n  const MouseClick = () => {\r\n    setText("Click World");\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <p onMouseEnter={MouseOn} onMouseLeave={MouseOff} onClick={MouseClick}>\r\n        {text}\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\ub9c8\uc6b0\uc2a4 \ub3d9\uc791\uc5d0 \ub300\ud55c \uc774\ubca4\ud2b8\ub97c \uad6c\ud604\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nMouseOn, MouseOff, MouseClick\uc744 \uac01\uac01 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub9c1\uc744 \uad6c\ud604\ud558\uc5ec \ub123\uc5b4\uc8fc\uc5c8\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\n\r\nfunction App() {\r\n  const [text, setText] = useState("\ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub824\uc8fc\uc138\uc694!");\r\n  return (\r\n    <div>\r\n      <p\r\n        onMouseEnter={() => setText("Hello World")}\r\n        onMouseLeave={() => setText("Bye World")}\r\n        onClick={() => setText("Click World")}\r\n      >\r\n        {text}\r\n      </p>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n'})}),(0,s.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc774 React \uc774\ubca4\ud2b8\uc5d0 \uc9c1\uc811 \ucf5c\ubc31 \ud568\uc218\ub85c \uad6c\ud604\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsxs)(n.p,{children:["\ud568\uc218\ub97c \uc0dd\uc131\ud558\uc5ec \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \uc0ac\uc6a9\ud558\uc600\uc744 \ub54c, \ucf54\ub4dc \ud574\uc11d\uc774 \uc26c\uc6b0\uba70 \uc7ac\uc0ac\uc6a9\uc774 \uc88b\uc544\uc9c4\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc774\ubca4\ud2b8 \uc548 \ucf5c\ubc31 \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\uc744 \ud558\uc600\uc744 \ub54c, \ucf54\ub4dc\ub294 \uac04\uacb0\ud574\uc9c0\uc9c0\ub9cc \uc7ac\uc0ac\uc6a9\uc131\uc774 \ub5a8\uc5b4\uc9c4\ub2e4.",(0,s.jsx)(n.br,{})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},989:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(758);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);