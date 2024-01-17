import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as p,c as o,b as n,d as a,a as t,e as s}from"./app-5N_xpHNt.js";const l={},r=s(`<h2 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡" aria-hidden="true">#</a> 过渡</h2><p>transition 过渡属性是 CSS3 浓墨重彩的特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画&quot;</p><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3><ul><li>过渡从 IE10 开始兼容，移动端兼容良好</li><li>曾几何时，网页上的动画特效基本都是由 Javascript 定时器实现的，现在逐步改为使用 CSS3 过渡</li><li>优点：动画更细腻，内存开销小</li></ul><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> width 1s linear 0s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> all 1s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.46<span class="token punctuation">,</span> 1.02<span class="token punctuation">,</span> 0.49<span class="token punctuation">,</span> -0.86<span class="token punctuation">)</span> 0s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1:什么属性要过渡 2：动画时长 3：变化速度曲线 4：延迟时间</p>`,9),u=n("li",null,"如果要所有属性都参与过渡，可以写 all",-1),d=n("li",null,"transition 的第三个参数就是缓动参数，也是变化速度曲线",-1),h={href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="哪些属性可以参与过渡" tabindex="-1"><a class="header-anchor" href="#哪些属性可以参与过渡" aria-hidden="true">#</a> 哪些属性可以参与过渡</h3><ul><li>所有数值类型的属性，都可以参与过渡，比如 Width、 height、left、top、 border- radius、 opacity</li><li>背景颜色和文字颜色都可以被过渡</li><li>所有变形（包括 2D 和 3D）都能被过渡</li></ul><h3 id="注意项" tabindex="-1"><a class="header-anchor" href="#注意项" aria-hidden="true">#</a> 注意项</h3><h4 id="过渡与动画的时间要写单位" tabindex="-1"><a class="header-anchor" href="#过渡与动画的时间要写单位" aria-hidden="true">#</a> 过渡与动画的时间要写单位</h4><p>transition 属性中的过渡时间 transition-duration、延时时间 transition-delay，animation 属性中的动画时间 animation-duration、动画延时时间 animation-delay 都需要写单位，不写则会没有过渡、动画效果。</p><h4 id="最好设置初始状态" tabindex="-1"><a class="header-anchor" href="#最好设置初始状态" aria-hidden="true">#</a> 最好设置初始状态</h4><p>部分需要过渡的属性，如果不设置初始状态，会没有过渡效果 以 left 值为例，当不设置 left 的初始值时：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/当不设置left的初始值时.gif" alt="当不设置left的初始值时" tabindex="0" loading="lazy"><figcaption>当不设置left的初始值时</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token comment">/* 初始时，添加上left值 */</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s linear 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加之后：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/初始时添加上left值.gif" alt="初始时添加上left值" tabindex="0" loading="lazy"><figcaption>初始时添加上left值</figcaption></figure><h4 id="过渡要定义在元素的开始状态上-而不是结束状态上" tabindex="-1"><a class="header-anchor" href="#过渡要定义在元素的开始状态上-而不是结束状态上" aria-hidden="true">#</a> 过渡要定义在元素的开始状态上，而不是结束状态上</h4><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>`,13),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="动画的定义和调用" tabindex="-1"><a class="header-anchor" href="#动画的定义和调用" aria-hidden="true">#</a> 动画的定义和调用</h3><ul><li>可以使用@ keyframes 来定义动画， keyframes 表示“关键帧”</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> r</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义动画之后，就可以使用 animation 属性调用动画</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> r 1s linear 0s 1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从左到右依次为：动画名称，总时长，缓动效果，延迟，执行次数</p><p>对应属性名称:animation-name，animation-duration, animation-timing-function，animation-delay</p><h3 id="animation-iteration-count" tabindex="-1"><a class="header-anchor" href="#animation-iteration-count" aria-hidden="true">#</a> animation-iteration-count</h3><p><code>第5个参数</code>定义动画在结束前运行的次数 可以是 1 次 无限循环.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> r 1s linear 0s infinite<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>infinite:无限循环播放动画</p><h3 id="animation-direction" tabindex="-1"><a class="header-anchor" href="#animation-direction" aria-hidden="true">#</a> animation-direction</h3><p><code>第6个参数</code>CSS 属性指示动画是否反向播放</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> r 1s linear 0s infinite reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想让动画的第 2、4、6…（偶数次）自动逆向执行， 使用 alternate 参数即可</p><h3 id="animation-fill-mode" tabindex="-1"><a class="header-anchor" href="#animation-fill-mode" aria-hidden="true">#</a> animation-fill-mode</h3><p><code>第7个参数</code>设置 CSS 动画在执行之前和之后如何将样式应用于其目标</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> r 1s linear 0s 1 reverse forwards<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想让动画停止在最后结束状态，那么要加上 forwards</p><h3 id="animation-play-state" tabindex="-1"><a class="header-anchor" href="#animation-play-state" aria-hidden="true">#</a> animation-play-state</h3><p><code>第8个参数</code>定义一个动画是否运行或者暂停。可以通过查询它来确定动画是否正在运行。另外，它的值可以被设置为<code>暂停</code>和<code>恢复的动画的重放</code>。<strong>恢复一个已暂停的动画，将从它开始暂停的时候，而不是从动画序列的起点开始在动画。</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>
<span class="token comment">/* 暂停  */</span>
<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多关键帧动画" tabindex="-1"><a class="header-anchor" href="#多关键帧动画" aria-hidden="true">#</a> 多关键帧动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> bgColor</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 157<span class="token punctuation">,</span> 157<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">20%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 19<span class="token punctuation">,</span> 34<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>94<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">60%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 17<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>217<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>234<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="animate-css" tabindex="-1"><a class="header-anchor" href="#animate-css" aria-hidden="true">#</a> Animate.css</h3><p><code>Animate.css</code>是强大的跨平台的预设 css3 动画库</p><p><img src="http://www.animate.net.cn/" alt="Animate.css 中文网" loading="lazy"><img src="https://animate.style/" alt="animate.css" loading="lazy"></p><h2 id="过渡与动画的对比" tabindex="-1"><a class="header-anchor" href="#过渡与动画的对比" aria-hidden="true">#</a> 过渡与动画的对比</h2><h3 id="transition-过渡" tabindex="-1"><a class="header-anchor" href="#transition-过渡" aria-hidden="true">#</a> transition 过渡</h3><ul><li>令一个或多个可以用数值表示的 css 属性值发生变化时产生过渡效果；</li><li>触发条件：需要触发一个事件，比如鼠标触发等。</li><li>精确性：只能设定头尾，设置过渡属性没有中间的过程，动画是一步到位。</li><li>循环：只能触发一次，不能产生重复发生动画。</li></ul><h3 id="animation-动画" tabindex="-1"><a class="header-anchor" href="#animation-动画" aria-hidden="true">#</a> animation 动画</h3><ul><li>可设置多个关键帧，实现自由动画。</li><li>触发条件：不需要触发任何事件也可随时间变化达到一种动画效果。</li><li>精确性：支持多帧动画效果，可绘制复杂动画。</li><li>循环：可以反复执行动画，支持正向逆向及交替运行。</li></ul><h3 id="应用场景分析" tabindex="-1"><a class="header-anchor" href="#应用场景分析" aria-hidden="true">#</a> 应用场景分析</h3><h4 id="transition-过渡-1" tabindex="-1"><a class="header-anchor" href="#transition-过渡-1" aria-hidden="true">#</a> transition 过渡</h4><p>如果要简单的 from to 效果，用 transition。比如简单的按钮动画。</p><h4 id="animation-动画-1" tabindex="-1"><a class="header-anchor" href="#animation-动画-1" aria-hidden="true">#</a> animation 动画：</h4><p>如果要灵活定制多个帧以及循环，用 animation。比如变色效果。</p>`,37);function b(g,f){const e=c("ExternalLinkIcon");return p(),o("div",null,[r,n("ul",null,[u,d,n("li",null,[a("网站"),n("a",h,[a("https://cubic-bezier.com/"),t(e)]),a("可以生成贝塞尔曲线，可以自定义动画缓动参数")])]),k,n("p",null,[n("a",m,[a("animation"),t(e)])]),v])}const _=i(l,[["render",b],["__file","过渡与动画.html.vue"]]);export{_ as default};
