import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-TnKl6VKN.js";const p={},e=t(`<h3 id="_1-禁用开发者工具" tabindex="-1"><a class="header-anchor" href="#_1-禁用开发者工具" aria-hidden="true">#</a> 1.禁用开发者工具</h3><p>监听是否打开开发者工具，若打开，则直接调用 JavaScript 的 window.close( )方法关闭网页</p><h4 id="_1-监听-f12-按键、监听-ctrl-shift-i-windows-系统-组合键、监听右键菜单-监听-ctrl-s-禁止保存至本地-避免被-overrides。" tabindex="-1"><a class="header-anchor" href="#_1-监听-f12-按键、监听-ctrl-shift-i-windows-系统-组合键、监听右键菜单-监听-ctrl-s-禁止保存至本地-避免被-overrides。" aria-hidden="true">#</a> ① 监听 F12 按键、监听 Ctrl+Shift+I（Windows 系统）组合键、监听右键菜单，监听 Ctrl+s 禁止保存至本地，避免被 Overrides。</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//监听F12、Ctrl+Shift+i、Ctrl+s</span>
  document<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;F12&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>ctrlKey <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>shiftKey <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//此处I必须大写</span>
      window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>ctrlKey <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//此处s必须小写</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//监听右键菜单</span>
  document<span class="token punctuation">.</span><span class="token function-variable function">oncontextmenu</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-监听窗口大小变化" tabindex="-1"><a class="header-anchor" href="#_2-监听窗口大小变化" aria-hidden="true">#</a> ② 监听窗口大小变化</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
    w <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth
  window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!==</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> w <span class="token operator">!==</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-利用-console-log" tabindex="-1"><a class="header-anchor" href="#_3-利用-console-log" aria-hidden="true">#</a> ③ 利用 Console.log</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//控制台打开的时候回调方法</span>
  <span class="token keyword">function</span> <span class="token function">consoleOpenCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//立即运行函数，用来检测控制台是否打开</span>
  <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个对象</span>
    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.</span><span class="token regex-delimiter">/</span></span>
    <span class="token comment">// 将其打印到控制台上，实际上是一个指针</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
    <span class="token comment">// 要在第一次打印完之后再重写toString方法</span>
    foo<span class="token punctuation">.</span>toString <span class="token operator">=</span> consoleOpenCallback
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-无限-debugger-反调试" tabindex="-1"><a class="header-anchor" href="#_2-无限-debugger-反调试" aria-hidden="true">#</a> 2 无限 debugger 反调试</h3><h4 id="_1-constructor" tabindex="-1"><a class="header-anchor" href="#_1-constructor" aria-hidden="true">#</a> ① constructor</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">consoleOpenCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;about:blank&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token string">&#39;debugger&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// debugger;</span>
    <span class="token keyword">const</span> after <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cost <span class="token operator">=</span> after<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> before<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cost <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">consoleOpenCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-function" tabindex="-1"><a class="header-anchor" href="#_2-function" aria-hidden="true">#</a> ② Function</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">Function</span><span class="token punctuation">(</span><span class="token string">&#39;Function(arguments[0]+&quot;&#39;</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">&#39;&quot;)()&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;bugger&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;de&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// Function(&#39;debugger&#39;)();</span>

    <span class="token comment">// debugger;</span>
    <span class="token keyword">const</span> after <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cost <span class="token operator">=</span> after<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> before<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cost <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">consoleOpenCallback2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-反反调试手段" tabindex="-1"><a class="header-anchor" href="#_3-反反调试手段" aria-hidden="true">#</a> 3.反反调试手段</h3><h4 id="_1-禁用开发者工具-1" tabindex="-1"><a class="header-anchor" href="#_1-禁用开发者工具-1" aria-hidden="true">#</a> ① 禁用开发者工具</h4><p>针对判断是否打开开发者工具的破解方式很简单，只需两步就可以搞定。</p><p>① 将开发者工具以独立窗口形式打开</p><p>② 打开开发者工具后再打开网址</p><h4 id="_2-无限-debugger" tabindex="-1"><a class="header-anchor" href="#_2-无限-debugger" aria-hidden="true">#</a> ② 无限 debugger</h4><p>针对无限 debugger 反调试，有以下破解方法</p><p>① 直接使用 dubbger 指令的，可以在 Chrome 找到对应行（格式化后），右键行号，选择 Never pause here 即可。</p><p>② 使用了 constructor 构造 debugger 的，只需在 console 中输入以下代码后，点击 F8（Resume script execution）回复 js 代码执行即可（直接点击小的蓝色放行按钮即可）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">constructor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>③ 使用了 Function 构造 debugger 的，只需在 console 中输入以下代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">Function</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h3><p>JavaScript 混淆加密使得代码更难以被反编译和分析，从而提高了代码的安全性，攻击者需要花费更多的时间和精力才能理解和分析代码，从而降低了攻击者入侵的成功率，但它并不能完全保护代码不被反编译和分析，如果攻击者有足够的时间和资源，他们仍然可以理解代码并找到其中的漏洞，道高一尺，魔高一丈，任何客户端加密混淆都会被破解，只要用心都能解决，我们能做的就是拖延被破解的时间，所以尽量避免在前端代码中嵌入敏感信息或业务逻辑。</p>`,27),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","防调试手段.html.vue"]]);export{k as default};
