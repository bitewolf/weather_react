(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var i=s(0),r=s(1),n=s.n(r),c=s(4),a=s.n(c),o=(s(15),s(3)),d=s.n(o),u=s(5),h=s(6),l=s(7),m=s(9),j=s(8),p=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[e.temp," \xb0C"]}),Object(i.jsxs)("p",{children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a:",e.tempFeels," \xb0C"]})]})},v=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.weatherMethod,children:[Object(i.jsx)("input",{type:"text",name:"city",placeholder:"\u0413\u043e\u0440\u043e\u0434"}),Object(i.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u0443 \u043e \u043f\u043e\u0433\u043e\u0434\u0435"})]})})},b=function(e){return Object(i.jsxs)("div",{children:[e.city&&Object(i.jsxs)("div",{className:"infoWeather",children:[Object(i.jsxs)("p",{children:["\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",e.city,",",e.country]}),Object(i.jsxs)("p",{children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",e.pressure]}),Object(i.jsxs)("p",{children:["\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0441\u0435\u0439\u0447\u0430\u0441: ",e.temp]}),Object(i.jsxs)("p",{children:["\u0412\u043e\u0441\u0445\u043e\u0434 \u0441\u043e\u043b\u043d\u0446\u0430: ",e.sunrise]}),Object(i.jsxs)("p",{children:["\u0417\u0430\u043a\u0430\u0442 \u0441\u043e\u043b\u043d\u0446\u0430: ",e.sunset]})]}),Object(i.jsx)("p",{className:"error",children:e.error})]})},f="a67beca4caf74f3b11c47d014661d391",O=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(h.a)(this,s);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={temp:void 0,tempFeels:void 0,city:void 0,country:void 0,pressure:void 0,sunrise:void 0,sunset:void 0,error:void 0,weather:void 0,time:void 0,timezone:void 0},e.gettingWeather=function(){var t=Object(u.a)(d.a.mark((function t(s){var i,r,n,c,a,o,u,h,l,m,j;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),!(i=s.target.elements.city.value)){t.next=24;break}return t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&APPID=").concat(f,"&units=metric"));case 5:return r=t.sent,t.next=8,r.json();case 8:n=t.sent,console.log(n),console.log(n.weather[0].description),c=n.main.pressure,a=Math.floor(.75006*c),o=(o=n.weather[0].description).replace(/ +/g,"").trim(),console.log(o),u=new Date,l=(h=u).getHours()+h.getTimezoneOffset()/60+n.timezone/3600,m=new Intl.DateTimeFormat("ru-RU",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(1e3*n.sys.sunrise+6e4*h.getTimezoneOffset()+1e3*n.timezone),j=new Intl.DateTimeFormat("ru-RU",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(1e3*n.sys.sunset+6e4*h.getTimezoneOffset()+1e3*n.timezone),e.setState({temp:n.main.temp,tempFeels:n.main.feels_like,city:n.name,country:n.sys.country,pressure:a,sunrise:m,sunset:j,error:void 0,weather:o,time:l}),t.next=25;break;case 24:e.setState({temp:void 0,tempFeels:void 0,city:void 0,country:void 0,pressure:void 0,sunrise:void 0,sunset:void 0,weather:void 0,error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",time:void 0});case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(s,[{key:"render",value:function(){var e="info";if(this.state.weather&&(e+=" "+this.state.weather),this.state.time){var t=this.state.time;t<0&&(t+=24),e+=t>23||t<6?" night":" day"}return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsx)("div",{className:"main",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"window",children:[Object(i.jsx)("div",{className:e,children:Object(i.jsx)(p,{tempFeels:this.state.tempFeels,temp:this.state.temp})}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)(v,{weatherMethod:this.gettingWeather}),Object(i.jsx)(b,{temp:this.state.temp,city:this.state.city,country:this.state.country,pressure:this.state.pressure,sunrise:this.state.sunrise,sunset:this.state.sunset,error:this.state.error})]})]})})})})}}]),s}(n.a.Component),x=(s(17),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),r(e),n(e),c(e)}))});a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.d8ea434b.chunk.js.map