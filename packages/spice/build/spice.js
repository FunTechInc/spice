import Ke, { useLayoutEffect as Wt, useEffect as O, createContext as V, useContext as B, useState as A, useCallback as x, useRef as T, useMemo as L, forwardRef as me, memo as Yt, useReducer as Vt } from "react";
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
function Bt() {
  if (Be)
    return H;
  Be = 1;
  var r = Ke, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, p) {
    var h, _ = {}, w = null, E = null;
    p !== void 0 && (w = "" + p), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (h in d)
      n.call(d, h) && !s.hasOwnProperty(h) && (_[h] = d[h]);
    if (l && l.defaultProps)
      for (h in d = l.defaultProps, d)
        _[h] === void 0 && (_[h] = d[h]);
    return { $$typeof: t, type: l, key: w, ref: E, props: _, _owner: i.current };
  }
  return H.Fragment = o, H.jsx = c, H.jsxs = c, H;
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
var ze;
function zt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ke, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), j = Symbol.iterator, q = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = j && e[j] || e[q];
      return typeof a == "function" ? a : null;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
          u[v - 1] = arguments[v];
        R("error", e, u);
      }
    }
    function R(e, a, u) {
      {
        var v = D.ReactDebugCurrentFrame, b = v.getStackAddendum();
        b !== "" && (a += "%s", u = u.concat([b]));
        var y = u.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var oe = !1, lt = !1, dt = !1, ft = !1, pt = !1, be;
    be = Symbol.for("react.module.reference");
    function _t(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || pt || e === i || e === p || e === h || ft || e === E || oe || lt || dt || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === l || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function ht(e, a, u) {
      var v = e.displayName;
      if (v)
        return v;
      var b = a.displayName || a.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var a = e;
            return ye(a) + ".Consumer";
          case c:
            var u = e;
            return ye(u._context) + ".Provider";
          case d:
            return ht(e, e.render, "ForwardRef");
          case _:
            var v = e.displayName || null;
            return v !== null ? v : N(e.type) || "Memo";
          case w: {
            var b = e, y = b._payload, g = b._init;
            try {
              return N(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, z = 0, xe, Ee, je, Te, Se, Re, Ce;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function vt() {
      {
        if (z === 0) {
          xe = console.log, Ee = console.info, je = console.warn, Te = console.error, Se = console.group, Re = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
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
            log: k({}, e, {
              value: xe
            }),
            info: k({}, e, {
              value: Ee
            }),
            warn: k({}, e, {
              value: je
            }),
            error: k({}, e, {
              value: Te
            }),
            group: k({}, e, {
              value: Se
            }),
            groupCollapsed: k({}, e, {
              value: Re
            }),
            groupEnd: k({}, e, {
              value: Ce
            })
          });
        }
        z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = D.ReactCurrentDispatcher, se;
    function X(e, a, u) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (b) {
            var v = b.stack.trim().match(/\n( *(at )?)/);
            se = v && v[1] || "";
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
    function Oe(e, a) {
      if (!e || ae)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var v;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, vt();
      try {
        if (a) {
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
            } catch (M) {
              v = M;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (M) {
              v = M;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            v = M;
          }
          e();
        }
      } catch (M) {
        if (M && v && typeof M.stack == "string") {
          for (var m = M.stack.split(`
`), $ = v.stack.split(`
`), C = m.length - 1, P = $.length - 1; C >= 1 && P >= 0 && m[C] !== $[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== $[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== $[P]) {
                    var F = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, F), F;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = y, mt(), Error.prepareStackTrace = b;
      }
      var Y = e ? e.displayName || e.name : "", Ve = Y ? X(Y) : "";
      return typeof e == "function" && K.set(e, Ve), Ve;
    }
    function wt(e, a, u) {
      return Oe(e, !1);
    }
    function bt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function Q(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, bt(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case p:
          return X("Suspense");
        case h:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return wt(e.render);
          case _:
            return Q(e.type, a, u);
          case w: {
            var v = e, b = v._payload, y = v._init;
            try {
              return Q(y(b), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, $e = {}, Ie = D.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var a = e._owner, u = Q(e.type, e._source, a ? a.type : null);
        Ie.setExtraStackFrame(u);
      } else
        Ie.setExtraStackFrame(null);
    }
    function yt(e, a, u, v, b) {
      {
        var y = Function.call.bind(Z);
        for (var g in e)
          if (y(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var $ = Error((v || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = e[g](a, g, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ee(b), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, g, typeof m), ee(null)), m instanceof Error && !(m.message in $e) && ($e[m.message] = !0, ee(b), S("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var xt = Array.isArray;
    function ce(e) {
      return xt(e);
    }
    function Et(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function jt(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Fe(e) {
      if (jt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), De(e);
    }
    var U = D.ReactCurrentOwner, Tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ae, ue;
    ue = {};
    function St(e) {
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
        var u = N(U.current.type);
        ue[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(U.current.type), e.ref), ue[u] = !0);
      }
    }
    function Pt(e, a) {
      {
        var u = function() {
          Le || (Le = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Ot(e, a) {
      {
        var u = function() {
          Ae || (Ae = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var $t = function(e, a, u, v, b, y, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: u,
        props: g,
        // Record the component responsible for creating this element.
        _owner: y
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
        value: v
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function It(e, a, u, v, b) {
      {
        var y, g = {}, m = null, $ = null;
        u !== void 0 && (Fe(u), m = "" + u), Rt(a) && (Fe(a.key), m = "" + a.key), St(a) && ($ = a.ref, Ct(a, b));
        for (y in a)
          Z.call(a, y) && !Tt.hasOwnProperty(y) && (g[y] = a[y]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (y in C)
            g[y] === void 0 && (g[y] = C[y]);
        }
        if (m || $) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Pt(g, P), $ && Ot(g, P);
        }
        return $t(e, m, $, b, v, U.current, g);
      }
    }
    var le = D.ReactCurrentOwner, qe = D.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var a = e._owner, u = Q(e.type, e._source, a ? a.type : null);
        qe.setExtraStackFrame(u);
      } else
        qe.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ne() {
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
    function Dt(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Ft(e) {
      {
        var a = Ne();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function ke(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Ft(a);
        if (Me[u])
          return;
        Me[u] = !0;
        var v = "";
        e && e._owner && e._owner !== le.current && (v = " It was passed a child from " + N(e._owner.type) + "."), W(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), W(null);
      }
    }
    function We(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var u = 0; u < e.length; u++) {
            var v = e[u];
            fe(v) && ke(v, a);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = I(e);
          if (typeof b == "function" && b !== e.entries)
            for (var y = b.call(e), g; !(g = y.next()).done; )
              fe(g.value) && ke(g.value, a);
        }
      }
    }
    function Lt(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === _))
          u = a.propTypes;
        else
          return;
        if (u) {
          var v = N(a);
          yt(u, e.props, "prop", v, e);
        } else if (a.PropTypes !== void 0 && !de) {
          de = !0;
          var b = N(a);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var v = a[u];
          if (v !== "children" && v !== "key") {
            W(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ye(e, a, u, v, b, y) {
      {
        var g = _t(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Dt(b);
          $ ? m += $ : m += Ne();
          var C;
          e === null ? C = "null" : ce(e) ? C = "array" : e !== void 0 && e.$$typeof === t ? (C = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = It(e, a, u, b, y);
        if (P == null)
          return P;
        if (g) {
          var F = a.children;
          if (F !== void 0)
            if (v)
              if (ce(F)) {
                for (var Y = 0; Y < F.length; Y++)
                  We(F[Y], e);
                Object.freeze && Object.freeze(F);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(F, e);
        }
        return e === n ? At(P) : Lt(P), P;
      }
    }
    function qt(e, a, u) {
      return Ye(e, a, u, !0);
    }
    function Nt(e, a, u) {
      return Ye(e, a, u, !1);
    }
    var Mt = Nt, kt = qt;
    G.Fragment = n, G.jsx = Mt, G.jsxs = kt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Bt() : ve.exports = zt();
var f = ve.exports;
const Qe = typeof document < "u" ? Wt : O, Ut = "_spice_wrapper_1b9je_1", Ht = "_spice_wrapper_hidden_1b9je_10", Ue = {
  spice_wrapper: Ut,
  spice_wrapper_hidden: Ht
}, Ze = V(!0), et = V((r) => !r), Gt = ({ children: r }) => {
  const [t, o] = A(!0);
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: t, children: /* @__PURE__ */ f.jsx(et.Provider, { value: o, children: r }) });
}, Jt = ({ children: r }) => {
  const t = B(Ze);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${Ue.spice_wrapper} ${t ? Ue.spice_wrapper_hidden : ""}`,
      children: r
    }
  );
}, Qn = ({ children: r }) => /* @__PURE__ */ f.jsx(Gt, { children: /* @__PURE__ */ f.jsx(Jt, { children: r }) }), tt = () => B(et), Xt = "_spice_aside_aside_4cj7n_1", Kt = "_spice_aside_main_4cj7n_5", pe = {
  spice_aside_aside: Xt,
  spice_aside_main: Kt
}, Zn = ({
  className: r,
  children: t,
  aside: o,
  isSticky: n = !1
}) => {
  const i = tt();
  return Qe(() => (n && i(() => !1), () => {
    i(() => !0);
  }), [n, i]), /* @__PURE__ */ f.jsxs("div", { className: r || "", children: [
    o.index === 1 && /* @__PURE__ */ f.jsx("div", { className: pe.spice_aside_main, children: t }),
    /* @__PURE__ */ f.jsx(
      "aside",
      {
        className: `${pe.spice_aside_aside} ${o.className ? o.className : ""}`,
        children: o.chidren
      }
    ),
    o.index === 0 && /* @__PURE__ */ f.jsx("div", { className: pe.spice_aside_main, children: t })
  ] });
}, Qt = "_spice_form_input_yxowj_1", Zt = "_spice_form_select_yxowj_2", en = "_spice_form_radioCheckInput_yxowj_8", ge = {
  spice_form_input: Qt,
  spice_form_select: Zt,
  spice_form_radioCheckInput: en
}, He = ({
  formProps: r,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...r,
    className: `${ge.spice_form_input} ${t || ""}`
  }
), tn = ({ formProps: r }) => {
  const { isSelect: t, ...o } = r;
  if (!t)
    return;
  const n = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ f.jsx("option", { hidden: !0, children: s }) : null;
  }, i = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ f.jsxs(
    "select",
    {
      ...o,
      className: ge.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ f.jsx(n, {}),
        t.options.map((s) => /* @__PURE__ */ f.jsx("option", { value: s, children: s }, s))
      ]
    }
  );
}, Ge = ({
  layoutType: r,
  formPropsArr: t,
  label: o,
  FormItem: n,
  errors: i
}) => {
  const s = x(
    (c) => !i || !i[c] ? null : i[c],
    [i]
  );
  if (r === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsx(n, { formProps: t[0] }),
      s(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(n, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(n, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const c = t.map((l) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        n,
        {
          formProps: l,
          className: ge.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { children: o }),
      /* @__PURE__ */ f.jsx("ul", { children: c }),
      s(0)
    ] });
  }
}, nn = ({ formProps: r }) => {
  const { isTextarea: t, ...o } = r;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, er = ({
  className: r,
  label: t,
  formProps: o,
  errors: n
}) => {
  const i = o, s = i[0].type, c = i.length, l = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = x(
    (_) => Ge({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: _,
      errors: n
    }),
    [n, i, t, c]
  ), h = x(() => l ? p(tn) : d ? p(nn) : s === "radio" || s === "checkbox" ? Ge({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: He,
    errors: n
  }) : p(He), [n, i, t, l, d, p, s]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${r}`, children: /* @__PURE__ */ f.jsx(h, {}) });
}, ne = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), rn = "_spice_dropdown_wrapper_1nq94_1", on = "_spice_dropdown_content_1nq94_5", sn = "_spice_dropdown_content_hidden_1nq94_10", an = "_spice_dropdown_content_pointerPrevent_1nq94_15", J = {
  spice_dropdown_wrapper: rn,
  spice_dropdown_content: on,
  spice_dropdown_content_hidden: sn,
  spice_dropdown_content_pointerPrevent: an,
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
}, tr = ({
  position: r,
  parent: t,
  content: o,
  callback: n,
  className: i
}) => {
  const s = T(null), c = T(!1), [l, d] = A(!1), [p, h] = A(!0), _ = x(() => {
    c.current = !0, h(!1), d(!0), n != null && n.onEnter && n.onEnter(s.current);
  }, [n]), w = x(async () => {
    c.current = !1, h(!0), n != null && n.onLeave && await ne(n.onLeave(s.current)), c.current || d(!1);
  }, [n]);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onMouseEnter: _,
      onMouseLeave: w,
      onClick: w,
      className: `${J.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ f.jsx(
          "div",
          {
            ref: s,
            className: `${J.spice_dropdown_content} ${l ? "" : J.spice_dropdown_content_hidden} ${p ? J.spice_dropdown_content_pointerPrevent : ""} ${J["spice_dropdown_" + r]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, cn = (r = 60, t = []) => {
  r > 60 && (r = 60);
  const o = Math.floor(1e3 / r), n = T(performance.now()), i = x(
    (l) => {
      const d = l - n.current, p = d <= o;
      return p || (n.current = l - d % o), p;
    },
    [o]
  ), s = T({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, c = x(
    (l) => {
      s.id = requestAnimationFrame(c), !i(l) && s.callback && s.isPlay && s.callback(l);
    },
    [i, s]
  );
  return O(() => (s.id = requestAnimationFrame(c), () => {
    cancelAnimationFrame(s.id);
  }), t), (l, d) => {
    if (l === "play") {
      if (!d) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      s.callback = d, s.isPlay = !0;
    } else
      l === "pause" && (s.isPlay = !1);
  };
}, un = "_spice_magnet_stopPropagation_99wvn_1", ln = {
  spice_magnet_stopPropagation: un
}, nr = ({
  className: r,
  children: t,
  callback: o,
  fps: n = 60,
  stopPropagation: i = !1,
  isOnClickReset: s = !1,
  dependencies: c = []
}) => {
  const l = T(null), d = T(null), p = T();
  n > 60 && (n = 60);
  const h = cn(n, c), _ = L(
    () => ({
      target: l.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), w = x(
    (R) => {
      _.target = l.current, _.children = d.current;
    },
    [_]
  ), E = x(
    (R) => {
      p.current = R.currentTarget.getBoundingClientRect(), _.x = R.clientX - p.current.left - p.current.width / 2, _.y = R.clientY - p.current.top - p.current.height / 2;
    },
    [_]
  ), j = x(
    (R) => {
      R.stopPropagation(), w(R), E(R), h("play", () => {
        o.onMove(_);
      });
    },
    [w, E, h, o, _]
  ), q = x(
    (R) => {
      R.stopPropagation(), E(R);
    },
    [E]
  ), I = x(
    (R) => {
      R.stopPropagation(), h("pause"), o.onLeave && o.onLeave(_);
    },
    [h, o, _]
  ), D = x(
    (R) => {
      I(R);
    },
    [I]
  ), S = x(
    (R) => {
      s && I(R);
    },
    [I, s]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: j,
      onMouseMove: q,
      onMouseLeave: D,
      onClick: S,
      className: r || "",
      ref: l,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: d,
          className: i ? ln.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, dn = "_spice_thumbnail_wrapper_1qqot_1", fn = "_spice_thumbnail_view_1qqot_5", pn = "_spice_thumbnail_golden_1qqot_26", _n = "_spice_thumbnail_silver_1qqot_30", hn = "_spice_thumbnail_platinum_1qqot_34", vn = "_spice_thumbnail_square_1qqot_42", _e = {
  spice_thumbnail_wrapper: dn,
  spice_thumbnail_view: fn,
  spice_thumbnail_golden: pn,
  spice_thumbnail_silver: _n,
  spice_thumbnail_platinum: hn,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: vn,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, rr = ({ ratio: r, children: t, className: o }) => {
  const n = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let i = n.includes(r), s = typeof r == "number" && r > 0;
  if (!i && !s)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${n.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${_e.spice_thumbnail_wrapper} ${o || ""}`,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${_e.spice_thumbnail_view} ${i ? _e["spice_thumbnail_" + r] : ""}`,
          style: s ? { paddingTop: `${r}%` } : {},
          children: t
        }
      )
    }
  );
}, Je = (r) => {
  const t = document.documentElement.style, o = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, mn = "_spice_modal_dialog_1t31c_1", gn = {
  spice_modal_dialog: mn
}, wn = ".spice__modal_close", or = ({
  children: r,
  tag: t,
  className: o,
  dialog: n,
  callback: i
}) => {
  const s = t || "button", c = T(null), l = x(() => {
    Je("add"), c.current.showModal(), i != null && i.onOpen && i.onOpen(c.current);
  }, [i]), d = x(async () => {
    i != null && i.onClose && await ne(i.onClose(c.current)), Je("remove"), c.current.close();
  }, [i]);
  return O(() => {
    const p = c.current.querySelectorAll(wn);
    if (p)
      return p.forEach(
        (h) => h.addEventListener("click", d)
      ), () => {
        p.forEach(
          (h) => h.removeEventListener("click", d)
        );
      };
  }, [d]), O(() => {
    const p = (h) => {
      var w;
      ((w = c.current) == null ? void 0 : w.hasAttribute("open")) && h.key === "Escape" && d();
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [d]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      s,
      {
        className: o || "",
        onClick: () => {
          l();
        },
        children: r
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: c,
        onClick: (p) => {
          p.target === c.current && d();
        },
        className: `${gn.spice_modal_dialog} ${n.className ? n.className : ""}`,
        children: n.children
      }
    )
  ] });
}, bn = me(
  ({ children: r, className: t }, o) => {
    const n = tt();
    return O(() => (n(() => !1), () => {
      n(() => !0);
    }), [n]), /* @__PURE__ */ f.jsx("div", { ref: o, className: t || "", children: r });
  }
);
bn.displayName = "StickyItem";
const ir = (r) => {
  const t = T(null), [o, n] = A(!1), { fallback: i, ...s } = r;
  return O(() => {
    var c;
    (c = t.current) == null || c.play().then(() => {
      n(!1);
    }).catch(() => {
      n(!0);
    });
  }, []), o ? i : /* @__PURE__ */ f.jsx("video", { ref: t, ...s });
}, sr = ({
  text: r,
  type: t = "chars",
  splitClassName: o
}) => {
  const n = t === "chars" ? "" : " ";
  return r.split(`
`).flatMap((s, c, l) => [
    ...s.split(n).map(
      (d, p) => d === " " ? /* @__PURE__ */ f.jsx(
        "span",
        {
          className: `${o || ""}`,
          children: " "
        },
        `${c}-${p}`
      ) : /* @__PURE__ */ f.jsx(
        "span",
        {
          className: `${o || ""}`,
          children: d
        },
        `${c}-${p}`
      )
    ),
    c < l.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, c) : null
  ]);
}, yn = "_spice_loader_wrapper_njkek_1", xn = "_spice_loader_container_njkek_6", En = "_spice_loader_skelton_njkek_13", jn = "_skeleton_njkek_1", Tn = "_spice_loader_circular_njkek_31", Sn = "_cicrular_njkek_1", te = {
  spice_loader_wrapper: yn,
  spice_loader_container: xn,
  spice_loader_skelton: En,
  skeleton: jn,
  spice_loader_circular: Tn,
  cicrular: Sn
}, Rn = me(
  ({
    className: r,
    loader: t = "skeleton",
    delay: o = 1e3,
    onView: n,
    skelton: i,
    circular: s,
    children: c
  }, l) => {
    const [d, p] = A(o === 0), h = !!c;
    return O(() => {
      o !== 0 && setTimeout(() => p(!0), o);
    }, [o]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: l,
        className: `${r || ""} ${te.spice_loader_wrapper} `,
        style: h ? {
          maxWidth: "fit-content",
          height: "auto"
        } : {},
        children: /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: te.spice_loader_container,
            style: d ? {
              opacity: 1,
              transitionProperty: "opacity",
              transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
              transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
            } : {},
            children: [
              t === "skeleton" ? /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: te.spice_loader_skelton,
                  style: {
                    background: `linear-gradient(90deg,transparent,${(i == null ? void 0 : i.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "ease-in-out"
                  }
                }
              ) : t === "circular" ? /* @__PURE__ */ f.jsx(
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
              h && /* @__PURE__ */ f.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
Rn.displayName = "Loader";
const Cn = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, nt = V(Cn), rt = V(
  () => {
  }
), Pn = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, n] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(nt.Provider, { value: o, children: /* @__PURE__ */ f.jsx(rt.Provider, { value: n, children: r }) });
}, ot = () => B(nt), we = () => B(rt), On = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = we(), i = ot(), s = x(() => {
    i.current === t || i.isLeaving || n((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [n, i, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: s,
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      children: r
    }
  );
}, it = ({ content: r, isOpen: t }) => {
  const o = r.querySelectorAll("a,button");
  if (!o)
    return;
  const n = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", n);
  });
}, $n = "_spice_tab_hidden_1r0oa_1", In = {
  spice_tab_hidden: $n
}, Dn = ({
  children: r,
  value: t,
  className: o,
  callback: n
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = T(!0), s = T(null), c = we(), l = ot(), d = l.current === t && !l.isLeaving;
  return O(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!l.isAnimation) {
      d && n != null && n.onReset && n.onReset(s.current);
      return;
    }
    l.prev === t && (async () => (n != null && n.onClose && await ne(n.onClose(s.current)), c((p) => ({
      ...p,
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), d && n != null && n.onOpen && n.onOpen(s.current);
  }, [l, c, n, t, d]), O(() => {
    it({
      content: s.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: s,
      className: `${l.current !== t ? In.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      children: r
    }
  );
}, Fn = () => {
  const r = we();
  return (t, o) => {
    r((n) => ({
      isAnimation: o,
      isLeaving: o,
      prev: o ? n.current : "",
      current: o ? n.current : t,
      next: o ? t : ""
    }));
  };
}, ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: On,
  Content: Dn,
  Context: Pn,
  useTabSwitch: Fn
}, Symbol.toStringTag, { value: "Module" })), Ln = {
  target: "",
  toggle: !1,
  defaultValue: []
}, st = V(Ln), at = V(() => {
}), An = ({ children: r, defaultValue: t }) => {
  const [o, n] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(st.Provider, { value: o, children: /* @__PURE__ */ f.jsx(at.Provider, { value: n, children: r }) });
}, ct = () => B(st), qn = () => B(at), Nn = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = ct(), i = qn(), s = L(
    () => !!n.defaultValue.find((d) => d === t),
    [n, t]
  ), [c, l] = A(s);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        i((d) => ({
          ...d,
          toggle: c,
          target: t
        })), l(!c);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": c,
      children: r
    }
  );
}, Mn = ({
  targetRef: r,
  callback: t,
  debounce: o = 100,
  dependencies: n = []
}) => {
  const i = T(0), s = T(!0);
  O(() => {
    const c = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(d[0].target);
      }, o);
    }), l = r.current;
    if (l)
      return c.observe(l), () => {
        c.unobserve(l), clearTimeout(i.current);
      };
  }, n);
}, kn = "_spice_accordion_content_1wkzs_1", Wn = "_spice_accordion_hidden_1wkzs_5", Xe = {
  spice_accordion_content: kn,
  spice_accordion_hidden: Wn
}, Yn = ({
  value: r,
  callback: t,
  children: o,
  className: n
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = ct(), s = L(
    () => !!i.defaultValue.find((_) => _ === r),
    [i, r]
  ), [c, l] = A(s);
  L(() => {
    i.target === r && l(!c);
  }, [i.target, i.toggle]);
  const d = T(!0), p = T(null), h = T(null);
  return O(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const _ = {
      height: h.current.getBoundingClientRect().height,
      target: p.current
    };
    c ? t.onOpen(_) : t.onClose(_);
  }, [c, t]), O(() => {
    it({ content: p.current, isOpen: c });
  }, [c]), Mn({
    targetRef: h,
    callback: (_) => {
      const w = _.getBoundingClientRect().height;
      c && (p.current.style.height = `${w}px`);
    },
    dependencies: [c],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: p,
      className: `${Xe.spice_accordion_content} ${s ? "" : Xe.spice_accordion_hidden}`,
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !c,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, className: n || "", children: o })
    }
  );
}, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Nn,
  Content: Yn,
  Context: An
}, Symbol.toStringTag, { value: "Module" })), Vn = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: n,
  onProgress: i,
  onStart: s,
  onComplete: c
}) => {
  const l = L(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = T(null), p = x(
    ({
      digitContainer: _,
      numbersTarget: w,
      digit: E,
      digitNumber: j,
      currentPercent: q,
      limit: I,
      destination: D
    }) => {
      if (l[E] !== j && q <= I) {
        const S = j.toString(), R = (Math.min(8, j) + 1).toString(), oe = q >= I;
        w[0].innerText = S, w[1].innerText = oe ? "0" : R, i && i({
          digitContainer: _,
          percent: q,
          digit: E,
          destination: D,
          duration: r / (D / E)
        }), l[E] = j;
      }
    },
    [l, i, r]
  ), h = x(
    (_) => (_ > 100 && (_ = 100), new Promise((w) => {
      if (_ === 0)
        return;
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: n.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const j = l.to += 1, q = async () => {
          clearInterval(d.current), j > 100 && c && await ne(c(E.getAll())), w(j - 1);
        };
        j === 1 && s && s(E.getAll()), j > _ && await q();
        const I = Math.floor(j / 100) % 100, D = Math.floor(j / 10) % 10, S = j % 10;
        p({
          digitContainer: t.current,
          digit: 1,
          digitNumber: S,
          currentPercent: j,
          numbersTarget: E.ones,
          limit: 90,
          destination: _
        }), p({
          digitContainer: o.current,
          digit: 10,
          digitNumber: D,
          currentPercent: j,
          numbersTarget: E.tens,
          limit: 90,
          destination: _
        }), l[100] !== I && (E.hundreds[1].innerText = I.toString(), i && i({
          digitContainer: n.current,
          percent: j,
          digit: 100,
          destination: _,
          duration: r / (_ / 10)
        }), l[100] = I);
      }, Math.max(1e3 / 60, r / _ * 1e3));
    })),
    [
      l,
      p,
      o,
      n,
      t,
      c,
      i,
      s,
      r
    ]
  );
  return O(() => () => {
    clearInterval(d.current);
  }, []), h;
}, Bn = "_spice_loadingProgress_digit_avxoy_1", zn = {
  spice_loadingProgress_digit: Bn
}, ut = Yt(
  me(({ className: r }, t) => /* @__PURE__ */ f.jsxs("div", { className: zn.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" }),
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" })
  ] }))
);
ut.displayName = "Digit";
const ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: ut,
  useLoadingProgress: Vn
}, Symbol.toStringTag, { value: "Module" })), lr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: n = !1,
  callback: i,
  dependencies: s = []
}) => {
  const c = {
    rootMargin: t,
    threshold: o
  };
  O(() => {
    const l = r == null ? void 0 : r.current;
    if (!l)
      return;
    const d = (h, _) => {
      h.forEach((w) => {
        w.isIntersecting && i.onEnter ? (i.onEnter(w), n && _.unobserve(w.target)) : !w.isIntersecting && i.onLeave && i.onLeave(w);
      });
    }, p = new IntersectionObserver(d, c);
    return p.observe(l), () => {
      p.unobserve(l);
    };
  }, s);
}, re = ({
  callback: r,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const n = T(0), i = T(0), s = x(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: n.current
      });
    }, t);
  }, [r, t]);
  O(() => (n.current = window.innerWidth, window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s), clearTimeout(i.current);
  }), o);
}, Un = ({
  initWinW: r,
  winW: t,
  threshold: o
}) => {
  let n = !(r <= o);
  t <= o ? n && window.location.reload() : !n && window.location.reload();
}, Hn = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Gn = () => {
  console.log(Hn);
}, Jn = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, dr = ({
  reloadThresholds: r,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const n = x(
    (i) => {
      t && Jn(i);
    },
    [t]
  );
  re({
    callback: ({ initWinW: i, winW: s }) => {
      r && r.forEach(
        (c) => Un({
          initWinW: i,
          winW: s,
          threshold: c
        })
      ), n(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), o && process.env.NODE_ENV !== "development" && Gn();
  }, [o, n]);
}, Xn = () => {
  const [r, t] = A(null), o = x(() => {
    const n = window.ontouchstart, i = navigator.maxTouchPoints;
    n !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return re({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), O(() => o(), [o]), r;
}, he = "scroll", fr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const n = T(null), [i, s] = Vt(
    (h, _) => {
      switch (_.type) {
        case he:
          return n.current = _.payload, _.payload;
        default:
          return h;
      }
    },
    n.current
  ), c = T(0), l = T(0), d = () => window.scrollY || document.documentElement.scrollTop, p = x(() => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const h = d();
      h > c.current + r && n.current !== "down" ? s({ type: he, payload: "down" }) : h < c.current - r && n.current !== "up" && s({ type: he, payload: "up" }), c.current = h;
    }, t);
  }, [t, r]);
  return O(() => (c.current = d(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(l.current);
  }), o), i;
}, pr = ({ type: r, width: t }) => {
  const [o, n] = A(null), i = x(
    (s) => {
      switch (r) {
        case "max":
          n(t >= s);
          break;
        case "min":
          n(t <= s);
          break;
      }
    },
    [r, t]
  );
  return re({
    callback: ({ winW: s }) => i(s),
    debounce: 100,
    dependencies: []
  }), O(() => i(window.innerWidth), [i]), o;
}, _r = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: o = "",
  width: n = 600,
  height: i = 800
}) => {
  const s = L(() => encodeURIComponent(r), [r]), c = L(
    () => `height=${i},width=${n}`,
    [i, n]
  ), l = L(
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
  ), d = L(
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
  ), p = L(
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
  ), h = L(
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
  ), [_, w] = A(!1), E = L(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          w(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: l,
    X: d,
    LINE: p,
    share: h,
    copy: E,
    isCopied: _
  };
}, hr = (r) => {
  const t = Xn();
  Qe(() => {
    !t || !r.current || (r.current.style.height = `${window.screen.height}px`);
  }, [t, r]), re({
    callback: ({ winH: o }) => {
      r.current && (t ? r.current.style.height = `${window.screen.height}px` : r.current.style.height = `${o}px`);
    },
    dependencies: [t]
  });
};
export {
  cr as Accordion,
  Zn as AsideLayout,
  tr as Dropdown,
  er as FormField,
  Rn as Loader,
  ur as LoadingProgress,
  ir as LowPowerVideo,
  nr as Magnet,
  or as ModalButton,
  sr as SplitText,
  bn as StickyItem,
  ar as Tab,
  rr as Thumbnail,
  Qn as WrapperLayout,
  hr as use100vh,
  cn as useAnimationFrame,
  lr as useIntersectionObserver,
  Xn as useIsTouchDevice,
  Qe as useIsomorphicLayoutEffect,
  pr as useMediaQuery,
  tt as useOverflowDispatch,
  Mn as useResizeObserver,
  fr as useScrollDirection,
  _r as useShare,
  dr as useStarter,
  re as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
