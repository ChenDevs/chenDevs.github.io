---
title: 《JavaScript高级程序设计》笔记
date: 2020-06-12 12:39:01
category:
  - 笔记
tag:
  - 笔记
  - 红宝书
---

# 《JavaScript 高级程序设计》笔记

## 第 1 章 JavaScript 简介

- JavaScript 诞生于**1995**年

- 一个完整的 JavaScript 由这三部分组成：
  - **ECMAScript** (核心)
  - **DOM** (文档对象模型)
  - **BOM** (浏览器对象模型)
- ECMAScript 的 **宿主环境** 包含 ：

  - 浏览器
  - Node
  - flash

- ECMAScript 大致规定了下列组成部分：
  - 语法
  - 类型
  - 语句
  - 关键字
  - 保留字
  - 操作符
  - 对象

## 第 2 章 在 HTML 中使用 JavaScript

- `<script>` 标签有下列常见属性：
  - async 表示立即下载脚本，不妨碍页面的其他操作（异步下载）
    - 无法保证每个 js 的顺序
    - 用于互不依赖的 js
    - 主要目的是不让页面等 js
  - defer 延迟到文档完全解析和显示之后在执行
    - 在`</html>`标签之后执行
  - src 外部文件链接
  - type 表示编写代码使用的脚本语言的内容类型
    - `text/javascript`

## 第 3 章 基本概念

- 语法，借鉴了 C 语言

  - **区分大小写**
  - **标识符**，指的是**变量、函数、属性**的名字
    - 第一个字符必须是 字母、下划线、或美元符号
    - 其他字符可以是字母、下划线、美元符号或数字

- 严格模式

  ```js
  'use strict'

  ```

- 数据类型

  - 基本数据类型
    - Undefined、Null、Boolean、Number、String
    - `typeof`操作符，一般用于基本类型的检测，返回相应类型的字符串
      - “undefined”,"boolean","string","number","object","function"
  - 复杂数据类型
    - Object

- `Null`类型

  - 表示**空对象指针**
  - 只要意在保存对象的变量还没有真正保证对象，则保存`null`
  - `undefined`派生自`null`，因此用`==`比较返回`true`

- 浮点数，指的是数值中包含一个小数点，并且小数点后面至少有一位数字

- NaN

  - 任何涉及 NaN 的操作都返回`NaN`
  - `NaN`与任何值都不相等，包括`NaN`本身

- 数值转换

  - 有 3 个函数可以把非数值转换为数值
    - Number() 可以用于任何数据类型
    - parseInt() 专门用于字符串转数值，用于解析整数
    - parseFloat() 专门用于字符串转数值，用于解析浮点数

- 字符串

  - 数值、布尔值、对象、字符串值本身 都有 toString()方法，用于转为字符串
  - undefined 和 null 没有 toString()方法，但可以使用 String()方法

- Object 类型

  - 对象其实就是一组数据与功能的集合

  - 使用 Object()构造函数创建对象

    ```js
    var obj = new Object() // 同 obj = {}
    ```

  - 每个对象实例都有下列属性和方法

    - `constructor` 指向用于创建当前对象的构造函数 。（对于上面例子而言，就是`Object()`）
    - `hasOwnProperty(propertyName)` 用于检查给定属性是否在当前对象实例中
    - `isPrototypeOf(Object)` 用于检查传入的对象是否是当前对象的原型
    - `propertyIsEnumerable(propertyName)` 用于检查给定的属性是否能够使用`for-in`来枚举
    - `toLocaleString()` 返回对象的字符串表示，该字符串与执行环境的地区对应
    - `toString()` 返回对象的字符串表示
    - `valueOf()` 返回对象的字符串、数值、布尔值表示。通常与`toString()`返回值相同

    **所有对象都有以上属性和方法**

- **操作符**

  - 一元操作符
    - ++
    ***
    - 前置与后置的区别是与其他数运算时，前置会先执行递增（减）再与其他数运算，后置会先与其他数运算再对自身执行递增(减)
  - 布尔操作符
    - 与 (&&)
      - 短路操作，即如果第一个操作数能决定结果，就不会对第二个操作数求值
    - 或 (||)
      - 短路操作，即如果第一个操作数能决定结果，就不会对第二个操作数求值
    - 非 (!)
      - 先使用 Boolean()转成布尔值再取反

- **语句**（也称流控制语句）

  - if-else

  - do-while

    - 后测试循环语句，在对表达式求值之前，循环体内的代码至少会被执行一次

      ```js
      var i = 0
      do {
        i += 2
      } while (i < 10) // 只要i小于10就会一直循环
      ```

  - while

    - 前测试语句

      ```js
      var i = 0
      while (i < 10) {
        i += 2
      } // 只要i小于10就会一直循环
      ```

  - for

    - 使用 while 循环做不到的，使用 for 循环同样做不到。就是说，for 循环只是把与循环有关的代码集合在一个位置

      ```js
      for (初始化; 条件; 循环后执行) {
        // ...
      }
      ```

    - break 立即退出循环
    - continue 退出当前单次循环

  -

  - for- in 用来枚举对象的属性

- 函数
  - 任何函数都可以在任何时候返回任何值
  - 未指定返回值的函数会返回一个 undefined
  - 通过 arguments 访问参数，它是一个类数组

## 第 4 章 变量、作用域和内存问题

- 变量包含两种类型的值：

  - 基本类型值，指的是简单的数据段
  - 引用类型值，指的是那些可能由多个值构成的**对象**

- 复制变量值

  - 复制基本类型的变量值只是复制了该值的副本
  - 复制引用类型的变量值时，同样也会将存储在变量对象的值复制一份放到新变量的空间中，不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。两个变量指向同一个对象。

- 传递参数
  - 所有函数的参数都是按值传递的
- 检测类型

  - `typeof` 检测基础类型
  - `instanceof`检测引用类型
    - 变量 instanceof 构造函数（例：obj instanceof Object）
    - 所有引用类型的值都是 Object 的实例

- 执行环境
  - 在浏览器中，全局执行环境是`window`对象
  - 每个函数都有自己的**执行环境**
- 作用域链
  - 当代码在一个环境中执行时，会创建变量对象的一个**作用域链**
  - 作用域链的前端，始终是当前执行的代码所在环境的变量对象。
  - 作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含对象。这样一直延续到全局执行环境。
  - 全局执行环境的变量对象始终都是作用域链中的最后一个对象。
- 垃圾收集
  - JavaScript 具有自动垃圾收集机制
    - 对于不再使用的变量打上标记，被打上标记的变量将在执行回收时被清除，释放内存空间。

## 第 5 章 引用类型

- 引用类型的值是引用类型的一个实例
- 引用类型就是一种数据结构，描述了一类对象所具有的属性和方法

- 创建 Object 实例的方式有两种：

  - ```js
    var obj = new Object()
    ```

  - ```js
    var obj = {} // 与 new Object() 相同，但实际不会调用Object构造函数
    ```

- 访问对象的属性有两种：

  - 点表示法 和 方括号表示法

### Array 类型

- length 属性不是只读的

- 检测数组

  - ```js
    value instanceof Array
    ```

  - ```js
    Array.isArray(value)
    ```

- 转换方法

  - toLocaleString() 与 toString()相同
  - toString() 返回数组中每个值的字符串形式用逗号分隔拼接而成的字符串
  - valueOf() 返回数组本身

#### join() 转换方法 (不改原数组)

接收一个参数，用作分隔符的字符串，然后返回包含所有数组项的字符串。

```js
var arr = ['red', 'blue', 'green']
var arrStr = arr.join('|') // "red|blue|green"

arr.join() // "red,blue,green"
arr.join('') // "redbluegreen"
```

#### 栈方法，后进先出 push() 、pop() (改变原数组)

