import{A as O,B as ut,a as ie,c as rt,d as lt,e as Ot,g as ct,h as dt,k as ht,l as ae,m as xt,n as Tt,q as Pt,r as ne,s as oe,t as z,u as H,v as he,x as me,y as pt,z as L}from"./chunk-MT7UC2IS.js";import{Ab as E,Bb as F,C as zt,D as B,Da as yt,Fb as Jt,Gb as Zt,Hb as Kt,J as Q,Jb as T,Kb as At,Lb as Xt,Ob as A,Pa as Ct,Qa as qt,Sa as _,Ta as c,U,Va as Gt,W as vt,Wb as te,Z as y,_ as J,a as v,aa as C,ab as bt,b as Lt,bb as V,ca as d,cb as Wt,d as m,da as f,e as S,ec as st,f as w,fa as b,fc as ee,g as W,ga as Z,gb as I,h as Rt,ha as K,ib as Yt,j as Bt,m as p,mb as j,n as Nt,na as X,nb as M,oa as tt,pb as Qt,pc as se,qa as Ht,qc as St,r as Vt,rb as Ut,rc as re,sa as D,sb as it,tb as at,tc as mt,ua as $t,ub as nt,va as et,vb as u,vc as le,wb as g,wc as ce,xa as N,xb as k,xc as de,yb as ot,z as Y,zb as Dt}from"./chunk-JGLNFT2U.js";function Se(n,t){}var P=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var jt=(()=>{let t=class t extends oe{constructor(i,e,a,s,l,r,h,x){super(),this._elementRef=i,this._focusTrapFactory=e,this._config=s,this._interactivityChecker=l,this._ngZone=r,this._overlayRef=h,this._focusMonitor=x,this._platform=f(ie),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=f(te),this._injector=f(D),this._isDestroyed=!1,this.attachDomPortal=_t=>{this._portalOutlet.hasAttached();let xe=this._portalOutlet.attachDomPortal(_t);return this._contentAttached(),xe},this._document=a,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(i){this._ariaLabelledByQueue.push(i),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(i){let e=this._ariaLabelledByQueue.indexOf(i);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(i){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(i);return this._contentAttached(),e}attachTemplatePortal(i){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(i);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(i,e){this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{i.removeEventListener("blur",a),i.removeEventListener("mousedown",a),i.removeAttribute("tabindex")};i.addEventListener("blur",a),i.addEventListener("mousedown",a)})),i.focus(e)}_focusByCssSelector(i,e){let a=this._elementRef.nativeElement.querySelector(i);a&&this._forceFocus(a,e)}_trapFocus(){this._isDestroyed||Yt(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let i=this._config.restoreFocus,e=null;if(typeof i=="string"?e=this._document.querySelector(i):typeof i=="boolean"?e=i?this._elementFocusedBeforeDialogWasOpened:null:i&&(e=i),this._config.restoreFocus&&e&&typeof e.focus=="function"){let a=rt(),s=this._elementRef.nativeElement;(!a||a===this._document.body||a===s||s.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let i=this._elementRef.nativeElement,e=rt();return i===e||i.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=rt()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};t.\u0275fac=function(e){return new(e||t)(c(N),c(dt),c(st,8),c(P),c(ct),c(et),c(L),c(ht))},t.\u0275cmp=b({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(e,a){if(e&1&&Jt(z,7),e&2){let s;Zt(s=Kt())&&(a._portalOutlet=s.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,a){e&2&&j("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},standalone:!0,features:[V,A],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,a){e&1&&I(0,Se,0,0,"ng-template",0)},dependencies:[z],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let n=t;return n})(),$=class{constructor(t,o){this.overlayRef=t,this.config=o,this.closed=new p,this.disableClose=o.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=o.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!lt(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=t.detachments().subscribe(()=>{o.closeOnOverlayDetachments!==!1&&this.close()})}close(t,o){if(this.containerInstance){let i=this.closed;this.containerInstance._closeInteractionType=o?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(t),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",o=""){return this.overlayRef.updateSize({width:t,height:o}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}},we=new C("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=f(O);return()=>n.scrollStrategies.block()}}),Ie=new C("DialogData"),je=new C("DefaultDialogConfig");var Me=0,Mt=(()=>{let t=class t{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(i,e,a,s,l,r){this._overlay=i,this._injector=e,this._defaultOptions=a,this._parentDialog=s,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p,this._afterOpenedAtThisLevel=new p,this._ariaHiddenElements=new Map,this.afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(U(void 0))),this._scrollStrategy=r}open(i,e){let a=this._defaultOptions||new P;e=v(v({},a),e),e.id=e.id||`cdk-dialog-${Me++}`,e.id&&this.getDialogById(e.id);let s=this._getOverlayConfig(e),l=this._overlay.create(s),r=new $(l,e),h=this._attachContainer(l,r,e);return r.containerInstance=h,this._attachDialogContent(i,r,h,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){wt(this.openDialogs,i=>i.close())}getDialogById(i){return this.openDialogs.find(e=>e.id===i)}ngOnDestroy(){wt(this._openDialogsAtThisLevel,i=>{i.config.closeOnDestroy===!1&&this._removeOpenDialog(i,!1)}),wt(this._openDialogsAtThisLevel,i=>i.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(i){let e=new me({positionStrategy:i.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:i.scrollStrategy||this._scrollStrategy(),panelClass:i.panelClass,hasBackdrop:i.hasBackdrop,direction:i.direction,minWidth:i.minWidth,minHeight:i.minHeight,maxWidth:i.maxWidth,maxHeight:i.maxHeight,width:i.width,height:i.height,disposeOnNavigation:i.closeOnNavigation});return i.backdropClass&&(e.backdropClass=i.backdropClass),e}_attachContainer(i,e,a){let s=a.injector||a.viewContainerRef?.injector,l=[{provide:P,useValue:a},{provide:$,useValue:e},{provide:L,useValue:i}],r;a.container?typeof a.container=="function"?r=a.container:(r=a.container.type,l.push(...a.container.providers(a))):r=jt;let h=new Pt(r,a.viewContainerRef,D.create({parent:s||this._injector,providers:l}),a.componentFactoryResolver);return i.attach(h).instance}_attachDialogContent(i,e,a,s){if(i instanceof Gt){let l=this._createInjector(s,e,a,void 0),r={$implicit:s.data,dialogRef:e};s.templateContext&&(r=v(v({},r),typeof s.templateContext=="function"?s.templateContext():s.templateContext)),a.attachTemplatePortal(new ne(i,null,r,l))}else{let l=this._createInjector(s,e,a,this._injector),r=a.attachComponentPortal(new Pt(i,s.viewContainerRef,l,s.componentFactoryResolver));e.componentRef=r,e.componentInstance=r.instance}}_createInjector(i,e,a,s){let l=i.injector||i.viewContainerRef?.injector,r=[{provide:Ie,useValue:i.data},{provide:$,useValue:e}];return i.providers&&(typeof i.providers=="function"?r.push(...i.providers(e,i,a)):r.push(...i.providers)),i.direction&&(!l||!l.get(xt,null,{optional:!0}))&&r.push({provide:xt,useValue:{value:i.direction,change:Vt()}}),D.create({parent:l||s,providers:r})}_removeOpenDialog(i,e){let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,l)=>{s?l.setAttribute("aria-hidden",s):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let i=this._overlayContainer.getContainerElement();if(i.parentElement){let e=i.parentElement.children;for(let a=e.length-1;a>-1;a--){let s=e[a];s!==i&&s.nodeName!=="SCRIPT"&&s.nodeName!=="STYLE"&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let i=this._parentDialog;return i?i._getAfterAllClosed():this._afterAllClosedAtThisLevel}};t.\u0275fac=function(e){return new(e||t)(d(O),d(D),d(je,8),d(t,12),d(pt),d(we))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function wt(n,t){let o=n.length;for(;o--;)t(n[o])}var pe=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z({type:t}),t.\u0275inj=J({providers:[Mt],imports:[ut,H,ae,H]});let n=t;return n})();function ke(n,t){}var G=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},kt="mdc-dialog--open",ue="mdc-dialog--opening",ge="mdc-dialog--closing",Ee=150,Fe=75,Le=(()=>{let t=class t extends jt{constructor(i,e,a,s,l,r,h,x,_t){super(i,e,a,s,l,r,h,_t),this._animationMode=x,this._animationStateChanged=new $t,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?_e(this._config.enterAnimationDuration)??Ee:0,this._exitAnimationDuration=this._animationsEnabled?_e(this._config.exitAnimationDuration)??Fe:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(fe,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ue,kt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(kt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(kt),this._animationsEnabled?(this._hostElement.style.setProperty(fe,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ge)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(i){this._actionSectionCount+=i,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(ue,ge)}_waitForAnimationToComplete(i,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,i)}_requestAnimationFrame(i){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(i):i()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(i){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:i})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(i){let e=super.attachComponentPortal(i);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}};t.\u0275fac=function(e){return new(e||t)(c(N),c(dt),c(st,8),c(G),c(ct),c(et),c(L),c(yt,8),c(ht))},t.\u0275cmp=b({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,a){e&2&&(Dt("id",a._config.id),j("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),Qt("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},standalone:!0,features:[V,A],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,a){e&1&&(u(0,"div",0)(1,"div",1),I(2,ke,0,0,"ng-template",2),g()())},dependencies:[z],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2});let n=t;return n})(),fe="--mat-dialog-transition-duration";function _e(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ot(n.substring(0,n.length-2)):n.endsWith("s")?Ot(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var gt=function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n}(gt||{}),R=class{constructor(t,o,i){this._ref=t,this._containerInstance=i,this._afterOpened=new p,this._beforeClosed=new p,this._state=gt.OPEN,this.disableClose=o.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(B(e=>e.state==="opened"),Q(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(B(e=>e.state==="closed"),Q(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),zt(this.backdropClick(),this.keydownEvents().pipe(B(e=>e.keyCode===27&&!this.disableClose&&!lt(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),Re(this,e.type==="keydown"?"keyboard":"mouse"))})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe(B(o=>o.state==="closing"),Q(1)).subscribe(o=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),o.totalTime+100)}),this._state=gt.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let o=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?o.left(t.left):o.right(t.right):o.centerHorizontally(),t&&(t.top||t.bottom)?t.top?o.top(t.top):o.bottom(t.bottom):o.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",o=""){return this._ref.updateSize(t,o),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=gt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Re(n,t,o){return n._closeInteractionType=t,n.close(o)}var Et=new C("MatMdcDialogData"),Be=new C("mat-mdc-dialog-default-options"),Ne=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=f(O);return()=>n.scrollStrategies.block()}});var Ve=0,ft=(()=>{let t=class t{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let i=this._parentDialog;return i?i._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(i,e,a,s,l,r,h,x){this._overlay=i,this._defaultOptions=s,this._scrollStrategy=l,this._parentDialog=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p,this._afterOpenedAtThisLevel=new p,this.dialogConfigClass=G,this.afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(U(void 0))),this._dialog=e.get(Mt),this._dialogRefConstructor=R,this._dialogContainerType=Le,this._dialogDataToken=Et}open(i,e){let a;e=v(v({},this._defaultOptions||new G),e),e.id=e.id||`mat-mdc-dialog-${Ve++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let s=this._dialog.open(i,Lt(v({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:P,useValue:e}]},templateContext:()=>({dialogRef:a}),providers:(l,r,h)=>(a=new this._dialogRefConstructor(l,e,h),a.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=s.componentRef,a.componentInstance=s.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(a);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(i){return this.openDialogs.find(e=>e.id===i)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(i){let e=i.length;for(;e--;)i[e].close()}};t.\u0275fac=function(e){return new(e||t)(d(O),d(D),d(ee,8),d(Be,8),d(Ne),d(t,12),d(pt),d(yt,8))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),ze=0;var He=(()=>{let t=class t{constructor(i,e,a){this._dialogRef=i,this._elementRef=e,this._dialog=a}ngOnInit(){this._dialogRef||(this._dialogRef=$e(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}};t.\u0275fac=function(e){return new(e||t)(c(R,8),c(N),c(ft))},t.\u0275dir=K({type:t,standalone:!0});let n=t;return n})(),ve=(()=>{let t=class t extends He{constructor(){super(...arguments),this.id=`mat-mdc-dialog-title-${ze++}`}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}};t.\u0275fac=(()=>{let i;return function(a){return(i||(i=Ht(t)))(a||t)}})(),t.\u0275dir=K({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,a){e&2&&Dt("id",a.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[V]});let n=t;return n})(),ye=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=K({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[Wt([he])]});let n=t;return n})();function $e(n,t){let o=n.nativeElement.parentElement;for(;o&&!o.classList.contains("mat-mdc-dialog-container");)o=o.parentElement;return o?t.find(i=>i.id===o.id):null}var Ce=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z({type:t}),t.\u0275inj=J({providers:[ft],imports:[pe,ut,H,Tt,Tt]});let n=t;return n})();var be=[{src:"assets/img/projects/img_1.jpg",alt:"VFull",title:"VFull",width:"160px",height:"160px",description:"VFull \xE9 uma plataforma de streaming de v\xEDdeo que permite aos usu\xE1rios criar e compartilhar conte\xFAdo ao vivo.",links:[{name:"Ver projeto",href:".",history:"A busca incessante por solu\xE7\xF5es inovadoras nos levou a mergulhar profundamente na engenharia de codecs e algoritmos de compacta\xE7\xE3o, visando encontrar o equil\xEDbrio ideal entre a qualidade do v\xEDdeo e a economia de espa\xE7o. Ao longo desse processo, enfrentamos desafios estimulantes que demandaram criatividade e expertise t\xE9cnica, aprimorando nossa capacidade de superar obst\xE1culos e inovar na vanguarda da tecnologia de streaming."}]},{src:"assets/img/projects/img_2.jpg",alt:"Angular",title:"Angular",width:"160px",height:"160px",description:"Angular \xE9 um sistema de design de c\xF3digo aberto para criar aplicativos da Web.",links:[{name:"Ver Projeto",href:".",history:"Explorar a estrutura do Angular foi um divisor de \xE1guas em minha trajet\xF3ria de desenvolvimento de sistemas. Ao adentrar no mundo dessa poderosa estrutura, deparei-me com um ambiente robusto e altamente estruturado, ideal para a implementa\xE7\xE3o de projetos complexos e seguros."}]},{src:"assets/img/projects/img_3.jpg",alt:"CSS",title:"CSS",width:"160px",height:"160px",description:"CSS \xE9 um c\xF3digo de linguagem de estilo usado para descrever a apresenta\xE7\xE3o de um documento escrito em uma linguagem de marca\xE7\xE3o.",links:[{name:"Ver Projeto",href:".",history:"C\xF3digo muito bom onde desenvolvo em CSS e tamb\xE9m SCSS. Nesta pr\xF3pria p\xE1gina tem esta codifica\xE7\xE3o."}]},{src:"assets/img/projects/img_4.jpg",alt:"SCSS",title:"SCSS",width:"160px",height:"160px",description:"SCSS \xE9 uma linguagem de folha de estilo que \xE9 compilada em CSS. SCSS \xE9 a vers\xE3o mais recente do SASS (Syntactically Awesome Style Sheets).",links:[{name:"Ver Projeto",href:".",history:"C\xF3digo muito bom onde desenvolvo em CSS e tamb\xE9m SCSS. Nesta pr\xF3pria p\xE1gina tem esta codifica\xE7\xE3o."}]},{src:"assets/img/projects/img_5.jpg",alt:"HTML5",title:"HTML5",width:"160px",height:"160px",description:"HTML5 \xE9 uma linguagem de marca\xE7\xE3o usada para estruturar e apresentar conte\xFAdo na World Wide Web. \xC9 a quinta e \xFAltima vers\xE3o principal da tecnologia HTML.",links:[{name:"Ver Projeto",href:".",history:"\xC9 a atualidade em sistemas para desenvolvimento o HTML5."}]},{src:"assets/img/projects/img_6.jpg",alt:"Javascript",title:"Javascipt",width:"160px",height:"160px",description:"Javascript desenvolveu-se a partir de uma ideia simples: trazer a programa\xE7\xE3o para o navegador do usu\xE1rio, reduzindo a depend\xEAncia de aplicativos da Web do servidor.",links:[{name:"Ver Projeto",href:".",history:"Javascript \xE9 uma linguagem de programa\xE7\xE3o interpretada estruturada, de script em alto n\xEDvel com tipagem din\xE2mica fraca e multiparadigma, uso em todos os sistemas tanto WEB quanto nas Engenharias Aeron\xE1utica e El\xE9trica."}]},{src:"assets/img/projects/img_7.jpg",alt:"Avia\xE7\xE3o",title:"Avia\xE7\xE3o",width:"160px",height:"160px",description:"Projeto de servi\xE7os da avia\xE7\xE3o para instala\xE7\xF5es aeron\xE1uticas.",links:[{name:"Ver Projeto",href:".",history:"Nestes projetos s\xE3o de suma import\xE2ncia o conhecimento da Engenharia Aeron\xE1utica pois todo conte\xFAdo tem que ser revisado antes de fazer uma instala\xE7\xE3o, modifica\xE7\xE3o ou manuten\xE7\xE3o."}]},{src:"assets/img/projects/img_8.jpg",alt:"Main Frame Airplane",title:"Embraer - Desenvolvedor de Produtos Aeron\xE1utico e Corre\xE7\xF5es",width:"160px",height:"160px",description:"Melhorias apresentadas ao Main frame core em aeronaves para aplica\xE7\xE3o em seguran\xE7a.",links:[{name:"Ver Projeto",href:".",history:`Nestes projetos s\xE3o de suma import\xE2ncia o conhecimento da Engenharia Aeron\xE1utica pois todo conte\xFAdo tem que ser revisado antes de fazer uma instala\xE7\xE3o, modifica\xE7\xE3o ou manuten\xE7\xE3o. 
Inser\xE7\xE3o de corre\xE7\xE3o de parametros no sistema eletr\xF4nico de aeronaves.`}]},{src:"assets/img/projects/img_9.jpg",alt:"Apresenta\xE7\xE3o de Service Bulletins para FAA e ANAC",title:"Engenharia Aeron\xE1utica e El\xE9trica",width:"160px",height:"160px",description:"Services Bulletins com aplica\xE7\xE3o a avi\xF5es em helicopteros, que foram apresentados problemas significativos que geraram Bulletins, do total foram 13 SB's aprovados por minha an\xE1lise da Engenharia Aeron\xE1utica.",links:[{name:"Ver Projeto",href:".",history:"Trabalhar em conjunto com as ag\xEAncias americana FAA e brasileira ANAC, sempre foi uma prioridade em seguran\xE7a e tamb\xE9m em desenvolvimento para o setor aeron\xE1utico. com 13 SB's aprovados e outros em an\xE1lise."}]}];var De=(()=>{let t=class t{constructor(){this.usedIndex=[]}shuffleArray(i){let e=[];for(;i.length>0;){let a=Math.floor(Math.random()*i.length);e.push(i[a]),i.splice(a,1)}return e}progressiveRead(){return W(this,null,function*(){let i=be;var e=[];let a=this.shuffleArray(i);for(let s=0;s<a.length;s++){let l=a[s];yield new Promise(r=>setTimeout(r,150)),e.push(l)}return e})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var Ft=function(n){return n.PROJECTS="dialog-projects",n}(Ft||{});var Ae=(()=>{var t;let o=class o{constructor(){S(this,t);w(this,t,new Nt("")),this.typeSignalArticle$=m(this,t).asObservable(),this.subscriptions=[]}progressiveTypeArticle(e,a=10){return new Bt(s=>{let l=0,r=setInterval(()=>{l<=e.length?(m(this,t).next(e.substring(0,l)),l++):(clearInterval(r),s.next(),s.complete())},a),h=new Rt(()=>clearInterval(r));return this.subscriptions.push(h),()=>{clearInterval(r),this.subscriptions=this.subscriptions.filter(x=>x!==h),s.complete()}})}startTyping(e,a=10){m(this,t).next(""),this.progressiveTypeArticle(e,a).subscribe({complete:()=>{console.log("AI Typing completed")}})}};t=new WeakMap,o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();function Ge(n,t){if(n&1&&k(0,"article",4),n&2){let o=F();M("innerHTML",o.typeAiArticle(),Ct)}}function We(n,t){if(n&1&&k(0,"article",4),n&2){let o=F();M("innerHTML",o.typeAiArticle(),Ct)}}function Ye(n,t){if(n&1){let o=ot();u(0,"a",6,0),E("click",function(){let e=X(o).$implicit,a=F();return tt(a.typeAi(e.history))}),T(2),g()}if(n&2){let o=t.$implicit;_(2),Xt(" ",o.name,"")}}var Oe=(()=>{var t;let o=class o{constructor(e,a){S(this,t);this._data=e,this._dialogRef=a,w(this,t,f(Ae)),this.getData=null,this.typeAiArticle=bt(""),this.flag=0,this.titleDialog=bt("Descri\xE7\xE3o"),this.destroy$=new p}ngOnInit(){this.typeOnInit()}typeOnInit(){this.stopTypeAi(),this.destroy$=new p,m(this,t).typeSignalArticle$.pipe(vt(this.destroy$)).subscribe(e=>{this.typeAiArticle.set(e)}),new Promise(e=>{m(this,t).startTyping(""),e()}).then(()=>{setTimeout(()=>{this.getData=this._data,m(this,t).startTyping(this.getData.description)},250)})}typeAi(e){this.stopTypeAi(),this.destroy$=new p,m(this,t).typeSignalArticle$.pipe(vt(this.destroy$)).subscribe(a=>{this.typeAiArticle.set(a)}),m(this,t).startTyping(""),this.flag=1,this.titleDialog.set("Hist\xF3rico do Trabalho"),m(this,t).startTyping(e)}stopTypeAi(){this.destroy$.next(),this.destroy$.complete()}ngOnDestroy(){m(this,t).typeSignalArticle$.subscribe()}closeDialog(){this.flag=0,this._dialogRef.close()}};t=new WeakMap,o.\u0275fac=function(a){return new(a||o)(c(Et),c(R))},o.\u0275cmp=b({type:o,selectors:[["app-dialog-projects"]],standalone:!0,features:[A],decls:13,vars:3,consts:[["button",""],["mat-dialog-title",""],["mat-button","",3,"click"],["src","assets/img/icons/close.svg","alt",""],[3,"innerHTML"],["target","_blank",1,"btn","btn-primary"],["target","_blank",1,"btn","btn-primary",3,"click"]],template:function(a,s){a&1&&(u(0,"header")(1,"h2",1),T(2),g(),u(3,"button",2),E("click",function(){return s.closeDialog()}),k(4,"img",3),g()(),u(5,"mat-dialog-content")(6,"h3"),T(7),g(),I(8,Ge,1,1,"article",4)(9,We,1,1,"article",4),u(10,"nav"),at(11,Ye,3,1,"a",5,it),g()()),a&2&&(_(2),At(s.getData==null?null:s.getData.title),_(5),At(s.titleDialog()),_(),Ut(s.flag?9:8),_(3),nt(s.getData==null?null:s.getData.links))},dependencies:[Ce,ve,ye],styles:[".dialog-projects .mdc-dialog__container{width:850px}[_nghost-%COMP%]{padding:10px 30px;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{padding:0;margin:0 0 15px}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;padding:0;margin:0;color:var(--black-010)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;cursor:pointer}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:var(--black-010)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:15px}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex}"]});let n=o;return n})();function Qe(n,t){if(n&1){let o=ot();u(0,"li")(1,"button",1),E("click",function(){let e=X(o).$implicit,a=F();return tt(a.openDialog(e))}),k(2,"img",2),g()()}if(n&2){let o=t.$implicit;_(2),M("src",o.src,qt)("alt",o.alt),j("width",o.width)("height",o.height)}}function Ue(n,t){n&1&&(u(0,"h2"),T(1,"Carregando ..."),g())}var da=(()=>{var t;let o=class o{constructor(){S(this,t);this.dialog=f(ft),w(this,t,f(De)),this.arrayLoad=[]}ngOnInit(){return W(this,null,function*(){this.arrayLoad=yield m(this,t).progressiveRead()})}openDialog(e){this.dialog.open(Oe,{data:e,panelClass:Ft.PROJECTS})}};t=new WeakMap,o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=b({type:o,selectors:[["app-projects"]],standalone:!0,features:[A],decls:7,vars:2,consts:[[1,"container"],[3,"click"],["loading","lazy",3,"src","alt"]],template:function(a,s){a&1&&(u(0,"div",0)(1,"h2"),T(2,"Projetos Desenvolvidos"),g(),u(3,"ul"),at(4,Qe,3,4,"li",null,it,!1,Ue,2,0,"h2"),g()()),a&2&&(_(3),M("@anim",s.arrayLoad),_(),nt(s.arrayLoad))},styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0 0 25px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style:none;gap:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;height:160px;width:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;border:none;cursor:pointer;background:var(--black-010);border-radius:7px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary);transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:7px;filter:grayscale(100%)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:grayscale(0%);transition:.5s}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}"],data:{animation:[se("anim",[le("*=>*",[ce(":enter",[mt({opacity:0,transform:"translateY(-30px)"}),de(100,[re([St("1s ease-in-out",mt({opacity:1})),St("1s ease-in-out",mt({transform:"none"}))])])],{optional:!0})])])]}});let n=o;return n})();export{da as ProjectsComponent};