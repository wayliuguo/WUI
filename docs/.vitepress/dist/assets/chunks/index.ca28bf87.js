import{i as y,p as j,X as oe,a4 as se,y as ae,a5 as V,a6 as Ee,w as B,b as J,m as ce,a7 as Be,a2 as xe,G as m,d as $,l as H,T as ie,a8 as le,a9 as re,D as ze,E as U,aa as $e,ab as Le,F as De,S as Ae}from"./framework.ff144929.js";function T(e,t,n,s){return t&&(e+=`-${t}`),n&&(e+=`__${n}`),s&&(e+=`--${s}`),e}function Re(e){return{b:(o="")=>T(e,o,"",""),e:(o="")=>o?T(e,"",o,""):"",m:(o="")=>o?T(e,"","",o):"",be:(o="",r="")=>o&&r?T(e,o,r,""):"",bm:(o="",r="")=>o&&r?T(e,o,"",r):"",em:(o="",r="")=>o&&r?T(e,"",o,r):"",bem:(o="",r="",u="")=>o&&r&&u?T(e,o,r,u):"",is:(o,r)=>r?`is-${o}`:""}}function L(e){const t=`w-${e}`;return Re(t)}const x=e=>e!=null,ue=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),de=e=>e!==null&&typeof e=="object",Q=e=>typeof e=="function",_e=e=>de(e)&&Q(e.then)&&Q(e.catch);function Me(){}const k=Object.assign;function Ne(e,t,n){return t.reduce((s,a)=>((!n||e[a]!==void 0)&&(s[a]=e[a]),s),{})}const h=[Number,String],O=e=>({type:String,default:e}),_t=e=>({type:h,default:e}),E={type:Boolean,default:!0},Mt=e=>({type:e,required:!0}),Nt=()=>({type:Array,default:()=>[]}),Y=null,Ye=e=>({type:Number,default:e});function g(e){if(x(e))return ue(e)?`${e}px`:String(e)}function je(e){if(x(e)){if(Array.isArray(e))return{width:g(e[0]),height:g(e[1])};const t=g(e);return{width:t,height:t}}}function He(e){const t={};return e!==void 0&&(t.zIndex=+e),t}function D(e){return e.install=t=>{const{name:n}=e;n&&t.component(n,e)},e}const X=typeof window<"u",Ue=/scroll|auto|overlay/i,fe=X?window:void 0;function Xe(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function me(e,t=fe){let n=e;for(;n&&n!==t&&Xe(n);){const{overflowY:s}=window.getComputedStyle(n);if(Ue.test(s))return n;n=n.parentNode}return t}function Yt(e,t=fe){const n=y();return j(()=>{e.value&&(n.value=me(e.value,t))}),n}function ve(e){let t;j(()=>{e(),oe(()=>{t=!0})}),se(()=>{t&&e()})}function ye(e,t,n={}){if(!X)return;const{target:s=window,passive:a=!1,capture:i=!1}=n;let l=!1,c;const f=u=>{if(l)return;const d=J(u);d&&!c&&(d.addEventListener(e,t,{capture:i,passive:a}),c=!0)},o=u=>{if(l)return;const d=J(u);d&&c&&(d.removeEventListener(e,t,i),c=!1)};ae(()=>o(s)),V(()=>o(s)),ve(()=>f(s));let r;return Ee(s)&&(r=B(s,(u,d)=>{o(d),f(u)})),()=>{r==null||r(),o(s),l=!0}}let N,G;function Fe(){if(!N&&(N=y(0),G=y(0),X)){const e=()=>{N.value=window.innerWidth,G.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:N,height:G}}const Ke=e=>e.stopPropagation();function he(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Ke(e)}const{width:jt,height:Ht}=Fe(),we="w-hairline",Ut=`${we}--surround`,Xt=`${we}--top-bottom`,Ge="w-haptics-feedback";function Ve(e,{args:t=[],done:n,canceled:s}){if(e){const a=e.apply(null,t);_e(a)?a.then(i=>{i?n():s&&s()}).catch(Me):a?n():s&&s()}else n()}function ge(e){const t=ce();t&&k(t.proxy,e)}function We(){const e=xe({show:!1}),t=a=>{e.show=a},n=a=>{k(e,a,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return ge({open:n,close:s,toggle:t}),{open:n,close:s,state:e,toggle:t}}function Ze(e){const t=Be(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const S=L("loading"),qe="w-loading",Je=Array(12).fill(null).map((e,t)=>m("i",{class:[S.e("line"),S.em("line",t+1)]},null)),Qe=m("svg",{class:S.e("circular"),viewBox:"25 25 50 50"},[m("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),et={size:h,type:O("circular"),color:String,vertical:Boolean,textSize:h,textColor:String},tt=$({name:qe,props:et,setup(e,{slots:t}){const n=H(()=>k({color:e.color},je(e.size))),s=()=>{const i=e.type==="spinner"?Je:Qe;return m("span",{class:[S.e("spinner"),S.em("spinner",e.type)],style:n.value},[t.icon?t.icon():i])},a=()=>{if(t.default)return m("span",{class:S.e("text"),style:{fontSize:g(e.textSize),color:e.textColor??e.color}},[t.default()])};return()=>{const{type:i,vertical:l}=e;return m("div",{class:[S.b(),S.m(i),S.is("vertical",l)],"aria-live":"polite","aria-busy":!0},[s(),a()])}}}),nt=D(tt),be={show:Boolean,zIndex:h,overlay:E,duration:h,teleport:[String,Object],lockScroll:E,lazyRender:E,beforeClose:Function,overlayStyle:Object,overlayClass:Y,transitionAppear:Boolean,closeOnClickOverlay:E},Ft=Object.keys(be);function Oe(e){const t=y(!1);return B(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const ot="w-overlay",st=L("overlay"),at={show:Boolean,zIndex:h,duration:h,className:Y,lockScroll:E,lazyRender:E,customStyle:Object},ct=$({name:ot,props:at,setup(e,{slots:t}){const n=y(),s=Oe(()=>e.show||!e.lazyRender),a=l=>{e.lockScroll&&he(l,!0)},i=s(()=>{var c;const l=k(He(e.zIndex),e.customStyle);return x(e.duration)&&(l.animationDuration=`${e.duration}s`),le(m("div",{ref:n,style:l,class:[st.b(),e.className]},[(c=t.default)==null?void 0:c.call(t)]),[[re,e.show]])});return ye("touchmove",a,{target:n}),()=>m(ie,{name:"w-fade",appear:!0},{default:i})}}),it=D(ct),lt={dot:Boolean,max:h,tag:O("div"),color:String,offset:Array,content:h,showZero:E,position:O("top-right")},rt="w-badge",A=L("badge"),ut=$({name:rt,props:lt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:c,showZero:f}=e;return x(c)&&c!==""&&(f||c!==0&&c!=="0")},s=()=>{const{dot:c,max:f,content:o}=e;if(!c&&n())return t.content?t.content():x(f)&&ue(o)&&+o>+f?`${f}+`:o},a=c=>c.startsWith("-")?c.replace("-",""):`-${c}`,i=H(()=>{const c={background:e.color};if(e.offset){const[f,o]=e.offset,{position:r}=e,[u,d]=r.split("-");t.default?(typeof o=="number"?c[u]=g(u==="top"?o:-o):c[u]=u==="top"?g(o):a(o),typeof f=="number"?c[d]=g(d==="left"?f:-f):c[d]=d==="left"?g(f):a(f)):(c.marginTop=g(o),c.marginLeft=g(f))}return c}),l=()=>{if(n()||e.dot)return m("div",{class:[A.b(),A.m(e.position),e.dot&&A.m("dot"),!!t.default&&A.m("fixed")],style:i.value},[s()])};return()=>t.default?m(ze("tag"),{class:A.e("wrapper")},{default:()=>[t.default(),l()]}):l()}}),dt=D(ut),ee=L("icon"),ft="w-icon",mt=e=>e==null?void 0:e.includes("/"),vt={dot:Boolean,tag:O("i"),name:String,size:h,badge:h,color:String,badgeProps:Object,classPrefix:String},Ce=$({name:ft,props:vt,setup(e,{slots:t}){const n=H(()=>e.classPrefix||ee.b());return()=>{const{tag:s,dot:a,name:i,size:l,badge:c,color:f}=e,o=mt(i);return m(dt,U({dot:a,tag:s,class:[n.value,o?"":`${n.value}-${i}`],style:{color:f,fontSize:g(l)},content:c},e.badgeProps),{default:()=>{var r;return[(r=t.default)==null?void 0:r.call(t),o&&m("img",{class:ee.e("image"),src:i},null)]}})}}});function yt(e,t){return e>t?"horizontal":t>e?"vertical":""}function ht(){const e=y(0),t=y(0),n=y(0),s=y(0),a=y(0),i=y(0),l=y(""),c=()=>l.value==="vertical",f=()=>l.value==="horizontal",o=()=>{n.value=0,s.value=0,a.value=0,i.value=0,l.value=""};return{move:d=>{const w=d.touches[0];n.value=(w.clientX<0?0:w.clientX)-e.value,s.value=w.clientY-t.value,a.value=Math.abs(n.value),i.value=Math.abs(s.value);const C=10;(!l.value||a.value<C&&i.value<C)&&(l.value=yt(a.value,i.value))},start:d=>{o(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:o,startX:e,startY:t,deltaX:n,deltaY:s,offsetX:a,offsetY:i,direction:l,isVertical:c,isHorizontal:f}}let R=0;const te="w-overflow-hidden";function wt(e,t){const n=ht(),s="01",a="10",i=r=>{n.move(r);const u=n.deltaY.value>0?a:s,d=me(r.target,e.value),{scrollHeight:w,offsetHeight:C,scrollTop:z}=d;let p="11";z===0?p=C>=w?"00":"01":z+C>=w&&(p="10"),p!=="11"&&n.isVertical()&&!(parseInt(p,2)&parseInt(u,2))&&he(r,!0)},l=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",i,{passive:!1}),R||document.body.classList.add(te),R++},c=()=>{R&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",i),R--,R||document.body.classList.remove(te))},f=()=>t()&&l(),o=()=>t()&&c();ve(f),V(o),$e(o),B(t,r=>{r?l():c()})}const gt=Symbol();let bt=2e3;const Ot=()=>++bt,Ct="w-popup",_=L("popup"),pt=k({},be,{round:Boolean,position:O("center"),closeIcon:O("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:O("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),St=$({name:Ct,inheritAttrs:!1,props:pt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:s}){let a,i;const l=y(),c=y(),f=Oe(()=>e.show||!e.lazyRender),o=H(()=>{const v={zIndex:l.value};if(x(e.duration)){const P=e.position==="center"?"animationDuration":"transitionDuration";v[P]=`${e.duration}s`}return v}),r=()=>{a||(a=!0,l.value=e.zIndex!==void 0?+e.zIndex:Ot(),t("open"))},u=()=>{a&&Ve(e.beforeClose,{done(){a=!1,t("close"),t("update:show",!1)}})},d=v=>{t("clickOverlay",v),e.closeOnClickOverlay&&u()},w=()=>{if(e.overlay)return m(it,{show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:d},{default:s["overlay-content"]})},C=v=>{t("clickCloseIcon",v),u()},z=()=>{if(e.closeable)return m(Ce,{role:"button",tabindex:0,name:e.closeIcon,class:[_.e("close-icon"),_.em("close-icon",e.closeIconPosition),Ge],classPrefix:e.iconPrefix,onClick:C},null)};let p;const Pe=()=>{p&&clearTimeout(p),p=setTimeout(()=>{t("opened")})},Ie=()=>t("closed"),ke=v=>t("keydown",v),Te=f(()=>{var q;const{round:v,position:P,safeAreaInsetTop:F,safeAreaInsetBottom:K}=e;return le(m("div",U({ref:c,style:o.value,role:"dialog",tabindex:0,class:[_.b(),v&&_.m("round"),_.m(`${P}`),F&&"w-safe-area-top",K&&"w-safe-area-bottom"],onKeydown:ke},n),[(q=s.default)==null?void 0:q.call(s),z()]),[[re,e.show]])}),Z=()=>{const{position:v,transition:P,transitionAppear:F}=e,K=v==="center"?"w-fade":`w-popup-slide-${v}`;return m(ie,{name:P||K,appear:F,onAfterEnter:Pe,onAfterLeave:Ie},{default:Te})};return B(()=>e.show,v=>{v&&!a&&(r(),n.tabindex===0&&oe(()=>{var P;(P=c.value)==null||P.focus()})),!v&&a&&(a=!1,t("close"))}),ge({popupRef:c}),wt(c,()=>e.show&&e.lockScroll),ye("popstate",()=>{e.closeOnPopstate&&(u(),i=!1)}),j(()=>{e.show&&r()}),se(()=>{i&&(t("update:show",!0),i=!1)}),V(()=>{e.show&&e.teleport&&(u(),i=!0)}),Ae(gt,()=>e.show),()=>e.teleport?m(Le,{to:e.teleport},{default:()=>[w(),Z()]}):m(De,null,[w(),Z()])}}),Pt=D(St),It=D(Ce);let M=0;function kt(e){e?(M||document.body.classList.add("w-toast--unclickable"),M++):M&&(M--,M||document.body.classList.remove("w-toast--unclickable"))}const Tt="w-toast",b=L("toast"),Et=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Bt={icon:String,show:Boolean,type:O("text"),overlay:Boolean,message:h,iconSize:h,duration:Ye(2e3),position:O("middle"),teleport:[String,Object],wordBreak:String,className:Y,iconPrefix:String,transition:O("w-fade"),loadingType:String,forbidClick:Boolean,overlayClass:Y,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},pe=$({name:Tt,props:Bt,emits:["update:show"],setup(e,{emit:t,slots:n}){let s,a=!1;const i=()=>{const u=e.show&&e.forbidClick;a!==u&&(a=u,kt(a))},l=u=>t("update:show",u),c=()=>{e.closeOnClick&&l(!1)},f=()=>clearTimeout(s),o=()=>{const{icon:u,type:d,iconSize:w,iconPrefix:C,loadingType:z}=e;if(u||d==="success"||d==="fail")return m(It,{name:u||d,size:w,class:b.e("icon"),classPrefix:C},null);if(d==="loading")return m(nt,{class:b.m("loading"),size:w,type:z},null)},r=()=>{const{type:u,message:d}=e;if(n.message)return m("div",{class:b.b("text")},[n.message()]);if(x(d)&&d!=="")return u==="html"?m("div",{key:0,class:b.b("text"),innerHTML:String(d)},null):m("div",{class:b.b("text")},[d])};return B(()=>[e.show,e.forbidClick],i),B(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(s=setTimeout(()=>{l(!1)},e.duration))}),j(i),ae(i),()=>m(Pt,U({class:[b.b(),b.m(e.position),e.wordBreak==="normal"?b.m("break-normal"):b.m(e.wordBreak),!e.icon&&b.m(e.type),e.className],lockScroll:!1,onClick:c,onClosed:f,"onUpdate:show":l},Ne(e,Et)),{default:()=>[o(),r()]})}}),xt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"w-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let I=[],zt=!1,ne=k({},xt);const $t=new Map;function Se(e){return de(e)?e:{message:e}}function Lt(){const{instance:e,unmount:t}=Ze({setup(){const n=y(""),{open:s,state:a,close:i,toggle:l}=We(),c=()=>{},f=()=>m(pe,U(a,{onClosed:c,"onUpdate:show":l}),null);return B(n,o=>{a.message=o}),ce().render=f,{open:s,close:i,message:n}}});return e}function Dt(){if(!I.length||zt){const e=Lt();I.push(e)}return I[I.length-1]}function At(e={}){if(!X)return{};const t=Dt(),n=Se(e);return t.open(k({},ne,$t.get(n.type||ne.type),n)),t}const W=e=>t=>At(k({type:e},Se(t))),Kt=W("loading"),Gt=W("success"),Vt=W("fail"),Wt=e=>{I.length&&(e?(I.forEach(t=>{t.close()}),I=[]):I[0].close())},Zt=D(pe);export{tt as A,Ut as B,Ye as C,Yt as D,Ht as E,He as F,Pt as G,Ge as H,It as I,dt as J,nt as L,it as O,St as P,Zt as T,Kt as a,Gt as b,Vt as c,Wt as d,L as e,Xt as f,k as g,Y as h,X as i,x as j,_t as k,Nt as l,O as m,h as n,ge as o,he as p,Mt as q,g as r,At as s,E as t,ye as u,Ne as v,D as w,Ft as x,be as y,Ce as z};
