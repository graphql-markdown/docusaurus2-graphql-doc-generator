"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2875],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5769:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"update-media-list-entries",title:"UpdateMediaListEntries"},d=void 0,l={unversionedId:"schema/mutations/update-media-list-entries",id:"schema/mutations/update-media-list-entries",title:"UpdateMediaListEntries",description:"Update multiple media list entries to the same values",source:"@site/docs/schema/mutations/update-media-list-entries.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/update-media-list-entries",permalink:"/graphql-markdown/schema/mutations/update-media-list-entries",tags:[],version:"current",frontMatter:{id:"update-media-list-entries",title:"UpdateMediaListEntries"},sidebar:"basic",previous:{title:"UpdateFavouriteOrder",permalink:"/graphql-markdown/schema/mutations/update-favourite-order"},next:{title:"UpdateUser",permalink:"/graphql-markdown/schema/mutations/update-user"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>status</code> (<code>MediaListStatus</code>)",id:"status-medialiststatus",level:4},{value:"<code>score</code> (<code>Float</code>)",id:"score-float",level:4},{value:"<code>scoreRaw</code> (<code>Int</code>)",id:"scoreraw-int",level:4},{value:"<code>progress</code> (<code>Int</code>)",id:"progress-int",level:4},{value:"<code>progressVolumes</code> (<code>Int</code>)",id:"progressvolumes-int",level:4},{value:"<code>repeat</code> (<code>Int</code>)",id:"repeat-int",level:4},{value:"<code>priority</code> (<code>Int</code>)",id:"priority-int",level:4},{value:"<code>private</code> (<code>Boolean</code>)",id:"private-boolean",level:4},{value:"<code>notes</code> (<code>String</code>)",id:"notes-string",level:4},{value:"<code>hiddenFromStatusLists</code> (<code>Boolean</code>)",id:"hiddenfromstatuslists-boolean",level:4},{value:"<code>advancedScores</code> (<code>Float</code>)",id:"advancedscores-float",level:4},{value:"<code>startedAt</code> (<code>FuzzyDateInput</code>)",id:"startedat-fuzzydateinput",level:4},{value:"<code>completedAt</code> (<code>FuzzyDateInput</code>)",id:"completedat-fuzzydateinput",level:4},{value:"<code>ids</code> (<code>Int</code>)",id:"ids-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>MediaList</code>",id:"medialist",level:4}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update multiple media list entries to the same values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"UpdateMediaListEntries(\n  status: MediaListStatus\n  score: Float\n  scoreRaw: Int\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  advancedScores: [Float]\n  startedAt: FuzzyDateInput\n  completedAt: FuzzyDateInput\n  ids: [Int]\n): [MediaList]\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"status-medialiststatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,i.kt)("p",null,"The watching/reading status"),(0,i.kt)("h4",{id:"score-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"score")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"The score of the media in the user's chosen scoring method"),(0,i.kt)("h4",{id:"scoreraw-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"scoreRaw")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The score of the media in 100 point"),(0,i.kt)("h4",{id:"progress-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"progress")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of episodes/chapters consumed by the user"),(0,i.kt)("h4",{id:"progressvolumes-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"progressVolumes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of volumes read by the user"),(0,i.kt)("h4",{id:"repeat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"repeat")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of times the user has rewatched/read the media"),(0,i.kt)("h4",{id:"priority-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"priority")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Priority of planning"),(0,i.kt)("h4",{id:"private-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the entry should only be visible to authenticated user"),(0,i.kt)("h4",{id:"notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Text notes"),(0,i.kt)("h4",{id:"hiddenfromstatuslists-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hiddenFromStatusLists")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the entry shown be hidden from non-custom lists"),(0,i.kt)("h4",{id:"advancedscores-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"advancedScores")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Array of advanced scores"),(0,i.kt)("h4",{id:"startedat-fuzzydateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"startedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,i.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput")),")"),(0,i.kt)("p",null,"When the entry was started by the user"),(0,i.kt)("h4",{id:"completedat-fuzzydateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"completedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/inputs/fuzzy-date-input"},(0,i.kt)("inlineCode",{parentName:"a"},"FuzzyDateInput")),")"),(0,i.kt)("p",null,"When the entry was completed by the user"),(0,i.kt)("h4",{id:"ids-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"ids")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The list entries ids to update"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"medialist"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaList"))),(0,i.kt)("p",null,"List of anime or manga"))}m.isMDXComponent=!0}}]);