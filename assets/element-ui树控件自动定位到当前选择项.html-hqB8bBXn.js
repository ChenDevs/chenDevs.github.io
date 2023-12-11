import{_ as a,r as d,o as l,c,b as e,d as o,a as t,e as s}from"./app-c17MCxSj.js";const h={},_=e("h2",{id:"需求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需求","aria-hidden":"true"},"#"),o(" 需求")],-1),p=e("p",null,"做业务遇到了需要在树空间中回显示当前操作的的数据项，因为树空间的高度有限，如果当前选择项是比较靠后的，就无法出现在树的滚动视窗范围之内。",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"scrollIntoView() ",-1),g=e("h2",{id:"具体思路",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#具体思路","aria-hidden":"true"},"#"),o(" 具体思路")],-1),b=e("p",null,"那么现在我们只需要知道当前选择项是哪一个 DOM 元素，接着调用这个方法就好，省去了繁琐的高度计算环节。",-1),k=e("p",null,"因为树中的每个数据项都有一个独一无二的 id，所以我们可以使用自定义节点，给每个数据项加上以数据项中的 id 为值的 ID 属性，这样我们通过当前选择项的 id 就可以获得当前对应的 DO M 元素。",-1),x=e("h2",{id:"实现-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实现-demo","aria-hidden":"true"},"#"),o(" 实现 demo")],-1),I=s('<h2 id="总结一下" tabindex="-1"><a class="header-anchor" href="#总结一下" aria-hidden="true">#</a> 总结一下</h2><p><code>clientWidth</code>，<code>offsetWidth</code>，<code>scrollWidth</code> 这几个概念自己有时候还是会弄混，所以在此总结一下。</p><ul><li><code>scrollWidth</code>包括元素的宽度（width），内边距（padding），但不包括边框（border）、外边距（margin）和垂直滚动条</li><li><code>clientWidth </code>包括元素的宽度（width），内边距（padding），但不包括边框（border）、外边距（margin）和垂直滚动条</li><li><code>offsetWidth </code>对象整体的实际宽度，包含滚动条，会随对象显示大小的变化而改变。</li></ul>',3),W={class:"hint-container tip"},V=e("p",{class:"hint-container-title"},"说明",-1),v={href:"https://blog.csdn.net/qq_14993591/article/details/125223004",target:"_blank",rel:"noopener noreferrer"};function w(r,E){const n=d("ExternalLinkIcon"),i=d("CodePen");return l(),c("div",null,[_,p,e("p",null,[o("所以就要在树展示的时候自动滚动到当前的选择项，好在"),e("a",m,[o("Element"),t(n)]),o(" 接口提供了这样一个 "),e("a",f,[o("scrollIntoView()"),t(n)]),o("方法,该方法会滚动元素的父容器，使被调用 "),u,o("的元素对用户可见。")]),g,b,k,x,t(i,{link:"https://codepen.io/zhangfanhang/pen/eYMwpBg",theme:r.$isDarkMode?"dark":"light"},null,8,["theme"]),I,e("div",W,[V,e("p",null,[o("方法来自"),e("a",v,[o("[element-ui] el-tree 滚动到指定选中的位置"),t(n)])])])])}const z=a(h,[["render",w],["__file","element-ui树控件自动定位到当前选择项.html.vue"]]);export{z as default};
