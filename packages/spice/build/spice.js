import Ue, { createContext as L, useState as I, useContext as N, useEffect as T, useRef as R, useLayoutEffect as Dt, useCallback as At, useReducer as Lt } from "react";
var le = { exports: {} }, W = {};
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
function Nt() {
  if (ke)
    return W;
  ke = 1;
  var n = Ue, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, _, v) {
    var p, b = {}, x = null, F = null;
    v !== void 0 && (x = "" + v), _.key !== void 0 && (x = "" + _.key), _.ref !== void 0 && (F = _.ref);
    for (p in _)
      r.call(_, p) && !a.hasOwnProperty(p) && (b[p] = _[p]);
    if (u && u.defaultProps)
      for (p in _ = u.defaultProps, _)
        b[p] === void 0 && (b[p] = _[p]);
    return { $$typeof: t, type: u, key: x, ref: F, props: b, _owner: s.current };
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
var Me;
function kt() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ue, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, B = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = z && e[z] || e[B];
      return typeof o == "function" ? o : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
          c[f - 1] = arguments[f];
        rt("error", e, c);
      }
    }
    function rt(e, o, c) {
      {
        var f = $.ReactDebugCurrentFrame, w = f.getStackAddendum();
        w !== "" && (o += "%s", c = c.concat([w]));
        var y = c.map(function(h) {
          return String(h);
        });
        y.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var nt = !1, ot = !1, it = !1, st = !1, at = !1, ve;
    ve = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || at || e === s || e === v || e === p || st || e === F || nt || ot || it || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === l || e.$$typeof === u || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function ut(e, o, c) {
      var f = e.displayName;
      if (f)
        return f;
      var w = o.displayName || o.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function me(e) {
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
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var o = e;
            return me(o) + ".Consumer";
          case l:
            var c = e;
            return me(c._context) + ".Provider";
          case _:
            return ut(e, e.render, "ForwardRef");
          case b:
            var f = e.displayName || null;
            return f !== null ? f : P(e.type) || "Memo";
          case x: {
            var w = e, y = w._payload, h = w._init;
            try {
              return P(h(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, k = 0, he, ge, we, be, ye, xe, Ee;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function lt() {
      {
        if (k === 0) {
          he = console.log, ge = console.info, we = console.warn, be = console.error, ye = console.group, xe = console.groupCollapsed, Ee = console.groupEnd;
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
        k++;
      }
    }
    function dt() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, e, {
              value: he
            }),
            info: q({}, e, {
              value: ge
            }),
            warn: q({}, e, {
              value: we
            }),
            error: q({}, e, {
              value: be
            }),
            group: q({}, e, {
              value: ye
            }),
            groupCollapsed: q({}, e, {
              value: xe
            }),
            groupEnd: q({}, e, {
              value: Ee
            })
          });
        }
        k < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = $.ReactCurrentDispatcher, Z;
    function U(e, o, c) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (w) {
            var f = w.stack.trim().match(/\n( *(at )?)/);
            Z = f && f[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var ee = !1, H;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      H = new _t();
    }
    function Re(e, o) {
      if (!e || ee)
        return "";
      {
        var c = H.get(e);
        if (c !== void 0)
          return c;
      }
      var f;
      ee = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = Q.current, Q.current = null, lt();
      try {
        if (o) {
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
              f = O;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (O) {
              f = O;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            f = O;
          }
          e();
        }
      } catch (O) {
        if (O && f && typeof O.stack == "string") {
          for (var m = O.stack.split(`
`), S = f.stack.split(`
`), E = m.length - 1, j = S.length - 1; E >= 1 && j >= 0 && m[E] !== S[j]; )
            j--;
          for (; E >= 1 && j >= 0; E--, j--)
            if (m[E] !== S[j]) {
              if (E !== 1 || j !== 1)
                do
                  if (E--, j--, j < 0 || m[E] !== S[j]) {
                    var C = `
` + m[E].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (E >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = y, dt(), Error.prepareStackTrace = w;
      }
      var A = e ? e.displayName || e.name : "", Ne = A ? U(A) : "";
      return typeof e == "function" && H.set(e, Ne), Ne;
    }
    function ft(e, o, c) {
      return Re(e, !1);
    }
    function pt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function G(e, o, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, pt(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case v:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ft(e.render);
          case b:
            return G(e.type, o, c);
          case x: {
            var f = e, w = f._payload, y = f._init;
            try {
              return G(y(w), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Te = {}, Se = $.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var o = e._owner, c = G(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(c);
      } else
        Se.setExtraStackFrame(null);
    }
    function vt(e, o, c, f, w) {
      {
        var y = Function.call.bind(J);
        for (var h in e)
          if (y(e, h)) {
            var m = void 0;
            try {
              if (typeof e[h] != "function") {
                var S = Error((f || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              m = e[h](o, h, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
            }
            m && !(m instanceof Error) && (K(w), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, h, typeof m), K(null)), m instanceof Error && !(m.message in Te) && (Te[m.message] = !0, K(w), g("Failed %s type: %s", c, m.message), K(null));
          }
      }
    }
    var mt = Array.isArray;
    function te(e) {
      return mt(e);
    }
    function ht(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function gt(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Pe(e) {
      if (gt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), Ce(e);
    }
    var M = $.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ie, re;
    re = {};
    function bt(e) {
      if (J.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yt(e) {
      if (J.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, o) {
      if (typeof e.ref == "string" && M.current && o && M.current.stateNode !== o) {
        var c = P(M.current.type);
        re[c] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(M.current.type), e.ref), re[c] = !0);
      }
    }
    function Et(e, o) {
      {
        var c = function() {
          Oe || (Oe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function jt(e, o) {
      {
        var c = function() {
          Ie || (Ie = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rt = function(e, o, c, f, w, y, h) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: c,
        props: h,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Tt(e, o, c, f, w) {
      {
        var y, h = {}, m = null, S = null;
        c !== void 0 && (Pe(c), m = "" + c), yt(o) && (Pe(o.key), m = "" + o.key), bt(o) && (S = o.ref, xt(o, w));
        for (y in o)
          J.call(o, y) && !wt.hasOwnProperty(y) && (h[y] = o[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            h[y] === void 0 && (h[y] = E[y]);
        }
        if (m || S) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Et(h, j), S && jt(h, j);
        }
        return Rt(e, m, S, w, f, M.current, h);
      }
    }
    var ne = $.ReactCurrentOwner, $e = $.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var o = e._owner, c = G(e.type, e._source, o ? o.type : null);
        $e.setExtraStackFrame(c);
      } else
        $e.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function qe() {
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
    function St(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function Ct(e) {
      {
        var o = qe();
        if (!o) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function De(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Ct(o);
        if (Fe[c])
          return;
        Fe[c] = !0;
        var f = "";
        e && e._owner && e._owner !== ne.current && (f = " It was passed a child from " + P(e._owner.type) + "."), D(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), D(null);
      }
    }
    function Ae(e, o) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var c = 0; c < e.length; c++) {
            var f = e[c];
            ie(f) && De(f, o);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = X(e);
          if (typeof w == "function" && w !== e.entries)
            for (var y = w.call(e), h; !(h = y.next()).done; )
              ie(h.value) && De(h.value, o);
        }
      }
    }
    function Pt(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === b))
          c = o.propTypes;
        else
          return;
        if (c) {
          var f = P(o);
          vt(c, e.props, "prop", f, e);
        } else if (o.PropTypes !== void 0 && !oe) {
          oe = !0;
          var w = P(o);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var f = o[c];
          if (f !== "children" && f !== "key") {
            D(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Le(e, o, c, f, w, y) {
      {
        var h = ct(e);
        if (!h) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = St(w);
          S ? m += S : m += qe();
          var E;
          e === null ? E = "null" : te(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (P(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var j = Tt(e, o, c, w, y);
        if (j == null)
          return j;
        if (h) {
          var C = o.children;
          if (C !== void 0)
            if (f)
              if (te(C)) {
                for (var A = 0; A < C.length; A++)
                  Ae(C[A], e);
                Object.freeze && Object.freeze(C);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(C, e);
        }
        return e === r ? Ot(j) : Pt(j), j;
      }
    }
    function It(e, o, c) {
      return Le(e, o, c, !0);
    }
    function $t(e, o, c) {
      return Le(e, o, c, !1);
    }
    var qt = $t, Ft = It;
    V.Fragment = r, V.jsx = qt, V.jsxs = Ft;
  }()), V;
}
process.env.NODE_ENV === "production" ? le.exports = Nt() : le.exports = kt();
var d = le.exports;
const Mt = "_spice_wrapper_1b9je_1", Wt = "_spice_wrapper_hidden_1b9je_10", We = {
  spice_wrapper: Mt,
  spice_wrapper_hidden: Wt
}, He = L(!0), Ge = L((n) => !n), Vt = ({ children: n }) => {
  const [t, i] = I(!0);
  return /* @__PURE__ */ d.jsx(He.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Ge.Provider, { value: i, children: n }) });
}, Yt = ({ children: n }) => {
  const t = N(He);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${We.spice_wrapper} ${t ? We.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, kr = ({ children: n }) => /* @__PURE__ */ d.jsx(Vt, { children: /* @__PURE__ */ d.jsx(Yt, { children: n }) }), zt = () => N(Ge), Bt = "_spice_aside_aside_4cj7n_1", Ut = "_spice_aside_main_4cj7n_5", se = {
  spice_aside_aside: Bt,
  spice_aside_main: Ut
}, Mr = ({
  className: n,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const s = zt();
  return T(() => (r && s(() => !1), () => {
    s(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: n || "", children: [
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
}, Ht = "_spice_form_input_yxowj_1", Gt = "_spice_form_select_yxowj_2", Jt = "_spice_form_radioCheckInput_yxowj_8", de = {
  spice_form_input: Ht,
  spice_form_select: Gt,
  spice_form_radioCheckInput: Jt
}, Ve = ({
  formProps: n,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...n,
    className: `${de.spice_form_input} ${t || ""}`
  }
), Kt = ({ formProps: n }) => {
  const { isSelect: t, ...i } = n;
  if (!t)
    return;
  const r = t.options.map((l) => /* @__PURE__ */ d.jsx("option", { value: l, children: l }, l)), s = () => {
    const l = t.defaultValue;
    return l ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: l }) : null;
  }, a = () => {
    const l = t.defaultSelectedIndex;
    if (l)
      return t.options[l];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      ...i,
      className: de.spice_form_select,
      defaultValue: a(),
      children: [
        /* @__PURE__ */ d.jsx(s, {}),
        r
      ]
    }
  );
}, Ye = ({
  layoutType: n,
  formPropsArr: t,
  label: i,
  FormItem: r,
  errors: s
}) => {
  const a = (l) => !s || !s[l] ? null : s[l];
  if (n === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      a(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(r, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: de.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { children: i }),
      /* @__PURE__ */ d.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Xt = ({ formProps: n }) => {
  const { isTextarea: t, ...i } = n;
  if (t)
    return /* @__PURE__ */ d.jsx("textarea", { ...i, ...t });
}, Wr = ({
  className: n,
  label: t,
  formProps: i,
  errors: r
}) => {
  const s = i, a = s[0].type, l = s.length, u = !!s[0].isSelect, _ = !!s[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = (b) => Ye({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: s,
    label: t,
    FormItem: b,
    errors: r
  }), p = () => u ? v(Kt) : _ ? v(Xt) : a === "radio" || a === "checkbox" ? Ye({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Ve,
    errors: r
  }) : v(Ve);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ d.jsx(p, {}) });
}, _e = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
    t(null);
  }) : t(null);
}), Qt = "_spice_dropdown_wrapper_1nq94_1", Zt = "_spice_dropdown_content_1nq94_5", er = "_spice_dropdown_content_hidden_1nq94_10", tr = "_spice_dropdown_content_pointerPrevent_1nq94_15", Y = {
  spice_dropdown_wrapper: Qt,
  spice_dropdown_content: Zt,
  spice_dropdown_content_hidden: er,
  spice_dropdown_content_pointerPrevent: tr,
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
}, Vr = ({
  position: n,
  parent: t,
  content: i,
  callback: r,
  className: s
}) => {
  const a = R(null), l = R(!1), [u, _] = I(!1), [v, p] = I(!0), b = () => {
    l.current = !0, p(!1), _(!0), r != null && r.onEnter && r.onEnter(a.current);
  }, x = async () => {
    l.current = !1, p(!0), r != null && r.onLeave && await _e(r.onLeave(a.current)), l.current || _(!1);
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
            ref: a,
            className: `${Y.spice_dropdown_content} ${u ? "" : Y.spice_dropdown_content_hidden} ${v ? Y.spice_dropdown_content_pointerPrevent : ""} ${Y["spice_dropdown_" + n]}`,
            children: i.children
          }
        )
      ]
    }
  );
}, rr = (n, t = []) => {
  n > 60 && (n = 60);
  const i = Math.floor(1e3 / n);
  let r = performance.now();
  const s = (u) => {
    const _ = u - r, v = _ <= i;
    return v || (r = u - _ % i), v;
  }, a = {
    callback: null,
    isPlay: !1,
    id: 0
  }, l = (u) => {
    a.id = requestAnimationFrame(l), !s(u) && a.callback && a.isPlay && a.callback();
  };
  return T(() => (a.id = requestAnimationFrame(l), () => {
    cancelAnimationFrame(a.id);
  }), t), (u, _) => {
    if (u === "play") {
      if (!_) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      a.callback = _, a.isPlay = !0;
    } else
      u === "pause" && (a.isPlay = !1);
  };
}, nr = "_spice_magnet_stopPropagation_99wvn_1", or = {
  spice_magnet_stopPropagation: nr
}, Yr = ({
  className: n,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: s = !1,
  isOnClickReset: a = !1
}) => {
  const l = R(null), u = R(null), _ = R(), v = rr(r), p = {
    target: l.current,
    children: u.current,
    x: 0,
    y: 0
  }, b = (g) => {
    p.target = l.current, p.children = u.current;
  }, x = (g) => {
    _.current = g.currentTarget.getBoundingClientRect(), p.x = g.clientX - _.current.left - _.current.width / 2, p.y = g.clientY - _.current.top - _.current.height / 2;
  }, F = (g) => {
    g.stopPropagation(), b(), x(g), v("play", () => {
      i.onMove(p);
    });
  }, z = (g) => {
    g.stopPropagation(), x(g);
  }, B = (g) => {
    g.stopPropagation(), v("pause"), i.onLeave && i.onLeave(p);
  }, X = (g) => {
    B(g);
  }, $ = (g) => {
    a && B(g);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: F,
      onMouseMove: z,
      onMouseLeave: X,
      onClick: $,
      className: n || "",
      ref: l,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: u,
          className: s ? or.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, ir = "_spice_bgImg_wrapper_164nj_1", sr = "_spice_bgImg_view_164nj_5", ar = "_spice_bgImg_golden_164nj_22", cr = "_spice_bgImg_silver_164nj_26", ur = "_spice_bgImg_platinum_164nj_30", lr = "_spice_bgImg_square_164nj_38", ae = {
  spice_bgImg_wrapper: ir,
  spice_bgImg_view: sr,
  spice_bgImg_golden: ar,
  spice_bgImg_silver: cr,
  spice_bgImg_platinum: ur,
  "spice_bgImg_16-9": "_spice_bgImg_16-9_164nj_34",
  spice_bgImg_square: lr,
  "spice_bgImg_3-2": "_spice_bgImg_3-2_164nj_42",
  "spice_bgImg_4-3": "_spice_bgImg_4-3_164nj_46"
}, zr = ({
  ratio: n,
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
  let s = r.includes(n), a = typeof n == "number" && n > 0;
  if (!s && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx("div", { className: `${ae.spice_bgImg_wrapper} ${i || ""}`, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ae.spice_bgImg_view} ${s ? ae["spice_bgImg_" + n] : ""}`,
      style: a ? { paddingTop: `${n}%` } : {},
      children: t
    }
  ) });
}, dr = "_spice_thumbnail_wrapper_1qqot_1", _r = "_spice_thumbnail_view_1qqot_5", fr = "_spice_thumbnail_golden_1qqot_26", pr = "_spice_thumbnail_silver_1qqot_30", vr = "_spice_thumbnail_platinum_1qqot_34", mr = "_spice_thumbnail_square_1qqot_42", ce = {
  spice_thumbnail_wrapper: dr,
  spice_thumbnail_view: _r,
  spice_thumbnail_golden: fr,
  spice_thumbnail_silver: pr,
  spice_thumbnail_platinum: vr,
  "spice_thumbnail_16-9": "_spice_thumbnail_16-9_1qqot_38",
  spice_thumbnail_square: mr,
  "spice_thumbnail_3-2": "_spice_thumbnail_3-2_1qqot_46",
  "spice_thumbnail_4-3": "_spice_thumbnail_4-3_1qqot_50"
}, Br = ({ ratio: n, children: t, className: i }) => {
  const r = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let s = r.includes(n), a = typeof n == "number" && n > 0;
  if (!s && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${ce.spice_thumbnail_wrapper} ${i || ""}`,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `${ce.spice_thumbnail_view} ${s ? ce["spice_thumbnail_" + n] : ""}`,
          style: a ? { paddingTop: `${n}%` } : {},
          children: t
        }
      )
    }
  );
}, ze = (n) => {
  const t = document.documentElement.style, i = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, hr = "_spice_modal_dialog_1t31c_1", gr = {
  spice_modal_dialog: hr
}, Ur = ({ children: n, className: t, dialog: i, callback: r }) => {
  const s = R(null), a = () => {
    ze("add"), s.current.showModal(), r != null && r.onOpen && r.onOpen(s.current);
  }, l = async () => {
    r != null && r.onClose && await _e(r.onClose(s.current)), ze("remove"), s.current.close();
  };
  return T(() => {
    const u = s.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((_) => {
      _.addEventListener("click", () => {
        l();
      });
    });
  }, []), T(() => {
    const u = (_) => {
      var p;
      ((p = s.current) == null ? void 0 : p.hasAttribute("open")) && _.key === "Escape" && l();
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
          a();
        },
        children: n
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: s,
        onClick: (u) => {
          u.target === s.current && l();
        },
        className: `${gr.spice_modal_dialog} ${i.className ? i.className : ""}`,
        children: i.children
      }
    )
  ] });
}, wr = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Je = L(wr), Ke = L(
  () => {
  }
), br = ({ children: n, defaultValue: t }) => {
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
  return /* @__PURE__ */ d.jsx(Je.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Ke.Provider, { value: r, children: n }) });
}, Xe = () => N(Je), fe = () => N(Ke), yr = ({ children: n, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = fe(), s = Xe(), a = () => {
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
      onClick: a,
      className: i || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": s.current === t,
      children: n
    }
  );
}, xr = "_spice_tab_hidden_1r0oa_1", Er = {
  spice_tab_hidden: xr
}, Qe = ({ content: n, isOpen: t }) => {
  const i = n.querySelectorAll("a,button");
  if (!i)
    return;
  const r = t ? "0" : "-1";
  i.forEach((s) => {
    s.setAttribute("tabindex", r);
  });
}, jr = ({ children: n, value: t, className: i, callback: r }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = R(!0), a = R(null), l = fe(), u = Xe(), _ = u.current === t && !u.isLeaving;
  return T(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      _ && r != null && r.onReset && r.onReset(a.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.onClose && await _e(r.onClose(a.current)), l((v) => ({
      ...v,
      isLeaving: !1,
      prev: "",
      current: v.next,
      next: ""
    }))))(), _ && r != null && r.onOpen && r.onOpen(a.current);
  }, [u, l, r, t, _]), T(() => {
    Qe({
      content: a.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${u.current !== t ? Er.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: n
    }
  );
}, Rr = () => {
  const n = fe();
  return (t, i) => {
    n((r) => ({
      isAnimation: i,
      isLeaving: i,
      prev: i ? r.current : "",
      current: i ? r.current : t,
      next: i ? t : ""
    }));
  };
}, Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yr,
  Content: jr,
  Context: br,
  useTabSwitch: Rr
}, Symbol.toStringTag, { value: "Module" })), Tr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Ze = L(Tr), et = L(() => {
}), Sr = ({ children: n, defaultValue: t }) => {
  const [i, r] = I({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Ze.Provider, { value: i, children: /* @__PURE__ */ d.jsx(et.Provider, { value: r, children: n }) });
}, tt = () => N(Ze), Cr = () => N(et), Pr = ({ children: n, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = tt(), s = Cr(), a = !!r.defaultValue.find(
    (_) => _ === t
  ), [l, u] = I(a);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        s((_) => ({
          ..._,
          toggle: l,
          target: t
        })), u(!l);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": l,
      children: n
    }
  );
}, Or = "_spice_accordion_content_1wkzs_1", Ir = "_spice_accordion_hidden_1wkzs_5", Be = {
  spice_accordion_content: Or,
  spice_accordion_hidden: Ir
}, $r = ({
  targetRef: n,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const s = R(0), a = R(!0);
  T(() => {
    const l = new ResizeObserver((_) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(_[0].target);
      }, i);
    }), u = n.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(s.current);
      };
  }, r);
}, qr = ({ value: n, callback: t, children: i, className: r }) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = R(!0), a = R(null), l = R(null), u = tt(), _ = !!u.defaultValue.find(
    (b) => b === n
  ), [v, p] = I(_);
  return T(() => {
    u.target === n && p(!v);
  }, [u.target, u.toggle]), T(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    const b = {
      height: l.current.getBoundingClientRect().height,
      target: a.current
    };
    v ? t.onOpen(b) : t.onClose(b);
  }, [v]), T(() => {
    Qe({ content: a.current, isOpen: v });
  }, [v]), $r({
    targetRef: l,
    callback: (b) => {
      const x = b.getBoundingClientRect().height;
      v && (a.current.style.height = `${x}px`);
    },
    dependencies: [v],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${Be.spice_accordion_content} ${_ ? "" : Be.spice_accordion_hidden}`,
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: r || "", children: i })
    }
  );
}, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Pr,
  Content: qr,
  Context: Sr
}, Symbol.toStringTag, { value: "Module" })), Jr = typeof document < "u" ? Dt : T, Kr = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: i = 0,
  once: r,
  callback: s,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: i
  };
  T(() => {
    const u = n == null ? void 0 : n.current;
    if (!u)
      return;
    const _ = (p, b) => {
      p.forEach((x) => {
        x.isIntersecting && s.onEnter ? (s.onEnter(x.target), r && b.unobserve(x.target)) : !x.isIntersecting && s.onLeave && s.onLeave(x.target);
      });
    }, v = new IntersectionObserver(_, l);
    return v.observe(u), () => {
      v.unobserve(u);
    };
  }, a);
}, pe = ({
  callback: n,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(0), s = R(0), a = () => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      n({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  T(() => (r.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
  }), i);
}, Fr = ({ initWinW: n, winW: t, threshold: i }) => {
  let r = !(n <= i);
  t <= i ? r && window.location.reload() : !r && window.location.reload();
}, Dr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`, Ar = () => {
  console.log(Dr);
}, Lr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const i = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== i && t.setAttribute("content", i);
}, Xr = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: i = !1
}) => {
  const r = At(
    (s) => {
      t && Lr(s);
    },
    [t]
  );
  pe({
    callback({ initWinW: s, winW: a }) {
      n && n.forEach((l) => {
        Fr({
          initWinW: s,
          winW: a,
          threshold: l
        });
      }), r(a);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Ar();
  }, [i, r]);
}, Qr = () => {
  const [n, t] = I(null), i = () => {
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
  }, []), n;
}, ue = "scroll", Zr = ({
  threshold: n = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(null), [s, a] = Lt(
    (p, b) => {
      switch (b.type) {
        case ue:
          return r.current = b.payload, b.payload;
        default:
          return p;
      }
    },
    r.current
  ), l = R(0), u = R(0), _ = () => window.scrollY || document.documentElement.scrollTop, v = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const p = _();
      p > l.current + n && r.current !== "down" ? a({ type: ue, payload: "down" }) : p < l.current - n && r.current !== "up" && a({ type: ue, payload: "up" }), l.current = p;
    }, t);
  };
  return T(() => (l.current = _(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(u.current);
  }), i), s;
}, en = ({ type: n, width: t }) => {
  const [i, r] = I(null), s = (a) => {
    switch (n) {
      case "max":
        r(t >= a);
        break;
      case "min":
        r(t <= a);
        break;
    }
  };
  return pe({
    callback: ({ winW: a }) => {
      s(a);
    },
    debounce: 100,
    dependencies: []
  }), T(() => {
    s(window.innerWidth);
  }, []), i;
};
export {
  Gr as Accordion,
  Mr as AsideLayout,
  zr as BackgroundImage,
  Vr as Dropdown,
  Wr as FormField,
  Yr as Magnet,
  Ur as Modal,
  Hr as Tab,
  Br as Thumbnail,
  kr as WrapperLayout,
  rr as useAnimationFrame,
  Kr as useIntersectionObserver,
  Qr as useIsTouchDevice,
  Jr as useIsomorphicLayoutEffect,
  en as useMediaQuery,
  $r as useResizeObserver,
  Zr as useScrollDirection,
  Xr as useStarter,
  pe as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
