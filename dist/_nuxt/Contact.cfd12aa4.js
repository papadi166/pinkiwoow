import{_ as n}from"./MakeOrder.vue.9e13c0f3.js";import{u as r}from"./useLang.195de8eb.js";import{f as c,j as p,x as l,y as d,o as f,E as u,O as o,W as e,Z as _}from"./entry.69b75ede.js";import{L as h}from"./ContentNavigation.1e63ec52.js";import"./SmartButton.vue.7a679225.js";import"./ContentQuery.4118f818.js";import"./utils.e538b51e.js";import"./Cart.95ca3e8d.js";import"./_commonjsHelpers.cebfa718.js";/* empty css                      *//* empty css                    */import"./Wheeler.vue.c6295899.js";import"./client-only.f30d5020.js";/* empty css                  *//* empty css                   */import"./ContentDoc.ef38a9de.js";import"./ContentRenderer.7fc321fd.js";import"./ContentRendererMarkdown.76d9fd34.js";import"./index.68c44503.js";import"./ContentList.75b677d9.js";import"./ContentSlot.0e2353c3.js";import"./DocumentDrivenEmpty.93b2133c.js";import"./DocumentDrivenNotFound.7305ecb6.js";import"./Markdown.84316910.js";import"./ProseCode.36034ab5.js";import"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"flex flex-col md:flex-row w-full h-auto",id:"contact"},x={class:"flex flex-col w-full items-center justify-center md:w-1/2 mt-24 mb-24"},g={class:"text-6xl mb-4"},y=o("div",{class:"w-full md:w-1/2 h-96 md:h-auto"},[o("div",{class:"map w-full h-full",id:"map"})],-1),H=c({__name:"Contact",setup(v){r();const s=p(),m=new h({apiKey:s.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]}),a=l([]);return d(()=>{setTimeout(async()=>{await m.load().then(t=>{a.value=new t.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(t=>{console.log(t)}).then(function(){})},1e3)}),(t,E)=>{const i=n;return f(),u("div",w,[o("div",x,[o("h5",g,e(t.$t("components.contact.title")),1),o("p",null,e(t.$t("components.contact.subtitle")),1),_(i,{class:"mt-12"})]),y])}}});export{H as default};