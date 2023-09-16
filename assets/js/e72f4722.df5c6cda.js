"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(p,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="React Router",l={unversionedId:"frontend/React/ReactRouter",id:"frontend/React/ReactRouter",title:"React Router",description:"React Router \uc124\uce58",source:"@site/docs/frontend/10-React/12-ReactRouter.md",sourceDirName:"frontend/10-React",slug:"/frontend/React/ReactRouter",permalink:"/FE-TIL-JJamVa/docs/frontend/React/ReactRouter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-React/12-ReactRouter.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"frontend",previous:{title:"\ud569\uc131 Component",permalink:"/FE-TIL-JJamVa/docs/frontend/React/\ud569\uc131\ucef4\ud3ec\ub10c\ud2b8"},next:{title:"Stack\uacfc Queue",permalink:"/FE-TIL-JJamVa/docs/frontend/Algorithm/stack&queue"}},p={},u=[{value:"React Router \uc124\uce58",id:"react-router-\uc124\uce58",level:2},{value:"BrowserRouter, Routes, Route",id:"browserrouter-routes-route",level:2},{value:"Route \uad6c\ud604",id:"route-\uad6c\ud604",level:3},{value:"Route\ub97c \ud1b5\ud574 props\ub97c \uc804\ub2ec",id:"route\ub97c-\ud1b5\ud574-props\ub97c-\uc804\ub2ec",level:3},{value:"Link",id:"link",level:3}],m={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router"},"React Router"),(0,o.kt)("h2",{id:"react-router-\uc124\uce58"},"React Router \uc124\uce58"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 React \ud3f4\ub354 \uacbd\ub85c\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install react-router-dom")," \uc124\uce58")),(0,o.kt)("h2",{id:"browserrouter-routes-route"},"BrowserRouter, Routes, Route"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BrowserRouter"),": \ube0c\ub77c\uc6b0\uc800\uc758 URL\uc758 \ub77c\uc6b0\ud305\uc744 \uad00\ub9ac\ud558\uba70, React Component\ub97c \uc5f0\uacb0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Routes"),": \ube0c\ub77c\uc6b0\uc800\uc758 path\uacbd\ub85c\uc640 \ub9e4\uce6d\ub418\ub294 \ubaa8\ub4e0 \uc790\uc2dd Route Component\ub97c \uad00\ub9ac"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Route"),": path\uc758 \uacbd\ub85c\uac00 \uc77c\uce58\ud55c\ub2e4\uba74 element\uc758 \ud574\ub2f9\ud558\ub294 Component\uc758 UI\ub85c \ub80c\ub354\ub9c1")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"browserrouter-\uc640-hashrouter"},"BrowserRouter \uc640 HashRouter"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BrowserRouter"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub97c \ub77c\uc6b0\ud305\ud560 \ub54c URL\uc5d0 \uc2e4\uc81c\ub85c\ub294 html\ud30c\uc77c\uc774 \uc5c6\uc9c0\ub9cc \uc874\uc7ac\ud558\ub294 \uac83\ucc98\ub7fc \ud3f4\ub354\ub97c \uc774\ub3d9"),(0,o.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc27d\uace0 \uc9c1\uad00\uc801\uc778 URL\uc744 \uc81c\uacf5"),(0,o.kt)("li",{parentName:"ul"},"ex) ",(0,o.kt)("inlineCode",{parentName:"li"},"http://example.com/route")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HashRouter"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URL\uc8fc\uc18c\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"li"},"#"),"(fragment identifier)\uc744 \ub123\uc5b4 \ucee8\ud150\uce20 \uc548\uc5d0\uc11c\uc758 \ud2b9\uc815\ud55c \uc704\uce58\ub97c \ud45c\ud604"),(0,o.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uc5d0 \ud638\ud658\uc131 \ubb38\uc81c\uac00 \uac70\uc758 \uc5c6\uc73c\uba70, \uc11c\ubc84 \ud658\uacbd\uc5d0\ub3c4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc815\uc801 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c \uc720\uc6a9\ud558\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"ex) ",(0,o.kt)("inlineCode",{parentName:"li"},"http://example.com/#/route")))))),(0,o.kt)("h3",{id:"route-\uad6c\ud604"},"Route \uad6c\ud604"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter, Routes, Route } from "react-router-dom";\nimport React from "react";\n\nfunction Practice() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Index />} />\n        <Route path="/one" element={<One />} />\n        <Route path="/two" element={<Two />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nfunction Index() {\n  return <h1>Hello JJamVa</h1>;\n}\n\nfunction One() {\n  return <h1>1. See you again</h1>;\n}\n\nfunction Two() {\n  return <h1>2. GoodBye</h1>;\n}\n\nexport default Practice;\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001"},"\uc8fc\uc18c: http://localhost:3001/"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/993ff355-9c0b-4eb3-9023-31f03616d7a0",alt:"image"})),(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001one"},"\uc8fc\uc18c: http://localhost:3001/one"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/f945ef1c-2f6f-4d8e-af1f-a4bb343a2301",alt:"image"})),(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001two"},"\uc8fc\uc18c: http://localhost:3001/two"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/0aff237c-f0d9-4cb3-94a3-0c6a0af2d59e",alt:"image"})),(0,o.kt)("p",{parentName:"admonition"},"\uc704 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uacb0\uacfc \uc774\ubbf8\uc9c0\uc774\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Route path="/" element={<Index />} />\n<Route path="/one" element={<One />} />\n<Route path="/two" element={<Two />} />\n')),(0,o.kt)("p",{parentName:"admonition"},"\uccab Route Component\uc758 path\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"'/'"),"\uc758 \uc758\ubbf8\ub294 \ucc98\uc74c React \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\uc2dc\ucf30\uc744 \ub54c,",(0,o.kt)("br",null),"\nIndex Component\ud654\uba74\uc744 \ud638\ucd9c\ud558\uc5ec \ub80c\ub354\ub9c1 \uc2dc\ud0a8\ub2e4.",(0,o.kt)("br",null),"\n\ub450\ubc88\uc9f8, \uc138\ubc88\uc9f8 Route Component\uc758 Path\ub294 \ucd08\uae30 \uc8fc\uc18c\ucc3d\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"/one")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"/two"),"\ub97c \ucd94\uac00\uc801\uc73c\ub85c \uc785\ub825\ud558\uc600\uc744 \ub54c,",(0,o.kt)("br",null),"\n\ud638\ucd9c\ub418\ub294 Component\uc758 \ud654\uba74\uc744 \ub80c\ub354\ub9c1\ud55c \uac83\uc774\ub2e4.")),(0,o.kt)("h3",{id:"route\ub97c-\ud1b5\ud574-props\ub97c-\uc804\ub2ec"},"Route\ub97c \ud1b5\ud574 props\ub97c \uc804\ub2ec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Route"),"\uc5d0 \uc0ac\uc6a9\ub418\ub294 Component\uc5d0 props\ub97c \uc804\ub2ec\ud558\uc5ec \uc0ac\uc6a9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter, Routes, Route } from "react-router-dom";\nimport React from "react";\n\nfunction Practice() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Index />} />\n        <Route path="/one" element={<One name="JJamVa" />} />\n        <Route path="/two" element={<Two greeting="JJamHa" />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nfunction Index() {\n  return <h1>Hello JJamVa</h1>;\n}\n\nfunction One(props) {\n  return <h1>1. See you again {props.name}</h1>;\n}\n\nfunction Two(props) {\n  return <h1>2. GoodBye {props.greeting}</h1>;\n}\n\nexport default Practice;\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001-1"},"\uc8fc\uc18c: http://localhost:3001/"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/993ff355-9c0b-4eb3-9023-31f03616d7a0",alt:"image"})),(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001one-1"},"\uc8fc\uc18c: http://localhost:3001/one"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/d4d29af3-03f0-45b5-b746-2682605d82e6",alt:"image"})),(0,o.kt)("h4",{parentName:"admonition",id:"\uc8fc\uc18c-httplocalhost3001two-1"},"\uc8fc\uc18c: http://localhost:3001/two"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/b264b602-4a2c-4e90-9bce-b8b22f842b9b",alt:"image"})),(0,o.kt)("p",{parentName:"admonition"},"\ub3d9\uc791\ubc29\uc2dd\uc740 \uac19\uc9c0\ub9cc Component\uc758 props\ub9cc \uc804\ub2ec\ud558\uba74 \ub41c\ub2e4.")),(0,o.kt)("h3",{id:"link"},"Link"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud074\ub9ad\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub0b4\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uacbd\ub85c\ub85c \uc774\ub3d9\ud558\ub294 \ub9c1\ud06c\ub97c \uc0dd\uc131\ud558\ub294 Component"),(0,o.kt)("li",{parentName:"ul"},"\uc8fc\uc18c\ub9cc \ubc14\uafc0\ubfd0, \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c \ubd88\ub7ec\uc624\uc9c4 \uc54a\ub294\ub2e4.")))}s.isMDXComponent=!0}}]);