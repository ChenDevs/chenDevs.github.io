import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as r,e}from"./app-iqR_qDjC.js";const o={},a=e('<h2 id="arkts-开发语言基本介绍和区别" tabindex="-1"><a class="header-anchor" href="#arkts-开发语言基本介绍和区别" aria-hidden="true">#</a> ArkTS 开发语言基本介绍和区别</h2><blockquote><p>介绍：它在 TypeScript（简称 TS）的基础上，扩展了声明式 UI、状态管理等相应的能力，让开发者可以以更简洁、更自然的方式开发高性能应用。TS 是 JavaScript（简称 JS）的超集，ArkTS 则是 TS 的超集。</p></blockquote><h2 id="开发范式" tabindex="-1"><a class="header-anchor" href="#开发范式" aria-hidden="true">#</a> 开发范式</h2><table><thead><tr><th><div style="width:100px;"></div>开发范式名称</th><th><div style="width:80px;"></div>语言生态</th><th><div style="width:100px;"></div>UI 更新方式</th><th><div style="width:80px;"></div>适用场景</th><th>适用人群</th></tr></thead><tbody><tr><td>声明式开发范式</td><td>ArkTS 语言</td><td>数据驱动更新</td><td>复杂度较大、团队合作度较高的程序</td><td>移动系统应用开发人员、系统应用开发人员<br>IOS 的 SwiftUI(声明式)和 UIKit，或者安卓的 JetpackCompose(声明式)和 JetpackUI 以及 Flutter</td></tr><tr><td>类 Web 开发范式</td><td>JS 语言</td><td>数据驱动更新</td><td>界面较为简单的程序应用和卡片</td><td>Web 前端开发人员</td></tr></tbody></table><blockquote><p>说明： 声明式开发范式占用内存更少， 更推荐开发者选用声明式开发范式来搭建应用 UI 界面 。</p></blockquote><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><blockquote><p>说明： 生命周期函数是指在组件的生命周期中，在不同的阶段执行的函数。</p></blockquote><table><thead><tr><th>框架</th><th>类型</th><th>生命周期函数</th><th>执行时机</th></tr></thead><tbody><tr><td>ArkTs</td><td>UIAbility【用户交互应用组件】</td><td>onCreate</td><td>在 UIAbility 实例创建时触发。UIAbility 的生命周期包括 Create、Foreground、Background、Destroy 四个状态</td></tr><tr><td>ArkTs</td><td>WindowStage【本地窗口管理器】</td><td>onWindowStageCreate</td><td>UIAbility 实例创建完成之后，在进入 Foreground 之前，系统会创建一个 WindowStage,创建后在 onWindowStageCreate(windowStage)中通过 loadContent 接口设置应用要加载的页面</td></tr><tr><td>ArkTs</td><td>UIAbility【Foreground】</td><td>onForeground</td><td>在 UIAbility 的 UI 页面可见之前，即 UIAbility 切换至前台时触发。可以在 onForeground 回调中申请系统需要的资源，或者重新申请在 onBackground 中释放的资源。</td></tr><tr><td>ArkTs</td><td>struct【页面】</td><td>onPageShow</td><td>页面每次显示时触发</td></tr><tr><td>ArkTs</td><td>struct【页面】</td><td>onBackPress</td><td>：当用户点击返回按钮时触发。</td></tr><tr><td>ArkTs</td><td>@Component【组件】</td><td>aboutToAppear</td><td>组件即将出现时回调该接口</td></tr><tr><td>ArkTs</td><td>@Component【组件】</td><td>aboutToDisappear</td><td>组件即将销毁时执行</td></tr><tr><td>ArkTs</td><td>struct【页面】</td><td>onPageHide</td><td>页面每次隐藏时触发一次</td></tr><tr><td>ArkTs</td><td>UIAbility【Background】</td><td>onBackground</td><td>在 UIAbility 的 UI 页面完全不可见之后，即 UIAbility 切换至后台时候触发。可以在 onBackground 回调中释放 UI 页面不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等</td></tr><tr><td>ArkTs</td><td>WindowStage【本地窗口管理器】</td><td>onWindowStageDestroy</td><td>对应于 onWindowStageCreate 回调。在 UIAbility 实例销毁之前，则会先进入 onWindowStageDestroy 回调，我们可以在该回调中释放 UI 页面资源</td></tr><tr><td>ArkTs</td><td>UIAbility【用户交互应用组件】</td><td>onDestroy</td><td>Destroy 状态在 UIAbility 销毁时触发。可以在 onDestroy 回调中进行系统资源的释放、数据的保存等操作。</td></tr></tbody></table>',8),i=[a];function n(s,h){return d(),r("div",null,i)}const b=t(o,[["render",n],["__file","HarmonyOs、Vue、React对比.html.vue"]]);export{b as default};
