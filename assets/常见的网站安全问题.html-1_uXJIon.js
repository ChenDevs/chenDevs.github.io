import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-5N_xpHNt.js";const t={},p=e(`<p>经过一番 996，精心打造的网站眼看就要部属上线了，但在网站正式上线之前，你有没有想过自己的网站是否安全吗？尽管你的网站用了很多高大上的技术，但是如果网站的安全性不足，无法保护网站的数据，甚至成为恶意程序的寄生温床，那前面堆砌了再多的美好也都成了枉然。</p><h2 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2><p>在众多安全性漏洞中，<strong>SQL 注入</strong>绝对是最严重但也是最好处理的一种安全漏洞。在数据库执行查询句时，如果将恶意用户给出的参数直接拼接在查询句上，就有可能发生。</p><p>举个例子，假设原本某网站登录验证的查询句长这样：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token identifier"><span class="token punctuation">\`</span>strSQL = &quot;SELECT * FROM users WHERE (name = &#39;&quot; + userName + &quot;&#39;) and (pw = &#39;&quot;+ passWord +&quot;&#39;);&quot;
<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而恶意用户输入的参数为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token identifier"><span class="token punctuation">\`</span>userName = &quot;1&#39; OR &#39;1&#39;=&#39;1&quot;;
passWord = &quot;1&#39; OR &#39;1&#39;=&#39;1&quot;;
<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于代码中是直接将参数与查询句做字串做的拼接，所以 SQL 就成为了这样：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token identifier"><span class="token punctuation">\`</span>strSQL = &quot;SELECT * FROM users WHERE (name = &#39;1&#39; OR &#39;1&#39;=&#39;1&#39;) and (pw = &#39;1&#39; OR &#39;1&#39;=&#39;1&#39;);&quot;
// 相当于
strSQL = &quot;SELECT * FROM users;&quot;
<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，账号密码就形同虚设，甚至可以拿到整个数据库的结构（<code>SELECT * FROM sys.tables</code>）、任意修改、查询数据，整个网站的数据就全部泄露了。</p><p>不过解决方法也很简单，只要通过参数化查询来避免直接将参数与查询句拼接，并进行适当的输入检查、插入转义字符、严格设定程序权限，就能够有效避免 SQL 注入了。</p><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2><p>XSS（跨站攻击）也叫 JavaScript 注入，是现代网站最频繁出现的问题之一，它指的是网站被恶意用户植入了其他代码，通常发生在网站将用户输入的内容直接放到网站内容时。例如论坛、留言板等可以输入任意文字的网站，恶意用户如果写入一小段 <code>&lt;script&gt;</code>，并且前、后端都没有针对输入内容做字符转换和过滤处理，直接把用户输入的字串作为页面内容的话，就有可能遭到 XSS。</p><p>常见的 XSS 有几个类型：将恶意代码写入数据库，当数据被读取出来时就会执行的<strong>储存型 XSS</strong>；将用户输入的内容直接带回页面上的<strong>反射型 XSS</strong>；以及利用 DOM 的特性，各种花式执行恶意代码的<strong>DOM-based 型 XSS</strong>。</p><p>储存型及反射型都很好理解，DOM-based 型就非常有意思了；可以参考 OSWAP 整理的 XSS Filter Evasion Cheat Sheet[1]，绝大多数的 XSS 方式，都是通过各个元素的 <code>background-image</code> 属性或者元素上的各种事件回调来实现；其中特别值得注意的是 SVG，由于 SVG 中可以写入任意 HTML，还可以加上 <code>onload</code> 事件，如果把 SVG 当成普通图片处理，直接作为网站内容使用，如果遇到恶意用户的话，后果不堪设想。所以在上线上传图片功能时，务必要把 SVG 过滤掉！</p><p>避免 XSS 的方法其实也很简单，只要在数据输入输出时做好字符转换，使恶意代码不被执行，而是被解析成字符就可以了。</p><h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2><p>CSRF（跨站请求伪造）是一种利用 Cookie 及 Session 认证机制进行攻击的手段；由于 Session 认证的其实不是用户本人，而是浏览器，那么只要通过网页 DOM 元素可以跨域的机制，对已经得到认证的网站发出请求，就可以假冒用户，从而拿到敏感信息。</p><p>例如某家银行的转账 API 的 URL 是这样的：</p><p><code>http://www.examplebank.com/withdraw?account=AccoutName&amp;amount=1000&amp;for=PayeeName </code></p><p>而恶意用户如果在网站中塞进一个 <code>&lt;img /&gt;</code> 的话：</p><p><code>&lt;img src=&quot;http://www.examplebank.com/withdraw?account=Alice&amp;amount=1000&amp;for=Badman&quot;&gt; </code></p><p>当不知情的用户浏览到攻击者的网站时，<code>&lt;img/&gt;</code> 会自动发出这个请求，如果用户登录银行的 Session 尚未过期，那么这个请求很可能就会被银行接受，最后会在用户本人不知情的情况下“被”转帐。</p><p>这种攻击方式可以与前面所说的 XSS 是相辅相成，例如在没有防范 XSS 的论坛网站中植入 <code>&lt;img/&gt;</code>，那么其 <code>src</code> 属性就应该是获取敏感信息的 API URL。</p><p>解决方法主要有以下几种：</p><ul><li><strong>检查 Referer</strong>：在服务器端检查请求头中 Referer 的值，也就是检查请求的来源，如果是来自允许的网站，才会正常执行 API 的功能。</li><li><strong>CSRF Token</strong>：在 Cookie 及请求发送的数据中都加上 <code>csrftoken</code>，并检查值是否相同，如果请求来源是自己的网站验证就会通过；反之，由于外部网站无法在代码中得到其他网站的 Cookie，因此无法在请求中带上 <code>csrftoken</code>。</li><li><strong>SameSite Cookie</strong>：在 Cookie 中加上 <code>SameSite</code> 属性，确保 Cookie 仅能在自己的网站使用。</li></ul><h2 id="json-劫持" tabindex="-1"><a class="header-anchor" href="#json-劫持" aria-hidden="true">#</a> JSON 劫持</h2><p>JSON 劫持是利用现代网站前后端通过 API 进行数据交换的特性，只要能获得使用者权限，并调用获取资料的 API，再加上改写原生的 JavaScript 对象，就可以窃取用户的敏感信息。</p><p>获得权限的部分于 CSRF 相同，通过 <code>&lt;script&gt;</code> 可以跨域的特性直接使用浏览器用户的 Cookie；攻击者只需要在网页上通过 <code>&lt;script&gt;</code> 调用获取数据的 API 完成对数据的窃取。</p><p>例如：</p><p><code>Object.prototype.__defineSetter__(&#39;user&#39;,function(obj){ for(var i in obj) { alert(i + &#39;=&#39; + obj[i]); } }); </code></p><p>当回传的数据中含有  <code>user</code> 属性时，由于 Setter 通过 <code>Object.prototype.__defineSetter__</code> 改写了，<code>user</code> 中的值会被全部读取。</p><p>然而 <code>Object.prototype.__defineSetter__</code> 可以修改原生对象所造成的问题，早已经在 ES4 中就被修复了，JSON 劫持也因此销声匿迹，但是从 ES6 开始又添加了 Proxy，使 JSON 劫持又再次成为可能：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>
    __proto__<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>__proto__<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">has</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>
          name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>c <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">,</span> c <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-16BE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>external-script-with-array-literal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来很恐怖，那么该如何解决呢？除了前面所说的 CSRF Token 外，许多大公司还采用了另一种有趣的解决方式。即 API 的响应内容开头为 <code>for (;;);</code>，这也是利用 了<code>&lt;script&gt;</code> 引入的 JavaScript 会立即执行的特性，把攻击者的网站卡死在循环里。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>除了文中提到的四种常见的网站安全漏洞外，一个网站还有很多细节需要考虑，例如不要用明码存储密码等敏感信息，针对来源 IP 做流量限制防止 DOS 等等。所以在进行网站开发时要保持安全意识，尽可能做好基本的防护措施。</p>`,37),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","常见的网站安全问题.html.vue"]]);export{d as default};
