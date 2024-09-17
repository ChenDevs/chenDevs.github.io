import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as l,b as a,d as s,a as d,e as n}from"./app-vB0LPGoG.js";const o={},r=n(`<h1 id="git-基础与命令" tabindex="-1"><a class="header-anchor" href="#git-基础与命令" aria-hidden="true">#</a> Git 基础与命令</h1><p>官方文档（中文）：https://git-scm.com/book/zh/v2</p><blockquote><p>本文档是根据官方文档来编写的，以官方文档为准。</p></blockquote><h2 id="git-基础" tabindex="-1"><a class="header-anchor" href="#git-基础" aria-hidden="true">#</a> Git 基础</h2><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;your name&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;xxx@xx.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自报家门</p><h3 id="检查配置信息" tabindex="-1"><a class="header-anchor" href="#检查配置信息" aria-hidden="true">#</a> 检查配置信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取全局帮助手册</span>
<span class="token function">git</span> <span class="token builtin class-name">help</span>

<span class="token comment"># 获取特定命令的详细版帮助手册 (两个命令是等价的)</span>
<span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>某个命令<span class="token operator">&gt;</span>
<span class="token function">git</span> <span class="token operator">&lt;</span>某个命令<span class="token operator">&gt;</span> <span class="token parameter variable">--help</span> <span class="token comment"># 两个横杠</span>

<span class="token comment"># 获取特定命令的简明版帮助手册</span>
<span class="token function">git</span> <span class="token operator">&lt;</span>某个命令<span class="token operator">&gt;</span> <span class="token parameter variable">-h</span>  <span class="token comment"># 一个横杠</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化仓库" tabindex="-1"><a class="header-anchor" href="#初始化仓库" aria-hidden="true">#</a> 初始化仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地目录初始化仓库</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是从远程仓库 clone 的项目，则该项目是已经初始化好的 git 仓库</p><h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 克隆</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># 克隆同时修改目录名</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态，因为 Git 刚刚检出了它们， 而你尚未编辑过它们</p><h3 id="检查文件状态" tabindex="-1"><a class="header-anchor" href="#检查文件状态" aria-hidden="true">#</a> 检查文件状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看详细状态说明</span>
<span class="token function">git</span> status

<span class="token comment"># 查看简明状态说明</span>
<span class="token function">git</span> status <span class="token parameter variable">-s</span>  <span class="token comment"># -s 或 --short</span>
 M README <span class="token comment"># 已修改，但未暂存 （M的位置靠右，红色）</span>
MM Rakefile <span class="token comment"># 已修改，暂存后又作了修改（有暂存和未暂存）</span>
A  lib/git.rb <span class="token comment"># 新添加到暂存区，未提交</span>
M  lib/simplegit.rb <span class="token comment"># 已修改，已暂存 （M的位置靠左，绿色）</span>
?? LICENSE.txt <span class="token comment"># 新添加，未跟踪</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>git 目录中的文件状态包含：是否跟踪、是否修改、是否已存入暂存区</p></li><li><p>参数的<strong>一个横杠表示缩写，两个横杠表示全称。</strong></p></li></ul><h3 id="加入暂存区-跟踪文件" tabindex="-1"><a class="header-anchor" href="#加入暂存区-跟踪文件" aria-hidden="true">#</a> 加入暂存区 (跟踪文件)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件加入暂存区（跟踪指定文件)</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>files<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git add</code> 命令使用文件或目录的路径作为参数；如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件。</p><p><code>add</code> 命令是将文件<strong>加入</strong>到<strong>暂存区</strong>，<code>commit</code> 命令的<strong>提交</strong>到<strong>本地仓库</strong>，<code>push</code> 命令是<strong>推送</strong>到<strong>远程仓库</strong>。</p><h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h3><p>添加一个名为 <code>.gitignore</code> 的文件，列出要忽略的文件的模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*.<span class="token punctuation">[</span>oa<span class="token punctuation">]</span>  <span class="token comment"># 忽略以 .o 或 .a 结尾的文件（一般这类文件是编译过程出现）</span>
*~      <span class="token comment"># 忽略以 ~ 结尾的文件（一般是文本编辑软件保存的副本）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 <code>.gitignore</code> 的<strong>格式规范</strong>如下：</p><ul><li><p>所有空行或者以 <code>#</code> 开头的行都会被 Git 忽略（注释符号）。</p></li><li><p>可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。</p><blockquote><p>glob 模式是指 shell 所使用的简化了的正则表达式</p></blockquote></li><li><p>匹配模式可以以（<code>/</code>）开头防止递归。</p></li><li><p>匹配模式可以以（<code>/</code>）结尾指定目录。</p></li><li><p>要忽略指定模式以外的文件或目录，可以在模式前加上叹号（<code>!</code>）取反。</p></li></ul><hr><ul><li>星号（<code>*</code>）匹配零个或多个任意字符</li><li><code>[abc]</code> 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）</li><li>问号（<code>?</code>）只匹配一个任意字符</li><li><code>[0-9]</code> 表示匹配所有 0 到 9 的数字。在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配</li><li>使用两个星号（<code>**</code>）表示匹配任意中间目录，比如 <code>a/**/z</code> 可以匹配 <code>a/z</code> 、 <code>a/b/z</code> 或 <code>a/b/c/z</code> 等。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略所有的 .a 文件</span>
*.a

<span class="token comment"># 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件</span>
<span class="token operator">!</span>lib.a

<span class="token comment"># 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO</span>
/TODO

<span class="token comment"># 忽略任何目录下名为 build 的文件夹</span>
build/

<span class="token comment"># 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt</span>
doc/*.txt

<span class="token comment"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span>
doc/**/*.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GitHub 有一个十分详细的针对数十种项目及语言的 <code>.gitignore</code> 文件列表， 你可以在 https://github.com/github/gitignore 找到它。</p><h3 id="查看修改的具体内容" tabindex="-1"><a class="header-anchor" href="#查看修改的具体内容" aria-hidden="true">#</a> 查看修改的具体内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token comment"># 比较修改之后还没有暂存起来的变化内容。</span>

<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span> <span class="token comment"># 查看已暂存的将要添加到下次提交里的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git status</code> 只能查看文件变动的状态，并不能查看具体修改了哪些内容。使用<code>git diff</code>可以看到具体变动的内容。</p><h3 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token comment"># 未带参数的会打开默认文本编辑器让你输入提交说明</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;提交说明&#39;</span> <span class="token comment"># 带-m参数直接输入提交说明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>git commit</code>提交更新，在此之前，务必确认所有变动已经被<code>git add</code>添加到暂存区。</p><h3 id="跳过使用暂存区域" tabindex="-1"><a class="header-anchor" href="#跳过使用暂存区域" aria-hidden="true">#</a> 跳过使用暂存区域</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;提交说明&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加<code>-a</code>选项可以跳过<code>git add</code> 步骤，把已经跟踪过的文件一并提交。</p><p>注意：这个操作<strong>无法提交未跟踪</strong>的文件。</p><h2 id="git-基础-查看提交历史" tabindex="-1"><a class="header-anchor" href="#git-基础-查看提交历史" aria-hidden="true">#</a> Git 基础 - 查看提交历史</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不传入任何参数的默认情况下，<code>git log</code> 会按时间先后顺序列出所有的提交，最近的更新排在最上面。</p><p>此命令打印的数据中有一项是一长串的 <code>SHA-1</code> 校验码。</p><p><strong>带入<code>-p</code>或<code>--patch </code>查看提交的具体差异：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token parameter variable">-2</span> <span class="token comment"># -p显示差异  -2显示最近的提交次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--stat</code> 显示每次提交的差异统计</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--stat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--pretty</code> 这个选项可以使用不同于默认格式的方式展示提交历史</p><p>这个选项有一些内建的子选项供你使用。 比如 <code>oneline</code> 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 <code>short</code>，<code>full</code> 和 <code>fuller</code> 选项，它们展示信息的格式基本一致，但是详尽程度不一：</p><div class="language-fsharp line-numbers-mode" data-ext="fs"><pre class="language-fsharp"><code>$ git log <span class="token operator">-</span><span class="token operator">-</span>pretty<span class="token operator">=</span>oneline
ca82a6dff817ec66f44342007202690a93763949 changed the version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最有意思的是 <code>format</code> ，可以定制记录的显示格式。 这样的输出对后期提取分析格外有用——因为你知道输出的格式不会随着 Git 的更新而发生改变：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h - %an, %ar : %s&quot;</span>
ca82a6d - Scott Chacon, <span class="token number">6</span> years ago <span class="token builtin class-name">:</span> changed the version number
085bb3b - Scott Chacon, <span class="token number">6</span> years ago <span class="token builtin class-name">:</span> removed unnecessary <span class="token builtin class-name">test</span>
a11bef0 - Scott Chacon, <span class="token number">6</span> years ago <span class="token builtin class-name">:</span> first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),p={href:"https://git-scm.com/book/zh/v2/ch00/pretty_format",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"git log --pretty=format",-1),m=a("code",null,"format",-1),v=n(`<p><strong>当 <code>oneline</code> 或 <code>format</code> 与另一个 <code>log</code> 选项 <code>--graph</code> 结合使用时尤其有用。 这个选项添加了一些 ASCII 字符串来形象地展示你的分支、合并历史：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h %s&quot;</span> <span class="token parameter variable">--graph</span>
* 2d3acf9 ignore errors from SIGCHLD on <span class="token builtin class-name">trap</span>
*  5e3ee11 Merge branch <span class="token string">&#39;master&#39;</span> of git://github.com/dustin/grit
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 420eac9 Added a method <span class="token keyword">for</span> getting the current branch.
* <span class="token operator">|</span> 30e367c <span class="token function">timeout</span> code and tests
* <span class="token operator">|</span> 5a09431 <span class="token function">add</span> <span class="token function">timeout</span> protection to grit
* <span class="token operator">|</span> e1193f8 support <span class="token keyword">for</span> heads with slashes <span class="token keyword">in</span> them
<span class="token operator">|</span>/
* d6016bc require <span class="token function">time</span> <span class="token keyword">for</span> xmlschema
*  11d191e Merge branch <span class="token string">&#39;defunkt&#39;</span> into <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-基础-撤消操作" tabindex="-1"><a class="header-anchor" href="#git-基础-撤消操作" aria-hidden="true">#</a> Git 基础 - 撤消操作</h2><p>你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;initial commit&#39;</span>
$ <span class="token function">git</span> <span class="token function">add</span> forgotten_file
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token comment"># 重新提交，且只有一次提交记录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终你只会有一个提交——第二次提交将代替第一次提交的结果。</p><p>更多撤销操作请了解 <code>reset</code>命令。</p><h2 id="git-基础-远程仓库的使用" tabindex="-1"><a class="header-anchor" href="#git-基础-远程仓库的使用" aria-hidden="true">#</a> Git 基础 - 远程仓库的使用</h2><h3 id="查看远程仓库" tabindex="-1"><a class="header-anchor" href="#查看远程仓库" aria-hidden="true">#</a> 查看远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token comment"># 仅显示远程仓库的名称</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 显示远程仓库的名称 + 地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>远程仓库名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从远程仓库中抓取与拉取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中抓取与拉取" aria-hidden="true">#</a> 从远程仓库中抓取与拉取</h3><p>就如刚才所见，从远程仓库中获得数据，可以执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。</p><p>注意： <code>git fetch</code> 命令只会将数据下载到你的本地仓库——<strong>它并不会自动合并或修改你当前的工作</strong>。 当准备好时你必须手动将其合并入你的工作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用 <code>git pull</code> 命令来自动抓取后合并该远程分支到当前分支。 这或许是个更加简单舒服的工作流程。默认情况下，<code>git clone</code> 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 <code>master</code> 分支（或其它名字的默认分支）。 <strong>运行 <code>git pull</code> 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。</strong></p><h3 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment"># git push origin master</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看某个远程仓库" tabindex="-1"><a class="header-anchor" href="#查看某个远程仓库" aria-hidden="true">#</a> 查看某个远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># git remote show origin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程仓库的详细信息。这个命令列出了当你在特定的分支上执行 <code>git push</code> 会自动地推送到哪一个远程分支</p><h3 id="远程仓库的重命名与移除" tabindex="-1"><a class="header-anchor" href="#远程仓库的重命名与移除" aria-hidden="true">#</a> 远程仓库的重命名与移除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>原名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>新名<span class="token operator">&gt;</span> <span class="token comment"># 重命名</span>
<span class="token function">git</span> remote remove paul <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span><span class="token comment"># 移除远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-基础-打标签" tabindex="-1"><a class="header-anchor" href="#git-基础-打标签" aria-hidden="true">#</a> Git 基础 - 打标签</h2><h3 id="列出标签" tabindex="-1"><a class="header-anchor" href="#列出标签" aria-hidden="true">#</a> 列出标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token comment"># 完整标签列表</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&quot;v2.0*&quot;</span> <span class="token comment"># 只显示包含 v2.0 的标签。 注意加星号(*)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-l</code> 或 <code>--list</code> 都可以。</p><h3 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h3><p>Git 支持两种标签：<strong>轻量标签</strong>（lightweight）与<strong>附注标签</strong>（annotated）。</p><p>轻量标签很像一个不会改变的分支——它<strong>只是某个特定提交的引用</strong>。</p><p>而附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中<strong>包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息</strong>，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。</p><h3 id="附注标签" tabindex="-1"><a class="header-anchor" href="#附注标签" aria-hidden="true">#</a> 附注标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.4 <span class="token parameter variable">-m</span> <span class="token string">&quot;my version 1.4&quot;</span> <span class="token comment"># -a表示add， -m 表示附件信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过使用 <code>git show</code> 命令可以看到标签信息和与之对应的提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="轻量标签" tabindex="-1"><a class="header-anchor" href="#轻量标签" aria-hidden="true">#</a> 轻量标签</h3><p>轻量标签本质上是将提交校验和存储到一个文件中——没有保存任何其他信息。 创建轻量标签，不需要使用 <code>-a</code>、<code>-s</code> 或 <code>-m</code> 选项，只需要提供标签名字：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag v1.4-lw <span class="token comment"># 不需要添加选项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时，如果在标签上运行 <code>git show</code>，你不会看到额外的标签信息。 命令只会显示出提交信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> show v1.4-lw
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <span class="token operator">&lt;</span>schacon@gee-mail.com<span class="token operator">&gt;</span>
Date:   Mon Mar <span class="token number">17</span> <span class="token number">21</span>:52:11 <span class="token number">2008</span> <span class="token parameter variable">-0700</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后期打标签" tabindex="-1"><a class="header-anchor" href="#后期打标签" aria-hidden="true">#</a> 后期打标签</h3><p>你也可以对过去的提交打标签。 假设提交历史是这样的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
166ae0c4d3f420721acbb115cc33848dfcc2121a started <span class="token function">write</span> support
9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile
8a5cbc430f1a9c3d00faaeffd07798508422908a updated readme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，假设在 v1.2 时你忘记给项目打标签，也就是在 “updated rakefile” 提交。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.2 9fceb02 <span class="token comment"># 打的标签属于附注标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="共享标签" tabindex="-1"><a class="header-anchor" href="#共享标签" aria-hidden="true">#</a> 共享标签</h3><p><code>git push</code> 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样——你可以运行 <code>git push origin &lt;tagname&gt;</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin v1.5 <span class="token comment"># 显式地推送标签到远程仓库</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span> <span class="token comment"># 一次性推送所有不在远程仓库上的标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签。</p><h3 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h3><p>要删除掉你本地仓库上的标签，可以使用命令 <code>git tag -d &lt;tagname&gt;</code>。 例如，可以使用以下命令删除一个轻量标签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.4-lw
Deleted tag <span class="token string">&#39;v1.4-lw&#39;</span> <span class="token punctuation">(</span>was e7d5add<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上述命令并不会从任何远程仓库中移除这个标签，你必须用 <code>git push &lt;remote&gt; :refs/tags/&lt;tagname&gt;</code> 来更新你的远程仓库：</p><p>第一种变体是 <code>git push &lt;remote&gt; :refs/tags/&lt;tagname&gt;</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin :refs/tags/v1.4-lw
To /git@github.com:schacon/simplegit.git
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         v1.4-lw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。</p><p>第二种更直观的删除远程标签的方式是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检出标签" tabindex="-1"><a class="header-anchor" href="#检出标签" aria-hidden="true">#</a> 检出标签</h3><p>如果你想查看某个标签所指向的文件版本，可以使用 <code>git checkout</code> 命令， 虽然这会使你的仓库处于“分离头指针（detached HEAD）”的状态——这个状态有些不好的副作用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token number">2.0</span>.0
Note: checking out <span class="token string">&#39;2.0.0&#39;</span><span class="token builtin class-name">.</span>

You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental
changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
<span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-b</span> with the checkout <span class="token builtin class-name">command</span> again. Example:

  <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>new-branch<span class="token operator">&gt;</span>

HEAD is now at 99ada87<span class="token punctuation">..</span>. Merge pull request <span class="token comment">#89 from schacon/appendix-final</span>

$ <span class="token function">git</span> checkout <span class="token number">2.0</span>-beta-0.1
Previous HEAD position was 99ada87<span class="token punctuation">..</span>. Merge pull request <span class="token comment">#89 from schacon/appendix-final</span>
HEAD is now at df3f601<span class="token punctuation">..</span>. <span class="token function">add</span> atlas.json and cover image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在“分离头指针”状态下，如果你做了某些更改然后提交它们，标签不会发生变化， 但你的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。 因此，如果你需要进行更改，比如你要修复旧版本中的错误，那么通常需要创建一个新分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> version2 v2.0.0
Switched to a new branch <span class="token string">&#39;version2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在这之后又进行了一次提交，<code>version2</code> 分支就会因为这个改动向前移动， 此时它就会和 <code>v2.0.0</code> 标签稍微有些不同，这时就要当心了。</p><h2 id="git-命令别名" tabindex="-1"><a class="header-anchor" href="#git-命令别名" aria-hidden="true">#</a> Git 命令别名</h2><p>Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入完整的 Git 命令，可以通过 <code>git config</code> 文件来轻松地为每一个命令设置一个别名。 这里有一些例子你可以试试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.br branch
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.st status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着，当要输入 <code>git commit</code> 时，只需要输入 <code>git ci</code>。</p><p>在创建你认为应该存在的命令时这个技术会很有用。 例如，为了解决取消暂存文件的易用性问题，可以向 Git 中添加你自己的取消暂存别名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.unstage <span class="token string">&#39;reset HEAD --&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会使下面的两个命令等价：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> unstage fileA
$ <span class="token function">git</span> reset HEAD -- fileA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样看起来更清楚一些。 通常也会添加一个 <code>last</code> 命令，像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.last <span class="token string">&#39;log -1 HEAD&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，可以轻松地看到最后一次提交：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> last
commit 66938dae3329c7aebe598c2246a8e6af90d04646
Author: Josh Goebel <span class="token operator">&lt;</span>dreamer3@example.com<span class="token operator">&gt;</span>
Date:   Tue Aug <span class="token number">26</span> <span class="token number">19</span>:48:51 <span class="token number">2008</span> +0800

    <span class="token builtin class-name">test</span> <span class="token keyword">for</span> current <span class="token function">head</span>

    Signed-off-by: Scott Chacon <span class="token operator">&lt;</span>schacon@example.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，Git 只是简单地将别名替换为对应的命令。 然而，你可能想要执行外部命令，而不是一个 Git 子命令。 如果是那样的话，可以在命令前面加入 <code>!</code> 符号。 如果你自己要写一些与 Git 仓库协作的工具的话，那会很有用。 我们现在演示将 <code>git visual</code> 定义为 <code>gitk</code> 的别名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.visual <span class="token string">&#39;!gitk&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,81);function b(h,g){const e=t("ExternalLinkIcon");return c(),l("div",null,[r,a("p",null,[a("a",p,[u,s(" 常用的选项"),d(e)]),s(" 列出了 "),m,s(" 接受的常用格式占位符的写法及其代表的意义。")]),v])}const x=i(o,[["render",b],["__file","10.Git基础与命令.html.vue"]]);export{x as default};
