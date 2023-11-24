import Je, { createContext as V, useState as N, useContext as Y, useEffect as P, useCallback as x, useRef as j, useMemo as ee, forwardRef as Nt, useLayoutEffect as Mt, useReducer as Wt } from "react";
var _e = { exports: {} }, B = {};
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
function kt() {
  if (Ve)
    return B;
  Ve = 1;
  var n = Je, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, d, v) {
    var h, _ = {}, b = null, S = null;
    v !== void 0 && (b = "" + v), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (h in d)
      r.call(d, h) && !a.hasOwnProperty(h) && (_[h] = d[h]);
    if (c && c.defaultProps)
      for (h in d = c.defaultProps, d)
        _[h] === void 0 && (_[h] = d[h]);
    return { $$typeof: t, type: c, key: b, ref: S, props: _, _owner: s.current };
  }
  return B.Fragment = o, B.jsx = l, B.jsxs = l, B;
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
function Vt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Je, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), R = Symbol.iterator, D = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = R && e[R] || e[D];
      return typeof i == "function" ? i : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          u[p - 1] = arguments[p];
        E("error", e, u);
      }
    }
    function E(e, i, u) {
      {
        var p = I.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (i += "%s", u = u.concat([w]));
        var y = u.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var te = !1, at = !1, ct = !1, ut = !1, lt = !1, ge;
    ge = Symbol.for("react.module.reference");
    function dt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || lt || e === s || e === v || e === h || ut || e === S || te || at || ct || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ft(e, i, u) {
      var p = e.displayName;
      if (p)
        return p;
      var w = i.displayName || i.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function we(e) {
      return e.displayName || "Context";
    }
    function q(e) {
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
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var i = e;
            return we(i) + ".Consumer";
          case l:
            var u = e;
            return we(u._context) + ".Provider";
          case d:
            return ft(e, e.render, "ForwardRef");
          case _:
            var p = e.displayName || null;
            return p !== null ? p : q(e.type) || "Memo";
          case b: {
            var w = e, y = w._payload, g = w._init;
            try {
              return q(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, U = 0, be, ye, xe, Ee, Te, je, Se;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function _t() {
      {
        if (U === 0) {
          be = console.log, ye = console.info, xe = console.warn, Ee = console.error, Te = console.group, je = console.groupCollapsed, Se = console.groupEnd;
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
        U++;
      }
    }
    function pt() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: be
            }),
            info: M({}, e, {
              value: ye
            }),
            warn: M({}, e, {
              value: xe
            }),
            error: M({}, e, {
              value: Ee
            }),
            group: M({}, e, {
              value: Te
            }),
            groupCollapsed: M({}, e, {
              value: je
            }),
            groupEnd: M({}, e, {
              value: Se
            })
          });
        }
        U < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = I.ReactCurrentDispatcher, ne;
    function J(e, i, u) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (w) {
            var p = w.stack.trim().match(/\n( *(at )?)/);
            ne = p && p[1] || "";
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
    function Ce(e, i) {
      if (!e || oe)
        return "";
      {
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var p;
      oe = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = re.current, re.current = null, _t();
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
            } catch (L) {
              p = L;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (L) {
              p = L;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            p = L;
          }
          e();
        }
      } catch (L) {
        if (L && p && typeof L.stack == "string") {
          for (var m = L.stack.split(`
`), $ = p.stack.split(`
`), T = m.length - 1, C = $.length - 1; T >= 1 && C >= 0 && m[T] !== $[C]; )
            C--;
          for (; T >= 1 && C >= 0; T--, C--)
            if (m[T] !== $[C]) {
              if (T !== 1 || C !== 1)
                do
                  if (T--, C--, C < 0 || m[T] !== $[C]) {
                    var A = `
` + m[T].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, A), A;
                  }
                while (T >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = y, pt(), Error.prepareStackTrace = w;
      }
      var k = e ? e.displayName || e.name : "", ke = k ? J(k) : "";
      return typeof e == "function" && K.set(e, ke), ke;
    }
    function ht(e, i, u) {
      return Ce(e, !1);
    }
    function mt(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function X(e, i, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, mt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case v:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ht(e.render);
          case _:
            return X(e.type, i, u);
          case b: {
            var p = e, w = p._payload, y = p._init;
            try {
              return X(y(w), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Oe = {}, Pe = I.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var i = e._owner, u = X(e.type, e._source, i ? i.type : null);
        Pe.setExtraStackFrame(u);
      } else
        Pe.setExtraStackFrame(null);
    }
    function gt(e, i, u, p, w) {
      {
        var y = Function.call.bind(Q);
        for (var g in e)
          if (y(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var $ = Error((p || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = e[g](i, g, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (Z(w), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, g, typeof m), Z(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Z(w), O("Failed %s type: %s", u, m.message), Z(null));
          }
      }
    }
    var wt = Array.isArray;
    function ie(e) {
      return wt(e);
    }
    function bt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
    var z = I.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, De, se;
    se = {};
    function Et(e) {
      if (Q.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Tt(e) {
      if (Q.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jt(e, i) {
      if (typeof e.ref == "string" && z.current && i && z.current.stateNode !== i) {
        var u = q(z.current.type);
        se[u] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(z.current.type), e.ref), se[u] = !0);
      }
    }
    function St(e, i) {
      {
        var u = function() {
          Ae || (Ae = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Rt(e, i) {
      {
        var u = function() {
          De || (De = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Ct = function(e, i, u, p, w, y, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
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
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Ot(e, i, u, p, w) {
      {
        var y, g = {}, m = null, $ = null;
        u !== void 0 && (Ie(u), m = "" + u), Tt(i) && (Ie(i.key), m = "" + i.key), Et(i) && ($ = i.ref, jt(i, w));
        for (y in i)
          Q.call(i, y) && !xt.hasOwnProperty(y) && (g[y] = i[y]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (y in T)
            g[y] === void 0 && (g[y] = T[y]);
        }
        if (m || $) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && St(g, C), $ && Rt(g, C);
        }
        return Ct(e, m, $, w, p, z.current, g);
      }
    }
    var ae = I.ReactCurrentOwner, Fe = I.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var i = e._owner, u = X(e.type, e._source, i ? i.type : null);
        Fe.setExtraStackFrame(u);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function qe() {
      {
        if (ae.current) {
          var e = q(ae.current.type);
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
          var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Le = {};
    function $t(e) {
      {
        var i = qe();
        if (!i) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Ne(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = $t(i);
        if (Le[u])
          return;
        Le[u] = !0;
        var p = "";
        e && e._owner && e._owner !== ae.current && (p = " It was passed a child from " + q(e._owner.type) + "."), W(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), W(null);
      }
    }
    function Me(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var u = 0; u < e.length; u++) {
            var p = e[u];
            ue(p) && Ne(p, i);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = F(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), g; !(g = y.next()).done; )
              ue(g.value) && Ne(g.value, i);
        }
      }
    }
    function It(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === _))
          u = i.propTypes;
        else
          return;
        if (u) {
          var p = q(i);
          gt(u, e.props, "prop", p, e);
        } else if (i.PropTypes !== void 0 && !ce) {
          ce = !0;
          var w = q(i);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
          var p = i[u];
          if (p !== "children" && p !== "key") {
            W(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function We(e, i, u, p, w, y) {
      {
        var g = dt(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Pt(w);
          $ ? m += $ : m += qe();
          var T;
          e === null ? T = "null" : ie(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (q(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var C = Ot(e, i, u, w, y);
        if (C == null)
          return C;
        if (g) {
          var A = i.children;
          if (A !== void 0)
            if (p)
              if (ie(A)) {
                for (var k = 0; k < A.length; k++)
                  Me(A[k], e);
                Object.freeze && Object.freeze(A);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(A, e);
        }
        return e === r ? At(C) : It(C), C;
      }
    }
    function Dt(e, i, u) {
      return We(e, i, u, !0);
    }
    function Ft(e, i, u) {
      return We(e, i, u, !1);
    }
    var qt = Ft, Lt = Dt;
    H.Fragment = r, H.jsx = qt, H.jsxs = Lt;
  }()), H;
}
process.env.NODE_ENV === "production" ? _e.exports = kt() : _e.exports = Vt();
var f = _e.exports;
const Yt = "_spice_wrapper_1b9je_1", Ut = "_spice_wrapper_hidden_1b9je_10", Ue = {
  spice_wrapper: Yt,
  spice_wrapper_hidden: Ut
}, Ke = V(!0), Xe = V((n) => !n), zt = ({ children: n }) => {
  const [t, o] = N(!0);
  return /* @__PURE__ */ f.jsx(Ke.Provider, { value: t, children: /* @__PURE__ */ f.jsx(Xe.Provider, { value: o, children: n }) });
}, Bt = ({ children: n }) => {
  const t = Y(Ke);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${Ue.spice_wrapper} ${t ? Ue.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, Mr = ({ children: n }) => /* @__PURE__ */ f.jsx(zt, { children: /* @__PURE__ */ f.jsx(Bt, { children: n }) }), Qe = () => Y(Xe), Ht = "_spice_aside_aside_4cj7n_1", Gt = "_spice_aside_main_4cj7n_5", le = {
  spice_aside_aside: Ht,
  spice_aside_main: Gt
}, Wr = ({
  className: n,
  children: t,
  aside: o,
  isSticky: r = !1
}) => {
  const s = Qe();
  return P(() => (r && s(() => !1), () => {
    s(() => !0);
  }), [r, s]), /* @__PURE__ */ f.jsxs("div", { className: n || "", children: [
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
}, Jt = "_spice_form_input_yxowj_1", Kt = "_spice_form_select_yxowj_2", Xt = "_spice_form_radioCheckInput_yxowj_8", pe = {
  spice_form_input: Jt,
  spice_form_select: Kt,
  spice_form_radioCheckInput: Xt
}, ze = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ f.jsx(
  "input",
  {
    ...n,
    className: `${pe.spice_form_input} ${t || ""}`
  }
), Qt = ({ formProps: n }) => {
  const { isSelect: t, ...o } = n;
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
      ...o,
      className: pe.spice_form_select,
      defaultValue: s(),
      children: [
        /* @__PURE__ */ f.jsx(r, {}),
        t.options.map((a) => /* @__PURE__ */ f.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, Be = ({
  layoutType: n,
  formPropsArr: t,
  label: o,
  FormItem: r,
  errors: s
}) => {
  const a = x(
    (l) => !s || !s[l] ? null : s[l],
    [s]
  );
  if (n === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
      /* @__PURE__ */ f.jsx(r, { formProps: t[0] }),
      a(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: o }),
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
  if (n === "radio-check") {
    const l = t.map((c) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        r,
        {
          formProps: c,
          className: pe.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: c.id, children: c.value })
    ] }, c.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      o && /* @__PURE__ */ f.jsx("label", { children: o }),
      /* @__PURE__ */ f.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Zt = ({ formProps: n }) => {
  const { isTextarea: t, ...o } = n;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...o, ...t });
}, kr = ({
  className: n,
  label: t,
  formProps: o,
  errors: r
}) => {
  const s = o, a = s[0].type, l = s.length, c = !!s[0].isSelect, d = !!s[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = x(
    (_) => Be({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: s,
      label: t,
      FormItem: _,
      errors: r
    }),
    [r, s, t, l]
  ), h = x(() => c ? v(Qt) : d ? v(Zt) : a === "radio" || a === "checkbox" ? Be({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: ze,
    errors: r
  }) : v(ze), [r, s, t, c, d, v, a]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ f.jsx(h, {}) });
}, ve = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), er = "_spice_dropdown_wrapper_1nq94_1", tr = "_spice_dropdown_content_1nq94_5", rr = "_spice_dropdown_content_hidden_1nq94_10", nr = "_spice_dropdown_content_pointerPrevent_1nq94_15", G = {
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
  className: s
}) => {
  const a = j(null), l = j(!1), [c, d] = N(!1), [v, h] = N(!0), _ = x(() => {
    l.current = !0, h(!1), d(!0), r != null && r.onEnter && r.onEnter(a.current);
  }, [r]), b = x(async () => {
    l.current = !1, h(!0), r != null && r.onLeave && await ve(r.onLeave(a.current)), l.current || d(!1);
  }, [r]);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      onMouseEnter: _,
      onMouseLeave: b,
      onClick: b,
      className: `${G.spice_dropdown_wrapper} ${s || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ f.jsx(
          "div",
          {
            ref: a,
            className: `${G.spice_dropdown_content} ${c ? "" : G.spice_dropdown_content_hidden} ${v ? G.spice_dropdown_content_pointerPrevent : ""} ${G["spice_dropdown_" + n]}`,
            children: o.children
          }
        )
      ]
    }
  );
}, or = (n = 60, t = []) => {
  n > 60 && (n = 60);
  const o = Math.floor(1e3 / n), r = j(performance.now()), s = x(
    (c) => {
      const d = c - r.current, v = d <= o;
      return v || (r.current = c - d % o), v;
    },
    [o]
  ), a = j({
    callback: null,
    isPlay: !1,
    id: 0
  }).current, l = x(
    (c) => {
      a.id = requestAnimationFrame(l), !s(c) && a.callback && a.isPlay && a.callback(c);
    },
    [s, a]
  );
  return P(() => (a.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(a.id);
  }), t), (c, d) => {
    if (c === "play") {
      if (!d) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      a.callback = d, a.isPlay = !0;
    } else
      c === "pause" && (a.isPlay = !1);
  };
}, ir = "_spice_magnet_stopPropagation_99wvn_1", sr = {
  spice_magnet_stopPropagation: ir
}, Yr = ({
  className: n,
  children: t,
  callback: o,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: a = !1,
  dependencies: l = []
}) => {
  const c = j(null), d = j(null), v = j();
  r > 60 && (r = 60);
  const h = or(r, l), _ = ee(
    () => ({
      target: c.current,
      children: d.current,
      x: 0,
      y: 0
    }),
    []
  ), b = x(
    (E) => {
      _.target = c.current, _.children = d.current;
    },
    [_]
  ), S = x(
    (E) => {
      v.current = E.currentTarget.getBoundingClientRect(), _.x = E.clientX - v.current.left - v.current.width / 2, _.y = E.clientY - v.current.top - v.current.height / 2;
    },
    [_]
  ), R = x(
    (E) => {
      E.stopPropagation(), b(E), S(E), h("play", () => {
        o.onMove(_);
      });
    },
    [b, S, h, o, _]
  ), D = x(
    (E) => {
      E.stopPropagation(), S(E);
    },
    [S]
  ), F = x(
    (E) => {
      E.stopPropagation(), h("pause"), o.onLeave && o.onLeave(_);
    },
    [h, o, _]
  ), I = x(
    (E) => {
      F(E);
    },
    [F]
  ), O = x(
    (E) => {
      a && F(E);
    },
    [F, a]
  );
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: R,
      onMouseMove: D,
      onMouseLeave: I,
      onClick: O,
      className: n || "",
      ref: c,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: d,
          className: s ? sr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, ar = "_spice_thumbnail_wrapper_1qqot_1", cr = "_spice_thumbnail_view_1qqot_5", ur = "_spice_thumbnail_golden_1qqot_26", lr = "_spice_thumbnail_silver_1qqot_30", dr = "_spice_thumbnail_platinum_1qqot_34", fr = "_spice_thumbnail_square_1qqot_42", de = {
  spice_thumbnail_wrapper: ar,
  spice_thumbnail_view: cr,
  spice_thumbnail_golden: ur,
  spice_thumbnail_silver: lr,
  spice_thumbnail_platinum: dr,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: fr,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, Ur = ({ ratio: n, children: t, className: o }) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let s = r.includes(n), a = typeof n == "number" && n > 0;
  if (!s && !a)
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
          className: `${de.spice_thumbnail_view} ${s ? de["spice_thumbnail_" + n] : ""}`,
          style: a ? { paddingTop: `${n}%` } : {},
          children: t
        }
      )
    }
  );
}, He = (n) => {
  const t = document.documentElement.style, o = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", o.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", o.overflow = "");
}, _r = "_spice_modal_dialog_1t31c_1", pr = {
  spice_modal_dialog: _r
}, vr = ".spice__modal_close", zr = ({
  children: n,
  className: t,
  dialog: o,
  callback: r
}) => {
  const s = j(null), a = x(() => {
    He("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, [r]), l = x(async () => {
    r != null && r.onClose && await ve(r.onClose(s.current)), He("remove"), s.current.close();
  }, [r]);
  return P(() => {
    const c = s.current.querySelectorAll(vr);
    if (c)
      return c.forEach(
        (d) => d.addEventListener("click", l)
      ), () => {
        c.forEach(
          (d) => d.removeEventListener("click", l)
        );
      };
  }, [l]), P(() => {
    const c = (d) => {
      var h;
      ((h = s.current) == null ? void 0 : h.hasAttribute("open")) && d.key === "Escape" && l();
    };
    return document.addEventListener("keydown", c), () => {
      document.removeEventListener("keydown", c);
    };
  }, [l]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          a();
        },
        children: n
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: s,
        onClick: (c) => {
          c.target === s.current && l();
        },
        className: `${pr.spice_modal_dialog} ${o.className ? o.className : ""}`,
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
}, Ze = V(hr), et = V(
  () => {
  }
), mr = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [o, r] = N({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: o, children: /* @__PURE__ */ f.jsx(et.Provider, { value: r, children: n }) });
}, tt = () => Y(Ze), he = () => Y(et), gr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = he(), s = tt(), a = x(() => {
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
      className: o || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
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
  o.forEach((s) => {
    s.setAttribute("tabindex", r);
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
  const s = j(!0), a = j(null), l = he(), c = tt(), d = c.current === t && !c.isLeaving;
  return P(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!c.isAnimation) {
      d && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    c.prev === t && (async () => (r != null && r.onClose && await ve(r.onClose(a.current)), l((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), d && r != null && r.onOpen && r.onOpen(a.current);
  }, [c, l, r, t, d]), P(() => {
    rt({
      content: a.current,
      isOpen: c.current === t
    });
  }, [c, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      className: `${c.current !== t ? br.spice_tab_hidden : ""} ${o || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": c.current !== t,
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
}, nt = V(Er), ot = V(() => {
}), Tr = ({ children: n, defaultValue: t }) => {
  const [o, r] = N({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(nt.Provider, { value: o, children: /* @__PURE__ */ f.jsx(ot.Provider, { value: r, children: n }) });
}, it = () => Y(nt), jr = () => Y(ot), Sr = ({ children: n, value: t, className: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = it(), s = jr(), a = ee(
    () => !!r.defaultValue.find((d) => d === t),
    [r, t]
  ), [l, c] = N(a);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: o || "",
      onClick: () => {
        s((d) => ({
          ...d,
          toggle: l,
          target: t
        })), c(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: n
    }
  );
}, Rr = ({
  targetRef: n,
  callback: t,
  debounce: o = 100,
  dependencies: r = []
}) => {
  const s = j(0), a = j(!0);
  P(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(d[0].target);
      }, o);
    }), c = n.current;
    if (c)
      return l.observe(c), () => {
        l.unobserve(c), clearTimeout(s.current);
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
  const s = it(), a = ee(
    () => !!s.defaultValue.find((_) => _ === n),
    [s, n]
  ), [l, c] = N(a);
  P(() => {
    s.target === n && c(!l);
  }, [s.target, s.toggle]);
  const d = j(!0), v = j(null), h = j(null);
  return P(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const _ = {
      height: h.current.getBoundingClientRect().height,
      target: v.current
    };
    l ? t.onOpen(_) : t.onClose(_);
  }, [l, t]), P(() => {
    rt({ content: v.current, isOpen: l });
  }, [l]), Rr({
    targetRef: h,
    callback: (_) => {
      const b = _.getBoundingClientRect().height;
      l && (v.current.style.height = `${b}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: v,
      className: `${Ge.spice_accordion_content} ${a ? "" : Ge.spice_accordion_hidden}`,
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, className: r || "", children: o })
    }
  );
}, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Sr,
  Content: Pr,
  Context: Tr
}, Symbol.toStringTag, { value: "Module" })), $r = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: o,
  hundredsRef: r,
  onProgress: s,
  onStart: a,
  onComplete: l
}) => {
  const c = ee(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = j(null), v = x(
    ({
      digitContainer: _,
      numbersTarget: b,
      digit: S,
      digitNumber: R,
      currentPercent: D,
      limit: F,
      destination: I
    }) => {
      if (c[S] !== R && D <= F) {
        const O = R.toString(), E = (Math.min(8, R) + 1).toString(), te = D >= F;
        b[0].innerText = O, b[1].innerText = te ? "0" : E, s && s({
          digitContainer: _,
          percent: D,
          digit: S,
          destination: I,
          duration: n / (I / S)
        }), c[S] = R;
      }
    },
    [c, s, n]
  );
  return x(
    (_) => (_ > 100 && (_ = 100), new Promise((b) => {
      const S = {
        ones: t.current.querySelectorAll("div"),
        tens: o.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(() => {
        const R = c.to += 1;
        R >= _ && (clearInterval(d.current), b(R)), R === 1 ? a && a(S.getAll()) : R === 100 && l && l(S.getAll());
        const D = Math.floor(R / 100) % 100, F = Math.floor(R / 10) % 10, I = R % 10;
        v({
          digitContainer: t.current,
          digit: 1,
          digitNumber: I,
          currentPercent: R,
          numbersTarget: S.ones,
          limit: 90,
          destination: _
        }), v({
          digitContainer: o.current,
          digit: 10,
          digitNumber: F,
          currentPercent: R,
          numbersTarget: S.tens,
          limit: 90,
          destination: _
        }), c[100] !== D && (S.hundreds[1].innerText = D.toString(), s && s({
          digitContainer: r.current,
          percent: R,
          digit: 100,
          destination: _,
          duration: n / (_ / 10)
        }), c[100] = D);
      }, Math.max(1e3 / 60, n / _ * 1e3));
    })),
    [
      c,
      v,
      o,
      r,
      t,
      l,
      s,
      a,
      n
    ]
  );
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
}, Symbol.toStringTag, { value: "Module" })), Kr = typeof document < "u" ? Mt : P, Xr = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: o = 0,
  once: r = !1,
  callback: s,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: o
  };
  P(() => {
    const c = n == null ? void 0 : n.current;
    if (!c)
      return;
    const d = (h, _) => {
      h.forEach((b) => {
        b.isIntersecting && s.onEnter ? (s.onEnter(b), r && _.unobserve(b.target)) : !b.isIntersecting && s.onLeave && s.onLeave(b);
      });
    }, v = new IntersectionObserver(d, l);
    return v.observe(c), () => {
      v.unobserve(c);
    };
  }, a);
}, me = ({
  callback: n,
  debounce: t = 100,
  dependencies: o = []
}) => {
  const r = j(0), s = j(0), a = x(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [n, t]);
  P(() => (r.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
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

`, qr = () => {
  console.log(Fr);
}, Lr = (n) => {
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
    (s) => {
      t && Lr(s);
    },
    [t]
  );
  me({
    callback: ({ initWinW: s, winW: a }) => {
      n && n.forEach(
        (l) => Dr({
          initWinW: s,
          winW: a,
          threshold: l
        })
      ), r(a);
    },
    debounce: 100,
    dependencies: []
  }), P(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), o && process.env.NODE_ENV !== "development" && qr();
  }, [o, r]);
}, Zr = () => {
  const [n, t] = N(null), o = x(() => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
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
  const r = j(null), [s, a] = Wt(
    (h, _) => {
      switch (_.type) {
        case fe:
          return r.current = _.payload, _.payload;
        default:
          return h;
      }
    },
    r.current
  ), l = j(0), c = j(0), d = () => window.scrollY || document.documentElement.scrollTop, v = x(() => {
    clearTimeout(c.current), c.current = setTimeout(() => {
      const h = d();
      h > l.current + n && r.current !== "down" ? a({ type: fe, payload: "down" }) : h < l.current - n && r.current !== "up" && a({ type: fe, payload: "up" }), l.current = h;
    }, t);
  }, [t, n]);
  return P(() => (l.current = d(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(c.current);
  }), o), s;
}, tn = ({ type: n, width: t }) => {
  const [o, r] = N(null), s = x(
    (a) => {
      switch (n) {
        case "max":
          r(t >= a);
          break;
        case "min":
          r(t <= a);
          break;
      }
    },
    [n, t]
  );
  return me({
    callback: ({ winW: a }) => s(a),
    debounce: 100,
    dependencies: []
  }), P(() => s(window.innerWidth), [s]), o;
};
export {
  Gr as Accordion,
  Wr as AsideLayout,
  Vr as Dropdown,
  kr as FormField,
  Jr as LoadingProgress,
  Yr as Magnet,
  zr as Modal,
  Br as StickyItem,
  Hr as Tab,
  Ur as Thumbnail,
  Mr as WrapperLayout,
  or as useAnimationFrame,
  Xr as useIntersectionObserver,
  Zr as useIsTouchDevice,
  Kr as useIsomorphicLayoutEffect,
  tn as useMediaQuery,
  Rr as useResizeObserver,
  en as useScrollDirection,
  Qr as useStarter,
  me as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
