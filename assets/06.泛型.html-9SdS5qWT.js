import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-8KNOzAlN.js";const t={},p=e(`<h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><p>软件工程中，我们不仅要创建定义良好且一致的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。</p><p>在像 C# 和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。</p><h2 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例" aria-hidden="true">#</a> 基础示例</h2><p>下面来创建第一个使用泛型的例子：<code>identity</code> 函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 <code>echo</code> 命令。</p><p>不用泛型的话，这个函数可能是下面这样：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">identity</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，我们使用 <code>any</code> 类型来定义函数：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">identity</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>any</code> 类型会导致这个函数可以接收任何类型的 <code>arg</code> 参数，但是这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。</p><p>因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。这里，我们使用了<em>类型变量</em>，它是一种特殊的变量，只用于表示类型而不是值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们给 <code>identity</code> 添加了类型变量 <code>T</code>。 <code>T</code> 帮助我们捕获用户传入的类型（比如：<code>number</code>），之后我们就可以使用这个类型。 之后我们再次使用了 <code>T</code> 当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。这允许我们跟踪函数里使用的类型的信息。</p><p>我们把这个版本的 <code>identity</code> 函数叫做泛型，因为它可以适用于多个类型。 不同于使用 <code>any</code>，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。</p><p>我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;myString&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们明确的指定了 <code>T</code> 是 <code>string</code> 类型，并做为一个参数传给函数，使用了 <code>&lt;&gt;</code> 括起来而不是 <code>()</code>。</p><p>第二种方法更普遍。利用了<em>类型推论</em> -- 即编译器会根据传入的参数自动地帮助我们确定 <code>T</code> 的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">&#39;myString&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意我们没必要使用尖括号（<code>&lt;&gt;</code>）来明确地传入类型；编译器可以查看 <code>myString</code> 的值，然后把 <code>T</code> 设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入 <code>T</code> 的类型，在一些复杂的情况下，这是可能出现的。</p><h2 id="使用泛型变量" tabindex="-1"><a class="header-anchor" href="#使用泛型变量" aria-hidden="true">#</a> 使用泛型变量</h2><p>使用泛型创建像 <code>identity</code> 这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。</p><p>看下之前 <code>identity</code> 例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想打印出 <code>arg</code> 的长度。 我们很可能会这样做：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这么做，编译器会报错说我们使用了 <code>arg</code> 的 <code>.length</code> 属性，但是没有地方指明 <code>arg</code> 具有这个属性。记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 <code>.length</code> 属性的。</p><p>现在假设我们想操作 <code>T</code> 类型的数组而不直接是 <code>T</code>。由于我们操作的是数组，所以 <code>.length</code> 属性是应该存在的。我们可以像创建其它数组一样创建这个数组：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以这样理解 <code>loggingIdentity</code> 的类型：泛型函数 <code>loggingIdentity</code>，接收类型参数 <code>T</code> 和参数 <code>arg</code>，它是个元素类型是 <code>T</code> 的数组，并返回元素类型是<code>T</code> 的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时 <code>T</code> 的的类型为 <code>number</code>。 这可以让我们把泛型变量 <code>T</code> 当做类型的一部分使用，而不是整个类型，增加了灵活性。</p><h2 id="泛型类型" tabindex="-1"><a class="header-anchor" href="#泛型类型" aria-hidden="true">#</a> 泛型类型</h2><p>上一节，我们创建了 <code>identity</code> 通用函数，可以适用于不同的类型。 在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。</p><p>泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token operator">=</span> identity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span> <span class="token operator">=</span> identity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用带有调用签名的对象字面量来定义泛型函数：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span> <span class="token operator">=</span> identity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这引导我们去写第一个泛型接口了。我们把上面例子里的对象字面量拿出来做为一个接口：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericIdentityFn</span> <span class="token punctuation">{</span>
  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> GenericIdentityFn <span class="token operator">=</span> identity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们甚至可以把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： <code>Dictionary&lt;string&gt;</code> 而不只是<code> Dictionary</code>）。这样接口里的其它成员也能知道这个参数的类型了。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericIdentityFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> GenericIdentityFn<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> identity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用 <code>GenericIdentityFn</code> 的时候，还得传入一个类型参数来指定泛型类型（这里是：<code>number</code>），锁定了之后代码里使用的类型。对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。</p><p>除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。</p><h2 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h2><p>泛型类看上去与泛型接口差不多。 泛型类使用（ <code>&lt;&gt;</code>）括起泛型类型，跟在类名后面。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  zeroValue<span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>GenericNumber</code> 类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用 <code>number</code> 类型。 也可以使用字符串或其它更复杂的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> stringNumeric <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stringNumeric<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
stringNumeric<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringNumeric<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>stringNumeric<span class="token punctuation">.</span>zeroValue<span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。</p><p>我们在<a href="/chapter2/class">类</a>那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。</p><h2 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h2><p>我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。在 <code>loggingIdentity</code> 例子中，我们想访问 <code>arg</code> 的 <code>length</code> 属性，但是编译器并不能证明每种类型都有 <code>length</code> 属性，所以就报错了。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于操作 <code>any</code> 所有类型，我们想要限制函数去处理任意带有 <code>.length</code> 属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。为此，我们需要列出对于 <code>T</code> 的约束要求。</p><p>我们定义一个接口来描述约束条件，创建一个包含 <code>.length</code> 属性的接口，使用这个接口和 <code>extends</code> 关键字来实现约束：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// OK</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们需要传入符合约束类型的值，必须包含必须的属性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在泛型约束中使用类型参数" tabindex="-1"><a class="header-anchor" href="#在泛型约束中使用类型参数" aria-hidden="true">#</a> 在泛型约束中使用类型参数</h3><p>你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 <code>obj</code> 上，因此我们需要在这两个类型之间使用约束。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>

<span class="token function">getProperty</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// okay</span>
<span class="token function">getProperty</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","06.泛型.html.vue"]]);export{u as default};
