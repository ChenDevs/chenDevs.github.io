import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,d as s,a as t,e as p}from"./app-XuorXwmJ.js";const i={},u=p(`<h1 id="使用组件的细节点" tabindex="-1"><a class="header-anchor" href="#使用组件的细节点" aria-hidden="true">#</a> 使用组件的细节点</h1><h2 id="解析-dom-模板时的注意事项" tabindex="-1"><a class="header-anchor" href="#解析-dom-模板时的注意事项" aria-hidden="true">#</a> 解析 DOM 模板时的注意事项</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>row</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>row</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>row</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>row</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>row</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>row</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;tr&gt;&lt;td&gt;this is a row&lt;/td&gt;&lt;/tr&gt;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>row</code> 组件在渲染页面时，并不会把<code>tr</code>节点渲染到<code>tbody</code>里面，而是被提升到了和<code>table</code>同一个级别的地方。原因是在 html 编码规范中，<code>tbody</code>里面只能放<code>tr</code>，正确的做法是使用<code>tr</code>标签添加<code>is</code>属性等于组件名称<code>row</code> :</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，<code>ul&gt;li</code>、<code>ol&gt;li</code>、<code>select &gt; option</code> 标签也要注意这样的问题。</p><p>需要注意的是<strong>如果我们从以下来源使用模板的话，这条限制是不存在的</strong>：</p>`,7),r=n("li",null,[s("字符串 (例如："),n("code",null,"template: '...'"),s(")")],-1),d={href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,".vue",-1),g={href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#X-Templates",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,'<script type="text/x-template">',-1),m=p(`<h2 id="子组件内的-data-要使用函数返回" tabindex="-1"><a class="header-anchor" href="#子组件内的-data-要使用函数返回" aria-hidden="true">#</a> 子组件内的 data 要使用函数返回</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;row&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;this is content&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;tr&gt;&lt;td&gt;{{content}}&lt;/td&gt;&lt;/tr&gt;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以这样设计是因为子组件有可能会被调用多次，而每次调用时的 data 数据都应该是独立的。因此需要通过一个函数来实现，每个实例可以维护一份被返回对象的独立的拷贝。</p><p>这样才不会出现每个子组件数据相互影响的情况。</p><h2 id="通过-ref-引用操作-dom" tabindex="-1"><a class="header-anchor" href="#通过-ref-引用操作-dom" aria-hidden="true">#</a> 通过 ref 引用操作 DOM</h2>`,5),h={href:"https://cn.vuejs.org/v2/api/#ref",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>虽然并不推荐我们在使用 vue 的时候操作 DOM，但是某些情况下我们必须要操作 DOM 来实现一些功能，因此可以通过 ref 引用的形式来获取到 DOM 节点。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- \`vm.$refs.p\` 指向DOM元素节点 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \`vm.$refs.child\` 指向组件实例 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ref</code> 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 <code>$refs</code> 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向<strong>组件实例</strong>。</p>`,3);function _(f,q){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[r,n("li",null,[n("a",d,[s("单文件组件 ("),k,s(")"),t(a)])]),n("li",null,[n("a",g,[v,t(a)])])]),m,n("p",null,[n("a",h,[s("ref"),t(a)])]),b])}const x=e(i,[["render",_],["__file","36.使用组件的细节点.html.vue"]]);export{x as default};
