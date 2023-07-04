import Ve, { createContext as Ye, useState as D, useContext as Ue, useLayoutEffect as Pr, useEffect as Cr, useRef as R, useReducer as Sr } from "react";
var ae = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Or() {
  if (De)
    return M;
  De = 1;
  var n = Ve, t = Symbol.for("react.element"), c = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, _, g) {
    var v, b = {}, y = null, j = null;
    g !== void 0 && (y = "" + g), _.key !== void 0 && (y = "" + _.key), _.ref !== void 0 && (j = _.ref);
    for (v in _)
      o.call(_, v) && !s.hasOwnProperty(v) && (b[v] = _[v]);
    if (l && l.defaultProps)
      for (v in _ = l.defaultProps, _)
        b[v] === void 0 && (b[v] = _[v]);
    return { $$typeof: t, type: l, key: y, ref: j, props: b, _owner: i.current };
  }
  return M.Fragment = c, M.jsx = d, M.jsxs = d, M;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ir() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ve, t = Symbol.for("react.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.iterator, C = "@@iterator";
    function He(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[C];
      return typeof r == "function" ? r : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          a[f - 1] = arguments[f];
        Ge("error", e, a);
      }
    }
    function Ge(e, r, a) {
      {
        var f = N.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (r += "%s", a = a.concat([h]));
        var w = a.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var Je = !1, Ke = !1, Xe = !1, Qe = !1, Ze = !1, de;
    de = Symbol.for("react.module.reference");
    function er(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === s || Ze || e === i || e === g || e === v || Qe || e === j || Je || Ke || Xe || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === b || e.$$typeof === d || e.$$typeof === l || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function rr(e, r, a) {
      var f = e.displayName;
      if (f)
        return f;
      var h = r.displayName || r.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case c:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case g:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return fe(r) + ".Consumer";
          case d:
            var a = e;
            return fe(a._context) + ".Provider";
          case _:
            return rr(e, e.render, "ForwardRef");
          case b:
            var f = e.displayName || null;
            return f !== null ? f : I(e.type) || "Memo";
          case y: {
            var h = e, w = h._payload, m = h._init;
            try {
              return I(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, _e, pe, ve, me, he, ge, we;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function tr() {
      {
        if (W === 0) {
          _e = console.log, pe = console.info, ve = console.warn, me = console.error, he = console.group, ge = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        W++;
      }
    }
    function nr() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: _e
            }),
            info: k({}, e, {
              value: pe
            }),
            warn: k({}, e, {
              value: ve
            }),
            error: k({}, e, {
              value: me
            }),
            group: k({}, e, {
              value: he
            }),
            groupCollapsed: k({}, e, {
              value: ge
            }),
            groupEnd: k({}, e, {
              value: we
            })
          });
        }
        W < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = N.ReactCurrentDispatcher, K;
    function U(e, r, a) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
            K = f && f[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, B;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      B = new or();
    }
    function ye(e, r) {
      if (!e || X)
        return "";
      {
        var a = B.get(e);
        if (a !== void 0)
          return a;
      }
      var f;
      X = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = J.current, J.current = null, tr();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch ($) {
              f = $;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch ($) {
              f = $;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            f = $;
          }
          e();
        }
      } catch ($) {
        if ($ && f && typeof $.stack == "string") {
          for (var p = $.stack.split(`
`), P = f.stack.split(`
`), x = p.length - 1, E = P.length - 1; x >= 1 && E >= 0 && p[x] !== P[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (p[x] !== P[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || p[x] !== P[E]) {
                    var S = `
` + p[x].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (x >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        X = !1, J.current = w, nr(), Error.prepareStackTrace = h;
      }
      var A = e ? e.displayName || e.name : "", ke = A ? U(A) : "";
      return typeof e == "function" && B.set(e, ke), ke;
    }
    function ir(e, r, a) {
      return ye(e, !1);
    }
    function sr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, sr(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case g:
          return U("Suspense");
        case v:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ir(e.render);
          case b:
            return z(e.type, r, a);
          case y: {
            var f = e, h = f._payload, w = f._init;
            try {
              return z(w(h), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, xe = {}, Ee = N.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(a);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ar(e, r, a, f, h) {
      {
        var w = Function.call.bind(H);
        for (var m in e)
          if (w(e, m)) {
            var p = void 0;
            try {
              if (typeof e[m] != "function") {
                var P = Error((f || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              p = e[m](r, m, f, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              p = x;
            }
            p && !(p instanceof Error) && (G(h), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", a, m, typeof p), G(null)), p instanceof Error && !(p.message in xe) && (xe[p.message] = !0, G(h), T("Failed %s type: %s", a, p.message), G(null));
          }
      }
    }
    var cr = Array.isArray;
    function Q(e) {
      return cr(e);
    }
    function ur(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function lr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function je(e) {
      if (lr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(e)), Re(e);
    }
    var L = N.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe, Z;
    Z = {};
    function fr(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _r(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function pr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var a = I(L.current.type);
        Z[a] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(L.current.type), e.ref), Z[a] = !0);
      }
    }
    function vr(e, r) {
      {
        var a = function() {
          Te || (Te = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function mr(e, r) {
      {
        var a = function() {
          Pe || (Pe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var hr = function(e, r, a, f, h, w, m) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: m,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function gr(e, r, a, f, h) {
      {
        var w, m = {}, p = null, P = null;
        a !== void 0 && (je(a), p = "" + a), _r(r) && (je(r.key), p = "" + r.key), fr(r) && (P = r.ref, pr(r, h));
        for (w in r)
          H.call(r, w) && !dr.hasOwnProperty(w) && (m[w] = r[w]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (w in x)
            m[w] === void 0 && (m[w] = x[w]);
        }
        if (p || P) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && vr(m, E), P && mr(m, E);
        }
        return hr(e, p, P, h, f, L.current, m);
      }
    }
    var ee = N.ReactCurrentOwner, Ce = N.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Se() {
      {
        if (ee.current) {
          var e = I(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function br(e) {
      {
        var r = Se();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = br(r);
        if (Oe[a])
          return;
        Oe[a] = !0;
        var f = "";
        e && e._owner && e._owner !== ee.current && (f = " It was passed a child from " + I(e._owner.type) + "."), q(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, f), q(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var a = 0; a < e.length; a++) {
            var f = e[a];
            te(f) && Ie(f, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = He(e);
          if (typeof h == "function" && h !== e.entries)
            for (var w = h.call(e), m; !(m = w.next()).done; )
              te(m.value) && Ie(m.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          a = r.propTypes;
        else
          return;
        if (a) {
          var f = I(r);
          ar(a, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var h = I(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var f = r[a];
          if (f !== "children" && f !== "key") {
            q(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function Fe(e, r, a, f, h, w) {
      {
        var m = er(e);
        if (!m) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = wr(h);
          P ? p += P : p += Se();
          var x;
          e === null ? x = "null" : Q(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + (I(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, p);
        }
        var E = gr(e, r, a, h, w);
        if (E == null)
          return E;
        if (m) {
          var S = r.children;
          if (S !== void 0)
            if (f)
              if (Q(S)) {
                for (var A = 0; A < S.length; A++)
                  $e(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(S, e);
        }
        return e === o ? xr(E) : yr(E), E;
      }
    }
    function Er(e, r, a) {
      return Fe(e, r, a, !0);
    }
    function Rr(e, r, a) {
      return Fe(e, r, a, !1);
    }
    var jr = Rr, Tr = Er;
    V.Fragment = o, V.jsx = jr, V.jsxs = Tr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ae.exports = Or() : ae.exports = Ir();
var u = ae.exports;
const $r = "_spice_wrapper_1b9je_1", Fr = "_spice_wrapper_hidden_1b9je_10", qe = {
  spice_wrapper: $r,
  spice_wrapper_hidden: Fr
}, Be = Ye(!0), ze = Ye((n) => !n), kr = ({ children: n }) => {
  const [t, c] = D(!0);
  return /* @__PURE__ */ u.jsx(Be.Provider, { value: t, children: /* @__PURE__ */ u.jsx(ze.Provider, { value: c, children: n }) });
}, Dr = ({ children: n }) => {
  const t = Ue(Be);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `${qe.spice_wrapper} ${t ? qe.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, gt = ({ children: n }) => /* @__PURE__ */ u.jsx(kr, { children: /* @__PURE__ */ u.jsx(Dr, { children: n }) }), Nr = () => Ue(ze), O = typeof document < "u" ? Pr : Cr, qr = "_spice_aside_aside_4cj7n_1", Ar = "_spice_aside_main_4cj7n_5", ne = {
  spice_aside_aside: qr,
  spice_aside_main: Ar
}, wt = ({
  className: n,
  children: t,
  aside: c,
  isSticky: o = !1
}) => {
  const i = Nr();
  return O(() => (o && i(() => !1), () => {
    i(() => !0);
  }), []), /* @__PURE__ */ u.jsxs("div", { className: n || "", children: [
    c.index === 1 && /* @__PURE__ */ u.jsx("div", { className: ne.spice_aside_main, children: t }),
    /* @__PURE__ */ u.jsx(
      "aside",
      {
        className: `${ne.spice_aside_aside} ${c.className ? c.className : ""}`,
        children: c.chidren
      }
    ),
    c.index === 0 && /* @__PURE__ */ u.jsx("div", { className: ne.spice_aside_main, children: t })
  ] });
}, Wr = ({
  targetRef: n,
  callback: t,
  debounce: c,
  dependencies: o = []
}) => {
  const i = R(0), s = R(!0);
  O(() => {
    const d = new ResizeObserver((_) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(_[0].target);
      }, c);
    }), l = n.current;
    if (l)
      return d.observe(l), () => {
        d.unobserve(l), clearTimeout(i.current);
      };
  }, o);
}, Lr = ({ content: n, isOpen: t }) => {
  const c = n.querySelectorAll("a,button");
  if (!c)
    return;
  const o = t ? "0" : "-1";
  c.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Mr = ({
  wrapper: n,
  inner: t,
  isOpen: c,
  callback: o
}) => {
  const s = {
    height: t.getBoundingClientRect().height,
    target: n
  };
  c ? o.close(s) : o.open(s);
}, Vr = "_spice_accordion_contentWrapper_twt7j_1", Yr = "_spice_accordion_hidden_twt7j_5", Ae = {
  spice_accordion_contentWrapper: Vr,
  spice_accordion_hidden: Yr
}, bt = ({
  isView: n = !1,
  value: t,
  className: c,
  button: o,
  callback: i,
  content: s
}) => {
  const d = R(null), l = R(null), [_, g] = D(n);
  return O(() => {
    Lr({ content: d.current, isOpen: _ });
  }, [_]), Wr({
    targetRef: l,
    callback: (v) => {
      const b = v.getBoundingClientRect().height;
      _ && (d.current.style.height = `${b}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ u.jsxs("div", { className: c, children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        className: o.className ? o.className : "",
        onClick: () => {
          Mr({
            wrapper: d.current,
            inner: l.current,
            isOpen: _,
            callback: i
          }), g((v) => !v);
        },
        "aria-controls": `content-${t}`,
        id: `button-${t}`,
        "aria-expanded": _,
        children: o.children
      }
    ),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: d,
        className: `${Ae.spice_accordion_contentWrapper} ${n ? "" : Ae.spice_accordion_hidden}`,
        id: `content-${t}`,
        "aria-labelledby": `button-${t}`,
        "aria-hidden": !_,
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: l,
            className: s.className ? s.className : "",
            children: s.children
          }
        )
      }
    )
  ] });
}, Ur = "_spice_form_input_yxowj_1", Br = "_spice_form_select_yxowj_2", zr = "_spice_form_radioCheckInput_yxowj_8", ce = {
  spice_form_input: Ur,
  spice_form_select: Br,
  spice_form_radioCheckInput: zr
}, We = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ u.jsx(
  "input",
  {
    ...n,
    className: `${ce.spice_form_input} ${t || ""}`
  }
), Hr = ({ formProps: n }) => {
  const t = n.isSelect;
  if (!t)
    return;
  const c = t.options.map((s) => /* @__PURE__ */ u.jsx("option", { value: s, children: s }, s)), o = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ u.jsx("option", { hidden: !0, children: s }) : null;
  }, i = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ u.jsxs(
    "select",
    {
      name: n.name,
      id: n.id,
      className: ce.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ u.jsx(o, {}),
        c
      ]
    }
  );
}, Le = ({
  layoutType: n,
  formPropsArr: t,
  label: c,
  FormItem: o,
  errors: i
}) => {
  const s = (d) => !i || !i[d] ? null : i[d];
  if (n === "block")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: c }),
      /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
      s(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: c }),
      /* @__PURE__ */ u.jsxs("ul", { children: [
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const d = t.map((l) => /* @__PURE__ */ u.jsxs("li", { children: [
      /* @__PURE__ */ u.jsx(
        o,
        {
          formProps: l,
          className: ce.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ u.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { children: c }),
      /* @__PURE__ */ u.jsx("ul", { children: d }),
      s(0)
    ] });
  }
}, Gr = ({ formProps: n }) => {
  const t = n.isTextarea;
  if (t)
    return /* @__PURE__ */ u.jsx(
      "textarea",
      {
        name: n.name,
        id: n.id,
        cols: t.cols,
        rows: t.rows,
        placeholder: n.placeholder,
        defaultValue: t.defaultValue
      }
    );
}, yt = ({
  className: n,
  label: t,
  formProps: c,
  errors: o
}) => {
  const i = c, s = i[0].type, d = i.length, l = !!i[0].isSelect, _ = !!i[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  if (o && o.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = (b) => Le({
    layoutType: d === 1 ? "block" : "flex",
    formPropsArr: i,
    label: t,
    FormItem: b,
    errors: o
  }), v = () => l ? g(Hr) : _ ? g(Gr) : s === "radio" || s === "checkbox" ? Le({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: We,
    errors: o
  }) : g(We);
  return /* @__PURE__ */ u.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ u.jsx(v, {}) });
}, ue = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Jr = "_spice_tab_button_12kqm_1", Kr = "_spice_tab_contentWrapper_12kqm_5", Xr = "_spice_tab_hidden_12kqm_9", oe = {
  spice_tab_button: Jr,
  spice_tab_contentWrapper: Kr,
  spice_tab_hidden: Xr
}, xt = ({ lists: n, contents: t, callback: c }) => {
  const o = R(!1), i = R(!1), [s, d] = D(0), l = [], _ = async (y) => {
    s === y || i.current || (i.current = !0, await ue(c.leave(l[s].current)), d(y));
  };
  O(() => {
    if (!o.current) {
      o.current = !0;
      return;
    }
    i.current = !1, c.enter(l[s].current);
  }, [s]);
  const g = n.children.map((y, j) => /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: () => {
        _(j);
      },
      className: `${n.buttonClassName} ${oe.spice_tab_button} ${s === j ? n.isViewClassName : ""}`,
      children: y
    },
    j
  )), v = ({
    children: y,
    index: j
  }) => {
    const F = R(null);
    return l.push(F), /* @__PURE__ */ u.jsx("li", { ref: F, className: s === j ? "" : oe.spice_tab_hidden, children: y });
  }, b = t.children.map((y, j) => /* @__PURE__ */ u.jsx(v, { index: j, children: y }, j));
  return /* @__PURE__ */ u.jsxs("div", { children: [
    /* @__PURE__ */ u.jsx("div", { className: n.wrapperClassName, children: g }),
    /* @__PURE__ */ u.jsx("ul", { className: oe.spice_tab_contentWrapper, children: b })
  ] });
}, Qr = "_spice_dropdown_wrapper_1nq94_1", Zr = "_spice_dropdown_content_1nq94_5", et = "_spice_dropdown_content_hidden_1nq94_10", rt = "_spice_dropdown_content_pointerPrevent_1nq94_15", Y = {
  spice_dropdown_wrapper: Qr,
  spice_dropdown_content: Zr,
  spice_dropdown_content_hidden: et,
  spice_dropdown_content_pointerPrevent: rt,
  "spice_dropdown_top-center": "_spice_dropdown_top-center_1nq94_22",
  "spice_dropdown_top-left": "_spice_dropdown_top-left_1nq94_28",
  "spice_dropdown_top-right": "_spice_dropdown_top-right_1nq94_33",
  "spice_dropdown_bottom-center": "_spice_dropdown_bottom-center_1nq94_41",
  "spice_dropdown_bottom-left": "_spice_dropdown_bottom-left_1nq94_47",
  "spice_dropdown_bottom-right": "_spice_dropdown_bottom-right_1nq94_52",
  "spice_dropdown_left-top": "_spice_dropdown_left-top_1nq94_60",
  "spice_dropdown_left-center": "_spice_dropdown_left-center_1nq94_65",
  "spice_dropdown_left-bottom": "_spice_dropdown_left-bottom_1nq94_71",
  "spice_dropdown_right-top": "_spice_dropdown_right-top_1nq94_79",
  "spice_dropdown_right-center": "_spice_dropdown_right-center_1nq94_84",
  "spice_dropdown_right-bottom": "_spice_dropdown_right-bottom_1nq94_90"
}, Et = ({
  position: n,
  parent: t,
  content: c,
  callback: o,
  className: i
}) => {
  const s = R(null), d = R(!1), [l, _] = D(!1), [g, v] = D(!0);
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      onMouseEnter: () => {
        d.current = !0, v(!1), _(!0), o != null && o.enter && o.enter(s.current);
      },
      onMouseLeave: async () => {
        d.current = !1, v(!0), o != null && o.leave && await ue(o.leave(s.current)), d.current || _(!1);
      },
      className: `${Y.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: s,
            className: `${Y.spice_dropdown_content} ${l ? "" : Y.spice_dropdown_content_hidden} ${g ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + n]}`,
            children: c.children
          }
        )
      ]
    }
  );
}, tt = (n) => {
  n > 60 && (n = 60);
  const t = Math.floor(1e3 / n);
  let c = performance.now();
  const o = (d) => {
    const l = d - c, _ = l <= t;
    return _ || (c = d - l % t), _;
  }, i = {
    callback: null,
    isPlay: !1,
    id: 0
  }, s = (d) => {
    i.id = requestAnimationFrame(s), !o(d) && i.callback && i.isPlay && i.callback();
  };
  return O(() => (i.id = requestAnimationFrame(s), () => {
    cancelAnimationFrame(i.id);
  }), []), (d, l) => {
    if (d === "play") {
      if (!l) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      i.callback = l, i.isPlay = !0;
    } else
      d === "pause" && (i.isPlay = !1);
  };
}, nt = "_spice_magnet_stopPropagation_99wvn_1", ot = {
  spice_magnet_stopPropagation: nt
}, Rt = ({
  className: n,
  children: t,
  callback: c,
  fps: o = 60,
  stopPropagation: i = !1
}) => {
  const s = R(null), d = R(null), l = R(), _ = tt(o), g = {
    target: s.current,
    children: d.current,
    x: 0,
    y: 0
  }, v = (C) => {
    g.target = s.current, g.children = d.current;
  }, b = (C) => {
    l.current = C.currentTarget.getBoundingClientRect(), g.x = C.clientX - l.current.left - l.current.width / 2, g.y = C.clientY - l.current.top - l.current.height / 2;
  }, y = (C) => {
    C.stopPropagation(), v(), b(C), _("play", () => {
      c.move(g);
    });
  }, j = (C) => {
    C.stopPropagation(), b(C);
  }, F = (C) => {
    C.stopPropagation(), _("pause"), c.leave && c.leave(g);
  };
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      onMouseEnter: y,
      onMouseMove: j,
      onMouseLeave: F,
      className: n || "",
      ref: s,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: d,
          className: i ? ot.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, it = "_spice_bgImg_wrapper_12iq7_1", st = "_spice_bgImg_view_12iq7_6", at = "_spice_bgImg_golden_12iq7_20", ct = "_spice_bgImg_silver_12iq7_24", ut = "_spice_bgImg_platinum_12iq7_28", lt = "_spice_bgImg_square_12iq7_36", ie = {
  spice_bgImg_wrapper: it,
  spice_bgImg_view: st,
  spice_bgImg_golden: at,
  spice_bgImg_silver: ct,
  spice_bgImg_platinum: ut,
  "spice_bgImg_16-9": "_spice_bgImg_16-9_12iq7_32",
  spice_bgImg_square: lt,
  "spice_bgImg_3-2": "_spice_bgImg_3-2_12iq7_40",
  "spice_bgImg_4-3": "_spice_bgImg_4-3_12iq7_44"
}, jt = ({
  ratio: n,
  children: t,
  className: c
}) => {
  const o = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let i = o.includes(n), s = typeof n == "number" && n > 0;
  if (!i && !s)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${o.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ u.jsx("div", { className: `${ie.spice_bgImg_wrapper} ${c || ""}`, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `${ie.spice_bgImg_view} ${i ? ie["spice_bgImg_" + n] : ""}`,
      style: s ? { paddingTop: `${n}%` } : {},
      children: t
    }
  ) });
}, Me = (n) => {
  const t = document.documentElement.style, c = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", c.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", c.overflow = "");
}, dt = "_spice_modal_dialog_1t31c_1", ft = {
  spice_modal_dialog: dt
}, Tt = ({ children: n, className: t, dialog: c, callback: o }) => {
  const i = R(null), s = () => {
    Me("add"), i.current.showModal(), o != null && o.open && o.open(i.current);
  }, d = async () => {
    o != null && o.close && await ue(o.close(i.current)), Me("remove"), i.current.close();
  };
  return O(() => {
    const l = i.current.querySelectorAll(".spice__modal_close");
    l && l.forEach((_) => {
      _.addEventListener("click", () => {
        d();
      });
    });
  }, []), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          s();
        },
        children: n
      }
    ),
    /* @__PURE__ */ u.jsx(
      "dialog",
      {
        ref: i,
        onClick: (l) => {
          l.target === i.current && d();
        },
        className: `${ft.spice_modal_dialog} ${c.className ? c.className : ""}`,
        children: c.children
      }
    )
  ] });
}, Pt = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: c = 0,
  once: o,
  callback: i,
  dependencies: s = []
}) => {
  const d = {
    rootMargin: t,
    threshold: c
  };
  O(() => {
    const l = n.current;
    if (!l)
      return;
    const _ = (v, b) => {
      v.forEach((y) => {
        y.isIntersecting && i.enter ? (i.enter(y.target), o && b.unobserve(y.target)) : !y.isIntersecting && i.leave && i.leave(y.target);
      });
    }, g = new IntersectionObserver(_, d);
    return g.observe(l), () => {
      g.unobserve(l);
    };
  }, s);
}, le = ({
  callback: n,
  debounce: t,
  dependencies: c = []
}) => {
  const o = R(0), i = R(0), s = () => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  };
  O(() => (o.current = window.innerWidth, window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s), clearTimeout(i.current);
  }), c);
}, _t = ({ initWinW: n, winW: t, threshold: c }) => {
  let o = !(n <= c);
  t <= c ? o && window.location.reload() : !o && window.location.reload();
}, pt = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`, vt = () => {
  console.log(pt);
}, mt = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const c = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== c && t.setAttribute("content", c);
}, Ct = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: c = !1
}) => {
  const o = (i) => {
    t && mt(i);
  };
  le({
    callback({ initWinW: i, winW: s }) {
      n && n.forEach((d) => {
        _t({
          initWinW: i,
          winW: s,
          threshold: d
        });
      }), o(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    o(window.innerWidth), c && vt();
  }, []);
}, St = () => {
  const [n, t] = D(null), c = () => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  };
  return le({
    callback() {
      c();
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    c();
  }, []), n;
}, se = "scroll", Ot = ({
  threshold: n = 0,
  debounce: t,
  dependencies: c = []
}) => {
  const o = R(null), [i, s] = Sr(
    (v, b) => {
      switch (b.type) {
        case se:
          return o.current = b.payload, b.payload;
        default:
          return v;
      }
    },
    o.current
  ), d = R(0), l = R(0), _ = () => window.scrollY || document.documentElement.scrollTop, g = () => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const v = _();
      v > d.current + n && o.current !== "down" ? s({ type: se, payload: "down" }) : v < d.current - n && o.current !== "up" && s({ type: se, payload: "up" }), d.current = v;
    }, t);
  };
  return O(() => (d.current = _(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(l.current);
  }), c), i;
}, It = ({ type: n, width: t }) => {
  const [c, o] = D(null), i = (s) => {
    switch (n) {
      case "max":
        o(t <= s);
        break;
      case "min":
        o(t >= s);
        break;
    }
  };
  return le({
    callback: ({ winW: s }) => {
      i(s);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    i(window.innerWidth);
  }, []), c;
};
export {
  bt as Accordion,
  wt as AsideLayout,
  jt as BackgroundImage,
  Et as Dropdown,
  yt as FormField,
  Rt as Magnet,
  Tt as Modal,
  xt as Tab,
  gt as WrapperLayout,
  tt as useAnimationFrame,
  Pt as useIntersectionObserver,
  St as useIsTouchDevice,
  O as useIsomorphicLayoutEffect,
  It as useMediaQuery,
  Wr as useResizeObserver,
  Ot as useScrollDirection,
  Ct as useStarter,
  le as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
