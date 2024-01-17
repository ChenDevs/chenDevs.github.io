import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-VW7Ts50p.js";const p={},e=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>BOM（ Browser Object Model，浏览器对象模型）是 Js 与浏览器窗口交互的接口</p><h2 id="window-对象" tabindex="-1"><a class="header-anchor" href="#window-对象" aria-hidden="true">#</a> window 对象</h2><p>window 对象是当前 JS 脚本运行所处的窗口，而这个窗口中包含 DOM 结构， window.document 属性就是 document 对象</p><p>在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；也就是说，同一个窗口的标签页之间不会共享一个 window 对象</p><h3 id="全局变量是-window-的属性" tabindex="-1"><a class="header-anchor" href="#全局变量是-window-的属性" aria-hidden="true">#</a> 全局变量是 window 的属性</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/全局变量window.png" alt="全局变量window" tabindex="0" loading="lazy"><figcaption>全局变量window</figcaption></figure><p>这就意味着，多个 js 文件之间是共享全局作用域的，即 s 文件没有作用域</p><h3 id="内置函数普遍是-window-的方法" tabindex="-1"><a class="header-anchor" href="#内置函数普遍是-window-的方法" aria-hidden="true">#</a> 内置函数普遍是 window 的方法</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/内置函数普遍是 window的方法.png" alt="内置函数普遍是 window的方法" tabindex="0" loading="lazy"><figcaption>内置函数普遍是 window的方法</figcaption></figure><h3 id="窗口尺寸相关属性" tabindex="-1"><a class="header-anchor" href="#窗口尺寸相关属性" aria-hidden="true">#</a> 窗口尺寸相关属性</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/窗口尺寸相关属性.png" alt="窗口尺寸相关属性" tabindex="0" loading="lazy"><figcaption>窗口尺寸相关属性</figcaption></figure><blockquote><p>document.documentElement 是一个会返回文档对象（document）的根元素的只读属性（如 HTML 文档的 html 元素）。</p></blockquote><h3 id="resize-事件" tabindex="-1"><a class="header-anchor" href="#resize-事件" aria-hidden="true">#</a> resize 事件</h3><p>在窗口大小改变之后，就会触发 resize 事件，可以使用 window.onresize window.addEventListener 来绑定事件处理函数</p><h3 id="已卷动高度" tabindex="-1"><a class="header-anchor" href="#已卷动高度" aria-hidden="true">#</a> 已卷动高度</h3><ul><li>window.scrollY 属性表示在垂直方向已滚动的像素值</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/已卷动高度.png" alt="已卷动高度" tabindex="0" loading="lazy"><figcaption>已卷动高度</figcaption></figure><ul><li>document.documentElement.scrollTop 属性也表示窗口卷动高度</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> scrollTop <span class="token operator">=</span> window<span class="token punctuation">.</span>scrollY <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
<span class="token comment">// 浏览器兼容性考虑</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>document.documentElement.scrollTop<strong>不是</strong>只读的，而 window.scrollY 是<strong>只读</strong>的</p><h3 id="scroll-事件" tabindex="-1"><a class="header-anchor" href="#scroll-事件" aria-hidden="true">#</a> scroll 事件</h3><p>在窗口被卷动之后，就会触发 scroll 事件，可以使用 window.onscroll 或者 window.addEventListener 来绑定事件处理函数</p><h2 id="navigator-对象" tabindex="-1"><a class="header-anchor" href="#navigator-对象" aria-hidden="true">#</a> Navigator 对象</h2><p>window.navigator 属性可以检索 navigator 对象，它内部含有用户此次活动的浏览器的相关属性和标识</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/Navigator对象.png" alt=" Navigator对象" tabindex="0" loading="lazy"><figcaption> Navigator对象</figcaption></figure><h3 id="识别用户浏览器品牌" tabindex="-1"><a class="header-anchor" href="#识别用户浏览器品牌" aria-hidden="true">#</a> 识别用户浏览器品牌</h3><p>识别用户浏览器品牌通常使用 naviator.userAgent 属性</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/识别浏览器品牌.png" alt="识别用户浏览器品牌" tabindex="0" loading="lazy"><figcaption>识别用户浏览器品牌</figcaption></figure><h2 id="history-对象" tabindex="-1"><a class="header-anchor" href="#history-对象" aria-hidden="true">#</a> History 对象</h2><p>window.history 对象提供了操作<strong>浏览器会话历史</strong>的接口</p><p>模拟浏览器回退按钮</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//等同于浏览器的后退按钮</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//等同于back()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location-对象" tabindex="-1"><a class="header-anchor" href="#location-对象" aria-hidden="true">#</a> Location 对象</h2><p>window.location 标识当前所在网址，可以通过给这个属性赋值命令浏览器进行页面跳转</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/Location对象.png" alt="Location对象" tabindex="0" loading="lazy"><figcaption>Location对象</figcaption></figure><h3 id="重新加载当前页面" tabindex="-1"><a class="header-anchor" href="#重新加载当前页面" aria-hidden="true">#</a> 重新加载当前页面</h3><p>可以调用 location 的 reload 方法以重新加载当前页面，参数 true 表示强制从服务器强制加载</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-请求查询参数" tabindex="-1"><a class="header-anchor" href="#get-请求查询参数" aria-hidden="true">#</a> GET 请求查询参数</h3><p>window.location.search 属性即为当前浏览器的 GET 请求查询参数</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/get请求参数.png" alt="get请求参数" tabindex="0" loading="lazy"><figcaption>get请求参数</figcaption></figure><h2 id="bom-特效" tabindex="-1"><a class="header-anchor" href="#bom-特效" aria-hidden="true">#</a> BOM 特效</h2><h3 id="返回顶部" tabindex="-1"><a class="header-anchor" href="#返回顶部" aria-hidden="true">#</a> 返回顶部</h3><p>固定定位 定时器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> timer
box<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
  timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">-=</span> <span class="token number">100</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="楼层导航" tabindex="-1"><a class="header-anchor" href="#楼层导航" aria-hidden="true">#</a> 楼层导航</h3><ul><li>DOM 元素都有<strong>offsetTop</strong>属性(HTMLElement.offsetTop)，表示此元素到定位祖先元素的垂直距离</li><li>定位祖先元素：在祖先中，离自己最近的且拥有定位属性的元素，若祖先都不符合条件，offsetParent 为<strong>body</strong></li><li>利用 scrollTo 实现 smooth(平滑滚动)</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">html,
      body</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#list</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">li</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fd9c4c88<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.contentPart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* 自定义属性修改css样式 */</span>
      <span class="token comment">/* .contentPart[data-n=&#39;one&#39;]{
           background-image:url(./1.jpg) ;
           background-size:cover;
        }
        .contentPart[data-n=&#39;two&#39;]{
           background-image:url(./2.jpg) ;
           background-size:cover;
        }
        .contentPart[data-n=&#39;three&#39;]{
           background-image:url(./3.jpg) ;
           background-size:cover;
        }
        .contentPart[data-n=&#39;four&#39;]{
           background-image:url(./4.jpg) ;
           background-size:cover;
        } */</span>
      <span class="token selector">li.current</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>four<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>four<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contentPart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contentPart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contentPart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contentPart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>four<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// 楼层导航逻辑</span>
      <span class="token keyword">var</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#list li&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> contentParts <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.contentPart&#39;</span><span class="token punctuation">)</span>
      list<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> n <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-n&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">var</span> contentPart <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
            <span class="token string">&#39;.contentPart[data-n=&#39;</span> <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span>
          <span class="token punctuation">)</span>
          <span class="token comment">// 利用scrollTo实现smooth(平滑滚动)</span>
          window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> contentPart<span class="token punctuation">.</span>offsetTop<span class="token punctuation">,</span>
            <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 导航切换</span>
      <span class="token keyword">var</span> offsetTopArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">var</span> nowFloor <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> contentParts<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        offsetTopArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentParts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      offsetTopArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>offsetTopArr<span class="token punctuation">)</span>
      window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> offsetTopArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;=</span> offsetTopArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> s <span class="token operator">&lt;</span> offsetTopArr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> nowFloor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          nowFloor <span class="token operator">=</span> i
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> lis<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              lis<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;current&#39;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              lis<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","BOM.html.vue"]]);export{k as default};
