import{_ as r}from"./MakeOrder.vue_vue_type_script_setup_true_lang.9551aa85.js";import{u as n}from"./useLang.9ed5cfe6.js";import{f as c,r as p,y as l,G as d,o as f,L as u,U as o,$ as e,a1 as _}from"./entry.3de6a127.js";import{L as h}from"./ContentNavigation.ef8585e9.js";import"./SmartButton.vue_vue_type_script_setup_true_lang.84882585.js";import"./asyncData.83a41a7f.js";import"./ContentQuery.f47a6c55.js";import"./utils.13f2100f.js";import"./Cart.80f83e00.js";import"./_commonjsHelpers.cebfa718.js";/* empty css                                                  */import"./BarMain.vue_vue_type_style_index_0_lang.3af5aabe.js";import"./Footer.vue_vue_type_style_index_0_lang.b67d4afe.js";import"./Wheeler.vue_vue_type_style_index_0_lang.ea7a9dc5.js";import"./iconify.d8681d9e.js";/* empty css                                               */import"./ContentDoc.ffb2920e.js";import"./ContentRenderer.e53bba35.js";import"./ContentRendererMarkdown.b79573f9.js";import"./index.68c44503.js";import"./ContentList.ee8bb0a6.js";import"./ContentSlot.100635cd.js";import"./DocumentDrivenEmpty.c0d3240d.js";import"./DocumentDrivenNotFound.06d58ca3.js";import"./Markdown.bd5bed26.js";import"./ProseCode.e902dfb1.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"flex flex-col md:flex-row w-full h-auto",id:"contact"},g={class:"flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24"},x={class:"text-6xl mb-4"},y=o("div",{class:"w-full md:w-1/2 h-96 md:h-auto"},[o("div",{class:"map w-full h-full",id:"map"})],-1),Q=c({__name:"Contact",setup(v){n();const m=p(),s=new h({apiKey:m.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]}),a=l([]);return d(()=>{setTimeout(async()=>{await s.load().then(t=>{a.value=new t.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(t=>{console.log(t)}).then(function(){})},1e3)}),(t,L)=>{const i=r;return f(),u("div",w,[o("div",g,[o("h5",x,e(t.$t("components.contact.title")),1),o("p",null,e(t.$t("components.contact.subtitle")),1),_(i,{class:"mt-12"})]),y])}}});export{Q as default};