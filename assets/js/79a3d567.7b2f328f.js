(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),c=(a(0),a(246)),o=a(250),p=a(251),i={title:"Puppet Provider: Mock",sidebar_label:"Mock"},s={unversionedId:"puppet-providers/mock",id:"puppet-providers/mock",isDocsHomePage:!1,title:"Puppet Provider: Mock",description:"Wechaty Puppet Mock",source:"@site/docs/puppet-providers/mock.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/mock",permalink:"/docs/puppet-providers/mock",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/mock.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"Mock",frontMatter:{title:"Puppet Provider: Mock",sidebar_label:"Mock"},sidebar:"docs",previous:{title:"Puppet Provider: Service",permalink:"/docs/puppet-providers/service"},next:{title:"Puppet Provider: DIY",permalink:"/docs/puppet-providers/diy"}},u=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Mocker &amp; Environment",id:"mocker--environment",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Mocker",id:"mocker",children:[]}]},{value:"Example: unit testing for <code>math_master</code> game",id:"example-unit-testing-for-math_master-game",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],l={toc:u};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"mock"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Mock-blueviolet",alt:"Wechaty Puppet Mock"}))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-mock/HEAD/docs/images/mock.png",alt:"Wechaty Puppet Mock"})),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},Object(c.b)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Repo: ",Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock"},"https://github.com/wechaty/wechaty-puppet-mock")),Object(c.b)("li",{parentName:"ul"},"Support & Feedback: ",Object(c.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock/issues"},"https://github.com/wechaty/wechaty-puppet-mock/issues"))),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Help to test Wechaty framework with a mock puppet"),Object(c.b)("li",{parentName:"ol"},"Using as a starter template for write your own puppet provider")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)(o.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),Object(c.b)(p.a,{value:"mac",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),Object(c.b)(p.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nset WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n")))),Object(c.b)("h2",{id:"mocker--environment"},"Mocker & Environment"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),Object(c.b)("p",null,"See: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/blob/master/src/mock/environment.ts"},"SimpleEnvironment")),Object(c.b)("h2",{id:"api-reference"},"API Reference"),Object(c.b)("h3",{id:"mocker"},"Mocker"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { \n  PuppetMock,\n  mock,\n}                   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = new Wechaty({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),Object(c.b)("h2",{id:"example-unit-testing-for-math_master-game"},"Example: unit testing for ",Object(c.b)("inlineCode",{parentName:"h2"},"math_master")," game"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"math_master")," is a ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib"},"Wechaty Vorpal Contrib")," command which is a simple game for answering math questions that asked by a Wechaty bot."),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-vorpal-contrib/HEAD/docs/images/math-master.png",alt:"Math Master Wechaty Game"})),Object(c.b)("p",null,"You can read the unit testing script at: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts"},"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts")),Object(c.b)("h2",{id:"roadmap"},"Roadmap"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"to be added")),Object(c.b)("h2",{id:"history"},"History"),Object(c.b)("p",null,"See: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock#history"},"Project README")),Object(c.b)("h2",{id:"maintainers"},"Maintainers"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}m.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(a),b=r,h=l["".concat(o,".").concat(b)]||l[b]||m[b]||c;return a?n.a.createElement(h,p(p({ref:t},s),{},{components:a})):n.a.createElement(h,p({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<c;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},247:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},248:function(e,t,a){"use strict";var r=a(0),n=a(249);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},250:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(248),o=a(247),p=a(61),i=a.n(p);var s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,l=e.values,m=e.groupId,b=e.className,h=Object(c.a)(),d=h.tabGroupChoices,f=h.setTabGroupChoices,y=Object(r.useState)(p),v=y[0],O=y[1],g=r.Children.toArray(e.children),j=[];if(null!=m){var w=d[m];null!=w&&w!==v&&l.some((function(e){return e.value===w}))&&O(w)}var k=function(e){var t=e.currentTarget,a=j.indexOf(t),r=l[a].value;O(r),null!=m&&(f(m,r),setTimeout((function(){var e,a,r,n,c,o,p,s;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,c=e.right,o=window,p=o.innerHeight,s=o.innerWidth,a>=0&&c<=s&&n<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((function(){return t.classList.remove(i.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var r=j.indexOf(e.target)+1;a=j[r]||j[0];break;case s:var n=j.indexOf(e.target)-1;a=j[n]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},l.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:k,onClick:k},a)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},251:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}}}]);