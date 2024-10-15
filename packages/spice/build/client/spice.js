"use client";
import Ue, { createContext as z, useContext as V, useState as A, forwardRef as X, useRef as R, useCallback as $, useEffect as C, useMemo as F, memo as Dt, useLayoutEffect as At, useReducer as Ft } from "react";
import de from "gsap";
var ve = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function $t() {
  if (Be)
    return H;
  Be = 1;
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, d, g) {
    var f, h = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      i.call(d, f) && !u.hasOwnProperty(f) && (h[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        h[f] === void 0 && (h[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: y, props: h, _owner: s.current };
  }
  return H.Fragment = n, H.jsx = l, H.jsxs = l, H;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Lt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = x && e[x] || e[O];
      return typeof o == "function" ? o : null;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), p = 1; p < o; p++)
          c[p - 1] = arguments[p];
        te("error", e, c);
      }
    }
    function te(e, o, c) {
      {
        var p = D.ReactDebugCurrentFrame, E = p.getStackAddendum();
        E !== "" && (o += "%s", c = c.concat([E]));
        var S = c.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, rt = !1, nt = !1, it = !1, ot = !1, me;
    me = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || ot || e === s || e === g || e === f || it || e === y || re || rt || nt || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function at(e, o, c) {
      var p = e.displayName;
      if (p)
        return p;
      var E = o.displayName || o.name || "";
      return E !== "" ? c + "(" + E + ")" : c;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var o = e;
            return be(o) + ".Consumer";
          case l:
            var c = e;
            return be(c._context) + ".Provider";
          case d:
            return at(e, e.render, "ForwardRef");
          case h:
            var p = e.displayName || null;
            return p !== null ? p : L(e.type) || "Memo";
          case m: {
            var E = e, S = E._payload, w = E._init;
            try {
              return L(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, ye, xe, we, Ee, Se, je, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ct() {
      {
        if (U === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, je = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        U++;
      }
    }
    function ut() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: ye
            }),
            info: N({}, e, {
              value: xe
            }),
            warn: N({}, e, {
              value: we
            }),
            error: N({}, e, {
              value: Ee
            }),
            group: N({}, e, {
              value: Se
            }),
            groupCollapsed: N({}, e, {
              value: je
            }),
            groupEnd: N({}, e, {
              value: _e
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = D.ReactCurrentDispatcher, ie;
    function J(e, o, c) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (E) {
            var p = E.stack.trim().match(/\n( *(at )?)/);
            ie = p && p[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var oe = !1, K;
    {
      var lt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new lt();
    }
    function Te(e, o) {
      if (!e || oe)
        return "";
      {
        var c = K.get(e);
        if (c !== void 0)
          return c;
      }
      var p;
      oe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, ct();
      try {
        if (o) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (W) {
              p = W;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (W) {
              p = W;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            p = W;
          }
          e();
        }
      } catch (W) {
        if (W && p && typeof W.stack == "string") {
          for (var b = W.stack.split(`
`), P = p.stack.split(`
`), j = b.length - 1, _ = P.length - 1; j >= 1 && _ >= 0 && b[j] !== P[_]; )
            _--;
          for (; j >= 1 && _ >= 0; j--, _--)
            if (b[j] !== P[_]) {
              if (j !== 1 || _ !== 1)
                do
                  if (j--, _--, _ < 0 || b[j] !== P[_]) {
                    var k = `
` + b[j].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, k), k;
                  }
                while (j >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = S, ut(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function ft(e, o, c) {
      return Te(e, !1);
    }
    function dt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function Z(e, o, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, dt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case g:
          return J("Suspense");
        case f:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ft(e.render);
          case h:
            return Z(e.type, o, c);
          case m: {
            var p = e, E = p._payload, S = p._init;
            try {
              return Z(S(E), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = D.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var o = e._owner, c = Z(e.type, e._source, o ? o.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    function vt(e, o, c, p, E) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var P = Error((p || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = e[w](o, w, p, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ee(E), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", c, w, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(E), T("Failed %s type: %s", c, b.message), ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function pt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function gt(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function ke(e) {
      if (gt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Pe(e);
    }
    var q = D.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
    function bt(e) {
      if (Q.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (Q.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, o) {
      if (typeof e.ref == "string" && q.current && o && q.current.stateNode !== o) {
        var c = L(q.current.type);
        ae[c] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(q.current.type), e.ref), ae[c] = !0);
      }
    }
    function wt(e, o) {
      {
        var c = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Et(e, o) {
      {
        var c = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var St = function(e, o, c, p, E, S, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: c,
        props: w,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function jt(e, o, c, p, E) {
      {
        var S, w = {}, b = null, P = null;
        c !== void 0 && (ke(c), b = "" + c), yt(o) && (ke(o.key), b = "" + o.key), bt(o) && (P = o.ref, xt(o, E));
        for (S in o)
          Q.call(o, S) && !mt.hasOwnProperty(S) && (w[S] = o[S]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (S in j)
            w[S] === void 0 && (w[S] = j[S]);
        }
        if (b || P) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && wt(w, _), P && Et(w, _);
        }
        return St(e, b, P, E, p, q.current, w);
      }
    }
    var ce = D.ReactCurrentOwner, Ae = D.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var o = e._owner, c = Z(e.type, e._source, o ? o.type : null);
        Ae.setExtraStackFrame(c);
      } else
        Ae.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ce.current) {
          var e = L(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _t(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Rt(e) {
      {
        var o = Fe();
        if (!o) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function Le(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Rt(o);
        if ($e[c])
          return;
        $e[c] = !0;
        var p = "";
        e && e._owner && e._owner !== ce.current && (p = " It was passed a child from " + L(e._owner.type) + "."), B(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, p), B(null);
      }
    }
    function We(e, o) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
            le(p) && Le(p, o);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = I(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), w; !(w = S.next()).done; )
              le(w.value) && Le(w.value, o);
        }
      }
    }
    function Tt(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === h))
          c = o.propTypes;
        else
          return;
        if (c) {
          var p = L(o);
          vt(c, e.props, "prop", p, e);
        } else if (o.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = L(o);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var p = o[c];
          if (p !== "children" && p !== "key") {
            B(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, o, c, p, E, S) {
      {
        var w = st(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = _t(E);
          P ? b += P : b += Fe();
          var j;
          e === null ? j = "null" : se(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var _ = jt(e, o, c, E, S);
        if (_ == null)
          return _;
        if (w) {
          var k = o.children;
          if (k !== void 0)
            if (p)
              if (se(k)) {
                for (var Y = 0; Y < k.length; Y++)
                  We(k[Y], e);
                Object.freeze && Object.freeze(k);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(k, e);
        }
        return e === i ? Ct(_) : Tt(_), _;
      }
    }
    function Ot(e, o, c) {
      return Me(e, o, c, !0);
    }
    function Pt(e, o, c) {
      return Me(e, o, c, !1);
    }
    var kt = Pt, It = Ot;
    G.Fragment = i, G.jsx = kt, G.jsxs = It;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = $t() : ve.exports = Lt();
var a = ve.exports;
const qe = z(!0), He = z((r) => !r), Wt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ a.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ a.jsx(He.Provider, { value: n, children: r }) });
}, Mt = ({ children: r }) => {
  const t = V(qe);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      style: {
        flexDirection: "column",
        display: "flex",
        minHeight: "100vh",
        ...t && {
          overflow: "hidden"
        }
      },
      children: r
    }
  );
}, xr = ({ children: r }) => /* @__PURE__ */ a.jsx(Wt, { children: /* @__PURE__ */ a.jsx(Mt, { children: r }) }), Nt = () => V(He), Bt = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ a.jsx(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, Yt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const s = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ a.jsx("option", { hidden: !0, children: l }) : null;
  }, u = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ a.jsxs(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: u(),
      children: [
        /* @__PURE__ */ a.jsx(s, {}),
        t.options.map((l) => /* @__PURE__ */ a.jsx("option", { value: l, children: l }, l))
      ]
    }
  );
}, zt = {
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  border: "0",
  padding: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  zIndex: "-99999"
}, Vt = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: i,
  errors: s
}) => {
  const u = ({ index: l }) => s ? Array.isArray(s) ? s[l] : s : null;
  if (r === "block")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
      /* @__PURE__ */ a.jsx(u, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsxs("ul", { children: [
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
          /* @__PURE__ */ a.jsx(u, { index: 0 })
        ] }),
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[1] }),
          /* @__PURE__ */ a.jsx(u, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map(
      ({ id: v, value: d, style: g, optionLabel: f, ...h }) => /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx(
          i,
          {
            formProps: {
              id: v,
              value: d,
              style: {
                ...zt,
                ...g || {}
              },
              ...h
            }
          }
        ),
        /* @__PURE__ */ a.jsx("label", { htmlFor: v, children: f || d })
      ] }, v)
    );
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { children: n }),
      /* @__PURE__ */ a.jsx("ul", { children: l }),
      /* @__PURE__ */ a.jsx(u, { index: 0 })
    ] });
  }
}, Ut = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ a.jsx("textarea", { ...n, ...t });
}, wr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const s = Array.isArray(t) ? t : [t], { type: u, isSelect: l, isTextarea: v } = s[0], d = s.length;
  if (!(u === "radio" || u === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  const g = ["radio", "checkbox"].includes(u || "") ? "radio-check" : d === 1 ? "block" : "flex";
  return /* @__PURE__ */ a.jsx("fieldset", { ...i, children: /* @__PURE__ */ a.jsx(
    Vt,
    {
      layoutType: g,
      formPropsArr: s,
      label: r,
      errors: n,
      FormItem: l ? Yt : v ? Ut : Bt
    }
  ) });
}, he = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), ze = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, qt = ".spice__modal_close", Ht = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, focusTarget: s, ...u }, l) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = R(null), h = $(() => {
      var y;
      ze("add"), f.current.showModal(), (y = s == null ? void 0 : s.current) == null || y.focus(), n && n(f.current);
    }, [n, s]), m = $(async () => {
      i && await he(i(f.current)), ze("remove"), f.current.close();
    }, [i]);
    return C(() => {
      const y = f.current.querySelectorAll(qt);
      if (y)
        return y.forEach(
          (x) => x.addEventListener("click", m)
        ), () => {
          y.forEach(
            (x) => x.removeEventListener("click", m)
          );
        };
    }, [m]), C(() => {
      const y = (x) => {
        var I;
        ((I = f.current) == null ? void 0 : I.hasAttribute("open")) && x.key === "Escape" && m();
      };
      return window.addEventListener("keydown", y), () => {
        window.removeEventListener("keydown", y);
      };
    }, [m]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          ref: l,
          onClick: () => {
            h();
          },
          ...u,
          children: r
        }
      ),
      /* @__PURE__ */ a.jsx(
        "dialog",
        {
          ref: f,
          onClick: (y) => {
            y.target === f.current && m();
          },
          style: {
            border: "none",
            background: "none",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            padding: "0",
            pointerEvents: "auto",
            ...d || {}
          },
          ...g,
          children: v
        }
      )
    ] });
  }
);
Ht.displayName = "ModalButton";
const Gt = X(
  ({ children: r, ...t }, n) => {
    const i = Nt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ a.jsx("div", { ref: n, ...t, children: r });
  }
);
Gt.displayName = "StickyItem";
const Xt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = z(Xt), Xe = z(
  () => {
  }
), Jt = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, i] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ a.jsx(Ge.Provider, { value: n, children: /* @__PURE__ */ a.jsx(Xe.Provider, { value: i, children: r }) });
}, Je = () => V(Ge), pe = () => V(Xe), Kt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = pe(), s = Je(), u = $(() => {
    s.current === t || s.isLeaving || i((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [i, s, t]);
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: u,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      ...n,
      children: r
    }
  );
}, Ke = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((s) => {
    s.setAttribute("tabindex", i);
  });
}, Zt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: i,
  onReset: s,
  style: u,
  ...l
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = R(!0), d = R(null), g = pe(), f = Je(), h = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      h && s && s(d.current);
      return;
    }
    f.prev === t && (async () => (i && await he(i(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), h && n && n(d.current);
  }, [f, g, n, i, s, t, h]), C(() => {
    Ke({
      content: d.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: d,
      style: {
        ...f.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...u
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...l,
      children: r
    }
  );
}, Qt = () => {
  const r = pe();
  return (t, n) => {
    r((i) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? i.current : "",
      current: n ? i.current : t,
      next: n ? t : ""
    }));
  };
}, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Kt,
  Content: Zt,
  Context: Jt,
  useTabSwitch: Qt
}, Symbol.toStringTag, { value: "Module" })), er = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = z(er), Qe = z(() => {
}), tr = ({ children: r, defaultValue: t }) => {
  const [n, i] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ a.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ a.jsx(Qe.Provider, { value: i, children: r }) });
}, et = () => V(Ze), rr = () => V(Qe), nr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = et(), s = rr(), [u, l] = A(
    () => !!i.defaultValue.find((v) => v === t)
  );
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: () => {
        s((v) => ({
          ...v,
          toggle: u,
          target: t
        })), l(!u);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": u,
      ...n,
      children: r
    }
  );
}, ir = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const s = R(0), u = R(!0);
  C(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return l.observe(v), () => {
        l.unobserve(v), clearTimeout(s.current);
      };
  }, i);
}, or = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: i,
  ...s
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const u = et(), [l, v] = A(
    () => !!u.defaultValue.find((m) => m === r)
  ), d = R(l);
  C(() => {
    u.target === r && v(!l);
  }, [u.target, u.toggle]);
  const g = R(!0), f = R(null), h = R(null);
  return C(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const m = {
      height: h.current.getBoundingClientRect().height,
      target: f.current
    };
    l ? t(m) : n(m);
  }, [l, t, n]), C(() => {
    Ke({ content: f.current, isOpen: l });
  }, [l]), ir({
    targetRef: h,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      l && (f.current.style.height = `${y}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: d.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ a.jsx("div", { ref: h, ...s, children: i })
    }
  );
}, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: nr,
  Content: or,
  Context: tr
}, Symbol.toStringTag, { value: "Module" })), sr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: s,
  onStart: u,
  onComplete: l
}) => {
  const v = F(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = R(null), g = $(
    ({
      digitContainer: h,
      numbersTarget: m,
      digit: y,
      digitNumber: x,
      currentPercent: O,
      limit: I,
      destination: D
    }) => {
      if (v[y] !== x && O <= I) {
        const T = x.toString(), te = (Math.min(8, x) + 1).toString(), re = O >= I;
        m[0].innerText = T, m[1].innerText = re ? "0" : te, s && s({
          digitContainer: h,
          percent: O,
          digit: y,
          destination: D,
          duration: r / (D / y)
        }), v[y] = x;
      }
    },
    [v, s, r]
  ), f = $(
    (h) => (h > 100 && (h = 100), new Promise((m) => {
      if (h === 0)
        return;
      const y = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const x = v.to += 1, O = async () => {
          clearInterval(d.current), x > 100 && l && await he(l(y.getAll())), m(x - 1);
        };
        x === 1 && u && u(y.getAll()), x > h && await O();
        const I = Math.floor(x / 100) % 100, D = Math.floor(x / 10) % 10, T = x % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: x,
          numbersTarget: y.ones,
          limit: 90,
          destination: h
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: D,
          currentPercent: x,
          numbersTarget: y.tens,
          limit: 90,
          destination: h
        }), v[100] !== I && (y.hundreds[1].innerText = I.toString(), s && s({
          digitContainer: i.current,
          percent: x,
          digit: 100,
          destination: h,
          duration: r / (h / 10)
        }), v[100] = I);
      }, Math.max(1e3 / 60, r / h * 1e3));
    })),
    [
      v,
      g,
      n,
      i,
      t,
      l,
      s,
      u,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, tt = Dt(
  X((r, t) => /* @__PURE__ */ a.jsxs(
    "div",
    {
      style: {
        width: "1ch",
        lineHeight: 1,
        float: "left",
        textAlign: "center"
      },
      ref: t,
      children: [
        /* @__PURE__ */ a.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ a.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
tt.displayName = "Digit";
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: tt,
  useLoadingProgress: sr
}, Symbol.toStringTag, { value: "Module" })), ar = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: s,
  onLeave: u,
  dependencies: l = []
} = {}) => {
  const v = R(null), [d, g] = A(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? v.current;
    if (!f)
      return;
    const h = (y, x) => {
      y.forEach((O) => {
        g(O.isIntersecting), O.isIntersecting ? (s && s(O), i && x.unobserve(O.target)) : O.isIntersecting || u && u(O);
      });
    }, m = new IntersectionObserver(h, {
      rootMargin: t,
      threshold: n
    });
    return m.observe(f), () => {
      m.unobserve(f);
    };
  }, [
    v,
    s,
    u,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: v, isIntersecting: d };
}, cr = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, _r = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const s = R(null), u = R(null), l = R(null), { isIntersecting: v } = ar({
    targetRef: s,
    once: !1
  }), d = R(0);
  return cr(() => {
    if (!v)
      return;
    const g = s.current, f = u.current, h = l.current;
    if (!g || !f || !h)
      return;
    const m = de.ticker.deltaRatio() / 1e3, y = g.clientWidth / f.clientWidth;
    if (d.current += m * Math.abs(t) * y, d.current >= 1 && (d.current = 0), t < 0) {
      const x = d.current * -100;
      f.style.transform = `translateX(${x}%)`, h.style.transform = `translateX(${x}%)`;
    } else {
      const x = d.current * 100;
      f.style.transform = `translateX(${x}%)`, h.style.transform = `translateX(${x - 200}%)`;
    }
  }), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: s,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...i,
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ a.jsx("div", { ref: u, children: r }),
            /* @__PURE__ */ a.jsx("div", { ref: l, children: r })
          ]
        }
      )
    }
  );
}, M = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (r) => r === `
` || r === "###br###",
  isSpecificBreak: (r) => r.match(/###br\.(.*?)###/),
  getClassName: (r) => {
    var t;
    return ((t = r.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, ur = (r) => F(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ a.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ a.jsx(
    "br",
    {
      className: M.getClassName(t)
    },
    n
  ) : t),
  [r]
), Rr = ({
  text: r
}) => {
  const t = ur(r);
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: t });
}, Ve = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ a.jsx("span", { ...r, children: /* @__PURE__ */ a.jsx("span", { ...t }) }) : /* @__PURE__ */ a.jsx("span", { ...t }), Tr = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...s
}) => {
  const u = r === "chars" ? "" : " ";
  return F(
    () => t.split(M.regex).flatMap((v, d) => M.isRegularBreak(v) ? [null, /* @__PURE__ */ a.jsx("br", {}, d)] : M.isSpecificBreak(v) ? [
      null,
      /* @__PURE__ */ a.jsx(
        "br",
        {
          className: M.getClassName(v)
        },
        d
      )
    ] : [
      ...v.split(u).map((g, f) => {
        if (n) {
          const h = n.find(
            (m) => m.selector === g
          );
          if (h)
            return /* @__PURE__ */ a.jsx(
              Ve,
              {
                containerProps: i,
                ...s,
                ...h.attributes,
                children: g
              },
              `${d}-${f}`
            );
        }
        return /* @__PURE__ */ a.jsx(
          Ve,
          {
            containerProps: i,
            ...s,
            children: g === " " ? " " : g
          },
          `${d}-${f}`
        );
      }),
      null
    ]),
    [u, t, s, n, i]
  );
}, lr = X((r, t) => {
  const { fill: n, style: i, ...s } = r;
  return /* @__PURE__ */ a.jsx(
    "video",
    {
      ref: t,
      style: n ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "transparent",
        ...i
      } : i,
      ...s
    }
  );
});
lr.displayName = "Video";
const Cr = ({
  focusTarget: r
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    onFocus: () => {
      var t;
      return (t = r.current) == null ? void 0 : t.focus();
    },
    tabIndex: 0,
    style: {
      opacity: 0,
      width: 0,
      height: 0,
      position: "absolute",
      zIndex: "-99999999",
      pointerEvents: "none"
    }
  }
), fr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: s,
    children: u,
    style: l,
    ...v
  }, d) => {
    const [g, f] = A(t === 0), h = !!u;
    return C(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: d,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...h ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...l
        },
        ...v,
        children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...g ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              r === "skeleton" ? /* @__PURE__ */ a.jsx(
                "div",
                {
                  style: {
                    background: `linear-gradient(90deg,transparent,${(i == null ? void 0 : i.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animationName: "skeleton",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ a.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ a.jsx(
                "div",
                {
                  style: {
                    width: s != null && s.width ? s == null ? void 0 : s.width : "24px",
                    height: s != null && s.height ? s == null ? void 0 : s.height : "24px",
                    border: (s == null ? void 0 : s.border) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "linear",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    borderRadius: "50%",
                    animationName: "circular",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ a.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              h && /* @__PURE__ */ a.jsx("div", { style: { visibility: "hidden" }, children: u })
            ]
          }
        )
      }
    );
  }
);
fr.displayName = "Loader";
const dr = typeof document < "u" ? At : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = R(0), s = R(0), u = $(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  C(() => (i.current = window.innerWidth, window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u), clearTimeout(s.current);
  }), n);
}, vr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, hr = (r) => {
  let t = vr;
  typeof r == "string" && (t += r), console.log(t);
}, pr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Or = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = $(
    (i) => {
      r && pr(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && hr(t);
  }, [t, n]);
}, Pr = () => {
  const [r, t] = A(null), n = $(() => {
    const i = window.ontouchstart, s = navigator.maxTouchPoints;
    i !== void 0 && 0 < s ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", kr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = R(null), [s, u] = Ft(
    (f, h) => {
      switch (h.type) {
        case fe:
          return i.current = h.payload, h.payload;
        default:
          return f;
      }
    },
    i.current
  ), l = R(0), v = R(0), d = () => window.scrollY || document.documentElement.scrollTop, g = $(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > l.current + r && i.current !== "down" ? u({ type: fe, payload: "down" }) : f < l.current - r && i.current !== "up" && u({ type: fe, payload: "up" }), l.current = f;
    }, t);
  }, [t, r]);
  return C(() => (l.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), s;
}, Ir = (r, t) => {
  const [n, i] = A(null), s = $(
    (u) => {
      switch (r) {
        case "max":
          i(t >= u);
          break;
        case "min":
          i(t <= u);
          break;
      }
    },
    [r, t]
  );
  return ge({
    onResize: ({ winW: u }) => s(u),
    debounce: 100,
    dependencies: [s]
  }), C(() => s(window.innerWidth), [s]), n;
}, Dr = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: s = 800
}) => {
  const u = F(() => encodeURIComponent(r), [r]), l = F(
    () => `height=${s},width=${i}`,
    [s, i]
  ), v = F(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, n, l]
  ), d = F(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, l, n]
  ), g = F(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, l, n]
  ), f = F(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: n,
            url: t || u
          });
        } catch {
          return;
        }
      }
    }),
    [n, u, t]
  ), [h, m] = A(!1), y = F(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          m(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: v,
    X: d,
    LINE: g,
    share: f,
    copy: y,
    isCopied: h
  };
}, gr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, mr = (r) => {
  if (/Gecko\/\d+/i.test(r) && !/like Gecko/i.test(r))
    return "Gecko";
  if (/AppleWebKit\/\d+/i.test(r) && /like Gecko/i.test(r))
    return "WebKit";
  if (/Opera\/\d+/i.test(r))
    return "Presto";
  if (/Trident\/\d+/i.test(r))
    return "Trident";
  if (/Edge\/\d+/i.test(r))
    return "EdgeHTML";
  if (/Chrome\/\d+/i.test(r))
    return "Blink";
}, Ar = (r) => {
  const [t, n] = A({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return dr(() => {
    const i = navigator.userAgent, s = gr(i), u = mr(i);
    n({
      mobileOS: s,
      isMobile: /Mobi/.test(i),
      renderingEngine: u,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
};
export {
  Sr as Accordion,
  _r as AutoScrollContainer,
  Rr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Cr as FocusTrap,
  wr as FormField,
  fr as Loader,
  jr as LoadingProgress,
  Ht as ModalButton,
  xr as SpiceWrapper,
  Tr as SplitText,
  Gt as StickyItem,
  Er as Tab,
  lr as Video,
  Ar as useDeviceDetector,
  cr as useFrame,
  ar as useIntersectionObserver,
  Pr as useIsTouchDevice,
  dr as useIsomorphicLayoutEffect,
  Ir as useMediaQuery,
  Nt as useOverflowDispatch,
  ur as useParseBreakLine,
  ir as useResizeObserver,
  kr as useScrollDirection,
  Dr as useShare,
  Or as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
