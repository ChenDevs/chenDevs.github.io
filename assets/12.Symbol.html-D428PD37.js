const e=JSON.parse(`{"key":"v-f842a1ba","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AES6%20%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/12.Symbol.html","title":"Symbol","lang":"zh-CN","frontmatter":{"title":"Symbol","date":"2020-02-09T16:00:29.000Z","author":"阮一峰","category":["《ES6 教程》笔记"],"tag":["ES6"],"description":"概述 ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。 ES6 引入了一种新的原始数据类型Sy...","head":[["meta",{"property":"og:url","content":"https://chenvibes.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AES6%20%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/12.Symbol.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"Symbol"}],["meta",{"property":"og:description","content":"概述 ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。 ES6 引入了一种新的原始数据类型Sy..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-17T13:26:50.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"ES6"}],["meta",{"property":"article:published_time","content":"2020-02-09T16:00:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-17T13:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Symbol\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-09T16:00:29.000Z\\",\\"dateModified\\":\\"2024-09-17T13:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Symbol.prototype.description","slug":"symbol-prototype-description","link":"#symbol-prototype-description","children":[]},{"level":2,"title":"作为属性名的 Symbol","slug":"作为属性名的-symbol","link":"#作为属性名的-symbol","children":[]},{"level":2,"title":"实例：消除魔术字符串","slug":"实例-消除魔术字符串","link":"#实例-消除魔术字符串","children":[]},{"level":2,"title":"属性名的遍历","slug":"属性名的遍历","link":"#属性名的遍历","children":[]},{"level":2,"title":"Symbol.for()，Symbol.keyFor()","slug":"symbol-for-symbol-keyfor","link":"#symbol-for-symbol-keyfor","children":[]},{"level":2,"title":"实例：模块的 Singleton 模式","slug":"实例-模块的-singleton-模式","link":"#实例-模块的-singleton-模式","children":[]},{"level":2,"title":"内置的 Symbol 值","slug":"内置的-symbol-值","link":"#内置的-symbol-值","children":[{"level":3,"title":"Symbol.hasInstance","slug":"symbol-hasinstance","link":"#symbol-hasinstance","children":[]},{"level":3,"title":"Symbol.isConcatSpreadable","slug":"symbol-isconcatspreadable","link":"#symbol-isconcatspreadable","children":[]},{"level":3,"title":"Symbol.species","slug":"symbol-species","link":"#symbol-species","children":[]},{"level":3,"title":"Symbol.match","slug":"symbol-match","link":"#symbol-match","children":[]},{"level":3,"title":"Symbol.replace","slug":"symbol-replace","link":"#symbol-replace","children":[]},{"level":3,"title":"Symbol.search","slug":"symbol-search","link":"#symbol-search","children":[]},{"level":3,"title":"Symbol.split","slug":"symbol-split","link":"#symbol-split","children":[]},{"level":3,"title":"Symbol.iterator","slug":"symbol-iterator","link":"#symbol-iterator","children":[]},{"level":3,"title":"Symbol.toPrimitive","slug":"symbol-toprimitive","link":"#symbol-toprimitive","children":[]},{"level":3,"title":"Symbol.toStringTag","slug":"symbol-tostringtag","link":"#symbol-tostringtag","children":[]},{"level":3,"title":"Symbol.unscopables","slug":"symbol-unscopables","link":"#symbol-unscopables","children":[]}]}],"git":{"createdTime":1726576680000,"updatedTime":1726579610000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":3}]},"readingTime":{"minutes":17.64,"words":5291},"filePathRelative":"前端开发/前端基石/《ES6 教程》笔记/12.Symbol.md","localizedDate":"2020年2月10日","autoDesc":true}`);export{e as data};
