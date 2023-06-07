import{_ as s,o as a,c as n,O as e}from"./chunks/framework.27bfc947.js";const d=JSON.parse('{"title":"工具函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/utilsFunction.md"}'),l={name:"guide/notes/utilsFunction.md"},p=e(`<h1 id="工具函数" tabindex="-1">工具函数 <a class="header-anchor" href="#工具函数" aria-label="Permalink to &quot;工具函数&quot;">​</a></h1><h2 id="creat-ts" tabindex="-1">creat.ts <a class="header-anchor" href="#creat-ts" aria-label="Permalink to &quot;creat.ts&quot;">​</a></h2><p>用于实现BEM规范。</p><h3 id="什么是bem规范" tabindex="-1">什么是BEM规范？ <a class="header-anchor" href="#什么是bem规范" aria-label="Permalink to &quot;什么是BEM规范？&quot;">​</a></h3><p>即Block(块) Element(元素) Modifier(修饰器)，用来规范css命名。</p><p>命名约定模式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.block{}</span></span>
<span class="line"><span style="color:#A6ACCD;">.block__element{}</span></span>
<span class="line"><span style="color:#A6ACCD;">.block__element--modifier{}</span></span></code></pre></div><p>对于块，若多个单词，则用 - 连接，如search-form</p><p>具体例子：</p><ul><li>块即模块，如搜索表单 search-form,可以看做一个块</li><li>这个块内的按钮button、输入框input，为元素</li><li>元素可以由多种状态，如居中按钮，即修饰</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;form class=&quot;search-form&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;input class=&quot;search-form__input&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;button class=&quot;search-form__button&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;button class=&quot;search-form__button__primary&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/form&gt;</span></span></code></pre></div><h3 id="css样式顺序" tabindex="-1">css样式顺序 <a class="header-anchor" href="#css样式顺序" aria-label="Permalink to &quot;css样式顺序&quot;">​</a></h3><ol><li>定位属性：positon display float left top right bottom overflow clear z-index</li><li>自身属性：width height margin padding border background</li><li>文字样式：font-family font-size font-style font-weight font-varient</li><li>文本属性：text-align vertical-align text-wrap text-transform text-indent text-decoration letter-spacing word-spacing white-space text-overflow</li><li>css3中新增属性：content box-shadow border-radius transform</li></ol><h3 id="bem" tabindex="-1">_bem <a class="header-anchor" href="#bem" aria-label="Permalink to &quot;_bem&quot;">​</a></h3><p>此函数用于根据入参进行拼接得到类名。</p><ul><li>prefixName: 前缀</li><li>blockSuffix: B</li><li>element: E</li><li>modifier: M</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function _bem(</span></span>
<span class="line"><span style="color:#A6ACCD;">  prefixName: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  blockSuffix: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  element: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  modifier: string | number</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (blockSuffix) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prefixName += \`-\${blockSuffix}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (element) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prefixName += \`__\${element}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (modifier) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prefixName += \`--\${modifier}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return prefixName</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="createbem" tabindex="-1">createBEM <a class="header-anchor" href="#createbem" aria-label="Permalink to &quot;createBEM&quot;">​</a></h3><p>通过_bem生成对应功能的函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function createBEM(prefixName: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const b = (blockSuffix = &#39;&#39;) =&gt; _bem(prefixName, blockSuffix, &#39;&#39;, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const e = (element = &#39;&#39;) =&gt; (element ? _bem(prefixName, &#39;&#39;, element, &#39;&#39;) : &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const m = (modifier = &#39;&#39;) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    modifier ? _bem(prefixName, &#39;&#39;, &#39;&#39;, modifier) : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const be = (blockSuffix = &#39;&#39;, element = &#39;&#39;) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    blockSuffix &amp;&amp; element ? _bem(prefixName, blockSuffix, element, &#39;&#39;) : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const bm = (blockSuffix = &#39;&#39;, modifier = &#39;&#39;) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    blockSuffix &amp;&amp; modifier ? _bem(prefixName, blockSuffix, &#39;&#39;, modifier) : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const em = (element = &#39;&#39;, modifier: string | number = &#39;&#39;) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    element &amp;&amp; modifier ? _bem(prefixName, &#39;&#39;, element, modifier) : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const bem = (blockSuffix = &#39;&#39;, element = &#39;&#39;, modifier = &#39;&#39;) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    blockSuffix &amp;&amp; element &amp;&amp; modifier</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? _bem(prefixName, blockSuffix, element, modifier)</span></span>
<span class="line"><span style="color:#A6ACCD;">      : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const is = (name: string, state: string | boolean) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    state ? \`is-\${name}\` : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    b,</span></span>
<span class="line"><span style="color:#A6ACCD;">    e,</span></span>
<span class="line"><span style="color:#A6ACCD;">    m,</span></span>
<span class="line"><span style="color:#A6ACCD;">    be,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bm,</span></span>
<span class="line"><span style="color:#A6ACCD;">    em,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bem,</span></span>
<span class="line"><span style="color:#A6ACCD;">    is</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="createnamespace" tabindex="-1">createNamespace <a class="header-anchor" href="#createnamespace" aria-label="Permalink to &quot;createNamespace&quot;">​</a></h3><p>生成指导前缀的函数并导出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function createNamespace(name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const prefixName = \`w-\${name}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  return createBEM(prefixName)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,23),t=[p];function o(i,c,r,m,C,A){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{d as __pageData,u as default};
