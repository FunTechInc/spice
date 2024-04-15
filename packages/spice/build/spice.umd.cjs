(function(y,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(y=typeof globalThis<"u"?globalThis:y||self,i(y.spice={},y.React))})(this,function(y,i){"use strict";const jn="";var $={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function at(){if(ve)return Y;ve=1;var r=i,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,_){var h,v={},b=null,C=null;_!==void 0&&(b=""+_),f.key!==void 0&&(b=""+f.key),f.ref!==void 0&&(C=f.ref);for(h in f)n.call(f,h)&&!a.hasOwnProperty(h)&&(v[h]=f[h]);if(d&&d.defaultProps)for(h in f=d.defaultProps,f)v[h]===void 0&&(v[h]=f[h]);return{$$typeof:t,type:d,key:b,ref:C,props:v,_owner:s.current}}return Y.Fragment=o,Y.jsx=u,Y.jsxs=u,Y}var V={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function ct(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var r=i,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),R=Symbol.iterator,F="@@iterator";function k(e){if(e===null||typeof e!="object")return null;var c=R&&e[R]||e[F];return typeof c=="function"?c:null}var I=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var c=arguments.length,l=new Array(c>1?c-1:0),m=1;m<c;m++)l[m-1]=arguments[m];j("error",e,l)}}function j(e,c,l){{var m=I.ReactDebugCurrentFrame,E=m.getStackAddendum();E!==""&&(c+="%s",l=l.concat([E]));var x=l.map(function(w){return String(w)});x.unshift("Warning: "+c),Function.prototype.apply.call(console[e],console,x)}}var ie=!1,Kt=!1,Qt=!1,Zt=!1,qt=!1,Me;Me=Symbol.for("react.module.reference");function $t(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===a||qt||e===s||e===_||e===h||Zt||e===C||ie||Kt||Qt||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===u||e.$$typeof===d||e.$$typeof===f||e.$$typeof===Me||e.getModuleId!==void 0))}function en(e,c,l){var m=e.displayName;if(m)return m;var E=c.displayName||c.name||"";return E!==""?l+"("+E+")":l}function Ne(e){return e.displayName||"Context"}function L(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case o:return"Portal";case a:return"Profiler";case s:return"StrictMode";case _:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var c=e;return Ne(c)+".Consumer";case u:var l=e;return Ne(l._context)+".Provider";case f:return en(e,e.render,"ForwardRef");case v:var m=e.displayName||null;return m!==null?m:L(e.type)||"Memo";case b:{var E=e,x=E._payload,w=E._init;try{return L(w(x))}catch{return null}}}return null}var M=Object.assign,U=0,We,Ye,Ve,ze,Be,Ue,He;function Ge(){}Ge.__reactDisabledLog=!0;function tn(){{if(U===0){We=console.log,Ye=console.info,Ve=console.warn,ze=console.error,Be=console.group,Ue=console.groupCollapsed,He=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function nn(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:We}),info:M({},e,{value:Ye}),warn:M({},e,{value:Ve}),error:M({},e,{value:ze}),group:M({},e,{value:Be}),groupCollapsed:M({},e,{value:Ue}),groupEnd:M({},e,{value:He})})}U<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ae=I.ReactCurrentDispatcher,ce;function X(e,c,l){{if(ce===void 0)try{throw Error()}catch(E){var m=E.stack.trim().match(/\n( *(at )?)/);ce=m&&m[1]||""}return`
`+ce+e}}var ue=!1,K;{var rn=typeof WeakMap=="function"?WeakMap:Map;K=new rn}function Je(e,c){if(!e||ue)return"";{var l=K.get(e);if(l!==void 0)return l}var m;ue=!0;var E=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=ae.current,ae.current=null,tn();try{if(c){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(A){m=A}Reflect.construct(e,[],w)}else{try{w.call()}catch(A){m=A}e.call(w.prototype)}}else{try{throw Error()}catch(A){m=A}e()}}catch(A){if(A&&m&&typeof A.stack=="string"){for(var g=A.stack.split(`
`),O=m.stack.split(`
`),T=g.length-1,P=O.length-1;T>=1&&P>=0&&g[T]!==O[P];)P--;for(;T>=1&&P>=0;T--,P--)if(g[T]!==O[P]){if(T!==1||P!==1)do if(T--,P--,P<0||g[T]!==O[P]){var D=`
`+g[T].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,D),D}while(T>=1&&P>=0);break}}}finally{ue=!1,ae.current=x,nn(),Error.prepareStackTrace=E}var W=e?e.displayName||e.name:"",it=W?X(W):"";return typeof e=="function"&&K.set(e,it),it}function on(e,c,l){return Je(e,!1)}function sn(e){var c=e.prototype;return!!(c&&c.isReactComponent)}function Q(e,c,l){if(e==null)return"";if(typeof e=="function")return Je(e,sn(e));if(typeof e=="string")return X(e);switch(e){case _:return X("Suspense");case h:return X("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return on(e.render);case v:return Q(e.type,c,l);case b:{var m=e,E=m._payload,x=m._init;try{return Q(x(E),c,l)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,Xe={},Ke=I.ReactDebugCurrentFrame;function q(e){if(e){var c=e._owner,l=Q(e.type,e._source,c?c.type:null);Ke.setExtraStackFrame(l)}else Ke.setExtraStackFrame(null)}function an(e,c,l,m,E){{var x=Function.call.bind(Z);for(var w in e)if(x(e,w)){var g=void 0;try{if(typeof e[w]!="function"){var O=Error((m||"React class")+": "+l+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}g=e[w](c,w,m,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){g=T}g&&!(g instanceof Error)&&(q(E),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",m||"React class",l,w,typeof g),q(null)),g instanceof Error&&!(g.message in Xe)&&(Xe[g.message]=!0,q(E),S("Failed %s type: %s",l,g.message),q(null))}}}var cn=Array.isArray;function le(e){return cn(e)}function un(e){{var c=typeof Symbol=="function"&&Symbol.toStringTag,l=c&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function ln(e){try{return Qe(e),!1}catch{return!0}}function Qe(e){return""+e}function Ze(e){if(ln(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",un(e)),Qe(e)}var H=I.ReactCurrentOwner,dn={key:!0,ref:!0,__self:!0,__source:!0},qe,$e,de;de={};function fn(e){if(Z.call(e,"ref")){var c=Object.getOwnPropertyDescriptor(e,"ref").get;if(c&&c.isReactWarning)return!1}return e.ref!==void 0}function pn(e){if(Z.call(e,"key")){var c=Object.getOwnPropertyDescriptor(e,"key").get;if(c&&c.isReactWarning)return!1}return e.key!==void 0}function _n(e,c){if(typeof e.ref=="string"&&H.current&&c&&H.current.stateNode!==c){var l=L(H.current.type);de[l]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',L(H.current.type),e.ref),de[l]=!0)}}function vn(e,c){{var l=function(){qe||(qe=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function hn(e,c){{var l=function(){$e||($e=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var mn=function(e,c,l,m,E,x,w){var g={$$typeof:t,type:e,key:c,ref:l,props:w,_owner:x};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:m}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:E}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function gn(e,c,l,m,E){{var x,w={},g=null,O=null;l!==void 0&&(Ze(l),g=""+l),pn(c)&&(Ze(c.key),g=""+c.key),fn(c)&&(O=c.ref,_n(c,E));for(x in c)Z.call(c,x)&&!dn.hasOwnProperty(x)&&(w[x]=c[x]);if(e&&e.defaultProps){var T=e.defaultProps;for(x in T)w[x]===void 0&&(w[x]=T[x])}if(g||O){var P=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&vn(w,P),O&&hn(w,P)}return mn(e,g,O,E,m,H.current,w)}}var fe=I.ReactCurrentOwner,et=I.ReactDebugCurrentFrame;function N(e){if(e){var c=e._owner,l=Q(e.type,e._source,c?c.type:null);et.setExtraStackFrame(l)}else et.setExtraStackFrame(null)}var pe;pe=!1;function _e(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function tt(){{if(fe.current){var e=L(fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function wn(e){{if(e!==void 0){var c=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+c+":"+l+"."}return""}}var nt={};function bn(e){{var c=tt();if(!c){var l=typeof e=="string"?e:e.displayName||e.name;l&&(c=`

Check the top-level render call using <`+l+">.")}return c}}function rt(e,c){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=bn(c);if(nt[l])return;nt[l]=!0;var m="";e&&e._owner&&e._owner!==fe.current&&(m=" It was passed a child from "+L(e._owner.type)+"."),N(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,m),N(null)}}function ot(e,c){{if(typeof e!="object")return;if(le(e))for(var l=0;l<e.length;l++){var m=e[l];_e(m)&&rt(m,c)}else if(_e(e))e._store&&(e._store.validated=!0);else if(e){var E=k(e);if(typeof E=="function"&&E!==e.entries)for(var x=E.call(e),w;!(w=x.next()).done;)_e(w.value)&&rt(w.value,c)}}}function yn(e){{var c=e.type;if(c==null||typeof c=="string")return;var l;if(typeof c=="function")l=c.propTypes;else if(typeof c=="object"&&(c.$$typeof===f||c.$$typeof===v))l=c.propTypes;else return;if(l){var m=L(c);an(l,e.props,"prop",m,e)}else if(c.PropTypes!==void 0&&!pe){pe=!0;var E=L(c);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E||"Unknown")}typeof c.getDefaultProps=="function"&&!c.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function En(e){{for(var c=Object.keys(e.props),l=0;l<c.length;l++){var m=c[l];if(m!=="children"&&m!=="key"){N(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",m),N(null);break}}e.ref!==null&&(N(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}function st(e,c,l,m,E,x){{var w=$t(e);if(!w){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=wn(E);O?g+=O:g+=tt();var T;e===null?T="null":le(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(L(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,g)}var P=gn(e,c,l,E,x);if(P==null)return P;if(w){var D=c.children;if(D!==void 0)if(m)if(le(D)){for(var W=0;W<D.length;W++)ot(D[W],e);Object.freeze&&Object.freeze(D)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ot(D,e)}return e===n?En(P):yn(P),P}}function xn(e,c,l){return st(e,c,l,!0)}function Cn(e,c,l){return st(e,c,l,!1)}var Rn=Cn,Sn=xn;V.Fragment=n,V.jsx=Rn,V.jsxs=Sn}()),V}process.env.NODE_ENV==="production"?$.exports=at():$.exports=ct();var p=$.exports;const ee=typeof document<"u"?i.useLayoutEffect:i.useEffect,me={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},ge=i.createContext(!0),we=i.createContext(r=>!r),ut=({children:r})=>{const[t,o]=i.useState(!0);return p.jsx(ge.Provider,{value:t,children:p.jsx(we.Provider,{value:o,children:r})})},lt=({children:r})=>{const t=i.useContext(ge);return p.jsx("div",{className:`${me.spice_wrapper} ${t?me.spice_wrapper_hidden:""}`,children:r})},dt=({children:r})=>p.jsx(ut,{children:p.jsx(lt,{children:r})}),te=()=>i.useContext(we),ne={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},ft=({className:r,children:t,aside:o,isSticky:n=!1})=>{const s=te();return ee(()=>(n&&s(()=>!1),()=>{s(()=>!0)}),[n,s]),p.jsxs("div",{className:r||"",children:[o.index===1&&p.jsx("div",{className:ne.spice_aside_main,children:t}),p.jsx("aside",{className:`${ne.spice_aside_aside} ${o.className?o.className:""}`,children:o.chidren}),o.index===0&&p.jsx("div",{className:ne.spice_aside_main,children:t})]})},re={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},be=({formProps:r,className:t})=>p.jsx("input",{...r,className:`${re.spice_form_input} ${t||""}`}),pt=({formProps:r})=>{const{isSelect:t,...o}=r;if(!t)return;const n=()=>{const a=t.defaultValue;return a?p.jsx("option",{hidden:!0,children:a}):null},s=()=>{const a=t.defaultSelectedIndex;if(a)return t.options[a]};return p.jsxs("select",{...o,className:re.spice_form_select,defaultValue:s(),children:[p.jsx(n,{}),t.options.map(a=>p.jsx("option",{value:a,children:a},a))]})},ye=({layoutType:r,formPropsArr:t,label:o,FormItem:n,errors:s})=>{const a=i.useCallback(u=>!s||!s[u]?null:s[u],[s]);if(r==="block")return p.jsxs(p.Fragment,{children:[o&&p.jsx("label",{htmlFor:t[0].id,children:o}),p.jsx(n,{formProps:t[0]}),a(0)]});if(r==="flex")return p.jsxs(p.Fragment,{children:[o&&p.jsx("label",{htmlFor:t[0].id,children:o}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx(n,{formProps:t[0]}),a(0)]}),p.jsxs("li",{children:[p.jsx(n,{formProps:t[1]}),a(1)]})]})]});if(r==="radio-check"){const u=t.map(d=>p.jsxs("li",{children:[p.jsx(n,{formProps:d,className:re.spice_form_radioCheckInput}),p.jsx("label",{htmlFor:d.id,children:d.value})]},d.id));return p.jsxs(p.Fragment,{children:[o&&p.jsx("label",{children:o}),p.jsx("ul",{children:u}),a(0)]})}},_t=({formProps:r})=>{const{isTextarea:t,...o}=r;if(t)return p.jsx("textarea",{...o,...t})},vt=({className:r,label:t,formProps:o,errors:n})=>{const s=o,a=s[0].type,u=s.length,d=!!s[0].isSelect,f=!!s[0].isTextarea;if(!(a==="radio"||a==="checkbox")&&u>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const _=i.useCallback(v=>ye({layoutType:u===1?"block":"flex",formPropsArr:s,label:t,FormItem:v,errors:n}),[n,s,t,u]),h=i.useCallback(()=>d?_(pt):f?_(_t):a==="radio"||a==="checkbox"?ye({layoutType:"radio-check",formPropsArr:s,label:t,FormItem:be,errors:n}):_(be),[n,s,t,d,f,_,a]);return p.jsx("fieldset",{className:`${r}`,children:p.jsx(h,{})})},G=r=>new Promise(t=>{r instanceof Promise?r.then(()=>{t(null)}):t(null)}),z={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},ht=({position:r,parent:t,content:o,callback:n,className:s})=>{const a=i.useRef(null),u=i.useRef(!1),[d,f]=i.useState(!1),[_,h]=i.useState(!0),v=i.useCallback(()=>{u.current=!0,h(!1),f(!0),n!=null&&n.onEnter&&n.onEnter(a.current)},[n]),b=i.useCallback(async()=>{u.current=!1,h(!0),n!=null&&n.onLeave&&await G(n.onLeave(a.current)),u.current||f(!1)},[n]);return p.jsxs("div",{onMouseEnter:v,onMouseLeave:b,onClick:b,className:`${z.spice_dropdown_wrapper} ${s||""}`,children:[t.children,p.jsx("div",{ref:a,className:`${z.spice_dropdown_content} ${d?"":z.spice_dropdown_content_hidden} ${_?z.spice_dropdown_content_pointerPrevent:""} ${z["spice_dropdown_"+r]}`,children:o.children})]})},Ee=(r=60,t=[])=>{r>60&&(r=60);const o=Math.floor(1e3/r),n=i.useRef(performance.now()),s=i.useCallback(d=>{const f=d-n.current,_=f<=o;return _||(n.current=d-f%o),_},[o]),a=i.useRef({callback:null,isPlay:!1,id:0}).current,u=i.useCallback(d=>{a.id=requestAnimationFrame(u),!s(d)&&a.callback&&a.isPlay&&a.callback(d)},[s,a]);return i.useEffect(()=>(a.id=requestAnimationFrame(u),()=>{cancelAnimationFrame(a.id)}),t),(d,f)=>{if(d==="play"){if(!f){console.warn("Callback function is required when 'play'");return}a.callback=f,a.isPlay=!0}else d==="pause"&&(a.isPlay=!1)}},mt={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},gt=({className:r,children:t,callback:o,fps:n=60,stopPropagation:s=!1,isOnClickReset:a=!1,dependencies:u=[]})=>{const d=i.useRef(null),f=i.useRef(null),_=i.useRef();n>60&&(n=60);const h=Ee(n,u),v=i.useMemo(()=>({target:d.current,children:f.current,x:0,y:0}),[]),b=i.useCallback(j=>{v.target=d.current,v.children=f.current},[v]),C=i.useCallback(j=>{_.current=j.currentTarget.getBoundingClientRect(),v.x=j.clientX-_.current.left-_.current.width/2,v.y=j.clientY-_.current.top-_.current.height/2},[v]),R=i.useCallback(j=>{j.stopPropagation(),b(j),C(j),h("play",()=>{o.onMove(v)})},[b,C,h,o,v]),F=i.useCallback(j=>{j.stopPropagation(),C(j)},[C]),k=i.useCallback(j=>{j.stopPropagation(),h("pause"),o.onLeave&&o.onLeave(v)},[h,o,v]),I=i.useCallback(j=>{k(j)},[k]),S=i.useCallback(j=>{a&&k(j)},[k,a]);return p.jsx("div",{onMouseEnter:R,onMouseMove:F,onMouseLeave:I,onClick:S,className:r||"",ref:d,children:p.jsx("div",{ref:f,className:s?mt.spice_magnet_stopPropagation:"",children:t})})},wt={spice_thumbnail_container:"_spice_thumbnail_container_1i0fe_1"},bt=({ratio:r,children:t,className:o})=>{let n;switch(r){case"golden":n="1.618/1";break;case"silver":n="1.414/1";break;case"platinum":n="1.732/1";break;case"16-9":n="16/9";break;case"square":n="1/1";break;case"3-2":n="3/2";break;case"4-3":n="4/3";break;default:n=r;break}return p.jsx("div",{className:`${wt.spice_thumbnail_container} ${o||""}`,style:{aspectRatio:n},children:t})},xe=r=>{const t=document.documentElement.style,o=document.body.style;r==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",o.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",o.overflow="")},yt={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},Et=".spice__modal_close",xt=({children:r,tag:t,className:o,dialog:n,callback:s})=>{const a=t||"button",u=i.useRef(null),d=i.useCallback(()=>{xe("add"),u.current.showModal(),s!=null&&s.onOpen&&s.onOpen(u.current)},[s]),f=i.useCallback(async()=>{s!=null&&s.onClose&&await G(s.onClose(u.current)),xe("remove"),u.current.close()},[s]);return i.useEffect(()=>{const _=u.current.querySelectorAll(Et);if(_)return _.forEach(h=>h.addEventListener("click",f)),()=>{_.forEach(h=>h.removeEventListener("click",f))}},[f]),i.useEffect(()=>{const _=h=>{var b;((b=u.current)==null?void 0:b.hasAttribute("open"))&&h.key==="Escape"&&f()};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[f]),p.jsxs(p.Fragment,{children:[p.jsx(a,{className:o||"",onClick:()=>{d()},children:r}),p.jsx("dialog",{ref:u,onClick:_=>{_.target===u.current&&f()},className:`${yt.spice_modal_dialog} ${n.className?n.className:""}`,children:n.children})]})},Ce=i.forwardRef(({children:r,className:t},o)=>{const n=te();return i.useEffect(()=>(n(()=>!1),()=>{n(()=>!0)}),[n]),p.jsx("div",{ref:o,className:t||"",children:r})});Ce.displayName="StickyItem";const Ct=r=>{const t=i.useRef(null),[o,n]=i.useState(!1),{fallback:s,...a}=r;return i.useEffect(()=>{var u;(u=t.current)==null||u.play().then(()=>{n(!1)}).catch(()=>{n(!0)})},[]),o?s:p.jsx("video",{ref:t,...a})},Rt=({text:r,type:t="chars",splitClassName:o})=>{const n=t==="chars"?"":" ";return r.split(`
`).flatMap((a,u,d)=>[...a.split(n).map((f,_)=>f===" "?p.jsx("span",{className:`${o||""}`,children:" "},`${u}-${_}`):p.jsx("span",{className:`${o||""}`,children:f},`${u}-${_}`)),u<d.length-1?p.jsx("br",{},u):null])},J={spice_loader_wrapper:"_spice_loader_wrapper_njkek_1",spice_loader_container:"_spice_loader_container_njkek_6",spice_loader_skelton:"_spice_loader_skelton_njkek_13",skeleton:"_skeleton_njkek_1",spice_loader_circular:"_spice_loader_circular_njkek_31",cicrular:"_cicrular_njkek_1"},Re=i.forwardRef(({className:r,loader:t="skeleton",delay:o=1e3,onView:n,skelton:s,circular:a,children:u},d)=>{const[f,_]=i.useState(o===0),h=!!u;return i.useEffect(()=>{o!==0&&setTimeout(()=>_(!0),o)},[o]),p.jsx("div",{ref:d,className:`${r||""} ${J.spice_loader_wrapper} `,style:h?{maxWidth:"fit-content",height:"auto"}:{},children:p.jsxs("div",{className:J.spice_loader_container,style:f?{opacity:1,transitionProperty:"opacity",transitionDuration:(n==null?void 0:n.transitionDuration)||"0.3s",transitionTimingFunction:(n==null?void 0:n.transitionTimingFunction)||"ease-in-out"}:{},children:[t==="skeleton"?p.jsx("div",{className:J.spice_loader_skelton,style:{background:`linear-gradient(90deg,transparent,${(s==null?void 0:s.waveColor)||"rgba(255,255,255,0.64)"},transparent)`,animationDuration:(s==null?void 0:s.animationDuration)||"1.6s",animationTimingFunction:(s==null?void 0:s.animationTimingFunction)||"ease-in-out"}}):t==="circular"?p.jsx("div",{className:J.spice_loader_circular,style:{width:a!=null&&a.width?a==null?void 0:a.width:"24px",height:a!=null&&a.height?a==null?void 0:a.height:"24px",border:(a==null?void 0:a.boder)||"2px solid #fff",borderBottomColor:"transparent",animationDuration:(s==null?void 0:s.animationDuration)||"1.6s",animationTimingFunction:(s==null?void 0:s.animationTimingFunction)||"linear"}}):t,h&&p.jsx("div",{style:{visibility:"hidden"},children:u})]})})});Re.displayName="Loader";const St={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},Se=i.createContext(St),je=i.createContext(()=>{}),jt=({children:r,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[o,n]=i.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return p.jsx(Se.Provider,{value:o,children:p.jsx(je.Provider,{value:n,children:r})})},Te=()=>i.useContext(Se),oe=()=>i.useContext(je),Tt=({children:r,value:t,className:o})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=oe(),s=Te(),a=i.useCallback(()=>{s.current===t||s.isLeaving||n(u=>({...u,isLeaving:!0,isAnimation:!0,prev:u.current,next:t}))},[n,s,t]);return p.jsx("button",{onClick:a,className:o||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":s.current===t,children:r})},Pe=({content:r,isOpen:t})=>{const o=r.querySelectorAll("a,button");if(!o)return;const n=t?"0":"-1";o.forEach(s=>{s.setAttribute("tabindex",n)})},Pt={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},Ot=Object.freeze(Object.defineProperty({__proto__:null,Button:Tt,Content:({children:r,value:t,className:o,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const s=i.useRef(!0),a=i.useRef(null),u=oe(),d=Te(),f=d.current===t&&!d.isLeaving;return i.useEffect(()=>{if(s.current){s.current=!1;return}if(!d.isAnimation){f&&n!=null&&n.onReset&&n.onReset(a.current);return}d.prev===t&&(async()=>(n!=null&&n.onClose&&await G(n.onClose(a.current)),u(_=>({..._,isLeaving:!1,prev:"",current:_.next,next:""}))))(),f&&n!=null&&n.onOpen&&n.onOpen(a.current)},[d,u,n,t,f]),i.useEffect(()=>{Pe({content:a.current,isOpen:d.current===t})},[d,t]),p.jsx("div",{ref:a,className:`${d.current!==t?Pt.spice_tab_hidden:""} ${o||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":d.current!==t,children:r})},Context:jt,useTabSwitch:()=>{const r=oe();return(t,o)=>{r(n=>({isAnimation:o,isLeaving:o,prev:o?n.current:"",current:o?n.current:t,next:o?t:""}))}}},Symbol.toStringTag,{value:"Module"})),kt={target:"",toggle:!1,defaultValue:[]},Oe=i.createContext(kt),ke=i.createContext(()=>{}),It=({children:r,defaultValue:t})=>{const[o,n]=i.useState({target:"",toggle:!1,defaultValue:t});return p.jsx(Oe.Provider,{value:o,children:p.jsx(ke.Provider,{value:n,children:r})})},Ie=()=>i.useContext(Oe),Dt=()=>i.useContext(ke),Ft=({children:r,value:t,className:o})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=Ie(),s=Dt(),a=i.useMemo(()=>!!n.defaultValue.find(f=>f===t),[n,t]),[u,d]=i.useState(a);return p.jsx("button",{className:o||"",onClick:()=>{s(f=>({...f,toggle:u,target:t})),d(!u)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":u,children:r})},De=({targetRef:r,callback:t,debounce:o=100,dependencies:n=[]})=>{const s=i.useRef(0),a=i.useRef(!0);i.useEffect(()=>{const u=new ResizeObserver(f=>{clearTimeout(s.current),s.current=setTimeout(()=>{if(a.current){a.current=!1;return}t(f[0].target)},o)}),d=r.current;if(d)return u.observe(d),()=>{u.unobserve(d),clearTimeout(s.current)}},n)},Fe={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},Lt=Object.freeze(Object.defineProperty({__proto__:null,Button:Ft,Content:({value:r,callback:t,children:o,className:n})=>{if(r==="")throw new Error("Please set the value to something other than an empty string.");const s=Ie(),a=i.useMemo(()=>!!s.defaultValue.find(v=>v===r),[s,r]),[u,d]=i.useState(a);i.useMemo(()=>{s.target===r&&d(!u)},[s.target,s.toggle]);const f=i.useRef(!0),_=i.useRef(null),h=i.useRef(null);return i.useEffect(()=>{if(f.current){f.current=!1;return}const v={height:h.current.getBoundingClientRect().height,target:_.current};u?t.onOpen(v):t.onClose(v)},[u,t]),i.useEffect(()=>{Pe({content:_.current,isOpen:u})},[u]),De({targetRef:h,callback:v=>{const b=v.getBoundingClientRect().height;u&&(_.current.style.height=`${b}px`)},dependencies:[u],debounce:100}),p.jsx("div",{ref:_,className:`${Fe.spice_accordion_content} ${a?"":Fe.spice_accordion_hidden}`,id:`content-${r}`,"aria-labelledby":`button-${r}`,"aria-hidden":!u,children:p.jsx("div",{ref:h,className:n||"",children:o})})},Context:It},Symbol.toStringTag,{value:"Module"})),At=({tempo:r=3,onesRef:t,tensRef:o,hundredsRef:n,onProgress:s,onStart:a,onComplete:u})=>{const d=i.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),f=i.useRef(null),_=i.useCallback(({digitContainer:v,numbersTarget:b,digit:C,digitNumber:R,currentPercent:F,limit:k,destination:I})=>{if(d[C]!==R&&F<=k){const S=R.toString(),j=(Math.min(8,R)+1).toString(),ie=F>=k;b[0].innerText=S,b[1].innerText=ie?"0":j,s&&s({digitContainer:v,percent:F,digit:C,destination:I,duration:r/(I/C)}),d[C]=R}},[d,s,r]),h=i.useCallback(v=>(v>100&&(v=100),new Promise(b=>{if(v===0)return;const C={ones:t.current.querySelectorAll("div"),tens:o.current.querySelectorAll("div"),hundreds:n.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(f.current),f.current=setInterval(async()=>{const R=d.to+=1,F=async()=>{clearInterval(f.current),R>100&&u&&await G(u(C.getAll())),b(R-1)};R===1&&a&&a(C.getAll()),R>v&&await F();const k=Math.floor(R/100)%100,I=Math.floor(R/10)%10,S=R%10;_({digitContainer:t.current,digit:1,digitNumber:S,currentPercent:R,numbersTarget:C.ones,limit:90,destination:v}),_({digitContainer:o.current,digit:10,digitNumber:I,currentPercent:R,numbersTarget:C.tens,limit:90,destination:v}),d[100]!==k&&(C.hundreds[1].innerText=k.toString(),s&&s({digitContainer:n.current,percent:R,digit:100,destination:v,duration:r/(v/10)}),d[100]=k)},Math.max(1e3/60,r/v*1e3))})),[d,_,o,n,t,u,s,a,r]);return i.useEffect(()=>()=>{clearInterval(f.current)},[]),h},Mt={spice_loadingProgress_digit:"_spice_loadingProgress_digit_avxoy_1"},Le=i.memo(i.forwardRef(({className:r},t)=>p.jsxs("div",{className:Mt.spice_loadingProgress_digit,ref:t,children:[p.jsx("div",{className:r||"",children:"0"}),p.jsx("div",{className:r||"",children:"0"})]})));Le.displayName="Digit";const Nt=Object.freeze(Object.defineProperty({__proto__:null,Digit:Le,useLoadingProgress:At},Symbol.toStringTag,{value:"Module"})),Wt=({targetRef:r,rootMargin:t="0px",threshold:o=0,once:n=!1,callback:s,dependencies:a=[]})=>{const u={rootMargin:t,threshold:o};i.useEffect(()=>{const d=r==null?void 0:r.current;if(!d)return;const f=(h,v)=>{h.forEach(b=>{b.isIntersecting&&s.onEnter?(s.onEnter(b),n&&v.unobserve(b.target)):!b.isIntersecting&&s.onLeave&&s.onLeave(b)})},_=new IntersectionObserver(f,u);return _.observe(d),()=>{_.unobserve(d)}},a)},B=({callback:r,debounce:t=100,dependencies:o=[]})=>{const n=i.useRef(0),s=i.useRef(0),a=i.useCallback(()=>{clearTimeout(s.current),s.current=setTimeout(()=>{r({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)},[r,t]);i.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),clearTimeout(s.current)}),o)},Yt=({initWinW:r,winW:t,threshold:o})=>{let n=!(r<=o);t<=o?n&&window.location.reload():!n&&window.location.reload()},Vt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,zt=()=>{console.log(Vt)},Bt=r=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const o=r>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==o&&t.setAttribute("content",o)},Ut=({reloadThresholds:r,isFixViewportForSmall:t=!0,areYouFun:o=!1})=>{const n=i.useCallback(s=>{t&&Bt(s)},[t]);B({callback:({initWinW:s,winW:a})=>{r&&r.forEach(u=>Yt({initWinW:s,winW:a,threshold:u})),n(a)},debounce:100,dependencies:[]}),i.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),o&&process.env.NODE_ENV!=="development"&&zt()},[o,n])},Ae=()=>{const[r,t]=i.useState(null),o=i.useCallback(()=>{const n=window.ontouchstart,s=navigator.maxTouchPoints;n!==void 0&&0<s?t(!0):t(!1)},[]);return B({callback:()=>o(),debounce:100,dependencies:[]}),i.useEffect(()=>o(),[o]),r},se="scroll",Ht=({threshold:r=0,debounce:t=10,dependencies:o=[]})=>{const n=i.useRef(null),[s,a]=i.useReducer((h,v)=>{switch(v.type){case se:return n.current=v.payload,v.payload;default:return h}},n.current),u=i.useRef(0),d=i.useRef(0),f=()=>window.scrollY||document.documentElement.scrollTop,_=i.useCallback(()=>{clearTimeout(d.current),d.current=setTimeout(()=>{const h=f();h>u.current+r&&n.current!=="down"?a({type:se,payload:"down"}):h<u.current-r&&n.current!=="up"&&a({type:se,payload:"up"}),u.current=h},t)},[t,r]);return i.useEffect(()=>(u.current=f(),window.addEventListener("scroll",_,{passive:!0}),()=>{window.removeEventListener("scroll",_),clearTimeout(d.current)}),o),s},Gt=({type:r,width:t})=>{const[o,n]=i.useState(null),s=i.useCallback(a=>{switch(r){case"max":n(t>=a);break;case"min":n(t<=a);break}},[r,t]);return B({callback:({winW:a})=>s(a),debounce:100,dependencies:[]}),i.useEffect(()=>s(window.innerWidth),[s]),o},Jt=({shareUrl:r,sharePath:t,shareTitle:o="",width:n=600,height:s=800})=>{const a=i.useMemo(()=>encodeURIComponent(r),[r]),u=i.useMemo(()=>`height=${s},width=${n}`,[s,n]),d=i.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${a}&t=${o}`,"newwindow",u)}}),[a,o,u]),f=i.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${a}&text=${o}`,"newwindow",u)}}),[a,u,o]),_=i.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${a}&text=${o}`,"newwindow",u)}}),[a,u,o]),h=i.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:o,url:t||a})}catch{return}}}),[o,a,t]),[v,b]=i.useState(!1),C=i.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(r).then(()=>{b(!0)})}}),[r]);return{Facebook:d,X:f,LINE:_,share:h,copy:C,isCopied:v}},Xt=r=>{const t=Ae();ee(()=>{!t||!r.current||(r.current.style.height=`${window.screen.height}px`)},[t,r]),B({callback:({winH:o})=>{r.current&&(t?r.current.style.height=`${window.screen.height}px`:r.current.style.height=`${o}px`)},dependencies:[t]})};y.Accordion=Lt,y.AsideLayout=ft,y.Dropdown=ht,y.FormField=vt,y.Loader=Re,y.LoadingProgress=Nt,y.LowPowerVideo=Ct,y.Magnet=gt,y.ModalButton=xt,y.SplitText=Rt,y.StickyItem=Ce,y.Tab=Ot,y.Thumbnail=bt,y.WrapperLayout=dt,y.use100vh=Xt,y.useAnimationFrame=Ee,y.useIntersectionObserver=Wt,y.useIsTouchDevice=Ae,y.useIsomorphicLayoutEffect=ee,y.useMediaQuery=Gt,y.useOverflowDispatch=te,y.useResizeObserver=De,y.useScrollDirection=Ht,y.useShare=Jt,y.useStarter=Ut,y.useWindowResizeObserver=B,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
