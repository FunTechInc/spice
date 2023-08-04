import Be, { createContext as N, useState as I, useContext as W, useEffect as S, useRef as R, useLayoutEffect as Dt, useReducer as At } from "react";
var ue = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Lt() {
  if (We)
    return q;
  We = 1;
  var o = Be, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, _) {
    var g, b = {}, x = null, D = null;
    _ !== void 0 && (x = "" + _), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (g in f)
      r.call(f, g) && !c.hasOwnProperty(g) && (b[g] = f[g]);
    if (l && l.defaultProps)
      for (g in f = l.defaultProps, f)
        b[g] === void 0 && (b[g] = f[g]);
    return { $$typeof: t, type: l, key: x, ref: D, props: b, _owner: s.current };
  }
  return q.Fragment = i, q.jsx = u, q.jsxs = u, q;
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
var Me;
function Nt() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Be, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.iterator, B = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = z && e[z] || e[B];
      return typeof n == "function" ? n : null;
    }
    var $ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          a[p - 1] = arguments[p];
        tt("error", e, a);
      }
    }
    function tt(e, n, a) {
      {
        var p = $.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (n += "%s", a = a.concat([w]));
        var y = a.map(function(h) {
          return String(h);
        });
        y.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, _e;
    _e = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === c || st || e === s || e === _ || e === g || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function ct(e, n, a) {
      var p = e.displayName;
      if (p)
        return p;
      var w = n.displayName || n.name || "";
      return w !== "" ? a + "(" + w + ")" : a;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case i:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var n = e;
            return ve(n) + ".Consumer";
          case u:
            var a = e;
            return ve(a._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case b:
            var p = e.displayName || null;
            return p !== null ? p : C(e.type) || "Memo";
          case x: {
            var w = e, y = w._payload, h = w._init;
            try {
              return C(h(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, M = 0, ge, he, me, we, be, ye, xe;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function ut() {
      {
        if (M === 0) {
          ge = console.log, he = console.info, me = console.warn, we = console.error, be = console.group, ye = console.groupCollapsed, xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        M++;
      }
    }
    function lt() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ge
            }),
            info: F({}, e, {
              value: he
            }),
            warn: F({}, e, {
              value: me
            }),
            error: F({}, e, {
              value: we
            }),
            group: F({}, e, {
              value: be
            }),
            groupCollapsed: F({}, e, {
              value: ye
            }),
            groupEnd: F({}, e, {
              value: xe
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = $.ReactCurrentDispatcher, Z;
    function U(e, n, a) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (w) {
            var p = w.stack.trim().match(/\n( *(at )?)/);
            Z = p && p[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var ee = !1, H;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      H = new dt();
    }
    function je(e, n) {
      if (!e || ee)
        return "";
      {
        var a = H.get(e);
        if (a !== void 0)
          return a;
      }
      var p;
      ee = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = Q.current, Q.current = null, ut();
      try {
        if (n) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (O) {
              p = O;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (O) {
              p = O;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            p = O;
          }
          e();
        }
      } catch (O) {
        if (O && p && typeof O.stack == "string") {
          for (var v = O.stack.split(`
`), T = p.stack.split(`
`), E = v.length - 1, j = T.length - 1; E >= 1 && j >= 0 && v[E] !== T[j]; )
            j--;
          for (; E >= 1 && j >= 0; E--, j--)
            if (v[E] !== T[j]) {
              if (E !== 1 || j !== 1)
                do
                  if (E--, j--, j < 0 || v[E] !== T[j]) {
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, P), P;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = y, lt(), Error.prepareStackTrace = w;
      }
      var L = e ? e.displayName || e.name : "", Ne = L ? U(L) : "";
      return typeof e == "function" && H.set(e, Ne), Ne;
    }
    function ft(e, n, a) {
      return je(e, !1);
    }
    function pt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, pt(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case _:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ft(e.render);
          case b:
            return G(e.type, n, a);
          case x: {
            var p = e, w = p._payload, y = p._init;
            try {
              return G(y(w), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, Se = $.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, a = G(e.type, e._source, n ? n.type : null);
        Se.setExtraStackFrame(a);
      } else
        Se.setExtraStackFrame(null);
    }
    function _t(e, n, a, p, w) {
      {
        var y = Function.call.bind(J);
        for (var h in e)
          if (y(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var T = Error((p || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = e[h](n, h, p, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (K(w), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", a, h, typeof v), K(null)), v instanceof Error && !(v.message in Re) && (Re[v.message] = !0, K(w), m("Failed %s type: %s", a, v.message), K(null));
          }
      }
    }
    var vt = Array.isArray;
    function te(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ht(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Pe(e) {
      if (ht(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Te(e);
    }
    var k = $.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Oe, re;
    re = {};
    function wt(e) {
      if (J.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (J.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, n) {
      if (typeof e.ref == "string" && k.current && n && k.current.stateNode !== n) {
        var a = C(k.current.type);
        re[a] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(k.current.type), e.ref), re[a] = !0);
      }
    }
    function xt(e, n) {
      {
        var a = function() {
          Ce || (Ce = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Et(e, n) {
      {
        var a = function() {
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var jt = function(e, n, a, p, w, y, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: h,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Rt(e, n, a, p, w) {
      {
        var y, h = {}, v = null, T = null;
        a !== void 0 && (Pe(a), v = "" + a), bt(n) && (Pe(n.key), v = "" + n.key), wt(n) && (T = n.ref, yt(n, w));
        for (y in n)
          J.call(n, y) && !mt.hasOwnProperty(y) && (h[y] = n[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            h[y] === void 0 && (h[y] = E[y]);
        }
        if (v || T) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && xt(h, j), T && Et(h, j);
        }
        return jt(e, v, T, w, p, k.current, h);
      }
    }
    var ne = $.ReactCurrentOwner, Ie = $.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var n = e._owner, a = G(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(a);
      } else
        Ie.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function $e() {
      {
        if (ne.current) {
          var e = C(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function St(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + n + ":" + a + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function Tt(e) {
      {
        var n = $e();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function De(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Tt(n);
        if (Fe[a])
          return;
        Fe[a] = !0;
        var p = "";
        e && e._owner && e._owner !== ne.current && (p = " It was passed a child from " + C(e._owner.type) + "."), A(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, p), A(null);
      }
    }
    function Ae(e, n) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var a = 0; a < e.length; a++) {
            var p = e[a];
            ie(p) && De(p, n);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = X(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), h; !(h = y.next()).done; )
              ie(h.value) && De(h.value, n);
        }
      }
    }
    function Pt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var a;
        if (typeof n == "function")
          a = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === b))
          a = n.propTypes;
        else
          return;
        if (a) {
          var p = C(n);
          _t(a, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !oe) {
          oe = !0;
          var w = C(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var p = n[a];
          if (p !== "children" && p !== "key") {
            A(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Le(e, n, a, p, w, y) {
      {
        var h = at(e);
        if (!h) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(w);
          T ? v += T : v += $e();
          var E;
          e === null ? E = "null" : te(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (C(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var j = Rt(e, n, a, w, y);
        if (j == null)
          return j;
        if (h) {
          var P = n.children;
          if (P !== void 0)
            if (p)
              if (te(P)) {
                for (var L = 0; L < P.length; L++)
                  Ae(P[L], e);
                Object.freeze && Object.freeze(P);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(P, e);
        }
        return e === r ? Ct(j) : Pt(j), j;
      }
    }
    function Ot(e, n, a) {
      return Le(e, n, a, !0);
    }
    function It(e, n, a) {
      return Le(e, n, a, !1);
    }
    var $t = It, Ft = Ot;
    V.Fragment = r, V.jsx = $t, V.jsxs = Ft;
  }()), V;
}
process.env.NODE_ENV === "production" ? ue.exports = Lt() : ue.exports = Nt();
var d = ue.exports;
const Wt = "_spice_wrapper_1b9je_1", Mt = "_spice_wrapper_hidden_1b9je_10", ke = {
  spice_wrapper: Wt,
  spice_wrapper_hidden: Mt
}, Ue = N(!0), He = N((o) => !o), kt = ({ children: o }) => {
  const [t, i] = I(!0);
  return /* @__PURE__ */ d.jsx(Ue.Provider, { value: t, children: /* @__PURE__ */ d.jsx(He.Provider, { value: i, children: o }) });
}, qt = ({ children: o }) => {
  const t = W(Ue);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ke.spice_wrapper} ${t ? ke.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Ir = ({ children: o }) => /* @__PURE__ */ d.jsx(kt, { children: /* @__PURE__ */ d.jsx(qt, { children: o }) }), Vt = () => W(He), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", se = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, $r = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const s = Vt();
  return S(() => (r && s(() => !1), () => {
    s(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: o || "", children: [
    i.index === 1 && /* @__PURE__ */ d.jsx("div", { className: se.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${se.spice_aside_aside} ${i.className ? i.className : ""}`,
        children: i.chidren
      }
    ),
    i.index === 0 && /* @__PURE__ */ d.jsx("div", { className: se.spice_aside_main, children: t })
  ] });
}, Bt = "_spice_form_input_yxowj_1", Ut = "_spice_form_select_yxowj_2", Ht = "_spice_form_radioCheckInput_yxowj_8", le = {
  spice_form_input: Bt,
  spice_form_select: Ut,
  spice_form_radioCheckInput: Ht
}, qe = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...o,
    className: `${le.spice_form_input} ${t || ""}`
  }
), Gt = ({ formProps: o }) => {
  const { isSelect: t, ...i } = o;
  if (!t)
    return;
  const r = t.options.map((u) => /* @__PURE__ */ d.jsx("option", { value: u, children: u }, u)), s = () => {
    const u = t.defaultValue;
    return u ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: u }) : null;
  }, c = () => {
    const u = t.defaultSelectedIndex;
    if (u)
      return t.options[u];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      ...i,
      className: le.spice_form_select,
      defaultValue: c(),
      children: [
        /* @__PURE__ */ d.jsx(s, {}),
        r
      ]
    }
  );
}, Ve = ({
  layoutType: o,
  formPropsArr: t,
  label: i,
  FormItem: r,
  errors: s
}) => {
  const c = (u) => !s || !s[u] ? null : s[u];
  if (o === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      c(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
          c(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[1] }),
          c(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const u = t.map((l) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: l,
          className: le.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: l.id, children: l.value })
    ] }, l.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { children: i }),
      /* @__PURE__ */ d.jsx("ul", { children: u }),
      c(0)
    ] });
  }
}, Jt = ({ formProps: o }) => {
  const { isTextarea: t, ...i } = o;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...i, ...t });
}, Fr = ({
  className: o,
  label: t,
  formProps: i,
  errors: r
}) => {
  const s = i, c = s[0].type, u = s.length, l = !!s[0].isSelect, f = !!s[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const _ = (b) => Ve({
    layoutType: u === 1 ? "block" : "flex",
    formPropsArr: s,
    label: t,
    FormItem: b,
    errors: r
  }), g = () => l ? _(Gt) : f ? _(Jt) : c === "radio" || c === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: qe,
    errors: r
  }) : _(qe);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ d.jsx(g, {}) });
}, de = (o) => new Promise((t) => {
  o instanceof Promise ? o.then(() => {
    t(null);
  }) : t(null);
}), Kt = "_spice_dropdown_wrapper_1nq94_1", Xt = "_spice_dropdown_content_1nq94_5", Qt = "_spice_dropdown_content_hidden_1nq94_10", Zt = "_spice_dropdown_content_pointerPrevent_1nq94_15", Y = {
  spice_dropdown_wrapper: Kt,
  spice_dropdown_content: Xt,
  spice_dropdown_content_hidden: Qt,
  spice_dropdown_content_pointerPrevent: Zt,
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
}, Dr = ({
  position: o,
  parent: t,
  content: i,
  callback: r,
  className: s
}) => {
  const c = R(null), u = R(!1), [l, f] = I(!1), [_, g] = I(!0), b = () => {
    u.current = !0, g(!1), f(!0), r != null && r.enter && r.enter(c.current);
  }, x = async () => {
    u.current = !1, g(!0), r != null && r.leave && await de(r.leave(c.current)), u.current || f(!1);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onClick: x,
      className: `${Y.spice_dropdown_wrapper} ${s || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: c,
            className: `${Y.spice_dropdown_content} ${l ? "" : Y.spice_dropdown_content_hidden} ${_ ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + o]}`,
            children: i.children
          }
        )
      ]
    }
  );
}, er = (o, t = []) => {
  o > 60 && (o = 60);
  const i = Math.floor(1e3 / o);
  let r = performance.now();
  const s = (l) => {
    const f = l - r, _ = f <= i;
    return _ || (r = l - f % i), _;
  }, c = {
    callback: null,
    isPlay: !1,
    id: 0
  }, u = (l) => {
    c.id = requestAnimationFrame(u), !s(l) && c.callback && c.isPlay && c.callback();
  };
  return S(() => (c.id = requestAnimationFrame(u), () => {
    cancelAnimationFrame(c.id);
  }), t), (l, f) => {
    if (l === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      c.callback = f, c.isPlay = !0;
    } else
      l === "pause" && (c.isPlay = !1);
  };
}, tr = "_spice_magnet_stopPropagation_99wvn_1", rr = {
  spice_magnet_stopPropagation: tr
}, Ar = ({
  className: o,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: c = !1
}) => {
  const u = R(null), l = R(null), f = R(), _ = er(r), g = {
    target: u.current,
    children: l.current,
    x: 0,
    y: 0
  }, b = (m) => {
    g.target = u.current, g.children = l.current;
  }, x = (m) => {
    f.current = m.currentTarget.getBoundingClientRect(), g.x = m.clientX - f.current.left - f.current.width / 2, g.y = m.clientY - f.current.top - f.current.height / 2;
  }, D = (m) => {
    m.stopPropagation(), b(), x(m), _("play", () => {
      i.move(g);
    });
  }, z = (m) => {
    m.stopPropagation(), x(m);
  }, B = (m) => {
    m.stopPropagation(), _("pause"), i.leave && i.leave(g);
  }, X = (m) => {
    B(m);
  }, $ = (m) => {
    c && B(m);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: D,
      onMouseMove: z,
      onMouseLeave: X,
      onClick: $,
      className: o || "",
      ref: u,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          className: s ? rr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, nr = "_spice_bgImg_wrapper_164nj_1", or = "_spice_bgImg_view_164nj_5", ir = "_spice_bgImg_golden_164nj_22", sr = "_spice_bgImg_silver_164nj_26", ar = "_spice_bgImg_platinum_164nj_30", cr = "_spice_bgImg_square_164nj_38", ae = {
  spice_bgImg_wrapper: nr,
  spice_bgImg_view: or,
  spice_bgImg_golden: ir,
  spice_bgImg_silver: sr,
  spice_bgImg_platinum: ar,
  "spice_bgImg_16-9": "_spice_bgImg_16-9_164nj_34",
  spice_bgImg_square: cr,
  "spice_bgImg_3-2": "_spice_bgImg_3-2_164nj_42",
  "spice_bgImg_4-3": "_spice_bgImg_4-3_164nj_46"
}, Lr = ({
  ratio: o,
  children: t,
  className: i
}) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let s = r.includes(o), c = typeof o == "number" && o > 0;
  if (!s && !c)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx("div", { className: `${ae.spice_bgImg_wrapper} ${i || ""}`, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ae.spice_bgImg_view} ${s ? ae["spice_bgImg_" + o] : ""}`,
      style: c ? { paddingTop: `${o}%` } : {},
      children: t
    }
  ) });
}, Ye = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, Nr = ({ children: o, className: t, dialog: i, callback: r }) => {
  const s = R(null), c = () => {
    Ye("add"), s.current.showModal(), r != null && r.open && r.open(s.current);
  }, u = async () => {
    r != null && r.close && await de(r.close(s.current)), Ye("remove"), s.current.close();
  };
  return S(() => {
    const l = s.current.querySelectorAll(".spice__modal_close");
    l && l.forEach((f) => {
      f.addEventListener("click", () => {
        u();
      });
    });
  }, []), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          c();
        },
        children: o
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: s,
        onClick: (l) => {
          l.target === s.current && u();
        },
        className: `${lr.spice_modal_dialog} ${i.className ? i.className : ""}`,
        children: i.children
      }
    )
  ] });
}, dr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = N(dr), Je = N(
  () => {
  }
), fr = ({ children: o, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [i, r] = I({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Ge.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Je.Provider, { value: r, children: o }) });
}, Ke = () => W(Ge), fe = () => W(Je), pr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = fe(), s = Ke(), c = () => {
    s.current === t || s.isLeaving || r((u) => ({
      ...u,
      isLeaving: !0,
      isAnimation: !0,
      prev: u.current,
      next: t
    }));
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: c,
      className: i || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: o
    }
  );
}, _r = "_spice_tab_hidden_1r0oa_1", vr = {
  spice_tab_hidden: _r
}, Xe = ({ content: o, isOpen: t }) => {
  const i = o.querySelectorAll("a,button");
  if (!i)
    return;
  const r = t ? "0" : "-1";
  i.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, gr = ({ children: o, value: t, className: i, callback: r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = R(!0), c = R(null), u = fe(), l = Ke(), f = l.current === t && !l.isLeaving;
  return S(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!l.isAnimation) {
      f && r != null && r.reset && r.reset(c.current);
      return;
    }
    l.prev === t && (async () => (r != null && r.close && await de(r.close(c.current)), u((_) => ({
      ..._,
      isLeaving: !1,
      prev: "",
      current: _.next,
      next: ""
    }))))(), f && r != null && r.open && r.open(c.current);
  }, [l, u, r, t, f]), S(() => {
    Xe({
      content: c.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${l.current !== t ? vr.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": l.current !== t,
      children: o
    }
  );
}, hr = () => {
  const o = fe();
  return (t, i) => {
    o((r) => ({
      isAnimation: i,
      isLeaving: i,
      prev: i ? r.current : "",
      current: i ? r.current : t,
      next: i ? t : ""
    }));
  };
}, Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: pr,
  Content: gr,
  Context: fr,
  useTabSwitch: hr
}, Symbol.toStringTag, { value: "Module" })), mr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Qe = N(mr), Ze = N(() => {
}), wr = ({ children: o, defaultValue: t }) => {
  const [i, r] = I({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Qe.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Ze.Provider, { value: r, children: o }) });
}, et = () => W(Qe), br = () => W(Ze), yr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = et(), s = br(), c = !!r.defaultValue.find(
    (f) => f === t
  ), [u, l] = I(c);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        s((f) => ({
          ...f,
          toggle: u,
          target: t
        })), l(!u);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": u,
      children: o
    }
  );
}, xr = "_spice_accordion_content_1wkzs_1", Er = "_spice_accordion_hidden_1wkzs_5", ze = {
  spice_accordion_content: xr,
  spice_accordion_hidden: Er
}, jr = ({
  targetRef: o,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const s = R(0), c = R(!0);
  S(() => {
    const u = new ResizeObserver((f) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(f[0].target);
      }, i);
    }), l = o.current;
    if (l)
      return u.observe(l), () => {
        u.unobserve(l), clearTimeout(s.current);
      };
  }, r);
}, Rr = ({ value: o, callback: t, children: i, className: r }) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = R(!0), c = R(null), u = R(null), l = et(), f = !!l.defaultValue.find(
    (b) => b === o
  ), [_, g] = I(f);
  return S(() => {
    l.target === o && g(!_);
  }, [l.target, l.toggle]), S(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    const b = {
      height: u.current.getBoundingClientRect().height,
      target: c.current
    };
    _ ? t.open(b) : t.close(b);
  }, [_]), S(() => {
    Xe({ content: c.current, isOpen: _ });
  }, [_]), jr({
    targetRef: u,
    callback: (b) => {
      const x = b.getBoundingClientRect().height;
      _ && (c.current.style.height = `${x}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${ze.spice_accordion_content} ${f ? "" : ze.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !_,
      children: /* @__PURE__ */ d.jsx("div", { ref: u, className: r || "", children: i })
    }
  );
}, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yr,
  Content: Rr,
  Context: wr
}, Symbol.toStringTag, { value: "Module" })), kr = typeof document < "u" ? Dt : S, qr = ({
  targetRef: o,
  rootMargin: t = "0px",
  threshold: i = 0,
  once: r,
  callback: s,
  dependencies: c = []
}) => {
  const u = {
    rootMargin: t,
    threshold: i
  };
  S(() => {
    const l = o == null ? void 0 : o.current;
    if (!l)
      return;
    const f = (g, b) => {
      g.forEach((x) => {
        x.isIntersecting && s.enter ? (s.enter(x.target), r && b.unobserve(x.target)) : !x.isIntersecting && s.leave && s.leave(x.target);
      });
    }, _ = new IntersectionObserver(f, u);
    return _.observe(l), () => {
      _.unobserve(l);
    };
  }, c);
}, pe = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(0), s = R(0), c = () => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  S(() => (r.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(s.current);
  }), i);
}, Sr = ({ initWinW: o, winW: t, threshold: i }) => {
  let r = !(o <= i);
  t <= i ? r && window.location.reload() : !r && window.location.reload();
}, Tr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`, Pr = () => {
  console.log(Tr);
}, Cr = (o) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const i = o > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== i && t.setAttribute("content", i);
}, Vr = ({
  reloadThresholds: o,
  isFixViewportForSmall: t = !0,
  areYouFun: i = !1
}) => {
  const r = (s) => {
    t && Cr(s);
  };
  pe({
    callback({ initWinW: s, winW: c }) {
      o && o.forEach((u) => {
        Sr({
          initWinW: s,
          winW: c,
          threshold: u
        });
      }), r(c);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Pr();
  }, []);
}, Yr = () => {
  const [o, t] = I(null), i = () => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  };
  return pe({
    callback() {
      i();
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    i();
  }, []), o;
}, ce = "scroll", zr = ({
  threshold: o = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(null), [s, c] = At(
    (g, b) => {
      switch (b.type) {
        case ce:
          return r.current = b.payload, b.payload;
        default:
          return g;
      }
    },
    r.current
  ), u = R(0), l = R(0), f = () => window.scrollY || document.documentElement.scrollTop, _ = () => {
    clearTimeout(l.current), l.current = setTimeout(() => {
      const g = f();
      g > u.current + o && r.current !== "down" ? c({ type: ce, payload: "down" }) : g < u.current - o && r.current !== "up" && c({ type: ce, payload: "up" }), u.current = g;
    }, t);
  };
  return S(() => (u.current = f(), window.addEventListener("scroll", _, { passive: !0 }), () => {
    window.removeEventListener("scroll", _), clearTimeout(l.current);
  }), i), s;
}, Br = ({ type: o, width: t }) => {
  const [i, r] = I(null), s = (c) => {
    switch (o) {
      case "max":
        r(t <= c);
        break;
      case "min":
        r(t >= c);
        break;
    }
  };
  return pe({
    callback: ({ winW: c }) => {
      s(c);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    s(window.innerWidth);
  }, []), i;
};
export {
  Mr as Accordion,
  $r as AsideLayout,
  Lr as BackgroundImage,
  Dr as Dropdown,
  Fr as FormField,
  Ar as Magnet,
  Nr as Modal,
  Wr as Tab,
  Ir as WrapperLayout,
  er as useAnimationFrame,
  qr as useIntersectionObserver,
  Yr as useIsTouchDevice,
  kr as useIsomorphicLayoutEffect,
  Br as useMediaQuery,
  jr as useResizeObserver,
  zr as useScrollDirection,
  Vr as useStarter,
  pe as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
