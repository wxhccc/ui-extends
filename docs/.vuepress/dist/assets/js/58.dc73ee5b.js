(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{460:function(e,o,t){"use strict";t.r(o);var n={data:()=>({loading:!1,lock:!1,appendToBody:!1}),methods:{loadingHandle(){this.loading=!0,window.setTimeout(()=>{this.loading=!1},2e3)}}},a=t(1),l=Object(a.a)(n,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("p",[e._v("是否添加到body："),t("el-switch",{attrs:{"active-text":"是","inactive-text":"否"},model:{value:e.appendToBody,callback:function(o){e.appendToBody=o},expression:"appendToBody"}})],1),e._v(" "),e.appendToBody?t("p",[e._v("是否锁滚动："),t("el-switch",{attrs:{"active-text":"是","inactive-text":"否"},model:{value:e.lock,callback:function(o){e.lock=o},expression:"lock"}})],1):e._e(),e._v(" "),t("el-button",{on:{click:e.loadingHandle}},[e._v("加载")]),e._v(" "),t("br"),t("br"),e._v(" "),e.loading?t("ue-loading",{attrs:{body:e.appendToBody,lock:e.appendToBody&&e.lock,background:"rgba(0,0,0,0.6)",text:"加载中..."}}):e._e()],1)},[],!1,null,null,null);o.default=l.exports}}]);