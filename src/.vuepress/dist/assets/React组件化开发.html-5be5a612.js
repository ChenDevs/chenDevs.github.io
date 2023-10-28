const e=JSON.parse(`{"key":"v-26da8c91","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91.html","title":"React组件化开发","lang":"zh-CN","frontmatter":{"title":"React组件化开发","category":["前端框架","React"],"order":3,"icon":"zujian","description":"React 的组件化 类组件 类组件的定义有如下要求： 组件的名称是大写字符开头（无论类组件还是函数组件） 类组件需要继承自 React.Component 类组件必须实现 render 函数 super(props),super()以及不写 super 的区别 如果用到了 constructor 就必须写 super(),是用来初始化 this 的 如果你在 constructor 中要使用 this.props,就必须给 super 加参数：super(props) 无论有没有 constructor，在 render 中 this.props 都是可以使用的，这是 React 默认实现的 如果没用到 constructor,是可以不写的；React 会默认添加一个空的 constructor。","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/React%E7%BB%84%E4%BB%B6%E5%8C%96%E5%BC%80%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"React组件化开发"}],["meta",{"property":"og:description","content":"React 的组件化 类组件 类组件的定义有如下要求： 组件的名称是大写字符开头（无论类组件还是函数组件） 类组件需要继承自 React.Component 类组件必须实现 render 函数 super(props),super()以及不写 super 的区别 如果用到了 constructor 就必须写 super(),是用来初始化 this 的 如果你在 constructor 中要使用 this.props,就必须给 super 加参数：super(props) 无论有没有 constructor，在 render 中 this.props 都是可以使用的，这是 React 默认实现的 如果没用到 constructor,是可以不写的；React 会默认添加一个空的 constructor。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React组件化开发\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"React 的组件化","slug":"react-的组件化","link":"#react-的组件化","children":[{"level":3,"title":"类组件","slug":"类组件","link":"#类组件","children":[]},{"level":3,"title":"函数组件","slug":"函数组件","link":"#函数组件","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"常用生命周期函数","slug":"常用生命周期函数","link":"#常用生命周期函数","children":[]}]},{"level":2,"title":"组件间的通信","slug":"组件间的通信","link":"#组件间的通信","children":[{"level":3,"title":"父组件传递子组件","slug":"父组件传递子组件","link":"#父组件传递子组件","children":[]},{"level":3,"title":"参数校验证 propTypes","slug":"参数校验证-proptypes","link":"#参数校验证-proptypes","children":[]},{"level":3,"title":"子组件传递父组件","slug":"子组件传递父组件","link":"#子组件传递父组件","children":[]},{"level":3,"title":"在 React 中实现 slot","slug":"在-react-中实现-slot","link":"#在-react-中实现-slot","children":[]},{"level":3,"title":"跨组件通信 Context","slug":"跨组件通信-context","link":"#跨组件通信-context","children":[]},{"level":3,"title":"全局事件传递","slug":"全局事件传递","link":"#全局事件传递","children":[]}]},{"level":2,"title":"setState","slug":"setstate","link":"#setstate","children":[{"level":3,"title":"为什么使用 SetState","slug":"为什么使用-setstate","link":"#为什么使用-setstate","children":[]},{"level":3,"title":"setState 异步更新","slug":"setstate-异步更新","link":"#setstate-异步更新","children":[]},{"level":3,"title":"如何获取异步的结果","slug":"如何获取异步的结果","link":"#如何获取异步的结果","children":[]},{"level":3,"title":"setState 一定是异步吗?","slug":"setstate-一定是异步吗","link":"#setstate-一定是异步吗","children":[]},{"level":3,"title":"数据的合并","slug":"数据的合并","link":"#数据的合并","children":[]},{"level":3,"title":"多个 state 的合并","slug":"多个-state-的合并","link":"#多个-state-的合并","children":[]}]},{"level":2,"title":"React 的更新机制","slug":"react-的更新机制","link":"#react-的更新机制","children":[{"level":3,"title":"react的渲染流程","slug":"react的渲染流程","link":"#react的渲染流程","children":[]},{"level":3,"title":"react的更新流程","slug":"react的更新流程","link":"#react的更新流程","children":[]}]},{"level":2,"title":"React 性能优化","slug":"react-性能优化","link":"#react-性能优化","children":[{"level":3,"title":"列表中 keys 的作用","slug":"列表中-keys-的作用","link":"#列表中-keys-的作用","children":[]},{"level":3,"title":"shouldComponentUpdate","slug":"shouldcomponentupdate","link":"#shouldcomponentupdate","children":[]},{"level":3,"title":"PureComponent","slug":"purecomponent","link":"#purecomponent","children":[]},{"level":3,"title":"高阶组件 memo","slug":"高阶组件-memo","link":"#高阶组件-memo","children":[]}]},{"level":2,"title":"refs","slug":"refs","link":"#refs","children":[{"level":3,"title":"ref 的转发","slug":"ref-的转发","link":"#ref-的转发","children":[]}]},{"level":2,"title":"React 表单处理","slug":"react-表单处理","link":"#react-表单处理","children":[{"level":3,"title":"注意点","slug":"注意点","link":"#注意点","children":[]}]},{"level":2,"title":"高阶组件","slug":"高阶组件","link":"#高阶组件","children":[{"level":3,"title":"应用 1:props 的增强","slug":"应用-1-props-的增强","link":"#应用-1-props-的增强","children":[]},{"level":3,"title":"应用 2:渲染判断鉴权","slug":"应用-2-渲染判断鉴权","link":"#应用-2-渲染判断鉴权","children":[]},{"level":3,"title":"应用 3:生命周期劫持","slug":"应用-3-生命周期劫持","link":"#应用-3-生命周期劫持","children":[]},{"level":3,"title":"高阶组件的意义","slug":"高阶组件的意义","link":"#高阶组件的意义","children":[]}]},{"level":2,"title":"Portals 的使用","slug":"portals-的使用","link":"#portals-的使用","children":[{"level":3,"title":"案例：Modal","slug":"案例-modal","link":"#案例-modal","children":[]}]},{"level":2,"title":"fragment","slug":"fragment","link":"#fragment","children":[]},{"level":2,"title":"StrictMode","slug":"strictmode","link":"#strictmode","children":[{"level":3,"title":"严格模式检查什么？","slug":"严格模式检查什么","link":"#严格模式检查什么","children":[]}]},{"level":2,"title":"render Props","slug":"render-props","link":"#render-props","children":[{"level":3,"title":"Render props 与 React.PureComponent 同时使用","slug":"render-props-与-react-purecomponent-同时使用","link":"#render-props-与-react-purecomponent-同时使用","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":25.04,"words":7511},"filePathRelative":"前端开发/前端框架/React/React组件化开发.md","localizedDate":"2023年10月27日","excerpt":"<h2> React 的组件化</h2>\\n<h3> 类组件</h3>\\n<p>类组件的定义有如下要求：</p>\\n<ul>\\n<li>组件的名称是大写字符开头（无论类组件还是函数组件）</li>\\n<li>类组件需要继承自 <code>React.Component</code></li>\\n<li>类组件必须实现 <code>render</code> 函数</li>\\n</ul>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">super(props),super()以及不写 super 的区别</p>\\n<ul>\\n<li>如果用到了 <code>constructor</code> 就必须写 <code>super()</code>,是用来初始化 <code>this</code> 的</li>\\n<li>如果你在 <code>constructor</code> 中要使用 <code>this.props</code>,就必须给 <code>super</code> 加参数：<code>super(props)</code></li>\\n<li><strong>无论有没有 <code>constructor</code>，在 <code>render</code> 中 <code>this.props</code> 都是可以使用的，这是 React 默认实现的</strong></li>\\n<li>如果没用到 <code>constructor</code>,是可以不写的；React 会默认添加一个空的 <code>constructor</code>。</li>\\n</ul>\\n</div>","autoDesc":true}`);export{e as data};
