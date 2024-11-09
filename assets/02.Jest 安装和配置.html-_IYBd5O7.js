import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as r,c,b as s,d as n,a as e,e as t}from"./app-xxrfxtC2.js";const l={},i=t(`<h1 id="jest-安装和配置" tabindex="-1"><a class="header-anchor" href="#jest-安装和配置" aria-hidden="true">#</a> Jest 安装和配置</h1><h2 id="jest-安装" tabindex="-1"><a class="header-anchor" href="#jest-安装" aria-hidden="true">#</a> Jest 安装</h2><p>由于我们的项目是使用 <code>typescript-library-starter</code> 初始化的，已经内置了 Jest 的安装，但是安装的版本却不是最新的，我们可以对 <code>package.json</code> 中的相关依赖版本做修改，重新安装。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;@types/jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^24.0.13&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^24.8.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jest-config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^24.8.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ts-jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^24.0.2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.4.5&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，这里都是目前最新的版本，未来如果有版本升级的话，可以自行更新到最新版本。</p></blockquote><p>更改版本后，在命令行再次执行 <code>npm install</code> 即可安装到相应版本。</p><h2 id="jest-配置" tabindex="-1"><a class="header-anchor" href="#jest-配置" aria-hidden="true">#</a> Jest 配置</h2><p>在 <code>package.json</code> 文件中有 <code>jest</code> 字段，对应 Jest 配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;.(ts|tsx)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-jest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;testEnvironment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsdom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;testRegex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/test/.*\\\\.(test|spec)\\\\.(ts)$&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleFileExtensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;js&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;coverageThreshold&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;branches&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
      <span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
      <span class="token property">&quot;lines&quot;</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
      <span class="token property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token number">95</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collectCoverageFrom&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/*.{js,ts}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/**/*.{js,ts}&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;setupFilesAfterEnv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;rootDir&gt;/test/boot.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们就分别来看这几个配置的含义。</p>`,10),u={href:"https://jestjs.io/docs/en/configuration#transform-object-string-string",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>简单地说就是一种转换器配置，比如我们这里的</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;.(ts|tsx)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-jest&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示的就是使用 <code>ts-jest</code> 工具把 <code>.ts</code> 和 <code>.tsx</code> 文件内容转换成 JavaScript，因为我们也是使用 TypeScript 编写测试代码，而 Node.js 是不能直接支持 TypeScript 的，所以需要配置转换器。</p>`,3),v={href:"https://jestjs.io/docs/en/configuration#testenvironment-string",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>测试环境。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;testEnvironment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsdom&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示它是一个类浏览器的测试环境，我们可以使用浏览器环境中的一些 API。</p>`,3),m={href:"https://jestjs.io/docs/en/configuration#testregex-string-array-string",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>要测试文件的正则表达式。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;testRegex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/test/.*\\\\.(test|spec)\\\\.(ts)$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示 <code>test</code> 目录下所有以 <code>.test.ts</code> 和 <code>.spec.ts</code> 的文件都需要跑测试。</p>`,3),q={href:"https://jestjs.io/docs/en/configuration#modulefileextensions-array-string",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>模块文件扩展名，当你去引入一个模块并没有指定扩展名的时候，它会依次尝试去添加这些扩展名去找你引入的模块文件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;moduleFileExtensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;tsx&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;js&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示优先找 <code>.ts</code> 的模块、然后是 <code>.tsx</code>，最后是 <code>.js</code>。</p>`,3),h={href:"https://jestjs.io/docs/en/configuration#coveragethreshold-object",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>测试覆盖率的阈值设定，当我们的测试覆盖率达不到阈值的时候，测试会失败。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;coverageThreshold&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;branches&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lines&quot;</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
    <span class="token property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token number">95</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示全局的代码分支覆盖率要达到 <code>90%</code>，方法覆盖率要达到 <code>95%</code>，代码行数覆盖率达到 <code>95%</code>，声明覆盖率达到 <code>95%</code>。</p>`,3),_={href:"https://jestjs.io/docs/en/configuration#collectcoveragefrom-array",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/jonschlinkert/micromatch",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;collectCoverageFrom&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;src/*.{js,ts}&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;src/**/*.{js,ts}&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示收集 <code>src</code> 目录以及它的所有子目录中的 <code>js</code> 和 <code>ts</code> 文件的测试覆盖率。</p>`,2),x={href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>测试框架安装后立即执行的代码文件列表。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;setupFilesAfterEnv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;&lt;rootDir&gt;/test/boot.ts&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示每次跑具体测试代码之前会先运行 <code>&lt;rootDir&gt;/test/boot.ts</code> 中的代码，<code>&lt;rootDir&gt;</code> 表示当前项目的根目录。这个配置在之后的章节我们会具体介绍。</p>`,3),J={href:"https://jestjs.io/docs/en/configuration",target:"_blank",rel:"noopener noreferrer"},F=s("p",null,[n("至此，我们学习了 Jest 的安装和配置，下节课我们就开始编写 "),s("code",null,"ts-axios"),n(" 库的单元测试。")],-1);function T(N,A){const a=p("ExternalLinkIcon");return r(),c("div",null,[i,s("ul",null,[s("li",null,[s("a",u,[n("transform"),e(a)])])]),d,s("ul",null,[s("li",null,[s("a",v,[n("testEnvironment"),e(a)])])]),k,s("ul",null,[s("li",null,[s("a",m,[n("testRegex"),e(a)])])]),b,s("ul",null,[s("li",null,[s("a",q,[n("moduleFileExtensions"),e(a)])])]),g,s("ul",null,[s("li",null,[s("a",h,[n("coverageThreshold"),e(a)])])]),j,s("ul",null,[s("li",null,[s("a",_,[n("collectCoverageFrom"),e(a)])])]),s("p",null,[n("收集指定文件的测试覆盖率(即使你没为这些文件编写测试)，它的值为 "),s("a",f,[n("glob patterns"),e(a)]),n(" 类型。")]),y,s("ul",null,[s("li",null,[s("a",x,[n("setupFilesAfterEnv"),e(a)])])]),E,s("p",null,[n("其他关于 Jest 的配置，感兴趣的同学可以去"),s("a",J,[n("官网"),e(a)]),n("做扩展学习。")]),F])}const S=o(l,[["render",T],["__file","02.Jest 安装和配置.html.vue"]]);export{S as default};
