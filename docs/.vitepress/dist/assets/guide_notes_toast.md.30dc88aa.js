import{_ as s,o as n,c as a,O as l}from"./chunks/framework.4015372c.js";const F=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/toast.md"}'),p={name:"guide/notes/toast.md"},o=l(`<h1 id="toast" tabindex="-1">Toast <a class="header-anchor" href="#toast" aria-label="Permalink to &quot;Toast&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const toastProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  show: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: makeStringProp&lt;ToastType&gt;(&#39;text&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlay: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconSize: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: makeNumberProp(2000),</span></span>
<span class="line"><span style="color:#A6ACCD;">  position: makeStringProp&lt;ToastPosition&gt;(&#39;middle&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  teleport: [String, Object] as PropType&lt;TeleportProps[&#39;to&#39;]&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  wordBreak: String as PropType&lt;ToastWordBreak&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  className: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPrefix: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: makeStringProp(&#39;w-fade&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  loadingType: String as PropType&lt;LoadingType&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  forbidClick: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayClass: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayStyle: Object as PropType&lt;CSSProperties&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClick: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClickOverlay: Boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type ToastProps = ExtractPropTypes&lt;typeof toastProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;update:show&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="toggleclickable" tabindex="-1">toggleClickable <a class="header-anchor" href="#toggleclickable" aria-label="Permalink to &quot;toggleClickable&quot;">​</a></h3><ul><li>切换是否可以点击。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let clickable = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const toggleClickable = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const newValue = props.show &amp;&amp; props.forbidClick</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (clickable !== newValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    clickable = newValue</span></span>
<span class="line"><span style="color:#A6ACCD;">    lockClick(clickable)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="onclick" tabindex="-1">onClick <a class="header-anchor" href="#onclick" aria-label="Permalink to &quot;onClick&quot;">​</a></h3><ul><li>点击更新。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const updateShow = (show: boolean) =&gt; emit(&#39;update:show&#39;, show)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const onClick = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.closeOnClick) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateShow(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="rendericon" tabindex="-1">renderIcon <a class="header-anchor" href="#rendericon" aria-label="Permalink to &quot;renderIcon&quot;">​</a></h3><ul><li>渲染 <code>icon</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const renderIcon = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { icon, type, iconSize, iconPrefix, loadingType } = props</span></span>
<span class="line"><span style="color:#A6ACCD;">  const hasIcon = icon || type === &#39;success&#39; || type === &#39;fail&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (hasIcon) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Icon</span></span>
<span class="line"><span style="color:#A6ACCD;">        name={icon || type}</span></span>
<span class="line"><span style="color:#A6ACCD;">        size={iconSize}</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={bem.e(&#39;icon&#39;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        classPrefix={iconPrefix}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === &#39;loading&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Loading</span></span>
<span class="line"><span style="color:#A6ACCD;">        class={bem.m(&#39;loading&#39;)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        size={iconSize}</span></span>
<span class="line"><span style="color:#A6ACCD;">        type={loadingType}</span></span>
<span class="line"><span style="color:#A6ACCD;">      /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h3><ul><li>监听值切换是否可以点击。</li><li>监听值进行更新值<code>show</code>，如果是0则不关闭。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let timer: ReturnType&lt;typeof setTimeout&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const clearTimer = () =&gt; clearTimeout(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">watch(() =&gt; [props.show, props.forbidClick], toggleClickable)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; [props.show, props.type, props.message, props.duration],</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    clearTimer()</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (props.show &amp;&amp; props.duration &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        updateShow(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, props.duration)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="onmounted-onunmounted" tabindex="-1">onMounted &amp; onUnmounted <a class="header-anchor" href="#onmounted-onunmounted" aria-label="Permalink to &quot;onMounted &amp; onUnmounted&quot;">​</a></h3><ul><li>在这两个钩子中进行是否可以点击更新。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">onMounted(toggleClickable)</span></span>
<span class="line"><span style="color:#A6ACCD;">onUnmounted(toggleClickable)</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Popup</span></span>
<span class="line"><span style="color:#A6ACCD;">    class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">      bem.b(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      bem.m(props.position),</span></span>
<span class="line"><span style="color:#A6ACCD;">      props.wordBreak === &#39;normal&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ? bem.m(&#39;break-normal&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        : bem.m(props.wordBreak),</span></span>
<span class="line"><span style="color:#A6ACCD;">      !props.icon &amp;&amp; bem.m(props.type),</span></span>
<span class="line"><span style="color:#A6ACCD;">      props.className</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    lockScroll={false}</span></span>
<span class="line"><span style="color:#A6ACCD;">    onClick={onClick}</span></span>
<span class="line"><span style="color:#A6ACCD;">    onClosed={clearTimer}</span></span>
<span class="line"><span style="color:#A6ACCD;">    onUpdate:show={updateShow}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {...pick(props, popupInheritProps)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {renderIcon()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {renderMessage()}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Popup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="lock-click-ts" tabindex="-1">lock-click.ts <a class="header-anchor" href="#lock-click-ts" aria-label="Permalink to &quot;lock-click.ts&quot;">​</a></h2><ul><li>lockCount：表示当前页面被锁定的次数。</li><li>lockClick：接受一个布尔值参数 lock，表示是否需要锁定页面。如果需要锁定页面，则会将 lockCount 加 1，并向文档的 body 元素添加一个类，使得整个页面不可点击。如果需要解除锁定，则会将 lockCount 减 1，并在 lockCount 变为 0 时，从文档的 body 元素中移除该类，使得页面重新可点击。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let lockCount = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function lockClick(lock: boolean) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (lock) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!lockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.body.classList.add(&#39;w-toast--unclickable&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    lockCount++</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (lockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    lockCount--</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!lockCount) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.body.classList.remove(&#39;w-toast--unclickable&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="function-call-tsx" tabindex="-1">function-call.tsx <a class="header-anchor" href="#function-call-tsx" aria-label="Permalink to &quot;function-call.tsx&quot;">​</a></h2><ul><li>类型声明。</li><li>定义了一个 Toast 实例队列 <code>queue</code> 和一个允许同时存在多个 Toast 实例的标志 <code>allowMultiple</code>，并初始化为 false。</li><li><code>parseOptions</code>： 用于解析传入的 options 对象或字符串，将其转为统一的 ToastOptions 类型。</li><li><code>createInstance</code>: 用于创建实例。 <ul><li><a href="./utilsFunction.html#mountcomponent">mountComponent</a>,传入组件，返回组件实例与卸载组件方法。</li><li><a href="./utilsFunction.html#usepopupstate">usePopupState</a>,导出<code>open、state、close、toggle</code>等属性和方法，<code>state</code> 用于传递给<code>WToast</code>控制状态。</li><li><code>onClosed</code>: 如果允许多个存在，则清空队列中这个实例，调用<a href="./vue.html#app-unmount">unmount</a>卸载。</li><li><code>render</code>: 传入<code>onClosed</code>方法及<code>onUpdate:show</code>。</li><li><code>watch</code>：监听<code>message</code>并导出给，用于动态更改。</li><li><code>(getCurrentInstance() as any).render = render</code>： 重写<code>render</code>方法。</li></ul></li><li><code>getInstance</code>：用于调用<code>createInstance</code>并把实例入栈。</li><li><code>showToast</code>：展示 <code>toast</code>。 <ul><li>调用<code>getInstance</code>得到实例。</li><li>调用 <code>open</code>，更新 <code>state</code>，这里的state的更改会传递到组件中，打开组件。</li></ul></li><li><code>closeToast</code>: 关闭<code>toast</code><ul><li>调用<code>queue</code>中实例的<code>close</code>进而更新<code>state</code>。</li></ul></li><li><code>createMethod</code>: 返回一个传入了类型的<code>showToast</code>。</li><li><code>setToastDefaultOptions</code>: 设置默认参数。</li><li><code>resetToastDefaultOptions</code>: 重置默认参数。</li><li><code>allowMultipleToast</code>: 控制是否支持多个<code>toast</code>。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const defaultOptions: ToastOptions = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  icon: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;text&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  message: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  className: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlay: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onClose: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onOpened: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: 2000,</span></span>
<span class="line"><span style="color:#A6ACCD;">  teleport: &#39;body&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconSize: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  iconPrefix: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  position: &#39;middle&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: &#39;w-fade&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  forbidClick: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  loadingType: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayClass: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  overlayStyle: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClick: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  closeOnClickOverlay: false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let queue: ToastWrapperInstance[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">let allowMultiple = false</span></span>
<span class="line"><span style="color:#A6ACCD;">let currentOptions = extend({}, defaultOptions)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// default options of specific type</span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultOptionsMap = new Map&lt;string, ToastOptions&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function parseOptions(message: string | ToastOptions): ToastOptions {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isObject(message)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return message</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return { message }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function createInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { instance, unmount } = mountComponent({</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const message = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      const { open, state, close, toggle } = usePopupState()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const onClosed = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (allowMultiple) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          queue = queue.filter(item =&gt; item !== instance)</span></span>
<span class="line"><span style="color:#A6ACCD;">          unmount()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      const render = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const attrs: Record&lt;string, unknown&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">          onClosed,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;onUpdate:show&#39;: toggle</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &lt;WToast {...state} {...attrs} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // support dynamic modification of message</span></span>
<span class="line"><span style="color:#A6ACCD;">      watch(message, val =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        state.message = val</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // rewrite render function</span></span>
<span class="line"><span style="color:#A6ACCD;">      // eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#A6ACCD;">      ;(getCurrentInstance() as any).render = render</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        open,</span></span>
<span class="line"><span style="color:#A6ACCD;">        close,</span></span>
<span class="line"><span style="color:#A6ACCD;">        message</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return instance as ToastWrapperInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!queue.length || allowMultiple) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const instance = createInstance()</span></span>
<span class="line"><span style="color:#A6ACCD;">    queue.push(instance)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return queue[queue.length - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function showToast(options: string | ToastOptions = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!inBrowser) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {} as ToastWrapperInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const toast = getInstance()</span></span>
<span class="line"><span style="color:#A6ACCD;">  const parsedOptions = parseOptions(options)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  toast.open(</span></span>
<span class="line"><span style="color:#A6ACCD;">    extend(</span></span>
<span class="line"><span style="color:#A6ACCD;">      {},</span></span>
<span class="line"><span style="color:#A6ACCD;">      currentOptions,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">      defaultOptionsMap.get(parsedOptions.type || currentOptions.type!),</span></span>
<span class="line"><span style="color:#A6ACCD;">      parsedOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return toast</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const createMethod = (type: ToastType) =&gt; (options: string | ToastOptions) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  showToast(extend({ type }, parseOptions(options)))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const showLoadingToast = createMethod(&#39;loading&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export const showSuccessToast = createMethod(&#39;success&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export const showFailToast = createMethod(&#39;fail&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const closeToast = (all?: boolean) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (queue.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (all) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.forEach(toast =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        toast.close()</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (!allowMultiple) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue[0].close()</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.shift()?.close()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function setToastDefaultOptions(options: ToastOptions): void</span></span>
<span class="line"><span style="color:#A6ACCD;">export function setToastDefaultOptions(</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: ToastType,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: ToastOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">): void</span></span>
<span class="line"><span style="color:#A6ACCD;">export function setToastDefaultOptions(</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: ToastType | ToastOptions,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options?: ToastOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof type === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultOptionsMap.set(type, options!)</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    extend(currentOptions, type)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const resetToastDefaultOptions = (type?: ToastType) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof type === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultOptionsMap.delete(type)</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    currentOptions = extend({}, defaultOptions)</span></span>
<span class="line"><span style="color:#A6ACCD;">    defaultOptionsMap.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const allowMultipleToast = (value = true) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  allowMultiple = value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-font-size-md</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-white</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-loading-icon-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-white</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-line-height-md</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-radius-lg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-icon-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-text-min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">96px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-text-padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-xs</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-sm</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-default-padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-md</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-default-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">88px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-default-min-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">88px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-position-top-distance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-toast-position-bottom-distance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-toast</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-duration-fast</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// hack for avoid max-width when use left &amp; fixed</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-default-width</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-max-width</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">min-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-default-min-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-default-padding</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-font-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-line-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// allow newline character</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pre-wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">word-break</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> break-all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-background</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-radius</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--break</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-normal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">word-break</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">word-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">-word</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">word-break</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">word-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> break-word</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--unclickable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// lock scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> not-allowed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// should not add pointer-events: none directly to body tag</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// that will cause unexpected tap-highlight-color in mobile safari</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--text</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fit-content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-text-min-width</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">min-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-text-padding</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-toast__text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--top</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-position-top-distance</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">--bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-position-bottom-distance</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-icon-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__loading</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-base</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-toast-loading-icon-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-padding-xs</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,31),e=[o];function t(c,r,C,A,i,D){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
