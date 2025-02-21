"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1542],{1928:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>p});const l=JSON.parse('{"id":"frontend/Typescript/tupletype","title":"tuple type","description":"tuple type\uc774\ub780?","source":"@site/docs/frontend/10-Typescript/18-tupletype.md","sourceDirName":"frontend/10-Typescript","slug":"/frontend/Typescript/tupletype","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/tupletype","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{},"sidebar":"frontend","previous":{"title":"TypeScript + React","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8"},"next":{"title":".d.ts","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/d.ts"}}');var t=r(6070),s=r(989);const i={},d="tuple type",c={},p=[{value:"tuple type\uc774\ub780?",id:"tuple-type\uc774\ub780",level:2},{value:"tuple type \uc778\ub371\uc2a4 \uc811\uadfc",id:"tuple-type-\uc778\ub371\uc2a4-\uc811\uadfc",level:2},{value:"tuple\uc758 \uc635\uc158",id:"tuple\uc758-\uc635\uc158",level:2},{value:"rest parameter\uc640 \ud29c\ud50c",id:"rest-parameter\uc640-\ud29c\ud50c",level:2},{value:"spread \uc5f0\uc0b0\uc790\uc640 tuple",id:"spread-\uc5f0\uc0b0\uc790\uc640-tuple",level:2}];function u(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tuple-type",children:"tuple type"})}),"\n",(0,t.jsx)(n.h2,{id:"tuple-type\uc774\ub780",children:"tuple type\uc774\ub780?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ubc30\uc5f4\uc758 \uac01 \uc694\uc18c\uc5d0 \ud0c0\uc785\uc774 \ubbf8\ub9ac \uc815\ud574\uc9c4 \ubc30\uc5f4"}),"\n",(0,t.jsx)(n.li,{children:"\uace0\uc815\ub41c \ud06c\uae30\ub97c \uac00\uc9c0\uba70 \uac01 \uc694\uc18c\uc758 \ud0c0\uc785\uc774 \uc11c\ub85c \ub2e4\ub974\uac8c \uc9c0\uc815 \uac00\ub2a5"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let tuple: [number, string, null | undefined] = [1, "JJamVa", null];\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:":\ud0c0\uc785[]"}),"\uacfc ",(0,t.jsx)(n.code,{children:":[\ud0c0\uc785]"}),"\uc758 \ucc28\uc774\uc810"]})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:":\ud0c0\uc785[]"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud574\ub2f9 \uc791\uc131 \ud0c0\uc785\uc73c\ub85c\ub9cc \uc774\ub8e8\uc6cc\uc9c4 \ubc30\uc5f4"}),"\n",(0,t.jsx)(n.li,{children:"\ud0c0\uc785\ub9cc \ub9de\ub2e4\uba74 \ubc30\uc5f4\uc758 \uae38\uc774\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uac12 \uc0bd\uc785 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:":[\ud0c0\uc785]"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud29c\ud50c\uc740 \uace0\uc815\ub41c \uae38\uc774\uc758 \ubc30\uc5f4\uc774\uc9c0\ub9cc, \uac01 \uc694\uc18c\uac00 \uc11c\ub85c \ub2e4\ub978 \ud0c0\uc785\uc774 \uc874\uc7ac \uac00\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:"\ud29c\ud50c \uc0dd\uc131\uc2dc, \uae38\uc774\uc5d0 \ub300\ud55c \uc81c\uc57d"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"tuple-type-\uc778\ub371\uc2a4-\uc811\uadfc",children:"tuple type \uc778\ub371\uc2a4 \uc811\uadfc"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let tuple: [number, string, null | undefined] = [1, "JJamVa", null];\r\n\r\nlet value1: number = tuple[0];\r\nlet value2: string = tuple[1];\r\nlet value3: null | undefined = tuple[2];\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 \ubc30\uc5f4(\ud29c\ud50c)\uc758 \uc694\uc18c \uc811\uadfc \uc2dc, \ud574\ub2f9 \uc778\ub371\uc2a4\uc758 \ud0c0\uc785\uacfc \uc0dd\uc131\ud560 \ubcc0\uc218\uc758 \ud0c0\uc785\uc744 \uaf2d \uc77c\uce58\uc2dc\ucf1c\uc57c \ub41c\ub2e4.",(0,t.jsx)(n.br,{})]})}),"\n",(0,t.jsx)(n.h2,{id:"tuple\uc758-\uc635\uc158",children:"tuple\uc758 \uc635\uc158"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud29c\ud50c\uc744 \uc0dd\uc131 \uc2dc, type alias\ub97c \ud1b5\ud574 \ud574\ub2f9 \uc694\uc18c\uc758 \ud0c0\uc785\uc744 \uc9c0\uc815"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"?(undefined)"}),"\uc640 \uac19\uc740 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc120\ud0dd\uc801\uc73c\ub85c \uc694\uc18c \uc0dd\uc131 \uac00\ub2a5"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Num = [number, number?, number?];\r\n\r\nlet arr1: Num = [1];\r\nlet arr2: Num = [1, 2];\r\nlet arr3: Num = [1, 2, 3];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rest-parameter\uc640-\ud29c\ud50c",children:"rest parameter\uc640 \ud29c\ud50c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function func(...x: [string, string, number]): void {\r\n  x.map((e, i) => {\r\n    console.log(`${i + 1}\ubc88\uc9f8 \uac12\uc740 ${e}\uc785\ub2c8\ub2e4.`);\r\n  });\r\n}\r\n\r\nfunc("hello", "world", 15);\r\n// 1\ubc88\uc9f8 \uac12\uc740 hello\uc785\ub2c8\ub2e4.\r\n// 2\ubc88\uc9f8 \uac12\uc740 world\uc785\ub2c8\ub2e4.\r\n// 3\ubc88\uc9f8 \uac12\uc740 15\uc785\ub2c8\ub2e4.\r\n\r\nfunc("hello", "world", 1, "JJamVa"); //\uc5d0\ub7ec \ubc1c\uc0dd\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 rest parameter\uc740 \uc5ec\ub7ec\uac1c\uc758 \uc778\uc790 \uac12\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ud558\uc9c0\ub9cc \uc5ec\ub7ec\uac1c \uc778\uc790 \uac12\uc744 \ubc1b\ub294 tuple\uc77c \uacbd\uc6b0 \uaf2d ",(0,t.jsx)(n.strong,{children:"\ud29c\ud50c\uc758 \uc778\uc790 \uac1c\uc218\ub9cc\ud07c \ud0c0\uc785 \uc120\uc5b8"}),"\uc744 \ud574\uc57c\ub41c\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ud639\uc740 tuple \uc635\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(n.br,{})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function func(...x: [string, string, number, string?]): void {\r\n  x.map((e, i) => {\r\n    console.log(`${i + 1}\ubc88\uc9f8 \uac12\uc740 ${e}\uc785\ub2c8\ub2e4.`);\r\n  });\r\n}\r\n\r\nfunc("hello", "world", 15);\r\n// 1\ubc88\uc9f8 \uac12\uc740 hello\uc785\ub2c8\ub2e4.\r\n// 2\ubc88\uc9f8 \uac12\uc740 world\uc785\ub2c8\ub2e4.\r\n// 3\ubc88\uc9f8 \uac12\uc740 15\uc785\ub2c8\ub2e4.\r\n\r\nfunc("hello", "world", 1, "JJamVa");\r\n// 1\ubc88\uc9f8 \uac12\uc740 hello\uc785\ub2c8\ub2e4.\r\n// 2\ubc88\uc9f8 \uac12\uc740 world\uc785\ub2c8\ub2e4.\r\n// 3\ubc88\uc9f8 \uac12\uc740 15\uc785\ub2c8\ub2e4.\r\n// 4\ubc88\uc9f8 \uac12\uc740 JJamVa\uc785\ub2c8\ub2e4.\n'})}),(0,t.jsxs)(n.p,{children:["tuple \uc635\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\ub2e4\ub9cc \ubc94\uc6a9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \ud568\uc218\uc77c \uacbd\uc6b0, \uc608\uc678\ucc98\ub9ac\ub97c \uc798\ud574\uc57c\ub41c\ub2e4.",(0,t.jsx)(n.br,{})]})]}),"\n",(0,t.jsx)(n.h2,{id:"spread-\uc5f0\uc0b0\uc790\uc640-tuple",children:"spread \uc5f0\uc0b0\uc790\uc640 tuple"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"spread\uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud574\uc11c \uae30\uc874\uc758 \ud29c\ud50c\uc744 \ud655\uc7a5"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let arr1: number[] = [1, 2, 3];\r\nlet arr2: [number, number, number] = [4, 5, 6];\r\n\r\nlet tuple1: [boolean, string, ...number[]] = [true, \"JJamVa\", ...arr1];\r\nlet tuple2: [boolean, string, ...[number, number, number]] = [\r\n  false,\r\n  \"Hong\",\r\n  ...arr2,\r\n];\r\n\r\nconsole.log(tuple1); // [true, 'JJamVa', 1, 2, 3]\r\nconsole.log(tuple2); // [false, 'Hong', 4, 5, 6]\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\uc8fc\uc758 \uc0ac\ud56d"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"spread \ubb38\ubc95\uc744 \uc774\uc6a9 \uc2dc, spread\ub97c \uc0ac\uc6a9\ud560 \ubc30\uc5f4\uc758 \uac12\uc5d0 \ub300\ud55c \ud0c0\uc785\uc744 \uc81c\ub300\ub85c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc624\ub958\uac00 \ubc1c\uc0dd"}),"\n",(0,t.jsx)(n.li,{children:"TypeScript 4.0\uc774\uc0c1 \ubc84\uc804\uc5d0\uc11c\ub294 [...\ud29c\ud50c]\uc744 \uc0ac\uc6a9 \uac00\ub2a5.(\uc774\uc804 3.x \ubc84\uc804\uc77c \uacbd\uc6b0 Array.from(\ud29c\ud50c)\ub85c \uc0ac\uc6a9)"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// TypeScript 4.0 \uc774\uc0c1\r\nlet tuple1: [number, string] = [1, "two"];\r\nlet tuple2: [...[number, string]] = [...tuple1]; // \uac00\ub2a5\r\n\r\n// TypeScript 3.x\r\nlet tuple1: [number, string] = [1, "two"];\r\nlet tuple2: [number, string] = [...tuple1]; // \uc5d0\ub7ec \ubc1c\uc0dd\n'})})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},989:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var l=r(758);const t={},s=l.createContext(t);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);