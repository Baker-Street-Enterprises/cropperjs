"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[229],{4229:function(e,l,t){t.r(l),t.d(l,{default:function(){return xe}});var a=t(6252),n=t(3577),r=t(2262),u=t(9963);const i={class:"theme-default-content custom"},o={};var s=(0,t(3744).Z)(o,[["render",function(e,l){const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(t)])}]]),c=t(7621),v=t(480);const d={key:0,class:"features"};var p=(0,a.aZ)({setup(e){const l=(0,c.I2)(),t=(0,a.Fl)((()=>(0,v.kJ)(l.value.features)?l.value.features:[]));return(e,l)=>(0,r.SU)(t).length?((0,a.wg)(),(0,a.iD)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(t),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0)}});const g=["innerHTML"],h=["textContent"];var m=(0,a.aZ)({setup(e){const l=(0,c.I2)(),t=(0,a.Fl)((()=>l.value.footer)),u=(0,a.Fl)((()=>l.value.footerHtml));return(e,l)=>(0,r.SU)(t)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,r.SU)(u)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,r.SU)(t)},null,8,g)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,r.SU)(t))},null,8,h))],64)):(0,a.kq)("",!0)}}),k=t(2119);const w=["href","rel","target","aria-label"],b=(0,a.aZ)({inheritAttrs:!1});var f=(0,a.aZ)({...b,props:{item:{type:Object,required:!0}},setup(e){const l=e,t=(0,k.yj)(),u=(0,c.WF)(),{item:i}=(0,r.BK)(l),o=(0,a.Fl)((()=>(0,v.ak)(i.value.link))),s=(0,a.Fl)((()=>(0,v.B2)(i.value.link)||(0,v.R5)(i.value.link))),d=(0,a.Fl)((()=>{if(!s.value)return i.value.target?i.value.target:o.value?"_blank":void 0})),p=(0,a.Fl)((()=>"_blank"===d.value)),g=(0,a.Fl)((()=>!o.value&&!s.value&&!p.value)),h=(0,a.Fl)((()=>{if(!s.value)return i.value.rel?i.value.rel:p.value?"noopener noreferrer":void 0})),m=(0,a.Fl)((()=>i.value.ariaLabel||i.value.text)),b=(0,a.Fl)((()=>{const e=Object.keys(u.value.locales);return e.length?!e.some((e=>e===i.value.link)):"/"!==i.value.link})),f=(0,a.Fl)((()=>!!b.value&&t.path.startsWith(i.value.link))),U=(0,a.Fl)((()=>!!g.value&&(i.value.activeMatch?new RegExp(i.value.activeMatch).test(t.path):f.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("AutoLinkExternalIcon");return(0,r.SU)(g)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:{"router-link-active":(0,r.SU)(U)},to:(0,r.SU)(i).link,"aria-label":(0,r.SU)(m)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,r.SU)(i).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"external-link",href:(0,r.SU)(i).link,rel:(0,r.SU)(h),target:(0,r.SU)(d),"aria-label":(0,r.SU)(m)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,r.SU)(i).text)+" ",1),(0,r.SU)(p)?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,w))}}}),U=t(4391);const S={class:"hero"},y={key:0,id:"main-title"},D={key:1,class:"description"},F={key:2,class:"actions"};var _=(0,a.aZ)({setup(e){const l=(0,c.I2)(),t=(0,c.I5)(),u=(0,U.vs)(),i=(0,a.Fl)((()=>u.value&&void 0!==l.value.heroImageDark?l.value.heroImageDark:l.value.heroImage)),o=(0,a.Fl)((()=>null===l.value.heroText?null:l.value.heroText||t.value.title||"Hello")),s=(0,a.Fl)((()=>l.value.heroAlt||o.value||"hero")),d=(0,a.Fl)((()=>null===l.value.tagline?null:l.value.tagline||t.value.description||"Welcome to your VuePress site")),p=(0,a.Fl)((()=>(0,v.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),g=()=>{if(!i.value)return null;const e=(0,a.h)("img",{src:(0,c.pJ)(i.value),alt:s.value});return void 0===l.value.heroImageDark?e:(0,a.h)(c.qx,(()=>e))};return(e,l)=>((0,a.wg)(),(0,a.iD)("header",S,[(0,a.Wm)(g),(0,r.SU)(o)?((0,a.wg)(),(0,a.iD)("h1",y,(0,n.zw)((0,r.SU)(o)),1)):(0,a.kq)("",!0),(0,r.SU)(d)?((0,a.wg)(),(0,a.iD)("p",D,(0,n.zw)((0,r.SU)(d)),1)):(0,a.kq)("",!0),(0,r.SU)(p).length?((0,a.wg)(),(0,a.iD)("p",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(p),(e=>((0,a.wg)(),(0,a.j4)(f,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]))}});const W={class:"home"};var x=(0,a.aZ)({setup:e=>(e,l)=>((0,a.wg)(),(0,a.iD)("main",W,[(0,a.Wm)(_),(0,a.Wm)(p),(0,a.Wm)(s),(0,a.Wm)(m)]))}),I=(0,a.aZ)({setup(e){const l=(0,c.I)(),t=(0,c.I5)(),u=(0,U.X6)(),i=(0,U.vs)(),o=(0,a.Fl)((()=>u.value.home||l.value)),s=(0,a.Fl)((()=>t.value.title)),v=(0,a.Fl)((()=>i.value&&void 0!==u.value.logoDark?u.value.logoDark:u.value.logo)),d=()=>{if(!v.value)return null;const e=(0,a.h)("img",{class:"logo",src:(0,c.pJ)(v.value),alt:s.value});return void 0===u.value.logoDark?e:(0,a.h)(c.qx,(()=>e))};return(e,l)=>{const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(t,{to:(0,r.SU)(o)},{default:(0,a.w5)((()=>[(0,a.Wm)(d),(0,r.SU)(s)?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,n.C_)(["site-name",{"can-hide":(0,r.SU)(v)}])},(0,n.zw)((0,r.SU)(s)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])}}}),C=(0,a.aZ)({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(u.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}});const $=["aria-label"],L={class:"title"},j=(0,a._)("span",{class:"arrow down"},null,-1),H=["aria-label"],q={class:"title"},z={class:"navbar-dropdown"},Z={class:"navbar-dropdown-subtitle"},B={key:1},R={class:"navbar-dropdown-subitem-wrapper"};var M=(0,a.aZ)({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,r.BK)(l),i=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),o=(0,r.iH)(!1),s=(0,k.yj)();(0,a.YP)((()=>s.path),(()=>{o.value=!1}));const c=e=>{const l=0===e.detail;o.value=!!l&&!o.value},v=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["navbar-dropdown-wrapper",{open:o.value}])},[(0,a._)("button",{class:"navbar-dropdown-title",type:"button","aria-label":(0,r.SU)(i),onClick:c},[(0,a._)("span",L,(0,n.zw)((0,r.SU)(t).text),1),j],8,$),(0,a._)("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":(0,r.SU)(i),onClick:l[0]||(l[0]=e=>o.value=!o.value)},[(0,a._)("span",q,(0,n.zw)((0,r.SU)(t).text),1),(0,a._)("span",{class:(0,n.C_)(["arrow",o.value?"down":"right"])},null,2)],8,H),(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(t).children,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.text,class:"navbar-dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",Z,[e.link?((0,a.wg)(),(0,a.j4)(f,{key:0,item:e,onFocusout:l=>v(e,(0,r.SU)(t).children)&&0===e.children.length&&(o.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",B,(0,n.zw)(e.text),1))]),(0,a._)("ul",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"navbar-dropdown-subitem"},[(0,a.Wm)(f,{item:l,onFocusout:a=>v(l,e.children)&&v(e,(0,r.SU)(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(f,{key:1,item:e,onFocusout:l=>v(e,(0,r.SU)(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[u.F8,o.value]])])),_:1})],2))}});const T=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Y=(e,l)=>!(!e.link||!((e,l)=>l.hash===e||T(l.path)===T(e))(e.link,l))||!!e.children&&e.children.some((e=>Y(e,l))),P=e=>!(0,v.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,X={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},E={key:0,class:"navbar-items"};var K=(0,a.aZ)({setup(e){const l=e=>(0,v.HD)(e)?(0,U.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,U.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,k.tv)(),l=(0,c.I)(),t=(0,c.I5)(),n=(0,U.X6)();return(0,a.Fl)((()=>{var a,r;const u=Object.keys(t.value.locales);if(u.length<2)return[];const i=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unknown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:u.map((a=>{var r,u,s,c,v,d;const p=null!=(u=null==(r=t.value.locales)?void 0:r[a])?u:{},g=null!=(c=null==(s=n.value.locales)?void 0:s[a])?c:{},h=`${p.lang}`,m=null!=(v=g.selectLanguageName)?v:h;let k;if(h===t.value.lang)k=o;else{const t=i.replace(l.value,a);k=e.getRoutes().some((e=>e.path===t))?t:null!=(d=g.home)?d:a}return{text:m,link:k}}))}]}))})(),u=(()=>{const e=(0,U.X6)(),l=(0,a.Fl)((()=>e.value.repo)),t=(0,a.Fl)((()=>l.value?P(l.value):null)),n=(0,a.Fl)((()=>l.value&&!(0,v.ak)(l.value)?`https://github.com/${l.value}`:l.value)),r=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,a.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})(),i=(0,a.Fl)((()=>[...t.value,...n.value,...u.value]));return(e,l)=>(0,r.SU)(i).length?((0,a.wg)(),(0,a.iD)("nav",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(i),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-item"},[e.children?((0,a.wg)(),(0,a.j4)(M,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(f,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}});const V=["title"],A={class:"icon",focusable:"false",viewBox:"0 0 32 32"},G=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],O={class:"icon",focusable:"false",viewBox:"0 0 32 32"},N=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)];var J=(0,a.aZ)({setup(e){const l=(0,U.X6)(),t=(0,U.vs)(),n=()=>{t.value=!t.value};return(e,i)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,r.SU)(l).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",A,G,512)),[[u.F8,!(0,r.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",O,N,512)),[[u.F8,(0,r.SU)(t)]])],8,V))}});const Q=["title"],ee=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)];var le=(0,a.aZ)({emits:["toggle"],setup(e){const l=(0,U.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,r.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},ee,8,Q))}}),te=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,U.X6)(),t=(0,r.iH)(null),u=(0,r.iH)(null),i=(0,r.iH)(0),o=(0,a.Fl)((()=>i.value?{maxWidth:i.value+"px"}:{})),s=(0,a.Fl)((()=>l.value.darkMode));function c(e,l){var t,a,n;const r=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],u=Number.parseInt(r,10);return Number.isNaN(u)?0:u}return(0,a.bv)((()=>{const e=c(t.value,"paddingLeft")+c(t.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?i.value=0:i.value=t.value.offsetWidth-e-((null==(l=u.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const i=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref_key:"navbar",ref:t,class:"navbar"},[(0,a.Wm)(le,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref_key:"navbarBrand",ref:u},[(0,a.Wm)(I)],512),(0,a._)("div",{class:"navbar-items-wrapper",style:(0,n.j5)((0,r.SU)(o))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(K,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,r.SU)(s)?((0,a.wg)(),(0,a.j4)(J,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(i)],4)],512)}}});const ae={class:"page-meta"},ne={key:0,class:"meta-item edit-link"},re={key:1,class:"meta-item last-updated"},ue={class:"meta-item-label"},ie={class:"meta-item-info"},oe={key:2,class:"meta-item contributors"},se={class:"meta-item-label"},ce={class:"meta-item-info"},ve=["title"],de=(0,a.Uk)(", ");var pe=(0,a.aZ)({setup(e){const l=(0,U.X6)(),t=(()=>{const e=(0,U.X6)(),l=(0,c.Vi)(),t=(0,c.I2)();return(0,a.Fl)((()=>{var a,n,r;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:u,docsRepo:i=u,docsBranch:o="main",docsDir:s="",editLinkText:c}=e.value;if(!i)return null;const d=(({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:a,editLinkPattern:n})=>{if(!a)return null;const r=(({docsRepo:e,editLinkPattern:l})=>{if(l)return l;const t=P(e);return null!==t?X[t]:null})({docsRepo:e,editLinkPattern:n});return r?r.replace(/:repo/,(0,v.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,v.FY)(`${(0,v.U1)(t)}/${a}`)):null})({docsRepo:i,docsBranch:o,docsDir:s,filePathRelative:l.value.filePathRelative,editLinkPattern:null!=(r=t.value.editLinkPattern)?r:e.value.editLinkPattern});return d?{text:null!=c?c:"Edit this page",link:d}:null}))})(),u=(()=>{const e=(0,U.X6)(),l=(0,c.Vi)(),t=(0,c.I2)();return(0,a.Fl)((()=>{var a,n,r,u;return(null==(n=null!=(a=t.value.lastUpdated)?a:e.value.lastUpdated)||n)&&(null==(r=l.value.git)?void 0:r.updatedTime)?new Date(null==(u=l.value.git)?void 0:u.updatedTime).toLocaleString():null}))})(),i=(()=>{const e=(0,U.X6)(),l=(0,c.Vi)(),t=(0,c.I2)();return(0,a.Fl)((()=>{var a,n,r,u;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(u=null==(r=l.value.git)?void 0:r.contributors)?null:u}))})();return(e,o)=>{const s=(0,a.up)("ClientOnly");return(0,a.wg)(),(0,a.iD)("footer",ae,[(0,r.SU)(t)?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a.Wm)(f,{class:"meta-item-label",item:(0,r.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,r.SU)(u)?((0,a.wg)(),(0,a.iD)("div",re,[(0,a._)("span",ue,(0,n.zw)((0,r.SU)(l).lastUpdatedText)+": ",1),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("span",ie,(0,n.zw)((0,r.SU)(u)),1)])),_:1})])):(0,a.kq)("",!0),(0,r.SU)(i)&&(0,r.SU)(i).length?((0,a.wg)(),(0,a.iD)("div",oe,[(0,a._)("span",se,(0,n.zw)((0,r.SU)(l).contributorsText)+": ",1),(0,a._)("span",ce,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(i),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,ve),l!==(0,r.SU)(i).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[de],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])}}});const ge={key:0,class:"page-nav"},he={class:"inner"},me={key:0,class:"prev"},ke={key:1,class:"next"};var we=(0,a.aZ)({setup(e){const l=e=>!1===e?null:(0,v.HD)(e)?(0,U.sC)(e):!!(0,v.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},n=(0,c.I2)(),u=(0,U.VU)(),i=(0,k.yj)(),o=(0,a.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:t(u.value,i.path,-1)})),s=(0,a.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:t(u.value,i.path,1)}));return(e,l)=>(0,r.SU)(o)||(0,r.SU)(s)?((0,a.wg)(),(0,a.iD)("nav",ge,[(0,a._)("p",he,[(0,r.SU)(o)?((0,a.wg)(),(0,a.iD)("span",me,[(0,a.Wm)(f,{item:(0,r.SU)(o)},null,8,["item"])])):(0,a.kq)("",!0),(0,r.SU)(s)?((0,a.wg)(),(0,a.iD)("span",ke,[(0,a.Wm)(f,{item:(0,r.SU)(s)},null,8,["item"])])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}});const be={class:"page"},fe={class:"theme-default-content"};var Ue=(0,a.aZ)({setup:e=>(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",be,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",fe,[(0,a.Wm)(t)]),(0,a.Wm)(pe),(0,a.Wm)(we),(0,a.WI)(e.$slots,"bottom")])}});const Se={class:"sidebar-item-children"};var ye=(0,a.aZ)({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const l=e,{item:t,depth:i}=(0,r.BK)(l),o=(0,k.yj)(),s=(0,k.tv)(),c=(0,a.Fl)((()=>Y(t.value,o))),v=(0,a.Fl)((()=>({"sidebar-item":!0,"sidebar-heading":0===i.value,active:c.value,collapsible:t.value.collapsible}))),d=(0,r.iH)(!0),p=(0,r.iH)(void 0);return t.value.collapsible&&(d.value=c.value,p.value=()=>{d.value=!d.value},s.afterEach((()=>{d.value=c.value}))),(e,l)=>{var o;const s=(0,a.up)("SidebarItem",!0);return(0,a.wg)(),(0,a.iD)("li",null,[(0,r.SU)(t).link?((0,a.wg)(),(0,a.j4)(f,{key:0,class:(0,n.C_)((0,r.SU)(v)),item:(0,r.SU)(t)},null,8,["class","item"])):((0,a.wg)(),(0,a.iD)("p",{key:1,tabindex:"0",class:(0,n.C_)((0,r.SU)(v)),onClick:l[0]||(l[0]=(...e)=>p.value&&p.value(...e)),onKeydown:l[1]||(l[1]=(0,u.D2)(((...e)=>p.value&&p.value(...e)),["enter"]))},[(0,a.Uk)((0,n.zw)((0,r.SU)(t).text)+" ",1),(0,r.SU)(t).collapsible?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,n.C_)(["arrow",d.value?"down":"right"])},null,2)):(0,a.kq)("",!0)],34)),(null==(o=(0,r.SU)(t).children)?void 0:o.length)?((0,a.wg)(),(0,a.j4)(C,{key:2},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",Se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(t).children,(e=>((0,a.wg)(),(0,a.j4)(s,{key:`${(0,r.SU)(i)}${e.text}${e.link}`,item:e,depth:(0,r.SU)(i)+1},null,8,["item","depth"])))),128))],512),[[u.F8,d.value]])])),_:1})):(0,a.kq)("",!0)])}}});const De={key:0,class:"sidebar-items"};var Fe=(0,a.aZ)({setup(e){const l=(0,k.yj)(),t=(0,U.VU)();return(0,a.YP)((()=>l.hash),(e=>{const t=document.querySelector(".sidebar");if(!t)return;const a=document.querySelector(`.sidebar a.sidebar-item[href="${l.path}${e}"]`);if(!a)return;const n=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,u=a.getBoundingClientRect().top,i=a.getBoundingClientRect().height;u<n?a.scrollIntoView(!0):u+i>n+r&&a.scrollIntoView(!1)})),(e,l)=>(0,r.SU)(t).length?((0,a.wg)(),(0,a.iD)("ul",De,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(t),(e=>((0,a.wg)(),(0,a.j4)(ye,{key:e.link||e.text,item:e},null,8,["item"])))),128))])):(0,a.kq)("",!0)}});const _e={class:"sidebar"};var We=(0,a.aZ)({setup:e=>(e,l)=>((0,a.wg)(),(0,a.iD)("aside",_e,[(0,a.Wm)(K),(0,a.WI)(e.$slots,"top"),(0,a.Wm)(Fe),(0,a.WI)(e.$slots,"bottom")]))}),xe=(0,a.aZ)({setup(e){const l=(0,c.Vi)(),t=(0,c.I2)(),i=(0,U.X6)(),o=(0,a.Fl)((()=>!1!==t.value.navbar&&!1!==i.value.navbar)),s=(0,U.VU)(),v=(0,r.iH)(!1),d=e=>{v.value="boolean"==typeof e?e:!v.value},p={x:0,y:0},g=e=>{p.x=e.changedTouches[0].clientX,p.y=e.changedTouches[0].clientY},h=e=>{const l=e.changedTouches[0].clientX-p.x,t=e.changedTouches[0].clientY-p.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&p.x<=80?d(!0):d(!1))},m=(0,a.Fl)((()=>[{"no-navbar":!o.value,"no-sidebar":!s.value.length,"sidebar-open":v.value},t.value.pageClass]));let w;(0,a.bv)((()=>{const e=(0,k.tv)();w=e.afterEach((()=>{d(!1)}))})),(0,a.Ah)((()=>{w()}));const b=(0,U.P$)(),f=b.resolve,S=b.pending;return(e,i)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,r.SU)(m)]),onTouchstart:g,onTouchend:h},[(0,a.WI)(e.$slots,"navbar",{},(()=>[(0,r.SU)(o)?((0,a.wg)(),(0,a.j4)(te,{key:0,onToggleSidebar:d},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("",!0)])),(0,a._)("div",{class:"sidebar-mask",onClick:i[0]||(i[0]=e=>d(!1))}),(0,a.WI)(e.$slots,"sidebar",{},(()=>[(0,a.Wm)(We,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,a.WI)(e.$slots,"page",{},(()=>[(0,r.SU)(t).home?((0,a.wg)(),(0,a.j4)(x,{key:0})):((0,a.wg)(),(0,a.j4)(u.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,r.SU)(f),onBeforeLeave:(0,r.SU)(S)},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(Ue,{key:(0,r.SU)(l).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})},3744:function(e,l){l.Z=(e,l)=>{const t=e.__vccOpts||e;for(const[e,a]of l)t[e]=a;return t}}}]);