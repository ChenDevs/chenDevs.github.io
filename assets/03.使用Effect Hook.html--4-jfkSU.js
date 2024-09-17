const e=JSON.parse(`{"key":"v-16853c89","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/03.Hook/03.%E4%BD%BF%E7%94%A8Effect%20Hook.html","title":"使用Effect Hook","lang":"zh-CN","frontmatter":{"title":"使用Effect Hook","date":"2021-04-06T19:13:06.000Z","category":["《React》笔记","Hook"],"description":"如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount(挂载完成)，componentDidUpdate(更新完成) 和 componentWillUnmount（即将销毁前） 这三个函数的组合。 Did : 做了... Will: 将要... 数据获取，设置订阅以及手动更改...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/React/03.Hook/03.%E4%BD%BF%E7%94%A8Effect%20Hook.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"使用Effect Hook"}],["meta",{"property":"og:description","content":"如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount(挂载完成)，componentDidUpdate(更新完成) 和 componentWillUnmount（即将销毁前） 这三个函数的组合。 Did : 做了... Will: 将要... 数据获取，设置订阅以及手动更改..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:published_time","content":"2021-04-06T19:13:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Effect Hook\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-06T19:13:06.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"无需清除的 effect","slug":"无需清除的-effect","link":"#无需清除的-effect","children":[{"level":3,"title":"使用 class 的示例","slug":"使用-class-的示例","link":"#使用-class-的示例","children":[]},{"level":3,"title":"使用 Hook 的示例","slug":"使用-hook-的示例","link":"#使用-hook-的示例","children":[]},{"level":3,"title":"不同之处","slug":"不同之处","link":"#不同之处","children":[]}]},{"level":2,"title":"需要清除的 effect","slug":"需要清除的-effect","link":"#需要清除的-effect","children":[{"level":3,"title":"使用 Class 的示例","slug":"使用-class-的示例-1","link":"#使用-class-的示例-1","children":[]},{"level":3,"title":"使用 Hook 的示例","slug":"使用-hook-的示例-1","link":"#使用-hook-的示例-1","children":[]}]},{"level":2,"title":"使用 Effect 的提示","slug":"使用-effect-的提示","link":"#使用-effect-的提示","children":[{"level":3,"title":"使用 Hook 的目的","slug":"使用-hook-的目的","link":"#使用-hook-的目的","children":[]},{"level":3,"title":"提示: 使用多个 Effect 实现关注点分离","slug":"提示-使用多个-effect-实现关注点分离","link":"#提示-使用多个-effect-实现关注点分离","children":[]},{"level":3,"title":"解释: 为什么每次更新的时候都要运行 Effect","slug":"解释-为什么每次更新的时候都要运行-effect","link":"#解释-为什么每次更新的时候都要运行-effect","children":[]},{"level":3,"title":"提示: 通过跳过 Effect 进行性能优化","slug":"提示-通过跳过-effect-进行性能优化","link":"#提示-通过跳过-effect-进行性能优化","children":[]}]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":4}]},"readingTime":{"minutes":6.98,"words":2093},"filePathRelative":"前端开发/前端框架/React/03.Hook/03.使用Effect Hook.md","localizedDate":"2021年4月7日","autoDesc":true}`);export{e as data};
