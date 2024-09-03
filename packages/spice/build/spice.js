"use client";
import Ue, { createContext as B, useContext as z, useState as F, useCallback as P, forwardRef as G, useRef as T, useEffect as C, useMemo as k, memo as Dt, useLayoutEffect as At, useReducer as Ft } from "react";
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
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(v, d, g) {
    var f, p = {}, m = null, b = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (b = d.ref);
    for (f in d)
      o.call(d, f) && !u.hasOwnProperty(f) && (p[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: b, props: p, _owner: i.current };
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
var Ye;
function Lt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), x = Symbol.iterator, W = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[W];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          a[h - 1] = arguments[h];
        ee("error", e, a);
      }
    }
    function ee(e, s, a) {
      {
        var h = A.ReactDebugCurrentFrame, E = h.getStackAddendum();
        E !== "" && (s += "%s", a = a.concat([E]));
        var S = a.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var te = !1, rt = !1, nt = !1, ot = !1, it = !1, ge;
    ge = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || it || e === i || e === g || e === f || ot || e === b || te || rt || nt || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === c || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function at(e, s, a) {
      var h = e.displayName;
      if (h)
        return h;
      var E = s.displayName || s.name || "";
      return E !== "" ? a + "(" + E + ")" : a;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var s = e;
            return me(s) + ".Consumer";
          case c:
            var a = e;
            return me(a._context) + ".Provider";
          case d:
            return at(e, e.render, "ForwardRef");
          case p:
            var h = e.displayName || null;
            return h !== null ? h : $(e.type) || "Memo";
          case m: {
            var E = e, S = E._payload, w = E._init;
            try {
              return $(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, be, ye, we, xe, Ee, Se, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ct() {
      {
        if (V === 0) {
          be = console.log, ye = console.info, we = console.warn, xe = console.error, Ee = console.group, Se = console.groupCollapsed, _e = console.groupEnd;
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
              value: _e
            })
          });
        }
        V < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = A.ReactCurrentDispatcher, ne;
    function X(e, s, a) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (E) {
            var h = E.stack.trim().match(/\n( *(at )?)/);
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
    function je(e, s) {
      if (!e || oe)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var h;
      oe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = re.current, re.current = null, ct();
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
`), _ = y.length - 1, R = O.length - 1; _ >= 1 && R >= 0 && y[_] !== O[R]; )
            R--;
          for (; _ >= 1 && R >= 0; _--, R--)
            if (y[_] !== O[R]) {
              if (_ !== 1 || R !== 1)
                do
                  if (_--, R--, R < 0 || y[_] !== O[R]) {
                    var I = `
` + y[_].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, I), I;
                  }
                while (_ >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = S, ut(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? X(Y) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function ft(e, s, a) {
      return je(e, !1);
    }
    function dt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function K(e, s, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, dt(e));
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
            return K(e.type, s, a);
          case m: {
            var h = e, E = h._payload, S = h._init;
            try {
              return K(S(E), s, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Te = {}, Ce = A.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var s = e._owner, a = K(e.type, e._source, s ? s.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function vt(e, s, a, h, E) {
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
              y = e[w](s, w, h, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              y = _;
            }
            y && !(y instanceof Error) && (Q(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", a, w, typeof y), Q(null)), y instanceof Error && !(y.message in Te) && (Te[y.message] = !0, Q(E), j("Failed %s type: %s", a, y.message), Q(null));
          }
      }
    }
    var pt = Array.isArray;
    function ie(e) {
      return pt(e);
    }
    function ht(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, a = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), Oe(e);
    }
    var U = A.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, ke, se;
    se = {};
    function bt(e) {
      if (Z.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (Z.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, s) {
      if (typeof e.ref == "string" && U.current && s && U.current.stateNode !== s) {
        var a = $(U.current.type);
        se[a] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(U.current.type), e.ref), se[a] = !0);
      }
    }
    function xt(e, s) {
      {
        var a = function() {
          Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Et(e, s) {
      {
        var a = function() {
          ke || (ke = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var St = function(e, s, a, h, E, S, w) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
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
        value: E
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function _t(e, s, a, h, E) {
      {
        var S, w = {}, y = null, O = null;
        a !== void 0 && (Pe(a), y = "" + a), yt(s) && (Pe(s.key), y = "" + s.key), bt(s) && (O = s.ref, wt(s, E));
        for (S in s)
          Z.call(s, S) && !mt.hasOwnProperty(S) && (w[S] = s[S]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (S in _)
            w[S] === void 0 && (w[S] = _[S]);
        }
        if (y || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && xt(w, R), O && Et(w, R);
        }
        return St(e, y, O, E, h, U.current, w);
      }
    }
    var ae = A.ReactCurrentOwner, De = A.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var s = e._owner, a = K(e.type, e._source, s ? s.type : null);
        De.setExtraStackFrame(a);
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
          var e = $(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rt(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + s + ":" + a + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function jt(e) {
      {
        var s = Ae();
        if (!s) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (s = `

Check the top-level render call using <` + a + ">.");
        }
        return s;
      }
    }
    function $e(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = jt(s);
        if (Fe[a])
          return;
        Fe[a] = !0;
        var h = "";
        e && e._owner && e._owner !== ae.current && (h = " It was passed a child from " + $(e._owner.type) + "."), N(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, h), N(null);
      }
    }
    function Le(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var a = 0; a < e.length; a++) {
            var h = e[a];
            ue(h) && $e(h, s);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = D(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), w; !(w = S.next()).done; )
              ue(w.value) && $e(w.value, s);
        }
      }
    }
    function Tt(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var a;
        if (typeof s == "function")
          a = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === p))
          a = s.propTypes;
        else
          return;
        if (a) {
          var h = $(s);
          vt(a, e.props, "prop", h, e);
        } else if (s.PropTypes !== void 0 && !ce) {
          ce = !0;
          var E = $(s);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var s = Object.keys(e.props), a = 0; a < s.length; a++) {
          var h = s[a];
          if (h !== "children" && h !== "key") {
            N(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, s, a, h, E, S) {
      {
        var w = st(e);
        if (!w) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Rt(E);
          O ? y += O : y += Ae();
          var _;
          e === null ? _ = "null" : ie(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + ($(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, y);
        }
        var R = _t(e, s, a, E, S);
        if (R == null)
          return R;
        if (w) {
          var I = s.children;
          if (I !== void 0)
            if (h)
              if (ie(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  Le(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(I, e);
        }
        return e === o ? Ct(R) : Tt(R), R;
      }
    }
    function Ot(e, s, a) {
      return We(e, s, a, !0);
    }
    function Pt(e, s, a) {
      return We(e, s, a, !1);
    }
    var It = Pt, kt = Ot;
    H.Fragment = o, H.jsx = It, H.jsxs = kt;
  }()), H;
}
process.env.NODE_ENV === "production" ? de.exports = $t() : de.exports = Lt();
var l = de.exports;
const qe = B(!0), He = B((r) => !r), Wt = ({ children: r }) => {
  const [t, n] = F(!0);
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
  const i = () => {
    const c = t.defaultValue;
    return c ? /* @__PURE__ */ l.jsx("option", { hidden: !0, children: c }) : null;
  }, u = () => {
    const c = t.defaultSelectedIndex;
    if (c)
      return t.options[c];
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
      defaultValue: u(),
      children: [
        /* @__PURE__ */ l.jsx(i, {}),
        t.options.map((c) => /* @__PURE__ */ l.jsx("option", { value: c, children: c }, c))
      ]
    }
  );
}, ze = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: o,
  errors: i
}) => {
  const u = P(
    (c) => !i || !i[c] ? null : i[c],
    [i]
  );
  if (r === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
      u(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsxs("ul", { children: [
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
          u(0)
        ] }),
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(o, { formProps: t[1] }),
          u(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const c = t.map(
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
      /* @__PURE__ */ l.jsx("ul", { children: c }),
      u(0)
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
  const i = t, u = i[0].type, c = i.length, v = !!i[0].isSelect, d = !!i[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = P(
    (p) => ze({
      layoutType: c === 1 ? "block" : "flex",
      formPropsArr: i,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, i, r, c]
  ), f = P(() => v ? g(Yt) : d ? g(Bt) : u === "radio" || u === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: i,
    label: r,
    FormItem: Be,
    errors: n
  }) : g(Be), [n, i, r, v, d, g, u]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...o, children: /* @__PURE__ */ l.jsx(f, {}) });
}, ve = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ve = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, zt = ".spice__modal_close", Vt = G(
  ({ children: r, dialog: t, onOpen: n, onClose: o, focusTarget: i, ...u }, c) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = T(null), p = P(() => {
      var b;
      Ve("add"), f.current.showModal(), (b = i == null ? void 0 : i.current) == null || b.focus(), n && n(f.current);
    }, [n, i]), m = P(async () => {
      o && await ve(o(f.current)), Ve("remove"), f.current.close();
    }, [o]);
    return C(() => {
      const b = f.current.querySelectorAll(zt);
      if (b)
        return b.forEach(
          (x) => x.addEventListener("click", m)
        ), () => {
          b.forEach(
            (x) => x.removeEventListener("click", m)
          );
        };
    }, [m]), C(() => {
      const b = (x) => {
        var D;
        ((D = f.current) == null ? void 0 : D.hasAttribute("open")) && x.key === "Escape" && m();
      };
      return window.addEventListener("keydown", b), () => {
        window.removeEventListener("keydown", b);
      };
    }, [m]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          ref: c,
          onClick: () => {
            p();
          },
          ...u,
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
  const [n, o] = F({
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
  const o = pe(), i = Je(), u = P(() => {
    i.current === t || i.isLeaving || o((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [o, i, t]);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: u,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      ...n,
      children: r
    }
  );
}, Ke = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const o = t ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Xt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: o,
  onReset: i,
  style: u,
  ...c
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = T(!0), d = T(null), g = pe(), f = Je(), p = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && i && i(d.current);
      return;
    }
    f.prev === t && (async () => (o && await ve(o(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), p && n && n(d.current);
  }, [f, g, n, o, i, t, p]), C(() => {
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
        ...u
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...c,
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
  const [n, o] = F({
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
  const o = et(), i = Qt(), u = k(
    () => !!o.defaultValue.find((d) => d === t),
    [o, t]
  ), [c, v] = F(u);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        i((d) => ({
          ...d,
          toggle: c,
          target: t
        })), v(!c);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": c,
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
  const i = T(0), u = T(!0);
  C(() => {
    const c = new ResizeObserver((d) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return c.observe(v), () => {
        c.unobserve(v), clearTimeout(i.current);
      };
  }, o);
}, rr = ({
  value: r,
  onOpen: t,
  onClose: n,
  children: o,
  ...i
}) => {
  if (r === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const u = et(), c = k(
    () => !!u.defaultValue.find((m) => m === r),
    [u, r]
  ), [v, d] = F(c);
  k(() => {
    u.target === r && d(!v);
  }, [u.target, u.toggle]);
  const g = T(!0), f = T(null), p = T(null);
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
        height: c ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ l.jsx("div", { ref: p, ...i, children: o })
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
  onProgress: i,
  onStart: u,
  onComplete: c
}) => {
  const v = k(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = T(null), g = P(
    ({
      digitContainer: p,
      numbersTarget: m,
      digit: b,
      digitNumber: x,
      currentPercent: W,
      limit: D,
      destination: A
    }) => {
      if (v[b] !== x && W <= D) {
        const j = x.toString(), ee = (Math.min(8, x) + 1).toString(), te = W >= D;
        m[0].innerText = j, m[1].innerText = te ? "0" : ee, i && i({
          digitContainer: p,
          percent: W,
          digit: b,
          destination: A,
          duration: r / (A / b)
        }), v[b] = x;
      }
    },
    [v, i, r]
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
        const x = v.to += 1, W = async () => {
          clearInterval(d.current), x > 100 && c && await ve(c(b.getAll())), m(x - 1);
        };
        x === 1 && u && u(b.getAll()), x > p && await W();
        const D = Math.floor(x / 100) % 100, A = Math.floor(x / 10) % 10, j = x % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: x,
          numbersTarget: b.ones,
          limit: 90,
          destination: p
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: A,
          currentPercent: x,
          numbersTarget: b.tens,
          limit: 90,
          destination: p
        }), v[100] !== D && (b.hundreds[1].innerText = D.toString(), i && i({
          digitContainer: o.current,
          percent: x,
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
      c,
      i,
      u,
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
  onEnter: i,
  onLeave: u,
  dependencies: c = []
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
        b.isIntersecting && i ? (i(b), o && m.unobserve(b.target)) : !b.isIntersecting && u && u(b);
      });
    }, f = new IntersectionObserver(g, v);
    return f.observe(d), () => {
      f.unobserve(d);
    };
  }, c);
}, ir = (r) => {
  const [t, n] = F(!1);
  return or({
    ...r,
    onEnter: () => n(!0),
    onLeave: () => n(!1)
  }), t;
}, sr = (r, t, n) => {
  C(() => (fe.ticker.add(r, t, n), () => fe.ticker.remove(r)), [t, n, r]);
}, Er = ({
  children: r,
  speed: t = 1,
  style: n,
  ...o
}) => {
  const i = T(null), u = T(null), c = T(null), v = ir({
    targetRef: i,
    once: !1
  }), d = T(0);
  return sr(() => {
    if (!v)
      return;
    const g = i.current, f = u.current, p = c.current;
    if (!g || !f || !p)
      return;
    const m = fe.ticker.deltaRatio() / 1e3, b = g.clientWidth / f.clientWidth;
    if (d.current += m * Math.abs(t) * b, d.current >= 1 && (d.current = 0), t < 0) {
      const x = d.current * -100;
      f.style.transform = `translateX(${x}%)`, p.style.transform = `translateX(${x}%)`;
    } else {
      const x = d.current * 100;
      f.style.transform = `translateX(${x}%)`, p.style.transform = `translateX(${x - 200}%)`;
    }
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: i,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...o,
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ l.jsx("div", { ref: u, children: r }),
            /* @__PURE__ */ l.jsx("div", { ref: c, children: r })
          ]
        }
      )
    }
  );
}, Sr = ({
  type: r = "chars",
  text: t,
  exception: n,
  ...o
}) => {
  const i = r === "chars" ? "" : " ";
  return k(
    () => t.split(/(\n|###br\.[^#]+###|###br###)/).flatMap((c, v) => {
      var d;
      return c === `
` || c === "###br###" ? [null, /* @__PURE__ */ l.jsx("br", {}, v)] : c != null && c.match(/###br\.(.*?)###/) ? [
        null,
        /* @__PURE__ */ l.jsx(
          "br",
          {
            className: ((d = c.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : d[0]) || ""
          },
          v
        )
      ] : [
        ...c.split(i).map((g, f) => {
          if (n) {
            const p = n.find(
              (m) => m.selector === g
            );
            if (p)
              return /* @__PURE__ */ l.jsx(
                "span",
                {
                  ...o,
                  ...p.attributes,
                  children: g
                },
                `${v}-${f}`
              );
          }
          return g === " " ? /* @__PURE__ */ l.jsx("span", { ...o, children: " " }, `${v}-${f}`) : /* @__PURE__ */ l.jsx("span", { ...o, children: g }, `${v}-${f}`);
        }),
        null
      ];
    }),
    [i, t, o, n]
  );
}, ar = G((r, t) => {
  const { fill: n, style: o, ...i } = r;
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
      ...i
    }
  );
});
ar.displayName = "Video";
const _r = ({
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
    circular: i,
    children: u,
    style: c,
    ...v
  }, d) => {
    const [g, f] = F(t === 0), p = !!u;
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
          ...c
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
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              p && /* @__PURE__ */ l.jsx("div", { style: { visibility: "hidden" }, children: u })
            ]
          }
        )
      }
    );
  }
);
cr.displayName = "Loader";
const ur = typeof document < "u" ? At : C, he = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = T(0), i = T(0), u = P(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [r, t]);
  C(() => (o.current = window.innerWidth, window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u), clearTimeout(i.current);
  }), n);
}, lr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, fr = (r) => {
  let t = lr;
  typeof r == "string" && (t += r), console.log(t);
}, dr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Rr = ({
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
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && fr(t);
  }, [t, n]);
}, jr = () => {
  const [r, t] = F(null), n = P(() => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return he({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, le = "scroll", Tr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const o = T(null), [i, u] = Ft(
    (f, p) => {
      switch (p.type) {
        case le:
          return o.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    o.current
  ), c = T(0), v = T(0), d = () => window.scrollY || document.documentElement.scrollTop, g = P(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > c.current + r && o.current !== "down" ? u({ type: le, payload: "down" }) : f < c.current - r && o.current !== "up" && u({ type: le, payload: "up" }), c.current = f;
    }, t);
  }, [t, r]);
  return C(() => (c.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), i;
}, Cr = (r, t) => {
  const [n, o] = F(null), i = P(
    (u) => {
      switch (r) {
        case "max":
          o(t >= u);
          break;
        case "min":
          o(t <= u);
          break;
      }
    },
    [r, t]
  );
  return he({
    onResize: ({ winW: u }) => i(u),
    debounce: 100,
    dependencies: [i]
  }), C(() => i(window.innerWidth), [i]), n;
}, Or = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: o = 600,
  height: i = 800
}) => {
  const u = k(() => encodeURIComponent(r), [r]), c = k(
    () => `height=${i},width=${o}`,
    [i, o]
  ), v = k(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [u, n, c]
  ), d = k(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [u, c, n]
  ), g = k(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${n}`,
          "newwindow",
          c
        );
      }
    }),
    [u, c, n]
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
            url: t || u
          });
        } catch {
          return;
        }
      }
    }),
    [n, u, t]
  ), [p, m] = F(!1), b = k(
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
  const [t, n] = F({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return ur(() => {
    const o = navigator.userAgent, i = vr(o), u = pr(o);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(o),
      renderingEngine: u,
      userAgent: o,
      testing: r && r(o)
    });
  }, []), t;
};
export {
  wr as Accordion,
  Er as AutoScrollContainer,
  _r as FocusTrap,
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
  jr as useIsTouchDevice,
  ur as useIsomorphicLayoutEffect,
  Cr as useMediaQuery,
  Nt as useOverflowDispatch,
  tr as useResizeObserver,
  Tr as useScrollDirection,
  Or as useShare,
  Rr as useStarter,
  he as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
