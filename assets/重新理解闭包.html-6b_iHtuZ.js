import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-VW7Ts50p.js";const o={},t=e(`<p><code>闭包</code>确实很难理解，之前我是这样理解的：</p><p><strong>闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。</strong></p><p>再后来看到这样一段话：</p><p>在函数中被使用，但它既不是函数参数、也不是函数的局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说，就是一个<code>自由变量</code>。而<strong>引用了自由变量的函数，就叫闭包</strong>。</p><p>比如说：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> fuN <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fuN</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，这样就形成了一个闭包。a 既不是函数的参数，也不是函数的局部变量，对于该函数来说 a 就是一个自由变量，这个函数就是<code>闭包</code></p><p><code>闭包</code>使已经运行结束的函数上下文中的<strong>变量对象</strong>(<code>每个上下文都有一个关联的变量对象，而这个上下文中定义的所有变量和函数都存在于这个对象上</code>)继续留在内存中，因为闭包函数保留了这个变量对象的引用，<strong>所以这个变量对象不会被回收</strong>。</p><p>所以我们在调用完<code>fun()</code>函数之后，调用<code>fuN()</code>，依然可以打印出 a 的值</p>`,9),p=[t];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","重新理解闭包.html.vue"]]);export{r as default};
