"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5511],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8479:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"media-tag",title:"MediaTag"},c=void 0,d={unversionedId:"schema/objects/media-tag",id:"schema/objects/media-tag",title:"MediaTag",description:"A tag that describes a theme or element of the media",source:"@site/docs/schema/objects/media-tag.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-tag",permalink:"/graphql-markdown/schema/objects/media-tag",tags:[],version:"current",frontMatter:{id:"media-tag",title:"MediaTag"},sidebar:"basic",previous:{title:"MediaSubmission",permalink:"/graphql-markdown/schema/objects/media-submission"},next:{title:"MediaTitle",permalink:"/graphql-markdown/schema/objects/media-title"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>category</code> (<code>String</code>)",id:"category-string",level:4},{value:"<code>rank</code> (<code>Int</code>)",id:"rank-int",level:4},{value:"<code>isGeneralSpoiler</code> (<code>Boolean</code>)",id:"isgeneralspoiler-boolean",level:4},{value:"<code>isMediaSpoiler</code> (<code>Boolean</code>)",id:"ismediaspoiler-boolean",level:4},{value:"<code>isAdult</code> (<code>Boolean</code>)",id:"isadult-boolean",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A tag that describes a theme or element of the media"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaTag {\n  id: Int!\n  name: String!\n  description: String\n  category: String\n  rank: Int\n  isGeneralSpoiler: Boolean\n  isMediaSpoiler: Boolean\n  isAdult: Boolean\n  userId: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the tag"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The name of the tag"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A general description of the tag"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The categories of tags this tag belongs to"),(0,i.kt)("h4",{id:"rank-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rank")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The relevance ranking of the tag out of the 100 for this media"),(0,i.kt)("h4",{id:"isgeneralspoiler-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isGeneralSpoiler")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the tag could be a spoiler for any media"),(0,i.kt)("h4",{id:"ismediaspoiler-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isMediaSpoiler")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the tag is a spoiler for this media"),(0,i.kt)("h4",{id:"isadult-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isAdult")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the tag is only for adult 18+ media"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The user who submitted the tag"))}m.isMDXComponent=!0}}]);