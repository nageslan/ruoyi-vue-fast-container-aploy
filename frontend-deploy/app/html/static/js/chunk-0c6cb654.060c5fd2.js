(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c6cb654","chunk-555e0949"],{"106f":function(e,t,i){"use strict";i.r(t);var l=i("87d4"),a=i.n(l);t["default"]={bg1:a.a}},"3be1":function(e,t,i){"use strict";i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"b",(function(){return o}));var l=i("b775");function a(e){return Object(l["a"])({url:"/fileInfo/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/fileInfo/"+e,method:"get"})}function r(e){return Object(l["a"])({url:"/fileInfo",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/fileInfo",method:"put",data:e})}function o(e){return Object(l["a"])({url:"/fileInfo/"+e,method:"delete"})}},"44b2":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[i("el-form-item",{attrs:{label:"文件名称",prop:"fileOriginName"}},[i("el-input",{attrs:{placeholder:"请输入文件名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.fileOriginName,callback:function(t){e.$set(e.queryParams,"fileOriginName",t)},expression:"queryParams.fileOriginName"}})],1),i("el-form-item",{attrs:{label:"文件类型",prop:"fileSuffix"}},[i("el-input",{attrs:{placeholder:"请输入文件类型，例如txt",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.fileSuffix,callback:function(t){e.$set(e.queryParams,"fileSuffix",t)},expression:"queryParams.fileSuffix"}})],1),i("el-form-item",{attrs:{label:"存储名称",prop:"fileObjectName"}},[i("el-input",{attrs:{placeholder:"请输入存储文件名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.fileObjectName,callback:function(t){e.$set(e.queryParams,"fileObjectName",t)},expression:"queryParams.fileObjectName"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),i("el-row",{staticClass:"mb8",attrs:{gutter:10}},[i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["cms:fileInfo:add"],expression:"['cms:fileInfo:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-upload",size:"mini"},on:{click:e.uploadFile}},[e._v("上传文件")])],1),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["cms:fileInfo:remove"],expression:"['cms:fileInfo:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),i("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.fileInfoList},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{label:"图片预览",align:"center",prop:"pic"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("el-image",{staticStyle:{width:"120px",height:"60px"},attrs:{src:e.row.pic,lazy:"","preview-src-list":[e.row.pic]}})]}}])}),i("el-table-column",{attrs:{label:"文件名称",align:"center",prop:"fileOriginName"}}),i("el-table-column",{attrs:{label:"文件类型",align:"center",prop:"fileSuffix"}}),i("el-table-column",{attrs:{label:"文件大小",align:"center",prop:"fileSizeInfo"}}),i("el-table-column",{attrs:{label:"存储文件名称",align:"center",prop:"fileObjectName"}}),i("el-table-column",{attrs:{label:"创建者",align:"center",prop:"createBy"}}),i("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-download"},on:{click:function(i){return e.handleDownload(t.row)}}},[e._v("下载")]),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["cms:fileInfo:remove"],expression:"['cms:fileInfo:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),i("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[i("el-upload",{ref:"upload",staticStyle:{"min-height":"200px"},attrs:{limit:5,accept:".jpg, .png,.txt,.doc,.docx,.xls,.xlsx,.ppt,.zip,.pdf",action:e.upload.url,headers:e.upload.headers,"file-list":e.upload.fileList,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,"auto-upload":!1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",loading:e.upload.isUploading},on:{click:e.submitUpload}},[e._v("上传到服务器")]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png/txt/doc/docx/xls/xlsx/ppt/zip/pdf文件，且单个文件不超过50Mb")])],1)],1)],1)},a=[],n=i("5530"),r=(i("b0c0"),i("d81d"),i("3be1")),s=i("5f87"),o=i("106f"),u=i("4360"),c={name:"FileInfo",data:function(){return{loading:!0,ids:[],fileNames:[],single:!0,multiple:!0,showSearch:!0,total:0,fileInfoList:[],title:"",open:!1,upload:{isUploading:!1,headers:{Authorization:"Bearer "+Object(s["a"])()},url:"/prod-api/common/upload",fileList:[]},queryParams:{pageNum:1,pageSize:10,fileOriginName:null,fileSuffix:null,fileSizeInfo:null,fileObjectName:null,filePath:null,createBy:u["a"].getters.name},form:{},rules:{fileOriginName:[{required:!0,message:"文件名称不能为空",trigger:"blur"}],delFlag:[{required:!0,message:"是否删除：Y-被删除，N-未删除不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{handleDownload:function(e){var t=e.fileOriginName,i=e.filePath,l=(i.substring(i.lastIndexOf("."),i.length),document.createElement("a"));l.setAttribute("download",t),l.setAttribute("target","_blank"),l.setAttribute("href","/prod-api"+i),l.click()},getList:function(){var e=this;this.loading=!0,Object(r["d"])(this.queryParams).then((function(t){for(var i=0;i<t.rows.length;i++){var l=t.rows[i];switch(l.fileSuffix){case"png":case"jpg":case"jpeg":case"bmp":case"gif":t.rows[i].pic="/prod-api"+l.filePath;break;default:t.rows[i].pic=o["default"].bg1;break}}e.fileInfoList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={fileId:null,fileOriginName:null,fileSuffix:null,fileSizeInfo:null,fileObjectName:null,filePath:null,delFlag:null,createBy:u["a"].getters.name,createTime:null,updateBy:null,updateTime:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.fileId})),this.fileNames=e.map((function(e){return e.fileOriginName})),this.single=1!==e.length,this.multiple=!e.length},uploadFile:function(){this.reset(),this.open=!0,this.title="添加文件"},submitUpload:function(){this.$refs.upload.submit()},handleFileUploadProgress:function(e,t,i){this.upload.isUploading=!0},handleFileSuccess:function(e,t,i){this.upload.isUploading=!1,this.form.filePath=e.url,this.msgSuccess(e.msg)},handleAdd:function(){this.reset(),this.open=!0,this.title="添加文件管理"},handleUpdate:function(e){var t=this;this.reset();var i=e.fileId||this.ids;Object(r["c"])(i).then((function(e){t.form=e.data,t.open=!0,t.title="修改文件管理"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.fileId?Object(r["e"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(r["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,i=e.fileId||this.ids,l=e.fileOriginName||this.fileNames;this.$modal.confirm('是否确认删除文件名称为"'+l+'"的数据项？').then((function(){return Object(r["b"])(i)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("cms/fileInfo/export",Object(n["a"])({},this.queryParams),"fileInfo_".concat((new Date).getTime(),".xlsx"))}}},f=c,d=i("2877"),m=Object(d["a"])(f,l,a,!1,null,null,null);t["default"]=m.exports},"87d4":function(e,t,i){e.exports=i.p+"static/img/file.237863ab.png"}}]);