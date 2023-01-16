import{k as N,l as R,m as U,_ as q,p as L,f as D,t as F,q as H,w as I,h as M,j as Q}from"./entry.267e7f08.js";import{u as W}from"./asyncData.4a5753c2.js";import{w as K,s as J}from"./utils.058dfe9a.js";const G={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function V(s,r={}){r={...G,...r};const n=O(r);return n.dispatch(s),n.toString()}function O(s){const r=[];let n=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return n},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const i=/\[object (.*)]/i,a=Object.prototype.toString.call(e),c=i.exec(a),o=c?c[1].toLowerCase():"unknown:["+a.toLowerCase()+"]";let f=null;if((f=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](e);else{if(s.ignoreUnknown)return t("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let h=Object.keys(e);s.unorderedObjects&&(h=h.sort()),s.respectType!==!1&&!x(e)&&h.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(h=h.filter(function(p){return!s.excludeKeys(p)})),t("object:"+h.length+":");for(const p of h)this.dispatch(p),t(":"),s.excludeValues||this.dispatch(e[p]),t(",")}},_array(e,i){if(i=typeof i<"u"?i:s.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1){for(const o of e)this.dispatch(o);return}const a=[],c=e.map(o=>{const f=O(s);return f.dispatch(o),a.push(f.getContext()),f.toString()});return n=[...n,...a],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),x(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=[...e];return this._array(i,s.unorderedSets!==!1)},_set(e){t("set:");const i=[...e];return this._array(i,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function x(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class g{constructor(r,n){r=this.words=r||[],this.sigBytes=n!==void 0?n:r.length*4}toString(r){return(r||Y).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new g([...this.words])}}const Y={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},X={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,i=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,a=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|i<<8|a;for(let o=0;o<4&&t*8+o*6<s.sigBytes*8;o++)n.push(r.charAt(c>>>6*(3-o)&63))}return n.join("")}},Z={parse(s){const r=s.length,n=[];for(let t=0;t<r;t++)n[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new g(n,r)}},tt={parse(s){return Z.parse(unescape(encodeURIComponent(s)))}};class et{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new g,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=tt.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let a=0;a<e;a+=this.blockSize)this._doProcessBlock(this._data.words,a);n=this._data.words.splice(0,e),this._data.sigBytes-=i}return new g(n,i)}}class rt extends et{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const st=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],nt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],y=[];class it extends rt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new g([...st])}_doProcessBlock(r,n){const t=this._hash.words;let e=t[0],i=t[1],a=t[2],c=t[3],o=t[4],f=t[5],h=t[6],p=t[7];for(let l=0;l<64;l++){if(l<16)y[l]=r[n+l]|0;else{const w=y[l-15],E=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,m=y[l-2],T=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;y[l]=E+y[l-7]+T+y[l-16]}const u=o&f^~o&h,d=e&i^e&a^i&a,v=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),S=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),b=p+S+u+nt[l]+y[l],B=v+d;p=h,h=f,f=o,o=c+b|0,c=a,a=i,i=e,e=b+B|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+a|0,t[3]=t[3]+c|0,t[4]=t[4]+o|0,t[5]=t[5]+f|0,t[6]=t[6]+h|0,t[7]=t[7]+p|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ot(s){return new it().finalize(s).toString(X)}function $(s,r={}){const n=typeof s=="string"?s:V(s,r);return ot(n).slice(0,10)}const k=(s,r)=>r.split(".").reduce((n,t)=>n&&n[t],s),P=(s,r)=>Object.keys(s).filter(r).reduce((n,t)=>Object.assign(n,{[t]:s[t]}),{}),dt=s=>r=>Array.isArray(r)?r.map(n=>s(n)):s(r),z=s=>{const r=[],n=[];for(const t of s)["$","_"].includes(t)?r.push(t):n.push(t);return{prefixes:r,properties:n}},yt=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=z(s);return P(r,e=>!t.includes(e)&&!n.includes(e[0]))},_t=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=z(s);return P(r,e=>t.includes(e)||n.includes(e[0]))},gt=(s,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),t=Object.keys(r).filter(e=>!e.startsWith("$"));for(const e of t)s=s.sort((i,a)=>{const c=[k(i,e),k(a,e)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return r[e]===-1&&c.reverse(),n.compare(c[0],c[1])});return s},wt=(s,r="Expected an array")=>{if(!Array.isArray(s))throw new TypeError(r)},_=s=>Array.isArray(s)?s:s?[s]:[],at=["sort","where","only","without"],C=(s,r)=>{const n={...r};for(const i of at)n[i]&&(n[i]=_(n[i]));const t=(i,a=c=>c)=>(...c)=>(n[i]=a(...c),e),e={params:()=>n,only:t("only",_),without:t("without",_),where:t("where",i=>[..._(n.where),i]),sort:t("sort",i=>[..._(n.sort),..._(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>s(e),findOne:()=>(n.first=!0,s(e)),findSurround:(i,a)=>(n.surround={query:i,...a},s(e)),locale:i=>e.where({_locale:i})};return e};function ut(s){return JSON.stringify(s,ct)}function ct(s,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const A=s=>async r=>{var i;s&&(r.params().first&&(r.params().where||[]).length===0?r.where({_path:U(s)}):r.where({_path:new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(i=r.params().sort)!=null&&i.length||r.sort({_file:1,$numeric:!0});const n=r.params(),t=K(`/query/${$(n)}.json`);if(J())return(await q(()=>import("./client-db.89ab68c1.js"),["./client-db.89ab68c1.js","./entry.267e7f08.js","./entry.4f307de8.css","./index.68c44503.js","./_commonjsHelpers.cebfa718.js","./asyncData.4a5753c2.js","./utils.058dfe9a.js"],import.meta.url).then(c=>c.useContentDatabase())).fetch(r);const e=await $fetch(t,{method:"GET",responseType:"json",params:{_params:ut(n),previewToken:L("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function j(s,...r){return typeof s=="string"?C(A(N(R(s,...r)))):C(A(),s)}const lt=D({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(s){const{path:r,only:n,without:t,where:e,sort:i,limit:a,skip:c,locale:o,find:f}=F(s),h=H(()=>{var u;return(u=r.value)==null?void 0:u.includes("/_")}),{data:p,refresh:l}=await W(`content-query-${$(s)}`,()=>{let u;return r.value?u=j(r.value):u=j(),n.value&&(u=u.only(n.value)),t.value&&(u=u.without(t.value)),e.value&&(u=u.where(e.value)),i.value&&(u=u.sort(i.value)),a.value&&(u=u.limit(a.value)),c.value&&(u=u.skip(c.value)),o.value&&(u=u.where({_locale:o.value})),f.value==="one"?u.findOne():f.value==="surround"?r.value?u.findSurround(r):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),u.find()):u.find()});return I(()=>s,()=>l(),{deep:!0}),{isPartial:h,data:p,refresh:l}},render(s){var S;const r=M(),{data:n,refresh:t,isPartial:e,path:i,only:a,without:c,where:o,sort:f,limit:h,skip:p,locale:l,find:u}=s,d={path:i,only:a,without:c,where:o,sort:f,limit:h,skip:p,locale:l,find:u};if(d.find==="one"){if(!n&&(r==null?void 0:r["not-found"]))return r["not-found"]({props:d,...this.$attrs});if((r==null?void 0:r.empty)&&(n==null?void 0:n._type)==="markdown"&&!((S=n==null?void 0:n.body)!=null&&S.children.length))return r.empty({props:d,...this.$attrs})}else if((!n||!n.length)&&r!=null&&r["not-found"])return r["not-found"]({props:d,...this.$attrs});return r!=null&&r.default?r.default({data:n,refresh:t,isPartial:e,props:d,...this.$attrs}):((b,B)=>Q("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:b,data:B},null,2)))("default",{data:n,props:d,isPartial:e})}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));export{mt as C,lt as _,wt as a,dt as b,_t as c,C as d,_ as e,k as g,$ as h,ut as j,gt as s,yt as w};
