"use client";
import qe, { createContext as z, useContext as V, useState as $, useCallback as I, forwardRef as X, useRef as T, useEffect as C, useMemo as k, memo as Ft, useLayoutEffect as At, useReducer as $t } from "react";
import de from "gsap";
var pe = { exports: {} }, H = {};
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
  var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, p, g) {
    var f, v = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), p.key !== void 0 && (m = "" + p.key), p.ref !== void 0 && (y = p.ref);
    for (f in p)
      i.call(p, f) && !c.hasOwnProperty(f) && (v[f] = p[f]);
    if (d && d.defaultProps)
      for (f in p = d.defaultProps, p)
        v[f] === void 0 && (v[f] = p[f]);
    return { $$typeof: t, type: d, key: m, ref: y, props: v, _owner: o.current };
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
function Wt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, O = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = x && e[x] || e[O];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          a[h - 1] = arguments[h];
        te("error", e, a);
      }
    }
    function te(e, s, a) {
      {
        var h = A.ReactDebugCurrentFrame, E = h.getStackAddendum();
        E !== "" && (s += "%s", a = a.concat([E]));
        var S = a.map(function(w) {
          return String(w);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, nt = !1, it = !1, ot = !1, st = !1, me;
    me = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === c || st || e === o || e === g || e === f || ot || e === y || re || nt || it || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === l || e.$$typeof === d || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ct(e, s, a) {
      var h = e.displayName;
      if (h)
        return h;
      var E = s.displayName || s.name || "";
      return E !== "" ? a + "(" + E + ")" : a;
    }
    function be(e) {
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
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case c:
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
          case d:
            var s = e;
            return be(s) + ".Consumer";
          case l:
            var a = e;
            return be(a._context) + ".Provider";
          case p:
            return ct(e, e.render, "ForwardRef");
          case v:
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
        U < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = A.ReactCurrentDispatcher, ie;
    function J(e, s, a) {
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
        var a = K.get(e);
        if (a !== void 0)
          return a;
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
                    var D = `
` + b[R].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, D), D;
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
    function dt(e, s, a) {
      return Te(e, !1);
    }
    function pt(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(e, s, a) {
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
          case p:
            return dt(e.render);
          case v:
            return Z(e.type, s, a);
          case m: {
            var h = e, E = h._payload, S = h._init;
            try {
              return Z(S(E), s, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, a = Z(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(a);
      } else
        Oe.setExtraStackFrame(null);
    }
    function vt(e, s, a, h, E) {
      {
        var S = Function.call.bind(Q);
        for (var w in e)
          if (S(e, w)) {
            var b = void 0;
            try {
              if (typeof e[w] != "function") {
                var P = Error((h || "React class") + ": " + a + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = e[w](s, w, h, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              b = R;
            }
            b && !(b instanceof Error) && (ee(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", a, w, typeof b), ee(null)), b instanceof Error && !(b.message in Ce) && (Ce[b.message] = !0, ee(E), j("Failed %s type: %s", a, b.message), ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, a = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Pe(e);
    }
    var q = A.ReactCurrentOwner, bt = {
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
        var a = L(q.current.type);
        ae[a] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(q.current.type), e.ref), ae[a] = !0);
      }
    }
    function Et(e, s) {
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
    function St(e, s) {
      {
        var a = function() {
          De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Rt = function(e, s, a, h, E, S, w) {
      var b = {
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
    function _t(e, s, a, h, E) {
      {
        var S, w = {}, b = null, P = null;
        a !== void 0 && (ke(a), b = "" + a), xt(s) && (ke(s.key), b = "" + s.key), yt(s) && (P = s.ref, wt(s, E));
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
    var ce = A.ReactCurrentOwner, Fe = A.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, a = Z(e.type, e._source, s ? s.type : null);
        Fe.setExtraStackFrame(a);
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
          var s = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + s + ":" + a + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Tt(e) {
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
    function Le(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Tt(s);
        if ($e[a])
          return;
        $e[a] = !0;
        var h = "";
        e && e._owner && e._owner !== ce.current && (h = " It was passed a child from " + L(e._owner.type) + "."), B(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, h), B(null);
      }
    }
    function We(e, s) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var a = 0; a < e.length; a++) {
            var h = e[a];
            le(h) && Le(h, s);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = F(e);
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
        var a;
        if (typeof s == "function")
          a = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          a = s.propTypes;
        else
          return;
        if (a) {
          var h = L(s);
          vt(a, e.props, "prop", h, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = L(s);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var s = Object.keys(e.props), a = 0; a < s.length; a++) {
          var h = s[a];
          if (h !== "children" && h !== "key") {
            B(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Me(e, s, a, h, E, S) {
      {
        var w = at(e);
        if (!w) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = jt(E);
          P ? b += P : b += Ae();
          var R;
          e === null ? R = "null" : se(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + (L(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, b);
        }
        var _ = _t(e, s, a, E, S);
        if (_ == null)
          return _;
        if (w) {
          var D = s.children;
          if (D !== void 0)
            if (h)
              if (se(D)) {
                for (var Y = 0; Y < D.length; Y++)
                  We(D[Y], e);
                Object.freeze && Object.freeze(D);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(D, e);
        }
        return e === i ? Ot(_) : Ct(_), _;
      }
    }
    function Pt(e, s, a) {
      return Me(e, s, a, !0);
    }
    function kt(e, s, a) {
      return Me(e, s, a, !1);
    }
    var It = kt, Dt = Pt;
    G.Fragment = i, G.jsx = It, G.jsxs = Dt;
  }()), G;
}
process.env.NODE_ENV === "production" ? pe.exports = Lt() : pe.exports = Wt();
var u = pe.exports;
const He = z(!0), Ge = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = $(!0);
  return /* @__PURE__ */ u.jsx(He.Provider, { value: t, children: /* @__PURE__ */ u.jsx(Ge.Provider, { value: n, children: r }) });
}, Nt = ({ children: r }) => {
  const t = V(He);
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
}, br = ({ children: r }) => /* @__PURE__ */ u.jsx(Mt, { children: /* @__PURE__ */ u.jsx(Nt, { children: r }) }), Bt = () => V(Ge), ze = ({ formProps: r }) => {
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
}, Yt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...i } = r;
  if (!t)
    return;
  const o = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ u.jsx("option", { hidden: !0, children: l }) : null;
  }, c = () => {
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
      defaultValue: c(),
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
  const c = I(
    (l) => !o || !o[l] ? null : o[l],
    [o]
  );
  if (r === "block")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ u.jsx(i, { formProps: t[0] }),
      c(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ u.jsxs("ul", { children: [
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(i, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(i, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map(
      ({ id: d, value: p, style: g, optionLabel: f, ...v }) => /* @__PURE__ */ u.jsxs("li", { children: [
        /* @__PURE__ */ u.jsx(
          i,
          {
            formProps: {
              id: d,
              value: p,
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
              ...v
            }
          }
        ),
        /* @__PURE__ */ u.jsx("label", { htmlFor: d, children: f || p })
      ] }, d)
    );
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      n && /* @__PURE__ */ u.jsx("label", { children: n }),
      /* @__PURE__ */ u.jsx("ul", { children: l }),
      c(0)
    ] });
  }
}, zt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ u.jsx("textarea", { ...n, ...t });
}, yr = ({
  label: r,
  formProps: t,
  errors: n,
  ...i
}) => {
  const o = t, c = o[0].type, l = o.length, d = !!o[0].isSelect, p = !!o[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = I(
    (v) => Ve({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: o,
      label: r,
      FormItem: v,
      errors: n
    }),
    [n, o, r, l]
  ), f = I(() => d ? g(Yt) : p ? g(zt) : c === "radio" || c === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: o,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, o, r, d, p, g, c]);
  return /* @__PURE__ */ u.jsx("fieldset", { ...i, children: /* @__PURE__ */ u.jsx(f, {}) });
}, ve = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ue = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Vt = ".spice__modal_close", Ut = X(
  ({ children: r, dialog: t, onOpen: n, onClose: i, focusTarget: o, ...c }, l) => {
    const {
      children: d,
      style: p,
      ...g
    } = t, f = T(null), v = I(() => {
      var y;
      Ue("add"), f.current.showModal(), (y = o == null ? void 0 : o.current) == null || y.focus(), n && n(f.current);
    }, [n, o]), m = I(async () => {
      i && await ve(i(f.current)), Ue("remove"), f.current.close();
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
        var F;
        ((F = f.current) == null ? void 0 : F.hasAttribute("open")) && x.key === "Escape" && m();
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
            v();
          },
          ...c,
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
            ...p || {}
          },
          ...g,
          children: d
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
    }), [i]), /* @__PURE__ */ u.jsx("div", { ref: n, ...t, children: r });
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
  const [n, i] = $({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ u.jsx(Xe.Provider, { value: n, children: /* @__PURE__ */ u.jsx(Je.Provider, { value: i, children: r }) });
}, Ke = () => V(Xe), he = () => V(Je), Xt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = he(), o = Ke(), c = I(() => {
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
      onClick: c,
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
  style: c,
  ...l
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const d = T(!0), p = T(null), g = he(), f = Ke(), v = f.current === t && !f.isLeaving;
  return C(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    if (!f.isAnimation) {
      v && o && o(p.current);
      return;
    }
    f.prev === t && (async () => (i && await ve(i(p.current)), g((m) => ({
      ...m,
      isLeaving: !1,
      prev: "",
      current: m.next,
      next: ""
    }))))(), v && n && n(p.current);
  }, [f, g, n, i, o, t, v]), C(() => {
    Ze({
      content: p.current,
      isOpen: f.current === t
    });
  }, [f, t]), /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: p,
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
      ...l,
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
  const [n, i] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ u.jsx(Qe.Provider, { value: n, children: /* @__PURE__ */ u.jsx(et.Provider, { value: i, children: r }) });
}, tt = () => V(Qe), er = () => V(et), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = tt(), o = er(), c = k(
    () => !!i.defaultValue.find((p) => p === t),
    [i, t]
  ), [l, d] = $(c);
  return /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: () => {
        o((p) => ({
          ...p,
          toggle: l,
          target: t
        })), d(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
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
  const o = T(0), c = T(!0);
  C(() => {
    const l = new ResizeObserver((p) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(p[0].target);
      }, n);
    }), d = r.current;
    if (d)
      return l.observe(d), () => {
        l.unobserve(d), clearTimeout(o.current);
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
  const c = tt(), l = k(
    () => !!c.defaultValue.find((m) => m === r),
    [c, r]
  ), [d, p] = $(l);
  k(() => {
    c.target === r && p(!d);
  }, [c.target, c.toggle]);
  const g = T(!0), f = T(null), v = T(null);
  return C(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const m = {
      height: v.current.getBoundingClientRect().height,
      target: f.current
    };
    d ? t(m) : n(m);
  }, [d, t, n]), C(() => {
    Ze({ content: f.current, isOpen: d });
  }, [d]), rr({
    targetRef: v,
    onResize: (m) => {
      const y = m.getBoundingClientRect().height;
      d && (f.current.style.height = `${y}px`);
    },
    dependencies: [d],
    debounce: 100
  }), /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: l ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !d,
      children: /* @__PURE__ */ u.jsx("div", { ref: v, ...o, children: i })
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
  onStart: c,
  onComplete: l
}) => {
  const d = k(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), p = T(null), g = I(
    ({
      digitContainer: v,
      numbersTarget: m,
      digit: y,
      digitNumber: x,
      currentPercent: O,
      limit: F,
      destination: A
    }) => {
      if (d[y] !== x && O <= F) {
        const j = x.toString(), te = (Math.min(8, x) + 1).toString(), re = O >= F;
        m[0].innerText = j, m[1].innerText = re ? "0" : te, o && o({
          digitContainer: v,
          percent: O,
          digit: y,
          destination: A,
          duration: r / (A / y)
        }), d[y] = x;
      }
    },
    [d, o, r]
  ), f = I(
    (v) => (v > 100 && (v = 100), new Promise((m) => {
      if (v === 0)
        return;
      const y = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: i.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(p.current), p.current = setInterval(async () => {
        const x = d.to += 1, O = async () => {
          clearInterval(p.current), x > 100 && l && await ve(l(y.getAll())), m(x - 1);
        };
        x === 1 && c && c(y.getAll()), x > v && await O();
        const F = Math.floor(x / 100) % 100, A = Math.floor(x / 10) % 10, j = x % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: x,
          numbersTarget: y.ones,
          limit: 90,
          destination: v
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: A,
          currentPercent: x,
          numbersTarget: y.tens,
          limit: 90,
          destination: v
        }), d[100] !== F && (y.hundreds[1].innerText = F.toString(), o && o({
          digitContainer: i.current,
          percent: x,
          digit: 100,
          destination: v,
          duration: r / (v / 10)
        }), d[100] = F);
      }, Math.max(1e3 / 60, r / v * 1e3));
    })),
    [
      d,
      g,
      n,
      i,
      t,
      l,
      o,
      c,
      r
    ]
  );
  return C(() => () => {
    clearInterval(p.current);
  }, []), f;
}, rt = Ft(
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
  onLeave: c,
  dependencies: l = []
}) => {
  const d = T(null), [p, g] = $(!1);
  return C(() => {
    const f = (r == null ? void 0 : r.current) ?? d.current;
    if (!f)
      return;
    const v = (y, x) => {
      y.forEach((O) => {
        g(O.isIntersecting), O.isIntersecting ? (o && o(O), i && x.unobserve(O.target)) : O.isIntersecting || c && c(O);
      });
    }, m = new IntersectionObserver(v, {
      rootMargin: t,
      threshold: n
    });
    return m.observe(f), () => {
      m.unobserve(f);
    };
  }, [
    d,
    o,
    c,
    i,
    n,
    t,
    r,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...l
  ]), { ref: d, isIntersecting: p };
}, sr = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Sr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...i
}) => {
  const o = T(null), c = T(null), l = T(null), { isIntersecting: d } = or({
    targetRef: o,
    once: !1
  }), p = T(0);
  return sr(() => {
    if (!d)
      return;
    const g = o.current, f = c.current, v = l.current;
    if (!g || !f || !v)
      return;
    const m = de.ticker.deltaRatio() / 1e3, y = g.clientWidth / f.clientWidth;
    if (p.current += m * Math.abs(t) * y, p.current >= 1 && (p.current = 0), t < 0) {
      const x = p.current * -100;
      f.style.transform = `translateX(${x}%)`, v.style.transform = `translateX(${x}%)`;
    } else {
      const x = p.current * 100;
      f.style.transform = `translateX(${x}%)`, v.style.transform = `translateX(${x - 200}%)`;
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
            /* @__PURE__ */ u.jsx("div", { ref: c, children: r }),
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
}, ar = (r) => k(
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
  const t = ar(r);
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: t });
}, _r = ({
  type: r = "chars",
  text: t,
  exception: n,
  ...i
}) => {
  const o = r === "chars" ? "" : " ";
  return k(
    () => t.split(M.regex).flatMap((l, d) => M.isRegularBreak(l) ? [null, /* @__PURE__ */ u.jsx("br", {}, d)] : M.isSpecificBreak(l) ? [
      null,
      /* @__PURE__ */ u.jsx(
        "br",
        {
          className: M.getClassName(l)
        },
        d
      )
    ] : [
      ...l.split(o).map((p, g) => {
        if (n) {
          const f = n.find(
            (v) => v.selector === p
          );
          if (f)
            return /* @__PURE__ */ u.jsx(
              "span",
              {
                ...i,
                ...f.attributes,
                children: p
              },
              `${d}-${g}`
            );
        }
        return p === " " ? /* @__PURE__ */ u.jsx("span", { ...i, children: " " }, `${d}-${g}`) : /* @__PURE__ */ u.jsx("span", { ...i, children: p }, `${d}-${g}`);
      }),
      null
    ]),
    [o, t, i, n]
  );
}, cr = X((r, t) => {
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
cr.displayName = "Video";
const jr = ({
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
), ur = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: i,
    circular: o,
    children: c,
    style: l,
    ...d
  }, p) => {
    const [g, f] = $(t === 0), v = !!c;
    return C(() => {
      t !== 0 && setTimeout(() => f(!0), t);
    }, [t]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: p,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...v ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...l
        },
        ...d,
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
              v && /* @__PURE__ */ u.jsx("div", { style: { visibility: "hidden" }, children: c })
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
  const i = T(0), o = T(0), c = I(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      r({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: i.current
      });
    }, t);
  }, [r, t]);
  C(() => (i.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(o.current);
  }), n);
}, fr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, dr = (r) => {
  let t = fr;
  typeof r == "string" && (t += r), console.log(t);
}, pr = (r) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = r > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Tr = ({
  isFixViewportForSmall: r = !0,
  areYouFun: t = !1
} = {}) => {
  const n = I(
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
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && dr(t);
  }, [t, n]);
}, Cr = () => {
  const [r, t] = $(null), n = I(() => {
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
  const i = T(null), [o, c] = $t(
    (f, v) => {
      switch (v.type) {
        case fe:
          return i.current = v.payload, v.payload;
        default:
          return f;
      }
    },
    i.current
  ), l = T(0), d = T(0), p = () => window.scrollY || document.documentElement.scrollTop, g = I(() => {
    clearTimeout(d.current), d.current = setTimeout(() => {
      const f = p();
      f > l.current + r && i.current !== "down" ? c({ type: fe, payload: "down" }) : f < l.current - r && i.current !== "up" && c({ type: fe, payload: "up" }), l.current = f;
    }, t);
  }, [t, r]);
  return C(() => (l.current = p(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(d.current);
  }), n), o;
}, Pr = (r, t) => {
  const [n, i] = $(null), o = I(
    (c) => {
      switch (r) {
        case "max":
          i(t >= c);
          break;
        case "min":
          i(t <= c);
          break;
      }
    },
    [r, t]
  );
  return ge({
    onResize: ({ winW: c }) => o(c),
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
  const c = k(() => encodeURIComponent(r), [r]), l = k(
    () => `height=${o},width=${i}`,
    [o, i]
  ), d = k(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${c}&t=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, n, l]
  ), p = k(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${c}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, n]
  ), g = k(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${c}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [c, l, n]
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
  ), [v, m] = $(!1), y = k(
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
    Facebook: d,
    X: p,
    LINE: g,
    share: f,
    copy: y,
    isCopied: v
  };
}, vr = (r) => {
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
  const [t, n] = $({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return lr(() => {
    const i = navigator.userAgent, o = vr(i), c = hr(i);
    n({
      mobileOS: o,
      isMobile: /Mobi/.test(i),
      renderingEngine: c,
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
