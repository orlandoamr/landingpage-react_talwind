(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],[,,,,,function(e,n,r){},,,,,,,,function(e,n,r){},function(e,n,r){},,function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),c=r(6),s=r.n(c),o=(r(13),r.p,r(14),r(0));var i=function(e){var n=e.label,r=e.uri;return Object(o.jsx)("li",{children:Object(o.jsx)("a",{alt:n,href:r,children:n})})};r(16);var l=function(){var e=[{label:"Home",uri:"#home"},{label:"Tarjetas",uri:"#cards"},{label:"Acerca",uri:"Acerca"}].map((function(e,n){return Object(o.jsx)(i,{label:e.label,uri:e.uri},n)}));return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:e})})};var u=function(e){var n=e.title;return Object(o.jsx)("h1",{children:n})};r(17);var d=function(e){return e.children,Object(o.jsxs)("header",{children:[Object(o.jsx)(u,{title:"World Of Watches"}),Object(o.jsx)(l,{})]})};r(5);var j=r(2),b=r(3),p=r(7);var h=function(e){var n=e.children;return Object(o.jsx)("form",{className:"",children:n})},x=r(8);var f=function(e){var n=e.type,r=e.id,t=e.fname,a=e.onChange,c=e.caption,s=e.value,i=e.error,l=Object(x.a)(e,["type","id","fname","onChange","caption","value","error"]);return Object(o.jsxs)("section",{className:"border rounded",children:[Object(o.jsx)("label",{className:"sr-only",children:c}),Object(o.jsx)("input",Object(b.a)({className:"w-full appearance-none rounded-none p-3 border-gray-300",type:n,id:r,name:t,onChange:a,value:s},l)),i?Object(o.jsx)("section",{className:"",children:i}):null]})};var m=function(e){var n=e.caption,r=e.onClick;return Object(o.jsx)("button",{onClick:r,className:["w-full","flex","items-center","justify-center","px-8","py-4","my-4","border","border-transparent","text-base","font-medium","rounded-lg","text-white","bg-indigo-600","hover:bg-indigo-400","md:py-4","md:text-lg","md:px-10"].join(" "),children:n})};var O=function(){var e=Object(t.useState)({username:"",password:"",usernameError:"",passwordError:""}),n=Object(p.a)(e,2),r=n[0],a=n[1],c=function(e){var n,t=e.currentTarget,c=t.name,s=t.value,o=null;"password"===c&&(o=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(s)?null:"Contrase\xf1a Inv\xe1lida"),a(Object(b.a)(Object(b.a)({},r),{},(n={},Object(j.a)(n,c,s),Object(j.a)(n,c+"Error",o),n)))};return Object(o.jsx)("div",{class:"min-h-screen flex items-center justify-center bg-indigo-600 py-12 px-4 sm:px-6 lg:px-8",children:Object(o.jsxs)("div",{class:"max-w-md w-full space-y-8",children:[Object(o.jsx)("h2",{class:"text-center text-3xl font-bold text-white",children:"Inicia sesi\xf3n en tu cuenta"}),Object(o.jsx)("div",{class:" bg-white mt-8 space-y-6 rounded shadow p-5",children:Object(o.jsxs)(h,{children:[Object(o.jsx)(f,{type:"text",id:"username",fname:"username",onChange:c,caption:"Correo Electr\xf3nico",value:r.username,error:r.usernameError,placeholder:"Tu correo"}),Object(o.jsx)(f,{type:"password",id:"password",fname:"password",onChange:c,caption:"Contrase\xf1a",value:r.password,error:r.passwordError,placeholder:"Contrase\xf1a"}),Object(o.jsx)(m,{caption:"Entrar",onClick:function(e){e.preventDefault(),e.stopPropagation();var n=r.username,t=r.password;alert("Usuario:".concat(n," Psswd:").concat(t))}})]})})]})})};var v=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)(d,{}),Object(o.jsx)("section",{children:Object(o.jsx)(O,{})})]})},g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,c=n.getLCP,s=n.getTTFB;r(e),t(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.1cba67ff.chunk.js.map