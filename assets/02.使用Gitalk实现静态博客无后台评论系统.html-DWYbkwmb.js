import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as l,f as r,b as n,d as s,a as e,e as t}from"./app-iqR_qDjC.js";const c={},u=n("h1",{id:"使用-gitalk-实现静态博客无后台评论系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-gitalk-实现静态博客无后台评论系统","aria-hidden":"true"},"#"),s(" 使用 Gitalk 实现静态博客无后台评论系统")],-1),d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),k=n("p",null,"Gitalk，一个基于 Github Issue 和 Preact 开发的评论插件。",-1),m=n("p",null,"下面我们来用它在 vuepress 搭建的博客中搭建评论区吧",-1),v=n("h2",{id:"准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),s(" 准备")],-1),b=n("p",null,"使用一个新的东西首先当然是要了解它",-1),g={href:"https://gitalk.github.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#"),s(" 实现")],-1),_={href:"https://github.com/gitalk/gitalk/blob/master/readme-cn.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/dongyuanxin/vuepress-plugin-comment",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> vuepress-plugin-comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p><code>options</code>的配置和<code>Gitalk</code>的配置相同</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;vuepress-plugin-comment&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">choosen</span><span class="token operator">:</span> <span class="token string">&#39;gitalk&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">clientID</span><span class="token operator">:</span> <span class="token string">&#39;GitHub Application Client ID&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> <span class="token string">&#39;GitHub Application Client Secret&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;GitHub repo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">&#39;GitHub repo owner&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;GitHub repo owner and collaborators, only these guys can initialize github issues&#39;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">distractionFreeMode</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w=n("strong",null,"GitHub Application",-1),G={href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"Authorization callback URL",-1),H=t(`<figure><img src="https://raw.githubusercontent.com/xugaoyi/image_store/master/blog/QQ截图20191220124134.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>申请完成就会得 Client ID 和 Client Secret。然后把对应参数填写到配置中，例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;vuepress-plugin-comment&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">choosen</span><span class="token operator">:</span> <span class="token string">&#39;gitalk&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">clientID</span><span class="token operator">:</span> <span class="token string">&#39;a6e*******4709b88b&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> <span class="token string">&#39;f0e***************beb8b2d54d7241&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;blog&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub 仓库</span>
          <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">&#39;xugaoyi&#39;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub仓库所有者</span>
          <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;xugaoyi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 对仓库有写权限的人</span>
          <span class="token literal-property property">distractionFreeMode</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好之后重启项目就发现页面上多了一个评论区，说明评论功能实现啦。但还是有一些 bug，继续完善它~</p><h3 id="bug-修复" tabindex="-1"><a class="header-anchor" href="#bug-修复" aria-hidden="true">#</a> BUG 修复</h3><p><strong>评论区与博客样式不匹配</strong></p><p>解决办法：新增全局样式文件<code>.vuepress/styles/index.styl</code>，写入样式</p><div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token selector">#vuepress-plugin-comment</span>
  <span class="token property-declaration"><span class="token property">max-width</span> $contentWidth</span>
  <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span> auto</span>
  <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">2</span><span class="token unit">rem</span> <span class="token number">2.5</span><span class="token unit">rem</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> <span class="token punctuation">(</span>max-width<span class="token punctuation">:</span> $MQNarrow<span class="token punctuation">)</span></span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">2</span><span class="token unit">rem</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> <span class="token punctuation">(</span>max-width<span class="token punctuation">:</span> $MQMobileNarrow<span class="token punctuation">)</span></span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">1.5</span><span class="token unit">rem</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>评论区出现 Error: Validation Failed.</strong></p><p>问题分析：当页面 链接过长 或 存在中文链接，导致整个链接字符串长度超过 50 时，会造成请求 issues 接口失败，出现 422 状态码。（中文链接会自动转码，变得很长，id 参数默认取的是链接，长度不能超过 50）</p><p>解决办法：手动设置 id 取值，限制长度不超过 50。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">choosen</span><span class="token operator">:</span> <span class="token string">&#39;gitalk&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;&lt;%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  页面的唯一标识,长度不能超过50</span>
   <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;「评论」&lt;%- document.title %&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub issue 的标题</span>
   <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Gitalk&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Comment&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// GitHub issue 的标签</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token string">&quot;&lt;%- document.title %&gt;：&lt;%- window.location.origin + (frontmatter.to.path || window.location.pathname) %&gt;&quot;</span> <span class="token comment">// GitHub issue 的内容</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>访问变量时，如 <code>$frontmatter</code> 或 <code>window</code>等，请使用 <strong>EJS</strong> 语法。因为在配置中不能使用回调函数，会被 vuepress 过滤，因此使用 <strong>EJS</strong> 语法。 ——插件作者文档说明</p></blockquote><p><strong>切换页面后评论区内容还是上一个页面的评论</strong></p><p>解决：id 在获取<code>path</code>时使用 <code>frontmatter.to.path</code>，插件内置了 \`\`frontmatter.from<code>、</code>frontmatter.to\`。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">choosen</span><span class="token operator">:</span> <span class="token string">&#39;gitalk&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;&lt;%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  页面的唯一标识,长度不能超过50</span>
   <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;「评论」&lt;%- document.title %&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// GitHub issue 的标题</span>
   <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Gitalk&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Comment&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// GitHub issue 的标签</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token string">&quot;&lt;%- document.title %&gt;：&lt;%- window.location.origin + (frontmatter.to.path || window.location.pathname) %&gt;&quot;</span> <span class="token comment">// GitHub issue 的内容</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function j(C,I){const a=o("ExternalLinkIcon");return i(),l("div",null,[u,d,k,m,r(" more "),v,b,n("p",null,[s("Gitalk demo："),n("a",g,[s("https://gitalk.github.io/"),e(a)])]),n("p",null,[s("Gitalk github："),n("a",h,[s("https://github.com/gitalk/gitalk"),e(a)])]),y,n("p",null,[s("如何实现？最好的方法我认为是看"),n("a",_,[s("官方文档"),e(a)]),s("，这里我只是记录一下实现的步骤。")]),n("p",null,[s("使用一个别人已经开发好的 "),n("a",f,[s("vuepress-plugin-comment"),e(a)]),s(" 插件来帮助我们把 Gitalk 应用到 vuepress 搭建的静态博客。")]),x,n("p",null,[s("需要 "),w,s("，如果没有 "),n("a",G,[s("点击这里申请"),e(a)]),s("，"),q,s(" 填写当前使用插件页面的域名。")]),H])}const E=p(c,[["render",j],["__file","02.使用Gitalk实现静态博客无后台评论系统.html.vue"]]);export{E as default};
