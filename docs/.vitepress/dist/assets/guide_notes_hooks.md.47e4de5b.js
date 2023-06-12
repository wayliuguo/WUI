import{_ as n,o as s,c as a,O as l}from"./chunks/framework.27bfc947.js";const h=JSON.parse('{"title":"hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/hooks.md"}'),e={name:"guide/notes/hooks.md"},p=l(`<h1 id="hooks" tabindex="-1">hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;hooks&quot;">​</a></h1><h2 id="usechildren-ts" tabindex="-1">useChildren.ts <a class="header-anchor" href="#usechildren-ts" aria-label="Permalink to &quot;useChildren.ts&quot;">​</a></h2><h3 id="usechildren" tabindex="-1">useChildren <a class="header-anchor" href="#usechildren" aria-label="Permalink to &quot;useChildren&quot;">​</a></h3><ul><li>导出了<code>publicChildren</code>,<code>linkChildren</code></li><li><code>publicChildren</code>：元素下的子元素</li><li><code>linkChildren</code>：接收一个value入参 <ul><li>通过 provide 提供了一个对象，包括<code>link、unlink、internalChildren、children、value</code></li><li><code>link</code>：往公共子元素数组中收集并排序（链接子元素）</li><li><code>unlink</code>: 解除子元素链接</li><li><code>value</code>：公共变量</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function useChildren&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#A6ACCD;">  Child extends ComponentPublicInstance = ComponentPublicInstance&lt;object, any&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ProvideValue = never</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;(key: InjectionKey&lt;ProvideValue&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const publicChildren: Child[] = reactive([])</span></span>
<span class="line"><span style="color:#A6ACCD;">  const internalChildren: ComponentInternalInstance[] = reactive([])</span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">  const parent = getCurrentInstance()!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const linkChildren = (value?: ProvideValue) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const link = (child: ComponentInternalInstance) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (child.proxy) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        internalChildren.push(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">        publicChildren.push(child.proxy as Child)</span></span>
<span class="line"><span style="color:#A6ACCD;">        sortChildren(parent, publicChildren, internalChildren)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const unlink = (child: ComponentInternalInstance) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const index = internalChildren.indexOf(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">      publicChildren.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">      internalChildren.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    provide(</span></span>
<span class="line"><span style="color:#A6ACCD;">      key,</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.assign(</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          link,</span></span>
<span class="line"><span style="color:#A6ACCD;">          unlink,</span></span>
<span class="line"><span style="color:#A6ACCD;">          children: publicChildren,</span></span>
<span class="line"><span style="color:#A6ACCD;">          internalChildren</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        value</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: publicChildren,</span></span>
<span class="line"><span style="color:#A6ACCD;">    linkChildren</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="sortchildren" tabindex="-1">sortChildren <a class="header-anchor" href="#sortchildren" aria-label="Permalink to &quot;sortChildren&quot;">​</a></h3><ul><li>用于对子组件列表进行排序。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function sortChildren(</span></span>
<span class="line"><span style="color:#A6ACCD;">  parent: ComponentInternalInstance,</span></span>
<span class="line"><span style="color:#A6ACCD;">  publicChildren: ComponentPublicInstance[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  internalChildren: ComponentInternalInstance[]</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const vnodes = flattenVNodes(parent.subTree.children)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  internalChildren.sort(</span></span>
<span class="line"><span style="color:#A6ACCD;">    (a, b) =&gt; findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode)</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">  const orderedPublicChildren = internalChildren.map(item =&gt; item.proxy!)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  publicChildren.sort((a, b) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const indexA = orderedPublicChildren.indexOf(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    const indexB = orderedPublicChildren.indexOf(b)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return indexA - indexB</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="flattenvnodes" tabindex="-1">flattenVNodes <a class="header-anchor" href="#flattenvnodes" aria-label="Permalink to &quot;flattenVNodes&quot;">​</a></h3><ul><li>将渲染子树中的所有虚拟节点展平为一维数组。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function flattenVNodes(children: VNodeNormalizedChildren) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result: VNode[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const traverse = (children: VNodeNormalizedChildren) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (Array.isArray(children)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      children.forEach(child =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isVNode(child)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          result.push(child)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          if (child.component?.subTree) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            result.push(child.component.subTree)</span></span>
<span class="line"><span style="color:#A6ACCD;">            traverse(child.component.subTree.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          if (child.children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            traverse(child.children)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  traverse(children)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return result</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="findvnodeindex" tabindex="-1">findVNodeIndex <a class="header-anchor" href="#findvnodeindex" aria-label="Permalink to &quot;findVNodeIndex&quot;">​</a></h3><ul><li>查找指定虚拟节点在 vnodes 数组中的索引位置。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const findVNodeIndex = (vnodes: VNode[], vnode: VNode) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const index = vnodes.indexOf(vnode)</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (index === -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return vnodes.findIndex(</span></span>
<span class="line"><span style="color:#A6ACCD;">      item =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        vnode.key !== undefined &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        vnode.key !== null &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        item.type === vnode.type &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        item.key === vnode.key</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return index</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="useparent-ts" tabindex="-1">useParent.ts <a class="header-anchor" href="#useparent-ts" aria-label="Permalink to &quot;useParent.ts&quot;">​</a></h2><h3 id="useparent" tabindex="-1">useParent <a class="header-anchor" href="#useparent" aria-label="Permalink to &quot;useParent&quot;">​</a></h3><ul><li>通过<code>inject</code>获取了在<code>useChildren</code>中<code>provide</code>的内容</li><li>调用 <code>useChildren</code>，更新 <code>useChildren</code> 中数据</li><li>卸载时取消链接</li><li>返回<code>parent</code>、<code>index(下标)</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function useParent&lt;T&gt;(key: InjectionKey&lt;ParentProvide&lt;T&gt;&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const parent = inject(key, null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">    const instance = getCurrentInstance()!</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { link, unlink, internalChildren } = parent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    link(instance)</span></span>
<span class="line"><span style="color:#A6ACCD;">    onUnmounted(() =&gt; unlink(instance))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const index = computed(() =&gt; internalChildren.indexOf(instance))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parent,</span></span>
<span class="line"><span style="color:#A6ACCD;">      index</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    index: ref(-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,18),o=[p];function c(i,t,r,C,d,A){return s(),a("div",null,o)}const u=n(e,[["render",c]]);export{h as __pageData,u as default};
