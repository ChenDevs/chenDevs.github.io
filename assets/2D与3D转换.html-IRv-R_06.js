import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as p,c as r,b as n,d as l,a as s,e}from"./app-4DcLzKWR.js";const d={},u=e(`<h2 id="css-3d-空间坐标轴" tabindex="-1"><a class="header-anchor" href="#css-3d-空间坐标轴" aria-hidden="true">#</a> css 3d 空间坐标轴</h2><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/css3d空间坐标轴.png" alt="css3d空间坐标轴" tabindex="0" loading="lazy"><figcaption>css3d空间坐标轴</figcaption></figure><h2 id="_2d-变形" tabindex="-1"><a class="header-anchor" href="#_2d-变形" aria-hidden="true">#</a> 2d 变形</h2><h3 id="旋转变形" tabindex="-1"><a class="header-anchor" href="#旋转变形" aria-hidden="true">#</a> 旋转变形</h3><ul><li>将 <code>transform</code> 属性的值设置为 <code>rotate()</code>，即可实现旋转变形</li><li><code>rotate()</code>本质上是将图形围绕 z 轴进行旋转</li><li>那么<code>rotateX()</code>、<code>rotateY()</code>就很好理解了</li><li>若角度为正，则顺时针方向旋转，否则逆时针方向旋转</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="transform-origin-属性" tabindex="-1"><a class="header-anchor" href="#transform-origin-属性" aria-hidden="true">#</a> transform-origin 属性</h3><p>可以使用 <code>transform-origin</code> 属性设置自己的自定义变换原点，默认是以中心点作为变换原点</p>`,8),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin/",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="缩放变形" tabindex="-1"><a class="header-anchor" href="#缩放变形" aria-hidden="true">#</a> 缩放变形</h3><ul><li>将 <code>transform</code> 属性的值设置为 <code>scale()</code>，即可实现缩放变形</li><li>当数值小于 1 时，表示缩小元素；大于 1 表示放大元素</li></ul><h3 id="斜切变形" tabindex="-1"><a class="header-anchor" href="#斜切变形" aria-hidden="true">#</a> 斜切变形</h3><p>将 transform 属性的值设置为 skew()，即可实现斜切变形</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>10deg<span class="token punctuation">,</span> 20deg<span class="token punctuation">)</span> &lt;!---- 第一个值是x斜切角度。第二个值为y斜切角度&gt;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="位移变形" tabindex="-1"><a class="header-anchor" href="#位移变形" aria-hidden="true">#</a> 位移变形</h3><p>// TODO 看下 https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform</p><p>将 <code>transform</code> 属性的值设置为 <code>translate()</code>，即可实现位移变形（以自己为参考点）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;!--  <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span> 作用是，往上（y轴）<span class="token punctuation">,</span>左（x轴）移动自身长宽的 50%，以使其居于中心位置。 --&gt;
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span>
<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span>200px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3d-旋转" tabindex="-1"><a class="header-anchor" href="#_3d-旋转" aria-hidden="true">#</a> 3d 旋转</h2><p>将 transform 属性的值设置为 rotateX（）或者 rotateY（），即可实现绕横轴、纵轴旋转</p><p>注：<strong>rotateZ 和 rotate 效果一样</strong></p><h3 id="perspective-属性" tabindex="-1"><a class="header-anchor" href="#perspective-属性" aria-hidden="true">#</a> perspective 属性</h3><p>perspective 属性用来定义透视强度，可以理解为“人眼到舞台的距离”，单位是 px</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  =&gt; 舞台 必须设置perspective属性
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  =&gt; 设置transform属性
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空间移动" tabindex="-1"><a class="header-anchor" href="#空间移动" aria-hidden="true">#</a> 空间移动</h2><ul><li><p>当元素进行 3D 旋转后，即可继续添加 translateX()、 translateY()、 translateZ()属性让元素在空间进行移动</p></li><li><p>以当前的旋转面形成坐标轴</p></li></ul><h3 id="制作一个正方体" tabindex="-1"><a class="header-anchor" href="#制作一个正方体" aria-hidden="true">#</a> 制作一个正方体</h3>`,18);function m(t,g){const o=a("ExternalLinkIcon"),c=a("CodePen");return p(),r("div",null,[u,n("p",null,[n("a",h,[l("transform-origin(MDN)"),s(o)])]),k,s(c,{link:"https://codepen.io/zhangfanhang/pen/YzYExrm",theme:t.$isDarkMode?"dark":"light"},null,8,["theme"])])}const b=i(d,[["render",m],["__file","2D与3D转换.html.vue"]]);export{b as default};
