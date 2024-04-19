"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Axios",l={unversionedId:"frontend/React/Axios",id:"frontend/React/Axios",title:"Axios",description:"Axios\ub780?",source:"@site/docs/frontend/9-React/19-Axios.md",sourceDirName:"frontend/9-React",slug:"/frontend/React/Axios",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Axios",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/9-React/19-Axios.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"frontend",previous:{title:"useContext",permalink:"/FE-TIL-JJamVa/docs/frontend/React/useContext"},next:{title:"Custom Hook",permalink:"/FE-TIL-JJamVa/docs/frontend/React/CustomHook"}},p={},s=[{value:"Axios\ub780?",id:"axios\ub780",level:2},{value:"Axios \uba54\uc18c\ub4dc",id:"axios-\uba54\uc18c\ub4dc",level:2},{value:"Axios \uad6c\ud604",id:"axios-\uad6c\ud604",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"axios"},"Axios"),(0,r.kt)("h2",{id:"axios\ub780"},"Axios\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP \uc694\uccad\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 Promise \uae30\ubc18\uc758 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install axios")," \uc785\ub825\ud558\uc5ec \uc124\uce58")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"fetch\uc640 axios\uc758 \uacf5\ud1b5\uc810/\ucc28\uc774\uc810")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uacf5\ud1b5\uc810")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Promise \uae30\ubc18\uc73c\ub85c \ub3d9\uc791: then, catch \ub610\ub294 async/await\uc744 \uc774\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 \ucc98\ub9ac")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\ucc28\uc774\uc810"),(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\ud45c\uc900 API : \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub0b4\uc7a5 API, \ubcc4\ub3c4\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58\uac00 \ud544\uc694 \uc5c6\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"JSON\ucc98\ub9ac : ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch"),"\ub294 \uc751\ub2f5\uc744 JSON\uc73c\ub85c \uc790\ub3d9 \ubcc0\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"axios"),(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac: axios\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc124\uce58\ub97c \ud574\uc57c\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CRUD \uc774\uc678 \ub2e4\uc591\ud55c \uba54\uc18c\ub4dc \uc81c\uacf5: ",(0,r.kt)("inlineCode",{parentName:"li"},"axios"),"\uc758 \uba54\uc18c\ub4dc \uc911 ",(0,r.kt)("inlineCode",{parentName:"li"},"get"),",",(0,r.kt)("inlineCode",{parentName:"li"},"post"),",",(0,r.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"put")," \ub4f1 \ub2e4\uc591\ud55c \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac"),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub3d9 JSON \ubcc0\ud658: ",(0,r.kt)("inlineCode",{parentName:"li"},"axios"),"\ub294 \uc790\ub3d9\uc73c\ub85c JSON\uac1d\uccb4\ub85c \ubcc0\ud658. \ub370\uc774\ud130\ub97c \uc804\uc1a1 \uc2dc\uc5d0\ub3c4 \uc790\ub3d9\uc73c\ub85c \ubb38\uc790\uc5f4\ud654"),(0,r.kt)("li",{parentName:"ul"},"\ud658\uacbd \uc9c0\uc6d0: \ube0c\ub77c\uc6b0\uc800\uc640 Node.js \ud658\uacbd \ubaa8\ub450 \uc0ac\uc6a9"))),(0,r.kt)("h2",{id:"axios-\uba54\uc18c\ub4dc"},"Axios \uba54\uc18c\ub4dc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get(url","[, config]","): \uc11c\ubc84\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \ub54c \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"GET \uc694\uccad"),")."),(0,r.kt)("li",{parentName:"ul"},"post(url[, data","[, config]","]): \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"POST \uc694\uccad"),")."),(0,r.kt)("li",{parentName:"ul"},"put(url[, data","[, config]","]): \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"PUT \uc694\uccad"),")."),(0,r.kt)("li",{parentName:"ul"},"delete(url","[, config]","): \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE \uc694\uccad"),")."),(0,r.kt)("li",{parentName:"ul"},"patch(url[, data","[, config]","]): \uc11c\ubc84\uc758 \ub370\uc774\ud130 \uc77c\ubd80\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH \uc694\uccad"),")."),(0,r.kt)("li",{parentName:"ul"},"head(url","[, config]","): HEAD \uc694\uccad\uc744 \uc11c\ubc84\ub85c \ubcf4\ub0b4\uba70, \uc11c\ubc84 \ud5e4\ub354\ub97c \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9. \ubcf8\ubb38(body)\uc740 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"options(url","[, config]","): \uc11c\ubc84\uc5d0\uc11c \ud2b9\uc815 URL\uc5d0 \ub300\ud574 \uc9c0\uc6d0\ud558\ub294 HTTP \uba54\uc18c\ub4dc\ub97c \uc870\ud68c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,r.kt)("inlineCode",{parentName:"li"},"OPTIONS \uc694\uccad"),").")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"axios \uba54\uc18c\ub4dc \uc635\uc158 \uc0ac\uc6a9")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Axios\uc758 post \ubc29\uc2dd"',title:'"Axios\uc758',post:!0,'\ubc29\uc2dd"':!0},'// name, username, email\uc774 \ud544\uc218 \uac12\naxios.post(\n  "https://jsonplaceholder.typicode.com/users",\n  {\n    name: "John Doe",\n    username: "johndoe",\n    email: "johndoe@example.com",\n  },\n  {\n    headers: {\n      "Content-Type": "application/json",\n      Authorization: "Bearer my-token",\n    },\n    timeout: 5000,\n  }\n);\n')),(0,r.kt)("p",{parentName:"admonition"},"\uccab \ubc88\uc9f8 \uc778\uc790\uac12(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),")\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc694\uccad\ud560 \uc8fc\uc18c"),"\ub97c \uc758\ubbf8",(0,r.kt)("br",null),"\n\ub450 \ubc88\uc9f8 \uc778\uc790\uac12(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),")\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc11c\ubc84\uc5d0\uc11c \uc694\uad6c\ud55c \ub370\uc774\ud130"),"\ub97c \uc758\ubbf8",(0,r.kt)("br",null),"\n\uc138 \ubc88\uc9f8 \uc778\uc790\uac12(",(0,r.kt)("inlineCode",{parentName:"p"},"config"),")\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc11c\ubc84\uc5d0\uac8c \uc804\uc1a1\ud560 \uacbd\uc6b0 \uc124\uc815"),"\uc744 \uc758\ubbf8",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"\uc138 \ubc88\uc9f8 \uc778\uc790\uac12\uc758 \uacbd\uc6b0 \uc774\ubbf8\uc9c0 \uc804\uc1a1 \ud0c0\uc785 \ud639\uc740 \ud2b9\ubcc4\ud55c \uc0c1\ud669 \uc774\uc678\uc5d0\ub294 \uc0dd\ub7b5\ub3c4 \uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"axios-\uad6c\ud604"},"Axios \uad6c\ud604"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Async.js"',title:'"Async.js"'},'import React from "react";\nimport axios from "axios";\n\nasync function Async() {\n  return await axios\n    .get("https://jsonplaceholder.typicode.com/users/1")\n    .then((response) => response.data)\n    .catch((error) => {\n      console.log("\uc5d0\ub7ec \ubc1c\uc0dd");\n    });\n}\n\nexport default Async;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React, { useState, useEffect } from "react";\nimport Async from "./Async";\n\nfunction App() {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      const data = await Async();\n      setUser(data);\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      {user && (\n        <div>\n          <h1>\uc774\ub984: {user.name}</h1>\n          <p>\uc774\uba54\uc77c: {user.email}</p>\n          <p>\ubc88\ud638: {user.phone}</p>\n        </div>\n      )}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/41361a1c-9a8f-4ed6-882d-d3e24d9b0790",alt:"image"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Async\ub294 \ub370\uc774\ud130\ub97c \ud638\ucd9c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,r.kt)("br",null),"\nAsync\uc758 \ucf54\ub4dc\ub97c \ubcf4\uba74 \ud574\ub2f9 \uc8fc\uc18c\uc5d0\uac8c ",(0,r.kt)("strong",{parentName:"p"},"get\uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0\uac8c \uc694\uccad"),"\uc744 \ubcf4\ub0b8\uac83\uc744 \ud655\uc778 \uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",null),"\naxios\ub3c4 \ub370\uc774\ud130\ub97c \ud1b5\uc2e0\ud558\ub294 \ube44\ub3d9\uae30 \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 async\uc640 await\uc744 \ud1b5\ud574 \ud574\ub2f9 \uc11c\ubc84\uc5d0\uc11c response\uac00 \uc62c \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"App.js\uc5d0\uc11c \ubcf4\uba74 Async\ub97c \ud638\ucd9c\ud558\uc5ec, \ub370\uc774\ud130\ub97c \ud654\uba74 \ud45c\ud604\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,r.kt)("br",null),"\n\ucc98\uc74c \ud654\uba74\uc5d0 \ub744\uc6cc\uc9c0\uc790\ub9c8\uc790 \ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,r.kt)("br",null),"\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,r.kt)("strong",{parentName:"p"},"useEffect\ub97c \uc0ac\uc6a9"),(0,r.kt)("br",null),"\nuseEffect\ub97c \ud1b5\ud574 \ucc98\uc74c \ub80c\ub354\ub9c1(",(0,r.kt)("inlineCode",{parentName:"p"},"\ub9c8\uc6b4\ud2b8"),")\uc774 \ub420 \uacbd\uc6b0, \uc6d0\ud558\ub294 \ub370\uc774\ud130\ub97c \ubfcc\ub824\uc904 \uc218 \uc788\uac8c\ub054 useState\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud55c\ub2e4.",(0,r.kt)("br",null),"\nuseEffect\uac00 \uc2e4\ud589\uc774 \ub05d\ub0a0 \uacbd\uc6b0, useState\uc758 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \ud654\uba74\uc5d0 \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc8fc\uac8c \ud55c\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'axios.get("https://jsonplaceholder.typicode.com/users/1");\naxios("https://jsonplaceholder.typicode.com/users/1");\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ub450 \ucf54\ub4dc\ub294 \ub3d9\uc77c\ud55c GET \uc694\uccad",(0,r.kt)("br",null),"\n\ub530\ub77c\uc11c Axios\ub97c \uc0ac\uc6a9\ud560 \ub54c GET \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c\ub294 \uba54\uc18c\ub4dc \uc774\ub984\uc744 \uc0dd\ub7b5\ud558\uc5ec \uac04\uacb0\ud558\uac8c \uc791\uc131 \uac00\ub2a5",(0,r.kt)("br",null))))}u.isMDXComponent=!0}}]);