import Je, { createContext as Y, useContext as z, useState as F, useEffect as O, useCallback as x, useRef as S, useMemo as D, forwardRef as Xe, memo as Nt, useLayoutEffect as kt, useReducer as Wt } from "react";
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
  var r = Je, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, d, p) {
    var h, _ = {}, w = null, E = null;
    p !== void 0 && (w = "" + p), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (h in d)
      n.call(d, h) && !s.hasOwnProperty(h) && (_[h] = d[h]);
    if (l && l.defaultProps)
      for (h in d = l.defaultProps, d)
        _[h] === void 0 && (_[h] = d[h]);
    return { $$typeof: t, type: l, key: w, ref: E, props: _, _owner: i.current };
  }
  return H.Fragment = o, H.jsx = a, H.jsxs = a, H;
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
function Yt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Je, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), j = Symbol.iterator, q = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var c = j && e[j] || e[q];
      return typeof c == "function" ? c : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++)
          u[v - 1] = arguments[v];
        R("error", e, u);
      }
    }
    function R(e, c, u) {
      {
        var v = L.ReactDebugCurrentFrame, b = v.getStackAddendum();
        b !== "" && (c += "%s", u = u.concat([b]));
        var y = u.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + c), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var ne = !1, at = !1, ut = !1, lt = !1, dt = !1, ge;
    ge = Symbol.for("react.module.reference");
    function ft(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || dt || e === i || e === p || e === h || lt || e === E || ne || at || ut || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === a || e.$$typeof === l || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function pt(e, c, u) {
      var v = e.displayName;
      if (v)
        return v;
      var b = c.displayName || c.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            var c = e;
            return we(c) + ".Consumer";
          case a:
            var u = e;
            return we(u._context) + ".Provider";
          case d:
            return pt(e, e.render, "ForwardRef");
          case _:
            var v = e.displayName || null;
            return v !== null ? v : M(e.type) || "Memo";
          case w: {
            var b = e, y = b._payload, g = b._init;
            try {
              return M(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, B = 0, be, ye, xe, Ee, je, Se, Te;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function _t() {
      {
        if (B === 0) {
          be = console.log, ye = console.info, xe = console.warn, Ee = console.error, je = console.group, Se = console.groupCollapsed, Te = console.groupEnd;
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
    function vt() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: be
            }),
            info: k({}, e, {
              value: ye
            }),
            warn: k({}, e, {
              value: xe
            }),
            error: k({}, e, {
              value: Ee
            }),
            group: k({}, e, {
              value: je
            }),
            groupCollapsed: k({}, e, {
              value: Se
            }),
            groupEnd: k({}, e, {
              value: Te
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = L.ReactCurrentDispatcher, ie;
    function X(e, c, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (b) {
            var v = b.stack.trim().match(/\n( *(at )?)/);
            ie = v && v[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var se = !1, K;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ht();
    }
    function Ce(e, c) {
      if (!e || se)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var v;
      se = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = oe.current, oe.current = null, _t();
      try {
        if (c) {
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
            } catch (N) {
              v = N;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (N) {
              v = N;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            v = N;
          }
          e();
        }
      } catch (N) {
        if (N && v && typeof N.stack == "string") {
          for (var m = N.stack.split(`
`), $ = v.stack.split(`
`), C = m.length - 1, P = $.length - 1; C >= 1 && P >= 0 && m[C] !== $[P]; )
            P--;
          for (; C >= 1 && P >= 0; C--, P--)
            if (m[C] !== $[P]) {
              if (C !== 1 || P !== 1)
                do
                  if (C--, P--, P < 0 || m[C] !== $[P]) {
                    var A = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, A), A;
                  }
                while (C >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = y, vt(), Error.prepareStackTrace = b;
      }
      var V = e ? e.displayName || e.name : "", We = V ? X(V) : "";
      return typeof e == "function" && K.set(e, We), We;
    }
    function mt(e, c, u) {
      return Ce(e, !1);
    }
    function gt(e) {
      var c = e.prototype;
      return !!(c && c.isReactComponent);
    }
    function Q(e, c, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, gt(e));
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
            return mt(e.render);
          case _:
            return Q(e.type, c, u);
          case w: {
            var v = e, b = v._payload, y = v._init;
            try {
              return Q(y(b), c, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Oe = {}, Pe = L.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var c = e._owner, u = Q(e.type, e._source, c ? c.type : null);
        Pe.setExtraStackFrame(u);
      } else
        Pe.setExtraStackFrame(null);
    }
    function wt(e, c, u, v, b) {
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
              m = e[g](c, g, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (ee(b), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, g, typeof m), ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ee(b), T("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var bt = Array.isArray;
    function ce(e) {
      return bt(e);
    }
    function yt(e) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, u = c && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function xt(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function Ie(e) {
      if (xt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), $e(e);
    }
    var U = L.ReactCurrentOwner, Et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ae, ae;
    ae = {};
    function jt(e) {
      if (Z.call(e, "ref")) {
        var c = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function St(e) {
      if (Z.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Tt(e, c) {
      if (typeof e.ref == "string" && U.current && c && U.current.stateNode !== c) {
        var u = M(U.current.type);
        ae[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(U.current.type), e.ref), ae[u] = !0);
      }
    }
    function Rt(e, c) {
      {
        var u = function() {
          Le || (Le = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Ct(e, c) {
      {
        var u = function() {
          Ae || (Ae = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Ot = function(e, c, u, v, b, y, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: c,
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
    function Pt(e, c, u, v, b) {
      {
        var y, g = {}, m = null, $ = null;
        u !== void 0 && (Ie(u), m = "" + u), St(c) && (Ie(c.key), m = "" + c.key), jt(c) && ($ = c.ref, Tt(c, b));
        for (y in c)
          Z.call(c, y) && !Et.hasOwnProperty(y) && (g[y] = c[y]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (y in C)
            g[y] === void 0 && (g[y] = C[y]);
        }
        if (m || $) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Rt(g, P), $ && Ct(g, P);
        }
        return Ot(e, m, $, b, v, U.current, g);
      }
    }
    var ue = L.ReactCurrentOwner, De = L.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var c = e._owner, u = Q(e.type, e._source, c ? c.type : null);
        De.setExtraStackFrame(u);
      } else
        De.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ue.current) {
          var e = M(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function $t(e) {
      {
        if (e !== void 0) {
          var c = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + c + ":" + u + ".";
        }
        return "";
      }
    }
    var qe = {};
    function It(e) {
      {
        var c = Fe();
        if (!c) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (c = `

Check the top-level render call using <` + u + ">.");
        }
        return c;
      }
    }
    function Me(e, c) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = It(c);
        if (qe[u])
          return;
        qe[u] = !0;
        var v = "";
        e && e._owner && e._owner !== ue.current && (v = " It was passed a child from " + M(e._owner.type) + "."), W(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), W(null);
      }
    }
    function Ne(e, c) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var u = 0; u < e.length; u++) {
            var v = e[u];
            de(v) && Me(v, c);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = I(e);
          if (typeof b == "function" && b !== e.entries)
            for (var y = b.call(e), g; !(g = y.next()).done; )
              de(g.value) && Me(g.value, c);
        }
      }
    }
    function Lt(e) {
      {
        var c = e.type;
        if (c == null || typeof c == "string")
          return;
        var u;
        if (typeof c == "function")
          u = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === _))
          u = c.propTypes;
        else
          return;
        if (u) {
          var v = M(c);
          wt(u, e.props, "prop", v, e);
        } else if (c.PropTypes !== void 0 && !le) {
          le = !0;
          var b = M(c);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var c = Object.keys(e.props), u = 0; u < c.length; u++) {
          var v = c[u];
          if (v !== "children" && v !== "key") {
            W(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function ke(e, c, u, v, b, y) {
      {
        var g = ft(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = $t(b);
          $ ? m += $ : m += Fe();
          var C;
          e === null ? C = "null" : ce(e) ? C = "array" : e !== void 0 && e.$$typeof === t ? (C = "<" + (M(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
        }
        var P = Pt(e, c, u, b, y);
        if (P == null)
          return P;
        if (g) {
          var A = c.children;
          if (A !== void 0)
            if (v)
              if (ce(A)) {
                for (var V = 0; V < A.length; V++)
                  Ne(A[V], e);
                Object.freeze && Object.freeze(A);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(A, e);
        }
        return e === n ? At(P) : Lt(P), P;
      }
    }
    function Dt(e, c, u) {
      return ke(e, c, u, !0);
    }
    function Ft(e, c, u) {
      return ke(e, c, u, !1);
    }
    var qt = Ft, Mt = Dt;
    G.Fragment = n, G.jsx = qt, G.jsxs = Mt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Vt() : ve.exports = Yt();
var f = ve.exports;
const zt = "_spice_wrapper_1b9je_1", Bt = "_spice_wrapper_hidden_1b9je_10", ze = {
  spice_wrapper: zt,
  spice_wrapper_hidden: Bt
}, Ke = Y(!0), Qe = Y((r) => !r), Ut = ({ children: r }) => {
  const [t, o] = F(!0);
  return /* @__PURE__ */ f.jsx(Ke.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Qe.Provider, { value: o, children: r }) });
}, Ht = ({ children: r }) => {
  const t = z(Ke);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${ze.spice_wrapper} ${t ? ze.spice_wrapper_hidden : ""}`,
      children: r
    }
  );
}, Vr = ({ children: r }) => /* @__PURE__ */ f.jsx(Ut, { children: /* @__PURE__ */ f.jsx(Ht, { children: r }) }), Ze = () => z(Qe), Gt = "_spice_aside_aside_4cj7n_1", Jt = "_spice_aside_main_4cj7n_5", fe = {
  spice_aside_aside: Gt,
  spice_aside_main: Jt
}, Yr = ({
  className: r,
  children: t,
  aside: o,
  isSticky: n = !1
}) => {
  const i = Ze();
  return O(() => (n && i(() => !1), () => {
    i(() => !0);
  }), [n, i]), /* @__PURE__ */ f.jsxs("div", { className: r || "", children: [
    o.index === 1 && /* @__PURE__ */ f.jsx("div", { className: fe.spice_aside_main, children: t }),
    /* @__PURE__ */ f.jsx(
      "aside",
      {
        className: `${fe.spice_aside_aside} ${o.className ? o.className : ""}`,
        children: o.chidren
      }
    ),
    o.index === 0 && /* @__PURE__ */ f.jsx("div", { className: fe.spice_aside_main, children: t })
  ] });
}, Xt = "_spice_form_input_yxowj_1", Kt = "_spice_form_select_yxowj_2", Qt = "_spice_form_radioCheckInput_yxowj_8", he = {
  spice_form_input: Xt,
  spice_form_select: Kt,
  spice_form_radioCheckInput: Qt
}, Be = ({
  formProps: r,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...r,
    className: `${he.spice_form_input} ${t || ""}`
  }
), Zt = ({ formProps: r }) => {
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
      className: he.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ f.jsx(n, {}),
        t.options.map((s) => /* @__PURE__ */ f.jsx("option", { value: s, children: s }, s))
      ]
    }
  );
}, Ue = ({
  layoutType: r,
  formPropsArr: t,
  label: o,
  FormItem: n,
  errors: i
}) => {
  const s = x(
    (a) => !i || !i[a] ? null : i[a],
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
    const a = t.map((l) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        n,
        {
          formProps: l,
          className: he.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { children: o }),
      /* @__PURE__ */ f.jsx("ul", { children: a }),
      s(0)
    ] });
  }
}, er = ({ formProps: r }) => {
  const { isTextarea: t, ...o } = r;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, zr = ({
  className: r,
  label: t,
  formProps: o,
  errors: n
}) => {
  const i = o, s = i[0].type, a = i.length, l = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && a > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = x(
    (_) => Ue({
      layoutType: a === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: _,
      errors: n
    }),
    [n, i, t, a]
  ), h = x(() => l ? p(Zt) : d ? p(er) : s === "radio" || s === "checkbox" ? Ue({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Be,
    errors: n
  }) : p(Be), [n, i, t, l, d, p, s]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${r}`, children: /* @__PURE__ */ f.jsx(h, {}) });
}, te = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), tr = "_spice_dropdown_wrapper_1nq94_1", rr = "_spice_dropdown_content_1nq94_5", nr = "_spice_dropdown_content_hidden_1nq94_10", or = "_spice_dropdown_content_pointerPrevent_1nq94_15", J = {
  spice_dropdown_wrapper: tr,
  spice_dropdown_content: rr,
  spice_dropdown_content_hidden: nr,
  spice_dropdown_content_pointerPrevent: or,
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
}, Br = ({
  position: r,
  parent: t,
  content: o,
  callback: n,
  className: i
}) => {
  const s = S(null), a = S(!1), [l, d] = F(!1), [p, h] = F(!0), _ = x(() => {
    a.current = !0, h(!1), d(!0), n != null && n.onEnter && n.onEnter(s.current);
  }, [n]), w = x(async () => {
    a.current = !1, h(!0), n != null && n.onLeave && await te(n.onLeave(s.current)), a.current || d(!1);
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
}, ir = (r = 60, t = []) => {
  r > 60 && (r = 60);
  const o = Math.floor(1e3 / r), n = S(performance.now()), i = x(
    (l) => {
      const d = l - n.current, p = d <= o;
      return p || (n.current = l - d % o), p;
    },
    [o]
  ), s = S({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, a = x(
    (l) => {
      s.id = requestAnimationFrame(a), !i(l) && s.callback && s.isPlay && s.callback(l);
    },
    [i, s]
  );
  return O(() => (s.id = requestAnimationFrame(a), () => {
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
}, sr = "_spice_magnet_stopPropagation_99wvn_1", cr = {
  spice_magnet_stopPropagation: sr
}, Ur = ({
  className: r,
  children: t,
  callback: o,
  fps: n = 60,
  stopPropagation: i = !1,
  isOnClickReset: s = !1,
  dependencies: a = []
}) => {
  const l = S(null), d = S(null), p = S();
  n > 60 && (n = 60);
  const h = ir(n, a), _ = D(
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
  ), L = x(
    (R) => {
      I(R);
    },
    [I]
  ), T = x(
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
      onMouseLeave: L,
      onClick: T,
      className: r || "",
      ref: l,
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
}, ar = "_spice_thumbnail_wrapper_1qqot_1", ur = "_spice_thumbnail_view_1qqot_5", lr = "_spice_thumbnail_golden_1qqot_26", dr = "_spice_thumbnail_silver_1qqot_30", fr = "_spice_thumbnail_platinum_1qqot_34", pr = "_spice_thumbnail_square_1qqot_42", pe = {
  spice_thumbnail_wrapper: ar,
  spice_thumbnail_view: ur,
  spice_thumbnail_golden: lr,
  spice_thumbnail_silver: dr,
  spice_thumbnail_platinum: fr,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: pr,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, Hr = ({ ratio: r, children: t, className: o }) => {
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
      className: `${pe.spice_thumbnail_wrapper} ${o || ""}`,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${pe.spice_thumbnail_view} ${i ? pe["spice_thumbnail_" + r] : ""}`,
          style: s ? { paddingTop: `${r}%` } : {},
          children: t
        }
      )
    }
  );
}, He = (r) => {
  const t = document.documentElement.style, o = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, _r = "_spice_modal_dialog_1t31c_1", vr = {
  spice_modal_dialog: _r
}, hr = ".spice__modal_close", Gr = ({
  children: r,
  tag: t,
  className: o,
  dialog: n,
  callback: i
}) => {
  const s = t || "button", a = S(null), l = x(() => {
    He("add"), a.current.showModal(), i != null && i.onOpen && i.onOpen(a.current);
  }, [i]), d = x(async () => {
    i != null && i.onClose && await te(i.onClose(a.current)), He("remove"), a.current.close();
  }, [i]);
  return O(() => {
    const p = a.current.querySelectorAll(hr);
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
      ((w = a.current) == null ? void 0 : w.hasAttribute("open")) && h.key === "Escape" && d();
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
        ref: a,
        onClick: (p) => {
          p.target === a.current && d();
        },
        className: `${vr.spice_modal_dialog} ${n.className ? n.className : ""}`,
        children: n.children
      }
    )
  ] });
}, mr = Xe(
  ({ children: r, className: t }, o) => {
    const n = Ze();
    return O(() => (n(() => !1), () => {
      n(() => !0);
    }), [n]), /* @__PURE__ */ f.jsx("div", { ref: o, className: t || "", children: r });
  }
);
mr.displayName = "StickyItem";
const Jr = (r) => {
  const t = S(null), [o, n] = F(!1), { fallback: i, ...s } = r;
  return O(() => {
    var a;
    (a = t.current) == null || a.play().then(() => {
      n(!1);
    }).catch(() => {
      n(!0);
    });
  }, []), o ? i : /* @__PURE__ */ f.jsx("video", { ref: t, ...s });
}, Xr = ({
  text: r,
  type: t = "chars",
  splitClassName: o
}) => {
  const n = t === "chars" ? "" : " ";
  return r.split(`
`).flatMap((s, a, l) => [
    ...s.split(n).map(
      (d, p) => d === " " ? /* @__PURE__ */ f.jsx(
        "span",
        {
          children: " "
        },
        `${a}-${p} ${o || ""}`
      ) : /* @__PURE__ */ f.jsx("span", { children: d }, `${a}-${p} ${a ? o : ""}`)
    ),
    a < l.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, a) : null
  ]);
}, gr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, et = Y(gr), tt = Y(
  () => {
  }
), wr = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, n] = F({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(et.Provider, { value: o, children: /* @__PURE__ */ f.jsx(tt.Provider, { value: n, children: r }) });
}, rt = () => z(et), me = () => z(tt), br = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = me(), i = rt(), s = x(() => {
    i.current === t || i.isLeaving || n((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
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
}, yr = "_spice_tab_hidden_1r0oa_1", xr = {
  spice_tab_hidden: yr
}, nt = ({ content: r, isOpen: t }) => {
  const o = r.querySelectorAll("a,button");
  if (!o)
    return;
  const n = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", n);
  });
}, Er = ({
  children: r,
  value: t,
  className: o,
  callback: n
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = S(!0), s = S(null), a = me(), l = rt(), d = l.current === t && !l.isLeaving;
  return O(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!l.isAnimation) {
      d && n != null && n.onReset && n.onReset(s.current);
      return;
    }
    l.prev === t && (async () => (n != null && n.onClose && await te(n.onClose(s.current)), a((p) => ({
      ...p,
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), d && n != null && n.onOpen && n.onOpen(s.current);
  }, [l, a, n, t, d]), O(() => {
    nt({
      content: s.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: s,
      className: `${l.current !== t ? xr.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      children: r
    }
  );
}, jr = () => {
  const r = me();
  return (t, o) => {
    r((n) => ({
      isAnimation: o,
      isLeaving: o,
      prev: o ? n.current : "",
      current: o ? n.current : t,
      next: o ? t : ""
    }));
  };
}, Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: br,
  Content: Er,
  Context: wr,
  useTabSwitch: jr
}, Symbol.toStringTag, { value: "Module" })), Sr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, ot = Y(Sr), it = Y(() => {
}), Tr = ({ children: r, defaultValue: t }) => {
  const [o, n] = F({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(ot.Provider, { value: o, children: /* @__PURE__ */ f.jsx(it.Provider, { value: n, children: r }) });
}, st = () => z(ot), Rr = () => z(it), Cr = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = st(), i = Rr(), s = D(
    () => !!n.defaultValue.find((d) => d === t),
    [n, t]
  ), [a, l] = F(s);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        i((d) => ({
          ...d,
          toggle: a,
          target: t
        })), l(!a);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": a,
      children: r
    }
  );
}, Or = ({
  targetRef: r,
  callback: t,
  debounce: o = 100,
  dependencies: n = []
}) => {
  const i = S(0), s = S(!0);
  O(() => {
    const a = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(d[0].target);
      }, o);
    }), l = r.current;
    if (l)
      return a.observe(l), () => {
        a.unobserve(l), clearTimeout(i.current);
      };
  }, n);
}, Pr = "_spice_accordion_content_1wkzs_1", $r = "_spice_accordion_hidden_1wkzs_5", Ge = {
  spice_accordion_content: Pr,
  spice_accordion_hidden: $r
}, Ir = ({
  value: r,
  callback: t,
  children: o,
  className: n
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = st(), s = D(
    () => !!i.defaultValue.find((_) => _ === r),
    [i, r]
  ), [a, l] = F(s);
  O(() => {
    i.target === r && l(!a);
  }, [i.target, i.toggle]);
  const d = S(!0), p = S(null), h = S(null);
  return O(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const _ = {
      height: h.current.getBoundingClientRect().height,
      target: p.current
    };
    a ? t.onOpen(_) : t.onClose(_);
  }, [a, t]), O(() => {
    nt({ content: p.current, isOpen: a });
  }, [a]), Or({
    targetRef: h,
    callback: (_) => {
      const w = _.getBoundingClientRect().height;
      a && (p.current.style.height = `${w}px`);
    },
    dependencies: [a],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: p,
      className: `${Ge.spice_accordion_content} ${s ? "" : Ge.spice_accordion_hidden}`,
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, className: n || "", children: o })
    }
  );
}, Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Cr,
  Content: Ir,
  Context: Tr
}, Symbol.toStringTag, { value: "Module" })), Lr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: n,
  onProgress: i,
  onStart: s,
  onComplete: a
}) => {
  const l = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = S(null), p = x(
    ({
      digitContainer: _,
      numbersTarget: w,
      digit: E,
      digitNumber: j,
      currentPercent: q,
      limit: I,
      destination: L
    }) => {
      if (l[E] !== j && q <= I) {
        const T = j.toString(), R = (Math.min(8, j) + 1).toString(), ne = q >= I;
        w[0].innerText = T, w[1].innerText = ne ? "0" : R, i && i({
          digitContainer: _,
          percent: q,
          digit: E,
          destination: L,
          duration: r / (L / E)
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
          clearInterval(d.current), j > 100 && a && await te(a(E.getAll())), w(j - 1);
        };
        j === 1 && s && s(E.getAll()), j > _ && await q();
        const I = Math.floor(j / 100) % 100, L = Math.floor(j / 10) % 10, T = j % 10;
        p({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: j,
          numbersTarget: E.ones,
          limit: 90,
          destination: _
        }), p({
          digitContainer: o.current,
          digit: 10,
          digitNumber: L,
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
      a,
      i,
      s,
      r
    ]
  );
  return O(() => () => {
    clearInterval(d.current);
  }, []), h;
}, Ar = "_spice_loadingProgress_digit_avxoy_1", Dr = {
  spice_loadingProgress_digit: Ar
}, ct = Nt(
  Xe(({ className: r }, t) => /* @__PURE__ */ f.jsxs("div", { className: Dr.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" }),
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" })
  ] }))
);
ct.displayName = "Digit";
const Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: ct,
  useLoadingProgress: Lr
}, Symbol.toStringTag, { value: "Module" })), en = typeof document < "u" ? kt : O, tn = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: n = !1,
  callback: i,
  dependencies: s = []
}) => {
  const a = {
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
    }, p = new IntersectionObserver(d, a);
    return p.observe(l), () => {
      p.unobserve(l);
    };
  }, s);
}, re = ({
  callback: r,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const n = S(0), i = S(0), s = x(() => {
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
}, Fr = ({
  initWinW: r,
  winW: t,
  threshold: o
}) => {
  let n = !(r <= o);
  t <= o ? n && window.location.reload() : !n && window.location.reload();
}, qr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Mr = () => {
  console.log(qr);
}, Nr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, rn = ({
  reloadThresholds: r,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const n = x(
    (i) => {
      t && Nr(i);
    },
    [t]
  );
  re({
    callback: ({ initWinW: i, winW: s }) => {
      r && r.forEach(
        (a) => Fr({
          initWinW: i,
          winW: s,
          threshold: a
        })
      ), n(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), o && process.env.NODE_ENV !== "development" && Mr();
  }, [o, n]);
}, kr = () => {
  const [r, t] = F(null), o = x(() => {
    const n = window.ontouchstart, i = navigator.maxTouchPoints;
    n !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return re({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), O(() => o(), [o]), r;
}, _e = "scroll", nn = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const n = S(null), [i, s] = Wt(
    (h, _) => {
      switch (_.type) {
        case _e:
          return n.current = _.payload, _.payload;
        default:
          return h;
      }
    },
    n.current
  ), a = S(0), l = S(0), d = () => window.scrollY || document.documentElement.scrollTop, p = x(() => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const h = d();
      h > a.current + r && n.current !== "down" ? s({ type: _e, payload: "down" }) : h < a.current - r && n.current !== "up" && s({ type: _e, payload: "up" }), a.current = h;
    }, t);
  }, [t, r]);
  return O(() => (a.current = d(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(l.current);
  }), o), i;
}, on = ({ type: r, width: t }) => {
  const [o, n] = F(null), i = x(
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
}, sn = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: o = "",
  width: n = 600,
  height: i = 800
}) => {
  const s = D(() => encodeURIComponent(r), [r]), a = D(
    () => `height=${i},width=${n}`,
    [i, n]
  ), l = D(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${s}&t=${o}`,
          "newwindow",
          a
        );
      }
    }),
    [s, o, a]
  ), d = D(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${s}&text=${o}`,
          "newwindow",
          a
        );
      }
    }),
    [s, a, o]
  ), p = D(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${s}&text=${o}`,
          "newwindow",
          a
        );
      }
    }),
    [s, a, o]
  ), h = D(
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
  ), [_, w] = F(!1), E = D(
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
}, cn = (r) => {
  const t = kr();
  O(() => {
    !t || !r.current || (r.current.style.height = `${window.screen.height}px`);
  }, [t, r]), re({
    callback: ({ winH: o }) => {
      r.current && (t ? r.current.style.height = `${window.screen.height}px` : r.current.style.height = `${o}px`);
    },
    dependencies: [t]
  });
};
export {
  Qr as Accordion,
  Yr as AsideLayout,
  Br as Dropdown,
  zr as FormField,
  Zr as LoadingProgress,
  Jr as LowPowerVideo,
  Ur as Magnet,
  Gr as ModalButton,
  Xr as SplitText,
  mr as StickyItem,
  Kr as Tab,
  Hr as Thumbnail,
  Vr as WrapperLayout,
  cn as use100vh,
  ir as useAnimationFrame,
  tn as useIntersectionObserver,
  kr as useIsTouchDevice,
  en as useIsomorphicLayoutEffect,
  on as useMediaQuery,
  Or as useResizeObserver,
  nn as useScrollDirection,
  sn as useShare,
  rn as useStarter,
  re as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
