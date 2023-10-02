import He, { createContext as W, useState as D, useContext as k, useEffect as S, useRef as j, useMemo as At, useCallback as A, useLayoutEffect as Lt, useReducer as It } from "react";
var de = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Nt() {
  if (We)
    return z;
  We = 1;
  var i = He, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, _) {
    var h, v = {}, y = null, P = null;
    _ !== void 0 && (y = "" + _), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (h in f)
      r.call(f, h) && !c.hasOwnProperty(h) && (v[h] = f[h]);
    if (u && u.defaultProps)
      for (h in f = u.defaultProps, f)
        v[h] === void 0 && (v[h] = f[h]);
    return { $$typeof: t, type: u, key: y, ref: P, props: v, _owner: s.current };
  }
  return z.Fragment = o, z.jsx = l, z.jsxs = l, z;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Mt() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var i = He, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H = Symbol.iterator, Z = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = H && e[H] || e[Z];
      return typeof n == "function" ? n : null;
    }
    var q = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          a[p - 1] = arguments[p];
        R("error", e, a);
      }
    }
    function R(e, n, a) {
      {
        var p = q.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (n += "%s", a = a.concat([w]));
        var b = a.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var nt = !1, ot = !1, it = !1, st = !1, at = !1, he;
    he = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === c || at || e === s || e === _ || e === h || st || e === P || nt || ot || it || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function ut(e, n, a) {
      var p = e.displayName;
      if (p)
        return p;
      var w = n.displayName || n.name || "";
      return w !== "" ? a + "(" + w + ")" : a;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case _:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return me(n) + ".Consumer";
          case l:
            var a = e;
            return me(a._context) + ".Provider";
          case f:
            return ut(e, e.render, "ForwardRef");
          case v:
            var p = e.displayName || null;
            return p !== null ? p : $(e.type) || "Memo";
          case y: {
            var w = e, b = w._payload, g = w._init;
            try {
              return $(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, V = 0, ge, we, be, ye, xe, Ee, Re;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function lt() {
      {
        if (V === 0) {
          ge = console.log, we = console.info, be = console.warn, ye = console.error, xe = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
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
        V++;
      }
    }
    function dt() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ge
            }),
            info: L({}, e, {
              value: we
            }),
            warn: L({}, e, {
              value: be
            }),
            error: L({}, e, {
              value: ye
            }),
            group: L({}, e, {
              value: xe
            }),
            groupCollapsed: L({}, e, {
              value: Ee
            }),
            groupEnd: L({}, e, {
              value: Re
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = q.ReactCurrentDispatcher, te;
    function G(e, n, a) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (w) {
            var p = w.stack.trim().match(/\n( *(at )?)/);
            te = p && p[1] || "";
          }
        return `
` + te + e;
      }
    }
    var re = !1, J;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ft();
    }
    function Te(e, n) {
      if (!e || re)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var p;
      re = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ee.current, ee.current = null, lt();
      try {
        if (n) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (F) {
              p = F;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (F) {
              p = F;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            p = F;
          }
          e();
        }
      } catch (F) {
        if (F && p && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), C = p.stack.split(`
`), x = m.length - 1, E = C.length - 1; x >= 1 && E >= 0 && m[x] !== C[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (m[x] !== C[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || m[x] !== C[E]) {
                    var O = `
` + m[x].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, O), O;
                  }
                while (x >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        re = !1, ee.current = b, dt(), Error.prepareStackTrace = w;
      }
      var M = e ? e.displayName || e.name : "", Me = M ? G(M) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function pt(e, n, a) {
      return Te(e, !1);
    }
    function _t(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function K(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, _t(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case _:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return pt(e.render);
          case v:
            return K(e.type, n, a);
          case y: {
            var p = e, w = p._payload, b = p._init;
            try {
              return K(b(w), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Se = {}, Ce = q.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, a = K(e.type, e._source, n ? n.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function vt(e, n, a, p, w) {
      {
        var b = Function.call.bind(X);
        for (var g in e)
          if (b(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var C = Error((p || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              m = e[g](n, g, p, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Q(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", a, g, typeof m), Q(null)), m instanceof Error && !(m.message in Se) && (Se[m.message] = !0, Q(w), T("Failed %s type: %s", a, m.message), Q(null));
          }
      }
    }
    var ht = Array.isArray;
    function ne(e) {
      return ht(e);
    }
    function mt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function gt(e) {
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
      if (gt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Oe(e);
    }
    var Y = q.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Fe, oe;
    oe = {};
    function bt(e) {
      if (X.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (X.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, n) {
      if (typeof e.ref == "string" && Y.current && n && Y.current.stateNode !== n) {
        var a = $(Y.current.type);
        oe[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(Y.current.type), e.ref), oe[a] = !0);
      }
    }
    function Et(e, n) {
      {
        var a = function() {
          $e || ($e = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Rt(e, n) {
      {
        var a = function() {
          Fe || (Fe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var jt = function(e, n, a, p, w, b, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: g,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Tt(e, n, a, p, w) {
      {
        var b, g = {}, m = null, C = null;
        a !== void 0 && (Pe(a), m = "" + a), yt(n) && (Pe(n.key), m = "" + n.key), bt(n) && (C = n.ref, xt(n, w));
        for (b in n)
          X.call(n, b) && !wt.hasOwnProperty(b) && (g[b] = n[b]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (b in x)
            g[b] === void 0 && (g[b] = x[b]);
        }
        if (m || C) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(g, E), C && Rt(g, E);
        }
        return jt(e, m, C, w, p, Y.current, g);
      }
    }
    var ie = q.ReactCurrentOwner, De = q.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var n = e._owner, a = K(e.type, e._source, n ? n.type : null);
        De.setExtraStackFrame(a);
      } else
        De.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function qe() {
      {
        if (ie.current) {
          var e = $(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function St(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + n + ":" + a + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function Ct(e) {
      {
        var n = qe();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function Le(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Ct(n);
        if (Ae[a])
          return;
        Ae[a] = !0;
        var p = "";
        e && e._owner && e._owner !== ie.current && (p = " It was passed a child from " + $(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, p), N(null);
      }
    }
    function Ie(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var a = 0; a < e.length; a++) {
            var p = e[a];
            ae(p) && Le(p, n);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = I(e);
          if (typeof w == "function" && w !== e.entries)
            for (var b = w.call(e), g; !(g = b.next()).done; )
              ae(g.value) && Le(g.value, n);
        }
      }
    }
    function Ot(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var a;
        if (typeof n == "function")
          a = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === v))
          a = n.propTypes;
        else
          return;
        if (a) {
          var p = $(n);
          vt(a, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !se) {
          se = !0;
          var w = $(n);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var p = n[a];
          if (p !== "children" && p !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Ne(e, n, a, p, w, b) {
      {
        var g = ct(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = St(w);
          C ? m += C : m += qe();
          var x;
          e === null ? x = "null" : ne(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + ($(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var E = Tt(e, n, a, w, b);
        if (E == null)
          return E;
        if (g) {
          var O = n.children;
          if (O !== void 0)
            if (p)
              if (ne(O)) {
                for (var M = 0; M < O.length; M++)
                  Ie(O[M], e);
                Object.freeze && Object.freeze(O);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(O, e);
        }
        return e === r ? Pt(E) : Ot(E), E;
      }
    }
    function $t(e, n, a) {
      return Ne(e, n, a, !0);
    }
    function Ft(e, n, a) {
      return Ne(e, n, a, !1);
    }
    var Dt = Ft, qt = $t;
    U.Fragment = r, U.jsx = Dt, U.jsxs = qt;
  }()), U;
}
process.env.NODE_ENV === "production" ? de.exports = Nt() : de.exports = Mt();
var d = de.exports;
const Wt = "_spice_wrapper_1b9je_1", kt = "_spice_wrapper_hidden_1b9je_10", Ve = {
  spice_wrapper: Wt,
  spice_wrapper_hidden: kt
}, Ge = W(!0), Je = W((i) => !i), Vt = ({ children: i }) => {
  const [t, o] = D(!0);
  return /* @__PURE__ */ d.jsx(Ge.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Je.Provider, { value: o, children: i }) });
}, Yt = ({ children: i }) => {
  const t = k(Ge);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${Ve.spice_wrapper} ${t ? Ve.spice_wrapper_hidden : ""}`,
      children: i
    }
  );
}, Dr = ({ children: i }) => /* @__PURE__ */ d.jsx(Vt, { children: /* @__PURE__ */ d.jsx(Yt, { children: i }) }), zt = () => k(Je), Ut = "_spice_aside_aside_4cj7n_1", Bt = "_spice_aside_main_4cj7n_5", ce = {
  spice_aside_aside: Ut,
  spice_aside_main: Bt
}, qr = ({
  className: i,
  children: t,
  aside: o,
  isSticky: r = !1
}) => {
  const s = zt();
  return S(() => (r && s(() => !1), () => {
    s(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: i || "", children: [
    o.index === 1 && /* @__PURE__ */ d.jsx("div", { className: ce.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${ce.spice_aside_aside} ${o.className ? o.className : ""}`,
        children: o.chidren
      }
    ),
    o.index === 0 && /* @__PURE__ */ d.jsx("div", { className: ce.spice_aside_main, children: t })
  ] });
}, Ht = "_spice_form_input_yxowj_1", Gt = "_spice_form_select_yxowj_2", Jt = "_spice_form_radioCheckInput_yxowj_8", fe = {
  spice_form_input: Ht,
  spice_form_select: Gt,
  spice_form_radioCheckInput: Jt
}, Ye = ({
  formProps: i,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...i,
    className: `${fe.spice_form_input} ${t || ""}`
  }
), Kt = ({ formProps: i }) => {
  const { isSelect: t, ...o } = i;
  if (!t)
    return;
  const r = t.options.map((l) => /* @__PURE__ */ d.jsx("option", { value: l, children: l }, l)), s = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: l }) : null;
  }, c = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      ...o,
      className: fe.spice_form_select,
      defaultValue: c(),
      children: [
        /* @__PURE__ */ d.jsx(s, {}),
        r
      ]
    }
  );
}, ze = ({
  layoutType: i,
  formPropsArr: t,
  label: o,
  FormItem: r,
  errors: s
}) => {
  const c = (l) => !s || !s[l] ? null : s[l];
  if (i === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      c(0)
    ] });
  if (i === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (i === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: fe.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { children: o }),
      /* @__PURE__ */ d.jsx("ul", { children: l }),
      c(0)
    ] });
  }
}, Xt = ({ formProps: i }) => {
  const { isTextarea: t, ...o } = i;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...o, ...t });
}, Ar = ({
  className: i,
  label: t,
  formProps: o,
  errors: r
}) => {
  const s = o, c = s[0].type, l = s.length, u = !!s[0].isSelect, f = !!s[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const _ = (v) => ze({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: s,
    label: t,
    FormItem: v,
    errors: r
  }), h = () => u ? _(Kt) : f ? _(Xt) : c === "radio" || c === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Ye,
    errors: r
  }) : _(Ye);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${i}`, children: /* @__PURE__ */ d.jsx(h, {}) });
}, pe = (i) => new Promise((t) => {
  i instanceof Promise ? i.then(() => {
    t(null);
  }) : t(null);
}), Qt = "_spice_dropdown_wrapper_1nq94_1", Zt = "_spice_dropdown_content_1nq94_5", er = "_spice_dropdown_content_hidden_1nq94_10", tr = "_spice_dropdown_content_pointerPrevent_1nq94_15", B = {
  spice_dropdown_wrapper: Qt,
  spice_dropdown_content: Zt,
  spice_dropdown_content_hidden: er,
  spice_dropdown_content_pointerPrevent: tr,
  "spice_dropdown_top-center": "_spice_dropdown_top-center_1nq94_22",
  "spice_dropdown_top-left": "_spice_dropdown_top-left_1nq94_28",
  "spice_dropdown_top-right": "_spice_dropdown_top-right_1nq94_33",
  "spice_dropdown_bottom-center": "_spice_dropdown_bottom-center_1nq94_41",
  "spice_dropdown_bottom-left": "_spice_dropdown_bottom-left_1nq94_47",
  "spice_dropdown_bottom-right": "_spice_dropdown_bottom-right_1nq94_52",
  "spice_dropdown_left-top": "_spice_dropdown_left-top_1nq94_60",
  "spice_dropdown_left-center": "_spice_dropdown_left-center_1nq94_65",
  "spice_dropdown_left-bottom": "_spice_dropdown_left-bottom_1nq94_71",
  "spice_dropdown_right-top": "_spice_dropdown_right-top_1nq94_79",
  "spice_dropdown_right-center": "_spice_dropdown_right-center_1nq94_84",
  "spice_dropdown_right-bottom": "_spice_dropdown_right-bottom_1nq94_90"
}, Lr = ({
  position: i,
  parent: t,
  content: o,
  callback: r,
  className: s
}) => {
  const c = j(null), l = j(!1), [u, f] = D(!1), [_, h] = D(!0), v = () => {
    l.current = !0, h(!1), f(!0), r != null && r.onEnter && r.onEnter(c.current);
  }, y = async () => {
    l.current = !1, h(!0), r != null && r.onLeave && await pe(r.onLeave(c.current)), l.current || f(!1);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: v,
      onMouseLeave: y,
      onClick: y,
      className: `${B.spice_dropdown_wrapper} ${s || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: c,
            className: `${B.spice_dropdown_content} ${u ? "" : B.spice_dropdown_content_hidden} ${_ ? B.spice_dropdown_content_pointerPrevent : ""} ${B["spice_dropdown_" + i]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, rr = (i, t = []) => {
  i > 60 && (i = 60);
  const o = Math.floor(1e3 / i);
  let r = performance.now();
  const s = (u) => {
    const f = u - r, _ = f <= o;
    return _ || (r = u - f % o), _;
  }, c = {
    callback: null,
    isPlay: !1,
    id: 0
  }, l = (u) => {
    c.id = requestAnimationFrame(l), !s(u) && c.callback && c.isPlay && c.callback();
  };
  return S(() => (c.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(c.id);
  }), t), (u, f) => {
    if (u === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      c.callback = f, c.isPlay = !0;
    } else
      u === "pause" && (c.isPlay = !1);
  };
}, nr = "_spice_magnet_stopPropagation_99wvn_1", or = {
  spice_magnet_stopPropagation: nr
}, Ir = ({
  className: i,
  children: t,
  callback: o,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: c = !1,
  dependencies: l = []
}) => {
  const u = j(null), f = j(null), _ = j(), h = rr(r, l), v = At(
    () => ({
      target: u.current,
      children: f.current,
      x: 0,
      y: 0
    }),
    []
  ), y = A(
    (R) => {
      v.target = u.current, v.children = f.current;
    },
    [v]
  ), P = A(
    (R) => {
      _.current = R.currentTarget.getBoundingClientRect(), v.x = R.clientX - _.current.left - _.current.width / 2, v.y = R.clientY - _.current.top - _.current.height / 2;
    },
    [v]
  ), H = A(
    (R) => {
      R.stopPropagation(), y(R), P(R), h("play", () => {
        o.onMove(v);
      });
    },
    [y, P, h, o, v]
  ), Z = A(
    (R) => {
      R.stopPropagation(), P(R);
    },
    [P]
  ), I = A(
    (R) => {
      R.stopPropagation(), h("pause"), o.onLeave && o.onLeave(v);
    },
    [h, o, v]
  ), q = A(
    (R) => {
      I(R);
    },
    [I]
  ), T = A(
    (R) => {
      c && I(R);
    },
    [I, c]
  );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: H,
      onMouseMove: Z,
      onMouseLeave: q,
      onClick: T,
      className: i || "",
      ref: u,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: f,
          className: s ? or.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, ir = "_spice_thumbnail_wrapper_1qqot_1", sr = "_spice_thumbnail_view_1qqot_5", ar = "_spice_thumbnail_golden_1qqot_26", cr = "_spice_thumbnail_silver_1qqot_30", ur = "_spice_thumbnail_platinum_1qqot_34", lr = "_spice_thumbnail_square_1qqot_42", ue = {
  spice_thumbnail_wrapper: ir,
  spice_thumbnail_view: sr,
  spice_thumbnail_golden: ar,
  spice_thumbnail_silver: cr,
  spice_thumbnail_platinum: ur,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: lr,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, Nr = ({ ratio: i, children: t, className: o }) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let s = r.includes(i), c = typeof i == "number" && i > 0;
  if (!s && !c)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ue.spice_thumbnail_wrapper} ${o || ""}`,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `${ue.spice_thumbnail_view} ${s ? ue["spice_thumbnail_" + i] : ""}`,
          style: c ? { paddingTop: `${i}%` } : {},
          children: t
        }
      )
    }
  );
}, Ue = (i) => {
  const t = document.documentElement.style, o = document.body.style;
  i === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, dr = "_spice_modal_dialog_1t31c_1", fr = {
  spice_modal_dialog: dr
}, Mr = ({ children: i, className: t, dialog: o, callback: r }) => {
  const s = j(null), c = () => {
    Ue("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, l = async () => {
    r != null && r.onClose && await pe(r.onClose(s.current)), Ue("remove"), s.current.close();
  };
  return S(() => {
    const u = s.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((f) => {
      f.addEventListener("click", () => {
        l();
      });
    });
  }, []), S(() => {
    const u = (f) => {
      var h;
      ((h = s.current) == null ? void 0 : h.hasAttribute("open")) && f.key === "Escape" && l();
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, []), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          c();
        },
        children: i
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: s,
        onClick: (u) => {
          u.target === s.current && l();
        },
        className: `${fr.spice_modal_dialog} ${o.className ? o.className : ""}`,
        children: o.children
      }
    )
  ] });
}, pr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ke = W(pr), Xe = W(
  () => {
  }
), _r = ({ children: i, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, r] = D({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Ke.Provider, { value: o, children: /* @__PURE__ */ d.jsx(Xe.Provider, { value: r, children: i }) });
}, Qe = () => k(Ke), _e = () => k(Xe), vr = ({ children: i, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = _e(), s = Qe(), c = () => {
    s.current === t || s.isLeaving || r((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: c,
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: i
    }
  );
}, hr = "_spice_tab_hidden_1r0oa_1", mr = {
  spice_tab_hidden: hr
}, Ze = ({ content: i, isOpen: t }) => {
  const o = i.querySelectorAll("a,button");
  if (!o)
    return;
  const r = t ? "0" : "-1";
  o.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, gr = ({ children: i, value: t, className: o, callback: r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = j(!0), c = j(null), l = _e(), u = Qe(), f = u.current === t && !u.isLeaving;
  return S(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.onReset && r.onReset(c.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await pe(r.onClose(c.current)), l((_) => ({
      ..._,
      isLeaving: !1,
      prev: "",
      current: _.next,
      next: ""
    }))))(), f && r != null && r.onOpen && r.onOpen(c.current);
  }, [u, l, r, t, f]), S(() => {
    Ze({
      content: c.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${u.current !== t ? mr.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: i
    }
  );
}, wr = () => {
  const i = _e();
  return (t, o) => {
    i((r) => ({
      isAnimation: o,
      isLeaving: o,
      prev: o ? r.current : "",
      current: o ? r.current : t,
      next: o ? t : ""
    }));
  };
}, Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: vr,
  Content: gr,
  Context: _r,
  useTabSwitch: wr
}, Symbol.toStringTag, { value: "Module" })), br = {
  target: "",
  toggle: !1,
  defaultValue: []
}, et = W(br), tt = W(() => {
}), yr = ({ children: i, defaultValue: t }) => {
  const [o, r] = D({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(et.Provider, { value: o, children: /* @__PURE__ */ d.jsx(tt.Provider, { value: r, children: i }) });
}, rt = () => k(et), xr = () => k(tt), Er = ({ children: i, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = rt(), s = xr(), c = !!r.defaultValue.find(
    (f) => f === t
  ), [l, u] = D(c);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        s((f) => ({
          ...f,
          toggle: l,
          target: t
        })), u(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: i
    }
  );
}, Rr = "_spice_accordion_content_1wkzs_1", jr = "_spice_accordion_hidden_1wkzs_5", Be = {
  spice_accordion_content: Rr,
  spice_accordion_hidden: jr
}, Tr = ({
  targetRef: i,
  callback: t,
  debounce: o,
  dependencies: r = []
}) => {
  const s = j(0), c = j(!0);
  S(() => {
    const l = new ResizeObserver((f) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(f[0].target);
      }, o);
    }), u = i.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(s.current);
      };
  }, r);
}, Sr = ({ value: i, callback: t, children: o, className: r }) => {
  if (i === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = j(!0), c = j(null), l = j(null), u = rt(), f = !!u.defaultValue.find(
    (v) => v === i
  ), [_, h] = D(f);
  return S(() => {
    u.target === i && h(!_);
  }, [u.target, u.toggle]), S(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    const v = {
      height: l.current.getBoundingClientRect().height,
      target: c.current
    };
    _ ? t.onOpen(v) : t.onClose(v);
  }, [_]), S(() => {
    Ze({ content: c.current, isOpen: _ });
  }, [_]), Tr({
    targetRef: l,
    callback: (v) => {
      const y = v.getBoundingClientRect().height;
      _ && (c.current.style.height = `${y}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${Be.spice_accordion_content} ${f ? "" : Be.spice_accordion_hidden}`,
      id: `content-${i}`,
      "aria-labelledby": `button-${i}`,
      "aria-hidden": !_,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: r || "", children: o })
    }
  );
}, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Er,
  Content: Sr,
  Context: yr
}, Symbol.toStringTag, { value: "Module" })), Vr = typeof document < "u" ? Lt : S, Yr = ({
  targetRef: i,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: r,
  callback: s,
  dependencies: c = []
}) => {
  const l = {
    rootMargin: t,
    threshold: o
  };
  S(() => {
    const u = i == null ? void 0 : i.current;
    if (!u)
      return;
    const f = (h, v) => {
      h.forEach((y) => {
        y.isIntersecting && s.onEnter ? (s.onEnter(y.target), r && v.unobserve(y.target)) : !y.isIntersecting && s.onLeave && s.onLeave(y.target);
      });
    }, _ = new IntersectionObserver(f, l);
    return _.observe(u), () => {
      _.unobserve(u);
    };
  }, c);
}, ve = ({
  callback: i,
  debounce: t,
  dependencies: o = []
}) => {
  const r = j(0), s = j(0), c = () => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      i({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  S(() => (r.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(s.current);
  }), o);
}, Cr = ({ initWinW: i, winW: t, threshold: o }) => {
  let r = !(i <= o);
  t <= o ? r && window.location.reload() : !r && window.location.reload();
}, Or = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Pr = () => {
  console.log(Or);
}, $r = (i) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = i > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, zr = ({
  reloadThresholds: i,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const r = A(
    (s) => {
      t && $r(s);
    },
    [t]
  );
  ve({
    callback({ initWinW: s, winW: c }) {
      i && i.forEach((l) => {
        Cr({
          initWinW: s,
          winW: c,
          threshold: l
        });
      }), r(c);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), o && process.env.NODE_ENV !== "development" && Pr();
  }, [o, r]);
}, Ur = () => {
  const [i, t] = D(null), o = () => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  };
  return ve({
    callback() {
      o();
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    o();
  }, []), i;
}, le = "scroll", Br = ({
  threshold: i = 0,
  debounce: t,
  dependencies: o = []
}) => {
  const r = j(null), [s, c] = It(
    (h, v) => {
      switch (v.type) {
        case le:
          return r.current = v.payload, v.payload;
        default:
          return h;
      }
    },
    r.current
  ), l = j(0), u = j(0), f = () => window.scrollY || document.documentElement.scrollTop, _ = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const h = f();
      h > l.current + i && r.current !== "down" ? c({ type: le, payload: "down" }) : h < l.current - i && r.current !== "up" && c({ type: le, payload: "up" }), l.current = h;
    }, t);
  };
  return S(() => (l.current = f(), window.addEventListener("scroll", _, { passive: !0 }), () => {
    window.removeEventListener("scroll", _), clearTimeout(u.current);
  }), o), s;
}, Hr = ({ type: i, width: t }) => {
  const [o, r] = D(null), s = (c) => {
    switch (i) {
      case "max":
        r(t >= c);
        break;
      case "min":
        r(t <= c);
        break;
    }
  };
  return ve({
    callback: ({ winW: c }) => {
      s(c);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    s(window.innerWidth);
  }, []), o;
};
export {
  kr as Accordion,
  qr as AsideLayout,
  Lr as Dropdown,
  Ar as FormField,
  Ir as Magnet,
  Mr as Modal,
  Wr as Tab,
  Nr as Thumbnail,
  Dr as WrapperLayout,
  rr as useAnimationFrame,
  Yr as useIntersectionObserver,
  Ur as useIsTouchDevice,
  Vr as useIsomorphicLayoutEffect,
  Hr as useMediaQuery,
  Tr as useResizeObserver,
  Br as useScrollDirection,
  zr as useStarter,
  ve as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
