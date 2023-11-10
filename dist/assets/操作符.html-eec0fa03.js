import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as l,b as n,d as a,a as i,e as s}from"./app-33bd63d5.js";const r={},c=s(`<div class="hint-container tip"><p class="hint-container-title">基础概念</p><ul><li>操作符：也叫运算符，是一种符号。通过操作符可以对一个或多个值进行运算，并获取运算结果</li><li>表达式：由数字、运算符、变量的组成的式子，一个表达式往往会产生一个值</li></ul></div><h2 id="一元操作符" tabindex="-1"><a class="header-anchor" href="#一元操作符" aria-hidden="true">#</a> 一元操作符</h2><p>只操作一个值的操作符叫<code>一元操作符</code></p><h3 id="递增-递减操作符" tabindex="-1"><a class="header-anchor" href="#递增-递减操作符" aria-hidden="true">#</a> 递增/递减操作符</h3><p>++是递增操作符，表示在自身基础上加 1</p><p>a++先用再加，++a 先加再用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token operator">++</span>a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递减操作符同理，不做赘述</p><p>另外，这 4 个操作符可以作用于任何值，意思是不限于整数——字符串、布尔值、浮点值，甚至对象都可以。 递增和递减操作符遵循如下规则：</p><ul><li>对于字符串，如果是有效的数值形式，则转换为数值再应用改变。<strong>变量类型从字符串变成数值</strong>。</li><li>对于字符串，如果不是有效的数值形式，<strong>则将变量的值设置为 NaN</strong>。变量类型从字符串变成数值。</li><li>对于布尔值，如果是 false，则转换为 0 再应用改变。变量类型从布尔值变成数值。如果是 true，则转换为 1 再应用改变。变量类型从布尔值变成数值。</li><li>对于浮点值，加 1 或减 1。</li><li>如果是对象，则调用其 valueOf()方法取得可以操作的值。对得到的值应用上述规则。<strong>如果是 NaN，则调用 toString()并再次应用其他规则</strong>。<strong>变量类型从对象变成数值</strong>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
a<span class="token operator">--</span> <span class="token comment">// 值变成2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一元加和减" tabindex="-1"><a class="header-anchor" href="#一元加和减" aria-hidden="true">#</a> 一元加和减</h3><p>一元加由一个加号（+）表示，放在变量前头，对数值没有任何影响</p><p><strong>如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换：布尔值 false 和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf()和/或 toString()方法以得到可以转换的值。</strong></p><p>一元减由一个减号（-）表示，放在变量前头，主要用于把数值变成负值</p><p>在应用到非数值时，一元减会遵循与一元加同样的规则，先对它们进行转换，然后再取负值</p><p>一元加和减操作符主要用于基本的算术，但也可以像上面的例子那样，<strong>用于数据类型转换</strong>。</p><h2 id="布尔操作符" tabindex="-1"><a class="header-anchor" href="#布尔操作符" aria-hidden="true">#</a> 布尔操作符</h2><p>布尔操作符的优先级是：<strong>非 → 与 → 或</strong>，而在 js 表达式中的优先级是：<strong>非 → 数学（乘性，加性）→ 关系 → 布尔</strong>，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">||</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="逻辑非" tabindex="-1"><a class="header-anchor" href="#逻辑非" aria-hidden="true">#</a> 逻辑非</h3><p>逻辑非操作符由一个叹号（<code>!</code>）表示，<strong>这个操作符始终返回布尔值，无论应用到的是什么数据类型</strong>。逻辑非操作符首先将操作数转换为布尔值，然后再对其取反。 逻辑非操作符会遵循如下规则：</p><ul><li>如果操作数是对象，则返回 false。</li><li>如果操作数是空字符串，则返回 true。</li><li>如果操作数是非空字符串，则返回 false。</li><li>如果操作数是数值 0，则返回 true。</li><li>如果操作数是非 0 数值（包括 Infinity），则返回 false。</li><li>如果操作数是 null，则返回 true。</li><li>如果操作数是 NaN，则返回 true。</li><li>如果操作数是 undefined，则返回 true。</li></ul><p><strong>逻辑非操作符也可以用于把任意值转换为布尔值</strong>。同时使用两个叹号（<code>!!</code>），相当于调用了转型函数 <code>Boolean()</code></p><h3 id="逻辑与" tabindex="-1"><a class="header-anchor" href="#逻辑与" aria-hidden="true">#</a> 逻辑与</h3><p>逻辑与操作符由两个和号（<code>&amp;&amp;</code>）表示，应用到两个值,两个值<strong>都真才真</strong></p><h3 id="逻辑或" tabindex="-1"><a class="header-anchor" href="#逻辑或" aria-hidden="true">#</a> 逻辑或</h3><p>逻辑或操作符由两个管道符（||）表示，两个值<strong>有真就真</strong></p><h3 id="短路运算" tabindex="-1"><a class="header-anchor" href="#短路运算" aria-hidden="true">#</a> 短路运算</h3><h4 id="a-b" tabindex="-1"><a class="header-anchor" href="#a-b" aria-hidden="true">#</a> a&amp;&amp;b</h4><ul><li>如果 a 是真的，b 的真假决定结果，b 真结果就真，b 假结果就假，所以它的结果就是 b</li><li>如果 a 是假的，不用看 b 了，被短路了。结果就是 a</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token number">6</span> <span class="token comment">// 6</span>
<span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="a-b-1" tabindex="-1"><a class="header-anchor" href="#a-b-1" aria-hidden="true">#</a> a||b</h4><ul><li>如果 a 是真的，不用看 b 了，被短路了。结果就是 a</li><li>如果 a 是假的，b 的真假决定结果，b 真结果就真，b 假结果就假，所以它的结果就是 b</li></ul><div class="hint-container tip"><p class="hint-container-title">如果出现布尔运算符连续的情况</p><p>先计算前面的结果，拿这个结果和后面的进行计算：</p><p><code>false || false || 123</code> =&gt;123</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getDisplayName</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> WrappedComponent<span class="token punctuation">.</span>displayName <span class="token operator">||</span> WrappedComponent<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;Component&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="乘性操作符" tabindex="-1"><a class="header-anchor" href="#乘性操作符" aria-hidden="true">#</a> 乘性操作符</h2><p>ECMAScript 定义了 3 个乘性操作符：<strong>乘法、除法和取模。</strong></p><p>乘法操作符由一个星号（*）表示，可以用于计算两个数值的乘积。</p><p>除法操作符由一个斜杠（/）表示，用于计算第一个操作数除以第二个操作数的商</p><h3 id="取模操作符" tabindex="-1"><a class="header-anchor" href="#取模操作符" aria-hidden="true">#</a> 取模操作符</h3><ul><li><p>取模操作符用百分号“%″表示</p></li><li><p><code>a%b</code>表示求 a 除以 b 的余数，它不关心整数部分，只关心余数</p></li></ul><h2 id="指数操作符" tabindex="-1"><a class="header-anchor" href="#指数操作符" aria-hidden="true">#</a> 指数操作符</h2><p>ECMAScript 7 新增了<code>指数操作符</code>，<code>Math.pow()</code>现在有了自己的操作符<code>**</code>，结果是一样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加性操作符" tabindex="-1"><a class="header-anchor" href="#加性操作符" aria-hidden="true">#</a> 加性操作符</h2><p>加性操作符，即加法和减法操作符</p><p><strong>加法操作符</strong>有“加法”和“连字符”两种作用,如果加号两边的操作数<strong>都是数字</strong>，则为“加法”</p><p>如果有一方是字符串的话，加号的作用就是将他们进行拼接,在这种情况下，另一操作数是对象、数值或布尔值，则调用它们的 toString()方法以获取字符串，对于 undefined 和 null ,则调用 String() 函数， 分别获取 &quot;undefined&quot;和&quot;null&quot;</p>`,49),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf",target:"_blank",rel:"noopener noreferrer"},u=s(`<p><strong>减法操作符</strong>，除了基本的数学运算外，只要有一个操作数是字符串、布尔值、null 或 undefined，则先在后台使用 Number()将其转换为数值，然后再执行数学运算。如果转换结果是 NaN，则减法计算的结果是 NaN；如果有任一操作数是对象，则调用其 valueOf()方法取得表示它的数值。如果该值是 NaN，则减法计算的结果是 NaN。如果对象没有 valueOf()方法，则调用其 toString()方法，然后再将得到的字符串转换为数值</p><div class="hint-container tip"><p class="hint-container-title">一道 NT 面试题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span><span class="token string">&#39;b&#39;</span> <span class="token comment">// -&gt; &quot;aNaN&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>因为 + &#39;b&#39; 等于 NaN，所以结果为 &quot;aNaN&quot;</strong></p></div><h2 id="关系操作符" tabindex="-1"><a class="header-anchor" href="#关系操作符" aria-hidden="true">#</a> 关系操作符</h2><p>关系操作符执行比较两个值的操作，包括小于（<code>&lt;</code>）、大于（<code>&gt;</code>）、小于等于（<code>&lt;=</code>）和大于等于（<code>&gt;=</code>）,这几个操作符都返回布尔值</p><ul><li>如果操作数都是数值，则执行数值比较。</li><li>如果操作数都是字符串，则逐个比较字符串中对应字符的编码。</li><li>如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。</li><li>如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
a <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在以上代码中，因为 a 是对象，所以会通过 valueOf 转换为原始类型再比较值。</strong></p><ul><li>如果有任一操作数是布尔值，则将其转换为数值再执行比较。</li></ul><div class="hint-container warning"><p class="hint-container-title">js 中没有连比</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">&lt;</span> a <span class="token operator">&lt;=</span> <span class="token number">15</span> <span class="token comment">// ❌</span>

