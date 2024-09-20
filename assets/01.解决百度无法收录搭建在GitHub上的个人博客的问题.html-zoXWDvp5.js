import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,d as e,a,f as r,e as i}from"./app-Efa2_n6B.js";const d={},p=n("h1",{id:"解决百度无法收录搭建在-github-上的静态博客的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解决百度无法收录搭建在-github-上的静态博客的问题","aria-hidden":"true"},"#"),e(" 解决百度无法收录搭建在 GitHub 上的静态博客的问题")],-1),u={href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),e(" 背景")],-1),b=n("p",null,[e("由于 GitHub 禁止百度爬虫访问，造成托管在 GitHub Pages 上的博客无法被百度收录。相关问题可以通过百度站长平台的"),n("code",null,"抓取诊断"),e("再现，每次都是 403 Forbidden 的错误。")],-1),v=n("h2",{id:"解决方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解决方案","aria-hidden":"true"},"#"),e(" 解决方案")],-1),g={href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"步骤：",-1),_={href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://xugaoyi.com/pages/9a7ee40fc232253e/",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>2、我的博客项目使用 vuepress 搭建的，使用的是如下自动部署脚本，同时将代码推送到 github 和 conding。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># github</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;b.xugaoyi.com&#39;</span> <span class="token operator">&gt;</span> CNAME
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:xugaoyi/blog.git master:gh-pages <span class="token comment"># 发布到github</span>

<span class="token comment"># coding</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;xugaoyi.com&#39;</span> <span class="token operator">&gt;</span> CNAME
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@git.dev.tencent.com:xugaoyi/xugaoyi.git master <span class="token comment"># 发布到coding</span>

<span class="token builtin class-name">cd</span> - <span class="token comment"># 退回开始所在目录</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>因为我想给两个平台上绑定不同的自定义域名，因此我分开创建了 CNAME 文件。</p></blockquote><p>3、有自定义域名的，也可以在 coding pages 绑定自定义域名，域名 DNS 解析中添加 CNAME 记录指向 coding pages 的站点地址即可。（没有自定义域名的可忽略，同时把自动部署脚本中的创建 CNAME 文件的脚本去掉）</p>`,4),x={href:"https://ziyuan.baidu.com/linksubmit/index",target:"_blank",rel:"noopener noreferrer"},y=i(`<h3 id="如何知道百度有没有收录" tabindex="-1"><a class="header-anchor" href="#如何知道百度有没有收录" aria-hidden="true">#</a> 如何知道百度有没有收录？</h3><p>在百度搜索框中使用 site:&lt;链接地址&gt;，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>site:xugaoyi.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>`,4),N={href:"https://xugaoyi.com/pages/f44d2f9ad04ab8d3/",target:"_blank",rel:"noopener noreferrer"};function E(A,G){const s=o("ExternalLinkIcon");return c(),l("div",null,[p,n("p",null,[e("::: warning 如果你正在寻找本博客的搭建文档，博主建议您查看这个仓库的"),n("a",u,[e("README"),a(s)]),e("。 :::")]),m,b,r(" more "),v,n("p",null,[e("同时将博客同时同步托管到 GitHub Pages 和"),n("a",g,[e("coding pages"),a(s)]),e("上，解决百度不收录问题。最后发现在国内使用 coding pages 打开速度特别快，而且还会被百度收录，因此我把 coding pages 的站点作为主站点，原本在 github pages 的作为分站点。")]),h,n("p",null,[e("1、注册"),n("a",_,[e("coding"),a(s)]),e("账号，创建仓库，把代码推送到 coding 仓库，并开启 pages 服务。")]),n("blockquote",null,[n("p",null,[e("git 操作部分和使用 github 的差不多，不了解 git 操作的可以看我的另一篇文章："),n("a",k,[e("Git 使用手册"),a(s)])])]),f,n("p",null,[e("最后，使用百度站长的抓取诊断，发现抓取成功啦，再使用百度站长的"),n("a",x,[e("链接提交"),a(s)]),e("功能，把链接提交给百度，过一段时间就可能在百度搜索中搜索到啦。")]),y,n("p",null,[n("a",N,[e("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),a(s)])])])}const M=t(d,[["render",E],["__file","01.解决百度无法收录搭建在GitHub上的个人博客的问题.html.vue"]]);export{M as default};
