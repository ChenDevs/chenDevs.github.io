import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as o,b as e,d as n,a as d,e as r}from"./app-TnKl6VKN.js";const l={},p=r(`<p>当 <code>&lt;style&gt;</code> 标签有 <code>scoped</code> 属性时，它的 CSS 只作用于当前组件中的元素，父组件的样式将不会渗透到子组件。 如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用深度选择器。</p><p>使用较多的场景是去定制 elementUI 等组件库的样式</p><h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h2><p>像<code>/deep/</code>，<code>&gt;&gt;&gt;</code>，<code>::v-deep</code>已被弃用，下面这种方式 vue2，vue3 均可使用：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:deep(.title)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i={href:"https://juejin.cn/post/6978781674070884366",target:"_blank",rel:"noopener noreferrer"};function u(_,v){const s=c("ExternalLinkIcon");return t(),o("div",null,[p,e("p",null,[n("参考："),e("a",i,[n("vue 中的 css 深度选择器"),d(s)])])])}const k=a(l,[["render",u],["__file","vue2中的css深度选择器.html.vue"]]);export{k as default};
