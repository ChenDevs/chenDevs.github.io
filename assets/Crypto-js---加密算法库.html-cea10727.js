import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as t}from"./app-b1d14657.js";const p={},e=t(`<h4 id="md5-加密" tabindex="-1"><a class="header-anchor" href="#md5-加密" aria-hidden="true">#</a> MD5 加密：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> hash <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">MD5</span><span class="token punctuation">(</span><span class="token string">&quot;Message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sha1-加密" tabindex="-1"><a class="header-anchor" href="#sha1-加密" aria-hidden="true">#</a> SHA1 加密</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha1.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> hash <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">SHA1</span><span class="token punctuation">(</span><span class="token string">&quot;Message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sha2-加密" tabindex="-1"><a class="header-anchor" href="#sha2-加密" aria-hidden="true">#</a> SHA2 加密</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> hash <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">SHA256</span><span class="token punctuation">(</span><span class="token string">&quot;Message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="progressive-hashing" tabindex="-1"><a class="header-anchor" href="#progressive-hashing" aria-hidden="true">#</a> Progressive Hashing</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">var</span> sha256 <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>algo<span class="token punctuation">.</span><span class="token constant">SHA256</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    sha256<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;Message Part 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sha256<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;Message Part 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sha256<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;Message Part 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> hash <span class="token operator">=</span> sha256<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(r,l){return a(),n("div",null,o)}const d=s(p,[["render",c],["__file","Crypto-js---加密算法库.html.vue"]]);export{d as default};
