(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e,s,t){},42:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(21),n=t.n(a),l=t(22),r=t(23),i=t(26),j=t(25),o=t(13),b=t.n(o),d=t(15),m=t(5),h=t(55),u=t(56),O=t(0);function x(e){var s=e.menuToggle,t=e.setMenuToggle;return Object(O.jsx)("div",{className:s?"topnav active":"topnav",children:Object(O.jsxs)("div",{className:"topwrapper",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("a",{href:"#Home",className:"logo",children:"taley"}),Object(O.jsx)(h.a,{className:"materials_icon phone"}),Object(O.jsx)("span",{children:"347.620.2292"}),Object(O.jsx)(u.a,{className:"materials_icon emil"}),Object(O.jsx)("span",{children:"techtaley@gmail.com"})]}),Object(O.jsx)("div",{className:"right",children:Object(O.jsxs)("div",{className:"hamburger",onClick:function(){return t(!s)},children:[Object(O.jsx)("span",{className:"line"}),Object(O.jsx)("span",{className:"line"}),Object(O.jsx)("span",{className:"line"})]})})]})})}var p=t(12),N=t(3),g=t(14);function v(e){var s=e.id,t=e.title,c=e.desc;return Object(O.jsxs)("div",{className:"skill_card card",children:[Object(O.jsx)("h2",{className:"skill_title",children:t}),Object(O.jsx)("h4",{className:"skill_desc",children:c})]},s)}function f(e){var s=e.id,t=e.image,c=e.alt,a=e.title,n=e.desc,l=e.link,r=e.code,i=e.api,j=e.status;return Object(O.jsxs)("div",{className:"project_card card",children:[Object(O.jsx)("div",{className:"project_image_div",children:Object(O.jsx)("img",{className:"project_image",src:t,alt:c,target:"_blank",rel:"noreferrer"})}),Object(O.jsx)("div",{className:"project_title_div",children:Object(O.jsx)("a",{className:"project_link",target:"_blank",rel:"noreferrer",href:l,children:Object(O.jsx)("h1",{className:"project_title",children:a})})}),Object(O.jsxs)("div",{className:"project_status_div",children:[Object(O.jsx)("p",{className:"project_desc",children:n}),Object(O.jsx)("span",{children:Object(O.jsx)("a",{className:"project_views",target:"_blank",rel:"noreferrer",href:l,children:"project"})}),"|",Object(O.jsx)("span",{children:Object(O.jsx)("a",{className:"project_views",target:"_blank",rel:"noreferrer",href:r,children:"code"})})," |",Object(O.jsx)("span",{children:Object(O.jsx)("a",{className:"project_views",target:"_blank",rel:"noreferrer",href:i,children:"api"})}),Object(O.jsxs)("h4",{children:["Status: ",Object(O.jsx)("span",{className:"project_status",children:j})]})]})]},s)}function k(){var e=Object(c.useState)(""),s=Object(m.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(""),l=Object(m.a)(n,2),r=l[0],i=l[1],j=Object(c.useState)(""),o=Object(m.a)(j,2),b=o[0],d=o[1],h=Object(c.useState)(!1),u=Object(m.a)(h,2),x=u[0],p=u[1],g=Object(c.useState)(!1),v=Object(m.a)(g,2),f=v[0],k=v[1];return Object(O.jsx)("div",{className:"contact_form",children:Object(O.jsx)("div",{className:"form-div",children:Object(O.jsxs)("form",{className:"contact_form",onSubmit:function(e){if(e.preventDefault(),p(!0),e.target.reset(),k(!0),a(""),i(""),d(""),f)return Object(O.jsx)(N.a,{to:"/"})},children:[Object(O.jsx)("input",{className:"contact_input",type:"text",name:"name",placeholder:"Name",maxlength:"30",onChange:function(e){a(e.target.value)},value:t}),Object(O.jsx)("input",{className:"contact_input",type:"text",name:"email",placeholder:"Email address",maxlength:"40",onChange:function(e){i(e.target.value)},value:r}),Object(O.jsx)("textarea",{className:"contact_input",type:"text",name:"message",placeholder:"Message",maxlength:"40",onChange:function(e){d(e.target.value)},value:b}),Object(O.jsx)("input",{className:"contact_btn",type:"submit",value:"Submit"}),x&&Object(O.jsx)("span",{children:" Thank you for contacting me. I'll respond within 24 hours."})]})})})}function _(e){e.intro,e.skills,e.projects,e.contact;var s=e.menuToggle;e.setMenuToggle;return Object(O.jsx)("div",{children:Object(O.jsxs)(p.a,{children:[Object(O.jsxs)("div",{className:s?"menu active":"menu",children:[Object(O.jsx)(g.a,{to:"/#home",className:"menu_link",children:"Home"}),Object(O.jsx)(g.a,{to:"/#projects",className:"menu_link",children:"Projects"}),Object(O.jsx)(g.a,{to:"/#skills",className:"menu_link",children:"Skills"}),Object(O.jsx)(g.a,{to:"/#contact",className:"menu_link",children:"Contact"})]}),Object(O.jsxs)(N.d,{children:[Object(O.jsx)(N.b,{path:"/#skills",exact:!0,component:v}),Object(O.jsx)(N.b,{path:"/#projects",exact:!0,component:f}),Object(O.jsx)(N.b,{path:"/#contact",exact:!0,component:k})]})]})})}var S=t(24);function y(e){var s=e.image,t=e.alt,a=e.title,n=e.role,l=e.desc,r=e.link,i=Object(c.useRef)();return Object(c.useEffect)((function(){Object(S.a)(i.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["ReactJS, NodeJS","MongoDB, ExpressJS","React Hooks, Material-UI","Web Services, API Calls","HTML5, CSS3, ES6","GitHub, CD/CI","TypeScript, Docker"]})}),[]),Object(O.jsxs)("div",{className:"banner",children:[Object(O.jsx)("img",{className:"banner-img",src:s,alt:t}),Object(O.jsxs)("div",{className:"banner-div",children:[Object(O.jsx)("h1",{className:"banner-title",children:a}),Object(O.jsx)("h2",{className:"banner-role",children:n}),Object(O.jsx)("h2",{className:"banner-desc",children:l}),Object(O.jsx)("h2",{className:"banner-string",children:Object(O.jsx)("span",{ref:i})}),Object(O.jsx)("button",{className:"banner-btn",children:Object(O.jsx)("a",{className:"banner-link",href:r,children:"My Work"})})]})]})}function C(e){var s=e.id,t=e.title,c=e.active,a=e.setSelected;return Object(O.jsx)("span",{className:c?"project_menu_item active":"project_menu_item",onClick:function(){return a(s)},children:t})}function M(){var e=Object(c.useState)([]),s=Object(m.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)("all"),l=Object(m.a)(n,2),r=l[0],i=l[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var s,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://expansivedesigns.github.io/tech-taley-api/data.json");case 3:return s=e.sent,e.next=6,s.json();case 6:t=e.sent,a(t.results.projects),a("all"===r?t.results.projects.filter((function(e){return e.category})):t.results.projects.filter((function(e){return e.category===r}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Issue loading images",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"project_menu",children:[{id:"all",title:"All"},{id:"blog",title:"Blog"},{id:"search",title:"Search"},{id:"game",title:"Game"},{id:"business",title:"Business"}].map((function(e){return Object(O.jsx)(C,{title:e.title,active:r===e.id,setSelected:i,id:e.id})}))}),Object(O.jsx)("div",{className:"project_list",children:t.map((function(e){var s=e.id,t=e.image,c=e.alt,a=e.title,n=e.desc,l=e.link,r=e.status,i=e.code,j=e.api,o=e.category;return Object(O.jsx)(f,{image:t,alt:c,title:a,desc:n,link:l,code:i,api:j,status:r,category:o},s)}))})]})}function T(){return Object(O.jsxs)("div",{className:"skills_buttons",children:[Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"Structure | Design | Development"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"html",children:"HTML5"}),Object(O.jsx)("span",{className:"css",children:"CSS3"}),Object(O.jsx)("span",{className:"css",children:"SASS"}),Object(O.jsx)("span",{className:"css",children:"ES6"}),Object(O.jsx)("span",{className:"flexbox",children:"FlexBox"}),Object(O.jsx)("span",{className:"typescript",children:"TypeScript"}),Object(O.jsx)("span",{className:"material",children:"Material-UI"})]})]}),Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"Full-Stack Application"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"mongo",children:"MongoDB"}),Object(O.jsx)("span",{className:"express",children:"ExpressJS"}),Object(O.jsx)("span",{className:"react",children:"ReactJS"}),Object(O.jsx)("span",{className:"node",children:"NodeJS"})]})]}),Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"State Management"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"mongo",children:"Redux"}),Object(O.jsx)("span",{className:"express",children:"ContextAPI"}),Object(O.jsx)("span",{className:"react",children:"Redux Persist"}),Object(O.jsx)("span",{className:"node",children:"useRef"})]})]}),Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"Deployment"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"githubpages",children:"gitHub Pages"}),Object(O.jsx)("span",{className:"heroku",children:"Heroku"}),Object(O.jsx)("span",{className:"docker",children:"Docker"})]})]}),Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"API Services | Data Management"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"html",children:"Firebase"}),Object(O.jsx)("span",{className:"html",children:"MongoDB"}),Object(O.jsx)("span",{className:"html",children:"GraphQL"})]})]}),Object(O.jsxs)("div",{className:"skills_button_section",children:[Object(O.jsx)("h2",{children:"Testing | CI/CD | Automation"}),Object(O.jsxs)("div",{className:"skills_span",children:[Object(O.jsx)("span",{className:"jest",children:"Jest"}),Object(O.jsx)("span",{className:"github",children:"gitHub"}),Object(O.jsx)("span",{className:"github",children:"Jenkins"})]})]})]})}function w(e){var s=e.image,t=e.alt,c=e.title;return Object(O.jsxs)("div",{className:"footer_logo",children:[Object(O.jsx)("img",{className:"footer_logo_img",src:s,alt:t}),Object(O.jsx)("h1",{className:"footer_title",children:c})]})}function D(e){var s=e.link1,t=e.link2,c=e.link3;return Object(O.jsx)("div",{className:"footer_links",children:Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("a",{href:s,className:"footer_link",target:"_blank",rel:"noreferrer noopener",children:"Facebook"}),Object(O.jsx)("a",{href:t,className:"footer_link",target:"_blank",rel:"noreferrer noopener",children:"Instagram"}),Object(O.jsx)("a",{href:c,className:"footer_link",target:"_blank",rel:"noreferrer noopener",children:"Twitter"})]})})}function I(){var e=Object(c.useState)(!1),s=Object(m.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)([]),l=Object(m.a)(n,2),r=l[0],i=l[1],j=Object(c.useState)([]),o=Object(m.a)(j,2),h=o[0],u=o[1],p=Object(c.useState)([]),N=Object(m.a)(p,2),g=N[0],v=N[1],f=Object(c.useState)([]),S=Object(m.a)(f,2),C=S[0],I=S[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var s,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://expansivedesigns.github.io/tech-taley-api/data.json");case 3:return s=e.sent,e.next=6,s.json();case 6:t=e.sent,i(t.results.menus),u(t.results.banner),v(t.results.footer1),I(t.results.footer1[0].social),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Issue loading images",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"home",id:"home",children:[Object(O.jsx)(x,{menuToggle:t,setMenuToggle:a}),r.map((function(e){var s=e.intro,c=e.skills,n=e.projects,l=e.contact;return Object(O.jsx)(_,{intro:s,skills:c,projects:n,contact:l,menuToggle:t,setMenuToggle:a})})),h.map((function(e){var s=e.image,t=e.alt,c=e.title,a=e.role,n=e.desc,l=e.link;return Object(O.jsx)(y,{image:s,alt:t,title:c,role:a,desc:n,link:l})})),Object(O.jsx)("h2",{className:"section_heading section",id:"projects",children:"React Projects"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"project_section section",children:Object(O.jsx)(M,{})}),Object(O.jsx)("h2",{className:"section_heading section",id:"skills",children:"Skills"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"section skill_section",children:Object(O.jsx)("div",{className:"skill_list",children:Object(O.jsx)(T,{})})}),Object(O.jsx)("h2",{className:"section_heading",id:"contact",children:"Contact me"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"contact_section section container",children:Object(O.jsx)(k,{})}),Object(O.jsxs)("div",{className:"footer",children:[g.map((function(e){var s=e.image,t=e.alt,c=e.title;return Object(O.jsx)(w,{image:s,alt:t,title:c})})),C.map((function(e){var s=e.link1,t=e.link2,c=e.link3,a=e.link4;return Object(O.jsx)(D,{link1:s,link2:t,link3:c,link4:a})}))]})]})}t(41);var J=function(e){Object(i.a)(t,e);var s=Object(j.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(I,{})})}}]),t}(c.Component);n.a.render(Object(O.jsx)(J,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c91e7c84.chunk.js.map