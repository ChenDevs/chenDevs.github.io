import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-Efa2_n6B.js";const p={},t=e(`<h1 id="兄弟组件传值" tabindex="-1"><a class="header-anchor" href="#兄弟组件传值" aria-hidden="true">#</a> 兄弟组件传值</h1><p>子组件 1 中把值传到父组件,父组件获取值传入子组件 2</p><p>父组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>子组件<span class="token number">1</span> @方法名x<span class="token operator">=</span><span class="token string">&quot;方法名y&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>子组件<span class="token number">1</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>子组件<span class="token number">2</span> <span class="token operator">:</span>值名称x<span class="token operator">=</span><span class="token string">&quot;值x&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>子组件<span class="token number">2</span> <span class="token operator">&gt;</span>

<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
	 <span class="token literal-property property">值x</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token function">方法名y</span><span class="token punctuation">(</span><span class="token parameter">值</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>值x <span class="token operator">=</span> 值
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件 1：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;方法名x&#39;</span><span class="token punctuation">,</span> 值<span class="token punctuation">)</span> <span class="token comment">// 传出值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件 2：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">值名称x</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 接收父组件传入值</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[t];function c(l,i){return n(),a("div",null,o)}const d=s(p,[["render",c],["__file","60.兄弟组件传值.html.vue"]]);export{d as default};
