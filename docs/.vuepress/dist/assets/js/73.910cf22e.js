(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{444:function(e,a,i){"use strict";i.r(a);var l={data:()=>({loading:!1,isEditing:!0,formData:{name:"",rightIds:[]},data:[{label:"一级 1",id:1,children:[{label:"二级 1-1",id:11,children:[{id:111,label:"三级 1-1-1"}]}]},{label:"一级 2",id:2,children:[{id:21,label:"二级 2-1",children:[{id:211,label:"三级 2-1-1"}]},{id:22,label:"二级 2-2",children:[{id:221,label:"三级 2-2-1"}]}]},{label:"一级 3",id:3,children:[{id:31,label:"二级 3-1",children:[{id:311,label:"三级 3-1-1"}]},{label:"二级 3-2",id:32,children:[{id:321,label:"三级 3-2-1"}]}]}]}),methods:{getApiData(){this.loading=!0,window.setTimeout(()=>{this.formData={name:"管理员",rightIds:[1,11,111,2,21,211,22,221]},this.loading=!1},2e3)}}},t=i(1),n=Object(t.a)(l,function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.formData,"label-width":"60px","element-loading-text":"数据获取中。。。"}},[i("p",[i("el-button",{attrs:{size:"small"},on:{click:e.getApiData}},[e._v("获取回填数据")]),e._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(a){e.isEditing=!e.isEditing}}},[e._v(e._s(e.isEditing?"只读":"编辑"))])],1),e._v(" "),i("el-form-item",{attrs:{label:"名称",prop:"name",required:""}},[e.isEditing?i("el-input",{model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}}):i("span",[e._v(e._s(e.formData.name))])],1),e._v(" "),i("el-form-item",{attrs:{label:"权限",prop:"rightIds",required:""}},[i("ue-tree-field",{attrs:{inline:"",data:e.data,readonly:!e.isEditing},model:{value:e.formData.rightIds,callback:function(a){e.$set(e.formData,"rightIds",a)},expression:"formData.rightIds"}})],1),e._v(" "),i("ue-form-btns",{attrs:{"parent-refs":e.$refs,"is-validate":""}})],1)},[],!1,null,null,null);a.default=n.exports}}]);