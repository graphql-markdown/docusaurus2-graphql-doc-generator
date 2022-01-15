"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3217],{3905:function(i,t,e){e.d(t,{Zo:function(){return f},kt:function(){return h}});var n=e(7294);function a(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function o(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,n)}return e}function r(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function c(i,t){if(null==i)return{};var e,n,a=function(i,t){if(null==i)return{};var e,n,a={},o=Object.keys(i);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||(a[e]=i[e]);return a}(i,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(i,e)&&(a[e]=i[e])}return a}var l=n.createContext({}),d=function(i){var t=n.useContext(l),e=t;return i&&(e="function"==typeof i?i(t):r(r({},t),i)),e},f=function(i){var t=d(i.components);return n.createElement(l.Provider,{value:t},i.children)},m={inlineCode:"code",wrapper:function(i){var t=i.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(i,t){var e=i.components,a=i.mdxType,o=i.originalType,l=i.parentName,f=c(i,["components","mdxType","originalType","parentName"]),s=d(e),h=a,u=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return e?n.createElement(u,r(r({ref:t},f),{},{components:e})):n.createElement(u,r({ref:t},f))}));function h(i,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof i||a){var o=e.length,r=new Array(o);r[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=i,c.mdxType="string"==typeof i?i:a,r[1]=c;for(var d=2;d<o;d++)r[d]=e[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},8094:function(i,t,e){e.r(t),e.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return f},default:function(){return s}});var n=e(7462),a=e(3366),o=(e(7294),e(3905)),r=["components"],c={id:"notification-union",title:"NotificationUnion"},l=void 0,d={unversionedId:"schema/unions/notification-union",id:"schema/unions/notification-union",title:"NotificationUnion",description:"Notification union type",source:"@site/docs/schema/unions/notification-union.mdx",sourceDirName:"schema/unions",slug:"/schema/unions/notification-union",permalink:"/graphql-markdown/schema/unions/notification-union",tags:[],version:"current",frontMatter:{id:"notification-union",title:"NotificationUnion"},sidebar:"basic",previous:{title:"LikeableUnion",permalink:"/graphql-markdown/schema/unions/likeable-union"}},f=[{value:"Possible types",id:"possible-types",children:[{value:"AiringNotification",id:"airingnotification",children:[],level:4},{value:"FollowingNotification",id:"followingnotification",children:[],level:4},{value:"ActivityMessageNotification",id:"activitymessagenotification",children:[],level:4},{value:"ActivityMentionNotification",id:"activitymentionnotification",children:[],level:4},{value:"ActivityReplyNotification",id:"activityreplynotification",children:[],level:4},{value:"ActivityReplySubscribedNotification",id:"activityreplysubscribednotification",children:[],level:4},{value:"ActivityLikeNotification",id:"activitylikenotification",children:[],level:4},{value:"ActivityReplyLikeNotification",id:"activityreplylikenotification",children:[],level:4},{value:"ThreadCommentMentionNotification",id:"threadcommentmentionnotification",children:[],level:4},{value:"ThreadCommentReplyNotification",id:"threadcommentreplynotification",children:[],level:4},{value:"ThreadCommentSubscribedNotification",id:"threadcommentsubscribednotification",children:[],level:4},{value:"ThreadCommentLikeNotification",id:"threadcommentlikenotification",children:[],level:4},{value:"ThreadLikeNotification",id:"threadlikenotification",children:[],level:4},{value:"RelatedMediaAdditionNotification",id:"relatedmediaadditionnotification",children:[],level:4},{value:"MediaDataChangeNotification",id:"mediadatachangenotification",children:[],level:4},{value:"MediaMergeNotification",id:"mediamergenotification",children:[],level:4},{value:"MediaDeletionNotification",id:"mediadeletionnotification",children:[],level:4}],level:3}],m={toc:f};function s(i){var t=i.components,e=(0,a.Z)(i,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification union type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification | MediaDataChangeNotification | MediaMergeNotification | MediaDeletionNotification\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"airingnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/airing-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"AiringNotification"))),(0,o.kt)("p",null,"Notification for when an episode of anime airs"),(0,o.kt)("h4",{id:"followingnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/following-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"FollowingNotification"))),(0,o.kt)("p",null,"Notification for when the authenticated user is followed by another user"),(0,o.kt)("h4",{id:"activitymessagenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-message-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityMessageNotification"))),(0,o.kt)("p",null,"Notification for when a user is send an activity message"),(0,o.kt)("h4",{id:"activitymentionnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-mention-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityMentionNotification"))),(0,o.kt)("p",null,"Notification for when authenticated user is @ mentioned in activity or reply"),(0,o.kt)("h4",{id:"activityreplynotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplyNotification"))),(0,o.kt)("p",null,"Notification for when a user replies to the authenticated users activity"),(0,o.kt)("h4",{id:"activityreplysubscribednotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-subscribed-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplySubscribedNotification"))),(0,o.kt)("p",null,"Notification for when a user replies to activity the authenticated user has replied to"),(0,o.kt)("h4",{id:"activitylikenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityLikeNotification"))),(0,o.kt)("p",null,"Notification for when a activity is liked"),(0,o.kt)("h4",{id:"activityreplylikenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityReplyLikeNotification"))),(0,o.kt)("p",null,"Notification for when a activity reply is liked"),(0,o.kt)("h4",{id:"threadcommentmentionnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-mention-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentMentionNotification"))),(0,o.kt)("p",null,"Notification for when authenticated user is @ mentioned in a forum thread comment"),(0,o.kt)("h4",{id:"threadcommentreplynotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-reply-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentReplyNotification"))),(0,o.kt)("p",null,"Notification for when a user replies to your forum thread comment"),(0,o.kt)("h4",{id:"threadcommentsubscribednotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-subscribed-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentSubscribedNotification"))),(0,o.kt)("p",null,"Notification for when a user replies to a subscribed forum thread"),(0,o.kt)("h4",{id:"threadcommentlikenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadCommentLikeNotification"))),(0,o.kt)("p",null,"Notification for when a thread comment is liked"),(0,o.kt)("h4",{id:"threadlikenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-like-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadLikeNotification"))),(0,o.kt)("p",null,"Notification for when a thread is liked"),(0,o.kt)("h4",{id:"relatedmediaadditionnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/related-media-addition-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"RelatedMediaAdditionNotification"))),(0,o.kt)("p",null,"Notification for when new media is added to the site"),(0,o.kt)("h4",{id:"mediadatachangenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-data-change-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaDataChangeNotification"))),(0,o.kt)("p",null,"Notification for when a media entry's data was changed in a significant way impacting users' list tracking"),(0,o.kt)("h4",{id:"mediamergenotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-merge-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaMergeNotification"))),(0,o.kt)("p",null,"Notification for when a media entry is merged into another for a user who had it on their list"),(0,o.kt)("h4",{id:"mediadeletionnotification"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/media-deletion-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaDeletionNotification"))),(0,o.kt)("p",null,"Notification for when a media tracked in a user's list is deleted from the site"))}s.isMDXComponent=!0}}]);