- push() 向数组末尾添加成员，返回总长
- pop() 移除数组末尾一个成员，返回该成员

#### 队列方法，先进先出 push()、shift() 、unshift() (改变原数组)

- shift() 移除数组首个成员，返回该成员

- unshift() 在数组前面添加成员，返回总长

push()和 shift() 形成队列方法

unshift 和 pop() 形成反方向队列方法

#### 重排序方法 reverse() 反转 sort() 排序 （改变原数组）

- reverse() 反转数组项的顺序
- sort() 接收一个函数作为参数，函数接收两个参数。
  - 自定义排序：函数内，如果第一个参数应该位于第二个之前，则手动返回一个负数，如果两个参数相等，手动返回 0，如果第一个参数应该位于第二个参数之后，则手动返回一个正数。

```js
// 升序
arr.sort(function(a,b){
    if(a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        retunr 0
    }
})
```

简写：

```js
arr.sort((a, b) => {
  return a - b // 升序， b-a 降序
})
```

#### 操作方法 concat() 拼接，slice() 切片，splice() 移接

- concat() 拼接数组 （**不改原数组**）

  ```js
  var arr1 = ['a', 'b']
  var arr2 = arr1.concat('c', 'd') // ['a','b','c','d']
  ```

- slice() 切片（**不改原数组**）

  - slice(起始位置 [, 结束位置]) 返回起始位置到结束位置的成员，不包含结束位置。

  ```js
  var arr1 = [1, 2, 3, 4, 5]
  var arr2 = arr1.slice(1, 3) // [2,3]
  var arr3 = arr1.slice(2) // [3,4,5]
  ```

- splice() 移接 （**改变原数组**）

  - splice(起始位置, 要删除的个数，要插入的项)
    - 要插入的项 可以有 0 个或多个
  - splice() 始终返回一个数组，该数组成员中包含原始数组中被删除的项，如果没有则返回空数组。
  - 数组最强大的方法，可用于删除、插入、替换操作

  ```js
  arr = [1, 2, 3, 4]
  arr.splice(1, 1) // [2]
  arr // [1,3,4]

  arr = [1, 2, 3, 4]
  arr.splice(2, 0, 'a') // []
  arr // [1,2,'a',3,4]

  arr = [1, 2, 3, 4]
  arr.splice(3, 1, 'a') // [4]
  arr // [1,2,3,'a']
  ```

#### 位置方法 indexOf()、lastIndexOf()

- 查找项的位置，没有则返回-1
- indexOf() 从前面开始找，lastIndexOf() 从后面开始找

#### 迭代方法 every()、some() 、filter()、map() 、forEach() （都不会改变原数组）

- 5 个迭代方法，每个方法都接收两个参数：
  - 在每项上运行的函数
  - 运行函数的作用域对象
- 函数接收三个参数：

  - 数组项的值
  - 该项的索引
  - 数组本身

- every() 如果函数对每项都返回 true，则返回 true

  - 例：判断数组每一项是否都大于 2

    ```js
    var numbers = [1, 2, 3, 2, 1]
    var result = numbers.every((item, index, array) => {
      return item > 2
    })
    result // false
    ```

- some() 如果函数对任一项返回 true，则返回 true

  - 例：判断数组是否包含大于 2 的值

    ```js
    var numbers = [1, 2, 3, 2, 1]
    var result = numbers.some((item, index, array) => {
      return item > 2
    })
    result // true
    ```

- filter() 返回函数会返回 true 的项组成的数组

  - 例：过滤掉数组中小于等于 2 的数

    ```js
    var numbers = [1, 2, 3, 4, 5]
    var result = numbers.filter((item, index, array) => {
      return item > 2
    })
    result // [3,4,5]
    ```

- map() 返回每次函数调用的结果组成的数组

  - 例：给数组每一项乘以 2

    ```js
    var numbers = [1, 2, 3, 4, 5]
    var result = numbers.map((item, index, array) => {
      return item * 2
    })
    result // [2,4,6,8,10]
    ```

- forEach() 循环数组每一项，没有返回值

  - 例：循环每一项

    ```js
    var numbers = [1, 2, 3, 4, 5]
    numbers.forEach((item, index, array) => {
      // 做一些操作
    })
    ```

#### 归并方法 reduce() reduceRight()

- reduce() 归并为

- reduceRight() 从右边归并

- 这两个方法都会迭代数组所有项，然后构建一个最终结果并返回

- 方法接收两个参数： 每一项上调用的函数，归并基础的初始值

- 函数接收 4 个参数：前一个的值、当前值、当前值的索引、数组对象

- 例：求数组每一项之和

  ```js
  var numbers = [1, 2, 3, 4, 5]
  var result = number.reduce((prev, cur, index, arr) => {
    return prev + cur
  })
  result // 15
  ```

- reduce()方法，第一次执行函数时，prev 是数组的第一项，cur 是数组的第二项

## 第 6 章 面向对象的程序设计

### 6.1 理解对象

- 对象的定义：无序属性的集合，其属性可以包含基本值、对象或者函数。
  - 一组键值对，其中值可以是数据或函数

#### 6.1.1 对象的属性

​ 包含两种：**数据属性** 和 **访问器属性**

##### 1.数据属性

- configurable 可配置性（限制 delete 删除属性和`Object.defineProperty()`方法是否起效。），默认 true
- enumerable 可列举性，默认 true
- writable 可写性，默认 true
- value 值，默认 undefined

使用`Object.defineProperty()`方法修改这些默认属性。接收三个值：**属性所在的对象、属性名、描述符对象**。

```js
var person = {}
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'xu'
})

console.log(person.name) // xu
person.name = 'gao' // 修改无效
console.log(person.name) // xu
```

使用此方法定义属性如未指定`configurable`、`enumerable`、`writable` 将默认`false`。

##### 2.访问器属性

包含两个函数：getter 函数和 setter 函数（这两个函数都是非必需）。读取时调用 getter，访问时调用 setter。

使用`Object.defineProperty()`方法定义访问器属性。

```js
var book = {
  _year: 2020,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    if (newValue > 2020) {
      this._year = newValue
      this.edition += newValue - 2020
    }
  }
})

book.year = 2021
console.log(book.edition) // 2
```

当 getter 函数和 setter 函数只指定其中一个时，另外一个将不能用。

#### 6.1.2 定义多个属性

`Object.defineProperties()`方法定义多个属性。接收两个参数: 要添加或修改属性的对象 、第二个参数是一个对象，其属性与第一个参数中的属性一一对应。

```js
var book = {}
Object.defineProperties(book, {
  _year: {
    // 数据属性
    writable: true,
    value: 2004
  },
  edition: {
    // 数据属性
    writable: true,
    value: 1
  },
  year: {
    // 访问器属性
    get: function () {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})

// 定义了三个属性，每个属性有不同的描述符
```

#### 6.1.3 读取属性的特性（描述符对象）

`Object.getOwnPropertyDescriptor()`方法获取描述符，接收两个参数： 属性所在的对象、属性名

```js
var book = {}
Object.defineProperties(book, {
  _year: {
    // 数据属性
    writable: true,
    value: 2004
  },
  edition: {
    // 数据属性
    writable: true,
    value: 1
  },
  year: {
    // 访问器属性
    get: function () {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})

var descriptor = Object.getOwnPropertyDescriptor(book, '_year')
console.log(descriptor) // {value: 2020, writable: true, enumerable: false, configurable: false}
var descriptor = Object.getOwnPropertyDescriptor(book, 'year')
console.log(descriptor) // {enumerable: false, configurable: false, get: ƒ, set: ƒ}
```

### 6.2 创建对象

使用 Object 构造函数或对象字面量方式创建对象。缺点：使用同一个接口创建很多对象时，会产生大量重复代码。解决方案：使用工厂模式的一种变体。

#### 6.2.1 工厂模式

