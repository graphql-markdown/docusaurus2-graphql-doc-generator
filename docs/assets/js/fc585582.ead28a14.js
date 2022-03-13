"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6568],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5463:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"review-connection",title:"ReviewConnection"},l=void 0,p={unversionedId:"schema/objects/review-connection",id:"schema/objects/review-connection",title:"ReviewConnection",description:"No description",source:"@site/docs/schema/objects/review-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/review-connection",permalink:"/graphql-markdown/schema/objects/review-connection",tags:[],version:"current",frontMatter:{id:"review-connection",title:"ReviewConnection"},sidebar:"basic",previous:{title:"Report",permalink:"/graphql-markdown/schema/objects/report"},next:{title:"ReviewEdge",permalink:"/graphql-markdown/schema/objects/review-edge"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>ReviewEdge</code>)",id:"edges-reviewedge",level:4},{value:"<code>nodes</code> (<code>Review</code>)",id:"nodes-review",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],u={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReviewConnection {\n  edges: [ReviewEdge]\n  nodes: [Review]\n  pageInfo: PageInfo\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-reviewedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/review-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"ReviewEdge")),")"),(0,i.kt)("h4",{id:"nodes-review"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/review"},(0,i.kt)("inlineCode",{parentName:"a"},"Review")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,i.kt)("p",null,"The pagination information"))}f.isMDXComponent=!0}}]);