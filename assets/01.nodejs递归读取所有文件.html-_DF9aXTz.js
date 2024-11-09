import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-8KNOzAlN.js";const p={},e=t(`<h1 id="nodejs-递归读取所有文件" tabindex="-1"><a class="header-anchor" href="#nodejs-递归读取所有文件" aria-hidden="true">#</a> nodejs 递归读取所有文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">readFileList</span><span class="token punctuation">(</span><span class="token parameter">dir<span class="token punctuation">,</span> filesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
  files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fullPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
    <span class="token keyword">const</span> stat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">readFileList</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">,</span> filesList<span class="token punctuation">)</span> <span class="token comment">//递归读取文件</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      filesList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> filesList
<span class="token punctuation">}</span>

<span class="token keyword">var</span> filesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token function">readFileList</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> filesList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01.nodejs递归读取所有文件.html.vue"]]);export{r as default};
