import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,b as a,d as s,a as p,e as n}from"./app-1b11b514.js";const c={},i=n('<figure><img src="https://user-gold-cdn.xitu.io/2020/3/28/1711febeb4dd493c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" tabindex="0"><figcaption></figcaption></figure><blockquote><p>前端缓存指的是，浏览器对服务器最近请求过的资源进行存储，通过这种方式来达到减少与服务器的交互请求，以此减少对带宽流量的浪费，以及减少了服务器的负担，而浏览器缓存主要分为两种，强缓存和协商缓存</p></blockquote><h3 id="_1-强缓存" tabindex="-1"><a class="header-anchor" href="#_1-强缓存" aria-hidden="true">#</a> 1.强缓存</h3><blockquote><p>强缓存所谓的“强”，在于强制让浏览器按照一定时间范围内来存储来自服务器的资源，有点强制的味道～，强缓存是利用 Expires 或者 Cache-Control，不发送请求，直接从缓存中取，请求状态码会返回 200（from cache）</p></blockquote><h4 id="_1-1-expires-已逐步淘汰" tabindex="-1"><a class="header-anchor" href="#_1-1-expires-已逐步淘汰" aria-hidden="true">#</a> 1.1 Expires(已逐步淘汰)</h4>',5),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires",target:"_blank",rel:"noopener noreferrer"},u=n(`<ul><li>指定到期时间</li></ul><p>指定缓存到期 GMT 的绝对时间，如果 expires 到期需要重新请求</p><pre><code>Expires:Sat, 09 Jun 2020 08:13:56 GMT
</code></pre><h4 id="_1-2-cache-control-主要" tabindex="-1"><a class="header-anchor" href="#_1-2-cache-control-主要" aria-hidden="true">#</a> 1.2 Cache-Control（主要）</h4><blockquote><p>相比上一小节讲的 expires，两者有什么区别呢？ Cache-Control 你可以理解成为高级版 expires，为了弥补 Expires 的缺陷在 Http1.1 协议引入的，且强大之外优先级也更高，也就是当 Expires 和 Cache-Control 同时存在时，Cache-Control 会覆盖 Expires 的配置，即 Cache-Control ( Http 1.1 ) &gt; Expires ( Http 1.0 )</p></blockquote><p>Cache-Control 比 Expires 比较要内涵，具备更多的属性，其中包括如下</p><ul><li><p>no-cache ：可以在本地缓存，可以在代理服务器缓存，需要先验证才可使用缓存</p></li><li><p>no-store ： 禁止浏览器缓存，只能通过服务器获取</p></li><li><p>max-age ： 设置资源的过期时间（效果与 expires 一样）</p></li></ul><p>例子演示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 设置缓存时间为1年</span>
    Cache<span class="token operator">-</span>Control<span class="token operator">:</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">31536000</span>
    <span class="token literal-property property">Expires</span><span class="token operator">:</span>Sat<span class="token punctuation">,</span> <span class="token number">09</span> Jun <span class="token number">2020</span> <span class="token number">08</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">56</span> <span class="token constant">GMT</span> <span class="token comment">//同时设置两个，Expires会失效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则意味着浏览器可以缓存一年的时间，无需请求服务器，同时如果同时声明 Expires 和 Cache-Control，Expires 将失效</p><blockquote><p>🤔️ 你可能会有疑惑 Cache-Control no-cache 与 max-age=0 有什么区别？</p></blockquote><p>本质上就是你按浏览器刷新与强制刷新的区分，看下一节</p><h4 id="_1-3-用户对浏览器的操作" tabindex="-1"><a class="header-anchor" href="#_1-3-用户对浏览器的操作" aria-hidden="true">#</a> 1.3 用户对浏览器的操作</h4><blockquote><p>相信你离不开的操作就是 F5（刷新按钮），但是不同的刷新操作意味着不同的反应</p></blockquote><ul><li><p>Ctrl + F5 (强制刷新)：：request header 多了 cache-control： no-cache （重新获取请求）</p></li><li><p>F5 (刷新)/ctrl+R 刷新：：request header 多了 cache-control： max-age=0 （需要先验证才可使用缓存，Expires 无效）</p></li></ul><h3 id="_2-协商缓存" tabindex="-1"><a class="header-anchor" href="#_2-协商缓存" aria-hidden="true">#</a> 2.协商缓存</h3><blockquote><p>协商缓存，就没有强缓存那么霸道，协商缓存需要客户端和服务端两端进行交互，通过服务器告知浏览器缓存是否可用，并增加缓存标识，“有事好好商量”，两者都会互相协商。 协商缓存，其实就是服务器与浏览器交互过程，一般有两个回合，而协商主要有以下几种方式：</p></blockquote><h4 id="_2-1-last-modified-http-1-0" tabindex="-1"><a class="header-anchor" href="#_2-1-last-modified-http-1-0" aria-hidden="true">#</a> 2.1 Last-Modified （Http 1.0）</h4><ul><li><p>第一回合：当浏览器第一次请求服务器资源时，服务器通过 Last-Modified 来设置响应头的缓存标识，把资源最后修改的时间作为值写入，再将资源返回给浏览器</p></li><li><p>第二回合：第二次请求时，浏览器会带上 If-Modified-Since 请求头去访问服务器，服务器将 If-Modified-Since 中携带的时间与资源修改的时间对比，当时间不一致时，意味更新了，服务器会返回新资源并更新 Last-Modified，当时间一致时，意味着资源没有更新，服务器会返回 304 状态码，浏览器将从缓存中读取资源</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">//response header 第一回合</span>
    Last<span class="token operator">-</span>Modified<span class="token operator">:</span> Wed<span class="token punctuation">,</span> <span class="token number">21</span> Oct <span class="token number">2019</span> <span class="token number">07</span><span class="token operator">:</span><span class="token number">28</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span>

    <span class="token comment">//request header 第二回合</span>
    If<span class="token operator">-</span>Modified<span class="token operator">-</span>Since<span class="token operator">:</span> Wed<span class="token punctuation">,</span> <span class="token number">21</span> Oct <span class="token number">2019</span> <span class="token number">07</span><span class="token operator">:</span><span class="token number">29</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-etag-http-1-1" tabindex="-1"><a class="header-anchor" href="#_2-2-etag-http-1-1" aria-hidden="true">#</a> 2.2 Etag （Http 1.1）</h4>`,21),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match",target:"_blank",rel:"noopener noreferrer"},v=n(`<ul><li><p>第一回合： 也是跟上文一样，浏览器去请求服务器资源，不过这次不是通过 Last-Modified 了，而是用 Etag 来设置响应头缓存标识。Etag 是由服务端生成的，然后浏览器会将 Etag 与资源缓存</p></li><li><p>第二回合: 浏览器会将 Etag 放入 If-None-Match 请求头中去访问服务器，服务器收到后，会对比两端的标识，当两者不一致时，意味着资源更新，服务器会返回新资源并更新 Etag，浏览器将从缓存中读取资源，当两者一致时，意味着资源没有更新，服务器会返回 304 状态码，浏览器将从缓存中读取资源</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">//response header 第一回合</span>
    <span class="token literal-property property">ETag</span><span class="token operator">:</span> <span class="token string">&quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;</span>

    <span class="token comment">//request header 第二回合</span>
    If<span class="token operator">-</span>None<span class="token operator">-</span>Match<span class="token operator">:</span> <span class="token string">&quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比完 Last-Modified 与 Etag，我们可以很显然看到，协商缓存每次请求都会与服务器发生“关系”，第一回合都是拿数据和标识，而第二回合就是浏览器“咨询”服务器是否资源已经更新的过程。</p><p>同时，如果以上两种方式同时使用，Etag 优先级会更高，即 Etag( Http 1.1 ) &gt; Last-Modified ( Http 1.0 )</p><h3 id="_3-缓存状态码" tabindex="-1"><a class="header-anchor" href="#_3-缓存状态码" aria-hidden="true">#</a> 3.缓存状态码</h3><h4 id="_3-1-状态码-200-ok-from-cache" tabindex="-1"><a class="header-anchor" href="#_3-1-状态码-200-ok-from-cache" aria-hidden="true">#</a> 3.1 状态码 200 OK（from cache）</h4><blockquote><p>这是浏览器没有跟服务器确认，直接用了浏览器缓存，性能最好的，没有网络请求，那么什么情况会出现这种情况？一般在 expires 或者 Cache-Control 中的 max-age 头部有效时会发生</p></blockquote><h4 id="_3-2-状态码-304-not-modified" tabindex="-1"><a class="header-anchor" href="#_3-2-状态码-304-not-modified" aria-hidden="true">#</a> 3.2 状态码 304 Not Modified</h4><blockquote><p>是浏览器和服务器“交流”了，确定使用缓存后，再用缓存，也就是第二节讲的通过 Etag 或 Last-Modified 的第二回合中对比，对比两者一致，则意味资源不更新，则服务器返回 304 状态码</p></blockquote><h4 id="_3-3-状态码-200" tabindex="-1"><a class="header-anchor" href="#_3-3-状态码-200" aria-hidden="true">#</a> 3.3 状态码 200</h4><blockquote><p>以上两种缓存全都失败，也就是未缓存或者缓存未过期，需要浏览器去获取最新的资源，效率最低 一句话：缓存是否过期用：Cache-Control（max-age）, Expires，缓存是否有效用：Last-Modified，Etag</p></blockquote><h3 id="_4-缓存的应用" tabindex="-1"><a class="header-anchor" href="#_4-缓存的应用" aria-hidden="true">#</a> 4.缓存的应用</h3><blockquote><p>讲述缓存在我们开发中最常见的使用</p></blockquote><h4 id="_4-1-vue-中缓存的应用" tabindex="-1"><a class="header-anchor" href="#_4-1-vue-中缓存的应用" aria-hidden="true">#</a> 4.1 Vue 中缓存的应用</h4><ul><li>keepAlive</li></ul>`,15),h={href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>主要用于保留组件状态或避免重新渲染，也意味着不会再走 mounted，beforeDestroy 函数，组件将被缓存，不用销毁重新渲染，性能比较好</p><p>路由的选择性缓存</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// router.js</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
       <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/test/test.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

     <span class="token comment">// App.vue</span>
     <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&#39;$route.meta.keepAlive&#39;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&#39;!$route.meta.keepAlive&#39;</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>

