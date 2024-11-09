import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o,c as i,f as l,b as s,d as n,a as t,e as a}from"./app-8KNOzAlN.js";const u={},d=a(`<h1 id="class-的基本语法" tabindex="-1"><a class="header-anchor" href="#class-的基本语法" aria-hidden="true">#</a> Class 的基本语法</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="类的由来" tabindex="-1"><a class="header-anchor" href="#类的由来" aria-hidden="true">#</a> 类的由来</h3><p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=a(`<p>上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。</p><p>ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过<code>class</code>关键字，可以定义类。</p><p>基本上，ES6 的<code>class</code>可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的<code>class</code>写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的<code>class</code>改写，就是下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义了一个“类”，可以看到里面有一个<code>constructor</code>方法，这就是构造方法，而<code>this</code>关键字则代表实例对象。也就是说，ES5 的构造函数<code>Point</code>，对应 ES6 的<code>Point</code>类的构造方法。</p><p><code>Point</code>类除了构造方法，还定义了一个<code>toString</code>方法。注意，<strong>定义“类”的方法的时候，前面不需要加上<code>function</code>这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。</strong></p><p>ES6 的类，完全可以看作构造函数的另一种写法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">typeof</span> Point <span class="token comment">// &quot;function&quot;</span>
Point <span class="token operator">===</span> <span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表明，类的数据类型就是函数，类本身就指向构造函数。</p><p>使用的时候，也是直接对类使用<code>new</code>命令，跟构造函数的用法完全一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stuff&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span><span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;stuff&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数的<code>prototype</code>属性，在 ES6 的“类”上面继续存在。事实上，<strong>类的所有方法都定义在类的<code>prototype</code>属性上面。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类的实例上面调用方法，其实就是调用原型上的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

b<span class="token punctuation">.</span>constructor <span class="token operator">===</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>b</code>是<code>B</code>类的实例，它的<code>constructor</code>方法就是<code>B</code>类原型的<code>constructor</code>方法。</p><p>由于类的方法都定义在<code>prototype</code>对象上面，所以类的新方法可以添加在<code>prototype</code>对象上面。<strong><code>Object.assign</code>方法可以很方便地一次向类添加多个方法。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>prototype</code>对象的<code>constructor</code>属性，直接指向“类”的本身，这与 ES5 的行为是一致的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Point <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外，<strong>类的内部所有定义的方法，都是不可枚举的</strong>（non-enumerable）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// []</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// [&quot;constructor&quot;,&quot;toString&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>toString</code>方法是<code>Point</code>类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Point</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// [&quot;toString&quot;]</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// [&quot;constructor&quot;,&quot;toString&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码采用 ES5 的写法，<code>toString</code>方法就是可枚举的。</p><h3 id="constructor-方法" tabindex="-1"><a class="header-anchor" href="#constructor-方法" aria-hidden="true">#</a> constructor 方法</h3><p><code>constructor</code>方法是类的默认方法，<strong>通过<code>new</code>命令生成对象实例时，自动调用该方法</strong>。一个类必须有<code>constructor</code>方法，如果没有显式定义，一个空的<code>constructor</code>方法会被默认添加。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，定义了一个空的类<code>Point</code>，JavaScript 引擎会自动为它添加一个空的<code>constructor</code>方法。</p><p><code>constructor</code>方法默认返回实例对象（即<code>this</code>），完全可以指定返回另外一个对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Foo</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>constructor</code>函数返回一个全新的对象，结果导致实例对象不是<code>Foo</code>类的实例。</p><p><strong>类必须使用<code>new</code>调用，否则会报错</strong>。这是它跟普通构造函数的一个主要区别，后者不用<code>new</code>也可以执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Class constructor Foo cannot be invoked without &#39;new&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的实例" tabindex="-1"><a class="header-anchor" href="#类的实例" aria-hidden="true">#</a> 类的实例</h3><p>生成类的实例的写法，与 ES5 完全一样，也是使用<code>new</code>命令。前面说过，如果忘记加上<code>new</code>，像函数那样调用<code>Class</code>，将会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 正确</span>
<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 ES5 一样，实例的属性除非显式定义在其本身（即定义在<code>this</code>对象上），否则都是定义在原型上（即定义在<code>class</code>上）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定义类</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// constructor属性定义在原型上</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x <span class="token comment">// x属性定义在实例上</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y <span class="token comment">// y属性定义在实例上</span>
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// toString属性定义在原型上</span>
    <span class="token keyword">return</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

point<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// (2, 3)</span>

point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
point<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
point<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>x</code>和<code>y</code>都是实例对象<code>point</code>自身的属性（因为定义在<code>this</code>变量上），所以<code>hasOwnProperty</code>方法返回<code>true</code>，而<code>toString</code>是原型对象的属性（因为定义在<code>Point</code>类上），所以<code>hasOwnProperty</code>方法返回<code>false</code>。这些都与 ES5 的行为保持一致。</p><p>与 ES5 一样，类的所有实例共享一个原型对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

p1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> p2<span class="token punctuation">.</span>__proto__
<span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>p1</code>和<code>p2</code>都是<code>Point</code>的实例，它们的原型都是<code>Point.prototype</code>，所以<code>__proto__</code>属性是相等的。</p><p>这也意味着，可以通过实例的<code>__proto__</code>属性为“类”添加方法。</p><blockquote><p><code>__proto__</code> 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 <code>Object.getPrototypeOf</code> 方法来获取实例对象的原型，然后再来为原型添加方法/属性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

p1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function-variable function">printName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Oops&#39;</span>
<span class="token punctuation">}</span>

