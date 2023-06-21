import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4015372c.js";const F=JSON.parse('{"title":"Icon","description":"","frontmatter":{},"headers":[],"relativePath":"guide/notes/icon.md"}'),p={name:"guide/notes/icon.md"},o=l(`<h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h1><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const iconProps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  dot: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">  tag: makeStringProp&lt;keyof HTMLElementTagNameMap&gt;(&#39;i&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  size: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  badge: numericProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  badgeProps: Object as PropType&lt;Partial&lt;BadgeProps&gt;&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  classPrefix: String</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export type IconProps = ExtractPropTypes&lt;typeof iconProps&gt;</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><h3 id="isimage" tabindex="-1">isImage <a class="header-anchor" href="#isimage" aria-label="Permalink to &quot;isImage&quot;">​</a></h3><ul><li>判断是否图片链接</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const isImage = (name?: string) =&gt; name?.includes(&#39;/&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const isImageIcon = isImage(name)</span></span></code></pre></div><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">return (</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Badge</span></span>
<span class="line"><span style="color:#A6ACCD;">    dot={dot}</span></span>
<span class="line"><span style="color:#A6ACCD;">    tag={tag}</span></span>
<span class="line"><span style="color:#A6ACCD;">    class={[</span></span>
<span class="line"><span style="color:#A6ACCD;">      classPrefix.value,</span></span>
<span class="line"><span style="color:#A6ACCD;">      isImageIcon ? &#39;&#39; : \`\${classPrefix.value}-\${name}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    style={{</span></span>
<span class="line"><span style="color:#A6ACCD;">      color,</span></span>
<span class="line"><span style="color:#A6ACCD;">      fontSize: addUnit(size)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    content={badge}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {...props.badgeProps}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {slots.default?.()}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {isImageIcon &amp;&amp; &lt;img class={bem.e(&#39;image&#39;)} src={name} /&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Badge&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h2><ul><li><a href="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&amp;manage_type=myprojects&amp;projectId=2302170" target="_blank" rel="noreferrer">iconfont</a></li><li>common.less 中的数据来源与下载后的iconfont.css</li><li>encode-woff2.less 文件使用<a href="https://transfonter.org/" target="_blank" rel="noreferrer">网站</a>，开启 Base64 encode 把iconfont.tff 文件转换而来。</li></ul><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./common.less</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./encode-woff2.less</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@font-face</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w-icon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* Project id 2302170 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//at.alicdn.com/t/c/font_2302170_i11uosdpz6q.woff2?t=1682390553114</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">url(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//at.alicdn.com/t/c/font_2302170_i11uosdpz6q.woff?t=1682390553114</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">w-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&amp;</span><span style="color:#C792EA;">__image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">object-fit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> contain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,12),e=[o];function t(c,r,i,D,C,y){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
