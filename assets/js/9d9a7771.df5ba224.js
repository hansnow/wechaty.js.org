(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(246)),c={title:"Usage with Docker"},i={unversionedId:"tutorials/docker",id:"tutorials/docker",isDocsHomePage:!1,title:"Usage with Docker",description:"Docker Pulls",source:"@site/docs/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/docker.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Usage with Docker"},sidebar:"docs",previous:{title:"Video tutorial",permalink:"/docs/tutorials/video-tutorial"},next:{title:"Usage with Heroku",permalink:"/docs/tutorials/usage-with-heroku"}},l=[{value:"Getting Started with Docker",id:"getting-started-with-docker",children:[]},{value:"Docker Wechaty Getting Started",id:"docker-wechaty-getting-started",children:[]},{value:"Install Docker",id:"install-docker",children:[]},{value:"Run",id:"run",children:[{value:"Docker options explanation",id:"docker-options-explanation",children:[]},{value:"Run Examples",id:"run-examples",children:[]},{value:"Run Wechaty as a Hostie",id:"run-wechaty-as-a-hostie",children:[]}]},{value:"Onbuild",id:"onbuild",children:[]},{value:"Docker Intro",id:"docker-intro",children:[{value:"How to Install Docker",id:"how-to-install-docker",children:[]},{value:"Use Docker in China",id:"use-docker-in-china",children:[]}]},{value:"Build",id:"build",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Stars"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://microbadger.com/#/images/wechaty/wechaty"},Object(o.b)("img",{parentName:"a",src:"https://images.microbadger.com/badges/image/wechaty/wechaty.svg",alt:"Docker Layers"}))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},Object(o.b)("img",{parentName:"a",src:"http://dockeri.co/image/wechaty/wechaty",alt:"dockeri.co"}))),Object(o.b)("p",null,"Wechaty is fully dockerized. So it will be very easy to be used as a MicroService."),Object(o.b)("h2",{id:"getting-started-with-docker"},"Getting Started with Docker"),Object(o.b)("p",null,"Getting Started Template for Docker Users: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"https://github.com/wechaty/docker-wechaty-getting-started")),Object(o.b)("h2",{id:"docker-wechaty-getting-started"},"Docker Wechaty Getting Started"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/docker-wechaty-getting-started"},Object(o.b)("img",{parentName:"a",src:"https://avatars0.githubusercontent.com/u/5429470?s=200",alt:"Docker"}))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"https://github.com/wechaty/docker-wechaty-getting-started")),Object(o.b)("h2",{id:"install-docker"},"Install Docker"),Object(o.b)("p",null,"Quick & easy install Docker via:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.docker.com | sh\n")),Object(o.b)("p",null,"Or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://get.docker.com/ | sh\n")),Object(o.b)("p",null,"Get to know more about Docker at: ",Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/"},"https://www.docker.com/")),Object(o.b)("h2",{id:"run"},"Run"),Object(o.b)("p",null,"The best practice of using Wechaty Docker is like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ cat > mybot.ts <<'EOF'\nimport { Wechaty } from 'wechaty'\n\nWechaty.instance() // Singleton\n  .on('scan', (qrcode, status) => console.log(`Scan QrCode to login: ${status}\\n${qrcode}`))\n  .on('login',       user      => console.log(`User ${user} logined`))\n  .on('message',  message      => console.log(`Message: ${message}`))\n  .start()\nEOF\n\n$ function wechaty() {\n  docker run \\\n    -t -i --rm \\\n    --privileged \\\n    --network=host \\\n    -e WECHATY_LOG=\"$WECHATY_LOG\" \\\n    -e WECHATY_PUPPET=\"$WECHATY_PUPPET\" \\\n    -e WECHATY_TOKEN=\"$WECHATY_TOKEN\" \\\n    --mount type=bind,source=\"$(pwd)\",target=/bot \\\n    wechaty/wechaty:latest \\\n    \"$@\"\n}\n\n$ wechaty mybot.ts\n")),Object(o.b)("p",null,"see? death easy to use!"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You might want to confirm that you can download ",Object(o.b)("inlineCode",{parentName:"p"},"wechaty/wechaty")," image successfully by run ",Object(o.b)("inlineCode",{parentName:"p"},"docker pull wechaty/wechaty"),", and this command is also able to help you upgrade the image to the latest version.")),Object(o.b)("h3",{id:"docker-options-explanation"},"Docker options explanation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"-t")," : Allocate a pseudo-TTY"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"-i")," : Keep STDIN open even if not attached"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"--rm")," : Automatically remove the container when it exits"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"--privileged")," : Give extended privileges to this container"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"--network=host")," : use the Docker host network stack"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},'-e WECHATY_LOG="$WECHATY_LOG"')," : Pass the environment variable ",Object(o.b)("inlineCode",{parentName:"li"},"WECHATY_LOG")," into the container"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},'--volume="$(pwd)":/bot')," : Bind current directory(",Object(o.b)("inlineCode",{parentName:"li"},'"$(pwd)"'),") to '",Object(o.b)("inlineCode",{parentName:"li"},"/bot"),"' inside the container, by mounting the volume"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"--name=wechaty")," : Assign ",Object(o.b)("inlineCode",{parentName:"li"},"wechaty")," as the container name"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"wechaty/wechaty:latest")," : Image name on docker hub, here's our ",Object(o.b)("a",{parentName:"li",href:"https://hub.docker.com/r/wechaty/wechaty"},"wechaty/wechaty")," with ",Object(o.b)("inlineCode",{parentName:"li"},"latest")," version"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"mybot.js")," : File contains code wrote by you, should be placed in current directory ",Object(o.b)("inlineCode",{parentName:"li"},"./"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See Also: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/66"},"Dockerize Wechaty for easy start #66"))),Object(o.b)("h3",{id:"run-examples"},"Run Examples"),Object(o.b)("p",null,"There's many Wechaty ChatBot Examples in the ",Object(o.b)("inlineCode",{parentName:"p"},"example")," directory, and all of them are writen in TypeScript."),Object(o.b)("p",null,"Run example ChatBot is as easy as run hello world example above, as long as you are using Docker:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd example\nwechaty media-file-bot.ts\n")),Object(o.b)("p",null,"Bravo!"),Object(o.b)("h3",{id:"run-wechaty-as-a-hostie"},"Run Wechaty as a Hostie"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_TOKEN="your token here"\n\ndocker run -e WECHATY_TOKEN="$WECHATY_TOKEN" wechaty/wechaty\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"WECHATY_TOKEN")," is required here, because you need this key to managing wechaty on the chatbot cloud manager: ",Object(o.b)("a",{parentName:"p",href:"https://www.chatie.io"},"https://www.chatie.io")),Object(o.b)("h2",{id:"onbuild"},"Onbuild"),Object(o.b)("p",null,"Put this line(and only this line) to your ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dockerfile"},"FROM wechaty/onbuild\n")),Object(o.b)("p",null,"This image makes building derivative images easier. For most use cases, creating a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," in the base of your project directory with the line ",Object(o.b)("inlineCode",{parentName:"p"},"FROM wechaty/onbuild")," will be enough to create a stand-alone image for your project."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"onbuild"),' variant is really useful for "getting off the ground running" (zero to Dockerized in a short period of time)'),Object(o.b)("li",{parentName:"ol"},"This ",Object(o.b)("inlineCode",{parentName:"li"},"onbuild")," variant will only install npm packages according to the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")),Object(o.b)("li",{parentName:"ol"},"The npm installs devDependencies by default, which is undesirable if you're building a production image. To avoid this pass NODE_ENV as a build argument i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"docker build --build-arg NODE_ENV=production \u2026"),".")),Object(o.b)("h2",{id:"docker-intro"},"Docker Intro"),Object(o.b)("h3",{id:"how-to-install-docker"},"How to Install Docker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/getstarted/step_one/"},"Install Docker and run hello-world in 3 minutes"))),Object(o.b)("h3",{id:"use-docker-in-china"},"Use Docker in China"),Object(o.b)("p",null,"To be written..."),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t wechaty .\n")))}s.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(h,i(i({ref:t},b),{},{components:a})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);