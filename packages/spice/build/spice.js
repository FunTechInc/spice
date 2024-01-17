import Je, { createContext as Y, useState as L, useContext as z, useEffect as P, useCallback as x, useRef as C, useMemo as F, memo as Nt, forwardRef as Mt, useLayoutEffect as kt, useReducer as Wt } from "react";
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
  var r = Je, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, d, v) {
    var h, p = {}, b = null, E = null;
    v !== void 0 && (b = "" + v), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (h in d)
      n.call(d, h) && !c.hasOwnProperty(h) && (p[h] = d[h]);
    if (a && a.defaultProps)
      for (h in d = a.defaultProps, d)
        p[h] === void 0 && (p[h] = d[h]);
    return { $$typeof: t, type: a, key: b, ref: E, props: p, _owner: i.current };
  }
  return H.Fragment = o, H.jsx = l, H.jsxs = l, H;
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
    var r = Je, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, q = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = S && e[S] || e[q];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), _ = 1; _ < s; _++)
          u[_ - 1] = arguments[_];
        R("error", e, u);
      }
    }
    function R(e, s, u) {
      {
        var _ = A.ReactDebugCurrentFrame, w = _.getStackAddendum();
        w !== "" && (s += "%s", u = u.concat([w]));
        var y = u.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var ne = !1, ct = !1, at = !1, ut = !1, lt = !1, ge;
    ge = Symbol.for("react.module.reference");
    function dt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === c || lt || e === i || e === v || e === h || ut || e === E || ne || ct || at || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === l || e.$$typeof === a || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ft(e, s, u) {
      var _ = e.displayName;
      if (_)
        return _;
      var w = s.displayName || s.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case v:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var s = e;
            return we(s) + ".Consumer";
          case l:
            var u = e;
            return we(u._context) + ".Provider";
          case d:
            return ft(e, e.render, "ForwardRef");
          case p:
            var _ = e.displayName || null;
            return _ !== null ? _ : N(e.type) || "Memo";
          case b: {
            var w = e, y = w._payload, g = w._init;
            try {
              return N(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, U = 0, be, ye, xe, Ee, Se, je, Re;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function pt() {
      {
        if (U === 0) {
          be = console.log, ye = console.info, xe = console.warn, Ee = console.error, Se = console.group, je = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
    function _t() {
      {
        if (U--, U === 0) {
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
              value: Se
            }),
            groupCollapsed: k({}, e, {
              value: je
            }),
            groupEnd: k({}, e, {
              value: Re
            })
          });
        }
        U < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = A.ReactCurrentDispatcher, ie;
    function X(e, s, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (w) {
            var _ = w.stack.trim().match(/\n( *(at )?)/);
            ie = _ && _[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var se = !1, K;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new vt();
    }
    function Ce(e, s) {
      if (!e || se)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var _;
      se = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = oe.current, oe.current = null, pt();
      try {
        if (s) {
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
              _ = M;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (M) {
              _ = M;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            _ = M;
          }
          e();
        }
      } catch (M) {
        if (M && _ && typeof M.stack == "string") {
          for (var m = M.stack.split(`
`), $ = _.stack.split(`
`), T = m.length - 1, O = $.length - 1; T >= 1 && O >= 0 && m[T] !== $[O]; )
            O--;
          for (; T >= 1 && O >= 0; T--, O--)
            if (m[T] !== $[O]) {
              if (T !== 1 || O !== 1)
                do
                  if (T--, O--, O < 0 || m[T] !== $[O]) {
                    var D = `
` + m[T].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, D), D;
                  }
                while (T >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = y, _t(), Error.prepareStackTrace = w;
      }
      var V = e ? e.displayName || e.name : "", We = V ? X(V) : "";
      return typeof e == "function" && K.set(e, We), We;
    }
    function ht(e, s, u) {
      return Ce(e, !1);
    }
    function mt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Q(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, mt(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case v:
          return X("Suspense");
        case h:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ht(e.render);
          case p:
            return Q(e.type, s, u);
          case b: {
            var _ = e, w = _._payload, y = _._init;
            try {
              return Q(y(w), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Oe = {}, Pe = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, u = Q(e.type, e._source, s ? s.type : null);
        Pe.setExtraStackFrame(u);
      } else
        Pe.setExtraStackFrame(null);
    }
    function gt(e, s, u, _, w) {
      {
        var y = Function.call.bind(Z);
        for (var g in e)
          if (y(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var $ = Error((_ || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = e[g](s, g, _, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (ee(w), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", u, g, typeof m), ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ee(w), j("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var wt = Array.isArray;
    function ce(e) {
      return wt(e);
    }
    function bt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function yt(e) {
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
      if (yt(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), $e(e);
    }
    var B = A.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, De, ae;
    ae = {};
    function Et(e) {
      if (Z.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function St(e) {
      if (Z.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jt(e, s) {
      if (typeof e.ref == "string" && B.current && s && B.current.stateNode !== s) {
        var u = N(B.current.type);
        ae[u] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), e.ref), ae[u] = !0);
      }
    }
    function Rt(e, s) {
      {
        var u = function() {
          Ae || (Ae = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Tt(e, s) {
      {
        var u = function() {
          De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Ct = function(e, s, u, _, w, y, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
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
        value: _
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Ot(e, s, u, _, w) {
      {
        var y, g = {}, m = null, $ = null;
        u !== void 0 && (Ie(u), m = "" + u), St(s) && (Ie(s.key), m = "" + s.key), Et(s) && ($ = s.ref, jt(s, w));
        for (y in s)
          Z.call(s, y) && !xt.hasOwnProperty(y) && (g[y] = s[y]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (y in T)
            g[y] === void 0 && (g[y] = T[y]);
        }
        if (m || $) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Rt(g, O), $ && Tt(g, O);
        }
        return Ct(e, m, $, w, _, B.current, g);
      }
    }
    var ue = A.ReactCurrentOwner, Fe = A.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var s = e._owner, u = Q(e.type, e._source, s ? s.type : null);
        Fe.setExtraStackFrame(u);
      } else
        Fe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Le() {
      {
        if (ue.current) {
          var e = N(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pt(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var qe = {};
    function $t(e) {
      {
        var s = Le();
        if (!s) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Ne(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = $t(s);
        if (qe[u])
          return;
        qe[u] = !0;
        var _ = "";
        e && e._owner && e._owner !== ue.current && (_ = " It was passed a child from " + N(e._owner.type) + "."), W(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, _), W(null);
      }
    }
    function Me(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var u = 0; u < e.length; u++) {
            var _ = e[u];
            de(_) && Ne(_, s);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = I(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), g; !(g = y.next()).done; )
              de(g.value) && Ne(g.value, s);
        }
      }
    }
    function It(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === p))
          u = s.propTypes;
        else
          return;
        if (u) {
          var _ = N(s);
          gt(u, e.props, "prop", _, e);
        } else if (s.PropTypes !== void 0 && !le) {
          le = !0;
          var w = N(s);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var _ = s[u];
          if (_ !== "children" && _ !== "key") {
            W(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function ke(e, s, u, _, w, y) {
      {
        var g = dt(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Pt(w);
          $ ? m += $ : m += Le();
          var T;
          e === null ? T = "null" : ce(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var O = Ot(e, s, u, w, y);
        if (O == null)
          return O;
        if (g) {
          var D = s.children;
          if (D !== void 0)
            if (_)
              if (ce(D)) {
                for (var V = 0; V < D.length; V++)
                  Me(D[V], e);
                Object.freeze && Object.freeze(D);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(D, e);
        }
        return e === n ? At(O) : It(O), O;
      }
    }
    function Dt(e, s, u) {
      return ke(e, s, u, !0);
    }
    function Ft(e, s, u) {
      return ke(e, s, u, !1);
    }
    var Lt = Ft, qt = Dt;
    G.Fragment = n, G.jsx = Lt, G.jsxs = qt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Vt() : ve.exports = Yt();
var f = ve.exports;
const zt = "_spice_wrapper_1b9je_1", Ut = "_spice_wrapper_hidden_1b9je_10", ze = {
  spice_wrapper: zt,
  spice_wrapper_hidden: Ut
}, Xe = Y(!0), Ke = Y((r) => !r), Bt = ({ children: r }) => {
  const [t, o] = L(!0);
  return /* @__PURE__ */ f.jsx(Xe.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Ke.Provider, { value: o, children: r }) });
}, Ht = ({ children: r }) => {
  const t = z(Xe);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${ze.spice_wrapper} ${t ? ze.spice_wrapper_hidden : ""}`,
      children: r
    }
  );
}, Wr = ({ children: r }) => /* @__PURE__ */ f.jsx(Bt, { children: /* @__PURE__ */ f.jsx(Ht, { children: r }) }), Qe = () => z(Ke), Gt = "_spice_aside_aside_4cj7n_1", Jt = "_spice_aside_main_4cj7n_5", fe = {
  spice_aside_aside: Gt,
  spice_aside_main: Jt
}, Vr = ({
  className: r,
  children: t,
  aside: o,
  isSticky: n = !1
}) => {
  const i = Qe();
  return P(() => (n && i(() => !1), () => {
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
}, Ue = ({
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
    const c = t.defaultValue;
    return c ? /* @__PURE__ */ f.jsx("option", { hidden: !0, children: c }) : null;
  }, i = () => {
    const c = t.defaultSelectedIndex;
    if (c)
      return t.options[c];
  };
  return /* @__PURE__ */ f.jsxs(
    "select",
    {
      ...o,
      className: he.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ f.jsx(n, {}),
        t.options.map((c) => /* @__PURE__ */ f.jsx("option", { value: c, children: c }, c))
      ]
    }
  );
}, Be = ({
  layoutType: r,
  formPropsArr: t,
  label: o,
  FormItem: n,
  errors: i
}) => {
  const c = x(
    (l) => !i || !i[l] ? null : i[l],
    [i]
  );
  if (r === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsx(n, { formProps: t[0] }),
      c(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(n, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(n, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map((a) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        n,
        {
          formProps: a,
          className: he.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: a.id, children: a.value })
    ] }, a.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { children: o }),
      /* @__PURE__ */ f.jsx("ul", { children: l }),
      c(0)
    ] });
  }
}, er = ({ formProps: r }) => {
  const { isTextarea: t, ...o } = r;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, Yr = ({
  className: r,
  label: t,
  formProps: o,
  errors: n
}) => {
  const i = o, c = i[0].type, l = i.length, a = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = x(
    (p) => Be({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: p,
      errors: n
    }),
    [n, i, t, l]
  ), h = x(() => a ? v(Zt) : d ? v(er) : c === "radio" || c === "checkbox" ? Be({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Ue,
    errors: n
  }) : v(Ue), [n, i, t, a, d, v, c]);
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
}, zr = ({
  position: r,
  parent: t,
  content: o,
  callback: n,
  className: i
}) => {
  const c = C(null), l = C(!1), [a, d] = L(!1), [v, h] = L(!0), p = x(() => {
    l.current = !0, h(!1), d(!0), n != null && n.onEnter && n.onEnter(c.current);
  }, [n]), b = x(async () => {
    l.current = !1, h(!0), n != null && n.onLeave && await te(n.onLeave(c.current)), l.current || d(!1);
  }, [n]);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onMouseEnter: p,
      onMouseLeave: b,
      onClick: b,
      className: `${J.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ f.jsx(
          "div",
          {
            ref: c,
            className: `${J.spice_dropdown_content} ${a ? "" : J.spice_dropdown_content_hidden} ${v ? J.spice_dropdown_content_pointerPrevent : ""} ${J["spice_dropdown_" + r]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, ir = (r = 60, t = []) => {
  r > 60 && (r = 60);
  const o = Math.floor(1e3 / r), n = C(performance.now()), i = x(
    (a) => {
      const d = a - n.current, v = d <= o;
      return v || (n.current = a - d % o), v;
    },
    [o]
  ), c = C({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, l = x(
    (a) => {
      c.id = requestAnimationFrame(l), !i(a) && c.callback && c.isPlay && c.callback(a);
    },
    [i, c]
  );
  return P(() => (c.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(c.id);
  }), t), (a, d) => {
    if (a === "play") {
      if (!d) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      c.callback = d, c.isPlay = !0;
    } else
      a === "pause" && (c.isPlay = !1);
  };
}, sr = "_spice_magnet_stopPropagation_99wvn_1", cr = {
  spice_magnet_stopPropagation: sr
}, Ur = ({
  className: r,
  children: t,
  callback: o,
  fps: n = 60,
  stopPropagation: i = !1,
  isOnClickReset: c = !1,
  dependencies: l = []
}) => {
  const a = C(null), d = C(null), v = C();
  n > 60 && (n = 60);
  const h = ir(n, l), p = F(
    () => ({
      target: a.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), b = x(
    (R) => {
      p.target = a.current, p.children = d.current;
    },
    [p]
  ), E = x(
    (R) => {
      v.current = R.currentTarget.getBoundingClientRect(), p.x = R.clientX - v.current.left - v.current.width / 2, p.y = R.clientY - v.current.top - v.current.height / 2;
    },
    [p]
  ), S = x(
    (R) => {
      R.stopPropagation(), b(R), E(R), h("play", () => {
        o.onMove(p);
      });
    },
    [b, E, h, o, p]
  ), q = x(
    (R) => {
      R.stopPropagation(), E(R);
    },
    [E]
  ), I = x(
    (R) => {
      R.stopPropagation(), h("pause"), o.onLeave && o.onLeave(p);
    },
    [h, o, p]
  ), A = x(
    (R) => {
      I(R);
    },
    [I]
  ), j = x(
    (R) => {
      c && I(R);
    },
    [I, c]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: S,
      onMouseMove: q,
      onMouseLeave: A,
      onClick: j,
      className: r || "",
      ref: a,
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
}, Br = ({ ratio: r, children: t, className: o }) => {
  const n = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let i = n.includes(r), c = typeof r == "number" && r > 0;
  if (!i && !c)
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
          style: c ? { paddingTop: `${r}%` } : {},
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
}, hr = ".spice__modal_close", Hr = ({
  children: r,
  className: t,
  dialog: o,
  callback: n
}) => {
  const i = C(null), c = x(() => {
    He("add"), i.current.showModal(), n != null && n.onOpen && n.onOpen(i.current);
  }, [n]), l = x(async () => {
    n != null && n.onClose && await te(n.onClose(i.current)), He("remove"), i.current.close();
  }, [n]);
  return P(() => {
    const a = i.current.querySelectorAll(hr);
    if (a)
      return a.forEach(
        (d) => d.addEventListener("click", l)
      ), () => {
        a.forEach(
          (d) => d.removeEventListener("click", l)
        );
      };
  }, [l]), P(() => {
    const a = (d) => {
      var h;
      ((h = i.current) == null ? void 0 : h.hasAttribute("open")) && d.key === "Escape" && l();
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a);
    };
  }, [l]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          c();
        },
        children: r
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: i,
        onClick: (a) => {
          a.target === i.current && l();
        },
        className: `${vr.spice_modal_dialog} ${o.className ? o.className : ""}`,
        children: o.children
      }
    )
  ] });
}, Gr = ({ children: r, className: t }) => {
  const o = Qe();
  return P(() => (o(() => !1), () => {
    o(() => !0);
  }), [o]), /* @__PURE__ */ f.jsx("div", { className: t || "", children: r });
}, mr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ze = Y(mr), et = Y(
  () => {
  }
), gr = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, n] = L({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: o, children: /* @__PURE__ */ f.jsx(et.Provider, { value: n, children: r }) });
}, tt = () => z(Ze), me = () => z(et), wr = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = me(), i = tt(), c = x(() => {
    i.current === t || i.isLeaving || n((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [n, i, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: c,
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      children: r
    }
  );
}, br = "_spice_tab_hidden_1r0oa_1", yr = {
  spice_tab_hidden: br
}, rt = ({ content: r, isOpen: t }) => {
  const o = r.querySelectorAll("a,button");
  if (!o)
    return;
  const n = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", n);
  });
}, xr = ({
  children: r,
  value: t,
  className: o,
  callback: n
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = C(!0), c = C(null), l = me(), a = tt(), d = a.current === t && !a.isLeaving;
  return P(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!a.isAnimation) {
      d && n != null && n.onReset && n.onReset(c.current);
      return;
    }
    a.prev === t && (async () => (n != null && n.onClose && await te(n.onClose(c.current)), l((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), d && n != null && n.onOpen && n.onOpen(c.current);
  }, [a, l, n, t, d]), P(() => {
    rt({
      content: c.current,
      isOpen: a.current === t
    });
  }, [a, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: c,
      className: `${a.current !== t ? yr.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": a.current !== t,
      children: r
    }
  );
}, Er = () => {
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
}, Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: wr,
  Content: xr,
  Context: gr,
  useTabSwitch: Er
}, Symbol.toStringTag, { value: "Module" })), Sr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, nt = Y(Sr), ot = Y(() => {
}), jr = ({ children: r, defaultValue: t }) => {
  const [o, n] = L({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(nt.Provider, { value: o, children: /* @__PURE__ */ f.jsx(ot.Provider, { value: n, children: r }) });
}, it = () => z(nt), Rr = () => z(ot), Tr = ({ children: r, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = it(), i = Rr(), c = F(
    () => !!n.defaultValue.find((d) => d === t),
    [n, t]
  ), [l, a] = L(c);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        i((d) => ({
          ...d,
          toggle: l,
          target: t
        })), a(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: r
    }
  );
}, Cr = ({
  targetRef: r,
  callback: t,
  debounce: o = 100,
  dependencies: n = []
}) => {
  const i = C(0), c = C(!0);
  P(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(d[0].target);
      }, o);
    }), a = r.current;
    if (a)
      return l.observe(a), () => {
        l.unobserve(a), clearTimeout(i.current);
      };
  }, n);
}, Or = "_spice_accordion_content_1wkzs_1", Pr = "_spice_accordion_hidden_1wkzs_5", Ge = {
  spice_accordion_content: Or,
  spice_accordion_hidden: Pr
}, $r = ({
  value: r,
  callback: t,
  children: o,
  className: n
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = it(), c = F(
    () => !!i.defaultValue.find((p) => p === r),
    [i, r]
  ), [l, a] = L(c);
  P(() => {
    i.target === r && a(!l);
  }, [i.target, i.toggle]);
  const d = C(!0), v = C(null), h = C(null);
  return P(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = {
      height: h.current.getBoundingClientRect().height,
      target: v.current
    };
    l ? t.onOpen(p) : t.onClose(p);
  }, [l, t]), P(() => {
    rt({ content: v.current, isOpen: l });
  }, [l]), Cr({
    targetRef: h,
    callback: (p) => {
      const b = p.getBoundingClientRect().height;
      l && (v.current.style.height = `${b}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: v,
      className: `${Ge.spice_accordion_content} ${c ? "" : Ge.spice_accordion_hidden}`,
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, className: n || "", children: o })
    }
  );
}, Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Tr,
  Content: $r,
  Context: jr
}, Symbol.toStringTag, { value: "Module" })), Ir = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: n,
  onProgress: i,
  onStart: c,
  onComplete: l
}) => {
  const a = F(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = C(null), v = x(
    ({
      digitContainer: p,
      numbersTarget: b,
      digit: E,
      digitNumber: S,
      currentPercent: q,
      limit: I,
      destination: A
    }) => {
      if (a[E] !== S && q <= I) {
        const j = S.toString(), R = (Math.min(8, S) + 1).toString(), ne = q >= I;
        b[0].innerText = j, b[1].innerText = ne ? "0" : R, i && i({
          digitContainer: p,
          percent: q,
          digit: E,
          destination: A,
          duration: r / (A / E)
        }), a[E] = S;
      }
    },
    [a, i, r]
  ), h = x(
    (p) => (p > 100 && (p = 100), new Promise((b) => {
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: n.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const S = a.to += 1, q = async () => {
          clearInterval(d.current), S > 100 && l && await te(l(E.getAll())), b(S - 1);
        };
        S === 1 && c && c(E.getAll()), S > p && await q();
        const I = Math.floor(S / 100) % 100, A = Math.floor(S / 10) % 10, j = S % 10;
        v({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: S,
          numbersTarget: E.ones,
          limit: 90,
          destination: p
        }), v({
          digitContainer: o.current,
          digit: 10,
          digitNumber: A,
          currentPercent: S,
          numbersTarget: E.tens,
          limit: 90,
          destination: p
        }), a[100] !== I && (E.hundreds[1].innerText = I.toString(), i && i({
          digitContainer: n.current,
          percent: S,
          digit: 100,
          destination: p,
          duration: r / (p / 10)
        }), a[100] = I);
      }, Math.max(1e3 / 60, r / p * 1e3));
    })),
    [
      a,
      v,
      o,
      n,
      t,
      l,
      i,
      c,
      r
    ]
  );
  return P(() => () => {
    clearInterval(d.current);
  }, []), h;
}, Ar = "_spice_loadingProgress_digit_avxoy_1", Dr = {
  spice_loadingProgress_digit: Ar
}, st = Nt(
  Mt(({ className: r }, t) => /* @__PURE__ */ f.jsxs("div", { className: Dr.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" }),
    /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" })
  ] }))
);
st.displayName = "Digit";
const Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: st,
  useLoadingProgress: Ir
}, Symbol.toStringTag, { value: "Module" })), Qr = typeof document < "u" ? kt : P, Zr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: n = !1,
  callback: i,
  dependencies: c = []
}) => {
  const l = {
    rootMargin: t,
    threshold: o
  };
  P(() => {
    const a = r == null ? void 0 : r.current;
    if (!a)
      return;
    const d = (h, p) => {
      h.forEach((b) => {
        b.isIntersecting && i.onEnter ? (i.onEnter(b), n && p.unobserve(b.target)) : !b.isIntersecting && i.onLeave && i.onLeave(b);
      });
    }, v = new IntersectionObserver(d, l);
    return v.observe(a), () => {
      v.unobserve(a);
    };
  }, c);
}, re = ({
  callback: r,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const n = C(0), i = C(0), c = x(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: n.current
      });
    }, t);
  }, [r, t]);
  P(() => (n.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(i.current);
  }), o);
}, Fr = ({
  initWinW: r,
  winW: t,
  threshold: o
}) => {
  let n = !(r <= o);
  t <= o ? n && window.location.reload() : !n && window.location.reload();
}, Lr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, qr = () => {
  console.log(Lr);
}, Nr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, en = ({
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
    callback: ({ initWinW: i, winW: c }) => {
      r && r.forEach(
        (l) => Fr({
          initWinW: i,
          winW: c,
          threshold: l
        })
      ), n(c);
    },
    debounce: 100,
    dependencies: []
  }), P(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), o && process.env.NODE_ENV !== "development" && qr();
  }, [o, n]);
}, Mr = () => {
  const [r, t] = L(null), o = x(() => {
    const n = window.ontouchstart, i = navigator.maxTouchPoints;
    n !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return re({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), P(() => o(), [o]), r;
}, _e = "scroll", tn = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const n = C(null), [i, c] = Wt(
    (h, p) => {
      switch (p.type) {
        case _e:
          return n.current = p.payload, p.payload;
        default:
          return h;
      }
    },
    n.current
  ), l = C(0), a = C(0), d = () => window.scrollY || document.documentElement.scrollTop, v = x(() => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      const h = d();
      h > l.current + r && n.current !== "down" ? c({ type: _e, payload: "down" }) : h < l.current - r && n.current !== "up" && c({ type: _e, payload: "up" }), l.current = h;
    }, t);
  }, [t, r]);
  return P(() => (l.current = d(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(a.current);
  }), o), i;
}, rn = ({ type: r, width: t }) => {
  const [o, n] = L(null), i = x(
    (c) => {
      switch (r) {
        case "max":
          n(t >= c);
          break;
        case "min":
          n(t <= c);
          break;
      }
    },
    [r, t]
  );
  return re({
    callback: ({ winW: c }) => i(c),
    debounce: 100,
    dependencies: []
  }), P(() => i(window.innerWidth), [i]), o;
}, nn = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: o = "",
  width: n = 600,
  height: i = 800
}) => {
  const c = F(() => encodeURIComponent(r), [r]), l = F(
    () => `height=${i},width=${n}`,
    [i, n]
  ), a = F(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${c}&t=${o}`,
          "newwindow",
          l
        );
      }
    }),
    [c, o, l]
  ), d = F(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${c}&text=${o}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, o]
  ), v = F(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${c}&text=${o}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, o]
  ), h = F(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: o,
            url: t || c
          });
        } catch {
          return;
        }
      }
    }),
    [o, c, t]
  ), [p, b] = L(!1), E = F(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          b(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: a,
    X: d,
    LINE: v,
    share: h,
    copy: E,
    isCopied: p
  };
}, on = (r) => {
  const t = Mr();
  P(() => {
    !t || !r.current || (r.current.style.height = `${window.screen.height}px`);
  }, [t, r]), re({
    callback: ({ winH: o }) => {
      r.current && (t ? r.current.style.height = `${window.screen.height}px` : r.current.style.height = `${o}px`);
    },
    dependencies: [t]
  });
};
export {
  Xr as Accordion,
  Vr as AsideLayout,
  zr as Dropdown,
  Yr as FormField,
  Kr as LoadingProgress,
  Ur as Magnet,
  Hr as Modal,
  Gr as StickyItem,
  Jr as Tab,
  Br as Thumbnail,
  Wr as WrapperLayout,
  on as use100vh,
  ir as useAnimationFrame,
  Zr as useIntersectionObserver,
  Mr as useIsTouchDevice,
  Qr as useIsomorphicLayoutEffect,
  rn as useMediaQuery,
  Cr as useResizeObserver,
  tn as useScrollDirection,
  nn as useShare,
  en as useStarter,
  re as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
