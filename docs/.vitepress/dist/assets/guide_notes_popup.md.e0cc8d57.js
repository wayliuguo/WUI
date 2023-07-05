import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const F=JSON.parse('{"title":"Popup","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/popup.md"}'),p={name:"guide/notes/popup.md"},o=l(`<h1 id="popup" tabindex="-1">Popup <a class="header-anchor" href="#popup" aria-label="Permalink to &quot;Popup&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const popupSharedProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // whether to show popup</span></span>
<span class="line"><span style="color:#A6ACCD;">  show: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // z-index</span></span>
<span class="line"><span style="color:#A6ACCD;">  zIndex: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // whether to show overlay</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlay: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // transition duration</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // teleport</span></span>
<span class="line"><span style="color:#A6ACCD;">  teleport: [String, Object] as PropType&lt;TeleportProps[&#39;to&#39;]&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // prevent body scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">  lockScroll: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // whether to lazy render</span></span>
<span class="line"><span style="color:#A6ACCD;">  lazyRender: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // callback function before close</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeClose: Function as PropType&lt;Interceptor&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // overlay custom style</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayStyle: Object as PropType&lt;CSSProperties&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // overlay custom class name</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayClass: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Initial rendering animation</span></span>
<span class="line"><span style="color:#A6ACCD;">  transitionAppear: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // whether to close popup when overlay is clicked</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClickOverlay: truthProp</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const popupProps = extend({}, popupSharedProps, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否显示圆角</span></span>
<span class="line"><span style="color:#A6ACCD;">  round: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹出位置，可选值为 top bottom right left</span></span>
<span class="line"><span style="color:#A6ACCD;">  position: makeStringProp&lt;PopupPosition&gt;(&#39;center&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 关闭图标名称或图片链接，等同于 Icon 组件的 name 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeIcon: makeStringProp(&#39;cross&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否显示关闭图标</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeable: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 动画类名，等价于 transition 的 name 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 图标类名前缀，等同于 Icon 组件的 class-prefix 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPrefix: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否在页面回退时自动关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnPopstate: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 关闭图标位置，可选值为 top-left bottom-left bottom-right</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeIconPosition: makeStringProp&lt;PopupCloseIconPosition&gt;(&#39;top-right&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否开启顶部安全区适配</span></span>
<span class="line"><span style="color:#A6ACCD;">  safeAreaInsetTop: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否开启底部安全区适配</span></span>
<span class="line"><span style="color:#A6ACCD;">  safeAreaInsetBottom: Boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type PopupProps = ExtractPropTypes&lt;typeof popupProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;open&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;close&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;opened&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;closed&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;keydown&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;update:show&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;clickOverlay&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;clickCloseIcon&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="uselazyrender-lazyrender" tabindex="-1">useLazyRender &amp; lazyRender <a class="header-anchor" href="#uselazyrender-lazyrender" aria-label="Permalink to &quot;useLazyRender &amp; lazyRender&quot;">​</a></h2><ul><li><a href="./hooks.html#use-lazy-render-ts">useLazyRender</a>返回一个函数。</li><li>这个函数接收一个<code>JSX.Element</code>入参的函数，这个函数根据<code>props.show || !props.lazyRender</code>执行。</li><li><code>position</code> 设置位置。</li><li><code>round</code> 设置圆角。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const popupRef = ref&lt;HTMLElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const lazyRender = useLazyRender(() =&gt; props.show || !props.lazyRender)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const renderPopup = lazyRender(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { round, position, safeAreaInsetTop, safeAreaInsetBottom } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-show={props.show}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref={popupRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={style.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">      role=&quot;dialog&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      tabindex={0}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        round &amp;&amp; bem.m(&#39;round&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        bem.m(\`\${position}\`),</span></span>
<span class="line"><span style="color:#A6ACCD;">        safeAreaInsetTop &amp;&amp; &#39;w-safe-area-top&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        safeAreaInsetBottom &amp;&amp; &#39;w-safe-area-bottom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onKeydown={onKeydown}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {...attrs}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {renderCloseIcon()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><ul><li>设置层级与动画/渐变时间。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const style = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const style: CSSProperties = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    zIndex: zIndex.value</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isDef(props.duration)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const key =</span></span>
<span class="line"><span style="color:#A6ACCD;">      props.position === &#39;center&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ? &#39;animationDuration&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        : &#39;transitionDuration&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    style[key] = \`\${props.duration}s\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return style</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h2><ul><li>使用自定义<code>zIndex</code> 或<a href="./hooks.html#use-global-z-index-ts">全局zIndex</a></li><li><code>emit(&#39;open&#39;)</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const open = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!opened) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    opened = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    zIndex.value =</span></span>
<span class="line"><span style="color:#A6ACCD;">      props.zIndex !== undefined ? +props.zIndex : useGlobalZIndex()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(&#39;open&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h2><ul><li>这里的<code>props.beforeClose</code> 已经通过类型定义为一个 <code>Function</code></li><li>通过<a href="./utilsFunction.html#interceptor-ts">callInterceptor</a>拦截<code>beforeClose</code>, 在执行<code>beforeClose</code>后进行<code>done</code>的调用。</li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const close = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (opened) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    callInterceptor(props.beforeClose, {</span></span>
<span class="line"><span style="color:#A6ACCD;">      done() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        opened = false</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit(&#39;close&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        emit(&#39;update:show&#39;, false)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="onclickoverlay" tabindex="-1">onClickOverlay <a class="header-anchor" href="#onclickoverlay" aria-label="Permalink to &quot;onClickOverlay&quot;">​</a></h2><ul><li>派发<code>clickOverlay</code></li><li>根据<code>closeOnClickOverlay</code>调用<code>close</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const onClickOverlay = (event: MouseEvent): void =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  emit(&#39;clickOverlay&#39;, event)</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.closeOnClickOverlay) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    close()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="renderoverlay" tabindex="-1">renderOverlay <a class="header-anchor" href="#renderoverlay" aria-label="Permalink to &quot;renderOverlay&quot;">​</a></h2><ul><li>渲染遮罩层。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderOverlay = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.overlay) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Overlay</span></span>
<span class="line"><span style="color:#A6ACCD;">        v-slots={{ default: slots[&#39;overlay-content&#39;] }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        show={props.show}</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={props.overlayClass}</span></span>
<span class="line"><span style="color:#A6ACCD;">        zIndex={zIndex.value}</span></span>
<span class="line"><span style="color:#A6ACCD;">        duration={props.duration}</span></span>
<span class="line"><span style="color:#A6ACCD;">        customStyle={props.overlayStyle}</span></span>
<span class="line"><span style="color:#A6ACCD;">        role={props.closeOnClickOverlay ? &#39;button&#39; : undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;">        tabindex={props.closeOnClickOverlay ? 0 : undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={onClickOverlay}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/Overlay&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="rendercloseicon" tabindex="-1">renderCloseIcon <a class="header-anchor" href="#rendercloseicon" aria-label="Permalink to &quot;renderCloseIcon&quot;">​</a></h2><ul><li>渲染关闭按钮。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderCloseIcon = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.closeable) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Icon</span></span>
<span class="line"><span style="color:#A6ACCD;">        role=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        tabindex={0}</span></span>
<span class="line"><span style="color:#A6ACCD;">        name={props.closeIcon}</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">          bem.e(&#39;close-icon&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          bem.em(&#39;close-icon&#39;, props.closeIconPosition),</span></span>
<span class="line"><span style="color:#A6ACCD;">          HAPTICS_FEEDBACK</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">        classPrefix={props.iconPrefix}</span></span>
<span class="line"><span style="color:#A6ACCD;">        onClick={onClickCloseIcon}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="onclickcloseicon" tabindex="-1">onClickCloseIcon <a class="header-anchor" href="#onclickcloseicon" aria-label="Permalink to &quot;onClickCloseIcon&quot;">​</a></h2><ul><li>点击关闭按钮。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const onClickCloseIcon = (event: MouseEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  emit(&#39;clickCloseIcon&#39;, event)</span></span>
<span class="line"><span style="color:#A6ACCD;">  close()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="onopened" tabindex="-1">onOpened <a class="header-anchor" href="#onopened" aria-label="Permalink to &quot;onOpened&quot;">​</a></h2><ul><li>弹窗打开后派发<code>opened</code>事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let timer: ReturnType&lt;typeof setTimeout&gt; | null</span></span>
<span class="line"><span style="color:#A6ACCD;">const onOpened = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (timer) clearTimeout(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">  timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(&#39;opened&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="onclosed" tabindex="-1">onClosed <a class="header-anchor" href="#onclosed" aria-label="Permalink to &quot;onClosed&quot;">​</a></h2><ul><li>派发<code>closed</code>事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const onClosed = () =&gt; emit(&#39;closed&#39;)</span></span></code></pre></div><h2 id="onkeydown" tabindex="-1">onKeydown <a class="header-anchor" href="#onkeydown" aria-label="Permalink to &quot;onKeydown&quot;">​</a></h2><ul><li>派发<code>keydown</code>事件。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const onKeydown = (event: KeyboardEvent) =&gt; emit(&#39;keydown&#39;, event)</span></span></code></pre></div><h2 id="rendertransition" tabindex="-1">renderTransition <a class="header-anchor" href="#rendertransition" aria-label="Permalink to &quot;renderTransition&quot;">​</a></h2><ul><li>使用<code>Transition</code>, 定义<code>onAfterEnter</code>与<code>onAfterLeave</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderTransition = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { position, transition, transitionAppear } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  const name =</span></span>
<span class="line"><span style="color:#A6ACCD;">    position === &#39;center&#39; ? &#39;w-fade&#39; : \`w-popup-slide-\${position}\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Transition</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-slots={{ default: renderPopup }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      name={transition || name}</span></span>
<span class="line"><span style="color:#A6ACCD;">      appear={transitionAppear}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onAfterEnter={onOpened}</span></span>
<span class="line"><span style="color:#A6ACCD;">      onAfterLeave={onClosed}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/Transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><ul><li>监听 <code>props.show</code>，进行关闭与开启。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; props.show,</span></span>
<span class="line"><span style="color:#A6ACCD;">  show =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (show &amp;&amp; !opened) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      open()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (attrs.tabindex === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          popupRef.value?.focus()</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!show &amp;&amp; opened) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      opened = false</span></span>
<span class="line"><span style="color:#A6ACCD;">      emit(&#39;close&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="useexpose" tabindex="-1">useExpose <a class="header-anchor" href="#useexpose" aria-label="Permalink to &quot;useExpose&quot;">​</a></h2><ul><li>通过自定义<code>hooks</code><a href="./hooks.html#use-expose-ts">useExpose</a>暴露 popupRef。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useExpose({ popupRef })</span></span></code></pre></div><h2 id="uselockscroll" tabindex="-1">useLockScroll <a class="header-anchor" href="#uselockscroll" aria-label="Permalink to &quot;useLockScroll&quot;">​</a></h2><ul><li>通过<a href="./hooks.html#use-lock-scroll-ts">useLockScroll</a>进行滚动的控制。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useLockScroll(popupRef, () =&gt; props.show &amp;&amp; props.lockScroll)</span></span></code></pre></div><h2 id="useeventlistener" tabindex="-1">useEventListener <a class="header-anchor" href="#useeventlistener" aria-label="Permalink to &quot;useEventListener&quot;">​</a></h2><ul><li>路由退出后根据配置关闭。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useEventListener(&#39;popstate&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.closeOnPopstate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    close()</span></span>
<span class="line"><span style="color:#A6ACCD;">    shouldReopen = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="onmounted-onactivated-ondeactivated" tabindex="-1">onMounted &amp; onActivated &amp; onDeactivated <a class="header-anchor" href="#onmounted-onactivated-ondeactivated" aria-label="Permalink to &quot;onMounted &amp; onActivated &amp; onDeactivated&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.show) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    open()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onActivated(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (shouldReopen) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(&#39;update:show&#39;, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    shouldReopen = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onDeactivated(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // teleported popup should be closed when deactivated</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.show &amp;&amp; props.teleport) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    close()</span></span>
<span class="line"><span style="color:#A6ACCD;">    shouldReopen = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="provide" tabindex="-1">provide <a class="header-anchor" href="#provide" aria-label="Permalink to &quot;provide&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">provide(POPUP_TOGGLE_KEY, () =&gt; props.show)</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><ul><li>如果<code>teleport</code>，结合<code>Teleport</code>组件<code>to</code>属性渲染到特定<code>DOM</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.teleport) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Teleport to={props.teleport}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {renderOverlay()}</span></span>
<span class="line"><span style="color:#A6ACCD;">        {renderTransition()}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Teleport&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {renderOverlay()}</span></span>
<span class="line"><span style="color:#A6ACCD;">      {renderTransition()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style-1" tabindex="-1">style <a class="header-anchor" href="#style-1" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-background-2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transform </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-duration-base</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-round-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-close-icon-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-close-icon-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-gray-5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-close-icon-margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-popup-close-icon-z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-overflow-hidden</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-popup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">max-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow-y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-background</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-transition</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-overflow-scrolling</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> touch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fit-content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100vw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-md</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateY</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;.</span><span style="color:#FFCB6B;">w-popup--round</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--top</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;.</span><span style="color:#FFCB6B;">w-popup--round</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;.</span><span style="color:#FFCB6B;">w-popup--round</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;.</span><span style="color:#FFCB6B;">w-popup--round</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;.</span><span style="color:#FFCB6B;">w-popup--round</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-round-radius</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-top-enter-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-left-enter-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-right-enter-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-bottom-enter-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-ease-out</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-top-leave-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-left-leave-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-right-leave-active</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-bottom-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-ease-in</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-top-enter-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-top-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-right-enter-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-right-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-bottom-enter-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-bottom-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-left-enter-from</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-slide-left-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-100%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__close-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-z-index</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--top-left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--top-right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--bottom-left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--bottom-right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-popup-close-icon-margin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,63),e=[o];function c(t,r,C,A,D,y){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
