import{C as i}from"./outline-close.5d11c5df.js";import{f as n,o as a,L as c,U as e,$ as s,a1 as r,u as m}from"./entry.267e7f08.js";const u={class:"row w-full h-20 justify-between px-2 gap-x-2 items-start"},d={class:"col w-1/4 h-full"},f=["src"],p={class:"w-3/4 h-full justify-between text-black text-sm font-flamabook col"},b=n({__name:"DropdownItem",props:{item:{type:Object,required:!0}},setup(t){return(o,l)=>(a(),c("div",u,[e("div",d,[e("img",{class:"w-16 h-16",src:t.item.image},null,8,f)]),e("div",p,[e("p",null,s(t.item.title),1),e("div",null,[e("p",null,s(t.item.price)+" ZL",1),e("p",null,"Ilosc: "+s(t.item.quantity),1)])]),r(m(i),{class:"w-4 h-4 hover:cursor-pointer",onClick:l[0]||(l[0]=h=>o.$emit(o.close))})]))}});export{b as _};
