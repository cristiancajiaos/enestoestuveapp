(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dwTM:function(t,n,e){"use strict";e.r(n),e.d(n,"TagsModule",(function(){return m}));var a=e("oOf3"),i=e("1kSV"),s=e("PCNd"),o=e("ofXK"),r=e("tyNb"),c=e("fXoL"),g=e("TyVa"),p=e("WBhQ");function b(t,n){1&t&&c.Sb(0,"app-post",10),2&t&&c.pc("post",n.$implicit)("showMore",!1)}const u=function(t,n){return{itemsPerPage:t,currentPage:n}};function l(t,n){if(1&t){const t=c.Xb();c.Wb(0,"div"),c.Fc(1,b,1,2,"app-post",7),c.kc(2,"paginate"),c.Wb(3,"div",8),c.Wb(4,"pagination-controls",9),c.hc("pageChange",(function(n){return c.zc(t),c.jc().onPageChange(n)})),c.Vb(),c.Vb(),c.Vb()}if(2&t){const t=c.jc();c.Fb(1),c.pc("ngForOf",c.mc(2,1,t.posts,c.uc(4,u,t.maxItemsPerPage,t.page)))}}function f(t,n){1&t&&(c.Sb(0,"i",11),c.Hc(1," Cargando... "))}const h=[{path:":tag",component:(()=>{class t{constructor(t,n,e,a){this.activatedRoute=t,this.post=n,this.router=e,this.window=a,this.maxItemsPerPage=6,this.navigationSubscription=this.router.events.subscribe(t=>{t instanceof r.b&&this.initialiseInvites()})}ngOnInit(){}initialiseInvites(){this.activatedRoute.params.subscribe(t=>{this.page=1,t.tag&&(this.tag=this.setCleanTag(t.tag),this.post.getPostsByTag(this.tag).subscribe(t=>{this.posts=t}))}),this.navigationSubscription.unsubscribe()}setCleanTag(t){return t.replace(/\+/g," ")}onPageChange(t){this.page=t,this.window.scrollTo({top:0})}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(c.Rb(r.a),c.Rb(g.a),c.Rb(r.c),c.Rb(Window))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-tags"]],decls:13,vars:3,consts:[[1,"tags"],[1,"tags-title"],[1,"text-uppercase","font-weight-bold"],[1,"fa","fa-tags"],[1,"tags-content"],[4,"ngIf","ngIfElse"],["loading",""],[3,"post","showMore",4,"ngFor","ngForOf"],[1,"pagination","d-flex","justify-content-center","align-items-center"],["previousLabel","Anterior","nextLabel","Siguiente","screenReaderPaginationLabel","Paginaci\xf3n","screenReaderPageLabel","P\xe1gina","responsive","true","autoHide","true",3,"pageChange"],[3,"post","showMore"],[1,"fas","fa-spinner","fa-spin","fa-fw"]],template:function(t,n){if(1&t&&(c.Wb(0,"section",0),c.Wb(1,"section",1),c.Wb(2,"h1",2),c.Sb(3,"i",3),c.Hc(4," Tags:"),c.Sb(5,"br"),c.Wb(6,"small"),c.Hc(7),c.Vb(),c.Vb(),c.Vb(),c.Sb(8,"hr"),c.Wb(9,"section",4),c.Fc(10,l,5,7,"div",5),c.Fc(11,f,2,0,"ng-template",null,6,c.Gc),c.Vb(),c.Vb()),2&t){const t=c.xc(12);c.Fb(7),c.Ic(n.tag),c.Fb(3),c.pc("ngIf",n.posts)("ngIfElse",t)}},directives:[o.l,o.k,a.c,p.a],pipes:[a.b],styles:[".tags{margin-bottom:1rem}.tags .pagination ul{padding-inline-start:0;text-transform:uppercase}.tags .pagination ul li.current{background-color:#000}.tags .pagination ul li a{transition:background-color .1s linear}"],encapsulation:2}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(n){return new(n||t)},imports:[[r.f.forChild(h)],r.f]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(n){return new(n||t)},imports:[[o.b,d,s.a,i.b,a.a]]}),t})()}}]);