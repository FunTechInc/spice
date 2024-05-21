import Ke, { useLayoutEffect as qt, useEffect as O, createContext as V, useContext as B, useState as D, useCallback as S, useRef as b, useMemo as k, forwardRef as he, memo as Yt, useReducer as Vt } from "react";
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
var Ve;
function Bt() {
  if (Ve)
    return H;
  Ve = 1;
  var n = Ke, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, f, p) {
    var _, v = {}, g = null, E = null;
    p !== void 0 && (g = "" + p), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (_ in f)
      r.call(f, _) && !s.hasOwnProperty(_) && (v[_] = f[_]);
    if (u && u.defaultProps)
      for (_ in f = u.defaultProps, f)
        v[_] === void 0 && (v[_] = f[_]);
    return { $$typeof: t, type: u, key: g, ref: E, props: v, _owner: i.current };
  }
  return H.Fragment = o, H.jsx = c, H.jsxs = c, H;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function zt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ke, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), j = Symbol.iterator, A = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = j && e[j] || e[A];
      return typeof a == "function" ? a : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++)
          l[h - 1] = arguments[h];
        R("error", e, l);
      }
    }
    function R(e, a, l) {
      {
        var h = I.ReactDebugCurrentFrame, y = h.getStackAddendum();
        y !== "" && (a += "%s", l = l.concat([y]));
        var x = l.map(function(w) {
          return String(w);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var oe = !1, lt = !1, dt = !1, ft = !1, pt = !1, we;
    we = Symbol.for("react.module.reference");
    function _t(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === s || pt || e === i || e === p || e === _ || ft || e === E || oe || lt || dt || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === we || e.getModuleId !== void 0));
    }
    function vt(e, a, l) {
      var h = e.displayName;
      if (h)
        return h;
      var y = a.displayName || a.name || "";
      return y !== "" ? l + "(" + y + ")" : l;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function N(e) {
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
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var a = e;
            return ye(a) + ".Consumer";
          case c:
            var l = e;
            return ye(l._context) + ".Provider";
          case f:
            return vt(e, e.render, "ForwardRef");
          case v:
            var h = e.displayName || null;
            return h !== null ? h : N(e.type) || "Memo";
          case g: {
            var y = e, x = y._payload, w = y._init;
            try {
              return N(w(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, z = 0, xe, be, Ee, je, Se, Te, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function ht() {
      {
        if (z === 0) {
          xe = console.log, be = console.info, Ee = console.warn, je = console.error, Se = console.group, Te = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        z++;
      }
    }
    function mt() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: xe
            }),
            info: W({}, e, {
              value: be
            }),
            warn: W({}, e, {
              value: Ee
            }),
            error: W({}, e, {
              value: je
            }),
            group: W({}, e, {
              value: Se
            }),
            groupCollapsed: W({}, e, {
              value: Te
            }),
            groupEnd: W({}, e, {
              value: Re
            })
          });
        }
        z < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = I.ReactCurrentDispatcher, se;
    function J(e, a, l) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (y) {
            var h = y.stack.trim().match(/\n( *(at )?)/);
            se = h && h[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ae = !1, K;
    {
      var gt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new gt();
    }
    function Pe(e, a) {
      if (!e || ae)
        return "";
      {
        var l = K.get(e);
        if (l !== void 0)
          return l;
      }
      var h;
      ae = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, ht();
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
            } catch (M) {
              h = M;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (M) {
              h = M;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            h = M;
          }
          e();
        }
      } catch (M) {
        if (M && h && typeof M.stack == "string") {
          for (var m = M.stack.split(`
`), F = h.stack.split(`
`), C = m.length - 1, P = F.length - 1; C >= 1 && P >= 0 && m[C] !== F[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== F[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== F[P]) {
                    var L = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, L), L;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, mt(), Error.prepareStackTrace = y;
      }
      var Y = e ? e.displayName || e.name : "", Ye = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ye), Ye;
    }
    function wt(e, a, l) {
      return Pe(e, !1);
    }
    function yt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function Q(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, yt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case p:
          return J("Suspense");
        case _:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return wt(e.render);
          case v:
            return Q(e.type, a, l);
          case g: {
            var h = e, y = h._payload, x = h._init;
            try {
              return Q(x(y), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Oe = {}, $e = I.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var a = e._owner, l = Q(e.type, e._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    function xt(e, a, l, h, y) {
      {
        var x = Function.call.bind(Z);
        for (var w in e)
          if (x(e, w)) {
            var m = void 0;
            try {
              if (typeof e[w] != "function") {
                var F = Error((h || "React class") + ": " + l + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              m = e[w](a, w, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ee(y), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, w, typeof m), ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ee(y), T("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var bt = Array.isArray;
    function ce(e) {
      return bt(e);
    }
    function Et(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function jt(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Ie(e) {
      if (jt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), Fe(e);
    }
    var U = I.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ae, ue;
    ue = {};
    function Tt(e) {
      if (Z.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rt(e) {
      if (Z.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ct(e, a) {
      if (typeof e.ref == "string" && U.current && a && U.current.stateNode !== a) {
        var l = N(U.current.type);
        ue[l] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(U.current.type), e.ref), ue[l] = !0);
      }
    }
    function Pt(e, a) {
      {
        var l = function() {
          De || (De = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Ot(e, a) {
      {
        var l = function() {
          Ae || (Ae = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var $t = function(e, a, l, h, y, x, w) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: w,
        // Record the component responsible for creating this element.
        _owner: x
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
        value: h
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Ft(e, a, l, h, y) {
      {
        var x, w = {}, m = null, F = null;
        l !== void 0 && (Ie(l), m = "" + l), Rt(a) && (Ie(a.key), m = "" + a.key), Tt(a) && (F = a.ref, Ct(a, y));
        for (x in a)
          Z.call(a, x) && !St.hasOwnProperty(x) && (w[x] = a[x]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (x in C)
            w[x] === void 0 && (w[x] = C[x]);
        }
        if (m || F) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Pt(w, P), F && Ot(w, P);
        }
        return $t(e, m, F, y, h, U.current, w);
      }
    }
    var le = I.ReactCurrentOwner, Le = I.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var a = e._owner, l = Q(e.type, e._source, a ? a.type : null);
        Le.setExtraStackFrame(l);
      } else
        Le.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function ke() {
      {
        if (le.current) {
          var e = N(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function It(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function Dt(e) {
      {
        var a = ke();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Me(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Dt(a);
        if (Ne[l])
          return;
        Ne[l] = !0;
        var h = "";
        e && e._owner && e._owner !== le.current && (h = " It was passed a child from " + N(e._owner.type) + "."), q(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), q(null);
      }
    }
    function We(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var l = 0; l < e.length; l++) {
            var h = e[l];
            fe(h) && Me(h, a);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = $(e);
          if (typeof y == "function" && y !== e.entries)
            for (var x = y.call(e), w; !(w = x.next()).done; )
              fe(w.value) && Me(w.value, a);
        }
      }
    }
    function At(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === v))
          l = a.propTypes;
        else
          return;
        if (l) {
          var h = N(a);
          xt(l, e.props, "prop", h, e);
        } else if (a.PropTypes !== void 0 && !de) {
          de = !0;
          var y = N(a);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var h = a[l];
          if (h !== "children" && h !== "key") {
            q(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function qe(e, a, l, h, y, x) {
      {
        var w = _t(e);
        if (!w) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = It(y);
          F ? m += F : m += ke();
          var C;
          e === null ? C = "null" : ce(e) ? C = "array" : e !== void 0 && e.$$typeof === t ? (C = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = Ft(e, a, l, y, x);
        if (P == null)
          return P;
        if (w) {
          var L = a.children;
          if (L !== void 0)
            if (h)
              if (ce(L)) {
                for (var Y = 0; Y < L.length; Y++)
                  We(L[Y], e);
                Object.freeze && Object.freeze(L);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(L, e);
        }
        return e === r ? Lt(P) : At(P), P;
      }
    }
    function kt(e, a, l) {
      return qe(e, a, l, !0);
    }
    function Nt(e, a, l) {
      return qe(e, a, l, !1);
    }
    var Mt = Nt, Wt = kt;
    X.Fragment = r, X.jsx = Mt, X.jsxs = Wt;
  }()), X;
}
process.env.NODE_ENV === "production" ? ve.exports = Bt() : ve.exports = zt();
var d = ve.exports;
const Qe = typeof document < "u" ? qt : O, Ut = "_spice_wrapper_1b9je_1", Ht = "_spice_wrapper_hidden_1b9je_10", ze = {
  spice_wrapper: Ut,
  spice_wrapper_hidden: Ht
}, Ze = V(!0), et = V((n) => !n), Xt = ({ children: n }) => {
  const [t, o] = D(!0);
  return /* @__PURE__ */ d.jsx(Ze.Provider, { value: t, children: /* @__PURE__ */ d.jsx(et.Provider, { value: o, children: n }) });
}, Gt = ({ children: n }) => {
  const t = B(Ze);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ze.spice_wrapper} ${t ? ze.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, Jr = ({ children: n }) => /* @__PURE__ */ d.jsx(Xt, { children: /* @__PURE__ */ d.jsx(Gt, { children: n }) }), tt = () => B(et), Jt = "_spice_aside_aside_4cj7n_1", Kt = "_spice_aside_main_4cj7n_5", pe = {
  spice_aside_aside: Jt,
  spice_aside_main: Kt
}, Kr = ({
  className: n,
  children: t,
  aside: o,
  isSticky: r = !1
}) => {
  const i = tt();
  return Qe(() => (r && i(() => !1), () => {
    i(() => !0);
  }), [r, i]), /* @__PURE__ */ d.jsxs("div", { className: n || "", children: [
    o.index === 1 && /* @__PURE__ */ d.jsx("div", { className: pe.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${pe.spice_aside_aside} ${o.className ? o.className : ""}`,
        children: o.chidren
      }
    ),
    o.index === 0 && /* @__PURE__ */ d.jsx("div", { className: pe.spice_aside_main, children: t })
  ] });
}, Qt = "_spice_form_input_yxowj_1", Zt = "_spice_form_select_yxowj_2", er = "_spice_form_radioCheckInput_yxowj_8", me = {
  spice_form_input: Qt,
  spice_form_select: Zt,
  spice_form_radioCheckInput: er
}, Ue = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...n,
    className: `${me.spice_form_input} ${t || ""}`
  }
), tr = ({ formProps: n }) => {
  const { isSelect: t, ...o } = n;
  if (!t)
    return;
  const r = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: s }) : null;
  }, i = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      ...o,
      className: me.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ d.jsx(r, {}),
        t.options.map((s) => /* @__PURE__ */ d.jsx("option", { value: s, children: s }, s))
      ]
    }
  );
}, He = ({
  layoutType: n,
  formPropsArr: t,
  label: o,
  FormItem: r,
  errors: i
}) => {
  const s = S(
    (c) => !i || !i[c] ? null : i[c],
    [i]
  );
  if (n === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      s(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const c = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: me.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      o && /* @__PURE__ */ d.jsx("label", { children: o }),
      /* @__PURE__ */ d.jsx("ul", { children: c }),
      s(0)
    ] });
  }
}, rr = ({ formProps: n }) => {
  const { isTextarea: t, ...o } = n;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...o, ...t });
}, Qr = ({
  className: n,
  label: t,
  formProps: o,
  errors: r
}) => {
  const i = o, s = i[0].type, c = i.length, u = !!i[0].isSelect, f = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = S(
    (v) => He({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: v,
      errors: r
    }),
    [r, i, t, c]
  ), _ = S(() => u ? p(tr) : f ? p(rr) : s === "radio" || s === "checkbox" ? He({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Ue,
    errors: r
  }) : p(Ue), [r, i, t, u, f, p, s]);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ d.jsx(_, {}) });
}, re = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), nr = "_spice_dropdown_wrapper_1nq94_1", or = "_spice_dropdown_content_1nq94_5", ir = "_spice_dropdown_content_hidden_1nq94_10", sr = "_spice_dropdown_content_pointerPrevent_1nq94_15", G = {
  spice_dropdown_wrapper: nr,
  spice_dropdown_content: or,
  spice_dropdown_content_hidden: ir,
  spice_dropdown_content_pointerPrevent: sr,
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
}, Zr = ({
  position: n,
  parent: t,
  content: o,
  callback: r,
  className: i
}) => {
  const s = b(null), c = b(!1), [u, f] = D(!1), [p, _] = D(!0), v = S(() => {
    c.current = !0, _(!1), f(!0), r != null && r.onEnter && r.onEnter(s.current);
  }, [r]), g = S(async () => {
    c.current = !1, _(!0), r != null && r.onLeave && await re(r.onLeave(s.current)), c.current || f(!1);
  }, [r]);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: v,
      onMouseLeave: g,
      onClick: g,
      className: `${G.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: s,
            className: `${G.spice_dropdown_content} ${u ? "" : G.spice_dropdown_content_hidden} ${p ? G.spice_dropdown_content_pointerPrevent : ""} ${G["spice_dropdown_" + n]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, ar = (n = 60, t = []) => {
  n > 60 && (n = 60);
  const o = Math.floor(1e3 / n), r = b(performance.now()), i = S(
    (u) => {
      const f = u - r.current, p = f <= o;
      return p || (r.current = u - f % o), p;
    },
    [o]
  ), s = b({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, c = S(
    (u) => {
      s.id = requestAnimationFrame(c), !i(u) && s.callback && s.isPlay && s.callback(u);
    },
    [i, s]
  );
  return O(() => (s.id = requestAnimationFrame(c), () => {
    cancelAnimationFrame(s.id);
  }), t), (u, f) => {
    if (u === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      s.callback = f, s.isPlay = !0;
    } else
      u === "pause" && (s.isPlay = !1);
  };
}, cr = "_spice_magnet_stopPropagation_99wvn_1", ur = {
  spice_magnet_stopPropagation: cr
}, en = ({
  className: n,
  children: t,
  callback: o,
  fps: r = 60,
  stopPropagation: i = !1,
  isOnClickReset: s = !1,
  dependencies: c = []
}) => {
  const u = b(null), f = b(null), p = b();
  r > 60 && (r = 60);
  const _ = ar(r, c), v = k(
    () => ({
      target: u.current,
      children: f.current,
      x: 0,
      y: 0
    }),
    []
  ), g = S(
    (R) => {
      v.target = u.current, v.children = f.current;
    },
    [v]
  ), E = S(
    (R) => {
      p.current = R.currentTarget.getBoundingClientRect(), v.x = R.clientX - p.current.left - p.current.width / 2, v.y = R.clientY - p.current.top - p.current.height / 2;
    },
    [v]
  ), j = S(
    (R) => {
      R.stopPropagation(), g(R), E(R), _("play", () => {
        o.onMove(v);
      });
    },
    [g, E, _, o, v]
  ), A = S(
    (R) => {
      R.stopPropagation(), E(R);
    },
    [E]
  ), $ = S(
    (R) => {
      R.stopPropagation(), _("pause"), o.onLeave && o.onLeave(v);
    },
    [_, o, v]
  ), I = S(
    (R) => {
      $(R);
    },
    [$]
  ), T = S(
    (R) => {
      s && $(R);
    },
    [$, s]
  );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: j,
      onMouseMove: A,
      onMouseLeave: I,
      onClick: T,
      className: n || "",
      ref: u,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: f,
          className: i ? ur.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, lr = "_spice_thumbnail_container_1i0fe_1", dr = {
  spice_thumbnail_container: lr
}, tn = ({ ratio: n, children: t, className: o }) => {
  let r;
  switch (n) {
    case "golden":
      r = "1.618/1";
      break;
    case "silver":
      r = "1.414/1";
      break;
    case "platinum":
      r = "1.732/1";
      break;
    case "16-9":
      r = "16/9";
      break;
    case "square":
      r = "1/1";
      break;
    case "3-2":
      r = "3/2";
      break;
    case "4-3":
      r = "4/3";
      break;
    default:
      r = n;
      break;
  }
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${dr.spice_thumbnail_container} ${o || ""}`,
      style: {
        aspectRatio: r
      },
      children: t
    }
  );
}, Xe = (n) => {
  const t = document.documentElement.style, o = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, fr = "_spice_modal_dialog_1t31c_1", pr = {
  spice_modal_dialog: fr
}, _r = ".spice__modal_close", rn = ({
  children: n,
  tag: t,
  className: o,
  dialog: r,
  callback: i
}) => {
  const s = t || "button", c = b(null), u = S(() => {
    Xe("add"), c.current.showModal(), i != null && i.onOpen && i.onOpen(c.current);
  }, [i]), f = S(async () => {
    i != null && i.onClose && await re(i.onClose(c.current)), Xe("remove"), c.current.close();
  }, [i]);
  return O(() => {
    const p = c.current.querySelectorAll(_r);
    if (p)
      return p.forEach(
        (_) => _.addEventListener("click", f)
      ), () => {
        p.forEach(
          (_) => _.removeEventListener("click", f)
        );
      };
  }, [f]), O(() => {
    const p = (_) => {
      var g;
      ((g = c.current) == null ? void 0 : g.hasAttribute("open")) && _.key === "Escape" && f();
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [f]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      s,
      {
        className: o || "",
        onClick: () => {
          u();
        },
        children: n
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: c,
        onClick: (p) => {
          p.target === c.current && f();
        },
        className: `${pr.spice_modal_dialog} ${r.className ? r.className : ""}`,
        children: r.children
      }
    )
  ] });
}, vr = he(
  ({ children: n, ...t }, o) => {
    const r = tt();
    return O(() => (r(() => !1), () => {
      r(() => !0);
    }), [r]), /* @__PURE__ */ d.jsx("div", { ref: o, ...t, children: n });
  }
);
vr.displayName = "StickyItem";
const nn = (n) => {
  const t = b(null), [o, r] = D(!1), { fallback: i, ...s } = n;
  return O(() => {
    var c;
    (c = t.current) == null || c.play().then(() => {
      r(!1);
    }).catch(() => {
      r(!0);
    });
  }, []), o ? i : /* @__PURE__ */ d.jsx("video", { ref: t, ...s });
}, on = ({
  text: n,
  type: t = "chars",
  splitClassName: o,
  splitStyle: r
}) => {
  const i = t === "chars" ? "" : " ";
  return n.split(`
`).flatMap((c, u, f) => [
    ...c.split(i).map(
      (p, _) => p === " " ? /* @__PURE__ */ d.jsx(
        "span",
        {
          style: r,
          className: `${o || ""}`,
          children: " "
        },
        `${u}-${_}`
      ) : /* @__PURE__ */ d.jsx(
        "span",
        {
          style: r,
          className: `${o || ""}`,
          children: p
        },
        `${u}-${_}`
      )
    ),
    u < f.length - 1 ? /* @__PURE__ */ d.jsx("br", {}, u) : null
  ]);
}, hr = "_spice_loader_wrapper_njkek_1", mr = "_spice_loader_container_njkek_6", gr = "_spice_loader_skelton_njkek_13", wr = "_skeleton_njkek_1", yr = "_spice_loader_circular_njkek_31", xr = "_cicrular_njkek_1", te = {
  spice_loader_wrapper: hr,
  spice_loader_container: mr,
  spice_loader_skelton: gr,
  skeleton: wr,
  spice_loader_circular: yr,
  cicrular: xr
}, br = he(
  ({
    className: n,
    loader: t = "skeleton",
    delay: o = 1e3,
    onView: r,
    skelton: i,
    circular: s,
    children: c
  }, u) => {
    const [f, p] = D(o === 0), _ = !!c;
    return O(() => {
      o !== 0 && setTimeout(() => p(!0), o);
    }, [o]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: u,
        className: `${n || ""} ${te.spice_loader_wrapper} `,
        style: _ ? {
          maxWidth: "fit-content",
          height: "auto"
        } : {},
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: te.spice_loader_container,
            style: f ? {
              opacity: 1,
              transitionProperty: "opacity",
              transitionDuration: (r == null ? void 0 : r.transitionDuration) || "0.3s",
              transitionTimingFunction: (r == null ? void 0 : r.transitionTimingFunction) || "ease-in-out"
            } : {},
            children: [
              t === "skeleton" ? /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: te.spice_loader_skelton,
                  style: {
                    background: `linear-gradient(90deg,transparent,${(i == null ? void 0 : i.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "ease-in-out"
                  }
                }
              ) : t === "circular" ? /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: te.spice_loader_circular,
                  style: {
                    width: s != null && s.width ? s == null ? void 0 : s.width : "24px",
                    height: s != null && s.height ? s == null ? void 0 : s.height : "24px",
                    border: (s == null ? void 0 : s.boder) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "linear"
                  }
                }
              ) : t,
              _ && /* @__PURE__ */ d.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
br.displayName = "Loader";
const Er = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, rt = V(Er), nt = V(
  () => {
  }
), jr = ({ children: n, defaultValue: t }) => {
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
  return /* @__PURE__ */ d.jsx(rt.Provider, { value: o, children: /* @__PURE__ */ d.jsx(nt.Provider, { value: r, children: n }) });
}, ot = () => B(rt), ge = () => B(nt), Sr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ge(), i = ot(), s = S(() => {
    i.current === t || i.isLeaving || r((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: s,
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      children: n
    }
  );
}, it = ({ content: n, isOpen: t }) => {
  const o = n.querySelectorAll("a,button");
  if (!o)
    return;
  const r = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, Tr = "_spice_tab_hidden_1r0oa_1", Rr = {
  spice_tab_hidden: Tr
}, Cr = ({
  children: n,
  value: t,
  className: o,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = b(!0), s = b(null), c = ge(), u = ot(), f = u.current === t && !u.isLeaving;
  return O(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.onReset && r.onReset(s.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await re(r.onClose(s.current)), c((p) => ({
      ...p,
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), f && r != null && r.onOpen && r.onOpen(s.current);
  }, [u, c, r, t, f]), O(() => {
    it({
      content: s.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: s,
      className: `${u.current !== t ? Rr.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: n
    }
  );
}, Pr = () => {
  const n = ge();
  return (t, o) => {
    n((r) => ({
      isAnimation: o,
      isLeaving: o,
      prev: o ? r.current : "",
      current: o ? r.current : t,
      next: o ? t : ""
    }));
  };
}, sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Sr,
  Content: Cr,
  Context: jr,
  useTabSwitch: Pr
}, Symbol.toStringTag, { value: "Module" })), Or = {
  target: "",
  toggle: !1,
  defaultValue: []
}, st = V(Or), at = V(() => {
}), $r = ({ children: n, defaultValue: t }) => {
  const [o, r] = D({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(st.Provider, { value: o, children: /* @__PURE__ */ d.jsx(at.Provider, { value: r, children: n }) });
}, ct = () => B(st), Fr = () => B(at), Ir = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ct(), i = Fr(), s = k(
    () => !!r.defaultValue.find((f) => f === t),
    [r, t]
  ), [c, u] = D(s);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        i((f) => ({
          ...f,
          toggle: c,
          target: t
        })), u(!c);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": c,
      children: n
    }
  );
}, Dr = ({
  targetRef: n,
  callback: t,
  debounce: o = 100,
  dependencies: r = []
}) => {
  const i = b(0), s = b(!0);
  O(() => {
    const c = new ResizeObserver((f) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(f[0].target);
      }, o);
    }), u = n.current;
    if (u)
      return c.observe(u), () => {
        c.unobserve(u), clearTimeout(i.current);
      };
  }, r);
}, Ar = "_spice_accordion_content_1wkzs_1", Lr = "_spice_accordion_hidden_1wkzs_5", Ge = {
  spice_accordion_content: Ar,
  spice_accordion_hidden: Lr
}, kr = ({
  value: n,
  callback: t,
  children: o,
  className: r
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = ct(), s = k(
    () => !!i.defaultValue.find((v) => v === n),
    [i, n]
  ), [c, u] = D(s);
  k(() => {
    i.target === n && u(!c);
  }, [i.target, i.toggle]);
  const f = b(!0), p = b(null), _ = b(null);
  return O(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const v = {
      height: _.current.getBoundingClientRect().height,
      target: p.current
    };
    c ? t.onOpen(v) : t.onClose(v);
  }, [c, t]), O(() => {
    it({ content: p.current, isOpen: c });
  }, [c]), Dr({
    targetRef: _,
    callback: (v) => {
      const g = v.getBoundingClientRect().height;
      c && (p.current.style.height = `${g}px`);
    },
    dependencies: [c],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: p,
      className: `${Ge.spice_accordion_content} ${s ? "" : Ge.spice_accordion_hidden}`,
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !c,
      children: /* @__PURE__ */ d.jsx("div", { ref: _, className: r || "", children: o })
    }
  );
}, an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ir,
  Content: kr,
  Context: $r
}, Symbol.toStringTag, { value: "Module" })), Nr = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: r,
  onProgress: i,
  onStart: s,
  onComplete: c
}) => {
  const u = k(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), f = b(null), p = S(
    ({
      digitContainer: v,
      numbersTarget: g,
      digit: E,
      digitNumber: j,
      currentPercent: A,
      limit: $,
      destination: I
    }) => {
      if (u[E] !== j && A <= $) {
        const T = j.toString(), R = (Math.min(8, j) + 1).toString(), oe = A >= $;
        g[0].innerText = T, g[1].innerText = oe ? "0" : R, i && i({
          digitContainer: v,
          percent: A,
          digit: E,
          destination: I,
          duration: n / (I / E)
        }), u[E] = j;
      }
    },
    [u, i, n]
  ), _ = S(
    (v) => (v > 100 && (v = 100), new Promise((g) => {
      if (v === 0)
        return;
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(f.current), f.current = setInterval(async () => {
        const j = u.to += 1, A = async () => {
          clearInterval(f.current), j > 100 && c && await re(c(E.getAll())), g(j - 1);
        };
        j === 1 && s && s(E.getAll()), j > v && await A();
        const $ = Math.floor(j / 100) % 100, I = Math.floor(j / 10) % 10, T = j % 10;
        p({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: j,
          numbersTarget: E.ones,
          limit: 90,
          destination: v
        }), p({
          digitContainer: o.current,
          digit: 10,
          digitNumber: I,
          currentPercent: j,
          numbersTarget: E.tens,
          limit: 90,
          destination: v
        }), u[100] !== $ && (E.hundreds[1].innerText = $.toString(), i && i({
          digitContainer: r.current,
          percent: j,
          digit: 100,
          destination: v,
          duration: n / (v / 10)
        }), u[100] = $);
      }, Math.max(1e3 / 60, n / v * 1e3));
    })),
    [
      u,
      p,
      o,
      r,
      t,
      c,
      i,
      s,
      n
    ]
  );
  return O(() => () => {
    clearInterval(f.current);
  }, []), _;
}, Mr = "_spice_loadingProgress_digit_avxoy_1", Wr = {
  spice_loadingProgress_digit: Mr
}, ut = Yt(
  he(({ className: n }, t) => /* @__PURE__ */ d.jsxs("div", { className: Wr.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ d.jsx("div", { className: n || "", children: "0" }),
    /* @__PURE__ */ d.jsx("div", { className: n || "", children: "0" })
  ] }))
);
ut.displayName = "Digit";
const cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: ut,
  useLoadingProgress: Nr
}, Symbol.toStringTag, { value: "Module" })), qr = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: r = !1,
  callback: i,
  dependencies: s = []
}) => {
  const c = {
    rootMargin: t,
    threshold: o
  };
  O(() => {
    const u = n == null ? void 0 : n.current;
    if (!u)
      return;
    const f = (_, v) => {
      _.forEach((g) => {
        g.isIntersecting && i.onEnter ? (i.onEnter(g), r && v.unobserve(g.target)) : !g.isIntersecting && i.onLeave && i.onLeave(g);
      });
    }, p = new IntersectionObserver(f, c);
    return p.observe(u), () => {
      p.unobserve(u);
    };
  }, s);
}, Yr = "_spice_autoScroll_wrapper_11jju_1", Vr = "_spice_autoScroll_container_11jju_5", Je = {
  spice_autoScroll_wrapper: Yr,
  spice_autoScroll_container: Vr
}, un = ({
  children: n,
  className: t,
  style: o,
  isReverse: r = !1,
  speed: i = 1
}) => {
  const s = b(null), c = b(null), u = b(null), [f, p] = D(!1), _ = b(0), v = b(0);
  return O(() => {
    if (!f)
      return;
    const g = s.current, E = c.current, j = u.current, A = () => {
      const $ = g.clientWidth / E.clientWidth;
      _.current += 1e-3 * i * $, _.current >= 1 && (_.current = 0), r ? (E.style.transform = `translateX(${_.current * -100}%)`, j.style.transform = `translateX(${100 - _.current * 100}%)`) : (E.style.transform = `translateX(${_.current * 100}%)`, j.style.transform = `translateX(${_.current * 100 - 200}%)`), v.current = requestAnimationFrame(A);
    };
    return v.current = requestAnimationFrame(A), () => {
      cancelAnimationFrame(v.current);
    };
  }, [r, i, f]), qr({
    targetRef: s,
    once: !1,
    callback: {
      onEnter: () => p(!0),
      onLeave: () => p(!1)
    }
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: s,
      className: `${Je.spice_autoScroll_wrapper} ${t || ""}`,
      style: o || {},
      children: /* @__PURE__ */ d.jsxs("div", { className: Je.spice_autoScroll_container, children: [
        /* @__PURE__ */ d.jsx("div", { ref: c, children: n }),
        /* @__PURE__ */ d.jsx("div", { ref: u, children: n })
      ] })
    }
  );
}, ne = ({
  callback: n,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const r = b(0), i = b(0), s = S(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [n, t]);
  O(() => (r.current = window.innerWidth, window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s), clearTimeout(i.current);
  }), o);
}, Br = ({
  initWinW: n,
  winW: t,
  threshold: o
}) => {
  let r = !(n <= o);
  t <= o ? r && window.location.reload() : !r && window.location.reload();
}, zr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Ur = () => {
  console.log(zr);
}, Hr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, ln = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const r = S(
    (i) => {
      t && Hr(i);
    },
    [t]
  );
  ne({
    callback: ({ initWinW: i, winW: s }) => {
      n && n.forEach(
        (c) => Br({
          initWinW: i,
          winW: s,
          threshold: c
        })
      ), r(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), o && process.env.NODE_ENV !== "development" && Ur();
  }, [o, r]);
}, Xr = () => {
  const [n, t] = D(null), o = S(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return ne({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), O(() => o(), [o]), n;
}, _e = "scroll", dn = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const r = b(null), [i, s] = Vt(
    (_, v) => {
      switch (v.type) {
        case _e:
          return r.current = v.payload, v.payload;
        default:
          return _;
      }
    },
    r.current
  ), c = b(0), u = b(0), f = () => window.scrollY || document.documentElement.scrollTop, p = S(() => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const _ = f();
      _ > c.current + n && r.current !== "down" ? s({ type: _e, payload: "down" }) : _ < c.current - n && r.current !== "up" && s({ type: _e, payload: "up" }), c.current = _;
    }, t);
  }, [t, n]);
  return O(() => (c.current = f(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(u.current);
  }), o), i;
}, fn = ({ type: n, width: t }) => {
  const [o, r] = D(null), i = S(
    (s) => {
      switch (n) {
        case "max":
          r(t >= s);
          break;
        case "min":
          r(t <= s);
          break;
      }
    },
    [n, t]
  );
  return ne({
    callback: ({ winW: s }) => i(s),
    debounce: 100,
    dependencies: []
  }), O(() => i(window.innerWidth), [i]), o;
}, pn = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: o = "",
  width: r = 600,
  height: i = 800
}) => {
  const s = k(() => encodeURIComponent(n), [n]), c = k(
    () => `height=${i},width=${r}`,
    [i, r]
  ), u = k(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${s}&t=${o}`,
          "newwindow",
          c
        );
      }
    }),
    [s, o, c]
  ), f = k(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${s}&text=${o}`,
          "newwindow",
          c
        );
      }
    }),
    [s, c, o]
  ), p = k(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${s}&text=${o}`,
          "newwindow",
          c
        );
      }
    }),
    [s, c, o]
  ), _ = k(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: o,
            url: t || s
          });
        } catch {
          return;
        }
      }
    }),
    [o, s, t]
  ), [v, g] = D(!1), E = k(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          g(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: u,
    X: f,
    LINE: p,
    share: _,
    copy: E,
    isCopied: v
  };
}, _n = (n) => {
  const t = Xr();
  Qe(() => {
    !t || !n.current || (n.current.style.height = `${window.screen.height}px`);
  }, [t, n]), ne({
    callback: ({ winH: o }) => {
      n.current && (t ? n.current.style.height = `${window.screen.height}px` : n.current.style.height = `${o}px`);
    },
    dependencies: [t]
  });
};
export {
  an as Accordion,
  Kr as AsideLayout,
  un as AutoScrollContainer,
  Zr as Dropdown,
  Qr as FormField,
  br as Loader,
  cn as LoadingProgress,
  nn as LowPowerVideo,
  en as Magnet,
  rn as ModalButton,
  on as SplitText,
  vr as StickyItem,
  sn as Tab,
  tn as Thumbnail,
  Jr as WrapperLayout,
  _n as use100vh,
  ar as useAnimationFrame,
  qr as useIntersectionObserver,
  Xr as useIsTouchDevice,
  Qe as useIsomorphicLayoutEffect,
  fn as useMediaQuery,
  tt as useOverflowDispatch,
  Dr as useResizeObserver,
  dn as useScrollDirection,
  pn as useShare,
  ln as useStarter,
  ne as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
