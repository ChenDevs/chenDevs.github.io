import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-444c4a7e.js";const p={},l=e(`<h4 id="一、mysql-服务的启动和停止" tabindex="-1"><a class="header-anchor" href="#一、mysql-服务的启动和停止" aria-hidden="true">#</a> 一、mysql 服务的启动和停止</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>net stop mysql

net <span class="token keyword">start</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二、登陆-mysql" tabindex="-1"><a class="header-anchor" href="#二、登陆-mysql" aria-hidden="true">#</a> 二、登陆 mysql</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>h 服务器地址 <span class="token operator">-</span>P 端口号 <span class="token operator">-</span>u 用户名 <span class="token operator">-</span> p 密码

<span class="token operator">-</span>h 是服务器地址，可以是 localhost 也可以是 ip，如果默认的就是本机，那么<span class="token operator">-</span>h 也可以省略
<span class="token operator">-</span>P 端口号，MySQL 默认的端口号是 <span class="token number">3306</span>，如果你的 MySQL 使用的是默认的端口号，那么<span class="token operator">-</span>P 可以省略
<span class="token operator">-</span>u 用户名
<span class="token operator">-</span>p 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三、增加新用户" tabindex="-1"><a class="header-anchor" href="#三、增加新用户" aria-hidden="true">#</a> 三、增加新用户</h4><blockquote><p>mysql&gt; 格式：grant 权限 on 数据库.* to 用户名@登录主机 identified by &quot;密码&quot;</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--如，增加一个用户 user1 密码为 password1，让其可以在本机上登录， 并对所有数? 据库有查询、插入、修改、删除的权限。首先用以 root 用户连入 mysql，然后键入以下命令：</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">update</span><span class="token punctuation">,</span><span class="token keyword">delete</span> <span class="token keyword">on</span> _<span class="token punctuation">.</span>_ <span class="token keyword">to</span> user1<span class="token variable">@localhost</span> Identified <span class="token keyword">by</span> <span class="token string">&quot;password1&quot;</span><span class="token punctuation">;</span>
<span class="token comment">--如果希望该用户能够在任何机器上登陆 mysql，则将 localhost 改为&quot;%&quot;。</span>

<span class="token comment">--如果你不想 user1 有密码，可以再打一个命令将密码去掉。</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">update</span><span class="token punctuation">,</span><span class="token keyword">delete</span> <span class="token keyword">on</span> mydb<span class="token punctuation">.</span>\\<span class="token operator">*</span> <span class="token keyword">to</span> user1<span class="token variable">@localhost</span> identified <span class="token keyword">by</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四-操作数据库及常见错误" tabindex="-1"><a class="header-anchor" href="#四-操作数据库及常见错误" aria-hidden="true">#</a> 四： 操作数据库及常见错误</h4><blockquote><p>mysql&gt; 登录到 mysql 中，然后在 mysql 的提示符下运行下列命令，每个命令以分号结束。</p></blockquote><p>1、 显示数据库列表。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>

<span class="token comment">--缺省有两个数据库：mysql 和 test。 mysql 库存放着 mysql 的系统和用户权限信息，我们改密码和新增用户，实际上就是对这个库进行操作。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 插入数据错误提示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>You have an error <span class="token operator">in</span> your <span class="token keyword">SQL</span> syntax<span class="token punctuation">;</span> <span class="token keyword">check</span> the manual that corresponds <span class="token keyword">to</span> your MySQL server version <span class="token keyword">for</span> the <span class="token keyword">right</span> syntax <span class="token keyword">to</span> <span class="token keyword">use</span> near <span class="token string">&#39;:05:23)&#39;</span> at line

<span class="token comment">--数据不合法</span>

Unknown <span class="token keyword">column</span> <span class="token string">&#39;time&#39;</span> <span class="token operator">in</span> <span class="token string">&#39;field list&#39;</span>

<span class="token comment">--看看是不是字段名输入错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、 显示数据表的结构：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">describe</span> 表名<span class="token punctuation">;</span>

