"use client";
import qe, { createContext as V, useContext as z, useState as I, forwardRef as X, useRef as R, useCallback as k, useEffect as T, useMemo as $, memo as Ft, useLayoutEffect as Lt, useReducer as Wt } from "react";
import de from "gsap";
var ve = { exports: {} }, q = {};
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
function Mt() {
  if (Be)
    return q;
  Be = 1;
  var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, v, m) {
    var h, d = {}, p = null, E = null;
    m !== void 0 && (p = "" + m), v.key !== void 0 && (p = "" + v.key), v.ref !== void 0 && (E = v.ref);
    for (h in v)
      i.call(v, h) && !a.hasOwnProperty(h) && (d[h] = v[h]);
    if (f && f.defaultProps)
      for (h in v = f.defaultProps, v)
        d[h] === void 0 && (d[h] = v[h]);
    return { $$typeof: t, type: f, key: p, ref: E, props: d, _owner: o.current };
  }
  return q.Fragment = n, q.jsx = l, q.jsxs = l, q;
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
function Nt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x = Symbol.iterator, P = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[P];
      return typeof s == "function" ? s : null;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          u[g - 1] = arguments[g];
        te("error", e, u);
      }
    }
    function te(e, s, u) {
      {
        var g = D.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (s += "%s", u = u.concat([w]));
        var S = u.map(function(y) {
          return String(y);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, ot = !1, st = !1, at = !1, ct = !1, me;
    me = Symbol.for("react.module.reference");
    function ut(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === a || ct || e === o || e === m || e === h || at || e === E || re || ot || st || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === d || e.$$typeof === l || e.$$typeof === f || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function lt(e, s, u) {
      var g = e.displayName;
      if (g)
        return g;
      var w = s.displayName || s.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function be(e) {
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
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var s = e;
            return be(s) + ".Consumer";
          case l:
            var u = e;
            return be(u._context) + ".Provider";
          case v:
            return lt(e, e.render, "ForwardRef");
          case d:
            var g = e.displayName || null;
            return g !== null ? g : F(e.type) || "Memo";
          case p: {
            var w = e, S = w._payload, y = w._init;
            try {
              return F(y(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, H = 0, ye, xe, we, Ee, Se, Re, _e;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function ft() {
      {
        if (H === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, Re = console.groupCollapsed, _e = console.groupEnd;
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
        H++;
      }
    }
    function dt() {
      {
        if (H--, H === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: ye
            }),
            info: N({}, e, {
              value: xe
            }),
            warn: N({}, e, {
              value: we
            }),
            error: N({}, e, {
              value: Ee
            }),
            group: N({}, e, {
              value: Se
            }),
            groupCollapsed: N({}, e, {
              value: Re
            }),
            groupEnd: N({}, e, {
              value: _e
            })
          });
        }
        H < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = D.ReactCurrentDispatcher, ie;
    function J(e, s, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ie = g && g[1] || "";
          }
        return `
` + ie + e;
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
      var g;
      oe = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, ft();
      try {
        if (s) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (L) {
              g = L;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (L) {
              g = L;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            g = L;
          }
          e();
        }
      } catch (L) {
        if (L && g && typeof L.stack == "string") {
          for (var b = L.stack.split(`
`), O = g.stack.split(`
`), _ = b.length - 1, j = O.length - 1; _ >= 1 && j >= 0 && b[_] !== O[j]; )
            j--;
          for (; _ >= 1 && j >= 0; _--, j--)
            if (b[_] !== O[j]) {
              if (_ !== 1 || j !== 1)
                do
                  if (_--, j--, j < 0 || b[_] !== O[j]) {
                    var A = `
` + b[_].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, A), A;
                  }
                while (_ >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = S, dt(), Error.prepareStackTrace = w;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function ht(e, s, u) {
      return Ce(e, !1);
    }
    function pt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, pt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case m:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return ht(e.render);
          case d:
            return Z(e.type, s, u);
          case p: {
            var g = e, w = g._payload, S = g._init;
            try {
              return Z(S(w), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Te = {}, Oe = D.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(u);
      } else
        Oe.setExtraStackFrame(null);
    }
    function gt(e, s, u, g, w) {
      {
        var S = Function.call.bind(Q);
        for (var y in e)
          if (S(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var O = Error((g || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[y](s, y, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              b = _;
            }
            b && !(b instanceof Error) && (ee(w), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, y, typeof b), ee(null)), b instanceof Error && !(b.message in Te) && (Te[b.message] = !0, ee(w), C("Failed %s type: %s", u, b.message), ee(null));
          }
      }
    }
    var mt = Array.isArray;
    function se(e) {
      return mt(e);
    }
    function bt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function yt(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function ke(e) {
      if (yt(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), Pe(e);
    }
    var U = D.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Ie, ae;
    ae = {};
    function wt(e) {
      if (Q.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (Q.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function St(e, s) {
      if (typeof e.ref == "string" && U.current && s && U.current.stateNode !== s) {
        var u = F(U.current.type);
        ae[u] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(U.current.type), e.ref), ae[u] = !0);
      }
    }
    function Rt(e, s) {
      {
        var u = function() {
          Ae || (Ae = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function _t(e, s) {
      {
        var u = function() {
          Ie || (Ie = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var jt = function(e, s, u, g, w, S, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: u,
        props: y,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Ct(e, s, u, g, w) {
      {
        var S, y = {}, b = null, O = null;
        u !== void 0 && (ke(u), b = "" + u), Et(s) && (ke(s.key), b = "" + s.key), wt(s) && (O = s.ref, St(s, w));
        for (S in s)
          Q.call(s, S) && !xt.hasOwnProperty(S) && (y[S] = s[S]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (S in _)
            y[S] === void 0 && (y[S] = _[S]);
        }
        if (b || O) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Rt(y, j), O && _t(y, j);
        }
        return jt(e, b, O, w, g, U.current, y);
      }
    }
    var ce = D.ReactCurrentOwner, De = D.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        De.setExtraStackFrame(u);
      } else
        De.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (ce.current) {
          var e = F(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Tt(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function Ot(e) {
      {
        var s = $e();
        if (!s) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Le(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Ot(s);
        if (Fe[u])
          return;
        Fe[u] = !0;
        var g = "";
        e && e._owner && e._owner !== ce.current && (g = " It was passed a child from " + F(e._owner.type) + "."), B(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var u = 0; u < e.length; u++) {
            var g = e[u];
            le(g) && Le(g, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = W(e);
          if (typeof w == "function" && w !== e.entries)
            for (var S = w.call(e), y; !(y = S.next()).done; )
              le(y.value) && Le(y.value, s);
        }
      }
    }
    function Pt(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === d))
          u = s.propTypes;
        else
          return;
        if (u) {
          var g = F(s);
          gt(u, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = F(s);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var g = s[u];
          if (g !== "children" && g !== "key") {
            B(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, u, g, w, S) {
      {
        var y = ut(e);
        if (!y) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Tt(w);
          O ? b += O : b += $e();
          var _;
          e === null ? _ = "null" : se(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (F(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, b);
        }
        var j = Ct(e, s, u, w, S);
        if (j == null)
          return j;
        if (y) {
          var A = s.children;
          if (A !== void 0)
            if (g)
              if (se(A)) {
                for (var Y = 0; Y < A.length; Y++)
                  We(A[Y], e);
                Object.freeze && Object.freeze(A);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(A, e);
        }
        return e === i ? kt(j) : Pt(j), j;
      }
    }
    function At(e, s, u) {
      return Me(e, s, u, !0);
    }
    function It(e, s, u) {
      return Me(e, s, u, !1);
    }
    var Dt = It, $t = At;
    G.Fragment = i, G.jsx = Dt, G.jsxs = $t;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Mt() : ve.exports = Nt();
var c = ve.exports;
const Ge = V(!0), Xe = V((r) => !r), Bt = ({ children: r }) => {
  const [t, n] = I(!0);
  return /* @__PURE__ */ c.jsx(Ge.Provider, { value: t, children: /* @__PURE__ */ c.jsx(Xe.Provider, { value: n, children: r }) });
}, Yt = ({ children: r }) => {
  const t = z(Ge);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      style: {
        flexDirection: "column",
        display: "flex",
        minHeight: "100vh",
        ...t && {
          overflow: "hidden"
        }
      },
      children: r
    }
  );
}, Sr = ({ children: r }) => /* @__PURE__ */ c.jsx(Bt, { children: /* @__PURE__ */ c.jsx(Yt, { children: r }) }), Vt = () => z(Xe), zt = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, Ht = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const o = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ c.jsx("option", { hidden: !0, children: l }) : null;
  }, a = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ c.jsxs(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: a(),
      children: [
        /* @__PURE__ */ c.jsx(o, {}),
        t.options.map((l) => /* @__PURE__ */ c.jsx("option", { value: l, children: l }, l))
      ]
    }
  );
}, Ut = {
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  border: "0",
  padding: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  zIndex: "-99999"
}, qt = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: i,
  errors: o
}) => {
  const a = ({ index: l }) => o ? Array.isArray(o) ? o[l] : o : null;
  if (r === "block")
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ c.jsx(i, { formProps: t[0] }),
      /* @__PURE__ */ c.jsx(a, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ c.jsxs("ul", { children: [
        /* @__PURE__ */ c.jsxs("li", { children: [
          /* @__PURE__ */ c.jsx(i, { formProps: t[0] }),
          /* @__PURE__ */ c.jsx(a, { index: 0 })
        ] }),
        /* @__PURE__ */ c.jsxs("li", { children: [
          /* @__PURE__ */ c.jsx(i, { formProps: t[1] }),
          /* @__PURE__ */ c.jsx(a, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map(
      ({ id: f, value: v, style: m, optionLabel: h, ...d }) => /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx(
          i,
          {
            formProps: {
              id: f,
              value: v,
              style: {
                ...Ut,
                ...m || {}
              },
              ...d
            }
          }
        ),
        /* @__PURE__ */ c.jsx("label", { htmlFor: f, children: h || v })
      ] }, f)
    );
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { children: n }),
      /* @__PURE__ */ c.jsx("ul", { children: l }),
      /* @__PURE__ */ c.jsx(a, { index: 0 })
    ] });
  }
}, Gt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ c.jsx("textarea", { ...n, ...t });
}, Rr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const o = Array.isArray(t) ? t : [t], { type: a, isSelect: l, isTextarea: f } = o[0], v = o.length;
  if (!(a === "radio" || a === "checkbox") && v > 2)
    throw new Error("The length of formProps is up to 2.");
  const m = ["radio", "checkbox"].includes(a || "") ? "radio-check" : v === 1 ? "block" : "flex";
  return /* @__PURE__ */ c.jsx("fieldset", { ...i, children: /* @__PURE__ */ c.jsx(
    qt,
    {
      layoutType: m,
      formPropsArr: o,
      label: r,
      errors: n,
      FormItem: l ? Ht : f ? Gt : zt
    }
  ) });
}, he = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Xt = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, Ve = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, ze = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, Jt = () => window.innerWidth - document.documentElement.clientWidth, He = (r, { paddingRight: t, scrollbarWidth: n }) => {
  const i = document.documentElement.style, o = document.body.style, a = r ? t + n : t - n;
  i.paddingRight = `${a}px`, i.scrollbarGutter = r ? "auto" : "", o.overflow = r ? "hidden" : "";
}, Kt = X(
  ({ dialog: r, onOpen: t, onClose: n, focusTarget: i, scrollLock: o = !0, ...a }, l) => {
    const f = R(null), v = R({
      paddingRight: 0,
      scrollbarWidth: 0
    }), m = k(() => {
      var d, p, E;
      o && (v.current.paddingRight = ze(), v.current.scrollbarWidth = Jt(), He(!0, v.current)), f.current.showModal(), (d = i == null ? void 0 : i.current) == null || d.focus(), (E = (p = f.current) == null ? void 0 : p.getElementsByClassName(Ve.scrollArea)[0]) == null || E.scrollTo(0, 0), t == null || t(f.current);
    }, [t, i, o]), h = k(async () => {
      n && await he(n(f.current)), o && (v.current.paddingRight = ze(), He(!1, v.current)), f.current.close();
    }, [n, o]);
    return T(() => {
      const d = f.current.querySelectorAll(
        `.${Ve.close}`
      );
      if (d)
        return d.forEach(
          (p) => p.addEventListener("click", h)
        ), () => d.forEach(
          (p) => p.removeEventListener("click", h)
        );
    }, [h]), T(() => {
      const d = (p) => {
        var x;
        ((x = f.current) == null ? void 0 : x.hasAttribute("open")) && p.key === "Escape" && h();
      };
      return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
    }, [h]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          ref: l,
          ...a,
          onClick: (d) => {
            var p;
            m(), (p = a == null ? void 0 : a.onClick) == null || p.call(a, d);
          }
        }
      ),
      /* @__PURE__ */ c.jsx(
        "dialog",
        {
          ref: f,
          ...r,
          onClick: (d) => {
            var p;
            d.target === f.current && h(), (p = r.onClick) == null || p.call(r, d);
          },
          style: {
            ...Xt,
            ...r.style || {}
          }
        }
      )
    ] });
  }
);
Kt.displayName = "ModalButton";
const Zt = X(
  ({ children: r, ...t }, n) => {
    const i = Vt();
    return T(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ c.jsx("div", { ref: n, ...t, children: r });
  }
);
Zt.displayName = "StickyItem";
const Qt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Je = V(Qt), Ke = V(
  () => {
  }
), er = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, i] = I({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ c.jsx(Je.Provider, { value: n, children: /* @__PURE__ */ c.jsx(Ke.Provider, { value: i, children: r }) });
}, Ze = () => z(Je), pe = () => z(Ke), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = pe(), o = Ze(), a = k(() => {
    o.current === t || o.isLeaving || i((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [i, o, t]);
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: a,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": o.current === t,
      ...n,
      children: r
    }
  );
}, Qe = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((o) => {
    o.setAttribute("tabindex", i);
  });
}, rr = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: i,
  onReset: o,
  style: a,
  ...l
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const f = R(!0), v = R(null), m = pe(), h = Ze(), d = h.current === t && !h.isLeaving;
  return T(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    if (!h.isAnimation) {
      d && o && o(v.current);
      return;
    }
    h.prev === t && (async () => (i && await he(i(v.current)), m((p) => ({
      ...p,
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), d && n && n(v.current);
  }, [h, m, n, i, o, t, d]), T(() => {
    Qe({
      content: v.current,
      isOpen: h.current === t
    });
  }, [h, t]), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: v,
      style: {
        ...h.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...a
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": h.current !== t,
      ...l,
      children: r
    }
  );
}, nr = () => {
  const r = pe();
  return (t, n) => {
    r((i) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? i.current : "",
      current: n ? i.current : t,
      next: n ? t : ""
    }));
  };
}, _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tr,
  Content: rr,
  Context: er,
  useTabSwitch: nr
}, Symbol.toStringTag, { value: "Module" })), ir = {
  target: "",
  toggle: !1,
  defaultValue: []
}, et = V(ir), tt = V(() => {
}), or = ({ children: r, defaultValue: t }) => {
  const [n, i] = I({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ c.jsx(et.Provider, { value: n, children: /* @__PURE__ */ c.jsx(tt.Provider, { value: i, children: r }) });
}, rt = () => z(et), sr = () => z(tt), ar = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = rt(), o = sr(), [a, l] = I(
    () => !!i.defaultValue.find((f) => f === t)
  );
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => {
        o((f) => ({
          ...f,
          toggle: a,
          target: t
        })), l(!a);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": a,
      ...n,
      children: r
    }
  );
}, cr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = R(0), a = R(!0);
  T(() => {
    const l = new ResizeObserver((v) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(v[0].target);
      }, n);
    }), f = r.current;
    if (f)
      return l.observe(f), () => {
        l.unobserve(f), clearTimeout(o.current);
      };
  }, i);
}, ur = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: i,
  ...o
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const a = rt(), [l, f] = I(
    () => !!a.defaultValue.find((p) => p === r)
  ), v = R(l);
  T(() => {
    a.target === r && f(!l);
  }, [a.target, a.toggle]);
  const m = R(!0), h = R(null), d = R(null);
  return T(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    const p = {
      height: d.current.getBoundingClientRect().height,
      target: h.current
    };
    l ? t(p) : n(p);
  }, [l, t, n]), T(() => {
    Qe({ content: h.current, isOpen: l });
  }, [l]), cr({
    targetRef: d,
    onResize: (p) => {
      const E = p.getBoundingClientRect().height;
      l && (h.current.style.height = `${E}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: h,
      style: {
        overflow: "hidden",
        height: v.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ c.jsx("div", { ref: d, ...o, children: i })
    }
  );
}, jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ar,
  Content: ur,
  Context: or
}, Symbol.toStringTag, { value: "Module" })), lr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: a,
  onComplete: l
}) => {
  const f = $(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), v = R(null), m = k(
    ({
      digitContainer: d,
      numbersTarget: p,
      digit: E,
      digitNumber: x,
      currentPercent: P,
      limit: W,
      destination: D
    }) => {
      if (f[E] !== x && P <= W) {
        const C = x.toString(), te = (Math.min(8, x) + 1).toString(), re = P >= W;
        p[0].innerText = C, p[1].innerText = re ? "0" : te, o && o({
          digitContainer: d,
          percent: P,
          digit: E,
          destination: D,
          duration: r / (D / E)
        }), f[E] = x;
      }
    },
    [f, o, r]
  ), h = k(
    (d) => (d > 100 && (d = 100), new Promise((p) => {
      if (d === 0)
        return;
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(v.current), v.current = setInterval(async () => {
        const x = f.to += 1, P = async () => {
          clearInterval(v.current), x > 100 && l && await he(l(E.getAll())), p(x - 1);
        };
        x === 1 && a && a(E.getAll()), x > d && await P();
        const W = Math.floor(x / 100) % 100, D = Math.floor(x / 10) % 10, C = x % 10;
        m({
          digitContainer: t.current,
          digit: 1,
          digitNumber: C,
          currentPercent: x,
          numbersTarget: E.ones,
          limit: 90,
          destination: d
        }), m({
          digitContainer: n.current,
          digit: 10,
          digitNumber: D,
          currentPercent: x,
          numbersTarget: E.tens,
          limit: 90,
          destination: d
        }), f[100] !== W && (E.hundreds[1].innerText = W.toString(), o && o({
          digitContainer: i.current,
          percent: x,
          digit: 100,
          destination: d,
          duration: r / (d / 10)
        }), f[100] = W);
      }, Math.max(1e3 / 60, r / d * 1e3));
    })),
    [
      f,
      m,
      n,
      i,
      t,
      l,
      o,
      a,
      r
    ]
  );
  return T(() => () => {
    clearInterval(v.current);
  }, []), h;
}, nt = Ft(
  X((r, t) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      style: {
        width: "1ch",
        lineHeight: 1,
        float: "left",
        textAlign: "center"
      },
      ref: t,
      children: [
        /* @__PURE__ */ c.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ c.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
nt.displayName = "Digit";
const Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: nt,
  useLoadingProgress: lr
}, Symbol.toStringTag, { value: "Module" })), fr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: a,
  dependencies: l = []
} = {}) => {
  const f = R(null), [v, m] = I(!1);
  return T(() => {
    const h = (r == null ? void 0 : r.current) ?? f.current;
    if (!h)
      return;
    const d = (E, x) => {
      E.forEach((P) => {
        m(P.isIntersecting), P.isIntersecting ? (o && o(P), i && x.unobserve(P.target)) : P.isIntersecting || a && a(P);
      });
    }, p = new IntersectionObserver(d, {
      rootMargin: t,
      threshold: n
    });
    return p.observe(h), () => {
      p.unobserve(h);
    };
  }, [
    f,
    o,
    a,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: f, isIntersecting: v };
}, it = (r, t, n) => {
  T(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Tr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = R(null), a = R(null), l = R(null), { isIntersecting: f } = fr({
    targetRef: o,
    once: !1
  }), v = R(0);
  return it(() => {
    if (!f)
      return;
    const m = o.current, h = a.current, d = l.current;
    if (!m || !h || !d)
      return;
    const p = de.ticker.deltaRatio() / 1e3, E = m.clientWidth / h.clientWidth;
    if (v.current += p * Math.abs(t) * E, v.current >= 1 && (v.current = 0), t < 0) {
      const x = v.current * -100;
      h.style.transform = `translateX(${x}%)`, d.style.transform = `translateX(${x}%)`;
    } else {
      const x = v.current * 100;
      h.style.transform = `translateX(${x}%)`, d.style.transform = `translateX(${x - 200}%)`;
    }
  }), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...i,
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ c.jsx("div", { ref: a, children: r }),
            /* @__PURE__ */ c.jsx("div", { ref: l, children: r })
          ]
        }
      )
    }
  );
}, M = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (r) => r === `
` || r === "###br###",
  isSpecificBreak: (r) => r.match(/###br\.(.*?)###/),
  getClassName: (r) => {
    var t;
    return ((t = r.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, dr = (r) => $(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ c.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ c.jsx(
    "br",
    {
      className: M.getClassName(t)
    },
    n
  ) : t),
  [r]
), Or = ({
  text: r
}) => {
  const t = dr(r);
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}, Ue = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ c.jsx("span", { ...r, children: /* @__PURE__ */ c.jsx("span", { ...t }) }) : /* @__PURE__ */ c.jsx("span", { ...t }), Pr = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...o
}) => {
  const a = r === "chars" ? "" : " ";
  return $(
    () => t.split(M.regex).flatMap((f, v) => M.isRegularBreak(f) ? [null, /* @__PURE__ */ c.jsx("br", {}, v)] : M.isSpecificBreak(f) ? [
      null,
      /* @__PURE__ */ c.jsx(
        "br",
        {
          className: M.getClassName(f)
        },
        v
      )
    ] : [
      ...f.split(a).map((m, h) => {
        if (n) {
          const d = n.find(
            (p) => p.selector === m
          );
          if (d)
            return /* @__PURE__ */ c.jsx(
              Ue,
              {
                containerProps: i,
                ...o,
                ...d.attributes,
                children: m
              },
              `${v}-${h}`
            );
        }
        return /* @__PURE__ */ c.jsx(
          Ue,
          {
            containerProps: i,
            ...o,
            children: m === " " ? " " : m
          },
          `${v}-${h}`
        );
      }),
      null
    ]),
    [a, t, o, n, i]
  );
}, vr = X((r, t) => {
  const { fill: n, style: i, ...o } = r;
  return /* @__PURE__ */ c.jsx(
    "video",
    {
      ref: t,
      style: n ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...i
      } : i,
      ...o
    }
  );
});
vr.displayName = "Video";
const hr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: a,
    style: l,
    ...f
  }, v) => {
    const [m, h] = I(t === 0), d = !!a;
    return T(() => {
      t !== 0 && setTimeout(() => h(!0), t);
    }, [t]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...d ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...l
        },
        ...f,
        children: /* @__PURE__ */ c.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...m ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              r === "skeleton" ? /* @__PURE__ */ c.jsx(
                "div",
                {
                  style: {
                    background: `linear-gradient(90deg,transparent,${(i == null ? void 0 : i.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animationName: "skeleton",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ c.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ c.jsx(
                "div",
                {
                  style: {
                    width: o != null && o.width ? o == null ? void 0 : o.width : "24px",
                    height: o != null && o.height ? o == null ? void 0 : o.height : "24px",
                    border: (o == null ? void 0 : o.border) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (i == null ? void 0 : i.animationDuration) || "1.6s",
                    animationTimingFunction: (i == null ? void 0 : i.animationTimingFunction) || "linear",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    borderRadius: "50%",
                    animationName: "circular",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ c.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              d && /* @__PURE__ */ c.jsx("div", { style: { visibility: "hidden" }, children: a })
            ]
          }
        )
      }
    );
  }
);
hr.displayName = "Loader";
const pr = typeof document < "u" ? Lt : T, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = R(0), o = R(0), a = k(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  T(() => (i.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(o.current);
  }), n);
}, gr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, mr = (r) => {
  let t = gr;
  typeof r == "string" && (t += r), console.log(t);
}, br = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, kr = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = k(
    (i) => {
      r && br(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), T(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && mr(t);
  }, [t, n]);
}, Ar = () => {
  const [r, t] = I(null), n = k(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), T(() => n(), [n]), r;
}, fe = "scroll", Ir = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = R(null), [o, a] = Wt(
    (h, d) => {
      switch (d.type) {
        case fe:
          return i.current = d.payload, d.payload;
        default:
          return h;
      }
    },
    i.current
  ), l = R(0), f = R(0), v = () => window.scrollY || document.documentElement.scrollTop, m = k(() => {
    clearTimeout(f.current), f.current = setTimeout(() => {
      const h = v();
      h > l.current + r && i.current !== "down" ? a({ type: fe, payload: "down" }) : h < l.current - r && i.current !== "up" && a({ type: fe, payload: "up" }), l.current = h;
    }, t);
  }, [t, r]);
  return T(() => (l.current = v(), window.addEventListener("scroll", m, { passive: !0 }), () => {
    window.removeEventListener("scroll", m), clearTimeout(f.current);
  }), n), o;
}, Dr = (r, t) => {
  const [n, i] = I(null), o = k(
    (a) => {
      switch (r) {
        case "max":
          i(t >= a);
          break;
        case "min":
          i(t <= a);
          break;
      }
    },
    [r, t]
  );
  return ge({
    onResize: ({ winW: a }) => o(a),
    debounce: 100,
    dependencies: [o]
  }), T(() => o(window.innerWidth), [o]), n;
}, $r = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const a = $(() => encodeURIComponent(r), [r]), l = $(
    () => `height=${o},width=${i}`,
    [o, i]
  ), f = $(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${a}&t=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [a, n, l]
  ), v = $(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${a}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [a, l, n]
  ), m = $(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${a}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [a, l, n]
  ), h = $(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: n,
            url: t || a
          });
        } catch {
          return;
        }
      }
    }),
    [n, a, t]
  ), [d, p] = I(!1), E = $(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          p(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: f,
    X: v,
    LINE: m,
    share: h,
    copy: E,
    isCopied: d
  };
}, yr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, xr = (r) => {
  if (/Gecko\/\d+/i.test(r) && !/like Gecko/i.test(r))
    return "Gecko";
  if (/AppleWebKit\/\d+/i.test(r) && /like Gecko/i.test(r))
    return "WebKit";
  if (/Opera\/\d+/i.test(r))
    return "Presto";
  if (/Trident\/\d+/i.test(r))
    return "Trident";
  if (/Edge\/\d+/i.test(r))
    return "EdgeHTML";
  if (/Chrome\/\d+/i.test(r))
    return "Blink";
}, Fr = (r) => {
  const [t, n] = I({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return pr(() => {
    const i = navigator.userAgent, o = yr(i), a = xr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: a,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
}, Lr = (r) => {
  const [t, n] = I(!1), i = R();
  it(() => {
    t && i.current && r(i.current);
  });
  const o = k((f) => {
    i.current = f, n(!0);
  }, []), a = k(() => {
    i.current = void 0, n(!1);
  }, []), l = k((f) => {
    i.current = f;
  }, []);
  return {
    onPointerEnter: o,
    onPointerLeave: a,
    onPointerMove: l
  };
};
export {
  jr as Accordion,
  Tr as AutoScrollContainer,
  Or as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Rr as FormField,
  hr as Loader,
  Cr as LoadingProgress,
  Ve as MODAL_CLASSNAME,
  Kt as ModalButton,
  Sr as SpiceWrapper,
  Pr as SplitText,
  Zt as StickyItem,
  _r as Tab,
  vr as Video,
  Fr as useDeviceDetector,
  it as useFrame,
  fr as useIntersectionObserver,
  Ar as useIsTouchDevice,
  pr as useIsomorphicLayoutEffect,
  Dr as useMediaQuery,
  Lr as useOnHovering,
  Vt as useOverflowDispatch,
  dr as useParseBreakLine,
  cr as useResizeObserver,
  Ir as useScrollDirection,
  $r as useShare,
  kr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
