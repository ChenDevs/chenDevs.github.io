import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,f as t,b as e,d as n,a as s,e as d}from"./app-EWfIkEXe.js";const p={},r=e("h1",{id:"flex-布局语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flex-布局语法","aria-hidden":"true"},"#"),n(" flex 布局语法")],-1),u=e("h2",{id:"一、flex-布局是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、flex-布局是什么","aria-hidden":"true"},"#"),n(" 一、flex 布局是什么？")],-1),g=e("p",null,'Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。',-1),m=e("p",null,[e("strong",null,"任何一个容器"),n(" 都可以指定为 Flex 布局。")],-1),f=d(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>行内元素</strong> 也可以使用 Flex 布局。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webkit 内核的浏览器，必须加上<code>-webkit</code>前缀。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>，设为 Flex 布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</p><h2 id="二、基本概念" tabindex="-1"><a class="header-anchor" href="#二、基本概念" aria-hidden="true">#</a> 二、基本概念</h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>容器默认存在两根轴：水平的主轴（或 x 轴）（main axis）和垂直的交叉轴（或 y 轴）（cross axis）。主轴的开始位置（与边框的交叉点）叫做<code>main start</code>，结束位置叫做<code>main end</code>；交叉轴的开始位置叫做<code>cross start</code>，结束位置叫做<code>cross end</code>。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做<code>main size</code>，占据的交叉轴空间叫做<code>cross size</code>。</p><h2 id="三、容器的属性" tabindex="-1"><a class="header-anchor" href="#三、容器的属性" aria-hidden="true">#</a> 三、容器的属性</h2><p>以下 6 个属性设置在容器上。(即设置在 display: flex; 的元素上)</p><blockquote><ul><li><p>flex-direction 方向 决定项目的排列方向</p></li><li><p>flex-wrap 换行</p></li><li><p>flex-flow 方向和换行的简写</p></li><li><p>justify-content 主轴对齐方式</p></li><li><p>align-items 交叉轴对齐方式</p></li><li><p>align-content 多轴线的对齐方式</p></li></ul></blockquote><h3 id="_3-1-flex-direction-属性" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction-属性" aria-hidden="true">#</a> 3.1 flex-direction 属性</h3><p><code>flex-direction</code>属性决定主轴的方向（即项目的排列方向）。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>它可能有 4 个值。</p><blockquote><ul><li><code>row</code>（默认值）：主轴为水平方向，起点在左端。</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端。</li><li><code>column</code>：主轴为垂直方向，起点在上沿。</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿。</li></ul></blockquote><h3 id="_3-2-flex-wrap-属性" tabindex="-1"><a class="header-anchor" href="#_3-2-flex-wrap-属性" aria-hidden="true">#</a> 3.2 flex-wrap 属性</h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。</p><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>它可能取三个值。</p><p>（1）<code>nowrap</code>（默认）：不换行。会压缩项目的宽度</p><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（2）<code>wrap</code>：换行，第一行在上方。</p><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>（3）<code>wrap-reverse</code>：换行，第一行在下方。</p><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-3-flex-flow" tabindex="-1"><a class="header-anchor" href="#_3-3-flex-flow" aria-hidden="true">#</a> 3.3 flex-flow</h3><p><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-4-justify-content-属性" tabindex="-1"><a class="header-anchor" href="#_3-4-justify-content-属性" aria-hidden="true">#</a> 3.4 justify-content 属性</h3><p><code>justify-content</code>属性定义了项目在主轴上的对齐方式。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between |
    space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>它可能取 5 个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><blockquote><ul><li><code>flex-start</code>（默认值）：左对齐</li><li><code>flex-end</code>：右对齐</li><li><code>center</code>： 居中</li><li><code>space-between</code>：两端对齐，项目之间的间隔都相等。</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul></blockquote><h3 id="_3-5-align-items-属性" tabindex="-1"><a class="header-anchor" href="#_3-5-align-items-属性" aria-hidden="true">#</a> 3.5 align-items 属性</h3><p><code>align-items</code>属性定义项目在交叉轴上如何对齐。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>它可能取 5 个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><blockquote><ul><li><code>flex-start</code>：交叉轴的起点对齐。</li><li><code>flex-end</code>：交叉轴的终点对齐。</li><li><code>center</code>：交叉轴的中点对齐。</li><li><code>baseline</code>: 项目的第一行文字的基线对齐。</li><li><code>stretch</code>（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。</li></ul></blockquote><h3 id="_3-6-align-content-属性" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content-属性" aria-hidden="true">#</a> 3.6 align-content 属性</h3><p><code>align-content</code>属性定义了多根轴线的对齐方式（<strong>一排项目为一根轴线</strong>）。如果项目只有一根轴线，该属性不起作用。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around
    | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>该属性可能取 6 个值。</p><blockquote><ul><li><code>flex-start</code>：与交叉轴的起点对齐。</li><li><code>flex-end</code>：与交叉轴的终点对齐。</li><li><code>center</code>：与交叉轴的中点对齐。</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch</code>（默认值）：轴线占满整个交叉轴。</li></ul></blockquote><h2 id="四、项目的属性" tabindex="-1"><a class="header-anchor" href="#四、项目的属性" aria-hidden="true">#</a> 四、项目的属性</h2><p>以下 6 个属性设置在项目上。</p><blockquote><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code> <code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写</li><li><code>align-self</code></li></ul></blockquote><h3 id="_4-1-order-属性" tabindex="-1"><a class="header-anchor" href="#_4-1-order-属性" aria-hidden="true">#</a> 4.1 order 属性</h3><p><code>order</code>属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_4-2-flex-grow-属性" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow-属性" aria-hidden="true">#</a> 4.2 flex-grow 属性</h3><p><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果所有项目的<code>flex-grow</code>属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="_4-3-flex-shrink-属性" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink-属性" aria-hidden="true">#</a> 4.3 flex-shrink 属性</h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果所有项目的<code>flex-shrink</code>属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的<code>flex-shrink</code>属性为 0，其他项目都为 1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><h3 id="_4-4-flex-basis-属性" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis-属性" aria-hidden="true">#</a> 4.4 flex-basis 属性</h3><p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如 350px），则项目将占据固定空间。</p><h3 id="_4-5-flex-属性" tabindex="-1"><a class="header-anchor" href="#_4-5-flex-属性" aria-hidden="true">#</a> 4.5 flex 属性</h3><p><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。后两个属性可选。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt; <span class="token string">&#39;flex-grow&#39;</span> &gt; &lt; <span class="token string">&#39;flex-shrink&#39;</span> &gt;? || &lt; <span class="token string">&#39;flex-basis&#39;</span> &gt; ]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>该属性有两个快捷值：<code>auto</code> (<code>1 1 auto</code>) 和 none (<code>0 0 auto</code>)。</p><p><strong>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</strong></p><h3 id="_4-6-align-self-属性" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self-属性" aria-hidden="true">#</a> 4.6 align-self 属性</h3><p><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。默认值为<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code>。</p><blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><figure><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>该属性可能取 6 个值，除了 auto，其他都与 align-items 属性完全一致。</p><p>（完）</p>`,85),b=e("p",null,"来源：",-1),h={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"​",-1);function k(w,_){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,u,g,m,t(" more "),f,e("blockquote",null,[b,e("p",null,[e("a",h,[n("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),s(a)])]),e("p",null,[e("a",x,[n("http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"),s(a)])])]),v])}const z=i(p,[["render",k],["__file","flex布局语法.html.vue"]]);export{z as default};
