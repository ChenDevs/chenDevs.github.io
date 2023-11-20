import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as n}from"./app-37ca5a82.js";const r={},o=n(`<h2 id="homebrew-的安装方法" tabindex="-1"><a class="header-anchor" href="#homebrew-的安装方法" aria-hidden="true">#</a> Homebrew 的安装方法</h2><ul><li>完全体 几分钟安装完成</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>bin<span class="token operator">/</span>zsh <span class="token operator">-</span>c <span class="token string">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>精简版</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>bin<span class="token operator">/</span>zsh <span class="token operator">-</span>c <span class="token string">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span> speed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载 brew</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>bin<span class="token operator">/</span>zsh <span class="token operator">-</span>c <span class="token string">&quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>常见错误</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>cunkai<span class="token operator">/</span>HomebrewCN<span class="token operator">/</span>blob<span class="token operator">/</span>master<span class="token operator">/</span>error<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="homebrew-安装完成之后-处理安装-ruby-版本" tabindex="-1"><a class="header-anchor" href="#homebrew-安装完成之后-处理安装-ruby-版本" aria-hidden="true">#</a> Homebrew 安装完成之后，处理安装 Ruby 版本:</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install ruby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装完成后查看其-ruby-源" tabindex="-1"><a class="header-anchor" href="#安装完成后查看其-ruby-源" aria-hidden="true">#</a> 安装完成后查看其 Ruby 源：</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gem sources <span class="token operator">-</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>此时可能会出现错误：dyld: Library not loaded: /usr/local/opt/gmp/lib/libgmp.10.dylib</p></li><li><p>这里就要更新 Ruby 版本了：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew update <span class="token operator">&amp;&amp;</span> brew install gmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果显示的 ruby 源不是 ruby-china，则需要进行源替换：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>gem sources <span class="token operator">--</span>add https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gems<span class="token punctuation">.</span>ruby<span class="token operator">-</span>china<span class="token punctuation">.</span>com<span class="token operator">/</span> <span class="token operator">--</span>remove https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">rubygems.org</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ruby-源正常-安装-cocoapods" tabindex="-1"><a class="header-anchor" href="#ruby-源正常-安装-cocoapods" aria-hidden="true">#</a> ruby 源正常， 安装 CocoaPods:</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install cocoapods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装成功后进行 pod 设置：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pod setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>执行完毕后， 查看 pod 版本看安装是否成功：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pod <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cocoapods-的使用" tabindex="-1"><a class="header-anchor" href="#cocoapods-的使用" aria-hidden="true">#</a> CocoaPods 的使用</h2><p>CocoaPods 安装成功后， 就可直接进行使用， 这里不做过多的赘述，直接写几个常用的命令：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//cd 项目目录地址</span>

<span class="token comment">// 创建 Podfile 文件</span>
pod init

<span class="token comment">// 编辑</span>
vim Podfile

<span class="token comment">// 安装</span>
pod install

<span class="token comment">// 更新所有依赖的开源库</span>
pod update
pod install <span class="token operator">--</span>no<span class="token operator">-</span>repo<span class="token operator">-</span>update
pod update <span class="token operator">--</span>no<span class="token operator">-</span>repo<span class="token operator">-</span>update

<span class="token comment">// 搜索框架</span>
pod search 框架名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">xcrun</span><span class="token operator">:</span> error<span class="token operator">:</span> invalid active developer <span class="token function">path</span> <span class="token punctuation">(</span><span class="token operator">/</span>Library<span class="token operator">/</span>Developer<span class="token operator">/</span>CommandLineTools<span class="token punctuation">)</span><span class="token punctuation">,</span> missing xcrun at<span class="token operator">:</span> <span class="token operator">/</span>Library<span class="token operator">/</span>Developer<span class="token operator">/</span>CommandLineTools<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>xcrun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>xcode-Preferences-locations-CommandLineTools 选择 Xcode 版本</p>`,29),i=[o];function l(p,t){return s(),e("div",null,i)}const u=a(r,[["render",l],["__file","mac安装pod流程.html.vue"]]);export{u as default};
