(this["webpackJsonpgoit-react-feedback-hooks"]=this["webpackJsonpgoit-react-feedback-hooks"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={section:"Section_section__-Uhkq",title:"Section_title__SrqLO"}},,function(t,e,n){t.exports={button:"Buttons_button__3k6E3"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(6),a=n.n(o),s=(n(13),n(2)),r=n(4),u=n(8),l=(n(14),n(7)),d=n.n(l),b=n(0);function j(t){var e=t.options,n=t.feedBack;return e.map((function(t){return Object(b.jsx)("button",{className:d.a.button,type:"button",onClick:function(){return n(t)},children:t},t)}))}var O=n(5),f=n.n(O);function h(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{className:f.a.section,children:[Object(b.jsx)("h2",{className:f.a.title,children:e}),n]})}function x(t){var e=t.good,n=t.neutral,c=t.bad,i=t.totalFeedback,o=t.positiveFeedBack;return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Good : ",e]}),Object(b.jsxs)("li",{children:["Neutral : ",n]}),Object(b.jsxs)("li",{children:["Bad : ",c]}),Object(b.jsxs)("li",{children:["Total : ",i]}),Object(b.jsxs)("li",{children:["Positive feedback : ",o,"%"]})]})}function k(t){var e=t.text;return Object(b.jsx)("p",{children:e})}var v=function(){var t=Object(c.useState)({good:0,neutral:0,bad:0}),e=Object(u.a)(t,2),n=e[0],i=e[1],o=function(){return Object.values(n).reduce((function(t,e){return t+e}),0)};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)("div",{className:"buttons__container",children:Object(b.jsx)(j,{options:Object.keys(n),feedBack:function(t){i((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t,e[t]+1))}))}})})}),Object(b.jsx)(h,{title:"Statistics",children:0===o()?Object(b.jsx)(k,{text:"No feedback given"}):Object(b.jsx)(x,{good:n.good,neutral:n.neutral,bad:n.bad,totalFeedback:o(),positiveFeedBack:Math.round(n.good/o()*100||0)})})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}],[[16,1,2]]]);
//# sourceMappingURL=main.b9f8f169.chunk.js.map