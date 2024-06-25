"use client";
import Ue, { createContext as V, useContext as B, useState as $, useCallback as P, forwardRef as X, useRef as C, useEffect as T, useMemo as D, memo as $t, useLayoutEffect as At, useReducer as Lt } from "react";
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
  var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(h, f, p) {
    var g, d = {}, m = null, x = null;
    p !== void 0 && (m = "" + p), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (g in f)
      o.call(f, g) && !u.hasOwnProperty(g) && (d[g] = f[g]);
    if (h && h.defaultProps)
      for (g in f = h.defaultProps, f)
        d[g] === void 0 && (d[g] = f[g]);
    return { $$typeof: t, type: h, key: m, ref: x, props: d, _owner: s.current };
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
    var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = S && e[S] || e[A];
      return typeof i == "function" ? i : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          c[v - 1] = arguments[v];
        te("error", e, c);
      }
    }
    function te(e, i, c) {
      {
        var v = F.ReactDebugCurrentFrame, b = v.getStackAddendum();
        b !== "" && (i += "%s", c = c.concat([b]));
        var E = c.map(function(w) {
          return String(w);
        });
        E.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var re = !1, nt = !1, ot = !1, it = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || st || e === s || e === p || e === g || it || e === x || re || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === d || e.$$typeof === a || e.$$typeof === h || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ut(e, i, c) {
      var v = e.displayName;
      if (v)
        return v;
      var b = i.displayName || i.name || "";
      return b !== "" ? c + "(" + b + ")" : c;
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
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var i = e;
            return me(i) + ".Consumer";
          case a:
            var c = e;
            return me(c._context) + ".Provider";
          case f:
            return ut(e, e.render, "ForwardRef");
          case d:
            var v = e.displayName || null;
            return v !== null ? v : L(e.type) || "Memo";
          case m: {
            var b = e, E = b._payload, w = b._init;
            try {
              return L(w(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, z = 0, ye, we, xe, be, Ee, Se, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ct() {
      {
        if (z === 0) {
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
        z++;
      }
    }
    function lt() {
      {
        if (z--, z === 0) {
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
        z < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = F.ReactCurrentDispatcher, oe;
    function G(e, i, c) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var v = b.stack.trim().match(/\n( *(at )?)/);
            oe = v && v[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, J;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ft();
    }
    function je(e, i) {
      if (!e || ie)
        return "";
      {
        var c = J.get(e);
        if (c !== void 0)
          return c;
      }
      var v;
      ie = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ne.current, ne.current = null, ct();
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
            } catch (W) {
              v = W;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (W) {
              v = W;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            v = W;
          }
          e();
        }
      } catch (W) {
        if (W && v && typeof W.stack == "string") {
          for (var y = W.stack.split(`
`), O = v.stack.split(`
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
        ie = !1, ne.current = E, lt(), Error.prepareStackTrace = b;
      }
      var Y = e ? e.displayName || e.name : "", Me = Y ? G(Y) : "";
      return typeof e == "function" && J.set(e, Me), Me;
    }
    function dt(e, i, c) {
      return je(e, !1);
    }
    function pt(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function K(e, i, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, pt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case p:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return dt(e.render);
          case d:
            return K(e.type, i, c);
          case m: {
            var v = e, b = v._payload, E = v._init;
            try {
              return K(E(b), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Te = F.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var i = e._owner, c = K(e.type, e._source, i ? i.type : null);
        Te.setExtraStackFrame(c);
      } else
        Te.setExtraStackFrame(null);
    }
    function ht(e, i, c, v, b) {
      {
        var E = Function.call.bind(Q);
        for (var w in e)
          if (E(e, w)) {
            var y = void 0;
            try {
              if (typeof e[w] != "function") {
                var O = Error((v || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              y = e[w](i, w, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              y = _;
            }
            y && !(y instanceof Error) && (Z(b), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, w, typeof y), Z(null)), y instanceof Error && !(y.message in Ce) && (Ce[y.message] = !0, Z(b), j("Failed %s type: %s", c, y.message), Z(null));
          }
      }
    }
    var vt = Array.isArray;
    function se(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
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
      if (Q.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (Q.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, i) {
      if (typeof e.ref == "string" && U.current && i && U.current.stateNode !== i) {
        var c = L(U.current.type);
        ae[c] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(U.current.type), e.ref), ae[c] = !0);
      }
    }
    function Et(e, i) {
      {
        var c = function() {
          Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function St(e, i) {
      {
        var c = function() {
          De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var _t = function(e, i, c, v, b, E, w) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: c,
        props: w,
        // Record the component responsible for creating this element.
        _owner: E
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
        value: v
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Rt(e, i, c, v, b) {
      {
        var E, w = {}, y = null, O = null;
        c !== void 0 && (Pe(c), y = "" + c), xt(i) && (Pe(i.key), y = "" + i.key), wt(i) && (O = i.ref, bt(i, b));
        for (E in i)
          Q.call(i, E) && !yt.hasOwnProperty(E) && (w[E] = i[E]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (E in _)
            w[E] === void 0 && (w[E] = _[E]);
        }
        if (y || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && Et(w, R), O && St(w, R);
        }
        return _t(e, y, O, b, v, U.current, w);
      }
    }
    var ue = F.ReactCurrentOwner, Fe = F.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var i = e._owner, c = K(e.type, e._source, i ? i.type : null);
        Fe.setExtraStackFrame(c);
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
          var i = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function Ct(e) {
      {
        var i = $e();
        if (!i) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function Le(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ct(i);
        if (Ae[c])
          return;
        Ae[c] = !0;
        var v = "";
        e && e._owner && e._owner !== ue.current && (v = " It was passed a child from " + L(e._owner.type) + "."), N(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), N(null);
      }
    }
    function We(e, i) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var c = 0; c < e.length; c++) {
            var v = e[c];
            le(v) && Le(v, i);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = k(e);
          if (typeof b == "function" && b !== e.entries)
            for (var E = b.call(e), w; !(w = E.next()).done; )
              le(w.value) && Le(w.value, i);
        }
      }
    }
    function Tt(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === d))
          c = i.propTypes;
        else
          return;
        if (c) {
          var v = L(i);
          ht(c, e.props, "prop", v, e);
        } else if (i.PropTypes !== void 0 && !ce) {
          ce = !0;
          var b = L(i);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var i = Object.keys(e.props), c = 0; c < i.length; c++) {
          var v = i[c];
          if (v !== "children" && v !== "key") {
            N(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function ke(e, i, c, v, b, E) {
      {
        var w = at(e);
        if (!w) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(b);
          O ? y += O : y += $e();
          var _;
          e === null ? _ = "null" : se(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (L(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, y);
        }
        var R = Rt(e, i, c, b, E);
        if (R == null)
          return R;
        if (w) {
          var I = i.children;
          if (I !== void 0)
            if (v)
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
    function Pt(e, i, c) {
      return ke(e, i, c, !0);
    }
    function It(e, i, c) {
      return ke(e, i, c, !1);
    }
    var Dt = It, Ft = Pt;
    H.Fragment = o, H.jsx = Dt, H.jsxs = Ft;
  }()), H;
}
process.env.NODE_ENV === "production" ? pe.exports = Wt() : pe.exports = kt();
var l = pe.exports;
const qe = V(!0), He = V((n) => !n), Mt = ({ children: n }) => {
  const [t, r] = $(!0);
  return /* @__PURE__ */ l.jsx(qe.Provider, { value: t, children: /* @__PURE__ */ l.jsx(He.Provider, { value: r, children: n }) });
}, Nt = ({ children: n }) => {
  const t = B(qe);
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
      children: n
    }
  );
}, mr = ({ children: n }) => /* @__PURE__ */ l.jsx(Mt, { children: /* @__PURE__ */ l.jsx(Nt, { children: n }) }), Yt = () => B(He), Ve = ({ formProps: n }) => {
  const { style: t, ...r } = n;
  return /* @__PURE__ */ l.jsx(
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
  const s = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ l.jsx("option", { hidden: !0, children: a }) : null;
  }, u = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ l.jsxs(
    "select",
    {
      ...o,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: u(),
      children: [
        /* @__PURE__ */ l.jsx(s, {}),
        t.options.map((a) => /* @__PURE__ */ l.jsx("option", { value: a, children: a }, a))
      ]
    }
  );
}, Be = ({
  layoutType: n,
  formPropsArr: t,
  label: r,
  FormItem: o,
  errors: s
}) => {
  const u = P(
    (a) => !s || !s[a] ? null : s[a],
    [s]
  );
  if (n === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      r && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ l.jsx(o, { formProps: t[0] }),
      u(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      r && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: r }),
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
  if (n === "radio-check") {
    const a = t.map(
      ({ id: h, value: f, style: p, optionLabel: g, ...d }) => /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx(
          o,
          {
            formProps: {
              id: h,
              value: f,
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
                ...p || {}
              },
              ...d
            }
          }
        ),
        /* @__PURE__ */ l.jsx("label", { htmlFor: h, children: g || f })
      ] }, h)
    );
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      r && /* @__PURE__ */ l.jsx("label", { children: r }),
      /* @__PURE__ */ l.jsx("ul", { children: a }),
      u(0)
    ] });
  }
}, Bt = ({ formProps: n }) => {
  const { isTextarea: t, ...r } = n;
  if (t)
    return /* @__PURE__ */ l.jsx("textarea", { ...r, ...t });
}, yr = ({
  label: n,
  formProps: t,
  errors: r,
  ...o
}) => {
  const s = t, u = s[0].type, a = s.length, h = !!s[0].isSelect, f = !!s[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && a > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = P(
    (d) => Be({
      layoutType: a === 1 ? "block" : "flex",
      formPropsArr: s,
      label: n,
      FormItem: d,
      errors: r
    }),
    [r, s, n, a]
  ), g = P(() => h ? p(Vt) : f ? p(Bt) : u === "radio" || u === "checkbox" ? Be({
    layoutType: "radio-check",
    formPropsArr: s,
    label: n,
    FormItem: Ve,
    errors: r
  }) : p(Ve), [r, s, n, h, f, p, u]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...o, children: /* @__PURE__ */ l.jsx(g, {}) });
}, he = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), ze = (n) => {
  const t = document.documentElement.style, r = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", r.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", r.overflow = "");
}, zt = ".spice__modal_close", Ut = X(
  ({ children: n, dialog: t, callback: r, focusTarget: o, ...s }, u) => {
    const {
      children: a,
      style: h,
      ...f
    } = t, p = C(null), g = P(() => {
      var m;
      ze("add"), p.current.showModal(), (m = o == null ? void 0 : o.current) == null || m.focus(), r != null && r.onOpen && r.onOpen(p.current);
    }, [r, o]), d = P(async () => {
      r != null && r.onClose && await he(r.onClose(p.current)), ze("remove"), p.current.close();
    }, [r]);
    return T(() => {
      const m = p.current.querySelectorAll(zt);
      if (m)
        return m.forEach(
          (x) => x.addEventListener("click", d)
        ), () => {
          m.forEach(
            (x) => x.removeEventListener("click", d)
          );
        };
    }, [d]), T(() => {
      const m = (x) => {
        var A;
        ((A = p.current) == null ? void 0 : A.hasAttribute("open")) && x.key === "Escape" && d();
      };
      return window.addEventListener("keydown", m), () => {
        window.removeEventListener("keydown", m);
      };
    }, [d]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          ref: u,
          onClick: () => {
            g();
          },
          ...s,
          children: n
        }
      ),
      /* @__PURE__ */ l.jsx(
        "dialog",
        {
          ref: p,
          onClick: (m) => {
            m.target === p.current && d();
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
            ...h || {}
          },
          ...f,
          children: a
        }
      )
    ] });
  }
);
Ut.displayName = "ModalButton";
const qt = X(
  ({ children: n, ...t }, r) => {
    const o = Yt();
    return T(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ l.jsx("div", { ref: r, ...t, children: n });
  }
);
qt.displayName = "StickyItem";
const Xe = X((n, t) => {
  const { fill: r, style: o, ...s } = n;
  return /* @__PURE__ */ l.jsx(
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
      ...s
    }
  );
});
Xe.displayName = "Video";
const wr = (n) => {
  const t = C(null), [r, o] = $(!1), { fallback: s, ...u } = n;
  return T(() => {
    var a;
    (a = t.current) == null || a.play().then(() => {
      o(!1);
    }).catch(() => {
      o(!0);
    });
  }, []), r ? s : /* @__PURE__ */ l.jsx(Xe, { ref: t, ...u });
}, Ht = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = V(Ht), Je = V(
  () => {
  }
), Xt = ({ children: n, defaultValue: t }) => {
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
  return /* @__PURE__ */ l.jsx(Ge.Provider, { value: r, children: /* @__PURE__ */ l.jsx(Je.Provider, { value: o, children: n }) });
}, Ke = () => B(Ge), ve = () => B(Je), Gt = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = ve(), s = Ke(), u = P(() => {
    s.current === t || s.isLeaving || o((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
      next: t
    }));
  }, [o, s, t]);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: u,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      ...r,
      children: n
    }
  );
}, Qe = ({ content: n, isOpen: t }) => {
  const r = n.querySelectorAll("a,button");
  if (!r)
    return;
  const o = t ? "0" : "-1";
  r.forEach((s) => {
    s.setAttribute("tabindex", o);
  });
}, Jt = ({
  children: n,
  value: t,
  callback: r,
  style: o,
  ...s
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const u = C(!0), a = C(null), h = ve(), f = Ke(), p = f.current === t && !f.isLeaving;
  return T(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    f.prev === t && (async () => (r != null && r.onClose && await he(r.onClose(a.current)), h((g) => ({
      ...g,
      isLeaving: !1,
      prev: "",
      current: g.next,
      next: ""
    }))))(), p && r != null && r.onOpen && r.onOpen(a.current);
  }, [f, h, r, t, p]), T(() => {
    Qe({
      content: a.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      style: {
        ...f.current !== t ? {
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
      "aria-hidden": f.current !== t,
      ...s,
      children: n
    }
  );
}, Kt = () => {
  const n = ve();
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
  Button: Gt,
  Content: Jt,
  Context: Xt,
  useTabSwitch: Kt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = V(Qt), et = V(() => {
}), Zt = ({ children: n, defaultValue: t }) => {
  const [r, o] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Ze.Provider, { value: r, children: /* @__PURE__ */ l.jsx(et.Provider, { value: o, children: n }) });
}, tt = () => B(Ze), er = () => B(et), tr = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), s = er(), u = D(
    () => !!o.defaultValue.find((f) => f === t),
    [o, t]
  ), [a, h] = $(u);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        s((f) => ({
          ...f,
          toggle: a,
          target: t
        })), h(!a);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": a,
      ...r,
      children: n
    }
  );
}, rr = ({
  targetRef: n,
  callback: t,
  debounce: r = 100,
  dependencies: o = []
}) => {
  const s = C(0), u = C(!0);
  T(() => {
    const a = new ResizeObserver((f) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(f[0].target);
      }, r);
    }), h = n.current;
    if (h)
      return a.observe(h), () => {
        a.unobserve(h), clearTimeout(s.current);
      };
  }, o);
}, nr = ({
  value: n,
  callback: t,
  children: r,
  ...o
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = tt(), u = D(
    () => !!s.defaultValue.find((d) => d === n),
    [s, n]
  ), [a, h] = $(u);
  D(() => {
    s.target === n && h(!a);
  }, [s.target, s.toggle]);
  const f = C(!0), p = C(null), g = C(null);
  return T(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const d = {
      height: g.current.getBoundingClientRect().height,
      target: p.current
    };
    a ? t.onOpen(d) : t.onClose(d);
  }, [a, t]), T(() => {
    Qe({ content: p.current, isOpen: a });
  }, [a]), rr({
    targetRef: g,
    callback: (d) => {
      const m = d.getBoundingClientRect().height;
      a && (p.current.style.height = `${m}px`);
    },
    dependencies: [a],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: p,
      style: {
        overflow: "hidden",
        height: u ? "auto" : "0px"
      },
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ l.jsx("div", { ref: g, ...o, children: r })
    }
  );
}, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tr,
  Content: nr,
  Context: Zt
}, Symbol.toStringTag, { value: "Module" })), or = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: r,
  hundredsRef: o,
  onProgress: s,
  onStart: u,
  onComplete: a
}) => {
  const h = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), f = C(null), p = P(
    ({
      digitContainer: d,
      numbersTarget: m,
      digit: x,
      digitNumber: S,
      currentPercent: A,
      limit: k,
      destination: F
    }) => {
      if (h[x] !== S && A <= k) {
        const j = S.toString(), te = (Math.min(8, S) + 1).toString(), re = A >= k;
        m[0].innerText = j, m[1].innerText = re ? "0" : te, s && s({
          digitContainer: d,
          percent: A,
          digit: x,
          destination: F,
          duration: n / (F / x)
        }), h[x] = S;
      }
    },
    [h, s, n]
  ), g = P(
    (d) => (d > 100 && (d = 100), new Promise((m) => {
      if (d === 0)
        return;
      const x = {
        ones: t.current.querySelectorAll("div"),
        tens: r.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(f.current), f.current = setInterval(async () => {
        const S = h.to += 1, A = async () => {
          clearInterval(f.current), S > 100 && a && await he(a(x.getAll())), m(S - 1);
        };
        S === 1 && u && u(x.getAll()), S > d && await A();
        const k = Math.floor(S / 100) % 100, F = Math.floor(S / 10) % 10, j = S % 10;
        p({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: S,
          numbersTarget: x.ones,
          limit: 90,
          destination: d
        }), p({
          digitContainer: r.current,
          digit: 10,
          digitNumber: F,
          currentPercent: S,
          numbersTarget: x.tens,
          limit: 90,
          destination: d
        }), h[100] !== k && (x.hundreds[1].innerText = k.toString(), s && s({
          digitContainer: o.current,
          percent: S,
          digit: 100,
          destination: d,
          duration: n / (d / 10)
        }), h[100] = k);
      }, Math.max(1e3 / 60, n / d * 1e3));
    })),
    [
      h,
      p,
      r,
      o,
      t,
      a,
      s,
      u,
      n
    ]
  );
  return T(() => () => {
    clearInterval(f.current);
  }, []), g;
}, rt = $t(
  X((n, t) => /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("div", { ...n, children: "0" }),
        /* @__PURE__ */ l.jsx("div", { ...n, children: "0" })
      ]
    }
  ))
);
rt.displayName = "Digit";
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: or
}, Symbol.toStringTag, { value: "Module" })), ir = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: r = 0,
  once: o = !1,
  onEnter: s,
  onLeave: u,
  dependencies: a = []
}) => {
  const h = {
    rootMargin: t,
    threshold: r
  };
  T(() => {
    const f = n == null ? void 0 : n.current;
    if (!f)
      return;
    const p = (d, m) => {
      d.forEach((x) => {
        x.isIntersecting && s ? (s(x), o && m.unobserve(x.target)) : !x.isIntersecting && u && u(x);
      });
    }, g = new IntersectionObserver(p, h);
    return g.observe(f), () => {
      g.unobserve(f);
    };
  }, a);
}, sr = (n) => {
  const [t, r] = $(!1);
  return ir({
    ...n,
    onEnter: () => r(!0),
    onLeave: () => r(!1)
  }), t;
}, ar = (n, t, r) => {
  T(() => (de.ticker.add(n, t, r), () => de.ticker.remove(n)), [t, r, n]);
}, Sr = ({
  children: n,
  isReverse: t = !1,
  speed: r = 1,
  style: o,
  ...s
}) => {
  const u = C(null), a = C(null), h = C(null), f = sr({
    targetRef: u,
    once: !1
  }), p = C(0);
  return ar(() => {
    if (!f)
      return;
    const g = u.current, d = a.current, m = h.current;
    if (!g || !d || !m)
      return;
    const x = de.ticker.deltaRatio() / 1e3, S = g.clientWidth / d.clientWidth;
    p.current += x * r * S, p.current >= 1 && (p.current = 0), t ? (d.style.transform = `translateX(${p.current * -100}%)`, m.style.transform = `translateX(${100 - p.current * 100}%)`) : (d.style.transform = `translateX(${p.current * 100}%)`, m.style.transform = `translateX(${p.current * 100 - 200}%)`);
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: u,
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
            /* @__PURE__ */ l.jsx("div", { ref: a, children: n }),
            /* @__PURE__ */ l.jsx("div", { ref: h, children: n })
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
`).flatMap((u, a, h) => [
      ...u.split(o).map(
        (f, p) => f === " " ? /* @__PURE__ */ l.jsx("span", { ...r, children: " " }, `${a}-${p}`) : /* @__PURE__ */ l.jsx("span", { ...r, children: f }, `${a}-${p}`)
      ),
      a < h.length - 1 ? /* @__PURE__ */ l.jsx("br", {}, a) : null
    ]),
    [o, t, r]
  );
}, Rr = ({
  focusTarget: n
}) => /* @__PURE__ */ l.jsx(
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
), ur = X(
  ({
    loader: n = "skeleton",
    delay: t = 1e3,
    onView: r,
    skeleton: o,
    circular: s,
    children: u,
    style: a,
    ...h
  }, f) => {
    const [p, g] = $(t === 0), d = !!u;
    return T(() => {
      t !== 0 && setTimeout(() => g(!0), t);
    }, [t]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: f,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...d ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...a
        },
        ...h,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...p ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (r == null ? void 0 : r.transitionDuration) || "0.3s",
                transitionTimingFunction: (r == null ? void 0 : r.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              n === "skeleton" ? /* @__PURE__ */ l.jsx(
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
              ) : n === "circular" ? /* @__PURE__ */ l.jsx(
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
              ) : n,
              d && /* @__PURE__ */ l.jsx("div", { style: { visibility: "hidden" }, children: u })
            ]
          }
        )
      }
    );
  }
);
ur.displayName = "Loader";
const cr = typeof document < "u" ? At : T, ee = ({
  callback: n,
  debounce: t = 100,
  dependencies: r = []
}) => {
  const o = C(0), s = C(0), u = P(() => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  }, [n, t]);
  T(() => (o.current = window.innerWidth, window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u), clearTimeout(s.current);
  }), r);
}, lr = ({
  initWinW: n,
  winW: t,
  threshold: r
}) => {
  let o = !(n <= r);
  t <= r ? o && window.location.reload() : !o && window.location.reload();
}, fr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, dr = () => {
  console.log(fr);
}, pr = (n) => {
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
    (s) => {
      t && pr(s);
    },
    [t]
  );
  ee({
    callback: ({ initWinW: s, winW: u }) => {
      n && n.forEach(
        (a) => lr({
          initWinW: s,
          winW: u,
          threshold: a
        })
      ), o(u);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), r && process.env.NODE_ENV !== "development" && dr();
  }, [r, o]);
}, hr = () => {
  const [n, t] = $(null), r = P(() => {
    const o = window.ontouchstart, s = navigator.maxTouchPoints;
    o !== void 0 && 0 < s ? t(!0) : t(!1);
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
  const o = C(null), [s, u] = Lt(
    (g, d) => {
      switch (d.type) {
        case fe:
          return o.current = d.payload, d.payload;
        default:
          return g;
      }
    },
    o.current
  ), a = C(0), h = C(0), f = () => window.scrollY || document.documentElement.scrollTop, p = P(() => {
    clearTimeout(h.current), h.current = setTimeout(() => {
      const g = f();
      g > a.current + n && o.current !== "down" ? u({ type: fe, payload: "down" }) : g < a.current - n && o.current !== "up" && u({ type: fe, payload: "up" }), a.current = g;
    }, t);
  }, [t, n]);
  return T(() => (a.current = f(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(h.current);
  }), r), s;
}, Tr = ({ type: n, width: t }) => {
  const [r, o] = $(null), s = P(
    (u) => {
      switch (n) {
        case "max":
          o(t >= u);
          break;
        case "min":
          o(t <= u);
          break;
      }
    },
    [n, t]
  );
  return ee({
    callback: ({ winW: u }) => s(u),
    debounce: 100,
    dependencies: []
  }), T(() => s(window.innerWidth), [s]), r;
}, Or = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: r = "",
  width: o = 600,
  height: s = 800
}) => {
  const u = D(() => encodeURIComponent(n), [n]), a = D(
    () => `height=${s},width=${o}`,
    [s, o]
  ), h = D(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [u, r, a]
  ), f = D(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [u, a, r]
  ), p = D(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${r}`,
          "newwindow",
          a
        );
      }
    }),
    [u, a, r]
  ), g = D(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: r,
            url: t || u
          });
        } catch {
          return;
        }
      }
    }),
    [r, u, t]
  ), [d, m] = $(!1), x = D(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          m(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: h,
    X: f,
    LINE: p,
    share: g,
    copy: x,
    isCopied: d
  };
}, Pr = (n) => {
  const t = hr();
  cr(() => {
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
  yr as FormField,
  ur as Loader,
  Er as LoadingProgress,
  wr as LowPowerVideo,
  Ut as ModalButton,
  mr as SpiceWrapper,
  _r as SplitText,
  qt as StickyItem,
  xr as Tab,
  Xe as Video,
  Pr as use100vh,
  ar as useFrame,
  ir as useIntersectionObserver,
  sr as useIsIntersecting,
  hr as useIsTouchDevice,
  cr as useIsomorphicLayoutEffect,
  Tr as useMediaQuery,
  Yt as useOverflowDispatch,
  rr as useResizeObserver,
  Cr as useScrollDirection,
  Or as useShare,
  jr as useStarter,
  ee as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
