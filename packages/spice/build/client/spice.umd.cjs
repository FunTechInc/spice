(function(y,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react"),require("gsap")):typeof define=="function"&&define.amd?define(["exports","react","gsap"],s):(y=typeof globalThis<"u"?globalThis:y||self,s(y.spice={},y.React,y.gsap))})(this,function(y,s,Q){"use strict";"use client";var Z={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function at(){if(ve)return B;ve=1;var n=s,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,b){var p,v={},g=null,R=null;b!==void 0&&(g=""+b),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(R=h.ref);for(p in h)o.call(h,p)&&!c.hasOwnProperty(p)&&(v[p]=h[p]);if(d&&d.defaultProps)for(p in h=d.defaultProps,h)v[p]===void 0&&(v[p]=h[p]);return{$$typeof:t,type:d,key:g,ref:R,props:v,_owner:i.current}}return B.Fragment=r,B.jsx=f,B.jsxs=f,B}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function ct(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var n=s,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),x=Symbol.iterator,k="@@iterator";function L(e){if(e===null||typeof e!="object")return null;var a=x&&e[x]||e[k];return typeof a=="function"?a:null}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var a=arguments.length,l=new Array(a>1?a-1:0),m=1;m<a;m++)l[m-1]=arguments[m];re("error",e,l)}}function re(e,a,l){{var m=A.ReactDebugCurrentFrame,S=m.getStackAddendum();S!==""&&(a+="%s",l=l.concat([S]));var C=l.map(function(E){return String(E)});C.unshift("Warning: "+a),Function.prototype.apply.call(console[e],console,C)}}var oe=!1,Xt=!1,Jt=!1,Kt=!1,Qt=!1,Me;Me=Symbol.for("react.module.reference");function Zt(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===c||Qt||e===i||e===b||e===p||Kt||e===R||oe||Xt||Jt||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===v||e.$$typeof===f||e.$$typeof===d||e.$$typeof===h||e.$$typeof===Me||e.getModuleId!==void 0))}function qt(e,a,l){var m=e.displayName;if(m)return m;var S=a.displayName||a.name||"";return S!==""?l+"("+S+")":l}function We(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case r:return"Portal";case c:return"Profiler";case i:return"StrictMode";case b:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var a=e;return We(a)+".Consumer";case f:var l=e;return We(l._context)+".Provider";case h:return qt(e,e.render,"ForwardRef");case v:var m=e.displayName||null;return m!==null?m:I(e.type)||"Memo";case g:{var S=e,C=S._payload,E=S._init;try{return I(E(C))}catch{return null}}}return null}var M=Object.assign,V=0,Ne,Be,Ye,Ve,ze,He,Ue;function Ge(){}Ge.__reactDisabledLog=!0;function $t(){{if(V===0){Ne=console.log,Be=console.info,Ye=console.warn,Ve=console.error,ze=console.group,He=console.groupCollapsed,Ue=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function en(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Ne}),info:M({},e,{value:Be}),warn:M({},e,{value:Ye}),error:M({},e,{value:Ve}),group:M({},e,{value:ze}),groupCollapsed:M({},e,{value:He}),groupEnd:M({},e,{value:Ue})})}V<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var se=A.ReactCurrentDispatcher,ie;function U(e,a,l){{if(ie===void 0)try{throw Error()}catch(S){var m=S.stack.trim().match(/\n( *(at )?)/);ie=m&&m[1]||""}return`
`+ie+e}}var ae=!1,G;{var tn=typeof WeakMap=="function"?WeakMap:Map;G=new tn}function Xe(e,a){if(!e||ae)return"";{var l=G.get(e);if(l!==void 0)return l}var m;ae=!0;var S=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var C;C=se.current,se.current=null,$t();try{if(a){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(F){m=F}Reflect.construct(e,[],E)}else{try{E.call()}catch(F){m=F}e.call(E.prototype)}}else{try{throw Error()}catch(F){m=F}e()}}catch(F){if(F&&m&&typeof F.stack=="string"){for(var w=F.stack.split(`
`),O=m.stack.split(`
`),j=w.length-1,_=O.length-1;j>=1&&_>=0&&w[j]!==O[_];)_--;for(;j>=1&&_>=0;j--,_--)if(w[j]!==O[_]){if(j!==1||_!==1)do if(j--,_--,_<0||w[j]!==O[_]){var P=`
`+w[j].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,P),P}while(j>=1&&_>=0);break}}}finally{ae=!1,se.current=C,en(),Error.prepareStackTrace=S}var N=e?e.displayName||e.name:"",it=N?U(N):"";return typeof e=="function"&&G.set(e,it),it}function nn(e,a,l){return Xe(e,!1)}function rn(e){var a=e.prototype;return!!(a&&a.isReactComponent)}function X(e,a,l){if(e==null)return"";if(typeof e=="function")return Xe(e,rn(e));if(typeof e=="string")return U(e);switch(e){case b:return U("Suspense");case p:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return nn(e.render);case v:return X(e.type,a,l);case g:{var m=e,S=m._payload,C=m._init;try{return X(C(S),a,l)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Je={},Ke=A.ReactDebugCurrentFrame;function K(e){if(e){var a=e._owner,l=X(e.type,e._source,a?a.type:null);Ke.setExtraStackFrame(l)}else Ke.setExtraStackFrame(null)}function on(e,a,l,m,S){{var C=Function.call.bind(J);for(var E in e)if(C(e,E)){var w=void 0;try{if(typeof e[E]!="function"){var O=Error((m||"React class")+": "+l+" type `"+E+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[E]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}w=e[E](a,E,m,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(j){w=j}w&&!(w instanceof Error)&&(K(S),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",m||"React class",l,E,typeof w),K(null)),w instanceof Error&&!(w.message in Je)&&(Je[w.message]=!0,K(S),T("Failed %s type: %s",l,w.message),K(null))}}}var sn=Array.isArray;function ce(e){return sn(e)}function an(e){{var a=typeof Symbol=="function"&&Symbol.toStringTag,l=a&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function cn(e){try{return Qe(e),!1}catch{return!0}}function Qe(e){return""+e}function Ze(e){if(cn(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",an(e)),Qe(e)}var z=A.ReactCurrentOwner,un={key:!0,ref:!0,__self:!0,__source:!0},qe,$e,ue;ue={};function ln(e){if(J.call(e,"ref")){var a=Object.getOwnPropertyDescriptor(e,"ref").get;if(a&&a.isReactWarning)return!1}return e.ref!==void 0}function fn(e){if(J.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function dn(e,a){if(typeof e.ref=="string"&&z.current&&a&&z.current.stateNode!==a){var l=I(z.current.type);ue[l]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(z.current.type),e.ref),ue[l]=!0)}}function vn(e,a){{var l=function(){qe||(qe=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function hn(e,a){{var l=function(){$e||($e=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var pn=function(e,a,l,m,S,C,E){var w={$$typeof:t,type:e,key:a,ref:l,props:E,_owner:C};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:S}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function gn(e,a,l,m,S){{var C,E={},w=null,O=null;l!==void 0&&(Ze(l),w=""+l),fn(a)&&(Ze(a.key),w=""+a.key),ln(a)&&(O=a.ref,dn(a,S));for(C in a)J.call(a,C)&&!un.hasOwnProperty(C)&&(E[C]=a[C]);if(e&&e.defaultProps){var j=e.defaultProps;for(C in j)E[C]===void 0&&(E[C]=j[C])}if(w||O){var _=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&vn(E,_),O&&hn(E,_)}return pn(e,w,O,S,m,z.current,E)}}var le=A.ReactCurrentOwner,et=A.ReactDebugCurrentFrame;function W(e){if(e){var a=e._owner,l=X(e.type,e._source,a?a.type:null);et.setExtraStackFrame(l)}else et.setExtraStackFrame(null)}var fe;fe=!1;function de(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function tt(){{if(le.current){var e=I(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function mn(e){{if(e!==void 0){var a=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+a+":"+l+"."}return""}}var nt={};function bn(e){{var a=tt();if(!a){var l=typeof e=="string"?e:e.displayName||e.name;l&&(a=`

Check the top-level render call using <`+l+">.")}return a}}function rt(e,a){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=bn(a);if(nt[l])return;nt[l]=!0;var m="";e&&e._owner&&e._owner!==le.current&&(m=" It was passed a child from "+I(e._owner.type)+"."),W(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,m),W(null)}}function ot(e,a){{if(typeof e!="object")return;if(ce(e))for(var l=0;l<e.length;l++){var m=e[l];de(m)&&rt(m,a)}else if(de(e))e._store&&(e._store.validated=!0);else if(e){var S=L(e);if(typeof S=="function"&&S!==e.entries)for(var C=S.call(e),E;!(E=C.next()).done;)de(E.value)&&rt(E.value,a)}}}function yn(e){{var a=e.type;if(a==null||typeof a=="string")return;var l;if(typeof a=="function")l=a.propTypes;else if(typeof a=="object"&&(a.$$typeof===h||a.$$typeof===v))l=a.propTypes;else return;if(l){var m=I(a);on(l,e.props,"prop",m,e)}else if(a.PropTypes!==void 0&&!fe){fe=!0;var S=I(a);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",S||"Unknown")}typeof a.getDefaultProps=="function"&&!a.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function wn(e){{for(var a=Object.keys(e.props),l=0;l<a.length;l++){var m=a[l];if(m!=="children"&&m!=="key"){W(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",m),W(null);break}}e.ref!==null&&(W(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}function st(e,a,l,m,S,C){{var E=Zt(e);if(!E){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=mn(S);O?w+=O:w+=tt();var j;e===null?j="null":ce(e)?j="array":e!==void 0&&e.$$typeof===t?(j="<"+(I(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):j=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,w)}var _=gn(e,a,l,S,C);if(_==null)return _;if(E){var P=a.children;if(P!==void 0)if(m)if(ce(P)){for(var N=0;N<P.length;N++)ot(P[N],e);Object.freeze&&Object.freeze(P)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ot(P,e)}return e===o?wn(_):yn(_),_}}function En(e,a,l){return st(e,a,l,!0)}function xn(e,a,l){return st(e,a,l,!1)}var Sn=xn,Rn=En;Y.Fragment=o,Y.jsx=Sn,Y.jsxs=Rn}()),Y}process.env.NODE_ENV==="production"?Z.exports=at():Z.exports=ct();var u=Z.exports;const pe=s.createContext(!0),ge=s.createContext(n=>!n),ut=({children:n})=>{const[t,r]=s.useState(!0);return u.jsx(pe.Provider,{value:t,children:u.jsx(ge.Provider,{value:r,children:n})})},lt=({children:n})=>{const t=s.useContext(pe);return u.jsx("div",{style:{flexDirection:"column",display:"flex",minHeight:"100vh",...t&&{overflow:"hidden"}},children:n})},ft=({children:n})=>u.jsx(ut,{children:u.jsx(lt,{children:n})}),me=()=>s.useContext(ge),dt=({formProps:n})=>{const{style:t,...r}=n;return u.jsx("input",{...r,style:{overflow:"hidden",...t}})},vt=({formProps:n})=>{const{isSelect:t,style:r,...o}=n;if(!t)return;const i=()=>{const f=t.defaultValue;return f?u.jsx("option",{hidden:!0,children:f}):null},c=()=>{const f=t.defaultSelectedIndex;if(f)return t.options[f]};return u.jsxs("select",{...o,style:{overflow:"hidden",fontSize:"16px",...r||{}},defaultValue:c(),children:[u.jsx(i,{}),t.options.map(f=>u.jsx("option",{value:f,children:f},f))]})},ht={position:"absolute",whiteSpace:"nowrap",width:"1px",height:"1px",overflow:"hidden",border:"0",padding:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",zIndex:"-99999"},pt=({layoutType:n,formPropsArr:t,label:r,FormItem:o,errors:i})=>{const c=({index:f})=>i?Array.isArray(i)?i[f]:i:null;if(n==="block")return u.jsxs(u.Fragment,{children:[r&&u.jsx("label",{htmlFor:t[0].id,children:r}),u.jsx(o,{formProps:t[0]}),u.jsx(c,{index:0})]});if(n==="flex")return u.jsxs(u.Fragment,{children:[r&&u.jsx("label",{htmlFor:t[0].id,children:r}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx(o,{formProps:t[0]}),u.jsx(c,{index:0})]}),u.jsxs("li",{children:[u.jsx(o,{formProps:t[1]}),u.jsx(c,{index:1})]})]})]});if(n==="radio-check"){const f=t.map(({id:d,value:h,style:b,optionLabel:p,...v})=>u.jsxs("li",{children:[u.jsx(o,{formProps:{id:d,value:h,style:{...ht,...b||{}},...v}}),u.jsx("label",{htmlFor:d,children:p||h})]},d));return u.jsxs(u.Fragment,{children:[r&&u.jsx("label",{children:r}),u.jsx("ul",{children:f}),u.jsx(c,{index:0})]})}},gt=({formProps:n})=>{const{isTextarea:t,...r}=n;if(t)return u.jsx("textarea",{...r,...t})},mt=({label:n,formProps:t,errors:r,...o})=>{if(r&&Array.isArray(r)&&r.length>2)throw new Error("The length of error is up to 2.");const i=Array.isArray(t)?t:[t],{type:c,isSelect:f,isTextarea:d}=i[0],h=i.length;if(!(c==="radio"||c==="checkbox")&&h>2)throw new Error("The length of formProps is up to 2.");const b=["radio","checkbox"].includes(c||"")?"radio-check":h===1?"block":"flex";return u.jsx("fieldset",{...o,children:u.jsx(pt,{layoutType:b,formPropsArr:i,label:n,errors:r,FormItem:f?vt:d?gt:dt})})},q=n=>new Promise(t=>{n instanceof Promise?n.then(()=>{t(null)}):t(null)}),bt={border:"none",background:"none",maxWidth:"100%",maxHeight:"100%",width:"100%",height:"100%",padding:"0",pointerEvents:"auto"},$={close:"spice__modal_close",scrollArea:"js_modal_scroll_area"},be=()=>parseInt(getComputedStyle(document.documentElement).paddingRight,10)||0,yt=()=>window.innerWidth-document.documentElement.clientWidth,ye=(n,{paddingRight:t,scrollbarWidth:r})=>{const o=document.documentElement.style,i=document.body.style,c=n?t+r:t-r;o.paddingRight=`${c}px`,o.scrollbarGutter=n?"auto":"",i.overflow=n?"hidden":""},we=s.forwardRef(({dialog:n,onOpen:t,onClose:r,focusTarget:o,scrollLock:i=!0,...c},f)=>{const d=s.useRef(null),h=s.useRef({paddingRight:0,scrollbarWidth:0}),b=s.useCallback(()=>{var v,g,R;i&&(h.current.paddingRight=be(),h.current.scrollbarWidth=yt(),ye(!0,h.current)),d.current.showModal(),(v=o==null?void 0:o.current)==null||v.focus(),(R=(g=d.current)==null?void 0:g.getElementsByClassName($.scrollArea)[0])==null||R.scrollTo(0,0),t==null||t(d.current)},[t,o,i]),p=s.useCallback(async()=>{r&&await q(r(d.current)),i&&(h.current.paddingRight=be(),ye(!1,h.current)),d.current.close()},[r,i]);return s.useEffect(()=>{const v=d.current.querySelectorAll(`.${$.close}`);if(v)return v.forEach(g=>g.addEventListener("click",p)),()=>v.forEach(g=>g.removeEventListener("click",p))},[p]),s.useEffect(()=>{const v=g=>{var x;((x=d.current)==null?void 0:x.hasAttribute("open"))&&g.key==="Escape"&&p()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[p]),u.jsxs(u.Fragment,{children:[u.jsx("button",{ref:f,...c,onClick:v=>{var g;b(),(g=c==null?void 0:c.onClick)==null||g.call(c,v)}}),u.jsx("dialog",{ref:d,...n,onClick:v=>{var g;v.target===d.current&&p(),(g=n.onClick)==null||g.call(n,v)},style:{...bt,...n.style||{}}})]})});we.displayName="ModalButton";const Ee=s.forwardRef(({children:n,...t},r)=>{const o=me();return s.useEffect(()=>(o(()=>!1),()=>{o(()=>!0)}),[o]),u.jsx("div",{ref:r,...t,children:n})});Ee.displayName="StickyItem";const wt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},xe=s.createContext(wt),Se=s.createContext(()=>{}),Et=({children:n,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[r,o]=s.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return u.jsx(xe.Provider,{value:r,children:u.jsx(Se.Provider,{value:o,children:n})})},Re=()=>s.useContext(xe),ee=()=>s.useContext(Se),xt=({children:n,value:t,...r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=ee(),i=Re(),c=s.useCallback(()=>{i.current===t||i.isLeaving||o(f=>({...f,isLeaving:!0,isAnimation:!0,prev:f.current,next:t}))},[o,i,t]);return u.jsx("button",{onClick:c,role:"tab","aria-controls":`tab-${t}`,"aria-selected":i.current===t,...r,children:n})},Ce=({content:n,isOpen:t})=>{const r=n.querySelectorAll("a,button");if(!r)return;const o=t?"0":"-1";r.forEach(i=>{i.setAttribute("tabindex",o)})},St=Object.freeze(Object.defineProperty({__proto__:null,Button:xt,Content:({children:n,value:t,onOpen:r,onClose:o,onReset:i,style:c,...f})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const d=s.useRef(!0),h=s.useRef(null),b=ee(),p=Re(),v=p.current===t&&!p.isLeaving;return s.useEffect(()=>{if(d.current){d.current=!1;return}if(!p.isAnimation){v&&i&&i(h.current);return}p.prev===t&&(async()=>(o&&await q(o(h.current)),b(g=>({...g,isLeaving:!1,prev:"",current:g.next,next:""}))))(),v&&r&&r(h.current)},[p,b,r,o,i,t,v]),s.useEffect(()=>{Ce({content:h.current,isOpen:p.current===t})},[p,t]),u.jsx("div",{ref:h,style:{...p.current!==t?{pointerEvents:"none",position:"absolute",visibility:"hidden",opacity:0,display:"none"}:{},...c},role:"tabpanel",id:`tab-${t}`,"aria-hidden":p.current!==t,...f,children:n})},Context:Et,useTabSwitch:()=>{const n=ee();return(t,r)=>{n(o=>({isAnimation:r,isLeaving:r,prev:r?o.current:"",current:r?o.current:t,next:r?t:""}))}}},Symbol.toStringTag,{value:"Module"})),Rt={target:"",toggle:!1,defaultValue:[]},je=s.createContext(Rt),_e=s.createContext(()=>{}),Ct=({children:n,defaultValue:t})=>{const[r,o]=s.useState({target:"",toggle:!1,defaultValue:t});return u.jsx(je.Provider,{value:r,children:u.jsx(_e.Provider,{value:o,children:n})})},Te=()=>s.useContext(je),jt=()=>s.useContext(_e),_t=({children:n,value:t,...r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const o=Te(),i=jt(),[c,f]=s.useState(()=>!!o.defaultValue.find(d=>d===t));return u.jsx("button",{onClick:()=>{i(d=>({...d,toggle:c,target:t})),f(!c)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":c,...r,children:n})},Oe=({targetRef:n,onResize:t,debounce:r=100,dependencies:o=[]})=>{const i=s.useRef(0),c=s.useRef(!0);s.useEffect(()=>{const f=new ResizeObserver(h=>{clearTimeout(i.current),i.current=setTimeout(()=>{if(c.current){c.current=!1;return}t(h[0].target)},r)}),d=n.current;if(d)return f.observe(d),()=>{f.unobserve(d),clearTimeout(i.current)}},o)},Tt=Object.freeze(Object.defineProperty({__proto__:null,Button:_t,Content:({value:n,onOpen:t,onClose:r,children:o,...i})=>{if(n==="")throw new Error("Please set the value to something other than an empty string.");const c=Te(),[f,d]=s.useState(()=>!!c.defaultValue.find(g=>g===n)),h=s.useRef(f);s.useEffect(()=>{c.target===n&&d(!f)},[c.target,c.toggle]);const b=s.useRef(!0),p=s.useRef(null),v=s.useRef(null);return s.useEffect(()=>{if(b.current){b.current=!1;return}const g={height:v.current.getBoundingClientRect().height,target:p.current};f?t(g):r(g)},[f,t,r]),s.useEffect(()=>{Ce({content:p.current,isOpen:f})},[f]),Oe({targetRef:v,onResize:g=>{const R=g.getBoundingClientRect().height;f&&(p.current.style.height=`${R}px`)},dependencies:[f],debounce:100}),u.jsx("div",{ref:p,style:{overflow:"hidden",height:h.current?"auto":"0px"},id:`content-${n}`,"aria-labelledby":`button-${n}`,"aria-hidden":!f,children:u.jsx("div",{ref:v,...i,children:o})})},Context:Ct},Symbol.toStringTag,{value:"Module"})),Ot=({tempo:n=3,onesRef:t,tensRef:r,hundredsRef:o,onProgress:i,onStart:c,onComplete:f})=>{const d=s.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),h=s.useRef(null),b=s.useCallback(({digitContainer:v,numbersTarget:g,digit:R,digitNumber:x,currentPercent:k,limit:L,destination:A})=>{if(d[R]!==x&&k<=L){const T=x.toString(),re=(Math.min(8,x)+1).toString(),oe=k>=L;g[0].innerText=T,g[1].innerText=oe?"0":re,i&&i({digitContainer:v,percent:k,digit:R,destination:A,duration:n/(A/R)}),d[R]=x}},[d,i,n]),p=s.useCallback(v=>(v>100&&(v=100),new Promise(g=>{if(v===0)return;const R={ones:t.current.querySelectorAll("div"),tens:r.current.querySelectorAll("div"),hundreds:o.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(h.current),h.current=setInterval(async()=>{const x=d.to+=1,k=async()=>{clearInterval(h.current),x>100&&f&&await q(f(R.getAll())),g(x-1)};x===1&&c&&c(R.getAll()),x>v&&await k();const L=Math.floor(x/100)%100,A=Math.floor(x/10)%10,T=x%10;b({digitContainer:t.current,digit:1,digitNumber:T,currentPercent:x,numbersTarget:R.ones,limit:90,destination:v}),b({digitContainer:r.current,digit:10,digitNumber:A,currentPercent:x,numbersTarget:R.tens,limit:90,destination:v}),d[100]!==L&&(R.hundreds[1].innerText=L.toString(),i&&i({digitContainer:o.current,percent:x,digit:100,destination:v,duration:n/(v/10)}),d[100]=L)},Math.max(1e3/60,n/v*1e3))})),[d,b,r,o,t,f,i,c,n]);return s.useEffect(()=>()=>{clearInterval(h.current)},[]),p},ke=s.memo(s.forwardRef((n,t)=>u.jsxs("div",{style:{width:"1ch",lineHeight:1,float:"left",textAlign:"center"},ref:t,children:[u.jsx("div",{...n,children:"0"}),u.jsx("div",{...n,children:"0"})]})));ke.displayName="Digit";const kt=Object.freeze(Object.defineProperty({__proto__:null,Digit:ke,useLoadingProgress:Ot},Symbol.toStringTag,{value:"Module"})),Pe=({targetRef:n,rootMargin:t="0px",threshold:r=0,once:o=!1,onEnter:i,onLeave:c,dependencies:f=[]}={})=>{const d=s.useRef(null),[h,b]=s.useState(!1);return s.useEffect(()=>{const p=(n==null?void 0:n.current)??d.current;if(!p)return;const v=(R,x)=>{R.forEach(k=>{b(k.isIntersecting),k.isIntersecting?(i&&i(k),o&&x.unobserve(k.target)):k.isIntersecting||c&&c(k)})},g=new IntersectionObserver(v,{rootMargin:t,threshold:r});return g.observe(p),()=>{g.unobserve(p)}},[d,i,c,o,r,t,n,...f]),{ref:d,isIntersecting:h}},te=(n,t,r)=>{s.useEffect(()=>(Q.ticker.add(n,t,r),()=>Q.ticker.remove(n)),[t,r,n])},Pt=({children:n,speed:t=1,style:r,...o})=>{const i=s.useRef(null),c=s.useRef(null),f=s.useRef(null),{isIntersecting:d}=Pe({targetRef:i,once:!1}),h=s.useRef(0);return te(()=>{if(!d)return;const b=i.current,p=c.current,v=f.current;if(!b||!p||!v)return;const g=Q.ticker.deltaRatio()/1e3,R=b.clientWidth/p.clientWidth;if(h.current+=g*Math.abs(t)*R,h.current>=1&&(h.current=0),t<0){const x=h.current*-100;p.style.transform=`translateX(${x}%)`,v.style.transform=`translateX(${x}%)`}else{const x=h.current*100;p.style.transform=`translateX(${x}%)`,v.style.transform=`translateX(${x-200}%)`}}),u.jsx("div",{ref:i,style:{overflow:"hidden",...r||{}},...o,children:u.jsxs("div",{style:{whiteSpace:"nowrap",display:"flex"},children:[u.jsx("div",{ref:c,children:n}),u.jsx("div",{ref:f,children:n})]})})},D={regex:/(\n|###br\.[^#]+###|###br###)/,isRegularBreak:n=>n===`
`||n==="###br###",isSpecificBreak:n=>n.match(/###br\.(.*?)###/),getClassName:n=>{var t;return((t=n.match(new RegExp("(?<=###br\\.).+?(?=###)")))==null?void 0:t[0])||""}},Ae=n=>s.useMemo(()=>n.split(D.regex).map((t,r)=>D.isRegularBreak(t)?u.jsx("br",{},r):D.isSpecificBreak(t)?u.jsx("br",{className:D.getClassName(t)},r):t),[n]),At=({text:n})=>{const t=Ae(n);return u.jsx(u.Fragment,{children:t})},De=({containerProps:n,...t})=>n?u.jsx("span",{...n,children:u.jsx("span",{...t})}):u.jsx("span",{...t}),Dt=({type:n="chars",text:t,exception:r,containerProps:o,...i})=>{const c=n==="chars"?"":" ";return s.useMemo(()=>t.split(D.regex).flatMap((d,h)=>D.isRegularBreak(d)?[null,u.jsx("br",{},h)]:D.isSpecificBreak(d)?[null,u.jsx("br",{className:D.getClassName(d)},h)]:[...d.split(c).map((b,p)=>{if(r){const v=r.find(g=>g.selector===b);if(v)return u.jsx(De,{containerProps:o,...i,...v.attributes,children:b},`${h}-${p}`)}return u.jsx(De,{containerProps:o,...i,children:b===" "?" ":b},`${h}-${p}`)}),null]),[c,t,i,r,o])},Ie=s.forwardRef((n,t)=>{const{fill:r,style:o,...i}=n;return u.jsx("video",{ref:t,style:r?{position:"absolute",width:"100%",height:"100%",inset:0,color:"transparent",...o}:o,...i})});Ie.displayName="Video";const Fe=s.forwardRef(({loader:n="skeleton",delay:t=1e3,onView:r,skeleton:o,circular:i,children:c,style:f,...d},h)=>{const[b,p]=s.useState(t===0),v=!!c;return s.useEffect(()=>{t!==0&&setTimeout(()=>p(!0),t)},[t]),u.jsx("div",{ref:h,style:{overflow:"hidden",pointerEvents:"none",...v?{maxWidth:"fit-content",height:"auto"}:{},...f},...d,children:u.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",opacity:0,...b?{opacity:1,transitionProperty:"opacity",transitionDuration:(r==null?void 0:r.transitionDuration)||"0.3s",transitionTimingFunction:(r==null?void 0:r.transitionTimingFunction)||"ease-in-out"}:{}},children:[n==="skeleton"?u.jsx("div",{style:{background:`linear-gradient(90deg,transparent,${(o==null?void 0:o.waveColor)||"rgba(255,255,255,0.64)"},transparent)`,animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"ease-in-out",position:"absolute",width:"100%",height:"100%",top:0,left:0,animationName:"skeleton",animationIterationCount:"infinite"},children:u.jsx("style",{children:"@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}"})}):n==="circular"?u.jsx("div",{style:{width:i!=null&&i.width?i==null?void 0:i.width:"24px",height:i!=null&&i.height?i==null?void 0:i.height:"24px",border:(i==null?void 0:i.border)||"2px solid #fff",borderBottomColor:"transparent",animationDuration:(o==null?void 0:o.animationDuration)||"1.6s",animationTimingFunction:(o==null?void 0:o.animationTimingFunction)||"linear",position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",borderRadius:"50%",animationName:"circular",animationIterationCount:"infinite"},children:u.jsx("style",{children:"@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}"})}):n,v&&u.jsx("div",{style:{visibility:"hidden"},children:c})]})})});Fe.displayName="Loader";const Le=typeof document<"u"?s.useLayoutEffect:s.useEffect,H=({onResize:n,debounce:t=100,dependencies:r=[]})=>{const o=s.useRef(0),i=s.useRef(0),c=s.useCallback(()=>{clearTimeout(i.current),i.current=setTimeout(()=>{n({winW:window.innerWidth,winH:window.innerHeight,initWinW:o.current})},t)},[n,t]);s.useEffect(()=>(o.current=window.innerWidth,window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),clearTimeout(i.current)}),r)},It=`
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`,Ft=n=>{let t=It;typeof n=="string"&&(t+=n),console.log(t)},Lt=n=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const r=n>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==r&&t.setAttribute("content",r)},Mt=({isFixViewportForSmall:n=!0,areYouFun:t=!1}={})=>{const r=s.useCallback(o=>{n&&Lt(o)},[n]);H({onResize:({winW:o})=>r(o),debounce:100,dependencies:[]}),s.useEffect(()=>{document.body.dataset.spiceRendered="true",r(window.innerWidth),t&&process.env.NODE_ENV!=="development"&&Ft(t)},[t,r])},Wt=()=>{const[n,t]=s.useState(null),r=s.useCallback(()=>{const o=window.ontouchstart,i=navigator.maxTouchPoints;o!==void 0&&0<i?t(!0):t(!1)},[]);return H({onResize:()=>r(),debounce:100,dependencies:[]}),s.useEffect(()=>r(),[r]),n},ne="scroll",Nt=({threshold:n=0,debounce:t=10,dependencies:r=[]})=>{const o=s.useRef(null),[i,c]=s.useReducer((p,v)=>{switch(v.type){case ne:return o.current=v.payload,v.payload;default:return p}},o.current),f=s.useRef(0),d=s.useRef(0),h=()=>window.scrollY||document.documentElement.scrollTop,b=s.useCallback(()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const p=h();p>f.current+n&&o.current!=="down"?c({type:ne,payload:"down"}):p<f.current-n&&o.current!=="up"&&c({type:ne,payload:"up"}),f.current=p},t)},[t,n]);return s.useEffect(()=>(f.current=h(),window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),clearTimeout(d.current)}),r),i},Bt=(n,t)=>{const[r,o]=s.useState(null),i=s.useCallback(c=>{switch(n){case"max":o(t>=c);break;case"min":o(t<=c);break}},[n,t]);return H({onResize:({winW:c})=>i(c),debounce:100,dependencies:[i]}),s.useEffect(()=>i(window.innerWidth),[i]),r},Yt=({shareUrl:n,sharePath:t,shareTitle:r="",width:o=600,height:i=800})=>{const c=s.useMemo(()=>encodeURIComponent(n),[n]),f=s.useMemo(()=>`height=${i},width=${o}`,[i,o]),d=s.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${c}&t=${r}`,"newwindow",f)}}),[c,r,f]),h=s.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${c}&text=${r}`,"newwindow",f)}}),[c,f,r]),b=s.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${c}&text=${r}`,"newwindow",f)}}),[c,f,r]),p=s.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:r,url:t||c})}catch{return}}}),[r,c,t]),[v,g]=s.useState(!1),R=s.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(n).then(()=>{g(!0)})}}),[n]);return{Facebook:d,X:h,LINE:b,share:p,copy:R,isCopied:v}},Vt=n=>{if(/\b(iPad|iPhone|iPod)\b/.test(n))return"iOS";if(/\bAndroid\b/i.test(n))return"Android"},zt=n=>{if(/Gecko\/\d+/i.test(n)&&!/like Gecko/i.test(n))return"Gecko";if(/AppleWebKit\/\d+/i.test(n)&&/like Gecko/i.test(n))return"WebKit";if(/Opera\/\d+/i.test(n))return"Presto";if(/Trident\/\d+/i.test(n))return"Trident";if(/Edge\/\d+/i.test(n))return"EdgeHTML";if(/Chrome\/\d+/i.test(n))return"Blink"},Ht=n=>{const[t,r]=s.useState({mobileOS:void 0,isMobile:void 0,renderingEngine:void 0,userAgent:"",testing:void 0});return Le(()=>{const o=navigator.userAgent,i=Vt(o),c=zt(o);r({mobileOS:i,isMobile:/Mobi/.test(o),renderingEngine:c,userAgent:o,testing:n&&n(o)})},[]),t},Ut=n=>{const[t,r]=s.useState(!1),o=s.useRef();te(()=>{t&&o.current&&n(o.current)});const i=s.useCallback(d=>{o.current=d,r(!0)},[]),c=s.useCallback(()=>{o.current=void 0,r(!1)},[]),f=s.useCallback(d=>{o.current=d},[]);return{onPointerEnter:i,onPointerLeave:c,onPointerMove:f}},Gt=n=>{const[t,r]=s.useState();return s.useEffect(()=>{n&&n.current&&r(n.current)},[n]),t};y.Accordion=Tt,y.AutoScrollContainer=Pt,y.CustomBreakLineParser=At,y.CustomBreakLineUtils=D,y.FormField=mt,y.Loader=Fe,y.LoadingProgress=kt,y.MODAL_CLASSNAME=$,y.ModalButton=we,y.SpiceWrapper=ft,y.SplitText=Dt,y.StickyItem=Ee,y.Tab=St,y.Video=Ie,y.useDeviceDetector=Ht,y.useFrame=te,y.useIntersectionObserver=Pe,y.useIsTouchDevice=Wt,y.useIsomorphicLayoutEffect=Le,y.useMediaQuery=Bt,y.useOnHovering=Ut,y.useOverflowDispatch=me,y.useParseBreakLine=Ae,y.useResizeObserver=Oe,y.useScrollDirection=Nt,y.useShare=Yt,y.useStarter=Mt,y.useValidElement=Gt,y.useWindowResizeObserver=H,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
