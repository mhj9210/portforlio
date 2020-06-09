(this.webpackJsonpportforlio=this.webpackJsonpportforlio||[]).push([[0],{28:function(e,a,t){e.exports=t(48)},33:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(12),r=t.n(s),c=(t(33),t(34),t(35),t(36),t(13)),m=t(1),i=function(){return n.a.createElement("div",{className:"view landing_bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center"},n.a.createElement("div",{className:"col-md-12 mb-4 white-text text-center"},n.a.createElement("h1",{className:"bold landing_name animated fadeInUp slow",style:{fontFamily:"Playfair Display, serif"}},"Joshua H. Min"),n.a.createElement("hr",{className:" col-sm-3 hr-light my-3 animated fadeInDown"}),n.a.createElement("h5",{className:"text-uppercase animated fadeInDown slow"},n.a.createElement("strong",{style:{fontSize:"30px",fontFamily:"Playfair Display, serif"}},"Web Developer & Full Stack Developer")),n.a.createElement(c.b,{to:"/main",className:"btn btn-outline-white animated fadeInLeft slow my-4"},"Main Page")))))},o=t(7),u=t(9),d=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark default-color sticky-top"},n.a.createElement("div",{className:" navbar-collapse "},n.a.createElement("ul",{className:"navbar-nav m-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.Link,{className:"nav-link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.Link,{className:"nav-link",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:500},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.Link,{className:"nav-link",activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:500},"Skills")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.Link,{className:"nav-link",activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:500},"Projects")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.Link,{className:"nav-link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:500},"Contact")))))},p=["Welcome, ","What is your name?"],E=function(e){var a=Object(l.useState)(0),t=Object(o.a)(a,2),s=t[0],r=t[1],c=Object(l.useState)(""),m=Object(o.a)(c,2),i=m[0],u=m[1];Object(l.useEffect)((function(){var e=setInterval((function(){r((function(e){return e+1}))}),2e3);return function(){return clearInterval(e)}}),[]);var d=p[s%p.length];return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#99b898"},id:"home"},n.a.createElement("div",{className:"h-100 row align-items-center"},n.a.createElement("div",{className:"col-xs-12 col-s-12 col-md-12 col-lg-12 col-xl-12 m-auto"},n.a.createElement("div",{className:"col-md-6 text-center m-auto"},n.a.createElement("h1",{className:"text-white bold home_welcome animated fadeInDown slow"},d)),n.a.createElement("div",{className:"col-md-6 text-center m-auto"},n.a.createElement("form",{onSubmit:function(a){return a.preventDefault(),e.onChange(i),n.a.createElement("h1",null,"Click 'About' to continue!")}},n.a.createElement("input",{type:"text",className:"home_name_input animated fadeInUp slow",value:i,onChange:function(e){u(e.target.value)},placeholder:"Enter your name here!"}),n.a.createElement("hr",{className:"home_hr"}),0===i.length?null:n.a.createElement("input",{type:"submit",className:"btn btn-success animated fadeIn slower"})),n.a.createElement("div",{className:"col-md-12"},i?n.a.createElement("h1",{className:"animated fadeIn slower",style:{color:"#fff",marginTop:"30px",fontFamily:"Bellota, cursive"}},"Hey, ",i,"! Please click submit and continue."):"")))))},f=function(e){var a=Object(l.useState)(""),t=Object(o.a)(a,2),s=t[0],r=t[1];return Object(l.useEffect)((function(){r(e.name)}),[e.name]),n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#f4f4f4"},id:"about"},n.a.createElement("div",{className:" h-100 row",style:{paddingTop:"10%"}},n.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-6"},n.a.createElement("img",{src:"https://i.imgur.com/4PrCrOS.jpg",alt:"",style:{width:"45%",marginLeft:"50%"}})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("h1",null,"About"),n.a.createElement("hr",{className:"col-md-2 text-left",style:{borderTop:"2px solid #a0c1b8",width:"5%",textAlign:"left",marginLeft:0}}),n.a.createElement("h3",{style:{marginTop:"15px",fontSize:"1.5rem",width:"50%",textAlign:"left",letterSpacing:"1px",marginBottom:"15px"}},"Hello, ",""===s?"Guest":s,"."," "),n.a.createElement("p",{style:{fontSize:"1.2rem",width:"45%"}},"I've been coding/learning everyday since I started my developer journey and I'm loving every single moment of it. I'm always open minded when it comes to learning new skills or technology and also joining a new team with great developers and move forward with my development journey."),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"Location: Downey, CA"),n.a.createElement("li",null,"U.S. Army Reserve"),n.a.createElement("li",null,"Korean-American"),n.a.createElement("li",null,"Favorite Code editor: VS Code"),n.a.createElement("li",null,"Hobbies: Games, Gym"),n.a.createElement("li",null,"Love solving puzzles")))))},g=function(){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#4f98ca"},id:"skills"},n.a.createElement("div",{className:" h-100 row"},n.a.createElement("div",{className:"col-md-12",style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{className:"col-md-4 col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item text-center"},n.a.createElement("span",{className:"skill_title"},"Front-End")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"HTML"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{role:"img",className:"skill_list"},"CSS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Javascript"),n.a.createElement("span",{role:"img","aria-label":"star",className:"rating"},"\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"jQuery"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"React.JS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Redux"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"React Hooks"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730"))))),n.a.createElement("div",{className:"col-md-4 col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item text-center"},n.a.createElement("span",{className:"skill_title"},"Back-End")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"C#"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"ASP.NET"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},".Net Core"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"MS SQL"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"T-SQL"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Node.JS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730"))))))))},h=function(){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#efee9d"},id:"projects"},n.a.createElement("div",{className:" h-100 row"},n.a.createElement("div",{className:"col-md-12",style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{className:"col-md-3 project_qs"},n.a.createElement("div",{className:"card text-center p-4 project_card"},n.a.createElement("img",{className:"card-img-top",src:"https://i.imgur.com/lZsx4xF.png",alt:"Quarter Scheduling"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Quarter Scheduling"),n.a.createElement("p",{className:"card-text text-left"},"Our mission in Quarter Scheduling is to provide staffing software that is efficient and affordable. No more going through spreadsheets and making calls. No more last minute call outs to your staff."),n.a.createElement("a",{href:"https://quarterscheduling.com/",target:"_blank",rel:"noopener noreferrer"},"Quarter Scheduling")),n.a.createElement("span",{className:"text-right text-white",style:{fontFamily:"Lobster, cursive"}},"Mar 2020 - Present"))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"card text-center p-4 project_card"},n.a.createElement("img",{className:"card-img-top",src:"https://business.lacity.org/sites/g/files/wph521/themes/site/logo.png",alt:"Pathways"}),n.a.createElement("div",{className:"card-body mt-4"},n.a.createElement("h4",{className:"card-title"},"LA Pathways"),n.a.createElement("p",{className:"card-text"},"LA Pathways is a platform created for the city of Los Angeles to connect business owners and resource providers. User(s) are taken through an initial assessment that runs through an algorithm that allows entrepreneurs the opportunity to seek services and information."),n.a.createElement("a",{href:"https://business.lacity.org/pathways",target:"_blank",rel:"noopener noreferrer"},"LA Pathways")),n.a.createElement("span",{className:"text-right text-white",style:{fontFamily:"Lobster, cursive"}},"Aug 2019 - Dec 2019"))))))},N=function(e){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#30475e"},id:"contact"},n.a.createElement("div",{className:"row h-100 "},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"col-md-12",style:{marginTop:"12%",textAlign:"center",color:"#fff",fontFamily:"Lobster, cursive"}},"Thank You so much for taking your time to view my portforlio,"," ",""===e.name?"Guest":e.name,"!"),n.a.createElement("div",{className:"col-md-10 m-auto text-center "},n.a.createElement("h1",{style:{marginTop:"5%",color:"#fff",fontFamily:"Architects Daughter, cursive",fontSize:"55px"}},"Contact"),n.a.createElement("hr",{style:{width:"60%",borderTop:"#7ebdb4 solid 1px"}}),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-phone-volume"}))," ","213-703-0915"),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fab fa-linkedin"}))," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/joshuahmin/",target:"_blank",rel:"noopener noreferrer"},"Joshua Min")),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-at"}))," ","Mhj9210@gmail.com")))))},v=function(){var e=Object(l.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(E,{value:t,onChange:function(e){s(e)}}),n.a.createElement(f,{name:t}),n.a.createElement(g,null),n.a.createElement(h,null),n.a.createElement(N,{name:t}))},y=function(){return n.a.createElement(c.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/portforlio",exact:!0,component:i}),n.a.createElement(m.a,{path:"/main",exact:!0,component:v})))};r.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.fdf9bf7e.chunk.js.map