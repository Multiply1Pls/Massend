(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{153:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),r=a(76),s=a.n(r),i=(a(85),a(27)),c=a(12),l=a(28),u=a(29),d=a(15),p=a(31),f=a(161),m=a(77),b=a.n(m),g=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={msg:""},a.onTextChange=function(t){a.setState({msg:t.target.value})},a.onClickButton=function(){a.props.onClickButtonHandler(a.state.msg)},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.classes;return o.a.createElement("div",{className:t.InpuChatButton},o.a.createElement("div",null,o.a.createElement("input",{className:t.InputInborder,onChange:this.onTextChange,value:this.state.msg,placeholder:"\u0e1e\u0e34\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e04\u0e27\u0e32\u0e21"}),o.a.createElement("span",null,o.a.createElement("button",{style:{border:"0px solid #ffffff00",backgroundColor:"#ffffff00",position:"absolute",right:"3%%",bottom:"3px"}}),o.a.createElement("button",{style:{border:"0px solid #ffffff00",backgroundColor:"#ffffff00",position:"absolute",right:"12%",bottom:"13%"},onClick:this.onClickButton},o.a.createElement(b.a,{onClick:this.onClickButton})))))}}]),e}(n.Component),h=Object(f.a)({InpuChatButton:{padding:"10px 15px",backgroundColor:"#f5f5f5",borderTop:"1px solid #ddd",borderBottomRightRadius:"3px",borderBottomLeftRadius:"3px",position:"fixed",bottom:"0%",width:"100%"},InputInborder:{border:"1px solid gray",borderRadius:"35px",width:"80%",height:"20px"}})(g),v=Object(f.a)({OverScroll:{},InpuChatButton:{padding:"10px 15px",backgroundColor:"#f5f5f5",borderTop:"1px solid #ddd",borderBottomRightRadius:"3px",borderBottomLeftRadius:"3px",position:"fixed",bottom:"5%",right:"3px"}})(function(t){var e=t.classes;return o.a.createElement("div",{className:e.InpuChatButton},t.listMsg.map(function(t){return o.a.createElement("p",{style:{backgroundColor:"skyblue",padding:"inherit",borderRadius:"40px",textOverflow:"clip",float:"right"},key:t.key},t.message)}))}),k=a(32),x=a.n(k);x.a.initializeApp({apiKey:"AIzaSyBvENjGnJ-FE19bBbnhULSa_y58jwG9KOk",authDomain:"messenger-6ca1c.firebaseapp.com",databaseURL:"https://messenger-6ca1c.firebaseio.com",projectId:"messenger-6ca1c",storageBucket:"messenger-6ca1c.appspot.com",messagingSenderId:"1029167883186",appId:"1:1029167883186:web:016879225a5d6450"});var C=function(t){function e(t){var a;Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={listMsg:[""]},a.onClickButtonHandlerData=function(t){var e=a.state.listMsg.concat({key:Math.random().toString().replace(".",""),message:t});x.a.database().ref("message/").set(e)};var n=Object(d.a)(a);return x.a.database().ref("message").on("value",function(t){null!=t.val()&&n.setState({listMsg:t.val()})}),a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){this.state.listMsg.map(function(t){return o.a.createElement("p",null,t.message)});return o.a.createElement("div",null,o.a.createElement(v,{listMsg:this.state.listMsg}),o.a.createElement(h,{onClickButtonHandler:this.onClickButtonHandlerData}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},80:function(t,e,a){t.exports=a(153)},85:function(t,e,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.658598e6.chunk.js.map