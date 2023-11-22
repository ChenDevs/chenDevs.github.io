import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as p}from"./app-974c1ce0.js";const i={},s=p(`<p>无论你是想要设计高性能 Web 应用，还是要优化现有的 Web 应用，你都需要了解浏览器中的网络流程、⻚面渲染过程，JavaScript 执行流程，以及 Web 安全理论，而这些功能是分散在浏览器的各个功能组件中的，比较多、比较散，要怎样学习才能掌握呢?通过浏览器的多进程架构的学习，你就可以把这些分散的知识点串 起来，组成一张网，从而让自己能站在更高的维度去理解 Web 应用。</p><p>因此，学习浏览器的多进程架构是很有必要的。需要说明的是，<strong>在本专栏中，我所有的分析都是基于 Chrome 浏览器的</strong>。那么多浏览器，为什么偏偏选择 Chrome 浏览器呢?因为 Chrome、微软的 Edge 以及国内的大部分主流浏览器，都是基于 Chromium 二次开发而来;而 Chrome 是 Google 的官方发行版，特性和 Chromium 基本一样，只存在一些产品层面差异;再加上 Chrome 是目前世界上使用率最高的浏览器，所以 <strong>Chrome 最具代表性</strong></p><p>在开始之前，我们一起看下，Chrome 打开一个⻚面需要启动多少进程?你可以点击 Chrome 浏览器右上⻆ 的“选项”菜单，选择“更多工具”子菜单，点击“任务管理器”，这将打开 Chrome 的任务管理器的窗 口，如下图:</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/Chrome的任务管理器窗口.png" alt="Chrome的任务管理器窗口" tabindex="0"><figcaption>Chrome的任务管理器窗口</figcaption></figure><p>和 Windows 任务管理器一样，Chrome 任务管理器也是用来展示运行中 Chrome 使用的进程信息的。从图中 可以看到，Chrome 启动了 4 个进程，你也许会好奇，只是打开了 1 个⻚面，为什么要启动这么多进程呢?</p><p><span style="color:red;">批注:目前，任务管理器需要通过 窗口选项卡 打开 而且现在不止 4 个进程！原因暂时不详</span></p><p>在解答这个问题之前，我们需要了解一下进程的概念，不过由于好多人容易把进程和线程的概念混淆，从而影响后续其他概念的理解，所以这里我就将这两个概念以及它们之间的关系一并为你讲解下。</p><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><p>不过，在介绍进程和线程之前，我需要先讲解下什么是并行处理，因为如果你理解了并行处理的概念，那么 再理解进程和线程之间的关系就会变得轻松许多。</p><h3 id="什么是并行处理" tabindex="-1"><a class="header-anchor" href="#什么是并行处理" aria-hidden="true">#</a> 什么是并行处理</h3><p>计算机中的并行处理就是同一时刻处理多个任务，比如我们要计算下面这三个表达式的值，并显示出结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A=1+2
B=20/5
C=7*8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在编写代码的时候，我们可以把这个过程拆分为四个任务:</p><ul><li>任务 1 是计算 A=1+2;</li><li>任务 2 是计算 B=20/5;</li><li>任务 3 是计算 C=7*8;</li><li>任务 4 是显示最后计算的结果</li></ul><p>正常情况下程序可以使用单线程来处理，也就是分四步按照顺序分别执行这四个任务。</p><p>如果采用多线程，会怎么样呢?我们只需分“两步走”:第一步，使用三个线程同时执行前三个任务;第二步，再执行第四个显示任务。</p><p>通过对比分析，你会发现用单线程执行需要四步，而使用多线程只需要两步。因此，使用并行处理能大大提升性能。</p><h3 id="线程-vs-进程" tabindex="-1"><a class="header-anchor" href="#线程-vs-进程" aria-hidden="true">#</a> 线程 VS 进程</h3><p>多线程可以并行处理任务，但是**线程是不能单独存在的，它是由进程来启动和管理的。**那什么又是进程呢?</p><p>**一个进程就是一个程序的运行实例。**详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。</p><p>为了让你更好地理解上述计算过程，我画了下面这张对比图:</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/单线程与多线程的进程对比图.png" alt="单线程与多线程的进程对比图" tabindex="0"><figcaption>单线程与多线程的进程对比图</figcaption></figure><p>从图中可以看到，<strong>线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率</strong>。</p><p>总结来说，进程和线程之间的关系有以下 4 个特点:</p><p><strong>1. 进程中的任意一线程执行出错，都会导致整个进程的崩溃</strong></p><p>我们可以模拟以下场景:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A=1+2
B=20/0
C=7*8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我把上述三个表达式稍作修改，在计算 B 的值的时候，我把表达式的分母改成 0，当线程执行到 B = 20/0 时， 由于分母为 0，线程会执行出错，这样就会导致整个进程的崩溃，当然另外两个线程执行的结果也没有了。</p><p><strong>2. 线程之间共享进程中的数据</strong></p><p>如下图所示，线程之间可以对进程的公共数据进行读写操作。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/线程之间共享进程中的数据示意图.png" alt="线程之间共享进程中的数据示意图" tabindex="0"><figcaption>线程之间共享进程中的数据示意图</figcaption></figure><p>从上图可以看出，线程 1、线程 2、线程 3 分别把执行的结果写入 A、B、C 中，然后线程 2 继续从 A、B、C 中读取数据，用来显示执行结果。</p><p><strong>3. 当一个进程关闭之后，操作系统会回收进程所占用的内存</strong></p><p>当一个进程退出时，操作系统会回收该进程所申请的所有资源;即使其中任意线程因为操作不当导致内存泄漏，当进程退出时，这些内存也会被正确回收。</p><p>比如之前的 IE 浏览器，支持很多插件，而这些插件很容易导致内存泄漏，这意味着只要浏览器开着，内存占用就有可能会越来越多，但是当关闭浏览器进程时，这些内存就都会被系统回收掉。</p><p><strong>4. 进程之间的内容相互隔离</strong></p><p>进程隔离是为保护操作系统中进程互不干扰的技术，每一个进程只能访问自己占有的数据，也就避免出现进 程 A 写入数据到进程 B 的情况。正是因为进程之间的数据是严格隔离的，所以一个进程如果崩溃了，或者挂起了，是不会影响到其他进程的。如果进程之间需要进行数据的通信，这时候，就需要使用用于进程间通信 (IPC)的机制了。</p><h2 id="单进程浏览器时代" tabindex="-1"><a class="header-anchor" href="#单进程浏览器时代" aria-hidden="true">#</a> 单进程浏览器时代</h2><p>在了解了进程和线程之后，我们再来一起看下单进程浏览器的架构。顾名思义，<strong>单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里</strong>，这些模块包含了网络、插件、JavaScript 运行环境、渲染引擎和⻚面等。其实早在 2007 年之前，市面上浏览器都是单进程的。单进程浏览器的架构如下图所示:</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/单进程浏览器架构示意图.png" alt="单进程浏览器架构示意图" tabindex="0"><figcaption>单进程浏览器架构示意图</figcaption></figure><p>如此多的功能模块运行在一个进程里，是导致单进程浏览器不稳定、不流畅和不安全的一个主要因素。下面 我就来一一分析下出现这些问题的原因。</p><h3 id="问题-1-不稳定" tabindex="-1"><a class="header-anchor" href="#问题-1-不稳定" aria-hidden="true">#</a> 问题 1:不稳定</h3><p>早期浏览器需要借助于插件来实现诸如 Web 视频、Web 游戏等各种强大的功能，但是插件是最容易出问题的模块，并且还运行在浏览器进程之中，所以一个插件的意外崩溃会引起整个浏览器的崩溃。</p><p>除了插件之外，渲染引擎模块也是不稳定的，通常一些复杂的 JavaScript 代码就有可能引起渲染引擎模块的崩溃。和插件一样，渲染引擎的崩溃也会导致整个浏览器的崩溃。</p><h3 id="问题-2-不流畅" tabindex="-1"><a class="header-anchor" href="#问题-2-不流畅" aria-hidden="true">#</a> 问题 2:不流畅</h3><p>从上面的“单进程浏览器架构示意图”可以看出，所有⻚面的渲染模块、JavaScript 执行环境以及插件都是 运行在同一个线程中的，这就意味着同一时刻只能有一个模块可以执行。</p><p>比如，下面这个无限循环的脚本：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;freeze&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果让这个脚本运行在一个单进程浏览器的⻚面里，你感觉会发生什么?</p><p>因为这个脚本是无限循环的，所以当其执行时，它会独占整个线程，这样导致其他运行在该线程中的模块就 没有机会被执行。因为浏览器中所有的⻚面都运行在该线程中，所以这些⻚面都没有机会去执行任务，这样 就会导致整个浏览器失去响应，变卡顿。这块内容要继续往深的地方讲就到⻚面的事件循环系统了，具体相关内容我会在后面的模块中为你深入讲解。</p><p>除了上述脚本或者插件会让单进程浏览器变卡顿外，<strong>⻚面的内存泄漏也是单进程变慢的一个重要原因</strong>。通常 浏览器的内核都是非常复杂的，运行一个复杂点的⻚面再关闭⻚面，会存在内存不能完全回收的情况，这样 导致的问题是使用时间越⻓，内存占用越高，浏览器会变得越慢。</p><h3 id="问题-3-不安全" tabindex="-1"><a class="header-anchor" href="#问题-3-不安全" aria-hidden="true">#</a> 问题 3:不安全</h3><p>这里依然可以从插件和⻚面脚本两个方面来解释该原因。</p><p>插件可以使用 C/C++等代码编写，通过插件可以获取到操作系统的任意资源，当你在⻚面运行一个插件时也 就意味着这个插件能完全操作你的电脑。如果是个恶意插件，那么它就可以释放病毒、窃取你的账号密码， 引发安全性问题。</p><p>至于⻚面脚本，它可以通过浏览器的漏洞来获取系统权限，这些脚本获取系统权限之后也可以对你的电脑做 一些恶意的事情，同样也会引发安全问题</p><p>以上这些就是当时浏览器的特点，不稳定，不流畅，而且不安全。这是一段不堪回首的过去，也许你没有经 历过，不过你可以想象一下这样的场景:当你正在用浏览器打开多个⻚面时，突然某个⻚面崩溃了或者失去 响应，随之而来的是整个浏览器的崩溃或者无响应，然后你发现你给老板写的邮件⻚面也随之消失了，这时 你的心情会不会和⻚面一样崩溃呢?</p><h2 id="多进程浏览器时代" tabindex="-1"><a class="header-anchor" href="#多进程浏览器时代" aria-hidden="true">#</a> 多进程浏览器时代</h2><p>好在现代浏览器已经解决了这些问题，是如何解决的呢?这就得聊聊我们这个“多进程浏览器时代”了</p><h3 id="早期多进程架构" tabindex="-1"><a class="header-anchor" href="#早期多进程架构" aria-hidden="true">#</a> 早期多进程架构</h3><p>你可以先看看下面这张图，这是 2008 年 Chrome 发布时的进程架构。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/早期Chrome进程架构图.png" alt="早期Chrome进程架构图" tabindex="0"><figcaption>早期Chrome进程架构图</figcaption></figure><p>从图中可以看出，Chrome 的⻚面是运行在单独的渲染进程中的，同时⻚面里的插件也是运行在单独的插件 进程之中，而进程之间是通过 IPC 机制进行通信(如图中虚线部分)</p><p><strong>我们先看看如何解决不稳定的问题</strong>。由于进程是相互隔离的，所以当一个⻚面或者插件崩溃时，影响到的仅 仅是当前的⻚面进程或者插件进程，并不会影响到浏览器和其他⻚面，这就完美地解决了⻚面或者插件的崩 溃会导致整个浏览器崩溃，也就是不稳定的问题。</p><p><strong>接下来再来看看不流畅的问题是如何解决的</strong>。同样，JavaScript 也是运行在渲染进程中的，所以即使 JavaScript 阻塞了渲染进程，影响到的也只是当前的渲染⻚面，而并不会影响浏览器和其他⻚面，因为其他 ⻚面的脚本是运行在它们自己的渲染进程中的。所以当我们再在 Chrome 中运行上面那个死循环的脚本时， 没有响应的仅仅是当前的⻚面。</p><p>对于内存泄漏的解决方法那就更简单了，因为当关闭一个⻚面时，整个渲染进程也会被关闭，之后该进程所 占用的内存都会被系统回收，这样就轻松解决了浏览器⻚面的内存泄漏问题。</p><p><strong>最后我们再来看看上面的两个安全问题是怎么解决的</strong>。采用多进程架构的额外好处是可以使用安全沙箱，你 可以把沙箱看成是操作系统给进程上了一把锁，沙箱里面的程序可以运行，但是不能在你的硬盘上写入任何 数据，也不能在敏感位置读取任何数据，例如你的文档和桌面。Chrome 把插件进程和渲染进程锁在沙箱里 面，这样即使在渲染进程或者插件进程里面执行了恶意程序，恶意程序也无法突破沙箱去获取系统权限。</p><p>好了，分析完早期的 Chrome 浏览器后，相信你已经了解了浏览器采用多进程架构的必要性</p><h3 id="目前多进程架构" tabindex="-1"><a class="header-anchor" href="#目前多进程架构" aria-hidden="true">#</a> 目前多进程架构</h3><p>不过 Chrome 的发展是滚滚向前的，相较之前，目前的架构又有了很多新的变化。我们先看看最新的 Chrome 进程架构，你可以参考下图:</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/最新的Chrome进程架构图.png" alt="最新的Chrome进程架构图" tabindex="0"><figcaption>最新的Chrome进程架构图</figcaption></figure><p>从图中可以看出，最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个⽹络</p><p>（NetWork）进程、多个渲染进程和多个插件进程。</p><p>下⾯我们来逐个分析下这⼏个进程的功能。</p><ul><li><p><strong>浏器器进程</strong>。主要负责界⾯显⽰、⽤⼾交互、⼦进程管理，同时提供存储等功能。</p></li><li><p><strong>渲染进程</strong>。核⼼任务是将 HTML、CSS 和 JavaScript 转换为⽤⼾可以与之交互的⽹⻚，排版引擎 Blink 和</p></li></ul><p>JavaScript 引擎 V8 都是运⾏在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建⼀个渲染进程。出</p><p>于安全考虑，渲染进程都是运⾏在沙箱模式下。</p><ul><li><strong>GPU 进程</strong>。其实，Chrome 刚开始发布的时候是没有 GPU 进程的。⽽ GPU 的使⽤初衷是为了实现 3D CSS 的</li></ul><p>效果，只是随后⽹⻚、Chrome 的 UI 界⾯都选择采⽤ GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最</p><p>后，Chrome 在其多进程架构上也引⼊了 GPU 进程。</p><ul><li><strong>⽹络进程</strong>。主要负责⻚⾯的⽹络资源加载，之前是作为⼀个模块运⾏在浏览器进程⾥⾯的，直⾄最近才独</li></ul><p>⽴出来，成为⼀个单独的进程。</p><ul><li><strong>插件进程</strong>。主要是负责插件的运⾏，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃</li></ul><p>不会对浏览器和⻚⾯造成影响。</p><p>讲到这⾥，现在你应该就可以回答⽂章开头提到的问题了：仅仅打开了 1 个⻚⾯，为什么有 4 个进程？因为打</p><p>开 1 个⻚⾯⾄少需要 1 个⽹络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个；如果打开的⻚</p><p>⾯有运⾏插件的话，还需要再加上 1 个插件进程。</p><p>不过凡事都有两⾯性，虽然多进程模型提升了浏览器的稳定性、流畅性和安全性，但同样不可避免地带来了</p><p>⼀些问题：</p><p><strong>更⾼的的资源占⽤</strong>。因为每个进程都会包含公共基础结构的副本（如 JavaScript 运⾏环境），这就意味着浏</p><p>览器会消耗更多的内存资源。</p><p><strong>更复杂的体系架构</strong>。浏览器各模块之间耦合性⾼、扩展性差等问题，会导致现在的架构已经很难适应新的</p><p>需求了。</p><p>对于上⾯这两个问题，Chrome 团队⼀直在寻求⼀种弹性⽅案，既可以解决资源占⽤⾼的问题，也可以解决</p><p>复杂的体系架构的问题。</p><h3 id="未来面向服务的架构" tabindex="-1"><a class="header-anchor" href="#未来面向服务的架构" aria-hidden="true">#</a> 未来⾯向服务的架构</h3><p>为了解决这些问题，在 2016 年，Chrome 官⽅团队使⽤“<strong>未来⾯向服务的架构</strong> ”（Services Oriented</p><p>Architecture，简称 SSOOAA）的思想设计了新的 Chrome 架构。也就是说 Chrome 整体架构会朝向现代操作系</p><p>统所采⽤的“⾯向服务的架构” ⽅向发展，原来的各种模块会被重构成独⽴的服务（Service），每个服务</p><p>（Service）都可以在独⽴的进程中运⾏，访问服务（Service）必须使⽤定义好的接⼝，通过 IPC 来通信，</p><p>从⽽<strong>构建⼀个更内聚、松耦合、易于维护和扩展的系统</strong>，更好实现 Chrome 简单、稳定、⾼速、安全的⽬</p><p>标。如果你对⾯向服务的架构感兴趣，你可以去⽹上搜索下资料，这⾥就不过多介绍了。</p><p>Chrome 最终要把 UI、数据库、⽂件、设备、⽹络等模块重构为基础服务，类似操作系统底层服务，下⾯是</p><p>Chrome“⾯向服务的架构”的进程模型图：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/Chrome“⾯向服务的架构”进程模型图.png" alt="Chrome“⾯向服务的架构”进程模型图" tabindex="0"><figcaption>Chrome“⾯向服务的架构”进程模型图</figcaption></figure><p>⽬前 Chrome 正处在⽼的架构向服务化架构过渡阶段，这将是⼀个漫⻓的迭代过程。</p><p>Chrome 正在逐步构建 Chrome 基础服务（Chrome Foundation Service），如果你认为 Chrome 是“便携式</p><p>操作系统”，那么 Chrome 基础服务便可以被视为该操作系统的“基础”系统服务层。</p><p>同时 Chrome 还提供灵活的弹性架构，在强⼤性能设备上会以多进程的⽅式运⾏基础服务，但是如果在资源</p><p>受限的设备上（如下图），Chrome 会将很多服务整合到⼀个进程中，从⽽节省内存占⽤。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/在资源不⾜的设备上，将服务合并到浏览器进程中.png" alt="在资源不⾜的设备上，将服务合并到浏览器进程中" tabindex="0"><figcaption>在资源不⾜的设备上，将服务合并到浏览器进程中</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>好了，今天就到这⾥，下⾯我来简要梳理并总结今天的内容。本⽂我主要是从 Chrome 进程架构的视⻆，分析了浏览器的进化史。</p><p>最初的浏览器都是单进程的，它们不稳定、不流畅且不安全，之后出现了 Chrome，创造性地引⼊了多进程</p><p>架构，并解决了这些遗留问题。随后 Chrome 试图应⽤到更多业务场景，如移动设备、VR、视频等，为了⽀</p><p>持这些场景，Chrome 的架构体系变得越来越复杂，这种架构的复杂性倒逼 Chrome 开发团队必须进⾏架构</p><p>的重构，最终 Chrome 团队选择了⾯向服务架构（SOA）形式，这也是 Chrome 团队现阶段的⼀个主要任</p><p>务。</p><p>鉴于⽬前架构的复杂性，要完整过渡到⾯向服务架构，估计还需要好⼏年时间才能完成。不过 Chrome 开发</p><p>是⼀个渐进的过程，新的特性会⼀点点加⼊进来，这也意味着我们随时能看到 Chrome 新的变化。</p><p>总体说来，<strong>Chrome 是以一个非常快速的速度在进化，越来越多的业务和应用都逐渐转至浏览器来开发，身</strong><strong>为开发人员，我们不能坐视不管，而应该紧跟其步伐，收获这波技术红利。</strong></p>`,120),r=[s];function o(t,c){return e(),a("div",null,r)}const g=n(i,[["render",o],["__file","01.html.vue"]]);export{g as default};
