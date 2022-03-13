"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9120],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"user-mod-data",title:"UserModData"},c=void 0,l={unversionedId:"schema/objects/user-mod-data",id:"schema/objects/user-mod-data",title:"UserModData",description:"User data for moderators",source:"@site/docs/schema/objects/user-mod-data.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-mod-data",permalink:"/graphql-markdown/schema/objects/user-mod-data",tags:[],version:"current",frontMatter:{id:"user-mod-data",title:"UserModData"},sidebar:"basic",previous:{title:"UserLengthStatistic",permalink:"/graphql-markdown/schema/objects/user-length-statistic"},next:{title:"UserOptions",permalink:"/graphql-markdown/schema/objects/user-options"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>alts</code> (<code>User</code>)",id:"alts-user",level:4},{value:"<code>bans</code> (<code>Json</code>)",id:"bans-json",level:4},{value:"<code>ip</code> (<code>Json</code>)",id:"ip-json",level:4},{value:"<code>counts</code> (<code>Json</code>)",id:"counts-json",level:4},{value:"<code>privacy</code> (<code>Int</code>)",id:"privacy-int",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"User data for moderators"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserModData {\n  alts: [User]\n  bans: Json\n  ip: Json\n  counts: Json\n  privacy: Int\n  email: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"alts-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"alts")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("h4",{id:"bans-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"bans")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"ip-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"ip")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"counts-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"counts")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"privacy-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"privacy")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"email-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);