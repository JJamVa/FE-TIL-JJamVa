"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[4640],{8398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"frontend/JavaScript/DOM\uc774\ubca4\ud2b8","title":"DOM \uc774\ubca4\ud2b8","description":"\uc774\ubca4\ud2b8 \uac1d\uccb4","source":"@site/docs/frontend/4-JavaScript/27-DOM\uc774\ubca4\ud2b8.md","sourceDirName":"frontend/4-JavaScript","slug":"/frontend/JavaScript/DOM\uc774\ubca4\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc774\ubca4\ud2b8","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{},"sidebar":"frontend","previous":{"title":"DOM \uc81c\uc5b4 \uba85\ub839\uc5b4","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc81c\uc5b4\uba85\ub839\uc5b4"},"next":{"title":"DOM\uc751\uc6a9 \ubc0f \uc2ec\ud654","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc2ec\ud654"}}');var s=t(6070),i=t(989);const c={},l="DOM \uc774\ubca4\ud2b8",a={},d=[{value:"\uc774\ubca4\ud2b8 \uac1d\uccb4",id:"\uc774\ubca4\ud2b8-\uac1d\uccb4",level:2},{value:"\uc774\ubca4\ud2b8 \ud750\ub984",id:"\uc774\ubca4\ud2b8-\ud750\ub984",level:2},{value:"<code>\ucea1\ucc98\ub9c1 \ub2e8\uacc4</code>",id:"\ucea1\ucc98\ub9c1-\ub2e8\uacc4",level:3},{value:"<code>\ubc84\ube14\ub9c1 \ub2e8\uacc4</code>",id:"\ubc84\ube14\ub9c1-\ub2e8\uacc4",level:3},{value:"<code>\uc774\ubca4\ud2b8 \uc804\ud30c(event propagation)</code>",id:"\uc774\ubca4\ud2b8-\uc804\ud30cevent-propagation",level:3},{value:"\ubc84\ud2bc \ud074\ub9ad \uc2dc \ucd9c\ub825 \uacb0\uacfc",id:"\ubc84\ud2bc-\ud074\ub9ad-\uc2dc-\ucd9c\ub825-\uacb0\uacfc",level:3},{value:"\ubc84\ud2bc \uc774\uc678\uc5d0 \ud074\ub9ad \uc2dc \ucd9c\ub825 \uacb0\uacfc",id:"\ubc84\ud2bc-\uc774\uc678\uc5d0-\ud074\ub9ad-\uc2dc-\ucd9c\ub825-\uacb0\uacfc",level:3},{value:"\uadf8\ub9bc\uc73c\ub85c \ud45c\ud604",id:"\uadf8\ub9bc\uc73c\ub85c-\ud45c\ud604",level:3},{value:"\uc774\ubca4\ud2b8 target, currentTarget \ubc0f \uc774\ubca4\ud2b8 \uc704\uc784",id:"\uc774\ubca4\ud2b8-target-currenttarget-\ubc0f-\uc774\ubca4\ud2b8-\uc704\uc784",level:2},{value:"target\uc758 nodeName Property",id:"target\uc758-nodename-property",level:3},{value:"\uc774\ubca4\ud2b8\uc758 this",id:"\uc774\ubca4\ud2b8\uc758-this",level:2},{value:"\uc774\ubca4\ud2b8 \ub3d9\uc791 \ucde8\uc18c",id:"\uc774\ubca4\ud2b8-\ub3d9\uc791-\ucde8\uc18c",level:2},{value:"\uc774\ubca4\ud2b8 \uc804\ud30c \ucc28\ub2e8",id:"\uc774\ubca4\ud2b8-\uc804\ud30c-\ucc28\ub2e8",level:2}];function o(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dom-\uc774\ubca4\ud2b8",children:"DOM \uc774\ubca4\ud2b8"})}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\uac1d\uccb4",children:"\uc774\ubca4\ud2b8 \uac1d\uccb4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\ub294 \uc774\ubca4\ud2b8\uc640 \uad00\ub828\ub41c \uc815\ubcf4\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \ub9e4\uac1c\ubcc0\uc218(event)\uac00 \uc804\uc1a1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<ol>\r\n  <li><button class="btn" type="button">1</button></li>\r\n  <li><button type="button">2</button></li>\r\n</ol>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const btn = document.querySelector(".btn");\r\nbtn.addEventListener("click", (event) => {\r\n  console.log(event);\r\n  // PointerEvent\xa0{isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0,\xa0\u2026}\r\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\ud750\ub984",children:"\uc774\ubca4\ud2b8 \ud750\ub984"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uace0 DOM \ud2b8\ub9ac\uc5d0\uc11c \uc774\ubca4\ud2b8\uac00 \uc218\uc2e0\ub418\ub294 \uc21c\uc11c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\ucea1\ucc98\ub9c1-\ub2e8\uacc4",children:(0,s.jsx)(n.code,{children:"\ucea1\ucc98\ub9c1 \ub2e8\uacc4"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc21c\uc11c\ub294 window\uac1d\uccb4\ubd80\ud130 \uc2dc\uc791\ud574\uc11c document, body \uc21c\uc11c\ub85c DOM \ud2b8\ub9ac\ub97c \ub530\ub77c \ub0b4\ub824\uac04\ub2e4.",(0,s.jsx)(n.br,{})]}),"\n",(0,s.jsx)(n.li,{children:"\uc774\ub54c \uc774\ubca4\ud2b8 \ud0d0\uc0c9 \uacfc\uc815 \uc911 \ub9cc\ub098\ub294 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc2e4\ud589"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\ubc84\ube14\ub9c1-\ub2e8\uacc4",children:(0,s.jsx)(n.code,{children:"\ubc84\ube14\ub9c1 \ub2e8\uacc4"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ucea1\ucc98\ub9c1 \uacfc\uc815\uc774 \ub05d\ub098\uba74 \ucea1\ucc98\ub9c1 \ub2e8\uacc4\uc758 \uc5ed\uc21c\uc73c\ub85c \uc62c\ub77c\uac00 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub97c \uc2e4\ud589"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\uc774\ubca4\ud2b8-\uc804\ud30cevent-propagation",children:(0,s.jsx)(n.code,{children:"\uc774\ubca4\ud2b8 \uc804\ud30c(event propagation)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac83\uc744 \uc758\ubbf8"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<article class="wrapper">\r\n  <button class="btn" type="button">\ubc84\ud2bc</button>\r\n</article>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="\uc774\ubca4\ud2b8 \ud750\ub984 JS\ucf54\ub4dc"',children:'const wrapper = document.querySelector(".wrapper");\r\nconst btn = document.querySelector(".btn");\r\nbtn.addEventListener(\r\n  "click",\r\n  (event) => {\r\n    console.log("btn capture!");\r\n  },\r\n  true\r\n); // addEventListeneer() \ub450\ubc88\uc9f8 Argument\uac12\uc740 \ucea1\ucc98\ub9c1 \uc635\uc158\uc774\ub2e4.\r\n\r\nwindow.addEventListener(\r\n  "click",\r\n  () => {\r\n    console.log("window capture!");\r\n  },\r\n  true\r\n);\r\n\r\ndocument.addEventListener(\r\n  "click",\r\n  () => {\r\n    console.log("document capture!");\r\n  },\r\n  true\r\n);\r\n\r\nwrapper.addEventListener(\r\n  "click",\r\n  () => {\r\n    console.log("wrapper capture!");\r\n  },\r\n  true\r\n);\r\n\r\nbtn.addEventListener("click", (event) => {\r\n  console.log("btn bubble!");\r\n});\r\n\r\nwrapper.addEventListener("click", () => {\r\n  console.log("wrapper bubble!");\r\n});\r\n\r\ndocument.addEventListener("click", () => {\r\n  console.log("document bubble!");\r\n});\r\n\r\nwindow.addEventListener("click", () => {\r\n  console.log("window bubble!");\r\n});\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.h3,{id:"\ubc84\ud2bc-\ud074\ub9ad-\uc2dc-\ucd9c\ub825-\uacb0\uacfc",children:"\ubc84\ud2bc \ud074\ub9ad \uc2dc \ucd9c\ub825 \uacb0\uacfc"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/fff9475f-3f7f-4849-9611-2b8c6f6dc7c6",alt:"image"})}),(0,s.jsx)(n.h3,{id:"\ubc84\ud2bc-\uc774\uc678\uc5d0-\ud074\ub9ad-\uc2dc-\ucd9c\ub825-\uacb0\uacfc",children:"\ubc84\ud2bc \uc774\uc678\uc5d0 \ud074\ub9ad \uc2dc \ucd9c\ub825 \uacb0\uacfc"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/420632ac-644a-452b-93a7-e15c38863686",alt:"image"})}),(0,s.jsx)(n.h3,{id:"\uadf8\ub9bc\uc73c\ub85c-\ud45c\ud604",children:"\uadf8\ub9bc\uc73c\ub85c \ud45c\ud604"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/55fb512c-561e-4fcb-8fda-6628313d3232",alt:"image"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-target-currenttarget-\ubc0f-\uc774\ubca4\ud2b8-\uc704\uc784",children:"\uc774\ubca4\ud2b8 target, currentTarget \ubc0f \uc774\ubca4\ud2b8 \uc704\uc784"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"target"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud55c \uc9c4\uc6d0\uc9c0\uc758 \uc815\ubcf4\uac00 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \uc5c6\ub294 \uc694\uc18c\uc758 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c\ub3c4 \ud574\ub2f9 \uc694\uc18c\uc5d0 \uc811\uadfc \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"currentTarget"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \uc5f0\uacb0\ub41c \uc694\uc18c\uac00 \ucc38\uc870"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<article class="parent">\r\n  <button class="btn" type="button">\ubc84\ud2bc1</button>\r\n  <button type="button">\ubc84\ud2bc2</button>\r\n  <button type="button">\ubc84\ud2bc3</button>\r\n</article>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const parent = document.querySelector(".parent");\r\nparent.addEventListener("click", function (event) {\r\n  console.log(event.target); //\ud604\uc7ac \ud074\ub9ad\ud558\uace0 \uc788\ub294 \ubc84\ud2bc\uc5d0 \ub300\ud55c \uc694\uc18c\ub97c \ucd9c\ub825\r\n  console.log(event.currentTarget); //\ud604\uc7ac \ub4f1\ub85d\ub41c \uc694\uc18c \ucd9c\ub825\r\n  if (event.target.nodeName === "BUTTON") {\r\n    event.target.innerText = "\ubc84\ud2bc2";\r\n    // article\uc694\uc18c\uc548\uc5d0 \ubc84\ud2bc \uc544\ubb34\uac70\ub098 \ud074\ub9ad \uc2dc, \ub0b4\uc6a9\uc774 "\ubc84\ud2bc2"\ub85c \ub0b4\uc6a9\uc774 \ubcc0\uacbd\r\n  }\r\n});\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.h3,{id:"target\uc758-nodename-property",children:"target\uc758 nodeName Property"}),(0,s.jsxs)(n.p,{children:["addEventListener\uc5d0\uc11c Callback\ud568\uc218\uc758 Parameter(event)\uac00 \uc788\uc744 \uacbd\uc6b0",(0,s.jsx)(n.br,{}),"\r\nevent\uac1d\uccb4\uc5d0 target \uc18d\uc131\uc548\uc5d0 nodeName\uc774\ub77c\ub294 \uc18d\uc131\uc774 \uc788\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nnodeName\uc5d0\ub294 \uc5b4\ub5a4 HTML\ud0dc\uadf8\uc548\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\ub300\uc2e0\uc5d0 nodeName\uc5d0 \ub300\ud55c \uc874\uc7ac\ub97c \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c\ub294 HTML\uc5d0 \ud0dc\uadf8\ub97c ",(0,s.jsx)(n.strong,{children:"\ub300\ubb38\uc790 \ubb38\uc790\uc5f4"}),"\ub85c \ud655\uc778\uc744 \ud574\uc57c\ud55c\ub2e4.",(0,s.jsx)(n.br,{})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8\uc758-this",children:"\uc774\ubca4\ud2b8\uc758 this"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this \uac12\uc740 \uc774\ubca4\ud2b8\uac00 \uc5f0\uacb0\ub41c \ub178\ub4dc\ub97c \ucc38\uc870"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<div class="wrapper">\r\n  <button class="btn-first" type="button">\ubc84\ud2bc1</button>\r\n  <button type="button">\ubc84\ud2bc2</button>\r\n</div>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const wrapper = document.querySelector(".wrapper");\r\nwrapper.addEventListener("click", function (event) {\r\n  console.log(event.currentTarget);\r\n  console.log(event.target);\r\n  console.log(this); // event.currentTarget\uac12\uace0 \ub611\uac19\uc740 \uac12\uc744 \uac00\ub974\ud0a4\uace0 \uc788\ub2e4.\r\n});\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c this\ub294 event.currentTarget \uc18d\uc131 \uac12\uacfc \ube44\uc2b7\ud558\ub2e4."}),(0,s.jsxs)(n.p,{children:["\uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ud568\uc218\ub97c ",(0,s.jsx)(n.strong,{children:"\ud654\uc0b4\ud45c \ud568\uc218\ub85c \uc4f4\ub2e4\uba74 this\uac00 \uac00\ub9ac\ud0a4\ub294 \ub300\uc0c1\uc774 \ub2ec\ub77c\uc9c4\ub2e4"}),(0,s.jsx)(n.br,{}),"\r\n\ud654\uc0b4\ud45c \ud568\uc218\uc758 this\ub294 \uc790\uc2e0\uc744 \ub458\ub7ec \uc2f8\uace0 \uc788\ub294 ",(0,s.jsx)(n.strong,{children:"\uc678\ubd80 \ud658\uacbd\uc758 this \uac12\uc744 \ucc38\uc870"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\ub3d9\uc791-\ucde8\uc18c",children:"\uc774\ubca4\ud2b8 \ub3d9\uc791 \ucde8\uc18c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preventDefault()"}),": \ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ubcf8 ",(0,s.jsx)(n.strong,{children:"\uc774\ubca4\ud2b8 \ub3d9\uc791\uc744 \ucde8\uc18c"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<form action="">\r\n  <button type="submit" class="submit">\uc81c\ucd9c</button>\r\n</form>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const submit = document.querySelector(".submit");\r\nsubmit.addEventListener("click", (event) => {\r\n  console.log("clicked");\r\n  event.preventDefault();\r\n});\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/0d57dead-f907-4f4b-84b2-0fdca8e3283c",alt:"image"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"event.preventDefault()"}),"\uac00 \uc5c6\uc744 \uacbd\uc6b0 submit\uc744 \ub20c\ub7ec\ubcf4\uba74 \uc704\uc640 \uac19\uc774 \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n",(0,s.jsx)(n.code,{children:'console.log("clicked")'}),"\uac00 \uc788\uc74c\uc5d0\ub3c4 \ucd9c\ub825\uc774 \ub418\uc9c0\uc54a\ub294\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nsubmit\uc758 \uae30\ub2a5\uc774 \ub3d9\uc791\ub420 \uacbd\uc6b0 \ub3d9\uc791\uacfc \ub3d9\uc2dc\uc5d0 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ub85c\ub4dc\ud558\uae30 \ub54c\ubb38\uc5d0 \ucd9c\ub825\uc774 \ub418\uc9c0 \uc54a\ub294 \uac83\ucc98\ub7fc \ubcf4\uc778\ub2e4."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/026b8f28-57b1-4fdc-bba8-cbf9147f8b97",alt:"image"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"event.preventDefault()"}),"\uac00 \uc5c6\uc744 \uacbd\uc6b0 submit\uc744 \ub20c\ub7ec\ubcf4\uba74 \ubc84\ud2bc \ub204\ub978 \ud69f\uc218\ub9cc\ud07c \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc989, \ubc84\ud2bc\uc744 \ub204\ub974\uc9c0\ub9cc submit\uc5d0 \ub300\ud55c \uc774\ubca4\ud2b8 \ucc98\ub9ac\ub97c \uc81c\uc5b4\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\uc804\ud30c-\ucc28\ub2e8",children:"\uc774\ubca4\ud2b8 \uc804\ud30c \ucc28\ub2e8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stopPropagation()"}),": ",(0,s.jsx)(n.code,{children:"preventDefault()"}),"\ub85c \uc774\ubca4\ud2b8 \ub3d9\uc791\uc744 \ucde8\uc18c\ub97c \ud588\uc9c0\ub9cc \uc774\ubca4\ud2b8 \uc804\ud30c\ub97c \ub9c9\uc9c0 \ubabb\ud55c\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<form action="">\r\n  <button type="submit" class="submit">\uc81c\ucd9c</button>\r\n</form>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const submit = document.querySelector(".submit");\r\n\r\nsubmit.addEventListener("click", (event) => {\r\n  console.log("\ud074\ub9ad!");\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n});\r\n\r\ndocument.body.addEventListener("click", () => {\r\n  console.log("\uc774\ubca4\ud2b8 \ubc1c\uc0dd!!!!!!");\r\n});\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/80836410-2bd2-49fd-a6da-6be318141190",alt:"image"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"event.stopPropagation()"}),"\uc774 \uc5c6\uc744 \uacbd\uc6b0 \uc704\uc640 \uac19\uc774 \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc774\uc720\ub294 \uc774\ubca4\ud2b8 \ucc98\ub9ac \uc21c\uc11c \ub54c\ubb38\uc5d0 \uc800\ub807\uac8c \ucd9c\ub825\ub41c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n",(0,s.jsx)(n.code,{children:"\ucea1\ucc98\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c submit\uc5d0 \ub300\ud574\uc11c \ub3d9\uc791\uc744 \ubd80\uc5ec\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \ub3d9\uc791\uc744 \ud55c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n",(0,s.jsx)(n.code,{children:"\ubc84\ube14\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c \ubc84\ud2bc \uc601\uc5ed\uc774 body\uc704\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \ub3d9\uc791\uc744 \ud55c\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/f94339fb-d784-4e07-9244-fece0fea8b7d",alt:"image"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"event.stopPropagation()"}),"\uc774 \uc788\uc744 \uacbd\uc6b0 \uc704\uc640 \uac19\uc774 \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n",(0,s.jsx)(n.code,{children:"\ucea1\ucc98\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c\ub294 \uc704\uc640 \ub611\uac19\uc774 \ub3d9\uc791\uc744 \ud558\uc9c0\ub9cc ",(0,s.jsx)(n.code,{children:"\ubc84\ube14\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c body\uc5d0 \ub300\ud574\uc11c \ub3d9\uc791\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc989, \ubc84\ud2bc\uc5d0 \ub300\ud558\uc5ec \ub3d9\uc791\uc744 \ucea1\ucc98\ub9c1 \ub2e8\uacc4\uc5d0\uc11c \ucc98\ub9ac\ud558\uace0 \ubc84\ube14\ub9c1 \ub2e8\uacc4\uc5d0\uc11c \ubc84\ud2bc\uacfc \uac19\uc740 \uc601\uc5ed\uc5d0 \ub300\ud574\uc11c \uc774\ubca4\ud2b8\ub97c \uc81c\uc5b4\ud55c\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const submit = document.querySelector(".submit");\r\n\r\nsubmit.addEventListener("click", (event) => {\r\n  console.log("\ud074\ub9ad!");\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n});\r\n\r\ndocument.body.addEventListener(\r\n  "click",\r\n  () => {\r\n    console.log("\uc774\ubca4\ud2b8 \ubc1c\uc0dd!!!!!!");\r\n  },\r\n  true\r\n);\n'})}),(0,s.jsxs)(n.p,{children:["\uc704\uc5d0\uc11c body\uc5d0 \ub300\ud558\uc5ec \ucea1\ucc98\ub9c1 \uc635\uc158\uc744 true\ub85c \uc8fc\uc5c8\uc744 \ub54c, \uc5b4\ub5a4 \uacb0\uacfc\uac00 \ub098\uc62c\uae4c?",(0,s.jsx)(n.br,{})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/4c40f731-f8cc-431c-97d5-e5d614dfc3c4",alt:"image"})}),(0,s.jsxs)(n.p,{children:["\uc774\ubca4\ud2b8 \ucc98\ub9ac \uc21c\uc11c\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"\ucea1\ucc98\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c \ubc84\ud2bc\ubcf4\ub2e4\ub294 body\uac00 \ub354 \ucd5c\uc6b0\uc120\uc774\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc989, submit\uc5d0 ",(0,s.jsx)(n.code,{children:"event.stopPropagation()"}),"\uac00 \uc788\ub354\ub77c\ub3c4 \ucea1\ucc98\ub9c1 \ub2e8\uacc4\uc5d0\uc11c ",(0,s.jsx)(n.strong,{children:"\uc0c1\uc704 \uc694\uc18c"}),"\uac00 \uc788\uc744 \uacbd\uc6b0 \ucd9c\ub825\uc774 \ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nbody\ub294 ",(0,s.jsx)(n.code,{children:"\ucea1\ucc98\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c \uc774\ubbf8 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\uac00 \ub3d9\uc791\ud558\uc600\uae30 \ub54c\ubb38\uc5d0 ",(0,s.jsx)(n.strong,{children:"submit\uc758 event.stopPropagation() \uad00\uacc4 \uc5c6\uc774"})," ",(0,s.jsx)(n.code,{children:"\ubc84\ube14\ub9c1 \ub2e8\uacc4"}),"\uc5d0\uc11c \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},989:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);