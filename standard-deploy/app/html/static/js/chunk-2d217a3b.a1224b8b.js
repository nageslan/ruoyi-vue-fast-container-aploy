(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a3b"],{c81a:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-dialog",e._g(e._b({attrs:{"close-on-click-modal":!1,"modal-append-to-body":!1},on:{open:e.onOpen,close:e.onClose}},"el-dialog",e.$attrs,!1),e.$listeners),[t("el-row",{attrs:{gutter:0}},[t("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"small","label-width":"100px"}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"选项名",prop:"label"}},[t("el-input",{attrs:{placeholder:"请输入选项名",clearable:""},model:{value:e.formData.label,callback:function(a){e.$set(e.formData,"label",a)},expression:"formData.label"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"选项值",prop:"value"}},[t("el-input",{attrs:{placeholder:"请输入选项值",clearable:""},model:{value:e.formData.value,callback:function(a){e.$set(e.formData,"value",a)},expression:"formData.value"}},[t("el-select",{style:{width:"100px"},attrs:{slot:"append"},slot:"append",model:{value:e.dataType,callback:function(a){e.dataType=a},expression:"dataType"}},e._l(e.dataTypeOptions,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value,disabled:e.disabled}})})),1)],1)],1)],1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handelConfirm}},[e._v(" 确定 ")]),t("el-button",{on:{click:e.close}},[e._v(" 取消 ")])],1)],1)],1)},o=[],r=t("ed08"),n={components:{},inheritAttrs:!1,props:[],data:function(){return{id:100,formData:{label:void 0,value:void 0},rules:{label:[{required:!0,message:"请输入选项名",trigger:"blur"}],value:[{required:!0,message:"请输入选项值",trigger:"blur"}]},dataType:"string",dataTypeOptions:[{label:"字符串",value:"string"},{label:"数字",value:"number"}]}},computed:{},watch:{"formData.value":function(e){this.dataType=Object(r["e"])(e)?"number":"string"}},created:function(){},mounted:function(){},methods:{onOpen:function(){this.formData={label:void 0,value:void 0}},onClose:function(){},close:function(){this.$emit("update:visible",!1)},handelConfirm:function(){var e=this;this.$refs.elForm.validate((function(a){a&&("number"===e.dataType&&(e.formData.value=parseFloat(e.formData.value)),e.formData.id=e.id++,e.$emit("commit",e.formData),e.close())}))}}},s=n,i=t("2877"),u=Object(i["a"])(s,l,o,!1,null,null,null);a["default"]=u.exports}}]);