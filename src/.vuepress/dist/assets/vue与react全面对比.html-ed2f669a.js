const t=JSON.parse(`{"key":"v-b56c971e","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vue%E4%B8%8Ereact%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94.html","title":"","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2019-06-15T00:00:00.000Z","category":["转载"],"tag":["随笔"],"description":"vue 与 react 全面对比 生命周期 第一阶段：组件挂载阶段 vue 说明 react 说明 props 接收父组件参数 static defalultProps 接收父组件参数 data 组件内部状态初始化 constructor 组件内部状态初始化 this.state={} computed data 中的属性扩展，同 data 中的数据一样，属于组件内部状态属性，不同的是：计算属性，当依赖值不发生改变时，属性值被缓存不变动 methods 组件内部事件写在这里 watch 观察模式，同计算属性类似，可以监听 data 中属性的变化 beforeCreate 组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用 created （实例创建完成后立即被调用，实例已完成如下配置：数据观察 data observe，属性和方法的运算，event/watcher 回调。$el 属性不可见） beforeCreate 组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用 componentWillMount 组件渲染前被调用 beforeMount 组件挂载之前调用 componentWillMount 组件渲染前被调用 render react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行。此时就不能更改 state 了 mounted 不会承诺所有的子组件都一起被挂载，如果希望等到整个试图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted，mounted(){ this.$nextTick(()=&gt; componentDidMount 组件挂载成功，第一次渲染后调用，组件已经生成在对应的 dom 结构，通过 this.getDOMNode()获取节点，可以在这个周期时获取服务端数据，redux 模式，在这里绑定数据","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E8%BD%AC%E8%BD%BD/vue%E4%B8%8Ereact%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:description","content":"vue 与 react 全面对比 生命周期 第一阶段：组件挂载阶段 vue 说明 react 说明 props 接收父组件参数 static defalultProps 接收父组件参数 data 组件内部状态初始化 constructor 组件内部状态初始化 this.state={} computed data 中的属性扩展，同 data 中的数据一样，属于组件内部状态属性，不同的是：计算属性，当依赖值不发生改变时，属性值被缓存不变动 methods 组件内部事件写在这里 watch 观察模式，同计算属性类似，可以监听 data 中属性的变化 beforeCreate 组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用 created （实例创建完成后立即被调用，实例已完成如下配置：数据观察 data observe，属性和方法的运算，event/watcher 回调。$el 属性不可见） beforeCreate 组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用 componentWillMount 组件渲染前被调用 beforeMount 组件挂载之前调用 componentWillMount 组件渲染前被调用 render react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行。此时就不能更改 state 了 mounted 不会承诺所有的子组件都一起被挂载，如果希望等到整个试图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted，mounted(){ this.$nextTick(()=&gt; componentDidMount 组件挂载成功，第一次渲染后调用，组件已经生成在对应的 dom 结构，通过 this.getDOMNode()获取节点，可以在这个周期时获取服务端数据，redux 模式，在这里绑定数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"随笔"}],["meta",{"property":"article:published_time","content":"2019-06-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"vue 与 react 全面对比","slug":"vue-与-react-全面对比","link":"#vue-与-react-全面对比","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"第一阶段：组件挂载阶段","slug":"第一阶段-组件挂载阶段","link":"#第一阶段-组件挂载阶段","children":[]},{"level":3,"title":"第二阶段：组件更新阶段","slug":"第二阶段-组件更新阶段","link":"#第二阶段-组件更新阶段","children":[]},{"level":3,"title":"第三阶段：组件卸载阶段","slug":"第三阶段-组件卸载阶段","link":"#第三阶段-组件卸载阶段","children":[]}]},{"level":2,"title":"组件传值","slug":"组件传值","link":"#组件传值","children":[{"level":3,"title":"react","slug":"react","link":"#react","children":[]},{"level":3,"title":"vue","slug":"vue","link":"#vue","children":[]}]},{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[{"level":3,"title":"react","slug":"react-1","link":"#react-1","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":8.28,"words":2485},"filePathRelative":"前端开发/转载/vue与react全面对比.md","localizedDate":"2019年6月15日","excerpt":"<h2> vue 与 react 全面对比</h2>\\n<h2> 生命周期</h2>\\n<h3> 第一阶段：组件挂载阶段</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>vue</th>\\n<th>说明</th>\\n<th>react</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>props</td>\\n<td>接收父组件参数</td>\\n<td>static defalultProps</td>\\n<td>接收父组件参数</td>\\n</tr>\\n<tr>\\n<td>data</td>\\n<td>组件内部状态初始化</td>\\n<td>constructor</td>\\n<td>组件内部状态初始化 this.state={}</td>\\n</tr>\\n<tr>\\n<td>computed</td>\\n<td>data 中的属性扩展，同 data 中的数据一样，属于组件内部状态属性，不同的是：计算属性，当依赖值不发生改变时，属性值被缓存不变动</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>methods</td>\\n<td>组件内部事件写在这里</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>watch</td>\\n<td>观察模式，同计算属性类似，可以监听 data 中属性的变化</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>beforeCreate</td>\\n<td>组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>created</td>\\n<td>（实例创建完成后立即被调用，实例已完成如下配置：数据观察 data observe，属性和方法的运算，event/watcher 回调。$el 属性不可见）</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>beforeCreate</td>\\n<td>组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用</td>\\n<td>componentWillMount</td>\\n<td>组件渲染前被调用</td>\\n</tr>\\n<tr>\\n<td>beforeMount</td>\\n<td>组件挂载之前调用</td>\\n<td>componentWillMount</td>\\n<td>组件渲染前被调用</td>\\n</tr>\\n<tr>\\n<td>render</td>\\n<td>react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行。此时就不能更改 state 了</td>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>mounted</td>\\n<td>不会承诺所有的子组件都一起被挂载，如果希望等到整个试图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted，mounted(){ this.$nextTick(()=&gt;</td>\\n<td>componentDidMount</td>\\n<td>组件挂载成功，第一次渲染后调用，组件已经生成在对应的 dom 结构，通过 this.getDOMNode()获取节点，可以在这个周期时获取服务端数据，redux 模式，在这里绑定数据</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};
