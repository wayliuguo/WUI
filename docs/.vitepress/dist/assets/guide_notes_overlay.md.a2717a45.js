import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ff144929.js";const F=JSON.parse('{"title":"Overlay","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/overlay.md"}'),p={name:"guide/notes/overlay.md"},e=l(`<h1 id="overlay" tabindex="-1">Overlay <a class="header-anchor" href="#overlay" aria-label="Permalink to &quot;Overlay&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const overlayProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否展示遮罩层</span></span>
<span class="line"><span style="color:#A6ACCD;">  show: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // z-index 层级 default: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  zIndex: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // duration 动画时长，单位秒，设置为 0 可以禁用动画 default: 0.3</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自定义类名: 自定义类名</span></span>
<span class="line"><span style="color:#A6ACCD;">  className: unknownProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 default: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  lockScroll: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 是否在显示时才渲染节点 default: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  lazyRender: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自定义样式</span></span>
<span class="line"><span style="color:#A6ACCD;">  customStyle: Object as PropType&lt;CSSProperties&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type OverlayProps = ExtractPropTypes&lt;typeof overlayProps&gt;</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="uselazyrender-renderoverlay" tabindex="-1">useLazyRender &amp; renderOverlay <a class="header-anchor" href="#uselazyrender-renderoverlay" aria-label="Permalink to &quot;useLazyRender &amp; renderOverlay&quot;">​</a></h2><ul><li><a href="./hooks.html#use-lazy-render-ts">useLazyRender</a>返回一个函数。</li><li>这个函数接收一个<code>JSX.Element</code>入参的函数，这个函数根据<code>props.show</code>执行。</li><li><a href="./utilsFunction.html#getzindexstyle">getZIndexStyle</a>返回层级。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const lazyRender = useLazyRender(() =&gt; props.show || !props.lazyRender)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const renderOverlay = lazyRender(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const style: CSSProperties = extend(</span></span>
<span class="line"><span style="color:#A6ACCD;">    getZIndexStyle(props.zIndex),</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.customStyle</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isDef(props.duration)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    style.animationDuration = \`\${props.duration}s\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-show={props.show}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref={root}</span></span>
<span class="line"><span style="color:#A6ACCD;">      style={style}</span></span>
<span class="line"><span style="color:#A6ACCD;">      class={[bem.b(), props.className]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="ontouchmove-useeventlistener" tabindex="-1">onTouchMove &amp; useEventListener <a class="header-anchor" href="#ontouchmove-useeventlistener" aria-label="Permalink to &quot;onTouchMove &amp; useEventListener&quot;">​</a></h2><ul><li><a href="./hooks.html#useeventlistener">useEventListener</a>,监听<code>root</code>的<code>touchmove</code>事件。</li><li>该事件对应的执行函数，如果配置了<code>lockScroll</code>,<a href="./utilsFunction.html#stoppropagation-preventdefault">preventDefault</a>不执行默认行为。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const root = ref&lt;HTMLElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const onTouchMove = (event: TouchEvent) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (props.lockScroll) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    preventDefault(event, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">useEventListener(&#39;touchmove&#39;, onTouchMove, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  target: root</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><ul><li>使用<code>Transition</code>结合<code>name</code>属性控制渐变。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Transition v-slots={{ default: renderOverlay }} name=&quot;w-fade&quot; appear /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// overlay.less</span></span>
<span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-overlay-z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-overlay-background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-overlay</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-overlay-z-index</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-overlay-background</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// animation.less</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">keyframes </span><span style="color:#FFCB6B;">w-fade-in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  from </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  to </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">keyframes </span><span style="color:#FFCB6B;">w-fade-out</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  from </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  to </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,15),o=[e];function t(c,r,C,y,i,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