p1<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Oops&quot;</span>
p2<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Oops&quot;</span>

<span class="token keyword">var</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
p3<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Oops&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在<code>p1</code>的原型上添加了一个<code>printName</code>方法，由于<code>p1</code>的原型就是<code>p2</code>的原型，因此<code>p2</code>也可以调用这个方法。而且，此后新建的实例<code>p3</code>也可以调用这个方法。这意味着，使用实例的<code>__proto__</code>属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。</p><h3 id="取值函数-getter-和存值函数-setter" tabindex="-1"><a class="header-anchor" href="#取值函数-getter-和存值函数-setter" aria-hidden="true">#</a> 取值函数（getter）和存值函数（setter）</h3><p>与 ES5 一样，在“类”的内部可以使用<code>get</code>和<code>set</code>关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;getter&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setter: &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

inst<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span>
<span class="token comment">// setter: 123</span>

inst<span class="token punctuation">.</span>prop
<span class="token comment">// &#39;getter&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>prop</code>属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。</p><p><strong>存值函数和取值函数是设置在属性的 Descriptor 对象上的。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomHTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>innerHTML
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">html</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>
  <span class="token class-name">CustomHTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span>
  <span class="token string">&#39;html&#39;</span>
<span class="token punctuation">)</span>

<span class="token string">&#39;get&#39;</span> <span class="token keyword">in</span> descriptor <span class="token comment">// true</span>
<span class="token string">&#39;set&#39;</span> <span class="token keyword">in</span> descriptor <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，存值函数和取值函数是定义在<code>html</code>属性的描述对象上面，这与 ES5 完全一致。</p><h3 id="属性表达式" tabindex="-1"><a class="header-anchor" href="#属性表达式" aria-hidden="true">#</a> 属性表达式</h3><p>类的属性名，可以采用表达式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> methodName <span class="token operator">=</span> <span class="token string">&#39;getArea&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Square</code>类的方法名<code>getArea</code>，是从表达式得到的。</p><h3 id="class-表达式" tabindex="-1"><a class="header-anchor" href="#class-表达式" aria-hidden="true">#</a> Class 表达式</h3><p>与函数一样，类也可以使用表达式的形式定义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>
  <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Me<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是<code>Me</code>，但是<code>Me</code>只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用<code>MyClass</code>引用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
inst<span class="token punctuation">.</span><span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Me</span>
Me<span class="token punctuation">.</span>name <span class="token comment">// ReferenceError: Me is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，<code>Me</code>只在 Class 内部有定义。</p><p>如果类的内部没用到的话，可以省略<code>Me</code>，也就是可以写成下面的形式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用 Class 表达式，可以写出立即执行的 Class。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>

