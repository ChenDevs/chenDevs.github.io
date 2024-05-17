import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as s}from"./app-_V2SQyIj.js";const i={},l=s(`<h3 id="canvas-简介" tabindex="-1"><a class="header-anchor" href="#canvas-简介" aria-hidden="true">#</a> Canvas 简介</h3><ul><li>canvas 是一个标签，作用：展示内容，本身不具备绘图功能 通过 js 绘图 API(canvas 对象.getContext(&#39;2d&#39;或‘webgl’))来绘画图形（canvas 2D 或 webgl（3d））</li></ul><h3 id="canvas-的基本使用步骤" tabindex="-1"><a class="header-anchor" href="#canvas-的基本使用步骤" aria-hidden="true">#</a> canvas 的基本使用步骤</h3><h4 id="_1-创建一个-canvas-标签-默认宽高-300-150" tabindex="-1"><a class="header-anchor" href="#_1-创建一个-canvas-标签-默认宽高-300-150" aria-hidden="true">#</a> 1，创建一个 canvas 标签 默认宽高 300*150</h4><p>给 canvas 设置宽高</p><ul><li>1，直接通过标签属性，行内设置</li><li>2，通过 js 动漫属性来设置宽高，element.width=</li></ul><p>上面两种方式，本质上就是在设置 canvas 画布的像素点个数；</p><ul><li>注意：不推荐使用 css style 样式来进行设宽高，通过 css style 样式，没有改变像素点个数，只是单纯的将画布当成图片来拉升</li></ul><h4 id="_2-获取-dom-元素" tabindex="-1"><a class="header-anchor" href="#_2-获取-dom-元素" aria-hidden="true">#</a> 2，获取 dom 元素</h4><h4 id="_3-获取绘图上下文对象-element-getcontext-2d" tabindex="-1"><a class="header-anchor" href="#_3-获取绘图上下文对象-element-getcontext-2d" aria-hidden="true">#</a> 3，获取绘图上下文对象 element.getContext(&#39;2d&#39;);</h4><p>类型：CanvasRenderingContent2D 上下文对象：是一个对象，提供了很多用于绘图的属性和方法</p><h4 id="_4-使用绘图上下文提供的属性和方法-来进行绘图" tabindex="-1"><a class="header-anchor" href="#_4-使用绘图上下文提供的属性和方法-来进行绘图" aria-hidden="true">#</a> 4，使用绘图上下文提供的属性和方法，来进行绘图</h4><pre><code> element. moveTo 将画笔落到那里去
</code></pre><ul><li>参数 1：x 坐标</li><li>参数 2：y 坐标</li></ul><h5 id="element-lineto-画一根线段" tabindex="-1"><a class="header-anchor" href="#element-lineto-画一根线段" aria-hidden="true">#</a> element.lineTo 画一根线段</h5><ul><li>参数 1：x 坐标</li><li>参数 2：y 坐标</li></ul><h5 id="moveto-lineto-只是在绘制路径" tabindex="-1"><a class="header-anchor" href="#moveto-lineto-只是在绘制路径" aria-hidden="true">#</a> moveTo lineTo 只是在绘制路径；</h5><ul><li>真正绘制，需要 element.skroke（）；</li></ul><h5 id="skroke-描边" tabindex="-1"><a class="header-anchor" href="#skroke-描边" aria-hidden="true">#</a> skroke（）描边</h5><ul><li>就是将页面中描绘的路径，以描边的方式绘制到画布中</li></ul><h5 id="canvas-中的坐标系" tabindex="-1"><a class="header-anchor" href="#canvas-中的坐标系" aria-hidden="true">#</a> canvas 中的坐标系</h5><ul><li><ol><li>坐标原点, 画布左上角 (0,0)</li></ol></li><li><ol start="2"><li>水平向右正方向为 x 轴, 向右 x 逐渐增大</li></ol></li><li><ol start="3"><li>垂直向下正方向为 y 轴, 向下 y 逐渐增大</li></ol></li></ul><h6 id="是可以绘制到-负轴的-只是我们看不见" tabindex="-1"><a class="header-anchor" href="#是可以绘制到-负轴的-只是我们看不见" aria-hidden="true">#</a> 是可以绘制到 负轴的, 只是我们看不见</h6><h6 id="学习-平移-旋转-放大-以后就可以看到-负轴了" tabindex="-1"><a class="header-anchor" href="#学习-平移-旋转-放大-以后就可以看到-负轴了" aria-hidden="true">#</a> 学习 平移, 旋转, 放大 以后就可以看到 负轴了</h6><h5 id="fill-填充" tabindex="-1"><a class="header-anchor" href="#fill-填充" aria-hidden="true">#</a> fill() 填充</h5><ul><li>将所有描绘的路径, 以填充的方式, 绘制到画布中</li></ul><h5 id="strokestyle-设置描边的颜色" tabindex="-1"><a class="header-anchor" href="#strokestyle-设置描边的颜色" aria-hidden="true">#</a> strokeStyle 设置描边的颜色</h5><p>参数设置和 css 设置颜色一样</p><ul><li><ol><li>red, blue</li></ol></li><li><ol start="2"><li>#666</li></ol></li><li><ol start="3"><li>rgb(255,0,0), rgba(255,0,0,0.1)</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;yellowgreen&#39;</span>
element<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#666&#39;</span>
element<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;rgb(255,0,0)&#39;</span>
element<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(255,0,0,0.1)&#39;</span>
element<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="fillstyle-设置或返回用于填充绘画的颜色" tabindex="-1"><a class="header-anchor" href="#fillstyle-设置或返回用于填充绘画的颜色" aria-hidden="true">#</a> fillStyle : 设置或返回用于填充绘画的颜色</h5><h5 id="路径开始和闭合" tabindex="-1"><a class="header-anchor" href="#路径开始和闭合" aria-hidden="true">#</a> 路径开始和闭合</h5><h6 id="element-beginpath-开启新路径" tabindex="-1"><a class="header-anchor" href="#element-beginpath-开启新路径" aria-hidden="true">#</a> element.beginPath 开启新路径</h6><ul><li>作用：擦除原来的路径，开启新路径</li><li>beginPath 后面 fill 和 stroke 只对 beginPath 以后的路径起作用， 之前的就不管了</li></ul><h6 id="element-closepath-闭合路径" tabindex="-1"><a class="header-anchor" href="#element-closepath-闭合路径" aria-hidden="true">#</a> element.closePath()闭合路径</h6><ul><li>如果复杂路径绘制，必须使用路径开始和结束。闭合路径会自动把最后的线头和开始的线头连在一起。</li></ul><h6 id="非零环绕原则" tabindex="-1"><a class="header-anchor" href="#非零环绕原则" aria-hidden="true">#</a> 非零环绕原则</h6><ul><li>注意：交叉路径的填充问题，“非零环绕原则”，顺逆时针穿插次数决定是否填充。</li></ul><p>“非零环绕规则”是这么来判断有自我交叉情况的路径的：对于路径中的任意给定区域， 从该区域内部画一条足够长的线段，使此线段的终点完全落在路径范围之外。</p><p>接下来，将计数器初始化为 0， 然后，每当这条线段与路径上的直线或曲线相交时， 就改变计数器的值。如果是与路径的顺时针部分相交，则加 1， 如果是与路径的逆时针部分相交，则减 1。若计数器的最终值不是 0，那么此区域就在路径里面， 在调用 fill()方法时，浏览器就会对其进行填充。 如果最终值是 0，那么此区域就不在路径内部，浏览器也就不会对其进行填充了</p><h5 id="绘制线的其他属性" tabindex="-1"><a class="header-anchor" href="#绘制线的其他属性" aria-hidden="true">#</a> 绘制线的其他属性</h5><h6 id="linecap-设置线条端点-线头、线冒-样式" tabindex="-1"><a class="header-anchor" href="#linecap-设置线条端点-线头、线冒-样式" aria-hidden="true">#</a> lineCap 设置线条端点(线头、线冒)样式</h6><ul><li>butt ： 默认。向线条的每个末端添加平直的边缘。</li><li>round ： 向线条的每个末端添加圆形线帽。</li><li>square： 向线条的每个末端添加正方形线帽。</li></ul><h6 id="linejoin-设置拐角类型" tabindex="-1"><a class="header-anchor" href="#linejoin-设置拐角类型" aria-hidden="true">#</a> lineJoin 设置拐角类型</h6><ul><li>bevel: 创建斜角。</li><li>round: 创建圆角。</li><li>miter: 默认。创建尖角</li></ul><h6 id="miterlimit-设置或返回最大斜接长度" tabindex="-1"><a class="header-anchor" href="#miterlimit-设置或返回最大斜接长度" aria-hidden="true">#</a> miterLimit 设置或返回最大斜接长度</h6><ul><li>斜接长度指的是在两条线交汇处内角和外角之间的距离。</li><li>一般用默认值：10 就可以了。除非需要特别长的尖角时，使用此属性</li></ul><h4 id="绘制虚线" tabindex="-1"><a class="header-anchor" href="#绘制虚线" aria-hidden="true">#</a> 绘制虚线</h4><ul><li>设置： setLineDash(数组)</li><li>读取： getLineDash()</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 10 表示实心部分, 5 表示空白部分</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="getlinedash-与-setlinedash-方法使用数组描述实线与虚线的长度" tabindex="-1"><a class="header-anchor" href="#getlinedash-与-setlinedash-方法使用数组描述实线与虚线的长度" aria-hidden="true">#</a> getLineDash() 与 setLineDash() 方法使用数组描述实线与虚线的长度.</h5><h4 id="绘制矩形" tabindex="-1"><a class="header-anchor" href="#绘制矩形" aria-hidden="true">#</a> 绘制矩形</h4><h5 id="快速创建矩形-rect-方法" tabindex="-1"><a class="header-anchor" href="#快速创建矩形-rect-方法" aria-hidden="true">#</a> 快速创建矩形 rect()方法</h5><ul><li>语法：element.rect(x, y, width, height);</li><li>解释：x, y 是矩形左上角坐标， width 和 height 都是以像素计</li><li>rect 方法只是规划了矩形的路径，并没有填充和描边, 所以最后还是要调用 fill 或者 stroke 方法绘制</li></ul><h5 id="快速创建描边矩形和填充矩形" tabindex="-1"><a class="header-anchor" href="#快速创建描边矩形和填充矩形" aria-hidden="true">#</a> 快速创建描边矩形和填充矩形</h5><ul><li>语法：ctx.strokeRect(x, y, width, height); <ul><li>注意此方法直接进行 stroke 绘制, 不会产生路径</li></ul></li><li>语法：ctx.fillRect(x, y, width, height); <ul><li>此方法直接进行 fill 填充绘制, 不会产生路径</li></ul></li></ul><h5 id="清除矩形-clearrect" tabindex="-1"><a class="header-anchor" href="#清除矩形-clearrect" aria-hidden="true">#</a> 清除矩形(clearRect)</h5><ul><li>语法：ctx.clearRect(x, y, width, hegiht);</li><li>解释：清除某个矩形内的绘制的内容，相当于橡皮擦。 清除整个画布 clearRect(0,0,cas.width,cas.height);</li></ul><h4 id="绘制圆弧" tabindex="-1"><a class="header-anchor" href="#绘制圆弧" aria-hidden="true">#</a> 绘制圆弧</h4><h5 id="arc-方法" tabindex="-1"><a class="header-anchor" href="#arc-方法" aria-hidden="true">#</a> arc 方法</h5><ul><li>概述：arc() 方法创建弧/曲线（用于创建圆或部分圆）。</li><li>语法：ctx.arc(x, y, r, sAngle, eAngle, counterclockwise);</li><li>解释： <ul><li>x,y：圆心坐标。</li><li>r：半径大小。</li><li>sAngle:绘制开始的角度。</li><li>eAngel:结束的角度，注意是弧度。π</li><li>弧度与角度的转换 弧度单位是 π 1π = 180 度, 2π = 360 度</li></ul></li></ul><h5 id="在-js-中-math-pi-获取-π" tabindex="-1"><a class="header-anchor" href="#在-js-中-math-pi-获取-π" aria-hidden="true">#</a> 在 js 中, Math.PI 获取 π,</h5><ul><li>counterclockwise：是否是逆时针。true 是逆时针，false：顺时针</li></ul><h5 id="弧度和角度" tabindex="-1"><a class="header-anchor" href="#弧度和角度" aria-hidden="true">#</a> 弧度和角度</h5><ul><li>弧度和角度的转换公式： rad = deg /180 * Math.PI;</li><li>在 Math 提供的方法中 Math.sin、Math.cos 等都使用的单位也是弧度</li></ul><h5 id="封装角度和弧度的转换函数" tabindex="-1"><a class="header-anchor" href="#封装角度和弧度的转换函数" aria-hidden="true">#</a> 封装角度和弧度的转换函数</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toRadian</span><span class="token punctuation">(</span><span class="token parameter">angle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>angle <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">toAngle</span><span class="token punctuation">(</span><span class="token parameter">radian</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>radian <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">180</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="计算圆弧上点的坐标" tabindex="-1"><a class="header-anchor" href="#计算圆弧上点的坐标" aria-hidden="true">#</a> 计算圆弧上点的坐标</h5><ul><li>计算圆弧上点的坐标的公式:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">=</span> x0 <span class="token operator">+</span> r <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
y <span class="token operator">=</span> y0 <span class="token operator">+</span> r <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sin 在 1 2 象限是正 3 4 象限是负 <ul><li>sin 在角度为：0-180 度之间为正，-90-0 度和 180-270 度之间为负</li></ul></li><li>cos 在 1 4 象限是正 2 3 象限是负 <ul><li>cos 在角度为：0-90 度和-90-0 度之间为正，90-270 度之间为负</li></ul></li></ul><h4 id="绘制文字" tabindex="-1"><a class="header-anchor" href="#绘制文字" aria-hidden="true">#</a> 绘制文字</h4><h5 id="常用绘制文字方法" tabindex="-1"><a class="header-anchor" href="#常用绘制文字方法" aria-hidden="true">#</a> 常用绘制文字方法</h5><ul><li><p>ctx.fillText() 在画布上绘制“被填充的”文本</p><ul><li>参数：文字, x 坐标, y 坐标</li></ul></li><li><p>ctx.strokeText() 在画布上绘制文本（无填充）</p></li></ul><h5 id="常用绘制文字属性" tabindex="-1"><a class="header-anchor" href="#常用绘制文字属性" aria-hidden="true">#</a> 常用绘制文字属性</h5><ul><li>font 设置或返回文本内容的当前字体属性（与 CSS font 属性相同） ctx.font = &#39;18px 微软雅黑&#39;;</li></ul><h6 id="对齐方式-水平对齐方式-垂直对齐方式" tabindex="-1"><a class="header-anchor" href="#对齐方式-水平对齐方式-垂直对齐方式" aria-hidden="true">#</a> 对齐方式 水平对齐方式, 垂直对齐方式</h6><ul><li>(1) 水平对齐方式 textAlign left 以点为基准, 左对齐 right 以点为基准, 右对齐 center 以点为基准, 中间对齐</li><li>(2) 垂直对齐方式 textBaseline 默认基线对齐 top 以点为基准,顶端对齐 middle 以点为基准,中间对齐 bottom 以点为基准,底端对齐</li></ul><h4 id="绘制图片的三种用法-drawimage" tabindex="-1"><a class="header-anchor" href="#绘制图片的三种用法-drawimage" aria-hidden="true">#</a> 绘制图片的三种用法 drawImage</h4><h5 id="_1-将整张图片绘制到画布中" tabindex="-1"><a class="header-anchor" href="#_1-将整张图片绘制到画布中" aria-hidden="true">#</a> (1) 将整张图片绘制到画布中</h5><ul><li>参数 1: 图片对象</li><li>参数 2,3: 绘制到画布中 x,y 坐标</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">drawImage</span><span class="token punctuation">(</span>imgObj<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如何创建图片对象?</p><ol><li>var img = document.createElement(&#39;img&#39;);</li><li>var img = new Image(); 更加简洁,优雅</li></ol><h5 id="_2-将整张图片绘制到画布中-并且可以设置宽高" tabindex="-1"><a class="header-anchor" href="#_2-将整张图片绘制到画布中-并且可以设置宽高" aria-hidden="true">#</a> (2) 将整张图片绘制到画布中, 并且可以设置宽高</h5><ul><li>参数 1: 图片对象</li><li>参数 2,3: 绘制到画布中 x,y 坐标,</li><li>参数 4,5: 绘制到画布中图像的宽高</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">drawImage</span><span class="token punctuation">(</span>imgObj<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置宽高最好等比例设置, 设置了宽度, 通过计算得到高度进行设置</p><h5 id="_3-从图片中裁剪一部分-绘制到画布中" tabindex="-1"><a class="header-anchor" href="#_3-从图片中裁剪一部分-绘制到画布中" aria-hidden="true">#</a> (3) 从图片中裁剪一部分, 绘制到画布中</h5><ul><li>参数 1: 图片对象</li><li>参数 2,3: 裁剪的左顶点坐标</li><li>参数 4,5: 裁剪的宽度和高度</li><li>参数 6,7: 绘制到画布中的 x,y 坐标</li><li>参数 8,9: 绘制到画布中图片的宽高</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">drawImage</span><span class="token punctuation">(</span>imgObj<span class="token punctuation">,</span> imgX<span class="token punctuation">,</span> imgY<span class="token punctuation">,</span> sWidth<span class="token punctuation">,</span> sHeight<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="canvas-的变换" tabindex="-1"><a class="header-anchor" href="#canvas-的变换" aria-hidden="true">#</a> canvas 的变换</h3><h4 id="canvas-中的变换都是对于坐标系的变换" tabindex="-1"><a class="header-anchor" href="#canvas-中的变换都是对于坐标系的变换" aria-hidden="true">#</a> canvas 中的变换都是对于坐标系的变换</h4><ul><li>(1) translate(x,y)</li><li>(2) rotate(弧度)</li><li>(3) scale(x,y)</li></ul><h4 id="状态的保持和恢复" tabindex="-1"><a class="header-anchor" href="#状态的保持和恢复" aria-hidden="true">#</a> 状态的保持和恢复</h4><p>save(); restore();</p><h5 id="记住最常用的用法" tabindex="-1"><a class="header-anchor" href="#记住最常用的用法" aria-hidden="true">#</a> 记住最常用的用法</h5><ul><li>(1) 先保存默认状态 save()</li><li>(2) 修改状态进行绘制</li><li>(3) restore() 恢复状态</li></ul><h3 id="画布保存-base64-编码内容-了解" tabindex="-1"><a class="header-anchor" href="#画布保存-base64-编码内容-了解" aria-hidden="true">#</a> 画布保存 base64 编码内容(了解)</h3><ul><li>把 canvas 绘制的内容 输出成 base64 内容。</li><li>语法：canvas.toDataURL(type, encoderOptions);</li><li>例如：canvas.toDataURL(&quot;image/png&quot;,1);</li><li>参数： <ul><li>type，设置输出的类型，比如 image/png image/jpeg 等</li><li>encoderOptions： 0-1 之间的数字，用于标识输出图片的质量，1 表示无损压缩(可选)</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataURL<span class="token punctuation">)</span>
<span class="token comment">//   &quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby</span>
<span class="token comment">// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC&quot;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#img-demo&#39;</span><span class="token punctuation">)</span> <span class="token comment">//拿到图片的dom对象</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span> <span class="token comment">//将画布的内容给图片标签显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),t=[l];function c(r,o){return n(),e("div",null,t)}const u=a(i,[["render",c],["__file","Canvas.html.vue"]]);export{u as default};
