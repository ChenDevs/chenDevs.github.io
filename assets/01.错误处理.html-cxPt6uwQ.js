const e=JSON.parse(`{"key":"v-329c6d2e","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/05.ts-axios%20%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E5%A4%84%E7%90%86/01.%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html","title":"错误处理","lang":"zh-CN","frontmatter":{"title":"错误处理","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 异常情况处理"],"tag":["TypeScript"],"description":"需求分析 在上一章节，我们实现了 ts-axios 的基础功能，但目前为止我们都是处理了正常接收请求的逻辑，并没有考虑到任何错误情况的处理，这对于一个程序的健壮性而言是远不够的，因此我们这一章需要对 AJAX 各种错误情况做处理。 并且我们希望程序也能捕获到这些错误，做进一步的处理。 如果在请求的过程中发生任何错误，我们都可以在 reject 回调函数...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/05.ts-axios%20%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E5%A4%84%E7%90%86/01.%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"错误处理"}],["meta",{"property":"og:description","content":"需求分析 在上一章节，我们实现了 ts-axios 的基础功能，但目前为止我们都是处理了正常接收请求的逻辑，并没有考虑到任何错误情况的处理，这对于一个程序的健壮性而言是远不够的，因此我们这一章需要对 AJAX 各种错误情况做处理。 并且我们希望程序也能捕获到这些错误，做进一步的处理。 如果在请求的过程中发生任何错误，我们都可以在 reject 回调函数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"处理网络异常错误","slug":"处理网络异常错误","link":"#处理网络异常错误","children":[]},{"level":2,"title":"处理超时错误","slug":"处理超时错误","link":"#处理超时错误","children":[]},{"level":2,"title":"处理非 200 状态码","slug":"处理非-200-状态码","link":"#处理非-200-状态码","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":3}]},"readingTime":{"minutes":3.28,"words":984},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/05.ts-axios 异常情况处理/01.错误处理.md","localizedDate":"2020年1月5日","autoDesc":true}`);export{e as data};
