(this.webpackJsonpreactTask=this.webpackJsonpreactTask||[]).push([[0],{1:function(e,a,t){e.exports={clear:"Message_clear__cAnr_",container:"Message_container__-rvRk",blockCenter:"Message_blockCenter__P9bDY",avatarHolder:"Message_avatarHolder__1BsZx",blockRight:"Message_blockRight__2fofV",avatar:"Message_avatar__3LgY_"}},10:function(e,a,t){e.exports={App:"App_App__3ju9d"}},13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=(t(18),t(10)),o=t.n(i),s=t(1),m=t.n(s);var u=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.blockRight},"Hello, ",e.name,r.a.createElement("i",null,r.a.createElement("p",{className:m.a.textMessage},e.message)),r.a.createElement("p",{className:m.a.time},e.time)),r.a.createElement("div",{className:m.a.clear}),r.a.createElement("div",{className:m.a.avatarHolder},r.a.createElement("img",{className:m.a.avatar,src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:m.a.clear}),r.a.createElement("div",{className:m.a.blockCenter}))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Andrei",_="What type Data you put? 'Any' are not allowed!",v="22:00",E="https://i.ytimg.com/vi/Tp9B6gDCXnU/maxresdefault.jpg",h="React",f=" T_y_P_e_S nothing is sure everything is possible ",g="22:01";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",null," homeworks 1 "),r.a.createElement(u,{avatar:d,name:p,message:_,time:v}),r.a.createElement("hr",null),r.a.createElement(u,{avatar:E,name:h,message:f,time:g}),r.a.createElement("hr",null))},k=t(2);var y=function(e){var a=e.affair;return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:!0}),a.name," ",r.a.createElement("span",null,"priority--"),a.priority,r.a.createElement("button",{onClick:function(t){return function(a){e.deleteAffairCallback(a)}(a._id)}},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(w),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(k.a)(c,2),o=i[0],s=i[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):void 0}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(12),A=t(3),O=t.n(A),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i="".concat(l?O.a.error:O.a.valid),o=l?"input valid name":"add more name";return r.a.createElement("div",null,r.a.createElement("div",{className:O.a.group},r.a.createElement("input",{value:a,onChange:t,className:i,required:!0}),r.a.createElement("span",{className:O.a.bar}),r.a.createElement("label",{className:O.a.label},"put name here"),l&&r.a.createElement("span",{className:i},l)),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:O.a.hint},"total Users=",c),r.a.createElement("div",null,o))},x=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(!1),m=Object(k.a)(s,2),u=m[0],d=m[1],p=a.length;return r.a.createElement(S,{name:i,setNameCallback:function(e){o(e.target.value),0!==e.target.value.length&&e.target.value.trim()?d(!1):d(!0)},addUser:function(){0!==i.length&&i.trim()&&(alert("Hello ".concat(i," !")),t(i),o(""))},error:u,totalUsers:p})},G=t(11);var M=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:t,addUserCallback:function(e){var a={_id:Object(G.v1)(),name:e};l([].concat(Object(j.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var U=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(b,null),r.a.createElement(N,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,a,t){e.exports={errorInput:"Greeting_errorInput__2xK0J",superInput:"Greeting_superInput__3FL28",hint:"Greeting_hint__joZZp",valid:"Greeting_valid__3Zpch",error:"Greeting_error__h4ux0",group:"Greeting_group__3RjE6",label:"Greeting_label__8tAc5",bar:"Greeting_bar__2WaQQ"}}},[[13,1,2]]]);
//# sourceMappingURL=main.f957b63d.chunk.js.map