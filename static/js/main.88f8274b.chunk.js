(this.webpackJsonpreactTask=this.webpackJsonpreactTask||[]).push([[0],[,,,function(e,a,t){e.exports={clear:"Message_clear__cAnr_",container:"Message_container__-rvRk",blockCenter:"Message_blockCenter__P9bDY",avatarHolder:"Message_avatarHolder__1BsZx",blockRight:"Message_blockRight__2fofV",avatar:"Message_avatar__3LgY_"}},function(e,a,t){e.exports={errorInput:"Greeting_errorInput__2xK0J",superInput:"Greeting_superInput__3FL28",hint:"Greeting_hint__joZZp",valid:"Greeting_valid__3Zpch",error:"Greeting_error__h4ux0",group:"Greeting_group__3RjE6",label:"Greeting_label__8tAc5",bar:"Greeting_bar__2WaQQ"}},,function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__2VIbF",errClass:"SuperInputText_errClass__3LLlu",error:"SuperInputText_error__2E_aU",superInput:"SuperInputText_superInput__nqfGS"}},,function(e,a,t){e.exports={default:"SuperButton_default__32Jpd",red:"SuperButton_red__1j0Pc"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1Cz2S",spanClassName:"SuperCheckbox_spanClassName__2QlEC",finalInputClassName:"SuperCheckbox_finalInputClassName__cVkNZ"}},function(e,a,t){e.exports={spanClass:"SuperEditableSpan_spanClass__108q7",testInput:"SuperEditableSpan_testInput__1pePY"}},function(e,a,t){e.exports={form_radio_btn:"SuperRadio_form_radio_btn__1M9Nt",wrapper:"SuperRadio_wrapper__VjT_R"}},,,,,function(e,a,t){e.exports={App:"App_App__3ju9d"}},,function(e,a,t){e.exports={blue:"HW4_blue__3qcDZ",column:"HW4_column__urSr3"}},,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(25),t(16)),s=t.n(o),i=t(3),u=t.n(i);var m=function(e){return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.blockRight},"Hello, ",e.name,r.a.createElement("i",null,r.a.createElement("p",{className:u.a.textMessage},e.message)),r.a.createElement("p",{className:u.a.time},e.time)),r.a.createElement("div",{className:u.a.clear}),r.a.createElement("div",{className:u.a.avatarHolder},r.a.createElement("img",{className:u.a.avatar,src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:u.a.clear}),r.a.createElement("div",{className:u.a.blockCenter}))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Andrei",h="What type Data you put? 'Any' are not allowed!",_="22:00",E="https://i.ytimg.com/vi/Tp9B6gDCXnU/maxresdefault.jpg",v="React",g=" T_y_P_e_S nothing is sure everything is possible ",f="22:01";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",null," homeworks 1 "),r.a.createElement(m,{avatar:p,name:d,message:h,time:_}),r.a.createElement("hr",null),r.a.createElement(m,{avatar:E,name:v,message:g,time:f}),r.a.createElement("hr",null))},C=t(1);var k=function(e){var a=e.affair;return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:!0}),a.name," ",r.a.createElement("span",null,"priority--"),a.priority,r.a.createElement("button",{onClick:function(t){return function(a){e.deleteAffairCallback(a)}(a._id)}},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),a=Object(C.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(C.a)(c,2),s=o[0],i=o[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):void 0}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(19),y=t(4),x=t.n(y),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="".concat(l?x.a.error:x.a.valid),s=l?"input valid name":"add more name";return r.a.createElement("div",null,r.a.createElement("div",{className:x.a.group},r.a.createElement("input",{value:a,onChange:t,className:o,required:!0}),r.a.createElement("span",{className:x.a.bar}),r.a.createElement("label",{className:x.a.label},"put name here"),l&&r.a.createElement("span",{className:o},l)),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:x.a.hint},"total Users=",c),r.a.createElement("div",null,s))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(!1),u=Object(C.a)(i,2),m=u[0],p=u[1],d=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){s(e.target.value),0!==e.target.value.length&&e.target.value.trim()?p(!1):p(!0)},addUser:function(){0!==o.length&&o.trim()&&(alert("Hello ".concat(o," !")),t(o),s(""))},error:m,totalUsers:d})},T=t(17);var A=function(){var e=Object(n.useState)([]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(T.v1)(),name:e};l([].concat(Object(S.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(2),F=t(6),B=t.n(F),G=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(B.a.error," ").concat(o||""),u="".concat(B.a.errorInput," ").concat(c?B.a.errClass:B.a.superInput);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},s)),c&&r.a.createElement("span",{className:i},c))},M=t(18),R=t.n(M),H=t(8),U=t.n(H),J=function(e){var a=e.red,t=e.className,n=Object(P.a)(e,["red","className"]),l="".concat(a?U.a.red:U.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},W=t(9),D=t.n(W),Z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(D.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){console.log(e.currentTarget.checked),t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(C.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(J,{red:!0,onClick:o},"delete "),r.a.createElement(Z,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(Z,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=t(10),K=t.n(L),V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(C.a)(o,2),i=s[0],u=s[1],m=l||{},p=m.children,d=m.onDoubleClick,h=(m.className,Object(P.a)(m,["children","onDoubleClick","className"])),_="".concat(K.a.spanClass);console.log("restProps=  ",c),console.log("restSpanProps=  ",h),console.log("children=  ",p),console.log("spanClassName=  ",_);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()},style:{width:"320px"}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),d&&d(e)},className:_},h),p||c.value))};function Y(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Q(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Y("test",{x:"A",y:1});Q("test",{x:"",y:0});var X=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){Y("editable-span-value",t)}},"save"),r.a.createElement(J,{onClick:function(){var e=JSON.stringify(Q("editable-span-value",{}));l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=function(e){var a=e.options;e.onChange,e.onChangeOption,Object(P.a)(e,["options","onChange","onChangeOption"]),a&&a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e,selected:1==a},e)}))},$=t(11),ee=t.n($),ae=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement("div",{className:ee.a.wrapper},t)},te=["x","y","z","w"];var ne=function(){var e=Object(n.useState)(te[2]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(z,{options:te,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ae,{name:"radio",options:te,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(A,null),r.a.createElement(q,null),r.a.createElement(X,null),r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.88f8274b.chunk.js.map