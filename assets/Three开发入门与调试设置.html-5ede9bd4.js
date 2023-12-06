import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,b as n,a as e,d as t,e as s}from"./app-b1d14657.js";const l={},u=s(`<h2 id="创建第一个场景" tabindex="-1"><a class="header-anchor" href="#创建第一个场景" aria-hidden="true">#</a> 创建第一个场景</h2><p>一个场景能被渲染出来需要：场景、相机和渲染器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
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
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 将相机添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 创建几何体</span>
<span class="token keyword">const</span> cubeGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 设置物体材质</span>
<span class="token keyword">const</span> cubeMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xffff00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 根据几何体和材质创建物体</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>cubeGeometry<span class="token punctuation">,</span> cubeMaterial<span class="token punctuation">)</span>
<span class="token comment">// 将几何体添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span>

<span class="token comment">// 初始化渲染器</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置渲染的尺寸大小</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>

<span class="token comment">// 将webgl渲染的canvas内容添加到body</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>

<span class="token comment">// 使用渲染器，通过相机将场景渲染进来</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="透视相机-perspectivecamera-示意图" tabindex="-1"><a class="header-anchor" href="#透视相机-perspectivecamera-示意图" aria-hidden="true">#</a> 透视相机（PerspectiveCamera）示意图</h2><p>这一投影模式被用来模拟人眼所看到的景象，它是 3D 场景的渲染中使用得最普遍的投影模式。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/透视相机示意图.png" alt="透视相机示意图" tabindex="0"><figcaption>透视相机示意图</figcaption></figure><ol><li><p>摄像机视锥体垂直视野角度 也就是图中的 <strong>「a」</strong></p></li><li><p>摄像机视锥体近端面 也就是图中的 <strong>「near plane」</strong></p></li><li><p>摄像机视锥体远端面 也就是图中的 <strong>「far plane」</strong></p></li><li><p>摄像机视锥体长宽比 <strong>「表示输出图像的宽和高之比」</strong></p></li><li><p>对应的 three 中的照相机：</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> width <span class="token operator">/</span> height<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数依次位：</p><p><code>fov </code>— 摄像机视锥体垂直视野角度 <code>aspect </code>— 摄像机视锥体长宽比 <code>near</code> — 摄像机视锥体近端面 <code>far</code> — 摄像机视锥体远端面</p><h2 id="轨道控制器查看物体" tabindex="-1"><a class="header-anchor" href="#轨道控制器查看物体" aria-hidden="true">#</a> 轨道控制器查看物体</h2><p>轨道控制器：<code>new OrbitControls( object : Camera, domElement : HTMLDOMElement )</code></p><ul><li>参数 1:<code>object</code>: 将要被控制的相机</li><li>参数 2:<code>domElement</code>: 用于事件监听的 <code>HTML </code>元素</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/controls/OrbitControls.js&#39;</span>
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
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 将相机添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>

<span class="token comment">// 创建几何体</span>
<span class="token keyword">const</span> cubeGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 设置物体材质</span>
<span class="token keyword">const</span> cubeMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xffff00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 根据几何体和材质创建物体</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>cubeGeometry<span class="token punctuation">,</span> cubeMaterial<span class="token punctuation">)</span>
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

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于坐标系" tabindex="-1"><a class="header-anchor" href="#关于坐标系" aria-hidden="true">#</a> 关于坐标系</h2><p>WebGL 和 Three.js 使用的坐标系是右手坐标系，即右手伸开，拇指为 X，四指为 Y，手心为 Z。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/threejs坐标系.jpeg" alt="threejs坐标系" tabindex="0"><figcaption>threejs坐标系</figcaption></figure><h2 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h2>`,18),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"window.requestAnimationFrame()",-1),k=s(`<h2 id="添加坐标轴辅助器" tabindex="-1"><a class="header-anchor" href="#添加坐标轴辅助器" aria-hidden="true">#</a> 添加坐标轴辅助器</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> axesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxesHelper</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axesHelper<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/坐标轴辅助器.gif" alt="坐标轴辅助器" tabindex="0"><figcaption>坐标轴辅助器</figcaption></figure><p>红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴</p><h2 id="设置物体移动" tabindex="-1"><a class="header-anchor" href="#设置物体移动" aria-hidden="true">#</a> 设置物体移动</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.01</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印之前创建的物体<code>cube</code>其属性<code>positon</code>为一个三维向量对象，通过<code>set</code>进行设置，当然也可以通过更改对象属性值更改物体的位置</p><h2 id="物体的缩放与旋转" tabindex="-1"><a class="header-anchor" href="#物体的缩放与旋转" aria-hidden="true">#</a> 物体的缩放与旋转</h2><p><code>scale</code>缩放;<code>rotation</code>旋转两者使用和位置差不多,通过<code>set</code>进行设置，当然也可以通过更改对象属性值更改物体的位置</p><p>旋转有第四个参数代表表示旋转顺序的字符串，默认为<code>&quot;XYZ&quot;</code></p><h2 id="gsap-动画库" tabindex="-1"><a class="header-anchor" href="#gsap-动画库" aria-hidden="true">#</a> GSAP 动画库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i gsap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="gsap-to" tabindex="-1"><a class="header-anchor" href="#gsap-to" aria-hidden="true">#</a> gsap.to()</h3>`,13),m={href:"https://greensock.com/docs/v3/GSAP/gsap.to()",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>定义<strong>目标值</strong>，动画<strong>到</strong>某些值</p><p>参数 1:<code>target</code>:您要为其属性设置动画的对象,可以是选择器文本，如<code>&quot;.class&quot;</code>,<code>&quot;#id&quot;</code>等.也可以是对元素、对象甚至对象数组的直接引用</p><p>参数 2:<code>vars</code>:一个对象，包含您要设置动画的所有属性</p><table><thead><tr><th>属性</th><th>含义</th></tr></thead><tbody><tr><td>ease</td><td>动画的变化率</td></tr><tr><td>duration</td><td>动画运行时间</td></tr><tr><td>delay</td><td>动画延迟时间</td></tr><tr><td>onComplete</td><td>动画完成回调</td></tr><tr><td>repeat</td><td>动画重复次数，-1 为无限次循环</td></tr><tr><td>onStart</td><td>动画开始回调</td></tr><tr><td>yoyo</td><td>布尔值。是否往返运动，需设置 repeat 属性</td></tr></tbody></table><p>该方法返回值为一个动画对象，可对其属性进行设置，达到操作动画的目的</p><table><thead><tr><th>属性/方法</th><th>含义</th></tr></thead><tbody><tr><td>pause()</td><td>暂停动画</td></tr><tr><td>isActive()</td><td>动画是否运动，返回布尔值</td></tr><tr><td>resume()</td><td>继续播放动画</td></tr></tbody></table><h2 id="根据尺寸变化实现自适应画面" tabindex="-1"><a class="header-anchor" href="#根据尺寸变化实现自适应画面" aria-hidden="true">#</a> 根据尺寸变化实现自适应画面</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 监听画面变化 更新渲染画面</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 更新摄像头</span>
  camera<span class="token punctuation">.</span>aspect <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight
  <span class="token comment">// 更新摄像头的投影矩阵</span>
  camera<span class="token punctuation">.</span><span class="token function">updateProjectionMatrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 更新渲染器</span>
  renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
  <span class="token comment">// 设置渲染器的像素比</span>
  renderer<span class="token punctuation">.</span><span class="token function">setPixelRatio</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置控制器的阻尼" tabindex="-1"><a class="header-anchor" href="#设置控制器的阻尼" aria-hidden="true">#</a> 设置控制器的阻尼</h2><p><code>enableDamping</code> 将其设置为<code>true</code>以启用阻尼（惯性），这将给控制器带来重量感。默认值为 false。 请注意，如果该值被启用，你将必须在你的动画循环里调用.update()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// ....</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
  <span class="token comment">// 调用 update()</span>
  controls<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用-js-接口控制画布全屏和退出全屏" tabindex="-1"><a class="header-anchor" href="#调用-js-接口控制画布全屏和退出全屏" aria-hidden="true">#</a> 调用 js 接口控制画布全屏和退出全屏</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fullScreenElement <span class="token operator">=</span> document<span class="token punctuation">.</span>fullscreenElement
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fullScreenElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存在全屏元素 退出全屏</span>
    document<span class="token punctuation">.</span><span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 进入全屏</span>
    renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用图形用户界面更改变量" tabindex="-1"><a class="header-anchor" href="#应用图形用户界面更改变量" aria-hidden="true">#</a> 应用图形用户界面更改变量</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i dat.gui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dat <span class="token keyword">from</span> <span class="token string">&#39;dat.gui&#39;</span>
<span class="token keyword">const</span> <span class="token constant">GUI</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xffff00</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">yoyo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onComplete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画完成&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">GUI</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;移动x轴&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">x轴移动到了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">onFinishChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完全停下来&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 设置颜色</span>
<span class="token constant">GUI</span><span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    cube<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;颜色设置&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 设置文件夹</span>
<span class="token keyword">const</span> folder <span class="token operator">=</span> <span class="token constant">GUI</span><span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&#39;文件夹1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 显示隐藏</span>
folder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">,</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;是否显示&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 执行函数</span>
folder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;正方体运动&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function b(h,g){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",r,[d,e(a)]),t("告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配")]),k,n("p",null,[n("a",m,[t("官方文档：gsap.to"),e(a)])]),v])}const y=p(l,[["render",b],["__file","Three开发入门与调试设置.html.vue"]]);export{y as default};
