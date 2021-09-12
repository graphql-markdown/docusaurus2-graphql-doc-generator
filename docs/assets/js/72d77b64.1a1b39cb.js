"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3505],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5565:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={id:"character-submission-edge",title:"CharacterSubmissionEdge"},s=void 0,u={unversionedId:"schema/objects/character-submission-edge",id:"schema/objects/character-submission-edge",isDocsHomePage:!1,title:"CharacterSubmissionEdge",description:"CharacterSubmission connection edge",source:"@site/docs/schema/objects/character-submission-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-submission-edge",permalink:"/schema/objects/character-submission-edge",tags:[],version:"current",frontMatter:{id:"character-submission-edge",title:"CharacterSubmissionEdge"},sidebar:"schemaSidebar",previous:{title:"CharacterSubmissionConnection",permalink:"/schema/objects/character-submission-connection"},next:{title:"CharacterSubmission",permalink:"/schema/objects/character-submission"}},m=[{value:"Fields",id:"fields",children:[]}],l={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CharacterSubmission connection edge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterSubmissionEdge {\n  node: CharacterSubmission\n  role: CharacterRole\n  voiceActors: [Staff]\n  submittedVoiceActors: [StaffSubmission]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"node-charactersubmission"},(0,o.kt)("inlineCode",{parentName:"h4"},"node")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/character-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterSubmission")),")"),(0,o.kt)("h4",{id:"role-characterrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,o.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,o.kt)("p",null,"The characters role in the media"),(0,o.kt)("h4",{id:"voiceactors-staff"},(0,o.kt)("inlineCode",{parentName:"h4"},"voiceActors")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,o.kt)("inlineCode",{parentName:"a"},"[Staff]")),")"),(0,o.kt)("p",null,"The voice actors of the character"),(0,o.kt)("h4",{id:"submittedvoiceactors-staffsubmission"},(0,o.kt)("inlineCode",{parentName:"h4"},"submittedVoiceActors")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/staff-submission"},(0,o.kt)("inlineCode",{parentName:"a"},"[StaffSubmission]")),")"),(0,o.kt)("p",null,"The submitted voice actors of the character"))}p.isMDXComponent=!0}}]);