"use client";
import He, { createContext as z, useContext as V, useState as A, useCallback as k, forwardRef as X, useRef as _, useEffect as C, useMemo as $, memo as At, useLayoutEffect as $t, useReducer as Lt } from "react";
import de from "gsap";
var ve = { exports: {} }, H = {};
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
function Wt() {
  if (Be)
    return H;
  Be = 1;
  var r = He, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(v, d, g) {
    var f, p = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      i.call(d, f) && !a.hasOwnProperty(f) && (p[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: y, props: p, _owner: o.current };
  }
  return H.Fragment = n, H.jsx = l, H.jsxs = l, H;
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
function Mt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = He, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[O];
      return typeof s == "function" ? s : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          c[h - 1] = arguments[h];
        te("error", e, c);
      }
    }
    function te(e, s, c) {
      {
        var h = F.ReactDebugCurrentFrame, E = h.getStackAddendum();
        E !== "" && (s += "%s", c = c.concat([E]));
        var S = c.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, it = !1, ot = !1, st = !1, at = !1, me;
    me = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === a || at || e === o || e === g || e === f || st || e === y || re || it || ot || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === l || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ut(e, s, c) {
      var h = e.displayName;
      if (h)
        return h;
      var E = s.displayName || s.name || "";
      return E !== "" ? c + "(" + E + ")" : c;
    }
    function be(e) {
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
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
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
            return be(s) + ".Consumer";
          case l:
            var c = e;
            return be(c._context) + ".Provider";
          case d:
            return ut(e, e.render, "ForwardRef");
          case p:
            var h = e.displayName || null;
            return h !== null ? h : L(e.type) || "Memo";
          case m: {
            var E = e, S = E._payload, w = E._init;
            try {
              return L(w(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, ye, xe, we, Ee, Se, je, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function lt() {
      {
        if (U === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, je = console.groupCollapsed, Re = console.groupEnd;
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
        U++;
      }
    }
    function ft() {
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
              value: Re
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = F.ReactCurrentDispatcher, ie;
    function J(e, s, c) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (E) {
            var h = E.stack.trim().match(/\n( *(at )?)/);
            ie = h && h[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var oe = !1, K;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new dt();
    }
    function Te(e, s) {
      if (!e || oe)
        return "";
      {
        var c = K.get(e);
        if (c !== void 0)
          return c;
      }
      var h;
      oe = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, lt();
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
            } catch (W) {
              h = W;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (W) {
              h = W;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            h = W;
          }
          e();
        }
      } catch (W) {
        if (W && h && typeof W.stack == "string") {
          for (var b = W.stack.split(`
`), P = h.stack.split(`
`), j = b.length - 1, R = P.length - 1; j >= 1 && R >= 0 && b[j] !== P[R]; )
            R--;
          for (; j >= 1 && R >= 0; j--, R--)
            if (b[j] !== P[R]) {
              if (j !== 1 || R !== 1)
                do
                  if (j--, R--, R < 0 || b[j] !== P[R]) {
                    var I = `
` + b[j].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (j >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = S, ft(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function vt(e, s, c) {
      return Te(e, !1);
    }
    function pt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, pt(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case g:
          return J("Suspense");
        case f:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return vt(e.render);
          case p:
            return Z(e.type, s, c);
          case m: {
            var h = e, E = h._payload, S = h._init;
            try {
              return Z(S(E), s, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = F.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, c = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ht(e, s, c, h, E) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var P = Error((h || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = e[w](s, w, h, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ee(E), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", c, w, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(E), T("Failed %s type: %s", c, b.message), ee(null));
          }
      }
    }
    var gt = Array.isArray;
    function se(e) {
      return gt(e);
    }
    function mt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function bt(e) {
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
      if (bt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Pe(e);
    }
    var q = F.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, ae;
    ae = {};
    function xt(e) {
      if (Q.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (Q.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Et(e, s) {
      if (typeof e.ref == "string" && q.current && s && q.current.stateNode !== s) {
        var c = L(q.current.type);
        ae[c] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(q.current.type), e.ref), ae[c] = !0);
      }
    }
    function St(e, s) {
      {
        var c = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function jt(e, s) {
      {
        var c = function() {
          De || (De = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rt = function(e, s, c, h, E, S, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: c,
        props: w,
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
        value: h
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function _t(e, s, c, h, E) {
      {
        var S, w = {}, b = null, P = null;
        c !== void 0 && (ke(c), b = "" + c), wt(s) && (ke(s.key), b = "" + s.key), xt(s) && (P = s.ref, Et(s, E));
        for (S in s)
          Q.call(s, S) && !yt.hasOwnProperty(S) && (w[S] = s[S]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (S in j)
            w[S] === void 0 && (w[S] = j[S]);
        }
        if (b || P) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && St(w, R), P && jt(w, R);
        }
        return Rt(e, b, P, E, h, q.current, w);
      }
    }
    var ce = F.ReactCurrentOwner, Fe = F.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, c = Z(e.type, e._source, s ? s.type : null);
        Fe.setExtraStackFrame(c);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ae() {
      {
        if (ce.current) {
          var e = L(ce.current.type);
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
          var s = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + s + ":" + c + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Ct(e) {
      {
        var s = Ae();
        if (!s) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (s = `

Check the top-level render call using <` + c + ">.");
        }
        return s;
      }
    }
    function Le(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ct(s);
        if ($e[c])
          return;
        $e[c] = !0;
        var h = "";
        e && e._owner && e._owner !== ce.current && (h = " It was passed a child from " + L(e._owner.type) + "."), B(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, h), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var c = 0; c < e.length; c++) {
            var h = e[c];
            le(h) && Le(h, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = D(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), w; !(w = S.next()).done; )
              le(w.value) && Le(w.value, s);
        }
      }
    }
    function Ot(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var c;
        if (typeof s == "function")
          c = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === p))
          c = s.propTypes;
        else
          return;
        if (c) {
          var h = L(s);
          ht(c, e.props, "prop", h, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = L(s);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var s = Object.keys(e.props), c = 0; c < s.length; c++) {
          var h = s[c];
          if (h !== "children" && h !== "key") {
            B(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, c, h, E, S) {
      {
        var w = ct(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Tt(E);
          P ? b += P : b += Ae();
          var j;
          e === null ? j = "null" : se(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var R = _t(e, s, c, E, S);
        if (R == null)
          return R;
        if (w) {
          var I = s.children;
          if (I !== void 0)
            if (h)
              if (se(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  We(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(I, e);
        }
        return e === i ? Pt(R) : Ot(R), R;
      }
    }
    function kt(e, s, c) {
      return Me(e, s, c, !0);
    }
    function It(e, s, c) {
      return Me(e, s, c, !1);
    }
    var Dt = It, Ft = kt;
    G.Fragment = i, G.jsx = Dt, G.jsxs = Ft;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Wt() : ve.exports = Mt();
var u = ve.exports;
const Ge = z(!0), Xe = z((r) => !r), Nt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ u.jsx(Ge.Provider, { value: t, children: /* @__PURE__ */ u.jsx(Xe.Provider, { value: n, children: r }) });
}, Bt = ({ children: r }) => {
  const t = V(Ge);
  return /* @__PURE__ */ u.jsx(
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
}, yr = ({ children: r }) => /* @__PURE__ */ u.jsx(Nt, { children: /* @__PURE__ */ u.jsx(Bt, { children: r }) }), Yt = () => V(Xe), ze = ({ formProps: r }) => {
  const { style: t, ...n } = r;
  return /* @__PURE__ */ u.jsx(
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
    return l ? /* @__PURE__ */ u.jsx("option", { hidden: !0, children: l }) : null;
  }, a = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ u.jsxs(
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
        /* @__PURE__ */ u.jsx(o, {}),
        t.options.map((l) => /* @__PURE__ */ u.jsx("option", { value: l, children: l }, l))
      ]
    }
  );
}, Ve = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: i,
  errors: o
}) => {
  const a = k(
    (l) => !o || !o[l] ? null : o[l],
    [o]
  );
  if (r === "block")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ u.jsx(i, { formProps: t[0] }),
      a(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ u.jsxs("ul", { children: [
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(i, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(i, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map(
      ({ id: v, value: d, style: g, optionLabel: f, ...p }) => /* @__PURE__ */ u.jsxs("li", { children: [
        /* @__PURE__ */ u.jsx(
          i,
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
        /* @__PURE__ */ u.jsx("label", { htmlFor: v, children: f || d })
      ] }, v)
    );
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { children: n }),
      /* @__PURE__ */ u.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Vt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ u.jsx("textarea", { ...n, ...t });
}, xr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  const o = t, a = o[0].type, l = o.length, v = !!o[0].isSelect, d = !!o[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = k(
    (p) => Ve({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: o,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, o, r, l]
  ), f = k(() => v ? g(zt) : d ? g(Vt) : a === "radio" || a === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: o,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, o, r, v, d, g, a]);
  return /* @__PURE__ */ u.jsx("fieldset", { ...i, children: /* @__PURE__ */ u.jsx(f, {}) });
}, pe = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ue = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Ut = ".spice__modal_close", qt = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, focusTarget: o, ...a }, l) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = _(null), p = k(() => {
      var y;
      Ue("add"), f.current.showModal(), (y = o == null ? void 0 : o.current) == null || y.focus(), n && n(f.current);
    }, [n, o]), m = k(async () => {
      i && await pe(i(f.current)), Ue("remove"), f.current.close();
    }, [i]);
    return C(() => {
      const y = f.current.querySelectorAll(Ut);
      if (y)
        return y.forEach(
          (x) => x.addEventListener("click", m)
        ), () => {
          y.forEach(
            (x) => x.removeEventListener("click", m)
          );
        };
    }, [m]), C(() => {
      const y = (x) => {
        var D;
        ((D = f.current) == null ? void 0 : D.hasAttribute("open")) && x.key === "Escape" && m();
      };
      return window.addEventListener("keydown", y), () => {
        window.removeEventListener("keydown", y);
      };
    }, [m]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          ref: l,
          onClick: () => {
            p();
          },
          ...a,
          children: r
        }
      ),
      /* @__PURE__ */ u.jsx(
        "dialog",
        {
          ref: f,
          onClick: (y) => {
            y.target === f.current && m();
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
qt.displayName = "ModalButton";
const Ht = X(
  ({ children: r, ...t }, n) => {
    const i = Yt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ u.jsx("div", { ref: n, ...t, children: r });
  }
);
Ht.displayName = "StickyItem";
const Gt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Je = z(Gt), Ke = z(
  () => {
  }
), Xt = ({ children: r, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, i] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ u.jsx(Je.Provider, { value: n, children: /* @__PURE__ */ u.jsx(Ke.Provider, { value: i, children: r }) });
}, Ze = () => V(Je), he = () => V(Ke), Jt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = he(), o = Ze(), a = k(() => {
    o.current === t || o.isLeaving || i((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [i, o, t]);
  return /* @__PURE__ */ u.jsx(
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
}, Kt = ({
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
  const v = _(!0), d = _(null), g = he(), f = Ze(), p = f.current === t && !f.isLeaving;
  return C(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    if (!f.isAnimation) {
      p && o && o(d.current);
      return;
    }
    f.prev === t && (async () => (i && await pe(i(d.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), p && n && n(d.current);
  }, [f, g, n, i, o, t, p]), C(() => {
    Qe({
      content: d.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ u.jsx(
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
        ...a
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": f.current !== t,
      ...l,
      children: r
    }
  );
}, Zt = () => {
  const r = he();
  return (t, n) => {
    r((i) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? i.current : "",
      current: n ? i.current : t,
      next: n ? t : ""
    }));
  };
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Jt,
  Content: Kt,
  Context: Xt,
  useTabSwitch: Zt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, et = z(Qt), tt = z(() => {
}), er = ({ children: r, defaultValue: t }) => {
  const [n, i] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ u.jsx(et.Provider, { value: n, children: /* @__PURE__ */ u.jsx(tt.Provider, { value: i, children: r }) });
}, rt = () => V(et), tr = () => V(tt), rr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = rt(), o = tr(), [a, l] = A(
    () => !!i.defaultValue.find((v) => v === t)
  );
  return /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: () => {
        o((v) => ({
          ...v,
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
}, nr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = _(0), a = _(!0);
  C(() => {
    const l = new ResizeObserver((d) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return l.observe(v), () => {
        l.unobserve(v), clearTimeout(o.current);
      };
  }, i);
}, ir = ({
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
  const a = rt(), [l, v] = A(
    () => !!a.defaultValue.find((m) => m === r)
  ), d = _(l);
  C(() => {
    a.target === r && v(!l);
  }, [a.target, a.toggle]);
  const g = _(!0), f = _(null), p = _(null);
  return C(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const m = {
      height: p.current.getBoundingClientRect().height,
      target: f.current
    };
    l ? t(m) : n(m);
  }, [l, t, n]), C(() => {
    Qe({ content: f.current, isOpen: l });
  }, [l]), nr({
    targetRef: p,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      l && (f.current.style.height = `${y}px`);
    },
    dependencies: [l],
    debounce: 100
  }), /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: d.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !l,
      children: /* @__PURE__ */ u.jsx("div", { ref: p, ...o, children: i })
    }
  );
}, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: rr,
  Content: ir,
  Context: er
}, Symbol.toStringTag, { value: "Module" })), or = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: a,
  onComplete: l
}) => {
  const v = $(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = _(null), g = k(
    ({
      digitContainer: p,
      numbersTarget: m,
      digit: y,
      digitNumber: x,
      currentPercent: O,
      limit: D,
      destination: F
    }) => {
      if (v[y] !== x && O <= D) {
        const T = x.toString(), te = (Math.min(8, x) + 1).toString(), re = O >= D;
        m[0].innerText = T, m[1].innerText = re ? "0" : te, o && o({
          digitContainer: p,
          percent: O,
          digit: y,
          destination: F,
          duration: r / (F / y)
        }), v[y] = x;
      }
    },
    [v, o, r]
  ), f = k(
    (p) => (p > 100 && (p = 100), new Promise((m) => {
      if (p === 0)
        return;
      const y = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(d.current), d.current = setInterval(async () => {
        const x = v.to += 1, O = async () => {
          clearInterval(d.current), x > 100 && l && await pe(l(y.getAll())), m(x - 1);
        };
        x === 1 && a && a(y.getAll()), x > p && await O();
        const D = Math.floor(x / 100) % 100, F = Math.floor(x / 10) % 10, T = x % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: T,
          currentPercent: x,
          numbersTarget: y.ones,
          limit: 90,
          destination: p
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: F,
          currentPercent: x,
          numbersTarget: y.tens,
          limit: 90,
          destination: p
        }), v[100] !== D && (y.hundreds[1].innerText = D.toString(), o && o({
          digitContainer: i.current,
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
      i,
      t,
      l,
      o,
      a,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, nt = At(
  X((r, t) => /* @__PURE__ */ u.jsxs(
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
        /* @__PURE__ */ u.jsx("div", { ...r, children: "0" }),
        /* @__PURE__ */ u.jsx("div", { ...r, children: "0" })
      ]
    }
  ))
);
nt.displayName = "Digit";
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: nt,
  useLoadingProgress: or
}, Symbol.toStringTag, { value: "Module" })), sr = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: a,
  dependencies: l = []
}) => {
  const v = _(null), [d, g] = A(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? v.current;
    if (!f)
      return;
    const p = (y, x) => {
      y.forEach((O) => {
        g(O.isIntersecting), O.isIntersecting ? (o && o(O), i && x.unobserve(O.target)) : O.isIntersecting || a && a(O);
      });
    }, m = new IntersectionObserver(p, {
      rootMargin: t,
      threshold: n
    });
    return m.observe(f), () => {
      m.unobserve(f);
    };
  }, [
    v,
    o,
    a,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: v, isIntersecting: d };
}, ar = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, jr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = _(null), a = _(null), l = _(null), { isIntersecting: v } = sr({
    targetRef: o,
    once: !1
  }), d = _(0);
  return ar(() => {
    if (!v)
      return;
    const g = o.current, f = a.current, p = l.current;
    if (!g || !f || !p)
      return;
    const m = de.ticker.deltaRatio() / 1e3, y = g.clientWidth / f.clientWidth;
    if (d.current += m * Math.abs(t) * y, d.current >= 1 && (d.current = 0), t < 0) {
      const x = d.current * -100;
      f.style.transform = `translateX(${x}%)`, p.style.transform = `translateX(${x}%)`;
    } else {
      const x = d.current * 100;
      f.style.transform = `translateX(${x}%)`, p.style.transform = `translateX(${x - 200}%)`;
    }
  }), /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: o,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...i,
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ u.jsx("div", { ref: a, children: r }),
            /* @__PURE__ */ u.jsx("div", { ref: l, children: r })
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
}, cr = (r) => $(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ u.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ u.jsx(
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
  const t = cr(r);
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: t });
}, qe = ({
  containerProps: r,
  ...t
}) => r ? /* @__PURE__ */ u.jsx("span", { ...r, children: /* @__PURE__ */ u.jsx("span", { ...t }) }) : /* @__PURE__ */ u.jsx("span", { ...t }), _r = ({
  type: r = "chars",
  text: t,
  exception: n,
  containerProps: i,
  ...o
}) => {
  const a = r === "chars" ? "" : " ";
  return $(
    () => t.split(M.regex).flatMap((v, d) => M.isRegularBreak(v) ? [null, /* @__PURE__ */ u.jsx("br", {}, d)] : M.isSpecificBreak(v) ? [
      null,
      /* @__PURE__ */ u.jsx(
        "br",
        {
          className: M.getClassName(v)
        },
        d
      )
    ] : [
      ...v.split(a).map((g, f) => {
        if (n) {
          const p = n.find(
            (m) => m.selector === g
          );
          if (p)
            return /* @__PURE__ */ u.jsx(
              qe,
              {
                containerProps: i,
                ...o,
                ...p.attributes,
                children: g
              },
              `${d}-${f}`
            );
        }
        return /* @__PURE__ */ u.jsx(
          qe,
          {
            containerProps: i,
            ...o,
            children: g === " " ? "&nbsp;" : g
          },
          `${d}-${f}`
        );
      }),
      null
    ]),
    [a, t, o, n, i]
  );
}, ur = X((r, t) => {
  const { fill: n, style: i, ...o } = r;
  return /* @__PURE__ */ u.jsx(
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
        ...i
      } : i,
      ...o
    }
  );
});
ur.displayName = "Video";
const Tr = ({
  focusTarget: r
}) => /* @__PURE__ */ u.jsx(
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
), lr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: a,
    style: l,
    ...v
  }, d) => {
    const [g, f] = A(t === 0), p = !!a;
    return C(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ u.jsx(
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
          ...l
        },
        ...v,
        children: /* @__PURE__ */ u.jsxs(
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
              r === "skeleton" ? /* @__PURE__ */ u.jsx(
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
                  children: /* @__PURE__ */ u.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ u.jsx(
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
                  children: /* @__PURE__ */ u.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              p && /* @__PURE__ */ u.jsx("div", { style: { visibility: "hidden" }, children: a })
            ]
          }
        )
      }
    );
  }
);
lr.displayName = "Loader";
const fr = typeof document < "u" ? $t : C, ge = ({
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
}, dr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, vr = (r) => {
  let t = dr;
  typeof r == "string" && (t += r), console.log(t);
}, pr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Cr = ({
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
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && vr(t);
  }, [t, n]);
}, Or = () => {
  const [r, t] = A(null), n = k(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", Pr = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = _(null), [o, a] = Lt(
    (f, p) => {
      switch (p.type) {
        case fe:
          return i.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    i.current
  ), l = _(0), v = _(0), d = () => window.scrollY || document.documentElement.scrollTop, g = k(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > l.current + r && i.current !== "down" ? a({ type: fe, payload: "down" }) : f < l.current - r && i.current !== "up" && a({ type: fe, payload: "up" }), l.current = f;
    }, t);
  }, [t, r]);
  return C(() => (l.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), o;
}, kr = (r, t) => {
  const [n, i] = A(null), o = k(
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
}, Ir = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const a = $(() => encodeURIComponent(r), [r]), l = $(
    () => `height=${o},width=${i}`,
    [o, i]
  ), v = $(
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
  ), d = $(
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
  ), g = $(
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
  ), f = $(
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
  ), [p, m] = A(!1), y = $(
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
    copy: y,
    isCopied: p
  };
}, hr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, gr = (r) => {
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
}, Dr = (r) => {
  const [t, n] = A({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return fr(() => {
    const i = navigator.userAgent, o = hr(i), a = gr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: a,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
};
export {
  Er as Accordion,
  jr as AutoScrollContainer,
  Rr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Tr as FocusTrap,
  xr as FormField,
  lr as Loader,
  Sr as LoadingProgress,
  qt as ModalButton,
  yr as SpiceWrapper,
  _r as SplitText,
  Ht as StickyItem,
  wr as Tab,
  ur as Video,
  Dr as useDeviceDetector,
  ar as useFrame,
  sr as useIntersectionObserver,
  Or as useIsTouchDevice,
  fr as useIsomorphicLayoutEffect,
  kr as useMediaQuery,
  Yt as useOverflowDispatch,
  cr as useParseBreakLine,
  nr as useResizeObserver,
  Pr as useScrollDirection,
  Ir as useShare,
  Cr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
