import _ from"./DemoVirtualScrollListItem-G_sINJGL.js";import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{l as n,D as f,r as v,o as g,c as h,a as x,ad as S,N as l,ac as y}from"./app-EWfIkEXe.js";const D={__name:"DemoVirtualScrollList",setup(N){n({region:""});let a=n([]),i={},r={minWidth:"120px",height:"360px",maxHeight:"360px",overflowY:"auto"};f(()=>{c()});const c=()=>{for(let e=0;e<1e5;e++){const t={label:p(4),value:e};a.value.push(t)}},u=(e,t)=>Math.floor(Math.random()*(e-t)+t),m=e=>(e="\\u"+e,e=e.replace(/\\/g,"%"),e=unescape(e),e=e.replace(/%/g,"\\"),e),p=e=>{let t="";for(let o=0;o<e;o++){let s="";s=u(19968,40869).toString(16),t+=m(s)}return t};return(e,t)=>{const o=v("virtual-scroll-list");return g(),h("div",{class:"scroll-list",style:y(l(r))},[x(o,S({"data-key":"value","data-sources":l(a),"data-component":_,style:l(r),"estimate-size":32},l(i)),null,16,["data-sources","style"])],4)}}},M=d(D,[["__file","DemoVirtualScrollList.vue"]]);export{M as default};
