!function(){'use strict';var a=function d(a,b,c){var e=c.start,f=c.end,g=c.from,h=c.to,i=c.easing,j=c.onstart,k=c.onprogress,l=c.onend;this.target=a;this.handler=b;this.start=e;this.end=f;this.easing=i;this.from=g;this.to=h;this.keys=[];this.onstart=j;this.onprogress=k;this.onend=l;this.running=!1;this.store=a.__liike||(a.__liike={})};a.prototype.init=function a(){var b=this,c=this,d=c.from,e=c.to,f=c.keys;for(var g in e)(g in d)||(d[g]=b.store[g]||0),f.push(g);for(var h in d)(h in e)||(e[h]=b.store[h]||0,f.push(h))};a.prototype.tick=function b(a){var c=this,d=this,e=d.keys,f=d.from,g=d.to,h=d.easing,i=h(a);for(var j=0;j<e.length;j++){var k=e[j];c.store[k]=f[k]+(g[k]-f[k])*i}this.handler(this.target,this.store)};var b=function(a){return function(b){return Math.pow(b,a)}},c=function(a){return function(b){return 1-Math.abs(Math.pow(b-1,a))}},d=function(a){return function(d){return d<0.5?b(a)(d*2)/2:c(a)(d*2-1)/2+0.5}},e=function(a){return a},f=b(2),g=c(2),h=d(2),i=b(3),j=c(3),k=d(3),l=b(4),m=c(4),n=d(4),o=b(5),p=c(5),q=d(5),r=function(a){return 1+Math.sin(Math.PI/2*a-Math.PI/2)},s=function(a){return Math.sin(Math.PI/2*a)},u=function(a){return(1+Math.sin(Math.PI*a-Math.PI/2))/2},v=function(a){var b=7.5625,c=2.75;if(a<1/c){return b*a*a}if(a<2/c){a-=1.5/c;return b*a*a+0.75}if(a<2.5/c){a-=2.25/c;return b*a*a+0.9375}a-=2.625/c;return b*a*a+0.984375},w=Object.freeze({linear:e,quadIn:f,quadOut:g,quadInOut:h,cubicIn:i,cubicOut:j,cubicInOut:k,quartIn:l,quartOut:m,quartInOut:n,quintIn:o,quintOut:p,quintInOut:q,sineIn:r,sineOut:s,sineInOut:u,bounce:v}),x=[],y=[],z=function(){},A=0,B=function(a){while(y.length){var b=y.shift();b(a)}for(var c=0;c<x.length;c++){var d=x[c];if(a<d.start){continue}d.running||(d.running=!0,d.init(),d.onstart());var e=(a-d.start)/(d.end-d.start);d.tick(e<1?e:1);d.onprogress(e);a>d.end&&(d.onend(),x.splice(c--,1))}y.length||x.length?(A=window.requestAnimationFrame(B)):(A=0)},C=function(b){return function(c,d){var e=d.delay;e===void 0&&(e=0);var f=d.duration;f===void 0&&(f=0);var g=d.from;g===void 0&&(g={});var h=d.to;h===void 0&&(h={});var i=d.easing;i===void 0&&(i='linear');var j=d.onprogress;j===void 0&&(j=z);var k=d.onstart;k===void 0&&(k=z);var l=d.onend;l===void 0&&(l=z);y.push(function(d){var m=new a(c,b,{start:d+e,end:d+e+f,from:g,to:h,easing:w[i],onstart:k,onprogress:j,onend:l});x.push(m)});A||(A=window.requestAnimationFrame(B))}},D='cubicInOut',E='quartInOut',F='sineInOut',G=function(a,b){var c=b.x;c===void 0&&(c=0);var d=b.y;d===void 0&&(d=0);var e=b.rotate;e===void 0&&(e=0);a.style.transform="translate("+c+"px, "+d+") rotate("+e+"deg)"},H=C(G),I=document.getElementById('liike');I.textContent='Hello Liike!';H(I,{delay:1000,duration:1000,easing:D,to:{x:100}});H(I,{delay:1250,duration:1500,easing:F,to:{rotate:180}});H(I,{delay:2000,duration:1000,easing:D,to:{x:0}});H(I,{delay:3000,duration:1000,easing:E,to:{x:100}});H(I,{delay:3250,duration:1500,easing:D,to:{rotate:360}});H(I,{delay:4000,duration:1000,easing:E,to:{x:0}})}()
