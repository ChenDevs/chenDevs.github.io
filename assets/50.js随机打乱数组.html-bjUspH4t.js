import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c,f as p,a as l,w as u,e as i,b as n,d as s}from"./app-XuorXwmJ.js";const r={},k=i(`<h1 id="js-随机打乱数组" tabindex="-1"><a class="header-anchor" href="#js-随机打乱数组" aria-hidden="true">#</a> JS 随机打乱数组</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 随机打乱数组</span>
  <span class="token keyword">let</span> _arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用数组副本，不改变原数组</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    _arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    _arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> t
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> _arr
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getRandomInt</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取min到max的一个随机数，包含min和max本身</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
  原数组：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("span1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("click me！打乱数组"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("br")]),n("span",{class:"token punctuation"},">")]),s(`
  打乱结果：`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("span2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("min"),n("span",{class:"token punctuation"},","),s(" max")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 获取min到max的一个随机数，包含min和max本身"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),s("max "),n("span",{class:"token operator"},"-"),s(" min "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" min"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"shuffle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 随机打乱数组"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" _arr "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 调用数组副本，不改变原数组"),s(`
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" _arr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getRandomInt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" t "),n("span",{class:"token operator"},"="),s(" _arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(`
        _arr`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" _arr"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(`
        _arr`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` t
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` _arr
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"//使用"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"el"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),s("el"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $span2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#span2'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#span1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#btn'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onclick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      $span2`),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"shuffle"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(v,b){const a=e("CodeDemo");return o(),c("div",null,[k,p(` ## vue demo
::: demo

\`\`\`html
<template>
  <div>
    原数组：{{arr}}
    <button @click="clickBut">click me！打乱数组</button></br></br>
    打乱结果：{{result}}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        result: []
      }
    },
    methods:{
      clickBut(){
        this.result = this.shuffle(this.arr)
      },
      shuffle(arr) { // 随机打乱数组
        let _arr = arr.slice() // 调用数组副本，不改变原数组
        for (let i = 0; i < _arr.length; i++) {
          let j = this.getRandomInt(0, i)
          let t = _arr[i]
          _arr[i] = _arr[j]
          _arr[j] = t
        }
        return _arr
      },
      getRandomInt(min, max) { // 获取min到max的一个随机数，包含min和max本身
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    }
  }
<\/script>
\`\`\`
::: `),l(a,{id:"code-demo-5",type:"vanilla",title:"",code:"eJxlU81u00AQfpWRiRSbGLsp/9TJhRMHLnBsKuQ668bBXhd7LRVVlUAUiUqhQbQgFEVwRRSJcCJtg3gZ2ymnvEJnvXaaupfd0cw333wzu7MtdZjnSg8kg9/NFgVI9r+ln0bT093ZZGCEmyYFp91oSdyqt6SmoXMrQxrrEWN+Hl9nFKOW61jPwSOzyet07yA+/i2oDF1Am4BWgBx4cAaBmZ4epF+HV8stL5Yz9FyhEVqBs8myfAA7ohZzUMQGYU9M2va9R5TJnkNV8MwtBbZB1+Fs/0/S/4zO5N0IvdPBbjx+FY9//B/00+EJSpxNeknvbfLhiGM+9hCTDn+enRyJGgABYVFA4bHJOprt+n4gZ2aQFZQVuA4y5sANwHyoQV3BA01F5O+0aEls2Ils2yWyGQS5xFzKwsyK2i5h8AyB0AA8tRAnTLAkb2v0Znr4XaCTvV8oGfuIx+/Tw+Ok/2X+jgWR7QcgczYHqZZW8DIyYs0ldIN10FGroZoCLip3EXtptEsqOHlfBYYhhhOtOmsXgdxRhLrlUJeHWOHEEV2aNIeUhqfr8d9/2G9plBWZuMpcdJ7e9q3II5RpLyISvHxKXGIxfDREzkkL8WKyq9hWXYVlFW6qcEuF2yrcUeGuCvdUuL+2IuCWT0MGlexrYk5Frl7L7KqCAAEpfPWqojGyxR76lKEO8XY5DcfgtiDCp2JfGhft4MvOmxGVSjyLXycnzLrBRSn2Qto5B+XkZjA="},{default:u(()=>[m]),_:1})])}const h=t(r,[["render",d],["__file","50.js随机打乱数组.html.vue"]]);export{h as default};
