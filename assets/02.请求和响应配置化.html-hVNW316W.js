const t=JSON.parse('{"key":"v-7c4f8b22","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/08.ts-axios%20%E9%85%8D%E7%BD%AE%E5%8C%96%E5%AE%9E%E7%8E%B0/02.%E8%AF%B7%E6%B1%82%E5%92%8C%E5%93%8D%E5%BA%94%E9%85%8D%E7%BD%AE%E5%8C%96.html","title":"请求和响应配置化","lang":"zh-CN","frontmatter":{"title":"请求和响应配置化","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 配置化实现"],"tag":["TypeScript"],"description":"需求分析 官方的 axios 库 给默认配置添加了 transformRequest 和 transformResponse 两个字段，它们的值是一个数组或者是一个函数。 其中 transformRequest 允许你在将请求数据发送到服务器之前对其进行修改，这只适用于请求方法 put、`post 和 patch，如果值是数组，则数组中的最后一个函数必...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/08.ts-axios%20%E9%85%8D%E7%BD%AE%E5%8C%96%E5%AE%9E%E7%8E%B0/02.%E8%AF%B7%E6%B1%82%E5%92%8C%E5%93%8D%E5%BA%94%E9%85%8D%E7%BD%AE%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Mr Chen\'s Blog"}],["meta",{"property":"og:title","content":"请求和响应配置化"}],["meta",{"property":"og:description","content":"需求分析 官方的 axios 库 给默认配置添加了 transformRequest 和 transformResponse 两个字段，它们的值是一个数组或者是一个函数。 其中 transformRequest 允许你在将请求数据发送到服务器之前对其进行修改，这只适用于请求方法 put、`post 和 patch，如果值是数组，则数组中的最后一个函数必..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"请求和响应配置化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"修改默认配置","slug":"修改默认配置","link":"#修改默认配置","children":[]},{"level":2,"title":"transform 逻辑重构","slug":"transform-逻辑重构","link":"#transform-逻辑重构","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":3}]},"readingTime":{"minutes":3.26,"words":979},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/08.ts-axios 配置化实现/02.请求和响应配置化.md","localizedDate":"2020年1月5日","autoDesc":true}');export{t as data};
