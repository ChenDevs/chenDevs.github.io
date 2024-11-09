import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-iqR_qDjC.js";const p={},e=t(`<h1 id="mergeconfig-模块单元测试" tabindex="-1"><a class="header-anchor" href="#mergeconfig-模块单元测试" aria-hidden="true">#</a> mergeConfig 模块单元测试</h1><p>合并配置是 <code>ts-axios</code> 核心流程中非常重要的一个环节，我们需要为它的各种情况去编写测试。</p><h2 id="测试代码编写" tabindex="-1"><a class="header-anchor" href="#测试代码编写" aria-hidden="true">#</a> 测试代码编写</h2><p><code>test/mergeConfig.spec.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> mergeConfig <span class="token keyword">from</span> <span class="token string">&#39;../src/core/mergeConfig&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;mergeConfig&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> defaults <span class="token operator">=</span> axios<span class="token punctuation">.</span>defaults

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should accept undefined for second argument&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should accept an object for second argument&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should not leave references&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should allow setting request options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;__sample url__&#39;</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token string">&#39;__sample params__&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should not inherit request options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localDefaults <span class="token operator">=</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;__sample url__&#39;</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token string">&#39;__sample params__&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>localDefaults<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should return default headers if pass config2 with undefined&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token string">&#39;x-mock-header&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">undefined</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      headers<span class="token operator">:</span> <span class="token string">&#39;x-mock-header&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should merge auth, headers with defaults&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          auth<span class="token operator">:</span> <span class="token punctuation">{</span>
            username<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      auth<span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should overwrite auth, headers with a non-object value&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token function">mergeConfig</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token punctuation">{</span>
            common<span class="token operator">:</span> <span class="token punctuation">{</span>
              Accept<span class="token operator">:</span> <span class="token string">&#39;application/json, text/plain, */*&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          headers<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      headers<span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should allow setting other options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> merged <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      timeout<span class="token operator">:</span> <span class="token number">123</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行测试后我们发现 <code>mergeConfig.ts</code> 文件的分支覆盖率并未达到 100%，提示是 23 行，打开文件后发现最后一个 <code>else</code> 逻辑并未走到，也就是 <code>val1</code> 为 <code>undefined</code> 的情况。但实际上即使 <code>val1</code> 为 <code>undefined</code>，我们也是返回 <code>undefined</code>，也就是返回 <code>val1</code>，所以这块代码的逻辑可以优化。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deepMergeStrat</span><span class="token punctuation">(</span>val1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> val2<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val2 <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 个分支可以合并到一个分支，这样我们再次跑测试，分支覆盖率就可以达到 100% 了。</p><p>至此我们完成了 <code>ts-axios</code> 库对 <code>mergeConfig</code> 模块的测试，下一节课我们来测试取消模块相关代码。</p>`,9),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","08.mergeConfig 模块单元测试.html.vue"]]);export{r as default};
