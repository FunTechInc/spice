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
  var o = Be, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(u, f, _) {
    var g, b = {}, x = null, D = null;
    _ !== void 0 && (x = "" + _), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (g in f)
      r.call(f, g) && !s.hasOwnProperty(g) && (b[g] = f[g]);
    if (u && u.defaultProps)
      for (g in f = u.defaultProps, f)
        b[g] === void 0 && (b[g] = f[g]);
    return { $$typeof: t, type: u, key: x, ref: D, props: b, _owner: a.current };
  }
  return q.Fragment = i, q.jsx = d, q.jsxs = d, q;
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
    var o = Be, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = Symbol.iterator, B = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = z && e[z] || e[B];
      return typeof n == "function" ? n : null;
    }
    var $ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          c[p - 1] = arguments[p];
        tt("error", e, c);
      }
    }
    function tt(e, n, c) {
      {
        var p = $.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (n += "%s", c = c.concat([w]));
        var y = c.map(function(h) {
          return String(h);
        });
        y.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, _e;
    _e = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === s || st || e === a || e === _ || e === g || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === d || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function ct(e, n, c) {
      var p = e.displayName;
      if (p)
        return p;
      var w = n.displayName || n.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
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
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return ve(n) + ".Consumer";
          case d:
            var c = e;
            return ve(c._context) + ".Provider";
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
    function U(e, n, c) {
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
        var c = H.get(e);
        if (c !== void 0)
          return c;
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
    function ft(e, n, c) {
      return je(e, !1);
    }
    function pt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, c) {
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
            return G(e.type, n, c);
          case x: {
            var p = e, w = p._payload, y = p._init;
            try {
              return G(y(w), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, Se = $.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        Se.setExtraStackFrame(c);
      } else
        Se.setExtraStackFrame(null);
    }
    function _t(e, n, c, p, w) {
      {
        var y = Function.call.bind(J);
        for (var h in e)
          if (y(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var T = Error((p || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = e[h](n, h, p, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (K(w), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", c, h, typeof v), K(null)), v instanceof Error && !(v.message in Re) && (Re[v.message] = !0, K(w), m("Failed %s type: %s", c, v.message), K(null));
          }
      }
    }
    var vt = Array.isArray;
    function te(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
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
        var c = C(k.current.type);
        re[c] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(k.current.type), e.ref), re[c] = !0);
      }
    }
    function xt(e, n) {
      {
        var c = function() {
          Ce || (Ce = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Et(e, n) {
      {
        var c = function() {
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var jt = function(e, n, c, p, w, y, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
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
    function Rt(e, n, c, p, w) {
      {
        var y, h = {}, v = null, T = null;
        c !== void 0 && (Pe(c), v = "" + c), bt(n) && (Pe(n.key), v = "" + n.key), wt(n) && (T = n.ref, yt(n, w));
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
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(c);
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
          var n = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + n + ":" + c + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function Tt(e) {
      {
        var n = $e();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function De(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Tt(n);
        if (Fe[c])
          return;
        Fe[c] = !0;
        var p = "";
        e && e._owner && e._owner !== ne.current && (p = " It was passed a child from " + C(e._owner.type) + "."), A(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, p), A(null);
      }
    }
    function Ae(e, n) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
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
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === b))
          c = n.propTypes;
        else
          return;
        if (c) {
          var p = C(n);
          _t(c, e.props, "prop", p, e);
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
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var p = n[c];
          if (p !== "children" && p !== "key") {
            A(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Le(e, n, c, p, w, y) {
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
        var j = Rt(e, n, c, w, y);
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
    function Ot(e, n, c) {
      return Le(e, n, c, !0);
    }
    function It(e, n, c) {
      return Le(e, n, c, !1);
    }
    var $t = It, Ft = Ot;
    V.Fragment = r, V.jsx = $t, V.jsxs = Ft;
  }()), V;
}
process.env.NODE_ENV === "production" ? ue.exports = Lt() : ue.exports = Nt();
var l = ue.exports;
const Wt = "_spice_wrapper_1b9je_1", Mt = "_spice_wrapper_hidden_1b9je_10", ke = {
  spice_wrapper: Wt,
  spice_wrapper_hidden: Mt
}, Ue = N(!0), He = N((o) => !o), kt = ({ children: o }) => {
  const [t, i] = I(!0);
  return /* @__PURE__ */ l.jsx(Ue.Provider, { value: t, children: /* @__PURE__ */ l.jsx(He.Provider, { value: i, children: o }) });
}, qt = ({ children: o }) => {
  const t = W(Ue);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `${ke.spice_wrapper} ${t ? ke.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Ir = ({ children: o }) => /* @__PURE__ */ l.jsx(kt, { children: /* @__PURE__ */ l.jsx(qt, { children: o }) }), Vt = () => W(He), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", se = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, $r = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const a = Vt();
  return S(() => (r && a(() => !1), () => {
    a(() => !0);
  }), []), /* @__PURE__ */ l.jsxs("div", { className: o || "", children: [
    i.index === 1 && /* @__PURE__ */ l.jsx("div", { className: se.spice_aside_main, children: t }),
    /* @__PURE__ */ l.jsx(
      "aside",
      {
        className: `${se.spice_aside_aside} ${i.className ? i.className : ""}`,
        children: i.chidren
      }
    ),
    i.index === 0 && /* @__PURE__ */ l.jsx("div", { className: se.spice_aside_main, children: t })
  ] });
}, Bt = "_spice_form_input_yxowj_1", Ut = "_spice_form_select_yxowj_2", Ht = "_spice_form_radioCheckInput_yxowj_8", le = {
  spice_form_input: Bt,
  spice_form_select: Ut,
  spice_form_radioCheckInput: Ht
}, qe = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ l.jsx(
  "input",
  {
    ...o,
    className: `${le.spice_form_input} ${t || ""}`
  }
), Gt = ({ formProps: o }) => {
  const t = o.isSelect;
  if (!t)
    return;
  const i = t.options.map((s) => /* @__PURE__ */ l.jsx("option", { value: s, children: s }, s)), r = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ l.jsx("option", { hidden: !0, children: s }) : null;
  }, a = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ l.jsxs(
    "select",
    {
      name: o.name,
      id: o.id,
      className: le.spice_form_select,
      defaultValue: a(),
      children: [
        /* @__PURE__ */ l.jsx(r, {}),
        i
      ]
    }
  );
}, Ve = ({
  layoutType: o,
  formPropsArr: t,
  label: i,
  FormItem: r,
  errors: a
}) => {
  const s = (d) => !a || !a[d] ? null : a[d];
  if (o === "block")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ l.jsx(r, { formProps: t[0] }),
      s(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && /* @__PURE__ */ l.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ l.jsxs("ul", { children: [
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(r, { formProps: t[0] }),
          s(0)
        ] }),
        /* @__PURE__ */ l.jsxs("li", { children: [
          /* @__PURE__ */ l.jsx(r, { formProps: t[1] }),
          s(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const d = t.map((u) => /* @__PURE__ */ l.jsxs("li", { children: [
      /* @__PURE__ */ l.jsx(
        r,
        {
          formProps: u,
          className: le.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ l.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i && /* @__PURE__ */ l.jsx("label", { children: i }),
      /* @__PURE__ */ l.jsx("ul", { children: d }),
      s(0)
    ] });
  }
}, Jt = ({ formProps: o }) => {
  const t = o.isTextarea;
  if (t)
    return /* @__PURE__ */ l.jsx(
      "textarea",
      {
        name: o.name,
        id: o.id,
        cols: t.cols,
        rows: t.rows,
        placeholder: o.placeholder,
        defaultValue: t.defaultValue
      }
    );
}, Fr = ({
  className: o,
  label: t,
  formProps: i,
  errors: r
}) => {
  const a = i, s = a[0].type, d = a.length, u = !!a[0].isSelect, f = !!a[0].isTextarea;
  if (!(s === "radio" || s === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const _ = (b) => Ve({
    layoutType: d === 1 ? "block" : "flex",
    formPropsArr: a,
    label: t,
    FormItem: b,
    errors: r
  }), g = () => u ? _(Gt) : f ? _(Jt) : s === "radio" || s === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: a,
    label: t,
    FormItem: qe,
    errors: r
  }) : _(qe);
  return /* @__PURE__ */ l.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ l.jsx(g, {}) });
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
  className: a
}) => {
  const s = R(null), d = R(!1), [u, f] = I(!1), [_, g] = I(!0), b = () => {
    d.current = !0, g(!1), f(!0), r != null && r.enter && r.enter(s.current);
  }, x = async () => {
    d.current = !1, g(!0), r != null && r.leave && await de(r.leave(s.current)), d.current || f(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      onClick: x,
      className: `${Y.spice_dropdown_wrapper} ${a || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: s,
            className: `${Y.spice_dropdown_content} ${u ? "" : Y.spice_dropdown_content_hidden} ${_ ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + o]}`,
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
  const a = (u) => {
    const f = u - r, _ = f <= i;
    return _ || (r = u - f % i), _;
  }, s = {
    callback: null,
    isPlay: !1,
    id: 0
  }, d = (u) => {
    s.id = requestAnimationFrame(d), !a(u) && s.callback && s.isPlay && s.callback();
  };
  return S(() => (s.id = requestAnimationFrame(d), () => {
    cancelAnimationFrame(s.id);
  }), t), (u, f) => {
    if (u === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      s.callback = f, s.isPlay = !0;
    } else
      u === "pause" && (s.isPlay = !1);
  };
}, tr = "_spice_magnet_stopPropagation_99wvn_1", rr = {
  spice_magnet_stopPropagation: tr
}, Ar = ({
  className: o,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: a = !1,
  isOnClickReset: s = !1
}) => {
  const d = R(null), u = R(null), f = R(), _ = er(r), g = {
    target: d.current,
    children: u.current,
    x: 0,
    y: 0
  }, b = (m) => {
    g.target = d.current, g.children = u.current;
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
    s && B(m);
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      onMouseEnter: D,
      onMouseMove: z,
      onMouseLeave: X,
      onClick: $,
      className: o || "",
      ref: d,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: u,
          className: a ? rr.spice_magnet_stopPropagation : "",
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
  let a = r.includes(o), s = typeof o == "number" && o > 0;
  if (!a && !s)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ l.jsx("div", { className: `${ae.spice_bgImg_wrapper} ${i || ""}`, children: /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `${ae.spice_bgImg_view} ${a ? ae["spice_bgImg_" + o] : ""}`,
      style: s ? { paddingTop: `${o}%` } : {},
      children: t
    }
  ) });
}, Ye = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, Nr = ({ children: o, className: t, dialog: i, callback: r }) => {
  const a = R(null), s = () => {
    Ye("add"), a.current.showModal(), r != null && r.open && r.open(a.current);
  }, d = async () => {
    r != null && r.close && await de(r.close(a.current)), Ye("remove"), a.current.close();
  };
  return S(() => {
    const u = a.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((f) => {
      f.addEventListener("click", () => {
        d();
      });
    });
  }, []), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          s();
        },
        children: o
      }
    ),
    /* @__PURE__ */ l.jsx(
      "dialog",
      {
        ref: a,
        onClick: (u) => {
          u.target === a.current && d();
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
  return /* @__PURE__ */ l.jsx(Ge.Provider, { value: i, children: /* @__PURE__ */ l.jsx(Je.Provider, { value: r, children: o }) });
}, Ke = () => W(Ge), fe = () => W(Je), pr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = fe(), a = Ke(), s = () => {
    a.current === t || a.isLeaving || r((d) => ({
      ...d,
      isLeaving: !0,
      isAnimation: !0,
      prev: d.current,
      next: t
    }));
  };
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: s,
      className: i || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": a.current === t,
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
  i.forEach((a) => {
    a.setAttribute("tabindex", r);
  });
}, gr = ({ children: o, value: t, className: i, callback: r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const a = R(!0), s = R(null), d = fe(), u = Ke(), f = u.current === t && !u.isLeaving;
  return S(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.reset && r.reset(s.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.close && await de(r.close(s.current)), d((_) => ({
      ..._,
      isLeaving: !1,
      prev: "",
      current: _.next,
      next: ""
    }))))(), f && r != null && r.open && r.open(s.current);
  }, [u, d, r, t, f]), S(() => {
    Xe({
      content: s.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: s,
      className: `${u.current !== t ? vr.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
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
  return /* @__PURE__ */ l.jsx(Qe.Provider, { value: i, children: /* @__PURE__ */ l.jsx(Ze.Provider, { value: r, children: o }) });
}, et = () => W(Qe), br = () => W(Ze), yr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = et(), a = br(), s = !!r.defaultValue.find(
    (f) => f === t
  ), [d, u] = I(s);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        a((f) => ({
          ...f,
          toggle: d,
          target: t
        })), u(!d);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": d,
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
  const a = R(0), s = R(!0);
  S(() => {
    const d = new ResizeObserver((f) => {
      clearTimeout(a.current), a.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t(f[0].target);
      }, i);
    }), u = o.current;
    if (u)
      return d.observe(u), () => {
        d.unobserve(u), clearTimeout(a.current);
      };
  }, r);
}, Rr = ({ value: o, callback: t, children: i, className: r }) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const a = R(!0), s = R(null), d = R(null), u = et(), f = !!u.defaultValue.find(
    (b) => b === o
  ), [_, g] = I(f);
  return S(() => {
    u.target === o && g(!_);
  }, [u.target, u.toggle]), S(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    const b = {
      height: d.current.getBoundingClientRect().height,
      target: s.current
    };
    _ ? t.open(b) : t.close(b);
  }, [_]), S(() => {
    Xe({ content: s.current, isOpen: _ });
  }, [_]), jr({
    targetRef: d,
    callback: (b) => {
      const x = b.getBoundingClientRect().height;
      _ && (s.current.style.height = `${x}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: s,
      className: `${ze.spice_accordion_content} ${f ? "" : ze.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !_,
      children: /* @__PURE__ */ l.jsx("div", { ref: d, className: r || "", children: i })
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
  callback: a,
  dependencies: s = []
}) => {
  const d = {
    rootMargin: t,
    threshold: i
  };
  S(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const f = (g, b) => {
      g.forEach((x) => {
        x.isIntersecting && a.enter ? (a.enter(x.target), r && b.unobserve(x.target)) : !x.isIntersecting && a.leave && a.leave(x.target);
      });
    }, _ = new IntersectionObserver(f, d);
    return _.observe(u), () => {
      _.unobserve(u);
    };
  }, s);
}, pe = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(0), a = R(0), s = () => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  S(() => (r.current = window.innerWidth, window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s), clearTimeout(a.current);
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
  const r = (a) => {
    t && Cr(a);
  };
  pe({
    callback({ initWinW: a, winW: s }) {
      o && o.forEach((d) => {
        Sr({
          initWinW: a,
          winW: s,
          threshold: d
        });
      }), r(s);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Pr();
  }, []);
}, Yr = () => {
  const [o, t] = I(null), i = () => {
    const r = window.ontouchstart, a = navigator.maxTouchPoints;
    r !== void 0 && 0 < a ? t(!0) : t(!1);
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
  const r = R(null), [a, s] = At(
    (g, b) => {
      switch (b.type) {
        case ce:
          return r.current = b.payload, b.payload;
        default:
          return g;
      }
    },
    r.current
  ), d = R(0), u = R(0), f = () => window.scrollY || document.documentElement.scrollTop, _ = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const g = f();
      g > d.current + o && r.current !== "down" ? s({ type: ce, payload: "down" }) : g < d.current - o && r.current !== "up" && s({ type: ce, payload: "up" }), d.current = g;
    }, t);
  };
  return S(() => (d.current = f(), window.addEventListener("scroll", _, { passive: !0 }), () => {
    window.removeEventListener("scroll", _), clearTimeout(u.current);
  }), i), a;
}, Br = ({ type: o, width: t }) => {
  const [i, r] = I(null), a = (s) => {
    switch (o) {
      case "max":
        r(t <= s);
        break;
      case "min":
        r(t >= s);
        break;
    }
  };
  return pe({
    callback: ({ winW: s }) => {
      a(s);
    },
    debounce: 100,
    dependencies: []
  }), S(() => {
    a(window.innerWidth);
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
