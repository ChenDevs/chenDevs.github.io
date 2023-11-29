import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as s,d as n,a as c,e as r}from"./app-04d4e570.js";const i={},l=s("h1",{id:"vuex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),n(" vuex")],-1),u=s("h2",{id:"vuex-persist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuex-persist","aria-hidden":"true"},"#"),n(" vuex-persist")],-1),d=s("p",null,"Vuex 解决了多视图之间的数据共享问题。但是运用过程中又带来了一个新的问题是，Vuex 的状态存储并不能持久化。也就是说当你存储在 Vuex 中的 store 里的数据，只要一刷新页面，数据就丢失了。",-1),k={href:"https://github.com/championswimmer/vuex-persist",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>安装：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    npm install <span class="token operator">--</span>save vuex<span class="token operator">-</span>persist
    or
    yarn add vuex<span class="token operator">-</span>persist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VuexPersistence <span class="token keyword">from</span> <span class="token string">&#39;vuex-persist&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先创建一个对象并进行配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vuexLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VuexPersistence</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">,</span>
  <span class="token function-variable function">reducer</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">systemInfo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>systemInfo <span class="token comment">//这个就是存入localStorage的值</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入进 vuex 插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>vuexLocal<span class="token punctuation">.</span>plugin<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上设置，各个页面之间跳转，如果刷新某个视图，数据并不会丢失，依然存在，并且不需要在每个 mutations 中手动存取 storage 。</p><p>vuex-persist 的详细属性：</p><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>将状态存储在存储中的键。默认: &#39;vuex&#39;</td></tr><tr><td>storage</td><td>Storage (Web API)</td><td>可传 localStorage, sessionStorage, localforage 或者你自定义的存储对象. 接口必须要有 get 和 set. <strong>默认是: window.localStorage</strong></td></tr><tr><td>saveState</td><td>function (key, state[, storage])</td><td>如果不使用存储，这个自定义函数将保存状态保存为持久性。</td></tr><tr><td>restoreState</td><td>function (key[, storage]) =&gt; state</td><td>如果不使用存储，这个自定义函数处理从存储中检索状态</td></tr><tr><td>reducer</td><td>function (state) =&gt; object</td><td>将状态减少到只需要保存的值。默认情况下，保存整个状态。</td></tr><tr><td>filter</td><td>function (mutation) =&gt; boolean</td><td>突变筛选。看 mutation.type 并返回 true，只有那些你想坚持写被触发。所有突变的默认返回值为 true。</td></tr><tr><td>modules</td><td>string[]</td><td>要持久化的模块列表。</td></tr></tbody></table><h2 id="利用-storage-存储-解决防止刷新页面-vuex-store-丢失的问题" tabindex="-1"><a class="header-anchor" href="#利用-storage-存储-解决防止刷新页面-vuex-store-丢失的问题" aria-hidden="true">#</a> 利用 storage 存储 解决防止刷新页面 vuex store 丢失的问题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在页面加载时读取sessionStorage里的状态信息</span>
<span class="token keyword">const</span> sessionStore <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>storeKey<span class="token punctuation">.</span>vuexStore<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>sessionStore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sessionStore<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>storeKey<span class="token punctuation">.</span>vuexStore<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在页面刷新时将vuex里的信息保存到sessionStorage里</span>
<span class="token comment">// ie、谷歌、360 页面刷新执行顺序 onbeforeunload -&gt; onunload -&gt; onload，关闭执行顺序 onbeforeunload -&gt; onunload</span>
<span class="token comment">// firefox 页面刷新只执行 onunload，页面关闭只执行 onbeforeunload</span>
<span class="token keyword">let</span> eventName <span class="token operator">=</span> <span class="token string">&#39;beforeunload&#39;</span>
<span class="token keyword">const</span> fireFox <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Firefox&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fireFox<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  eventName <span class="token operator">=</span> <span class="token string">&#39;unload&#39;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 根据 currentRefresh 判断是退出还是刷新</span>
  <span class="token keyword">const</span> currentRefresh <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>account<span class="token punctuation">.</span>currentRefresh
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRefresh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>
      storeKey<span class="token punctuation">.</span>vuexStore<span class="token punctuation">,</span>
      <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h1><h2 id="redux-persist" tabindex="-1"><a class="header-anchor" href="#redux-persist" aria-hidden="true">#</a> redux-persist</h2><p>在 React 项目中，我们经常会通过<strong>redux</strong>以及<strong>react-redux</strong>来存储和管理全局数据。但是通过 redux 存储全局数据时，会有这么一个问题，如果用户刷新了网页，那么我们通过 redux 存储的全局数据就会被全部清空，比如登录信息等。</p><p>这个时候，我们就会有全局数据持久化存储的需求。首先我们想到的就是 localStorage，localStorage 是没有时间限制的数据存储，我们可以通过它来实现数据的持久化存储。</p><p>但是在我们已经使用 redux 来管理和存储全局数据的基础上，再去使用 localStorage 来读写数据，这样不仅是工作量巨大，还容易出错。那么有没有结合 redux 来达到持久数据存储功能的框架呢？当然，它就是<strong>redux-persist</strong>。redux-persist 会将 redux 的 store 中的数据缓存到浏览器的 localStorage 中。</p><blockquote><p>redux-persist 的使用</p></blockquote><p>1、对于 reducer 和 action 的处理不变，只需修改 store 的生成代码，修改如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> reducers <span class="token keyword">from</span> <span class="token string">&#39;../reducers/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> persistStore<span class="token punctuation">,</span> persistReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist&#39;</span>
<span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/lib/storage&#39;</span>
<span class="token keyword">import</span> autoMergeLevel2 <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/lib/stateReconciler/autoMergeLevel2&#39;</span>

<span class="token keyword">const</span> persistConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> storage<span class="token punctuation">,</span>
  <span class="token literal-property property">stateReconciler</span><span class="token operator">:</span> autoMergeLevel2 <span class="token comment">// 查看 &#39;Merge Process&#39; 部分的具体情况</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myPersistReducer <span class="token operator">=</span> <span class="token function">persistReducer</span><span class="token punctuation">(</span>persistConfig<span class="token punctuation">,</span> reducers<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>myPersistReducer<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> persistor <span class="token operator">=</span> <span class="token function">persistStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在 index.js 中，将 PersistGate 标签作为网页内容的父标签</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./redux/store/store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> persistor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./redux/store/store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PersistGate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/lib/integration/react&#39;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>PersistGate loading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span> persistor<span class="token operator">=</span><span class="token punctuation">{</span>persistor<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/*网页内容*/</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>PersistGate<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就完成了通过 redux-persist 实现 React 持久化本地数据存储的简单应用</p><p>3、最后我们调试查看浏览器中的 localStorage 缓存数据</p><p>发现数据已经存储到了 localStorage 中，此时刷新网页，redux 中的数据也不会丢失</p>`,26);function m(g,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[l,u,d,s("p",null,[n("引入"),s("a",k,[n("vuex-persist"),c(a)]),n(" 插件，它就是为 Vuex 持久化存储而生的一个插件。不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中。具体用法如下：")]),v])}const f=e(i,[["render",m],["__file","vuex和redux的数据持久化缓存方案.html.vue"]]);export{f as default};
