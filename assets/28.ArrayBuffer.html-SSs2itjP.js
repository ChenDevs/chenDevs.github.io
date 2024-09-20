const e=JSON.parse(`{"key":"v-57e9e14e","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AES6%20%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/28.ArrayBuffer.html","title":"ArrayBuffer","lang":"zh-CN","frontmatter":{"title":"ArrayBuffer","date":"2020-02-09T16:00:29.000Z","author":"阮一峰","category":["《ES6 教程》笔记"],"tag":["ES6"],"description":"ArrayBuffer对象、TypedArray视图和DataView视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格（2011 年 2 月发布），ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。 这个接口的原始设计目的，与 WebG...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AES6%20%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/28.ArrayBuffer.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"ArrayBuffer"}],["meta",{"property":"og:description","content":"ArrayBuffer对象、TypedArray视图和DataView视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格（2011 年 2 月发布），ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。 这个接口的原始设计目的，与 WebG..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"ES6"}],["meta",{"property":"article:published_time","content":"2020-02-09T16:00:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayBuffer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-09T16:00:29.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"]]},"headers":[{"level":2,"title":"ArrayBuffer 对象","slug":"arraybuffer-对象","link":"#arraybuffer-对象","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"ArrayBuffer.prototype.byteLength","slug":"arraybuffer-prototype-bytelength","link":"#arraybuffer-prototype-bytelength","children":[]},{"level":3,"title":"ArrayBuffer.prototype.slice()","slug":"arraybuffer-prototype-slice","link":"#arraybuffer-prototype-slice","children":[]},{"level":3,"title":"ArrayBuffer.isView()","slug":"arraybuffer-isview","link":"#arraybuffer-isview","children":[]}]},{"level":2,"title":"TypedArray 视图","slug":"typedarray-视图","link":"#typedarray-视图","children":[{"level":3,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"数组方法","slug":"数组方法","link":"#数组方法","children":[]},{"level":3,"title":"字节序","slug":"字节序","link":"#字节序","children":[]},{"level":3,"title":"BYTES_PER_ELEMENT 属性","slug":"bytes-per-element-属性","link":"#bytes-per-element-属性","children":[]},{"level":3,"title":"ArrayBuffer 与字符串的互相转换","slug":"arraybuffer-与字符串的互相转换","link":"#arraybuffer-与字符串的互相转换","children":[]},{"level":3,"title":"溢出","slug":"溢出","link":"#溢出","children":[]},{"level":3,"title":"TypedArray.prototype.buffer","slug":"typedarray-prototype-buffer","link":"#typedarray-prototype-buffer","children":[]},{"level":3,"title":"TypedArray.prototype.byteLength，TypedArray.prototype.byteOffset","slug":"typedarray-prototype-bytelength-typedarray-prototype-byteoffset","link":"#typedarray-prototype-bytelength-typedarray-prototype-byteoffset","children":[]},{"level":3,"title":"TypedArray.prototype.length","slug":"typedarray-prototype-length","link":"#typedarray-prototype-length","children":[]},{"level":3,"title":"TypedArray.prototype.set()","slug":"typedarray-prototype-set","link":"#typedarray-prototype-set","children":[]},{"level":3,"title":"TypedArray.prototype.subarray()","slug":"typedarray-prototype-subarray","link":"#typedarray-prototype-subarray","children":[]},{"level":3,"title":"TypedArray.prototype.slice()","slug":"typedarray-prototype-slice","link":"#typedarray-prototype-slice","children":[]},{"level":3,"title":"TypedArray.of()","slug":"typedarray-of","link":"#typedarray-of","children":[]},{"level":3,"title":"TypedArray.from()","slug":"typedarray-from","link":"#typedarray-from","children":[]}]},{"level":2,"title":"复合视图","slug":"复合视图","link":"#复合视图","children":[]},{"level":2,"title":"DataView 视图","slug":"dataview-视图","link":"#dataview-视图","children":[]},{"level":2,"title":"二进制数组的应用","slug":"二进制数组的应用","link":"#二进制数组的应用","children":[{"level":3,"title":"AJAX","slug":"ajax","link":"#ajax","children":[]},{"level":3,"title":"Canvas","slug":"canvas","link":"#canvas","children":[]},{"level":3,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"Fetch API","slug":"fetch-api","link":"#fetch-api","children":[]},{"level":3,"title":"File API","slug":"file-api","link":"#file-api","children":[]}]},{"level":2,"title":"SharedArrayBuffer","slug":"sharedarraybuffer","link":"#sharedarraybuffer","children":[]},{"level":2,"title":"Atomics 对象","slug":"atomics-对象","link":"#atomics-对象","children":[]}],"git":{},"readingTime":{"minutes":38.52,"words":11557},"filePathRelative":"前端开发/前端基石/《ES6 教程》笔记/28.ArrayBuffer.md","localizedDate":"2020年2月10日","autoDesc":true}`);export{e as data};
