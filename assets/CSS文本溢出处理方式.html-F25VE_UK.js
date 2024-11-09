import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-iqR_qDjC.js";const i={},t=e(`<h2 id="单行文本溢出省略号效果" tabindex="-1"><a class="header-anchor" href="#单行文本溢出省略号效果" aria-hidden="true">#</a> 单行文本溢出省略号效果</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
  　　overflow<span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  　　white-space<span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  　　text-overflow<span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定-n-行文字溢出省略号效果-以-4-行为例" tabindex="-1"><a class="header-anchor" href="#指定-n-行文字溢出省略号效果-以-4-行为例" aria-hidden="true">#</a> 指定 N 行文字溢出省略号效果（以 4 行为例）</h2><p>因使用了 WebKit 的 CSS 扩展属性，适用于 WebKit 浏览器及移动端</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ellipsis_four</span> <span class="token punctuation">{</span>
  　　display<span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  　　-webkit-line-clamp<span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
  　　-webkit-box-orient<span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  　　overflow<span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip 提示 <code>-webkit-line-clamp</code> 用来限制在一个块元素显示的文本的行数。为了实现该效果，它需要组合其他的 WebKit 属性。</p><p>常见结合属性：</p><p><code>display: -webkit-box</code> 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示</p><p><code>-webkit-box-orient</code> 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 :::</p>`,9),c=[t];function p(o,l){return s(),a("div",null,c)}const r=n(i,[["render",p],["__file","CSS文本溢出处理方式.html.vue"]]);export{r as default};