a <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&lt;=</span> <span class="token number">15</span> <span class="token comment">// √</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="相等操作符" tabindex="-1"><a class="header-anchor" href="#相等操作符" aria-hidden="true">#</a> 相等操作符</h2><ul><li><p>两个等号==运算符不比较值的类型，它会进行隐式转换后比较值是否相等</p></li><li><p>三个等号===运算符，不仅比较值是否相同，也比较类型是否相同,<strong>只有两个操作数在不转换的前提下相等才返回 true。</strong></p></li></ul><p><strong>在转换操作数的类型时，<code>相等</code>和<code>不相等操作符</code>遵循如下规则</strong>:</p><ul><li>如果任一操作数是布尔值，则将其转换为数值再比较是否相等。<code>false</code> 转换为 0，<code>true</code>转换为 1。</li><li>如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否 相等。</li><li>如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较。</li></ul><p><strong>在进行比较时，这两个操作符会遵循如下规则</strong>:</p><ul><li><strong>null 和 undefined 相等</strong>。</li><li><strong>null 和 undefined 不能转换为其他类型的值再进行比较</strong>。</li><li>如果有任一操作数是 NaN，则相等操作符返回 false，不相等操作符返回 true。记住：即使两 个操作数都是 NaN，相等操作符也返回 false，因为按照规则，NaN 不等于 NaN。</li><li><strong>如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true。否则，两者不相等。</strong> 全等和不全等操作符与相等和不相等操作符<strong>类似，只不过它们在比较相等时不转换操作数</strong>。</li></ul><h2 id="条件操作符" tabindex="-1"><a class="header-anchor" href="#条件操作符" aria-hidden="true">#</a> 条件操作符</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码执行了条件赋值操作，即根据条件表达式 b 的值决定将哪个值赋 给变量 a 。如果 b 是 true ，则赋值 1 ；如果 b 是 false，则赋值 2。</p><h2 id="赋值操作符" tabindex="-1"><a class="header-anchor" href="#赋值操作符" aria-hidden="true">#</a> 赋值操作符</h2><p>简单赋值用等于号（=）表示，将右手边的值赋给左手边的变量</p><p>每个数学操作符以及其他一些操作符都有对应的复合赋值操作符：</p><ul><li>乘后赋值（*=）</li><li>除后赋值（/=）</li><li>取模后赋值（%=）</li><li>加后赋值（+=）</li><li>减后赋值（-=）</li></ul>`,22);function v(k,m){const e=p("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[a("如果加号两边均是布尔值、null 或 undefined，则先在后台使用 Number()将其转换为数值，然后再执行数学运算。如果转换结果是 NaN，则计算的结果是 NaN；如果有任一操作数是对象，则调用其 "),n("a",d,[a("valueOf()"),i(e)]),a("方法取得表示它的数值。如果该值是 NaN，则计算的结果是 NaN。如果对象没有 valueOf()方法(Math 和 Error 对象没有 valueOf 方法)，则调用其 toString()方法，然后再将得到的字符串转换为数值")]),u])}const g=t(r,[["render",v],["__file","操作符.html.vue"]]);export{g as default};