person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;张三&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>person</code>是一个立即执行的类的实例。</p><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><p><strong>（1）严格模式</strong></p><p>类和模块的内部，默认就是严格模式，所以不需要使用<code>use strict</code>指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。</p><p><strong>（2）不存在提升</strong></p><p>类不存在变量提升（hoist），这一点与 ES5 完全不同。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Foo</code>类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> Foo <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码不会报错，因为<code>Bar</code>继承<code>Foo</code>的时候，<code>Foo</code>已经有定义了。但是，如果存在<code>class</code>的提升，上面代码就会报错，因为<code>class</code>会被提升到代码头部，而<code>let</code>命令是不提升的，所以导致<code>Bar</code>继承<code>Foo</code>的时候，<code>Foo</code>还没有定义。</p><p><strong>（3）name 属性</strong></p><p>由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被<code>Class</code>继承，包括<code>name</code>属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Point<span class="token punctuation">.</span>name <span class="token comment">// &quot;Point&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>name</code>属性总是返回紧跟在<code>class</code>关键字后面的类名。</p><p><strong>（4）Generator 方法</strong></p><p>如果某个方法之前加上星号（<code>*</code>），就表示该方法是一个 Generator 函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> args
  <span class="token punctuation">}</span>
  <span class="token operator">*</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> arg <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> arg
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// hello</span>
<span class="token comment">// world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Foo</code>类的<code>Symbol.iterator</code>方法前有一个星号，表示该方法是一个 Generator 函数。<code>Symbol.iterator</code>方法返回一个<code>Foo</code>类的默认遍历器，<code>for...of</code>循环会自动调用这个遍历器。</p><p><strong>（5）this 的指向</strong></p><p>类的方法内部如果含有<code>this</code>，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
  <span class="token function">printName</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&#39;there&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> printName <span class="token punctuation">}</span> <span class="token operator">=</span> logger
<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: Cannot read property &#39;print&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>printName</code>方法中的<code>this</code>，默认指向<code>Logger</code>类的实例。但是，如果将这个方法提取出来单独使用，<code>this</code>会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是<code>undefined</code>），从而导致找不到<code>print</code>方法而报错。</p><p>一个比较简单的解决方法是，在构造方法中绑定<code>this</code>，这样就不会找不到<code>print</code>方法了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>printName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种解决方法是使用箭头函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Obj</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getThis</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myObj<span class="token punctuation">.</span><span class="token function">getThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> myObj <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数内部的<code>this</code>总是指向定义时所在的对象。上面代码中，箭头函数位于构造函数内部，它的定义生效的时候，是在构造函数执行的时候。这时，箭头函数所在的运行环境，肯定是实例对象，所以<code>this</code>会总是指向实例对象。</p><p>还有一种解决方法是使用<code>Proxy</code>，获取方法的时候，自动绑定<code>this</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">selfish</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token function">value</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">selfish</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2><p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，<strong>加上<code>static</code>关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
foo<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: foo.classMethod is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Foo</code>类的<code>classMethod</code>方法前有<code>static</code>关键字，表明该方法是一个静态方法，可以直接在<code>Foo</code>类上调用（<code>Foo.classMethod()</code>），而不是在<code>Foo</code>类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。</p><p>注意，<strong>如果静态方法包含<code>this</code>关键字，这个<code>this</code>指的是类，而不是实例。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，静态方法<code>bar</code>调用了<code>this.baz</code>，这里的<code>this</code>指的是<code>Foo</code>类，而不是<code>Foo</code>的实例，等同于调用<code>Foo.baz</code>。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。</p><p>父类的静态方法，可以被子类继承。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，父类<code>Foo</code>有一个静态方法，子类<code>Bar</code>可以调用这个方法。</p><p>静态方法也是可以从<code>super</code>对象上调用的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;, too&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello, too&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例属性的新写法" tabindex="-1"><a class="header-anchor" href="#实例属性的新写法" aria-hidden="true">#</a> 实例属性的新写法</h2><p>实例属性除了定义在<code>constructor()</code>方法里面的<code>this</code>上面，也可以定义在类的最顶层。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Getting the current value!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实例属性<code>this._count</code>定义在<code>constructor()</code>方法里面。另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  _count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Getting the current value!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实例属性<code>_count</code>与取值函数<code>value()</code>和<code>increment()</code>方法，处于同一个层级。这时，不需要在实例属性前面加上<code>this</code>。</p><p>这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">foo</span> <span class="token punctuation">{</span>
  bar <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
  baz <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，一眼就能看出，<code>foo</code>类有两个实例属性，一目了然。另外，写起来也比较简洁。</p><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2><p>静态属性指的是 Class 本身的属性，即<code>Class.propName</code>，而不是定义在实例对象（<code>this</code>）上的属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">1</span>
