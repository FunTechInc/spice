import Ve, { createContext as Ye, useState as D, useContext as Ue, useLayoutEffect as Pr, useEffect as Cr, useRef as R, useReducer as Sr } from "react";
var se = { exports: {} }, M = {};
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
  var n = Ve, t = Symbol.for("react.element"), c = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, _, h) {
    var v, b = {}, x = null, j = null;
    h !== void 0 && (x = "" + h), _.key !== void 0 && (x = "" + _.key), _.ref !== void 0 && (j = _.ref);
    for (v in _)
      o.call(_, v) && !i.hasOwnProperty(v) && (b[v] = _[v]);
    if (l && l.defaultProps)
      for (v in _ = l.defaultProps, _)
        b[v] === void 0 && (b[v] = _[v]);
    return { $$typeof: t, type: l, key: x, ref: j, props: b, _owner: a.current };
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
    var n = Ve, t = Symbol.for("react.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.iterator, C = "@@iterator";
    function He(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[C];
      return typeof r == "function" ? r : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          s[f - 1] = arguments[f];
        Ge("error", e, s);
      }
    }
    function Ge(e, r, s) {
      {
        var f = N.ReactDebugCurrentFrame, g = f.getStackAddendum();
        g !== "" && (r += "%s", s = s.concat([g]));
        var w = s.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var Je = !1, Ke = !1, Xe = !1, Qe = !1, Ze = !1, de;
    de = Symbol.for("react.module.reference");
    function er(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === i || Ze || e === a || e === h || e === v || Qe || e === j || Je || Ke || Xe || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === d || e.$$typeof === l || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function rr(e, r, s) {
      var f = e.displayName;
      if (f)
        return f;
      var g = r.displayName || r.name || "";
      return g !== "" ? s + "(" + g + ")" : s;
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
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
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
            var s = e;
            return fe(s._context) + ".Provider";
          case _:
            return rr(e, e.render, "ForwardRef");
          case b:
            var f = e.displayName || null;
            return f !== null ? f : I(e.type) || "Memo";
          case x: {
            var g = e, w = g._payload, m = g._init;
            try {
              return I(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, L = 0, _e, pe, ve, me, ge, he, we;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function tr() {
      {
        if (L === 0) {
          _e = console.log, pe = console.info, ve = console.warn, me = console.error, ge = console.group, he = console.groupCollapsed, we = console.groupEnd;
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
        L++;
      }
    }
    function nr() {
      {
        if (L--, L === 0) {
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
              value: ge
            }),
            groupCollapsed: k({}, e, {
              value: he
            }),
            groupEnd: k({}, e, {
              value: we
            })
          });
        }
        L < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = N.ReactCurrentDispatcher, K;
    function U(e, r, s) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (g) {
            var f = g.stack.trim().match(/\n( *(at )?)/);
            K = f && f[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, z;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      z = new or();
    }
    function xe(e, r) {
      if (!e || X)
        return "";
      {
        var s = z.get(e);
        if (s !== void 0)
          return s;
      }
      var f;
      X = !0;
      var g = Error.prepareStackTrace;
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
`), y = p.length - 1, E = P.length - 1; y >= 1 && E >= 0 && p[y] !== P[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (p[y] !== P[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || p[y] !== P[E]) {
                    var S = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, S), S;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        X = !1, J.current = w, nr(), Error.prepareStackTrace = g;
      }
      var W = e ? e.displayName || e.name : "", ke = W ? U(W) : "";
      return typeof e == "function" && z.set(e, ke), ke;
    }
    function ar(e, r, s) {
      return xe(e, !1);
    }
    function ir(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, ir(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case h:
          return U("Suspense");
        case v:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ar(e.render);
          case b:
            return B(e.type, r, s);
          case x: {
            var f = e, g = f._payload, w = f._init;
            try {
              return B(w(g), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, ye = {}, Ee = N.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, s = B(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(s);
      } else
        Ee.setExtraStackFrame(null);
    }
    function sr(e, r, s, f, g) {
      {
        var w = Function.call.bind(H);
        for (var m in e)
          if (w(e, m)) {
            var p = void 0;
            try {
              if (typeof e[m] != "function") {
                var P = Error((f || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              p = e[m](r, m, f, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (G(g), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", s, m, typeof p), G(null)), p instanceof Error && !(p.message in ye) && (ye[p.message] = !0, G(g), T("Failed %s type: %s", s, p.message), G(null));
          }
      }
    }
    var cr = Array.isArray;
    function Q(e) {
      return cr(e);
    }
    function ur(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
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
    var q = N.ReactCurrentOwner, dr = {
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
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var s = I(q.current.type);
        Z[s] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(q.current.type), e.ref), Z[s] = !0);
      }
    }
    function vr(e, r) {
      {
        var s = function() {
          Te || (Te = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function mr(e, r) {
      {
        var s = function() {
          Pe || (Pe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, s, f, g, w, m) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: s,
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
        value: g
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function hr(e, r, s, f, g) {
      {
        var w, m = {}, p = null, P = null;
        s !== void 0 && (je(s), p = "" + s), _r(r) && (je(r.key), p = "" + r.key), fr(r) && (P = r.ref, pr(r, g));
        for (w in r)
          H.call(r, w) && !dr.hasOwnProperty(w) && (m[w] = r[w]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (w in y)
            m[w] === void 0 && (m[w] = y[w]);
        }
        if (p || P) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && vr(m, E), P && mr(m, E);
        }
        return gr(e, p, P, g, f, q.current, m);
      }
    }
    var ee = N.ReactCurrentOwner, Ce = N.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, s = B(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(s);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + r + ":" + s + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function br(e) {
      {
        var r = Se();
        if (!r) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (r = `

Check the top-level render call using <` + s + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = br(r);
        if (Oe[s])
          return;
        Oe[s] = !0;
        var f = "";
        e && e._owner && e._owner !== ee.current && (f = " It was passed a child from " + I(e._owner.type) + "."), A(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, f), A(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var s = 0; s < e.length; s++) {
            var f = e[s];
            te(f) && Ie(f, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = He(e);
          if (typeof g == "function" && g !== e.entries)
            for (var w = g.call(e), m; !(m = w.next()).done; )
              te(m.value) && Ie(m.value, r);
        }
      }
    }
    function xr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var s;
        if (typeof r == "function")
          s = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          s = r.propTypes;
        else
          return;
        if (s) {
          var f = I(r);
          sr(s, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var g = I(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var f = r[s];
          if (f !== "children" && f !== "key") {
            A(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Fe(e, r, s, f, g, w) {
      {
        var m = er(e);
        if (!m) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = wr(g);
          P ? p += P : p += Se();
          var y;
          e === null ? y = "null" : Q(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (I(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, p);
        }
        var E = hr(e, r, s, g, w);
        if (E == null)
          return E;
        if (m) {
          var S = r.children;
          if (S !== void 0)
            if (f)
              if (Q(S)) {
                for (var W = 0; W < S.length; W++)
                  $e(S[W], e);
                Object.freeze && Object.freeze(S);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(S, e);
        }
        return e === o ? yr(E) : xr(E), E;
      }
    }
    function Er(e, r, s) {
      return Fe(e, r, s, !0);
    }
    function Rr(e, r, s) {
      return Fe(e, r, s, !1);
    }
    var jr = Rr, Tr = Er;
    V.Fragment = o, V.jsx = jr, V.jsxs = Tr;
  }()), V;
}
process.env.NODE_ENV === "production" ? se.exports = Or() : se.exports = Ir();
var u = se.exports;
const $r = "__wrapper_18lvx_1", Fr = "__wrapper_hidden_18lvx_10", Ae = {
  _wrapper: $r,
  _wrapper_hidden: Fr
}, ze = Ye(!0), Be = Ye((n) => !n), kr = ({ children: n }) => {
  const [t, c] = D(!0);
  return /* @__PURE__ */ u.jsx(ze.Provider, { value: t, children: /* @__PURE__ */ u.jsx(Be.Provider, { value: c, children: n }) });
}, Dr = ({ children: n }) => {
  const t = Ue(ze);
  return /* @__PURE__ */ u.jsx("div", { className: `${Ae._wrapper} ${t ? Ae._wrapper_hidden : ""}`, children: n });
}, ht = ({ children: n }) => /* @__PURE__ */ u.jsx(kr, { children: /* @__PURE__ */ u.jsx(Dr, { children: n }) }), Nr = () => Ue(Be), O = typeof document < "u" ? Pr : Cr, Ar = "__aside_aside_krmto_1", Wr = "__aside_main_krmto_5", ne = {
  _aside_aside: Ar,
  _aside_main: Wr
}, wt = ({
  className: n,
  children: t,
  aside: c,
  isSticky: o = !1
}) => {
  const a = Nr();
  return O(() => (o && a(() => !1), () => {
    a(() => !0);
  }), []), /* @__PURE__ */ u.jsxs("div", { className: n || "", children: [
    c.index === 1 && /* @__PURE__ */ u.jsx("div", { className: ne._aside_main, children: t }),
    /* @__PURE__ */ u.jsx(
      "aside",
      {
        className: `${ne._aside_aside} ${c.className ? c.className : ""}`,
        children: c.chidren
      }
    ),
    c.index === 0 && /* @__PURE__ */ u.jsx("div", { className: ne._aside_main, children: t })
  ] });
}, Lr = ({
  targetRef: n,
  callback: t,
  debounce: c,
  dependencies: o = []
}) => {
  const a = R(0), i = R(!0);
  O(() => {
    const d = new ResizeObserver((_) => {
      clearTimeout(a.current), a.current = setTimeout(() => {
        if (i.current) {
          i.current = !1;
          return;
        }
        t(_[0].target);
      }, c);
    }), l = n.current;
    if (l)
      return d.observe(l), () => {
        d.unobserve(l), clearTimeout(a.current);
      };
  }, o);
}, qr = ({ content: n, isOpen: t }) => {
  const c = n.querySelectorAll("a,button");
  if (!c)
    return;
  const o = t ? "0" : "-1";
  c.forEach((a) => {
    a.setAttribute("tabindex", o);
  });
}, Mr = ({
  wrapper: n,
  inner: t,
  isOpen: c,
  callback: o
}) => {
  const i = {
    height: t.getBoundingClientRect().height,
    target: n
  };
  c ? o.close(i) : o.open(i);
}, Vr = "__accordion_contentWrapper_1s6bm_1", Yr = "__accordion_hidden_1s6bm_5", We = {
  _accordion_contentWrapper: Vr,
  _accordion_hidden: Yr
}, bt = ({
  isView: n = !1,
  value: t,
  className: c,
  button: o,
  callback: a,
  content: i
}) => {
  const d = R(null), l = R(null), [_, h] = D(n);
  return O(() => {
    qr({ content: d.current, isOpen: _ });
  }, [_]), Lr({
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
            callback: a
          }), h((v) => !v);
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
        className: `${We._accordion_contentWrapper} ${n ? "" : We._accordion_hidden}`,
        id: `content-${t}`,
        "aria-labelledby": `button-${t}`,
        "aria-hidden": !_,
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: l,
            className: i.className ? i.className : "",
            children: i.children
          }
        )
      }
    )
  ] });
}, Ur = "__form_input_u6be7_1", zr = "__form_select_u6be7_2", Br = "__form_radioCheckInput_u6be7_8", ce = {
  _form_input: Ur,
  _form_select: zr,
  _form_radioCheckInput: Br
}, Le = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ u.jsx(
  "input",
  {
    ...n,
    className: `${ce._form_input} ${t || ""}`
  }
), Hr = ({ formProps: n }) => {
  const t = n.isSelect;
  if (!t)
    return;
  const c = t.options.map((i) => /* @__PURE__ */ u.jsx("option", { value: i, children: i }, i)), o = () => {
    const i = t.defaultValue;
    return i ? /* @__PURE__ */ u.jsx("option", { hidden: !0, children: i }) : null;
  }, a = () => {
    const i = t.defaultSelectedIndex;
    if (i)
      return t.options[i];
  };
  return /* @__PURE__ */ u.jsxs(
    "select",
    {
      name: n.name,
      id: n.id,
      className: ce._form_select,
      defaultValue: a(),
      children: [
        /* @__PURE__ */ u.jsx(o, {}),
        c
      ]
    }
  );
}, qe = ({
  layoutType: n,
  formPropsArr: t,
  label: c,
  FormItem: o,
  errors: a
}) => {
  const i = (d) => !a || !a[d] ? null : a[d];
  if (n === "block")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: c }),
      /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
      i(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: c }),
      /* @__PURE__ */ u.jsxs("ul", { children: [
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
          i(0)
        ] }),
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[1] }),
          i(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const d = t.map((l) => /* @__PURE__ */ u.jsxs("li", { children: [
      /* @__PURE__ */ u.jsx(
        o,
        {
          formProps: l,
          className: ce._form_radioCheckInput
        }
      ),
      /* @__PURE__ */ u.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      c && /* @__PURE__ */ u.jsx("label", { children: c }),
      /* @__PURE__ */ u.jsx("ul", { children: d }),
      i(0)
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
}, xt = ({
  className: n,
  label: t,
  formProps: c,
  errors: o
}) => {
  const a = c, i = a[0].type, d = a.length, l = !!a[0].isSelect, _ = !!a[0].isTextarea;
  if (!(i === "radio" || i === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  if (o && o.length > 2)
    throw new Error("The length of error is up to 2.");
  const h = (b) => qe({
    layoutType: d === 1 ? "block" : "flex",
    formPropsArr: a,
    label: t,
    FormItem: b,
    errors: o
  }), v = () => l ? h(Hr) : _ ? h(Gr) : i === "radio" || i === "checkbox" ? qe({
    layoutType: "radio-check",
    formPropsArr: a,
    label: t,
    FormItem: Le,
    errors: o
  }) : h(Le);
  return /* @__PURE__ */ u.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ u.jsx(v, {}) });
}, ue = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Jr = "__tab_button_1d4mc_1", Kr = "__tab_contentWrapper_1d4mc_5", Xr = "__tab_hidden_1d4mc_9", oe = {
  _tab_button: Jr,
  _tab_contentWrapper: Kr,
  _tab_hidden: Xr
}, yt = ({ lists: n, contents: t, callback: c }) => {
  const o = R(!1), a = R(!1), [i, d] = D(0), l = [], _ = async (x) => {
    i === x || a.current || (a.current = !0, await ue(c.leave(l[i].current)), d(x));
  };
  O(() => {
    if (!o.current) {
      o.current = !0;
      return;
    }
    a.current = !1, c.enter(l[i].current);
  }, [i]);
  const h = n.children.map((x, j) => /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: () => {
        _(j);
      },
      className: `${n.buttonClassName} ${oe._tab_button} ${i === j ? n.isViewClassName : ""}`,
      children: x
    },
    j
  )), v = ({
    children: x,
    index: j
  }) => {
    const F = R(null);
    return l.push(F), /* @__PURE__ */ u.jsx("li", { ref: F, className: i === j ? "" : oe._tab_hidden, children: x });
  }, b = t.children.map((x, j) => /* @__PURE__ */ u.jsx(v, { index: j, children: x }, j));
  return /* @__PURE__ */ u.jsxs("div", { children: [
    /* @__PURE__ */ u.jsx("div", { className: n.wrapperClassName, children: h }),
    /* @__PURE__ */ u.jsx("ul", { className: oe._tab_contentWrapper, children: b })
  ] });
}, Qr = "__dropdown_wrapper_19cqp_1", Zr = "__dropdown_content_19cqp_5", et = "__dropdown_content_hidden_19cqp_10", rt = "__dropdown_content_pointerPrevent_19cqp_15", Y = {
  _dropdown_wrapper: Qr,
  _dropdown_content: Zr,
  _dropdown_content_hidden: et,
  _dropdown_content_pointerPrevent: rt,
  "_dropdown_top-center": "__dropdown_top-center_19cqp_22",
  "_dropdown_top-left": "__dropdown_top-left_19cqp_28",
  "_dropdown_top-right": "__dropdown_top-right_19cqp_33",
  "_dropdown_bottom-center": "__dropdown_bottom-center_19cqp_41",
  "_dropdown_bottom-left": "__dropdown_bottom-left_19cqp_47",
  "_dropdown_bottom-right": "__dropdown_bottom-right_19cqp_52",
  "_dropdown_left-top": "__dropdown_left-top_19cqp_60",
  "_dropdown_left-center": "__dropdown_left-center_19cqp_65",
  "_dropdown_left-bottom": "__dropdown_left-bottom_19cqp_71",
  "_dropdown_right-top": "__dropdown_right-top_19cqp_79",
  "_dropdown_right-center": "__dropdown_right-center_19cqp_84",
  "_dropdown_right-bottom": "__dropdown_right-bottom_19cqp_90"
}, Et = ({
  position: n,
  parent: t,
  content: c,
  callback: o,
  className: a
}) => {
  const i = R(null), d = R(!1), [l, _] = D(!1), [h, v] = D(!0);
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      onMouseEnter: () => {
        d.current = !0, v(!1), _(!0), o != null && o.enter && o.enter(i.current);
      },
      onMouseLeave: async () => {
        d.current = !1, v(!0), o != null && o.leave && await ue(o.leave(i.current)), d.current || _(!1);
      },
      className: `${Y._dropdown_wrapper} ${a || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: i,
            className: `${Y._dropdown_content} ${l ? "" : Y._dropdown_content_hidden} ${h ? Y._dropdown_content_pointerPrevent : ""} ${Y["_dropdown_" + n]}`,
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
  }, a = {
    callback: null,
    isPlay: !1,
    id: 0
  }, i = (d) => {
    a.id = requestAnimationFrame(i), !o(d) && a.callback && a.isPlay && a.callback();
  };
  return O(() => (a.id = requestAnimationFrame(i), () => {
    cancelAnimationFrame(a.id);
  }), []), (d, l) => {
    if (d === "play") {
      if (!l) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      a.callback = l, a.isPlay = !0;
    } else
      d === "pause" && (a.isPlay = !1);
  };
}, nt = "__magnet_stopPropagation_jja9l_1", ot = {
  _magnet_stopPropagation: nt
}, Rt = ({
  className: n,
  children: t,
  callback: c,
  fps: o = 60,
  stopPropagation: a = !1
}) => {
  const i = R(null), d = R(null), l = R(), _ = tt(o), h = {
    target: i.current,
    children: d.current,
    x: 0,
    y: 0
  }, v = (C) => {
    h.target = i.current, h.children = d.current;
  }, b = (C) => {
    l.current = C.currentTarget.getBoundingClientRect(), h.x = C.clientX - l.current.left - l.current.width / 2, h.y = C.clientY - l.current.top - l.current.height / 2;
  }, x = (C) => {
    C.stopPropagation(), v(), b(C), _("play", () => {
      c.move(h);
    });
  }, j = (C) => {
    C.stopPropagation(), b(C);
  }, F = (C) => {
    C.stopPropagation(), _("pause"), c.leave && c.leave(h);
  };
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      onMouseEnter: x,
      onMouseMove: j,
      onMouseLeave: F,
      className: n || "",
      ref: i,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: d,
          className: a ? ot._magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, at = "__bgImg_wrapper_7g1xx_1", it = "__bgImg_view_7g1xx_6", st = "__bgImg_golden_7g1xx_20", ct = "__bgImg_silver_7g1xx_24", ut = "__bgImg_platinum_7g1xx_28", lt = "__bgImg_square_7g1xx_36", ae = {
  _bgImg_wrapper: at,
  _bgImg_view: it,
  _bgImg_golden: st,
  _bgImg_silver: ct,
  _bgImg_platinum: ut,
  "_bgImg_16-9": "__bgImg_16-9_7g1xx_32",
  _bgImg_square: lt,
  "_bgImg_3-2": "__bgImg_3-2_7g1xx_40",
  "_bgImg_4-3": "__bgImg_4-3_7g1xx_44"
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
  let a = o.includes(n), i = typeof n == "number" && n > 0;
  if (!a && !i)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${o.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ u.jsx("div", { className: `${ae._bgImg_wrapper} ${c || ""}`, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `${ae._bgImg_view} ${a ? ae["_bgImg_" + n] : ""}`,
      style: i ? { paddingTop: `${n}%` } : {},
      children: t
    }
  ) });
}, Me = (n) => {
  const t = document.documentElement.style, c = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", c.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", c.overflow = "");
}, dt = "__modal_dialog_bvz8z_1", ft = {
  _modal_dialog: dt
}, Tt = ({ children: n, className: t, dialog: c, callback: o }) => {
  const a = R(null), i = () => {
    Me("add"), a.current.showModal(), o != null && o.open && o.open(a.current);
  }, d = async () => {
    o != null && o.close && await ue(o.close(a.current)), Me("remove"), a.current.close();
  };
  return O(() => {
    const l = a.current.querySelectorAll(".spice__modal_close");
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
          i();
        },
        children: n
      }
    ),
    /* @__PURE__ */ u.jsx(
      "dialog",
      {
        ref: a,
        onClick: (l) => {
          l.target === a.current && d();
        },
        className: `${ft._modal_dialog} ${c.className ? c.className : ""}`,
        children: c.children
      }
    )
  ] });
}, Pt = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: c = 0,
  once: o,
  callback: a,
  dependencies: i = []
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
      v.forEach((x) => {
        x.isIntersecting && a.enter ? (a.enter(x.target), o && b.unobserve(x.target)) : !x.isIntersecting && a.leave && a.leave(x.target);
      });
    }, h = new IntersectionObserver(_, d);
    return h.observe(l), () => {
      h.unobserve(l);
    };
  }, i);
}, le = ({
  callback: n,
  debounce: t,
  dependencies: c = []
}) => {
  const o = R(0), a = R(0), i = () => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  };
  O(() => (o.current = window.innerWidth, window.addEventListener("resize", i), () => {
    window.removeEventListener("resize", i), clearTimeout(a.current);
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
  const o = (a) => {
    t && mt(a);
  };
  le({
    callback({ initWinW: a, winW: i }) {
      n && n.forEach((d) => {
        _t({
          initWinW: a,
          winW: i,
          threshold: d
        });
      }), o(i);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    o(window.innerWidth), c && vt();
  }, []);
}, St = () => {
  const [n, t] = D(null), c = () => {
    const o = window.ontouchstart, a = navigator.maxTouchPoints;
    o !== void 0 && 0 < a ? t(!0) : t(!1);
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
}, ie = "scroll", Ot = ({
  threshold: n = 0,
  debounce: t,
  dependencies: c = []
}) => {
  const o = R(null), [a, i] = Sr(
    (v, b) => {
      switch (b.type) {
        case ie:
          return o.current = b.payload, b.payload;
        default:
          return v;
      }
    },
    o.current
  ), d = R(0), l = R(0), _ = () => window.scrollY || document.documentElement.scrollTop, h = () => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const v = _();
      v > d.current + n && o.current !== "down" ? i({ type: ie, payload: "down" }) : v < d.current - n && o.current !== "up" && i({ type: ie, payload: "up" }), d.current = v;
    }, t);
  };
  return O(() => (d.current = _(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(l.current);
  }), c), a;
}, It = ({ type: n, width: t }) => {
  const [c, o] = D(null), a = (i) => {
    switch (n) {
      case "max":
        o(t <= i);
        break;
      case "min":
        o(t >= i);
        break;
    }
  };
  return le({
    callback: ({ winW: i }) => {
      a(i);
    },
    debounce: 100,
    dependencies: []
  }), O(() => {
    a(window.innerWidth);
  }, []), c;
};
export {
  bt as Accordion,
  wt as AsideLayout,
  jt as BackgroundImage,
  Et as Dropdown,
  xt as FormField,
  Rt as Magnet,
  Tt as Modal,
  yt as Tab,
  ht as WrapperLayout,
  tt as useAnimationFrame,
  Pt as useIntersectionObserver,
  St as useIsTouchDevice,
  O as useIsomorphicLayoutEffect,
  It as useMediaQuery,
  Lr as useResizeObserver,
  Ot as useScrollDirection,
  Ct as useStarter,
  le as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
