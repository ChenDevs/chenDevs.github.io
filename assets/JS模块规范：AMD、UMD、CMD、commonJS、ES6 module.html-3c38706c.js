import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-b1d14657.js";const p={},t=e(`<h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> commonJS</h2><ul><li>特点：</li></ul><blockquote><p>1、模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。<br> 2、模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行——同步加载。</p></blockquote><ul><li>环境：服务器环境</li><li>应用：nodejs 的模块规范是参照 commonJS 实现的。</li><li>语法：</li></ul><blockquote><p>1、导入：require(&#39;路径&#39;)<br> 2、导出：module.exports 和 exports</p></blockquote><ul><li>注意：module.exports 和 exports 的的区别是 exports 只是对 module.exports 的一个引用，相当于 Node 为每个模块提供一个 exports 变量，指向 module.exports。这等同在每个模块头部，有一行<code>var exports = module.exports;</code>这样的命令。</li><li>demo</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token comment">// 相当于这里还有一行：var exports = module.exports;代码</span>
exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;Hello world&#39;</span> <span class="token comment">// 相当于：module.exports.a = &#39;Hello world&#39;;</span>

<span class="token comment">// b.js</span>
<span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 打印出 hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h2><ul><li>特点：</li></ul><blockquote><p>1、异步加载<br> 2、管理模块之间的依赖性，便于代码的编写和维护。</p></blockquote><ul><li>环境：浏览器环境</li><li>应用：requireJS 是参照 AMD 规范实现的</li><li>语法：</li></ul><blockquote><p>1、导入：require([&#39;模块名称&#39;], function (&#39;模块变量引用&#39;){// 代码});<br> 3、导出：define(function (){return &#39;值&#39;);</p></blockquote><ul><li>demo</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// b.js</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">moduleA</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 打印出：hello world</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h2><ul><li>特点</li></ul><blockquote><p>1、CMD 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。</p></blockquote><ul><li>环境：浏览器环境</li><li>应用：seajs 是参照 UMD 规范实现的，requireJS 的最新的几个版本也是部分参照了 UMD 规范的实现</li><li>语法：</li></ul><blockquote><p>1、导入：define(function(require, exports, module) {});<br> 2、导出：define(function (){return &#39;值&#39;);</p></blockquote><ul><li>demo</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// b.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 打印出：hello world</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h2><ul><li>特点：</li></ul><blockquote><p>1、兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式</p></blockquote><ul><li>环境：浏览器或服务器环境</li><li>应用：无</li><li>语法：</li></ul><blockquote><p>1、无导入导出规范，只有如下的一个常规写法：</p></blockquote><ul><li>常规写法：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//AMD</span>
  <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//Node, CommonJS 之类的</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">//浏览器全局变量(root 即 window)</span>
  root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">\\$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//方法</span>
  <span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">//暴露公共方法</span>
  <span class="token keyword">return</span> myFunc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-module" tabindex="-1"><a class="header-anchor" href="#es6-module" aria-hidden="true">#</a> ES6 module</h2><ul><li>特点：</li></ul><blockquote><p>1、按需加载（编译时加载）<br> 2、import 和 export 命令只能在模块的顶层，不能在代码块之中（如：if 语句中）,import()语句可以在代码块中实现异步动态按需动态加载</p></blockquote><ul><li>环境：浏览器或服务器环境（以后可能支持）</li><li>应用：ES6 的最新语法支持规范</li><li>语法：</li></ul><blockquote><p>1、导入：import {模块名 A，模块名 B...} from &#39;模块路径&#39;<br> 2、导出：export 和 export default<br> 3、import(&#39;模块路径&#39;).then()方法</p></blockquote><ul><li>注意：export 只支持对象形式导出，不支持值的导出，export default 命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做 default 的变量或方法。</li><li>规范：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_错误的写法_</span><span class="token regex-delimiter">/</span></span>
  <span class="token comment">// 写法一</span>
  <span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// 写法二</span>
  <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> m<span class="token punctuation">;</span>

  <span class="token comment">// 写法三</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> MyModual <span class="token keyword">from</span> <span class="token string">&#39;./myModual&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_正确的三种写法_</span><span class="token regex-delimiter">/</span></span>
  <span class="token comment">// 写法一</span>
  <span class="token keyword">export</span> <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// 写法二</span>
  <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 写法三</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token punctuation">{</span>n <span class="token keyword">as</span> m<span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 写法四</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> n<span class="token punctuation">;</span>

  <span class="token comment">// 写法五</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./myModule.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>export1<span class="token punctuation">,</span> export2<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...·</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 写法六</span>
  Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./module1.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./module2.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./module3.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>module1<span class="token punctuation">,</span> module2<span class="token punctuation">,</span> module3<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ···
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","JS模块规范：AMD、UMD、CMD、commonJS、ES6 module.html.vue"]]);export{d as default};