用函数封装以特定接口创建对象的细节

```js
function createPerson(name, age, job) {
  var o = new Object() //显式创建对象
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o //返回对象
}
var person1 = createPerson('Greg', 22, 'Doctor')
person1 instanceof createPerson //false
```

工厂模式解决了创建多个相似对象的问题，但没有解决对象识别的问题（即怎样知道一个对象的类型）

#### 6.2.2 构造函数模式

类似 Object、Array 原生构造函数，在运行时自动出现在执行环境中。
自定义构造函数可以将它的实例标示为一种特定类型（胜过工厂模式）

```js
function Person(name, age, job) {
  this.name = name //将属性赋给this对象
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}
var person1 = new Person('Greg', 22, 'Doctor')
person1 instanceof Object //true
person1 instanceof Person //true
```

> 【注】a. 构造函数应以大写字母开头，b. 创建 Person 实例需要使用 new 操作符，c. 实例对象包含 constructor 属性（值是该构造函数）

构造实际步骤：

- （1）创建一个新对象
- （2）将构造函数的作用域赋给新对象（this 指向新对象）
- （3）执行构造函数中代码
- （4）返回新对象

将构造函数当做函数

- a. 当做构造函数，使用 new 调用
- b. 作为普通函数，直接调用。浏览器中，this 为 window（即给 window 添加属性和方法）
- c. 在另一个对象的作用域中调用

```js
var o = new Object()
Person.call(o, 'Jack', 24, 'Nurse')
o.sayName() //"Jack"
```

构造函数的问题

每个方法都要在每个实例上重新创建一遍，即构造出的不同对象 person1、person2，其同名方法（sayName）并不是同一个 Function 实例

```js
this.sayName = new Function('console.log(this.name)') //每个person实例都包含一个不同Function实例
```

实际并不需要在执行代码前就把函数绑定到特定对象上面。解决：将函数定义转移到构造函数外部

```js
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}
function sayName() {
  alert(this.name)
}
var person1 = new Person('Nicholas', 29, 'Doctor')
var person2 = new Person('Nicholas', 27, 'Nurse')
alert(person1.sayName == person2.sayName) //true
```

> 【注】person1 和 person2 对象共享了在全局作用域定义的同一个 sayName() 函数；但是这样一来，自定义引用类型就失去了封装性。

#### 6.2.3 原型模式

prototype：通过构造函数创建的那个对象实例的原型对象
每个函数都有一个 prototype 指针属性，指向一个包含由特定类型的所有实例共享的属性和方法
使用原型对象的好处：让所有对象实例共享它所包含的属性和方法（不必在构造函数中定义对象实例的信息）

```js
function Person(name, age, job) {
  Person.prototype.name = 'Nicholas' //将属性赋给this对象
  Person.prototype.age = 24
  Person.prototype.job = 'Doctor'
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}
var person1 = new Person()
person1.sayName() //Nicholas
var person2 = new Person()
person2.sayName() //Nicholas
alert(person1.sayName == person2.sayName) //true
```

> 【注】此时构造函数变成了空函数，person1 和 person2 访问的都是同一组属性和同一个 sayName 函数

##### 1. 理解原型对象

每个函数都有一个 prototype 属性，它指向函数的原型对象。
默认情况下，所有原型对象都会自动获得一个 constructor 属性，其指向 prototype 属性所在函数的指针。前述 Person.prototype.constructor 指向 Person 函数。
每个构造函数创建的新实例都包含一个[[Prototype]]指针属性(浏览器中为**proto**)，指向构造函数的原型对象。指针连接存在于实例与构造函数的原型对象之间（实例对象与构造函数没有直接关系）

```
person1
Person {}
  __proto__:
  age:24
  job:"Doctor"
  name:"Nicholas"
  sayName:ƒ ()
  constructor:ƒ Person(name, age, job)
  __proto__:Object
Person
ƒ Person(name, age, job) { Person.prototype.name = 'Nicholas'; //将属性赋给this对象 Person.prototype.age = 24;
Person.prototype.job = 'Doctor'; Person.prototype.sayName = function() { consol…

Person.prototype
{name: "Nicholas", age: 24, job: "Doctor", sayName: ƒ, constructor: ƒ}
age:24
job:"Doctor"
name:"Nicholas"
sayName:ƒ ()
constructor:ƒ Person(name, age, job)
__proto__:Object
```

确定实例对象与原型对象之间的关系：（通过实例对象获取[[Prototype]]指针指向的原型对象）

- 1、[[Prototype]]在浏览器中支持的**proto**属性
- 2、原型对象的 isPrototypeOf(obj) 方法（若参数的[[Prototype]]指向调用该方法的对象，则返回 true）
- 3、Object.getPrototypeOf(obj)

```js
Person.prototype == person1.__proto__ //true
Person.prototype.isPrototypeOf(person1) //true
Object.getPrototypeOf(person1) == Person.prototype //true
```

对象实例共享原型属性和方法的基本原理：

> 调用 person1.sayName()时，会先后执行两次搜索。首先解析器搜索实例 person1 是否有 sayName 属性，结果是没有；然后搜索 person1 的原型是否有 sayName 属性，结果有；于是读取保存在原型对象中的函数。

重定义原型属性：

> 可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。
> 在实例中添加的属性与该原型中的属性同名时，该实例属性会被创建，并屏蔽原型中的同名属性。

```js
var person1 = new Person()
var person2 = new Person()
person1.name = 'Greg'
alert(person1.name) //"Greg" ——来自实例
alert(person2.name) //"Nicholas" ——来自原型
```

使用 delete 删除实例属性：

```js
var person1 = new Person()
person1.name = 'Greg'
alert(person1.name) //Greg
delete person1.name
alert(person1.name) //Nicholas
```

hasOwnProperty(prop)方法检测该属性是否在实例中：
便于知道访问的是实例属性还是原型属性

```js
var person1 = new Person()
alert(person1.hasOwnProperty('name')) //false
person1.name = 'Greg'
alert(person1.hasOwnProperty('name')) //true
delete person1.name
alert(person1.hasOwnProperty('name')) //false
```

##### 2、原型与 in 操作符

> in 操作符的两种使用场景：单独使用、for-in 循环

（1）单独使用时，in 操作符会在通过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中

```js
var person1 = new Person()
alert('name' in person1) //true
person1.name = 'Greg'
alert('name' in person1) //true
```

（2）使用 for-in 循环时，返回是是所有能通过对象访问的、可枚举的属性（既包括实例中的属性，也包括原型中的属性）

```js
var person1 = new Person() //实例无属性
for (var prop in person1) {
  console.log(prop)
}
//name
//age
//job
//sayName
```

Object.keys(obj) 取得对象所有可枚举属性 //return [props]
参数为原型对象时，返回原型对象属性；参数为实例对象时，返回实例对象属性。

```js
Object.keys(Person.prototype) //["name", "age", "job", "sayName"]
var person1 = new Person()
person1.name = 'Rob'
person1.age = 24
Object.keys(person1) //["name", "age"]
```

Object.getOwnPropertyNames(obj) 获取所有实例属性（无论是否可枚举）

```js
var person1 = new Person()
Object.getOwnPropertyNames(person1) //[]
Object.getOwnPropertyNames(Person.prototype) //["constructor", "name", "age", "job", "sayName"]
```

> 【注】constructor 为不可枚举属性。Object.keys(person1), Object.getOwnPropertyNames(person1) 都可以替代 for-in 循环

##### 3、更简单的原型语法

用一个包含所有属性和方法的对象字面量来重写整个原型对象

```js
function Person() {}
Person.prototype = {
  name: 'Nicholas',
  age: 25,
  sayName: function () {
    console.log(this.name)
  }
}
Person.prototype.constructor //ƒ Object() { [native code] }
new Person().constructor == Person //false
new Person() instanceof Person //true
```

