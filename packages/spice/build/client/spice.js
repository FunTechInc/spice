"use client";
import qe, { createContext as z, useContext as V, useState as A, useCallback as k, forwardRef as X, useRef as j, useEffect as C, useMemo as $, memo as Ft, useLayoutEffect as At, useReducer as $t } from "react";
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
function Lt() {
  if (Be)
    return H;
  Be = 1;
  var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(v, d, g) {
    var f, p = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d)
      i.call(d, f) && !u.hasOwnProperty(f) && (p[f] = d[f]);
    if (v && v.defaultProps)
      for (f in d = v.defaultProps, d)
        p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: v, key: m, ref: y, props: p, _owner: o.current };
  }
  return H.Fragment = n, H.jsx = a, H.jsxs = a, H;
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
    var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
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
    var re = !1, nt = !1, it = !1, ot = !1, st = !1, me;
    me = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || st || e === o || e === g || e === f || ot || e === y || re || nt || it || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === a || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ct(e, s, c) {
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
        case u:
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
          case a:
            var c = e;
            return be(c._context) + ".Provider";
          case d:
            return ct(e, e.render, "ForwardRef");
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
    var N = Object.assign, U = 0, ye, xe, we, Ee, Se, Re, _e;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function ut() {
      {
        if (U === 0) {
          ye = console.log, xe = console.info, we = console.warn, Ee = console.error, Se = console.group, Re = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
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
              value: Re
            }),
            groupEnd: N({}, e, {
              value: _e
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
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ft();
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
      S = ne.current, ne.current = null, ut();
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
`), R = b.length - 1, _ = P.length - 1; R >= 1 && _ >= 0 && b[R] !== P[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (b[R] !== P[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || b[R] !== P[_]) {
                    var I = `
` + b[R].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = S, lt(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", Ne = Y ? J(Y) : "";
      return typeof e == "function" && K.set(e, Ne), Ne;
    }
    function dt(e, s, c) {
      return Te(e, !1);
    }
    function vt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, vt(e));
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
            return dt(e.render);
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
    function pt(e, s, c, h, E) {
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
            } catch (R) {
              b = R;
            }
            b && !(b instanceof Error) && (ee(E), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", c, w, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(E), T("Failed %s type: %s", c, b.message), ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
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
    var q = F.ReactCurrentOwner, bt = {
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
      if (typeof e.ref == "string" && q.current && s && q.current.stateNode !== s) {
        var c = L(q.current.type);
        ae[c] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(q.current.type), e.ref), ae[c] = !0);
      }
    }
    function Et(e, s) {
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
    function St(e, s) {
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
        c !== void 0 && (ke(c), b = "" + c), xt(s) && (ke(s.key), b = "" + s.key), yt(s) && (P = s.ref, wt(s, E));
        for (S in s)
          Q.call(s, S) && !bt.hasOwnProperty(S) && (w[S] = s[S]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (S in R)
            w[S] === void 0 && (w[S] = R[S]);
        }
        if (b || P) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && Et(w, _), P && St(w, _);
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
    function jt(e) {
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
    function Tt(e) {
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
        var c = Tt(s);
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
    function Ct(e) {
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
          pt(c, e.props, "prop", h, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = L(s);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
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
        var w = at(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = jt(E);
          P ? b += P : b += Ae();
          var R;
          e === null ? R = "null" : se(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, b);
        }
        var _ = _t(e, s, c, E, S);
        if (_ == null)
          return _;
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
        return e === i ? Ot(_) : Ct(_), _;
      }
    }
    function Pt(e, s, c) {
      return Me(e, s, c, !0);
    }
    function kt(e, s, c) {
      return Me(e, s, c, !1);
    }
    var It = kt, Dt = Pt;
    G.Fragment = i, G.jsx = It, G.jsxs = Dt;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Lt() : ve.exports = Wt();
var l = ve.exports;
const He = z(!0), Ge = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ l.jsx(He.Provider, { value: t, children: /* @__PURE__ */ l.jsx(Ge.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = V(He);
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
}, br = ({ children: r }) => /* @__PURE__ */ l.jsx(Mt, { children: /* @__PURE__ */ l.jsx(Nt, { children: r }) }), Bt = () => V(Ge), ze = ({ formProps: r }) => {
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
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const o = () => {
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
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: u(),
      children: [
        /* @__PURE__ */ l.jsx(o, {}),
        t.options.map((a) => /* @__PURE__ */ l.jsx("option", { value: a, children: a }, a))
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
  const u = k(
    (a) => !o || !o[a] ? null : o[a],
    [o]
  );
  if (r === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsx(i, { formProps: t[0] }),
      u(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ l.jsxs("ul", { children: [
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(i, { formProps: t[0] }),
          u(0)
        ] }),
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(i, { formProps: t[1] }),
          u(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const a = t.map(
      ({ id: v, value: d, style: g, optionLabel: f, ...p }) => /* @__PURE__ */ l.jsxs("li", { children: [
        /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx("label", { htmlFor: v, children: f || d })
      ] }, v)
    );
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      n && /* @__PURE__ */ l.jsx("label", { children: n }),
      /* @__PURE__ */ l.jsx("ul", { children: a }),
      u(0)
    ] });
  }
}, zt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ l.jsx("textarea", { ...n, ...t });
}, yr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  const o = t, u = o[0].type, a = o.length, v = !!o[0].isSelect, d = !!o[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && a > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = k(
    (p) => Ve({
      layoutType: a === 1 ? "block" : "flex",
      formPropsArr: o,
      label: r,
      FormItem: p,
      errors: n
    }),
    [n, o, r, a]
  ), f = k(() => v ? g(Yt) : d ? g(zt) : u === "radio" || u === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: o,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, o, r, v, d, g, u]);
  return /* @__PURE__ */ l.jsx("fieldset", { ...i, children: /* @__PURE__ */ l.jsx(f, {}) });
}, pe = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ue = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Vt = ".spice__modal_close", Ut = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, focusTarget: o, ...u }, a) => {
    const {
      children: v,
      style: d,
      ...g
    } = t, f = j(null), p = k(() => {
      var y;
      Ue("add"), f.current.showModal(), (y = o == null ? void 0 : o.current) == null || y.focus(), n && n(f.current);
    }, [n, o]), m = k(async () => {
      i && await pe(i(f.current)), Ue("remove"), f.current.close();
    }, [i]);
    return C(() => {
      const y = f.current.querySelectorAll(Vt);
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
    }, [m]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          ref: a,
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
Ut.displayName = "ModalButton";
const qt = X(
  ({ children: r, ...t }, n) => {
    const i = Bt();
    return C(() => (i(() => !1), () => {
      i(() => !0);
    }), [i]), /* @__PURE__ */ l.jsx("div", { ref: n, ...t, children: r });
  }
);
qt.displayName = "StickyItem";
const Ht = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Xe = z(Ht), Je = z(
  () => {
  }
), Gt = ({ children: r, defaultValue: t }) => {
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
  return /* @__PURE__ */ l.jsx(Xe.Provider, { value: n, children: /* @__PURE__ */ l.jsx(Je.Provider, { value: i, children: r }) });
}, Ke = () => V(Xe), he = () => V(Je), Xt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = he(), o = Ke(), u = k(() => {
    o.current === t || o.isLeaving || i((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
      next: t
    }));
  }, [i, o, t]);
  return /* @__PURE__ */ l.jsx(
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
}, Ze = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const i = t ? "0" : "-1";
  n.forEach((o) => {
    o.setAttribute("tabindex", i);
  });
}, Jt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: i,
  onReset: o,
  style: u,
  ...a
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const v = j(!0), d = j(null), g = he(), f = Ke(), p = f.current === t && !f.isLeaving;
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
    Ze({
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
      ...a,
      children: r
    }
  );
}, Kt = () => {
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
}, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Xt,
  Content: Jt,
  Context: Gt,
  useTabSwitch: Kt
}, Symbol.toStringTag, { value: "Module" })), Zt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Qe = z(Zt), et = z(() => {
}), Qt = ({ children: r, defaultValue: t }) => {
  const [n, i] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Qe.Provider, { value: n, children: /* @__PURE__ */ l.jsx(et.Provider, { value: i, children: r }) });
}, tt = () => V(Qe), er = () => V(et), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = tt(), o = er(), [u, a] = A(
    () => !!i.defaultValue.find((v) => v === t)
  );
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => {
        o((v) => ({
          ...v,
          toggle: u,
          target: t
        })), a(!u);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": u,
      ...n,
      children: r
    }
  );
}, rr = ({
  targetRef: r,
  onResize: t,
  debounce: n = 100,
  dependencies: i = []
}) => {
  const o = j(0), u = j(!0);
  C(() => {
    const a = new ResizeObserver((d) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(d[0].target);
      }, n);
    }), v = r.current;
    if (v)
      return a.observe(v), () => {
        a.unobserve(v), clearTimeout(o.current);
      };
  }, i);
}, nr = ({
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
  const u = tt(), [a, v] = A(
    () => !!u.defaultValue.find((m) => m === r)
  ), d = j(a);
  C(() => {
    u.target === r && v(!a);
  }, [u.target, u.toggle]);
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
    a ? t(m) : n(m);
  }, [a, t, n]), C(() => {
    Ze({ content: f.current, isOpen: a });
  }, [a]), rr({
    targetRef: p,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      a && (f.current.style.height = `${y}px`);
    },
    dependencies: [a],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: d.current ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ l.jsx("div", { ref: p, ...o, children: i })
    }
  );
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tr,
  Content: nr,
  Context: Qt
}, Symbol.toStringTag, { value: "Module" })), ir = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: i,
  onProgress: o,
  onStart: u,
  onComplete: a
}) => {
  const v = $(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), d = j(null), g = k(
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
          clearInterval(d.current), x > 100 && a && await pe(a(y.getAll())), m(x - 1);
        };
        x === 1 && u && u(y.getAll()), x > p && await O();
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
      a,
      o,
      u,
      r
    ]
  );
  return C(() => () => {
    clearInterval(d.current);
  }, []), f;
}, rt = Ft(
  X((r, t) => /* @__PURE__ */ l.jsxs(
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
rt.displayName = "Digit";
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: ir
}, Symbol.toStringTag, { value: "Module" })), or = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: i = !1,
  onEnter: o,
  onLeave: u,
  dependencies: a = []
}) => {
  const v = j(null), [d, g] = A(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? v.current;
    if (!f)
      return;
    const p = (y, x) => {
      y.forEach((O) => {
        g(O.isIntersecting), O.isIntersecting ? (o && o(O), i && x.unobserve(O.target)) : O.isIntersecting || u && u(O);
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
    u,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...a
  ]), { ref: v, isIntersecting: d };
}, sr = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Sr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = j(null), u = j(null), a = j(null), { isIntersecting: v } = or({
    targetRef: o,
    once: !1
  }), d = j(0);
  return sr(() => {
    if (!v)
      return;
    const g = o.current, f = u.current, p = a.current;
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
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: o,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...i,
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ l.jsx("div", { ref: u, children: r }),
            /* @__PURE__ */ l.jsx("div", { ref: a, children: r })
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
}, ar = (r) => $(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ l.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ l.jsx(
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
  const t = ar(r);
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: t });
}, _r = ({
  type: r = "chars",
  text: t,
  exception: n,
  ...i
}) => {
  const o = r === "chars" ? "" : " ";
  return $(
    () => t.split(M.regex).flatMap((a, v) => M.isRegularBreak(a) ? [null, /* @__PURE__ */ l.jsx("br", {}, v)] : M.isSpecificBreak(a) ? [
      null,
      /* @__PURE__ */ l.jsx(
        "br",
        {
          className: M.getClassName(a)
        },
        v
      )
    ] : [
      ...a.split(o).map((d, g) => {
        if (n) {
          const f = n.find(
            (p) => p.selector === d
          );
          if (f)
            return /* @__PURE__ */ l.jsx(
              "span",
              {
                ...i,
                ...f.attributes,
                children: d
              },
              `${v}-${g}`
            );
        }
        return d === " " ? /* @__PURE__ */ l.jsx("span", { ...i, children: " " }, `${v}-${g}`) : /* @__PURE__ */ l.jsx("span", { ...i, children: d }, `${v}-${g}`);
      }),
      null
    ]),
    [o, t, i, n]
  );
}, cr = X((r, t) => {
  const { fill: n, style: i, ...o } = r;
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
        ...i
      } : i,
      ...o
    }
  );
});
cr.displayName = "Video";
const jr = ({
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
), ur = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: u,
    style: a,
    ...v
  }, d) => {
    const [g, f] = A(t === 0), p = !!u;
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
          ...a
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
                  children: /* @__PURE__ */ l.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ l.jsx(
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
ur.displayName = "Loader";
const lr = typeof document < "u" ? At : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const i = j(0), o = j(0), u = k(() => {
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
}, fr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, dr = (r) => {
  let t = fr;
  typeof r == "string" && (t += r), console.log(t);
}, vr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Tr = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = k(
    (i) => {
      r && vr(i);
    },
    [r]
  );
  ge({
    onResize: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && dr(t);
  }, [t, n]);
}, Cr = () => {
  const [r, t] = A(null), n = k(() => {
    const i = window.ontouchstart, o = navigator.maxTouchPoints;
    i !== void 0 && 0 < o ? t(!0) : t(!1);
  }, []);
  return ge({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), C(() => n(), [n]), r;
}, fe = "scroll", Or = ({
  threshold: r = 0,
  debounce: t = 10,
  dependencies: n = []
}) => {
  const i = j(null), [o, u] = $t(
    (f, p) => {
      switch (p.type) {
        case fe:
          return i.current = p.payload, p.payload;
        default:
          return f;
      }
    },
    i.current
  ), a = j(0), v = j(0), d = () => window.scrollY || document.documentElement.scrollTop, g = k(() => {
    clearTimeout(v.current), v.current = setTimeout(() => {
      const f = d();
      f > a.current + r && i.current !== "down" ? u({ type: fe, payload: "down" }) : f < a.current - r && i.current !== "up" && u({ type: fe, payload: "up" }), a.current = f;
    }, t);
  }, [t, r]);
  return C(() => (a.current = d(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(v.current);
  }), n), o;
}, Pr = (r, t) => {
  const [n, i] = A(null), o = k(
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
}, kr = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: i = 600,
  height: o = 800
}) => {
  const u = $(() => encodeURIComponent(r), [r]), a = $(
    () => `height=${o},width=${i}`,
    [o, i]
  ), v = $(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [u, n, a]
  ), d = $(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [u, a, n]
  ), g = $(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [u, a, n]
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
            url: t || u
          });
        } catch {
          return;
        }
      }
    }),
    [n, u, t]
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
}, pr = (r) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(r))
    return "iOS";
  if (/\bAndroid\b/i.test(r))
    return "Android";
}, hr = (r) => {
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
}, Ir = (r) => {
  const [t, n] = A({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return lr(() => {
    const i = navigator.userAgent, o = pr(i), u = hr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: u,
      userAgent: i,
      testing: r && r(i)
    });
  }, []), t;
};
export {
  wr as Accordion,
  Sr as AutoScrollContainer,
  Rr as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  jr as FocusTrap,
  yr as FormField,
  ur as Loader,
  Er as LoadingProgress,
  Ut as ModalButton,
  br as SpiceWrapper,
  _r as SplitText,
  qt as StickyItem,
  xr as Tab,
  cr as Video,
  Ir as useDeviceDetector,
  sr as useFrame,
  or as useIntersectionObserver,
  Cr as useIsTouchDevice,
  lr as useIsomorphicLayoutEffect,
  Pr as useMediaQuery,
  Bt as useOverflowDispatch,
  ar as useParseBreakLine,
  rr as useResizeObserver,
  Or as useScrollDirection,
  kr as useShare,
  Tr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
