(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(20),r=n.n(a),i=(n(37),n(38),n(16)),s=n(17),j=n(26),o=n(56),b="GET_VIDEOGAMES",u="GET_VIDEOGAMES_DETAIL",O="CLEAN_GAME_DETAIL",d=(n(46),n(2)),h=function(e){var t=e.game;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:t.nombre}),Object(d.jsx)("img",{src:t.imagen,alt:"No se encuentra la imagen",class:"imgGame"}),Object(d.jsx)("h3",{children:t.generos})]})},l=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.videogames}));return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(Object(s.a)().mark((function e(t){var n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://localhost:3001/videogames");case 2:n=e.sent,c=n.data,t({type:b,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t.length?Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(h,{game:e},e.id)}))}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h3",{children:"Loading"})})},g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"aca va a ir un form"})})},m=n(11),x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m.b,{to:"/home",children:"Home"}),Object(d.jsx)(m.b,{to:"/post",children:"Create"})]})},p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"https://stonkstutors.com/wp-content/uploads/2022/01/Juegos-en-tu-Smart-TV.jpg",alt:"No hay imagen"}),Object(d.jsx)(m.b,{to:"/home",children:Object(d.jsx)("button",{children:"Ingresar"})})]})},f=n(5);var v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(x,{}),Object(d.jsx)(f.a,{path:"/home",children:Object(d.jsx)(l,{})}),Object(d.jsx)(f.a,{path:"/post",children:Object(d.jsx)(g,{})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},_=n(12),D={videogames:[],videogameDetail:{}};var T=n(24),w=n(32),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.b,F=Object(T.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(_.a)(Object(_.a)({},e),{},{videogames:t.payload});case u:return Object(_.a)(Object(_.a)({},e),{},{videogameDetail:t.payload});case O:return Object(_.a)(Object(_.a)({},e),{},{videogameDetail:{}});default:return Object(_.a)({},e)}}),y(Object(T.a)(w.a))),I=F;r.a.render(Object(d.jsx)(i.a,{store:I,children:Object(d.jsx)(m.a,{children:Object(d.jsx)(v,{})})}),document.getElementById("root")),E()}},[[54,1,2]]]);
//# sourceMappingURL=main.db486376.chunk.js.map