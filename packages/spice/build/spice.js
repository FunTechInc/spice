"use client";
import Ue, { createContext as Y, useContext as z, useState as A, useCallback as P, useRef as C, useEffect as j, forwardRef as pe, useMemo as D, memo as At, useLayoutEffect as Lt, useReducer as Ft } from "react";
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
  var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(d, l, p) {
    var h, v = {}, x = null, E = null;
    p !== void 0 && (x = "" + p), l.key !== void 0 && (x = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (h in l)
      i.call(l, h) && !u.hasOwnProperty(h) && (v[h] = l[h]);
    if (d && d.defaultProps)
      for (h in l = d.defaultProps, l)
        v[h] === void 0 && (v[h] = l[h]);
    return { $$typeof: t, type: d, key: x, ref: E, props: v, _owner: a.current };
  }
  return q.Fragment = r, q.jsx = s, q.jsxs = s, q;
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
    var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, W = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = S && e[S] || e[W];
      return typeof o == "function" ? o : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          c[g - 1] = arguments[g];
        ee("error", e, c);
      }
    }
    function ee(e, o, c) {
      {
        var g = $.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (o += "%s", c = c.concat([w]));
        var b = c.map(function(y) {
          return String(y);
        });
        b.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var te = !1, nt = !1, ot = !1, it = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || st || e === a || e === p || e === h || it || e === E || te || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === v || e.$$typeof === s || e.$$typeof === d || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ct(e, o, c) {
      var g = e.displayName;
      if (g)
        return g;
      var w = o.displayName || o.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
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
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var o = e;
            return me(o) + ".Consumer";
          case s:
            var c = e;
            return me(c._context) + ".Provider";
          case l:
            return ct(e, e.render, "ForwardRef");
          case v:
            var g = e.displayName || null;
            return g !== null ? g : L(e.type) || "Memo";
          case x: {
            var w = e, b = w._payload, y = w._init;
            try {
              return L(y(b));
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
    function ut() {
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
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = $.ReactCurrentDispatcher, ne;
    function G(e, o, c) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ne = g && g[1] || "";
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
    function Te(e, o) {
      if (!e || oe)
        return "";
      {
        var c = X.get(e);
        if (c !== void 0)
          return c;
      }
      var g;
      oe = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, ut();
      try {
        if (o) {
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
            } catch (F) {
              g = F;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (F) {
              g = F;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            g = F;
          }
          e();
        }
      } catch (F) {
        if (F && g && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = g.stack.split(`
`), _ = m.length - 1, R = O.length - 1; _ >= 1 && R >= 0 && m[_] !== O[R]; )
            R--;
          for (; _ >= 1 && R >= 0; _--, R--)
            if (m[_] !== O[R]) {
              if (_ !== 1 || R !== 1)
                do
                  if (_--, R--, R < 0 || m[_] !== O[R]) {
                    var I = `
` + m[_].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, I), I;
                  }
                while (_ >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = b, lt(), Error.prepareStackTrace = w;
      }
      var V = e ? e.displayName || e.name : "", Me = V ? G(V) : "";
      return typeof e == "function" && X.set(e, Me), Me;
    }
    function dt(e, o, c) {
      return Te(e, !1);
    }
    function pt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function J(e, o, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, pt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return dt(e.render);
          case v:
            return J(e.type, o, c);
          case x: {
            var g = e, w = g._payload, b = g._init;
            try {
              return J(b(w), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ce = {}, je = $.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var o = e._owner, c = J(e.type, e._source, o ? o.type : null);
        je.setExtraStackFrame(c);
      } else
        je.setExtraStackFrame(null);
    }
    function vt(e, o, c, g, w) {
      {
        var b = Function.call.bind(K);
        for (var y in e)
          if (b(e, y)) {
            var m = void 0;
            try {
              if (typeof e[y] != "function") {
                var O = Error((g || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[y](o, y, g, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              m = _;
            }
            m && !(m instanceof Error) && (Q(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", c, y, typeof m), Q(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, Q(w), T("Failed %s type: %s", c, m.message), Q(null));
          }
      }
    }
    var ht = Array.isArray;
    function ie(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = $.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, se;
    se = {};
    function wt(e) {
      if (K.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (K.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, o) {
      if (typeof e.ref == "string" && U.current && o && U.current.stateNode !== o) {
        var c = L(U.current.type);
        se[c] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(U.current.type), e.ref), se[c] = !0);
      }
    }
    function Et(e, o) {
      {
        var c = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function St(e, o) {
      {
        var c = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var _t = function(e, o, c, g, w, b, y) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: c,
        props: y,
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
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rt(e, o, c, g, w) {
      {
        var b, y = {}, m = null, O = null;
        c !== void 0 && (Pe(c), m = "" + c), xt(o) && (Pe(o.key), m = "" + o.key), wt(o) && (O = o.ref, bt(o, w));
        for (b in o)
          K.call(o, b) && !yt.hasOwnProperty(b) && (y[b] = o[b]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (b in _)
            y[b] === void 0 && (y[b] = _[b]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(y, R), O && St(y, R);
        }
        return _t(e, m, O, w, g, U.current, y);
      }
    }
    var ae = $.ReactCurrentOwner, $e = $.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var o = e._owner, c = J(e.type, e._source, o ? o.type : null);
        $e.setExtraStackFrame(c);
      } else
        $e.setExtraStackFrame(null);
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
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var Le = {};
    function Ct(e) {
      {
        var o = Ae();
        if (!o) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function Fe(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ct(o);
        if (Le[c])
          return;
        Le[c] = !0;
        var g = "";
        e && e._owner && e._owner !== ae.current && (g = " It was passed a child from " + L(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, g), N(null);
      }
    }
    function ke(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var c = 0; c < e.length; c++) {
            var g = e[c];
            ue(g) && Fe(g, o);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = k(e);
          if (typeof w == "function" && w !== e.entries)
            for (var b = w.call(e), y; !(y = b.next()).done; )
              ue(y.value) && Fe(y.value, o);
        }
      }
    }
    function jt(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === v))
          c = o.propTypes;
        else
          return;
        if (c) {
          var g = L(o);
          vt(c, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !ce) {
          ce = !0;
          var w = L(o);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var g = o[c];
          if (g !== "children" && g !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, o, c, g, w, b) {
      {
        var y = at(e);
        if (!y) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Tt(w);
          O ? m += O : m += Ae();
          var _;
          e === null ? _ = "null" : ie(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (L(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, m);
        }
        var R = Rt(e, o, c, w, b);
        if (R == null)
          return R;
        if (y) {
          var I = o.children;
          if (I !== void 0)
            if (g)
              if (ie(I)) {
                for (var V = 0; V < I.length; V++)
                  ke(I[V], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(I, e);
        }
        return e === i ? Ot(R) : jt(R), R;
      }
    }
    function Pt(e, o, c) {
      return We(e, o, c, !0);
    }
    function It(e, o, c) {
      return We(e, o, c, !1);
    }
    var Dt = It, $t = Pt;
    H.Fragment = i, H.jsx = Dt, H.jsxs = $t;
  }()), H;
}
process.env.NODE_ENV === "production" ? de.exports = kt() : de.exports = Wt();
var f = de.exports;
const qe = Y(!0), He = Y((n) => !n), Mt = ({ children: n }) => {
  const [t, r] = A(!0);
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
}, hr = ({ children: n }) => /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(Nt, { children: n }) }), Vt = () => z(He), Ye = ({ formProps: n }) => {
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
}, Yt = ({ formProps: n }) => {
  const { isSelect: t, style: r, ...i } = n;
  if (!t)
    return;
  const a = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ f.jsx("option", { hidden: !0, children: s }) : null;
  }, u = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ f.jsxs(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: u(),
      children: [
        /* @__PURE__ */ f.jsx(a, {}),
        t.options.map((s) => /* @__PURE__ */ f.jsx("option", { value: s, children: s }, s))
      ]
    }
  );
}, ze = ({
  layoutType: n,
  formPropsArr: t,
  label: r,
  FormItem: i,
  errors: a
}) => {
  const u = P(
    (s) => !a || !a[s] ? null : a[s],
    [a]
  );
  if (n === "block")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ f.jsx(i, { formProps: t[0] }),
      u(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ f.jsxs("ul", { children: [
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(i, { formProps: t[0] }),
          u(0)
        ] }),
        /* @__PURE__ */ f.jsxs("li", { children: [
          /* @__PURE__ */ f.jsx(i, { formProps: t[1] }),
          u(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const s = t.map(
      ({ id: d, value: l, style: p, optionLabel: h, ...v }) => /* @__PURE__ */ f.jsxs("li", { children: [
        /* @__PURE__ */ f.jsx(
          i,
          {
            formProps: {
              id: d,
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
                ...p || {}
              },
              ...v
            }
          }
        ),
        /* @__PURE__ */ f.jsx("label", { htmlFor: d, children: h || l })
      ] }, d)
    );
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      r && /* @__PURE__ */ f.jsx("label", { children: r }),
      /* @__PURE__ */ f.jsx("ul", { children: s }),
      u(0)
    ] });
  }
}, zt = ({ formProps: n }) => {
  const { isTextarea: t, ...r } = n;
  if (t)
    return /* @__PURE__ */ f.jsx("textarea", { ...r, ...t });
}, gr = ({
  label: n,
  formProps: t,
  errors: r,
  ...i
}) => {
  const a = t, u = a[0].type, s = a.length, d = !!a[0].isSelect, l = !!a[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && s > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const p = P(
    (v) => ze({
      layoutType: s === 1 ? "block" : "flex",
      formPropsArr: a,
      label: n,
      FormItem: v,
      errors: r
    }),
    [r, a, n, s]
  ), h = P(() => d ? p(Yt) : l ? p(zt) : u === "radio" || u === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: a,
    label: n,
    FormItem: Ye,
    errors: r
  }) : p(Ye), [r, a, n, d, l, p, u]);
  return /* @__PURE__ */ f.jsx("fieldset", { ...i, children: /* @__PURE__ */ f.jsx(h, {}) });
}, ve = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Be = (n) => {
  const t = document.documentElement.style, r = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", r.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", r.overflow = "");
}, Bt = ".spice__modal_close", mr = ({
  children: n,
  dialog: t,
  callback: r,
  ...i
}) => {
  const {
    children: a,
    style: u,
    ...s
  } = t, d = C(null), l = P(() => {
    Be("add"), d.current.showModal(), r != null && r.onOpen && r.onOpen(d.current);
  }, [r]), p = P(async () => {
    r != null && r.onClose && await ve(r.onClose(d.current)), Be("remove"), d.current.close();
  }, [r]);
  return j(() => {
    const h = d.current.querySelectorAll(Bt);
    if (h)
      return h.forEach(
        (v) => v.addEventListener("click", p)
      ), () => {
        h.forEach(
          (v) => v.removeEventListener("click", p)
        );
      };
  }, [p]), j(() => {
    const h = (v) => {
      var E;
      ((E = d.current) == null ? void 0 : E.hasAttribute("open")) && v.key === "Escape" && p();
    };
    return document.addEventListener("keydown", h), () => {
      document.removeEventListener("keydown", h);
    };
  }, [p]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: () => {
          l();
        },
        ...i,
        children: n
      }
    ),
    /* @__PURE__ */ f.jsx(
      "dialog",
      {
        ref: d,
        onClick: (h) => {
          h.target === d.current && p();
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
          ...u || {}
        },
        ...s,
        children: a
      }
    )
  ] });
}, Ut = pe(
  ({ children: n, ...t }, r) => {
    const i = Vt();
    return j(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ f.jsx("div", { ref: r, ...t, children: n });
  }
);
Ut.displayName = "StickyItem";
const Ge = pe((n, t) => {
  const { fill: r, style: i, ...a } = n;
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
        ...i
      } : i,
      ...a
    }
  );
});
Ge.displayName = "Video";
const yr = (n) => {
  const t = C(null), [r, i] = A(!1), { fallback: a, ...u } = n;
  return j(() => {
    var s;
    (s = t.current) == null || s.play().then(() => {
      i(!1);
    }).catch(() => {
      i(!0);
    });
  }, []), r ? a : /* @__PURE__ */ f.jsx(Ge, { ref: t, ...u });
}, qt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Xe = Y(qt), Je = Y(
  () => {
  }
), Ht = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [r, i] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ f.jsx(Xe.Provider, { value: r, children: /* @__PURE__ */ f.jsx(Je.Provider, { value: i, children: n }) });
}, Ke = () => z(Xe), he = () => z(Je), Gt = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = he(), a = Ke(), u = P(() => {
    a.current === t || a.isLeaving || i((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: t
    }));
  }, [i, a, t]);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: u,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": a.current === t,
      ...r,
      children: n
    }
  );
}, Qe = ({ content: n, isOpen: t }) => {
  const r = n.querySelectorAll("a,button");
  if (!r)
    return;
  const i = t ? "0" : "-1";
  r.forEach((a) => {
    a.setAttribute("tabindex", i);
  });
}, Xt = ({
  children: n,
  value: t,
  callback: r,
  style: i,
  ...a
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const u = C(!0), s = C(null), d = he(), l = Ke(), p = l.current === t && !l.isLeaving;
  return j(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    if (!l.isAnimation) {
      p && r != null && r.onReset && r.onReset(s.current);
      return;
    }
    l.prev === t && (async () => (r != null && r.onClose && await ve(r.onClose(s.current)), d((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), p && r != null && r.onOpen && r.onOpen(s.current);
  }, [l, d, r, t, p]), j(() => {
    Qe({
      content: s.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: s,
      style: {
        ...l.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...i
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      ...a,
      children: n
    }
  );
}, Jt = () => {
  const n = he();
  return (t, r) => {
    n((i) => ({
      isAnimation: r,
      isLeaving: r,
      prev: r ? i.current : "",
      current: r ? i.current : t,
      next: r ? t : ""
    }));
  };
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}), Qt = ({ children: n, defaultValue: t }) => {
  const [r, i] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ f.jsx(Ze.Provider, { value: r, children: /* @__PURE__ */ f.jsx(et.Provider, { value: i, children: n }) });
}, tt = () => z(Ze), Zt = () => z(et), er = ({ children: n, value: t, ...r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = tt(), a = Zt(), u = D(
    () => !!i.defaultValue.find((l) => l === t),
    [i, t]
  ), [s, d] = A(u);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: () => {
        a((l) => ({
          ...l,
          toggle: s,
          target: t
        })), d(!s);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": s,
      ...r,
      children: n
    }
  );
}, tr = ({
  targetRef: n,
  callback: t,
  debounce: r = 100,
  dependencies: i = []
}) => {
  const a = C(0), u = C(!0);
  j(() => {
    const s = new ResizeObserver((l) => {
      clearTimeout(a.current), a.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(l[0].target);
      }, r);
    }), d = n.current;
    if (d)
      return s.observe(d), () => {
        s.unobserve(d), clearTimeout(a.current);
      };
  }, i);
}, rr = ({
  value: n,
  callback: t,
  children: r,
  ...i
}) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const a = tt(), u = D(
    () => !!a.defaultValue.find((v) => v === n),
    [a, n]
  ), [s, d] = A(u);
  D(() => {
    a.target === n && d(!s);
  }, [a.target, a.toggle]);
  const l = C(!0), p = C(null), h = C(null);
  return j(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    const v = {
      height: h.current.getBoundingClientRect().height,
      target: p.current
    };
    s ? t.onOpen(v) : t.onClose(v);
  }, [s, t]), j(() => {
    Qe({ content: p.current, isOpen: s });
  }, [s]), tr({
    targetRef: h,
    callback: (v) => {
      const x = v.getBoundingClientRect().height;
      s && (p.current.style.height = `${x}px`);
    },
    dependencies: [s],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: p,
      style: {
        overflow: "hidden",
        height: u ? "auto" : "0px"
      },
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ f.jsx("div", { ref: h, ...i, children: r })
    }
  );
}, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: er,
  Content: rr,
  Context: Qt
}, Symbol.toStringTag, { value: "Module" })), nr = ({
  tempo: n = 3,
  onesRef: t,
  tensRef: r,
  hundredsRef: i,
  onProgress: a,
  onStart: u,
  onComplete: s
}) => {
  const d = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = C(null), p = P(
    ({
      digitContainer: v,
      numbersTarget: x,
      digit: E,
      digitNumber: S,
      currentPercent: W,
      limit: k,
      destination: $
    }) => {
      if (d[E] !== S && W <= k) {
        const T = S.toString(), ee = (Math.min(8, S) + 1).toString(), te = W >= k;
        x[0].innerText = T, x[1].innerText = te ? "0" : ee, a && a({
          digitContainer: v,
          percent: W,
          digit: E,
          destination: $,
          duration: n / ($ / E)
        }), d[E] = S;
      }
    },
    [d, a, n]
  ), h = P(
    (v) => (v > 100 && (v = 100), new Promise((x) => {
      if (v === 0)
        return;
      const E = {
        ones: t.current.querySelectorAll("div"),
        tens: r.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const S = d.to += 1, W = async () => {
          clearInterval(l.current), S > 100 && s && await ve(s(E.getAll())), x(S - 1);
        };
        S === 1 && u && u(E.getAll()), S > v && await W();
        const k = Math.floor(S / 100) % 100, $ = Math.floor(S / 10) % 10, T = S % 10;
        p({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: S,
          numbersTarget: E.ones,
          limit: 90,
          destination: v
        }), p({
          digitContainer: r.current,
          digit: 10,
          digitNumber: $,
          currentPercent: S,
          numbersTarget: E.tens,
          limit: 90,
          destination: v
        }), d[100] !== k && (E.hundreds[1].innerText = k.toString(), a && a({
          digitContainer: i.current,
          percent: S,
          digit: 100,
          destination: v,
          duration: n / (v / 10)
        }), d[100] = k);
      }, Math.max(1e3 / 60, n / v * 1e3));
    })),
    [
      d,
      p,
      r,
      i,
      t,
      s,
      a,
      u,
      n
    ]
  );
  return j(() => () => {
    clearInterval(l.current);
  }, []), h;
}, rt = At(
  pe((n, t) => /* @__PURE__ */ f.jsxs(
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
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: nr
}, Symbol.toStringTag, { value: "Module" })), or = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: r = 0,
  once: i = !1,
  callback: a,
  dependencies: u = []
}) => {
  const s = {
    rootMargin: t,
    threshold: r
  };
  j(() => {
    const d = n == null ? void 0 : n.current;
    if (!d)
      return;
    const l = (h, v) => {
      h.forEach((x) => {
        x.isIntersecting && a.onEnter ? (a.onEnter(x), i && v.unobserve(x.target)) : !x.isIntersecting && a.onLeave && a.onLeave(x);
      });
    }, p = new IntersectionObserver(l, s);
    return p.observe(d), () => {
      p.unobserve(d);
    };
  }, u);
}, ir = (n) => {
  const [t, r] = A(!1);
  return or({
    ...n,
    callback: {
      onEnter: () => r(!0),
      onLeave: () => r(!1)
    }
  }), t;
}, sr = (n, t, r) => {
  j(() => (fe.ticker.add(n, t, r), () => fe.ticker.remove(n)), [t, r, n]);
}, Er = ({
  children: n,
  isReverse: t = !1,
  speed: r = 1,
  style: i,
  ...a
}) => {
  const u = C(null), s = C(null), d = C(null), l = ir({
    targetRef: u,
    once: !1
  }), p = C(0);
  return sr(() => {
    if (!l)
      return;
    const h = u.current, v = s.current, x = d.current;
    if (!h || !v || !x)
      return;
    const E = fe.ticker.deltaRatio() / 1e3, S = h.clientWidth / v.clientWidth;
    p.current += E * r * S, p.current >= 1 && (p.current = 0), t ? (v.style.transform = `translateX(${p.current * -100}%)`, x.style.transform = `translateX(${100 - p.current * 100}%)`) : (v.style.transform = `translateX(${p.current * 100}%)`, x.style.transform = `translateX(${p.current * 100 - 200}%)`);
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: u,
      style: {
        overflow: "hidden",
        ...i || {}
      },
      ...a,
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ f.jsx("div", { ref: s, children: n }),
            /* @__PURE__ */ f.jsx("div", { ref: d, children: n })
          ]
        }
      )
    }
  );
}, Sr = ({
  type: n = "chars",
  text: t,
  ...r
}) => {
  const i = n === "chars" ? "" : " ";
  return D(
    () => t.split(`
`).flatMap((u, s, d) => [
      ...u.split(i).map(
        (l, p) => l === " " ? /* @__PURE__ */ f.jsx("span", { ...r, children: " " }, `${s}-${p}`) : /* @__PURE__ */ f.jsx("span", { ...r, children: l }, `${s}-${p}`)
      ),
      s < d.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, s) : null
    ]),
    [i, t, r]
  );
}, ar = typeof document < "u" ? Lt : j, Z = ({
  callback: n,
  debounce: t = 100,
  dependencies: r = []
}) => {
  const i = C(0), a = C(0), u = P(() => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [n, t]);
  j(() => (i.current = window.innerWidth, window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u), clearTimeout(a.current);
  }), r);
}, cr = ({
  initWinW: n,
  winW: t,
  threshold: r
}) => {
  let i = !(n <= r);
  t <= r ? i && window.location.reload() : !i && window.location.reload();
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
}, fr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const r = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== r && t.setAttribute("content", r);
}, _r = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: r = !1
}) => {
  const i = P(
    (a) => {
      t && fr(a);
    },
    [t]
  );
  Z({
    callback: ({ initWinW: a, winW: u }) => {
      n && n.forEach(
        (s) => cr({
          initWinW: a,
          winW: u,
          threshold: s
        })
      ), i(u);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    document.body.dataset.spiceRendered = "true", i(window.innerWidth), r && process.env.NODE_ENV !== "development" && lr();
  }, [r, i]);
}, dr = () => {
  const [n, t] = A(null), r = P(() => {
    const i = window.ontouchstart, a = navigator.maxTouchPoints;
    i !== void 0 && 0 < a ? t(!0) : t(!1);
  }, []);
  return Z({
    callback: () => r(),
    debounce: 100,
    dependencies: []
  }), j(() => r(), [r]), n;
}, le = "scroll", Rr = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: r = []
}) => {
  const i = C(null), [a, u] = Ft(
    (h, v) => {
      switch (v.type) {
        case le:
          return i.current = v.payload, v.payload;
        default:
          return h;
      }
    },
    i.current
  ), s = C(0), d = C(0), l = () => window.scrollY || document.documentElement.scrollTop, p = P(() => {
    clearTimeout(d.current), d.current = setTimeout(() => {
      const h = l();
      h > s.current + n && i.current !== "down" ? u({ type: le, payload: "down" }) : h < s.current - n && i.current !== "up" && u({ type: le, payload: "up" }), s.current = h;
    }, t);
  }, [t, n]);
  return j(() => (s.current = l(), window.addEventListener("scroll", p, { passive: !0 }), () => {
    window.removeEventListener("scroll", p), clearTimeout(d.current);
  }), r), a;
}, Tr = ({ type: n, width: t }) => {
  const [r, i] = A(null), a = P(
    (u) => {
      switch (n) {
        case "max":
          i(t >= u);
          break;
        case "min":
          i(t <= u);
          break;
      }
    },
    [n, t]
  );
  return Z({
    callback: ({ winW: u }) => a(u),
    debounce: 100,
    dependencies: []
  }), j(() => a(window.innerWidth), [a]), r;
}, Cr = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: r = "",
  width: i = 600,
  height: a = 800
}) => {
  const u = D(() => encodeURIComponent(n), [n]), s = D(
    () => `height=${a},width=${i}`,
    [a, i]
  ), d = D(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${r}`,
          "newwindow",
          s
        );
      }
    }),
    [u, r, s]
  ), l = D(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${r}`,
          "newwindow",
          s
        );
      }
    }),
    [u, s, r]
  ), p = D(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${r}`,
          "newwindow",
          s
        );
      }
    }),
    [u, s, r]
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
            url: t || u
          });
        } catch {
          return;
        }
      }
    }),
    [r, u, t]
  ), [v, x] = A(!1), E = D(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          x(!0);
        });
      }
    }),
    [n]
  );
  return {
    Facebook: d,
    X: l,
    LINE: p,
    share: h,
    copy: E,
    isCopied: v
  };
}, jr = (n) => {
  const t = dr();
  ar(() => {
    !t || !n.current || (n.current.style.height = `${window.screen.height}px`);
  }, [t, n]), Z({
    callback: ({ winH: r }) => {
      n.current && (t ? n.current.style.height = `${window.screen.height}px` : n.current.style.height = `${r}px`);
    },
    dependencies: [t]
  });
};
export {
  xr as Accordion,
  Er as AutoScrollContainer,
  gr as FormField,
  br as LoadingProgress,
  yr as LowPowerVideo,
  mr as ModalButton,
  hr as SpiceWrapper,
  Sr as SplitText,
  Ut as StickyItem,
  wr as Tab,
  Ge as Video,
  jr as use100vh,
  sr as useFrame,
  or as useIntersectionObserver,
  ir as useIsIntersecting,
  dr as useIsTouchDevice,
  ar as useIsomorphicLayoutEffect,
  Tr as useMediaQuery,
  Vt as useOverflowDispatch,
  tr as useResizeObserver,
  Rr as useScrollDirection,
  Cr as useShare,
  _r as useStarter,
  Z as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
