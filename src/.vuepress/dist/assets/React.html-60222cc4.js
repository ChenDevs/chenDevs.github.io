const e=JSON.parse(`{"key":"v-3396cd48","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React.html","title":"React","lang":"zh-CN","frontmatter":{"title":"React","tag":"React","date":"2018-08-08T00:00:00.000Z","category":["前端框架"],"description":"React 1.什么是 React 用来构建 UI 的 JavaScript 库 React 不是一个 MVC 框架，仅仅是视图（V）层的库 2.特点 1 使用 JSX 语法 创建组件，实现组件化开发，为函数式的 UI 编程方式打开了大门 2 性能高的让人称赞：通过 diff算法 和 虚拟DOM 实现视图的高效更新 3 HTML 仅仅是个开始","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"React"}],["meta",{"property":"og:description","content":"React 1.什么是 React 用来构建 UI 的 JavaScript 库 React 不是一个 MVC 框架，仅仅是视图（V）层的库 2.特点 1 使用 JSX 语法 创建组件，实现组件化开发，为函数式的 UI 编程方式打开了大门 2 性能高的让人称赞：通过 diff算法 和 虚拟DOM 实现视图的高效更新 3 HTML 仅仅是个开始"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2018-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"React","slug":"react","link":"#react","children":[]},{"level":3,"title":"Diff 算法的说明 - 1","slug":"diff-算法的说明-1","link":"#diff-算法的说明-1","children":[]},{"level":3,"title":"Diff 算法的说明 - 2","slug":"diff-算法的说明-2","link":"#diff-算法的说明-2","children":[]},{"level":3,"title":"Diff 算法的说明 - 3","slug":"diff-算法的说明-3","link":"#diff-算法的说明-3","children":[]},{"level":3,"title":"key 属性","slug":"key-属性","link":"#key-属性","children":[]},{"level":3,"title":"key demo","slug":"key-demo","link":"#key-demo","children":[]},{"level":2,"title":"React 的基本使用","slug":"react-的基本使用","link":"#react-的基本使用","children":[{"level":3,"title":"API 说明","slug":"api-说明","link":"#api-说明","children":[]},{"level":3,"title":"createElement()的问题","slug":"createelement-的问题","link":"#createelement-的问题","children":[]},{"level":3,"title":"JSX 的基本使用","slug":"jsx-的基本使用","link":"#jsx-的基本使用","children":[]}]},{"level":2,"title":"JSX 的注意点","slug":"jsx-的注意点","link":"#jsx-的注意点","children":[]},{"level":2,"title":"React 组件","slug":"react-组件","link":"#react-组件","children":[{"level":3,"title":"React 创建组件的两种方式","slug":"react-创建组件的两种方式","link":"#react-创建组件的两种方式","children":[]}]},{"level":2,"title":"给组件传递数据 - 父子组件传递数据","slug":"给组件传递数据-父子组件传递数据","link":"#给组件传递数据-父子组件传递数据","children":[]},{"level":2,"title":"封装组件到独立的文件中","slug":"封装组件到独立的文件中","link":"#封装组件到独立的文件中","children":[]},{"level":2,"title":"props 和 state","slug":"props-和-state","link":"#props-和-state","children":[{"level":3,"title":"props","slug":"props","link":"#props","children":[]},{"level":3,"title":"state","slug":"state","link":"#state","children":[]}]},{"level":2,"title":"JSX 语法转化过程","slug":"jsx-语法转化过程","link":"#jsx-语法转化过程","children":[]},{"level":2,"title":"评论列表案例","slug":"评论列表案例","link":"#评论列表案例","children":[]},{"level":2,"title":"style 样式","slug":"style-样式","link":"#style-样式","children":[]},{"level":2,"title":"相关文章","slug":"相关文章","link":"#相关文章","children":[]},{"level":2,"title":"ES6 中 class 关键字的使用","slug":"es6-中-class-关键字的使用","link":"#es6-中-class-关键字的使用","children":[]},{"level":2,"title":"组件的生命周期","slug":"组件的生命周期","link":"#组件的生命周期","children":[{"level":3,"title":"组件生命周期函数总览","slug":"组件生命周期函数总览","link":"#组件生命周期函数总览","children":[]},{"level":3,"title":"组件生命周期 - 创建阶段(Mounting)","slug":"组件生命周期-创建阶段-mounting","link":"#组件生命周期-创建阶段-mounting","children":[]},{"level":3,"title":"组件生命周期 - 运行阶段（Updating）","slug":"组件生命周期-运行阶段-updating","link":"#组件生命周期-运行阶段-updating","children":[]},{"level":3,"title":"组件生命周期 - 卸载阶段（Unmounting）","slug":"组件生命周期-卸载阶段-unmounting","link":"#组件生命周期-卸载阶段-unmounting","children":[]}]},{"level":2,"title":"React - createClass（知道）","slug":"react-createclass-知道","link":"#react-createclass-知道","children":[]},{"level":2,"title":"state 和 setState","slug":"state-和-setstate","link":"#state-和-setstate","children":[]},{"level":2,"title":"组件绑定事件","slug":"组件绑定事件","link":"#组件绑定事件","children":[{"level":3,"title":"React 中的事件机制 - 推荐","slug":"react-中的事件机制-推荐","link":"#react-中的事件机制-推荐","children":[]},{"level":3,"title":"JS 原生方式 - 知道即可","slug":"js-原生方式-知道即可","link":"#js-原生方式-知道即可","children":[]}]},{"level":2,"title":"事件绑定中的 this","slug":"事件绑定中的-this","link":"#事件绑定中的-this","children":[{"level":3,"title":"通过 bind 绑定","slug":"通过-bind-绑定","link":"#通过-bind-绑定","children":[]},{"level":3,"title":"通过箭头函数绑定","slug":"通过箭头函数绑定","link":"#通过箭头函数绑定","children":[]}]},{"level":2,"title":"受控组件","slug":"受控组件","link":"#受控组件","children":[]},{"level":2,"title":"评论列表案例","slug":"评论列表案例-1","link":"#评论列表案例-1","children":[]},{"level":2,"title":"props 校验","slug":"props-校验","link":"#props-校验","children":[]},{"level":2,"title":"React 单向数据流","slug":"react-单向数据流","link":"#react-单向数据流","children":[{"level":3,"title":"组件通讯","slug":"组件通讯","link":"#组件通讯","children":[]},{"level":3,"title":"Context 特性","slug":"context-特性","link":"#context-特性","children":[]}]},{"level":2,"title":"项目中使用的技术点","slug":"项目中使用的技术点","link":"#项目中使用的技术点","children":[]},{"level":2,"title":"ant-design - UI 组件库","slug":"ant-design-ui-组件库","link":"#ant-design-ui-组件库","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"按需加载 - 推荐使用方式","slug":"按需加载-推荐使用方式","link":"#按需加载-推荐使用方式","children":[]}]},{"level":2,"title":"react-router","slug":"react-router","link":"#react-router","children":[{"level":3,"title":"基本概念说明","slug":"基本概念说明","link":"#基本概念说明","children":[]},{"level":3,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":3,"title":"注意点","slug":"注意点","link":"#注意点","children":[]},{"level":3,"title":"路由参数","slug":"路由参数","link":"#路由参数","children":[]},{"level":3,"title":"路由跳转","slug":"路由跳转","link":"#路由跳转","children":[]}]},{"level":2,"title":"fetch","slug":"fetch","link":"#fetch","children":[{"level":3,"title":"fetch 基本使用","slug":"fetch-基本使用","link":"#fetch-基本使用","children":[]}]},{"level":2,"title":"跨域获取数据的三种常用方式","slug":"跨域获取数据的三种常用方式","link":"#跨域获取数据的三种常用方式","children":[{"level":3,"title":"JSONP","slug":"jsonp","link":"#jsonp","children":[]},{"level":3,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":3,"title":"CORS - 服务器端配合","slug":"cors-服务器端配合","link":"#cors-服务器端配合","children":[]}]},{"level":2,"title":"相关文章","slug":"相关文章-1","link":"#相关文章-1","children":[{"level":3,"title":"API 地址","slug":"api-地址","link":"#api-地址","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":27.11,"words":8134},"filePathRelative":"前端开发/前端框架/React/React.md","localizedDate":"2018年8月8日","excerpt":"<h3> React</h3>\\n<h4> 1.什么是 React</h4>\\n<ul>\\n<li>用来构建 UI 的 JavaScript 库</li>\\n<li>React 不是一个 MVC 框架，仅仅是视图（V）层的库<br>\\n<img src=\\"https://facebook.github.io/react/\\" alt=\\"React 官网\\" loading=\\"lazy\\"><br>\\n<img src=\\"https://doc.react-china.org/\\" alt=\\"React 中文文档\\" loading=\\"lazy\\"></li>\\n</ul>\\n<h4> 2.特点</h4>\\n<ul>\\n<li>1 使用 JSX 语法 创建组件，实现组件化开发，<strong>为函数式的 UI 编程方式打开了大门</strong></li>\\n<li>2 性能高的让人称赞：通过 <code>diff算法</code> 和 <code>虚拟DOM</code> 实现视图的高效更新</li>\\n<li>3 HTML 仅仅是个开始</li>\\n</ul>","autoDesc":true}`);export{e as data};
