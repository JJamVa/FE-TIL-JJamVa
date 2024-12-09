"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1073],{2342:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"frontend/JavaScript/DOM\uc2ec\ud654","title":"DOM\uc751\uc6a9 \ubc0f \uc2ec\ud654","description":"SVG\uc640 \uad00\ub828\ub41c \uba54\uc18c\ub4dc","source":"@site/docs/frontend/4-JavaScript/28-DOM\uc2ec\ud654.md","sourceDirName":"frontend/4-JavaScript","slug":"/frontend/JavaScript/DOM\uc2ec\ud654","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc2ec\ud654","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{},"sidebar":"frontend","previous":{"title":"DOM \uc774\ubca4\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc774\ubca4\ud2b8"},"next":{"title":"\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/\uac1d\uccb4\uc9c0\ud5a5\ud504\ub85c\uadf8\ub798\ubc0d"}}');var r=l(6070),c=l(989);const i={},d="DOM\uc751\uc6a9 \ubc0f \uc2ec\ud654",o={},t=[{value:"SVG\uc640 \uad00\ub828\ub41c \uba54\uc18c\ub4dc",id:"svg\uc640-\uad00\ub828\ub41c-\uba54\uc18c\ub4dc",level:2},{value:"getTotalLength()",id:"gettotallength",level:3},{value:"Scroll\uc744 \uc774\uc6a9\ud55c View\uc758 \uae38\uc774\ub97c \uad6c\ud558\ub294 \uba54\uc18c\ub4dc",id:"scroll\uc744-\uc774\uc6a9\ud55c-view\uc758-\uae38\uc774\ub97c-\uad6c\ud558\ub294-\uba54\uc18c\ub4dc",level:2},{value:"scrollTop",id:"scrolltop",level:3},{value:"scrollHeight",id:"scrollheight",level:3},{value:"<code>documentElement</code>\ub780?",id:"documentelement\ub780",level:3},{value:"clientHeight",id:"clientheight",level:3},{value:"DOM\uc694\uc18c \uc18d\uc131 \uc811\uadfc",id:"dom\uc694\uc18c-\uc18d\uc131-\uc811\uadfc",level:2},{value:"style",id:"style",level:3},{value:"\ud0a4\ubcf4\ub4dc \uc774\ubca4\ud2b8",id:"\ud0a4\ubcf4\ub4dc-\uc774\ubca4\ud2b8",level:2},{value:"\ud0a4\ub97c \ub20c\ub7ec \uc694\uc18c\uc5d0 \uc811\uadfc",id:"\ud0a4\ub97c-\ub20c\ub7ec-\uc694\uc18c\uc5d0-\uc811\uadfc",level:3},{value:"\uc694\uc18c\uc5d0 shift\ub97c \ub20c\ub800\uc744 \ub54c",id:"\uc694\uc18c\uc5d0-shift\ub97c-\ub20c\ub800\uc744-\ub54c",level:3},{value:"<code>keyup</code>\uc640 <code>keydown</code>\uc758 \ucc28\uc774\uc810",id:"keyup\uc640-keydown\uc758-\ucc28\uc774\uc810",level:3}];function a(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dom\uc751\uc6a9-\ubc0f-\uc2ec\ud654",children:"DOM\uc751\uc6a9 \ubc0f \uc2ec\ud654"})}),"\n",(0,r.jsx)(n.h2,{id:"svg\uc640-\uad00\ub828\ub41c-\uba54\uc18c\ub4dc",children:"SVG\uc640 \uad00\ub828\ub41c \uba54\uc18c\ub4dc"}),"\n",(0,r.jsx)(n.h3,{id:"gettotallength",children:"getTotalLength()"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SVG\ud30c\uc77c\uc758 \ucd1d \uae38\uc774\ub97c \uac00\uc838\uc624\ub294 \uba54\uc18c\ub4dc"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stroke-dasharray"}),"\uc640 ",(0,r.jsx)(n.code,{children:"stroke-dashoffset"}),"\uc5d0 \uae38\uc774\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\ub294\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scroll\uc744-\uc774\uc6a9\ud55c-view\uc758-\uae38\uc774\ub97c-\uad6c\ud558\ub294-\uba54\uc18c\ub4dc",children:"Scroll\uc744 \uc774\uc6a9\ud55c View\uc758 \uae38\uc774\ub97c \uad6c\ud558\ub294 \uba54\uc18c\ub4dc"}),"\n",(0,r.jsx)(n.h3,{id:"scrolltop",children:"scrollTop"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud604\uc7ac \uc2a4\ud06c\ub864\uc758 \uc704\uce58\uac12\uc744 \ubc18\ud658"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["\uc804\uccb4 \ud654\uba74\uc758 \ud06c\uae30\ub97c 5000px\uc774\ub77c\uace0 \ub450\uc5c8\uc744 \ub54c, \uc2a4\ud06c\ub864\uc744 \ucd5c\ub300\ud55c \ub0b4\ub824\ubcf4\uba74 5000px\uc774 \uc544\ub2cc 4200px\uc774 \ub098\uc628\ub2e4.",(0,r.jsx)(n.br,{})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"body {\r\n  background-color: skyblue;\r\n  height: 5000px;\r\n}\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const scroll = document.documentElement.scrollTop;\r\nwindow.addEventListener("scroll", function () {\r\n  const scroll = document.documentElement.scrollTop;\r\n  console.log(scroll);\r\n});\n'})}),(0,r.jsxs)(n.p,{children:["body\uc758 \ub192\uc774\ub294 5000px\uc774\uba70, \uc2a4\ud06c\ub864\uc758 \uc2dc\uc791\uc810\uc740 0\uc774\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\uc2a4\ud06c\ub864\uc744 \uc81c\uc77c \ubc11\uae4c\uc9c0 \ub0b4\ub838\uc744 \uacbd\uc6b0, scroll\uc758 \ubcc0\uc218\uac12\uc740 5000\uc774 \uc544\ub2cc 4054px\uc774 \ub098\uc628\ub2e4.",(0,r.jsx)(n.br,{})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/49e8a7fe-17f5-4d38-9d39-9fe58e0f3427",alt:"image"})}),(0,r.jsxs)(n.p,{children:["\ube68\uac04\uc0c9\uc740 ",(0,r.jsx)(n.strong,{children:"body\ud0dc\uadf8\uc758 \ub192\uc774 5000px"}),"\uc744 \uc758\ubbf8\ud558\uba70, \ucd08\ub85d\uc0c9\uc740 \ubcf4\uace0\uc788\ub294 ",(0,r.jsx)(n.strong,{children:"\ud654\uba74\uc758 Viewport"}),"\ub97c \uc758\ubbf8",(0,r.jsx)(n.br,{}),"\r\n",(0,r.jsx)(n.code,{children:"scrollTop"})," \uc9c0\uc815\ud55c \uc694\uc18c\uc758 \uc81c\uc77c \uc0c1\ub2e8\uc5d0\uc11c \uc2dc\uc791\ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\uc989, window\uac1d\uccb4\ub97c \uc9c0\ubaa9\ud558\uae30 \ub54c\ubb38\uc5d0 \ucd5c\uc0c1\ub2e8\uc5d0 \ud45c\ud604\uc774 \ub41c\ub2e4.",(0,r.jsx)(n.br,{})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/040e3aac-46a0-4886-95bd-c84b5e263532",alt:"image"})}),(0,r.jsxs)(n.p,{children:["\uacb0\uad6d scroll\uc744 \uc804\ubd80 \ub0b4\ub838\ub2e4\ud574\ub3c4 scrollTop\uc740 Viewport\uc758 \uc0c1\ub2e8\uc744 \uc9c0\ubaa9\ud558\uace0 \uc788\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\uacb0\ub860\uc740 body\uc758 5000px\uc5d0\uc11c \uc2a4\ud06c\ub864 \uc804\ubd80\ub0b4\ub824\ub3c4 scrollTop\uc740 Viewport\uc758 \uc0c1\ub2e8\uc744 \uc9c0\ubaa9\ud558\uace0 \uc788\uc73c\uba70,",(0,r.jsx)(n.br,{}),"\r\n\uc2e4\uc81c \ucd9c\ub825\ub41c \ud654\uba74\uc758 \ub192\uc774(Viewport)\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 4054px\uc774 \ucd9c\ub825\ub41c \uac83\uc774\ub2e4."]})]}),"\n",(0,r.jsx)(n.h3,{id:"scrollheight",children:"scrollHeight"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc804\uccb4 \uc2a4\ud06c\ub864\uc758 \ub192\uc774 \uac12\uc744 \ubc18\ud658"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"body {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: skyblue;\r\n  height: 5000px;\r\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const scroll = document.documentElement.scrollTop;\r\nwindow.addEventListener("scroll", function () {\r\n  const scroll = document.documentElement.scrollHeight;\r\n\r\n  console.log(scroll);\r\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["scroll\uc744 \ucd9c\ub825\ud558\uba74 5000px\uc774 \ucd9c\ub825\ub41c \uac83\uc744 \ud655\uc778.",(0,r.jsx)(n.br,{}),"\r\n",(0,r.jsx)(n.code,{children:"documentElement"}),"\uae30\uc900\uc73c\ub85c scrollHeight\ub97c \uce21\uc815\ud558\uae30 \ub54c\ubb38\uc5d0",(0,r.jsx)(n.br,{}),"\r\nHTML\ub0b4\ubd80\uc5d0 \uc694\uc18c \ud639\uc740 \ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ubcf8 margin, padding \uc18d\uc131\uc73c\ub85c height\uac00 \uc870\uae08 \ub2e4\ub974\uac8c \ucd9c\ub825\ub420 \uc218 \uc788\ub2e4."]})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.h3,{id:"documentelement\ub780",children:[(0,r.jsx)(n.code,{children:"documentElement"}),"\ub780?"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["DOM\ubb38\uc11c\uc758 \ucd5c\uc0c1\uc704 \uc694\uc18c\uc778 ",(0,r.jsx)(n.code,{children:"<html>"})," \uc694\uc18c\ub97c \ub098\ud0c0\ub0b4\ub294 \uc18d\uc131"]}),"\n",(0,r.jsx)(n.li,{children:"document \uac1d\uccb4\uc758 \uccab \ubc88\uc9f8 \uc790\uc2dd\uc694\uc18c"}),"\n",(0,r.jsx)(n.li,{children:"\ubb38\uc11c\uc758 \ucd5c\uc0c1\uc704 \uc694\uc18c\uc5d0 \uc27d\uac8c \uc811\uadfc"}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"clientheight",children:"clientHeight"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud604\uc7ac \uc774\uc6a9\uc790\uac00 \ubcf4\uace0 \uc788\ub294 Viewport\uc758 \ud06c\uae30(\ub192\uc774)"}),"\n",(0,r.jsx)(n.li,{children:"\ube0c\ub77c\uc6b0\uc800\uc758 \ube44\uc728\uc5d0 \ub530\ub77c ViewPort\uc758 \ud06c\uae30(\ub192\uc774)\uac12\uc774 \ub2ec\ub77c\uc9c4\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dom\uc694\uc18c-\uc18d\uc131-\uc811\uadfc",children:"DOM\uc694\uc18c \uc18d\uc131 \uc811\uadfc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DOM\uc744 \uc774\uc6a9\ud558\uc5ec \uac1c\uac1c\uc778\uc758 \uc694\uc18c\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"style",children:"style"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc811\uadfc\ud55c \uc694\uc18c\ub9c8\ub2e4 CSS\uc18d\uc131\uc744 \uc0bd\uc785/\uc0ad\uc81c/\ubcc0\uacbd\uc774 \uac00\ub2a5"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"body {\r\n  background-color: skyblue;\r\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const body = document.querySelector("body");\r\nbody.style.backgroundColor = "red";\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\ucd9c\ub825 \uacb0\uacfc\ub97c \ubcf4\uba74 body\ud0dc\uadf8\uc758 background-color \uc18d\uc131\uc774 red\ub85c \ubcc0\uacbd\ub418\uc5b4 \ucd9c\ub825.",(0,r.jsx)(n.br,{}),"\r\nJavaScript\uc5d0\uc11c\ub294 style\uc694\uc18c \uc911 \uc18d\uc131\uc5d0 \uc811\uadfc\ud560 \ub54c, ",(0,r.jsx)(n.code,{children:"background-color"}),"\uc640 \ub3d9\uc77c\ud558\uac8c \uc791\uc131\uc774 \ubd88\uac00\ub2a5.",(0,r.jsx)(n.br,{}),"\r\nCSS\uc18d\uc131\uc774 ",(0,r.jsx)(n.code,{children:"-"}),"\ub85c \uc791\uc131\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, JavaScript\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.code,{children:"-"}),"\uc758 \ubc14\ub85c \ub2e4\uc74c \uae00\uc790\ub97c ",(0,r.jsx)(n.strong,{children:"\ub300\ubb38\uc790\ub85c \ud45c\uae30"})," (\uce74\uba5c\ucf00\uc774\uc2a4 \ud45c\uae30\ubc95)"]})}),"\n",(0,r.jsx)(n.h2,{id:"\ud0a4\ubcf4\ub4dc-\uc774\ubca4\ud2b8",children:"\ud0a4\ubcf4\ub4dc \uc774\ubca4\ud2b8"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud0a4\ubcf4\ub4dc \uc785\ub825 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd \ub418\uc5c8\uc744 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const link = document.querySelector("a");\r\n\r\nlink.addEventListener("keydown", (e) => {\r\n  console.log(e);\r\n});\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["\ud0a4\ubcf4\ub4dc\uc758 tap(\uc55e\uc73c\ub85c), shift+tap(\ub4a4\ub85c)\uc744 \uc774\uc6a9\ud558\uc5ec ",(0,r.jsx)(n.code,{children:"\uc544\uc774\ucf58 focus"}),"\uac00 \uac00\ub2a5."]}),(0,r.jsx)(n.h3,{id:"\ud0a4\ub97c-\ub20c\ub7ec-\uc694\uc18c\uc5d0-\uc811\uadfc",children:"\ud0a4\ub97c \ub20c\ub7ec \uc694\uc18c\uc5d0 \uc811\uadfc"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/14f172f3-0932-426f-b78a-91fe950fdd83",alt:"image"}),(0,r.jsx)(n.br,{}),"\r\ntap\uc744 \uc774\uc6a9\ud558\uc5ec a\uc694\uc18c\uc5d0 \uc811\uadfc\ud558\uc5ec \ucd9c\ub825\uc2dc\ud0a4\uba74 ",(0,r.jsx)(n.code,{children:"KeyboardEvent\uac1d\uccb4"})," \ub098\uc628\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\uc694\uc18c \uae30\uc900\uc73c\ub85c \ub20c\ub7ec\uc9c4 \ud0a4\uac00 tap\uc774\uae30 \ub54c\ubb38\uc5d0 key\uc18d\uc131\uc740 ",(0,r.jsx)(n.code,{children:"Tap"}),"\uc73c\ub85c \ub098\uc628\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\uc774\uc678\uc5d0 Esc\ub294 ",(0,r.jsx)(n.code,{children:"Escape"}),", space\ub294 ",(0,r.jsx)(n.code,{children:"' '"}),"\ub4f1 \uc785\ub825\uc5d0 \ub530\ub77c key\uc18d\uc131 \uac12\uc774 \ub2ec\ub77c\uc9c4\ub2e4."]}),(0,r.jsx)(n.h3,{id:"\uc694\uc18c\uc5d0-shift\ub97c-\ub20c\ub800\uc744-\ub54c",children:"\uc694\uc18c\uc5d0 shift\ub97c \ub20c\ub800\uc744 \ub54c"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/12e5f34f-d4fa-4117-8588-3bce05b079d7",alt:"image"}),(0,r.jsx)(n.br,{}),"\r\n\ud574\ub2f9 \uc694\uc18c\uc5d0 shift\ud0a4\ub97c \ub204\ub97c \uacbd\uc6b0 key\uc18d\uc131\uc774 ",(0,r.jsx)(n.code,{children:"Shift"}),"\ub85c \ucd9c\ub825\ub41c\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n\ub3d9\uc2dc\uc5d0 ",(0,r.jsx)(n.code,{children:"shiftkey"}),"\uc18d\uc131\uc774 true\uc778 \uac83\uc744 \ud655\uc778"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.h3,{id:"keyup\uc640-keydown\uc758-\ucc28\uc774\uc810",children:[(0,r.jsx)(n.code,{children:"keyup"}),"\uc640 ",(0,r.jsx)(n.code,{children:"keydown"}),"\uc758 \ucc28\uc774\uc810"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keyup"}),": \ud0a4\ub97c \ub204\ub974\uace0 ",(0,r.jsx)(n.strong,{children:"\ub5c0 \uc0c1\ud0dc"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keydown"}),": \ud0a4\ub97c \ucc98\uc74c ",(0,r.jsx)(n.strong,{children:"\ub20c\ub800\uc744 \ub54c \uc0c1\ud0dc"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},989:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>d});var s=l(758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);