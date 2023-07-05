import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const F=JSON.parse('{"title":"DropdownMenu","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/dropdownMenu.md"}'),p={name:"guide/notes/dropdownMenu.md"},o=l(`<h1 id="dropdownmenu" tabindex="-1">DropdownMenu <a class="header-anchor" href="#dropdownmenu" aria-label="Permalink to &quot;DropdownMenu&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const dropdownMenuProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 菜单标题和选项的选中态颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">  activeColor: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 	菜单展开方向，可选值为up|down</span></span>
<span class="line"><span style="color:#A6ACCD;">  direction: makeStringProp&lt;DropdownMenuDirection&gt;(&#39;down&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 菜单栏 z-index 层级</span></span>
<span class="line"><span style="color:#A6ACCD;">  zIndex: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 动画时长，单位秒，设置为 0 可以禁用动画</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: makeNumericProp(0.2),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否显示遮罩层</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlay: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否在点击遮罩层后关闭菜单</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClickOutside: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否在点击外部元素后关闭菜单</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClickOverlay: truthProp</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type DropdownMenuProps = ExtractPropTypes&lt;typeof dropdownMenuProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;update:modelValue&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// menu ref</span></span>
<span class="line"><span style="color:#A6ACCD;">const root = ref&lt;HTMLElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;">// menu bar ref</span></span>
<span class="line"><span style="color:#A6ACCD;">const barRef = ref&lt;HTMLElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 生成id</span></span>
<span class="line"><span style="color:#A6ACCD;">const id = useId()</span></span>
<span class="line"><span style="color:#A6ACCD;">// menu bar top</span></span>
<span class="line"><span style="color:#A6ACCD;">const offset = ref(0)</span></span></code></pre></div><h2 id="usechildren" tabindex="-1">useChildren <a class="header-anchor" href="#usechildren" aria-label="Permalink to &quot;useChildren&quot;">​</a></h2><ul><li>使用<a href="./hooks.html#usechildren-ts">useChildren</a>关联子组件。</li><li>父组件通过<code>linkChildren</code>把对象<code>provide</code>给子组件。</li><li>需要与<a href="./hooks.html#useparent-ts">useParent</a>搭配使用。</li><li>子组件中<code>useParent</code>，内部通过<code>inject</code>获取父组件<code>provide</code>的对象。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 关联子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const { children, linkChildren } = useChildren(DROPDOWN_KEY)</span></span></code></pre></div><h2 id="usescrollparent" tabindex="-1">useScrollParent <a class="header-anchor" href="#usescrollparent" aria-label="Permalink to &quot;useScrollParent&quot;">​</a></h2><ul><li>使用<a href="./hooks.html#usescrollparent">useScrollParent</a>获取可滚动的父级元素。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const scrollParent = useScrollParent(root)</span></span></code></pre></div><h2 id="opened" tabindex="-1">opened <a class="header-anchor" href="#opened" aria-label="Permalink to &quot;opened&quot;">​</a></h2><ul><li>通过计算函数监控子组件中<code>state.showWrapper</code>得到是否展开菜单。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const opened = computed(() =&gt; children.some(item =&gt; item.state.showWrapper))</span></span></code></pre></div><h2 id="barstyle" tabindex="-1">barStyle <a class="header-anchor" href="#barstyle" aria-label="Permalink to &quot;barStyle&quot;">​</a></h2><ul><li>通过计算函数监控<code>opended</code>和<code>props.zIndex</code>每次打开+1</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const barStyle = computed&lt;CSSProperties | undefined&gt;(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (opened.value &amp;&amp; isDef(props.zIndex)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      zIndex: +props.zIndex + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="toggleitem" tabindex="-1">toggleItem <a class="header-anchor" href="#toggleitem" aria-label="Permalink to &quot;toggleItem&quot;">​</a></h2><ul><li>传入点击的子组件<code>index</code>,通过遍历<code>children</code>找到调用子组件<code>toggle</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const toggleItem = (active: number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  children.forEach((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (index === active) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      item.toggle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (item.state.showPopup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      item.toggle(false, { immediate: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="rendertitle" tabindex="-1">renderTitle <a class="header-anchor" href="#rendertitle" aria-label="Permalink to &quot;renderTitle&quot;">​</a></h2><ul><li>渲染 title，绑定样式和事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderTitle = (item: ComponentInstance, index: number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { showPopup } = item.state</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { disabled, titleClass } = item</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      id={\`\${id}-\${index}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">      role=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      tabindex={disabled ? undefined : 0}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.e(&#39;item&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        disabled ? bem.em(&#39;item&#39;, &#39;disabled&#39;) : HAPTICS_FEEDBACK</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!disabled) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          toggleItem(index)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">          bem.e(&#39;title&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          showPopup === (props.direction === &#39;down&#39;) &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">            bem.em(&#39;title&#39;, &#39;down&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          showPopup &amp;&amp; bem.em(&#39;title&#39;, &#39;active&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          titleClass</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">        style={{ color: showPopup ? props.activeColor : &#39;&#39; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;w-ellipsis&quot;&gt;{item.renderTitle()}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h2><ul><li>调用 <code>children</code>数组中子组件的<code>toggle</code>关闭所有。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const close = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  children.forEach(item =&gt; item.toggle(false))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="监听与导出-重要" tabindex="-1">监听与导出（重要） <a class="header-anchor" href="#监听与导出-重要" aria-label="Permalink to &quot;监听与导出（重要）&quot;">​</a></h2><ul><li>使用<a href="./hooks.html#use-expose-ts">useExpose</a> 暴露 <code>close</code> 方法。</li><li><code>updateOffset</code> 中通过<a href="./hooks.html#userect">useRect</a>获取<code>barRef</code>的属性，赋值给<code>offset</code>，用于暴露给子组件定位用。</li><li>通过<a href="./hooks.html#useclickaway">useClickAway</a>，定义响应函数<code>onClickAway</code>关闭。</li><li>通过<a href="./hooks.html#useeventlistener">useEventListener</a>监听<code>scroll</code>事件，定义响应函数<code>onScroll</code>调用<code>updateOffset</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const updateOffset = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (barRef.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const rect = useRect(barRef)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (props.direction === &#39;down&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      offset.value = rect.bottom</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      offset.value = windowHeight.value - rect.top</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 根据配置点击outsize是否关闭菜单展示状态</span></span>
<span class="line"><span style="color:#A6ACCD;">const onClickAway = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.closeOnClickOutside) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    close()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 监听 scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">const onScroll = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (opened.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateOffset()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">useExpose({ close })</span></span>
<span class="line"><span style="color:#A6ACCD;">linkChildren({ id, props, offset, updateOffset })</span></span>
<span class="line"><span style="color:#A6ACCD;">useClickAway(root, onClickAway)</span></span>
<span class="line"><span style="color:#A6ACCD;">useEventListener(&#39;scroll&#39;, onScroll, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  target: scrollParent,</span></span>
<span class="line"><span style="color:#A6ACCD;">  passive: true</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div ref={root} class={bem.b()}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref={barRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={barStyle.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[bem.e(&#39;bar&#39;), opened.value &amp;&amp; bem.em(&#39;bar&#39;, &#39;opened&#39;)]}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {children.map(renderTitle)}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">48px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-background-2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">101</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-active-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-primary-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-disabled-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-text-color-2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-xs</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-title-line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-line-height-lg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-option-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-primary-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-menu-content-max-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-dropdown-menu</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">user-select</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__bar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-background</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-shadow</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--opened</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-item-z-index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// hack for flex ellipsis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--disabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-dropdown-menu__title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-disabled-text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-padding</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-font-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-line-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-4px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent transparent </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-gray-4</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-gray-4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-45deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-title-active-text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent transparent currentColor currentColor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--down</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">135deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,36),e=[o];function t(c,r,C,D,A,y){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
