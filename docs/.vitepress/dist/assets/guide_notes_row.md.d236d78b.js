import{_ as s,o as n,c as a,O as l}from"./chunks/framework.27bfc947.js";const u=JSON.parse('{"title":"Row","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/row.md"}'),p={name:"guide/notes/row.md"},e=l(`<h1 id="row" tabindex="-1">Row <a class="header-anchor" href="#row" aria-label="Permalink to &quot;Row&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type RowAlign = &#39;top&#39; | &#39;center&#39; | &#39;bottom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type RowJustify =</span></span>
<span class="line"><span style="color:#A6ACCD;">  | &#39;start&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | &#39;end&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | &#39;center&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | &#39;space-around&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  | &#39;space-between&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const rowProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tag: makeStringProp&lt;keyof HTMLElementTagNameMap&gt;(&#39;div&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否自动换行，默认 true</span></span>
<span class="line"><span style="color:#A6ACCD;">  wrap: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 交叉轴对齐方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  align: String as PropType&lt;RowAlign&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 列间距</span></span>
<span class="line"><span style="color:#A6ACCD;">  gutter: makeNumericProp(0),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 主轴对齐方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  justify: String as PropType&lt;RowJustify&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type RowProps = ExtractPropTypes&lt;typeof rowProps&gt;</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="injection" tabindex="-1">injection <a class="header-anchor" href="#injection" aria-label="Permalink to &quot;injection&quot;">​</a></h3><ul><li>使用 InjectionKey 指定注入的类型。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type RowSpaces = { left?: number; right: number }[]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type RowProvide = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  spaces: ComputedRef&lt;RowSpaces&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const ROW_KEY: InjectionKey&lt;RowProvide&gt; = Symbol(name)</span></span></code></pre></div><h3 id="usechildren" tabindex="-1">useChildren <a class="header-anchor" href="#usechildren" aria-label="Permalink to &quot;useChildren&quot;">​</a></h3><ul><li>使用 <a href="hooks.html#useChildren.ts">useChildren</a></li><li>通过<code>linkChildren</code>，导出方法和值。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { children, linkChildren } = useChildren(ROW_KEY)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linkChildren({ spaces })</span></span></code></pre></div><h3 id="groups" tabindex="-1">groups <a class="header-anchor" href="#groups" aria-label="Permalink to &quot;groups&quot;">​</a></h3><ul><li>groups 依赖的是 <code>useChildren</code> 的 <code>children</code></li><li>这是一个二维数组，每一项包括了包含的24份内的项的下标<code>[[0,1,2],[3,4],[5]]</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const groups = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const groups: number[][] = [[]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let totalSpan = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  children.forEach((child, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    totalSpan += Number(child.span)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (totalSpan &gt; 24) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      groups.push([index])</span></span>
<span class="line"><span style="color:#A6ACCD;">      totalSpan -= 24</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      groups[groups.length - 1].push(index)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return groups</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="spaces" tabindex="-1">spaces <a class="header-anchor" href="#spaces" aria-label="Permalink to &quot;spaces&quot;">​</a></h3><ul><li><code>averagePadding</code>：平均的padding，如<code>[0,1,2]</code>需要<code>2*gutter/3</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const spaces = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const gutter = Number(props.gutter)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const spaces: RowSpaces = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!gutter) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return spaces</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  groups.value.forEach(group =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const averagePadding = (gutter * (group.length - 1)) / group.length</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    group.forEach((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (index === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        spaces.push({ right: averagePadding })</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const left = gutter - spaces[item - 1].right</span></span>
<span class="line"><span style="color:#A6ACCD;">        const right = averagePadding - left</span></span>
<span class="line"><span style="color:#A6ACCD;">        spaces.push({ left, right })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return spaces</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><ul><li>添加上属性控制的样式</li><li>把插槽渲染</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { tag, wrap, align, justify } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tag</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        align &amp;&amp; bem.m(\`align-\${align}\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">        justify &amp;&amp; bem.m(\`justify-\${justify}\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">        !wrap &amp;&amp; bem.m(&#39;nowrap&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tag&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.w-row {</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--nowrap {</span></span>
<span class="line"><span style="color:#A6ACCD;">    flex-wrap: nowrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--justify-center {</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--justify-end {</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: flex-end;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--justify-space-between {</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: space-between;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--justify-space-around {</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: space-around;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--align-center {</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;--align-bottom {</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: flex-end;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,21),o=[e];function t(c,r,i,C,A,y){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
