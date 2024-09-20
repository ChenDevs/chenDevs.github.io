import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-Efa2_n6B.js";const p={},e=t(`<h1 id="css3-之-transition-过渡" tabindex="-1"><a class="header-anchor" href="#css3-之-transition-过渡" aria-hidden="true">#</a> CSS3 之 transition 过渡</h1><p>html 结构</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先给元素设置 transition 过渡，指定样式和时间，这里设置 all 全部样式都采用 0.3s 的过渡</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box1 &gt; div</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 给元素所有变化都添加过渡动画, 也可以指定唯一的过渡样式属性*/</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>鼠标经过元素测试效果</p></blockquote><div class="box1"><b>宽度过渡</b><div class="div1"></div><div class="language-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.div1:hover</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre> <div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><b>背景色过渡</b></p><div class="div2"></div><div class="language-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.div2:hover</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre> <div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><b>按贝塞尔曲线设置的过渡</b></p><div class="div3"></div><div class="language-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*贝塞尔曲线过渡*/</span>
<span class="token selector">.div3</span><span class="token punctuation">{</span><span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.39<span class="token punctuation">,</span>.62<span class="token punctuation">,</span>.74<span class="token punctuation">,</span>1.39<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token selector">.div3:hover</span><span class="token punctuation">{</span><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-25px<span class="token punctuation">,</span> -25px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre> <div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="贝塞尔曲线-cubic-bezier-x1-y1-x2-y2"><a href="#贝塞尔曲线-cubic-bezier-x1-y1-x2-y2" class="header-anchor">#</a> 贝塞尔曲线 cubic-bezier(x1,y1,x2,y2)</h3><p>通过调整贝塞尔曲线可以设置出多种动画效果，比如反弹效果等 X轴的范围是0~1，Y轴的取值没有规定，但是也不宜过大。 如：直线linear，即cubic-bezier(0,0,1,1)</p><p>贝塞尔曲线在线工具：<a href="https://cubic-bezier.com/#.17,.67,.83,.67" target="_blank" rel="noopener noreferrer">https://cubic-bezier.com/#.17,.67,.83,.67<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div><p>参考：<a href="https://www.w3school.com.cn/css3/index.asp" target="_blank" rel="noopener noreferrer">https://www.w3school.com.cn/css3/index.asp<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p>`,8),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","CSS3之transition过渡.html.vue"]]);export{d as default};
