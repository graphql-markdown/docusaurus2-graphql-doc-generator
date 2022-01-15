"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4620],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,p=h["".concat(d,".").concat(u)]||h[u]||s[u]||i;return n?r.createElement(p,o(o({ref:t},m),{},{components:n})):r.createElement(p,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"thread-comment",title:"ThreadComment"},d=void 0,c={unversionedId:"schema/objects/thread-comment",id:"schema/objects/thread-comment",title:"ThreadComment",description:"Forum Thread Comment",source:"@site/docs/schema/objects/thread-comment.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment",permalink:"/graphql-markdown/schema/objects/thread-comment",tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment"},sidebar:"basic",previous:{title:"ThreadCommentSubscribedNotification",permalink:"/graphql-markdown/schema/objects/thread-comment-subscribed-notification"},next:{title:"ThreadLikeNotification",permalink:"/graphql-markdown/schema/objects/thread-like-notification"}},m=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>userId</code> (Int)",id:"userid-int",children:[],level:4},{value:"<code>threadId</code> (Int)",id:"threadid-int",children:[],level:4},{value:"<code>comment</code> (String)",id:"comment-string",children:[],level:4},{value:"<code>likeCount</code> (Int)",id:"likecount-int",children:[],level:4},{value:"<code>isLiked</code> (Boolean)",id:"isliked-boolean",children:[],level:4},{value:"<code>siteUrl</code> (String)",id:"siteurl-string",children:[],level:4},{value:"<code>createdAt</code> (Int)",id:"createdat-int",children:[],level:4},{value:"<code>updatedAt</code> (Int)",id:"updatedat-int",children:[],level:4},{value:"<code>thread</code> (Thread)",id:"thread-thread",children:[],level:4},{value:"<code>user</code> (User)",id:"user-user",children:[],level:4},{value:"<code>likes</code> (User)",id:"likes-user",children:[],level:4},{value:"<code>childComments</code> (Json)",id:"childcomments-json",children:[],level:4},{value:"<code>isLocked</code> (Boolean)",id:"islocked-boolean",children:[],level:4}],level:3}],s={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Forum Thread Comment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadComment {\n  id: Int!\n  userId: Int\n  threadId: Int\n  comment(\n  asHtml: Boolean\n): String\n  likeCount: Int!\n  isLiked: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  thread: Thread\n  user: User\n  likes: [User]\n  childComments: Json\n  isLocked: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the comment"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The user id of the comment's owner"),(0,i.kt)("h4",{id:"threadid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"threadId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of thread the comment belongs to"),(0,i.kt)("h4",{id:"comment-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"comment")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The text content of the comment (Markdown)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,i.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,i.kt)("h4",{id:"likecount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of likes the comment has"),(0,i.kt)("h4",{id:"isliked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the currently authenticated user liked the comment"),(0,i.kt)("h4",{id:"siteurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url for the comment page on the AniList website"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time of the comments creation"),(0,i.kt)("h4",{id:"updatedat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The time of the comments last update"),(0,i.kt)("h4",{id:"thread-thread"},(0,i.kt)("inlineCode",{parentName:"h4"},"thread")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,i.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,i.kt)("p",null,"The thread the comment belongs to"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The user who created the comment"),(0,i.kt)("h4",{id:"likes-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The users who liked the comment"),(0,i.kt)("h4",{id:"childcomments-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"childComments")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("p",null,"The comment's child reply comments"),(0,i.kt)("h4",{id:"islocked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the comment tree is locked and may not receive replies or edits"))}h.isMDXComponent=!0}}]);