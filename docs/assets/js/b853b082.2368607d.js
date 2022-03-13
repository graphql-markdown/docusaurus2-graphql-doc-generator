"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9668],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8129:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"media-connection",title:"MediaConnection"},d=void 0,l={unversionedId:"schema/objects/media-connection",id:"schema/objects/media-connection",title:"MediaConnection",description:"No description",source:"@site/docs/schema/objects/media-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-connection",permalink:"/graphql-markdown/schema/objects/media-connection",tags:[],version:"current",frontMatter:{id:"media-connection",title:"MediaConnection"},sidebar:"basic",previous:{title:"MediaCharacter",permalink:"/graphql-markdown/schema/objects/media-character"},next:{title:"MediaCoverImage",permalink:"/graphql-markdown/schema/objects/media-cover-image"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>MediaEdge</code>)",id:"edges-mediaedge",level:4},{value:"<code>nodes</code> (<code>Media</code>)",id:"nodes-media",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaConnection {\n  edges: [MediaEdge]\n  nodes: [Media]\n  pageInfo: PageInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"edges-mediaedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"MediaEdge")),")"),(0,a.kt)("h4",{id:"nodes-media"},(0,a.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,a.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,a.kt)("p",null,"The pagination information"))}m.isMDXComponent=!0}}]);