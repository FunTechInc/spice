(function(b,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react"),require("gsap")):typeof define=="function"&&define.amd?define(["exports","react","gsap"],s):(b=typeof globalThis<"u"?globalThis:b||self,s(b.spice={},b.React,b.gsap))})(this,function(b,s,K){"use strict";"use client";var Q={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function st(){if(fe)return N;fe=1;var r=s,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(v,f,m){var p,h={},E=null,R=null;m!==void 0&&(E=""+m),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(R=f.ref);for(p in f)o.call(f,p)&&!u.hasOwnProperty(p)&&(h[p]=f[p]);if(v&&v.defaultProps)for(p in f=v.defaultProps,f)h[p]===void 0&&(h[p]=f[p]);return{$$typeof:t,type:v,key:E,ref:R,props:h,_owner:a.current}}return N.Fragment=n,N.jsx=c,N.jsxs=c,N}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function it(){return de||(de=1,process.env.NODE_ENV!=="production"&&function(){var r=s,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),v=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),C=Symbol.iterator,L="@@iterator";function A(e){if(e===null||typeof e!="object")return null;var i=C&&e[C]||e[L];return typeof i=="function"?i:null}var I=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function j(e){{for(var i=arguments.length,l=new Array(i>1?i-1:0),g=1;g<i;g++)l[g-1]=arguments[g];te("error",e,l)}}function te(e,i,l){{var g=I.ReactDebugCurrentFrame,x=g.getStackAddendum();x!==""&&(i+="%s",l=l.concat([x]));var S=l.map(function(w){return String(w)});S.unshift("Warning: "+i),Function.prototype.apply.call(console[e],console,S)}}var ne=!1,Nt=!1,Yt=!1,Vt=!1,zt=!1,Le;Le=Symbol.for("react.module.reference");function Bt(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===u||zt||e===a||e===m||e===p||Vt||e===R||ne||Nt||Yt||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===h||e.$$typeof===c||e.$$typeof===v||e.$$typeof===f||e.$$typeof===Le||e.getModuleId!==void 0))}function Ut(e,i,l){var g=e.displayName;if(g)return g;var x=i.displayName||i.name||"";return x!==""?l+"("+x+")":l}function ke(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case m:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v:var i=e;return ke(i)+".Consumer";case c:var l=e;return ke(l._context)+".Provider";case f:return Ut(e,e.render,"ForwardRef");case h:var g=e.displayName||null;return g!==null?g:D(e.type)||"Memo";case E:{var x=e,S=x._payload,w=x._init;try{return D(w(S))}catch{return null}}}return null}var k=Object.assign,z=0,Me,We,Ne,Ye,Ve,ze,Be;function Ue(){}Ue.__reactDisabledLog=!0;function Ht(){{if(z===0){Me=console.log,We=console.info,Ne=console.warn,Ye=console.error,Ve=console.group,ze=console.groupCollapsed,Be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}z++}}function Xt(){{if(z--,z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:Me}),info:k({},e,{value:We}),warn:k({},e,{value:Ne}),error:k({},e,{value:Ye}),group:k({},e,{value:Ve}),groupCollapsed:k({},e,{value:ze}),groupEnd:k({},e,{value:Be})})}z<0&&j("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=I.ReactCurrentDispatcher,oe;function U(e,i,l){{if(oe===void 0)try{throw Error()}catch(x){var g=x.stack.trim().match(/\n( *(at )?)/);oe=g&&g[1]||""}return`
`+oe+e}}var se=!1,H;{var Gt=typeof WeakMap=="function"?WeakMap:Map;H=new Gt}function He(e,i){if(!e||se)return"";{var l=H.get(e);if(l!==void 0)return l}var g;se=!0;var x=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var S;S=re.current,re.current=null,Ht();try{if(i){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(F){g=F}Reflect.construct(e,[],w)}else{try{w.call()}catch(F){g=F}e.call(w.prototype)}}else{try{throw Error()}catch(F){g=F}e()}}catch(F){if(F&&g&&typeof F.stack=="string"){for(var y=F.stack.split(`
`),O=g.stack.split(`
`),T=y.length-1,_=O.length-1;T>=1&&_>=0&&y[T]!==O[_];)_--;for(;T>=1&&_>=0;T--,_--)if(y[T]!==O[_]){if(T!==1||_!==1)do if(T--,_--,_<0||y[T]!==O[_]){var P=`
`+y[T].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,P),P}while(T>=1&&_>=0);break}}}finally{se=!1,re.current=S,Xt(),Error.prepareStackTrace=x}var W=e?e.displayName||e.name:"",ot=W?U(W):"";return typeof e=="function"&&H.set(e,ot),ot}function Jt(e,i,l){return He(e,!1)}function Kt(e){var i=e.prototype;return!!(i&&i.isReactComponent)}function X(e,i,l){if(e==null)return"";if(typeof e=="function")return He(e,Kt(e));if(typeof e=="string")return U(e);switch(e){case m:return U("Suspense");case p:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Jt(e.render);case h:return X(e.type,i,l);case E:{var g=e,x=g._payload,S=g._init;try{return X(S(x),i,l)}catch{}}}return""}var G=Object.prototype.hasOwnProperty,Xe={},Ge=I.ReactDebugCurrentFrame;function J(e){if(e){var i=e._owner,l=X(e.type,e._source,i?i.type:null);Ge.setExtraStackFrame(l)}else Ge.setExtraStackFrame(null)}function Qt(e,i,l,g,x){{var S=Function.call.bind(G);for(var w in e)if(S(e,w)){var y=void 0;try{if(typeof e[w]!="function"){var O=Error((g||"React class")+": "+l+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}y=e[w](i,w,g,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){y=T}y&&!(y instanceof Error)&&(J(x),j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",g||"React class",l,w,typeof y),J(null)),y instanceof Error&&!(y.message in Xe)&&(Xe[y.message]=!0,J(x),j("Failed %s type: %s",l,y.message),J(null))}}}var Zt=Array.isArray;function ie(e){return Zt(e)}function qt(e){{var i=typeof Symbol=="function"&&Symbol.toStringTag,l=i&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function $t(e){try{return Je(e),!1}catch{return!0}}function Je(e){return""+e}function Ke(e){if($t(e))return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",qt(e)),Je(e)}var B=I.ReactCurrentOwner,en={key:!0,ref:!0,__self:!0,__source:!0},Qe,Ze,ae;ae={};function tn(e){if(G.call(e,"ref")){var i=Object.getOwnPropertyDescriptor(e,"ref").get;if(i&&i.isReactWarning)return!1}return e.ref!==void 0}function nn(e){if(G.call(e,"key")){var i=Object.getOwnPropertyDescriptor(e,"key").get;if(i&&i.isReactWarning)return!1}return e.key!==void 0}function rn(e,i){if(typeof e.ref=="string"&&B.current&&i&&B.current.stateNode!==i){var l=D(B.current.type);ae[l]||(j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(B.current.type),e.ref),ae[l]=!0)}}function on(e,i){{var l=function(){Qe||(Qe=!0,j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function sn(e,i){{var l=function(){Ze||(Ze=!0,j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var an=function(e,i,l,g,x,S,w){var y={$$typeof:t,type:e,key:i,ref:l,props:w,_owner:S};return y._store={},Object.defineProperty(y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(y,"_self",{configurable:!1,enumerable:!1,writable:!1,value:g}),Object.defineProperty(y,"_source",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.freeze&&(Object.freeze(y.props),Object.freeze(y)),y};function cn(e,i,l,g,x){{var S,w={},y=null,O=null;l!==void 0&&(Ke(l),y=""+l),nn(i)&&(Ke(i.key),y=""+i.key),tn(i)&&(O=i.ref,rn(i,x));for(S in i)G.call(i,S)&&!en.hasOwnProperty(S)&&(w[S]=i[S]);if(e&&e.defaultProps){var T=e.defaultProps;for(S in T)w[S]===void 0&&(w[S]=T[S])}if(y||O){var _=typeof e=="function"?e.displayName||e.name||"Unknown":e;y&&on(w,_),O&&sn(w,_)}return an(e,y,O,x,g,B.current,w)}}var ce=I.ReactCurrentOwner,qe=I.ReactDebugCurrentFrame;function M(e){if(e){var i=e._owner,l=X(e.type,e._source,i?i.type:null);qe.setExtraStackFrame(l)}else qe.setExtraStackFrame(null)}var ue;ue=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function $e(){{if(ce.current){var e=D(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function un(e){{if(e!==void 0){var i=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+i+":"+l+"."}return""}}var et={};function ln(e){{var i=$e();if(!i){var l=typeof e=="string"?e:e.displayName||e.name;l&&(i=`

Check the top-level render call using <`+l+">.")}return i}}function tt(e,i){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=ln(i);if(et[l])return;et[l]=!0;var g="";e&&e._owner&&e._owner!==ce.current&&(g=" It was passed a child from "+D(e._owner.type)+"."),M(e),j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,g),M(null)}}function nt(e,i){{if(typeof e!="object")return;if(ie(e))for(var l=0;l<e.length;l++){var g=e[l];le(g)&&tt(g,i)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var x=A(e);if(typeof x=="function"&&x!==e.entries)for(var S=x.call(e),w;!(w=S.next()).done;)le(w.value)&&tt(w.value,i)}}}function fn(e){{var i=e.type;if(i==null||typeof i=="string")return;var l;if(typeof i=="function")l=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===f||i.$$typeof===h))l=i.propTypes;else return;if(l){var g=D(i);Qt(l,e.props,"prop",g,e)}else if(i.PropTypes!==void 0&&!ue){ue=!0;var x=D(i);j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dn(e){{for(var i=Object.keys(e.props),l=0;l<i.length;l++){var g=i[l];if(g!=="children"&&g!=="key"){M(e),j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",g),M(null);break}}e.ref!==null&&(M(e),j("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}function rt(e,i,l,g,x,S){{var w=Bt(e);if(!w){var y="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(y+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=un(x);O?y+=O:y+=$e();var T;e===null?T="null":ie(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(D(e.type)||"Unknown")+" />",y=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,y)}var _=cn(e,i,l,x,S);if(_==null)return _;if(w){var P=i.children;if(P!==void 0)if(g)if(ie(P)){for(var W=0;W<P.length;W++)nt(P[W],e);Object.freeze&&Object.freeze(P)}else j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nt(P,e)}return e===o?dn(_):fn(_),_}}function hn(e,i,l){return rt(e,i,l,!0)}function vn(e,i,l){return rt(e,i,l,!1)}var pn=vn,mn=hn;Y.Fragment=o,Y.jsx=pn,Y.jsxs=mn}()),Y}process.env.NODE_ENV==="production"?Q.exports=st():Q.exports=it();var d=Q.exports;const he=s.createContext(!0),ve=s.createContext(r=>!r),at=({children:r})=>{const[t,n]=s.useState(!0);return d.jsx(he.Provider,{value:t,children:d.jsx(ve.Provider,{value:n,children:r})})},ct=({children:r})=>{const t=s.useContext(he);return d.jsx("div",{style:{flexDirection:"column",display:"flex",minHeight:"100vh",...t&&{overflow:"hidden"}},children:r})},ut=({children:r})=>d.jsx(at,{children:d.jsx(ct,{children:r})}),pe=()=>s.useContext(ve),me=({formProps:r})=>{const{style:t,...n}=r;return d.jsx("input",{...n,style:{overflow:"hidden",...t}})},lt=({formProps:r})=>{const{isSelect:t,style:n,...o}=r;if(!t)return;const a=()=>{const c=t.defaultValue;return c?d.jsx("option",{hidden:!0,children:c}):null},u=()=>{const c=t.defaultSelectedIndex;if(c)return t.options[c]};return d.jsxs("select",{...o,style:{overflow:"hidden",fontSize:"16px",...n||{}},defaultValue:u(),children:[d.jsx(a,{}),t.options.map(c=>d.jsx("option",{value:c,children:c},c))]})},ge=({layoutType:r,formPropsArr:t,label:n,FormItem:o,errors:a})=>{const u=s.useCallback(c=>!a||!a[c]?null:a[c],[a]);if(r==="block")return d.jsxs(d.Fragment,{children:[n&&d.jsx("label",{htmlFor:t[0].id,children:n}),d.jsx(o,{formProps:t[0]}),u(0)]});if(r==="flex")return d.jsxs(d.Fragment,{children:[n&&d.jsx("label",{htmlFor:t[0].id,children:n}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(o,{formProps:t[0]}),u(0)]}),d.jsxs("li",{children:[d.jsx(o,{formProps:t[1]}),u(1)]})]})]});if(r==="radio-check"){const c=t.map(({id:v,value:f,style:m,optionLabel:p,...h})=>d.jsxs("li",{children:[d.jsx(o,{formProps:{id:v,value:f,style:{position:"absolute",whiteSpace:"nowrap",width:"1px",height:"1px",overflow:"hidden",border:"0",padding:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",zIndex:"-99999",...m||{}},...h}}),d.jsx("label",{htmlFor:v,children:p||f})]},v));return d.jsxs(d.Fragment,{children:[n&&d.jsx("label",{children:n}),d.jsx("ul",{children:c}),u(0)]})}},ft=({formProps:r})=>{const{isTextarea:t,...n}=r;if(t)return d.jsx("textarea",{...n,...t})},dt=({label:r,formProps:t,errors:n,...o})=>{const a=t,u=a[0].type,c=a.length,v=!!a[0].isSelect,f=!!a[0].isTextarea;if(!(u==="radio"||u==="checkbox")&&c>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const m=s.useCallback(h=>ge({layoutType:c===1?"block":"flex",formPropsArr:a,label:r,FormItem:h,errors:n}),[n,a,r,c]),p=s.useCallback(()=>v?m(lt):f?m(ft):u==="radio"||u==="checkbox"?ge({layoutType:"radio-check",formPropsArr:a,label:r,FormItem:me,errors:n}):m(me),[n,a,r,v,f,m,u]);return d.jsx("fieldset",{...o,children:d.jsx(p,{})})},Z=r=>new Promise(t=>{r instanceof Promise?r.then(()=>{t(null)}):t(null)}),ye=r=>{const t=document.documentElement.style,n=document.body.style;r==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",n.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",n.overflow="")},ht=".spice__modal_close",vt=({children:r,dialog:t,callback:n,focusTarget:o,...a})=>{const{children:u,style:c,...v}=t,f=s.useRef(null),m=s.useCallback(()=>{var h;ye("add"),f.current.showModal(),(h=o==null?void 0:o.current)==null||h.focus(),n!=null&&n.onOpen&&n.onOpen(f.current)},[n,o]),p=s.useCallback(async()=>{n!=null&&n.onClose&&await Z(n.onClose(f.current)),ye("remove"),f.current.close()},[n]);return s.useEffect(()=>{const h=f.current.querySelectorAll(ht);if(h)return h.forEach(E=>E.addEventListener("click",p)),()=>{h.forEach(E=>E.removeEventListener("click",p))}},[p]),s.useEffect(()=>{const h=E=>{var C;((C=f.current)==null?void 0:C.hasAttribute("open"))&&E.key==="Escape"&&p()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[p]),d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>{m()},...a,children:r}),d.jsx("dialog",{ref:f,onClick:h=>{h.target===f.current&&p()},style:{border:"none",background:"none",maxWidth:"100%",maxHeight:"100%",width:"100%",height:"100%",padding:"0",pointerEvents:"auto",...c||{}},...v,children:u})]})},we=s.forwardRef(({children:r,...t},n)=>{const o=pe();return s.useEffect(()=>(o(()=>!1),()=>{o(()=>!0)}),[o]),d.jsx("div",{ref:n,...t,children:r})});we.displayName="StickyItem";const q=s.forwardRef((r,t)=>{const{fill:n,style:o,...a}=r;return d.jsx("video",{ref:t,style:n?{position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,right:0,color:"transparent",...o}:o,...a})});q.displayName="Video";const pt=r=>{const t=s.useRef(null),[n,o]=s.useState(!1),{fallback:a,...u}=r;return s.useEffect(()=>{var c;(c=t.current)==null||c.play().then(()=>{o(!1)}).catch(()=>{o(!0)})},[]),n?a:d.jsx(q,{ref:t,...u})},mt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},be=s.createContext(mt),xe=s.createContext(()=>{}),gt=({children:r,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[n,o]=s.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return d.jsx(be.Provider,{value:n,children:d.jsx(xe.Provider,{value:o,children:r})})},Ee=()=>s.useContext(be),$=()=>s.useContext(xe),yt=({children:r,value:t,...n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=$(),a=Ee(),u=s.useCallback(()=>{a.current===t||a.isLeaving||o(c=>({...c,isLeaving:!0,isAnimation:!0,prev:c.current,next:t}))},[o,a,t]);return d.jsx("button",{onClick:u,role:"tab","aria-controls":`tab-${t}`,"aria-selected":a.current===t,...n,children:r})},Se=({content:r,isOpen:t})=>{const n=r.querySelectorAll("a,button");if(!n)return;const o=t?"0":"-1";n.forEach(a=>{a.setAttribute("tabindex",o)})},wt=Object.freeze(Object.defineProperty({__proto__:null,Button:yt,Content:({children:r,value:t,callback:n,style:o,...a})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const u=s.useRef(!0),c=s.useRef(null),v=$(),f=Ee(),m=f.current===t&&!f.isLeaving;return s.useEffect(()=>{if(u.current){u.current=!1;return}if(!f.isAnimation){m&&n!=null&&n.onReset&&n.onReset(c.current);return}f.prev===t&&(async()=>(n!=null&&n.onClose&&await Z(n.onClose(c.current)),v(p=>({...p,isLeaving:!1,prev:"",current:p.next,next:""}))))(),m&&n!=null&&n.onOpen&&n.onOpen(c.current)},[f,v,n,t,m]),s.useEffect(()=>{Se({content:c.current,isOpen:f.current===t})},[f,t]),d.jsx("div",{ref:c,style:{...f.current!==t?{pointerEvents:"none",position:"absolute",visibility:"hidden",opacity:0,display:"none"}:{},...o},role:"tabpanel",id:`tab-${t}`,"aria-hidden":f.current!==t,...a,children:r})},Context:gt,useTabSwitch:()=>{const r=$();return(t,n)=>{r(o=>({isAnimation:n,isLeaving:n,prev:n?o.current:"",current:n?o.current:t,next:n?t:""}))}}},Symbol.toStringTag,{value:"Module"})),bt={target:"",toggle:!1,defaultValue:[]},Re=s.createContext(bt),Ce=s.createContext(()=>{}),xt=({children:r,defaultValue:t})=>{const[n,o]=s.useState({target:"",toggle:!1,defaultValue:t});return d.jsx(Re.Provider,{value:n,children:d.jsx(Ce.Provider,{value:o,children:r})})},Te=()=>s.useContext(Re),Et=()=>s.useContext(Ce),St=({children:r,value:t,...n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=Te(),a=Et(),u=s.useMemo(()=>!!o.defaultValue.find(f=>f===t),[o,t]),[c,v]=s.useState(u);return d.jsx("button",{onClick:()=>{a(f=>({...f,toggle:c,target:t})),v(!c)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":c,...n,children:r})},_e=({targetRef:r,callback:t,debounce:n=100,dependencies:o=[]})=>{const a=s.useRef(0),u=s.useRef(!0);s.useEffect(()=>{const c=new ResizeObserver(f=>{clearTimeout(a.current),a.current=setTimeout(()=>{if(u.current){u.current=!1;return}t(f[0].target)},n)}),v=r.current;if(v)return c.observe(v),()=>{c.unobserve(v),clearTimeout(a.current)}},o)},Rt=Object.freeze(Object.defineProperty({__proto__:null,Button:St,Content:({value:r,callback:t,children:n,...o})=>{if(r==="")throw new Error("Please set the value to something other than an empty string.");const a=Te(),u=s.useMemo(()=>!!a.defaultValue.find(h=>h===r),[a,r]),[c,v]=s.useState(u);s.useMemo(()=>{a.target===r&&v(!c)},[a.target,a.toggle]);const f=s.useRef(!0),m=s.useRef(null),p=s.useRef(null);return s.useEffect(()=>{if(f.current){f.current=!1;return}const h={height:p.current.getBoundingClientRect().height,target:m.current};c?t.onOpen(h):t.onClose(h)},[c,t]),s.useEffect(()=>{Se({content:m.current,isOpen:c})},[c]),_e({targetRef:p,callback:h=>{const E=h.getBoundingClientRect().height;c&&(m.current.style.height=`${E}px`)},dependencies:[c],debounce:100}),d.jsx("div",{ref:m,style:{overflow:"hidden",height:u?"auto":"0px"},id:`content-${r}`,"aria-labelledby":`button-${r}`,"aria-hidden":!c,children:d.jsx("div",{ref:p,...o,children:n})})},Context:xt},Symbol.toStringTag,{value:"Module"})),Ct=({tempo:r=3,onesRef:t,tensRef:n,hundredsRef:o,onProgress:a,onStart:u,onComplete:c})=>{const v=s.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),f=s.useRef(null),m=s.useCallback(({digitContainer:h,numbersTarget:E,digit:R,digitNumber:C,currentPercent:L,limit:A,destination:I})=>{if(v[R]!==C&&L<=A){const j=C.toString(),te=(Math.min(8,C)+1).toString(),ne=L>=A;E[0].innerText=j,E[1].innerText=ne?"0":te,a&&a({digitContainer:h,percent:L,digit:R,destination:I,duration:r/(I/R)}),v[R]=C}},[v,a,r]),p=s.useCallback(h=>(h>100&&(h=100),new Promise(E=>{if(h===0)return;const R={ones:t.current.querySelectorAll("div"),tens:n.current.querySelectorAll("div"),hundreds:o.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(f.current),f.current=setInterval(async()=>{const C=v.to+=1,L=async()=>{clearInterval(f.current),C>100&&c&&await Z(c(R.getAll())),E(C-1)};C===1&&u&&u(R.getAll()),C>h&&await L();const A=Math.floor(C/100)%100,I=Math.floor(C/10)%10,j=C%10;m({digitContainer:t.current,digit:1,digitNumber:j,currentPercent:C,numbersTarget:R.ones,limit:90,destination:h}),m({digitContainer:n.current,digit:10,digitNumber:I,currentPercent:C,numbersTarget:R.tens,limit:90,destination:h}),v[100]!==A&&(R.hundreds[1].innerText=A.toString(),a&&a({digitContainer:o.current,percent:C,digit:100,destination:h,duration:r/(h/10)}),v[100]=A)},Math.max(1e3/60,r/h*1e3))})),[v,m,n,o,t,c,a,u,r]);return s.useEffect(()=>()=>{clearInterval(f.current)},[]),p},je=s.memo(s.forwardRef((r,t)=>d.jsxs("div",{style:{width:"1ch",lineHeight:1,float:"left",textAlign:"center"},ref:t,children:[d.jsx("div",{...r,children:"0"}),d.jsx("div",{...r,children:"0"})]})));je.displayName="Digit";const Tt=Object.freeze(Object.defineProperty({__proto__:null,Digit:je,useLoadingProgress:Ct},Symbol.toStringTag,{value:"Module"})),Oe=({targetRef:r,rootMargin:t="0px",threshold:n=0,once:o=!1,onEnter:a,onLeave:u,dependencies:c=[]})=>{const v={rootMargin:t,threshold:n};s.useEffect(()=>{const f=r==null?void 0:r.current;if(!f)return;const m=(h,E)=>{h.forEach(R=>{R.isIntersecting&&a?(a(R),o&&E.unobserve(R.target)):!R.isIntersecting&&u&&u(R)})},p=new IntersectionObserver(m,v);return p.observe(f),()=>{p.unobserve(f)}},c)},Pe=r=>{const[t,n]=s.useState(!1);return Oe({...r,onEnter:()=>n(!0),onLeave:()=>n(!1)}),t},Ie=(r,t,n)=>{s.useEffect(()=>(K.ticker.add(r,t,n),()=>K.ticker.remove(r)),[t,n,r])},_t=({children:r,isReverse:t=!1,speed:n=1,style:o,...a})=>{const u=s.useRef(null),c=s.useRef(null),v=s.useRef(null),f=Pe({targetRef:u,once:!1}),m=s.useRef(0);return Ie(()=>{if(!f)return;const p=u.current,h=c.current,E=v.current;if(!p||!h||!E)return;const R=K.ticker.deltaRatio()/1e3,C=p.clientWidth/h.clientWidth;m.current+=R*n*C,m.current>=1&&(m.current=0),t?(h.style.transform=`translateX(${m.current*-100}%)`,E.style.transform=`translateX(${100-m.current*100}%)`):(h.style.transform=`translateX(${m.current*100}%)`,E.style.transform=`translateX(${m.current*100-200}%)`)}),d.jsx("div",{ref:u,style:{overflow:"hidden",...o||{}},...a,children:d.jsxs("div",{style:{whiteSpace:"nowrap",display:"flex"},children:[d.jsx("div",{ref:c,children:r}),d.jsx("div",{ref:v,children:r})]})})},jt=({type:r="chars",text:t,...n})=>{const o=r==="chars"?"":" ";return s.useMemo(()=>t.split(`
`).flatMap((u,c,v)=>[...u.split(o).map((f,m)=>f===" "?d.jsx("span",{...n,children:" "},`${c}-${m}`):d.jsx("span",{...n,children:f},`${c}-${m}`)),c<v.length-1?d.jsx("br",{},c):null]),[o,t,n])},Ot=({focusTarget:r})=>d.jsx("div",{onFocus:()=>{var t;return(t=r.current)==null?void 0:t.focus()},tabIndex:0,style:{opacity:0,width:0,height:0,position:"absolute",zIndex:"-99999999",pointerEvents:"none"}}),De=s.forwardRef(({loader:r="skeleton",delay:t=1e3,onView:n,skeleton:o,circular:a,children:u,style:c,...v},f)=>{const[m,p]=s.useState(t===0),h=!!u;return s.useEffect(()=>{t!==0&&setTimeout(()=>p(!0),t)},[t]),d.jsx("div",{ref:f,style:{overflow:"hidden",pointerEvents:"none",...h?{maxWidth:"fit-content",height:"auto"}:{},...c},...v,children:d.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",opacity:0,...m?{opacity:1,transitionProperty:"opacity",transitionDuration:(n==null?void 0:n.transitionDuration)||"0.3s",transitionTimingFunction:(n==null?void 0:n.transitionTimingFunction)||"ease-in-out"}:{}},children:[r==="skeleton"?d.jsx("div",{style:{background:`linear-gradient(90deg,transparent,${(o==null?void 0:o.waveColor)||"rgba(255,255,255,0.64)"},transparent)`,animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"ease-in-out",position:"absolute",width:"100%",height:"100%",top:0,left:0,animationName:"skeleton",animationIterationCount:"infinite"},children:d.jsx("style",{children:"@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}"})}):r==="circular"?d.jsx("div",{style:{width:a!=null&&a.width?a==null?void 0:a.width:"24px",height:a!=null&&a.height?a==null?void 0:a.height:"24px",border:(a==null?void 0:a.border)||"2px solid #fff",borderBottomColor:"transparent",animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"linear",position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",borderRadius:"50%",animationName:"circular",animationIterationCount:"infinite"},children:d.jsx("style",{children:"@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}"})}):r,h&&d.jsx("div",{style:{visibility:"hidden"},children:u})]})})});De.displayName="Loader";const Fe=typeof document<"u"?s.useLayoutEffect:s.useEffect,V=({callback:r,debounce:t=100,dependencies:n=[]})=>{const o=s.useRef(0),a=s.useRef(0),u=s.useCallback(()=>{clearTimeout(a.current),a.current=setTimeout(()=>{r({winW:window.innerWidth,winH:window.innerHeight,initWinW:o.current})},t)},[r,t]);s.useEffect(()=>(o.current=window.innerWidth,window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),clearTimeout(a.current)}),n)},Pt=({initWinW:r,winW:t,threshold:n})=>{let o=!(r<=n);t<=n?o&&window.location.reload():!o&&window.location.reload()},It=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,Dt=()=>{console.log(It)},Ft=r=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const n=r>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==n&&t.setAttribute("content",n)},At=({reloadThresholds:r,isFixViewportForSmall:t=!0,areYouFun:n=!1})=>{const o=s.useCallback(a=>{t&&Ft(a)},[t]);V({callback:({initWinW:a,winW:u})=>{r&&r.forEach(c=>Pt({initWinW:a,winW:u,threshold:c})),o(u)},debounce:100,dependencies:[]}),s.useEffect(()=>{document.body.dataset.spiceRendered="true",o(window.innerWidth),n&&process.env.NODE_ENV!=="development"&&Dt()},[n,o])},Ae=()=>{const[r,t]=s.useState(null),n=s.useCallback(()=>{const o=window.ontouchstart,a=navigator.maxTouchPoints;o!==void 0&&0<a?t(!0):t(!1)},[]);return V({callback:()=>n(),debounce:100,dependencies:[]}),s.useEffect(()=>n(),[n]),r},ee="scroll",Lt=({threshold:r=0,debounce:t=10,dependencies:n=[]})=>{const o=s.useRef(null),[a,u]=s.useReducer((p,h)=>{switch(h.type){case ee:return o.current=h.payload,h.payload;default:return p}},o.current),c=s.useRef(0),v=s.useRef(0),f=()=>window.scrollY||document.documentElement.scrollTop,m=s.useCallback(()=>{clearTimeout(v.current),v.current=setTimeout(()=>{const p=f();p>c.current+r&&o.current!=="down"?u({type:ee,payload:"down"}):p<c.current-r&&o.current!=="up"&&u({type:ee,payload:"up"}),c.current=p},t)},[t,r]);return s.useEffect(()=>(c.current=f(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),clearTimeout(v.current)}),n),a},kt=({type:r,width:t})=>{const[n,o]=s.useState(null),a=s.useCallback(u=>{switch(r){case"max":o(t>=u);break;case"min":o(t<=u);break}},[r,t]);return V({callback:({winW:u})=>a(u),debounce:100,dependencies:[]}),s.useEffect(()=>a(window.innerWidth),[a]),n},Mt=({shareUrl:r,sharePath:t,shareTitle:n="",width:o=600,height:a=800})=>{const u=s.useMemo(()=>encodeURIComponent(r),[r]),c=s.useMemo(()=>`height=${a},width=${o}`,[a,o]),v=s.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${u}&t=${n}`,"newwindow",c)}}),[u,n,c]),f=s.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${u}&text=${n}`,"newwindow",c)}}),[u,c,n]),m=s.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${u}&text=${n}`,"newwindow",c)}}),[u,c,n]),p=s.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:n,url:t||u})}catch{return}}}),[n,u,t]),[h,E]=s.useState(!1),R=s.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(r).then(()=>{E(!0)})}}),[r]);return{Facebook:v,X:f,LINE:m,share:p,copy:R,isCopied:h}},Wt=r=>{const t=Ae();Fe(()=>{!t||!r.current||(r.current.style.height=`${window.screen.height}px`)},[t,r]),V({callback:({winH:n})=>{r.current&&(t?r.current.style.height=`${window.screen.height}px`:r.current.style.height=`${n}px`)},dependencies:[t]})};b.Accordion=Rt,b.AutoScrollContainer=_t,b.FocusTrap=Ot,b.FormField=dt,b.Loader=De,b.LoadingProgress=Tt,b.LowPowerVideo=pt,b.ModalButton=vt,b.SpiceWrapper=ut,b.SplitText=jt,b.StickyItem=we,b.Tab=wt,b.Video=q,b.use100vh=Wt,b.useFrame=Ie,b.useIntersectionObserver=Oe,b.useIsIntersecting=Pe,b.useIsTouchDevice=Ae,b.useIsomorphicLayoutEffect=Fe,b.useMediaQuery=kt,b.useOverflowDispatch=pe,b.useResizeObserver=_e,b.useScrollDirection=Lt,b.useShare=Mt,b.useStarter=At,b.useWindowResizeObserver=V,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
