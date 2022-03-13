"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7870],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],d={id:"media-merge-notification",title:"MediaMergeNotification"},c=void 0,l={unversionedId:"schema/objects/media-merge-notification",id:"schema/objects/media-merge-notification",title:"MediaMergeNotification",description:"Notification for when a media entry is merged into another for a user who had it on their list",source:"@site/docs/schema/objects/media-merge-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-merge-notification",permalink:"/graphql-markdown/schema/objects/media-merge-notification",tags:[],version:"current",frontMatter:{id:"media-merge-notification",title:"MediaMergeNotification"},sidebar:"basic",previous:{title:"MediaList",permalink:"/graphql-markdown/schema/objects/media-list"},next:{title:"MediaRank",permalink:"/graphql-markdown/schema/objects/media-rank"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>type</code> (<code>NotificationType</code>)",id:"type-notificationtype",level:4},{value:"<code>mediaId</code> (<code>Int</code>)",id:"mediaid-int",level:4},{value:"<code>deletedMediaTitles</code> (<code>String</code>)",id:"deletedmediatitles-string",level:4},{value:"<code>context</code> (<code>String</code>)",id:"context-string",level:4},{value:"<code>reason</code> (<code>String</code>)",id:"reason-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification for when a media entry is merged into another for a user who had it on their list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaMergeNotification {\n  id: Int!\n  type: NotificationType\n  mediaId: Int!\n  deletedMediaTitles: [String]\n  context: String\n  reason: String\n  createdAt: Int\n  media: Media\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the Notification"),(0,r.kt)("h4",{id:"type-notificationtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,r.kt)("p",null,"The type of notification"),(0,r.kt)("h4",{id:"mediaid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the media that was merged into"),(0,r.kt)("h4",{id:"deletedmediatitles-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"deletedMediaTitles")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The title of the deleted media"),(0,r.kt)("h4",{id:"context-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The reason for the media data change"),(0,r.kt)("h4",{id:"reason-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"reason")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The reason for the media merge"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The time the notification was created at"),(0,r.kt)("h4",{id:"media-media"},(0,r.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,r.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,r.kt)("p",null,"The media that was merged into"))}u.isMDXComponent=!0}}]);