import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as l,b as n,d as s,a as o,e}from"./app-_V2SQyIj.js";const i={},u=e(`<h2 id="iterator-是什么" tabindex="-1"><a class="header-anchor" href="#iterator-是什么" aria-hidden="true">#</a> Iterator 是什么</h2><ol><li>Iterator(遍历器)的作用:它是用来<code>遍历</code>的</li><li>使用 Iterator</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>it:可遍历对象</li><li>Symbol.iterator：可遍历对象的生成方法</li></ul><ol start="3"><li>什么是 Iterator Symbol.iterator（可遍历对象的生成方法）-&gt;it（可遍历对象）-&gt; it.next() -&gt;it. next()-&gt;…(直到 done 为 true) 这个过程被称为<code>Iterator</code></li></ol><h2 id="symbol-详解" tabindex="-1"><a class="header-anchor" href="#symbol-详解" aria-hidden="true">#</a> Symbol 详解</h2>`,6),r={href:"https://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},d=e(`<h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h3><p>创建一个 Symbol 值的方式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//Symbol()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//Symbol()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span> <span class="token comment">// 类型是：Symbol</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">// false 可以知道Symbol的值是唯一的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果同时定义两个 Symbol 值，它们打印的结果都是：Symbol(),为此，我们可以在调用 Symbol 的时候传入一个字符串作为对当前 Symbol 变量的描述：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol2&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//Symbol(&quot;symbol1&quot;)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//Symbol(&quot;symbol2&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： <strong>调用 Symbol 时不可以使用 new 关键字</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//报错，Symbol is not a constructor</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-属性的遍历" tabindex="-1"><a class="header-anchor" href="#symbol-属性的遍历" aria-hidden="true">#</a> Symbol 属性的遍历</h3><p>以 Symbol 类型的变量作为对象属性时，该属性不会出现在 for … in、for … of 循环中 举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 由于 s1 和 s2 是一个变量，而不是字符串，因此需要使用中括号括起来（否则它会被当做字符串使用）</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;夕山雨&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>s1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>s2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for…in 方式遍历 obj 对象时，Symbol 类型的属性没有输出，只输出了 name 属性</p><h3 id="symbol-for-symbol-keyfor" tabindex="-1"><a class="header-anchor" href="#symbol-for-symbol-keyfor" aria-hidden="true">#</a> Symbol.for()，Symbol.keyFor()</h3><p>(1)Symbol.for()：Symbol 提供的一种可以创建相同 Symbol 的机制，就是使用 Symbol.for()方法进行注册。示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;imooc&#39;</span><span class="token punctuation">)</span> <span class="token comment">//全局注册了以&quot;imooc&quot;为描述符的 Symbol</span>
<span class="token comment">//由于描述符&quot;imooc&quot;已被注册到全局，因此这里创建的 Symbol 与上面是同一个</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;imooc&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)Symbol.keyFor()：返回一个全局注册的 Symbol 的描述符</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;imooc&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 返回结果是已经注册过的变量 a 的描述符 imooc</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// imooc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-的作用" tabindex="-1"><a class="header-anchor" href="#symbol-的作用" aria-hidden="true">#</a> Symbol 的作用</h3><p>由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>s1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>s2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 age 是字符串类型的，同名属性会被覆盖，所以 obj 对象中只会有一个 age 属性，而 Symbol 值是唯一的，即使控制台中输出结果看起来是一样的，但他们并不表示同一个值，所以 obj 中 s1 和 s2 都被添加到 obj 对象中</p><p>注： 为了方便区分，可以给 Symbol 值添加描述</p><h3 id="常用内置的-symbol-值-symbol-iterator" tabindex="-1"><a class="header-anchor" href="#常用内置的-symbol-值-symbol-iterator" aria-hidden="true">#</a> 常用内置的 Symbol 值：Symbol.iterator</h3><p>对象的 [Symbol.iterator] 属性，指向该对象的默认遍历器方法 ，凡是具有<code>[Symbol(Symbol.iterator)]</code>属性的对象都是可遍历的，可以使用 for … of 循环依次输出对象的每个属性</p><p>数组和类数组，以及 ES6 新增的 Map、Set 等都原生部署了该方法，因此它们都可遍历</p><h3 id="symbol-与基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#symbol-与基本数据类型转换" aria-hidden="true">#</a> Symbol 与基本数据类型转换</h3><p>（1）Symbol 不能转成数字。示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 报错</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 可以转成布尔值和字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Symbol 值可以通过 String 转成字符串形式，通过 Boolean 转成布尔值</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> s1<span class="token punctuation">)</span> <span class="token comment">// symbol</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span> <span class="token comment">// string</span>
<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bool<span class="token punctuation">)</span> <span class="token comment">// boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iterator-解惑" tabindex="-1"><a class="header-anchor" href="#iterator-解惑" aria-hidden="true">#</a> Iterator 解惑</h2><p>Iterator 是一个统一的<code>遍历方式</code>, 我们一般<strong>不会直接</strong>使用 Iterator 去遍历</p><h2 id="for-of-的用法" tabindex="-1"><a class="header-anchor" href="#for-of-的用法" aria-hidden="true">#</a> for...of 的用法</h2>`,32),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>1.认识 for...of：<strong>Iterator 的封装</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>与 break,continue 一起使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
    <span class="token comment">// continue</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 for...of 中取得数组的索引</li></ol><ul><li>keys()得到的是索引的可遍历对象，可以遍历出索引值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> arr<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>values()得到的是值的可遍历对象，可以遍历出值，<code>多此一举</code>，和直接使用 for...of 方法效果一样</p></li><li><p>entries()得到的是索引+值组成的<code>数组</code>的可遍历对象</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">// 解构赋值</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> arr<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原生可遍历与非原生可遍历" tabindex="-1"><a class="header-anchor" href="#原生可遍历与非原生可遍历" aria-hidden="true">#</a> 原生可遍历与非原生可遍历</h2><ol><li>什么是可遍历</li></ol><p>只要有 <strong>[Symbol.iterator]</strong> 方法，就是可遍历的，只要可遍历，就可以使用 for...of 循环来统一遍历</p><ol start="2"><li>原生可遍历的有哪些？</li></ol><ul><li>数组</li><li>字符串</li><li>Set</li><li>Map</li><li>arguments</li><li>NodeList</li></ul><ol start="3"><li>非原生可遍历的有哪些？ 对象</li></ol><h2 id="使用了-iterator-的场合" tabindex="-1"><a class="header-anchor" href="#使用了-iterator-的场合" aria-hidden="true">#</a> 使用了 Iterator 的场合</h2><ol><li><p>数组的展开运算符</p></li><li><p>数组的解构赋值</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hi&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>只要是原生可遍历的就可以按照数组的方式展开，解构</strong></p><h2 id="遍历总结" tabindex="-1"><a class="header-anchor" href="#遍历总结" aria-hidden="true">#</a> 遍历总结</h2><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><ul><li><p>用于遍历<code>数组</code>,<code>字符串</code>,<code>类数组对象</code>(NodeList,arguments)</p></li><li><p>可以使用 break,continue 语句</p></li></ul><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h3><p><strong>forEach 方法对数组的每个元素执行一次给定的函数</strong></p><ul><li><p>用于遍历<code>数组</code>, <code>Set</code>和<code>Map</code>数据结构</p></li><li><p>可以通过回调函数参数传入<strong>value,key 和自身</strong>,同时可以改变 this 指向(<strong>回调函数为非箭头函数时</strong>)</p></li><li><p><strong>不能使用 break 和 continue 语句</strong></p></li></ul>`,25),b={href:"https://blog.csdn.net/weixin_46837985/article/details/112211133",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"for-in",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#for-in","aria-hidden":"true"},"#"),s(" for in")],-1),y={href:"https://blog.csdn.net/weixin_34051201/article/details/91377138",target:"_blank",rel:"noopener noreferrer"},f=e('<ul><li>用于遍历<code>数组</code>(<strong>不推荐，for...in 不应该用于迭代一个关注索引顺序的 <code>Array</code></strong>),<code>对象</code>,<code>字符串</code></li><li>只能获得 key,<strong>没有 value</strong></li><li>可以使用 break 和 continue 语句</li></ul><h3 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for of</h3><ul><li>用于遍历<code>数组</code>,<code>字符串</code>,<code>Set</code>,<code>Map</code>,<code>NodeList</code>,<code>arguments</code>(<strong>原生可遍历</strong>),<strong>不能直接遍历对象</strong></li><li>默认获得 value,但可以通过 keys(),values(),entries()获得对应可遍历对象</li><li>可以使用 break 和 continue 语句</li></ul>',3);function h(g,S){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("Symbol"),o(a)]),s(" 是 ES6 中引入的一种新的基本数据类型，用于表示一个独一无二的值。它是 JavaScript 中的第七种数据类型，与 undefined、null、Number（数值）、String（字符串）、Boolean（布尔值）、Object（对象）并列。")]),d,n("p",null,[n("a",k,[s("mdn 文档"),o(a)])]),m,n("p",null,[n("a",b,[s("map 和 forEach:数组中 forEach() 和 map() 的区别"),o(a)])]),v,n("p",null,[n("a",y,[s("JavaScript for...in 循环出来的对象属性顺序到底是什么规律？"),o(a)])]),f])}const _=t(i,[["render",h],["__file","遍历器与for...of循环.html.vue"]]);export{_ as default};
