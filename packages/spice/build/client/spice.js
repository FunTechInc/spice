"use client";
import He, { createContext as z, useContext as V, useState as $, useMemo as F, useCallback as I, forwardRef as X, useRef as _, useEffect as C, memo as Ft, useLayoutEffect as $t, useReducer as Lt } from "react";
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
function Wt() {
  if (Be)
    return H;
  Be = 1;
  var r = He, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, d, g) {
    var f, h = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      i.call(d, f) && !c.hasOwnProperty(f) && (h[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        h[f] === void 0 && (h[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: y, props: h, _owner: o.current };
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
function Mt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = He, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[O];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          u[p - 1] = arguments[p];
        te("error", e, u);
      }
    }
    function te(e, s, u) {
      {
        var p = A.ReactDebugCurrentFrame, E = p.getStackAddendum();
        E !== "" && (s += "%s", u = u.concat([E]));
        var S = u.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, it = !1, ot = !1, st = !1, at = !1, me;
    me = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === c || at || e === o || e === g || e === f || st || e === y || re || it || ot || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ut(e, s, u) {
      var p = e.displayName;
      if (p)
        return p;
      var E = s.displayName || s.name || "";
      return E !== "" ? u + "(" + E + ")" : u;
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
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var s = e;
            return be(s) + ".Consumer";
          case l:
            var u = e;
            return be(u._context) + ".Provider";
          case d:
            return ut(e, e.render, "ForwardRef");
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
    var N = Object.assign, U = 0, ye, xe, we, Ee, Se, je, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function lt() {
      {
        if (U === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, je = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
    function ft() {
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
              value: Re
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = A.ReactCurrentDispatcher, ie;
    function J(e, s, u) {
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
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new dt();
    }
    function Te(e, s) {
      if (!e || oe)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var p;
      oe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, lt();
      try {
        if (s) {
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
`), j = b.length - 1, R = P.length - 1; j >= 1 && R >= 0 && b[j] !== P[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (b[j] !== P[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || b[j] !== P[R]) {
                    var k = `
` + b[j].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, k), k;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = S, ft(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function vt(e, s, u) {
      return Te(e, !1);
    }
    function ht(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, ht(e));
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
            return vt(e.render);
          case h:
            return Z(e.type, s, u);
          case m: {
            var p = e, E = p._payload, S = p._init;
            try {
              return Z(S(E), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(u);
      } else
        Oe.setExtraStackFrame(null);
    }
    function pt(e, s, u, p, E) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var P = Error((p || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = e[w](s, w, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ee(E), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, w, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(E), T("Failed %s type: %s", u, b.message), ee(null));
          }
      }
    }
    var gt = Array.isArray;
    function se(e) {
      return gt(e);
    }
    function mt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function bt(e) {
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
      if (bt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Pe(e);
    }
    var q = A.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
    function xt(e) {
      if (Q.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (Q.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Et(e, s) {
      if (typeof e.ref == "string" && q.current && s && q.current.stateNode !== s) {
        var u = L(q.current.type);
        ae[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(q.current.type), e.ref), ae[u] = !0);
      }
    }
    function St(e, s) {
      {
        var u = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function jt(e, s) {
      {
        var u = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Rt = function(e, s, u, p, E, S, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: u,
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
    function _t(e, s, u, p, E) {
      {
        var S, w = {}, b = null, P = null;
        u !== void 0 && (ke(u), b = "" + u), wt(s) && (ke(s.key), b = "" + s.key), xt(s) && (P = s.ref, Et(s, E));
        for (S in s)
          Q.call(s, S) && !yt.hasOwnProperty(S) && (w[S] = s[S]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (S in j)
            w[S] === void 0 && (w[S] = j[S]);
        }
        if (b || P) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && St(w, R), P && jt(w, R);
        }
        return Rt(e, b, P, E, p, q.current, w);
      }
    }
    var ce = A.ReactCurrentOwner, Ae = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        Ae.setExtraStackFrame(u);
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
    function Tt(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Ct(e) {
      {
        var s = Fe();
        if (!s) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Le(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Ct(s);
        if ($e[u])
          return;
        $e[u] = !0;
        var p = "";
        e && e._owner && e._owner !== ce.current && (p = " It was passed a child from " + L(e._owner.type) + "."), B(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var u = 0; u < e.length; u++) {
            var p = e[u];
            le(p) && Le(p, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = D(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), w; !(w = S.next()).done; )
              le(w.value) && Le(w.value, s);
        }
      }
    }
    function Ot(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          u = s.propTypes;
        else
          return;
        if (u) {
          var p = L(s);
          pt(u, e.props, "prop", p, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = L(s);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var p = s[u];
          if (p !== "children" && p !== "key") {
            B(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, u, p, E, S) {
      {
        var w = ct(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Tt(E);
          P ? b += P : b += Fe();
          var j;
          e === null ? j = "null" : se(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var R = _t(e, s, u, E, S);
        if (R == null)
          return R;
        if (w) {
          var k = s.children;
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
        return e === i ? Pt(R) : Ot(R), R;
      }
    }
    function kt(e, s, u) {
      return Me(e, s, u, !0);
    }
    function It(e, s, u) {
      return Me(e, s, u, !1);
    }
    var Dt = It, At = kt;
    G.Fragment = i, G.jsx = Dt, G.jsxs = At;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Wt() : ve.exports = Mt();
var a = ve.exports;
const Ge = z(!0), Xe = z((r) => !r), Nt = ({ children: r }) => {
  const [t, n] = $(!0);
  return /* @__PURE__ */ a.jsx(Ge.Provider, { value: t, children: /* @__PURE__ */ a.jsx(Xe.Provider, { value: n, children: r }) });
}, Bt = ({ children: r }) => {
  const t = V(Ge);
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
}, yr = ({ children: r }) => /* @__PURE__ */ a.jsx(Nt, { children: /* @__PURE__ */ a.jsx(Bt, { children: r }) }), Yt = () => V(Xe), ze = ({ formProps: r }) => {
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
}, zt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const o = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ a.jsx("option", { hidden: !0, children: l }) : null;
  }, c = () => {
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
      defaultValue: c(),
      children: [
        /* @__PURE__ */ a.jsx(o, {}),
        t.options.map((l) => /* @__PURE__ */ a.jsx("option", { value: l, children: l }, l))
      ]
    }
  );
}, Ve = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: i,
  errors: o
}) => {
  const c = ({ index: l }) => o ? Array.isArray(o) ? o[l] : o : null;
  if (r === "block")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
      /* @__PURE__ */ a.jsx(c, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsxs("ul", { children: [
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
          /* @__PURE__ */ a.jsx(c, { index: 0 })
        ] }),
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[1] }),
          /* @__PURE__ */ a.jsx(c, { index: 1 })
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
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                border: "0",
                padding: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                zIndex: "-99999",
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
      /* @__PURE__ */ a.jsx(c, { index: 0 })
    ] });
  }
}, Vt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ a.jsx("textarea", { ...n, ...t });
}, xr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  const o = F(
    () => Array.isArray(t) ? t : [t],
    [t]
  ), c = o[0].type, l = o.length, v = !!o[0].isSelect, d = !!o[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = I(
    (h) => Ve({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: o,
      label: r,
      FormItem: h,
      errors: n
    }),
    [n, o, r, l]
  ), f = I(() => v ? g(zt) : d ? g(Vt) : c === "radio" || c === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: o,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, o, r, v, d, g, c]);
  return /* @__PURE__ */ a.jsx("fieldset", { ...i, children: /* @__PURE__ */ a.jsx(f, {}) });
}, he = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ue = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Ut = ".spice__modal_close", qt = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, focusTarget: o, ...c }, l) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = _(null), h = I(() => {
      var y;
      Ue("add"), f.current.showModal(), (y = o == null ? void 0 : o.current) == null || y.focus(), n && n(f.current);
    }, [n, o]), m = I(async () => {
      i && await he(i(f.current)), Ue("remove"), f.current.close();
    }, [i]);
    return C(() => {
      const y = f.current.querySelectorAll(Ut);
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
        var D;
        ((D = f.current) == null ? void 0 : D.hasAttribute("open")) && x.key === "Escape" && m();
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
          ...c,
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
qt.displayName = "ModalButton";
const Ht = X(
  ({ children: r, ...t }, n) => {
    const i = Yt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ a.jsx("div", { ref: n, ...t, children: r });
  }
);
Ht.displayName = "StickyItem";
const Gt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Je = z(Gt), Ke = z(
  () => {
  }
), Xt = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, i] = $({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ a.jsx(Je.Provider, { value: n, children: /* @__PURE__ */ a.jsx(Ke.Provider, { value: i, children: r }) });
}, Ze = () => V(Je), pe = () => V(Ke), Jt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = pe(), o = Ze(), c = I(() => {
    o.current === t || o.isLeaving || i((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [i, o, t]);
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: c,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": o.current === t,
      ...n,
      children: r
    }
  );
}, Qe = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((o) => {
    o.setAttribute("tabindex", i);
  });
}, Kt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: i,
  onReset: o,
  style: c,
  ...l
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = _(!0), d = _(null), g = pe(), f = Ze(), h = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      h && o && o(d.current);
      return;
    }
    f.prev === t && (async () => (i && await he(i(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), h && n && n(d.current);
  }, [f, g, n, i, o, t, h]), C(() => {
    Qe({
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
        ...c
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...l,
      children: r
    }
  );
}, Zt = () => {
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
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Jt,
  Content: Kt,
  Context: Xt,
  useTabSwitch: Zt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, et = z(Qt), tt = z(() => {
}), er = ({ children: r, defaultValue: t }) => {
  const [n, i] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ a.jsx(et.Provider, { value: n, children: /* @__PURE__ */ a.jsx(tt.Provider, { value: i, children: r }) });
}, rt = () => V(et), tr = () => V(tt), rr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = rt(), o = tr(), [c, l] = $(
    () => !!i.defaultValue.find((v) => v === t)
  );
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: () => {
        o((v) => ({
          ...v,
          toggle: c,
          target: t
        })), l(!c);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": c,
      ...n,
      children: r
    }
  );
}, nr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = _(0), c = _(!0);
  C(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return l.observe(v), () => {
        l.unobserve(v), clearTimeout(o.current);
      };
  }, i);
}, ir = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: i,
  ...o
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = rt(), [l, v] = $(
    () => !!c.defaultValue.find((m) => m === r)
  ), d = _(l);
  C(() => {
    c.target === r && v(!l);
  }, [c.target, c.toggle]);
  const g = _(!0), f = _(null), h = _(null);
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
    Qe({ content: f.current, isOpen: l });
  }, [l]), nr({
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
      children: /* @__PURE__ */ a.jsx("div", { ref: h, ...o, children: i })
    }
  );
}, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: rr,
  Content: ir,
  Context: er
}, Symbol.toStringTag, { value: "Module" })), or = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: c,
  onComplete: l
}) => {
  const v = F(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = _(null), g = I(
    ({
      digitContainer: h,
      numbersTarget: m,
      digit: y,
      digitNumber: x,
      currentPercent: O,
      limit: D,
      destination: A
    }) => {
      if (v[y] !== x && O <= D) {
        const T = x.toString(), te = (Math.min(8, x) + 1).toString(), re = O >= D;
        m[0].innerText = T, m[1].innerText = re ? "0" : te, o && o({
          digitContainer: h,
          percent: O,
          digit: y,
          destination: A,
          duration: r / (A / y)
        }), v[y] = x;
      }
    },
    [v, o, r]
  ), f = I(
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
        x === 1 && c && c(y.getAll()), x > h && await O();
        const D = Math.floor(x / 100) % 100, A = Math.floor(x / 10) % 10, T = x % 10;
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
          digitNumber: A,
          currentPercent: x,
          numbersTarget: y.tens,
          limit: 90,
          destination: h
        }), v[100] !== D && (y.hundreds[1].innerText = D.toString(), o && o({
          digitContainer: i.current,
          percent: x,
          digit: 100,
          destination: h,
          duration: r / (h / 10)
        }), v[100] = D);
      }, Math.max(1e3 / 60, r / h * 1e3));
    })),
    [
      v,
      g,
      n,
      i,
      t,
      l,
      o,
      c,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, nt = Ft(
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
nt.displayName = "Digit";
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: nt,
  useLoadingProgress: or
}, Symbol.toStringTag, { value: "Module" })), sr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: c,
  dependencies: l = []
} = {}) => {
  const v = _(null), [d, g] = $(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? v.current;
    if (!f)
      return;
    const h = (y, x) => {
      y.forEach((O) => {
        g(O.isIntersecting), O.isIntersecting ? (o && o(O), i && x.unobserve(O.target)) : O.isIntersecting || c && c(O);
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
    o,
    c,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: v, isIntersecting: d };
}, ar = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, jr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = _(null), c = _(null), l = _(null), { isIntersecting: v } = sr({
    targetRef: o,
    once: !1
  }), d = _(0);
  return ar(() => {
    if (!v)
      return;
    const g = o.current, f = c.current, h = l.current;
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
      ref: o,
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
            /* @__PURE__ */ a.jsx("div", { ref: c, children: r }),
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
}, cr = (r) => F(
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
  const t = cr(r);
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: t });
}, qe = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ a.jsx("span", { ...r, children: /* @__PURE__ */ a.jsx("span", { ...t }) }) : /* @__PURE__ */ a.jsx("span", { ...t }), _r = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...o
}) => {
  const c = r === "chars" ? "" : " ";
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
      ...v.split(c).map((g, f) => {
        if (n) {
          const h = n.find(
            (m) => m.selector === g
          );
          if (h)
            return /* @__PURE__ */ a.jsx(
              qe,
              {
                containerProps: i,
                ...o,
                ...h.attributes,
                children: g
              },
              `${d}-${f}`
            );
        }
        return /* @__PURE__ */ a.jsx(
          qe,
          {
            containerProps: i,
            ...o,
            children: g === " " ? " " : g
          },
          `${d}-${f}`
        );
      }),
      null
    ]),
    [c, t, o, n, i]
  );
}, ur = X((r, t) => {
  const { fill: n, style: i, ...o } = r;
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
      ...o
    }
  );
});
ur.displayName = "Video";
const Tr = ({
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
), lr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: c,
    style: l,
    ...v
  }, d) => {
    const [g, f] = $(t === 0), h = !!c;
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
                    width: o != null && o.width ? o == null ? void 0 : o.width : "24px",
                    height: o != null && o.height ? o == null ? void 0 : o.height : "24px",
                    border: (o == null ? void 0 : o.border) || "2px solid #fff",
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
              h && /* @__PURE__ */ a.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
lr.displayName = "Loader";
const fr = typeof document < "u" ? $t : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = _(0), o = _(0), c = I(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  C(() => (i.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(o.current);
  }), n);
}, dr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, vr = (r) => {
  let t = dr;
  typeof r == "string" && (t += r), console.log(t);
}, hr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Cr = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = I(
    (i) => {
      r && hr(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && vr(t);
  }, [t, n]);
}, Or = () => {
  const [r, t] = $(null), n = I(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", Pr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = _(null), [o, c] = Lt(
    (f, h) => {
      switch (h.type) {
        case fe:
          return i.current = h.payload, h.payload;
        default:
          return f;
      }
    },
    i.current
  ), l = _(0), v = _(0), d = () => window.scrollY || document.documentElement.scrollTop, g = I(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > l.current + r && i.current !== "down" ? c({ type: fe, payload: "down" }) : f < l.current - r && i.current !== "up" && c({ type: fe, payload: "up" }), l.current = f;
    }, t);
  }, [t, r]);
  return C(() => (l.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), o;
}, kr = (r, t) => {
  const [n, i] = $(null), o = I(
    (c) => {
      switch (r) {
        case "max":
          i(t >= c);
          break;
        case "min":
          i(t <= c);
          break;
      }
    },
    [r, t]
  );
  return ge({
    onResize: ({ winW: c }) => o(c),
    debounce: 100,
    dependencies: [o]
  }), C(() => o(window.innerWidth), [o]), n;
}, Ir = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const c = F(() => encodeURIComponent(r), [r]), l = F(
    () => `height=${o},width=${i}`,
    [o, i]
  ), v = F(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${c}&t=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, n, l]
  ), d = F(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${c}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, n]
  ), g = F(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${c}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, n]
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
            url: t || c
          });
        } catch {
          return;
        }
      }
    }),
    [n, c, t]
  ), [h, m] = $(!1), y = F(
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
}, pr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, gr = (r) => {
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
}, Dr = (r) => {
  const [t, n] = $({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return fr(() => {
    const i = navigator.userAgent, o = pr(i), c = gr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: c,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
};
export {
  Er as Accordion,
  jr as AutoScrollContainer,
  Rr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Tr as FocusTrap,
  xr as FormField,
  lr as Loader,
  Sr as LoadingProgress,
  qt as ModalButton,
  yr as SpiceWrapper,
  _r as SplitText,
  Ht as StickyItem,
  wr as Tab,
  ur as Video,
  Dr as useDeviceDetector,
  ar as useFrame,
  sr as useIntersectionObserver,
  Or as useIsTouchDevice,
  fr as useIsomorphicLayoutEffect,
  kr as useMediaQuery,
  Yt as useOverflowDispatch,
  cr as useParseBreakLine,
  nr as useResizeObserver,
  Pr as useScrollDirection,
  Ir as useShare,
  Cr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
