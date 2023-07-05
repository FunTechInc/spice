import Ye, { useLayoutEffect as Cr, useEffect as $, createContext as Ue, useState as k, useContext as Be, useRef as R, useReducer as Or } from "react";
var ce = { exports: {} }, M = {};
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
function Sr() {
  if (De)
    return M;
  De = 1;
  var n = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, _, g) {
    var v, b = {}, y = null, j = null;
    g !== void 0 && (y = "" + g), _.key !== void 0 && (y = "" + _.key), _.ref !== void 0 && (j = _.ref);
    for (v in _)
      o.call(_, v) && !a.hasOwnProperty(v) && (b[v] = _[v]);
    if (l && l.defaultProps)
      for (v in _ = l.defaultProps, _)
        b[v] === void 0 && (b[v] = _[v]);
    return { $$typeof: t, type: l, key: y, ref: j, props: b, _owner: i.current };
  }
  return M.Fragment = s, M.jsx = d, M.jsxs = d, M;
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
var qe;
function Ir() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), F = Symbol.iterator, C = "@@iterator";
    function Ge(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[C];
      return typeof r == "function" ? r : null;
    }
    var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          c[f - 1] = arguments[f];
        Je("error", e, c);
      }
    }
    function Je(e, r, c) {
      {
        var f = D.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (r += "%s", c = c.concat([h]));
        var w = c.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var Ke = !1, Xe = !1, Qe = !1, Ze = !1, er = !1, fe;
    fe = Symbol.for("react.module.reference");
    function rr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === a || er || e === i || e === g || e === v || Ze || e === j || Ke || Xe || Qe || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === b || e.$$typeof === d || e.$$typeof === l || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function tr(e, r, c) {
      var f = e.displayName;
      if (f)
        return f;
      var h = r.displayName || r.name || "";
      return h !== "" ? c + "(" + h + ")" : c;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case a:
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
            return _e(r) + ".Consumer";
          case d:
            var c = e;
            return _e(c._context) + ".Provider";
          case _:
            return tr(e, e.render, "ForwardRef");
          case b:
            var f = e.displayName || null;
            return f !== null ? f : S(e.type) || "Memo";
          case y: {
            var h = e, w = h._payload, m = h._init;
            try {
              return S(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, W = 0, pe, ve, me, he, ge, we, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function nr() {
      {
        if (W === 0) {
          pe = console.log, ve = console.info, me = console.warn, he = console.error, ge = console.group, we = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
    function or() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: pe
            }),
            info: N({}, e, {
              value: ve
            }),
            warn: N({}, e, {
              value: me
            }),
            error: N({}, e, {
              value: he
            }),
            group: N({}, e, {
              value: ge
            }),
            groupCollapsed: N({}, e, {
              value: we
            }),
            groupEnd: N({}, e, {
              value: be
            })
          });
        }
        W < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = D.ReactCurrentDispatcher, X;
    function U(e, r, c) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
            X = f && f[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Q = !1, B;
    {
      var ir = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ir();
    }
    function xe(e, r) {
      if (!e || Q)
        return "";
      {
        var c = B.get(e);
        if (c !== void 0)
          return c;
      }
      var f;
      Q = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = K.current, K.current = null, nr();
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
            } catch (I) {
              f = I;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (I) {
              f = I;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            f = I;
          }
          e();
        }
      } catch (I) {
        if (I && f && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), P = f.stack.split(`
`), x = p.length - 1, E = P.length - 1; x >= 1 && E >= 0 && p[x] !== P[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (p[x] !== P[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || p[x] !== P[E]) {
                    var O = `
` + p[x].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, O), O;
                  }
                while (x >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Q = !1, K.current = w, or(), Error.prepareStackTrace = h;
      }
      var A = e ? e.displayName || e.name : "", ke = A ? U(A) : "";
      return typeof e == "function" && B.set(e, ke), ke;
    }
    function sr(e, r, c) {
      return xe(e, !1);
    }
    function ar(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, ar(e));
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
            return sr(e.render);
          case b:
            return z(e.type, r, c);
          case y: {
            var f = e, h = f._payload, w = f._init;
            try {
              return z(w(h), r, c);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, Re = D.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, c = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(c);
      } else
        Re.setExtraStackFrame(null);
    }
    function cr(e, r, c, f, h) {
      {
        var w = Function.call.bind(H);
        for (var m in e)
          if (w(e, m)) {
            var p = void 0;
            try {
              if (typeof e[m] != "function") {
                var P = Error((f || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              p = e[m](r, m, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              p = x;
            }
            p && !(p instanceof Error) && (G(h), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, m, typeof p), G(null)), p instanceof Error && !(p.message in Ee) && (Ee[p.message] = !0, G(h), T("Failed %s type: %s", c, p.message), G(null));
          }
      }
    }
    var ur = Array.isArray;
    function Z(e) {
      return ur(e);
    }
    function lr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, c = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function dr(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Te(e) {
      if (dr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), je(e);
    }
    var L = D.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Ce, ee;
    ee = {};
    function _r(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pr(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var c = S(L.current.type);
        ee[c] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(L.current.type), e.ref), ee[c] = !0);
      }
    }
    function mr(e, r) {
      {
        var c = function() {
          Pe || (Pe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function hr(e, r) {
      {
        var c = function() {
          Ce || (Ce = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, c, f, h, w, m) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: c,
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
    function wr(e, r, c, f, h) {
      {
        var w, m = {}, p = null, P = null;
        c !== void 0 && (Te(c), p = "" + c), pr(r) && (Te(r.key), p = "" + r.key), _r(r) && (P = r.ref, vr(r, h));
        for (w in r)
          H.call(r, w) && !fr.hasOwnProperty(w) && (m[w] = r[w]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (w in x)
            m[w] === void 0 && (m[w] = x[w]);
        }
        if (p || P) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && mr(m, E), P && hr(m, E);
        }
        return gr(e, p, P, h, f, L.current, m);
      }
    }
    var re = D.ReactCurrentOwner, Oe = D.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, c = z(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Se() {
      {
        if (re.current) {
          var e = S(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + r + ":" + c + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function yr(e) {
      {
        var r = Se();
        if (!r) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (r = `

Check the top-level render call using <` + c + ">.");
        }
        return r;
      }
    }
    function $e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = yr(r);
        if (Ie[c])
          return;
        Ie[c] = !0;
        var f = "";
        e && e._owner && e._owner !== re.current && (f = " It was passed a child from " + S(e._owner.type) + "."), q(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), q(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var c = 0; c < e.length; c++) {
            var f = e[c];
            ne(f) && $e(f, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Ge(e);
          if (typeof h == "function" && h !== e.entries)
            for (var w = h.call(e), m; !(m = w.next()).done; )
              ne(m.value) && $e(m.value, r);
        }
      }
    }
    function xr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var c;
        if (typeof r == "function")
          c = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          c = r.propTypes;
        else
          return;
        if (c) {
          var f = S(r);
          cr(c, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var h = S(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var r = Object.keys(e.props), c = 0; c < r.length; c++) {
          var f = r[c];
          if (f !== "children" && f !== "key") {
            q(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function Ne(e, r, c, f, h, w) {
      {
        var m = rr(e);
        if (!m) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = br(h);
          P ? p += P : p += Se();
          var x;
          e === null ? x = "null" : Z(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + (S(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, p);
        }
        var E = wr(e, r, c, h, w);
        if (E == null)
          return E;
        if (m) {
          var O = r.children;
          if (O !== void 0)
            if (f)
              if (Z(O)) {
                for (var A = 0; A < O.length; A++)
                  Fe(O[A], e);
                Object.freeze && Object.freeze(O);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(O, e);
        }
        return e === o ? Er(E) : xr(E), E;
      }
    }
    function Rr(e, r, c) {
      return Ne(e, r, c, !0);
    }
    function jr(e, r, c) {
      return Ne(e, r, c, !1);
    }
    var Tr = jr, Pr = Rr;
    V.Fragment = o, V.jsx = Tr, V.jsxs = Pr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ce.exports = Sr() : ce.exports = Ir();
var u = ce.exports;
const J = typeof document < "u" ? Cr : $, $r = "_spice_wrapper_1b9je_1", Fr = "_spice_wrapper_hidden_1b9je_10", Ae = {
  spice_wrapper: $r,
  spice_wrapper_hidden: Fr
}, ze = Ue(!0), He = Ue((n) => !n), Nr = ({ children: n }) => {
  const [t, s] = k(!0);
  return /* @__PURE__ */ u.jsx(ze.Provider, { value: t, children: /* @__PURE__ */ u.jsx(He.Provider, { value: s, children: n }) });
}, kr = ({ children: n }) => {
  const t = Be(ze);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `${Ae.spice_wrapper} ${t ? Ae.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, gt = ({ children: n }) => /* @__PURE__ */ u.jsx(Nr, { children: /* @__PURE__ */ u.jsx(kr, { children: n }) }), Dr = () => Be(He), qr = "_spice_aside_aside_4cj7n_1", Ar = "_spice_aside_main_4cj7n_5", oe = {
  spice_aside_aside: qr,
  spice_aside_main: Ar
}, wt = ({
  className: n,
  children: t,
  aside: s,
  isSticky: o = !1
}) => {
  const i = Dr();
  return J(() => (o && i(() => !1), () => {
    i(() => !0);
  }), []), /* @__PURE__ */ u.jsxs("div", { className: n || "", children: [
    s.index === 1 && /* @__PURE__ */ u.jsx("div", { className: oe.spice_aside_main, children: t }),
    /* @__PURE__ */ u.jsx(
      "aside",
      {
        className: `${oe.spice_aside_aside} ${s.className ? s.className : ""}`,
        children: s.chidren
      }
    ),
    s.index === 0 && /* @__PURE__ */ u.jsx("div", { className: oe.spice_aside_main, children: t })
  ] });
}, Wr = ({
  targetRef: n,
  callback: t,
  debounce: s,
  dependencies: o = []
}) => {
  const i = R(0), a = R(!0);
  $(() => {
    const d = new ResizeObserver((_) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(_[0].target);
      }, s);
    }), l = n.current;
    if (l)
      return d.observe(l), () => {
        d.unobserve(l), clearTimeout(i.current);
      };
  }, o);
}, Lr = ({ content: n, isOpen: t }) => {
  const s = n.querySelectorAll("a,button");
  if (!s)
    return;
  const o = t ? "0" : "-1";
  s.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, Mr = ({
  wrapper: n,
  inner: t,
  isOpen: s,
  callback: o
}) => {
  const a = {
    height: t.getBoundingClientRect().height,
    target: n
  };
  s ? o.close(a) : o.open(a);
}, Vr = "_spice_accordion_contentWrapper_twt7j_1", Yr = "_spice_accordion_hidden_twt7j_5", We = {
  spice_accordion_contentWrapper: Vr,
  spice_accordion_hidden: Yr
}, bt = ({
  isView: n = !1,
  value: t,
  className: s,
  button: o,
  callback: i,
  content: a
}) => {
  const d = R(null), l = R(null), [_, g] = k(n);
  return $(() => {
    Lr({ content: d.current, isOpen: _ });
  }, [_]), Wr({
    targetRef: l,
    callback: (v) => {
      const b = v.getBoundingClientRect().height;
      _ && (d.current.style.height = `${b}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ u.jsxs("div", { className: s || "", children: [
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
        className: `${We.spice_accordion_contentWrapper} ${n ? "" : We.spice_accordion_hidden}`,
        id: `content-${t}`,
        "aria-labelledby": `button-${t}`,
        "aria-hidden": !_,
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: l,
            className: a.className ? a.className : "",
            children: a.children
          }
        )
      }
    )
  ] });
}, Ur = "_spice_form_input_yxowj_1", Br = "_spice_form_select_yxowj_2", zr = "_spice_form_radioCheckInput_yxowj_8", ue = {
  spice_form_input: Ur,
  spice_form_select: Br,
  spice_form_radioCheckInput: zr
}, Le = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ u.jsx(
  "input",
  {
    ...n,
    className: `${ue.spice_form_input} ${t || ""}`
  }
), Hr = ({ formProps: n }) => {
  const t = n.isSelect;
  if (!t)
    return;
  const s = t.options.map((a) => /* @__PURE__ */ u.jsx("option", { value: a, children: a }, a)), o = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ u.jsx("option", { hidden: !0, children: a }) : null;
  }, i = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ u.jsxs(
    "select",
    {
      name: n.name,
      id: n.id,
      className: ue.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ u.jsx(o, {}),
        s
      ]
    }
  );
}, Me = ({
  layoutType: n,
  formPropsArr: t,
  label: s,
  FormItem: o,
  errors: i
}) => {
  const a = (d) => !i || !i[d] ? null : i[d];
  if (n === "block")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      s && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
      a(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      s && /* @__PURE__ */ u.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ u.jsxs("ul", { children: [
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ u.jsxs("li", { children: [
          /* @__PURE__ */ u.jsx(o, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const d = t.map((l) => /* @__PURE__ */ u.jsxs("li", { children: [
      /* @__PURE__ */ u.jsx(
        o,
        {
          formProps: l,
          className: ue.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ u.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      s && /* @__PURE__ */ u.jsx("label", { children: s }),
      /* @__PURE__ */ u.jsx("ul", { children: d }),
      a(0)
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
  formProps: s,
  errors: o
}) => {
  const i = s, a = i[0].type, d = i.length, l = !!i[0].isSelect, _ = !!i[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  if (o && o.length > 2)
    throw new Error("The length of error is up to 2.");
  const g = (b) => Me({
    layoutType: d === 1 ? "block" : "flex",
    formPropsArr: i,
    label: t,
    FormItem: b,
    errors: o
  }), v = () => l ? g(Hr) : _ ? g(Gr) : a === "radio" || a === "checkbox" ? Me({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: Le,
    errors: o
  }) : g(Le);
  return /* @__PURE__ */ u.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ u.jsx(v, {}) });
}, le = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Jr = "_spice_tab_button_12kqm_1", Kr = "_spice_tab_contentWrapper_12kqm_5", Xr = "_spice_tab_hidden_12kqm_9", ie = {
  spice_tab_button: Jr,
  spice_tab_contentWrapper: Kr,
  spice_tab_hidden: Xr
}, xt = ({ lists: n, contents: t, callback: s }) => {
  const o = R(!1), i = R(!1), [a, d] = k(0), l = [], _ = async (y) => {
    a === y || i.current || (i.current = !0, await le(s.leave(l[a].current)), d(y));
  };
  $(() => {
    if (!o.current) {
      o.current = !0;
      return;
    }
    i.current = !1, s.enter(l[a].current);
  }, [a]);
  const g = n.children.map((y, j) => /* @__PURE__ */ u.jsx(
    "button",
    {
      onClick: () => {
        _(j);
      },
      className: `${n.buttonClassName} ${ie.spice_tab_button} ${a === j ? n.isViewClassName : ""}`,
      children: y
    },
    j
  )), v = ({
    children: y,
    index: j
  }) => {
    const F = R(null);
    return l.push(F), /* @__PURE__ */ u.jsx("li", { ref: F, className: a === j ? "" : ie.spice_tab_hidden, children: y });
  }, b = t.children.map((y, j) => /* @__PURE__ */ u.jsx(v, { index: j, children: y }, j));
  return /* @__PURE__ */ u.jsxs("div", { children: [
    /* @__PURE__ */ u.jsx("div", { className: n.wrapperClassName, children: g }),
    /* @__PURE__ */ u.jsx("ul", { className: ie.spice_tab_contentWrapper, children: b })
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
  content: s,
  callback: o,
  className: i
}) => {
  const a = R(null), d = R(!1), [l, _] = k(!1), [g, v] = k(!0);
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      onMouseEnter: () => {
        d.current = !0, v(!1), _(!0), o != null && o.enter && o.enter(a.current);
      },
      onMouseLeave: async () => {
        d.current = !1, v(!0), o != null && o.leave && await le(o.leave(a.current)), d.current || _(!1);
      },
      className: `${Y.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: a,
            className: `${Y.spice_dropdown_content} ${l ? "" : Y.spice_dropdown_content_hidden} ${g ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + n]}`,
            children: s.children
          }
        )
      ]
    }
  );
}, tt = (n) => {
  n > 60 && (n = 60);
  const t = Math.floor(1e3 / n);
  let s = performance.now();
  const o = (d) => {
    const l = d - s, _ = l <= t;
    return _ || (s = d - l % t), _;
  }, i = {
    callback: null,
    isPlay: !1,
    id: 0
  }, a = (d) => {
    i.id = requestAnimationFrame(a), !o(d) && i.callback && i.isPlay && i.callback();
  };
  return J(() => (i.id = requestAnimationFrame(a), () => {
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
  callback: s,
  fps: o = 60,
  stopPropagation: i = !1
}) => {
  const a = R(null), d = R(null), l = R(), _ = tt(o), g = {
    target: a.current,
    children: d.current,
    x: 0,
    y: 0
  }, v = (C) => {
    g.target = a.current, g.children = d.current;
  }, b = (C) => {
    l.current = C.currentTarget.getBoundingClientRect(), g.x = C.clientX - l.current.left - l.current.width / 2, g.y = C.clientY - l.current.top - l.current.height / 2;
  }, y = (C) => {
    C.stopPropagation(), v(), b(C), _("play", () => {
      s.move(g);
    });
  }, j = (C) => {
    C.stopPropagation(), b(C);
  }, F = (C) => {
    C.stopPropagation(), _("pause"), s.leave && s.leave(g);
  };
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      onMouseEnter: y,
      onMouseMove: j,
      onMouseLeave: F,
      className: n || "",
      ref: a,
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
}, it = "_spice_bgImg_wrapper_12iq7_1", st = "_spice_bgImg_view_12iq7_6", at = "_spice_bgImg_golden_12iq7_20", ct = "_spice_bgImg_silver_12iq7_24", ut = "_spice_bgImg_platinum_12iq7_28", lt = "_spice_bgImg_square_12iq7_36", se = {
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
  className: s
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
  let i = o.includes(n), a = typeof n == "number" && n > 0;
  if (!i && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${o.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ u.jsx("div", { className: `${se.spice_bgImg_wrapper} ${s || ""}`, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      className: `${se.spice_bgImg_view} ${i ? se["spice_bgImg_" + n] : ""}`,
      style: a ? { paddingTop: `${n}%` } : {},
      children: t
    }
  ) });
}, Ve = (n) => {
  const t = document.documentElement.style, s = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", s.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", s.overflow = "");
}, dt = "_spice_modal_dialog_1t31c_1", ft = {
  spice_modal_dialog: dt
}, Tt = ({ children: n, className: t, dialog: s, callback: o }) => {
  const i = R(null), a = () => {
    Ve("add"), i.current.showModal(), o != null && o.open && o.open(i.current);
  }, d = async () => {
    o != null && o.close && await le(o.close(i.current)), Ve("remove"), i.current.close();
  };
  return $(() => {
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
          a();
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
        className: `${ft.spice_modal_dialog} ${s.className ? s.className : ""}`,
        children: s.children
      }
    )
  ] });
}, Pt = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: s = 0,
  once: o,
  callback: i,
  dependencies: a = []
}) => {
  const d = {
    rootMargin: t,
    threshold: s
  };
  J(() => {
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
  }, a);
}, de = ({
  callback: n,
  debounce: t,
  dependencies: s = []
}) => {
  const o = R(0), i = R(0), a = () => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: o.current
      });
    }, t);
  };
  $(() => (o.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(i.current);
  }), s);
}, _t = ({ initWinW: n, winW: t, threshold: s }) => {
  let o = !(n <= s);
  t <= s ? o && window.location.reload() : !o && window.location.reload();
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
  const s = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== s && t.setAttribute("content", s);
}, Ct = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: s = !1
}) => {
  const o = (i) => {
    t && mt(i);
  };
  de({
    callback({ initWinW: i, winW: a }) {
      n && n.forEach((d) => {
        _t({
          initWinW: i,
          winW: a,
          threshold: d
        });
      }), o(a);
    },
    debounce: 100,
    dependencies: []
  }), J(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), s && process.env.NODE_ENV !== "development" && vt();
  }, []);
}, Ot = () => {
  const [n, t] = k(null), s = () => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  };
  return de({
    callback() {
      s();
    },
    debounce: 100,
    dependencies: []
  }), $(() => {
    s();
  }, []), n;
}, ae = "scroll", St = ({
  threshold: n = 0,
  debounce: t,
  dependencies: s = []
}) => {
  const o = R(null), [i, a] = Or(
    (v, b) => {
      switch (b.type) {
        case ae:
          return o.current = b.payload, b.payload;
        default:
          return v;
      }
    },
    o.current
  ), d = R(0), l = R(0), _ = () => window.scrollY || document.documentElement.scrollTop, g = () => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const v = _();
      v > d.current + n && o.current !== "down" ? a({ type: ae, payload: "down" }) : v < d.current - n && o.current !== "up" && a({ type: ae, payload: "up" }), d.current = v;
    }, t);
  };
  return $(() => (d.current = _(), window.addEventListener("scroll", g, { passive: !0 }), () => {
    window.removeEventListener("scroll", g), clearTimeout(l.current);
  }), s), i;
}, It = ({ type: n, width: t }) => {
  const [s, o] = k(null), i = (a) => {
    switch (n) {
      case "max":
        o(t <= a);
        break;
      case "min":
        o(t >= a);
        break;
    }
  };
  return de({
    callback: ({ winW: a }) => {
      i(a);
    },
    debounce: 100,
    dependencies: []
  }), $(() => {
    i(window.innerWidth);
  }, []), s;
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
  Ot as useIsTouchDevice,
  J as useIsomorphicLayoutEffect,
  It as useMediaQuery,
  Wr as useResizeObserver,
  St as useScrollDirection,
  Ct as useStarter,
  de as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
