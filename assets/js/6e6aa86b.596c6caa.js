(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{246:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||c;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},247:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},261:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(247),i=r(81),o=r.n(i);function l(e){var t=e.toc,r=e.isChild;return t.length?a.a.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(l,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return a.a.createElement("div",{className:Object(c.a)(o.a.tableOfContentsInline)},a.a.createElement(l,{toc:t}))}},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(246)),i=r(261),o={slug:"/api/",title:"Wechaty API reference overview",sidebar_label:"API: Overview"},l={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Wechaty API reference overview",description:"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you.",source:"@site/docs/api/overview.mdx",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/overview.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"API: Overview",frontMatter:{slug:"/api/",title:"Wechaty API reference overview",sidebar_label:"API: Overview"},sidebar:"docs",previous:{title:"Wechaty references overview",permalink:"/docs/references/"},next:{title:"Wechaty",permalink:"/docs/api/wechaty"}},s=[{value:"Top-level Exports",id:"top-level-exports",children:[{value:"Wechaty Class",id:"wechaty-class",children:[]},{value:"User Classes",id:"user-classes",children:[]}]},{value:"Importing",id:"importing",children:[{value:"ES6/TypeScript",id:"es6typescript",children:[]},{value:"ES5 (CommonJS)",id:"es5-commonjs",children:[]}]}],p=function(){return Object(c.b)(i.a,{toc:s,mdxType:"TOCInline"})},u={toc:s,Toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you."),Object(c.b)("p",null,"This section documents the complete Wechaty API."),Object(c.b)("h2",{id:"top-level-exports"},"Top-level Exports"),Object(c.b)("p",null,"Every class described below is a top-level export."),Object(c.b)("h3",{id:"wechaty-class"},"Wechaty Class"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./wechaty"},"Class Wechaty"))),Object(c.b)("h3",{id:"user-classes"},"User Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./message"},"Class Message")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./contact"},"Class Contact"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./contact-self"},"Class ContactSelf")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./room"},"Class Room"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./room-invitation"},"Class RoomInvitation")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./friendship"},"Class Friendship"))),Object(c.b)("h2",{id:"importing"},"Importing"),Object(c.b)("p",null,"You can import any of them like this:"),Object(c.b)("h3",{id:"es6typescript"},"ES6/TypeScript"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { Wechaty } from 'wechaty'\n")),Object(c.b)("h3",{id:"es5-commonjs"},"ES5 (CommonJS)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var Wechaty = require('wechaty').Wechaty\n")))}b.isMDXComponent=!0}}]);