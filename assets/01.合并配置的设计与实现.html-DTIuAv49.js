const e=JSON.parse(`{"key":"v-4e8def59","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/08.ts-axios%20%E9%85%8D%E7%BD%AE%E5%8C%96%E5%AE%9E%E7%8E%B0/01.%E5%90%88%E5%B9%B6%E9%85%8D%E7%BD%AE%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html","title":"合并配置的设计与实现","lang":"zh-CN","frontmatter":{"title":"合并配置的设计与实现","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 配置化实现"],"tag":["TypeScript"],"description":"需求分析 在之前的章节我们了解到，在发送请求的时候可以传入一个配置，来决定请求的不同行为。我们也希望 ts-axios 可以有默认配置，定义一些默认的行为。这样在发送每个请求，用户传递的配置可以和默认配置做一层合并。 和官网 axios 库保持一致，我们给 axios 对象添加一个 defaults 属性，表示默认配置，你甚至可以直接修改这些默认配置：...","head":[["meta",{"property":"og:url","content":"https://chenvibes.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/08.ts-axios%20%E9%85%8D%E7%BD%AE%E5%8C%96%E5%AE%9E%E7%8E%B0/01.%E5%90%88%E5%B9%B6%E9%85%8D%E7%BD%AE%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"合并配置的设计与实现"}],["meta",{"property":"og:description","content":"需求分析 在之前的章节我们了解到，在发送请求的时候可以传入一个配置，来决定请求的不同行为。我们也希望 ts-axios 可以有默认配置，定义一些默认的行为。这样在发送每个请求，用户传递的配置可以和默认配置做一层合并。 和官网 axios 库保持一致，我们给 axios 对象添加一个 defaults 属性，表示默认配置，你甚至可以直接修改这些默认配置：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"合并配置的设计与实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[{"level":3,"title":"默认配置定义","slug":"默认配置定义","link":"#默认配置定义","children":[]},{"level":3,"title":"添加到 axios 对象中","slug":"添加到-axios-对象中","link":"#添加到-axios-对象中","children":[]}]},{"level":2,"title":"配置合并及策略","slug":"配置合并及策略","link":"#配置合并及策略","children":[{"level":3,"title":"合并方法","slug":"合并方法","link":"#合并方法","children":[]},{"level":3,"title":"默认合并策略","slug":"默认合并策略","link":"#默认合并策略","children":[]},{"level":3,"title":"只接受自定义配置合并策略","slug":"只接受自定义配置合并策略","link":"#只接受自定义配置合并策略","children":[]},{"level":3,"title":"复杂对象合并策略","slug":"复杂对象合并策略","link":"#复杂对象合并策略","children":[]}]},{"level":2,"title":"flatten headers","slug":"flatten-headers","link":"#flatten-headers","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":3}]},"readingTime":{"minutes":6.31,"words":1894},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/08.ts-axios 配置化实现/01.合并配置的设计与实现.md","localizedDate":"2020年1月5日","autoDesc":true}`);export{e as data};
