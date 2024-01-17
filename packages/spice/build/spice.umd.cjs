(function(E,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],s):(E=typeof globalThis<"u"?globalThis:E||self,s(E.spice={},E.React))})(this,function(E,s){"use strict";const xn="";var q={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function ot(){if(_e)return V;_e=1;var n=s,t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(u,f,v){var m,p={},y=null,C=null;v!==void 0&&(y=""+v),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(C=f.ref);for(m in f)r.call(f,m)&&!a.hasOwnProperty(m)&&(p[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)p[m]===void 0&&(p[m]=f[m]);return{$$typeof:t,type:u,key:y,ref:C,props:p,_owner:i.current}}return V.Fragment=o,V.jsx=d,V.jsxs=d,V}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function st(){return pe||(pe=1,process.env.NODE_ENV!=="production"&&function(){var n=s,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),R=Symbol.iterator,F="@@iterator";function I(e){if(e===null||typeof e!="object")return null;var c=R&&e[R]||e[F];return typeof c=="function"?c:null}var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var c=arguments.length,l=new Array(c>1?c-1:0),h=1;h<c;h++)l[h-1]=arguments[h];j("error",e,l)}}function j(e,c,l){{var h=k.ReactDebugCurrentFrame,b=h.getStackAddendum();b!==""&&(c+="%s",l=l.concat([b]));var x=l.map(function(w){return String(w)});x.unshift("Warning: "+c),Function.prototype.apply.call(console[e],console,x)}}var oe=!1,Ht=!1,Gt=!1,Jt=!1,Xt=!1,Fe;Fe=Symbol.for("react.module.reference");function Kt(e){return!!(typeof e=="string"||typeof e=="function"||e===r||e===a||Xt||e===i||e===v||e===m||Jt||e===C||oe||Ht||Gt||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===p||e.$$typeof===d||e.$$typeof===u||e.$$typeof===f||e.$$typeof===Fe||e.getModuleId!==void 0))}function Qt(e,c,l){var h=e.displayName;if(h)return h;var b=c.displayName||c.name||"";return b!==""?l+"("+b+")":l}function Ae(e){return e.displayName||"Context"}function A(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case r:return"Fragment";case o:return"Portal";case a:return"Profiler";case i:return"StrictMode";case v:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u:var c=e;return Ae(c)+".Consumer";case d:var l=e;return Ae(l._context)+".Provider";case f:return Qt(e,e.render,"ForwardRef");case p:var h=e.displayName||null;return h!==null?h:A(e.type)||"Memo";case y:{var b=e,x=b._payload,w=b._init;try{return A(w(x))}catch{return null}}}return null}var M=Object.assign,B=0,Le,Me,Ne,We,Ve,Ye,ze;function Ue(){}Ue.__reactDisabledLog=!0;function Zt(){{if(B===0){Le=console.log,Me=console.info,Ne=console.warn,We=console.error,Ve=console.group,Ye=console.groupCollapsed,ze=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}}function qt(){{if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Le}),info:M({},e,{value:Me}),warn:M({},e,{value:Ne}),error:M({},e,{value:We}),group:M({},e,{value:Ve}),groupCollapsed:M({},e,{value:Ye}),groupEnd:M({},e,{value:ze})})}B<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var se=k.ReactCurrentDispatcher,ie;function J(e,c,l){{if(ie===void 0)try{throw Error()}catch(b){var h=b.stack.trim().match(/\n( *(at )?)/);ie=h&&h[1]||""}return`
`+ie+e}}var ce=!1,X;{var $t=typeof WeakMap=="function"?WeakMap:Map;X=new $t}function Be(e,c){if(!e||ce)return"";{var l=X.get(e);if(l!==void 0)return l}var h;ce=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=se.current,se.current=null,Zt();try{if(c){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(L){h=L}Reflect.construct(e,[],w)}else{try{w.call()}catch(L){h=L}e.call(w.prototype)}}else{try{throw Error()}catch(L){h=L}e()}}catch(L){if(L&&h&&typeof L.stack=="string"){for(var g=L.stack.split(`
`),P=h.stack.split(`
`),T=g.length-1,O=P.length-1;T>=1&&O>=0&&g[T]!==P[O];)O--;for(;T>=1&&O>=0;T--,O--)if(g[T]!==P[O]){if(T!==1||O!==1)do if(T--,O--,O<0||g[T]!==P[O]){var D=`
`+g[T].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&X.set(e,D),D}while(T>=1&&O>=0);break}}}finally{ce=!1,se.current=x,qt(),Error.prepareStackTrace=b}var W=e?e.displayName||e.name:"",rt=W?J(W):"";return typeof e=="function"&&X.set(e,rt),rt}function en(e,c,l){return Be(e,!1)}function tn(e){var c=e.prototype;return!!(c&&c.isReactComponent)}function K(e,c,l){if(e==null)return"";if(typeof e=="function")return Be(e,tn(e));if(typeof e=="string")return J(e);switch(e){case v:return J("Suspense");case m:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return en(e.render);case p:return K(e.type,c,l);case y:{var h=e,b=h._payload,x=h._init;try{return K(x(b),c,l)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,He={},Ge=k.ReactDebugCurrentFrame;function Z(e){if(e){var c=e._owner,l=K(e.type,e._source,c?c.type:null);Ge.setExtraStackFrame(l)}else Ge.setExtraStackFrame(null)}function nn(e,c,l,h,b){{var x=Function.call.bind(Q);for(var w in e)if(x(e,w)){var g=void 0;try{if(typeof e[w]!="function"){var P=Error((h||"React class")+": "+l+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}g=e[w](c,w,h,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(T){g=T}g&&!(g instanceof Error)&&(Z(b),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",l,w,typeof g),Z(null)),g instanceof Error&&!(g.message in He)&&(He[g.message]=!0,Z(b),S("Failed %s type: %s",l,g.message),Z(null))}}}var rn=Array.isArray;function ae(e){return rn(e)}function on(e){{var c=typeof Symbol=="function"&&Symbol.toStringTag,l=c&&e[Symbol.toStringTag]||e.constructor.name||"Object";return l}}function sn(e){try{return Je(e),!1}catch{return!0}}function Je(e){return""+e}function Xe(e){if(sn(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",on(e)),Je(e)}var H=k.ReactCurrentOwner,cn={key:!0,ref:!0,__self:!0,__source:!0},Ke,Qe,ue;ue={};function an(e){if(Q.call(e,"ref")){var c=Object.getOwnPropertyDescriptor(e,"ref").get;if(c&&c.isReactWarning)return!1}return e.ref!==void 0}function un(e){if(Q.call(e,"key")){var c=Object.getOwnPropertyDescriptor(e,"key").get;if(c&&c.isReactWarning)return!1}return e.key!==void 0}function ln(e,c){if(typeof e.ref=="string"&&H.current&&c&&H.current.stateNode!==c){var l=A(H.current.type);ue[l]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(H.current.type),e.ref),ue[l]=!0)}}function dn(e,c){{var l=function(){Ke||(Ke=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};l.isReactWarning=!0,Object.defineProperty(e,"key",{get:l,configurable:!0})}}function fn(e,c){{var l=function(){Qe||(Qe=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};l.isReactWarning=!0,Object.defineProperty(e,"ref",{get:l,configurable:!0})}}var _n=function(e,c,l,h,b,x,w){var g={$$typeof:t,type:e,key:c,ref:l,props:w,_owner:x};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function pn(e,c,l,h,b){{var x,w={},g=null,P=null;l!==void 0&&(Xe(l),g=""+l),un(c)&&(Xe(c.key),g=""+c.key),an(c)&&(P=c.ref,ln(c,b));for(x in c)Q.call(c,x)&&!cn.hasOwnProperty(x)&&(w[x]=c[x]);if(e&&e.defaultProps){var T=e.defaultProps;for(x in T)w[x]===void 0&&(w[x]=T[x])}if(g||P){var O=typeof e=="function"?e.displayName||e.name||"Unknown":e;g&&dn(w,O),P&&fn(w,O)}return _n(e,g,P,b,h,H.current,w)}}var le=k.ReactCurrentOwner,Ze=k.ReactDebugCurrentFrame;function N(e){if(e){var c=e._owner,l=K(e.type,e._source,c?c.type:null);Ze.setExtraStackFrame(l)}else Ze.setExtraStackFrame(null)}var de;de=!1;function fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function qe(){{if(le.current){var e=A(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function hn(e){{if(e!==void 0){var c=e.fileName.replace(/^.*[\\\/]/,""),l=e.lineNumber;return`

Check your code at `+c+":"+l+"."}return""}}var $e={};function vn(e){{var c=qe();if(!c){var l=typeof e=="string"?e:e.displayName||e.name;l&&(c=`

Check the top-level render call using <`+l+">.")}return c}}function et(e,c){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var l=vn(c);if($e[l])return;$e[l]=!0;var h="";e&&e._owner&&e._owner!==le.current&&(h=" It was passed a child from "+A(e._owner.type)+"."),N(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,h),N(null)}}function tt(e,c){{if(typeof e!="object")return;if(ae(e))for(var l=0;l<e.length;l++){var h=e[l];fe(h)&&et(h,c)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var b=I(e);if(typeof b=="function"&&b!==e.entries)for(var x=b.call(e),w;!(w=x.next()).done;)fe(w.value)&&et(w.value,c)}}}function mn(e){{var c=e.type;if(c==null||typeof c=="string")return;var l;if(typeof c=="function")l=c.propTypes;else if(typeof c=="object"&&(c.$$typeof===f||c.$$typeof===p))l=c.propTypes;else return;if(l){var h=A(c);nn(l,e.props,"prop",h,e)}else if(c.PropTypes!==void 0&&!de){de=!0;var b=A(c);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof c.getDefaultProps=="function"&&!c.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gn(e){{for(var c=Object.keys(e.props),l=0;l<c.length;l++){var h=c[l];if(h!=="children"&&h!=="key"){N(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),N(null);break}}e.ref!==null&&(N(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}function nt(e,c,l,h,b,x){{var w=Kt(e);if(!w){var g="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P=hn(b);P?g+=P:g+=qe();var T;e===null?T="null":ae(e)?T="array":e!==void 0&&e.$$typeof===t?(T="<"+(A(e.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):T=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",T,g)}var O=pn(e,c,l,b,x);if(O==null)return O;if(w){var D=c.children;if(D!==void 0)if(h)if(ae(D)){for(var W=0;W<D.length;W++)tt(D[W],e);Object.freeze&&Object.freeze(D)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else tt(D,e)}return e===r?gn(O):mn(O),O}}function wn(e,c,l){return nt(e,c,l,!0)}function bn(e,c,l){return nt(e,c,l,!1)}var yn=bn,En=wn;Y.Fragment=r,Y.jsx=yn,Y.jsxs=En}()),Y}process.env.NODE_ENV==="production"?q.exports=ot():q.exports=st();var _=q.exports;const he={spice_wrapper:"_spice_wrapper_1b9je_1",spice_wrapper_hidden:"_spice_wrapper_hidden_1b9je_10"},ve=s.createContext(!0),me=s.createContext(n=>!n),it=({children:n})=>{const[t,o]=s.useState(!0);return _.jsx(ve.Provider,{value:t,children:_.jsx(me.Provider,{value:o,children:n})})},ct=({children:n})=>{const t=s.useContext(ve);return _.jsx("div",{className:`${he.spice_wrapper} ${t?he.spice_wrapper_hidden:""}`,children:n})},at=({children:n})=>_.jsx(it,{children:_.jsx(ct,{children:n})}),ge=()=>s.useContext(me),$={spice_aside_aside:"_spice_aside_aside_4cj7n_1",spice_aside_main:"_spice_aside_main_4cj7n_5"},ut=({className:n,children:t,aside:o,isSticky:r=!1})=>{const i=ge();return s.useEffect(()=>(r&&i(()=>!1),()=>{i(()=>!0)}),[r,i]),_.jsxs("div",{className:n||"",children:[o.index===1&&_.jsx("div",{className:$.spice_aside_main,children:t}),_.jsx("aside",{className:`${$.spice_aside_aside} ${o.className?o.className:""}`,children:o.chidren}),o.index===0&&_.jsx("div",{className:$.spice_aside_main,children:t})]})},ee={spice_form_input:"_spice_form_input_yxowj_1",spice_form_select:"_spice_form_select_yxowj_2",spice_form_radioCheckInput:"_spice_form_radioCheckInput_yxowj_8"},we=({formProps:n,className:t})=>_.jsx("input",{...n,className:`${ee.spice_form_input} ${t||""}`}),lt=({formProps:n})=>{const{isSelect:t,...o}=n;if(!t)return;const r=()=>{const a=t.defaultValue;return a?_.jsx("option",{hidden:!0,children:a}):null},i=()=>{const a=t.defaultSelectedIndex;if(a)return t.options[a]};return _.jsxs("select",{...o,className:ee.spice_form_select,defaultValue:i(),children:[_.jsx(r,{}),t.options.map(a=>_.jsx("option",{value:a,children:a},a))]})},be=({layoutType:n,formPropsArr:t,label:o,FormItem:r,errors:i})=>{const a=s.useCallback(d=>!i||!i[d]?null:i[d],[i]);if(n==="block")return _.jsxs(_.Fragment,{children:[o&&_.jsx("label",{htmlFor:t[0].id,children:o}),_.jsx(r,{formProps:t[0]}),a(0)]});if(n==="flex")return _.jsxs(_.Fragment,{children:[o&&_.jsx("label",{htmlFor:t[0].id,children:o}),_.jsxs("ul",{children:[_.jsxs("li",{children:[_.jsx(r,{formProps:t[0]}),a(0)]}),_.jsxs("li",{children:[_.jsx(r,{formProps:t[1]}),a(1)]})]})]});if(n==="radio-check"){const d=t.map(u=>_.jsxs("li",{children:[_.jsx(r,{formProps:u,className:ee.spice_form_radioCheckInput}),_.jsx("label",{htmlFor:u.id,children:u.value})]},u.id));return _.jsxs(_.Fragment,{children:[o&&_.jsx("label",{children:o}),_.jsx("ul",{children:d}),a(0)]})}},dt=({formProps:n})=>{const{isTextarea:t,...o}=n;if(t)return _.jsx("textarea",{...o,...t})},ft=({className:n,label:t,formProps:o,errors:r})=>{const i=o,a=i[0].type,d=i.length,u=!!i[0].isSelect,f=!!i[0].isTextarea;if(!(a==="radio"||a==="checkbox")&&d>2)throw new Error("The length of formProps is up to 2.");if(r&&r.length>2)throw new Error("The length of error is up to 2.");const v=s.useCallback(p=>be({layoutType:d===1?"block":"flex",formPropsArr:i,label:t,FormItem:p,errors:r}),[r,i,t,d]),m=s.useCallback(()=>u?v(lt):f?v(dt):a==="radio"||a==="checkbox"?be({layoutType:"radio-check",formPropsArr:i,label:t,FormItem:we,errors:r}):v(we),[r,i,t,u,f,v,a]);return _.jsx("fieldset",{className:`${n}`,children:_.jsx(m,{})})},G=n=>new Promise(t=>{n instanceof Promise?n.then(()=>{t(null)}):t(null)}),z={spice_dropdown_wrapper:"_spice_dropdown_wrapper_1nq94_1",spice_dropdown_content:"_spice_dropdown_content_1nq94_5",spice_dropdown_content_hidden:"_spice_dropdown_content_hidden_1nq94_10",spice_dropdown_content_pointerPrevent:"_spice_dropdown_content_pointerPrevent_1nq94_15","spice_dropdown_top-center":"_spice_dropdown_top-center_1nq94_22","spice_dropdown_top-left":"_spice_dropdown_top-left_1nq94_28","spice_dropdown_top-right":"_spice_dropdown_top-right_1nq94_33","spice_dropdown_bottom-center":"_spice_dropdown_bottom-center_1nq94_41","spice_dropdown_bottom-left":"_spice_dropdown_bottom-left_1nq94_47","spice_dropdown_bottom-right":"_spice_dropdown_bottom-right_1nq94_52","spice_dropdown_left-top":"_spice_dropdown_left-top_1nq94_60","spice_dropdown_left-center":"_spice_dropdown_left-center_1nq94_65","spice_dropdown_left-bottom":"_spice_dropdown_left-bottom_1nq94_71","spice_dropdown_right-top":"_spice_dropdown_right-top_1nq94_79","spice_dropdown_right-center":"_spice_dropdown_right-center_1nq94_84","spice_dropdown_right-bottom":"_spice_dropdown_right-bottom_1nq94_90"},_t=({position:n,parent:t,content:o,callback:r,className:i})=>{const a=s.useRef(null),d=s.useRef(!1),[u,f]=s.useState(!1),[v,m]=s.useState(!0),p=s.useCallback(()=>{d.current=!0,m(!1),f(!0),r!=null&&r.onEnter&&r.onEnter(a.current)},[r]),y=s.useCallback(async()=>{d.current=!1,m(!0),r!=null&&r.onLeave&&await G(r.onLeave(a.current)),d.current||f(!1)},[r]);return _.jsxs("div",{onMouseEnter:p,onMouseLeave:y,onClick:y,className:`${z.spice_dropdown_wrapper} ${i||""}`,children:[t.children,_.jsx("div",{ref:a,className:`${z.spice_dropdown_content} ${u?"":z.spice_dropdown_content_hidden} ${v?z.spice_dropdown_content_pointerPrevent:""} ${z["spice_dropdown_"+n]}`,children:o.children})]})},ye=(n=60,t=[])=>{n>60&&(n=60);const o=Math.floor(1e3/n),r=s.useRef(performance.now()),i=s.useCallback(u=>{const f=u-r.current,v=f<=o;return v||(r.current=u-f%o),v},[o]),a=s.useRef({callback:null,isPlay:!1,id:0}).current,d=s.useCallback(u=>{a.id=requestAnimationFrame(d),!i(u)&&a.callback&&a.isPlay&&a.callback(u)},[i,a]);return s.useEffect(()=>(a.id=requestAnimationFrame(d),()=>{cancelAnimationFrame(a.id)}),t),(u,f)=>{if(u==="play"){if(!f){console.warn("Callback function is required when 'play'");return}a.callback=f,a.isPlay=!0}else u==="pause"&&(a.isPlay=!1)}},pt={spice_magnet_stopPropagation:"_spice_magnet_stopPropagation_99wvn_1"},ht=({className:n,children:t,callback:o,fps:r=60,stopPropagation:i=!1,isOnClickReset:a=!1,dependencies:d=[]})=>{const u=s.useRef(null),f=s.useRef(null),v=s.useRef();r>60&&(r=60);const m=ye(r,d),p=s.useMemo(()=>({target:u.current,children:f.current,x:0,y:0}),[]),y=s.useCallback(j=>{p.target=u.current,p.children=f.current},[p]),C=s.useCallback(j=>{v.current=j.currentTarget.getBoundingClientRect(),p.x=j.clientX-v.current.left-v.current.width/2,p.y=j.clientY-v.current.top-v.current.height/2},[p]),R=s.useCallback(j=>{j.stopPropagation(),y(j),C(j),m("play",()=>{o.onMove(p)})},[y,C,m,o,p]),F=s.useCallback(j=>{j.stopPropagation(),C(j)},[C]),I=s.useCallback(j=>{j.stopPropagation(),m("pause"),o.onLeave&&o.onLeave(p)},[m,o,p]),k=s.useCallback(j=>{I(j)},[I]),S=s.useCallback(j=>{a&&I(j)},[I,a]);return _.jsx("div",{onMouseEnter:R,onMouseMove:F,onMouseLeave:k,onClick:S,className:n||"",ref:u,children:_.jsx("div",{ref:f,className:i?pt.spice_magnet_stopPropagation:"",children:t})})},te={spice_thumbnail_wrapper:"_spice_thumbnail_wrapper_1qqot_1",spice_thumbnail_view:"_spice_thumbnail_view_1qqot_5",spice_thumbnail_golden:"_spice_thumbnail_golden_1qqot_26",spice_thumbnail_silver:"_spice_thumbnail_silver_1qqot_30",spice_thumbnail_platinum:"_spice_thumbnail_platinum_1qqot_34","spice_thumbnail_16-9":"_spice_thumbnail_16-9_1qqot_38",spice_thumbnail_square:"_spice_thumbnail_square_1qqot_42","spice_thumbnail_3-2":"_spice_thumbnail_3-2_1qqot_46","spice_thumbnail_4-3":"_spice_thumbnail_4-3_1qqot_50"},vt=({ratio:n,children:t,className:o})=>{const r=["golden","silver","platinum","16-9","square","3-2","4-3"];let i=r.includes(n),a=typeof n=="number"&&n>0;if(!i&&!a)throw new Error(`Invalid ratio value. The 'ratio' argument should be either ${r.join(" | ")} or a number greater than 0.`);return _.jsx("div",{className:`${te.spice_thumbnail_wrapper} ${o||""}`,children:_.jsx("div",{className:`${te.spice_thumbnail_view} ${i?te["spice_thumbnail_"+n]:""}`,style:a?{paddingTop:`${n}%`}:{},children:t})})},Ee=n=>{const t=document.documentElement.style,o=document.body.style;n==="add"?(t.scrollbarGutter="stable",t.overflow="hidden",o.overflow="hidden"):(t.scrollbarGutter="",t.overflow="",o.overflow="")},mt={spice_modal_dialog:"_spice_modal_dialog_1t31c_1"},gt=".spice__modal_close",wt=({children:n,className:t,dialog:o,callback:r})=>{const i=s.useRef(null),a=s.useCallback(()=>{Ee("add"),i.current.showModal(),r!=null&&r.onOpen&&r.onOpen(i.current)},[r]),d=s.useCallback(async()=>{r!=null&&r.onClose&&await G(r.onClose(i.current)),Ee("remove"),i.current.close()},[r]);return s.useEffect(()=>{const u=i.current.querySelectorAll(gt);if(u)return u.forEach(f=>f.addEventListener("click",d)),()=>{u.forEach(f=>f.removeEventListener("click",d))}},[d]),s.useEffect(()=>{const u=f=>{var m;((m=i.current)==null?void 0:m.hasAttribute("open"))&&f.key==="Escape"&&d()};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[d]),_.jsxs(_.Fragment,{children:[_.jsx("button",{className:t||"",onClick:()=>{a()},children:n}),_.jsx("dialog",{ref:i,onClick:u=>{u.target===i.current&&d()},className:`${mt.spice_modal_dialog} ${o.className?o.className:""}`,children:o.children})]})},bt=({children:n,className:t})=>{const o=ge();return s.useEffect(()=>(o(()=>!1),()=>{o(()=>!0)}),[o]),_.jsx("div",{className:t||"",children:n})},yt={isLeaving:!1,isAnimation:!0,prev:"",current:"",next:""},xe=s.createContext(yt),Ce=s.createContext(()=>{}),Et=({children:n,defaultValue:t})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const[o,r]=s.useState({isLeaving:!1,isAnimation:!0,prev:"",current:t,next:""});return _.jsx(xe.Provider,{value:o,children:_.jsx(Ce.Provider,{value:r,children:n})})},Re=()=>s.useContext(xe),ne=()=>s.useContext(Ce),xt=({children:n,value:t,className:o})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const r=ne(),i=Re(),a=s.useCallback(()=>{i.current===t||i.isLeaving||r(d=>({...d,isLeaving:!0,isAnimation:!0,prev:d.current,next:t}))},[r,i,t]);return _.jsx("button",{onClick:a,className:o||"",role:"tab","aria-controls":`tab-${t}`,"aria-selected":i.current===t,children:n})},Ct={spice_tab_hidden:"_spice_tab_hidden_1r0oa_1"},Se=({content:n,isOpen:t})=>{const o=n.querySelectorAll("a,button");if(!o)return;const r=t?"0":"-1";o.forEach(i=>{i.setAttribute("tabindex",r)})},Rt=Object.freeze(Object.defineProperty({__proto__:null,Button:xt,Content:({children:n,value:t,className:o,callback:r})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const i=s.useRef(!0),a=s.useRef(null),d=ne(),u=Re(),f=u.current===t&&!u.isLeaving;return s.useEffect(()=>{if(i.current){i.current=!1;return}if(!u.isAnimation){f&&r!=null&&r.onReset&&r.onReset(a.current);return}u.prev===t&&(async()=>(r!=null&&r.onClose&&await G(r.onClose(a.current)),d(v=>({...v,isLeaving:!1,prev:"",current:v.next,next:""}))))(),f&&r!=null&&r.onOpen&&r.onOpen(a.current)},[u,d,r,t,f]),s.useEffect(()=>{Se({content:a.current,isOpen:u.current===t})},[u,t]),_.jsx("div",{ref:a,className:`${u.current!==t?Ct.spice_tab_hidden:""} ${o||""}`,role:"tabpanel",id:`tab-${t}`,"aria-hidden":u.current!==t,children:n})},Context:Et,useTabSwitch:()=>{const n=ne();return(t,o)=>{n(r=>({isAnimation:o,isLeaving:o,prev:o?r.current:"",current:o?r.current:t,next:o?t:""}))}}},Symbol.toStringTag,{value:"Module"})),St={target:"",toggle:!1,defaultValue:[]},je=s.createContext(St),Te=s.createContext(()=>{}),jt=({children:n,defaultValue:t})=>{const[o,r]=s.useState({target:"",toggle:!1,defaultValue:t});return _.jsx(je.Provider,{value:o,children:_.jsx(Te.Provider,{value:r,children:n})})},Oe=()=>s.useContext(je),Tt=()=>s.useContext(Te),Ot=({children:n,value:t,className:o})=>{if(t==="")throw new Error("Please set the value to something other than an empty string.");const r=Oe(),i=Tt(),a=s.useMemo(()=>!!r.defaultValue.find(f=>f===t),[r,t]),[d,u]=s.useState(a);return _.jsx("button",{className:o||"",onClick:()=>{i(f=>({...f,toggle:d,target:t})),u(!d)},"aria-controls":`content-${t}`,id:`button-${t}`,"aria-expanded":d,children:n})},Pe=({targetRef:n,callback:t,debounce:o=100,dependencies:r=[]})=>{const i=s.useRef(0),a=s.useRef(!0);s.useEffect(()=>{const d=new ResizeObserver(f=>{clearTimeout(i.current),i.current=setTimeout(()=>{if(a.current){a.current=!1;return}t(f[0].target)},o)}),u=n.current;if(u)return d.observe(u),()=>{d.unobserve(u),clearTimeout(i.current)}},r)},Ie={spice_accordion_content:"_spice_accordion_content_1wkzs_1",spice_accordion_hidden:"_spice_accordion_hidden_1wkzs_5"},Pt=Object.freeze(Object.defineProperty({__proto__:null,Button:Ot,Content:({value:n,callback:t,children:o,className:r})=>{if(n==="")throw new Error("Please set the value to something other than an empty string.");const i=Oe(),a=s.useMemo(()=>!!i.defaultValue.find(p=>p===n),[i,n]),[d,u]=s.useState(a);s.useEffect(()=>{i.target===n&&u(!d)},[i.target,i.toggle]);const f=s.useRef(!0),v=s.useRef(null),m=s.useRef(null);return s.useEffect(()=>{if(f.current){f.current=!1;return}const p={height:m.current.getBoundingClientRect().height,target:v.current};d?t.onOpen(p):t.onClose(p)},[d,t]),s.useEffect(()=>{Se({content:v.current,isOpen:d})},[d]),Pe({targetRef:m,callback:p=>{const y=p.getBoundingClientRect().height;d&&(v.current.style.height=`${y}px`)},dependencies:[d],debounce:100}),_.jsx("div",{ref:v,className:`${Ie.spice_accordion_content} ${a?"":Ie.spice_accordion_hidden}`,id:`content-${n}`,"aria-labelledby":`button-${n}`,"aria-hidden":!d,children:_.jsx("div",{ref:m,className:r||"",children:o})})},Context:jt},Symbol.toStringTag,{value:"Module"})),It=({tempo:n=3,onesRef:t,tensRef:o,hundredsRef:r,onProgress:i,onStart:a,onComplete:d})=>{const u=s.useMemo(()=>({to:0,1:-1,10:-1,100:0}),[]),f=s.useRef(null),v=s.useCallback(({digitContainer:p,numbersTarget:y,digit:C,digitNumber:R,currentPercent:F,limit:I,destination:k})=>{if(u[C]!==R&&F<=I){const S=R.toString(),j=(Math.min(8,R)+1).toString(),oe=F>=I;y[0].innerText=S,y[1].innerText=oe?"0":j,i&&i({digitContainer:p,percent:F,digit:C,destination:k,duration:n/(k/C)}),u[C]=R}},[u,i,n]),m=s.useCallback(p=>(p>100&&(p=100),new Promise(y=>{const C={ones:t.current.querySelectorAll("div"),tens:o.current.querySelectorAll("div"),hundreds:r.current.querySelectorAll("div"),getAll:function(){return[this.ones,this.tens,this.hundreds]}};clearInterval(f.current),f.current=setInterval(async()=>{const R=u.to+=1,F=async()=>{clearInterval(f.current),R>100&&d&&await G(d(C.getAll())),y(R-1)};R===1&&a&&a(C.getAll()),R>p&&await F();const I=Math.floor(R/100)%100,k=Math.floor(R/10)%10,S=R%10;v({digitContainer:t.current,digit:1,digitNumber:S,currentPercent:R,numbersTarget:C.ones,limit:90,destination:p}),v({digitContainer:o.current,digit:10,digitNumber:k,currentPercent:R,numbersTarget:C.tens,limit:90,destination:p}),u[100]!==I&&(C.hundreds[1].innerText=I.toString(),i&&i({digitContainer:r.current,percent:R,digit:100,destination:p,duration:n/(p/10)}),u[100]=I)},Math.max(1e3/60,n/p*1e3))})),[u,v,o,r,t,d,i,a,n]);return s.useEffect(()=>()=>{clearInterval(f.current)},[]),m},kt={spice_loadingProgress_digit:"_spice_loadingProgress_digit_avxoy_1"},ke=s.memo(s.forwardRef(({className:n},t)=>_.jsxs("div",{className:kt.spice_loadingProgress_digit,ref:t,children:[_.jsx("div",{className:n||"",children:"0"}),_.jsx("div",{className:n||"",children:"0"})]})));ke.displayName="Digit";const Dt=Object.freeze(Object.defineProperty({__proto__:null,Digit:ke,useLoadingProgress:It},Symbol.toStringTag,{value:"Module"})),Ft=typeof document<"u"?s.useLayoutEffect:s.useEffect,At=({targetRef:n,rootMargin:t="0px",threshold:o=0,once:r=!1,callback:i,dependencies:a=[]})=>{const d={rootMargin:t,threshold:o};s.useEffect(()=>{const u=n==null?void 0:n.current;if(!u)return;const f=(m,p)=>{m.forEach(y=>{y.isIntersecting&&i.onEnter?(i.onEnter(y),r&&p.unobserve(y.target)):!y.isIntersecting&&i.onLeave&&i.onLeave(y)})},v=new IntersectionObserver(f,d);return v.observe(u),()=>{v.unobserve(u)}},a)},U=({callback:n,debounce:t=100,dependencies:o=[]})=>{const r=s.useRef(0),i=s.useRef(0),a=s.useCallback(()=>{clearTimeout(i.current),i.current=setTimeout(()=>{n({winW:window.innerWidth,winH:window.innerHeight,initWinW:r.current})},t)},[n,t]);s.useEffect(()=>(r.current=window.innerWidth,window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a),clearTimeout(i.current)}),o)},Lt=({initWinW:n,winW:t,threshold:o})=>{let r=!(n<=o);t<=o?r&&window.location.reload():!r&&window.location.reload()},Mt=`
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`,Nt=()=>{console.log(Mt)},Wt=n=>{const t=document.querySelector('meta[name="viewport"]');if(!t)return;const o=n>360?"width=device-width,initial-scale=1":"width=360";t.getAttribute("content")!==o&&t.setAttribute("content",o)},Vt=({reloadThresholds:n,isFixViewportForSmall:t=!0,areYouFun:o=!1})=>{const r=s.useCallback(i=>{t&&Wt(i)},[t]);U({callback:({initWinW:i,winW:a})=>{n&&n.forEach(d=>Lt({initWinW:i,winW:a,threshold:d})),r(a)},debounce:100,dependencies:[]}),s.useEffect(()=>{document.body.dataset.spiceRendered="true",r(window.innerWidth),o&&process.env.NODE_ENV!=="development"&&Nt()},[o,r])},De=()=>{const[n,t]=s.useState(null),o=s.useCallback(()=>{const r=window.ontouchstart,i=navigator.maxTouchPoints;r!==void 0&&0<i?t(!0):t(!1)},[]);return U({callback:()=>o(),debounce:100,dependencies:[]}),s.useEffect(()=>o(),[o]),n},re="scroll",Yt=({threshold:n=0,debounce:t=10,dependencies:o=[]})=>{const r=s.useRef(null),[i,a]=s.useReducer((m,p)=>{switch(p.type){case re:return r.current=p.payload,p.payload;default:return m}},r.current),d=s.useRef(0),u=s.useRef(0),f=()=>window.scrollY||document.documentElement.scrollTop,v=s.useCallback(()=>{clearTimeout(u.current),u.current=setTimeout(()=>{const m=f();m>d.current+n&&r.current!=="down"?a({type:re,payload:"down"}):m<d.current-n&&r.current!=="up"&&a({type:re,payload:"up"}),d.current=m},t)},[t,n]);return s.useEffect(()=>(d.current=f(),window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),clearTimeout(u.current)}),o),i},zt=({type:n,width:t})=>{const[o,r]=s.useState(null),i=s.useCallback(a=>{switch(n){case"max":r(t>=a);break;case"min":r(t<=a);break}},[n,t]);return U({callback:({winW:a})=>i(a),debounce:100,dependencies:[]}),s.useEffect(()=>i(window.innerWidth),[i]),o},Ut=({shareUrl:n,sharePath:t,shareTitle:o="",width:r=600,height:i=800})=>{const a=s.useMemo(()=>encodeURIComponent(n),[n]),d=s.useMemo(()=>`height=${i},width=${r}`,[i,r]),u=s.useMemo(()=>({onClick:()=>{window.open(`https://www.facebook.com/sharer.php?u=${a}&t=${o}`,"newwindow",d)}}),[a,o,d]),f=s.useMemo(()=>({onClick:()=>{window.open(`https:////twitter.com/share?url=${a}&text=${o}`,"newwindow",d)}}),[a,d,o]),v=s.useMemo(()=>({onClick:()=>{window.open(`https://social-plugins.line.me/lineit/share?url=${a}&text=${o}`,"newwindow",d)}}),[a,d,o]),m=s.useMemo(()=>({onClick:async()=>{if(!navigator.share){alert("このブラウザは共有機能に対応していません。");return}try{await window.navigator.share({title:o,url:t||a})}catch{return}}}),[o,a,t]),[p,y]=s.useState(!1),C=s.useMemo(()=>({onClick:()=>{navigator.clipboard.writeText(n).then(()=>{y(!0)})}}),[n]);return{Facebook:u,X:f,LINE:v,share:m,copy:C,isCopied:p}},Bt=n=>{const t=De();s.useEffect(()=>{!t||!n.current||(n.current.style.height=`${window.screen.height}px`)},[t,n]),U({callback:({winH:o})=>{n.current&&(t?n.current.style.height=`${window.screen.height}px`:n.current.style.height=`${o}px`)},dependencies:[t]})};E.Accordion=Pt,E.AsideLayout=ut,E.Dropdown=_t,E.FormField=ft,E.LoadingProgress=Dt,E.Magnet=ht,E.Modal=wt,E.StickyItem=bt,E.Tab=Rt,E.Thumbnail=vt,E.WrapperLayout=at,E.use100vh=Bt,E.useAnimationFrame=ye,E.useIntersectionObserver=At,E.useIsTouchDevice=De,E.useIsomorphicLayoutEffect=Ft,E.useMediaQuery=zt,E.useResizeObserver=Pe,E.useScrollDirection=Yt,E.useShare=Ut,E.useStarter=Vt,E.useWindowResizeObserver=U,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=spice.umd.cjs.map
