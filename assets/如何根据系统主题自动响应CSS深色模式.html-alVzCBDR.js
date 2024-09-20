import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,f as l,b as n,d as s,a as e,e as t}from"./app-Efa2_n6B.js";const u={},r=n("h1",{id:"如何根据系统主题自动响应-css-深色模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何根据系统主题自动响应-css-深色模式","aria-hidden":"true"},"#"),s(" 如何根据系统主题自动响应 CSS 深色模式")],-1),d=n("p",{align:"center"},[n("img",{src:"https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200427163531.jpg",width:"500"})],-1),k=n("p",null,"很多人喜欢选择 APP 或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的 CSS 深色模式，根据访客的系统主题来自动响应。",-1),v=t(`<h2 id="css-深色模式-dark-mode" tabindex="-1"><a class="header-anchor" href="#css-深色模式-dark-mode" aria-hidden="true">#</a> CSS 深色模式 (Dark Mode)</h2><p>在<code>:root</code>根元素中定义变量来设置主题的颜色。我建议你也这样做，因为这样会使这个过程容易得多。我定义的变量如下:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--bg</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--textColor</span><span class="token punctuation">:</span> #004050<span class="token punctuation">;</span>
  <span class="token property">--borderColor</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong><code>:root</code></strong> 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，<strong><code>:root</code></strong> 表示 <code>&lt;html&gt;</code>元素，除了优先级更高之外，与 <code>html</code> 选择器相同。</p></blockquote><p>如果希望在样式表中使用这些变量，可以这样做</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，如果你想改变你的主题颜色，所需要做的就是修改你定义的变量，所有使用这个变量的样式都会被更新。</p><p>现在我们需要定义一组新的变量，这些变量将在调用 CSS 深色模式时使用。对我来说，深色模式的变量是这样的:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 定义深色模式的颜色 */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--bg</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 34<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--textColor</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 150<span class="token punctuation">,</span> 154<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--borderColor</span><span class="token punctuation">:</span> #2c2c3a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加深色模式自动响应" tabindex="-1"><a class="header-anchor" href="#添加深色模式自动响应" aria-hidden="true">#</a> 添加深色模式自动响应</h2><p>现在我们定义了两组变量。剩下要做的一件事就是将<code>prefers-color-scheme</code>媒体查询添加到我们的深色模式变量中。</p><p>使用您的深色模式变量并在外层添加<code>@media</code>查询</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 根据系统的深色模式响应深色变量 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--bg</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 34<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--textColor</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 150<span class="token punctuation">,</span> 154<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--borderColor</span><span class="token punctuation">:</span> #2c2c3a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"prefers-color-scheme",-1),b=t(`<p>这是真的! 如果有人正在使用一个深色模式的系统主题，并访问你的网站，将自动切换到深色模式。</p><blockquote><p>如果你的电脑系统不支持深色模式，可以使用手机测试，先把手机的系统主题调到深色模式，再打开你的网站。</p></blockquote><h2 id="js-判断深色模式" tabindex="-1"><a class="header-anchor" href="#js-判断深色模式" aria-hidden="true">#</a> JS 判断深色模式</h2><p>如果你的需求需要 js 来判断系统是否处于深色模式，可以这样做：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">&#39;(prefers-color-scheme: dark)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//深色主题</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"matchMedia",-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"MediaQueryList",-1),x=n("code",null,"matches",-1),C=n("code",null,"media",-1),S=n("code",null,"addListener",-1),L=n("code",null,"removeListener",-1),w=t(`<p><code>addListener</code>接收一个<code>MediaQueryList</code>对象作为参数。 为深色模式添加监听器，以响应系统切换到或切换出深色模式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> listeners <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">dark</span><span class="token operator">:</span> <span class="token parameter">mediaQueryList</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mediaQueryList<span class="token punctuation">.</span>matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;您切换到深色模式了！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">light</span><span class="token operator">:</span> <span class="token parameter">mediaQueryList</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mediaQueryList<span class="token punctuation">.</span>matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;您切换到浅色模式了！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">&#39;(prefers-color-scheme: dark)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>listeners<span class="token punctuation">.</span>dark<span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">&#39;(prefers-color-scheme: light)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>listeners<span class="token punctuation">.</span>light<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>我们不仅可以在布局方面响应不同尺寸屏幕，还可以按系统主题响应深色模式。我相信你的深夜访客，或者那些喜欢深色模式的人，会感谢你的。</p>`,4);function j(M,z){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,d,k,l(" more "),v,n("blockquote",null,[n("p",null,[n("a",m,[h,s("文档"),e(a)])])]),b,n("blockquote",null,[n("p",null,[n("a",_,[g,e(a)]),s("方法返回一个"),n("a",f,[y,e(a)]),s("对象，该对象具有属性"),x,s("、"),C,s("，具有方法"),S,s("、"),L,s("。")])]),w])}const q=o(u,[["render",j],["__file","如何根据系统主题自动响应CSS深色模式.html.vue"]]);export{q as default};
