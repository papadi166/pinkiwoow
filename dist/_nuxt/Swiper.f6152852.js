import{S as u}from"./Wheeler.vue_vue_type_style_index_0_lang.a1fbb369.js";import{P as m,L as w}from"./lazy.323373ac.js";import{u as f}from"./client-only.76aef0be.js";import{f as g,y as h,G as _,o as r,L as i,U as s,Y as v,Z as y,$ as a,u as x}from"./entry.4f483ef8.js";/* empty css                                               */import"./Cart.5576c2f7.js";import"./_commonjsHelpers.cebfa718.js";const b={class:"relative h-auto overflow-hidden"},B={class:"swiper-container"},P={class:"swiper-wrapper"},S={class:"h-[54rem] w-full flex flex-col"},k=["src","alt"],L=s("div",{class:"swiper-lazy-preloader"},null,-1),z={class:"text-lg font-robotolight font-bold text-black mt-3"},V=s("div",{class:"swiper-pagination absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto"},null,-1),M=g({__name:"Swiper",props:{slides:{type:Array,required:!0}},setup(c){const n=c,d=h(f());return _(()=>{new u(".swiper-container",{modules:[m,w],preloadImages:!1,spaceBetween:4,lazy:{loadPrevNext:!0,loadPrevNextAmount:2},slidesPerGroup:1,loopFillGroupWithBlank:!0,breakpoints:{0:{slidesPerView:2,spaceBetween:4},569:{slidesPerView:3,spaceBetween:8},767:{slidesPerView:4.5,spaceBetween:12}}});function l(e){var o=document.querySelectorAll(e),t=0;if(length=o.length,length===n.slides.length)for(;t<length;t++)t>0&&t<length-1&&(o[t].style.display="none")}l(".swiper-pagination-bullet"),window.addEventListener("resize",e=>{console.log("page is fully loaded"),l(".swiper-pagination-bullet")}),document.querySelector(".swiper-container").classList.add("noselect")}),(l,p)=>(r(),i("div",b,[s("div",B,[s("div",P,[(r(!0),i(v,null,y(n.slides,e=>{var o,t;return r(),i("div",{class:"swiper-slide hover:cursor-pointer flex flex-col",key:e.title},[s("div",S,[s("img",{class:"swiper-image swiper-lazy overflow-hidden rounded-lg object-contain w-full h-full",src:(o=e.image)==null?void 0:o.url,alt:(t=e.image)==null?void 0:t.alt},null,8,k),L]),s("p",z,a(e.title),1),s("p",null,a(e.price)+" "+a(x(d).getCurrency),1)])}),128))]),V])]))}});export{M as default};