"use strict";(self.webpackChunkadmin_panel_agro=self.webpackChunkadmin_panel_agro||[]).push([[435],{8773:function(e,n,a){a.d(n,{Z:function(){return u}});var r,t,s=a(168),i=a(6334),l=a(6444),o=l.default.div(r||(r=(0,s.Z)(["\n  height: 100px;\n  display: flex;\n  align-items: center;\n  padding: ","px ","px;\n  background: ",";\n  border-radius: ",";\n\n  @media "," {\n    height: 150px;\n  }\n\n  @media "," {\n    height: 234px;\n  }\n"])),(function(e){return e.theme.space[6]}),(function(e){return e.theme.space[8]}),(function(e){return e.theme.colors.primaryGradient}),(function(e){return e.theme.radii.pageTitle}),i.Hb.tablet,i.Hb.desktop),c=l.default.h1(t||(t=(0,s.Z)(["\n  color: ",";\n  font-size: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.accentText}),(function(e){return e.theme.fontSizes.xl}),i.Hb.desktop,(function(e){return e.theme.fontSizes.xxl})),d=a(184);function u(e){var n=e.title;return(0,d.jsx)(o,{children:(0,d.jsx)(c,{children:n})})}},7435:function(e,n,a){a.r(n),a.d(n,{default:function(){return B}});var r=a(2791),t=a(7689),s=a(8773),i=a(9439),l=a(9778),o=a(7697),c=a(3864),d=a(1413),u=a(2163),m=a(640),x=a(6281),j=a(6576),p=a(483),h=a(6334),f=a(1013),g=a(184);function Z(e){var n=e._id,a=e.email,r=e.name,s=e.surname,i=e.role,l=(0,t.s0)(),o=(0,t.TH)(),c=function(e){e.target instanceof HTMLAnchorElement||l("".concat(n),{state:{from:o}})};return(0,g.jsxs)(u.Z,{onClick:function(){return c},children:[(0,g.jsx)(m.Z,{title:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447",value:r,additionalValue:s}),(0,g.jsx)(x.Z,{title:"\u041f\u043e\u0448\u0442\u0430",value:a}),(0,g.jsx)(x.Z,{title:"\u0420\u043e\u043b\u044c",value:(0,f.Z)(h.G7[i])}),(0,g.jsxs)(p.Z,{display:"flex",justifyContent:"center",gridGap:2,children:[(0,g.jsx)(j.Z,{type:"edit",navigateTo:"".concat(n,"/form"),state:{from:o}}),(0,g.jsx)(j.Z,{type:"remove",navigateTo:"".concat(n,"/confirm"),state:{from:o}})]})]})}var v=a(6915);function y(e){var n=e.usersList;return(0,g.jsx)(v.Z,{children:n.map((function(e){return(0,g.jsx)(Z,(0,d.Z)({},e),e._id)}))})}var b=a(9426),w=a(5705),G=a(6727),k=G.Ry().shape({email:G.Z_().min(10,"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430 \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0430 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432.").max(63,"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430 \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u0434\u043e\u0432\u0433\u0430 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 63 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432.").email("\u041d\u0435\u0432\u0430\u043b\u0456\u0434\u043d\u0430 \u043f\u043e\u0448\u0442\u0430").matches(/^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u043b\u0456\u0434\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438").required("\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u043c"),password:G.Z_().min(7,"\u041f\u0430\u0440\u043e\u043b\u044c \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 7 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432.").max(32,"\u041f\u0430\u0440\u043e\u043b\u044c \u0437\u0430\u043d\u0430\u0434\u0442\u043d\u043e \u0434\u043e\u0432\u0433\u0438\u0439 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 32 \u0441\u0438\u043c\u0432\u043e\u043b\u0438.").matches(/^\d*(?=.*[a-z])(?=.*[A-Z])\S+\D*\d*$/,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435: \u0432\u0435\u043b\u0438\u043a\u0456 \u043b\u0456\u0442\u0435\u0440\u0438, \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0456 \u043b\u0456\u0442\u0435\u0440\u0438 \u0442\u0430 \u0446\u0438\u0444\u0440\u0438").required("\u041f\u0430\u0440\u043e\u043b\u044c \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u043c"),confirmPassword:G.Z_().oneOf([G.iH("password"),""],"\u041f\u0430\u0440\u043e\u043b\u0456 \u043c\u0430\u044e\u0442\u044c \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0430\u0442\u0438!"),name:G.Z_().min(2,"\u0406\u043c'\u044f \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(30,"\u0406\u043c'\u044f \u0437\u0430\u043d\u0430\u0434\u0442\u043d\u043e \u0434\u043e\u0432\u0433\u0435 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").matches(/^([a-zA-Z-\u0410-\u042f\u0430-\u044f\u0401\u0451\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491']+)$/,"\u0406\u043c'\u044f \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u043b\u0456\u0442\u0435\u0440\u0438").required("\u0406\u043c'\u044f \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u043c"),surname:G.Z_().min(2,"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0437\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0456\u043d\u0456\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(40,"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0437\u0430\u043d\u0430\u0434\u0442\u043d\u043e \u0434\u043e\u0432\u0433\u0435 - \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 40 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").matches(/^([a-zA-Z-\u0410-\u042f\u0430-\u044f\u0401\u0451\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491']+)$/,"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u043b\u0456\u0442\u0435\u0440\u0438").required("\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u043c"),role:G.nK().oneOf(h.pR).required("\u0420\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u043f\u043e\u043b\u0435\u043c")}),C=a(1213),_={email:"",password:"",name:"",surname:"",role:""};function M(e){var n=e.onClose,a=(0,r.useState)(!1),t=(0,i.Z)(a,2),s=t[0],o=t[1],d=(0,r.useState)(!1),u=(0,i.Z)(d,2),m=u[0],x=u[1],j=(0,l.TL)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:"\u041e\u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}),(0,g.jsx)(w.J9,{initialValues:_,onSubmit:function(e,a){j((0,c.R0)(e)),a.resetForm(),n()},validateOnBlur:!0,validationSchema:k,children:(0,g.jsxs)(w.l0,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,g.jsxs)("label",{children:["\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430:",(0,g.jsx)(w.gN,{name:"email",type:"email",id:"email",placeholder:"email"}),(0,g.jsx)(w.Bc,{name:"email"})]}),(0,g.jsxs)("label",{children:["\u041f\u0430\u0440\u043e\u043b\u044c:",(0,g.jsx)(w.gN,{name:"password",type:s?"text":"password",id:"password"}),(0,g.jsx)("button",{type:"button",onClick:function(){return o(!s)},children:s?(0,g.jsx)(C.hdl,{}):(0,g.jsx)(C.xs2,{})}),(0,g.jsx)(w.Bc,{name:"password"})]}),(0,g.jsxs)("label",{children:["\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c:",(0,g.jsx)(w.gN,{name:"confirmPassword",type:m?"text":"password",id:"confirmPassword"}),(0,g.jsx)("button",{type:"button",onClick:function(){return x(!m)},children:m?(0,g.jsx)(C.hdl,{}):(0,g.jsx)(C.xs2,{})}),(0,g.jsx)(w.Bc,{name:"confirmPassword"})]}),(0,g.jsxs)("label",{children:["\u0406\u043c'\u044f:",(0,g.jsx)(w.gN,{name:"name",type:"text",id:"name"}),(0,g.jsx)(w.Bc,{name:"name"})]}),(0,g.jsxs)("label",{children:["\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435:",(0,g.jsx)(w.gN,{name:"surname",type:"text",id:"surname"}),(0,g.jsx)(w.Bc,{name:"surname"})]}),(0,g.jsxs)("label",{style:{display:"flex",flexDirection:"column"},children:["\u0420\u043e\u043b\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430",(0,g.jsxs)("label",{children:[(0,f.Z)(h.G7.admin),(0,g.jsx)(w.gN,{name:"role",type:"radio",id:h.G7.admin,value:h.G7.admin})]}),(0,g.jsxs)("label",{children:[(0,f.Z)(h.G7.applyManager),(0,g.jsx)(w.gN,{name:"role",type:"radio",id:h.G7.applyManager,value:h.G7.applyManager})]}),(0,g.jsxs)("label",{children:[(0,f.Z)(h.G7.servicesManager),(0,g.jsx)(w.gN,{name:"role",type:"radio",id:h.G7.servicesManager,value:h.G7.servicesManager})]}),(0,g.jsxs)("label",{children:[(0,f.Z)(h.G7.productsManager),(0,g.jsx)(w.gN,{name:"role",type:"radio",id:h.G7.productsManager,value:h.G7.productsManager})]}),(0,g.jsx)(w.Bc,{name:"role"})]}),(0,g.jsx)("button",{type:"submit",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"})]})})]})}var N=a(6209);function S(){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),a=n[0],t=n[1],s=(0,l.TL)(),d=(0,l.CG)(c.B9).entities;return(0,r.useEffect)((function(){s((0,o.AW)())}),[s]),(0,g.jsx)("section",{style:{position:"relative"},children:(0,g.jsxs)(g.Fragment,{children:[null!==d&&void 0!==d&&d.length?(0,g.jsx)(y,{usersList:d}):(0,g.jsx)("h2",{children:"There arent any users"}),(0,g.jsx)(N.Z,{onClick:function(){return t(!0)}}),a&&(0,g.jsx)(b.Z,{onClose:function(){return t(!1)},children:(0,g.jsx)(M,{onClose:function(){return t(!1)}})})]})})}var T=a(6375);function B(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z,{title:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"}),(0,g.jsx)(S,{}),(0,g.jsx)(r.Suspense,{fallback:(0,g.jsx)(T.Z,{}),children:(0,g.jsx)(t.j3,{})})]})}}}]);
//# sourceMappingURL=435.ea86256b.chunk.js.map