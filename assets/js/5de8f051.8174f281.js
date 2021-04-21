(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(246)),o={title:"Publish blog"},c={unversionedId:"contributing/blog",id:"contributing/blog",isDocsHomePage:!1,title:"Publish blog",description:"Tricks",source:"@site/docs/contributing/blog.md",sourceDirName:"contributing",slug:"/contributing/blog",permalink:"/docs/contributing/blog",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/blog.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Publish blog"},sidebar:"docs",previous:{title:"Create pull requests",permalink:"/docs/contributing/pulls"},next:{title:"Write code",permalink:"/docs/contributing/coding"}},s=[{value:"Tricks",id:"tricks",children:[{value:"Hide A Post",id:"hide-a-post",children:[]},{value:"List on https://wechaty.js.org/news/",id:"list-on-httpswechatyjsorgnews",children:[]},{value:"Show Big Picture",id:"show-big-picture",children:[]}]},{value:"Minimizing images",id:"minimizing-images",children:[]},{value:"Submit Blog Post",id:"submit-blog-post",children:[]},{value:"Support",id:"support",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tricks"},"Tricks"),Object(a.b)("h3",{id:"hide-a-post"},"Hide A Post"),Object(a.b)("p",null,"If you do not want to list your post on the website,\nyou can add a ",Object(a.b)("inlineCode",{parentName:"p"},"published: false")," to the front matter YAML."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"published: false\n")),Object(a.b)("h3",{id:"list-on-httpswechatyjsorgnews"},"List on ",Object(a.b)("a",{parentName:"h3",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),Object(a.b)("p",null,"If a post has a tag named ",Object(a.b)("inlineCode",{parentName:"p"},"news"),"\nthen it will be shown at ",Object(a.b)("a",{parentName:"p",href:"https://wechaty.js.org/news/"},"https://wechaty.js.org/news/")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - news\n")),Object(a.b)("p",null,"All posts will be showed at ",Object(a.b)("a",{parentName:"p",href:"https://wechaty.js.org/blog/"},"https://wechaty.js.org/blog/")),Object(a.b)("h3",{id:"show-big-picture"},"Show Big Picture"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"tags:\n  - sticky\n")),Object(a.b)("h2",{id:"minimizing-images"},"Minimizing images"),Object(a.b)("p",null,"Optimize image compression where possible."),Object(a.b)("p",null,"Our limitation for an image is:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"file size maximum 1MB"),Object(a.b)("li",{parentName:"ol"},"file resolution maximum 1920x1080")),Object(a.b)("p",null,"For image files, use ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/fit-image.sh"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"./scripts/fit-image.sh jekyll/assets/2021/03-your-blog-folder/\n")),Object(a.b)("p",null,"This is based on ImageMagick."),Object(a.b)("h2",{id:"submit-blog-post"},"Submit Blog Post"),Object(a.b)("p",null,"Submit your blog by creating a Pull Request at ",Object(a.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts"},"https://github.com/wechaty/wechaty.js.org/tree/master/jekyll/_posts")),Object(a.b)("p",null,"Please make sure the CI turns green, and if the CI fail, you need to check the error messages and fix all the problems before we can continue processing it."),Object(a.b)("h2",{id:"support"},"Support"),Object(a.b)("p",null,"You can ",Object(a.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}b.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return n?i.a.createElement(g,c(c({ref:t},l),{},{components:n})):i.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);