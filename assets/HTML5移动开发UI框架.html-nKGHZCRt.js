import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o,c as l,b as e,d as a,a as n,e as s}from"./app-TnKl6VKN.js";const p={},c=s(`<h3 id="vue-js-生态圈" tabindex="-1"><a class="header-anchor" href="#vue-js-生态圈" aria-hidden="true">#</a> Vue.js 生态圈</h3><ul><li>Element 和 iView 是两个最受欢迎的 UI 组件工具包，专注于左面端 UI 界面的快速开发。</li><li>而 MintUI 与 vux 则相反，是移动端最受欢迎的 UI 工具包。</li><li>Vuetify 是一款功能最完善的能同时适用于移动端和桌面端的框架，内置了服务端渲染、PWA、CLI 模板支持等诸多特性。</li><li>Nuxt 则是一款基于 Vue.js 的更高级的框架，它能让我们流程地开发具备服务器端渲染能力的 Vue.js 应用，而它的通用使我们使用用同样的代码库来构建单页引用，甚至生成静态网站。</li></ul><h4 id="_1-element-ui-饿了么团队" tabindex="-1"><a class="header-anchor" href="#_1-element-ui-饿了么团队" aria-hidden="true">#</a> 1.Element UI（饿了么团队）</h4><ul><li>官方地址：http://element-cn.eleme.io/#/zh-CN</li><li>描述：基于 Vue 2.0 的桌面端组件库</li><li>GitHub：https://github.com/ElemeFE/element</li><li>组件库：</li><li>基础引入：</li><li>CDN:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>　　　

<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/element-ui/lib/index.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>npm：npm i element-ui -S</li></ul><h4 id="_2-vue-beautify" tabindex="-1"><a class="header-anchor" href="#_2-vue-beautify" aria-hidden="true">#</a> 2 vue-beautify</h4><ul><li>vue-beauty 是一套基于 vue.js 和 ant-design 样式 的 PC 端 UI 组件库，</li><li>网址:https://fe-driver.github.io/vue-beauty/#/components/start</li></ul><h4 id="_3-ant-design-of-vue" tabindex="-1"><a class="header-anchor" href="#_3-ant-design-of-vue" aria-hidden="true">#</a> 3 Ant Design of Vue</h4><ul><li>基于 Vue 实现，开发和服务于企业级后台产品。</li><li>官网:http://tangjinzhou.gitee.io/ant-design/docs/vue/introduce-cn/</li></ul><h4 id="_4-iview" tabindex="-1"><a class="header-anchor" href="#_4-iview" aria-hidden="true">#</a> 4.iView</h4><ul><li>官网地址：https://www.iviewui.com/</li><li>描述：一套基于 Vue.js 的高质量 UI 组件库。iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</li><li>GitHub 地址：https://github.com/iview/iview</li><li>基础引入：</li><li>CDN：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword">import</span> Vue<span class="token punctuation">.</span>js <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;//vuejs.org/js/vue.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword">import</span> stylesheet <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;//unpkg.com/iview/dist/styles/iview.css&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token keyword">import</span> iView <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;//unpkg.com/iview/dist/iview.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
npm：npm install iview <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-mouse-ui" tabindex="-1"><a class="header-anchor" href="#_5-mouse-ui" aria-hidden="true">#</a> 5.Mouse-Ui</h4><ul><li>中文官网网址:https://muse-ui.org/#/zh-CN</li><li>基于 Vue2.0</li><li>描述:小巧，api 友好，可用于开发的复杂单页应用</li></ul><h4 id="_6-weui" tabindex="-1"><a class="header-anchor" href="#_6-weui" aria-hidden="true">#</a> 6.WeUI</h4><ul><li>微信官方 为微信 Web 服务量身设计</li><li>精而美适合简单公众号开发使用</li><li>vue-weui</li><li>网址 https://github.com/aidenZou/vue-weui</li></ul><h4 id="_7-radon-ui" tabindex="-1"><a class="header-anchor" href="#_7-radon-ui" aria-hidden="true">#</a> 7.Radon UI</h4>`,18),h=e("li",null,"基于 Vue 开发的高质量 UI 组件",-1),u=e("li",null,"基于 npm + webpack + ES6 + postcss 开发",-1),d={href:"https://luojilab.github.io/radon-ui/#!/",target:"_blank",rel:"noopener noreferrer"},b=s('<h4 id="_8-n3" tabindex="-1"><a class="header-anchor" href="#_8-n3" aria-hidden="true">#</a> 8.N3</h4><p>官网:https://n3-components.github.io/N3-components/ 中文文档:https://n3-components.github.io/N3-components/component.html 英文文档:https://github.com/N3-components/N3-components</p><h3 id="react-js-ui-库" tabindex="-1"><a class="header-anchor" href="#react-js-ui-库" aria-hidden="true">#</a> React.js UI 库</h3><h4 id="_1-ant-design-of-react" tabindex="-1"><a class="header-anchor" href="#_1-ant-design-of-react" aria-hidden="true">#</a> 1.Ant Design of React</h4><ul><li>现代浏览器和 IE9 及以上（需要 polyfills）</li><li>基于 react 开发和服务于企业级后台产品，适用于 pc 端。</li><li>网址 https://ant.design/docs/react/introduce-cn</li></ul><h4 id="_2-ant-design-mobile" tabindex="-1"><a class="header-anchor" href="#_2-ant-design-mobile" aria-hidden="true">#</a> 2 ant design mobile</h4><ul><li>一个基于 Preact / React / React Native 的 UI 组件库</li><li>适合于中大型产品应用</li><li>适合于基于 react / preact / react-native 的多终端应用</li><li>适合不同 UI 风格的高度定制需求的应用</li><li>官网:https://mobile.ant.design/index-cn</li></ul><h4 id="_3-weui" tabindex="-1"><a class="header-anchor" href="#_3-weui" aria-hidden="true">#</a> 3.WeUI</h4><ul><li><p>微信官方 为微信 Web 服务量身设计</p></li><li><p>精而美适合简单公众号开发使用</p></li><li><p>react-weui</p></li><li><p>网址 https://github.com/weui/react-weui/</p></li></ul><h3 id="angular-js-ui-库" tabindex="-1"><a class="header-anchor" href="#angular-js-ui-库" aria-hidden="true">#</a> Angular.js UI 库</h3><h4 id="_1-mobile-angular-ui-框架" tabindex="-1"><a class="header-anchor" href="#_1-mobile-angular-ui-框架" aria-hidden="true">#</a> 1.Mobile Angular UI 框架</h4>',11),m={href:"http://www.angularui.cn/",target:"_blank",rel:"noopener noreferrer"},_=s('<h3 id="html5-ui-库" tabindex="-1"><a class="header-anchor" href="#html5-ui-库" aria-hidden="true">#</a> Html5 UI 库</h3><h4 id="_1-jquery-mobile-框架" tabindex="-1"><a class="header-anchor" href="#_1-jquery-mobile-框架" aria-hidden="true">#</a> 1.jquery mobile 框架</h4><p>jQuery Mobile 是 jQuery 在手机上和平板设备上的版本。jQuery Mobile 不仅会给主流移动平台带来 jQuery 核心库，而且会发布一个完整统一的 jQuery 移动 UI 框架。支持全球主流的移动平台。</p><h4 id="_2-bootstrap-框架" tabindex="-1"><a class="header-anchor" href="#_2-bootstrap-框架" aria-hidden="true">#</a> 2.bootstrap 框架</h4>',4),g={href:"http://www.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.youzhan.org/",target:"_blank",rel:"noopener noreferrer"},v=e("h4",{id:"_3-ionic-框架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-ionic-框架","aria-hidden":"true"},"#"),a(" 3.ionic 框架")],-1),f=e("p",null,"Ionic 是一个强大的 HTML5 应用程序开发框架，可以帮助您使用 Web 技术，比如 HTML、CSS 和 Javascript 构建接近原生体验的移动应用程序。Ionic 主要关注外观和体验，以及和你的应用程序的 UI 交互，特别适合用于基于 Hybird 模式的 HTML5 移动应用程序开发。",-1),w={href:"http://www.ionic-china.com/",target:"_blank",rel:"noopener noreferrer"},x=e("h4",{id:"_4-mui-框架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-mui-框架","aria-hidden":"true"},"#"),a(" 4.mui 框架")],-1),I={href:"https://github.com/dcloudio/mui",target:"_blank",rel:"noopener noreferrer"},j={href:"http://dev.dcloud.net.cn/mui/",target:"_blank",rel:"noopener noreferrer"},U=s(`<h4 id="_5-h-ui" tabindex="-1"><a class="header-anchor" href="#_5-h-ui" aria-hidden="true">#</a> 5.H-ui</h4><ul><li>官方地址：http://www.h-ui.net/</li><li>描述：轻量级前端框架，简单免费，兼容性好，服务中国网站。基于 jQuery</li><li>GitHub 地址：https://github.com/jackying/h-ui</li><li>组件库：</li><li>观点：无亮点,借鉴第三方插件完成</li></ul><h4 id="_6-layui" tabindex="-1"><a class="header-anchor" href="#_6-layui" aria-hidden="true">#</a> 6.layui</h4><ul><li>官方地址：http://www.layui.com/</li><li>描述：更多是为服务端程序员量身定做，你无需涉足各种前端工具的复杂配置，只需面对浏览器本身，让一切你所需要的元素与交互，从这里信手拈来。</li><li>layui 兼容人类正在使用的全部浏览器（IE6/7 除外），可作为 PC 端后台系统与前台界面的速成开发方案。经典模块化前端框架</li><li>组件库： <ul><li>GitHub：https://github.com/sentsin/layui/</li><li>基础引入：layui.css layui.js</li></ul></li></ul><h4 id="_7-uikit-yootheme-团队" tabindex="-1"><a class="header-anchor" href="#_7-uikit-yootheme-团队" aria-hidden="true">#</a> 7.uiKit（YOOtheme 团队）</h4><ul><li>官网地址：http://www.getuikit.net/</li><li>描述：一款轻量级、模块化的前端框架，可快速构建强大的 web 前端界面。</li><li>UIkit 兼容 IE9 以上现代浏览器。在 IE8 及其以下版本中，所有 JavaScript 都会失效。依赖 jQuery</li><li>组件库： <ul><li>GitHub 地址：https://github.com/uikit/uikit</li><li>基础引入：</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>　　　　<span class="token comment">//CDN:</span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;//cdn.bootcss.com/uikit/2.25.0/css/uikit.css&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;//cdn.bootcss.com/uikit/2.25.0/js/uikit.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-jquery-ui" tabindex="-1"><a class="header-anchor" href="#_8-jquery-ui" aria-hidden="true">#</a> 8.jQuery UI</h4><ul><li>官方网址：http://jqueryui.com/</li><li>组件库：其他基于 jQuery 衍生出来的模板：</li><li>BUI：基于 jQuery+KISSY UI:http://www.builive.com/ 　　　　 EasyUI:：http://www.jeasyui.net/</li><li>描述：使用 easyui 你不需要写很多代码，你只需要通过编写一些简单 HTML 标记，就可以定义用户界面。</li><li>DWZ JUI:http://jui.org/</li></ul><h4 id="_9-weui" tabindex="-1"><a class="header-anchor" href="#_9-weui" aria-hidden="true">#</a> 9.WeUI</h4><ul><li>微信官方 为微信 Web 服务量身设计</li><li>精而美适合简单公众号开发使用</li><li>网址:https://weui.io</li></ul><h3 id="安卓-ios-原生" tabindex="-1"><a class="header-anchor" href="#安卓-ios-原生" aria-hidden="true">#</a> 安卓 IOS 原生</h3><h4 id="_1-intel-xdk-框架" tabindex="-1"><a class="header-anchor" href="#_1-intel-xdk-框架" aria-hidden="true">#</a> 1.Intel XDK 框架</h4><p>基于 web 的编程工具，可帮助开发者为 Android 和 iOS 开发移动应用。这款免费的软件名为 Intel XDK，实际上这是今年 2 月份 Intel 收购的 AppMobi 软件的重新包装后的版本，所以并非新鲜事物。开发者可用此软件开发基于 HTML5 的应用，并 用于移动设备中。</p><h4 id="_2-appcelerator-titanium-框架" tabindex="-1"><a class="header-anchor" href="#_2-appcelerator-titanium-框架" aria-hidden="true">#</a> 2.Appcelerator Titanium 框架</h4><p>Titanium 是一个跟手机平台无关的开发框架，用来开发具有本地应用效果的 Web 应用。当前主要支持 iPhone 和 Android 手机。</p><h4 id="_3-phonegap-框架" tabindex="-1"><a class="header-anchor" href="#_3-phonegap-框架" aria-hidden="true">#</a> 3.PhoneGap 框架</h4><p>跨平台开发工具，从 iOS、Android、BB10、Windows Phone 到 Amazon Fire OS、Tizen 等，各大主流移动平台一应俱全，还能让开发者充分利用地理位置、加速器、联系人、声音等手机核心功能。 业界很多主流的移动开发框架均源于 PhoneGap。较著名的有 Worklight、appMobi、WeX5 等。其中 WeX5 为国内打造，完全 Apache 开源，在融合 Phonegap 的基础上，做了深度优化，具备接近 Native app 的性能，同时开发便捷性也较好。</p><h3 id="app-框架" tabindex="-1"><a class="header-anchor" href="#app-框架" aria-hidden="true">#</a> App 框架</h3><h4 id="_1-react-native" tabindex="-1"><a class="header-anchor" href="#_1-react-native" aria-hidden="true">#</a> 1.react-native</h4><figure><img src="http://reactnative.cn/" alt="中文官网地址" tabindex="0" loading="lazy"><figcaption>中文官网地址</figcaption></figure><ul><li>描述：React Native 使你能够在 Javascript 和 React 的基础上获得完全一致的开发体验，构建世界一流的原生 APP。</li></ul><p>React Native 着力于提高多平台开发的开发效率 —— 仅需学习一次，编写任何平台。(Learn once, write anywhere)</p><ul><li>GitHub 地址：https://github.com/facebook/react-native</li></ul><h4 id="_2-weex" tabindex="-1"><a class="header-anchor" href="#_2-weex" aria-hidden="true">#</a> 2.weex</h4><figure><img src="http://weex.apache.org/cn/" alt="官网地址" tabindex="0" loading="lazy"><figcaption>官网地址</figcaption></figure><ul><li>描述：Weex 提供强大的跨平台能力，可以使用相同的 API 开发 Web，Android 和 iOS 应用。</li></ul><p>同时，我们对接口了丰富的扩展能力。</p><h4 id="_3-vux" tabindex="-1"><a class="header-anchor" href="#_3-vux" aria-hidden="true">#</a> 3.vux</h4><ul><li><p>中文官网网址:https://doc.vux.li/zh-CN/</p></li><li><p>基于 Vue2.0</p></li><li><p>描述:移动端 UI 组件库，主要服务于微信页面。</p></li></ul><h4 id="_4-design-rn" tabindex="-1"><a class="header-anchor" href="#_4-design-rn" aria-hidden="true">#</a> 4.design-rn</h4>`,31),y=e("li",null,"Ant Design Mobile RN of React",-1),q=e("li",null,"适合于中大型产品应用",-1),A=e("li",null,"适合于基于 react / preact / react-native 的多终端应用",-1),M={href:"https://rn.mobile.ant.design/docs/react/introduce-cn",target:"_blank",rel:"noopener noreferrer"},S=s('<h3 id="混合开发-ui-框架" tabindex="-1"><a class="header-anchor" href="#混合开发-ui-框架" aria-hidden="true">#</a> 混合开发 UI 框架</h3><h4 id="_1-ionic" tabindex="-1"><a class="header-anchor" href="#_1-ionic" aria-hidden="true">#</a> 1.ionic</h4><ul><li>中文官网网址：http://www.ionic-china.com/</li><li>基于 angular</li><li>描述：ionic 是一个强大的 HTML5 应用程序开发框架(HTML5 Hybrid Mobile App Framework)。</li></ul><p>ionic 主要关注外观和体验，以及和你的应用程序的 UI 交互，特别适合用于基于 Hybird 模式的 HTML5 移动应用程序开发。 ionic 是一个轻量的手机 UI 库，具有速度快，界面现代化、美观等特点。</p><h4 id="_2-onsenui" tabindex="-1"><a class="header-anchor" href="#_2-onsenui" aria-hidden="true">#</a> 2.OnsenUI</h4><ul><li>官网地址：https://onsen.io/</li><li>描述：用来构建混合移动端 APP 的 HTML5 UI 框架</li><li>GitHub 地址：https://github.com/OnsenUI/OnsenUI</li></ul><h4 id="_3-sencha-touch-框架" tabindex="-1"><a class="header-anchor" href="#_3-sencha-touch-框架" aria-hidden="true">#</a> 3.Sencha Touch 框架</h4>',7),H={href:"http://www.sencha-china.com/",target:"_blank",rel:"noopener noreferrer"},N=e("h4",{id:"_4-framework7-阿里巴巴",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-framework7-阿里巴巴","aria-hidden":"true"},"#"),a(" 4.Framework7(阿里巴巴)")],-1),z=e("li",null,"Framework7 并不能兼容所有的设备。她只专注于为 iOS 和 Google Material 设计提供最好的体验。",-1),T={href:"http://www.framework7.cn/vue/templates.html",target:"_blank",rel:"noopener noreferrer"},V=s(`<h4 id="_5-sui-mobile-淘宝" tabindex="-1"><a class="header-anchor" href="#_5-sui-mobile-淘宝" aria-hidden="true">#</a> 5.SUI mobile（淘宝）</h4><ul><li>SUI Mobile 是一套基于 Framework7 开发的 UI 库。它非常轻量、精美，只需要引入我们的 CDN 文件就可以使用，并且能兼容到 iOS 6.0+ 和 Android 4.0+，非常适合开发跨平台 Web App。</li><li>描述：一套基于 bootstrap 开发的前端组件库，同时她也是一套设计规范。基于 jquery</li><li>组件库： <img src="http://m.sui.taobao.org/" alt="官网" loading="lazy"></li><li>GitHub：https://github.com/sdc-alibaba/sui</li><li>基础引入：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>　　　　<span class="token comment">//CDN:</span>

<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">&quot;http://g.alicdn.com/sj/dpl/1.5.1/css/sui.min.css&quot;</span> rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;http://g.alicdn.com/sj/lib/jquery/dist/jquery.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;http://g.alicdn.com/sj/dpl/1.5.1/js/sui.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>观点：偏向设计规范，组件库相对简单。</li></ul><h4 id="_6-frozen-ui" tabindex="-1"><a class="header-anchor" href="#_6-frozen-ui" aria-hidden="true">#</a> 6.Frozen UI</h4><p>专注于移动 web 的 UI 框架，基于腾讯手机 QQ 规范。目前 QQ 会员前端开发组所用的通用样式库 有很多酷炫好玩的案例秀 http://frozenui.github.io/</p><h4 id="_7-amaze-ui-touch" tabindex="-1"><a class="header-anchor" href="#_7-amaze-ui-touch" aria-hidden="true">#</a> 7.Amaze UI Touch</h4><p>http://t.amazeui.org/#/?_k=mxysvs Amaze UI Touch 专为移动打造，在技术实现、交互设计上只考虑主流移动设备，保证代码轻、性能高。 跨屏前端框架 http://amazeui.org/</p><h4 id="_8-gmu" tabindex="-1"><a class="header-anchor" href="#_8-gmu" aria-hidden="true">#</a> 8.GMU</h4><p>GMU 是基于 zepto 的 mobile UI 组件库，提供 webapp、pad 端简单易用的 UI 组件! 百度团队出品。但是好久没更新了 http://cloudajs.org/ 推荐手机 H5 应用快速开发 UI 库</p><ul><li>Framework7、 Amaze UI 强大</li><li>SUI、MUI、WeUI、Frozen UI 简单实用 PC 端 UI 框架</li></ul>`,11);function W(P,L){const i=r("ExternalLinkIcon");return o(),l("div",null,[c,e("ul",null,[h,u,e("li",null,[a("数据驱动，简单易使用 "),e("a",d,[a("网址"),n(i)])])]),b,e("p",null,[a("Mobile Angular UI 是使用 bootstrap 3 和 AngularJS 的响应式移动开发 HTML5 框架。 "),e("a",m,[a("官网"),n(i)])]),_,e("p",null,[e("a",g,[a("官网"),n(i)]),e("a",k,[a("实例"),n(i)])]),v,f,e("p",null,[e("a",w,[a("官网"),n(i)])]),x,e("p",null,[a("最接近原生 APP 体验的高性能前端框架，具有以下特点：轻量 　　追求性能体验，是我们开始启动 MUI 项目的首要目标，轻量必然是重要特征; 　　 MUI 不依赖任何第三方 JS 库，压缩后的 JS 和 CSS 文件仅有 100+K 和 60+K HBuilder 团队 "),e("a",I,[a("github"),n(i)]),e("a",j,[a("官网"),n(i)])]),U,e("ul",null,[y,q,A,e("li",null,[a("适合不同 UI 风格的高度定制需求的应用 "),e("a",M,[a("官网地址"),n(i)])])]),S,e("p",null,[a("Sencha Touch 框架是世界上第一个基于 HTML5 的 Mobile App 框架。Sencha Touch 可以让你的 Web App 看起来像 Native App。美丽的用户界面组件和丰富的数据管理，全部基于最新的 HTML5 和 CSS3 的 WEB 标准，全面兼容 Android 和 Apple iOS 设备。提供了丰富的 WEB UI 组件，可以快速的开发出运行于移动终端的应用程序。 "),e("a",H,[a("官网"),n(i)])]),N,e("ul",null,[z,e("li",null,[a("如果你想开发 iOS 或者 Android 混合应用（Phonegap）或者你想开发 iOS 和 Google Material 风格的 WEB APP，那么 Framework7 将会是你的首选。 阿里巴巴旗下 http://framework7.taobao.org/ http://framework7.io/ "),e("a",T,[a("Framework7 Vue"),n(i)])])]),V])}const O=t(p,[["render",W],["__file","HTML5移动开发UI框架.html.vue"]]);export{O as default};
