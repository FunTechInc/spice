"use client";
import Ue, { createContext as V, useContext as z, useState as $, useCallback as P, useRef as C, useEffect as T, forwardRef as Z, useMemo as D, memo as $t, useLayoutEffect as Lt, useReducer as At } from "react";
import de from "gsap";
var pe = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Wt() {
  if (Ne)
    return q;
  Ne = 1;
  var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(p, l, v) {
    var h, d = {}, y = null, _ = null;
    v !== void 0 && (y = "" + v), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (_ = l.ref);
    for (h in l)
      o.call(l, h) && !c.hasOwnProperty(h) && (d[h] = l[h]);
    if (p && p.defaultProps)
      for (h in l = p.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: t, type: p, key: y, ref: _, props: d, _owner: i.current };
  }
  return q.Fragment = r, q.jsx = a, q.jsxs = a, q;
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
function kt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E = Symbol.iterator, k = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = E && e[E] || e[k];
      return typeof s == "function" ? s : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          u[g - 1] = arguments[g];
        te("error", e, u);
      }
    }
    function te(e, s, u) {
      {
        var g = F.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (s += "%s", u = u.concat([x]));
        var b = u.map(function(w) {
          return String(w);
        });
        b.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var re = !1, nt = !1, ot = !1, it = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || st || e === i || e === v || e === h || it || e === _ || re || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === a || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ut(e, s, u) {
      var g = e.displayName;
      if (g)
        return g;
      var x = s.displayName || s.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case r:
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
          case p:
            var s = e;
            return me(s) + ".Consumer";
          case a:
            var u = e;
            return me(u._context) + ".Provider";
          case l:
            return ut(e, e.render, "ForwardRef");
          case d:
            var g = e.displayName || null;
            return g !== null ? g : L(e.type) || "Memo";
          case y: {
            var x = e, b = x._payload, w = x._init;
            try {
              return L(w(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, B = 0, ye, we, xe, be, Ee, Se, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ct() {
      {
        if (B === 0) {
          ye = console.log, we = console.info, xe = console.warn, be = console.error, Ee = console.group, Se = console.groupCollapsed, _e = console.groupEnd;
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
    function lt() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ye
            }),
            info: M({}, e, {
              value: we
            }),
            warn: M({}, e, {
              value: xe
            }),
            error: M({}, e, {
              value: be
            }),
            group: M({}, e, {
              value: Ee
            }),
            groupCollapsed: M({}, e, {
              value: Se
            }),
            groupEnd: M({}, e, {
              value: _e
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = F.ReactCurrentDispatcher, oe;
    function X(e, s, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            oe = g && g[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, G;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      G = new ft();
    }
    function je(e, s) {
      if (!e || ie)
        return "";
      {
        var u = G.get(e);
        if (u !== void 0)
          return u;
      }
      var g;
      ie = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ne.current, ne.current = null, ct();
      try {
        if (s) {
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
            } catch (A) {
              g = A;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (A) {
              g = A;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            g = A;
          }
          e();
        }
      } catch (A) {
        if (A && g && typeof A.stack == "string") {
          for (var m = A.stack.split(`
`), O = g.stack.split(`
`), S = m.length - 1, R = O.length - 1; S >= 1 && R >= 0 && m[S] !== O[R]; )
            R--;
          for (; S >= 1 && R >= 0; S--, R--)
            if (m[S] !== O[R]) {
              if (S !== 1 || R !== 1)
                do
                  if (S--, R--, R < 0 || m[S] !== O[R]) {
                    var I = `
` + m[S].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, I), I;
                  }
                while (S >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = b, lt(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? X(Y) : "";
      return typeof e == "function" && G.set(e, Me), Me;
    }
    function dt(e, s, u) {
      return je(e, !1);
    }
    function pt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function J(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, pt(e));
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
          case l:
            return dt(e.render);
          case d:
            return J(e.type, s, u);
          case y: {
            var g = e, x = g._payload, b = g._init;
            try {
              return J(b(x), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ce = {}, Te = F.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var s = e._owner, u = J(e.type, e._source, s ? s.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    function vt(e, s, u, g, x) {
      {
        var b = Function.call.bind(K);
        for (var w in e)
          if (b(e, w)) {
            var m = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((g || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[w](s, w, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (Q(x), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, w, typeof m), Q(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, Q(x), j("Failed %s type: %s", u, m.message), Q(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function mt(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Pe(e) {
      if (mt(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = F.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
    function wt(e) {
      if (K.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (K.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, s) {
      if (typeof e.ref == "string" && U.current && s && U.current.stateNode !== s) {
        var u = L(U.current.type);
        ae[u] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(U.current.type), e.ref), ae[u] = !0);
      }
    }
    function Et(e, s) {
      {
        var u = function() {
          Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function St(e, s) {
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
    var _t = function(e, s, u, g, x, b, w) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: u,
        props: w,
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
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rt(e, s, u, g, x) {
      {
        var b, w = {}, m = null, O = null;
        u !== void 0 && (Pe(u), m = "" + u), xt(s) && (Pe(s.key), m = "" + s.key), wt(s) && (O = s.ref, bt(s, x));
        for (b in s)
          K.call(s, b) && !yt.hasOwnProperty(b) && (w[b] = s[b]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (b in S)
            w[b] === void 0 && (w[b] = S[b]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(w, R), O && St(w, R);
        }
        return _t(e, m, O, x, g, U.current, w);
      }
    }
    var ue = F.ReactCurrentOwner, Fe = F.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var s = e._owner, u = J(e.type, e._source, s ? s.type : null);
        Fe.setExtraStackFrame(u);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (ue.current) {
          var e = L(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function jt(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Le = {};
    function Ct(e) {
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
    function Ae(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Ct(s);
        if (Le[u])
          return;
        Le[u] = !0;
        var g = "";
        e && e._owner && e._owner !== ue.current && (g = " It was passed a child from " + L(e._owner.type) + "."), N(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), N(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var u = 0; u < e.length; u++) {
            var g = e[u];
            le(g) && Ae(g, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = W(e);
          if (typeof x == "function" && x !== e.entries)
            for (var b = x.call(e), w; !(w = b.next()).done; )
              le(w.value) && Ae(w.value, s);
        }
      }
    }
    function Tt(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === d))
          u = s.propTypes;
        else
          return;
        if (u) {
          var g = L(s);
          vt(u, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !ce) {
          ce = !0;
          var x = L(s);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var g = s[u];
          if (g !== "children" && g !== "key") {
            N(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function ke(e, s, u, g, x, b) {
      {
        var w = at(e);
        if (!w) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(x);
          O ? m += O : m += $e();
          var S;
          e === null ? S = "null" : se(e) ? S = "array" : e !== void 0 && e.$$typeof === t ? (S = "<" + (L(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var R = Rt(e, s, u, x, b);
        if (R == null)
          return R;
        if (w) {
          var I = s.children;
          if (I !== void 0)
            if (g)
              if (se(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  We(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(I, e);
        }
        return e === o ? Ot(R) : Tt(R), R;
      }
    }
    function Pt(e, s, u) {
      return ke(e, s, u, !0);
    }
    function It(e, s, u) {
      return ke(e, s, u, !1);
    }
    var Dt = It, Ft = Pt;
    H.Fragment = o, H.jsx = Dt, H.jsxs = Ft;
  }()), H;
}
process.env.NODE_ENV === "production" ? pe.exports = Wt() : pe.exports = kt();
var f = pe.exports;
const qe = V(!0), He = V((n) => !n), Mt = ({ children: n }) => {
  const [t, r] = $(!0);
  return /* @__PURE__ */ f.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ f.jsx(He.Provider, { value: r, children: n }) });
}, Nt = ({ children: n }) => {
  const t = z(qe);
  return /* @__PURE__ */ f.jsx(
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
      children: n
    }
  );
}, gr = ({ children: n }) => /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(Nt, { children: n }) }), Yt = () => z(He), Ve = ({ formProps: n }) => {
  const { style: t, ...r } = n;
  return /* @__PURE__ */ f.jsx(
    "input",
    {
      ...r,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, Vt = ({ formProps: n }) => {
  const { isSelect: t, style: r, ...o } = n;
  if (!t)
    return;
  const i = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ f.jsx("option", { hidden: !0, children: a }) : null;
  }, c = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ f.jsxs(
    "select",
    {
      ...o,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: c(),
      children: [
        /* @__PURE__ */ f.jsx(i, {}),
        t.options.map((a) => /* @__PURE__ */ f.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, ze = ({
  layoutType: n,
  formPropsArr: t,
  label: r,
  FormItem: o,
  errors: i
}) => {
  const c = P(
    (a) => !i || !i[a] ? null : i[a],
    [i]
  );
  if (n === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ f.jsx(o, { formProps: t[0] }),
      c(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(o, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(o, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const a = t.map(
      ({ id: p, value: l, style: v, optionLabel: h, ...d }) => /* @__PURE__ */ f.jsxs("li", { children: [
        /* @__PURE__ */ f.jsx(
          o,
          {
            formProps: {
              id: p,
              value: l,
              style: {
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                border: "0",
                padding: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                zIndex: "-99999",
                ...v || {}
              },
              ...d
            }
          }
        ),
        /* @__PURE__ */ f.jsx("label", { htmlFor: p, children: h || l })
      ] }, p)
    );
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { children: r }),
      /* @__PURE__ */ f.jsx("ul", { children: a }),
      c(0)
    ] });
  }
}, zt = ({ formProps: n }) => {
  const { isTextarea: t, ...r } = n;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...r, ...t });
}, mr = ({
  label: n,
  formProps: t,
  errors: r,
  ...o
}) => {
  const i = t, c = i[0].type, a = i.length, p = !!i[0].isSelect, l = !!i[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && a > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = P(
    (d) => ze({
      layoutType: a === 1 ? "block" : "flex",
      formPropsArr: i,
      label: n,
      FormItem: d,
      errors: r
    }),
    [r, i, n, a]
  ), h = P(() => p ? v(Vt) : l ? v(zt) : c === "radio" || c === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: i,
    label: n,
    FormItem: Ve,
    errors: r
  }) : v(Ve), [r, i, n, p, l, v, c]);
  return /* @__PURE__ */ f.jsx("fieldset", { ...o, children: /* @__PURE__ */ f.jsx(h, {}) });
}, ve = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Be = (n) => {
  const t = document.documentElement.style, r = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", r.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", r.overflow = "");
}, Bt = ".spice__modal_close", yr = ({
  children: n,
  dialog: t,
  callback: r,
  focusTarget: o,
  ...i
}) => {
  const {
    children: c,
    style: a,
    ...p
  } = t, l = C(null), v = P(() => {
    var d;
    Be("add"), l.current.showModal(), (d = o == null ? void 0 : o.current) == null || d.focus(), r != null && r.onOpen && r.onOpen(l.current);
  }, [r, o]), h = P(async () => {
    r != null && r.onClose && await ve(r.onClose(l.current)), Be("remove"), l.current.close();
  }, [r]);
  return T(() => {
    const d = l.current.querySelectorAll(Bt);
    if (d)
      return d.forEach(
        (y) => y.addEventListener("click", h)
      ), () => {
        d.forEach(
          (y) => y.removeEventListener("click", h)
        );
      };
  }, [h]), T(() => {
    const d = (y) => {
      var E;
      ((E = l.current) == null ? void 0 : E.hasAttribute("open")) && y.key === "Escape" && h();
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [h]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: () => {
          v();
        },
        ...i,
        children: n
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: l,
        onClick: (d) => {
          d.target === l.current && h();
        },
        style: {
          border: "none",
          background: "none",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "100%",
          padding: "0",
          pointerEvents: "auto",
          ...a || {}
        },
        ...p,
        children: c
      }
    )
  ] });
}, Ut = Z(
  ({ children: n, ...t }, r) => {
    const o = Yt();
    return T(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ f.jsx("div", { ref: r, ...t, children: n });
  }
);
Ut.displayName = "StickyItem";
const Xe = Z((n, t) => {
  const { fill: r, style: o, ...i } = n;
  return /* @__PURE__ */ f.jsx(
    "video",
    {
      ref: t,
      style: r ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "transparent",
        ...o
      } : o,
      ...i
    }
  );
});
Xe.displayName = "Video";
const wr = (n) => {
  const t = C(null), [r, o] = $(!1), { fallback: i, ...c } = n;
  return T(() => {
    var a;
    (a = t.current) == null || a.play().then(() => {
      o(!1);
    }).catch(() => {
      o(!0);
    });
  }, []), r ? i : /* @__PURE__ */ f.jsx(Xe, { ref: t, ...c });
}, qt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = V(qt), Je = V(
  () => {
  }
), Ht = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [r, o] = $({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Ge.Provider, { value: r, children: /* @__PURE__ */ f.jsx(Je.Provider, { value: o, children: n }) });
}, Ke = () => z(Ge), he = () => z(Je), Xt = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = he(), i = Ke(), c = P(() => {
    i.current === t || i.isLeaving || o((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
      next: t
    }));
  }, [o, i, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: c,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      ...r,
      children: n
    }
  );
}, Qe = ({ content: n, isOpen: t }) => {
  const r = n.querySelectorAll("a,button");
  if (!r)
    return;
  const o = t ? "0" : "-1";
  r.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Gt = ({
  children: n,
  value: t,
  callback: r,
  style: o,
  ...i
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = C(!0), a = C(null), p = he(), l = Ke(), v = l.current === t && !l.isLeaving;
  return T(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    if (!l.isAnimation) {
      v && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    l.prev === t && (async () => (r != null && r.onClose && await ve(r.onClose(a.current)), p((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), v && r != null && r.onOpen && r.onOpen(a.current);
  }, [l, p, r, t, v]), T(() => {
    Qe({
      content: a.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      style: {
        ...l.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...o
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      ...i,
      children: n
    }
  );
}, Jt = () => {
  const n = he();
  return (t, r) => {
    n((o) => ({
      isAnimation: r,
      isLeaving: r,
      prev: r ? o.current : "",
      current: r ? o.current : t,
      next: r ? t : ""
    }));
  };
}, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Xt,
  Content: Gt,
  Context: Ht,
  useTabSwitch: Jt
}, Symbol.toStringTag, { value: "Module" })), Kt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = V(Kt), et = V(() => {
}), Qt = ({ children: n, defaultValue: t }) => {
  const [r, o] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: r, children: /* @__PURE__ */ f.jsx(et.Provider, { value: o, children: n }) });
}, tt = () => z(Ze), Zt = () => z(et), er = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), i = Zt(), c = D(
    () => !!o.defaultValue.find((l) => l === t),
    [o, t]
  ), [a, p] = $(c);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: () => {
        i((l) => ({
          ...l,
          toggle: a,
          target: t
        })), p(!a);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": a,
      ...r,
      children: n
    }
  );
}, tr = ({
  targetRef: n,
  callback: t,
  debounce: r = 100,
  dependencies: o = []
}) => {
  const i = C(0), c = C(!0);
  T(() => {
    const a = new ResizeObserver((l) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(l[0].target);
      }, r);
    }), p = n.current;
    if (p)
      return a.observe(p), () => {
        a.unobserve(p), clearTimeout(i.current);
      };
  }, o);
}, rr = ({
  value: n,
  callback: t,
  children: r,
  ...o
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = tt(), c = D(
    () => !!i.defaultValue.find((d) => d === n),
    [i, n]
  ), [a, p] = $(c);
  D(() => {
    i.target === n && p(!a);
  }, [i.target, i.toggle]);
  const l = C(!0), v = C(null), h = C(null);
  return T(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    const d = {
      height: h.current.getBoundingClientRect().height,
      target: v.current
    };
    a ? t.onOpen(d) : t.onClose(d);
  }, [a, t]), T(() => {
    Qe({ content: v.current, isOpen: a });
  }, [a]), tr({
    targetRef: h,
    callback: (d) => {
      const y = d.getBoundingClientRect().height;
      a && (v.current.style.height = `${y}px`);
    },
    dependencies: [a],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: v,
      style: {
        overflow: "hidden",
        height: c ? "auto" : "0px"
      },
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, ...o, children: r })
    }
  );
}, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: er,
  Content: rr,
  Context: Qt
}, Symbol.toStringTag, { value: "Module" })), nr = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: r,
  hundredsRef: o,
  onProgress: i,
  onStart: c,
  onComplete: a
}) => {
  const p = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = C(null), v = P(
    ({
      digitContainer: d,
      numbersTarget: y,
      digit: _,
      digitNumber: E,
      currentPercent: k,
      limit: W,
      destination: F
    }) => {
      if (p[_] !== E && k <= W) {
        const j = E.toString(), te = (Math.min(8, E) + 1).toString(), re = k >= W;
        y[0].innerText = j, y[1].innerText = re ? "0" : te, i && i({
          digitContainer: d,
          percent: k,
          digit: _,
          destination: F,
          duration: n / (F / _)
        }), p[_] = E;
      }
    },
    [p, i, n]
  ), h = P(
    (d) => (d > 100 && (d = 100), new Promise((y) => {
      if (d === 0)
        return;
      const _ = {
        ones: t.current.querySelectorAll("div"),
        tens: r.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const E = p.to += 1, k = async () => {
          clearInterval(l.current), E > 100 && a && await ve(a(_.getAll())), y(E - 1);
        };
        E === 1 && c && c(_.getAll()), E > d && await k();
        const W = Math.floor(E / 100) % 100, F = Math.floor(E / 10) % 10, j = E % 10;
        v({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: E,
          numbersTarget: _.ones,
          limit: 90,
          destination: d
        }), v({
          digitContainer: r.current,
          digit: 10,
          digitNumber: F,
          currentPercent: E,
          numbersTarget: _.tens,
          limit: 90,
          destination: d
        }), p[100] !== W && (_.hundreds[1].innerText = W.toString(), i && i({
          digitContainer: o.current,
          percent: E,
          digit: 100,
          destination: d,
          duration: n / (d / 10)
        }), p[100] = W);
      }, Math.max(1e3 / 60, n / d * 1e3));
    })),
    [
      p,
      v,
      r,
      o,
      t,
      a,
      i,
      c,
      n
    ]
  );
  return T(() => () => {
    clearInterval(l.current);
  }, []), h;
}, rt = $t(
  Z((n, t) => /* @__PURE__ */ f.jsxs(
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
        /* @__PURE__ */ f.jsx("div", { ...n, children: "0" }),
        /* @__PURE__ */ f.jsx("div", { ...n, children: "0" })
      ]
    }
  ))
);
rt.displayName = "Digit";
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: nr
}, Symbol.toStringTag, { value: "Module" })), or = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: r = 0,
  once: o = !1,
  callback: i,
  dependencies: c = []
}) => {
  const a = {
    rootMargin: t,
    threshold: r
  };
  T(() => {
    const p = n == null ? void 0 : n.current;
    if (!p)
      return;
    const l = (h, d) => {
      h.forEach((y) => {
        y.isIntersecting && i.onEnter ? (i.onEnter(y), o && d.unobserve(y.target)) : !y.isIntersecting && i.onLeave && i.onLeave(y);
      });
    }, v = new IntersectionObserver(l, a);
    return v.observe(p), () => {
      v.unobserve(p);
    };
  }, c);
}, ir = (n) => {
  const [t, r] = $(!1);
  return or({
    ...n,
    callback: {
      onEnter: () => r(!0),
      onLeave: () => r(!1)
    }
  }), t;
}, sr = (n, t, r) => {
  T(() => (de.ticker.add(n, t, r), () => de.ticker.remove(n)), [t, r, n]);
}, Sr = ({
  children: n,
  isReverse: t = !1,
  speed: r = 1,
  style: o,
  ...i
}) => {
  const c = C(null), a = C(null), p = C(null), l = ir({
    targetRef: c,
    once: !1
  }), v = C(0);
  return sr(() => {
    if (!l)
      return;
    const h = c.current, d = a.current, y = p.current;
    if (!h || !d || !y)
      return;
    const _ = de.ticker.deltaRatio() / 1e3, E = h.clientWidth / d.clientWidth;
    v.current += _ * r * E, v.current >= 1 && (v.current = 0), t ? (d.style.transform = `translateX(${v.current * -100}%)`, y.style.transform = `translateX(${100 - v.current * 100}%)`) : (d.style.transform = `translateX(${v.current * 100}%)`, y.style.transform = `translateX(${v.current * 100 - 200}%)`);
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: c,
      style: {
        overflow: "hidden",
        ...o || {}
      },
      ...i,
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ f.jsx("div", { ref: a, children: n }),
            /* @__PURE__ */ f.jsx("div", { ref: p, children: n })
          ]
        }
      )
    }
  );
}, _r = ({
  type: n = "chars",
  text: t,
  ...r
}) => {
  const o = n === "chars" ? "" : " ";
  return D(
    () => t.split(`
`).flatMap((c, a, p) => [
      ...c.split(o).map(
        (l, v) => l === " " ? /* @__PURE__ */ f.jsx("span", { ...r, children: " " }, `${a}-${v}`) : /* @__PURE__ */ f.jsx("span", { ...r, children: l }, `${a}-${v}`)
      ),
      a < p.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, a) : null
    ]),
    [o, t, r]
  );
}, Rr = ({
  focusTarget: n
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    onFocus: () => {
      var t;
      return (t = n.current) == null ? void 0 : t.focus();
    },
    tabIndex: 0,
    style: {
      opacity: 0,
      width: 0,
      height: 0,
      position: "absolute",
      zIndex: "-99999999",
      pointerEvents: "none"
    }
  }
), ar = Z(
  ({
    loader: n = "skeleton",
    delay: t = 1e3,
    onView: r,
    skeleton: o,
    circular: i,
    children: c,
    style: a,
    ...p
  }, l) => {
    const [v, h] = $(t === 0), d = !!c;
    return T(() => {
      t !== 0 && setTimeout(() => h(!0), t);
    }, [t]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: l,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...d ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...a
        },
        ...p,
        children: /* @__PURE__ */ f.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...v ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (r == null ? void 0 : r.transitionDuration) || "0.3s",
                transitionTimingFunction: (r == null ? void 0 : r.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              n === "skeleton" ? /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    background: `linear-gradient(90deg,transparent,${(o == null ? void 0 : o.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (o == null ? void 0 : o.animationDuration) || "1.6s",
                    animationTimingFunction: (o == null ? void 0 : o.animationTimingFunction) || "ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animationName: "skeleton",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ f.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : n === "circular" ? /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    width: i != null && i.width ? i == null ? void 0 : i.width : "24px",
                    height: i != null && i.height ? i == null ? void 0 : i.height : "24px",
                    border: (i == null ? void 0 : i.border) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (o == null ? void 0 : o.animationDuration) || "1.6s",
                    animationTimingFunction: (o == null ? void 0 : o.animationTimingFunction) || "linear",
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
                  children: /* @__PURE__ */ f.jsx("style", { children: "@keyframes cicrular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : n,
              d && /* @__PURE__ */ f.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
ar.displayName = "Loader";
const ur = typeof document < "u" ? Lt : T, ee = ({
  callback: n,
  debounce: t = 100,
  dependencies: r = []
}) => {
  const o = C(0), i = C(0), c = P(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [n, t]);
  T(() => (o.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(i.current);
  }), r);
}, cr = ({
  initWinW: n,
  winW: t,
  threshold: r
}) => {
  let o = !(n <= r);
  t <= r ? o && window.location.reload() : !o && window.location.reload();
}, lr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, fr = () => {
  console.log(lr);
}, dr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const r = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== r && t.setAttribute("content", r);
}, jr = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: r = !1
}) => {
  const o = P(
    (i) => {
      t && dr(i);
    },
    [t]
  );
  ee({
    callback: ({ initWinW: i, winW: c }) => {
      n && n.forEach(
        (a) => cr({
          initWinW: i,
          winW: c,
          threshold: a
        })
      ), o(c);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), r && process.env.NODE_ENV !== "development" && fr();
  }, [r, o]);
}, pr = () => {
  const [n, t] = $(null), r = P(() => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return ee({
    callback: () => r(),
    debounce: 100,
    dependencies: []
  }), T(() => r(), [r]), n;
}, fe = "scroll", Cr = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: r = []
}) => {
  const o = C(null), [i, c] = At(
    (h, d) => {
      switch (d.type) {
        case fe:
          return o.current = d.payload, d.payload;
        default:
          return h;
      }
    },
    o.current
  ), a = C(0), p = C(0), l = () => window.scrollY || document.documentElement.scrollTop, v = P(() => {
    clearTimeout(p.current), p.current = setTimeout(() => {
      const h = l();
      h > a.current + n && o.current !== "down" ? c({ type: fe, payload: "down" }) : h < a.current - n && o.current !== "up" && c({ type: fe, payload: "up" }), a.current = h;
    }, t);
  }, [t, n]);
  return T(() => (a.current = l(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(p.current);
  }), r), i;
}, Tr = ({ type: n, width: t }) => {
  const [r, o] = $(null), i = P(
    (c) => {
      switch (n) {
        case "max":
          o(t >= c);
          break;
        case "min":
          o(t <= c);
          break;
      }
    },
    [n, t]
  );
  return ee({
    callback: ({ winW: c }) => i(c),
    debounce: 100,
    dependencies: []
  }), T(() => i(window.innerWidth), [i]), r;
}, Or = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: r = "",
  width: o = 600,
  height: i = 800
}) => {
  const c = D(() => encodeURIComponent(n), [n]), a = D(
    () => `height=${i},width=${o}`,
    [i, o]
  ), p = D(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${c}&t=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [c, r, a]
  ), l = D(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${c}&text=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [c, a, r]
  ), v = D(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${c}&text=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [c, a, r]
  ), h = D(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: r,
            url: t || c
          });
        } catch {
          return;
        }
      }
    }),
    [r, c, t]
  ), [d, y] = $(!1), _ = D(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          y(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: p,
    X: l,
    LINE: v,
    share: h,
    copy: _,
    isCopied: d
  };
}, Pr = (n) => {
  const t = pr();
  ur(() => {
    !t || !n.current || (n.current.style.height = `${window.screen.height}px`);
  }, [t, n]), ee({
    callback: ({ winH: r }) => {
      n.current && (t ? n.current.style.height = `${window.screen.height}px` : n.current.style.height = `${r}px`);
    },
    dependencies: [t]
  });
};
export {
  br as Accordion,
  Sr as AutoScrollContainer,
  Rr as FocusTrap,
  mr as FormField,
  ar as Loader,
  Er as LoadingProgress,
  wr as LowPowerVideo,
  yr as ModalButton,
  gr as SpiceWrapper,
  _r as SplitText,
  Ut as StickyItem,
  xr as Tab,
  Xe as Video,
  Pr as use100vh,
  sr as useFrame,
  or as useIntersectionObserver,
  ir as useIsIntersecting,
  pr as useIsTouchDevice,
  ur as useIsomorphicLayoutEffect,
  Tr as useMediaQuery,
  Yt as useOverflowDispatch,
  tr as useResizeObserver,
  Cr as useScrollDirection,
  Or as useShare,
  jr as useStarter,
  ee as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
