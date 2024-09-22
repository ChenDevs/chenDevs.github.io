import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as s,d as n,a as t,e}from"./app-4DcLzKWR.js";const u={},i=e(`<h1 id="_02-使用-state-hook" tabindex="-1"><a class="header-anchor" href="#_02-使用-state-hook" aria-hidden="true">#</a> 02. 使用 State Hook</h1><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明一个叫 &quot;count&quot; 的 state 变量</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将通过将这段代码与一个等价的 class 示例进行比较来开始学习 Hook。</p><h2 id="等价的-class-组件示例" tabindex="-1"><a class="header-anchor" href="#等价的-class-组件示例" aria-hidden="true">#</a> 等价的 Class 组件示例</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          Click me
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state 初始值为 <code>{ count: 0 }</code> ，当用户点击按钮后，我们通过调用 <code>this.setState()</code> 来增加 <code>state.count</code>。整个章节中都将使用该 class 的代码片段做示例。</p><h3 id="hook-在-class-内部是不起作用" tabindex="-1"><a class="header-anchor" href="#hook-在-class-内部是不起作用" aria-hidden="true">#</a> Hook 在 class 内部是不起作用</h3><p><strong>Hook 在 class 内部是不起作用的</strong>。但你可以使用它们来取代 class 。</p><h2 id="调用-usestate-方法的时候做了什么" tabindex="-1"><a class="header-anchor" href="#调用-usestate-方法的时候做了什么" aria-hidden="true">#</a> 调用 <code>useState</code> 方法的时候做了什么?</h2><p>它定义一个 “state 变量”。我们的变量叫 <code>count</code>， 但是我们可以叫他任何名字，比如 <code>banana</code>。这是一种在函数调用时保存变量的方式 —— <code>useState</code> 是一种新方法，它与 class 里面的 <code>this.state</code> 提供的功能完全相同。<strong>一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。</strong></p><h2 id="usestate-需要哪些参数" tabindex="-1"><a class="header-anchor" href="#usestate-需要哪些参数" aria-hidden="true">#</a> <code>useState</code> 需要哪些参数？</h2><p><code>useState()</code> 方法里面<strong>唯一的参数就是初始 state</strong>。不同于 class 的是，我们可以按照需要使用数字或字符串对其进行赋值，而不一定是对象。在示例中，只需使用数字来记录用户点击次数，所以我们传了 <code>0</code> 作为变量的初始 state。（如果我们想要在 state 中存储两个不同的变量，只需调用 <code>useState()</code> 两次即可。）</p><h2 id="usestate-方法的返回值是什么" tabindex="-1"><a class="header-anchor" href="#usestate-方法的返回值是什么" aria-hidden="true">#</a> <code>useState</code> 方法的返回值是什么？</h2><p>返回值为：当前 state 以及更新 state 的函数。这就是我们写 <code>const [count, setCount] = useState()</code> 的原因。这与 class 里面 <code>this.state.count</code> 和 <code>this.setState</code> 类似，唯一区别就是你需要成对的获取它们。</p><h2 id="理解-usestate" tabindex="-1"><a class="header-anchor" href="#理解-usestate" aria-hidden="true">#</a> 理解 useState</h2><p>既然我们知道了 <code>useState</code> 的作用，我们的示例应该更容易理解了：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明一个叫 &quot;count&quot; 的 state 变量  const [count, setCount] = useState(0);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们声明了一个叫 <code>count</code> 的 state 变量，然后把它设为 <code>0</code>。**React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。**我们可以通过调用 <code>setCount</code> 来更新当前的 <code>count</code>。</p>`,18),d=s("p",null,"注意",-1),r=s("p",null,[n("你可能想知道：为什么叫 "),s("code",null,"useState"),n(" 而不叫 "),s("code",null,"createState"),n("?")],-1),k=s("code",null,"useState",-1),v=s("em",null,"总是",-1),m=s("code",null,"use",-1),h={href:"https://zh-hans.reactjs.org/docs/hooks-rules.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="使用多个-state-变量" tabindex="-1"><a class="header-anchor" href="#使用多个-state-变量" aria-hidden="true">#</a> 使用多个 state 变量</h2><p>将 state 变量声明为一对 <code>[something, setSomething]</code> 也很方便，因为如果我们想使用多个 state 变量，它允许我们给不同的 state 变量取不同的名称：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ExampleWithManyStates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明多个 state 变量</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fruit<span class="token punctuation">,</span> setFruit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;学习 Hook&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上组件中，我们有局部变量 <code>age</code>，<code>fruit</code> 和 <code>todos</code>，并且我们可以单独更新它们：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">handleOrangeClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 和 this.setState({ fruit: &#39;orange&#39; }) 类似</span>
  <span class="token function">setFruit</span><span class="token punctuation">(</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你<strong>不必</strong>使用多个 state 变量。<strong>State 变量可以很好地存储对象和数组，因此，你仍然可以将相关数据分为一组</strong>。然而，不像 class 中的 <code>this.setState</code>，<strong>更新 state 变量总是<em>替换</em>它而不是合并它</strong>。</p>`,6),b={href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"useState",-1),_=s("code",null,"useState",-1),f={href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer",target:"_blank",rel:"noopener noreferrer"};function S(y,w){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,s("blockquote",null,[d,r,s("p",null,[n("“Create” 可能不是很准确，因为 state 只在组件首次渲染的时候被创建。在下一次重新渲染时，"),k,n(" 返回给我们当前的 state。否则它就不是 “state”了！这也是 Hook 的名字"),v,n("以 "),m,n(" 开头的一个原因。我们将在后面的 "),s("a",h,[n("Hook 规则"),t(a)]),n("中了解原因。")])]),g,s("p",null,[n("我们"),s("a",b,[n("在 FAQ 中"),t(a)]),n("提供了更多关于分离独立 state 变量的建议。")]),s("blockquote",null,[s("p",null,[n("把所有 state 都放在同一个 "),x,n(" 调用中，或是每一个字段都对应一个 "),_,n(" 调用，这两方式都能跑通。当你在这两个极端之间找到平衡，然后把相关 state 组合到几个独立的 state 变量时，组件就会更加的可读。如果 state 的逻辑开始变得复杂，我们推荐 "),s("a",f,[n("用 reducer 来管理它"),t(a)]),n("，或使用自定义 Hook。")])])])}const H=p(u,[["render",S],["__file","02.使用State Hook.html.vue"]]);export{H as default};
