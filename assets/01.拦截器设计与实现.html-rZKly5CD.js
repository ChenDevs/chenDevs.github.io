const e=JSON.parse(`{"key":"v-dea16ab0","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/07.ts-axios%20%E6%8B%A6%E6%88%AA%E5%99%A8%E5%AE%9E%E7%8E%B0/01.%E6%8B%A6%E6%88%AA%E5%99%A8%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html","title":"拦截器设计与实现","lang":"zh-CN","frontmatter":{"title":"拦截器设计与实现","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 拦截器实现"],"tag":["TypeScript"],"description":"拦截器设计与实现 需求分析 我们希望能对请求的发送和响应做拦截，也就是在发送请求之前和接收到响应之后做一些额外逻辑。 我们希望设计的拦截器的使用方式如下： 在 axios 对象上有一个 interceptors 对象属性，该属性又有 request 和 response 2 个属性，它们都有一个 use 方法，use 方法支持 2 个参数，第一个参数类...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/07.ts-axios%20%E6%8B%A6%E6%88%AA%E5%99%A8%E5%AE%9E%E7%8E%B0/01.%E6%8B%A6%E6%88%AA%E5%99%A8%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"拦截器设计与实现"}],["meta",{"property":"og:description","content":"拦截器设计与实现 需求分析 我们希望能对请求的发送和响应做拦截，也就是在发送请求之前和接收到响应之后做一些额外逻辑。 我们希望设计的拦截器的使用方式如下： 在 axios 对象上有一个 interceptors 对象属性，该属性又有 request 和 response 2 个属性，它们都有一个 use 方法，use 方法支持 2 个参数，第一个参数类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拦截器设计与实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"整体设计","slug":"整体设计","link":"#整体设计","children":[]},{"level":2,"title":"拦截器管理类实现","slug":"拦截器管理类实现","link":"#拦截器管理类实现","children":[{"level":3,"title":"接口定义","slug":"接口定义","link":"#接口定义","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}]},{"level":2,"title":"链式调用实现","slug":"链式调用实现","link":"#链式调用实现","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":3}]},"readingTime":{"minutes":5.98,"words":1793},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/07.ts-axios 拦截器实现/01.拦截器设计与实现.md","localizedDate":"2020年1月5日","autoDesc":true}`);export{e as data};
