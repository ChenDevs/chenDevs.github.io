import{h as rt,i as Xt,j as Yt,k as S}from"./app-a5c32edc.js";function z(){return z=Object.assign||function(v){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(v[r]=a[r])}return v},z.apply(this,arguments)}var L=function(o,a){return o.querySelector(a)},$t=function(o,a){return o.querySelectorAll(a)},bt=function(o){o===void 0&&(o={});var a={};return Object.keys(o).forEach(function(r){typeof o[r]<"u"&&(a[r]=o[r])}),a};function Tt(v){v===void 0&&(v={});var o=v,a=o.el,r=o.eventsEl,p={__atropos__:!0,params:z({alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0,onEnter:null,onLeave:null,onRotate:null},bt(v||{})),destroyed:!1,isActive:!1},e=p.params,y,x,I,M,X,f,i,d,Y,J,O=[],K,nt=function s(){K=requestAnimationFrame(function(){O.forEach(function(t){if(typeof t=="function")t();else{var n=t.element,u=t.prop,c=t.value;n.style[u]=c}}),O.splice(0,O.length),s()})};nt();var $=function(t,n){O.push({element:t,prop:"transitionDuration",value:n})},b=function(t,n){O.push({element:t,prop:"transitionTimingFunction",value:n})},w=function(t,n){O.push({element:t,prop:"transform",value:n})},_=function(t,n){O.push({element:t,prop:"opacity",value:n})},ot=function(t,n){O.push({element:t,prop:"transformOrigin",value:n})},P=function(t,n,u,c){return t.addEventListener(n,u,c)},A=function(t,n,u,c){return t.removeEventListener(n,u,c)},it=function(){var t;f=L(a,".atropos-shadow"),f||(f=document.createElement("span"),f.classList.add("atropos-shadow"),t=!0),w(f,"translate3d(0,0,-"+e.shadowOffset+"px) scale("+e.shadowScale+")"),t&&y.appendChild(f)},st=function(){var t;i=L(a,".atropos-highlight"),i||(i=document.createElement("span"),i.classList.add("atropos-highlight"),t=!0),w(i,"translate3d(0,0,0)"),t&&I.appendChild(i)},Z=function(t){var n=t.rotateXPercentage,u=n===void 0?0:n,c=t.rotateYPercentage,l=c===void 0?0:c,h=t.duration,E=t.opacityOnly,C=t.easeOut,N=function(g){if(g.dataset.atroposOpacity&&typeof g.dataset.atroposOpacity=="string")return g.dataset.atroposOpacity.split(";").map(function(T){return parseFloat(T)})};$t(a,"[data-atropos-offset], [data-atropos-opacity]").forEach(function(m){$(m,h),b(m,C?"ease-out":"");var g=N(m);if(u===0&&l===0)E||w(m,"translate3d(0, 0, 0)"),g&&_(m,g[0]);else{var T=parseFloat(m.dataset.atroposOffset)/100;if(!Number.isNaN(T)&&!E&&w(m,"translate3d("+-l*-T+"%, "+u*-T+"%, 0)"),g){var j=g[0],H=g[1],Q=Math.max(Math.abs(u),Math.abs(l));_(m,j+(H-j)*Q/100)}}})},U=function(t,n){var u=a!==r;if(M||(M=a.getBoundingClientRect()),u&&!X&&(X=r.getBoundingClientRect()),typeof t>"u"&&typeof n>"u"){var c=u?X:M;t=c.left+c.width/2,n=c.top+c.height/2}var l=0,h=0,E=M,C=E.top,N=E.left,m=E.width,g=E.height,T;if(u){var q=X,et=q.top,at=q.left,pt=q.width,dt=q.height,vt=N-at,ht=C-et,mt=m/2+vt,gt=g/2+ht,yt=t-at,Mt=n-et;h=e.rotateYMax*(yt-mt)/(pt-m/2)*-1,l=e.rotateXMax*(Mt-gt)/(dt-g/2),T=t-N+"px "+(n-C)+"px"}else{var j=m/2,H=g/2,Q=t-N,lt=n-C;h=e.rotateYMax*(Q-j)/(m/2)*-1,l=e.rotateXMax*(lt-H)/(g/2)}l=Math.min(Math.max(-l,-e.rotateXMax),e.rotateXMax),e.rotateXInvert&&(l=-l),h=Math.min(Math.max(-h,-e.rotateYMax),e.rotateYMax),e.rotateYInvert&&(h=-h);var B=l/e.rotateXMax*100,D=h/e.rotateYMax*100,Ot=(u?D/100*e.stretchX:0)*(e.rotateYInvert?-1:1),wt=(u?B/100*e.stretchY:0)*(e.rotateXInvert?-1:1),xt=u?Math.max(Math.abs(B),Math.abs(D))/100*e.stretchZ:0;w(y,"translate3d("+Ot+"%, "+-wt+"%, "+-xt+"px) rotateX("+l+"deg) rotateY("+h+"deg)"),T&&e.commonOrigin&&ot(y,T),i&&($(i,e.duration+"ms"),b(i,"ease-out"),w(i,"translate3d("+-D*.25+"%, "+B*.25+"%, 0)"),_(i,Math.max(Math.abs(B),Math.abs(D))/100)),Z({rotateXPercentage:B,rotateYPercentage:D,duration:e.duration+"ms",easeOut:!0}),typeof e.onRotate=="function"&&e.onRotate(l,h)},V=function(){O.push(function(){return a.classList.add("atropos-active")}),$(y,e.duration+"ms"),b(y,"ease-out"),w(x,"translate3d(0,0, "+e.activeOffset+"px)"),$(x,e.duration+"ms"),b(x,"ease-out"),f&&($(f,e.duration+"ms"),b(f,"ease-out")),p.isActive=!0},F=function(t){if(d=void 0,!(t.type==="pointerdown"&&t.pointerType==="mouse")&&!(t.type==="pointerenter"&&t.pointerType!=="mouse")){if(t.type==="pointerdown"&&t.preventDefault(),Y=t.clientX,J=t.clientY,e.alwaysActive){M=void 0,X=void 0;return}V(),typeof e.onEnter=="function"&&e.onEnter()}},W=function(t){d===!1&&t.cancelable&&t.preventDefault()},k=function(t){if(!(!e.rotate||!p.isActive)){if(t.pointerType!=="mouse"){if(!e.rotateTouch)return;t.preventDefault()}var n=t.clientX,u=t.clientY,c=n-Y,l=u-J;if(typeof e.rotateTouch=="string"&&(c!==0||l!==0)&&typeof d>"u"){if(c*c+l*l>=25){var h=Math.atan2(Math.abs(l),Math.abs(c))*180/Math.PI;d=e.rotateTouch==="scroll-y"?h>45:90-h>45}d===!1&&(a.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}t.pointerType!=="mouse"&&d||U(n,u)}},R=function(t){if(M=void 0,X=void 0,!!p.isActive&&!(t&&t.type==="pointerup"&&t.pointerType==="mouse")&&!(t&&t.type==="pointerleave"&&t.pointerType!=="mouse")){if(typeof e.rotateTouch=="string"&&d&&a.classList.remove("atropos-rotate-touch"),e.alwaysActive){U(),typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave();return}O.push(function(){return a.classList.remove("atropos-active")}),$(x,e.duration+"ms"),b(x,""),w(x,"translate3d(0,0, 0px)"),f&&($(f,e.duration+"ms"),b(f,"")),i&&($(i,e.duration+"ms"),b(i,""),w(i,"translate3d(0, 0, 0)"),_(i,0)),$(y,e.duration+"ms"),b(y,""),w(y,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),Z({duration:e.duration+"ms"}),p.isActive=!1,typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave()}},tt=function(t){var n=t.target;!r.contains(n)&&n!==r&&p.isActive&&R()},ut=function(){typeof a=="string"&&(a=L(document,a)),a&&(a.__atropos__||(typeof r<"u"?typeof r=="string"&&(r=L(document,r)):r=a,Object.assign(p,{el:a}),y=L(a,".atropos-rotate"),x=L(a,".atropos-scale"),I=L(a,".atropos-inner"),a.__atropos__=p))},ft=function(){ut(),!(!a||!r)&&(e.shadow&&it(),e.highlight&&st(),e.rotateTouch&&(typeof e.rotateTouch=="string"?a.classList.add("atropos-rotate-touch-"+e.rotateTouch):a.classList.add("atropos-rotate-touch")),L(a,"[data-atropos-opacity]")&&Z({opacityOnly:!0}),P(document,"click",tt),P(r,"pointerdown",F),P(r,"pointerenter",F),P(r,"pointermove",k),P(r,"touchmove",W),P(r,"pointerleave",R),P(r,"pointerup",R),P(r,"lostpointercapture",R),e.alwaysActive&&(V(),U()))},ct=function(){p.destroyed=!0,cancelAnimationFrame(K),A(document,"click",tt),A(r,"pointerdown",F),A(r,"pointerenter",F),A(r,"pointermove",k),A(r,"touchmove",W),A(r,"pointerleave",R),A(r,"pointerup",R),A(r,"lostpointercapture",R),delete a.__atropos__};return p.destroy=ct,ft(),p}function G(){return G=Object.assign||function(v){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(v[r]=a[r])}return v},G.apply(this,arguments)}var At={props:{component:{type:String,default:"div"},innerClass:String,scaleClass:String,rotateClass:String,eventsEl:{type:[String,Object],default:void 0},alwaysActive:{type:Boolean,default:!1},activeOffset:{type:Number,default:void 0},shadowOffset:{type:Number,default:void 0},shadowScale:{type:Number,default:void 0},duration:{type:Number,default:void 0},rotate:{type:Boolean,default:void 0},rotateTouch:{type:Boolean,default:void 0},rotateXMax:{type:Number,default:void 0},rotateYMax:{type:Number,default:void 0},rotateXInvert:{type:Boolean,default:void 0},rotateYInvert:{type:Boolean,default:void 0},stretchX:{type:Number,default:void 0},stretchY:{type:Number,default:void 0},stretchZ:{type:Number,default:void 0},commonOrigin:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},emits:["enter","leave","rotate"],setup:function(o,a){var r=rt(null),p=rt(null),e=a.slots,y=a.emit,x=function(){p.value=Tt(G({el:r.value},o,{onEnter:function(){y("enter")},onLeave:function(){y("leave")},onRotate:function(){for(var i=arguments.length,d=new Array(i),Y=0;Y<i;Y++)d[Y]=arguments[Y];y.apply(void 0,["rotate"].concat(d))}}))},I=function(){p.value&&(p.value.destroy(),p.value=null)};Xt(function(){x()}),Yt(function(){I()});var M=function(){for(var f=arguments.length,i=new Array(f),d=0;d<f;d++)i[d]=arguments[d];return i.filter(function(Y){return!!Y}).join(" ")};return function(){return S(o.component,{class:"atropos",ref:r},[S("span",{class:M("atropos-scale",o.scaleClass)},[S("span",{class:M("atropos-rotate",o.rotateClass)},[S("span",{class:M("atropos-inner",o.innerClass)},[e.default&&e.default(),o.highlight&&S("span",{class:"atropos-highlight"})]),e.rotate&&e.rotate(),o.shadow&&S("span",{class:"atropos-shadow"})]),e.scale&&e.scale()]),e.root&&e.root()])}}};export{At as A};
