(this["webpackJsonpflicr-api-project"]=this["webpackJsonpflicr-api-project"]||[]).push([[0],{111:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(10),c=a.n(n),i=(a(111),a(60)),s=a.n(i),j=a(43),l=a(15),u=a(85),O=a.n(u),b=a(87),f=a.n(b),g=a(91),h=a.n(g),d=a(2),p=function(){return Object(d.jsxs)("div",{className:O.a.navBlock,children:[Object(d.jsx)(j.b,{to:Ke,children:Object(d.jsx)(f.a,{fontSize:"large"})}),Object(d.jsx)(j.b,{to:We,children:Object(d.jsx)(h.a,{fontSize:"large"})})]})},v=a(29),m=a(23),x=a(181),P=a(188),_=a(68),E=a.n(_),I=a(93),S=a(26),C=a(7),R=a(94),T="fe6a01fa9267d89be3df137d31d4607c",F=a.n(R).a.create({baseURL:"https://api.flickr.com/services/rest/"}),N=function(e,t){return F.get("?method=flickr.photos.search",{params:{api_key:T,format:"json",page:t,per_page:20,text:e,nojsoncallback:!0,sort:"relevance"}}).then((function(e){return e.data}))},y="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS",A="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS-IS-GETTING-PROGRESS",k="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-SEARCH-NAME",D="FLICR-API-MY-Project/PHOTOS-REDUCER/ADD-TAG",L="FLICR-API-MY-Project/PHOTOS-REDUCER/DELETE-TAG",G="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PAGE",w="FLICR-API-MY-Project/PHOTOS-REDUCER/SET_NEW_NAME",H="FLICR-API-MY-Project/PHOTOS-REDUCER/SET_NEW_ERROR",M={searchName:"",page:1,pages:0,perpage:0,total:"",photo:[],isGettingPhotosSuccess:!0,isGettingPhotosProgress:!1,newName:"",someError:""},J=function(e,t,a){return{type:y,photos:e,page:t,pages:a}},U=function(e){return{type:A,isGettingPhotosProgress:e}},z=function(e){return{type:G,page:e}},B=function(e){return{type:H,err:e}},Y=function(e,t){return function(){var a=Object(I.a)(E.a.mark((function a(o){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(U(!0)),o(z(t)),a.prev=2,a.next=5,N(e,t);case 5:"ok"===(r=a.sent).stat&&(o(J(r.photos.photo,r.photos.page,r.photos.pages)),o(B(""))),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),o(B("no connection"));case 12:o(U(!1));case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},V=a(179),K=a(180),W="FLICR-API/FAVORITE-REDUCER/SET_F_PHOTO",Z="FLICR-API/FAVORITE-REDUCER/DELETE-F-PHOTO",q="FLICR-API/FAVORITE-REDUCER/ADD-TAG-TO-FAVORITE",X="FLICR-API/FAVORITE-REDUCER/DELETE-TAG-F-FAVORITE",Q=function(){var e={favorite:[]};try{for(var t=Object.keys(localStorage),a=t.length;a--;){var o=JSON.parse(localStorage.getItem(t[a])),r=t[a];e.favorite.push({favoritePhotoId:r,favoritePhoto:o})}}catch(n){console.log("The app can't get data from localeStorage")}return e}(),$=function(e,t){return function(a){a(function(e,t){return{type:W,favoritePhotoId:e,favoritePhoto:t}}(e,t));try{localStorage.setItem(e,JSON.stringify(t))}catch(o){console.log("image can't be added to LocaleStorage")}}},ee=function(e){return function(t){t({type:Z,id:e});try{localStorage.removeItem(e)}catch(a){console.log("image can't be deleted from LocaleStorage")}}},te=function(e,t){return function(a){a(function(e,t){return{type:q,id:e,tag:t}}(e,t));try{var o=JSON.parse(localStorage.getItem(e));o=Object(C.a)(Object(C.a)({},o),{},{tags:[].concat(Object(S.a)(o.tags),[t])}),localStorage.setItem(e,JSON.stringify(o))}catch(r){console.log("tag can't be added to LocaleStorageTS")}}},ae=function(e,t){return function(a){a(function(e,t){return{type:X,id:e,tag:t}}(e,t));try{var o=JSON.parse(localStorage.getItem(e));o=Object(C.a)(Object(C.a)({},o),{},{tags:Object(S.a)(o.tags.filter((function(e){return e!==t?1:-1})))}),localStorage.setItem(e,JSON.stringify(o))}catch(r){console.log("tag can't be deleted from LocaleStorageTS")}}},oe=a(69),re=a.n(oe),ne=function(e){var t=e.tags,a=e.photoId,o=Object(m.b)(),r=function(t){return function(){o(function(e,t){return{type:L,id:e,tag:t}}(a,t)),e.isFavorite&&o(ae(a,t))}};return Object(d.jsx)("div",{className:re.a.tags,children:t.map((function(e,t){return Object(d.jsxs)("div",{className:re.a.singleTag,children:[Object(d.jsxs)("span",{children:[" ",e]}),Object(d.jsx)(V.a,{size:"small",onClick:r(e),children:Object(d.jsx)(K.a,{color:"primary"})})]},e+t)}))})},ce=a(48),ie=a.n(ce),se=r.a.memo((function(e){var t=e.photo,a=t.farm,r=t.tags,n=t.id,c=t.secret,i=t.server,s=Object(m.b)(),j=Object(o.useState)(""),l=Object(v.a)(j,2),u=l[0],O=l[1],b=Object(o.useState)(""),f=Object(v.a)(b,2),g=f[0],h=f[1],p=function(){""!==u.trim()?(s(function(e,t){return{type:D,id:e,tag:t}}(n,u)),e.isFavorite&&s(te(n,u)),O("")):h("Please, add tag")},_="https://farm".concat(a,".staticflickr.com/").concat(i,"/").concat(n,"_").concat(c,".jpg)");return Object(d.jsxs)("div",{className:ie.a.photoContainer,children:[Object(d.jsx)("img",{className:ie.a.photoImage,src:_,alt:"img is loading :)"}),Object(d.jsx)("div",{className:ie.a.button,children:Object(d.jsx)(x.a,{onClick:function(){e.isFavorite?s(ee(n)):s($(n,e.photo))},variant:"outlined",color:"primary",children:e.isFavorite?"Remove  It!":"Bookmark  it!"})}),Object(d.jsx)(ne,{tags:r,photoId:n,isFavorite:e.isFavorite}),Object(d.jsx)(P.a,{className:ie.a.button,type:"text",value:u,label:"some tags?",onChange:function(e){e.currentTarget.value.length<16?(O(e.currentTarget.value),h("")):h("long tag")},onKeyPress:function(e){""!==g&&h(""),"Enter"===e.key&&p()},variant:"outlined",error:!!g,helperText:g})]})})),je=a(182),le=a(192),ue=a(183),Oe=Object(je.a)((function(e){return Object(le.a)({root:{display:"flex","& > * + *":{margin:e.spacing(2)}}})})),be=function(){var e=Oe();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(ue.a,{color:"secondary"})})},fe=a(189),ge=function(e){var t=e.pagesCount,a=e.currentPage,o=e.onPageChanged;return Object(d.jsx)(d.Fragment,{children:0===t?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(fe.a,{count:t,page:a,onChange:function(e,t){o(t)},showFirstButton:!0,showLastButton:!0})})},he=function(e,t){return null===t||void 0===t?void 0:t.favorite.some((function(t){return t.favoritePhotoId===e}))},de=a(70),pe=a.n(de),ve=a(184),me=a(191),xe=a(95),Pe=a.n(xe);function _e(e){var t=r.a.useState(e.isOpen),a=Object(v.a)(t,2),o=a[0],n=a[1],c=function(e,t){"clickaway"!==t&&n(!1)};return Object(d.jsx)("div",{children:Object(d.jsx)(me.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:o,autoHideDuration:3e3,onClose:c,message:e.errorMessage,action:Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(x.a,{color:"secondary",size:"small",onClick:c,children:"UNDO"}),Object(d.jsx)(V.a,{size:"small","aria-label":"close",color:"inherit",onClick:c,children:Object(d.jsx)(Pe.a,{fontSize:"small"})})]})})})}var Ee=Object(je.a)((function(e){return{container1:{display:"flex",width:"100%",flexGrow:1,margin:"auto"},item:{padding:e.spacing(2),xs:"12"},itemFlexGrow:{flexGrow:1,border:"1px solid red"}}}));function Ie(){var e=Object(m.c)((function(e){return e})),t=e.photos,a=e.favorite,r=Object(m.b)(),n=Object(o.useState)(t.newName),c=Object(v.a)(n,2),i=c[0],s=c[1],j=Object(o.useState)(e.photos.someError),l=Object(v.a)(j,2),u=l[0],O=l[1],b=Ee();Object(o.useEffect)((function(){O(t.someError)}),[t.someError]);var f=function(){""!==i.trim()?(r(Y(i,t.page)),r({type:w,name:i})):O("Please, add name to find image")};return t.isGettingPhotosProgress?Object(d.jsx)(be,{}):Object(d.jsxs)("div",{className:pe.a.findPageContainer,children:[!t.isGettingPhotosSuccess&&Object(d.jsx)(_e,{errorMessage:" Empty result of the searsh :( ",isOpen:!0}),Object(d.jsx)("div",{className:b.container1,children:Object(d.jsxs)(ve.a,{container:!0,children:[Object(d.jsx)(ve.a,{className:b.item,item:!0,xs:8,children:Object(d.jsx)(P.a,{type:"text",value:i,onChange:function(e){s(e.currentTarget.value),O("")},onKeyPress:function(e){""!==u&&O(""),"Enter"===e.key&&f()},variant:"outlined",placeholder:"Print your search",error:""!==u,helperText:u,fullWidth:!0,size:"medium"})}),Object(d.jsx)(ve.a,{className:b.item,item:!0,xs:4,children:Object(d.jsx)(x.a,{onClick:f,variant:"outlined",color:"primary",size:"large",children:"FIND"})})]})}),Object(d.jsx)(ge,{currentPage:t.page,pagesCount:t.pages>200?200:t.pages,onPageChanged:function(e){r(Y(i,e))}}),Object(d.jsx)("div",{className:pe.a.photos,children:t.photo.map((function(e){return Object(d.jsx)(se,{photo:e,isFavorite:he(e.id,a)},e.id)}))})]})}var Se=a(49),Ce=a.n(Se);var Re=function(){return Object(d.jsxs)("div",{className:Ce.a.errorBlock,children:[Object(d.jsx)("div",{className:Ce.a.number,children:"404"}),Object(d.jsx)("div",{className:Ce.a.message,children:"Page not found!"}),Object(d.jsx)("div",{className:Ce.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Te=a(71),Fe=a.n(Te),Ne=function(){var e=Object(m.c)((function(e){return e.favorite}));return Object(d.jsx)("div",{className:Fe.a.favoritePageContainer,children:Object(d.jsxs)("div",{className:Fe.a.photos,children:[0===e.favorite.length?Object(d.jsx)(_e,{errorMessage:" No favorite photos ",isOpen:!0}):Object(d.jsx)(d.Fragment,{}),e.favorite.map((function(t){return Object(d.jsx)(se,{photo:t.favoritePhoto,isFavorite:he(t.favoritePhotoId,e)},t.favoritePhotoId)}))]})})},ye=a(97),Ae=a.n(ye),ke=a(96),De=a.n(ke),Le=a(185),Ge=a(186),we=function(){return Object(d.jsx)(Le.a,{position:"static",style:{background:"#30ADD2"},children:Object(d.jsxs)(Ge.a,{style:{display:"flex",justifyContent:"space-between",width:"100%",paddingLeft:"30px"},children:[Object(d.jsx)("div",{className:De.a.title,children:Object(d.jsx)("h1",{children:"IMAGE FINDER"})}),Object(d.jsx)(Ae.a,{fontSize:"large"})]})})},He=a(187),Me=a(98),Je=a.n(Me),Ue=function(){return Object(d.jsx)("div",{style:{width:"100%"},children:Object(d.jsx)(Le.a,{position:"static",color:"transparent",children:Object(d.jsx)(He.a,{maxWidth:"xl",children:Object(d.jsx)("div",{className:Je.a.me,children:"  \xa9 2021 Nikolai Berestevich"})})})})},ze=a(99),Be=a(39),Ye=Object(Be.c)({photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(C.a)(Object(C.a)({},e),{},{page:t.page,pages:t.pages,photo:t.photos.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{tags:[]})})),isGettingPhotosSuccess:0!==t.photos.length});case A:return Object(C.a)(Object(C.a)({},e),{},{isGettingPhotosProgress:t.isGettingPhotosProgress});case k:return Object(C.a)(Object(C.a)({},e),{},{searchName:t.searchName});case D:return Object(C.a)(Object(C.a)({},e),{},{photo:e.photo.map((function(e){return e.id!==t.id||e.tags.includes(t.tag)?e:Object(C.a)(Object(C.a)({},e),{},{tags:[].concat(Object(S.a)(e.tags),[t.tag])})}))});case L:return Object(C.a)(Object(C.a)({},e),{},{photo:e.photo.map((function(e){if(e.id===t.id){var a=e.tags.indexOf(t.tag),o=Object(S.a)(e.tags);return a>-1&&o.splice(a,1),Object(C.a)(Object(C.a)({},e),{},{tags:o})}return e}))});case G:return Object(C.a)(Object(C.a)({},e),{},{page:t.page});case w:return Object(C.a)(Object(C.a)({},e),{},{newName:t.name});case H:return Object(C.a)(Object(C.a)({},e),{},{someError:t.err});default:return e}},favorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(C.a)(Object(C.a)({},e),{},{favorite:[].concat(Object(S.a)(e.favorite),[{favoritePhotoId:t.favoritePhotoId,favoritePhoto:t.favoritePhoto}])});case Z:return Object(C.a)(Object(C.a)({},e),{},{favorite:e.favorite.filter((function(e){return e.favoritePhotoId!==t.id}))});case q:return Object(C.a)(Object(C.a)({},e),{},{favorite:e.favorite.map((function(e){return e.favoritePhotoId!==t.id?e:Object(C.a)(Object(C.a)({},e),{},{favoritePhoto:Object(C.a)(Object(C.a)({},e.favoritePhoto),{},{tags:e.favoritePhoto.tags.includes(t.tag)?Object(S.a)(e.favoritePhoto.tags):[].concat(Object(S.a)(e.favoritePhoto.tags),[t.tag])})})}))});case X:return Object(C.a)(Object(C.a)({},e),{},{favorite:e.favorite.map((function(e){return e.favoritePhotoId!==t.id?e:Object(C.a)(Object(C.a)({},e),{},{favoritePhoto:Object(C.a)(Object(C.a)({},e.favoritePhoto),{},{tags:Object(S.a)(e.favoritePhoto.tags.filter((function(e){return e!==t.tag})))})})}))});default:return e}}}),Ve=Object(Be.d)(Ye,Object(Be.a)(ze.a)),Ke="/",We="/favorite",Ze=function(){return Object(d.jsx)(m.a,{store:Ve,children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:s.a.app,children:[Object(d.jsx)(we,{}),Object(d.jsxs)("div",{className:s.a.appHeader,children:[Object(d.jsxs)("div",{className:s.a.table,children:[Object(d.jsx)(p,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(Ie,{})}}),Object(d.jsx)(l.a,{exact:!0,path:We,render:function(){return Object(d.jsx)(Ne,{})}}),Object(d.jsx)(l.a,{render:function(){return Object(d.jsx)(Re,{})}})]})]}),Object(d.jsx)(Ue,{})]})]})})})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,193)).then((function(t){var a=t.getCLS,o=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),o(e),r(e),n(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Ze,{})}),document.getElementById("root")),qe()},48:function(e,t,a){e.exports={photoContainer:"Photo_photoContainer__3S-0b",photoImage:"Photo_photoImage__2nPa4",searchZone:"Photo_searchZone__3LXgT",button:"Photo_button__ULexw"}},49:function(e,t,a){e.exports={errorBlock:"Error404_errorBlock__1JP_z",number:"Error404_number__2zcL7",message:"Error404_message__3_s_r",cat:"Error404_cat__2_JJr"}},60:function(e,t,a){e.exports={app:"App_app__YqG96",appHeader:"App_appHeader__1FPdJ",table:"App_table__1GIjm"}},69:function(e,t,a){e.exports={tags:"Tags_tags__6KoVa"}},70:function(e,t,a){e.exports={findPageContainer:"FindPage_findPageContainer__3PzPY",input:"FindPage_input__hISiJ",photos:"FindPage_photos__1b8wT"}},71:function(e,t,a){e.exports={favoritePageContainer:"FavofitesPage_favoritePageContainer__3kYsf",photos:"FavofitesPage_photos__1nR9J"}},85:function(e,t,a){e.exports={navBlock:"Navigation_navBlock__3BpM4"}},96:function(e,t,a){e.exports={title:"Header_title__2JbDC"}},98:function(e,t,a){e.exports={me:"Footer_me__CKNuz"}}},[[139,1,2]]]);
//# sourceMappingURL=main.a608211c.chunk.js.map