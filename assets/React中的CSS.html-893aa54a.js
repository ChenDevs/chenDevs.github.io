import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,b as n,d as s,a as p,w as a,e as o}from"./app-98dc3ef1.js";const k={},v=o('<blockquote><p>事实上，<code>css</code> 一直是 <code>React</code> 的痛点， 在这一点上，<code>Vue</code> 做的要确实要好于 <code>React</code>，<code>React</code> 官方并没有给出在 <code>React</code> 中统一的样式风格，以下介绍几种 <code>React</code> 中的 <code>CSS</code> 解决方案</p></blockquote><h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h2><p>内联样式是官方推荐的一种 <code>css</code> 样式的写法：</p><ul><li><code>style</code> 接受一个采用小驼峰命名属性的 <code>JavaScript</code> 对象</li><li>并且可以引用 <code>state</code> 中的状态来设置相关的样式</li></ul><p>内联样式的优点:</p><ul><li>内联样式, 样式之间不会有冲突</li><li>可以动态获取当前 <code>state</code> 中的状态</li></ul><p>内联样式的缺点：</p><ul><li>写法上都需要使用驼峰标识</li><li>某些样式没有提示</li><li>大量的样式, 代码混乱</li><li>某些样式无法编写(比如伪类/伪元素)</li></ul><p>所以官方依然是希望内联样式和普通的<code> css</code> 来结合编写</p><h2 id="普通的-css" tabindex="-1"><a class="header-anchor" href="#普通的-css" aria-hidden="true">#</a> 普通的 css</h2><p>普通的 css 我们通常会编写到一个单独的文件，之后再进行引入</p><p>这样的编写方式和普通的网页开发中编写方式是一致的</p><p>组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响。但是普通的 css 都属于全局的 css，<strong>样式之间会相互影响</strong></p><p>这种编写方式最大的问题是样式之间会相互层叠掉</p><h2 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> css modules</h2>',15),m={href:"https://www.ruanyifeng.com/blog/2016/06/css_modules.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"React",-1),g=n("code",null,"webpack",-1),h=o("<p><code>React</code>的脚手架已经内置了<code>css modules</code>的配置：<code>.css/.less/.scss </code>等样式文件都修改成 <code>.module.css/.module.less/.module.scss</code> ，之后就可以引用并且进行使用了</p><p><code>css modules</code>确实解决了局部作用域的问题，也是很多人喜欢在<code>React</code>中使用的一种方案</p><p>但是这种方案也有自己的缺陷：</p><ul><li>引用的类名，不能使用连接符<code>(.home-title)</code>，在<code>JavaScript</code>中是不识别的</li><li>所有的<code>className</code>都必须使用<code>{style.className} </code>的形式来编写,编写较为繁琐</li></ul><p><code>css modules</code> 动态控制<code>className</code>:</p>",5),y=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"buttonClassChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cart"),n("span",{class:"token punctuation"},"."),s("totalAmount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" style"),n("span",{class:"token punctuation"},"."),s(`button
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("cart"),n("span",{class:"token punctuation"},"."),s("totalAmount "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" style"),n("span",{class:"token punctuation"},"."),s(`noMealButton
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" style"),n("span",{class:"token punctuation"},"."),s(`otherButton
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// jsx"),s(`
`),n("span",{class:"token punctuation"},";"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"buttonClassChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"我是一个按钮"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("cart"),n("span",{class:"token punctuation"},"."),s("totalAmount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(" style"),n("span",{class:"token punctuation"},"."),s("button "),n("span",{class:"token operator"},":"),s(" style"),n("span",{class:"token punctuation"},"."),s("noMealButton"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token punctuation"},"{"),s("props"),n("span",{class:"token punctuation"},"."),s("buttonText"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),s("cart"),n("span",{class:"token punctuation"},"."),s("totalAmount "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" style"),n("span",{class:"token punctuation"},"."),s("button"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(" style"),n("span",{class:"token punctuation"},"."),s("noMealButton"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token punctuation"},"{"),s("props"),n("span",{class:"token punctuation"},"."),s("buttonText"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(`
  `),n("span",{class:"token attr-name"},"className"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("style"),n("span",{class:"token punctuation"},"."),s("button"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("cart"),n("span",{class:"token punctuation"},"."),s("totalAmount "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" style"),n("span",{class:"token punctuation"},"."),s("noMealButton"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
  `),n("span",{class:"token punctuation"},"{"),s("props"),n("span",{class:"token punctuation"},"."),s("buttonText"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=o(`<h2 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS in JS</h2><p>“<code>CSS-in-JS</code>” 是指一种模式，其中 <code>CSS</code> 由 <code>JavaScript</code> 生成而不是在外部文件中定义；注意此功能并不是<code> React</code>的一部分，而是由第三方库提供</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;https://styled-components.com/logo.png&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>center<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),j={href:"https://styled-components.com/docs",target:"_blank",rel:"noopener noreferrer"},S=n("code",null," CSS-in-JS",-1),A=n("p",null,[s("安装 "),n("code",null,"styled-components"),s(":")],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` styled-components
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` styled-components
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=o(`<p><code>styled-components</code> 的本质是创建出一个组件：这个组件会被自动添加上一个不重复的 <code>class</code>,<code>styled-components</code> 会给该<code> class</code> 添加相关的样式</p><p>另外，它支持类似于 <code>CSS </code>预处理器一样的特性：</p><ul><li><p>支持样式嵌套，如嵌套后代选择器</p></li><li><p>可以通过<code>&amp;</code>符号获取当前元素</p></li><li><p>使用伪类选择器、伪元素等</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>const AppWrapper = styled.div\`
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
   <span class="token selector">.color</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">a:hover</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#f6d365<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">a::before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;✨&quot;</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>style-conpontents</code>非常强大，此处并非是<code>sc</code>的全部特性，这些说到的点已经可以可以结合 <code>react</code>高效编写<code>css</code>了</p></div><h4 id="props-穿透" tabindex="-1"><a class="header-anchor" href="#props-穿透" aria-hidden="true">#</a> props 穿透</h4><p>props 可以被传递给<code> styled</code> 组件,<code>style-compontents</code>可以自动过滤非<code>html</code>标签属性，<strong>并将标准 html 属性映射到组件 html 结构最外层的标签上</strong></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyInput</span></span>
  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是我的输入组件<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputChange<span class="token punctuation">}</span></span>
  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myInput<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyInput</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">// value,className会映射至组件 html 结构最外层的标签上，而onChange事件会绑定到组件 html 结构最外层的标签上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取 props 需要通过<code>\${}</code>传入一个插值函数，<code>props </code>会作为该函数的参数,这种方式可以有效的解决<strong>动态样式</strong>的问题</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> MyButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> AppWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 100vw;
  height: 100vh;
  background-color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>show <span class="token operator">?</span> <span class="token string">&#39;black&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>show<span class="token punctuation">,</span> setShow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppWrapper</span></span> <span class="token attr-name">show</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>show<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyButton</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setShow</span><span class="token punctuation">(</span><span class="token operator">!</span>show<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        切换背景色
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AppWrapper</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加-attrs-属性" tabindex="-1"><a class="header-anchor" href="#添加-attrs-属性" aria-hidden="true">#</a> 添加 attrs 属性</h4><p>除了直接写在组件上，属性也可以使用<code>attrs</code>进行附加，它会和组件上的属性进行合并，传入<code>styled</code>组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">pleft</span><span class="token operator">:</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>pleft <span class="token operator">||</span> <span class="token string">&#39;5px&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  padding-left: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>pleft<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="样式的继承" tabindex="-1"><a class="header-anchor" href="#样式的继承" aria-hidden="true">#</a> 样式的继承</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>const MainButtion = styled.div\`
  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px 30px<span class="token punctuation">;</span>
\`
<span class="token comment">/* 对MainButton组件样式进行扩展 */</span>
const MenuButton = <span class="token function">styled</span><span class="token punctuation">(</span>MainButton<span class="token punctuation">)</span>\`
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function N(q,R){const c=i("ExternalLinkIcon"),l=i("CodeTabs");return r(),d("div",null,[v,n("p",null,[n("a",m,[s("css modules"),p(c)]),s("并不是"),b,s("特有的解决方案，而是所有使用了类似于"),g,s("配置的环境下都可以使用的")]),h,p(l,{id:"111",data:[{id:"使用函数抽离（适合多条件判断）"},{id:"三元运算符"},{id:"运算符判断"},{id:"模板字符串拼接"}]},{title0:a(({value:t,isActive:e})=>[s("使用函数抽离（适合多条件判断）")]),title1:a(({value:t,isActive:e})=>[s("三元运算符")]),title2:a(({value:t,isActive:e})=>[s("运算符判断")]),title3:a(({value:t,isActive:e})=>[s("模板字符串拼接")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[x]),tab2:a(({value:t,isActive:e})=>[_]),tab3:a(({value:t,isActive:e})=>[f]),_:1}),w,n("p",null,[n("a",j,[s("styled-component"),p(c)]),s("是社区最流行的"),S,s(" 库")]),A,p(l,{id:"138",data:[{id:"npm"},{id:"yarn"}]},{title0:a(({value:t,isActive:e})=>[s("npm")]),title1:a(({value:t,isActive:e})=>[s("yarn")]),tab0:a(({value:t,isActive:e})=>[C]),tab1:a(({value:t,isActive:e})=>[B]),_:1}),M])}const I=u(k,[["render",N],["__file","React中的CSS.html.vue"]]);export{I as default};