<span class="token keyword">desc</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、 建库与删库：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--建库</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> 库名<span class="token punctuation">;</span>
<span class="token comment">-- 我们可以在创建的时候判断是否已经存在，如果不存在就创建，如果存在就不操作，</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> day04
<span class="token comment">--删库</span>
<span class="token keyword">drop</span> <span class="token keyword">database</span> 库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.1 创建数据库的时候需要注意的点</p><ul><li><p>第一：数据库名字不能是纯数字</p></li><li><p>第二：数据库名字不能超过 64 个字符</p></li><li><p>第三：数据库的名字不能是系统关键字，如果是系统关键字需要有反引号括起来\`\`，用反引号包起来</p><p>4.2 数据库的修改 （MySQL 不支持修改数据库的名字）</p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 对数据库字符集的修改</span>
<span class="token keyword">Alter</span> <span class="token keyword">database</span> 数据库名 <span class="token keyword">charset</span> 新字符集
<span class="token keyword">Alter</span> <span class="token keyword">database</span> 数据库名 <span class="token keyword">charset</span><span class="token operator">=</span>新字符集
<span class="token keyword">Alter</span> <span class="token keyword">database</span> 数据库名 <span class="token keyword">default</span> <span class="token keyword">character</span> <span class="token keyword">set</span> 新字符集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、 建表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> 库名<span class="token punctuation">;</span>


<span class="token comment">-- 创建数据表</span>
<span class="token keyword">Create</span> <span class="token keyword">table</span> 表名
<span class="token punctuation">(</span>
字段名 类型  <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span><span class="token punctuation">,</span>
字段名 类型  <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span><span class="token punctuation">,</span>
字段名 类型  <span class="token punctuation">[</span>字段属性<span class="token punctuation">]</span>   <span class="token comment">--  最后一个字段后边不加逗号,</span>
<span class="token punctuation">)</span><span class="token punctuation">[</span>表属性<span class="token punctuation">]</span><span class="token keyword">charset</span><span class="token operator">=</span>utf8；
数据类型
<span class="token comment">-- 显示所有数据表</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span>；
<span class="token comment">-- 查看数据表的创建语句</span>
<span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> 表名；
<span class="token comment">-- 删除数据表</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> 表名；
<span class="token comment">-- 删除多张数据表：</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> 表名<span class="token number">1</span>，表名<span class="token number">2</span>，表名<span class="token number">3</span>；

<span class="token comment">-- 如果你不知道当前要删除的数据表是否存在，可以在删除的时候判断当前的数据表是否存在，</span>
<span class="token comment">-- 如果存在就删除，如果不存在也不报错</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> 表名；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、 清空表中记录：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、 显示表中的记录：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> \\<span class="token operator">*</span> <span class="token keyword">from</span> 表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.数据的操作</p><p>6.1 添加数据--insert 语句基本使用</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token punctuation">[</span><span class="token keyword">into</span><span class="token punctuation">]</span> 表名  <span class="token punctuation">[</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span>
……<span class="token punctuation">;</span>  多行插入
<span class="token keyword">insert</span> 表名 <span class="token keyword">set</span>  字段<span class="token number">1</span><span class="token operator">=</span>值<span class="token number">1</span>，字段<span class="token number">2</span><span class="token operator">=</span>值<span class="token number">2</span>…；  <span class="token keyword">set</span>方式插入
<span class="token keyword">insert</span> <span class="token punctuation">[</span><span class="token keyword">into</span><span class="token punctuation">]</span> 表名 <span class="token keyword">values</span> <span class="token punctuation">(</span>值列表<span class="token punctuation">)</span><span class="token comment">//单行插入</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_news<span class="token punctuation">(</span>id<span class="token punctuation">,</span>title<span class="token punctuation">,</span>author<span class="token punctuation">)</span><span class="token keyword">value</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 也可以：</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_news <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;adimin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，字段值得顺序一定要和字段名保持一致</p></blockquote><ul><li><p>单行插入方式 Set 方式插入</p></li><li><p>多行插入方式（使用的比较多）</p><p>6.2 数据查找</p></li></ul><p>查找使用的频率是最高的 也是最复杂的，</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">desc</span> tb_news<span class="token punctuation">;</span> <span class="token comment">//查看数据表的结构；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>基本语句:Select 查找的字段(* 代表所有的字段) from 表名 这一行是查询语句必须要有的</p></blockquote><p>![Where 查询条件] ![Group by 分组] ![Having 分组过滤条件] ![Order by asc|desc 排序，正序|逆序] ![Limit 限定查询的条数]</p><p>别名，我们查询查来的字段，还可以重新名一个名字 使用关键字 as 其中 as 可以省略</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">--把 hero 表中的所有信息查询出来</span>
<span class="token comment">--把 hero 表中的英雄名字和类型查询出来</span>
<span class="token comment">--找出英雄名字中有&#39;德&#39;字的英雄， 用到了一个 where 条件中的模糊查询，</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> hero <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">&#39;%德%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 其中%能匹配到任意的字符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.3 数据删除</p><blockquote><p>delete 语句基本使用:delete from 表名 [where 条件][order by 排序] [limit 限定条数]</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delete from 表名; 注意如果没有指定删除的条件，那么就会把数据表中
的所有数据都删除了

删除技能伤害是前两位的英雄信息
删除前先排序，由高到底，逆序排列
限定删除前两条就可以了
使用到了 order by 和 limit 子句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.4 数据修改--update 语句基本使用</p><blockquote><p>update 表名 set 字段 1=值 1 ,字段 2=值 2… [where 条件][order by 子句] [limit 子句]</p></blockquote><ul><li>说明：如果 update 修改表数据没有指定条件，会把表中所有的数据都修改了</li></ul><h4 id="五、导出和导入数据" tabindex="-1"><a class="header-anchor" href="#五、导出和导入数据" aria-hidden="true">#</a> 五、导出和导入数据</h4><p>1、 导出数据：</p><blockquote><p>mysql&gt; mysqldump --opt test &gt; mysql.test</p></blockquote><p>即将数据库 test 数据库导出到 mysql.test 文件，后者是一个文本文件</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p123456 <span class="token comment">--databases dbname &gt; mysql.dbname</span>

<span class="token comment">--就是把数据库 dbname 导出到文件 mysql.dbname 中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 导入数据:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> mysqlimport <span class="token operator">-</span>u root <span class="token operator">-</span>p123456 <span class="token operator">&lt;</span> mysql<span class="token punctuation">.</span>dbname。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、 将文本数据导入数据库:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--文本数据的字段数据之间用 tab 键隔开。</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">use</span> test<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">load</span> <span class="token keyword">data</span> <span class="token keyword">local</span> <span class="token keyword">infile</span> <span class="token string">&quot;文件名&quot;</span> <span class="token keyword">into</span> <span class="token keyword">table</span> 表名<span class="token punctuation">;</span>

<span class="token comment">--1:使用 SHOW 语句找出在服务器上当前存在什么数据库：</span>

mysql<span class="token operator">&gt;</span> mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">--2:创建一个数据库 MYSQLDATA</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> MYSQLDATA<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="六、navicat-连接-mysql8-0" tabindex="-1"><a class="header-anchor" href="#六、navicat-连接-mysql8-0" aria-hidden="true">#</a> 六、navicat 连接 mysql8.0</h4><blockquote><p>更改加密方式</p></blockquote><p>1.先通过命令行进入 mysql 的 root 账户：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.再输入 root 的密码：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>Enter password: <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
Welcome <span class="token keyword">to</span> the MySQL monitor<span class="token punctuation">.</span>  Commands <span class="token keyword">end</span> <span class="token keyword">with</span> <span class="token punctuation">;</span> <span class="token operator">or</span> \\g<span class="token punctuation">.</span>
Your MySQL connection id <span class="token operator">is</span> <span class="token number">18</span>
Server version: <span class="token number">8.0</span><span class="token number">.11</span> MySQL Community Server <span class="token operator">-</span> GPL
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2018</span><span class="token punctuation">,</span> Oracle <span class="token operator">and</span><span class="token operator">/</span><span class="token operator">or</span> its affiliates<span class="token punctuation">.</span> <span class="token keyword">All</span> rights reserved<span class="token punctuation">.</span>
Oracle <span class="token operator">is</span> a registered trademark <span class="token keyword">of</span> Oracle Corporation <span class="token operator">and</span><span class="token operator">/</span><span class="token operator">or</span> its
affiliates<span class="token punctuation">.</span> Other names may be trademarks <span class="token keyword">of</span> their respective
owners<span class="token punctuation">.</span>
<span class="token keyword">Type</span> <span class="token string">&#39;help;&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help<span class="token punctuation">.</span> <span class="token keyword">Type</span> <span class="token string">&#39;\\c&#39;</span> <span class="token keyword">to</span> clear the <span class="token keyword">current</span> input statement<span class="token punctuation">.</span>
mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.更改加密方式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.10</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.更改密码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.35</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.刷新</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.28</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,64),o=[l];function t(c,i){return n(),a("div",null,o)}const u=s(p,[["render",t],["__file","mysql.html.vue"]]);export{u as default};
