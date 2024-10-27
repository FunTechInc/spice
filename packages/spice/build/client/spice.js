"use client";
import Ue, { createContext as z, useContext as V, useState as D, forwardRef as X, useRef as _, useCallback as k, useEffect as C, useMemo as F, memo as At, useLayoutEffect as Ft, useReducer as $t } from "react";
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
function Lt() {
  if (Be)
    return q;
  Be = 1;
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(v, d, h) {
    var f, p = {}, b = null, S = null;
    h !== void 0 && (b = "" + h), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (f in d)
      i.call(d, f) && !u.hasOwnProperty(f) && (p[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: v, key: b, ref: S, props: p, _owner: o.current };
  }
  return q.Fragment = n, q.jsx = c, q.jsxs = c, q;
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
function Wt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), w = Symbol.iterator, P = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = w && e[w] || e[P];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          l[g - 1] = arguments[g];
        te("error", e, l);
      }
    }
    function te(e, s, l) {
      {
        var g = A.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (s += "%s", l = l.concat([x]));
        var E = l.map(function(y) {
          return String(y);
        });
        E.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var re = !1, nt = !1, it = !1, ot = !1, st = !1, me;
    me = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || st || e === o || e === h || e === f || ot || e === S || re || nt || it || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === c || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ct(e, s, l) {
      var g = e.displayName;
      if (g)
        return g;
      var x = s.displayName || s.name || "";
      return x !== "" ? l + "(" + x + ")" : l;
    }
    function be(e) {
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
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var s = e;
            return be(s) + ".Consumer";
          case c:
            var l = e;
            return be(l._context) + ".Provider";
          case d:
            return ct(e, e.render, "ForwardRef");
          case p:
            var g = e.displayName || null;
            return g !== null ? g : $(e.type) || "Memo";
          case b: {
            var x = e, E = x._payload, y = x._init;
            try {
              return $(y(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, ye, xe, we, Ee, Se, je, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ut() {
      {
        if (U === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, je = console.groupCollapsed, _e = console.groupEnd;
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
    function lt() {
      {
        if (U--, U === 0) {
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
              value: je
            }),
            groupEnd: N({}, e, {
              value: _e
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = A.ReactCurrentDispatcher, ie;
    function J(e, s, l) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            ie = g && g[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var oe = !1, K;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ft();
    }
    function Te(e, s) {
      if (!e || oe)
        return "";
      {
        var l = K.get(e);
        if (l !== void 0)
          return l;
      }
      var g;
      oe = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ne.current, ne.current = null, ut();
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
          for (var m = L.stack.split(`
`), O = g.stack.split(`
`), j = m.length - 1, R = O.length - 1; j >= 1 && R >= 0 && m[j] !== O[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (m[j] !== O[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || m[j] !== O[R]) {
                    var I = `
` + m[j].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = E, lt(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function dt(e, s, l) {
      return Te(e, !1);
    }
    function vt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, vt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case h:
          return J("Suspense");
        case f:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return dt(e.render);
          case p:
            return Z(e.type, s, l);
          case b: {
            var g = e, x = g._payload, E = g._init;
            try {
              return Z(E(x), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, l = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(l);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ht(e, s, l, g, x) {
      {
        var E = Function.call.bind(Q);
        for (var y in e)
          if (E(e, y)) {
            var m = void 0;
            try {
              if (typeof e[y] != "function") {
                var O = Error((g || "React class") + ": " + l + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = e[y](s, y, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              m = j;
            }
            m && !(m instanceof Error) && (ee(x), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, y, typeof m), ee(null)), m instanceof Error && !(m.message in Ce) && (Ce[m.message] = !0, ee(x), T("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var pt = Array.isArray;
    function se(e) {
      return pt(e);
    }
    function gt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function mt(e) {
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
      if (mt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Pe(e);
    }
    var H = A.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
    function yt(e) {
      if (Q.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xt(e) {
      if (Q.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, s) {
      if (typeof e.ref == "string" && H.current && s && H.current.stateNode !== s) {
        var l = $(H.current.type);
        ae[l] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(H.current.type), e.ref), ae[l] = !0);
      }
    }
    function Et(e, s) {
      {
        var l = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function St(e, s) {
      {
        var l = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var jt = function(e, s, l, g, x, E, y) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: l,
        props: y,
        // Record the component responsible for creating this element.
        _owner: E
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
    function _t(e, s, l, g, x) {
      {
        var E, y = {}, m = null, O = null;
        l !== void 0 && (ke(l), m = "" + l), xt(s) && (ke(s.key), m = "" + s.key), yt(s) && (O = s.ref, wt(s, x));
        for (E in s)
          Q.call(s, E) && !bt.hasOwnProperty(E) && (y[E] = s[E]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (E in j)
            y[E] === void 0 && (y[E] = j[E]);
        }
        if (m || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(y, R), O && St(y, R);
        }
        return jt(e, m, O, x, g, H.current, y);
      }
    }
    var ce = A.ReactCurrentOwner, Ae = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, l = Z(e.type, e._source, s ? s.type : null);
        Ae.setExtraStackFrame(l);
      } else
        Ae.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ce.current) {
          var e = $(ce.current.type);
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
          var s = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Tt(e) {
      {
        var s = Fe();
        if (!s) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Le(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Tt(s);
        if ($e[l])
          return;
        $e[l] = !0;
        var g = "";
        e && e._owner && e._owner !== ce.current && (g = " It was passed a child from " + $(e._owner.type) + "."), B(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var l = 0; l < e.length; l++) {
            var g = e[l];
            le(g) && Le(g, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = W(e);
          if (typeof x == "function" && x !== e.entries)
            for (var E = x.call(e), y; !(y = E.next()).done; )
              le(y.value) && Le(y.value, s);
        }
      }
    }
    function Ct(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === p))
          l = s.propTypes;
        else
          return;
        if (l) {
          var g = $(s);
          ht(l, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var x = $(s);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var s = Object.keys(e.props), l = 0; l < s.length; l++) {
          var g = s[l];
          if (g !== "children" && g !== "key") {
            B(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, l, g, x, E) {
      {
        var y = at(e);
        if (!y) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Rt(x);
          O ? m += O : m += Fe();
          var j;
          e === null ? j = "null" : se(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + ($(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, m);
        }
        var R = _t(e, s, l, x, E);
        if (R == null)
          return R;
        if (y) {
          var I = s.children;
          if (I !== void 0)
            if (g)
              if (se(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  We(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(I, e);
        }
        return e === i ? Ot(R) : Ct(R), R;
      }
    }
    function Pt(e, s, l) {
      return Me(e, s, l, !0);
    }
    function kt(e, s, l) {
      return Me(e, s, l, !1);
    }
    var It = kt, Dt = Pt;
    G.Fragment = i, G.jsx = It, G.jsxs = Dt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Lt() : ve.exports = Wt();
var a = ve.exports;
const He = z(!0), qe = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = D(!0);
  return /* @__PURE__ */ a.jsx(He.Provider, { value: t, children: /* @__PURE__ */ a.jsx(qe.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = V(He);
  return /* @__PURE__ */ a.jsx(
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
}, wr = ({ children: r }) => /* @__PURE__ */ a.jsx(Mt, { children: /* @__PURE__ */ a.jsx(Nt, { children: r }) }), Bt = () => V(qe), Yt = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ a.jsx(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, zt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const o = () => {
    const c = t.defaultValue;
    return c ? /* @__PURE__ */ a.jsx("option", { hidden: !0, children: c }) : null;
  }, u = () => {
    const c = t.defaultSelectedIndex;
    if (c)
      return t.options[c];
  };
  return /* @__PURE__ */ a.jsxs(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: u(),
      children: [
        /* @__PURE__ */ a.jsx(o, {}),
        t.options.map((c) => /* @__PURE__ */ a.jsx("option", { value: c, children: c }, c))
      ]
    }
  );
}, Vt = {
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
}, Ut = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: i,
  errors: o
}) => {
  const u = ({ index: c }) => o ? Array.isArray(o) ? o[c] : o : null;
  if (r === "block")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
      /* @__PURE__ */ a.jsx(u, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a.jsxs("ul", { children: [
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[0] }),
          /* @__PURE__ */ a.jsx(u, { index: 0 })
        ] }),
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(i, { formProps: t[1] }),
          /* @__PURE__ */ a.jsx(u, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const c = t.map(
      ({ id: v, value: d, style: h, optionLabel: f, ...p }) => /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx(
          i,
          {
            formProps: {
              id: v,
              value: d,
              style: {
                ...Vt,
                ...h || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ a.jsx("label", { htmlFor: v, children: f || d })
      ] }, v)
    );
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      n && /* @__PURE__ */ a.jsx("label", { children: n }),
      /* @__PURE__ */ a.jsx("ul", { children: c }),
      /* @__PURE__ */ a.jsx(u, { index: 0 })
    ] });
  }
}, Ht = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ a.jsx("textarea", { ...n, ...t });
}, Er = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const o = Array.isArray(t) ? t : [t], { type: u, isSelect: c, isTextarea: v } = o[0], d = o.length;
  if (!(u === "radio" || u === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  const h = ["radio", "checkbox"].includes(u || "") ? "radio-check" : d === 1 ? "block" : "flex";
  return /* @__PURE__ */ a.jsx("fieldset", { ...i, children: /* @__PURE__ */ a.jsx(
    Ut,
    {
      layoutType: h,
      formPropsArr: o,
      label: r,
      errors: n,
      FormItem: c ? zt : v ? Ht : Yt
    }
  ) });
}, he = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
});
function ze(r) {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}
const qt = "spice__modal_close", Gt = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, Xt = X(
  ({ dialog: r, onOpen: t, onClose: n, focusTarget: i, ...o }, u) => {
    const c = _(null), v = k(() => {
      var h;
      ze("add"), c.current.showModal(), (h = i == null ? void 0 : i.current) == null || h.focus(), t == null || t(c.current);
    }, [t, i]), d = k(async () => {
      n && await he(n(c.current)), ze("remove"), c.current.close();
    }, [n]);
    return C(() => {
      const h = c.current.querySelectorAll(
        `.${qt}`
      );
      if (h)
        return h.forEach(
          (f) => f.addEventListener("click", d)
        ), () => h.forEach(
          (f) => f.removeEventListener("click", d)
        );
    }, [d]), C(() => {
      const h = (f) => {
        var b;
        ((b = c.current) == null ? void 0 : b.hasAttribute("open")) && f.key === "Escape" && d();
      };
      return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
    }, [d]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          ref: u,
          ...o,
          onClick: (h) => {
            var f;
            v(), (f = o == null ? void 0 : o.onClick) == null || f.call(o, h);
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        "dialog",
        {
          ref: c,
          ...r,
          onClick: (h) => {
            var f;
            h.target === c.current && d(), (f = r.onClick) == null || f.call(r, h);
          },
          style: {
            ...Gt,
            ...r.style || {}
          }
        }
      )
    ] });
  }
);
Xt.displayName = "ModalButton";
const Jt = X(
  ({ children: r, ...t }, n) => {
    const i = Bt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ a.jsx("div", { ref: n, ...t, children: r });
  }
);
Jt.displayName = "StickyItem";
const Kt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = z(Kt), Xe = z(
  () => {
  }
), Zt = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, i] = D({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ a.jsx(Ge.Provider, { value: n, children: /* @__PURE__ */ a.jsx(Xe.Provider, { value: i, children: r }) });
}, Je = () => V(Ge), pe = () => V(Xe), Qt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = pe(), o = Je(), u = k(() => {
    o.current === t || o.isLeaving || i((c) => ({
      ...c,
      isLeaving: !0,
      isAnimation: !0,
      prev: c.current,
      next: t
    }));
  }, [i, o, t]);
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: u,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": o.current === t,
      ...n,
      children: r
    }
  );
}, Ke = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((o) => {
    o.setAttribute("tabindex", i);
  });
}, er = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: i,
  onReset: o,
  style: u,
  ...c
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = _(!0), d = _(null), h = pe(), f = Je(), p = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && o && o(d.current);
      return;
    }
    f.prev === t && (async () => (i && await he(i(d.current)), h((b) => ({
      ...b,
      isLeaving: !1,
      prev: "",
      current: b.next,
      next: ""
    }))))(), p && n && n(d.current);
  }, [f, h, n, i, o, t, p]), C(() => {
    Ke({
      content: d.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ a.jsx(
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
}, tr = () => {
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
}, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Qt,
  Content: er,
  Context: Zt,
  useTabSwitch: tr
}, Symbol.toStringTag, { value: "Module" })), rr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = z(rr), Qe = z(() => {
}), nr = ({ children: r, defaultValue: t }) => {
  const [n, i] = D({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ a.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ a.jsx(Qe.Provider, { value: i, children: r }) });
}, et = () => V(Ze), ir = () => V(Qe), or = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = et(), o = ir(), [u, c] = D(
    () => !!i.defaultValue.find((v) => v === t)
  );
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: () => {
        o((v) => ({
          ...v,
          toggle: u,
          target: t
        })), c(!u);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": u,
      ...n,
      children: r
    }
  );
}, sr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = _(0), u = _(!0);
  C(() => {
    const c = new ResizeObserver((d) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return c.observe(v), () => {
        c.unobserve(v), clearTimeout(o.current);
      };
  }, i);
}, ar = ({
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
  const u = et(), [c, v] = D(
    () => !!u.defaultValue.find((b) => b === r)
  ), d = _(c);
  C(() => {
    u.target === r && v(!c);
  }, [u.target, u.toggle]);
  const h = _(!0), f = _(null), p = _(null);
  return C(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const b = {
      height: p.current.getBoundingClientRect().height,
      target: f.current
    };
    c ? t(b) : n(b);
  }, [c, t, n]), C(() => {
    Ke({ content: f.current, isOpen: c });
  }, [c]), sr({
    targetRef: p,
    onResize: (b) => {
      const S = b.getBoundingClientRect().height;
      c && (f.current.style.height = `${S}px`);
    },
    dependencies: [c],
    debounce: 100
  }), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: d.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !c,
      children: /* @__PURE__ */ a.jsx("div", { ref: p, ...o, children: i })
    }
  );
}, jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: or,
  Content: ar,
  Context: nr
}, Symbol.toStringTag, { value: "Module" })), cr = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: u,
  onComplete: c
}) => {
  const v = F(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = _(null), h = k(
    ({
      digitContainer: p,
      numbersTarget: b,
      digit: S,
      digitNumber: w,
      currentPercent: P,
      limit: W,
      destination: A
    }) => {
      if (v[S] !== w && P <= W) {
        const T = w.toString(), te = (Math.min(8, w) + 1).toString(), re = P >= W;
        b[0].innerText = T, b[1].innerText = re ? "0" : te, o && o({
          digitContainer: p,
          percent: P,
          digit: S,
          destination: A,
          duration: r / (A / S)
        }), v[S] = w;
      }
    },
    [v, o, r]
  ), f = k(
    (p) => (p > 100 && (p = 100), new Promise((b) => {
      if (p === 0)
        return;
      const S = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const w = v.to += 1, P = async () => {
          clearInterval(d.current), w > 100 && c && await he(c(S.getAll())), b(w - 1);
        };
        w === 1 && u && u(S.getAll()), w > p && await P();
        const W = Math.floor(w / 100) % 100, A = Math.floor(w / 10) % 10, T = w % 10;
        h({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: w,
          numbersTarget: S.ones,
          limit: 90,
          destination: p
        }), h({
          digitContainer: n.current,
          digit: 10,
          digitNumber: A,
          currentPercent: w,
          numbersTarget: S.tens,
          limit: 90,
          destination: p
        }), v[100] !== W && (S.hundreds[1].innerText = W.toString(), o && o({
          digitContainer: i.current,
          percent: w,
          digit: 100,
          destination: p,
          duration: r / (p / 10)
        }), v[100] = W);
      }, Math.max(1e3 / 60, r / p * 1e3));
    })),
    [
      v,
      h,
      n,
      i,
      t,
      c,
      o,
      u,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, tt = At(
  X((r, t) => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ a.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
tt.displayName = "Digit";
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: tt,
  useLoadingProgress: cr
}, Symbol.toStringTag, { value: "Module" })), ur = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: u,
  dependencies: c = []
} = {}) => {
  const v = _(null), [d, h] = D(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? v.current;
    if (!f)
      return;
    const p = (S, w) => {
      S.forEach((P) => {
        h(P.isIntersecting), P.isIntersecting ? (o && o(P), i && w.unobserve(P.target)) : P.isIntersecting || u && u(P);
      });
    }, b = new IntersectionObserver(p, {
      rootMargin: t,
      threshold: n
    });
    return b.observe(f), () => {
      b.unobserve(f);
    };
  }, [
    v,
    o,
    u,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...c
  ]), { ref: v, isIntersecting: d };
}, rt = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Rr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = _(null), u = _(null), c = _(null), { isIntersecting: v } = ur({
    targetRef: o,
    once: !1
  }), d = _(0);
  return rt(() => {
    if (!v)
      return;
    const h = o.current, f = u.current, p = c.current;
    if (!h || !f || !p)
      return;
    const b = de.ticker.deltaRatio() / 1e3, S = h.clientWidth / f.clientWidth;
    if (d.current += b * Math.abs(t) * S, d.current >= 1 && (d.current = 0), t < 0) {
      const w = d.current * -100;
      f.style.transform = `translateX(${w}%)`, p.style.transform = `translateX(${w}%)`;
    } else {
      const w = d.current * 100;
      f.style.transform = `translateX(${w}%)`, p.style.transform = `translateX(${w - 200}%)`;
    }
  }), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: o,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...i,
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ a.jsx("div", { ref: u, children: r }),
            /* @__PURE__ */ a.jsx("div", { ref: c, children: r })
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
}, lr = (r) => F(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ a.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ a.jsx(
    "br",
    {
      className: M.getClassName(t)
    },
    n
  ) : t),
  [r]
), Tr = ({
  text: r
}) => {
  const t = lr(r);
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: t });
}, Ve = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ a.jsx("span", { ...r, children: /* @__PURE__ */ a.jsx("span", { ...t }) }) : /* @__PURE__ */ a.jsx("span", { ...t }), Cr = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...o
}) => {
  const u = r === "chars" ? "" : " ";
  return F(
    () => t.split(M.regex).flatMap((v, d) => M.isRegularBreak(v) ? [null, /* @__PURE__ */ a.jsx("br", {}, d)] : M.isSpecificBreak(v) ? [
      null,
      /* @__PURE__ */ a.jsx(
        "br",
        {
          className: M.getClassName(v)
        },
        d
      )
    ] : [
      ...v.split(u).map((h, f) => {
        if (n) {
          const p = n.find(
            (b) => b.selector === h
          );
          if (p)
            return /* @__PURE__ */ a.jsx(
              Ve,
              {
                containerProps: i,
                ...o,
                ...p.attributes,
                children: h
              },
              `${d}-${f}`
            );
        }
        return /* @__PURE__ */ a.jsx(
          Ve,
          {
            containerProps: i,
            ...o,
            children: h === " " ? " " : h
          },
          `${d}-${f}`
        );
      }),
      null
    ]),
    [u, t, o, n, i]
  );
}, fr = X((r, t) => {
  const { fill: n, style: i, ...o } = r;
  return /* @__PURE__ */ a.jsx(
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
fr.displayName = "Video";
const Or = ({
  focusTarget: r
}) => /* @__PURE__ */ a.jsx(
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
), dr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: u,
    style: c,
    ...v
  }, d) => {
    const [h, f] = D(t === 0), p = !!u;
    return C(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ a.jsx(
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
        children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...h ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              r === "skeleton" ? /* @__PURE__ */ a.jsx(
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
                  children: /* @__PURE__ */ a.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ a.jsx(
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
                  children: /* @__PURE__ */ a.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              p && /* @__PURE__ */ a.jsx("div", { style: { visibility: "hidden" }, children: u })
            ]
          }
        )
      }
    );
  }
);
dr.displayName = "Loader";
const vr = typeof document < "u" ? Ft : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = _(0), o = _(0), u = k(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  C(() => (i.current = window.innerWidth, window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u), clearTimeout(o.current);
  }), n);
}, hr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, pr = (r) => {
  let t = hr;
  typeof r == "string" && (t += r), console.log(t);
}, gr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Pr = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = k(
    (i) => {
      r && gr(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && pr(t);
  }, [t, n]);
}, kr = () => {
  const [r, t] = D(null), n = k(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", Ir = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = _(null), [o, u] = $t(
    (f, p) => {
      switch (p.type) {
        case fe:
          return i.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    i.current
  ), c = _(0), v = _(0), d = () => window.scrollY || document.documentElement.scrollTop, h = k(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > c.current + r && i.current !== "down" ? u({ type: fe, payload: "down" }) : f < c.current - r && i.current !== "up" && u({ type: fe, payload: "up" }), c.current = f;
    }, t);
  }, [t, r]);
  return C(() => (c.current = d(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(v.current);
  }), n), o;
}, Dr = (r, t) => {
  const [n, i] = D(null), o = k(
    (u) => {
      switch (r) {
        case "max":
          i(t >= u);
          break;
        case "min":
          i(t <= u);
          break;
      }
    },
    [r, t]
  );
  return ge({
    onResize: ({ winW: u }) => o(u),
    debounce: 100,
    dependencies: [o]
  }), C(() => o(window.innerWidth), [o]), n;
}, Ar = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const u = F(() => encodeURIComponent(r), [r]), c = F(
    () => `height=${o},width=${i}`,
    [o, i]
  ), v = F(
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
  ), d = F(
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
  ), h = F(
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
  ), f = F(
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
  ), [p, b] = D(!1), S = F(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          b(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: v,
    X: d,
    LINE: h,
    share: f,
    copy: S,
    isCopied: p
  };
}, mr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, br = (r) => {
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
  const [t, n] = D({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return vr(() => {
    const i = navigator.userAgent, o = mr(i), u = br(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: u,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
}, $r = (r) => {
  const [t, n] = D(!1), i = _();
  rt(() => {
    t && i.current && r(i.current);
  });
  const o = k((v) => {
    i.current = v, n(!0);
  }, []), u = k(() => {
    i.current = void 0, n(!1);
  }, []), c = k((v) => {
    i.current = v;
  }, []);
  return {
    onPointerEnter: o,
    onPointerLeave: u,
    onPointerMove: c
  };
};
export {
  jr as Accordion,
  Rr as AutoScrollContainer,
  Tr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Or as FocusTrap,
  Er as FormField,
  dr as Loader,
  _r as LoadingProgress,
  Xt as ModalButton,
  wr as SpiceWrapper,
  Cr as SplitText,
  Jt as StickyItem,
  Sr as Tab,
  fr as Video,
  Fr as useDeviceDetector,
  rt as useFrame,
  ur as useIntersectionObserver,
  kr as useIsTouchDevice,
  vr as useIsomorphicLayoutEffect,
  Dr as useMediaQuery,
  $r as useOnHovering,
  Bt as useOverflowDispatch,
  lr as useParseBreakLine,
  sr as useResizeObserver,
  Ir as useScrollDirection,
  Ar as useShare,
  Pr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
