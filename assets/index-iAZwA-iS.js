import{_ as Se}from"./plugin-vue_export-helper-x3n3nnut.js";import{l as _,m as s,D as ye,p as Z,E as ve,o as C,c as P,ac as A,ab as R,aa as B,f as N,b as ee,N as Te,Q as be}from"./app-4DcLzKWR.js";const Ae=()=>{window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(a){return window.clearTimeout(a)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}()},Me=(a,m)=>{if(a===m)return!0;if(a.length!==m.length)return!1;for(let r=0;r<a.length;++r)if(a[r]!==m[r])return!1;return!0};function te(){Array.isArray||(Array.isArray=function(b){return Object.prototype.toString.call(b)==="[object Array]"});let a,m,r,e,o,u,c=1,l=arguments[0]||{},f=!1,M=arguments.length;if(typeof l=="boolean"&&(f=l,l=arguments[1]||{},c++),typeof l!="object"&&typeof l!="function"&&(l={}),c===M)return l;for(;c<M;c++)if((m=arguments[c])!=null)for(a in m)r=l[a],e=m[a],o=Array.isArray(e),f&&e&&(typeof e=="object"||o)?(o?(o=!1,u=r&&Array.isArray(r)?r:[]):u=r&&typeof r=="object"?r:{},l[a]=te(f,u,e)):e!==void 0&&(l[a]=e);return l}const xe={ref:"wrap",class:"seamless-scroll"},Fe=["innerHTML"],He={__name:"SeamlessScroll",props:{data:{type:Array,default:()=>[]},classOption:{type:Object,default:()=>({})},bodyContainer:Function},emits:["ScrollEnd"],setup(a,{emit:m}){Ae();const r=m;let e=0,o=0,u=0,c=0,l=0,f=0,M=0,b=_(""),h=null,k=null;const d=_(null),x=_(null),p=_(null),Y=a;let X=null,v=null,$=!1,E="ease-in";const L=s(()=>e<0),U=s(()=>Math.abs(e)<f-l),ne=s(()=>L?"":n.switchDisabledClass),ie=s(()=>U?"":n.switchDisabledClass),oe=s(()=>({position:"absolute",margin:`${c/2}px 0 0 -${n.switchOffset}px`,transform:"translate(-100%,-50%)"})),se=s(()=>({position:"absolute",margin:`${c/2}px 0 0 ${l+n.switchOffset}px`,transform:"translateY(-50%)"})),V=s(()=>H?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),re=s(()=>({transform:`translate(${e}px,${o}px)`,transition:`all ${E} ${u}ms`,overflow:"hidden"})),le=s(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),n=s(()=>te({},le,classOption)),W=s(()=>n.navigation),F=()=>W?!1:n.autoPlay,q=s(()=>H?Y.data.length>=n.limitMoveNum:pe()),I=s(()=>n.hoverStop&&F&&q),O=s(()=>n.openTouch),H=s(()=>n.direction>1),Q=s(()=>n.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),z=s(()=>n.singleWidth*Q),D=s(()=>n.singleHeight*Q);s(()=>{let t,i=n.step;return H?t=z:t=D,t>0&&t%i>0&&console.error("如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~"),i});const j=()=>{g(),G()},ae=()=>{if(L){if(Math.abs(e)<n.switchSingleStep){e=0;return}e+=n.switchSingleStep}},ce=()=>{if(U){if(f-l+e<n.switchSingleStep){e=l-f;return}e-=n.switchSingleStep}},g=()=>{cancelAnimationFrame(X||"")},ue=t=>{if(!O)return;const i=t.targetTouches[0],{waitTime:w,singleHeight:T,singleWidth:y}=n;startPos={x:i.pageX,y:i.pageY},startPosY=o,startPosX=e,T&&y?(h&&clearTimeout(h),h=setTimeout(()=>{g()},w+20)):g()},fe=t=>{if(!O||t.targetTouches.length>1||t.scale&&t.scale!==1)return;const i=t.targetTouches[0],{direction:w}=n;endPos={x:i.pageX-startPos.x,y:i.pageY-startPos.y},event.preventDefault();const T=Math.abs(endPos.x)<Math.abs(endPos.y)?1:0;T===1&&w<2?o=startPosY+endPos.y:T===0&&w>1&&(e=startPosX+endPos.x)},me=()=>{if(!O)return;const t=n.direction;if(u=50,t===1)o>0&&(o=0);else if(t===0){let i=realBoxHeight/2*-1;o<i&&(o=i)}else if(t===2)e>0&&(e=0);else if(t===3){let i=f*-1;e<i&&(e=i)}h&&clearTimeout(h),h=setTimeout(()=>{u=0,S()},u)},he=()=>{I&&K()},de=()=>{I&&we()},S=()=>{$||(g(),X=requestAnimationFrame((function(){const t=realBoxHeight/2,i=f/2;let{direction:w,waitTime:T}=n,{step:y}=this;w===1?(Math.abs(o)>=t&&(r("ScrollEnd"),o=0),o-=y):w===0?(o>=0&&(r("ScrollEnd"),o=t*-1),o+=y):w===2?(Math.abs(e)>=i&&(r("ScrollEnd"),e=0),e-=y):w===3&&(e>=0&&(r("ScrollEnd"),e=i*-1),e+=y),v&&clearTimeout(v),D?Math.abs(o)%D<y?v=setTimeout(()=>{S()},T):S():z&&Math.abs(e)%z<y?v=setTimeout(()=>{S()},T):S()}).bind(this)))},G=()=>{be(()=>{const{switchDelay:t}=n;if(J(Y.data),b="",H){c=d==null?void 0:d.offsetHeight,l=d==null?void 0:d.offsetWidth;let i=p==null?void 0:p.offsetWidth;F&&(i=i*2+1),x.style.width=i+"px",f=i}else c=d==null?void 0:d.offsetHeight,p==null||p.offsetHeight;if(F)E="ease-in",u=0;else{E="linear",u=t;return}q?(h&&clearTimeout(h),b=p?p.innerHTML:"",h=setTimeout(()=>{realBoxHeight=x==null?void 0:x.offsetHeight,S()},0)):(g(),o=e=0)})},J=t=>{t.length>100&&console.warn(`数据达到了${t.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`)},we=()=>{$=!1,S()},K=()=>{$=!0,v&&clearTimeout(v),g()},pe=()=>M<c?(g(),o=e=0,!1):!0,ge=()=>{g(),clearTimeout(v)};return ye(()=>{G(),window.onresize=()=>{j()}}),Z(()=>data,t=>{J(newData),Me(t,data)||(k&&clearTimeout(k),k=setTimeout(()=>{j()},1e3*10))}),Z(()=>F,t=>{t?j():K()}),ve(()=>{ge()}),(t,i)=>(C(),P("div",xe,[W.value?(C(),P("div",{key:0,style:A(oe.value),class:R(ne.value),onClick:ae},[B(t.$slots,"left-switch")],6)):N("v-if",!0),W.value?(C(),P("div",{key:1,style:A(se.value),class:R(ie.value),onClick:ce},[B(t.$slots,"right-switch")],6)):N("v-if",!0),ee("div",{ref:"realBox",style:A(re.value),onMouseenter:he,onMouseleave:de,onTouchstart:ue,onTouchmove:fe,onTouchend:me},[ee("div",{ref:"slotList",style:A(V.value)},[B(t.$slots,"default")],4),q.value?(C(),P("div",{key:0,innerHTML:Te(b),style:A(V.value)},null,12,Fe)):N("v-if",!0)],36)],512))}},Pe=Se(He,[["__file","SeamlessScroll.vue"]]);export{Pe as default};
