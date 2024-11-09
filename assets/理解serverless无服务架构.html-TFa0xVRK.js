import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c as n,b as e,d as s,a as p,e as l}from"./app-xxrfxtC2.js";const g={},c={id:"理解-serverless-无服务架构原理-一",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#理解-serverless-无服务架构原理-一","aria-hidden":"true"},"#",-1),b={href:"https://www.cnblogs.com/tugenhua0707/p/10991363.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[e("strong",null,"阅读目录")],-1),d=e("ul",null,[e("li",null,"一：什么是 serverless 无服务？"),e("li",null,"二：与传统模式架构区别？"),e("li",null,"三：serverless 优缺点？"),e("li",null,"四：使用 serverless 的应用场景有哪些？")],-1),v=e("p",null,"一：什么是 serverless 无服务？",-1),_=e("p",null,'serverless 中文的含义是 "无服务器"，但是它真正的含义是开发者再也不用过多考虑服务器的问题，但是并不代表完全去除服务器，而是我们依靠第三方资源服务器后端，比如使用 Amazon Web Services(AWS) Lambda. 计算服务来执行代码，那么 Serverless 架构分为 Backend as a Service(BaaS) 和 Functions as a Service(FaaS) 两种技术，Serverless 它是由开发者实现的服务端逻辑运行在无状态的计算容器中，它是由事件触发，完全被第三方管理的。',-1),h=e("p",null,[e("strong",null,"什么是 BaaS?")],-1),m={href:"https://www.leancloud.cn/docs/rest_api.html",target:"_blank",rel:"noopener noreferrer"},u=l('<p><strong>什么是 FaaS?</strong></p><p>FaaS 可以被叫做：函数即服务。开发者可以直接将服务业务逻辑代码部署，运行在第三方提供的无状态计算容器中，开发者只需要编写业务代码即可，无需关注服务器，并且代码的执行它是由事件触发的。其中 AWS Lambda 是目前最佳的 FaaS 实现之一。</p><p>Serverless 的应用架构是将 BaaS 和 FaaS 组合在一起的应用，用户只需要关注应用的业务逻辑代码，编写函数为粒度将其运行在 FaaS 平台上，并且和 BaaS 第三方服务整合在一起，最后就搭建了一个完整的系统。整个系统过程中完全无需关注服务器。</p><p>二：与传统模式架构区别？</p><h4 id="bs-架构与-cs-架构特点" tabindex="-1"><a class="header-anchor" href="#bs-架构与-cs-架构特点" aria-hidden="true">#</a> BS 架构与 CS 架构特点</h4><ul><li>BS:(Browser/Server,浏览器/服务器模式),web 应用 可以实现跨平台，客户端零维护，但是个性化能力低，-响应速度较慢。</li><li>CS:(Client/Server,客户端/服务器模式),桌面级应用 响应速度快，安全性强，个性化能力强，响应数据较快</li></ul><p>传统的架构模式是使用 C/S 架构的，在典型的 web 应用程序中，服务器接收前端的 HTTP 请求处理，在保存或查询数据库之前，数据可能会经过多个应用层，最终后端会返回一个响应。比如它可以是 JSON 形式或其他格式等。然后他会将响应返回给客户端，比如如下图所示：<br><img src="https://img2018.cnblogs.com/blog/561794/201906/561794-20190608184327368-118195710.png" alt="" loading="lazy"></p><p>在传统开发模式中，开发流程：设计师设计页面 -&gt; 服务端开发 和 前端分别开发，服务器开发完成后，-&gt; 服务部署 -&gt;服务部署完成后，就是前后端联调 -&gt; 前后端联调 -&gt; 前后端联调完成后就是测试了，-&gt; 测试， 测试完成需要上线，因此 -&gt; 上线，上线完成后，需要运维维护，因此 -&gt; 运维。在传统开发模式中，开发一个应用程序，从开始到上线需要不同的角色来做不同的事情，沟通成本非常大，并且运维过程中需要考虑到 服务器的负载均衡、事务、集群、缓存、<br> 消息传递和数据冗余等等这些事情，在目前传统模式中存在如上问题。可以使用如下示意图来看下如上流程。如下图所示：<br><img src="https://img2018.cnblogs.com/blog/561794/201906/561794-20190608184404847-1916724448.png" alt="" loading="lazy"></p><p>在 Serverless 架构中，应用业务逻辑是基于 FaaS 架构形成多个相互独立的功能组件的。并且以 API 服务的形式向外提供服务，在 FaaS 中，后端的应用被拆分成为一个个函数，我们只需要编写完成函数后部署到 serverless 服务即可。后续我们也不用关心任何服务器的操作。那么整个流程就只需要我们一个前端工程师的角色来完成所有的开发工作，那么沟通成本降低了。因此我们可以使用如下示意图来表示项目流程，如下所示：<br><img src="https://img2018.cnblogs.com/blog/561794/201906/561794-20190608184430820-1050082110.png" alt="" loading="lazy"></p><p>前端工程师是居于 serverless 去写后端服务的，典型的就是居于 AWS Lambda 中编写代码，AWS 中支持不同的语言。<br> Lambda 计算服务它能够以大规模并行的方式执行代码来响应事件。通过使用 Lambda 以及使用各种功能强大的 API 和 Web 服务，开发者可以快速的构建松耦合，可扩展性及高效的架构体系。</p><p>**注意：**Lambda 是什么？它是一种计算服务，它在 AWS 基础上执行用 javascript、node.js、Python、C#或 java 编写的代码，源代码将被打包并部署到孤立的容器中，该容器有单独分配的内存、磁盘空间和处理器。代码、配置和依赖项的组合被称作为 Lambda 函数。</p><p>三：serverless 优缺点？</p><p><strong>优点有如下：</strong></p><p><strong>1. 降低创业公司启动成本</strong></p><p>当一家创业公司的时候，在开发 web 的时候，我们需要版本管理服务器、持续集成服务器、测试服务器、应用版本管理仓库等作为基础服务。<br> 线上运行的时候，为了应对大量的请求，我们还需要一个好的数据库服务器。当我们应用面向普通的用户时，我们需要：</p><p>1.1 邮件服务，用于发送提醒，注册等服务。<br> 1.2 短信服务，用于注册，登录等用户授权操作。</p><p>如上一些对于大公司来讲，都有现成的基础设施。可是对于创业公司来讲。这都需要一些启动成本。但是如果我们使用 serverless 就可以降低这些成本。</p><p><strong>2. 减少运营成本</strong></p><p>对于创业公司来讲，他们没有基础设施，没有财力，也可能没有能力去建设基础设施，采用云服务是最好的选择，可以为他们节省大量的资金。<br> 他们只要将精力放在对用户价值的产品之上即可，他们不需要自己去搭建服务器，因此会有更多的时间去开发业务功能。而采用函数计算的 serverless 与云服务器最大的区别是：云服务器需要一直运行，比如说月费或年费要多少钱租，但是 serverless 是按需计费的，如果有请求到来的时候，才运行函数，否则的话，是不需要钱的。</p><p><strong>3. 降低开发成本</strong></p><p>serverless 会提供一系列的配套服务，比如 我们只需要在配置文件上写下数据库的表名，那么数据就会存储到对应的数据库里面，并且会提供一系列的函数计算模板，我们只需要写好我们的配置即可，那么这一系列的东西都可以自动，高效的完成任务。</p><p><strong>4. 实现快速上线</strong></p><p>对于一些传统项目来讲，我们在本地开发需要部署环境，到开发环境或测试环境，我们还是需要部署环境。但是 serverless 可以在部署上有优势，并且很轻松的实现上线。因为 serverless 内部相当于有 内建自动化部署功能，并且在该里面都是由供应商提供的功能，每次我们写完业务代码后，我们只需要运行下即可，在 AWS Lambda 函数计算里面，函数一般在上传后几秒钟内，就能做好调用准备。</p><p><strong>5. 系统安全性更高。</strong></p><p>要保持服务器一直运行不是件容易的事情，并且还需要考虑黑客不同类型的攻击，但是有 serverless 后，我们不需要考虑这些问题了，这些问题第三方供应商已经会帮我解决这些问题的。</p><p><strong>6. 能适应微服务架构和扩展性能力强</strong></p><p>Serverless 的背后是 诸如 AWS Lambda 这样的 FaaS（Function as a Services）。</p><p>对于传统应用来说，要应对更多的请求的方式，就是部署更多的实例。然而，这个时候往往已经来不及了。而对于 FaaS 来说，我们并不需要这么做，FaaS 会自动的扩展。它可以在需要时尽可能多地启动实例副本，而不会发生冗长的部署和配置延迟。</p><p>以亚马逊的 AWS Lambda 为案例，Lambda 能让我们不用思考任何服务器，也就是说，不用我们处理服务器上的部署，服务器的容量和服务器的扩展和失败容错，还有服务器上选择什么 OS 操作系统，语言的更新，日志等等问题。你的应用程序只需要和多个第三方的 API 或服务打交道，也可以自我创建一个无服务器的<br> API。</p><p><strong>缺点有如下：</strong></p><p><strong>1. 不适合长时间运行应用</strong></p><p>serverless 在请求到来的时候才运行，当应用不运行的时候会进入 &quot;休眠状态&quot;，下次当请求来临时，应用将会需要一个启动时间，可以叫 冷启动，如果我们的应用需要一直长期不间断的运行，处理大量的请求，那么可能就不适合使用 serverless 来架构了，如果这种情况下，我们需要使用像 EC2 这样的云服务器会是一个更好的选择。</p><p>EC2 相当于我们自己买了一辆车，在 Lambda 相当于我们租了一辆车。如果我们长期租车的话，那么肯定比买车更贵，但是租车可以减少一部分车维护成本。</p><p><strong>2. 完全会依赖于第三方服务</strong></p><p>如果我们所有和应用相关的服务放在第三方服务上的话，就可能会涉及到安全性问题，因此我们可以将不重要的 API 或服务放在 serverless 上。<br> 当然如果我们自己有服务设施的话，那肯定使用自己的设施服务的，当我们自己使用 serverless 架构的时候，那么我们就已经和供应商绑定了。<br> 如果这个时候我们将服务迁到别的云服务商上就没有那么容易了。</p><p><strong>3. 缺乏调式和开发工具，排查问题困难。</strong></p><p><strong>4. 无法用于高并发运用。</strong></p><p>为每个请求启动一个进程开销太高，流量瞬间爆发容易超时。比如淘宝的双十一支付宝高峰期，每秒处理交易笔数 8 万多笔，也就意味着我们的系统内每秒有 8 万多个进程创建又被销毁。那么这样就会造成系统开销很大。解释和第一点一样的原理。</p><p>四：使用 serverless 的应用场景有哪些？</p><p>Serverless 适合构建比较简单的应用，比如上传一张图片，对一段音频/视频进行编码或解码，对请求返回一小段数据等。</p><p>Serverless 架构主要有以下特点：</p><p>1. 实现了细粒度的计算资源分配。<br> 2. 不需要预分配资源。<br> 3. 具备真正意义上的高度扩容和弹性。<br> 4. 按需使用，按需计费。</p><p>因此以下应用将可能使用 serverless 架构：</p><p>1. 静态网站的管理。<br> 2. 替代 WordPress(Serverless Blog Project)<br> 3. 个人媒体服务器(less!)<br> 4. 物联网 Iot 或家庭自动框架或项目 (使用 AWS IoT)</p><p>具体的应用基本如下：</p><p><strong>发送通知：</strong></p><p>诸如 PUSH Notification、邮件通知接口、短信，这一类服务来说，他们都需要基础设施来搭建。并且，他们对实时性的要求相对没有那么高。<br> 即使在时间上晚来几秒钟，用户还是能接受的。在我们所见到的短信发送的例子里，一般都会假设用户能在 60 秒内收到短信。因此，在这种时间 1s 的误差，用户也不会恼火的。而对于 APP 的消息推送而言，这种要求就更低了，用户反而不太希望能收到这样的推送。</p><p><strong>WebHook</strong></p><p>当我们没有服务器，又想要一个 Webhook 来触发我们一系列的操作的时候。我们就可以考虑使用 Serverless，我们不需要一直就这么支付一个服务器的费用。通过 Serverless，我们就可以轻松完成这样的工作，并且节省大量的费用。</p><p><strong>数据统计分析</strong></p><p>数据统计本身只需要很少的计算量，但是生成图表，则可以定期生成。</p><p>在接收数据的时候，我们不需要考虑任何延时带来的问题。50~200 ms 的延时，并不会对我们的系统造成什么影响。</p><p><strong>Trigger 及定时任务</strong></p><p>对于哪些需要爬虫来抓取和生成的程序来说，Serverless 可能是一个不错的舞台。</p><p>尽管，这样的工作也可以由云服务器来做，我们只需要定时的启动一下服务器。通过服务器中的自启动脚本来做相应的事，但是当我们完成了一系列的工作之后。我们需要将数据存储在一个远程的服务器上。而为了让系统中的其它应用，也能直接访问这些数据。那么，我们可能会考虑使用一个云数据库。这个时候，Serverless 应用看上去更具有吸引力。</p><p><strong>Chat 机器人</strong></p><p>聊天机器人，也是一个相当好的应用场景。</p><p>But，由于国内的条件限制（信息监管），这并不是一件容易的事。因此，从渠道（如微信、blabla）上，都在尽可能地降低这方面的可能性。</p><p>但是，我们还可以做一个微信公众号的服务。当用户输入一个关键词时，做出相应的回复，这实质上和聊天机器人是差不多的。</p>',59);function A(P,f){const r=a("ExternalLinkIcon");return o(),n("div",null,[e("h2",c,[i,s(),e("a",b,[s("理解 serverless 无服务架构原理(一)"),p(r)])]),S,d,v,_,h,e("p",null,[s("Baas 的英文翻译成中文的含义：后端即服务，它的应用架构由大量第三方云服务器和 API 组成的，使应用中关于服务器的逻辑和状态都由服务提供方来管理的。比如我们的典型的单页应用 SPA 和移动 APP 富客户端应用，前后端交互主要是以"),e("a",m,[s("RestAPI"),p(r)]),s("调用为主。只需要调用服务提供方的 API 即可完成相应的功能，比如常见的身份验证，云端数据/文件存储，消息推送，应用数据分析等。")]),u])}const W=t(g,[["render",A],["__file","理解serverless无服务架构.html.vue"]]);export{W as default};
