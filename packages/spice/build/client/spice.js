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
  var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(h, f, m) {
    var d, v = {}, g = null, S = null;
    m !== void 0 && (g = "" + m), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (d in f)
      i.call(f, d) && !a.hasOwnProperty(d) && (v[d] = f[d]);
    if (h && h.defaultProps)
      for (d in f = h.defaultProps, f)
        v[d] === void 0 && (v[d] = f[d]);
    return { $$typeof: t, type: h, key: g, ref: S, props: v, _owner: o.current };
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
function Wt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), x = Symbol.iterator, P = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[P];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          u[p - 1] = arguments[p];
        te("error", e, u);
      }
    }
    function te(e, s, u) {
      {
        var p = A.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (s += "%s", u = u.concat([w]));
        var E = u.map(function(y) {
          return String(y);
        });
        E.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var re = !1, nt = !1, it = !1, ot = !1, st = !1, me;
    me = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === a || st || e === o || e === m || e === d || ot || e === S || re || nt || it || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === v || e.$$typeof === l || e.$$typeof === h || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ct(e, s, u) {
      var p = e.displayName;
      if (p)
        return p;
      var w = s.displayName || s.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
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
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var s = e;
            return be(s) + ".Consumer";
          case l:
            var u = e;
            return be(u._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case v:
            var p = e.displayName || null;
            return p !== null ? p : $(e.type) || "Memo";
          case g: {
            var w = e, E = w._payload, y = w._init;
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
    function J(e, s, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (w) {
            var p = w.stack.trim().match(/\n( *(at )?)/);
            ie = p && p[1] || "";
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
        var u = K.get(e);
        if (u !== void 0)
          return u;
      }
      var p;
      oe = !0;
      var w = Error.prepareStackTrace;
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
              p = L;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (L) {
              p = L;
            }
            e.call(y.prototype);
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
          for (var b = L.stack.split(`
`), O = p.stack.split(`
`), j = b.length - 1, R = O.length - 1; j >= 1 && R >= 0 && b[j] !== O[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (b[j] !== O[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || b[j] !== O[R]) {
                    var I = `
` + b[j].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = E, lt(), Error.prepareStackTrace = w;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function dt(e, s, u) {
      return Te(e, !1);
    }
    function vt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, vt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case m:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return dt(e.render);
          case v:
            return Z(e.type, s, u);
          case g: {
            var p = e, w = p._payload, E = p._init;
            try {
              return Z(E(w), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(u);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ht(e, s, u, p, w) {
      {
        var E = Function.call.bind(Q);
        for (var y in e)
          if (E(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var O = Error((p || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[y](s, y, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ee(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, y, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(w), T("Failed %s type: %s", u, b.message), ee(null));
          }
      }
    }
    var pt = Array.isArray;
    function se(e) {
      return pt(e);
    }
    function gt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
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
        var u = $(H.current.type);
        ae[u] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(H.current.type), e.ref), ae[u] = !0);
      }
    }
    function Et(e, s) {
      {
        var u = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
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
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var jt = function(e, s, u, p, w, E, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: u,
        props: y,
        // Record the component responsible for creating this element.
        _owner: E
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
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function _t(e, s, u, p, w) {
      {
        var E, y = {}, b = null, O = null;
        u !== void 0 && (ke(u), b = "" + u), xt(s) && (ke(s.key), b = "" + s.key), yt(s) && (O = s.ref, wt(s, w));
        for (E in s)
          Q.call(s, E) && !bt.hasOwnProperty(E) && (y[E] = s[E]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (E in j)
            y[E] === void 0 && (y[E] = j[E]);
        }
        if (b || O) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Et(y, R), O && St(y, R);
        }
        return jt(e, b, O, w, p, H.current, y);
      }
    }
    var ce = A.ReactCurrentOwner, Ae = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, u = Z(e.type, e._source, s ? s.type : null);
        Ae.setExtraStackFrame(u);
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
          var s = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Tt(e) {
      {
        var s = Fe();
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
        var u = Tt(s);
        if ($e[u])
          return;
        $e[u] = !0;
        var p = "";
        e && e._owner && e._owner !== ce.current && (p = " It was passed a child from " + $(e._owner.type) + "."), B(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var u = 0; u < e.length; u++) {
            var p = e[u];
            le(p) && Le(p, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = W(e);
          if (typeof w == "function" && w !== e.entries)
            for (var E = w.call(e), y; !(y = E.next()).done; )
              le(y.value) && Le(y.value, s);
        }
      }
    }
    function Ct(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          u = s.propTypes;
        else
          return;
        if (u) {
          var p = $(s);
          ht(u, e.props, "prop", p, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = $(s);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var s = Object.keys(e.props), u = 0; u < s.length; u++) {
          var p = s[u];
          if (p !== "children" && p !== "key") {
            B(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, u, p, w, E) {
      {
        var y = at(e);
        if (!y) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Rt(w);
          O ? b += O : b += Fe();
          var j;
          e === null ? j = "null" : se(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + ($(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var R = _t(e, s, u, w, E);
        if (R == null)
          return R;
        if (y) {
          var I = s.children;
          if (I !== void 0)
            if (p)
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
    function Pt(e, s, u) {
      return Me(e, s, u, !0);
    }
    function kt(e, s, u) {
      return Me(e, s, u, !1);
    }
    var It = kt, Dt = Pt;
    G.Fragment = i, G.jsx = It, G.jsxs = Dt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Lt() : ve.exports = Wt();
var c = ve.exports;
const He = z(!0), qe = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = D(!0);
  return /* @__PURE__ */ c.jsx(He.Provider, { value: t, children: /* @__PURE__ */ c.jsx(qe.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = V(He);
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
}, xr = ({ children: r }) => /* @__PURE__ */ c.jsx(Mt, { children: /* @__PURE__ */ c.jsx(Nt, { children: r }) }), Bt = () => V(qe), Yt = ({ formProps: r }) => {
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
}, zt = ({ formProps: r }) => {
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
      ({ id: h, value: f, style: m, optionLabel: d, ...v }) => /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx(
          i,
          {
            formProps: {
              id: h,
              value: f,
              style: {
                ...Vt,
                ...m || {}
              },
              ...v
            }
          }
        ),
        /* @__PURE__ */ c.jsx("label", { htmlFor: h, children: d || f })
      ] }, h)
    );
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { children: n }),
      /* @__PURE__ */ c.jsx("ul", { children: l }),
      /* @__PURE__ */ c.jsx(a, { index: 0 })
    ] });
  }
}, Ht = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ c.jsx("textarea", { ...n, ...t });
}, wr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const o = Array.isArray(t) ? t : [t], { type: a, isSelect: l, isTextarea: h } = o[0], f = o.length;
  if (!(a === "radio" || a === "checkbox") && f > 2)
    throw new Error("The length of formProps is up to 2.");
  const m = ["radio", "checkbox"].includes(a || "") ? "radio-check" : f === 1 ? "block" : "flex";
  return /* @__PURE__ */ c.jsx("fieldset", { ...i, children: /* @__PURE__ */ c.jsx(
    Ut,
    {
      layoutType: m,
      formPropsArr: o,
      label: r,
      errors: n,
      FormItem: l ? zt : h ? Ht : Yt
    }
  ) });
}, he = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), ze = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, qt = ".spice__modal_close", Gt = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, onClick: o, focusTarget: a, ...l }, h) => {
    const f = _(null), m = k(
      (v) => {
        var g;
        o == null || o(v), ze("add"), f.current.showModal(), (g = a == null ? void 0 : a.current) == null || g.focus(), n == null || n(f.current);
      },
      [n, o, a]
    ), d = k(async () => {
      i && await he(i(f.current)), ze("remove"), f.current.close();
    }, [i]);
    return C(() => {
      const v = f.current.querySelectorAll(qt);
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
        var x;
        ((x = f.current) == null ? void 0 : x.hasAttribute("open")) && g.key === "Escape" && d();
      };
      return window.addEventListener("keydown", v), () => {
        window.removeEventListener("keydown", v);
      };
    }, [d]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("button", { ref: h, onClick: m, ...l, children: r }),
      /* @__PURE__ */ c.jsx(
        "dialog",
        {
          ref: f,
          onClick: (v) => {
            v.target === f.current && d();
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
            ...t.style || {}
          },
          ...t
        }
      )
    ] });
  }
);
Gt.displayName = "ModalButton";
const Xt = X(
  ({ children: r, ...t }, n) => {
    const i = Bt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ c.jsx("div", { ref: n, ...t, children: r });
  }
);
Xt.displayName = "StickyItem";
const Jt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = z(Jt), Xe = z(
  () => {
  }
), Kt = ({ children: r, defaultValue: t }) => {
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
  return /* @__PURE__ */ c.jsx(Ge.Provider, { value: n, children: /* @__PURE__ */ c.jsx(Xe.Provider, { value: i, children: r }) });
}, Je = () => V(Ge), pe = () => V(Xe), Zt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = pe(), o = Je(), a = k(() => {
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
}, Ke = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((o) => {
    o.setAttribute("tabindex", i);
  });
}, Qt = ({
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
  const h = _(!0), f = _(null), m = pe(), d = Je(), v = d.current === t && !d.isLeaving;
  return C(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    if (!d.isAnimation) {
      v && o && o(f.current);
      return;
    }
    d.prev === t && (async () => (i && await he(i(f.current)), m((g) => ({
      ...g,
      isLeaving: !1,
      prev: "",
      current: g.next,
      next: ""
    }))))(), v && n && n(f.current);
  }, [d, m, n, i, o, t, v]), C(() => {
    Ke({
      content: f.current,
      isOpen: d.current === t
    });
  }, [d, t]), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: f,
      style: {
        ...d.current !== t ? {
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
      "aria-hidden": d.current !== t,
      ...l,
      children: r
    }
  );
}, er = () => {
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
}, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Zt,
  Content: Qt,
  Context: Kt,
  useTabSwitch: er
}, Symbol.toStringTag, { value: "Module" })), tr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = z(tr), Qe = z(() => {
}), rr = ({ children: r, defaultValue: t }) => {
  const [n, i] = D({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ c.jsx(Ze.Provider, { value: n, children: /* @__PURE__ */ c.jsx(Qe.Provider, { value: i, children: r }) });
}, et = () => V(Ze), nr = () => V(Qe), ir = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = et(), o = nr(), [a, l] = D(
    () => !!i.defaultValue.find((h) => h === t)
  );
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => {
        o((h) => ({
          ...h,
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
}, or = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = _(0), a = _(!0);
  C(() => {
    const l = new ResizeObserver((f) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(f[0].target);
      }, n);
    }), h = r.current;
    if (h)
      return l.observe(h), () => {
        l.unobserve(h), clearTimeout(o.current);
      };
  }, i);
}, sr = ({
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
  const a = et(), [l, h] = D(
    () => !!a.defaultValue.find((g) => g === r)
  ), f = _(l);
  C(() => {
    a.target === r && h(!l);
  }, [a.target, a.toggle]);
  const m = _(!0), d = _(null), v = _(null);
  return C(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    const g = {
      height: v.current.getBoundingClientRect().height,
      target: d.current
    };
    l ? t(g) : n(g);
  }, [l, t, n]), C(() => {
    Ke({ content: d.current, isOpen: l });
  }, [l]), or({
    targetRef: v,
    onResize: (g) => {
      const S = g.getBoundingClientRect().height;
      l && (d.current.style.height = `${S}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: d,
      style: {
        overflow: "hidden",
        height: f.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ c.jsx("div", { ref: v, ...o, children: i })
    }
  );
}, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ir,
  Content: sr,
  Context: rr
}, Symbol.toStringTag, { value: "Module" })), ar = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: a,
  onComplete: l
}) => {
  const h = F(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), f = _(null), m = k(
    ({
      digitContainer: v,
      numbersTarget: g,
      digit: S,
      digitNumber: x,
      currentPercent: P,
      limit: W,
      destination: A
    }) => {
      if (h[S] !== x && P <= W) {
        const T = x.toString(), te = (Math.min(8, x) + 1).toString(), re = P >= W;
        g[0].innerText = T, g[1].innerText = re ? "0" : te, o && o({
          digitContainer: v,
          percent: P,
          digit: S,
          destination: A,
          duration: r / (A / S)
        }), h[S] = x;
      }
    },
    [h, o, r]
  ), d = k(
    (v) => (v > 100 && (v = 100), new Promise((g) => {
      if (v === 0)
        return;
      const S = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(f.current), f.current = setInterval(async () => {
        const x = h.to += 1, P = async () => {
          clearInterval(f.current), x > 100 && l && await he(l(S.getAll())), g(x - 1);
        };
        x === 1 && a && a(S.getAll()), x > v && await P();
        const W = Math.floor(x / 100) % 100, A = Math.floor(x / 10) % 10, T = x % 10;
        m({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: x,
          numbersTarget: S.ones,
          limit: 90,
          destination: v
        }), m({
          digitContainer: n.current,
          digit: 10,
          digitNumber: A,
          currentPercent: x,
          numbersTarget: S.tens,
          limit: 90,
          destination: v
        }), h[100] !== W && (S.hundreds[1].innerText = W.toString(), o && o({
          digitContainer: i.current,
          percent: x,
          digit: 100,
          destination: v,
          duration: r / (v / 10)
        }), h[100] = W);
      }, Math.max(1e3 / 60, r / v * 1e3));
    })),
    [
      h,
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
  return C(() => () => {
    clearInterval(f.current);
  }, []), d;
}, tt = At(
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
tt.displayName = "Digit";
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: tt,
  useLoadingProgress: ar
}, Symbol.toStringTag, { value: "Module" })), cr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: a,
  dependencies: l = []
} = {}) => {
  const h = _(null), [f, m] = D(!1);
  return C(() => {
    const d = (r == null ? void 0 : r.current) ?? h.current;
    if (!d)
      return;
    const v = (S, x) => {
      S.forEach((P) => {
        m(P.isIntersecting), P.isIntersecting ? (o && o(P), i && x.unobserve(P.target)) : P.isIntersecting || a && a(P);
      });
    }, g = new IntersectionObserver(v, {
      rootMargin: t,
      threshold: n
    });
    return g.observe(d), () => {
      g.unobserve(d);
    };
  }, [
    h,
    o,
    a,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: h, isIntersecting: f };
}, rt = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, _r = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = _(null), a = _(null), l = _(null), { isIntersecting: h } = cr({
    targetRef: o,
    once: !1
  }), f = _(0);
  return rt(() => {
    if (!h)
      return;
    const m = o.current, d = a.current, v = l.current;
    if (!m || !d || !v)
      return;
    const g = de.ticker.deltaRatio() / 1e3, S = m.clientWidth / d.clientWidth;
    if (f.current += g * Math.abs(t) * S, f.current >= 1 && (f.current = 0), t < 0) {
      const x = f.current * -100;
      d.style.transform = `translateX(${x}%)`, v.style.transform = `translateX(${x}%)`;
    } else {
      const x = f.current * 100;
      d.style.transform = `translateX(${x}%)`, v.style.transform = `translateX(${x - 200}%)`;
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
}, ur = (r) => F(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ c.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ c.jsx(
    "br",
    {
      className: M.getClassName(t)
    },
    n
  ) : t),
  [r]
), Rr = ({
  text: r
}) => {
  const t = ur(r);
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}, Ve = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ c.jsx("span", { ...r, children: /* @__PURE__ */ c.jsx("span", { ...t }) }) : /* @__PURE__ */ c.jsx("span", { ...t }), Tr = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...o
}) => {
  const a = r === "chars" ? "" : " ";
  return F(
    () => t.split(M.regex).flatMap((h, f) => M.isRegularBreak(h) ? [null, /* @__PURE__ */ c.jsx("br", {}, f)] : M.isSpecificBreak(h) ? [
      null,
      /* @__PURE__ */ c.jsx(
        "br",
        {
          className: M.getClassName(h)
        },
        f
      )
    ] : [
      ...h.split(a).map((m, d) => {
        if (n) {
          const v = n.find(
            (g) => g.selector === m
          );
          if (v)
            return /* @__PURE__ */ c.jsx(
              Ve,
              {
                containerProps: i,
                ...o,
                ...v.attributes,
                children: m
              },
              `${f}-${d}`
            );
        }
        return /* @__PURE__ */ c.jsx(
          Ve,
          {
            containerProps: i,
            ...o,
            children: m === " " ? " " : m
          },
          `${f}-${d}`
        );
      }),
      null
    ]),
    [a, t, o, n, i]
  );
}, lr = X((r, t) => {
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
lr.displayName = "Video";
const Cr = ({
  focusTarget: r
}) => /* @__PURE__ */ c.jsx(
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
), fr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: a,
    style: l,
    ...h
  }, f) => {
    const [m, d] = D(t === 0), v = !!a;
    return C(() => {
      t !== 0 && setTimeout(() => d(!0), t);
    }, [t]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: f,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...v ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...l
        },
        ...h,
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
              v && /* @__PURE__ */ c.jsx("div", { style: { visibility: "hidden" }, children: a })
            ]
          }
        )
      }
    );
  }
);
fr.displayName = "Loader";
const dr = typeof document < "u" ? Ft : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = _(0), o = _(0), a = k(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  C(() => (i.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(o.current);
  }), n);
}, vr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, hr = (r) => {
  let t = vr;
  typeof r == "string" && (t += r), console.log(t);
}, pr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Or = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = k(
    (i) => {
      r && pr(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && hr(t);
  }, [t, n]);
}, Pr = () => {
  const [r, t] = D(null), n = k(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", kr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = _(null), [o, a] = $t(
    (d, v) => {
      switch (v.type) {
        case fe:
          return i.current = v.payload, v.payload;
        default:
          return d;
      }
    },
    i.current
  ), l = _(0), h = _(0), f = () => window.scrollY || document.documentElement.scrollTop, m = k(() => {
    clearTimeout(h.current), h.current = setTimeout(() => {
      const d = f();
      d > l.current + r && i.current !== "down" ? a({ type: fe, payload: "down" }) : d < l.current - r && i.current !== "up" && a({ type: fe, payload: "up" }), l.current = d;
    }, t);
  }, [t, r]);
  return C(() => (l.current = f(), window.addEventListener("scroll", m, { passive: !0 }), () => {
    window.removeEventListener("scroll", m), clearTimeout(h.current);
  }), n), o;
}, Ir = (r, t) => {
  const [n, i] = D(null), o = k(
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
  }), C(() => o(window.innerWidth), [o]), n;
}, Dr = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const a = F(() => encodeURIComponent(r), [r]), l = F(
    () => `height=${o},width=${i}`,
    [o, i]
  ), h = F(
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
  ), f = F(
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
  ), m = F(
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
  ), d = F(
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
  ), [v, g] = D(!1), S = F(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(r).then(() => {
          g(!0);
        });
      }
    }),
    [r]
  );
  return {
    Facebook: h,
    X: f,
    LINE: m,
    share: d,
    copy: S,
    isCopied: v
  };
}, gr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, mr = (r) => {
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
}, Ar = (r) => {
  const [t, n] = D({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return dr(() => {
    const i = navigator.userAgent, o = gr(i), a = mr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: a,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
}, Fr = (r) => {
  const [t, n] = D(!1), i = _();
  rt(() => {
    t && i.current && r(i.current);
  });
  const o = k((h) => {
    i.current = h, n(!0);
  }, []), a = k(() => {
    i.current = void 0, n(!1);
  }, []), l = k((h) => {
    i.current = h;
  }, []);
  return {
    onPointerEnter: o,
    onPointerLeave: a,
    onPointerMove: l
  };
};
export {
  Sr as Accordion,
  _r as AutoScrollContainer,
  Rr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Cr as FocusTrap,
  wr as FormField,
  fr as Loader,
  jr as LoadingProgress,
  Gt as ModalButton,
  xr as SpiceWrapper,
  Tr as SplitText,
  Xt as StickyItem,
  Er as Tab,
  lr as Video,
  Ar as useDeviceDetector,
  rt as useFrame,
  cr as useIntersectionObserver,
  Pr as useIsTouchDevice,
  dr as useIsomorphicLayoutEffect,
  Ir as useMediaQuery,
  Fr as useOnHovering,
  Bt as useOverflowDispatch,
  ur as useParseBreakLine,
  or as useResizeObserver,
  kr as useScrollDirection,
  Dr as useShare,
  Or as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
