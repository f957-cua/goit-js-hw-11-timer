(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);o("L1EO"),document.querySelector(".timer-1"),document.querySelector('[data-value="days"]'),document.querySelector('[ data-value="hours"]'),document.querySelector('[data-value="mins"]'),document.querySelector('[data-value="secs"]');new(function(){function e(e){var t=e.selector,o=e.targetDate;this.selector=t,this.targetDate=o}return e.prototype.timer=function(){var e=this,t={timerId:document.querySelector(".timer-1"),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[ data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')};setInterval((function(){var o=Date.now(),r=e.targetDate-o,a=Math.floor(r/864e5),n=Math.floor(r%864e5/36e5),u=Math.floor(r%36e5/6e4),c=Math.floor(r%6e4/1e3);t.days.textContent=a,t.hours.textContent=n,t.mins.textContent=u,t.secs.textContent=c}),1e3)},e}())({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")}).timer()}},[["QfWi",1]]]);
//# sourceMappingURL=main.a9fc28f21ec97e765ded.js.map