> 【注】：constructor 属性不在指向 Person。当创建一个函数时，同时会创建其 prototype 对象，该对象自动获得 constructor 属性。而这里本质上是重写了默认的 prototype 对象，因此 constructor 属性指向 Object 构造函数。

设置恢复 constructor：

```js
function Person() {}
Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 25,
  sayName: function () {
    console.log(this.name)
  }
}
Person.prototype.constructor //ƒ Person() {}
new Person().constructor == Person //true
Person.prototype //{constructor: ƒ, name: "Nicholas", age: 25, sayName: ƒ}
```

> 【注】上述添加 constructor 属性，使得 constructor 的 [[Enumerable]] 特性被设置为 true。默认情况下，原生的 constructor 属性是不可枚举的

Object.defineProperty(obj, prop, {descriptor}) 重设构造函数

```js
function Person() {}
Person.prototype = {
  name: 'Nicholas',
  age: 25,
  sayName: function () {
    console.log(this.name)
  }
}
Object.defineProperty(Person.prototype, 'consructor', {
  enumerable: false,
  value: Person
})
Person.prototype //{name: "Nicholas", age: 25, sayName: ƒ, constructor: ƒ}
```

##### 4、原型的动态性

由于在原型中查找值是一次搜索，因此对原型所做的修改都可反映出来。允许先创建实例，再为原型对象添加方法，然后实例调用该方法

```js
var person1 = new Person()
Person.prototype.sayHi = function () {
  alert('Hi')
}
person1.sayHi() //Hi
```

但是当重写整个原型对象时，等于切断了构造函数与最初原型之间的联系 [[Prototype]] (**proto**)
实例对象的**proto**属性引用的仍是重写前的原型

```js
function Person() {}
var person1 = new Person()
Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 25,
  sayName: function () {
    console.log(this.name)
  }
}
person1.sayName() //Uncaught TypeError: person1.sayName is not a function
person1.__proto__ //{constructor: ƒ}
```

##### 5、原生对象的原型

所有原生引用类型都在其构造函数上定义了方法：

```js
typeof Array.prototype.sort //function
typeof String.prototype.substring //function
```

通过原生对象的原型，还可以定义新方法：

例：为 String 包装类型添加 startsWith() 方法

```js
String.prototype.startsWith = function (text) {
  return this.indexOf(text) == 0
}
'Hello world'.startsWith('Hello') //true
```

> 【注】不推荐产品化的程序中修改原生对象的原型

6、原型对象的问题

原型模式的最大问题是由其共享的本性导致的：

对于包含引用类型的属性来说，实例 1 对原型引用类型属性的修改会同时表现在其他实例中（而无法有属于自己的属性）——所以一般很少单独使用

```js
function Person() {}
var person1 = new Person()
Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 25,
  friends: ['Jack', 'Rob'],
  sayName: function () {
    console.log(this.name)
  }
}
var person1 = new Person()
var person2 = new Person()
person1.friends.push('Van')
alert(person1.friends) //Jack,Rob,Van
alert(person2.friends) //Jack,Rob,Van
```

#### 6.2.4 组合使用构造函数和原型模式（广泛使用）

构造函数用于定义实例属性（支持传参），原型模式用于定义方法和共享属性

```js
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['Jack', 'Rob']
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    alert(this.name)
  }
}
var person1 = new Person('Nicholas', 25, 'Software Engineer')
var person2 = new Person('Greg', 22, 'Doctor')
person1.friends.push('Van')
alert(person1.friends) //Jack,Rob,Van
alert(person2.friends) //Jack,Rob
alert(person1.sayName === person2.sayName) //true
```

#### 6.2.5 动态原型模式

把所有信息封装在构造函数中，通过在构造函数中初始化原型，检查某个应该存在的方法是否有效，来决定是否需要初始化原型方法

```js
function Person(name, age, job) {
     //属性
     this.name = name;
     this.age = age;
     this.job = job;
     //方法
     if (typeof this.sayName != 'Function') {
         Person.prototype.sayName = function() {
         alert(this.name)
     }
}
var person1 = new Person('Greg', 28, 'Doctor')
person1.sayName() //Greg
```

> 【注】只在 sayName()方法不存在情况下才会将它加到原型中。首次调用构造函数会执行 if 中的原型方法初始化语句，此后不需要在修改了。

使用动态原型模式时，不能使用对象字面量重写原型。（避免在已经创建了实例情况下重写原型，会切断现有实例与新原型之间的联系）

#### 6.2.6 寄生构造函数模式

创建的函数仅仅是包装对象，然后返回新创建的对象，使用 new 操作符实例化（仅这一点区别于工厂模式）

```js
function Person(name, age, job) {
  var o = new Object() //显式创建对象
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o //返回对象
}
var person1 = new Person('Greg', 27, 'Doctor')
person1.sayName() //Greg
```

> 【注】返回对象与构造函数（原型）之间没有关系，函数返回的对象与在构造函数外部创建的对象没什么不同，所以不能依赖 instanceof 操作符确定对象类型

#### 6.2.7 稳妥构造函数模式

稳妥对象（durable objects）：没有公共属性，新创建对象的实例方法不引用 this，不使用 new 操作符调用构造函数

```js
function Person(name, age, job) {
  var o = new Object() //显式创建对象
  //可定义私有变量和函数
  //公共方法
  o.sayName = function () {
    console.log(name)
  }
  return o //返回对象
}
var person1 = Person('Greg', 27, 'Doctor')
person1.sayName() //Greg
```

> 【注】除了调用 sayName()方法外，没有别的方法可以访问其数据成员，提供了安全性

### 6.3 继承

面向对象语言支持：接口继承（继承方法签名）、实现继承（继承实际方法）

ECMAScript 只支持实现继承，依靠原型链来实现

#### 6.3.1 原型链

原型链实现继承的思想：利用原型让一个引用类型继承另一个引用类型的属性和方法
让子类原型对象等于父类的实例，原型对象将包含一个指向另一个原型的指针；
继承：通过创建父类的实例，并将该实例赋给子类的原型实现。本质：重写子类原型对象，代之以一个父类的实例。即原来存在于父类的实例中的所有属性和方法，现在也存在于子类原型对象中了。

```js
function SuperType() {
     this.property = true
}
SuperType.prototype.getSuperValue = function () {
     return this.property
}
function SubType() {
     this.subproperty = false
}
//继承了SuperType，子类原型包括父类实例属性和指向父类原型对象的指针
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function() {
     return this.subproperty
}
var instance = new SubType()
alert(instance.getSuperValue()) //true

SuperType.prototype
{getSuperValue: ƒ, constructor: ƒ}

SubType.prototype
SuperType {property: true, getSubValue: ƒ}
  getSubValue:ƒ ()
  property:true
  __proto__:
    getSuperValue:ƒ ()
    constructor:ƒ SuperType()
    __proto__:Object

SubType.prototype.__proto__
{getSuperValue: ƒ, constructor: ƒ}

SubType.prototype.constructor
ƒ SuperType() {
this.property = true
}

instance.__proto__
SuperType {property: true, getSubValue: ƒ}

instance.constructor
ƒ SuperType() {
this.property = true
}
```

> 【注】a. 子类原型不仅具有父类实例所拥有的全部属性和方法，还有一个指针，指向父类的原型。
> b.子类实例的 constructor 属性等于子类原型的 constructor 属性。而子类原型又指向父类原型，而父类原型有 constructor 属性，于是子类实例的 constructor 属性等于父类原型的 constructor 属性。

##### 1、别忘记默认的原型

所有引用类型默认都继承了 Object，所有函数的默认原型都是 Object 的实例，因此默认原型都会有一个内部指针，指向 Object.prototype。（所有自定义类型都会继承 toString()、valueOf()等默认方法）完整的原型链如图：