Foo<span class="token punctuation">.</span>prop <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法为<code>Foo</code>类定义了一个静态属性<code>prop</code>。</p>`,122),k={href:"https://github.com/tc39/proposal-class-fields",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"static",-1),m=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> myStaticProp <span class="token operator">=</span> <span class="token number">42</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>myStaticProp<span class="token punctuation">)</span> <span class="token comment">// 42</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个新写法大大方便了静态属性的表达。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 老写法</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
Foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// 新写法</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> prop <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，老写法的静态属性定义在类的外部。整个类生成以后，再生成静态属性。这样让人很容易忽略这个静态属性，也不符合相关代码应该放在一起的代码组织原则。另外，新写法是显式声明（declarative），而不是赋值处理，语义更好。</p><h2 id="私有方法和私有属性" tabindex="-1"><a class="header-anchor" href="#私有方法和私有属性" aria-hidden="true">#</a> 私有方法和私有属性</h2><h3 id="现有的解决方案" tabindex="-1"><a class="header-anchor" href="#现有的解决方案" aria-hidden="true">#</a> 现有的解决方案</h3><p>私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。</p><p>一种做法是在命名上加以区别。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token punctuation">{</span>
  <span class="token comment">// 公有方法</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_bar</span><span class="token punctuation">(</span>baz<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 私有方法</span>
  <span class="token function">_bar</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>snaf <span class="token operator">=</span> baz<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>_bar</code>方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。</p><p>另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> baz<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>snaf <span class="token operator">=</span> baz<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>foo</code>是公开方法，内部调用了<code>bar.call(this, baz)</code>。这使得<code>bar</code>实际上成为了当前模块的私有方法。</p><p>还有一种方法是利用<code>Symbol</code>值的唯一性，将私有方法的名字命名为一个<code>Symbol</code>值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> snaf <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;snaf&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">myClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// 公有方法</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">(</span>baz<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 私有方法</span>
  <span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">baz</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>snaf<span class="token punctuation">]</span> <span class="token operator">=</span> baz<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>bar</code>和<code>snaf</code>都是<code>Symbol</code>值，一般情况下无法获取到它们，因此达到了私有方法和私有属性的效果。但是也不是绝对不行，<code>Reflect.ownKeys()</code>依然可以拿到它们。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">myClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>myClass<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// [ &#39;constructor&#39;, &#39;foo&#39;, Symbol(bar) ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Symbol 值的属性名依然可以从类的外部拿到。</p><h3 id="私有属性的提案" tabindex="-1"><a class="header-anchor" href="#私有属性的提案" aria-hidden="true">#</a> 私有属性的提案</h3>`,19),b={href:"https://github.com/tc39/proposal-private-methods",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"class",-1),y=s("code",null,"#",-1),w=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  #count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Getting the current value!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#count
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#count</code>就是私有属性，只能在类的内部使用（<code>this.#count</code>）。如果在类的外部使用，就会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IncreasingCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
counter<span class="token punctuation">.</span>#count <span class="token comment">// 报错</span>
counter<span class="token punctuation">.</span>#count <span class="token operator">=</span> <span class="token number">42</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在类的外部，读取私有属性，就会报错。</p><p>下面是另一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  #x

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#x <span class="token operator">=</span> <span class="token operator">+</span>x
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#x
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#x <span class="token operator">=</span> <span class="token operator">+</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#x</code>就是私有属性，在<code>Point</code>类之外是读取不到这个属性的。由于井号<code>#</code>是属性名的一部分，使用时必须带有<code>#</code>一起使用，所以<code>#x</code>和<code>x</code>是两个不同的属性。</p><p>之所以要引入一个新的前缀<code>#</code>表示私有属性，而没有采用<code>private</code>关键字，是因为 JavaScript 是一门动态语言，没有类型声明，使用独立的符号似乎是唯一的比较方便可靠的方法，能够准确地区分一种属性是否为私有属性。另外，Ruby 语言使用<code>@</code>表示私有属性，ES6 没有用这个符号而使用<code>#</code>，是因为<code>@</code>已经被留给了 Decorator。</p><p>这种写法不仅可以写私有属性，还可以用来写私有方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #a
  #b
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#a <span class="token operator">=</span> a
    <span class="token keyword">this</span><span class="token punctuation">.</span>#b <span class="token operator">=</span> b
  <span class="token punctuation">}</span>
  <span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> #a <span class="token operator">+</span> #b
  <span class="token punctuation">}</span>
  <span class="token function">printSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#sum()</code>就是一个私有方法。</p><p>另外，私有属性也可以设置 getter 和 setter 方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  #xValue <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">#x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> #xValue
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">#x</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#xValue <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#x</code>是一个私有属性，它的读写都通过<code>get #x()</code>和<code>set #x()</code>来完成。</p><p>私有属性不限于从<code>this</code>引用，只要是在类的内部，实例也可以引用私有属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  #privateValue <span class="token operator">=</span> <span class="token number">42</span>
  <span class="token keyword">static</span> <span class="token function">getPrivateValue</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> foo<span class="token punctuation">.</span>#privateValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Foo<span class="token punctuation">.</span><span class="token function">getPrivateValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码允许从实例<code>foo</code>上面引用私有属性。</p><p>私有属性和私有方法前面，也可以加上<code>static</code>关键字，表示这是一个静态的私有属性或私有方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FakeMath</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">22</span> <span class="token operator">/</span> <span class="token number">7</span>
  <span class="token keyword">static</span> #totallyRandomNumber <span class="token operator">=</span> <span class="token number">4</span>

  <span class="token keyword">static</span> <span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> FakeMath<span class="token punctuation">.</span>#totallyRandomNumber
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I heard you like random numbers…&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> FakeMath<span class="token punctuation">.</span><span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

