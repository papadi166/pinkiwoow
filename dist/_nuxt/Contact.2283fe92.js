import{_ as r}from"./MakeOrder.vue_vue_type_script_setup_true_lang.c300095a.js";import{u as n}from"./useLang.0243a8d2.js";import{f as c,r as p,y as l,G as d,o as f,L as u,U as o,$ as e,a1 as _}from"./entry.53444161.js";import{L as h}from"./ContentNavigation.5a4a4b1e.js";import"./SmartButton.vue_vue_type_script_setup_true_lang.26675e9e.js";import"./asyncData.e6884917.js";import"./ContentQuery.a8b2de64.js";import"./utils.d58eb32b.js";import"./Cart.8017f682.js";import"./_commonjsHelpers.cebfa718.js";/* empty css                                                  */import"./BarMain.vue_vue_type_style_index_0_lang.d99aa67f.js";import"./nuxt-img.3e17714c.js";import"./Wheeler.vue_vue_type_style_index_0_lang.ea7a9dc5.js";import"./iconify.9042a8fa.js";/* empty css                                               */import"./ContentDoc.323a5ad0.js";import"./ContentRenderer.aea7ebcf.js";import"./ContentRendererMarkdown.9674fa39.js";import"./index.68c44503.js";import"./ContentList.236d0c29.js";import"./ContentSlot.37e86303.js";import"./DocumentDrivenEmpty.cde520b8.js";import"./DocumentDrivenNotFound.f84626b2.js";import"./Markdown.6603c5e1.js";import"./ProseCode.1f4cf0d6.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"flex flex-col md:flex-row w-full h-auto",id:"contact"},g={class:"flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24"},x={class:"text-6xl mb-4"},y=o("div",{class:"w-full md:w-1/2 h-96 md:h-auto"},[o("div",{class:"map w-full h-full",id:"map"})],-1),Q=c({__name:"Contact",setup(v){n();const m=p(),s=new h({apiKey:m.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]}),a=l([]);return d(()=>{setTimeout(async()=>{await s.load().then(t=>{a.value=new t.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(t=>{console.log(t)}).then(function(){})},1e3)}),(t,L)=>{const i=r;return f(),u("div",w,[o("div",g,[o("h5",x,e(t.$t("components.contact.title")),1),o("p",null,e(t.$t("components.contact.subtitle")),1),_(i,{class:"mt-12"})]),y])}}});export{Q as default};
