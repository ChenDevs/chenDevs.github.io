import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,b as n,a as t,d as s,e as l}from"./app-8KNOzAlN.js";const i={},u=l(`<h1 id="_09-状态提升-共享状态" tabindex="-1"><a class="header-anchor" href="#_09-状态提升-共享状态" aria-hidden="true">#</a> 09. 状态提升 (共享状态)</h1><p>通常，<strong>多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去</strong>。</p><p>在 React 中，<strong>将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”</strong></p><p>两个输入框共享数据的例子：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> scaleNames <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;摄氏度&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token string">&#39;华氏度&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 转摄氏度</span>
<span class="token keyword">function</span> <span class="token function">toCelsius</span><span class="token punctuation">(</span><span class="token parameter">fahrenheit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>fahrenheit <span class="token operator">-</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">9</span>
<span class="token punctuation">}</span>

<span class="token comment">// 转华氏度</span>
<span class="token keyword">function</span> <span class="token function">toFahrenheit</span><span class="token punctuation">(</span><span class="token parameter">celsius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>celsius <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">32</span>
<span class="token punctuation">}</span>

<span class="token comment">// 转换，为空时返回空，否则返回保留三位小数的浮点数</span>
<span class="token keyword">function</span> <span class="token function">tryConvert</span><span class="token punctuation">(</span><span class="token parameter">temperature<span class="token punctuation">,</span> convert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
  <span class="token comment">// Math.round返回一个数字四舍五入后的整数</span>
  <span class="token keyword">const</span> rounded <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>output <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span>
  <span class="token keyword">return</span> rounded<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 水是否会沸腾</span>
<span class="token keyword">function</span> <span class="token function">BoilingVerdict</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>celsius <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">水会沸腾.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">水不会沸腾.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// 子组件 - 输入框</span>
<span class="token keyword">class</span> <span class="token class-name">TemperatureInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// 接收父组件传入props</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 绑定回调函数，并修正this</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理change</span>
  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// e是合成事件对象，通过e.target.value 取值</span>
    <span class="token comment">// 调用父组件传入的onTemperatureChange函数，并传值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onTemperatureChange</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

    <span class="token comment">// 当子组件输入框值改变时调用父组件的onTemperatureChange方法，并传出值。</span>
    <span class="token comment">// 另外，onTemperatureChange命名方式：\`在&lt;子组件&gt;变更\`</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收父组件传入的温度值</span>
    <span class="token keyword">const</span> temperature <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>temperature
    <span class="token comment">// 接收父组件传入的衡量方式</span>
    <span class="token keyword">const</span> scale <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>scale

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">输入温度-</span><span class="token punctuation">{</span>scaleNames<span class="token punctuation">[</span>scale<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token plain-text">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>temperature<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 父组件 - 计算器</span>
<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// 接收父组件传入props</span>

    <span class="token comment">// 绑定事件回调，并修正this</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleCelsiusChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleCelsiusChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleFahrenheitChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleFahrenheitChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建初始状态值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理\`摄氏度\`变更</span>
  <span class="token function">handleCelsiusChange</span><span class="token punctuation">(</span><span class="token parameter">temperature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// temperature接收到子组件传来的参数，并通过setState修改状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> temperature <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理\`华氏度\`变更</span>
  <span class="token function">handleFahrenheitChange</span><span class="token punctuation">(</span><span class="token parameter">temperature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// temperature接收到子组件传来的参数，并通过setState修改状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> temperature <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 渲染函数（每当state改变都会调用）</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取得当前state下的值</span>
    <span class="token keyword">const</span> scale <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>scale
    <span class="token keyword">const</span> temperature <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>temperature

    <span class="token comment">// 根据scale值取得相应的温度数据</span>
    <span class="token keyword">const</span> celsius <span class="token operator">=</span>
      scale <span class="token operator">===</span> <span class="token string">&#39;f&#39;</span> <span class="token operator">?</span> <span class="token function">tryConvert</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> toCelsius<span class="token punctuation">)</span> <span class="token operator">:</span> temperature
    <span class="token keyword">const</span> fahrenheit <span class="token operator">=</span>
      scale <span class="token operator">===</span> <span class="token string">&#39;c&#39;</span> <span class="token operator">?</span> <span class="token function">tryConvert</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> toFahrenheit<span class="token punctuation">)</span> <span class="token operator">:</span> temperature

    <span class="token comment">// 返回渲染的元素</span>
    <span class="token comment">// 插入子组件TemperatureInput传入相应的参数，onTemperatureChange指定为当前组件的回调函数</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TemperatureInput</span></span>
          <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">temperature</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>celsius<span class="token punctuation">}</span></span>
          <span class="token attr-name">onTemperatureChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleCelsiusChange<span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TemperatureInput</span></span>
          <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">temperature</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fahrenheit<span class="token punctuation">}</span></span>
          <span class="token attr-name">onTemperatureChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleFahrenheitChange<span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BoilingVerdict</span></span> <span class="token attr-name">celsius</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>celsius<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 渲染DOM</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Calculator</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://codepen.io/gaearon/pen/WZpxpz?editors=0010",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"在 CodePen 上尝试",-1),d=n("p",null,"::: note",-1),v=n("ol",null,[n("li",null,"父组件给所有子组件传入 state 的值"),n("li",null,"子组件修改值时调用父组件的方法并把值传出"),n("li",null,"父组件接收到值之后修改 state"),n("li",null,"state 被修改之后重新执行 render 函数，并回到第 1 步 :::")],-1),m=n("h3",{id:"小结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#小结","aria-hidden":"true"},"#"),s(" 小结")],-1),b=n("p",null,"任何可变数据应当只有一个相对应的唯一“数据源”",-1),h=n("li",null,"通常，state 都是首先添加到需要渲染数据的组件中去",-1),g=n("li",null,"然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中",-1),y={href:"https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,[n("p",null,"“存在”于组件中的任何 state，仅有组件自己能够修改它")],-1),_=n("li",null,[n("p",null,"如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于 state 中。（如上例中，经过 tryConvert 方法转换的后的值。）")],-1),w=n("h3",{id:"react-开发者工具-debug",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-开发者工具-debug","aria-hidden":"true"},"#"),s(" React 开发者工具（debug）")],-1),C={href:"https://github.com/facebook/react/tree/master/packages/react-devtools",target:"_blank",rel:"noopener noreferrer"};function x(T,j){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[k,t(a)])]),d,v,m,n("ul",null,[n("li",null,[b,n("ul",null,[h,g,n("li",null,[s("你应当依靠"),n("a",y,[s("自上而下的数据流"),t(a)]),s("，而不是尝试在不同组件间同步 state。")])])]),f,_]),w,n("p",null,[s("当你在 UI 中发现错误时，可以使用 "),n("a",C,[s("React 开发者工具"),t(a)]),s(" 来检查问题组件的 props，并且按照组件树结构逐级向上搜寻，直到定位到负责更新 state 的那个组件。")])])}const I=p(i,[["render",x],["__file","09.状态提升.html.vue"]]);export{I as default};
