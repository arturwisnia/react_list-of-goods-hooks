(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c,o=n(4),s=n.n(o),i=n(3),r=n(1),a=(n(9),n(10),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABETICALLY=1]="ALPHABETICALLY",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var u=function(t){return[].concat(l).sort((function(e,n){return t===c.NONE?0:t===c.ALPHABETICALLY?e.localeCompare(n):e.length-n.length}))},b=function(){var t=Object(r.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)(!1),l=Object(i.a)(s,2),b=l[0],j=l[1],h=b?u(n).reverse():u(n);return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:"button is-info ".concat(n!==c.ALPHABETICALLY&&"is-light"),onClick:function(){return o(c.ALPHABETICALLY)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-success ".concat(n!==c.LENGTH&&"is-light"),onClick:function(){return o(c.LENGTH)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button is-warning ".concat(!b&&"is-light"),onClick:function(){return j(!b)},children:"Reverse"}),(b||n!==c.NONE)&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(!1),o(c.NONE)},children:"Reset"})]}),Object(a.jsx)("ul",{children:Object(a.jsx)("ul",{children:h.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};s.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d6b3dbc0.chunk.js.map