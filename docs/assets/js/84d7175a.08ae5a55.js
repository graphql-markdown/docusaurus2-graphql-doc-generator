"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7213],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"media-list-options-input",title:"MediaListOptionsInput"},l=void 0,c={unversionedId:"schema/inputs/media-list-options-input",id:"schema/inputs/media-list-options-input",title:"MediaListOptionsInput",description:"A user's list options for anime or manga lists",source:"@site/docs/schema/inputs/media-list-options-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/media-list-options-input",permalink:"/graphql-markdown/schema/inputs/media-list-options-input",tags:[],version:"current",frontMatter:{id:"media-list-options-input",title:"MediaListOptionsInput"},sidebar:"basic",previous:{title:"MediaExternalLinkInput",permalink:"/graphql-markdown/schema/inputs/media-external-link-input"},next:{title:"MediaTitleInput",permalink:"/graphql-markdown/schema/inputs/media-title-input"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>sectionOrder</code> (<code>String</code>)",id:"sectionorder-string",level:4},{value:"<code>splitCompletedSectionByFormat</code> (<code>Boolean</code>)",id:"splitcompletedsectionbyformat-boolean",level:4},{value:"<code>customLists</code> (<code>String</code>)",id:"customlists-string",level:4},{value:"<code>advancedScoring</code> (<code>String</code>)",id:"advancedscoring-string",level:4},{value:"<code>advancedScoringEnabled</code> (<code>Boolean</code>)",id:"advancedscoringenabled-boolean",level:4},{value:"<code>theme</code> (<code>String</code>)",id:"theme-string",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A user's list options for anime or manga lists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListOptionsInput {\n  sectionOrder: [String]\n  splitCompletedSectionByFormat: Boolean\n  customLists: [String]\n  advancedScoring: [String]\n  advancedScoringEnabled: Boolean\n  theme: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"sectionorder-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"sectionOrder")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The order each list should be displayed in"),(0,a.kt)("h4",{id:"splitcompletedsectionbyformat-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"splitCompletedSectionByFormat")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("p",null,"If the completed sections of the list should be separated by format"),(0,a.kt)("h4",{id:"customlists-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"customLists")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The names of the user's custom lists"),(0,a.kt)("h4",{id:"advancedscoring-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"advancedScoring")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The names of the user's advanced scoring sections"),(0,a.kt)("h4",{id:"advancedscoringenabled-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"advancedScoringEnabled")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("p",null,"If advanced scoring is enabled"),(0,a.kt)("h4",{id:"theme-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"theme")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"list theme"))}m.isMDXComponent=!0}}]);