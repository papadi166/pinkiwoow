import{_ as a}from"./MakeOrder.vue_vue_type_script_setup_true_lang.b5816a7d.js";import{u as n}from"./useLang.aa290110.js";import{f as p,r as c,y as l,G as d,o as f,L as u,U as o,$ as e,a1 as _}from"./entry.4f483ef8.js";import{L as h}from"./ContentNavigation.73e3628d.js";import"./SmartButton.vue_vue_type_script_setup_true_lang.a2c2ad28.js";import"./asyncData.87868235.js";import"./index.9bb628c0.js";import"./ContentQuery.a28a4b21.js";import"./utils.4c83dc21.js";import"./Cart.5576c2f7.js";import"./_commonjsHelpers.cebfa718.js";/* empty css                                                  *//* empty css                                                */import"./Wheeler.vue_vue_type_style_index_0_lang.a1fbb369.js";import"./client-only.76aef0be.js";import"./nuxt-img.bac8016a.js";import"./iconify.cd21f496.js";/* empty css                                                              *//* empty css                                               */import"./ContentDoc.7ad61d59.js";import"./ContentRenderer.b5b0f6c9.js";import"./ContentRendererMarkdown.cb48fe96.js";import"./index.68c44503.js";import"./ContentList.0d25de85.js";import"./ContentSlot.b875b947.js";import"./DocumentDrivenEmpty.cde50210.js";import"./DocumentDrivenNotFound.fe8ea613.js";import"./Markdown.3d6482f4.js";import"./ProseCode.c7f68e34.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"flex flex-col md:flex-row w-full h-auto",id:"contact"},g={class:"flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24"},x={class:"text-6xl mb-4"},y=o("div",{class:"w-full md:w-1/2 h-96 md:h-auto"},[o("div",{class:"map w-full h-full",id:"map"})],-1),Z=p({__name:"Contact",setup(v){n();const m=c(),i=new h({apiKey:m.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]}),s=l([]);return d(()=>{setTimeout(async()=>{await i.load().then(t=>{s.value=new t.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(t=>{console.log(t)}).then(function(){})},1e3)}),(t,L)=>{const r=a;return f(),u("div",w,[o("div",g,[o("h5",x,e(t.$t("components.contact.title")),1),o("p",null,e(t.$t("components.contact.subtitle")),1),_(r,{class:"mt-12"})]),y])}}});export{Z as default};