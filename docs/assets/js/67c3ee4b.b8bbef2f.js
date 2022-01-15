"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6510],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=s(t),m=a,p=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return t?n.createElement(p,l(l({ref:r},d),{},{components:t})):n.createElement(p,l({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9474:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],c={id:"character-name",title:"CharacterName"},o=void 0,s={unversionedId:"schema/objects/character-name",id:"schema/objects/character-name",title:"CharacterName",description:"The names of the character",source:"@site/docs/schema/objects/character-name.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-name",permalink:"/graphql-markdown/schema/objects/character-name",tags:[],version:"current",frontMatter:{id:"character-name",title:"CharacterName"},sidebar:"basic",previous:{title:"CharacterImage",permalink:"/graphql-markdown/schema/objects/character-image"},next:{title:"CharacterSubmissionConnection",permalink:"/graphql-markdown/schema/objects/character-submission-connection"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>first</code> (String)",id:"first-string",children:[],level:4},{value:"<code>middle</code> (String)",id:"middle-string",children:[],level:4},{value:"<code>last</code> (String)",id:"last-string",children:[],level:4},{value:"<code>full</code> (String)",id:"full-string",children:[],level:4},{value:"<code>native</code> (String)",id:"native-string",children:[],level:4},{value:"<code>alternative</code> (String)",id:"alternative-string",children:[],level:4},{value:"<code>alternativeSpoiler</code> (String)",id:"alternativespoiler-string",children:[],level:4},{value:"<code>userPreferred</code> (String)",id:"userpreferred-string",children:[],level:4}],level:3}],u={toc:d};function h(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The names of the character"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterName {\n  first: String\n  middle: String\n  last: String\n  full: String\n  native: String\n  alternative: [String]\n  alternativeSpoiler: [String]\n  userPreferred: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"first-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's given name"),(0,i.kt)("h4",{id:"middle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"middle")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's middle name"),(0,i.kt)("h4",{id:"last-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's surname"),(0,i.kt)("h4",{id:"full-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"full")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's first and last name"),(0,i.kt)("h4",{id:"native-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"native")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's full name in their native language"),(0,i.kt)("h4",{id:"alternative-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternative")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Other names the character might be referred to as"),(0,i.kt)("h4",{id:"alternativespoiler-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternativeSpoiler")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Other names the character might be referred to as but are spoilers"),(0,i.kt)("h4",{id:"userpreferred-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"userPreferred")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The currently authenticated users preferred name language. Default romaji for non-authenticated"))}h.isMDXComponent=!0}}]);