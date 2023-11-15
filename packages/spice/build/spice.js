import Ge, { createContext as W, useState as D, useContext as k, useEffect as S, useCallback as E, useRef as T, useMemo as fe, useLayoutEffect as At, useReducer as Nt } from "react";
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
function Mt() {
  if (ke)
    return U;
  ke = 1;
  var o = Ge, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var _, v = {}, y = null, $ = null;
    h !== void 0 && (y = "" + h), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (_ in f)
      r.call(f, _) && !a.hasOwnProperty(_) && (v[_] = f[_]);
    if (u && u.defaultProps)
      for (_ in f = u.defaultProps, f)
        v[_] === void 0 && (v[_] = f[_]);
    return { $$typeof: t, type: u, key: y, ref: $, props: v, _owner: s.current };
  }
  return U.Fragment = n, U.jsx = l, U.jsxs = l, U;
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
function Wt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ge, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Z = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = H && e[H] || e[Z];
      return typeof i == "function" ? i : null;
    }
    var L = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          c[p - 1] = arguments[p];
        j("error", e, c);
      }
    }
    function j(e, i, c) {
      {
        var p = L.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (i += "%s", c = c.concat([w]));
        var b = c.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var it = !1, st = !1, at = !1, ct = !1, ut = !1, me;
    me = Symbol.for("react.module.reference");
    function lt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || ut || e === s || e === h || e === _ || ct || e === $ || it || st || at || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function dt(e, i, c) {
      var p = e.displayName;
      if (p)
        return p;
      var w = i.displayName || i.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case n:
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
            var i = e;
            return ge(i) + ".Consumer";
          case l:
            var c = e;
            return ge(c._context) + ".Provider";
          case f:
            return dt(e, e.render, "ForwardRef");
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
    function ft() {
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
    function pt() {
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
        V < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = L.ReactCurrentDispatcher, te;
    function G(e, i, c) {
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
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      J = new _t();
    }
    function Se(e, i) {
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
      b = ee.current, ee.current = null, ft();
      try {
        if (i) {
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
            } catch (I) {
              p = I;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              p = I;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            p = I;
          }
          e();
        }
      } catch (I) {
        if (I && p && typeof I.stack == "string") {
          for (var m = I.stack.split(`
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
        re = !1, ee.current = b, pt(), Error.prepareStackTrace = w;
      }
      var M = e ? e.displayName || e.name : "", We = M ? G(M) : "";
      return typeof e == "function" && J.set(e, We), We;
    }
    function vt(e, i, c) {
      return Se(e, !1);
    }
    function ht(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function K(e, i, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, ht(e));
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
          case f:
            return vt(e.render);
          case v:
            return K(e.type, i, c);
          case y: {
            var p = e, w = p._payload, b = p._init;
            try {
              return K(b(w), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Ce = {}, Oe = L.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var i = e._owner, c = K(e.type, e._source, i ? i.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    function mt(e, i, c, p, w) {
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
              m = e[g](i, g, p, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Q(w), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", c, g, typeof m), Q(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, Q(w), C("Failed %s type: %s", c, m.message), Q(null));
          }
      }
    }
    var gt = Array.isArray;
    function ne(e) {
      return gt(e);
    }
    function wt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
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
    function $e(e) {
      if (bt(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(e)), Pe(e);
    }
    var Y = L.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Ie, oe;
    oe = {};
    function Et(e) {
      if (X.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (X.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Rt(e, i) {
      if (typeof e.ref == "string" && Y.current && i && Y.current.stateNode !== i) {
        var c = F(Y.current.type);
        oe[c] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Y.current.type), e.ref), oe[c] = !0);
      }
    }
    function Tt(e, i) {
      {
        var c = function() {
          Fe || (Fe = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function jt(e, i) {
      {
        var c = function() {
          Ie || (Ie = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var St = function(e, i, c, p, w, b, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
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
    function Ct(e, i, c, p, w) {
      {
        var b, g = {}, m = null, O = null;
        c !== void 0 && ($e(c), m = "" + c), xt(i) && ($e(i.key), m = "" + i.key), Et(i) && (O = i.ref, Rt(i, w));
        for (b in i)
          X.call(i, b) && !yt.hasOwnProperty(b) && (g[b] = i[b]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (b in x)
            g[b] === void 0 && (g[b] = x[b]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Tt(g, R), O && jt(g, R);
        }
        return St(e, m, O, w, p, Y.current, g);
      }
    }
    var ie = L.ReactCurrentOwner, De = L.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var i = e._owner, c = K(e.type, e._source, i ? i.type : null);
        De.setExtraStackFrame(c);
      } else
        De.setExtraStackFrame(null);
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
    function Ot(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var qe = {};
    function Pt(e) {
      {
        var i = Le();
        if (!i) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function Ae(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Pt(i);
        if (qe[c])
          return;
        qe[c] = !0;
        var p = "";
        e && e._owner && e._owner !== ie.current && (p = " It was passed a child from " + F(e._owner.type) + "."), N(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, p), N(null);
      }
    }
    function Ne(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
            ae(p) && Ae(p, i);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = A(e);
          if (typeof w == "function" && w !== e.entries)
            for (var b = w.call(e), g; !(g = b.next()).done; )
              ae(g.value) && Ae(g.value, i);
        }
      }
    }
    function $t(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === v))
          c = i.propTypes;
        else
          return;
        if (c) {
          var p = F(i);
          mt(c, e.props, "prop", p, e);
        } else if (i.PropTypes !== void 0 && !se) {
          se = !0;
          var w = F(i);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(e) {
      {
        for (var i = Object.keys(e.props), c = 0; c < i.length; c++) {
          var p = i[c];
          if (p !== "children" && p !== "key") {
            N(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Me(e, i, c, p, w, b) {
      {
        var g = lt(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Ot(w);
          O ? m += O : m += Le();
          var x;
          e === null ? x = "null" : ne(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + (F(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var R = Ct(e, i, c, w, b);
        if (R == null)
          return R;
        if (g) {
          var P = i.children;
          if (P !== void 0)
            if (p)
              if (ne(P)) {
                for (var M = 0; M < P.length; M++)
                  Ne(P[M], e);
                Object.freeze && Object.freeze(P);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(P, e);
        }
        return e === r ? Ft(R) : $t(R), R;
      }
    }
    function It(e, i, c) {
      return Me(e, i, c, !0);
    }
    function Dt(e, i, c) {
      return Me(e, i, c, !1);
    }
    var Lt = Dt, qt = It;
    z.Fragment = r, z.jsx = Lt, z.jsxs = qt;
  }()), z;
}
process.env.NODE_ENV === "production" ? de.exports = Mt() : de.exports = Wt();
var d = de.exports;
const kt = "_spice_wrapper_1b9je_1", Vt = "_spice_wrapper_hidden_1b9je_10", Ye = {
  spice_wrapper: kt,
  spice_wrapper_hidden: Vt
}, Je = W(!0), Ke = W((o) => !o), Yt = ({ children: o }) => {
  const [t, n] = D(!0);
  return /* @__PURE__ */ d.jsx(Je.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Ke.Provider, { value: n, children: o }) });
}, Ut = ({ children: o }) => {
  const t = k(Je);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${Ye.spice_wrapper} ${t ? Ye.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Dr = ({ children: o }) => /* @__PURE__ */ d.jsx(Yt, { children: /* @__PURE__ */ d.jsx(Ut, { children: o }) }), Xe = () => k(Ke), zt = "_spice_aside_aside_4cj7n_1", Bt = "_spice_aside_main_4cj7n_5", ce = {
  spice_aside_aside: zt,
  spice_aside_main: Bt
}, Lr = ({
  className: o,
  children: t,
  aside: n,
  isSticky: r = !1
}) => {
  const s = Xe();
  return S(() => (r && s(() => !1), () => {
    s(() => !0);
  }), [r, s]), /* @__PURE__ */ d.jsxs("div", { className: o || "", children: [
    n.index === 1 && /* @__PURE__ */ d.jsx("div", { className: ce.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${ce.spice_aside_aside} ${n.className ? n.className : ""}`,
        children: n.chidren
      }
    ),
    n.index === 0 && /* @__PURE__ */ d.jsx("div", { className: ce.spice_aside_main, children: t })
  ] });
}, Ht = "_spice_form_input_yxowj_1", Gt = "_spice_form_select_yxowj_2", Jt = "_spice_form_radioCheckInput_yxowj_8", pe = {
  spice_form_input: Ht,
  spice_form_select: Gt,
  spice_form_radioCheckInput: Jt
}, Ue = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...o,
    className: `${pe.spice_form_input} ${t || ""}`
  }
), Kt = ({ formProps: o }) => {
  const { isSelect: t, ...n } = o;
  if (!t)
    return;
  const r = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: a }) : null;
  }, s = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      ...n,
      className: pe.spice_form_select,
      defaultValue: s(),
      children: [
        /* @__PURE__ */ d.jsx(r, {}),
        t.options.map((a) => /* @__PURE__ */ d.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, ze = ({
  layoutType: o,
  formPropsArr: t,
  label: n,
  FormItem: r,
  errors: s
}) => {
  const a = E(
    (l) => !s || !s[l] ? null : s[l],
    [s]
  );
  if (o === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      n && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      a(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      n && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: pe.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      n && /* @__PURE__ */ d.jsx("label", { children: n }),
      /* @__PURE__ */ d.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Xt = ({ formProps: o }) => {
  const { isTextarea: t, ...n } = o;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...n, ...t });
}, qr = ({
  className: o,
  label: t,
  formProps: n,
  errors: r
}) => {
  const s = n, a = s[0].type, l = s.length, u = !!s[0].isSelect, f = !!s[0].isTextarea;
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
  ), _ = E(() => u ? h(Kt) : f ? h(Xt) : a === "radio" || a === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Ue,
    errors: r
  }) : h(Ue), [r, s, t, u, f, h, a]);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ d.jsx(_, {}) });
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
  content: n,
  callback: r,
  className: s
}) => {
  const a = T(null), l = T(!1), [u, f] = D(!1), [h, _] = D(!0), v = E(() => {
    l.current = !0, _(!1), f(!0), r != null && r.onEnter && r.onEnter(a.current);
  }, [r]), y = E(async () => {
    l.current = !1, _(!0), r != null && r.onLeave && await _e(r.onLeave(a.current)), l.current || f(!1);
  }, [r]);
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
            ref: a,
            className: `${B.spice_dropdown_content} ${u ? "" : B.spice_dropdown_content_hidden} ${h ? B.spice_dropdown_content_pointerPrevent : ""} ${B["spice_dropdown_" + o]}`,
            children: n.children
          }
        )
      ]
    }
  );
}, rr = (o = 60, t = []) => {
  o > 60 && (o = 60);
  const n = Math.floor(1e3 / o), r = T(performance.now()), s = E(
    (u) => {
      const f = u - r.current, h = f <= n;
      return h || (r.current = u - f % n), h;
    },
    [n]
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
  return S(() => (a.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(a.id);
  }), t), (u, f) => {
    if (u === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      a.callback = f, a.isPlay = !0;
    } else
      u === "pause" && (a.isPlay = !1);
  };
}, nr = "_spice_magnet_stopPropagation_99wvn_1", or = {
  spice_magnet_stopPropagation: nr
}, Nr = ({
  className: o,
  children: t,
  callback: n,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: a = !1,
  dependencies: l = []
}) => {
  const u = T(null), f = T(null), h = T();
  r > 60 && (r = 60);
  const _ = rr(r, l), v = fe(
    () => ({
      target: u.current,
      children: f.current,
      x: 0,
      y: 0
    }),
    []
  ), y = E(
    (j) => {
      v.target = u.current, v.children = f.current;
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
        n.onMove(v);
      });
    },
    [y, $, _, n, v]
  ), Z = E(
    (j) => {
      j.stopPropagation(), $(j);
    },
    [$]
  ), A = E(
    (j) => {
      j.stopPropagation(), _("pause"), n.onLeave && n.onLeave(v);
    },
    [_, n, v]
  ), L = E(
    (j) => {
      A(j);
    },
    [A]
  ), C = E(
    (j) => {
      a && A(j);
    },
    [A, a]
  );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: H,
      onMouseMove: Z,
      onMouseLeave: L,
      onClick: C,
      className: o || "",
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
}, Mr = ({ ratio: o, children: t, className: n }) => {
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
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ue.spice_thumbnail_wrapper} ${n || ""}`,
      children: /* @__PURE__ */ d.jsx(
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
  const t = document.documentElement.style, n = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, dr = "_spice_modal_dialog_1t31c_1", fr = {
  spice_modal_dialog: dr
}, pr = ".spice__modal_close", Wr = ({
  children: o,
  className: t,
  dialog: n,
  callback: r
}) => {
  const s = T(null), a = E(() => {
    Be("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, [r]), l = E(async () => {
    r != null && r.onClose && await _e(r.onClose(s.current)), Be("remove"), s.current.close();
  }, [r]);
  return S(() => {
    const u = s.current.querySelectorAll(pr);
    if (u)
      return u.forEach(
        (f) => f.addEventListener("click", l)
      ), () => {
        u.forEach(
          (f) => f.removeEventListener("click", l)
        );
      };
  }, [l]), S(() => {
    const u = (f) => {
      var _;
      ((_ = s.current) == null ? void 0 : _.hasAttribute("open")) && f.key === "Escape" && l();
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          a();
        },
        children: o
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: s,
        onClick: (u) => {
          u.target === s.current && l();
        },
        className: `${fr.spice_modal_dialog} ${n.className ? n.className : ""}`,
        children: n.children
      }
    )
  ] });
}, kr = ({ children: o, className: t }) => {
  const n = Xe();
  return S(() => (n(() => !1), () => {
    n(() => !0);
  }), [n]), /* @__PURE__ */ d.jsx("div", { className: t || "", children: o });
}, _r = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Qe = W(_r), Ze = W(
  () => {
  }
), vr = ({ children: o, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = D({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Qe.Provider, { value: n, children: /* @__PURE__ */ d.jsx(Ze.Provider, { value: r, children: o }) });
}, et = () => k(Qe), ve = () => k(Ze), hr = ({ children: o, value: t, className: n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ve(), s = et(), a = E(() => {
    s.current === t || s.isLeaving || r((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [r, s, t]);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      className: n || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: o
    }
  );
}, mr = "_spice_tab_hidden_1r0oa_1", gr = {
  spice_tab_hidden: mr
}, tt = ({ content: o, isOpen: t }) => {
  const n = o.querySelectorAll("a,button");
  if (!n)
    return;
  const r = t ? "0" : "-1";
  n.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, wr = ({
  children: o,
  value: t,
  className: n,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = T(!0), a = T(null), l = ve(), u = et(), f = u.current === t && !u.isLeaving;
  return S(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await _e(r.onClose(a.current)), l((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), f && r != null && r.onOpen && r.onOpen(a.current);
  }, [u, l, r, t, f]), S(() => {
    tt({
      content: a.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${u.current !== t ? gr.spice_tab_hidden : ""} ${n || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: o
    }
  );
}, br = () => {
  const o = ve();
  return (t, n) => {
    o((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : t,
      next: n ? t : ""
    }));
  };
}, Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: hr,
  Content: wr,
  Context: vr,
  useTabSwitch: br
}, Symbol.toStringTag, { value: "Module" })), yr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, rt = W(yr), nt = W(() => {
}), Er = ({ children: o, defaultValue: t }) => {
  const [n, r] = D({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(rt.Provider, { value: n, children: /* @__PURE__ */ d.jsx(nt.Provider, { value: r, children: o }) });
}, ot = () => k(rt), xr = () => k(nt), Rr = ({ children: o, value: t, className: n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ot(), s = xr(), a = fe(
    () => !!r.defaultValue.find((f) => f === t),
    [r, t]
  ), [l, u] = D(a);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: n || "",
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
      children: o
    }
  );
}, Tr = ({
  targetRef: o,
  callback: t,
  debounce: n = 100,
  dependencies: r = []
}) => {
  const s = T(0), a = T(!0);
  S(() => {
    const l = new ResizeObserver((f) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(f[0].target);
      }, n);
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
  children: n,
  className: r
}) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = ot(), a = fe(
    () => !!s.defaultValue.find((v) => v === o),
    [s, o]
  ), [l, u] = D(a);
  S(() => {
    s.target === o && u(!l);
  }, [s.target, s.toggle]);
  const f = T(!0), h = T(null), _ = T(null);
  return S(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const v = {
      height: _.current.getBoundingClientRect().height,
      target: h.current
    };
    l ? t.onOpen(v) : t.onClose(v);
  }, [l, t]), S(() => {
    tt({ content: h.current, isOpen: l });
  }, [l]), Tr({
    targetRef: _,
    callback: (v) => {
      const y = v.getBoundingClientRect().height;
      l && (h.current.style.height = `${y}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: h,
      className: `${He.spice_accordion_content} ${a ? "" : He.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ d.jsx("div", { ref: _, className: r || "", children: n })
    }
  );
}, Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Rr,
  Content: Cr,
  Context: Er
}, Symbol.toStringTag, { value: "Module" })), Ur = typeof document < "u" ? At : S, zr = ({
  targetRef: o,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: r = !1,
  callback: s,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: n
  };
  S(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const f = (_, v) => {
      _.forEach((y) => {
        y.isIntersecting && s.onEnter ? (s.onEnter(y.target), r && v.unobserve(y.target)) : !y.isIntersecting && s.onLeave && s.onLeave(y.target);
      });
    }, h = new IntersectionObserver(f, l);
    return h.observe(u), () => {
      h.unobserve(u);
    };
  }, a);
}, he = ({
  callback: o,
  debounce: t = 100,
  dependencies: n = []
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
  S(() => (r.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
  }), n);
}, Or = ({
  initWinW: o,
  winW: t,
  threshold: n
}) => {
  let r = !(o <= n);
  t <= n ? r && window.location.reload() : !r && window.location.reload();
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
  const n = o > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Br = ({
  reloadThresholds: o,
  isFixViewportForSmall: t = !0,
  areYouFun: n = !1
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
  }), S(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), n && process.env.NODE_ENV !== "development" && $r();
  }, [n, r]);
}, Hr = () => {
  const [o, t] = D(null), n = E(() => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  }, []);
  return he({
    callback: () => n(),
    debounce: 100,
    dependencies: []
  }), S(() => n(), [n]), o;
}, le = "scroll", Gr = ({
  threshold: o = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const r = T(null), [s, a] = Nt(
    (_, v) => {
      switch (v.type) {
        case le:
          return r.current = v.payload, v.payload;
        default:
          return _;
      }
    },
    r.current
  ), l = T(0), u = T(0), f = () => window.scrollY || document.documentElement.scrollTop, h = E(() => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const _ = f();
      _ > l.current + o && r.current !== "down" ? a({ type: le, payload: "down" }) : _ < l.current - o && r.current !== "up" && a({ type: le, payload: "up" }), l.current = _;
    }, t);
  }, [t, o]);
  return S(() => (l.current = f(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(u.current);
  }), n), s;
}, Jr = ({ type: o, width: t }) => {
  const [n, r] = D(null), s = E(
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
  }), S(() => s(window.innerWidth), [s]), n;
};
export {
  Yr as Accordion,
  Lr as AsideLayout,
  Ar as Dropdown,
  qr as FormField,
  Nr as Magnet,
  Wr as Modal,
  kr as StickyItem,
  Vr as Tab,
  Mr as Thumbnail,
  Dr as WrapperLayout,
  rr as useAnimationFrame,
  zr as useIntersectionObserver,
  Hr as useIsTouchDevice,
  Ur as useIsomorphicLayoutEffect,
  Jr as useMediaQuery,
  Tr as useResizeObserver,
  Gr as useScrollDirection,
  Br as useStarter,
  he as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
