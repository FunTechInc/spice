"use client";
import Ue, { createContext as Y, useContext as z, useState as A, useCallback as P, useRef as j, useEffect as C, forwardRef as ve, useMemo as $, memo as At, useLayoutEffect as Lt, useReducer as Ft } from "react";
import fe from "gsap";
var de = { exports: {} }, q = {};
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
function kt() {
  if (Ne)
    return q;
  Ne = 1;
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, v) {
    var g, h = {}, y = null, R = null;
    v !== void 0 && (y = "" + v), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (R = d.ref);
    for (g in d)
      o.call(d, g) && !a.hasOwnProperty(g) && (h[g] = d[g]);
    if (l && l.defaultProps)
      for (g in d = l.defaultProps, d)
        h[g] === void 0 && (h[g] = d[g]);
    return { $$typeof: t, type: l, key: y, ref: R, props: h, _owner: s.current };
  }
  return q.Fragment = n, q.jsx = c, q.jsxs = c, q;
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
var Ve;
function Wt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), E = Symbol.iterator, W = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = E && e[E] || e[W];
      return typeof i == "function" ? i : null;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          u[p - 1] = arguments[p];
        ee("error", e, u);
      }
    }
    function ee(e, i, u) {
      {
        var p = D.ReactDebugCurrentFrame, x = p.getStackAddendum();
        x !== "" && (i += "%s", u = u.concat([x]));
        var b = u.map(function(w) {
          return String(w);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var te = !1, nt = !1, ot = !1, it = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === a || st || e === s || e === v || e === g || it || e === R || te || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === h || e.$$typeof === c || e.$$typeof === l || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ct(e, i, u) {
      var p = e.displayName;
      if (p)
        return p;
      var x = i.displayName || i.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var i = e;
            return me(i) + ".Consumer";
          case c:
            var u = e;
            return me(u._context) + ".Provider";
          case d:
            return ct(e, e.render, "ForwardRef");
          case h:
            var p = e.displayName || null;
            return p !== null ? p : L(e.type) || "Memo";
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
    var M = Object.assign, B = 0, we, ye, xe, be, Ee, Se, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ut() {
      {
        if (B === 0) {
          we = console.log, ye = console.info, xe = console.warn, be = console.error, Ee = console.group, Se = console.groupCollapsed, _e = console.groupEnd;
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
              value: we
            }),
            info: M({}, e, {
              value: ye
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
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = D.ReactCurrentDispatcher, ne;
    function G(e, i, u) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (x) {
            var p = x.stack.trim().match(/\n( *(at )?)/);
            ne = p && p[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, X;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ft();
    }
    function Te(e, i) {
      if (!e || oe)
        return "";
      {
        var u = X.get(e);
        if (u !== void 0)
          return u;
      }
      var p;
      oe = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, ut();
      try {
        if (i) {
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
            } catch (F) {
              p = F;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (F) {
              p = F;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            p = F;
          }
          e();
        }
      } catch (F) {
        if (F && p && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = p.stack.split(`
`), S = m.length - 1, _ = O.length - 1; S >= 1 && _ >= 0 && m[S] !== O[_]; )
            _--;
          for (; S >= 1 && _ >= 0; S--, _--)
            if (m[S] !== O[_]) {
              if (S !== 1 || _ !== 1)
                do
                  if (S--, _--, _ < 0 || m[S] !== O[_]) {
                    var I = `
` + m[S].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, I), I;
                  }
                while (S >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = b, lt(), Error.prepareStackTrace = x;
      }
      var V = e ? e.displayName || e.name : "", Me = V ? G(V) : "";
      return typeof e == "function" && X.set(e, Me), Me;
    }
    function dt(e, i, u) {
      return Te(e, !1);
    }
    function vt(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function J(e, i, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, vt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case v:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return dt(e.render);
          case h:
            return J(e.type, i, u);
          case y: {
            var p = e, x = p._payload, b = p._init;
            try {
              return J(b(x), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, je = {}, Ce = D.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var i = e._owner, u = J(e.type, e._source, i ? i.type : null);
        Ce.setExtraStackFrame(u);
      } else
        Ce.setExtraStackFrame(null);
    }
    function pt(e, i, u, p, x) {
      {
        var b = Function.call.bind(K);
        for (var w in e)
          if (b(e, w)) {
            var m = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((p || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[w](i, w, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (Q(x), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, w, typeof m), Q(null)), m instanceof Error && !(m.message in je) && (je[m.message] = !0, Q(x), T("Failed %s type: %s", u, m.message), Q(null));
          }
      }
    }
    var ht = Array.isArray;
    function ie(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = D.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, $e, se;
    se = {};
    function yt(e) {
      if (K.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (K.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, i) {
      if (typeof e.ref == "string" && U.current && i && U.current.stateNode !== i) {
        var u = L(U.current.type);
        se[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(U.current.type), e.ref), se[u] = !0);
      }
    }
    function Et(e, i) {
      {
        var u = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function St(e, i) {
      {
        var u = function() {
          $e || ($e = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var _t = function(e, i, u, p, x, b, w) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
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
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rt(e, i, u, p, x) {
      {
        var b, w = {}, m = null, O = null;
        u !== void 0 && (Pe(u), m = "" + u), xt(i) && (Pe(i.key), m = "" + i.key), yt(i) && (O = i.ref, bt(i, x));
        for (b in i)
          K.call(i, b) && !wt.hasOwnProperty(b) && (w[b] = i[b]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (b in S)
            w[b] === void 0 && (w[b] = S[b]);
        }
        if (m || O) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(w, _), O && St(w, _);
        }
        return _t(e, m, O, x, p, U.current, w);
      }
    }
    var ae = D.ReactCurrentOwner, De = D.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var i = e._owner, u = J(e.type, e._source, i ? i.type : null);
        De.setExtraStackFrame(u);
      } else
        De.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ae() {
      {
        if (ae.current) {
          var e = L(ae.current.type);
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
          var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Le = {};
    function jt(e) {
      {
        var i = Ae();
        if (!i) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Fe(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = jt(i);
        if (Le[u])
          return;
        Le[u] = !0;
        var p = "";
        e && e._owner && e._owner !== ae.current && (p = " It was passed a child from " + L(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), N(null);
      }
    }
    function ke(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var u = 0; u < e.length; u++) {
            var p = e[u];
            ue(p) && Fe(p, i);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = k(e);
          if (typeof x == "function" && x !== e.entries)
            for (var b = x.call(e), w; !(w = b.next()).done; )
              ue(w.value) && Fe(w.value, i);
        }
      }
    }
    function Ct(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === h))
          u = i.propTypes;
        else
          return;
        if (u) {
          var p = L(i);
          pt(u, e.props, "prop", p, e);
        } else if (i.PropTypes !== void 0 && !ce) {
          ce = !0;
          var x = L(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
          var p = i[u];
          if (p !== "children" && p !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, i, u, p, x, b) {
      {
        var w = at(e);
        if (!w) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Tt(x);
          O ? m += O : m += Ae();
          var S;
          e === null ? S = "null" : ie(e) ? S = "array" : e !== void 0 && e.$$typeof === t ? (S = "<" + (L(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var _ = Rt(e, i, u, x, b);
        if (_ == null)
          return _;
        if (w) {
          var I = i.children;
          if (I !== void 0)
            if (p)
              if (ie(I)) {
                for (var V = 0; V < I.length; V++)
                  ke(I[V], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(I, e);
        }
        return e === o ? Ot(_) : Ct(_), _;
      }
    }
    function Pt(e, i, u) {
      return We(e, i, u, !0);
    }
    function It(e, i, u) {
      return We(e, i, u, !1);
    }
    var $t = It, Dt = Pt;
    H.Fragment = o, H.jsx = $t, H.jsxs = Dt;
  }()), H;
}
process.env.NODE_ENV === "production" ? de.exports = kt() : de.exports = Wt();
var f = de.exports;
const qe = Y(!0), He = Y((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ f.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ f.jsx(He.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
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
      children: r
    }
  );
}, hr = ({ children: r }) => /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(Nt, { children: r }) }), Vt = () => z(He), Ye = ({
  formProps: r,
  className: t
}) => {
  const { style: n, ...o } = r;
  return /* @__PURE__ */ f.jsx(
    "input",
    {
      ...o,
      className: t || "",
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n
      }
    }
  );
}, Yt = ({ formProps: r }) => {
  const { isSelect: t, ...n } = r;
  if (!t)
    return;
  const o = () => {
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
      ...n,
      style: {
        overflow: "hidden",
        fontSize: "16px"
      },
      defaultValue: s(),
      children: [
        /* @__PURE__ */ f.jsx(o, {}),
        t.options.map((a) => /* @__PURE__ */ f.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, ze = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: o,
  errors: s
}) => {
  const a = P(
    (c) => !s || !s[c] ? null : s[c],
    [s]
  );
  if (r === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      n && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ f.jsx(o, { formProps: t[0] }),
      a(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      n && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(o, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(o, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const c = t.map((l) => /* @__PURE__ */ f.jsxs("li", { children: [
      /* @__PURE__ */ f.jsx(
        o,
        {
          formProps: {
            ...l,
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
              zIndex: "-99999"
            }
          }
        }
      ),
      /* @__PURE__ */ f.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      n && /* @__PURE__ */ f.jsx("label", { children: n }),
      /* @__PURE__ */ f.jsx("ul", { children: c }),
      a(0)
    ] });
  }
}, zt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...n, ...t });
}, gr = ({
  className: r,
  label: t,
  formProps: n,
  errors: o
}) => {
  const s = n, a = s[0].type, c = s.length, l = !!s[0].isSelect, d = !!s[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (o && o.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = P(
    (h) => ze({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: s,
      label: t,
      FormItem: h,
      errors: o
    }),
    [o, s, t, c]
  ), g = P(() => l ? v(Yt) : d ? v(zt) : a === "radio" || a === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Ye,
    errors: o
  }) : v(Ye), [o, s, t, l, d, v, a]);
  return /* @__PURE__ */ f.jsx("fieldset", { className: `${r}`, children: /* @__PURE__ */ f.jsx(g, {}) });
}, pe = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Be = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Bt = ".spice__modal_close", mr = ({
  children: r,
  tag: t,
  className: n,
  dialog: o,
  callback: s
}) => {
  const a = t || "button", c = j(null), l = P(() => {
    Be("add"), c.current.showModal(), s != null && s.onOpen && s.onOpen(c.current);
  }, [s]), d = P(async () => {
    s != null && s.onClose && await pe(s.onClose(c.current)), Be("remove"), c.current.close();
  }, [s]);
  return C(() => {
    const v = c.current.querySelectorAll(Bt);
    if (v)
      return v.forEach(
        (g) => g.addEventListener("click", d)
      ), () => {
        v.forEach(
          (g) => g.removeEventListener("click", d)
        );
      };
  }, [d]), C(() => {
    const v = (g) => {
      var y;
      ((y = c.current) == null ? void 0 : y.hasAttribute("open")) && g.key === "Escape" && d();
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [d]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      a,
      {
        className: n || "",
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
        onClick: (v) => {
          v.target === c.current && d();
        },
        style: {
          border: "none",
          background: "none",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "100%",
          padding: "0"
        },
        className: o.className ? o.className : "",
        children: o.children
      }
    )
  ] });
}, Ut = ve(
  ({ children: r, ...t }, n) => {
    const o = Vt();
    return C(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ f.jsx("div", { ref: n, ...t, children: r });
  }
);
Ut.displayName = "StickyItem";
const Ge = ve((r, t) => {
  const { fill: n, style: o, ...s } = r;
  return /* @__PURE__ */ f.jsx(
    "video",
    {
      ref: t,
      style: n ? {
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
      ...s
    }
  );
});
Ge.displayName = "Video";
const wr = (r) => {
  const t = j(null), [n, o] = A(!1), { fallback: s, ...a } = r;
  return C(() => {
    var c;
    (c = t.current) == null || c.play().then(() => {
      o(!1);
    }).catch(() => {
      o(!0);
    });
  }, []), n ? s : /* @__PURE__ */ f.jsx(Ge, { ref: t, ...a });
}, qt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Xe = Y(qt), Je = Y(
  () => {
  }
), Ht = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, o] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Xe.Provider, { value: n, children: /* @__PURE__ */ f.jsx(Je.Provider, { value: o, children: r }) });
}, Ke = () => z(Xe), he = () => z(Je), Gt = ({ children: r, value: t, className: n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = he(), s = Ke(), a = P(() => {
    s.current === t || s.isLeaving || o((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [o, s, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: a,
      className: n || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: r
    }
  );
}, Qe = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const o = t ? "0" : "-1";
  n.forEach((s) => {
    s.setAttribute("tabindex", o);
  });
}, Xt = ({
  children: r,
  value: t,
  className: n,
  callback: o
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = j(!0), a = j(null), c = he(), l = Ke(), d = l.current === t && !l.isLeaving;
  return C(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!l.isAnimation) {
      d && o != null && o.onReset && o.onReset(a.current);
      return;
    }
    l.prev === t && (async () => (o != null && o.onClose && await pe(o.onClose(a.current)), c((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), d && o != null && o.onOpen && o.onOpen(a.current);
  }, [l, c, o, t, d]), C(() => {
    Qe({
      content: a.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      className: n || "",
      style: l.current !== t ? {
        pointerEvents: "none",
        position: "absolute",
        visibility: "hidden",
        opacity: 0,
        display: "none"
      } : {},
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      children: r
    }
  );
}, Jt = () => {
  const r = he();
  return (t, n) => {
    r((o) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? o.current : "",
      current: n ? o.current : t,
      next: n ? t : ""
    }));
  };
}, yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Gt,
  Content: Xt,
  Context: Ht,
  useTabSwitch: Jt
}, Symbol.toStringTag, { value: "Module" })), Kt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = Y(Kt), et = Y(() => {
}), Qt = ({ children: r, defaultValue: t }) => {
  const [n, o] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ f.jsx(et.Provider, { value: o, children: r }) });
}, tt = () => z(Ze), Zt = () => z(et), er = ({ children: r, value: t, className: n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), s = Zt(), a = $(
    () => !!o.defaultValue.find((d) => d === t),
    [o, t]
  ), [c, l] = A(a);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: n || "",
      onClick: () => {
        s((d) => ({
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
}, tr = ({
  targetRef: r,
  callback: t,
  debounce: n = 100,
  dependencies: o = []
}) => {
  const s = j(0), a = j(!0);
  C(() => {
    const c = new ResizeObserver((d) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), l = r.current;
    if (l)
      return c.observe(l), () => {
        c.unobserve(l), clearTimeout(s.current);
      };
  }, o);
}, rr = ({
  value: r,
  callback: t,
  children: n,
  className: o
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = tt(), a = $(
    () => !!s.defaultValue.find((h) => h === r),
    [s, r]
  ), [c, l] = A(a);
  $(() => {
    s.target === r && l(!c);
  }, [s.target, s.toggle]);
  const d = j(!0), v = j(null), g = j(null);
  return C(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const h = {
      height: g.current.getBoundingClientRect().height,
      target: v.current
    };
    c ? t.onOpen(h) : t.onClose(h);
  }, [c, t]), C(() => {
    Qe({ content: v.current, isOpen: c });
  }, [c]), tr({
    targetRef: g,
    callback: (h) => {
      const y = h.getBoundingClientRect().height;
      c && (v.current.style.height = `${y}px`);
    },
    dependencies: [c],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: v,
      style: {
        overflow: "hidden",
        height: a ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !c,
      children: /* @__PURE__ */ f.jsx("div", { ref: g, className: o || "", children: n })
    }
  );
}, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: er,
  Content: rr,
  Context: Qt
}, Symbol.toStringTag, { value: "Module" })), nr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: o,
  onProgress: s,
  onStart: a,
  onComplete: c
}) => {
  const l = $(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = j(null), v = P(
    ({
      digitContainer: h,
      numbersTarget: y,
      digit: R,
      digitNumber: E,
      currentPercent: W,
      limit: k,
      destination: D
    }) => {
      if (l[R] !== E && W <= k) {
        const T = E.toString(), ee = (Math.min(8, E) + 1).toString(), te = W >= k;
        y[0].innerText = T, y[1].innerText = te ? "0" : ee, s && s({
          digitContainer: h,
          percent: W,
          digit: R,
          destination: D,
          duration: r / (D / R)
        }), l[R] = E;
      }
    },
    [l, s, r]
  ), g = P(
    (h) => (h > 100 && (h = 100), new Promise((y) => {
      if (h === 0)
        return;
      const R = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const E = l.to += 1, W = async () => {
          clearInterval(d.current), E > 100 && c && await pe(c(R.getAll())), y(E - 1);
        };
        E === 1 && a && a(R.getAll()), E > h && await W();
        const k = Math.floor(E / 100) % 100, D = Math.floor(E / 10) % 10, T = E % 10;
        v({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: E,
          numbersTarget: R.ones,
          limit: 90,
          destination: h
        }), v({
          digitContainer: n.current,
          digit: 10,
          digitNumber: D,
          currentPercent: E,
          numbersTarget: R.tens,
          limit: 90,
          destination: h
        }), l[100] !== k && (R.hundreds[1].innerText = k.toString(), s && s({
          digitContainer: o.current,
          percent: E,
          digit: 100,
          destination: h,
          duration: r / (h / 10)
        }), l[100] = k);
      }, Math.max(1e3 / 60, r / h * 1e3));
    })),
    [
      l,
      v,
      n,
      o,
      t,
      c,
      s,
      a,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), g;
}, rt = At(
  ve(({ className: r }, t) => /* @__PURE__ */ f.jsxs(
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
        /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" }),
        /* @__PURE__ */ f.jsx("div", { className: r || "", children: "0" })
      ]
    }
  ))
);
rt.displayName = "Digit";
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: nr
}, Symbol.toStringTag, { value: "Module" })), or = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: o = !1,
  callback: s,
  dependencies: a = []
}) => {
  const c = {
    rootMargin: t,
    threshold: n
  };
  C(() => {
    const l = r == null ? void 0 : r.current;
    if (!l)
      return;
    const d = (g, h) => {
      g.forEach((y) => {
        y.isIntersecting && s.onEnter ? (s.onEnter(y), o && h.unobserve(y.target)) : !y.isIntersecting && s.onLeave && s.onLeave(y);
      });
    }, v = new IntersectionObserver(d, c);
    return v.observe(l), () => {
      v.unobserve(l);
    };
  }, a);
}, ir = (r) => {
  const [t, n] = A(!1);
  return or({
    ...r,
    callback: {
      onEnter: () => n(!0),
      onLeave: () => n(!1)
    }
  }), t;
}, sr = (r, t, n) => {
  C(() => (fe.ticker.add(r, t, n), () => fe.ticker.remove(r)), [t, n, r]);
}, Er = ({
  children: r,
  className: t,
  style: n = {},
  isReverse: o = !1,
  speed: s = 1
}) => {
  const a = j(null), c = j(null), l = j(null), d = ir({
    targetRef: a,
    once: !1
  }), v = j(0);
  return sr(() => {
    if (!d)
      return;
    const g = a.current, h = c.current, y = l.current;
    if (!g || !h || !y)
      return;
    const R = fe.ticker.deltaRatio() / 1e3, E = g.clientWidth / h.clientWidth;
    v.current += R * s * E, v.current >= 1 && (v.current = 0), o ? (h.style.transform = `translateX(${v.current * -100}%)`, y.style.transform = `translateX(${100 - v.current * 100}%)`) : (h.style.transform = `translateX(${v.current * 100}%)`, y.style.transform = `translateX(${v.current * 100 - 200}%)`);
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      className: t || "",
      style: {
        overflow: "hidden",
        ...n
      },
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ f.jsx("div", { ref: c, children: r }),
            /* @__PURE__ */ f.jsx("div", { ref: l, children: r })
          ]
        }
      )
    }
  );
}, Sr = ({
  type: r = "chars",
  text: t,
  ...n
}) => {
  const o = r === "chars" ? "" : " ";
  return $(
    () => t.split(`
`).flatMap((a, c, l) => [
      ...a.split(o).map(
        (d, v) => d === " " ? /* @__PURE__ */ f.jsx("span", { ...n, children: " " }, `${c}-${v}`) : /* @__PURE__ */ f.jsx("span", { ...n, children: d }, `${c}-${v}`)
      ),
      c < l.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, c) : null
    ]),
    [o, t, n]
  );
}, ar = typeof document < "u" ? Lt : C, Z = ({
  callback: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = j(0), s = j(0), a = P(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [r, t]);
  C(() => (o.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
  }), n);
}, cr = ({
  initWinW: r,
  winW: t,
  threshold: n
}) => {
  let o = !(r <= n);
  t <= n ? o && window.location.reload() : !o && window.location.reload();
}, ur = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, lr = () => {
  console.log(ur);
}, fr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, _r = ({
  reloadThresholds: r,
  isFixViewportForSmall: t = !0,
  areYouFun: n = !1
}) => {
  const o = P(
    (s) => {
      t && fr(s);
    },
    [t]
  );
  Z({
    callback: ({ initWinW: s, winW: a }) => {
      r && r.forEach(
        (c) => cr({
          initWinW: s,
          winW: a,
          threshold: c
        })
      ), o(a);
    },
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), n && process.env.NODE_ENV !== "development" && lr();
  }, [n, o]);
}, dr = () => {
  const [r, t] = A(null), n = P(() => {
    const o = window.ontouchstart, s = navigator.maxTouchPoints;
    o !== void 0 && 0 < s ? t(!0) : t(!1);
  }, []);
  return Z({
    callback: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, le = "scroll", Rr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const o = j(null), [s, a] = Ft(
    (g, h) => {
      switch (h.type) {
        case le:
          return o.current = h.payload, h.payload;
        default:
          return g;
      }
    },
    o.current
  ), c = j(0), l = j(0), d = () => window.scrollY || document.documentElement.scrollTop, v = P(() => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const g = d();
      g > c.current + r && o.current !== "down" ? a({ type: le, payload: "down" }) : g < c.current - r && o.current !== "up" && a({ type: le, payload: "up" }), c.current = g;
    }, t);
  }, [t, r]);
  return C(() => (c.current = d(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(l.current);
  }), n), s;
}, Tr = ({ type: r, width: t }) => {
  const [n, o] = A(null), s = P(
    (a) => {
      switch (r) {
        case "max":
          o(t >= a);
          break;
        case "min":
          o(t <= a);
          break;
      }
    },
    [r, t]
  );
  return Z({
    callback: ({ winW: a }) => s(a),
    debounce: 100,
    dependencies: []
  }), C(() => s(window.innerWidth), [s]), n;
}, jr = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: o = 600,
  height: s = 800
}) => {
  const a = $(() => encodeURIComponent(r), [r]), c = $(
    () => `height=${s},width=${o}`,
    [s, o]
  ), l = $(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${a}&t=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [a, n, c]
  ), d = $(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${a}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [a, c, n]
  ), v = $(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${a}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [a, c, n]
  ), g = $(
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
  ), [h, y] = A(!1), R = $(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          y(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: l,
    X: d,
    LINE: v,
    share: g,
    copy: R,
    isCopied: h
  };
}, Cr = (r) => {
  const t = dr();
  ar(() => {
    !t || !r.current || (r.current.style.height = `${window.screen.height}px`);
  }, [t, r]), Z({
    callback: ({ winH: n }) => {
      r.current && (t ? r.current.style.height = `${window.screen.height}px` : r.current.style.height = `${n}px`);
    },
    dependencies: [t]
  });
};
export {
  xr as Accordion,
  Er as AutoScrollContainer,
  gr as FormField,
  br as LoadingProgress,
  wr as LowPowerVideo,
  mr as ModalButton,
  hr as SpiceWrapper,
  Sr as SplitText,
  Ut as StickyItem,
  yr as Tab,
  Ge as Video,
  Cr as use100vh,
  sr as useFrame,
  or as useIntersectionObserver,
  ir as useIsIntersecting,
  dr as useIsTouchDevice,
  ar as useIsomorphicLayoutEffect,
  Tr as useMediaQuery,
  Vt as useOverflowDispatch,
  tr as useResizeObserver,
  Rr as useScrollDirection,
  jr as useShare,
  _r as useStarter,
  Z as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
