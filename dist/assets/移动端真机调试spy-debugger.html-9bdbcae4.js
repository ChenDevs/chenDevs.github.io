import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,e as i}from"./app-1b11b514.js";const d={},h=i('<h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h3><p>Windows 下</p><p>npm install spy-debugger -g Mac 下</p><p>sudo npm install spy-debugger -g</p><h3 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2.使用</h3><ul><li>第一步：手机和 PC 保持在同一网络下（比如同时连到一个 Wi-Fi 下）</li><li>第二步：命令行输入 spy-debugger，按命令行提示用浏览器打开相应地址。</li><li>第三步：设置手机的 HTTP 代理，代理 IP 地址设置为 PC 的 IP 地址，端口为 spy-debugger 的启动端口(默认端口：9888)。</li><li>第四步：安装证书。注：手机必须先设置完代理后再通过(非微信)手机浏览器访问http://spydebugger.com/cert安装证书（手机首次调试需要安装证书，已安装了证书的手机无需重复安装)。</li><li>第五步：用手机浏览器访问你要调试的页面即可</li></ul><h3 id="_3-自定义项" tabindex="-1"><a class="header-anchor" href="#_3-自定义项" aria-hidden="true">#</a> 3.自定义项</h3><h4 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h4><p>(默认端口：9888)</p><p>spy-debugger -p 8888</p><h4 id="设置外部代理-默认使用-anyproxy" tabindex="-1"><a class="header-anchor" href="#设置外部代理-默认使用-anyproxy" aria-hidden="true">#</a> 设置外部代理（默认使用 AnyProxy）</h4><p>spy-debugger -e http://127.0.0.1:8888 spy-debugger 内置 AnyProxy 提供抓包功能，但是也可通过设置外部代理和其它抓包代理工具一起使用，如：Charles、Fiddler。</p><h4 id="是否让-weinre-监控-iframe-加载的页面" tabindex="-1"><a class="header-anchor" href="#是否让-weinre-监控-iframe-加载的页面" aria-hidden="true">#</a> 是否让 weinre 监控 iframe 加载的页面</h4><p>(默认： false)</p><p>spy-debugger -i true</p><h4 id="是否只拦截浏览器发起的-https-请求" tabindex="-1"><a class="header-anchor" href="#是否只拦截浏览器发起的-https-请求" aria-hidden="true">#</a> 是否只拦截浏览器发起的 https 请求</h4><p>(默认： true)</p><p>spy-debugger -b false 有些浏览器发出的 connect 请求没有正确的携带 userAgent，这个判断有时候会出错，如 UC 浏览器。这个时候需要设置为 false。大多数情况建议启用默认配置：true，由于目前大量 App 应用自身（非 WebView）发出的请求会使用到 SSL pinning 技术，自定义的证书将不能通过 app 的证书校验。</p><h4 id="是否允许-http-缓存" tabindex="-1"><a class="header-anchor" href="#是否允许-http-缓存" aria-hidden="true">#</a> 是否允许 HTTP 缓存</h4><p>(默认： false)</p><p>spy-debugger -c true</p>',21),t=[h];function p(s,n){return a(),r("div",null,t)}const o=e(d,[["render",p],["__file","移动端真机调试spy-debugger.html.vue"]]);export{o as default};
