(this["webpackJsonpreact-blog-app"]=this["webpackJsonpreact-blog-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),o=a.n(s),l=(a(12),a(6)),r=a(4),i=a(0),j=function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),u=j[0],d=j[1],h=Object(c.useState)(["Task1","Task2","React"]),p=Object(r.a)(h,2),b=p[0],O=p[1],f=[].concat(Object(l.a)(b),[n]);console.log(u);var m=function(e){return s(e.target.value)},g=function(){console.log("hello")};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"Todo List"}),Object(i.jsx)("p",{className:"content",children:"ADD TASK"}),Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("div",{className:"input-area",children:Object(i.jsx)("form",{id:"add-form",method:"get",children:Object(i.jsx)("input",{id:"add-input",placeholder:"New Task",type:"text",autoComplete:"off",onKeyPress:function(e){if("Enter"===e.key){if(console.log("add task"),e.preventDefault(),""===n)return;O(f),s(""),console.log(m),console.log("New task is "+n),console.log(f)}},value:n,onChange:m})})}),Object(i.jsx)("div",{className:"input-area",children:Object(i.jsx)("form",{id:"search-form",method:"get",children:Object(i.jsx)("input",{id:"search-input",type:"text",placeholder:"Search Keyword",autoComplete:"off",onChange:function(e){d((function(){return e.target.value})),console.log(u),f.map((function(e){return!1!==e.startsWith(u)?(console.log(e),console.log(u),console.log("remain tasks")):console.log("no here"),""}))},value:u})})}),Object(i.jsx)("div",{className:"task-area",children:Object(i.jsx)("ul",{id:"task-area-list",children:b.map((function(e,t){return Object(i.jsxs)("li",{className:"task-area-list",children:[Object(i.jsx)("input",{type:"text",value:e,onChange:g,onClick:function(){},className:"task"}),Object(i.jsx)("i",{className:"fa fa-trash",onClick:function(){return function(e){var t=Object(l.a)(b);t.splice(e,1),O(t),alert("todo\u3092\u524a\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304b\uff1f")}(t)}})]},t)}))})}),Object(i.jsx)("p",{className:"link",children:Object(i.jsx)("a",{href:"https://nao-uru.github.io/Todo-Js/",children:"JavaScripc Only"})})]})]})};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5a0fa264.chunk.js.map