(this["webpackJsonpexp-project"]=this["webpackJsonpexp-project"]||[]).push([[0],{10:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__3YJJk",formWrapper:"Login_formWrapper__3iUu3",loginButtonStyles:"Login_loginButtonStyles__1efKj",inputContainerStyles:"Login_inputContainerStyles__1z2eP",inputStyle:"Login_inputStyle__2RK4f",checkboxStyles:"Login_checkboxStyles__3RgEX",errorStyles:"Login_errorStyles__3Zx-d"}},21:function(e,t,n){e.exports={bigButtonStyles:"UniqueButton_bigButtonStyles__3VQqY",midButtonStyles:"UniqueButton_midButtonStyles__P90HF",smallButtonStyles:"UniqueButton_smallButtonStyles__3XxLm"}},25:function(e,t,n){e.exports={headerContainer:"MyHeader_headerContainer__78M-m",btnRemoteWrapper:"MyHeader_btnRemoteWrapper__2ywST"}},26:function(e,t,n){e.exports={checkboxTrue:"UniqueChechBox_checkboxTrue__3Y_rz",checkboxFalse:"UniqueChechBox_checkboxFalse__3dxYZ"}},27:function(e,t,n){e.exports={errorContainer:"ErrorPage_errorContainer__1TRAp",getBackBtn:"ErrorPage_getBackBtn__1gdeU"}},31:function(e,t,n){e.exports={App:"App_App__2OtoE"}},34:function(e,t,n){e.exports={inputStyles:"UniqueInput_inputStyles__cEjKP"}},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(16),c=n.n(i),o=(n(41),n(31)),a=n.n(o),l=n(25),j=n.n(l),d=n(21),b=n.n(d),u=n(1),p=s.a.memo((function(e){var t,n=e.uniqueOnClick,r=e.disabled,s=e.buttonTitle,i=e.size,c=e.type;return"Large"===i&&(t=b.a.bigButtonStyles),"medium"===i&&(t=b.a.midButtonStyles),"small"===i&&(t=b.a.smallButtonStyles),Object(u.jsx)("button",{className:t,onClick:n,disabled:r,type:c,children:s})})),x=function(){return Object(u.jsxs)("div",{className:j.a.headerContainer,children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"WELL COME"})}),Object(u.jsxs)("div",{className:j.a.btnRemoteWrapper,children:[Object(u.jsx)(p,{buttonTitle:"Button",size:"medium"}),Object(u.jsx)(p,{buttonTitle:"Button",size:"medium"}),Object(u.jsx)(p,{buttonTitle:"Button",size:"medium"}),Object(u.jsx)(p,{buttonTitle:"Button",size:"medium"})]})]})},h=n(3),m=n(22),O=n(10),g=n.n(O),f=n(36),y=n(20),_=function(){Object(y.b)();var e=Object(f.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?(e.password.length<=5||e.password.length>=25)&&(t.password="Must be longer then ".concat(5," or shorter then ").concat(25)):t.password="Required",t},onSubmit:function(t){e.resetForm(),alert(JSON.stringify(t))}});return Object(u.jsxs)("div",{className:g.a.loginWrapper,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"You are welcomed to my App"}),Object(u.jsx)("p",{children:"Insert your data please"}),Object(u.jsx)("p",{children:"Email: some@example.com"}),Object(u.jsx)("p",{children:"Password: your password"})]}),Object(u.jsx)("div",{className:g.a.formWrapper,children:Object(u.jsxs)("form",{className:g.a.formWrapper,onSubmit:e.handleSubmit,children:[Object(u.jsxs)("div",{className:g.a.inputContainerStyles,children:[Object(u.jsx)("span",{children:"Insert email address please:"}),Object(u.jsx)("input",Object(m.a)({type:"email"},e.getFieldProps("email"))),e.touched.email&&e.errors.email&&Object(u.jsx)("div",{className:g.a.errorStyles,children:e.errors.email})]}),Object(u.jsxs)("div",{className:g.a.inputContainerStyles,children:[Object(u.jsx)("span",{children:"Insert password please:"}),Object(u.jsx)("input",Object(m.a)({type:"password"},e.getFieldProps("password"))),e.touched.password&&e.errors.password&&Object(u.jsx)("div",{className:g.a.errorStyles,children:e.errors.password})]}),Object(u.jsxs)("div",{className:g.a.checkboxStyles,children:[Object(u.jsx)("input",Object(m.a)({type:"checkbox",checked:e.values.rememberMe},e.getFieldProps("rememberMe")))," Remember me"]}),Object(u.jsx)("div",{className:g.a.loginButtonStyles,children:Object(u.jsx)(p,{type:"submit",disabled:!1,buttonTitle:"Login",size:"Large"})})]})})]})},S=function(){return Object(u.jsx)("div",{children:"Here is gona be registration page"})},v=function(){return Object(u.jsx)("div",{children:"Page for current profile"})},B=function(){return Object(u.jsx)("div",{children:"Password recovery"})},k=function(){return Object(u.jsx)("div",{children:"Set PW"})},w=n(26),C=n.n(w),N=s.a.memo((function(e){var t=e.checkedMode,n=e.onChangeCheckBox,r=e.width,s=e.height,i=e.fontSize,c={width:"".concat(r,"px"),height:"".concat(s,"px"),display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",backgroundColor:"#424141",color:"yellowgreen",fontSize:"".concat(i,"px")};return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)("div",{style:c,className:C.a.checkboxFalse,onClick:n,children:"\u2714"}):Object(u.jsx)("div",{style:c,className:C.a.checkboxTrue,onClick:n})})})),T=n(34),z=n.n(T),L=function(e){var t=e.width,n=e.height,r=e.fontSize,s=e.type,i={outline:"none",border:"3px solid gray",width:"".concat(t,"px"),height:"".concat(n,"px"),fontSize:"".concat(r,"px"),fontFamily:"'Lekton', sans-serif"};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{style:i,className:z.a.inputStyles,type:s})})},P=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(p,{buttonTitle:"Test",size:"Large"})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(p,{buttonTitle:"Test",size:"medium"})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(p,{buttonTitle:"Test",size:"small"})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(N,{checkedMode:!0,onChangeCheckBox:function(){},width:18,height:18,fontSize:8})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(N,{checkedMode:!0,onChangeCheckBox:function(){},width:35,height:35,fontSize:18})}),Object(u.jsx)("div",{style:{padding:"10px"},children:Object(u.jsx)(L,{width:200,height:30,fontSize:18})})]})},F=n(27),M=n.n(F),W=n(15),R=function(){return Object(u.jsxs)("div",{className:M.a.errorContainer,children:[Object(u.jsx)("h3",{children:"Something wrong"}),Object(u.jsx)("h1",{children:"404"}),Object(u.jsx)("h1",{children:"Page not found"}),Object(u.jsx)("p",{children:"Get back to main menu"}),Object(u.jsx)(W.b,{to:"/",className:M.a.getBackBtn,children:"BACK"})]})},q="/login",A="/reg",E="/profile",I="/passRecovery",U="/setPass",J="/differentStuff",Y="/404",Z=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)("h1",{children:"Ready to work..."})}}),Object(u.jsx)(h.b,{exact:!0,path:q,render:function(){return Object(u.jsx)(_,{})}}),Object(u.jsx)(h.b,{path:A,render:function(){return Object(u.jsx)(S,{})}}),Object(u.jsx)(h.b,{path:E,render:function(){return Object(u.jsx)(v,{})}}),Object(u.jsx)(h.b,{path:I,render:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(h.b,{path:U,render:function(){return Object(u.jsx)(k,{})}}),Object(u.jsx)(h.b,{path:J,render:function(){return Object(u.jsx)(P,{})}}),Object(u.jsx)(h.b,{path:Y,render:function(){return Object(u.jsx)(R,{})}}),Object(u.jsx)(h.a,{from:"*",to:"/404"})]})})};var H=function(){return Object(u.jsxs)("div",{className:a.a.App,children:[Object(u.jsx)(x,{}),Object(u.jsx)(W.a,{children:Object(u.jsx)(Z,{})})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),i(e),c(e)}))},V=n(29),X=Object(V.a)({}),D=Object(V.b)(X);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y.a,{store:D,children:Object(u.jsx)(H,{})})}),document.getElementById("root")),K()}},[[47,1,2]]]);
//# sourceMappingURL=main.fc68bf44.chunk.js.map