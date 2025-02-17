"use strict";(self.webpackChunkconstraTech=self.webpackChunkconstraTech||[]).push([[508],{508:(X,u,a)=>{a.r(u),a.d(u,{GalleryModule:()=>A});var m=a(177),p=a(803),g=a(8359),h=a(5668),_=a(8032),r=a.n(_),t=a(7705),f=a(7886),v=a(7377),c=a(9417),d=a(2510);function b(i,o){1&i&&(t.j41(0,"div",10)(1,"div",11)(2,"span",12),t.EFF(3,"Loading..."),t.k0s()()())}function I(i,o){1&i&&(t.j41(0,"div",13),t.EFF(1," We encountered an issue while fetching the requested data. Please try again later. If the issue persists, contact support. "),t.k0s())}function y(i,o){if(1&i&&(t.j41(0,"ng-option",21),t.EFF(1),t.k0s()),2&i){const e=o.$implicit;t.Y8G("value",e),t.R7$(1),t.SpI(" ",e," ")}}function G(i,o){1&i&&(t.j41(0,"div")(1,"p",22),t.EFF(2,"Currently, there is no information to show."),t.k0s()())}function C(i,o){if(1&i&&t.nrm(0,"img",30),2&i){const e=t.XpG().$implicit,n=t.XpG(2);t.Y8G("src",n.apiUrl+e.filename,t.B4B)}}function x(i,o){if(1&i&&t.nrm(0,"video",31),2&i){const e=t.XpG().$implicit,n=t.XpG(2);t.Y8G("src",n.apiUrl+e.filename,t.B4B)}}function F(i,o){if(1&i){const e=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,l=t.XpG(2);return t.Njj(l.updateImageStatus("Inactive",s._id))}),t.EFF(1,"Deactivate"),t.k0s()}}function j(i,o){if(1&i){const e=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,l=t.XpG(2);return t.Njj(l.updateImageStatus("Active",s._id))}),t.EFF(1,"Activate"),t.k0s()}}function S(i,o){if(1&i){const e=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,l=t.XpG(2);return t.Njj(l.updateImageHighlight(!1,s._id))}),t.EFF(1,"Unhighlight"),t.k0s()}}function E(i,o){if(1&i){const e=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(e);const s=t.XpG().$implicit,l=t.XpG(2);return t.Njj(l.updateImageHighlight(!0,s._id))}),t.EFF(1,"Highlight"),t.k0s()}}const k=function(i){return{"bg-green":i}},$=function(i,o){return{"text-success":i,"text-secondary":o}};function T(i,o){if(1&i&&(t.j41(0,"div",23)(1,"div",24),t.qex(2),t.DNE(3,C,1,1,"img",25),t.DNE(4,x,1,1,"video",26),t.bVm(),t.j41(5,"p",27),t.EFF(6),t.k0s(),t.j41(7,"div",28),t.DNE(8,F,2,0,"button",29),t.DNE(9,j,2,0,"button",29),t.DNE(10,S,2,0,"button",29),t.DNE(11,E,2,0,"button",29),t.k0s()()()),2&i){const e=o.$implicit,n=t.XpG(2);t.R7$(1),t.Y8G("ngClass",t.eq3(10,k,"Active"==e.status)),t.R7$(2),t.Y8G("ngIf","image"==n.isImageOrVideo(n.apiUrl+e.filename)),t.R7$(1),t.Y8G("ngIf","video"==n.isImageOrVideo(n.apiUrl+e.filename)),t.R7$(1),t.Y8G("ngClass",t.l_i(12,$,"Active"==e.status,"Inactive"==e.status)),t.R7$(1),t.Lme(" ",e.status," ",e.highlights?" - highlighted":""," "),t.R7$(2),t.Y8G("ngIf","Active"==e.status),t.R7$(1),t.Y8G("ngIf","Inactive"==e.status),t.R7$(1),t.Y8G("ngIf",e.highlights),t.R7$(1),t.Y8G("ngIf",!e.highlights)}}function N(i,o){if(1&i){const e=t.RV6();t.j41(0,"div",14)(1,"div")(2,"div",15)(3,"label",16),t.EFF(4," Filter by status: "),t.k0s(),t.j41(5,"ng-select",17),t.bIt("ngModelChange",function(s){t.eBV(e);const l=t.XpG();return t.Njj(l.FilterStatus=s)})("change",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.onChangeFilter())}),t.DNE(6,y,2,2,"ng-option",18),t.k0s()(),t.DNE(7,G,3,0,"div",19),t.k0s(),t.DNE(8,T,12,15,"div",20),t.k0s()}if(2&i){const e=t.XpG();t.R7$(5),t.Y8G("ngModel",e.FilterStatus),t.R7$(1),t.Y8G("ngForOf",e.statusList),t.R7$(1),t.Y8G("ngIf",0==e.ImagesList.length),t.R7$(1),t.Y8G("ngForOf",e.ImagesList)}}function R(i,o){if(1&i){const e=t.RV6();t.j41(0,"div",33)(1,"p",34),t.EFF(2,"New Gallery"),t.k0s(),t.j41(3,"form",35,36),t.bIt("ngSubmit",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.addPhoto())}),t.j41(5,"div",37)(6,"label",38),t.EFF(7,"Select media "),t.k0s(),t.j41(8,"input",39),t.bIt("change",function(s){t.eBV(e);const l=t.XpG();return t.Njj(l.uploadImage(s))}),t.k0s()(),t.j41(9,"div",40)(10,"button",41),t.EFF(11,"submit"),t.k0s()()()()}if(2&i){const e=t.sdS(4),n=t.XpG();t.R7$(10),t.Y8G("disabled",e.invalid||!n.file)}}const w=[{path:"",component:(()=>{class i{constructor(e,n){this.modalServices=e,this.galleryServices=n,this.isLoading=!0,this.isError=!1,this.ImagesList=[],this.tempImagesList=[],this.apiUrl=h.p.apiUrl,this.statusList=["Inactive","Active"],this.newPhotoSubscription=new g.yU,this.allImagesSubscription=new g.yU,this.updateImageSubscription=new g.yU,this.updateImageStatusSubscription=new g.yU}openModal(e){this.modalServices.open(e,{centered:!0,size:"lg"})}uploadImage(e){this.file=e.target.files[0]}onChangeFilter(){this.ImagesList=this.FilterStatus?this.tempImagesList.filter(e=>e.status==this.FilterStatus):this.tempImagesList}isImageOrVideo(e){const l=e.toLowerCase().slice(2+(e.lastIndexOf(".")-1>>>0));return[".jpg",".jpeg",".png",".gif",".bmp",".webp"].includes(`.${l}`)?"image":[".mp4",".webm",".ogg",".avi",".mov",".mkv"].includes(`.${l}`)?"video":"unknown"}addPhoto(){const e=new FormData;e.append("file",this.file,this.file.name),this.newPhotoSubscription=this.galleryServices.addNewPhoto(e).subscribe(n=>{r().fire({title:n.message,icon:"success"}).then(()=>{this.modalServices.dismissAll(),this.file=null,this.getAllImages()})},n=>{console.log("addPhoto err: ",n),r().fire({title:"Error",icon:"error"}).then(()=>{this.modalServices.dismissAll(),this.file=null,this.getAllImages()})})}getAllImages(){this.isLoading=!0,this.isError=!1,this.ImagesList=[],this.tempImagesList=[],this.allImagesSubscription=this.galleryServices.getAllImages().subscribe(e=>{this.ImagesList=e.result,this.tempImagesList=e.result,this.onChangeFilter(),this.isLoading=!1,this.isError=!1},e=>{console.log("getAllImages err: ",e),this.isLoading=!1,this.isError=!0})}updateImageStatus(e,n){this.updateImageSubscription=this.galleryServices.updateImageStatus({_id:n,status:e}).subscribe(s=>{r().fire({title:s.message,icon:"success"}).then(()=>{this.modalServices.dismissAll(),this.getAllImages()})},s=>{console.log(s),r().fire({title:"Error",icon:"error"}).then(()=>{this.modalServices.dismissAll(),this.getAllImages()})})}updateImageHighlight(e,n){this.updateImageStatusSubscription=this.galleryServices.updateImageStatus({_id:n,highlights:e}).subscribe(s=>{r().fire({title:s.message,icon:"success"}).then(()=>{this.modalServices.dismissAll(),this.getAllImages()})},s=>{console.log(s),r().fire({title:"Error",icon:"error"}).then(()=>{this.modalServices.dismissAll(),this.getAllImages()})})}ngOnInit(){this.getAllImages()}ngOnDestroy(){this.newPhotoSubscription.unsubscribe(),this.allImagesSubscription.unsubscribe(),this.updateImageSubscription.unsubscribe(),this.updateImageStatusSubscription.unsubscribe()}static{this.\u0275fac=function(n){return new(n||i)(t.rXU(f.Bq),t.rXU(v.x))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-gallery"]],decls:14,vars:3,consts:[[1,"p-3"],[1,"d-flex","justify-content-between"],[1,"h2"],[1,"align-content-center"],[1,"px-2","py-1",3,"click"],[1,"fa-regular","fa-image"],["class","d-flex justify-content-center",4,"ngIf"],["class","text-center text-danger fs-small",4,"ngIf"],["class","row",4,"ngIf"],["newPhotoContent",""],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"text-center","text-danger","fs-small"],[1,"row"],[1,"w-50"],["for",""],["name","status",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","col-md-4 col-sm-12 my-2",4,"ngFor","ngForOf"],[3,"value"],[1,"text-secondary","text-center","fs-small","py-3"],[1,"col-md-4","col-sm-12","my-2"],[1,"img-container","m-1","p-1","h-100",3,"ngClass"],["alt","",3,"src",4,"ngIf"],["alt","","style","max-width: 100%;","controls","","preload","none",3,"src",4,"ngIf"],[1,"text-center","my-2","fw-bold",3,"ngClass"],[1,"text-center"],["class","mx-2",3,"click",4,"ngIf"],["alt","",3,"src"],["alt","","controls","","preload","none",2,"max-width","100%",3,"src"],[1,"mx-2",3,"click"],[1,"p-3","bg-white"],[1,"h3"],[3,"ngSubmit"],["newPhotForm","ngForm"],[1,"my-3"],["for","photo",1,"label-form","text-secondary"],["type","file","name","photo","id","photo","accept","image/*|video/*","required","",1,"form-control",3,"change"],[1,"text-center","my-3"],["type","submit",3,"disabled"]],template:function(n,s){if(1&n){const l=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"p",2),t.EFF(3,"Gallery"),t.k0s(),t.j41(4,"div",3)(5,"button",4),t.bIt("click",function(){t.eBV(l);const V=t.sdS(13);return t.Njj(s.openModal(V))}),t.EFF(6,"New "),t.nrm(7,"i",5),t.k0s()()(),t.j41(8,"div"),t.DNE(9,b,4,0,"div",6),t.DNE(10,I,2,0,"div",7),t.DNE(11,N,9,4,"div",8),t.k0s()(),t.DNE(12,R,12,1,"ng-template",null,9,t.C5r)}2&n&&(t.R7$(9),t.Y8G("ngIf",s.isLoading),t.R7$(1),t.Y8G("ngIf",s.isError),t.R7$(1),t.Y8G("ngIf",!s.isLoading&&!s.isError))},dependencies:[m.YU,m.Sq,m.bT,c.qT,c.BC,c.cb,c.vS,c.cV,d.vr,d.xt],styles:["img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:300px}.img-container[_ngcontent-%COMP%]{border:2px solid #d3d2d2;border-radius:6px;overflow:hidden;justify-items:center}button[_ngcontent-%COMP%]{background-color:var(--constraTech-dark-blue);border:var(--constraTech-dark-blue);color:#fff;border-radius:5px}.deactivate-btn[_ngcontent-%COMP%]{background-color:gray!important}.activate-btn[_ngcontent-%COMP%]{background-color:#008330!important}.bg-green[_ngcontent-%COMP%]{border-color:#008330!important}"]})}}return i})()}];let L=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[p.iI.forChild(w),p.iI]})}}return i})(),A=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[m.MD,c.YN,d.MQ,L]})}}return i})()}}]);