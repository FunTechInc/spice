"use client";
import Ue, { createContext as Y, useContext as z, useState as A, useCallback as P, useRef as C, useEffect as T, forwardRef as pe, useMemo as D, memo as At, useLayoutEffect as Ft, useReducer as Lt } from "react";
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
  function s(p, l, v) {
    var h, d = {}, w = null, _ = null;
    v !== void 0 && (w = "" + v), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (_ = l.ref);
    for (h in l)
      i.call(l, h) && !u.hasOwnProperty(h) && (d[h] = l[h]);
    if (p && p.defaultProps)
      for (h in l = p.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: t, type: p, key: w, ref: _, props: d, _owner: a.current };
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
    var n = Ue, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E = Symbol.iterator, W = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = E && e[E] || e[W];
      return typeof o == "function" ? o : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          c[g - 1] = arguments[g];
        ee("error", e, c);
      }
    }
    function ee(e, o, c) {
      {
        var g = $.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (o += "%s", c = c.concat([x]));
        var b = c.map(function(y) {
          return String(y);
        });
        b.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var te = !1, nt = !1, ot = !1, it = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || st || e === a || e === v || e === h || it || e === _ || te || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === d || e.$$typeof === s || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function ct(e, o, c) {
      var g = e.displayName;
      if (g)
        return g;
      var x = o.displayName || o.name || "";
      return x !== "" ? c + "(" + x + ")" : c;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case v:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var o = e;
            return me(o) + ".Consumer";
          case s:
            var c = e;
            return me(c._context) + ".Provider";
          case l:
            return ct(e, e.render, "ForwardRef");
          case d:
            var g = e.displayName || null;
            return g !== null ? g : F(e.type) || "Memo";
          case w: {
            var x = e, b = x._payload, y = x._init;
            try {
              return F(y(b));
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
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = $.ReactCurrentDispatcher, ne;
    function G(e, o, c) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
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
    function je(e, o) {
      if (!e || oe)
        return "";
      {
        var c = X.get(e);
        if (c !== void 0)
          return c;
      }
      var g;
      oe = !0;
      var x = Error.prepareStackTrace;
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
          for (var m = L.stack.split(`
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
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, I), I;
                  }
                while (S >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, re.current = b, lt(), Error.prepareStackTrace = x;
      }
      var V = e ? e.displayName || e.name : "", Me = V ? G(V) : "";
      return typeof e == "function" && X.set(e, Me), Me;
    }
    function dt(e, o, c) {
      return je(e, !1);
    }
    function pt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function J(e, o, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, pt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case v:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return dt(e.render);
          case d:
            return J(e.type, o, c);
          case w: {
            var g = e, x = g._payload, b = g._init;
            try {
              return J(b(x), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Ce = {}, Te = $.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var o = e._owner, c = J(e.type, e._source, o ? o.type : null);
        Te.setExtraStackFrame(c);
      } else
        Te.setExtraStackFrame(null);
    }
    function vt(e, o, c, g, x) {
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
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (Q(x), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", c, y, typeof m), Q(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, Q(x), j("Failed %s type: %s", c, m.message), Q(null));
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
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = $.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, se;
    se = {};
    function yt(e) {
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
        var c = F(U.current.type);
        se[c] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(U.current.type), e.ref), se[c] = !0);
      }
    }
    function Et(e, o) {
      {
        var c = function() {
          Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
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
          De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var _t = function(e, o, c, g, x, b, y) {
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
        value: x
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rt(e, o, c, g, x) {
      {
        var b, y = {}, m = null, O = null;
        c !== void 0 && (Pe(c), m = "" + c), xt(o) && (Pe(o.key), m = "" + o.key), yt(o) && (O = o.ref, bt(o, x));
        for (b in o)
          K.call(o, b) && !wt.hasOwnProperty(b) && (y[b] = o[b]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (b in S)
            y[b] === void 0 && (y[b] = S[b]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(y, R), O && St(y, R);
        }
        return _t(e, m, O, x, g, U.current, y);
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
          var e = F(ae.current.type);
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
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var Fe = {};
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
    function Le(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ct(o);
        if (Fe[c])
          return;
        Fe[c] = !0;
        var g = "";
        e && e._owner && e._owner !== ae.current && (g = " It was passed a child from " + F(e._owner.type) + "."), N(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, g), N(null);
      }
    }
    function ke(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var c = 0; c < e.length; c++) {
            var g = e[c];
            ue(g) && Le(g, o);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = k(e);
          if (typeof x == "function" && x !== e.entries)
            for (var b = x.call(e), y; !(y = b.next()).done; )
              ue(y.value) && Le(y.value, o);
        }
      }
    }
    function Tt(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === d))
          c = o.propTypes;
        else
          return;
        if (c) {
          var g = F(o);
          vt(c, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !ce) {
          ce = !0;
          var x = F(o);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var g = o[c];
          if (g !== "children" && g !== "key") {
            N(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function We(e, o, c, g, x, b) {
      {
        var y = at(e);
        if (!y) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(x);
          O ? m += O : m += Ae();
          var S;
          e === null ? S = "null" : ie(e) ? S = "array" : e !== void 0 && e.$$typeof === t ? (S = "<" + (F(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var R = Rt(e, o, c, x, b);
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
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(I, e);
        }
        return e === i ? Ot(R) : Tt(R), R;
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
      ({ id: p, value: l, style: v, optionLabel: h, ...d }) => /* @__PURE__ */ f.jsxs("li", { children: [
        /* @__PURE__ */ f.jsx(
          i,
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
  const a = t, u = a[0].type, s = a.length, p = !!a[0].isSelect, l = !!a[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && s > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = P(
    (d) => ze({
      layoutType: s === 1 ? "block" : "flex",
      formPropsArr: a,
      label: n,
      FormItem: d,
      errors: r
    }),
    [r, a, n, s]
  ), h = P(() => p ? v(Yt) : l ? v(zt) : u === "radio" || u === "checkbox" ? ze({
    layoutType: "radio-check",
    formPropsArr: a,
    label: n,
    FormItem: Ye,
    errors: r
  }) : v(Ye), [r, a, n, p, l, v, u]);
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
  focusTarget: i,
  ...a
}) => {
  const {
    children: u,
    style: s,
    ...p
  } = t, l = C(null), v = P(() => {
    var d;
    Be("add"), l.current.showModal(), (d = i == null ? void 0 : i.current) == null || d.focus(), r != null && r.onOpen && r.onOpen(l.current);
  }, [r, i]), h = P(async () => {
    r != null && r.onClose && await ve(r.onClose(l.current)), Be("remove"), l.current.close();
  }, [r]);
  return T(() => {
    const d = l.current.querySelectorAll(Bt);
    if (d)
      return d.forEach(
        (w) => w.addEventListener("click", h)
      ), () => {
        d.forEach(
          (w) => w.removeEventListener("click", h)
        );
      };
  }, [h]), T(() => {
    const d = (w) => {
      var E;
      ((E = l.current) == null ? void 0 : E.hasAttribute("open")) && w.key === "Escape" && h();
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
        ...a,
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
          ...s || {}
        },
        ...p,
        children: u
      }
    )
  ] });
}, Ut = pe(
  ({ children: n, ...t }, r) => {
    const i = Vt();
    return T(() => (i(() => !1), () => {
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
const wr = (n) => {
  const t = C(null), [r, i] = A(!1), { fallback: a, ...u } = n;
  return T(() => {
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
  const u = C(!0), s = C(null), p = he(), l = Ke(), v = l.current === t && !l.isLeaving;
  return T(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    if (!l.isAnimation) {
      v && r != null && r.onReset && r.onReset(s.current);
      return;
    }
    l.prev === t && (async () => (r != null && r.onClose && await ve(r.onClose(s.current)), p((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), v && r != null && r.onOpen && r.onOpen(s.current);
  }, [l, p, r, t, v]), T(() => {
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
  ), [s, p] = A(u);
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      onClick: () => {
        a((l) => ({
          ...l,
          toggle: s,
          target: t
        })), p(!s);
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
  T(() => {
    const s = new ResizeObserver((l) => {
      clearTimeout(a.current), a.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(l[0].target);
      }, r);
    }), p = n.current;
    if (p)
      return s.observe(p), () => {
        s.unobserve(p), clearTimeout(a.current);
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
    () => !!a.defaultValue.find((d) => d === n),
    [a, n]
  ), [s, p] = A(u);
  D(() => {
    a.target === n && p(!s);
  }, [a.target, a.toggle]);
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
    s ? t.onOpen(d) : t.onClose(d);
  }, [s, t]), T(() => {
    Qe({ content: v.current, isOpen: s });
  }, [s]), tr({
    targetRef: h,
    callback: (d) => {
      const w = d.getBoundingClientRect().height;
      s && (v.current.style.height = `${w}px`);
    },
    dependencies: [s],
    debounce: 100
  }), /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: v,
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
  const p = D(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = C(null), v = P(
    ({
      digitContainer: d,
      numbersTarget: w,
      digit: _,
      digitNumber: E,
      currentPercent: W,
      limit: k,
      destination: $
    }) => {
      if (p[_] !== E && W <= k) {
        const j = E.toString(), ee = (Math.min(8, E) + 1).toString(), te = W >= k;
        w[0].innerText = j, w[1].innerText = te ? "0" : ee, a && a({
          digitContainer: d,
          percent: W,
          digit: _,
          destination: $,
          duration: n / ($ / _)
        }), p[_] = E;
      }
    },
    [p, a, n]
  ), h = P(
    (d) => (d > 100 && (d = 100), new Promise((w) => {
      if (d === 0)
        return;
      const _ = {
        ones: t.current.querySelectorAll("div"),
        tens: r.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const E = p.to += 1, W = async () => {
          clearInterval(l.current), E > 100 && s && await ve(s(_.getAll())), w(E - 1);
        };
        E === 1 && u && u(_.getAll()), E > d && await W();
        const k = Math.floor(E / 100) % 100, $ = Math.floor(E / 10) % 10, j = E % 10;
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
          digitNumber: $,
          currentPercent: E,
          numbersTarget: _.tens,
          limit: 90,
          destination: d
        }), p[100] !== k && (_.hundreds[1].innerText = k.toString(), a && a({
          digitContainer: i.current,
          percent: E,
          digit: 100,
          destination: d,
          duration: n / (d / 10)
        }), p[100] = k);
      }, Math.max(1e3 / 60, n / d * 1e3));
    })),
    [
      p,
      v,
      r,
      i,
      t,
      s,
      a,
      u,
      n
    ]
  );
  return T(() => () => {
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
  T(() => {
    const p = n == null ? void 0 : n.current;
    if (!p)
      return;
    const l = (h, d) => {
      h.forEach((w) => {
        w.isIntersecting && a.onEnter ? (a.onEnter(w), i && d.unobserve(w.target)) : !w.isIntersecting && a.onLeave && a.onLeave(w);
      });
    }, v = new IntersectionObserver(l, s);
    return v.observe(p), () => {
      v.unobserve(p);
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
  T(() => (fe.ticker.add(n, t, r), () => fe.ticker.remove(n)), [t, r, n]);
}, Er = ({
  children: n,
  isReverse: t = !1,
  speed: r = 1,
  style: i,
  ...a
}) => {
  const u = C(null), s = C(null), p = C(null), l = ir({
    targetRef: u,
    once: !1
  }), v = C(0);
  return sr(() => {
    if (!l)
      return;
    const h = u.current, d = s.current, w = p.current;
    if (!h || !d || !w)
      return;
    const _ = fe.ticker.deltaRatio() / 1e3, E = h.clientWidth / d.clientWidth;
    v.current += _ * r * E, v.current >= 1 && (v.current = 0), t ? (d.style.transform = `translateX(${v.current * -100}%)`, w.style.transform = `translateX(${100 - v.current * 100}%)`) : (d.style.transform = `translateX(${v.current * 100}%)`, w.style.transform = `translateX(${v.current * 100 - 200}%)`);
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
            /* @__PURE__ */ f.jsx("div", { ref: p, children: n })
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
`).flatMap((u, s, p) => [
      ...u.split(i).map(
        (l, v) => l === " " ? /* @__PURE__ */ f.jsx("span", { ...r, children: " " }, `${s}-${v}`) : /* @__PURE__ */ f.jsx("span", { ...r, children: l }, `${s}-${v}`)
      ),
      s < p.length - 1 ? /* @__PURE__ */ f.jsx("br", {}, s) : null
    ]),
    [i, t, r]
  );
}, _r = ({
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
), ar = typeof document < "u" ? Ft : T, Z = ({
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
  T(() => (i.current = window.innerWidth, window.addEventListener("resize", u), () => {
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
}, Rr = ({
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
  }), T(() => {
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
  }), T(() => r(), [r]), n;
}, le = "scroll", jr = ({
  threshold: n = 0,
  debounce: t = 10,
  dependencies: r = []
}) => {
  const i = C(null), [a, u] = Lt(
    (h, d) => {
      switch (d.type) {
        case le:
          return i.current = d.payload, d.payload;
        default:
          return h;
      }
    },
    i.current
  ), s = C(0), p = C(0), l = () => window.scrollY || document.documentElement.scrollTop, v = P(() => {
    clearTimeout(p.current), p.current = setTimeout(() => {
      const h = l();
      h > s.current + n && i.current !== "down" ? u({ type: le, payload: "down" }) : h < s.current - n && i.current !== "up" && u({ type: le, payload: "up" }), s.current = h;
    }, t);
  }, [t, n]);
  return T(() => (s.current = l(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(p.current);
  }), r), a;
}, Cr = ({ type: n, width: t }) => {
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
  }), T(() => a(window.innerWidth), [a]), r;
}, Tr = ({
  shareUrl: n,
  sharePath: t,
  shareTitle: r = "",
  width: i = 600,
  height: a = 800
}) => {
  const u = D(() => encodeURIComponent(n), [n]), s = D(
    () => `height=${a},width=${i}`,
    [a, i]
  ), p = D(
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
  ), v = D(
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
  ), [d, w] = A(!1), _ = D(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(n).then(() => {
          w(!0);
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
}, Or = (n) => {
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
  _r as FocusTrap,
  gr as FormField,
  br as LoadingProgress,
  wr as LowPowerVideo,
  mr as ModalButton,
  hr as SpiceWrapper,
  Sr as SplitText,
  Ut as StickyItem,
  yr as Tab,
  Ge as Video,
  Or as use100vh,
  sr as useFrame,
  or as useIntersectionObserver,
  ir as useIsIntersecting,
  dr as useIsTouchDevice,
  ar as useIsomorphicLayoutEffect,
  Cr as useMediaQuery,
  Vt as useOverflowDispatch,
  tr as useResizeObserver,
  jr as useScrollDirection,
  Tr as useShare,
  Rr as useStarter,
  Z as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
