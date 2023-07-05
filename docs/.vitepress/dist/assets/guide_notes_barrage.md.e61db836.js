import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ff144929.js";const d=JSON.parse('{"title":"Barrage","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/barrage.md"}'),p={name:"guide/notes/barrage.md"},e=l(`<h1 id="barrage" tabindex="-1">Barrage <a class="header-anchor" href="#barrage" aria-label="Permalink to &quot;Barrage&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const barrageProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  modelValue: makeArrayProp&lt;BarrageItem&gt;(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 自动播放</span></span>
<span class="line"><span style="color:#A6ACCD;">  autoPlay: truthProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕文字行数</span></span>
<span class="line"><span style="color:#A6ACCD;">  rows: makeNumericProp(4),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕文字区域顶部间距，单位 px</span></span>
<span class="line"><span style="color:#A6ACCD;">  top: makeNumericProp(10),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕文字划过文字的时间</span></span>
<span class="line"><span style="color:#A6ACCD;">  duration: makeNumericProp(4000),</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕动画延时，单位 ms</span></span>
<span class="line"><span style="color:#A6ACCD;">  delay: makeNumberProp(300)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type BarrageProps = ExtractPropTypes&lt;typeof barrageProps&gt;</span></span></code></pre></div><h2 id="emits" tabindex="-1">emits <a class="header-anchor" href="#emits" aria-label="Permalink to &quot;emits&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">emits: [&#39;update:modelValue&#39;]</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// wrapper ref</span></span>
<span class="line"><span style="color:#A6ACCD;">const barrageWrapper = ref&lt;HTMLDivElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;">// 弹幕类名</span></span>
<span class="line"><span style="color:#A6ACCD;">const className = bem.e(&#39;item&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 弹幕数量</span></span>
<span class="line"><span style="color:#A6ACCD;">const total = ref&lt;number&gt;(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 弹幕数组</span></span>
<span class="line"><span style="color:#A6ACCD;">const barrageItems: HTMLSpanElement[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否初始化弹幕</span></span>
<span class="line"><span style="color:#A6ACCD;">const isInitBarrage = ref(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否正在播放</span></span>
<span class="line"><span style="color:#A6ACCD;">const isPlay = ref(props.autoPlay)</span></span></code></pre></div><h2 id="onmounted" tabindex="-1">onMounted <a class="header-anchor" href="#onmounted" aria-label="Permalink to &quot;onMounted&quot;">​</a></h2><ul><li>挂载完毕后先计算 wrapper 的宽度，渲染后再更新弹幕</li><li>wrapper 上挂载 --move-distance 属性，可以在css中var(--move-distance)使用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const rootStyle = ref&lt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;--move-distance&#39;?: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}&gt;({})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onMounted(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  rootStyle.value[</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;--move-distance&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ] = \`-\${barrageWrapper.value?.offsetWidth}px\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  await nextTick()</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateBarrages(props.modelValue, [])</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><ul><li>通过 props.modelValue.slice() 复制 props.modelValue, 创建响应式依赖</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; props.modelValue.slice(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (newValue, oldValue) =&gt; updateBarrages(newValue ?? [], oldValue ?? []),</span></span>
<span class="line"><span style="color:#A6ACCD;">  { deep: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="updatebarrages" tabindex="-1">updateBarrages <a class="header-anchor" href="#updatebarrages" aria-label="Permalink to &quot;updateBarrages&quot;">​</a></h2><ul><li>更新弹幕，移除已经消失的弹幕，新建新增的弹幕。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const updateBarrages = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  newValue: BarrageItem[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  oldValue: BarrageItem[]</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 构建旧数据的map结构 item.id =&gt; item</span></span>
<span class="line"><span style="color:#A6ACCD;">  // map 的作用是找出需要移除的弹幕item</span></span>
<span class="line"><span style="color:#A6ACCD;">  const map = new Map(oldValue.map(item =&gt; [item.id, item]))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 如果新数据中依然存在item.id，则map delete 该 item</span></span>
<span class="line"><span style="color:#A6ACCD;">  newValue.forEach((item, i) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (map.has(item.id)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      map.delete(item.id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      appendBarrageItem(item, i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 找出需要移除的弹幕item</span></span>
<span class="line"><span style="color:#A6ACCD;">  map.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const index = barrageItems.findIndex(</span></span>
<span class="line"><span style="color:#A6ACCD;">      span =&gt; span.dataset.id === String(item.id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (index &gt; -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      barrageItems[index].remove()</span></span>
<span class="line"><span style="color:#A6ACCD;">      barrageItems.splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  isInitBarrage.value = false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="appendbarrageitem" tabindex="-1">appendBarrageItem <a class="header-anchor" href="#appendbarrageitem" aria-label="Permalink to &quot;appendBarrageItem&quot;">​</a></h2><ul><li>调用 <code>createBarrageItem</code> 新建弹幕并 <code>append</code> 到弹幕区。</li><li>设置弹幕样式，监听动画结束并清除结束的弹幕数据。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const appendBarrageItem = ({ id, text }: BarrageItem, i: number) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = createBarrageItem(</span></span>
<span class="line"><span style="color:#A6ACCD;">    text,</span></span>
<span class="line"><span style="color:#A6ACCD;">    isInitBarrage.value ? i * props.delay : undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!props.autoPlay &amp;&amp; isPlay.value === false) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    item.style.animationPlayState = &#39;paused&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 往 wrapper 渲染 弹幕</span></span>
<span class="line"><span style="color:#A6ACCD;">  barrageWrapper.value?.append(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">  total.value++</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 弹幕 top 计算</span></span>
<span class="line"><span style="color:#A6ACCD;">  const top =</span></span>
<span class="line"><span style="color:#A6ACCD;">    ((total.value - 1) % +props.rows) * item.offsetHeight + +props.top</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.style.top = \`\${top}px\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.dataset.id = String(id)</span></span>
<span class="line"><span style="color:#A6ACCD;">  barrageItems.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 监听动画结束事件</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.addEventListener(&#39;animationend&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    emit(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;update:modelValue&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      [...props.modelValue].filter(v =&gt; String(v.id) !== item.dataset.id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="createbarrageitem" tabindex="-1">createBarrageItem <a class="header-anchor" href="#createbarrageitem" aria-label="Permalink to &quot;createBarrageItem&quot;">​</a></h2><ul><li>新建弹幕</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const createBarrageItem = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  text: string | number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  delay: number = props.delay</span></span>
<span class="line"><span style="color:#A6ACCD;">) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const item = document.createElement(&#39;span&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.className = className</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.innerText = String(text)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  item.style.animationDuration = \`\${props.duration}ms\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.style.animationDelay = \`\${delay}ms\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.style.animationName = &#39;w-barrage&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  item.style.animationTimingFunction = &#39;linear&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return item</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="useexpose" tabindex="-1">useExpose <a class="header-anchor" href="#useexpose" aria-label="Permalink to &quot;useExpose&quot;">​</a></h2><ul><li>导出<code>play</code>与<code>pause</code>给组件实例。</li><li>通过控制样式的<code>animationPlayState</code>为<code>running</code>或<code>paused</code>控制播放与暂停。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 播放</span></span>
<span class="line"><span style="color:#A6ACCD;">const play = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  isPlay.value = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  barrageItems.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    item.style.animationPlayState = &#39;running&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 暂停</span></span>
<span class="line"><span style="color:#A6ACCD;">const pause = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  isPlay.value = false</span></span>
<span class="line"><span style="color:#A6ACCD;">  barrageItems.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    item.style.animationPlayState = &#39;paused&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 导出全局</span></span>
<span class="line"><span style="color:#A6ACCD;">useExpose&lt;BarrageExpose&gt;({</span></span>
<span class="line"><span style="color:#A6ACCD;">  play,</span></span>
<span class="line"><span style="color:#A6ACCD;">  pause</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return () =&gt; (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class={bem.b()} ref={barrageWrapper} style={rootStyle.value}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><ul><li><code>@keyframes w-barrage</code> 定义弹幕的动画，开始是<code>translateX(110%)</code>, 结束是<code>translateX(var(--move-distance)</code>， 其中<code>move-distance</code> 是弹幕视口的宽度。</li></ul><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-barrage-font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-barrage-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-barrage-font</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">w-barrage-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-white</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-barrage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-barrage-space</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.75</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-barrage-font-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-barrage-font</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--w-barrage-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> #000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> #000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> #000000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">-1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> #000000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">user-select</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">will-change</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">110%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">keyframes </span><span style="color:#FFCB6B;">w-barrage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  from </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">110%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  to </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--move-distance</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,31),o=[e];function t(c,r,C,i,A,y){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
