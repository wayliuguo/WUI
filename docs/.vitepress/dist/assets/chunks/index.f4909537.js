import{m as te,ak as Ie,a2 as ke,G as m,d as $,l as Y,h,w as x,p as F,X as ne,al as oe,y as se,am as H,an as pe,b as G,T as ae,ao as ce,ap as le,E as j,aq as Pe,ar as Te,F as Be,S as xe}from"./framework.55c6565f.js";function T(e,t,n,s){return t&&(e+=`-${t}`),n&&(e+=`__${n}`),s&&(e+=`--${s}`),e}function Ee(e){return{b:(o="")=>T(e,o,"",""),e:(o="")=>o?T(e,"",o,""):"",m:(o="")=>o?T(e,"","",o):"",be:(o="",r="")=>o&&r?T(e,o,r,""):"",bm:(o="",r="")=>o&&r?T(e,o,"",r):"",em:(o="",r="")=>o&&r?T(e,"",o,r):"",bem:(o="",r="",u="")=>o&&r&&u?T(e,o,r,u):"",is:(o,r)=>r?`is-${o}`:""}}function L(e){const t=`w-${e}`;return Ee(t)}const E=e=>e!=null,ie=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),re=e=>e!==null&&typeof e=="object",W=e=>typeof e=="function",ze=e=>re(e)&&W(e.then)&&W(e.catch);function $e(){}const P=Object.assign;function Le(e,t,n){return t.reduce((s,a)=>((!n||e[a]!==void 0)&&(s[a]=e[a]),s),{})}const v=[Number,String],O=e=>({type:String,default:e}),Lt=e=>({type:v,default:e}),B={type:Boolean,default:!0},_t=e=>({type:e,required:!0}),Dt=()=>({type:Array,default:()=>[]}),N=null,_e=e=>({type:Number,default:e});function w(e){if(E(e))return ie(e)?`${e}px`:String(e)}function De(e){if(E(e)){if(Array.isArray(e))return{width:w(e[0]),height:w(e[1])};const t=w(e);return{width:t,height:t}}}function Re(e){const t={};return e!==void 0&&(t.zIndex=+e),t}function _(e){return e.install=t=>{const{name:n}=e;n&&t.component(n,e)},e}const Ae=e=>e.stopPropagation();function ue(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Ae(e)}const de="w-hairline",Rt=`${de}--surround`,At=`${de}--top-bottom`,Me="w-haptics-feedback";function Ne(e,{args:t=[],done:n,canceled:s}){if(e){const a=e.apply(null,t);ze(a)?a.then(l=>{l?n():s&&s()}).catch($e):a?n():s&&s()}else n()}function fe(e){const t=te();t&&P(t.proxy,e)}function Ye(){const e=ke({show:!1}),t=a=>{e.show=a},n=a=>{P(e,a,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return fe({open:n,close:s,toggle:t}),{open:n,close:s,state:e,toggle:t}}function je(e){const t=Ie(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const I=L("loading"),Ue="w-loading",Xe=Array(12).fill(null).map((e,t)=>m("i",{class:[I.e("line"),I.em("line",t+1)]},null)),Fe=m("svg",{class:I.e("circular"),viewBox:"25 25 50 50"},[m("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),He={size:v,type:O("circular"),color:String,vertical:Boolean,textSize:v,textColor:String},Ke=$({name:Ue,props:He,setup(e,{slots:t}){const n=Y(()=>P({color:e.color},De(e.size))),s=()=>{const l=e.type==="spinner"?Xe:Fe;return m("span",{class:[I.e("spinner"),I.em("spinner",e.type)],style:n.value},[t.icon?t.icon():l])},a=()=>{if(t.default)return m("span",{class:I.e("text"),style:{fontSize:w(e.textSize),color:e.textColor??e.color}},[t.default()])};return()=>{const{type:l,vertical:i}=e;return m("div",{class:[I.b(),I.m(l),I.is("vertical",i)],"aria-live":"polite","aria-busy":!0},[s(),a()])}}}),qe=_(Ke),Ve={show:Boolean,zIndex:v,overlay:B,duration:v,teleport:[String,Object],lockScroll:B,lazyRender:B,beforeClose:Function,overlayStyle:Object,overlayClass:N,transitionAppear:Boolean,closeOnClickOverlay:B};function me(e){const t=h(!1);return x(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const K=typeof window<"u",Ze=/scroll|auto|overlay/i,Ge=K?window:void 0;function We(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Je(e,t=Ge){let n=e;for(;n&&n!==t&&We(n);){const{overflowY:s}=window.getComputedStyle(n);if(Ze.test(s))return n;n=n.parentNode}return t}function ye(e){let t;F(()=>{e(),ne(()=>{t=!0})}),oe(()=>{t&&e()})}function ve(e,t,n={}){if(!K)return;const{target:s=window,passive:a=!1,capture:l=!1}=n;let i=!1,c;const f=u=>{if(i)return;const d=G(u);d&&!c&&(d.addEventListener(e,t,{capture:l,passive:a}),c=!0)},o=u=>{if(i)return;const d=G(u);d&&c&&(d.removeEventListener(e,t,l),c=!1)};se(()=>o(s)),H(()=>o(s)),ye(()=>f(s));let r;return pe(s)&&(r=x(s,(u,d)=>{o(d),f(u)})),()=>{r==null||r(),o(s),i=!0}}const Qe="w-overlay",et=L("overlay"),tt={show:Boolean,zIndex:v,duration:v,className:N,lockScroll:B,lazyRender:B,customStyle:Object},nt=$({name:Qe,props:tt,setup(e,{slots:t}){const n=h(),s=me(()=>e.show||!e.lazyRender),a=i=>{e.lockScroll&&ue(i,!0)},l=s(()=>{var c;const i=P(Re(e.zIndex),e.customStyle);return E(e.duration)&&(i.animationDuration=`${e.duration}s`),ce(m("div",{ref:n,style:i,class:[et.b(),e.className]},[(c=t.default)==null?void 0:c.call(t)]),[[le,e.show]])});return ve("touchmove",a,{target:n}),()=>m(ae,{name:"w-fade",appear:!0},{default:l})}}),ot=_(nt),st={dot:Boolean,max:v,tag:O("div"),color:String,offset:Array,content:v,showZero:B,position:O("top-right")},at="w-badge",D=L("badge"),ct=$({name:at,props:st,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:c,showZero:f}=e;return E(c)&&c!==""&&(f||c!==0&&c!=="0")},s=()=>{const{dot:c,max:f,content:o}=e;if(!c&&n())return t.content?t.content():E(f)&&ie(o)&&+o>+f?`${f}+`:o},a=c=>c.startsWith("-")?c.replace("-",""):`-${c}`,l=Y(()=>{const c={background:e.color};if(e.offset){const[f,o]=e.offset,{position:r}=e,[u,d]=r.split("-");t.default?(typeof o=="number"?c[u]=w(u==="top"?o:-o):c[u]=u==="top"?w(o):a(o),typeof f=="number"?c[d]=w(d==="left"?f:-f):c[d]=d==="left"?w(f):a(f)):(c.marginTop=w(o),c.marginLeft=w(f))}return c}),i=()=>{if(n()||e.dot)return m("div",{class:[D.b(),D.m(e.position),e.dot&&D.m("dot"),!!t.default&&D.m("fixed")],style:l.value},[s()])};return()=>{if(t.default){const{tag:c}=e;return m(c,{class:D.e("wrapper")},{default:()=>[t.default(),i()]})}return i()}}}),lt=_(ct),J=L("icon"),it="w-icon",rt=e=>e==null?void 0:e.includes("/"),ut={dot:Boolean,tag:O("i"),name:String,size:v,badge:v,color:String,badgeProps:Object,classPrefix:String},ge=$({name:it,props:ut,setup(e,{slots:t}){const n=Y(()=>e.classPrefix||J.b());return()=>{const{tag:s,dot:a,name:l,size:i,badge:c,color:f}=e,o=rt(l);return m(lt,j({dot:a,tag:s,class:[n.value,o?"":`${n.value}-${l}`],style:{color:f,fontSize:w(i)},content:c},e.badgeProps),{default:()=>{var r;return[(r=t.default)==null?void 0:r.call(t),o&&m("img",{class:J.e("image"),src:l},null)]}})}}});function dt(e,t){return e>t?"horizontal":t>e?"vertical":""}function ft(){const e=h(0),t=h(0),n=h(0),s=h(0),a=h(0),l=h(0),i=h(""),c=()=>i.value==="vertical",f=()=>i.value==="horizontal",o=()=>{n.value=0,s.value=0,a.value=0,l.value=0,i.value=""};return{move:d=>{const g=d.touches[0];n.value=(g.clientX<0?0:g.clientX)-e.value,s.value=g.clientY-t.value,a.value=Math.abs(n.value),l.value=Math.abs(s.value);const C=10;(!i.value||a.value<C&&l.value<C)&&(i.value=dt(a.value,l.value))},start:d=>{o(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:o,startX:e,startY:t,deltaX:n,deltaY:s,offsetX:a,offsetY:l,direction:i,isVertical:c,isHorizontal:f}}let R=0;const Q="van-overflow-hidden";function mt(e,t){const n=ft(),s="01",a="10",l=r=>{n.move(r);const u=n.deltaY.value>0?a:s,d=Je(r.target,e.value),{scrollHeight:g,offsetHeight:C,scrollTop:z}=d;let S="11";z===0?S=C>=g?"00":"01":z+C>=g&&(S="10"),S!=="11"&&n.isVertical()&&!(parseInt(S,2)&parseInt(u,2))&&ue(r,!0)},i=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",l,{passive:!1}),R||document.body.classList.add(Q),R++},c=()=>{R&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",l),R--,R||document.body.classList.remove(Q))},f=()=>t()&&i(),o=()=>t()&&c();ye(f),H(o),Pe(o),x(t,r=>{r?i():c()})}const yt=Symbol();let vt=2e3;const gt=()=>++vt,ht="w-popup",A=L("popup"),wt=P({},Ve,{round:Boolean,position:O("center"),closeIcon:O("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:O("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),bt=$({name:ht,inheritAttrs:!1,props:wt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:s}){let a,l;const i=h(),c=h(),f=me(()=>e.show||!e.lazyRender),o=Y(()=>{const y={zIndex:i.value};if(E(e.duration)){const k=e.position==="center"?"animationDuration":"transitionDuration";y[k]=`${e.duration}s`}return y}),r=()=>{a||(a=!0,i.value=e.zIndex!==void 0?+e.zIndex:gt(),t("open"))},u=()=>{a&&Ne(e.beforeClose,{done(){a=!1,t("close"),t("update:show",!1)}})},d=y=>{t("clickOverlay",y),e.closeOnClickOverlay&&u()},g=()=>{if(e.overlay)return m(ot,{show:e.show,class:e.overlayClass,zIndex:i.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:d},{default:s["overlay-content"]})},C=y=>{t("clickCloseIcon",y),u()},z=()=>{if(e.closeable)return m(ge,{role:"button",tabindex:0,name:e.closeIcon,class:[A.e("close-icon"),A.em("close-icon",e.closeIconPosition),Me],classPrefix:e.iconPrefix,onClick:C},null)};let S;const be=()=>{S&&clearTimeout(S),S=setTimeout(()=>{t("opened")})},Oe=()=>t("closed"),Ce=y=>t("keydown",y),Se=f(()=>{var Z;const{round:y,position:k,safeAreaInsetTop:U,safeAreaInsetBottom:X}=e;return ce(m("div",j({ref:c,style:o.value,role:"dialog",tabindex:0,class:[A.b(),y&&A.m("round"),A.m(`${k}`),U&&"w-safe-area-top",X&&"w-safe-area-bottom"],onKeydown:Ce},n),[(Z=s.default)==null?void 0:Z.call(s),z()]),[[le,e.show]])}),V=()=>{const{position:y,transition:k,transitionAppear:U}=e,X=y==="center"?"w-fade":`w-popup-slide-${y}`;return m(ae,{name:k||X,appear:U,onAfterEnter:be,onAfterLeave:Oe},{default:Se})};return x(()=>e.show,y=>{y&&!a&&(r(),n.tabindex===0&&ne(()=>{var k;(k=c.value)==null||k.focus()})),!y&&a&&(a=!1,t("close"))}),fe({popupRef:c}),mt(c,()=>e.show&&e.lockScroll),ve("popstate",()=>{e.closeOnPopstate&&(u(),l=!1)}),F(()=>{e.show&&r()}),oe(()=>{l&&(t("update:show",!0),l=!1)}),H(()=>{e.show&&e.teleport&&(u(),l=!0)}),xe(yt,()=>e.show),()=>e.teleport?m(Te,{to:e.teleport},{default:()=>[g(),V()]}):m(Be,null,[g(),V()])}}),Ot=_(bt),Ct=_(ge);let M=0;function St(e){e?(M||document.body.classList.add("w-toast--unclickable"),M++):M&&(M--,M||document.body.classList.remove("w-toast--unclickable"))}const It="w-toast",b=L("toast"),kt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],pt={icon:String,show:Boolean,type:O("text"),overlay:Boolean,message:v,iconSize:v,duration:_e(2e3),position:O("middle"),teleport:[String,Object],wordBreak:String,className:N,iconPrefix:String,transition:O("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:N,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},he=$({name:It,props:pt,emits:["update:show"],setup(e,{emit:t,slots:n}){let s,a=!1;const l=()=>{const u=e.show&&e.forbidClick;a!==u&&(a=u,St(a))},i=u=>t("update:show",u),c=()=>{e.closeOnClick&&i(!1)},f=()=>clearTimeout(s),o=()=>{const{icon:u,type:d,iconSize:g,iconPrefix:C,loadingType:z}=e;if(u||d==="success"||d==="fail")return m(Ct,{name:u||d,size:g,class:b.e("icon"),classPrefix:C},null);if(d==="loading")return m(qe,{class:b.m("loading"),size:g,type:z},null)},r=()=>{const{type:u,message:d}=e;if(n.message)return m("div",{class:b.m("text")},[n.message()]);if(E(d)&&d!=="")return u==="html"?m("div",{key:0,class:b.m("text"),innerHTML:String(d)},null):m("div",{class:b.m("text")},[d])};return x(()=>[e.show,e.forbidClick],l),x(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(s=setTimeout(()=>{i(!1)},e.duration))}),F(l),se(l),()=>m(Ot,j({class:[b.b(),b.m(e.position),e.wordBreak==="normal"?b.m("break-normal"):b.m(e.wordBreak),!e.icon&&b.m(e.type),e.className],lockScroll:!1,onClick:c,onClosed:f,"onUpdate:show":i},Le(e,kt)),{default:()=>[o(),r()]})}}),Pt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let p=[],Tt=!1,ee=P({},Pt);const Bt=new Map;function we(e){return re(e)?e:{message:e}}function xt(){const{instance:e,unmount:t}=je({setup(){const n=h(""),{open:s,state:a,close:l,toggle:i}=Ye(),c=()=>{},f=()=>m(he,j(a,{onClosed:c,"onUpdate:show":i}),null);return x(n,o=>{a.message=o}),te().render=f,{open:s,close:l,message:n}}});return e}function Et(){if(!p.length||Tt){const e=xt();p.push(e)}return p[p.length-1]}function zt(e={}){if(!K)return{};const t=Et(),n=we(e);return t.open(P({},ee,Bt.get(n.type||ee.type),n)),t}const q=e=>t=>zt(P({type:e},we(t))),Mt=q("loading"),Nt=q("success"),Yt=q("fail"),jt=e=>{p.length&&(e?(p.forEach(t=>{t.close()}),p=[]):p[0].close())},Ut=_(he);export{Rt as B,Ct as I,qe as L,ot as O,Ot as P,Ut as T,Mt as a,Nt as b,Yt as c,jt as d,L as e,At as f,P as g,Lt as h,E as i,Dt as j,fe as k,_t as l,O as m,v as n,w as o,ue as p,Le as q,lt as r,zt as s,B as t,N as u,_ as w};
