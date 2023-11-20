(function(E,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(E=typeof globalThis<"u"?globalThis:E||self,i(E.spice={},E.React))})(this,function(E,i){"use strict";const mn="";var X={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function tt(){if(fe)return N;fe=1;var o=i,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(l,_,m){var v,h={},R=null,P=null;m!==void 0&&(R=""+m),_.key!==void 0&&(R=""+_.key),_.ref!==void 0&&(P=_.ref);for(v in _)n.call(_,v)&&!c.hasOwnProperty(v)&&(h[v]=_[v]);if(l&&l.defaultProps)for(v in _=l.defaultProps,_)h[v]===void 0&&(h[v]=_[v]);return{$$typeof:t,type:l,key:R,ref:P,props:h,_owner:a.current}}return N.Fragment=r,N.jsx=d,N.jsxs=d,N}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function nt(){return _e||(_e=1,process.env.NODE_ENV!=="production"&&function(){var o=i,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),B=Symbol.iterator,re="@@iterator";function k(e){if(e===null||typeof e!="object")return null;var s=B&&e[B]||e[re];return typeof s=="function"?s:null}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var s=arguments.length,u=new Array(s>1?s-1:0),p=1;p<s;p++)u[p-1]=arguments[p];S("error",e,u)}}function S(e,s,u){{var p=D.ReactDebugCurrentFrame,b=p.getStackAddendum();b!==""&&(s+="%s",u=u.concat([b]));var y=u.map(function(g){return String(g)});y.unshift("Warning: "+s),Function.prototype.apply.call(console[e],console,y)}}var Nt=!1,Wt=!1,Vt=!1,Yt=!1,zt=!1,Fe;Fe=Symbol.for("react.module.reference");function Ut(e){return!!(typeof e=="string"||typeof e=="function"||e===n||e===c||zt||e===a||e===m||e===v||Yt||e===P||Nt||Wt||Vt||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===h||e.$$typeof===d||e.$$typeof===l||e.$$typeof===_||e.$$typeof===Fe||e.getModuleId!==void 0))}function Bt(e,s,u){var p=e.displayName;if(p)return p;var b=s.displayName||s.name||"";return b!==""?u+"("+b+")":u}function Ie(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n:return"Fragment";case r:return"Portal";case c:return"Profiler";case a:return"StrictMode";case m:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var s=e;return Ie(s)+".Consumer";case d:var u=e;return Ie(u._context)+".Provider";case _:return Bt(e,e.render,"ForwardRef");case h:var p=e.displayName||null;return p!==null?p:F(e.type)||"Memo";case R:{var b=e,y=b._payload,g=b._init;try{return F(g(y))}catch{return null}}}return null}var L=Object.assign,Y=0,De,Le,ke,Ae,Me,Ne,We;function Ve(){}Ve.__reactDisabledLog=!0;function Ht(){{if(Y===0){De=console.log,Le=console.info,ke=console.warn,Ae=console.error,Me=console.group,Ne=console.groupCollapsed,We=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Gt(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:De}),info:L({},e,{value:Le}),warn:L({},e,{value:ke}),error:L({},e,{value:Ae}),group:L({},e,{value:Me}),groupCollapsed:L({},e,{value:Ne}),groupEnd:L({},e,{value:We})})}Y<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=D.ReactCurrentDispatcher,se;function H(e,s,u){{if(se===void 0)try{throw Error()}catch(b){var p=b.stack.trim().match(/\n( *(at )?)/);se=p&&p[1]||""}return`
`+se+e}}var ie=!1,G;{var Jt=typeof WeakMap=="function"?WeakMap:Map;G=new Jt}function Ye(e,s){if(!e||ie)return"";{var u=G.get(e);if(u!==void 0)return u}var p;ie=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=oe.current,oe.current=null,Ht();try{if(s){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(I){p=I}Reflect.construct(e,[],g)}else{try{g.call()}catch(I){p=I}e.call(g.prototype)}}else{try{throw Error()}catch(I){p=I}e()}}catch(I){if(I&&p&&typeof I.stack=="string"){for(var w=I.stack.split(`
`),j=p.stack.split(`
`),x=w.length-1,C=j.length-1;x>=1&&C>=0&&w[x]!==j[C];)C--;for(;x>=1&&C>=0;x--,C--)if(w[x]!==j[C]){if(x!==1||C!==1)do if(x--,C--,C<0||w[x]!==j[C]){var O=`
`+w[x].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,O),O}while(x>=1&&C>=0);break}}}finally{ie=!1,oe.current=y,Gt(),Error.prepareStackTrace=b}var M=e?e.displayName||e.name:"",et=M?H(M):"";return typeof e=="function"&&G.set(e,et),et}function Kt(e,s,u){return Ye(e,!1)}function Qt(e){var s=e.prototype;return!!(s&&s.isReactComponent)}function J(e,s,u){if(e==null)return"";if(typeof e=="function")return Ye(e,Qt(e));if(typeof e=="string")return H(e);switch(e){case m:return H("Suspense");case v:return H("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return Kt(e.render);case h:return J(e.type,s,u);case R:{var p=e,b=p._payload,y=p._init;try{return J(y(b),s,u)}catch{}}}return""}var K=Object.prototype.hasOwnProperty,ze={},Ue=D.ReactDebugCurrentFrame;function Q(e){if(e){var s=e._owner,u=J(e.type,e._source,s?s.type:null);Ue.setExtraStackFrame(u)}else Ue.setExtraStackFrame(null)}function Xt(e,s,u,p,b){{var y=Function.call.bind(K);for(var g in e)if(y(e,g)){var w=void 0;try{if(typeof e[g]!="function"){var j=Error((p||"React class")+": "+u+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}w=e[g](s,g,p,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){w=x}w&&!(w instanceof Error)&&(Q(b),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",u,g,typeof w),Q(null)),w instanceof Error&&!(w.message in ze)&&(ze[w.message]=!0,Q(b),T("Failed %s type: %s",u,w.message),Q(null))}}}var Zt=Array.isArray;function ae(e){return Zt(e)}function qt(e){{var s=typeof Symbol=="function"&&Symbol.toStringTag,u=s&&e[Symbol.toStringTag]||e.constructor.name||"Object";return u}}function $t(e){try{return Be(e),!1}catch{return!0}}function Be(e){return""+e}function He(e){if($t(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",qt(e)),Be(e)}var z=D.ReactCurrentOwner,en={key:!0,ref:!0,__self:!0,__source:!0},Ge,Je,ce;ce={};function tn(e){if(K.call(e,"ref")){var s=Object.getOwnPropertyDescriptor(e,"ref").get;if(s&&s.isReactWarning)return!1}return e.ref!==void 0}function nn(e){if(K.call(e,"key")){var s=Object.getOwnPropertyDescriptor(e,"key").get;if(s&&s.isReactWarning)return!1}return e.key!==void 0}function rn(e,s){if(typeof e.ref=="string"&&z.current&&s&&z.current.stateNode!==s){var u=F(z.current.type);ce[u]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(z.current.type),e.ref),ce[u]=!0)}}function on(e,s){{var u=function(){Ge||(Ge=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(e,"key",{get:u,configurable:!0})}}function sn(e,s){{var u=function(){Je||(Je=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(e,"ref",{get:u,configurable:!0})}}var an=function(e,s,u,p,b,y,g){var w={$$typeof:t,type:e,key:s,ref:u,props:g,_owner:y};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function cn(e,s,u,p,b){{var y,g={},w=null,j=null;u!==void 0&&(He(u),w=""+u),nn(s)&&(He(s.key),w=""+s.key),tn(s)&&(j=s.ref,rn(s,b));for(y in s)K.call(s,y)&&!en.hasOwnProperty(y)&&(g[y]=s[y]);if(e&&e.defaultProps){var x=e.defaultProps;for(y in x)g[y]===void 0&&(g[y]=x[y])}if(w||j){var C=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&on(g,C),j&&sn(g,C)}return an(e,w,j,b,p,z.current,g)}}var ue=D.ReactCurrentOwner,Ke=D.ReactDebugCurrentFrame;function A(e){if(e){var s=e._owner,u=J(e.type,e._source,s?s.type:null);Ke.setExtraStackFrame(u)}else Ke.setExtraStackFrame(null)}var le;le=!1;function de(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Qe(){{if(ue.current){var e=F(ue.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function un(e){{if(e!==void 0){var s=e.fileName.replace(/^.*[\\\/]/,""),u=e.lineNumber;return`

Check your code at `+s+":"+u+"."}return""}}var Xe={};function ln(e){{var s=Qe();if(!s){var u=typeof e=="string"?e:e.displayName||e.name;u&&(s=`

Check the top-level render call using <`+u+">.")}return s}}function Ze(e,s){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var u=ln(s);if(Xe[u])return;Xe[u]=!0;var p="";e&&e._owner&&e._owner!==ue.current&&(p=" It was passed a child from "+F(e._owner.type)+"."),A(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',u,p),A(null)}}function qe(e,s){{if(typeof e!="object")return;if(ae(e))for(var u=0;u<e.length;u++){var p=e[u];de(p)&&Ze(p,s)}else if(de(e))e._store&&(e._store.validated=!0);else if(e){var b=k(e);if(typeof b=="function"&&b!==e.entries)for(var y=b.call(e),g;!(g=y.next()).done;)de(g.value)&&Ze(g.value,s)}}}function dn(e){{var s=e.type;if(s==null||typeof s=="string")return;var u;if(typeof s=="function")u=s.propTypes;else if(typeof s=="object"&&(s.$$typeof===_||s.$$typeof===h))u=s.propTypes;else return;if(u){var p=F(s);Xt(u,e.props,"prop",p,e)}else if(s.PropTypes!==void 0&&!le){le=!0;var b=F(s);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof s.getDefaultProps=="function"&&!s.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fn(e){{for(var s=Object.keys(e.props),u=0;u<s.length;u++){var p=s[u];if(p!=="children"&&p!=="key"){A(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),A(null);break}}e.ref!==null&&(A(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function $e(e,s,u,p,b,y){{var g=Ut(e);if(!g){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=un(b);j?w+=j:w+=Qe();var x;e===null?x="null":ae(e)?x="array":e!==void 0&&e.$$typeof===t?(x="<"+(F(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,w)}var C=cn(e,s,u,b,y);if(C==null)return C;if(g){var O=s.children;if(O!==void 0)if(p)if(ae(O)){for(var M=0;M<O.length;M++)qe(O[M],e);Object.freeze&&Object.freeze(O)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else qe(O,e)}return e===n?fn(C):dn(C),C}}function _n(e,s,u){return $e(e,s,u,!0)}function pn(e,s,u){return $e(e,s,u,!1)}var vn=pn,hn=_n;W.Fragment=n,W.jsx=vn,W.jsxs=hn}()),W}process.env.NODE_ENV==="production"?X.exports=tt():X.exports=nt();var f=X.exports;const pe={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},ve=i.createContext(!0),he=i.createContext(o=>!o),rt=({children:o})=>{const[t,r]=i.useState(!0);return f.jsx(ve.Provider,{value:t,children:f.jsx(he.Provider,{value:r,children:o})})},ot=({children:o})=>{const t=i.useContext(ve);return f.jsx("div",{className:`${pe.spice_wrapper} ${t?pe.spice_wrapper_hidden:""}`,children:o})},st=({children:o})=>f.jsx(rt,{children:f.jsx(ot,{children:o})}),me=()=>i.useContext(he),Z={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},it=({className:o,children:t,aside:r,isSticky:n=!1})=>{const a=me();return i.useEffect(()=>(n&&a(()=>!1),()=>{a(()=>!0)}),[n,a]),f.jsxs("div",{className:o||"",children:[r.index===1&&f.jsx("div",{className:Z.spice_aside_main,children:t}),f.jsx("aside",{className:`${Z.spice_aside_aside} ${r.className?r.className:""}`,children:r.chidren}),r.index===0&&f.jsx("div",{className:Z.spice_aside_main,children:t})]})},q={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},we=({formProps:o,className:t})=>f.jsx("input",{...o,className:`${q.spice_form_input} ${t||""}`}),at=({formProps:o})=>{const{isSelect:t,...r}=o;if(!t)return;const n=()=>{const c=t.defaultValue;return c?f.jsx("option",{hidden:!0,children:c}):null},a=()=>{const c=t.defaultSelectedIndex;if(c)return t.options[c]};return f.jsxs("select",{...r,className:q.spice_form_select,defaultValue:a(),children:[f.jsx(n,{}),t.options.map(c=>f.jsx("option",{value:c,children:c},c))]})},ge=({layoutType:o,formPropsArr:t,label:r,FormItem:n,errors:a})=>{const c=i.useCallback(d=>!a||!a[d]?null:a[d],[a]);if(o==="block")return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{htmlFor:t[0].id,children:r}),f.jsx(n,{formProps:t[0]}),c(0)]});if(o==="flex")return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{htmlFor:t[0].id,children:r}),f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx(n,{formProps:t[0]}),c(0)]}),f.jsxs("li",{children:[f.jsx(n,{formProps:t[1]}),c(1)]})]})]});if(o==="radio-check"){const d=t.map(l=>f.jsxs("li",{children:[f.jsx(n,{formProps:l,className:q.spice_form_radioCheckInput}),f.jsx("label",{htmlFor:l.id,children:l.value})]},l.id));return f.jsxs(f.Fragment,{children:[r&&f.jsx("label",{children:r}),f.jsx("ul",{children:d}),c(0)]})}},ct=({formProps:o})=>{const{isTextarea:t,...r}=o;if(t)return f.jsx("textarea",{...r,...t})},ut=({className:o,label:t,formProps:r,errors:n})=>{const a=r,c=a[0].type,d=a.length,l=!!a[0].isSelect,_=!!a[0].isTextarea;if(!(c==="radio"||c==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(n&&n.length>2)throw new Error("The length of error is up to 2.");const m=i.useCallback(h=>ge({layoutType:d===1?"block":"flex",formPropsArr:a,label:t,FormItem:h,errors:n}),[n,a,t,d]),v=i.useCallback(()=>l?m(at):_?m(ct):c==="radio"||c==="checkbox"?ge({layoutType:"radio-check",formPropsArr:a,label:t,FormItem:we,errors:n}):m(we),[n,a,t,l,_,m,c]);return f.jsx("fieldset",{className:`${o}`,children:f.jsx(v,{})})},$=o=>new Promise(t=>{o instanceof Promise?o.then(()=>{t(null)}):t(null)}),V={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},lt=({position:o,parent:t,content:r,callback:n,className:a})=>{const c=i.useRef(null),d=i.useRef(!1),[l,_]=i.useState(!1),[m,v]=i.useState(!0),h=i.useCallback(()=>{d.current=!0,v(!1),_(!0),n!=null&&n.onEnter&&n.onEnter(c.current)},[n]),R=i.useCallback(async()=>{d.current=!1,v(!0),n!=null&&n.onLeave&&await $(n.onLeave(c.current)),d.current||_(!1)},[n]);return f.jsxs("div",{onMouseEnter:h,onMouseLeave:R,onClick:R,className:`${V.spice_dropdown_wrapper} ${a||""}`,children:[t.children,f.jsx("div",{ref:c,className:`${V.spice_dropdown_content} ${l?"":V.spice_dropdown_content_hidden} ${m?V.spice_dropdown_content_pointerPrevent:""} ${V["spice_dropdown_"+o]}`,children:r.children})]})},be=(o=60,t=[])=>{o>60&&(o=60);const r=Math.floor(1e3/o),n=i.useRef(performance.now()),a=i.useCallback(l=>{const _=l-n.current,m=_<=r;return m||(n.current=l-_%r),m},[r]),c=i.useRef({callback:null,isPlay:!1,id:0}).current,d=i.useCallback(l=>{c.id=requestAnimationFrame(d),!a(l)&&c.callback&&c.isPlay&&c.callback(l)},[a,c]);return i.useEffect(()=>(c.id=requestAnimationFrame(d),()=>{cancelAnimationFrame(c.id)}),t),(l,_)=>{if(l==="play"){if(!_){console.warn("Callback function is required when 'play'");return}c.callback=_,c.isPlay=!0}else l==="pause"&&(c.isPlay=!1)}},dt={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},ft=({className:o,children:t,callback:r,fps:n=60,stopPropagation:a=!1,isOnClickReset:c=!1,dependencies:d=[]})=>{const l=i.useRef(null),_=i.useRef(null),m=i.useRef();n>60&&(n=60);const v=be(n,d),h=i.useMemo(()=>({target:l.current,children:_.current,x:0,y:0}),[]),R=i.useCallback(S=>{h.target=l.current,h.children=_.current},[h]),P=i.useCallback(S=>{m.current=S.currentTarget.getBoundingClientRect(),h.x=S.clientX-m.current.left-m.current.width/2,h.y=S.clientY-m.current.top-m.current.height/2},[h]),B=i.useCallback(S=>{S.stopPropagation(),R(S),P(S),v("play",()=>{r.onMove(h)})},[R,P,v,r,h]),re=i.useCallback(S=>{S.stopPropagation(),P(S)},[P]),k=i.useCallback(S=>{S.stopPropagation(),v("pause"),r.onLeave&&r.onLeave(h)},[v,r,h]),D=i.useCallback(S=>{k(S)},[k]),T=i.useCallback(S=>{c&&k(S)},[k,c]);return f.jsx("div",{onMouseEnter:B,onMouseMove:re,onMouseLeave:D,onClick:T,className:o||"",ref:l,children:f.jsx("div",{ref:_,className:a?dt.spice_magnet_stopPropagation:"",children:t})})},ee={spice_thumbnail_wrapper:"_spice_thumbnail_wrapper_1qqot_1",spice_thumbnail_view:"_spice_thumbnail_view_1qqot_5",spice_thumbnail_golden:"_spice_thumbnail_golden_1qqot_26",spice_thumbnail_silver:"_spice_thumbnail_silver_1qqot_30",spice_thumbnail_platinum:"_spice_thumbnail_platinum_1qqot_34","spice_thumbnail_16-9":"_spice_thumbnail_16-9_1qqot_38",spice_thumbnail_square:"_spice_thumbnail_square_1qqot_42","spice_thumbnail_3-2":"_spice_thumbnail_3-2_1qqot_46","spice_thumbnail_4-3":"_spice_thumbnail_4-3_1qqot_50"},_t=({ratio:o,children:t,className:r})=>{const n=["golden","silver","platinum","16-9","square","3-2","4-3"];let a=n.includes(o),c=typeof o=="number"&&o>0;if(!a&&!c)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${n.join(" | ")} or a number greater than 0.`);return f.jsx("div",{className:`${ee.spice_thumbnail_wrapper} ${r||""}`,children:f.jsx("div",{className:`${ee.spice_thumbnail_view} ${a?ee["spice_thumbnail_"+o]:""}`,style:c?{paddingTop:`${o}%`}:{},children:t})})},ye=o=>{const t=document.documentElement.style,r=document.body.style;o==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",r.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",r.overflow="")},pt={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},vt=".spice__modal_close",ht=({children:o,className:t,dialog:r,callback:n})=>{const a=i.useRef(null),c=i.useCallback(()=>{ye("add"),a.current.showModal(),n!=null&&n.onOpen&&n.onOpen(a.current)},[n]),d=i.useCallback(async()=>{n!=null&&n.onClose&&await $(n.onClose(a.current)),ye("remove"),a.current.close()},[n]);return i.useEffect(()=>{const l=a.current.querySelectorAll(vt);if(l)return l.forEach(_=>_.addEventListener("click",d)),()=>{l.forEach(_=>_.removeEventListener("click",d))}},[d]),i.useEffect(()=>{const l=_=>{var v;((v=a.current)==null?void 0:v.hasAttribute("open"))&&_.key==="Escape"&&d()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[d]),f.jsxs(f.Fragment,{children:[f.jsx("button",{className:t||"",onClick:()=>{c()},children:o}),f.jsx("dialog",{ref:a,onClick:l=>{l.target===a.current&&d()},className:`${pt.spice_modal_dialog} ${r.className?r.className:""}`,children:r.children})]})},mt=({children:o,className:t})=>{const r=me();return i.useEffect(()=>(r(()=>!1),()=>{r(()=>!0)}),[r]),f.jsx("div",{className:t||"",children:o})},wt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},Ee=i.createContext(wt),Re=i.createContext(()=>{}),gt=({children:o,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[r,n]=i.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return f.jsx(Ee.Provider,{value:r,children:f.jsx(Re.Provider,{value:n,children:o})})},xe=()=>i.useContext(Ee),te=()=>i.useContext(Re),bt=({children:o,value:t,className:r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=te(),a=xe(),c=i.useCallback(()=>{a.current===t||a.isLeaving||n(d=>({...d,isLeaving:!0,isAnimation:!0,prev:d.current,next:t}))},[n,a,t]);return f.jsx("button",{onClick:c,className:r||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":a.current===t,children:o})},yt={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},Ce=({content:o,isOpen:t})=>{const r=o.querySelectorAll("a,button");if(!r)return;const n=t?"0":"-1";r.forEach(a=>{a.setAttribute("tabindex",n)})},Et=Object.freeze(Object.defineProperty({__proto__:null,Button:bt,Content:({children:o,value:t,className:r,callback:n})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const a=i.useRef(!0),c=i.useRef(null),d=te(),l=xe(),_=l.current===t&&!l.isLeaving;return i.useEffect(()=>{if(a.current){a.current=!1;return}if(!l.isAnimation){_&&n!=null&&n.onReset&&n.onReset(c.current);return}l.prev===t&&(async()=>(n!=null&&n.onClose&&await $(n.onClose(c.current)),d(m=>({...m,isLeaving:!1,prev:"",current:m.next,next:""}))))(),_&&n!=null&&n.onOpen&&n.onOpen(c.current)},[l,d,n,t,_]),i.useEffect(()=>{Ce({content:c.current,isOpen:l.current===t})},[l,t]),f.jsx("div",{ref:c,className:`${l.current!==t?yt.spice_tab_hidden:""} ${r||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":l.current!==t,children:o})},Context:gt,useTabSwitch:()=>{const o=te();return(t,r)=>{o(n=>({isAnimation:r,isLeaving:r,prev:r?n.current:"",current:r?n.current:t,next:r?t:""}))}}},Symbol.toStringTag,{value:"Module"})),Rt={target:"",toggle:!1,defaultValue:[]},Se=i.createContext(Rt),Te=i.createContext(()=>{}),xt=({children:o,defaultValue:t})=>{const[r,n]=i.useState({target:"",toggle:!1,defaultValue:t});return f.jsx(Se.Provider,{value:r,children:f.jsx(Te.Provider,{value:n,children:o})})},je=()=>i.useContext(Se),Ct=()=>i.useContext(Te),St=({children:o,value:t,className:r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const n=je(),a=Ct(),c=i.useMemo(()=>!!n.defaultValue.find(_=>_===t),[n,t]),[d,l]=i.useState(c);return f.jsx("button",{className:r||"",onClick:()=>{a(_=>({..._,toggle:d,target:t})),l(!d)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":d,children:o})},Oe=({targetRef:o,callback:t,debounce:r=100,dependencies:n=[]})=>{const a=i.useRef(0),c=i.useRef(!0);i.useEffect(()=>{const d=new ResizeObserver(_=>{clearTimeout(a.current),a.current=setTimeout(()=>{if(c.current){c.current=!1;return}t(_[0].target)},r)}),l=o.current;if(l)return d.observe(l),()=>{d.unobserve(l),clearTimeout(a.current)}},n)},Pe={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},Tt=Object.freeze(Object.defineProperty({__proto__:null,Button:St,Content:({value:o,callback:t,children:r,className:n})=>{if(o==="")throw new Error("Please set the value to something other than an empty string.");const a=je(),c=i.useMemo(()=>!!a.defaultValue.find(h=>h===o),[a,o]),[d,l]=i.useState(c);i.useEffect(()=>{a.target===o&&l(!d)},[a.target,a.toggle]);const _=i.useRef(!0),m=i.useRef(null),v=i.useRef(null);return i.useEffect(()=>{if(_.current){_.current=!1;return}const h={height:v.current.getBoundingClientRect().height,target:m.current};d?t.onOpen(h):t.onClose(h)},[d,t]),i.useEffect(()=>{Ce({content:m.current,isOpen:d})},[d]),Oe({targetRef:v,callback:h=>{const R=h.getBoundingClientRect().height;d&&(m.current.style.height=`${R}px`)},dependencies:[d],debounce:100}),f.jsx("div",{ref:m,className:`${Pe.spice_accordion_content} ${c?"":Pe.spice_accordion_hidden}`,id:`content-${o}`,"aria-labelledby":`button-${o}`,"aria-hidden":!d,children:f.jsx("div",{ref:v,className:n||"",children:r})})},Context:xt},Symbol.toStringTag,{value:"Module"})),jt=typeof document<"u"?i.useLayoutEffect:i.useEffect,Ot=({targetRef:o,rootMargin:t="0px",threshold:r=0,once:n=!1,callback:a,dependencies:c=[]})=>{const d={rootMargin:t,threshold:r};i.useEffect(()=>{const l=o==null?void 0:o.current;if(!l)return;const _=(v,h)=>{v.forEach(R=>{R.isIntersecting&&a.onEnter?(a.onEnter(R),n&&h.unobserve(R.target)):!R.isIntersecting&&a.onLeave&&a.onLeave(R)})},m=new IntersectionObserver(_,d);return m.observe(l),()=>{m.unobserve(l)}},c)},U=({callback:o,debounce:t=100,dependencies:r=[]})=>{const n=i.useRef(0),a=i.useRef(0),c=i.useCallback(()=>{clearTimeout(a.current),a.current=setTimeout(()=>{o({winW:window.innerWidth,winH:window.innerHeight,initWinW:n.current})},t)},[o,t]);i.useEffect(()=>(n.current=window.innerWidth,window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),clearTimeout(a.current)}),r)},Pt=({initWinW:o,winW:t,threshold:r})=>{let n=!(o<=r);t<=r?n&&window.location.reload():!n&&window.location.reload()},Ft=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,It=()=>{console.log(Ft)},Dt=o=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const r=o>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==r&&t.setAttribute("content",r)},Lt=({reloadThresholds:o,isFixViewportForSmall:t=!0,areYouFun:r=!1})=>{const n=i.useCallback(a=>{t&&Dt(a)},[t]);U({callback:({initWinW:a,winW:c})=>{o&&o.forEach(d=>Pt({initWinW:a,winW:c,threshold:d})),n(c)},debounce:100,dependencies:[]}),i.useEffect(()=>{document.body.dataset.spiceRendered="true",n(window.innerWidth),r&&process.env.NODE_ENV!=="development"&&It()},[r,n])},kt=()=>{const[o,t]=i.useState(null),r=i.useCallback(()=>{const n=window.ontouchstart,a=navigator.maxTouchPoints;n!==void 0&&0<a?t(!0):t(!1)},[]);return U({callback:()=>r(),debounce:100,dependencies:[]}),i.useEffect(()=>r(),[r]),o},ne="scroll",At=({threshold:o=0,debounce:t=10,dependencies:r=[]})=>{const n=i.useRef(null),[a,c]=i.useReducer((v,h)=>{switch(h.type){case ne:return n.current=h.payload,h.payload;default:return v}},n.current),d=i.useRef(0),l=i.useRef(0),_=()=>window.scrollY||document.documentElement.scrollTop,m=i.useCallback(()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const v=_();v>d.current+o&&n.current!=="down"?c({type:ne,payload:"down"}):v<d.current-o&&n.current!=="up"&&c({type:ne,payload:"up"}),d.current=v},t)},[t,o]);return i.useEffect(()=>(d.current=_(),window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),clearTimeout(l.current)}),r),a},Mt=({type:o,width:t})=>{const[r,n]=i.useState(null),a=i.useCallback(c=>{switch(o){case"max":n(t>=c);break;case"min":n(t<=c);break}},[o,t]);return U({callback:({winW:c})=>a(c),debounce:100,dependencies:[]}),i.useEffect(()=>a(window.innerWidth),[a]),r};E.Accordion=Tt,E.AsideLayout=it,E.Dropdown=lt,E.FormField=ut,E.Magnet=ft,E.Modal=ht,E.StickyItem=mt,E.Tab=Et,E.Thumbnail=_t,E.WrapperLayout=st,E.useAnimationFrame=be,E.useIntersectionObserver=Ot,E.useIsTouchDevice=kt,E.useIsomorphicLayoutEffect=jt,E.useMediaQuery=Mt,E.useResizeObserver=Oe,E.useScrollDirection=At,E.useStarter=Lt,E.useWindowResizeObserver=U,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
