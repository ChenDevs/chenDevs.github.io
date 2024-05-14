import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c,e as o}from"./app-TnKl6VKN.js";const i={},l=o('<h3 id="seo-优化" tabindex="-1"><a class="header-anchor" href="#seo-优化" aria-hidden="true">#</a> SEO 优化</h3><ul><li>合理的 <code>title 、 description 、 keywords</code> ：搜索对着三项的权重逐个减⼩， <code>title</code>值强调重点即可，重要关键词出现不要超过 2 次，⽽且要靠前，不同⻚⾯ <code>title</code> 要有所不同； <code>description</code> 把⻚⾯内容⾼度概括，⻓度合适，不可过分堆砌关键词，不同⻚⾯<code>description</code> 有所不同； <code>keywords</code> 列举出重要关键词即可</li><li>语义化的 <code>HTML</code> 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解⽹⻚</li><li>重要内容 <code>HTML</code> 代码放在最前：搜索引擎抓取 <code>HTML</code> 顺序是从上到下，有的搜索引擎对抓取⻓度有限制，保证重要内容⼀定会被抓取</li><li>重要内容不要⽤ <code>js</code> 输出：爬⾍不会执⾏ js 获取内容</li><li>少⽤ <code>iframe</code> ：搜索引擎不会抓取 <code>iframe</code> 中的内容</li><li>⾮装饰性图⽚必须加 <code>alt</code></li><li>提⾼⽹站速度：⽹站速度是搜索引擎排序的⼀个重要指标</li></ul><h3 id="server-优化" tabindex="-1"><a class="header-anchor" href="#server-优化" aria-hidden="true">#</a> server 优化</h3><ul><li>减少<code>HTTP</code>请求，合并文件、雪碧图</li><li>减少<code>DNS</code>查询，使用缓存</li><li>减少<code>Dom</code>元素的数量</li><li>使用<code>CDN</code></li><li>配置<code>ETag</code>,http 缓存的手段</li><li>对组件使用<code>Gzip</code>压缩</li><li>减少<code>cookie</code>的大小</li></ul><h3 id="css-优化" tabindex="-1"><a class="header-anchor" href="#css-优化" aria-hidden="true">#</a> css 优化</h3><ul><li>将样式表放在页面顶部</li><li>使用<code>less scss</code>表达式</li><li>使用<code>link</code> 不适用<code>@import</code>引入样式</li><li>压缩<code>css</code></li><li>禁⽌使⽤ <code>gif</code> 图⽚实现 <code>loading</code> 效果（降低 CPU 消耗，提升渲染性能）</li><li>使⽤ <code>CSS3</code> 代码代替 <code>JS</code> 动画（尽可能避免重绘重排以及回流）</li><li>对于⼀些⼩图标，可以使⽤<code>base64</code>位编码，以减少⽹络请求。</li><li>⻚⾯头部的 <code>&lt;style&gt; &lt;script&gt;</code> 会阻塞⻚⾯；（因为 Renderer 进程中 JS 线程和渲染线程是互斥的）</li><li>当需要设置的样式很多时设置 <code>className</code> ⽽不是直接操作 <code>style</code></li></ul><h3 id="js-方面" tabindex="-1"><a class="header-anchor" href="#js-方面" aria-hidden="true">#</a> js 方面</h3><ul><li>将脚本放到页面底部</li><li>将<code>js</code> 外部引入</li><li>压缩<code>js</code></li><li>使用<code>Eslint</code>语法检测</li><li>减少<code>Dom</code>的操作</li><li>熟练使用设计模式</li><li>禁⽌使⽤ <code>iframe</code> （阻塞⽗⽂档 <code>onload</code> 事件）</li><li>⻚⾯中空的 <code>href 和 src</code> 会阻塞⻚⾯其他资源的加载</li><li>⽹⻚ <code>gzip ， CDN</code> 托管， <code>data</code> 缓存 ，图⽚服务器</li></ul><h3 id="webpack-优化点" tabindex="-1"><a class="header-anchor" href="#webpack-优化点" aria-hidden="true">#</a> webpack 优化点</h3><ul><li>代码压缩插件 <code>UglifyJsPlugin</code></li><li>服务器启⽤<code>gzip</code>压缩</li><li>按需加载资源⽂件 <code>require.ensure</code></li><li>优化 <code>devtool</code> 中的 <code>source-map</code></li><li>剥离 <code>css</code> ⽂件，单独打包</li><li>去除不必要插件，通常就是开发环境与⽣产环境⽤同⼀套配置⽂件导致</li><li>开发环境不做⽆意义的⼯作如提取 <code>css</code> 计算⽂件 hash 等</li><li>配置 <code>devtool</code></li><li>优化构建时的搜索路径 指明需要构建⽬录及不需要构建⽬录</li></ul><h3 id="其他优化点" tabindex="-1"><a class="header-anchor" href="#其他优化点" aria-hidden="true">#</a> 其他优化点</h3><p>为什么利⽤多个域名来存储⽹站资源会更有效？</p><ul><li><code>CDN</code> 缓存更⽅便</li><li>突破浏览器并发限制</li><li>节约 <code>cookie</code> 带宽</li><li>节约主域名的连接数，优化⻚⾯响应速度</li><li>防⽌不必要的安全问题</li></ul><h2 id="other-篇" tabindex="-1"><a class="header-anchor" href="#other-篇" aria-hidden="true">#</a> Other 篇</h2><h3 id="从用户刷新网⻚开始-一次-js-请求一般情况下有哪些地方会有缓存处理" tabindex="-1"><a class="header-anchor" href="#从用户刷新网⻚开始-一次-js-请求一般情况下有哪些地方会有缓存处理" aria-hidden="true">#</a> 从⽤户刷新⽹⻚开始，⼀次 js 请求⼀般情况下有哪些地⽅会有缓存处理？</h3><ul><li><code>dns</code> 缓存</li><li><code>cdn</code>缓存</li><li>浏览器缓存</li><li>服务器缓存</li></ul><h3 id="常⻅-web-安全及防护原理" tabindex="-1"><a class="header-anchor" href="#常⻅-web-安全及防护原理" aria-hidden="true">#</a> 常⻅ web 安全及防护原理</h3><ul><li><code>sql</code> 注⼊原理：就是通过把 <code>SQL</code> 命令插⼊到 <code>Web</code> 表单递交或输⼊域名或⻚⾯请求的查询字符串，最终达到欺骗服务器执⾏恶意的<code>SQL</code>命令 <ul><li>永远不要信任⽤户的输⼊，要对⽤户的输⼊进⾏校验，可以通过正则表达式，或限制⻓度，对单引号和双 &quot;-&quot; 进⾏转换等</li><li>永远不要使⽤动态拼装 SQL，可以使⽤参数化的 SQL 或者直接使⽤存储过程进⾏数据查询存取</li><li>永远不要使⽤管理员权限的数据库连接，为每个应⽤使⽤单独的权限有限的数据库连接</li><li>不要把机密信息明⽂存放，请加密或者 hash 掉密码和敏感的信息</li></ul></li><li><code>XSS</code>防范⽅法：<code>Xss(cross-site scripting)</code> 攻击指的是攻击者往 <code>Web</code> ⻚⾯⾥插⼊恶意 <code>html</code> 标签或者 <code>javascript</code> 代码。⽐如：攻击者在论坛中放⼀个看似安全的链接，骗取⽤户点击后，窃取 <code>cookie</code> 中的⽤户私密信息；或者攻击者在论坛中加⼀个恶意表单，当⽤户提交表单的时候，却把信息传送到攻击者的服务器中，⽽不是⽤户原本以为的信任站点 <ul><li>⾸先代码⾥对⽤户输⼊的地⽅和变量都需要仔细检查⻓度和对 ”&lt;”,”&gt;”,”;”,”’” 等字符做过滤；其次任何内容写到⻚⾯之前都必须加以<code>encode</code>，避免不⼩⼼把 <code>html tag</code> 弄出来。这⼀个层⾯做好，⾄少可以堵住超过⼀半的<code>XSS</code> 攻击</li></ul></li><li><code>XSS与CSRF</code>有什么区别：<code>XSS</code> 是获取信息，不需要提前知道其他⽤户⻚⾯的代码和数据包。 <code>CSRF</code> 是代替⽤户完成指定的动作，需要知道其他⽤户⻚⾯的代码和数据包。要完成⼀次 <code>CSRF</code> 攻击，受害者必须依次完成两个步骤，1.登录受信任⽹站 A ，并在本地⽣成 <code>Cookie</code> 。2.在不登出 A 的情况下，访问危险⽹站 B <ul><li>服务端的 <code>CSRF</code> ⽅式⽅法很多样，但总的思想都是⼀致的，就是在客户端⻚⾯增加伪随机数</li><li>通过验证码的⽅法</li></ul></li></ul>',18),a=[l];function s(r,t){return d(),c("div",null,a)}const u=e(i,[["render",s],["__file","面经系列-优化.html.vue"]]);export{u as default};
