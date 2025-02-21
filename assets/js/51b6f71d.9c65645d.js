"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3907],{3652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"frontend/JavaScript/DOM\uc81c\uc5b4\uba85\ub839\uc5b4","title":"DOM \uc81c\uc5b4 \uba85\ub839\uc5b4","description":"\uc774\ubca4\ud2b8 \uc0bd\uc785(addEventListener)","source":"@site/docs/frontend/4-JavaScript/26-DOM\uc81c\uc5b4\uba85\ub839\uc5b4.md","sourceDirName":"frontend/4-JavaScript","slug":"/frontend/JavaScript/DOM\uc81c\uc5b4\uba85\ub839\uc5b4","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc81c\uc5b4\uba85\ub839\uc5b4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{},"sidebar":"frontend","previous":{"title":"DOM(Document Object Model)","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM"},"next":{"title":"DOM \uc774\ubca4\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/DOM\uc774\ubca4\ud2b8"}}');var r=t(6070),s=t(989);const c={},i="DOM \uc81c\uc5b4 \uba85\ub839\uc5b4",d={},o=[{value:"\uc774\ubca4\ud2b8 \uc0bd\uc785(<code>addEventListener</code>)",id:"\uc774\ubca4\ud2b8-\uc0bd\uc785addeventlistener",level:2},{value:"\ud074\ub798\uc2a4 \uc81c\uc5b4",id:"\ud074\ub798\uc2a4-\uc81c\uc5b4",level:2},{value:"<code>clssList.add()</code>",id:"clsslistadd",level:3},{value:"<code>classList.remove()</code>",id:"classlistremove",level:3},{value:"<code>clssList.toggle()</code>",id:"clsslisttoggle",level:3},{value:"<code>classList.contains()</code>",id:"classlistcontains",level:3},{value:"\uc694\uc18c \uc81c\uc5b4",id:"\uc694\uc18c-\uc81c\uc5b4",level:2},{value:"<code>createElement()</code>, <code>createTextNode()</code> ,<code>appendChild()</code>, <code>removeChild()</code>",id:"createelement-createtextnode-appendchild-removechild",level:3},{value:"<code>insertBefore()</code>",id:"insertbefore",level:3},{value:"element, text \ub178\ub4dc \uc0dd\uc131 \ubc0f \ucd94\uac00",id:"element-text-\ub178\ub4dc-\uc0dd\uc131-\ubc0f-\ucd94\uac00",level:2},{value:"<code>textContent</code>, <code>innerHTML</code>, <code>innerText</code> , <code>outerHTML</code>",id:"textcontent-innerhtml-innertext--outerhtml",level:3},{value:"innerText\uacfc textContent\uc758 \ucc28\uc774",id:"innertext\uacfc-textcontent\uc758-\ucc28\uc774",level:3},{value:"innerText",id:"innertext",level:3},{value:"textContent",id:"textcontent",level:3},{value:"XSS\ub780?<br/>",id:"xss\ub780",level:3},{value:"\ub354 \uc815\ubc00\ud558\uac8c \ubc30\uce58",id:"\ub354-\uc815\ubc00\ud558\uac8c-\ubc30\uce58",level:2},{value:"<code>insertAdjacentHTML</code>",id:"insertadjacenthtml",level:3},{value:"\ub178\ub4dc \ud0d0\uc0c9",id:"\ub178\ub4dc-\ud0d0\uc0c9",level:2}];function a(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dom-\uc81c\uc5b4-\uba85\ub839\uc5b4",children:"DOM \uc81c\uc5b4 \uba85\ub839\uc5b4"})}),"\n",(0,r.jsxs)(n.h2,{id:"\uc774\ubca4\ud2b8-\uc0bd\uc785addeventlistener",children:["\uc774\ubca4\ud2b8 \uc0bd\uc785(",(0,r.jsx)(n.code,{children:"addEventListener"}),")"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"target.addEventListener(type, listener)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["type : ",(0,r.jsx)(n.code,{children:"click"}),", ",(0,r.jsx)(n.code,{children:"mouseover"})," , ",(0,r.jsx)(n.code,{children:"wheel"})," \ub4f1 \ub2e4\uc591\ud55c type\uc774 \uc874\uc7ac"]}),"\n",(0,r.jsx)(n.li,{children:"listener: \uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud568\uc218\ub85c \ud45c\ud604"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<button class="btn">\ud074\ub9ad</button>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelector(".btn");\r\nlet count = 0;\r\n\r\nbtn.addEventListener("click", function () {\r\n  console.log(`${++count}\ubc88 \ud074\ub9ad`);\r\n});\r\n\r\n// 0\ubc88 \ud074\ub9ad, 1\ubc88 \ud074\ub9ad ... (\ud074\ub9ad \ub204\ub97c \ub54c\ub9c8\ub2e4 \ucd9c\ub825)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\ud074\ub798\uc2a4-\uc81c\uc5b4",children:"\ud074\ub798\uc2a4 \uc81c\uc5b4"}),"\n",(0,r.jsx)(n.h3,{id:"clsslistadd",children:(0,r.jsx)(n.code,{children:"clssList.add()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud0dc\uadf8\uc5d0 class\uc18d\uc131\uc744 \uc0dd\uc131"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:"<button>\ud074\ub9ad</button>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelector("button");\r\n\r\nbtn.addEventListener("click", function () {\r\n  btn.classList.add("btn");\r\n  //   btn.classList.add("btn", "clicked")// \ud55c\ubc88\uc5d0 \uc5ec\ub7ec\uac00\uc9c0 class\uc18d\uc131\ub3c4 \ub123\uc744 \uc218 \uc788\ub2e4\r\n});\r\n// \ubc84\ud2bc\uc744 \ud074\ub9ad \uc2dc\r\n// <button class="btn">\ud074\ub9ad</button>\uc73c\ub85c html\uc774 \ubcc0\uacbd\ub428\n'})}),"\n",(0,r.jsx)(n.h3,{id:"classlistremove",children:(0,r.jsx)(n.code,{children:"classList.remove()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc120\ud0dd\ub41c \ud0dc\uadf8\uc758 class \uc18d\uc131\uc744 \uc9c0\uc6cc\uc900\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<button class="btn clicked">\ud074\ub9ad</button>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelector("button");\r\n\r\nbtn.addEventListener("click", function () {\r\n  btn.classList.remove("btn", "clicked"); //\ud55c\ubc88\uc5d0 \uc5ec\ub7ec class \uc18d\uc131 \uac12 \uc81c\uac70\r\n});\r\n// \ubc84\ud2bc\uc744 \ud074\ub9ad \uc2dc\r\n// <button class>\ud074\ub9ad</button>\uc73c\ub85c html\uc774 \ubcc0\uacbd\ub428\r\n// class\uc758 \uc18d\uc131\uc740 \uadf8\ub300\ub85c \ub0a8\uc544\uc788\ub2e4. (\uc18d\uc131 \uac12\uc740 \uc81c\uac70)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"clsslisttoggle",children:(0,r.jsx)(n.code,{children:"clssList.toggle()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"class \uc18d\uc131\uba85\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc0bd\uc785, \uc874\uc7ac\ud560 \uacbd\uc6b0 \uc0ad\uc81c (on/off)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:"<button>\ud074\ub9ad</button>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelector("button");\r\n\r\nbtn.addEventListener("click", function () {\r\n  btn.classList.toggle("btn");\r\n});\r\n// \ubc84\ud2bc\uc744 \ud074\ub9ad \uc2dc\r\n// <button class="btn">\ud074\ub9ad</button>\r\n// \ub2e4\uc2dc \ubc84\ud2bc\uc744 \ud074\ub9ad \uc2dc\r\n// <button class>\ud074\ub9ad</button>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"classlistcontains",children:(0,r.jsx)(n.code,{children:"classList.contains()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"class \uc18d\uc131\uba85\uc774 \uc874\uc7ac\ud558\ub294\uc9c0 \ud655\uc778."}),"\n",(0,r.jsxs)(n.li,{children:["\ubc18\ud658\uac12\uc740 ",(0,r.jsx)(n.code,{children:"true"}),", ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<button class="btn">\ud074\ub9ad</button>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelector("button");\r\n\r\nbtn.addEventListener("click", function () {\r\n  console.log(btn.classList.contains("btn"));\r\n  console.log(btn.classList.contains("clicked"));\r\n});\r\n// \ubc84\ud2bc \ud074\ub9ad \uc2dc\r\n// true false\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\uc694\uc18c-\uc81c\uc5b4",children:"\uc694\uc18c \uc81c\uc5b4"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTML\ud0dc\uadf8\uc640 \uc548\uc758 \uc694\uc18c\ub97c \uc0dd\uc131, \uc704\uce58 \uc124\uc815, \uc81c\uac70\uac00 \uac00\ub2a5"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"createelement-createtextnode-appendchild-removechild",children:[(0,r.jsx)(n.code,{children:"createElement()"}),", ",(0,r.jsx)(n.code,{children:"createTextNode()"})," ,",(0,r.jsx)(n.code,{children:"appendChild()"}),", ",(0,r.jsx)(n.code,{children:"removeChild()"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'createElement("HTML\ud0dc\uadf8")'})," : HTML\ud0dc\uadf8\ub97c \uc0dd\uc131"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'createTextNode("text")'})," : \ub0b4\uc6a9(text)\uc744 \uc0dd\uc131"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"appendChild('\uc694\uc18c \ud639\uc740 \ud0dc\uadf8')"})," : \uc694\uc18c\ub098 \ud14d\uc2a4\ud2b8\ub97c \uc120\ud0dd\ud55c \uc694\uc18c\uc758 \uc790\uc2dd\uc73c\ub85c \uc0bd\uc785"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removeChild('\uc694\uc18c \ud639\uc740 \ud0dc\uadf8')"})," : \uc694\uc18c\ub098 \ud14d\uc2a4\ud2b8\uac00 \uc120\ud0dd\ud55c \uc694\uc18c\uc548\uc5d0 \uc874\uc7ac\ud55c\ub2e4\uba74 \uc0ad\uc81c"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<button class="btn">1\ubc88 \ud0dc\uadf8</button>\r\n<button class="btn">2\ubc88 \ud14d\uc2a4\ud2b8</button>\r\n<button class="del-btn">\ud0dc\uadf8 \uc0ad\uc81c</button>\r\n<button class="del-btn">\ud14d\uc2a4\ud2b8 \uc0ad\uc81c</button>\r\n<ul></ul>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const btn = document.querySelectorAll(".btn"); // 1\ubc88 \ud0dc\uadf8, 2\ubc88 \ud14d\uc2a4\ud2b8\r\nconst remove = document.querySelectorAll(".del-btn"); // \ud0dc\uadf8 \uc0ad\uc81c, \ud14d\uc2a4\ud2b8 \uc0ad\uc81c \ubc84\ud2bc\r\nconst ul = document.querySelector("ul"); //ul \ud0dc\uadf8\ub97c \uc9c0\ubaa9\r\n\r\nconst li = document.createElement("li"); //<li>\ud0dc\uadf8 \uc0dd\uc131\r\nconst text = document.createTextNode("TEXT\ub0b4\uc6a9\ucd94\uac00!!"); //Text\r\n\r\nbtn[0].addEventListener("click", () => {\r\n  ul.appendChild(li); //<ul>\ud0dc\uadf8 \uc548\uc5d0 \uc790\uc190\uc73c\ub85c <li>\ud0dc\uadf8 \uc0bd\uc785\r\n});\r\n\r\nbtn[1].addEventListener("click", () => {\r\n  ul.appendChild(text); //<ul>\ud0dc\uadf8\uc548\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \uc0bd\uc785 (\uc21c\uc218\ud55c \ud14d\uc2a4\ud2b8 (HTML \ud0dc\uadf8x))\r\n});\r\n\r\nremove[0].addEventListener("click", () => {\r\n  ul.removeChild(li); //<ul>\ud0dc\uadf8 \uc548\uc5d0 <li>\ud0dc\uadf8 \uc0ad\uc81c\r\n});\r\n\r\nremove[1].addEventListener("click", () => {\r\n  ul.removeChild(text); //<ul>\ud0dc\uadf8\uc548\uc5d0 \ub3d9\uc77c\ud55c \ud14d\uc2a4\ud2b8 \ub0b4\uc6a9 \uc0ad\uc81c\r\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"insertbefore",children:(0,r.jsx)(n.code,{children:"insertBefore()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"parentElement.insertBefore(target, location)"}),": target\uc694\uc18c\ub97c parentElement\uc758 \uc790\uc2dd\uc778 location \uc704\uce58 \uc55e \ubc30\uce58"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<div id="parent">\r\n  <p id="child">Hello World</p>\r\n</div>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'var p = document.createElement("span");\r\nvar child = document.getElementById("child");\r\nvar parent = document.getElementById("parent");\r\nparent.insertBefore(p, child);\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/29354fdb-e717-4894-bcd4-b153108ef184",alt:"image"})}),(0,r.jsxs)(n.p,{children:["id\uac00 'parent'\uc778 \ud0dc\uadf8 \ub0b4\ubd80, id\uac00 'child'\uc55e\uc5d0 ",(0,r.jsx)(n.code,{children:"<p>"}),"\uac00 \uc0dd\uc131\ub41c \uac83\uc744 \ud655\uc778\uc774 \uac00\ub2a5\ud558\ub2e4."]})]}),"\n",(0,r.jsx)(n.h2,{id:"element-text-\ub178\ub4dc-\uc0dd\uc131-\ubc0f-\ucd94\uac00",children:"element, text \ub178\ub4dc \uc0dd\uc131 \ubc0f \ucd94\uac00"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DOM\uc744 \uc774\uc6a9\ud558\uc5ec \uc694\uc18c \uc548\uc758 \uac12\uc5d0 \uc811\uadfc\ud558\uc5ec \uac12\uc744 \uac00\uc838\uc624\uac70\ub098 \ubcc0\uacbd\uc774 \uac00\ub2a5"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"textcontent-innerhtml-innertext--outerhtml",children:[(0,r.jsx)(n.code,{children:"textContent"}),", ",(0,r.jsx)(n.code,{children:"innerHTML"}),", ",(0,r.jsx)(n.code,{children:"innerText"})," , ",(0,r.jsx)(n.code,{children:"outerHTML"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"textContent"}),": \ub178\ub4dc\uc758 ",(0,r.jsx)(n.strong,{children:"\ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\ub97c \ud45c\ud604"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"innerHTML"}),": \uc694\uc18c \ub0b4\uc5d0 \ud3ec\ud568\ub41c ",(0,r.jsx)(n.strong,{children:"HTML \ud0dc\uadf8 \ubc0f \ub0b4\uc6a9\uc744 \uac00\uc838\uc624\uac70\ub098 \uc124\uc815"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"innerText"}),": \uc694\uc18c\uc758 ",(0,r.jsx)(n.strong,{children:"\ub80c\ub354\ub9c1\ub41c \ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\ub9cc \ud45c\ud604"})," (\uc0ac\ub78c\uc774 \uc77d\uc744 \uc218 \uc788\ub294 \uc694\uc18c)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"outerHTML"}),": \uc694\uc18c\ub97c \ud3ec\ud568\ud558\uc5ec ",(0,r.jsx)(n.strong,{children:"HTML \ud0dc\uadf8 \ubc0f \ub0b4\uc6a9\uc744 \uac00\uc838\uc624\uac70\ub098 \uc124\uc815"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<p></p>\r\n<input type="text" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const p = document.querySelector("p");\r\nconst input = document.querySelector("input");\r\n\r\ninput.addEventListener("input", function () {\r\n  p.textContent = input.value;\r\n  //input.value\uc5d0\uc11c **value\ub294 \uc785\ub825\ubc1b\uc740 \uac12\uc5d0 \ub300\ud574\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5**\r\n});\r\n\r\np.innerText = "<strong>I\'m Strong!!</strong>"; //<p>\ud0dc\uadf8 \ub0b4\ubd80\uc5d0 \uc791\uc131\ub41c \ubb38\uc790\uc5f4\uc744 \uadf8\ub300\ub85c \ud45c\ud604\r\n//\ucd9c\ub825: <strong>I\'m Strong!!</strong>\r\np.innerHTML = "<strong>I\'m Strong!!</strong>"; //<p>\ud0dc\uadf8 \ub0b4\ubd80\uc5d0 \uc0c8\ub85c\uc6b4 HTML \ud0dc\uadf8 \ubc0f \ud14d\uc2a4\ud2b8 \ud45c\ud604\r\n//\ucd9c\ub825: I\'m Strong!!\r\np.outerHTML = "<div></div>"; //<p>\ud0dc\uadf8\ub3c4 \ud3ec\ud568\ud558\uc5ec \uc0c8\ub86d\uac8c \ud45c\ud604\r\n//\ucd9c\ub825:\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.h3,{id:"innertext\uacfc-textcontent\uc758-\ucc28\uc774",children:"innerText\uacfc textContent\uc758 \ucc28\uc774"}),(0,r.jsx)(n.h3,{id:"innertext",children:"innerText"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub80c\ub354\ub9c1 \ud6c4\uc758 \ubaa8\uc2b5\uc744 \uc778\uc2dd. \uc228\uaca8\uc9c4 \uc694\uc18c\uc758 \ud14d\uc2a4\ud2b8\ub294 \ubc18\ud658\ud558\uc9c0 \uc54a\uc74c"}),"\n",(0,r.jsx)(n.li,{children:"\uc0ac\ub78c\uc774 \uc77d\uc744 \uc218 \uc788\ub294 \uc694\uc18c\ub9cc \ucc98\ub9ac"}),"\n"]}),(0,r.jsx)(n.h3,{id:"textcontent",children:"textContent"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub178\ub4dc\uc640 \uadf8 \uc790\uc190\uc758 \ubaa8\ub4e0 \ud14d\uc2a4\ud2b8 \ucf58\ud150\uce20\uc640 \uc18d\uc131\uc744 \ub098\ud0c0\ub0c4"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"XSS"})," \uacf5\uaca9\uc758 \uc704\ud5d8\uc774 \uc5c6\ub2e4."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.h3,{id:"xss\ub780",children:["XSS\ub780?",(0,r.jsx)(n.br,{})]}),(0,r.jsx)(n.p,{children:"Cross-site scripting\uc758 \uc57d\uc5b4"}),(0,r.jsxs)(n.p,{children:["\uacf5\uaca9 \uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud574 \uce58\uba85\uc801\uc778 \uacf5\uaca9\ud558\ub294 \uae30\ubc95\uc774\ub2e4.",(0,r.jsx)(n.br,{})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\ub354-\uc815\ubc00\ud558\uac8c-\ubc30\uce58",children:"\ub354 \uc815\ubc00\ud558\uac8c \ubc30\uce58"}),"\n",(0,r.jsx)(n.h3,{id:"insertadjacenthtml",children:(0,r.jsx)(n.code,{children:"insertAdjacentHTML"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uc694\uc18c \ub178\ub4dc\ub97c \uc0c1\uc138\ud558\uac8c \ubc30\uce58"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"insertAdjacentHTML('\uc704\uce58', 'HTML\ud0dc\uadf8 \ubc0f Text')"}),"\uc758 \uc704\uce58 \uc885\ub958"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"beforebegin"}),": \uc5ec\ub294 \ud0dc\uadf8\uc758 \uc55e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"afterbegin"}),": \uc5ec\ub294 \ud0dc\uadf8\uc758 \ub4a4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"beforeend"}),": \ub2eb\ub294 \ud0dc\uadf8\uc758 \uc55e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"afterend"}),": \ub2eb\ub294 \ud0dc\uadf8\uc758 \ub4a4"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',children:'<p class="title">JJamVa</p>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS\ucf54\ub4dc"',children:'const p = document.querySelector("p");\r\n\r\np.insertAdjacentHTML("beforebegin", "<span>\uc548\ub155\ud558\uc138\uc694!</span>");\r\np.insertAdjacentHTML("afterbegin", "<span>\uc81c \uc774\ub984\uc740 </span>");\r\np.insertAdjacentHTML("beforeend", "<span>\uc785\ub2c8\ub2e4.</span>");\r\np.insertAdjacentHTML("afterend", "<span>\uc798 \ubd80\ud0c1 \ub4dc\ub9bd\ub2c8\ub2e4.</span>");\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/feb369e1-2230-4871-9f80-c99fe69889fb",alt:"image"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"beforebegin"}),", ",(0,r.jsx)(n.code,{children:"afterend"}),"\ub294 ",(0,r.jsx)(n.code,{children:"<p>"}),"\uc758 \uc601\uc5ed\uc758 \uc678\ubd80\uc774\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \ub77c\uc778\uc5d0 \uc791\uc131\ub418\uc9c0 \uc54a\uc558\ub2e4.",(0,r.jsx)(n.br,{}),"\r\n",(0,r.jsx)(n.code,{children:"afterbegin"}),", ",(0,r.jsx)(n.code,{children:"beforeend"}),"\ub294 ",(0,r.jsx)(n.code,{children:"<p>"}),"\uc758 \uc601\uc5ed\uc548\uc774\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \ub77c\uc778\uc5d0 \uc791\uc131 \ub418\uc5c8\ub2e4."]})]}),"\n",(0,r.jsx)(n.h2,{id:"\ub178\ub4dc-\ud0d0\uc0c9",children:"\ub178\ub4dc \ud0d0\uc0c9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".firstElementChild"})," : \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \uc790\uc2dd \uc911 \uccab\ubc88\uc9f8"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".firstChild"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".lastElementChild"}),": \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \uc790\uc2dd \uc911 \ub9c8\uc9c0\ub9c9"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".lastChild"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".nextElementSibling"}),": \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \uae30\uc900\uc73c\ub85c \ub2e4\uc74c \ud615\uc81c \uc694\uc18c"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".previousSibling"}),": \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \uae30\uc900 \uc774\uc804 \ud615\uc81c \ub178\ub4dc"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".children"}),": \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \uae30\uc900\uc73c\ub85c \ubaa8\ub4e0 \uc9c1\uacc4\uc790\uc2dd"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".parentElement"}),": \uc9c0\ubaa9\ub41c \uc694\uc18c\uc758 \ubd80\ubaa8 \uc694\uc18c"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title:"HTML\ucf54\ub4dc"',children:'<article>\r\n  \x3c!-- \uc8fc\uc11d --\x3e\r\n  <div class="content">\r\n    <h3>\uc548\ub155\ud558\uc138\uc694!!</h3>\r\n    nice to meet you\r\n    <p>my name is</p>\r\n    Hello World\r\n    <strong>Thanks</strong>\r\n    <div>\r\n      <p>bye~</p>\r\n    </div>\r\n  </div>\r\n  <span>\ub05d!</span>\r\n</article>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title:"JS\ucf54\ub4dc"',children:'const content = document.querySelector(".content");\r\n\r\nconsole.log(content.firstElementChild); // \uc790\uc2dd \uc911 \uccab\ubc88\uc9f8\r\n//<h3>\uc548\ub155\ud558\uc138\uc694!!</h3>\r\n\r\nconsole.log(content.lastElementChild); // \uc790\uc2dd \uc911 \ub9c8\uc9c0\ub9c9\r\n// <div>\r\n//     <p>bye~</p>\r\n// </div>\r\n// class content \uae30\uc900\uc5d0\uc11c div\ud0dc\uadf8\uac00 \ub9c8\uc9c0\ub9c9 \uc694\uc18c\uc774\ub2e4.\r\n// div\ud0dc\uadf8\uc548\uc5d0 p\ud0dc\uadf8\uac00 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uac19\uc774 \ubc18\ud658\r\n\r\nconsole.log(content.nextElementSibling); // \ud604\uc7ac \uc694\uc18c\uc758 \uae30\uc900\uc73c\ub85c \ub2e4\uc74c \ud615\uc81c \uc694\uc18c\r\n// <span>\ub05d!</span>\r\n\r\nconsole.log(content.previousSibling); // \ud604\uc7ac \uc694\uc18c\uc758 \uae30\uc900 \uc774\uc804 \ud615\uc81c \ub178\ub4dc\r\n// #text  text.data:"\\n        "\r\n// \uacf5\ubc31\uc5c6\uc774 \uc778\uc811\ud55c \ud0dc\uadf8\uc77c \uacbd\uc6b0 \ubc18\ud658\r\n// <-- \uc8fc\uc11d --\x3e\uc704\uce58\uc5d0\uc11c \ud55c\uc904 \ub744\uc6cc\uc9c0\uace0 \uacf5\ubc31\ub9cc\ud07c \ucd94\uac00\uac00 \ub418\uc5b4 \ucd94\uac00\uac00 \ub418\uc5c8\ub2e4.\r\n\r\nconsole.log(content.children); // \ud604\uc7ac \uc694\uc18c\uc758 \uae30\uc900\uc73c\ub85c \ubaa8\ub4e0 \uc9c1\uacc4\uc790\uc2dd\r\n// HTMLCollection(4)\xa0[h3, p, strong, div]\r\n\r\nconsole.log(content.parentElement); // \ud604\uc7ac \uc694\uc18c\uc758 \ubd80\ubaa8 \uc694\uc18c\r\n// <article>...</article>\r\n// article\uc601\uc5ed \uc804\ubd80\ub97c \ubc18\ud658\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},989:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var l=t(758);const r={},s=l.createContext(r);function c(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);