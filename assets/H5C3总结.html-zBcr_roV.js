import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as i}from"./app-Efa2_n6B.js";const s={},t=i(`<h4 id="_1-怎么让一个不定宽高的-div-垂直水平居中" tabindex="-1"><a class="header-anchor" href="#_1-怎么让一个不定宽高的-div-垂直水平居中" aria-hidden="true">#</a> 1，怎么让一个不定宽高的 Div，垂直水平居中</h4><p>1）使用 css 方法:</p><pre><code>父盒子设置：
display：table-cell;
text-align:center;
vertical-align:middle;

 Div设置：
 display:inlie-block;
 vertical-align:middle;
</code></pre><p>2）使用 css3 transform</p><pre><code>父盒子设置：
position:relative;

Div设置：
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
</code></pre><h4 id="_2-position-几个属性的作用" tabindex="-1"><a class="header-anchor" href="#_2-position-几个属性的作用" aria-hidden="true">#</a> 2,position 几个属性的作用？</h4><p>position 常见的四个属性值：relative，absolute，fixed，static。一般都要配合 left，top，right，bottom 属性使用</p><p>1）static ：默认位置，设置为 static 的元素，他始终会处在页面流给予的位置（static 元素会忽略任何 top，bottom，left 或 right 声明），一般不常用</p><p>2）relative：位置被设置为 relative 的元素，可将其移至想对于其正常位置的地方，意思就是如果设置了 relative 值，那么，它便宜的 top，right，bottom，left 的值都已它原来的位置为基准便宜，而不管其他元素会怎么样，注意 relative 移动后的元素在原来的为值仍占空间</p><p>3）absolute：位置设置为 absolute 的元素，可定位于相对于包含它的元素的指定坐标。意思就是如果他的父容器设置了 position 属性，并且 position 的属性值为 absolute 或者 relative，那么就会一句父容器进行便宜，如果其父容器没有设置 position，那么偏移是以 body 为依据，注意设置 absolute 属性的元素在标准流中不占位置=</p><p>4）fixed：位置被设置为 fixed 的元素，可定位于相对于浏览器窗口的指定坐标。不论窗口滚动与否，元素都会留在那个位置。它始终以 body 为依据的。注意设置 fixed 属性的元素在标准流中不占位置</p><p>5）sticky： 　　 position 属性中最有意思的就是 sticky 了，设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。</p><p>这个属性的兼容性还不是很好，目前仍是一个试验性的属性，并不是 W3C 推荐的标准。</p><p>6）inherit： 继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性</p><h4 id="_3、px-em-rem-的区别" tabindex="-1"><a class="header-anchor" href="#_3、px-em-rem-的区别" aria-hidden="true">#</a> 3、px，em，rem 的区别</h4><p>1）px 像素。绝对单位，像素 px 是相对于显示器屏幕分辨率而言的，是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果 px 要换算成物理长度，需要制定精度 dpi</p><p>2）em 是相对长度单位，相对于当前对象内文本的字体尺寸。入当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。它会继承父级元素的字体大小，因此并不是一个固定的值</p><p>3）rem 是 css3 新增的一个相对单位（root em，跟 em），使用 rem 为元素设定字体大小时，仍然是相对大小，但相对的只是 html 跟元素</p><p>4）区别：IE 无法调整那些使用 px 作为单位的字体大小，而 em 和 rem 可以缩放，rem 相对的只是 html 根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除非 IE8 及更早版本外，所有浏览器均已支持 rem</p><h4 id="_4、什么是-bfc" tabindex="-1"><a class="header-anchor" href="#_4、什么是-bfc" aria-hidden="true">#</a> 4、什么是 BFC?</h4><p>1）定义： BFC 直译为“块级格式化上下文”，它是一个独立的渲染区域，只有 Block-level box 参与，它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干</p><p>2）布局规则：</p><ul><li>A：内部的 Box 会在垂直方向，一个接一个地放置</li><li>B：Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠</li><li>C：每个元素的 margin box 的左边，与包含块 border box 的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。</li><li>D：BFC 的区域不会与 float box 重叠</li><li>E：BFC 就是页面上的一个隔离的独立容器,容器里面的子元素不会影响外面的元素。反之也如此</li><li>F:计算 BFC 的高度时，浮动元素也参与计算</li></ul><h5 id="bfc-触发条件" tabindex="-1"><a class="header-anchor" href="#bfc-触发条件" aria-hidden="true">#</a> BFC 触发条件</h5><ul><li>1，overflow：hidden/scroll/auto</li><li>2，浮动元素</li><li>3.绝对定位或固定定位元素</li><li>4.display：inline-block；</li></ul><h5 id="bfc-作用" tabindex="-1"><a class="header-anchor" href="#bfc-作用" aria-hidden="true">#</a> BFC 作用：</h5><ul><li>1，解决 margin 塌陷问题</li><li>2，清除浮动</li><li>3，实现自适应布局</li></ul><h4 id="_5-表格自动换行怎么实现" tabindex="-1"><a class="header-anchor" href="#_5-表格自动换行怎么实现" aria-hidden="true">#</a> 5.表格自动换行怎么实现？</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>    <span class="token comment">/*使用浏览器默认的换行原则*/</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span>normal；
    <span class="token comment">/*允许单词内换行*/</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span>
    <span class="token comment">/*只能在半角空格或连字符处换行*/</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span>keep-all<span class="token punctuation">;</span>
    <span class="token comment">/*是浏览器默认的换行规则*/</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span>
    <span class="token comment">/*在长单词或url地址内部进行换行*/</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span>break-word<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-box-sizing、transition、translate-分别是什么" tabindex="-1"><a class="header-anchor" href="#_6-box-sizing、transition、translate-分别是什么" aria-hidden="true">#</a> 6.box-sizing、transition、translate 分别是什么？</h4><pre><code>Box-sizing：用来指定盒模型的大小的计算方式。主要分为
border-box（从边框固定盒子大小）
content-box（从内容固定盒子大小）
两种计算方式

transition：当前元素只要有“属性”发生变化是，可以平滑的进行过渡。
通过transition-propety设置过渡属性；
transition-duration设置过渡时间；
transition-timing-function设置过渡速度；
transition-delay设置过渡延时

translate：通过移动改变元素的位置；有x，y，z三个属性
</code></pre><h4 id="_7、选择器优先级是怎样的" tabindex="-1"><a class="header-anchor" href="#_7、选择器优先级是怎样的" aria-hidden="true">#</a> 7、选择器优先级是怎样的？</h4><pre><code>！important&gt;行内样式&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符&gt;继承

权重算法：
（0,0,0,0）=&gt;第一个0对应的important的个数，第二个0对应的是id选择器的个数，第三个0对应的类选择器的个数，第四
个0对应的是标签选择器的个数，就是当前选择器的权重

比较：
先从第一个0开始比较，如果第一个0大，那么说明这个选择器的权重高，如果第一个相同，比较第二个，以此类推
</code></pre><h4 id="_8、css3-选择器有哪些" tabindex="-1"><a class="header-anchor" href="#_8、css3-选择器有哪些" aria-hidden="true">#</a> 8、css3 选择器有哪些？</h4><p>属性选择器</p><p>伪类选择器</p><pre><code>链接伪类选择器

    :link /* 未访问的链接 */

    :visited /* 已访问的链接 */

    :hover /* 鼠标移动到链接上 */

    :active /* 选定的链接 */

结构(位置)伪类选择器

    :first-child :选取属于其父元素的首个子元素的指定选
    择器

    :last-child :选取属于其父元素的最后一个子元素的指
    定选择器

    :nth-child(n) ： 匹配属于其父元素的
    第N个子元素，不论元素的类型

    :nth-last-child(n) ：选择器匹配属于其
    元素的第 N 个子元素的每个元素，不论元素的类型，从最后一个子元素开
    始计数。 n 可以是数字、关键词
    或公式

目标伪类选择器
      :target目标伪类选择器 :选择器可用于选取当前活动的目标元
      素

    :target {
    		color: red;
    		font-size: 30px;
    }
伪元素选择器

1、E::first-letter文本的第一个单词或字（如中文、日文、韩文等）

2、E::first-line 文本第一行；

3、E::selection 可改变选中文本的样式；

4、E::before和E::after
</code></pre><h4 id="_9、iframe-的作用" tabindex="-1"><a class="header-anchor" href="#_9、iframe-的作用" aria-hidden="true">#</a> 9、Iframe 的作用？</h4><pre><code>Iframe是用来在网页中插入第三方页面，早起的页面使用iframe主要是用于导航栏这种页面都相同的部分，这样可以在切换页面的时候避免重复下载
。

优点：便于修改，模块分离，像一些信息管理系统会用到。但现在基本上不推荐使用。除非特殊需要，一般不推荐使用
。

缺点：

 （1）iframe的创建比一般的DOM元素慢了1-2个数量级

 （2）iframe标签会阻塞页面的加载，如果页面的onload事件不能及时除非，会让用户觉得页面加载很慢，用户体验不好，在Safari和Chrome中科院通过js动态设置iframe的src属性来避免阻塞

 （3）iframe对于SEO不友好，替代方案一般就是动态语言的Incude机制和ajax动态填充内容等
</code></pre><h4 id="_10、有一个导航栏在-chrome-里面样式完好-在-ie-里文字都聚到一起了-是哪个兼容性问题" tabindex="-1"><a class="header-anchor" href="#_10、有一个导航栏在-chrome-里面样式完好-在-ie-里文字都聚到一起了-是哪个兼容性问题" aria-hidden="true">#</a> 10、有一个导航栏在 chrome 里面样式完好？在 IE 里文字都聚到一起了，是哪个兼容性问题？</h4><pre><code>用了display：flex属性；在ie10以下都是无效的
</code></pre><h4 id="_11-h5-css3-新增属性有哪些" tabindex="-1"><a class="header-anchor" href="#_11-h5-css3-新增属性有哪些" aria-hidden="true">#</a> 11.H5 css3 新增属性有哪些？</h4><h5 id="h5" tabindex="-1"><a class="header-anchor" href="#h5" aria-hidden="true">#</a> h5</h5><ul><li>1.语义化标签 <ul><li>header、footer、aside、section、article、nav</li></ul></li><li>2.表单输入类型</li></ul><p>email、url、number、range、Date Pickers、search、color</p><ul><li>3.表单属性</li></ul><p>autocomplete、placeholder、form</p><ul><li>4.视频音频</li></ul><p>video、audio</p><ul><li>5.画布</li></ul><p>canvas</p><ul><li>6.伸缩矢量图</li></ul><p>svg</p><ul><li>7.拖拽属性</li></ul><p>draggable</p><ul><li>8.事件</li></ul><p>resize input</p><ul><li>9.地理定位</li></ul><p>Geolocation</p><ul><li>10.web 存储</li></ul><p>sessionStorage 和 localStorage</p><ul><li>11.应用程序缓存 application cache</li></ul><p>创建 chche manifest 文件</p><ul><li>12.文件通讯协议</li></ul><p>websocket</p><ul><li>13.文件读取</li></ul><p>fileReader</p><ul><li>14.类名操作</li></ul><p>classlist</p><h5 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> CSS3</h5><ul><li><p>1.颜色：新增 RGBA,HSLA 模式</p></li><li><p>2.文字阴影： text-shadow</p></li><li><p>3.边框：圆角（border-radius）边框阴影：box-shadow</p></li><li><p>4.盒子模型：box-sizing</p></li><li><p>5.背景： background-size 设置毕竟图片的尺寸</p><p>background-origin 设置背景图片的原点 background-clip 设置背景图片的裁切区域，一“，”分隔可以设置多背景，用于自适应布局</p></li><li><p>6.渐变： linear-gradient 线性渐变 radial-gradient 径向渐变</p></li><li><p>7.过渡：transition，可实现动画</p></li><li><p>8.自定义动画： animation： 动画名称 执行时间 执行次数 动画方向 延迟时间 执行的最终状态 动画运动方式 暂停或终止</p></li><li><p>9.在 CSS3 中唯一引入的伪元素：：selection 可改变选中文本的样式 p::selection{ color:orange; }</p></li><li><p>10.媒体查询，多栏布局 @media (max-width:640){ html{ font-size:40px; } }</p></li><li><p>11.border-image</p></li><li><p>12.2d 转换：transform：translate（x，y） rotate（x，y） skew（x，y） scale（x，y）</p></li><li><p>13.3d 转换：</p><p>当元素定义 perspective 属性是，其子元素会获得透视效果。 （给父元素加）；perspective 属性值越小，离屏幕越近</p><p>translate3d（x，y，z）x 和 y 可以是长度值，也可以是百分 比，相对于其本身元素水平方向的宽和垂直方向的高度和； z 只能设置长度值</p></li><li><p>14.弹性盒子 flex</p></li><li><ol start="15"><li>媒体查询</li></ol></li></ul><p>@media</p><h4 id="_12、xhtml-和-html-有什么区别" tabindex="-1"><a class="header-anchor" href="#_12、xhtml-和-html-有什么区别" aria-hidden="true">#</a> 12、xhtml 和 html 有什么区别？</h4><pre><code>html是基本的web网页设计语言，xhtml是一个基于xml的置标语言。最主要的不同：
xhtml元素必须被正确地嵌套

xhtml元素必须被关闭

标签名必须用小写字母

xhtml文档必须拥有根元素
</code></pre><h4 id="_13、css-引入的方式有哪些-link-和-import-的区别是" tabindex="-1"><a class="header-anchor" href="#_13、css-引入的方式有哪些-link-和-import-的区别是" aria-hidden="true">#</a> 13、css 引入的方式有哪些？link 和@import 的区别是？</h4><pre><code>行内式 内嵌式 外链式 引入式
区别：同时加载
前者无兼容性，后者css2.1以下浏览器不支持
link支持使用javascript改变样式，后者不可
</code></pre><h4 id="_14、标签上-title-与-alt-属性的区别是什么" tabindex="-1"><a class="header-anchor" href="#_14、标签上-title-与-alt-属性的区别是什么" aria-hidden="true">#</a> 14、标签上 title 与 alt 属性的区别是什么？</h4><pre><code>alt当图片不显示时，用文字代表。
title为该属性提供信息
</code></pre><h4 id="_15、描述-css-reset-的作用和用途" tabindex="-1"><a class="header-anchor" href="#_15、描述-css-reset-的作用和用途" aria-hidden="true">#</a> 15、描述 css reset 的作用和用途？</h4><pre><code>Reset重置浏览器的css默认属性，浏览器的品种不同，样式不同，然后重置，让他们统一
</code></pre><h4 id="_16、解释-css-sprites-如何使用" tabindex="-1"><a class="header-anchor" href="#_16、解释-css-sprites-如何使用" aria-hidden="true">#</a> 16、解释 css sprites，如何使用？</h4><pre><code>css精灵图，把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量
</code></pre><h4 id="_17、清除浮动的几种方式" tabindex="-1"><a class="header-anchor" href="#_17、清除浮动的几种方式" aria-hidden="true">#</a> 17、清除浮动的几种方式？</h4><ul><li><p>1.父级 div 定义 height 原理：父级 div 手动定义 height，就解决了父级 div 无法自动获取到高度的问题。简单、代码少、容易掌握，但只适合高度固定的布局。</p></li><li><p>2，结尾处加空 div 标签 clear：both 原理：在浮动元素的后面添加一个空 div 兄弟元素，利用 css 提高的 clear：both 清除浮动，让腹肌 div 能自动获取到高度，如果页面浮动布局多，就要增加很多空 div，让人感觉很不好</p></li><li><p>3.父级 div 定义 伪类：after 和 zoom /<em>清除浮动代码</em>/ .clearfix:after{ content:&quot;&quot;; display:block; visibility:hidden; height:0; line-height:0; clear:both; } .clearfix{zoom:1} 原理：IE8 以上和非 IE 浏览器才支持：after，原理和方法 2 有点类似，zoom（IE 转有属性）可解决 ie6，ie7 浮动问题，推荐使用，建议定义公共类，以减少 css 代码</p></li><li><p>4、父级 div 定义 overflow：hidden 超出盒子部分会被隐藏，不推荐使用</p></li><li><p>5、双伪元素法： .clearfix:before,.clearfix:after{ content:&#39;&#39;; display:block; clear:both; } .clearfix{ zoom:1; }</p></li></ul><h4 id="_18、z-index-说说-z-index-的工作原理及适用范围" tabindex="-1"><a class="header-anchor" href="#_18、z-index-说说-z-index-的工作原理及适用范围" aria-hidden="true">#</a> 18、z-index 说说 z-index 的工作原理及适用范围？</h4><ul><li><p>z-index</p><p>这个属性控制着元素在 Z 轴上的表现形式。 该属性仅适用于定位元素。即拥有 relative，absolute，fix 的属性的 position。</p><p>堆叠顺序： 堆叠顺序是当前元素位于 z 轴上的值。数值越大表名元素的堆叠顺序越高，越靠近屏幕。未定义时，后来居上。如果未指 定 z-index 的属性，元素的堆叠顺序基于它所在的文档数。默认情况下，文档中后来声明的元素具有更高的堆叠顺序。</p><p>当父元素的堆叠顺序被设置的时候，这也意味着，它的子元素堆叠顺序不能高于或低于这一顺序（相对于父元素的堆叠上下文）。</p></li><li><p>适用范围：</p></li><li><p>1.网页两侧浮动窗口（播放器，置顶按钮，浮动广告，功能按钮等）</p></li><li><p>2.导航栏浮动置顶</p></li><li><p>3.隐藏 div 实现弹窗功能（通过设置 div 的定位和 z-index 控制 div 的位置和出现隐藏）</p></li></ul><h4 id="_19、能否简述一下如何使一套设计方案-适应不同的分辨率-有哪些方法可以实现" tabindex="-1"><a class="header-anchor" href="#_19、能否简述一下如何使一套设计方案-适应不同的分辨率-有哪些方法可以实现" aria-hidden="true">#</a> 19、能否简述一下如何使一套设计方案，适应不同的分辨率，有哪些方法可以实现？</h4><pre><code>流式布局：
使用非固定像素来定义网页内容，也就是百分比布局，通过合资的宽度设置为百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧
填充。
这样的布局方式，就是移动web开发使用的常用布局方式。这样的布局可以适配移动端不同的分辨率设
备。

响应式开发：

简单来说就是一个网站能够兼容多个终端

css3中的Media Query（媒体查询），通过查询screen的宽度来指定某个宽度区间的网页布局
。

- 超小屏幕（移动设备） 768px以下
- 小屏设备 768px-992px
- 中等屏幕 992px-1200px
- 宽屏设备 1200px以上

由于响应式开发显得繁琐些，一般使用第三方响应式框架来完成，比如bootstrap来完成一部分工作，当然也可以自己写响应式

移动 web 和响应式的区别：
</code></pre><table><thead><tr><th>开发方式</th><th>移动 web 开发+PC 开发</th><th>响应式开发</th></tr></thead><tbody><tr><td>应用场景</td><td>一般在已经有 pc 端的网站，开发移动站的时候，秩序单独开发移动端</td><td>针对新建站的一些网站，现在要去适配移动端，所以就一套页面兼容各种终端，灵活</td></tr><tr><td>开发</td><td>针对性强，开发效率高</td><td>兼容各种终端，效率低</td></tr><tr><td>适配</td><td>只适配移动设备，pad 上体验相对较差</td><td>可以适配各种终端</td></tr><tr><td>效率</td><td>代码简洁，加载块。</td><td>代码相对复杂，加载慢</td></tr></tbody></table><h4 id="_20、描述一下渐进增强和优雅降级之间的不同" tabindex="-1"><a class="header-anchor" href="#_20、描述一下渐进增强和优雅降级之间的不同" aria-hidden="true">#</a> 20、描述一下渐进增强和优雅降级之间的不同</h4><pre><code>优雅降级：针对那些最高级，最完善的浏览器来设计网站
，往下兼容一些低版本浏览器

渐进增强：关注内容本身，从低版本兼容开始，优先考虑低版本的，
</code></pre><h4 id="_21、改变元素的外边距用什么属性-改变元素的内填充用什么属性" tabindex="-1"><a class="header-anchor" href="#_21、改变元素的外边距用什么属性-改变元素的内填充用什么属性" aria-hidden="true">#</a> 21、改变元素的外边距用什么属性？改变元素的内填充用什么属性？</h4><pre><code>改变元素的外边距用margin，改变元素的内填充用padding
</code></pre><h4 id="_22、在新窗口打开链接的方法是" tabindex="-1"><a class="header-anchor" href="#_22、在新窗口打开链接的方法是" aria-hidden="true">#</a> 22、在新窗口打开链接的方法是？</h4><pre><code>target：_blank
</code></pre><h4 id="_23、合理的页面布局中长听过结果与变现分离-那么结构是什么-表现是什么" tabindex="-1"><a class="header-anchor" href="#_23、合理的页面布局中长听过结果与变现分离-那么结构是什么-表现是什么" aria-hidden="true">#</a> 23、合理的页面布局中长听过结果与变现分离，那么结构是什么？表现是什么？</h4><pre><code>结构是html 表现是css
</code></pre><h4 id="_24、简述对-web-语义化的理解" tabindex="-1"><a class="header-anchor" href="#_24、简述对-web-语义化的理解" aria-hidden="true">#</a> 24、简述对 web 语义化的理解？</h4><pre><code>就是让浏览器更好的读懂你写的代码，在进行html结构、表现、行为设计时，尽量使用语义化的标签，是程序代码简洁明了，
易于进行web操作和网站seo，方便团队协作的一种标准，以图实现一种“无障碍”的web开发
</code></pre><h4 id="_25、每个-html-文件开头都有个很重要的东西-doctype-这是干什么的" tabindex="-1"><a class="header-anchor" href="#_25、每个-html-文件开头都有个很重要的东西-doctype-这是干什么的" aria-hidden="true">#</a> 25、每个 HTML 文件开头都有个很重要的东西，Doctype，这是干什么的？</h4><pre><code>DOCTYPE是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，他应该使用什么样的文档类型来解析文档。只有确定了一个正确的文档类型，超文本标记语言或可扩展超文本标记语言中的标签和层叠样式表才能生效，甚至对javascript脚本都会有所影响
</code></pre><h4 id="_26、css-都有哪些选择器-优先级是怎样定义的" tabindex="-1"><a class="header-anchor" href="#_26、css-都有哪些选择器-优先级是怎样定义的" aria-hidden="true">#</a> 26、CSS 都有哪些选择器？优先级是怎样定义的？</h4><pre><code>一般而言，选择器越特殊，它的优先级越高，也就是选择器指向的越战场，它的优先级就
越高

!important&gt;行内样式&gt;ID&gt;类&gt;标签|伪类|属性选择&gt;伪对象&gt;
继承&gt;通配符
</code></pre><h4 id="_27、display-none-与-visibility-hidden-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_27、display-none-与-visibility-hidden-的区别是什么" aria-hidden="true">#</a> 27、display：none;与 visibility:hidden 的区别是什么？</h4><pre><code>display：none；使用该属性后，THML元素（对象）的宽度、高度等各种属性值都将“丢失”

visibility：hidden；使用该属性后，HTML属性（对象）仅仅爱视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也就是说它仍具有高度、属性等属性值
</code></pre><h5 id="_28、请用-css-定义-p-标签-要求实现以下效果-字体-ie-下为黑色-000000-ie7-下为红色-ff0000-而其他浏览器下为绿色-00ff00" tabindex="-1"><a class="header-anchor" href="#_28、请用-css-定义-p-标签-要求实现以下效果-字体-ie-下为黑色-000000-ie7-下为红色-ff0000-而其他浏览器下为绿色-00ff00" aria-hidden="true">#</a> 28、请用 css 定义 p 标签，要求实现以下效果，字体 IE 下为黑色（#000000）；ie7 下为红色（#ff0000）；而其他浏览器下为绿色（#00ff00）</h5><pre><code>p{
color:green;
*color:blue;
_color:black;
}
</code></pre><h4 id="_29、主流浏览器哪些-内核" tabindex="-1"><a class="header-anchor" href="#_29、主流浏览器哪些-内核" aria-hidden="true">#</a> 29、主流浏览器哪些？内核？</h4><pre><code>一般都会在主流浏览器中进行测试，包括IE,Chrome，Safari,Firefox和Opera

内核：
IE：trident 内核 （腾讯，猎豹，360浏览器）
Firefox:gecko 跨平台，windows，linux和mac os 中可以使用

Chrome：Blink，基于bebit，google和pera共同开发

Safari:webit内核
Opera：blink内核
</code></pre><h4 id="_30、display-none-与-visibility-hidden-的区别" tabindex="-1"><a class="header-anchor" href="#_30、display-none-与-visibility-hidden-的区别" aria-hidden="true">#</a> 30、display:none 与 visibility:hidden 的区别</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">display</span><span class="token operator">:</span>none；<span class="token comment">//使用该属性后，HTML元素对象的宽度，高度等各种属性值都将“丢失”</span>

    <span class="token literal-property property">visibility</span><span class="token operator">:</span>hidden；<span class="token comment">//使用该属性后，HTML元素仅仅是视觉上看不见(完全透明)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_31、css-hack-ie6-7-8-的-hack-分别是什么" tabindex="-1"><a class="header-anchor" href="#_31、css-hack-ie6-7-8-的-hack-分别是什么" aria-hidden="true">#</a> 31、Css Hack？ie6,7,8 的 hack 分别是什么？</h4><pre><code>针对不同的浏览器些不同的Css code的国产，就是CSS hack
</code></pre><h4 id="_32、将字符串-string1-添加到-string2-中" tabindex="-1"><a class="header-anchor" href="#_32、将字符串-string1-添加到-string2-中" aria-hidden="true">#</a> 32、将字符串 string1 添加到 string2 中</h4><pre><code>string2.concat(string1);
</code></pre><h4 id="_33、请用-div-css-写出图片水平垂直居中的样式" tabindex="-1"><a class="header-anchor" href="#_33、请用-div-css-写出图片水平垂直居中的样式" aria-hidden="true">#</a> 33、请用 div+css 写出图片水平垂直居中的样式</h4><pre><code> 一、表格转换法
  img祖先盒子{
 display:table;
 }
 img父盒子{
 display:table-cell;
 text-align:center;
 vertical-align:middle;
 }

 二、基线对齐法

 img父盒子{
 text-align:center;
 }
 img{
 vertical-align:middle;

 }

 img下面兄弟盒子{
 height：100%;
 display:inline-block;
 vertical-align:middle;
 }
</code></pre><h4 id="_34、div-css-写出左侧固定-width-200px-右侧自适应" tabindex="-1"><a class="header-anchor" href="#_34、div-css-写出左侧固定-width-200px-右侧自适应" aria-hidden="true">#</a> 34、div+css 写出左侧固定(width：200PX)，右侧自适应</h4><pre><code>方法一、

左侧盒子{
width:200px;
float:left;
height:400px;
}
右侧盒子{
width：100%;
float:right;
margin-left:200px;
}

方法二、
左侧盒子{
width:200px；
float:left;
width:400px;
}
右侧盒子{
padding-left:200px;
overflow:hidden;

}
</code></pre><h4 id="_35、display-inline-block-什么时候会显示间隙" tabindex="-1"><a class="header-anchor" href="#_35、display-inline-block-什么时候会显示间隙" aria-hidden="true">#</a> 35、display:inline-block 什么时候会显示间隙？</h4><pre><code>真正意义上的inline-block水平呈现的元素见，换行显示或空格分隔的情况下才会有间距

解决:父元素{
font-size:0;
-webkit-text-size-adjust:none;
}
</code></pre><h4 id="_36、overflow-有哪些属性值" tabindex="-1"><a class="header-anchor" href="#_36、overflow-有哪些属性值" aria-hidden="true">#</a> 36、overflow 有哪些属性值?</h4><p>visibility:默认值，内容不会被修剪，呈现在盒子之外</p><p>hidden:内容被修剪，并且多余的内容不可见</p><p>scroll:内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容</p><p>auto:如果内容被修剪，则浏览器会显示滚动条以便查看其余的内 容</p><p>inherit:规定应该从父元素继承 overflow 属性的值</p><h4 id="_37、rgba-和-opacity-的透明效果有什么不同" tabindex="-1"><a class="header-anchor" href="#_37、rgba-和-opacity-的透明效果有什么不同" aria-hidden="true">#</a> 37、rgba()和 opacity 的透明效果有什么不同?</h4><pre><code>rgba()和 opacity 都能实现透明效果.
opacity 作用于元素,以及元素内的所有内容的透明度
rgba()只作用于元素的颜色或其背景色.(设置 rgba 透明的元素的子元素不会继承透明效果！)
</code></pre><h4 id="_38、以前端角度出发做好-seo-需要考虑什么" tabindex="-1"><a class="header-anchor" href="#_38、以前端角度出发做好-seo-需要考虑什么" aria-hidden="true">#</a> 38、以前端角度出发做好 SEO 需要考虑什么?</h4><pre><code>Meta 标签优化
放置关键词
付费的搜索引擎
链接交换和链接广泛度
合理的标签使用.
</code></pre><h4 id="_39、html-与-xhtml——二者有什么区别" tabindex="-1"><a class="header-anchor" href="#_39、html-与-xhtml——二者有什么区别" aria-hidden="true">#</a> 39、HTML 与 XHTML——二者有什么区别?</h4><pre><code>主要是 XHTML 可兼容各大浏览
器、手机以及PDA,并且浏览器也能快速正确地编译网页.因为 XHTML 的语法较为严谨,所以需要特别注意 XHTML 的规则.
1.所有标签都必须小写不能大小写穿插其中,也不能全部都是大写
2.标签必须成双成对
3.标签顺序必须正确
4.所有属性都必须使用双引号
5.不允许使用 target=&quot;_blank&quot;
</code></pre><h4 id="_40、div-css-的布局较-table-布局有什么优点" tabindex="-1"><a class="header-anchor" href="#_40、div-css-的布局较-table-布局有什么优点" aria-hidden="true">#</a> 40、div+css 的布局较 table 布局有什么优点?</h4><pre><code>1.能够使代码精简: css 文件可以在网站的任意一个页面进行调用,避免了使用 table 表格修改部分页面.

2.提升网页访问速度:代码少,其浏览访问速度自然得以提升,从而提升了网站的用户体验度.

3.有利于 SEO 优化:对搜索引擎很是友好,简洁、结构化的代码更加有利于突出重点和适合搜索引擎抓取.另网络爬虫不喜欢    页面有态度css代码,所以外部
调用 CSS 有益于优化

4.浏览器兼容性不好:DIV+CSS 更容易出现多种浏览器不兼容的问题,主要原因是不同的浏览器对 web 标准默认值不同.
回答问题可以从下面 table 优缺点引入table

优点:开发时间短(使用 DW 开发速度快);纯 table 各浏览器不会有兼容问题;内容可自适应;在搜索引擎排名能靠前.


缺点:如果布局变更,需要重新
开发;如果 table 里有 div ul 等,可能会出现浏览器兼容问题;加载速度慢;table 套 table,会害死维护人员的.
</code></pre><h4 id="_41、src-与-href-的区别" tabindex="-1"><a class="header-anchor" href="#_41、src-与-href-的区别" aria-hidden="true">#</a> 41、src 与 href 的区别</h4><pre><code>src 用于替换当前元素(引入),指向外部资源的位置,指向的内容将会嵌入到文档中当前标签所在位置;在请求src资源时会将其指向的资源下载并应用到文档内,

href用于在当前文档和引用资源之间确立联系(关联).
</code></pre><h4 id="_42-滚动条隐藏" tabindex="-1"><a class="header-anchor" href="#_42-滚动条隐藏" aria-hidden="true">#</a> 42.滚动条隐藏</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 隐藏滚动条 */</span>
<span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token comment">/* width: calc(100vw + 20px); */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 兼容webkit */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_43-按钮点击去掉边框" tabindex="-1"><a class="header-anchor" href="#_43-按钮点击去掉边框" aria-hidden="true">#</a> 43.按钮点击去掉边框</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.province-btn:focus{
    outline:0;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,141),r=[t];function d(l,c){return n(),a("div",null,r)}const h=e(s,[["render",d],["__file","H5C3总结.html.vue"]]);export{h as default};
