import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-cef5cfc8.js";const c={},o=a(`<p>最近，看了之前写的移动端商城项目，看到了当时写的<code>rem</code>适配的代码，觉得有问题，查了些资料，输出一些我的思考。</p><p>这是当时的代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .12rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>rem</code>是指相对于根元素的字体大小的单位。比如上面的代码我们设置<code>html</code>的字体大小为100<code>px</code>;那<code>1rem</code>=100<code>px</code>；12<code>px</code>=0.12<code>rem</code>；那实际上我们的<code>html</code>字体大小并不会随着设备的视口宽度自动变化，因为它永远是100<code>px</code>;那如何动态进行设置了。找了网上很多资料，觉得<code>vw</code>+<code>rem</code>方案是最简单的：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>26.6666666667vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> .12rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个26.6666666667是怎么来的，1<code>vw</code>是代表当前设备宽度的1%，注意这里要以设计稿的大小进行计算，比如我这个项目的设计稿的宽度为375<code>px</code>(对应100<code>vw</code>),那1<code>px</code>就是100/375<code>vw</code>,100<code>px</code>就是（100/375）*100<code>vw</code>（26.6666666667<code>vw</code>）;那我们切换成其他宽度设备的时候，<code>font-size</code>就会动态变化，真正实现了自适应布局。</p><p>x当然，此处给出的并不是最好的方案，很多地方还是建议全部使用<code>vw</code>进行布局。后面会继续研究移动端适配的问题，有了更好的解决方案在进行总结输出。</p>`,7),t=[o];function p(d,i){return s(),e("div",null,t)}const r=n(c,[["render",p],["__file","Web移动端适配的一些思考.html.vue"]]);export{r as default};
