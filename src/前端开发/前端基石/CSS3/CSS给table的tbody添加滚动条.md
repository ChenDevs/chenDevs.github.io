---
title: CSS给table的tbody添加滚动条
date: 2022-06-29 09:34:23
category:
  - 页面
  - CSS
---

```css
table tbody {
  height: 200px;
  overflow-y: auto;
  display: block;
}

table thead,
tbody tr {
  display: table;
  width: 100%;
}
```
