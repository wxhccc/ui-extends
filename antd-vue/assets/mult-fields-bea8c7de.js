import{_ as i,c as f,r as c,M as s,p as V,U as _,V as b,t as h,v as D,N as m,W as p,Q as u}from"./framework-d784189f.js";const l=(e,o,a="请输入",r)=>({name:e,props:Array.isArray(o)?{rules:o}:o,colProps:r,field:{component:"AInput",props:{placeholder:a}}}),g=f({setup(){const e=c({telphone:{},option:{}}),o={name:"telphone",props:{label:"住宅电话"},children:[l("areaCode",[{required:!0,message:"请输入区号"}],"请输入区号",{span:6}),l("number",[{required:!0,message:"请输入电话号码"}],"请输入电话号码",{span:18})]},a={name:"option",props:{label:"Option"},children:[l("label",{label:"Label",rules:[{required:!0,message:"请输入Label"}]},"请输入Label"),l("value",{label:"Value",rules:[{required:!0,message:"请输入Value"}]},"请输入Value")]};return{formData:e,telphoneItem:o,optionItem:a}}}),I=u("p",null,"子表单项无label",-1),q=u("p",null,"子表单项有label",-1);function v(e,o,a,r,C,N){const n=s("ue-form-field-item"),d=s("a-form");return V(),_(d,{model:e.formData},{default:b(()=>[h(D(e.formData)+" ",1),I,m(n,p(e.telphoneItem,{modelValue:e.formData.telphone,"onUpdate:modelValue":o[0]||(o[0]=t=>e.formData.telphone=t)}),null,16,["modelValue"]),q,m(n,p(e.optionItem,{modelValue:e.formData.option,"onUpdate:modelValue":o[1]||(o[1]=t=>e.formData.option=t)}),null,16,["modelValue"])]),_:1},8,["model"])}const y=i(g,[["render",v],["__file","mult-fields.vue"]]);export{y as default};