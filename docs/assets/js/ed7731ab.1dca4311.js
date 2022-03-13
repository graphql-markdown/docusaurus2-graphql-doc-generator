"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"toggle-like-v2",title:"ToggleLikeV2"},c=void 0,u={unversionedId:"schema/mutations/toggle-like-v2",id:"schema/mutations/toggle-like-v2",title:"ToggleLikeV2",description:"Add or remove a like from a likeable type.",source:"@site/docs/schema/mutations/toggle-like-v2.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-like-v2",permalink:"/graphql-markdown/schema/mutations/toggle-like-v2",tags:[],version:"current",frontMatter:{id:"toggle-like-v2",title:"ToggleLikeV2"},sidebar:"basic",previous:{title:"ToggleFollow",permalink:"/graphql-markdown/schema/mutations/toggle-follow"},next:{title:"ToggleLike",permalink:"/graphql-markdown/schema/mutations/toggle-like"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>type</code> (<code>LikeableType</code>)",id:"type-likeabletype",level:4},{value:"Type",id:"type",level:3},{value:"<code>LikeableUnion</code>",id:"likeableunion",level:4}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add or remove a like from a likeable type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleLikeV2(\n  id: Int\n  type: LikeableType\n): LikeableUnion\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the likeable type"),(0,a.kt)("h4",{id:"type-likeabletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/enums/likeable-type"},(0,a.kt)("inlineCode",{parentName:"a"},"LikeableType")),")"),(0,a.kt)("p",null,"The type of model to be un/liked"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"likeableunion"},(0,a.kt)("a",{parentName:"h4",href:"/schema/unions/likeable-union"},(0,a.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))),(0,a.kt)("p",null,"Likeable union type"))}d.isMDXComponent=!0}}]);