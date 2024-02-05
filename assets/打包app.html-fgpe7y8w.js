import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,b as n,d as a,a as e,e as l}from"./app-S3nsRjMn.js";const c={},r=n("h4",{id:"_1-hbuilder",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-hbuilder","aria-hidden":"true"},"#"),a(" 1.hbuilder")],-1),u={href:"http://www.applicationloader.net/blog/zh/72.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://www.applicationloader.net/blog/zh/1073.html",target:"_blank",rel:"noopener noreferrer"},v=n("h5",{id:"授权登录插件配置-manifes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#授权登录插件配置-manifes","aria-hidden":"true"},"#"),a(" 授权登录插件配置 manifes")],-1),k={href:"http://ask.dcloud.net.cn/article/192",target:"_blank",rel:"noopener noreferrer"},m=l(`<h4 id="_2-cordova-打包-vue-项目" tabindex="-1"><a class="header-anchor" href="#_2-cordova-打包-vue-项目" aria-hidden="true">#</a> 2.Cordova 打包 Vue 项目</h4><h5 id="第一步-安装-cordova" tabindex="-1"><a class="header-anchor" href="#第一步-安装-cordova" aria-hidden="true">#</a> 第一步：安装 cordova</h5><p>npm install -g cordova</p><h5 id="第二步-新建-cordova-项目" tabindex="-1"><a class="header-anchor" href="#第二步-新建-cordova-项目" aria-hidden="true">#</a> 第二步：新建 cordova 项目</h5><p>执行命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cordova create cordovaApp com<span class="token punctuation">.</span>cordova<span class="token punctuation">.</span>testapp
cd cordovaApp
cordova platform add android
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第三步-修改-vue-项目" tabindex="-1"><a class="header-anchor" href="#第三步-修改-vue-项目" aria-hidden="true">#</a> 第三步：修改 vue 项目</h5><p>首先修改 vue 项目的 index.html 在 head 之间加入</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Security-Policy<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default-src &#39;self&#39; data: gap: https://ssl.gstatic.com &#39;unsafe-eval&#39;; style-src &#39;self&#39; &#39;unsafe-inline&#39;; media-src *; img-src &#39;self&#39; data: content:;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>telephone=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msapplication-tap-highlight<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个的时候可能导致页面样式改变，如果改变则不加，否则还是建议加上。 然后引入 cordova.js</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;cordova.js&quot;&gt;&lt;/script&gt;
    &lt;!-- built files will be auto injected --&gt;
&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改 src 中的 main.js 为以下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// The Vue build version to load with the \`import\` command</span>
<span class="token comment">// (runtime-only or standalone) has been set in webpack.base.conf with an alias.</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">/* eslint-disable no-new */</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&#39;deviceready&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      router<span class="token punctuation">,</span>
      store<span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>splashscreen<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后修改 config 文件夹中的 index.js 文件 修改 build 中的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">assetsSubDirectory</span><span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">assetsPublicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   assetsSubDirectory: &#39;&#39;,
    assetsPublicPath: &#39;&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行 npm run dev</p><p>看看是否能够运行起来，如果正常说明到这里是没有问题的。</p><h5 id="第四步-将-vue-文件放到-cordova-项目中并打包" tabindex="-1"><a class="header-anchor" href="#第四步-将-vue-文件放到-cordova-项目中并打包" aria-hidden="true">#</a> 第四步：将 vue 文件放到 cordova 项目中并打包</h5><p>先在 vue 项目中运行 npm run build</p><p>执行完成后会生成一个 dist 文件夹，找到这个文件夹将里面的所有文件复制到你的 cordova 项目的 www 文件夹下替换它原有的文件。 然后就可以执行 cordova build android</p><p>会生成一个可执行的 apk 文件，安装即可。 到这里就完成了我们 vue 项目的打包。</p><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意:</h5><p>如果 vue 项目在运行 npm run dev 或者 npm run build 的时候遇到问题一般不是代码出错的话可以将 node_modules 文件夹删除使用 npm install 安装。 如果是因为 eslint 导致代码检查不通过的话，可以将 Vue 项目的 build 文件夹下的 webpack.base.config 文件中的 rules</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|vue)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-friendly-formatter&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码注释即可。</p>`,27);function b(h,g){const s=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[a("如果使用苹果证书，这里推荐一个申请 iOS 证书的工具 Appuploader。免苹果付费开发者账号，直接使用普通苹果 id，就能使用 Appuploader 申请 ios 测试证书，打包 ipa 安装到非越狱设备。 工具的安装网址："),n("a",u,[a("Appuploader 安装"),e(s)])]),n("p",null,[a("免开发者账号申请 iOS 证书教程："),n("a",d,[a("申请 IOS 证书"),e(s)])]),v,n("p",null,[n("a",k,[a("http://ask.dcloud.net.cn/article/192"),e(s)])]),m])}const _=t(c,[["render",b],["__file","打包app.html.vue"]]);export{_ as default};
