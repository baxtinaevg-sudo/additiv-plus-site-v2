var N_=Object.defineProperty;var F_=(n,t,e)=>t in n?N_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var fi=(n,t,e)=>F_(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const fe={},ms=[],si=()=>{},kd=()=>!1,Ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qa=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Nu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},O_=Object.prototype.hasOwnProperty,ie=(n,t)=>O_.call(n,t),It=Array.isArray,_s=n=>Lo(n)==="[object Map]",Hd=n=>Lo(n)==="[object Set]",Nf=n=>Lo(n)==="[object Date]",Vt=n=>typeof n=="function",Se=n=>typeof n=="string",ai=n=>typeof n=="symbol",re=n=>n!==null&&typeof n=="object",Vd=n=>(re(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),Gd=Object.prototype.toString,Lo=n=>Gd.call(n),B_=n=>Lo(n).slice(8,-1),Wd=n=>Lo(n)==="[object Object]",Fu=n=>Se(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,so=Uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},z_=/-\w/g,Ze=tl(n=>n.replace(z_,t=>t.slice(1).toUpperCase())),k_=/\B([A-Z])/g,Xr=tl(n=>n.replace(k_,"-$1").toLowerCase()),el=tl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sl=tl(n=>n?`on${el(n)}`:""),ei=(n,t)=>!Object.is(n,t),Sa=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Xd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ou=n=>{const t=parseFloat(n);return isNaN(t)?n:t},H_=n=>{const t=Se(n)?Number(n):NaN;return isNaN(t)?n:t};let Ff;const nl=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bu(n){if(It(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Se(i)?X_(i):Bu(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Se(n)||re(n))return n}const V_=/;(?![^(]*\))/g,G_=/:([^]+)/,W_=/\/\*[^]*?\*\//g;function X_(n){const t={};return n.replace(W_,"").split(V_).forEach(e=>{if(e){const i=e.split(G_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function sn(n){let t="";if(Se(n))t=n;else if(It(n))for(let e=0;e<n.length;e++){const i=sn(n[e]);i&&(t+=i+" ")}else if(re(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=Uu(q_);function qd(n){return!!n||n===""}function Y_(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=zu(n[i],t[i]);return e}function zu(n,t){if(n===t)return!0;let e=Nf(n),i=Nf(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=ai(n),i=ai(t),e||i)return n===t;if(e=It(n),i=It(t),e||i)return e&&i?Y_(n,t):!1;if(e=re(n),i=re(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!zu(n[o],t[o]))return!1}}return String(n)===String(t)}const $d=n=>!!(n&&n.__v_isRef===!0),he=n=>Se(n)?n:n==null?"":It(n)||re(n)&&(n.toString===Gd||!Vt(n.toString))?$d(n)?he(n.value):JSON.stringify(n,Yd,2):String(n),Yd=(n,t)=>$d(t)?Yd(n,t.value):_s(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ml(i,s)+" =>"]=r,e),{})}:Hd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ml(e))}:ai(t)?Ml(t):re(t)&&!It(t)&&!Wd(t)?String(t):t,Ml=(n,t="")=>{var e;return ai(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class j_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function K_(){return Oe}let me;const yl=new WeakSet;class jd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Of(this),Jd(this);const t=me,e=Gn;me=this,Gn=!0;try{return this.fn()}finally{Qd(this),me=t,Gn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vu(t);this.deps=this.depsTail=void 0,Of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vc(this)&&this.run()}get dirty(){return vc(this)}}let Kd=0,oo,ao;function Zd(n,t=!1){if(n.flags|=8,t){n.next=ao,ao=n;return}n.next=oo,oo=n}function ku(){Kd++}function Hu(){if(--Kd>0)return;if(ao){let t=ao;for(ao=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;oo;){let t=oo;for(oo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Jd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qd(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Vu(i),Z_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function vc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function tp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_o)||(n.globalVersion=_o,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vc(n))))return;n.flags|=2;const t=n.dep,e=me,i=Gn;me=n,Gn=!0;try{Jd(n);const r=n.fn(n._value);(t.version===0||ei(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{me=e,Gn=i,Qd(n),n.flags&=-3}}function Vu(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Vu(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Z_(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Gn=!0;const ep=[];function Di(){ep.push(Gn),Gn=!1}function Li(){const n=ep.pop();Gn=n===void 0?!0:n}function Of(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=me;me=void 0;try{t()}finally{me=e}}}let _o=0;class J_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!Gn||me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==me)e=this.activeLink=new J_(me,this),me.deps?(e.prevDep=me.depsTail,me.depsTail.nextDep=e,me.depsTail=e):me.deps=me.depsTail=e,np(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=me.depsTail,e.nextDep=void 0,me.depsTail.nextDep=e,me.depsTail=e,me.deps===e&&(me.deps=i)}return e}trigger(t){this.version++,_o++,this.notify(t)}notify(t){ku();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Hu()}}}function np(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)np(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const xc=new WeakMap,Fr=Symbol(""),Sc=Symbol(""),go=Symbol("");function Ve(n,t,e){if(Gn&&me){let i=xc.get(n);i||xc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Gu),r.map=i,r.key=e),r.track()}}function Ei(n,t,e,i,r,s){const o=xc.get(n);if(!o){_o++;return}const a=l=>{l&&l.trigger()};if(ku(),t==="clear")o.forEach(a);else{const l=It(n),c=l&&Fu(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===go||!ai(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(go)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Fr)),_s(n)&&a(o.get(Sc)));break;case"delete":l||(a(o.get(Fr)),_s(n)&&a(o.get(Sc)));break;case"set":_s(n)&&a(o.get(Fr));break}}Hu()}function Yr(n){const t=te(n);return t===n?t:(Ve(t,"iterate",go),Nn(n)?t:t.map(Xn))}function il(n){return Ve(n=te(n),"iterate",go),n}function Jn(n,t){return Ii(n)?Ts(Or(n)?Xn(t):t):Xn(t)}const Q_={__proto__:null,[Symbol.iterator](){return bl(this,Symbol.iterator,n=>Jn(this,n))},concat(...n){return Yr(this).concat(...n.map(t=>It(t)?Yr(t):t))},entries(){return bl(this,"entries",n=>(n[1]=Jn(this,n[1]),n))},every(n,t){return hi(this,"every",n,t,void 0,arguments)},filter(n,t){return hi(this,"filter",n,t,e=>e.map(i=>Jn(this,i)),arguments)},find(n,t){return hi(this,"find",n,t,e=>Jn(this,e),arguments)},findIndex(n,t){return hi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return hi(this,"findLast",n,t,e=>Jn(this,e),arguments)},findLastIndex(n,t){return hi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return hi(this,"forEach",n,t,void 0,arguments)},includes(...n){return El(this,"includes",n)},indexOf(...n){return El(this,"indexOf",n)},join(n){return Yr(this).join(n)},lastIndexOf(...n){return El(this,"lastIndexOf",n)},map(n,t){return hi(this,"map",n,t,void 0,arguments)},pop(){return Ws(this,"pop")},push(...n){return Ws(this,"push",n)},reduce(n,...t){return Bf(this,"reduce",n,t)},reduceRight(n,...t){return Bf(this,"reduceRight",n,t)},shift(){return Ws(this,"shift")},some(n,t){return hi(this,"some",n,t,void 0,arguments)},splice(...n){return Ws(this,"splice",n)},toReversed(){return Yr(this).toReversed()},toSorted(n){return Yr(this).toSorted(n)},toSpliced(...n){return Yr(this).toSpliced(...n)},unshift(...n){return Ws(this,"unshift",n)},values(){return bl(this,"values",n=>Jn(this,n))}};function bl(n,t,e){const i=il(n),r=i[t]();return i!==n&&!Nn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const tg=Array.prototype;function hi(n,t,e,i,r,s){const o=il(n),a=o!==n&&!Nn(n),l=o[t];if(l!==tg[t]){const f=l.apply(n,s);return a?Xn(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Jn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Bf(n,t,e,i){const r=il(n),s=r!==n&&!Nn(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Jn(n,c)),e.call(this,c,Jn(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=r[t](o,...i);return a?Jn(n,l):l}function El(n,t,e){const i=te(n);Ve(i,"iterate",go);const r=i[t](...e);return(r===-1||r===!1)&&$u(e[0])?(e[0]=te(e[0]),i[t](...e)):r}function Ws(n,t,e=[]){Di(),ku();const i=te(n)[t].apply(n,e);return Hu(),Li(),i}const eg=Uu("__proto__,__v_isRef,__isVue"),ip=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function ng(n){ai(n)||(n=String(n));const t=te(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class rp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?hg:lp:s?ap:op).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=It(t);if(!r){let l;if(o&&(l=Q_[e]))return l;if(e==="hasOwnProperty")return ng}const a=Reflect.get(t,e,Xe(t)?t:i);if((ai(e)?ip.has(e):eg(e))||(r||Ve(t,"get",e),s))return a;if(Xe(a)){const l=o&&Fu(e)?a:a.value;return r&&re(l)?yc(l):l}return re(a)?r?yc(a):Xu(a):a}}class sp extends rp{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=It(t)&&Fu(e);if(!this._isShallow){const c=Ii(s);if(!Nn(i)&&!Ii(i)&&(s=te(s),i=te(i)),!o&&Xe(s)&&!Xe(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,Xe(t)?t:r);return t===te(r)&&(a?ei(i,s)&&Ei(t,"set",e,i):Ei(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Ei(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!ai(e)||!ip.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",It(t)?"length":Fr),Reflect.ownKeys(t)}}class ig extends rp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const rg=new sp,sg=new ig,og=new sp(!0);const Mc=n=>n,Wo=n=>Reflect.getPrototypeOf(n);function ag(n,t,e){return function(...i){const r=this.__v_raw,s=te(r),o=_s(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Mc:t?Ts:Xn;return!t&&Ve(s,"iterate",l?Sc:Fr),Ne(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Xo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function lg(n,t){const e={get(r){const s=this.__v_raw,o=te(s),a=te(r);n||(ei(r,a)&&Ve(o,"get",r),Ve(o,"get",a));const{has:l}=Wo(o),c=t?Mc:n?Ts:Xn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ve(te(r),"iterate",Fr),r.size},has(r){const s=this.__v_raw,o=te(s),a=te(r);return n||(ei(r,a)&&Ve(o,"has",r),Ve(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=te(a),c=t?Mc:n?Ts:Xn;return!n&&Ve(l,"iterate",Fr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ne(e,n?{add:Xo("add"),set:Xo("set"),delete:Xo("delete"),clear:Xo("clear")}:{add(r){const s=te(this),o=Wo(s),a=te(r),l=!t&&!Nn(r)&&!Ii(r)?a:r;return o.has.call(s,l)||ei(r,l)&&o.has.call(s,r)||ei(a,l)&&o.has.call(s,a)||(s.add(l),Ei(s,"add",l,l)),this},set(r,s){!t&&!Nn(s)&&!Ii(s)&&(s=te(s));const o=te(this),{has:a,get:l}=Wo(o);let c=a.call(o,r);c||(r=te(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ei(s,u)&&Ei(o,"set",r,s):Ei(o,"add",r,s),this},delete(r){const s=te(this),{has:o,get:a}=Wo(s);let l=o.call(s,r);l||(r=te(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ei(s,"delete",r,void 0),c},clear(){const r=te(this),s=r.size!==0,o=r.clear();return s&&Ei(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ag(r,n,t)}),e}function Wu(n,t){const e=lg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ie(e,r)&&r in i?e:i,r,s)}const cg={get:Wu(!1,!1)},ug={get:Wu(!1,!0)},fg={get:Wu(!0,!1)};const op=new WeakMap,ap=new WeakMap,lp=new WeakMap,hg=new WeakMap;function dg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pg(n){return n.__v_skip||!Object.isExtensible(n)?0:dg(B_(n))}function Xu(n){return Ii(n)?n:qu(n,!1,rg,cg,op)}function mg(n){return qu(n,!1,og,ug,ap)}function yc(n){return qu(n,!0,sg,fg,lp)}function qu(n,t,e,i,r){if(!re(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=pg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Or(n){return Ii(n)?Or(n.__v_raw):!!(n&&n.__v_isReactive)}function Ii(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function $u(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function _g(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&Xd(n,"__v_skip",!0),n}const Xn=n=>re(n)?Xu(n):n,Ts=n=>re(n)?yc(n):n;function Xe(n){return n?n.__v_isRef===!0:!1}function Ce(n){return gg(n,!1)}function gg(n,t){return Xe(n)?n:new vg(n,t)}class vg{constructor(t,e){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Nn(t)||Ii(t);t=i?t:te(t),ei(t,e)&&(this._rawValue=t,this._value=i?t:Xn(t),this.dep.trigger())}}function Ua(n){return Xe(n)?n.value:n}const xg={get:(n,t,e)=>t==="__v_raw"?n:Ua(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Xe(r)&&!Xe(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function cp(n){return Or(n)?n:new Proxy(n,xg)}class Sg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Zd(this,!0),!0}get value(){const t=this.dep.track();return tp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mg(n,t,e=!1){let i,r;return Vt(n)?i=n:(i=n.get,r=n.set),new Sg(i,r,e)}const qo={},Na=new WeakMap;let wr;function yg(n,t=!1,e=wr){if(e){let i=Na.get(e);i||Na.set(e,i=[]),i.push(n)}}function bg(n,t,e=fe){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=v=>r?v:Nn(v)||r===!1||r===0?Ti(v,1):Ti(v);let u,f,h,d,g=!1,_=!1;if(Xe(n)?(f=()=>n.value,g=Nn(n)):Or(n)?(f=()=>c(n),g=!0):It(n)?(_=!0,g=n.some(v=>Or(v)||Nn(v)),f=()=>n.map(v=>{if(Xe(v))return v.value;if(Or(v))return c(v);if(Vt(v))return l?l(v,2):v()})):Vt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Di();try{h()}finally{Li()}}const v=wr;wr=u;try{return l?l(n,3,[d]):n(d)}finally{wr=v}}:f=si,t&&r){const v=f,C=r===!0?1/0:r;f=()=>Ti(v(),C)}const m=K_(),p=()=>{u.stop(),m&&m.active&&Nu(m.effects,u)};if(s&&t){const v=t;t=(...C)=>{v(...C),p()}}let y=_?new Array(n.length).fill(qo):qo;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const C=u.run();if(r||g||(_?C.some((P,A)=>ei(P,y[A])):ei(C,y))){h&&h();const P=wr;wr=u;try{const A=[C,y===qo?void 0:_&&y[0]===qo?[]:y,d];y=C,l?l(t,3,A):t(...A)}finally{wr=P}}}else u.run()};return a&&a(E),u=new jd(f),u.scheduler=o?()=>o(E,!1):E,d=v=>yg(v,!1,u),h=u.onStop=()=>{const v=Na.get(u);if(v){if(l)l(v,4);else for(const C of v)C();Na.delete(u)}},t?i?E(!0):y=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ti(n,t=1/0,e){if(t<=0||!re(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Xe(n))Ti(n.value,t,e);else if(It(n))for(let i=0;i<n.length;i++)Ti(n[i],t,e);else if(Hd(n)||_s(n))n.forEach(i=>{Ti(i,t,e)});else if(Wd(n)){for(const i in n)Ti(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ti(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Io(n,t,e,i){try{return i?n(...i):n()}catch(r){rl(r,t,e)}}function qn(n,t,e,i){if(Vt(n)){const r=Io(n,t,e,i);return r&&Vd(r)&&r.catch(s=>{rl(s,t,e)}),r}if(It(n)){const r=[];for(let s=0;s<n.length;s++)r.push(qn(n[s],t,e,i));return r}}function rl(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Di(),Io(s,null,10,[n,l,c]),Li();return}}Eg(n,e,r,i,o)}function Eg(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const je=[];let jn=-1;const gs=[];let Zi=null,us=0;const up=Promise.resolve();let Fa=null;function fp(n){const t=Fa||up;return n?t.then(this?n.bind(this):n):t}function Tg(n){let t=jn+1,e=je.length;for(;t<e;){const i=t+e>>>1,r=je[i],s=vo(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Yu(n){if(!(n.flags&1)){const t=vo(n),e=je[je.length-1];!e||!(n.flags&2)&&t>=vo(e)?je.push(n):je.splice(Tg(t),0,n),n.flags|=1,hp()}}function hp(){Fa||(Fa=up.then(pp))}function wg(n){It(n)?gs.push(...n):Zi&&n.id===-1?Zi.splice(us+1,0,n):n.flags&1||(gs.push(n),n.flags|=1),hp()}function zf(n,t,e=jn+1){for(;e<je.length;e++){const i=je[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;je.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dp(n){if(gs.length){const t=[...new Set(gs)].sort((e,i)=>vo(e)-vo(i));if(gs.length=0,Zi){Zi.push(...t);return}for(Zi=t,us=0;us<Zi.length;us++){const e=Zi[us];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Zi=null,us=0}}const vo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pp(n){try{for(jn=0;jn<je.length;jn++){const t=je[jn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Io(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;jn<je.length;jn++){const t=je[jn];t&&(t.flags&=-2)}jn=-1,je.length=0,dp(),Fa=null,(je.length||gs.length)&&pp()}}let Sn=null,mp=null;function Oa(n){const t=Sn;return Sn=n,mp=n&&n.type.__scopeId||null,t}function _p(n,t=Sn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ka(-1);const s=Oa(t);let o;try{o=n(...r)}finally{Oa(s),i._d&&ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $o(n,t){if(Sn===null)return n;const e=ul(Sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=fe]=t[r];s&&(Vt(s)&&(s={mounted:s,updated:s}),s.deep&&Ti(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function dr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Di(),qn(l,e,8,[n.el,a,n,t]),Li())}}function Ag(n,t){if(Ge){let e=Ge.provides;const i=Ge.parent&&Ge.parent.provides;i===e&&(e=Ge.provides=Object.create(i)),e[n]=t}}function Ma(n,t,e=!1){const i=Yp();if(i||vs){let r=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}const Cg=Symbol.for("v-scx"),Rg=()=>Ma(Cg);function ya(n,t,e){return gp(n,t,e)}function gp(n,t,e=fe){const{immediate:i,deep:r,flush:s,once:o}=e,a=Ne({},e),l=t&&i||!t&&s!=="post";let c;if(Mo){if(s==="sync"){const d=Rg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=si,d.resume=si,d.pause=si,d}}const u=Ge;a.call=(d,g,_)=>qn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{en(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Yu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=bg(n,t,a);return Mo&&(c?c.push(h):l&&h()),h}function Pg(n,t,e){const i=this.proxy,r=Se(n)?n.includes(".")?vp(i,n):()=>i[n]:n.bind(i,i);let s;Vt(t)?s=t:(s=t.handler,e=t);const o=Uo(this),a=gp(r,s.bind(i),e);return o(),a}function vp(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Dg=Symbol("_vte"),xp=n=>n.__isTeleport,Kn=Symbol("_leaveCb"),Xs=Symbol("_enterCb");function Lg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ki(()=>{n.isMounted=!0}),Ap(()=>{n.isUnmounting=!0}),n}const Cn=[Function,Array],Sp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Cn,onEnter:Cn,onAfterEnter:Cn,onEnterCancelled:Cn,onBeforeLeave:Cn,onLeave:Cn,onAfterLeave:Cn,onLeaveCancelled:Cn,onBeforeAppear:Cn,onAppear:Cn,onAfterAppear:Cn,onAppearCancelled:Cn},Mp=n=>{const t=n.subTree;return t.component?Mp(t.component):t},Ig={name:"BaseTransition",props:Sp,setup(n,{slots:t}){const e=Yp(),i=Lg();return()=>{const r=t.default&&Ep(t.default(),!0),s=r&&r.length?yp(r):e.subTree?Ju():void 0;if(!s)return;const o=te(n),{mode:a}=o;if(i.isLeaving)return Tl(s);const l=kf(s);if(!l)return Tl(s);let c=bc(l,o,i,e,f=>c=f);l.type!==Ke&&xo(l,c);let u=e.subTree&&kf(e.subTree);if(u&&u.type!==Ke&&!Pr(u,l)&&Mp(e).type!==Ke){let f=bc(u,o,i,e);if(xo(u,f),a==="out-in"&&l.type!==Ke)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Tl(s);a==="in-out"&&l.type!==Ke?f.delayLeave=(h,d,g)=>{const _=bp(i,u);_[String(u.key)]=u,h[Kn]=()=>{d(),h[Kn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function yp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ke){t=e;break}}return t}const Ug=Ig;function bp(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function bc(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:E}=t,v=String(n.key),C=bp(e,n),P=(S,M)=>{S&&qn(S,i,9,M)},A=(S,M)=>{const L=M[1];P(S,M),It(S)?S.every(N=>N.length<=1)&&L():S.length<=1&&L()},D={mode:o,persisted:a,beforeEnter(S){let M=l;if(!e.isMounted)if(s)M=m||l;else return;S[Kn]&&S[Kn](!0);const L=C[v];L&&Pr(n,L)&&L.el[Kn]&&L.el[Kn](),P(M,[S])},enter(S){if(C[v]===n)return;let M=c,L=u,N=f;if(!e.isMounted)if(s)M=p||c,L=y||u,N=E||f;else return;let F=!1;S[Xs]=V=>{F||(F=!0,V?P(N,[S]):P(L,[S]),D.delayedLeave&&D.delayedLeave(),S[Xs]=void 0)};const X=S[Xs].bind(null,!1);M?A(M,[S,X]):X()},leave(S,M){const L=String(n.key);if(S[Xs]&&S[Xs](!0),e.isUnmounting)return M();P(h,[S]);let N=!1;S[Kn]=X=>{N||(N=!0,M(),X?P(_,[S]):P(g,[S]),S[Kn]=void 0,C[L]===n&&delete C[L])};const F=S[Kn].bind(null,!1);C[L]=n,d?A(d,[S,F]):F()},clone(S){const M=bc(S,t,e,i,r);return r&&r(M),M}};return D}function Tl(n){if(sl(n))return n=or(n),n.children=null,n}function kf(n){if(!sl(n))return xp(n.type)&&n.children?yp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Vt(e.default))return e.default()}}function xo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,xo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Ep(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===ae?(o.patchFlag&128&&r++,i=i.concat(Ep(o.children,t,a))):(t||o.type!==Ke)&&i.push(a!=null?or(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Tp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hf(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ba=new WeakMap;function lo(n,t,e,i,r=!1){if(It(n)){n.forEach((_,m)=>lo(_,t&&(It(t)?t[m]:t),e,i,r));return}if(co(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lo(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?ul(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState,h=te(f),d=f===fe?kd:_=>Hf(u,_)?!1:ie(h,_),g=(_,m)=>!(m&&Hf(u,m));if(c!=null&&c!==l){if(Vf(t),Se(c))u[c]=null,d(c)&&(f[c]=null);else if(Xe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Vt(l))Io(l,a,12,[o,u]);else{const _=Se(l),m=Xe(l);if(_||m){const p=()=>{if(n.f){const y=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)It(y)&&Nu(y,s);else if(It(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const E=[s];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{p(),Ba.delete(n)};y.id=-1,Ba.set(n,y),en(y,e)}else Vf(n),p()}}}function Vf(n){const t=Ba.get(n);t&&(t.flags|=8,Ba.delete(n))}nl().requestIdleCallback;nl().cancelIdleCallback;const co=n=>!!n.type.__asyncLoader,sl=n=>n.type.__isKeepAlive;function Ng(n,t){wp(n,"a",t)}function Fg(n,t){wp(n,"da",t)}function wp(n,t,e=Ge){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ol(t,i,e),e){let r=e.parent;for(;r&&r.parent;)sl(r.parent.vnode)&&Og(i,t,e,r),r=r.parent}}function Og(n,t,e,i){const r=ol(t,n,i,!0);Bs(()=>{Nu(i[t],r)},e)}function ol(n,t,e=Ge,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Di();const a=Uo(e),l=qn(t,e,n,o);return a(),Li(),l});return i?r.unshift(s):r.push(s),s}}const zi=n=>(t,e=Ge)=>{(!Mo||n==="sp")&&ol(n,(...i)=>t(...i),e)},Bg=zi("bm"),ki=zi("m"),zg=zi("bu"),kg=zi("u"),Ap=zi("bum"),Bs=zi("um"),Hg=zi("sp"),Vg=zi("rtg"),Gg=zi("rtc");function Wg(n,t=Ge){ol("ec",n,t)}const Xg="components",Cp=Symbol.for("v-ndc");function ju(n){return Se(n)?qg(Xg,n,!1)||n:n||Cp}function qg(n,t,e=!0,i=!1){const r=Sn||Ge;if(r){const s=r.type;{const a=P0(s,!1);if(a&&(a===t||a===Ze(t)||a===el(Ze(t))))return s}const o=Gf(r[n]||s[n],t)||Gf(r.appContext[n],t);return!o&&i?s:o}}function Gf(n,t){return n&&(n[t]||n[Ze(t)]||n[el(Ze(t))])}function Je(n,t,e,i){let r;const s=e,o=It(n);if(o||Se(n)){const a=o&&Or(n);let l=!1,c=!1;a&&(l=!Nn(n),c=Ii(n),n=il(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?Ts(Xn(n[u])):Xn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(re(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const Ec=n=>n?jp(n)?ul(n):Ec(n.parent):null,uo=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ec(n.parent),$root:n=>Ec(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pp(n),$forceUpdate:n=>n.f||(n.f=()=>{Yu(n.update)}),$nextTick:n=>n.n||(n.n=fp.bind(n.proxy)),$watch:n=>Pg.bind(n)}),wl=(n,t)=>n!==fe&&!n.__isScriptSetup&&ie(n,t),$g={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(wl(i,t))return o[t]=1,i[t];if(r!==fe&&ie(r,t))return o[t]=2,r[t];if(ie(s,t))return o[t]=3,s[t];if(e!==fe&&ie(e,t))return o[t]=4,e[t];Tc&&(o[t]=0)}}const c=uo[t];let u,f;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==fe&&ie(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ie(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return wl(r,t)?(r[t]=e,!0):i!==fe&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==fe&&a[0]!=="$"&&ie(n,a)||wl(t,a)||ie(s,a)||ie(i,a)||ie(uo,a)||ie(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Wf(n){return It(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Tc=!0;function Yg(n){const t=Pp(n),e=n.proxy,i=n.ctx;Tc=!1,t.beforeCreate&&Xf(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:v,render:C,renderTracked:P,renderTriggered:A,errorCaptured:D,serverPrefetch:S,expose:M,inheritAttrs:L,components:N,directives:F,filters:X}=t;if(c&&jg(c,i,null),o)for(const q in o){const B=o[q];Vt(B)&&(i[q]=B.bind(e))}if(r){const q=r.call(e,e);re(q)&&(n.data=Xu(q))}if(Tc=!0,s)for(const q in s){const B=s[q],ct=Vt(B)?B.bind(e,e):Vt(B.get)?B.get.bind(e,e):si,_t=!Vt(B)&&Vt(B.set)?B.set.bind(e):si,bt=L0({get:ct,set:_t});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Ct=>bt.value=Ct})}if(a)for(const q in a)Rp(a[q],i,e,q);if(l){const q=Vt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(B=>{Ag(B,q[B])})}u&&Xf(u,n,"c");function H(q,B){It(B)?B.forEach(ct=>q(ct.bind(e))):B&&q(B.bind(e))}if(H(Bg,f),H(ki,h),H(zg,d),H(kg,g),H(Ng,_),H(Fg,m),H(Wg,D),H(Gg,P),H(Vg,A),H(Ap,y),H(Bs,v),H(Hg,S),It(M))if(M.length){const q=n.exposed||(n.exposed={});M.forEach(B=>{Object.defineProperty(q,B,{get:()=>e[B],set:ct=>e[B]=ct,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===si&&(n.render=C),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),F&&(n.directives=F),S&&Tp(n)}function jg(n,t,e=si){It(n)&&(n=wc(n));for(const i in n){const r=n[i];let s;re(r)?"default"in r?s=Ma(r.from||i,r.default,!0):s=Ma(r.from||i):s=Ma(r),Xe(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Xf(n,t,e){qn(It(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Rp(n,t,e,i){let r=i.includes(".")?vp(e,i):()=>e[i];if(Se(n)){const s=t[n];Vt(s)&&ya(r,s)}else if(Vt(n))ya(r,n.bind(e));else if(re(n))if(It(n))n.forEach(s=>Rp(s,t,e,i));else{const s=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(s)&&ya(r,s,n)}}function Pp(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>za(l,c,o,!0)),za(l,t,o)),re(t)&&s.set(t,l),l}function za(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&za(n,s,e,!0),r&&r.forEach(o=>za(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Kg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Kg={data:qf,props:$f,emits:$f,methods:Qs,computed:Qs,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Qs,directives:Qs,watch:Jg,provide:qf,inject:Zg};function qf(n,t){return t?n?function(){return Ne(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function Zg(n,t){return Qs(wc(n),wc(t))}function wc(n){if(It(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function $e(n,t){return n?[...new Set([].concat(n,t))]:t}function Qs(n,t){return n?Ne(Object.create(null),n,t):t}function $f(n,t){return n?It(n)&&It(t)?[...new Set([...n,...t])]:Ne(Object.create(null),Wf(n),Wf(t??{})):t}function Jg(n,t){if(!n)return t;if(!t)return n;const e=Ne(Object.create(null),n);for(const i in t)e[i]=$e(n[i],t[i]);return e}function Dp(){return{app:null,config:{isNativeTag:kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function t0(n,t){return function(i,r=null){Vt(i)||(i=Ne({},i)),r!=null&&!re(r)&&(r=null);const s=Dp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Qg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:I0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Vt(u.install)?(o.add(u),u.install(c,...f)):Vt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Yt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ul(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(qn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=vs;vs=c;try{return u()}finally{vs=f}}};return c}}let vs=null;const e0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ze(t)}Modifiers`]||n[`${Xr(t)}Modifiers`];function n0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||fe;let r=e;const s=t.startsWith("update:"),o=s&&e0(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>Se(u)?u.trim():u)),o.number&&(r=e.map(Ou)));let a,l=i[a=Sl(t)]||i[a=Sl(Ze(t))];!l&&s&&(l=i[a=Sl(Xr(t))]),l&&qn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,qn(c,n,6,r)}}const i0=new WeakMap;function Lp(n,t,e=!1){const i=e?i0:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Vt(n)){const l=c=>{const u=Lp(c,t,!0);u&&(a=!0,Ne(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(re(n)&&i.set(n,null),null):(It(s)?s.forEach(l=>o[l]=null):Ne(o,s),re(n)&&i.set(n,o),o)}function al(n,t){return!n||!Ja(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,Xr(t))||ie(n,t))}function Yf(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Oa(n);let p,y;try{if(e.shapeFlag&4){const v=r||i,C=v;p=Qn(c.call(C,v,u,f,d,h,g)),y=a}else{const v=t;p=Qn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=t.props?a:r0(a)}}catch(v){fo.length=0,rl(v,n,1),p=Yt(Ke)}let E=p;if(y&&_!==!1){const v=Object.keys(y),{shapeFlag:C}=E;v.length&&C&7&&(s&&v.some(Qa)&&(y=s0(y,s)),E=or(E,y,!1,!0))}return e.dirs&&(E=or(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&xo(E,e.transition),p=E,Oa(m),p}const r0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ja(e))&&((t||(t={}))[e]=n[e]);return t},s0=(n,t)=>{const e={};for(const i in n)(!Qa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function o0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?jf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Ip(o,i,h)&&!al(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jf(i,o,c):!0:!!o;return!1}function jf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Ip(t,n,s)&&!al(e,s))return!0}return!1}function Ip(n,t,e){const i=n[e],r=t[e];return e==="style"&&re(i)&&re(r)?!zu(i,r):i!==r}function a0({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Up={},Np=()=>Object.create(Up),Fp=n=>Object.getPrototypeOf(n)===Up;function l0(n,t,e,i=!1){const r={},s=Np();n.propsDefaults=Object.create(null),Op(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:mg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function c0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=te(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(al(n.emitsOptions,h))continue;const d=t[h];if(l)if(ie(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Ze(h);r[g]=Ac(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Op(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!ie(t,f)&&((u=Xr(f))===f||!ie(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Ac(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ie(t,f))&&(delete s[f],c=!0)}c&&Ei(n.attrs,"set","")}function Op(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(so(l))continue;const c=t[l];let u;r&&ie(r,u=Ze(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:al(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=te(e),c=a||fe;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Ac(r,l,f,c[f],n,!ie(c,f))}}return o}function Ac(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=Uo(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Xr(e))&&(i=!0))}return i}const u0=new WeakMap;function Bp(n,t,e=!1){const i=e?u0:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Vt(n)){const u=f=>{l=!0;const[h,d]=Bp(f,t,!0);Ne(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return re(n)&&i.set(n,ms),ms;if(It(s))for(let u=0;u<s.length;u++){const f=Ze(s[u]);Kf(f)&&(o[f]=fe)}else if(s)for(const u in s){const f=Ze(u);if(Kf(f)){const h=s[u],d=o[f]=It(h)||Vt(h)?{type:h}:Ne({},h),g=d.type;let _=!1,m=!0;if(It(g))for(let p=0;p<g.length;++p){const y=g[p],E=Vt(y)&&y.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Vt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ie(d,"default"))&&a.push(f)}}const c=[o,a];return re(n)&&i.set(n,c),c}function Kf(n){return n[0]!=="$"&&!so(n)}const Ku=n=>n==="_"||n==="_ctx"||n==="$stable",Zu=n=>It(n)?n.map(Qn):[Qn(n)],f0=(n,t,e)=>{if(t._n)return t;const i=_p((...r)=>Zu(t(...r)),e);return i._c=!1,i},zp=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Ku(r))continue;const s=n[r];if(Vt(s))t[r]=f0(r,s,i);else if(s!=null){const o=Zu(s);t[r]=()=>o}}},kp=(n,t)=>{const e=Zu(t);n.slots.default=()=>e},Hp=(n,t,e)=>{for(const i in t)(e||!Ku(i))&&(n[i]=t[i])},h0=(n,t,e)=>{const i=n.slots=Np();if(n.vnode.shapeFlag&32){const r=t._;r?(Hp(i,t,e),e&&Xd(i,"_",r,!0)):zp(t,i)}else t&&kp(n,t)},d0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=fe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Hp(r,t,e):(s=!t.$stable,zp(t,r)),o=t}else t&&(kp(n,t),o={default:1});if(s)for(const a in r)!Ku(a)&&o[a]==null&&delete r[a]},en=v0;function p0(n){return m0(n)}function m0(n,t){const e=nl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=si,insertStaticContent:g}=n,_=(R,U,w,rt=null,J=null,Q=null,it=void 0,ot=null,tt=!!U.dynamicChildren)=>{if(R===U)return;R&&!Pr(R,U)&&(rt=mt(R),Ct(R,J,Q,!0),R=null),U.patchFlag===-2&&(tt=!1,U.dynamicChildren=null);const{type:b,ref:x,shapeFlag:I}=U;switch(b){case ll:m(R,U,w,rt);break;case Ke:p(R,U,w,rt);break;case ba:R==null&&y(U,w,rt,it);break;case ae:N(R,U,w,rt,J,Q,it,ot,tt);break;default:I&1?C(R,U,w,rt,J,Q,it,ot,tt):I&6?F(R,U,w,rt,J,Q,it,ot,tt):(I&64||I&128)&&b.process(R,U,w,rt,J,Q,it,ot,tt,zt)}x!=null&&J?lo(x,R&&R.ref,Q,U||R,!U):x==null&&R&&R.ref!=null&&lo(R.ref,null,Q,R,!0)},m=(R,U,w,rt)=>{if(R==null)i(U.el=a(U.children),w,rt);else{const J=U.el=R.el;U.children!==R.children&&c(J,U.children)}},p=(R,U,w,rt)=>{R==null?i(U.el=l(U.children||""),w,rt):U.el=R.el},y=(R,U,w,rt)=>{[R.el,R.anchor]=g(R.children,U,w,rt,R.el,R.anchor)},E=({el:R,anchor:U},w,rt)=>{let J;for(;R&&R!==U;)J=h(R),i(R,w,rt),R=J;i(U,w,rt)},v=({el:R,anchor:U})=>{let w;for(;R&&R!==U;)w=h(R),r(R),R=w;r(U)},C=(R,U,w,rt,J,Q,it,ot,tt)=>{if(U.type==="svg"?it="svg":U.type==="math"&&(it="mathml"),R==null)P(U,w,rt,J,Q,it,ot,tt);else{const b=R.el&&R.el._isVueCE?R.el:null;try{b&&b._beginPatch(),S(R,U,J,Q,it,ot,tt)}finally{b&&b._endPatch()}}},P=(R,U,w,rt,J,Q,it,ot)=>{let tt,b;const{props:x,shapeFlag:I,transition:W,dirs:$}=R;if(tt=R.el=o(R.type,Q,x&&x.is,x),I&8?u(tt,R.children):I&16&&D(R.children,tt,null,rt,J,Al(R,Q),it,ot),$&&dr(R,null,rt,"created"),A(tt,R,R.scopeId,it,rt),x){for(const dt in x)dt!=="value"&&!so(dt)&&s(tt,dt,null,x[dt],Q,rt);"value"in x&&s(tt,"value",null,x.value,Q),(b=x.onVnodeBeforeMount)&&Yn(b,rt,R)}$&&dr(R,null,rt,"beforeMount");const Y=_0(J,W);Y&&W.beforeEnter(tt),i(tt,U,w),((b=x&&x.onVnodeMounted)||Y||$)&&en(()=>{try{b&&Yn(b,rt,R),Y&&W.enter(tt),$&&dr(R,null,rt,"mounted")}finally{}},J)},A=(R,U,w,rt,J)=>{if(w&&d(R,w),rt)for(let Q=0;Q<rt.length;Q++)d(R,rt[Q]);if(J){let Q=J.subTree;if(U===Q||Xp(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const it=J.vnode;A(R,it,it.scopeId,it.slotScopeIds,J.parent)}}},D=(R,U,w,rt,J,Q,it,ot,tt=0)=>{for(let b=tt;b<R.length;b++){const x=R[b]=ot?yi(R[b]):Qn(R[b]);_(null,x,U,w,rt,J,Q,it,ot)}},S=(R,U,w,rt,J,Q,it)=>{const ot=U.el=R.el;let{patchFlag:tt,dynamicChildren:b,dirs:x}=U;tt|=R.patchFlag&16;const I=R.props||fe,W=U.props||fe;let $;if(w&&pr(w,!1),($=W.onVnodeBeforeUpdate)&&Yn($,w,U,R),x&&dr(U,R,w,"beforeUpdate"),w&&pr(w,!0),(I.innerHTML&&W.innerHTML==null||I.textContent&&W.textContent==null)&&u(ot,""),b?M(R.dynamicChildren,b,ot,w,rt,Al(U,J),Q):it||B(R,U,ot,null,w,rt,Al(U,J),Q,!1),tt>0){if(tt&16)L(ot,I,W,w,J);else if(tt&2&&I.class!==W.class&&s(ot,"class",null,W.class,J),tt&4&&s(ot,"style",I.style,W.style,J),tt&8){const Y=U.dynamicProps;for(let dt=0;dt<Y.length;dt++){const at=Y[dt],ft=I[at],Lt=W[at];(Lt!==ft||at==="value")&&s(ot,at,ft,Lt,J,w)}}tt&1&&R.children!==U.children&&u(ot,U.children)}else!it&&b==null&&L(ot,I,W,w,J);(($=W.onVnodeUpdated)||x)&&en(()=>{$&&Yn($,w,U,R),x&&dr(U,R,w,"updated")},rt)},M=(R,U,w,rt,J,Q,it)=>{for(let ot=0;ot<U.length;ot++){const tt=R[ot],b=U[ot],x=tt.el&&(tt.type===ae||!Pr(tt,b)||tt.shapeFlag&198)?f(tt.el):w;_(tt,b,x,null,rt,J,Q,it,!0)}},L=(R,U,w,rt,J)=>{if(U!==w){if(U!==fe)for(const Q in U)!so(Q)&&!(Q in w)&&s(R,Q,U[Q],null,J,rt);for(const Q in w){if(so(Q))continue;const it=w[Q],ot=U[Q];it!==ot&&Q!=="value"&&s(R,Q,ot,it,J,rt)}"value"in w&&s(R,"value",U.value,w.value,J)}},N=(R,U,w,rt,J,Q,it,ot,tt)=>{const b=U.el=R?R.el:a(""),x=U.anchor=R?R.anchor:a("");let{patchFlag:I,dynamicChildren:W,slotScopeIds:$}=U;$&&(ot=ot?ot.concat($):$),R==null?(i(b,w,rt),i(x,w,rt),D(U.children||[],w,x,J,Q,it,ot,tt)):I>0&&I&64&&W&&R.dynamicChildren&&R.dynamicChildren.length===W.length?(M(R.dynamicChildren,W,w,J,Q,it,ot),(U.key!=null||J&&U===J.subTree)&&Vp(R,U,!0)):B(R,U,w,x,J,Q,it,ot,tt)},F=(R,U,w,rt,J,Q,it,ot,tt)=>{U.slotScopeIds=ot,R==null?U.shapeFlag&512?J.ctx.activate(U,w,rt,it,tt):X(U,w,rt,J,Q,it,tt):V(R,U,tt)},X=(R,U,w,rt,J,Q,it)=>{const ot=R.component=T0(R,rt,J);if(sl(R)&&(ot.ctx.renderer=zt),w0(ot,!1,it),ot.asyncDep){if(J&&J.registerDep(ot,H,it),!R.el){const tt=ot.subTree=Yt(Ke);p(null,tt,U,w),R.placeholder=tt.el}}else H(ot,R,U,w,J,Q,it)},V=(R,U,w)=>{const rt=U.component=R.component;if(o0(R,U,w))if(rt.asyncDep&&!rt.asyncResolved){q(rt,U,w);return}else rt.next=U,rt.update();else U.el=R.el,rt.vnode=U},H=(R,U,w,rt,J,Q,it)=>{const ot=()=>{if(R.isMounted){let{next:I,bu:W,u:$,parent:Y,vnode:dt}=R;{const vt=Gp(R);if(vt){I&&(I.el=dt.el,q(R,I,it)),vt.asyncDep.then(()=>{en(()=>{R.isUnmounted||b()},J)});return}}let at=I,ft;pr(R,!1),I?(I.el=dt.el,q(R,I,it)):I=dt,W&&Sa(W),(ft=I.props&&I.props.onVnodeBeforeUpdate)&&Yn(ft,Y,I,dt),pr(R,!0);const Lt=Yf(R),lt=R.subTree;R.subTree=Lt,_(lt,Lt,f(lt.el),mt(lt),R,J,Q),I.el=Lt.el,at===null&&a0(R,Lt.el),$&&en($,J),(ft=I.props&&I.props.onVnodeUpdated)&&en(()=>Yn(ft,Y,I,dt),J)}else{let I;const{el:W,props:$}=U,{bm:Y,m:dt,parent:at,root:ft,type:Lt}=R,lt=co(U);pr(R,!1),Y&&Sa(Y),!lt&&(I=$&&$.onVnodeBeforeMount)&&Yn(I,at,U),pr(R,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(Lt,R.parent?R.parent.type:void 0);const vt=R.subTree=Yf(R);_(null,vt,w,rt,R,J,Q),U.el=vt.el}if(dt&&en(dt,J),!lt&&(I=$&&$.onVnodeMounted)){const vt=U;en(()=>Yn(I,at,vt),J)}(U.shapeFlag&256||at&&co(at.vnode)&&at.vnode.shapeFlag&256)&&R.a&&en(R.a,J),R.isMounted=!0,U=w=rt=null}};R.scope.on();const tt=R.effect=new jd(ot);R.scope.off();const b=R.update=tt.run.bind(tt),x=R.job=tt.runIfDirty.bind(tt);x.i=R,x.id=R.uid,tt.scheduler=()=>Yu(x),pr(R,!0),b()},q=(R,U,w)=>{U.component=R;const rt=R.vnode.props;R.vnode=U,R.next=null,c0(R,U.props,rt,w),d0(R,U.children,w),Di(),zf(R),Li()},B=(R,U,w,rt,J,Q,it,ot,tt=!1)=>{const b=R&&R.children,x=R?R.shapeFlag:0,I=U.children,{patchFlag:W,shapeFlag:$}=U;if(W>0){if(W&128){_t(b,I,w,rt,J,Q,it,ot,tt);return}else if(W&256){ct(b,I,w,rt,J,Q,it,ot,tt);return}}$&8?(x&16&&Et(b,J,Q),I!==b&&u(w,I)):x&16?$&16?_t(b,I,w,rt,J,Q,it,ot,tt):Et(b,J,Q,!0):(x&8&&u(w,""),$&16&&D(I,w,rt,J,Q,it,ot,tt))},ct=(R,U,w,rt,J,Q,it,ot,tt)=>{R=R||ms,U=U||ms;const b=R.length,x=U.length,I=Math.min(b,x);let W;for(W=0;W<I;W++){const $=U[W]=tt?yi(U[W]):Qn(U[W]);_(R[W],$,w,null,J,Q,it,ot,tt)}b>x?Et(R,J,Q,!0,!1,I):D(U,w,rt,J,Q,it,ot,tt,I)},_t=(R,U,w,rt,J,Q,it,ot,tt)=>{let b=0;const x=U.length;let I=R.length-1,W=x-1;for(;b<=I&&b<=W;){const $=R[b],Y=U[b]=tt?yi(U[b]):Qn(U[b]);if(Pr($,Y))_($,Y,w,null,J,Q,it,ot,tt);else break;b++}for(;b<=I&&b<=W;){const $=R[I],Y=U[W]=tt?yi(U[W]):Qn(U[W]);if(Pr($,Y))_($,Y,w,null,J,Q,it,ot,tt);else break;I--,W--}if(b>I){if(b<=W){const $=W+1,Y=$<x?U[$].el:rt;for(;b<=W;)_(null,U[b]=tt?yi(U[b]):Qn(U[b]),w,Y,J,Q,it,ot,tt),b++}}else if(b>W)for(;b<=I;)Ct(R[b],J,Q,!0),b++;else{const $=b,Y=b,dt=new Map;for(b=Y;b<=W;b++){const pt=U[b]=tt?yi(U[b]):Qn(U[b]);pt.key!=null&&dt.set(pt.key,b)}let at,ft=0;const Lt=W-Y+1;let lt=!1,vt=0;const Pt=new Array(Lt);for(b=0;b<Lt;b++)Pt[b]=0;for(b=$;b<=I;b++){const pt=R[b];if(ft>=Lt){Ct(pt,J,Q,!0);continue}let Ot;if(pt.key!=null)Ot=dt.get(pt.key);else for(at=Y;at<=W;at++)if(Pt[at-Y]===0&&Pr(pt,U[at])){Ot=at;break}Ot===void 0?Ct(pt,J,Q,!0):(Pt[Ot-Y]=b+1,Ot>=vt?vt=Ot:lt=!0,_(pt,U[Ot],w,null,J,Q,it,ot,tt),ft++)}const Ut=lt?g0(Pt):ms;for(at=Ut.length-1,b=Lt-1;b>=0;b--){const pt=Y+b,Ot=U[pt],kt=U[pt+1],se=pt+1<x?kt.el||Wp(kt):rt;Pt[b]===0?_(null,Ot,w,se,J,Q,it,ot,tt):lt&&(at<0||b!==Ut[at]?bt(Ot,w,se,2):at--)}}},bt=(R,U,w,rt,J=null)=>{const{el:Q,type:it,transition:ot,children:tt,shapeFlag:b}=R;if(b&6){bt(R.component.subTree,U,w,rt);return}if(b&128){R.suspense.move(U,w,rt);return}if(b&64){it.move(R,U,w,zt);return}if(it===ae){i(Q,U,w);for(let I=0;I<tt.length;I++)bt(tt[I],U,w,rt);i(R.anchor,U,w);return}if(it===ba){E(R,U,w);return}if(rt!==2&&b&1&&ot)if(rt===0)ot.beforeEnter(Q),i(Q,U,w),en(()=>ot.enter(Q),J);else{const{leave:I,delayLeave:W,afterLeave:$}=ot,Y=()=>{R.ctx.isUnmounted?r(Q):i(Q,U,w)},dt=()=>{Q._isLeaving&&Q[Kn](!0),I(Q,()=>{Y(),$&&$()})};W?W(Q,Y,dt):dt()}else i(Q,U,w)},Ct=(R,U,w,rt=!1,J=!1)=>{const{type:Q,props:it,ref:ot,children:tt,dynamicChildren:b,shapeFlag:x,patchFlag:I,dirs:W,cacheIndex:$,memo:Y}=R;if(I===-2&&(J=!1),ot!=null&&(Di(),lo(ot,null,w,R,!0),Li()),$!=null&&(U.renderCache[$]=void 0),x&256){U.ctx.deactivate(R);return}const dt=x&1&&W,at=!co(R);let ft;if(at&&(ft=it&&it.onVnodeBeforeUnmount)&&Yn(ft,U,R),x&6)ut(R.component,w,rt);else{if(x&128){R.suspense.unmount(w,rt);return}dt&&dr(R,null,U,"beforeUnmount"),x&64?R.type.remove(R,U,w,zt,rt):b&&!b.hasOnce&&(Q!==ae||I>0&&I&64)?Et(b,U,w,!1,!0):(Q===ae&&I&384||!J&&x&16)&&Et(tt,U,w),rt&&Zt(R)}const Lt=Y!=null&&$==null;(at&&(ft=it&&it.onVnodeUnmounted)||dt||Lt)&&en(()=>{ft&&Yn(ft,U,R),dt&&dr(R,null,U,"unmounted"),Lt&&(R.el=null)},w)},Zt=R=>{const{type:U,el:w,anchor:rt,transition:J}=R;if(U===ae){nt(w,rt);return}if(U===ba){v(R);return}const Q=()=>{r(w),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:it,delayLeave:ot}=J,tt=()=>it(w,Q);ot?ot(R.el,Q,tt):tt()}else Q()},nt=(R,U)=>{let w;for(;R!==U;)w=h(R),r(R),R=w;r(U)},ut=(R,U,w)=>{const{bum:rt,scope:J,job:Q,subTree:it,um:ot,m:tt,a:b}=R;Zf(tt),Zf(b),rt&&Sa(rt),J.stop(),Q&&(Q.flags|=8,Ct(it,R,U,w)),ot&&en(ot,U),en(()=>{R.isUnmounted=!0},U)},Et=(R,U,w,rt=!1,J=!1,Q=0)=>{for(let it=Q;it<R.length;it++)Ct(R[it],U,w,rt,J)},mt=R=>{if(R.shapeFlag&6)return mt(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=h(R.anchor||R.el),w=U&&U[Dg];return w?h(w):U};let Dt=!1;const Ft=(R,U,w)=>{let rt;R==null?U._vnode&&(Ct(U._vnode,null,null,!0),rt=U._vnode.component):_(U._vnode||null,R,U,null,null,null,w),U._vnode=R,Dt||(Dt=!0,zf(rt),dp(),Dt=!1)},zt={p:_,um:Ct,m:bt,r:Zt,mt:X,mc:D,pc:B,pbc:M,n:mt,o:n};return{render:Ft,hydrate:void 0,createApp:t0(Ft)}}function Al({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function pr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function _0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Vp(n,t,e=!1){const i=n.children,r=t.children;if(It(i)&&It(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Vp(o,a)),a.type===ll&&(a.patchFlag===-1&&(a=r[s]=yi(a)),a.el=o.el),a.type===Ke&&!a.el&&(a.el=o.el)}}function g0(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Gp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gp(t)}function Zf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Wp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Wp(t.subTree):null}const Xp=n=>n.__isSuspense;function v0(n,t){t&&t.pendingBranch?It(n)?t.effects.push(...n):t.effects.push(n):wg(n)}const ae=Symbol.for("v-fgt"),ll=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),fo=[];let Mn=null;function Nt(n=!1){fo.push(Mn=n?null:[])}function x0(){fo.pop(),Mn=fo[fo.length-1]||null}let So=1;function ka(n,t=!1){So+=n,n<0&&Mn&&t&&(Mn.hasOnce=!0)}function qp(n){return n.dynamicChildren=So>0?Mn||ms:null,x0(),So>0&&Mn&&Mn.push(n),n}function Ht(n,t,e,i,r,s){return qp(G(n,t,e,i,r,s,!0))}function cl(n,t,e,i,r){return qp(Yt(n,t,e,i,r,!0))}function Ha(n){return n?n.__v_isVNode===!0:!1}function Pr(n,t){return n.type===t.type&&n.key===t.key}const $p=({key:n})=>n??null,Ea=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Se(n)||Xe(n)||Vt(n)?{i:Sn,r:n,k:t,f:!!e}:n:null);function G(n,t=null,e=null,i=0,r=null,s=n===ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&$p(t),ref:t&&Ea(t),scopeId:mp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Sn};return a?(Qu(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),So>0&&!o&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const Yt=S0;function S0(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Cp)&&(n=Ke),Ha(n)){const a=or(n,t,!0);return e&&Qu(a,e),So>0&&!s&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(n)]=a:Mn.push(a)),a.patchFlag=-2,a}if(D0(n)&&(n=n.__vccOpts),t){t=M0(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=sn(a)),re(l)&&($u(l)&&!It(l)&&(l=Ne({},l)),t.style=Bu(l))}const o=Se(n)?1:Xp(n)?128:xp(n)?64:re(n)?4:Vt(n)?2:0;return G(n,t,e,i,r,o,s,!0)}function M0(n){return n?$u(n)||Fp(n)?Ne({},n):n:null}function or(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?y0(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$p(c),ref:t&&t.ref?e&&s?It(s)?s.concat(Ea(t)):[s,Ea(t)]:Ea(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ae?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&xo(u,l.clone(u)),u}function Cc(n=" ",t=0){return Yt(ll,null,n,t)}function ws(n,t){const e=Yt(ba,null,n);return e.staticCount=t,e}function Ju(n="",t=!1){return t?(Nt(),cl(Ke,null,n)):Yt(Ke,null,n)}function Qn(n){return n==null||typeof n=="boolean"?Yt(Ke):It(n)?Yt(ae,null,n.slice()):Ha(n)?yi(n):Yt(ll,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function Qu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(It(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Qu(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Fp(t)?t._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:Sn},e=32):(t=String(t),i&64?(e=16,t=[Cc(t)]):e=8);n.children=t,n.shapeFlag|=e}function y0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=sn([t.class,i.class]));else if(r==="style")t.style=Bu([t.style,i.style]);else if(Ja(r)){const s=t[r],o=i[r];o&&s!==o&&!(It(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Qa(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function Yn(n,t,e,i=null){qn(n,t,7,[e,i])}const b0=Dp();let E0=0;function T0(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||b0,s={uid:E0++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,r),emitsOptions:Lp(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=n0.bind(null,s),n.ce&&n.ce(s),s}let Ge=null;const Yp=()=>Ge||Sn;let Va,Rc;{const n=nl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Va=t("__VUE_INSTANCE_SETTERS__",e=>Ge=e),Rc=t("__VUE_SSR_SETTERS__",e=>Mo=e)}const Uo=n=>{const t=Ge;return Va(n),n.scope.on(),()=>{n.scope.off(),Va(t)}},Jf=()=>{Ge&&Ge.scope.off(),Va(null)};function jp(n){return n.vnode.shapeFlag&4}let Mo=!1;function w0(n,t=!1,e=!1){t&&Rc(t);const{props:i,children:r}=n.vnode,s=jp(n);l0(n,i,s,t),h0(n,r,e||t);const o=s?A0(n,t):void 0;return t&&Rc(!1),o}function A0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$g);const{setup:i}=e;if(i){Di();const r=n.setupContext=i.length>1?R0(n):null,s=Uo(n),o=Io(i,n,0,[n.props,r]),a=Vd(o);if(Li(),s(),(a||n.sp)&&!co(n)&&Tp(n),a){if(o.then(Jf,Jf),t)return o.then(l=>{Qf(n,l)}).catch(l=>{rl(l,n,0)});n.asyncDep=o}else Qf(n,o)}else Kp(n)}function Qf(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:re(t)&&(n.setupState=cp(t)),Kp(n)}function Kp(n,t,e){const i=n.type;n.render||(n.render=i.render||si);{const r=Uo(n);Di();try{Yg(n)}finally{Li(),r()}}}const C0={get(n,t){return Ve(n,"get",""),n[t]}};function R0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,C0),slots:n.slots,emit:n.emit,expose:t}}function ul(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cp(_g(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in uo)return uo[e](n)},has(t,e){return e in t||e in uo}})):n.proxy}function P0(n,t=!0){return Vt(n)?n.displayName||n.name:n.name||t&&n.__name}function D0(n){return Vt(n)&&"__vccOpts"in n}const L0=(n,t)=>Mg(n,t,Mo);function $t(n,t,e){try{ka(-1);const i=arguments.length;return i===2?re(t)&&!It(t)?Ha(t)?Yt(n,null,[t]):Yt(n,t):Yt(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ha(e)&&(e=[e]),Yt(n,t,e))}finally{ka(1)}}const I0="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pc;const th=typeof window<"u"&&window.trustedTypes;if(th)try{Pc=th.createPolicy("vue",{createHTML:n=>n})}catch{}const Zp=Pc?n=>Pc.createHTML(n):n=>n,U0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,eh=Si&&Si.createElement("template"),F0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Si.createElementNS(U0,n):t==="mathml"?Si.createElementNS(N0,n):e?Si.createElement(n,{is:e}):Si.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{eh.innerHTML=Zp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=eh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Wi="transition",qs="animation",yo=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},O0=Ne({},Sp,Jp),B0=n=>(n.displayName="Transition",n.props=O0,n),z0=B0((n,{slots:t})=>$t(Ug,k0(n),t)),mr=(n,t=[])=>{It(n)?n.forEach(e=>e(...t)):n&&n(...t)},nh=n=>n?It(n)?n.some(t=>t.length>1):n.length>1:!1;function k0(n){const t={};for(const N in n)N in Jp||(t[N]=n[N]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=H0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:E,onLeave:v,onLeaveCancelled:C,onBeforeAppear:P=p,onAppear:A=y,onAppearCancelled:D=E}=t,S=(N,F,X,V)=>{N._enterCancelled=V,_r(N,F?u:a),_r(N,F?c:o),X&&X()},M=(N,F)=>{N._isLeaving=!1,_r(N,f),_r(N,d),_r(N,h),F&&F()},L=N=>(F,X)=>{const V=N?A:y,H=()=>S(F,N,X);mr(V,[F,H]),ih(()=>{_r(F,N?l:s),di(F,N?u:a),nh(V)||rh(F,i,_,H)})};return Ne(t,{onBeforeEnter(N){mr(p,[N]),di(N,s),di(N,o)},onBeforeAppear(N){mr(P,[N]),di(N,l),di(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,F){N._isLeaving=!0;const X=()=>M(N,F);di(N,f),N._enterCancelled?(di(N,h),ah(N)):(ah(N),di(N,h)),ih(()=>{N._isLeaving&&(_r(N,f),di(N,d),nh(v)||rh(N,i,m,X))}),mr(v,[N,X])},onEnterCancelled(N){S(N,!1,void 0,!0),mr(E,[N])},onAppearCancelled(N){S(N,!0,void 0,!0),mr(D,[N])},onLeaveCancelled(N){M(N),mr(C,[N])}})}function H0(n){if(n==null)return null;if(re(n))return[Cl(n.enter),Cl(n.leave)];{const t=Cl(n);return[t,t]}}function Cl(n){return H_(n)}function di(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[yo]||(n[yo]=new Set)).add(t)}function _r(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[yo];e&&(e.delete(t),e.size||(n[yo]=void 0))}function ih(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let V0=0;function rh(n,t,e,i){const r=n._endId=++V0,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=G0(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function G0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Wi}Delay`),s=i(`${Wi}Duration`),o=sh(r,s),a=i(`${qs}Delay`),l=i(`${qs}Duration`),c=sh(a,l);let u=null,f=0,h=0;t===Wi?o>0&&(u=Wi,f=o,h=s.length):t===qs?c>0&&(u=qs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Wi:qs:null,h=u?u===Wi?s.length:l.length:0);const d=u===Wi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Wi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function sh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>oh(e)+oh(n[i])))}function oh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function ah(n){return(n?n.ownerDocument:document).body.offsetHeight}function W0(n,t,e){const i=n[yo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const lh=Symbol("_vod"),X0=Symbol("_vsh"),q0=Symbol(""),$0=/(?:^|;)\s*display\s*:/;function Y0(n,t,e){const i=n.style,r=Se(e);let s=!1;if(e&&!r){if(t)if(Se(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&to(i,a,"")}else for(const o in t)e[o]==null&&to(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?K0(n,o,!Se(t)&&t?t[o]:void 0,a)||to(i,o,a):to(i,o,"")}}else if(r){if(t!==e){const o=i[q0];o&&(e+=";"+o),i.cssText=e,s=$0.test(e)}}else t&&n.removeAttribute("style");lh in n&&(n[lh]=s?i.display:"",n[X0]&&(i.display="none"))}const ch=/\s*!important$/;function to(n,t,e){if(It(e))e.forEach(i=>to(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=j0(n,t);ch.test(e)?n.setProperty(Xr(i),e.replace(ch,""),"important"):n[i]=e}}const uh=["Webkit","Moz","ms"],Rl={};function j0(n,t){const e=Rl[t];if(e)return e;let i=Ze(t);if(i!=="filter"&&i in n)return Rl[t]=i;i=el(i);for(let r=0;r<uh.length;r++){const s=uh[r]+i;if(s in n)return Rl[t]=s}return t}function K0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(i)&&e===i}const fh="http://www.w3.org/1999/xlink";function hh(n,t,e,i,r,s=$_(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(fh,t.slice(6,t.length)):n.setAttributeNS(fh,t,e):e==null||s&&!qd(e)?n.removeAttribute(t):n.setAttribute(t,s?"":ai(e)?String(e):e)}function dh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Zp(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=qd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function fs(n,t,e,i){n.addEventListener(t,e,i)}function Z0(n,t,e,i){n.removeEventListener(t,e,i)}const ph=Symbol("_vei");function J0(n,t,e,i,r=null){const s=n[ph]||(n[ph]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Q0(t);if(i){const c=s[t]=nv(i,r);fs(n,a,c,l)}else o&&(Z0(n,a,o,l),s[t]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function Q0(n){let t;if(mh.test(n)){t={};let i;for(;i=n.match(mh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xr(n.slice(2)),t]}let Pl=0;const tv=Promise.resolve(),ev=()=>Pl||(tv.then(()=>Pl=0),Pl=Date.now());function nv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;qn(iv(i,e.value),t,5,[i])};return e.value=n,e.attached=ev(),e}function iv(n,t){if(It(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const _h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rv=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?W0(n,i,o):t==="style"?Y0(n,e,i):Ja(t)?Qa(t)||J0(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sv(n,t,i,o))?(dh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hh(n,t,i,o,s,t!=="value")):n._isVueCE&&(ov(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(i)))?dh(n,Ze(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),hh(n,t,i,o))};function sv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&_h(t)&&Vt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _h(t)&&Se(e)?!1:t in n}function ov(n,t){const e=n._def.props;if(!e)return!1;const i=Ze(t);return Array.isArray(e)?e.some(r=>Ze(r)===i):Object.keys(e).some(r=>Ze(r)===i)}const gh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return It(t)?e=>Sa(t,e):t};function av(n){n.target.composing=!0}function vh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dl=Symbol("_assign");function xh(n,t,e){return t&&(n=n.trim()),e&&(n=Ou(n)),n}const Yo={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Dl]=gh(r);const s=i||r.props&&r.props.type==="number";fs(n,t?"change":"input",o=>{o.target.composing||n[Dl](xh(n.value,e,s))}),(e||s)&&fs(n,"change",()=>{n.value=xh(n.value,e,s)}),t||(fs(n,"compositionstart",av),fs(n,"compositionend",vh),fs(n,"change",vh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Dl]=gh(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ou(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},lv=["ctrl","shift","alt","meta"],cv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>lv.some(e=>n[`${e}Key`]&&!t.includes(e))},uv=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=cv[t[o]];if(a&&a(r,t))return}return n(r,...s)})},fv=Ne({patchProp:rv},F0);let Sh;function hv(){return Sh||(Sh=p0(fv))}const dv=(...n)=>{const t=hv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=mv(i);if(!r)return;const s=t._component;!Vt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,pv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function pv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mv(n){return Se(n)?document.querySelector(n):n}function Qp(n,t,e){return Math.max(n,Math.min(t,e))}class _v{advance(t){var a;if(!this.isRunning)return;let e=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=t,function(l,c,u){return(1-u)*l+u*c}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,e=!0);else{this.currentTime+=t;const l=Qp(0,this.currentTime/this.duration,1);e=l>=1;const c=e?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,e),e&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class gv{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:r=250}={}){fi(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});fi(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});fi(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class tm{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let r=0,s=i.length;r<s;r++)i[r](...e)}on(t,e){var i;return(i=this.events[t])!=null&&i.push(e)||(this.events[t]=[e]),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(s=>e!==s)}}off(t,e){var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(r=>e!==r)}destroy(){this.events={}}}const Mh=100/6;class vv{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){fi(this,"onTouchStart",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});fi(this,"onTouchMove",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,r=-(e-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:t})});fi(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});fi(this,"onWheel",t=>{let{deltaX:e,deltaY:i,deltaMode:r}=t;e*=r===1?Mh:r===2?this.windowWidth:1,i*=r===1?Mh:r===2?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})});fi(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new tm,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class xv{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=E=>Math.min(1,1.001-Math.pow(2,-10*E)),lerp:f=!c&&.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:m=1,autoResize:p=!0,__experimental__naiveDimensions:y=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:E,deltaY:v,event:C})=>{if(C.ctrlKey)return;const P=C.type.includes("touch"),A=C.type.includes("wheel");if(this.options.syncTouch&&P&&C.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const D=E===0&&v===0,S=this.options.gestureOrientation==="vertical"&&v===0||this.options.gestureOrientation==="horizontal"&&E===0;if(D||S)return;let M=C.composedPath();if(M=M.slice(0,M.indexOf(this.rootElement)),M.find(X=>{var V,H,q,B,ct;return((V=X.hasAttribute)===null||V===void 0?void 0:V.call(X,"data-lenis-prevent"))||P&&((H=X.hasAttribute)===null||H===void 0?void 0:H.call(X,"data-lenis-prevent-touch"))||A&&((q=X.hasAttribute)===null||q===void 0?void 0:q.call(X,"data-lenis-prevent-wheel"))||((B=X.classList)===null||B===void 0?void 0:B.contains("lenis"))&&!(!((ct=X.classList)===null||ct===void 0)&&ct.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void C.preventDefault();if(this.isSmooth=this.options.syncTouch&&P||this.options.smoothWheel&&A,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();C.preventDefault();let L=v;this.options.gestureOrientation==="both"?L=Math.abs(v)>Math.abs(E)?v:E:this.options.gestureOrientation==="horizontal"&&(L=E);const N=P&&this.options.syncTouch,F=P&&C.type==="touchend"&&Math.abs(L)>5;F&&(L=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+L,Object.assign({programmatic:!1},N?{lerp:F?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const E=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-E),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:f,infinite:h,gestureOrientation:g,orientation:d,touchMultiplier:_,wheelMultiplier:m,autoResize:p,__experimental__naiveDimensions:y},this.animate=new _v,this.emitter=new tm,this.dimensions=new gv({wrapper:t,content:e,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new vv(r,{touchMultiplier:_,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let f;if(typeof t=="string"?f=document.querySelector(t):t!=null&&t.nodeType&&(f=t),f){if(this.options.wrapper!==window){const d=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?d.left:d.top}const h=f.getBoundingClientRect();t=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=Qp(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,h)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),h||this.emit(),h&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,e=this.limit,(t%e+e)%e):this.animatedScroll;var t,e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}let gr=null;function Sv(){return ki(()=>{if(gr)return;gr=new xv({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),orientation:"vertical",smoothWheel:!0});function n(t){gr.raf(t),requestAnimationFrame(n)}requestAnimationFrame(n)}),Bs(()=>{gr&&(gr.destroy(),gr=null)}),{get lenis(){return gr}}}function Mi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function em(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},tf,Be,xe,In=1e8,ue=1/In,Dc=Math.PI*2,Mv=Dc/4,yv=0,nm=Math.sqrt,bv=Math.cos,Ev=Math.sin,Fe=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},Ui=function(t){return typeof t=="number"},ef=function(t){return typeof t>"u"},li=function(t){return typeof t=="object"},an=function(t){return t!==!1},nf=function(){return typeof window<"u"},jo=function(t){return Te(t)||Fe(t)},im=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qe=Array.isArray,Tv=/random\([^)]+\)/g,wv=/,\s*/g,yh=/(?:-?\.?\d|\.)+/gi,rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sm=/[+-]=-?[.\d]+/,Av=/[^,'"\[\]\s]+/gi,Cv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,Zn,Lc,rf,Tn={},Ga={},om,am=function(t){return(Ga=As(t,Tn))&&pn},sf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Eo=function(t,e){return!e&&console.warn(t)},lm=function(t,e){return t&&(Tn[t]=e)&&Ga&&(Ga[t]=e)||Tn},To=function(){return 0},Rv={suppressEvents:!0,isStart:!0,kill:!1},Ta={suppressEvents:!0,kill:!1},Pv={suppressEvents:!0},of={},nr=[],Ic={},cm,vn={},Il={},bh=30,wa=[],af="",lf=function(t){var e=t[0],i,r;if(li(e)||Te(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=wa.length;r--&&!wa[r].targetTest(e););i=wa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Dm(t[r],i)))||t.splice(r,1);return t},Br=function(t){return t._gsap||lf(Un(t))[0]._gsap},um=function(t,e,i){return(i=t[e])&&Te(i)?t[e]():ef(i)&&t.getAttribute&&t.getAttribute(e)||i},ln=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},xs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Dv=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Wa=function(){var t=nr.length,e=nr.slice(0),i,r;for(Ic={},nr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cf=function(t){return!!(t._initted||t._startAt||t.add)},fm=function(t,e,i,r){nr.length&&!Be&&Wa(),t.render(e,i,!!(Be&&e<0&&cf(t))),nr.length&&!Be&&Wa()},hm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Av).length<2?e:Fe(t)?t.trim():t},dm=function(t){return t},wn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Lv=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},As=function(t,e){for(var i in e)t[i]=e[i];return t},Eh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=li(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Xa=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},ho=function(t){var e=t.parent||ye,i=t.keyframes?Lv(qe(t.keyframes)):wn;if(an(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Iv=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},pm=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},fl=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},ar=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Uv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uc=function(t,e,i,r){return t._startAt&&(Be?t._startAt.revert(Ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Nv=function n(t){return!t||t._ts&&n(t.parent)},Th=function(t){return t._repeat?Cs(t._tTime,t=t.duration()+t._rDelay)*t:0},Cs=function(t,e){var i=Math.floor(t=Me(t/e));return t&&i===t?i-1:i},qa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},hl=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||ue)||0))},dl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Me(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),hl(t),i._dirty||zr(i,t)),t},mm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=qa(t.rawTime(),e),(!e._dur||No(0,e.totalDuration(),i)-e._tTime>ue)&&e.render(i,!0)),zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ue}},ni=function(t,e,i,r){return e.parent&&ar(e),e._start=Me((Ui(i)?i:i||t!==ye?Pn(t,i,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pm(t,e,"_first","_last",t._sort?"_start":0),Nc(e)||(t._recent=e),r||mm(t,e),t._ts<0&&dl(t,t._tTime),t},_m=function(t,e){return(Tn.ScrollTrigger||sf("scrollTrigger",e))&&Tn.ScrollTrigger.create(e,t)},gm=function(t,e,i,r,s){if(ff(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cm!==xn.frame)return nr.push(t),t._lazy=[s,r],1},Fv=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Nc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ov=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Fv(t)&&!(!t._initted&&Nc(t))||(t._ts<0||t._dp._ts<0)&&!Nc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=No(0,t._tDur,e),u=Cs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Cs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Be||r||t._zTime===ue||!e&&t._zTime){if(!t._initted&&gm(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?ue:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uc(t,e,i,!0),t._onUpdate&&!i&&yn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&yn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ar(t,1),!i&&!Be&&(yn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Bv=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Rs=function(t,e,i,r){var s=t._repeat,o=Me(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Me(o*(s+1)+t._rDelay*s):o,a>0&&!r&&dl(t,t._tTime=t._tDur*a),t.parent&&hl(t),i||zr(t.parent,t),t},wh=function(t){return t instanceof rn?zr(t):Rs(t,t._dur)},zv={_start:0,endTime:To,totalDuration:To},Pn=function n(t,e,i){var r=t.labels,s=t._recent||zv,o=t.duration()>=In?s.endTime(!1):t._dur,a,l,c;return Fe(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(qe(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},po=function(t,e,i){var r=Ui(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new De(e[0],o,e[s+1])},fr=function(t,e){return t||t===0?e(t):e},No=function(t,e,i){return i<t?t:i>e?e:i},We=function(t,e){return!Fe(t)||!(e=Cv.exec(t))?"":e[1]},kv=function(t,e,i){return fr(i,function(r){return No(t,e,r)})},Fc=[].slice,vm=function(t,e){return t&&li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&li(t[0]))&&!t.nodeType&&t!==Zn},Hv=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Fe(r)&&!e||vm(r,1)?(s=i).push.apply(s,Un(r)):i.push(r)})||i},Un=function(t,e,i){return xe&&!e&&xe.selector?xe.selector(t):Fe(t)&&!i&&(Lc||!Ps())?Fc.call((e||rf).querySelectorAll(t),0):qe(t)?Hv(t,i):vm(t)?Fc.call(t,0):t?[t]:[]},Oc=function(t){return t=Un(t)[0]||Eo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Un(e,i.querySelectorAll?i:i===t?Eo("Invalid scope")||rf.createElement("div"):t)}},xm=function(t){return t.sort(function(){return .5-Math.random()})},Sm=function(t){if(Te(t))return t;var e=li(t)?t:{each:t},i=kr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return Fe(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,y,E,v,C,P,A,D,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,In])[1],!S){for(A=-In;A<(A=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===In?0:l?_*f/S-.5:r/S|0,A=0,D=In,P=0;P<_;P++)E=P%S-p,v=y-(P/S|0),m[P]=C=c?Math.abs(c==="y"?v:E):nm(E*E+v*v),C>A&&(A=C),C<D&&(D=C);r==="random"&&xm(m),m.max=A-D,m.min=D,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=We(e.amount||e.each)||0,i=i&&_<0?tx(i):i}return _=(m[h]-m.min)/m.max||0,Me(m.b+(i?i(_):_)*m.v)+m.u}},Bc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Me(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Ui(i)?0:We(i))}},Mm=function(t,e){var i=qe(t),r,s;return!i&&li(t)&&(r=i=t.radius||In,t.values?(t=Un(t.values),(s=!Ui(t[0]))&&(r*=r)):t=Bc(t.increment)),fr(e,i?Te(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=In,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||Ui(o)?u:u+We(o)}:Bc(t))},ym=function(t,e,i,r){return fr(qe(t)?!e:i===!0?!!(i=0):!r,function(){return qe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},Vv=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},Gv=function(t,e){return function(i){return t(parseFloat(i))+(e||We(i))}},Wv=function(t,e,i){return Em(t,e,0,1,i)},bm=function(t,e,i){return fr(i,function(r){return t[~~e(r)]})},Xv=function n(t,e,i){var r=e-t;return qe(t)?bm(t,n(0,t.length),e):fr(i,function(s){return(r+(s-t)%r)%r+t})},qv=function n(t,e,i){var r=e-t,s=r*2;return qe(t)?bm(t,n(0,t.length-1),e):fr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},wo=function(t){return t.replace(Tv,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(wv);return ym(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Em=function(t,e,i,r,s){var o=e-t,a=r-i;return fr(s,function(l){return i+((l-t)/o*a||0)})},$v=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Fe(t),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(qe(t)&&!qe(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(n(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=e}else r||(t=As(qe(t)?[]:{},t));if(!u){for(l in e)uf.call(a,t,l,"get",e[l]);s=function(g){return pf(g,a)||(o?t.p:t)}}}return fr(i,s)},Ah=function(t,e,i){var r=t.labels,s=In,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yn=function(t,e,i){var r=t.vars,s=r[e],o=xe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&nr.length&&Wa(),a&&(xe=a),u=l?s.apply(c,l):s.call(c),xe=o,u},eo=function(t){return ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&yn(t,"onInterrupt"),t},ds,Tm=[],wm=function(t){if(t)if(t=!t.name&&t.default||t,nf()||t.headless){var e=t.name,i=Te(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:To,render:pf,add:uf,kill:ux,modifier:cx,rawVars:0},o={targetTest:0,get:0,getSetter:df,aliases:{},register:0};if(Ps(),t!==r){if(vn[e])return;wn(r,wn(Xa(t,s),o)),As(r.prototype,As(s,Xa(t,o))),vn[r.prop=e]=r,t.targetTest&&(wa.push(r),of[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lm(e,r),t.register&&t.register(pn,r,cn)}else Tm.push(t)},ce=255,no={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},Ul=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ce+.5|0},Am=function(t,e,i){var r=t?Ui(t)?[t>>16,t>>8&ce,t&ce]:0:no.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),no[t])r=no[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ce,r&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(yh),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ul(l+1/3,s,o),r[1]=Ul(l,s,o),r[2]=Ul(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(rm),i&&r.length<4&&(r[3]=1),r}else r=t.match(yh)||no.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/ce,o=r[1]/ce,a=r[2]/ce,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Cm=function(t){var e=[],i=[],r=-1;return t.split(ir).forEach(function(s){var o=s.match(hs)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Ch=function(t,e,i){var r="",s=(t+r).match(ir),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Am(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Cm(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(ir,"1").split(hs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(ir),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ir=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in no)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),Yv=/hsl[a]?\(/,Rm=function(t){var e=t.join(" "),i;if(ir.lastIndex=0,ir.test(e))return i=Yv.test(e),t[1]=Ch(t[1],i),t[0]=Ch(t[0],i,Cm(t[1])),!0},Ao,xn=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,y=m===!0,E,v,C,P;if((p>t||p<0)&&(i+=p-e),r+=p,C=r-i,E=C-o,(E>0||y)&&(P=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=E+(E>=s?4:s-E),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](C,h,P,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){om&&(!Lc&&nf()&&(Zn=Lc=window,rf=Zn.document||{},Tn.gsap=pn,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(pn.version),am(Ga||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),Tm.forEach(wm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ao=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=To},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var E=p?function(v,C,P,A){m(v,C,P,A),f.remove(E)}:m;return f.remove(m),a[y?"unshift":"push"](E),Ps(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ps=function(){return!Ao&&xn.wake()},jt={},jv=/^[\d.\-M][\d.\-,\s]/,Kv=/["']/g,Zv=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(Kv,"").trim():+c,r=l.substr(a+1).trim();return e},Jv=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Qv=function(t){var e=(t+"").split("("),i=jt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Zv(e[1])]:Jv(t).split(",").map(hm)):jt._CE&&jv.test(t)?jt._CE("",t):i},tx=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Te(t)?t:jt[t]||Qv(t))||e},qr=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return ln(t,function(a){jt[a]=Tn[a]=s,jt[o=a.toLowerCase()]=i;for(var l in s)jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=jt[a+"."+l]=s[l]}),s},Pm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nl=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Dc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ev((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Pm(a);return s=Dc/s,l.config=function(c,u){return n(t,c,u)},l},Fl=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Pm(i);return r.config=function(s){return n(t,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;qr(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;qr("Elastic",Nl("in"),Nl("out"),Nl());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};qr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qr("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});qr("Circ",function(n){return-(nm(1-n*n)-1)});qr("Sine",function(n){return n===1?1:-bv(n*Mv)+1});qr("Back",Fl("in"),Fl("out"),Fl());jt.SteppedEase=jt.steps=Tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-ue;return function(a){return((r*No(0,o,a)|0)+s)*i}}};bo.ease=jt["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return af+=n+","+n+"Params,"});var Dm=function(t,e){this.id=yv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:um,this.set=e?e.getSetter:df},Co=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Rs(this,+e.duration,1,1),this.data=e.data,xe&&(this._ctx=xe,xe.data.push(this)),Ao||xn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ps(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dl(this,i),!s._dp||s.parent||mm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ue||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fm(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Th(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Th(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Cs(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-ue?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ue?0:this._rts,this.totalTime(No(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),hl(this),Uv(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ue&&(this._tTime-=ue)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Me(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ni(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Pv);var r=Be;return Be=i,cf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Be=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,wh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,wh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Pn(this,i),an(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,an(r)),this._dur||(this._zTime=-ue),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ue:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ue,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ue)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Te(i)?i:dm,l=function(){var u=r.then;r.then=null,s&&s(),Te(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){eo(this)},n}();wn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ue,_prom:0,_ps:!1,_rts:1});var rn=function(n){em(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=an(i.sortChildren),ye&&ni(i.parent||ye,Mi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&_m(Mi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return po(0,arguments,this),this},e.from=function(r,s,o){return po(1,arguments,this),this},e.fromTo=function(r,s,o,a){return po(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ho(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new De(r,s,Pn(this,o),1),this},e.call=function(r,s,o){return ni(this,De.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new De(r,o,Pn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ho(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,ho(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Me(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,y,E,v,C,P,A;if(this!==ye&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Me(u%m),u===l?(_=this._repeat,h=c):(C=Me(u/m),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=Cs(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),P&&_&1&&(h=c-h,A=1),_!==C&&!this._lock){var D=P&&C&1,S=D===(P&&_&1);if(_<C&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Me(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Bv(this,Me(a),Me(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!C&&(yn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-ue);break}}d=g}else{d=this._last;for(var M=r<0?r:h;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Be&&cf(d)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=M?-ue:ue);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-ue)._zTime=h>=a?1:-1,this._ts))return this._start=v,hl(this),this.render(r,s,o);this._onUpdate&&!s&&yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ar(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(yn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Ui(s)||(s=Pn(this,s,r)),!(r instanceof Co)){if(qe(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Fe(r))return this.addLabel(r,s);if(Te(r))r=De.delayedCall(0,r);else return this}return this!==r?ni(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-In);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Fe(r)?this.removeLabel(r):Te(r)?this.killTweensOf(r):(r.parent===this&&fl(this,r),r===this._recent&&(this._recent=this._last),zr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(xn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Pn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=De.delayedCall(0,s||To,o);return a.data="isPause",this._hasPause=1,ni(this,a,Pn(this,r))},e.removePause=function(r){var s=this._first;for(r=Pn(this,r);s;)s._start===r&&s.data==="isPause"&&ar(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Qi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Un(r),l=this._first,c=Ui(s),u;l;)l instanceof De?Dv(l._targets,a)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Pn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=De.to(o,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ue,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Rs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,wn({startAt:{time:Pn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Ah(this,Pn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Ah(this,Pn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ue)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Me(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return zr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),zr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=In,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Me(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Rs(o,o===ye&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ye._ts&&(fm(ye,qa(r,ye)),cm=xn.frame),xn.frame>=bh){bh+=En.autoSleep||120;var s=ye._first;if((!s||!s._ts)&&En.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},t}(Co);wn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ex=function(t,e,i,r,s,o,a){var l=new cn(this._pt,t,e,0,1,Om,null,s),c=0,u=0,f,h,d,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=wo(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),h=i.match(Ll)||[];f=Ll.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ll.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sm.test(r)||p)&&(l.e=0),this._pt=l,l},uf=function(t,e,i,r,s,o,a,l,c,u){Te(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Te(f)?c?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Te(f)?c?ox:Nm:hf,g;if(Fe(r)&&(~r.indexOf("random(")&&(r=wo(r)),r.charAt(1)==="="&&(g=xs(h,r)+(We(h)||0),(g||g===0)&&(r=g))),!u||h!==r||zc)return!isNaN(h*r)&&r!==""?(g=new cn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?lx:Fm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&sf(e,r),ex.call(this,t,e,h,r,d,l||En.stringFilter,c))},nx=function(t,e,i,r,s){if(Te(t)&&(t=mo(t,s,e,i,r)),!li(t)||t.style&&t.nodeType||qe(t)||im(t))return Fe(t)?mo(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=mo(t[a],s,e,i,r);return o},Lm=function(t,e,i,r,s,o){var a,l,c,u;if(vn[t]&&(a=new vn[t]).init(s,a.rawVars?e[t]:nx(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new cn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==ds))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qi,zc,ff=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!tf,v=t.timeline,C=r.easeReverse||f,P,A,D,S,M,L,N,F,X,V,H,q,B;if(v&&(!h||!s)&&(s="none"),t._ease=kr(s,bo.ease),t._rEase=C&&(kr(C)||t._ease),t._from=!v&&!!r.runBackwards,t._from&&(t.ratio=1),!v||h&&!r.stagger){if(F=m[0]?Br(m[0]).harness:0,q=F&&r[F.prop],P=Xa(r,of),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ta:Rv),_._lazy=0),o){if(ar(t._startAt=De.set(m,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return yn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!a&&!d)&&t._startAt.revert(Ta),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),D=wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&an(l),immediateRender:a,stagger:0,parent:p},P),q&&(D[F.prop]=q),ar(t._startAt=De.set(m,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(Ta):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,ue,ue);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&an(l)||l&&!g,A=0;A<m.length;A++){if(M=m[A],N=M._gsap||lf(m)[A]._gsap,t._ptLookup[A]=V={},Ic[N.id]&&nr.length&&Wa(),H=y===m?A:y.indexOf(M),F&&(X=new F).init(M,q||P,t,H,y)!==!1&&(t._pt=S=new cn(t._pt,M,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(ct){V[ct]=S}),X.priority&&(L=1)),!F||q)for(D in P)vn[D]&&(X=Lm(D,P,t,H,M,y))?X.priority&&(L=1):V[D]=S=uf.call(t,M,D,"get",P[D],H,y,0,r.stringFilter);t._op&&t._op[A]&&t.kill(M,t._op[A]),E&&t._pt&&(Qi=t,ye.killTweensOf(M,V,t.globalTime(e)),B=!t.parent,Qi=0),t._pt&&l&&(Ic[N.id]=1)}L&&Bm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,h&&e<=0&&v.render(In,!0,!0)},ix=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return zc=1,t.vars[e]="+=0",ff(t,a),zc=0,l?Eo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=we(i)+We(f.e)),f.b&&(f.b=u.s+We(f.b))},rx=function(t,e){var i=t[0]?Br(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=As({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},sx=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(qe(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},mo=function(t,e,i,r,s){return Te(t)?t.call(e,i,r,s):Fe(t)&&~t.indexOf("random(")?wo(t):t},Im=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Um={};ln(Im+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Um[n]=1});var De=function(n){em(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ho(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||ye,y=(qe(i)||im(i)?Ui(i[0]):"length"in r)?[i]:Un(i),E,v,C,P,A,D,S,M;if(a._targets=y.length?lf(y):Eo("GSAP target "+i+" not found. https://gsap.com",!En.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||jo(c)||jo(u)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(E=a.timeline=new rn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),E.kill(),E.parent=E._dp=Mi(a),E._start=0,h||jo(c)||jo(u)){if(P=y.length,S=h&&Sm(h),li(h))for(A in h)~Im.indexOf(A)&&(M||(M={}),M[A]=h[A]);for(v=0;v<P;v++)C=Xa(r,Um),C.stagger=0,L&&(C.easeReverse=L),M&&As(C,M),D=y[v],C.duration=+mo(c,Mi(a),v,D,y),C.delay=(+mo(u,Mi(a),v,D,y)||0)-a._delay,!h&&P===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),E.to(D,C,S?S(v,D,y):0),E._ease=jt.none;E.duration()?c=u=0:a.timeline=0}else if(g){ho(wn(E.vars.defaults,{ease:"none"})),E._ease=kr(g.ease||r.ease||"none");var N=0,F,X,V;if(qe(g))g.forEach(function(H){return E.to(y,H,">")}),E.duration();else{C={};for(A in g)A==="ease"||A==="easeEach"||sx(A,g[A],C,g.easeEach);for(A in C)for(F=C[A].sort(function(H,q){return H.t-q.t}),N=0,v=0;v<F.length;v++)X=F[v],V={ease:X.e,duration:(X.t-(v?F[v-1].t:0))/100*c},V[A]=X.v,E.to(y,V,N),N+=V.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!tf&&(Qi=Mi(a),ye.killTweensOf(y),Qi=0),ni(p,Mi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Me(p._time)&&an(f)&&Nv(Mi(a))&&p.data!=="nested")&&(a._tTime=-ue,a.render(Math.max(0,-u)||0)),m&&_m(Mi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ue&&!u?l:r<ue?0:r,h,d,g,_,m,p,y,E;if(!c)Ov(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Me(f%_),f===l?(g=this._repeat,h=c):(m=Me(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Cs(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Me(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(gm(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(yn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Uc(this,r,s,o),yn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Uc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ar(this,1),!s&&!(u&&!a)&&(f||a||p)&&(yn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Ao||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ff(this,c),u=this._ease(c/this._dur),ix(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(dl(this,0),this.parent||pm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Be),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qi&&Qi.vars.overwrite!==!0)._first||eo(this),this.parent&&o!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Un(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Iv(a,l))return s==="all"&&(this._pt=0),eo(this);for(f=this._op=this._op||[],s!=="all"&&(Fe(s)&&(_={},ln(s,function(y){return _[y]=1}),s=_),s=rx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&eo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return po(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return po(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ye.killTweensOf(r,s,o)},t}(Co);wn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(n){De[n]=function(){var t=new rn,e=Fc.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var hf=function(t,e,i){return t[e]=i},Nm=function(t,e,i){return t[e](i)},ox=function(t,e,i,r){return t[e](r.fp,i)},ax=function(t,e,i){return t.setAttribute(e,i)},df=function(t,e){return Te(t[e])?Nm:ef(t[e])&&t.setAttribute?ax:hf},Fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},lx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Om=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},pf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},cx=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},ux=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?fl(this,e,"_pt"):e.dep||(i=1),e=r;return!i},fx=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Bm=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},cn=function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Fm,this.d=l||this,this.set=c||hf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=fx,this.m=i,this.mt=s,this.tween=r},n}();ln(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return of[n]=1});Tn.TweenMax=Tn.TweenLite=De;Tn.TimelineLite=Tn.TimelineMax=rn;ye=new rn({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=Rm;var Hr=[],Aa={},hx=[],Rh=0,dx=0,Ol=function(t){return(Aa[t]||hx).map(function(e){return e()})},kc=function(){var t=Date.now(),e=[];t-Rh>2&&(Ol("matchMediaInit"),Hr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Zn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Ol("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Rh=t,Ol("matchMedia"))},zm=function(){function n(e,i){this.selector=i&&Oc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Te(i)&&(s=r,r=i,i=Te);var o=this,a=function(){var c=xe,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Oc(s)),xe=o,f=r.apply(o,arguments),Te(f)&&o._r.push(f),xe=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Te?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=xe;xe=null,i(this),xe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof De&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1)},t.revert=function(i){this.kill(i||{})},n}(),px=function(){function n(e){this.contexts=[],this.scope=e,xe&&xe.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){li(i)||(i={matches:i});var o=new zm(0,s||this.scope),a=o.conditions={},l,c,u;xe&&!o.selector&&(o.selector=xe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Zn.matchMedia(i[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(kc):l.addEventListener("change",kc)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),$a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return wm(r)})},timeline:function(t){return new rn(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,i,r){Fe(t)&&(t=Un(t)[0]);var s=Br(t||{}).get,o=i?dm:hm;return i==="native"&&(i=""),t&&(e?o((vn[e]&&vn[e].get||s)(t,e,i,r)):function(a,l,c){return o((vn[a]&&vn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Un(t),t.length>1){var r=t.map(function(u){return pn.quickSetter(u,e,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=vn[e],a=Br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;ds._pt=0,f.init(t,i?u+i:u,ds,0,[t]),f.render(1,f),ds._pt&&pf(1,ds)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=pn.to(t,wn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,bo.ease)),Eh(bo,t||{})},config:function(t){return Eh(En,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!vn[a]&&!Tn[a]&&Eo(e+" effect requires "+a+" plugin.")}),Il[e]=function(a,l,c){return i(Un(a),wn(l||{},s),c)},o&&(rn.prototype[e]=function(a,l,c){return this.add(Il[e](a,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){jt[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):jt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new rn(t),r,s;for(i.smoothChildTiming=an(t.smoothChildTiming),ye.remove(i),i._dp=0,i._time=i._tTime=ye._time,r=ye._first;r;)s=r._next,(e||!(!r._dur&&r instanceof De&&r.vars.onComplete===r._targets[0]))&&ni(i,r,r._start-r._delay),r=s;return ni(ye,i,0),i},context:function(t,e){return t?new zm(t,e):xe},matchMedia:function(t){return new px(t)},matchMediaRefresh:function(){return Hr.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||kc()},addEventListener:function(t,e){var i=Aa[t]||(Aa[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Aa[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Xv,wrapYoyo:qv,distribute:Sm,random:ym,snap:Mm,normalize:Wv,getUnit:We,clamp:kv,splitColor:Am,toArray:Un,selector:Oc,mapRange:Em,pipe:Vv,unitize:Gv,interpolate:$v,shuffle:xm},install:am,effects:Il,ticker:xn,updateRoot:rn.updateRoot,plugins:vn,globalTimeline:ye,core:{PropTween:cn,globals:lm,Tween:De,Timeline:rn,Animation:Co,getCache:Br,_removeLinkedListItem:fl,reverting:function(){return Be},context:function(t){return t&&xe&&(xe.data.push(t),t._ctx=xe),xe},suppressOverwrites:function(t){return tf=t}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return $a[n]=De[n]});xn.add(rn.updateRoot);ds=$a.to({},{duration:0});var mx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},_x=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=mx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Bl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Fe(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_x(a,s)}}}},pn=$a.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Be?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Bl("roundProps",Bc),Bl("modifiers"),Bl("snap",Mm))||$a;De.version=rn.version=pn.version="3.15.0";om=1;nf()&&Ps();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ph,tr,Ss,mf,Ir,Dh,_f,gx=function(){return typeof window<"u"},Ni={},Ar=180/Math.PI,Ms=Math.PI/180,jr=Math.atan2,Lh=1e8,gf=/([A-Z])/g,vx=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Mx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},km=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Hm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ex=function(t,e,i){return t.style[e]=i},Tx=function(t,e,i){return t.style.setProperty(e,i)},wx=function(t,e,i){return t._gsap[e]=i},Ax=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Cx=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Rx=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},be="transform",un=be+"Origin",Px=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Ni&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=bi(r,a)}):this.tfm[t]=o.x?o[t]:bi(r,t),t===un&&(this.tfm.zOrigin=o.zOrigin);else return ii.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(be)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=be}(s||e)&&this.props.push(t,e,s[t])},Vm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Dx=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_f(),(!s||!s.isStart)&&!i[be]&&(Vm(i),r.zOrigin&&i[un]&&(i[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gm=function(t,e){var i={target:t,props:[],revert:Dx,save:Px};return t._gsap||pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Wm,Vc=function(t,e){var i=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return i&&i.style?i:tr.createElement(t)},bn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(gf,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Ds(e)||e,1)||""},Ih="O,Moz,ms,Ms,Webkit".split(","),Ds=function(t,e,i){var r=e||Ir,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ih[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ih[o]:"")+t},Gc=function(){gx()&&window.document&&(Ph=window,tr=Ph.document,Ss=tr.documentElement,Ir=Vc("div")||{style:{}},Vc("div"),be=Ds(be),un=be+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wm=!!Ds("perspective"),_f=pn.core.reverting,mf=1)},Uh=function(t){var e=t.ownerSVGElement,i=Vc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ss.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ss.removeChild(i),s},Nh=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Xm=function(t){var e,i;try{e=t.getBBox()}catch{e=Uh(t),i=1}return e&&(e.width||e.height)||i||(e=Uh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Nh(t,["x","cx","x1"])||0,y:+Nh(t,["y","cy","y1"])||0,width:0,height:0}:e},qm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Xm(t))},lr=function(t,e){if(e){var i=t.style,r;e in Ni&&e!==un&&(e=be),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(gf,"-$1").toLowerCase())):i.removeAttribute(e)}},er=function(t,e,i,r,s,o){var a=new cn(t._pt,e,i,0,1,o?Hm:km);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},Fh={deg:1,rad:1,turn:1},Lx={grid:1,flex:1},cr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ir.style,l=vx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Fh[r]||Fh[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&qm(t),(d||o==="%")&&(Ni[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],we(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===tr||!_.appendChild)&&(_=tr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===xn.time&&!m.uncache)return we(s/m.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,g=t[u],y?t.style[e]=y:lr(t,e)}else(d||o==="%")&&!Lx[bn(_,"display")]&&(a.position=bn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ir),g=Ir[u],_.removeChild(Ir),a.position="absolute";return l&&d&&(m=Br(_),m.time=xn.time,m.width=_[u]),we(h?g*s/f:g&&s?f/g*s:0)},bi=function(t,e,i,r){var s;return mf||Gc(),e in ii&&e!=="transform"&&(e=ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ni[e]&&e!=="transform"?(s=Po(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ja(bn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ya[e]&&Ya[e](t,e,i)||bn(t,e)||um(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?cr(t,e,s,i)+i:s},Ix=function(t,e,i,r){if(!i||i==="none"){var s=Ds(e,t,1),o=s&&bn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=bn(t,"borderTopColor"))}var a=new cn(this._pt,t.style,e,0,1,Om),l=0,c=0,u,f,h,d,g,_,m,p,y,E,v,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=bn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=bn(t,e)||r,_?t.style[e]=_:lr(t,e)),u=[i,r],Rm(u),i=u[0],r=u[1],h=i.match(hs)||[],C=r.match(hs)||[],C.length){for(;f=hs.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=xs(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=hs.lastIndex-E.length,E||(E=E||En.units[e]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(d=cr(t,e,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Hm:km;return sm.test(r)&&(a.e=0),this._pt=a,a},Oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ux=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Oh[i]||i,e[1]=Oh[r]||r,e.join(" ")},Nx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ni[a]&&(l=1,a=a==="transformOrigin"?un:be),lr(i,a);l&&(lr(i,be),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Po(i,1),o.uncache=1,Vm(r)))}},Ya={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new cn(t._pt,e,i,0,0,Nx);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Ro=[1,0,0,1,0,0],$m={},Ym=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bh=function(t){var e=bn(t,be);return Ym(e)?Ro:e.substr(7).match(rm).map(we)},vf=function(t,e){var i=t._gsap||Br(t),r=t.style,s=Bh(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ro:s):(s===Ro&&!t.offsetParent&&t!==Ss&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ss.appendChild(t)),s=Bh(t),l?r.display=l:lr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ss.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wc=function(t,e,i,r,s,o){var a=t._gsap,l=s||vf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),v=parseFloat(E[0])||0,C=parseFloat(E[1])||0,P,A,D,S;i?l!==Ro&&(A=d*m-g*_)&&(D=v*(m/A)+C*(-_/A)+(_*y-m*p)/A,S=v*(-g/A)+C*(d/A)-(d*y-g*p)/A,v=D,C=S):(P=Xm(t),v=P.x+(~E[0].indexOf("%")?v/100*P.width:v),C=P.y+(~(E[1]||E[0]).indexOf("%")?C/100*P.height:C)),r||r!==!1&&a.smooth?(p=v-c,y=C-u,a.xOffset=f+(p*d+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[un]="0px 0px",o&&(er(o,a,"xOrigin",c,v),er(o,a,"yOrigin",u,C),er(o,a,"xOffset",f,a.xOffset),er(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+C)},Po=function(t,e){var i=t._gsap||new Dm(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=bn(t,un)||"0",u,f,h,d,g,_,m,p,y,E,v,C,P,A,D,S,M,L,N,F,X,V,H,q,B,ct,_t,bt,Ct,Zt,nt,ut;return u=f=h=_=m=p=y=E=v=0,d=g=1,i.svg=!!(t.getCTM&&qm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[be]!=="none"?l[be]:"")),r.scale=r.rotate=r.translate="none"),A=vf(t,i.svg),i.svg&&(i.uncache?(B=t.getBBox(),c=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Wc(t,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,A)),C=i.xOrigin||0,P=i.yOrigin||0,A!==Ro&&(L=A[0],N=A[1],F=A[2],X=A[3],u=V=A[4],f=H=A[5],A.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt(X*X+F*F),_=L||N?jr(N,L)*Ar:0,y=F||X?jr(F,X)*Ar+_:0,y&&(g*=Math.abs(Math.cos(y*Ms))),i.svg&&(u-=C-(C*L+P*F),f-=P-(C*N+P*X))):(ut=A[6],Zt=A[7],_t=A[8],bt=A[9],Ct=A[10],nt=A[11],u=A[12],f=A[13],h=A[14],D=jr(ut,Ct),m=D*Ar,D&&(S=Math.cos(-D),M=Math.sin(-D),q=V*S+_t*M,B=H*S+bt*M,ct=ut*S+Ct*M,_t=V*-M+_t*S,bt=H*-M+bt*S,Ct=ut*-M+Ct*S,nt=Zt*-M+nt*S,V=q,H=B,ut=ct),D=jr(-F,Ct),p=D*Ar,D&&(S=Math.cos(-D),M=Math.sin(-D),q=L*S-_t*M,B=N*S-bt*M,ct=F*S-Ct*M,nt=X*M+nt*S,L=q,N=B,F=ct),D=jr(N,L),_=D*Ar,D&&(S=Math.cos(D),M=Math.sin(D),q=L*S+N*M,B=V*S+H*M,N=N*S-L*M,H=H*S-V*M,L=q,V=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=we(Math.sqrt(L*L+N*N+F*F)),g=we(Math.sqrt(H*H+ut*ut)),D=jr(V,H),y=Math.abs(D)>2e-4?D*Ar:0,v=nt?1/(nt<0?-nt:nt):0),i.svg&&(q=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Ym(bn(t,be)),q&&t.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=we(d),i.scaleY=we(g),i.rotation=we(_)+a,i.rotationX=we(m)+a,i.rotationY=we(p)+a,i.skewX=y+a,i.skewY=E+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[un]=ja(c)),i.xOffset=i.yOffset=0,i.force3D=En.force3D,i.renderTransform=i.svg?Ox:Wm?jm:Fx,i.uncache=0,i},ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},zl=function(t,e,i){var r=We(e);return we(parseFloat(e)+parseFloat(cr(t,"x",i+"px",r)))+r},Fx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,jm(t,e)},vr="0deg",$s="0px",xr=") ",jm=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,E=i.zOrigin,v="",C=p==="auto"&&t&&t!==1||p===!0;if(E&&(f!==vr||u!==vr)){var P=parseFloat(u)*Ms,A=Math.sin(P),D=Math.cos(P),S;P=parseFloat(f)*Ms,S=Math.cos(P),o=zl(y,o,A*S*-E),a=zl(y,a,-Math.sin(P)*-E),l=zl(y,l,D*S*-E+E)}m!==$s&&(v+="perspective("+m+xr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(C||o!==$s||a!==$s||l!==$s)&&(v+=l!==$s||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==vr&&(v+="rotate("+c+xr),u!==vr&&(v+="rotateY("+u+xr),f!==vr&&(v+="rotateX("+f+xr),(h!==vr||d!==vr)&&(v+="skew("+h+", "+d+xr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+xr),y.style[be]=v||"translate(0, 0)"},Ox=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,E=parseFloat(o),v=parseFloat(a),C,P,A,D,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ms,c*=Ms,C=Math.cos(l)*f,P=Math.sin(l)*f,A=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Ms,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,D*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,P*=S)),C=we(C),P=we(P),A=we(A),D=we(D)):(C=f,D=h,P=A=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=cr(d,"x",o,"px"),v=cr(d,"y",a,"px")),(g||_||m||p)&&(E=we(E+g-(g*C+_*A)+m),v=we(v+_-(g*P+_*D)+p)),(r||s)&&(S=d.getBBox(),E=we(E+r/100*S.width),v=we(v+s/100*S.height)),S="matrix("+C+","+P+","+A+","+D+","+E+","+v+")",d.setAttribute("transform",S),y&&(d.style[be]=S)},Bx=function(t,e,i,r,s){var o=360,a=Fe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Lh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Lh)%o-~~(c/o)*o)),t._pt=h=new cn(t._pt,e,i,r,c,Sx),h.e=u,h.u="deg",t._props.push(i),h},zh=function(t,e){for(var i in e)t[i]=e[i];return t},zx=function(t,e,i){var r=zh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[be]=e,a=Po(i,1),lr(i,be),i.setAttribute("transform",c)):(c=getComputedStyle(i)[be],o[be]=e,a=Po(i,1),o[be]=c);for(l in Ni)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=We(c),g=We(u),f=d!==g?cr(i,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new cn(t._pt,a,l,f,h-f,Hc),t._pt.u=g||0,t._props.push(l));zh(a,r)};ln("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});Ya[t>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return bi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Km={name:"css",register:Gc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,y,E,v,C,P,A,D,S;mf||Gc(),this.styles=this.styles||Gm(t),D=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(vn[_]&&Lm(_,e,i,r,t,s)))){if(d=typeof u,g=Ya[_],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=wo(u)),g)g(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(m=We(c),p=We(u),p?m!==p&&(c=cr(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Fe(c)&&~c.indexOf("random(")&&(c=wo(c)),We(c+"")||c==="auto"||(c+=En.units[_]||We(bi(t,_))||""),(c+"").charAt(1)==="="&&(c=bi(t,_))):c=bi(t,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in ii&&(_==="autoAlpha"&&(h===1&&bi(t,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),er(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ni,E){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=bn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=u,u=bn(t,"perspective"),M?t.style.perspective=M:lr(t,"perspective")}f=parseFloat(u)}if(v||(C=t._gsap,C.renderTransform&&!e.parseTransform||Po(t,e.parseTransform),P=e.smoothOrigin!==!1&&C.smooth,v=this._pt=new cn(this._pt,a,be,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new cn(this._pt,C,"scaleY",C.scaleY,(y?xs(C.scaleY,y+f):f)-C.scaleY||0,Hc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(un,0,a[un]),u=Ux(u),C.svg?Wc(t,u,0,P,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&er(this,C,"zOrigin",C.zOrigin,p),er(this,a,_,ja(c),ja(u)));continue}else if(_==="svgOrigin"){Wc(t,u,1,P,0,this);continue}else if(_ in $m){Bx(this,C,_,h,y?xs(h,y+u):u);continue}else if(_==="smoothOrigin"){er(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){zx(this,u,t);continue}}else _ in a||(_=Ds(_)||_);if(E||(f||f===0)&&(h||h===0)&&!xx.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=We(u)||(_ in En.units?En.units[_]:m),m!==p&&(h=cr(t,_,c,p)),this._pt=new cn(this._pt,E?C:a,_,h,(y?xs(h,y+f):f)-h,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?bx:Hc),this._pt.u=p||0,E&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=yx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Mx);else if(_ in a)Ix.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){sf(_,u);continue}E||(_ in a?D.push(_,0,a[_]):typeof t[_]=="function"?D.push(_,2,t[_]()):D.push(_,1,c||t[_])),o.push(_)}}A&&Bm(this)},render:function(t,e){if(e.tween._time||!_f())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:bi,aliases:ii,getSetter:function(t,e,i){var r=ii[e];return r&&r.indexOf(",")<0&&(e=r),e in Ni&&e!==un&&(t._gsap.x||bi(t,"x"))?i&&Dh===i?e==="scale"?Ax:wx:(Dh=i||{})&&(e==="scale"?Cx:Rx):t.style&&!ef(t.style[e])?Ex:~e.indexOf("-")?Tx:df(t,e)},core:{_removeProperty:lr,_getMatrix:vf}};pn.utils.checkPrefix=Ds;pn.core.getStyleSaver=Gm;(function(n,t,e,i){var r=ln(n+","+t+","+e,function(s){Ni[s]=1});ln(t,function(s){En.units[s]="deg",$m[s]=1}),ii[r[13]]=n+","+t,ln(i,function(s){var o=s.split(":");ii[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){En.units[n]="px"});pn.registerPlugin(Km);var oi=pn.registerPlugin(Km)||pn;oi.core.Tween;const kx={class:"preloader-content"},Hx={class:"preloader-line"},Vx={class:"preloader-line mt-4"},Gx={__name:"Preloader",setup(n){const t=Ce(null),e=Ce(null),i=Ce([]),r=Ce([]),s="АДДИТИВ ПЛЮС".split(""),o="ПРЕДСТАВЛЯЕТ...".split("");return ki(()=>{const a=[...i.value||[],...r.value||[]];oi.set(a,{opacity:0,y:20}),oi.set(e.value,{opacity:0});const l=oi.timeline();l.to(a,{opacity:1,y:0,duration:.08,stagger:.06,ease:"power2.out"}),l.to(e.value,{opacity:.3,duration:.8,ease:"power2.inOut"},"-=0.5"),l.to({},{duration:1.5}),l.to(t.value,{opacity:0,duration:1,ease:"power2.inOut",onComplete:()=>{t.value&&t.value.remove()}})}),(a,l)=>(Nt(),Ht("div",{ref_key:"preloaderEl",ref:t,class:"preloader"},[G("div",kx,[G("div",Hx,[(Nt(!0),Ht(ae,null,Je(Ua(s),(c,u)=>(Nt(),Ht("span",{key:"l1-"+u,ref_for:!0,ref_key:"line1Refs",ref:i,class:sn(["preloader-char",{space:c===" "}])},he(c),3))),128))]),G("div",Vx,[(Nt(!0),Ht(ae,null,Je(Ua(o),(c,u)=>(Nt(),Ht("span",{key:"l2-"+u,ref_for:!0,ref_key:"line2Refs",ref:r,class:sn(["preloader-char",{space:c===" "}])},he(c),3))),128))])]),G("div",{ref_key:"glowEl",ref:e,class:"preloader-glow"},null,512)],512))}},Zm="/additiv-plus-site-v2/logo.png",Wx={class:"max-w-container mx-auto px-6 lg:px-10 flex items-center justify-between h-20"},Xx={class:"hidden md:flex items-center gap-8"},qx=["href"],$x={key:0,class:"md:hidden bg-beige/95 nav-blur border-t border-border px-6 py-6"},Yx=["href"],kl={__name:"AppNav",setup(n){const t=Ce(!1),e=Ce(!1),i=[{href:"#products",label:"Продукция"},{href:"#about",label:"О компании"},{href:"#stats",label:"Цифры"},{href:"#contact",label:"Контакты"}];function r(){t.value=window.scrollY>50}return ki(()=>window.addEventListener("scroll",r,{passive:!0})),Bs(()=>window.removeEventListener("scroll",r)),(s,o)=>(Nt(),Ht("nav",{class:sn(["fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500",t.value?"bg-beige/80 shadow-sm":"bg-transparent"])},[G("div",Wx,[o[4]||(o[4]=G("a",{href:"#",class:"flex items-center gap-3 group","data-cursor":"pointer"},[G("img",{src:Zm,alt:"Аддитив Плюс",class:"h-10 w-auto transition-transform duration-300 group-hover:scale-105"}),G("span",{class:"font-display text-xl font-semibold text-graphite tracking-wide"},"Аддитив Плюс")],-1)),G("div",Xx,[(Nt(),Ht(ae,null,Je(i,a=>G("a",{key:a.href,href:a.href,class:"text-sm font-body font-medium text-graphite/70 hover:text-champagne transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-champagne after:transition-all after:duration-300 hover:after:w-full","data-cursor":"pointer"},he(a.label),9,qx)),64)),o[3]||(o[3]=G("a",{href:"#contact",class:"magnetic-btn ml-4 px-6 py-2.5 bg-graphite text-beige text-sm font-medium rounded-full hover:bg-graphite-soft transition-colors duration-300","data-cursor":"pointer"},[G("span",{class:"btn-text"},"Связаться")],-1))]),G("button",{class:"md:hidden flex flex-col gap-1.5 p-2",onClick:o[0]||(o[0]=a=>e.value=!e.value),"data-cursor":"pointer"},[G("span",{class:sn(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"rotate-45 translate-y-[5px]":""])},null,2),G("span",{class:sn(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"opacity-0":""])},null,2),G("span",{class:sn(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"-rotate-45 -translate-y-[5px]":""])},null,2)])]),Yt(z0,{"enter-active-class":"transition-all duration-300 ease-out","leave-active-class":"transition-all duration-200 ease-in","enter-from-class":"opacity-0 -translate-y-4","leave-to-class":"opacity-0 -translate-y-4"},{default:_p(()=>[e.value?(Nt(),Ht("div",$x,[(Nt(),Ht(ae,null,Je(i,a=>G("a",{key:a.href,href:a.href,class:"block py-3 text-lg font-display text-graphite hover:text-champagne transition-colors",onClick:o[1]||(o[1]=l=>e.value=!1)},he(a.label),9,Yx)),64)),G("a",{href:"#contact",class:"mt-4 block text-center px-6 py-3 bg-graphite text-beige rounded-full font-medium",onClick:o[2]||(o[2]=a=>e.value=!1)}," Связаться ")])):Ju("",!0)]),_:1})],2))}},jx={class:"py-12 bg-graphite border-t border-champagne/10"},Kx={class:"max-w-container mx-auto px-6 lg:px-10"},Zx={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start"},Jx={class:"flex flex-col items-center md:items-start gap-3"},Qx={class:"text-xs text-champagne-light/40 font-body"},tS={class:"flex flex-col gap-2"},eS=["href"],Hl={__name:"AppFooter",setup(n){const t=[{href:"#products",label:"Продукция"},{href:"#about",label:"О нас"},{href:"#contact",label:"Контакты"}];return(e,i)=>(Nt(),Ht("footer",jx,[G("div",Kx,[G("div",Zx,[G("div",Jx,[i[0]||(i[0]=G("div",{class:"flex items-center gap-3"},[G("img",{src:Zm,alt:"Аддитив Плюс",class:"h-8 w-auto opacity-80"}),G("span",{class:"font-display text-lg text-beige/80 font-medium"},"Аддитив Плюс")],-1)),G("p",Qx," © "+he(new Date().getFullYear())+" ООО «Аддитив Плюс». Все права защищены. ",1)]),i[2]||(i[2]=ws('<div class="flex flex-col gap-2"><span class="text-sm font-display text-beige/60 font-medium">Реквизиты</span><p class="text-xs text-champagne-light/50 font-body">ИНН 5036165686</p><p class="text-xs text-champagne-light/50 font-body">ОГРН 1175074003367</p><p class="text-xs text-champagne-light/50 font-body">117405, Москва, ул. Дорожная, д. 60А, стр. 1</p></div><div class="flex flex-col gap-2"><span class="text-sm font-display text-beige/60 font-medium">Документы</span><a href="#privacy" class="text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body"> Политика конфиденциальности </a><a href="#terms" class="text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body"> Пользовательское соглашение </a></div>',2)),G("div",tS,[i[1]||(i[1]=G("span",{class:"text-sm font-display text-beige/60 font-medium"},"Навигация",-1)),(Nt(),Ht(ae,null,Je(t,r=>G("a",{key:r.href,href:r.href,class:"text-xs text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body"},he(r.label),9,eS)),64))])])])]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="170",nS=0,kh=1,iS=2,Jm=1,rS=2,xi=3,ur=0,fn=1,wi=2,rr=0,ys=1,Xc=2,Hh=3,Vh=4,sS=5,Dr=100,oS=101,aS=102,lS=103,cS=104,uS=200,fS=201,hS=202,dS=203,qc=204,$c=205,pS=206,mS=207,_S=208,gS=209,vS=210,xS=211,SS=212,MS=213,yS=214,Yc=0,jc=1,Kc=2,Ls=3,Zc=4,Jc=5,Qc=6,tu=7,Qm=0,bS=1,ES=2,sr=0,TS=1,wS=2,AS=3,CS=4,RS=5,PS=6,DS=7,t_=300,Is=301,Us=302,eu=303,nu=304,pl=306,iu=1e3,Ur=1001,ru=1002,Wn=1003,LS=1004,Ko=1005,ri=1006,Vl=1007,Nr=1008,Fi=1009,e_=1010,n_=1011,Do=1012,Sf=1013,Gr=1014,Ai=1015,Fo=1016,Mf=1017,yf=1018,Ns=1020,i_=35902,r_=1021,s_=1022,Vn=1023,o_=1024,a_=1025,bs=1026,Fs=1027,l_=1028,bf=1029,c_=1030,Ef=1031,Tf=1033,Ca=33776,Ra=33777,Pa=33778,Da=33779,su=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,fu=37496,hu=37808,du=37809,pu=37810,mu=37811,_u=37812,gu=37813,vu=37814,xu=37815,Su=37816,Mu=37817,yu=37818,bu=37819,Eu=37820,Tu=37821,La=36492,wu=36494,Au=36495,u_=36283,Cu=36284,Ru=36285,Pu=36286,IS=3200,US=3201,NS=0,FS=1,Ji="",Dn="srgb",zs="srgb-linear",ml="linear",le="srgb",Kr=7680,Gh=519,OS=512,BS=513,zS=514,f_=515,kS=516,HS=517,VS=518,GS=519,Wh=35044,Xh="300 es",Ci=2e3,Ka=2001;class ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,Du=180/Math.PI;function Oo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function WS(n,t){return(n%t+t)%t}function Wl(n,t,e){return(1-e)*n+e*t}function Ys(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(t=0,e=0){de.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,r,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],E=r[4],v=r[7],C=r[2],P=r[5],A=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*m+a*E+l*P,s[6]=o*p+a*v+l*A,s[1]=c*_+u*y+f*C,s[4]=c*m+u*E+f*P,s[7]=c*p+u*v+f*A,s[2]=h*_+d*y+g*C,s[5]=h*m+d*E+g*P,s[8]=h*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new Xt;function h_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XS(){const n=Za("canvas");return n.style.display="block",n}const qh={};function io(n){n in qh||(qh[n]=!0,console.warn(n))}function qS(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function $S(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function YS(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=Es(n.r),n.g=Es(n.g),n.b=Es(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?ml:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $h=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],jh=[.3127,.329],Kh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[zs]:{primaries:$h,whitePoint:jh,transfer:ml,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:$h,whitePoint:jh,transfer:le,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}});let Zr;class jS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zr===void 0&&(Zr=Za("canvas")),Zr.width=t.width,Zr.height=t.height;const i=Zr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KS=0;class d_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ql(r[o].image)):s.push(ql(r[o]))}else s=ql(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class hn extends ks{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=Ur,r=Ur,s=ri,o=Nr,a=Vn,l=Fi,c=hn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Oo(),this.name="",this.source=new d_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==t_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case iu:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case ru:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case iu:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case ru:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=t_;hn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,C=(p+1)/2,P=(u+h)/4,A=(f+_)/4,D=(g+m)/4;return E>v&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=A/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=P/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends ks{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new d_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends JS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class p_ extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),P=Math.atan2(C,p*y);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const v=a*y;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new Z,Jh=new Bo;class zo{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Jo.subVectors(this.max,js),Jr.subVectors(t.a,js),Qr.subVectors(t.b,js),ts.subVectors(t.c,js),Xi.subVectors(Qr,Jr),qi.subVectors(ts,Qr),Sr.subVectors(Jr,ts);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Sr.z,Sr.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Sr.z,0,-Sr.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Sr.y,Sr.x,0];return!Yl(e,Jr,Qr,ts,Jo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,Jr,Qr,ts,Jo))?!1:(Qo.crossVectors(Xi,qi),e=[Qo.x,Qo.y,Qo.z],Yl(e,Jr,Qr,ts,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Bn=new Z,Zo=new zo,Jr=new Z,Qr=new Z,ts=new Z,Xi=new Z,qi=new Z,Sr=new Z,js=new Z,Jo=new Z,Qo=new Z,Mr=new Z;function Yl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tM=new zo,Ks=new Z,jl=new Z;class _l{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(jl)),this.expandByPoint(Ks.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new Z,Kl=new Z,ta=new Z,$i=new Z,Zl=new Z,ea=new Z,Jl=new Z;class m_{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Kl.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Kl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=$i.dot(this.direction),l=-$i.dot(ta),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kl).addScaledVector(ta,h),d}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,r,s){Zl.subVectors(e,t),ea.subVectors(i,t),Jl.crossVectors(Zl,ea);let o=this.direction.dot(Jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const l=a*this.direction.dot(ea.crossVectors($i,ea));if(l<0)return null;const c=a*this.direction.dot(Zl.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Jl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/es.setFromMatrixColumn(t,0).length(),s=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,nM)}lookAt(t,e,i){const r=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Yi.crossVectors(i,_n),Yi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Yi.crossVectors(i,_n)),Yi.normalize(),na.crossVectors(_n,Yi),r[0]=Yi.x,r[4]=na.x,r[8]=_n.x,r[1]=Yi.y,r[5]=na.y,r[9]=_n.y,r[2]=Yi.z,r[6]=na.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],E=i[7],v=i[11],C=i[15],P=r[0],A=r[4],D=r[8],S=r[12],M=r[1],L=r[5],N=r[9],F=r[13],X=r[2],V=r[6],H=r[10],q=r[14],B=r[3],ct=r[7],_t=r[11],bt=r[15];return s[0]=o*P+a*M+l*X+c*B,s[4]=o*A+a*L+l*V+c*ct,s[8]=o*D+a*N+l*H+c*_t,s[12]=o*S+a*F+l*q+c*bt,s[1]=u*P+f*M+h*X+d*B,s[5]=u*A+f*L+h*V+d*ct,s[9]=u*D+f*N+h*H+d*_t,s[13]=u*S+f*F+h*q+d*bt,s[2]=g*P+_*M+m*X+p*B,s[6]=g*A+_*L+m*V+p*ct,s[10]=g*D+_*N+m*H+p*_t,s[14]=g*S+_*F+m*q+p*bt,s[3]=y*P+E*M+v*X+C*B,s[7]=y*A+E*L+v*V+C*ct,s[11]=y*D+E*N+v*H+C*_t,s[15]=y*S+E*F+v*q+C*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,E=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,P=e*y+i*E+r*v+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=y*A,t[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*A,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*A,t[4]=E*A,t[5]=(u*m*s-g*h*s+g*r*d-e*m*d-u*r*p+e*h*p)*A,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*A,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*A,t[8]=v*A,t[9]=(g*f*s-u*_*s-g*i*d+e*_*d+u*i*p-e*f*p)*A,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*d-e*a*d)*A,t[12]=C*A,t[13]=(u*_*r-g*f*r+g*i*h-e*_*h-u*i*m+e*f*m)*A,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,E=l*u,v=l*f,C=i.x,P=i.y,A=i.z;return r[0]=(1-(_+p))*C,r[1]=(d+v)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(d-v)*P,r[5]=(1-(h+p))*P,r[6]=(m+y)*P,r[7]=0,r[8]=(g+E)*A,r[9]=(m-y)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],zn.copy(this);const c=1/s,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,g;if(a===Ci)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ka)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Ci){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,d=(i+r)*u;let g,_;if(a===Ci)g=(o+s)*f,_=-2*f;else if(a===Ka)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new Z,zn=new Re,eM=new Z(0,0,0),nM=new Z(1,1,1),Yi=new Z,na=new Z,_n=new Z,Qh=new Re,td=new Bo;class Oi{constructor(t=0,e=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return td.setFromEuler(this),this.setFromQuaternion(td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iM=0;const ed=new Z,ns=new Bo,_i=new Re,ia=new Z,Zs=new Z,rM=new Z,sM=new Bo,nd=new Z(1,0,0),id=new Z(0,1,0),rd=new Z(0,0,1),sd={type:"added"},oM={type:"removed"},is={type:"childadded",child:null},Ql={type:"childremoved",child:null};class dn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new Z,e=new Oi,i=new Bo,r=new Z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new Xt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(nd,t)}rotateY(t){return this.rotateOnAxis(id,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return ed.copy(t).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nd,t)}translateY(t){return this.translateOnAxis(id,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Zs,ia,this.up):_i.lookAt(ia,Zs,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(_i),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sd),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oM),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sd),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,rM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new Z,gi=new Z,tc=new Z,vi=new Z,rs=new Z,ss=new Z,od=new Z,ec=new Z,nc=new Z,ic=new Z,rc=new Ae,sc=new Ae,oc=new Ae;class Hn{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),kn.subVectors(t,e),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){kn.subVectors(r,e),gi.subVectors(i,e),tc.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(gi),l=kn.dot(tc),c=gi.dot(gi),u=gi.dot(tc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return rc.setScalar(0),sc.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(rc,s.x),o.addScaledVector(sc,s.y),o.addScaledVector(oc,s.z),o}static isFrontFacing(t,e,i,r){return kn.subVectors(i,e),gi.subVectors(t,e),kn.cross(gi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),ec.subVectors(t,i);const l=rs.dot(ec),c=ss.dot(ec);if(l<=0&&c<=0)return e.copy(i);nc.subVectors(t,r);const u=rs.dot(nc),f=ss.dot(nc);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(rs,o);ic.subVectors(t,s);const d=rs.dot(ic),g=ss.dot(ic);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ss,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return od.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(od,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ra={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=WS(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ac(o,s,t+1/3),this.g=ac(o,s,t),this.b=ac(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const i=g_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Jt.fromWorkingColorSpace(He.copy(this),t),Math.round(nn(He.r*255,0,255))*65536+Math.round(nn(He.g*255,0,255))*256+Math.round(nn(He.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(He.copy(this),e);const i=He.r,r=He.g,s=He.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Dn){Jt.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,r=He.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(ra);const i=Wl(ji.h,ra.h,e),r=Wl(ji.s,ra.s,e),s=Wl(ji.l,ra.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Kt;Kt.NAMES=g_;let aM=0;class ko extends ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Oo(),this.name="",this.blending=ys,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class v_ extends ko{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new Z,sa=new de;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class x_ extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class S_ extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Vr extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lM=0;const Rn=new Re,lc=new dn,os=new Z,gn=new zo,Js=new zo,Ue=new Z;class Hi extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h_(t)?S_:x_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vr(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(gn.min,Js.min),gn.expandByPoint(Ue),Ue.addVectors(gn.max,Js.max),gn.expandByPoint(Ue)):(gn.expandByPoint(Js.min),gn.expandByPoint(Js.max))}gn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ue.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),Ue.add(os)),r=Math.max(r,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Z,l[D]=new Z;const c=new Z,u=new Z,f=new Z,h=new de,d=new de,g=new de,_=new Z,m=new Z;function p(D,S,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[S].add(_),a[M].add(_),l[D].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,S=y.length;D<S;++D){const M=y[D],L=M.start,N=M.count;for(let F=L,X=L+N;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new Z,v=new Z,C=new Z,P=new Z;function A(D){C.fromBufferAttribute(r,D),P.copy(C);const S=a[D];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(P,S);const L=v.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,S=y.length;D<S;++D){const M=y[D],L=M.start,N=M.count;for(let F=L,X=L+N;F<X;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new Re,yr=new m_,oa=new _l,ld=new Z,aa=new Z,la=new Z,ca=new Z,cc=new Z,ua=new Z,cd=new Z,fa=new Z;class Ri extends dn{constructor(t=new Hi,e=new v_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cc.fromBufferAttribute(f,t),o?ua.addScaledVector(cc,u):ua.addScaledVector(cc.sub(e),u))}e.add(ua)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),yr.copy(t.ray).recast(t.near),!(oa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(oa,ld)===null||yr.origin.distanceToSquared(ld)>(t.far-t.near)**2))&&(ad.copy(s).invert(),yr.copy(t.ray).applyMatrix4(ad),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=E;v<C;v+=3){const P=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);r=ha(this,p,t,i,c,u,f,P,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=ha(this,o,t,i,c,u,f,y,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=E;v<C;v+=3){const P=v,A=v+1,D=v+2;r=ha(this,p,t,i,c,u,f,P,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,v=m+2;r=ha(this,o,t,i,c,u,f,y,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function cM(n,t,e,i,r,s,o,a){let l;if(t.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ur,a),l===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:n}}function ha(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,aa),n.getVertexPosition(l,la),n.getVertexPosition(c,ca);const u=cM(n,t,e,i,aa,la,ca,cd);if(u){const f=new Z;Hn.getBarycoord(cd,aa,la,ca,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,f,new de)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Z,materialIndex:0};Hn.getNormal(aa,la,ca,h.normal),u.face=h,u.barycoord=f}return u}class Ho extends Hi{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vr(c,3)),this.setAttribute("normal",new Vr(u,3)),this.setAttribute("uv",new Vr(f,2));function g(_,m,p,y,E,v,C,P,A,D,S){const M=v/A,L=C/D,N=v/2,F=C/2,X=P/2,V=A+1,H=D+1;let q=0,B=0;const ct=new Z;for(let _t=0;_t<H;_t++){const bt=_t*L-F;for(let Ct=0;Ct<V;Ct++){const Zt=Ct*M-N;ct[_]=Zt*y,ct[m]=bt*E,ct[p]=X,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[p]=P>0?1:-1,u.push(ct.x,ct.y,ct.z),f.push(Ct/A),f.push(1-_t/D),q+=1}}for(let _t=0;_t<D;_t++)for(let bt=0;bt<A;bt++){const Ct=h+bt+V*_t,Zt=h+bt+V*(_t+1),nt=h+(bt+1)+V*(_t+1),ut=h+(bt+1)+V*_t;l.push(Ct,Zt,ut),l.push(Zt,nt,ut),B+=6}a.addGroup(d,B,S),d+=B,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=Os(n[e]);for(const r in i)t[r]=i[r]}return t}function uM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function M_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const fM={clone:Os,merge:Ye};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends ko{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class y_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Z,ud=new de,fd=new de;class Ln extends y_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Du*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,ud,fd),e.subVectors(fd,ud)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,ls=1;class pM extends dn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(as,ls,t,e);r.layers=this.layers,this.add(r);const s=new Ln(as,ls,t,e);s.layers=this.layers,this.add(s);const o=new Ln(as,ls,t,e);o.layers=this.layers,this.add(o);const a=new Ln(as,ls,t,e);a.layers=this.layers,this.add(a);const l=new Ln(as,ls,t,e);l.layers=this.layers,this.add(l);const c=new Ln(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class b_ extends hn{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends Wr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new b_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ho(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:rr});s.uniforms.tEquirect.value=e;const o=new Ri(r,s),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=ri),new pM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const uc=new Z,_M=new Z,gM=new Xt;class Cr{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=uc.subVectors(i,e).cross(_M.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gM.getNormalMatrix(t),r=this.coplanarPoint(uc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new _l,da=new Z;class E_{constructor(t=new Cr,e=new Cr,i=new Cr,r=new Cr,s=new Cr,o=new Cr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-d,v-p).normalize(),i[1].setComponents(l+s,h+c,m+d,v+p).normalize(),i[2].setComponents(l+o,h+u,m+g,v+y).normalize(),i[3].setComponents(l-o,h-u,m-g,v-y).normalize(),i[4].setComponents(l-a,h-f,m-_,v-E).normalize(),e===Ci)i[5].setComponents(l+a,h+f,m+_,v+E).normalize();else if(e===Ka)i[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(da.x=r.normal.x>0?t.max.x:t.min.x,da.y=r.normal.y>0?t.max.y:t.min.y,da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function vM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class gl extends Hi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const E=y+c*p,v=y+c*(p+1),C=y+1+c*(p+1),P=y+1+c*p;d.push(E,v,P),d.push(v,C,P)}this.setIndex(d),this.setAttribute("position",new Vr(g,3)),this.setAttribute("normal",new Vr(_,3)),this.setAttribute("uv",new Vr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.widthSegments,t.heightSegments)}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:xM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:yM,alphatest_fragment:bM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:wM,batching_pars_vertex:AM,batching_vertex:CM,begin_vertex:RM,beginnormal_vertex:PM,bsdfs:DM,iridescence_fragment:LM,bumpmap_pars_fragment:IM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:OM,color_fragment:BM,color_pars_fragment:zM,color_pars_vertex:kM,color_vertex:HM,common:VM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:qM,emissivemap_fragment:$M,emissivemap_pars_fragment:YM,colorspace_fragment:jM,colorspace_pars_fragment:KM,envmap_fragment:ZM,envmap_common_pars_fragment:JM,envmap_pars_fragment:QM,envmap_pars_vertex:ty,envmap_physical_pars_fragment:fy,envmap_vertex:ey,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:ly,lights_lambert_pars_fragment:cy,lights_pars_begin:uy,lights_toon_fragment:hy,lights_toon_pars_fragment:dy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:_y,lights_physical_pars_fragment:gy,lights_fragment_begin:vy,lights_fragment_maps:xy,lights_fragment_end:Sy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Ey,map_fragment:Ty,map_pars_fragment:wy,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Py,morphinstance_vertex:Dy,morphcolor_vertex:Ly,morphnormal_vertex:Iy,morphtarget_pars_vertex:Uy,morphtarget_vertex:Ny,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:By,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:qy,packing:$y,premultiplied_alpha_fragment:Yy,project_vertex:jy,dithering_fragment:Ky,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:eb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:hb,transmission_pars_fragment:db,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:_b,worldpos_vertex:gb,background_vert:vb,background_frag:xb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:yb,cube_frag:bb,depth_vert:Eb,depth_frag:Tb,distanceRGBA_vert:wb,distanceRGBA_frag:Ab,equirect_vert:Cb,equirect_frag:Rb,linedashed_vert:Pb,linedashed_frag:Db,meshbasic_vert:Lb,meshbasic_frag:Ib,meshlambert_vert:Ub,meshlambert_frag:Nb,meshmatcap_vert:Fb,meshmatcap_frag:Ob,meshnormal_vert:Bb,meshnormal_frag:zb,meshphong_vert:kb,meshphong_frag:Hb,meshphysical_vert:Vb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:qb,points_frag:$b,shadow_vert:Yb,shadow_frag:jb,sprite_vert:Kb,sprite_frag:Zb},gt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ti={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ti.physical={uniforms:Ye([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const pa={r:0,b:0,g:0},Er=new Oi,Jb=new Re;function Qb(n,t,e,i,r,s,o){const a=new Kt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===pl)?(u===void 0&&(u=new Ri(new Ho(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Os(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(E.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(Er)),u.material.toneMapped=Jt.getTransfer(v.colorSpace)!==le,(f!==v||h!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ri(new gl(2,2),new Bi({name:"BackgroundMaterial",uniforms:Os(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(pa,M_(n)),i.buffers.color.setClear(pa.r,pa.g,pa.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function t1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,N,F,X){let V=!1;const H=f(F,N,L);s!==H&&(s=H,c(s.object)),V=d(M,F,N,X),V&&g(M,F,N,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(M,L,N,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,N){const F=N.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let V=X[L.id];V===void 0&&(V={},X[L.id]=V);let H=V[F];return H===void 0&&(H=h(l()),V[F]=H),H}function h(M){const L=[],N=[],F=[];for(let X=0;X<e;X++)L[X]=0,N[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,N,F){const X=s.attributes,V=L.attributes;let H=0;const q=N.getAttributes();for(const B in q)if(q[B].location>=0){const _t=X[B];let bt=V[B];if(bt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),_t===void 0||_t.attribute!==bt||bt&&_t.data!==bt.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(M,L,N,F){const X={},V=L.attributes;let H=0;const q=N.getAttributes();for(const B in q)if(q[B].location>=0){let _t=V[B];_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const bt={};bt.attribute=_t,_t&&_t.data&&(bt.data=_t.data),X[B]=bt,H++}s.attributes=X,s.attributesNum=H,s.index=F}function _(){const M=s.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;N[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),X[M]!==L&&(n.vertexAttribDivisor(M,L),X[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function E(M,L,N,F,X,V,H){H===!0?n.vertexAttribIPointer(M,L,N,X,V):n.vertexAttribPointer(M,L,N,F,X,V)}function v(M,L,N,F){_();const X=F.attributes,V=N.getAttributes(),H=L.defaultAttributeValues;for(const q in V){const B=V[q];if(B.location>=0){let ct=X[q];if(ct===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const _t=ct.normalized,bt=ct.itemSize,Ct=t.get(ct);if(Ct===void 0)continue;const Zt=Ct.buffer,nt=Ct.type,ut=Ct.bytesPerElement,Et=nt===n.INT||nt===n.UNSIGNED_INT||ct.gpuType===Sf;if(ct.isInterleavedBufferAttribute){const mt=ct.data,Dt=mt.stride,Ft=ct.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<B.locationSize;zt++)p(B.location+zt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<B.locationSize;zt++)m(B.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let zt=0;zt<B.locationSize;zt++)E(B.location+zt,bt/B.locationSize,nt,_t,Dt*ut,(Ft+bt/B.locationSize*zt)*ut,Et)}else{if(ct.isInstancedBufferAttribute){for(let mt=0;mt<B.locationSize;mt++)p(B.location+mt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<B.locationSize;mt++)m(B.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let mt=0;mt<B.locationSize;mt++)E(B.location+mt,bt/B.locationSize,nt,_t,bt*ut,bt/B.locationSize*mt*ut,Et)}}else if(H!==void 0){const _t=H[q];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(B.location,_t);break;case 3:n.vertexAttrib3fv(B.location,_t);break;case 4:n.vertexAttrib4fv(B.location,_t);break;default:n.vertexAttrib1fv(B.location,_t)}}}}y()}function C(){D();for(const M in i){const L=i[M];for(const N in L){const F=L[N];for(const X in F)u(F[X].object),delete F[X];delete L[N]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const F=L[N];for(const X in F)u(F[X].object),delete F[X];delete L[N]}delete i[M.id]}function A(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const F=N[M.id];for(const X in F)u(F[X].object),delete F[X];delete N[M.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function e1(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function n1(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Fi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ai&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:C,maxSamples:P}}function i1(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Cr,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,E,d);for(let C=0;C!==E;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function r1(n){let t=new WeakMap;function e(o,a){return a===eu?o.mapping=Is:a===nu&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eu||a===nu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class s1 extends y_{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,hd=[.125,.215,.35,.446,.526,.582],Lr=20,fc=new s1,dd=new Kt;let hc=null,dc=0,pc=0,mc=!1;const Rr=(1+Math.sqrt(5))/2,cs=1/Rr,pd=[new Z(-Rr,cs,0),new Z(Rr,cs,0),new Z(-cs,0,Rr),new Z(cs,0,Rr),new Z(0,Rr,-cs),new Z(0,Rr,cs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class md{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,dc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Fo,format:Vn,colorSpace:zs,depthBuffer:!1},r=_d(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o1(s)),this._blurMaterial=a1(s,t,e)}return r}_compileMaterial(t){const e=new Ri(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,i,r){const a=new Ln(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(dd),u.toneMapping=sr,u.autoClear=!1;const d=new v_({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Ri(new Ho,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(dd),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;ma(r,y*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Is||t.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,fc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pd[(r-s-1)%pd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ri(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let y=0;for(let A=0;A<Lr;++A){const D=A/_,S=Math.exp(-D*D/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const v=this._sizeLods[r],C=3*v*(r>E-ps?r-E+ps:0),P=4*(this._cubeSize-v);ma(e,C,P,3*v,2*v),l.setRenderTarget(e),l.render(f,fc)}}function o1(n){const t=[],e=[],i=[];let r=n;const s=n-ps+1+hd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ps?l=hd[o-n+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let P=0;P<d;P++){const A=P%3*2/3-1,D=P>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(S,_*g*P),E.set(h,m*g*P);const M=[P,P,P,P,P,P];v.set(M,p*g*P)}const C=new Hi;C.setAttribute("position",new on(y,_)),C.setAttribute("uv",new on(E,m)),C.setAttribute("faceIndex",new on(v,p)),t.push(C),r>ps&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _d(n,t,e){const i=new Wr(n,t,e);return i.texture.mapping=pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function a1(n,t,e){const i=new Float32Array(Lr),r=new Z(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function gd(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function vd(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eu||l===nu,u=l===Is||l===Us;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new md(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new md(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function c1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function u1(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let E=0,v=y.length;E<v;E+=3){const C=y[E+0],P=y[E+1],A=y[E+2];h.push(C,P,P,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const C=E+0,P=E+1,A=E+2;h.push(C,P,P,A,A,C)}}else return;const m=new(h_(h)?S_:x_)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function f1(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function h1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function d1(n,t,e){const i=new WeakMap,r=new Ae;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,P=1;C>t.maxTextureSize&&(P=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const A=new Float32Array(C*P*4*f),D=new p_(A,C,P,f);D.type=Ai,D.needsUpdate=!0;const S=v*4;for(let L=0;L<f;L++){const N=p[L],F=y[L],X=E[L],V=C*P*4*L;for(let H=0;H<N.count;H++){const q=H*S;g===!0&&(r.fromBufferAttribute(N,H),A[V+q+0]=r.x,A[V+q+1]=r.y,A[V+q+2]=r.z,A[V+q+3]=0),_===!0&&(r.fromBufferAttribute(F,H),A[V+q+4]=r.x,A[V+q+5]=r.y,A[V+q+6]=r.z,A[V+q+7]=0),m===!0&&(r.fromBufferAttribute(X,H),A[V+q+8]=r.x,A[V+q+9]=r.y,A[V+q+10]=r.z,A[V+q+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new de(C,P)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function p1(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class w_ extends hn{constructor(t,e,i,r,s,o,a,l,c,u=bs){if(u!==bs&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bs&&(i=Gr),i===void 0&&u===Fs&&(i=Ns),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const A_=new hn,xd=new w_(1,1),C_=new p_,R_=new QS,P_=new b_,Sd=[],Md=[],yd=new Float32Array(16),bd=new Float32Array(9),Ed=new Float32Array(4);function Hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Sd[r];if(s===void 0&&(s=new Float32Array(r),Sd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vl(n,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function m1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function g1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function v1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function x1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),Ie(e,i)}}function S1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;bd.set(i),n.uniformMatrix3fv(this.addr,!1,bd),Ie(e,i)}}function M1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,i))return;yd.set(i),n.uniformMatrix4fv(this.addr,!1,yd),Ie(e,i)}}function y1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function b1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function E1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function T1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function w1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function A1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function C1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function R1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function P1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xd.compareFunction=f_,s=xd):s=A_,e.setTexture2D(t||s,r)}function D1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||R_,r)}function L1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||P_,r)}function I1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||C_,r)}function U1(n){switch(n){case 5126:return m1;case 35664:return _1;case 35665:return g1;case 35666:return v1;case 35674:return x1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return y1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return w1;case 36294:return A1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return I1}}function N1(n,t){n.uniform1fv(this.addr,t)}function F1(n,t){const e=Hs(t,this.size,2);n.uniform2fv(this.addr,e)}function O1(n,t){const e=Hs(t,this.size,3);n.uniform3fv(this.addr,e)}function B1(n,t){const e=Hs(t,this.size,4);n.uniform4fv(this.addr,e)}function z1(n,t){const e=Hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function k1(n,t){const e=Hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function H1(n,t){const e=Hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function V1(n,t){n.uniform1iv(this.addr,t)}function G1(n,t){n.uniform2iv(this.addr,t)}function W1(n,t){n.uniform3iv(this.addr,t)}function X1(n,t){n.uniform4iv(this.addr,t)}function q1(n,t){n.uniform1uiv(this.addr,t)}function $1(n,t){n.uniform2uiv(this.addr,t)}function Y1(n,t){n.uniform3uiv(this.addr,t)}function j1(n,t){n.uniform4uiv(this.addr,t)}function K1(n,t,e){const i=this.cache,r=t.length,s=vl(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||A_,s[o])}function Z1(n,t,e){const i=this.cache,r=t.length,s=vl(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||R_,s[o])}function J1(n,t,e){const i=this.cache,r=t.length,s=vl(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||P_,s[o])}function Q1(n,t,e){const i=this.cache,r=t.length,s=vl(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),Ie(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||C_,s[o])}function tE(n){switch(n){case 5126:return N1;case 35664:return F1;case 35665:return O1;case 35666:return B1;case 35674:return z1;case 35675:return k1;case 35676:return H1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return W1;case 35669:case 35673:return X1;case 5125:return q1;case 36294:return $1;case 36295:return Y1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}class eE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=U1(e.type)}}class nE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tE(e.type)}}class iE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Td(n,t){n.seq.push(t),n.map[t.id]=t}function rE(n,t,e){const i=n.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),o=_c.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Td(e,c===void 0?new eE(a,n,t):new nE(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new iE(a),Td(e,f)),e=f}}}class Ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);rE(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function wd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sE=37297;let oE=0;function aE(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ad=new Xt;function lE(n){Jt._getMatrix(Ad,Jt.workingColorSpace,n);const t=`mat3( ${Ad.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case ml:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+aE(n.getShaderSource(t),o)}else return r}function cE(n,t){const e=lE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uE(n,t){let e;switch(t){case TS:e="Linear";break;case wS:e="Reinhard";break;case AS:e="Cineon";break;case CS:e="ACESFilmic";break;case PS:e="AgX";break;case DS:e="Neutral";break;case RS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new Z;function fE(){Jt.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function dE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ro(n){return n!==""}function Rd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(mE,gE)}const _E=new Map;function gE(n,t){let e=qt[t];if(e===void 0){const i=_E.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lu(e)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(n){return n.replace(vE,xE)}function xE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ld(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rS?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function ME(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Is:case Us:t="ENVMAP_TYPE_CUBE";break;case pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function bE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qm:t="ENVMAP_BLENDING_MULTIPLY";break;case bS:t="ENVMAP_BLENDING_MIX";break;case ES:t="ENVMAP_BLENDING_ADD";break}return t}function EE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function TE(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=SE(e),c=ME(e),u=yE(e),f=bE(e),h=EE(e),d=hE(e),g=dE(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?qt.tonemapping_pars_fragment:"",e.toneMapping!==sr?uE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,cE("linearToOutputTexel",e.outputColorSpace),fE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=Lu(o),o=Rd(o,e),o=Pd(o,e),a=Lu(a),a=Rd(a,e),a=Pd(a,e),o=Dd(o),a=Dd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,v=y+p+a,C=wd(r,r.VERTEX_SHADER,E),P=wd(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,P),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(P).trim();let V=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const q=Cd(r,C,"vertex"),B=Cd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+q+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||X==="")&&(H=!1);H&&(L.diagnostics={runnable:V,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(P),D=new Ia(r,_),S=pE(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,sE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let wE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new CE(t),e.set(t,i)),i}}class CE{constructor(t){this.id=wE++,this.code=t,this.usedTimes=0}}function RE(n,t,e,i,r,s,o){const a=new __,l=new AE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,N,F){const X=N.fog,V=F.geometry,H=S.isMeshStandardMaterial?N.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),B=q&&q.mapping===pl?q.image.height:null,ct=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,bt=_t!==void 0?_t.length:0;let Ct=0;V.morphAttributes.position!==void 0&&(Ct=1),V.morphAttributes.normal!==void 0&&(Ct=2),V.morphAttributes.color!==void 0&&(Ct=3);let Zt,nt,ut,Et;if(ct){const oe=ti[ct];Zt=oe.vertexShader,nt=oe.fragmentShader}else Zt=S.vertexShader,nt=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),Et=l.getFragmentShaderID(S);const mt=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,zt=F.isBatchedMesh===!0,ve=!!S.map,R=!!S.matcap,U=!!q,w=!!S.aoMap,rt=!!S.lightMap,J=!!S.bumpMap,Q=!!S.normalMap,it=!!S.displacementMap,ot=!!S.emissiveMap,tt=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,I=S.clearcoat>0,W=S.dispersion>0,$=S.iridescence>0,Y=S.sheen>0,dt=S.transmission>0,at=x&&!!S.anisotropyMap,ft=I&&!!S.clearcoatMap,Lt=I&&!!S.clearcoatNormalMap,lt=I&&!!S.clearcoatRoughnessMap,vt=$&&!!S.iridescenceMap,Pt=$&&!!S.iridescenceThicknessMap,Ut=Y&&!!S.sheenColorMap,pt=Y&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,kt=!!S.specularColorMap,se=!!S.specularIntensityMap,O=dt&&!!S.transmissionMap,xt=dt&&!!S.thicknessMap,et=!!S.gradientMap,st=!!S.alphaMap,yt=S.alphaTest>0,St=!!S.alphaHash,Gt=!!S.extensions;let Ee=sr;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const ze={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:Zt,fragmentShader:nt,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:zt,batchingColor:zt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:zs,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:R,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:B,aoMap:w,lightMap:rt,bumpMap:J,normalMap:Q,displacementMap:h&&it,emissiveMap:ot,normalMapObjectSpace:Q&&S.normalMapType===FS,normalMapTangentSpace:Q&&S.normalMapType===NS,metalnessMap:tt,roughnessMap:b,anisotropy:x,anisotropyMap:at,clearcoat:I,clearcoatMap:ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:lt,dispersion:W,iridescence:$,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Ut,sheenRoughnessMap:pt,specularMap:Ot,specularColorMap:kt,specularIntensityMap:se,transmission:dt,transmissionMap:O,thicknessMap:xt,gradientMap:et,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:St,combine:S.combine,mapUv:ve&&_(S.map.channel),aoMapUv:w&&_(S.aoMap.channel),lightMapUv:rt&&_(S.lightMap.channel),bumpMapUv:J&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:it&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:tt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ot&&_(S.specularMap.channel),specularColorMapUv:kt&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:xt&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Q||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ve||st),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let L;if(M){const N=ti[M];L=fM.clone(N.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let N=0,F=u.length;N<F;N++){const X=u[N];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new TE(n,M,S,s),u.push(L)),L}function P(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:D}}function PE(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function DE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Id(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ud(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||DE),i.length>1&&i.sort(h||Id),r.length>1&&r.sort(h||Id)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function LE(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ud,n.set(i,[o])):r>=s.length?(o=new Ud,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function IE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new Kt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function UE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let NE=0;function FE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function OE(n){const t=new IE,e=UE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Re,o=new Re;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,E=0,v=0,C=0,P=0,A=0;c.sort(FE);for(let S=0,M=c.length;S<M;S++){const L=c[S],N=L.color,F=L.intensity,X=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*F,f+=N.g*F,h+=N.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],F);A++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,B=e.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,q.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[_]=q.matrix,L.castShadow){const B=e.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=V,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const q=L.shadow,B=e.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==C||D.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=C,D.numLightProbes=A,i.version=NE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Nd(n){const t=new OE(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BE(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Nd(n),t.set(r,[a])):s>=o.length?(a=new Nd(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class zE extends ko{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kE extends ko{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GE(n,t,e){let i=new E_;const r=new de,s=new de,o=new Ae,a=new zE({depthPacking:US}),l=new kE,c={},u=e.maxTextureSize,f={[ur]:fn,[fn]:ur,[wi]:wi},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:HE,fragmentShader:VE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ri(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm;let p=this.type;this.render=function(P,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(rr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==xi&&this.type===xi,X=p===xi&&this.type!==xi;for(let V=0,H=P.length;V<H;V++){const q=P[V],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ct=B.getFrameExtents();if(r.multiply(ct),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,B.mapSize.y=s.y)),B.map===null||F===!0||X===!0){const bt=this.type!==xi?{minFilter:Wn,magFilter:Wn}:{};B.map!==null&&B.map.dispose(),B.map=new Wr(r.x,r.y,bt),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const _t=B.getViewportCount();for(let bt=0;bt<_t;bt++){const Ct=B.getViewport(bt);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),N.viewport(o),B.updateMatrices(q,bt),i=B.getFrustum(),v(A,D,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===xi&&y(B,D),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function y(P,A){const D=t.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wr(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(A,null,D,h,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(A,null,D,d,_,null)}function E(P,A,D,S){let M=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,F=A.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let V=X[F];V===void 0&&(V=M.clone(),X[F]=V,A.addEventListener("dispose",C)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,S===xi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=D}return M}function v(P,A,D,S,M){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===xi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const F=t.update(P),X=P.material;if(Array.isArray(X)){const V=F.groups;for(let H=0,q=V.length;H<q;H++){const B=V[H],ct=X[B.materialIndex];if(ct&&ct.visible){const _t=E(P,ct,S,M);P.onBeforeShadow(n,P,A,D,F,_t,B),n.renderBufferDirect(D,null,F,_t,P,B),P.onAfterShadow(n,P,A,D,F,_t,B)}}}else if(X.visible){const V=E(P,X,S,M);P.onBeforeShadow(n,P,A,D,F,V,null),n.renderBufferDirect(D,null,F,V,P,null),P.onAfterShadow(n,P,A,D,F,V,null)}}const N=P.children;for(let F=0,X=N.length;F<X;F++)v(N[F],A,D,S,M)}function C(P){P.target.removeEventListener("dispose",C);for(const D in c){const S=c[D],M=P.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const WE={[Yc]:jc,[Kc]:Qc,[Zc]:tu,[Ls]:Jc,[jc]:Yc,[Qc]:Kc,[tu]:Zc,[Jc]:Ls};function XE(n,t){function e(){let O=!1;const xt=new Ae;let et=null;const st=new Ae(0,0,0,0);return{setMask:function(yt){et!==yt&&!O&&(n.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){O=yt},setClear:function(yt,St,Gt,Ee,ze){ze===!0&&(yt*=Ee,St*=Ee,Gt*=Ee),xt.set(yt,St,Gt,Ee),st.equals(xt)===!1&&(n.clearColor(yt,St,Gt,Ee),st.copy(xt))},reset:function(){O=!1,et=null,st.set(-1,0,0,0)}}}function i(){let O=!1,xt=!1,et=null,st=null,yt=null;return{setReversed:function(St){if(xt!==St){const Gt=t.get("EXT_clip_control");xt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=yt;yt=null,this.setClear(Ee)}xt=St},getReversed:function(){return xt},setTest:function(St){St?mt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(St){et!==St&&!O&&(n.depthMask(St),et=St)},setFunc:function(St){if(xt&&(St=WE[St]),st!==St){switch(St){case Yc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case Kc:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case Zc:n.depthFunc(n.EQUAL);break;case Jc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case tu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=St}},setLocked:function(St){O=St},setClear:function(St){yt!==St&&(xt&&(St=1-St),n.clearDepth(St),yt=St)},reset:function(){O=!1,et=null,st=null,yt=null,xt=!1}}}function r(){let O=!1,xt=null,et=null,st=null,yt=null,St=null,Gt=null,Ee=null,ze=null;return{setTest:function(oe){O||(oe?mt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(oe){xt!==oe&&!O&&(n.stencilMask(oe),xt=oe)},setFunc:function(oe,Fn,ci){(et!==oe||st!==Fn||yt!==ci)&&(n.stencilFunc(oe,Fn,ci),et=oe,st=Fn,yt=ci)},setOp:function(oe,Fn,ci){(St!==oe||Gt!==Fn||Ee!==ci)&&(n.stencilOp(oe,Fn,ci),St=oe,Gt=Fn,Ee=ci)},setLocked:function(oe){O=oe},setClear:function(oe){ze!==oe&&(n.clearStencil(oe),ze=oe)},reset:function(){O=!1,xt=null,et=null,st=null,yt=null,St=null,Gt=null,Ee=null,ze=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,C=null,P=null,A=new Kt(0,0,0),D=0,S=!1,M=null,L=null,N=null,F=null,X=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=q>=2);let ct=null,_t={};const bt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Zt=new Ae().fromArray(bt),nt=new Ae().fromArray(Ct);function ut(O,xt,et,st){const yt=new Uint8Array(4),St=n.createTexture();n.bindTexture(O,St),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<et;Gt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(xt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return St}const Et={};Et[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(Ls),J(!1),Q(kh),mt(n.CULL_FACE),w(rr);function mt(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Dt(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ft(O,xt){return f[O]!==xt?(n.bindFramebuffer(O,xt),f[O]=xt,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xt),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function zt(O,xt){let et=d,st=!1;if(O){et=h.get(xt),et===void 0&&(et=[],h.set(xt,et));const yt=O.textures;if(et.length!==yt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Gt=yt.length;St<Gt;St++)et[St]=n.COLOR_ATTACHMENT0+St;et.length=yt.length,st=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,st=!0);st&&n.drawBuffers(et)}function ve(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[Dr]:n.FUNC_ADD,[oS]:n.FUNC_SUBTRACT,[aS]:n.FUNC_REVERSE_SUBTRACT};R[lS]=n.MIN,R[cS]=n.MAX;const U={[uS]:n.ZERO,[fS]:n.ONE,[hS]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[vS]:n.SRC_ALPHA_SATURATE,[_S]:n.DST_COLOR,[pS]:n.DST_ALPHA,[dS]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[gS]:n.ONE_MINUS_DST_COLOR,[mS]:n.ONE_MINUS_DST_ALPHA,[xS]:n.CONSTANT_COLOR,[SS]:n.ONE_MINUS_CONSTANT_COLOR,[MS]:n.CONSTANT_ALPHA,[yS]:n.ONE_MINUS_CONSTANT_ALPHA};function w(O,xt,et,st,yt,St,Gt,Ee,ze,oe){if(O===rr){_===!0&&(Dt(n.BLEND),_=!1);return}if(_===!1&&(mt(n.BLEND),_=!0),O!==sS){if(O!==m||oe!==S){if((p!==Dr||v!==Dr)&&(n.blendEquation(n.FUNC_ADD),p=Dr,v=Dr),oe)switch(O){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,C=null,P=null,A.set(0,0,0),D=0,m=O,S=oe}return}yt=yt||xt,St=St||et,Gt=Gt||st,(xt!==p||yt!==v)&&(n.blendEquationSeparate(R[xt],R[yt]),p=xt,v=yt),(et!==y||st!==E||St!==C||Gt!==P)&&(n.blendFuncSeparate(U[et],U[st],U[St],U[Gt]),y=et,E=st,C=St,P=Gt),(Ee.equals(A)===!1||ze!==D)&&(n.blendColor(Ee.r,Ee.g,Ee.b,ze),A.copy(Ee),D=ze),m=O,S=!1}function rt(O,xt){O.side===wi?Dt(n.CULL_FACE):mt(n.CULL_FACE);let et=O.side===fn;xt&&(et=!et),J(et),O.blending===ys&&O.transparent===!1?w(rr):w(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const st=O.stencilWrite;a.setTest(st),st&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function Q(O){O!==nS?(mt(n.CULL_FACE),O!==L&&(O===kh?n.cullFace(n.BACK):O===iS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),L=O}function it(O){O!==N&&(H&&n.lineWidth(O),N=O)}function ot(O,xt,et){O?(mt(n.POLYGON_OFFSET_FILL),(F!==xt||X!==et)&&(n.polygonOffset(xt,et),F=xt,X=et)):Dt(n.POLYGON_OFFSET_FILL)}function tt(O){O?mt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+V-1),ct!==O&&(n.activeTexture(O),ct=O)}function x(O,xt,et){et===void 0&&(ct===null?et=n.TEXTURE0+V-1:et=ct);let st=_t[et];st===void 0&&(st={type:void 0,texture:void 0},_t[et]=st),(st.type!==O||st.texture!==xt)&&(ct!==et&&(n.activeTexture(et),ct=et),n.bindTexture(O,xt||Et[O]),st.type=O,st.texture=xt)}function I(){const O=_t[ct];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(O){Zt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function pt(O){nt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Ot(O,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let st=et.get(O);st===void 0&&(st=n.getUniformBlockIndex(xt,O.name),et.set(O,st))}function kt(O,xt){const st=c.get(xt).get(O);l.get(xt)!==st&&(n.uniformBlockBinding(xt,st,O.__bindingPointIndex),l.set(xt,st))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ct=null,_t={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,C=null,P=null,A=new Kt(0,0,0),D=0,S=!1,M=null,L=null,N=null,F=null,X=null,Zt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Dt,bindFramebuffer:Ft,drawBuffers:zt,useProgram:ve,setBlending:w,setMaterial:rt,setFlipSided:J,setCullFace:Q,setLineWidth:it,setPolygonOffset:ot,setScissorTest:tt,activeTexture:b,bindTexture:x,unbindTexture:I,compressedTexImage2D:W,compressedTexImage3D:$,texImage2D:vt,texImage3D:Pt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:lt,texSubImage2D:Y,texSubImage3D:dt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ut,viewport:pt,reset:se}}function Fd(n,t,e,i){const r=qE(i);switch(e){case r_:return n*t;case o_:return n*t;case a_:return n*t*2;case l_:return n*t/r.components*r.byteLength;case bf:return n*t/r.components*r.byteLength;case c_:return n*t*2/r.components*r.byteLength;case Ef:return n*t*2/r.components*r.byteLength;case s_:return n*t*3/r.components*r.byteLength;case Vn:return n*t*4/r.components*r.byteLength;case Tf:return n*t*4/r.components*r.byteLength;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ou:case lu:return Math.max(n,16)*Math.max(t,8)/4;case su:case au:return Math.max(n,8)*Math.max(t,8)/2;case cu:case uu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _u:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Su:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case La:case wu:case Au:return Math.ceil(n/4)*Math.ceil(t/4)*16;case u_:case Cu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ru:case Pu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qE(n){switch(n){case Fi:case e_:return{byteLength:1,components:1};case Do:case n_:case Fo:return{byteLength:2,components:1};case Mf:case yf:return{byteLength:2,components:4};case Gr:case Sf:case Ai:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $E(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):Za("canvas")}function _(b,x,I){let W=1;const $=tt(b);if(($.width>I||$.height>I)&&(W=I/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(W*$.width),dt=Math.floor(W*$.height);f===void 0&&(f=g(Y,dt));const at=x?g(Y,dt):f;return at.width=Y,at.height=dt,at.getContext("2d").drawImage(b,0,0,Y,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+dt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,I,W,$=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===n.RED&&(I===n.FLOAT&&(Y=n.R32F),I===n.HALF_FLOAT&&(Y=n.R16F),I===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.R8UI),I===n.UNSIGNED_SHORT&&(Y=n.R16UI),I===n.UNSIGNED_INT&&(Y=n.R32UI),I===n.BYTE&&(Y=n.R8I),I===n.SHORT&&(Y=n.R16I),I===n.INT&&(Y=n.R32I)),x===n.RG&&(I===n.FLOAT&&(Y=n.RG32F),I===n.HALF_FLOAT&&(Y=n.RG16F),I===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RG8UI),I===n.UNSIGNED_SHORT&&(Y=n.RG16UI),I===n.UNSIGNED_INT&&(Y=n.RG32UI),I===n.BYTE&&(Y=n.RG8I),I===n.SHORT&&(Y=n.RG16I),I===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),I===n.UNSIGNED_INT&&(Y=n.RGB32UI),I===n.BYTE&&(Y=n.RGB8I),I===n.SHORT&&(Y=n.RGB16I),I===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),I===n.UNSIGNED_INT&&(Y=n.RGBA32UI),I===n.BYTE&&(Y=n.RGBA8I),I===n.SHORT&&(Y=n.RGBA16I),I===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const dt=$?ml:Jt.getTransfer(W);I===n.FLOAT&&(Y=n.RGBA32F),I===n.HALF_FLOAT&&(Y=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Y=dt===le?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(b,x){let I;return b?x===null||x===Gr||x===Ns?I=n.DEPTH24_STENCIL8:x===Ai?I=n.DEPTH32F_STENCIL8:x===Do&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gr||x===Ns?I=n.DEPTH_COMPONENT24:x===Ai?I=n.DEPTH_COMPONENT32F:x===Do&&(I=n.DEPTH_COMPONENT16),I}function C(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wn&&b.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function P(b){const x=b.target;x.removeEventListener("dispose",P),D(x),x.isVideoTexture&&u.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),M(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const I=b.source,W=h.get(I);if(W){const $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(b),Object.keys(W).length===0&&h.delete(I)}i.remove(b)}function S(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const I=b.source,W=h.get(I);delete W[x.__cacheKey],o.memory.textures--}function M(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[W][$]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=b.textures;for(let W=0,$=I.length;W<$;W++){const Y=i.get(I[W]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[W])}i.remove(b)}let L=0;function N(){L=0}function F(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function X(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const I=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(I,b,x);return}}e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function H(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){nt(I,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function q(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){nt(I,b,x);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function B(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){ut(I,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const ct={[iu]:n.REPEAT,[Ur]:n.CLAMP_TO_EDGE,[ru]:n.MIRRORED_REPEAT},_t={[Wn]:n.NEAREST,[LS]:n.NEAREST_MIPMAP_NEAREST,[Ko]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},bt={[OS]:n.NEVER,[GS]:n.ALWAYS,[BS]:n.LESS,[f_]:n.LEQUAL,[zS]:n.EQUAL,[VS]:n.GEQUAL,[kS]:n.GREATER,[HS]:n.NOTEQUAL};function Ct(b,x){if(x.type===Ai&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===Vl||x.magFilter===Ko||x.magFilter===Nr||x.minFilter===ri||x.minFilter===Vl||x.minFilter===Ko||x.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ct[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_t[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wn||x.minFilter!==Ko&&x.minFilter!==Nr||x.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(b,x){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",P));const W=x.source;let $=h.get(W);$===void 0&&($={},h.set(W,$));const Y=X(x);if(Y!==b.__cacheKey){$[Y]===void 0&&($[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[Y].usedTimes++;const dt=$[b.__cacheKey];dt!==void 0&&($[b.__cacheKey].usedTimes--,dt.usedTimes===0&&S(x)),b.__cacheKey=Y,b.__webglTexture=$[Y].texture}return I}function nt(b,x,I){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const $=Zt(b,x),Y=x.source;e.bindTexture(W,b.__webglTexture,n.TEXTURE0+I);const dt=i.get(Y);if(Y.version!==dt.__version||$===!0){e.activeTexture(n.TEXTURE0+I);const at=Jt.getPrimaries(Jt.workingColorSpace),ft=x.colorSpace===Ji?null:Jt.getPrimaries(x.colorSpace),Lt=x.colorSpace===Ji||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let lt=_(x.image,!1,r.maxTextureSize);lt=ot(x,lt);const vt=s.convert(x.format,x.colorSpace),Pt=s.convert(x.type);let Ut=E(x.internalFormat,vt,Pt,x.colorSpace,x.isVideoTexture);Ct(W,x);let pt;const Ot=x.mipmaps,kt=x.isVideoTexture!==!0,se=dt.__version===void 0||$===!0,O=Y.dataReady,xt=C(x,lt);if(x.isDepthTexture)Ut=v(x.format===Fs,x.type),se&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Ut,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,lt.width,lt.height,0,vt,Pt,null));else if(x.isDataTexture)if(Ot.length>0){kt&&se&&e.texStorage2D(n.TEXTURE_2D,xt,Ut,Ot[0].width,Ot[0].height);for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,Pt,pt.data):e.texImage2D(n.TEXTURE_2D,et,Ut,pt.width,pt.height,0,vt,Pt,pt.data);x.generateMipmaps=!1}else kt?(se&&e.texStorage2D(n.TEXTURE_2D,xt,Ut,lt.width,lt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,vt,Pt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,lt.width,lt.height,0,vt,Pt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ut,Ot[0].width,Ot[0].height,lt.depth);for(let et=0,st=Ot.length;et<st;et++)if(pt=Ot[et],x.format!==Vn)if(vt!==null)if(kt){if(O)if(x.layerUpdates.size>0){const yt=Fd(pt.width,pt.height,x.format,x.type);for(const St of x.layerUpdates){const Gt=pt.data.subarray(St*yt/pt.data.BYTES_PER_ELEMENT,(St+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,St,pt.width,pt.height,1,vt,Gt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,lt.depth,vt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ut,pt.width,pt.height,lt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,lt.depth,vt,Pt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ut,pt.width,pt.height,lt.depth,0,vt,Pt,pt.data)}else{kt&&se&&e.texStorage2D(n.TEXTURE_2D,xt,Ut,Ot[0].width,Ot[0].height);for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],x.format!==Vn?vt!==null?kt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ut,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,Pt,pt.data):e.texImage2D(n.TEXTURE_2D,et,Ut,pt.width,pt.height,0,vt,Pt,pt.data)}else if(x.isDataArrayTexture)if(kt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ut,lt.width,lt.height,lt.depth),O)if(x.layerUpdates.size>0){const et=Fd(lt.width,lt.height,x.format,x.type);for(const st of x.layerUpdates){const yt=lt.data.subarray(st*et/lt.data.BYTES_PER_ELEMENT,(st+1)*et/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,vt,Pt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,vt,Pt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,lt.width,lt.height,lt.depth,0,vt,Pt,lt.data);else if(x.isData3DTexture)kt?(se&&e.texStorage3D(n.TEXTURE_3D,xt,Ut,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,vt,Pt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,lt.width,lt.height,lt.depth,0,vt,Pt,lt.data);else if(x.isFramebufferTexture){if(se)if(kt)e.texStorage2D(n.TEXTURE_2D,xt,Ut,lt.width,lt.height);else{let et=lt.width,st=lt.height;for(let yt=0;yt<xt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Ut,et,st,0,vt,Pt,null),et>>=1,st>>=1}}else if(Ot.length>0){if(kt&&se){const et=tt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,xt,Ut,et.width,et.height)}for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,vt,Pt,pt):e.texImage2D(n.TEXTURE_2D,et,Ut,vt,Pt,pt);x.generateMipmaps=!1}else if(kt){if(se){const et=tt(lt);e.texStorage2D(n.TEXTURE_2D,xt,Ut,et.width,et.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Pt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,vt,Pt,lt);m(x)&&p(W),dt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ut(b,x,I){if(x.image.length!==6)return;const W=Zt(b,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const Y=i.get($);if($.version!==Y.__version||W===!0){e.activeTexture(n.TEXTURE0+I);const dt=Jt.getPrimaries(Jt.workingColorSpace),at=x.colorSpace===Ji?null:Jt.getPrimaries(x.colorSpace),ft=x.colorSpace===Ji||dt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Lt=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!Lt&&!lt?vt[st]=_(x.image[st],!0,r.maxCubemapSize):vt[st]=lt?x.image[st].image:x.image[st],vt[st]=ot(x,vt[st]);const Pt=vt[0],Ut=s.convert(x.format,x.colorSpace),pt=s.convert(x.type),Ot=E(x.internalFormat,Ut,pt,x.colorSpace),kt=x.isVideoTexture!==!0,se=Y.__version===void 0||W===!0,O=$.dataReady;let xt=C(x,Pt);Ct(n.TEXTURE_CUBE_MAP,x);let et;if(Lt){kt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ot,Pt.width,Pt.height);for(let st=0;st<6;st++){et=vt[st].mipmaps;for(let yt=0;yt<et.length;yt++){const St=et[yt];x.format!==Vn?Ut!==null?kt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,St.width,St.height,Ut,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,St.width,St.height,Ut,pt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,St.width,St.height,0,Ut,pt,St.data)}}}else{if(et=x.mipmaps,kt&&se){et.length>0&&xt++;const st=tt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(lt){kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Ut,pt,vt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,vt[st].width,vt[st].height,0,Ut,pt,vt[st].data);for(let yt=0;yt<et.length;yt++){const Gt=et[yt].image[st].image;kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Gt.width,Gt.height,Ut,pt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,Gt.width,Gt.height,0,Ut,pt,Gt.data)}}else{kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,pt,vt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,Ut,pt,vt[st]);for(let yt=0;yt<et.length;yt++){const St=et[yt];kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Ut,pt,St.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,Ut,pt,St.image[st])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=$.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Et(b,x,I,W,$,Y){const dt=s.convert(I.format,I.colorSpace),at=s.convert(I.type),ft=E(I.internalFormat,dt,at,I.colorSpace),Lt=i.get(x),lt=i.get(I);if(lt.__renderTarget=x,!Lt.__hasExternalTextures){const vt=Math.max(1,x.width>>Y),Pt=Math.max(1,x.height>>Y);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,Y,ft,vt,Pt,x.depth,0,dt,at,null):e.texImage2D($,Y,ft,vt,Pt,0,dt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,$,lt.__webglTexture,0,J(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,$,lt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(b,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,Y=v(x.stencilBuffer,$),dt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=J(x);Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Y,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,b)}else{const W=x.textures;for(let $=0;$<W.length;$++){const Y=W[$],dt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),ft=E(Y.internalFormat,dt,at,Y.colorSpace),Lt=J(x);I&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ft,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const $=W.__webglTexture,Y=J(x);if(x.depthTexture.format===bs)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===Fs)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ft(b){const x=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,b)}else if(I){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),mt(x.__webglDepthbuffer[W],b,!1);else{const $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),mt(x.__webglDepthbuffer,b,!1);else{const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,$)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(b,x,I){const W=i.get(b);x!==void 0&&Et(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ft(b)}function ve(b){const x=b.texture,I=i.get(b),W=i.get(x);b.addEventListener("dispose",A);const $=b.textures,Y=b.isWebGLCubeRenderTarget===!0,dt=$.length>1;if(dt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[at]=[];for(let ft=0;ft<x.mipmaps.length;ft++)I.__webglFramebuffer[at][ft]=n.createFramebuffer()}else I.__webglFramebuffer[at]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)I.__webglFramebuffer[at]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(dt)for(let at=0,ft=$.length;at<ft;at++){const Lt=i.get($[at]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Q(b)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ft=$[at];I.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[at]);const Lt=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),vt=E(ft.internalFormat,Lt,lt,ft.colorSpace,b.isXRRenderTarget===!0),Pt=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,vt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,I.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(I.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Et(I.__webglFramebuffer[at][ft],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else Et(I.__webglFramebuffer[at],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let at=0,ft=$.length;at<ft;at++){const Lt=$[at],lt=i.get(Lt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),Ct(n.TEXTURE_2D,Lt),Et(I.__webglFramebuffer,b,Lt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Lt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,W.__webglTexture),Ct(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Et(I.__webglFramebuffer[ft],b,x,n.COLOR_ATTACHMENT0,at,ft);else Et(I.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,at,0);m(x)&&p(at),e.unbindTexture()}b.depthBuffer&&Ft(b)}function R(b){const x=b.textures;for(let I=0,W=x.length;I<W;I++){const $=x[I];if(m($)){const Y=y(b),dt=i.get($).__webglTexture;e.bindTexture(Y,dt),p(Y),e.unbindTexture()}}}const U=[],w=[];function rt(b){if(b.samples>0){if(Q(b)===!1){const x=b.textures,I=b.width,W=b.height;let $=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(b),at=x.length>1;if(at)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Lt=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,$,n.NEAREST),l===!0&&(U.length=0,w.length=0,U.push(n.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const Lt=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function J(b){return Math.min(r.maxSamples,b.samples)}function Q(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ot(b,x){const I=b.colorSpace,W=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==zs&&I!==Ji&&(Jt.getTransfer(I)===le?(W!==Vn||$!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=zt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Q}function YE(n,t){function e(i,r=Ji){let s;const o=Jt.getTransfer(r);if(i===Fi)return n.UNSIGNED_BYTE;if(i===Mf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return n.BYTE;if(i===n_)return n.SHORT;if(i===Do)return n.UNSIGNED_SHORT;if(i===Sf)return n.INT;if(i===Gr)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===Fo)return n.HALF_FLOAT;if(i===r_)return n.ALPHA;if(i===s_)return n.RGB;if(i===Vn)return n.RGBA;if(i===o_)return n.LUMINANCE;if(i===a_)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===l_)return n.RED;if(i===bf)return n.RED_INTEGER;if(i===c_)return n.RG;if(i===Ef)return n.RG_INTEGER;if(i===Tf)return n.RGBA_INTEGER;if(i===Ca||i===Ra||i===Pa||i===Da)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===su||i===ou||i===au||i===lu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===uu||i===fu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cu||i===uu)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hu||i===du||i===pu||i===mu||i===_u||i===gu||i===vu||i===xu||i===Su||i===Mu||i===yu||i===bu||i===Eu||i===Tu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_u)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Su)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tu)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===wu||i===Au)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===La)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u_||i===Cu||i===Ru||i===Pu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===La)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jE extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ga extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KE={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new hn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Bi({vertexShader:ZE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ri(new gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tT extends ks{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new QE,m=e.getContextAttributes();let p=null,y=null;const E=[],v=[],C=new de;let P=null;const A=new Ln;A.viewport=new Ae;const D=new Ln;D.viewport=new Ae;const S=[A,D],M=new jE;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=E[nt];return ut===void 0&&(ut=new gc,E[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=E[nt];return ut===void 0&&(ut=new gc,E[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=E[nt];return ut===void 0&&(ut=new gc,E[nt]=ut),ut.getHandSpace()};function F(nt){const ut=v.indexOf(nt.inputSource);if(ut===-1)return;const Et=E[ut];Et!==void 0&&(Et.update(nt.inputSource,nt.frame,c||o),Et.dispatchEvent({type:nt.type,data:nt.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",V);for(let nt=0;nt<E.length;nt++){const ut=v[nt];ut!==null&&(v[nt]=null,E[nt].disconnect(ut))}L=null,N=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,y=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Wr(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Et=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Fs:bs,Et=m.stencil?Ns:Gr);const Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Dt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Wr(h.textureWidth,h.textureHeight,{format:Vn,type:Fi,depthTexture:new w_(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Zt.setContext(r),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(nt){for(let ut=0;ut<nt.removed.length;ut++){const Et=nt.removed[ut],mt=v.indexOf(Et);mt>=0&&(v[mt]=null,E[mt].disconnect(Et))}for(let ut=0;ut<nt.added.length;ut++){const Et=nt.added[ut];let mt=v.indexOf(Et);if(mt===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=v.length){v.push(Et),mt=Ft;break}else if(v[Ft]===null){v[Ft]=Et,mt=Ft;break}if(mt===-1)break}const Dt=E[mt];Dt&&Dt.connect(Et)}}const H=new Z,q=new Z;function B(nt,ut,Et){H.setFromMatrixPosition(ut.matrixWorld),q.setFromMatrixPosition(Et.matrixWorld);const mt=H.distanceTo(q),Dt=ut.projectionMatrix.elements,Ft=Et.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),ve=Dt[14]/(Dt[10]+1),R=(Dt[9]+1)/Dt[5],U=(Dt[9]-1)/Dt[5],w=(Dt[8]-1)/Dt[0],rt=(Ft[8]+1)/Ft[0],J=zt*w,Q=zt*rt,it=mt/(-w+rt),ot=it*-w;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ot),nt.translateZ(it),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Dt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const tt=zt+it,b=ve+it,x=J-ot,I=Q+(mt-ot),W=R*ve/b*tt,$=U*ve/b*tt;nt.projectionMatrix.makePerspective(x,I,W,$,tt,b),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ct(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ut=nt.near,Et=nt.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),M.near=D.near=A.near=ut,M.far=D.far=A.far=Et,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),A.layers.mask=nt.layers.mask|2,D.layers.mask=nt.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const mt=nt.parent,Dt=M.cameras;ct(M,mt);for(let Ft=0;Ft<Dt.length;Ft++)ct(Dt[Ft],mt);Dt.length===2?B(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),_t(nt,M,mt)};function _t(nt,ut,Et){Et===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Et.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Du*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(nt){l=nt,h!==null&&(h.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function Ct(nt,ut){if(u=ut.getViewerPose(c||o),g=ut,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let mt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Ft=0;Ft<Et.length;Ft++){const zt=Et[Ft];let ve=null;if(d!==null)ve=d.getViewport(zt);else{const U=f.getViewSubImage(h,zt);ve=U.viewport,Ft===0&&(t.setRenderTargetTextures(y,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(y))}let R=S[Ft];R===void 0&&(R=new Ln,R.layers.enable(Ft),R.viewport=new Ae,S[Ft]=R),R.matrix.fromArray(zt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(zt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ve.x,ve.y,ve.width,ve.height),Ft===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(R)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ft=f.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,r.renderState)}}for(let Et=0;Et<E.length;Et++){const mt=v[Et],Dt=E[Et];mt!==null&&Dt!==void 0&&Dt.update(mt,ut,c||o)}bt&&bt(nt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Zt=new T_;Zt.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){bt=nt},this.dispose=function(){}}}const Tr=new Oi,eT=new Re;function nT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,M_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,Tr.copy(v),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(Tr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iT(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const v=E.program;i.uniformBlockBinding(y,v)}function c(y,E){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(y,C);const P=t.render.frame;s[y.id]!==P&&(h(y),s[y.id]=P)}function u(y){const E=f();y.__bindingPointIndex=E;const v=n.createBuffer(),C=y.__size,P=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=r[y.id],v=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,A=v.length;P<A;P++){const D=Array.isArray(v[P])?v[P]:[v[P]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(d(L,P,S,C)===!0){const N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let V=0;V<F.length;V++){const H=F[V],q=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+X,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,X),X+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,E,v,C){const P=y.value,A=E+"_"+v;if(C[A]===void 0)return typeof P=="number"||typeof P=="boolean"?C[A]=P:C[A]=P.clone(),!0;{const D=C[A];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return C[A]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(y){const E=y.uniforms;let v=0;const C=16;for(let A=0,D=E.length;A<D;A++){const S=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,L=S.length;M<L;M++){const N=S[M],F=Array.isArray(N.value)?N.value:[N.value];for(let X=0,V=F.length;X<V;X++){const H=F[X],q=_(H),B=v%C,ct=B%q.boundary,_t=B+ct;v+=ct,_t!==0&&C-_t<q.storage&&(v+=C-_t),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=q.storage}}}const P=v%C;return P>0&&(v+=C-P),y.__size=v,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class rT{constructor(t={}){const{canvas:e=XS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let C=!1,P=0,A=0,D=null,S=-1,M=null;const L=new Ae,N=new Ae;let F=null;const X=new Kt(0);let V=0,H=e.width,q=e.height,B=1,ct=null,_t=null;const bt=new Ae(0,0,H,q),Ct=new Ae(0,0,H,q);let Zt=!1;const nt=new E_;let ut=!1,Et=!1;const mt=new Re,Dt=new Re,Ft=new Z,zt=new Ae,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function U(){return D===null?B:1}let w=i;function rt(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xf}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",St,!1),w===null){const z="webgl2";if(w=rt(z,T),w===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,Q,it,ot,tt,b,x,I,W,$,Y,dt,at,ft,Lt,lt,vt,Pt,Ut,pt,Ot,kt,se,O;function xt(){J=new c1(w),J.init(),kt=new YE(w,J),Q=new n1(w,J,t,kt),it=new XE(w,J),Q.reverseDepthBuffer&&h&&it.buffers.depth.setReversed(!0),ot=new h1(w),tt=new PE,b=new $E(w,J,it,tt,Q,kt,ot),x=new r1(v),I=new l1(v),W=new vM(w),se=new t1(w,W),$=new u1(w,W,ot,se),Y=new p1(w,$,W,ot),Ut=new d1(w,Q,b),lt=new i1(tt),dt=new RE(v,x,I,J,Q,se,lt),at=new nT(v,tt),ft=new LE,Lt=new BE(J),Pt=new Qb(v,x,I,it,Y,d,l),vt=new GE(v,Y,Q),O=new iT(w,ot,Q,it),pt=new e1(w,J,ot),Ot=new f1(w,J,ot),ot.programs=dt.programs,v.capabilities=Q,v.extensions=J,v.properties=tt,v.renderLists=ft,v.shadowMap=vt,v.state=it,v.info=ot}xt();const et=new tT(v,w);this.xr=et,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(H,q,!1))},this.getSize=function(T){return T.set(H,q)},this.setSize=function(T,z,j=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,q=z,e.width=Math.floor(T*B),e.height=Math.floor(z*B),j===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(H*B,q*B).floor()},this.setDrawingBufferSize=function(T,z,j){H=T,q=z,B=j,e.width=Math.floor(T*j),e.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,z,j,K){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,z,j,K),it.viewport(L.copy(bt).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,z,j,K){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,z,j,K),it.scissor(N.copy(Ct).multiplyScalar(B).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){it.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){ct=T},this.setTransparentSort=function(T){_t=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let k=!1;if(D!==null){const ht=D.texture.format;k=ht===Tf||ht===Ef||ht===bf}if(k){const ht=D.texture.type,Mt=ht===Fi||ht===Gr||ht===Do||ht===Ns||ht===Mf||ht===yf,Tt=Pt.getClearColor(),wt=Pt.getClearAlpha(),Bt=Tt.r,Wt=Tt.g,At=Tt.b;Mt?(g[0]=Bt,g[1]=Wt,g[2]=At,g[3]=wt,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Bt,_[1]=Wt,_[2]=At,_[3]=wt,w.clearBufferiv(w.COLOR,0,_))}else K|=w.COLOR_BUFFER_BIT}z&&(K|=w.DEPTH_BUFFER_BIT),j&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ft.dispose(),Lt.dispose(),tt.dispose(),x.dispose(),I.dispose(),Y.dispose(),se.dispose(),O.dispose(),dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Af),et.removeEventListener("sessionend",Cf),hr.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ot.autoReset,z=vt.enabled,j=vt.autoUpdate,K=vt.needsUpdate,k=vt.type;xt(),ot.autoReset=T,vt.enabled=z,vt.autoUpdate=j,vt.needsUpdate=K,vt.type=k}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){const z=T.target;z.removeEventListener("dispose",Gt),Ee(z)}function Ee(T){ze(T),tt.remove(T)}function ze(T){const z=tt.get(T).programs;z!==void 0&&(z.forEach(function(j){dt.releaseProgram(j)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,K,k,ht){z===null&&(z=ve);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=L_(T,z,j,K,k);it.setMaterial(K,Mt);let wt=j.index,Bt=1;if(K.wireframe===!0){if(wt=$.getWireframeAttribute(j),wt===void 0)return;Bt=2}const Wt=j.drawRange,At=j.attributes.position;let Qt=Wt.start*Bt,pe=(Wt.start+Wt.count)*Bt;ht!==null&&(Qt=Math.max(Qt,ht.start*Bt),pe=Math.min(pe,(ht.start+ht.count)*Bt)),wt!==null?(Qt=Math.max(Qt,0),pe=Math.min(pe,wt.count)):At!=null&&(Qt=Math.max(Qt,0),pe=Math.min(pe,At.count));const _e=pe-Qt;if(_e<0||_e===1/0)return;se.setup(k,K,Tt,j,wt);let Qe,ee=pt;if(wt!==null&&(Qe=W.get(wt),ee=Ot,ee.setIndex(Qe)),k.isMesh)K.wireframe===!0?(it.setLineWidth(K.wireframeLinewidth*U()),ee.setMode(w.LINES)):ee.setMode(w.TRIANGLES);else if(k.isLine){let Rt=K.linewidth;Rt===void 0&&(Rt=1),it.setLineWidth(Rt*U()),k.isLineSegments?ee.setMode(w.LINES):k.isLineLoop?ee.setMode(w.LINE_LOOP):ee.setMode(w.LINE_STRIP)}else k.isPoints?ee.setMode(w.POINTS):k.isSprite&&ee.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ee.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Rt=k._multiDrawStarts,ui=k._multiDrawCounts,ne=k._multiDrawCount,On=wt?W.get(wt).bytesPerElement:1,$r=tt.get(K).currentProgram.getUniforms();for(let mn=0;mn<ne;mn++)$r.setValue(w,"_gl_DrawID",mn),ee.render(Rt[mn]/On,ui[mn])}else if(k.isInstancedMesh)ee.renderInstances(Qt,_e,k.count);else if(j.isInstancedBufferGeometry){const Rt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ui=Math.min(j.instanceCount,Rt);ee.renderInstances(Qt,_e,ui)}else ee.render(Qt,_e)};function oe(T,z,j){T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Go(T,z,j),T.side=ur,T.needsUpdate=!0,Go(T,z,j),T.side=wi):Go(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),p=Lt.get(j),p.init(z),E.push(p),j.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==j&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const K=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const Tt=ht[Mt];oe(Tt,j,k),K.add(Tt)}else oe(ht,j,k),K.add(ht)}),E.pop(),p=null,K},this.compileAsync=function(T,z,j=null){const K=this.compile(T,z,j);return new Promise(k=>{function ht(){if(K.forEach(function(Mt){tt.get(Mt).currentProgram.isReady()&&K.delete(Mt)}),K.size===0){k(T);return}setTimeout(ht,10)}J.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Fn=null;function ci(T){Fn&&Fn(T)}function Af(){hr.stop()}function Cf(){hr.start()}const hr=new T_;hr.setAnimationLoop(ci),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(T){Fn=T,et.setAnimationLoop(T),T===null?hr.stop():hr.start()},et.addEventListener("sessionstart",Af),et.addEventListener("sessionend",Cf),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,D),p=Lt.get(T,E.length),p.init(z),E.push(p),Dt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,ut=lt.init(this.clippingPlanes,Et),m=ft.get(T,y.length),m.init(),y.push(m),et.enabled===!0&&et.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&xl(ht,z,-1/0,v.sortObjects)}xl(T,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,_t),R=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,R&&Pt.addToRenderList(m,T),this.info.render.frame++,ut===!0&&lt.beginShadows();const j=p.state.shadowsArray;vt.render(j,T,z),ut===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ht=z.cameras;if(k.length>0)for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const wt=ht[Mt];Pf(K,k,T,wt)}R&&Pt.render(T);for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const wt=ht[Mt];Rf(m,T,wt,wt.viewport)}}else k.length>0&&Pf(K,k,T,z),R&&Pt.render(T),Rf(m,T,z);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,z),se.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ut===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function xl(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){K&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const Mt=Y.update(T),Tt=T.material;Tt.visible&&m.push(T,Mt,Tt,j,zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const Mt=Y.update(T),Tt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),zt.copy(Mt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(Tt)){const wt=Mt.groups;for(let Bt=0,Wt=wt.length;Bt<Wt;Bt++){const At=wt[Bt],Qt=Tt[At.materialIndex];Qt&&Qt.visible&&m.push(T,Mt,Qt,j,zt.z,At)}}else Tt.visible&&m.push(T,Mt,Tt,j,zt.z,null)}}const ht=T.children;for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++)xl(ht[Mt],z,j,K)}function Rf(T,z,j,K){const k=T.opaque,ht=T.transmissive,Mt=T.transparent;p.setupLightsView(j),ut===!0&&lt.setGlobalState(v.clippingPlanes,j),K&&it.viewport(L.copy(K)),k.length>0&&Vo(k,z,j),ht.length>0&&Vo(ht,z,j),Mt.length>0&&Vo(Mt,z,j),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Pf(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Wr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Fo:Fi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[K.id],Mt=K.viewport||L;ht.setSize(Mt.z,Mt.w);const Tt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(X),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),R&&Pt.render(j);const wt=v.toneMapping;v.toneMapping=sr;const Bt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ut===!0&&lt.setGlobalState(v.clippingPlanes,K),Vo(T,j,K),b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht),J.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let At=0,Qt=z.length;At<Qt;At++){const pe=z[At],_e=pe.object,Qe=pe.geometry,ee=pe.material,Rt=pe.group;if(ee.side===wi&&_e.layers.test(K.layers)){const ui=ee.side;ee.side=fn,ee.needsUpdate=!0,Df(_e,j,K,Qe,ee,Rt),ee.side=ui,ee.needsUpdate=!0,Wt=!0}}Wt===!0&&(b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht))}v.setRenderTarget(Tt),v.setClearColor(X,V),Bt!==void 0&&(K.viewport=Bt),v.toneMapping=wt}function Vo(T,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ht=T.length;k<ht;k++){const Mt=T[k],Tt=Mt.object,wt=Mt.geometry,Bt=K===null?Mt.material:K,Wt=Mt.group;Tt.layers.test(j.layers)&&Df(Tt,z,j,wt,Bt,Wt)}}function Df(T,z,j,K,k,ht){T.onBeforeRender(v,z,j,K,k,ht),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,z,j,K,T,ht),k.transparent===!0&&k.side===wi&&k.forceSinglePass===!1?(k.side=fn,k.needsUpdate=!0,v.renderBufferDirect(j,z,K,k,T,ht),k.side=ur,k.needsUpdate=!0,v.renderBufferDirect(j,z,K,k,T,ht),k.side=wi):v.renderBufferDirect(j,z,K,k,T,ht),T.onAfterRender(v,z,j,K,k,ht)}function Go(T,z,j){z.isScene!==!0&&(z=ve);const K=tt.get(T),k=p.state.lights,ht=p.state.shadowsArray,Mt=k.state.version,Tt=dt.getParameters(T,k.state,ht,z,j),wt=dt.getProgramCacheKey(Tt);let Bt=K.programs;K.environment=T.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(T.isMeshStandardMaterial?I:x).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Gt),Bt=new Map,K.programs=Bt);let Wt=Bt.get(wt);if(Wt!==void 0){if(K.currentProgram===Wt&&K.lightsStateVersion===Mt)return If(T,Tt),Wt}else Tt.uniforms=dt.getUniforms(T),T.onBeforeCompile(Tt,v),Wt=dt.acquireProgram(Tt,wt),Bt.set(wt,Wt),K.uniforms=Tt.uniforms;const At=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=lt.uniform),If(T,Tt),K.needsLights=U_(T),K.lightsStateVersion=Mt,K.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMap.value=k.state.directionalShadowMap,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotShadowMap.value=k.state.spotShadowMap,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMap.value=k.state.pointShadowMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Wt,K.uniformsList=null,Wt}function Lf(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Ia.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function If(T,z){const j=tt.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function L_(T,z,j,K,k){z.isScene!==!0&&(z=ve),b.resetTextureUnits();const ht=z.fog,Mt=K.isMeshStandardMaterial?z.environment:null,Tt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zs,wt=(K.isMeshStandardMaterial?I:x).get(K.envMap||Mt),Bt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Wt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),At=!!j.morphAttributes.position,Qt=!!j.morphAttributes.normal,pe=!!j.morphAttributes.color;let _e=sr;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_e=v.toneMapping);const Qe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ee=Qe!==void 0?Qe.length:0,Rt=tt.get(K),ui=p.state.lights;if(ut===!0&&(Et===!0||T!==M)){const An=T===M&&K.id===S;lt.setState(K,T,An)}let ne=!1;K.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ui.state.version||Rt.outputColorSpace!==Tt||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==wt||K.fog===!0&&Rt.fog!==ht||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==lt.numPlanes||Rt.numIntersection!==lt.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Wt||Rt.morphTargets!==At||Rt.morphNormals!==Qt||Rt.morphColors!==pe||Rt.toneMapping!==_e||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=K.version);let On=Rt.currentProgram;ne===!0&&(On=Go(K,z,k));let $r=!1,mn=!1,Vs=!1;const ge=On.getUniforms(),$n=Rt.uniforms;if(it.useProgram(On.program)&&($r=!0,mn=!0,Vs=!0),K.id!==S&&(S=K.id,mn=!0),$r||M!==T){it.buffers.depth.getReversed()?(mt.copy(T.projectionMatrix),$S(mt),YS(mt),ge.setValue(w,"projectionMatrix",mt)):ge.setValue(w,"projectionMatrix",T.projectionMatrix),ge.setValue(w,"viewMatrix",T.matrixWorldInverse);const Vi=ge.map.cameraPosition;Vi!==void 0&&Vi.setValue(w,Ft.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&ge.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,mn=!0,Vs=!0)}if(k.isSkinnedMesh){ge.setOptional(w,k,"bindMatrix"),ge.setOptional(w,k,"bindMatrixInverse");const An=k.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),ge.setValue(w,"boneTexture",An.boneTexture,b))}k.isBatchedMesh&&(ge.setOptional(w,k,"batchingTexture"),ge.setValue(w,"batchingTexture",k._matricesTexture,b),ge.setOptional(w,k,"batchingIdTexture"),ge.setValue(w,"batchingIdTexture",k._indirectTexture,b),ge.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(w,"batchingColorTexture",k._colorsTexture,b));const Gs=j.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Ut.update(k,j,On),(mn||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,ge.setValue(w,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&($n.envMap.value=wt,$n.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&($n.envMapIntensity.value=z.environmentIntensity),mn&&(ge.setValue(w,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&I_($n,Vs),ht&&K.fog===!0&&at.refreshFogUniforms($n,ht),at.refreshMaterialUniforms($n,K,B,q,p.state.transmissionRenderTarget[T.id]),Ia.upload(w,Lf(Rt),$n,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ia.upload(w,Lf(Rt),$n,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(w,"center",k.center),ge.setValue(w,"modelViewMatrix",k.modelViewMatrix),ge.setValue(w,"normalMatrix",k.normalMatrix),ge.setValue(w,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let Vi=0,Gi=An.length;Vi<Gi;Vi++){const Uf=An[Vi];O.update(Uf,On),O.bind(Uf,On)}}return On}function I_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function U_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,j){tt.get(T.texture).__webglTexture=z,tt.get(T.depthTexture).__webglTexture=j;const K=tt.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const j=tt.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){D=T,P=z,A=j;let K=!0,k=null,ht=!1,Mt=!1;if(T){const wt=tt.get(T);if(wt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(wt.__hasExternalTextures)b.rebindTextures(T,tt.get(T.texture).__webglTexture,tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const At=T.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&tt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);const Wt=tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?k=Wt[z][j]:k=Wt[z],ht=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?k=tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?k=Wt[j]:k=Wt,L.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else L.copy(bt).multiplyScalar(B).floor(),N.copy(Ct).multiplyScalar(B).floor(),F=Zt;if(it.bindFramebuffer(w.FRAMEBUFFER,k)&&K&&it.drawBuffers(T,k),it.viewport(L),it.scissor(N),it.setScissorTest(F),ht){const wt=tt.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,wt.__webglTexture,j)}else if(Mt){const wt=tt.get(T.texture),Bt=z||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,j||0,Bt)}S=-1},this.readRenderTargetPixels=function(T,z,j,K,k,ht,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){it.bindFramebuffer(w.FRAMEBUFFER,Tt);try{const wt=T.texture,Bt=wt.format,Wt=wt.type;if(!Q.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&j>=0&&j<=T.height-k&&w.readPixels(z,j,K,k,kt.convert(Bt),kt.convert(Wt),ht)}finally{const wt=D!==null?tt.get(D).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,k,ht,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){const wt=T.texture,Bt=wt.format,Wt=wt.type;if(!Q.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-k){it.bindFramebuffer(w.FRAMEBUFFER,Tt);const At=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.bufferData(w.PIXEL_PACK_BUFFER,ht.byteLength,w.STREAM_READ),w.readPixels(z,j,K,k,kt.convert(Bt),kt.convert(Wt),0);const Qt=D!==null?tt.get(D).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,Qt);const pe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await qS(w,pe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ht),w.deleteBuffer(At),w.deleteSync(pe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,j=0){T.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-j),k=Math.floor(T.image.width*K),ht=Math.floor(T.image.height*K),Mt=z!==null?z.x:0,Tt=z!==null?z.y:0;b.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,Mt,Tt,k,ht),it.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,K=null,k=0){T.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],z=arguments[2],k=arguments[3]||0,j=null);let ht,Mt,Tt,wt,Bt,Wt,At,Qt,pe;const _e=T.isCompressedTexture?T.mipmaps[k]:T.image;j!==null?(ht=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Tt=j.isBox3?j.max.z-j.min.z:1,wt=j.min.x,Bt=j.min.y,Wt=j.isBox3?j.min.z:0):(ht=_e.width,Mt=_e.height,Tt=_e.depth||1,wt=0,Bt=0,Wt=0),K!==null?(At=K.x,Qt=K.y,pe=K.z):(At=0,Qt=0,pe=0);const Qe=kt.convert(z.format),ee=kt.convert(z.type);let Rt;z.isData3DTexture?(b.setTexture3D(z,0),Rt=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(b.setTexture2DArray(z,0),Rt=w.TEXTURE_2D_ARRAY):(b.setTexture2D(z,0),Rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const ui=w.getParameter(w.UNPACK_ROW_LENGTH),ne=w.getParameter(w.UNPACK_IMAGE_HEIGHT),On=w.getParameter(w.UNPACK_SKIP_PIXELS),$r=w.getParameter(w.UNPACK_SKIP_ROWS),mn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Wt);const Vs=T.isDataArrayTexture||T.isData3DTexture,ge=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const $n=tt.get(T),Gs=tt.get(z),An=tt.get($n.__renderTarget),Vi=tt.get(Gs.__renderTarget);it.bindFramebuffer(w.READ_FRAMEBUFFER,An.__webglFramebuffer),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Gi=0;Gi<Tt;Gi++)Vs&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tt.get(T).__webglTexture,k,Wt+Gi),T.isDepthTexture?(ge&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tt.get(z).__webglTexture,k,pe+Gi),w.blitFramebuffer(wt,Bt,ht,Mt,At,Qt,ht,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST)):ge?w.copyTexSubImage3D(Rt,k,At,Qt,pe+Gi,wt,Bt,ht,Mt):w.copyTexSubImage2D(Rt,k,At,Qt,pe+Gi,wt,Bt,ht,Mt);it.bindFramebuffer(w.READ_FRAMEBUFFER,null),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Rt,k,At,Qt,pe,ht,Mt,Tt,Qe,ee,_e.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,k,At,Qt,pe,ht,Mt,Tt,Qe,_e.data):w.texSubImage3D(Rt,k,At,Qt,pe,ht,Mt,Tt,Qe,ee,_e):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,k,At,Qt,ht,Mt,Qe,ee,_e.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,k,At,Qt,_e.width,_e.height,Qe,_e.data):w.texSubImage2D(w.TEXTURE_2D,k,At,Qt,ht,Mt,Qe,ee,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,ui),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ne),w.pixelStorei(w.UNPACK_SKIP_PIXELS,On),w.pixelStorei(w.UNPACK_SKIP_ROWS,$r),w.pixelStorei(w.UNPACK_SKIP_IMAGES,mn),k===0&&z.generateMipmaps&&w.generateMipmap(Rt),it.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,K=null,k=0){return T.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,K,k)},this.initRenderTarget=function(T){tt.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){P=0,A=0,D=null,it.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class sT extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oT extends ko{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Od=new Re,Iu=new m_,va=new _l,xa=new Z;class aT extends dn{constructor(t=new Hi,e=new oT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,t.ray.intersectsSphere(va)===!1)return;Od.copy(r).invert(),Iu.copy(t.ray).applyMatrix4(Od);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);xa.fromBufferAttribute(f,m),Bd(xa,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)xa.fromBufferAttribute(f,g),Bd(xa,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bd(n,t,e,i,r,s,o){const a=Iu.distanceSqToPoint(n);if(a<e){const l=new Z;Iu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class lT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);const cT={__name:"MoleculeScene",setup(n){const t=Ce(null);let e,i,r,s,o,a,l=0,c=0;function u(f,h,d,g){const _=document.createElement("canvas");_.width=d,_.height=g;const m=_.getContext("2d");m.fillStyle="#000",m.fillRect(0,0,d,g),m.fillStyle="#fff",m.font=`bold ${h}px "Cormorant Garamond", serif`,m.textAlign="center",m.textBaseline="middle",m.fillText(f,d/2,g/2);const p=m.getImageData(0,0,d,g),y=[],E=1;for(let v=0;v<g;v+=E)for(let C=0;C<d;C+=E){const P=(v*d+C)*4;if(p.data[P]>128){const A=(C/d-.5)*8,D=-(v/g-.5)*3,S=(Math.random()-.5)*.15;y.push({x:A,y:D,z:S})}}return y}return ki(()=>{const f=t.value,h=f.parentElement,d=h.clientWidth,g=h.clientHeight;e=new rT({canvas:f,alpha:!0,antialias:!0,powerPreference:"high-performance"}),e.setSize(d,g),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),i=new sT,r=new Ln(50,d/g,.1,100),r.position.z=5,a=new lT;const _=u("MINUS AQUA PLUS FIRMITAS",160,4096,512),m=_.length;console.log("Particle count:",m);const p=new Hi,y=new Float32Array(m*3),E=new Float32Array(m*3),v=new Float32Array(m*3),C=new Float32Array(m),P=new Float32Array(m),A=new Float32Array(m*3),D=[new Kt("#FFFFFF"),new Kt("#F0E6D6"),new Kt("#D4C4A8"),new Kt("#E8DCC8"),new Kt("#FFFFFF")];for(let V=0;V<m;V++){const H=Math.random()*Math.PI*2,q=Math.acos(2*Math.random()-1),B=2+Math.random()*3;y[V*3]=B*Math.sin(q)*Math.cos(H),y[V*3+1]=B*Math.sin(q)*Math.sin(H),y[V*3+2]=B*Math.cos(q),E[V*3]=_[V].x,E[V*3+1]=_[V].y,E[V*3+2]=_[V].z,v[V*3]=y[V*3],v[V*3+1]=y[V*3+1],v[V*3+2]=y[V*3+2],C[V]=1.2+Math.random()*1.5,P[V]=Math.random()*Math.PI*2;const ct=D[Math.floor(Math.random()*D.length)];A[V*3]=ct.r,A[V*3+1]=ct.g,A[V*3+2]=ct.b}p.setAttribute("position",new on(v,3)),p.setAttribute("aSize",new on(C,1)),p.setAttribute("aOffset",new on(P,1)),p.setAttribute("aColor",new on(A,3));const S=new Bi({vertexShader:`
      attribute float aSize;
      attribute float aOffset;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uPixelRatio;
      uniform float uAssembled;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;
        vec3 pos = position;

        // Subtle floating when assembled
        float floatAmt = 0.02 * uAssembled;
        pos.x += sin(uTime * 0.5 + aOffset) * floatAmt;
        pos.y += cos(uTime * 0.4 + aOffset * 1.3) * floatAmt;
        pos.z += sin(uTime * 0.3 + aOffset * 0.7) * floatAmt;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        gl_PointSize = aSize * uPixelRatio * (1.0 / -mvPosition.z) * 3.5;

        vAlpha = 0.7 + 0.3 * uAssembled;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        float alpha = smoothstep(0.5, 0.15, dist) * vAlpha;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uAssembled:{value:0}},transparent:!0,depthWrite:!1,blending:Xc});s=new aT(p,S),i.add(s);const M=p.getAttribute("position"),L={progress:0};oi.to(L,{progress:1,duration:4,ease:"power2.inOut",delay:3,onUpdate:()=>{const V=L.progress;for(let H=0;H<m;H++){const q=H/m*.15,B=Math.max(0,Math.min(1,(V-q)/(1-q)));M.array[H*3]=y[H*3]+(E[H*3]-y[H*3])*B,M.array[H*3+1]=y[H*3+1]+(E[H*3+1]-y[H*3+1])*B,M.array[H*3+2]=y[H*3+2]+(E[H*3+2]-y[H*3+2])*B}M.needsUpdate=!0},onUpdateParams:[]}),oi.to(S.uniforms.uAssembled,{value:1,duration:4,ease:"power2.inOut",delay:3});function N(V){l=(V.clientX/window.innerWidth-.5)*2,c=(V.clientY/window.innerHeight-.5)*2}window.addEventListener("mousemove",N);function F(){o=requestAnimationFrame(F);const V=a.getElapsedTime();S.uniforms.uTime.value=V,r.position.x+=(l*.3-r.position.x)*.02,r.position.y+=(-c*.3-r.position.y)*.02,r.lookAt(0,0,0),e.render(i,r)}F();function X(){const V=h.clientWidth,H=h.clientHeight;r.aspect=V/H,r.updateProjectionMatrix(),e.setSize(V,H)}window.addEventListener("resize",X),f._cleanup=()=>{window.removeEventListener("resize",X),window.removeEventListener("mousemove",N),o&&cancelAnimationFrame(o),p.dispose(),S.dispose(),e.dispose()}}),Bs(()=>{t.value&&t.value._cleanup&&t.value._cleanup()}),(f,h)=>(Nt(),Ht("canvas",{ref_key:"canvasRef",ref:t,class:"molecule-canvas"},null,512))}},uT={class:"relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite"},fT={class:"relative z-[2] text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-4"},hT={class:"hero-title font-display text-champagne-light font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]"},dT={class:"hero-title font-display text-champagne-light font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]"},pT={class:"word"},mT={__name:"HeroSection",setup(n){const t=["Мы","творим","будущее"],e=Ce([]),i=Ce(null),r=Ce(null),s=Ce(null);return ki(async()=>{var u;await fp();const o=oi.timeline({delay:.5});e.value.forEach((f,h)=>{f&&o.to(f,{y:0,duration:1,ease:"power3.out"},h*.15)}),o.to(i.value,{y:0,duration:1,ease:"power3.out"},"-=0.5");const c=((((u=r.value)==null?void 0:u.offsetHeight)||60)+16+Math.min(window.innerHeight*.08,60))/2*2/3;oi.to(r.value,{y:-c,duration:3,ease:"power2.inOut",delay:3}),oi.to(s.value,{y:c,duration:3,ease:"power2.inOut",delay:3})}),(o,a)=>(Nt(),Ht("section",uT,[Yt(cT),a[1]||(a[1]=G("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/70 z-[1]"},null,-1)),G("div",fT,[G("div",{ref_key:"titleBlockRef",ref:r,class:"hero-title-wrapper"},[G("h1",hT,[(Nt(),Ht(ae,null,Je(t,(l,c)=>G("span",{key:c,class:"word"},[G("span",{class:"word-inner",ref_for:!0,ref:u=>e.value[c]=u},he(l),513),a[0]||(a[0]=G("span",{class:"inline-block w-[0.3em]"},null,-1))])),64))])],512),G("div",{ref_key:"subtitleBlockRef",ref:s,class:"hero-title-wrapper"},[G("h2",dT,[G("span",pT,[G("span",{class:"word-inner",ref_key:"subtitleWordRef",ref:i},"Инновационные добавки",512)])])],512)])]))}},_T={class:"py-8 bg-graphite overflow-hidden border-y border-champagne/10"},gT={class:"marquee-track"},vT={__name:"MarqueeSection",setup(n){const t=["Уникальное оборудование","Собственное производство","Комплексные решения","Разработка составов и рецептур","Полный цикл испытаний","Бесплатные образцы","Сопровождение на всех этапах","Индивидуальный подход","Квалифицированная техподдержка"];return(e,i)=>(Nt(),Ht("section",_T,[G("div",gT,[(Nt(),Ht(ae,null,Je(2,r=>G("div",{key:r,class:"flex shrink-0 items-center gap-12 px-6"},[(Nt(),Ht(ae,null,Je(t,(s,o)=>G("span",{key:o,class:"flex items-center gap-4 text-champagne-light/60 font-display text-xl md:text-2xl font-light whitespace-nowrap"},[G("span",null,he(s),1),i[0]||(i[0]=G("span",{class:"w-1.5 h-1.5 rounded-full bg-champagne/40"},null,-1))])),64))])),64))])]))}},xT={class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},ST={class:"max-w-container mx-auto px-6 lg:px-10 relative z-10"},MT={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"},yT={class:"relative w-16 h-16 mx-auto mb-6"},bT={class:"absolute inset-0 text-[80px] font-display text-champagne/5 leading-none"},ET={class:"absolute inset-0 flex items-center justify-center"},TT={class:"font-display text-lg font-medium text-beige text-center mb-3"},wT={class:"text-sm text-champagne-light/60 font-body text-center leading-relaxed"},AT={__name:"UspSection",setup(n){const o=[{icon:{render(){return $t("svg",{class:"w-8 h-8 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])}},title:"Собственная лаборатория",description:"Полный цикл испытаний и разработок под ваши задачи"},{icon:{render(){return $t("svg",{class:"w-8 h-8 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})])}},title:"Профессиональная команда",description:"Химики-технологи и инженеры с многолетним стажем"},{icon:{render(){return $t("svg",{class:"w-8 h-8 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}},title:"Гарантия качества",description:"100% ГОСТ, строгий входной контроль сырья"},{icon:{render(){return $t("svg",{class:"w-8 h-8 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})])}},title:"Оперативность",description:"Срок ответа 0 ч — реагируем мгновенно"},{icon:{render(){return $t("svg",{class:"w-8 h-8 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}},title:"Индивидуальный подход",description:"Решения, адаптированные под ваши требования"}];return(a,l)=>(Nt(),Ht("section",xT,[l[2]||(l[2]=G("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl"},null,-1)),G("div",ST,[l[1]||(l[1]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Преимущества"),G("h2",{class:"mt-4 font-display text-section font-light text-beige fade-up"},"Почему выбирают нас"),G("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),G("div",MT,[(Nt(),Ht(ae,null,Je(o,(c,u)=>G("div",{key:u,class:"group relative p-8 rounded-2xl border border-champagne/10 bg-champagne/5 hover:bg-champagne/10 transition-all duration-500 fade-up"},[G("div",yT,[G("div",bT,he(u+1),1),G("div",ET,[(Nt(),cl(ju(c.icon)))])]),G("h3",TT,he(c.title),1),G("p",wT,he(c.description),1),l[0]||(l[0]=G("div",{class:"absolute inset-0 rounded-2xl bg-gradient-to-b from-champagne/0 to-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"},null,-1))])),64))])])]))}},CT={id:"products",class:"py-24 md:py-32 bg-beige"},RT={class:"max-w-container mx-auto px-6 lg:px-10"},PT={class:"flex flex-wrap justify-center gap-3 mb-12 fade-up"},DT=["onClick"],LT={class:"fade-up"},IT={class:"text-center text-muted font-body text-base mb-10 max-w-2xl mx-auto leading-relaxed"},UT={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"},NT={class:"w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500"},FT={class:"font-display text-xl font-medium text-graphite mb-3"},OT={key:0,class:"text-sm text-muted font-body leading-relaxed"},BT={key:1,class:"text-sm text-muted/50 font-body italic"},zT={key:0,class:"text-center py-16"},kT={__name:"ProductsSection",setup(n){const t=Ce(0),e={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])}},i={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M12 3c0 0-6 6.5-6 11a6 6 0 1012 0c0-4.5-6-11-6-11z"})])}},r={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})])}},s={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}},o={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})])}},a={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}},l={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})])}},c={render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})])}},u=[{title:"Добавки для сухих строительных смесей",description:"Комплексные решения для модификации сухих строительных смесей — от штукатурок и шпатлёвок до плиточных клеев и ремонтных составов.",subgroups:[{icon:o,title:"Экстракел (Extracell)",description:"Эфиры целлюлозы для водоудержания, реологии и удобоукладываемости смесей."},{icon:l,title:"Форбокрит (Forbocrete)",description:"Реологические добавки для управления вязкостью и текучестью."},{icon:i,title:"МЭПФ",description:"Суперпластификаторы для повышения подвижности и снижения водоцементного отношения."},{icon:c,title:"РЕПОР (Reobond)",description:"Противоусадочные добавки для снижения усадки и трещинообразования."},{icon:s,title:"РЕГИОПОР (Regopor)",description:"Воздухововлекающие добавки для повышения морозостойкости."},{icon:r,title:"ЛАОЛИН (Laolin)",description:"Ускорители для сокращения сроков схватывания и твердения."},{icon:a,title:"Специальные добавки",description:"Функциональные добавки для специальных свойств смесей."}]},{title:"Добавки для лакокрасочной промышленности",description:"Специализированные добавки для производства лакокрасочных материалов с заданными характеристиками.",subgroups:[{icon:i,title:"Реологические модификаторы",description:"Управление вязкостью и предотвращение седиментации пигментов."},{icon:c,title:"Пеногасители и деаэраторы",description:"Удаление воздушных пузырьков и предотвращение пенообразования."},{icon:l,title:"Диспергаторы",description:"Стабилизация пигментов и наполнителей в красочных системах."},{icon:s,title:"UV-стабилизаторы",description:"Защита от ультрафиолетового излучения и выцветания."}]},{title:"Добавки для пластмасс и полимеров",description:"Химические добавки для переработки пластмасс и производства полимерных изделий.",subgroups:[{icon:i,title:"Пластификаторы",description:"Повышение эластичности и гибкости полимерных материалов."},{icon:s,title:"Стабилизаторы",description:"Термическая и световая стабилизация при переработке."},{icon:e,title:"Антипирены",description:"Снижение горючести полимерных материалов."},{icon:r,title:"Нуклеаторы",description:"Контроль кристаллизации и улучшение оптических свойств."}]},{title:"Добавки для РТИ и каучука",description:"Химические добавки для резинотехнической промышленности и производства каучуковых изделий.",subgroups:[{icon:r,title:"Вулканизирующие агенты",description:"Серные и пероксидные системы для вулканизации резины."},{icon:i,title:"Ускорители вулканизации",description:"Сокращение времени вулканизации и улучшение свойств."},{icon:s,title:"Антиоксиданты",description:"Защита резины от старения и окислительного разрушения."},{icon:l,title:"Активаторы наполнителей",description:"Улучшение взаимодействия между каучуком и наполнителями."}]},{title:"Гибридные клеи и герметики",description:"Гибридные клеевые составы и герметики для строительных и промышленных применений.",subgroups:[{icon:l,title:"MS-полимеры",description:"Гибридные клеи на основе модифицированных силанов."},{icon:s,title:"Полиуретановые герметики",description:"Эластичные уплотнители для строительных швов."},{icon:i,title:"Эпоксидные системы",description:"Высокопрочные клеи для конструкционных соединений."}]}];return(f,h)=>(Nt(),Ht("section",CT,[G("div",RT,[h[2]||(h[2]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Каталог"),G("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Наша продукция"),G("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),G("div",PT,[(Nt(),Ht(ae,null,Je(u,(d,g)=>G("button",{key:g,onClick:_=>t.value=g,class:sn(["px-6 py-3 rounded-full font-body text-sm tracking-wider transition-all duration-500 border",t.value===g?"bg-graphite text-champagne-light border-graphite":"bg-transparent text-graphite border-border hover:border-champagne"]),"data-cursor":"pointer"},he(d.title),11,DT)),64))]),G("div",LT,[G("p",IT,he(u[t.value].description),1),G("div",UT,[(Nt(!0),Ht(ae,null,Je(u[t.value].subgroups,(d,g)=>(Nt(),Ht("div",{key:g,class:"group relative p-8 md:p-10 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5","data-cursor":"pointer"},[G("div",NT,[(Nt(),cl(ju(d.icon)))]),G("h3",FT,he(d.title),1),d.description?(Nt(),Ht("p",OT,he(d.description),1)):(Nt(),Ht("p",BT,"Подробности скоро")),h[0]||(h[0]=G("div",{class:"absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"},null,-1))]))),128))]),u[t.value].subgroups.length===0?(Nt(),Ht("div",zT,[...h[1]||(h[1]=[G("div",{class:"text-muted/40 font-display text-2xl font-light mb-4"},"Раздел в разработке",-1),G("p",{class:"text-muted/60 font-body text-sm"},"Информация о продукции скоро появится",-1)])])):Ju("",!0)])])]))}},HT={id:"stats",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},VT={class:"max-w-container mx-auto px-6 lg:px-10 relative z-10"},GT={class:"grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12"},WT={class:"font-display text-5xl md:text-6xl lg:text-7xl font-light text-champagne"},XT={class:"text-champagne-light"},qT={class:"mt-3 text-sm md:text-base text-champagne-light/60 font-body"},$T={__name:"StatsSection",setup(n){const t=[{value:4,suffix:"",label:"Лаборатории",target:4},{value:9,suffix:"+",label:"Лет на рынке",target:9},{value:2e3,suffix:"",label:"Тонн/год — проектная мощность",target:2e3},{value:100,suffix:"+",label:"Лет суммарного стажа",target:100}],e=Ce([]),i=Ce(!1),r=Ce(!1),s=Ce(-1);let o=null;function a(){i.value=!0,t.forEach((l,c)=>{setTimeout(()=>{var h;s.value=c;const u=(h=e.value)==null?void 0:h[c];if(!u)return;const f={val:0};oi.to(f,{val:l.target,duration:1.5,ease:"power2.out",onUpdate:()=>{u.textContent=Math.round(f.val)}})},c*400)}),setTimeout(()=>{r.value=!0},t.length*400+2e3)}return ki(()=>{const l=document.getElementById("stats");l&&(o=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&!i.value&&(setTimeout(a,4e3),o.unobserve(l))})},{threshold:.3}),o.observe(l))}),Bs(()=>{o&&o.disconnect()}),(l,c)=>(Nt(),Ht("section",HT,[c[1]||(c[1]=G("div",{class:"absolute inset-0 opacity-5"},[G("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-champagne/20"}),G("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-champagne/20"})],-1)),G("div",VT,[c[0]||(c[0]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase"},"Цифры и факты"),G("h2",{class:"mt-4 font-display text-section font-light text-beige"},"Результаты говорят сами за себя"),G("div",{class:"section-divider mx-auto mt-6"})],-1)),G("div",GT,[(Nt(),Ht(ae,null,Je(t,(u,f)=>G("div",{key:f,class:sn(["stat-item text-center",{revealed:i.value&&s.value>=f,frozen:r.value}])},[G("div",WT,[G("span",{ref_for:!0,ref_key:"numberRefs",ref:e},he(r.value?u.value:"0"),513),G("span",XT,he(u.suffix),1)]),G("p",qT,he(u.label),1)],2)),64))])])]))}},YT={id:"about",class:"py-24 md:py-32 bg-beige relative"},jT={class:"max-w-container mx-auto px-6 lg:px-10"},KT={class:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"},ZT={class:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"},JT={class:"font-display text-base font-medium text-graphite"},QT={class:"text-sm text-muted font-body mt-1"},tw={__name:"AboutSection-v5",setup(n){const t=[{title:"Собственная лаборатория",desc:"Полный цикл исследований и разработок"},{title:"Сертификация",desc:"Соответствие ГОСТ и международным стандартам"},{title:"Техподдержка",desc:"Экспертное сопровождение на каждом этапе"},{title:"Эко-ответственность",desc:"Безопасные составы для человека и среды"}];return(e,i)=>(Nt(),Ht("section",YT,[G("div",jT,[G("div",KT,[G("div",null,[i[1]||(i[1]=G("h2",{class:"font-display text-section font-light text-graphite fade-up"},[Cc(" Наука, которая"),G("br"),Cc("работает на вас ")],-1)),i[2]||(i[2]=G("div",{class:"section-divider mt-6 mb-8 fade-up"},null,-1)),i[3]||(i[3]=G("p",{class:"text-base md:text-lg text-muted font-body leading-relaxed fade-up"}," Торговая производственно-научная компания «Аддитив Плюс» — создание и производство химических добавок для строительной индустрии. Мы объединяем передовые научные исследования с практическим опытом для создания продуктов, которые превосходят ожидания. ",-1)),i[4]||(i[4]=G("p",{class:"mt-5 text-base md:text-lg text-muted font-body leading-relaxed fade-up"}," Наша лаборатория постоянно работает над разработкой новых составов, адаптированных к различным климатическим условиям и специфическим требованиям строительных проектов. ",-1)),G("div",ZT,[(Nt(),Ht(ae,null,Je(t,(r,s)=>G("div",{key:s,class:"flex gap-4 fade-up"},[i[0]||(i[0]=G("div",{class:"w-10 h-10 rounded-lg bg-champagne/10 flex items-center justify-center shrink-0"},[G("svg",{class:"w-5 h-5 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[G("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),G("div",null,[G("h4",JT,he(r.title),1),G("p",QT,he(r.desc),1)])])),64))])]),i[5]||(i[5]=ws('<div class="relative fade-up"><div class="aspect-[4/5] rounded-2xl bg-gradient-to-br from-champagne/20 to-champagne-dark/10 border border-border flex items-center justify-center overflow-hidden"><div class="relative w-full h-full flex items-center justify-center"><div class="absolute w-32 h-32 rounded-full border border-champagne/30 animate-pulse"></div><div class="absolute w-48 h-48 rounded-full border border-champagne/20" style="animation:pulse 3s ease-in-out infinite 0.5s;"></div><div class="absolute w-64 h-64 rounded-full border border-champagne/10" style="animation:pulse 4s ease-in-out infinite 1s;"></div><svg class="w-20 h-20 text-champagne/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></div></div><div class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-graphite text-beige px-6 py-4 rounded-xl shadow-lg"><div class="font-display text-2xl font-light">9+</div><div class="text-xs text-champagne-light/70 font-body">лет опыта</div></div></div>',1))])])]))}},ew={id:"lab",class:"py-24 md:py-32 bg-beige"},nw={class:"max-w-container mx-auto px-6 lg:px-10"},iw={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"},rw={class:"w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500"},sw={class:"font-display text-xl font-medium text-graphite mb-3"},ow={class:"text-sm text-muted font-body leading-relaxed"},aw={__name:"LabSection",setup(n){const s=[{icon:{render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])}},title:"Испытания материалов",description:"Комплексные физико-механические и химические испытания строительных материалов и смесей."},{icon:{render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})])}},title:"Разработка рецептур",description:"Создание и оптимизация составов сухих строительных смесей под конкретные задачи."},{icon:{render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}},title:"Сертификация",description:"Подготовка документации и проведение испытаний для получения сертификатов соответствия."},{icon:{render(){return $t("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})])}},title:"Аналитика и исследования",description:"Глубокий анализ химического состава, реологических и физико-механических свойств."}];return(o,a)=>(Nt(),Ht("section",ew,[G("div",nw,[a[1]||(a[1]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Лаборатория"),G("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Услуги нашей лаборатории"),G("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),G("div",iw,[(Nt(),Ht(ae,null,Je(s,(l,c)=>G("div",{key:c,class:"group relative p-8 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5 fade-up"},[G("div",rw,[(Nt(),cl(ju(l.icon)))]),G("h3",sw,he(l.title),1),G("p",ow,he(l.description),1),a[0]||(a[0]=G("div",{class:"absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"},null,-1))])),64))])])]))}},lw={id:"video",class:"py-24 md:py-32 bg-white relative"},cw={class:"max-w-container mx-auto px-6 lg:px-10"},uw={class:"fade-up"},fw={class:"relative aspect-video rounded-2xl overflow-hidden border border-border bg-graphite/5 shadow-xl shadow-champagne/5"},hw={class:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite/90 to-graphite"},dw={__name:"VideoSection",setup(n){const t=Ce(!1);return(e,i)=>(Nt(),Ht("section",lw,[G("div",cw,[i[3]||(i[3]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Видео"),G("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Посмотрите, как мы работаем"),G("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),G("div",uw,[G("div",fw,[G("div",hw,[G("button",{onClick:i[0]||(i[0]=r=>t.value=!0),class:"group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center hover:bg-champagne/30 transition-all duration-500","data-cursor":"pointer"},[...i[1]||(i[1]=[G("svg",{class:"w-8 h-8 md:w-10 md:h-10 text-champagne-light ml-1 group-hover:scale-110 transition-transform duration-300",fill:"currentColor",viewBox:"0 0 24 24"},[G("path",{d:"M8 5v14l11-7z"})],-1)])]),i[2]||(i[2]=G("div",{class:"absolute bottom-6 left-6 right-6 text-center"},[G("p",{class:"text-champagne-light/60 font-body text-sm tracking-wider uppercase"},"Аддитив Плюс — Производство и лаборатория")],-1))])])])])]))}},pw={id:"faq",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},mw={class:"max-w-3xl mx-auto px-6 lg:px-10 relative z-10"},_w={class:"space-y-4"},gw=["onClick"],vw={class:"font-display text-lg md:text-xl font-light text-beige pr-4"},xw={class:"px-6 pb-5 text-champagne-light/60 font-body text-base leading-relaxed"},Sw={__name:"FaqSection",setup(n){const t=Ce(-1),e=[{question:"Какие добавки вы производите?",answer:"Мы производим широкий спектр химических добавок для сухих строительных смесей, лакокрасочной промышленности, РТИ и каучука, а также гибридные клеи и герметики. Наш ассортимент включает эфиры целлюлозы, пластификаторы, ускорители, замедлители, пеногасители и комплексные модификаторы."},{question:"Можно ли заказать образцы для тестирования?",answer:"Да, мы предоставляем бесплатные образцы всей продукции для лабораторных испытаний. Свяжитесь с нами через форму на сайте или по телефону, и наши специалисты подберут оптимальные образцы под ваши задачи."},{question:"Как происходит разработка рецептуры?",answer:"Процесс начинается с анализа ваших требований и условий применения. Наши лаборатории проводят серию испытаний, подбирают оптимальный состав и предоставляют полную документацию с рекомендациями по применению. Средний срок разработки — от 2 до 4 недель."},{question:"Какова минимальная партия заказа?",answer:"Минимальная партия зависит от типа продукции и обсуждается индивидуально. Мы гибко подходим к потребностям клиентов — от небольших пробных партий до крупных промышленных объёмов."},{question:"Предоставляете ли вы техническую поддержку?",answer:"Да, мы обеспечиваем полное экспертное сопровождение на всех этапах — от подбора добавок до внедрения в производство. Наши специалисты готовы выехать на ваш объект для помощи в настройке процессов."},{question:"Есть ли сертификация на продукцию?",answer:"Вся наша продукция проходит строгий контроль качества и имеет необходимые сертификаты соответствия ГОСТ. Лабораторные испытания проводятся на собственной базе с использованием уникального оборудования."}];return(i,r)=>(Nt(),Ht("section",pw,[r[2]||(r[2]=G("div",{class:"absolute top-0 right-0 w-[400px] h-[400px] bg-champagne/3 rounded-full blur-3xl"},null,-1)),G("div",mw,[r[1]||(r[1]=G("div",{class:"text-center mb-16 md:mb-20"},[G("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"FAQ"),G("h2",{class:"mt-4 font-display text-section font-light text-beige fade-up"},"Частые вопросы"),G("div",{class:"section-divider mx-auto mt-6"})],-1)),G("div",_w,[(Nt(),Ht(ae,null,Je(e,(s,o)=>G("div",{key:o,class:sn(["border border-champagne/10 rounded-xl overflow-hidden transition-all duration-500 fade-up",t.value===o?"bg-champagne/5":"bg-transparent hover:bg-champagne/3"])},[G("button",{onClick:a=>t.value=t.value===o?-1:o,class:"w-full flex items-center justify-between px-6 py-5 text-left","data-cursor":"pointer"},[G("span",vw,he(s.question),1),(Nt(),Ht("svg",{class:sn(["w-5 h-5 text-champagne shrink-0 transition-transform duration-500",t.value===o?"rotate-180":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...r[0]||(r[0]=[G("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,gw),G("div",{class:sn(["overflow-hidden transition-all duration-500",t.value===o?"max-h-96 opacity-100":"max-h-0 opacity-0"])},[G("p",xw,he(s.answer),1)],2)],2)),64))])])]))}},Mw={id:"contact",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},yw={class:"max-w-container mx-auto px-6 lg:px-10 relative z-10"},bw={class:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"},Ew={class:"fade-up"},Tw={type:"submit",class:"magnetic-btn w-full px-10 py-4 bg-champagne text-graphite font-body font-medium text-sm rounded-full hover:bg-champagne-light transition-colors duration-300 tracking-wider","data-cursor":"pointer"},ww={class:"btn-text"},Aw={__name:"CtaSection",setup(n){const t=Ce({name:"",phone:"",email:"",message:""}),e=Ce(!1);function i(){console.log("Form submitted:",t.value),e.value=!0,setTimeout(()=>{e.value=!1,t.value={name:"",phone:"",email:"",message:""}},3e3)}return(r,s)=>(Nt(),Ht("section",Mw,[s[5]||(s[5]=G("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl"},null,-1)),G("div",yw,[G("div",bw,[s[4]||(s[4]=ws('<div><span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Свяжитесь с нами</span><h2 class="mt-6 font-display text-cta font-light text-beige fade-up"> Готовы начать<br>сотрудничество? </h2><p class="mt-6 text-base md:text-lg text-champagne-light/60 font-body fade-up"> Оставьте заявку, и наши специалисты подберут оптимальное решение для вашего проекта </p><div class="mt-10 space-y-6"><div class="flex items-center gap-4 fade-up"><div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><div class="text-champagne/60 text-sm font-body mb-1">Телефон</div><a href="tel:+79154749433" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer"> 8-915-474-94-33 </a></div></div><div class="flex items-center gap-4 fade-up"><div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><div class="text-champagne/60 text-sm font-body mb-1">Email</div><a href="mailto:info@additivplus.ru" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer"> info@additivplus.ru </a></div></div></div></div>',1)),G("div",Ew,[G("form",{onSubmit:uv(i,["prevent"]),class:"space-y-5"},[G("div",null,[$o(G("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.name=o),type:"text",placeholder:"Ваше имя",required:"",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Yo,t.value.name]])]),G("div",null,[$o(G("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.phone=o),type:"tel",placeholder:"Телефон",required:"",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Yo,t.value.phone]])]),G("div",null,[$o(G("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.email=o),type:"email",placeholder:"Email",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Yo,t.value.email]])]),G("div",null,[$o(G("textarea",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.value.message=o),placeholder:"Сообщение",rows:"4",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors resize-none"},null,512),[[Yo,t.value.message]])]),G("button",Tw,[G("span",ww,he(e.value?"Отправлено ✓":"Отправить заявку"),1)])],32)])])])]))}},D_=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},Cw={id:"privacy",class:"py-24 md:py-32 bg-beige min-h-screen"},Rw={class:"max-w-container mx-auto px-6 lg:px-10"},Pw={class:"max-w-3xl mx-auto"},Dw={class:"text-sm text-muted font-body mb-8"},Lw={__name:"PrivacyPolicy",setup(n){const t=new Date().toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"});return(e,i)=>(Nt(),Ht("section",Cw,[G("div",Rw,[G("div",Pw,[i[0]||(i[0]=ws('<a href="/" class="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne-dark transition-colors font-body mb-8" data-v-3fc3d99c><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3fc3d99c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-3fc3d99c></path></svg> Назад на главную </a><span class="text-sm font-body font-medium text-champagne tracking-widest uppercase" data-v-3fc3d99c>Юридическая информация</span><h1 class="mt-4 font-display text-4xl md:text-5xl font-light text-graphite" data-v-3fc3d99c> Политика конфиденциальности </h1><div class="section-divider mt-6 mb-8" data-v-3fc3d99c></div>',4)),G("p",Dw," Последнее обновление: "+he(Ua(t)),1),i[1]||(i[1]=ws('<div class="prose prose-lg max-w-none space-y-6" data-v-3fc3d99c><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>1. Общие положения</h2><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ООО «Аддитив Плюс» (далее — Оператор). </p><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 1.2. Оператор обязуется соблюдать конфиденциальность персональных данных пользователей и обеспечивать их защиту в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006. </p></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>2. Оператор персональных данных</h2><div class="bg-white p-6 rounded-xl border border-champagne/10" data-v-3fc3d99c><p class="font-display text-graphite mb-2" data-v-3fc3d99c>ООО «Аддитив Плюс»</p><p class="text-muted text-sm font-body" data-v-3fc3d99c>ИНН 5036165686</p><p class="text-muted text-sm font-body" data-v-3fc3d99c>ОГРН 1175074003367</p><p class="text-muted text-sm font-body" data-v-3fc3d99c>117405, Москва, ул. Дорожная, д. 60А, стр. 1</p><p class="text-muted text-sm font-body" data-v-3fc3d99c>Email: info@additivplus.ru</p></div></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>3. Какие данные мы собираем</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-3fc3d99c> 3.1. На сайте мы собираем следующие персональные данные: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-3fc3d99c><li data-v-3fc3d99c>Фамилия, имя, отчество</li><li data-v-3fc3d99c>Контактный телефон</li><li data-v-3fc3d99c>Адрес электронной почты</li><li data-v-3fc3d99c>Название компании (для обратной связи)</li></ul><p class="text-muted font-body leading-relaxed mt-4 mb-4" data-v-3fc3d99c> 3.2. В CRM-системе (для зарегистрированных партнёров) могут храниться: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-3fc3d99c><li data-v-3fc3d99c>Реквизиты компании (ИНН, Юр. адрес)</li><li data-v-3fc3d99c>История заказов и сделок</li><li data-v-3fc3d99c>Документы и договоры</li><li data-v-3fc3d99c>Заявки в лабораторию и результаты тестов</li></ul></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>4. Цели обработки данных</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-3fc3d99c> 4.1. Персональные данные обрабатываются в следующих целях: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-3fc3d99c><li data-v-3fc3d99c>Связь с пользователем по запросу</li><li data-v-3fc3d99c>Предоставление информации о продукции и услугах</li><li data-v-3fc3d99c>Обработка заявок и заказов</li><li data-v-3fc3d99c>Улучшение качества работы сайта</li></ul></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>5. Хранение и защита данных</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-3fc3d99c> 5.1. Персональные данные хранятся на серверах, расположенных в Российской Федерации, в соответствии с требованиями 152-ФЗ. </p><p class="text-muted font-body leading-relaxed mb-4" data-v-3fc3d99c> 5.2. Срок хранения данных: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-3fc3d99c><li data-v-3fc3d99c>Заявки с сайта - 3 года</li><li data-v-3fc3d99c>Данные клиентов CRM - 5 лет после последнего заказа</li><li data-v-3fc3d99c>Документы и договоры - 5 лет после окончания срока действия</li></ul><p class="text-muted font-body leading-relaxed mt-4" data-v-3fc3d99c> 5.3. После достижения цели обработки данные уничтожаются или обезличиваются. </p></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>6. Права пользователя (152-ФЗ)</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-3fc3d99c> 6.1. В соответствии со ст. 152-ФЗ, пользователь имеет право: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-3fc3d99c><li data-v-3fc3d99c>Получить информацию об обработке своих данных (бесплатно)</li><li data-v-3fc3d99c>Требовать уточнения или удаления данных</li><li data-v-3fc3d99c>Отозвать согласие на обработку данных</li><li data-v-3fc3d99c>Получить копию своих персональных данных</li><li data-v-3fc3d99c>Возразить против обработки данных</li><li data-v-3fc3d99c>Подать жалобу в Роскомнадзор</li></ul><p class="text-muted font-body leading-relaxed mt-4" data-v-3fc3d99c> 6.2. Для реализации прав направьте письмо на email: info@additivplus.ru </p><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 6.3. Ответ будет предоставлен в течение 10 рабочих дней. </p></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>7. Защита данных</h2><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 7.1. Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. </p></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>8. Третьи лица</h2><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 8.1. Оператор не передаёт персональные данные третьим лицам, за исключением случаев, установленных законодательством РФ. </p></section><section data-v-3fc3d99c><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-3fc3d99c>9. Изменения политики</h2><p class="text-muted font-body leading-relaxed" data-v-3fc3d99c> 9.1. Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента размещения на сайте. </p></section></div>',1))])])]))}},Iw=D_(Lw,[["__scopeId","data-v-3fc3d99c"]]),Uw={},Nw={id:"terms",class:"py-24 md:py-32 bg-beige min-h-screen"};function Fw(n,t){return Nt(),Ht("section",Nw,[...t[0]||(t[0]=[ws('<div class="max-w-container mx-auto px-6 lg:px-10" data-v-a5bc2315><div class="max-w-3xl mx-auto" data-v-a5bc2315><a href="/" class="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne-dark transition-colors font-body mb-8" data-v-a5bc2315><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a5bc2315><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-a5bc2315></path></svg> Назад на главную </a><span class="text-sm font-body font-medium text-champagne tracking-widest uppercase" data-v-a5bc2315>Юридическая информация</span><h1 class="mt-4 font-display text-4xl md:text-5xl font-light text-graphite" data-v-a5bc2315> Пользовательское соглашение </h1><div class="section-divider mt-6 mb-8" data-v-a5bc2315></div><div class="prose prose-lg max-w-none space-y-6" data-v-a5bc2315><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>1. Общие положения</h2><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 1.1. Настоящее Пользовательское соглашение (далее — Соглашение) определяет условия использования сайта ООО «Аддитив Плюс». </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 1.2. Начало использования сайта означает принятие условий настоящего Соглашения. </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 1.3. ООО «Аддитив Плюс» вправе вносить изменения в Соглашение. Новая редакция вступает в силу с момента размещения на сайте. </p></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>2. Информация о компании</h2><div class="bg-white p-6 rounded-xl border border-champagne/10" data-v-a5bc2315><p class="font-display text-graphite mb-2" data-v-a5bc2315>ООО «Аддитив Плюс»</p><p class="text-muted text-sm font-body" data-v-a5bc2315>ИНН 5036165686</p><p class="text-muted text-sm font-body" data-v-a5bc2315>ОГРН 1175074003367</p><p class="text-muted text-sm font-body" data-v-a5bc2315>117405, Москва, ул. Дорожная, д. 60А, стр. 1</p><p class="text-muted text-sm font-body" data-v-a5bc2315>Email: info@additivplus.ru</p><p class="text-muted text-sm font-body" data-v-a5bc2315>Телефон: 8-915-474-94-33</p></div></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>3. Предмет соглашения</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-a5bc2315> 3.1. Сайт предоставляет информацию о продукции и услугах ООО «Аддитив Плюс» в сфере химических добавок для строительства. </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 3.2. Информация на сайте носит ознакомительный характер и не является публичной офертой (ст. 437 ГК РФ). </p></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>4. Права и обязанности пользователя</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-a5bc2315> 4.1. Пользователь обязан: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-a5bc2315><li data-v-a5bc2315>Не нарушать законодательство РФ</li><li data-v-a5bc2315>Не размещать вредоносный код</li><li data-v-a5bc2315>Не злоупотреблять формами обратной связи</li></ul><p class="text-muted font-body leading-relaxed mt-4" data-v-a5bc2315> 4.2. Пользователь имеет право: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-a5bc2315><li data-v-a5bc2315>Получать достоверную информацию о продукции</li><li data-v-a5bc2315>Обращаться в службу поддержки</li><li data-v-a5bc2315>Использовать сайт в личных целях</li></ul></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>5. Интеллектуальная собственность</h2><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 5.1. Все элементы сайта (дизайн, тексты, изображения, логотипы) являются собственностью ООО «Аддитив Плюс» и защищены законодательством РФ об интеллектуальной собственности. </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 5.2. Копирование, распространение или использование материалов сайта без письменного разрешения запрещено. </p></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>6. Ограничение ответственности</h2><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 6.1. ООО «Аддитив Плюс» не несёт ответственности за: </p><ul class="list-disc list-inside text-muted font-body space-y-2 ml-4" data-v-a5bc2315><li data-v-a5bc2315>Неточности в информации, предоставленной третьими лицами</li><li data-v-a5bc2315>Временную недоступность сайта</li><li data-v-a5bc2315>Убытки, возникшие вследствие использования или невозможности использования сайта</li></ul></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>7. Персональные данные</h2><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 7.1. Порядок обработки персональных данных определяется Политикой конфиденциальности, которая является неотъемлемой частью настоящего Соглашения. </p></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>8. Претензии и споры</h2><p class="text-muted font-body leading-relaxed mb-4" data-v-a5bc2315> 8.1. Все претензии и предложения направляются по адресу: info@additivplus.ru </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 8.2. Споры разрешаются в соответствии с законодательством РФ. </p></section><section data-v-a5bc2315><h2 class="font-display text-2xl font-medium text-graphite mb-4" data-v-a5bc2315>9. Заключительные положения</h2><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 9.1. Соглашение вступает в силу с момента начала использования сайта и действует до его прекращения. </p><p class="text-muted font-body leading-relaxed" data-v-a5bc2315> 9.2. В случае несогласия с условиями Соглашения пользователь должен прекратить использование сайта. </p></section></div></div></div>',1)])])}const Ow=D_(Uw,[["render",Fw],["__scopeId","data-v-a5bc2315"]]),Bw={__name:"App",setup(n){const t=Ce(""),e=()=>{t.value=window.location.hash};ki(()=>{e(),window.addEventListener("hashchange",e),i()}),Sv();const i=()=>{const r=document.querySelectorAll(".fade-up"),s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),s.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});r.forEach(o=>s.observe(o)),document.querySelectorAll(".magnetic-btn").forEach(o=>{o.addEventListener("mousemove",a=>{const l=o.getBoundingClientRect(),c=a.clientX-l.left-l.width/2,u=a.clientY-l.top-l.height/2,f=o.querySelector(".btn-text");o.style.transform=`translate(${c*.3}px, ${u*.3}px)`,f&&(f.style.transform=`translate(${c*.15}px, ${u*.15}px)`)}),o.addEventListener("mouseleave",()=>{const a=o.querySelector(".btn-text");o.style.transform="translate(0, 0)",a&&(a.style.transform="translate(0, 0)")})})};return ya(t,()=>{window.scrollTo({top:0,behavior:"smooth"})}),(r,s)=>(Nt(),Ht(ae,null,[Yt(Gx),s[0]||(s[0]=G("div",{class:"grain-overlay"},null,-1)),t.value==="#privacy"?(Nt(),Ht(ae,{key:0},[Yt(kl),Yt(Iw),Yt(Hl)],64)):t.value==="#terms"?(Nt(),Ht(ae,{key:1},[Yt(kl),Yt(Ow),Yt(Hl)],64)):(Nt(),Ht(ae,{key:2},[Yt(kl),G("main",null,[Yt(mT),Yt(vT),Yt(AT),Yt(kT),Yt($T),Yt(aw),Yt(dw),Yt(Sw),Yt(tw),Yt(Aw)]),Yt(Hl)],64))],64))}};dv(Bw).mount("#app");
