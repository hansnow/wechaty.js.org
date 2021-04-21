(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{246:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||a;return r?c.a.createElement(m,i(i({ref:t},s),{},{components:r})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},247:function(e,t,r){"use strict";function n(e){var t,r,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(c&&(c+=" "),c+=r);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,r=0,c="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},261:function(e,t,r){"use strict";var n=r(0),c=r.n(n),a=r(247),o=r(81),i=r.n(o);function l(e){var t=e.toc,r=e.isChild;return t.length?c.a.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),c.a.createElement(l,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c.a.createElement("div",{className:Object(a.a)(i.a.tableOfContentsInline)},c.a.createElement(l,{toc:t}))}},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(7),a=(r(0),r(246)),o=r(261),i={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},l={unversionedId:"specs/overview",id:"specs/overview",isDocsHomePage:!1,title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/overview.mdx",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"Specs: Overview",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Service: DIY",permalink:"/docs/puppet-services/diy"},next:{title:"Polyglot Wechaty",permalink:"/docs/specs/wechaty"}},s=[{value:"Table of Content",id:"table-of-content",children:[]}],p=function(){return Object(a.b)(o.a,{toc:s,mdxType:"TOCInline"})},u={toc:s,Toc:p};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),Object(a.b)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),Object(a.b)("h2",{id:"table-of-content"},"Table of Content"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/specs/wechaty"},"Polygram Wechaty"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Polygram Wechaty"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/specs/service"},"Wechaty Puppet Service"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Wechaty Puppet Service"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/specs/token"},"Wechaty Puppet Service Token"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}b.isMDXComponent=!0}}]);