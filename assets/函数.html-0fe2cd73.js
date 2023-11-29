import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-04d4e570.js";const p={},e=t(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>和变量类似，函数必须先定义然后才能使用</p><p>使用 function 关键字定义函数， function 是“功能”的意思</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的调用" tabindex="-1"><a class="header-anchor" href="#函数的调用" aria-hidden="true">#</a> 函数的调用</h2><p>执行函数体中的所有语句，就称为“调用函数&quot;</p><p>调用函数非常简单，只需在函数名字后书写圆括号对即可:<code>fun()</code></p><h2 id="函数声明的提升" tabindex="-1"><a class="header-anchor" href="#函数声明的提升" aria-hidden="true">#</a> 函数声明的提升</h2><p>和变量声明提升类似，函数声明也可以被提升</p><p>如果函数是用函数表达式的写法定义的，则没有提升特性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//引发错误</span>

<span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而且函数是优先变量进行提升的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//2</span>

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 变量声明提升，无法覆盖提升的函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-的预解析机制" tabindex="-1"><a class="header-anchor" href="#js-的预解析机制" aria-hidden="true">#</a> JS 的预解析机制</h2><p>全局作用域，函数(局部)作用域，都是通过以下两个步骤进行预解析的。</p><ol><li><p>先读取有 var 的变量(<strong>没有使用 var 的变量是不会被预解析的</strong>)，给赋值为：<code>undefined</code>。如果两个变量重名，并不影响预解析的过程，就写一个变量就行，因为都将变量赋值为 undefined（在逐行读取时，只是不同的赋值而已。），如果有函数名和变量重名，那就直接去掉变量，不进行解析。如果函数中存在参数，那么参数也一样使用 var 进行解析。如：var argument=undefined;</p></li><li><p>再读取 function 后面的函数---fn，如果有多个函数名重复，那么取最后面一个函数进行声明。</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 打印函数a函数体（function a() { console.log(&#39;a&#39;) }）</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>

<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预解析过程" tabindex="-1"><a class="header-anchor" href="#预解析过程" aria-hidden="true">#</a> 预解析过程</h3><ol><li>首先预解析到有<code>变量 a</code>存在，因此记录下 <code>a</code>这个名字，和其值 <code>undefined</code></li><li>接着预解析到有<code>函数 a</code>声明，记录下<code>函数名 a</code></li><li>但是发现已经记录了一个 <code>a</code> ，因此第 1 步操作无效，（<strong>如果有函数名和变量重名，那就直接去掉变量，不进行解析</strong>）将<strong>函数体与 a 这个名字相关联</strong></li><li>解析完毕</li></ol><p><strong>结果</strong>：<code>a = function () { console.log(&#39;a&#39;) }</code></p><h3 id="执行过程" tabindex="-1"><a class="header-anchor" href="#执行过程" aria-hidden="true">#</a> 执行过程</h3><ol><li>打印变量 a 的值 <code>function a() { console.log(&#39;a&#39;) }</code></li><li>变量 a 赋值为 10，将原来关联的函数覆盖</li><li>打印变量 a 的值 10</li><li>打印变量 a 的值 10</li><li>执行完毕</li></ol><h2 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h2><ul><li>参数是函数内的一些待定值，在调用函数时，必须传入这些参数的具体值</li><li>函数的参数可多可少，函数可以没有参数，也可以有多个参数，多个参数之间需要用逗号隔开</li><li>形参和实参，&quot;形实结合&quot;</li><li>函数的参数也是局部变量</li></ul><h3 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> arguments</h3><p>函数内 arguments 表示它接收到的实参列表，它是一个类数组对象<br> 类数组对象：所有属性均为从 0 开始的自然数序列，并且有 length 属性，和数组类似可以用方括号书写下标访问对象的某个属性值，但是<strong>不能调用数组的方法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;arguments长度&#39;</span> <span class="token operator">+</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h2><ul><li><p>函数体内可以使用 return 关键字表示“函数的返回值”</p></li><li><p>调用一个有返回值的函数，可以被当做一个普通值，从而可以出现在任何可以书写值的地方</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用函数时，一旦遇见 return 语句则会立即退出函数，将执行权交还给调用者</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&#39;b&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 这条语句不会输出</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> char <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// b</span>
<span class="token comment">// console.log(char);</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><p>在函数中被使用，但它既不是函数参数、也不是函数的局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说，就是一个自由变量。而引用了自由变量的函数，就叫闭包</p><p>它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。</p><h3 id="使用闭包的注意点" tabindex="-1"><a class="header-anchor" href="#使用闭包的注意点" aria-hidden="true">#</a> 使用闭包的注意点</h3><p><strong>不能滥用闭包</strong> 否则会造成网页的性能问题，严重时可能导致内存泄露。所谓内存泄漏是指程序中已动态分配的内存由于某种原因未释放或无法释放。解决这个问题的办法就是在不使用这些变量时，及时把不需要的局部变量全部删除，即将它们置为 null</p><h3 id="闭包的两道面试题" tabindex="-1"><a class="header-anchor" href="#闭包的两道面试题" aria-hidden="true">#</a> 闭包的两道面试题</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> fun1 <span class="token operator">=</span> <span class="token function">addCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> fun2 <span class="token operator">=</span> <span class="token function">addCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>答案</summary><p>1 1 2 2</p></details><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token function-variable function">numadd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num2 <span class="token operator">+=</span> <span class="token number">10</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num1 <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> fn2
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">numadd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>答案</summary><p>执行结果： 2,110,3 （numdd 是定义在全局作用域的函数）</p></details><h2 id="立即执行函数-iife" tabindex="-1"><a class="header-anchor" href="#立即执行函数-iife" aria-hidden="true">#</a> 立即执行函数 IIFE</h2><p>IIFE（ Immediately Invoked Function Expression，立即调用函数表达式）是一种特殊的 JavaScript 函数写法，一旦被定义，就立即被调用。</p><p><strong><em>IIFE 会通过声明并立即执行一个函数来创建作用域------你不知道的 js(上)</em></strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IIFE 可以在一些场合（如 for 循环中）将全局变量变为局部变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 变量i是全局变量，所有函数都共享内存中的同一个变量i</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 IIFE 解决：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","函数.html.vue"]]);export{d as default};
