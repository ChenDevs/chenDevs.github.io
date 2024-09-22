import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-EWfIkEXe.js";const o={},t=e(`<h2 id="面试会问" tabindex="-1"><a class="header-anchor" href="#面试会问" aria-hidden="true">#</a> 面试会问</h2><blockquote><p>require 的运行机制和缓存策略你了解吗？</p></blockquote><blockquote><p>require 加载模块的是同步还是异步？谈谈你的理解</p></blockquote><blockquote><p>exports 和 module.exports 的区别是什么？</p></blockquote><blockquote><p>require 加载模块的时候加载的究竟是什么？</p></blockquote><h2 id="require" tabindex="-1"><a class="header-anchor" href="#require" aria-hidden="true">#</a> require</h2><p>提到 exports 和 module.exports 我们不得不提到 require 关键字。大家都知道 Node.js 遵循 CommonJS 规范，使用 require 关键字来加载模块。</p><h3 id="require-重复引入问题" tabindex="-1"><a class="header-anchor" href="#require-重复引入问题" aria-hidden="true">#</a> require 重复引入问题</h3><p>问题：不知道小伙伴们在使用 require 引入模块的时候有没有相关，多个代码文件中多次引入相同的模块会不会造成重复呢？</p><p>因为在 C++ 中通常使用#IFNDEF 等关键字来避免文件的重复引入，但是在 Node.js 中无需关心这一点，因为 Node.js 默认先从缓存中加载模块，一个模块被加载一次之后，就会在缓存中维持一个副本，如果遇到重复加载的模块会直接提取缓存中的副本，也就是说在任何时候每个模块都只在缓存中有一个实例。</p><h3 id="require-加载模块的时候是同步还是异步" tabindex="-1"><a class="header-anchor" href="#require-加载模块的时候是同步还是异步" aria-hidden="true">#</a> require 加载模块的时候是同步还是异步？</h3><p>先回答问题，同步的！ 但是面试官要是问你为什么是同步还是异步的呢？ 其实这个答案并不是固定的，但是小伙伴们可以通过这几方面给面试官解释。</p><ol><li>一个作为公共依赖的模块，当然想一次加载出来，同步更好</li><li>模块的个数往往是有限的，而且 Node.js 在 require 的时候会自动缓存已经加载的模块，再加上访问的都是本地文件，产生的 IO 开销几乎可以忽略。</li></ol><h3 id="require-的缓存策略" tabindex="-1"><a class="header-anchor" href="#require-的缓存策略" aria-hidden="true">#</a> require() 的缓存策略</h3><p>Node.js 会自动缓存经过 require 引入的文件，使得下次再引入不需要经过文件系统而是直接从缓存中读取。不过这种缓存方式是经过文件路径定位的，即使两个完全相同的文件，但是位于不同的路径下，会在缓存中维持两份。 可以通过</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span>cache<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取目前在缓存中的所有文件。</p><h2 id="exports-与-module-exports-区别" tabindex="-1"><a class="header-anchor" href="#exports-与-module-exports-区别" aria-hidden="true">#</a> exports 与 module.exports 区别</h2><h3 id="js-文件启动时" tabindex="-1"><a class="header-anchor" href="#js-文件启动时" aria-hidden="true">#</a> js 文件启动时</h3><p>在一个 node 执行一个文件时，会给这个文件内生成一个 exports 和 module 对象， 而 module 又有一个 exports 属性。他们之间的关系如下图，都指向一块{}内存区域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看一张图理解这里更清楚：</p><figure><img src="https://user-gold-cdn.xitu.io/2019/8/16/16c98da07872f7f3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="require-加载模块" tabindex="-1"><a class="header-anchor" href="#require-加载模块" aria-hidden="true">#</a> require()加载模块</h3><p>require()加载模块的时候我们来看一段实例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//koala.js</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;程序员成长指北&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span> <span class="token comment">//能打印出结果为：{}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports<span class="token punctuation">)</span> <span class="token comment">//能打印出结果为：{}</span>

exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;程序员成长指北哦哦&#39;</span> <span class="token comment">//这里辛苦劳作帮 module.exports 的内容给改成 {a : &#39;程序员成长指北哦哦&#39;}</span>

exports <span class="token operator">=</span> <span class="token string">&#39;指向其他内存区&#39;</span> <span class="token comment">//这里把exports的指向指走</span>
<span class="token comment">//test.js</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;/koala&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 打印为 {a : &#39;程序员成长指北哦哦&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看上面代码的打印结果，应该能得到这样的结论：</p><blockquote><p>require 导出的内容是 module.exports 的指向的内存块内容，并不是 exports 的。 简而言之，区分他们之间的区别就是 exports 只是 module.exports 的引用，辅助后者添加内容用的。用内存指向的方式更好理解。</p></blockquote><h3 id="官网中的一个例子" tabindex="-1"><a class="header-anchor" href="#官网中的一个例子" aria-hidden="true">#</a> 官网中的一个例子</h3><p>看一下官方文档中 exports 的应用</p><figure><img src="https://user-gold-cdn.xitu.io/2019/8/16/16c98dda5a72c686?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们经常看到这样的写法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> somethings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码等价于:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> somethings
exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原理很简单，即 module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports 即可。</p><h3 id="使用的一点建议" tabindex="-1"><a class="header-anchor" href="#使用的一点建议" aria-hidden="true">#</a> 使用的一点建议</h3><blockquote><p>建议：在使用的时候更建议大家使用 module.exports（根据下面的例子也能得出）</p></blockquote><p>Node.js 认为每个文件都是一个独立的模块。如果你的包有两个文件，假设是“a.js” 和“b.js”，然后“b.js” 要使用“a.js” 的功能，“a.js” 必须要通过给 exports 对象增加属性来暴露这些功能：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// a.js</span>
    exports<span class="token punctuation">.</span><span class="token function-variable function">verifyPassword</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> password<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完成这步后，所有需要“a.js” 的都会获得一个带有“verifyPassword” 函数属性的对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// b.js</span>
    <span class="token function">require</span><span class="token punctuation">(</span>‘a<span class="token punctuation">.</span>js’<span class="token punctuation">)</span> <span class="token comment">// { verifyPassword: function(user, password, done) { ... } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，如果我们想直接暴露这个函数，而不是让它作为某些对象的属性呢？我们可以覆写 exports 来达到目的，但是我们绝对不能把它当做一个全局变量：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// a.js</span>
    module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> password<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到我们是把“exports” 当做 module 对象的一个属性。“module.exports” 和“exports” 这之间区别是很重要的，而且经常会使 Node.js 新手踩坑。</p>`,45),p=[t];function i(r,c){return a(),n("div",null,p)}const d=s(o,[["render",i],["__file","commonJs详解.html.vue"]]);export{d as default};
