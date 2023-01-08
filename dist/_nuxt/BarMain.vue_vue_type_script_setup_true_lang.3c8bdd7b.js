import{_ as Z}from"./MobileSideBar.vue_vue_type_script_setup_true_lang.a694b345.js";import{u as y,_ as U}from"./BarMain.vue_vue_type_style_index_0_lang.3af5aabe.js";import{_ as O}from"./SearchBar.vue_vue_type_script_setup_true_lang.2986a41c.js";import{_ as V}from"./Footer.vue_vue_type_style_index_0_lang.b67d4afe.js";import{o as c,L as u,U as t,f as F,y as b,q,a as R,a8 as T,N as P,u as o,a1 as s,X as r,a2 as w,a9 as $,aa as C,$ as i,O as W,c as X,I as A,a4 as G}from"./entry.3de6a127.js";import{_ as H}from"./LanguageSwitcher.vue_vue_type_script_setup_true_lang.51f69a2e.js";import{_ as J}from"./Dropdown.vue_vue_type_script_setup_true_lang.935d1a6d.js";import K from"./Dropdown.af49ef05.js";import Y from"./SmallDropdown.57bb5197.js";import{u as ee}from"./useLang.9ed5cfe6.js";import{I as k}from"./shopping-cart-simple-fill.baae9e73.js";import{a as M}from"./Cart.80f83e00.js";const te={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},oe=t("path",{fill:"currentColor",d:"M11.3 14.8q.275.275.7.275q.425 0 .7-.275l3.1-3.1q.275-.275.275-.688q0-.412-.3-.712q-.275-.275-.7-.275q-.425 0-.7.275L12 12.675l-2.4-2.4Q9.325 10 8.913 10q-.413 0-.713.3q-.275.275-.275.7q0 .425.275.7ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"},null,-1),se=[oe];function ne(x,l){return c(),u("svg",te,se)}const re={name:"material-symbols-expand-circle-down-rounded",render:ne},le={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=t("path",{fill:"currentColor",d:"M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"},null,-1),ie=[ae];function ce(x,l){return c(),u("svg",le,ie)}const de={name:"material-symbols-menu-rounded",render:ce},me={class:"z-50 fixed top-0 overlaying drop-shadow-xl md:drop-shadow-none w-full text-gray-500 h-auto flex flex-col items-center justify-between lg:justify-center mx-0 bg-white",id:"navbar-wrapper"},ue={class:"z-50 flex items-center justify-between w-full h-[4.9rem] text-xs md:px-16",id:"navbar-content1"},pe=t("p",{class:"text-3xl text-pink-600 font-itim"},"PinkiWoow",-1),_e={key:0,class:"flex md:hidden items-center space-x-2 w-full h-full",id:"mobile-nav"},fe={class:"absolute top-[0.6rem] text-white"},he={key:1,class:"flex space-x-3 w-full justify-end items-center"},ve={class:"hidden md:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-gray-200 items-center justify-center"},we={class:"w-12 h-12 flex items-center justify-center"},be={class:"absolute top-[0.9rem] text-white"},xe={class:"w-full h-full text-center bg-gray-500 hover:bg-black smooth-color text-white"},ge={class:"hidden md:flex relative w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-gray-200 items-center justify-center"},ye=t("p",null,"asds",-1),qe=t("hr",{class:"border-1 border-gray-100 w-full"},null,-1),$e=[ye,qe],Ce={class:"text-lg font-itim bg-[#F4F6F8] text-black flex items-center justify-center w-full h-[3rem] md:px-16 gap-x-4",id:"navbar-navigation"},ke={class:"h-full"},Me={class:"relative h-full"},Oe=F({__name:"BarMain",setup(x){let l=b(y());const f=q(()=>l.value.getIsMobileNavbarOpen),p=b(!1),_=R();T(),P("locale.setting"),ee();let h=b(M());h.value=M(),l.value=y(),q(()=>!(_.name=="cart"||_.name=="index"||_.name=="configurator"));const Q=()=>{l.value.hideMobileNavbar()},B=()=>{p.value=!0,l.value.showMobileNavbar(),console.log(l.value.getIsMobileNavbarOpen)},j=()=>{document.getElementById("cart-dropdown").classList.toggle("cart-dropdown-visible")},v=n=>{var e,a;n==="1"?(e=document.getElementById("dropdown-1"))==null||e.classList.add("dropdown-visible"):n==="2"&&((a=document.getElementById("dropdown-2"))==null||a.classList.add("dropdown-visible"))},g=n=>{var e,a;n==="1"?(e=document.getElementById("dropdown-1"))==null||e.classList.remove("dropdown-visible"):n==="2"&&((a=document.getElementById("dropdown-2"))==null||a.classList.remove("dropdown-visible"))};return(n,e)=>{const a=Z,L=U,N=O,I=V,d=W,D=H,S=J,z=K,E=Y;return c(),u("div",me,[o(f)&&o(p)?(c(),u("div",{key:0,class:"w-full h-screen bg-[rgba(0,0,0,0.25)] z-40 fixed top-0 block md:hidden",onClick:e[0]||(e[0]=m=>Q())},[s(L,null,{default:r(()=>[o(p)?(c(),X(a,{key:0,class:A(["z-10 block md:hidden",o(f)?"show-right ":"hide-left "]),id:"mobile-menu"},null,8,["class"])):w("",!0)]),_:1})])):w("",!0),t("div",ue,[s(N,{class:"h-full w-full"},{default:r(()=>[G("sda")]),_:1}),s(d,{class:"w-48 h-[4.9rem] flex justify-center items-center",to:"/"},{default:r(()=>[s(I,{class:"h-[4.9rem]",id:"logo",src:"/images/pinkiwoowLogo.png",alt:"logo",format:"webp"}),pe]),_:1}),o(f)&&o(p)?(c(),u("div",_e,[s(o(de),{class:"hover:cursor-pointer w-9 h-9",id:"mobile-menu-button",onClick:B}),s(d,{class:"w-9 h-9 flex items-center justify-center relative",to:"/cart"},{default:r(()=>[s(o(k),{class:"w-full h-full text-gray-500"}),t("p",fe,i(o(h).getCartLength),1)]),_:1})])):w("",!0),!o(f)&&!o(p)?(c(),u("div",he,[s(D),$(t("div",ve,[t("div",we,[s(o(k),{class:"w-full h-full text-gray-500"}),t("p",be,i(o(h).getCartLength),1)]),t("p",null,"("+i(o(h).getCartTotal)+"Z\u0141)",1),s(o(re),{class:"text-gray-500 w-5 h-5 hover:cursor-pointer",onClick:j}),s(d,{class:"h-full w-[8rem]",to:"/cart"},{default:r(()=>[t("button",xe,i(n.$t("components.navbar.cart").toUpperCase()),1)]),_:1}),s(S,{class:"hidden"})],512),[[C,o(_).name!=="cart"]]),$(t("div",ge,$e,512),[[C,o(_).name=="cart"]])])):w("",!0)]),t("div",Ce,[s(z,{class:"dropdown-hidden hidden hover:flex absolute top-[6.95rem] left-0 z-40",id:"dropdown-1",onClick:e[1]||(e[1]=m=>v("1"))}),t("div",ke,[s(d,{class:"h-full flex items-center justify-center",onMouseenter:e[2]||(e[2]=m=>v("1")),onMouseleave:e[3]||(e[3]=m=>g("1")),to:"/"},{default:r(()=>[t("p",null,i(n.$t("components.navbar.products").toUpperCase()),1)]),_:1})]),t("div",Me,[s(d,{class:"h-full flex items-center justify-center",onMouseenter:e[4]||(e[4]=m=>v("2")),onMouseleave:e[5]||(e[5]=m=>g("2")),to:"/"},{default:r(()=>[t("p",null,i(n.$t("components.navbar.home").toUpperCase()),1)]),_:1}),s(E,{class:"dropdown-hidden hidden hover:flex absolute top-[1.92rem] left-0 z-40",id:"dropdown-2",onClick:e[6]||(e[6]=m=>v("2"))})]),s(d,{class:"h-full flex items-center justify-center",to:"/"},{default:r(()=>[t("p",null,i(n.$t("components.navbar.contact").toUpperCase()),1)]),_:1})])])}}});export{Oe as _};