(this.webpackJsonpreactTask=this.webpackJsonpreactTask||[]).push([[0],{12:function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__1CKJZ",errClass:"SuperInputText_errClass__KfcbZ",error:"SuperInputText_error__10v_q",superInput:"SuperInputText_superInput__14vv9"}},14:function(e,a,t){e.exports={first:"eror_first__tPOlk",error404:"eror_error404__2z_8D",error_wrapper:"eror_error_wrapper__238-b"}},19:function(e,a,t){e.exports={default:"SuperButton_default__2FAfp",red:"SuperButton_red__2LTnq"}},20:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3SF1g",spanClassName:"SuperCheckbox_spanClassName__1JTsY",finalInputClassName:"SuperCheckbox_finalInputClassName__mQfR2"}},21:function(e,a,t){e.exports={spanClass:"SuperEditableSpan_spanClass__1Wzrb",testInput:"SuperEditableSpan_testInput__1ZJC4"}},29:function(e,a,t){e.exports={blue:"HW4_blue__kqmuW",column:"HW4_column__3rlMw"}},31:function(e,a,t){e.exports=t(44)},36:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(36),t(5)),i=t(2),u=t(6),s=t.n(u);var m=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(e){"link1"===e&&l("link1"),"link2"===e&&l("link2"),"link3"===e&&l("link3")},u="link1"===t?s.a.active:"",m="link2"===t?s.a.active:"",d="link3"===t?s.a.active:"";return console.log("link_status1=     "+u),r.a.createElement("div",null,r.a.createElement("section",{className:s.a.head},r.a.createElement("h1",null,"Home work")),r.a.createElement("input",{type:"checkbox",id:"hmt",className:s.a.hidden_menu_ticker}),r.a.createElement("label",{className:s.a.btn_menu,htmlFor:"hmt"},r.a.createElement("span",{className:s.a.first}),r.a.createElement("span",{className:s.a.second}),r.a.createElement("span",{className:s.a.third})),r.a.createElement("ul",{className:s.a.hidden_menu},r.a.createElement("li",null,r.a.createElement(o.b,{onClick:function(){return c("link1")},className:u,to:"/pre-junior"},"Pre-junior ")),r.a.createElement("li",null,r.a.createElement(o.b,{onClick:function(){return c("link2")},className:m,to:"/junior"},"Junior ")),r.a.createElement("li",null,r.a.createElement(o.b,{onClick:function(){return c("link3")},className:d,to:"/juniorPlus"},"JuniorPlus "))))};var d=function(){return r.a.createElement("div",null,r.a.createElement(m,null))},E=t(14),p=t.n(E);var _=function(){return r.a.createElement("div",{className:p.a.error_wrapper},r.a.createElement("section",{className:p.a.error404},r.a.createElement("h1",null,"Error 404"),r.a.createElement("h1",null,"Page not found!"),r.a.createElement("hr",null),r.a.createElement("h1",null,"Choose the page from list the below")),r.a.createElement("ul",{className:p.a.first},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/pre-junior"}," go home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/junior"},"go work ")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/juniorPlus"},"go study "))))},h=t(7),v=t.n(h);var f=function(e){return r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.blockRight},"Hello, ",e.name,r.a.createElement("i",null,r.a.createElement("p",{className:v.a.textMessage},e.message)),r.a.createElement("p",{className:v.a.time},e.time)),r.a.createElement("div",{className:v.a.clear}),r.a.createElement("div",{className:v.a.avatarHolder},r.a.createElement("img",{className:v.a.avatar,src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:v.a.clear}),r.a.createElement("div",{className:v.a.blockCenter}))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Andrei",k="What type Data you put? 'Any' are not allowed!",C="22:00",N="https://i.ytimg.com/vi/Tp9B6gDCXnU/maxresdefault.jpg",y="React",j=" T_y_P_e_S nothing is sure everything is possible ",O="22:01";var x=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",null," homeworks 1 "),r.a.createElement(f,{avatar:g,name:b,message:k,time:C}),r.a.createElement("hr",null),r.a.createElement(f,{avatar:N,name:y,message:j,time:O}),r.a.createElement("hr",null))};var S=function(e){var a=e.affair;return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:!0}),a.name," ",r.a.createElement("span",null,"priority--"),a.priority,r.a.createElement("button",{onClick:function(t){return function(a){e.deleteAffairCallback(a)}(a._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var P=function(){var e=Object(n.useState)(I),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):void 0}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(30),J=t(9),A=t.n(J),F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="".concat(l?A.a.error:A.a.valid),i=l?"input valid name":"add more name";return r.a.createElement("div",null,r.a.createElement("div",{className:A.a.group},r.a.createElement("input",{value:a,onChange:t,className:o,required:!0}),r.a.createElement("span",{className:A.a.bar}),r.a.createElement("label",{className:A.a.label},"put name here"),l&&r.a.createElement("span",{className:o},l)),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:A.a.hint},"total Users=",c),r.a.createElement("div",null,i))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],E=m[1],p=a.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){u(e.target.value),0!==e.target.value.length&&e.target.value.trim()?E(!1):E(!0)},addUser:function(){0!==o.length&&o.trim()&&(alert("Hello ".concat(o," !")),t(o),u(""))},error:d,totalUsers:p})},U=t(28);var B=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(U.v1)(),name:e};l([].concat(Object(T.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=t(8),W=t(12),M=t.n(W),R=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(M.a.error," ").concat(o||""),s="".concat(M.a.errorInput," ").concat(c?M.a.errClass:M.a.superInput);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},i)),c&&r.a.createElement("span",{className:u},c))},D=t(29),z=t.n(D),L=t(19),q=t.n(L),K=function(e){var a=e.red,t=e.className,n=Object(G.a)(e,["red","className"]),l="".concat(a?q.a.red:q.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(20),X=t.n(Z),Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){console.log(e.currentTarget.checked),t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var Q=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(R,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(K,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(Y,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(P,null),r.a.createElement(B,null),r.a.createElement(Q,null))},$=t(1);var ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Junior Page "))};var ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," JuniorPlus Page "))},te="/pre-junior",ne="/junior",re="/juniorPlus";var le=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement($.b,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:te})}}),r.a.createElement($.b,{path:te,render:function(){return r.a.createElement(V,null)}}),r.a.createElement($.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement($.b,{path:re,render:function(){return r.a.createElement(ae,null)}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement($.b,{render:function(){return r.a.createElement(_,null)}})))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(d,null),r.a.createElement(le,null)))},oe=t(21),ie=t.n(oe),ue=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(G.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,p=d.onDoubleClick,_=(d.className,Object(G.a)(d,["children","onDoubleClick","className"])),h="".concat(ie.a.spanClass);console.log("restProps=  ",c),console.log("restSpanProps=  ",_),console.log("children=  ",E),console.log("spanClassName=  ",h);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(R,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()},style:{width:"320px"}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:h},_),E||c.value))};function se(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function me(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}se("test",{x:"A",y:1});me("test",{x:"",y:0});var de=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ue,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(K,{onClick:function(){se("editable-span-value",t)}},"save"),r.a.createElement(K,{onClick:function(){var e=JSON.stringify(me("editable-span-value",{}));l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ee=function(e,a){switch(a.type){case"sort":var t=[];for(var n in e)t[n]=e[n];return"up"==a.payload&&t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:void 0})),"down"==a.payload&&t.sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:void 0})),t;case"check":return e.filter((function(e){return e.age>17}));default:return e}},pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var _e=function(){var e=Object(n.useState)(pe),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){l(Ee(pe,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){l(Ee(pe,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(K,{onClick:function(){l(Ee(pe,{type:"check"}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var he=function(){return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement(ce,null),r.a.createElement(de,null),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={active:"navigation_active__sxw-0",head:"navigation_head__3RJpz",hidden_menu_ticker:"navigation_hidden_menu_ticker__2A2Cf",btn_menu:"navigation_btn_menu__2wPkk",hidden_menu:"navigation_hidden_menu__1WdDx",first:"navigation_first__3TyLv",second:"navigation_second__2JDIL",third:"navigation_third__Bf8IZ"}},7:function(e,a,t){e.exports={clear:"Message_clear__1rLRi",container:"Message_container__AHEzB",blockCenter:"Message_blockCenter__OaLV6",avatarHolder:"Message_avatarHolder__2D7lo",blockRight:"Message_blockRight__3yfH0",avatar:"Message_avatar__2Gv54"}},9:function(e,a,t){e.exports={errorInput:"Greeting_errorInput__WJzbs",superInput:"Greeting_superInput__F02UH",hint:"Greeting_hint__1UA6l",valid:"Greeting_valid__3sGO3",error:"Greeting_error__2J54T",group:"Greeting_group__2aUjc",label:"Greeting_label__EJiIT",bar:"Greeting_bar__2iXzk"}}},[[31,1,2]]]);
//# sourceMappingURL=main.f9a47f04.chunk.js.map