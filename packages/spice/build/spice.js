import Je, { createContext as Y, useState as q, useContext as z, useEffect as P, useCallback as x, useRef as R, useMemo as L, forwardRef as Nt, useLayoutEffect as Mt, useReducer as kt } from "react";
var pe = { exports: {} }, H = {};
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
function Wt() {
  if (Ve)
    return H;
  Ve = 1;
  var n = Je, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, d, v) {
    var h, p = {}, b = null, E = null;
    v !== void 0 && (b = "" + v), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (h in d)
      r.call(d, h) && !c.hasOwnProperty(h) && (p[h] = d[h]);
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
function Vt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Je, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), T = Symbol.iterator, D = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = T && e[T] || e[D];
      return typeof s == "function" ? s : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), _ = 1; _ < s; _++)
          u[_ - 1] = arguments[_];
        S("error", e, u);
      }
    }
    function S(e, s, u) {
      {
        var _ = I.ReactDebugCurrentFrame, w = _.getStackAddendum();
        w !== "" && (s += "%s", u = u.concat([w]));
        var y = u.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var te = !1, ct = !1, at = !1, ut = !1, lt = !1, ge;
    ge = Symbol.for("react.module.reference");
    function dt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === c || lt || e === i || e === v || e === h || ut || e === E || te || ct || at || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === l || e.$$typeof === a || e.$$typeof === d || // This needs to include all possible module reference object
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
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        U < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = I.ReactCurrentDispatcher, ne;
    function X(e, s, u) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (w) {
            var _ = w.stack.trim().match(/\n( *(at )?)/);
            ne = _ && _[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, K;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new vt();
    }
    function Ce(e, s) {
      if (!e || oe)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var _;
      oe = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = re.current, re.current = null, pt();
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
`), j = m.length - 1, C = $.length - 1; j >= 1 && C >= 0 && m[j] !== $[C]; )
            C--;
          for (; j >= 1 && C >= 0; j--, C--)
            if (m[j] !== $[C]) {
              if (j !== 1 || C !== 1)
                do
                  if (j--, C--, C < 0 || m[j] !== $[C]) {
                    var A = `
` + m[j].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, A), A;
                  }
                while (j >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = y, _t(), Error.prepareStackTrace = w;
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
    var Z = Object.prototype.hasOwnProperty, Oe = {}, Pe = I.ReactDebugCurrentFrame;
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
            } catch (j) {
              m = j;
            }
            m && !(m instanceof Error) && (ee(w), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", u, g, typeof m), ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ee(w), O("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var wt = Array.isArray;
    function ie(e) {
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
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), $e(e);
    }
    var B = I.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, De, se;
    se = {};
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
        se[u] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), e.ref), se[u] = !0);
      }
    }
    function Rt(e, s) {
      {
        var u = function() {
          Ae || (Ae = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
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
          De || (De = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
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
          var j = e.defaultProps;
          for (y in j)
            g[y] === void 0 && (g[y] = j[y]);
        }
        if (m || $) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Rt(g, C), $ && Tt(g, C);
        }
        return Ct(e, m, $, w, _, B.current, g);
      }
    }
    var ce = I.ReactCurrentOwner, Fe = I.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var s = e._owner, u = Q(e.type, e._source, s ? s.type : null);
        Fe.setExtraStackFrame(u);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Le() {
      {
        if (ce.current) {
          var e = N(ce.current.type);
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
        e && e._owner && e._owner !== ce.current && (_ = " It was passed a child from " + N(e._owner.type) + "."), W(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, _), W(null);
      }
    }
    function Me(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var u = 0; u < e.length; u++) {
            var _ = e[u];
            ue(_) && Ne(_, s);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = F(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), g; !(g = y.next()).done; )
              ue(g.value) && Ne(g.value, s);
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
        } else if (s.PropTypes !== void 0 && !ae) {
          ae = !0;
          var w = N(s);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var _ = s[u];
          if (_ !== "children" && _ !== "key") {
            W(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
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
          var j;
          e === null ? j = "null" : ie(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, m);
        }
        var C = Ot(e, s, u, w, y);
        if (C == null)
          return C;
        if (g) {
          var A = s.children;
          if (A !== void 0)
            if (_)
              if (ie(A)) {
                for (var V = 0; V < A.length; V++)
                  Me(A[V], e);
                Object.freeze && Object.freeze(A);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(A, e);
        }
        return e === r ? At(C) : It(C), C;
      }
    }
    function Dt(e, s, u) {
      return ke(e, s, u, !0);
    }
    function Ft(e, s, u) {
      return ke(e, s, u, !1);
    }
    var Lt = Ft, qt = Dt;
    G.Fragment = r, G.jsx = Lt, G.jsxs = qt;
  }()), G;
}
process.env.NODE_ENV === "production" ? pe.exports = Wt() : pe.exports = Vt();
var f = pe.exports;
const Yt = "_spice_wrapper_1b9je_1", zt = "_spice_wrapper_hidden_1b9je_10", ze = {
  spice_wrapper: Yt,
  spice_wrapper_hidden: zt
}, Xe = Y(!0), Ke = Y((n) => !n), Ut = ({ children: n }) => {
  const [t, o] = q(!0);
  return /* @__PURE__ */ f.jsx(Xe.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Ke.Provider, { value: o, children: n }) });
}, Bt = ({ children: n }) => {
  const t = z(Xe);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${ze.spice_wrapper} ${t ? ze.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, Mr = ({ children: n }) => /* @__PURE__ */ f.jsx(Ut, { children: /* @__PURE__ */ f.jsx(Bt, { children: n }) }), Qe = () => z(Ke), Ht = "_spice_aside_aside_4cj7n_1", Gt = "_spice_aside_main_4cj7n_5", le = {
  spice_aside_aside: Ht,
  spice_aside_main: Gt
}, kr = ({
  className: n,
  children: t,
  aside: o,
  isSticky: r = !1
}) => {
  const i = Qe();
  return P(() => (r && i(() => !1), () => {
    i(() => !0);
  }), [r, i]), /* @__PURE__ */ f.jsxs("div", { className: n || "", children: [
    o.index === 1 && /* @__PURE__ */ f.jsx("div", { className: le.spice_aside_main, children: t }),
    /* @__PURE__ */ f.jsx(
      "aside",
      {
        className: `${le.spice_aside_aside} ${o.className ? o.className : ""}`,
        children: o.chidren
      }
    ),
    o.index === 0 && /* @__PURE__ */ f.jsx("div", { className: le.spice_aside_main, children: t })
  ] });
}, Jt = "_spice_form_input_yxowj_1", Xt = "_spice_form_select_yxowj_2", Kt = "_spice_form_radioCheckInput_yxowj_8", _e = {
  spice_form_input: Jt,
  spice_form_select: Xt,
  spice_form_radioCheckInput: Kt
}, Ue = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...n,
    className: `${_e.spice_form_input} ${t || ""}`
  }
), Qt = ({ formProps: n }) => {
  const { isSelect: t, ...o } = n;
  if (!t)
    return;
  const r = () => {
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
      className: _e.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ f.jsx(r, {}),
        t.options.map((c) => /* @__PURE__ */ f.jsx("option", { value: c, children: c }, c))
      ]
    }
  );
}, Be = ({
  layoutType: n,
  formPropsArr: t,
  label: o,
  FormItem: r,
  errors: i
}) => {
  const c = x(
    (l) => !i || !i[l] ? null : i[l],
    [i]
  );
  if (n === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
      c(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(r, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const l = t.map((a) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        r,
        {
          formProps: a,
          className: _e.spice_form_radioCheckInput
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
}, Zt = ({ formProps: n }) => {
  const { isTextarea: t, ...o } = n;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, Wr = ({
  className: n,
  label: t,
  formProps: o,
  errors: r
}) => {
  const i = o, c = i[0].type, l = i.length, a = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = x(
    (p) => Be({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: i,
      label: t,
      FormItem: p,
      errors: r
    }),
    [r, i, t, l]
  ), h = x(() => a ? v(Qt) : d ? v(Zt) : c === "radio" || c === "checkbox" ? Be({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Ue,
    errors: r
  }) : v(Ue), [r, i, t, a, d, v, c]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ f.jsx(h, {}) });
}, ve = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), er = "_spice_dropdown_wrapper_1nq94_1", tr = "_spice_dropdown_content_1nq94_5", rr = "_spice_dropdown_content_hidden_1nq94_10", nr = "_spice_dropdown_content_pointerPrevent_1nq94_15", J = {
  spice_dropdown_wrapper: er,
  spice_dropdown_content: tr,
  spice_dropdown_content_hidden: rr,
  spice_dropdown_content_pointerPrevent: nr,
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
}, Vr = ({
  position: n,
  parent: t,
  content: o,
  callback: r,
  className: i
}) => {
  const c = R(null), l = R(!1), [a, d] = q(!1), [v, h] = q(!0), p = x(() => {
    l.current = !0, h(!1), d(!0), r != null && r.onEnter && r.onEnter(c.current);
  }, [r]), b = x(async () => {
    l.current = !1, h(!0), r != null && r.onLeave && await ve(r.onLeave(c.current)), l.current || d(!1);
  }, [r]);
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
            className: `${J.spice_dropdown_content} ${a ? "" : J.spice_dropdown_content_hidden} ${v ? J.spice_dropdown_content_pointerPrevent : ""} ${J["spice_dropdown_" + n]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, or = (n = 60, t = []) => {
  n > 60 && (n = 60);
  const o = Math.floor(1e3 / n), r = R(performance.now()), i = x(
    (a) => {
      const d = a - r.current, v = d <= o;
      return v || (r.current = a - d % o), v;
    },
    [o]
  ), c = R({
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
}, ir = "_spice_magnet_stopPropagation_99wvn_1", sr = {
  spice_magnet_stopPropagation: ir
}, Yr = ({
  className: n,
  children: t,
  callback: o,
  fps: r = 60,
  stopPropagation: i = !1,
  isOnClickReset: c = !1,
  dependencies: l = []
}) => {
  const a = R(null), d = R(null), v = R();
  r > 60 && (r = 60);
  const h = or(r, l), p = L(
    () => ({
      target: a.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), b = x(
    (S) => {
      p.target = a.current, p.children = d.current;
    },
    [p]
  ), E = x(
    (S) => {
      v.current = S.currentTarget.getBoundingClientRect(), p.x = S.clientX - v.current.left - v.current.width / 2, p.y = S.clientY - v.current.top - v.current.height / 2;
    },
    [p]
  ), T = x(
    (S) => {
      S.stopPropagation(), b(S), E(S), h("play", () => {
        o.onMove(p);
      });
    },
    [b, E, h, o, p]
  ), D = x(
    (S) => {
      S.stopPropagation(), E(S);
    },
    [E]
  ), F = x(
    (S) => {
      S.stopPropagation(), h("pause"), o.onLeave && o.onLeave(p);
    },
    [h, o, p]
  ), I = x(
    (S) => {
      F(S);
    },
    [F]
  ), O = x(
    (S) => {
      c && F(S);
    },
    [F, c]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: T,
      onMouseMove: D,
      onMouseLeave: I,
      onClick: O,
      className: n || "",
      ref: a,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: d,
          className: i ? sr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, cr = "_spice_thumbnail_wrapper_1qqot_1", ar = "_spice_thumbnail_view_1qqot_5", ur = "_spice_thumbnail_golden_1qqot_26", lr = "_spice_thumbnail_silver_1qqot_30", dr = "_spice_thumbnail_platinum_1qqot_34", fr = "_spice_thumbnail_square_1qqot_42", de = {
  spice_thumbnail_wrapper: cr,
  spice_thumbnail_view: ar,
  spice_thumbnail_golden: ur,
  spice_thumbnail_silver: lr,
  spice_thumbnail_platinum: dr,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: fr,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, zr = ({ ratio: n, children: t, className: o }) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let i = r.includes(n), c = typeof n == "number" && n > 0;
  if (!i && !c)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${de.spice_thumbnail_wrapper} ${o || ""}`,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${de.spice_thumbnail_view} ${i ? de["spice_thumbnail_" + n] : ""}`,
          style: c ? { paddingTop: `${n}%` } : {},
          children: t
        }
      )
    }
  );
}, He = (n) => {
  const t = document.documentElement.style, o = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, pr = "_spice_modal_dialog_1t31c_1", _r = {
  spice_modal_dialog: pr
}, vr = ".spice__modal_close", Ur = ({
  children: n,
  className: t,
  dialog: o,
  callback: r
}) => {
  const i = R(null), c = x(() => {
    He("add"), i.current.showModal(), r != null && r.onOpen && r.onOpen(i.current);
  }, [r]), l = x(async () => {
    r != null && r.onClose && await ve(r.onClose(i.current)), He("remove"), i.current.close();
  }, [r]);
  return P(() => {
    const a = i.current.querySelectorAll(vr);
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
        children: n
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: i,
        onClick: (a) => {
          a.target === i.current && l();
        },
        className: `${_r.spice_modal_dialog} ${o.className ? o.className : ""}`,
        children: o.children
      }
    )
  ] });
}, Br = ({ children: n, className: t }) => {
  const o = Qe();
  return P(() => (o(() => !1), () => {
    o(() => !0);
  }), [o]), /* @__PURE__ */ f.jsx("div", { className: t || "", children: n });
}, hr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ze = Y(hr), et = Y(
  () => {
  }
), mr = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, r] = q({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: o, children: /* @__PURE__ */ f.jsx(et.Provider, { value: r, children: n }) });
}, tt = () => z(Ze), he = () => z(et), gr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = he(), i = tt(), c = x(() => {
    i.current === t || i.isLeaving || r((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: c,
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      children: n
    }
  );
}, wr = "_spice_tab_hidden_1r0oa_1", br = {
  spice_tab_hidden: wr
}, rt = ({ content: n, isOpen: t }) => {
  const o = n.querySelectorAll("a,button");
  if (!o)
    return;
  const r = t ? "0" : "-1";
  o.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, yr = ({
  children: n,
  value: t,
  className: o,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = R(!0), c = R(null), l = he(), a = tt(), d = a.current === t && !a.isLeaving;
  return P(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!a.isAnimation) {
      d && r != null && r.onReset && r.onReset(c.current);
      return;
    }
    a.prev === t && (async () => (r != null && r.onClose && await ve(r.onClose(c.current)), l((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), d && r != null && r.onOpen && r.onOpen(c.current);
  }, [a, l, r, t, d]), P(() => {
    rt({
      content: c.current,
      isOpen: a.current === t
    });
  }, [a, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: c,
      className: `${a.current !== t ? br.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": a.current !== t,
      children: n
    }
  );
}, xr = () => {
  const n = he();
  return (t, o) => {
    n((r) => ({
      isAnimation: o,
      isLeaving: o,
      prev: o ? r.current : "",
      current: o ? r.current : t,
      next: o ? t : ""
    }));
  };
}, Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: gr,
  Content: yr,
  Context: mr,
  useTabSwitch: xr
}, Symbol.toStringTag, { value: "Module" })), Er = {
  target: "",
  toggle: !1,
  defaultValue: []
}, nt = Y(Er), ot = Y(() => {
}), Sr = ({ children: n, defaultValue: t }) => {
  const [o, r] = q({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(nt.Provider, { value: o, children: /* @__PURE__ */ f.jsx(ot.Provider, { value: r, children: n }) });
}, it = () => z(nt), jr = () => z(ot), Rr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = it(), i = jr(), c = L(
    () => !!r.defaultValue.find((d) => d === t),
    [r, t]
  ), [l, a] = q(c);
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
      children: n
    }
  );
}, Tr = ({
  targetRef: n,
  callback: t,
  debounce: o = 100,
  dependencies: r = []
}) => {
  const i = R(0), c = R(!0);
  P(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(d[0].target);
      }, o);
    }), a = n.current;
    if (a)
      return l.observe(a), () => {
        l.unobserve(a), clearTimeout(i.current);
      };
  }, r);
}, Cr = "_spice_accordion_content_1wkzs_1", Or = "_spice_accordion_hidden_1wkzs_5", Ge = {
  spice_accordion_content: Cr,
  spice_accordion_hidden: Or
}, Pr = ({
  value: n,
  callback: t,
  children: o,
  className: r
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = it(), c = L(
    () => !!i.defaultValue.find((p) => p === n),
    [i, n]
  ), [l, a] = q(c);
  P(() => {
    i.target === n && a(!l);
  }, [i.target, i.toggle]);
  const d = R(!0), v = R(null), h = R(null);
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
  }, [l]), Tr({
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
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, className: r || "", children: o })
    }
  );
}, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Rr,
  Content: Pr,
  Context: Sr
}, Symbol.toStringTag, { value: "Module" })), $r = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: r,
  onProgress: i,
  onStart: c,
  onComplete: l
}) => {
  const a = L(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = R(null), v = x(
    ({
      digitContainer: p,
      numbersTarget: b,
      digit: E,
      digitNumber: T,
      currentPercent: D,
      limit: F,
      destination: I
    }) => {
      if (a[E] !== T && D <= F) {
        const O = T.toString(), S = (Math.min(8, T) + 1).toString(), te = D >= F;
        b[0].innerText = O, b[1].innerText = te ? "0" : S, i && i({
          digitContainer: p,
          percent: D,
          digit: E,
          destination: I,
          duration: n / (I / E)
        }), a[E] = T;
      }
    },
    [a, i, n]
  ), h = x(
    (p) => (p > 100 && (p = 100), new Promise((b) => {
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(() => {
        const T = a.to += 1;
        T >= p && (clearInterval(d.current), b(T)), T === 1 ? c && c(E.getAll()) : T === 100 && l && l(E.getAll());
        const D = Math.floor(T / 100) % 100, F = Math.floor(T / 10) % 10, I = T % 10;
        v({
          digitContainer: t.current,
          digit: 1,
          digitNumber: I,
          currentPercent: T,
          numbersTarget: E.ones,
          limit: 90,
          destination: p
        }), v({
          digitContainer: o.current,
          digit: 10,
          digitNumber: F,
          currentPercent: T,
          numbersTarget: E.tens,
          limit: 90,
          destination: p
        }), a[100] !== D && (E.hundreds[1].innerText = D.toString(), i && i({
          digitContainer: r.current,
          percent: T,
          digit: 100,
          destination: p,
          duration: n / (p / 10)
        }), a[100] = D);
      }, Math.max(1e3 / 60, n / p * 1e3));
    })),
    [
      a,
      v,
      o,
      r,
      t,
      l,
      i,
      c,
      n
    ]
  );
  return P(() => () => {
    clearInterval(d.current);
  }, []), h;
}, Ir = "_spice_loadingProgress_digit_avxoy_1", Ar = {
  spice_loadingProgress_digit: Ir
}, st = Nt(
  ({ className: n }, t) => /* @__PURE__ */ f.jsxs("div", { className: Ar.spice_loadingProgress_digit, ref: t, children: [
    /* @__PURE__ */ f.jsx("div", { className: n || "", children: "0" }),
    /* @__PURE__ */ f.jsx("div", { className: n || "", children: "0" })
  ] })
);
st.displayName = "Digit";
const Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: st,
  useLoadingProgress: $r
}, Symbol.toStringTag, { value: "Module" })), Xr = typeof document < "u" ? Mt : P, Kr = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: r = !1,
  callback: i,
  dependencies: c = []
}) => {
  const l = {
    rootMargin: t,
    threshold: o
  };
  P(() => {
    const a = n == null ? void 0 : n.current;
    if (!a)
      return;
    const d = (h, p) => {
      h.forEach((b) => {
        b.isIntersecting && i.onEnter ? (i.onEnter(b), r && p.unobserve(b.target)) : !b.isIntersecting && i.onLeave && i.onLeave(b);
      });
    }, v = new IntersectionObserver(d, l);
    return v.observe(a), () => {
      v.unobserve(a);
    };
  }, c);
}, me = ({
  callback: n,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const r = R(0), i = R(0), c = x(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [n, t]);
  P(() => (r.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(i.current);
  }), o);
}, Dr = ({
  initWinW: n,
  winW: t,
  threshold: o
}) => {
  let r = !(n <= o);
  t <= o ? r && window.location.reload() : !r && window.location.reload();
}, Fr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Lr = () => {
  console.log(Fr);
}, qr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const o = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== o && t.setAttribute("content", o);
}, Qr = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: o = !1
}) => {
  const r = x(
    (i) => {
      t && qr(i);
    },
    [t]
  );
  me({
    callback: ({ initWinW: i, winW: c }) => {
      n && n.forEach(
        (l) => Dr({
          initWinW: i,
          winW: c,
          threshold: l
        })
      ), r(c);
    },
    debounce: 100,
    dependencies: []
  }), P(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), o && process.env.NODE_ENV !== "development" && Lr();
  }, [o, r]);
}, Zr = () => {
  const [n, t] = q(null), o = x(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return me({
    callback: () => o(),
    debounce: 100,
    dependencies: []
  }), P(() => o(), [o]), n;
}, fe = "scroll", en = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: o = []
}) => {
  const r = R(null), [i, c] = kt(
    (h, p) => {
      switch (p.type) {
        case fe:
          return r.current = p.payload, p.payload;
        default:
          return h;
      }
    },
    r.current
  ), l = R(0), a = R(0), d = () => window.scrollY || document.documentElement.scrollTop, v = x(() => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      const h = d();
      h > l.current + n && r.current !== "down" ? c({ type: fe, payload: "down" }) : h < l.current - n && r.current !== "up" && c({ type: fe, payload: "up" }), l.current = h;
    }, t);
  }, [t, n]);
  return P(() => (l.current = d(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(a.current);
  }), o), i;
}, tn = ({ type: n, width: t }) => {
  const [o, r] = q(null), i = x(
    (c) => {
      switch (n) {
        case "max":
          r(t >= c);
          break;
        case "min":
          r(t <= c);
          break;
      }
    },
    [n, t]
  );
  return me({
    callback: ({ winW: c }) => i(c),
    debounce: 100,
    dependencies: []
  }), P(() => i(window.innerWidth), [i]), o;
}, rn = ({
  shareUrl: n,
  shareTitle: t = "",
  width: o = 600,
  height: r = 800
}) => {
  const i = L(() => encodeURIComponent(n), [n]), c = L(
    () => `height=${r},width=${o}`,
    [r, o]
  ), l = L(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${i}&t=${t}`,
          "newwindow",
          c
        );
      }
    }),
    [i, t, c]
  ), a = L(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${i}&text=${t}`,
          "newwindow",
          c
        );
      }
    }),
    [i, c, t]
  ), d = L(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${i}&text=${t}`,
          "newwindow",
          c
        );
      }
    }),
    [i, c, t]
  ), v = L(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: t,
            url: i
          });
        } catch {
          return;
        }
      }
    }),
    [t, i]
  ), [h, p] = q(!1), b = L(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          p(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: l,
    X: a,
    LINE: d,
    share: v,
    copy: b,
    isCopied: h
  };
};
export {
  Gr as Accordion,
  kr as AsideLayout,
  Vr as Dropdown,
  Wr as FormField,
  Jr as LoadingProgress,
  Yr as Magnet,
  Ur as Modal,
  Br as StickyItem,
  Hr as Tab,
  zr as Thumbnail,
  Mr as WrapperLayout,
  or as useAnimationFrame,
  Kr as useIntersectionObserver,
  Zr as useIsTouchDevice,
  Xr as useIsomorphicLayoutEffect,
  tn as useMediaQuery,
  Tr as useResizeObserver,
  en as useScrollDirection,
  rn as useShare,
  Qr as useStarter,
  me as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
