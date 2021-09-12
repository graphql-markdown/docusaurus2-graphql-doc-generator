"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[201],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),u=a,p=l["".concat(m,".").concat(u)]||l[u]||h[u]||i;return n?r.createElement(p,o(o({ref:t},d),{},{components:n})):r.createElement(p,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=l;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification"},m=void 0,s={unversionedId:"schema/objects/thread-comment-subscribed-notification",id:"schema/objects/thread-comment-subscribed-notification",isDocsHomePage:!1,title:"ThreadCommentSubscribedNotification",description:"Notification for when a user replies to a subscribed forum thread",source:"@site/docs/schema/objects/thread-comment-subscribed-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment-subscribed-notification",permalink:"/schema/objects/thread-comment-subscribed-notification",tags:[],version:"current",frontMatter:{id:"thread-comment-subscribed-notification",title:"ThreadCommentSubscribedNotification"},sidebar:"schemaSidebar",previous:{title:"ThreadCommentReplyNotification",permalink:"/schema/objects/thread-comment-reply-notification"},next:{title:"ThreadComment",permalink:"/schema/objects/thread-comment"}},d=[{value:"Fields",id:"fields",children:[]}],h={toc:d};function l(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Notification for when a user replies to a subscribed forum thread"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadCommentSubscribedNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  commentId: Int!\n  context: String\n  createdAt: Int\n  thread: Thread\n  comment: ThreadComment\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the Notification"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the user who commented on the thread"),(0,i.kt)("h4",{id:"type-notificationtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,i.kt)("p",null,"The type of notification"),(0,i.kt)("h4",{id:"commentid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"commentId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the new comment in the subscribed thread"),(0,i.kt)("h4",{id:"context-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The notification context text"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time the notification was created at"),(0,i.kt)("h4",{id:"thread-thread"},(0,i.kt)("inlineCode",{parentName:"h4"},"thread")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,i.kt)("p",null,"The thread that the relevant comment belongs to"),(0,i.kt)("h4",{id:"comment-threadcomment"},(0,i.kt)("inlineCode",{parentName:"h4"},"comment")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,i.kt)("inlineCode",{parentName:"a"},"ThreadComment")),")"),(0,i.kt)("p",null,"The reply thread comment"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The user who replied to the subscribed thread"))}l.isMDXComponent=!0}}]);