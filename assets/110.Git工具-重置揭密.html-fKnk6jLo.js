import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as n,b as t,d as e,a as o,e as a}from"./app-Efa2_n6B.js";const r={},l=a(`<h1 id="git-工具-重置揭密" tabindex="-1"><a class="header-anchor" href="#git-工具-重置揭密" aria-hidden="true">#</a> Git 工具 - 重置揭密</h1><p>在继续了解更专业的工具前，我们先探讨一下 Git 的 <code>reset</code> 和 <code>checkout</code> 命令。 在初遇的 Git 命令中，这两个是最让人困惑的。 它们能做很多事情，所以看起来我们很难真正地理解并恰当地运用它们。 针对这一点，我们先来做一个简单的比喻。</p><h2 id="三棵树" tabindex="-1"><a class="header-anchor" href="#三棵树" aria-hidden="true">#</a> 三棵树</h2><p>理解 <code>reset</code> 和 <code>checkout</code> 的最简方法，就是以 Git 的思维框架（将其作为内容管理器）来管理三棵不同的树。 “树” 在我们这里的实际意思是 “文件的集合”，而不是指特定的数据结构。 （在某些情况下索引看起来并不像一棵树，不过我们现在的目的是用简单的方式思考它。）</p><p>Git 作为一个系统，是以它的一般操作来管理并操纵这三棵树的：</p><table><thead><tr><th style="text-align:left;">树</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;">HEAD</td><td style="text-align:left;">上一次提交的快照，下一次提交的父结点</td></tr><tr><td style="text-align:left;">Index</td><td style="text-align:left;">预期的下一次提交的快照</td></tr><tr><td style="text-align:left;">Working Directory</td><td style="text-align:left;">沙盒</td></tr></tbody></table><h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> HEAD</h3><p><strong>HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交</strong>。 这表示 HEAD 将是下一次提交的父结点。 通常，理解 HEAD 的最简方式，就是将它看做 <strong>该分支上的最后一次提交</strong> 的快照。</p><p>其实，查看快照的样子很容易。 下例就显示了 HEAD 快照实际的目录列表，以及其中每个文件的 SHA-1 校验和：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> HEAD
tree cfda3bf379e4f8dba8717dee55aab78aef7f4daf
author Scott Chacon  <span class="token number">1301511835</span> <span class="token parameter variable">-0700</span>
committer Scott Chacon  <span class="token number">1301511835</span> <span class="token parameter variable">-0700</span>

initial commit

$ <span class="token function">git</span> ls-tree <span class="token parameter variable">-r</span> HEAD
<span class="token number">100644</span> blob a906cb2a4a904a152<span class="token punctuation">..</span>.   README
<span class="token number">100644</span> blob 8f94139338f9404f2<span class="token punctuation">..</span>.   Rakefile
040000 tree 99f1a6d12cb4b6f19<span class="token punctuation">..</span>.   lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 的 <code>cat-file</code> 和 <code>ls-tree</code> 是底层命令，它们一般用于底层工作，在日常工作中并不使用。 不过它们能帮助我们了解到底发生了什么。</p><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><p>索引是你的 <strong>预期的下一次提交</strong>。 我们也会将这个概念引用为 Git 的“暂存区”，这就是当你运行 <code>git commit</code> 时 Git 看起来的样子。</p><p>Git 将上一次检出到工作目录中的所有文件填充到索引区，它们看起来就像最初被检出时的样子。 之后你会将其中一些文件替换为新版本，接着通过 <code>git commit</code> 将它们转换为树来用作新的提交。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> ls-files <span class="token parameter variable">-s</span>
<span class="token number">100644</span> a906cb2a4a904a152e80877d4088654daad0c859 <span class="token number">0</span>	README
<span class="token number">100644</span> 8f94139338f9404f26296befa88755fc2598c289 <span class="token number">0</span>	Rakefile
<span class="token number">100644</span> 47c6340d6459e05787f644c2447d2595f5d3a54b <span class="token number">0</span>	lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再说一次，我们在这里又用到了 <code>git ls-files</code> 这个幕后的命令，它会显示出索引当前的样子。</p><p>确切来说，索引在技术上并非树结构，它其实是以扁平的清单实现的。不过对我们而言，把它当做树就够了。</p><h3 id="工作目录" tabindex="-1"><a class="header-anchor" href="#工作目录" aria-hidden="true">#</a> 工作目录</h3><p>最后，你就有了自己的 <strong>工作目录</strong>（通常也叫 <strong>工作区</strong>）。 另外两棵树以一种高效但并不直观的方式，将它们的内容存储在 <code>.git</code> 文件夹中。 工作目录会将它们解包为实际的文件以便编辑。 你可以把工作目录当做 <strong>沙盒</strong>。在你将修改提交到暂存区并记录到历史之前，可以随意更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ tree
<span class="token builtin class-name">.</span>
├── README
├── Rakefile
└── lib
    └── simplegit.rb

<span class="token number">1</span> directory, <span class="token number">3</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h2><p>经典的 Git 工作流程是通过操纵这三个区域来以更加连续的状态记录项目快照的。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-workflow.png" alt="reset workflow" tabindex="0" loading="lazy"><figcaption>reset workflow</figcaption></figure><p>让我们来可视化这个过程：假设我们进入到一个新目录，其中有一个文件。 我们称其为该文件的 <strong>v1</strong> 版本，将它标记为蓝色。 现在运行 <code>git init</code>，这会创建一个 Git 仓库，其中的 HEAD 引用指向未创建的 <code>master</code> 分支。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex1.png" alt="reset ex1" tabindex="0" loading="lazy"><figcaption>reset ex1</figcaption></figure><p>此时，只有工作目录有内容。</p><p>现在我们想要提交这个文件，所以用 <code>git add</code> 来获取工作目录中的内容，并将其复制到索引中。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex2.png" alt="reset ex2" tabindex="0" loading="lazy"><figcaption>reset ex2</figcaption></figure><p>接着运行 <code>git commit</code>，它会取得索引中的内容并将它保存为一个永久的快照， 然后创建一个指向该快照的提交对象，最后更新 <code>master</code> 来指向本次提交。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex3.png" alt="reset ex3" tabindex="0" loading="lazy"><figcaption>reset ex3</figcaption></figure><p>此时如果我们运行 <code>git status</code>，会发现没有任何改动，因为现在三棵树完全相同。</p><p>现在我们想要对文件进行修改然后提交它。 我们将会经历同样的过程；首先在工作目录中修改文件。 我们称其为该文件的 <strong>v2</strong> 版本，并将它标记为红色。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex4.png" alt="reset ex4" tabindex="0" loading="lazy"><figcaption>reset ex4</figcaption></figure><p>如果现在运行 <code>git status</code>，我们会看到文件显示在 “Changes not staged for commit” 下面并被标记为红色，因为该条目在索引与工作目录之间存在不同。 接着我们运行 <code>git add</code> 来将它暂存到索引中。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex5.png" alt="reset ex5" tabindex="0" loading="lazy"><figcaption>reset ex5</figcaption></figure><p>此时，由于索引和 HEAD 不同，若运行 <code>git status</code> 的话就会看到 “Changes to be committed” 下的该文件变为绿色 ——也就是说，现在预期的下一次提交与上一次提交不同。 最后，我们运行 <code>git commit</code> 来完成提交。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-ex6.png" alt="reset ex6" tabindex="0" loading="lazy"><figcaption>reset ex6</figcaption></figure><p>现在运行 <code>git status</code> 会没有输出，因为三棵树又变得相同了。</p><p>切换分支或克隆的过程也类似。 当检出一个分支时，它会修改 <strong>HEAD</strong> 指向新的分支引用，将 <strong>索引</strong> 填充为该次提交的快照， 然后将 <strong>索引</strong> 的内容复制到 <strong>工作目录</strong> 中。</p><h2 id="重置的作用" tabindex="-1"><a class="header-anchor" href="#重置的作用" aria-hidden="true">#</a> 重置的作用</h2><p>在以下情景中观察 <code>reset</code> 命令会更有意义。</p><p>为了演示这些例子，假设我们再次修改了 <code>file.txt</code> 文件并第三次提交它。 现在的历史看起来是这样的：</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-start.png" alt="reset start" tabindex="0" loading="lazy"><figcaption>reset start</figcaption></figure><p>让我们跟着 <code>reset</code> 看看它都做了什么。 它以一种简单可预见的方式直接操纵这三棵树。 它做了三个基本操作。</p><h3 id="第-1-步-移动-head" tabindex="-1"><a class="header-anchor" href="#第-1-步-移动-head" aria-hidden="true">#</a> 第 1 步：移动 HEAD</h3><p><code>reset</code> 做的第一件事是移动 HEAD 的指向。 这与改变 HEAD 自身不同（<code>checkout</code> 所做的）；<code>reset</code> 移动 HEAD 指向的分支。 这意味着如果 HEAD 设置为 <code>master</code> 分支（例如，你正在 <code>master</code> 分支上）， 运行 <code>git reset 9e5e6a4</code> 将会使 <code>master</code> 指向 <code>9e5e6a4</code>。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-soft.png" alt="reset soft" tabindex="0" loading="lazy"><figcaption>reset soft</figcaption></figure><p>无论你调用了何种形式的带有一个提交的 <code>reset</code>，它首先都会尝试这样做。 使用 <code>reset --soft</code>，它将仅仅停在那儿。</p>`,48),g=t("code",null,"git commit",-1),p=t("code",null,"git commit",-1),h=t("code",null,"reset",-1),m=t("code",null,"HEAD~",-1),f=t("code",null,"git commit",-1),u=t("code",null,"git commit --amend",-1),b={href:"https://git-scm.com/book/zh/v2/ch00/_git_amend",target:"_blank",rel:"noopener noreferrer"},x=a('<h3 id="第-2-步-更新索引-mixed" tabindex="-1"><a class="header-anchor" href="#第-2-步-更新索引-mixed" aria-hidden="true">#</a> 第 2 步：更新索引（--mixed）</h3><p>注意，如果你现在运行 <code>git status</code> 的话，就会看到新的 HEAD 和以绿色标出的它和索引之间的区别。</p><p>接下来，<code>reset</code> 会用 HEAD 指向的当前快照的内容来更新索引。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-mixed.png" alt="reset mixed" tabindex="0" loading="lazy"><figcaption>reset mixed</figcaption></figure><p>如果指定 <code>--mixed</code> 选项，<code>reset</code> 将会在这时停止。 这也是默认行为，所以如果没有指定任何选项（在本例中只是 <code>git reset HEAD~</code>），这就是命令将会停止的地方。</p><p>现在再看一眼上图，理解一下发生的事情：它依然会撤销一上次 <code>提交</code>，但还会 <em>取消暂存</em> 所有的东西。 于是，我们回滚到了所有 <code>git add</code> 和 <code>git commit</code> 的命令执行之前。</p><h3 id="第-3-步-更新工作目录-hard" tabindex="-1"><a class="header-anchor" href="#第-3-步-更新工作目录-hard" aria-hidden="true">#</a> 第 3 步：更新工作目录（--hard）</h3><p><code>reset</code> 要做的的第三件事情就是让工作目录看起来像索引。 如果使用 <code>--hard</code> 选项，它将会继续这一步。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-hard.png" alt="reset hard" tabindex="0" loading="lazy"><figcaption>reset hard</figcaption></figure><p>现在让我们回想一下刚才发生的事情。 你撤销了最后的提交、<code>git add</code> 和 <code>git commit</code> 命令 <strong>以及</strong> 工作目录中的所有工作。</p><p>必须注意，<code>--hard</code> 标记是 <code>reset</code> 命令唯一的危险用法，它也是 Git 会真正地销毁数据的仅有的几个操作之一。 其他任何形式的 <code>reset</code> 调用都可以轻松撤消，但是 <code>--hard</code> 选项不能，因为它强制覆盖了工作目录中的文件。 在这种特殊情况下，我们的 Git 数据库中的一个提交内还留有该文件的 <strong>v3</strong> 版本， 我们可以通过 <code>reflog</code> 来找回它。但是若该文件还未提交，Git 仍会覆盖它从而导致无法恢复。</p><h3 id="回顾" tabindex="-1"><a class="header-anchor" href="#回顾" aria-hidden="true">#</a> 回顾</h3><p><code>reset</code> 命令会以特定的顺序重写这三棵树，在你指定以下选项时停止：</p><ol><li>移动 HEAD 分支的指向 <em>（若指定了 <code>--soft</code>，则到此停止）</em></li><li>使索引看起来像 HEAD <em>（若未指定 <code>--hard</code>，则到此停止）</em></li><li>使工作目录看起来像索引</li></ol><h2 id="通过路径来重置" tabindex="-1"><a class="header-anchor" href="#通过路径来重置" aria-hidden="true">#</a> 通过路径来重置</h2><p>前面讲述了 <code>reset</code> 基本形式的行为，不过你还可以给它提供一个作用路径。 若指定了一个路径，<code>reset</code> 将会跳过第 1 步，并且将它的作用范围限定为指定的文件或文件集合。 这样做自然有它的道理，因为 HEAD 只是一个指针，你无法让它同时指向两个提交中各自的一部分。 不过索引和工作目录 <em>可以部分更新</em>，所以重置会继续进行第 2、3 步。</p><p>现在，假如我们运行 <code>git reset file.txt</code> （这其实是 <code>git reset --mixed HEAD file.txt</code> 的简写形式，因为你既没有指定一个提交的 SHA-1 或分支，也没有指定 <code>--soft</code> 或 <code>--hard</code>），它会：</p><ol><li>移动 HEAD 分支的指向 <em>（已跳过）</em></li><li>让索引看起来像 HEAD <em>（到此处停止）</em></li></ol><p>所以它本质上只是将 <code>file.txt</code> 从 HEAD 复制到索引中。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-path1.png" alt="reset path1" tabindex="0" loading="lazy"><figcaption>reset path1</figcaption></figure><p>它还有 <em>取消暂存文件</em> 的实际效果。 如果我们查看该命令的示意图，然后再想想 <code>git add</code> 所做的事，就会发现它们正好相反。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-path2.png" alt="reset path2" tabindex="0" loading="lazy"><figcaption>reset path2</figcaption></figure>',22),v=t("code",null,"git status",-1),k={href:"https://git-scm.com/book/zh/v2/ch00/_unstaging",target:"_blank",rel:"noopener noreferrer"},y=a('<p>我们可以不让 Git 从 HEAD 拉取数据，而是通过具体指定一个提交来拉取该文件的对应版本。 我们只需运行类似于 <code>git reset eb43bf file.txt</code> 的命令即可。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-path3.png" alt="reset path3" tabindex="0" loading="lazy"><figcaption>reset path3</figcaption></figure><p>它其实做了同样的事情，也就是把工作目录中的文件恢复到 <strong>v1</strong> 版本，运行 <code>git add</code> 添加它， 然后再将它恢复到 <strong>v3</strong> 版本（只是不用真的过一遍这些步骤）。 如果我们现在运行 <code>git commit</code>，它就会记录一条“将该文件恢复到 <strong>v1</strong> 版本”的更改， 尽管我们并未在工作目录中真正地再次拥有它。</p><p>还有一点同 <code>git add</code> 一样，就是 <code>reset</code> 命令也可以接受一个 <code>--patch</code> 选项来一块一块地取消暂存的内容。 这样你就可以根据选择来取消暂存或恢复内容了。</p><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><p>我们来看看如何利用这种新的功能来做一些有趣的事情——压缩提交。</p>',6),E=t("code",null,"reset",-1),_={href:"https://git-scm.com/book/zh/v2/ch00/_squashing",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"reset",-1),D=a('<p>假设你有一个项目，第一次提交中有一个文件，第二次提交增加了一个新的文件并修改了第一个文件，第三次提交再次修改了第一个文件。 由于第二次提交是一个未完成的工作，因此你想要压缩它。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-squash-r1.png" alt="reset squash r1" tabindex="0" loading="lazy"><figcaption>reset squash r1</figcaption></figure><p>那么可以运行 <code>git reset --soft HEAD~2</code> 来将 HEAD 分支移动到一个旧一点的提交上（即你想要保留的最近的提交）：</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-squash-r2.png" alt="reset squash r2" tabindex="0" loading="lazy"><figcaption>reset squash r2</figcaption></figure><p>然后只需再次运行 <code>git commit</code>：</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-squash-r3.png" alt="reset squash r3" tabindex="0" loading="lazy"><figcaption>reset squash r3</figcaption></figure><p>现在你可以查看可到达的历史，即将会推送的历史，现在看起来有个 v1 版 <code>file-a.txt</code> 的提交， 接着第二个提交将 <code>file-a.txt</code> 修改成了 v3 版并增加了 <code>file-b.txt</code>。 包含 v2 版本的文件已经不在历史中了。</p><h2 id="检出" tabindex="-1"><a class="header-anchor" href="#检出" aria-hidden="true">#</a> 检出</h2><p>最后，你大概还想知道 <code>checkout</code> 和 <code>reset</code> 之间的区别。 和 <code>reset</code> 一样，<code>checkout</code> 也操纵三棵树，不过它有一点不同，这取决于你是否传给该命令一个文件路径。</p><h3 id="不带路径" tabindex="-1"><a class="header-anchor" href="#不带路径" aria-hidden="true">#</a> 不带路径</h3><p>运行 <code>git checkout [branch]</code> 与运行 <code>git reset --hard [branch]</code> 非常相似，它会更新所有三棵树使其看起来像 <code>[branch]</code>，不过有两点重要的区别。</p><p>首先不同于 <code>reset --hard</code>，<code>checkout</code> 对工作目录是安全的，它会通过检查来确保不会将已更改的文件弄丢。 其实它还更聪明一些。它会在工作目录中先试着简单合并一下，这样所有<em>还未修改过的</em>文件都会被更新。 而 <code>reset --hard</code> 则会不做检查就全面地替换所有东西。</p><p>第二个重要的区别是 <code>checkout</code> 如何更新 HEAD。 <code>reset</code> 会移动 HEAD 分支的指向，而 <code>checkout</code> 只会移动 HEAD 自身来指向另一个分支。</p><p>例如，假设我们有 <code>master</code> 和 <code>develop</code> 分支，它们分别指向不同的提交；我们现在在 <code>develop</code> 上（所以 HEAD 指向它）。 如果我们运行 <code>git reset master</code>，那么 <code>develop</code> 自身现在会和 <code>master</code> 指向同一个提交。 而如果我们运行 <code>git checkout master</code> 的话，<code>develop</code> 不会移动，HEAD 自身会移动。 现在 HEAD 将会指向 <code>master</code>。</p><p>所以，虽然在这两种情况下我们都移动 HEAD 使其指向了提交 A，但<em>做法</em>是非常不同的。 <code>reset</code> 会移动 HEAD 分支的指向，而 <code>checkout</code> 则移动 HEAD 自身。</p><figure><img src="https://git-scm.com/book/en/v2/images/reset-checkout.png" alt="reset checkout" tabindex="0" loading="lazy"><figcaption>reset checkout</figcaption></figure><h3 id="带路径" tabindex="-1"><a class="header-anchor" href="#带路径" aria-hidden="true">#</a> 带路径</h3><p>运行 <code>checkout</code> 的另一种方式就是指定一个文件路径，这会像 <code>reset</code> 一样不会移动 HEAD。 它就像 <code>git reset [branch] file</code> 那样用该次提交中的那个文件来更新索引，但是它也会覆盖工作目录中对应的文件。 它就像是 <code>git reset --hard [branch] file</code>（如果 <code>reset</code> 允许你这样运行的话）， 这样对工作目录并不安全，它也不会移动 HEAD。</p><p>此外，同 <code>git reset</code> 和 <code>git add</code> 一样，<code>checkout</code> 也接受一个 <code>--patch</code> 选项，允许你根据选择一块一块地恢复文件内容。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>希望你现在熟悉并理解了 <code>reset</code> 命令，不过关于它和 <code>checkout</code> 之间的区别，你可能还是会有点困惑，毕竟不太可能记住不同调用的所有规则。</p><p>下面的速查表列出了命令对树的影响。 “HEAD” 一列中的 “REF” 表示该命令移动了 HEAD 指向的分支引用，而 “HEAD” 则表示只移动了 HEAD 自身。 特别注意 <em>WD Safe?</em> 一列——如果它标记为 <strong>NO</strong>，那么运行该命令之前请考虑一下。</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">HEAD</th><th style="text-align:left;">Index</th><th style="text-align:left;">Workdir</th><th style="text-align:left;">WD Safe?</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Commit Level</strong></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>reset --soft [commit]</code></td><td style="text-align:left;">REF</td><td style="text-align:left;">NO</td><td style="text-align:left;">NO</td><td style="text-align:left;">YES</td></tr><tr><td style="text-align:left;"><code>reset [commit]</code></td><td style="text-align:left;">REF</td><td style="text-align:left;">YES</td><td style="text-align:left;">NO</td><td style="text-align:left;">YES</td></tr><tr><td style="text-align:left;"><code>reset --hard [commit]</code></td><td style="text-align:left;">REF</td><td style="text-align:left;">YES</td><td style="text-align:left;">YES</td><td style="text-align:left;"><strong>NO</strong></td></tr><tr><td style="text-align:left;"><code>checkout &lt;commit&gt;</code></td><td style="text-align:left;">HEAD</td><td style="text-align:left;">YES</td><td style="text-align:left;">YES</td><td style="text-align:left;">YES</td></tr><tr><td style="text-align:left;"><strong>File Level</strong></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><code>reset [commit] &lt;paths&gt;</code></td><td style="text-align:left;">NO</td><td style="text-align:left;">YES</td><td style="text-align:left;">NO</td><td style="text-align:left;">YES</td></tr><tr><td style="text-align:left;"><code>checkout [commit] &lt;paths&gt;</code></td><td style="text-align:left;">NO</td><td style="text-align:left;">YES</td><td style="text-align:left;">YES</td><td style="text-align:left;"><strong>NO</strong></td></tr></tbody></table>',23);function H(z,S){const d=i("ExternalLinkIcon");return c(),n("div",null,[l,t("p",null,[e("现在看一眼上图，理解一下发生的事情：它本质上是撤销了上一次 "),g,e(" 命令。 当你在运行 "),p,e(" 时，Git 会创建一个新的提交，并移动 HEAD 所指向的分支来使其指向该提交。 当你将它 "),h,e(" 回 "),m,e("（HEAD 的父结点）时，其实就是把该分支移动回原来的位置，而不会改变索引和工作目录。 现在你可以更新索引并再次运行 "),f,e(" 来完成 "),u,e(" 所要做的事情了（见 "),t("a",b,[e("修改最后一次提交"),o(d)]),e("）。")]),x,t("p",null,[e("这就是为什么 "),v,e(" 命令的输出会建议运行此命令来取消暂存一个文件。 （查看 "),t("a",k,[e("取消暂存的文件"),o(d)]),e(" 来了解更多。）")]),y,t("p",null,[e("假设你的一系列提交信息中有 “oops.”“WIP” 和 “forgot this file”， 聪明的你就能使用 "),E,e(" 来轻松快速地将它们压缩成单个提交，也显出你的聪明。 （"),t("a",_,[e("压缩提交"),o(d)]),e(" 展示了另一种方式，不过在本例中用 "),A,e(" 更简单。）")]),D])}const Y=s(r,[["render",H],["__file","110.Git工具-重置揭密.html.vue"]]);export{Y as default};
