import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o,c,b as e,d as i,a as t,e as n}from"./app-a5c32edc.js";const r={},l={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"参考文章",-1),p={href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/yilovexing/article/details/107226141",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/m0_37897396/article/details/125992705",target:"_blank",rel:"noopener noreferrer"},m=n('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> mac</h3><p>通过<code>homebrew</code>安装:<code>brew install git</code></p><h2 id="配置账户" tabindex="-1"><a class="header-anchor" href="#配置账户" aria-hidden="true">#</a> 配置账户</h2><p>1、设置用户名：<code>git config --global user.name &#39;你git平台上的用户名&#39;</code>;</p><p>2、设置用户邮箱：<code>git config --global user.email &#39;注册时候的邮箱&#39;</code>;</p><h2 id="配置-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#配置-ssh-密钥" aria-hidden="true">#</a> 配置 SSH 密钥</h2>',7),b={href:"https://gitee.com/help/articles/4181",target:"_blank",rel:"noopener noreferrer"},_={href:"https://gitee.com/help/articles/4229",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>以下命令 <code>win</code> 在 <code>git bash</code> 下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&#39;gitee&#39;</span> <span class="token parameter variable">-f</span> ~/.ssh/gitee_id_rsa

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&#39;github&#39;</span> <span class="token parameter variable">-f</span> ~/.ssh/github_id_rsa

<span class="token comment"># 生成完去gitee，github设置添加公钥 pub文件</span>
<span class="token comment"># mac 操作 win忽略</span>
ssh-add ~/.ssh/github_id_rsa
ssh-add ~/.ssh/gitee_id_rsa
<span class="token comment"># 终端连接</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mac</code> 下每次开机后需要执行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-add ~/.ssh/gitee_id_rsa
ssh-add ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f={href:"https://www.jianshu.com/p/ada03bd51ed5",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"墙内自救指南",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#墙内自救指南","aria-hidden":"true"},"#"),i(" 墙内自救指南")],-1),x=e("p",null,[i("使用"),e("code",null,"clash X Pro"),i(" 增强模式可以实现全局代理，它将接管系统流量，无需设置")],-1),w={href:"https://gist.github.com/chuyik/02d0d37a49edc162546441092efae6a1",target:"_blank",rel:"noopener noreferrer"},S=n('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/git本地版本控制.png" alt="git本地版本控制" tabindex="0"><figcaption>git本地版本控制</figcaption></figure><h3 id="生成版本" tabindex="-1"><a class="header-anchor" href="#生成版本" aria-hidden="true">#</a> 生成版本</h3><div class="hint-container tip"><p class="hint-container-title">git add</p><p>使用 <code>git add</code> 后，工作区和暂存区的内容是一致的</p><p>工作区和暂存区内容不一致的时候，需要通过 <code>git add</code>，让它们内容一致</p><p>只要工作区的文件有变动，就需要将工作区的变动添加到暂存区</p></div><ul><li><code>git init</code>:在项目中初始化 Git，让 Git 管理当前项目</li><li><code> git status</code>:检查当前文件状态</li><li><code> git add &lt;file1&gt; &lt;file2&gt;</code> ...:将工作区的指定内容添加到暂存区</li><li><code>git add .</code> :将工作区的内容一起添加到暂存区</li></ul><div class="hint-container tip"><p class="hint-container-title">git commit</p><p><code>git commit</code> 后，暂存区和本地版本库的内容是一致的</p><p>暂存区和本地版本库内容不一致的时候，需要通过 <code>git commit</code> ，让它们内容一致</p></div><ul><li><p><code>git commit -m &#39;描述消息&#39;</code>：将暂存区的内容提交到本地仓库，生成版本</p></li><li><p><code>git log</code> ：查看提交内容</p></li><li><p><code> git log --oneline</code>：以一行的方式查看提交记录</p></li></ul><h3 id="重置版本" tabindex="-1"><a class="header-anchor" href="#重置版本" aria-hidden="true">#</a> 重置版本</h3><ul><li><p><code>git reset --soft 版本号</code>：仅重置本地仓库</p></li><li><p><code>git reset --mixed 版本号</code>：重置本地仓库和暂存区，默认行为</p></li><li><p><code>git reset --hard 版本号</code>：重置本地仓库、暂存区和工作区(危险，会覆盖正在开发的代码)</p></li><li><p><code>git reflog</code>:可以查看所有记录，包括被&quot;丢弃&quot;的版本</p></li><li><p><code>git log</code>:查看提交记录，不包括被&quot;丢弃&quot;的版本</p></li></ul><h3 id="git-忽略文件-gitignore" tabindex="-1"><a class="header-anchor" href="#git-忽略文件-gitignore" aria-hidden="true">#</a> git 忽略文件.gitignore</h3><p>::: .gitignore只对从来没有commit过的文件起作用</p><p>项目中的某个文件（比如stupid.txt)已经被commit，并push到server了，这时发现stupid.txt不应该被git管理， 同步到团队每个开发人员那里，这时在.gitignore文件里面添加&quot;stupid.txt&quot;已经不起作用了。 因为.gitignore只对从来没有commit过的文件起作用。这时可以</p><ol><li>文件夹：<code>git rm -r --cached directory_name</code></li><li>文件：<code>git rm --cached stupid.txt</code></li><li>在.gitignore中添加要忽略的文件</li></ol><p>:::</p><ul><li><code>#</code>：注释</li><li><code>test.html</code>:忽略指定文件，不让 Git 管理</li><li><code>test.*</code>：忽略所有文件名是 test 的文件，不管后缀是什么</li><li><code>*.tmp</code>：忽略所有后缀是.tmp 的文件，不管文件名是什么</li><li><code>node_modules/</code>:忽略<code>node_modules</code>目录下的所有文件</li><li>git 管理的是文件，空目录会自动忽略</li></ul><h3 id="git-分支" tabindex="-1"><a class="header-anchor" href="#git-分支" aria-hidden="true">#</a> git 分支</h3><h4 id="创建和切换分支" tabindex="-1"><a class="header-anchor" href="#创建和切换分支" aria-hidden="true">#</a> 创建和切换分支</h4><div class="hint-container tip"><p class="hint-container-title">checkout</p><p>checkout=&gt;<strong>签出</strong>操作(webstrom)</p></div><ul><li><code>git branch</code>:查看分支</li><li><code>git branch -v</code>:查看分支（展示的信息多一些）</li><li><code>git branch 分支名</code>：在当前分支的节点上创建新的分支</li><li><code>git checkout 分支名</code>：切换分支，兼容性好</li><li><code>git switch 分支名</code>：切换分支，v2.23.0 版及以后可用</li></ul><h4 id="合并和删除分支" tabindex="-1"><a class="header-anchor" href="#合并和删除分支" aria-hidden="true">#</a> 合并和删除分支</h4><p><code>git merge 要合并的分支名</code>：将指定的分支合并到当前分支</p><p><code>git branch -d 分支名</code>：删除分支</p><p><code>git log --oneline --graph</code>:以一行、图形化的方式查看提交记录</p><p>合并分支时，先切换到最终要合并的分支，再合并</p><p>合并分支时可能产生冲突：在两个不同的分支中，对同一个文件的同一部分进行了不同的修改；产生了冲突，需要人为解决后再提交一次</p><h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><p>推送本地仓库到远程仓库：<code>git push</code> (-f:强行推送当前分支到远程仓库，即使有冲突;-all:推送所有分支到远程仓库)</p><p>克隆远程仓库到本地：<code>git clone </code></p><p>拉取远程仓库的最新代码到本地：<code>git pull</code></p>',29);function G(y,q){const a=d("ExternalLinkIcon");return o(),c("div",null,[e("div",l,[h,e("p",null,[e("a",p,[i("常用 Git 命令清单"),t(a)])]),e("p",null,[e("a",g,[i("如何将一个项目同时提交到GitHub和Gitee(码云)两个仓库"),t(a)])]),e("p",null,[e("a",u,[i("git忽略已经提交的文件，管用！"),t(a)])])]),m,e("ul",null,[e("li",null,[e("a",b,[i("生成/添加 SSH 公钥"),t(a)])]),e("li",null,[e("a",_,[i("Git 配置多个 SSH-Key"),t(a)])])]),v,e("p",null,[i("可以自动添加，在每次开机后自动运行："),e("a",f,[i("具体步骤"),t(a)])]),k,x,e("p",null,[e("s",null,[e("a",w,[i("macOS 给 Git(Github) 设置代理（HTTP/SSH）"),t(a)])])]),S])}const N=s(r,[["render",G],["__file","git.html.vue"]]);export{N as default};
