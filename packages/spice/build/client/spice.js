"use client";
import qe, { createContext as z, useContext as V, useState as A, useCallback as k, forwardRef as X, useRef as T, useEffect as C, useMemo as P, memo as Ft, useLayoutEffect as At, useReducer as $t } from "react";
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
  var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(p, f, g) {
    var d, v = {}, b = null, m = null;
    g !== void 0 && (b = "" + g), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (d in f)
      o.call(f, d) && !u.hasOwnProperty(d) && (v[d] = f[d]);
    if (p && p.defaultProps)
      for (d in f = p.defaultProps, f)
        v[d] === void 0 && (v[d] = f[d]);
    return { $$typeof: t, type: p, key: b, ref: m, props: v, _owner: i.current };
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
    var r = qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), w = Symbol.iterator, W = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = w && e[w] || e[W];
      return typeof s == "function" ? s : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          a[h - 1] = arguments[h];
        te("error", e, a);
      }
    }
    function te(e, s, a) {
      {
        var h = F.ReactDebugCurrentFrame, E = h.getStackAddendum();
        E !== "" && (s += "%s", a = a.concat([E]));
        var S = a.map(function(x) {
          return String(x);
        });
        S.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var re = !1, nt = !1, ot = !1, it = !1, st = !1, me;
    me = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || st || e === i || e === g || e === d || it || e === m || re || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === v || e.$$typeof === l || e.$$typeof === p || e.$$typeof === f || // This needs to include all possible module reference object
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
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var s = e;
            return be(s) + ".Consumer";
          case l:
            var a = e;
            return be(a._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case v:
            var h = e.displayName || null;
            return h !== null ? h : $(e.type) || "Memo";
          case b: {
            var E = e, S = E._payload, x = E._init;
            try {
              return $(x(S));
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
    var ne = F.ReactCurrentDispatcher, oe;
    function J(e, s, a) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (E) {
            var h = E.stack.trim().match(/\n( *(at )?)/);
            oe = h && h[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, K;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ft();
    }
    function Te(e, s) {
      if (!e || ie)
        return "";
      {
        var a = K.get(e);
        if (a !== void 0)
          return a;
      }
      var h;
      ie = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ne.current, ne.current = null, ut();
      try {
        if (s) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (L) {
              h = L;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (L) {
              h = L;
            }
            e.call(x.prototype);
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
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, I), I;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = S, lt(), Error.prepareStackTrace = E;
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
        case d:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return dt(e.render);
          case v:
            return Z(e.type, s, a);
          case b: {
            var h = e, E = h._payload, S = h._init;
            try {
              return Z(S(E), s, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ce = {}, Oe = F.ReactDebugCurrentFrame;
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
        for (var x in e)
          if (S(e, x)) {
            var y = void 0;
            try {
              if (typeof e[x] != "function") {
                var O = Error((h || "React class") + ": " + a + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              y = e[x](s, x, h, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (ee(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", a, x, typeof y), ee(null)), y instanceof Error && !(y.message in Ce) && (Ce[y.message] = !0, ee(E), j("Failed %s type: %s", a, y.message), ee(null));
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
        var a = $(q.current.type);
        ae[a] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(q.current.type), e.ref), ae[a] = !0);
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
    var Rt = function(e, s, a, h, E, S, x) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: a,
        props: x,
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
        var S, x = {}, y = null, O = null;
        a !== void 0 && (ke(a), y = "" + a), xt(s) && (ke(s.key), y = "" + s.key), yt(s) && (O = s.ref, wt(s, E));
        for (S in s)
          Q.call(s, S) && !bt.hasOwnProperty(S) && (x[S] = s[S]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (S in R)
            x[S] === void 0 && (x[S] = R[S]);
        }
        if (y || O) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && Et(x, _), O && St(x, _);
        }
        return Rt(e, y, O, E, h, q.current, x);
      }
    }
    var ce = F.ReactCurrentOwner, Fe = F.ReactDebugCurrentFrame;
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
          var e = $(ce.current.type);
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
        e && e._owner && e._owner !== ce.current && (h = " It was passed a child from " + $(e._owner.type) + "."), B(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, h), B(null);
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
          var E = D(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), x; !(x = S.next()).done; )
              le(x.value) && Le(x.value, s);
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
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          a = s.propTypes;
        else
          return;
        if (a) {
          var h = $(s);
          vt(a, e.props, "prop", h, e);
        } else if (s.PropTypes !== void 0 && !ue) {
          ue = !0;
          var E = $(s);
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
        var x = at(e);
        if (!x) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = jt(E);
          O ? y += O : y += Ae();
          var R;
          e === null ? R = "null" : se(e) ? R = "array" : e !== void 0 && e.$$typeof === t ? (R = "<" + ($(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, y);
        }
        var _ = _t(e, s, a, E, S);
        if (_ == null)
          return _;
        if (x) {
          var I = s.children;
          if (I !== void 0)
            if (h)
              if (se(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  We(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(I, e);
        }
        return e === o ? Ot(_) : Ct(_), _;
      }
    }
    function Pt(e, s, a) {
      return Me(e, s, a, !0);
    }
    function kt(e, s, a) {
      return Me(e, s, a, !1);
    }
    var It = kt, Dt = Pt;
    G.Fragment = o, G.jsx = It, G.jsxs = Dt;
  }()), G;
}
process.env.NODE_ENV === "production" ? pe.exports = Lt() : pe.exports = Wt();
var c = pe.exports;
const He = z(!0), Ge = z((r) => !r), Mt = ({ children: r }) => {
  const [t, n] = A(!0);
  return /* @__PURE__ */ c.jsx(He.Provider, { value: t, children: /* @__PURE__ */ c.jsx(Ge.Provider, { value: n, children: r }) });
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
}, yr = ({ children: r }) => /* @__PURE__ */ c.jsx(Mt, { children: /* @__PURE__ */ c.jsx(Nt, { children: r }) }), Bt = () => V(Ge), ze = ({ formProps: r }) => {
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
}, Yt = ({ formProps: r }) => {
  const { isSelect: t, style: n, ...o } = r;
  if (!t)
    return;
  const i = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ c.jsx("option", { hidden: !0, children: l }) : null;
  }, u = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx(i, {}),
        t.options.map((l) => /* @__PURE__ */ c.jsx("option", { value: l, children: l }, l))
      ]
    }
  );
}, Ve = ({
  layoutType: r,
  formPropsArr: t,
  label: n,
  FormItem: o,
  errors: i
}) => {
  const u = k(
    (l) => !i || !i[l] ? null : i[l],
    [i]
  );
  if (r === "block")
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ c.jsx(o, { formProps: t[0] }),
      u(0)
    ] });
  if (r === "flex")
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ c.jsxs("ul", { children: [
        /* @__PURE__ */ c.jsxs("li", { children: [
          /* @__PURE__ */ c.jsx(o, { formProps: t[0] }),
          u(0)
        ] }),
        /* @__PURE__ */ c.jsxs("li", { children: [
          /* @__PURE__ */ c.jsx(o, { formProps: t[1] }),
          u(1)
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const l = t.map(
      ({ id: p, value: f, style: g, optionLabel: d, ...v }) => /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx(
          o,
          {
            formProps: {
              id: p,
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
                ...g || {}
              },
              ...v
            }
          }
        ),
        /* @__PURE__ */ c.jsx("label", { htmlFor: p, children: d || f })
      ] }, p)
    );
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      n && /* @__PURE__ */ c.jsx("label", { children: n }),
      /* @__PURE__ */ c.jsx("ul", { children: l }),
      u(0)
    ] });
  }
}, zt = ({ formProps: r }) => {
  const { isTextarea: t, ...n } = r;
  if (t)
    return /* @__PURE__ */ c.jsx("textarea", { ...n, ...t });
}, xr = ({
  label: r,
  formProps: t,
  errors: n,
  ...o
}) => {
  const i = t, u = i[0].type, l = i.length, p = !!i[0].isSelect, f = !!i[0].isTextarea;
  if (!(u === "radio" || u === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = k(
    (v) => Ve({
      layoutType: l === 1 ? "block" : "flex",
      formPropsArr: i,
      label: r,
      FormItem: v,
      errors: n
    }),
    [n, i, r, l]
  ), d = k(() => p ? g(Yt) : f ? g(zt) : u === "radio" || u === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: i,
    label: r,
    FormItem: ze,
    errors: n
  }) : g(ze), [n, i, r, p, f, g, u]);
  return /* @__PURE__ */ c.jsx("fieldset", { ...o, children: /* @__PURE__ */ c.jsx(d, {}) });
}, ve = (r) => new Promise((t) => {
  r instanceof Promise ? r.then(() => {
    t(null);
  }) : t(null);
}), Ue = (r) => {
  const t = document.documentElement.style, n = document.body.style;
  r === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", n.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", n.overflow = "");
}, Vt = ".spice__modal_close", Ut = X(
  ({ children: r, dialog: t, onOpen: n, onClose: o, focusTarget: i, ...u }, l) => {
    const {
      children: p,
      style: f,
      ...g
    } = t, d = T(null), v = k(() => {
      var m;
      Ue("add"), d.current.showModal(), (m = i == null ? void 0 : i.current) == null || m.focus(), n && n(d.current);
    }, [n, i]), b = k(async () => {
      o && await ve(o(d.current)), Ue("remove"), d.current.close();
    }, [o]);
    return C(() => {
      const m = d.current.querySelectorAll(Vt);
      if (m)
        return m.forEach(
          (w) => w.addEventListener("click", b)
        ), () => {
          m.forEach(
            (w) => w.removeEventListener("click", b)
          );
        };
    }, [b]), C(() => {
      const m = (w) => {
        var D;
        ((D = d.current) == null ? void 0 : D.hasAttribute("open")) && w.key === "Escape" && b();
      };
      return window.addEventListener("keydown", m), () => {
        window.removeEventListener("keydown", m);
      };
    }, [b]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          ref: l,
          onClick: () => {
            v();
          },
          ...u,
          children: r
        }
      ),
      /* @__PURE__ */ c.jsx(
        "dialog",
        {
          ref: d,
          onClick: (m) => {
            m.target === d.current && b();
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
            ...f || {}
          },
          ...g,
          children: p
        }
      )
    ] });
  }
);
Ut.displayName = "ModalButton";
const qt = X(
  ({ children: r, ...t }, n) => {
    const o = Bt();
    return C(() => (o(() => !1), () => {
      o(() => !0);
    }), [o]), /* @__PURE__ */ c.jsx("div", { ref: n, ...t, children: r });
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
  const [n, o] = A({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ c.jsx(Xe.Provider, { value: n, children: /* @__PURE__ */ c.jsx(Je.Provider, { value: o, children: r }) });
}, Ke = () => V(Xe), he = () => V(Je), Xt = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = he(), i = Ke(), u = k(() => {
    i.current === t || i.isLeaving || o((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
      next: t
    }));
  }, [o, i, t]);
  return /* @__PURE__ */ c.jsx(
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
}, Ze = ({ content: r, isOpen: t }) => {
  const n = r.querySelectorAll("a,button");
  if (!n)
    return;
  const o = t ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Jt = ({
  children: r,
  value: t,
  onOpen: n,
  onClose: o,
  onReset: i,
  style: u,
  ...l
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const p = T(!0), f = T(null), g = he(), d = Ke(), v = d.current === t && !d.isLeaving;
  return C(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    if (!d.isAnimation) {
      v && i && i(f.current);
      return;
    }
    d.prev === t && (async () => (o && await ve(o(f.current)), g((b) => ({
      ...b,
      isLeaving: !1,
      prev: "",
      current: b.next,
      next: ""
    }))))(), v && n && n(f.current);
  }, [d, g, n, o, i, t, v]), C(() => {
    Ze({
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
        ...u
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": d.current !== t,
      ...l,
      children: r
    }
  );
}, Kt = () => {
  const r = he();
  return (t, n) => {
    r((o) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? o.current : "",
      current: n ? o.current : t,
      next: n ? t : ""
    }));
  };
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  const [n, o] = A({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ c.jsx(Qe.Provider, { value: n, children: /* @__PURE__ */ c.jsx(et.Provider, { value: o, children: r }) });
}, tt = () => V(Qe), er = () => V(et), tr = ({ children: r, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = tt(), i = er(), u = P(
    () => !!o.defaultValue.find((f) => f === t),
    [o, t]
  ), [l, p] = A(u);
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => {
        i((f) => ({
          ...f,
          toggle: l,
          target: t
        })), p(!l);
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
  dependencies: o = []
}) => {
  const i = T(0), u = T(!0);
  C(() => {
    const l = new ResizeObserver((f) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        t(f[0].target);
      }, n);
    }), p = r.current;
    if (p)
      return l.observe(p), () => {
        l.unobserve(p), clearTimeout(i.current);
      };
  }, o);
}, nr = ({
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
  const u = tt(), l = P(
    () => !!u.defaultValue.find((b) => b === r),
    [u, r]
  ), [p, f] = A(l);
  P(() => {
    u.target === r && f(!p);
  }, [u.target, u.toggle]);
  const g = T(!0), d = T(null), v = T(null);
  return C(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const b = {
      height: v.current.getBoundingClientRect().height,
      target: d.current
    };
    p ? t(b) : n(b);
  }, [p, t, n]), C(() => {
    Ze({ content: d.current, isOpen: p });
  }, [p]), rr({
    targetRef: v,
    onResize: (b) => {
      const m = b.getBoundingClientRect().height;
      p && (d.current.style.height = `${m}px`);
    },
    dependencies: [p],
    debounce: 100
  }), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: d,
      style: {
        overflow: "hidden",
        height: l ? "auto" : "0px"
      },
      id: `content-${r}`,
      "aria-labelledby": `button-${r}`,
      "aria-hidden": !p,
      children: /* @__PURE__ */ c.jsx("div", { ref: v, ...i, children: o })
    }
  );
}, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tr,
  Content: nr,
  Context: Qt
}, Symbol.toStringTag, { value: "Module" })), or = ({
  tempo: r = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: o,
  onProgress: i,
  onStart: u,
  onComplete: l
}) => {
  const p = P(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), f = T(null), g = k(
    ({
      digitContainer: v,
      numbersTarget: b,
      digit: m,
      digitNumber: w,
      currentPercent: W,
      limit: D,
      destination: F
    }) => {
      if (p[m] !== w && W <= D) {
        const j = w.toString(), te = (Math.min(8, w) + 1).toString(), re = W >= D;
        b[0].innerText = j, b[1].innerText = re ? "0" : te, i && i({
          digitContainer: v,
          percent: W,
          digit: m,
          destination: F,
          duration: r / (F / m)
        }), p[m] = w;
      }
    },
    [p, i, r]
  ), d = k(
    (v) => (v > 100 && (v = 100), new Promise((b) => {
      if (v === 0)
        return;
      const m = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: o.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(f.current), f.current = setInterval(async () => {
        const w = p.to += 1, W = async () => {
          clearInterval(f.current), w > 100 && l && await ve(l(m.getAll())), b(w - 1);
        };
        w === 1 && u && u(m.getAll()), w > v && await W();
        const D = Math.floor(w / 100) % 100, F = Math.floor(w / 10) % 10, j = w % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: j,
          currentPercent: w,
          numbersTarget: m.ones,
          limit: 90,
          destination: v
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: F,
          currentPercent: w,
          numbersTarget: m.tens,
          limit: 90,
          destination: v
        }), p[100] !== D && (m.hundreds[1].innerText = D.toString(), i && i({
          digitContainer: o.current,
          percent: w,
          digit: 100,
          destination: v,
          duration: r / (v / 10)
        }), p[100] = D);
      }, Math.max(1e3 / 60, r / v * 1e3));
    })),
    [
      p,
      g,
      n,
      o,
      t,
      l,
      i,
      u,
      r
    ]
  );
  return C(() => () => {
    clearInterval(f.current);
  }, []), d;
}, rt = Ft(
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
rt.displayName = "Digit";
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: rt,
  useLoadingProgress: or
}, Symbol.toStringTag, { value: "Module" })), ir = ({
  targetRef: r,
  rootMargin: t = "0px",
  threshold: n = 0,
  once: o = !1,
  onEnter: i,
  onLeave: u,
  dependencies: l = []
}) => {
  const p = {
    rootMargin: t,
    threshold: n
  };
  C(() => {
    const f = r == null ? void 0 : r.current;
    if (!f)
      return;
    const g = (v, b) => {
      v.forEach((m) => {
        m.isIntersecting && i ? (i(m), o && b.unobserve(m.target)) : !m.isIntersecting && u && u(m);
      });
    }, d = new IntersectionObserver(g, p);
    return d.observe(f), () => {
      d.unobserve(f);
    };
  }, l);
}, sr = (r) => {
  const [t, n] = A(!1);
  return ir({
    ...r,
    onEnter: () => n(!0),
    onLeave: () => n(!1)
  }), t;
}, ar = (r, t, n) => {
  C(() => (de.ticker.add(r, t, n), () => de.ticker.remove(r)), [t, n, r]);
}, Rr = ({
  children: r,
  speed: t = 1,
  style: n,
  ...o
}) => {
  const i = T(null), u = T(null), l = T(null), p = sr({
    targetRef: i,
    once: !1
  }), f = T(0);
  return ar(() => {
    if (!p)
      return;
    const g = i.current, d = u.current, v = l.current;
    if (!g || !d || !v)
      return;
    const b = de.ticker.deltaRatio() / 1e3, m = g.clientWidth / d.clientWidth;
    if (f.current += b * Math.abs(t) * m, f.current >= 1 && (f.current = 0), t < 0) {
      const w = f.current * -100;
      d.style.transform = `translateX(${w}%)`, v.style.transform = `translateX(${w}%)`;
    } else {
      const w = f.current * 100;
      d.style.transform = `translateX(${w}%)`, v.style.transform = `translateX(${w - 200}%)`;
    }
  }), /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: i,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...o,
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ c.jsx("div", { ref: u, children: r }),
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
}, cr = (r) => P(
  () => r.split(M.regex).map((t, n) => M.isRegularBreak(t) ? /* @__PURE__ */ c.jsx("br", {}, n) : M.isSpecificBreak(t) ? /* @__PURE__ */ c.jsx(
    "br",
    {
      className: M.getClassName(t)
    },
    n
  ) : t),
  [r]
), _r = ({
  text: r
}) => {
  const t = cr(r);
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}, jr = ({
  type: r = "chars",
  text: t,
  exception: n,
  ...o
}) => {
  const i = r === "chars" ? "" : " ";
  return P(
    () => t.split(M.regex).flatMap((l, p) => M.isRegularBreak(l) ? [null, /* @__PURE__ */ c.jsx("br", {}, p)] : M.isSpecificBreak(l) ? [
      null,
      /* @__PURE__ */ c.jsx(
        "br",
        {
          className: M.getClassName(l)
        },
        p
      )
    ] : [
      ...l.split(i).map((f, g) => {
        if (n) {
          const d = n.find(
            (v) => v.selector === f
          );
          if (d)
            return /* @__PURE__ */ c.jsx(
              "span",
              {
                ...o,
                ...d.attributes,
                children: f
              },
              `${p}-${g}`
            );
        }
        return f === " " ? /* @__PURE__ */ c.jsx("span", { ...o, children: " " }, `${p}-${g}`) : /* @__PURE__ */ c.jsx("span", { ...o, children: f }, `${p}-${g}`);
      }),
      null
    ]),
    [i, t, o, n]
  );
}, ur = X((r, t) => {
  const { fill: n, style: o, ...i } = r;
  return /* @__PURE__ */ c.jsx(
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
ur.displayName = "Video";
const Tr = ({
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
), lr = X(
  ({
    loader: r = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: o,
    circular: i,
    children: u,
    style: l,
    ...p
  }, f) => {
    const [g, d] = A(t === 0), v = !!u;
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
        ...p,
        children: /* @__PURE__ */ c.jsxs(
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
              r === "skeleton" ? /* @__PURE__ */ c.jsx(
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
                  children: /* @__PURE__ */ c.jsx("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : r === "circular" ? /* @__PURE__ */ c.jsx(
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
                  children: /* @__PURE__ */ c.jsx("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : r,
              v && /* @__PURE__ */ c.jsx("div", { style: { visibility: "hidden" }, children: u })
            ]
          }
        )
      }
    );
  }
);
lr.displayName = "Loader";
const fr = typeof document < "u" ? At : C, ge = ({
  onResize: r,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const o = T(0), i = T(0), u = k(() => {
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
}, dr = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, pr = (r) => {
  let t = dr;
  typeof r == "string" && (t += r), console.log(t);
}, vr = (r) => {
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
    (o) => {
      r && vr(o);
    },
    [r]
  );
  ge({
    onResize: ({ winW: o }) => n(o),
    debounce: 100,
    dependencies: []
  }), C(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && pr(t);
  }, [t, n]);
}, Or = () => {
  const [r, t] = A(null), n = k(() => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
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
  const o = T(null), [i, u] = $t(
    (d, v) => {
      switch (v.type) {
        case fe:
          return o.current = v.payload, v.payload;
        default:
          return d;
      }
    },
    o.current
  ), l = T(0), p = T(0), f = () => window.scrollY || document.documentElement.scrollTop, g = k(() => {
    clearTimeout(p.current), p.current = setTimeout(() => {
      const d = f();
      d > l.current + r && o.current !== "down" ? u({ type: fe, payload: "down" }) : d < l.current - r && o.current !== "up" && u({ type: fe, payload: "up" }), l.current = d;
    }, t);
  }, [t, r]);
  return C(() => (l.current = f(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(p.current);
  }), n), i;
}, kr = (r, t) => {
  const [n, o] = A(null), i = k(
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
  return ge({
    onResize: ({ winW: u }) => i(u),
    debounce: 100,
    dependencies: [i]
  }), C(() => i(window.innerWidth), [i]), n;
}, Ir = ({
  shareUrl: r,
  sharePath: t,
  shareTitle: n = "",
  width: o = 600,
  height: i = 800
}) => {
  const u = P(() => encodeURIComponent(r), [r]), l = P(
    () => `height=${i},width=${o}`,
    [i, o]
  ), p = P(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${u}&t=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, n, l]
  ), f = P(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${u}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, l, n]
  ), g = P(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${u}&text=${n}`,
          "newwindow",
          l
        );
      }
    }),
    [u, l, n]
  ), d = P(
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
  ), [v, b] = A(!1), m = P(
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
    Facebook: p,
    X: f,
    LINE: g,
    share: d,
    copy: m,
    isCopied: v
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
    const o = navigator.userAgent, i = hr(o), u = gr(o);
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
  Er as Accordion,
  Rr as AutoScrollContainer,
  _r as CustomBreakLineParser,
  M as CustomBreakLineUtils,
  Tr as FocusTrap,
  xr as FormField,
  lr as Loader,
  Sr as LoadingProgress,
  Ut as ModalButton,
  yr as SpiceWrapper,
  jr as SplitText,
  qt as StickyItem,
  wr as Tab,
  ur as Video,
  Dr as useDeviceDetector,
  ar as useFrame,
  ir as useIntersectionObserver,
  sr as useIsIntersecting,
  Or as useIsTouchDevice,
  fr as useIsomorphicLayoutEffect,
  kr as useMediaQuery,
  Bt as useOverflowDispatch,
  cr as useParseBreakLine,
  rr as useResizeObserver,
  Pr as useScrollDirection,
  Ir as useShare,
  Cr as useStarter,
  ge as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
