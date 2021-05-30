(this["webpackJsonplead-processor-client"]=this["webpackJsonplead-processor-client"]||[]).push([[0],{104:function(e,t,r){},124:function(e,t,r){},130:function(e,t,r){var s={"./ar":44,"./ar.js":44,"./az":45,"./az.js":45,"./be":46,"./be.js":46,"./bg":47,"./bg.js":47,"./bs":48,"./bs.js":48,"./ca":49,"./ca.js":49,"./cs":50,"./cs.js":50,"./cy":51,"./cy.js":51,"./da":52,"./da.js":52,"./de":53,"./de.js":53,"./el":54,"./el.js":54,"./en":29,"./en.js":29,"./es":55,"./es.js":55,"./et":56,"./et.js":56,"./eu":57,"./eu.js":57,"./fa":58,"./fa.js":58,"./fi":59,"./fi.js":59,"./fr":60,"./fr.js":60,"./hr":61,"./hr.js":61,"./hu":62,"./hu.js":62,"./id":63,"./id.js":63,"./it":64,"./it.js":64,"./ja":65,"./ja.js":65,"./ka":66,"./ka.js":66,"./ko":67,"./ko.js":67,"./lt":68,"./lt.js":68,"./lv":69,"./lv.js":69,"./mk":70,"./mk.js":70,"./mn":71,"./mn.js":71,"./ms":72,"./ms.js":72,"./nb_NO":73,"./nb_NO.js":73,"./nl":74,"./nl.js":74,"./pl":75,"./pl.js":75,"./pt":76,"./pt.js":76,"./pt_BR":77,"./pt_BR.js":77,"./ro":78,"./ro.js":78,"./ru":79,"./ru.js":79,"./se":80,"./se.js":80,"./sl":81,"./sl.js":81,"./sq":82,"./sq.js":82,"./sr":83,"./sr.js":83,"./sv":84,"./sv.js":84,"./tr":85,"./tr.js":85,"./ua":86,"./ua.js":86,"./uk":87,"./uk.js":87,"./vi":88,"./vi.js":88,"./zh":89,"./zh.js":89,"./zh_TW":90,"./zh_TW.js":90};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id=130},133:function(e,t,r){},134:function(e,t,r){},153:function(e,t,r){},155:function(e,t,r){},156:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r(23),n=r.n(a),c=r(5),i=r(30),o=r.n(i),l=(r(103),r(18)),d=r(13),j=Object(l.b)({name:"user",initialState:{user:null,loginError:null,isAuthenticated:!1,registerError:null,loader:!1},reducers:{loginSuccess:function(e,t){e.user=t.payload,e.isAuthenticated=!0},loginError:function(e,t){e.loginError=t.payload},RegisterError:function(e,t){e.registerError=t.payload},logoutSuccess:function(e,t){e.user=null},loaderToggle:function(e,t){e.loader=t.payload}}}),u=Object(l.b)({name:"lead",initialState:{image:{},images:[]},reducers:{GetImagesSuccess:function(e,t){e.images=t.payload},GetImageSuccess:function(e,t){e.image=t.payload}}}),b=Object(d.b)({user:j.reducer,image:u.reducer}),m=Object(l.a)({reducer:b}),O=(r(104),r(11)),h=r(4),p=r.p+"static/media/logo.a037958d.png",f=r(8),x=r.n(f),v=r(14),g=r(15),N=r.n(g),S=r(16),_=r.n(S),w=j.actions,E=w.loginSuccess,C=w.logoutSuccess,T=w.loginError,y=w.RegisterError,R=w.loaderToggle,D=function(e){var t="";return _.a.isString(e)?e:(_.a.forOwn(e,(function(e,r){t+=e[0]})),t)},k=(r(124),r(1)),P=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})).user,r=function(){e(function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.removeItem("user"),e.abrupt("return",t(C()));case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0.message));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())};return Object(k.jsxs)("div",{className:"",children:[t?Object(k.jsxs)("ul",{id:"dropdown1",className:"dropdown-content",children:[Object(k.jsx)("li",{className:"divider"}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{onClick:function(){return r()},href:"#!",children:"Logout"})})]}):Object(k.jsx)("ul",{}),Object(k.jsx)("nav",{className:"nav nav-fixed-bar white",children:Object(k.jsxs)("div",{className:"nav-wrapper",children:[Object(k.jsx)(O.b,{className:"brand-logo",to:"/",children:Object(k.jsx)("img",{className:"logo-img",src:p,alt:"logo"})}),Object(k.jsx)("a",{"data-target":"mobile-demo",className:"sidenav-trigger",children:Object(k.jsx)("i",{className:"material-icons",children:"menu"})}),Object(k.jsxs)("ul",{className:"right hide-on-med-and-down",children:[t?Object(k.jsx)("li",{children:Object(k.jsx)(O.b,{to:"/dashboard",children:"Dashboard"})}):Object(k.jsx)("li",{children:Object(k.jsx)(O.b,{to:"/register",children:"Signup"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"##",children:null===t||void 0===t?void 0:t.user.email})}),t?Object(k.jsx)("li",{children:Object(k.jsx)("a",{className:"dropdown-trigger",href:"#!","data-target":"dropdown1",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("i",{className:"col material-icons icon-menu-fix",children:"person"}),Object(k.jsx)("i",{className:"col material-icons icon-menu-fix",children:"arrow_drop_down"})]})})}):Object(k.jsx)("li",{})]})]})}),Object(k.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[(null===t||void 0===t?void 0:t.email)?Object(k.jsx)("li",{children:Object(k.jsx)(O.b,{to:"/dashboard",children:"Dashboard"})}):Object(k.jsx)("li",{children:Object(k.jsx)(O.b,{to:"/home",children:"Signup"})}),Object(k.jsxs)("li",{children:[" ",t?Object(k.jsx)("a",{onClick:function(){return r()},href:"#!",children:"Logout"}):""," "]})]})]})},A=r(17),F=r(6),I=r(19),L=r(27),U=r.n(L),W=(r(133),function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})).registerError,r=Object(s.useState)({email:"",password:"",name:"",password_confirmation:""}),a=Object(I.a)(r,2),n=a[0],i=a[1],o=Object(s.useState)({email:"",password:"",name:""}),l=Object(I.a)(o,2),d=l[0],j=l[1],u=function(e){i(Object(F.a)(Object(F.a)({},n),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(k.jsxs)("div",{className:"register center ",children:[Object(k.jsx)("h4",{className:"center header",children:"Signup"}),Object(k.jsx)("span",{className:"center red-text",children:t}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsxs)("div",{className:"input-field col s12 m6",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"account_circle"}),Object(k.jsx)("input",{id:"icon_prefix",type:"text",onChange:u,name:"name",className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_prefix",children:"Full name"}),Object(k.jsx)("span",{className:"red-text",children:d.name})]}),Object(k.jsxs)("div",{className:"input-field col s12 m6",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"mail"}),Object(k.jsx)("input",{id:"icon_prefix",type:"text",name:"email",onChange:u,className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_prefix",children:"Email"}),Object(k.jsx)("span",{className:"red-text",children:d.email})]})]}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsxs)("div",{className:"input-field col s12 m6",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"lock"}),Object(k.jsx)("input",{id:"icon_telephone",type:"tel",name:"password",onChange:u,className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_telephone",children:"Password"}),Object(k.jsx)("span",{className:"red-text",children:d.password})]}),Object(k.jsxs)("div",{className:"input-field col s12 m6",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"lock"}),Object(k.jsx)("input",{id:"icon_telephone",type:"tel",name:"password_confirmation",onChange:u,className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_telephone",children:"Verify Password"})]}),Object(k.jsxs)("div",{className:"button-dev row center",children:[Object(k.jsxs)("button",{onClick:function(){j({email:"",password:"",name:""});var t,r=new U.a(n,{email:"required|email",password:"required|min:8|confirmed",name:"required|string"}),s={};r.fails()?(_.a.forOwn(r.errors.errors,(function(e,t){s[t]=e[0]})),j(s)):e((t=n,function(){var e=Object(v.a)(x.a.mark((function e(r){var s,a,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(R(!0)),e.next=4,N.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,"/users"),t);case 4:return s=e.sent,localStorage.setItem("user",JSON.stringify(s.data)),e.abrupt("return",r(E(s.data)));case 9:return e.prev=9,e.t0=e.catch(0),c=D(null===(a=e.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message),r(y(c)),e.abrupt("return",r(R(!1)));case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},className:"btn waves-effect waves-light center",type:"submit",name:"action",children:["Submit",Object(k.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(k.jsxs)("h6",{className:"center header",children:["Already have an account? ",Object(k.jsx)(O.b,{to:"/login",children:" login"})]})]})]})]})}),B=(r(134),function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})).loginError,r=Object(s.useState)({email:"",password:""}),a=Object(I.a)(r,2),n=a[0],i=a[1],o=Object(s.useState)({email:"",password:""}),l=Object(I.a)(o,2),d=l[0],j=l[1],u=function(e){i(Object(F.a)(Object(F.a)({},n),{},Object(A.a)({},e.target.name,e.target.value)))};return Object(k.jsxs)("div",{className:"login center ",children:[Object(k.jsx)("h4",{className:"center header",children:"Login"}),Object(k.jsx)("span",{className:"center red-text",children:t}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"input-field col s12",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"mail"}),Object(k.jsx)("input",{onChange:u,name:"email",id:"email",type:"text",className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_prefix",children:"Email"}),Object(k.jsx)("span",{className:"red-text",children:d.email})]})}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsxs)("div",{className:"input-field col s12",children:[Object(k.jsx)("i",{className:"material-icons prefix",children:"lock"}),Object(k.jsx)("input",{onChange:u,name:"password",id:"icon_telephone",type:"tel",className:"validate"}),Object(k.jsx)("label",{htmlFor:"icon_telephone",children:"Password"}),Object(k.jsx)("span",{className:"red-text",children:d.password})]}),Object(k.jsxs)("div",{className:"input-field col s12 button-dev left",children:[Object(k.jsxs)("button",{onClick:function(){var t=new U.a(n,{email:"required|email",password:"required|min:8"});if(t.fails()){var r={email:t.errors.first("email"),password:t.errors.first("password")};j(r)}else e(function(e){var t=e.email,r=e.password;return function(){var e=Object(v.a)(x.a.mark((function e(s){var a,n,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(R(!0)),e.next=4,N.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,"/users/login"),{email:t,password:r});case 4:return a=e.sent,localStorage.setItem("user",JSON.stringify(a.data)),s(E(a.data)),e.abrupt("return",s(R(!1)));case 10:e.prev=10,e.t0=e.catch(0),i=D(null===(n=e.t0.response)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.message),s(T(i)),s(R(!1));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}(n))},className:"btn waves-effect waves-light",type:"submit",name:"action",children:["Submit",Object(k.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(k.jsxs)("h6",{className:"center header",children:["This is your first time? ",Object(k.jsx)(O.b,{to:"/register",children:"Register"})]})]})]})]})}),H=r(95),K=r(2),q=function(e){var t,r=e.component,s=Object(H.a)(e,["component"]),a=Object(c.b)(),n=Object(c.c)((function(e){return e.user})).user;n||(n=(n=localStorage.getItem("user"))?JSON.parse(n):n)&&a(function(e){return function(t){try{return t(E(e))}catch(r){return console.error(r.message)}}}(n));var i=(null===(t=n)||void 0===t?void 0:t.isAdmin)?"/admin":"/dashboard";return Object(k.jsx)(h.b,Object(F.a)(Object(F.a)({},s),{},{render:function(e){return n?s.auth?Object(k.jsx)(h.a,{to:i}):Object(k.jsx)(r,Object(F.a)({},e)):s.auth?Object(k.jsx)(r,Object(F.a)({},e)):Object(k.jsx)(h.a,{to:"/login"})}}))};q.prototypes={component:r.n(K).a.func.isRequired};var z=q,J=r(92),V=r.n(J),G=(r(153),function(){var e=Object(c.c)((function(e){return e.user})).loader;return Object(k.jsx)("div",{className:"loader",children:e?Object(k.jsx)(V.a,{type:"Circles",color:"#7cd1f9",height:"100",width:"100"}):Object(k.jsx)("span",{})})}),M=r(94),Q=r(33),X=r.n(Q),Y=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Cancel";return X()({title:e,text:t,icon:r,button:s})},Z=function(e,t){o.a.toast({html:e,inDuration:t,classes:"rounded #6b98c5 green"})},$=u.actions,ee=$.GetImagesSuccess,te=$.GetImageSuccess,re=j.actions.loaderToggle,se=function(e){var t="";return _.a.isString(e)?e:(_.a.forOwn(e,(function(e,r){t+=e[0]})),t)},ae=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var r,s,a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(re(!0)),e.next=4,N.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,"/images"));case 4:return r=e.sent,console.log(r),t(ee(r.data)),e.abrupt("return",t(re(!1)));case 10:e.prev=10,e.t0=e.catch(0),n=se(null===(s=e.t0.response)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.message),t(re(!1)),Y("Request Info",n,"warning");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},ne={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},ce={borderColor:"#2196f3"},ie={borderColor:"#00e676"},oe={borderColor:"#ff1744"},le=(r(155),function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.image})),r=t.image,a=t.images;Object(s.useEffect)((function(){e(ae())}),[r]);var n=Object(s.useCallback)((function(t){t.forEach((function(t){var r,s=new FormData;s.append("image",t),e((r=s,function(){var e=Object(v.a)(x.a.mark((function e(t){var s,a,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(re(!0)),e.next=4,N.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,"/images/upload"),r);case 4:return s=e.sent,t(te(s.data)),Z("New image added",1e4),e.abrupt("return",t(ae()));case 10:e.prev=10,e.t0=e.catch(0),c=se(null===(a=e.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message),t(re(!1)),Y("Request Info",c,"warning");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}))})),i=Object(M.a)({onDrop:n,accept:"image/*"}),o=i.getRootProps,l=i.getInputProps,d=i.isDragActive,j=i.isDragAccept,u=i.isDragReject,b=Object(s.useMemo)((function(){return Object(F.a)(Object(F.a)(Object(F.a)(Object(F.a)({},ne),d?ce:{}),j?ie:{}),u?oe:{})}),[d,u,j]);return Object(k.jsxs)("div",{className:"dashboard",children:[Object(k.jsx)("h5",{className:"center header",children:"Image Upload Dashboard"}),Object(k.jsx)("div",{className:"dashboard-wrapper center",children:Object(k.jsxs)("div",Object(F.a)(Object(F.a)({className:"file-drop"},o({style:b})),{},{children:[Object(k.jsx)("input",Object(F.a)({},l())),Object(k.jsx)("p",{children:"Drag and drop some files here, or click to select files"})]}))}),Object(k.jsx)("div",{className:"card-container",children:Object(k.jsx)("div",{className:"row",children:a.map((function(e,t){return Object(k.jsx)("div",{className:"col s12 m3 l2",children:Object(k.jsx)("div",{className:"card",children:Object(k.jsxs)("div",{className:"card-image",children:[Object(k.jsx)("a",{href:e.fileName,children:Object(k.jsx)("img",{src:e.fileName})}),Object(k.jsx)("span",{className:"card-title",children:"My Image"})]})})},t)}))})})]})}),de=function(){return Object(k.jsx)(O.a,{children:Object(k.jsxs)("div",{className:"primary-layout",children:[Object(k.jsx)("header",{children:Object(k.jsx)(h.d,{children:Object(k.jsx)(h.b,{path:"*",component:P})})}),Object(k.jsxs)("main",{children:[Object(k.jsx)(G,{}),Object(k.jsxs)(h.d,{children:[Object(k.jsx)(z,{exact:!0,path:"/home",component:le}),Object(k.jsx)(z,{exact:!0,path:"/login",component:B,auth:!0}),Object(k.jsx)(z,{exact:!0,path:"/register",component:W,auth:!0}),Object(k.jsx)(z,{exact:!0,path:"/dashboard",component:le}),Object(k.jsx)(h.a,{to:"/home"})]})]})]})})},je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,157)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),s(e),a(e),n(e),c(e)}))};(function(){N.a.interceptors.request.use((function(e){var t=localStorage.getItem("user");return(t=t?JSON.parse(t):t)&&(e.headers.authorization="Bearer ".concat(t.token)),e}),(function(e){return Promise.reject(e)}))})(),n.a.render(Object(k.jsx)(c.a,{store:m,children:Object(k.jsx)(de,{})}),document.getElementById("root")),je()}},[[156,1,2]]]);
//# sourceMappingURL=main.da792934.chunk.js.map