##### 2、确定原型和实例的关系

（1）instanceof 操作符测试实例与原型链中出现过的构造函数

```js
alert(instance instanceof Object) //true
alert(instance instanceof SuperType) //true
alert(instance instanceof SubType) //true
```

2）isPrototypeof() 方法，只要是原型链中出现过的原型，都可以说是该原型链所派生出的实例的原型

```js
alert(Object.prototype.isPrototypeOf(instance)) //true
alert(SuperType.prototype.isPrototypeOf(instance)) //true
alert(SubType.prototype.isPrototypeOf(instance)) //true
```

##### 3、先替换原型再添方法

子类覆盖（重定义）父类方法或添加父类没有的方法，需要在替换原型之后进行。

```js
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}
//继承了SuperType
SubType.prototype = new SuperType()
//添加新方法
SubType.prototype.getSubValue = function () {
  return this.subproperty
}
//重写父类的方法
SubType.prototype.getSuperValue = function () {
  return false
}
var instance = new SubType()
alert(instance.getSuperValue()) //false
```

> 【注】在通过原型链实现继承时，不能使用对象字面量(Object 实例)创建原型方法（会重写原型链）

```js
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}
SubType.prototype = new SuperType()
//使用对象字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
  getSubType: function () {
    return this.subproperty
  }
}
var instance = new SubType()
alert(instance.getSuperValue()) //Uncaught TypeError: instance.getSuperValue is not a function
```

##### 4、原型链的问题

（1）最主要问题来自包含引用类型的原型：在构造函数中定义引用类型属性，并通过原型实现继承，父类实例的引用类型属性变成了子类原型的引用类型属性。相当于为子类原型创建引用类型属性一样：SubType.prototype.colors = [xxx]，所有子类实例都会共享这一引用属性。

```js
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}
function SubType() {}
//继承了SuperType
SubType.prototype = new SuperType()
var instance1 = new SubType()
instance1.colors.push('black')
alert(instance1.colors) //red,blue,green,black
var instance2 = new SubType()
alert(instance2.colors) //red,blue,green,black
```

（2）在创建子类实例时，不能向父类构造函数中传递参数（实践中很少单独使用原型链）

#### 6.3.2 借用构造函数

借用构造函数(constructor stealing)（伪造对象或经典继承）：在子类构造函数的内部使用父类构造函数。

> 函数是：在特定环境中执行代码的对象

##### 1、向父类构造函数传递参数

```js
function SuperType(name) {
  this.name = name
}
function SubType() {
  //继承了SuperType,同时传递参数
  SuperType.call(this, 'Nicholas')
  //实例属性
  this.age = 29
}
var instance = new SubType()
console.log(instance.name, instance.age) //Nicholas 29
```

> 【注】为避免父类构造函数重写子类属性，可在调用父类构造函数后，添加子类自己的属性

##### 2、借用构造函数的问题

方法都在构造函数中定义，函数复用无从谈起；父类原型中的方法对子类不可见。(?)

#### 6.3.3 组合继承(combination inheritance)——最常用继承

又称伪经典继承：将原型链和借用构造函数组合到一块

思路：使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承

```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType(name, age) {
  //继承属性
  SuperType.call(this, name)
  //实例属性
  this.age = age
}
//继承方法
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType //重写子类构造函数以便实例化传参
SubType.prototype.sayAge = function () {
  console.log(this.age)
}

var instance1 = new SubType('Nicholas', 29)
instance1.colors.push('black')
console.log(instance1.colors) //["red", "blue", "green", "black"]
instance1.sayName() //Nicholas
instance1.sayAge() //29

var instance2 = new SubType('Greg', 27)
console.log(instance2.colors) //["red", "blue", "green"]
instance2.sayName() //Greg
instance2.sayAge() //27
```

> 【注】组合继承最大问题：必须调用两次父类构造函数，一次是创建子类原型时，另一次是在子类构造函数内部。
> 即子类最终包含父类对象的全部实例属性，我们不得不在调用子类构造函数时重写这些属性。

```js
instance1
SubType {name: "Nicholas", colors: Array(4), age: 29}
  age:29
  colors:(4) ["red", "blue", "green", "black"]
  name:"Nicholas"
  __proto__:SuperType
    colors:(3) ["red", "blue", "green"]
    constructor:ƒ SubType(name, age)
    name:undefined
    sayAge:ƒ ()
    __proto__:Object
```

#### 6.3.4 原型式继承

借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型

```js
function object(o) {
  function F() {} //临时构造函数
  F.prototype = o //将传入对象作为此构造函数的原型
  return new F() //返回临时构造函数新实例
}
```

本质：object() 对传入其中的对象执行一次浅复制

原型式继承要求必须有一个对象可以作为新对象的基础（原型），原型属性会被其他新对象所共享（相当于创建了初始对象的副本）

```js
function object(o) {
  function F() {} //临时构造函数
  F.prototype = o //将传入对象作为此构造函数的原型
  return new F() //返回临时构造函数新实例
}
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}
var person1 = object(person)
person1.name = 'Greg'
person1.friends.push('Rob')
var person2 = object(person)
person2.name = 'Linda'
person2.friends.push('Jack')
alert(person.friends) //Shelby,Court,Van,Rob,Jack
```

ECMAScript 5 新增了 Object.create(protoObj, [propObj]) 方法规范了原型式继承
方法接收两参数：用作新对象原型的对象、为新对象定义额外属性的对象（可选）
传入一个参数时，Object.create(protoObj) 等于 Object(protoObj)

```js
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}
var person1 = Object.create(person)
person1.name = 'Greg'
person1.friends.push('Rob')
var person2 = Object(person)
person2.name = 'Linda'
person2.friends.push('Jack')
alert(person.friends) //Shelby,Court,Van,Rob,Jack
```

Object.create() 方法的第二个参数与 Object.defineProperties() 方法的第二个参数格式相同：每个属性都通过自己的描述符定义
（会覆盖原型对象上的同名属性）

```js
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}
var person1 = Object.create(person, {
  name: {
    value: 'Greg'
  }
})
alert(person1.name) //Greg
```

#### 6.3.5 寄生式继承

寄生式继承与原型式继承紧密相关，与寄生构造函数和工厂模式相似：即创建一个仅用于封装继承过程的函数，函数内部增强对象，最后返回对象

```js
function object(o) {
  function F() {} //临时构造函数
  F.prototype = o //将传入对象作为此构造函数的原型
  return new F() //返回临时构造函数新实例
}
function createAnother(original) {
  var clone = object(original) //调用构造函数创建新对象
  clone.sayHi = function () {
    //增强对象
    alert('hi')
  }
  return clone
}
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}
var person1 = createAnother(person)
person1.sayHi() //hi
```

> 【注】使用寄生式继承为对象添加函数，不能做到函数复用，与构造函数模式类似

#### 6.3.6 寄生组合式继承（最理想的继承范式）

组合继承最大问题：必须调用两次父类构造函数，一次是创建子类原型时（子类原型得到两属性），另一次是在子类构造函数内部（在新对象上创建两实例属性）。新对象创建的实例属性屏蔽了原型中的两同名属性。

```js
instance1
SubType {name: "Nicholas", colors: Array(4), age: 29}
  age:29
  colors:(4) ["red", "blue", "green", "black"]
  name:"Nicholas"
  __proto__:SuperType
    colors:(3) ["red", "blue", "green"]
    constructor:ƒ SubType(name, age)
    name:undefined
    sayAge:ƒ ()
    __proto__:Object
```

寄生式组合继承：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

思路：不必为了指定子类的原型而调用父类的构造函数（避免了父类构造实例属性）。本质上，就是使用寄生式继承父类原型，再将结果指定给子类原型

