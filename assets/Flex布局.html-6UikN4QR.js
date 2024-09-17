import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as o,a as c,e as t}from"./app-vB0LPGoG.js";const g={},d=t('<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2><ul><li><code>flex</code> 容器：采用 <code>flex</code> 布局的元素，称为 <code>flex</code> 容器</li><li><code>flex </code>项目：<code>flex</code> 容器的所有<strong>子元素</strong>自动成为容器成员，称为 <code>flex</code> 项目</li><li>容器默认存在两根轴：水平的主轴<code>main axis</code>和垂直的交叉轴<code>cross axis</code>。主轴的开始位置叫做 <code>main start</code>，结束位置叫做 <code>main end</code>；交叉轴的开始位置叫做<code>cross start</code>，结束位置叫做 <code>cross end</code></li><li><strong>项目默认沿主轴排列</strong>,单个项目占据的主轴空间叫做 <code>main size</code>，占据的交叉轴空间叫做 <code>cross size</code></li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-容器.png" alt="flex-容器" tabindex="0" loading="lazy"><figcaption>flex-容器</figcaption></figure><h2 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性" aria-hidden="true">#</a> 容器的属性</h2><h3 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h3><p>决定了是否使用<code> flex</code> 布局</p><p>::: tip 两者区别</p><p>在没有指定宽度的时候，属性设置为 <code>flex</code> 的宽度默认为父元素的宽度，属性设置为 <code>inline-flex </code>为它内容的宽度</p><p>:::</p><ul><li><code>display:flex;</code>将对象作为弹性伸缩盒显示</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/displayflex.png" alt="displayflex" tabindex="0" loading="lazy"><figcaption>displayflex</figcaption></figure><ul><li><code>diisplay:inline-flex; </code>将对象作为内联块级弹性伸缩盒显示</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/displayinline-flex.png" alt="displayinline-flex" tabindex="0" loading="lazy"><figcaption>displayinline-flex</figcaption></figure><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><p>决定主轴的方向（即项目的排列方向）</p><ul><li><code>row</code>（默认值）主轴为水平方向，起点在左端</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-direction-row.png" alt="flex-direction-row" tabindex="0" loading="lazy"><figcaption>flex-direction-row</figcaption></figure><ul><li><code>row-reverse</code> 主轴为水平方向，起点在右端</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-direction-row-reverse.png" alt="flex-direction-row-reverse" tabindex="0" loading="lazy"><figcaption>flex-direction-row-reverse</figcaption></figure><ul><li><code>column</code> 主轴为垂直方向，起点在上沿</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-direction-column.png" alt="flex-direction-column" tabindex="0" loading="lazy"><figcaption>flex-direction-column</figcaption></figure><ul><li><code>column-reverse</code> 主轴为垂直方向，起点在下沿</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-direction-column-reverse.png" alt="flex-direction-column-reverse" tabindex="0" loading="lazy"><figcaption>flex-direction-column-reverse</figcaption></figure><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><p>默认情况下，项目都排在一条线（又称“轴线”）上，<code>flex-wrap</code> 属性定义，如一果条轴线排不下，如何换行</p><ul><li><p><code>nowrap</code>（默认值） 不换行</p><p>::: tip 注意</p><p>如果项目的宽度加和超过容器的宽度会自动压缩每个项目的宽度，坚决不换行！</p><p>:::</p></li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-wrap-nowrap.png" alt="flex-wrap-nowrap" tabindex="0" loading="lazy"><figcaption>flex-wrap-nowrap</figcaption></figure><ul><li><code>wrap </code>换行 第一行在上方</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-wrap-wrap.png" alt="flex-wrap-wrap" tabindex="0" loading="lazy"><figcaption>flex-wrap-wrap</figcaption></figure><ul><li><code>wrap-reverse</code> 换行 第一行在下方</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-wrap-reverse.png" alt="flex-wrap-reverse" tabindex="0" loading="lazy"><figcaption>flex-wrap-reverse</figcaption></figure><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><p><code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式，默认值为 <strong><code>row nowrap</code></strong></p><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3><p>定义了项目在主轴上的对齐方式</p><ul><li><code>flex-start</code>(默认值) 左对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/justify-content-flex-start.png" alt="justify-content-flex-start" tabindex="0" loading="lazy"><figcaption>justify-content-flex-start</figcaption></figure><ul><li><code>flex-end</code> 右对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/justify-content- flex-end.png" alt="justify-content- flex-end" tabindex="0" loading="lazy"><figcaption>justify-content- flex-end</figcaption></figure><ul><li><code>center</code> 居中</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/justify-content-center.png" alt="justify-content-center" tabindex="0" loading="lazy"><figcaption>justify-content-center</figcaption></figure><ul><li><code>space-between</code> 两端对齐，项目之间的间隔都相等</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/justify-content-space-between.png" alt="justify-content-space-between" tabindex="0" loading="lazy"><figcaption>justify-content-space-between</figcaption></figure><ul><li><code>space-around</code> 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/justify-content-space-around.png" alt="justify-content-space-around" tabindex="0" loading="lazy"><figcaption>justify-content-space-around</figcaption></figure><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><p>定义项目在交叉轴上如何对齐</p><ul><li><code>stretch</code>(默认值)：如果 Flex 项目未设置交叉轴方向的大小或设为 auto，将占满整个容器交叉轴方向的大小</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-items-stretch.png" alt="align-items-stretch" tabindex="0" loading="lazy"><figcaption>align-items-stretch</figcaption></figure><ul><li><code>flex-start</code> 交叉轴的起点对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-items-flex-start.png" alt="align-items-flex-start" tabindex="0" loading="lazy"><figcaption>align-items-flex-start</figcaption></figure><ul><li><code>flex-end</code> 交叉轴的终点对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-items-flex-end.png" alt="align-items-flex-end" tabindex="0" loading="lazy"><figcaption>align-items-flex-end</figcaption></figure><ul><li><code>center</code> 交叉轴的中点对齐(垂直居中)</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-items-center.png" alt="align-items-center" tabindex="0" loading="lazy"><figcaption>align-items-center</figcaption></figure><ul><li><code>baseline</code> 项目的第一行文字的基线对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-items-baseline.png" alt="align-items-baseline" tabindex="0" loading="lazy"><figcaption>align-items-baseline</figcaption></figure><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><p>定义了存在多根主轴线时，flex 项目在交叉轴上的对齐方式</p><p>如果项目只有一根主轴线 ，<strong>该属性不起作用</strong></p><ul><li><code>stretch</code>(默认值) 主轴线平分 Flex 容器交叉轴方向上的空间</li><li>和<code>align-item</code>一样，如果 Flex 项目未设置交叉轴方向的大小或设为 auto，将占满整个容器交叉轴方向的大小</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-stretch.png" alt="align-content-stretch" tabindex="0" loading="lazy"><figcaption>align-content-stretch</figcaption></figure><ul><li><code>flex-start</code> 交叉轴的起点对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-flex-start.png" alt="align-content-flex-start" tabindex="0" loading="lazy"><figcaption>align-content-flex-start</figcaption></figure><ul><li><code>flex-end</code> 交叉轴的终点对齐</li></ul><p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-flex-end.png" alt="align-content-flex-end" loading="lazy">!</p><ul><li><code>center </code>与交叉轴的中点对齐</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-center.png" alt="align-content-center" tabindex="0" loading="lazy"><figcaption>align-content-center</figcaption></figure><ul><li>space-between 与交叉轴的两端对齐，轴线之间的间隔平均分布</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-space-between.png" alt="align-content-space-between" tabindex="0" loading="lazy"><figcaption>align-content-space-between</figcaption></figure><ul><li>space-around 每根轴线两侧的间隔都相等，所以轴线之间的间隔比轴线与边框大一倍</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/align-content-space-around.png" alt="align-content-space-around" tabindex="0" loading="lazy"><figcaption>align-content-space-around</figcaption></figure><h2 id="项目的属性" tabindex="-1"><a class="header-anchor" href="#项目的属性" aria-hidden="true">#</a> 项目的属性</h2><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><p>属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/order.png" alt="order" tabindex="0" loading="lazy"><figcaption>order</figcaption></figure><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><ul><li>属性定义项目的放大比例，默认为<strong>0</strong>，即如果存在剩余空间，也不放大。</li><li>如果所有项目的 <code>flex-grow</code> 属性都为 1，则它们将等分主轴剩余空间（如果有的话）。如果一个项目的<code> flex-grow</code> 属性为 2，其他项目都为 1，则前者占据的主轴剩余空间将是其他项的 2 倍。</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-grow.png" alt="flex-grow" tabindex="0" loading="lazy"><figcaption>flex-grow</figcaption></figure><ul><li>如果有的项目有 <code>flex-grow</code> 属性，有的项目没有 <code>flex-grow</code> 属性,但有 <code>width</code> 属性，有 <code>flex-grow </code>属性的项目将等分主轴剩余空间</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-grow-2.png" alt="flex-grow-2" tabindex="0" loading="lazy"><figcaption>flex-grow-2</figcaption></figure><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3><p>属性定义了项目的缩小比例，默认为<strong>1</strong>，即如果空间不足，该项目将缩小。</p><ul><li>如果所有项目的 <code>flex-shrink</code> 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 <code>flex-shrink</code> 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。</li><li>负值对该属性无效。</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/flex-shrink.png" alt="flex-shrink" tabindex="0" loading="lazy"><figcaption>flex-shrink</figcaption></figure><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><ul><li>优先级高于 <code>width</code>(或<code> height</code>)</li><li>属性定义了在分配多余空间之前，<strong>项目占据的主轴空间</strong>（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</li></ul><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><p>属性是<code> flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis </code>的简写，默认值为 <code>0 1 auto</code>。后两个属性可选。</p><h4 id="关键字值" tabindex="-1"><a class="header-anchor" href="#关键字值" aria-hidden="true">#</a> 关键字值</h4><h4 id="单值语法" tabindex="-1"><a class="header-anchor" href="#单值语法" aria-hidden="true">#</a> 单值语法</h4><ul><li>一个无单位数(number),会被当作 <code>flex:number 1 0</code>; <ul><li><code>flex:1</code> ; 平分剩余空间</li></ul></li><li>一个有效的宽度<code>width</code>值，它会被当作<code> flex-basis</code> 的值(会被当作<code>flex:1 1 width</code>)</li><li>关键字 <code>none</code>，<code>auto </code>或<code> initial</code><ul><li><code>flex: auto</code>; 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 &quot;<code>flex: 1 1 auto</code>&quot;</li><li><code>flex: initial</code>;元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为&quot;<code>flex: 0 1 auto</code>&quot;</li><li><code>flex: none</code>; 元素会根据自身宽高来设置尺寸。它是<strong>完全非弹性的</strong>：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为&quot;<code>flex: 0 0 auto</code>&quot;</li></ul></li></ul><h4 id="双值语法" tabindex="-1"><a class="header-anchor" href="#双值语法" aria-hidden="true">#</a> 双值语法</h4><p>第一个值必须为一个无单位数，并且它会被当作 <code>flex-grow</code> 的值。第二个值必须为以下之一：</p><ul><li>一个无单位数：它会被当作 <code>flex-shrink</code> 的值</li><li>一个有效的宽度值: 它会被当作 <code>flex-basis</code> 的值</li></ul><h4 id="三值语法" tabindex="-1"><a class="header-anchor" href="#三值语法" aria-hidden="true">#</a> 三值语法</h4><ul><li>第一个值必须为一个无单位数，并且它会被当作 <code>flex-grow</code> 的值</li><li>第二个值必须为一个无单位数，并且它会被当作 <code>flex-shrink</code> 的值。</li><li>第三个值必须为一个有效的宽度值， 并且它会被当作 <code>flex-basis</code> 的值</li></ul><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><p>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 <code>align-items</code> 属性。默认值为 <code>auto</code>，表示继承父元素的 <code>align-items </code>属性。</p><ul><li>该属性可能取 6 个值，除了 <code>auto</code>，其他都与 <code>align-items</code> 属性完全一致。</li></ul><h2 id="flex-实现圣杯布局" tabindex="-1"><a class="header-anchor" href="#flex-实现圣杯布局" aria-hidden="true">#</a> flex 实现圣杯布局</h2>',101);function s(e,r){const i=a("CodePen");return l(),o("div",null,[d,c(i,{link:"https://codepen.io/zhangfanhang/pen/XWVzOLJ",theme:e.$isDarkMode?"dark":"light"},null,8,["theme"])])}const p=n(g,[["render",s],["__file","Flex布局.html.vue"]]);export{p as default};
