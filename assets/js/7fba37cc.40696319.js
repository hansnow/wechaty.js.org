(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(246)),r={title:"Working with git"},c={unversionedId:"contributing/git",id:"contributing/git",isDocsHomePage:!1,title:"Working with git",description:"This section explains how the community can contribute code to Wechaty via pull",source:"@site/docs/contributing/git.md",sourceDirName:"contributing",slug:"/contributing/git",permalink:"/docs/contributing/git",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/git.md",version:"current",lastUpdatedBy:"Leo_chen",lastUpdatedAt:1618969134,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Working with git"},sidebar:"docs",previous:{title:"Write code",permalink:"/docs/contributing/coding"},next:{title:"File issues",permalink:"/docs/contributing/issues"}},s=[{value:"Installing Git",id:"installing-git",children:[]},{value:"Setting up local repository",id:"setting-up-local-repository",children:[]},{value:"Working on an issue",id:"working-on-an-issue",children:[]},{value:"Publishing work",id:"publishing-work",children:[]},{value:"Rebasing branches",id:"rebasing-branches",children:[]},{value:"After upstream has changed",id:"after-upstream-has-changed",children:[]},{value:"After review",id:"after-review",children:[]},{value:"Working on a patch",id:"working-on-a-patch",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section explains how the community can contribute code to Wechaty via pull\nrequests. If you're interested in how committers handle them, see\n",Object(i.b)("a",{parentName:"p",href:"/docs/contributing/pulls"},"committing code"),"."),Object(i.b)("p",null,"Below, we are going to show how to create a GitHub pull request containing the\nchanges for issue #xxxxx. By creating a fully-ready pull request, you\nwill make the reviewer's job easier, meaning that your work is more likely to\nbe merged into Wechaty."),Object(i.b)("h2",{id:"installing-git"},"Installing Git"),Object(i.b)("p",null,"Wechaty uses ",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," for its source control.\nYou can ",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/download"},"download")," Git,\nbut it's often easier to install with\nyour operating system's package manager."),Object(i.b)("p",null,"Wechaty's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/"},"Git repository")," is hosted on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),",\nand it is recommended that you also work using GitHub."),Object(i.b)("p",null,"After installing Git, the first thing you should do is setup your name and\nemail:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'git config --global user.name "Your Real Name"\ngit config --global user.email "you@email.com"\n')),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"user.name")," should be your real name, not your GitHub nick. GitHub\nshould know the email you use in the ",Object(i.b)("inlineCode",{parentName:"p"},"user.email")," field, as this will be\nused to associate your commits with your GitHub account."),Object(i.b)("h2",{id:"setting-up-local-repository"},"Setting up local repository"),Object(i.b)("p",null,'When you have created your GitHub account, with the nick "GitHub_nick", and\n',Object(i.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/fork"},"forked Wechaty's repository"),",\ncreate a local copy of your fork:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GitHub_nick/wechaty.git\n")),Object(i.b)("p",null,'This will create a new directory "wechaty", containing a clone of your GitHub\nrepository. The rest of the git commands on this page need to be run within the\ncloned directory, so switch to it now:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd wechaty\n")),Object(i.b)("p",null,'Your GitHub repository will be called "origin" in Git.'),Object(i.b)("p",null,"You should also setup ",Object(i.b)("inlineCode",{parentName:"p"},"wechaty/wechaty"),' as an "upstream" remote (that is, tell\ngit that the reference Wechaty repository was the source of your fork of it):'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:wechaty/wechaty.git\ngit fetch upstream\n")),Object(i.b)("p",null,"You can add other remotes similarly, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git remote add huan git@github.com:huan/wechaty.git\n")),Object(i.b)("h2",{id:"working-on-an-issue"},"Working on an issue"),Object(i.b)("p",null,"When working on an issue, create a new branch for the work, and base that work\non ",Object(i.b)("inlineCode",{parentName:"p"},"upstream/main"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git checkout -b ticket_xxxxx upstream/main\n")),Object(i.b)("p",null,"The -b flag creates a new branch for you locally. Don't hesitate to create new\nbranches even for the smallest things - that's what they are there for."),Object(i.b)("p",null,"If instead you were working for a fix on the 1.4 branch, you would do:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git checkout -b ticket_xxxxx_1_4 upstream/stable/1.4.x\n")),Object(i.b)("p",null,"Assume the work is carried on the ticket_xxxxx branch. Make some changes and\ncommit them:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git commit\n")),Object(i.b)("p",null,"When writing the commit message, follow the ","[commit message\nguidelines][committing-guidelines.md]"," to ease the work of the committer. If\nyou're uncomfortable with English, try at least to describe precisely what the\ncommit does."),Object(i.b)("p",null,"If you need to do additional work on your branch, commit as often as\nnecessary:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git commit -m 'Added two more tests for edge cases'\n")),Object(i.b)("h2",{id:"publishing-work"},"Publishing work"),Object(i.b)("p",null,"You can publish your work on GitHub by running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git push origin ticket_xxxxx\n")),Object(i.b)("p",null,"When you go to your GitHub page, you will notice a new branch has been created."),Object(i.b)("p",null,"If you are working on an GitHub issue, you should mention in the issue that\nyour work is available from branch ticket_xxxxx of your GitHub repo. Include a\nlink to your branch."),Object(i.b)("p",null,'Note that the above branch is called a "topic branch" in Git parlance. You are\nfree to rewrite the history of this branch, by using ',Object(i.b)("inlineCode",{parentName:"p"},"git rebase")," for\nexample. Other people shouldn't base their work on such a branch, because\ntheir clone would become corrupt when you edit commits."),Object(i.b)("p",null,'There are also "public branches". These are branches other people are supposed\nto fork, so the history of these branches should never change. Good examples\nof public branches are the ',Object(i.b)("inlineCode",{parentName:"p"},"main")," and ",Object(i.b)("inlineCode",{parentName:"p"},"stable/A.B.x")," branches in the\n",Object(i.b)("inlineCode",{parentName:"p"},"wechaty/wechaty")," repository."),Object(i.b)("p",null,"When you think your work is ready to be pulled into Wechaty, you should create\na pull request at GitHub. A good pull request means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"commits with one logical change in each,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"well-formed messages for each commit: a summary line and then paragraphs\nwrapped at 72 characters thereafter,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"documentation and tests, if needed -- actually tests are always needed,\nexcept for documentation changes."))),Object(i.b)("p",null,"The test suite must pass and the documentation must build without warnings."),Object(i.b)("p",null,'Once you have created your pull request, you should add a comment in the\nrelated GitHub issue explaining what you\'ve done. In particular, you should note\nthe environment in which you ran the tests, for instance: "all tests pass\nunder wechaty-puppet-mock".'),Object(i.b)("p",null,"Pull requests at GitHub have only two states: open and closed. The committer\nwho will deal with your pull request has only two options: merge it or close\nit. For this reason, it isn't useful to make a pull request until the code is\nready for merging -- or sufficiently close that a committer will finish it\nthemselves."),Object(i.b)("h2",{id:"rebasing-branches"},"Rebasing branches"),Object(i.b)("p",null,'In the example above, you created two commits, the "Fixed ticket_xxxxx" commit\nand "Added two more tests" commit.'),Object(i.b)("p",null,'We do not want to have the entire history of your working process in your\nrepository. Your commit "Added two more tests" would be unhelpful noise.\nInstead, we would rather only have one commit containing all your work.'),Object(i.b)("p",null,"To rework the history of your branch you can squash the commits into one by\nusing interactive rebase:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git rebase -i HEAD~2\n")),Object(i.b)("p",null,'The HEAD~2 above is shorthand for two latest commits. The above command\nwill open an editor showing the two commits, prefixed with the word "pick".'),Object(i.b)("p",null,'Change "pick" on the second line to "squash" instead. This will keep the\nfirst commit, and squash the second commit into the first one. Save and quit\nthe editor. A second editor window should open, so you can reword the\ncommit message for the commit now that it includes both your steps.'),Object(i.b)("p",null,'You can also use the "edit" option in rebase. This way you can change a single\ncommit, for example to fix a typo in a docstring:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'git rebase -i HEAD~3\n# Choose edit, pick, pick for the commits\n# Now you are able to rework the commit (use git add normally to add changes)\n# When finished, commit work with "--amend" and continue\ngit commit --amend\n# Reword the commit message if needed\ngit rebase --continue\n# The second and third commits should be applied.\n')),Object(i.b)("p",null,"If your topic branch is already published at GitHub, for example if you're\nmaking minor changes to take into account a review, you will need to force-push\nthe changes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git push -f origin ticket_xxxxx\n")),Object(i.b)("p",null,"Note that this will rewrite history of ticket_xxxxx - if you check the commit\nhashes before and after the operation at GitHub you will notice that the commit\nhashes do not match anymore. This is acceptable, as the branch is a topic\nbranch, and nobody should be basing their work on it."),Object(i.b)("h2",{id:"after-upstream-has-changed"},"After upstream has changed"),Object(i.b)("p",null,"When upstream (",Object(i.b)("inlineCode",{parentName:"p"},"wechaty/wechaty"),") has changed, you should rebase your work. To\ndo this, use:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream\ngit rebase\n")),Object(i.b)("p",null,"The work is automatically rebased using the branch you forked on, in the\nexample case using ",Object(i.b)("inlineCode",{parentName:"p"},"upstream/main"),"."),Object(i.b)("p",null,"The rebase command removes all your local commits temporarily, applies the\nupstream commits, and then applies your local commits again on the work."),Object(i.b)("p",null,"If there are merge conflicts, you will need to resolve them and then use\n",Object(i.b)("inlineCode",{parentName:"p"},"git rebase --continue"),". At any point you can use ",Object(i.b)("inlineCode",{parentName:"p"},"git rebase --abort"),"\nto return to the original state."),Object(i.b)("p",null,"Note that you want to ",Object(i.b)("em",{parentName:"p"},"rebase")," on upstream, not ",Object(i.b)("em",{parentName:"p"},"merge")," the upstream."),Object(i.b)("p",null,"The reason for this is that by rebasing, your commits will always be ",Object(i.b)("em",{parentName:"p"},"on\ntop of")," the upstream's work, not ",Object(i.b)("em",{parentName:"p"},"mixed in with")," the changes in the upstream.\nThis way your branch will contain only commits related to its topic, which\nmakes squashing easier."),Object(i.b)("h2",{id:"after-review"},"After review"),Object(i.b)("p",null,"It is unusual to get any non-trivial amount of code into core without changes\nrequested by reviewers. In this case, it is often a good idea to add the\nchanges as one incremental commit to your work. This allows the reviewer to\neasily check what changes you have done."),Object(i.b)("p",null,"In this case, do the changes required by the reviewer. Commit as often as\nnecessary. Before publishing the changes, rebase your work. If you added two\ncommits, you would run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git rebase -i HEAD~2\n")),Object(i.b)("p",null,"Squash the second commit into the first. Write a commit message along the lines\nof:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"Made changes asked in review by <reviewer>\n\n- Fixed whitespace errors in foobar\n- Reworded the docstring of bar()\n")),Object(i.b)("p",null,"Finally, push your work back to your GitHub repository. Since you didn't touch\nthe public commits during the rebase, you should not need to force-push:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git push origin ticket_xxxxx\n")),Object(i.b)("p",null,"Your pull request should now contain the new commit too."),Object(i.b)("p",null,"Note that the committer is likely to squash the review commit into the previous\ncommit when committing the code."),Object(i.b)("h2",{id:"working-on-a-patch"},"Working on a patch"),Object(i.b)("p",null,"One of the ways that developers can contribute to Wechaty is by reviewing\npatches. Those patches will typically exist as pull requests on GitHub and\ncan be easily integrated into your local repository:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git checkout -b pull_xxxxx upstream/main\ncurl https://github.com/wechaty/wechaty/pull/xxxxx.patch | git am\n")),Object(i.b)("p",null,"This will create a new branch and then apply the changes from the pull request\nto it. At this point you can run the tests or do anything else you need to\ndo to investigate the quality of the patch."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Work on GitHub if you can."),Object(i.b)("li",{parentName:"ul"},"Announce your work on the issue by linking to your GitHub pull request."),Object(i.b)("li",{parentName:"ul"},"When you have something ready, make a pull request."),Object(i.b)("li",{parentName:"ul"},"Make your pull requests as good as you can."),Object(i.b)("li",{parentName:"ul"},"When doing fixes to your work, use ",Object(i.b)("inlineCode",{parentName:"li"},"git rebase -i")," to squash the commits."),Object(i.b)("li",{parentName:"ul"},"When upstream has changed, do ",Object(i.b)("inlineCode",{parentName:"li"},"git fetch upstream; git rebase"),".")),Object(i.b)("h2",{id:"special-thanks"},"Special Thanks"),Object(i.b)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/main/docs/internals/contributing/writing-code/working-with-git.txt"},"Django contributing docs")))}u.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(r,".").concat(p)]||h[p]||b[p]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);