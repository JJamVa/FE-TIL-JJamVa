"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8810],{489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"frontend/React Native/\ubbf8\ub514\uc5b4&\uc0c1\ud638\uc791\uc6a9","title":"Media & interactive Components","description":"Image","source":"@site/docs/frontend/13-React Native/3-\ubbf8\ub514\uc5b4&\uc0c1\ud638\uc791\uc6a9.md","sourceDirName":"frontend/13-React Native","slug":"/frontend/React Native/\ubbf8\ub514\uc5b4&\uc0c1\ud638\uc791\uc6a9","permalink":"/FE-TIL-JJamVa/docs/frontend/React Native/\ubbf8\ub514\uc5b4&\uc0c1\ud638\uc791\uc6a9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"frontend","previous":{"title":"Layout & input/output Components","permalink":"/FE-TIL-JJamVa/docs/frontend/React Native/\ub808\uc774\uc544\uc6c3&\uc785\ucd9c\ub825"},"next":{"title":"Button Components","permalink":"/FE-TIL-JJamVa/docs/frontend/React Native/\ubc84\ud2bc"}}');var s=t(6070),l=t(989);const i={},c="Media & interactive Components",d={},x=[{value:"Image",id:"image",level:2},{value:"Image \uc18d\uc131 \uc815\ub9ac",id:"image-\uc18d\uc131-\uc815\ub9ac",level:3},{value:"ImageBackground",id:"imagebackground",level:2},{value:"TouchableWithoutFeedback",id:"touchablewithoutfeedback",level:2},{value:"TouchableWithoutFeedback \uc18d\uc131 \uc815\ub9ac",id:"touchablewithoutfeedback-\uc18d\uc131-\uc815\ub9ac",level:3},{value:"Modal",id:"modal",level:2},{value:"Modal \uc18d\uc131 \uc815\ub9ac",id:"modal-\uc18d\uc131-\uc815\ub9ac",level:3},{value:"ActivityIndicator",id:"activityindicator",level:2},{value:"ActivityIndicator \uc18d\uc131 \uc815\ub9ac",id:"activityindicator-\uc18d\uc131-\uc815\ub9ac",level:3}];function h(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"media--interactive-components",children:"Media & interactive Components"})}),"\n",(0,s.jsx)(n.h2,{id:"image",children:"Image"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubbf8\uc9c0\ub97c \ud45c\uc2dc\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsx)(n.li,{children:"uri\ub97c \uc774\uc6a9\ud55c \ub124\ud2b8\uc6cc\ud06c \uc774\ubbf8\uc9c0 \ub85c\ub4dc \ubc0f \ub85c\uceec \uc774\ubbf8\uc9c0 \uc9c0\uc6d0"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resizeMode"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \ud06c\uae30 \uc870\uc808 \uac00\ub2a5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ub124\ud2b8\uc6cc\ud06c(API\ud1b5\uc2e0\uc744 \ud1b5\ud55c \uc774\ubbf8\uc9c0 \ud638\ucd9c) \ubc0f \ub85c\uceec \uc774\ubbf8\uc9c0"})," \uc9c0\uc6d0"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { Image, View } from "react-native";\r\nimport cat from "./assets/cat.jpg";\r\n\r\nexport default function App() {\r\n  return (\r\n    <View style={{ flex: 1 }}>\r\n      <Image source={cat} style={{ width: 200, height: 200 }} />\r\n    </View>\r\n  );\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="src/types/image.d.ts"',children:'declare module "*.jpg";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/50732ef6-c2d3-46ea-be67-4c6743c50223",alt:"Image"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Image\uc758 source\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc9c4\uc744 \ubd88\ub7ec\uc628\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nsource\uc5d0\ub294 \ub85c\uceec \uc774\ubbf8\uc9c0, API\ud1b5\uc2e0\uc744 \ud1b5\ud55c \uc774\ubbf8\uc9c0 \ud638\ucd9c\ub3c4 \uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\ub85c\uceec \uc774\ubbf8\uc9c0\ub97c \ud638\ucd9c \ud558\ub294 \ub2e4\ub978 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 ",(0,s.jsx)(n.code,{children:"require"}),"\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc774\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Image, View } from "react-native";\r\n\r\nexport default function App() {\r\n  return (\r\n    <View style={{ flex: 1 }}>\r\n      <Image\r\n        source={require("./assets/cat.png")}\r\n        style={{ width: 200, height: 200 }}\r\n      />\r\n    </View>\r\n  );\r\n}\n'})}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.p,{children:["React Native\uc758 TypeScript\ubc84\uc804\uc740 \uc774\ubbf8\uc9c0 \ud655\uc7a5\uc790\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0",(0,s.jsx)(n.br,{}),"\r\n\uac01 \ud655\uc7a5\uc790\uc5d0 \ub300\ud574 ",(0,s.jsx)(n.strong,{children:"\ud0c0\uc785 \ubaa8\ub4c8\uc744 \uc120\uc5b8"}),"\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ud574\uacb0\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(n.br,{})]})]}),"\n",(0,s.jsx)(n.h3,{id:"image-\uc18d\uc131-\uc815\ub9ac",children:"Image \uc18d\uc131 \uc815\ub9ac"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc18d\uc131"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc124\uba85"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uae30\ubcf8\uac12"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"source"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"{ uri: string }"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:'require("path")'})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \uc18c\uc2a4 \uc9c0\uc815 (\ub124\ud2b8\uc6cc\ud06c \ub610\ub294 \ub85c\uceec)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"resizeMode"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:'"cover"'})," ",(0,s.jsx)(n.code,{children:'"contain"'})," ",(0,s.jsx)(n.code,{children:'"stretch"'})," ",(0,s.jsx)(n.code,{children:'"repeat"'})," ",(0,s.jsx)(n.code,{children:'"center"'})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \ud06c\uae30 \uc870\uc808 \ubc29\uc2dd"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:'"cover"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"style"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"StyleProp<ImageStyle>"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc2a4\ud0c0\uc77c \uc801\uc6a9 (width, height \ud544\uc218)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onLoad"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0\uac00 \ub85c\ub4dc\ub420 \ub54c \uc2e4\ud589\ud560 \ud568\uc218"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onError"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"(error) => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc2e4\ud328 \uc2dc \uc2e4\ud589\ud560 \ud568\uc218"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onLoadStart"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc2dc\uc791 \uc2dc \uc2e4\ud589\ud560 \ud568\uc218"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onLoadEnd"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc644\ub8cc \ud6c4 \uc2e4\ud589\ud560 \ud568\uc218"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onProgress"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"(event) => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ub85c\ub4dc \uc911\uc778 \uc774\ubbf8\uc9c0\uc758 \uc9c4\ud589 \uc0c1\ud0dc \ubc18\ud658"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"fadeDuration"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Android\uc5d0\uc11c \uc774\ubbf8\uc9c0\uac00 \ub85c\ub4dc\ub420 \ub54c\uc758 \ud398\uc774\ub4dc \ud6a8\uacfc (ms)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"300"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"defaultSource"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"ImageSourcePropType"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ub85c\ub4dc\ub418\uae30 \uc804 \ud45c\uc2dc\ud560 \uae30\ubcf8 \uc774\ubbf8\uc9c0 (iOS)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"blurRadius"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ube14\ub7ec \ud6a8\uacfc \uc801\uc6a9 (\uc22b\uc790\uac00 \ud074\uc218\ub85d \ud750\ub824\uc9d0)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"tintColor"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0 \uc0c9\uc0c1 \ud544\ud130 \uc801\uc6a9"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"resizeMode \uc18d\uc131 \uac12 \uc124\uba85"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uac12"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"cover"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc6d0\ubcf8 \ube44\uc728\uc744 \uc720\uc9c0\ud558\uba74\uc11c \ucee8\ud14c\uc774\ub108\ub97c \ucc44\uc6c0 (\uc798\ub9b4 \uc218 \uc788\uc74c)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"contain"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc6d0\ubcf8 \ube44\uc728\uc744 \uc720\uc9c0\ud558\uba74\uc11c \ucee8\ud14c\uc774\ub108 \ub0b4\uc5d0 \ub9de\ucda4 (\uc798\ub9ac\uc9c0 \uc54a\uc74c)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"stretch"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc6d0\ubcf8 \ube44\uc728\uc744 \ubb34\uc2dc\ud558\uace0 \ucee8\ud14c\uc774\ub108\uc5d0 \ub9de\ucda4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"center"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc6d0\ubcf8 \ud06c\uae30\ub97c \uc720\uc9c0\ud558\uba70 \uc911\uc559 \uc815\ub82c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"repeat"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc774\ubbf8\uc9c0\uac00 \ubc18\ubcf5\ub418\ub3c4\ub85d \uc124\uc815 (iOS only)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"imagebackground",children:"ImageBackground"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uc774\ubbf8\uc9c0\ub97c \ubc30\uacbd\uc73c\ub85c \uc124\uc815\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsxs)(n.li,{children:["Image\uc640 \ub2e4\ub974\uac8c ",(0,s.jsx)(n.code,{children:"children"}),"\uc744 \ud3ec\ud568 \uac00\ub2a5"]}),"\n",(0,s.jsxs)(n.li,{children:["Image\uc640 \uac19\uc774 ",(0,s.jsx)(n.code,{children:"resizeMode"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \ud06c\uae30 \uc870\uc808 \uac00\ub2a5"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { ImageBackground, SafeAreaView, Text } from "react-native";\r\nimport cat from "./assets/cat.jpg";\r\n\r\nexport default function App() {\r\n  return (\r\n    <SafeAreaView\r\n      style={{\r\n        flex: 1,\r\n      }}\r\n    >\r\n      <ImageBackground source={cat} style={{ flex: 1 }}>\r\n        <Text style={{ color: "yellow", fontSize: 30 }}>Cat is Cute</Text>\r\n      </ImageBackground>\r\n    </SafeAreaView>\r\n  );\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="src/types/image.d.ts"',children:'declare module "*.jpg";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/84952cd8-0055-4312-b795-7e17ebe9aeb0",alt:"Image"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Image>"}),"\ud0dc\uadf8\uc640 \ub2e4\ub974\uac8c ",(0,s.jsx)(n.code,{children:"<ImageBackground>"}),"\ud0dc\uadf8\ub294 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\uc744 \ud558\uba70,",(0,s.jsx)(n.br,{}),"\r\n\ud558\uc704 \ud0dc\uadf8\uc5d0 \ub2e4\ub978 \ud0dc\uadf8\ub97c \uc0ac\uc6a9\uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsxs)(n.p,{children:["Image\uc5d0\uc11c \uc791\uc131\ub41c \uc18d\uc131\uacfc \ub3d9\uc77c\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,s.jsx)(n.br,{})]})]}),"\n",(0,s.jsx)(n.h2,{id:"touchablewithoutfeedback",children:"TouchableWithoutFeedback"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uac10\uc9c0\ud558\uc9c0\ub9cc, \uae30\ubcf8\uc801\uc778 \ud53c\ub4dc\ubc31(\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc \ub4f1)\uc740 \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud0a4\ubcf4\ub4dc \uc228\uae30\uae30"}),", ",(0,s.jsx)(n.strong,{children:"\ubaa8\ub2ec \uc678\ubd80 \ud074\ub9ad \uac10\uc9c0"})," \ub4f1\uc5d0 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import {\r\n  View,\r\n  Image,\r\n  SafeAreaView,\r\n  TouchableWithoutFeedback,\r\n} from "react-native";\r\n\r\nexport default function App() {\r\n  return (\r\n    <SafeAreaView style={{ flex: 1 }}>\r\n      <TouchableWithoutFeedback\r\n        onPress={() => console.log("\uc774\ubbf8\uc9c0 \uc678\ubd80 \ud074\ub9ad!")}\r\n      >\r\n        <View\r\n          style={{\r\n            flex: 1,\r\n            justifyContent: "center",\r\n            alignItems: "center",\r\n          }}\r\n        >\r\n          <TouchableWithoutFeedback onPress={() => console.log("\uc774\ubbf8\uc9c0 \ud074\ub9ad!")}>\r\n            <Image\r\n              source={require("./assets/cat.jpg")}\r\n              style={{ width: "50%", height: "50%" }}\r\n            />\r\n          </TouchableWithoutFeedback>\r\n        </View>\r\n      </TouchableWithoutFeedback>\r\n    </SafeAreaView>\r\n  );\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/c51b2bb1-006a-4ef9-884e-af04856f166b",alt:"Image"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud560 \uacbd\uc6b0, ",(0,s.jsx)(n.code,{children:"\uc774\ubbf8\uc9c0 \ud074\ub9ad!"}),"\uc774 \ucd9c\ub825,",(0,s.jsx)(n.br,{}),"\r\n\uc774\ubbf8\uc9c0 \ubc16\uc744 \ud074\ub9ad\ud560 \uacbd\uc6b0, ",(0,s.jsx)(n.code,{children:"\uc774\ubbf8\uc9c0 \uc678\ubd80 \ud074\ub9ad!"}),"\uc774 \ucd9c\ub825\ub41c\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TouchableWithoutFeedback"}),"\uc744 \uc774\uc6a9\ud558\uc5ec \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc601\uc5ed\ub9c8\ub2e4 \uac10\uc2f8\uc8fc\uba74 \ub41c\ub2e4.",(0,s.jsx)(n.br,{})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { useState } from "react";\r\nimport {\r\n  View,\r\n  SafeAreaView,\r\n  TouchableWithoutFeedback,\r\n  TextInput,\r\n  Keyboard,\r\n  Text,\r\n} from "react-native";\r\n\r\nexport default function App() {\r\n  const [text, setText] = useState<string>("");\r\n\r\n  return (\r\n    <SafeAreaView style={{ flex: 1 }}>\r\n      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>\r\n        <View\r\n          style={{\r\n            flex: 1,\r\n            justifyContent: "center",\r\n            alignItems: "center",\r\n            gap: 10,\r\n          }}\r\n        >\r\n          <TouchableWithoutFeedback>\r\n            <TextInput\r\n              placeholder="\uac12 \uc785\ub825"\r\n              onChangeText={(e) => setText(e)}\r\n              style={{\r\n                width: "50%",\r\n                borderWidth: 2,\r\n                borderColor: "#3498db",\r\n                borderRadius: 8,\r\n              }}\r\n            />\r\n          </TouchableWithoutFeedback>\r\n          <Text>{text}</Text>\r\n        </View>\r\n      </TouchableWithoutFeedback>\r\n    </SafeAreaView>\r\n  );\r\n}\n'})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/2f2a8371-94a5-4396-be0c-78191590af01",alt:"Image"})}),(0,s.jsxs)(n.p,{children:["TextInput\uc744 \uc81c\uc678\ud55c \ub098\uba38\uc9c0 \uc601\uc5ed\uc744 TouchableWithoutFeedback\uc73c\ub85c \uac10\uc2fc \ud6c4,",(0,s.jsx)(n.br,{}),"\r\nonPress\uc5d0 ",(0,s.jsx)(n.code,{children:"Keyboard.dismiss"}),"\ub97c \uc124\uc815\ud558\uba74,",(0,s.jsx)(n.br,{}),"\r\n\uc0ac\uc6a9\uc790\uac00 TextInput \uc678\ubd80\ub97c \ud130\uce58\ud560 \ub54c \ud0a4\ubcf4\ub4dc\uac00 \uc790\ub3d9\uc73c\ub85c \ub2eb\ud78c\ub2e4."]}),(0,s.jsxs)(n.p,{children:["\ub2e8, TouchableWithoutFeedback\uc73c\ub85c \uac10\uc2f8\ub354\ub77c\ub3c4 \ub0b4\ubd80 \uc694\uc18c(TextInput)\uac00",(0,s.jsx)(n.br,{}),"\r\n\ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uacc4\uc18d \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d accessible={false} \ub97c \ucd94\uac00\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.",(0,s.jsx)(n.br,{})]})]}),"\n",(0,s.jsx)(n.h3,{id:"touchablewithoutfeedback-\uc18d\uc131-\uc815\ub9ac",children:"TouchableWithoutFeedback \uc18d\uc131 \uc815\ub9ac"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc18d\uc131\uba85"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onPress"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ud130\uce58 \uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc \uc2e4\ud589\ud560 \ud568\uc218"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"accessible"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"false"}),"\ub85c \uc124\uc815\ud558\uba74 \ub0b4\ubd80 \uc694\uc18c\uac00 \uc811\uadfc\uc131 \uc694\uc18c\ub85c \uc778\uc2dd\ub418\uc9c0 \uc54a\uc74c (\uc774\ubca4\ud2b8 \ubc29\ud574 \ubc29\uc9c0)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"disabled"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"true"}),"\uc774\uba74 \ud130\uce58 \uc774\ubca4\ud2b8\uac00 \ube44\ud65c\uc131\ud654\ub428"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"hitSlop"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"{ top, left, bottom, right }"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ud130\uce58 \uc601\uc5ed\uc744 \ud655\uc7a5\ud558\uac70\ub098 \ucd95\uc18c\ud560 \uc218 \uc788\uc74c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onPressIn"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ud130\uce58\uac00 \uc2dc\uc791\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \ud568\uc218"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onPressOut"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ud130\uce58\uac00 \ub05d\ub0ac\uc744 \ub54c \uc2e4\ud589\ub418\ub294 \ud568\uc218"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"keyboardShouldPersistTaps"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:'"always"'})," ",(0,s.jsx)(n.code,{children:'"handled"'})," ",(0,s.jsx)(n.code,{children:'"never"'})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:'"never"'})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ud130\uce58 \uc2dc \ud0a4\ubcf4\ub4dc \uc720\uc9c0 \uc5ec\ubd80 \uc124\uc815"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"modal",children:"Modal"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React Native\uc5d0\uc11c \ud654\uba74 \uc704\uc5d0 \uc0c8\ub85c\uc6b4 \ubdf0\ub97c \ub744\uc6b0\ub294 \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsx)(n.li,{children:"\ud31d\uc5c5, \ub2e4\uc774\uc5bc\ub85c\uadf8, \uc54c\ub9bc\ucc3d \ub4f1\uc744 \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { useState } from "react";\r\nimport {\r\n  Modal,\r\n  View,\r\n  Image,\r\n  Button,\r\n  SafeAreaView,\r\n  TouchableWithoutFeedback,\r\n} from "react-native";\r\n\r\nexport default function App() {\r\n  const [modalVisible, setModalVisible] = useState(false);\r\n\r\n  return (\r\n    <SafeAreaView\r\n      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}\r\n    >\r\n      <Button title="\ubaa8\ub2ec \uc5f4\uae30" onPress={() => setModalVisible(true)} />\r\n      <Modal visible={modalVisible} animationType="slide" transparent={true}>\r\n        <TouchableWithoutFeedback\r\n          onPress={() => setModalVisible(!modalVisible)}\r\n        >\r\n          <View\r\n            style={{\r\n              flex: 1,\r\n              backgroundColor: "rgba(0,0,0,0.5)",\r\n              justifyContent: "center",\r\n              alignItems: "center",\r\n            }}\r\n          >\r\n            <TouchableWithoutFeedback>\r\n              <Image\r\n                source={require("./assets/cat.jpg")}\r\n                style={{ width: "50%", height: "50%" }}\r\n              />\r\n            </TouchableWithoutFeedback>\r\n          </View>\r\n        </TouchableWithoutFeedback>\r\n      </Modal>\r\n    </SafeAreaView>\r\n  );\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/b604bab9-a4de-4bce-acf8-f80148522955",alt:"Image"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Modal\uc758 ",(0,s.jsx)(n.code,{children:"\uc5f4\ub9bc/\ub2eb\ud798"}),"\uc744 \uad00\ub9ac\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(n.code,{children:"useState"}),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\nModal\uc740 React Native\uc758 ",(0,s.jsx)(n.strong,{children:"\ucd5c\uc0c1\uc758 \ubdf0\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ub3c5\ub9bd\uc801\uc778 \ucef4\ud3ec\ub10c\ud2b8"}),"\uc774\uae30 \ub54c\ubb38\uc5d0",(0,s.jsx)(n.br,{}),"\r\nButton\uacfc \uac19\uc740 \uc704\uce58\uc5d0 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ub3c4 \ub3d9\uc791\uc5d0 \ubb38\uc81c\uac00 \uc5c6\ub2e4.",(0,s.jsx)(n.br,{})]}),(0,s.jsxs)(n.p,{children:["Modal\uc774 \uc5f4\ub9b0 \ud6c4, Image\uc601\uc5ed \uc678\uc758 \ubc30\uacbd\uc744 \ud074\ub9ad\ud558\uba74 Modal\uc774 \ub2eb\ud788\ub3c4\ub85d ",(0,s.jsx)(n.code,{children:"TouchableWithoutFeedback"}),"\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\uc774\ub54c, TouchableWithoutFeedback\uc744 \uc911\ucca9\ud558\uc5ec \uc774\ubbf8\uc9c0 \ud074\ub9ad \uc2dc\uc5d0\ub294 \ub2eb\ud788\uc9c0 \uc54a\ub3c4\ub85d \ucc98\ub9ac\ud588\ub2e4."]})]}),"\n",(0,s.jsx)(n.h3,{id:"modal-\uc18d\uc131-\uc815\ub9ac",children:"Modal \uc18d\uc131 \uc815\ub9ac"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc18d\uc131\uba85"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"visible"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ubaa8\ub2ec \ud45c\uc2dc \uc5ec\ubd80"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"animationType"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:'"none"'})," ",(0,s.jsx)(n.code,{children:'"slide"'})," ",(0,s.jsx)(n.code,{children:'"fade"'})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"none"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ubaa8\ub2ec\uc774 \uc5f4\ub9b4 \ub54c \uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"transparent"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\ubaa8\ub2ec \ubc30\uacbd\uc744 \ud22c\uba85\ud558\uac8c \uc124\uc815"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"onRequestClose"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\uc548\ub4dc\ub85c\uc774\ub4dc\uc5d0\uc11c \ub4a4\ub85c \uac00\uae30 \ubc84\ud2bc\uc744 \ub20c\ub800\uc744 \ub54c \uc2e4\ud589"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"presentationStyle"})}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:'"fullScreen"'})," ",(0,s.jsx)(n.code,{children:'"pageSheet"'})," ",(0,s.jsx)(n.code,{children:'"formSheet"'})," ",(0,s.jsx)(n.code,{children:'"overFullScreen"'})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"fullScreen"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"iOS\uc5d0\uc11c \ubaa8\ub2ec \uc2a4\ud0c0\uc77c \uc9c0\uc815"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"activityindicator",children:"ActivityIndicator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub85c\ub529 \uc0c1\ud0dc\ub97c \ud45c\uc2dc\ud558\ub294 \uae30\ubcf8\uc801\uc778 UI \ucef4\ud3ec\ub10c\ud2b8"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\uc2e4\uc81c \ub85c\ub529\uc744 \ud45c\ud604\ud558\ub294 \uac83\uc774 \uc544\ub2cc \uc2dc\uac01\uc801\uc778 \ud53c\ub4dc\ubc31\ub9cc \uc81c\uacf5"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { useState } from "react";\r\nimport { ActivityIndicator, View, Button } from "react-native";\r\n\r\nexport default function App() {\r\n  const [loading, setLoading] = useState(false);\r\n\r\n  return (\r\n    <View\r\n      style={{\r\n        flex: 1,\r\n        justifyContent: "center",\r\n        alignItems: "center",\r\n        gap: 20,\r\n      }}\r\n    >\r\n      <View style={{ flexDirection: "row", gap: 20 }}>\r\n        <Button title="\ub85c\ub529 \uc2dc\uc791" onPress={() => setLoading(true)} />\r\n        <Button title="\ub85c\ub529 \uc885\ub8cc" onPress={() => setLoading(false)} />\r\n      </View>\r\n      {loading && <ActivityIndicator size={100} color="pink" />}\r\n    </View>\r\n  );\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/user-attachments/assets/266b03d8-2f36-4365-9d80-875353fd2b7d",alt:"Image"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\uc704\uc758 \uc2e4\ud589 \ud654\uba74\uacfc \uac19\uc774 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub85c\ub529 \uc911\uc784\uc744 \uc2dc\uac01\uc801\uc73c\ub85c \uc804\ub2ec\ud55c\ub2e4.",(0,s.jsx)(n.br,{}),"\r\n\ub530\ub77c\uc11c, \ub370\uc774\ud130 \ub85c\ub529\uc744 \ud45c\ud604\ud574\uc57c\ud560 \uacbd\uc6b0 ",(0,s.jsx)(n.code,{children:"useState"})," \ub4f1\uc744 \ud65c\uc6a9\ud558\uc5ec \ub85c\ub529 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba74\uc11c \ud45c\uc2dc\ud574\uc57c \ud55c\ub2e4.",(0,s.jsx)(n.br,{})]})}),"\n",(0,s.jsx)(n.h3,{id:"activityindicator-\uc18d\uc131-\uc815\ub9ac",children:"ActivityIndicator \uc18d\uc131 \uc815\ub9ac"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\uc18d\uc131\uba85"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"animating"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"}),"\uc77c \uacbd\uc6b0 \uc560\ub2c8\uba54\uc774\uc158 \ud65c\uc131\ud654"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"size"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"small"'})," ",(0,s.jsx)(n.code,{children:'"large"'})," \ud639\uc740 ",(0,s.jsx)(n.code,{children:"number"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"small"'})}),(0,s.jsx)(n.td,{children:"\uc778\ub514\ucf00\uc774\ud130 \ud06c\uae30 \uc124\uc815"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"color"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gray"})}),(0,s.jsx)(n.td,{children:"\uc778\ub514\ucf00\uc774\ud130 \uc0c9\uc0c1 \uc9c0\uc815"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"hidesWhenStopped"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"animating=false"}),"\uc77c \ub54c \uc790\ub3d9\uc73c\ub85c \uc228\uae40"]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},989:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(758);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);