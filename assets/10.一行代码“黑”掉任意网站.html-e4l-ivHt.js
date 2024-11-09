import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,f as l,b as n,d as s,a as i,e as a}from"./app-qa6sU7xA.js";const r={},d=n("h1",{id:"一行代码-黑-掉任意网站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一行代码-黑-掉任意网站","aria-hidden":"true"},"#"),s(" 一行代码“黑”掉任意网站")],-1),u=n("p",null,"实用技巧：只需一行代码，轻轻一点就可以把任意网站变成暗黑模式。",-1),k=n("p",{align:"center"},[n("img",{src:"https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png",width:"500",style:{cursor:"zoom-in"}})],-1),m=a(`<p>首先我们先做一个实验，在任意网站中，打开浏览器开发者工具(F12)，在<code>Console</code>控制台输入如下代码并回车：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>filter <span class="token operator">=</span> <span class="token string">&#39;invert(85%) hue-rotate(180deg)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>神奇的事情发生了，当前打开的网站变成了暗黑模式。</p><p>::: details 原理解释</p><ol><li><code>document.documentElement</code> 获取文档对象的根元素，即<code>&lt;html&gt;</code>元素</li><li>给<code>html</code>元素的<code>.style</code>样式添加<code>filter</code>滤镜样式为<code>invert(85%) hue-rotate(180deg)</code></li><li><code>invert()</code> 反转图像。</li><li><code>hue-rotate()</code>色相旋转。</li></ol>`,5),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"filter",-1),_=a(`<p>为了更方便实用，达到轻轻一点就可以对网页施加魔法 🎉，</p><p>我们对代码做了一点点 🤏🏻 改动。（修正了滤镜对图片等元素的影响）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> docStyle <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>modeIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>modeIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> styleList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;invert(85%) hue-rotate(180deg)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;invert(100%) hue-rotate(180deg)&#39;</span>
  <span class="token punctuation">]</span>
  modeIndex <span class="token operator">=</span> modeIndex <span class="token operator">&gt;=</span> styleList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> modeIndex <span class="token operator">+</span> <span class="token number">1</span>
  docStyle<span class="token punctuation">.</span>filter <span class="token operator">=</span> styleList<span class="token punctuation">[</span>modeIndex<span class="token punctuation">]</span>
  document<span class="token punctuation">.</span>body
    <span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;img, picture, video&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
      <span class="token parameter">el</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>filter <span class="token operator">=</span> modeIndex <span class="token operator">?</span> <span class="token string">&#39;invert(1) hue-rotate(180deg)&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开浏览器书签管理器，添加新书签，在网址栏粘贴这段代码并保存：</p><p align="center"><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store@master/blog/QQ20211125-154655.1byvlo5a60xs.png" width="600" style="cursor:zoom-in;"></p><p>以后在任意网站，只需要轻轻一点<code>切换模式</code>书签就可以让它变成 85%的暗黑，再点一次就是 100%的暗黑，再点一次变回正常模式。</p><p align="center"><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store@master/blog/QQ20211125-163111.2tmjlvz28n80.png" width="600" style="cursor:zoom-in;"></p>`,7);function h(b,y){const e=o("ExternalLinkIcon");return p(),c("div",null,[d,u,k,l(" more "),m,n("p",null,[s("更多滤镜知识："),n("a",v,[g,i(e)]),s("。 :::")]),_])}const z=t(r,[["render",h],["__file","10.一行代码“黑”掉任意网站.html.vue"]]);export{z as default};
