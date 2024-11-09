const e=JSON.parse(`{"key":"v-6a0f25be","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85.html","title":"深入理解javascript原型和闭包","lang":"zh-CN","frontmatter":{"title":"深入理解javascript原型和闭包","author":"王福朋","icon":"javascript","category":"前端开发 - 前端进阶 - JS高级","description":"一切都是对象 “一切都是对象”这句话的重点在于如何去理解“对象”这个概念。 ——当然，也不是所有的都是对象，值类型就不是对象。 首先咱们还是先看看 javascript 中一个常用的运算符——typeof。typeof 应该算是咱们的老朋友，还有谁没用过它？ typeof 函数输出的一共有几种类型，在此列出： 以上代码列出了 typeof 输出的结果，...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"深入理解javascript原型和闭包"}],["meta",{"property":"og:description","content":"一切都是对象 “一切都是对象”这句话的重点在于如何去理解“对象”这个概念。 ——当然，也不是所有的都是对象，值类型就不是对象。 首先咱们还是先看看 javascript 中一个常用的运算符——typeof。typeof 应该算是咱们的老朋友，还有谁没用过它？ typeof 函数输出的一共有几种类型，在此列出： 以上代码列出了 typeof 输出的结果，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T14:34:54.000Z"}],["meta",{"property":"article:author","content":"王福朋"}],["meta",{"property":"article:modified_time","content":"2024-09-21T14:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解javascript原型和闭包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T14:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"王福朋\\"}]}"]]},"headers":[{"level":2,"title":"一切都是对象","slug":"一切都是对象","link":"#一切都是对象","children":[]},{"level":2,"title":"函数和对象的关系","slug":"函数和对象的关系","link":"#函数和对象的关系","children":[]},{"level":2,"title":"prototype 原型","slug":"prototype-原型","link":"#prototype-原型","children":[]},{"level":2,"title":"隐式原型","slug":"隐式原型","link":"#隐式原型","children":[]},{"level":2,"title":"instanceof","slug":"instanceof","link":"#instanceof","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"原型的灵活性","slug":"原型的灵活性","link":"#原型的灵活性","children":[]},{"level":2,"title":"简述【执行上下文】上","slug":"简述【执行上下文】上","link":"#简述【执行上下文】上","children":[]},{"level":2,"title":"简述【执行上下文】下","slug":"简述【执行上下文】下","link":"#简述【执行上下文】下","children":[]},{"level":2,"title":"this","slug":"this","link":"#this","children":[{"level":3,"title":"情况 1：构造函数","slug":"情况-1-构造函数","link":"#情况-1-构造函数","children":[]},{"level":3,"title":"情况 2：函数作为对象的一个属性","slug":"情况-2-函数作为对象的一个属性","link":"#情况-2-函数作为对象的一个属性","children":[]},{"level":3,"title":"情况 3：函数用 call 或者 apply 调用","slug":"情况-3-函数用-call-或者-apply-调用","link":"#情况-3-函数用-call-或者-apply-调用","children":[]},{"level":3,"title":"情况 4 全局 & 调用普通函数","slug":"情况-4-全局-调用普通函数","link":"#情况-4-全局-调用普通函数","children":[]},{"level":3,"title":"补充","slug":"补充","link":"#补充","children":[]}]},{"level":2,"title":"执行上下文栈","slug":"执行上下文栈","link":"#执行上下文栈","children":[]},{"level":2,"title":"简介【作用域】","slug":"简介【作用域】","link":"#简介【作用域】","children":[]},{"level":2,"title":"【作用域】和【上下文环境】","slug":"【作用域】和【上下文环境】","link":"#【作用域】和【上下文环境】","children":[]},{"level":2,"title":"从【自由变量】到【作用域链】","slug":"从【自由变量】到【作用域链】","link":"#从【自由变量】到【作用域链】","children":[]},{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[{"level":3,"title":"第一，函数作为返回值","slug":"第一-函数作为返回值","link":"#第一-函数作为返回值","children":[]},{"level":3,"title":"第二，函数作为参数被传递","slug":"第二-函数作为参数被传递","link":"#第二-函数作为参数被传递","children":[]}]},{"level":2,"title":"补充：上下文环境和作用域的关系","slug":"补充-上下文环境和作用域的关系","link":"#补充-上下文环境和作用域的关系","children":[]}],"git":{"createdTime":1726929294000,"updatedTime":1726929294000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":41.37,"words":12412},"filePathRelative":"前端开发/前端基石/深入理解javascript原型和闭包.md","localizedDate":"2024年9月21日","autoDesc":true}`);export{e as data};
