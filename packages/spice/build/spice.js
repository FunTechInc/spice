"use client";
import Ue, { createContext as z, useContext as V, useState as k, useCallback as P, forwardRef as X, useRef as C, useEffect as j, useMemo as D, memo as Ft, useLayoutEffect as $t, useReducer as At } from "react";
import de from "gsap";
var he = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Lt() {
  if (Ne)
    return q;
  Ne = 1;
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(h, d, g) {
    var f, p = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      o.call(d, f) && !s.hasOwnProperty(f) && (p[f] = d[f]);
    if (h && h.defaultProps)
      for (f in d = h.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: h, key: m, ref: y, props: p, _owner: i.current };
  }
  return q.Fragment = n, q.jsx = c, q.jsxs = c, q;
}
var H = {};
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
function Wt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.iterator, W = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = E && e[E] || e[W];
      return typeof a == "function" ? a : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
          u[v - 1] = arguments[v];
        te("error", e, u);
      }
    }
    function te(e, a, u) {
      {
        var v = $.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (a += "%s", u = u.concat([x]));
        var S = u.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, nt = !1, ot = !1, it = !1, at = !1, ge;
    ge = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || at || e === i || e === g || e === f || it || e === y || re || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === c || e.$$typeof === h || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ct(e, a, u) {
      var v = e.displayName;
      if (v)
        return v;
      var x = a.displayName || a.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var a = e;
            return me(a) + ".Consumer";
          case c:
            var u = e;
            return me(u._context) + ".Provider";
          case d:
            return ct(e, e.render, "ForwardRef");
          case p:
            var v = e.displayName || null;
            return v !== null ? v : A(e.type) || "Memo";
          case m: {
            var x = e, S = x._payload, w = x._init;
            try {
              return A(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, ye, be, we, xe, Ee, Se, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ut() {
      {
        if (B === 0) {
          ye = console.log, be = console.info, we = console.warn, xe = console.error, Ee = console.group, Se = console.groupCollapsed, _e = console.groupEnd;
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
        B++;
      }
    }
    function lt() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ye
            }),
            info: M({}, e, {
              value: be
            }),
            warn: M({}, e, {
              value: we
            }),
            error: M({}, e, {
              value: xe
            }),
            group: M({}, e, {
              value: Ee
            }),
            groupCollapsed: M({}, e, {
              value: Se
            }),
            groupEnd: M({}, e, {
              value: _e
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = $.ReactCurrentDispatcher, oe;
    function G(e, a, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            oe = v && v[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, J;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ft();
    }
    function je(e, a) {
      if (!e || ie)
        return "";
      {
        var u = J.get(e);
        if (u !== void 0)
          return u;
      }
      var v;
      ie = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, ut();
      try {
        if (a) {
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
            } catch (L) {
              v = L;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (L) {
              v = L;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            v = L;
          }
          e();
        }
      } catch (L) {
        if (L && v && typeof L.stack == "string") {
          for (var b = L.stack.split(`
`), O = v.stack.split(`
`), _ = b.length - 1, R = O.length - 1; _ >= 1 && R >= 0 && b[_] !== O[R]; )
            R--;
          for (; _ >= 1 && R >= 0; _--, R--)
            if (b[_] !== O[R]) {
              if (_ !== 1 || R !== 1)
                do
                  if (_--, R--, R < 0 || b[_] !== O[R]) {
                    var I = `
` + b[_].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, I), I;
                  }
                while (_ >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = S, lt(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? G(Y) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function dt(e, a, u) {
      return je(e, !1);
    }
    function ht(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, ht(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case g:
          return G("Suspense");
        case f:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return dt(e.render);
          case p:
            return K(e.type, a, u);
          case m: {
            var v = e, x = v._payload, S = v._init;
            try {
              return K(S(x), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Te = {}, Ce = $.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var a = e._owner, u = K(e.type, e._source, a ? a.type : null);
        Ce.setExtraStackFrame(u);
      } else
        Ce.setExtraStackFrame(null);
    }
    function pt(e, a, u, v, x) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((v || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[w](a, w, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              b = _;
            }
            b && !(b instanceof Error) && (Z(x), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, w, typeof b), Z(null)), b instanceof Error && !(b.message in Te) && (Te[b.message] = !0, Z(x), T("Failed %s type: %s", u, b.message), Z(null));
          }
      }
    }
    var vt = Array.isArray;
    function ae(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function mt(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Pe(e) {
      if (mt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = $.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, se;
    se = {};
    function bt(e) {
      if (Q.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (Q.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, a) {
      if (typeof e.ref == "string" && U.current && a && U.current.stateNode !== a) {
        var u = A(U.current.type);
        se[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(U.current.type), e.ref), se[u] = !0);
      }
    }
    function Et(e, a) {
      {
        var u = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function St(e, a) {
      {
        var u = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var _t = function(e, a, u, v, x, S, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
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
        value: v
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Rt(e, a, u, v, x) {
      {
        var S, w = {}, b = null, O = null;
        u !== void 0 && (Pe(u), b = "" + u), wt(a) && (Pe(a.key), b = "" + a.key), bt(a) && (O = a.ref, xt(a, x));
        for (S in a)
          Q.call(a, S) && !yt.hasOwnProperty(S) && (w[S] = a[S]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (S in _)
            w[S] === void 0 && (w[S] = _[S]);
        }
        if (b || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Et(w, R), O && St(w, R);
        }
        return _t(e, b, O, x, v, U.current, w);
      }
    }
    var ce = $.ReactCurrentOwner, ke = $.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var a = e._owner, u = K(e.type, e._source, a ? a.type : null);
        ke.setExtraStackFrame(u);
      } else
        ke.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ce.current) {
          var e = A(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function jt(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Tt(e) {
      {
        var a = Fe();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ae(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Tt(a);
        if ($e[u])
          return;
        $e[u] = !0;
        var v = "";
        e && e._owner && e._owner !== ce.current && (v = " It was passed a child from " + A(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), N(null);
      }
    }
    function Le(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var u = 0; u < e.length; u++) {
            var v = e[u];
            le(v) && Ae(v, a);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = F(e);
          if (typeof x == "function" && x !== e.entries)
            for (var S = x.call(e), w; !(w = S.next()).done; )
              le(w.value) && Ae(w.value, a);
        }
      }
    }
    function Ct(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === p))
          u = a.propTypes;
        else
          return;
        if (u) {
          var v = A(a);
          pt(u, e.props, "prop", v, e);
        } else if (a.PropTypes !== void 0 && !ue) {
          ue = !0;
          var x = A(a);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var v = a[u];
          if (v !== "children" && v !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, a, u, v, x, S) {
      {
        var w = st(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(x);
          O ? b += O : b += Fe();
          var _;
          e === null ? _ = "null" : ae(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (A(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, b);
        }
        var R = Rt(e, a, u, x, S);
        if (R == null)
          return R;
        if (w) {
          var I = a.children;
          if (I !== void 0)
            if (v)
              if (ae(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  Le(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(I, e);
        }
        return e === o ? Ot(R) : Ct(R), R;
      }
    }
    function Pt(e, a, u) {
      return We(e, a, u, !0);
    }
    function It(e, a, u) {
      return We(e, a, u, !1);
    }
    var Dt = It, kt = Pt;
    H.Fragment = o, H.jsx = Dt, H.jsxs = kt;
  }()), H;
}
process.env.NODE_ENV === "production" ? he.exports = Lt() : he.exports = Wt();
var l = he.exports;
const qe = z(!0), He = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = k(!0);
  return /* @__PURE__ */ l.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ l.jsx(He.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = V(qe);
  return /* @__PURE__ */ l.jsx(
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
}, mr = ({ children: r }) => /* @__PURE__ */ l.jsx(Mt, { children: /* @__PURE__ */ l.jsx(Nt, { children: r }) }), Yt = () => V(He), ze = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ l.jsx(
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
  const { isSelect: t, style: n, ...o } = r;
  if (!t)
    return;
  const i = () => {
    const c = t.defaultValue;
    return c ? /* @__PURE__ */ l.jsx("option", { hidden: !0, children: c }) : null;
  }, s = () => {
    const c = t.defaultSelectedIndex;
    if (c)
      return t.options[c];
  };
  return /* @__PURE__ */ l.jsxs(
    "select",
    {
      ...o,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: s(),
      children: [
        /* @__PURE__ */ l.jsx(i, {}),
        t.options.map((c) => /* @__PURE__ */ l.jsx("option", { value: c, children: c }, c))
      ]
    }
  );
}, Ve = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: o,
  errors: i
}) => {
  const s = P(
    (c) => !i || !i[c] ? null : i[c],
    [i]
  );
  if (r === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
      s(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsxs("ul", { children: [
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const c = t.map(
      ({ id: h, value: d, style: g, optionLabel: f, ...p }) => /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx(
          o,
          {
            formProps: {
              id: h,
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
              ...p
            }
          }
        ),
        /* @__PURE__ */ l.jsx("label", { htmlFor: h, children: f || d })
      ] }, h)
    );
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { children: n }),
      /* @__PURE__ */ l.jsx("ul", { children: c }),
      s(0)
    ] });
  }
}, Vt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ l.jsx("textarea", { ...n, ...t });
}, yr = ({
  label: r,
  formProps: t,
  errors: n,
  ...o
}) => {
  const i = t, s = i[0].type, c = i.length, h = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = P(
    (p) => Ve({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, i, r, c]
  ), f = P(() => h ? g(zt) : d ? g(Vt) : s === "radio" || s === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: i,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, i, r, h, d, g, s]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...o, children: /* @__PURE__ */ l.jsx(f, {}) });
}, pe = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Be = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Bt = ".spice__modal_close", Ut = X(
  ({ children: r, dialog: t, onOpen: n, onClose: o, focusTarget: i, ...s }, c) => {
    const {
      children: h,
      style: d,
      ...g
    } = t, f = C(null), p = P(() => {
      var y;
      Be("add"), f.current.showModal(), (y = i == null ? void 0 : i.current) == null || y.focus(), n && n(f.current);
    }, [n, i]), m = P(async () => {
      o && await pe(o(f.current)), Be("remove"), f.current.close();
    }, [o]);
    return j(() => {
      const y = f.current.querySelectorAll(Bt);
      if (y)
        return y.forEach(
          (E) => E.addEventListener("click", m)
        ), () => {
          y.forEach(
            (E) => E.removeEventListener("click", m)
          );
        };
    }, [m]), j(() => {
      const y = (E) => {
        var F;
        ((F = f.current) == null ? void 0 : F.hasAttribute("open")) && E.key === "Escape" && m();
      };
      return window.addEventListener("keydown", y), () => {
        window.removeEventListener("keydown", y);
      };
    }, [m]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          ref: c,
          onClick: () => {
            p();
          },
          ...s,
          children: r
        }
      ),
      /* @__PURE__ */ l.jsx(
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
          children: h
        }
      )
    ] });
  }
);
Ut.displayName = "ModalButton";
const qt = X(
  ({ children: r, ...t }, n) => {
    const o = Yt();
    return j(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ l.jsx("div", { ref: n, ...t, children: r });
  }
);
qt.displayName = "StickyItem";
const Xe = X((r, t) => {
  const { fill: n, style: o, ...i } = r;
  return /* @__PURE__ */ l.jsx(
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
        ...o
      } : o,
      ...i
    }
  );
});
Xe.displayName = "Video";
const br = (r) => {
  const t = C(null), [n, o] = k(!1), { fallback: i, ...s } = r;
  return j(() => {
    var c;
    (c = t.current) == null || c.play().then(() => {
      o(!1);
    }).catch(() => {
      o(!0);
    });
  }, []), n ? i : /* @__PURE__ */ l.jsx(Xe, { ref: t, ...s });
}, Ht = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = z(Ht), Je = z(
  () => {
  }
), Xt = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, o] = k({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ l.jsx(Ge.Provider, { value: n, children: /* @__PURE__ */ l.jsx(Je.Provider, { value: o, children: r }) });
}, Ke = () => V(Ge), ve = () => V(Je), Gt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = ve(), i = Ke(), s = P(() => {
    i.current === t || i.isLeaving || o((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [o, i, t]);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: s,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      ...n,
      children: r
    }
  );
}, Qe = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const o = t ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Jt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: o,
  onReset: i,
  style: s,
  ...c
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const h = C(!0), d = C(null), g = ve(), f = Ke(), p = f.current === t && !f.isLeaving;
  return j(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && i && i(d.current);
      return;
    }
    f.prev === t && (async () => (o && await pe(o(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), p && n && n(d.current);
  }, [f, g, n, o, i, t, p]), j(() => {
    Qe({
      content: d.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ l.jsx(
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
        ...s
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...c,
      children: r
    }
  );
}, Kt = () => {
  const r = ve();
  return (t, n) => {
    r((o) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? o.current : "",
      current: n ? o.current : t,
      next: n ? t : ""
    }));
  };
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Gt,
  Content: Jt,
  Context: Xt,
  useTabSwitch: Kt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = z(Qt), et = z(() => {
}), Zt = ({ children: r, defaultValue: t }) => {
  const [n, o] = k({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ l.jsx(et.Provider, { value: o, children: r }) });
}, tt = () => V(Ze), er = () => V(et), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), i = er(), s = D(
    () => !!o.defaultValue.find((d) => d === t),
    [o, t]
  ), [c, h] = k(s);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        i((d) => ({
          ...d,
          toggle: c,
          target: t
        })), h(!c);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": c,
      ...n,
      children: r
    }
  );
}, rr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: o = []
}) => {
  const i = C(0), s = C(!0);
  j(() => {
    const c = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), h = r.current;
    if (h)
      return c.observe(h), () => {
        c.unobserve(h), clearTimeout(i.current);
      };
  }, o);
}, nr = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: o,
  ...i
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = tt(), c = D(
    () => !!s.defaultValue.find((m) => m === r),
    [s, r]
  ), [h, d] = k(c);
  D(() => {
    s.target === r && d(!h);
  }, [s.target, s.toggle]);
  const g = C(!0), f = C(null), p = C(null);
  return j(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const m = {
      height: p.current.getBoundingClientRect().height,
      target: f.current
    };
    h ? t(m) : n(m);
  }, [h, t, n]), j(() => {
    Qe({ content: f.current, isOpen: h });
  }, [h]), rr({
    targetRef: p,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      h && (f.current.style.height = `${y}px`);
    },
    dependencies: [h],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: c ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !h,
      children: /* @__PURE__ */ l.jsx("div", { ref: p, ...i, children: o })
    }
  );
}, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tr,
  Content: nr,
  Context: Zt
}, Symbol.toStringTag, { value: "Module" })), or = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: o,
  onProgress: i,
  onStart: s,
  onComplete: c
}) => {
  const h = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = C(null), g = P(
    ({
      digitContainer: p,
      numbersTarget: m,
      digit: y,
      digitNumber: E,
      currentPercent: W,
      limit: F,
      destination: $
    }) => {
      if (h[y] !== E && W <= F) {
        const T = E.toString(), te = (Math.min(8, E) + 1).toString(), re = W >= F;
        m[0].innerText = T, m[1].innerText = re ? "0" : te, i && i({
          digitContainer: p,
          percent: W,
          digit: y,
          destination: $,
          duration: r / ($ / y)
        }), h[y] = E;
      }
    },
    [h, i, r]
  ), f = P(
    (p) => (p > 100 && (p = 100), new Promise((m) => {
      if (p === 0)
        return;
      const y = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const E = h.to += 1, W = async () => {
          clearInterval(d.current), E > 100 && c && await pe(c(y.getAll())), m(E - 1);
        };
        E === 1 && s && s(y.getAll()), E > p && await W();
        const F = Math.floor(E / 100) % 100, $ = Math.floor(E / 10) % 10, T = E % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: E,
          numbersTarget: y.ones,
          limit: 90,
          destination: p
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: $,
          currentPercent: E,
          numbersTarget: y.tens,
          limit: 90,
          destination: p
        }), h[100] !== F && (y.hundreds[1].innerText = F.toString(), i && i({
          digitContainer: o.current,
          percent: E,
          digit: 100,
          destination: p,
          duration: r / (p / 10)
        }), h[100] = F);
      }, Math.max(1e3 / 60, r / p * 1e3));
    })),
    [
      h,
      g,
      n,
      o,
      t,
      c,
      i,
      s,
      r
    ]
  );
  return j(() => () => {
    clearInterval(d.current);
  }, []), f;
}, rt = Ft(
  X((r, t) => /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ l.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
rt.displayName = "Digit";
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: or
}, Symbol.toStringTag, { value: "Module" })), ir = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: o = !1,
  onEnter: i,
  onLeave: s,
  dependencies: c = []
}) => {
  const h = {
    rootMargin: t,
    threshold: n
  };
  j(() => {
    const d = r == null ? void 0 : r.current;
    if (!d)
      return;
    const g = (p, m) => {
      p.forEach((y) => {
        y.isIntersecting && i ? (i(y), o && m.unobserve(y.target)) : !y.isIntersecting && s && s(y);
      });
    }, f = new IntersectionObserver(g, h);
    return f.observe(d), () => {
      f.unobserve(d);
    };
  }, c);
}, ar = (r) => {
  const [t, n] = k(!1);
  return ir({
    ...r,
    onEnter: () => n(!0),
    onLeave: () => n(!1)
  }), t;
}, sr = (r, t, n) => {
  j(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Sr = ({
  children: r,
  isReverse: t = !1,
  speed: n = 1,
  style: o,
  ...i
}) => {
  const s = C(null), c = C(null), h = C(null), d = ar({
    targetRef: s,
    once: !1
  }), g = C(0);
  return sr(() => {
    if (!d)
      return;
    const f = s.current, p = c.current, m = h.current;
    if (!f || !p || !m)
      return;
    const y = de.ticker.deltaRatio() / 1e3, E = f.clientWidth / p.clientWidth;
    g.current += y * n * E, g.current >= 1 && (g.current = 0), t ? (p.style.transform = `translateX(${g.current * -100}%)`, m.style.transform = `translateX(${100 - g.current * 100}%)`) : (p.style.transform = `translateX(${g.current * 100}%)`, m.style.transform = `translateX(${g.current * 100 - 200}%)`);
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: s,
      style: {
        overflow: "hidden",
        ...o || {}
      },
      ...i,
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ l.jsx("div", { ref: c, children: r }),
            /* @__PURE__ */ l.jsx("div", { ref: h, children: r })
          ]
        }
      )
    }
  );
}, _r = ({
  type: r = "chars",
  text: t,
  ...n
}) => {
  const o = r === "chars" ? "" : " ";
  return D(
    () => t.split(`
`).flatMap((s, c, h) => [
      ...s.split(o).map(
        (d, g) => d === " " ? /* @__PURE__ */ l.jsx("span", { ...n, children: " " }, `${c}-${g}`) : /* @__PURE__ */ l.jsx("span", { ...n, children: d }, `${c}-${g}`)
      ),
      c < h.length - 1 ? /* @__PURE__ */ l.jsx("br", {}, c) : null
    ]),
    [o, t, n]
  );
}, Rr = ({
  focusTarget: r
}) => /* @__PURE__ */ l.jsx(
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
), cr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: o,
    circular: i,
    children: s,
    style: c,
    ...h
  }, d) => {
    const [g, f] = k(t === 0), p = !!s;
    return j(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: d,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...p ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...c
        },
        ...h,
        children: /* @__PURE__ */ l.jsxs(
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
              r === "skeleton" ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    background: `linear-gradient(90deg,transparent,${(o == null ? void 0 : o.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (o == null ? void 0 : o.animationDuration) || "1.6s",
                    animationTimingFunction: (o == null ? void 0 : o.animationTimingFunction) || "ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animationName: "skeleton",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    width: i != null && i.width ? i == null ? void 0 : i.width : "24px",
                    height: i != null && i.height ? i == null ? void 0 : i.height : "24px",
                    border: (i == null ? void 0 : i.border) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (o == null ? void 0 : o.animationDuration) || "1.6s",
                    animationTimingFunction: (o == null ? void 0 : o.animationTimingFunction) || "linear",
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
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              p && /* @__PURE__ */ l.jsx("div", { style: { visibility: "hidden" }, children: s })
            ]
          }
        )
      }
    );
  }
);
cr.displayName = "Loader";
const ur = typeof document < "u" ? $t : j, ee = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = C(0), i = C(0), s = P(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [r, t]);
  j(() => (o.current = window.innerWidth, window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s), clearTimeout(i.current);
  }), n);
}, lr = ({
  initWinW: r,
  winW: t,
  threshold: n
}) => {
  let o = !(r <= n);
  t <= n ? o && window.location.reload() : !o && window.location.reload();
}, fr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, dr = () => {
  console.log(fr);
}, hr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, jr = ({
  reloadThresholds: r,
  isFixViewportForSmall: t = !0,
  areYouFun: n = !1
} = {}) => {
  const o = P(
    (i) => {
      t && hr(i);
    },
    [t]
  );
  ee({
    onResize: ({ initWinW: i, winW: s }) => {
      r && r.forEach(
        (c) => lr({
          initWinW: i,
          winW: s,
          threshold: c
        })
      ), o(s);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), n && process.env.NODE_ENV !== "development" && dr();
  }, [n, o]);
}, pr = () => {
  const [r, t] = k(null), n = P(() => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return ee({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), j(() => n(), [n]), r;
}, fe = "scroll", Tr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const o = C(null), [i, s] = At(
    (f, p) => {
      switch (p.type) {
        case fe:
          return o.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    o.current
  ), c = C(0), h = C(0), d = () => window.scrollY || document.documentElement.scrollTop, g = P(() => {
    clearTimeout(h.current), h.current = setTimeout(() => {
      const f = d();
      f > c.current + r && o.current !== "down" ? s({ type: fe, payload: "down" }) : f < c.current - r && o.current !== "up" && s({ type: fe, payload: "up" }), c.current = f;
    }, t);
  }, [t, r]);
  return j(() => (c.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(h.current);
  }), n), i;
}, Cr = (r, t) => {
  const [n, o] = k(null), i = P(
    (s) => {
      switch (r) {
        case "max":
          o(t >= s);
          break;
        case "min":
          o(t <= s);
          break;
      }
    },
    [r, t]
  );
  return ee({
    onResize: ({ winW: s }) => i(s),
    debounce: 100,
    dependencies: []
  }), j(() => i(window.innerWidth), [i]), n;
}, Or = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: o = 600,
  height: i = 800
}) => {
  const s = D(() => encodeURIComponent(r), [r]), c = D(
    () => `height=${i},width=${o}`,
    [i, o]
  ), h = D(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${s}&t=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [s, n, c]
  ), d = D(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${s}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [s, c, n]
  ), g = D(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${s}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [s, c, n]
  ), f = D(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: n,
            url: t || s
          });
        } catch {
          return;
        }
      }
    }),
    [n, s, t]
  ), [p, m] = k(!1), y = D(
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
    Facebook: h,
    X: d,
    LINE: g,
    share: f,
    copy: y,
    isCopied: p
  };
}, Pr = (r) => {
  const t = pr();
  ur(() => {
    !t || !r.current || (r.current.style.height = `${window.screen.height}px`);
  }, [t, r]), ee({
    onResize: ({ winH: n }) => {
      r.current && (t ? r.current.style.height = `${window.screen.height}px` : r.current.style.height = `${n}px`);
    },
    dependencies: [t]
  });
}, Ir = () => {
  const [r, t] = k(void 0);
  return j(() => {
    const n = navigator.userAgent;
    /iPhone|iPad|iPod/i.test(n) ? t("iOS") : /Android/i.test(n) && t("Android");
  }, []), r;
};
export {
  xr as Accordion,
  Sr as AutoScrollContainer,
  Rr as FocusTrap,
  yr as FormField,
  cr as Loader,
  Er as LoadingProgress,
  br as LowPowerVideo,
  Ut as ModalButton,
  mr as SpiceWrapper,
  _r as SplitText,
  qt as StickyItem,
  wr as Tab,
  Xe as Video,
  Pr as use100vh,
  Ir as useDeviceDetector,
  sr as useFrame,
  ir as useIntersectionObserver,
  ar as useIsIntersecting,
  pr as useIsTouchDevice,
  ur as useIsomorphicLayoutEffect,
  Cr as useMediaQuery,
  Yt as useOverflowDispatch,
  rr as useResizeObserver,
  Tr as useScrollDirection,
  Or as useShare,
  jr as useStarter,
  ee as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
