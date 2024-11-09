import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as s,d as n,a as t,e}from"./app-qa6sU7xA.js";const i={},u=e(`<h1 id="_05-事件处理" tabindex="-1"><a class="header-anchor" href="#_05-事件处理" aria-hidden="true">#</a> 05. 事件处理</h1><h2 id="与传统-html-绑定事件的区别" tabindex="-1"><a class="header-anchor" href="#与传统-html-绑定事件的区别" aria-hidden="true">#</a> 与传统 HTML 绑定事件的区别</h2><p>传统的 HTML：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">activateLasers</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Activate Lasers<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 React 中略微不同：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 1.事件名为小驼峰； 2.传入函数以大括号包裹函数名形式</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>activateLasers<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Activate Lasers</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</li><li>使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</li></ul><h3 id="阻止默认事件-合成事件对象" tabindex="-1"><a class="header-anchor" href="#阻止默认事件-合成事件对象" aria-hidden="true">#</a> 阻止默认事件 (合成事件对象)</h3><p>在 React 中，你需要这样阻止默认事件：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ActionLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The link was clicked.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Click me
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=s("code",null,"e",-1),k=s("strong",null,"合成事件",-1),d={href:"https://www.w3.org/TR/DOM-Level-3-Events/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zh-hans.reactjs.org/docs/events.html",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"SyntheticEvent",-1),h=s("h2",{id:"绑定事件的方式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#绑定事件的方式","aria-hidden":"true"},"#"),n(" 绑定事件的方式")],-1),m=s("p",null,[n("使用 React 时，你一般不需要使用 "),s("code",null,"addEventListener"),n(" 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。")],-1),b={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"Toggle",-1),f=e(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Toggle</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">isToggleOn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 为了在回调中使用 \`this\`，这个绑定是必不可少的</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>；
  <span class="token punctuation">}</span>

  <span class="token function">hadleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">isToggleOn</span><span class="token operator">:</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>isToggleOn
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>
      <span class="token comment">// 为了能在这里使用 this.handleClick调用方法，因此需要在构造函数内添加handleChick属性指向回调方法 ？</span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isToggleOn <span class="token operator">?</span> <span class="token string">&#39;ON&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;OFF&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Toggle</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=s("code",null,"this",-1),w={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"this",-1),y=s("code",null,"this.handleClick",-1),j=s("code",null,"onClick",-1),R=s("code",null,"this",-1),S=s("code",null,"undefined",-1),L={href:"https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/",target:"_blank",rel:"noopener noreferrer"},T=s("code",null,"()",-1),E=s("code",null,"onClick={this.handleClick}",-1),J=s("strong",null,[n("为这个方法绑定 "),s("code",null,"this")],-1),O=s("code",null,"bind",-1),z={href:"https://babeljs.io/docs/plugins/transform-class-properties/",target:"_blank",rel:"noopener noreferrer"},B=e(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此语法确保 \`handleClick\` 内的 \`this\` 已被绑定。</span>
  <span class="token comment">// 注意: 这是 *实验性* 语法。</span>
  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),D={href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"},F={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此语法确保 \`handleClick\` 内的 \`this\` 已被绑定。</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此语法问题在于每次渲染 <code>LoggingButton</code> 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。<strong>我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题</strong>。</p><h3 id="事件命名规范" tabindex="-1"><a class="header-anchor" href="#事件命名规范" aria-hidden="true">#</a> 事件命名规范</h3><p>在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 <code>on[Event]</code>，将处理事件的监听方法命名为 <code>handle[Event]</code> 这样的格式。</p><h2 id="向事件处理程序传递参数" tabindex="-1"><a class="header-anchor" href="#向事件处理程序传递参数" aria-hidden="true">#</a> 向事件处理程序传递参数</h2><p>在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 <code>id</code> 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Delete Row</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Delete Row</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),A={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",target:"_blank",rel:"noopener noreferrer"},W={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},M=s("code",null,"Function.prototype.bind",-1),N=s("p",null,[n("在这两种情况下，"),s("strong",null,[n("React 的事件对象 "),s("code",null,"e"),n(" 会被作为第二个参数传递")]),n("。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 "),s("code",null,"bind"),n(" 的方式，事件对象以及更多的参数将会被隐式的进行传递。")],-1);function I(V,G){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("在这里，"),r,n(" 是一个"),k,n("。React 根据 "),s("a",d,[n("W3C 规范"),t(a)]),n("来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。React 事件与原生事件不完全相同。如果想了解更多，请查看 "),s("a",v,[g,t(a)]),n(" 参考指南。")]),h,m,s("p",null,[n("当你使用 "),s("a",b,[n("ES6 class"),t(a)]),n(" 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 "),_,n(" 组件会渲染一个让用户切换开关状态的按钮：")]),f,s("p",null,[n("你必须谨慎对待 JSX 回调函数中的 "),x,n("，在 JavaScript 中，class 的方法默认不会"),s("a",w,[n("绑定"),t(a)]),n(),C,n("。如果你忘记绑定 "),y,n(" 并把它传入了 "),j,n("，当你调用这个函数的时候 "),R,n(" 的值为 "),S,n("。")]),s("p",null,[n("这并不是 React 特有的行为；这其实与 "),s("a",L,[n("JavaScript 函数工作原理"),t(a)]),n("有关。通常情况下，如果你没有在方法后面添加 "),T,n("，例如 "),E,n("，你应该"),J,n("。")]),s("p",null,[n("如果觉得使用 "),O,n(" 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 "),s("a",z,[n("public class fields 语法"),t(a)]),n("，你可以使用 class fields 正确的绑定回调函数：")]),B,s("p",null,[s("a",D,[n("Create React App"),t(a)]),n(" 默认启用此语法。")]),s("p",null,[n("如果你没有使用 class fields 语法，你可以在回调中使用"),s("a",F,[n("箭头函数"),t(a)]),n("：")]),q,s("p",null,[n("上述两种方式是等价的，分别通过"),s("a",A,[n("箭头函数"),t(a)]),n("和 "),s("a",W,[M,t(a)]),n(" 来实现。")]),N])}const X=p(i,[["render",I],["__file","05.事件处理.html.vue"]]);export{X as default};
