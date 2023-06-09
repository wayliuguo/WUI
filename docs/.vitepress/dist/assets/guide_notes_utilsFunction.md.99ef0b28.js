import{_ as s,o as a,c as n,O as e}from"./chunks/framework.27bfc947.js";const m=JSON.parse('{"title":"工具函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/utilsFunction.md"}'),l={name:"guide/notes/utilsFunction.md"},t=e(`<h1 id="工具函数" tabindex="-1">工具函数 <a class="header-anchor" href="#工具函数" aria-label="Permalink to &quot;工具函数&quot;">​</a></h1><h2 id="creat-ts" tabindex="-1">creat.ts <a class="header-anchor" href="#creat-ts" aria-label="Permalink to &quot;creat.ts&quot;">​</a></h2><p>用于实现BEM规范。</p><h3 id="什么是bem规范" tabindex="-1">什么是BEM规范？ <a class="header-anchor" href="#什么是bem规范" aria-label="Permalink to &quot;什么是BEM规范？&quot;">​</a></h3><p>即Block(块) Element(元素) Modifier(修饰器)，用来规范css命名。</p><p>命名约定模式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.block{}</span></span>
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
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="createbem" tabindex="-1">createBEM <a class="header-anchor" href="#createbem" aria-label="Permalink to &quot;createBEM&quot;">​</a></h3><ul><li>通过_bem生成对应功能的函数</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function createBEM(prefixName: string) {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="createnamespace" tabindex="-1">createNamespace <a class="header-anchor" href="#createnamespace" aria-label="Permalink to &quot;createNamespace&quot;">​</a></h3><ul><li>生成指导前缀的函数并导出。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function createNamespace(name: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const prefixName = \`w-\${name}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  return createBEM(prefixName)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="props-ts" tabindex="-1">props.ts <a class="header-anchor" href="#props-ts" aria-label="Permalink to &quot;props.ts&quot;">​</a></h2><h3 id="numericprop" tabindex="-1">numericProp <a class="header-anchor" href="#numericprop" aria-label="Permalink to &quot;numericProp&quot;">​</a></h3><ul><li>把 pros 指定为 Number | String</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const numericProp = [Number, String]</span></span></code></pre></div><h3 id="makestringprop" tabindex="-1">makeStringProp <a class="header-anchor" href="#makestringprop" aria-label="Permalink to &quot;makeStringProp&quot;">​</a></h3><ul><li>指定属于该泛型的类型，并提供默认值</li><li>Vue3 中属性发生了变化，需要使用<code>unknown</code>类型再转为<code>PropType</code>类型来实现转换</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const makeStringProp = &lt;T&gt;(defaultVal: T) =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: String as unknown as PropType&lt;T&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  default: defaultVal</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="truthprop" tabindex="-1">truthProp <a class="header-anchor" href="#truthprop" aria-label="Permalink to &quot;truthProp&quot;">​</a></h3><ul><li>指定该<code>prop</code> 为 <code>Boolean</code></li><li>默认值：true</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const truthProp = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  default: true as const</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="unknownprop" tabindex="-1">unknownProp <a class="header-anchor" href="#unknownprop" aria-label="Permalink to &quot;unknownProp&quot;">​</a></h3><ul><li>定义该<code>prop</code>为未知类型</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const unknownProp = null as unknown as PropType&lt;unknown&gt;</span></span></code></pre></div><h2 id="format-ts" tabindex="-1">format.ts <a class="header-anchor" href="#format-ts" aria-label="Permalink to &quot;format.ts&quot;">​</a></h2><h3 id="addunit" tabindex="-1">addUnit <a class="header-anchor" href="#addunit" aria-label="Permalink to &quot;addUnit&quot;">​</a></h3><ul><li>判断是否有值</li><li>如果值是数字或数字的字符串则拼接<code>px</code>，否则直接使用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function addUnit(value?: Numeric): string | undefined {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isDef(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return isNumeric(value) ? \`\${value}px\` : String(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="getsizestyle" tabindex="-1">getSizeStyle <a class="header-anchor" href="#getsizestyle" aria-label="Permalink to &quot;getSizeStyle&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function getSizeStyle(</span></span>
<span class="line"><span style="color:#A6ACCD;">  originSize?: Numeric | Numeric[]</span></span>
<span class="line"><span style="color:#A6ACCD;">): CSSProperties | undefined {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isDef(originSize)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Array.isArray(originSize)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: addUnit(originSize[0]),</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: addUnit(originSize[1])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const size = addUnit(originSize)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: size,</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: size</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="validate-ts" tabindex="-1">validate.ts <a class="header-anchor" href="#validate-ts" aria-label="Permalink to &quot;validate.ts&quot;">​</a></h2><h3 id="isdef" tabindex="-1">isDef <a class="header-anchor" href="#isdef" aria-label="Permalink to &quot;isDef&quot;">​</a></h3><ul><li>指定 val 属于泛型T类型且 <code>NonNullable</code>，返回其是否非 <code>undefined</code> | <code>null</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const isDef = &lt;T&gt;(val: T): val is NonNullable&lt;T&gt; =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  val !== undefined &amp;&amp; val !== null</span></span></code></pre></div><h3 id="isnumeric" tabindex="-1">isNumeric <a class="header-anchor" href="#isnumeric" aria-label="Permalink to &quot;isNumeric&quot;">​</a></h3><ul><li>判断传入值是否是数字或者数字字符串</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const isNumeric = (val: Numeric): val is string =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  typeof val === &#39;number&#39; || /^\\d+(\\.\\d+)?$/.test(val)</span></span></code></pre></div><h2 id="constant-ts" tabindex="-1">constant.ts <a class="header-anchor" href="#constant-ts" aria-label="Permalink to &quot;constant.ts&quot;">​</a></h2><p>export const BORDER = &#39;w-hairline&#39; export const BORDER_SURROUND = <code>\${BORDER}--surround</code> export const BORDER_TOP_BOTTOM = <code>\${BORDER}--top-bottom</code> export const HAPTICS_FEEDBACK = &#39;w-haptics-feedback&#39;</p>`,51),p=[t];function o(i,c,r,d,C,u){return a(),n("div",null,p)}const h=s(l,[["render",o]]);export{m as __pageData,h as default};
