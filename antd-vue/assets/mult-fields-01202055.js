import{_ as i,c as f,r as c,M as s,p as V,U as b,V as _,t as h,v as D,N as p,W as m,Q as u}from"./framework-d784189f.js";const t=(e,o,l="请输入",r)=>({prop:e,props:Array.isArray(o)?{rules:o}:o,colProps:r,field:{component:"ElInput",props:{placeholder:l}}}),g=f({setup(){const e=c({telphone:{},option:{}}),o={prop:"telphone",props:{label:"住宅电话"},children:[t("areaCode",[{required:!0,message:"请输入区号"}],"请输入区号",{span:6}),t("number",[{required:!0,message:"请输入电话号码"}],"请输入电话号码",{span:18})]},l={prop:"option",props:{label:"Option"},children:[t("label",{label:"Label",rules:[{required:!0,message:"请输入Label"}]},"请输入Label"),t("value",{label:"Value",rules:[{required:!0,message:"请输入Value"}]},"请输入Value")]};return{formData:e,telphoneItem:o,optionItem:l}}}),I=u("p",null,"子表单项无label",-1),q=u("p",null,"子表单项有label",-1);function v(e,o,l,r,C,N){const n=s("ue-form-field-item"),d=s("el-form");return V(),b(d,{model:e.formData,"label-width":"auto"},{default:_(()=>[h(D(e.formData)+" ",1),I,p(n,m(e.telphoneItem,{modelValue:e.formData.telphone,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.telphone=a)}),null,16,["modelValue"]),q,p(n,m(e.optionItem,{modelValue:e.formData.option,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.option=a)}),null,16,["modelValue"])]),_:1},8,["model"])}const y=i(g,[["render",v],["__file","mult-fields.vue"]]);export{y as default};