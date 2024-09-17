import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as p,b as n,d as s,a as c,e as i}from"./app-XuorXwmJ.js";const l={},r=n("h1",{id:"xsrf-防御",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xsrf-防御","aria-hidden":"true"},"#"),s(" XSRF 防御")],-1),d=n("h2",{id:"需求分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#需求分析","aria-hidden":"true"},"#"),s(" 需求分析")],-1),u={href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security#Cross-Site_Request_Forgery_(CSRF)",target:"_blank",rel:"noopener noreferrer"},k=i(`<figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200105110743.png" alt="xsrf" tabindex="0" loading="lazy"><figcaption>xsrf</figcaption></figure><p>CSRF 的防御手段有很多，比如验证请求的 referer，但是 referer 也是可以伪造的，所以杜绝此类攻击的一种方式是服务器端要求每次请求都包含一个 <code>token</code>，这个 <code>token</code> 不在前端生成，而是在我们每次访问站点的时候生成，并通过 <code>set-cookie</code> 的方式种到客户端，然后客户端发送请求的时候，从 <code>cookie</code> 中对应的字段读取出 <code>token</code>，然后添加到请求 <code>headers</code> 中。这样服务端就可以从请求 <code>headers</code> 中读取这个 <code>token</code> 并验证，由于这个 <code>token</code> 是很难伪造的，所以就能区分这个请求是否是用户正常发起的。</p><p>对于我们的 <code>ts-axios</code> 库，我们要自动把这几件事做了，每次发送请求的时候，从 <code>cookie</code> 中读取对应的 <code>token</code> 值，然后添加到请求 <code>headers</code>中。我们允许用户配置 <code>xsrfCookieName</code> 和 <code>xsrfHeaderName</code>，其中 <code>xsrfCookieName</code> 表示存储 <code>token</code> 的 <code>cookie</code> 名称，<code>xsrfHeaderName</code> 表示请求 <code>headers</code> 中 <code>token</code> 对应的 <code>header</code> 名称。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>axios
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    xsrfCookieName<span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>
    xsrfHeaderName<span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span> <span class="token comment">// default</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们提供 <code>xsrfCookieName</code> 和 <code>xsrfHeaderName</code> 的默认值，当然用户也可以根据自己的需求在请求中去配置 <code>xsrfCookieName</code> 和 <code>xsrfHeaderName</code>。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>先修改 <code>AxiosRequestConfig</code> 的类型定义。</p><p><code>types/index.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  xsrfCookieName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  xsrfHeaderName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改默认配置。</p><p><code>defaults.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> defaults<span class="token operator">:</span> AxiosRequestConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  xsrfCookieName<span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span>

  xsrfHeaderName<span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们要做三件事：</p><ul><li><p>首先判断如果是配置 <code>withCredentials</code> 为 <code>true</code> 或者是同域请求，我们才会请求 <code>headers</code> 添加 <code>xsrf</code> 相关的字段。</p></li><li><p>如果判断成功，尝试从 cookie 中读取 <code>xsrf</code> 的 <code>token</code> 值。</p></li><li><p>如果能读到，则把它添加到请求 <code>headers</code> 的 <code>xsrf</code> 相关字段中。</p></li></ul><p>我们先来实现同域请求的判断。</p><p><code>helpers/url.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">URLOrigin</span> <span class="token punctuation">{</span>
  protocol<span class="token operator">:</span> <span class="token builtin">string</span>
  host<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isURLSameOrigin</span><span class="token punctuation">(</span>requestURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parsedOrigin <span class="token operator">=</span> <span class="token function">resolveURL</span><span class="token punctuation">(</span>requestURL<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    parsedOrigin<span class="token punctuation">.</span>protocol <span class="token operator">===</span> currentOrigin<span class="token punctuation">.</span>protocol <span class="token operator">&amp;&amp;</span>
    parsedOrigin<span class="token punctuation">.</span>host <span class="token operator">===</span> currentOrigin<span class="token punctuation">.</span>host
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> urlParsingNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> currentOrigin <span class="token operator">=</span> <span class="token function">resolveURL</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">resolveURL</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> URLOrigin <span class="token punctuation">{</span>
  urlParsingNode<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> protocol<span class="token punctuation">,</span> host <span class="token punctuation">}</span> <span class="token operator">=</span> urlParsingNode

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    protocol<span class="token punctuation">,</span>
    host
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同域名的判断主要利用了一个技巧，创建一个 a 标签的 DOM，然后设置 <code>href</code> 属性为我们传入的 <code>url</code>，然后可以获取该 DOM 的 <code>protocol</code>、<code>host</code>。当前页面的 <code>url</code> 和请求的 <code>url</code> 都通过这种方式获取，然后对比它们的 <code>protocol</code> 和 <code>host</code> 是否相同即可。</p><p>接着实现 cookie 的读取。</p><p><code>helpers/cookie.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cookie <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">read</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> match <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;(^|;\\\\s*)(&#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;)=([^;]*)&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> match <span class="token operator">?</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>cookie</code> 的读取逻辑很简单，利用了正则表达式可以解析到 <code>name</code> 对应的值。</p><p>最后实现完整的逻辑。</p><p><code>core/xhr.ts</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token comment">/*...*/</span>
  xsrfCookieName<span class="token punctuation">,</span>
  xsrfHeaderName
<span class="token punctuation">}</span> <span class="token operator">=</span> config

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>withCredentials <span class="token operator">||</span> <span class="token function">isURLSameOrigin</span><span class="token punctuation">(</span>url<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> xsrfCookieName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> xsrfValue <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>xsrfCookieName<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xsrfValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    headers<span class="token punctuation">[</span>xsrfHeaderName<span class="token operator">!</span><span class="token punctuation">]</span> <span class="token operator">=</span> xsrfValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo-编写" tabindex="-1"><a class="header-anchor" href="#demo-编写" aria-hidden="true">#</a> demo 编写</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  xsrfCookieName<span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN-D&#39;</span><span class="token punctuation">,</span>
  xsrfHeaderName<span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN-D&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/more/get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>examples/server.js</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">setHeaders</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&#39;XSRF-TOKEN-D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1234abc&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在访问页面的时候，服务端通过 <code>set-cookie</code> 往客户端种了 <code>key</code> 为 <code>XSRF-TOKEN</code>，值为 <code>1234abc</code> 的 <code>cookie</code>，作为 <code>xsrf</code> 的 <code>token</code> 值。</p><p>然后我们在前端发送请求的时候，就能从 cookie 中读出 <code>key</code> 为 <code>XSRF-TOKEN</code> 的值，然后把它添加到 <code>key</code> 为 <code>X-XSRF-TOKEN</code> 的请求 <code>headers</code> 中。</p><p>至此，我们实现了 XSRF 的自动防御的能力，下节课我们来实现 ts-axios 对上传和下载请求的支持。</p>`,32);function v(m,b){const a=o("ExternalLinkIcon");return t(),p("div",null,[r,d,n("p",null,[s("XSRF 又名 "),n("a",u,[s("CSRF"),c(a)]),s("，跨站请求伪造，它是前端常见的一种攻击方式，我们先通过一张图来认识它的攻击手段。")]),k])}const h=e(l,[["render",v],["__file","02.XSRF 防御.html.vue"]]);export{h as default};
