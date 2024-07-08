(function(x,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react"),require("gsap")):typeof define=="function"&&define.amd?define(["exports","react","gsap"],i):(x=typeof globalThis<"u"?globalThis:x||self,i(x.spice={},x.React,x.gsap))})(this,function(x,i,K){"use strict";"use client";var Q={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function it(){if(le)return N;le=1;var n=i,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(h,v,m){var d,p={},b=null,y=null;m!==void 0&&(b=""+m),v.key!==void 0&&(b=""+v.key),v.ref!==void 0&&(y=v.ref);for(d in v)o.call(v,d)&&!c.hasOwnProperty(d)&&(p[d]=v[d]);if(h&&h.defaultProps)for(d in v=h.defaultProps,v)p[d]===void 0&&(p[d]=v[d]);return{$$typeof:t,type:h,key:b,ref:y,props:p,_owner:s.current}}return N.Fragment=r,N.jsx=l,N.jsxs=l,N}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function st(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){var n=i,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),R=Symbol.iterator,A="@@iterator";function k(e){if(e===null||typeof e!="object")return null;var a=R&&e[R]||e[A];return typeof a=="function"?a:null}var I=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function j(e){{for(var a=arguments.length,u=new Array(a>1?a-1:0),g=1;g<a;g++)u[g-1]=arguments[g];ee("error",e,u)}}function ee(e,a,u){{var g=I.ReactDebugCurrentFrame,S=g.getStackAddendum();S!==""&&(a+="%s",u=u.concat([S]));var C=u.map(function(E){return String(E)});C.unshift("Warning: "+a),Function.prototype.apply.call(console[e],console,C)}}var te=!1,Yt=!1,zt=!1,Bt=!1,Vt=!1,Ae;Ae=Symbol.for("react.module.reference");function Ut(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===c||Vt||e===s||e===m||e===d||Bt||e===y||te||Yt||zt||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===p||e.$$typeof===l||e.$$typeof===h||e.$$typeof===v||e.$$typeof===Ae||e.getModuleId!==void 0))}function Ht(e,a,u){var g=e.displayName;if(g)return g;var S=a.displayName||a.name||"";return S!==""?u+"("+S+")":u}function Me(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case r:return"Portal";case c:return"Profiler";case s:return"StrictMode";case m:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var a=e;return Me(a)+".Consumer";case l:var u=e;return Me(u._context)+".Provider";case v:return Ht(e,e.render,"ForwardRef");case p:var g=e.displayName||null;return g!==null?g:D(e.type)||"Memo";case b:{var S=e,C=S._payload,E=S._init;try{return D(E(C))}catch{return null}}}return null}var M=Object.assign,z=0,Le,We,Ne,Ye,ze,Be,Ve;function Ue(){}Ue.__reactDisabledLog=!0;function Gt(){{if(z===0){Le=console.log,We=console.info,Ne=console.warn,Ye=console.error,ze=console.group,Be=console.groupCollapsed,Ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}z++}}function Xt(){{if(z--,z===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Le}),info:M({},e,{value:We}),warn:M({},e,{value:Ne}),error:M({},e,{value:Ye}),group:M({},e,{value:ze}),groupCollapsed:M({},e,{value:Be}),groupEnd:M({},e,{value:Ve})})}z<0&&j("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ne=I.ReactCurrentDispatcher,re;function U(e,a,u){{if(re===void 0)try{throw Error()}catch(S){var g=S.stack.trim().match(/\n( *(at )?)/);re=g&&g[1]||""}return`
`+re+e}}var oe=!1,H;{var Jt=typeof WeakMap=="function"?WeakMap:Map;H=new Jt}function He(e,a){if(!e||oe)return"";{var u=H.get(e);if(u!==void 0)return u}var g;oe=!0;var S=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var C;C=ne.current,ne.current=null,Gt();try{if(a){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(F){g=F}Reflect.construct(e,[],E)}else{try{E.call()}catch(F){g=F}e.call(E.prototype)}}else{try{throw Error()}catch(F){g=F}e()}}catch(F){if(F&&g&&typeof F.stack=="string"){for(var w=F.stack.split(`
`),O=g.stack.split(`
`),T=w.length-1,_=O.length-1;T>=1&&_>=0&&w[T]!==O[_];)_--;for(;T>=1&&_>=0;T--,_--)if(w[T]!==O[_]){if(T!==1||_!==1)do if(T--,_--,_<0||w[T]!==O[_]){var P=`
`+w[T].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,P),P}while(T>=1&&_>=0);break}}}finally{oe=!1,ne.current=C,Xt(),Error.prepareStackTrace=S}var W=e?e.displayName||e.name:"",ot=W?U(W):"";return typeof e=="function"&&H.set(e,ot),ot}function Kt(e,a,u){return He(e,!1)}function Qt(e){var a=e.prototype;return!!(a&&a.isReactComponent)}function G(e,a,u){if(e==null)return"";if(typeof e=="function")return He(e,Qt(e));if(typeof e=="string")return U(e);switch(e){case m:return U("Suspense");case d:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Kt(e.render);case p:return G(e.type,a,u);case b:{var g=e,S=g._payload,C=g._init;try{return G(C(S),a,u)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,Ge={},Xe=I.ReactDebugCurrentFrame;function J(e){if(e){var a=e._owner,u=G(e.type,e._source,a?a.type:null);Xe.setExtraStackFrame(u)}else Xe.setExtraStackFrame(null)}function Zt(e,a,u,g,S){{var C=Function.call.bind(X);for(var E in e)if(C(e,E)){var w=void 0;try{if(typeof e[E]!="function"){var O=Error((g||"React class")+": "+u+" type `"+E+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[E]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}w=e[E](a,E,g,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){w=T}w&&!(w instanceof Error)&&(J(S),j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",g||"React class",u,E,typeof w),J(null)),w instanceof Error&&!(w.message in Ge)&&(Ge[w.message]=!0,J(S),j("Failed %s type: %s",u,w.message),J(null))}}}var qt=Array.isArray;function ie(e){return qt(e)}function $t(e){{var a=typeof Symbol=="function"&&Symbol.toStringTag,u=a&&e[Symbol.toStringTag]||e.constructor.name||"Object";return u}}function en(e){try{return Je(e),!1}catch{return!0}}function Je(e){return""+e}function Ke(e){if(en(e))return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$t(e)),Je(e)}var B=I.ReactCurrentOwner,tn={key:!0,ref:!0,__self:!0,__source:!0},Qe,Ze,se;se={};function nn(e){if(X.call(e,"ref")){var a=Object.getOwnPropertyDescriptor(e,"ref").get;if(a&&a.isReactWarning)return!1}return e.ref!==void 0}function rn(e){if(X.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function on(e,a){if(typeof e.ref=="string"&&B.current&&a&&B.current.stateNode!==a){var u=D(B.current.type);se[u]||(j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(B.current.type),e.ref),se[u]=!0)}}function sn(e,a){{var u=function(){Qe||(Qe=!0,j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};u.isReactWarning=!0,Object.defineProperty(e,"key",{get:u,configurable:!0})}}function an(e,a){{var u=function(){Ze||(Ze=!0,j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};u.isReactWarning=!0,Object.defineProperty(e,"ref",{get:u,configurable:!0})}}var cn=function(e,a,u,g,S,C,E){var w={$$typeof:t,type:e,key:a,ref:u,props:E,_owner:C};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:g}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:S}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function un(e,a,u,g,S){{var C,E={},w=null,O=null;u!==void 0&&(Ke(u),w=""+u),rn(a)&&(Ke(a.key),w=""+a.key),nn(a)&&(O=a.ref,on(a,S));for(C in a)X.call(a,C)&&!tn.hasOwnProperty(C)&&(E[C]=a[C]);if(e&&e.defaultProps){var T=e.defaultProps;for(C in T)E[C]===void 0&&(E[C]=T[C])}if(w||O){var _=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&sn(E,_),O&&an(E,_)}return cn(e,w,O,S,g,B.current,E)}}var ae=I.ReactCurrentOwner,qe=I.ReactDebugCurrentFrame;function L(e){if(e){var a=e._owner,u=G(e.type,e._source,a?a.type:null);qe.setExtraStackFrame(u)}else qe.setExtraStackFrame(null)}var ce;ce=!1;function ue(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function $e(){{if(ae.current){var e=D(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ln(e){{if(e!==void 0){var a=e.fileName.replace(/^.*[\\\/]/,""),u=e.lineNumber;return`

Check your code at `+a+":"+u+"."}return""}}var et={};function fn(e){{var a=$e();if(!a){var u=typeof e=="string"?e:e.displayName||e.name;u&&(a=`

Check the top-level render call using <`+u+">.")}return a}}function tt(e,a){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var u=fn(a);if(et[u])return;et[u]=!0;var g="";e&&e._owner&&e._owner!==ae.current&&(g=" It was passed a child from "+D(e._owner.type)+"."),L(e),j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',u,g),L(null)}}function nt(e,a){{if(typeof e!="object")return;if(ie(e))for(var u=0;u<e.length;u++){var g=e[u];ue(g)&&tt(g,a)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var S=k(e);if(typeof S=="function"&&S!==e.entries)for(var C=S.call(e),E;!(E=C.next()).done;)ue(E.value)&&tt(E.value,a)}}}function dn(e){{var a=e.type;if(a==null||typeof a=="string")return;var u;if(typeof a=="function")u=a.propTypes;else if(typeof a=="object"&&(a.$$typeof===v||a.$$typeof===p))u=a.propTypes;else return;if(u){var g=D(a);Zt(u,e.props,"prop",g,e)}else if(a.PropTypes!==void 0&&!ce){ce=!0;var S=D(a);j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",S||"Unknown")}typeof a.getDefaultProps=="function"&&!a.getDefaultProps.isReactClassApproved&&j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vn(e){{for(var a=Object.keys(e.props),u=0;u<a.length;u++){var g=a[u];if(g!=="children"&&g!=="key"){L(e),j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",g),L(null);break}}e.ref!==null&&(L(e),j("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function rt(e,a,u,g,S,C){{var E=Ut(e);if(!E){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=ln(S);O?w+=O:w+=$e();var T;e===null?T="null":ie(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(D(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,w)}var _=un(e,a,u,S,C);if(_==null)return _;if(E){var P=a.children;if(P!==void 0)if(g)if(ie(P)){for(var W=0;W<P.length;W++)nt(P[W],e);Object.freeze&&Object.freeze(P)}else j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nt(P,e)}return e===o?vn(_):dn(_),_}}function hn(e,a,u){return rt(e,a,u,!0)}function pn(e,a,u){return rt(e,a,u,!1)}var gn=pn,mn=hn;Y.Fragment=o,Y.jsx=gn,Y.jsxs=mn}()),Y}process.env.NODE_ENV==="production"?Q.exports=it():Q.exports=st();var f=Q.exports;const de=i.createContext(!0),ve=i.createContext(n=>!n),at=({children:n})=>{const[t,r]=i.useState(!0);return f.jsx(de.Provider,{value:t,children:f.jsx(ve.Provider,{value:r,children:n})})},ct=({children:n})=>{const t=i.useContext(de);return f.jsx("div",{style:{flexDirection:"column",display:"flex",minHeight:"100vh",...t&&{overflow:"hidden"}},children:n})},ut=({children:n})=>f.jsx(at,{children:f.jsx(ct,{children:n})}),he=()=>i.useContext(ve),pe=({formProps:n})=>{const{style:t,...r}=n;return f.jsx("input",{...r,style:{overflow:"hidden",...t}})},lt=({formProps:n})=>{const{isSelect:t,style:r,...o}=n;if(!t)return;const s=()=>{const l=t.defaultValue;return l?f.jsx("option",{hidden:!0,children:l}):null},c=()=>{const l=t.defaultSelectedIndex;if(l)return t.options[l]};return f.jsxs("select",{...o,style:{overflow:"hidden",fontSize:"16px",...r||{}},defaultValue:c(),children:[f.jsx(s,{}),t.options.map(l=>f.jsx("option",{value:l,children:l},l))]})},ge=({layoutType:n,formPropsArr:t,label:r,FormItem:o,errors:s})=>{const c=i.useCallback(l=>!s||!s[l]?null:s[l],[s]);if(n==="block")return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{htmlFor:t[0].id,children:r}),f.jsx(o,{formProps:t[0]}),c(0)]});if(n==="flex")return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{htmlFor:t[0].id,children:r}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(o,{formProps:t[0]}),c(0)]}),f.jsxs("li",{children:[f.jsx(o,{formProps:t[1]}),c(1)]})]})]});if(n==="radio-check"){const l=t.map(({id:h,value:v,style:m,optionLabel:d,...p})=>f.jsxs("li",{children:[f.jsx(o,{formProps:{id:h,value:v,style:{position:"absolute",whiteSpace:"nowrap",width:"1px",height:"1px",overflow:"hidden",border:"0",padding:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",zIndex:"-99999",...m||{}},...p}}),f.jsx("label",{htmlFor:h,children:d||v})]},h));return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{children:r}),f.jsx("ul",{children:l}),c(0)]})}},ft=({formProps:n})=>{const{isTextarea:t,...r}=n;if(t)return f.jsx("textarea",{...r,...t})},dt=({label:n,formProps:t,errors:r,...o})=>{const s=t,c=s[0].type,l=s.length,h=!!s[0].isSelect,v=!!s[0].isTextarea;if(!(c==="radio"||c==="checkbox")&&l>2)throw new Error("The length of formProps is up to 2.");if(r&&r.length>2)throw new Error("The length of error is up to 2.");const m=i.useCallback(p=>ge({layoutType:l===1?"block":"flex",formPropsArr:s,label:n,FormItem:p,errors:r}),[r,s,n,l]),d=i.useCallback(()=>h?m(lt):v?m(ft):c==="radio"||c==="checkbox"?ge({layoutType:"radio-check",formPropsArr:s,label:n,FormItem:pe,errors:r}):m(pe),[r,s,n,h,v,m,c]);return f.jsx("fieldset",{...o,children:f.jsx(d,{})})},Z=n=>new Promise(t=>{n instanceof Promise?n.then(()=>{t(null)}):t(null)}),me=n=>{const t=document.documentElement.style,r=document.body.style;n==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",r.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",r.overflow="")},vt=".spice__modal_close",be=i.forwardRef(({children:n,dialog:t,onOpen:r,onClose:o,focusTarget:s,...c},l)=>{const{children:h,style:v,...m}=t,d=i.useRef(null),p=i.useCallback(()=>{var y;me("add"),d.current.showModal(),(y=s==null?void 0:s.current)==null||y.focus(),r&&r(d.current)},[r,s]),b=i.useCallback(async()=>{o&&await Z(o(d.current)),me("remove"),d.current.close()},[o]);return i.useEffect(()=>{const y=d.current.querySelectorAll(vt);if(y)return y.forEach(R=>R.addEventListener("click",b)),()=>{y.forEach(R=>R.removeEventListener("click",b))}},[b]),i.useEffect(()=>{const y=R=>{var k;((k=d.current)==null?void 0:k.hasAttribute("open"))&&R.key==="Escape"&&b()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[b]),f.jsxs(f.Fragment,{children:[f.jsx("button",{ref:l,onClick:()=>{p()},...c,children:n}),f.jsx("dialog",{ref:d,onClick:y=>{y.target===d.current&&b()},style:{border:"none",background:"none",maxWidth:"100%",maxHeight:"100%",width:"100%",height:"100%",padding:"0",pointerEvents:"auto",...v||{}},...m,children:h})]})});be.displayName="ModalButton";const ye=i.forwardRef(({children:n,...t},r)=>{const o=he();return i.useEffect(()=>(o(()=>!1),()=>{o(()=>!0)}),[o]),f.jsx("div",{ref:r,...t,children:n})});ye.displayName="StickyItem";const ht={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},we=i.createContext(ht),Ee=i.createContext(()=>{}),pt=({children:n,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[r,o]=i.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return f.jsx(we.Provider,{value:r,children:f.jsx(Ee.Provider,{value:o,children:n})})},xe=()=>i.useContext(we),q=()=>i.useContext(Ee),gt=({children:n,value:t,...r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=q(),s=xe(),c=i.useCallback(()=>{s.current===t||s.isLeaving||o(l=>({...l,isLeaving:!0,isAnimation:!0,prev:l.current,next:t}))},[o,s,t]);return f.jsx("button",{onClick:c,role:"tab","aria-controls":`tab-${t}`,"aria-selected":s.current===t,...r,children:n})},Se=({content:n,isOpen:t})=>{const r=n.querySelectorAll("a,button");if(!r)return;const o=t?"0":"-1";r.forEach(s=>{s.setAttribute("tabindex",o)})},mt=Object.freeze(Object.defineProperty({__proto__:null,Button:gt,Content:({children:n,value:t,onOpen:r,onClose:o,onReset:s,style:c,...l})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const h=i.useRef(!0),v=i.useRef(null),m=q(),d=xe(),p=d.current===t&&!d.isLeaving;return i.useEffect(()=>{if(h.current){h.current=!1;return}if(!d.isAnimation){p&&s&&s(v.current);return}d.prev===t&&(async()=>(o&&await Z(o(v.current)),m(b=>({...b,isLeaving:!1,prev:"",current:b.next,next:""}))))(),p&&r&&r(v.current)},[d,m,r,o,s,t,p]),i.useEffect(()=>{Se({content:v.current,isOpen:d.current===t})},[d,t]),f.jsx("div",{ref:v,style:{...d.current!==t?{pointerEvents:"none",position:"absolute",visibility:"hidden",opacity:0,display:"none"}:{},...c},role:"tabpanel",id:`tab-${t}`,"aria-hidden":d.current!==t,...l,children:n})},Context:pt,useTabSwitch:()=>{const n=q();return(t,r)=>{n(o=>({isAnimation:r,isLeaving:r,prev:r?o.current:"",current:r?o.current:t,next:r?t:""}))}}},Symbol.toStringTag,{value:"Module"})),bt={target:"",toggle:!1,defaultValue:[]},Re=i.createContext(bt),Ce=i.createContext(()=>{}),yt=({children:n,defaultValue:t})=>{const[r,o]=i.useState({target:"",toggle:!1,defaultValue:t});return f.jsx(Re.Provider,{value:r,children:f.jsx(Ce.Provider,{value:o,children:n})})},Te=()=>i.useContext(Re),wt=()=>i.useContext(Ce),Et=({children:n,value:t,...r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=Te(),s=wt(),c=i.useMemo(()=>!!o.defaultValue.find(v=>v===t),[o,t]),[l,h]=i.useState(c);return f.jsx("button",{onClick:()=>{s(v=>({...v,toggle:l,target:t})),h(!l)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":l,...r,children:n})},_e=({targetRef:n,onResize:t,debounce:r=100,dependencies:o=[]})=>{const s=i.useRef(0),c=i.useRef(!0);i.useEffect(()=>{const l=new ResizeObserver(v=>{clearTimeout(s.current),s.current=setTimeout(()=>{if(c.current){c.current=!1;return}t(v[0].target)},r)}),h=n.current;if(h)return l.observe(h),()=>{l.unobserve(h),clearTimeout(s.current)}},o)},xt=Object.freeze(Object.defineProperty({__proto__:null,Button:Et,Content:({value:n,onOpen:t,onClose:r,children:o,...s})=>{if(n==="")throw new Error("Please set the value to something other than an empty string.");const c=Te(),l=i.useMemo(()=>!!c.defaultValue.find(b=>b===n),[c,n]),[h,v]=i.useState(l);i.useMemo(()=>{c.target===n&&v(!h)},[c.target,c.toggle]);const m=i.useRef(!0),d=i.useRef(null),p=i.useRef(null);return i.useEffect(()=>{if(m.current){m.current=!1;return}const b={height:p.current.getBoundingClientRect().height,target:d.current};h?t(b):r(b)},[h,t,r]),i.useEffect(()=>{Se({content:d.current,isOpen:h})},[h]),_e({targetRef:p,onResize:b=>{const y=b.getBoundingClientRect().height;h&&(d.current.style.height=`${y}px`)},dependencies:[h],debounce:100}),f.jsx("div",{ref:d,style:{overflow:"hidden",height:l?"auto":"0px"},id:`content-${n}`,"aria-labelledby":`button-${n}`,"aria-hidden":!h,children:f.jsx("div",{ref:p,...s,children:o})})},Context:yt},Symbol.toStringTag,{value:"Module"})),St=({tempo:n=3,onesRef:t,tensRef:r,hundredsRef:o,onProgress:s,onStart:c,onComplete:l})=>{const h=i.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),v=i.useRef(null),m=i.useCallback(({digitContainer:p,numbersTarget:b,digit:y,digitNumber:R,currentPercent:A,limit:k,destination:I})=>{if(h[y]!==R&&A<=k){const j=R.toString(),ee=(Math.min(8,R)+1).toString(),te=A>=k;b[0].innerText=j,b[1].innerText=te?"0":ee,s&&s({digitContainer:p,percent:A,digit:y,destination:I,duration:n/(I/y)}),h[y]=R}},[h,s,n]),d=i.useCallback(p=>(p>100&&(p=100),new Promise(b=>{if(p===0)return;const y={ones:t.current.querySelectorAll("div"),tens:r.current.querySelectorAll("div"),hundreds:o.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(v.current),v.current=setInterval(async()=>{const R=h.to+=1,A=async()=>{clearInterval(v.current),R>100&&l&&await Z(l(y.getAll())),b(R-1)};R===1&&c&&c(y.getAll()),R>p&&await A();const k=Math.floor(R/100)%100,I=Math.floor(R/10)%10,j=R%10;m({digitContainer:t.current,digit:1,digitNumber:j,currentPercent:R,numbersTarget:y.ones,limit:90,destination:p}),m({digitContainer:r.current,digit:10,digitNumber:I,currentPercent:R,numbersTarget:y.tens,limit:90,destination:p}),h[100]!==k&&(y.hundreds[1].innerText=k.toString(),s&&s({digitContainer:o.current,percent:R,digit:100,destination:p,duration:n/(p/10)}),h[100]=k)},Math.max(1e3/60,n/p*1e3))})),[h,m,r,o,t,l,s,c,n]);return i.useEffect(()=>()=>{clearInterval(v.current)},[]),d},je=i.memo(i.forwardRef((n,t)=>f.jsxs("div",{style:{width:"1ch",lineHeight:1,float:"left",textAlign:"center"},ref:t,children:[f.jsx("div",{...n,children:"0"}),f.jsx("div",{...n,children:"0"})]})));je.displayName="Digit";const Rt=Object.freeze(Object.defineProperty({__proto__:null,Digit:je,useLoadingProgress:St},Symbol.toStringTag,{value:"Module"})),Oe=({targetRef:n,rootMargin:t="0px",threshold:r=0,once:o=!1,onEnter:s,onLeave:c,dependencies:l=[]})=>{const h={rootMargin:t,threshold:r};i.useEffect(()=>{const v=n==null?void 0:n.current;if(!v)return;const m=(p,b)=>{p.forEach(y=>{y.isIntersecting&&s?(s(y),o&&b.unobserve(y.target)):!y.isIntersecting&&c&&c(y)})},d=new IntersectionObserver(m,h);return d.observe(v),()=>{d.unobserve(v)}},l)},Pe=n=>{const[t,r]=i.useState(!1);return Oe({...n,onEnter:()=>r(!0),onLeave:()=>r(!1)}),t},ke=(n,t,r)=>{i.useEffect(()=>(K.ticker.add(n,t,r),()=>K.ticker.remove(n)),[t,r,n])},Ct=({children:n,isReverse:t=!1,speed:r=1,style:o,...s})=>{const c=i.useRef(null),l=i.useRef(null),h=i.useRef(null),v=Pe({targetRef:c,once:!1}),m=i.useRef(0);return ke(()=>{if(!v)return;const d=c.current,p=l.current,b=h.current;if(!d||!p||!b)return;const y=K.ticker.deltaRatio()/1e3,R=d.clientWidth/p.clientWidth;m.current+=y*r*R,m.current>=1&&(m.current=0),t?(p.style.transform=`translateX(${m.current*-100}%)`,b.style.transform=`translateX(${100-m.current*100}%)`):(p.style.transform=`translateX(${m.current*100}%)`,b.style.transform=`translateX(${m.current*100-200}%)`)}),f.jsx("div",{ref:c,style:{overflow:"hidden",...o||{}},...s,children:f.jsxs("div",{style:{whiteSpace:"nowrap",display:"flex"},children:[f.jsx("div",{ref:l,children:n}),f.jsx("div",{ref:h,children:n})]})})},Tt=({type:n="chars",text:t,...r})=>{const o=n==="chars"?"":" ";return i.useMemo(()=>t.split(`
`).flatMap((c,l,h)=>[...c.split(o).map((v,m)=>v===" "?f.jsx("span",{...r,children:" "},`${l}-${m}`):f.jsx("span",{...r,children:v},`${l}-${m}`)),l<h.length-1?f.jsx("br",{},l):null]),[o,t,r])},Ie=i.forwardRef((n,t)=>{const{fill:r,style:o,...s}=n;return f.jsx("video",{ref:t,style:r?{position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,right:0,color:"transparent",...o}:o,...s})});Ie.displayName="Video";const _t=({focusTarget:n})=>f.jsx("div",{onFocus:()=>{var t;return(t=n.current)==null?void 0:t.focus()},tabIndex:0,style:{opacity:0,width:0,height:0,position:"absolute",zIndex:"-99999999",pointerEvents:"none"}}),De=i.forwardRef(({loader:n="skeleton",delay:t=1e3,onView:r,skeleton:o,circular:s,children:c,style:l,...h},v)=>{const[m,d]=i.useState(t===0),p=!!c;return i.useEffect(()=>{t!==0&&setTimeout(()=>d(!0),t)},[t]),f.jsx("div",{ref:v,style:{overflow:"hidden",pointerEvents:"none",...p?{maxWidth:"fit-content",height:"auto"}:{},...l},...h,children:f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",opacity:0,...m?{opacity:1,transitionProperty:"opacity",transitionDuration:(r==null?void 0:r.transitionDuration)||"0.3s",transitionTimingFunction:(r==null?void 0:r.transitionTimingFunction)||"ease-in-out"}:{}},children:[n==="skeleton"?f.jsx("div",{style:{background:`linear-gradient(90deg,transparent,${(o==null?void 0:o.waveColor)||"rgba(255,255,255,0.64)"},transparent)`,animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"ease-in-out",position:"absolute",width:"100%",height:"100%",top:0,left:0,animationName:"skeleton",animationIterationCount:"infinite"},children:f.jsx("style",{children:"@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}"})}):n==="circular"?f.jsx("div",{style:{width:s!=null&&s.width?s==null?void 0:s.width:"24px",height:s!=null&&s.height?s==null?void 0:s.height:"24px",border:(s==null?void 0:s.border)||"2px solid #fff",borderBottomColor:"transparent",animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"linear",position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",borderRadius:"50%",animationName:"circular",animationIterationCount:"infinite"},children:f.jsx("style",{children:"@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}"})}):n,p&&f.jsx("div",{style:{visibility:"hidden"},children:c})]})})});De.displayName="Loader";const Fe=typeof document<"u"?i.useLayoutEffect:i.useEffect,V=({onResize:n,debounce:t=100,dependencies:r=[]})=>{const o=i.useRef(0),s=i.useRef(0),c=i.useCallback(()=>{clearTimeout(s.current),s.current=setTimeout(()=>{n({winW:window.innerWidth,winH:window.innerHeight,initWinW:o.current})},t)},[n,t]);i.useEffect(()=>(o.current=window.innerWidth,window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),clearTimeout(s.current)}),r)},jt=({initWinW:n,winW:t,threshold:r})=>{let o=!(n<=r);t<=r?o&&window.location.reload():!o&&window.location.reload()},Ot=`
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`,Pt=()=>{console.log(Ot)},kt=n=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const r=n>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==r&&t.setAttribute("content",r)},It=({reloadThresholds:n=[],isFixViewportForSmall:t=!0,areYouFun:r=!1}={})=>{const o=i.useCallback(s=>{t&&kt(s)},[t]);V({onResize:({initWinW:s,winW:c})=>{n.length>0&&n.forEach(l=>jt({initWinW:s,winW:c,threshold:l})),o(c)},debounce:100,dependencies:[]}),i.useEffect(()=>{document.body.dataset.spiceRendered="true",o(window.innerWidth),r&&process.env.NODE_ENV!=="development"&&Pt()},[r,o])},Dt=()=>{const[n,t]=i.useState(null),r=i.useCallback(()=>{const o=window.ontouchstart,s=navigator.maxTouchPoints;o!==void 0&&0<s?t(!0):t(!1)},[]);return V({onResize:()=>r(),debounce:100,dependencies:[]}),i.useEffect(()=>r(),[r]),n},$="scroll",Ft=({threshold:n=0,debounce:t=10,dependencies:r=[]})=>{const o=i.useRef(null),[s,c]=i.useReducer((d,p)=>{switch(p.type){case $:return o.current=p.payload,p.payload;default:return d}},o.current),l=i.useRef(0),h=i.useRef(0),v=()=>window.scrollY||document.documentElement.scrollTop,m=i.useCallback(()=>{clearTimeout(h.current),h.current=setTimeout(()=>{const d=v();d>l.current+n&&o.current!=="down"?c({type:$,payload:"down"}):d<l.current-n&&o.current!=="up"&&c({type:$,payload:"up"}),l.current=d},t)},[t,n]);return i.useEffect(()=>(l.current=v(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),clearTimeout(h.current)}),r),s},At=(n,t)=>{const[r,o]=i.useState(null),s=i.useCallback(c=>{switch(n){case"max":o(t>=c);break;case"min":o(t<=c);break}},[n,t]);return V({onResize:({winW:c})=>s(c),debounce:100,dependencies:[]}),i.useEffect(()=>s(window.innerWidth),[s]),r},Mt=({shareUrl:n,sharePath:t,shareTitle:r="",width:o=600,height:s=800})=>{const c=i.useMemo(()=>encodeURIComponent(n),[n]),l=i.useMemo(()=>`height=${s},width=${o}`,[s,o]),h=i.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${c}&t=${r}`,"newwindow",l)}}),[c,r,l]),v=i.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${c}&text=${r}`,"newwindow",l)}}),[c,l,r]),m=i.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${c}&text=${r}`,"newwindow",l)}}),[c,l,r]),d=i.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:r,url:t||c})}catch{return}}}),[r,c,t]),[p,b]=i.useState(!1),y=i.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(n).then(()=>{b(!0)})}}),[n]);return{Facebook:h,X:v,LINE:m,share:d,copy:y,isCopied:p}},Lt=n=>{if(/\b(iPad|iPhone|iPod)\b/.test(n))return"iOS";if(/\bAndroid\b/i.test(n))return"Android"},Wt=n=>{if(/Gecko\/\d+/i.test(n)&&!/like Gecko/i.test(n))return"Gecko";if(/AppleWebKit\/\d+/i.test(n)&&/like Gecko/i.test(n))return"WebKit";if(/Opera\/\d+/i.test(n))return"Presto";if(/Trident\/\d+/i.test(n))return"Trident";if(/Edge\/\d+/i.test(n))return"EdgeHTML";if(/Chrome\/\d+/i.test(n))return"Blink"},Nt=n=>{const[t,r]=i.useState({mobileOS:void 0,isMobile:void 0,renderingEngine:void 0,userAgent:"",testing:void 0});return Fe(()=>{const o=navigator.userAgent,s=Lt(o),c=Wt(o);r({mobileOS:s,isMobile:/Mobi/.test(o),renderingEngine:c,userAgent:o,testing:n&&n(o)})},[]),t};x.Accordion=xt,x.AutoScrollContainer=Ct,x.FocusTrap=_t,x.FormField=dt,x.Loader=De,x.LoadingProgress=Rt,x.ModalButton=be,x.SpiceWrapper=ut,x.SplitText=Tt,x.StickyItem=ye,x.Tab=mt,x.Video=Ie,x.useDeviceDetector=Nt,x.useFrame=ke,x.useIntersectionObserver=Oe,x.useIsIntersecting=Pe,x.useIsTouchDevice=Dt,x.useIsomorphicLayoutEffect=Fe,x.useMediaQuery=At,x.useOverflowDispatch=he,x.useResizeObserver=_e,x.useScrollDirection=Ft,x.useShare=Mt,x.useStarter=It,x.useWindowResizeObserver=V,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
