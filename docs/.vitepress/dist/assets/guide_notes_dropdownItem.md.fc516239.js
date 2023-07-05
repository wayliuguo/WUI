import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const d=JSON.parse('{"title":"DropdownItem","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/dropdownItem.md"}'),p={name:"guide/notes/dropdownItem.md"},e=l(`<h1 id="dropdownitem" tabindex="-1">DropdownItem <a class="header-anchor" href="#dropdownitem" aria-label="Permalink to &quot;DropdownItem&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const dropdownItemProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 当前选中项对应的 value</span></span>
<span class="line"><span style="color:#A6ACCD;">  modelValue: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 菜单项标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 选项数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: makeArrayProp&lt;DropdownItemOption&gt;(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否禁用菜单</span></span>
<span class="line"><span style="color:#A6ACCD;">  disabled: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否在首次展开时才渲染菜单内容</span></span>
<span class="line"><span style="color:#A6ACCD;">  lazyRender: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 标题额外类名</span></span>
<span class="line"><span style="color:#A6ACCD;">  titleClass: [String, Array, Object],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 指定挂载的节点，等同于 Teleport 组件的 to 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  teleport: [String, Object] as PropType&lt;TeleportProps[&#39;to&#39;]&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type DropdownItemProps = ExtractPropTypes&lt;typeof dropdownItemProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;open&#39;, &#39;opened&#39;, &#39;close&#39;, &#39;closed&#39;, &#39;change&#39;, &#39;update:modelValue&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const state = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">  showPopup: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  showWrapper: false</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="useparent" tabindex="-1">useParent <a class="header-anchor" href="#useparent" aria-label="Permalink to &quot;useParent&quot;">​</a></h2><ul><li>使用<a href="./hooks.html#useparent-ts">useParent</a>获取父组件信息。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { parent, index } = useParent(DROPDOWN_KEY)</span></span></code></pre></div><h2 id="onclickwrapper" tabindex="-1">onClickWrapper <a class="header-anchor" href="#onclickwrapper" aria-label="Permalink to &quot;onClickWrapper&quot;">​</a></h2><ul><li>如果<code>teleport</code>阻止默认行为。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const onClickWrapper = (event: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // prevent being identified as clicking outside and closed when using teleport</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.teleport) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.stopPropagation()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="getemitter" tabindex="-1">getEmitter <a class="header-anchor" href="#getemitter" aria-label="Permalink to &quot;getEmitter&quot;">​</a></h2><ul><li>派发事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const getEmitter = (name: &#39;open&#39; | &#39;close&#39; | &#39;opened&#39;) =&gt; () =&gt; emit(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">const onOpen = getEmitter(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const onClose = getEmitter(&#39;close&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const onOpened = getEmitter(&#39;opened&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const onClosed = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.showWrapper = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  emit(&#39;closed&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="renderoption" tabindex="-1">renderOption <a class="header-anchor" href="#renderoption" aria-label="Permalink to &quot;renderOption&quot;">​</a></h2><ul><li>渲染列表选项，定义点击行为。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderOption = (option: DropdownItemOption) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { activeColor } = parent.props</span></span>
<span class="line"><span style="color:#A6ACCD;">  const active = option.value === props.modelValue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const onClick = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.showPopup = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (option.value !== props.modelValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      emit(&#39;update:modelValue&#39;, option.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">      emit(&#39;change&#39;, option.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const renderIcon = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (active) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return (</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Icon class={bem.e(&#39;icon&#39;)} color={activeColor} name=&quot;success&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Cell</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-slots={{ value: renderIcon }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      role=&quot;menuitem&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      key={option.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">      icon={option.icon}</span></span>
<span class="line"><span style="color:#A6ACCD;">      title={option.text}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[bem.e(&#39;option&#39;), active &amp;&amp; bem.em(&#39;option&#39;, &#39;active&#39;)]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={{ color: active ? activeColor : &#39;&#39; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      tabindex={active ? 0 : -1}</span></span>
<span class="line"><span style="color:#A6ACCD;">      clickable</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClick={onClick}</span></span>
<span class="line"><span style="color:#A6ACCD;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="rendercontent" tabindex="-1">renderContent <a class="header-anchor" href="#rendercontent" aria-label="Permalink to &quot;renderContent&quot;">​</a></h2><ul><li>获取<code>parent</code> 中 <code>offset</code> 定位高度。</li><li>结合<code>popup</code> 渲染列表。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderContent = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">const { offset } = parent</span></span>
<span class="line"><span style="color:#A6ACCD;">const { zIndex, overlay, duration, direction, closeOnClickOverlay } =</span></span>
<span class="line"><span style="color:#A6ACCD;">  parent.props</span></span>
<span class="line"><span style="color:#A6ACCD;">const style: CSSProperties = getZIndexStyle(zIndex)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 根据父组件的direction 和 offset 定位</span></span>
<span class="line"><span style="color:#A6ACCD;">if (direction === &#39;down&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  style.top = \`\${offset.value}px\`</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  style.bottom = \`\${offset.value}px\`</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 使用 popup 渲染内容</span></span>
<span class="line"><span style="color:#A6ACCD;">return (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-show={state.showWrapper}</span></span>
<span class="line"><span style="color:#A6ACCD;">    style={style}</span></span>
<span class="line"><span style="color:#A6ACCD;">    class={[bem.b(), bem.m(direction)]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    onClick={onClickWrapper}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {...attrs}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Popup</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-model:show={state.showPopup}</span></span>
<span class="line"><span style="color:#A6ACCD;">      role=&quot;menu&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={bem.e(&#39;content&#39;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">      overlay={overlay}</span></span>
<span class="line"><span style="color:#A6ACCD;">      position={direction === &#39;down&#39; ? &#39;top&#39; : &#39;bottom&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">      duration={state.transition ? duration : 0}</span></span>
<span class="line"><span style="color:#A6ACCD;">      lazyRender={props.lazyRender}</span></span>
<span class="line"><span style="color:#A6ACCD;">      overlayStyle={{ position: &#39;absolute&#39; }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      aria-labelledby={\`\${parent.id}-\${index.value}\`}</span></span>
<span class="line"><span style="color:#A6ACCD;">      closeOnClickOverlay={closeOnClickOverlay}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onOpen={onOpen}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClose={onClose}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onOpened={onOpened}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onClosed={onClosed}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {props.options.map(renderOption)}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="useexpose" tabindex="-1">useExpose <a class="header-anchor" href="#useexpose" aria-label="Permalink to &quot;useExpose&quot;">​</a></h2><ul><li>渲染 title，绑定样式和事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useExpose</span></span></code></pre></div><h2 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h2><ul><li>通过<a href="./hooks.html#use-expose-ts">useExpose</a>暴露<code>state、toggle、renderTitle</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const toggle = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  show = !state.showPopup,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: { immediate?: boolean } = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (show === state.showPopup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  state.showPopup = show</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.transition = !options.immediate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (show) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent.updateOffset()</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.showWrapper = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const renderTitle = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (slots.title) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return slots.title()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.title) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return props.title</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const match = props.options.find(</span></span>
<span class="line"><span style="color:#A6ACCD;">    option =&gt; option.value === props.modelValue</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return match ? match.text : &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">useExpose({ state, toggle, renderTitle })</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.teleport) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;Teleport to={props.teleport}&gt;{renderContent()}&lt;/Teleport&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return renderContent()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-dropdown-item-z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-dropdown-item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-item-z-index</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__option</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-option-active-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-dropdown-item__icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-option-active-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--up</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--down</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">max-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-dropdown-menu-content-max-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,33),o=[e];function t(c,r,i,C,A,y){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
