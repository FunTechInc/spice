"use client";
import Ue, { createContext as B, useContext as z, useState as A, useCallback as P, forwardRef as G, useRef as j, useEffect as C, useMemo as k, memo as Dt, useLayoutEffect as Ft, useReducer as At } from "react";
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
function $t() {
  if (Ne)
    return q;
  Ne = 1;
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(v, d, g) {
    var f, p = {}, m = null, b = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (b = d.ref);
    for (f in d)
      o.call(d, f) && !c.hasOwnProperty(f) && (p[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: b, props: p, _owner: s.current };
  }
  return q.Fragment = n, q.jsx = u, q.jsxs = u, q;
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
function Lt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), E = Symbol.iterator, W = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = E && e[E] || e[W];
      return typeof i == "function" ? i : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          a[h - 1] = arguments[h];
        ee("error", e, a);
      }
    }
    function ee(e, i, a) {
      {
        var h = F.ReactDebugCurrentFrame, x = h.getStackAddendum();
        x !== "" && (i += "%s", a = a.concat([x]));
        var S = a.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var te = !1, rt = !1, nt = !1, ot = !1, it = !1, ge;
    ge = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || it || e === s || e === g || e === f || ot || e === b || te || rt || nt || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === u || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function at(e, i, a) {
      var h = e.displayName;
      if (h)
        return h;
      var x = i.displayName || i.name || "";
      return x !== "" ? a + "(" + x + ")" : a;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
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
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var i = e;
            return me(i) + ".Consumer";
          case u:
            var a = e;
            return me(a._context) + ".Provider";
          case d:
            return at(e, e.render, "ForwardRef");
          case p:
            var h = e.displayName || null;
            return h !== null ? h : $(e.type) || "Memo";
          case m: {
            var x = e, S = x._payload, w = x._init;
            try {
              return $(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, be, ye, we, xe, Ee, Se, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function ct() {
      {
        if (V === 0) {
          be = console.log, ye = console.info, we = console.warn, xe = console.error, Ee = console.group, Se = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
    function ut() {
      {
        if (V--, V === 0) {
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
              value: we
            }),
            error: M({}, e, {
              value: xe
            }),
            group: M({}, e, {
              value: Ee
            }),
            groupCollapsed: M({}, e, {
              value: Se
            }),
            groupEnd: M({}, e, {
              value: Re
            })
          });
        }
        V < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = F.ReactCurrentDispatcher, ne;
    function X(e, i, a) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (x) {
            var h = x.stack.trim().match(/\n( *(at )?)/);
            ne = h && h[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var oe = !1, J;
    {
      var lt = typeof WeakMap == "function" ? WeakMap : Map;
      J = new lt();
    }
    function Te(e, i) {
      if (!e || oe)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var h;
      oe = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = re.current, re.current = null, ct();
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
            } catch (L) {
              h = L;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (L) {
              h = L;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            h = L;
          }
          e();
        }
      } catch (L) {
        if (L && h && typeof L.stack == "string") {
          for (var y = L.stack.split(`
`), O = h.stack.split(`
`), R = y.length - 1, _ = O.length - 1; R >= 1 && _ >= 0 && y[R] !== O[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (y[R] !== O[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || y[R] !== O[_]) {
                    var I = `
` + y[R].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, I), I;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = S, ut(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? X(Y) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function ft(e, i, a) {
      return Te(e, !1);
    }
    function dt(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function K(e, i, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, dt(e));
      if (typeof e == "string")
        return X(e);
      switch (e) {
        case g:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ft(e.render);
          case p:
            return K(e.type, i, a);
          case m: {
            var h = e, x = h._payload, S = h._init;
            try {
              return K(S(x), i, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, je = {}, Ce = F.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var i = e._owner, a = K(e.type, e._source, i ? i.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function vt(e, i, a, h, x) {
      {
        var S = Function.call.bind(Z);
        for (var w in e)
          if (S(e, w)) {
            var y = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((h || "React class") + ": " + a + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              y = e[w](i, w, h, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (Q(x), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", a, w, typeof y), Q(null)), y instanceof Error && !(y.message in je) && (je[y.message] = !0, Q(x), T("Failed %s type: %s", a, y.message), Q(null));
          }
      }
    }
    var pt = Array.isArray;
    function ie(e) {
      return pt(e);
    }
    function ht(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, a = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function gt(e) {
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
      if (gt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), Oe(e);
    }
    var U = F.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, ke, se;
    se = {};
    function bt(e) {
      if (Z.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (Z.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, i) {
      if (typeof e.ref == "string" && U.current && i && U.current.stateNode !== i) {
        var a = $(U.current.type);
        se[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(U.current.type), e.ref), se[a] = !0);
      }
    }
    function xt(e, i) {
      {
        var a = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Et(e, i) {
      {
        var a = function() {
          ke || (ke = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var St = function(e, i, a, h, x, S, w) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: a,
        props: w,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Rt(e, i, a, h, x) {
      {
        var S, w = {}, y = null, O = null;
        a !== void 0 && (Pe(a), y = "" + a), yt(i) && (Pe(i.key), y = "" + i.key), bt(i) && (O = i.ref, wt(i, x));
        for (S in i)
          Z.call(i, S) && !mt.hasOwnProperty(S) && (w[S] = i[S]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (S in R)
            w[S] === void 0 && (w[S] = R[S]);
        }
        if (y || O) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && xt(w, _), O && Et(w, _);
        }
        return St(e, y, O, x, h, U.current, w);
      }
    }
    var ae = F.ReactCurrentOwner, De = F.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var i = e._owner, a = K(e.type, e._source, i ? i.type : null);
        De.setExtraStackFrame(a);
      } else
        De.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ae.current) {
          var e = $(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _t(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + i + ":" + a + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function Tt(e) {
      {
        var i = Fe();
        if (!i) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (i = `

Check the top-level render call using <` + a + ">.");
        }
        return i;
      }
    }
    function $e(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Tt(i);
        if (Ae[a])
          return;
        Ae[a] = !0;
        var h = "";
        e && e._owner && e._owner !== ae.current && (h = " It was passed a child from " + $(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, h), N(null);
      }
    }
    function Le(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var a = 0; a < e.length; a++) {
            var h = e[a];
            ue(h) && $e(h, i);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = D(e);
          if (typeof x == "function" && x !== e.entries)
            for (var S = x.call(e), w; !(w = S.next()).done; )
              ue(w.value) && $e(w.value, i);
        }
      }
    }
    function jt(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var a;
        if (typeof i == "function")
          a = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === p))
          a = i.propTypes;
        else
          return;
        if (a) {
          var h = $(i);
          vt(a, e.props, "prop", h, e);
        } else if (i.PropTypes !== void 0 && !ce) {
          ce = !0;
          var x = $(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var i = Object.keys(e.props), a = 0; a < i.length; a++) {
          var h = i[a];
          if (h !== "children" && h !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, i, a, h, x, S) {
      {
        var w = st(e);
        if (!w) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = _t(x);
          O ? y += O : y += Fe();
          var R;
          e === null ? R = "null" : ie(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + ($(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, y);
        }
        var _ = Rt(e, i, a, x, S);
        if (_ == null)
          return _;
        if (w) {
          var I = i.children;
          if (I !== void 0)
            if (h)
              if (ie(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  Le(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(I, e);
        }
        return e === o ? Ct(_) : jt(_), _;
      }
    }
    function Ot(e, i, a) {
      return We(e, i, a, !0);
    }
    function Pt(e, i, a) {
      return We(e, i, a, !1);
    }
    var It = Pt, kt = Ot;
    H.Fragment = o, H.jsx = It, H.jsxs = kt;
  }()), H;
}
process.env.NODE_ENV === "production" ? de.exports = $t() : de.exports = Lt();
var l = de.exports;
const qe = B(!0), He = B((r) => !r), Wt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ l.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ l.jsx(He.Provider, { value: n, children: r }) });
}, Mt = ({ children: r }) => {
  const t = z(qe);
  return /* @__PURE__ */ l.jsx(
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
}, mr = ({ children: r }) => /* @__PURE__ */ l.jsx(Wt, { children: /* @__PURE__ */ l.jsx(Mt, { children: r }) }), Nt = () => z(He), Be = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, Yt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...o } = r;
  if (!t)
    return;
  const s = () => {
    const u = t.defaultValue;
    return u ? /* @__PURE__ */ l.jsx("option", { hidden: !0, children: u }) : null;
  }, c = () => {
    const u = t.defaultSelectedIndex;
    if (u)
      return t.options[u];
  };
  return /* @__PURE__ */ l.jsxs(
    "select",
    {
      ...o,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: c(),
      children: [
        /* @__PURE__ */ l.jsx(s, {}),
        t.options.map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: u }, u))
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
  const c = P(
    (u) => !s || !s[u] ? null : s[u],
    [s]
  );
  if (r === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
      c(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsxs("ul", { children: [
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const u = t.map(
      ({ id: v, value: d, style: g, optionLabel: f, ...p }) => /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx(
          o,
          {
            formProps: {
              id: v,
              value: d,
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
                ...g || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ l.jsx("label", { htmlFor: v, children: f || d })
      ] }, v)
    );
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { children: n }),
      /* @__PURE__ */ l.jsx("ul", { children: u }),
      c(0)
    ] });
  }
}, Bt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ l.jsx("textarea", { ...n, ...t });
}, br = ({
  label: r,
  formProps: t,
  errors: n,
  ...o
}) => {
  const s = t, c = s[0].type, u = s.length, v = !!s[0].isSelect, d = !!s[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = P(
    (p) => ze({
      layoutType: u === 1 ? "block" : "flex",
      formPropsArr: s,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, s, r, u]
  ), f = P(() => v ? g(Yt) : d ? g(Bt) : c === "radio" || c === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: s,
    label: r,
    FormItem: Be,
    errors: n
  }) : g(Be), [n, s, r, v, d, g, c]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...o, children: /* @__PURE__ */ l.jsx(f, {}) });
}, ve = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ve = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, zt = ".spice__modal_close", Vt = G(
  ({ children: r, dialog: t, onOpen: n, onClose: o, focusTarget: s, ...c }, u) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = j(null), p = P(() => {
      var b;
      Ve("add"), f.current.showModal(), (b = s == null ? void 0 : s.current) == null || b.focus(), n && n(f.current);
    }, [n, s]), m = P(async () => {
      o && await ve(o(f.current)), Ve("remove"), f.current.close();
    }, [o]);
    return C(() => {
      const b = f.current.querySelectorAll(zt);
      if (b)
        return b.forEach(
          (E) => E.addEventListener("click", m)
        ), () => {
          b.forEach(
            (E) => E.removeEventListener("click", m)
          );
        };
    }, [m]), C(() => {
      const b = (E) => {
        var D;
        ((D = f.current) == null ? void 0 : D.hasAttribute("open")) && E.key === "Escape" && m();
      };
      return window.addEventListener("keydown", b), () => {
        window.removeEventListener("keydown", b);
      };
    }, [m]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          ref: u,
          onClick: () => {
            p();
          },
          ...c,
          children: r
        }
      ),
      /* @__PURE__ */ l.jsx(
        "dialog",
        {
          ref: f,
          onClick: (b) => {
            b.target === f.current && m();
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
            ...d || {}
          },
          ...g,
          children: v
        }
      )
    ] });
  }
);
Vt.displayName = "ModalButton";
const Ut = G(
  ({ children: r, ...t }, n) => {
    const o = Nt();
    return C(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ l.jsx("div", { ref: n, ...t, children: r });
  }
);
Ut.displayName = "StickyItem";
const qt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = B(qt), Xe = B(
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
  return /* @__PURE__ */ l.jsx(Ge.Provider, { value: n, children: /* @__PURE__ */ l.jsx(Xe.Provider, { value: o, children: r }) });
}, Je = () => z(Ge), pe = () => z(Xe), Gt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = pe(), s = Je(), c = P(() => {
    s.current === t || s.isLeaving || o((u) => ({
      ...u,
      isLeaving: !0,
      isAnimation: !0,
      prev: u.current,
      next: t
    }));
  }, [o, s, t]);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: c,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      ...n,
      children: r
    }
  );
}, Ke = ({ content: r, isOpen: t }) => {
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
  onOpen: n,
  onClose: o,
  onReset: s,
  style: c,
  ...u
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = j(!0), d = j(null), g = pe(), f = Je(), p = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && s && s(d.current);
      return;
    }
    f.prev === t && (async () => (o && await ve(o(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), p && n && n(d.current);
  }, [f, g, n, o, s, t, p]), C(() => {
    Ke({
      content: d.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: d,
      style: {
        ...f.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...c
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...u,
      children: r
    }
  );
}, Jt = () => {
  const r = pe();
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
}, Ze = B(Kt), Qe = B(() => {
}), Zt = ({ children: r, defaultValue: t }) => {
  const [n, o] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ l.jsx(Qe.Provider, { value: o, children: r }) });
}, et = () => z(Ze), Qt = () => z(Qe), er = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = et(), s = Qt(), c = k(
    () => !!o.defaultValue.find((d) => d === t),
    [o, t]
  ), [u, v] = A(c);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        s((d) => ({
          ...d,
          toggle: u,
          target: t
        })), v(!u);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": u,
      ...n,
      children: r
    }
  );
}, tr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: o = []
}) => {
  const s = j(0), c = j(!0);
  C(() => {
    const u = new ResizeObserver((d) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return u.observe(v), () => {
        u.unobserve(v), clearTimeout(s.current);
      };
  }, o);
}, rr = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: o,
  ...s
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = et(), u = k(
    () => !!c.defaultValue.find((m) => m === r),
    [c, r]
  ), [v, d] = A(u);
  k(() => {
    c.target === r && d(!v);
  }, [c.target, c.toggle]);
  const g = j(!0), f = j(null), p = j(null);
  return C(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const m = {
      height: p.current.getBoundingClientRect().height,
      target: f.current
    };
    v ? t(m) : n(m);
  }, [v, t, n]), C(() => {
    Ke({ content: f.current, isOpen: v });
  }, [v]), tr({
    targetRef: p,
    onResize: (m) => {
      const b = m.getBoundingClientRect().height;
      v && (f.current.style.height = `${b}px`);
    },
    dependencies: [v],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: u ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ l.jsx("div", { ref: p, ...s, children: o })
    }
  );
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: er,
  Content: rr,
  Context: Zt
}, Symbol.toStringTag, { value: "Module" })), nr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: o,
  onProgress: s,
  onStart: c,
  onComplete: u
}) => {
  const v = k(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = j(null), g = P(
    ({
      digitContainer: p,
      numbersTarget: m,
      digit: b,
      digitNumber: E,
      currentPercent: W,
      limit: D,
      destination: F
    }) => {
      if (v[b] !== E && W <= D) {
        const T = E.toString(), ee = (Math.min(8, E) + 1).toString(), te = W >= D;
        m[0].innerText = T, m[1].innerText = te ? "0" : ee, s && s({
          digitContainer: p,
          percent: W,
          digit: b,
          destination: F,
          duration: r / (F / b)
        }), v[b] = E;
      }
    },
    [v, s, r]
  ), f = P(
    (p) => (p > 100 && (p = 100), new Promise((m) => {
      if (p === 0)
        return;
      const b = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const E = v.to += 1, W = async () => {
          clearInterval(d.current), E > 100 && u && await ve(u(b.getAll())), m(E - 1);
        };
        E === 1 && c && c(b.getAll()), E > p && await W();
        const D = Math.floor(E / 100) % 100, F = Math.floor(E / 10) % 10, T = E % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: E,
          numbersTarget: b.ones,
          limit: 90,
          destination: p
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: F,
          currentPercent: E,
          numbersTarget: b.tens,
          limit: 90,
          destination: p
        }), v[100] !== D && (b.hundreds[1].innerText = D.toString(), s && s({
          digitContainer: o.current,
          percent: E,
          digit: 100,
          destination: p,
          duration: r / (p / 10)
        }), v[100] = D);
      }, Math.max(1e3 / 60, r / p * 1e3));
    })),
    [
      v,
      g,
      n,
      o,
      t,
      u,
      s,
      c,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, tt = Dt(
  G((r, t) => /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ l.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
tt.displayName = "Digit";
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: tt,
  useLoadingProgress: nr
}, Symbol.toStringTag, { value: "Module" })), or = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: o = !1,
  onEnter: s,
  onLeave: c,
  dependencies: u = []
}) => {
  const v = {
    rootMargin: t,
    threshold: n
  };
  C(() => {
    const d = r == null ? void 0 : r.current;
    if (!d)
      return;
    const g = (p, m) => {
      p.forEach((b) => {
        b.isIntersecting && s ? (s(b), o && m.unobserve(b.target)) : !b.isIntersecting && c && c(b);
      });
    }, f = new IntersectionObserver(g, v);
    return f.observe(d), () => {
      f.unobserve(d);
    };
  }, u);
}, ir = (r) => {
  const [t, n] = A(!1);
  return or({
    ...r,
    onEnter: () => n(!0),
    onLeave: () => n(!1)
  }), t;
}, sr = (r, t, n) => {
  C(() => (fe.ticker.add(r, t, n), () => fe.ticker.remove(r)), [t, n, r]);
}, Er = ({
  children: r,
  isReverse: t = !1,
  speed: n = 1,
  style: o,
  ...s
}) => {
  const c = j(null), u = j(null), v = j(null), d = ir({
    targetRef: c,
    once: !1
  }), g = j(0);
  return sr(() => {
    if (!d)
      return;
    const f = c.current, p = u.current, m = v.current;
    if (!f || !p || !m)
      return;
    const b = fe.ticker.deltaRatio() / 1e3, E = f.clientWidth / p.clientWidth;
    g.current += b * n * E, g.current >= 1 && (g.current = 0), t ? (p.style.transform = `translateX(${g.current * -100}%)`, m.style.transform = `translateX(${100 - g.current * 100}%)`) : (p.style.transform = `translateX(${g.current * 100}%)`, m.style.transform = `translateX(${g.current * 100 - 200}%)`);
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: c,
      style: {
        overflow: "hidden",
        ...o || {}
      },
      ...s,
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ l.jsx("div", { ref: u, children: r }),
            /* @__PURE__ */ l.jsx("div", { ref: v, children: r })
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
  return k(
    () => t.split(`
`).flatMap((c, u, v) => [
      ...c.split(o).map(
        (d, g) => d === " " ? /* @__PURE__ */ l.jsx("span", { ...n, children: " " }, `${u}-${g}`) : /* @__PURE__ */ l.jsx("span", { ...n, children: d }, `${u}-${g}`)
      ),
      u < v.length - 1 ? /* @__PURE__ */ l.jsx("br", {}, u) : null
    ]),
    [o, t, n]
  );
}, ar = G((r, t) => {
  const { fill: n, style: o, ...s } = r;
  return /* @__PURE__ */ l.jsx(
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
ar.displayName = "Video";
const Rr = ({
  focusTarget: r
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    onFocus: () => {
      var t;
      return (t = r.current) == null ? void 0 : t.focus();
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
), cr = G(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: o,
    circular: s,
    children: c,
    style: u,
    ...v
  }, d) => {
    const [g, f] = A(t === 0), p = !!c;
    return C(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: d,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...p ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...u
        },
        ...v,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...g ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              r === "skeleton" ? /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    width: s != null && s.width ? s == null ? void 0 : s.width : "24px",
                    height: s != null && s.height ? s == null ? void 0 : s.height : "24px",
                    border: (s == null ? void 0 : s.border) || "2px solid #fff",
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
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              p && /* @__PURE__ */ l.jsx("div", { style: { visibility: "hidden" }, children: c })
            ]
          }
        )
      }
    );
  }
);
cr.displayName = "Loader";
const ur = typeof document < "u" ? Ft : C, he = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = j(0), s = j(0), c = P(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [r, t]);
  C(() => (o.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(s.current);
  }), n);
}, lr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, fr = () => {
  console.log(lr);
}, dr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, _r = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = P(
    (o) => {
      r && dr(o);
    },
    [r]
  );
  he({
    onResize: ({ winW: o }) => n(o),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && fr();
  }, [t, n]);
}, Tr = () => {
  const [r, t] = A(null), n = P(() => {
    const o = window.ontouchstart, s = navigator.maxTouchPoints;
    o !== void 0 && 0 < s ? t(!0) : t(!1);
  }, []);
  return he({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, le = "scroll", jr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const o = j(null), [s, c] = At(
    (f, p) => {
      switch (p.type) {
        case le:
          return o.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    o.current
  ), u = j(0), v = j(0), d = () => window.scrollY || document.documentElement.scrollTop, g = P(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > u.current + r && o.current !== "down" ? c({ type: le, payload: "down" }) : f < u.current - r && o.current !== "up" && c({ type: le, payload: "up" }), u.current = f;
    }, t);
  }, [t, r]);
  return C(() => (u.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), s;
}, Cr = (r, t) => {
  const [n, o] = A(null), s = P(
    (c) => {
      switch (r) {
        case "max":
          o(t >= c);
          break;
        case "min":
          o(t <= c);
          break;
      }
    },
    [r, t]
  );
  return he({
    onResize: ({ winW: c }) => s(c),
    debounce: 100,
    dependencies: [s]
  }), C(() => s(window.innerWidth), [s]), n;
}, Or = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: o = 600,
  height: s = 800
}) => {
  const c = k(() => encodeURIComponent(r), [r]), u = k(
    () => `height=${s},width=${o}`,
    [s, o]
  ), v = k(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${c}&t=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [c, n, u]
  ), d = k(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${c}&text=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [c, u, n]
  ), g = k(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${c}&text=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [c, u, n]
  ), f = k(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: n,
            url: t || c
          });
        } catch {
          return;
        }
      }
    }),
    [n, c, t]
  ), [p, m] = A(!1), b = k(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          m(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: v,
    X: d,
    LINE: g,
    share: f,
    copy: b,
    isCopied: p
  };
}, vr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, pr = (r) => {
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
}, Pr = (r) => {
  const [t, n] = A({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return ur(() => {
    const o = navigator.userAgent, s = vr(o), c = pr(o);
    n({
      mobileOS: s,
      isMobile: /Mobi/.test(o),
      renderingEngine: c,
      userAgent: o,
      testing: r && r(o)
    });
  }, []), t;
};
export {
  wr as Accordion,
  Er as AutoScrollContainer,
  Rr as FocusTrap,
  br as FormField,
  cr as Loader,
  xr as LoadingProgress,
  Vt as ModalButton,
  mr as SpiceWrapper,
  Sr as SplitText,
  Ut as StickyItem,
  yr as Tab,
  ar as Video,
  Pr as useDeviceDetector,
  sr as useFrame,
  or as useIntersectionObserver,
  ir as useIsIntersecting,
  Tr as useIsTouchDevice,
  ur as useIsomorphicLayoutEffect,
  Cr as useMediaQuery,
  Nt as useOverflowDispatch,
  tr as useResizeObserver,
  jr as useScrollDirection,
  Or as useShare,
  _r as useStarter,
  he as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
