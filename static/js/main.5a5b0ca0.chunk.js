(this.webpackJsonpportforlio=this.webpackJsonpportforlio||[]).push([[0],{42:function(e,a,t){e.exports=t(79)},47:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(13),r=t.n(s),c=(t(47),t(48),t(49),t(50),t(14)),m=t(1),i=t(36),o=t(37),u=t(41),d=t(40),p=t(38),E=t.n(p),f=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={coords:{latitude:0,longitude:0},data:{}},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){var t={latitude:a.coords.latitude,longitude:a.coords.longitude};e.setState({coords:t}),E.a.get("".concat("http://api.weatherstack.com/current?access_key=781196f9db80f6e12918f92f76c6bf18","&query=").concat(e.state.coords.latitude,",").concat(e.state.coords.longitude,"&units=f")).then((function(a){var t={location:a.data.location.name,temp:a.data.current.temperature};e.setState({data:t})}))})):console.log("not supported")}},{key:"render",value:function(){var e=this.state.data,a=e.location,t=e.temp;return n.a.createElement("div",{style:{textAlign:"right",padding:"15px 15px 0 0"}},n.a.createElement("h3",null,a),n.a.createElement("h4",null,t," \xb0",n.a.createElement("span",{style:{fontSize:"20px"}},"F")))}}]),t}(l.Component),g=function(){return n.a.createElement("div",{className:"view landing_bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center"},n.a.createElement("div",{className:"col-md-12 mb-4 white-text text-center"},n.a.createElement("h1",{className:"bold landing_name animated fadeInUp slow"},"Joshua H. Min"),n.a.createElement("hr",{className:" col-sm-3 hr-light my-3 animated fadeInDown"}),n.a.createElement("h5",{className:"text-uppercase animated fadeInDown slow"},n.a.createElement("strong",{style:{fontSize:"30px"}},"Web Developer & Full Stack Developer")),n.a.createElement(c.b,{to:"/main",className:"btn btn-outline-white animated fadeInLeft slow my-4"},"Main Page")))),n.a.createElement(f,null))},h=t(8),N=t(10),v=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark default-color sticky-top"},n.a.createElement("div",{className:" navbar-collapse "},n.a.createElement("ul",{className:"navbar-nav m-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(N.Link,{className:"nav-link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(N.Link,{className:"nav-link",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:500},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(N.Link,{className:"nav-link",activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:500},"Skills")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(N.Link,{className:"nav-link",activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:500},"Projects")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(N.Link,{className:"nav-link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:500},"Contact")))))},y=["Welcome, ","What is your name?"],b=function(e){var a=Object(l.useState)(0),t=Object(h.a)(a,2),s=t[0],r=t[1],c=Object(l.useState)(""),m=Object(h.a)(c,2),i=m[0],o=m[1];Object(l.useEffect)((function(){var e=setInterval((function(){r((function(e){return e+1}))}),2e3);return function(){return clearInterval(e)}}),[]);var u=y[s%y.length];return n.a.createElement("div",{className:"container-fluid",style:{height:"93vh",backgroundColor:"#99b898"},id:"home"},n.a.createElement("div",{className:"h-100 row align-items-center"},n.a.createElement("div",{className:"col-xs-12 col-s-12 col-md-12 col-lg-12 col-xl-12 m-auto"},n.a.createElement("div",{className:"col-md-6 text-center m-auto"},n.a.createElement("h1",{className:"text-white bold home_welcome animated fadeInDown slow"},u)),n.a.createElement("div",{className:"col-md-6 text-center m-auto"},n.a.createElement("form",{onSubmit:function(a){return a.preventDefault(),e.onChange(i),n.a.createElement("h1",null,"Click 'About' to continue!")}},n.a.createElement("input",{type:"text",className:"home_name_input animated fadeInUp slow",value:i,onChange:function(e){o(e.target.value)},placeholder:"Enter your name here!"}),n.a.createElement("hr",{className:"home_hr"}),0===i.length?null:n.a.createElement("input",{type:"submit",className:"btn btn-success animated fadeIn slower"})),n.a.createElement("div",{className:"col-md-12"},i?n.a.createElement("h1",{className:"animated fadeIn slower",style:{color:"#fff",marginTop:"30px",fontFamily:"Bellota, cursive"}},"Hey, ",i,"! Please click submit and continue."):"")))))},k=function(e){var a=Object(l.useState)(""),t=Object(h.a)(a,2),s=t[0],r=t[1];return Object(l.useEffect)((function(){r(e.name)}),[e.name]),n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#6f9a8d",color:"#fff"},id:"about"},n.a.createElement("div",{className:"h-100 row align-items-center"},n.a.createElement("div",{className:"col-md-12 col-lg-12 m-auto"},n.a.createElement("div",{className:"about_head col-md-6 text-left m-auto"},n.a.createElement("h3",null,"Hello, ",""===s?"Guest":s),n.a.createElement("h4",null,"My name is Joshua Min and I would like for you to get to know me a little bit.")),n.a.createElement("div",{className:"container my-3 py-4 z-depth-1"},n.a.createElement("section",{className:"px-md-5 mx-md-5 text-center text-lg-left"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-4 mb-md-0"},n.a.createElement("div",{className:"view"},n.a.createElement("img",{src:"https://i.imgur.com/70J9vRX.jpg",className:"img-fluid",alt:""}))),n.a.createElement("div",{className:"col-md-6 mb-4 mb-md-0"},n.a.createElement("h3",{className:"font-weight-bold"},"About Joshua..."),n.a.createElement("ul",{className:"about_ul",style:{fontSize:"1.5rem"}},n.a.createElement("li",null,"Location: Downey, CA"),n.a.createElement("li",null,"U.S. Army Reserve"," ",n.a.createElement("a",{target:"_blank",href:"https://www.google.com/search?q=us+army+reserves&rlz=1C1CHBD_enUS898US898&oq=us+army+reserves&aqs=chrome..69i57j0l7.2687j0j8&sourceid=chrome&ie=UTF-8",rel:"noopener noreferrer"},"More Info")),n.a.createElement("li",null,"Korean-American"),n.a.createElement("li",null,"Favorite Code editor: VS Code"),n.a.createElement("li",null,"Hobbies: Games, Gym"),n.a.createElement("li",null,"Loves to learn new tech/skills"),n.a.createElement("li",null,"Love solving puzzles")),n.a.createElement("h3",null,"I've been coding/learning everyday since I started my developer journey and I love every single moment of it. I'm always open to join a team with great people and move forward with my development journey."))))))))},w=function(){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#4f98ca"},id:"skills"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12",style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{className:"col-md-4 col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item text-center"},n.a.createElement("span",{className:"skill_title"},"Front-End")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"HTML"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{role:"img",className:"skill_list"},"CSS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Javascript"),n.a.createElement("span",{role:"img","aria-label":"star",className:"rating"},"\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"jQuery"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"React.JS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Redux"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"React Hooks"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2b50\u2b50\u2730"))))),n.a.createElement("div",{className:"col-md-4 col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item text-center"},n.a.createElement("span",{className:"skill_title"},"Back-End")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"C#"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"ASP.NET"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},".Net Core"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"MS SQL"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"T-SQL"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"skill_list"},"Node.JS"),n.a.createElement("span",{role:"img",className:"rating"}," ","\u2b50\u2b50\u2730\u2730\u2730"))))))))},x=function(){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#efee9d"},id:"projects"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12",style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{className:"col-md-3 project_qs"},n.a.createElement("div",{className:"card text-center p-4 project_card"},n.a.createElement("img",{className:"card-img-top",src:"https://i.imgur.com/lZsx4xF.png",alt:"Quarter Scheduling"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Quarter Scheduling"),n.a.createElement("p",{className:"card-text text-left"},"Our mission in Quarter Scheduling is to provide staffing software that is efficient and affordable. No more going through spreadsheets and making calls. No more last minute call outs to your staff."),n.a.createElement("a",{href:"https://quarterscheduling.com/",target:"_blank",rel:"noopener noreferrer"},"Quarter Scheduling")),n.a.createElement("span",{className:"text-right text-white",style:{fontFamily:"Lobster, cursive"}},"Mar 2020 - Present"))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"card text-center p-4 project_card"},n.a.createElement("img",{className:"card-img-top",src:"https://business.lacity.org/sites/g/files/wph521/themes/site/logo.png",alt:"Pathways"}),n.a.createElement("div",{className:"card-body mt-4"},n.a.createElement("h4",{className:"card-title"},"LA Pathways"),n.a.createElement("p",{className:"card-text"},"LA Pathways is a platform created for the city of Los Angeles to connect business owners and resource providers. User(s) are taken through an initial assessment that runs through an algorithm that allows entrepreneurs the opportunity to seek services and information."),n.a.createElement("a",{href:"https://business.lacity.org/pathways",target:"_blank",rel:"noopener noreferrer"},"LA Pathways")),n.a.createElement("span",{className:"text-right text-white",style:{fontFamily:"Lobster, cursive"}},"Aug 2019 - Dec 2019"))))))},j=function(e){return n.a.createElement("div",{className:"container-fluid",style:{height:"100vh",backgroundColor:"#30475e"},id:"contact"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"col-md-12",style:{marginTop:"12%",textAlign:"center",color:"#fff",fontFamily:"Lobster, cursive"}},"Thank You so much for taking your time to view my portforlio,"," ",""===e.name?"Guest":e.name,"!"),n.a.createElement("div",{className:"col-md-10 m-auto text-center "},n.a.createElement("h1",{style:{marginTop:"5%",color:"#fff",fontFamily:"Architects Daughter, cursive",fontSize:"55px"}},"Contact"),n.a.createElement("hr",{style:{width:"60%",borderTop:"#7ebdb4 solid 1px"}}),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-phone-volume"}))," ","213-703-0915"),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fab fa-linkedin"}))," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/joshuahmin/",target:"_blank",rel:"noopener noreferrer"},"Joshua Min")),n.a.createElement("h3",{style:{color:"#fff",fontSize:"50px",paddingTop:"20px"}},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-at"}))," ","Mhj9210@gmail.com")))))},S=function(){var e=Object(l.useState)(""),a=Object(h.a)(e,2),t=a[0],s=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(b,{value:t,onChange:function(e){s(e)}}),n.a.createElement(k,{name:t}),n.a.createElement(w,null),n.a.createElement(x,null),n.a.createElement(j,{name:t}))},_=function(){return n.a.createElement(c.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/portforlio",exact:!0,component:g}),n.a.createElement(m.a,{path:"/main",exact:!0,component:S})))};r.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5a5b0ca0.chunk.js.map