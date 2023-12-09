import{_ as d,r as l,o as t,c as a,b as e,d as o,a as c,e as r}from"./app-bUbahKpY.js";const n={},h=r('<h2 id="开篇" tabindex="-1"><a class="header-anchor" href="#开篇" aria-hidden="true">#</a> 开篇</h2><p>前端开发是一个非常特殊的行业，它的历史实际上不是很长，但是知识之繁杂，技术迭代速度之快是其他技术所不能比拟的。</p><p><code>winter</code>在他的《重学前端》课程中提到：</p><blockquote><p>到现在为止，前端工程师已经成为研发体系中的重要岗位之一。可是，与此相对的是，我发现极少或者几乎没有大学的计算机专业愿意开设前端课程，更没有系统性的教学方案出现。大部分前端工程师的知识，其实都是来自于实践和工作中零散的学习。</p></blockquote><p>这样是一个非常真实的现状，实际上很多前端开发者都是自学甚至转行过来的，前端入门简单，学习了几个<code>API</code>以后上手做项目也很简单，但是这往往成为了限制自身发展的瓶颈。</p><p>只是停留在会用阶段是远远不够的，我们还需要不断探索和深入。现在市面上并不缺少学习教程，技术文章，如果盲目的学习你会发现看过以后的知识留存率会很低，而且发现没有了解到的知识越来越多，这会让人产生焦虑。</p><p>实际上，除了坚持学习的强大的自驱力，你还需要一个很简单的学习方法。那就是：建立自己的知识体系。它能帮助你更系统性的学习，同时你也时刻能知道自己哪些地方是不足的。</p><p>我会把我工作和学习中接触到的知识全部归纳到我的知识体系中，其中不仅仅包括我已经学过的，还有很多我没有来得及学习的。</p><p>这不仅仅是我的知识体系，更是我时刻提醒自己的自检清单。</p><p>下面我会把我的自检清单分享给大家，你可以按照清单上的知识检测自己还有哪些不足和提升，我也建议大家建自己的知识体系，这样工作或者学习甚至面试时，你能快速定位到知识清单中的点，如果你有哪些我没归纳到的点，欢迎在评论区告诉我。</p><figure><img src="https://user-gold-cdn.xitu.io/2019/4/26/16a55401a0516a6d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、javascript-基础" tabindex="-1"><a class="header-anchor" href="#一、javascript-基础" aria-hidden="true">#</a> 一、JavaScript 基础</h2><blockquote><p>前端工程师吃饭的家伙，深度、广度一样都不能差。</p></blockquote><h3 id="变量和类型" tabindex="-1"><a class="header-anchor" href="#变量和类型" aria-hidden="true">#</a> 变量和类型</h3><ul><li>1.<code>JavaScript</code>规定了几种语言类型</li><li>2.<code>JavaScript</code>对象的底层数据结构是什么</li><li>3.<code>Symbol</code>类型在实际开发中的应用、可手动实现一个简单的<code>Symbol</code></li><li>4.<code>JavaScript</code>中的变量在内存中的具体存储形式</li><li>5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作</li><li>6.理解值类型和引用类型</li><li>7.<code>null</code>和<code>undefined</code>的区别</li><li>8.至少可以说出三种判断<code>JavaScript</code>数据类型的方式，以及他们的优缺点，如何准确的判断数组类型</li><li>9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用</li><li>10.出现小数精度丢失的原因，<code>JavaScript</code>可以存储的最大数字、最大安全数字，<code>JavaScript</code>处理大数字的方法、避免精度丢失的方法</li></ul><h3 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h3><ul><li>1.理解原型设计模式以及<code>JavaScript</code>中的原型规则</li><li>2.<code>instanceof</code>的底层实现原理，手动实现一个<code>instanceof</code></li><li>4.实现继承的几种方式以及他们的优缺点</li><li>5.至少说出一种开源项目(如<code>Node</code>)中应用原型继承的案例</li><li>6.可以描述<code>new</code>一个对象的详细过程，手动实现一个<code>new</code>操作符</li><li>7.理解<code>es6 class</code>构造以及继承的底层实现原理</li></ul><h3 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h3><ul><li>1.理解词法作用域和动态作用域</li><li>2.理解<code>JavaScript</code>的作用域和作用域链</li><li>3.理解<code>JavaScript</code>的执行上下文栈，可以应用堆栈信息快速定位问题</li><li>4.<code>this</code>的原理以及几种不同使用场景的取值</li><li>5.闭包的实现原理和作用，可以列举几个开发中闭包的实际应用</li><li>6.理解堆栈溢出和内存泄漏的原理，如何防止</li><li>7.如何处理循环的异步操作</li><li>8.理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理</li></ul><h3 id="执行机制" tabindex="-1"><a class="header-anchor" href="#执行机制" aria-hidden="true">#</a> 执行机制</h3><ul><li>1.为何<code>try</code>里面放<code>return</code>，<code>finally</code>还会执行，理解其内部机制</li><li>2.<code>JavaScript</code>如何实现异步编程，可以详细描述<code>EventLoop</code>机制</li><li>3.宏任务和微任务分别有哪些</li><li>4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法</li><li>5.使用<code>Promise</code>实现串行</li><li>6.<code>Node</code>与浏览器<code>EventLoop</code>的差异</li><li>7.如何在保证页面运行流畅的情况下处理海量数据</li></ul><h3 id="语法和-api" tabindex="-1"><a class="header-anchor" href="#语法和-api" aria-hidden="true">#</a> 语法和 API</h3><ul><li>1.理解<code>ECMAScript</code>和<code>JavaScript</code>的关系</li><li>2.熟练运用<code>es5</code>、<code>es6</code>提供的语法规范，</li><li>3.熟练掌握<code>JavaScript</code>提供的全局对象（例如<code>Date</code>、<code>Math</code>）、全局函数（例如<code>decodeURI</code>、<code>isNaN</code>）、全局属性（例如<code>Infinity</code>、<code>undefined</code>）</li><li>4.熟练应用<code>map</code>、<code>reduce</code>、<code>filter</code> 等高阶函数解决问题</li><li>5.<code>setInterval</code>需要注意的点，使用<code>settimeout</code>实现<code>setInterval</code></li><li>6.<code>JavaScript</code>提供的正则表达式<code>API</code>、可以使用正则表达式（邮箱校验、<code>URL</code>解析、去重等）解决常见问题</li><li>7.<code>JavaScript</code>异常处理的方式，统一的异常处理方案</li></ul><h2 id="二、html-和-css" tabindex="-1"><a class="header-anchor" href="#二、html-和-css" aria-hidden="true">#</a> 二、HTML 和 CSS</h2><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3><ul><li>1.从规范的角度理解<code>HTML</code>，从分类和语义的角度使用标签</li><li>2.常用页面标签的默认样式、自带属性、不同浏览器的差异、处理浏览器兼容问题的方式</li><li>3.元信息类标签(<code>head</code>、<code>title</code>、<code>meta</code>)的使用目的和配置方法</li><li>4.<code>HTML5</code>离线缓存原理</li><li>5.可以使用<code>Canvas API</code>、<code>SVG</code>等绘制高性能的动画</li></ul><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h3><ul><li>1.<code>CSS</code>盒模型，在不同浏览器的差异</li><li>2.<code>CSS</code>所有选择器及其优先级、使用场景，哪些可以继承，如何运用<code>at</code>规则</li><li>3.<code>CSS</code>伪类和伪元素有哪些，它们的区别和实际应用</li><li>4.<code>HTML</code>文档流的排版规则，<code>CSS</code>几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理</li><li>5.水平垂直居中的方案、可以实现<code>6</code>种以上并对比它们的优缺点</li><li>6.<code>BFC</code>实现原理，可以解决的问题，如何创建<code>BFC</code></li><li>7.可使用<code>CSS</code>函数复用代码，实现特殊效果</li><li>8.<code>PostCSS</code>、<code>Sass</code>、<code>Less</code>的异同，以及使用配置，至少掌握一种</li><li>9.<code>CSS</code>模块化方案、如何配置按需加载、如何防止<code>CSS</code>阻塞渲染</li><li>10.熟练使用<code>CSS</code>实现常见动画，如渐变、移动、旋转、缩放等等</li><li>11.<code>CSS</code>浏览器兼容性写法，了解不同<code>API</code>在不同浏览器下的兼容性情况</li><li>12.掌握一套完整的响应式布局方案</li></ul><h3 id="手写" tabindex="-1"><a class="header-anchor" href="#手写" aria-hidden="true">#</a> 手写</h3><ul><li>1.手写图片瀑布流效果</li><li>2.使用<code>CSS</code>绘制几何图形（圆形、三角形、扇形、菱形等）</li><li>3.使用纯<code>CSS</code>实现曲线运动（贝塞尔曲线）</li><li>4.实现常用布局（三栏、圣杯、双飞翼、吸顶），可是说出多种方式并理解其优缺点</li></ul><h2 id="三、计算机基础" tabindex="-1"><a class="header-anchor" href="#三、计算机基础" aria-hidden="true">#</a> 三、计算机基础</h2><blockquote><p>关于编译原理，不需要理解非常深入，但是最基本的原理和概念一定要懂，这对于学习一门编程语言非常重要</p></blockquote><h3 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理" aria-hidden="true">#</a> 编译原理</h3><ul><li>1.理解代码到底是什么，计算机如何将代码转换为可以运行的目标程序</li><li>2.正则表达式的匹配原理和性能优化</li><li>3.如何将<code>JavaScript</code>代码解析成抽象语法树(<code>AST</code>)</li><li>4.<code>base64</code>的编码原理</li><li>5.几种进制的相互转换计算方法，在<code>JavaScript</code>中如何表示和转换</li></ul><h3 id="网络协议" tabindex="-1"><a class="header-anchor" href="#网络协议" aria-hidden="true">#</a> 网络协议</h3><ul><li>1.理解什么是协议，了解<code>TCP/IP</code>网络协议族的构成，每层协议在应用程序中发挥的作用</li><li>2.三次握手和四次挥手详细原理，为什么要使用这种机制</li><li>3.有哪些协议是可靠，<code>TCP</code>有哪些手段保证可靠交付</li><li>4.<code>DNS</code>的作用、<code>DNS</code>解析的详细过程，<code>DNS</code>优化原理</li><li>5.<code>CDN</code>的作用和原理</li><li>6.<code>HTTP</code>请求报文和响应报文的具体组成，能理解常见请求头的含义，有几种请求方式，区别是什么</li><li>7.<code>HTTP</code>所有状态码的具体含义，看到异常状态码能快速定位问题</li><li>8.<code>HTTP1.1</code>、<code>HTTP2.0</code>带来的改变</li><li>9.<code>HTTPS</code>的加密原理，如何开启<code>HTTPS</code>，如何劫持<code>HTTPS</code>请求</li><li>10.理解<code>WebSocket</code>协议的底层原理、与<code>HTTP</code>的区别</li></ul><h3 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h3><ul><li>1.熟练使用前端常用的设计模式编写代码，如单例模式、装饰器模式、代理模式等</li><li>2.发布订阅模式和观察者模式的异同以及实际应用</li><li>3.可以说出几种设计模式在开发中的实际应用，理解框架源码中对设计模式的应用</li></ul><h2 id="四、数据结构和算法" tabindex="-1"><a class="header-anchor" href="#四、数据结构和算法" aria-hidden="true">#</a> 四、数据结构和算法</h2><blockquote><p>据我了解的大部分前端对这部分知识有些欠缺，甚至抵触，但是，如果突破更高的天花板，这部分知识是必不可少的，而且我亲身经历——非常有用！</p></blockquote><h3 id="javascript-编码能力" tabindex="-1"><a class="header-anchor" href="#javascript-编码能力" aria-hidden="true">#</a> JavaScript 编码能力</h3><ul><li>1.多种方式实现数组去重、扁平化、对比优缺点</li><li>2.多种方式实现深拷贝、对比优缺点</li><li>3.手写函数柯里化工具函数、并理解其应用场景和优势</li><li>4.手写防抖和节流工具函数、并理解其内部原理和应用场景</li><li>5.实现一个<code>sleep</code>函数</li></ul><h3 id="手动实现前端轮子" tabindex="-1"><a class="header-anchor" href="#手动实现前端轮子" aria-hidden="true">#</a> 手动实现前端轮子</h3><ul><li>1.手动实现<code>call、apply、bind</code></li><li>2.手动实现符合<code>Promise/A+</code>规范的<code>Promise</code>、手动实现<code>async await</code></li><li>3.手写一个<code>EventEmitter</code>实现事件发布、订阅</li><li>4.可以说出两种实现双向绑定的方案、可以手动实现</li><li>5.手写<code>JSON.stringify</code>、<code>JSON.parse</code></li><li>6.手写一个模版引擎，并能解释其中原理</li><li>7.手写<code>懒加载</code>、<code>下拉刷新</code>、<code>上拉加载</code>、<code>预加载</code>等效果</li></ul><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3><ul><li>1.理解常见数据结构的特点，以及他们在不同场景下使用的优缺点</li><li>2.理解<code>数组</code>、<code>字符串</code>的存储原理，并熟练应用他们解决问题</li><li>3.理解<code>二叉树</code>、<code>栈</code>、<code>队列</code>、<code>哈希表</code>的基本结构和特点，并可以应用它解决问题</li><li>4.了解<code>图</code>、<code>堆</code>的基本结构和使用场景</li></ul><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><ul><li>1.可计算一个算法的时间复杂度和空间复杂度，可估计业务逻辑代码的耗时和内存消耗</li><li>2.至少理解五种排序算法的实现原理、应用场景、优缺点，可快速说出时间、空间复杂度</li><li>3.了解递归和循环的优缺点、应用场景、并可在开发中熟练应用</li><li>4.可应用<code>回溯算法</code>、<code>贪心算法</code>、<code>分治算法</code>、<code>动态规划</code>等解决复杂问题</li><li>5.前端处理海量数据的算法方案</li></ul><h2 id="五、运行环境" tabindex="-1"><a class="header-anchor" href="#五、运行环境" aria-hidden="true">#</a> 五、运行环境</h2><p>我们需要理清语言和环境的关系：</p><blockquote><p><code>ECMAScript</code>描述了<code>JavaScript</code>语言的语法和基本对象规范</p></blockquote><blockquote><p>浏览器作为<code>JavaScript</code>的一种运行环境，为它提供了：文档对象模型（<code>DOM</code>），描述处理网页内容的方法和接口、浏览器对象模型（<code>BOM</code>），描述与浏览器进行交互的方法和接口</p></blockquote><blockquote><p>Node 也是<code>JavaScript</code>的一种运行环境，为它提供了操作<code>I/O</code>、网络等<code>API</code></p></blockquote><h3 id="浏览器-api" tabindex="-1"><a class="header-anchor" href="#浏览器-api" aria-hidden="true">#</a> 浏览器 API</h3><ul><li>1.浏览器提供的符合<code>W3C</code>标准的<code>DOM</code>操作<code>API</code>、浏览器差异、兼容性</li><li>2.浏览器提供的浏览器对象模型 (<code>BOM</code>)提供的所有全局<code>API</code>、浏览器差异、兼容性</li><li>3.大量<code>DOM</code>操作、海量数据的性能优化(合并操作、<code>Diff</code>、<code>requestAnimationFrame</code>等)</li><li>4.浏览器海量数据存储、操作性能优化</li><li>5.<code>DOM</code>事件流的具体实现机制、不同浏览器的差异、事件代理</li><li>6.前端发起网络请求的几种方式及其底层实现、可以手写原生<code>ajax</code>、<code>fetch</code>、可以熟练使用第三方库</li><li>7.浏览器的同源策略，如何避免同源策略，几种方式的异同点以及如何选型</li><li>8.浏览器提供的几种存储机制、优缺点、开发中正确的选择</li><li>9.浏览器跨标签通信</li></ul><h3 id="浏览器原理" tabindex="-1"><a class="header-anchor" href="#浏览器原理" aria-hidden="true">#</a> 浏览器原理</h3><ul><li>1.各浏览器使用的<code>JavaScript</code>引擎以及它们的异同点、如何在代码中进行区分</li><li>2.请求数据到请求结束与服务器进行了几次交互</li><li>3.可详细描述浏览器从输入<code>URL</code>到页面展现的详细过程</li><li>4.浏览器解析<code>HTML</code>代码的原理，以及构建<code>DOM</code>树的流程</li><li>5.浏览器如何解析<code>CSS</code>规则，并将其应用到<code>DOM</code>树上</li><li>6.浏览器如何将解析好的带有样式的<code>DOM</code>树进行绘制</li><li>7.浏览器的运行机制，如何配置资源异步同步加载</li><li>8.浏览器回流与重绘的底层原理，引发原因，如何有效避免</li><li>9.浏览器的垃圾回收机制，如何避免内存泄漏</li><li>10.浏览器采用的缓存方案，如何选择和控制合适的缓存方案</li></ul><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h3><ul><li>1.理解<code>Node</code>在应用程序中的作用，可以使用<code>Node</code>搭建前端运行环境、使用<code>Node</code>操作文件、操作数据库等等</li><li>2.掌握一种<code>Node</code>开发框架，如<code>Express</code>，<code>Express</code>和<code>Koa</code>的区别</li><li>3.熟练使用<code>Node</code>提供的<code>API</code>如<code>Path</code>、<code>Http</code>、<code>Child Process</code>等并理解其实现原理</li><li>4.<code>Node</code>的底层运行原理、和浏览器的异同</li><li>5.<code>Node</code>事件驱动、非阻塞机制的实现原理</li></ul><h2 id="六、框架和类库" tabindex="-1"><a class="header-anchor" href="#六、框架和类库" aria-hidden="true">#</a> 六、框架和类库</h2><blockquote><p>轮子层出不穷，从原理上理解才是正道</p></blockquote><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><ul><li>1.理解<code>泛型</code>、<code>接口</code>等面向对象的相关概念，<code>TypeScript</code>对面向对象理念的实现</li><li>2.理解使用<code>TypeScript</code>的好处，掌握<code>TypeScript</code>基础语法</li><li>3.<code>TypeScript</code>的规则检测原理</li><li>4.可以在<code>React</code>、<code>Vue</code>等框架中使用<code>TypeScript</code>进行开发</li></ul><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3><ul><li>1.<code>React</code>和<code>vue</code>选型和优缺点、核心架构的区别</li><li>2.<code>React</code>中<code>setState</code>的执行机制，如何有效的管理状态</li><li>3.<code>React</code>的事件底层实现机制</li><li>4.<code>React</code>的虚拟<code>DOM</code>和<code>Diff</code>算法的内部实现</li><li>5.<code>React</code>的<code>Fiber</code>工作原理，解决了什么问题</li><li>6.<code>React Router</code>和<code>Vue Router</code>的底层实现原理、动态加载实现原理</li><li>7.可熟练应用<code>React API</code>、生命周期等，可应用<code>HOC</code>、<code>render props</code>、<code>Hooks</code>等高阶用法解决问题</li><li>8.基于<code>React</code>的特性和原理，可以手动实现一个简单的<code>React</code></li></ul><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3><ul><li>1.熟练使用<code>Vue</code>的<code>API</code>、生命周期、钩子函数</li><li>2.<code>MVVM</code>框架设计理念</li><li>3.<code>Vue</code>双向绑定实现原理、<code>Diff</code>算法的内部实现</li><li>4.<code>Vue</code>的事件机制</li><li>5.从<code>template</code>转换成真实<code>DOM</code>的实现机制</li></ul><h3 id="多端开发" tabindex="-1"><a class="header-anchor" href="#多端开发" aria-hidden="true">#</a> 多端开发</h3><ul><li>2.单页面应用（<code>SPA</code>）的原理和优缺点，掌握一种快速开发<code>SPA</code>的方案</li><li>3.理解<code>Viewport</code>、<code>em</code>、<code>rem</code>的原理和用法，分辨率、<code>px</code>、<code>ppi</code>、<code>dpi</code>、<code>dp</code>的区别和实际应用</li><li>3.移动端页面适配解决方案、不同机型适配方案</li><li>4.掌握一种<code>JavaScript</code>移动客户端开发技术，如<code>React Native</code>：可以搭建<code>React Native</code>开发环境，熟练进行开发，可理解<code>React Native</code>的运作原理，不同端适配</li><li>5.掌握一种<code>JavaScript</code> <code>PC</code>客户端开发技术，如<code>Electron</code>：可搭建<code>Electron</code>开发环境，熟练进行开发，可理解<code>Electron</code>的运作原理</li><li>6.掌握一种小程序开发框架或原生小程序开发</li><li>7.理解多端框架的内部实现原理，至少了解一个多端框架的使用</li></ul><h3 id="数据流管理" tabindex="-1"><a class="header-anchor" href="#数据流管理" aria-hidden="true">#</a> 数据流管理</h3><ul><li>1.掌握<code>React</code>和<code>Vue</code>传统的跨组件通信方案，对比采用数据流管理框架的异同</li><li>2.熟练使用<code>Redux</code>管理数据流，并理解其实现原理，中间件实现原理</li><li>3.熟练使用<code>Mobx</code>管理数据流，并理解其实现原理，相比<code>Redux</code>有什么优势</li><li>4.熟练使用<code>Vuex</code>管理数据流，并理解其实现原理</li><li>5.以上数据流方案的异同和优缺点，不情况下的技术选型</li></ul><h3 id="实用库" tabindex="-1"><a class="header-anchor" href="#实用库" aria-hidden="true">#</a> 实用库</h3><ul><li>1.至少掌握一种<code>UI</code>组件框架，如<code>antd design</code>，理解其设计理念、底层实现</li><li>2.掌握一种图表绘制框架，如<code>Echart</code>，理解其设计理念、底层实现，可以自己实现图表</li><li>3.掌握一种<code>GIS</code>开发框架，如百度地图<code>API</code></li><li>4.掌握一种可视化开发框架，如<code>Three.js</code>、<code>D3</code></li><li>5.工具函数库，如<code>lodash</code>、<code>underscore</code>、<code>moment</code>等，理解使用的工具类或工具函数的具体实现原理</li></ul><h3 id="开发和调试" tabindex="-1"><a class="header-anchor" href="#开发和调试" aria-hidden="true">#</a> 开发和调试</h3><ul><li>1.熟练使用各浏览器提供的调试工具</li><li>2.熟练使用一种代理工具实现请求代理、抓包，如<code>charls</code></li><li>3.可以使用<code>Android</code>、<code>IOS</code>模拟器进行调试，并掌握一种真机调试方案</li><li>4.了解<code>Vue</code>、<code>React</code>等框架调试工具的使用</li></ul><h2 id="七、前端工程" tabindex="-1"><a class="header-anchor" href="#七、前端工程" aria-hidden="true">#</a> 七、前端工程</h2><blockquote><p>前端工程化：以工程化方法和工具提高开发生产效率、降低维护难度</p></blockquote><h3 id="项目构建" tabindex="-1"><a class="header-anchor" href="#项目构建" aria-hidden="true">#</a> 项目构建</h3><ul><li>1.理解<code>npm</code>、<code>yarn</code>依赖包管理的原理，两者的区别</li><li>2.可以使用<code>npm</code>运行自定义脚本</li><li>3.理解<code>Babel</code>、<code>ESLint</code>、<code>webpack</code>等工具在项目中承担的作用</li><li>4.<code>ESLint</code>规则检测原理，常用的<code>ESLint</code>配置</li><li>5.<code>Babel</code>的核心原理，可以自己编写一个<code>Babel</code>插件</li><li>6.可以配置一种前端代码兼容方案，如<code>Polyfill</code></li><li>7.<code>Webpack</code>的编译原理、构建流程、热更新原理，<code>chunk</code>、<code>bundle</code>和<code>module</code>的区别和应用</li><li>8.可熟练配置已有的<code>loaders</code>和<code>plugins</code>解决问题，可以自己编写<code>loaders</code>和<code>plugins</code></li></ul><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><ul><li>1.正向代理与反向代理的特点和实例</li><li>2.可手动搭建一个简单的<code>nginx</code>服务器、</li><li>3.熟练应用常用的<code>nginx</code>内置变量，掌握常用的匹配规则写法</li><li>4.可以用<code>nginx</code>实现请求过滤、配置<code>gzip</code>、负载均衡等，并能解释其内部原理</li></ul><h3 id="开发提速" tabindex="-1"><a class="header-anchor" href="#开发提速" aria-hidden="true">#</a> 开发提速</h3><ul><li>1.熟练掌握一种接口管理、接口<code>mock</code>工具的使用，如<code>yapi</code></li><li>2.掌握一种高效的日志埋点方案，可快速使用日志查询工具定位线上问题</li><li>3.理解<code>TDD</code>与<code>BDD</code>模式，至少会使用一种前端单元测试框架</li></ul><h3 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h3><ul><li>1.理解<code>Git</code>的核心原理、工作流程、和<code>SVN</code>的区别</li><li>2.熟练使用常规的<code>Git</code>命令、<code>git rebase</code>、<code>git stash</code>等进阶命令</li><li>3.可以快速解决<code>线上分支回滚</code>、<code>线上分支错误合并</code>等复杂问题</li></ul><h3 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成" aria-hidden="true">#</a> 持续集成</h3><ul><li>1.理解<code>CI/CD</code>技术的意义，至少熟练掌握一种<code>CI/CD</code>工具的使用，如<code>Jenkins</code></li><li>2.可以独自完成架构设计、技术选型、环境搭建、全流程开发、部署上线等一套完整的开发流程（包括<code>Web</code>应用、移动客户端应用、<code>PC</code>客户端应用、小程序、<code>H5</code>等等）</li></ul><h2 id="八、项目和业务" tabindex="-1"><a class="header-anchor" href="#八、项目和业务" aria-hidden="true">#</a> 八、项目和业务</h2><h3 id="后端技能" tabindex="-1"><a class="header-anchor" href="#后端技能" aria-hidden="true">#</a> 后端技能</h3><ul><li>1.了解后端的开发方式，在应用程序中的作用，至少会使用一种后端语言</li><li>2.掌握数据最终在数据库中是如何落地存储的，能看懂表结构设计、表之间的关联，至少会使用一种数据库</li></ul><h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h3><ul><li>1.了解前端性能衡量指标、性能监控要点，掌握一种前端性能监控方案</li><li>2.了解常见的<code>Web</code>、<code>App</code>性能优化方案</li><li>3.<code>SEO</code>排名规则、<code>SEO</code>优化方案、前后端分离的<code>SEO</code></li><li>4.<code>SSR</code>实现方案、优缺点、及其性能优化</li><li>5.<code>Webpack</code>的性能优化方案</li><li>6.<code>Canvas</code>性能优化方案</li><li>7.<code>React</code>、<code>Vue</code>等框架使用性能优化方案</li></ul><h3 id="前端安全" tabindex="-1"><a class="header-anchor" href="#前端安全" aria-hidden="true">#</a> 前端安全</h3><ul><li>1.<code>XSS</code>攻击的原理、分类、具体案例，前端如何防御</li><li>2.<code>CSRF</code>攻击的原理、具体案例，前端如何防御</li><li>3.<code>HTTP</code>劫持、页面劫持的原理、防御措施</li></ul><h3 id="业务相关" tabindex="-1"><a class="header-anchor" href="#业务相关" aria-hidden="true">#</a> 业务相关</h3><ul><li>1.能理解所开发项目的整体业务形态、业务目标、业务架构，可以快速定位线上业务问题</li><li>2.能理解所开发项目整体的技术架构、能快读的根据新需求进行开发规划、能快速根据业务报警、线上日志等定位并解决线上技术问题</li><li>3.可以将自己的想法或新技术在业务中落地实践，尽量在团队中拥有一定的不可替代性</li></ul><h2 id="九、学习提升" tabindex="-1"><a class="header-anchor" href="#九、学习提升" aria-hidden="true">#</a> 九、学习提升</h2><p><code>vczh</code>大神在知乎问题【如何能以后达到温赵轮三位大神的水平？】下的回答：</p><p>这十几年我一共做了三件事：</p><ul><li>1、不以赚钱为目的选择学习的内容；</li><li>2、以自己是否能造出轮子来衡量学习的效果；</li><li>3、坚持每天写自己的代码，前 10 年每天至少 6 个小时，不包含学习和工作的时间。</li></ul><blockquote><p>上面几点可能有点难，第一点我就做不到，但是做到下面绩点还是比较容易的。</p></blockquote><blockquote><p>关于写博客说明下，能给别人讲明白的知识会比自己学习掌握的要深刻许多</p></blockquote><ul><li>1.拥有自己的技术博客，或者在一些博客平台上拥有自己的专栏</li><li>2.定期的将知识进行总结，不断完善自己的知识体系</li><li>3.尽量将自己的知识转换成真实的产出，不要仅仅停留在书面理解层面，更重要的是实际应用</li><li>4.坚持输出<code>自己</code>的代码，不要盲目的扎进公司业</li></ul><h2 id="十、技术之外" tabindex="-1"><a class="header-anchor" href="#十、技术之外" aria-hidden="true">#</a> 十、技术之外</h2><blockquote><p>这部分可能比上面九条加起来重要！</p></blockquote><ul><li>1.了解互联网人员术语：<code>CEO</code>、<code>CTO</code>、<code>COO</code>、<code>CFO</code>、<code>PM</code>、<code>QA</code>、<code>UI</code>、<code>FE</code>、<code>DEV</code>、<code>DBA</code>、<code>OPS</code>等</li><li>2.了解互联网行业术语：<code>B2B</code>、<code>B2C</code>、<code>C2C</code>、<code>O2O</code>等</li><li>3.掌握互联网行业沟通、问答、学习的</li><li>4.有一定的<code>&quot;PPT&quot;</code>能力</li><li>5.有一定的理财意识，至少了解储蓄、货币基金、保险、指数基金、股票等基本的理财知识</li><li>6.掌握在繁重的工作和长期的电脑辐射的情况下保持健康的方法，建立正确的养生知识体系</li></ul><h2 id="十一、资源推荐" tabindex="-1"><a class="header-anchor" href="#十一、资源推荐" aria-hidden="true">#</a> 十一、资源推荐</h2><p>有了知识体系，在阅读一篇技术文章的时候就很容易把它归类，我一直以来就是这样做的。</p><p>事实证明，在阅读文章或书籍时，有目的和归类的阅读比&quot;随便看看&quot;后的只是留存率要高很多。</p><p>每阅读到一篇好的文章或者书籍，我都会收藏并归类到我的知识体系中。</p><p>下面是一些我觉得还不错的文章、博客或者书籍教程等等，分享给大家，资源不多，但都是精品。</p><p>学习一门知识，最好先阅读官方文档，把所有的<code>API</code>大概浏览一遍，再继续看大佬们总结的进阶知识，什么东西是搬运过来的，什么是干货，一目了然。</p><h3 id="语言基础" tabindex="-1"><a class="header-anchor" href="#语言基础" aria-hidden="true">#</a> 语言基础</h3>',113),s=e("code",null,"JavaScript",-1),u={href:"https://link.juejin.im?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F10546125%2F",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"JavaScript",-1),b={href:"https://link.juejin.im?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F5362856%2F",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"JavaScript",-1),f={href:"https://link.juejin.im?target=https%3A%2F%2Fzh.javascript.info%2F",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"ECMAScript 6",-1),F={href:"https://link.juejin.im?target=http%3A%2F%2Fes6.ruanyifeng.com%2F",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"ECMAScript 6",-1),k={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.ecma-international.org%2Fecma-262%2F6.0%2F",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"HTML meta",-1),S={href:"https://link.juejin.im?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000004279791",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"CSS",-1),A={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fchadluo%2FCSS-Guidelines%2Fblob%2Fmaster%2FREADME.md",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"计算机基础",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计算机基础","aria-hidden":"true"},"#"),o(" 计算机基础")],-1),v={href:"https://link.juejin.im?target=http%3A%2F%2Ffullstack.blog%2F2017%2F06%2F24%2F%25E5%25A4%25A7%25E5%2589%258D%25E7%25AB%25AF%25E5%25BC%2580%25E5%258F%2591%25E8%2580%2585%25E9%259C%2580%25E8%25A6%2581%25E4%25BA%2586%25E8%25A7%25A3%25E7%259A%2584%25E5%259F%25BA%25E7%25A1%2580%25E7%25BC%2596%25E8%25AF%2591%25E5%258E%259F%25E7%2590%2586%25E5%2592%258C%25E8%25AF%25AD%25E8%25A8%2580%25E7%259F%25A5%25E8%25AF%2586",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"HTTP",-1),E={href:"https://link.juejin.im?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F25863515%2F",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"JavaScript",-1),P={href:"https://link.juejin.im?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F26382780%2F",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.im/?target=https%3A%2F%2Fdeerchao.net%2Ftutorials%2Fregex%2Fregex.htm",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"数据结构和算法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据结构和算法","aria-hidden":"true"},"#"),o(" 数据结构和算法")],-1),J={href:"https://link.juejin.im?target=https%3A%2F%2Ftime.geekbang.org%2Fcolumn%2Fintro%2F126",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"LeetCode",-1),z={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FMisterBooo%2FLeetCodeAnimation",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"JavaScript",-1),R={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FConardLi%2Fawesome-coding-js",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"30-seconds-of-code",-1),I=e("code",null,"js",-1),O={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FConardLi%2F30-seconds-of-code-Zh-CN",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"运行环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行环境","aria-hidden":"true"},"#"),o(" 运行环境")],-1),V={href:"https://link.juejin.im?target=https%3A%2F%2Ftime.geekbang.org%2Fcolumn%2Farticle%2F80240",target:"_blank",rel:"noopener noreferrer"},L={href:"https://link.juejin.im?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F47407398",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,[o("七天学会"),e("code",null,"NodeJS"),o("：[github.com/nqdeng/7-da…](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fnqdeng%2F7-days - nodejs)")],-1),W=e("code",null,"Node.js",-1),G={href:"https://link.juejin.im?target=https%3A%2F%2Fefe.baidu.com%2Fblog%2Fnodejs-module-analyze%2F",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"框架和类库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#框架和类库","aria-hidden":"true"},"#"),o(" 框架和类库")],-1),K=e("code",null,"TypeScript Handbook",-1),Q={href:"https://link.juejin.im?target=https%3A%2F%2Fzhongsp.gitbooks.io%2Ftypescript-handbook%2Fcontent%2F",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"React.js",-1),Z={href:"https://link.juejin.im?target=http%3A%2F%2Fhuziketang.mangojuice.top%2Fbooks%2Freact%2F",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"React",-1),$={href:"https://juejin.im/post/5cad39b3f265da03502b1c0a",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"Webpack React",-1),oe={href:"https://link.juejin.im?target=https%3A%2F%2Ffakefish.github.io%2Freact-webpack-cookbook%2Findex.html",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,"Vue.js",-1),ce={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fustbhuangyi%2Fvue-analysis",target:"_blank",rel:"noopener noreferrer"},de=e("code",null,"Vuex",-1),le=e("code",null,"Vue",-1),te={href:"https://link.juejin.im?target=https%3A%2F%2Fsabe.io%2Ftutorials%2Fgetting-started-with-vuex",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"Mobx",-1),re=e("code",null,"Redux",-1),ne={href:"https://juejin.im/post/5a7fd72c5188257a766324ae",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"Underscore",-1),se={href:"https://link.juejin.im?target=https%3A%2F%2Fyoyoyohamapi.gitbooks.io%2Fundersercore-analysis%2Fcontent%2F",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fjustjavac%2Fawesome-wechat-weapp",target:"_blank",rel:"noopener noreferrer"},pe=e("code",null,"Web",-1),be={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FAlloyTeam%2FMars",target:"_blank",rel:"noopener noreferrer"},_e=e("h3",{id:"前端工程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端工程","aria-hidden":"true"},"#"),o(" 前端工程")],-1),fe=e("code",null,"babel",-1),ge={href:"https://link.juejin.im?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F43249121",target:"_blank",rel:"noopener noreferrer"},Fe=e("code",null,"Webpack",-1),me={href:"https://link.juejin.im?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F20367175",target:"_blank",rel:"noopener noreferrer"},ke=e("code",null,"Webpack",-1),je={href:"https://link.juejin.im?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000015088834%3Futm_source%3Dtag-newest",target:"_blank",rel:"noopener noreferrer"},Se=e("code",null,"git",-1),xe={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.liaoxuefeng.com%2Fwiki%2F0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"},Ae=e("code",null,"Git",-1),we={href:"https://link.juejin.im?target=https%3A%2F%2Fmarklodato.github.io%2Fvisual-git-guide%2Findex-zh-cn.html",target:"_blank",rel:"noopener noreferrer"},ve=e("code",null,"Nginx",-1),Ce={href:"https://juejin.im/post/5c85a64d6fb9a04a0e2e038c",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.liaoxuefeng.com%2Farticle%2F001463233913442cdb2d1bd1b1b42e3b0b29eb1ba736c5e000",target:"_blank",rel:"noopener noreferrer"},Te=e("h3",{id:"项目和业务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目和业务","aria-hidden":"true"},"#"),o(" 项目和业务")],-1),Pe=e("code",null,"Web",-1),ye={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fljianshu%2FBlog%2Fissues%2F56",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://juejin.im/post/5caaacc0e51d452b45296487#heading-5",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://link.juejin.im?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F3132277%2F",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://juejin.im/post/5cb860a86fb9a06890705f14",target:"_blank",rel:"noopener noreferrer"},ze=e("h3",{id:"学习提升",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学习提升","aria-hidden":"true"},"#"),o(" 学习提升")],-1),Ne={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.docschina.org%2F",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fhelloqingfeng%2FAwsome-Front-End-learning-resource%2Ftree%2Fmaster%2F01-FE-learning-master",target:"_blank",rel:"noopener noreferrer"},De={href:"https://juejin.im/post/5cbd7477f265da039d32834e",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fforu17%2Ffront-end-collect",target:"_blank",rel:"noopener noreferrer"},Oe=e("p",null,"另外推荐我一直在关注的几位大佬的个人博客：",-1),Be={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.zhangxinxu.com%2Fwordpress%2F",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://link.juejin.im?target=https%3A%2F%2Fcoolshell.cn%2F",target:"_blank",rel:"noopener noreferrer"},He=e("h3",{id:"技术之外",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术之外","aria-hidden":"true"},"#"),o(" 技术之外")],-1),We={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F9a7ca206c1ab",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://link.juejin.im?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F41431775",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://link.juejin.im?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F21790919",target:"_blank",rel:"noopener noreferrer"},Ke=e("p",null,"其实在这个信息发达的时代最不缺的就是资源，如何从众多的资源中获取到真正精华的部分，是非常重要的，资源在于精不在于多，强烈建议在保证深度的情况下再保证广度。",-1);function Qe(Xe,Ze){const i=l("ExternalLinkIcon");return t(),a("div",null,[h,e("ul",null,[e("li",null,[o("[📚]"),s,o("高级程序设计（必看）："),e("a",u,[o("book.douban.com/subject/105…"),c(i)])]),e("li",null,[o("[📚]高性能"),p,o("："),e("a",b,[o("book.douban.com/subject/536…"),c(i)])]),e("li",null,[o("现代"),_,o("教程："),e("a",f,[o("zh.javascript.info/"),c(i)])]),e("li",null,[o("阮一峰的"),g,o("教程："),e("a",F,[o("es6.ruanyifeng.com/"),c(i)])]),e("li",null,[m,o("标准："),e("a",k,[o("www.ecma-international.org/ecma-262/6.…"),c(i)])]),e("li",null,[j,o("标签总结与属性使用介绍："),e("a",S,[o("segmentfault.com/a/119000000…"),c(i)])]),e("li",null,[x,o("编码指导："),e("a",A,[o("github.com/chadluo/CSS…"),c(i)])])]),w,e("ul",null,[e("li",null,[o("大前端开发者需要了解的基础编译原理和语言知识："),e("a",v,[o("fullstack.blog/2017/06/24/…"),c(i)])]),e("li",null,[o("图解"),C,o("："),e("a",E,[o("book.douban.com/subject/258…"),c(i)])]),e("li",null,[o("[📚]"),T,o("设计模式与开发实践："),e("a",P,[o("book.douban.com/subject/263…"),c(i)])]),e("li",null,[o("正则表达式 30 分钟入门教程："),e("a",y,[o("link.juejin.im/?target=htt…"),c(i)])])]),q,e("ul",null,[e("li",null,[o("数据结构与算法之美："),e("a",J,[o("time.geekbang.org/column/intr…"),c(i)])]),e("li",null,[o("用动画的形式呈现解"),M,o("题目的思路："),e("a",z,[o("github.com/MisterBooo/…"),c(i)])]),e("li",null,[N,o("数据结构和算法："),e("a",R,[o("github.com/ConardLi/aw…"),c(i)])]),e("li",null,[D,o("（里面有很多"),I,o("代码非常巧妙，我正在将它翻译成中文）："),e("a",O,[o("github.com/ConardLi/30…"),c(i)])])]),B,e("ul",null,[e("li",null,[o("《重学前端》中的浏览器原理章节："),e("a",V,[o("time.geekbang.org/column/arti…"),c(i)])]),e("li",null,[o("图解浏览器的基本工作原理："),e("a",L,[o("zhuanlan.zhihu.com/p/47407398"),c(i)])]),H,e("li",null,[W,o("模块加载与运行原理："),e("a",G,[o("efe.baidu.com/blog/nodejs…"),c(i)])])]),U,e("ul",null,[e("li",null,[K,o("："),e("a",Q,[o("zhongsp.gitbooks.io/typescript-…"),c(i)])]),e("li",null,[X,o("小书："),e("a",Z,[o("huziketang.mangojuice.top/books/react…"),c(i)])]),e("li",null,[Y,o("深入系列："),e("a",$,[o("juejin.im/post/5cad39…"),c(i)])]),e("li",null,[ee,o("小书："),e("a",oe,[o("fakefish.github.io/react-webpa…"),c(i)])]),e("li",null,[ie,o("技术揭秘："),e("a",ce,[o("github.com/ustbhuangyi…"),c(i)])]),e("li",null,[de,o("-在"),le,o("中管理状态："),e("a",te,[o("sabe.io/tutorials/g…"),c(i)])]),e("li",null,[o("你需要"),ae,o("还是"),re,o("？："),e("a",ne,[o("juejin.im/post/5a7fd7…"),c(i)])]),e("li",null,[he,o("源码分析："),e("a",se,[o("yoyoyohamapi.gitbooks.io/undersercor…"),c(i)])]),e("li",null,[o("微信小程序开发资源汇总："),e("a",ue,[o("github.com/justjavac/a…"),c(i)])]),e("li",null,[o("腾讯移动"),pe,o("前端知识库："),e("a",be,[o("github.com/AlloyTeam/M…"),c(i)])])]),_e,e("ul",null,[e("li",null,[o("一口（很长的）气了解"),fe,o("："),e("a",ge,[o("zhuanlan.zhihu.com/p/43249121"),c(i)])]),e("li",null,[Fe,o("傻瓜式指南："),e("a",me,[o("zhuanlan.zhihu.com/p/20367175"),c(i)])]),e("li",null,[ke,o("原理："),e("a",je,[o("segmentfault.com/a/119000001…"),c(i)])]),e("li",null,[o("廖雪峰的"),Se,o("教程："),e("a",xe,[o("www.liaoxuefeng.com/wiki/001373…"),c(i)])]),e("li",null,[o("图解"),Ae,o("："),e("a",we,[o("marklodato.github.io/visual-git-…"),c(i)])]),e("li",null,[o("前端开发者必备的"),ve,o("知识："),e("a",Ce,[o("juejin.im/post/5c85a6…"),c(i)])]),e("li",null,[o("使用 Jenkins 进行持续集成："),e("a",Ee,[o("www.liaoxuefeng.com/article/001…"),c(i)])])]),Te,e("ul",null,[e("li",null,[o("常见六大"),Pe,o("安全攻防解析："),e("a",ye,[o("github.com/ljianshu/Bl…"),c(i)])]),e("li",null,[o("深入理解前端性能监控："),e("a",qe,[o("juejin.im/post/5caaac…"),c(i)])]),e("li",null,[o("[📚]高性能网站建设指南："),e("a",Je,[o("book.douban.com/subject/313…"),c(i)])]),e("li",null,[o("新人如何快速融入技术实力强的前端团队："),e("a",Me,[o("juejin.im/post/5cb860…"),c(i)])])]),ze,e("ul",null,[e("li",null,[o("印记中文（各种中文开发文档）："),e("a",Ne,[o("www.docschina.org/"),c(i)])]),e("li",null,[o("前端学习方法："),e("a",Re,[o("github.com/helloqingfe…"),c(i)])]),e("li",null,[o("如何在工作内外获得持续的技术成长："),e("a",De,[o("juejin.im/post/5cbd74…"),c(i)])]),e("li",null,[o("优秀的前端博客汇总："),e("a",Ie,[o("github.com/foru17/fron…"),c(i)])])]),Oe,e("ul",null,[e("li",null,[o("冴羽的博客："),e("a",Be,[o("github.com/mqyqingfeng…"),c(i)])]),e("li",null,[o("张鑫旭的博客："),e("a",Ve,[o("www.zhangxinxu.com/wordpress/"),c(i)])]),e("li",null,[o("左耳朵耗子："),e("a",Le,[o("coolshell.cn/"),c(i)])])]),He,e("ul",null,[e("li",null,[o("互联网术语大全："),e("a",We,[o("www.jianshu.com/p/9a7ca206c…"),c(i)])]),e("li",null,[o("互联网沟通、问答、学习的艺术："),e("a",Ge,[o("zhuanlan.zhihu.com/p/41431775"),c(i)])]),e("li",null,[o("经常加班至深夜，怎样才能保持身体健康："),e("a",Ue,[o("www.zhihu.com/question/21…"),c(i)])])]),Ke])}const $e=d(n,[["render",Qe],["__file","前端工程师自检清单.html.vue"]]);export{$e as default};
