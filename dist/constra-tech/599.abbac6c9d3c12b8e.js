"use strict";(self.webpackChunkconstraTech=self.webpackChunkconstraTech||[]).push([[599],{2599:(P,h,s)=>{s.r(h),s.d(h,{WallofhonorModule:()=>$});var c=s(177),u=s(803),f=s(5668),g=s(8032),m=s.n(g),t=s(7705),_=s(7377),v=s(7886),a=s(9417),p=s(2510),d=s(9115);function b(e,r){1&e&&(t.j41(0,"div",10)(1,"div",11)(2,"span",12),t.EFF(3,"Loading..."),t.k0s()()())}function x(e,r){1&e&&(t.j41(0,"div",13),t.EFF(1," We encountered an issue while fetching the requested data. Please try again later. If the issue persists, contact support. "),t.k0s())}function F(e,r){1&e&&(t.j41(0,"div")(1,"p",15),t.EFF(2,"Currently, there is no information to show."),t.k0s()())}function C(e,r){if(1&e&&t.nrm(0,"img",28),2&e){const n=t.XpG().$implicit,o=t.XpG(3);t.Y8G("src",o.apiUrl+"img/uploads/honors/"+n.file_name,t.B4B)}}function j(e,r){if(1&e&&t.nrm(0,"video",29),2&e){const n=t.XpG().$implicit,o=t.XpG(3);t.Y8G("src",o.apiUrl+n.file_name,t.B4B)}}function k(e,r){if(1&e){const n=t.RV6();t.j41(0,"a",30),t.bIt("click",function(){t.eBV(n);const i=t.XpG().$implicit,l=t.XpG(3);return t.Njj(l.updateHonor(i._id,"Active"))}),t.j41(1,"p",31),t.EFF(2,"Activate "),t.k0s()()}}function E(e,r){if(1&e){const n=t.RV6();t.j41(0,"a",30),t.bIt("click",function(){t.eBV(n);const i=t.XpG().$implicit,l=t.XpG(3);return t.Njj(l.updateHonor(i._id,"Inactive"))}),t.j41(1,"p",31),t.EFF(2,"Deactivate"),t.k0s()()}}const I=function(e,r){return{"text-success":e,"text-secondary":r}};function M(e,r){if(1&e&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td",20),t.EFF(6),t.k0s(),t.j41(7,"td"),t.DNE(8,C,1,1,"img",21),t.DNE(9,j,1,1,"video",22),t.k0s(),t.j41(10,"td",23)(11,"button",24),t.nrm(12,"i",25),t.k0s(),t.j41(13,"mat-menu",null,26),t.DNE(15,k,3,0,"a",27),t.DNE(16,E,3,0,"a",27),t.k0s()()()),2&e){const n=r.$implicit,o=t.sdS(14),i=t.XpG(3);t.R7$(2),t.JRh(n.name),t.R7$(2),t.JRh(n.url),t.R7$(1),t.Y8G("ngClass",t.l_i(9,I,"Active"==n.status,"Inactive"==n.status)),t.R7$(1),t.SpI(" ",n.status,""),t.R7$(2),t.Y8G("ngIf","image"==i.isImageOrVideo(i.apiUrl+n.file_name)),t.R7$(1),t.Y8G("ngIf","video"==i.isImageOrVideo(i.apiUrl+"img/uploads/honors/"+n.file_name)),t.R7$(2),t.Y8G("matMenuTriggerFor",o),t.R7$(4),t.Y8G("ngIf","Inactive"==n.status),t.R7$(1),t.Y8G("ngIf","Active"==n.status)}}function y(e,r){if(1&e&&(t.j41(0,"table",16)(1,"thead")(2,"tr")(3,"th",17),t.EFF(4,"Name"),t.k0s(),t.j41(5,"th",17),t.EFF(6,"URL"),t.k0s(),t.j41(7,"th",17),t.EFF(8,"Status"),t.k0s(),t.j41(9,"th",17),t.EFF(10,"File"),t.k0s(),t.nrm(11,"th",18),t.k0s()(),t.j41(12,"tbody"),t.DNE(13,M,17,12,"tr",19),t.k0s()()),2&e){const n=t.XpG(2);t.R7$(13),t.Y8G("ngForOf",n.honorsList)}}function G(e,r){if(1&e&&(t.j41(0,"div")(1,"div"),t.DNE(2,F,3,0,"div",8),t.k0s(),t.DNE(3,y,14,1,"table",14),t.k0s()),2&e){const n=t.XpG();t.R7$(2),t.Y8G("ngIf",0==n.honorsList.length),t.R7$(1),t.Y8G("ngIf",n.honorsList.length>0)}}function O(e,r){if(1&e){const n=t.RV6();t.j41(0,"div",32)(1,"p",33),t.EFF(2,"New"),t.k0s(),t.j41(3,"form",34,35),t.bIt("ngSubmit",function(){t.eBV(n);const i=t.sdS(4),l=t.XpG();return t.Njj(l.newHonor(i))}),t.j41(5,"div",36)(6,"label",37),t.EFF(7,"Name"),t.k0s(),t.nrm(8,"input",38,39),t.k0s(),t.j41(10,"div",36)(11,"label",40),t.EFF(12,"URL"),t.k0s(),t.nrm(13,"input",41,42),t.k0s(),t.j41(15,"div",36)(16,"label",43),t.EFF(17," status: "),t.k0s(),t.j41(18,"ng-select",44,45)(20,"ng-option",46),t.EFF(21," Active "),t.k0s(),t.j41(22,"ng-option",47),t.EFF(23," Inactive "),t.k0s()()(),t.j41(24,"div",36)(25,"label",48),t.EFF(26,"Select media"),t.k0s(),t.j41(27,"input",49),t.bIt("change",function(i){t.eBV(n);const l=t.XpG();return t.Njj(l.uploadImage(i))}),t.k0s()(),t.j41(28,"div",50)(29,"button",51),t.EFF(30,"submit"),t.k0s()()()()}if(2&e){const n=t.sdS(4),o=t.XpG();t.R7$(29),t.Y8G("disabled",n.invalid||!o.file)}}const R=[{path:"",component:(()=>{class e{constructor(n,o){this.honorsServices=n,this.modalServices=o,this.isLoading=!0,this.isError=!1,this.honorsList=[],this.apiUrl=f.p.apiUrl}openModal(n){this.modalServices.open(n,{centered:!0,size:"lg"})}uploadImage(n){this.file=n.target.files[0]}newHonor(n){console.log(n.value);const o=new FormData;o.append("name",n.value.h_name),o.append("url",n.value.url),o.append("status",n.value.status),o.append("file",this.file,this.file.name),this.honorsServices.newHonor(o).subscribe(i=>{console.log(i),m().fire({title:i.message,icon:"success"}).then(()=>{n.reset(),this.getAllHonors(),this.modalServices.dismissAll()})},i=>{console.log(i),m().fire({title:"Error",icon:"error"}).then(()=>{n.reset(),this.getAllHonors(),this.modalServices.dismissAll()})})}isImageOrVideo(n){const l=n.toLowerCase().slice(2+(n.lastIndexOf(".")-1>>>0));return[".jpg",".jpeg",".png",".gif",".bmp",".webp"].includes(`.${l}`)?"image":[".mp4",".webm",".ogg",".avi",".mov",".mkv"].includes(`.${l}`)?"video":"unknown"}updateHonor(n,o){this.honorsServices.updateHonor(n,{status:o}).subscribe(i=>{m().fire({title:i.message,icon:"success"}).then(()=>{this.getAllHonors(),this.modalServices.dismissAll()})},i=>{m().fire({title:"Error",icon:"error"}).then(()=>{this.getAllHonors(),this.modalServices.dismissAll()})})}getAllHonors(){this.isLoading=!0,this.isError=!1,this.honorsServices.getAllHonors().subscribe(n=>{console.log(n),this.honorsList=n.result,this.isLoading=!1,this.isError=!1},n=>{console.log(n),this.isLoading=!1,this.isError=!0})}ngOnInit(){this.getAllHonors()}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(_.x),t.rXU(v.Bq))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-wallofhonor"]],decls:14,vars:3,consts:[[1,"p-3"],[1,"d-flex","justify-content-between"],[1,"h2"],[1,"align-content-center"],[1,"px-2","py-1","my-btn",3,"click"],[1,"fa-regular","fa-honor"],["class","d-flex justify-content-center",4,"ngIf"],["class","text-center text-danger fs-small",4,"ngIf"],[4,"ngIf"],["newPhotoContent",""],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"text-center","text-danger","fs-small"],["class","table table-bordered table-hover",4,"ngIf"],[1,"text-secondary","text-center","fs-small","py-3"],[1,"table","table-bordered","table-hover"],[1,"col-3"],[1,"col-1"],[4,"ngFor","ngForOf"],[3,"ngClass"],["alt","",3,"src",4,"ngIf"],["alt","","style","max-width: 100%;","controls","","preload","none",3,"src",4,"ngIf"],[2,"text-align","center","align-content","center"],["mat-icon-button","","aria-label","Example icon-button with a menu",1,"fs-small","m-0","p-0",3,"matMenuTriggerFor"],[1,"fa-solid","fa-chevron-down"],["menu","matMenu"],["id","item1","class"," p-0 m-0 h-100 d-block px-1","mat-menu-item","",3,"click",4,"ngIf"],["alt","",3,"src"],["alt","","controls","","preload","none",2,"max-width","100%",3,"src"],["id","item1","mat-menu-item","",1,"p-0","m-0","h-100","d-block","px-1",3,"click"],["id","mat-item-cutom",1,"px-1","p-0","m-0",2,"font-weight","500"],[1,"p-3","bg-white"],[1,"h3"],[3,"ngSubmit"],["newPhotForm","ngForm"],[1,"my-3"],["for","h_name",1,"label-form","text-secondary"],["type","text","name","h_name","id","h_name","ngModel","","required","",1,"form-control"],["h_name","ngModel"],["for","url",1,"label-form","text-secondary"],["type","text","name","url","id","url","ngModel","","required","",1,"form-control"],["url","ngModel"],["for",""],["name","status","ngModel",""],["status","ngModel"],["value","Active"],["value","Inactive"],["for","photo",1,"label-form","text-secondary"],["type","file","name","photo","id","photo","accept","image/*|video/*","required","",1,"form-control",3,"change"],[1,"text-center","my-3"],["type","submit",1,"my-btn",3,"disabled"]],template:function(o,i){if(1&o){const l=t.RV6();t.j41(0,"div",0)(1,"div",1)(2,"p",2),t.EFF(3,"Wall of Honor"),t.k0s(),t.j41(4,"div",3)(5,"button",4),t.bIt("click",function(){t.eBV(l);const W=t.sdS(13);return t.Njj(i.openModal(W))}),t.EFF(6,"New "),t.nrm(7,"i",5),t.k0s()()(),t.j41(8,"div"),t.DNE(9,b,4,0,"div",6),t.DNE(10,x,2,0,"div",7),t.DNE(11,G,4,2,"div",8),t.k0s()(),t.DNE(12,O,31,1,"ng-template",null,9,t.C5r)}2&o&&(t.R7$(9),t.Y8G("ngIf",i.isLoading),t.R7$(1),t.Y8G("ngIf",i.isError),t.R7$(1),t.Y8G("ngIf",!i.isLoading&&!i.isError))},dependencies:[c.YU,c.Sq,c.bT,a.qT,a.me,a.BC,a.cb,a.YS,a.vS,a.cV,p.vr,p.xt,d.kk,d.fb,d.Cp],styles:["img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:300px}.img-container[_ngcontent-%COMP%]{border:2px solid #d3d2d2;border-radius:6px;overflow:hidden;justify-items:center}button[_ngcontent-%COMP%]{border:0;background-color:transparent}.my-btn[_ngcontent-%COMP%]{background-color:var(--constraTech-dark-blue);border:var(--constraTech-dark-blue);color:#fff;border-radius:5px}.deactivate-btn[_ngcontent-%COMP%]{background-color:gray!important}.activate-btn[_ngcontent-%COMP%]{background-color:#008330!important}.bg-green[_ngcontent-%COMP%]{border-color:#008330!important}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-size:small}td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:200px;max-height:100px}.mat-mdc-icon-button[_ngcontent-%COMP%]   .mat-mdc-button-touch-target[_ngcontent-%COMP%]{top:0%!important;height:0!important;left:0!important;width:0!important}.mat-mdc-menu-item[_ngcontent-%COMP%]{min-height:100%}#mat-item-cutom[_ngcontent-%COMP%]{font-size:13px!important}#item1[_ngcontent-%COMP%]:hover{color:#00f}.mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 20px}"]})}}return e})()}];let T=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[u.iI.forChild(R),u.iI]})}}return e})(),$=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[c.MD,a.YN,p.MQ,d.Cn,T]})}}return e})()}}]);