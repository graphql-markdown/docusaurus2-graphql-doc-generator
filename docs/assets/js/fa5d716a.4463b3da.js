"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2429],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"fuzzy-date",title:"FuzzyDate"},u=void 0,l={unversionedId:"schema/objects/fuzzy-date",id:"schema/objects/fuzzy-date",isDocsHomePage:!1,title:"FuzzyDate",description:"Date object that allows for incomplete date values (fuzzy)",source:"@site/docs/schema/objects/fuzzy-date.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/fuzzy-date",permalink:"/schema/objects/fuzzy-date",tags:[],version:"current",frontMatter:{id:"fuzzy-date",title:"FuzzyDate"},sidebar:"schemaSidebar",previous:{title:"FormatStats",permalink:"/schema/objects/format-stats"},next:{title:"GenreStats",permalink:"/schema/objects/genre-stats"}},s=[{value:"Fields",id:"fields",children:[]}],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Date object that allows for incomplete date values (fuzzy)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FuzzyDate {\n  year: Int\n  month: Int\n  day: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"year-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"year")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Numeric Year (2017)"),(0,o.kt)("h4",{id:"month-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"month")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Numeric Month (3)"),(0,o.kt)("h4",{id:"day-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"day")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Numeric Day (24)"))}f.isMDXComponent=!0}}]);