import{_,c as v,r as s,M as n,p as b,q as g,N as t,V as u}from"./framework-d784189f.js";const V=v({setup(){const e=s(),o=s(!1),r=s({value:""}),m={sureBtn:"保存",sending:"保存中。。。",confirmWord:"保存后会覆盖之前数据，确认操作？"},a=()=>{l()},l=()=>{o.value=!0,window.setTimeout(()=>{o.value=!1},2e3)};return{sending:o,formData:r,texts:m,form:e,submitHandler:a}}});function C(e,o,r,m,a,l){const f=n("el-input"),i=n("el-form-item"),d=n("el-form"),c=n("ue-form-btns");return b(),g("div",null,[t(d,{ref:"form",model:e.formData},{default:u(()=>[t(i,{required:"",prop:"value"},{default:u(()=>[t(f,{modelValue:e.formData.value,"onUpdate:modelValue":o[0]||(o[0]=p=>e.formData.value=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(c,{sending:e.sending,form:e.form,"submit-confirm":"",submit:e.submitHandler,texts:e.texts},null,8,["sending","form","submit","texts"])])}const $=_(V,[["render",C],["__file","confirm-custom.vue"]]);export{$ as default};