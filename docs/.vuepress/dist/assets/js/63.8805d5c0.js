(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{454:function(t,a,e){"use strict";e.r(a);var i={data:()=>({loading:!1,columns:[{prop:"id",label:"Id"},{prop:"title",label:"标题"},{prop:"description",label:"描述"}],data:{}}),methods:{getPagedData(t){console.log(t),this.loading=!0,setTimeout(()=>{this.data={rows:this.getRemoteMockData(t),total:200},this.loading=!1},1500)},getRemoteMockData(t){const{page:a,size:e,title:i,description:o}=t;return Array(e||10).fill(0).map((t,n)=>{const s=Math.random();return{id:(a-1)*e+n+1,title:i+s.toString(26).substring(2),description:o+s.toString(34).substring(2)+s.toString(32)}})}}},o=e(1),n=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("ue-paged-table",{attrs:{loading:this.loading,columns:this.columns,"paged-data":this.data,"get-paged-data":this.getPagedData,height:"300","init-data":{pageSize:10},"created-auto-send":""}})},[],!1,null,null,null);a.default=n.exports}}]);