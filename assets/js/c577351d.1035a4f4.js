"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[622],{3151:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"frontend/Typescript/object\ud0c0\uc785\ubcc0\ud658","title":"object \ub3d9\uc801 \uc18d\uc131 \ubc0f \ubcc0\ud658","description":"Object Index Signatures","source":"@site/docs/frontend/10-Typescript/23-object\ud0c0\uc785\ubcc0\ud658.md","sourceDirName":"frontend/10-Typescript","slug":"/frontend/Typescript/object\ud0c0\uc785\ubcc0\ud658","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/object\ud0c0\uc785\ubcc0\ud658","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{},"sidebar":"frontend","previous":{"title":"implements","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/implements"},"next":{"title":"\uc870\uac74\uc73c\ub85c \ud0c0\uc785 \ub9cc\ub4e4\uae30 & Infer","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\uc870\uac74\ud0c0\uc785&infer"}}');var t=r(6070),i=r(989);const o={},c="object \ub3d9\uc801 \uc18d\uc131 \ubc0f \ubcc0\ud658",a={},l=[{value:"Object Index Signatures",id:"object-index-signatures",level:2},{value:"key of",id:"key-of",level:2},{value:"Object Index Signatures + keyof",id:"object-index-signatures--keyof",level:2},{value:"Mapped Types",id:"mapped-types",level:2}];function d(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"object-\ub3d9\uc801-\uc18d\uc131-\ubc0f-\ubcc0\ud658",children:"object \ub3d9\uc801 \uc18d\uc131 \ubc0f \ubcc0\ud658"})}),"\n",(0,t.jsx)(e.h2,{id:"object-index-signatures",children:"Object Index Signatures"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uac1d\uccb4\uc758 \ub3d9\uc801 \uc18d\uc131\uc744 \uc815\uc758\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'// \uc77c\ubc18 \uac1d\uccb4 \uc18d\uc131 \uc815\uc758\r\ninterface Info1 {\r\n  name: string;\r\n  age: string;\r\n  job: string;\r\n  nickname: string;\r\n}\r\n\r\nlet obj1: Info1 = {\r\n  name: "Hello",\r\n  age: "10",\r\n  job: "FE",\r\n  nickname: "sam",\r\n};\r\n\r\n// Object Index Signatures\r\ninterface Info2 {\r\n  [key: string]: string;\r\n}\r\n\r\nlet obj2: Info2 = {\r\n  name: "hi",\r\n  age: "20",\r\n  job: "BE",\r\n  nickname: "john",\r\n};\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub97c \ubcf4\uba74 Info1\uacfc Info2\uac00 \ub611\uac19\uc774 \ub3d9\uc791\uc744 \ud558\ub294 \uac83\uc744 \ud655\uc778 \ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nObject Index Signatures\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \ucf54\ub4dc\uc758 \uac04\uacb0\uc131\uacfc \ud655\uc7a5\uc131 \uc88b\uc544\uc9c4\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ub2e4\ub9cc, ",(0,t.jsx)(e.strong,{children:"\uac1d\uccb4\uc758 \uc18d\uc131\uc774 \uc77c\uc815\ud574\uc57c\ud560 \uacbd\uc6b0 Object Index Signatures\ub97c \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4."}),(0,t.jsx)(e.br,{})]})}),"\n",(0,t.jsxs)(e.admonition,{type:"danger",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Object Index Signatures\uc758 \uace0\uc815 \uc18d\uc131"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="Object Index Signatures\uc640 \uace0\uc815 \uc18d\uc131"',children:'interface Info {\r\n  age: string;\r\n  [key: string]: string;\r\n}\r\n\r\nlet obj: Info = {\r\n  name: "JJamVa",\r\n  age: "28",\r\n};\n'})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc \uac19\uc740 \uacbd\uc6b0 Info\uc5d0\uc11c age\ub77c\ub294 \uc18d\uc131\uc744 \uace0\uc815\uc2dc\ud0a4\ub294 \uacbd\uc6b0\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nInfo \ud0c0\uc785\uc744 \uc0ac\uc6a9 \uc2dc, age\uc18d\uc131\uc744 \ubb34\uc870\uac74 \uc0ac\uc6a9\ud574\uc57c\ub41c\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="Object Index Signatures\uc640 \uace0\uc815 \uc18d\uc131"',children:'interface Info {\r\n  age: number;\r\n  [key: string]: string | number;\r\n}\r\n\r\nlet obj: Info = {\r\n  name: "JJamVa",\r\n  age: 28,\r\n};\n'})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc740 \uacbd\uc6b0, Object Index Signatures\uc640 \ud0c0\uc785\uc774 \ub2e4\ub978 \uc18d\uc131\uc744 \ub9cc\ub4e4 \uacbd\uc6b0\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ub9cc\uc57d ",(0,t.jsx)(e.code,{children:"[key: string]: string"}),"\uc73c\ub85c \uc791\uc131\ud558\uc600\uc744 \uacbd\uc6b0, \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uace0\uc815 \uc18d\uc131\uc5d0 \ub300\ud55c \ud0c0\uc785\ub3c4 \uc124\uc815 \ud574\uc918\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,t.jsx)(e.strong,{children:"\uc720\ub2c8\uc628 \ud0c0\uc785\uc73c\ub85c \uace0\uc815 \uc18d\uc131\uc758 \ud0c0\uc785\ub3c4 \ucd94\uac00"}),"\ud574\uc57c\ub41c\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Object Index Signatures\uc758 key \ud0c0\uc785\uc774 number\uc77c \uacbd\uc6b0"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'interface Info {\r\n  [key: number]: string;\r\n}\r\n\r\nlet obj: Info = {\r\n  1: "JJamVa",\r\n  2: "28",\r\n};\r\n\r\nconsole.log(obj[1]); // JJamVa\r\nconsole.log(obj["1"]); // JJamVa\n'})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 key\uc758 \ud0c0\uc785\uc774 number\uc77c \uacbd\uc6b0\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc77c\ubc18\uc801\uc73c\ub85c key\uc758 \ud0c0\uc785\uc740 string\uc744 \uc0ac\uc6a9\ud558\uc9c0\ub9cc number\ub3c4 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nnumber\ub85c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \uac1d\uccb4\uc758 \uc18d\uc131\uc744 \uc22b\uc790\ub85c \uc791\uc131\ud574\ub3c4 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ub2e4\ub9cc, \uc2e4\uc9c8\uc801\uc73c\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uba74 ",(0,t.jsx)(e.strong,{children:"string\ud0c0\uc785\uc73c\ub85c \ubcc0\ud658"}),"\ud558\uae30 \ub54c\ubb38\uc5d0 \ud070 \uc758\ubbf8\uac00 \uc5c6\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc774\ub7ec\ud55c \uc774\uc720\ub85c \uac1d\uccb4\uc758 index\ub97c number\ub098 string\uc73c\ub85c \ucd9c\ub825\ud574\ubcf4\uba74 \ub458\ub2e4 \ucd9c\ub825\uc774 \ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n",(0,t.jsx)(e.h2,{id:"key-of",children:"key of"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uac1d\uccb4 \ud0c0\uc785\uc758 \ubaa8\ub4e0 \uc18d\uc131 \uc774\ub984\uc744 \ubb38\uc790\uc5f4 \ub9ac\ud130\ub7f4 \uc720\ub2c8\uc628\uc73c\ub85c \uac00\uc838\uc624\ub294 \ub370 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(e.li,{children:"\uc778\ub371\uc2a4 \ud0c0\uc785\uacfc \ud568\uaed8 \uc0ac\uc6a9\ub418\uba74 \ud2b9\ud788 \uac1d\uccb4\uc758 \uc18d\uc131\uc5d0 \uc811\uadfc\ud558\ub294 \ub370 \uc720\uc6a9"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'interface Info {\r\n  name: string;\r\n  age: number;\r\n  job: boolean;\r\n}\r\n\r\ntype MyInfo = keyof Info;\r\nlet myName: MyInfo = "name";\r\nlet myAge: MyInfo = "age";\r\nlet myJob: MyInfo = "programmer"; // \uc5d0\ub7ec \ubc1c\uc0dd\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["keyof\uc758 \ud0a4\uc6cc\ub4dc\ub97c \ud1b5\ud574 Info\uc758 interface\uc5d0 \uc815\uc758\ub41c \uc18d\uc131 \uac12\uc758 \ud0c0\uc785 \ucd94\ucd9c\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nMyInfo\ub294 name, age, job\uc758 string \ud0c0\uc785\uc758 \ub9ac\ud130\ub7f4 \uc720\ub2c8\uc628 \ud615\ud0dc\ub85c \uac00\uc9c0\uac8c \ub41c\ub2e4.",(0,t.jsx)(e.br,{})]})}),"\n",(0,t.jsx)(e.h2,{id:"object-index-signatures--keyof",children:"Object Index Signatures + keyof"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'type Info = {\r\n  [key: string]: number;\r\n};\r\n\r\ntype MyInfo = keyof Info;\r\n\r\nlet a: MyInfo = "JJamVa";\r\nlet b: MyInfo = 28;\n'})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsxs)(e.p,{children:["Info\ub97c \ud1b5\ud574 string\ud0c0\uc785\uc758 key\uc640 number\ud0c0\uc785\uc758 \uac12\uc744 \uc815\uc758\ud588\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc774\uc804\uc758 \uac1d\uccb4\uc758 \uc18d\uc131\uc744 \uc77c\uc77c\uc774 \uc815\uc758\ud558\uc5ec keyof\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \ud574\ub2f9 \uc18d\uc131\uc758 key\uac12\ub4e4\uc744 \ud0c0\uc785\uc73c\ub85c \uac00\uc9c4\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ud558\uc9c0\ub9cc ",(0,t.jsx)(e.strong,{children:"Object Index Signatures\uc640 keyof\ub97c \ud568\uaed8 \uc0ac\uc6a9"}),"\ud560 \uacbd\uc6b0\ub294 \ub2e4\ub974\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nObject Index Signatures\uc640 keyof\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \ud574\ub2f9 ",(0,t.jsx)(e.strong,{children:"key\uc758 \ud0c0\uc785\uacfc value\uc758 \ud0c0\uc785\uc774 \uc720\ub2c8\uc628 \ucc98\ub9ac\ub418\uc5b4 \ubc18\ud658"}),"\ub41c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc774\ub85c \uc778\ud574 MyInfo\uc758 \ud0c0\uc785\uc740 Info key\uac12\uc778 string \uacfc value \uac12\uc778 number\uac00 \uc720\ub2c8\uc628 \ucc98\ub9ac\uac00 \ub418\uc5b4 ",(0,t.jsx)(e.code,{children:"string | number"}),"\uc778 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"type Info = {\r\n  [key: string]: number;\r\n};\r\n\r\ntype MyInfo = keyof Info;\n"})}),(0,t.jsxs)(e.p,{children:["\uc989, \ucf54\ub4dc\uc0c1\uc73c\ub85c \ubcf4\uc558\uc744 \ub54c key\uc758 \ud0c0\uc785\uc740 string, value\uac12\uc740 number \uc774\uae30 \ub54c\ubb38\uc5d0 MyInfo\uc758 \ud0c0\uc785\uc740 ",(0,t.jsx)(e.code,{children:"string | number"}),"\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc778\ub371\uc2a4 \ud0c0\uc785 \uc815\uc758\ub97c \ud1b5\ud574 \uac1d\uccb4 \uc18d\uc131\uc744 \ub3d9\uc801\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc73c\uba70, \ucf54\ub4dc\ub97c \ub354 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"type Info = {\r\n  [key: number]: number;\r\n};\r\n\r\nlet obj: Info = {\r\n  1: 100,\r\n  2: 200,\r\n  3: 300,\r\n};\n"})}),(0,t.jsx)(e.p,{children:"\uc704\uc640 \uac19\uc774 \uc778\ub371\uc2a4 \ud0c0\uc785\uc5d0 key\uac12\uc744 number\ub85c\ub3c4 \uc0ac\uc6a9\uc774 \uac00\ub2a5\uc740 \ud558\ub2e4."})]}),"\n",(0,t.jsx)(e.h2,{id:"mapped-types",children:"Mapped Types"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uac1d\uccb4\uc758 \uc18d\uc131\ub4e4\uc744 \ubcc0\ud658\ud558\uac70\ub098 \uc218\uc815\ud558\ub294\ub370 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(e.li,{children:"\uae30\uc874 \uac1d\uccb4 \ud0c0\uc785\uc758 \uac01 \uc18d\uc131\uc744 \uc0c8\ub85c\uc6b4 \uc18d\uc131\uc73c\ub85c \ub9e4\ud551\ud558\uac70\ub098, \uae30\uc874 \uc18d\uc131\uc744 \uc218\uc815\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"[\ubcc0\uc218 in keyof \uc81c\ub124\ub9ad \ud0c0\uc785]: \ubcc0\uacbd \ud0c0\uc785"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'interface Info {\r\n  name: boolean;\r\n  job: number;\r\n  age: undefined;\r\n}\r\n\r\ntype TypeChange<Tchanger, T> = {\r\n  [x in keyof Tchanger]: T;\r\n};\r\n\r\nlet obj: TypeChange<Info, string> = {\r\n  name: "\uc9ec\ubc14",\r\n  age: "28",\r\n  job: "programmer",\r\n};\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc740 \uacbd\uc6b0 Info\uc758 \uc18d\uc131 \ud0c0\uc785\ub4e4\uc774 \uc798\ubabb \uc9c0\uc815\ub418\uc5b4 \uc218\uc815\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ud575\uc2ec \ucf54\ub4dc\ub294 TypeChange\ub97c \ubcf4\uba74 \ub41c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nTypeChange\uc640 generic \ubb38\ubc95\uc744 \uc774\uc6a9\ud558\uc5ec \ud0c0\uc785\uc744 \uc815\uc758\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n",(0,t.jsx)(e.code,{children:"[x in keyof Tchanger] : T"}),"\ub294 ",(0,t.jsx)(e.strong,{children:"generic\uc5d0 \uc785\ub825\ub41c \uac1d\uccb4 \uc18d\uc131\uc744 \ud558\ub098\uc529 T\ud0c0\uc785\uc73c\ub85c \ubcc0\uacbd \uc2dc\ud0a4\ub294 \uc791\uc5c5"}),"\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc774\ub97c \ud1b5\ud574 \ud0c0\uc785 \ubcc0\ud658\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,t.jsx)(e.br,{})]})})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},989:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var s=r(758);const t={},i=s.createContext(t);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);