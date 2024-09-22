import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c,f as r,b as e,d as n,a as d,e as l}from"./app-4DcLzKWR.js";const p={},i=e("h1",{id:"github-高级搜索技巧",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-高级搜索技巧","aria-hidden":"true"},"#"),n(" GitHub 高级搜索技巧")],-1),u=e("p",null,[e("code",null,"in:name <关键字>"),n(" 仓库名称带关键字查询")],-1),_=e("p",null,[e("code",null,"in:description <关键字>"),n(" 仓库描述带关键字查询")],-1),g=e("p",null,[e("code",null,"in:readme <关键字>"),n(" README 文件带关键字查询")],-1),m=l(`<p><code>stars(fork): &gt;(=) &lt;数字&gt; &lt;关键字&gt;</code> star 或 fork 数大于(或等于)指定数字的带关键字查询</p><p><code>stars(fork): 10..20 &lt;关键词&gt;</code> star 或 fork 数在 10 到 20 之间的带关键字查询</p><p><code>size:&gt;=5000 &lt;关键词&gt;</code> 限定仓库大于等于 5000K 的带关键字查询</p><p><code>pushed(created):&gt;2019-11-15 &lt;关键字&gt;</code> 更新 或 创建 日期在 2019 年 11 月 16 日之后的带关键字查询</p><p><code>license:apache-2.0 &lt;关键字&gt;</code> LICENSE 为 apache-2.0 的带关键字查询</p><p><code>language:java &lt;关键词&gt;</code> 仓库语言为 Java 的带关键字查询</p><p><code>user:&lt;用户名&gt;</code> 查询某个用户的项目</p><p><code>org:&lt;组织名&gt;</code> 查询某个组织的项目</p><p><strong>*以上查询条件可组合使用，空格隔开</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例1：搜索仓库名包含javascript，并且stars数大于1000的项目</span>
in:name javascript stars:<span class="token operator">&gt;</span><span class="token number">1000</span>

<span class="token comment"># 示例2：搜索描述中包含&quot;小程序&quot;，并且fork大于100，并且最近更新时间在2019-11-15之后的，并且使用开发语言为vue的项目</span>
in:description 小程序 fork:<span class="token operator">&gt;</span><span class="token number">100</span> pushed:<span class="token operator">&gt;</span><span class="token number">2019</span>-11-15 language:vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>*或使用高级搜索页搜索：</strong></p>`,11),h={href:"https://github.com/search/advanced",target:"_blank",rel:"noopener noreferrer"};function v(b,k){const s=a("ExternalLinkIcon");return o(),c("div",null,[i,u,_,g,r(" more "),m,e("p",null,[e("a",h,[n("https://github.com/search/advanced"),d(s)])])])}const E=t(p,[["render",v],["__file","01.GitHub高级搜索技巧.html.vue"]]);export{E as default};
