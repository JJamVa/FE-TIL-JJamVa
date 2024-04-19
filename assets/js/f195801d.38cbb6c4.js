"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i="rest parameter, destructuring",l={unversionedId:"frontend/Typescript/rest,descturing",id:"frontend/Typescript/rest,descturing",title:"rest parameter, destructuring",description:"rest parameter \ud0c0\uc785 \uc9c0\uc815",source:"@site/docs/frontend/10-Typescript/11-rest,descturing.md",sourceDirName:"frontend/10-Typescript",slug:"/frontend/Typescript/rest,descturing",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/rest,descturing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-Typescript/11-rest,descturing.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"frontend",previous:{title:"interface",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/interface"},next:{title:"Type narrowing \ucc98\ub9ac \ubc0f in, instanceof",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/narrowing\ucc98\ub9ac\ubc0fin"}},s={},p=[{value:"rest parameter \ud0c0\uc785 \uc9c0\uc815",id:"rest-parameter-\ud0c0\uc785-\uc9c0\uc815",level:2},{value:"destructuring",id:"destructuring",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rest-parameter-destructuring"},"rest parameter, destructuring"),(0,a.kt)("h2",{id:"rest-parameter-\ud0c0\uc785-\uc9c0\uc815"},"rest parameter \ud0c0\uc785 \uc9c0\uc815"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rest parameter"),"\ub294 \ud568\uc218 \uc815\uc758 \uc2dc parameter \uc911\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"li"},"\ub0a8\uc740 \uc778\uc790\ub4e4\uc744 \ud558\ub098\uc758 \ubc30\uc5f4"),"\ub85c \ucc98\ub9ac")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function func(a: number, b: number, ...c: (number | string)[]): void {\n  console.log(`\ub098\uba38\uc9c0 \uc6d0\uc18c\ub294 ${c} \uc785\ub2c8\ub2e4.`);\n}\n\nfunc(1, 2, 3, 4, 5, "6", 7, "8", "9");\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c rest parameter\uc5d0 \ub300\ud574 \ud0c0\uc785\uc744 \uc815\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("br",null),"\n\uc704\uc640 \uac19\uc774 func\ud568\uc218\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"...c(number|string)[]"),"\uacfc \uac19\uc774 parameter c\uc5d0 \ub300\ud574 \ud0c0\uc785\uc744 \uc9c0\uc815\ud588\ub2e4.",(0,a.kt)("br",null),"\nrest parameter\uc740 parameter\ub4e4 \uc911 \uc81c\uc77c \ub4a4\uc5d0 \uc788\uc5b4\uc57c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.")),(0,a.kt)("h2",{id:"destructuring"},"destructuring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub098 \ubc30\uc5f4\uc744 \ud574\uccb4\ud558\uc5ec \uadf8 \uc548\uc758 \uac12\uc744 \uac1c\ubcc4 \ubcc0\uc218\uc5d0 \ud560\ub2f9\ud558\ub294 \ubb38\ubc95"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub098 \ubc30\uc5f4\uc744 \ud574\uccb4\ud560 \ub54c, \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubcc0\uc218\uc758 \ud0c0\uc785\uc744 \ucd94\ub860\ud558\uac70\ub098 \uba85\uc2dc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\ubc30\uc5f4 \ud574\uc81c',title:'"\ubc30\uc5f4',"\ud574\uc81c":!0},"const numbers = [1, 2, 3, 4, 5];\n\nconst [a, b] = [...numbers];\n\nconsole.log(a); // 1\nconsole.log(b); // 2\n\nconst [x, ...y]: number[] = [...numbers];\n\nconsole.log(x); // 1\nconsole.log(y); // [2,3,4,5]\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ubc30\uc5f4\uc758 destructuring \uc2dc, ","[x,...y]","\uc5d0 \ub300\ud55c \ud560\ub2f9\ub41c \uac12\uc774 \ubc30\uc5f4\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"number[]")," \ud0c0\uc785\uc744 \uc9c0\uc815",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"[...numbers]"),"\ub294 numbers\ub77c\ub294 \ubcc0\uc218\uc758 \uad04\ud638\ub97c \ubc97\uae30\ub294 spread \ubb38\ubc95\uc774\uba70,",(0,a.kt)("br",null),"\n\ud568\uc218\uc758 rest parameter \uc0ac\uc6a9\ud560 \ub54c\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"..."),"\uc740 \uad04\ud638\ub97c \uc0dd\uc131\ud574\uc900\ub2e4.",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\uac1d\uccb4 \ud574\uc81c"',title:'"\uac1d\uccb4','\ud574\uc81c"':!0},'type O = {\n  name?: string;\n  age: number;\n  job: boolean;\n};\n\nlet obj: O = {\n  name: "JJamVa",\n  age: 27,\n  job: true,\n};\n\n// \uac1d\uccb4 \uad6c\uc870\ubd84\ud574 \ud560\ub2f9\nlet { name, ...rest } = obj;\n\nconsole.log(name); // "JJamVa"\nconsole.log(rest); // {age: 27, job:true}\n\n//\ud568\uc218 parameter \uad6c\uc870\ubd84\ud574 \ud560\ub2f9\nfunction info({ name, age, job }: O) {\n  console.log(\n    `\ub0b4 \uc774\ub984\uc740 ${name}\uc774\uba70, \ub098\uc774\ub294 ${age}\uc138, \uc9c1\uc5c5\uc744 ${\n      job ? "\uac00\uc9c0\uace0 \uc788\ub2e4" : "\uc5c6\uc2b5\ub2c8\ub2e4."\n    }`\n  );\n}\n\ninfo(obj);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 destructuring\uc774\ub2e4.",(0,a.kt)("br",null),"\nVSC\uc640 \uac19\uc740 \uacbd\uc6b0, ts\ud30c\uc77c\uc744 \ucef4\ud30c\uc77c\ud558\uba74 \uc815\uc0c1 \uc2e4\ud589\uc740 \ub418\uc9c0\ub9cc \uc5d0\ub7ec\ud45c\uc2dc\uac00 \ubc1c\uc0dd\ud55c\ub2e4.",(0,a.kt)("br",null)),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'let obj: O = {\n  name: "JJamVa",\n  age: 27,\n  job: true,\n};\n\nlet { name, ...rest } = obj;\n')),(0,a.kt)("p",{parentName:"admonition"},"TypeScript\uc5d0\uc11c name\uc774\ub77c\ub294 \uc2dd\ubcc4\uc790\uac00 \ud0a4\uc6cc\ub4dc\ub85c \uc0ac\uc6a9\ub418\uace0 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4.",(0,a.kt)("br",null),"\nname\uc740 JavaScript\uc640 TypeScript\uc5d0\uc11c \ud2b9\ubcc4\ud55c \uc758\ubbf8\ub97c \uac16\ub294 \uc608\uc57d\uc5b4\ub85c \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'let obj: O = {\n  name: "JJamVa",\n  age: 27,\n  job: true,\n};\n\nlet { name: myName, ...rest } = obj;\n\nconsole.log(myName); // "JJamVa"\nconsole.log(rest); // {age:27, job:true}\n')),(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc640\uac19\uc774 name\uc5d0 \ub300\ud55c \uc0c8\ub85c\uc6b4 \ubcc0\uc218\uba85\uc744 \uc0dd\uc131\ud558\uc5ec \uac12\uc744 \ud560\ub2f9\ubc1b\ub294 \uac83\ub3c4 \ud558\ub098\uc758 \ubc29\ubc95\uc774\ub2e4.",(0,a.kt)("br",null),"\n\uacb0\ub860\uc801\uc73c\ub85c \uc5b4\ub5bb\uac8c \uc4f0\ub358 \ub3d9\uc791\uacfc\uc815\uc5d0\uc11c \ubb38\uc81c\ub294 \uc5c6\ub2e4.")))}m.isMDXComponent=!0}}]);