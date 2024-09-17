import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as r,b as e,d as n,a,e as o}from"./app-XuorXwmJ.js";const d={},l=o(`<h1 id="git-分支-远程分支" tabindex="-1"><a class="header-anchor" href="#git-分支-远程分支" aria-hidden="true">#</a> Git 分支-远程分支</h1><p><strong>远程引用是对远程仓库的引用（指针）</strong>，包括分支、标签等等。</p><blockquote><p>远程分支本质上也是一个指针，指向远程地址</p></blockquote><h3 id="查看远程引用列表与信息" tabindex="-1"><a class="header-anchor" href="#查看远程引用列表与信息" aria-hidden="true">#</a> 查看远程引用列表与信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># 远程引用的完整列表</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># 远程分支的更多信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两行命令比较少用，更常见的做法是利用远程跟踪分支。</p><h3 id="远程跟踪分支" tabindex="-1"><a class="header-anchor" href="#远程跟踪分支" aria-hidden="true">#</a> 远程跟踪分支</h3><p><strong>远程跟踪分支是远程分支状态的引用</strong>。它们是你无法移动的本地引用。一旦你进行了网络通信， Git 就会为你移动它们以<strong>精确反映远程仓库的状态</strong>。请将它们<strong>看做书签</strong>， 这样可以提醒你该分支在远程仓库中的位置就是你最后一次连接到它们的位置。</p><p>它们<strong>以 <code>&lt;remote&gt;/&lt;branch&gt;</code> 的形式命名</strong>。 例如，如果你想要<strong>查看最后一次与远程仓库 <code>origin</code> 通信时 <code>master</code> 分支的状态</strong>，你可以查看 <code>origin/master</code> 分支。 你与同事合作解决一个问题并且他们推送了一个 <code>iss53</code> 分支，你可能有自己的本地 <code>iss53</code> 分支， 然而在服务器上的分支会以 <code>origin/iss53</code> 来表示。</p><p>这可能有一点儿难以理解，让我们来看一个例子。 假设你的网络里有一个在 <code>git.ourcompany.com</code> 的 Git 服务器。 如果你从这里克隆，Git 的 <code>clone</code> 命令会为你自动将其命名为 <code>origin</code>，拉取它的所有数据， 创建一个指向它的 <code>master</code> 分支的指针，并且<strong>在本地将其命名为 <code>origin/master</code></strong>。 Git 也会给你一个与 origin 的 <code>master</code> 分支在指向同一个地方的本地 <code>master</code> 分支，这样你就有工作的基础。</p><p><mark><strong>笔记：从远程克隆下来的仓库有一个叫<code>origin/master</code>的远程跟踪分支 和 一个本地的<code>master</code>分支</strong></mark></p><blockquote><p>笔记：“origin” 并无特殊含义远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别的含义一样。 同时 “master” 是当你运行 <code>git init</code> 时默认的起始分支名字，原因仅仅是它的广泛使用， “origin” 是当你运行 <code>git clone</code> 时默认的远程仓库名字。 如果你运行 <code>git clone -o booyah</code>，那么你默认的远程分支名字将会是 <code>booyah/master</code>。</p></blockquote><figure><img src="https://git-scm.com/book/en/v2/images/remote-branches-1.png" alt="克隆之后的服务器与本地仓库。" tabindex="0" loading="lazy"><figcaption>克隆之后的服务器与本地仓库。</figcaption></figure><p align="center">图1. 克隆之后的服务器与本地仓库 ▲</p><p>如果你在本地的 <code>master</code> 分支做了一些工作，在同一段时间内有其他人推送提交到 <code>git.ourcompany.com</code> 并且更新了它的 <code>master</code> 分支，这就是说你们的提交历史已走向不同的方向。 即便这样，只要你保持不与 <code>origin</code> 服务器连接（并拉取数据），你的 <code>origin/master</code> 指针就不会移动。</p><figure><img src="https://git-scm.com/book/en/v2/images/remote-branches-2.png" alt="本地与远程的工作可以分叉。" tabindex="0" loading="lazy"><figcaption>本地与远程的工作可以分叉。</figcaption></figure><p align="center">图2. 本地与远程的工作可以分叉 ▲</p><p>如果要与给定的远程仓库同步数据，运行 <code>git fetch &lt;remote&gt;</code> 命令（在本例中为 <code>git fetch origin</code>）。 这个命令查找 “origin” 是哪一个服务器（在本例中，它是 <code>git.ourcompany.com</code>）， 从中抓取本地没有的数据，并且更新本地数据库，移动 <code>origin/master</code> 指针到更新之后的位置。</p><figure><img src="https://git-scm.com/book/en/v2/images/remote-branches-3.png" alt=" 更新你的远程仓库引用。" tabindex="0" loading="lazy"><figcaption><code>git fetch</code> 更新你的远程仓库引用。</figcaption></figure><p align="center">图3. git fetch 更新你的远程跟踪分支 ▲</p><p><mark>笔记: 本地的 master 分支 可能 和 远程跟踪分支 origin/master 分叉</mark></p>`,21),p=e("code",null,"git.team1.ourcompany.com",-1),u=e("code",null,"git remote add",-1),g={href:"https://git-scm.com/book/zh/v2/ch00/ch02-git-basics-chapter",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,[n("命名为 "),e("code",null,"teamone"),n("，将其作为完整 URL 的缩写")],-1),h=e("mark",null,"远程仓库名本质上是远程 URL 的缩写",-1),b=o(`<figure><img src="https://git-scm.com/book/en/v2/images/remote-branches-4.png" alt="添加另一个远程仓库。" tabindex="0" loading="lazy"><figcaption>添加另一个远程仓库。</figcaption></figure><p align="center">图4. 添加另一个远程仓库 ▲</p><p>现在，可以运行 <code>git fetch teamone</code> 来抓取远程仓库 <code>teamone</code> 有而本地没有的数据。 因为那台服务器上现有的数据是 <code>origin</code> 服务器上的一个子集， 所以 Git 并不会抓取数据而是会设置远程跟踪分支 <code>teamone/master</code> 指向 <code>teamone</code> 的 <code>master</code> 分支。</p><figure><img src="https://git-scm.com/book/en/v2/images/remote-branches-5.png" alt="远程跟踪分支 。" tabindex="0" loading="lazy"><figcaption>远程跟踪分支 <code>teamone/master</code>。</figcaption></figure><p align="center">图5. 远程跟踪分支 teamone/master ▲</p><h3 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h3><p>当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。 本地的分支并不会自动与远程仓库同步——你必须显式地推送想要分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。</p><p>如果希望和别人一起在名为 <code>serverfix</code> 的分支上工作，你可以像推送第一个分支那样推送它。 运行 <code>git push &lt;remote&gt; &lt;branch&gt;</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin serverfix
Counting objects: <span class="token number">24</span>, done.
Delta compression using up to <span class="token number">8</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">24</span>/24<span class="token punctuation">)</span>, <span class="token number">1.91</span> KiB <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">24</span> <span class="token punctuation">(</span>delta <span class="token number">2</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To https://github.com/schacon/simplegit
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      serverfix -<span class="token operator">&gt;</span> serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=e("strong",null,[n("Git 自动将 "),e("code",null,"serverfix"),n(" 分支名字展开为 "),e("code",null,"refs/heads/serverfix:refs/heads/serverfix"),n("，")],-1),f=e("code",null,"serverfix",-1),k=e("code",null,"serverfix",-1),x={href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"refs/heads/",-1),y=e("code",null,"git push origin serverfix:serverfix",-1),G=e("strong",null,[n("推送本地的 "),e("code",null,"serverfix"),n(" 分支，将其作为远程仓库的 "),e("code",null,"serverfix"),n(" 分支")],-1),w=e("h4",{id:"重命名远程仓库上的分支名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重命名远程仓库上的分支名","aria-hidden":"true"},"#"),n(" 重命名远程仓库上的分支名")],-1),$=e("p",null,[n("如果并不想让远程仓库上的分支叫做 "),e("code",null,"serverfix"),n("，可以运行 "),e("code",null,"git push origin serverfix:awesomebranch"),n(" 来将本地的 "),e("code",null,"serverfix"),n(" 分支推送到远程仓库上的 "),e("code",null,"awesomebranch"),n(" 分支。")],-1),B=e("th",null,"Note",-1),z=e("code",null,"git config --global credential.helper cache",-1),T={href:"https://git-scm.com/book/zh/v2/ch00/_credential_caching",target:"_blank",rel:"noopener noreferrer"},j=e("tbody",null,[e("tr",null,[e("td"),e("td")])],-1),N=o(`<p>下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程分支 <code>origin/serverfix</code>，指向服务器的 <code>serverfix</code> 分支的引用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin
remote: Counting objects: <span class="token number">7</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
From https://github.com/schacon/simplegit
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      serverfix    -<span class="token operator">&gt;</span> origin/serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要特别注意的一点是当抓取到新的远程跟踪分支时，本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 <code>serverfix</code> 分支——只有一个不可以修改的 <code>origin/serverfix</code> 指针。</p><p>可以运行 <code>git merge origin/serverfix</code> 将这些工作合并到当前所在的分支。 如果想要在自己的 <code>serverfix</code> 分支上工作，可以将其建立在远程跟踪分支之上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> serverfix origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会给你一个用于工作的本地分支，并且起点位于 <code>origin/serverfix</code>。</p><h3 id="跟踪分支" tabindex="-1"><a class="header-anchor" href="#跟踪分支" aria-hidden="true">#</a> 跟踪分支</h3><p><strong>从一个远程跟踪分支检出一个本地分支会自动创建所谓的“跟踪分支”（它跟踪的分支叫做“上游分支”）</strong>。 <strong>跟踪分支是与远程分支有直接关系的本地分支</strong>。 如果在一个跟踪分支上输入 <code>git pull</code>，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。</p><p>当克隆一个仓库时，它通常会自动地创建一个跟踪 <code>origin/master</code> 的 <code>master</code> 分支。 然而，如果你愿意的话可以设置其他的跟踪分支，或是一个在其他远程仓库上的跟踪分支，又或者不跟踪 <code>master</code> 分支。 最简单的实例就是像之前看到的那样，运行 <code>git checkout -b &lt;branch&gt; &lt;remote&gt;/&lt;branch&gt;</code>。 这是一个十分常用的操作所以 Git 提供了 <code>--track</code> 快捷方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">--track</span> origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这个操作太常用了，该捷径本身还有一个捷径。 如果你尝试检出的分支 (a) 不存在且 (b) 刚好只有一个名字与之匹配的远程分支，那么 Git 就会为你创建一个跟踪分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要将本地分支与远程分支设置为不同的名字，你可以轻松地使用上一个命令增加一个不同名字的本地分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> sf origin/serverfix
Branch sf <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;sf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，本地分支 <code>sf</code> 会自动从 <code>origin/serverfix</code> 拉取。</p><p>设置已有的本地分支跟踪一个刚刚拉取下来的远程分支，或者想要修改正在跟踪的上游分支， 你可以在任意时间使用 <code>-u</code> 或 <code>--set-upstream-to</code> 选项运行 <code>git branch</code> 来显式地设置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-u</span> origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Note</th><th>上游快捷方式当设置好跟踪分支后，可以通过简写 <code>@{upstream}</code> 或 <code>@{u}</code> 来引用它的上游分支。 所以在 <code>master</code> 分支时并且它正在跟踪 <code>origin/master</code> 时，如果愿意的话可以使用 <code>git merge @{u}</code> 来取代 <code>git merge origin/master</code>。</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h3 id="查看跟踪分支" tabindex="-1"><a class="header-anchor" href="#查看跟踪分支" aria-hidden="true">#</a> 查看跟踪分支</h3><p>如果想要查看设置的所有跟踪分支，可以使用 <code>git branch</code> 的 <code>-vv</code> 选项。 这会将所有的本地分支列出来并且包含更多的信息，如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
  iss53     7e424c3 <span class="token punctuation">[</span>origin/iss53: ahead <span class="token number">2</span><span class="token punctuation">]</span> forgot the brackets
  master    1ae2a45 <span class="token punctuation">[</span>origin/master<span class="token punctuation">]</span> deploying index fix
* serverfix f8674d9 <span class="token punctuation">[</span>teamone/server-fix-good: ahead <span class="token number">3</span>, behind <span class="token number">1</span><span class="token punctuation">]</span> this should <span class="token keyword">do</span> it
  testing   5ea463a trying something new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以看到 <code>iss53</code> 分支正在跟踪 <code>origin/iss53</code> 并且 “ahead” 是 2，意味着本地有两个提交还没有推送到服务器上。 也能看到 <code>master</code> 分支正在跟踪 <code>origin/master</code> 分支并且是最新的。 接下来可以看到 <code>serverfix</code> 分支正在跟踪 <code>teamone</code> 服务器上的 <code>server-fix-good</code> 分支并且领先 3 落后 1， 意味着服务器上有一次提交还没有合并入同时本地有三次提交还没有推送。 最后看到 <code>testing</code> 分支并没有跟踪任何远程分支。</p><p>需要重点注意的一点是这些数字的值来自于你从每个服务器上最后一次抓取的数据。 <strong>这个命令并没有连接服务器</strong>，它只会告诉你关于本地缓存的服务器数据。 如果想要统计最新的领先与落后数字，需要在运行此命令前抓取所有的远程仓库。 可以像这样做：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch --all<span class="token punctuation">;</span> <span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取" tabindex="-1"><a class="header-anchor" href="#拉取" aria-hidden="true">#</a> 拉取</h3><p>当 <code>git fetch</code> 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。 然而，有一个命令叫作 <code>git pull</code> 在大多数情况下它的含义是一个 <code>git fetch</code> 紧接着一个 <code>git merge</code> 命令。 如果有一个像之前章节中演示的设置好的跟踪分支，不管它是显式地设置还是通过 <code>clone</code> 或 <code>checkout</code> 命令为你创建的，<code>git pull</code> 都会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据然后尝试合并入那个远程分支。</p><p>由于 <code>git pull</code> 的魔法经常令人困惑所以通常单独显式地使用 <code>fetch</code> 与 <code>merge</code> 命令会更好一些。</p><h3 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h3><p>假设你已经通过远程分支做完所有的工作了——也就是说你和你的协作者已经完成了一个特性， 并且将其合并到了远程仓库的 <code>master</code> 分支（或任何其他稳定代码分支）。 可以运行带有 <code>--delete</code> 选项的 <code>git push</code> 命令来删除一个远程分支。 如果想要从服务器上删除 <code>serverfix</code> 分支，运行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> serverfix
To https://github.com/schacon/simplegit
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本上这个命令做的只是从服务器上移除这个指针。 Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。</p>`,31);function S(C,L){const s=i("ExternalLinkIcon");return c(),r("div",null,[l,e("p",null,[n("为了演示有多个远程仓库与远程分支的情况，我们假定你有另一个内部 Git 服务器，仅服务于你的某个敏捷开发团队。 这个服务器位于 "),p,n("。 你可以运行 "),u,n(" 命令添加一个新的远程仓库引用到当前的项目，这个命令我们会在 "),e("a",g,[n("Git 基础"),a(s)]),n(" 中详细说明。 将这个远程仓库"),m,n("。"),h]),b,e("p",null,[n("这里有些工作被简化了。 "),v,n(" 那意味着，“推送本地的 "),f,n(" 分支来更新远程仓库上的 "),k,n(" 分支。” 我们将会详细学习 "),e("a",x,[n("Git 内部原理"),a(s)]),n(" 的 "),_,n(" 部分， 但是现在可以先把它放在儿。你也可以运行 "),y,n("， 它会做同样的事——也就是说“"),G,n("” 可以通过这种格式来推送本地分支到一个命名不相同的远程分支。")]),w,$,e("table",null,[e("thead",null,[e("tr",null,[B,e("th",null,[n("如何避免每次输入密码如果你正在使用 HTTPS URL 来推送，Git 服务器会询问用户名与密码。 默认情况下它会在终端中提示服务器是否允许你进行推送。如果不想在每一次推送时都输入用户名与密码，你可以设置一个 “credential cache”。 最简单的方式就是将其保存在内存中几分钟，可以简单地运行 "),z,n(" 来设置它。想要了解更多关于不同验证缓存的可用选项，查看 "),e("a",T,[n("凭证存储"),a(s)]),n("。")])])]),j]),N])}const V=t(d,[["render",S],["__file","60.Git分支-远程分支.html.vue"]]);export{V as default};
