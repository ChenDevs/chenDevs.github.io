import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-8KNOzAlN.js";const t={},o=e(`<p>最近开发的项目中有个需要是系统配置修改了<code>logo</code>，要同步到<code>favicon</code>。</p><p>直接上代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> localStorage<span class="token punctuation">.</span>logoimageUrl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他的逻辑根据业务的实际去写。</p>`,4),c=[o];function p(i,l){return a(),s("div",null,c)}const _=n(t,[["render",p],["__file","动态修改favicon网站图标地址.html.vue"]]);export{_ as default};
