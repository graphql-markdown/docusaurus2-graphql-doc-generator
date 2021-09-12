"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4694],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6281:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={id:"follower",title:"Follower"},u=void 0,c={unversionedId:"schema/queries/follower",id:"schema/queries/follower",isDocsHomePage:!1,title:"Follower",description:"Follow query",source:"@site/docs/schema/queries/follower.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/follower",permalink:"/schema/queries/follower",tags:[],version:"current",frontMatter:{id:"follower",title:"Follower"},sidebar:"schemaSidebar",previous:{title:"Character",permalink:"/schema/queries/character"},next:{title:"Following",permalink:"/schema/queries/following"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"Follower(\n  userId: Int!\n  sort: [UserSort]\n): User\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"userid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"User id of the follower/followed"),(0,a.kt)("h4",{id:"sort-usersort"},(0,a.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/user-sort"},(0,a.kt)("inlineCode",{parentName:"a"},"[UserSort]")),")"),(0,a.kt)("p",null,"The order the results will be returned in"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"user"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User"))),(0,a.kt)("p",null,"A user"))}f.isMDXComponent=!0}}]);