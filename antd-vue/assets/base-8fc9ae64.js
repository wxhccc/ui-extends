import{c as m,_ as b,M as r,p as c,U as v,V as u,N as a,Q as n,v as p,W as s,t as i}from"./framework-d784189f.js";const f=m({data(){return{inputValue:"",inputField:{component:"AInput"},selectValue:void 0,selectField:{component:"ASelect",props:{placeholder:"请选择"},data:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]},radioValue:1,radioField:{component:"ARadioGroup",props:{size:"small"},data:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"}]},checkboxValue:[],checkboxField:{component:"ACheckboxGroup",props:()=>({size:"small"}),data:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"}]}}}}),k=n("br",null,null,-1);function F(e,l,C,U,h,A){const d=r("ue-common-field"),t=r("a-col"),V=r("a-row");return c(),v(V,{gutter:20},{default:u(()=>[a(t,{span:8},{default:u(()=>[n("p",null,"Input-----value: "+p(e.inputValue),1),a(d,s(e.inputField,{modelValue:e.inputValue,"onUpdate:modelValue":l[0]||(l[0]=o=>e.inputValue=o)}),null,16,["modelValue"])]),_:1}),a(t,{span:12,offset:4},{default:u(()=>[n("p",null,"Select-----value: "+p(e.selectValue),1),a(d,s(e.selectField,{modelValue:e.selectValue,"onUpdate:modelValue":l[1]||(l[1]=o=>e.selectValue=o)}),null,16,["modelValue"])]),_:1}),a(t,{span:12},{default:u(()=>[n("p",null,"RadioGroup-----value: "+p(e.radioValue),1),a(d,s(e.radioField,{modelValue:e.radioValue,"onUpdate:modelValue":l[2]||(l[2]=o=>e.radioValue=o)}),null,16,["modelValue"])]),_:1}),a(t,{span:12},{default:u(()=>[n("p",null,[i("CheckboxGroup"),k,i("value: "+p(e.checkboxValue),1)]),a(d,s(e.checkboxField,{modelValue:e.checkboxValue,"onUpdate:modelValue":l[3]||(l[3]=o=>e.checkboxValue=o)}),null,16,["modelValue"])]),_:1})]),_:1})}const N=b(f,[["render",F],["__file","base.vue"]]);export{N as default};