import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as o,b as n,d as s,a as c,e as a}from"./app-XuorXwmJ.js";const l={},r=a(`<figure><img src="https://user-gold-cdn.xitu.io/2020/3/25/17110141b0a9e71f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>随着前端变革，Nginx 也成为了前端开发工程师必不可少应该具备的一项技能了，那 nginx 到底起的是吗作用？ 其实 Nginx 一直跟我们息息相关，它既可以作为 Web 服务器，也可以作为负载均衡服务器，具备高性能、高并发连接等</p></blockquote><h3 id="_1-负载均衡" tabindex="-1"><a class="header-anchor" href="#_1-负载均衡" aria-hidden="true">#</a> 1.负载均衡</h3><blockquote><p>当一个应用单位时间内访问量激增，服务器的带宽及性能受到影响，影响大到自身承受能力时，服务器就会宕机奔溃，为了防止这种现象发生，以及实现更好的用户体验，我们可以通过配置 Nginx 负载均衡的方式来分担服务器压力</p></blockquote><p>当有一台服务器宕机时，负载均衡器就分配其他的服务器给用户，极大的增加的网站的稳定性 当用户访问 web 时候，首先访问到的是负载均衡器，再通过负载均衡器将请求转发给后台服务器</p><h4 id="_1-1-负载均衡的几种常用方式" tabindex="-1"><a class="header-anchor" href="#_1-1-负载均衡的几种常用方式" aria-hidden="true">#</a> 1.1 负载均衡的几种常用方式</h4><ul><li>轮询（默认）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// nginx.config</span>
    upstream backserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>权重 weight</li></ul><blockquote><p>指定不同 ip 的权重，权重与访问比成正相关，权重越高，访问越大，适用于不同性能的机器</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// nginx.config</span>
    upstream backserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span> weight<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span> weight<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>响应时间来分配</li></ul><blockquote><p>公平竞争，谁相应快，谁处理，不过这种方式需要依赖到第三方插件 nginx-upstream-fair，需要先安装</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// nginx.config</span>
    upstream backserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span><span class="token punctuation">;</span>
    fair<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
      proxy_pass  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>backserver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-健康检查" tabindex="-1"><a class="header-anchor" href="#_1-2-健康检查" aria-hidden="true">#</a> 1.2 健康检查</h4><blockquote><p>Nginx 自带 ngx_http_upstream_module（健康检测模块）本质上服务器心跳的检查，通过定期轮询向集群里的服务器发送健康检查请求,来检查集群中是否有服务器处于异常状态</p></blockquote><p>如果检测出其中某台服务器异常,那么在通过客户端请求 nginx 反向代理进来的都不会被发送到该服务器上（直至下次轮训健康检查正常）</p><p>基本例子如下 👇</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    upstream backserver<span class="token punctuation">{</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span>  max_fails<span class="token operator">=</span><span class="token number">1</span> fail_timeout<span class="token operator">=</span>40s<span class="token punctuation">;</span>
    server <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.2</span>  max_fails<span class="token operator">=</span><span class="token number">1</span> fail_timeout<span class="token operator">=</span>40s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
      proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>backend<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>涉及两个配置：</p><ul><li>fail_timeout : 设定服务器被认为不可用的时间段以及统计失败尝试次数的时间段，默认为 10s</li><li>max_fails : 设定 Nginx 与服务器通信的尝试失败的次数，默认为：1 次</li></ul><h3 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2.反向代理</h3><blockquote><p>反向代理指的是，当一个客户端发送的请求,想要访问服务器上的内容，但将被该请求先发送到一个代理服务器 proxy,这个代理服务器（Nginx）将把请求代理到和自己属于同一个局域网下的内部服务器上,而用户通过客户端真正想获得的内容就存储在这些内部服务器上，此时 Nginx 代理服务器承担的角色就是一个中间人，起到分配和沟通的作用</p></blockquote><h4 id="_2-1-为什么需要反向代理" tabindex="-1"><a class="header-anchor" href="#_2-1-为什么需要反向代理" aria-hidden="true">#</a> 2.1 为什么需要反向代理？</h4><p>反向代理的优势主要有以下两点</p><ul><li>防火墙作用</li></ul><p>当你的应用不想直接暴露给客户端（也就是客户端无法直接通过请求访问真正的服务器，只能通过 Nginx），通过 nginx 过滤掉没有权限或者非法的请求，来保障内部服务器的安全</p><ul><li>负载均衡</li></ul><p>也就上一章提到负载均衡，本质上负载均衡就是反向代理的一种应用场景，可以通过 nginx 将接收到的客户端请求&quot;均匀地&quot;分配到这个集群中所有的服务器上(具体看负载均衡方式),从而实现服务器压力的负载均衡</p><h4 id="_2-2-如何使用反向代理" tabindex="-1"><a class="header-anchor" href="#_2-2-如何使用反向代理" aria-hidden="true">#</a> 2.2 如何使用反向代理</h4><blockquote><p>我们通过模拟内部服务器的端口启动的 nodejs 项目设置反向代理到 80 端口访问</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// nginx.config</span>
    server  <span class="token punctuation">{</span>
      listen <span class="token number">80</span><span class="token punctuation">;</span>
      server_name localhost<span class="token punctuation">;</span>
      location <span class="token operator">/</span> <span class="token punctuation">{</span>
    proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8000</span><span class="token punctuation">;</span>（upstream）
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Nginx 反向代理是，会通过 location 功能匹配指定的 URI，然后把接收到的符合匹配 URI 的请求通过 proxy_pass 转移给之前定义好的 upstream 节点池</p><h3 id="_3-https-配置" tabindex="-1"><a class="header-anchor" href="#_3-https-配置" aria-hidden="true">#</a> 3.Https 配置</h3><blockquote><p>Nginx 常用来配置 Https 认证，主要有两个步骤：签署第三方可信任的 SSL 证书 和 配置 HTTPS</p></blockquote><h4 id="_3-1-签署第三方可信任的-ssl" tabindex="-1"><a class="header-anchor" href="#_3-1-签署第三方可信任的-ssl" aria-hidden="true">#</a> 3.1 签署第三方可信任的 SSL</h4>`,36),u={href:"https://cloud.tencent.com/product/ssl/faqs",target:"_blank",rel:"noopener noreferrer"},d=a(`<h4 id="_3-2-nginx-配置-https" tabindex="-1"><a class="header-anchor" href="#_3-2-nginx-配置-https" aria-hidden="true">#</a> 3.2 Nginx 配置 https</h4><blockquote><p>要开启 HTTPS 服务，在配置文件信息块(server)，必须使用监听命令 listen 的 ssl 参数和定义服务器证书文件和私钥文件，如下所示：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    server <span class="token punctuation">{</span>
       #ssl参数
       listen          <span class="token number">443</span> ssl<span class="token punctuation">;</span> <span class="token comment">//监听443端口，因为443端口是https的默认端口。80为http的默认端口</span>
       server_name     example<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
       #证书文件
       ssl_certificate     example<span class="token punctuation">.</span>com<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
       #私钥文件
       ssl_certificate_key example<span class="token punctuation">.</span>com<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ssl_certificate:证书的绝对路径</li><li>ssl_certificate_key: 密钥的绝对路径;</li></ul><h3 id="_4-常用的配置" tabindex="-1"><a class="header-anchor" href="#_4-常用的配置" aria-hidden="true">#</a> 4.常用的配置</h3><blockquote><p>除了上述的这些，前端还可以用 Nginx 做些什么，多着呢～下面依依给你讲</p></blockquote><h4 id="_4-1-ip-白名单" tabindex="-1"><a class="header-anchor" href="#_4-1-ip-白名单" aria-hidden="true">#</a> 4.1 IP 白名单</h4><blockquote><p>可以配置 nginx 的白名单，规定有哪些 ip 可以访问你的服务器，防爬虫必备</p></blockquote><ul><li>简单配置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  server <span class="token punctuation">{</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
      deny <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">;</span> <span class="token comment">// 禁止该 ip 访问</span>
      deny all<span class="token punctuation">;</span> <span class="token comment">// 禁止所有</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>白名单配置</li></ul><p>建立白名单</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    vim <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>white_ip<span class="token punctuation">.</span>conf
     <span class="token operator">...</span>
    <span class="token number">192.168</span><span class="token number">.0</span><span class="token number">.1</span> <span class="token number">1</span><span class="token punctuation">;</span>
     <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 nginx 配置(nginx.conf)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    geo $remote_addr $ip_whitelist<span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
    include ip<span class="token punctuation">.</span>conf<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// geo 指令主要是可以根据指定变量的值映射出一个新变量。 如果不指定变量，默认为$remote_addr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为匹配项做白名单设置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    server <span class="token punctuation">{</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> $ip_whitelist <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">403</span><span class="token punctuation">;</span> <span class="token comment">//不在白名单返回 403</span>
        <span class="token punctuation">}</span>
        index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
        root <span class="token operator">/</span>tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-适配-pc-与移动环境" tabindex="-1"><a class="header-anchor" href="#_4-2-适配-pc-与移动环境" aria-hidden="true">#</a> 4.2 适配 PC 与移动环境</h4><blockquote><p>当用户从移动端打开 PC 端 baidu.com 的场景时，将自动跳转指移动端 m.baidu.com，本质上是 Nginx 可以通过内置变量$http_user_agent，获取到请求客户端的 userAgent，从而知道当前用户当前终端是移动端还是 PC，进而重定向到 H5 站还是 PC 站</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    server <span class="token punctuation">{</span>
     location <span class="token operator">/</span> <span class="token punctuation">{</span>
        <span class="token comment">//移动、pc设备agent获取</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>$http_user_agent <span class="token operator">~</span><span class="token operator">*</span> <span class="token string">&#39;(Android|webOS|iPhone)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">set</span> $mobile_request <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>$mobile_request <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rewrite <span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">+</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>m<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-配置-gzip" tabindex="-1"><a class="header-anchor" href="#_4-3-配置-gzip" aria-hidden="true">#</a> 4.3 配置 gzip</h4><blockquote><p>开启 Nginx gzip，压缩后,静态资源的大小会大大的减少,从而可以节约大量的带宽,提高传输效率,带来更好的响应和体验</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    server<span class="token punctuation">{</span>
    gzip on<span class="token punctuation">;</span> <span class="token comment">//启动</span>
    gzip_buffers <span class="token number">32</span> 4K<span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">//压缩级别，1-10，数字越大压缩的越好</span>
    gzip_min_length <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">//不压缩临界值，大于100的才压缩，一般不用改</span>
    gzip_types application<span class="token operator">/</span>javascript text<span class="token operator">/</span>css text<span class="token operator">/</span>xml<span class="token punctuation">;</span>
    gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span> <span class="token comment">// IE6对Gzip不友好，对Gzip</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-nginx-配置跨域请求" tabindex="-1"><a class="header-anchor" href="#_4-4-nginx-配置跨域请求" aria-hidden="true">#</a> 4.4 Nginx 配置跨域请求</h4><blockquote><p>当出现 403 跨域错误的时候，还有 No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource 报错等，需要给 Nginx 服务器配置响应的 header 参数：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    location <span class="token operator">/</span> <span class="token punctuation">{</span>
    add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin <span class="token operator">*</span><span class="token punctuation">;</span>
    add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Methods <span class="token string">&#39;GET, POST, OPTIONS&#39;</span><span class="token punctuation">;</span>
    add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Headers <span class="token string">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>$request_method <span class="token operator">=</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">204</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-如何使用-nginx" tabindex="-1"><a class="header-anchor" href="#_5-如何使用-nginx" aria-hidden="true">#</a> 5.如何使用 Nginx</h3><blockquote><p>通过在本地使用 Nginx，从启动、更改、重启等环节来介绍 Nginx 的基本使用</p></blockquote><ul><li>如何启动 <code>sudo nginx</code></li><li>修改 nginx.conf 配置 (具体看你配置位置) <code>vim /usr/local/etc/nginx/nginx.conf</code></li><li>检查语法是否正常 <code>sudo nginx -t</code></li><li>重启 nginx <code>sudo nginx -s reload</code></li><li>创建软链接(便于管理多应用 nginx)</li></ul><blockquote><p>当我们需要管理多个网站的 nginx，nginx 文件放在一起是最好的管理方式，一般都存在/nginx/conf.d/，我们需要把配置文件丢到 /etc/nginx/conf.d/ 文件夹下，怎样才能使这个配置文件既在程序文件夹下，又在 /etc/nginx/conf.d/文件夹下呢？</p></blockquote><p>假如我们在程序文件夹下有一个 ngxin 配置文件：/home/app/app.nginx.conf 我们需要给这个文件创建一个软链接到 /etc/nginx/conf.d/ 下：<br><code>ln -s /home/app/app.example.com.nginx.conf /etc/nginx/conf.d/app.nginx.conf</code><br> 这样操作之后，当我们改应用配置文件，/etc/nginx/conf.d/ 下与之对应的配置文件也会被修改，修改后重启 nginx 就能够使新的 ngxin 配置生效了。</p>`,31);function v(k,m){const e=i("ExternalLinkIcon");return t(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("配置 HTTPS 要用到私钥 example.key 文件和 example.crt 证书文件，而申请证书文件的时候要用到 example.csr 文件。对于想了解更多关于 SSL 证书的点这里 "),n("a",u,[s("SSL 证书介绍"),c(e)])])]),d])}const h=p(l,[["render",v],["__file","nginx配置.html.vue"]]);export{h as default};
