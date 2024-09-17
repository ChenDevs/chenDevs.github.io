import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,d as a,a as e,e as p}from"./app-vB0LPGoG.js";const r={},i=p(`<h1 id="js-获取和修改-url-参数" tabindex="-1"><a class="header-anchor" href="#js-获取和修改-url-参数" aria-hidden="true">#</a> JS 获取和修改 url 参数</h1><h2 id="获取-url-参数" tabindex="-1"><a class="header-anchor" href="#获取-url-参数" aria-hidden="true">#</a> 获取 url 参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取url里的参数
 * <span class="token keyword">@param</span> <span class="token parameter">arg</span> 参数名
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getURLString</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;(^|&amp;)&#39;</span> <span class="token operator">+</span> arg <span class="token operator">+</span> <span class="token string">&#39;=([^&amp;]*)(&amp;|$)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> r <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">unescape</span><span class="token punctuation">(</span>r<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-url-参数" tabindex="-1"><a class="header-anchor" href="#修改-url-参数" aria-hidden="true">#</a> 修改 url 参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * url地址修改
 * <span class="token keyword">@param</span> <span class="token parameter">url</span> 待修改url
 * <span class="token keyword">@param</span> <span class="token parameter">arg</span> 修改的参数名
 * <span class="token keyword">@param</span> <span class="token parameter">arg_val</span> 修改的具体值
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">changeURLArg</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> arg<span class="token punctuation">,</span> arg_val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> pattern <span class="token operator">=</span> arg <span class="token operator">+</span> <span class="token string">&#39;=([^&amp;]*)&#39;</span>
  <span class="token keyword">var</span> replaceText <span class="token operator">=</span> arg <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> arg_val
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token string">&#39;/(&#39;</span> <span class="token operator">+</span> arg <span class="token operator">+</span> <span class="token string">&#39;=)([^&amp;]*)/gi&#39;</span>
    tmp <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">,</span> replaceText<span class="token punctuation">)</span>
    <span class="token keyword">return</span> tmp
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;[?]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> url <span class="token operator">+</span> <span class="token string">&#39;&amp;&#39;</span> <span class="token operator">+</span> replaceText
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> url <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">+</span> replaceText
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不刷新页面修改-url-参数" tabindex="-1"><a class="header-anchor" href="#不刷新页面修改-url-参数" aria-hidden="true">#</a> 不刷新页面修改 url 参数</h2>`,6),u={href:"https://www.cnblogs.com/wuting/p/8946927.html",target:"_blank",rel:"noopener noreferrer"},d=p('<h2 id="url-的编码和解码" tabindex="-1"><a class="header-anchor" href="#url-的编码和解码" aria-hidden="true">#</a> URL 的编码和解码</h2><p>比如，UTF-8 的操作系统上，<code>http://www.example.com/q=春节</code>这个 URL 之中，汉字“春节”不是 URL 的合法字符，所以被浏览器自动转成<code>http://www.example.com/q=%E6%98%A5%E8%8A%82</code>。其中，“春”转成了<code>%E6%98%A5</code>，“节”转成了<code>%E8%8A%82</code>。这是因为“春”和“节”的 UTF-8 编码分别是<code>E6 98 A5</code>和<code>E8 8A 82</code>，将每个字节前面加上百分号，就构成了 URL 编码。</p><p>JavaScript 提供四个 URL 的编码/解码方法。</p><ul><li><code>encodeURI()</code></li><li><code>encodeURIComponent()</code></li><li><code>decodeURI()</code></li><li><code>decodeURIComponent()</code></li></ul>',4),k={href:"https://xugaoyi.com/pages/bab4930124ad2c10/#_2%E3%80%81url-%E7%9A%84%E7%BC%96%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81",target:"_blank",rel:"noopener noreferrer"};function m(v,h){const s=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",u,[a("https://www.cnblogs.com/wuting/p/8946927.html"),e(s)])]),d,n("p",null,[n("a",k,[a("查看文档"),e(s)])])])}const w=t(r,[["render",m],["__file","90.JS获取和修改url参数.html.vue"]]);export{w as default};
