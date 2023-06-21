import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4015372c.js";const h=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/checkbox.md"}'),e={name:"guide/notes/checkbox.md"},p=l(`<h1 id="checkbox" tabindex="-1">Checkbox <a class="header-anchor" href="#checkbox" aria-label="Permalink to &quot;Checkbox&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Checker, { checkerProps } from &#39;./Checker&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const checkboxProps = extend({}, checkerProps, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  bindGroup: truthProp</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type CheckboxProps = ExtractPropTypes&lt;typeof checkboxProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><ul><li><code>emits</code>配置项，用于声明组件所支持的自定义事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;change&#39;, &#39;update:modelValue&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="useparent" tabindex="-1">useParent <a class="header-anchor" href="#useparent" aria-label="Permalink to &quot;useParent&quot;">​</a></h3><ul><li>通过自定义<code>hooks</code><a href="./hooks.html#useParent">useParent</a>,<code>inject</code> 父组件暴露的属性和方法。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { parent } = useParent(CHECKBOX_GROUP_KEY)</span></span></code></pre></div><h3 id="toggle-setparentvalue" tabindex="-1">toggle &amp; setParentValue <a class="header-anchor" href="#toggle-setparentvalue" aria-label="Permalink to &quot;toggle &amp; setParentValue&quot;">​</a></h3><ul><li>如果有<code>checkboxGroup</code>，则触发<code>setParentValue</code>,否则更新绑定值。</li><li><code>setParentValue</code>最后会调用<code>checkboxGroup</code> 暴露的<code>updateValue</code>方法。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const toggle = (newValue = !checked.value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (parent &amp;&amp; props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setParentValue(newValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(&#39;update:modelValue&#39;, newValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const setParentValue = (checked: boolean) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { name } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { max, modelValue } = parent!.props</span></span>
<span class="line"><span style="color:#A6ACCD;">  const value = modelValue.slice()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (checked) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const overlimit = max &amp;&amp; value.length &gt;= +max</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!overlimit &amp;&amp; !value.includes(name)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value.push(name)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">        parent!.updateValue(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const index = value.indexOf(name)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (index !== -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">        parent!.updateValue(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="useexpose" tabindex="-1">useExpose <a class="header-anchor" href="#useexpose" aria-label="Permalink to &quot;useExpose&quot;">​</a></h3><ul><li>通过自定义<code>hooks</code><a href="./hooks.html#use-expose-ts">useExpose</a>实现更全面的<a href="./vue.html#expose">expose</a>。</li><li>暴露了<code>toggle</code>、<code>props</code>、<code>checked</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useExpose&lt;CheckboxExpose&gt;({ toggle, props, checked })</span></span></code></pre></div><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h3><ul><li>监听绑定值的变更派发<code>change</code>事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; props.modelValue,</span></span>
<span class="line"><span style="color:#A6ACCD;">  value =&gt; emit(&#39;change&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="checked" tabindex="-1">checked <a class="header-anchor" href="#checked" aria-label="Permalink to &quot;checked&quot;">​</a></h3><ul><li>如果有<code>checkboxGroup</code>，则依赖其<code>parent.props.modelValue</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const checked = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (parent &amp;&amp; props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return parent.props.modelValue.indexOf(props.name) !== -1</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return !!props.modelValue</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Checker</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-slots={pick(slots, [&#39;default&#39;, &#39;icon&#39;])}</span></span>
<span class="line"><span style="color:#A6ACCD;">    bem={bem}</span></span>
<span class="line"><span style="color:#A6ACCD;">    role=&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent={parent}</span></span>
<span class="line"><span style="color:#A6ACCD;">    checked={checked.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">    onToggle={toggle}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {...props}</span></span>
<span class="line"><span style="color:#A6ACCD;">  /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:root {</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-size: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-border-color: var(--w-gray-5);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-duration: var(--w-duration-fast);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-label-margin: var(--w-padding-xs);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-label-color: var(--w-text-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-checked-icon-color: var(--w-primary-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-disabled-icon-color: var(--w-gray-5);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-disabled-label-color: var(--w-text-color-3);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --w-checkbox-disabled-background: var(--w-border-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.w-checkbox {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">  cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">  user-select: none;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--disabled {</span></span>
<span class="line"><span style="color:#A6ACCD;">    cursor: not-allowed;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--label-disabled {</span></span>
<span class="line"><span style="color:#A6ACCD;">    cursor: default;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--horizontal {</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-right: var(--w-padding-sm);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;__icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 1em;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: var(--w-checkbox-size);</span></span>
<span class="line"><span style="color:#A6ACCD;">    line-height: 1em;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .w-icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">      display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">      box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 1.25em;</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: 1.25em;</span></span>
<span class="line"><span style="color:#A6ACCD;">      color: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-size: 0.8em;</span></span>
<span class="line"><span style="color:#A6ACCD;">      line-height: 1.25;</span></span>
<span class="line"><span style="color:#A6ACCD;">      text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      border: 1px solid var(--w-checkbox-border-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">      transition-duration: var(--w-checkbox-duration);</span></span>
<span class="line"><span style="color:#A6ACCD;">      transition-property: color, border-color, background-color;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--round {</span></span>
<span class="line"><span style="color:#A6ACCD;">      .w-icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">        border-radius: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--checked {</span></span>
<span class="line"><span style="color:#A6ACCD;">      .w-icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: var(--w-white);</span></span>
<span class="line"><span style="color:#A6ACCD;">        background-color: var(--w-checkbox-checked-icon-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">        border-color: var(--w-checkbox-checked-icon-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--disabled {</span></span>
<span class="line"><span style="color:#A6ACCD;">      cursor: not-allowed;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .w-icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">        background-color: var(--w-checkbox-disabled-background);</span></span>
<span class="line"><span style="color:#A6ACCD;">        border-color: var(--w-checkbox-disabled-icon-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--disabled&amp;--checked {</span></span>
<span class="line"><span style="color:#A6ACCD;">      .w-icon {</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: var(--w-checkbox-disabled-icon-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;__label {</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: var(--w-checkbox-label-margin);</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: var(--w-checkbox-label-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">    line-height: var(--w-checkbox-size);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--left {</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin: 0 var(--w-checkbox-label-margin) 0 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;--disabled {</span></span>
<span class="line"><span style="color:#A6ACCD;">      color: var(--w-checkbox-disabled-label-color);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,26),o=[p];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{h as __pageData,D as default};
