!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){for(var r=document.getElementById("myCanvas"),n=r.getContext("2d"),o=r.width/2,i=r.height-30,l=2,f=-2,a=(r.width-75)/2,u=!1,c=!1,d=0,y=3,h=[],s=0;s<3;s++){h[s]=[];for(var v=0;v<5;v++)h[s][v]={x:0,y:0,status:1}}document.addEventListener("keydown",(function(t){"Right"==t.key||"ArrowRight"==t.key?u=!0:"Left"!=t.key&&"ArrowLeft"!=t.key||(c=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"==t.key||"ArrowRight"==t.key?u=!1:"Left"!=t.key&&"ArrowLeft"!=t.key||(c=!1)}),!1),document.addEventListener("mousemove",(function(t){var e=t.clientX-r.offsetLeft;e>0&&e<r.width&&(a=e-37.5)}),!1),function t(){n.clearRect(0,0,r.width,r.height),function(){for(var t=0;t<3;t++)for(var e=0;e<5;e++)if(1==h[t][e].status){var r=85*e+30,o=30*t+30;h[t][e].x=r,h[t][e].y=o,n.beginPath(),n.rect(r,o,75,20),n.fillStyle="#0095DD",n.fill(),n.closePath()}}(),n.beginPath(),n.arc(o,i,10,0,2*Math.PI),n.fillStyle="#0095DD",n.fill(),n.closePath(),n.beginPath(),n.rect(a,r.height-10,75,10),n.fillStyle="#0095DD",n.fill(),n.closePath(),n.font="16px Arial",n.fillStyle="#0095DD",n.fillText("Score: "+d,8,20),n.font="16px Arial",n.fillStyle="#0095DD",n.fillText("Lives: "+y,r.width-65,20),function(){for(var t=0;t<3;t++)for(var e=0;e<5;e++){var r=h[t][e];1==r.status&&o>r.x&&o<r.x+75&&i>r.y&&i<r.y+20&&(f=-f,r.status=0,15==++d&&(alert("YOU WIN, CONGRATS!"),document.location.reload()))}}(),(o+l>r.width-10||o+l<10)&&(l=-l),i+f<10?f=-f:i+f>r.height-10&&(o>a&&o<a+75?f=-f:--y?(o=r.width/2,i=r.height-30,l=3,f=-3,a=(r.width-75)/2):(alert("GAME OVER"),document.location.reload())),u&&a<r.width-75?a+=7:c&&a>0&&(a-=7),o+=l,i+=f,requestAnimationFrame(t)}()}]);