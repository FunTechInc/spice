import Xe, { useLayoutEffect as Wt, useEffect as O, createContext as V, useContext as B, useState as A, useCallback as b, useRef as T, useMemo as L, forwardRef as he, memo as qt, useReducer as Yt } from "react";
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
function Vt() {
  if (Ve)
    return H;
  Ve = 1;
  var n = Xe, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, d, p) {
    var v, _ = {}, w = null, E = null;
    p !== void 0 && (w = "" + p), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (v in d)
      r.call(d, v) && !s.hasOwnProperty(v) && (_[v] = d[v]);
    if (u && u.defaultProps)
      for (v in d = u.defaultProps, d)
        _[v] === void 0 && (_[v] = d[v]);
    return { $$typeof: t, type: u, key: w, ref: E, props: _, _owner: i.current };
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
var Be;
function Bt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), j = Symbol.iterator, k = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = j && e[j] || e[k];
      return typeof a == "function" ? a : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++)
          l[h - 1] = arguments[h];
        R("error", e, l);
      }
    }
    function R(e, a, l) {
      {
        var h = F.ReactDebugCurrentFrame, y = h.getStackAddendum();
        y !== "" && (a += "%s", l = l.concat([y]));
        var x = l.map(function(g) {
          return String(g);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var oe = !1, ut = !1, lt = !1, dt = !1, ft = !1, we;
    we = Symbol.for("react.module.reference");
    function pt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === s || ft || e === i || e === p || e === v || dt || e === E || oe || ut || lt || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === we || e.getModuleId !== void 0));
    }
    function _t(e, a, l) {
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
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case v:
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
          case d:
            return _t(e, e.render, "ForwardRef");
          case _:
            var h = e.displayName || null;
            return h !== null ? h : N(e.type) || "Memo";
          case w: {
            var y = e, x = y._payload, g = y._init;
            try {
              return N(g(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, z = 0, xe, be, Ee, je, Te, Se, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function vt() {
      {
        if (z === 0) {
          xe = console.log, be = console.info, Ee = console.warn, je = console.error, Te = console.group, Se = console.groupCollapsed, Re = console.groupEnd;
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
    function ht() {
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
              value: Te
            }),
            groupCollapsed: W({}, e, {
              value: Se
            }),
            groupEnd: W({}, e, {
              value: Re
            })
          });
        }
        z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = F.ReactCurrentDispatcher, se;
    function X(e, a, l) {
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
      var mt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new mt();
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
      x = ie.current, ie.current = null, vt();
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
              h = M;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (M) {
              h = M;
            }
            e.call(g.prototype);
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
`), $ = h.stack.split(`
`), C = m.length - 1, P = $.length - 1; C >= 1 && P >= 0 && m[C] !== $[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== $[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== $[P]) {
                    var I = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, ht(), Error.prepareStackTrace = y;
      }
      var Y = e ? e.displayName || e.name : "", Ye = Y ? X(Y) : "";
      return typeof e == "function" && K.set(e, Ye), Ye;
    }
    function gt(e, a, l) {
      return Pe(e, !1);
    }
    function wt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function Q(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, wt(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case p:
          return X("Suspense");
        case v:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return gt(e.render);
          case _:
            return Q(e.type, a, l);
          case w: {
            var h = e, y = h._payload, x = h._init;
            try {
              return Q(x(y), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Oe = {}, $e = F.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var a = e._owner, l = Q(e.type, e._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    function yt(e, a, l, h, y) {
      {
        var x = Function.call.bind(Z);
        for (var g in e)
          if (x(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var $ = Error((h || "React class") + ": " + l + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = e[g](a, g, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ee(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, g, typeof m), ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ee(y), S("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var xt = Array.isArray;
    function ce(e) {
      return xt(e);
    }
    function bt(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Et(e) {
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
      if (Et(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), De(e);
    }
    var U = F.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Le, ue;
    ue = {};
    function Tt(e) {
      if (Z.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function St(e) {
      if (Z.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Rt(e, a) {
      if (typeof e.ref == "string" && U.current && a && U.current.stateNode !== a) {
        var l = N(U.current.type);
        ue[l] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(U.current.type), e.ref), ue[l] = !0);
      }
    }
    function Ct(e, a) {
      {
        var l = function() {
          Ie || (Ie = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Pt(e, a) {
      {
        var l = function() {
          Le || (Le = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Ot = function(e, a, l, h, y, x, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: g,
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
    function $t(e, a, l, h, y) {
      {
        var x, g = {}, m = null, $ = null;
        l !== void 0 && (Fe(l), m = "" + l), St(a) && (Fe(a.key), m = "" + a.key), Tt(a) && ($ = a.ref, Rt(a, y));
        for (x in a)
          Z.call(a, x) && !jt.hasOwnProperty(x) && (g[x] = a[x]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (x in C)
            g[x] === void 0 && (g[x] = C[x]);
        }
        if (m || $) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Ct(g, P), $ && Pt(g, P);
        }
        return Ot(e, m, $, y, h, U.current, g);
      }
    }
    var le = F.ReactCurrentOwner, Ae = F.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var a = e._owner, l = Q(e.type, e._source, a ? a.type : null);
        Ae.setExtraStackFrame(l);
      } else
        Ae.setExtraStackFrame(null);
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
    function Dt(e) {
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
    function Ft(e) {
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
        var l = Ft(a);
        if (Ne[l])
          return;
        Ne[l] = !0;
        var h = "";
        e && e._owner && e._owner !== le.current && (h = " It was passed a child from " + N(e._owner.type) + "."), q(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), q(null);
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
          var y = D(e);
          if (typeof y == "function" && y !== e.entries)
            for (var x = y.call(e), g; !(g = x.next()).done; )
              fe(g.value) && Me(g.value, a);
        }
      }
    }
    function It(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === _))
          l = a.propTypes;
        else
          return;
        if (l) {
          var h = N(a);
          yt(l, e.props, "prop", h, e);
        } else if (a.PropTypes !== void 0 && !de) {
          de = !0;
          var y = N(a);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var h = a[l];
          if (h !== "children" && h !== "key") {
            q(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function qe(e, a, l, h, y, x) {
      {
        var g = pt(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Dt(y);
          $ ? m += $ : m += ke();
          var C;
          e === null ? C = "null" : ce(e) ? C = "array" : e !== void 0 && e.$$typeof === t ? (C = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = $t(e, a, l, y, x);
        if (P == null)
          return P;
        if (g) {
          var I = a.children;
          if (I !== void 0)
            if (h)
              if (ce(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  We(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(I, e);
        }
        return e === r ? Lt(P) : It(P), P;
      }
    }
    function At(e, a, l) {
      return qe(e, a, l, !0);
    }
    function kt(e, a, l) {
      return qe(e, a, l, !1);
    }
    var Nt = kt, Mt = At;
    G.Fragment = r, G.jsx = Nt, G.jsxs = Mt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Vt() : ve.exports = Bt();
var f = ve.exports;
const Ke = typeof document < "u" ? Wt : O, zt = "_spice_wrapper_1b9je_1", Ut = "_spice_wrapper_hidden_1b9je_10", ze = {
  spice_wrapper: zt,
  spice_wrapper_hidden: Ut
}, Qe = V(!0), Ze = V((n) => !n), Ht = ({ children: n }) => {
  const [t, o] = A(!0);
  return /* @__PURE__ */ f.jsx(Qe.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Ze.Provider, { value: o, children: n }) });
}, Gt = ({ children: n }) => {
  const t = B(Qe);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${ze.spice_wrapper} ${t ? ze.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, Ur = ({ children: n }) => /* @__PURE__ */ f.jsx(Ht, { children: /* @__PURE__ */ f.jsx(Gt, { children: n }) }), et = () => B(Ze), Jt = "_spice_aside_aside_4cj7n_1", Xt = "_spice_aside_main_4cj7n_5", pe = {
  spice_aside_aside: Jt,
  spice_aside_main: Xt
}, Hr = ({
  className: n,
  children: t,
  aside: o,
  isSticky: r = !1
}) => {
  const i = et();
  return Ke(() => (r && i(() => !1), () => {
    i(() => !0);
  }), [r, i]), /* @__PURE__ */ f.jsxs("div", { className: n || "", children: [
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
}, Kt = "_spice_form_input_yxowj_1", Qt = "_spice_form_select_yxowj_2", Zt = "_spice_form_radioCheckInput_yxowj_8", me = {
  spice_form_input: Kt,
  spice_form_select: Qt,
  spice_form_radioCheckInput: Zt
}, Ue = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...n,
    className: `${me.spice_form_input} ${t || ""}`
  }
), er = ({ formProps: n }) => {
  const { isSelect: t, ...o } = n;
  if (!t)
    return;
  const r = () => {
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
      className: me.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ f.jsx(r, {}),
        t.options.map((s) => /* @__PURE__ */ f.jsx("option", { value: s, children: s }, s))
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
  const s = b(
    (c) => !i || !i[c] ? null : i[c],
    [i]
  );
  if (n === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
      s(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const c = t.map((u) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        r,
        {
          formProps: u,
          className: me.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { children: o }),
      /* @__PURE__ */ f.jsx("ul", { children: c }),
      s(0)
    ] });
  }
}, tr = ({ formProps: n }) => {
  const { isTextarea: t, ...o } = n;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, Gr = ({
  className: n,
  label: t,
  formProps: o,
  errors: r
}) => {
  const i = o, s = i[0].type, c = i.length, u = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = b(
    (_) => He({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: _,
      errors: r
    }),
    [r, i, t, c]
  ), v = b(() => u ? p(er) : d ? p(tr) : s === "radio" || s === "checkbox" ? He({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Ue,
    errors: r
  }) : p(Ue), [r, i, t, u, d, p, s]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ f.jsx(v, {}) });
}, re = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), rr = "_spice_dropdown_wrapper_1nq94_1", nr = "_spice_dropdown_content_1nq94_5", or = "_spice_dropdown_content_hidden_1nq94_10", ir = "_spice_dropdown_content_pointerPrevent_1nq94_15", J = {
  spice_dropdown_wrapper: rr,
  spice_dropdown_content: nr,
  spice_dropdown_content_hidden: or,
  spice_dropdown_content_pointerPrevent: ir,
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
}, Jr = ({
  position: n,
  parent: t,
  content: o,
  callback: r,
  className: i
}) => {
  const s = T(null), c = T(!1), [u, d] = A(!1), [p, v] = A(!0), _ = b(() => {
    c.current = !0, v(!1), d(!0), r != null && r.onEnter && r.onEnter(s.current);
  }, [r]), w = b(async () => {
    c.current = !1, v(!0), r != null && r.onLeave && await re(r.onLeave(s.current)), c.current || d(!1);
  }, [r]);
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
            className: `${J.spice_dropdown_content} ${u ? "" : J.spice_dropdown_content_hidden} ${p ? J.spice_dropdown_content_pointerPrevent : ""} ${J["spice_dropdown_" + n]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, sr = (n = 60, t = []) => {
  n > 60 && (n = 60);
  const o = Math.floor(1e3 / n), r = T(performance.now()), i = b(
    (u) => {
      const d = u - r.current, p = d <= o;
      return p || (r.current = u - d % o), p;
    },
    [o]
  ), s = T({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, c = b(
    (u) => {
      s.id = requestAnimationFrame(c), !i(u) && s.callback && s.isPlay && s.callback(u);
    },
    [i, s]
  );
  return O(() => (s.id = requestAnimationFrame(c), () => {
    cancelAnimationFrame(s.id);
  }), t), (u, d) => {
    if (u === "play") {
      if (!d) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      s.callback = d, s.isPlay = !0;
    } else
      u === "pause" && (s.isPlay = !1);
  };
}, ar = "_spice_magnet_stopPropagation_99wvn_1", cr = {
  spice_magnet_stopPropagation: ar
}, Xr = ({
  className: n,
  children: t,
  callback: o,
  fps: r = 60,
  stopPropagation: i = !1,
  isOnClickReset: s = !1,
  dependencies: c = []
}) => {
  const u = T(null), d = T(null), p = T();
  r > 60 && (r = 60);
  const v = sr(r, c), _ = L(
    () => ({
      target: u.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), w = b(
    (R) => {
      _.target = u.current, _.children = d.current;
    },
    [_]
  ), E = b(
    (R) => {
      p.current = R.currentTarget.getBoundingClientRect(), _.x = R.clientX - p.current.left - p.current.width / 2, _.y = R.clientY - p.current.top - p.current.height / 2;
    },
    [_]
  ), j = b(
    (R) => {
      R.stopPropagation(), w(R), E(R), v("play", () => {
        o.onMove(_);
      });
    },
    [w, E, v, o, _]
  ), k = b(
    (R) => {
      R.stopPropagation(), E(R);
    },
    [E]
  ), D = b(
    (R) => {
      R.stopPropagation(), v("pause"), o.onLeave && o.onLeave(_);
    },
    [v, o, _]
  ), F = b(
    (R) => {
      D(R);
    },
    [D]
  ), S = b(
    (R) => {
      s && D(R);
    },
    [D, s]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: j,
      onMouseMove: k,
      onMouseLeave: F,
      onClick: S,
      className: n || "",
      ref: u,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: d,
          className: i ? cr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, ur = "_spice_thumbnail_container_1i0fe_1", lr = {
  spice_thumbnail_container: ur
}, Kr = ({ ratio: n, children: t, className: o }) => {
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
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${lr.spice_thumbnail_container} ${o || ""}`,
      style: {
        aspectRatio: r
      },
      children: t
    }
  );
}, Ge = (n) => {
  const t = document.documentElement.style, o = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, dr = "_spice_modal_dialog_1t31c_1", fr = {
  spice_modal_dialog: dr
}, pr = ".spice__modal_close", Qr = ({
  children: n,
  tag: t,
  className: o,
  dialog: r,
  callback: i
}) => {
  const s = t || "button", c = T(null), u = b(() => {
    Ge("add"), c.current.showModal(), i != null && i.onOpen && i.onOpen(c.current);
  }, [i]), d = b(async () => {
    i != null && i.onClose && await re(i.onClose(c.current)), Ge("remove"), c.current.close();
  }, [i]);
  return O(() => {
    const p = c.current.querySelectorAll(pr);
    if (p)
      return p.forEach(
        (v) => v.addEventListener("click", d)
      ), () => {
        p.forEach(
          (v) => v.removeEventListener("click", d)
        );
      };
  }, [d]), O(() => {
    const p = (v) => {
      var w;
      ((w = c.current) == null ? void 0 : w.hasAttribute("open")) && v.key === "Escape" && d();
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
          u();
        },
        children: n
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: c,
        onClick: (p) => {
          p.target === c.current && d();
        },
        className: `${fr.spice_modal_dialog} ${r.className ? r.className : ""}`,
        children: r.children
      }
    )
  ] });
}, _r = he(
  ({ children: n, className: t }, o) => {
    const r = et();
    return O(() => (r(() => !1), () => {
      r(() => !0);
    }), [r]), /* @__PURE__ */ f.jsx("div", { ref: o, className: t || "", children: n });
  }
);
_r.displayName = "StickyItem";
const Zr = (n) => {
  const t = T(null), [o, r] = A(!1), { fallback: i, ...s } = n;
  return O(() => {
    var c;
    (c = t.current) == null || c.play().then(() => {
      r(!1);
    }).catch(() => {
      r(!0);
    });
  }, []), o ? i : /* @__PURE__ */ f.jsx("video", { ref: t, ...s });
}, en = ({
  text: n,
  type: t = "chars",
  splitClassName: o,
  splitStyle: r
}) => {
  const i = t === "chars" ? "" : " ";
  return n.split(`
`).flatMap((c, u, d) => [
    ...c.split(i).map(
      (p, v) => p === " " ? /* @__PURE__ */ f.jsx(
        "span",
        {
          style: r,
          className: `${o || ""}`,
          children: " "
        },
        `${u}-${v}`
      ) : /* @__PURE__ */ f.jsx(
        "span",
        {
          style: r,
          className: `${o || ""}`,
          children: p
        },
        `${u}-${v}`
      )
    ),
    u < d.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, u) : null
  ]);
}, vr = "_spice_loader_wrapper_njkek_1", hr = "_spice_loader_container_njkek_6", mr = "_spice_loader_skelton_njkek_13", gr = "_skeleton_njkek_1", wr = "_spice_loader_circular_njkek_31", yr = "_cicrular_njkek_1", te = {
  spice_loader_wrapper: vr,
  spice_loader_container: hr,
  spice_loader_skelton: mr,
  skeleton: gr,
  spice_loader_circular: wr,
  cicrular: yr
}, xr = he(
  ({
    className: n,
    loader: t = "skeleton",
    delay: o = 1e3,
    onView: r,
    skelton: i,
    circular: s,
    children: c
  }, u) => {
    const [d, p] = A(o === 0), v = !!c;
    return O(() => {
      o !== 0 && setTimeout(() => p(!0), o);
    }, [o]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: u,
        className: `${n || ""} ${te.spice_loader_wrapper} `,
        style: v ? {
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
              transitionDuration: (r == null ? void 0 : r.transitionDuration) || "0.3s",
              transitionTimingFunction: (r == null ? void 0 : r.transitionTimingFunction) || "ease-in-out"
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
              v && /* @__PURE__ */ f.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
xr.displayName = "Loader";
const br = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, tt = V(br), rt = V(
  () => {
  }
), Er = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, r] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(tt.Provider, { value: o, children: /* @__PURE__ */ f.jsx(rt.Provider, { value: r, children: n }) });
}, nt = () => B(tt), ge = () => B(rt), jr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ge(), i = nt(), s = b(() => {
    i.current === t || i.isLeaving || r((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ f.jsx(
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
}, ot = ({ content: n, isOpen: t }) => {
  const o = n.querySelectorAll("a,button");
  if (!o)
    return;
  const r = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, Tr = "_spice_tab_hidden_1r0oa_1", Sr = {
  spice_tab_hidden: Tr
}, Rr = ({
  children: n,
  value: t,
  className: o,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = T(!0), s = T(null), c = ge(), u = nt(), d = u.current === t && !u.isLeaving;
  return O(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!u.isAnimation) {
      d && r != null && r.onReset && r.onReset(s.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await re(r.onClose(s.current)), c((p) => ({
      ...p,
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), d && r != null && r.onOpen && r.onOpen(s.current);
  }, [u, c, r, t, d]), O(() => {
    ot({
      content: s.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: s,
      className: `${u.current !== t ? Sr.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: n
    }
  );
}, Cr = () => {
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
}, tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: jr,
  Content: Rr,
  Context: Er,
  useTabSwitch: Cr
}, Symbol.toStringTag, { value: "Module" })), Pr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, it = V(Pr), st = V(() => {
}), Or = ({ children: n, defaultValue: t }) => {
  const [o, r] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(it.Provider, { value: o, children: /* @__PURE__ */ f.jsx(st.Provider, { value: r, children: n }) });
}, at = () => B(it), $r = () => B(st), Dr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = at(), i = $r(), s = L(
    () => !!r.defaultValue.find((d) => d === t),
    [r, t]
  ), [c, u] = A(s);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        i((d) => ({
          ...d,
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
}, Fr = ({
  targetRef: n,
  callback: t,
  debounce: o = 100,
  dependencies: r = []
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
    }), u = n.current;
    if (u)
      return c.observe(u), () => {
        c.unobserve(u), clearTimeout(i.current);
      };
  }, r);
}, Ir = "_spice_accordion_content_1wkzs_1", Lr = "_spice_accordion_hidden_1wkzs_5", Je = {
  spice_accordion_content: Ir,
  spice_accordion_hidden: Lr
}, Ar = ({
  value: n,
  callback: t,
  children: o,
  className: r
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = at(), s = L(
    () => !!i.defaultValue.find((_) => _ === n),
    [i, n]
  ), [c, u] = A(s);
  L(() => {
    i.target === n && u(!c);
  }, [i.target, i.toggle]);
  const d = T(!0), p = T(null), v = T(null);
  return O(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const _ = {
      height: v.current.getBoundingClientRect().height,
      target: p.current
    };
    c ? t.onOpen(_) : t.onClose(_);
  }, [c, t]), O(() => {
    ot({ content: p.current, isOpen: c });
  }, [c]), Fr({
    targetRef: v,
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
      className: `${Je.spice_accordion_content} ${s ? "" : Je.spice_accordion_hidden}`,
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !c,
      children: /* @__PURE__ */ f.jsx("div", { ref: v, className: r || "", children: o })
    }
  );
}, rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Dr,
  Content: Ar,
  Context: Or
}, Symbol.toStringTag, { value: "Module" })), kr = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: r,
  onProgress: i,
  onStart: s,
  onComplete: c
}) => {
  const u = L(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = T(null), p = b(
    ({
      digitContainer: _,
      numbersTarget: w,
      digit: E,
      digitNumber: j,
      currentPercent: k,
      limit: D,
      destination: F
    }) => {
      if (u[E] !== j && k <= D) {
        const S = j.toString(), R = (Math.min(8, j) + 1).toString(), oe = k >= D;
        w[0].innerText = S, w[1].innerText = oe ? "0" : R, i && i({
          digitContainer: _,
          percent: k,
          digit: E,
          destination: F,
          duration: n / (F / E)
        }), u[E] = j;
      }
    },
    [u, i, n]
  ), v = b(
    (_) => (_ > 100 && (_ = 100), new Promise((w) => {
      if (_ === 0)
        return;
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const j = u.to += 1, k = async () => {
          clearInterval(d.current), j > 100 && c && await re(c(E.getAll())), w(j - 1);
        };
        j === 1 && s && s(E.getAll()), j > _ && await k();
        const D = Math.floor(j / 100) % 100, F = Math.floor(j / 10) % 10, S = j % 10;
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
          digitNumber: F,
          currentPercent: j,
          numbersTarget: E.tens,
          limit: 90,
          destination: _
        }), u[100] !== D && (E.hundreds[1].innerText = D.toString(), i && i({
          digitContainer: r.current,
          percent: j,
          digit: 100,
          destination: _,
          duration: n / (_ / 10)
        }), u[100] = D);
      }, Math.max(1e3 / 60, n / _ * 1e3));
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
    clearInterval(d.current);
  }, []), v;
}, Nr = "_spice_loadingProgress_digit_avxoy_1", Mr = {
  spice_loadingProgress_digit: Nr
}, ct = qt(
  he(({ className: n }, t) => /* @__PURE__ */ f.jsxs("div", { className: Mr.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ f.jsx("div", { className: n || "", children: "0" }),
    /* @__PURE__ */ f.jsx("div", { className: n || "", children: "0" })
  ] }))
);
ct.displayName = "Digit";
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: ct,
  useLoadingProgress: kr
}, Symbol.toStringTag, { value: "Module" })), on = ({
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
    const d = (v, _) => {
      v.forEach((w) => {
        w.isIntersecting && i.onEnter ? (i.onEnter(w), r && _.unobserve(w.target)) : !w.isIntersecting && i.onLeave && i.onLeave(w);
      });
    }, p = new IntersectionObserver(d, c);
    return p.observe(u), () => {
      p.unobserve(u);
    };
  }, s);
}, ne = ({
  callback: n,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const r = T(0), i = T(0), s = b(() => {
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
}, Wr = ({
  initWinW: n,
  winW: t,
  threshold: o
}) => {
  let r = !(n <= o);
  t <= o ? r && window.location.reload() : !r && window.location.reload();
}, qr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Yr = () => {
  console.log(qr);
}, Vr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, sn = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const r = b(
    (i) => {
      t && Vr(i);
    },
    [t]
  );
  ne({
    callback: ({ initWinW: i, winW: s }) => {
      n && n.forEach(
        (c) => Wr({
          initWinW: i,
          winW: s,
          threshold: c
        })
      ), r(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), o && process.env.NODE_ENV !== "development" && Yr();
  }, [o, r]);
}, Br = () => {
  const [n, t] = A(null), o = b(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return ne({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), O(() => o(), [o]), n;
}, _e = "scroll", an = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const r = T(null), [i, s] = Yt(
    (v, _) => {
      switch (_.type) {
        case _e:
          return r.current = _.payload, _.payload;
        default:
          return v;
      }
    },
    r.current
  ), c = T(0), u = T(0), d = () => window.scrollY || document.documentElement.scrollTop, p = b(() => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const v = d();
      v > c.current + n && r.current !== "down" ? s({ type: _e, payload: "down" }) : v < c.current - n && r.current !== "up" && s({ type: _e, payload: "up" }), c.current = v;
    }, t);
  }, [t, n]);
  return O(() => (c.current = d(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(u.current);
  }), o), i;
}, cn = ({ type: n, width: t }) => {
  const [o, r] = A(null), i = b(
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
}, un = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: o = "",
  width: r = 600,
  height: i = 800
}) => {
  const s = L(() => encodeURIComponent(n), [n]), c = L(
    () => `height=${i},width=${r}`,
    [i, r]
  ), u = L(
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
  ), v = L(
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
        navigator.clipboard.writeText(n).then(() => {
          w(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: u,
    X: d,
    LINE: p,
    share: v,
    copy: E,
    isCopied: _
  };
}, ln = (n) => {
  const t = Br();
  Ke(() => {
    !t || !n.current || (n.current.style.height = `${window.screen.height}px`);
  }, [t, n]), ne({
    callback: ({ winH: o }) => {
      n.current && (t ? n.current.style.height = `${window.screen.height}px` : n.current.style.height = `${o}px`);
    },
    dependencies: [t]
  });
};
export {
  rn as Accordion,
  Hr as AsideLayout,
  Jr as Dropdown,
  Gr as FormField,
  xr as Loader,
  nn as LoadingProgress,
  Zr as LowPowerVideo,
  Xr as Magnet,
  Qr as ModalButton,
  en as SplitText,
  _r as StickyItem,
  tn as Tab,
  Kr as Thumbnail,
  Ur as WrapperLayout,
  ln as use100vh,
  sr as useAnimationFrame,
  on as useIntersectionObserver,
  Br as useIsTouchDevice,
  Ke as useIsomorphicLayoutEffect,
  cn as useMediaQuery,
  et as useOverflowDispatch,
  Fr as useResizeObserver,
  an as useScrollDirection,
  un as useShare,
  sn as useStarter,
  ne as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
