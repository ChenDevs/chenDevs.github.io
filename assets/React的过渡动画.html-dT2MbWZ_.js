import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as k,c as d,b as n,d as s,a as c,w as a,e as i}from"./app-4DcLzKWR.js";const m={},v={href:"https://reactcommunity.org/react-transition-group/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"react-transition-group",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-transition-group","aria-hidden":"true"},"#"),s(" react-transition-group")],-1),g=n("p",null,[n("code",null,"react-transition-group"),s("可以帮助我们方便的实现组件的 入场 和 离场 动画，使用时需要进行额外的安装：")],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"add"),s(` react-transition-group
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-npm line-numbers-mode","data-ext":"npm"},[n("pre",{class:"language-npm"},[n("code",null,`yarn add react-transition-group
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=i(`<h2 id="csstransition" tabindex="-1"><a class="header-anchor" href="#csstransition" aria-hidden="true">#</a> CSSTransition</h2><p>CSSTransition 执行过程中，有三个状态：<code>appear</code>(初次入场)、<code>enter</code>(入场)、<code>exit</code>退场)</p><p>它们对应的 CSS 样式：</p><ul><li>第一类,开始状态：对于的类是<code>-appear</code>、<code>-enter</code>、<code>-exit</code></li><li>第二类,执行动画：对应的类是<code>-appear-active</code>、<code>-enter-active</code>、<code>-exit-active</code></li><li>第三类,执行结束：对应的类是<code>-appear-done</code>、<code>-enter-done</code>、<code>-exit-done</code></li></ul><h3 id="csstransition-常见属性" tabindex="-1"><a class="header-anchor" href="#csstransition-常见属性" aria-hidden="true">#</a> CSSTransition 常见属性</h3><h4 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h4><p>触发进入或者退出状态</p><ul><li>如果添加了 <code>unmountOnExit</code>，那么该组件会在执行退出动画结束后被移除掉；</li><li>当 <code>in</code> 为<code> true</code> 时，触发进入状态，会添加<code>-enter</code>、<code>-enter-acitve</code> 的<code>class</code>，当动画执行结束后，会移除这两个 <code>class</code>，并且添加<code>-enter-done</code> 的 <code>class</code></li><li>当 <code>in</code> 为 <code>false </code>时，触发退出状态，会添加<code>-exit</code>、<code>-exit-active</code> 的 <code>class</code>开始执行动画，当动画执行结束后，会移除这两个 <code>class</code>，并且添加<code>-done-done</code> 的 <code>class</code></li></ul><p>::: tip 比如说，一个 div 的显示/隐藏动画</p><ol><li><code>div </code>显示:对应的<code> class</code> 为<code> card-enter</code> <code>card-enter-active</code> 动画走完为 <code>card-enter-done</code></li><li><code>div </code>消失:对应的<code>class</code>为 <code>card-exit</code> <code>card-exit-active</code> 动画走完为 <code>card-exit-done</code></li></ol><p>:::</p><h4 id="classnames" tabindex="-1"><a class="header-anchor" href="#classnames" aria-hidden="true">#</a> classNames</h4><p>动画 <code>class</code> 的名称</p><p>决定了在编写 <code>css</code> 时，设置为<code>card</code>对应的 <code>class</code> 名称：比如 <code>card-enter</code>、<code>card-enter-active</code>、<code>card-enter-done</code></p><p>这些类名也可以自定义，如：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>classNames<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
 <span class="token literal-property property">appear</span><span class="token operator">:</span> <span class="token string">&#39;my-appear&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">appearActive</span><span class="token operator">:</span> <span class="token string">&#39;my-active-appear&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">appearDone</span><span class="token operator">:</span> <span class="token string">&#39;my-done-appear&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">enter</span><span class="token operator">:</span> <span class="token string">&#39;my-enter&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">enterActive</span><span class="token operator">:</span> <span class="token string">&#39;my-active-enter&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">enterDone</span><span class="token operator">:</span> <span class="token string">&#39;my-done-enter&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">exit</span><span class="token operator">:</span> <span class="token string">&#39;my-exit&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">exitActive</span><span class="token operator">:</span> <span class="token string">&#39;my-active-exit&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">exitDone</span><span class="token operator">:</span> <span class="token string">&#39;my-done-exit&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里就可以结合<code>animate.css</code>实现动画：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CSSTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-transition-group&#39;</span>

<span class="token keyword">function</span> <span class="token function">CssAni</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>show<span class="token punctuation">,</span> setShow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setShow</span><span class="token punctuation">(</span><span class="token operator">!</span>show<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        show
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CSSTransition</span></span>
        <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3000</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">unmountOnExit</span>
        <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>show<span class="token punctuation">}</span></span>
        <span class="token attr-name">classNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">enter</span><span class="token operator">:</span> <span class="token string">&#39;animate__animated&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enterActive</span><span class="token operator">:</span> <span class="token string">&#39;animate__backInRight&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exit</span><span class="token operator">:</span> <span class="token string">&#39;animate__animated&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">exitActive</span><span class="token operator">:</span> <span class="token string">&#39;animate__backOutRight&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          ...
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CSSTransition</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CssAni
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),S={id:"timeout",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#timeout","aria-hidden":"true"},"#",-1),w=i('<p>类添加删除的时间，动画/过渡的时间还是得通过<code>css</code>设置</p><h4 id="appear" tabindex="-1"><a class="header-anchor" href="#appear" aria-hidden="true">#</a> appear</h4><p>是否在初次进入添加动画（需要和 <code>in</code> 同时为<code> true</code>）</p><h4 id="unmountonexit" tabindex="-1"><a class="header-anchor" href="#unmountonexit" aria-hidden="true">#</a> unmountOnExit</h4><p>退出后卸载组件(移除 <code>DOM </code>节点)</p><h2 id="一个栗子-🌰" tabindex="-1"><a class="header-anchor" href="#一个栗子-🌰" aria-hidden="true">#</a> 一个栗子 🌰</h2>',6),_=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" CSSTransition "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-transition-group'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'./CSS.css'"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Css"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("show"),n("span",{class:"token punctuation"},","),s(" setShow"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(`
        `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("show"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        show
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"CSSTransition")]),s(`
        `),n("span",{class:"token attr-name"},"timeout"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"in"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("show"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"appear"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token attr-name"},"classNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("card"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"unmountOnExit"),s(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"CSSTransition")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(` Css
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".card-enter"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("0.7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card-enter-active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" all 300ms"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card-appear"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("0.7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card-appear-active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" all 300ms"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card-exit"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".card-exit-active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"scale"),n("span",{class:"token punctuation"},"("),s("0.7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" all 300ms"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #000"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=i('<h2 id="switchtransition" tabindex="-1"><a class="header-anchor" href="#switchtransition" aria-hidden="true">#</a> SwitchTransition</h2><p><code>SwitchTransition</code> 可以完成两个组件之间切换的炫酷动画：</p><ul><li>比如我们有一个按钮需要在 <code>on</code> 和 <code>off</code> 之间切换，我们希望看到 <code>on</code> 先从左侧退出，<code>off</code> 再从右侧进入</li><li>这个动画在 <code>vue</code> 中被称之为 <code>vue transition modes</code>(过渡模式)</li><li><code>react-transition-group</code> 中使用 <code>SwitchTransition </code>来实现该动画</li></ul><p>SwitchTransition 中主要有一个属性：<code>mode</code>，有两个值</p><ul><li><code>in-out</code>：表示新组件先进入，旧组件再移除</li><li><code>out-in</code>：表示就组件先移除，新组建再进入</li></ul><p>如何使用 <code>SwitchTransition</code> 呢？</p><ul><li><code>SwitchTransition</code> 组件里面要有 <code>CSSTransition</code> 组件，不能直接包裹你想要切换的组件</li><li><code>SwitchTransition</code> 里面的 <code>CSSTransition</code> 组件不再像以前那样接受 <code>in </code>属性来判断元素是何种状态，取而代之的是<code> key</code> 属性</li></ul>',7),j=n("div",{class:"language-jsx line-numbers-mode","data-ext":"jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" SwitchTransition"),n("span",{class:"token punctuation"},","),s(" CSSTransition "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react-transition-group'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'./Switch.css'"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"SWitch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("isShow"),n("span",{class:"token punctuation"},","),s(" setShow"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"SwitchTransition")]),s(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out-in"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"CSSTransition")]),s(`
          `),n("span",{class:"token attr-name"},"key"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),s("isShow "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'on'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'off'"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token attr-name"},"classNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"timeout"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},"}")]),s(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(`
            `),n("span",{class:"token attr-name"},"style"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"marginBottom"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20px'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20px'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"marginLeft"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'30px'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
            `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token function"},"setShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isShow"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token punctuation"},"{"),s("isShow "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'隐藏'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'显示'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"CSSTransition")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"SwitchTransition")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(` SWitch
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".btn-enter"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"translateX"),n("span",{class:"token punctuation"},"("),s("100%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn-enter-active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"translateX"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" all 1000ms"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn-exit"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"translateX"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".btn-exit-active"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"translateX"),n("span",{class:"token punctuation"},"("),s("-100%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),s(" all 1000ms"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N={id:"transitiongroup",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#transitiongroup","aria-hidden":"true"},"#",-1),B=n("p",null,[s("当我们有一组动画时，需要将这些 "),n("code",null,"CSSTransition"),s(" 放入到一个 "),n("code",null,"TransitionGroup"),s(" 中来完成动画,常用于列表")],-1);function O(q,D){const u=p("ExternalLinkIcon"),o=p("CodeTabs"),l=p("Badge");return k(),d("div",null,[n("p",null,[n("a",v,[s("官方文档"),c(u)])]),b,g,c(o,{id:"9",data:[{id:"npm"},{id:"yarn"}]},{title0:a(({value:t,isActive:e})=>[s("npm")]),title1:a(({value:t,isActive:e})=>[s("yarn")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[y]),_:1}),x,n("h4",S,[f,s(" timeout "),c(l,{text:"必需的属性",type:"dange"})]),w,c(o,{id:"125",data:[{id:"CSS.jsx"},{id:"CSS.css"}]},{title0:a(({value:t,isActive:e})=>[s("CSS.jsx")]),title1:a(({value:t,isActive:e})=>[s("CSS.css")]),tab0:a(({value:t,isActive:e})=>[_]),tab1:a(({value:t,isActive:e})=>[C]),_:1},8,["data"]),T,c(o,{id:"186",data:[{id:"Switch.jsx"},{id:"Switch.css"}]},{title0:a(({value:t,isActive:e})=>[s("Switch.jsx")]),title1:a(({value:t,isActive:e})=>[s("Switch.css")]),tab0:a(({value:t,isActive:e})=>[j]),tab1:a(({value:t,isActive:e})=>[A]),_:1},8,["data"]),n("h2",N,[E,s(" TransitionGroup "),c(l,{text:"似乎不太常用",type:"warning"})]),B])}const X=r(m,[["render",O],["__file","React的过渡动画.html.vue"]]);export{X as default};
