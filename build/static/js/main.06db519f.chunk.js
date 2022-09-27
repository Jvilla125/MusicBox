(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(52),o=n.n(a),s=(n(141),n(142),n(11)),c=n(8),i=(n(143),n(53)),l=n(38),u=n(34),j=n(28),h=n.n(j),d=n(2);function p(e){return Object(d.jsx)("span",{className:"error",children:e.error})}function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var b={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null}},O="/api/users/";var m={signup:function(e){return fetch(O+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return b.setToken(t)}))},logout:function(){b.removeToken()},login:function(e){return fetch(O+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return b.setToken(t)}))},getUser:function(){return b.getUserFromToken()}},f=n(170),x=n(166),v=n(171),w=n(168);function k(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(s.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),g=Object(s.a)(j,2),b=g[0],O=g[1],k=Object(r.useState)(""),S=Object(s.a)(k,2),y=S[0],U=S[1],C=Object(c.g)();function I(e){O(Object(u.a)(Object(u.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))}function P(e,t){return e===t}function T(){return(T=Object(i.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),P(b.password,b.passwordConf)){t.next=3;break}return t.abrupt("return",o({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in o({message:"",passwordError:!1}),(r=new FormData).append("photo",y),b)r.append(a,b[a]);return console.log(r.forEach((function(e){return console.log(e)})),"<- this is each value in the formData"),t.prev=8,t.next=11,m.signup(r);case 11:e.handleSignUpOrLogin(),C("/"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),o({message:t.t0.message,passwordError:!1});case 18:case"end":return t.stop()}}),t,null,[[8,15]])})))).apply(this,arguments)}return Object(d.jsx)(f.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(d.jsxs)(f.a.Column,{style:{maxWidth:450},children:[Object(d.jsx)("h1",{as:"h2",children:"Please Sign Up"}),Object(d.jsxs)(x.a,{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(d.jsxs)(v.a,{stacked:!0,children:[Object(d.jsx)(x.a.Input,{name:"username",placeholder:"username",value:b.username,onChange:I,required:!0}),Object(d.jsx)(x.a.Input,{type:"email",name:"email",placeholder:"email",value:b.email,onChange:I,required:!0}),Object(d.jsx)(x.a.Input,{type:"password",name:"password",placeholder:"password",value:b.password,onChange:I,required:!0}),Object(d.jsx)(x.a.Input,{type:"password",name:"passwordConf",placeholder:"password Confirmation",value:b.passwordConf,onChange:I,required:!0}),Object(d.jsx)(x.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files,"<-- this is the image upload"),U(e.target.files[0])},required:!0}),Object(d.jsx)(w.a,{type:"submit",children:"Sign up"})]}),a.message?Object(d.jsx)(p,{error:a.message}):null]})]})})}n(153);var S=n(31);function y(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],j=Object(r.useState)({username:"",password:""}),g=Object(s.a)(j,2),b=g[0],O=g[1],k=Object(c.g)();function y(e){O(Object(u.a)(Object(u.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))}function U(){return(U=Object(i.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.login(b);case 4:e.handleSignUpOrLogin(),k("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(d.jsx)(f.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(d.jsxs)(f.a.Column,{style:{maxWidth:450},children:[Object(d.jsx)("h1",{as:"h2",children:"Please log in below"}),Object(d.jsxs)(x.a,{onSubmit:function(e){return U.apply(this,arguments)},children:[Object(d.jsxs)(v.a,{children:[Object(d.jsx)(x.a.Input,{type:"username",name:"username",placeholder:"username",value:b.username,onChange:y,required:!0}),Object(d.jsx)(x.a.Input,{type:"password",name:"password",placeholder:"password",value:b.password,onChange:y,required:!0}),Object(d.jsx)(w.a,{type:"submit",children:"Log in"})]}),a.message?Object(d.jsx)(p,{error:a.message}):null]}),Object(d.jsx)(v.a,{children:Object(d.jsxs)("h3",{children:["If you do you have an account, please ",Object(d.jsx)(S.b,{to:"/Signup",children:"Sign up."})]})})]})})}var U=n(112),C=n(172),I=n(124);function P(e){var t=e.loggedUser;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{loggedUser:t}),Object(d.jsx)("h1",{children:"This is the profile page"})]})}function T(e){var t=e.loggedUser;e.handleLogout;return Object(d.jsxs)(v.a,{clearing:!0,children:[Object(d.jsxs)(C.a,{as:"h2",floated:"left",children:[Object(d.jsx)(I.a,{src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"})," Patrick"]}),Object(d.jsx)(C.a,{textAlign:"center",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)(S.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:"Profile"}),"   Suggested/ Listen to Later Click to Add a New Song ",Object(d.jsx)(S.b,{to:"/",children:"Feed"})]})}),Object(d.jsx)(C.a,{floated:"right",children:Object(d.jsx)(S.b,{to:"/Login",children:"Logout"})})]})}function L(e){var t=Object(r.useState)({song:"",artist:"",genre:"",mood:""}),n=Object(s.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),j=i[0],h=i[1];function p(e){o(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}function g(t){t.preventDefault();var n=new FormData;for(var r in n.append("photo",j),a)n.append(r,a[r]);console.log(n.forEach((function(e){return console.log(e)})),"<- this is each value"),e.handleAddPost(n)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(x.a,{onSubmit:g,children:[Object(d.jsx)(x.a.Input,{name:"song",value:a.song,placeholder:"Song",onChange:p}),Object(d.jsx)(x.a.Input,{name:"artist",value:a.artist,placeholder:"Artist",onChange:p}),Object(d.jsx)(x.a.Input,{name:"genre",value:a.genre,placeholder:"Genre",onChange:p}),Object(d.jsx)(x.a.Input,{name:"mood",value:a.mood,placeholder:"mood",onChange:p}),Object(d.jsx)(x.a.Field,{children:Object(d.jsx)(x.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){h(e.target.files[0])}})}),Object(d.jsx)(w.a,{type:"submit",onClick:g,children:"Submit Post!"})]})})})}var E=n(167);function F(e){var t=e.posts,n=(e.loggedUser,e.key,e.isProfile);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(v.a,{children:Object(d.jsxs)(E.a,{children:[n?"":Object(d.jsxs)(E.a.Header,{children:[Object(d.jsx)("h2",{children:t.user.username}),Object(d.jsx)(I.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"})]}),Object(d.jsx)(I.a,{src:"".concat(null===t||void 0===t?void 0:t.photoUrl)}),Object(d.jsxs)(E.a.Content,{children:[Object(d.jsx)(E.a.Description,{children:t.song}),Object(d.jsx)(E.a.Description,{children:t.artist}),Object(d.jsx)(E.a.Description,{children:t.genre}),Object(d.jsx)(E.a.Description,{children:t.mood})]})]},t._id)})})}function A(e){var t=e.posts,n=e.isProfile,r=e.loggedUser;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(F,{posts:t,loggedUser:r,isProfile:n},t._id)})}var D="/api/posts";function q(e){return fetch(D,{method:"POST",body:e,headers:{Authorization:"Bearer"+b.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function J(){return fetch(D,{headers:{Authorization:"Bearer "+b.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new Error(e.err)}))}))}function N(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(s.a)(a,2),c=o[0],l=o[1],u=Object(r.useState)(!0),j=Object(s.a)(u,2),p=j[0],g=j[1],b=Object(r.useState)(""),O=Object(s.a)(b,2),m=O[0],f=O[1];function x(){return x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,q(t);case 4:n=e.sent,console.log(n),l([n.data].concat(Object(U.a)(t))),g(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f("Error creating post, please try again");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),x.apply(this,arguments)}function v(){return(v=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:t=e.sent,l(Object(U.a)(t.data)),g(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),m||p?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(T,{handleLogout:n,loggedUser:t})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{loggedUser:t}),Object(d.jsx)(L,{handleAddPost:function(e){return x.apply(this,arguments)}}),Object(d.jsx)(A,{posts:c,loggedUser:t,isProfile:!1}),Object(d.jsx)("h1",{children:"This is the Feed Page"})]})}var B=function(){var e=Object(r.useState)(m.getUser()),t=Object(s.a)(e,2),n=t[0],a=t[1];function o(){a(m.getUser())}return n?Object(d.jsxs)(c.d,{children:[Object(d.jsx)(c.b,{path:"/",element:Object(d.jsx)(N,{loggedUser:n})}),Object(d.jsx)(c.b,{path:"/login",element:Object(d.jsx)(y,{handleSignUpOrLogin:o})}),Object(d.jsx)(c.b,{path:"/signup",element:Object(d.jsx)(k,{handleSignUpOrLogin:o})}),Object(d.jsx)(c.b,{path:"/:username",element:Object(d.jsx)(P,{loggedUser:n,handleLogout:function(){m.logout(),a(null)}})})]}):Object(d.jsxs)(c.d,{children:[Object(d.jsx)(c.b,{path:"/login",element:Object(d.jsx)(y,{handleSignUpOrLogin:o})}),Object(d.jsx)(c.b,{path:"/signup",element:Object(d.jsx)(k,{handleSignUpOrLogin:o})}),Object(d.jsx)(c.b,{path:"/*",element:Object(d.jsx)(c.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(S.a,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.06db519f.chunk.js.map