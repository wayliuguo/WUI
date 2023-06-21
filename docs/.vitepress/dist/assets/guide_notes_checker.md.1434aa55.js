import{_ as s,o as n,c as a,O as e}from"./chunks/framework.4015372c.js";const D=JSON.parse('{"title":"Row","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/checker.md"}'),l={name:"guide/notes/checker.md"},p=e(`<h1 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-label="Permalink to &quot;Row&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type CheckerShape = &#39;square&#39; | &#39;round&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export type CheckerDirection = &#39;horizontal&#39; | &#39;vertical&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export type CheckerLabelPosition = &#39;left&#39; | &#39;right&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export type CheckerParent = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    disabled?: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    iconSize?: Numeric</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction?: CheckerDirection</span></span>
<span class="line"><span style="color:#A6ACCD;">    checkedColor?: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export const checkerProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  shape: makeStringProp&lt;CheckerShape&gt;(&#39;round&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  disabled: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconSize: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  modelValue: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  checkedColor: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  labelPosition: String as PropType&lt;CheckerLabelPosition&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  labelDisabled: Boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">props: extend({}, checkerProps, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  bem: makeRequiredProp(Object),</span></span>
<span class="line"><span style="color:#A6ACCD;">  role: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  parent: Object as PropType&lt;CheckerParent | null&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  checked: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  bindGroup: truthProp</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><ul><li><code>emits</code>配置项，用于声明组件所支持的自定义事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;click&#39;, &#39;toggle&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="getparentprop" tabindex="-1">getParentProp <a class="header-anchor" href="#getparentprop" aria-label="Permalink to &quot;getParentProp&quot;">​</a></h3><ul><li>获取父组件<code>props</code></li><li><code>T extends keyof CheckerParent[&#39;props&#39;]</code>对父组件的<code>props</code>又可以做类型校验</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const getParentProp = &lt;T extends keyof CheckerParent[&#39;props&#39;]&gt;(name: T) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.parent &amp;&amp; props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return props.parent.props[name]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="direction、disable、iconstyle" tabindex="-1">direction、disable、iconStyle <a class="header-anchor" href="#direction、disable、iconstyle" aria-label="Permalink to &quot;direction、disable、iconStyle&quot;">​</a></h3><ul><li>获取 <code>direction、disable、iconStyle</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const direction = computed(() =&gt; getParentProp(&#39;direction&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const disabled = computed(() =&gt; getParentProp(&#39;disabled&#39;) || props.disabled)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const iconStyle = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const checkedColor = props.checkedColor || getParentProp(&#39;checkedColor&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (checkedColor &amp;&amp; props.checked &amp;&amp; !disabled.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      borderColor: checkedColor,</span></span>
<span class="line"><span style="color:#A6ACCD;">      backgroundColor: checkedColor</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="onclick" tabindex="-1">onClick <a class="header-anchor" href="#onclick" aria-label="Permalink to &quot;onClick&quot;">​</a></h3><ul><li>点击触发</li><li>如果非不可选中且（点击的是icon或者没有禁用label点击），<code>emit(&#39;toggle&#39;)</code></li><li><code>emit(&#39;click&#39;, event)</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const iconRef = ref&lt;HTMLElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const onClick = (event: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { target } = event</span></span>
<span class="line"><span style="color:#A6ACCD;">  const icon = iconRef.value</span></span>
<span class="line"><span style="color:#A6ACCD;">  const iconClicked = icon === target || icon?.contains(target as Node)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!disabled.value &amp;&amp; (iconClicked || !props.labelDisabled)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(&#39;toggle&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  emit(&#39;click&#39;, event)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="rendericon" tabindex="-1">renderIcon <a class="header-anchor" href="#rendericon" aria-label="Permalink to &quot;renderIcon&quot;">​</a></h3><ul><li>如果有定义<code>icon 插槽</code>，则通过<code>作用域插槽</code>给<code>插槽</code>传递状态<a href="/wui/component/radio.html#自定义图标">使用</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderIcon = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { bem, shape, checked } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  const iconSize = props.iconSize || getParentProp(&#39;iconSize&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref={iconRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.e(&#39;icon&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.em(&#39;icon&#39;, shape),</span></span>
<span class="line"><span style="color:#A6ACCD;">        disabled.value &amp;&amp; bem.em(&#39;icon&#39;, &#39;disabled&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        checked &amp;&amp; bem.em(&#39;icon&#39;, &#39;checked&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={{ fontSize: addUnit(iconSize) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.icon ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">        slots.icon({ checked, disabled: disabled.value })</span></span>
<span class="line"><span style="color:#A6ACCD;">      ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Icon name=&quot;success&quot; style={iconStyle.value} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="renderlabel" tabindex="-1">renderLabel <a class="header-anchor" href="#renderlabel" aria-label="Permalink to &quot;renderLabel&quot;">​</a></h3><ul><li>渲染<code>label</code>,指定样式</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderLabel = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (slots.default) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">          props.bem.e(&#39;label&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          props.labelPosition &amp;&amp; props.bem.em(&#39;label&#39;, props.labelPosition),</span></span>
<span class="line"><span style="color:#A6ACCD;">          disabled.value &amp;&amp; props.bem.em(&#39;label&#39;, &#39;disabled&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {slots.default()}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const nodes: (JSX.Element | undefined)[] =</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.labelPosition === &#39;left&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? [renderLabel(), renderIcon()]</span></span>
<span class="line"><span style="color:#A6ACCD;">      : [renderIcon(), renderLabel()]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      role={props.role}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        props.bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        props.labelDisabled &amp;&amp; props.bem.m(&#39;label-disabled&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        direction.value &amp;&amp; props.bem.m(\`\${direction.value}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      tabindex={disabled.value ? undefined : 0}</span></span>
<span class="line"><span style="color:#A6ACCD;">      aria-checked={props.checked}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClick={onClick}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {nodes}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,24),o=[p];function c(t,r,i,C,A,d){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{D as __pageData,h as default};
