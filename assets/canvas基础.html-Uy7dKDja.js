import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-qa6sU7xA.js";const e={},p=t(`<p>:::tip 参考</p><figure><img src="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" alt="MDN" tabindex="0" loading="lazy"><figcaption>MDN</figcaption></figure><figure><img src="https://www.imooc.com/learn/133" alt="慕课网:炫丽的倒计时效果 Canvas 绘图与动画基础" tabindex="0" loading="lazy"><figcaption>慕课网:炫丽的倒计时效果 Canvas 绘图与动画基础</figcaption></figure><p>:::</p><h2 id="创建-canvas" tabindex="-1"><a class="header-anchor" href="#创建-canvas" aria-hidden="true">#</a> 创建 canvas</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tutorial<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1050<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>724<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 DOM 指定宽度高度</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;tutorial&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;1050&#39;</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;724&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渲染上下文" tabindex="-1"><a class="header-anchor" href="#渲染上下文" aria-hidden="true">#</a> 渲染上下文</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;tutorial&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Canvas 公开了一个或多个<strong>渲染上下文</strong>，其可以用来绘制和处理要展示的内容。<strong>我们将会将注意力放在 2D 渲染上下文中</strong>。js 要找到渲染上下文，然后在它的上面绘制。<code>getContext</code>是用来获得渲染上下文和它的绘画功能。</p><h3 id="检查支持性" tabindex="-1"><a class="header-anchor" href="#检查支持性" aria-hidden="true">#</a> 检查支持性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用context绘制</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 提示不支持canvas</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(e,[["render",o],["__file","canvas基础.html.vue"]]);export{d as default};
