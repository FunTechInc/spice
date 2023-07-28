(function(x,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(x=typeof globalThis<"u"?globalThis:x||self,u(x.spice={},x.React))})(this,function(x,u){"use strict";const vn="";var Q={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function $e(){if(de)return M;de=1;var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(l,_,v){var m,y={},R=null,D=null;v!==void 0&&(R=""+v),_.key!==void 0&&(R=""+_.key),_.ref!==void 0&&(D=_.ref);for(m in _)n.call(_,m)&&!i.hasOwnProperty(m)&&(y[m]=_[m]);if(l&&l.defaultProps)for(m in _=l.defaultProps,_)y[m]===void 0&&(y[m]=_[m]);return{$$typeof:t,type:l,key:R,ref:D,props:y,_owner:c.current}}return M.Fragment=s,M.jsx=f,M.jsxs=f,M}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function et(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){var o=u,t=Symbol.for("react.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),l=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),z=Symbol.iterator,B="@@iterator";function ne(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[B];return typeof r=="function"?r:null}var I=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){{for(var r=arguments.length,a=new Array(r>1?r-1:0),p=1;p<r;p++)a[p-1]=arguments[p];Lt("error",e,a)}}function Lt(e,r,a){{var p=I.ReactDebugCurrentFrame,b=p.getStackAddendum();b!==""&&(r+="%s",a=a.concat([b]));var E=a.map(function(h){return String(h)});E.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,E)}}var Mt=!1,Nt=!1,Wt=!1,kt=!1,Vt=!1,Pe;Pe=Symbol.for("react.module.reference");function Yt(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===i||Vt||e===c||e===v||e===m||kt||e===D||Mt||Nt||Wt||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===y||e.$$typeof===f||e.$$typeof===l||e.$$typeof===_||e.$$typeof===Pe||e.getModuleId!==void 0))}function zt(e,r,a){var p=e.displayName;if(p)return p;var b=r.displayName||r.name||"";return b!==""?a+"("+b+")":a}function Oe(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case s:return"Portal";case i:return"Profiler";case c:return"StrictMode";case v:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return Oe(r)+".Consumer";case f:var a=e;return Oe(a._context)+".Provider";case _:return zt(e,e.render,"ForwardRef");case y:var p=e.displayName||null;return p!==null?p:P(e.type)||"Memo";case R:{var b=e,E=b._payload,h=b._init;try{return P(h(E))}catch{return null}}}return null}var F=Object.assign,k=0,Ie,Fe,De,Ae,Le,Me,Ne;function We(){}We.__reactDisabledLog=!0;function Bt(){{if(k===0){Ie=console.log,Fe=console.info,De=console.warn,Ae=console.error,Le=console.group,Me=console.groupCollapsed,Ne=console.groupEnd;var e={configurable:!0,enumerable:!0,value:We,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}k++}}function Ut(){{if(k--,k===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:Ie}),info:F({},e,{value:Fe}),warn:F({},e,{value:De}),error:F({},e,{value:Ae}),group:F({},e,{value:Le}),groupCollapsed:F({},e,{value:Me}),groupEnd:F({},e,{value:Ne})})}k<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=I.ReactCurrentDispatcher,oe;function U(e,r,a){{if(oe===void 0)try{throw Error()}catch(b){var p=b.stack.trim().match(/\n( *(at )?)/);oe=p&&p[1]||""}return`
`+oe+e}}var se=!1,H;{var Ht=typeof WeakMap=="function"?WeakMap:Map;H=new Ht}function ke(e,r){if(!e||se)return"";{var a=H.get(e);if(a!==void 0)return a}var p;se=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=re.current,re.current=null,Bt();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(O){p=O}Reflect.construct(e,[],h)}else{try{h.call()}catch(O){p=O}e.call(h.prototype)}}else{try{throw Error()}catch(O){p=O}e()}}catch(O){if(O&&p&&typeof O.stack=="string"){for(var g=O.stack.split(`
`),T=p.stack.split(`
`),S=g.length-1,j=T.length-1;S>=1&&j>=0&&g[S]!==T[j];)j--;for(;S>=1&&j>=0;S--,j--)if(g[S]!==T[j]){if(S!==1||j!==1)do if(S--,j--,j<0||g[S]!==T[j]){var C=`
`+g[S].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,C),C}while(S>=1&&j>=0);break}}}finally{se=!1,re.current=E,Ut(),Error.prepareStackTrace=b}var L=e?e.displayName||e.name:"",qe=L?U(L):"";return typeof e=="function"&&H.set(e,qe),qe}function Gt(e,r,a){return ke(e,!1)}function Jt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,a){if(e==null)return"";if(typeof e=="function")return ke(e,Jt(e));if(typeof e=="string")return U(e);switch(e){case v:return U("Suspense");case m:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Gt(e.render);case y:return G(e.type,r,a);case R:{var p=e,b=p._payload,E=p._init;try{return G(E(b),r,a)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Ve={},Ye=I.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,a=G(e.type,e._source,r?r.type:null);Ye.setExtraStackFrame(a)}else Ye.setExtraStackFrame(null)}function Kt(e,r,a,p,b){{var E=Function.call.bind(J);for(var h in e)if(E(e,h)){var g=void 0;try{if(typeof e[h]!="function"){var T=Error((p||"React class")+": "+a+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}g=e[h](r,h,p,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(S){g=S}g&&!(g instanceof Error)&&(K(b),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",a,h,typeof g),K(null)),g instanceof Error&&!(g.message in Ve)&&(Ve[g.message]=!0,K(b),w("Failed %s type: %s",a,g.message),K(null))}}}var Qt=Array.isArray;function ie(e){return Qt(e)}function Xt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,a=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function Zt(e){try{return ze(e),!1}catch{return!0}}function ze(e){return""+e}function Be(e){if(Zt(e))return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xt(e)),ze(e)}var V=I.ReactCurrentOwner,qt={key:!0,ref:!0,__self:!0,__source:!0},Ue,He,ce;ce={};function $t(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function en(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function tn(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var a=P(V.current.type);ce[a]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(V.current.type),e.ref),ce[a]=!0)}}function nn(e,r){{var a=function(){Ue||(Ue=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function rn(e,r){{var a=function(){He||(He=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var on=function(e,r,a,p,b,E,h){var g={$$typeof:t,type:e,key:r,ref:a,props:h,_owner:E};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function sn(e,r,a,p,b){{var E,h={},g=null,T=null;a!==void 0&&(Be(a),g=""+a),en(r)&&(Be(r.key),g=""+r.key),$t(r)&&(T=r.ref,tn(r,b));for(E in r)J.call(r,E)&&!qt.hasOwnProperty(E)&&(h[E]=r[E]);if(e&&e.defaultProps){var S=e.defaultProps;for(E in S)h[E]===void 0&&(h[E]=S[E])}if(g||T){var j=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&nn(h,j),T&&rn(h,j)}return on(e,g,T,b,p,V.current,h)}}var ae=I.ReactCurrentOwner,Ge=I.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,a=G(e.type,e._source,r?r.type:null);Ge.setExtraStackFrame(a)}else Ge.setExtraStackFrame(null)}var ue;ue=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Je(){{if(ae.current){var e=P(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function cn(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),a=e.lineNumber;return`

Check your code at `+r+":"+a+"."}return""}}var Ke={};function an(e){{var r=Je();if(!r){var a=typeof e=="string"?e:e.displayName||e.name;a&&(r=`

Check the top-level render call using <`+a+">.")}return r}}function Qe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=an(r);if(Ke[a])return;Ke[a]=!0;var p="";e&&e._owner&&e._owner!==ae.current&&(p=" It was passed a child from "+P(e._owner.type)+"."),A(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,p),A(null)}}function Xe(e,r){{if(typeof e!="object")return;if(ie(e))for(var a=0;a<e.length;a++){var p=e[a];le(p)&&Qe(p,r)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var b=ne(e);if(typeof b=="function"&&b!==e.entries)for(var E=b.call(e),h;!(h=E.next()).done;)le(h.value)&&Qe(h.value,r)}}}function un(e){{var r=e.type;if(r==null||typeof r=="string")return;var a;if(typeof r=="function")a=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===y))a=r.propTypes;else return;if(a){var p=P(r);Kt(a,e.props,"prop",p,e)}else if(r.PropTypes!==void 0&&!ue){ue=!0;var b=P(r);w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ln(e){{for(var r=Object.keys(e.props),a=0;a<r.length;a++){var p=r[a];if(p!=="children"&&p!=="key"){A(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),A(null);break}}e.ref!==null&&(A(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Ze(e,r,a,p,b,E){{var h=Yt(e);if(!h){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=cn(b);T?g+=T:g+=Je();var S;e===null?S="null":ie(e)?S="array":e!==void 0&&e.$$typeof===t?(S="<"+(P(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):S=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",S,g)}var j=sn(e,r,a,b,E);if(j==null)return j;if(h){var C=r.children;if(C!==void 0)if(p)if(ie(C)){for(var L=0;L<C.length;L++)Xe(C[L],e);Object.freeze&&Object.freeze(C)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(C,e)}return e===n?ln(j):un(j),j}}function dn(e,r,a){return Ze(e,r,a,!0)}function fn(e,r,a){return Ze(e,r,a,!1)}var _n=fn,pn=dn;N.Fragment=n,N.jsx=_n,N.jsxs=pn}()),N}process.env.NODE_ENV==="production"?Q.exports=$e():Q.exports=et();var d=Q.exports;const _e={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},pe=u.createContext(!0),ve=u.createContext(o=>!o),tt=({children:o})=>{const[t,s]=u.useState(!0);return d.jsx(pe.Provider,{value:t,children:d.jsx(ve.Provider,{value:s,children:o})})},nt=({children:o})=>{const t=u.useContext(pe);return d.jsx("div",{className:`${_e.spice_wrapper} ${t?_e.spice_wrapper_hidden:""}`,children:o})},rt=({children:o})=>d.jsx(tt,{children:d.jsx(nt,{children:o})}),ot=()=>u.useContext(ve),X={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},st=({className:o,children:t,aside:s,isSticky:n=!1})=>{const c=ot();return u.useEffect(()=>(n&&c(()=>!1),()=>{c(()=>!0)}),[]),d.jsxs("div",{className:o||"",children:[s.index===1&&d.jsx("div",{className:X.spice_aside_main,children:t}),d.jsx("aside",{className:`${X.spice_aside_aside} ${s.className?s.className:""}`,children:s.chidren}),s.index===0&&d.jsx("div",{className:X.spice_aside_main,children:t})]})},Z={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},ge=({formProps:o,className:t})=>d.jsx("input",{...o,className:`${Z.spice_form_input} ${t||""}`}),it=({formProps:o})=>{const t=o.isSelect;if(!t)return;const s=t.options.map(i=>d.jsx("option",{value:i,children:i},i)),n=()=>{const i=t.defaultValue;return i?d.jsx("option",{hidden:!0,children:i}):null},c=()=>{const i=t.defaultSelectedIndex;if(i)return t.options[i]};return d.jsxs("select",{name:o.name,id:o.id,className:Z.spice_form_select,defaultValue:c(),children:[d.jsx(n,{}),s]})},me=({layoutType:o,formPropsArr:t,label:s,FormItem:n,errors:c})=>{const i=f=>!c||!c[f]?null:c[f];if(o==="block")return d.jsxs(d.Fragment,{children:[s&&d.jsx("label",{htmlFor:t[0].id,children:s}),d.jsx(n,{formProps:t[0]}),i(0)]});if(o==="flex")return d.jsxs(d.Fragment,{children:[s&&d.jsx("label",{htmlFor:t[0].id,children:s}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(n,{formProps:t[0]}),i(0)]}),d.jsxs("li",{children:[d.jsx(n,{formProps:t[1]}),i(1)]})]})]});if(o==="radio-check"){const f=t.map(l=>d.jsxs("li",{children:[d.jsx(n,{formProps:l,className:Z.spice_form_radioCheckInput}),d.jsx("label",{htmlFor:l.id,children:l.value})]},l.id));return d.jsxs(d.Fragment,{children:[s&&d.jsx("label",{children:s}),d.jsx("ul",{children:f}),i(0)]})}},ct=({formProps:o})=>{const t=o.isTextarea;if(t)return d.jsx("textarea",{name:o.name,id:o.id,cols:t.cols,rows:t.rows,placeholder:o.placeholder,defaultValue:t.defaultValue})},at=({className:o,label:t,formProps:s,errors:n})=>{const c=s,i=c[0].type,f=c.length,l=!!c[0].isSelect,_=!!c[0].isTextarea;if(!(i==="radio"||i==="checkbox")&&f>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const v=y=>me({layoutType:f===1?"block":"flex",formPropsArr:c,label:t,FormItem:y,errors:n}),m=()=>l?v(it):_?v(ct):i==="radio"||i==="checkbox"?me({layoutType:"radio-check",formPropsArr:c,label:t,FormItem:ge,errors:n}):v(ge);return d.jsx("fieldset",{className:`${o}`,children:d.jsx(m,{})})},q=o=>new Promise(t=>{o instanceof Promise?o.then(()=>{t(null)}):t(null)}),W={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},ut=({position:o,parent:t,content:s,callback:n,className:c})=>{const i=u.useRef(null),f=u.useRef(!1),[l,_]=u.useState(!1),[v,m]=u.useState(!0),y=()=>{f.current=!0,m(!1),_(!0),n!=null&&n.enter&&n.enter(i.current)},R=async()=>{f.current=!1,m(!0),n!=null&&n.leave&&await q(n.leave(i.current)),f.current||_(!1)};return d.jsxs("div",{onMouseEnter:y,onMouseLeave:R,onClick:R,className:`${W.spice_dropdown_wrapper} ${c||""}`,children:[t.children,d.jsx("div",{ref:i,className:`${W.spice_dropdown_content} ${l?"":W.spice_dropdown_content_hidden} ${v?W.spice_dropdown_content_pointerPrevent:""} ${W["spice_dropdown_"+o]}`,children:s.children})]})},he=(o,t=[])=>{o>60&&(o=60);const s=Math.floor(1e3/o);let n=performance.now();const c=l=>{const _=l-n,v=_<=s;return v||(n=l-_%s),v},i={callback:null,isPlay:!1,id:0},f=l=>{i.id=requestAnimationFrame(f),!c(l)&&i.callback&&i.isPlay&&i.callback()};return u.useEffect(()=>(i.id=requestAnimationFrame(f),()=>{cancelAnimationFrame(i.id)}),t),(l,_)=>{if(l==="play"){if(!_){console.warn("Callback function is required when 'play'");return}i.callback=_,i.isPlay=!0}else l==="pause"&&(i.isPlay=!1)}},lt={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},dt=({className:o,children:t,callback:s,fps:n=60,stopPropagation:c=!1,isOnClickReset:i=!1})=>{const f=u.useRef(null),l=u.useRef(null),_=u.useRef(),v=he(n),m={target:f.current,children:l.current,x:0,y:0},y=w=>{m.target=f.current,m.children=l.current},R=w=>{_.current=w.currentTarget.getBoundingClientRect(),m.x=w.clientX-_.current.left-_.current.width/2,m.y=w.clientY-_.current.top-_.current.height/2},D=w=>{w.stopPropagation(),y(),R(w),v("play",()=>{s.move(m)})},z=w=>{w.stopPropagation(),R(w)},B=w=>{w.stopPropagation(),v("pause"),s.leave&&s.leave(m)},ne=w=>{B(w)},I=w=>{i&&B(w)};return d.jsx("div",{onMouseEnter:D,onMouseMove:z,onMouseLeave:ne,onClick:I,className:o||"",ref:f,children:d.jsx("div",{ref:l,className:c?lt.spice_magnet_stopPropagation:"",children:t})})},$={spice_bgImg_wrapper:"_spice_bgImg_wrapper_164nj_1",spice_bgImg_view:"_spice_bgImg_view_164nj_5",spice_bgImg_golden:"_spice_bgImg_golden_164nj_22",spice_bgImg_silver:"_spice_bgImg_silver_164nj_26",spice_bgImg_platinum:"_spice_bgImg_platinum_164nj_30","spice_bgImg_16-9":"_spice_bgImg_16-9_164nj_34",spice_bgImg_square:"_spice_bgImg_square_164nj_38","spice_bgImg_3-2":"_spice_bgImg_3-2_164nj_42","spice_bgImg_4-3":"_spice_bgImg_4-3_164nj_46"},ft=({ratio:o,children:t,className:s})=>{const n=["golden","silver","platinum","16-9","square","3-2","4-3"];let c=n.includes(o),i=typeof o=="number"&&o>0;if(!c&&!i)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${n.join(" | ")} or a number greater than 0.`);return d.jsx("div",{className:`${$.spice_bgImg_wrapper} ${s||""}`,children:d.jsx("div",{className:`${$.spice_bgImg_view} ${c?$["spice_bgImg_"+o]:""}`,style:i?{paddingTop:`${o}%`}:{},children:t})})},we=o=>{const t=document.documentElement.style,s=document.body.style;o==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",s.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",s.overflow="")},_t={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},pt=({children:o,className:t,dialog:s,callback:n})=>{const c=u.useRef(null),i=()=>{we("add"),c.current.showModal(),n!=null&&n.open&&n.open(c.current)},f=async()=>{n!=null&&n.close&&await q(n.close(c.current)),we("remove"),c.current.close()};return u.useEffect(()=>{const l=c.current.querySelectorAll(".spice__modal_close");l&&l.forEach(_=>{_.addEventListener("click",()=>{f()})})},[]),d.jsxs(d.Fragment,{children:[d.jsx("button",{className:t||"",onClick:()=>{i()},children:o}),d.jsx("dialog",{ref:c,onClick:l=>{l.target===c.current&&f()},className:`${_t.spice_modal_dialog} ${s.className?s.className:""}`,children:s.children})]})},vt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},be=u.createContext(vt),ye=u.createContext(()=>{}),gt=({children:o,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[s,n]=u.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return d.jsx(be.Provider,{value:s,children:d.jsx(ye.Provider,{value:n,children:o})})},Ee=()=>u.useContext(be),ee=()=>u.useContext(ye),mt=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=ee(),c=Ee(),i=()=>{c.current===t||c.isLeaving||n(f=>({...f,isLeaving:!0,isAnimation:!0,prev:f.current,next:t}))};return d.jsx("button",{onClick:i,className:s||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":c.current===t,children:o})},ht={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},xe=({content:o,isOpen:t})=>{const s=o.querySelectorAll("a,button");if(!s)return;const n=t?"0":"-1";s.forEach(c=>{c.setAttribute("tabindex",n)})},wt=Object.freeze(Object.defineProperty({__proto__:null,Button:mt,Content:({children:o,value:t,className:s,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const c=u.useRef(!0),i=u.useRef(null),f=ee(),l=Ee(),_=l.current===t&&!l.isLeaving;return u.useEffect(()=>{if(c.current){c.current=!1;return}if(!l.isAnimation){_&&n!=null&&n.reset&&n.reset(i.current);return}l.prev===t&&(async()=>(n!=null&&n.close&&await q(n.close(i.current)),f(v=>({...v,isLeaving:!1,prev:"",current:v.next,next:""}))))(),_&&n!=null&&n.open&&n.open(i.current)},[l,f,n,t,_]),u.useEffect(()=>{xe({content:i.current,isOpen:l.current===t})},[l,t]),d.jsx("div",{ref:i,className:`${l.current!==t?ht.spice_tab_hidden:""} ${s||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":l.current!==t,children:o})},Context:gt,useTabSwitch:()=>{const o=ee();return(t,s)=>{o(n=>({isAnimation:s,isLeaving:s,prev:s?n.current:"",current:s?n.current:t,next:s?t:""}))}}},Symbol.toStringTag,{value:"Module"})),bt={target:"",toggle:!1,defaultValue:[]},Re=u.createContext(bt),Se=u.createContext(()=>{}),yt=({children:o,defaultValue:t})=>{const[s,n]=u.useState({target:"",toggle:!1,defaultValue:t});return d.jsx(Re.Provider,{value:s,children:d.jsx(Se.Provider,{value:n,children:o})})},je=()=>u.useContext(Re),Et=()=>u.useContext(Se),xt=({children:o,value:t,className:s})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=je(),c=Et(),i=!!n.defaultValue.find(_=>_===t),[f,l]=u.useState(i);return d.jsx("button",{className:s||"",onClick:()=>{c(_=>({..._,toggle:f,target:t})),l(!f)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":f,children:o})},Te={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},Ce=({targetRef:o,callback:t,debounce:s,dependencies:n=[]})=>{const c=u.useRef(0),i=u.useRef(!0);u.useEffect(()=>{const f=new ResizeObserver(_=>{clearTimeout(c.current),c.current=setTimeout(()=>{if(i.current){i.current=!1;return}t(_[0].target)},s)}),l=o.current;if(l)return f.observe(l),()=>{f.unobserve(l),clearTimeout(c.current)}},n)},Rt=Object.freeze(Object.defineProperty({__proto__:null,Button:xt,Content:({value:o,callback:t,children:s,className:n})=>{if(o==="")throw new Error("Please set the value to something other than an empty string.");const c=u.useRef(!0),i=u.useRef(null),f=u.useRef(null),l=je(),_=!!l.defaultValue.find(y=>y===o),[v,m]=u.useState(_);return u.useEffect(()=>{l.target===o&&m(!v)},[l.target,l.toggle]),u.useEffect(()=>{if(c.current){c.current=!1;return}const y={height:f.current.getBoundingClientRect().height,target:i.current};v?t.open(y):t.close(y)},[v]),u.useEffect(()=>{xe({content:i.current,isOpen:v})},[v]),Ce({targetRef:f,callback:y=>{const R=y.getBoundingClientRect().height;v&&(i.current.style.height=`${R}px`)},dependencies:[v],debounce:100}),d.jsx("div",{ref:i,className:`${Te.spice_accordion_content} ${_?"":Te.spice_accordion_hidden}`,id:`content-${o}`,"aria-labelledby":`button-${o}`,"aria-hidden":!v,children:d.jsx("div",{ref:f,className:n||"",children:s})})},Context:yt},Symbol.toStringTag,{value:"Module"})),St=typeof document<"u"?u.useLayoutEffect:u.useEffect,jt=({targetRef:o,rootMargin:t="0px",threshold:s=0,once:n,callback:c,dependencies:i=[]})=>{const f={rootMargin:t,threshold:s};u.useEffect(()=>{const l=o==null?void 0:o.current;if(!l)return;const _=(m,y)=>{m.forEach(R=>{R.isIntersecting&&c.enter?(c.enter(R.target),n&&y.unobserve(R.target)):!R.isIntersecting&&c.leave&&c.leave(R.target)})},v=new IntersectionObserver(_,f);return v.observe(l),()=>{v.unobserve(l)}},i)},Y=({callback:o,debounce:t,dependencies:s=[]})=>{const n=u.useRef(0),c=u.useRef(0),i=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{o({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)};u.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i),clearTimeout(c.current)}),s)},Tt=({initWinW:o,winW:t,threshold:s})=>{let n=!(o<=s);t<=s?n&&window.location.reload():!n&&window.location.reload()},Ct=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`,Pt=()=>{console.log(Ct)},Ot=o=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const s=o>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==s&&t.setAttribute("content",s)},It=({reloadThresholds:o,isFixViewportForSmall:t=!0,areYouFun:s=!1})=>{const n=c=>{t&&Ot(c)};Y({callback({initWinW:c,winW:i}){o&&o.forEach(f=>{Tt({initWinW:c,winW:i,threshold:f})}),n(i)},debounce:100,dependencies:[]}),u.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),s&&process.env.NODE_ENV!=="development"&&Pt()},[])},Ft=()=>{const[o,t]=u.useState(null),s=()=>{const n=window.ontouchstart,c=navigator.maxTouchPoints;n!==void 0&&0<c?t(!0):t(!1)};return Y({callback(){s()},debounce:100,dependencies:[]}),u.useEffect(()=>{s()},[]),o},te="scroll",Dt=({threshold:o=0,debounce:t,dependencies:s=[]})=>{const n=u.useRef(null),[c,i]=u.useReducer((m,y)=>{switch(y.type){case te:return n.current=y.payload,y.payload;default:return m}},n.current),f=u.useRef(0),l=u.useRef(0),_=()=>window.scrollY||document.documentElement.scrollTop,v=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const m=_();m>f.current+o&&n.current!=="down"?i({type:te,payload:"down"}):m<f.current-o&&n.current!=="up"&&i({type:te,payload:"up"}),f.current=m},t)};return u.useEffect(()=>(f.current=_(),window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),clearTimeout(l.current)}),s),c},At=({type:o,width:t})=>{const[s,n]=u.useState(null),c=i=>{switch(o){case"max":n(t<=i);break;case"min":n(t>=i);break}};return Y({callback:({winW:i})=>{c(i)},debounce:100,dependencies:[]}),u.useEffect(()=>{c(window.innerWidth)},[]),s};x.Accordion=Rt,x.AsideLayout=st,x.BackgroundImage=ft,x.Dropdown=ut,x.FormField=at,x.Magnet=dt,x.Modal=pt,x.Tab=wt,x.WrapperLayout=rt,x.useAnimationFrame=he,x.useIntersectionObserver=jt,x.useIsTouchDevice=Ft,x.useIsomorphicLayoutEffect=St,x.useMediaQuery=At,x.useResizeObserver=Ce,x.useScrollDirection=Dt,x.useStarter=It,x.useWindowResizeObserver=Y,Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
