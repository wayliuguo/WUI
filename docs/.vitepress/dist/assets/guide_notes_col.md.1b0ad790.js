import{_ as s,o as a,c as n,O as l}from"./chunks/framework.27bfc947.js";const u=JSON.parse('{"title":"Row","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/col.md"}'),e={name:"guide/notes/col.md"},p=l(`<h1 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-label="Permalink to &quot;Row&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const colProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tag: makeStringProp&lt;keyof HTMLElementTagNameMap&gt;(&#39;div&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  span: makeNumericProp(0),</span></span>
<span class="line"><span style="color:#A6ACCD;">  offset: numericProp</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type ColProps = ExtractPropTypes&lt;typeof colProps&gt;</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="useparent" tabindex="-1">useParent <a class="header-anchor" href="#useparent" aria-label="Permalink to &quot;useParent&quot;">​</a></h3><ul><li>使用 <a href="hooks.html#useParent.ts">useParent</a></li><li>获取其父组件及该组件下标。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { parent, index } = useParent(ROW_KEY)</span></span></code></pre></div><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h3><ul><li>获取父组件中收集的<code>spaces</code></li><li>根据下标找到对应的样式数值</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const style = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const { spaces } = parent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (spaces &amp;&amp; spaces.value &amp;&amp; spaces.value[index.value]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { left, right } = spaces.value[index.value]</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      paddingLeft: left ? \`\${left}px\` : null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      paddingRight: right ? \`\${right}px\` : null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><ul><li>添加上属性控制的样式</li><li>把插槽渲染</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { tag, span, offset } = props</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tag</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={style.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.m(\`\${span}\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">        offset &amp;&amp; bem.m(\`offset-\${offset}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tag&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style-1" tabindex="-1">style <a class="header-anchor" href="#style-1" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.w-col {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">  box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">  min-height: 1px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.generate-col(24);</span></span>
<span class="line"><span style="color:#A6ACCD;">.generate-col(@n, @i: 1) when (@i =&lt; @n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  .w-col--@{i} {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex: 0 0 @i * (100% / 24);</span></span>
<span class="line"><span style="color:#A6ACCD;">    max-width: @i * (100% / 24);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .w-col--offset-@{i} {</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: @i * (100% / 24);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .generate-col(@n, (@i + 1));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,15),o=[p];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};
