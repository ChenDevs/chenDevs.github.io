import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c as p,a as e,w as u,b as n,d as s}from"./app-xxrfxtC2.js";const i={},r=n("h1",{id:"flex-布局案例-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flex-布局案例-基础","aria-hidden":"true"},"#"),s(" flex 布局案例-基础")],-1),k=n("blockquote",null,[n("p",null,[s("可用"),n("kbd",null,"F12"),s("开发者工具查看元素及样式，可打开 codepen 在线编辑代码。")])],-1),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
  `),n("span",{class:"token comment"},"/* 父元素上定义弹性盒模型，称之为 “容器” */"),s(`
  `),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 350px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #eee"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* 基本概念：.box为容器，.box下的span为项目；.box的x轴为主轴，y轴为交叉轴 */"),s(`
    `),n("span",{class:"token comment"},"/* flex 定义为弹性盒模型 */"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/*flex-direction 排列方向： row 行（默认） | row-reverse 行-反转  | column 列 | column-reverse 列-反转 */"),s(`
    `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" row"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/*flex-wrap 是否换行： nowrap 不换行（默认，可能会压缩项目宽度） | wrap 换行 | wrap-reverse 换行-反转，第一行在下方 */"),s(`
    `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),s(" wrap"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* flex-flow  方向和换行的简写：默认值为row nowrap，方向 和 是否换行 的取值 */"),s(`
    `),n("span",{class:"token property"},"flex-flow"),n("span",{class:"token punctuation"},":"),s(" row wrap"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"/* justify-content 项目在主轴上的对齐方式: flex-start 左对齐（默认） | flex-end 右对齐 | center 居中 | space-between 两端对齐 | space-around 项目两侧的间隔相等*/"),s(`
    `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-around"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},`/* align-items 项目在交叉轴上的对齐方式：stretch（默认）伸展，如果项目未设置高度或设为auto，将占满整个容器的高度 | 
  flex-start 交叉轴的起点对齐 | flex-end 交叉轴的终点对齐 | center 交叉轴的中心点对齐 | baseline 项目的第一行文字的基线对齐（适用于每个项目高度不一致，以项目中的文字为基准对齐） */`),s(`
    `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(` center
      `),n("span",{class:"token comment"},`/* align-content 多根轴线的对齐方式（一排项目为一根轴线，只有一根轴线时此样式不起作用）: 
  stretch（默认）伸展，轴线占满整个交叉轴 | flex-start 容器顶部对齐 | flex-end 容器底部对齐 | center 与交叉轴的中点对齐 |
  space-between 与交叉轴两端对齐，轴线之间的间隔平均分布| space-around 每根轴线两侧的间隔都相等*/`),s(`
      align-content：flex-start`),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},`/* 代码单词中文含义 ：
  flex 弹性； direction 方向； wrap 外套、包； flow 流动
  justify 对齐； content 内容；space 空间、距离；between 在...之间；around 周围的
  align 排列；stretch 伸展；
  */`),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"/* 子元素称之为 “项目” */"),s(`
  `),n("span",{class:"token selector"},".box span"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" mediumspringgreen"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},`/* flex-grow 项目的放大比例，默认为0，即如果存在剩余空间，也不放大;
  如果所有为1时，则它们将等分剩余空间（如果有的话）。
  如果其中一个项目为2，其他项目都为1，则为2的占据的剩余空间将比其他项多一倍。
  */`),s(`
    `),n("span",{class:"token property"},"flex-grow"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* grow 扩大 */"),s(`
    `),n("span",{class:"token comment"},`/* flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 
  如果所有项目都为1，当空间不足时，都将等比例缩小。
  如果其中一个项目为0，其他项目都为1，则空间不足时，为0的不缩小*/`),s(`
    `),n("span",{class:"token property"},"flex-shrink"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* shrink 缩小 */"),s(`
    `),n("span",{class:"token comment"},"/* flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（宽度）。\n  浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。\n  它可以设为跟`width`或`height`属性一样的值（比如50px），则项目将占据固定空间*/"),s(`
    `),n("span",{class:"token property"},"flex-basis"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* basis 基础 */"),s(`
    `),n("span",{class:"token comment"},"/* flex属性是flex-grow,flex-shrink 和 flex-basis的简写，默认值为`0 1 auto`。后两个属性可选。\n  该属性有两个快捷值：auto (1 1 auto)，即放大 和 none (0 0 auto)，即缩小。\n  建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。*/"),s(`
    `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),s(" 0 1 auto"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* flex: 0放大 1缩小 auto原本宽度*/"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token selector"},".box span:nth-child(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* order 项目的排列顺序。数值越小，排列越靠前，默认为0 ; 取值：正负整数。*/"),s(`
    `),n("span",{class:"token property"},"order"),n("span",{class:"token punctuation"},":"),s(" -1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token selector"},".box span:nth-child(7)"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},`/* align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
  默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  取值：auto（默认） | flex-start | flex-end | center | baseline | stretch。
  */`),s(`
    `),n("span",{class:"token property"},"align-self"),n("span",{class:"token punctuation"},":"),s(" flex-end"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"};function b(v,g){const t=a("CodeDemo"),l=a("ExternalLinkIcon");return o(),p("div",null,[r,k,e(t,{id:"code-demo-8",type:"vanilla",title:"",code:"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"},{default:u(()=>[m]),_:1}),n("blockquote",null,[n("p",null,[s("参考："),n("a",d,[s("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),e(l)])])])])}const h=c(i,[["render",b],["__file","flex布局案例-基础.html.vue"]]);export{h as default};
