import{_ as s,o as a,c as n,O as e}from"./chunks/framework.ff144929.js";const u=JSON.parse('{"title":"CheckboxGroup","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/checkboxGroup.md"}'),l={name:"guide/notes/checkboxGroup.md"},p=e(`<h1 id="checkboxgroup" tabindex="-1">CheckboxGroup <a class="header-anchor" href="#checkboxgroup" aria-label="Permalink to &quot;CheckboxGroup&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Checker, { checkerProps } from &#39;./Checker&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const checkboxProps = extend({}, checkerProps, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  bindGroup: truthProp</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type CheckboxProps = ExtractPropTypes&lt;typeof checkboxProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><ul><li><code>emits</code>配置项，用于声明组件所支持的自定义事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;change&#39;, &#39;update:modelValue&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="injection" tabindex="-1">injection <a class="header-anchor" href="#injection" aria-label="Permalink to &quot;injection&quot;">​</a></h2><ul><li>使用 InjectionKey 指定注入的类型。</li><li>通过 <code>linkChildren</code> <code>provide</code> 了<code>props</code>和<code>updateValue</code>方法。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const CHECKBOX_GROUP_KEY: InjectionKey&lt;CheckboxGroupProvide&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  Symbol(name)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const { children, linkChildren } = useChildren(CHECKBOX_GROUP_KEY)</span></span>
<span class="line"><span style="color:#A6ACCD;">const updateValue = (value: unknown[]) =&gt; emit(&#39;update:modelValue&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linkChildren({</span></span>
<span class="line"><span style="color:#A6ACCD;">  props,</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateValue</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><ul><li>绑定值改变派发<code>change</code>事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; props.modelValue,</span></span>
<span class="line"><span style="color:#A6ACCD;">  value =&gt; emit(&#39;change&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="useexpose" tabindex="-1">useExpose <a class="header-anchor" href="#useexpose" aria-label="Permalink to &quot;useExpose&quot;">​</a></h2><ul><li>通过自定义<code>hooks</code><a href="./hooks.html#use-expose-ts">useExpose</a>实现更全面的<a href="./vue.html#expose">expose</a>。</li><li>这样组件就可以通过<code>ref.value.toggleAll</code> 进行消费。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof options === &#39;boolean&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    options = { checked: options }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const { checked, skipDisabled } = options</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#A6ACCD;">  const checkedChildren = children.filter((item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!item.props.bindGroup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (item.props.disabled &amp;&amp; skipDisabled) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return item.checked.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return checked ?? !item.checked.value</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#A6ACCD;">  const names = checkedChildren.map((item: any) =&gt; item.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateValue(names)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">useExpose&lt;CheckboxGroupExpose&gt;({ toggleAll })</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class={[bem.b(), props.direction &amp;&amp; bem.m(props.direction)]}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.w-checkbox-group {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--horizontal {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,20),o=[p];function t(c,i,r,C,d,h){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};
