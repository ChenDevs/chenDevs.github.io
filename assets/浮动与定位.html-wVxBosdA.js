import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as d,a as s,b as n,d as a,e as p}from"./app-TnKl6VKN.js";const r={},u=p('<h2 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h2><p>最<strong>本质</strong>功能：<span style="color:red;">实现并排</span></p><h3 id="浮动使用的要点" tabindex="-1"><a class="header-anchor" href="#浮动使用的要点" aria-hidden="true">#</a> 浮动使用的要点</h3><ul><li>要浮动，并排的盒子都要设置浮动</li><li>父盒子要有足够的宽度，否则子盒子会掉下去</li></ul><h3 id="浮动的顺序贴靠特性" tabindex="-1"><a class="header-anchor" href="#浮动的顺序贴靠特性" aria-hidden="true">#</a> 浮动的顺序贴靠特性</h3><p>子盒子会按顺序进行贴靠，如果没有足够空间，则会寻找再前一个兄弟元素</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/浮动顺序贴靠性.png" alt="浮动顺序贴靠性" tabindex="0" loading="lazy"><figcaption>浮动顺序贴靠性</figcaption></figure><h3 id="浮动的元素一定能设置宽高" tabindex="-1"><a class="header-anchor" href="#浮动的元素一定能设置宽高" aria-hidden="true">#</a> 浮动的元素一定能设置宽高</h3><p>浮动的元素不再区分块级元素、行内元素，已经<strong>脱离了标准文档流</strong>，一律能够设置宽度和高度，即使它是 <code>span</code> 或者 <code>a</code> 标签</p><h3 id="利用浮动实现网页布局" tabindex="-1"><a class="header-anchor" href="#利用浮动实现网页布局" aria-hidden="true">#</a> 利用浮动实现网页布局</h3><ul><li><strong>垂直显示的盒子，不要设置浮动</strong>，只有并排显示的盒子才要设置浮动</li><li>“大盒子带着小盒子跑”，一个大盒子中，又是一个小天地内部可以继续使用浮动</li></ul><h3 id="bfc-规范和浏览器差异" tabindex="-1"><a class="header-anchor" href="#bfc-规范和浏览器差异" aria-hidden="true">#</a> BFC 规范和浏览器差异</h3><p><code>BFC</code>（ <code>Box Formatting Context</code>，块级格式化上下文）是页面上的一个<strong>隔离的独立容器</strong>，容器里面的子元素不会影响到外面的元素，反之亦然</p><p>一个盒子不设置 <code>height</code>，当内容子元素都浮动时，无法撑起自身我们就说这个盒子<strong>没有形成 <code>BFC</code></strong></p>',14),h=p(`<h4 id="如何创建-bfc" tabindex="-1"><a class="header-anchor" href="#如何创建-bfc" aria-hidden="true">#</a> 如何创建 BFC</h4><ol><li><code>float</code> 的值不是 <code>none</code></li><li><code>positon </code>的值不是 <code>static</code> 或者 <code>relative</code></li><li><code>display</code> 的值是 <code>inline-block</code>,<code>flex</code>,或者 <code>inline-flex</code></li><li><code>overflow:hidden</code></li></ol><p>::: tip overflow:hidden 的三个作用</p><ol><li><strong>溢出隐藏</strong>:给一个元素中设置 <code>overflow:hidden</code>，那么该元素的内容若超出了给定的宽度和高度属性，那么超出的部分将会被隐藏，不占位。一般情况下，在页面中，一般溢出后会显示省略号，比如，当一行文本超出固定宽度就隐藏超出的内容显示省略号。</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*溢出隐藏*/</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> <span class="token comment">/*规定文本不进行换行*/</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/*当对象内文本溢出时显示省略标记（...）*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>清除浮动</strong>(即形成<code>BFC</code>)</li><li><strong>解决外边距塌陷</strong>(即形成<code>BFC</code>)</li></ol><p>:::</p><h4 id="bfc-的作用" tabindex="-1"><a class="header-anchor" href="#bfc-的作用" aria-hidden="true">#</a> BFC 的作用</h4><ol><li><strong>清除浮动</strong></li><li><code>BFC</code> 可以取消盒子<code> margin</code> 塌陷</li><li><code>BFC</code> 可以可以阻止元素被浮动元素覆盖(没有实战意义，本身是一种错误的现象，要浮动都浮动)</li></ol><h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3><p>清除浮动：浮动一定要封闭到一个盒子中，否则就会对页面后续元素产生影响</p><h4 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法" aria-hidden="true">#</a> 清除浮动的方法</h4><p>父盒子没有设置高度，就会出现下图的问题:</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/清除浮动.png" alt="清除浮动" tabindex="0" loading="lazy"><figcaption>清除浮动</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        <span class="token selector">p</span><span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>orange<span class="token punctuation">;</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为盒子内容不知道的情况下不好设置高度,可采用下面几张方法：</p><ol><li><p>让内部有浮动的父盒子形成 <code>BFC</code>，它就能关闭住内部的浮动。此时最好的方法就是 <code>overflow:hidden</code> 属性</p></li><li><p>给后面的父盒子设置 <code>clear:both</code> 属性。<code>clear</code> 表示清除浮动对自己的影响，<code>both</code> 表示左右浮动都清除（<strong>不太推荐，此时两个父盒子的高度仍然为 0,<code>margin</code> 失效</strong>）</p></li><li><p>使用<code>::after </code>伪元素给盒子添加最后一个子元素，并且给<code>::after</code> 设置 <code>clear:both</code>(<code>margin </code>有效)</p></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*   给两个盒子加上clearfix类名    */</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token comment">/*  一定要转为块级元素  */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在两个盒子之间加一个<code>div</code> 盒子，设置<code> clear:both</code>（<strong>此时两个父盒子仍然没有高度，<code>margin</code> 失效，但是可以通过设置两个父盒子之间的盒子的高度实现缝隙效果</strong>）</li></ol><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2><h3 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> 相对定位</h3><p><code>position:relative;</code></p><ul><li>盒子可以<strong>相对自己原来的位置</strong>进行位置调整，称为相对定位</li><li>相对定位的元素，会在“老家留坑”，本质上仍然是在原来的位置，只不过渲染在新的地方而已，渲染的图形可以比喻成“影子”，<strong>不会对页面其他元素产生任何影响</strong>，有可能会出现覆盖其他元素的情况</li></ul><h4 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h4><ol><li>微调元素位置</li><li>相对定位的元素，可以用作绝对定位的参考盒子</li></ol><h3 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h3><p><code>position:absloute;</code></p><p>盒子可以<strong>在浏览器中以坐标进行位置精准描述</strong>，拥有自己的绝对位置</p><h4 id="绝对定位脱离标准文档流" tabindex="-1"><a class="header-anchor" href="#绝对定位脱离标准文档流" aria-hidden="true">#</a> 绝对定位脱离标准文档流</h4><ul><li>绝对定位的元素脱离标准文档流，将释放自己的位置，对其他元素不会产生任何干扰，而是对它们进行压盖。</li><li>脱离标准文档流的方法：<strong>浮动、绝对定位、固定定位</strong></li></ul><h4 id="绝对定位的参考盒子" tabindex="-1"><a class="header-anchor" href="#绝对定位的参考盒子" aria-hidden="true">#</a> 绝对定位的参考盒子</h4><ul><li>绝对定位的盒子会以自己祖先元素中，离自己最近的拥有定位属性的盒子，当做基准点。这个盒子通常是相对定位的，所以这个性质也叫作“ <strong>子绝父相</strong> ”</li><li>如果所有的父元素都没有显式地定义<code>position</code>属性，绝对定位的盒子会根据浏览器视口来定位</li></ul><h4 id="绝对定位的盒子垂直水平居中" tabindex="-1"><a class="header-anchor" href="#绝对定位的盒子垂直水平居中" aria-hidden="true">#</a> 绝对定位的盒子垂直水平居中</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absloute<span class="token punctuation">;</span>
<span class="token comment">/* 距离浏览器上边50%  */</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> -自己高度的一半<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -自己宽度的一半<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在不知道自身宽高的情况下，可以利用 <code>translate()</code>来进行水平垂直居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token comment">/* translate(-50%,-50%)作用是，往上（x轴）,左（y轴）移动自身长宽的 50%，以使其居于中心位置。  */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="堆叠顺序-z-index-属性" tabindex="-1"><a class="header-anchor" href="#堆叠顺序-z-index-属性" aria-hidden="true">#</a> 堆叠顺序 z-index 属性</h4><p><code>z-index</code> 仅能在定位元素上奏效,元素可拥有负的<code>z-index</code>属性值</p><p><code>z- index </code>数值大的能够压住数值小的</p><h4 id="用途-1" tabindex="-1"><a class="header-anchor" href="#用途-1" aria-hidden="true">#</a> 用途</h4><ol><li>压盖、遮罩效果</li><li><code>css</code>精灵图</li><li>结合 <code>js</code> 实现动画</li></ol><h3 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位" aria-hidden="true">#</a> 固定定位</h3><p><code>position:fixed</code></p><ul><li>固定定位与绝对定位相似，但固定定位是相对于浏览器视口本身。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素</li><li>固定定位脱离标准文档流</li></ul><h4 id="用途-2" tabindex="-1"><a class="header-anchor" href="#用途-2" aria-hidden="true">#</a> 用途</h4><ol><li>返回顶部</li><li>楼层导航</li></ol><blockquote><p>代码见： <strong>BOM 章节</strong></p></blockquote><h3 id="粘性定位" tabindex="-1"><a class="header-anchor" href="#粘性定位" aria-hidden="true">#</a> 粘性定位</h3>`,48),k={href:"https://juejin.cn/post/6953145161895378951",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[n("code",null,"position: sticky;")],-1),v=n("ul",null,[n("li",null,[a("粘性元素根据滚动位置在相对"),n("code",null,"relative"),a("和固定"),n("code",null,"fixed"),a("之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置")]),n("li",null,"粘性定位元素不会脱离文档流，依然占据文档流的指定位置")],-1);function m(e,b){const t=o("CodePen"),c=o("ExternalLinkIcon");return l(),d("div",null,[u,s(t,{link:"https://codepen.io/zhangfanhang/pen/qBpVryw",theme:e.$isDarkMode?"dark":"light"},null,8,["theme"]),h,n("p",null,[n("a",k,[a("position:sticky 粘性定位的几种巧妙应用"),s(c)])]),g,v,s(t,{link:"https://codepen.io/zhangfanhang/pen/GRyOWyJ",theme:e.$isDarkMode?"dark":"light"},null,8,["theme"])])}const y=i(r,[["render",m],["__file","浮动与定位.html.vue"]]);export{y as default};
