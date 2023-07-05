import{_ as s,o as n,c as a,O as o}from"./chunks/framework.ff144929.js";const y=JSON.parse('{"title":"工程搭建","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/project.md"}'),p={name:"guide/notes/project.md"},e=o(`<h1 id="工程搭建" tabindex="-1">工程搭建 <a class="header-anchor" href="#工程搭建" aria-label="Permalink to &quot;工程搭建&quot;">​</a></h1><h2 id="搭建monorepo环境" tabindex="-1">搭建monorepo环境 <a class="header-anchor" href="#搭建monorepo环境" aria-label="Permalink to &quot;搭建monorepo环境&quot;">​</a></h2><p>使⽤pnpm安装包速度快，磁盘空间利⽤率⾼效，使⽤pnpm 可以快速建⽴monorepo，so ~ 这⾥我们使⽤pnpm workspace来实现monorepo。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i pnpm -g // 全局安装pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm init // 初始化package.json配置⽂件 私有库</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install vue typescript // 全局下添加依赖</span></span></code></pre></div><p>使⽤pnpm必须要建⽴.npmrc⽂件，shamefully-hoist = true，否则安装的模块⽆法放置到node_modules⽬录下 <strong>.npmrc</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">shamefully-hoist = true</span></span></code></pre></div><p><strong>初始化typescript</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm tsc --init</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;ESNext&quot;, // 打包模块类型ESNext</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;declaration&quot;: false, // 默认不要声明文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitAny&quot;: true, // 支持类型不标注可以默认any</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;removeComments&quot;: true, // 删除注释</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;moduleResolution&quot;: &quot;node&quot;, // 按照node模块来解析</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;esModuleInterop&quot;: true, // 支持es6,commonjs模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;jsx&quot;: &quot;preserve&quot;, // jsx 不转</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noLib&quot;: false, // 不处理类库</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;es6&quot;, // 遵循es6版本</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sourceMap&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lib&quot;: [ // 编译时用的库</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;ESNext&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;DOM&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;allowSyntheticDefaultImports&quot;: true, // 允许没有导出的模块中导入</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;experimentalDecorators&quot;: true, // 装饰器语法</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;forceConsistentCasingInFileNames&quot;: true, // 强制区分大小写</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;resolveJsonModule&quot;: true, // 解析json模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;strict&quot;: true, // 是否启动严格模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skipLibCheck&quot;: true // 跳过类库检测</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;exclude&quot;: [ // 排除掉哪些类库</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;node_modules&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;**/__tests__&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dist/**&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="pnpm-monorepo-配置" tabindex="-1">pnpm monorepo 配置 <a class="header-anchor" href="#pnpm-monorepo-配置" aria-label="Permalink to &quot;pnpm monorepo 配置&quot;">​</a></h2><p>通过创建workspace 将多个项目合并要一个仓库中，每个仓库的根目录需要配置<strong>package.json</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - play # 存放我们组件测试的时候的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">  - docs # 存放我们组件文档的</span></span>
<span class="line"><span style="color:#A6ACCD;">  - packages # 组件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    - components</span></span>
<span class="line"><span style="color:#A6ACCD;">    - theme-chalk</span></span>
<span class="line"><span style="color:#A6ACCD;">    - use</span></span>
<span class="line"><span style="color:#A6ACCD;">    - utils</span></span></code></pre></div><p>以<strong>components</strong>为例，安装到根目录</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@w-ui/components&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install @w-ui/components -w</span></span></code></pre></div><ul><li>-w: 代表安装到工作区根目录</li></ul>`,16),l=[e];function t(c,i,r,u,C,A){return n(),a("div",null,l)}const m=s(p,[["render",t]]);export{y as __pageData,m as default};
