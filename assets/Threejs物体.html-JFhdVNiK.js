import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as t,c as o,b as n,d as s,a as c,e as l}from"./app-S3nsRjMn.js";const i={},u=l(`<h2 id="几何体顶点" tabindex="-1"><a class="header-anchor" href="#几何体顶点" aria-hidden="true">#</a> 几何体顶点</h2><p><code>attributes.position</code> 代表顶点的位置</p><p>控制台输出物体的 <code>attributes.position</code> 属性发现一个四面体有 24 个顶点</p><p>四面体不是只有 8 个顶点吗？</p><p>在 <code>threejs</code> 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次</span>
<span class="token comment">// 因为在两个三角面片里，这两个顶点都需要被用到</span>
<span class="token keyword">const</span> vertices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span>

  <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
geometry<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>vertices<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xff0000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uv" tabindex="-1"><a class="header-anchor" href="#uv" aria-hidden="true">#</a> uv</h2><p>三维建模中的&quot;UV&quot;可理解为立体模型的“皮肤”，将“皮肤”展开然后进行二维平面上的绘制并赋予物体</p><p>&quot;UV&quot;这里是指 u,v 纹理贴图坐标的简称(它和空间模型的 X, Y, Z 轴是类似的)</p><p>它定义了图片上每个点的位置的信息. 这些点与 3D 模型是相互联系的, 以决定表面纹理贴图的位置.</p><p>UV 就是将图像上每一个点精确对应到模型物体的表面. 在点与点之间的间隙位置由软件进行图像光滑插值处理. 这就是所谓的 UV 贴图</p><h2 id="法向" tabindex="-1"><a class="header-anchor" href="#法向" aria-hidden="true">#</a> 法向</h2><p>在几何中，法向是指垂直于某种元素的方向</p><h2 id="酷炫三角形科技物体" tabindex="-1"><a class="header-anchor" href="#酷炫三角形科技物体" aria-hidden="true">#</a> 酷炫三角形科技物体</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/controls/OrbitControls&#39;</span>

<span class="token comment">// 创建场景</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建相机</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span>
  <span class="token number">75</span><span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
  <span class="token number">0.1</span><span class="token punctuation">,</span>
  <span class="token number">1000</span>
<span class="token punctuation">)</span>

<span class="token comment">// 设置相机位置</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 随机创建50个三角形</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> positionArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    positionArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  geometry<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>positionArr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> color <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
  <span class="token comment">// 物体添加到添加场景</span>
  scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化渲染器</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置渲染的尺寸大小</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
<span class="token comment">// 将webgl渲染的canvas内容添加到body</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>

<span class="token comment">// 创建轨道控制器</span>
<span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
<span class="token comment">// 阻尼效果</span>
controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 添加坐标轴辅助器</span>
<span class="token keyword">const</span> axesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxesHelper</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 将坐标轴辅助器添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axesHelper<span class="token punctuation">)</span>

<span class="token comment">// 渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用网格几何体" tabindex="-1"><a class="header-anchor" href="#常用网格几何体" aria-hidden="true">#</a> 常用网格几何体</h2><p>官方文档搜索 🔍：<code>geometry</code></p><p><code>BoxGeometry</code> 和 <code>BoxBufferGeometry</code> 均是缓冲几何体</p>`,18),r={href:"https://blog.csdn.net/u014291990/article/details/91954333",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,[s("新版"),n("code",null," three"),s(" 估计进行了合并，查看了源码这两是一个东西")],-1);function d(m,v){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[s("BufferGeometry 和 Geometry 有什么不同"),c(a)])]),k])}const h=e(i,[["render",d],["__file","Threejs物体.html.vue"]]);export{h as default};
