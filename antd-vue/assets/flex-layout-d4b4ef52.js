import{b as u}from"./app-0e5caad2.js";import{_,c as m,r as s,M as f,p as b,q as y,N as v}from"./framework-d784189f.js";const w=m({setup(){const e=s(!1),l=s([{prop:"id",label:"Id"},{prop:"title",label:"标题"},{prop:"description",label:"描述"}]),o=s({rows:[],total:0}),d=async t=>{console.log(t);const[,a]=await u(r(t),e);o.value=a},r=t=>new Promise(a=>{const{current:c,size:i}=t,p=Array(i||10).fill(0).map((S,g)=>{const n=Math.random();return{id:(c-1)*i+g+1,title:n.toString(26).substring(2),description:n.toString(34).substring(2)+n.toString(32)}});window.setTimeout(()=>{a({rows:p,total:200})},1500)});return{loading:e,columns:l,pagedData:o,getPagedData:d}}}),x={class:"demo-paged-table--flex-layout"};function D(e,l,o,d,r,t){const a=f("ue-paged-table");return b(),y("div",x,[v(a,{"flex-layout":"",loading:e.loading,columns:e.columns,"paged-data":e.pagedData,"get-paged-data":e.getPagedData,"init-data":{pageSize:10},"created-auto-send":""},null,8,["loading","columns","paged-data","get-paged-data"])])}const k=_(w,[["render",D],["__file","flex-layout.vue"]]);export{k as default};