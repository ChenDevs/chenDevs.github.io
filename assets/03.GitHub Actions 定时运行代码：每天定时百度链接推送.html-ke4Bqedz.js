import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as p,c,f as l,b as n,d as s,a as t,e}from"./app-EWfIkEXe.js";const u={},r=n("h1",{id:"github-actions-定时运行代码-每天定时百度链接推送",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions-定时运行代码-每天定时百度链接推送","aria-hidden":"true"},"#"),s(" GitHub Actions 定时运行代码：每天定时百度链接推送")],-1),d=n("p",null,"博客上线已经有些日子了，却发现百度迟迟没有收录我的博客页面，在百度推送工具当中除了有自动推送的代码嵌入网站之外，还有一个实时的主动推送更高效。",-1),k=n("p",null,"最近刚好了解到 GitHub Actions 的定时运行代码功能，可以用它来每天自动运行命令生成所有博客链接并进行一次性推送给百度。",-1),h=n("p",null,[s("GitHub Actions 是一个 CI/CD（持续集成/持续部署）工具，但也可用作代码运行环境。"),n("strong",null,"功能非常强大，能够玩出许多花样。")],-1),b=e(`<h2 id="百度主动链接推送" tabindex="-1"><a class="header-anchor" href="#百度主动链接推送" aria-hidden="true">#</a> 百度主动链接推送</h2><p>链接主动推送在百度站长中有介绍，如图。</p><figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200103124306.png" alt="主动提交" tabindex="0" loading="lazy"><figcaption>主动提交</figcaption></figure><p>具体使用方法就是创建一个文件<code>urls.txt</code>，文件内每行一条链接的格式写入提交的多个链接，如图。</p><figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200103124305.png" alt="urls.txt" tabindex="0" loading="lazy"><figcaption>urls.txt</figcaption></figure><p>运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type:text/plain&#39;</span> --data-binary @urls.txt <span class="token string">&quot;http://data.zz.baidu.com/urls?site=xugaoyi.com&amp;token=T5PEAzhG*****&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的地址和参数由百度站长提供。运行完命令会返回推送结果，不出意外的话就会把<code>urls.txt</code>内的所有链接一次性推送给百度。</p><p>这个方法虽然比嵌入网站头部的自动推送更高效，但是也有它的麻烦之处，就是得自己填入链接到<code>urls.txt</code>文件，然后手动运行命令。</p><h2 id="自动生成-urls-txt" tabindex="-1"><a class="header-anchor" href="#自动生成-urls-txt" aria-hidden="true">#</a> 自动生成 urls.txt</h2><p>没关系，技术的本质就是让人&quot;偷懒&quot;的。于是，我写了一个 nodejs 工具，用于把所有的博客页面链接生成到<code>urls.txt</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// baiduPush.js</span>

<span class="token doc-comment comment">/**
 * 生成百度链接推送文件
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tracer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">colorConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> matter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gray-matter&#39;</span><span class="token punctuation">)</span> <span class="token comment">// FrontMatter解析器 https://github.com/jonschlinkert/gray-matter</span>
<span class="token keyword">const</span> readFileList <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./modules/readFileList&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> urlsRoot <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;urls.txt&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 百度链接推送文件</span>
<span class="token keyword">const</span> <span class="token constant">DOMAIN</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 获取命令行传入的参数</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">DOMAIN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token string">&#39;请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://xugaoyi.com&#39;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>urlsRoot<span class="token punctuation">,</span> <span class="token constant">DOMAIN</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token function">readFileList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 读取所有md文件数据</span>

  files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">matter</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>permalink<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> link <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\r\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">DOMAIN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>permalink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
      fs<span class="token punctuation">.</span><span class="token function">appendFileSync</span><span class="token punctuation">(</span>urlsRoot<span class="token punctuation">,</span> link<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=n("code",null,"urls.txt",-1),v={href:"https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/utils/baiduPush.js",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>运行如下命令就可以生产一个包含博客所有链接的<code>urls.txt</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> utils/baiduPush.js https://xugaoyi.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>哈哈，第一个麻烦解决了😏，接下来是解决第二个需要手动运行推送命令的问题。</p><blockquote><p><strong>如果你没办法自动生成，你也可以自己手动创建一个<code>urls.txt</code>文件，放到 github 仓库。</strong></p></blockquote><h2 id="github-actions-定时运行代码" tabindex="-1"><a class="header-anchor" href="#github-actions-定时运行代码" aria-hidden="true">#</a> GitHub Actions 定时运行代码</h2>`,5),_={href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html?20191227113947#comment-last",target:"_blank",rel:"noopener noreferrer"},f={href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[s("GitHub Actions 是一个 CI/CD（持续集成/持续部署）工具，但也可用作代码运行环境。"),n("strong",null,"功能非常强大，能够玩出许多花样。")],-1),y=n("h3",{id:"配置-github-actions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-github-actions","aria-hidden":"true"},"#"),s(" 配置 GitHub Actions")],-1),w=n("code",null,".github/workflows",-1),P={href:"https://xugaoyi.com/pages/4e8444e2d534d14f/",target:"_blank",rel:"noopener noreferrer"},j=e(`<p>配置文件的第一部分是触发条件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## baiduPush.yml</span>
name: <span class="token string">&#39;baiduPush&#39;</span>

on:
  push:
  schedule:
    - cron: <span class="token string">&#39;0 23 * * *&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q=n("code",null,"name",-1),A=n("code",null,"on",-1),G={href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events-schedule",target:"_blank",rel:"noopener noreferrer"},H={href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events-schedule",target:"_blank",rel:"noopener noreferrer"},z=e(`<p>接着，就是运行流程。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jobs:
  bot:
    runs-on: ubuntu-latest <span class="token comment"># 运行环境为最新版的Ubuntu</span>
    steps:
      - name: <span class="token string">&#39;Checkout codes&#39;</span> <span class="token comment"># 步骤一，获取仓库代码</span>
        uses: actions/checkout@v1
      - name: <span class="token string">&#39;Run baiduPush.sh&#39;</span> <span class="token comment"># 步骤二，执行sh命令文件</span>
        run: <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run baiduPush <span class="token comment"># 运行命令。（注意，运行目录是仓库根目录）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C=n("code",null,"package.json",-1),N=n("code",null,"baiduPush",-1),I={href:"https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/.github/workflows/baiduPush.yml",target:"_blank",rel:"noopener noreferrer"},F=e(`<h3 id="baidupush命令在package-json配置" tabindex="-1"><a class="header-anchor" href="#baidupush命令在package-json配置" aria-hidden="true">#</a> <code>baiduPush</code>命令在<code>package.json</code>配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token string-property property">&quot;baiduPush&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node utils/baiduPush.js https://xugaoyi.com &amp;&amp; bash baiduPush.sh&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面脚本中在<code>node utils/baiduPush.js</code>的后面加入你的域名参数。运行此命令生成<code>urls.txt</code>文件，然后执行<code>baiduPush.sh</code>文件。</p><p>注意，在使用 window 系统时，请使用 git bash 命令窗运行上面的脚本。</p><blockquote><p><code>baiduPush</code>命令之所以没有放在<code>baiduPush.yml</code>的 run 里面是因为我想在本地也可以执行<code>npm run baiduPush</code>命令。</p></blockquote><h3 id="baidupush-sh执行百度推送命令" tabindex="-1"><a class="header-anchor" href="#baidupush-sh执行百度推送命令" aria-hidden="true">#</a> <code>baiduPush.sh</code>执行百度推送命令</h3><p><code>baiduPush.sh</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 百度链接推送</span>
<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type:text/plain&#39;</span> --data-binary @urls.txt <span class="token string">&quot;http://data.zz.baidu.com/urls?site=https://xugaoyi.com&amp;token=T5PEAzhGa*****&quot;</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> urls.txt <span class="token comment"># 灭迹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，把<code>urls.txt</code>文件中的所有链接一次性推送。</p><blockquote><p>baiduPush.sh 内的命令之所以没有写在<code>package.json</code>是因为我觉得命令太长了，不方便阅读。</p></blockquote><p>写好配置，推送到仓库，就会在每天的早上 7 点钟，自动运行命令生成一个包含博客所有页面链接的<code>urls.txt</code>文件，并把所有链接一次性推送到百度。麻麻再也不用担心我的网站不被收录~~😘 😘 😘</p><p>在这个基础上可以扩展，使用 GitHub Actions 满足你自己的各种定时需求。</p><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>`,13),D={href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://xugaoyi.com/pages/41f87d890d0a02af/",target:"_blank",rel:"noopener noreferrer"};function L(M,T){const a=i("ExternalLinkIcon");return p(),c("div",null,[r,d,k,h,l(" more "),b,n("p",null,[s("上面代码仅是针对我个人的博客生成链接到"),m,s("文件。更多代码在 "),n("a",v,[s("这里"),t(a)]),s("。")]),g,n("p",null,[s("今天的主角 GitHub Actions 要登场了。（相关："),n("a",_,[s("GitHub Actions 入门教程"),t(a)]),s("、"),n("a",f,[s("GitHub Actions 实现自动部署静态博客"),t(a)]),s("）")]),x,y,n("p",null,[s("触发 GitHub Actions 需要在项目仓库新建一个"),w,s("子目录，里面是 "),n("a",P,[s("YAML 格式"),t(a)]),s("配置文件，文件名可以随便取。GitHub 只要发现配置文件，就会运行 Actions。")]),j,n("p",null,[s("上面代码中，"),q,s("字段是配置文件的描述，"),A,s("字段是触发条件。我们指定两种情况下触发，第一种是代码 Push 进仓库，第二种是"),n("a",G,[s("定时任务"),t(a)]),s("，每天在国际标准时间 23 点（北京时间+8，即早上 7 点）运行。")]),n("blockquote",null,[n("p",null,[s("定时设置看"),n("a",H,[s("这里"),t(a)])])]),z,n("p",null,[s("上面代码中，指定运行环境是最新的 ubuntu，流程的第一步是从代码仓库获取代码，第二步运行两个命令，先安装项目依赖，再运行写在"),C,s("的"),N,s("命令。完整代码看 "),n("a",I,[s("这里"),t(a)])]),F,n("p",null,[n("a",D,[s("《 GitHub Actions 实现自动部署静态博客》"),t(a)])]),n("p",null,[n("a",E,[s("《解决百度无法收录搭建在 GitHub 上的静态博客的问题》"),t(a)])])])}const R=o(u,[["render",L],["__file","03.GitHub Actions 定时运行代码：每天定时百度链接推送.html.vue"]]);export{R as default};
