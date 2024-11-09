import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,b as n,d as a,a as l,f as p,e as i}from"./app-qa6sU7xA.js";const d={},u=n("h1",{id:"transition-过渡-动画",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transition-过渡-动画","aria-hidden":"true"},"#"),a(" transition 过渡&动画")],-1),r={href:"https://cn.vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),a(" 使用")],-1),v=n("p",null,[a("需要设置动画的元素或组件要在外边包裹一个"),n("code",null,"<transition>"),a("标签，设置自定义的"),n("code",null,"name"),a("，vue 会根据元素的切换（进入/离开）过程添加相应的 css 类名，你可以"),n("strong",null,"自由地使用 css 类名来设置 css 过渡&动画"),a("。")],-1),m=i(`<h2 id="过渡的类名" tabindex="-1"><a class="header-anchor" href="#过渡的类名" aria-hidden="true">#</a> 过渡的类名</h2><p>在进入/离开的过渡中，会有 6 个 class 切换。</p><p><strong>各类名的生命周期</strong></p><ul><li><p>进入</p><ul><li><code>v-enter</code> 只存在于第一帧</li><li><code>v-enter-active</code> 第一帧到最后一帧，结束后移除</li><li><code>v-enter-to</code> 第二帧到最后一帧，结束后移除</li></ul></li><li><p>离开</p><ul><li><code>v-leave</code> 只存在于第一帧</li><li><code>v-leave-active</code> 第一帧到最后一帧，结束后移除</li><li><code>v-leave-to</code> 第二帧到最后一帧，结束后移除</li></ul></li></ul><p>如果你使用一个没有<code>name</code>的<code>&lt;transition&gt;</code> ，则 <code>v-</code> 是这些类名的默认前缀。如果你使用了<code>name=&quot;fade&quot;</code>，那么 <code>v-</code> 前缀会替换为 <code>fade-</code>。</p><h3 id="组件中使用的示例" tabindex="-1"><a class="header-anchor" href="#组件中使用的示例" aria-hidden="true">#</a> 组件中使用的示例</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-song<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> .add-song
    &amp;.slide-enter-active<span class="token punctuation">,</span> &amp;.slide-leave-active
      <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s
    &amp;.slide-enter<span class="token punctuation">,</span> &amp;.slide-leave-to
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>100%<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function g(h,_){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[a("API"),l(s)])]),k,v,p(" more "),m])}const x=t(d,[["render",g],["__file","110.transition过渡_动画.html.vue"]]);export{x as default};
