import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as a}from"./app-xxrfxtC2.js";const o={},p=a(`<p><code>element-ui </code>中<code> form</code> 中有个清空表单的方法，即假如给表单一个 <code>ref=&#39;form&#39;</code>, 则清空表单的方法为 <code>this.$refs.form.resetFields()</code></p><p>可当在 <code>dialog</code> 组件中用这个方法的时候，这就出现问题了，居然清空不了</p><p>问题的本质是因为你第一次打开 <code>dialog</code> 的时候给表单绑定的 <code>form </code>赋值了，这时候这个 <code>form</code> 的初始值就变成了你所赋的值。 <code>resetFields </code>的时候，会将<code> form</code> 对应的每个值重置到初始值，这时候的初始值就是你第一次打开 <code>dialog</code> 的时候赋的那个值, 而不是在 <code>data</code> 里声明的初始值</p><p>如表单绑定的值为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在你打开 dialog 的时候，你又对它进行赋值,如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>form <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frank&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候 <code>form </code>表单会默认这个新赋的值为初始值</p><p>解决方式是，等 <code>dialog</code> 已经初始化之后再给 <code>form </code>赋值，也就是:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里开始赋值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>xxx <span class="token operator">=</span> xxx
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>this.$refs.xxx.resetFields()</code>会将所有的表单信息清除，如果你只想清除验证消息：<code> this.$refs.xxx.clearValidate()</code></p><p>还有一点需要注意，如果这个表单<code>form</code>此时DOM还未渲染，例如<code>form</code>嵌套在<code>el-dialog</code>中，<strong>第一次</strong>打开<code>dialog</code>时，<code>resetFields()</code>也无法正常调用，须置于<code>nextTick</code>中调用。</p>`,12),c=[p];function t(d,i){return n(),e("div",null,c)}const u=s(o,[["render",t],["__file","element-ui清除表单的奇怪现象.html.vue"]]);export{u as default};
