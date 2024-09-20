const e=JSON.parse('{"key":"v-0cfab86e","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/06.%E4%BA%8B%E4%BB%B6.html","title":"事件","lang":"zh-CN","frontmatter":{"title":"事件","date":"2020-01-12T11:49:16.000Z","category":["《JavaScript教程》笔记"],"tag":["JavaScript"],"description":"一、EventTarget 接口 事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。 1、概述 DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、`A...","head":[["meta",{"property":"og:url","content":"https://chenDevs.github.io/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E7%AC%94%E8%AE%B0/06.%E4%BA%8B%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Mr Chen\'s Blog"}],["meta",{"property":"og:title","content":"事件"}],["meta",{"property":"og:description","content":"一、EventTarget 接口 事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件，本章开始介绍 DOM 的事件编程。 1、概述 DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、`A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2020-01-12T11:49:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-12T11:49:16.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"一、EventTarget 接口","slug":"一、eventtarget-接口","link":"#一、eventtarget-接口","children":[{"level":3,"title":"1、概述","slug":"_1、概述","link":"#_1、概述","children":[]},{"level":3,"title":"2、EventTarget.addEventListener()","slug":"_2、eventtarget-addeventlistener","link":"#_2、eventtarget-addeventlistener","children":[]},{"level":3,"title":"3、EventTarget.removeEventListener()","slug":"_3、eventtarget-removeeventlistener","link":"#_3、eventtarget-removeeventlistener","children":[]},{"level":3,"title":"4、EventTarget.dispatchEvent()","slug":"_4、eventtarget-dispatchevent","link":"#_4、eventtarget-dispatchevent","children":[]}]},{"level":2,"title":"二、事件模型","slug":"二、事件模型","link":"#二、事件模型","children":[{"level":3,"title":"1、监听函数","slug":"_1、监听函数","link":"#_1、监听函数","children":[]},{"level":3,"title":"2、this 的指向 （指向元素节点）","slug":"_2、this-的指向-指向元素节点","link":"#_2、this-的指向-指向元素节点","children":[]},{"level":3,"title":"3、事件的传播（捕获、目标、冒泡）","slug":"_3、事件的传播-捕获、目标、冒泡","link":"#_3、事件的传播-捕获、目标、冒泡","children":[]},{"level":3,"title":"4、事件的代理","slug":"_4、事件的代理","link":"#_4、事件的代理","children":[]}]},{"level":2,"title":"三、Event 对象","slug":"三、event-对象","link":"#三、event-对象","children":[{"level":3,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":3,"title":"2. 实例属性","slug":"_2-实例属性","link":"#_2-实例属性","children":[]},{"level":3,"title":"3、实例方法","slug":"_3、实例方法","link":"#_3、实例方法","children":[]}]},{"level":2,"title":"四、鼠标事件","slug":"四、鼠标事件","link":"#四、鼠标事件","children":[{"level":3,"title":"1、鼠标事件的种类","slug":"_1、鼠标事件的种类","link":"#_1、鼠标事件的种类","children":[]},{"level":3,"title":"2、MouseEvent 接口概述","slug":"_2、mouseevent-接口概述","link":"#_2、mouseevent-接口概述","children":[]},{"level":3,"title":"3、MouseEvent 接口的实例属性","slug":"_3、mouseevent-接口的实例属性","link":"#_3、mouseevent-接口的实例属性","children":[]},{"level":3,"title":"4、MouseEvent 接口的实例方法","slug":"_4、mouseevent-接口的实例方法","link":"#_4、mouseevent-接口的实例方法","children":[]},{"level":3,"title":"5、WheelEvent 接口 （滚轮）","slug":"_5、wheelevent-接口-滚轮","link":"#_5、wheelevent-接口-滚轮","children":[]}]},{"level":2,"title":"五、键盘事件","slug":"五、键盘事件","link":"#五、键盘事件","children":[{"level":3,"title":"1、键盘事件的种类","slug":"_1、键盘事件的种类","link":"#_1、键盘事件的种类","children":[]},{"level":3,"title":"2、KeyboardEvent 接口概述","slug":"_2、keyboardevent-接口概述","link":"#_2、keyboardevent-接口概述","children":[]},{"level":3,"title":"3、KeyboardEvent 的实例属性","slug":"_3、keyboardevent-的实例属性","link":"#_3、keyboardevent-的实例属性","children":[]},{"level":3,"title":"4、KeyboardEvent 的实例方法","slug":"_4、keyboardevent-的实例方法","link":"#_4、keyboardevent-的实例方法","children":[]}]},{"level":2,"title":"六、进度事件","slug":"六、进度事件","link":"#六、进度事件","children":[{"level":3,"title":"1、进度事件的种类","slug":"_1、进度事件的种类","link":"#_1、进度事件的种类","children":[]},{"level":3,"title":"2、ProgressEvent 接口","slug":"_2、progressevent-接口","link":"#_2、progressevent-接口","children":[]}]},{"level":2,"title":"七、表单事件","slug":"七、表单事件","link":"#七、表单事件","children":[{"level":3,"title":"1、表单事件的种类","slug":"_1、表单事件的种类","link":"#_1、表单事件的种类","children":[]},{"level":3,"title":"2、InputEvent 接口（input 事件的实例）","slug":"_2、inputevent-接口-input-事件的实例","link":"#_2、inputevent-接口-input-事件的实例","children":[]}]},{"level":2,"title":"八、触摸事件","slug":"八、触摸事件","link":"#八、触摸事件","children":[{"level":3,"title":"1、触摸操作概述","slug":"_1、触摸操作概述","link":"#_1、触摸操作概述","children":[]},{"level":3,"title":"2、Touch 接口","slug":"_2、touch-接口","link":"#_2、touch-接口","children":[]},{"level":3,"title":"3、TouchList 接口","slug":"_3、touchlist-接口","link":"#_3、touchlist-接口","children":[]},{"level":3,"title":"4、TouchEvent 接口","slug":"_4、touchevent-接口","link":"#_4、touchevent-接口","children":[]},{"level":3,"title":"5、触摸事件的种类","slug":"_5、触摸事件的种类","link":"#_5、触摸事件的种类","children":[]}]},{"level":2,"title":"九、拖拉事件","slug":"九、拖拉事件","link":"#九、拖拉事件","children":[{"level":3,"title":"1、拖拉事件的种类","slug":"_1、拖拉事件的种类","link":"#_1、拖拉事件的种类","children":[]},{"level":3,"title":"2、DragEvent 接口","slug":"_2、dragevent-接口","link":"#_2、dragevent-接口","children":[]},{"level":3,"title":"3、DataTransfer 接口概述","slug":"_3、datatransfer-接口概述","link":"#_3、datatransfer-接口概述","children":[]},{"level":3,"title":"4、DataTransfer 的实例属性","slug":"_4、datatransfer-的实例属性","link":"#_4、datatransfer-的实例属性","children":[]},{"level":3,"title":"5、DataTransfer 的实例方法","slug":"_5、datatransfer-的实例方法","link":"#_5、datatransfer-的实例方法","children":[]}]},{"level":2,"title":"十、其他常见事件","slug":"十、其他常见事件","link":"#十、其他常见事件","children":[{"level":3,"title":"1、资源事件","slug":"_1、资源事件","link":"#_1、资源事件","children":[]},{"level":3,"title":"2、session 历史事件","slug":"_2、session-历史事件","link":"#_2、session-历史事件","children":[]},{"level":3,"title":"3、网页状态事件","slug":"_3、网页状态事件","link":"#_3、网页状态事件","children":[]},{"level":3,"title":"4、窗口事件","slug":"_4、窗口事件","link":"#_4、窗口事件","children":[]},{"level":3,"title":"5、剪贴板事件","slug":"_5、剪贴板事件","link":"#_5、剪贴板事件","children":[]},{"level":3,"title":"6、焦点事件","slug":"_6、焦点事件","link":"#_6、焦点事件","children":[]},{"level":3,"title":"7、CustomEvent 接口（自定义事件）","slug":"_7、customevent-接口-自定义事件","link":"#_7、customevent-接口-自定义事件","children":[]}]},{"level":2,"title":"十一、GlobalEventHandlers 接口 （全局事件处理接口）","slug":"十一、globaleventhandlers-接口-全局事件处理接口","link":"#十一、globaleventhandlers-接口-全局事件处理接口","children":[{"level":3,"title":"1、GlobalEventHandlers.onabort （中断事件）","slug":"_1、globaleventhandlers-onabort-中断事件","link":"#_1、globaleventhandlers-onabort-中断事件","children":[]},{"level":3,"title":"2、GlobalEventHandlers.onerror （错误事件）","slug":"_2、globaleventhandlers-onerror-错误事件","link":"#_2、globaleventhandlers-onerror-错误事件","children":[]},{"level":3,"title":"3、GlobalEventHandlers.onload（加载完成事件）、GlobalEventHandlers.onloadstart（开始加载事件）","slug":"_3、globaleventhandlers-onload-加载完成事件-、globaleventhandlers-onloadstart-开始加载事件","link":"#_3、globaleventhandlers-onload-加载完成事件-、globaleventhandlers-onloadstart-开始加载事件","children":[]},{"level":3,"title":"4、GlobalEventHandlers.onfocus（获取焦点事件），GlobalEventHandlers.onblur（失去焦点事件）","slug":"_4、globaleventhandlers-onfocus-获取焦点事件-globaleventhandlers-onblur-失去焦点事件","link":"#_4、globaleventhandlers-onfocus-获取焦点事件-globaleventhandlers-onblur-失去焦点事件","children":[]},{"level":3,"title":"5、GlobalEventHandlers.onscroll（滚动事件）","slug":"_5、globaleventhandlers-onscroll-滚动事件","link":"#_5、globaleventhandlers-onscroll-滚动事件","children":[]},{"level":3,"title":"6、GlobalEventHandlers.oncontextmenu（右键菜单事件），GlobalEventHandlers.onshow（显示右键菜单时触发）","slug":"_6、globaleventhandlers-oncontextmenu-右键菜单事件-globaleventhandlers-onshow-显示右键菜单时触发","link":"#_6、globaleventhandlers-oncontextmenu-右键菜单事件-globaleventhandlers-onshow-显示右键菜单时触发","children":[]},{"level":3,"title":"7、其他的事件属性","slug":"_7、其他的事件属性","link":"#_7、其他的事件属性","children":[]}]},{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]}],"git":{},"readingTime":{"minutes":87.78,"words":26333},"filePathRelative":"前端开发/前端基石/《JavaScript教程》笔记/06.事件.md","localizedDate":"2020年1月12日","autoDesc":true}');export{e as data};
