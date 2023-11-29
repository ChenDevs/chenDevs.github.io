import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,b as n,d as c,a as l,e as s}from"./app-04d4e570.js";const i={},r=s(`<h2 id="使用纹理" tabindex="-1"><a class="header-anchor" href="#使用纹理" aria-hidden="true">#</a> 使用纹理</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
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
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 将相机添加到场景</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 加载纹理</span>
<span class="token keyword">const</span> doorTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
  <span class="token string">&#39;/src/assets/textures/door/color.jpg&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// 使用纹理进行材质创建</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">map</span><span class="token operator">:</span> doorTexture <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建几何体</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxBufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 根据几何体和材质创建物体</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>

<span class="token comment">// 将几何体添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span>

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

<span class="token comment">// 渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
  <span class="token comment">// controls.update()</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纹理常用属性" tabindex="-1"><a class="header-anchor" href="#纹理常用属性" aria-hidden="true">#</a> 纹理常用属性</h2><h3 id="偏移" tabindex="-1"><a class="header-anchor" href="#偏移" aria-hidden="true">#</a> 偏移</h3><p>取值：0.1 ～ 1.0</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>doorTexture<span class="token punctuation">.</span>offset<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转" aria-hidden="true">#</a> 旋转</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>doorTexture<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token number">45</span>
doorTexture<span class="token punctuation">.</span>center<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>旋转中心点为(0.5, 0.5)对应纹理的正中心。默认值为(0,0)，即左下角</p><h3 id="重复" tabindex="-1"><a class="header-anchor" href="#重复" aria-hidden="true">#</a> 重复</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>doorTexture<span class="token punctuation">.</span>repeat<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>wrapS</code>这个值定义了纹理贴图在水平方向上将如何包裹，在 UV 映射中对应于<strong>U</strong>。 默认值是<code>THREE.ClampToEdgeWrapping</code>，即纹理边缘将被推到外部边缘的纹素（纹理元素）。 其它的两个选项分别是<code>THREE.RepeatWrapping</code>和<code>THREE.MirroredRepeatWrapping</code>。</p><p><code>wrapT</code>这个值定义了纹理贴图在垂直方向上将如何包裹，在 UV 映射中对应于 V。和<code>wrapS</code>使用相同的选项</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>doorTexture<span class="token punctuation">.</span>repeat<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
doorTexture<span class="token punctuation">.</span>wrapT <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>RepeatWrapping <span class="token comment">// 简单重复</span>
doorTexture<span class="token punctuation">.</span>wrapS <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>MirroredRepeatWrapping <span class="token comment">// 镜像重复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纹理显示算法" tabindex="-1"><a class="header-anchor" href="#纹理显示算法" aria-hidden="true">#</a> 纹理显示算法</h2><p><code>magFilter</code>当一个纹素覆盖大于一个像素时，贴图将如何采样:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  纹理显示算法</span>
doorTexture<span class="token punctuation">.</span>magFilter <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>NearestFilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),u={href:"https://blog.csdn.net/qq_42428486/article/details/118856697",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="透明材质与透明纹理" tabindex="-1"><a class="header-anchor" href="#透明材质与透明纹理" aria-hidden="true">#</a> 透明材质与透明纹理</h2><p><code>.alphaMap</code>：<code>alpha</code>贴图 是一张灰度纹理，用于控制整个表面的不透明度（黑色：完全透明；白色：完全不透明）</p><p><code>.map</code>是颜色贴图；<code>.transparent</code>定义此材质是否透明。设置为<code>true</code>时，通过设置材质的<code>opacity</code>属性来控制材质透明的程度；<code>side</code>定义需要渲染那一面；默认是正面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 加载透明纹理</span>
<span class="token keyword">const</span> alphaTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
  <span class="token string">&#39;/src/assets/textures/door/alpha.jpg&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// 使用纹理进行材质创建</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">map</span><span class="token operator">:</span> doorTexture<span class="token punctuation">,</span>
  <span class="token literal-property property">alphaMap</span><span class="token operator">:</span> alphaTexture<span class="token punctuation">,</span>
  <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>DoubleSide
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境遮挡贴图与强度" tabindex="-1"><a class="header-anchor" href="#环境遮挡贴图与强度" aria-hidden="true">#</a> 环境遮挡贴图与强度</h2><p><code>aoMap</code>为环境遮挡贴图，它需要第二组<code>UV</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用纹理进行材质创建</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">map</span><span class="token operator">:</span> doorTexture<span class="token punctuation">,</span>
  <span class="token literal-property property">alphaMap</span><span class="token operator">:</span> alphaTexture<span class="token punctuation">,</span>
  <span class="token comment">// 材质是否透明</span>
  <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// opacity: .4</span>
  <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>DoubleSide<span class="token punctuation">,</span>
  <span class="token literal-property property">aoMap</span><span class="token operator">:</span> aoTexture
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建一个平面</span>
<span class="token keyword">const</span> plance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PlaneGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cube2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>plance<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
<span class="token comment">// 挪动平面至3,0,0</span>
cube2<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 给平面设置第二组UV</span>
plance<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>
  <span class="token string">&#39;uv2&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>plance<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>uv<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(m,v){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",u,[c("Mipmap 详解(有无 Mipmap 区别、原理、优点、缺点、优化)"),l(a)])]),d])}const y=e(i,[["render",k],["__file","材质与纹理.html.vue"]]);export{y as default};
