"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4559],{978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"frontend/Typescript/literalType","title":"Literal Type\uacfc as const","description":"Literal Type\uc774\ub780?","source":"@site/docs/frontend/9-Typescript/6-literalType.md","sourceDirName":"frontend/9-Typescript","slug":"/frontend/Typescript/literalType","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/literalType","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"frontend","previous":{"title":"type alias\uc640 readonly","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/Type\uacfcreadonly"},"next":{"title":"\ud568\uc218(function)\uc640 \uba54\uc18c\ub4dc(methods)\uc758 type alias","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\ud568\uc218\uc640\uba54\uc18c\ub4dc\uc758\ud0c0\uc785"}}');var t=r(6070),l=r(989);const a={},i="Literal Type\uacfc as const",c={},o=[{value:"Literal Type\uc774\ub780?",id:"literal-type\uc774\ub780",level:2},{value:"Literal Type + \uc720\ub2c8\uc628(|)",id:"literal-type--\uc720\ub2c8\uc628",level:2},{value:"as const",id:"as-const",level:2},{value:"as const\ub780?",id:"as-const\ub780",level:3},{value:"\uac1d\uccb4 property + as const",id:"\uac1d\uccb4-property--as-const",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"literal-type\uacfc-as-const",children:"Literal Type\uacfc as const"})}),"\n",(0,t.jsx)(n.h2,{id:"literal-type\uc774\ub780",children:"Literal Type\uc774\ub780?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud2b9\uc815 \uac12\ub4e4\uc758 \uc9d1\ud569\uc744 \ud0c0\uc785\uc73c\ub85c \uc815\uc758"}),"\n",(0,t.jsx)(n.li,{children:"\uac12 \uc790\uccb4\ub97c \ud0c0\uc785\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ud2b9\uc9d5"}),"\n",(0,t.jsx)(n.li,{children:"\ud2b9\uc815 \uae00\uc790\ub098 \uc22b\uc790\ub9cc \uac00\uc9c8 \uc218 \uc788\uac8c \uc81c\ud55c\uc744 \ub450\ub294 \ud0c0\uc785"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let value1: 1 = 1; // \uac00\ub2a5\r\nlet value2: "2" = 2; // \ubd88\uac00\ub2a5\r\nlet value3: "undefined" = undefined; //\ubd88\uac00\ub2a5\n'})}),"\n",(0,t.jsx)(n.h2,{id:"literal-type--\uc720\ub2c8\uc628",children:"Literal Type + \uc720\ub2c8\uc628(|)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"|"})," \uc5f0\uc0b0\uc790\ub97c \ud1b5\ud574 Literal Type\uc758 \uc9c0\uc815\ud574\ub454 \ud2b9\uc815\uac12\uc758 \ud0c0\uc785\ub9cc \ubcc0\uc218\ub85c \uc9c0\uc815"]}),"\n",(0,t.jsxs)(n.li,{children:["\ubcc0\uc218 \uc774\uc678 \ud568\uc218\uc758 ",(0,t.jsx)(n.strong,{children:"parameter \uac12"})," \ub610\ub294 ",(0,t.jsx)(n.strong,{children:"return \uac12"})," \uc9c0\uc815\ub3c4 \uac00\ub2a5"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Literal Type \ubcc0\uc218"',children:'type T = 1 | 2 | 3 | 4;\r\n\r\nlet value1: T = 3; // \uac00\ub2a5\r\nlet value2: T = "4"; // \ubd88\uac00\ub2a5\r\n\r\nlet body: "hand" | "foot";\r\nbody = "hand"; // \uac00\ub2a5\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Literal Type \ud568\uc218"',children:'function calc(x: "\ub354\ud558\uae30" | "\ube7c\uae30"): 2 | 0 | "\uc798\ubabb\ub41c \uac12\uc744 \uc785\ub825" {\r\n  if (x === "\ub354\ud558\uae30") return 2;\r\n  else if (x === "\ube7c\uae30") return 0;\r\n  else return "\uc798\ubabb\ub41c \uac12\uc744 \uc785\ub825";\r\n}\r\n\r\ncalc("\ub354\ud558\uae30"); // 2\r\ncalc("\ube7c\uae30"); // 0\r\ncalc("\uc548\ub155"); // \uc5d0\ub7ec\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\ubcc0\uc218\uc758 \uc9c0\uc815\ub41c \ud0c0\uc785 \uac12 \uc774\uc678\uc5d0 \uac12\uc744 \ud560\ub2f9 \ubd88\uac00\ub2a5"})}),"\n",(0,t.jsx)(n.h2,{id:"as-const",children:"as const"}),"\n",(0,t.jsx)(n.h3,{id:"as-const\ub780",children:"as const\ub780?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Type Assertion"})," + ",(0,t.jsx)(n.code,{children:"const"})]}),"\n",(0,t.jsx)(n.li,{children:"\ubcc0\uc218\uac00 \uac00\uc9c8 \uc218 \uc788\ub294 \uac12\uc758 \ubc94\uc704\ub97c \ud655\uc2e4\ud558\uac8c \uc9c0\uc815"}),"\n",(0,t.jsx)(n.li,{children:"\uac1d\uccb4 property\uc5d0 \uc0ac\uc6a9\ud558\uba74 Literal Type\uc73c\ub85c \uace0\uc815"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const number1 = 5;\r\nconst string1 = "hello";\n'})}),(0,t.jsxs)(n.p,{children:["number1\uacfc string1\uc758 \ubcc0\uc218 \ud0c0\uc785\uc740 \uac01\uac01 ",(0,t.jsx)(n.code,{children:"number"}),"\uacfc ",(0,t.jsx)(n.code,{children:"string"}),"\uc774\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const number1 = 5 as const;\r\nconst string1 = "hello" as const;\n'})}),(0,t.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc774 ",(0,t.jsx)(n.code,{children:"as const"}),"\ub97c \ubd99\uc784\uc73c\ub85c\uc11c \ubcc0\uc218\ud0c0\uc785\uc774 ",(0,t.jsx)(n.code,{children:"number"}),"\uacfc ",(0,t.jsx)(n.code,{children:"string"}),"\uc774 \uc544\ub2cc",(0,t.jsx)(n.br,{}),"\r\n",(0,t.jsx)(n.code,{children:"5"}),"\uc640 ",(0,t.jsx)(n.code,{children:'"hello"'}),"\ub85c \ud0c0\uc785\uc744 \uace0\uc815\uc2dc\ud0a8\ub2e4.",(0,t.jsx)(n.br,{})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\uac1d\uccb4-property--as-const",children:"\uac1d\uccb4 property + as const"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uac1d\uccb4 \uc18d\uc131\uc758 \ud0c0\uc785\uc744 \ub354 \uc138\ubc00\ud558\uac8c \uace0\uc815\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let value = {\r\n  name: "JJamVa",\r\n};\r\n\r\nfunction greeting(x: "JJamVa"): void {\r\n  console.log(x + "\ub2d8 \uc548\ub155\ud558\uc138\uc694!");\r\n}\r\n\r\ngreeting(value.name);\n'})}),(0,t.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\uc5d0\uc11c greeting\ud568\uc218\ub97c \uc2e4\ud589\ud560 \ub54c, value\uc758 name\uc18d\uc131\uc744 argument\uac12\uc73c\ub85c \ub123\uc5c8\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ud558\uc9c0\ub9cc value.name\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsxs)(n.p,{children:["\uc774\uc720\ub294 value.name\uc740 value\uc548 name\uc18d\uc131\uc758 \uac12\uc744 \ud638\ucd9c\ud55c \uac83\uc774\uba70,",(0,t.jsx)(n.br,{}),"\r\ngreeting\ud568\uc218\uc548 x\uc758 parameter\ub294 ",(0,t.jsx)(n.code,{children:'"JJamVa"'}),"\ub77c\ub294 \ud0c0\uc785 \uc18d\uc131\uc744 \uba85\uc2dc\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let value = {\r\n  name: "JJamVa",\r\n} as const;\r\n\r\nfunction greeting(x: "JJamVa"): void {\r\n  console.log(x + "\ub2d8 \uc548\ub155\ud558\uc138\uc694!");\r\n}\r\n\r\ngreeting(value.name);\n'})}),(0,t.jsxs)(n.p,{children:["\uc774\ub97c \ud574\uacb0\ud558\uace0\uc790 value\uc5d0 ",(0,t.jsx)(n.code,{children:"as const"}),"\ub97c \uc774\uc6a9\ud558\uc5ec value\uc758 name \uc18d\uc131\uc744 ",(0,t.jsx)(n.code,{children:'"JJamVa"'}),"\ub85c Literal Type \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc774 \uc788\ub2e4.",(0,t.jsx)(n.br,{}),"\r\nvalue\uc758 name\uc18d\uc131\uc758 \ud0c0\uc785\uacfc greeting\uc758 x\ud0c0\uc785\uc774 \uc77c\uce58\ud558\uc5ec \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,t.jsx)(n.br,{})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"as const\uc640 readonly"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// as const\r\nlet value = {\r\n  name: "JJamVa",\r\n  age: 27,\r\n} as const;\r\n\r\n// readonly\r\ntype T = {\r\n  readonly name?: string;\r\n  readonly age: number;\r\n};\r\n\r\nlet value: T = {\r\n  name: "JJamVa",\r\n  age: 27,\r\n};\n'})}),(0,t.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 \uacb0\uacfc\ub860\uc801\uc73c\ub85c \ub611\uac19\uc740 \uc758\ubbf8\ub97c \uac00\uc9c4 \ucf54\ub4dc\uc774\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\uc989, \uac1d\uccb4\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"as const"}),"\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 \ubaa8\ub4e0 \uac1d\uccb4\uc758 \uc18d\uc131\uc774 ",(0,t.jsx)(n.strong,{children:"readonly"}),"\uc0c1\ud0dc\ub85c \ubcc0\ud55c\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ud558\uc9c0\ub9cc ",(0,t.jsx)(n.code,{children:"as const"}),"\uac00 Literal Type \uc18d\uc131\uc744 \uace0\uc815\ud558\ub294 \ucd94\uac00\uc801\uc778 \ud6a8\uacfc\uac00 \uc788\ub2e4.",(0,t.jsx)(n.br,{})]})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},989:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(758);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);