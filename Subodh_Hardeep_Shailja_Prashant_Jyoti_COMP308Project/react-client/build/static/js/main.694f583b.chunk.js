(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=a(12),m=(a(51),a(7)),i=a.n(m),s=a(10),u=a(6),p=a(20),d=a(23),E=a.n(d),g=a(9),b=a.n(g),f=a(11),h=a(14),v=a(1),y=a(8),j=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmpassword:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],o=function(e){r(Object(h.a)({},a,Object(f.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),b.a.post("/register",a).then((function(e){console.log(e),localStorage.setItem("token",e.headers["x-auth-token"]),localStorage.setItem("time",(new Date).getTime()),window.location="/"})).catch((function(e){console.log(e)}))}},l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"First Name"),l.a.createElement(v.a.Control,{type:"text",name:"firstName",placeholder:"Enter first name",value:a.firstName,onChange:o})),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Last Name"),l.a.createElement(v.a.Control,{type:"text",name:"lastName",placeholder:"Enter last name",value:a.lastName,onChange:o})),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Email address"),l.a.createElement(v.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:a.email,onChange:o}),l.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:o})),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Confirm Password"),l.a.createElement(v.a.Control,{type:"password",name:"confirmpassword",placeholder:"Confirm Password",value:a.confirmpassword,onChange:o})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))},w=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),m=c[0],p=c[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),g=E[0],j=E[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:.05,t=localStorage.getItem("token"),a=localStorage.getItem("time"),void 0===t&&r("Not Authorised"),a&&(new Date).getTime()-a>18e4?(console.log("localstorage for true",(new Date).getTime()-a>18e4),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/"):(j(t),console.log("localstorage for false",(new Date).getTime()-a>18e4));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=Object(n.useState)({patientid:"",patientemail:"",bodytemperature:"",heartrate:"",bloodpressure:"",respiratoryrate:""}),S=Object(u.a)(w,2),O=S[0],x=S[1],N=function(e){x(Object(h.a)({},O,Object(f.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",null,null===a&&null===m?l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),b.a.post("/reportnurse",O,{headers:{"x-auth-token":g,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){r("Submmited"),p(!0),console.log(e.data.date)})).catch((function(e){console.log(e)}))}},l.a.createElement("h3",null,"Add Report"),l.a.createElement(v.a.Group,{controlId:"formBasiEmail"},l.a.createElement(v.a.Label,null,"Patient Id"),l.a.createElement(v.a.Control,{type:"text",name:"patientid",value:O.patientid,placeholder:"Enter patient id",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Patient Email"),l.a.createElement(v.a.Control,{type:"email",name:"patientemail",value:O.patientemail,placeholder:"Enter patient email",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasiccInput"},l.a.createElement(v.a.Label,null,"Body Temperature"),l.a.createElement(v.a.Control,{type:"text",name:"bodytemperature",value:O.bodytemperature,placeholder:"Enter body temperature",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Heart Rate"),l.a.createElement(v.a.Control,{type:"text",name:"heartrate",value:O.heartrate,placeholder:"heartrate",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasiccPassword"},l.a.createElement(v.a.Label,null,"Blood Pressure"),l.a.createElement(v.a.Control,{type:"text",name:"bloodpressure",value:O.bloodpressure,placeholder:"blood pressure",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicccEmail"},l.a.createElement(v.a.Label,null,"Respiratory Rate"),l.a.createElement(v.a.Control,{type:"text",name:"respiratoryrate",value:O.respiratoryrate,placeholder:"respiratory rate",onChange:N})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))):l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){r(null),p(null),x({patientid:"",patientemail:"",bodytemperature:"",heartrate:"",bloodpressure:"",respiratoryrate:""})}},l.a.createElement("p",null," ",a,"..."),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit Another"))))},S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("Loading"),c=Object(u.a)(o,2),m=c[0],p=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=.05,a=localStorage.getItem("token"),n=localStorage.getItem("time"),void 0===a&&p("Not Authorised"),!(n&&(new Date).getTime()-n>60*t*60*1e3)){e.next=11;break}console.log("localstorage for true",(new Date).getTime()-n>60*t*60*1e3),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/",e.next=14;break;case 11:return console.log("localstorage for false",(new Date).getTime()-n>60*t*60*1e3),e.next=14,b.a.get("/listallreports",{headers:{"x-auth-token":a,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){r(e.data)})).catch((function(e){}));case 14:case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",null,0!==a.length?l.a.createElement("div",{className:"p-3"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Patient Email"),l.a.createElement("th",null,"Heart Rate"),l.a.createElement("th",null,"Blood Pressure"),l.a.createElement("th",null,"Respiratory Rate"),l.a.createElement("th",null,"Body Temperature"),l.a.createElement("th",null,"Nurse Email"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.patientemail),l.a.createElement("td",null,e.heartrate),l.a.createElement("td",null,e.bloodpressure),l.a.createElement("td",null,e.respiratoryrate),l.a.createElement("td",null,e.bodytemperature),l.a.createElement("td",null,e.nursename))}))))):l.a.createElement("div",null," ",l.a.createElement("p",null," ",m,"...")))},O=function(){var e=Object(n.useState)({patientemail:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(u.a)(o,2),m=c[0],p=c[1],d=Object(n.useState)([]),E=Object(u.a)(d,2),g=E[0],y=E[1],j=Object(n.useState)(""),w=Object(u.a)(j,2),S=w[0],O=w[1];Object(n.useEffect)((function(){var e=function(){var t=Object(s.a)(i.a.mark((function t(){var n,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("token"),l=localStorage.getItem("time"),.05,void 0===n&&O("Not Authorised"),!(l&&(new Date).getTime()-l>18e4)){t.next=11;break}console.log("localstorage from searchbyemail true",(new Date).getTime()-l>18e4),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/",t.next=13;break;case 11:return t.next=13,b.a.post("/listbyemail",a,{headers:{"x-auth-token":n,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){y(e.data)})).catch((function(e){}));case 13:return t.abrupt("return",(function(){e()}));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}),[m]);return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Email address"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Enter email",name:"patientemail",onChange:function(e){r(Object(h.a)({},a,Object(f.a)({},e.target.name,e.target.value)))},value:a.patientemail,required:!0}))),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(){p(a.patientemail)}},"Search")),0!==g.length?l.a.createElement("div",{className:"justify-content-center p-3 "},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Patient Email"),l.a.createElement("th",null,"Heart Rate"),l.a.createElement("th",null,"Blood Pressure"),l.a.createElement("th",null,"Respiratory Rate"),l.a.createElement("th",null,"Body Temperature"),l.a.createElement("th",null,"Nurse Name"))),l.a.createElement("tbody",null,g.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.patientemail),l.a.createElement("td",null,e.heartrate),l.a.createElement("td",null,e.bloodpressure),l.a.createElement("td",null,e.respiratoryrate),l.a.createElement("td",null,e.bodytemperature),l.a.createElement("td",null,e.nursename))}))))):l.a.createElement("div",{className:"d-flex justify-content-center p-3 "}," ",l.a.createElement("p",null,S,"...")))},x=a(26);var N=function(){var e=Object(n.useState)("auth"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({username:"",password:""}),c=Object(u.a)(o,2),m=c[0],p=c[1],d=function(e){p(Object(h.a)({},m,Object(f.a)({},e.target.name,e.target.value)))},g=Object(n.useState)(""),j=Object(u.a)(g,2),w=j[0],S=j[1];Object(n.useEffect)((function(){try{var e=localStorage.getItem("token"),t=localStorage.getItem("time");if(e&&(new Date).getTime()-t>18e4)localStorage.clear();else{var a=E()(e);S({user:a})}}catch(n){}}),[a]);var O=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pressd here"),e.prev=1,e.next=4,b.a.post("https://tryingagain12.herokuapp.com/login",m);case 4:t=e.sent,console.log(t),void 0!==t.data.screen&&(localStorage.setItem("token",t.headers["x-auth-token"]),localStorage.setItem("time",(new Date).getTime()),r("notauth"),S(t.data.user),window.location="/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,""===w?l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(v.a,null,l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Email address"),l.a.createElement(v.a.Control,{type:"email",name:"username",placeholder:"Enter email",onChange:d})),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:d})),l.a.createElement(y.a,{variant:"primary",type:"submit",onClick:O},"Login"))):l.a.createElement("div",null,l.a.createElement(x.a,null,l.a.createElement("h1",null,"Hello, world!"),l.a.createElement("h1",null,"Welcome ",w.user.firstName," "),l.a.createElement("p",null,"How are you feeling today?"),l.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("form",null,l.a.createElement(y.a,{variant:"primary"},"Learn more")))))},k=function(e){var t=e.u;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(c.b,{className:"navbar-brand",to:"#"},"Self Assessment"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(c.c,{className:"nav-item nav-link active",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"})),!t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.c,{className:"nav-item nav-link",to:"/login"},"Login"),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/registration"},"Registration")),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.c,{className:"nav-item nav-link",to:"/profile"},t.user.firstName),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/logout"},"Logout")),t&&"Nurse"===t.user.role&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.c,{className:"nav-item nav-link",to:"/reportnurse"},"Add Report"),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/addTips"},"Add Tips"),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/searchbyemail"},"Search By Email"),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/searchallreports"},"Search")),t&&"Patient"===t.user.role&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c.c,{className:"nav-item nav-link",to:"/reportuser"},"Add Report"),l.a.createElement(c.c,{className:"nav-item nav-link",to:"/emergency"},"Emergency")))))},I=function(){var e=Object(n.useState)("Loading"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(u.a)(o,2),m=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var e=localStorage.getItem("token"),t=localStorage.getItem("time");if(void 0===e&&r("Not Authorised"),t&&(new Date).getTime()-t>18e4)localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/";else{var a=E()(e);i({user12:a})}}(),r("Loaded")}),[a]),l.a.createElement("div",null,l.a.createElement(x.a,null,l.a.createElement("h1",null,"Hello, ",m.role,"!"),l.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("p",null,l.a.createElement(y.a,{variant:"primary"},"Learn more"))))},C=function(){return Object(n.useEffect)((function(){try{localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/"}catch(e){}}),[]),l.a.createElement("div",null,l.a.createElement("p",null,"Please log in"))},T=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),m=c[0],p=c[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),g=E[0],j=E[1],w=Object(n.useState)({pulserate:"",bodytemperature:"",weight:"",bloodpressure:"",respiratoryrate:""}),S=Object(u.a)(w,2),O=S[0],x=S[1],N=function(e){x(Object(h.a)({},O,Object(f.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:.05,t=localStorage.getItem("token"),a=localStorage.getItem("time"),void 0===t&&r("Not Authorised"),a&&(new Date).getTime()-a>18e4?(console.log("localstorage for true",(new Date).getTime()-a>18e4),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/"):(j(t),console.log("localstorage for false",(new Date).getTime()-a>18e4));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return l.a.createElement("div",null,null===a&&null===m?l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),b.a.post("/reportuser",O,{headers:{"x-auth-token":g,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){r("Thanks! See you tomorrow"),p(!0),console.log(e.data.date)})).catch((function(e){console.log(e)}))}},l.a.createElement("h3",null,"Add Report"),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Pulse Rate"),l.a.createElement(v.a.Control,{type:"text",name:"pulserate",value:O.pulserate,placeholder:"Enter pulse rate",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicInput"},l.a.createElement(v.a.Label,null,"Body Temperature"),l.a.createElement(v.a.Control,{type:"text",name:"bodytemperature",value:O.bodytemperature,placeholder:"Enter body temperature",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Weight"),l.a.createElement(v.a.Control,{type:"text",name:"weight",value:O.weight,placeholder:"weight",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicPassword"},l.a.createElement(v.a.Label,null,"Blood Pressure"),l.a.createElement(v.a.Control,{type:"text",name:"bloodpressure",value:O.bloodpressure,placeholder:"blood pressure",onChange:N})),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Respiratory Rate"),l.a.createElement(v.a.Control,{type:"text",name:"respiratoryrate",value:O.respiratoryrate,placeholder:"respiratory rate",onChange:N})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")))):l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){r(null),p(null),x({pulserate:"",bodytemperature:"",weight:"",bloodpressure:"",respiratoryrate:""})}},l.a.createElement("p",null," ",a,"..."),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit Another"))))},B=function(){var e=Object(n.useState)({message:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(u.a)(o,2),m=c[0],p=c[1],d=Object(n.useState)(null),E=Object(u.a)(d,2),g=E[0],j=E[1],w=Object(n.useState)(null),S=Object(u.a)(w,2),O=S[0],x=S[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:.05,t=localStorage.getItem("token"),a=localStorage.getItem("time"),void 0===t&&j("Not Authorised"),a&&(new Date).getTime()-a>18e4?(console.log("localstorage for true",(new Date).getTime()-a>18e4),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/"):(p(t),console.log("localstorage for false",(new Date).getTime()-a>18e4));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return l.a.createElement("div",{className:"d-flex justify-content-center"},null===g&&null===O?l.a.createElement("div",null,l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),b.a.post("/emergency",a,{headers:{"x-auth-token":m,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){j("Thank You! We will contact you shortly"),x(!0),console.log(e.data.date)})).catch((function(e){console.log(e)}))}},l.a.createElement("h3",null,"Emergency"),l.a.createElement(v.a.Group,{controlId:"formBasicEmail"},l.a.createElement(v.a.Label,null,"Message"),l.a.createElement(v.a.Control,{type:"text",name:"message",value:a.message,placeholder:"message",onChange:function(e){r(Object(h.a)({},a,Object(f.a)({},e.target.name,e.target.value)))}})),l.a.createElement(y.a,{variant:"danger",type:"submit"},"Send"))):l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){}},l.a.createElement("p",null," ",g),l.a.createElement(y.a,{variant:"success",type:"submit"},"Contact Emergency"))))},L=function(){var e=Object(n.useState)({tip:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(u.a)(o,2),m=c[0],p=c[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),g=E[0],j=E[1],w=Object(n.useState)(null),S=Object(u.a)(w,2),O=S[0],x=S[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:.05,t=localStorage.getItem("token"),a=localStorage.getItem("time"),void 0===t&&p("Not Authorised"),a&&(new Date).getTime()-a>18e4?(console.log("localstorage for true",(new Date).getTime()-a>18e4),localStorage.removeItem("token"),localStorage.removeItem("time"),window.location="/"):(j(t),console.log("localstorage for false",(new Date).getTime()-a>18e4));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return l.a.createElement("div",{className:"d-flex justify-content-center"},null===m&&null===O?l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),b.a.post("/addTips",a,{headers:{"x-auth-token":g,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){console.log(e),p("Submmited"),x(!0)})).catch((function(e){console.log(e)}))}},l.a.createElement(v.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(v.a.Label,null," Tip"),l.a.createElement(v.a.Control,{as:"textarea",rows:"3",name:"tip",placeholder:"tip",value:a.tip,onChange:function(e){r(Object(h.a)({},a,Object(f.a)({},e.target.name,e.target.value)))}})),l.a.createElement(y.a,{className:"center",variant:"primary",type:"submit"},"Submit")))):l.a.createElement("div",{className:"d-flex p-4"},l.a.createElement(v.a,{onSubmit:function(e){p(null),x(null),r({tip:""})}},l.a.createElement("p",null," ",m,"..."),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit Another"))))},D=a(21);var A=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement(D.a,{activeIndex:a,onSelect:function(e,t){r(e)}},l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.pexels.com/photos/3082452/pexels-photo-3082452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"First slide"}),l.a.createElement(D.a.Caption,null,l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"Second slide"}),l.a.createElement(D.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(D.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1584521764592-48f33fe7e088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Third slide"}),l.a.createElement(D.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))},P=a(22);var G=function(){return l.a.createElement(P.a,{className:"text-center"},l.a.createElement(P.a.Header,null,"Self Assessment"),l.a.createElement(P.a.Body,null,l.a.createElement(P.a.Title,null,"Self Assessment"),l.a.createElement(P.a.Text,null,"Copyright \xa9 2020 Emerging Technologies Inc")),l.a.createElement(P.a.Footer,{className:"text-muted"},"Copyright"))};var R=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(u.a)(o,2),m=c[0],d=c[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/getTips").then((function(e){d(e.data)})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{var t=localStorage.getItem("token"),a=E()(t);r({user:a})}catch(n){}e()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{u:a}),l.a.createElement(A,null),l.a.createElement("p",null,l.a.createElement("i",null,l.a.createElement("marquee",null,"Tips of the Day: ",m)," ")),l.a.createElement("div",{className:"p-4"},l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/login",component:N}),l.a.createElement(p.b,{path:"/logout",component:C}),l.a.createElement(p.b,{path:"/profile",component:I}),l.a.createElement(p.b,{path:"/registration",component:j}),l.a.createElement(p.b,{path:"/reportnurse",component:w}),l.a.createElement(p.b,{path:"/searchallreports",component:S}),l.a.createElement(p.b,{path:"/searchbyemail",component:O}),l.a.createElement(p.b,{path:"/reportuser",component:T}),l.a.createElement(p.b,{path:"/emergency",component:B}),l.a.createElement(p.b,{path:"/addTips",component:L}),l.a.createElement(p.a,{from:"/",to:"/login"}),l.a.createElement(p.a,{to:""}))),l.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);o.a.render(l.a.createElement(c.a,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.694f583b.chunk.js.map