```js
function object(o) {
  function F() {} //临时构造函数
  F.prototype = o //将传入的原型对象作为此构造函数的原型
  return new F() //返回临时构造函数新实例
}
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype) //创建子类原型对象，其原型为父类原型
  prototype.constructor = subType //增强原型对象
  subType.prototype = prototype //指定原型对象
}
```

改写前面组合继承的例子：

```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  alert(this.name)
}
function SubType(name, age) {
  SuperType.call(this, name) //调用一次父类构造函数
  this.age = age
}
inheritPrototype(SubType, SuperType)
SubType.prototype.sayAge = function () {
  alert(this.age)
}
```

```js
var instance1 = new SubType('Jack', 33)
instance1
SubType {name: "Jack", colors: Array(3), age: 33}
  age:33
  colors:(3) ["red", "blue", "green"]
  name:"Jack"
  __proto__:SuperType
    constructor:ƒ SubType(name, age)
    sayAge:ƒ ()
    __proto__:
      sayName:ƒ ()
      constructor:ƒ SuperType(name)
      __proto__:Object
```

### 6.4 小结

#### 创建对象的模式

- 工厂模式：使用简单的函数创建对象，为对象添加属性和方法，然后返回对象。被构造函数模式所取代。
- 构造函数模式：可以使用 new 操作符，但其成员无法复用（包括函数）
- 原型模式：使用构造函数的 prototype 属性来指定哪些应该共享的属性和方法。组合使用构造函数模式和原型模式时，使用构造函数定义实例属性，使用原型定义共享的属性和方法。

#### 继承

- 原型链继承：通过将一个父类实例赋给子类原型实现，子类就能访问父类的所有属性和方法。
  原型链的问题：对象实例共享所有继承的属性和方法（不宜单独使用）
  解决原型链问题：借用构造函数。即在子类构造函数内部调用父类构造函数(call)，每个实例都具有自己的属性，只使用构造函数模式来定义类型。组合继承用的最多，其使用原型链继承共享的属性和方法，通过借用构造函数继承实例属性。
- 原型式继承：在不必预先定义构造函数情况下实现继承，本质是执行对给定对象的浅复制 Object.create()。而复制得到的副本可再改造。
- 寄生式继承：与原型式继承相似，结合了原型式继承和工厂模式，但对象函数无法复用。
- 寄生组合式继承：集寄生式继承和组合继承的优点，最有效。

## 第 7 章 函数表达式

定义函数的方式有两种：

- 函数声明：
  重要的是函数声明提升，函数表达式不会提升。

```js
funName()
function funName() {}
```

这个例子中，funName() 可以正常调用，不会报错。因为在代码执行之前，解析器会率先读取函数声明，并使其在执行任何代码之前可用。

- 函数表达式：

```js
funName()
var funName = function () {}
```

上面这个例子中，funName() 会报错，因为解析器会率先读取函数表达式，发现这是一个变量声明，因此会在任何代码执行之前就尝试获取 funName 的值。但这时候 funName 还没有被赋值，因此会导致错误。

### 7.1 递归

递归函数是在一个函数通过名字调用自身的情况下构成的，如下所示：

```js
function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
```

这是一个经典的递归函数，它执行了 num 和 factorial(num-1) 之间的乘法操作，而 factorial(num-1) 又执行了 num 和 factorial(num-2) 之间的乘法操作，以此类推，直到 num 等于 1。

### 7.2 闭包

有不少开发人员总是搞不清匿名函数和闭包之间的区别。闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数。

```js
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName]
    var value2 = object2[propertyName]
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}
```

在这个例子中，我们创建了一个函数，该函数接受一个参数（propertyName），然后返回一个函数。返回的函数在执行时，会根据给定的对象（object1 和 object2）的 propertyName 属性值进行比较。
使用闭包的场景：

- 封装变量：保护变量不被外部访问
- 实现公有变量：可以通过闭包来创建可以访问私有变量的公有方法

闭包的优缺点
　　优点：

- ① 保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突
- ② 在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）
- ③ 匿名自执行函数可以减少内存消耗

缺点：

- ① 其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为 null；
- ② 其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响。

下面是一个闭包,不会在函数调用结束后被垃圾回收机制回收的例子:

```js
function assignHandler() {
  var element = document.getElementById('someElement')
  element.onclick = function () {
    alert(element.id)
  }
}
```

使用闭包注意点：

- 闭包会增加内存消耗，因为闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  以上示例优化如下：

```js
function assignHandler() {
  var element = document.getElementById('someElement')
  element.onclick = function () {
    alert(element.id)
  }
  element = null
}
```

### 7.3 模仿块级作用域

匿名函数可以用来模仿块级作用域，因为块级作用域可以避免变量污染。

```js
;(function () {
  // 这里是块级作用域
})()
```

### 7.4 私有变量

私有变量包括函数的局部变量和对象的私有属性。

```js
function Person(name) {
  // 私有变量
  var privateVariable = 'private'
  // 私有函数
  function privateFunction() {
    console.log('privateFunction')
  }
  // 公有属性和方法
  this.name = name
  this.sayName = function () {
    console.log(this.name)
  }
}
```

#### 7.4.1 静态私有变量

通过在私有作用域中定义私有变量和函数，同样也可以创建特权方法，特权方法是指有权访问私有变量和私有函数的公有方法。

```js
function MyObject() {
  // 私有变量
  var privateVariable = 'private'
  // 私有函数
  function privateFunction() {
    console.log('privateFunction')
  }
  // 特权方法
  this.publicMethod = function () {
    privateVariable = 'public'
    privateFunction()
  }
}
```

#### 7.4.2 模块模式

模块模式是为单例创建私有变量和特权方法。

```js
var singleton = (function () {
  // 私有变量
  var privateVariable = 'private'
  // 私有函数
  function privateFunction() {
    console.log('privateFunction')
  }
  // 返回公有方法
  return {
    publicMethod: function () {
      privateVariable = 'public'
      privateFunction()
    }
  }
})()
```

这个例子中，我们创建了一个名为 singleton 的对象，它包含一个公有方法 publicMethod，该方法可以访问私有变量 privateVariable 和私有函数 privateFunction。

#### 7.4.3 增强的模块模式

增强的模块模式是在增强的模块模式基础上，创建一个自定义的对象。增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加额外的属性和方法。

```js
var myNamespace = (function (my) {
  var privateVariable = 'private'
  function privateFunction() {
    console.log('privateFunction')
  }
  my.publicMethod = function () {
    privateVariable = 'public'
    privateFunction()
  }
  return my
})(myNamespace || {})
```

### 7.5 小结

匿名函数又称为拉姆达函数，它没有函数名，也没有函数声明。匿名函数通常被用作回调函数，或者作为立即执行函数表达式（IIFE）。有以下特点

- 函数表达式不同于函数声明，函数声明要求有一个函数名，而函数表达式则可以省略函数名。
- 在无法确定如何引用函数的情况下，递归函数就会变得比较复杂
- 递归函数应该始终有一个退出条件，否则会导致无限递归
- 在后台执行环境中，闭包的作用域链包含着它自己的作用域，函数的作用域以及全局作用域
- 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁
- 函数返回了一个闭包，这个函数的作用域会在内存中保存到闭包不存在为止
- 创建并立即调用一个函数，这样既可以执行其中的代码，又不会在内存中留下该函数的引用，结果就是函数内部的所有变量都会被立即销毁--除非某些变量赋值给了包含作用域（即外部作用域）中的变量

闭包还可以用于对象中创建私有变量，相关概念和要点如下：

- 即使 Javascript 中没有私有变量的概念，但可以利用闭包来实现私有变量，通过访问闭包可以访问函数内部的变量，从而实现私有变量的概念。
- 闭包可以用于创建私有变量和特权方法，特权方法是指有权访问私有变量和私有函数的公有方法。
- 模块模式是为单例创建私有变量和特权方法。
- 增强的模块模式是在增强的模块模式基础上，创建一个自定义的对象。增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加额外的属性和方法。
- 可以使用函数构造函数来创建自定义对象，从而实现私有变量和特权方法。

