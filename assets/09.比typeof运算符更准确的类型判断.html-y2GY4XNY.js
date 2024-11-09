import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-iqR_qDjC.js";const p={},e=t(`<h1 id="比-typeof-运算符更准确的类型判断" tabindex="-1"><a class="header-anchor" href="#比-typeof-运算符更准确的类型判断" aria-hidden="true">#</a> 比 typeof 运算符更准确的类型判断</h1><p>不同数据类型的<code>Object.prototype.toString</code>方法返回值如下。</p><ul><li>数值：返回<code>[object Number]</code>。</li><li>字符串：返回<code>[object String]</code>。</li><li>布尔值：返回<code>[object Boolean]</code>。</li><li>undefined：返回<code>[object Undefined]</code>。</li><li>null：返回<code>[object Null]</code>。</li><li>数组：返回<code>[object Array]</code>。</li><li>arguments 对象：返回<code>[object Arguments]</code>。</li><li>函数：返回<code>[object Function]</code>。</li><li>Error 对象：返回<code>[object Error]</code>。</li><li>Date 对象：返回<code>[object Date]</code>。</li><li>RegExp 对象：返回<code>[object RegExp]</code>。</li><li>其他对象：返回<code>[object Object]</code>。</li></ul><p>这就是说，<code>Object.prototype.toString</code>可以看出一个值到底是什么类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Math]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Array]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个特性，可以写出一个比<code>typeof</code>运算符更准确的类型判断函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;array&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;null&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abcd</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// &quot;regex&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;date&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个<code>type</code>函数的基础上，还可以加上专门判断某种类型数据的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">;</span><span class="token punctuation">[</span>
  <span class="token string">&#39;Null&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Undefined&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Object&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Array&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Function&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;RegExp&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">[</span><span class="token string">&#39;is&#39;</span> <span class="token operator">+</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">type</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> t<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","09.比typeof运算符更准确的类型判断.html.vue"]]);export{r as default};
