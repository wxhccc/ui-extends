(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{128:function(t,a,i){},427:function(t,a,i){"use strict";var e=i(128);i.n(e).a},436:function(t,a,i){"use strict";i.r(a);var e={data:()=>({loading:!1,hasTotal:!1,listData:[],total:0}),created(){this.getApiData()},computed:{totalProps(){return this.hasTotal?{total:this.total}:{}}},methods:{getApiData(){this.loading=!0,setTimeout(()=>{this.listData.push(...this.createMockData()),this.total=10,this.loading=!1},2e3)},createMockData:()=>Array(8).fill(0).map(()=>({nick:Math.random().toString(33).substring(2),description:Math.random().toString(16).substring(2)}))}},s=(i(427),i(1)),l=Object(s.a)(e,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("el-switch",{attrs:{"active-text":"有total","inactive-text":"无total"},model:{value:t.hasTotal,callback:function(a){t.hasTotal=a},expression:"hasTotal"}}),t._v(" "),i("ue-waterfall-pane",t._b({key:t.hasTotal,staticClass:"demo-base",staticStyle:{height:"200px"},attrs:{loading:t.loading,data:t.listData,load:t.getApiData},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.data;return[i("ul",{staticClass:"list",staticStyle:{margin:"0"}},t._l(e,function(a){return i("li",{key:e.nick},[i("p",[t._v("昵称："+t._s(a.nick))]),t._v(" "),i("p",[t._v("描述："+t._s(a.description))])])}),0)]}}])},"ue-waterfall-pane",t.totalProps,!1))],1)},[],!1,null,null,null);a.default=l.exports}}]);