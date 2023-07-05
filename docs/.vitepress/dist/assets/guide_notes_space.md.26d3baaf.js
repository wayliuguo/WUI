import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const d=JSON.parse('{"title":"Space","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/space.md"}'),p={name:"guide/notes/space.md"},e=l(`<h1 id="space" tabindex="-1">Space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;Space&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type SpaceSize = number | string</span></span>
<span class="line"><span style="color:#A6ACCD;">export type SpaceAlign = &#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const spaceProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 对齐方式</span></span>
<span class="line"><span style="color:#A6ACCD;">  align: String as PropType&lt;SpaceAlign&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 间距方向</span></span>
<span class="line"><span style="color:#A6ACCD;">  direction: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: String as PropType&lt;&#39;vertical&#39; | &#39;horizontal&#39;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: &#39;horizontal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 间距大小</span></span>
<span class="line"><span style="color:#A6ACCD;">  size: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: [Number, String, Array] as PropType&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      number | string | [SpaceSize, SpaceSize]</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否自动换行，仅适用于水平方向排列</span></span>
<span class="line"><span style="color:#A6ACCD;">  wrap: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否让 Space 变为一个块级元素，填充整个父元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  fill: Boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export type SpaceProps = ExtractPropTypes&lt;typeof spaceProps&gt;</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="mergedalign" tabindex="-1">mergedAlign <a class="header-anchor" href="#mergedalign" aria-label="Permalink to &quot;mergedAlign&quot;">​</a></h2><ul><li>获取对齐方式，用于设置类名</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const mergedAlign = computed(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; props.align ?? (props.direction === &#39;horizontal&#39; ? &#39;center&#39; : &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="getmargin" tabindex="-1">getMargin <a class="header-anchor" href="#getmargin" aria-label="Permalink to &quot;getMargin&quot;">​</a></h2><ul><li>通过<code>size</code>获取间距</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const getMargin = (size: SpaceSize) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof size === &#39;number&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return size + &#39;px&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return size</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="getmarginstyle" tabindex="-1">getMarginStyle <a class="header-anchor" href="#getmarginstyle" aria-label="Permalink to &quot;getMarginStyle&quot;">​</a></h2><ul><li>获取右、下 <code>margin</code></li><li>如果是最后一个则不设置</li><li>如果间距方向为<code>horizontal</code>设置右边距</li><li>如果间距方向为<code>vertical</code>或者设置自动换行设置下边距</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const getMarginStyle = (isLast: boolean): CSSProperties =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const style: CSSProperties = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const marginRight = \`\${getMargin(</span></span>
<span class="line"><span style="color:#A6ACCD;">    Array.isArray(props.size) ? props.size[0] : props.size</span></span>
<span class="line"><span style="color:#A6ACCD;">  )}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  const marginBottom = \`\${getMargin(</span></span>
<span class="line"><span style="color:#A6ACCD;">    Array.isArray(props.size) ? props.size[1] : props.size</span></span>
<span class="line"><span style="color:#A6ACCD;">  )}\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isLast) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return props.wrap ? { marginBottom } : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.direction === &#39;horizontal&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    style.marginRight = marginRight</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.direction === &#39;vertical&#39; || props.wrap) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    style.marginBottom = marginBottom</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return style</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="filterempty" tabindex="-1">filterEmpty <a class="header-anchor" href="#filterempty" aria-label="Permalink to &quot;filterEmpty&quot;">​</a></h2><ul><li>过滤空 VNode</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const filterEmpty = (children: VNode[] = []) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const nodes: VNode[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  children.forEach(child =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Array.isArray(child)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      nodes.push(...child)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (child.type === Fragment) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      nodes.push(...filterEmpty(child.children as VNode[]))</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      nodes.push(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return nodes.filter(</span></span>
<span class="line"><span style="color:#A6ACCD;">    c =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      !(</span></span>
<span class="line"><span style="color:#A6ACCD;">        c &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        (c.type === Comment ||</span></span>
<span class="line"><span style="color:#A6ACCD;">          (c.type === Fragment &amp;&amp; c.children?.length === 0) ||</span></span>
<span class="line"><span style="color:#A6ACCD;">          (c.type === Text &amp;&amp; (c.children as string).trim() === &#39;&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><ul><li>遍历过滤后的vNode进行渲染</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const children = filterEmpty(slots.default?.())</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.m(props.direction),</span></span>
<span class="line"><span style="color:#A6ACCD;">        mergedAlign.value &amp;&amp; bem.m(\`align-\${mergedAlign.value}\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">        props.wrap &amp;&amp; bem.m(&#39;wrap&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        props.fill &amp;&amp; bem.m(&#39;fill&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {children.map((c, i) =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">          key={\`item-\${i}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">          class={\`\${name}-item\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">          style={getMarginStyle(i === children.length - 1)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {c}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ))}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-space</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--horizontal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-space-item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--vertical</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--align-baseline</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> baseline</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--align-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--align-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-end</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--align-center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--fill</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,21),o=[e];function c(t,r,i,C,A,y){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
