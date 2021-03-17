(this["webpackJsonptailwind-react"]=this["webpackJsonptailwind-react"]||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){},51:function(e){e.exports=JSON.parse('{"userid":"user_DQZJ2mYS3QLhbwdRsUa5a"}')},57:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),o=i(31),r=i.n(o),a=i(22),s=(i(40),i(6)),l=i(5),j=(i(41),i(3)),h=i(2),d=function(){return Object(h.jsx)(j.b,{color:"white",p:"5%",bg:"#182525",sx:{float:"left",textAlign:"left",position:"relative",zIndex:2,borderRadius:"2vw"},children:Object(h.jsxs)(j.g,{gridTemplateColumns:"repeat(2, auto)",gridGap:3,children:[Object(h.jsxs)(j.b,{children:[Object(h.jsx)(j.i,{mr:"100%",mb:"5%",sx:{float:"left",width:"50%"},children:"Who am I?"}),Object(h.jsx)("img",{style:{borderRadius:"20px"},width:"80%",src:"/whoami/res/headshot.jpg",alt:"me"})]}),Object(h.jsx)(j.b,{mr:"5%",children:Object(h.jsx)("p",{style:{textIndent:"1em",fontSize:"3.25vw"},children:"I am Theo, a Las Vegas transplant from Cambridge, MA who is looking forward to coming full-circle and attending MIT. I am currently a Senior in High School and I am passionate about networking and full stack programming, as well as embedded system design."})})]})})},b=function(){return Object(h.jsxs)(j.b,{bg:"#101818",width:"100%",height:"auto",color:"grey",id:"foot",sx:{position:"relative",zIndex:"1!important"},children:[Object(h.jsx)(j.i,{p:"3%",pb:"0",textAlign:"left",fontSize:"medium",children:"Copyright \xa9 Thelonious Cooper 2021"}),Object(h.jsxs)(j.i,{p:"3%",pt:"1%",pb:"2%",textAlign:"left",fontSize:"medium",children:["I made this website from scratch! Check it out ",Object(h.jsx)("a",{style:{color:"grey"},href:"https://github.com/theloni-monk/whoami",children:"here"})]}),Object(h.jsx)(j.b,{width:"40%",pl:"3%",pb:"2%",children:Object(h.jsx)("hr",{})})]})},m=function(e){return Object(h.jsx)(j.b,{sx:{minHeight:"100px",position:"relative",zIndex:0},padding:"10%",mt:e.headerOffset+"px",mb:0,children:Object(h.jsx)(j.i,{fontStyle:"italic",color:"white",fontSize:"xxx-large",sx:{position:"relative",zIndex:3},children:"Hi, my name is Theo"})})},u=i(7),x=function(e){return Object(h.jsx)(j.e,{top:0,width:"100%",p:0,zIndex:10,id:"head",children:Object(h.jsxs)(j.h,{backgroundColor:"#101818",p:3,children:[Object(h.jsx)(j.h.Item,{children:Object(h.jsxs)(j.h.Link,{href:"https://github.com/theloni-monk/whoami",fontSize:2,children:[Object(h.jsx)(j.j,{icon:u.h,size:24,mr:2}),e.headWidth>500?Object(h.jsx)("span",{children:"GitHub for this page"}):""]})}),Object(h.jsxs)(j.h.Item,{full:!0,children:[" ",Object(h.jsx)(j.i,{ml:2,fontSize:2,children:"Thelonious Cooper"})]}),Object(h.jsx)(j.h.Item,{mr:0,children:Object(h.jsxs)(j.m,{"aria-label":"Main",children:[Object(h.jsx)(j.m.Link,{href:"/whoami/#/home",color:"white",sx:{":hover":{color:"grey"}},children:"Home"}),Object(h.jsx)(j.m.Link,{href:"/whoami/#/links",color:"white",sx:{":hover":{color:"grey"}},children:"Links"}),Object(h.jsx)(j.m.Link,{href:"/whoami/#/contact-me",color:"white",sx:{":hover":{color:"grey"}},children:"Contact me"})]})})]})})},g=function(e){var t=Object(n.useState)(!1),i=Object(l.a)(t,2),c=i[0],o=i[1];return c&&(window.location.href=e.to),Object(h.jsx)("div",{onClick:function(){return o(!0)},children:Object(h.jsxs)(j.a,{borderWidth:"5px",width:"60%",bg:"#495057",color:"white",p:"3%",pl:"5%",pr:"5%",borderColor:"grey",borderRadius:"5%",margin:"auto",children:[Object(h.jsxs)(j.f,{width:"100%",marginBottom:"5%",children:[Object(h.jsx)("i",{className:e.icon,style:{fontSize:"7vw",margin:"auto"}}),Object(h.jsx)(j.i,{pl:"10px",margin:"auto",sx:{width:"100%"},textAlign:"center",fontSize:"4vw",pr:"10px",children:e.title})]}),Object(h.jsx)("p",{style:{textAlign:"left",fontSize:"2vw",margin:"2%"},children:e.description})]})})},O=i(24),f=i.n(O),p=i(35),w=i(9),v=i(19),y=function(){var e=Object(n.useReducer)((function(e,t){return Object(w.a)(Object(w.a)({},e),t)}),{name:null,email:null,message:null}),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(l.a)(o,2),a=r[0],s=r[1],d=Object(n.useState)(""),b=Object(l.a)(d,2),m=b[0],x=b[1],g=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==i.name){e.next=4;break}return e.next=3,x("Please write a name before submitting");case 3:return e.abrupt("return");case 4:if(null!==i.email){e.next=8;break}return e.next=7,x("Please write an email before submitting");case 7:return e.abrupt("return");case 8:if(null!==i.message){e.next=12;break}return e.next=11,x("Please write a message before submitting");case 11:return e.abrupt("return");case 12:"template_78z2i0a","service_92gogpp",Object(v.send)("service_92gogpp","template_78z2i0a",{from_name:i.name,from_email:i.email,message:i.message}).then((function(e){s(!0)}),(function(e){x(JSON.stringify(e))}));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(h.jsxs)(j.g,{gridAutoColumns:"fitcontent(100%)",justifyItems:"center",m:"5%",children:[Object(h.jsx)(j.j,{icon:u.a,size:"large",color:"icon.success",p:2}),Object(h.jsx)(j.c,{width:"100%",onClick:function(){c({name:null,email:null,message:null}),x(""),s(!1)},children:"Wanna Send Another?"})]}):Object(h.jsxs)(j.g,{m:"5%",children:[Object(h.jsx)(j.i,{children:"Your Name: "}),Object(h.jsx)(j.l,{width:"60%","aria-label":"Name",name:"name",icon:u.k,placeholder:"Bertram Gilfoyle",onChange:function(e){return c({name:e.target.value})}}),Object(h.jsx)(j.i,{children:"Your Email:"}),Object(h.jsx)(j.i,{fontSize:1,color:"grey",pb:"1%",children:" (I'm too lazy to validate the email so please just put a real one)"}),Object(h.jsx)(j.l,{width:"60%","aria-label":"Email",name:"email",icon:u.g,placeholder:"b.gilfoyle@piedpiper.com",contrast:!0,onChange:function(e){return c({email:e.target.value})}}),Object(h.jsx)(j.i,{children:"Your Message:"}),Object(h.jsx)(j.l,{as:"textarea",width:"60%","aria-label":"Message",name:"message",block:!0,icon:u.i,variant:"large",placeholder:"Dear Dinesh...",onChange:function(e){return c({message:e.target.value})}}),Object(h.jsx)(j.b,{sx:{visibility:m.length>1?"visible":"hidden"},children:Object(h.jsx)(j.k,{color:"red",m:"3%",children:m})}),Object(h.jsx)(j.d,{width:"20%",variant:"medium",onClick:g,children:"Send!"})]})},k=function(){var e=Object(n.useState)(50),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(n.useState)(50),r=Object(l.a)(o,2),a=r[0],s=r[1];return Object(n.useLayoutEffect)((function(){var e;c(window.innerWidth),s(null===(e=document.getElementById("head"))||void 0===e?void 0:e.clientHeight)}),[i,a]),Object(h.jsxs)("div",{className:"App height=100% margin-bottom=50px",children:[Object(h.jsxs)("section",{id:"header",children:[Object(h.jsx)(x,{headWidth:i}),Object(h.jsx)(j.b,{sx:{backgroundImage:"url(/whoami/res/skyline.jpg)",minHeight:300,width:"100%",height:"100%",position:"fixed",zIndex:"0!important"}})]}),Object(h.jsx)("section",{id:"intro",children:Object(h.jsx)(m,{headerOffset:a})}),Object(h.jsx)("section",{id:"bio",children:Object(h.jsx)(d,{})}),Object(h.jsxs)("section",{id:"projects",children:[Object(h.jsx)(j.b,{mt:"5%",p:"5%",children:Object(h.jsx)(j.i,{textAlign:"left",color:"white",children:"Featured Projects"})}),Object(h.jsx)(j.g,{gridTemplateColumns:"repeat(3, auto)",gridGap:3,children:"WRITEME: project widget section"})]}),Object(h.jsx)("section",{id:"technologies",children:"WRITEME: technologies section"}),Object(h.jsx)("section",{id:"footer",children:Object(h.jsx)(b,{})})]})},S=(i(29),i(30),i(51).userid),I=function(){var e=Object(n.useState)(50),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(n.useState)(50),r=Object(l.a)(o,2),a=r[0],s=r[1],d=Object(n.useState)(400),m=Object(l.a)(d,2),u=m[0],g=m[1];return Object(n.useLayoutEffect)((function(){var e,t,i;c(window.innerWidth);var n=null===(e=document.getElementById("head"))||void 0===e?void 0:e.clientHeight,o=null===(t=document.getElementById("foot"))||void 0===t?void 0:t.clientHeight;s(n),g((null===(i=document.getElementById("bod"))||void 0===i?void 0:i.clientHeight)-n-o)}),[i,a,u]),Object(n.useEffect)((function(){Object(v.init)(S)}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{headWidth:i}),Object(h.jsx)(j.a,{mt:a,height:u,children:Object(h.jsxs)(j.g,{gridTemplateColumns:"repeat(2,auto)",children:[Object(h.jsxs)(j.b,{children:[Object(h.jsx)(j.i,{m:"5%",mb:"2%",children:"Tell Me Something!"}),Object(h.jsx)(j.i,{fontSize:3,color:"grey",p:"5%",pt:"0",children:"(Note: this page is still a work in progress)"})]}),Object(h.jsx)(y,{})]})}),Object(h.jsx)(b,{})]})},C=(i(30),function(){var e=Object(n.useState)(50),t=Object(l.a)(e,2),i=t[0],c=t[1],o=Object(n.useState)(50),r=Object(l.a)(o,2),a=r[0],s=r[1];return Object(n.useLayoutEffect)((function(){var e;c(window.innerWidth),s(null===(e=document.getElementById("head"))||void 0===e?void 0:e.clientHeight)}),[i,a]),Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{headWidth:i}),Object(h.jsx)(j.a,{mt:a,bg:"#212529",justifyContent:"center",height:"100%",alignContent:"center",p:"5%",children:Object(h.jsxs)(j.g,{gridTemplateColumns:"repeat(2,auto)",children:[Object(h.jsxs)(j.g,{gridAutoRows:"fit-content(20vh)",sx:{fontSize:"3vw"},children:[Object(h.jsx)(j.i,{color:"white",children:"Reach me via any of the following means, or shoot me an email right now by going to the contact page"}),Object(h.jsx)("i",{className:"fas fa-hand-point-right fa-7x",style:{color:"white",justifySelf:"center",alignSelf:"start"}})]}),Object(h.jsxs)(j.g,{gridTemplateColumns:"repeat(1,auto)",justifyContent:"center",gridGap:4,children:[Object(h.jsx)(g,{icon:"fab fa-linkedin fa-5x",title:"Linkedin",description:"Check out my linkedin page for professional inquires",to:"https://www.linkedin.com/in/thelonious-cooper-88000a178/"}),Object(h.jsx)(g,{icon:"fab fa-github fa-5x",title:"Github",description:"Check out my previous and ongoing projects",to:"https://github.com/theloni-monk"}),Object(h.jsx)(g,{icon:"fab fa-google fa-5x",title:"Gmail",description:"Shoot me an email any time",to:"/links"}),Object(h.jsx)(g,{icon:"fab fa-instagram fa-5x",title:"Instagram",description:"Follow me on Instagram",to:"https://www.instagram.com/theoz_afro/"})]})]})}),Object(h.jsx)(b,{})]})}),z=function(){return Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.a,{exact:!0,from:"/",to:"/home"}),Object(h.jsx)(s.b,{exact:!0,path:"/home",component:k}),Object(h.jsx)(s.b,{exact:!0,path:"/links",component:C}),Object(h.jsx)(s.b,{exact:!0,path:"/contact-me",component:I})]})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,58)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(a.a,{children:Object(h.jsx)(z,{})})}),document.getElementById("root")),console.log("Why are you reading this? Fuckin Nerd"),E()}},[[57,1,2]]]);
//# sourceMappingURL=main.64484ca7.chunk.js.map