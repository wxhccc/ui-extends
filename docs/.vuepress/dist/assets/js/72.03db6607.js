(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{445:function(e,l,d){"use strict";d.r(l);var a={data:()=>({checkMode:"one-way",nodeIds:[],data:[{label:"一级 1",id:1,children:[{label:"二级 1-1",id:11,children:[{id:111,label:"三级 1-1-1"}]}]},{label:"一级 2",id:2,children:[{id:21,label:"二级 2-1",children:[{id:211,label:"三级 2-1-1"}]},{id:22,label:"二级 2-2",children:[{id:221,label:"三级 2-2-1"}]}]},{label:"一级 3",id:3,children:[{id:31,label:"二级 3-1",children:[{id:311,label:"三级 3-1-1"}]},{label:"二级 3-2",id:32,children:[{id:321,label:"三级 3-2-1"}]}]}]})},n=d(1),i=Object(n.a)(a,function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("div",[d("p",[e._v("\n    关联模式：\n    "),d("el-radio-group",{model:{value:e.checkMode,callback:function(l){e.checkMode=l},expression:"checkMode"}},[d("el-radio",{attrs:{label:"two-way"}},[e._v("two-way(双向)")]),e._v(" "),d("el-radio",{attrs:{label:"one-way"}},[e._v("one-way(单向)")]),e._v(" "),d("el-radio",{attrs:{label:"none"}},[e._v("none(不关联）")])],1)],1),e._v(" "),d("ue-tree-field",{attrs:{data:e.data,"check-mode":e.checkMode},model:{value:e.nodeIds,callback:function(l){e.nodeIds=l},expression:"nodeIds"}}),e._v("\n  "+e._s(e.nodeIds)+"\n")],1)},[],!1,null,null,null);l.default=i.exports}}]);