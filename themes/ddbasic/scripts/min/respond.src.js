window.matchMedia=window.matchMedia||function(e,t){var n,a=e.documentElement,i=a.firstElementChild||a.firstChild,s=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',a.insertBefore(s,i),n=42==r.offsetWidth,a.removeChild(s),{matches:n,media:e}}}(document),function(e){function t(){E(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!respond.mediaQueriesSupported){var n,a,i,s=e.document,r=s.documentElement,o=[],d=[],l=[],m={},h=30,u=s.getElementsByTagName("head")[0]||r,c=s.getElementsByTagName("base")[0],p=u.getElementsByTagName("link"),f=[],g=function(){for(var t,n,a,i,s=p,r=s.length,o=0;o<r;o++)t=s[o],n=t.href,a=t.media,i=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&i&&!m[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(x(t.styleSheet.rawCssText,n,a),m[n]=!0):(/^([a-zA-Z:]*\/\/)/.test(n)||c)&&n.replace(RegExp.$1,"").split("/")[0]!==e.location.host||f.push({href:n,media:a}));y()},y=function(){if(f.length){var e=f.shift();w(e.href,function(t){x(t,e.href,e.media),m[e.href]=!0,setTimeout(function(){y()},0)})}},x=function(e,t,n){var a,i,s,r,l,m=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),h=m&&m.length||0,t=t.substring(0,t.lastIndexOf("/")),u=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},c=!h&&n,p=0;for(t.length&&(t+="/"),c&&(h=1);p<h;p++)for(a=0,c?(i=n,d.push(u(e))):(i=m[p].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,d.push(RegExp.$2&&u(RegExp.$2))),r=i.split(","),l=r.length;a<l;a++)s=r[a],o.push({media:s.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:d.length-1,hasquery:s.indexOf("(")>-1,minw:s.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:s.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});E()},v=function(){var e,t=s.createElement("div"),n=s.body,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=s.createElement("body"),n.style.background="none"),n.appendChild(t),r.insertBefore(n,r.firstChild),e=t.offsetWidth,a?r.removeChild(n):n.removeChild(t),e=i=parseFloat(e)},E=function(e){var t="clientWidth",m=r[t],c="CSS1Compat"===s.compatMode&&m||s.body[t]||m,f={},g=p[p.length-1],y=(new Date).getTime();if(e&&n&&y-n<h)return clearTimeout(a),void(a=setTimeout(E,h));n=y;for(var x in o){var w=o[x],T=w.minw,C=w.maxw,S=null===T,b=null===C,R="em";T&&(T=parseFloat(T)*(T.indexOf(R)>-1?i||v():1)),C&&(C=parseFloat(C)*(C.indexOf(R)>-1?i||v():1)),w.hasquery&&(S&&b||!(S||c>=T)||!(b||c<=C))||(f[w.media]||(f[w.media]=[]),f[w.media].push(d[w.rules]))}for(var x in l)l[x]&&l[x].parentNode===u&&u.removeChild(l[x]);for(var x in f){var M=s.createElement("style"),B=f[x].join("\n");M.type="text/css",M.media=x,u.insertBefore(M,g.nextSibling),M.styleSheet?M.styleSheet.cssText=B:M.appendChild(s.createTextNode(B)),l.push(M)}},w=function(e,t){var n=T();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},T=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();g(),respond.update=g,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);