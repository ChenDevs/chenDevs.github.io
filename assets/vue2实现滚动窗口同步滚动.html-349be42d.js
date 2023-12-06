import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as n,a as r,b as e,d as o,e as _}from"./app-b1d14657.js";const a={},p=e("p",null,[o("项目开发中，遇到一个比较两个表单差异的需求，但当"),e("code",null,"item"),o("过多就需要滚动条，这里就用到了滚动条同步的地方。")],-1),i=e("p",null,"这是实现效果：",-1),m=_("<p>虽然<code>demo</code>中是表格但是实现起来是一样的，其实主要是通过<code>ref</code>属性来操控两个<code>div</code>的<code>scrollTop</code>属性</p><p>因为对两个 div 都添加了<code>scroll</code>方法，一个区域滚动会改变另外一个区域的<code>scrollTop</code>,但是同时触发了另外一个区域自己的<code>scroll</code>方法，又会进行改变，这样就形成了两个<code>scroll</code>的无限回调。</p><p>解决思路：大致思路是添加一个<code>flag</code>属性，两个 scroll 事件分别传入不同的值，再根据这个值去判断是否设置<code>scrollTop</code>属性，这样就不会造成无线回调,这里的<code>flag</code>属性需要在<code>scroll</code>事件之前传入，所以这里通过<code>mouserover</code>事件传入该属性。</p><p>还要注意的是如果直接给<code>el</code>组件绑定原生时间需要加<code>native</code>修饰符。</p>",4);function f(c,h){const d=t("CodePen");return s(),n("div",null,[p,i,r(d,{link:"https://codepen.io/zhangfanhang/pen/KKRdZJj",theme:c.$isDarkMode?"dark":"light"},null,8,["theme"]),m])}const g=l(a,[["render",f],["__file","vue2实现滚动窗口同步滚动.html.vue"]]);export{g as default};
