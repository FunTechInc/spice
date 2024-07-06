"use client";
import Ue, { createContext as V, useContext as z, useState as k, useCallback as P, forwardRef as X, useRef as T, useEffect as C, useMemo as D, memo as Ft, useLayoutEffect as At, useReducer as $t } from "react";
import fe from "gsap";
var de = { exports: {} }, q = {};
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
  function c(v, f, h) {
    var d, p = {}, m = null, y = null;
    h !== void 0 && (m = "" + h), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (y = f.ref);
    for (d in f)
      o.call(f, d) && !s.hasOwnProperty(d) && (p[d] = f[d]);
    if (v && v.defaultProps)
      for (d in f = v.defaultProps, f)
        p[d] === void 0 && (p[d] = f[d]);
    return { $$typeof: t, type: v, key: m, ref: y, props: p, _owner: i.current };
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
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), v = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.iterator, W = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = E && e[E] || e[W];
      return typeof a == "function" ? a : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          u[g - 1] = arguments[g];
        ee("error", e, u);
      }
    }
    function ee(e, a, u) {
      {
        var g = A.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (a += "%s", u = u.concat([x]));
        var S = u.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var te = !1, nt = !1, ot = !1, it = !1, at = !1, ge;
    ge = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || at || e === i || e === h || e === d || it || e === y || te || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === c || e.$$typeof === v || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ct(e, a, u) {
      var g = e.displayName;
      if (g)
        return g;
      var x = a.displayName || a.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var a = e;
            return me(a) + ".Consumer";
          case c:
            var u = e;
            return me(u._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case p:
            var g = e.displayName || null;
            return g !== null ? g : $(e.type) || "Memo";
          case m: {
            var x = e, S = x._payload, w = x._init;
            try {
              return $(w(S));
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
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = A.ReactCurrentDispatcher, ne;
    function G(e, a, u) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            ne = g && g[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, J;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ft();
    }
    function je(e, a) {
      if (!e || oe)
        return "";
      {
        var u = J.get(e);
        if (u !== void 0)
          return u;
      }
      var g;
      oe = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = re.current, re.current = null, ut();
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
              g = L;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (L) {
              g = L;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            g = L;
          }
          e();
        }
      } catch (L) {
        if (L && g && typeof L.stack == "string") {
          for (var b = L.stack.split(`
`), O = g.stack.split(`
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
        oe = !1, re.current = S, lt(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? G(Y) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function dt(e, a, u) {
      return je(e, !1);
    }
    function vt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, vt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case h:
          return G("Suspense");
        case d:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return dt(e.render);
          case p:
            return K(e.type, a, u);
          case m: {
            var g = e, x = g._payload, S = g._init;
            try {
              return K(S(x), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Te = {}, Ce = A.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var a = e._owner, u = K(e.type, e._source, a ? a.type : null);
        Ce.setExtraStackFrame(u);
      } else
        Ce.setExtraStackFrame(null);
    }
    function pt(e, a, u, g, x) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((g || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[w](a, w, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              b = _;
            }
            b && !(b instanceof Error) && (Z(x), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, w, typeof b), Z(null)), b instanceof Error && !(b.message in Te) && (Te[b.message] = !0, Z(x), j("Failed %s type: %s", u, b.message), Z(null));
          }
      }
    }
    var ht = Array.isArray;
    function ie(e) {
      return ht(e);
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
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = A.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
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
        var u = $(U.current.type);
        ae[u] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(U.current.type), e.ref), ae[u] = !0);
      }
    }
    function Et(e, a) {
      {
        var u = function() {
          Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
          De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var _t = function(e, a, u, g, x, S, w) {
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
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Rt(e, a, u, g, x) {
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
        return _t(e, b, O, x, g, U.current, w);
      }
    }
    var se = A.ReactCurrentOwner, ke = A.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var a = e._owner, u = K(e.type, e._source, a ? a.type : null);
        ke.setExtraStackFrame(u);
      } else
        ke.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (se.current) {
          var e = $(se.current.type);
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
    var Ae = {};
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
    function $e(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Tt(a);
        if (Ae[u])
          return;
        Ae[u] = !0;
        var g = "";
        e && e._owner && e._owner !== se.current && (g = " It was passed a child from " + $(e._owner.type) + "."), N(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), N(null);
      }
    }
    function Le(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var u = 0; u < e.length; u++) {
            var g = e[u];
            ue(g) && $e(g, a);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = F(e);
          if (typeof x == "function" && x !== e.entries)
            for (var S = x.call(e), w; !(w = S.next()).done; )
              ue(w.value) && $e(w.value, a);
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
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === p))
          u = a.propTypes;
        else
          return;
        if (u) {
          var g = $(a);
          pt(u, e.props, "prop", g, e);
        } else if (a.PropTypes !== void 0 && !ce) {
          ce = !0;
          var x = $(a);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var g = a[u];
          if (g !== "children" && g !== "key") {
            N(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, a, u, g, x, S) {
      {
        var w = st(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(x);
          O ? b += O : b += Fe();
          var _;
          e === null ? _ = "null" : ie(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + ($(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, b);
        }
        var R = Rt(e, a, u, x, S);
        if (R == null)
          return R;
        if (w) {
          var I = a.children;
          if (I !== void 0)
            if (g)
              if (ie(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  Le(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
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
process.env.NODE_ENV === "production" ? de.exports = Lt() : de.exports = Wt();
var l = de.exports;
const qe = V(!0), He = V((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = k(!0);
  return /* @__PURE__ */ l.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ l.jsx(He.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = z(qe);
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
}, gr = ({ children: r }) => /* @__PURE__ */ l.jsx(Mt, { children: /* @__PURE__ */ l.jsx(Nt, { children: r }) }), Yt = () => z(He), Ve = ({ formProps: r }) => {
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
}, Vt = ({ formProps: r }) => {
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
}, ze = ({
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
      ({ id: v, value: f, style: h, optionLabel: d, ...p }) => /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx(
          o,
          {
            formProps: {
              id: v,
              value: f,
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
                ...h || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ l.jsx("label", { htmlFor: v, children: d || f })
      ] }, v)
    );
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { children: n }),
      /* @__PURE__ */ l.jsx("ul", { children: c }),
      s(0)
    ] });
  }
}, zt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ l.jsx("textarea", { ...n, ...t });
}, mr = ({
  label: r,
  formProps: t,
  errors: n,
  ...o
}) => {
  const i = t, s = i[0].type, c = i.length, v = !!i[0].isSelect, f = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const h = P(
    (p) => ze({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, i, r, c]
  ), d = P(() => v ? h(Vt) : f ? h(zt) : s === "radio" || s === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: i,
    label: r,
    FormItem: Ve,
    errors: n
  }) : h(Ve), [n, i, r, v, f, h, s]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...o, children: /* @__PURE__ */ l.jsx(d, {}) });
}, ve = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Be = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Bt = ".spice__modal_close", Ut = X(
  ({ children: r, dialog: t, onOpen: n, onClose: o, focusTarget: i, ...s }, c) => {
    const {
      children: v,
      style: f,
      ...h
    } = t, d = T(null), p = P(() => {
      var y;
      Be("add"), d.current.showModal(), (y = i == null ? void 0 : i.current) == null || y.focus(), n && n(d.current);
    }, [n, i]), m = P(async () => {
      o && await ve(o(d.current)), Be("remove"), d.current.close();
    }, [o]);
    return C(() => {
      const y = d.current.querySelectorAll(Bt);
      if (y)
        return y.forEach(
          (E) => E.addEventListener("click", m)
        ), () => {
          y.forEach(
            (E) => E.removeEventListener("click", m)
          );
        };
    }, [m]), C(() => {
      const y = (E) => {
        var F;
        ((F = d.current) == null ? void 0 : F.hasAttribute("open")) && E.key === "Escape" && m();
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
          ref: d,
          onClick: (y) => {
            y.target === d.current && m();
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
            ...f || {}
          },
          ...h,
          children: v
        }
      )
    ] });
  }
);
Ut.displayName = "ModalButton";
const qt = X(
  ({ children: r, ...t }, n) => {
    const o = Yt();
    return C(() => (o(() => !1), () => {
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
const yr = (r) => {
  const t = T(null), [n, o] = k(!1), { fallback: i, ...s } = r;
  return C(() => {
    let c = !0;
    return (async () => {
      var f;
      try {
        await ((f = t.current) == null ? void 0 : f.play()), c && o(!1);
      } catch {
        c && o(!0);
      }
    })(), () => {
      c = !1;
    };
  }, [r.src]), n ? i : /* @__PURE__ */ l.jsx(Xe, { ref: t, ...s });
}, Ht = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = V(Ht), Je = V(
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
}, Ke = () => z(Ge), pe = () => z(Je), Gt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = pe(), i = Ke(), s = P(() => {
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
  const v = T(!0), f = T(null), h = pe(), d = Ke(), p = d.current === t && !d.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!d.isAnimation) {
      p && i && i(f.current);
      return;
    }
    d.prev === t && (async () => (o && await ve(o(f.current)), h((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), p && n && n(f.current);
  }, [d, h, n, o, i, t, p]), C(() => {
    Qe({
      content: f.current,
      isOpen: d.current === t
    });
  }, [d, t]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: f,
      style: {
        ...d.current !== t ? {
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
      "aria-hidden": d.current !== t,
      ...c,
      children: r
    }
  );
}, Kt = () => {
  const r = pe();
  return (t, n) => {
    r((o) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? o.current : "",
      current: n ? o.current : t,
      next: n ? t : ""
    }));
  };
}, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Gt,
  Content: Jt,
  Context: Xt,
  useTabSwitch: Kt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = V(Qt), et = V(() => {
}), Zt = ({ children: r, defaultValue: t }) => {
  const [n, o] = k({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ l.jsx(et.Provider, { value: o, children: r }) });
}, tt = () => z(Ze), er = () => z(et), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), i = er(), s = D(
    () => !!o.defaultValue.find((f) => f === t),
    [o, t]
  ), [c, v] = k(s);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        i((f) => ({
          ...f,
          toggle: c,
          target: t
        })), v(!c);
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
  const i = T(0), s = T(!0);
  C(() => {
    const c = new ResizeObserver((f) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(f[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return c.observe(v), () => {
        c.unobserve(v), clearTimeout(i.current);
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
  ), [v, f] = k(c);
  D(() => {
    s.target === r && f(!v);
  }, [s.target, s.toggle]);
  const h = T(!0), d = T(null), p = T(null);
  return C(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const m = {
      height: p.current.getBoundingClientRect().height,
      target: d.current
    };
    v ? t(m) : n(m);
  }, [v, t, n]), C(() => {
    Qe({ content: d.current, isOpen: v });
  }, [v]), rr({
    targetRef: p,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      v && (d.current.style.height = `${y}px`);
    },
    dependencies: [v],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: d,
      style: {
        overflow: "hidden",
        height: c ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ l.jsx("div", { ref: p, ...i, children: o })
    }
  );
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  const v = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), f = T(null), h = P(
    ({
      digitContainer: p,
      numbersTarget: m,
      digit: y,
      digitNumber: E,
      currentPercent: W,
      limit: F,
      destination: A
    }) => {
      if (v[y] !== E && W <= F) {
        const j = E.toString(), ee = (Math.min(8, E) + 1).toString(), te = W >= F;
        m[0].innerText = j, m[1].innerText = te ? "0" : ee, i && i({
          digitContainer: p,
          percent: W,
          digit: y,
          destination: A,
          duration: r / (A / y)
        }), v[y] = E;
      }
    },
    [v, i, r]
  ), d = P(
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
      clearInterval(f.current), f.current = setInterval(async () => {
        const E = v.to += 1, W = async () => {
          clearInterval(f.current), E > 100 && c && await ve(c(y.getAll())), m(E - 1);
        };
        E === 1 && s && s(y.getAll()), E > p && await W();
        const F = Math.floor(E / 100) % 100, A = Math.floor(E / 10) % 10, j = E % 10;
        h({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: E,
          numbersTarget: y.ones,
          limit: 90,
          destination: p
        }), h({
          digitContainer: n.current,
          digit: 10,
          digitNumber: A,
          currentPercent: E,
          numbersTarget: y.tens,
          limit: 90,
          destination: p
        }), v[100] !== F && (y.hundreds[1].innerText = F.toString(), i && i({
          digitContainer: o.current,
          percent: E,
          digit: 100,
          destination: p,
          duration: r / (p / 10)
        }), v[100] = F);
      }, Math.max(1e3 / 60, r / p * 1e3));
    })),
    [
      v,
      h,
      n,
      o,
      t,
      c,
      i,
      s,
      r
    ]
  );
  return C(() => () => {
    clearInterval(f.current);
  }, []), d;
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
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  const v = {
    rootMargin: t,
    threshold: n
  };
  C(() => {
    const f = r == null ? void 0 : r.current;
    if (!f)
      return;
    const h = (p, m) => {
      p.forEach((y) => {
        y.isIntersecting && i ? (i(y), o && m.unobserve(y.target)) : !y.isIntersecting && s && s(y);
      });
    }, d = new IntersectionObserver(h, v);
    return d.observe(f), () => {
      d.unobserve(f);
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
  C(() => (fe.ticker.add(r, t, n), () => fe.ticker.remove(r)), [t, n, r]);
}, Er = ({
  children: r,
  isReverse: t = !1,
  speed: n = 1,
  style: o,
  ...i
}) => {
  const s = T(null), c = T(null), v = T(null), f = ar({
    targetRef: s,
    once: !1
  }), h = T(0);
  return sr(() => {
    if (!f)
      return;
    const d = s.current, p = c.current, m = v.current;
    if (!d || !p || !m)
      return;
    const y = fe.ticker.deltaRatio() / 1e3, E = d.clientWidth / p.clientWidth;
    h.current += y * n * E, h.current >= 1 && (h.current = 0), t ? (p.style.transform = `translateX(${h.current * -100}%)`, m.style.transform = `translateX(${100 - h.current * 100}%)`) : (p.style.transform = `translateX(${h.current * 100}%)`, m.style.transform = `translateX(${h.current * 100 - 200}%)`);
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
            /* @__PURE__ */ l.jsx("div", { ref: v, children: r })
          ]
        }
      )
    }
  );
}, Sr = ({
  type: r = "chars",
  text: t,
  ...n
}) => {
  const o = r === "chars" ? "" : " ";
  return D(
    () => t.split(`
`).flatMap((s, c, v) => [
      ...s.split(o).map(
        (f, h) => f === " " ? /* @__PURE__ */ l.jsx("span", { ...n, children: " " }, `${c}-${h}`) : /* @__PURE__ */ l.jsx("span", { ...n, children: f }, `${c}-${h}`)
      ),
      c < v.length - 1 ? /* @__PURE__ */ l.jsx("br", {}, c) : null
    ]),
    [o, t, n]
  );
}, _r = ({
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
    ...v
  }, f) => {
    const [h, d] = k(t === 0), p = !!s;
    return C(() => {
      t !== 0 && setTimeout(() => d(!0), t);
    }, [t]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: f,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...p ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...c
        },
        ...v,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...h ? {
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
const ur = typeof document < "u" ? At : C, he = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = T(0), i = T(0), s = P(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [r, t]);
  C(() => (o.current = window.innerWidth, window.addEventListener("resize", s), () => {
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
}, vr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Rr = ({
  reloadThresholds: r = [],
  isFixViewportForSmall: t = !0,
  areYouFun: n = !1
} = {}) => {
  const o = P(
    (i) => {
      t && vr(i);
    },
    [t]
  );
  he({
    onResize: ({ initWinW: i, winW: s }) => {
      r.length > 0 && r.forEach(
        (c) => lr({
          initWinW: i,
          winW: s,
          threshold: c
        })
      ), o(s);
    },
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), n && process.env.NODE_ENV !== "development" && dr();
  }, [n, o]);
}, jr = () => {
  const [r, t] = k(null), n = P(() => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return he({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, le = "scroll", Tr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const o = T(null), [i, s] = $t(
    (d, p) => {
      switch (p.type) {
        case le:
          return o.current = p.payload, p.payload;
        default:
          return d;
      }
    },
    o.current
  ), c = T(0), v = T(0), f = () => window.scrollY || document.documentElement.scrollTop, h = P(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const d = f();
      d > c.current + r && o.current !== "down" ? s({ type: le, payload: "down" }) : d < c.current - r && o.current !== "up" && s({ type: le, payload: "up" }), c.current = d;
    }, t);
  }, [t, r]);
  return C(() => (c.current = f(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(v.current);
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
  return he({
    onResize: ({ winW: s }) => i(s),
    debounce: 100,
    dependencies: []
  }), C(() => i(window.innerWidth), [i]), n;
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
  ), v = D(
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
  ), f = D(
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
  ), h = D(
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
  ), d = D(
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
    Facebook: v,
    X: f,
    LINE: h,
    share: d,
    copy: y,
    isCopied: p
  };
}, Pr = () => {
  const [r, t] = k(void 0), n = r === "iOS" || r === "Android";
  return ur(() => {
    const o = navigator.userAgent;
    /iPhone|iPad|iPod/i.test(o) ? t("iOS") : /Android/i.test(o) && t("Android");
  }, []), {
    device: r,
    isMobile: n
  };
};
export {
  wr as Accordion,
  Er as AutoScrollContainer,
  _r as FocusTrap,
  mr as FormField,
  cr as Loader,
  xr as LoadingProgress,
  yr as LowPowerVideo,
  Ut as ModalButton,
  gr as SpiceWrapper,
  Sr as SplitText,
  qt as StickyItem,
  br as Tab,
  Xe as Video,
  Pr as useDeviceDetector,
  sr as useFrame,
  ir as useIntersectionObserver,
  ar as useIsIntersecting,
  jr as useIsTouchDevice,
  ur as useIsomorphicLayoutEffect,
  Cr as useMediaQuery,
  Yt as useOverflowDispatch,
  rr as useResizeObserver,
  Tr as useScrollDirection,
  Or as useShare,
  Rr as useStarter,
  he as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
