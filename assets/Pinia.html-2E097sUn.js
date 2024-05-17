import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as i,a as e,w as l,d as s,b as n,e as r}from"./app-_V2SQyIj.js";const u={},d=n("img",{src:"https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/pinia_logo.svg",style:{width:"200px",height:"200px"}},null,-1),k={href:"https://pinia.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Vue 2",-1),m=n("code",null,"Vue 3",-1),b=r(`<p>本文示例使用 <code>vue3</code> 和组合式 <code>api</code></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> pinia
<span class="token comment"># 或者使用 npm</span>
<span class="token function">npm</span> <span class="token function">install</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js" aria-hidden="true">#</a> main.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><p>Store 是使用 <code>defineStore()</code> 定义的，并且它需要一个<strong>唯一</strong>名称，作为第一个参数传递：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// stores/xxx.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token comment">// useStore 可以是 useUser、useCart 之类的任何东西</span>
<span class="token comment">// 第一个参数是应用程序中 store 的唯一 id</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// other options...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-store" tabindex="-1"><a class="header-anchor" href="#使用-store" aria-hidden="true">#</a> 使用 store</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { storeToRefs } from &#39;pinia&#39; import { useUserStore} from &#39;../store/user&#39;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>userStore<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><p>可以把<code>actions</code>视为组件中的方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-actions" tabindex="-1"><a class="header-anchor" href="#使用-actions" aria-hidden="true">#</a> 使用 actions</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../stores/counterStore&#39;</span>

<span class="token comment">// setup</span>
<span class="token keyword">const</span> counterStore <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">incrementAndPrint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counterStore<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h3><p>有时我们可能需要使 state 在模板中保持响应式，此时应该使用计算属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> tabs <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> tabsStore<span class="token punctuation">.</span>tabs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新" aria-hidden="true">#</a> 热更新</h2><p>当你更改<code>store</code>中的代码时，可能项目无法正常工作</p><p>这时你需要加入热更新支持,如果你有多个 store,那么每个 store 都需要添加</p><p>vite：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// store/user.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">,</span> acceptHMRUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// other options...</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token function">acceptHMRUpdate</span><span class="token punctuation">(</span>useUserStore<span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function h(g,f){const t=a("center"),p=a("ExternalLinkIcon");return c(),i("div",null,[e(t,null,{default:l(()=>[d]),_:1}),s(" [Pinia](https://pinia.vuejs.org/zh/) 是` Vue` 的存储库，它允许您跨组件/页面共享状态。它被认为是`vuex 5.0` "),n("p",null,[n("a",k,[s("Pinia"),e(p)]),s(" 同时支持"),v,s(" 和 "),m]),b])}const _=o(u,[["render",h],["__file","Pinia.html.vue"]]);export{_ as default};
