"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8375],{476:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"frontend/JQuery/JQuery\ud0d0\uc0c9","title":"JQuery \ud0d0\uc0c9","description":"parent()","source":"@site/docs/frontend/5-JQuery/4-JQuery\ud0d0\uc0c9.md","sourceDirName":"frontend/5-JQuery","slug":"/frontend/JQuery/JQuery\ud0d0\uc0c9","permalink":"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery\ud0d0\uc0c9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"frontend","previous":{"title":"JQuery \ud544\ud130","permalink":"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery\ud544\ud130"},"next":{"title":"JQuery-Effect \ud6a8\uacfc","permalink":"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery-Effect\ud6a8\uacfc"}}');var s=r(6070),i=r(989);const a={},t="JQuery \ud0d0\uc0c9",c={},d=[{value:"parent()",id:"parent",level:2},{value:"parents()",id:"parents",level:2},{value:"closest()",id:"closest",level:2},{value:"children()",id:"children",level:2},{value:"first() / last()",id:"first--last",level:2},{value:"find()",id:"find",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"jquery-\ud0d0\uc0c9",children:"JQuery \ud0d0\uc0c9"})}),"\n",(0,s.jsx)(e.h2,{id:"parent",children:"parent()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubc14\ub85c \uc9c1\uacc4 \ubd80\ubaa8 \uc694\uc18c \ud0d0\uc0c9"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button>\ud074\ub9ad!</button>\r\n  </div>\r\n  <p><span>Bye~</span></p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("#title").parent().css("border", "1px solid skyblue");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/32054827-08ac-459b-ae3b-30316fa28f04",alt:"image"})}),"\n",(0,s.jsx)(e.h2,{id:"parents",children:"parents()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubd80\ubaa8, \uc870\uc0c1 \uc694\uc18c \uc804\ubd80 \ud0d0\uc0c9"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button>\ud074\ub9ad!</button>\r\n  </div>\r\n  <p><span>Bye~</span></p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("li").parents().css("border", "1px solid red");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/1a3d1a4a-6a2d-4a15-8b38-df5772b73ce0",alt:"image"})}),"\n",(0,s.jsx)(e.h2,{id:"closest",children:"closest()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uac00\uc7a5 \uac00\uae4c\uc6b4 \uc870\uc0c1 \uc694\uc18c \ud0d0\uc0c9"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button>\ud074\ub9ad!</button>\r\n  </div>\r\n  <p>\r\n    <span><em>Bye~</em></span>\r\n  </p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("p").closest("div").css("background-color", "slateblue");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/811caaee-d1f2-4eb9-a55a-ae857fe4b9b0",alt:"image"})}),"\n",(0,s.jsx)(e.h2,{id:"children",children:"children()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\uc9c1\uacc4 \uc790\uc2dd \uc694\uc18c \ud0d0\uc0c9"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button>\ud074\ub9ad!</button>\r\n  </div>\r\n  <p>\r\n    <span><em>Bye~</em></span>\r\n  </p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("div").children().css("border", "1px solid blue");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/c5b8083d-f907-4f3a-8820-70c6e15e6916",alt:"image"})}),"\n",(0,s.jsx)(e.h2,{id:"first--last",children:"first() / last()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"first()"}),": \uccab\ubc88\uc9f8 \uc694\uc18c\ub97c \uc9c0\ubaa9"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"last()"}),": \ub9c8\uc9c0\ub9c9 \uc694\uc18c\ub97c \uc9c0\ubaa9"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button>\ud074\ub9ad!</button>\r\n  </div>\r\n  <p>\r\n    <span><em>Bye~</em></span>\r\n  </p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("article").children().first().css("border", "1px solid pink");\r\n$("article").children().last().css("border", "1px solid red");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/8e72e4f7-66a8-464c-aa23-92f81c4d12f9",alt:"image"})}),"\n",(0,s.jsx)(e.h2,{id:"find",children:"find()"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ubaa8\ub4e0 \ud558\uc704 \uc694\uc18c \ud0d0\uc0c9"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<article>\r\n  <span>Hello World!</span>\r\n  <div>\r\n    <p id="title">\uc548\ub155\ud558\uc138\uc694.</p>\r\n    <ul>\r\n      <li>1</li>\r\n      <li class="this">2</li>\r\n      <li>3</li>\r\n    </ul>\r\n    <button class="this">\ud074\ub9ad!</button>\r\n  </div>\r\n  <p>\r\n    <span><em>Bye~</em></span>\r\n  </p>\r\n</article>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'$("article").find(".this").css("border", "1px dashed gray");\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/eaf18ff6-c8a0-4a88-ac68-7023783a4596",alt:"image"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},989:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>t});var l=r(758);const s={},i=l.createContext(s);function a(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);