<span class="token comment">// 组件缓存</span>

     <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>component v<span class="token operator">-</span>bind<span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;currentTabComponent&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>打包加入 hash</li></ul><blockquote><p>前端工程化开发，可以使用 Webpack 编译，打包的资源文件路径里自动带有一串随机字符串，称为 hash</p></blockquote>`,5),b={href:"https://cli.vuejs.org/zh/config/#filenamehashing",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>Vue-Cli 3x 版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">filenameHashing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">filename</span><span class="token punctuation">(</span><span class="token string">&#39;[name].[hash].js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-nginx-的缓存" tabindex="-1"><a class="header-anchor" href="#_4-2-nginx-的缓存" aria-hidden="true">#</a> 4.2 Nginx 的缓存</h4><ul><li>配置 expires</li></ul><p>假设我想通过 web 应用的图片缓存一周，那你可以在 nginx 中配置如下 👇，配置完之后一周之内的资源只会访问浏览器的资源，而不是去请求 Nginx</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>     location <span class="token operator">~</span> \\<span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
          root  <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>mywww<span class="token operator">/</span>html<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>
          expires 7d<span class="token punctuation">;</span>  <span class="token comment">//表示把数据缓存7天，d：天，s：秒，m：分</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置 etag</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  location <span class="token operator">~</span> \\<span class="token punctuation">.</span><span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token punctuation">)</span>\\$ <span class="token punctuation">{</span>
  root <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>mywww<span class="token operator">/</span>html<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>
  etag off<span class="token punctuation">;</span> <span class="token comment">// 默认是开启 on</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function f(x,_){const e=o("ExternalLinkIcon");return r(),l("div",null,[i,a("blockquote",null,[a("p",null,[s("Expires 是 HTTP/1.0 中提及的，让服务器为文件资源设置一个过期时间，在多长时间内可以将这些内容视为最新的，允许客户端在这个时间之前不去检查，MDN 具体介绍 "),a("a",d,[s("点此"),p(e)])])]),u,a("blockquote",null,[a("p",null,[s("MDN 中提到 ETag 之间的比较，使用的是强比较算法，即只有在每一个字节都相同的情况下，才可以认为两个文件是相同的，而这个 hash 值，是由对文件的索引节、大小和最后修改时间进行 Hash 后得到的，而且要注意的是分布式系统不适用，了解更多"),a("a",k,[s("点我"),p(e)])])]),v,a("blockquote",null,[a("p",null,[s("vue 官方文档提到，当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题，这个时候我们希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来，我们可以用一个 元素将其动态组件包裹起来 "),a("a",h,[s("官方文档 🚀"),p(e)])])]),m,a("p",null,[s("在 vue cli 脚手架中，我们可以通过配置 vue.config.js(本质上是配置 webpack)来设置编译生成的文件具备 hash 值，意味着每次打包编译的文件都是唯一的，来防止因为缓存，导致资源没有更新，"),a("a",b,[s("官方文档 🚀"),p(e)])]),g])}const j=t(c,[["render",f],["__file","前端缓存.html.vue"]]);export{j as default};
