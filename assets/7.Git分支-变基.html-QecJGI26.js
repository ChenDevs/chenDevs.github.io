import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as r,b as n,d as e,a,e as o}from"./app-qa6sU7xA.js";const d={},l=n("h1",{id:"git-分支-变基",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-分支-变基","aria-hidden":"true"},"#"),e(" Git 分支-变基")],-1),p=n("p",null,[e("在 Git 中整合来自不同分支的修改主要有两种方法："),n("code",null,"merge"),e(" 以及 "),n("code",null,"rebase"),e("。 在本节中我们将学习什么是“变基”，怎样使用“变基”，并将展示该操作的惊艳之处，以及指出在何种情况下你应避免使用它。")],-1),g=n("h2",{id:"变基的基本操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#变基的基本操作","aria-hidden":"true"},"#"),e(" 变基的基本操作")],-1),h={href:"https://git-scm.com/book/zh/v2/ch00/_basic_merging",target:"_blank",rel:"noopener noreferrer"},u=o(`<figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-1.png" alt="分叉的提交历史。" tabindex="0" loading="lazy"><figcaption>分叉的提交历史。</figcaption></figure><p align="center">图0. 分叉的提交历史 ▲</p><p>之前介绍过，整合分支最容易的方法是 <code>merge</code> 命令。 它会把两个分支的最新快照（<code>C3</code> 和 <code>C4</code>）以及二者最近的共同祖先（<code>C2</code>）进行<strong>三方合并</strong>，合并的结果是生成一个新的快照（并提交）。</p><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-2.png" alt="通过合并操作来整合分叉了的历史。" tabindex="0" loading="lazy"><figcaption>通过合并操作来整合分叉了的历史。</figcaption></figure><p align="center">图1. 通过合并操作来整合分叉的历史 ▲</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p><strong>变基就是：将某一分支上的所有修改复制到另一分支上</strong></p><p>除了<code>merge</code>，还有一种方法：你可以提取在 <code>C4</code> 中引入的补丁和修改，然后在 <code>C3</code> 的基础上应用一次。 在 Git 中，这种操作就叫做 <strong>变基（rebase）</strong>。 你可以使用 <code>rebase</code> 命令将提交到某一分支上的所有修改都移到另一分支上，就好像“重新播放”一样。</p><p>在这个例子中，你可以检出 <code>experiment</code> 分支，然后将它变基到 <code>master</code> 分支上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout experiment
$ <span class="token function">git</span> rebase master <span class="token comment"># 将experiment上的修改变基到master分支上（将experiment的提交移动到master上。）</span>
First, rewinding <span class="token function">head</span> to replay your work on <span class="token function">top</span> of it<span class="token punctuation">..</span>.
Applying: added staged <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的原理是首先找到这两个分支（即当前分支 <code>experiment</code>、变基操作的目标基底分支 <code>master</code>） 的最近共同祖先 <code>C2</code>，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 <code>C3</code>, 最后以此将之前另存为临时文件的修改依序应用。 （译注：写明了 commit id，以便理解，下同）</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><ol><li><p><strong>找到当前分支和目标分支的最近共同祖先</strong></p></li><li><p><strong>对比当前分支相对于该共同祖先的历次提交</strong></p></li><li><p><strong>提取相应的修改并存为临时文件</strong></p></li><li><p><strong>将当前分支指向目标分支</strong></p></li><li><p><strong>将之前临时文件的修改依序应用</strong></p></li></ol><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-3.png" alt="将  中的修改变基到  上。" tabindex="0" loading="lazy"><figcaption>将 <code>C4</code> 中的修改变基到 <code>C3</code> 上。</figcaption></figure><p align="center">图2.将 C4 中的修改变基到 C3 上 ▲</p><p>现在回到 <code>master</code> 分支，进行一次快进合并。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merge experiment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/basic-rebase-4.png" alt=" 分支的快进合并。" tabindex="0" loading="lazy"><figcaption><code>master</code> 分支的快进合并。</figcaption></figure><p align="center">图3.master 分支的快进合并 ▲</p><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><p><strong>先检出源分支，将源分支的修改变基到目标分支。切回目标分支，进行一次快进合并</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示意：</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>源分支<span class="token operator">&gt;</span>
<span class="token function">git</span> <span class="token punctuation">(</span>源分支的修改<span class="token punctuation">)</span>rebase<span class="token punctuation">(</span>到<span class="token punctuation">)</span> <span class="token operator">&lt;</span>目标分支<span class="token operator">&gt;</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>目标分支<span class="token operator">&gt;</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>源分支<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),m=n("code",null,"C4'",-1),b={href:"https://git-scm.com/book/zh/v2/ch00/ebasing-merging-example",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"C5",-1),v=n("strong",null,"变基使得提交历史更加整洁",-1),f=o('<p>一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——<strong>例如向某个其他人维护的项目贡献代码时。 在这种情况下，你首先在自己的分支里进行开发，当开发完成时你需要先将你的代码变基到 <code>origin/master</code> 上，然后再向主项目提交修改</strong>。 这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。</p><p>请注意，无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><p><strong>变基的优点： 使提交记录更加整洁。</strong></p><h2 id="更有趣的变基例子" tabindex="-1"><a class="header-anchor" href="#更有趣的变基例子" aria-hidden="true">#</a> 更有趣的变基例子</h2>',5),k={href:"https://git-scm.com/book/zh/v2/ch00/bdiag_e",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"server",-1),C=n("code",null,"C3",-1),z=n("code",null,"C4",-1),y=n("code",null,"C3",-1),$=n("code",null,"client",-1),G=n("code",null,"C8",-1),w=n("code",null,"C9",-1),B=n("code",null,"server",-1),N=n("code",null,"C10",-1),V=n("h3",{id:"更有趣的变基例子-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#更有趣的变基例子-1","aria-hidden":"true"},"#"),e(" 更有趣的变基例子")],-1),A={href:"https://git-scm.com/book/zh/v2/ch00/bdiag_e",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"server",-1),I=n("code",null,"C3",-1),L=n("code",null,"C4",-1),S=n("code",null,"C3",-1),F=n("code",null,"client",-1),H=n("code",null,"C8",-1),T=n("code",null,"C9",-1),j=n("code",null,"server",-1),q=n("code",null,"C10",-1),D=o(`<figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-1.png" alt="从一个主题分支里再分出一个主题分支的提交历史。" tabindex="0" loading="lazy"><figcaption>从一个主题分支里再分出一个主题分支的提交历史。</figcaption></figure><p align="center">图4.从一个主题分支里再分出一个主题分支的提交历史 ▲</p><p>假设你希望将 <code>client</code> 中的修改合并到主分支并发布，但暂时并不想合并 <code>server</code> 中的修改， 因为它们还需要经过更全面的测试。这时，你就可以使用 <code>git rebase</code> 命令的 <strong><code>--onto</code> 选项， 选中在 <code>client</code> 分支里但不在 <code>server</code> 分支里的修改（即 <code>C8</code> 和 <code>C9</code>），将它们在 <code>master</code> 分支上重放</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">--onto</span> master server client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令的意思是：“取出 <code>client</code> 分支，找出它从 <code>server</code> 分支分歧之后的补丁， 然后把这些补丁在 <code>master</code> 分支上重放一遍，让 <code>client</code> 看起来像直接基于 <code>master</code> 修改一样”。这理解起来有一点复杂，不过效果非常酷。</p><h3 id="onto-选项" tabindex="-1"><a class="header-anchor" href="#onto-选项" aria-hidden="true">#</a> --onto 选项</h3><p><strong>选中 C 分支中的但不在 B 分支里的修改，应用到 A 分支。</strong></p><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-2.png" alt="截取主题分支上的另一个主题分支，然后变基到其他分支。" tabindex="0" loading="lazy"><figcaption>截取主题分支上的另一个主题分支，然后变基到其他分支。</figcaption></figure><p align="center">图5.截取主题分支上的另一个主题分支，然后变基到其他分支 ▲</p>`,9),J=n("code",null,"master",-1),K={href:"https://git-scm.com/book/zh/v2/ch00/bdiag_g",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"master",-1),O=n("code",null,"client",-1),P=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merge client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-3.png" alt="快进合并  分支，使之包含来自  分支的修改。" tabindex="0" loading="lazy"><figcaption>快进合并 <code>master</code> 分支，使之包含来自 <code>client</code> 分支的修改。</figcaption></figure><p align="center">图6.快进合并 \`master\` 分支，使之包含来自 \`client\` 分支的修改 ▲</p><h3 id="省去先切换到源分支的步骤" tabindex="-1"><a class="header-anchor" href="#省去先切换到源分支的步骤" aria-hidden="true">#</a> 省去先切换到源分支的步骤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token operator">&lt;</span>目标<span class="token punctuation">(</span>当前<span class="token punctuation">)</span>分支<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>源分支<span class="token operator">&gt;</span> <span class="token comment"># 将源分支变基到目标分支。执行此命令后会自动切换到源分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>目标分支<span class="token operator">&gt;</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>源分支<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：使用这个方法要确保源分支上的代码是最新的。</strong></p><p>接下来你决定将 <code>server</code> 分支中的修改也整合进来。 使用 <code>git rebase &lt;basebranch&gt; &lt;topicbranch&gt;</code> 命令可以直接将主题分支 （即本例中的 <code>server</code>）变基到目标分支（即 <code>master</code>）上。 这样做能省去你先切换到 <code>server</code> 分支，再对其执行变基命令的多个步骤。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase master server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),Q={href:"https://git-scm.com/book/zh/v2/ch00/bdiag_h",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"server",-1),U=n("code",null,"master",-1),W=n("code",null,"server",-1),X=n("code",null,"master",-1),Y=o('<figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-4.png" alt="将  中的修改变基到  上。" tabindex="0" loading="lazy"><figcaption>将 <code>server</code> 中的修改变基到 <code>master</code> 上。</figcaption></figure><p align="center">图7.将 `server` 中的修改变基到 `master` 上 ▲</p><p>然后就可以快进合并主分支 <code>master</code> 了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master\n$ <span class="token function">git</span> merge server\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',4),Z=n("code",null,"client",-1),ee=n("code",null,"server",-1),ne={href:"https://git-scm.com/book/zh/v2/ch00/bdiag_i",target:"_blank",rel:"noopener noreferrer"},se=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> client
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://git-scm.com/book/en/v2/images/interesting-rebase-5.png" alt="最终的提交历史。" tabindex="0" loading="lazy"><figcaption>最终的提交历史。</figcaption></figure><p align="center">图8. 最终的提交历史 ▲</p><h2 id="变基的风险" tabindex="-1"><a class="header-anchor" href="#变基的风险" aria-hidden="true">#</a> 变基的风险</h2><h3 id="金科玉律" tabindex="-1"><a class="header-anchor" href="#金科玉律" aria-hidden="true">#</a> 金科玉律</h3><p>呃，奇妙的变基也并非完美无缺，要用它得遵守一条准则：</p><p><strong>如果提交存在于你的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。</strong></p><p>如果你遵循这条金科玉律，就不会出差错。 否则，人民群众会仇恨你，你的朋友和家人也会嘲笑你，唾弃你。</p><p>::: tip</p><p><strong>例如：几个人同时在一个主题分支上进行开发和提交时，你不要中途执行变基，只有在大家都完成工作之后才可以执行变基。</strong></p><p>:::</p><h3 id="变基的实质" tabindex="-1"><a class="header-anchor" href="#变基的实质" aria-hidden="true">#</a> 变基的实质</h3><p><strong>变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。</strong> 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 <code>git rebase</code> 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。</p><p>让我们来看一个在公开的仓库上执行变基操作所带来的问题。 假设你从一个中央服务器克隆然后在它的基础上进行了一些开发。 你的提交历史如图所示：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-1.png" alt="克隆一个仓库，然后在它的基础上进行了一些开发。" tabindex="0" loading="lazy"><figcaption>克隆一个仓库，然后在它的基础上进行了一些开发。</figcaption></figure><p align="center">图9. 克隆一个仓库，然后在它的基础上进行了一些开发 ▲</p><p>然后，某人又向中央服务器提交了一些修改，其中还包括一次合并。 你抓取了这些在远程分支上的修改，并将其合并到你本地的开发分支，然后你的提交历史就会变成这样：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-2.png" alt="抓取别人的提交，合并到自己的开发分支。" tabindex="0" loading="lazy"><figcaption>抓取别人的提交，合并到自己的开发分支。</figcaption></figure><p align="center">图10. 抓取别人的提交，合并到自己的开发分支 ▲</p><p>接下来，这个人又决定把合并操作回滚，改用变基；继而又用 <code>git push --force</code> 命令覆盖了服务器上的提交历史。 之后你从服务器抓取更新，会发现多出来一些新的提交。</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-3.png" alt="有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交。" tabindex="0" loading="lazy"><figcaption>有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交。</figcaption></figure><p align="center">图11. 有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交 ▲</p><p>结果就是你们两人的处境都十分尴尬。 如果你执行 <code>git pull</code> 命令，你将合并来自两条提交历史的内容，生成一个新的合并提交，最终仓库会如图所示：</p><figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-4.png" alt="你将相同的内容又合并了一次，生成了一个新的提交。" tabindex="0" loading="lazy"><figcaption>你将相同的内容又合并了一次，生成了一个新的提交。</figcaption></figure><p align="center">图12. 你将相同的内容又合并了一次，生成了一个新的提交 ▲</p><p>此时如果你执行 <code>git log</code> 命令，你会发现有两个提交的作者、日期、日志居然是一样的，这会令人感到混乱。 此外，如果你将这一堆又推送到服务器上，你实际上是将那些已经被变基抛弃的提交又找了回来，这会令人感到更加混乱。 很明显对方并不想在提交历史中看到 <code>C4</code> 和 <code>C6</code>，因为之前就是他把这两个提交通过变基丢弃的。</p><h2 id="用变基解决变基" tabindex="-1"><a class="header-anchor" href="#用变基解决变基" aria-hidden="true">#</a> 用变基解决变基</h2><p>如果你 <strong>真的</strong> 遭遇了类似的处境，Git 还有一些高级魔法可以帮到你。 如果团队中的某人强制推送并覆盖了一些你所基于的提交，你需要做的就是检查你做了哪些修改，以及他们覆盖了哪些修改。</p><p>实际上，Git 除了对整个提交计算 SHA-1 校验和以外，也对本次提交所引入的修改计算了校验和——即 “patch-id”。</p><p>如果你拉取被覆盖过的更新并将你手头的工作基于此进行变基的话，一般情况下 Git 都能成功分辨出哪些是你的修改，并把它们应用到新分支上。</p>`,30),ae={href:"https://git-scm.com/book/zh/v2/ch00/_pre_merge_rebase_work",target:"_blank",rel:"noopener noreferrer"},oe=n("code",null,"git rebase teamone/master",-1),te=n("ul",null,[n("li",null,"检查哪些提交是我们的分支上独有的（C2，C3，C4，C6，C7）"),n("li",null,"检查其中哪些提交不是合并操作的结果（C2，C3，C4）"),n("li",null,"检查哪些提交在对方覆盖更新时并没有被纳入目标分支（只有 C2 和 C3，因为 C4 其实就是 C4'）"),n("li",null,[e("把查到的这些提交应用在 "),n("code",null,"teamone/master"),e(" 上面")])],-1),ie={href:"https://git-scm.com/book/zh/v2/ch00/_merge_rebase_work",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://git-scm.com/book/zh/v2/ch00/_rebase_rebase_work",target:"_blank",rel:"noopener noreferrer"},re=o('<figure><img src="https://git-scm.com/book/en/v2/images/perils-of-rebasing-5.png" alt="在一个被变基然后强制推送的分支上再次执行变基。" tabindex="0" loading="lazy"><figcaption>在一个被变基然后强制推送的分支上再次执行变基。</figcaption></figure><p align="center">图13. 在一个被变基然后强制推送的分支上再次执行变基 ▲</p><p>要想上述方案有效，还需要对方在变基时确保 <code>C4&#39;</code> 和 <code>C4</code> 是几乎一样的。 否则变基操作将无法识别，并新建另一个类似 <code>C4</code> 的补丁（而这个补丁很可能无法整洁的整合入历史，因为补丁中的修改已经存在于某个地方了）。</p><p>在本例中另一种简单的方法是使用 <code>git pull --rebase</code> 命令而不是直接 <code>git pull</code>。 又或者你可以自己手动完成这个过程，先 <code>git fetch</code>，再 <code>git rebase teamone/master</code>。</p><p>如果你习惯使用 <code>git pull</code> ，同时又希望默认使用选项 <code>--rebase</code>，你可以执行这条语句 <code>git config --global pull.rebase true</code> 来更改 <code>pull.rebase</code> 的默认配置。</p><p>如果你只对不会离开你电脑的提交执行变基，那就不会有事。 如果你对已经推送过的提交执行变基，但别人没有基于它的提交，那么也不会有事。 如果你对已经推送至共用仓库的提交上执行变基命令，并因此丢失了一些别人的开发所基于的提交， 那你就有大麻烦了，你的同事也会因此鄙视你。</p><p>如果你或你的同事在某些情形下决意要这么做，请一定要通知每个人执行 <code>git pull --rebase</code> 命令，这样尽管不能避免伤痛，但能有所缓解。</p><h2 id="变基-vs-合并" tabindex="-1"><a class="header-anchor" href="#变基-vs-合并" aria-hidden="true">#</a> 变基 vs. 合并</h2><p>至此，你已在实战中学习了变基和合并的用法，你一定会想问，到底哪种方式更好。 在回答这个问题之前，让我们退后一步，想讨论一下提交历史到底意味着什么。</p><p>有一种观点认为，仓库的提交历史即是 <strong>记录实际发生过什么</strong>。 它是针对历史的文档，本身就有价值，不能乱改。 从这个角度看来，改变提交历史是一种亵渎，你使用 <em>谎言</em> 掩盖了实际发生过的事情。 如果由合并产生的提交历史是一团糟怎么办？ 既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅。</p><p>另一种观点则正好相反，他们认为提交历史是 <strong>项目过程中发生的事</strong>。 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用。 持这一观点的人会使用 <code>rebase</code> 及 <code>filter-branch</code> 等工具来编写故事，怎么方便后来的读者就怎么写。</p><p>现在，让我们回到之前的问题上来，到底合并还是变基好？希望你能明白，这并没有一个简单的答案。 Git 是一个非常强大的工具，它允许你对提交历史做许多事情，但每个团队、每个项目对此的需求并不相同。 既然你已经分别学习了两者的用法，相信你能够根据实际情况作出明智的选择。</p><p><strong>总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作，这样，你才能享受到两种方式带来的便利。</strong></p>',13);function de(le,pe){const s=i("ExternalLinkIcon");return c(),r("div",null,[l,p,g,n("p",null,[e("请回顾之前在 "),n("a",h,[e("分支的合并"),a(s)]),e(" 中的一个例子，你会看到开发任务分叉到两个不同分支，又各自提交了更新。")]),u,n("p",null,[e("此时，"),m,e(" 指向的快照就和 "),n("a",b,[e("the merge example"),a(s)]),e(" 中 "),_,e(" 指向的快照一模一样了。 这两种整合方法的最终结果没有任何区别，但是 "),v,e("。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的， 但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。")]),f,n("p",null,[e("在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 "),n("a",k,[e("从一个主题分支里再分出一个主题分支的提交历史"),a(s)]),e(" 中的例子那样。 你创建了一个主题分支 "),x,e("，为服务端添加了一些功能，提交了 "),C,e(" 和 "),z,e("。 然后从 "),y,e(" 上创建了主题分支 "),$,e("，为客户端添加了一些功能，提交了 "),G,e(" 和 "),w,e("。 最后，你回到 "),B,e(" 分支，又提交了 "),N,e("。")]),V,n("p",null,[e("在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 就像 "),n("a",A,[e("从一个主题分支里再分出一个主题分支的提交历史"),a(s)]),e(" 中的例子那样。 你创建了一个主题分支 "),E,e("，为服务端添加了一些功能，提交了 "),I,e(" 和 "),L,e("。 然后从 "),S,e(" 上创建了主题分支 "),F,e("，为客户端添加了一些功能，提交了 "),H,e(" 和 "),T,e("。 最后，你回到 "),j,e(" 分支，又提交了 "),q,e("。")]),D,n("p",null,[e("现在可以快进合并 "),J,e(" 分支了。（如图 "),n("a",K,[e("快进合并 "),M,e(" 分支，使之包含来自 "),O,e(" 分支的修改"),a(s)]),e("）：")]),P,n("p",null,[e("如图 "),n("a",Q,[e("将 "),R,e(" 中的修改变基到 "),U,e(" 上"),a(s)]),e(" 所示，"),W,e(" 中的代码被“续”到了 "),X,e(" 后面。")]),Y,n("p",null,[e("至此，"),Z,e(" 和 "),ee,e(" 分支中的修改都已经整合到主分支里了， 你可以删除这两个分支，最终提交历史会变成图 "),n("a",ne,[e("最终的提交历史"),a(s)]),e(" 中的样子：")]),se,n("p",null,[e("举个例子，如果遇到前面提到的 "),n("a",ae,[e("有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交"),a(s)]),e(" 那种情境，如果我们不是执行合并，而是执行 "),oe,e(", Git 将会：")]),te,n("p",null,[e("从而我们将得到与 "),n("a",ie,[e("你将相同的内容又合并了一次，生成了一个新的提交"),a(s)]),e(" 中不同的结果，如图 "),n("a",ce,[e("在一个被变基然后强制推送的分支上再次执行变基"),a(s)]),e(" 所示。")]),re])}const ue=t(d,[["render",de],["__file","7.Git分支-变基.html.vue"]]);export{ue as default};
