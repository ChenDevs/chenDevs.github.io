import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,b as n,d as p,a as c,e as l}from"./app-a5c32edc.js";const i={},d={href:"https://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="module-模块介绍" tabindex="-1"><a class="header-anchor" href="#module-模块介绍" aria-hidden="true">#</a> Module 模块介绍</h2><ul><li><code>Module</code>模块:一个一个的局部作用域的代码块</li><li><code>Module</code> 解决的问题：</li></ul><p>(1) 模块化的问题</p><p>(2) 消除全局变量</p><p>(3) 管理加载顺序</p><ul><li>使用 <code>script </code>标签加载模块:只要用到 <code>import</code> 或 <code>export</code>，在使用 <code>script</code> 标签加载的时候，就要加上 <code>type=&quot;module&quot;</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./xxx.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--以下写法和👆的写法等价--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;xxx.js&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入与导出" tabindex="-1"><a class="header-anchor" href="#导入与导出" aria-hidden="true">#</a> 导入与导出</h2><p>如果一个模块没有<code>导出</code>，也可以进行<code>导入</code>，被导入的代码都会执行一遍，也仅仅会执行一遍</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;xxx.js&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用<code>export default</code>时，对应的<code>import</code>语句不需要使用大括号；第二组是不使用<code>export default</code>时，对应的<code>import</code>语句需要使用大括号。</p><p><code>export default</code>命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此<code>export default</code>命令只能使用一次。所以，<code>import</code>命令后面才不用加大括号，因为只可能唯一对应<code>export default</code>命令。</p></div><h3 id="export-default-和对应的-import" tabindex="-1"><a class="header-anchor" href="#export-default-和对应的-import" aria-hidden="true">#</a> export default 和对应的 import</h3><p>为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到<code>export default</code>命令，为模块指定默认输出。</p><p>本质上，<code>export default</code>就是输出一个叫做<code>default</code>的变量或方法，然后系统允许你为它取任意名字,正是因为<code>export default</code>命令其实只是输出一个叫做<code>default</code>的变量，所以它后面不能跟变量声明语句</p><p>一个模块只能有<strong>一个</strong> <strong><code>export default</code></strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出</span>
<span class="token keyword">const</span> age <span class="token operator">=</span><span class="token number">123</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> age
<span class="token comment">// 导入</span>
<span class="token keyword">import</span> age <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
<span class="token comment">// 导入,可以随意命名,但不建议这样使用</span>
<span class="token keyword">import</span> xxx <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
<span class="token comment">//--------------------------------------</span>
<span class="token comment">// 导出匿名函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 导出具名函数，在模块外部是无效的。加载的时候，视同匿名函数加载</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="export-和对应的-import" tabindex="-1"><a class="header-anchor" href="#export-和对应的-import" aria-hidden="true">#</a> export 和对应的 import</h3><ol><li>单个导出</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第一种</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token comment">// 第二种</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> age <span class="token punctuation">}</span>
<span class="token comment">// ------------</span>
<span class="token comment">// 导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>多个导出</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Person<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
<span class="token comment">// ------------</span>
<span class="token comment">// 导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Person<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>导出或导入时起别名</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Person <span class="token keyword">as</span> ren<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
<span class="token comment">// ------------</span>
<span class="token comment">// 导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ren<span class="token punctuation">,</span> age <span class="token keyword">as</span> sui <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整体导入" tabindex="-1"><a class="header-anchor" href="#整体导入" aria-hidden="true">#</a> 整体导入</h3><p>整体导入中包括了<code>export</code> 导出 和 <code>export default </code>导出 的所有内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="同时导入" tabindex="-1"><a class="header-anchor" href="#同时导入" aria-hidden="true">#</a> 同时导入</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>export default 导出的内容必须写在最前面</p></div><p>同时导入<code>export dafault</code>和<code>export</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> age2<span class="token punctuation">,</span> <span class="token punctuation">{</span> func<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function u(k,m){const s=e("ExternalLinkIcon");return t(),o("div",null,[n("p",null,[n("a",d,[p("ES6 入门教程:Module 的语法"),c(s)])]),r])}const b=a(i,[["render",u],["__file","Module模块.html.vue"]]);export{b as default};