## 第 8 章 BOM

BOM 是浏览器对象模型（Browser Object Model）的缩写，它提供了独立于内容和浏览器窗口的对象，用于访问和操作浏览器的窗口和文档。

### 8.1 window 对象

BOM 的核心对象是 window，它表示浏览器的一个实例。在浏览器中，window 对象有双重角色：它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。

#### 8.1.1 全局作用域

由于 JavaScript 是 ECMAScript 的实现，所以所有全局变量和函数都是作为 window 对象的属性和方法创建的。

```js
var a = 2
function b() {}
console.log(window.a) // 2
console.log(window.b) // function b() {}
```

#### 8.1.2 窗口关系及框架

如果在一个 HTML 页面中包含多个框架，那么每个框架都有自己的 window 对象，而且它们之间没有关系。

```html
<iframe src="URL_ADDRESS" name="example"></iframe>
```

#### 8.1.3 窗口位置

用来确定和修改 window 对象位置的属性和方法有很多。IE、Safari、Opera 和 Chrome 都提供了 scrollLeft、scrollTop 属性分别表示窗口相对于屏幕左边和上边的位置。Firefox 则在 scrrenX 和 screenY 属性中提供了同样的信息。Safari、Chrome 同时支持这两个属性。Opera 虽然支持 screenX 和 screenY 属性，但与 scrollLeft 和 scrollTop 属性并不对应，因此建议不要在 Opera 中使用这些属性。使用下列代码兼容跨浏览器取得窗口左边和上边的位置。

```js
var leftPos =
  typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX
var topPos =
  typeof window.screenTop == 'number' ? window.screenTop : window.screenY
```

这个例子中，我们首先检查 window.screenLeft 属性是否是一个数字，如果是，就返回它的值，否则返回 window.screenX 属性的值。然后，我们检查 window.screenTop 属性是否是一个数字，如果是，就返回它的值，否则返回 window.screenY 属性的值。

#### 8.1.4 窗口大小

跨浏览器获得窗口大小不是一件容易的事，因为每个浏览器都有自己的实现方式。IE9、Safari、Opera 和 Chrome 都提供了 4 个属性：innerWidth、innerHeight、outerWidth 和 outerHeight。

在 IE9+、Safari 和 Firefox 中，outerWidth 和 outerHeight 属性返回浏览器窗口本身的尺寸，而 innerWidth 和 innerHeight 属性返回页面视口的尺寸。

在 Opera 中，outerWidth 和 outerHeight 属性表示页面视图容器的大小，而 innerWidth 和 innerHeight 表示该容器中页面视图区的大小（减去边框宽度）

在 Chrome 中，outerWidth、outerHeight 与 innerWidth 、 innerHeight 返回的是相同的值。即视口大小而非浏览器窗口本身的尺寸。

IE8 及更早版本的浏览器中，没有提供 innerWidth 和 innerHeight 属性，因此需要使用 document.documentElement.clientWidth 和 document.documentElement.clientHeight 属性来获取视口大小。

在 IE、Firefox、Safari、Opera 和 Chrome 中，document.documentElement.clientWidth 和 document.documentElement.clientHeight 保存了页面视口的信息。

在 IE6 中，这些属性必须在标准模式下才能使用，因此需要在文档中包含一个 doctype 声明。如果是混杂模式，就必须通过 document.body.clientWidth 和 document.body.clientHeight 来取得相同的信息。

而对于混杂模式的 Chrome，document.documentElement.clientWidth 和 document.documentElement.clientHeight 返回的是 0，因此需要使用 document.body.clientWidth 和 document.body.clientHeight。

虽然最终无法确定浏览器窗口本身的大小，但是却可以取得页面视口的大小。如下所示：

```js
var pageWidth = window.innerWidth,
  pageHeight = window.innerHeight

if (typeof pageWidth != 'number') {
  if (document.compatMode == 'CSS1Compat') {
    pageWidth = document.documentElement.clientWidth
    pageHeight = document.documentElement.clientHeight
  } else {
    pageWidth = document.body.clientWidth
    pageHeight = document.body.clientHeight
  }
}
```

在以上代码中，我们首先检查 window.innerWidth 属性是否是一个数字，如果是，就返回它的值，否则返回 document.documentElement.clientWidth 属性的值。然后，我们检查 window.innerHeight 属性是否是一个数字，如果是，就返回它的值，否则返回 document.documentElement.clientHeight 属性的值。

对于移动设备，window.innerWidth 和 window.innerHeight 保存着可见视口，也就是屏幕上可见页面的区域大小。移动 IE 浏览器不支持这两个属性，因此需要使用 document.documentElement.clientWidth 和 document.documentElement.clientHeight 属性来获取视口大小。

在其他移动浏览器中，document.documentElement 度量的是布局视口，即渲染后页面的实际大小（与可见视口不同，可见视口是实际页面大小的一小部分）。移动 IE 浏览器把布局信息保存在 document.body.clientWidth 和 document.body.clientHeight 中。这些值不会随着页面缩放而变化。

由于与桌面浏览器存在这些差异，最好先检测一下用户是否在使用移动浏览器，再决定使用哪个属性
下面是兼容性代码：

```js
// 检测一下用户是否在使用移动浏览器
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  }
}

var pageWidth = window.innerWidth,
  pageHeight = window.innerHeight
// 判断是移动 IE 浏览器 需要使用 document.documentElement.clientWidth 和 document.documentElement.clientHeight 属性来获取视口大小
if (isMobile.Windows()) {
  pageWidth = document.documentElement.clientWidth
  pageHeight = document.documentElement.clientHeight
} else if (typeof pageWidth != 'number') {
  if (document.compatMode == 'CSS1Compat') {
    pageWidth = document.documentElement.clientWidth
    pageHeight = document.documentElement.clientHeight
  } else {
    pageWidth = document.body.clientWidth
    pageHeight = document.body.clientHeight
  }
}
```

另外，resizeTo 和 resizeBy 方法可以调整浏览器窗口的大小。这两个方法都接受两个参数：新的宽度和新的高度。这两个方法都只能在浏览器窗口中使用，不能在框架中使用。resizeTo 方法会立即调整浏览器窗口的大小，而 resizeBy 方法会调整浏览器窗口的大小，使浏览器窗口的宽度和高度分别增加或减少指定的像素数。

```js
window.resizeTo(100, 100) //调整窗口大小为100x100
window.resizeBy(100, 100) //调整窗口大小为200x200
```

moveTo 和 moveBy 方法可以移动浏览器窗口的位置。这两个方法都接受两个参数：新的 x 坐标和新的 y 坐标。这两个方法都只能在浏览器窗口中使用，不能在框架中使用。moveTo 方法会立即移动浏览器窗口的位置，而 moveBy 方法会移动浏览器窗口的位置，使浏览器窗口的 x 坐标和 y 坐标分别增加或减少指定的像素数。

```js
window.moveTo(100, 100) //移动窗口位置为100,100
window.moveBy(100, 100) //移动窗口位置为200,200
```

#### 8.1.5 导航和打开窗口

1.弹出窗口

window.open() 方法可以打开一个新的浏览器窗口。这个方法接受三个参数：要加载的 URL、窗口目标和一个特性字符串。

```js
window.open('URL_ADDRESS', '_blank', 'width=100,height=100')
```

对于浏览器的主窗口，没有用户的允许是不能关闭它的。弹出窗口可以通过调用 top.close()方法在不经过用户同意的情况下关闭自己。弹出窗口关闭后，窗口的引用仍然存在，除了检测其 closed 属性外，没有其他的作用。例如：

