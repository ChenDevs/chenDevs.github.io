import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as i,f as c,b as e,d as a,a as l,e as r}from"./app-iqR_qDjC.js";const p={},d=e("h1",{id:"github-加速下载项目的方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-加速下载项目的方法","aria-hidden":"true"},"#"),a(" GitHub 加速下载项目的方法")],-1),g=e("p",null,"国内在 github 上克隆项目总是异常的慢，据我多次克隆观察，下载速度最快就 20k/s 左右，特别是在克隆比较大的项目时简直慢得无法忍受！下面介绍一种加载克隆项目的方法。",-1),u=e("figure",null,[e("img",{src:"https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200309112604.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_=e("h2",{id:"利用码云来转接做下载加速",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#利用码云来转接做下载加速","aria-hidden":"true"},"#"),a(" 利用码云来转接做下载加速")],-1),m={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},h=r(`<li><p>登录码云之后在页面右上角的加号选择<code>从GitHub/GitLab导入项目</code></p><figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200309112711.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>选择<code>从URL导入</code>，粘贴从 GitHub 复制来的仓库地址，然后导入，这个导入过程一般是很快的。</p><figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200309112710.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>从码云克隆刚导入的这个项目，克隆速度会快很多，网速好的能达到几兆每秒（具体速度就看你的网速了，吐槽一下我家网速，总在关键时刻显示&quot;视频加载中&quot;....）</p><figure><img src="https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200309112712.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>另外要注意的一点，克隆下来的项目关联的是码云的仓库，如果你需要关联 github 仓库需要更改远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 查看关联的远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>仓库名<span class="token operator">&gt;</span> <span class="token comment"># 删除远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>仓库名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>远程仓库地址<span class="token operator">&gt;</span> <span class="token comment"># 关联远程仓库，仓库名一般使用origin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4),f=e("p",null,"这个方法适合用于克隆比较大的项目，如果克隆小项目，20k/s 的速度好像还能将就~~",-1);function b(k,x){const n=s("ExternalLinkIcon");return o(),i("div",null,[d,g,c(" more "),u,_,e("ol",null,[e("li",null,[e("p",null,[a("首先你得有一个 "),e("a",m,[a("码云"),l(n)]),a(" 的账号")])]),h]),f])}const y=t(p,[["render",b],["__file","10.GitHub加速下载项目的方法.html.vue"]]);export{y as default};
