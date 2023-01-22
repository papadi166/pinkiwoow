import{C as O,m as u,N as c,f as z,x as v,e as N,y as b,i as g,I as k,J as M,K as w,L as m,E as I,O as S}from"./entry.2673ef6e.js";const P=()=>O().$img,j={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},B=e=>{const i=u(()=>({provider:e.provider,preset:e.preset})),s=u(()=>({width:c(e.width),height:c(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),r=u(()=>({...e.modifiers,width:c(e.width),height:c(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:i,attrs:s,modifiers:r}},_={...j,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},T=z({name:"NuxtImg",props:_,setup:(e,i)=>{const s=P(),r=B(e),n=v(!1),t=u(()=>s.getSizes(e.src,{...r.options.value,sizes:e.sizes,modifiers:{...r.modifiers.value,width:c(e.width),height:c(e.height)}})),o=u(()=>{const a=r.attrs.value;return e.sizes&&(a.sizes=t.value.sizes,a.srcset=t.value.srcset),a}),d=u(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...r.modifiers.value,width:f[0],height:f[1],quality:f[2]||50},r.options.value)}),l=u(()=>e.sizes?t.value.src:s(e.src,r.modifiers.value,r.options.value)),h=u(()=>d.value?d.value:l.value);if(e.preload){const a=Object.values(t.value).every(f=>f);N({link:[{rel:"preload",as:"image",...a?{href:t.value.src,imagesizes:t.value.sizes,imagesrcset:t.value.srcset}:{href:h.value}}]})}const p=v(null);return b(()=>{if(d.value){const a=new Image;a.src=l.value,a.onload=()=>{p.value.src=l.value,n.value=!0}}}),()=>g("img",{ref:p,key:h.value,src:h.value,...o.value,...i.attrs})}}),x=Object.freeze(Object.defineProperty({__proto__:null,imgProps:_,default:T},Symbol.toStringTag,{value:"Module"})),$=k();$.use(M);const C=w("Main",{state:()=>({initialized:m("initialized",!1),isMobileNavbarOpen:m("isMobileNavbarOpen",!1),isLocaleSet:m("isLocaleSet",!1)}),getters:{getIsMobileNavbarOpen(e){return e.isMobileNavbarOpen},isInitiated(e){return e.initialized}},actions:{initialize(){this.initialized=!0},hideMobileNavbar(){this.isMobileNavbarOpen=!1},showMobileNavbar(){this.isMobileNavbarOpen=!0},setLocaleSet(){this.isLocaleSet=!0}},persist:{enabled:!0}}),L=z({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:i,attrs:s}){const r=v(!1);return b(()=>{r.value=!0}),n=>{var l;if(r.value)return(l=i.default)==null?void 0:l.call(i);const t=i.fallback||i.placeholder;if(t)return t();const o=n.fallback||n.placeholder||"",d=n.fallbackTag||n.placeholderTag||"span";return I(d,s,o)}}}),y=new WeakMap;function q(e){if(y.has(e))return y.get(e);const i={...e};return i.render?i.render=(s,...r)=>{var n;if(s.mounted$){const t=e.render(s,...r);return t.children===null||typeof t.children=="string"?S(t.type,t.props,t.children,t.patchFlag,t.dynamicProps,t.shapeFlag):g(t)}else return g("div",(n=s.$attrs)!=null?n:s._.attrs)}:i.template&&(i.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(s,r)=>{var t;const n=v(!1);return b(()=>{n.value=!0}),Promise.resolve(((t=e.setup)==null?void 0:t.call(e,s,r))||{}).then(o=>typeof o!="function"?{...o,mounted$:n}:(...d)=>{if(n.value){const l=o(...d);return l.children===null||typeof l.children=="string"?S(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):g(l)}else return g("div",r.attrs)})},y.set(e,i),i}const F=Object.freeze(Object.defineProperty({__proto__:null,default:L,createClientOnly:q},Symbol.toStringTag,{value:"Module"}));export{L as _,B as a,j as b,C as c,T as d,F as e,x as n,P as u};
