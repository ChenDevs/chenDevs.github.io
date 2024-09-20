const e=JSON.parse(`{"key":"v-32d19962","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/10.ts-axios%20%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0/02.XSRF%20%E9%98%B2%E5%BE%A1.html","title":"XSRF 防御","lang":"zh-CN","frontmatter":{"title":"XSRF 防御","date":"2020-01-05T10:56:02.000Z","author":"HuangYi","category":["《TypeScript 从零实现 axios》","ts-axios 更多功能实现"],"tag":["TypeScript"],"description":"需求分析 XSRF 又名 CSRF ()，跨站请求伪造，它是前端常见的一种攻击方式，我们先通过一张图来认识它的攻击手段。 xsrf CSRF 的防御手段有很多，比如验证请求的 referer，但是 referer 也是可以伪造的，所以杜绝此类攻击的一种方式是服务器端要求每次请求都包含一个 token，这个 token 不在前端生成，而是在我们每次访问站...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8ATypeScript%20%E4%BB%8E%E9%9B%B6%E5%AE%9E%E7%8E%B0%20axios%E3%80%8B/10.ts-axios%20%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0/02.XSRF%20%E9%98%B2%E5%BE%A1.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"XSRF 防御"}],["meta",{"property":"og:description","content":"需求分析 XSRF 又名 CSRF ()，跨站请求伪造，它是前端常见的一种攻击方式，我们先通过一张图来认识它的攻击手段。 xsrf CSRF 的防御手段有很多，比如验证请求的 referer，但是 referer 也是可以伪造的，所以杜绝此类攻击的一种方式是服务器端要求每次请求都包含一个 token，这个 token 不在前端生成，而是在我们每次访问站..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HuangYi"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:published_time","content":"2020-01-05T10:56:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XSRF 防御\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-05T10:56:02.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HuangYi\\"}]}"]]},"headers":[{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"demo 编写","slug":"demo-编写","link":"#demo-编写","children":[]}],"git":{},"readingTime":{"minutes":3.07,"words":922},"filePathRelative":"前端开发/前端基石/《TypeScript 从零实现 axios》/10.ts-axios 更多功能实现/02.XSRF 防御.md","localizedDate":"2020年1月5日","autoDesc":true}`);export{e as data};
