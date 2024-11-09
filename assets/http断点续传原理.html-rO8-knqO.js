import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-8KNOzAlN.js";const e={},p=t(`<h2 id="http-请求头-range" tabindex="-1"><a class="header-anchor" href="#http-请求头-range" aria-hidden="true">#</a> HTTP 请求头 <code>Range</code></h2><p>所谓断点续传，也就是要从文件已经下载的地方开始继续下载。在以前版本的 HTTP 协议是不支持断点的，HTTP/1.1 开始就支持了。一般断点下载时才用到 Range 和 Content-Range 实体头。</p><p><strong>Range</strong></p><p>用于请求头中，指定第一个字节的位置和最后一个字节的位置，一般格式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">Range</span><span class="token operator">:</span><span class="token punctuation">(</span>unit<span class="token operator">=</span>first byte pos<span class="token punctuation">)</span><span class="token operator">-</span>\\<span class="token punctuation">[</span>last byte pos\\<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Content-Range</strong></p><p>用于响应头，指定整个实体中的一部分的插入位置，他也指示了整个实体的长度。在服务器向客户返回一个部分响应，它必须描述响应覆盖的范围和整个实体长度。一般格式：</p><p>Content-Range: bytes (unit first byte pos) - [last byte pos]/[entity legth]</p><p><strong>请求下载整个文件:</strong></p><ol><li>GET  /test.rar  HTTP/1.1</li><li>Connection:  close</li><li>Host:  116.1.219.219</li><li>Range:  bytes=0-801 //一般请求下载整个文件是 bytes=0- 或不用这个头</li></ol><p><strong>一般正常回应</strong></p><ol><li>HTTP/1.1 200 OK</li><li>Content-Length:  801</li><li>Content-Type:  application/octet-stream</li><li>Content-Range:  bytes  0-800/801 //801:文件总大小</li></ol><h2 id="node-静态服务器断点续传实现" tabindex="-1"><a class="header-anchor" href="#node-静态服务器断点续传实现" aria-hidden="true">#</a> node 静态服务器断点续传实现</h2><blockquote><p>当用户从静态文件服务器上获取诸如歌曲这样的流媒体文件时，如果网络连接断开，重连后未做处理，就需要重新下载这个文件。所以为了避免这种情况，我们的服务器需要一种断点续传的功能。而 http 1.1 中正好规定了一种<code>Range</code>机制，我们可以通过这种机制来进行分片传输。</p></blockquote><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h3><p>当一个服务器支持<code>Range</code>时，客户端可以将需要发送的内容分成很多份发送给服务端，服务端可以每次接收部分内容。有了这样的能力，遇到断网的情况，我们可以在客户端记录下已经传送的文件范围，网络恢复后再将剩余部分发送给服务端，这样就实现了断点续传。</p><p><code>Range</code>的在 http 1.1 中的具体定义可以参考文档：</p><ul><li>rfc2616</li></ul><p>具体流程如下：</p><ul><li><p>浏览器请求内容。</p></li><li><p>服务器告诉浏览器，该内容可以使用 Accept-Ranges 消息头进行分部分请求。</p><pre><code>response.setHeader(&#39;Accept-Ranges&#39;, &#39;bytes&#39;);
</code></pre></li><li><p>浏览器重新发送请求，用 Range 消息头告诉服务器需要的内容范围。</p><p>发送的 Range 格式：<strong>字节数（bytes）= (开始)-(结束)</strong></p><p>这是浏览器告知服务器所需分部分内容范围的消息头. 注意开始和结束位置是都包括在内的，而且是从 0 开始的. 这个消息头也可以不发送两个位置，其含义如下:</p><ul><li>如果结束位置被去掉了，服务器会返回从声明的开始位置到整个内容的结束位置内容的最后一个可用字节。</li><li>如果开始位置被去掉了，结束位置参数可以被描述成从最后一个可用的字节算起可以被服务器返回的字节数。</li></ul></li></ul><p>而服务器会分如下两种情况响应浏览器的请求:</p><ul><li>如果范围是合理的，服务器会返回所请求的部分内容，并带上 206 Partial Content 状态码. 当前内容的范围会在 Content-Range 消息头中申明。 发送的 Content-Range 格式：<strong>字节数（bytes）=(开始)-(结束)/(总数)</strong></li><li>如果范围是不可用的(例如，比内容的总字节数大), 服务器会返回 416 请求范围不合理 Requested Range Not Satisfiable 状态码. 可用的范围也会在 Content-Range 消息头中声明。</li></ul><h3 id="nodejs-简单实现" tabindex="-1"><a class="header-anchor" href="#nodejs-简单实现" aria-hidden="true">#</a> nodejs 简单实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">getStream</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> filepath<span class="token punctuation">,</span> statObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> end <span class="token operator">=</span> statObj<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> range <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;range&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Accept-Range&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bytes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">206</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> range<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bytes=(\\d*)-(\\d*)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> start <span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      end <span class="token operator">=</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> end <span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span> <span class="token punctuation">{</span>
     start<span class="token punctuation">,</span>
     end
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="待续" tabindex="-1"><a class="header-anchor" href="#待续" aria-hidden="true">#</a> 待续</h3><h3 id="自我小结" tabindex="-1"><a class="header-anchor" href="#自我小结" aria-hidden="true">#</a> 自我小结</h3><p>在搭建 node 静态服务器过程中学习利用 Http1.1 的<code>Range</code>来实现断点续传功能</p><h6 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h6><figure><img src="https://link.juejin.im?target=http%3A%2F%2Fdeveloper.51cto.com%2Fart%2F201409%2F451095.htm" alt="Node.js 中实现 HTTP 206 内容分片" tabindex="0" loading="lazy"><figcaption>Node.js 中实现 HTTP 206 内容分片</figcaption></figure>`,29),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","http断点续传原理.html.vue"]]);export{d as default};
