import{_ as n}from"./MakeOrder.vue.b2b991ad.js";import{u as r}from"./useLang.a0d99a46.js";import{f as c,j as p,x as l,y as d,o as f,E as u,O as o,W as e,Z as _}from"./entry.2673ef6e.js";import{L as h}from"./ContentNavigation.c3d1a32a.js";import"./SmartButton.vue.60af3f8d.js";import"./ContentQuery.50a8da92.js";import"./utils.f4a67aeb.js";import"./Cart.cd5866a6.js";import"./_commonjsHelpers.cebfa718.js";/* empty css                      *//* empty css                    */import"./Wheeler.vue.c6295899.js";import"./client-only.ce983c01.js";/* empty css                  *//* empty css                   */import"./ContentDoc.4c39765e.js";import"./ContentRenderer.3ec6c483.js";import"./ContentRendererMarkdown.a24b0711.js";import"./index.68c44503.js";import"./ContentList.73032440.js";import"./ContentSlot.82af796f.js";import"./DocumentDrivenEmpty.ef69652f.js";import"./DocumentDrivenNotFound.34a3b43f.js";import"./Markdown.c57da477.js";import"./ProseCode.a0d6ea81.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"flex flex-col md:flex-row w-full h-auto",id:"contact"},x={class:"flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24"},g={class:"text-6xl mb-4"},y=o("div",{class:"w-full md:w-1/2 h-96 md:h-auto"},[o("div",{class:"map w-full h-full",id:"map"})],-1),H=c({__name:"Contact",setup(v){r();const s=p(),m=new h({apiKey:s.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]}),a=l([]);return d(()=>{setTimeout(async()=>{await m.load().then(t=>{a.value=new t.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(t=>{console.log(t)}).then(function(){})},1e3)}),(t,E)=>{const i=n;return f(),u("div",w,[o("div",x,[o("h5",g,e(t.$t("components.contact.title")),1),o("p",null,e(t.$t("components.contact.subtitle")),1),_(i,{class:"mt-12"})]),y])}}});export{H as default};
