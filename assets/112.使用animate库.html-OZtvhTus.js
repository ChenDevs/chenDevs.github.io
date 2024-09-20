import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c,b as n,d as a,f as i,a as t,e as p}from"./app-Efa2_n6B.js";const u={},r=n("h1",{id:"vue-中使用-animate-css-库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-中使用-animate-css-库","aria-hidden":"true"},"#"),a(" vue 中使用 Animate.css 库")],-1),d=n("h2",{id:"自定义过渡类名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义过渡类名","aria-hidden":"true"},"#"),a(" 自定义过渡类名")],-1),_=n("p",null,"我们可以通过以下 attribute 来自定义过渡类名：",-1),h=n("li",null,[n("code",null,"enter-class")],-1),m=n("li",null,[n("code",null,"enter-active-class")],-1),k=n("li",null,[n("code",null,"enter-to-class"),a(" (2.1.8+)")],-1),v=n("li",null,[n("code",null,"leave-class")],-1),g=n("li",null,[n("code",null,"leave-active-class")],-1),b=n("code",null,"leave-to-class",-1),f={href:"https://daneden.github.io/animate.css/",target:"_blank",rel:"noopener noreferrer"},q=p(`<h2 id="使用-animate-css-库" tabindex="-1"><a class="header-anchor" href="#使用-animate-css-库" aria-hidden="true">#</a> 使用 Animate.css 库</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-classes-transition<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animated tada<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animated bounceOutRight<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"https://github.com/daneden/animate.css",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"enter-active-class",-1),V=n("code",null,"leave-active-class",-1),N=n("code",null,"animated",-1),B=n("code",null,"动画类名",-1),C={href:"https://daneden.github.io/animate.css/",target:"_blank",rel:"noopener noreferrer"};function E(S,I){const s=o("ExternalLinkIcon");return l(),c("div",null,[r,d,_,n("ul",null,[h,m,k,v,g,n("li",null,[b,a(" (2.1.8+)"),i(" more "),a(" 他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 "),n("a",f,[a("Animate.css"),t(s)]),a("结合使用十分有用。")])]),q,n("p",null,[a("按 "),n("a",x,[a("官方文档"),t(s)]),a(" 引入 Animate.css 库，再配合 vue 的自定义过渡类名，指定"),A,a("和"),V,a("的自定义类，两者都要有"),N,a("类，用于说明其使用的是 Animate.css 库，再根据需求定义另外一个"),B,a("。")]),n("p",null,[a("动画类名：在 "),n("a",C,[a("Animate 官网"),t(s)]),a(" 获取。")])])}const O=e(u,[["render",E],["__file","112.使用animate库.html.vue"]]);export{O as default};