```js
var popup = window.open('URL_ADDRESS', '_blank', 'width=100,height=100')
popup.close()
alert(popup.closed) // true
```

新创建的 window 对象有一个 opener 属性，其中保存打开它的原始窗口对象。这个属性只在弹出窗口的最外层 window 对象（top）中有定义，而且指向调用 window.open 方法的窗口或框架。例如：

```js
var popup = window.open('URL_ADDRESS', '_blank', 'width=100,height=100')
alert(popup.opener === window) // true
popup.opener = null
```

将 opener 属性设置为 null 就是告诉浏览器新创建的标签页不需要与打开它的标签页通信，因此可以在独立的进程中运行，从而提高了安全性。标签页之间联系一旦断开，将没有办法恢复。

2.安全限制

浏览器对弹出窗口配置方面添加了限制。

- 弹出窗口不能访问 opener 窗口的私有变量和函数。
- IE6 不允许在屏幕以外的位置创建窗口，不允许将弹框窗口的位置移动到屏幕以外，不允许关闭状态栏。IE7 不允许关闭地址栏，不允许移动弹框窗口位置及调整大小。
- Firefox1 从一开始就不允许修改地址栏，因此无论给 window.open 传递什么样的特性字符串，弹框的窗口也会显示状态栏。Firefox3 强制始终在弹出的窗口中显示地址栏。
- Opera 只允许在主浏览器窗口中打开弹出窗口。但不允许他们出现在与系统弹框窗口重叠的区域。
- 有些浏览器只能通过用户单击“打开”按钮才能打开弹出窗口。
- 对于那些用户无意打开的弹框，Chrome 不会像其他浏览器屏蔽弹框，而是只显示他们的标题栏，并把他们放在浏览器的右下角。

  3.弹出窗口屏蔽程序

大多数浏览器都内置弹出窗口屏蔽程序。如果屏蔽程序检测到弹出窗口，就会阻止它的显示。

弹出窗口被屏蔽有两种可能：

- 如果是浏览器内置的屏蔽程序阻止的弹出窗口，那么 window.open()返回的是 null。例如:

```js
var popup = window.open('URL_ADDRESS', '_blank', 'width=100,height=100')
if (popup === null) {
  alert('弹出窗口被屏蔽')
}
```

- 如果是浏览器扩展或者其他程序阻止的弹出窗口，那么 window.open()通常会抛出一个错误。例如:

```js
var block = false
try {
  var popup = window.open('URL_ADDRESS', '_blank', 'width=100,height=100')
  if (popup === null) {
    block = true
  }
} catch (e) {
  block = true
}
if (block) {
  alert('弹出窗口被屏蔽')
}
```

在任何情况，以上代码都可以检测出调用 window.open()方法打开的窗口是否被屏蔽。但是需要注意，检测弹出窗口是否被屏幕是一回事，它并不会阻止浏览器显示与被屏蔽窗口的有关信息。

#### 8.1.6 间歇调用和超时调用

- 间歇调用 setInterval(),调用方式：

```js
var intervalId = setInterval(function () {
  // 要执行的代码
}, 1000)
// 停止间歇调用
clearInterval(intervalId)
```

- 超时调用 setTimeout()，调用方式：

```js
var timeoutId = setTimeout(function () {
  // 要执行的代码
}, 1000)
// 停止超时调用
clearTimeout(timeoutId)
```

#### 8.1.7 系统对话框

浏览器通过 alert、confirm、prompt 等方法来显示系统对话框。这些方法都接受一个字符串作为参数，这个字符串就是对话框中显示的文本。

- alert() 方法 参数：要显示的文本 无返回值 显示一个带有一个按钮的对话框，点击按钮后对话框会消失。

```js
alert('Hello World')
```

- confirm() 方法 参数：要显示的文本 返回值：true 或 false 显示一个带有两个按钮的对话框，点击按钮后对话框会消失。例如：

```js
if (confirm('您是否要进入？')) {
  // 进入
}
```

- prompt(？，？):用于显示可提示用户进行输入的对话框
  - 第一个问是显示的文本，
  - 第二个问是输入框中的默认值（可不写）
  - 点击确认返回输入框中的内容，取消返回 null

```js
var name = prompt('请输入您的姓名', '张三')
if (name === null) {
  alert('取消了')
} else {
  alert('您的姓名是：' + name)
}
```

- 查找对话框 window.find()，打印对话框 window.print() 这两个方法不会就用户操作给出任何信息，

### 8.2 location 对象

> location 对象是 BOM 的一个部分，它既是 window 对象的属性，也是 document 对象的属性。它提供了与当前窗口加载的文档的有关信息，还提供了一些导航功能。

| <div style="width:80px;">属性名</div> | 例子                  | 说明                                                                          |
| ------------------------------------- | --------------------- | ----------------------------------------------------------------------------- |
| hash                                  | "#contents"           | 返回 URl 中的 hash（#跟零或多个字符串），如果字符串不包含散列，则返回空字符串 |
| host                                  | "www.wrox.com:80"     | 返回服务名称和端口号（如果有，http 默认 8080,https 默认 443）                 |
| hostname                              | "www.wrox.com"        | 返回不带端口号的服务器名称                                                    |
| href                                  | "http://www.wrox.com" | 返回当前加载页面的完整 URL。location 对象的 toString（）方法也返回这个值      |
| pathname                              | "/books/dom3/"        | 返回 URL 中的路径部分                                                         |
| port                                  | "8080"                | 返回 url 中指定的端口号，如果没有指定端口号，则返回空字符串                   |
| protocol                              | "http:"               | 返回页面使用的协议。通常是 http 或 https                                      |
| search                                | "?q=javascript"       | 返回 url 的查询字符串。这个字符串以?开头                                      |

#### 8.2.1 查询字符串

解析 url 的查询字符串。示例如下

```js
function getQueryStringArgs() {
  // 取得查询字符串并去掉开头的问号
  var qs = location.search.length > 0 ? location.search.substring(1) : ''
  // 保存数据的对象
  var args = {}
  // 取得每一项
  var items = qs.length ? qs.split('&') : []
  var item = null
  var name = null
  var value = null
  // 逐个将每一项添加到 args 对象中
  for (var i = 0; i < items.length; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}
```

#### 8.2.2 位置操作

改变浏览器的位置。示例如下：

```js
// 导航到新的页面并追加历史记录
location.assign('URL_ADDRESS')
window.location.href = 'URL_ADDRESS'
window.location = 'URL_ADDRESS'
```

通过 search,hash,pathname,port,protocol,host,hostname 可以改变当前 url。示例如下：

```js
// 改变当前 url
location.search = '?q=javascript'
location.hash = '#contents'
location.pathname = '/books/dom3/'
location.port = '8080'
location.protocol = 'http:'
location.host = 'www.wrox.com:80'
location.hostname = 'www.wrox.com'
```

调用 replace()方法可以在不添加历史记录的情况下导航到新的页面。不能返回前一个页面，示例如下：

```js
location.replace('URL_ADDRESS')
```

### 8.3 navigator 对象

每一个浏览器的 navigator 对象都有自己的一套属性。下表列出了存在于所有浏览器的属性和方法，以及支持他们的浏览器版本。

## 第 9 章 客户端检测

## 第 10 章 DOM

## 第 11 章 DOM 扩展

## 第 12 章 DOM2 和 DOM3

## 第 13 章 事件

## 第 14 章 表单脚本

## 第 15 章 使用 Canvas 绘图

## 第 16 章 HTML5 脚本编程

## 第 17 章 错误处理与调试

## 第 18 章 JavaScript 与 XML

## 第 19 章 E4X

## 第 20 章 JSON

## 第 21 章 Ajax 与 Comet

## 第 22 章 高级技巧

## 第 23 章 离线应用与客户端存储

## 第 24 章 最佳实践

## 第 25 章 新兴的 API

```

```
