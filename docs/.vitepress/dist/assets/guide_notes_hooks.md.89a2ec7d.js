import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const D=JSON.parse('{"title":"hooks","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/hooks.md"}'),e={name:"guide/notes/hooks.md"},p=l(`<h1 id="hooks" tabindex="-1">hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;hooks&quot;">​</a></h1><h2 id="usechildren-ts" tabindex="-1">useChildren.ts <a class="header-anchor" href="#usechildren-ts" aria-label="Permalink to &quot;useChildren.ts&quot;">​</a></h2><h3 id="usechildren" tabindex="-1">useChildren <a class="header-anchor" href="#usechildren" aria-label="Permalink to &quot;useChildren&quot;">​</a></h3><ul><li>导出了<code>publicChildren</code>,<code>linkChildren</code></li><li><code>publicChildren</code>：元素下的子元素</li><li><code>linkChildren</code>：接收一个value入参 <ul><li>通过 provide 提供了一个对象，包括<code>link、unlink、internalChildren、children、value</code></li><li><code>link</code>：往公共子元素数组中收集并排序（链接子元素）</li><li><code>unlink</code>: 解除子元素链接</li><li><code>value</code>：公共变量</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function useChildren&lt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="usecustomfieldvalue" tabindex="-1">useCustomFieldValue <a class="header-anchor" href="#usecustomfieldvalue" aria-label="Permalink to &quot;useCustomFieldValue&quot;">​</a></h2><ul><li><code>CustomFieldInjectionValue</code> 定义类型</li><li><code>InjectionKey</code> 定义注入类型为<code>CustomFieldInjectionValue</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type CustomFieldInjectionValue = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  customValue: Ref&lt;(() =&gt; unknown) | undefined&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  resetValidation: () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">  validateWithTrigger: (trigger: &#39;onBlur&#39; | &#39;onChange&#39; | &#39;onSubmit&#39;) =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const CUSTOM_FIELD_INJECTION_KEY: InjectionKey&lt;CustomFieldInjectionValue&gt; =</span></span>
<span class="line"><span style="color:#A6ACCD;">  Symbol(&#39;w-field&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useCustomFieldValue(customValue: () =&gt; unknown) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const field = inject(CUSTOM_FIELD_INJECTION_KEY, null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (field &amp;&amp; !field.customValue.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    field.customValue.value = customValue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    watch(customValue, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      field.resetValidation()</span></span>
<span class="line"><span style="color:#A6ACCD;">      field.validateWithTrigger(&#39;onChange&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="use-expose-ts" tabindex="-1">use-expose.ts <a class="header-anchor" href="#use-expose-ts" aria-label="Permalink to &quot;use-expose.ts&quot;">​</a></h2><ul><li><code>vue</code> 中 <code>expose</code> 的升级版</li><li><a href="./vue.html#expose">expose</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function useExpose&lt;T = Record&lt;string, any&gt;&gt;(apis: T) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const instance = getCurrentInstance()</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    extend(instance.proxy as object, apis)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="use-lazy-render-ts" tabindex="-1">use-lazy-render.ts <a class="header-anchor" href="#use-lazy-render-ts" aria-label="Permalink to &quot;use-lazy-render.ts&quot;">​</a></h2><ul><li>依据入参的<code>show</code>作为<code>watch</code>的监听源。</li><li><code>(render: () =&gt; JSX.Element)</code> 参数列表，定义render</li><li><code>(render: () =&gt; JSX.Element) =&gt; () =&gt; inited.value ? render() : null</code> 在参数列表中定义render函数，这里返回一个函数<code>() =&gt; inited.value ? render() : null</code>,这个函数根据<code>inited.value</code>判断是否调用<code>render()</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export function useLazyRender(show: WatchSource&lt;boolean | undefined&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const inited = ref(false)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">    show,</span></span>
<span class="line"><span style="color:#A6ACCD;">    value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        inited.value = value</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { immediate: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (render: () =&gt; JSX.Element) =&gt; () =&gt; inited.value ? render() : null</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="useeventlistener" tabindex="-1">useEventListener <a class="header-anchor" href="#useeventlistener" aria-label="Permalink to &quot;useEventListener&quot;">​</a></h2><ul><li>利用函数重载，定义多个函数签名，以便在调用函数时根据传入的参数类型和数量来自动选择正确的函数签名。</li><li>如果当前不在浏览器环境中，直接退出。</li><li>target: 监听的目标，如果是元素则使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener" target="_blank" rel="noreferrer">addEventListener</a>,如果是<code>Ref</code>对象则使用<code>watch</code>监听，并在值变化后自动添加或移除事件监听器。</li><li>capture：一个布尔值，表示 <code>listener</code> 会在该类型的事件捕获阶段传播到该 <code>EventTarget</code> 时触发。</li><li>一个布尔值，设置为 true 时，表示 <code>listener</code> 永远不会调用 preventDefault()。</li><li>定义了两个内部函数 add 和 remove，用于添加和移除事件监听器。这两个函数会根据传入的目标元素和配置选项来添加或移除事件监听器。</li><li>在组件卸载时（使用 onUnmounted）和组件失活时（使用 onDeactivated）移除事件监听器。</li><li>在组件挂载时（使用 onMountedOrActivated）添加事件监听器。</li><li>返回一个函数，用于手动移除事件监听器。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export type UseEventListenerOptions = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  target?: TargetRef</span></span>
<span class="line"><span style="color:#A6ACCD;">  capture?: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">  passive?: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useEventListener&lt;K extends keyof DocumentEventMap&gt;(</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: K,</span></span>
<span class="line"><span style="color:#A6ACCD;">  listener: (event: DocumentEventMap[K]) =&gt; void,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options?: UseEventListenerOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">): () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">export function useEventListener(</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  listener: EventListener,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options?: UseEventListenerOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">): () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">export function useEventListener(</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  listener: EventListener,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: UseEventListenerOptions = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!inBrowser) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const { target = window, passive = false, capture = false } = options</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let cleaned = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  let attached: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const add = (target?: TargetRef) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (cleaned) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const element = unref(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (element &amp;&amp; !attached) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      element.addEventListener(type, listener, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        capture,</span></span>
<span class="line"><span style="color:#A6ACCD;">        passive</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      attached = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const remove = (target?: TargetRef) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (cleaned) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const element = unref(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (element &amp;&amp; attached) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      element.removeEventListener(type, listener, capture)</span></span>
<span class="line"><span style="color:#A6ACCD;">      attached = false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  onUnmounted(() =&gt; remove(target))</span></span>
<span class="line"><span style="color:#A6ACCD;">  onDeactivated(() =&gt; remove(target))</span></span>
<span class="line"><span style="color:#A6ACCD;">  onMountedOrActivated(() =&gt; add(target))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  let stopWatch: WatchStopHandle</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isRef(target)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    stopWatch = watch(target, (val, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove(oldVal)</span></span>
<span class="line"><span style="color:#A6ACCD;">      add(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * Clean up the event listener</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    stopWatch?.()</span></span>
<span class="line"><span style="color:#A6ACCD;">    remove(target)</span></span>
<span class="line"><span style="color:#A6ACCD;">    cleaned = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="use-global-z-index-ts" tabindex="-1">use-global-z-index.ts <a class="header-anchor" href="#use-global-z-index-ts" aria-label="Permalink to &quot;use-global-z-index.ts&quot;">​</a></h2><ul><li>全局管理<code>ZIndex</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let globalZIndex = 2000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** the global z-index is automatically incremented after reading */</span></span>
<span class="line"><span style="color:#A6ACCD;">export const useGlobalZIndex = () =&gt; ++globalZIndex</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** reset the global z-index */</span></span>
<span class="line"><span style="color:#A6ACCD;">export const setGlobalZIndex = (val: number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  globalZIndex = val</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="usescrollparent" tabindex="-1">useScrollParent <a class="header-anchor" href="#usescrollparent" aria-label="Permalink to &quot;useScrollParent&quot;">​</a></h2><ul><li>用于获取元素的滚动容器，<code>getScrollParent</code> 函数用于找到元素 el <code>的滚动容器，useScrollParent</code> 函数则是将 <code>getScrollParent</code> 封装成一个 <code>Hook</code>。</li><li><code>getScrollParent</code> 解析: <ul><li>从当前元素一直往上遍历父节点，直到节点为空、根节点或者遍历到了非元素节点为止。</li><li>使用 window.getComputedStyle 获取元素的样式对象，从而得到 overflowY 属性值并使用正则表达式匹配是否包含 scroll、auto 或者 overlay 等关键词，如果匹配成功，则返回该元素作为滚动容器。</li><li>否则继续向上遍历父节点。最终返回的结果是根节点 root（默认是 window 对象）。</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">type ScrollElement = HTMLElement | Window</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const overflowScrollReg = /scroll|auto|overlay/i</span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultRoot = inBrowser ? window : undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function isElement(node: Element) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const ELEMENT_NODE_TYPE = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.tagName !== &#39;HTML&#39; &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.tagName !== &#39;BODY&#39; &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.nodeType === ELEMENT_NODE_TYPE</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function getScrollParent(</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: Element,</span></span>
<span class="line"><span style="color:#A6ACCD;">  root: ScrollElement | undefined = defaultRoot</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let node = el</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  while (node &amp;&amp; node !== root &amp;&amp; isElement(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { overflowY } = window.getComputedStyle(node)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (overflowScrollReg.test(overflowY)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return node</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    node = node.parentNode as Element</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return root</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useScrollParent(</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: Ref&lt;Element | undefined&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  root: ScrollElement | undefined = defaultRoot</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const scrollParent = ref&lt;Element | Window&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (el.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      scrollParent.value = getScrollParent(el.value, root)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return scrollParent</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="use-touch-ts" tabindex="-1">use-touch.ts <a class="header-anchor" href="#use-touch-ts" aria-label="Permalink to &quot;use-touch.ts&quot;">​</a></h2><ul><li>函数返回了一些变量和方法，包括 <code>startX、startY、deltaX、deltaY、offsetX、offsetY</code> 和 <code>direction</code> 等变量，以及 <code>move、start、reset、isVertical</code> 和 <code>isHorizontal</code> 等方法</li><li><code>start</code> 返回了起始坐标。</li><li><code>reset</code> 方法用于重置各个变量和方向。</li><li><code>move</code> 计算了当前触摸点相对于起始点的偏移量，并根据偏移量计算 deltaX、deltaY、offsetX 和 offsetY 变量的值，同时通过 getDirection 函数判断了滑动方向并保存在 direction 变量中。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Direction = &#39;&#39; | &#39;vertical&#39; | &#39;horizontal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getDirection(x: number, y: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (x &gt; y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;horizontal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (y &gt; x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;vertical&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useTouch() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const startX = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const startY = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const deltaX = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const deltaY = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const offsetX = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const offsetY = ref(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const direction = ref&lt;Direction&gt;(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const isVertical = () =&gt; direction.value === &#39;vertical&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const isHorizontal = () =&gt; direction.value === &#39;horizontal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const reset = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaX.value = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaY.value = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetX.value = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetY.value = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction.value = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const start = ((event: TouchEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    reset()</span></span>
<span class="line"><span style="color:#A6ACCD;">    startX.value = event.touches[0].clientX</span></span>
<span class="line"><span style="color:#A6ACCD;">    startY.value = event.touches[0].clientY</span></span>
<span class="line"><span style="color:#A6ACCD;">  }) as EventListener</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const move = ((event: TouchEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const touch = event.touches[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // safari back will set clientX to negative number</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaX.value = (touch.clientX &lt; 0 ? 0 : touch.clientX) - startX.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaY.value = touch.clientY - startY.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetX.value = Math.abs(deltaX.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetY.value = Math.abs(deltaY.value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // lock direction when distance is greater than a certain value</span></span>
<span class="line"><span style="color:#A6ACCD;">    const LOCK_DIRECTION_DISTANCE = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (</span></span>
<span class="line"><span style="color:#A6ACCD;">      !direction.value ||</span></span>
<span class="line"><span style="color:#A6ACCD;">      (offsetX.value &lt; LOCK_DIRECTION_DISTANCE &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        offsetY.value &lt; LOCK_DIRECTION_DISTANCE)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      direction.value = getDirection(offsetX.value, offsetY.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }) as EventListener</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    move,</span></span>
<span class="line"><span style="color:#A6ACCD;">    start,</span></span>
<span class="line"><span style="color:#A6ACCD;">    reset,</span></span>
<span class="line"><span style="color:#A6ACCD;">    startX,</span></span>
<span class="line"><span style="color:#A6ACCD;">    startY,</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaX,</span></span>
<span class="line"><span style="color:#A6ACCD;">    deltaY,</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetX,</span></span>
<span class="line"><span style="color:#A6ACCD;">    offsetY,</span></span>
<span class="line"><span style="color:#A6ACCD;">    direction,</span></span>
<span class="line"><span style="color:#A6ACCD;">    isVertical,</span></span>
<span class="line"><span style="color:#A6ACCD;">    isHorizontal</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="use-lock-scroll-ts" tabindex="-1">use-lock-scroll.ts <a class="header-anchor" href="#use-lock-scroll-ts" aria-label="Permalink to &quot;use-lock-scroll.ts&quot;">​</a></h2><ul><li><code>rootRef</code>： 元素, <code>shouldLock</code>: 是否控制。</li><li>使用<a href="./hooks.html#use-touch-ts">useTouch</a>获取导出的对象，用于处理触摸事件。</li><li><code>DIRECTION_UP</code> 和 <code>DIRECTION_DOWN</code>：表示向上和向下方向的常量。</li><li><code>onTouchMove</code>：是一个处理 <code>touchmove</code> 事件的函数，用于判断是否应该阻止默认行为。具体来说，它会根据触摸事件的方向和滚动条的位置来判断是否需要阻止默认行为。</li><li><code>lock</code> 和 <code>unlock</code>：分别用于锁定和解锁滚动。它们会添加或删除一些事件监听器，并向文档的 <code>body</code> 元素添加或删除一个类，以实现滚动锁定的效果。</li><li><code>init</code> 和 <code>destroy</code>：分别用于初始化和销毁滚动锁定。它们会在组件挂载或激活时、组件失活时以及组件卸载前分别调用。</li><li><code>watch</code>：用于监听 <code>shouldLock</code> 函数的返回值，以决定是否锁定滚动。</li><li><code>onTouchMove</code> 函数会获取当前触摸事件的方向和滚动条的位置，并根据这些信息判断是否需要阻止默认行为。 <ul><li><code>touch.move(event)</code>：更新触摸事件的状态。</li><li><code>const el = getScrollParent(event.target as Element, rootRef.value) as HTMLElement</code>：获取触摸事件所在的可滚动元素。<a href="./hooks.html#usescrollparent">getScrollParent</a></li><li><code>scrollHeight</code>：表示元素的滚动高度，即元素的内容高度加上内边距和边框高度。</li><li><code>offsetHeight</code>：表示元素的高度，包括内边距、边框和滚动条（如果存在）的高度。</li><li><code>scrollTop</code>：表示元素的滚动位置，即元素顶部被隐藏的像素数。</li><li><code>let status = &#39;11&#39;</code>：初始化状态码。</li><li><code>if (scrollTop === 0)</code>：如果滚动条已经滚动到顶部，则更新状态码。</li><li><code>else if (scrollTop + offsetHeight &gt;= scrollHeight)</code>：如果滚动条已经滚动到底部，则更新状态码。</li><li><code>if (status !== &#39;11&#39; &amp;&amp; touch.isVertical() &amp;&amp; !(parseInt(status, 2) &amp; parseInt(direction, 2)))</code>：如果状态码不为 &#39;11&#39;，并且触摸方向为垂直方向，并且状态码与方向码不匹配，则阻止默认行为。</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let totalLockCount = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const BODY_LOCK_CLASS = &#39;w-overflow-hidden&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useLockScroll(</span></span>
<span class="line"><span style="color:#A6ACCD;">  rootRef: Ref&lt;HTMLElement | undefined&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  shouldLock: () =&gt; boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const touch = useTouch()</span></span>
<span class="line"><span style="color:#A6ACCD;">  const DIRECTION_UP = &#39;01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const DIRECTION_DOWN = &#39;10&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const onTouchMove = (event: TouchEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    touch.move(event)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const direction = touch.deltaY.value &gt; 0 ? DIRECTION_DOWN : DIRECTION_UP</span></span>
<span class="line"><span style="color:#A6ACCD;">    const el = getScrollParent(</span></span>
<span class="line"><span style="color:#A6ACCD;">      event.target as Element,</span></span>
<span class="line"><span style="color:#A6ACCD;">      rootRef.value</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) as HTMLElement</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { scrollHeight, offsetHeight, scrollTop } = el</span></span>
<span class="line"><span style="color:#A6ACCD;">    let status = &#39;11&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (scrollTop === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      status = offsetHeight &gt;= scrollHeight ? &#39;00&#39; : &#39;01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (scrollTop + offsetHeight &gt;= scrollHeight) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      status = &#39;10&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (</span></span>
<span class="line"><span style="color:#A6ACCD;">      status !== &#39;11&#39; &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      touch.isVertical() &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">      !(parseInt(status, 2) &amp; parseInt(direction, 2))</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      preventDefault(event, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const lock = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.addEventListener(&#39;touchstart&#39;, touch.start)</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.addEventListener(&#39;touchmove&#39;, onTouchMove, { passive: false })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!totalLockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.body.classList.add(BODY_LOCK_CLASS)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    totalLockCount++</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const unlock = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (totalLockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.removeEventListener(&#39;touchstart&#39;, touch.start)</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.removeEventListener(&#39;touchmove&#39;, onTouchMove)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      totalLockCount--</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!totalLockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.body.classList.remove(BODY_LOCK_CLASS)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const init = () =&gt; shouldLock() &amp;&amp; lock()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const destroy = () =&gt; shouldLock() &amp;&amp; unlock()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  onMountedOrActivated(init)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onDeactivated(destroy)</span></span>
<span class="line"><span style="color:#A6ACCD;">  onBeforeUnmount(destroy)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  watch(shouldLock, value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    value ? lock() : unlock()</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="userect" tabindex="-1">useRect <a class="header-anchor" href="#userect" aria-label="Permalink to &quot;useRect&quot;">​</a></h2><ul><li>接受一个元素或元素的引用作为参数，并返回一个 DOMRect 对象，表示该元素的尺寸。</li><li>如果参数是一个 window 对象，则返回窗口的尺寸。</li><li>如果不是则检查元素是否有 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect" target="_blank" rel="noreferrer">getBoundingClientRect</a> 方法，并返回该方法的结果。如果元素没有 getBoundingClientRect 方法，则返回一个大小为 0 的 DOMRect 对象。</li><li>在函数中使用了 Vue 3 中的 Ref 和 unref 函数，用于处理传入的参数可能是一个引用的情况。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Ref, unref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const isWindow = (val: unknown): val is Window =&gt; val === window</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const makeDOMRect = (width: number, height: number) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    top: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    right: width,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bottom: height,</span></span>
<span class="line"><span style="color:#A6ACCD;">    width,</span></span>
<span class="line"><span style="color:#A6ACCD;">    height</span></span>
<span class="line"><span style="color:#A6ACCD;">  } as DOMRect)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const useRect = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  elementOrRef: Element | Window | Ref&lt;Element | Window | undefined&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const element = unref(elementOrRef)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isWindow(element)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const width = element.innerWidth</span></span>
<span class="line"><span style="color:#A6ACCD;">    const height = element.innerHeight</span></span>
<span class="line"><span style="color:#A6ACCD;">    return makeDOMRect(width, height)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (element?.getBoundingClientRect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return element.getBoundingClientRect()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return makeDOMRect(0, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="useclickaway" tabindex="-1">useClickAway <a class="header-anchor" href="#useclickaway" aria-label="Permalink to &quot;useClickAway&quot;">​</a></h2><ul><li>通过<a href="./hooks.html#useeventlistener">useEventListener</a>监听<code>click</code>事件，如果点击的不是传入的<code>target</code>，则执行传入的函数<code>listener</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Ref, unref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { inBrowser } from &#39;../utils&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useEventListener } from &#39;../useEventListener&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type UseClickAwayOptions = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  eventName?: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function useClickAway(</span></span>
<span class="line"><span style="color:#A6ACCD;">  target:</span></span>
<span class="line"><span style="color:#A6ACCD;">    | Element</span></span>
<span class="line"><span style="color:#A6ACCD;">    | Ref&lt;Element | undefined&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    | Array&lt;Element | Ref&lt;Element | undefined&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  listener: EventListener,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: UseClickAwayOptions = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!inBrowser) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const { eventName = &#39;click&#39; } = options</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const onClick = (event: Event) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const targets = Array.isArray(target) ? target : [target]</span></span>
<span class="line"><span style="color:#A6ACCD;">    const isClickAway = targets.every(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const element = unref(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return element &amp;&amp; !element.contains(event.target as Node)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isClickAway) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      listener(event)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  useEventListener(eventName, onClick, { target: document })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,48),o=[p];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
