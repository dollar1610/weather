(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(55)},39:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),i=a.n(c),o=(a(39),a(15)),l=a(16),s=a(20),m=a(17),u=a(19),h=a(14),d=a(18),p=a(6);a(45);function b(e){return r.a.createElement("div",{className:"weather-item weather-item--".concat(e.item.weather)},r.a.createElement("div",{className:"weather-item-date"},r.a.createElement("div",{className:"weather-item-date-week"},r.a.createElement("span",null,e.item.dayWeek)),r.a.createElement("div",{className:"weather-item-date-month"},r.a.createElement("span",null,"".concat(e.item.dayMonth," ").concat(e.item.month)))),r.a.createElement("div",{className:"weather-item-value"},r.a.createElement("div",{className:"weather-item-value-temp"},r.a.createElement("span",null,e.item.tempDay,r.a.createElement("sup",null,r.a.createElement("small",null,"0")),"/".concat(e.item.tempNight))),r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(e.item.icon,".png"),alt:""})))}var v=a(3),g=a.n(v),w=(a(47),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:{},activeTab:"1"},a.toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.WeatherPage;return console.log(t),r.a.createElement("div",{className:"weather-page"},r.a.createElement("div",{className:"weather-page__body"},r.a.createElement(p.a,null,r.a.createElement(p.b,{tabs:!0},r.a.createElement(p.c,null,r.a.createElement(p.d,{className:g()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Today")),r.a.createElement(p.c,null,r.a.createElement(p.d,{className:g()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Week")))),r.a.createElement(p.e,{activeTab:this.state.activeTab},r.a.createElement(p.f,{tabId:"1"},t.map(function(e){return r.a.createElement(b,{item:e})}))),r.a.createElement(p.e,{activeTab:this.state.activeTab},r.a.createElement(p.f,{tabId:"2"},r.a.createElement(p.a,null,[1,2,3].map(function(e){return 999}))))))}}]),t}(r.a.PureComponent)),E=Object(d.b)(function(e){return{WeatherPage:e.get("WeatherData")}},function(e){return{onRequestWeather:function(){return e()}}})(w),f=(a(49),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),t}(n.Component));a(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(11),j=a(33),k=a(32),_="app/WeatherPage/GET_WEATHER_DATA",N="app/WeatherPage/LOADING",T=Object(k.a)({WeatherData:{},loading:!1});var y=a(13),D=a.n(y),W=a(10);function x(e){return{type:_,data:e}}var S=D.a.mark(I);function I(){var e,t,a,n;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bfc2d22bb5800afd064cd85e587bc7dc").then(function(e){return e.json()}).then(function(e){return e.list});case 3:e=r.sent,t=[],a=1,n=0;case 7:if(!(n<e.length)){r.next=15;break}if(t[n]={dayMonth:"".concat(new Date(e[a].dt_txt).getDate()),month:(new Date).toLocaleString("eng",{month:"short"}),dayWeek:new Date(e[a].dt_txt).toLocaleTimeString("eng",{weekday:"long"}).replace(/ [\s\S]+/,""),tempDay:Math.round(e[a].main.temp_max-273.15),tempNight:Math.round(e[a].main.temp_min-273.13),icon:e[a].weather[0].icon,weather:e[a].weather[0].main},!((a+=8)>e.length)){r.next=12;break}return r.abrupt("break",15);case 12:n+=1,r.next=7;break;case 15:return console.log(e),r.next=18,Object(W.b)(x(t));case 18:r.next=23;break;case 20:r.prev=20,r.t0=r.catch(0),console.error(r.t0);case 23:case"end":return r.stop()}},S,this,[[0,20]])}var P=I,A=D.a.mark(L);function L(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)(P);case 2:case"end":return e.stop()}},A,this)}var C=Object(j.a)(),M=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),R=Object(O.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case _:return e.set("WeatherData",t.data);case N:return e.set("loading",t.data)}},Object(O.c)(Object(O.a)(C),M));C.run(L),i.a.render(r.a.createElement(d.a,{store:R},r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.4a3fc06d.chunk.js.map