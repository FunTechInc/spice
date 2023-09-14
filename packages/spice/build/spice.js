import Ue, { createContext as I, useState as $, useContext as k, useEffect as T, useRef as j, useLayoutEffect as qt, useCallback as At, useReducer as Lt } from "react";
var ue = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function It() {
  if (ke)
    return W;
  ke = 1;
  var o = Ue, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, v) {
    var _, b = {}, x = null, q = null;
    v !== void 0 && (x = "" + v), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (q = f.ref);
    for (_ in f)
      r.call(f, _) && !c.hasOwnProperty(_) && (b[_] = f[_]);
    if (u && u.defaultProps)
      for (_ in f = u.defaultProps, f)
        b[_] === void 0 && (b[_] = f[_]);
    return { $$typeof: t, type: u, key: x, ref: q, props: b, _owner: s.current };
  }
  return W.Fragment = i, W.jsx = l, W.jsxs = l, W;
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
function kt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ue, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), z = Symbol.iterator, U = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = z && e[z] || e[U];
      return typeof n == "function" ? n : null;
    }
    var F = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          a[p - 1] = arguments[p];
        tt("error", e, a);
      }
    }
    function tt(e, n, a) {
      {
        var p = F.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (n += "%s", a = a.concat([w]));
        var y = a.map(function(m) {
          return String(m);
        });
        y.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, _e;
    _e = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === c || st || e === s || e === v || e === _ || it || e === q || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
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
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case v:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return ve(n) + ".Consumer";
          case l:
            var a = e;
            return ve(a._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case b:
            var p = e.displayName || null;
            return p !== null ? p : P(e.type) || "Memo";
          case x: {
            var w = e, y = w._payload, m = w._init;
            try {
              return P(m(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, N = 0, he, me, ge, we, be, ye, xe;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function ut() {
      {
        if (N === 0) {
          he = console.log, me = console.info, ge = console.warn, we = console.error, be = console.group, ye = console.groupCollapsed, xe = console.groupEnd;
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
        N++;
      }
    }
    function lt() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: he
            }),
            info: D({}, e, {
              value: me
            }),
            warn: D({}, e, {
              value: ge
            }),
            error: D({}, e, {
              value: we
            }),
            group: D({}, e, {
              value: be
            }),
            groupCollapsed: D({}, e, {
              value: ye
            }),
            groupEnd: D({}, e, {
              value: xe
            })
          });
        }
        N < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = F.ReactCurrentDispatcher, Z;
    function B(e, n, a) {
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
    function Re(e, n) {
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
            } catch (O) {
              p = O;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (O) {
              p = O;
            }
            e.call(m.prototype);
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
          for (var h = O.stack.split(`
`), S = p.stack.split(`
`), E = h.length - 1, R = S.length - 1; E >= 1 && R >= 0 && h[E] !== S[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (h[E] !== S[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || h[E] !== S[R]) {
                    var C = `
` + h[E].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = y, lt(), Error.prepareStackTrace = w;
      }
      var L = e ? e.displayName || e.name : "", Ie = L ? B(L) : "";
      return typeof e == "function" && H.set(e, Ie), Ie;
    }
    function ft(e, n, a) {
      return Re(e, !1);
    }
    function pt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, pt(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case v:
          return B("Suspense");
        case _:
          return B("SuspenseList");
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
    var J = Object.prototype.hasOwnProperty, je = {}, Te = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, a = G(e.type, e._source, n ? n.type : null);
        Te.setExtraStackFrame(a);
      } else
        Te.setExtraStackFrame(null);
    }
    function _t(e, n, a, p, w) {
      {
        var y = Function.call.bind(J);
        for (var m in e)
          if (y(e, m)) {
            var h = void 0;
            try {
              if (typeof e[m] != "function") {
                var S = Error((p || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              h = e[m](n, m, p, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (K(w), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", a, m, typeof h), K(null)), h instanceof Error && !(h.message in je) && (je[h.message] = !0, K(w), g("Failed %s type: %s", a, h.message), K(null));
          }
      }
    }
    var vt = Array.isArray;
    function te(e) {
      return vt(e);
    }
    function ht(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function mt(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ce(e) {
      if (mt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), Se(e);
    }
    var M = F.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, re;
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
      if (typeof e.ref == "string" && M.current && n && M.current.stateNode !== n) {
        var a = P(M.current.type);
        re[a] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(M.current.type), e.ref), re[a] = !0);
      }
    }
    function xt(e, n) {
      {
        var a = function() {
          Pe || (Pe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
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
          Oe || (Oe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Rt = function(e, n, a, p, w, y, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: a,
        props: m,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function jt(e, n, a, p, w) {
      {
        var y, m = {}, h = null, S = null;
        a !== void 0 && (Ce(a), h = "" + a), bt(n) && (Ce(n.key), h = "" + n.key), wt(n) && (S = n.ref, yt(n, w));
        for (y in n)
          J.call(n, y) && !gt.hasOwnProperty(y) && (m[y] = n[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            m[y] === void 0 && (m[y] = E[y]);
        }
        if (h || S) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && xt(m, R), S && Et(m, R);
        }
        return Rt(e, h, S, w, p, M.current, m);
      }
    }
    var ne = F.ReactCurrentOwner, $e = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var n = e._owner, a = G(e.type, e._source, n ? n.type : null);
        $e.setExtraStackFrame(a);
      } else
        $e.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (ne.current) {
          var e = P(ne.current.type);
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
          var n = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + n + ":" + a + ".";
        }
        return "";
      }
    }
    var De = {};
    function St(e) {
      {
        var n = Fe();
        if (!n) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (n = `

Check the top-level render call using <` + a + ">.");
        }
        return n;
      }
    }
    function qe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = St(n);
        if (De[a])
          return;
        De[a] = !0;
        var p = "";
        e && e._owner && e._owner !== ne.current && (p = " It was passed a child from " + P(e._owner.type) + "."), A(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, p), A(null);
      }
    }
    function Ae(e, n) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var a = 0; a < e.length; a++) {
            var p = e[a];
            ie(p) && qe(p, n);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = X(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), m; !(m = y.next()).done; )
              ie(m.value) && qe(m.value, n);
        }
      }
    }
    function Ct(e) {
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
          var p = P(n);
          _t(a, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !oe) {
          oe = !0;
          var w = P(n);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var n = Object.keys(e.props), a = 0; a < n.length; a++) {
          var p = n[a];
          if (p !== "children" && p !== "key") {
            A(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Le(e, n, a, p, w, y) {
      {
        var m = at(e);
        if (!m) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Tt(w);
          S ? h += S : h += Fe();
          var E;
          e === null ? E = "null" : te(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (P(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
        }
        var R = jt(e, n, a, w, y);
        if (R == null)
          return R;
        if (m) {
          var C = n.children;
          if (C !== void 0)
            if (p)
              if (te(C)) {
                for (var L = 0; L < C.length; L++)
                  Ae(C[L], e);
                Object.freeze && Object.freeze(C);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(C, e);
        }
        return e === r ? Pt(R) : Ct(R), R;
      }
    }
    function Ot(e, n, a) {
      return Le(e, n, a, !0);
    }
    function $t(e, n, a) {
      return Le(e, n, a, !1);
    }
    var Ft = $t, Dt = Ot;
    V.Fragment = r, V.jsx = Ft, V.jsxs = Dt;
  }()), V;
}
process.env.NODE_ENV === "production" ? ue.exports = It() : ue.exports = kt();
var d = ue.exports;
const Nt = "_spice_wrapper_1b9je_1", Mt = "_spice_wrapper_hidden_1b9je_10", Me = {
  spice_wrapper: Nt,
  spice_wrapper_hidden: Mt
}, Be = I(!0), He = I((o) => !o), Wt = ({ children: o }) => {
  const [t, i] = $(!0);
  return /* @__PURE__ */ d.jsx(Be.Provider, { value: t, children: /* @__PURE__ */ d.jsx(He.Provider, { value: i, children: o }) });
}, Vt = ({ children: o }) => {
  const t = k(Be);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${Me.spice_wrapper} ${t ? Me.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Fr = ({ children: o }) => /* @__PURE__ */ d.jsx(Wt, { children: /* @__PURE__ */ d.jsx(Vt, { children: o }) }), Yt = () => k(He), zt = "_spice_aside_aside_4cj7n_1", Ut = "_spice_aside_main_4cj7n_5", se = {
  spice_aside_aside: zt,
  spice_aside_main: Ut
}, Dr = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const s = Yt();
  return T(() => (r && s(() => !1), () => {
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
}, Bt = "_spice_form_input_yxowj_1", Ht = "_spice_form_select_yxowj_2", Gt = "_spice_form_radioCheckInput_yxowj_8", le = {
  spice_form_input: Bt,
  spice_form_select: Ht,
  spice_form_radioCheckInput: Gt
}, We = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...o,
    className: `${le.spice_form_input} ${t || ""}`
  }
), Jt = ({ formProps: o }) => {
  const { isSelect: t, ...i } = o;
  if (!t)
    return;
  const r = t.options.map((l) => /* @__PURE__ */ d.jsx("option", { value: l, children: l }, l)), s = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: l }) : null;
  }, c = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
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
  const c = (l) => !s || !s[l] ? null : s[l];
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
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: le.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { children: i }),
      /* @__PURE__ */ d.jsx("ul", { children: l }),
      c(0)
    ] });
  }
}, Kt = ({ formProps: o }) => {
  const { isTextarea: t, ...i } = o;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...i, ...t });
}, qr = ({
  className: o,
  label: t,
  formProps: i,
  errors: r
}) => {
  const s = i, c = s[0].type, l = s.length, u = !!s[0].isSelect, f = !!s[0].isTextarea;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = (b) => Ve({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: s,
    label: t,
    FormItem: b,
    errors: r
  }), _ = () => u ? v(Jt) : f ? v(Kt) : c === "radio" || c === "checkbox" ? Ve({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: We,
    errors: r
  }) : v(We);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ d.jsx(_, {}) });
}, de = (o) => new Promise((t) => {
  o instanceof Promise ? o.then(() => {
    t(null);
  }) : t(null);
}), Xt = "_spice_dropdown_wrapper_1nq94_1", Qt = "_spice_dropdown_content_1nq94_5", Zt = "_spice_dropdown_content_hidden_1nq94_10", er = "_spice_dropdown_content_pointerPrevent_1nq94_15", Y = {
  spice_dropdown_wrapper: Xt,
  spice_dropdown_content: Qt,
  spice_dropdown_content_hidden: Zt,
  spice_dropdown_content_pointerPrevent: er,
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
}, Ar = ({
  position: o,
  parent: t,
  content: i,
  callback: r,
  className: s
}) => {
  const c = j(null), l = j(!1), [u, f] = $(!1), [v, _] = $(!0), b = () => {
    l.current = !0, _(!1), f(!0), r != null && r.onEnter && r.onEnter(c.current);
  }, x = async () => {
    l.current = !1, _(!0), r != null && r.onLeave && await de(r.onLeave(c.current)), l.current || f(!1);
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
            className: `${Y.spice_dropdown_content} ${u ? "" : Y.spice_dropdown_content_hidden} ${v ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + o]}`,
            children: i.children
          }
        )
      ]
    }
  );
}, tr = (o, t = []) => {
  o > 60 && (o = 60);
  const i = Math.floor(1e3 / o);
  let r = performance.now();
  const s = (u) => {
    const f = u - r, v = f <= i;
    return v || (r = u - f % i), v;
  }, c = {
    callback: null,
    isPlay: !1,
    id: 0
  }, l = (u) => {
    c.id = requestAnimationFrame(l), !s(u) && c.callback && c.isPlay && c.callback();
  };
  return T(() => (c.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(c.id);
  }), t), (u, f) => {
    if (u === "play") {
      if (!f) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      c.callback = f, c.isPlay = !0;
    } else
      u === "pause" && (c.isPlay = !1);
  };
}, rr = "_spice_magnet_stopPropagation_99wvn_1", nr = {
  spice_magnet_stopPropagation: rr
}, Lr = ({
  className: o,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: c = !1
}) => {
  const l = j(null), u = j(null), f = j(), v = tr(r), _ = {
    target: l.current,
    children: u.current,
    x: 0,
    y: 0
  }, b = (g) => {
    _.target = l.current, _.children = u.current;
  }, x = (g) => {
    f.current = g.currentTarget.getBoundingClientRect(), _.x = g.clientX - f.current.left - f.current.width / 2, _.y = g.clientY - f.current.top - f.current.height / 2;
  }, q = (g) => {
    g.stopPropagation(), b(), x(g), v("play", () => {
      i.onMove(_);
    });
  }, z = (g) => {
    g.stopPropagation(), x(g);
  }, U = (g) => {
    g.stopPropagation(), v("pause"), i.onLeave && i.onLeave(_);
  }, X = (g) => {
    U(g);
  }, F = (g) => {
    c && U(g);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: q,
      onMouseMove: z,
      onMouseLeave: X,
      onClick: F,
      className: o || "",
      ref: l,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: u,
          className: s ? nr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, or = "_spice_thumbnail_wrapper_1qqot_1", ir = "_spice_thumbnail_view_1qqot_5", sr = "_spice_thumbnail_golden_1qqot_26", ar = "_spice_thumbnail_silver_1qqot_30", cr = "_spice_thumbnail_platinum_1qqot_34", ur = "_spice_thumbnail_square_1qqot_42", ae = {
  spice_thumbnail_wrapper: or,
  spice_thumbnail_view: ir,
  spice_thumbnail_golden: sr,
  spice_thumbnail_silver: ar,
  spice_thumbnail_platinum: cr,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: ur,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, Ir = ({ ratio: o, children: t, className: i }) => {
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
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ae.spice_thumbnail_wrapper} ${i || ""}`,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `${ae.spice_thumbnail_view} ${s ? ae["spice_thumbnail_" + o] : ""}`,
          style: c ? { paddingTop: `${o}%` } : {},
          children: t
        }
      )
    }
  );
}, Ye = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, lr = "_spice_modal_dialog_1t31c_1", dr = {
  spice_modal_dialog: lr
}, kr = ({ children: o, className: t, dialog: i, callback: r }) => {
  const s = j(null), c = () => {
    Ye("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, l = async () => {
    r != null && r.onClose && await de(r.onClose(s.current)), Ye("remove"), s.current.close();
  };
  return T(() => {
    const u = s.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((f) => {
      f.addEventListener("click", () => {
        l();
      });
    });
  }, []), T(() => {
    const u = (f) => {
      var _;
      ((_ = s.current) == null ? void 0 : _.hasAttribute("open")) && f.key === "Escape" && l();
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
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
        onClick: (u) => {
          u.target === s.current && l();
        },
        className: `${dr.spice_modal_dialog} ${i.className ? i.className : ""}`,
        children: i.children
      }
    )
  ] });
}, fr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Ge = I(fr), Je = I(
  () => {
  }
), pr = ({ children: o, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [i, r] = $({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Ge.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Je.Provider, { value: r, children: o }) });
}, Ke = () => k(Ge), fe = () => k(Je), _r = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = fe(), s = Ke(), c = () => {
    s.current === t || s.isLeaving || r((l) => ({
      ...l,
      isLeaving: !0,
      isAnimation: !0,
      prev: l.current,
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
}, vr = "_spice_tab_hidden_1r0oa_1", hr = {
  spice_tab_hidden: vr
}, Xe = ({ content: o, isOpen: t }) => {
  const i = o.querySelectorAll("a,button");
  if (!i)
    return;
  const r = t ? "0" : "-1";
  i.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, mr = ({ children: o, value: t, className: i, callback: r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = j(!0), c = j(null), l = fe(), u = Ke(), f = u.current === t && !u.isLeaving;
  return T(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.onReset && r.onReset(c.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await de(r.onClose(c.current)), l((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), f && r != null && r.onOpen && r.onOpen(c.current);
  }, [u, l, r, t, f]), T(() => {
    Xe({
      content: c.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${u.current !== t ? hr.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: o
    }
  );
}, gr = () => {
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
}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: _r,
  Content: mr,
  Context: pr,
  useTabSwitch: gr
}, Symbol.toStringTag, { value: "Module" })), wr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Qe = I(wr), Ze = I(() => {
}), br = ({ children: o, defaultValue: t }) => {
  const [i, r] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Qe.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Ze.Provider, { value: r, children: o }) });
}, et = () => k(Qe), yr = () => k(Ze), xr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = et(), s = yr(), c = !!r.defaultValue.find(
    (f) => f === t
  ), [l, u] = $(c);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        s((f) => ({
          ...f,
          toggle: l,
          target: t
        })), u(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: o
    }
  );
}, Er = "_spice_accordion_content_1wkzs_1", Rr = "_spice_accordion_hidden_1wkzs_5", ze = {
  spice_accordion_content: Er,
  spice_accordion_hidden: Rr
}, jr = ({
  targetRef: o,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const s = j(0), c = j(!0);
  T(() => {
    const l = new ResizeObserver((f) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (c.current) {
          c.current = !1;
          return;
        }
        t(f[0].target);
      }, i);
    }), u = o.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(s.current);
      };
  }, r);
}, Tr = ({ value: o, callback: t, children: i, className: r }) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = j(!0), c = j(null), l = j(null), u = et(), f = !!u.defaultValue.find(
    (b) => b === o
  ), [v, _] = $(f);
  return T(() => {
    u.target === o && _(!v);
  }, [u.target, u.toggle]), T(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    const b = {
      height: l.current.getBoundingClientRect().height,
      target: c.current
    };
    v ? t.onOpen(b) : t.onClose(b);
  }, [v]), T(() => {
    Xe({ content: c.current, isOpen: v });
  }, [v]), jr({
    targetRef: l,
    callback: (b) => {
      const x = b.getBoundingClientRect().height;
      v && (c.current.style.height = `${x}px`);
    },
    dependencies: [v],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: c,
      className: `${ze.spice_accordion_content} ${f ? "" : ze.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: r || "", children: i })
    }
  );
}, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: xr,
  Content: Tr,
  Context: br
}, Symbol.toStringTag, { value: "Module" })), Wr = typeof document < "u" ? qt : T, Vr = ({
  targetRef: o,
  rootMargin: t = "0px",
  threshold: i = 0,
  once: r,
  callback: s,
  dependencies: c = []
}) => {
  const l = {
    rootMargin: t,
    threshold: i
  };
  T(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const f = (_, b) => {
      _.forEach((x) => {
        x.isIntersecting && s.onEnter ? (s.onEnter(x.target), r && b.unobserve(x.target)) : !x.isIntersecting && s.onLeave && s.onLeave(x.target);
      });
    }, v = new IntersectionObserver(f, l);
    return v.observe(u), () => {
      v.unobserve(u);
    };
  }, c);
}, pe = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = j(0), s = j(0), c = () => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  T(() => (r.current = window.innerWidth, window.addEventListener("resize", c), () => {
    window.removeEventListener("resize", c), clearTimeout(s.current);
  }), i);
}, Sr = ({ initWinW: o, winW: t, threshold: i }) => {
  let r = !(o <= i);
  t <= i ? r && window.location.reload() : !r && window.location.reload();
}, Cr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, Pr = () => {
  console.log(Cr);
}, Or = (o) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const i = o > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== i && t.setAttribute("content", i);
}, Yr = ({
  reloadThresholds: o,
  isFixViewportForSmall: t = !0,
  areYouFun: i = !1
}) => {
  const r = At(
    (s) => {
      t && Or(s);
    },
    [t]
  );
  pe({
    callback({ initWinW: s, winW: c }) {
      o && o.forEach((l) => {
        Sr({
          initWinW: s,
          winW: c,
          threshold: l
        });
      }), r(c);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Pr();
  }, [i, r]);
}, zr = () => {
  const [o, t] = $(null), i = () => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  };
  return pe({
    callback() {
      i();
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    i();
  }, []), o;
}, ce = "scroll", Ur = ({
  threshold: o = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = j(null), [s, c] = Lt(
    (_, b) => {
      switch (b.type) {
        case ce:
          return r.current = b.payload, b.payload;
        default:
          return _;
      }
    },
    r.current
  ), l = j(0), u = j(0), f = () => window.scrollY || document.documentElement.scrollTop, v = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const _ = f();
      _ > l.current + o && r.current !== "down" ? c({ type: ce, payload: "down" }) : _ < l.current - o && r.current !== "up" && c({ type: ce, payload: "up" }), l.current = _;
    }, t);
  };
  return T(() => (l.current = f(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(u.current);
  }), i), s;
}, Br = ({ type: o, width: t }) => {
  const [i, r] = $(null), s = (c) => {
    switch (o) {
      case "max":
        r(t >= c);
        break;
      case "min":
        r(t <= c);
        break;
    }
  };
  return pe({
    callback: ({ winW: c }) => {
      s(c);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    s(window.innerWidth);
  }, []), i;
};
export {
  Mr as Accordion,
  Dr as AsideLayout,
  Ar as Dropdown,
  qr as FormField,
  Lr as Magnet,
  kr as Modal,
  Nr as Tab,
  Ir as Thumbnail,
  Fr as WrapperLayout,
  tr as useAnimationFrame,
  Vr as useIntersectionObserver,
  zr as useIsTouchDevice,
  Wr as useIsomorphicLayoutEffect,
  Br as useMediaQuery,
  jr as useResizeObserver,
  Ur as useScrollDirection,
  Yr as useStarter,
  pe as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
