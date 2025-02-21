"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[6957],{6184:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"frontend/JavaScript/function\uc885\ub958","title":"\ud568\uc218\uc758 \uc885\ub958","description":"\ud568\uc218 \uc120\uc5b8\ubb38","source":"@site/docs/frontend/4-JavaScript/12-function\uc885\ub958.md","sourceDirName":"frontend/4-JavaScript","slug":"/frontend/JavaScript/function\uc885\ub958","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/function\uc885\ub958","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"frontend","previous":{"title":"\ud568\uc218(Function)","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/function"},"next":{"title":"Array","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/Array"}}');var c=r(6070),a=r(989);const i={},l="\ud568\uc218\uc758 \uc885\ub958",s={},o=[{value:"\ud568\uc218 \uc120\uc5b8\ubb38",id:"\ud568\uc218-\uc120\uc5b8\ubb38",level:2},{value:"\ud568\uc218 \ud45c\ud604\uc2dd",id:"\ud568\uc218-\ud45c\ud604\uc2dd",level:2},{value:"\ucf5c\ubc31\ud568\uc218(CallBack)",id:"\ucf5c\ubc31\ud568\uc218callback",level:2},{value:"\ud654\uc0b4\ud45c \ud568\uc218(Allow Function)",id:"\ud654\uc0b4\ud45c-\ud568\uc218allow-function",level:2},{value:"\uc7ac\uadc0\ud568\uc218(Recursive Function)",id:"\uc7ac\uadc0\ud568\uc218recursive-function",level:2},{value:"\uc989\uc2dc \uc2e4\ud589 \ud568\uc218",id:"\uc989\uc2dc-\uc2e4\ud589-\ud568\uc218",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,a.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"\ud568\uc218\uc758-\uc885\ub958",children:"\ud568\uc218\uc758 \uc885\ub958"})}),"\n",(0,c.jsx)(e.h2,{id:"\ud568\uc218-\uc120\uc5b8\ubb38",children:"\ud568\uc218 \uc120\uc5b8\ubb38"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function sum(x, y) {\r\n  return x + y;\r\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\ud568\uc218-\ud45c\ud604\uc2dd",children:"\ud568\uc218 \ud45c\ud604\uc2dd"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"let sum = function (x, y) {\r\n  return x + y;\r\n};\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\ucf5c\ubc31\ud568\uc218callback",children:"\ucf5c\ubc31\ud568\uc218(CallBack)"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function add(x, y) {\r\n  return x + y;\r\n}\r\n\r\nfunction addAndMultiply(x, y, z) {\r\n  let sum = z(x, y) * z(x, y);\r\n  return sum;\r\n}\r\n\r\naddAndMultiply(1, 2, add);\r\n// \uac12\ubfd0\ub9cc\uc774 \uc544\ub2cc argument\uc5d0 \uc2e4\ud589\uc2dc\ud0ac \ud568\uc218\ub97c \uc785\ub825\ud574\ub3c4 \ub41c\ub2e4.\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\ud654\uc0b4\ud45c-\ud568\uc218allow-function",children:"\ud654\uc0b4\ud45c \ud568\uc218(Allow Function)"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"let sum = (x, y) => x + y; // \ud55c\uc904\ub85c \uc791\uc131\uac00\ub2a5. \uc911\uad04\ud638\uc640 return\uc740 \ud544\uc694\uc5c6\uc74c.\r\n\r\nlet sum = (x, y) => {\r\n  //\ub450\uc904 \uc774\uc0c1 \uc791\uc131 \uc2dc, \uc911\uad04\ud638\uc640 return\uc744 \uc791\uc131\r\n  return x + y;\r\n};\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\uc7ac\uadc0\ud568\uc218recursive-function",children:"\uc7ac\uadc0\ud568\uc218(Recursive Function)"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function factorial(n) {\r\n  if (n <= 1) return n;\r\n  // \uc7ac\uadc0\ud568\uc218 \uc791\uc131\uc2dc \uc870\uac74\ubb38\uc744 \ud1b5\ud558\uc5ec \uc885\ub8cc \uc9c0\uc810\uc744 \uaf2d \uc0dd\uc131\ud574\uc57c\ub41c\ub2e4.\r\n  return n * factorial(n - 1);\r\n  // \uc7ac\uadc0\ud568\uc218 \ud2b9\uc9d5\uc774 \uc790\uae30 \uc790\uc2e0\uc744 \uc7ac\ud638\ucd9c \ud558\ub294 \uac83\uc774\ub2e4.\r\n  // \uc7ac\uadc0\ud568\uc218\ub294 \ud53c\ubcf4\ub098\uce58 \uc218\uc5f4\uc774\ub098 \ud329\ud1a0\ub9ac\uc5bc\ubb38\uc81c \ud574\uacb0\uc5d0 \uc544\uc8fc \uc6a9\uc774\ud558\ub2e4.\r\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\uc989\uc2dc-\uc2e4\ud589-\ud568\uc218",children:"\uc989\uc2dc \uc2e4\ud589 \ud568\uc218"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"// \uc775\uba85 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218\r\n(function () {\r\n  let a = 1;\r\n  let b = 2;\r\n  return a + b;\r\n})();\r\n\r\n// \uae30\uba85 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218\r\n(function foo() {\r\n  let a = 3;\r\n  let b = 5;\r\n  return a * b;\r\n})();\n"})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},989:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var t=r(758);const c={},a=t.createContext(c);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);