(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{483:function(e,t,a){"use strict";a.r(t);var s={data:()=>({columns:[{type:"selection"},{prop:"date",label:"日期",width:"180"},{prop:"name",label:"姓名",width:"180",formatter:(e,t,a,s)=>a+e.id+"号"},{prop:"address",label:"地址"}],data:[{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:21,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:41,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:43,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:23,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:43,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:14,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),methods:{selectionChange(e){console.log("selection-change",e)},toggleSelection(){this.$refs.table.clearSelection()}}},d=a(1),n=Object(d.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-button",{on:{click:this.toggleSelection}},[this._v("取消选择")]),t("br"),t("br"),this._v(" "),t("ue-data-table",{ref:"table",attrs:{size:"small",height:"240",columns:this.columns,data:this.data},on:{"selection-change":this.selectionChange}})],1)},[],!1,null,null,null);t.default=n.exports}}]);