var U_=Object.defineProperty;var N_=(n,t,e)=>t in n?U_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Rt=(n,t,e)=>N_(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ue={},vs=[],ai=()=>{},zd=()=>!1,Ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qa=n=>n.startsWith("onUpdate:"),Fe=Object.assign,Iu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},F_=Object.prototype.hasOwnProperty,ne=(n,t)=>F_.call(n,t),Ut=Array.isArray,xs=n=>Uo(n)==="[object Map]",kd=n=>Uo(n)==="[object Set]",Lf=n=>Uo(n)==="[object Date]",Ht=n=>typeof n=="function",Me=n=>typeof n=="string",li=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",Hd=n=>(ie(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),Vd=Object.prototype.toString,Uo=n=>Vd.call(n),O_=n=>Uo(n).slice(8,-1),Gd=n=>Uo(n)==="[object Object]",Uu=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,oo=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},B_=/-\w/g,Qe=tl(n=>n.replace(B_,t=>t.slice(1).toUpperCase())),z_=/\B([A-Z])/g,Yr=tl(n=>n.replace(z_,"-$1").toLowerCase()),el=tl(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=tl(n=>n?`on${el(n)}`:""),ii=(n,t)=>!Object.is(n,t),ya=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Wd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Nu=n=>{const t=parseFloat(n);return isNaN(t)?n:t},k_=n=>{const t=Me(n)?Number(n):NaN;return isNaN(t)?n:t};let If;const nl=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Me(i)?W_(i):go(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Me(n)||ie(n))return n}const H_=/;(?![^(]*\))/g,V_=/:([^]+)/,G_=/\/\*[^]*?\*\//g;function W_(n){const t={};return n.replace(G_,"").split(H_).forEach(e=>{if(e){const i=e.split(V_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function qe(n){let t="";if(Me(n))t=n;else if(Ut(n))for(let e=0;e<n.length;e++){const i=qe(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const X_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",q_=Lu(X_);function Xd(n){return!!n||n===""}function Y_(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Fu(n[i],t[i]);return e}function Fu(n,t){if(n===t)return!0;let e=Lf(n),i=Lf(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=li(n),i=li(t),e||i)return n===t;if(e=Ut(n),i=Ut(t),e||i)return e&&i?Y_(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Fu(n[o],t[o]))return!1}}return String(n)===String(t)}const qd=n=>!!(n&&n.__v_isRef===!0),Te=n=>Me(n)?n:n==null?"":Ut(n)||ie(n)&&(n.toString===Vd||!Ht(n.toString))?qd(n)?Te(n.value):JSON.stringify(n,Yd,2):String(n),Yd=(n,t)=>qd(t)?Yd(n,t.value):xs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Sl(i,s)+" =>"]=r,e),{})}:kd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Sl(e))}:li(t)?Sl(t):ie(t)&&!Ut(t)&&!Gd(t)?String(t):t,Sl=(n,t="")=>{var e;return li(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class $_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Be&&(Be.active?(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Be;try{return Be=this,t()}finally{Be=e}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){if(this._on>0&&--this._on===0){if(Be===this)Be=this.prevScope;else{let t=Be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function j_(){return Be}let pe;const Ml=new WeakSet;class $d{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&(Be.active?Be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uf(this),Zd(this);const t=pe,e=Xn;pe=this,Xn=!0;try{return this.fn()}finally{Jd(this),pe=t,Xn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zu(t);this.deps=this.depsTail=void 0,Uf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let jd=0,ao,lo;function Kd(n,t=!1){if(n.flags|=8,t){n.next=lo,lo=n;return}n.next=ao,ao=n}function Ou(){jd++}function Bu(){if(--jd>0)return;if(lo){let t=lo;for(lo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;ao;){let t=ao;for(ao=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Zd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jd(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),zu(i),K_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function _c(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===vo)||(n.globalVersion=vo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_c(n))))return;n.flags|=2;const t=n.dep,e=pe,i=Xn;pe=n,Xn=!0;try{Zd(n);const r=n.fn(n._value);(t.version===0||ii(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{pe=e,Xn=i,Jd(n),n.flags&=-3}}function zu(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)zu(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function K_(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Xn=!0;const tp=[];function Ii(){tp.push(Xn),Xn=!1}function Ui(){const n=tp.pop();Xn=n===void 0?!0:n}function Uf(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=pe;pe=void 0;try{t()}finally{pe=e}}}let vo=0;class Z_{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ku{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!Xn||pe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==pe)e=this.activeLink=new Z_(pe,this),pe.deps?(e.prevDep=pe.depsTail,pe.depsTail.nextDep=e,pe.depsTail=e):pe.deps=pe.depsTail=e,ep(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=pe.depsTail,e.nextDep=void 0,pe.depsTail.nextDep=e,pe.depsTail=e,pe.deps===e&&(pe.deps=i)}return e}trigger(t){this.version++,vo++,this.notify(t)}notify(t){Ou();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Bu()}}}function ep(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ep(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const gc=new WeakMap,Br=Symbol(""),vc=Symbol(""),xo=Symbol("");function Ge(n,t,e){if(Xn&&pe){let i=gc.get(n);i||gc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new ku),r.map=i,r.key=e),r.track()}}function wi(n,t,e,i,r,s){const o=gc.get(n);if(!o){vo++;return}const a=l=>{l&&l.trigger()};if(Ou(),t==="clear")o.forEach(a);else{const l=Ut(n),c=l&&Uu(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===xo||!li(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(xo)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Br)),xs(n)&&a(o.get(vc)));break;case"delete":l||(a(o.get(Br)),xs(n)&&a(o.get(vc)));break;case"set":xs(n)&&a(o.get(Br));break}}Bu()}function Zr(n){const t=Qt(n);return t===n?t:(Ge(t,"iterate",xo),Fn(n)?t:t.map(Yn))}function il(n){return Ge(n=Qt(n),"iterate",xo),n}function ti(n,t){return Ni(n)?Rs(zr(n)?Yn(t):t):Yn(t)}const J_={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return Zr(this).concat(...n.map(t=>Ut(t)?Zr(t):t))},entries(){return yl(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,t){return di(this,"every",n,t,void 0,arguments)},filter(n,t){return di(this,"filter",n,t,e=>e.map(i=>ti(this,i)),arguments)},find(n,t){return di(this,"find",n,t,e=>ti(this,e),arguments)},findIndex(n,t){return di(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return di(this,"findLast",n,t,e=>ti(this,e),arguments)},findLastIndex(n,t){return di(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return di(this,"forEach",n,t,void 0,arguments)},includes(...n){return El(this,"includes",n)},indexOf(...n){return El(this,"indexOf",n)},join(n){return Zr(this).join(n)},lastIndexOf(...n){return El(this,"lastIndexOf",n)},map(n,t){return di(this,"map",n,t,void 0,arguments)},pop(){return Xs(this,"pop")},push(...n){return Xs(this,"push",n)},reduce(n,...t){return Nf(this,"reduce",n,t)},reduceRight(n,...t){return Nf(this,"reduceRight",n,t)},shift(){return Xs(this,"shift")},some(n,t){return di(this,"some",n,t,void 0,arguments)},splice(...n){return Xs(this,"splice",n)},toReversed(){return Zr(this).toReversed()},toSorted(n){return Zr(this).toSorted(n)},toSpliced(...n){return Zr(this).toSpliced(...n)},unshift(...n){return Xs(this,"unshift",n)},values(){return yl(this,"values",n=>ti(this,n))}};function yl(n,t,e){const i=il(n),r=i[t]();return i!==n&&!Fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Q_=Array.prototype;function di(n,t,e,i,r,s){const o=il(n),a=o!==n&&!Fn(n),l=o[t];if(l!==Q_[t]){const f=l.apply(n,s);return a?Yn(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,ti(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Nf(n,t,e,i){const r=il(n),s=r!==n&&!Fn(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ti(n,c)),e.call(this,c,ti(n,u),f,n)}):e.length>3&&(o=function(c,u,f){return e.call(this,c,u,f,n)}));const l=r[t](o,...i);return a?ti(n,l):l}function El(n,t,e){const i=Qt(n);Ge(i,"iterate",xo);const r=i[t](...e);return(r===-1||r===!1)&&Wu(e[0])?(e[0]=Qt(e[0]),i[t](...e)):r}function Xs(n,t,e=[]){Ii(),Ou();const i=Qt(n)[t].apply(n,e);return Bu(),Ui(),i}const tg=Lu("__proto__,__v_isRef,__isVue"),np=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function eg(n){li(n)||(n=String(n));const t=Qt(this);return Ge(t,"has",n),t.hasOwnProperty(n)}class ip{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?fg:ap:s?op:sp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ut(t);if(!r){let l;if(o&&(l=J_[e]))return l;if(e==="hasOwnProperty")return eg}const a=Reflect.get(t,e,Ye(t)?t:i);if((li(e)?np.has(e):tg(e))||(r||Ge(t,"get",e),s))return a;if(Ye(a)){const l=o&&Uu(e)?a:a.value;return r&&ie(l)?Sc(l):l}return ie(a)?r?Sc(a):Vu(a):a}}class rp extends ip{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Ut(t)&&Uu(e);if(!this._isShallow){const c=Ni(s);if(!Fn(i)&&!Ni(i)&&(s=Qt(s),i=Qt(i)),!o&&Ye(s)&&!Ye(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:ne(t,e),l=Reflect.set(t,e,i,Ye(t)?t:r);return t===Qt(r)&&(a?ii(i,s)&&wi(t,"set",e,i):wi(t,"add",e,i)),l}deleteProperty(t,e){const i=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&wi(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!li(e)||!np.has(e))&&Ge(t,"has",e),i}ownKeys(t){return Ge(t,"iterate",Ut(t)?"length":Br),Reflect.ownKeys(t)}}class ng extends ip{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ig=new rp,rg=new ng,sg=new rp(!0);const xc=n=>n,qo=n=>Reflect.getPrototypeOf(n);function og(n,t,e){return function(...i){const r=this.__v_raw,s=Qt(r),o=xs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?xc:t?Rs:Yn;return!t&&Ge(s,"iterate",l?vc:Br),Fe(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Yo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function ag(n,t){const e={get(r){const s=this.__v_raw,o=Qt(s),a=Qt(r);n||(ii(r,a)&&Ge(o,"get",r),Ge(o,"get",a));const{has:l}=qo(o),c=t?xc:n?Rs:Yn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ge(Qt(r),"iterate",Br),r.size},has(r){const s=this.__v_raw,o=Qt(s),a=Qt(r);return n||(ii(r,a)&&Ge(o,"has",r),Ge(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qt(a),c=t?xc:n?Rs:Yn;return!n&&Ge(l,"iterate",Br),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Fe(e,n?{add:Yo("add"),set:Yo("set"),delete:Yo("delete"),clear:Yo("clear")}:{add(r){const s=Qt(this),o=qo(s),a=Qt(r),l=!t&&!Fn(r)&&!Ni(r)?a:r;return o.has.call(s,l)||ii(r,l)&&o.has.call(s,r)||ii(a,l)&&o.has.call(s,a)||(s.add(l),wi(s,"add",l,l)),this},set(r,s){!t&&!Fn(s)&&!Ni(s)&&(s=Qt(s));const o=Qt(this),{has:a,get:l}=qo(o);let c=a.call(o,r);c||(r=Qt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ii(s,u)&&wi(o,"set",r,s):wi(o,"add",r,s),this},delete(r){const s=Qt(this),{has:o,get:a}=qo(s);let l=o.call(s,r);l||(r=Qt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&wi(s,"delete",r,void 0),c},clear(){const r=Qt(this),s=r.size!==0,o=r.clear();return s&&wi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=og(r,n,t)}),e}function Hu(n,t){const e=ag(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ne(e,r)&&r in i?e:i,r,s)}const lg={get:Hu(!1,!1)},cg={get:Hu(!1,!0)},ug={get:Hu(!0,!1)};const sp=new WeakMap,op=new WeakMap,ap=new WeakMap,fg=new WeakMap;function hg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dg(n){return n.__v_skip||!Object.isExtensible(n)?0:hg(O_(n))}function Vu(n){return Ni(n)?n:Gu(n,!1,ig,lg,sp)}function pg(n){return Gu(n,!1,sg,cg,op)}function Sc(n){return Gu(n,!0,rg,ug,ap)}function Gu(n,t,e,i,r){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=dg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function zr(n){return Ni(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ni(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function Wu(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function mg(n){return!ne(n,"__v_skip")&&Object.isExtensible(n)&&Wd(n,"__v_skip",!0),n}const Yn=n=>ie(n)?Vu(n):n,Rs=n=>ie(n)?Sc(n):n;function Ye(n){return n?n.__v_isRef===!0:!1}function me(n){return _g(n,!1)}function _g(n,t){return Ye(n)?n:new gg(n,t)}class gg{constructor(t,e){this.dep=new ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:Yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Fn(t)||Ni(t);t=i?t:Qt(t),ii(t,e)&&(this._rawValue=t,this._value=i?t:Yn(t),this.dep.trigger())}}function Ei(n){return Ye(n)?n.value:n}const vg={get:(n,t,e)=>t==="__v_raw"?n:Ei(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ye(r)&&!Ye(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function lp(n){return zr(n)?n:new Proxy(n,vg)}class xg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Kd(this,!0),!0}get value(){const t=this.dep.track();return Qd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sg(n,t,e=!1){let i,r;return Ht(n)?i=n:(i=n.get,r=n.set),new xg(i,r,e)}const $o={},Na=new WeakMap;let Rr;function Mg(n,t=!1,e=Rr){if(e){let i=Na.get(e);i||Na.set(e,i=[]),i.push(n)}}function yg(n,t,e=ue){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=v=>r?v:Fn(v)||r===!1||r===0?Ai(v,1):Ai(v);let u,f,h,d,g=!1,_=!1;if(Ye(n)?(f=()=>n.value,g=Fn(n)):zr(n)?(f=()=>c(n),g=!0):Ut(n)?(_=!0,g=n.some(v=>zr(v)||Fn(v)),f=()=>n.map(v=>{if(Ye(v))return v.value;if(zr(v))return c(v);if(Ht(v))return l?l(v,2):v()})):Ht(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Ii();try{h()}finally{Ui()}}const v=Rr;Rr=u;try{return l?l(n,3,[d]):n(d)}finally{Rr=v}}:f=ai,t&&r){const v=f,R=r===!0?1/0:r;f=()=>Ai(v(),R)}const m=j_(),p=()=>{u.stop(),m&&m.active&&Iu(m.effects,u)};if(s&&t){const v=t;t=(...R)=>{v(...R),p()}}let y=_?new Array(n.length).fill($o):$o;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const R=u.run();if(r||g||(_?R.some((C,A)=>ii(C,y[A])):ii(R,y))){h&&h();const C=Rr;Rr=u;try{const A=[R,y===$o?void 0:_&&y[0]===$o?[]:y,d];y=R,l?l(t,3,A):t(...A)}finally{Rr=C}}}else u.run()};return a&&a(E),u=new $d(f),u.scheduler=o?()=>o(E,!1):E,d=v=>Mg(v,!1,u),h=u.onStop=()=>{const v=Na.get(u);if(v){if(l)l(v,4);else for(const R of v)R();Na.delete(u)}},t?i?E(!0):y=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ai(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ye(n))Ai(n.value,t,e);else if(Ut(n))for(let i=0;i<n.length;i++)Ai(n[i],t,e);else if(kd(n)||xs(n))n.forEach(i=>{Ai(i,t,e)});else if(Gd(n)){for(const i in n)Ai(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ai(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function No(n,t,e,i){try{return i?n(...i):n()}catch(r){rl(r,t,e)}}function $n(n,t,e,i){if(Ht(n)){const r=No(n,t,e,i);return r&&Hd(r)&&r.catch(s=>{rl(s,t,e)}),r}if(Ut(n)){const r=[];for(let s=0;s<n.length;s++)r.push($n(n[s],t,e,i));return r}}function rl(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Ii(),No(s,null,10,[n,l,c]),Ui();return}}Eg(n,e,r,i,o)}function Eg(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Ze=[];let Zn=-1;const Ss=[];let Qi=null,ds=0;const cp=Promise.resolve();let Fa=null;function up(n){const t=Fa||cp;return n?t.then(this?n.bind(this):n):t}function bg(n){let t=Zn+1,e=Ze.length;for(;t<e;){const i=t+e>>>1,r=Ze[i],s=So(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Xu(n){if(!(n.flags&1)){const t=So(n),e=Ze[Ze.length-1];!e||!(n.flags&2)&&t>=So(e)?Ze.push(n):Ze.splice(bg(t),0,n),n.flags|=1,fp()}}function fp(){Fa||(Fa=cp.then(dp))}function Tg(n){Ut(n)?Ss.push(...n):Qi&&n.id===-1?Qi.splice(ds+1,0,n):n.flags&1||(Ss.push(n),n.flags|=1),fp()}function Ff(n,t,e=Zn+1){for(;e<Ze.length;e++){const i=Ze[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ze.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hp(n){if(Ss.length){const t=[...new Set(Ss)].sort((e,i)=>So(e)-So(i));if(Ss.length=0,Qi){Qi.push(...t);return}for(Qi=t,ds=0;ds<Qi.length;ds++){const e=Qi[ds];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Qi=null,ds=0}}const So=n=>n.id==null?n.flags&2?-1:1/0:n.id;function dp(n){try{for(Zn=0;Zn<Ze.length;Zn++){const t=Ze[Zn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),No(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Zn<Ze.length;Zn++){const t=Ze[Zn];t&&(t.flags&=-2)}Zn=-1,Ze.length=0,hp(),Fa=null,(Ze.length||Ss.length)&&dp()}}let Mn=null,pp=null;function Oa(n){const t=Mn;return Mn=n,pp=n&&n.type.__scopeId||null,t}function mp(n,t=Mn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ka(-1);const s=Oa(t);let o;try{o=n(...r)}finally{Oa(s),i._d&&ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jo(n,t){if(Mn===null)return n;const e=cl(Mn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=ue]=t[r];s&&(Ht(s)&&(s={mounted:s,updated:s}),s.deep&&Ai(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function mr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ii(),$n(l,e,8,[n.el,a,n,t]),Ui())}}function wg(n,t){if(We){let e=We.provides;const i=We.parent&&We.parent.provides;i===e&&(e=We.provides=Object.create(i)),e[n]=t}}function Ea(n,t,e=!1){const i=$p();if(i||Ms){let r=Ms?Ms._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const Ag=Symbol.for("v-scx"),Rg=()=>Ea(Ag);function bl(n,t,e){return _p(n,t,e)}function _p(n,t,e=ue){const{immediate:i,deep:r,flush:s,once:o}=e,a=Fe({},e),l=t&&i||!t&&s!=="post";let c;if(Eo){if(s==="sync"){const d=Rg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ai,d.resume=ai,d.pause=ai,d}}const u=We;a.call=(d,g,_)=>$n(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Xu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=yg(n,t,a);return Eo&&(c?c.push(h):l&&h()),h}function Cg(n,t,e){const i=this.proxy,r=Me(n)?n.includes(".")?gp(i,n):()=>i[n]:n.bind(i,i);let s;Ht(t)?s=t:(s=t.handler,e=t);const o=Fo(this),a=_p(r,s.bind(i),e);return o(),a}function gp(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Pg=Symbol("_vte"),vp=n=>n.__isTeleport,Jn=Symbol("_leaveCb"),qs=Symbol("_enterCb");function Dg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ui(()=>{n.isMounted=!0}),wp(()=>{n.isUnmounting=!0}),n}const Cn=[Function,Array],xp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Cn,onEnter:Cn,onAfterEnter:Cn,onEnterCancelled:Cn,onBeforeLeave:Cn,onLeave:Cn,onAfterLeave:Cn,onLeaveCancelled:Cn,onBeforeAppear:Cn,onAppear:Cn,onAfterAppear:Cn,onAppearCancelled:Cn},Sp=n=>{const t=n.subTree;return t.component?Sp(t.component):t},Lg={name:"BaseTransition",props:xp,setup(n,{slots:t}){const e=$p(),i=Dg();return()=>{const r=t.default&&Ep(t.default(),!0),s=r&&r.length?Mp(r):e.subTree?ju():void 0;if(!s)return;const o=Qt(n),{mode:a}=o;if(i.isLeaving)return Tl(s);const l=Of(s);if(!l)return Tl(s);let c=Mc(l,o,i,e,f=>c=f);l.type!==Je&&Mo(l,c);let u=e.subTree&&Of(e.subTree);if(u&&u.type!==Je&&!Lr(u,l)&&Sp(e).type!==Je){let f=Mc(u,o,i,e);if(Mo(u,f),a==="out-in"&&l.type!==Je)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Tl(s);a==="in-out"&&l.type!==Je?f.delayLeave=(h,d,g)=>{const _=yp(i,u);_[String(u.key)]=u,h[Jn]=()=>{d(),h[Jn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Mp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Je){t=e;break}}return t}const Ig=Lg;function yp(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Mc(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:E}=t,v=String(n.key),R=yp(e,n),C=(S,M)=>{S&&$n(S,i,9,M)},A=(S,M)=>{const L=M[1];C(S,M),Ut(S)?S.every(N=>N.length<=1)&&L():S.length<=1&&L()},D={mode:o,persisted:a,beforeEnter(S){let M=l;if(!e.isMounted)if(s)M=m||l;else return;S[Jn]&&S[Jn](!0);const L=R[v];L&&Lr(n,L)&&L.el[Jn]&&L.el[Jn](),C(M,[S])},enter(S){if(R[v]===n)return;let M=c,L=u,N=f;if(!e.isMounted)if(s)M=p||c,L=y||u,N=E||f;else return;let F=!1;S[qs]=V=>{F||(F=!0,V?C(N,[S]):C(L,[S]),D.delayedLeave&&D.delayedLeave(),S[qs]=void 0)};const $=S[qs].bind(null,!1);M?A(M,[S,$]):$()},leave(S,M){const L=String(n.key);if(S[qs]&&S[qs](!0),e.isUnmounting)return M();C(h,[S]);let N=!1;S[Jn]=$=>{N||(N=!0,M(),$?C(_,[S]):C(g,[S]),S[Jn]=void 0,R[L]===n&&delete R[L])};const F=S[Jn].bind(null,!1);R[L]=n,d?A(d,[S,F]):F()},clone(S){const M=Mc(S,t,e,i,r);return r&&r(M),M}};return D}function Tl(n){if(sl(n))return n=lr(n),n.children=null,n}function Of(n){if(!sl(n))return vp(n.type)&&n.children?Mp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Ht(e.default))return e.default()}}function Mo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Mo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Ep(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===ve?(o.patchFlag&128&&r++,i=i.concat(Ep(o.children,t,a))):(t||o.type!==Je)&&i.push(a!=null?lr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function bp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Bf(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ba=new WeakMap;function co(n,t,e,i,r=!1){if(Ut(n)){n.forEach((_,m)=>co(_,t&&(Ut(t)?t[m]:t),e,i,r));return}if(uo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&co(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?cl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ue?a.refs={}:a.refs,f=a.setupState,h=Qt(f),d=f===ue?zd:_=>Bf(u,_)?!1:ne(h,_),g=(_,m)=>!(m&&Bf(u,m));if(c!=null&&c!==l){if(zf(t),Me(c))u[c]=null,d(c)&&(f[c]=null);else if(Ye(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ht(l))No(l,a,12,[o,u]);else{const _=Me(l),m=Ye(l);if(_||m){const p=()=>{if(n.f){const y=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Ut(y)&&Iu(y,s);else if(Ut(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const E=[s];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{p(),Ba.delete(n)};y.id=-1,Ba.set(n,y),nn(y,e)}else zf(n),p()}}}function zf(n){const t=Ba.get(n);t&&(t.flags|=8,Ba.delete(n))}nl().requestIdleCallback;nl().cancelIdleCallback;const uo=n=>!!n.type.__asyncLoader,sl=n=>n.type.__isKeepAlive;function Ug(n,t){Tp(n,"a",t)}function Ng(n,t){Tp(n,"da",t)}function Tp(n,t,e=We){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ol(t,i,e),e){let r=e.parent;for(;r&&r.parent;)sl(r.parent.vnode)&&Fg(i,t,e,r),r=r.parent}}function Fg(n,t,e,i){const r=ol(t,n,i,!0);$r(()=>{Iu(i[t],r)},e)}function ol(n,t,e=We,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Ii();const a=Fo(e),l=$n(t,e,n,o);return a(),Ui(),l});return i?r.unshift(s):r.push(s),s}}const Hi=n=>(t,e=We)=>{(!Eo||n==="sp")&&ol(n,(...i)=>t(...i),e)},Og=Hi("bm"),ui=Hi("m"),Bg=Hi("bu"),zg=Hi("u"),wp=Hi("bum"),$r=Hi("um"),kg=Hi("sp"),Hg=Hi("rtg"),Vg=Hi("rtc");function Gg(n,t=We){ol("ec",n,t)}const Wg="components",Ap=Symbol.for("v-ndc");function Rp(n){return Me(n)?Xg(Wg,n,!1)||n:n||Ap}function Xg(n,t,e=!0,i=!1){const r=Mn||We;if(r){const s=r.type;{const a=P0(s,!1);if(a&&(a===t||a===Qe(t)||a===el(Qe(t))))return s}const o=kf(r[n]||s[n],t)||kf(r.appContext[n],t);return!o&&i?s:o}}function kf(n,t){return n&&(n[t]||n[Qe(t)]||n[el(Qe(t))])}function pn(n,t,e,i){let r;const s=e,o=Ut(n);if(o||Me(n)){const a=o&&zr(n);let l=!1,c=!1;a&&(l=!Fn(n),c=Ni(n),n=il(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?Rs(Yn(n[u])):Yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ie(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const yc=n=>n?jp(n)?cl(n):yc(n.parent):null,fo=Fe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yc(n.parent),$root:n=>yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pp(n),$forceUpdate:n=>n.f||(n.f=()=>{Xu(n.update)}),$nextTick:n=>n.n||(n.n=up.bind(n.proxy)),$watch:n=>Cg.bind(n)}),wl=(n,t)=>n!==ue&&!n.__isScriptSetup&&ne(n,t),qg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(wl(i,t))return o[t]=1,i[t];if(r!==ue&&ne(r,t))return o[t]=2,r[t];if(ne(s,t))return o[t]=3,s[t];if(e!==ue&&ne(e,t))return o[t]=4,e[t];Ec&&(o[t]=0)}}const c=fo[t];let u,f;if(c)return t==="$attrs"&&Ge(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ue&&ne(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ne(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return wl(r,t)?(r[t]=e,!0):i!==ue&&ne(i,t)?(i[t]=e,!0):ne(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==ue&&a[0]!=="$"&&ne(n,a)||wl(t,a)||ne(s,a)||ne(i,a)||ne(fo,a)||ne(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ne(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Hf(n){return Ut(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ec=!0;function Yg(n){const t=Pp(n),e=n.proxy,i=n.ctx;Ec=!1,t.beforeCreate&&Vf(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:v,render:R,renderTracked:C,renderTriggered:A,errorCaptured:D,serverPrefetch:S,expose:M,inheritAttrs:L,components:N,directives:F,filters:$}=t;if(c&&$g(c,i,null),o)for(const X in o){const k=o[X];Ht(k)&&(i[X]=k.bind(e))}if(r){const X=r.call(e,e);ie(X)&&(n.data=Vu(X))}if(Ec=!0,s)for(const X in s){const k=s[X],ut=Ht(k)?k.bind(e,e):Ht(k.get)?k.get.bind(e,e):ai,_t=!Ht(k)&&Ht(k.set)?k.set.bind(e):ai,Et=L0({get:ut,set:_t});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ct=>Et.value=Ct})}if(a)for(const X in a)Cp(a[X],i,e,X);if(l){const X=Ht(l)?l.call(e):l;Reflect.ownKeys(X).forEach(k=>{wg(k,X[k])})}u&&Vf(u,n,"c");function H(X,k){Ut(k)?k.forEach(ut=>X(ut.bind(e))):k&&X(k.bind(e))}if(H(Og,f),H(ui,h),H(Bg,d),H(zg,g),H(Ug,_),H(Ng,m),H(Gg,D),H(Vg,C),H(Hg,A),H(wp,y),H($r,v),H(kg,S),Ut(M))if(M.length){const X=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(X,k,{get:()=>e[k],set:ut=>e[k]=ut,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ai&&(n.render=R),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),F&&(n.directives=F),S&&bp(n)}function $g(n,t,e=ai){Ut(n)&&(n=bc(n));for(const i in n){const r=n[i];let s;ie(r)?"default"in r?s=Ea(r.from||i,r.default,!0):s=Ea(r.from||i):s=Ea(r),Ye(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Vf(n,t,e){$n(Ut(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Cp(n,t,e,i){let r=i.includes(".")?gp(e,i):()=>e[i];if(Me(n)){const s=t[n];Ht(s)&&bl(r,s)}else if(Ht(n))bl(r,n.bind(e));else if(ie(n))if(Ut(n))n.forEach(s=>Cp(s,t,e,i));else{const s=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(s)&&bl(r,s,n)}}function Pp(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>za(l,c,o,!0)),za(l,t,o)),ie(t)&&s.set(t,l),l}function za(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&za(n,s,e,!0),r&&r.forEach(o=>za(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=jg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const jg={data:Gf,props:Wf,emits:Wf,methods:to,computed:to,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:to,directives:to,watch:Zg,provide:Gf,inject:Kg};function Gf(n,t){return t?n?function(){return Fe(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function Kg(n,t){return to(bc(n),bc(t))}function bc(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function je(n,t){return n?[...new Set([].concat(n,t))]:t}function to(n,t){return n?Fe(Object.create(null),n,t):t}function Wf(n,t){return n?Ut(n)&&Ut(t)?[...new Set([...n,...t])]:Fe(Object.create(null),Hf(n),Hf(t??{})):t}function Zg(n,t){if(!n)return t;if(!t)return n;const e=Fe(Object.create(null),n);for(const i in t)e[i]=je(n[i],t[i]);return e}function Dp(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jg=0;function Qg(n,t){return function(i,r=null){Ht(i)||(i=Fe({},i)),r!=null&&!ie(r)&&(r=null);const s=Dp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Jg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:I0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ht(u.install)?(o.add(u),u.install(c,...f)):Ht(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ae(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,cl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&($n(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ms;Ms=c;try{return u()}finally{Ms=f}}};return c}}let Ms=null;const t0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${Yr(t)}Modifiers`];function e0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ue;let r=e;const s=t.startsWith("update:"),o=s&&t0(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>Me(u)?u.trim():u)),o.number&&(r=e.map(Nu)));let a,l=i[a=xl(t)]||i[a=xl(Qe(t))];!l&&s&&(l=i[a=xl(Yr(t))]),l&&$n(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$n(c,n,6,r)}}const n0=new WeakMap;function Lp(n,t,e=!1){const i=e?n0:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ht(n)){const l=c=>{const u=Lp(c,t,!0);u&&(a=!0,Fe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ie(n)&&i.set(n,null),null):(Ut(s)?s.forEach(l=>o[l]=null):Fe(o,s),ie(n)&&i.set(n,o),o)}function al(n,t){return!n||!Ja(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(n,t[0].toLowerCase()+t.slice(1))||ne(n,Yr(t))||ne(n,t))}function Xf(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Oa(n);let p,y;try{if(e.shapeFlag&4){const v=r||i,R=v;p=ei(c.call(R,v,u,f,d,h,g)),y=a}else{const v=t;p=ei(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=t.props?a:i0(a)}}catch(v){ho.length=0,rl(v,n,1),p=ae(Je)}let E=p;if(y&&_!==!1){const v=Object.keys(y),{shapeFlag:R}=E;v.length&&R&7&&(s&&v.some(Qa)&&(y=r0(y,s)),E=lr(E,y,!1,!0))}return e.dirs&&(E=lr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&Mo(E,e.transition),p=E,Oa(m),p}const i0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ja(e))&&((t||(t={}))[e]=n[e]);return t},r0=(n,t)=>{const e={};for(const i in n)(!Qa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function s0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?qf(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Ip(o,i,h)&&!al(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qf(i,o,c):!0:!!o;return!1}function qf(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Ip(t,n,s)&&!al(e,s))return!0}return!1}function Ip(n,t,e){const i=n[e],r=t[e];return e==="style"&&ie(i)&&ie(r)?!Fu(i,r):i!==r}function o0({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Up={},Np=()=>Object.create(Up),Fp=n=>Object.getPrototypeOf(n)===Up;function a0(n,t,e,i=!1){const r={},s=Np();n.propsDefaults=Object.create(null),Op(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:pg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function l0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(al(n.emitsOptions,h))continue;const d=t[h];if(l)if(ne(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Qe(h);r[g]=Tc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Op(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!ne(t,f)&&((u=Yr(f))===f||!ne(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Tc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ne(t,f))&&(delete s[f],c=!0)}c&&wi(n.attrs,"set","")}function Op(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(oo(l))continue;const c=t[l];let u;r&&ne(r,u=Qe(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:al(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qt(e),c=a||ue;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Tc(r,l,f,c[f],n,!ne(c,f))}}return o}function Tc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ne(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=Fo(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Yr(e))&&(i=!0))}return i}const c0=new WeakMap;function Bp(n,t,e=!1){const i=e?c0:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ht(n)){const u=f=>{l=!0;const[h,d]=Bp(f,t,!0);Fe(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ie(n)&&i.set(n,vs),vs;if(Ut(s))for(let u=0;u<s.length;u++){const f=Qe(s[u]);Yf(f)&&(o[f]=ue)}else if(s)for(const u in s){const f=Qe(u);if(Yf(f)){const h=s[u],d=o[f]=Ut(h)||Ht(h)?{type:h}:Fe({},h),g=d.type;let _=!1,m=!0;if(Ut(g))for(let p=0;p<g.length;++p){const y=g[p],E=Ht(y)&&y.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Ht(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ne(d,"default"))&&a.push(f)}}const c=[o,a];return ie(n)&&i.set(n,c),c}function Yf(n){return n[0]!=="$"&&!oo(n)}const qu=n=>n==="_"||n==="_ctx"||n==="$stable",Yu=n=>Ut(n)?n.map(ei):[ei(n)],u0=(n,t,e)=>{if(t._n)return t;const i=mp((...r)=>Yu(t(...r)),e);return i._c=!1,i},zp=(n,t,e)=>{const i=n._ctx;for(const r in n){if(qu(r))continue;const s=n[r];if(Ht(s))t[r]=u0(r,s,i);else if(s!=null){const o=Yu(s);t[r]=()=>o}}},kp=(n,t)=>{const e=Yu(t);n.slots.default=()=>e},Hp=(n,t,e)=>{for(const i in t)(e||!qu(i))&&(n[i]=t[i])},f0=(n,t,e)=>{const i=n.slots=Np();if(n.vnode.shapeFlag&32){const r=t._;r?(Hp(i,t,e),e&&Wd(i,"_",r,!0)):zp(t,i)}else t&&kp(n,t)},h0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ue;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Hp(r,t,e):(s=!t.$stable,zp(t,r)),o=t}else t&&(kp(n,t),o={default:1});if(s)for(const a in r)!qu(a)&&o[a]==null&&delete r[a]},nn=g0;function d0(n){return p0(n)}function p0(n,t){const e=nl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ai,insertStaticContent:g}=n,_=(P,U,w,rt=null,J=null,Q=null,it=void 0,ot=null,tt=!!U.dynamicChildren)=>{if(P===U)return;P&&!Lr(P,U)&&(rt=mt(P),Ct(P,J,Q,!0),P=null),U.patchFlag===-2&&(tt=!1,U.dynamicChildren=null);const{type:b,ref:x,shapeFlag:I}=U;switch(b){case ll:m(P,U,w,rt);break;case Je:p(P,U,w,rt);break;case ba:P==null&&y(U,w,rt,it);break;case ve:N(P,U,w,rt,J,Q,it,ot,tt);break;default:I&1?R(P,U,w,rt,J,Q,it,ot,tt):I&6?F(P,U,w,rt,J,Q,it,ot,tt):(I&64||I&128)&&b.process(P,U,w,rt,J,Q,it,ot,tt,zt)}x!=null&&J?co(x,P&&P.ref,Q,U||P,!U):x==null&&P&&P.ref!=null&&co(P.ref,null,Q,P,!0)},m=(P,U,w,rt)=>{if(P==null)i(U.el=a(U.children),w,rt);else{const J=U.el=P.el;U.children!==P.children&&c(J,U.children)}},p=(P,U,w,rt)=>{P==null?i(U.el=l(U.children||""),w,rt):U.el=P.el},y=(P,U,w,rt)=>{[P.el,P.anchor]=g(P.children,U,w,rt,P.el,P.anchor)},E=({el:P,anchor:U},w,rt)=>{let J;for(;P&&P!==U;)J=h(P),i(P,w,rt),P=J;i(U,w,rt)},v=({el:P,anchor:U})=>{let w;for(;P&&P!==U;)w=h(P),r(P),P=w;r(U)},R=(P,U,w,rt,J,Q,it,ot,tt)=>{if(U.type==="svg"?it="svg":U.type==="math"&&(it="mathml"),P==null)C(U,w,rt,J,Q,it,ot,tt);else{const b=P.el&&P.el._isVueCE?P.el:null;try{b&&b._beginPatch(),S(P,U,J,Q,it,ot,tt)}finally{b&&b._endPatch()}}},C=(P,U,w,rt,J,Q,it,ot)=>{let tt,b;const{props:x,shapeFlag:I,transition:G,dirs:q}=P;if(tt=P.el=o(P.type,Q,x&&x.is,x),I&8?u(tt,P.children):I&16&&D(P.children,tt,null,rt,J,Al(P,Q),it,ot),q&&mr(P,null,rt,"created"),A(tt,P,P.scopeId,it,rt),x){for(const dt in x)dt!=="value"&&!oo(dt)&&s(tt,dt,null,x[dt],Q,rt);"value"in x&&s(tt,"value",null,x.value,Q),(b=x.onVnodeBeforeMount)&&Kn(b,rt,P)}q&&mr(P,null,rt,"beforeMount");const Y=m0(J,G);Y&&G.beforeEnter(tt),i(tt,U,w),((b=x&&x.onVnodeMounted)||Y||q)&&nn(()=>{try{b&&Kn(b,rt,P),Y&&G.enter(tt),q&&mr(P,null,rt,"mounted")}finally{}},J)},A=(P,U,w,rt,J)=>{if(w&&d(P,w),rt)for(let Q=0;Q<rt.length;Q++)d(P,rt[Q]);if(J){let Q=J.subTree;if(U===Q||Xp(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const it=J.vnode;A(P,it,it.scopeId,it.slotScopeIds,J.parent)}}},D=(P,U,w,rt,J,Q,it,ot,tt=0)=>{for(let b=tt;b<P.length;b++){const x=P[b]=ot?bi(P[b]):ei(P[b]);_(null,x,U,w,rt,J,Q,it,ot)}},S=(P,U,w,rt,J,Q,it)=>{const ot=U.el=P.el;let{patchFlag:tt,dynamicChildren:b,dirs:x}=U;tt|=P.patchFlag&16;const I=P.props||ue,G=U.props||ue;let q;if(w&&_r(w,!1),(q=G.onVnodeBeforeUpdate)&&Kn(q,w,U,P),x&&mr(U,P,w,"beforeUpdate"),w&&_r(w,!0),(I.innerHTML&&G.innerHTML==null||I.textContent&&G.textContent==null)&&u(ot,""),b?M(P.dynamicChildren,b,ot,w,rt,Al(U,J),Q):it||k(P,U,ot,null,w,rt,Al(U,J),Q,!1),tt>0){if(tt&16)L(ot,I,G,w,J);else if(tt&2&&I.class!==G.class&&s(ot,"class",null,G.class,J),tt&4&&s(ot,"style",I.style,G.style,J),tt&8){const Y=U.dynamicProps;for(let dt=0;dt<Y.length;dt++){const at=Y[dt],ft=I[at],It=G[at];(It!==ft||at==="value")&&s(ot,at,ft,It,J,w)}}tt&1&&P.children!==U.children&&u(ot,U.children)}else!it&&b==null&&L(ot,I,G,w,J);((q=G.onVnodeUpdated)||x)&&nn(()=>{q&&Kn(q,w,U,P),x&&mr(U,P,w,"updated")},rt)},M=(P,U,w,rt,J,Q,it)=>{for(let ot=0;ot<U.length;ot++){const tt=P[ot],b=U[ot],x=tt.el&&(tt.type===ve||!Lr(tt,b)||tt.shapeFlag&198)?f(tt.el):w;_(tt,b,x,null,rt,J,Q,it,!0)}},L=(P,U,w,rt,J)=>{if(U!==w){if(U!==ue)for(const Q in U)!oo(Q)&&!(Q in w)&&s(P,Q,U[Q],null,J,rt);for(const Q in w){if(oo(Q))continue;const it=w[Q],ot=U[Q];it!==ot&&Q!=="value"&&s(P,Q,ot,it,J,rt)}"value"in w&&s(P,"value",U.value,w.value,J)}},N=(P,U,w,rt,J,Q,it,ot,tt)=>{const b=U.el=P?P.el:a(""),x=U.anchor=P?P.anchor:a("");let{patchFlag:I,dynamicChildren:G,slotScopeIds:q}=U;q&&(ot=ot?ot.concat(q):q),P==null?(i(b,w,rt),i(x,w,rt),D(U.children||[],w,x,J,Q,it,ot,tt)):I>0&&I&64&&G&&P.dynamicChildren&&P.dynamicChildren.length===G.length?(M(P.dynamicChildren,G,w,J,Q,it,ot),(U.key!=null||J&&U===J.subTree)&&Vp(P,U,!0)):k(P,U,w,x,J,Q,it,ot,tt)},F=(P,U,w,rt,J,Q,it,ot,tt)=>{U.slotScopeIds=ot,P==null?U.shapeFlag&512?J.ctx.activate(U,w,rt,it,tt):$(U,w,rt,J,Q,it,tt):V(P,U,tt)},$=(P,U,w,rt,J,Q,it)=>{const ot=P.component=T0(P,rt,J);if(sl(P)&&(ot.ctx.renderer=zt),w0(ot,!1,it),ot.asyncDep){if(J&&J.registerDep(ot,H,it),!P.el){const tt=ot.subTree=ae(Je);p(null,tt,U,w),P.placeholder=tt.el}}else H(ot,P,U,w,J,Q,it)},V=(P,U,w)=>{const rt=U.component=P.component;if(s0(P,U,w))if(rt.asyncDep&&!rt.asyncResolved){X(rt,U,w);return}else rt.next=U,rt.update();else U.el=P.el,rt.vnode=U},H=(P,U,w,rt,J,Q,it)=>{const ot=()=>{if(P.isMounted){let{next:I,bu:G,u:q,parent:Y,vnode:dt}=P;{const vt=Gp(P);if(vt){I&&(I.el=dt.el,X(P,I,it)),vt.asyncDep.then(()=>{nn(()=>{P.isUnmounted||b()},J)});return}}let at=I,ft;_r(P,!1),I?(I.el=dt.el,X(P,I,it)):I=dt,G&&ya(G),(ft=I.props&&I.props.onVnodeBeforeUpdate)&&Kn(ft,Y,I,dt),_r(P,!0);const It=Xf(P),lt=P.subTree;P.subTree=It,_(lt,It,f(lt.el),mt(lt),P,J,Q),I.el=It.el,at===null&&o0(P,It.el),q&&nn(q,J),(ft=I.props&&I.props.onVnodeUpdated)&&nn(()=>Kn(ft,Y,I,dt),J)}else{let I;const{el:G,props:q}=U,{bm:Y,m:dt,parent:at,root:ft,type:It}=P,lt=uo(U);_r(P,!1),Y&&ya(Y),!lt&&(I=q&&q.onVnodeBeforeMount)&&Kn(I,at,U),_r(P,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(It,P.parent?P.parent.type:void 0);const vt=P.subTree=Xf(P);_(null,vt,w,rt,P,J,Q),U.el=vt.el}if(dt&&nn(dt,J),!lt&&(I=q&&q.onVnodeMounted)){const vt=U;nn(()=>Kn(I,at,vt),J)}(U.shapeFlag&256||at&&uo(at.vnode)&&at.vnode.shapeFlag&256)&&P.a&&nn(P.a,J),P.isMounted=!0,U=w=rt=null}};P.scope.on();const tt=P.effect=new $d(ot);P.scope.off();const b=P.update=tt.run.bind(tt),x=P.job=tt.runIfDirty.bind(tt);x.i=P,x.id=P.uid,tt.scheduler=()=>Xu(x),_r(P,!0),b()},X=(P,U,w)=>{U.component=P;const rt=P.vnode.props;P.vnode=U,P.next=null,l0(P,U.props,rt,w),h0(P,U.children,w),Ii(),Ff(P),Ui()},k=(P,U,w,rt,J,Q,it,ot,tt=!1)=>{const b=P&&P.children,x=P?P.shapeFlag:0,I=U.children,{patchFlag:G,shapeFlag:q}=U;if(G>0){if(G&128){_t(b,I,w,rt,J,Q,it,ot,tt);return}else if(G&256){ut(b,I,w,rt,J,Q,it,ot,tt);return}}q&8?(x&16&&bt(b,J,Q),I!==b&&u(w,I)):x&16?q&16?_t(b,I,w,rt,J,Q,it,ot,tt):bt(b,J,Q,!0):(x&8&&u(w,""),q&16&&D(I,w,rt,J,Q,it,ot,tt))},ut=(P,U,w,rt,J,Q,it,ot,tt)=>{P=P||vs,U=U||vs;const b=P.length,x=U.length,I=Math.min(b,x);let G;for(G=0;G<I;G++){const q=U[G]=tt?bi(U[G]):ei(U[G]);_(P[G],q,w,null,J,Q,it,ot,tt)}b>x?bt(P,J,Q,!0,!1,I):D(U,w,rt,J,Q,it,ot,tt,I)},_t=(P,U,w,rt,J,Q,it,ot,tt)=>{let b=0;const x=U.length;let I=P.length-1,G=x-1;for(;b<=I&&b<=G;){const q=P[b],Y=U[b]=tt?bi(U[b]):ei(U[b]);if(Lr(q,Y))_(q,Y,w,null,J,Q,it,ot,tt);else break;b++}for(;b<=I&&b<=G;){const q=P[I],Y=U[G]=tt?bi(U[G]):ei(U[G]);if(Lr(q,Y))_(q,Y,w,null,J,Q,it,ot,tt);else break;I--,G--}if(b>I){if(b<=G){const q=G+1,Y=q<x?U[q].el:rt;for(;b<=G;)_(null,U[b]=tt?bi(U[b]):ei(U[b]),w,Y,J,Q,it,ot,tt),b++}}else if(b>G)for(;b<=I;)Ct(P[b],J,Q,!0),b++;else{const q=b,Y=b,dt=new Map;for(b=Y;b<=G;b++){const pt=U[b]=tt?bi(U[b]):ei(U[b]);pt.key!=null&&dt.set(pt.key,b)}let at,ft=0;const It=G-Y+1;let lt=!1,vt=0;const Dt=new Array(It);for(b=0;b<It;b++)Dt[b]=0;for(b=q;b<=I;b++){const pt=P[b];if(ft>=It){Ct(pt,J,Q,!0);continue}let Ot;if(pt.key!=null)Ot=dt.get(pt.key);else for(at=Y;at<=G;at++)if(Dt[at-Y]===0&&Lr(pt,U[at])){Ot=at;break}Ot===void 0?Ct(pt,J,Q,!0):(Dt[Ot-Y]=b+1,Ot>=vt?vt=Ot:lt=!0,_(pt,U[Ot],w,null,J,Q,it,ot,tt),ft++)}const Nt=lt?_0(Dt):vs;for(at=Nt.length-1,b=It-1;b>=0;b--){const pt=Y+b,Ot=U[pt],kt=U[pt+1],re=pt+1<x?kt.el||Wp(kt):rt;Dt[b]===0?_(null,Ot,w,re,J,Q,it,ot,tt):lt&&(at<0||b!==Nt[at]?Et(Ot,w,re,2):at--)}}},Et=(P,U,w,rt,J=null)=>{const{el:Q,type:it,transition:ot,children:tt,shapeFlag:b}=P;if(b&6){Et(P.component.subTree,U,w,rt);return}if(b&128){P.suspense.move(U,w,rt);return}if(b&64){it.move(P,U,w,zt);return}if(it===ve){i(Q,U,w);for(let I=0;I<tt.length;I++)Et(tt[I],U,w,rt);i(P.anchor,U,w);return}if(it===ba){E(P,U,w);return}if(rt!==2&&b&1&&ot)if(rt===0)ot.beforeEnter(Q),i(Q,U,w),nn(()=>ot.enter(Q),J);else{const{leave:I,delayLeave:G,afterLeave:q}=ot,Y=()=>{P.ctx.isUnmounted?r(Q):i(Q,U,w)},dt=()=>{Q._isLeaving&&Q[Jn](!0),I(Q,()=>{Y(),q&&q()})};G?G(Q,Y,dt):dt()}else i(Q,U,w)},Ct=(P,U,w,rt=!1,J=!1)=>{const{type:Q,props:it,ref:ot,children:tt,dynamicChildren:b,shapeFlag:x,patchFlag:I,dirs:G,cacheIndex:q,memo:Y}=P;if(I===-2&&(J=!1),ot!=null&&(Ii(),co(ot,null,w,P,!0),Ui()),q!=null&&(U.renderCache[q]=void 0),x&256){U.ctx.deactivate(P);return}const dt=x&1&&G,at=!uo(P);let ft;if(at&&(ft=it&&it.onVnodeBeforeUnmount)&&Kn(ft,U,P),x&6)ct(P.component,w,rt);else{if(x&128){P.suspense.unmount(w,rt);return}dt&&mr(P,null,U,"beforeUnmount"),x&64?P.type.remove(P,U,w,zt,rt):b&&!b.hasOnce&&(Q!==ve||I>0&&I&64)?bt(b,U,w,!1,!0):(Q===ve&&I&384||!J&&x&16)&&bt(tt,U,w),rt&&Kt(P)}const It=Y!=null&&q==null;(at&&(ft=it&&it.onVnodeUnmounted)||dt||It)&&nn(()=>{ft&&Kn(ft,U,P),dt&&mr(P,null,U,"unmounted"),It&&(P.el=null)},w)},Kt=P=>{const{type:U,el:w,anchor:rt,transition:J}=P;if(U===ve){nt(w,rt);return}if(U===ba){v(P);return}const Q=()=>{r(w),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:it,delayLeave:ot}=J,tt=()=>it(w,Q);ot?ot(P.el,Q,tt):tt()}else Q()},nt=(P,U)=>{let w;for(;P!==U;)w=h(P),r(P),P=w;r(U)},ct=(P,U,w)=>{const{bum:rt,scope:J,job:Q,subTree:it,um:ot,m:tt,a:b}=P;$f(tt),$f(b),rt&&ya(rt),J.stop(),Q&&(Q.flags|=8,Ct(it,P,U,w)),ot&&nn(ot,U),nn(()=>{P.isUnmounted=!0},U)},bt=(P,U,w,rt=!1,J=!1,Q=0)=>{for(let it=Q;it<P.length;it++)Ct(P[it],U,w,rt,J)},mt=P=>{if(P.shapeFlag&6)return mt(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const U=h(P.anchor||P.el),w=U&&U[Pg];return w?h(w):U};let Lt=!1;const Ft=(P,U,w)=>{let rt;P==null?U._vnode&&(Ct(U._vnode,null,null,!0),rt=U._vnode.component):_(U._vnode||null,P,U,null,null,null,w),U._vnode=P,Lt||(Lt=!0,Ff(rt),hp(),Lt=!1)},zt={p:_,um:Ct,m:Et,r:Kt,mt:$,mc:D,pc:k,pbc:M,n:mt,o:n};return{render:Ft,hydrate:void 0,createApp:Qg(Ft)}}function Al({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function _r({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function m0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Vp(n,t,e=!1){const i=n.children,r=t.children;if(Ut(i)&&Ut(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bi(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Vp(o,a)),a.type===ll&&(a.patchFlag===-1&&(a=r[s]=bi(a)),a.el=o.el),a.type===Je&&!a.el&&(a.el=o.el)}}function _0(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Gp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gp(t)}function $f(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Wp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Wp(t.subTree):null}const Xp=n=>n.__isSuspense;function g0(n,t){t&&t.pendingBranch?Ut(n)?t.effects.push(...n):t.effects.push(n):Tg(n)}const ve=Symbol.for("v-fgt"),ll=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),ho=[];let yn=null;function qt(n=!1){ho.push(yn=n?null:[])}function v0(){ho.pop(),yn=ho[ho.length-1]||null}let yo=1;function ka(n,t=!1){yo+=n,n<0&&yn&&t&&(yn.hasOnce=!0)}function qp(n){return n.dynamicChildren=yo>0?yn||vs:null,v0(),yo>0&&yn&&yn.push(n),n}function Yt(n,t,e,i,r,s){return qp(W(n,t,e,i,r,s,!0))}function $u(n,t,e,i,r){return qp(ae(n,t,e,i,r,!0))}function Ha(n){return n?n.__v_isVNode===!0:!1}function Lr(n,t){return n.type===t.type&&n.key===t.key}const Yp=({key:n})=>n??null,Ta=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||Ye(n)||Ht(n)?{i:Mn,r:n,k:t,f:!!e}:n:null);function W(n,t=null,e=null,i=0,r=null,s=n===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Yp(t),ref:t&&Ta(t),scopeId:pp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mn};return a?(Ku(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Me(e)?8:16),yo>0&&!o&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const ae=x0;function x0(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Ap)&&(n=Je),Ha(n)){const a=lr(n,t,!0);return e&&Ku(a,e),yo>0&&!s&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(D0(n)&&(n=n.__vccOpts),t){t=S0(t);let{class:a,style:l}=t;a&&!Me(a)&&(t.class=qe(a)),ie(l)&&(Wu(l)&&!Ut(l)&&(l=Fe({},l)),t.style=go(l))}const o=Me(n)?1:Xp(n)?128:vp(n)?64:ie(n)?4:Ht(n)?2:0;return W(n,t,e,i,r,o,s,!0)}function S0(n){return n?Wu(n)||Fp(n)?Fe({},n):n:null}function lr(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?y0(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yp(c),ref:t&&t.ref?e&&s?Ut(s)?s.concat(Ta(t)):[s,Ta(t)]:Ta(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ve?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lr(n.ssContent),ssFallback:n.ssFallback&&lr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Mo(u,l.clone(u)),u}function M0(n=" ",t=0){return ae(ll,null,n,t)}function wc(n,t){const e=ae(ba,null,n);return e.staticCount=t,e}function ju(n="",t=!1){return t?(qt(),$u(Je,null,n)):ae(Je,null,n)}function ei(n){return n==null||typeof n=="boolean"?ae(Je):Ut(n)?ae(ve,null,n.slice()):Ha(n)?bi(n):ae(ll,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lr(n)}function Ku(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Ku(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Fp(t)?t._ctx=Mn:r===3&&Mn&&(Mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:Mn},e=32):(t=String(t),i&64?(e=16,t=[M0(t)]):e=8);n.children=t,n.shapeFlag|=e}function y0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=qe([t.class,i.class]));else if(r==="style")t.style=go([t.style,i.style]);else if(Ja(r)){const s=t[r],o=i[r];o&&s!==o&&!(Ut(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Qa(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function Kn(n,t,e,i=null){$n(n,t,7,[e,i])}const E0=Dp();let b0=0;function T0(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||E0,s={uid:b0++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,r),emitsOptions:Lp(i,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:i.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=e0.bind(null,s),n.ce&&n.ce(s),s}let We=null;const $p=()=>We||Mn;let Va,Ac;{const n=nl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Va=t("__VUE_INSTANCE_SETTERS__",e=>We=e),Ac=t("__VUE_SSR_SETTERS__",e=>Eo=e)}const Fo=n=>{const t=We;return Va(n),n.scope.on(),()=>{n.scope.off(),Va(t)}},jf=()=>{We&&We.scope.off(),Va(null)};function jp(n){return n.vnode.shapeFlag&4}let Eo=!1;function w0(n,t=!1,e=!1){t&&Ac(t);const{props:i,children:r}=n.vnode,s=jp(n);a0(n,i,s,t),f0(n,r,e||t);const o=s?A0(n,t):void 0;return t&&Ac(!1),o}function A0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qg);const{setup:i}=e;if(i){Ii();const r=n.setupContext=i.length>1?C0(n):null,s=Fo(n),o=No(i,n,0,[n.props,r]),a=Hd(o);if(Ui(),s(),(a||n.sp)&&!uo(n)&&bp(n),a){if(o.then(jf,jf),t)return o.then(l=>{Kf(n,l)}).catch(l=>{rl(l,n,0)});n.asyncDep=o}else Kf(n,o)}else Kp(n)}function Kf(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=lp(t)),Kp(n)}function Kp(n,t,e){const i=n.type;n.render||(n.render=i.render||ai);{const r=Fo(n);Ii();try{Yg(n)}finally{Ui(),r()}}}const R0={get(n,t){return Ge(n,"get",""),n[t]}};function C0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,R0),slots:n.slots,emit:n.emit,expose:t}}function cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lp(mg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in fo)return fo[e](n)},has(t,e){return e in t||e in fo}})):n.proxy}function P0(n,t=!0){return Ht(n)?n.displayName||n.name:n.name||t&&n.__name}function D0(n){return Ht(n)&&"__vccOpts"in n}const L0=(n,t)=>Sg(n,t,Eo);function de(n,t,e){try{ka(-1);const i=arguments.length;return i===2?ie(t)&&!Ut(t)?Ha(t)?ae(n,null,[t]):ae(n,t):ae(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ha(e)&&(e=[e]),ae(n,t,e))}finally{ka(1)}}const I0="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Rc=Zf.createPolicy("vue",{createHTML:n=>n})}catch{}const Zp=Rc?n=>Rc.createHTML(n):n=>n,U0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Jf=Mi&&Mi.createElement("template"),F0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Mi.createElementNS(U0,n):t==="mathml"?Mi.createElementNS(N0,n):e?Mi.createElement(n,{is:e}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Jf.innerHTML=Zp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Jf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Xi="transition",Ys="animation",bo=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},O0=Fe({},xp,Jp),B0=n=>(n.displayName="Transition",n.props=O0,n),z0=B0((n,{slots:t})=>de(Ig,k0(n),t)),gr=(n,t=[])=>{Ut(n)?n.forEach(e=>e(...t)):n&&n(...t)},Qf=n=>n?Ut(n)?n.some(t=>t.length>1):n.length>1:!1;function k0(n){const t={};for(const N in n)N in Jp||(t[N]=n[N]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=H0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:E,onLeave:v,onLeaveCancelled:R,onBeforeAppear:C=p,onAppear:A=y,onAppearCancelled:D=E}=t,S=(N,F,$,V)=>{N._enterCancelled=V,vr(N,F?u:a),vr(N,F?c:o),$&&$()},M=(N,F)=>{N._isLeaving=!1,vr(N,f),vr(N,d),vr(N,h),F&&F()},L=N=>(F,$)=>{const V=N?A:y,H=()=>S(F,N,$);gr(V,[F,H]),th(()=>{vr(F,N?l:s),pi(F,N?u:a),Qf(V)||eh(F,i,_,H)})};return Fe(t,{onBeforeEnter(N){gr(p,[N]),pi(N,s),pi(N,o)},onBeforeAppear(N){gr(C,[N]),pi(N,l),pi(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,F){N._isLeaving=!0;const $=()=>M(N,F);pi(N,f),N._enterCancelled?(pi(N,h),rh(N)):(rh(N),pi(N,h)),th(()=>{N._isLeaving&&(vr(N,f),pi(N,d),Qf(v)||eh(N,i,m,$))}),gr(v,[N,$])},onEnterCancelled(N){S(N,!1,void 0,!0),gr(E,[N])},onAppearCancelled(N){S(N,!0,void 0,!0),gr(D,[N])},onLeaveCancelled(N){M(N),gr(R,[N])}})}function H0(n){if(n==null)return null;if(ie(n))return[Rl(n.enter),Rl(n.leave)];{const t=Rl(n);return[t,t]}}function Rl(n){return k_(n)}function pi(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[bo]||(n[bo]=new Set)).add(t)}function vr(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[bo];e&&(e.delete(t),e.size||(n[bo]=void 0))}function th(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let V0=0;function eh(n,t,e,i){const r=n._endId=++V0,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=G0(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function G0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Xi}Delay`),s=i(`${Xi}Duration`),o=nh(r,s),a=i(`${Ys}Delay`),l=i(`${Ys}Duration`),c=nh(a,l);let u=null,f=0,h=0;t===Xi?o>0&&(u=Xi,f=o,h=s.length):t===Ys?c>0&&(u=Ys,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Xi:Ys:null,h=u?u===Xi?s.length:l.length:0);const d=u===Xi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Xi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function nh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>ih(e)+ih(n[i])))}function ih(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rh(n){return(n?n.ownerDocument:document).body.offsetHeight}function W0(n,t,e){const i=n[bo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const sh=Symbol("_vod"),X0=Symbol("_vsh"),q0=Symbol(""),Y0=/(?:^|;)\s*display\s*:/;function $0(n,t,e){const i=n.style,r=Me(e);let s=!1;if(e&&!r){if(t)if(Me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&eo(i,a,"")}else for(const o in t)e[o]==null&&eo(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?K0(n,o,!Me(t)&&t?t[o]:void 0,a)||eo(i,o,a):eo(i,o,"")}}else if(r){if(t!==e){const o=i[q0];o&&(e+=";"+o),i.cssText=e,s=Y0.test(e)}}else t&&n.removeAttribute("style");sh in n&&(n[sh]=s?i.display:"",n[X0]&&(i.display="none"))}const oh=/\s*!important$/;function eo(n,t,e){if(Ut(e))e.forEach(i=>eo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=j0(n,t);oh.test(e)?n.setProperty(Yr(i),e.replace(oh,""),"important"):n[i]=e}}const ah=["Webkit","Moz","ms"],Cl={};function j0(n,t){const e=Cl[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return Cl[t]=i;i=el(i);for(let r=0;r<ah.length;r++){const s=ah[r]+i;if(s in n)return Cl[t]=s}return t}function K0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Me(i)&&e===i}const lh="http://www.w3.org/1999/xlink";function ch(n,t,e,i,r,s=q_(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(lh,t.slice(6,t.length)):n.setAttributeNS(lh,t,e):e==null||s&&!Xd(e)?n.removeAttribute(t):n.setAttribute(t,s?"":li(e)?String(e):e)}function uh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Zp(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Xd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function ps(n,t,e,i){n.addEventListener(t,e,i)}function Z0(n,t,e,i){n.removeEventListener(t,e,i)}const fh=Symbol("_vei");function J0(n,t,e,i,r=null){const s=n[fh]||(n[fh]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Q0(t);if(i){const c=s[t]=nv(i,r);ps(n,a,c,l)}else o&&(Z0(n,a,o,l),s[t]=void 0)}}const hh=/(?:Once|Passive|Capture)$/;function Q0(n){let t;if(hh.test(n)){t={};let i;for(;i=n.match(hh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Yr(n.slice(2)),t]}let Pl=0;const tv=Promise.resolve(),ev=()=>Pl||(tv.then(()=>Pl=0),Pl=Date.now());function nv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;$n(iv(i,e.value),t,5,[i])};return e.value=n,e.attached=ev(),e}function iv(n,t){if(Ut(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rv=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?W0(n,i,o):t==="style"?$0(n,e,i):Ja(t)?Qa(t)||J0(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sv(n,t,i,o))?(uh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ch(n,t,i,o,s,t!=="value")):n._isVueCE&&(ov(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Me(i)))?uh(n,Qe(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ch(n,t,i,o))};function sv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&dh(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dh(t)&&Me(e)?!1:t in n}function ov(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(r=>Qe(r)===i):Object.keys(e).some(r=>Qe(r)===i)}const ph=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ut(t)?e=>ya(t,e):t};function av(n){n.target.composing=!0}function mh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dl=Symbol("_assign");function _h(n,t,e){return t&&(n=n.trim()),e&&(n=Nu(n)),n}const Ko={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Dl]=ph(r);const s=i||r.props&&r.props.type==="number";ps(n,t?"change":"input",o=>{o.target.composing||n[Dl](_h(n.value,e,s))}),(e||s)&&ps(n,"change",()=>{n.value=_h(n.value,e,s)}),t||(ps(n,"compositionstart",av),ps(n,"compositionend",mh),ps(n,"change",mh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Dl]=ph(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Nu(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},lv=["ctrl","shift","alt","meta"],cv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>lv.some(e=>n[`${e}Key`]&&!t.includes(e))},uv=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((r,...s)=>{for(let o=0;o<t.length;o++){const a=cv[t[o]];if(a&&a(r,t))return}return n(r,...s)}))},fv=Fe({patchProp:rv},F0);let gh;function hv(){return gh||(gh=d0(fv))}const dv=((...n)=>{const t=hv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=mv(i);if(!r)return;const s=t._component;!Ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,pv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function pv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mv(n){return Me(n)?document.querySelector(n):n}var vh="1.3.23";function Qp(n,t,e){return Math.max(n,Math.min(t,e))}function _v(n,t,e){return(1-e)*n+e*t}function gv(n,t,e,i){return _v(n,t,1-Math.exp(-e*i))}function vv(n,t){return(n%t+t)%t}var xv=class{constructor(){Rt(this,"isRunning",!1);Rt(this,"value",0);Rt(this,"from",0);Rt(this,"to",0);Rt(this,"currentTime",0);Rt(this,"lerp");Rt(this,"duration");Rt(this,"easing");Rt(this,"onUpdate")}advance(n){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Qp(0,this.currentTime/this.duration,1);t=i>=1;const r=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=gv(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(n,t,{lerp:e,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=t,this.lerp=e,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Sv(n,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,n.apply(this,i)},t)}}var Mv=class{constructor(n,t,{autoResize:e=!0,debounce:i=250}={}){Rt(this,"width",0);Rt(this,"height",0);Rt(this,"scrollHeight",0);Rt(this,"scrollWidth",0);Rt(this,"debouncedResize");Rt(this,"wrapperResizeObserver");Rt(this,"contentResizeObserver");Rt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Rt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Rt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=t,e&&(this.debouncedResize=Sv(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,t;(n=this.wrapperResizeObserver)==null||n.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},tm=class{constructor(){Rt(this,"events",{})}emit(n,...t){var i;const e=this.events[n]||[];for(let r=0,s=e.length;r<s;r++)(i=e[r])==null||i.call(e,...t)}on(n,t){return this.events[n]?this.events[n].push(t):this.events[n]=[t],()=>{var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}}off(n,t){var e;this.events[n]=(e=this.events[n])==null?void 0:e.filter(i=>t!==i)}destroy(){this.events={}}};const yv=100/6,qi={passive:!1};function xh(n,t){return n===1?yv:n===2?t:1}var Ev=class{constructor(n,t={wheelMultiplier:1,touchMultiplier:1}){Rt(this,"touchStart",{x:0,y:0});Rt(this,"lastDelta",{x:0,y:0});Rt(this,"window",{width:0,height:0});Rt(this,"emitter",new tm);Rt(this,"onTouchStart",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Rt(this,"onTouchMove",n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n,i=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Rt(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Rt(this,"onWheel",n=>{let{deltaX:t,deltaY:e,deltaMode:i}=n;const r=xh(i,this.window.width),s=xh(i,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:n})});Rt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,qi),this.element.addEventListener("touchstart",this.onTouchStart,qi),this.element.addEventListener("touchmove",this.onTouchMove,qi),this.element.addEventListener("touchend",this.onTouchEnd,qi)}on(n,t){return this.emitter.on(n,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,qi),this.element.removeEventListener("touchstart",this.onTouchStart,qi),this.element.removeEventListener("touchmove",this.onTouchMove,qi),this.element.removeEventListener("touchend",this.onTouchEnd,qi)}};const Sh=n=>Math.min(1,1.001-2**(-10*n));var bv=class{constructor({wrapper:n=window,content:t=document.documentElement,eventsTarget:e=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:E=!1,anchors:v=!1,autoToggle:R=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:D=A,stopInertiaOnNavigate:S=!1}={}){Rt(this,"_isScrolling",!1);Rt(this,"_isStopped",!1);Rt(this,"_isLocked",!1);Rt(this,"_preventNextNativeScrollEvent",!1);Rt(this,"_resetVelocityTimeout",null);Rt(this,"_rafId",null);Rt(this,"isTouching");Rt(this,"time",0);Rt(this,"userData",{});Rt(this,"lastVelocity",0);Rt(this,"velocity",0);Rt(this,"direction",0);Rt(this,"options");Rt(this,"targetScroll");Rt(this,"animatedScroll");Rt(this,"animate",new xv);Rt(this,"emitter",new tm);Rt(this,"dimensions");Rt(this,"virtualScroll");Rt(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Rt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Rt(this,"onTransitionEnd",n=>{var t;(t=n.propertyName)!=null&&t.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Rt(this,"onClick",n=>{const t=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){const i=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Rt(this,"onPointerDown",n=>{n.button===1&&this.reset()});Rt(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:t,deltaY:e,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,y,E;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||r&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-touch"))||s&&((E=g.hasAttribute)==null?void 0:E.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,d=r&&i.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Rt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Rt(this,"raf",n=>{const t=n-(this.time||n);this.time=n,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=vh,window.lenis||(window.lenis={}),window.lenis.version=vh,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Sh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:t,eventsTarget:e,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:E,anchors:v,autoToggle:R,allowNestedScroll:C,naiveDimensions:D,stopInertiaOnNavigate:S},this.dimensions=new Mv(n,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ev(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,t){return this.emitter.on(n,t)}off(n,t){return this.emitter.off(n,t)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=n,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(E)?0:E)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Qp(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Sh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:t,deltaY:e}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,f,h,d,g;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(n);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,h=n.scrollHeight,d=n.clientWidth,g=n.clientHeight,a=f>d,l=h>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=h,r.clientWidth=d,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,y,E,v,R;if(_==="horizontal")m=Math.round(n.scrollLeft),p=f-d,y=t,E=s,v=a,R=c;else if(_==="vertical")m=Math.round(n.scrollTop),p=h-g,y=e,E=o,v=l,R=u;else return!1;return!R&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&E&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?vv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};let xr=null;function Tv(){return ui(()=>{if(xr)return;xr=new bv({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),orientation:"vertical",smoothWheel:!0});function n(t){xr.raf(t),requestAnimationFrame(n)}requestAnimationFrame(n)}),$r(()=>{xr&&(xr.destroy(),xr=null)}),{get lenis(){return xr}}}function wv(){const n=me(0),t=me(0),e=me(0),i=me(0),r=me(!1);let s=0,o=0,a=0,l=0,c=0,u=0,f=null;function h(m){s=m.clientX,o=m.clientY}function d(m){const p=m.target;(p.closest("a")||p.closest("button")||p.closest(".magnetic-btn")||p.dataset.cursor==="pointer")&&(r.value=!0)}function g(m){const p=m.target;(p.closest("a")||p.closest("button")||p.closest(".magnetic-btn")||p.dataset.cursor==="pointer")&&(r.value=!1)}function _(){a+=(s-a)*.15,l+=(o-l)*.15,c+=(s-c)*.08,u+=(o-u)*.08,n.value=a,t.value=l,e.value=c,i.value=u,f=requestAnimationFrame(_)}return ui(()=>{window.innerWidth<768||(window.addEventListener("mousemove",h),window.addEventListener("mouseover",d),window.addEventListener("mouseout",g),_())}),$r(()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseover",d),window.removeEventListener("mouseout",g),f&&cancelAnimationFrame(f)}),{dotX:n,dotY:t,ringX:e,ringY:i,hovering:r}}function yi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function em(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},To={duration:.5,overwrite:!1,delay:0},Zu,ze,Se,Un=1e8,ce=1/Un,Cc=Math.PI*2,Av=Cc/4,Rv=0,nm=Math.sqrt,Cv=Math.cos,Pv=Math.sin,Oe=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},Ju=function(t){return typeof t>"u"},ci=function(t){return typeof t=="object"},an=function(t){return t!==!1},Qu=function(){return typeof window<"u"},Zo=function(t){return Ae(t)||Oe(t)},im=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,Dv=/random\([^)]+\)/g,Lv=/,\s*/g,Mh=/(?:-?\.?\d|\.)+/gi,rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sm=/[+-]=-?[.\d]+/,Iv=/[^,'"\[\]\s]+/gi,Uv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ee,Qn,Pc,tf,wn={},Ga={},om,am=function(t){return(Ga=Cs(t,wn))&&mn},ef=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},wo=function(t,e){return!e&&console.warn(t)},lm=function(t,e){return t&&(wn[t]=e)&&Ga&&(Ga[t]=e)||wn},Ao=function(){return 0},Nv={suppressEvents:!0,isStart:!0,kill:!1},wa={suppressEvents:!0,kill:!1},Fv={suppressEvents:!0},nf={},rr=[],Dc={},cm,xn={},Il={},yh=30,Aa=[],rf="",sf=function(t){var e=t[0],i,r;if(ci(e)||Ae(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Aa.length;r--&&!Aa[r].targetTest(e););i=Aa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Dm(t[r],i)))||t.splice(r,1);return t},kr=function(t){return t._gsap||sf(Nn(t))[0]._gsap},um=function(t,e,i){return(i=t[e])&&Ae(i)?t[e]():Ju(i)&&t.getAttribute&&t.getAttribute(e)||i},ln=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},ys=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Ov=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Wa=function(){var t=rr.length,e=rr.slice(0),i,r;for(Dc={},rr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},of=function(t){return!!(t._initted||t._startAt||t.add)},fm=function(t,e,i,r){rr.length&&!ze&&Wa(),t.render(e,i,!!(ze&&e<0&&of(t))),rr.length&&!ze&&Wa()},hm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Iv).length<2?e:Oe(t)?t.trim():t},dm=function(t){return t},An=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Bv=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Cs=function(t,e){for(var i in e)t[i]=e[i];return t},Eh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ci(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Xa=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},po=function(t){var e=t.parent||Ee,i=t.keyframes?Bv($e(t.keyframes)):An;if(an(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},zv=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},pm=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},ul=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},cr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},kv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lc=function(t,e,i,r){return t._startAt&&(ze?t._startAt.revert(wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Hv=function n(t){return!t||t._ts&&n(t.parent)},bh=function(t){return t._repeat?Ps(t._tTime,t=t.duration()+t._rDelay)*t:0},Ps=function(t,e){var i=Math.floor(t=ye(t/e));return t&&i===t?i-1:i},qa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fl=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},hl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ye(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fl(t),i._dirty||Hr(i,t)),t},mm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=qa(t.rawTime(),e),(!e._dur||Oo(0,e.totalDuration(),i)-e._tTime>ce)&&e.render(i,!0)),Hr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ce}},ri=function(t,e,i,r){return e.parent&&cr(e),e._start=ye((Fi(i)?i:i||t!==Ee?Dn(t,i,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pm(t,e,"_first","_last",t._sort?"_start":0),Ic(e)||(t._recent=e),r||mm(t,e),t._ts<0&&hl(t,t._tTime),t},_m=function(t,e){return(wn.ScrollTrigger||ef("scrollTrigger",e))&&wn.ScrollTrigger.create(e,t)},gm=function(t,e,i,r,s){if(lf(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cm!==Sn.frame)return rr.push(t),t._lazy=[s,r],1},Vv=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Ic=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gv=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Vv(t)&&!(!t._initted&&Ic(t))||(t._ts<0||t._dp._ts<0)&&!Ic(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=Oo(0,t._tDur,e),u=Ps(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ps(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ze||r||t._zTime===ce||!e&&t._zTime){if(!t._initted&&gm(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?ce:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Lc(t,e,i,!0),t._onUpdate&&!i&&En(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&cr(t,1),!i&&!ze&&(En(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wv=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ds=function(t,e,i,r){var s=t._repeat,o=ye(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ye(o*(s+1)+t._rDelay*s):o,a>0&&!r&&hl(t,t._tTime=t._tDur*a),t.parent&&fl(t),i||Hr(t.parent,t),t},Th=function(t){return t instanceof sn?Hr(t):Ds(t,t._dur)},Xv={_start:0,endTime:Ao,totalDuration:Ao},Dn=function n(t,e,i){var r=t.labels,s=t._recent||Xv,o=t.duration()>=Un?s.endTime(!1):t._dur,a,l,c;return Oe(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*($e(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},mo=function(t,e,i){var r=Fi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Le(e[0],o,e[s+1])},dr=function(t,e){return t||t===0?e(t):e},Oo=function(t,e,i){return i<t?t:i>e?e:i},Xe=function(t,e){return!Oe(t)||!(e=Uv.exec(t))?"":e[1]},qv=function(t,e,i){return dr(i,function(r){return Oo(t,e,r)})},Uc=[].slice,vm=function(t,e){return t&&ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ci(t[0]))&&!t.nodeType&&t!==Qn},Yv=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Oe(r)&&!e||vm(r,1)?(s=i).push.apply(s,Nn(r)):i.push(r)})||i},Nn=function(t,e,i){return Se&&!e&&Se.selector?Se.selector(t):Oe(t)&&!i&&(Pc||!Ls())?Uc.call((e||tf).querySelectorAll(t),0):$e(t)?Yv(t,i):vm(t)?Uc.call(t,0):t?[t]:[]},Nc=function(t){return t=Nn(t)[0]||wo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Nn(e,i.querySelectorAll?i:i===t?wo("Invalid scope")||tf.createElement("div"):t)}},xm=function(t){return t.sort(function(){return .5-Math.random()})},Sm=function(t){if(Ae(t))return t;var e=ci(t)?t:{each:t},i=Vr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return Oe(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,y,E,v,R,C,A,D,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Un])[1],!S){for(A=-Un;A<(A=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===Un?0:l?_*f/S-.5:r/S|0,A=0,D=Un,C=0;C<_;C++)E=C%S-p,v=y-(C/S|0),m[C]=R=c?Math.abs(c==="y"?v:E):nm(E*E+v*v),R>A&&(A=R),R<D&&(D=R);r==="random"&&xm(m),m.max=A-D,m.min=D,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Xe(e.amount||e.each)||0,i=i&&_<0?ox(i):i}return _=(m[h]-m.min)/m.max||0,ye(m.b+(i?i(_):_)*m.v)+m.u}},Fc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=ye(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Fi(i)?0:Xe(i))}},Mm=function(t,e){var i=$e(t),r,s;return!i&&ci(t)&&(r=i=t.radius||Un,t.values?(t=Nn(t.values),(s=!Fi(t[0]))&&(r*=r)):t=Fc(t.increment)),dr(e,i?Ae(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Un,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||Fi(o)?u:u+Xe(o)}:Fc(t))},ym=function(t,e,i,r){return dr($e(t)?!e:i===!0?!!(i=0):!r,function(){return $e(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},$v=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},jv=function(t,e){return function(i){return t(parseFloat(i))+(e||Xe(i))}},Kv=function(t,e,i){return bm(t,e,0,1,i)},Em=function(t,e,i){return dr(i,function(r){return t[~~e(r)]})},Zv=function n(t,e,i){var r=e-t;return $e(t)?Em(t,n(0,t.length),e):dr(i,function(s){return(r+(s-t)%r)%r+t})},Jv=function n(t,e,i){var r=e-t,s=r*2;return $e(t)?Em(t,n(0,t.length-1),e):dr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ro=function(t){return t.replace(Dv,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Lv);return ym(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},bm=function(t,e,i,r,s){var o=e-t,a=r-i;return dr(s,function(l){return i+((l-t)/o*a||0)})},Qv=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Oe(t),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(n(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=e}else r||(t=Cs($e(t)?[]:{},t));if(!u){for(l in e)af.call(a,t,l,"get",e[l]);s=function(g){return ff(g,a)||(o?t.p:t)}}}return dr(i,s)},wh=function(t,e,i){var r=t.labels,s=Un,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},En=function(t,e,i){var r=t.vars,s=r[e],o=Se,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&rr.length&&Wa(),a&&(Se=a),u=l?s.apply(c,l):s.call(c),Se=o,u},no=function(t){return cr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ze),t.progress()<1&&En(t,"onInterrupt"),t},_s,Tm=[],wm=function(t){if(t)if(t=!t.name&&t.default||t,Qu()||t.headless){var e=t.name,i=Ae(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Ao,render:ff,add:af,kill:_x,modifier:mx,rawVars:0},o={targetTest:0,get:0,getSetter:uf,aliases:{},register:0};if(Ls(),t!==r){if(xn[e])return;An(r,An(Xa(t,s),o)),Cs(r.prototype,Cs(s,Xa(t,o))),xn[r.prop=e]=r,t.targetTest&&(Aa.push(r),nf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lm(e,r),t.register&&t.register(mn,r,cn)}else Tm.push(t)},le=255,io={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},Ul=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*le+.5|0},Am=function(t,e,i){var r=t?Fi(t)?[t>>16,t>>8&le,t&le]:0:io.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),io[t])r=io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&le,r&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Mh),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ul(l+1/3,s,o),r[1]=Ul(l,s,o),r[2]=Ul(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(rm),i&&r.length<4&&(r[3]=1),r}else r=t.match(Mh)||io.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/le,o=r[1]/le,a=r[2]/le,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Rm=function(t){var e=[],i=[],r=-1;return t.split(sr).forEach(function(s){var o=s.match(ms)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Ah=function(t,e,i){var r="",s=(t+r).match(sr),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Am(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Rm(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(sr,"1").split(ms),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(sr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},sr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in io)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),tx=/hsl[a]?\(/,Cm=function(t){var e=t.join(" "),i;if(sr.lastIndex=0,sr.test(e))return i=tx.test(e),t[1]=Ah(t[1],i),t[0]=Ah(t[0],i,Rm(t[1])),!0},Co,Sn=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,y=m===!0,E,v,R,C;if((p>t||p<0)&&(i+=p-e),r+=p,R=r-i,E=R-o,(E>0||y)&&(C=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=E+(E>=s?4:s-E),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](R,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){om&&(!Pc&&Qu()&&(Qn=Pc=window,tf=Qn.document||{},wn.gsap=mn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(mn.version),am(Ga||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),Tm.forEach(wm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Co=0,c=Ao},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var E=p?function(v,R,C,A){m(v,R,C,A),f.remove(E)}:m;return f.remove(m),a[y?"unshift":"push"](E),Ls(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Ls=function(){return!Co&&Sn.wake()},$t={},ex=/^[\d.\-M][\d.\-,\s]/,nx=/["']/g,ix=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(nx,"").trim():+c,r=l.substr(a+1).trim();return e},rx=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},sx=function(t){var e=(t+"").split("("),i=$t[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[ix(e[1])]:rx(t).split(",").map(hm)):$t._CE&&ex.test(t)?$t._CE("",t):i},ox=function(t){return function(e){return 1-t(1-e)}},Vr=function(t,e){return t&&(Ae(t)?t:$t[t]||sx(t))||e},jr=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return ln(t,function(a){$t[a]=wn[a]=s,$t[o=a.toLowerCase()]=i;for(var l in s)$t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$t[a+"."+l]=s[l]}),s},Pm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nl=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Cc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Pv((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Pm(a);return s=Cc/s,l.config=function(c,u){return n(t,c,u)},l},Fl=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Pm(i);return r.config=function(s){return n(t,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;jr(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});$t.Linear.easeNone=$t.none=$t.Linear.easeIn;jr("Elastic",Nl("in"),Nl("out"),Nl());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});jr("Circ",function(n){return-(nm(1-n*n)-1)});jr("Sine",function(n){return n===1?1:-Cv(n*Av)+1});jr("Back",Fl("in"),Fl("out"),Fl());$t.SteppedEase=$t.steps=wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-ce;return function(a){return((r*Oo(0,o,a)|0)+s)*i}}};To.ease=$t["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return rf+=n+","+n+"Params,"});var Dm=function(t,e){this.id=Rv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:um,this.set=e?e.getSetter:uf},Po=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ds(this,+e.duration,1,1),this.data=e.data,Se&&(this._ctx=Se,Se.data.push(this)),Co||Sn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Ds(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hl(this,i),!s._dp||s.parent||mm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ce||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fm(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ps(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ce?0:this._rts,this.totalTime(Oo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),fl(this),kv(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=ye(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ri(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Fv);var r=ze;return ze=i,of(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ze=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Th(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Th(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Dn(this,i),an(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,an(r)),this._dur||(this._zTime=-ce),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ce)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Ae(i)?i:dm,l=function(){var u=r.then;r.then=null,s&&s(),Ae(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){no(this)},n})();An(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var sn=(function(n){em(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=an(i.sortChildren),Ee&&ri(i.parent||Ee,yi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&_m(yi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return mo(0,arguments,this),this},e.from=function(r,s,o){return mo(1,arguments,this),this},e.fromTo=function(r,s,o,a){return mo(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Le(r,s,Dn(this,o),1),this},e.call=function(r,s,o){return ri(this,Le.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Le(r,o,Dn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,po(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,po(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ye(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,y,E,v,R,C,A;if(this!==Ee&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ye(u%m),u===l?(_=this._repeat,h=c):(R=ye(u/m),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=Ps(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),C&&_&1&&(h=c-h,A=1),_!==R&&!this._lock){var D=C&&R&1,S=D===(C&&_&1);if(_<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(A?0:ye(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wv(this,ye(a),ye(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!R&&(En(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-ce);break}}d=g}else{d=this._last;for(var M=r<0?r:h;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||ze&&of(d)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=M?-ce:ce);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-ce)._zTime=h>=a?1:-1,this._ts))return this._start=v,fl(this),this.render(r,s,o);this._onUpdate&&!s&&En(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(En(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Fi(s)||(s=Dn(this,s,r)),!(r instanceof Po)){if($e(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Oe(r))return this.addLabel(r,s);if(Ae(r))r=Le.delayedCall(0,r);else return this}return this!==r?ri(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Le?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Oe(r)?this.removeLabel(r):Ae(r)?this.killTweensOf(r):(r.parent===this&&ul(this,r),r===this._recent&&(this._recent=this._last),Hr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(Sn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Dn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Le.delayedCall(0,s||Ao,o);return a.data="isPause",this._hasPause=1,ri(this,a,Dn(this,r))},e.removePause=function(r){var s=this._first;for(r=Dn(this,r);s;)s._start===r&&s.data==="isPause"&&cr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)er!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Nn(r),l=this._first,c=Fi(s),u;l;)l instanceof Le?Ov(l._targets,a)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Dn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Le.to(o,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ce,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ds(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,An({startAt:{time:Dn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),wh(this,Dn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),wh(this,Dn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ye(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Hr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Un,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ye(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ds(o,o===Ee&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ee._ts&&(fm(Ee,qa(r,Ee)),cm=Sn.frame),Sn.frame>=yh){yh+=Tn.autoSleep||120;var s=Ee._first;if((!s||!s._ts)&&Tn.autoSleep&&Sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Sn.sleep()}}},t})(Po);An(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ax=function(t,e,i,r,s,o,a){var l=new cn(this._pt,t,e,0,1,Om,null,s),c=0,u=0,f,h,d,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ro(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),h=i.match(Ll)||[];f=Ll.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ys(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ll.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sm.test(r)||p)&&(l.e=0),this._pt=l,l},af=function(t,e,i,r,s,o,a,l,c,u){Ae(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Ae(f)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ae(f)?c?hx:Nm:cf,g;if(Oe(r)&&(~r.indexOf("random(")&&(r=Ro(r)),r.charAt(1)==="="&&(g=ys(h,r)+(Xe(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Oc)return!isNaN(h*r)&&r!==""?(g=new cn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?px:Fm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&ef(e,r),ax.call(this,t,e,h,r,d,l||Tn.stringFilter,c))},lx=function(t,e,i,r,s){if(Ae(t)&&(t=_o(t,s,e,i,r)),!ci(t)||t.style&&t.nodeType||$e(t)||im(t))return Oe(t)?_o(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=_o(t[a],s,e,i,r);return o},Lm=function(t,e,i,r,s,o){var a,l,c,u;if(xn[t]&&(a=new xn[t]).init(s,a.rawVars?e[t]:lx(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new cn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==_s))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},er,Oc,lf=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Zu,v=t.timeline,R=r.easeReverse||f,C,A,D,S,M,L,N,F,$,V,H,X,k;if(v&&(!h||!s)&&(s="none"),t._ease=Vr(s,To.ease),t._rEase=R&&(Vr(R)||t._ease),t._from=!v&&!!r.runBackwards,t._from&&(t.ratio=1),!v||h&&!r.stagger){if(F=m[0]?kr(m[0]).harness:0,X=F&&r[F.prop],C=Xa(r,nf),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?wa:Nv),_._lazy=0),o){if(cr(t._startAt=Le.set(m,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return En(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze||!a&&!d)&&t._startAt.revert(wa),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),D=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&an(l),immediateRender:a,stagger:0,parent:p},C),X&&(D[F.prop]=X),cr(t._startAt=Le.set(m,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze?t._startAt.revert(wa):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&an(l)||l&&!g,A=0;A<m.length;A++){if(M=m[A],N=M._gsap||sf(m)[A]._gsap,t._ptLookup[A]=V={},Dc[N.id]&&rr.length&&Wa(),H=y===m?A:y.indexOf(M),F&&($=new F).init(M,X||C,t,H,y)!==!1&&(t._pt=S=new cn(t._pt,M,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(ut){V[ut]=S}),$.priority&&(L=1)),!F||X)for(D in C)xn[D]&&($=Lm(D,C,t,H,M,y))?$.priority&&(L=1):V[D]=S=af.call(t,M,D,"get",C[D],H,y,0,r.stringFilter);t._op&&t._op[A]&&t.kill(M,t._op[A]),E&&t._pt&&(er=t,Ee.killTweensOf(M,V,t.globalTime(e)),k=!t.parent,er=0),t._pt&&l&&(Dc[N.id]=1)}L&&Bm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,h&&e<=0&&v.render(Un,!0,!0)},cx=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Oc=1,t.vars[e]="+=0",lf(t,a),Oc=0,l?wo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Re(i)+Xe(f.e)),f.b&&(f.b=u.s+Xe(f.b))},ux=function(t,e){var i=t[0]?kr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Cs({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fx=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if($e(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},_o=function(t,e,i,r,s){return Ae(t)?t.call(e,i,r,s):Oe(t)&&~t.indexOf("random(")?Ro(t):t},Im=rf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Um={};ln(Im+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Um[n]=1});var Le=(function(n){em(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:po(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||Ee,y=($e(i)||im(i)?Fi(i[0]):"length"in r)?[i]:Nn(i),E,v,R,C,A,D,S,M;if(a._targets=y.length?sf(y):wo("GSAP target "+i+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Zo(c)||Zo(u)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(E=a.timeline=new sn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),E.kill(),E.parent=E._dp=yi(a),E._start=0,h||Zo(c)||Zo(u)){if(C=y.length,S=h&&Sm(h),ci(h))for(A in h)~Im.indexOf(A)&&(M||(M={}),M[A]=h[A]);for(v=0;v<C;v++)R=Xa(r,Um),R.stagger=0,L&&(R.easeReverse=L),M&&Cs(R,M),D=y[v],R.duration=+_o(c,yi(a),v,D,y),R.delay=(+_o(u,yi(a),v,D,y)||0)-a._delay,!h&&C===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),E.to(D,R,S?S(v,D,y):0),E._ease=$t.none;E.duration()?c=u=0:a.timeline=0}else if(g){po(An(E.vars.defaults,{ease:"none"})),E._ease=Vr(g.ease||r.ease||"none");var N=0,F,$,V;if($e(g))g.forEach(function(H){return E.to(y,H,">")}),E.duration();else{R={};for(A in g)A==="ease"||A==="easeEach"||fx(A,g[A],R,g.easeEach);for(A in R)for(F=R[A].sort(function(H,X){return H.t-X.t}),N=0,v=0;v<F.length;v++)$=F[v],V={ease:$.e,duration:($.t-(v?F[v-1].t:0))/100*c},V[A]=$.v,E.to(y,V,N),N+=V.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!Zu&&(er=yi(a),Ee.killTweensOf(y),er=0),ri(p,yi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===ye(p._time)&&an(f)&&Hv(yi(a))&&p.data!=="nested")&&(a._tTime=-ce,a.render(Math.max(0,-u)||0)),m&&_m(yi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ce&&!u?l:r<ce?0:r,h,d,g,_,m,p,y,E;if(!c)Gv(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=ye(f%_),f===l?(g=this._repeat,h=c):(m=ye(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Ps(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ye(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(gm(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var R=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(v?-1:1)/R:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(En(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Lc(this,r,s,o),En(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&En(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Lc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(En(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Co||Sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lf(this,c),u=this._ease(c/this._dur),cx(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(hl(this,0),this.parent||pm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,er&&er.vars.overwrite!==!0)._first||no(this),this.parent&&o!==this.timeline.totalDuration()&&Ds(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Nn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&zv(a,l))return s==="all"&&(this._pt=0),no(this);for(f=this._op=this._op||[],s!=="all"&&(Oe(s)&&(_={},ln(s,function(y){return _[y]=1}),s=_),s=ux(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ul(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&no(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return mo(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return mo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ee.killTweensOf(r,s,o)},t})(Po);An(Le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(n){Le[n]=function(){var t=new sn,e=Uc.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var cf=function(t,e,i){return t[e]=i},Nm=function(t,e,i){return t[e](i)},hx=function(t,e,i,r){return t[e](r.fp,i)},dx=function(t,e,i){return t.setAttribute(e,i)},uf=function(t,e){return Ae(t[e])?Nm:Ju(t[e])&&t.setAttribute?dx:cf},Fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},px=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Om=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},ff=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},mx=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},_x=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ul(this,e,"_pt"):e.dep||(i=1),e=r;return!i},gx=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Bm=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},cn=(function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Fm,this.d=l||this,this.set=c||cf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=gx,this.m=i,this.mt=s,this.tween=r},n})();ln(rf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return nf[n]=1});wn.TweenMax=wn.TweenLite=Le;wn.TimelineLite=wn.TimelineMax=sn;Ee=new sn({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Cm;var Gr=[],Ra={},vx=[],Rh=0,xx=0,Ol=function(t){return(Ra[t]||vx).map(function(e){return e()})},Bc=function(){var t=Date.now(),e=[];t-Rh>2&&(Ol("matchMediaInit"),Gr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Qn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Ol("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Rh=t,Ol("matchMedia"))},zm=(function(){function n(e,i){this.selector=i&&Nc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=xx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ae(i)&&(s=r,r=i,i=Ae);var o=this,a=function(){var c=Se,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Nc(s)),Se=o,f=r.apply(o,arguments),Ae(f)&&o._r.push(f),Se=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Ae?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Se;Se=null,i(this),Se=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Le&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Le)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Gr.length;o--;)Gr[o].id===this.id&&Gr.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),Sx=(function(){function n(e){this.contexts=[],this.scope=e,Se&&Se.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){ci(i)||(i={matches:i});var o=new zm(0,s||this.scope),a=o.conditions={},l,c,u;Se&&!o.selector&&(o.selector=Se.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Qn.matchMedia(i[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bc):l.addEventListener("change",Bc)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ya={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return wm(r)})},timeline:function(t){return new sn(t)},getTweensOf:function(t,e){return Ee.getTweensOf(t,e)},getProperty:function(t,e,i,r){Oe(t)&&(t=Nn(t)[0]);var s=kr(t||{}).get,o=i?dm:hm;return i==="native"&&(i=""),t&&(e?o((xn[e]&&xn[e].get||s)(t,e,i,r)):function(a,l,c){return o((xn[a]&&xn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Nn(t),t.length>1){var r=t.map(function(u){return mn.quickSetter(u,e,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=xn[e],a=kr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;_s._pt=0,f.init(t,i?u+i:u,_s,0,[t]),f.render(1,f),_s._pt&&ff(1,_s)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=mn.to(t,An((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ee.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vr(t.ease,To.ease)),Eh(To,t||{})},config:function(t){return Eh(Tn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!xn[a]&&!wn[a]&&wo(e+" effect requires "+a+" plugin.")}),Il[e]=function(a,l,c){return i(Nn(a),An(l||{},s),c)},o&&(sn.prototype[e]=function(a,l,c){return this.add(Il[e](a,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){$t[t]=Vr(e)},parseEase:function(t,e){return arguments.length?Vr(t,e):$t},getById:function(t){return Ee.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new sn(t),r,s;for(i.smoothChildTiming=an(t.smoothChildTiming),Ee.remove(i),i._dp=0,i._time=i._tTime=Ee._time,r=Ee._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Le&&r.vars.onComplete===r._targets[0]))&&ri(i,r,r._start-r._delay),r=s;return ri(Ee,i,0),i},context:function(t,e){return t?new zm(t,e):Se},matchMedia:function(t){return new Sx(t)},matchMediaRefresh:function(){return Gr.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||Bc()},addEventListener:function(t,e){var i=Ra[t]||(Ra[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ra[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Zv,wrapYoyo:Jv,distribute:Sm,random:ym,snap:Mm,normalize:Kv,getUnit:Xe,clamp:qv,splitColor:Am,toArray:Nn,selector:Nc,mapRange:bm,pipe:$v,unitize:jv,interpolate:Qv,shuffle:xm},install:am,effects:Il,ticker:Sn,updateRoot:sn.updateRoot,plugins:xn,globalTimeline:Ee,core:{PropTween:cn,globals:lm,Tween:Le,Timeline:sn,Animation:Po,getCache:kr,_removeLinkedListItem:ul,reverting:function(){return ze},context:function(t){return t&&Se&&(Se.data.push(t),t._ctx=Se),Se},suppressOverwrites:function(t){return Zu=t}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ya[n]=Le[n]});Sn.add(sn.updateRoot);_s=Ya.to({},{duration:0});var Mx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},yx=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Mx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Bl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Oe(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}yx(a,s)}}}},mn=Ya.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)ze?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Bl("roundProps",Fc),Bl("modifiers"),Bl("snap",Mm))||Ya;Le.version=sn.version=mn.version="3.15.0";om=1;Qu()&&Ls();$t.Power0;$t.Power1;$t.Power2;$t.Power3;$t.Power4;$t.Linear;$t.Quad;$t.Cubic;$t.Quart;$t.Quint;$t.Strong;$t.Elastic;$t.Back;$t.SteppedEase;$t.Bounce;$t.Sine;$t.Expo;$t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ch,nr,Es,hf,Nr,Ph,df,Ex=function(){return typeof window<"u"},Oi={},Cr=180/Math.PI,bs=Math.PI/180,Jr=Math.atan2,Dh=1e8,pf=/([A-Z])/g,bx=/(left|right|width|margin|padding|x)/i,Tx=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ax=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},km=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Hm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Px=function(t,e,i){return t.style[e]=i},Dx=function(t,e,i){return t.style.setProperty(e,i)},Lx=function(t,e,i){return t._gsap[e]=i},Ix=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Ux=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Nx=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},be="transform",un=be+"Origin",Fx=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Oi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ti(r,a)}):this.tfm[t]=o.x?o[t]:Ti(r,t),t===un&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(be)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=be}(s||e)&&this.props.push(t,e,s[t])},Vm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ox=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(pf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=df(),(!s||!s.isStart)&&!i[be]&&(Vm(i),r.zOrigin&&i[un]&&(i[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gm=function(t,e){var i={target:t,props:[],revert:Ox,save:Fx};return t._gsap||mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Wm,kc=function(t,e){var i=nr.createElementNS?nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):nr.createElement(t);return i&&i.style?i:nr.createElement(t)},bn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(pf,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Is(e)||e,1)||""},Lh="O,Moz,ms,Ms,Webkit".split(","),Is=function(t,e,i){var r=e||Nr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Lh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Lh[o]:"")+t},Hc=function(){Ex()&&window.document&&(Ch=window,nr=Ch.document,Es=nr.documentElement,Nr=kc("div")||{style:{}},kc("div"),be=Is(be),un=be+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wm=!!Is("perspective"),df=mn.core.reverting,hf=1)},Ih=function(t){var e=t.ownerSVGElement,i=kc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Es.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Es.removeChild(i),s},Uh=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Xm=function(t){var e,i;try{e=t.getBBox()}catch{e=Ih(t),i=1}return e&&(e.width||e.height)||i||(e=Ih(t)),e&&!e.width&&!e.x&&!e.y?{x:+Uh(t,["x","cx","x1"])||0,y:+Uh(t,["y","cy","y1"])||0,width:0,height:0}:e},qm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Xm(t))},ur=function(t,e){if(e){var i=t.style,r;e in Oi&&e!==un&&(e=be),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(pf,"-$1").toLowerCase())):i.removeAttribute(e)}},ir=function(t,e,i,r,s,o){var a=new cn(t._pt,e,i,0,1,o?Hm:km);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},Nh={deg:1,rad:1,turn:1},Bx={grid:1,flex:1},fr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Nr.style,l=bx.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Nh[r]||Nh[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&qm(t),(d||o==="%")&&(Oi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],Re(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Sn.time&&!m.uncache)return Re(s/m.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,g=t[u],y?t.style[e]=y:ur(t,e)}else(d||o==="%")&&!Bx[bn(_,"display")]&&(a.position=bn(t,"position")),_===t&&(a.position="static"),_.appendChild(Nr),g=Nr[u],_.removeChild(Nr),a.position="absolute";return l&&d&&(m=kr(_),m.time=Sn.time,m.width=_[u]),Re(h?g*s/f:g&&s?f/g*s:0)},Ti=function(t,e,i,r){var s;return hf||Hc(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Oi[e]&&e!=="transform"?(s=Lo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ja(bn(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$a[e]&&$a[e](t,e,i)||bn(t,e)||um(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,i)+i:s},zx=function(t,e,i,r){if(!i||i==="none"){var s=Is(e,t,1),o=s&&bn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=bn(t,"borderTopColor"))}var a=new cn(this._pt,t.style,e,0,1,Om),l=0,c=0,u,f,h,d,g,_,m,p,y,E,v,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=bn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=bn(t,e)||r,_?t.style[e]=_:ur(t,e)),u=[i,r],Cm(u),i=u[0],r=u[1],h=i.match(ms)||[],R=r.match(ms)||[],R.length){for(;f=ms.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=ys(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=ms.lastIndex-E.length,E||(E=E||Tn.units[e]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(d=fr(t,e,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Hm:km;return sm.test(r)&&(a.e=0),this._pt=a,a},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kx=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Fh[i]||i,e[1]=Fh[r]||r,e.join(" ")},Hx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Oi[a]&&(l=1,a=a==="transformOrigin"?un:be),ur(i,a);l&&(ur(i,be),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Lo(i,1),o.uncache=1,Vm(r)))}},$a={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new cn(t._pt,e,i,0,0,Hx);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Do=[1,0,0,1,0,0],Ym={},$m=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Oh=function(t){var e=bn(t,be);return $m(e)?Do:e.substr(7).match(rm).map(Re)},mf=function(t,e){var i=t._gsap||kr(t),r=t.style,s=Oh(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Do:s):(s===Do&&!t.offsetParent&&t!==Es&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Es.appendChild(t)),s=Oh(t),l?r.display=l:ur(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Es.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vc=function(t,e,i,r,s,o){var a=t._gsap,l=s||mf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),v=parseFloat(E[0])||0,R=parseFloat(E[1])||0,C,A,D,S;i?l!==Do&&(A=d*m-g*_)&&(D=v*(m/A)+R*(-_/A)+(_*y-m*p)/A,S=v*(-g/A)+R*(d/A)-(d*y-g*p)/A,v=D,R=S):(C=Xm(t),v=C.x+(~E[0].indexOf("%")?v/100*C.width:v),R=C.y+(~(E[1]||E[0]).indexOf("%")?R/100*C.height:R)),r||r!==!1&&a.smooth?(p=v-c,y=R-u,a.xOffset=f+(p*d+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[un]="0px 0px",o&&(ir(o,a,"xOrigin",c,v),ir(o,a,"yOrigin",u,R),ir(o,a,"xOffset",f,a.xOffset),ir(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},Lo=function(t,e){var i=t._gsap||new Dm(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=bn(t,un)||"0",u,f,h,d,g,_,m,p,y,E,v,R,C,A,D,S,M,L,N,F,$,V,H,X,k,ut,_t,Et,Ct,Kt,nt,ct;return u=f=h=_=m=p=y=E=v=0,d=g=1,i.svg=!!(t.getCTM&&qm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[be]!=="none"?l[be]:"")),r.scale=r.rotate=r.translate="none"),A=mf(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),c=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Vc(t,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,A)),R=i.xOrigin||0,C=i.yOrigin||0,A!==Do&&(L=A[0],N=A[1],F=A[2],$=A[3],u=V=A[4],f=H=A[5],A.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt($*$+F*F),_=L||N?Jr(N,L)*Cr:0,y=F||$?Jr(F,$)*Cr+_:0,y&&(g*=Math.abs(Math.cos(y*bs))),i.svg&&(u-=R-(R*L+C*F),f-=C-(R*N+C*$))):(ct=A[6],Kt=A[7],_t=A[8],Et=A[9],Ct=A[10],nt=A[11],u=A[12],f=A[13],h=A[14],D=Jr(ct,Ct),m=D*Cr,D&&(S=Math.cos(-D),M=Math.sin(-D),X=V*S+_t*M,k=H*S+Et*M,ut=ct*S+Ct*M,_t=V*-M+_t*S,Et=H*-M+Et*S,Ct=ct*-M+Ct*S,nt=Kt*-M+nt*S,V=X,H=k,ct=ut),D=Jr(-F,Ct),p=D*Cr,D&&(S=Math.cos(-D),M=Math.sin(-D),X=L*S-_t*M,k=N*S-Et*M,ut=F*S-Ct*M,nt=$*M+nt*S,L=X,N=k,F=ut),D=Jr(N,L),_=D*Cr,D&&(S=Math.cos(D),M=Math.sin(D),X=L*S+N*M,k=V*S+H*M,N=N*S-L*M,H=H*S-V*M,L=X,V=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Re(Math.sqrt(L*L+N*N+F*F)),g=Re(Math.sqrt(H*H+ct*ct)),D=Jr(V,H),y=Math.abs(D)>2e-4?D*Cr:0,v=nt?1/(nt<0?-nt:nt):0),i.svg&&(X=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!$m(bn(t,be)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Re(d),i.scaleY=Re(g),i.rotation=Re(_)+a,i.rotationX=Re(m)+a,i.rotationY=Re(p)+a,i.skewX=y+a,i.skewY=E+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[un]=ja(c)),i.xOffset=i.yOffset=0,i.force3D=Tn.force3D,i.renderTransform=i.svg?Gx:Wm?jm:Vx,i.uncache=0,i},ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},zl=function(t,e,i){var r=Xe(e);return Re(parseFloat(e)+parseFloat(fr(t,"x",i+"px",r)))+r},Vx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,jm(t,e)},Sr="0deg",$s="0px",Mr=") ",jm=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,E=i.zOrigin,v="",R=p==="auto"&&t&&t!==1||p===!0;if(E&&(f!==Sr||u!==Sr)){var C=parseFloat(u)*bs,A=Math.sin(C),D=Math.cos(C),S;C=parseFloat(f)*bs,S=Math.cos(C),o=zl(y,o,A*S*-E),a=zl(y,a,-Math.sin(C)*-E),l=zl(y,l,D*S*-E+E)}m!==$s&&(v+="perspective("+m+Mr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||o!==$s||a!==$s||l!==$s)&&(v+=l!==$s||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==Sr&&(v+="rotate("+c+Mr),u!==Sr&&(v+="rotateY("+u+Mr),f!==Sr&&(v+="rotateX("+f+Mr),(h!==Sr||d!==Sr)&&(v+="skew("+h+", "+d+Mr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Mr),y.style[be]=v||"translate(0, 0)"},Gx=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,E=parseFloat(o),v=parseFloat(a),R,C,A,D,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,R=Math.cos(l)*f,C=Math.sin(l)*f,A=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=bs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,D*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),R*=S,C*=S)),R=Re(R),C=Re(C),A=Re(A),D=Re(D)):(R=f,D=h,C=A=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=fr(d,"x",o,"px"),v=fr(d,"y",a,"px")),(g||_||m||p)&&(E=Re(E+g-(g*R+_*A)+m),v=Re(v+_-(g*C+_*D)+p)),(r||s)&&(S=d.getBBox(),E=Re(E+r/100*S.width),v=Re(v+s/100*S.height)),S="matrix("+R+","+C+","+A+","+D+","+E+","+v+")",d.setAttribute("transform",S),y&&(d.style[be]=S)},Wx=function(t,e,i,r,s){var o=360,a=Oe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Dh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Dh)%o-~~(c/o)*o)),t._pt=h=new cn(t._pt,e,i,r,c,wx),h.e=u,h.u="deg",t._props.push(i),h},Bh=function(t,e){for(var i in e)t[i]=e[i];return t},Xx=function(t,e,i){var r=Bh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[be]=e,a=Lo(i,1),ur(i,be),i.setAttribute("transform",c)):(c=getComputedStyle(i)[be],o[be]=e,a=Lo(i,1),o[be]=c);for(l in Oi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Xe(c),g=Xe(u),f=d!==g?fr(i,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new cn(t._pt,a,l,f,h-f,zc),t._pt.u=g||0,t._props.push(l));Bh(a,r)};ln("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});$a[t>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ti(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Km={name:"css",register:Hc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,y,E,v,R,C,A,D,S;hf||Hc(),this.styles=this.styles||Gm(t),D=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(xn[_]&&Lm(_,e,i,r,t,s)))){if(d=typeof u,g=$a[_],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ro(u)),g)g(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(m=Xe(c),p=Xe(u),p?m!==p&&(c=fr(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Oe(c)&&~c.indexOf("random(")&&(c=Ro(c)),Xe(c+"")||c==="auto"||(c+=Tn.units[_]||Xe(Ti(t,_))||""),(c+"").charAt(1)==="="&&(c=Ti(t,_))):c=Ti(t,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in si&&(_==="autoAlpha"&&(h===1&&Ti(t,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),ir(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Oi,E){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=bn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=u,u=bn(t,"perspective"),M?t.style.perspective=M:ur(t,"perspective")}f=parseFloat(u)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||Lo(t,e.parseTransform),C=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new cn(this._pt,a,be,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new cn(this._pt,R,"scaleY",R.scaleY,(y?ys(R.scaleY,y+f):f)-R.scaleY||0,zc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(un,0,a[un]),u=kx(u),R.svg?Vc(t,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&ir(this,R,"zOrigin",R.zOrigin,p),ir(this,a,_,ja(c),ja(u)));continue}else if(_==="svgOrigin"){Vc(t,u,1,C,0,this);continue}else if(_ in Ym){Wx(this,R,_,h,y?ys(h,y+u):u);continue}else if(_==="smoothOrigin"){ir(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){Xx(this,u,t);continue}}else _ in a||(_=Is(_)||_);if(E||(f||f===0)&&(h||h===0)&&!Tx.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Xe(u)||(_ in Tn.units?Tn.units[_]:m),m!==p&&(h=fr(t,_,c,p)),this._pt=new cn(this._pt,E?R:a,_,h,(y?ys(h,y+f):f)-h,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Cx:zc),this._pt.u=p||0,E&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=Rx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ax);else if(_ in a)zx.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){ef(_,u);continue}E||(_ in a?D.push(_,0,a[_]):typeof t[_]=="function"?D.push(_,2,t[_]()):D.push(_,1,c||t[_])),o.push(_)}}A&&Bm(this)},render:function(t,e){if(e.tween._time||!df())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ti,aliases:si,getSetter:function(t,e,i){var r=si[e];return r&&r.indexOf(",")<0&&(e=r),e in Oi&&e!==un&&(t._gsap.x||Ti(t,"x"))?i&&Ph===i?e==="scale"?Ix:Lx:(Ph=i||{})&&(e==="scale"?Ux:Nx):t.style&&!Ju(t.style[e])?Px:~e.indexOf("-")?Dx:uf(t,e)},core:{_removeProperty:ur,_getMatrix:mf}};mn.utils.checkPrefix=Is;mn.core.getStyleSaver=Gm;(function(n,t,e,i){var r=ln(n+","+t+","+e,function(s){Oi[s]=1});ln(t,function(s){Tn.units[s]="deg",Ym[s]=1}),si[r[13]]=n+","+t,ln(i,function(s){var o=s.split(":");si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Tn.units[n]="px"});mn.registerPlugin(Km);var Gn=mn.registerPlugin(Km)||mn;Gn.core.Tween;const qx={class:"preloader-content"},Yx={class:"preloader-line"},$x={class:"preloader-line mt-4"},jx={__name:"Preloader",setup(n){const t=me(null),e=me(null),i=me([]),r=me([]),s="АДДИТИВ ПЛЮС".split(""),o="ПРЕДСТАВЛЯЕТ...".split("");return ui(()=>{const a=[...i.value||[],...r.value||[]];Gn.set(a,{opacity:0,y:20}),Gn.set(e.value,{opacity:0});const l=Gn.timeline();l.to(a,{opacity:1,y:0,duration:.08,stagger:.06,ease:"power2.out"}),l.to(e.value,{opacity:.3,duration:.8,ease:"power2.inOut"},"-=0.5"),l.to({},{duration:1.5}),l.to(t.value,{opacity:0,duration:1,ease:"power2.inOut",onComplete:()=>{t.value&&t.value.remove()}})}),(a,l)=>(qt(),Yt("div",{ref_key:"preloaderEl",ref:t,class:"preloader"},[W("div",qx,[W("div",Yx,[(qt(!0),Yt(ve,null,pn(Ei(s),(c,u)=>(qt(),Yt("span",{key:"l1-"+u,ref_for:!0,ref_key:"line1Refs",ref:i,class:qe(["preloader-char",{space:c===" "}])},Te(c),3))),128))]),W("div",$x,[(qt(!0),Yt(ve,null,pn(Ei(o),(c,u)=>(qt(),Yt("span",{key:"l2-"+u,ref_for:!0,ref_key:"line2Refs",ref:r,class:qe(["preloader-char",{space:c===" "}])},Te(c),3))),128))])]),W("div",{ref_key:"glowEl",ref:e,class:"preloader-glow"},null,512)],512))}},Zm="./logo.png",Kx={class:"max-w-container mx-auto px-6 lg:px-10 flex items-center justify-between h-20"},Zx={class:"hidden md:flex items-center gap-8"},Jx=["href"],Qx={key:0,class:"md:hidden bg-beige/95 nav-blur border-t border-border px-6 py-6"},tS=["href"],eS={__name:"AppNav",setup(n){const t=me(!1),e=me(!1),i=[{href:"#products",label:"Продукция"},{href:"#about",label:"О компании"},{href:"#stats",label:"Цифры"},{href:"#contact",label:"Контакты"}];function r(){t.value=window.scrollY>50}return ui(()=>window.addEventListener("scroll",r,{passive:!0})),$r(()=>window.removeEventListener("scroll",r)),(s,o)=>(qt(),Yt("nav",{class:qe(["fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500",t.value?"bg-beige/80 shadow-sm":"bg-transparent"])},[W("div",Kx,[o[4]||(o[4]=W("a",{href:"#",class:"flex items-center gap-3 group","data-cursor":"pointer"},[W("img",{src:Zm,alt:"Аддитив Плюс",class:"h-10 w-auto transition-transform duration-300 group-hover:scale-105"}),W("span",{class:"font-display text-xl font-semibold text-graphite tracking-wide"},"Аддитив Плюс")],-1)),W("div",Zx,[(qt(),Yt(ve,null,pn(i,a=>W("a",{key:a.href,href:a.href,class:"text-sm font-body font-medium text-graphite/70 hover:text-champagne transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-champagne after:transition-all after:duration-300 hover:after:w-full","data-cursor":"pointer"},Te(a.label),9,Jx)),64)),o[3]||(o[3]=W("a",{href:"#contact",class:"magnetic-btn ml-4 px-6 py-2.5 bg-graphite text-beige text-sm font-medium rounded-full hover:bg-graphite-soft transition-colors duration-300","data-cursor":"pointer"},[W("span",{class:"btn-text"},"Связаться")],-1))]),W("button",{class:"md:hidden flex flex-col gap-1.5 p-2",onClick:o[0]||(o[0]=a=>e.value=!e.value),"data-cursor":"pointer"},[W("span",{class:qe(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"rotate-45 translate-y-[5px]":""])},null,2),W("span",{class:qe(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"opacity-0":""])},null,2),W("span",{class:qe(["w-6 h-[2px] bg-graphite transition-all duration-300",e.value?"-rotate-45 -translate-y-[5px]":""])},null,2)])]),ae(z0,{"enter-active-class":"transition-all duration-300 ease-out","leave-active-class":"transition-all duration-200 ease-in","enter-from-class":"opacity-0 -translate-y-4","leave-to-class":"opacity-0 -translate-y-4"},{default:mp(()=>[e.value?(qt(),Yt("div",Qx,[(qt(),Yt(ve,null,pn(i,a=>W("a",{key:a.href,href:a.href,class:"block py-3 text-lg font-display text-graphite hover:text-champagne transition-colors",onClick:o[1]||(o[1]=l=>e.value=!1)},Te(a.label),9,tS)),64)),W("a",{href:"#contact",class:"mt-4 block text-center px-6 py-3 bg-graphite text-beige rounded-full font-medium",onClick:o[2]||(o[2]=a=>e.value=!1)}," Связаться ")])):ju("",!0)]),_:1})],2))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="170",nS=0,zh=1,iS=2,Jm=1,rS=2,Si=3,hr=0,fn=1,Ri=2,or=0,Ts=1,Gc=2,kh=3,Hh=4,sS=5,Ir=100,oS=101,aS=102,lS=103,cS=104,uS=200,fS=201,hS=202,dS=203,Wc=204,Xc=205,pS=206,mS=207,_S=208,gS=209,vS=210,xS=211,SS=212,MS=213,yS=214,qc=0,Yc=1,$c=2,Us=3,jc=4,Kc=5,Zc=6,Jc=7,Qm=0,ES=1,bS=2,ar=0,TS=1,wS=2,AS=3,RS=4,CS=5,PS=6,DS=7,t_=300,Ns=301,Fs=302,Qc=303,tu=304,dl=306,eu=1e3,Fr=1001,nu=1002,qn=1003,LS=1004,Jo=1005,oi=1006,kl=1007,Or=1008,Bi=1009,e_=1010,n_=1011,Io=1012,gf=1013,Xr=1014,Ci=1015,Bo=1016,vf=1017,xf=1018,Os=1020,i_=35902,r_=1021,s_=1022,Wn=1023,o_=1024,a_=1025,ws=1026,Bs=1027,l_=1028,Sf=1029,c_=1030,Mf=1031,yf=1033,Ca=33776,Pa=33777,Da=33778,La=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,uu=37808,fu=37809,hu=37810,du=37811,pu=37812,mu=37813,_u=37814,gu=37815,vu=37816,xu=37817,Su=37818,Mu=37819,yu=37820,Eu=37821,Ia=36492,bu=36494,Tu=36495,u_=36283,wu=36284,Au=36285,Ru=36286,IS=3200,US=3201,NS=0,FS=1,tr="",Ln="srgb",ks="srgb-linear",pl="linear",oe="srgb",Qr=7680,Vh=519,OS=512,BS=513,zS=514,f_=515,kS=516,HS=517,VS=518,GS=519,Gh=35044,Wh="300 es",Pi=2e3,Ka=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=Math.PI/180,Cu=180/Math.PI;function zo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function WS(n,t){return(n%t+t)%t}function Vl(n,t,e){return(1-e)*n+e*t}function js(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],E=r[4],v=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*m+a*E+l*C,s[6]=o*p+a*v+l*A,s[1]=c*_+u*y+f*R,s[4]=c*m+u*E+f*C,s[7]=c*p+u*v+f*A,s[2]=h*_+d*y+g*R,s[5]=h*m+d*E+g*C,s[8]=h*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gl.makeScale(t,e)),this}rotate(t){return this.premultiply(Gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new Wt;function h_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XS(){const n=Za("canvas");return n.style.display="block",n}const Xh={};function ro(n){n in Xh||(Xh[n]=!0,console.warn(n))}function qS(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function YS(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $S(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=Li(n.r),n.g=Li(n.g),n.b=Li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=As(n.r),n.g=As(n.g),n.b=As(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===tr?pl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],$h=[.3127,.329],jh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[ks]:{primaries:qh,whitePoint:$h,transfer:pl,toXYZ:jh,fromXYZ:Kh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:qh,whitePoint:$h,transfer:oe,toXYZ:jh,fromXYZ:Kh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}});let ts;class jS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Za("canvas")),ts.width=t.width,ts.height=t.height;const i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KS=0;class d_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wl(r[o].image)):s.push(Wl(r[o]))}else s=Wl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class hn extends Hs{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=Fr,r=Fr,s=oi,o=Or,a=Wn,l=Bi,c=hn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=zo(),this.name="",this.source=new d_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==t_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eu:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eu:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=t_;hn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,R=(p+1)/2,C=(u+h)/4,A=(f+_)/4,D=(g+m)/4;return E>v&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=A/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Hs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new d_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends JS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class p_ extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),C=Math.atan2(R,p*y);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const v=a*y;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new Z,Zh=new ko;class Ho{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),ta.subVectors(this.max,Ks),es.subVectors(t.a,Ks),ns.subVectors(t.b,Ks),is.subVectors(t.c,Ks),Yi.subVectors(ns,es),$i.subVectors(is,ns),yr.subVectors(es,is);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-yr.z,yr.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,yr.z,0,-yr.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-yr.y,yr.x,0];return!ql(e,es,ns,is,ta)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,es,ns,is,ta))?!1:(ea.crossVectors(Yi,$i),e=[ea.x,ea.y,ea.z],ql(e,es,ns,is,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zn=new Z,Qo=new Ho,es=new Z,ns=new Z,is=new Z,Yi=new Z,$i=new Z,yr=new Z,Ks=new Z,ta=new Z,ea=new Z,Er=new Z;function ql(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Er.fromArray(n,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=t.dot(Er),c=e.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tM=new Ho,Zs=new Z,Yl=new Z;class ml{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):tM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Yl)),this.expandByPoint(Zs.copy(t.center).sub(Yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new Z,$l=new Z,na=new Z,ji=new Z,jl=new Z,ia=new Z,Kl=new Z;class m_{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){$l.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ji.copy(this.origin).sub($l);const s=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ji.dot(this.direction),l=-ji.dot(na),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($l).addScaledVector(na,h),d}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,r,s){jl.subVectors(e,t),ia.subVectors(i,t),Kl.crossVectors(jl,ia);let o=this.direction.dot(Kl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);const l=a*this.direction.dot(ia.crossVectors(ji,ia));if(l<0)return null;const c=a*this.direction.dot(jl.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(Kl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/rs.setFromMatrixColumn(t,0).length(),s=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,nM)}lookAt(t,e,i){const r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ki.crossVectors(i,gn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ki.crossVectors(i,gn)),Ki.normalize(),ra.crossVectors(gn,Ki),r[0]=Ki.x,r[4]=ra.x,r[8]=gn.x,r[1]=Ki.y,r[5]=ra.y,r[9]=gn.y,r[2]=Ki.z,r[6]=ra.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],E=i[7],v=i[11],R=i[15],C=r[0],A=r[4],D=r[8],S=r[12],M=r[1],L=r[5],N=r[9],F=r[13],$=r[2],V=r[6],H=r[10],X=r[14],k=r[3],ut=r[7],_t=r[11],Et=r[15];return s[0]=o*C+a*M+l*$+c*k,s[4]=o*A+a*L+l*V+c*ut,s[8]=o*D+a*N+l*H+c*_t,s[12]=o*S+a*F+l*X+c*Et,s[1]=u*C+f*M+h*$+d*k,s[5]=u*A+f*L+h*V+d*ut,s[9]=u*D+f*N+h*H+d*_t,s[13]=u*S+f*F+h*X+d*Et,s[2]=g*C+_*M+m*$+p*k,s[6]=g*A+_*L+m*V+p*ut,s[10]=g*D+_*N+m*H+p*_t,s[14]=g*S+_*F+m*X+p*Et,s[3]=y*C+E*M+v*$+R*k,s[7]=y*A+E*L+v*V+R*ut,s[11]=y*D+E*N+v*H+R*_t,s[15]=y*S+E*F+v*X+R*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,E=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,R=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=e*y+i*E+r*v+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=y*A,t[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*A,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*A,t[4]=E*A,t[5]=(u*m*s-g*h*s+g*r*d-e*m*d-u*r*p+e*h*p)*A,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*A,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*A,t[8]=v*A,t[9]=(g*f*s-u*_*s-g*i*d+e*_*d+u*i*p-e*f*p)*A,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*d-e*a*d)*A,t[12]=R*A,t[13]=(u*_*r-g*f*r+g*i*h-e*_*h-u*i*m+e*f*m)*A,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,E=l*u,v=l*f,R=i.x,C=i.y,A=i.z;return r[0]=(1-(_+p))*R,r[1]=(d+v)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(d-v)*C,r[5]=(1-(h+p))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+E)*A,r[9]=(m-y)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],kn.copy(this);const c=1/s,u=1/o,f=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,e.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Pi){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,g;if(a===Pi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ka)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Pi){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,d=(i+r)*u;let g,_;if(a===Pi)g=(o+s)*f,_=-2*f;else if(a===Ka)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const rs=new Z,kn=new Pe,eM=new Z(0,0,0),nM=new Z(1,1,1),Ki=new Z,ra=new Z,gn=new Z,Jh=new Pe,Qh=new ko;class zi{constructor(t=0,e=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iM=0;const td=new Z,ss=new ko,gi=new Pe,sa=new Z,Js=new Z,rM=new Z,sM=new ko,ed=new Z(1,0,0),nd=new Z(0,1,0),id=new Z(0,0,1),rd={type:"added"},oM={type:"removed"},os={type:"childadded",child:null},Zl={type:"childremoved",child:null};class dn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new Z,e=new zi,i=new ko,r=new Z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Wt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sa.copy(t):sa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Js,sa,this.up):gi.lookAt(sa,Js,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(gi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oM),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,rM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new Z,vi=new Z,Jl=new Z,xi=new Z,as=new Z,ls=new Z,sd=new Z,Ql=new Z,tc=new Z,ec=new Z,nc=new Ce,ic=new Ce,rc=new Ce;class Vn{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Hn.subVectors(t,e),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Hn.subVectors(r,e),vi.subVectors(i,e),Jl.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(vi),l=Hn.dot(Jl),c=vi.dot(vi),u=vi.dot(Jl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(t,e),ic.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(nc,s.x),o.addScaledVector(ic,s.y),o.addScaledVector(rc,s.z),o}static isFrontFacing(t,e,i,r){return Hn.subVectors(i,e),vi.subVectors(t,e),Hn.cross(vi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Vn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),Ql.subVectors(t,i);const l=as.dot(Ql),c=ls.dot(Ql);if(l<=0&&c<=0)return e.copy(i);tc.subVectors(t,r);const u=as.dot(tc),f=ls.dot(tc);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(as,o);ec.subVectors(t,s);const d=as.dot(ec),g=ls.dot(ec);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ls,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return sd.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(sd,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function sc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=WS(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=sc(o,s,t+1/3),this.g=sc(o,s,t),this.b=sc(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const i=g_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return Zt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(rn(Ve.r*255,0,255))*65536+Math.round(rn(Ve.g*255,0,255))*256+Math.round(rn(Ve.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,r=Ve.g,s=Ve.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ln){Zt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,r=Ve.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(oa);const i=Vl(Zi.h,oa.h,e),r=Vl(Zi.s,oa.s,e),s=Vl(Zi.l,oa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new jt;jt.NAMES=g_;let aM=0;class Vo extends Hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=zo(),this.name="",this.blending=Ts,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class v_ extends Vo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new Z,aa=new fe;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gh,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=js(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=js(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=js(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=js(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}}class x_ extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class S_ extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Wr extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lM=0;const Pn=new Pe,oc=new dn,cs=new Z,vn=new Ho,Qs=new Ho,Ne=new Z;class Vi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h_(t)?S_:x_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wr(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(vn.min,Qs.min),vn.expandByPoint(Ne),Ne.addVectors(vn.max,Qs.max),vn.expandByPoint(Ne)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ne.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),Ne.add(cs)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Z,l[D]=new Z;const c=new Z,u=new Z,f=new Z,h=new fe,d=new fe,g=new fe,_=new Z,m=new Z;function p(D,S,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[S].add(_),a[M].add(_),l[D].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,S=y.length;D<S;++D){const M=y[D],L=M.start,N=M.count;for(let F=L,$=L+N;F<$;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new Z,v=new Z,R=new Z,C=new Z;function A(D){R.fromBufferAttribute(r,D),C.copy(R);const S=a[D];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(C,S);const L=v.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,S=y.length;D<S;++D){const M=y[D],L=M.start,N=M.count;for(let F=L,$=L+N;F<$;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new Pe,br=new m_,la=new ml,ad=new Z,ca=new Z,ua=new Z,fa=new Z,ac=new Z,ha=new Z,ld=new Z,da=new Z;class Di extends dn{constructor(t=new Vi,e=new v_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ac.fromBufferAttribute(f,t),o?ha.addScaledVector(ac,u):ha.addScaledVector(ac.sub(e),u))}e.add(ha)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),br.copy(t.ray).recast(t.near),!(la.containsPoint(br.origin)===!1&&(br.intersectSphere(la,ad)===null||br.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(od.copy(s).invert(),br.copy(t.ray).applyMatrix4(od),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=E;v<R;v+=3){const C=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);r=pa(this,p,t,i,c,u,f,C,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=pa(this,o,t,i,c,u,f,y,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,R=E;v<R;v+=3){const C=v,A=v+1,D=v+2;r=pa(this,p,t,i,c,u,f,C,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,v=m+2;r=pa(this,o,t,i,c,u,f,y,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function cM(n,t,e,i,r,s,o,a){let l;if(t.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===hr,a),l===null)return null;da.copy(a),da.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:n}}function pa(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,ca),n.getVertexPosition(l,ua),n.getVertexPosition(c,fa);const u=cM(n,t,e,i,ca,ua,fa,ld);if(u){const f=new Z;Vn.getBarycoord(ld,ca,ua,fa,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new fe)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new fe)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Z,materialIndex:0};Vn.getNormal(ca,ua,fa,h.normal),u.face=h,u.barycoord=f}return u}class Go extends Vi{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wr(c,3)),this.setAttribute("normal",new Wr(u,3)),this.setAttribute("uv",new Wr(f,2));function g(_,m,p,y,E,v,R,C,A,D,S){const M=v/A,L=R/D,N=v/2,F=R/2,$=C/2,V=A+1,H=D+1;let X=0,k=0;const ut=new Z;for(let _t=0;_t<H;_t++){const Et=_t*L-F;for(let Ct=0;Ct<V;Ct++){const Kt=Ct*M-N;ut[_]=Kt*y,ut[m]=Et*E,ut[p]=$,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=C>0?1:-1,u.push(ut.x,ut.y,ut.z),f.push(Ct/A),f.push(1-_t/D),X+=1}}for(let _t=0;_t<D;_t++)for(let Et=0;Et<A;Et++){const Ct=h+Et+V*_t,Kt=h+Et+V*(_t+1),nt=h+(Et+1)+V*(_t+1),ct=h+(Et+1)+V*_t;l.push(Ct,Kt,ct),l.push(Kt,nt,ct),k+=6}a.addGroup(d,k,S),d+=k,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=zs(n[e]);for(const r in i)t[r]=i[r]}return t}function uM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function M_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const fM={clone:zs,merge:Ke};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Vo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class y_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new Z,cd=new fe,ud=new fe;class In extends y_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cu*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,cd,ud),e.subVectors(ud,cd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class pM extends dn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(us,fs,t,e);r.layers=this.layers,this.add(r);const s=new In(us,fs,t,e);s.layers=this.layers,this.add(s);const o=new In(us,fs,t,e);o.layers=this.layers,this.add(o);const a=new In(us,fs,t,e);a.layers=this.layers,this.add(a);const l=new In(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new In(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class E_ extends hn{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends qr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new E_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Go(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:or});s.uniforms.tEquirect.value=e;const o=new Di(r,s),a=e.minFilter;return e.minFilter===Or&&(e.minFilter=oi),new pM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const lc=new Z,_M=new Z,gM=new Wt;class Pr{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=lc.subVectors(i,e).cross(_M.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gM.getNormalMatrix(t),r=this.coplanarPoint(lc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new ml,ma=new Z;class b_{constructor(t=new Pr,e=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-d,v-p).normalize(),i[1].setComponents(l+s,h+c,m+d,v+p).normalize(),i[2].setComponents(l+o,h+u,m+g,v+y).normalize(),i[3].setComponents(l-o,h-u,m-g,v-y).normalize(),i[4].setComponents(l-a,h-f,m-_,v-E).normalize(),e===Pi)i[5].setComponents(l+a,h+f,m+_,v+E).normalize();else if(e===Ka)i[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ma.x=r.normal.x>0?t.max.x:t.min.x,ma.y=r.normal.y>0?t.max.y:t.min.y,ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function vM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class _l extends Vi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const E=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),C=y+1+c*p;d.push(E,v,C),d.push(v,R,C)}this.setIndex(d),this.setAttribute("position",new Wr(g,3)),this.setAttribute("normal",new Wr(_,3)),this.setAttribute("uv",new Wr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.widthSegments,t.heightSegments)}}var xM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
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
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
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
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Ry=`#if defined( USE_POINTS_UV )
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
#endif`,Cy=`float metalnessFactor = metalness;
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iE=`float getShadowMask() {
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
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
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
}`,TE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,AE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,NE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,OE=`#define MATCAP
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
}`,BE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,kE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,VE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,XE=`#define TOON
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
}`,qE=`uniform float size;
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
}`,YE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,jE=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:xM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:yM,alphatest_fragment:EM,alphatest_pars_fragment:bM,aomap_fragment:TM,aomap_pars_fragment:wM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:PM,bsdfs:DM,iridescence_fragment:LM,bumpmap_pars_fragment:IM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:OM,color_fragment:BM,color_pars_fragment:zM,color_pars_vertex:kM,color_vertex:HM,common:VM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:qM,emissivemap_fragment:YM,emissivemap_pars_fragment:$M,colorspace_fragment:jM,colorspace_pars_fragment:KM,envmap_fragment:ZM,envmap_common_pars_fragment:JM,envmap_pars_fragment:QM,envmap_pars_vertex:ty,envmap_physical_pars_fragment:fy,envmap_vertex:ey,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:ly,lights_lambert_pars_fragment:cy,lights_pars_begin:uy,lights_toon_fragment:hy,lights_toon_pars_fragment:dy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:_y,lights_physical_pars_fragment:gy,lights_fragment_begin:vy,lights_fragment_maps:xy,lights_fragment_end:Sy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:by,map_fragment:Ty,map_pars_fragment:wy,map_particle_fragment:Ay,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:Py,morphinstance_vertex:Dy,morphcolor_vertex:Ly,morphnormal_vertex:Iy,morphtarget_pars_vertex:Uy,morphtarget_vertex:Ny,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:By,normal_pars_vertex:zy,normal_vertex:ky,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:qy,packing:Yy,premultiplied_alpha_fragment:$y,project_vertex:jy,dithering_fragment:Ky,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:eE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:aE,specularmap_fragment:lE,specularmap_pars_fragment:cE,tonemapping_fragment:uE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:dE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:_E,worldpos_vertex:gE,background_vert:vE,background_frag:xE,backgroundCube_vert:SE,backgroundCube_frag:ME,cube_vert:yE,cube_frag:EE,depth_vert:bE,depth_frag:TE,distanceRGBA_vert:wE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:PE,linedashed_frag:DE,meshbasic_vert:LE,meshbasic_frag:IE,meshlambert_vert:UE,meshlambert_frag:NE,meshmatcap_vert:FE,meshmatcap_frag:OE,meshnormal_vert:BE,meshnormal_frag:zE,meshphong_vert:kE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:qE,points_frag:YE,shadow_vert:$E,shadow_frag:jE,sprite_vert:KE,sprite_frag:ZE},gt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ni={basic:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ke([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ke([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ke([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ke([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ke([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ke([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ke([gt.common,gt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ke([gt.lights,gt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};ni.physical={uniforms:Ke([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const _a={r:0,b:0,g:0},wr=new zi,JE=new Pe;function QE(n,t,e,i,r,s,o){const a=new jt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===dl)?(u===void 0&&(u=new Di(new Go(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:zs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wr.copy(E.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(wr)),u.material.toneMapped=Zt.getTransfer(v.colorSpace)!==oe,(f!==v||h!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Di(new _l(2,2),new ki({name:"BackgroundMaterial",uniforms:zs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(_a,M_(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function tb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,N,F,$){let V=!1;const H=f(F,N,L);s!==H&&(s=H,c(s.object)),V=d(M,F,N,$),V&&g(M,F,N,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(M,L,N,F),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,N){const F=N.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let V=$[L.id];V===void 0&&(V={},$[L.id]=V);let H=V[F];return H===void 0&&(H=h(l()),V[F]=H),H}function h(M){const L=[],N=[],F=[];for(let $=0;$<e;$++)L[$]=0,N[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,N,F){const $=s.attributes,V=L.attributes;let H=0;const X=N.getAttributes();for(const k in X)if(X[k].location>=0){const _t=$[k];let Et=V[k];if(Et===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),_t===void 0||_t.attribute!==Et||Et&&_t.data!==Et.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(M,L,N,F){const $={},V=L.attributes;let H=0;const X=N.getAttributes();for(const k in X)if(X[k].location>=0){let _t=V[k];_t===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const Et={};Et.attribute=_t,_t&&_t.data&&(Et.data=_t.data),$[k]=Et,H++}s.attributes=$,s.attributesNum=H,s.index=F}function _(){const M=s.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=s.newAttributes,F=s.enabledAttributes,$=s.attributeDivisors;N[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),$[M]!==L&&(n.vertexAttribDivisor(M,L),$[M]=L)}function y(){const M=s.newAttributes,L=s.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function E(M,L,N,F,$,V,H){H===!0?n.vertexAttribIPointer(M,L,N,$,V):n.vertexAttribPointer(M,L,N,F,$,V)}function v(M,L,N,F){_();const $=F.attributes,V=N.getAttributes(),H=L.defaultAttributeValues;for(const X in V){const k=V[X];if(k.location>=0){let ut=$[X];if(ut===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const _t=ut.normalized,Et=ut.itemSize,Ct=t.get(ut);if(Ct===void 0)continue;const Kt=Ct.buffer,nt=Ct.type,ct=Ct.bytesPerElement,bt=nt===n.INT||nt===n.UNSIGNED_INT||ut.gpuType===gf;if(ut.isInterleavedBufferAttribute){const mt=ut.data,Lt=mt.stride,Ft=ut.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<k.locationSize;zt++)p(k.location+zt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<k.locationSize;zt++)m(k.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let zt=0;zt<k.locationSize;zt++)E(k.location+zt,Et/k.locationSize,nt,_t,Lt*ct,(Ft+Et/k.locationSize*zt)*ct,bt)}else{if(ut.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let mt=0;mt<k.locationSize;mt++)E(k.location+mt,Et/k.locationSize,nt,_t,Et*ct,Et/k.locationSize*mt*ct,bt)}}else if(H!==void 0){const _t=H[X];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(k.location,_t);break;case 3:n.vertexAttrib3fv(k.location,_t);break;case 4:n.vertexAttrib4fv(k.location,_t);break;default:n.vertexAttrib1fv(k.location,_t)}}}}y()}function R(){D();for(const M in i){const L=i[M];for(const N in L){const F=L[N];for(const $ in F)u(F[$].object),delete F[$];delete L[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const F=L[N];for(const $ in F)u(F[$].object),delete F[$];delete L[N]}delete i[M.id]}function A(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const F=N[M.id];for(const $ in F)u(F[$].object),delete F[$];delete N[M.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function eb(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nb(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Bi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function ib(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Pr,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,E,d);for(let R=0;R!==E;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function rb(n){let t=new WeakMap;function e(o,a){return a===Qc?o.mapping=Ns:a===tu&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===tu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class sb extends y_{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,fd=[.125,.215,.35,.446,.526,.582],Ur=20,cc=new sb,hd=new jt;let uc=null,fc=0,hc=0,dc=!1;const Dr=(1+Math.sqrt(5))/2,hs=1/Dr,dd=[new Z(-Dr,hs,0),new Z(Dr,hs,0),new Z(-hs,0,Dr),new Z(hs,0,Dr),new Z(0,Dr,-hs),new Z(0,Dr,hs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,fc,hc),this._renderer.xr.enabled=dc,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Bo,format:Wn,colorSpace:ks,depthBuffer:!1},r=md(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(s)),this._blurMaterial=ab(s,t,e)}return r}_compileMaterial(t){const e=new Di(this._lodPlanes[0],t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,i,r){const a=new In(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(hd),u.toneMapping=ar,u.autoClear=!1;const d=new v_({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Di(new Go,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(hd),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;ga(r,y*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ns||t.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,cc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dd[(r-s-1)%dd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Di(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let y=0;for(let A=0;A<Ur;++A){const D=A/_,S=Math.exp(-D*D/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const v=this._sizeLods[r],R=3*v*(r>E-gs?r-E+gs:0),C=4*(this._cubeSize-v);ga(e,R,C,3*v,2*v),l.setRenderTarget(e),l.render(f,cc)}}function ob(n){const t=[],e=[],i=[];let r=n;const s=n-gs+1+fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-gs?l=fd[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,D=C>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(S,_*g*C),E.set(h,m*g*C);const M=[C,C,C,C,C,C];v.set(M,p*g*C)}const R=new Vi;R.setAttribute("position",new on(y,_)),R.setAttribute("uv",new on(E,m)),R.setAttribute("faceIndex",new on(v,p)),t.push(R),r>gs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function md(n,t,e){const i=new qr(n,t,e);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ab(n,t,e){const i=new Float32Array(Ur),r=new Z(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function _d(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function gd(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ef(){return`

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
	`}function lb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===tu,u=l===Ns||l===Fs;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new pd(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new pd(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function cb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ub(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let E=0,v=y.length;E<v;E+=3){const R=y[E+0],C=y[E+1],A=y[E+2];h.push(R,C,C,A,A,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const R=E+0,C=E+1,A=E+2;h.push(R,C,C,A,A,R)}}else return;const m=new(h_(h)?S_:x_)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function fb(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function db(n,t,e){const i=new WeakMap,r=new Ce;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*C*4*f),D=new p_(A,R,C,f);D.type=Ci,D.needsUpdate=!0;const S=v*4;for(let L=0;L<f;L++){const N=p[L],F=y[L],$=E[L],V=R*C*4*L;for(let H=0;H<N.count;H++){const X=H*S;g===!0&&(r.fromBufferAttribute(N,H),A[V+X+0]=r.x,A[V+X+1]=r.y,A[V+X+2]=r.z,A[V+X+3]=0),_===!0&&(r.fromBufferAttribute(F,H),A[V+X+4]=r.x,A[V+X+5]=r.y,A[V+X+6]=r.z,A[V+X+7]=0),m===!0&&(r.fromBufferAttribute($,H),A[V+X+8]=r.x,A[V+X+9]=r.y,A[V+X+10]=r.z,A[V+X+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new fe(R,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function pb(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class w_ extends hn{constructor(t,e,i,r,s,o,a,l,c,u=ws){if(u!==ws&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=Xr),i===void 0&&u===Bs&&(i=Os),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const A_=new hn,vd=new w_(1,1),R_=new p_,C_=new QS,P_=new E_,xd=[],Sd=[],Md=new Float32Array(16),yd=new Float32Array(9),Ed=new Float32Array(4);function Vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xd[r];if(s===void 0&&(s=new Float32Array(r),xd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gl(n,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function vb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function xb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),Ue(e,i)}}function Sb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;yd.set(i),n.uniformMatrix3fv(this.addr,!1,yd),Ue(e,i)}}function Mb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),Ue(e,i)}}function yb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Eb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function Tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function wb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function Rb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function Cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function Pb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vd.compareFunction=f_,s=vd):s=A_,e.setTexture2D(t||s,r)}function Db(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||C_,r)}function Lb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||P_,r)}function Ib(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||R_,r)}function Ub(n){switch(n){case 5126:return mb;case 35664:return _b;case 35665:return gb;case 35666:return vb;case 35674:return xb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return yb;case 35667:case 35671:return Eb;case 35668:case 35672:return bb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Nb(n,t){n.uniform1fv(this.addr,t)}function Fb(n,t){const e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ob(n,t){const e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function Bb(n,t){const e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function zb(n,t){const e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function kb(n,t){const e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hb(n,t){const e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vb(n,t){n.uniform1iv(this.addr,t)}function Gb(n,t){n.uniform2iv(this.addr,t)}function Wb(n,t){n.uniform3iv(this.addr,t)}function Xb(n,t){n.uniform4iv(this.addr,t)}function qb(n,t){n.uniform1uiv(this.addr,t)}function Yb(n,t){n.uniform2uiv(this.addr,t)}function $b(n,t){n.uniform3uiv(this.addr,t)}function jb(n,t){n.uniform4uiv(this.addr,t)}function Kb(n,t,e){const i=this.cache,r=t.length,s=gl(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||A_,s[o])}function Zb(n,t,e){const i=this.cache,r=t.length,s=gl(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||C_,s[o])}function Jb(n,t,e){const i=this.cache,r=t.length,s=gl(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||P_,s[o])}function Qb(n,t,e){const i=this.cache,r=t.length,s=gl(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),Ue(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||R_,s[o])}function tT(n){switch(n){case 5126:return Nb;case 35664:return Fb;case 35665:return Ob;case 35666:return Bb;case 35674:return zb;case 35675:return kb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return $b;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}class eT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ub(e.type)}}class nT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tT(e.type)}}class iT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function bd(n,t){n.seq.push(t),n.map[t.id]=t}function rT(n,t,e){const i=n.name,r=i.length;for(pc.lastIndex=0;;){const s=pc.exec(i),o=pc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bd(e,c===void 0?new eT(a,n,t):new nT(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new iT(a),bd(e,f)),e=f}}}class Ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);rT(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Td(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sT=37297;let oT=0;function aT(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const wd=new Wt;function lT(n){Zt._getMatrix(wd,Zt.workingColorSpace,n);const t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case pl:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ad(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+aT(n.getShaderSource(t),o)}else return r}function cT(n,t){const e=lT(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uT(n,t){let e;switch(t){case TS:e="Linear";break;case wS:e="Reinhard";break;case AS:e="Cineon";break;case RS:e="ACESFilmic";break;case PS:e="AgX";break;case DS:e="Neutral";break;case CS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new Z;function fT(){Zt.getLuminanceCoefficients(va);const n=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function dT(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pT(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function so(n){return n!==""}function Rd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(n){return n.replace(mT,gT)}const _T=new Map;function gT(n,t){let e=Xt[t];if(e===void 0){const i=_T.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pu(e)}const vT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(n){return n.replace(vT,xT)}function xT(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ST(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rS?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function MT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Fs:t="ENVMAP_TYPE_CUBE";break;case dl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function ET(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qm:t="ENVMAP_BLENDING_MULTIPLY";break;case ES:t="ENVMAP_BLENDING_MIX";break;case bS:t="ENVMAP_BLENDING_ADD";break}return t}function bT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function TT(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ST(e),c=MT(e),u=yT(e),f=ET(e),h=bT(e),d=hT(e),g=dT(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ar?"#define TONE_MAPPING":"",e.toneMapping!==ar?Xt.tonemapping_pars_fragment:"",e.toneMapping!==ar?uT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,cT("linearToOutputTexel",e.outputColorSpace),fT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=Pu(o),o=Rd(o,e),o=Cd(o,e),a=Pu(a),a=Rd(a,e),a=Cd(a,e),o=Pd(o),a=Pd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,v=y+p+a,R=Td(r,r.VERTEX_SHADER,E),C=Td(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(C).trim();let V=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const X=Ad(r,R,"vertex"),k=Ad(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+X+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||$==="")&&(H=!1);H&&(L.diagnostics={runnable:V,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(R),r.deleteShader(C),D=new Ua(r,_),S=pT(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,sT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let wT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new RT(t),e.set(t,i)),i}}class RT{constructor(t){this.id=wT++,this.code=t,this.usedTimes=0}}function CT(n,t,e,i,r,s,o){const a=new __,l=new AT,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,N,F){const $=N.fog,V=F.geometry,H=S.isMeshStandardMaterial?N.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),k=X&&X.mapping===dl?X.image.height:null,ut=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Et=_t!==void 0?_t.length:0;let Ct=0;V.morphAttributes.position!==void 0&&(Ct=1),V.morphAttributes.normal!==void 0&&(Ct=2),V.morphAttributes.color!==void 0&&(Ct=3);let Kt,nt,ct,bt;if(ut){const se=ni[ut];Kt=se.vertexShader,nt=se.fragmentShader}else Kt=S.vertexShader,nt=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),bt=l.getFragmentShaderID(S);const mt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,zt=F.isBatchedMesh===!0,xe=!!S.map,P=!!S.matcap,U=!!X,w=!!S.aoMap,rt=!!S.lightMap,J=!!S.bumpMap,Q=!!S.normalMap,it=!!S.displacementMap,ot=!!S.emissiveMap,tt=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,I=S.clearcoat>0,G=S.dispersion>0,q=S.iridescence>0,Y=S.sheen>0,dt=S.transmission>0,at=x&&!!S.anisotropyMap,ft=I&&!!S.clearcoatMap,It=I&&!!S.clearcoatNormalMap,lt=I&&!!S.clearcoatRoughnessMap,vt=q&&!!S.iridescenceMap,Dt=q&&!!S.iridescenceThicknessMap,Nt=Y&&!!S.sheenColorMap,pt=Y&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,kt=!!S.specularColorMap,re=!!S.specularIntensityMap,O=dt&&!!S.transmissionMap,xt=dt&&!!S.thicknessMap,et=!!S.gradientMap,st=!!S.alphaMap,yt=S.alphaTest>0,St=!!S.alphaHash,Vt=!!S.extensions;let we=ar;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(we=n.toneMapping);const ke={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:nt,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:zt,batchingColor:zt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:P,envMap:U,envMapMode:U&&X.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:rt,bumpMap:J,normalMap:Q,displacementMap:h&&it,emissiveMap:ot,normalMapObjectSpace:Q&&S.normalMapType===FS,normalMapTangentSpace:Q&&S.normalMapType===NS,metalnessMap:tt,roughnessMap:b,anisotropy:x,anisotropyMap:at,clearcoat:I,clearcoatMap:ft,clearcoatNormalMap:It,clearcoatRoughnessMap:lt,dispersion:G,iridescence:q,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:pt,specularMap:Ot,specularColorMap:kt,specularIntensityMap:re,transmission:dt,transmissionMap:O,thicknessMap:xt,gradientMap:et,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:St,combine:S.combine,mapUv:xe&&_(S.map.channel),aoMapUv:w&&_(S.aoMap.channel),lightMapUv:rt&&_(S.lightMap.channel),bumpMapUv:J&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:it&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:tt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ot&&_(S.specularMap.channel),specularColorMapUv:kt&&_(S.specularColorMap.channel),specularIntensityMapUv:re&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:xt&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Q||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(xe||st),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ri,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let L;if(M){const N=ni[M];L=fM.clone(N.uniforms)}else L=S.uniforms;return L}function R(S,M){let L;for(let N=0,F=u.length;N<F;N++){const $=u[N];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new TT(n,M,S,s),u.push(L)),L}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:D}}function PT(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function DT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ld(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Id(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||DT),i.length>1&&i.sort(h||Ld),r.length>1&&r.sort(h||Ld)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function LT(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Id,n.set(i,[o])):r>=s.length?(o=new Id,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function IT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new jt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function UT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let NT=0;function FT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function OT(n){const t=new IT,e=UT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Pe,o=new Pe;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,E=0,v=0,R=0,C=0,A=0;c.sort(FT);for(let S=0,M=c.length;S<M;S++){const L=c[S],N=L.color,F=L.intensity,$=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*F,f+=N.g*F,h+=N.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],F);A++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=$,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;const X=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,X.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=V,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=A,i.version=NT++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ud(n){const t=new OT(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BT(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ud(n),t.set(r,[a])):s>=o.length?(a=new Ud(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class zT extends Vo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kT extends Vo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
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
}`;function GT(n,t,e){let i=new b_;const r=new fe,s=new fe,o=new Ce,a=new zT({depthPacking:US}),l=new kT,c={},u=e.maxTextureSize,f={[hr]:fn,[fn]:hr,[Ri]:Ri},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:HT,fragmentShader:VT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vi;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Di(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm;let p=this.type;this.render=function(C,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(or),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==Si&&this.type===Si,$=p===Si&&this.type!==Si;for(let V=0,H=C.length;V<H;V++){const X=C[V],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ut=k.getFrameExtents();if(r.multiply(ut),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ut.x),r.x=s.x*ut.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ut.y),r.y=s.y*ut.y,k.mapSize.y=s.y)),k.map===null||F===!0||$===!0){const Et=this.type!==Si?{minFilter:qn,magFilter:qn}:{};k.map!==null&&k.map.dispose(),k.map=new qr(r.x,r.y,Et),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const _t=k.getViewportCount();for(let Et=0;Et<_t;Et++){const Ct=k.getViewport(Et);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),N.viewport(o),k.updateMatrices(X,Et),i=k.getFrustum(),v(A,D,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Si&&y(k,D),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function y(C,A){const D=t.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,D,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,D,d,_,null)}function E(C,A,D,S){let M=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,F=A.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let V=$[F];V===void 0&&(V=M.clone(),$[F]=V,A.addEventListener("dispose",R)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Si?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=D}return M}function v(C,A,D,S,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=t.update(C),$=C.material;if(Array.isArray($)){const V=F.groups;for(let H=0,X=V.length;H<X;H++){const k=V[H],ut=$[k.materialIndex];if(ut&&ut.visible){const _t=E(C,ut,S,M);C.onBeforeShadow(n,C,A,D,F,_t,k),n.renderBufferDirect(D,null,F,_t,C,k),C.onAfterShadow(n,C,A,D,F,_t,k)}}}else if($.visible){const V=E(C,$,S,M);C.onBeforeShadow(n,C,A,D,F,V,null),n.renderBufferDirect(D,null,F,V,C,null),C.onAfterShadow(n,C,A,D,F,V,null)}}const N=C.children;for(let F=0,$=N.length;F<$;F++)v(N[F],A,D,S,M)}function R(C){C.target.removeEventListener("dispose",R);for(const D in c){const S=c[D],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const WT={[qc]:Yc,[$c]:Zc,[jc]:Jc,[Us]:Kc,[Yc]:qc,[Zc]:$c,[Jc]:jc,[Kc]:Us};function XT(n,t){function e(){let O=!1;const xt=new Ce;let et=null;const st=new Ce(0,0,0,0);return{setMask:function(yt){et!==yt&&!O&&(n.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){O=yt},setClear:function(yt,St,Vt,we,ke){ke===!0&&(yt*=we,St*=we,Vt*=we),xt.set(yt,St,Vt,we),st.equals(xt)===!1&&(n.clearColor(yt,St,Vt,we),st.copy(xt))},reset:function(){O=!1,et=null,st.set(-1,0,0,0)}}}function i(){let O=!1,xt=!1,et=null,st=null,yt=null;return{setReversed:function(St){if(xt!==St){const Vt=t.get("EXT_clip_control");xt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const we=yt;yt=null,this.setClear(we)}xt=St},getReversed:function(){return xt},setTest:function(St){St?mt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(St){et!==St&&!O&&(n.depthMask(St),et=St)},setFunc:function(St){if(xt&&(St=WT[St]),st!==St){switch(St){case qc:n.depthFunc(n.NEVER);break;case Yc:n.depthFunc(n.ALWAYS);break;case $c:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case jc:n.depthFunc(n.EQUAL);break;case Kc:n.depthFunc(n.GEQUAL);break;case Zc:n.depthFunc(n.GREATER);break;case Jc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=St}},setLocked:function(St){O=St},setClear:function(St){yt!==St&&(xt&&(St=1-St),n.clearDepth(St),yt=St)},reset:function(){O=!1,et=null,st=null,yt=null,xt=!1}}}function r(){let O=!1,xt=null,et=null,st=null,yt=null,St=null,Vt=null,we=null,ke=null;return{setTest:function(se){O||(se?mt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(se){xt!==se&&!O&&(n.stencilMask(se),xt=se)},setFunc:function(se,On,fi){(et!==se||st!==On||yt!==fi)&&(n.stencilFunc(se,On,fi),et=se,st=On,yt=fi)},setOp:function(se,On,fi){(St!==se||Vt!==On||we!==fi)&&(n.stencilOp(se,On,fi),St=se,Vt=On,we=fi)},setLocked:function(se){O=se},setClear:function(se){ke!==se&&(n.clearStencil(se),ke=se)},reset:function(){O=!1,xt=null,et=null,st=null,yt=null,St=null,Vt=null,we=null,ke=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,R=null,C=null,A=new jt(0,0,0),D=0,S=!1,M=null,L=null,N=null,F=null,$=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=X>=2);let ut=null,_t={};const Et=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Kt=new Ce().fromArray(Et),nt=new Ce().fromArray(Ct);function ct(O,xt,et,st){const yt=new Uint8Array(4),St=n.createTexture();n.bindTexture(O,St),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<et;Vt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(xt+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return St}const bt={};bt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(Us),J(!1),Q(zh),mt(n.CULL_FACE),w(or);function mt(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Lt(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ft(O,xt){return f[O]!==xt?(n.bindFramebuffer(O,xt),f[O]=xt,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xt),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function zt(O,xt){let et=d,st=!1;if(O){et=h.get(xt),et===void 0&&(et=[],h.set(xt,et));const yt=O.textures;if(et.length!==yt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Vt=yt.length;St<Vt;St++)et[St]=n.COLOR_ATTACHMENT0+St;et.length=yt.length,st=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,st=!0);st&&n.drawBuffers(et)}function xe(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const P={[Ir]:n.FUNC_ADD,[oS]:n.FUNC_SUBTRACT,[aS]:n.FUNC_REVERSE_SUBTRACT};P[lS]=n.MIN,P[cS]=n.MAX;const U={[uS]:n.ZERO,[fS]:n.ONE,[hS]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[vS]:n.SRC_ALPHA_SATURATE,[_S]:n.DST_COLOR,[pS]:n.DST_ALPHA,[dS]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[gS]:n.ONE_MINUS_DST_COLOR,[mS]:n.ONE_MINUS_DST_ALPHA,[xS]:n.CONSTANT_COLOR,[SS]:n.ONE_MINUS_CONSTANT_COLOR,[MS]:n.CONSTANT_ALPHA,[yS]:n.ONE_MINUS_CONSTANT_ALPHA};function w(O,xt,et,st,yt,St,Vt,we,ke,se){if(O===or){_===!0&&(Lt(n.BLEND),_=!1);return}if(_===!1&&(mt(n.BLEND),_=!0),O!==sS){if(O!==m||se!==S){if((p!==Ir||v!==Ir)&&(n.blendEquation(n.FUNC_ADD),p=Ir,v=Ir),se)switch(O){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,R=null,C=null,A.set(0,0,0),D=0,m=O,S=se}return}yt=yt||xt,St=St||et,Vt=Vt||st,(xt!==p||yt!==v)&&(n.blendEquationSeparate(P[xt],P[yt]),p=xt,v=yt),(et!==y||st!==E||St!==R||Vt!==C)&&(n.blendFuncSeparate(U[et],U[st],U[St],U[Vt]),y=et,E=st,R=St,C=Vt),(we.equals(A)===!1||ke!==D)&&(n.blendColor(we.r,we.g,we.b,ke),A.copy(we),D=ke),m=O,S=!1}function rt(O,xt){O.side===Ri?Lt(n.CULL_FACE):mt(n.CULL_FACE);let et=O.side===fn;xt&&(et=!et),J(et),O.blending===Ts&&O.transparent===!1?w(or):w(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const st=O.stencilWrite;a.setTest(st),st&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function Q(O){O!==nS?(mt(n.CULL_FACE),O!==L&&(O===zh?n.cullFace(n.BACK):O===iS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),L=O}function it(O){O!==N&&(H&&n.lineWidth(O),N=O)}function ot(O,xt,et){O?(mt(n.POLYGON_OFFSET_FILL),(F!==xt||$!==et)&&(n.polygonOffset(xt,et),F=xt,$=et)):Lt(n.POLYGON_OFFSET_FILL)}function tt(O){O?mt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+V-1),ut!==O&&(n.activeTexture(O),ut=O)}function x(O,xt,et){et===void 0&&(ut===null?et=n.TEXTURE0+V-1:et=ut);let st=_t[et];st===void 0&&(st={type:void 0,texture:void 0},_t[et]=st),(st.type!==O||st.texture!==xt)&&(ut!==et&&(n.activeTexture(et),ut=et),n.bindTexture(O,xt||bt[O]),st.type=O,st.texture=xt)}function I(){const O=_t[ut];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){Kt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Kt.copy(O))}function pt(O){nt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Ot(O,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let st=et.get(O);st===void 0&&(st=n.getUniformBlockIndex(xt,O.name),et.set(O,st))}function kt(O,xt){const st=c.get(xt).get(O);l.get(xt)!==st&&(n.uniformBlockBinding(xt,st,O.__bindingPointIndex),l.set(xt,st))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ut=null,_t={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,E=null,v=null,R=null,C=null,A=new jt(0,0,0),D=0,S=!1,M=null,L=null,N=null,F=null,$=null,Kt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Lt,bindFramebuffer:Ft,drawBuffers:zt,useProgram:xe,setBlending:w,setMaterial:rt,setFlipSided:J,setCullFace:Q,setLineWidth:it,setPolygonOffset:ot,setScissorTest:tt,activeTexture:b,bindTexture:x,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:q,texImage2D:vt,texImage3D:Dt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:It,texStorage3D:lt,texSubImage2D:Y,texSubImage3D:dt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Nt,viewport:pt,reset:re}}function Nd(n,t,e,i){const r=qT(i);switch(e){case r_:return n*t;case o_:return n*t;case a_:return n*t*2;case l_:return n*t/r.components*r.byteLength;case Sf:return n*t/r.components*r.byteLength;case c_:return n*t*2/r.components*r.byteLength;case Mf:return n*t*2/r.components*r.byteLength;case s_:return n*t*3/r.components*r.byteLength;case Wn:return n*t*4/r.components*r.byteLength;case yf:return n*t*4/r.components*r.byteLength;case Ca:case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Da:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ru:case ou:return Math.max(n,16)*Math.max(t,8)/4;case iu:case su:return Math.max(n,8)*Math.max(t,8)/2;case au:case lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _u:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Su:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ia:case bu:case Tu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case u_:case wu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Au:case Ru:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qT(n){switch(n){case Bi:case e_:return{byteLength:1,components:1};case Io:case n_:case Bo:return{byteLength:2,components:1};case vf:case xf:return{byteLength:2,components:4};case Xr:case gf:case Ci:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function YT(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):Za("canvas")}function _(b,x,I){let G=1;const q=tt(b);if((q.width>I||q.height>I)&&(G=I/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(G*q.width),dt=Math.floor(G*q.height);f===void 0&&(f=g(Y,dt));const at=x?g(Y,dt):f;return at.width=Y,at.height=dt,at.getContext("2d").drawImage(b,0,0,Y,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Y+"x"+dt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,I,G,q=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===n.RED&&(I===n.FLOAT&&(Y=n.R32F),I===n.HALF_FLOAT&&(Y=n.R16F),I===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.R8UI),I===n.UNSIGNED_SHORT&&(Y=n.R16UI),I===n.UNSIGNED_INT&&(Y=n.R32UI),I===n.BYTE&&(Y=n.R8I),I===n.SHORT&&(Y=n.R16I),I===n.INT&&(Y=n.R32I)),x===n.RG&&(I===n.FLOAT&&(Y=n.RG32F),I===n.HALF_FLOAT&&(Y=n.RG16F),I===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RG8UI),I===n.UNSIGNED_SHORT&&(Y=n.RG16UI),I===n.UNSIGNED_INT&&(Y=n.RG32UI),I===n.BYTE&&(Y=n.RG8I),I===n.SHORT&&(Y=n.RG16I),I===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),I===n.UNSIGNED_INT&&(Y=n.RGB32UI),I===n.BYTE&&(Y=n.RGB8I),I===n.SHORT&&(Y=n.RGB16I),I===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),I===n.UNSIGNED_INT&&(Y=n.RGBA32UI),I===n.BYTE&&(Y=n.RGBA8I),I===n.SHORT&&(Y=n.RGBA16I),I===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const dt=q?pl:Zt.getTransfer(G);I===n.FLOAT&&(Y=n.RGBA32F),I===n.HALF_FLOAT&&(Y=n.RGBA16F),I===n.UNSIGNED_BYTE&&(Y=dt===oe?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(b,x){let I;return b?x===null||x===Xr||x===Os?I=n.DEPTH24_STENCIL8:x===Ci?I=n.DEPTH32F_STENCIL8:x===Io&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xr||x===Os?I=n.DEPTH_COMPONENT24:x===Ci?I=n.DEPTH_COMPONENT32F:x===Io&&(I=n.DEPTH_COMPONENT16),I}function R(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==qn&&b.minFilter!==oi?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&u.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),M(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const I=b.source,G=h.get(I);if(G){const q=G[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(b),Object.keys(G).length===0&&h.delete(I)}i.remove(b)}function S(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const I=b.source,G=h.get(I);delete G[x.__cacheKey],o.memory.textures--}function M(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let q=0;q<x.__webglFramebuffer[G].length;q++)n.deleteFramebuffer(x.__webglFramebuffer[G][q]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=b.textures;for(let G=0,q=I.length;G<q;G++){const Y=i.get(I[G]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(b)}let L=0;function N(){L=0}function F(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function $(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const I=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(I,b,x);return}}e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function H(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){nt(I,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function X(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){nt(I,b,x);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function k(b,x){const I=i.get(b);if(b.version>0&&I.__version!==b.version){ct(I,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const ut={[eu]:n.REPEAT,[Fr]:n.CLAMP_TO_EDGE,[nu]:n.MIRRORED_REPEAT},_t={[qn]:n.NEAREST,[LS]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[kl]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},Et={[OS]:n.NEVER,[GS]:n.ALWAYS,[BS]:n.LESS,[f_]:n.LEQUAL,[zS]:n.EQUAL,[VS]:n.GEQUAL,[kS]:n.GREATER,[HS]:n.NOTEQUAL};function Ct(b,x){if(x.type===Ci&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===oi||x.magFilter===kl||x.magFilter===Jo||x.magFilter===Or||x.minFilter===oi||x.minFilter===kl||x.minFilter===Jo||x.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ut[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ut[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ut[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_t[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn||x.minFilter!==Jo&&x.minFilter!==Or||x.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(b,x){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const G=x.source;let q=h.get(G);q===void 0&&(q={},h.set(G,q));const Y=$(x);if(Y!==b.__cacheKey){q[Y]===void 0&&(q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),q[Y].usedTimes++;const dt=q[b.__cacheKey];dt!==void 0&&(q[b.__cacheKey].usedTimes--,dt.usedTimes===0&&S(x)),b.__cacheKey=Y,b.__webglTexture=q[Y].texture}return I}function nt(b,x,I){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const q=Kt(b,x),Y=x.source;e.bindTexture(G,b.__webglTexture,n.TEXTURE0+I);const dt=i.get(Y);if(Y.version!==dt.__version||q===!0){e.activeTexture(n.TEXTURE0+I);const at=Zt.getPrimaries(Zt.workingColorSpace),ft=x.colorSpace===tr?null:Zt.getPrimaries(x.colorSpace),It=x.colorSpace===tr||at===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let lt=_(x.image,!1,r.maxTextureSize);lt=ot(x,lt);const vt=s.convert(x.format,x.colorSpace),Dt=s.convert(x.type);let Nt=E(x.internalFormat,vt,Dt,x.colorSpace,x.isVideoTexture);Ct(G,x);let pt;const Ot=x.mipmaps,kt=x.isVideoTexture!==!0,re=dt.__version===void 0||q===!0,O=Y.dataReady,xt=R(x,lt);if(x.isDepthTexture)Nt=v(x.format===Bs,x.type),re&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Nt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,lt.width,lt.height,0,vt,Dt,null));else if(x.isDataTexture)if(Ot.length>0){kt&&re&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,Ot[0].width,Ot[0].height);for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,Dt,pt.data):e.texImage2D(n.TEXTURE_2D,et,Nt,pt.width,pt.height,0,vt,Dt,pt.data);x.generateMipmaps=!1}else kt?(re&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,lt.width,lt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,vt,Dt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,lt.width,lt.height,0,vt,Dt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Nt,Ot[0].width,Ot[0].height,lt.depth);for(let et=0,st=Ot.length;et<st;et++)if(pt=Ot[et],x.format!==Wn)if(vt!==null)if(kt){if(O)if(x.layerUpdates.size>0){const yt=Nd(pt.width,pt.height,x.format,x.type);for(const St of x.layerUpdates){const Vt=pt.data.subarray(St*yt/pt.data.BYTES_PER_ELEMENT,(St+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,St,pt.width,pt.height,1,vt,Vt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,lt.depth,vt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Nt,pt.width,pt.height,lt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,lt.depth,vt,Dt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Nt,pt.width,pt.height,lt.depth,0,vt,Dt,pt.data)}else{kt&&re&&e.texStorage2D(n.TEXTURE_2D,xt,Nt,Ot[0].width,Ot[0].height);for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],x.format!==Wn?vt!==null?kt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Nt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,pt.width,pt.height,vt,Dt,pt.data):e.texImage2D(n.TEXTURE_2D,et,Nt,pt.width,pt.height,0,vt,Dt,pt.data)}else if(x.isDataArrayTexture)if(kt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Nt,lt.width,lt.height,lt.depth),O)if(x.layerUpdates.size>0){const et=Nd(lt.width,lt.height,x.format,x.type);for(const st of x.layerUpdates){const yt=lt.data.subarray(st*et/lt.data.BYTES_PER_ELEMENT,(st+1)*et/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,vt,Dt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,vt,Dt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,lt.width,lt.height,lt.depth,0,vt,Dt,lt.data);else if(x.isData3DTexture)kt?(re&&e.texStorage3D(n.TEXTURE_3D,xt,Nt,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,vt,Dt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,lt.width,lt.height,lt.depth,0,vt,Dt,lt.data);else if(x.isFramebufferTexture){if(re)if(kt)e.texStorage2D(n.TEXTURE_2D,xt,Nt,lt.width,lt.height);else{let et=lt.width,st=lt.height;for(let yt=0;yt<xt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Nt,et,st,0,vt,Dt,null),et>>=1,st>>=1}}else if(Ot.length>0){if(kt&&re){const et=tt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,xt,Nt,et.width,et.height)}for(let et=0,st=Ot.length;et<st;et++)pt=Ot[et],kt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,vt,Dt,pt):e.texImage2D(n.TEXTURE_2D,et,Nt,vt,Dt,pt);x.generateMipmaps=!1}else if(kt){if(re){const et=tt(lt);e.texStorage2D(n.TEXTURE_2D,xt,Nt,et.width,et.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Dt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,vt,Dt,lt);m(x)&&p(G),dt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ct(b,x,I){if(x.image.length!==6)return;const G=Kt(b,x),q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+I);const Y=i.get(q);if(q.version!==Y.__version||G===!0){e.activeTexture(n.TEXTURE0+I);const dt=Zt.getPrimaries(Zt.workingColorSpace),at=x.colorSpace===tr?null:Zt.getPrimaries(x.colorSpace),ft=x.colorSpace===tr||dt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const It=x.isCompressedTexture||x.image[0].isCompressedTexture,lt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!It&&!lt?vt[st]=_(x.image[st],!0,r.maxCubemapSize):vt[st]=lt?x.image[st].image:x.image[st],vt[st]=ot(x,vt[st]);const Dt=vt[0],Nt=s.convert(x.format,x.colorSpace),pt=s.convert(x.type),Ot=E(x.internalFormat,Nt,pt,x.colorSpace),kt=x.isVideoTexture!==!0,re=Y.__version===void 0||G===!0,O=q.dataReady;let xt=R(x,Dt);Ct(n.TEXTURE_CUBE_MAP,x);let et;if(It){kt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ot,Dt.width,Dt.height);for(let st=0;st<6;st++){et=vt[st].mipmaps;for(let yt=0;yt<et.length;yt++){const St=et[yt];x.format!==Wn?Nt!==null?kt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,St.width,St.height,Nt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,St.width,St.height,Nt,pt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,St.width,St.height,0,Nt,pt,St.data)}}}else{if(et=x.mipmaps,kt&&re){et.length>0&&xt++;const st=tt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(lt){kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Nt,pt,vt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,vt[st].width,vt[st].height,0,Nt,pt,vt[st].data);for(let yt=0;yt<et.length;yt++){const Vt=et[yt].image[st].image;kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Vt.width,Vt.height,Nt,pt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,Vt.width,Vt.height,0,Nt,pt,Vt.data)}}else{kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,pt,vt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,Nt,pt,vt[st]);for(let yt=0;yt<et.length;yt++){const St=et[yt];kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Nt,pt,St.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,Nt,pt,St.image[st])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function bt(b,x,I,G,q,Y){const dt=s.convert(I.format,I.colorSpace),at=s.convert(I.type),ft=E(I.internalFormat,dt,at,I.colorSpace),It=i.get(x),lt=i.get(I);if(lt.__renderTarget=x,!It.__hasExternalTextures){const vt=Math.max(1,x.width>>Y),Dt=Math.max(1,x.height>>Y);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,Y,ft,vt,Dt,x.depth,0,dt,at,null):e.texImage2D(q,Y,ft,vt,Dt,0,dt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,q,lt.__webglTexture,0,J(x)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,q,lt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(b,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const G=x.depthTexture,q=G&&G.isDepthTexture?G.type:null,Y=v(x.stencilBuffer,q),dt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=J(x);Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Y,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,b)}else{const G=x.textures;for(let q=0;q<G.length;q++){const Y=G[q],dt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),ft=E(Y.internalFormat,dt,at,Y.colorSpace),It=J(x);I&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,ft,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const q=G.__webglTexture,Y=J(x);if(x.depthTexture.format===ws)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(x.depthTexture.format===Bs)Q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ft(b){const x=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=G}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Lt(x.__webglFramebuffer,b)}else if(I){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),mt(x.__webglDepthbuffer[G],b,!1);else{const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),mt(x.__webglDepthbuffer,b,!1);else{const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(b,x,I){const G=i.get(b);x!==void 0&&bt(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ft(b)}function xe(b){const x=b.texture,I=i.get(b),G=i.get(x);b.addEventListener("dispose",A);const q=b.textures,Y=b.isWebGLCubeRenderTarget===!0,dt=q.length>1;if(dt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[at]=[];for(let ft=0;ft<x.mipmaps.length;ft++)I.__webglFramebuffer[at][ft]=n.createFramebuffer()}else I.__webglFramebuffer[at]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)I.__webglFramebuffer[at]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(dt)for(let at=0,ft=q.length;at<ft;at++){const It=i.get(q[at]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Q(b)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let at=0;at<q.length;at++){const ft=q[at];I.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[at]);const It=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),vt=E(ft.internalFormat,It,lt,ft.colorSpace,b.isXRRenderTarget===!0),Dt=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,vt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,I.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(I.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)bt(I.__webglFramebuffer[at][ft],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else bt(I.__webglFramebuffer[at],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let at=0,ft=q.length;at<ft;at++){const It=q[at],lt=i.get(It);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),Ct(n.TEXTURE_2D,It),bt(I.__webglFramebuffer,b,It,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(It)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,G.__webglTexture),Ct(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)bt(I.__webglFramebuffer[ft],b,x,n.COLOR_ATTACHMENT0,at,ft);else bt(I.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,at,0);m(x)&&p(at),e.unbindTexture()}b.depthBuffer&&Ft(b)}function P(b){const x=b.textures;for(let I=0,G=x.length;I<G;I++){const q=x[I];if(m(q)){const Y=y(b),dt=i.get(q).__webglTexture;e.bindTexture(Y,dt),p(Y),e.unbindTexture()}}}const U=[],w=[];function rt(b){if(b.samples>0){if(Q(b)===!1){const x=b.textures,I=b.width,G=b.height;let q=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(b),at=x.length>1;if(at)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const It=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,q,n.NEAREST),l===!0&&(U.length=0,w.length=0,U.push(n.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const It=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function J(b){return Math.min(r.maxSamples,b.samples)}function Q(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ot(b,x){const I=b.colorSpace,G=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==ks&&I!==tr&&(Zt.getTransfer(I)===oe?(G!==Wn||q!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Q}function $T(n,t){function e(i,r=tr){let s;const o=Zt.getTransfer(r);if(i===Bi)return n.UNSIGNED_BYTE;if(i===vf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return n.BYTE;if(i===n_)return n.SHORT;if(i===Io)return n.UNSIGNED_SHORT;if(i===gf)return n.INT;if(i===Xr)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Bo)return n.HALF_FLOAT;if(i===r_)return n.ALPHA;if(i===s_)return n.RGB;if(i===Wn)return n.RGBA;if(i===o_)return n.LUMINANCE;if(i===a_)return n.LUMINANCE_ALPHA;if(i===ws)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===l_)return n.RED;if(i===Sf)return n.RED_INTEGER;if(i===c_)return n.RG;if(i===Mf)return n.RG_INTEGER;if(i===yf)return n.RGBA_INTEGER;if(i===Ca||i===Pa||i===Da||i===La)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===iu||i===ru||i===su||i===ou)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===lu||i===cu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===au||i===lu)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===_u||i===gu||i===vu||i===xu||i===Su||i===Mu||i===yu||i===Eu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===bu||i===Tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ia)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u_||i===wu||i===Au||i===Ru)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jT extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xa extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
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

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new hn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ki({vertexShader:ZT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Di(new _l(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends Hs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new QT,m=e.getContextAttributes();let p=null,y=null;const E=[],v=[],R=new fe;let C=null;const A=new In;A.viewport=new Ce;const D=new In;D.viewport=new Ce;const S=[A,D],M=new jT;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=E[nt];return ct===void 0&&(ct=new mc,E[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=E[nt];return ct===void 0&&(ct=new mc,E[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=E[nt];return ct===void 0&&(ct=new mc,E[nt]=ct),ct.getHandSpace()};function F(nt){const ct=v.indexOf(nt.inputSource);if(ct===-1)return;const bt=E[ct];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,c||o),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",V);for(let nt=0;nt<E.length;nt++){const ct=v[nt];ct!==null&&(v[nt]=null,E[nt].disconnect(ct))}L=null,N=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,y=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qr(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,bt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Bs:ws,bt=m.stencil?Os:Xr);const Lt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Lt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new qr(h.textureWidth,h.textureHeight,{format:Wn,type:Bi,depthTexture:new w_(h.textureWidth,h.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Kt.setContext(r),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(nt){for(let ct=0;ct<nt.removed.length;ct++){const bt=nt.removed[ct],mt=v.indexOf(bt);mt>=0&&(v[mt]=null,E[mt].disconnect(bt))}for(let ct=0;ct<nt.added.length;ct++){const bt=nt.added[ct];let mt=v.indexOf(bt);if(mt===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=v.length){v.push(bt),mt=Ft;break}else if(v[Ft]===null){v[Ft]=bt,mt=Ft;break}if(mt===-1)break}const Lt=E[mt];Lt&&Lt.connect(bt)}}const H=new Z,X=new Z;function k(nt,ct,bt){H.setFromMatrixPosition(ct.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);const mt=H.distanceTo(X),Lt=ct.projectionMatrix.elements,Ft=bt.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),xe=Lt[14]/(Lt[10]+1),P=(Lt[9]+1)/Lt[5],U=(Lt[9]-1)/Lt[5],w=(Lt[8]-1)/Lt[0],rt=(Ft[8]+1)/Ft[0],J=zt*w,Q=zt*rt,it=mt/(-w+rt),ot=it*-w;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ot),nt.translateZ(it),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Lt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const tt=zt+it,b=xe+it,x=J-ot,I=Q+(mt-ot),G=P*xe/b*tt,q=U*xe/b*tt;nt.projectionMatrix.makePerspective(x,I,G,q,tt,b),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ut(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ct=nt.near,bt=nt.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),M.near=D.near=A.near=ct,M.far=D.far=A.far=bt,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),A.layers.mask=nt.layers.mask|2,D.layers.mask=nt.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const mt=nt.parent,Lt=M.cameras;ut(M,mt);for(let Ft=0;Ft<Lt.length;Ft++)ut(Lt[Ft],mt);Lt.length===2?k(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),_t(nt,M,mt)};function _t(nt,ct,bt){bt===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Cu*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(nt){l=nt,h!==null&&(h.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Et=null;function Ct(nt,ct){if(u=ct.getViewerPose(c||o),g=ct,u!==null){const bt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let mt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Ft=0;Ft<bt.length;Ft++){const zt=bt[Ft];let xe=null;if(d!==null)xe=d.getViewport(zt);else{const U=f.getViewSubImage(h,zt);xe=U.viewport,Ft===0&&(t.setRenderTargetTextures(y,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(y))}let P=S[Ft];P===void 0&&(P=new In,P.layers.enable(Ft),P.viewport=new Ce,S[Ft]=P),P.matrix.fromArray(zt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(zt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(xe.x,xe.y,xe.width,xe.height),Ft===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(P)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ft=f.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,r.renderState)}}for(let bt=0;bt<E.length;bt++){const mt=v[bt],Lt=E[bt];mt!==null&&Lt!==void 0&&Lt.update(mt,ct,c||o)}Et&&Et(nt,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Kt=new T_;Kt.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){Et=nt},this.dispose=function(){}}}const Ar=new zi,e1=new Pe;function n1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,M_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,Ar.copy(v),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Ar)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const v=E.program;i.uniformBlockBinding(y,v)}function c(y,E){let v=r[y.id];v===void 0&&(g(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(y,R);const C=t.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const E=f();y.__bindingPointIndex=E;const v=n.createBuffer(),R=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=r[y.id],v=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,A=v.length;C<A;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(d(L,C,S,R)===!0){const N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let V=0;V<F.length;V++){const H=F[V],X=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+$,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,E,v,R){const C=y.value,A=E+"_"+v;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const D=R[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(y){const E=y.uniforms;let v=0;const R=16;for(let A=0,D=E.length;A<D;A++){const S=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,L=S.length;M<L;M++){const N=S[M],F=Array.isArray(N.value)?N.value:[N.value];for(let $=0,V=F.length;$<V;$++){const H=F[$],X=_(H),k=v%R,ut=k%X.boundary,_t=k+ut;v+=ut,_t!==0&&R-_t<X.storage&&(v+=R-_t),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=X.storage}}}const C=v%R;return C>0&&(v+=R-C),y.__size=v,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class r1{constructor(t={}){const{canvas:e=XS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=ar,this.toneMappingExposure=1;const v=this;let R=!1,C=0,A=0,D=null,S=-1,M=null;const L=new Ce,N=new Ce;let F=null;const $=new jt(0);let V=0,H=e.width,X=e.height,k=1,ut=null,_t=null;const Et=new Ce(0,0,H,X),Ct=new Ce(0,0,H,X);let Kt=!1;const nt=new b_;let ct=!1,bt=!1;const mt=new Pe,Lt=new Pe,Ft=new Z,zt=new Ce,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function U(){return D===null?k:1}let w=i;function rt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_f}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",St,!1),w===null){const B="webgl2";if(w=rt(B,T),w===null)throw rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,Q,it,ot,tt,b,x,I,G,q,Y,dt,at,ft,It,lt,vt,Dt,Nt,pt,Ot,kt,re,O;function xt(){J=new cb(w),J.init(),kt=new $T(w,J),Q=new nb(w,J,t,kt),it=new XT(w,J),Q.reverseDepthBuffer&&h&&it.buffers.depth.setReversed(!0),ot=new hb(w),tt=new PT,b=new YT(w,J,it,tt,Q,kt,ot),x=new rb(v),I=new lb(v),G=new vM(w),re=new tb(w,G),q=new ub(w,G,ot,re),Y=new pb(w,q,G,ot),Nt=new db(w,Q,b),lt=new ib(tt),dt=new CT(v,x,I,J,Q,re,lt),at=new n1(v,tt),ft=new LT,It=new BT(J),Dt=new QE(v,x,I,it,Y,d,l),vt=new GT(v,Y,Q),O=new i1(w,ot,Q,it),pt=new eb(w,J,ot),Ot=new fb(w,J,ot),ot.programs=dt.programs,v.capabilities=Q,v.extensions=J,v.properties=tt,v.renderLists=ft,v.shadowMap=vt,v.state=it,v.info=ot}xt();const et=new t1(v,w);this.xr=et,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(H,X,!1))},this.getSize=function(T){return T.set(H,X)},this.setSize=function(T,B,j=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,X=B,e.width=Math.floor(T*k),e.height=Math.floor(B*k),j===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*k,X*k).floor()},this.setDrawingBufferSize=function(T,B,j){H=T,X=B,k=j,e.width=Math.floor(T*j),e.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,B,j,K){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,B,j,K),it.viewport(L.copy(Et).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,B,j,K){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,B,j,K),it.scissor(N.copy(Ct).multiplyScalar(k).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){it.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){_t=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,B=!0,j=!0){let K=0;if(T){let z=!1;if(D!==null){const ht=D.texture.format;z=ht===yf||ht===Mf||ht===Sf}if(z){const ht=D.texture.type,Mt=ht===Bi||ht===Xr||ht===Io||ht===Os||ht===vf||ht===xf,Tt=Dt.getClearColor(),wt=Dt.getClearAlpha(),Bt=Tt.r,Gt=Tt.g,At=Tt.b;Mt?(g[0]=Bt,g[1]=Gt,g[2]=At,g[3]=wt,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Bt,_[1]=Gt,_[2]=At,_[3]=wt,w.clearBufferiv(w.COLOR,0,_))}else K|=w.COLOR_BUFFER_BIT}B&&(K|=w.DEPTH_BUFFER_BIT),j&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ft.dispose(),It.dispose(),tt.dispose(),x.dispose(),I.dispose(),Y.dispose(),re.dispose(),O.dispose(),dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",bf),et.removeEventListener("sessionend",Tf),pr.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ot.autoReset,B=vt.enabled,j=vt.autoUpdate,K=vt.needsUpdate,z=vt.type;xt(),ot.autoReset=T,vt.enabled=B,vt.autoUpdate=j,vt.needsUpdate=K,vt.type=z}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){const B=T.target;B.removeEventListener("dispose",Vt),we(B)}function we(T){ke(T),tt.remove(T)}function ke(T){const B=tt.get(T).programs;B!==void 0&&(B.forEach(function(j){dt.releaseProgram(j)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,K,z,ht){B===null&&(B=xe);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=D_(T,B,j,K,z);it.setMaterial(K,Mt);let wt=j.index,Bt=1;if(K.wireframe===!0){if(wt=q.getWireframeAttribute(j),wt===void 0)return;Bt=2}const Gt=j.drawRange,At=j.attributes.position;let Jt=Gt.start*Bt,he=(Gt.start+Gt.count)*Bt;ht!==null&&(Jt=Math.max(Jt,ht.start*Bt),he=Math.min(he,(ht.start+ht.count)*Bt)),wt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,wt.count)):At!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,At.count));const _e=he-Jt;if(_e<0||_e===1/0)return;re.setup(z,K,Tt,j,wt);let tn,te=pt;if(wt!==null&&(tn=G.get(wt),te=Ot,te.setIndex(tn)),z.isMesh)K.wireframe===!0?(it.setLineWidth(K.wireframeLinewidth*U()),te.setMode(w.LINES)):te.setMode(w.TRIANGLES);else if(z.isLine){let Pt=K.linewidth;Pt===void 0&&(Pt=1),it.setLineWidth(Pt*U()),z.isLineSegments?te.setMode(w.LINES):z.isLineLoop?te.setMode(w.LINE_LOOP):te.setMode(w.LINE_STRIP)}else z.isPoints?te.setMode(w.POINTS):z.isSprite&&te.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pt=z._multiDrawStarts,hi=z._multiDrawCounts,ee=z._multiDrawCount,Bn=wt?G.get(wt).bytesPerElement:1,Kr=tt.get(K).currentProgram.getUniforms();for(let _n=0;_n<ee;_n++)Kr.setValue(w,"_gl_DrawID",_n),te.render(Pt[_n]/Bn,hi[_n])}else if(z.isInstancedMesh)te.renderInstances(Jt,_e,z.count);else if(j.isInstancedBufferGeometry){const Pt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hi=Math.min(j.instanceCount,Pt);te.renderInstances(Jt,_e,hi)}else te.render(Jt,_e)};function se(T,B,j){T.transparent===!0&&T.side===Ri&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Xo(T,B,j),T.side=hr,T.needsUpdate=!0,Xo(T,B,j),T.side=Ri):Xo(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=It.get(j),p.init(B),E.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==j&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const K=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ht=z.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const Tt=ht[Mt];se(Tt,j,z),K.add(Tt)}else se(ht,j,z),K.add(ht)}),E.pop(),p=null,K},this.compileAsync=function(T,B,j=null){const K=this.compile(T,B,j);return new Promise(z=>{function ht(){if(K.forEach(function(Mt){tt.get(Mt).currentProgram.isReady()&&K.delete(Mt)}),K.size===0){z(T);return}setTimeout(ht,10)}J.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let On=null;function fi(T){On&&On(T)}function bf(){pr.stop()}function Tf(){pr.start()}const pr=new T_;pr.setAnimationLoop(fi),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(T){On=T,et.setAnimationLoop(T),T===null?pr.stop():pr.start()},et.addEventListener("sessionstart",bf),et.addEventListener("sessionend",Tf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(B),B=et.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,D),p=It.get(T,E.length),p.init(B),E.push(p),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),nt.setFromProjectionMatrix(Lt),bt=this.localClippingEnabled,ct=lt.init(this.clippingPlanes,bt),m=ft.get(T,y.length),m.init(),y.push(m),et.enabled===!0&&et.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&vl(ht,B,-1/0,v.sortObjects)}vl(T,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,_t),P=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,P&&Dt.addToRenderList(m,T),this.info.render.frame++,ct===!0&&lt.beginShadows();const j=p.state.shadowsArray;vt.render(j,T,B),ct===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ht=B.cameras;if(z.length>0)for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const wt=ht[Mt];Af(K,z,T,wt)}P&&Dt.render(T);for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const wt=ht[Mt];wf(m,T,wt,wt.viewport)}}else z.length>0&&Af(K,z,T,B),P&&Dt.render(T),wf(m,T,B);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,B),re.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ct===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vl(T,B,j,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){K&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);const Mt=Y.update(T),Tt=T.material;Tt.visible&&m.push(T,Mt,Tt,j,zt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const Mt=Y.update(T),Tt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),zt.copy(Mt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(Tt)){const wt=Mt.groups;for(let Bt=0,Gt=wt.length;Bt<Gt;Bt++){const At=wt[Bt],Jt=Tt[At.materialIndex];Jt&&Jt.visible&&m.push(T,Mt,Jt,j,zt.z,At)}}else Tt.visible&&m.push(T,Mt,Tt,j,zt.z,null)}}const ht=T.children;for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++)vl(ht[Mt],B,j,K)}function wf(T,B,j,K){const z=T.opaque,ht=T.transmissive,Mt=T.transparent;p.setupLightsView(j),ct===!0&&lt.setGlobalState(v.clippingPlanes,j),K&&it.viewport(L.copy(K)),z.length>0&&Wo(z,B,j),ht.length>0&&Wo(ht,B,j),Mt.length>0&&Wo(Mt,B,j),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Af(T,B,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new qr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Bo:Bi,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[K.id],Mt=K.viewport||L;ht.setSize(Mt.z,Mt.w);const Tt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor($),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),P&&Dt.render(j);const wt=v.toneMapping;v.toneMapping=ar;const Bt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ct===!0&&lt.setGlobalState(v.clippingPlanes,K),Wo(T,j,K),b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht),J.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,Jt=B.length;At<Jt;At++){const he=B[At],_e=he.object,tn=he.geometry,te=he.material,Pt=he.group;if(te.side===Ri&&_e.layers.test(K.layers)){const hi=te.side;te.side=fn,te.needsUpdate=!0,Rf(_e,j,K,tn,te,Pt),te.side=hi,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht))}v.setRenderTarget(Tt),v.setClearColor($,V),Bt!==void 0&&(K.viewport=Bt),v.toneMapping=wt}function Wo(T,B,j){const K=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ht=T.length;z<ht;z++){const Mt=T[z],Tt=Mt.object,wt=Mt.geometry,Bt=K===null?Mt.material:K,Gt=Mt.group;Tt.layers.test(j.layers)&&Rf(Tt,B,j,wt,Bt,Gt)}}function Rf(T,B,j,K,z,ht){T.onBeforeRender(v,B,j,K,z,ht),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,B,j,K,T,ht),z.transparent===!0&&z.side===Ri&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,v.renderBufferDirect(j,B,K,z,T,ht),z.side=hr,z.needsUpdate=!0,v.renderBufferDirect(j,B,K,z,T,ht),z.side=Ri):v.renderBufferDirect(j,B,K,z,T,ht),T.onAfterRender(v,B,j,K,z,ht)}function Xo(T,B,j){B.isScene!==!0&&(B=xe);const K=tt.get(T),z=p.state.lights,ht=p.state.shadowsArray,Mt=z.state.version,Tt=dt.getParameters(T,z.state,ht,B,j),wt=dt.getProgramCacheKey(Tt);let Bt=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?I:x).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Vt),Bt=new Map,K.programs=Bt);let Gt=Bt.get(wt);if(Gt!==void 0){if(K.currentProgram===Gt&&K.lightsStateVersion===Mt)return Pf(T,Tt),Gt}else Tt.uniforms=dt.getUniforms(T),T.onBeforeCompile(Tt,v),Gt=dt.acquireProgram(Tt,wt),Bt.set(wt,Gt),K.uniforms=Tt.uniforms;const At=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=lt.uniform),Pf(T,Tt),K.needsLights=I_(T),K.lightsStateVersion=Mt,K.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Gt,K.uniformsList=null,Gt}function Cf(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ua.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Pf(T,B){const j=tt.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function D_(T,B,j,K,z){B.isScene!==!0&&(B=xe),b.resetTextureUnits();const ht=B.fog,Mt=K.isMeshStandardMaterial?B.environment:null,Tt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ks,wt=(K.isMeshStandardMaterial?I:x).get(K.envMap||Mt),Bt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Gt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),At=!!j.morphAttributes.position,Jt=!!j.morphAttributes.normal,he=!!j.morphAttributes.color;let _e=ar;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_e=v.toneMapping);const tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=tn!==void 0?tn.length:0,Pt=tt.get(K),hi=p.state.lights;if(ct===!0&&(bt===!0||T!==M)){const Rn=T===M&&K.id===S;lt.setState(K,T,Rn)}let ee=!1;K.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==hi.state.version||Pt.outputColorSpace!==Tt||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==wt||K.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==lt.numPlanes||Pt.numIntersection!==lt.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Gt||Pt.morphTargets!==At||Pt.morphNormals!==Jt||Pt.morphColors!==he||Pt.toneMapping!==_e||Pt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Pt.__version=K.version);let Bn=Pt.currentProgram;ee===!0&&(Bn=Xo(K,B,z));let Kr=!1,_n=!1,Gs=!1;const ge=Bn.getUniforms(),jn=Pt.uniforms;if(it.useProgram(Bn.program)&&(Kr=!0,_n=!0,Gs=!0),K.id!==S&&(S=K.id,_n=!0),Kr||M!==T){it.buffers.depth.getReversed()?(mt.copy(T.projectionMatrix),YS(mt),$S(mt),ge.setValue(w,"projectionMatrix",mt)):ge.setValue(w,"projectionMatrix",T.projectionMatrix),ge.setValue(w,"viewMatrix",T.matrixWorldInverse);const Gi=ge.map.cameraPosition;Gi!==void 0&&Gi.setValue(w,Ft.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&ge.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,_n=!0,Gs=!0)}if(z.isSkinnedMesh){ge.setOptional(w,z,"bindMatrix"),ge.setOptional(w,z,"bindMatrixInverse");const Rn=z.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),ge.setValue(w,"boneTexture",Rn.boneTexture,b))}z.isBatchedMesh&&(ge.setOptional(w,z,"batchingTexture"),ge.setValue(w,"batchingTexture",z._matricesTexture,b),ge.setOptional(w,z,"batchingIdTexture"),ge.setValue(w,"batchingIdTexture",z._indirectTexture,b),ge.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(w,"batchingColorTexture",z._colorsTexture,b));const Ws=j.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Nt.update(z,j,Bn),(_n||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,ge.setValue(w,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(jn.envMap.value=wt,jn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(jn.envMapIntensity.value=B.environmentIntensity),_n&&(ge.setValue(w,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&L_(jn,Gs),ht&&K.fog===!0&&at.refreshFogUniforms(jn,ht),at.refreshMaterialUniforms(jn,K,k,X,p.state.transmissionRenderTarget[T.id]),Ua.upload(w,Cf(Pt),jn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ua.upload(w,Cf(Pt),jn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(w,"center",z.center),ge.setValue(w,"modelViewMatrix",z.modelViewMatrix),ge.setValue(w,"normalMatrix",z.normalMatrix),ge.setValue(w,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Rn=K.uniformsGroups;for(let Gi=0,Wi=Rn.length;Gi<Wi;Gi++){const Df=Rn[Gi];O.update(Df,Bn),O.bind(Df,Bn)}}return Bn}function L_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function I_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,j){tt.get(T.texture).__webglTexture=B,tt.get(T.depthTexture).__webglTexture=j;const K=tt.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const j=tt.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){D=T,C=B,A=j;let K=!0,z=null,ht=!1,Mt=!1;if(T){const wt=tt.get(T);if(wt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(wt.__hasExternalTextures)b.rebindTextures(T,tt.get(T.texture).__webglTexture,tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const At=T.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&tt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);const Gt=tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?z=Gt[B][j]:z=Gt[B],ht=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?z=tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[j]:z=Gt,L.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else L.copy(Et).multiplyScalar(k).floor(),N.copy(Ct).multiplyScalar(k).floor(),F=Kt;if(it.bindFramebuffer(w.FRAMEBUFFER,z)&&K&&it.drawBuffers(T,z),it.viewport(L),it.scissor(N),it.setScissorTest(F),ht){const wt=tt.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,j)}else if(Mt){const wt=tt.get(T.texture),Bt=B||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,j||0,Bt)}S=-1},this.readRenderTargetPixels=function(T,B,j,K,z,ht,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){it.bindFramebuffer(w.FRAMEBUFFER,Tt);try{const wt=T.texture,Bt=wt.format,Gt=wt.type;if(!Q.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&j>=0&&j<=T.height-z&&w.readPixels(B,j,K,z,kt.convert(Bt),kt.convert(Gt),ht)}finally{const wt=D!==null?tt.get(D).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,K,z,ht,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){const wt=T.texture,Bt=wt.format,Gt=wt.type;if(!Q.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-K&&j>=0&&j<=T.height-z){it.bindFramebuffer(w.FRAMEBUFFER,Tt);const At=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.bufferData(w.PIXEL_PACK_BUFFER,ht.byteLength,w.STREAM_READ),w.readPixels(B,j,K,z,kt.convert(Bt),kt.convert(Gt),0);const Jt=D!==null?tt.get(D).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,Jt);const he=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await qS(w,he,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ht),w.deleteBuffer(At),w.deleteSync(he),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,j=0){T.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-j),z=Math.floor(T.image.width*K),ht=Math.floor(T.image.height*K),Mt=B!==null?B.x:0,Tt=B!==null?B.y:0;b.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,Mt,Tt,z,ht),it.unbindTexture()},this.copyTextureToTexture=function(T,B,j=null,K=null,z=0){T.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,j=null);let ht,Mt,Tt,wt,Bt,Gt,At,Jt,he;const _e=T.isCompressedTexture?T.mipmaps[z]:T.image;j!==null?(ht=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Tt=j.isBox3?j.max.z-j.min.z:1,wt=j.min.x,Bt=j.min.y,Gt=j.isBox3?j.min.z:0):(ht=_e.width,Mt=_e.height,Tt=_e.depth||1,wt=0,Bt=0,Gt=0),K!==null?(At=K.x,Jt=K.y,he=K.z):(At=0,Jt=0,he=0);const tn=kt.convert(B.format),te=kt.convert(B.type);let Pt;B.isData3DTexture?(b.setTexture3D(B,0),Pt=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),Pt=w.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),Pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const hi=w.getParameter(w.UNPACK_ROW_LENGTH),ee=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Bn=w.getParameter(w.UNPACK_SKIP_PIXELS),Kr=w.getParameter(w.UNPACK_SKIP_ROWS),_n=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Gt);const Gs=T.isDataArrayTexture||T.isData3DTexture,ge=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const jn=tt.get(T),Ws=tt.get(B),Rn=tt.get(jn.__renderTarget),Gi=tt.get(Ws.__renderTarget);it.bindFramebuffer(w.READ_FRAMEBUFFER,Rn.__webglFramebuffer),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Tt;Wi++)Gs&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tt.get(T).__webglTexture,z,Gt+Wi),T.isDepthTexture?(ge&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tt.get(B).__webglTexture,z,he+Wi),w.blitFramebuffer(wt,Bt,ht,Mt,At,Jt,ht,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST)):ge?w.copyTexSubImage3D(Pt,z,At,Jt,he+Wi,wt,Bt,ht,Mt):w.copyTexSubImage2D(Pt,z,At,Jt,he+Wi,wt,Bt,ht,Mt);it.bindFramebuffer(w.READ_FRAMEBUFFER,null),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Pt,z,At,Jt,he,ht,Mt,Tt,tn,te,_e.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,z,At,Jt,he,ht,Mt,Tt,tn,_e.data):w.texSubImage3D(Pt,z,At,Jt,he,ht,Mt,Tt,tn,te,_e):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,z,At,Jt,ht,Mt,tn,te,_e.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,z,At,Jt,_e.width,_e.height,tn,_e.data):w.texSubImage2D(w.TEXTURE_2D,z,At,Jt,ht,Mt,tn,te,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,hi),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Kr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,_n),z===0&&B.generateMipmaps&&w.generateMipmap(Pt),it.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j=null,K=null,z=0){return T.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,j,K,z)},this.initRenderTarget=function(T){tt.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){C=0,A=0,D=null,it.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class s1 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class o1 extends Vo{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fd=new Pe,Du=new m_,Sa=new ml,Ma=new Z;class a1 extends dn{constructor(t=new Vi,e=new o1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,t.ray.intersectsSphere(Sa)===!1)return;Fd.copy(r).invert(),Du.copy(t.ray).applyMatrix4(Fd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Ma.fromBufferAttribute(f,m),Od(Ma,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Ma.fromBufferAttribute(f,g),Od(Ma,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Od(n,t,e,i,r,s,o){const a=Du.distanceSqToPoint(n);if(a<e){const l=new Z;Du.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class l1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);const c1={__name:"MoleculeScene",setup(n){const t=me(null);let e,i,r,s,o,a,l=0,c=0;function u(f,h,d,g){const _=document.createElement("canvas");_.width=d,_.height=g;const m=_.getContext("2d");m.fillStyle="#000",m.fillRect(0,0,d,g),m.fillStyle="#fff",m.font=`bold ${h}px "Cormorant Garamond", serif`,m.textAlign="center",m.textBaseline="middle",m.fillText(f,d/2,g/2);const p=m.getImageData(0,0,d,g),y=[],E=1;for(let v=0;v<g;v+=E)for(let R=0;R<d;R+=E){const C=(v*d+R)*4;if(p.data[C]>128){const A=(R/d-.5)*8,D=-(v/g-.5)*3,S=(Math.random()-.5)*.15;y.push({x:A,y:D,z:S})}}return y}return ui(()=>{const f=t.value,h=f.parentElement,d=h.clientWidth,g=h.clientHeight;e=new r1({canvas:f,alpha:!0,antialias:!0,powerPreference:"high-performance"}),e.setSize(d,g),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),i=new s1,r=new In(50,d/g,.1,100),r.position.z=5,a=new l1;const _=u("MINUS AQUA PLUS FIRMITAS",200,4096,512),m=_.length;console.log("Particle count:",m);const p=new Vi,y=new Float32Array(m*3),E=new Float32Array(m*3),v=new Float32Array(m*3),R=new Float32Array(m),C=new Float32Array(m),A=new Float32Array(m*3),D=[new jt("#FFFFFF"),new jt("#F0E6D6"),new jt("#D4C4A8"),new jt("#E8DCC8"),new jt("#FFFFFF")];for(let V=0;V<m;V++){const H=Math.random()*Math.PI*2,X=Math.acos(2*Math.random()-1),k=2+Math.random()*3;y[V*3]=k*Math.sin(X)*Math.cos(H),y[V*3+1]=k*Math.sin(X)*Math.sin(H),y[V*3+2]=k*Math.cos(X),E[V*3]=_[V].x,E[V*3+1]=_[V].y,E[V*3+2]=_[V].z,v[V*3]=y[V*3],v[V*3+1]=y[V*3+1],v[V*3+2]=y[V*3+2],R[V]=1.2+Math.random()*1.5,C[V]=Math.random()*Math.PI*2;const ut=D[Math.floor(Math.random()*D.length)];A[V*3]=ut.r,A[V*3+1]=ut.g,A[V*3+2]=ut.b}p.setAttribute("position",new on(v,3)),p.setAttribute("aSize",new on(R,1)),p.setAttribute("aOffset",new on(C,1)),p.setAttribute("aColor",new on(A,3));const S=new ki({vertexShader:`
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
    `,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uAssembled:{value:0}},transparent:!0,depthWrite:!1,blending:Gc});s=new a1(p,S),i.add(s);const M=p.getAttribute("position"),L={progress:0};Gn.to(L,{progress:1,duration:4,ease:"power2.inOut",delay:3,onUpdate:()=>{const V=L.progress;for(let H=0;H<m;H++){const X=H/m*.15,k=Math.max(0,Math.min(1,(V-X)/(1-X)));M.array[H*3]=y[H*3]+(E[H*3]-y[H*3])*k,M.array[H*3+1]=y[H*3+1]+(E[H*3+1]-y[H*3+1])*k,M.array[H*3+2]=y[H*3+2]+(E[H*3+2]-y[H*3+2])*k}M.needsUpdate=!0},onUpdateParams:[]}),Gn.to(S.uniforms.uAssembled,{value:1,duration:4,ease:"power2.inOut",delay:3});function N(V){l=(V.clientX/window.innerWidth-.5)*2,c=(V.clientY/window.innerHeight-.5)*2}window.addEventListener("mousemove",N);function F(){o=requestAnimationFrame(F);const V=a.getElapsedTime();S.uniforms.uTime.value=V,r.position.x+=(l*.3-r.position.x)*.02,r.position.y+=(-c*.3-r.position.y)*.02,r.lookAt(0,0,0),e.render(i,r)}F();function $(){const V=h.clientWidth,H=h.clientHeight;r.aspect=V/H,r.updateProjectionMatrix(),e.setSize(V,H)}window.addEventListener("resize",$),f._cleanup=()=>{window.removeEventListener("resize",$),window.removeEventListener("mousemove",N),o&&cancelAnimationFrame(o),p.dispose(),S.dispose(),e.dispose()}}),$r(()=>{t.value&&t.value._cleanup&&t.value._cleanup()}),(f,h)=>(qt(),Yt("canvas",{ref_key:"canvasRef",ref:t,class:"molecule-canvas"},null,512))}},u1={class:"relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite"},f1={class:"relative z-[2] text-center px-6 max-w-5xl mx-auto flex flex-col items-center"},h1={class:"hero-title font-display text-beige font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]"},d1={class:"hero-title font-display text-champagne-light/80 font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]"},p1={class:"word"},m1={__name:"HeroSection",setup(n){const t=["Мы","творим","будущее"],e=me([]),i=me(null),r=me(null),s=me(null),o=me(null);return ui(async()=>{await up();const a=Gn.timeline({delay:.5});e.value.forEach((c,u)=>{c&&a.to(c,{y:0,duration:1,ease:"power3.out"},u*.15)}),a.to(i.value,{y:0,duration:1,ease:"power3.out"},"-=0.5"),a.to(r.value,{opacity:1,y:0,duration:.8,ease:"power2.out"},"-=0.5");const l=Math.min(window.innerHeight*.06,60);Gn.to(s.value,{y:-l,duration:3,ease:"power2.inOut",delay:3}),Gn.to(o.value,{y:l,duration:3,ease:"power2.inOut",delay:3}),Gn.to(r.value,{opacity:.5,duration:3,ease:"power2.inOut",delay:3})}),(a,l)=>(qt(),Yt("section",u1,[ae(c1),l[2]||(l[2]=W("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/70 z-[1]"},null,-1)),W("div",f1,[W("div",{ref_key:"titleBlockRef",ref:s,class:"hero-title-wrapper"},[W("h1",h1,[(qt(),Yt(ve,null,pn(t,(c,u)=>W("span",{key:u,class:"word"},[W("span",{class:"word-inner",ref_for:!0,ref:f=>e.value[u]=f},Te(c),513),l[0]||(l[0]=W("span",{class:"inline-block w-[0.3em]"},null,-1))])),64))])],512),W("div",{ref_key:"subtitleBlockRef",ref:o},[W("h2",d1,[W("span",p1,[W("span",{class:"word-inner",ref_key:"subtitleWordRef",ref:i},"Инновационные добавки",512)])])],512),W("div",{ref_key:"ctaRef",ref:r,class:"mt-8 opacity-0 translate-y-4"},[...l[1]||(l[1]=[W("a",{href:"#products",class:"magnetic-btn inline-flex items-center gap-3 px-8 py-3.5 border border-champagne/30 text-champagne/80 rounded-full hover:bg-champagne/10 hover:border-champagne/50 hover:text-champagne transition-all duration-500 text-sm font-body font-medium tracking-wider uppercase","data-cursor":"pointer"},[W("span",{class:"btn-text"},"Узнать больше"),W("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 9l-7 7-7-7"})])],-1)])],512)]),l[3]||(l[3]=W("div",{class:"absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 opacity-60"},[W("span",{class:"text-xs font-body text-champagne-light tracking-widest uppercase"},"Scroll"),W("div",{class:"w-[1px] h-8 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse"})],-1))]))}},_1={class:"py-8 bg-graphite overflow-hidden border-y border-champagne/10"},g1={class:"marquee-track"},v1={__name:"MarqueeSection",setup(n){const t=["Уникальное оборудование","Собственное производство","Комплексные решения","Разработка составов и рецептур","Полный цикл испытаний","Бесплатные образцы","Сопровождение на всех этапах","Индивидуальный подход","Квалифицированная техподдержка"];return(e,i)=>(qt(),Yt("section",_1,[W("div",g1,[(qt(),Yt(ve,null,pn(2,r=>W("div",{key:r,class:"flex shrink-0 items-center gap-12 px-6"},[(qt(),Yt(ve,null,pn(t,(s,o)=>W("span",{key:o,class:"flex items-center gap-4 text-champagne-light/60 font-display text-xl md:text-2xl font-light whitespace-nowrap"},[W("span",null,Te(s),1),i[0]||(i[0]=W("span",{class:"w-1.5 h-1.5 rounded-full bg-champagne/40"},null,-1))])),64))])),64))])]))}},x1={id:"products",class:"py-24 md:py-32 bg-beige"},S1={class:"max-w-container mx-auto px-6 lg:px-10"},M1={class:"flex flex-wrap justify-center gap-3 mb-12 fade-up"},y1=["onClick"],E1={class:"fade-up"},b1={class:"text-center text-muted font-body text-base mb-10 max-w-2xl mx-auto leading-relaxed"},T1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"},w1={class:"w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500"},A1={class:"font-display text-xl font-medium text-graphite mb-3"},R1={key:0,class:"text-sm text-muted font-body leading-relaxed"},C1={key:1,class:"text-sm text-muted/50 font-body italic"},P1={key:0,class:"text-center py-16"},D1={__name:"ProductsSection",setup(n){const t=me(0),u=[{title:"Добавки для сухих строительных смесей",description:"Комплексные решения для модификации сухих строительных смесей — от штукатурок и шпатлёвок до плиточных клеев и ремонтных составов.",subgroups:[{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})])}},title:"Эфиры целлюлозы",description:"Водоудержание, реология и удобоукладываемость смесей."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M12 3c0 0-6 6.5-6 11a6 6 0 1012 0c0-4.5-6-11-6-11z"})])}},title:"Пластификаторы",description:"Повышение подвижности и снижение водоцементного отношения."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})])}},title:"Ускорители",description:"Сокращение сроков схватывания и твердения."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])}},title:"Замедлители",description:"Регулирование сроков схватывания для длительной работы."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})])}},title:"Пеногасители",description:"Предотвращение образования нежелательных воздушных пор."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])}},title:"Модификаторы",description:"Комплексные добавки для специальных свойств смесей."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})])}},title:"Реологические добавки",description:"Управление вязкостью и текучестью растворных смесей."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}},title:"Воздухововлекающие добавки",description:"Повышение морозостойкости и долговечности."}]},{title:"Добавки для лакокрасочной промышленности",description:"Специализированные добавки для производства лакокрасочных материалов с заданными характеристиками.",subgroups:[]},{title:"Добавки для РТИ и каучука",description:"Химические добавки для резинотехнической промышленности и производства каучуковых изделий.",subgroups:[]},{title:"Гибридные клея и герметики",description:"Гибридные клеевые составы и герметики для строительных и промышленных применений.",subgroups:[]}];return(f,h)=>(qt(),Yt("section",x1,[W("div",S1,[h[2]||(h[2]=W("div",{class:"text-center mb-16 md:mb-20"},[W("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Каталог"),W("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Наша продукция"),W("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),W("div",M1,[(qt(),Yt(ve,null,pn(u,(d,g)=>W("button",{key:g,onClick:_=>t.value=g,class:qe(["px-6 py-3 rounded-full font-body text-sm tracking-wider transition-all duration-500 border",t.value===g?"bg-graphite text-champagne-light border-graphite":"bg-transparent text-graphite border-border hover:border-champagne"]),"data-cursor":"pointer"},Te(d.title),11,y1)),64))]),W("div",E1,[W("p",b1,Te(u[t.value].description),1),W("div",T1,[(qt(!0),Yt(ve,null,pn(u[t.value].subgroups,(d,g)=>(qt(),Yt("div",{key:g,class:"group relative p-8 md:p-10 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5","data-cursor":"pointer"},[W("div",w1,[(qt(),$u(Rp(d.icon)))]),W("h3",A1,Te(d.title),1),d.description?(qt(),Yt("p",R1,Te(d.description),1)):(qt(),Yt("p",C1,"Подробности скоро")),h[0]||(h[0]=W("div",{class:"absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"},null,-1))]))),128))]),u[t.value].subgroups.length===0?(qt(),Yt("div",P1,[...h[1]||(h[1]=[W("div",{class:"text-muted/40 font-display text-2xl font-light mb-4"},"Раздел в разработке",-1),W("p",{class:"text-muted/60 font-body text-sm"},"Информация о продукции скоро появится",-1)])])):ju("",!0)])])]))}},L1={id:"stats",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},I1={class:"max-w-container mx-auto px-6 lg:px-10 relative z-10"},U1={class:"grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12"},N1={class:"font-display text-5xl md:text-6xl lg:text-7xl font-light text-champagne"},F1={class:"text-champagne-light"},O1={class:"mt-3 text-sm md:text-base text-champagne-light/60 font-body"},B1={__name:"StatsSection",setup(n){const t=[{value:4,suffix:"",label:"Лаборатории",target:4},{value:9,suffix:"+",label:"Лет на рынке",target:9},{value:2e3,suffix:"",label:"Тонн/год — проектная мощность",target:2e3},{value:100,suffix:"+",label:"Лет суммарного стажа",target:100}],e=me([]),i=me(!1),r=me(!1),s=me(-1);let o=null;function a(){i.value=!0,t.forEach((l,c)=>{setTimeout(()=>{var h;s.value=c;const u=(h=e.value)==null?void 0:h[c];if(!u)return;const f={val:0};Gn.to(f,{val:l.target,duration:1.5,ease:"power2.out",onUpdate:()=>{u.textContent=Math.round(f.val)}})},c*400)}),setTimeout(()=>{r.value=!0},t.length*400+2e3)}return ui(()=>{const l=document.getElementById("stats");l&&(o=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&!i.value&&(setTimeout(a,4e3),o.unobserve(l))})},{threshold:.3}),o.observe(l))}),$r(()=>{o&&o.disconnect()}),(l,c)=>(qt(),Yt("section",L1,[c[1]||(c[1]=W("div",{class:"absolute inset-0 opacity-5"},[W("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-champagne/20"}),W("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-champagne/20"})],-1)),W("div",I1,[c[0]||(c[0]=W("div",{class:"text-center mb-16 md:mb-20"},[W("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase"},"Цифры и факты"),W("h2",{class:"mt-4 font-display text-section font-light text-beige"},"Результаты говорят сами за себя"),W("div",{class:"section-divider mx-auto mt-6"})],-1)),W("div",U1,[(qt(),Yt(ve,null,pn(t,(u,f)=>W("div",{key:f,class:qe(["stat-item text-center",{revealed:i.value&&s.value>=f,frozen:r.value}])},[W("div",N1,[W("span",{ref_for:!0,ref_key:"numberRefs",ref:e},Te(r.value?u.value:"0"),513),W("span",F1,Te(u.suffix),1)]),W("p",O1,Te(u.label),1)],2)),64))])])]))}},z1={id:"about",class:"py-24 md:py-32 bg-beige relative"},k1={class:"max-w-container mx-auto px-6 lg:px-10"},H1={class:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"},V1={class:"mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"},G1={class:"font-display text-base font-medium text-graphite"},W1={class:"text-sm text-muted font-body mt-1"},X1={__name:"AboutSection",setup(n){const t=[{title:"Собственная лаборатория",desc:"Полный цикл исследований и разработок"},{title:"Сертификация",desc:"Соответствие ГОСТ и международным стандартам"},{title:"Техподдержка",desc:"Экспертное сопровождение на каждом этапе"},{title:"Эко-ответственность",desc:"Безопасные составы для человека и среды"}];return(e,i)=>(qt(),Yt("section",z1,[W("div",k1,[W("div",H1,[W("div",null,[i[1]||(i[1]=wc('<span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">О компании</span><h2 class="mt-4 font-display text-section font-light text-graphite fade-up"> Наука, которая<br>работает на вас </h2><div class="section-divider mt-6 mb-8 fade-up"></div><p class="text-base md:text-lg text-muted font-body leading-relaxed fade-up"> Компания «Аддитив Плюс» — создание и производство химических добавок для строительной индустрии. Мы объединяем передовые научные исследования с практическим опытом для создания продуктов, которые превосходят ожидания. </p><p class="mt-5 text-base md:text-lg text-muted font-body leading-relaxed fade-up"> Наша лаборатория постоянно работает над разработкой новых составов, адаптированных к различным климатическим условиям и специфическим требованиям строительных проектов. </p>',5)),W("div",V1,[(qt(),Yt(ve,null,pn(t,(r,s)=>W("div",{key:s,class:"flex gap-4 fade-up"},[i[0]||(i[0]=W("div",{class:"w-10 h-10 rounded-lg bg-champagne/10 flex items-center justify-center shrink-0"},[W("svg",{class:"w-5 h-5 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),W("div",null,[W("h4",G1,Te(r.title),1),W("p",W1,Te(r.desc),1)])])),64))])]),i[2]||(i[2]=wc('<div class="relative fade-up"><div class="aspect-[4/5] rounded-2xl bg-gradient-to-br from-champagne/20 to-champagne-dark/10 border border-border flex items-center justify-center overflow-hidden"><div class="relative w-full h-full flex items-center justify-center"><div class="absolute w-32 h-32 rounded-full border border-champagne/30 animate-pulse"></div><div class="absolute w-48 h-48 rounded-full border border-champagne/20" style="animation:pulse 3s ease-in-out infinite 0.5s;"></div><div class="absolute w-64 h-64 rounded-full border border-champagne/10" style="animation:pulse 4s ease-in-out infinite 1s;"></div><svg class="w-20 h-20 text-champagne/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></div></div><div class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-graphite text-beige px-6 py-4 rounded-xl shadow-lg"><div class="font-display text-2xl font-light">9+</div><div class="text-xs text-champagne-light/70 font-body">лет опыта</div></div></div>',1))])])]))}},q1={id:"lab",class:"py-24 md:py-32 bg-beige"},Y1={class:"max-w-container mx-auto px-6 lg:px-10"},$1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"},j1={class:"w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500"},K1={class:"font-display text-xl font-medium text-graphite mb-3"},Z1={class:"text-sm text-muted font-body leading-relaxed"},J1={__name:"LabSection",setup(n){const s=[{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])}},title:"Испытания материалов",description:"Комплексные физико-механические и химические испытания строительных материалов и смесей."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})])}},title:"Разработка рецептур",description:"Создание и оптимизация составов сухих строительных смесей под конкретные задачи."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}},title:"Сертификация",description:"Подготовка документации и проведение испытаний для получения сертификатов соответствия."},{icon:{render(){return de("svg",{class:"w-7 h-7 text-champagne",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[de("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})])}},title:"Аналитика и исследования",description:"Глубокий анализ химического состава, реологических и физико-механических свойств."}];return(o,a)=>(qt(),Yt("section",q1,[W("div",Y1,[a[1]||(a[1]=W("div",{class:"text-center mb-16 md:mb-20"},[W("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Лаборатория"),W("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Услуги нашей лаборатории"),W("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),W("div",$1,[(qt(),Yt(ve,null,pn(s,(l,c)=>W("div",{key:c,class:"group relative p-8 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5 fade-up"},[W("div",j1,[(qt(),$u(Rp(l.icon)))]),W("h3",K1,Te(l.title),1),W("p",Z1,Te(l.description),1),a[0]||(a[0]=W("div",{class:"absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"},null,-1))])),64))])])]))}},Q1={id:"video",class:"py-24 md:py-32 bg-white relative"},tw={class:"max-w-container mx-auto px-6 lg:px-10"},ew={class:"fade-up"},nw={class:"relative aspect-video rounded-2xl overflow-hidden border border-border bg-graphite/5 shadow-xl shadow-champagne/5"},iw={class:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite/90 to-graphite"},rw={__name:"VideoSection",setup(n){const t=me(!1);return(e,i)=>(qt(),Yt("section",Q1,[W("div",tw,[i[3]||(i[3]=W("div",{class:"text-center mb-16 md:mb-20"},[W("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"Видео"),W("h2",{class:"mt-4 font-display text-section font-light text-graphite fade-up"},"Посмотрите, как мы работаем"),W("div",{class:"section-divider mx-auto mt-6 fade-up"})],-1)),W("div",ew,[W("div",nw,[W("div",iw,[W("button",{onClick:i[0]||(i[0]=r=>t.value=!0),class:"group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center hover:bg-champagne/30 transition-all duration-500","data-cursor":"pointer"},[...i[1]||(i[1]=[W("svg",{class:"w-8 h-8 md:w-10 md:h-10 text-champagne-light ml-1 group-hover:scale-110 transition-transform duration-300",fill:"currentColor",viewBox:"0 0 24 24"},[W("path",{d:"M8 5v14l11-7z"})],-1)])]),i[2]||(i[2]=W("div",{class:"absolute bottom-6 left-6 right-6 text-center"},[W("p",{class:"text-champagne-light/60 font-body text-sm tracking-wider uppercase"},"Аддитив Плюс — Производство и лаборатория")],-1))])])])])]))}},sw={id:"faq",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},ow={class:"max-w-3xl mx-auto px-6 lg:px-10 relative z-10"},aw={class:"space-y-4"},lw=["onClick"],cw={class:"font-display text-lg md:text-xl font-light text-beige pr-4"},uw={class:"px-6 pb-5 text-champagne-light/60 font-body text-base leading-relaxed"},fw={__name:"FaqSection",setup(n){const t=me(-1),e=[{question:"Какие добавки вы производите?",answer:"Мы производим широкий спектр химических добавок для сухих строительных смесей, лакокрасочной промышленности, РТИ и каучука, а также гибридные клеи и герметики. Наш ассортимент включает эфиры целлюлозы, пластификаторы, ускорители, замедлители, пеногасители и комплексные модификаторы."},{question:"Можно ли заказать образцы для тестирования?",answer:"Да, мы предоставляем бесплатные образцы всей продукции для лабораторных испытаний. Свяжитесь с нами через форму на сайте или по телефону, и наши специалисты подберут оптимальные образцы под ваши задачи."},{question:"Как происходит разработка рецептуры?",answer:"Процесс начинается с анализа ваших требований и условий применения. Наши лаборатории проводят серию испытаний, подбирают оптимальный состав и предоставляют полную документацию с рекомендациями по применению. Средний срок разработки — от 2 до 4 недель."},{question:"Какова минимальная партия заказа?",answer:"Минимальная партия зависит от типа продукции и обсуждается индивидуально. Мы гибко подходим к потребностям клиентов — от небольших пробных партий до крупных промышленных объёмов."},{question:"Предоставляете ли вы техническую поддержку?",answer:"Да, мы обеспечиваем полное экспертное сопровождение на всех этапах — от подбора добавок до внедрения в производство. Наши специалисты готовы выехать на ваш объект для помощи в настройке процессов."},{question:"Есть ли сертификация на продукцию?",answer:"Вся наша продукция проходит строгий контроль качества и имеет необходимые сертификаты соответствия ГОСТ. Лабораторные испытания проводятся на собственной базе с использованием уникального оборудования."}];return(i,r)=>(qt(),Yt("section",sw,[r[2]||(r[2]=W("div",{class:"absolute top-0 right-0 w-[400px] h-[400px] bg-champagne/3 rounded-full blur-3xl"},null,-1)),W("div",ow,[r[1]||(r[1]=W("div",{class:"text-center mb-16 md:mb-20"},[W("span",{class:"text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up"},"FAQ"),W("h2",{class:"mt-4 font-display text-section font-light text-beige fade-up"},"Частые вопросы"),W("div",{class:"section-divider mx-auto mt-6"})],-1)),W("div",aw,[(qt(),Yt(ve,null,pn(e,(s,o)=>W("div",{key:o,class:qe(["border border-champagne/10 rounded-xl overflow-hidden transition-all duration-500 fade-up",t.value===o?"bg-champagne/5":"bg-transparent hover:bg-champagne/3"])},[W("button",{onClick:a=>t.value=t.value===o?-1:o,class:"w-full flex items-center justify-between px-6 py-5 text-left","data-cursor":"pointer"},[W("span",cw,Te(s.question),1),(qt(),Yt("svg",{class:qe(["w-5 h-5 text-champagne shrink-0 transition-transform duration-500",t.value===o?"rotate-180":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...r[0]||(r[0]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,lw),W("div",{class:qe(["overflow-hidden transition-all duration-500",t.value===o?"max-h-96 opacity-100":"max-h-0 opacity-0"])},[W("p",uw,Te(s.answer),1)],2)],2)),64))])])]))}},hw={id:"contact",class:"py-24 md:py-32 bg-graphite relative overflow-hidden"},dw={class:"max-w-container mx-auto px-6 lg:px-10 relative z-10"},pw={class:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"},mw={class:"fade-up"},_w={type:"submit",class:"magnetic-btn w-full px-10 py-4 bg-champagne text-graphite font-body font-medium text-sm rounded-full hover:bg-champagne-light transition-colors duration-300 tracking-wider","data-cursor":"pointer"},gw={class:"btn-text"},vw={__name:"CtaSection",setup(n){const t=me({name:"",phone:"",email:"",message:""}),e=me(!1);function i(){console.log("Form submitted:",t.value),e.value=!0,setTimeout(()=>{e.value=!1,t.value={name:"",phone:"",email:"",message:""}},3e3)}return(r,s)=>(qt(),Yt("section",hw,[s[5]||(s[5]=W("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl"},null,-1)),W("div",dw,[W("div",pw,[s[4]||(s[4]=wc('<div><span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Свяжитесь с нами</span><h2 class="mt-6 font-display text-cta font-light text-beige fade-up"> Готовы начать<br>сотрудничество? </h2><p class="mt-6 text-base md:text-lg text-champagne-light/60 font-body fade-up"> Оставьте заявку, и наши специалисты подберут оптимальное решение для вашего проекта </p><div class="mt-10 space-y-6"><div class="flex items-center gap-4 fade-up"><div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><div class="text-champagne/60 text-sm font-body mb-1">Телефон</div><a href="tel:+79154749433" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer"> 8-915-474-94-33 </a></div></div><div class="flex items-center gap-4 fade-up"><div class="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><div class="text-champagne/60 text-sm font-body mb-1">Email</div><a href="mailto:info@additivplus.ru" class="text-beige font-display text-lg hover:text-champagne transition-colors" data-cursor="pointer"> info@additivplus.ru </a></div></div></div></div>',1)),W("div",mw,[W("form",{onSubmit:uv(i,["prevent"]),class:"space-y-5"},[W("div",null,[jo(W("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value.name=o),type:"text",placeholder:"Ваше имя",required:"",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Ko,t.value.name]])]),W("div",null,[jo(W("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.phone=o),type:"tel",placeholder:"Телефон",required:"",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Ko,t.value.phone]])]),W("div",null,[jo(W("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.email=o),type:"email",placeholder:"Email",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors"},null,512),[[Ko,t.value.email]])]),W("div",null,[jo(W("textarea",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.value.message=o),placeholder:"Сообщение",rows:"4",class:"w-full px-5 py-4 bg-white/5 border border-champagne/15 rounded-xl text-beige font-body placeholder:text-champagne-light/30 focus:outline-none focus:border-champagne/40 transition-colors resize-none"},null,512),[[Ko,t.value.message]])]),W("button",_w,[W("span",gw,Te(e.value?"Отправлено ✓":"Отправить заявку"),1)])],32)])])])]))}},xw={class:"py-12 bg-graphite border-t border-champagne/10"},Sw={class:"max-w-container mx-auto px-6 lg:px-10"},Mw={class:"grid grid-cols-1 md:grid-cols-3 gap-10 items-center"},yw={class:"flex flex-col items-center md:items-start gap-3"},Ew={class:"text-xs text-champagne-light/40 font-body"},bw={class:"flex items-center justify-center gap-8"},Tw=["href"],ww={__name:"AppFooter",setup(n){const t=[{href:"#products",label:"Продукция"},{href:"#about",label:"О нас"},{href:"#contact",label:"Контакты"}];function e(){window.scrollTo({top:0,behavior:"smooth"})}return(i,r)=>(qt(),Yt("footer",xw,[W("div",Sw,[W("div",Mw,[W("div",yw,[r[0]||(r[0]=W("div",{class:"flex items-center gap-3"},[W("img",{src:Zm,alt:"Аддитив Плюс",class:"h-8 w-auto opacity-80"}),W("span",{class:"font-display text-lg text-beige/80 font-medium"},"Аддитив Плюс")],-1)),W("p",Ew," © "+Te(new Date().getFullYear())+" Аддитив Плюс. Все права защищены. ",1)]),W("div",bw,[(qt(),Yt(ve,null,pn(t,s=>W("a",{key:s.href,href:s.href,class:"text-sm text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body","data-cursor":"pointer"},Te(s.label),9,Tw)),64))]),W("div",{class:"flex items-center justify-center md:justify-end"},[W("button",{onClick:e,class:"flex items-center gap-2 text-sm text-champagne-light/50 hover:text-champagne transition-colors duration-300 font-body magnetic-btn","data-cursor":"pointer"},[...r[1]||(r[1]=[W("span",{class:"btn-text"},"Наверх",-1),W("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 10l7-7m0 0l7 7m-7-7v18"})],-1)])])])])])]))}},Aw={__name:"App",setup(n){Tv();const{dotX:t,dotY:e,ringX:i,ringY:r,hovering:s}=wv();return ui(()=>{const o=document.querySelectorAll(".fade-up"),a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(c.target.classList.add("visible"),a.unobserve(c.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});o.forEach(l=>a.observe(l)),document.querySelectorAll(".magnetic-btn").forEach(l=>{l.addEventListener("mousemove",c=>{const u=l.getBoundingClientRect(),f=c.clientX-u.left-u.width/2,h=c.clientY-u.top-u.height/2,d=l.querySelector(".btn-text");l.style.transform=`translate(${f*.3}px, ${h*.3}px)`,d&&(d.style.transform=`translate(${f*.15}px, ${h*.15}px)`)}),l.addEventListener("mouseleave",()=>{const c=l.querySelector(".btn-text");l.style.transform="translate(0, 0)",c&&(c.style.transform="translate(0, 0)")})})}),(o,a)=>(qt(),Yt(ve,null,[ae(jx),W("div",{class:qe(["cursor-dot",{hovering:Ei(s)}]),style:go({left:Ei(t)+"px",top:Ei(e)+"px"})},null,6),W("div",{class:qe(["cursor-ring",{hovering:Ei(s)}]),style:go({left:Ei(i)+"px",top:Ei(r)+"px"})},null,6),a[0]||(a[0]=W("div",{class:"grain-overlay"},null,-1)),ae(eS),W("main",null,[ae(m1),ae(v1),ae(D1),ae(B1),ae(J1),ae(rw),ae(fw),ae(X1),ae(vw)]),ae(ww)],64))}};dv(Aw).mount("#app");