FakeMath<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token comment">// 3.142857142857143</span>
FakeMath<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// I heard you like random numbers…</span>
<span class="token comment">// 4</span>
FakeMath<span class="token punctuation">.</span>#totallyRandomNumber <span class="token comment">// 报错</span>
FakeMath<span class="token punctuation">.</span><span class="token function">#computeRandomNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#totallyRandomNumber</code>是私有属性，<code>#computeRandomNumber()</code>是私有方法，只能在<code>FakeMath</code>这个类的内部调用，外部调用就会报错。</p><h2 id="new-target-属性" tabindex="-1"><a class="header-anchor" href="#new-target-属性" aria-hidden="true">#</a> new.target 属性</h2><p><code>new</code>是从构造函数生成实例对象的命令。ES6 为<code>new</code>命令引入了一个<code>new.target</code>属性，该属性一般用在构造函数之中，返回<code>new</code>命令作用于的那个构造函数。如果构造函数不是通过<code>new</code>命令或<code>Reflect.construct()</code>调用的，<code>new.target</code>会返回<code>undefined</code>，因此这个属性可以用来确定构造函数是怎么调用的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;必须使用 new 命令生成实例&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 另一种写法</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;必须使用 new 命令生成实例&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 正确</span>
<span class="token keyword">var</span> notAPerson <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码确保构造函数只能通过<code>new</code>命令调用。</p><p>Class 内部调用<code>new.target</code>，返回当前 Class。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Rectangle<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 输出 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，子类继承父类时，<code>new.target</code>会返回子类。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Rectangle<span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> width<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>new.target</code>会返回子类。</p><p>利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;本类不能实例化&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Shape</code>类不能被实例化，只能用于继承。</p><p>注意，在函数外部，使用<code>new.target</code>会报错。</p>`,33);function h(f,j){const e=c("ExternalLinkIcon");return o(),i("div",null,[d,l(" more "),r,s("p",null,[n("目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个"),s("a",k,[n("提案"),t(e)]),n("提供了类的静态属性，写法是在实例属性的前面，加上"),v,n("关键字。")]),m,s("p",null,[n("目前，有一个"),s("a",b,[n("提案"),t(e)]),n("，为"),g,n("加了私有属性。方法是在属性名之前，使用"),y,n("表示。")]),w])}const S=p(u,[["render",h],["__file","21.Class 的基本语法.html.vue"]]);export{S as default};
