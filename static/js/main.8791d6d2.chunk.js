(this["webpackJsonpflicr-api-project"]=this["webpackJsonpflicr-api-project"]||[]).push([[0],{106:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),o=r(8),a=r.n(o),s=(r(78),r(79),r(10)),i=r(24),j=r(42),u=r.n(j),h=r(4),d=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(i.b,{className:u.a.navBlock,to:G,children:"find image"}),Object(h.jsx)(i.b,{className:u.a.navBlock,to:H,children:"favorites"})]})},b=r(68),l=r(30),O=function(e){var t=e.photo,r=t.farm,c=t.id,n=(t.isfamily,t.isfriend,t.ispublic,t.owner,t.secret),o=t.server;t.title;return Object(h.jsx)("div",{style:{width:"500px",height:"250px",backgroundImage:"url(https://farm".concat(r,".staticflickr.com/").concat(o,"/").concat(c,"_").concat(n,".jpg)")}})},p=r(137),f=r(138),x=r(46),g=r.n(x),v=r(61),m=r(23),P=r(62),_=r.n(P).a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=".concat("fe6a01fa9267d89be3df137d31d4607c","&per_page=20&page=100")}),E=function(e){return _.get("&text=".concat(e)).then((function(e){return console.log(e.data),e.data}))},k="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS",S="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-PHOTOS-IS-GETTING-PROGRESS",N="FLICR-API-MY-Project/PHOTOS-REDUCER/SET-SEARCH-NAME",R={searchName:"",page:0,pages:0,perpage:0,total:"",photo:[],isGettingPhotosSuccess:!1,isGettingPhotosProgress:!1,gettingPhotosError:""},T=function(e){return{type:S,isGettingPhotosProgress:e}},y=function(){var e=Object(l.c)((function(e){return e.photos})),t=Object(l.b)(),r=Object(c.useState)(""),n=Object(b.a)(r,2),o=n[0],a=n[1],s=function(){var e;""!==o.trim()&&t((e=o,function(){var t=Object(v.a)(g.a.mark((function t(r){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(T(!0)),t.next=3,E(e);case 3:"ok"===(c=t.sent).stat&&r((n=c.photos.photo,{type:k,photos:n})),r(T(!1));case 6:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.a,{type:"text",value:o,onChange:function(e){a(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&s()},variant:"outlined",placeholder:"Print your search"}),Object(h.jsx)(f.a,{onClick:s,children:"FIND"}),e.photo.map((function(e){return Object(h.jsx)(O,{photo:e},e.id)}))]})},C=r(31),I=r.n(C);var B=function(){return Object(h.jsxs)("div",{className:I.a.errorBlock,children:[Object(h.jsx)("div",{className:I.a.number,children:"404"}),Object(h.jsx)("div",{className:I.a.message,children:"Page not found!"}),Object(h.jsx)("div",{className:I.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},w=function(){return Object(h.jsx)("div",{children:"FavoritesPage"})},F=function(){return Object(h.jsx)("div",{children:"Header"})},G="/find",H="/favorites",L=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(h.jsx)(y,{})}}),Object(h.jsx)(s.a,{path:H,render:function(){return Object(h.jsx)(w,{})}}),Object(h.jsx)(s.a,{path:G,render:function(){return Object(h.jsx)(y,{})}}),Object(h.jsx)(s.a,{render:function(){return Object(h.jsx)(B,{})}})]})]})]})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,140)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),o(e),a(e)}))},M=r(67),D=r(26),J=Object(D.c)({photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{photo:t.photos});case S:return Object(m.a)(Object(m.a)({},e),{},{isGettingPhotosProgress:t.isGettingPhotosProgress});case N:return Object(m.a)(Object(m.a)({},e),{},{searchName:t.searchName});default:return e}}}),U=Object(D.d)(J,Object(D.a)(M.a));window.store=U,a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(l.a,{store:U,children:Object(h.jsx)(L,{})})})}),document.getElementById("root")),A()},31:function(e,t,r){e.exports={errorBlock:"Error404_errorBlock__1JP_z",number:"Error404_number__2zcL7",message:"Error404_message__3_s_r",cat:"Error404_cat__2_JJr"}},42:function(e,t,r){e.exports={navBlock:"Navigation_navBlock__3BpM4"}},78:function(e,t,r){},79:function(e,t,r){}},[[106,1,2]]]);
//# sourceMappingURL=main.8791d6d2.chunk.js.map