import{_ as w,c as k,r as q,b as S,A as y,S as N,M as l,p as _,q as f,t as h,v as P,N as a,V as d,R as v,C as R,Q as $}from"./framework-d784189f.js";const B=k({setup(){const e=q(),t=S({curTab:"list",loading:!1,pagedData:{},reqControl:!1,restore:!1,searchData:{title:""},paginationProps:{layout:"total, prev, pager, next"}});let u=0;const b=(n,o)=>(console.log(n,o),u=o,t.loading=!0,D(n).then(i=>{t.reqControl&&u!==o||(console.log(n,i),t.pagedData=i)}).finally(()=>{t.loading=!1})),D=n=>new Promise(o=>{const{current:i,size:p,title:c=""}=n,m=Array(p||10).fill(0).map((V,g)=>{const r=Math.random();return{id:(i-1)*p+g,title:c+r.toString(26).substring(2),description:r.toString(34).substring(2)+r.toString(32)}});window.setTimeout(()=>{o({rows:m,total:200})},1500)});return y(()=>t.curTab,n=>{n==="list"?(t.searchData={title:""},t.restore&&R(()=>{const{params:o}=e.value.getStoreData();t.searchData.title=o.title})):t.restore=!0}),{list:e,...N(t),getPagedData:b}}}),M={key:0},U=$("p",null,"请输入内容并选择页面，然后切换到详情页，然后切换回来",-1),A={key:1};function z(e,t,u,b,D,n){const o=l("el-tab-pane"),i=l("el-tabs"),p=l("el-switch"),c=l("el-alert"),m=l("el-input"),V=l("el-form-item"),g=l("el-form"),r=l("el-table-column"),C=l("el-table"),T=l("ue-paged-list");return _(),f("div",null,[h(" restore: "+P(e.restore)+" ",1),a(i,{modelValue:e.curTab,"onUpdate:modelValue":t[0]||(t[0]=s=>e.curTab=s)},{default:d(()=>[a(o,{name:"list",label:"列表页"}),a(o,{name:"detail",label:"详情页"})]),_:1},8,["modelValue"]),e.curTab==="list"?(_(),f("div",M,[h(" 是否进行时序控制："),a(p,{modelValue:e.reqControl,"onUpdate:modelValue":t[1]||(t[1]=s=>e.reqControl=s),"active-text":"请求控制","inactive-text":"不控制"},null,8,["modelValue"]),a(c,{title:"仔细观察不控制时序时，数据可能和搜索条件不对应",type:"info"}),U,a(g,{inline:""},{default:d(()=>[a(V,{label:"标题"},{default:d(()=>[a(m,{modelValue:e.searchData.title,"onUpdate:modelValue":t[2]||(t[2]=s=>e.searchData.title=s),placeholder:"请输入标题搜索"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,{ref:"list",class:"paded-list-demo-table","created-auto-send":"","paged-data":e.pagedData,loading:e.loading,"extra-model":e.searchData,restore:e.restore,"need-store":"",pagination:e.paginationProps,"get-paged-data":e.getPagedData},{default:d(({rows:s})=>[a(C,{data:s,height:"320"},{default:d(()=>[a(r,{label:"Id",prop:"id"}),a(r,{label:"标题",prop:"title"}),a(r,{label:"描述",prop:"description"})]),_:2},1032,["data"])]),_:1},8,["paged-data","loading","extra-model","restore","pagination","get-paged-data"])])):v("v-if",!0),e.curTab==="detail"?(_(),f("div",A,"假装这个是详情页")):v("v-if",!0)])}const I=w(B,[["render",z],["__file","restore.vue"]]);export{I as default};