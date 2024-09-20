import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as d,b as a,d as n,a as e,e as s}from"./app-Efa2_n6B.js";const l={},u=s(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><h3 id="bgckground-color" tabindex="-1"><a class="header-anchor" href="#bgckground-color" aria-hidden="true">#</a> bgckground-color</h3><ul><li>表示背景颜色</li><li>可以用十六进制，rgb(),rgba()</li><li>padding 区域是有背景颜色的</li></ul><h3 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> background-image</h3><p>用来设置背景图片，图片路径要写到 ur1()圆括号中，可以是相对路径，也可以是 http://开头的绝对路径</p><h3 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat" aria-hidden="true">#</a> background-repeat</h3><p>用来设置背景的重复模式</p><ul><li>repeat:x，y 均平铺（默认）</li><li>repeat-x:x 平铺</li><li>repeat-y:y 平铺</li><li>no-repeat:不平铺</li></ul><h3 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size" aria-hidden="true">#</a> background-size</h3><ul><li>属性用来设置背景图片的尺寸</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span>100px 200px<span class="token punctuation">;</span> 宽度 高度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>值也可以用百分数来设置，表示为盒子宽、高的百分之多少</li><li>需要等比例设置的值，写 auto</li></ul><h4 id="contain-和-cover" tabindex="-1"><a class="header-anchor" href="#contain-和-cover" aria-hidden="true">#</a> contain 和 cover</h4><ul><li><p>contain 和 cover 是两个特殊的 background-size 的值</p></li><li><p>contain 表示将背景图片智能改变尺寸以容纳到盒子里</p></li><li><p>cover 表示将背景图片智能改变尺寸以撑满盒子</p></li></ul><p>::: warning 注意</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/contain和 cover.png" alt="contain和 cover" tabindex="0" loading="lazy"><figcaption>contain和 cover</figcaption></figure><p>上面是 contain:很明显 cover 会裁剪图片</p><p>:::</p>`,18),p={id:"background-origin",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#background-origin","aria-hidden":"true"},"#",-1),g=s("<p>background-origin 属性规定 background-position 属性相对于什么位置来定位</p><p>如果背景图像的 background-attachment 属性为 &quot; fixed &quot;，则该属性没有效果</p><table><thead><tr><th>padding-box(默认值)</th><th>背景图像相对于内边距框来定位</th></tr></thead><tbody><tr><td>border-box</td><td>背景图像相对于边框盒来定位</td></tr><tr><td>content-box</td><td>背景图像相对于内容框来定位</td></tr></tbody></table>",3),b={href:"https://www.w3school.com.cn/tiy/c.asp?f=css_background-origin&p=2",target:"_blank",rel:"noopener noreferrer"},k={id:"background-clip",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#background-clip","aria-hidden":"true"},"#",-1),v=a("p",null,"用来设置元素的背景裁切到哪个盒子",-1),_=a("ul",null,[a("li",null,"border-box:背景延伸至边框（默认值）"),a("li",null,"padding-box:背景延伸至内边（ padding），不会绘制到边框处（仅在 dotted、 dashed 边框可察觉）"),a("li",null,"content-box:背景被裁剪至内容区")],-1),x={id:"background-attachment",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#background-attachment","aria-hidden":"true"},"#",-1),y=s(`<p>决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。</p><ul><li>fixed:自己滚动条不动，外部滚动条不动</li><li>local:自己滚动条动，外部滚动条动</li><li>scroll:自己滚动条不动，外部滚动条动（默认值）</li></ul><h3 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h3><ul><li>可以设置背景图片出现在盒子的什么位置</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>background-position：100px 200px；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>可以用 top、 bottom、 center、left、right 描述图片出现的位置</li></ul><h3 id="css-精灵" tabindex="-1"><a class="header-anchor" href="#css-精灵" aria-hidden="true">#</a> CSS 精灵</h3><ul><li>CSS 精灵：将多个小图标合并制作到一张图片上，使用 background-position 属性单独显示其中一个，这样的技术叫做 CSS 精灵技术，也叫作 CSS 雪碧图</li><li>CSS 精灵可以減少 HTTP 请求数，加快网页显示速度。缺点也很明显：不方便测量、后期改动麻烦</li></ul><h3 id="background-综合属性" tabindex="-1"><a class="header-anchor" href="#background-综合属性" aria-hidden="true">#</a> background 综合属性</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> [background-color] [background-image] [background-repeat]
  [background-attachment] [background-position] / [ background-size]
  [background-origin] [background-clip]<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: warning 注意</p>`,11),z={href:"https://blog.csdn.net/SilenceJude/article/details/83268875",target:"_blank",rel:"noopener noreferrer"},S=s(`<p>注意：如果简写形式中含有 background-size 属性，那么必须同时写上 background-position 属性，如果省略了就会导致样式失效</p><p>总结就是：<strong>size 和 position 属性在简写的情况下，要么都写，要么都不写。都写的时候 size 前面需要加/</strong></p><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2><h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h3><ul><li>盒子的 background-image 属性可以用 linear-gradient()形式创建线性渐变背景</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to 渐变方向 开始颜色 结束颜色</p><ul><li><p>渐变方向也可以写成度数 eg:45deg</p></li><li><p>可以有多个颜色值，并且可以用百分数定义它们出现的位置</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> yellow 20%<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h3><p>盒子的 background- image 属性可以用 radial- gradient()形式创建径向渐变背景</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>50% 50%<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>百分数代表圆心坐标</p>`,13);function w(C,B){const i=o("Badge"),t=o("ExternalLinkIcon");return c(),d("div",null,[u,a("h3",p,[h,n(" background-origin "),e(i,{text:"不常用"})]),g,a("p",null,[a("a",b,[n("演示"),e(t)])]),a("h3",k,[m,n(" background-clip "),e(i,{text:"不常用"})]),v,_,a("h3",x,[f,n(" background-attachment "),e(i,{text:"不常用"})]),y,a("p",null,[n("如果"),a("a",z,[n("background"),e(t)]),n("-position 和 background-size 同时设置，需要在 background-size 前面加“/”，类似的简写语法在 font 和 border-radius 中也有")]),S])}const E=r(l,[["render",w],["__file","背景与渐变.html.vue"]]);export{E as default};
