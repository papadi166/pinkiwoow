import{_ as n}from"./ContentQuery.a8b2de64.js";import{f as c,h,j as u}from"./entry.53444161.js";import"./asyncData.e6884917.js";import"./utils.d58eb32b.js";const S=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(f){const t=h(),{path:p,query:o}=f,m={...o||{},path:p||(o==null?void 0:o.path)||"/"},r=(e,a)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return u(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{S as default};
