import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-37ca5a82.js";const t={},c=e(`<h2 id="一行代码全站进入悼念模式" tabindex="-1"><a class="header-anchor" href="#一行代码全站进入悼念模式" aria-hidden="true">#</a> 一行代码全站进入悼念模式</h2><p><strong>IQ 前端</strong></p><p>功能介绍 一个专注于 CSS/JS 开发技巧的前端公众号，更多前端小干货等着你喔</p><p><em>4 月 5 日</em></p><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼，国务院发布公告，决定**「2020 年 4 月 4 日举行全国性哀悼活动」**。</p><p>在此期间，全国和驻外使领馆下半旗志哀，全国停止公共娱乐活动。4 月 4 日 10 时起，全国人民默哀 3 分钟，汽车、火车、舰船鸣笛，防空警报鸣响。</p><p>哀悼</p><p><strong>「在此向全国的抗疫英雄表示致敬，历史的每一刻我们都会铭记于心」</strong>。作为互联网人，相信大家 4 月 3 日都接到临时需求，要求网站在 4 月 4 日全天全站进入悼念模式。</p><p>4 月 3 日笔者也在掘金社区发布了一条沸点，一行代码搞掂悼念模式的技巧。同时也迅速对自己负责的项目进行相关更新。</p><p>沸点</p><h3 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧</h3><p>一行代码进入全站悼念模式，把<code>&lt;html&gt;</code>替换成<code>&lt;html style=&quot;filter:grayscale(1)&quot;&gt;</code>即可，简单粗暴。当然，核心代码是<code>filter:grayscale(1)</code>，意思是**「把当前元素及其后代元素设置成 100%的灰度模式」**。</p><p>我们可把它换成类名插入到<code>&lt;html&gt;</code>中，另外如果需要兼容低版本浏览器，可看看下面的写法。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gray<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/*  现代浏览器 */</span>
    <span class="token selector">.gray</span> <span class="token punctuation">{</span>  
      <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token comment">/*  远古浏览器 */</span>
    <span class="token selector">.gray</span> <span class="token punctuation">{</span>  
      <span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">/* Old Chrome、Old Safari、Old Opera*/</span>
       filter<span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等等，是不是发现漏了<code>-moz-</code>、<code>-ms-</code>、<code>-o-</code>这些前缀呢？笔者不写上去是因为压根就没这几个前缀，不要被网上的教程欺骗了。Caniuse 能作证，有兴趣的同学可自行在 Caniuse 查询**「CSS Filter」**。</p><p>filter</p><p>当然，我们通常都是基于 Webpack 构建项目，接入 Postcss 及其插件就会自动为我们书写的 CSS 添加前缀了。</p><h3 id="存在问题" tabindex="-1"><a class="header-anchor" href="#存在问题" aria-hidden="true">#</a> 存在问题</h3><p>可能有些同学在使用上述技巧时会发现<code>absolute/fixed定位的元素</code>会出现异常，导致某些布局会发现排版错乱。</p><p>这是因为元素指定了<code>不为none的filter属性</code>时，若自身及其后代元素存在<code>absolute/fixed</code>定位，则为其创建一个新容器，使得这些<code>absolute/fixed定位的元素</code>其定位基准相对于这个新容器进行。</p><h3 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h3><p>相信出现上述问题的同学，应该都是在<code>&lt;body&gt;</code>或<code>某个主要元素</code>上设置的吧。根据上述笔者所说的原理，把<code>filter:grayscale(1)</code>放到<code>&lt;html&gt;</code>就行了。</p><p>因为不管怎样设置定位基准，<code>&lt;html&gt;</code>都是最顶层的容器，即使创建了新的定位基准元素，也不会对自身及其后代元素产生不符合预期的影响。</p><p>这也就是为什么文章开头就是直接把<code>&lt;html&gt;</code>替换成<code>&lt;html style=&quot;filter:grayscale(1)&quot;&gt;</code>。</p><h3 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h3><p>对于低版本浏览器或某些弱智浏览器，可能不支持<code>CSS Filter</code>。笔者为大家推荐使用<code>grayscale.js</code>，一个多种兼容模式的灰度模式 JS 库。</p><p>其原理也很简单，对当前元素及其后代元素的样式进行分析，提取<code>border-color</code>、<code>background-color</code>和<code>color</code>并设置成灰色，提取<code>&lt;img&gt;</code>和<code>background-image</code>的图像并使用<code>canvas</code>绘制对应的灰度图像再替换原图像。</p><p>由于使用<code>canvas绘制</code>会存在对全站图片的渲染损耗，造成不必要的卡顿，因此多图网站慎用。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p><code>CSS Filter</code>还有很多滤镜属性，本文提到的只是非常基础入门的技巧。如果想看更多<code>CSS Filter</code>特效，可参考<code>CSSgram</code>的源码，通过<code>CSS Filter</code>和<code>CSS Blen Mode</code>还原**「Instagram 风格的图片滤镜」**。</p><p>讲个<code>烂Gag</code>，通过本次设置<code>filter:grayscale(1)</code>，也顺便对某个浏览器进行悼念(<code>貌似直指IE</code>)。就是它不肯配合我们的全国性哀悼活动，放弃它，哈哈！</p>`,32),o=[c];function p(l,d){return n(),s("div",null,o)}const u=a(t,[["render",p],["__file","一行代码全站进入悼念模式.html.vue"]]);export{u as default};
