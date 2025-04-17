"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[7622],{9969:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"frontend/Typescript/\uc720\ud2f8\ub9ac\ud2f0\ud0c0\uc785","title":"TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785","description":"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc774\ub780?","source":"@site/docs/frontend/9-Typescript/26-\uc720\ud2f8\ub9ac\ud2f0\ud0c0\uc785.md","sourceDirName":"frontend/9-Typescript","slug":"/frontend/Typescript/\uc720\ud2f8\ub9ac\ud2f0\ud0c0\uc785","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\uc720\ud2f8\ub9ac\ud2f0\ud0c0\uc785","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{},"sidebar":"frontend","previous":{"title":"enum","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/enum"},"next":{"title":"Next.js","permalink":"/FE-TIL-JJamVa/docs/frontend/NextJS/NextJs"}}');var i=r(6070),c=r(989);const t={},l="TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",d={},a=[{value:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc774\ub780?",id:"\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785\uc774\ub780",level:2},{value:"\uae30\ubcf8 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"\uae30\ubcf8-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"Partial",id:"partial",level:3},{value:"Required",id:"required",level:3},{value:"Readonly",id:"readonly",level:3},{value:"Pick",id:"pick",level:3},{value:"Omit",id:"omit",level:3},{value:"Record",id:"record",level:3},{value:"Record \uc0ac\uc6a9 \uc2dc, \uc720\uc758 \uc0ac\ud56d",id:"record-\uc0ac\uc6a9-\uc2dc-\uc720\uc758-\uc0ac\ud56d",level:4},{value:"\uc870\uac74\ubd80 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"\uc870\uac74\ubd80-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"Exclude",id:"exclude",level:3},{value:"Extract",id:"extract",level:3},{value:"NonNullable",id:"nonnullable",level:3},{value:"\uc65c name \uc18d\uc131\uc5d0 undefined\uac00 \ub0a8\uc544\uc788\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\ub294\uac00?",id:"\uc65c-name-\uc18d\uc131\uc5d0-undefined\uac00-\ub0a8\uc544\uc788\ub294-\uac83\ucc98\ub7fc-\ubcf4\uc774\ub294\uac00",level:4},{value:"\ud568\uc218 \uad00\ub828 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"\ud568\uc218-\uad00\ub828-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"ReturnType",id:"returntype",level:3},{value:"Parameters",id:"parameters",level:3},{value:"ConstructorParameters",id:"constructorparameters",level:3},{value:"InstanceType",id:"instancetype",level:3},{value:"\uae30\ud0c0 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"\uae30\ud0c0-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"ThisType",id:"thistype",level:3},{value:"Awaited",id:"awaited",level:3}];function o(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"typescript-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",children:"TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"})}),"\n",(0,i.jsx)(e.h2,{id:"\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785\uc774\ub780",children:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc774\ub780?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uae30\uc874 \ud0c0\uc785\uc744 \uae30\ubc18\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131 \ud639\uc740 \ubcc0\ud658"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\uae30\ubcf8-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",children:"\uae30\ubcf8 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"}),"\n",(0,i.jsx)(e.h3,{id:"partial",children:"Partial"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ubaa8\ub4e0 \uc18d\uc131\uc744 **\uc635\uc154\ub110 \uc18d\uc131(?)**\uc73c\ub85c \ubcc0\uacbd"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// interface\r\ninterface Info {\r\n  name: string;\r\n  age: number;\r\n}\r\n\r\ninterface MyInfo extends Partial<Info> {}\r\n\r\n// type\r\ntype Info = {\r\n  name: string;\r\n  age: number;\r\n};\r\n\r\ntype MyInfo = Partial<Info>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/2fd6e888-d564-48e8-9fbf-cfe8c8199552",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c MyInfo \ud0c0\uc785 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \ucd9c\ub825\ub41c \uacb0\uacfc\uc774\ub2e4",(0,i.jsx)(e.br,{}),"\r\nPartial\uc744 \uc801\uc6a9\ud558\uc5ec \uae30\uc874 \ud0c0\uc785\uc758 \ubaa8\ub4e0 \uc18d\uc131\uc744 **\uc635\uc154\ub110 \uc18d\uc131(?)**\uc73c\ub85c \ubcc0\uacbd\ud55c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.p,{children:["\uc989, Partial\uc740 ",(0,i.jsx)(e.strong,{children:"\uae30\uc874 \ud0c0\uc785\uc758 \uc18d\uc131\uc744 \uae30\ubc18\uc73c\ub85c \uc635\uc154\ub110 \uc18d\uc131\uc73c\ub85c \ubcc0\uacbd"}),"\ud558\ub294 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785 \uc911 \ud558\ub098"]})]}),"\n",(0,i.jsx)(e.h3,{id:"required",children:"Required"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud0c0\uc785\uc758 \ubaa8\ub4e0 \uc635\uc154\ub110 \uc18d\uc131\uc744 \ud544\uc218 \uc18d\uc131\uc73c\ub85c \ubcc0\uacbd"}),"\n",(0,i.jsx)(e.li,{children:"Partial\uc758 \ubc18\ub300 \uae30\ub2a5"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// interface\r\ninterface Info {\r\n  name?: string;\r\n  age?: number;\r\n}\r\n\r\ninterface MyInfo extends Required<Info> {}\r\n\r\n// type\r\ntype Info = {\r\n  name?: string;\r\n  age?: number;\r\n};\r\n\r\ntype MyInfo = Required<Info>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/707787f0-808f-4123-aceb-bda84efd48b5",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Required\ub97c \uc801\uc6a9\ud558\uc5ec ",(0,i.jsx)(e.strong,{children:"\uae30\uc874 \ud0c0\uc785\uc758 \ubaa8\ub4e0 \uc635\uc154\ub110 \uc18d\uc131(?)\uc774 \ud544\uc218 \uc18d\uc131\uc73c\ub85c \ubcc0\uacbd\ub41c \uac83"}),"\uc744 \ud655\uc778",(0,i.jsx)(e.br,{}),"\r\nPartial\uacfc \ubc18\ub300\uc758 \uae30\ub2a5\uc73c\ub85c \ub3d9\uc791",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"readonly",children:"Readonly"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\ubaa8\ub4e0 \uc18d\uc131\uc744 \uc77d\uae30 \uc804\uc6a9(",(0,i.jsx)(e.code,{children:"readonly"}),")\ub85c \ubcc0\uacbd"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// interface\r\ninterface Info {\r\n  name?: string;\r\n  age?: number;\r\n}\r\n\r\ninterface MyInfo extends Readonly<Info> {}\r\n\r\n// type\r\ntype Info = {\r\n  name?: string;\r\n  age?: number;\r\n};\r\n\r\ntype MyInfo = Readonly<Info>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/7cbc344d-1d2b-4537-91d3-a9b1582a78c4",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Readonly \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uc774\uc6a9\ud558\uc5ec Info\uc758 ",(0,i.jsx)(e.strong,{children:"\ubaa8\ub4e0 \uc18d\uc131\uc5d0 \ub300\ud574 readonly\ub97c \uc801\uc6a9"})]})]}),"\n",(0,i.jsx)(e.h3,{id:"pick",children:"Pick"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud2b9\uc815 \uc18d\uc131\ub9cc \uc120\ud0dd\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'// interface\r\ninterface Info {\r\n  name?: string;\r\n  age?: number;\r\n  iq: number;\r\n}\r\n\r\ninterface MyInfo extends Pick<Info, "name"> {}\r\n\r\n// type\r\ntype Info = {\r\n  name?: string;\r\n  age?: number;\r\n  iq: number;\r\n};\r\n\r\ntype MyInfo = Pick<Info, "name">;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/fae6f69a-68c4-4995-9a19-b867aecf494f",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Pick \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,i.jsx)(e.code,{children:"Pick<\ud0c0\uc785, \ud0c0\uc785\ub0b4 \uc18d\uc131(\ub4e4)>"})," \ud615\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud558\uba74 ",(0,i.jsx)(e.code,{children:"name"}),"\uc18d\uc131\ub9cc \uac00\uc9c4 \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc774 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type MyInfo = Pick<Info, "name" | "iq">;\n'})}),(0,i.jsxs)(e.p,{children:["\uc5ec\ub7ec \uc18d\uc131\uc744 \uac00\uc838\uc640\uc57c \ud560 \uacbd\uc6b0, ",(0,i.jsx)(e.code,{children:"|"}),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uadf8\ub7fc MyInfo\uc758 \uc18d\uc131\uc740 ",(0,i.jsx)(e.code,{children:"name"}),"\uacfc ",(0,i.jsx)(e.code,{children:"iq"}),"\ub97c \uac00\uc9c8 \uc218 \uc788\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"omit",children:"Omit"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud2b9\uc815 \uc18d\uc131\uc744 \uc81c\uc678\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'// interface\r\ninterface Info {\r\n  name?: string;\r\n  age?: number;\r\n  iq: number;\r\n}\r\n\r\ninterface MyInfo extends Omit<Info, "name"> {}\r\n\r\n// type\r\ntype Info = {\r\n  name?: string;\r\n  age?: number;\r\n  iq: number;\r\n};\r\n\r\ntype MyInfo = Omit<Info, "name">;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/4969d69e-3af7-458a-acb3-cc5daa008a7e",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Omit \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,i.jsx)(e.code,{children:"Omit<\ud0c0\uc785, \uc81c\uac70\ud560 \uc18d\uc131(\ub4e4)>"})," \ud615\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud558\uba74 ",(0,i.jsx)(e.code,{children:"name"}),"\uc18d\uc131\uc774 \uc81c\uac70\ub41c \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc774 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type MyInfo = Omit<Info, "name" | "iq">;\n'})}),(0,i.jsxs)(e.p,{children:["Omit \ub610\ud55c \uc5ec\ub7ec \uc18d\uc131\ub4e4\uc744 \uc81c\uac70\ud560 \uacbd\uc6b0, ",(0,i.jsx)(e.code,{children:"|"}),"\uc744 \uc774\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uadf8\ub7fc MyInfo\uc5d0 ",(0,i.jsx)(e.code,{children:"age"}),"\uc18d\uc131\ub9cc \uc874\uc7ac\ud558\uac8c \ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"record",children:"Record"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud0a4\uc640 \uac12\uc744 \ud2b9\uc815 \ud0c0\uc785\uc73c\ub85c \ub9e4\ud551"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'// type\r\ntype MyInfo = Record<"name" | "age", string | number>;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/a097cbc0-e655-4d36-b8c9-f7f169f415b8",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Record \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,i.jsx)(e.code,{children:"Record<\uc0dd\uc131\ud560 \uc18d\uc131, \ucc38\uace0\ud560 \ud0c0\uc785>"})," \ud615\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud558\uba74,",(0,i.jsx)(e.br,{}),"\r\n",(0,i.jsx)(e.code,{children:"name"}),", ",(0,i.jsx)(e.code,{children:"age"})," \uc18d\uc131\uc5d0 ",(0,i.jsx)(e.code,{children:"string"})," \ud639\uc740 ",(0,i.jsx)(e.code,{children:"number"}),"\uc758 \ud0c0\uc785\uc744 \uac00\uc9c0\uace0 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'// interface\r\ninterface Info {\r\n  name: string;\r\n  age: number;\r\n}\r\n\r\ninterface MyInfo extends Record<"hello" | "world", Info> {}\r\n\r\n// type\r\ntype Info = {\r\n  name: string;\r\n  age: number;\r\n};\r\n\r\ntype MyInfo = Record<"hello" | "world", Info>;\n'})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/9768756b-ccbc-49a7-920a-a22ed8f29ceb",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uc704\uc640 \uac19\uc774 \uae30\uc874 \ud0c0\uc785\uc744 \uc774\uc6a9\ud558\uc5ec \uc774\uc6a9\ud558\uc5ec \uc0c8\ub86d\uac8c \ub9e4\ud551\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 MyInfo\ub294 ",(0,i.jsx)(e.code,{children:"hello"}),", ",(0,i.jsx)(e.code,{children:"world"}),"\uc758 key\ub97c \uac00\uc9c0\uba70, \uac01 key\ub4e4\uc740 Info \ud0c0\uc785 \uac1d\uccb4\uc640 \ub9e4\ud551\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"danger",children:[(0,i.jsx)(e.h4,{id:"record-\uc0ac\uc6a9-\uc2dc-\uc720\uc758-\uc0ac\ud56d",children:"Record \uc0ac\uc6a9 \uc2dc, \uc720\uc758 \uc0ac\ud56d"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Record\ub294 TypeScript\uc758 ",(0,i.jsx)(e.strong,{children:"\uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc73c\ub85c, \ud2b9\uc815 \ud0a4\uc640 \uac12\uc744 \uc81c\ub124\ub9ad \uae30\ubc18\uc73c\ub85c \ub3d9\uc801\uc73c\ub85c \ub9e4\ud551"}),"\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\ninterface\ub294 Record\ub97c **\ud655\uc7a5(extends)**\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, Record \uc790\uccb4\ub97c \uc9c1\uc811 \uc0dd\uc131\ud558\ub294 \ubb38\ubc95\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",(0,i.jsx)(e.br,{})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Record\ub294 \uac1d\uccb4 \ud0c0\uc785\uc744 \uc0dd\uc131\ud558\uba70, \ud0a4(key)\ub294 ",(0,i.jsx)(e.strong,{children:"string | number | symbol \ud0c0\uc785"}),"\ub9cc \uac00\ub2a5",(0,i.jsx)(e.br,{}),"\r\n\ub2e4\ub978 \ud0a4 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uba74 TypeScript\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"\uc870\uac74\ubd80-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",children:"\uc870\uac74\ubd80 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"}),"\n",(0,i.jsx)(e.h3,{id:"exclude",children:"Exclude"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc720\ub2c8\uc5b8 \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \ud0c0\uc785\uc744 \uc81c\uc678\ud55c \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type Status = "success" | "error" | "loading";\r\n\r\ntype One = Exclude<Status, "success">;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/5169f79c-dda3-4902-bbf7-f6bf8df5c27d",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Exclude\ub294 ",(0,i.jsx)(e.code,{children:"Exclude<\uc720\ub2c8\uc5b8 \ud0c0\uc785, \uc81c\uac70\ud558\uace0 \uc2f6\uc740 \ud0c0\uc785>"}),"\uc744 \uc791\uc131\ud558\uba74 ",(0,i.jsx)(e.code,{children:"\uc81c\uac70\ud558\uace0 \uc2f6\uc740 \ud0c0\uc785"}),"\uc744 \uc81c\uc678\ud55c \ub0a8\uc740 \ud0c0\uc785\uc744 \uc0dd\uc131\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc5ec\ub7ec \ud0c0\uc785\uc744 \uc81c\uac70\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,i.jsx)(e.code,{children:"|"}),"\uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \uc81c\uac70\ud558\uba74 \ub41c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.p,{children:["Omit\uacfc \ub611\uac19\uc740 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \ucc28\uc774\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Omit"}),": \uac1d\uccb4 \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \uc18d\uc131\uc744 \uc81c\uac70\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uac1d\uccb4 \ud0c0\uc785\uc744 \uc0dd\uc131."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Exclude"}),": \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \ud0c0\uc785\uc744 \uc81c\uc678\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc744 \uc0dd\uc131."]}),"\n"]}),(0,i.jsx)(e.p,{children:"\uc989, Exclude\ub294 interface\ub97c \uc9c1\uc811\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4."})]}),"\n",(0,i.jsx)(e.h3,{id:"extract",children:"Extract"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc720\ub2c8\uc5b8 \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \ud0c0\uc785\ub9cc \ucd94\ucd9c\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131"}),"\n",(0,i.jsx)(e.li,{children:"Exclude\uc640 \ubc18\ub300"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type Status = "success" | "error" | "loading";\r\n\r\ntype One = Extract<Status, "success">;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/96a2877a-554a-41f6-a7b2-d151809a8d99",alt:"image"})}),(0,i.jsxs)(e.p,{children:["Extract\ub294 ",(0,i.jsx)(e.code,{children:"Extract<\uc720\ub2c8\uc5b8 \ud0c0\uc785, \ucd94\ucd9c \ud0c0\uc785>"}),"\uc744 \uc791\uc131\ud558\uba74 ",(0,i.jsx)(e.code,{children:"\ucd94\ucd9c \ud0c0\uc785"}),"\uc5d0 \uc791\uc131\ud55c \ud0c0\uc785\ub9cc \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc5ec\ub7ec \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,i.jsx)(e.code,{children:"|"}),"\uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \ub41c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.p,{children:["Extract \ub610\ud55c Exclude\uc640 \uac19\uc740 ",(0,i.jsx)(e.strong,{children:"\uc720\ub2c8\uc628 \ud0c0\uc785\uc5d0\uc11c\ub9cc \uc870\uc791\uc774 \uac00\ub2a5"}),"\ud558\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\ub9cc\uc57d, \ud2b9\uc815 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud574\uc57c\ud558\ub294 \ub300\uc0c1\uc774 \uac1d\uccb4 \ud0c0\uc785\uc77c \uacbd\uc6b0 ",(0,i.jsx)(e.strong,{children:"Pick"}),"\uc744 \uc774\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"nonnullable",children:"NonNullable"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"null"}),"\uacfc ",(0,i.jsx)(e.code,{children:"undefined"}),"\ub97c \uc81c\uc678\ud55c \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc0dd\uc131\ud558\ub294\ub370 \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type Status = "success" | "error" | "loading" | null | undefined;\r\n\r\ntype One = NonNullable<Status>;\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/25efcc8f-f96f-4bc7-bb07-5fdea483d051",alt:"image"})}),(0,i.jsxs)(e.p,{children:["NonNullable\uc740 ",(0,i.jsx)(e.code,{children:"NonNullable<null,undefined\ub97c \uc81c\uac70\ud560 \ud0c0\uc785>"}),"\uc744 \uc791\uc131\ud558\uba74\r\nnull, undefined\uac00 \uc81c\uac70\ub41c \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc774 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type Info = {\r\n  name?: string | undefined;\r\n  age: null | number;\r\n};\r\n\r\ntype MappingInfo = {\r\n  [k in keyof Info]: NonNullable<Info[k]>;\r\n};\n"})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/943c4127-51c4-4a39-832e-4bc4bd66758c",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uac1d\uccb4 \uc18d\uc131\ub0b4\uc758 \ubaa8\ub4e0 \uc18d\uc131\uc5d0 \ub300\ud574 null, undefined\ub97c \uc81c\uac70\ud558\ub824\uba74 ",(0,i.jsx)(e.strong,{children:"\ub9e4\ud551\ub41c \ud0c0\uc785\uc744 \uc0ac\uc6a9"}),"\ud558\uba74 \ub41c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\ud558\uc9c0\ub9cc, ",(0,i.jsx)(e.code,{children:"name"}),"\uc18d\uc131\uc744 \ubcf4\uba74 ",(0,i.jsx)(e.code,{children:"undefined"}),"\uac00 \uc81c\uac70\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub85c MappintInfo\ud0c0\uc785\uc774 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsx)(e.hr,{}),(0,i.jsx)(e.h4,{id:"\uc65c-name-\uc18d\uc131\uc5d0-undefined\uac00-\ub0a8\uc544\uc788\ub294-\uac83\ucc98\ub7fc-\ubcf4\uc774\ub294\uac00",children:"\uc65c name \uc18d\uc131\uc5d0 undefined\uac00 \ub0a8\uc544\uc788\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\ub294\uac00?"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["NonNullable\uc740 \ud0c0\uc785\uc5d0\uc11c null\uacfc undefined\ub97c \uc81c\uac70\ud558\uc5ec ",(0,i.jsx)(e.strong,{children:"string"}),"\ud0c0\uc785\ub9cc \ub0a8\ub294\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"?(\uc635\uc154\ub110 \uc18d\uc131)\ub294 \uc18d\uc131\uc758 \uc874\uc7ac \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uba54\ud0c0 \uc815\ubcf4\ub85c \ub0a8\uc544\uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\uc635\uc154\ub110 \uc18d\uc131(name?)\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c \ucef4\ud30c\uc77c\ub7ec\uac00 ",(0,i.jsx)(e.strong,{children:"name: string | undefined"}),"\ub85c \ucc98\ub9ac"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\uacb0\ub860: undefined\uac00 \uc81c\uac70\ub41c \ud6c4\uc5d0\ub3c4 \uc635\uc154\ub110 \uc18d\uc131\uc758 \uc758\ubbf8\ub97c \uc720\uc9c0\ud558\uae30 \uc704\ud574 undefined\uac00 \ud3ec\ud568\ub41c \uac83\ucc98\ub7fc \ubcf4\uc778\ub2e4."}),"\n"]}),"\n"]}),(0,i.jsx)(e.hr,{}),(0,i.jsx)(e.p,{children:"\ub9cc\uc57d \uc635\uc154\ub110 \uc18d\uc131\ub3c4 \ud568\uaed8 \uc81c\uac70\ub97c \ud558\uace0 \uc2f6\ub2e4\uba74"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type Info = {\r\n  name?: string | undefined;\r\n  age: null | number;\r\n};\r\n\r\ntype MappingInfo = {\r\n  [k in keyof Info]-?: NonNullable<Info[k]>;\r\n};\n"})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/32ff2e64-79d8-4e48-908f-feb78a8bcaa5",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uc704\uc640 \uac19\uc774 ",(0,i.jsx)(e.code,{children:"-?"}),"\ub97c \uc774\uc6a9\ud558\uba74 \uc635\uc154\ub110 \uc18d\uc131\uc774 \uc81c\uac70\uac00 \ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\ud568\uc218-\uad00\ub828-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",children:"\ud568\uc218 \uad00\ub828 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"}),"\n",(0,i.jsx)(e.h3,{id:"returntype",children:"ReturnType"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud568\uc218 \ud0c0\uc785\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\ub294\ub370 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type F = () => string;\r\n\r\ntype FType = ReturnType<F>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/20538d32-dd12-47a8-a6cd-0d7e7fe21a75",alt:"image"})}),(0,i.jsxs)(e.p,{children:["ReturnType\uc740 ",(0,i.jsx)(e.code,{children:"ReturnType<\ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud560 \ud0c0\uc785>"}),"\ub97c \uc791\uc131\ud558\uba74\r\n\ud568\uc218\uc758 \ubc18\ud658\uac12\uc758 \ud0c0\uc785\uc774 \uc0dd\uc131\ub41c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"function Calculate(a: number, b: number): number | void {\r\n  return a + b;\r\n}\r\n\r\ntype CaculateType = ReturnType<typeof Caculate>;\n"})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/75df2ec6-0b21-4e07-8507-db680bb69b5f",alt:"image"})}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"typeof"}),"\uc640 ",(0,i.jsx)(e.code,{children:"ReturnType"}),"\uc744 \uc870\ud569\ud558\uba74, \ud568\uc218 \uc120\uc5b8\uc73c\ub85c\ubd80\ud130 \ubc18\ud658 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud560 \uc218 \uc788\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc774 \ubc29\ubc95\uc740 JavaScript \ucf54\ub4dc\uc5d0\uc11c \uc2e4\uc81c \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 TypeScript\ub85c \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud558\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc704\uc758 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 Caculate\ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud568\uc218 \ud0c0\uc785\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type F = (x: number, y: string) => string;\r\n\r\ntype FType = Parameters<F>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/8056db3d-d697-4027-a440-d78cac10e5ea",alt:"image"})}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Parameters<parameter \ud0c0\uc785\uc744 \ucd94\ucd9c\ud560 \ud568\uc218 \ud0c0\uc785>"}),"\uc640 \uac19\uc740 \ud615\ud0dc\ub97c \uc791\uc131\ud558\uac8c \ub418\uba74,",(0,i.jsx)(e.br,{}),"\r\n\uc774\ubbf8\uc9c0\uc640 \uac19\uc774 ",(0,i.jsx)(e.strong,{children:"\ud29c\ud50c \ud615\ud0dc"}),"\ub85c \ud568\uc218\uc758 parameter \ud0c0\uc785\ub4e4\uc744 \ubc18\ud658\ud55c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'function F(): void {\r\n  console.log("Hello World");\r\n}\r\n\r\ntype FType = Parameters<typeof F>;\n'})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/0fb7ea81-8b73-4eda-b2ab-1216930b57b1",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c \ud568\uc218\uc758 parameter\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, ",(0,i.jsxs)(e.strong,{children:["\ube48 \ud29c\ud50c(",(0,i.jsx)(e.code,{children:"[]"}),")\uc744 \ubc18\ud658"]}),"\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc989, \ub9e4\uac1c\ubcc0\uc218\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \uba85\ud655\ud788 \ud45c\ud604",(0,i.jsx)(e.br,{})]}),(0,i.jsx)(e.hr,{}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'function F1(x: number, y: string): void {\r\n  console.log("Hello World");\r\n}\r\n\r\ntype FType = Parameters<typeof F1>;\r\n\r\nfunction F2(args: FType): void {\r\n  console.log(`${args[0]} ${args[1]}`);\r\n}\r\n\r\nF2(["hello", "world"]); // type Error\r\nF2([1, "hello world"]); // 1 hello world\n'})}),(0,i.jsxs)(e.p,{children:["\uc704\uc758 \uacbd\uc6b0, F1\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc744 FType\uc73c\ub85c \ucd94\ucd9c\ud558\uc5ec F2 \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc73c\ub85c \uc9c0\uc815\ud558\uc600\ub2e4.",(0,i.jsx)(e.br,{}),"\r\nFType\uc740 \ud29c\ud50c \ud615\ud0dc\uc758 \ud0c0\uc785\uc73c\ub85c, \ub9e4\uac1c\ubcc0\uc218\uc758 \uc21c\uc11c\uc640 \ud0c0\uc785\uc774 \uace0\uc815\ub418\uc5b4 \uc788\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\ub530\ub77c\uc11c, F2 \ud568\uc218\uc5d0 \uac12\uc744 \uc804\ub2ec\ud560 \ub54c\ub294 ",(0,i.jsx)(e.strong,{children:"\ud29c\ud50c\uc758 \uac01 \uc704\uce58\uc5d0 \ub9de\ub294 \ud0c0\uc785\uc744 \uc815\ud655\ud788 \uc785\ub825\ud574\uc57c \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791"}),"\ud55c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h3,{id:"constructorparameters",children:"ConstructorParameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud074\ub798\uc2a4 \uc0dd\uc131\uc790\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\uc5ec \ud29c\ud50c \ud615\ud0dc\ub85c \ubc18\ud658\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"class Info {\r\n  constructor(name: string, age: number) {}\r\n}\r\n\r\ntype MyInfo = ConstructorParameters<typeof Info>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/9470cc6f-5dcd-4e7c-8063-2a853c31d14f",alt:"image"})}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ConstructorParameters<\uc0dd\uc131\uc790 \ud0c0\uc785>"}),"\uc640 \uac19\uc774 \uc791\uc131\ud558\uba74,",(0,i.jsx)(e.br,{}),"\r\n\ud074\ub799\uc2a4 \uc0dd\uc131\uc790\uc758 \ub9e4\uac1c\ubcc0\uc218 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\uc5ec ",(0,i.jsx)(e.strong,{children:"\ud29c\ud50c \ud615\ud0dc\ub85c \ubc18\ud658"}),"\ud55c\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"class Info {\r\n  constructor() {}\r\n}\r\n\r\ntype MyInfo = ConstructorParameters<typeof Info>;\n"})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/9e34abdd-aed4-4f78-80c5-2a9c2a47e756",alt:"image"})}),(0,i.jsxs)(e.p,{children:["\uc704\uc640 \uac19\uc774 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790 parameter\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, ",(0,i.jsxs)(e.strong,{children:["\ube48 \ud29c\ud50c(",(0,i.jsx)(e.code,{children:"[]"}),")\uc744 \ubc18\ud658"]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"instancetype",children:"InstanceType"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud074\ub798\uc2a4 \uc0dd\uc131\uc790\ub85c\ubd80\ud130 \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\ub294\ub370 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"class Info {\r\n  name: string;\r\n  age: number;\r\n  constructor(name2: string, age2: number) {\r\n    this.name = name2;\r\n    this.age = age2;\r\n  }\r\n}\r\n\r\ntype MyInfo = InstanceType<typeof Info>;\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/user-attachments/assets/219b8c64-c8ff-49de-8ba8-3166725445b5",alt:"image"})}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"InstanceType<\ud074\ub798\uc2a4>"}),"\ub97c \uc791\uc131\ud558\uba74, \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 ",(0,i.jsx)(e.strong,{children:"\uc778\uc2a4\ud134\uc2a4 \ud0c0\uc785\uc744 \ucd94\ucd9c"}),"\ud560 \uc218 \uc788\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc704 \ucf54\ub4dc\uc5d0\uc11c ",(0,i.jsx)(e.code,{children:"typeof Info"}),"\ub294 Info \ud074\ub798\uc2a4\uc758 ",(0,i.jsx)(e.strong,{children:"\uc0dd\uc131\uc790 \ud0c0\uc785"}),"\uc744 \ub098\ud0c0\ub0b4\uba70, ",(0,i.jsx)(e.code,{children:"InstanceType"}),"\uc740 ",(0,i.jsx)(e.strong,{children:"\uc0dd\uc131\uc790\uc758 \ubc18\ud658 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\uba70, \ud074\ub798\uc2a4\uc774 \uc778\uc2a4\ud134\uc2a4 \ud0c0\uc785\uc744 \ubc18\ud658"}),(0,i.jsx)(e.br,{})]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type MyInfo = {\r\n  name: string;\r\n  age: number;\r\n};\n"})}),(0,i.jsxs)(e.p,{children:["\ub530\ub77c\uc11c, MyInfo\ub294 Info \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4 \ud0c0\uc785\uacfc \ub3d9\uc77c\ud558\uba70, \uc704\uc640 \uac19\uc740 \uacb0\uacfc\ub97c \uac00\uc9c4\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\uae30\ud0c0-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",children:"\uae30\ud0c0 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"}),"\n",(0,i.jsx)(e.h3,{id:"thistype",children:"ThisType"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud2b9\uc218\ud55c \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"}),"\n",(0,i.jsx)(e.li,{children:"\uac1d\uccb4 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c this\uc758 \ud0c0\uc785\uc744 \uc124\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n",(0,i.jsx)(e.li,{children:"\uc8fc\ub85c \uac1d\uccb4 \ub9ac\ud130\ub7f4\uc758 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \ub3d9\uc791"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'interface Info {\r\n  name: string;\r\n  greeting(): void;\r\n}\r\n\r\nconst MyInfo: Info & ThisType<Info> = {\r\n  name: "JJamVa",\r\n  greeting() {\r\n    console.log(this.name);\r\n  },\r\n};\r\n\r\nMyInfo.greeting(); // JJamVa\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 MyInfo\uc758 \ud0c0\uc785\uc744 Info\ub85c \uc9c0\uc815\ud568\uacfc \ub3d9\uc2dc\uc5d0, MyInfo \uac1d\uccb4\uc758 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 this\uc758 \ud0c0\uc785\uc744 Info\ub85c \uc124\uc815\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n",(0,i.jsx)(e.code,{children:"ThisType<Info>"}),"\ub97c \ud1b5\ud574 \ud574\ub2f9 \uac1d\uccb4 \ub9ac\ud130\ub7f4 \ub0b4\uc5d0\uc11c this\ub294 Info \ud0c0\uc785\uc73c\ub85c \uc81c\ud55c\ub41c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\ub530\ub77c\uc11c, MyInfo \uc548\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 this\ub294 ",(0,i.jsx)(e.code,{children:"name: string"}),"\uacfc ",(0,i.jsx)(e.code,{children:"greeting(): void"}),"\ud0c0\uc785\uc744 \uac00\uc9c0\ub294 \uac1d\uccb4\ub85c \uba85\uc2dc\ub41c\ub2e4."]})}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"ThisType\uc758 \uc7a5\ub2e8\uc810"})}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\uc7a5\uc810"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"TypeScript\uac00 \uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0\uc11c this \ud0c0\uc785\uc744 \ucd94\ub860\ud558\uc9c0 \ubabb\ud558\ub294 \ubb38\uc81c \ud574\uacb0"}),"\n",(0,i.jsx)(e.li,{children:"this\uac00 \uba85\ud655\ud55c \ud0c0\uc785 \uc9c0\uc815 \uac00\ub2a5"}),"\n",(0,i.jsx)(e.li,{children:"\uc798\ubabb\ub41c this \ucc38\uc870 ex) window \uac1d\uccb4"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\ub2e8\uc810"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,i.jsxs)(e.li,{children:["\ub7f0\ud0c0\uc784\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc74c(\uc624\ub85c\uc9c0 ",(0,i.jsx)(e.strong,{children:"\ucef4\ud30c\uc77c \ub2e8\uacc4\uc5d0\uc11c \ud0c0\uc785 \uccb4\ud06c"}),"\ub9cc\uc744 \uc704\ud574 \uc0ac\uc6a9)"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(e.h3,{id:"awaited",children:"Awaited"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Promise\ub098 \ube44\ub3d9\uae30 \ud568\uc218\uc5d0\uc11c \ubc18\ud658\ub41c \uac12\uc758 \ud0c0\uc785\uc744 \ucd94\ucd9c\ud558\ub294 \ub370 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'async function fetchData(): Promise<string> {\r\n  return "data";\r\n}\r\n\r\ntype DataType = Awaited<ReturnType<typeof fetchData>>;\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["fetchData \ud568\uc218\ub294 \ube44\ub3d9\uae30 \ud568\uc218\uc774\uba70, ",(0,i.jsx)(e.code,{children:"Promise<string>"})," \ud0c0\uc785\uc758 \uac12\uc744 \ubc18\ud658\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\nDataType\uc740 ",(0,i.jsx)(e.strong,{children:"ReturnType"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec fetchData \ud568\uc218\uc758 \ubc18\ud658 \ud0c0\uc785\uc778 ",(0,i.jsx)(e.code,{children:"Promise<string>"}),"\ub97c \uac00\uc838\uc628\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc774\ub54c, ",(0,i.jsx)(e.code,{children:"Promise<string>"})," \ub0b4\ubd80\uc758 \uac12\uc744 \ucd94\ucd9c\ud558\uae30 \uc704\ud574 ",(0,i.jsx)(e.strong,{children:"Awaited"}),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n",(0,i.jsx)(e.code,{children:"Awaited<Promise<string>>"}),"\uc740 Promise\ub97c \ud480\uc5b4 \ucd5c\uc885\uc801\uc73c\ub85c string \ud0c0\uc785\uc744 \ubc18\ud658\ud55c\ub2e4.",(0,i.jsx)(e.br,{})]})}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'async function fetchData(): Promise<Promise<string>> {\r\n  return "data";\r\n}\r\n\r\ntype DataType = Awaited<ReturnType<typeof fetchData>>; // string\n'})}),(0,i.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c fetchData\uc758 \ubc18\ud658 \ud0c0\uc785\uc774 ",(0,i.jsx)(e.code,{children:"Promise<Promise<string>>"}),"\uc73c\ub85c 2\uc911\ucca9\uc758 \ud0c0\uc785\uc774 \ub418\uc5b4\uc788\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc774\ub7f4 \uacbd\uc6b0 ",(0,i.jsx)(e.code,{children:"Awaited"}),"\ub294 \uc911\ucca9\ub41c ",(0,i.jsx)(e.code,{children:"Promise"})," \uad6c\uc870\ub97c ",(0,i.jsx)(e.strong,{children:"\uc7ac\uadc0\uc801\uc73c\ub85c \ud574\uc81c\ud558\uc5ec \ucd5c\ud558\uc704\uc758 \ud0c0\uc785"}),"\uc744 \ubc18\ud658"]})]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},989:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>l});var s=r(758);const i={},c=s.createContext(i);function t(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);