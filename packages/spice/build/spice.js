import Ge, { createContext as W, useState as I, useContext as k, useEffect as C, useCallback as E, useRef as T, useMemo as fe, useLayoutEffect as qt, useReducer as At } from "react";
var de = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Nt() {
  if (ke)
    return U;
  ke = 1;
  var o = Ge, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, h) {
    var _, v = {}, y = null, $ = null;
    h !== void 0 && (y = "" + h), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (_ in d)
      r.call(d, _) && !a.hasOwnProperty(_) && (v[_] = d[_]);
    if (u && u.defaultProps)
      for (_ in d = u.defaultProps, d)
        v[_] === void 0 && (v[_] = d[_]);
    return { $$typeof: t, type: u, key: y, ref: $, props: v, _owner: s.current };
  }
  return U.Fragment = i, U.jsx = l, U.jsxs = l, U;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Mt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ge, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Z = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = H && e[H] || e[Z];
      return typeof n == "function" ? n : null;
    }
    var L = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          c[p - 1] = arguments[p];
        j("error", e, c);
      }
    }
    function j(e, n, c) {
      {
        var p = L.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (n += "%s", c = c.concat([w]));
        var b = c.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var ot = !1, it = !1, st = !1, at = !1, ct = !1, me;
    me = Symbol.for("react.module.reference");
    function ut(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || ct || e === s || e === h || e === _ || at || e === $ || ot || it || st || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function lt(e, n, c) {
      var p = e.displayName;
      if (p)
        return p;
      var w = n.displayName || n.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case i:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return ge(n) + ".Consumer";
          case l:
            var c = e;
            return ge(c._context) + ".Provider";
          case d:
            return lt(e, e.render, "ForwardRef");
          case v:
            var p = e.displayName || null;
            return p !== null ? p : F(e.type) || "Memo";
          case y: {
            var w = e, b = w._payload, g = w._init;
            try {
              return F(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, V = 0, we, be, ye, Ee, xe, Re, Te;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function dt() {
      {
        if (V === 0) {
          we = console.log, be = console.info, ye = console.warn, Ee = console.error, xe = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
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
    function ft() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, e, {
              value: we
            }),
            info: q({}, e, {
              value: be
            }),
            warn: q({}, e, {
              value: ye
            }),
            error: q({}, e, {
              value: Ee
            }),
            group: q({}, e, {
              value: xe
            }),
            groupCollapsed: q({}, e, {
              value: Re
            }),
            groupEnd: q({}, e, {
              value: Te
            })
          });
        }
        V < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = L.ReactCurrentDispatcher, te;
    function G(e, n, c) {
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
      var pt = typeof WeakMap == "function" ? WeakMap : Map;
      J = new pt();
    }
    function Se(e, n) {
      if (!e || re)
        return "";
      {
        var c = J.get(e);
        if (c !== void 0)
          return c;
      }
      var p;
      re = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ee.current, ee.current = null, dt();
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
            } catch (D) {
              p = D;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (D) {
              p = D;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            p = D;
          }
          e();
        }
      } catch (D) {
        if (D && p && typeof D.stack == "string") {
          for (var m = D.stack.split(`
`), O = p.stack.split(`
`), x = m.length - 1, R = O.length - 1; x >= 1 && R >= 0 && m[x] !== O[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (m[x] !== O[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || m[x] !== O[R]) {
                    var P = `
` + m[x].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        re = !1, ee.current = b, ft(), Error.prepareStackTrace = w;
      }
      var M = e ? e.displayName || e.name : "", We = M ? G(M) : "";
      return typeof e == "function" && J.set(e, We), We;
    }
    function _t(e, n, c) {
      return Se(e, !1);
    }
    function vt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function K(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, vt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case h:
          return G("Suspense");
        case _:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return _t(e.render);
          case v:
            return K(e.type, n, c);
          case y: {
            var p = e, w = p._payload, b = p._init;
            try {
              return K(b(w), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Ce = {}, Oe = L.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, c = K(e.type, e._source, n ? n.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ht(e, n, c, p, w) {
      {
        var b = Function.call.bind(X);
        for (var g in e)
          if (b(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var O = Error((p || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[g](n, g, p, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Q(w), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", c, g, typeof m), Q(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, Q(w), S("Failed %s type: %s", c, m.message), Q(null));
          }
      }
    }
    var mt = Array.isArray;
    function ne(e) {
      return mt(e);
    }
    function gt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function wt(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function $e(e) {
      if (wt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Pe(e);
    }
    var Y = L.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, De, oe;
    oe = {};
    function yt(e) {
      if (X.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (X.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, n) {
      if (typeof e.ref == "string" && Y.current && n && Y.current.stateNode !== n) {
        var c = F(Y.current.type);
        oe[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Y.current.type), e.ref), oe[c] = !0);
      }
    }
    function Rt(e, n) {
      {
        var c = function() {
          Fe || (Fe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Tt(e, n) {
      {
        var c = function() {
          De || (De = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var jt = function(e, n, c, p, w, b, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
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
    function St(e, n, c, p, w) {
      {
        var b, g = {}, m = null, O = null;
        c !== void 0 && ($e(c), m = "" + c), Et(n) && ($e(n.key), m = "" + n.key), yt(n) && (O = n.ref, xt(n, w));
        for (b in n)
          X.call(n, b) && !bt.hasOwnProperty(b) && (g[b] = n[b]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (b in x)
            g[b] === void 0 && (g[b] = x[b]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Rt(g, R), O && Tt(g, R);
        }
        return jt(e, m, O, w, p, Y.current, g);
      }
    }
    var ie = L.ReactCurrentOwner, Ie = L.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var n = e._owner, c = K(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(c);
      } else
        Ie.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Le() {
      {
        if (ie.current) {
          var e = F(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ct(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + n + ":" + c + ".";
        }
        return "";
      }
    }
    var qe = {};
    function Ot(e) {
      {
        var n = Le();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function Ae(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ot(n);
        if (qe[c])
          return;
        qe[c] = !0;
        var p = "";
        e && e._owner && e._owner !== ie.current && (p = " It was passed a child from " + F(e._owner.type) + "."), N(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, p), N(null);
      }
    }
    function Ne(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
            ae(p) && Ae(p, n);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = A(e);
          if (typeof w == "function" && w !== e.entries)
            for (var b = w.call(e), g; !(g = b.next()).done; )
              ae(g.value) && Ae(g.value, n);
        }
      }
    }
    function Pt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === v))
          c = n.propTypes;
        else
          return;
        if (c) {
          var p = F(n);
          ht(c, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !se) {
          se = !0;
          var w = F(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $t(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var p = n[c];
          if (p !== "children" && p !== "key") {
            N(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Me(e, n, c, p, w, b) {
      {
        var g = ut(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Ct(w);
          O ? m += O : m += Le();
          var x;
          e === null ? x = "null" : ne(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + (F(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var R = St(e, n, c, w, b);
        if (R == null)
          return R;
        if (g) {
          var P = n.children;
          if (P !== void 0)
            if (p)
              if (ne(P)) {
                for (var M = 0; M < P.length; M++)
                  Ne(P[M], e);
                Object.freeze && Object.freeze(P);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(P, e);
        }
        return e === r ? $t(R) : Pt(R), R;
      }
    }
    function Ft(e, n, c) {
      return Me(e, n, c, !0);
    }
    function Dt(e, n, c) {
      return Me(e, n, c, !1);
    }
    var It = Dt, Lt = Ft;
    z.Fragment = r, z.jsx = It, z.jsxs = Lt;
  }()), z;
}
process.env.NODE_ENV === "production" ? de.exports = Nt() : de.exports = Mt();
var f = de.exports;
const Wt = "_spice_wrapper_1b9je_1", kt = "_spice_wrapper_hidden_1b9je_10", Ye = {
  spice_wrapper: Wt,
  spice_wrapper_hidden: kt
}, Je = W(!0), Ke = W((o) => !o), Vt = ({ children: o }) => {
  const [t, i] = I(!0);
  return /* @__PURE__ */ f.jsx(Je.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Ke.Provider, { value: i, children: o }) });
}, Yt = ({ children: o }) => {
  const t = k(Je);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${Ye.spice_wrapper} ${t ? Ye.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Ir = ({ children: o }) => /* @__PURE__ */ f.jsx(Vt, { children: /* @__PURE__ */ f.jsx(Yt, { children: o }) }), Ut = () => k(Ke), zt = "_spice_aside_aside_4cj7n_1", Bt = "_spice_aside_main_4cj7n_5", ce = {
  spice_aside_aside: zt,
  spice_aside_main: Bt
}, Lr = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const s = Ut();
  return C(() => (r && s(() => !1), () => {
    s(() => !0);
  }), [r, s]), /* @__PURE__ */ f.jsxs("div", { className: o || "", children: [
    i.index === 1 && /* @__PURE__ */ f.jsx("div", { className: ce.spice_aside_main, children: t }),
    /* @__PURE__ */ f.jsx(
      "aside",
      {
        className: `${ce.spice_aside_aside} ${i.className ? i.className : ""}`,
        children: i.chidren
      }
    ),
    i.index === 0 && /* @__PURE__ */ f.jsx("div", { className: ce.spice_aside_main, children: t })
  ] });
}, Ht = "_spice_form_input_yxowj_1", Gt = "_spice_form_select_yxowj_2", Jt = "_spice_form_radioCheckInput_yxowj_8", pe = {
  spice_form_input: Ht,
  spice_form_select: Gt,
  spice_form_radioCheckInput: Jt
}, Ue = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...o,
    className: `${pe.spice_form_input} ${t || ""}`
  }
), Kt = ({ formProps: o }) => {
  const { isSelect: t, ...i } = o;
  if (!t)
    return;
  const r = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ f.jsx("option", { hidden: !0, children: a }) : null;
  }, s = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ f.jsxs(
    "select",
    {
      ...i,
      className: pe.spice_form_select,
      defaultValue: s(),
      children: [
        /* @__PURE__ */ f.jsx(r, {}),
        t.options.map((a) => /* @__PURE__ */ f.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, ze = ({
  layoutType: o,
  formPropsArr: t,
  label: i,
  FormItem: r,
  errors: s
}) => {
  const a = E(
    (l) => !s || !s[l] ? null : s[l],
    [s]
  );
  if (o === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      i && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
      a(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      i && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        r,
        {
          formProps: u,
          className: pe.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      i && /* @__PURE__ */ f.jsx("label", { children: i }),
      /* @__PURE__ */ f.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Xt = ({ formProps: o }) => {
  const { isTextarea: t, ...i } = o;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...i, ...t });
}, qr = ({
  className: o,
  label: t,
  formProps: i,
  errors: r
}) => {
  const s = i, a = s[0].type, l = s.length, u = !!s[0].isSelect, d = !!s[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const h = E(
    (v) => ze({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: s,
      label: t,
      FormItem: v,
      errors: r
    }),
    [r, s, t, l]
  ), _ = E(() => u ? h(Kt) : d ? h(Xt) : a === "radio" || a === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Ue,
    errors: r
  }) : h(Ue), [r, s, t, u, d, h, a]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ f.jsx(_, {}) });
}, _e = (o) => new Promise((t) => {
  o instanceof Promise ? o.then(() => {
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
}, Ar = ({
  position: o,
  parent: t,
  content: i,
  callback: r,
  className: s
}) => {
  const a = T(null), l = T(!1), [u, d] = I(!1), [h, _] = I(!0), v = E(() => {
    l.current = !0, _(!1), d(!0), r != null && r.onEnter && r.onEnter(a.current);
  }, [r]), y = E(async () => {
    l.current = !1, _(!0), r != null && r.onLeave && await _e(r.onLeave(a.current)), l.current || d(!1);
  }, [r]);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onMouseEnter: v,
      onMouseLeave: y,
      onClick: y,
      className: `${B.spice_dropdown_wrapper} ${s || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ f.jsx(
          "div",
          {
            ref: a,
            className: `${B.spice_dropdown_content} ${u ? "" : B.spice_dropdown_content_hidden} ${h ? B.spice_dropdown_content_pointerPrevent : ""} ${B["spice_dropdown_" + o]}`,
            children: i.children
          }
        )
      ]
    }
  );
}, rr = (o = 60, t = []) => {
  o > 60 && (o = 60);
  const i = Math.floor(1e3 / o), r = T(performance.now()), s = E(
    (u) => {
      const d = u - r.current, h = d <= i;
      return h || (r.current = u - d % i), h;
    },
    [i]
  ), a = T({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, l = E(
    (u) => {
      a.id = requestAnimationFrame(l), !s(u) && a.callback && a.isPlay && a.callback(u);
    },
    [s, a]
  );
  return C(() => (a.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(a.id);
  }), t), (u, d) => {
    if (u === "play") {
      if (!d) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      a.callback = d, a.isPlay = !0;
    } else
      u === "pause" && (a.isPlay = !1);
  };
}, nr = "_spice_magnet_stopPropagation_99wvn_1", or = {
  spice_magnet_stopPropagation: nr
}, Nr = ({
  className: o,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: a = !1,
  dependencies: l = []
}) => {
  const u = T(null), d = T(null), h = T();
  r > 60 && (r = 60);
  const _ = rr(r, l), v = fe(
    () => ({
      target: u.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), y = E(
    (j) => {
      v.target = u.current, v.children = d.current;
    },
    [v]
  ), $ = E(
    (j) => {
      h.current = j.currentTarget.getBoundingClientRect(), v.x = j.clientX - h.current.left - h.current.width / 2, v.y = j.clientY - h.current.top - h.current.height / 2;
    },
    [v]
  ), H = E(
    (j) => {
      j.stopPropagation(), y(j), $(j), _("play", () => {
        i.onMove(v);
      });
    },
    [y, $, _, i, v]
  ), Z = E(
    (j) => {
      j.stopPropagation(), $(j);
    },
    [$]
  ), A = E(
    (j) => {
      j.stopPropagation(), _("pause"), i.onLeave && i.onLeave(v);
    },
    [_, i, v]
  ), L = E(
    (j) => {
      A(j);
    },
    [A]
  ), S = E(
    (j) => {
      a && A(j);
    },
    [A, a]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: H,
      onMouseMove: Z,
      onMouseLeave: L,
      onClick: S,
      className: o || "",
      ref: u,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: d,
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
}, Mr = ({ ratio: o, children: t, className: i }) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let s = r.includes(o), a = typeof o == "number" && o > 0;
  if (!s && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${ue.spice_thumbnail_wrapper} ${i || ""}`,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${ue.spice_thumbnail_view} ${s ? ue["spice_thumbnail_" + o] : ""}`,
          style: a ? { paddingTop: `${o}%` } : {},
          children: t
        }
      )
    }
  );
}, Be = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, dr = "_spice_modal_dialog_1t31c_1", fr = {
  spice_modal_dialog: dr
}, pr = ".spice__modal_close", Wr = ({
  children: o,
  className: t,
  dialog: i,
  callback: r
}) => {
  const s = T(null), a = E(() => {
    Be("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, [r]), l = E(async () => {
    r != null && r.onClose && await _e(r.onClose(s.current)), Be("remove"), s.current.close();
  }, [r]);
  return C(() => {
    const u = s.current.querySelectorAll(pr);
    if (u)
      return u.forEach(
        (d) => d.addEventListener("click", l)
      ), () => {
        u.forEach(
          (d) => d.removeEventListener("click", l)
        );
      };
  }, [l]), C(() => {
    const u = (d) => {
      var _;
      ((_ = s.current) == null ? void 0 : _.hasAttribute("open")) && d.key === "Escape" && l();
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          a();
        },
        children: o
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: s,
        onClick: (u) => {
          u.target === s.current && l();
        },
        className: `${fr.spice_modal_dialog} ${i.className ? i.className : ""}`,
        children: i.children
      }
    )
  ] });
}, _r = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Xe = W(_r), Qe = W(
  () => {
  }
), vr = ({ children: o, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [i, r] = I({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Xe.Provider, { value: i, children: /* @__PURE__ */ f.jsx(Qe.Provider, { value: r, children: o }) });
}, Ze = () => k(Xe), ve = () => k(Qe), hr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ve(), s = Ze(), a = E(() => {
    s.current === t || s.isLeaving || r((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [r, s, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: a,
      className: i || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: o
    }
  );
}, mr = "_spice_tab_hidden_1r0oa_1", gr = {
  spice_tab_hidden: mr
}, et = ({ content: o, isOpen: t }) => {
  const i = o.querySelectorAll("a,button");
  if (!i)
    return;
  const r = t ? "0" : "-1";
  i.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, wr = ({
  children: o,
  value: t,
  className: i,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = T(!0), a = T(null), l = ve(), u = Ze(), d = u.current === t && !u.isLeaving;
  return C(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      d && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await _e(r.onClose(a.current)), l((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), d && r != null && r.onOpen && r.onOpen(a.current);
  }, [u, l, r, t, d]), C(() => {
    et({
      content: a.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      className: `${u.current !== t ? gr.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: o
    }
  );
}, br = () => {
  const o = ve();
  return (t, i) => {
    o((r) => ({
      isAnimation: i,
      isLeaving: i,
      prev: i ? r.current : "",
      current: i ? r.current : t,
      next: i ? t : ""
    }));
  };
}, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: hr,
  Content: wr,
  Context: vr,
  useTabSwitch: br
}, Symbol.toStringTag, { value: "Module" })), yr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, tt = W(yr), rt = W(() => {
}), Er = ({ children: o, defaultValue: t }) => {
  const [i, r] = I({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(tt.Provider, { value: i, children: /* @__PURE__ */ f.jsx(rt.Provider, { value: r, children: o }) });
}, nt = () => k(tt), xr = () => k(rt), Rr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = nt(), s = xr(), a = fe(
    () => !!r.defaultValue.find((d) => d === t),
    [r, t]
  ), [l, u] = I(a);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        s((d) => ({
          ...d,
          toggle: l,
          target: t
        })), u(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: o
    }
  );
}, Tr = ({
  targetRef: o,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const s = T(0), a = T(!0);
  C(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(d[0].target);
      }, i);
    }), u = o.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(s.current);
      };
  }, r);
}, jr = "_spice_accordion_content_1wkzs_1", Sr = "_spice_accordion_hidden_1wkzs_5", He = {
  spice_accordion_content: jr,
  spice_accordion_hidden: Sr
}, Cr = ({
  value: o,
  callback: t,
  children: i,
  className: r
}) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = nt(), a = fe(
    () => !!s.defaultValue.find((v) => v === o),
    [s, o]
  ), [l, u] = I(a);
  C(() => {
    s.target === o && u(!l);
  }, [s.target, s.toggle]);
  const d = T(!0), h = T(null), _ = T(null);
  return C(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const v = {
      height: _.current.getBoundingClientRect().height,
      target: h.current
    };
    l ? t.onOpen(v) : t.onClose(v);
  }, [l, t]), C(() => {
    et({ content: h.current, isOpen: l });
  }, [l]), Tr({
    targetRef: _,
    callback: (v) => {
      const y = v.getBoundingClientRect().height;
      l && (h.current.style.height = `${y}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: h,
      className: `${He.spice_accordion_content} ${a ? "" : He.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ f.jsx("div", { ref: _, className: r || "", children: i })
    }
  );
}, Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Rr,
  Content: Cr,
  Context: Er
}, Symbol.toStringTag, { value: "Module" })), Yr = typeof document < "u" ? qt : C, Ur = ({
  targetRef: o,
  rootMargin: t = "0px",
  threshold: i = 0,
  once: r,
  callback: s,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: i
  };
  C(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const d = (_, v) => {
      _.forEach((y) => {
        y.isIntersecting && s.onEnter ? (s.onEnter(y.target), r && v.unobserve(y.target)) : !y.isIntersecting && s.onLeave && s.onLeave(y.target);
      });
    }, h = new IntersectionObserver(d, l);
    return h.observe(u), () => {
      h.unobserve(u);
    };
  }, a);
}, he = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = T(0), s = T(0), a = E(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [o, t]);
  C(() => (r.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
  }), i);
}, Or = ({
  initWinW: o,
  winW: t,
  threshold: i
}) => {
  let r = !(o <= i);
  t <= i ? r && window.location.reload() : !r && window.location.reload();
}, Pr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, $r = () => {
  console.log(Pr);
}, Fr = (o) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const i = o > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== i && t.setAttribute("content", i);
}, zr = ({
  reloadThresholds: o,
  isFixViewportForSmall: t = !0,
  areYouFun: i = !1
}) => {
  const r = E(
    (s) => {
      t && Fr(s);
    },
    [t]
  );
  he({
    callback: ({ initWinW: s, winW: a }) => {
      o && o.forEach(
        (l) => Or({
          initWinW: s,
          winW: a,
          threshold: l
        })
      ), r(a);
    },
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && $r();
  }, [i, r]);
}, Br = () => {
  const [o, t] = I(null), i = E(() => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  }, []);
  return he({
    callback: () => i(),
    debounce: 100,
    dependencies: []
  }), C(() => i(), [i]), o;
}, le = "scroll", Hr = ({
  threshold: o = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = T(null), [s, a] = At(
    (_, v) => {
      switch (v.type) {
        case le:
          return r.current = v.payload, v.payload;
        default:
          return _;
      }
    },
    r.current
  ), l = T(0), u = T(0), d = () => window.scrollY || document.documentElement.scrollTop, h = E(() => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const _ = d();
      _ > l.current + o && r.current !== "down" ? a({ type: le, payload: "down" }) : _ < l.current - o && r.current !== "up" && a({ type: le, payload: "up" }), l.current = _;
    }, t);
  }, [t, o]);
  return C(() => (l.current = d(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(u.current);
  }), i), s;
}, Gr = ({ type: o, width: t }) => {
  const [i, r] = I(null), s = E(
    (a) => {
      switch (o) {
        case "max":
          r(t >= a);
          break;
        case "min":
          r(t <= a);
          break;
      }
    },
    [o, t]
  );
  return he({
    callback: ({ winW: a }) => s(a),
    debounce: 100,
    dependencies: []
  }), C(() => s(window.innerWidth), [s]), i;
};
export {
  Vr as Accordion,
  Lr as AsideLayout,
  Ar as Dropdown,
  qr as FormField,
  Nr as Magnet,
  Wr as Modal,
  kr as Tab,
  Mr as Thumbnail,
  Ir as WrapperLayout,
  rr as useAnimationFrame,
  Ur as useIntersectionObserver,
  Br as useIsTouchDevice,
  Yr as useIsomorphicLayoutEffect,
  Gr as useMediaQuery,
  Tr as useResizeObserver,
  Hr as useScrollDirection,
  zr as useStarter,
  he as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
