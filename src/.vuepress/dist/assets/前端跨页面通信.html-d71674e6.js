const e=JSON.parse(`{"key":"v-148827a0","path":"/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1.html","title":"前端跨页面通信","lang":"zh-CN","frontmatter":{"title":"前端跨页面通信","tag":["项目总结"],"date":"2022-04-03T00:00:00.000Z","category":["开发日志"],"description":"背景 用户在实际的操作场景中会打开多个 Tab 页面 A、B、C、D、E...。当用户在 E Tab 页退出登录，并且登录到新的账号，然后用户切换到非 E 的 Tab 时，发现登录信息没有刷新， 并且由于登录信息没有刷新，会出现操作异常。这个问题简单来说就是多个 Tab 信息没有同步。问题的关键在于一个 Tab 退出重新登录，需要通知到其他的 Tab 刷新到最新的信息。本质问题就是解决前端跨页面通信。 本篇文章就是对前端跨页面通信的解决方案做了一个了解。 onstorage WindowEventHandlers.onstorage 属性包含一个在 storage 事件触发时运行的事件处理程序。当更改存储时会触发事件处理程序。","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E8%B7%A8%E9%A1%B5%E9%9D%A2%E9%80%9A%E4%BF%A1.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"前端跨页面通信"}],["meta",{"property":"og:description","content":"背景 用户在实际的操作场景中会打开多个 Tab 页面 A、B、C、D、E...。当用户在 E Tab 页退出登录，并且登录到新的账号，然后用户切换到非 E 的 Tab 时，发现登录信息没有刷新， 并且由于登录信息没有刷新，会出现操作异常。这个问题简单来说就是多个 Tab 信息没有同步。问题的关键在于一个 Tab 退出重新登录，需要通知到其他的 Tab 刷新到最新的信息。本质问题就是解决前端跨页面通信。 本篇文章就是对前端跨页面通信的解决方案做了一个了解。 onstorage WindowEventHandlers.onstorage 属性包含一个在 storage 事件触发时运行的事件处理程序。当更改存储时会触发事件处理程序。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"项目总结"}],["meta",{"property":"article:published_time","content":"2022-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端跨页面通信\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"onstorage","slug":"onstorage","link":"#onstorage","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"Tips","slug":"tips","link":"#tips","children":[]}]},{"level":2,"title":"BroadCast Channel","slug":"broadcast-channel","link":"#broadcast-channel","children":[{"level":3,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]},{"level":3,"title":"Tips","slug":"tips-1","link":"#tips-1","children":[]}]},{"level":2,"title":"Service Worker","slug":"service-worker","link":"#service-worker","children":[{"level":3,"title":"语法","slug":"语法-2","link":"#语法-2","children":[]},{"level":3,"title":"Tips","slug":"tips-2","link":"#tips-2","children":[]}]},{"level":2,"title":"open & opener","slug":"open-opener","link":"#open-opener","children":[{"level":3,"title":"番外关于 noopener","slug":"番外关于-noopener","link":"#番外关于-noopener","children":[]},{"level":3,"title":"语法","slug":"语法-3","link":"#语法-3","children":[]},{"level":3,"title":"Tips","slug":"tips-3","link":"#tips-3","children":[]}]},{"level":2,"title":"SharedWorker","slug":"sharedworker","link":"#sharedworker","children":[{"level":3,"title":"语法","slug":"语法-4","link":"#语法-4","children":[]},{"level":3,"title":"Tips","slug":"tips-4","link":"#tips-4","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":12.11,"words":3632},"filePathRelative":"开发日志/前端跨页面通信.md","localizedDate":"2022年4月3日","excerpt":"<h2> 背景</h2>\\n<p>用户在实际的操作场景中会打开多个 Tab 页面 A、B、C、D、E...。当用户在 E Tab 页退出登录，并且登录到新的账号，然后用户切换到非 E 的 Tab 时，发现登录信息没有刷新， 并且由于登录信息没有刷新，会出现操作异常。这个问题简单来说就是多个 Tab 信息没有同步。问题的关键在于一个 Tab 退出重新登录，需要通知到其他的 Tab 刷新到最新的信息。本质问题就是<strong>解决前端跨页面通信</strong>。</p>\\n<p>本篇文章就是对前端跨页面通信的解决方案做了一个了解。</p>\\n<h2> onstorage</h2>\\n<p>WindowEventHandlers.onstorage 属性包含一个在 storage 事件触发时运行的事件处理程序。当更改存储时会触发事件处理程序。</p>","autoDesc":true}`);export{e as data};
