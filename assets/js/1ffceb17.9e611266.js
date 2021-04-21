(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{128:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return p}));var n=t(3),l=t(7),r=(t(0),t(246)),o=t(250),c=t(251),s={title:"Processing files"},i={unversionedId:"howto/file-box",id:"howto/file-box",isDocsHomePage:!1,title:"Processing files",description:"Sending File",source:"@site/docs/howto/file-box.md",sourceDirName:"howto",slug:"/howto/file-box",permalink:"/docs/howto/file-box",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/file-box.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Processing files"},sidebar:"docs",previous:{title:"Making friends",permalink:"/docs/howto/friendship"},next:{title:"Writing tests",permalink:"/docs/howto/testing"}},u=[{value:"Sending File",id:"sending-file",children:[]},{value:"Receiving File",id:"receiving-file",children:[]},{value:"About <code>FileBox</code>",id:"about-filebox",children:[]}],b={toc:u};function p(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sending-file"},"Sending File"),Object(r.b)(o.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { FileBox } from 'wechaty'\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { FileBox } = require('wechaty')\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(c.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"from wechaty import FileBox\n\nfileBox = FileBox.from_url('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),Object(r.b)(c.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"scala",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(r.b)("h2",{id:"receiving-file"},"Receiving File"),Object(r.b)(o.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage (message: Message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage (message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),Object(r.b)(c.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"from wechaty_puppet import FileBox\nfrom wechaty import Wechaty, Contact, Message\n\nclass MyBot(Wechaty):\n    async def on_message(self, msg: Message):\n        if msg.type() == MessageType.MESSAGE_TYPE_IMAGE:\n            image_file_box = await msg.to_file_box()\n            print(f'saving file<{image_file_box.name}>')\n            await image_file_box.to_file('/path/to/local/file')\n"))),Object(r.b)(c.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"scala",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(r.b)(c.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(r.b)("h2",{id:"about-filebox"},"About ",Object(r.b)("inlineCode",{parentName:"h2"},"FileBox")),Object(r.b)("p",null,"Learn more about how to use ",Object(r.b)("inlineCode",{parentName:"p"},"FileBox")," module by reading its document at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/huan/file-box"},"https://github.com/huan/file-box")))}p.isMDXComponent=!0},246:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return f}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),u=function(e){var a=l.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=u(e.components);return l.a.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(t),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return t?l.a.createElement(f,c(c({ref:a},i),{},{components:t})):l.a.createElement(f,c({ref:a},i))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<r;i++)o[i]=t[i];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},247:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},248:function(e,a,t){"use strict";var n=t(0),l=t(249);a.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,a,t){"use strict";var n=t(0),l=Object(n.createContext)(void 0);a.a=l},250:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(248),o=t(247),c=t(61),s=t.n(c);var i=37,u=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,f=Object(r.a)(),g=f.tabGroupChoices,d=f.setTabGroupChoices,O=Object(n.useState)(c),v=O[0],y=O[1],j=n.Children.toArray(e.children),h=[];if(null!=p){var T=g[p];null!=T&&T!==v&&b.some((function(e){return e.value===T}))&&y(T)}var x=function(e){var a=e.currentTarget,t=h.indexOf(a),n=b[t].value;y(n),null!=p&&(d(p,n),setTimeout((function(){var e,t,n,l,r,o,c,i;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,r=e.right,o=window,c=o.innerHeight,i=o.innerWidth,t>=0&&r<=i&&l<=c&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s.a.tabItemActive),setTimeout((function(){return a.classList.remove(s.a.tabItemActive)}),2e3))}),150))},w=function(e){var a,t;switch(e.keyCode){case u:var n=h.indexOf(e.target)+1;t=h[n]||h[0];break;case i:var l=h.indexOf(e.target)-1;t=h[l]||h[h.length-1]}null===(a=t)||void 0===a||a.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var a=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return h.push(e)},onKeyDown:w,onFocus:x,onClick:x},t)}))),a?Object(n.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},251:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}}}]);