---
title: HarmonyOs、Vue、React对比
tag: HarmonyOS
date: 2024-05-15
category:
  - 前端框架
---

## ArkTS 开发语言基本介绍和区别

> 介绍：它在 TypeScript（简称 TS）的基础上，扩展了声明式 UI、状态管理等相应的能力，让开发者可以以更简洁、更自然的方式开发高性能应用。TS 是 JavaScript（简称 JS）的超集，ArkTS 则是 TS 的超集。

## 开发范式

| <div style="width:100px"></div>开发范式名称 | <div style="width:80px"></div>语言生态 | <div style="width:100px"></div>UI 更新方式 | <div style="width:80px"></div>适用场景 | 适用人群                                                                                                                              |
| ------------------------------------------- | -------------------------------------- | ------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 声明式开发范式                              | ArkTS 语言                             | 数据驱动更新                               | 复杂度较大、团队合作度较高的程序       | 移动系统应用开发人员、系统应用开发人员<br/>IOS 的 SwiftUI(声明式)和 UIKit，或者安卓的 JetpackCompose(声明式)和 JetpackUI 以及 Flutter |
| 类 Web 开发范式                             | JS 语言                                | 数据驱动更新                               | 界面较为简单的程序应用和卡片           | Web 前端开发人员                                                                                                                      |

> 说明： 声明式开发范式占用内存更少， 更推荐开发者选用声明式开发范式来搭建应用 UI 界面 。

## 生命周期

> 说明： 生命周期函数是指在组件的生命周期中，在不同的阶段执行的函数。

| 框架  | 类型                          | 生命周期函数         | 执行时机                                                                                                                                                                           |
| ----- | ----------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ArkTs | UIAbility【用户交互应用组件】 | onCreate             | 在 UIAbility 实例创建时触发。UIAbility 的生命周期包括 Create、Foreground、Background、Destroy 四个状态                                                                             |
| ArkTs | WindowStage【本地窗口管理器】 | onWindowStageCreate  | UIAbility 实例创建完成之后，在进入 Foreground 之前，系统会创建一个 WindowStage,创建后在 onWindowStageCreate(windowStage)中通过 loadContent 接口设置应用要加载的页面                |
| ArkTs | UIAbility【Foreground】       | onForeground         | 在 UIAbility 的 UI 页面可见之前，即 UIAbility 切换至前台时触发。可以在 onForeground 回调中申请系统需要的资源，或者重新申请在 onBackground 中释放的资源。                           |
| ArkTs | struct【页面】                | onPageShow           | 页面每次显示时触发                                                                                                                                                                 |
| ArkTs | struct【页面】                | onBackPress          | ：当用户点击返回按钮时触发。                                                                                                                                                       |
| ArkTs | @Component【组件】            | aboutToAppear        | 组件即将出现时回调该接口                                                                                                                                                           |
| ArkTs | @Component【组件】            | aboutToDisappear     | 组件即将销毁时执行                                                                                                                                                                 |
| ArkTs | struct【页面】                | onPageHide           | 页面每次隐藏时触发一次                                                                                                                                                             |
| ArkTs | UIAbility【Background】       | onBackground         | 在 UIAbility 的 UI 页面完全不可见之后，即 UIAbility 切换至后台时候触发。可以在 onBackground 回调中释放 UI 页面不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等 |
| ArkTs | WindowStage【本地窗口管理器】 | onWindowStageDestroy | 对应于 onWindowStageCreate 回调。在 UIAbility 实例销毁之前，则会先进入 onWindowStageDestroy 回调，我们可以在该回调中释放 UI 页面资源                                               |
| ArkTs | UIAbility【用户交互应用组件】 | onDestroy            | Destroy 状态在 UIAbility 销毁时触发。可以在 onDestroy 回调中进行系统资源的释放、数据的保存等操作。                                                                                 |
