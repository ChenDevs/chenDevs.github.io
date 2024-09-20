const e=JSON.parse(`{"key":"v-a48e6678","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/04.ts-axios%20%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0/05.%E5%A4%84%E7%90%86%E5%93%8D%E5%BA%94%20header.html","title":"处理响应 header","lang":"zh-CN","frontmatter":{"title":"处理响应 header","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 基础功能实现"],"tag":["TypeScript"],"description":"需求分析 我们通过 XMLHttpRequest 对象的 getAllResponseHeaders 方法获取到的值是如下一段字符串： 每一行都是以回车符和换行符 \\\\r\\\\n 结束，它们是每个 header 属性的分隔符。对于上面这串字符串，我们希望最终解析成一个对象结构： parseHeaders 函数实现及应用 根据需求分析，我们要实现一个 pars...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/04.ts-axios%20%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0/05.%E5%A4%84%E7%90%86%E5%93%8D%E5%BA%94%20header.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"处理响应 header"}],["meta",{"property":"og:description","content":"需求分析 我们通过 XMLHttpRequest 对象的 getAllResponseHeaders 方法获取到的值是如下一段字符串： 每一行都是以回车符和换行符 \\\\r\\\\n 结束，它们是每个 header 属性的分隔符。对于上面这串字符串，我们希望最终解析成一个对象结构： parseHeaders 函数实现及应用 根据需求分析，我们要实现一个 pars..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"处理响应 header\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"parseHeaders 函数实现及应用","slug":"parseheaders-函数实现及应用","link":"#parseheaders-函数实现及应用","children":[]}],"git":{},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/04.ts-axios 基础功能实现/05.处理响应 header.md","localizedDate":"2020年1月5日","autoDesc":true}`);export{e as data};
