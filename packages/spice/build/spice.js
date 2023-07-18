import Ye, { createContext as N, useState as $, useContext as k, useEffect as j, useRef as R, useLayoutEffect as Dt, useReducer as At } from "react";
var ce = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function qt() {
  if (qe)
    return V;
  qe = 1;
  var o = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, _, v) {
    var h, w = {}, E = null, D = null;
    v !== void 0 && (E = "" + v), _.key !== void 0 && (E = "" + _.key), _.ref !== void 0 && (D = _.ref);
    for (h in _)
      n.call(_, h) && !a.hasOwnProperty(h) && (w[h] = _[h]);
    if (u && u.defaultProps)
      for (h in _ = u.defaultProps, _)
        w[h] === void 0 && (w[h] = _[h]);
    return { $$typeof: t, type: u, key: E, ref: D, props: w, _owner: i.current };
  }
  return V.Fragment = s, V.jsx = l, V.jsxs = l, V;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Lt() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, O = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[O];
      return typeof r == "function" ? r : null;
    }
    var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          c[f - 1] = arguments[f];
        tt("error", e, c);
      }
    }
    function tt(e, r, c) {
      {
        var f = A.ReactDebugCurrentFrame, m = f.getStackAddendum();
        m !== "" && (r += "%s", c = c.concat([m]));
        var b = c.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, fe;
    fe = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === a || st || e === i || e === v || e === h || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === w || e.$$typeof === l || e.$$typeof === u || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function ct(e, r, c) {
      var f = e.displayName;
      if (f)
        return f;
      var m = r.displayName || r.name || "";
      return m !== "" ? c + "(" + m + ")" : c;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case s:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case v:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var r = e;
            return _e(r) + ".Consumer";
          case l:
            var c = e;
            return _e(c._context) + ".Provider";
          case _:
            return ct(e, e.render, "ForwardRef");
          case w:
            var f = e.displayName || null;
            return f !== null ? f : P(e.type) || "Memo";
          case E: {
            var m = e, b = m._payload, g = m._init;
            try {
              return P(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, pe, ve, ge, me, he, we, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function ut() {
      {
        if (W === 0) {
          pe = console.log, ve = console.info, ge = console.warn, me = console.error, he = console.group, we = console.groupCollapsed, be = console.groupEnd;
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
    function lt() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: pe
            }),
            info: F({}, e, {
              value: ve
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: me
            }),
            group: F({}, e, {
              value: he
            }),
            groupCollapsed: F({}, e, {
              value: we
            }),
            groupEnd: F({}, e, {
              value: be
            })
          });
        }
        W < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, Q;
    function U(e, r, c) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (m) {
            var f = m.stack.trim().match(/\n( *(at )?)/);
            Q = f && f[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var Z = !1, H;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      H = new dt();
    }
    function xe(e, r) {
      if (!e || Z)
        return "";
      {
        var c = H.get(e);
        if (c !== void 0)
          return c;
      }
      var f;
      Z = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = X.current, X.current = null, ut();
      try {
        if (r) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (I) {
              f = I;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              f = I;
            }
            e.call(g.prototype);
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
`), T = f.stack.split(`
`), y = p.length - 1, x = T.length - 1; y >= 1 && x >= 0 && p[y] !== T[x]; )
            x--;
          for (; y >= 1 && x >= 0; y--, x--)
            if (p[y] !== T[x]) {
              if (y !== 1 || x !== 1)
                do
                  if (y--, x--, x < 0 || p[y] !== T[x]) {
                    var C = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (y >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = b, lt(), Error.prepareStackTrace = m;
      }
      var L = e ? e.displayName || e.name : "", Ae = L ? U(L) : "";
      return typeof e == "function" && H.set(e, Ae), Ae;
    }
    function ft(e, r, c) {
      return xe(e, !1);
    }
    function _t(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, _t(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case v:
          return U("Suspense");
        case h:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ft(e.render);
          case w:
            return G(e.type, r, c);
          case E: {
            var f = e, m = f._payload, b = f._init;
            try {
              return G(b(m), r, c);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ee = {}, Re = A.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, c = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(c);
      } else
        Re.setExtraStackFrame(null);
    }
    function pt(e, r, c, f, m) {
      {
        var b = Function.call.bind(J);
        for (var g in e)
          if (b(e, g)) {
            var p = void 0;
            try {
              if (typeof e[g] != "function") {
                var T = Error((f || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              p = e[g](r, g, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (K(m), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, g, typeof p), K(null)), p instanceof Error && !(p.message in Ee) && (Ee[p.message] = !0, K(m), S("Failed %s type: %s", c, p.message), K(null));
          }
      }
    }
    var vt = Array.isArray;
    function ee(e) {
      return vt(e);
    }
    function gt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, c = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function mt(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Se(e) {
      if (mt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), je(e);
    }
    var M = A.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Oe, te;
    te = {};
    function wt(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var c = P(M.current.type);
        te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(M.current.type), e.ref), te[c] = !0);
      }
    }
    function xt(e, r) {
      {
        var c = function() {
          Te || (Te = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Et(e, r) {
      {
        var c = function() {
          Oe || (Oe = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rt = function(e, r, c, f, m, b, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: c,
        props: g,
        // Record the component responsible for creating this element.
        _owner: b
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
        value: m
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function jt(e, r, c, f, m) {
      {
        var b, g = {}, p = null, T = null;
        c !== void 0 && (Se(c), p = "" + c), bt(r) && (Se(r.key), p = "" + r.key), wt(r) && (T = r.ref, yt(r, m));
        for (b in r)
          J.call(r, b) && !ht.hasOwnProperty(b) && (g[b] = r[b]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (b in y)
            g[b] === void 0 && (g[b] = y[b]);
        }
        if (p || T) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && xt(g, x), T && Et(g, x);
        }
        return Rt(e, p, T, m, f, M.current, g);
      }
    }
    var re = A.ReactCurrentOwner, Ce = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, c = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(c);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Pe() {
      {
        if (re.current) {
          var e = P(re.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + r + ":" + c + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Tt(e) {
      {
        var r = Pe();
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
        var c = Tt(r);
        if (Ie[c])
          return;
        Ie[c] = !0;
        var f = "";
        e && e._owner && e._owner !== re.current && (f = " It was passed a child from " + P(e._owner.type) + "."), q(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), q(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var c = 0; c < e.length; c++) {
            var f = e[c];
            oe(f) && $e(f, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = et(e);
          if (typeof m == "function" && m !== e.entries)
            for (var b = m.call(e), g; !(g = b.next()).done; )
              oe(g.value) && $e(g.value, r);
        }
      }
    }
    function Ot(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var c;
        if (typeof r == "function")
          c = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          c = r.propTypes;
        else
          return;
        if (c) {
          var f = P(r);
          pt(c, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var m = P(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var r = Object.keys(e.props), c = 0; c < r.length; c++) {
          var f = r[c];
          if (f !== "children" && f !== "key") {
            q(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function De(e, r, c, f, m, b) {
      {
        var g = at(e);
        if (!g) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(m);
          T ? p += T : p += Pe();
          var y;
          e === null ? y = "null" : ee(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (P(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, p);
        }
        var x = jt(e, r, c, m, b);
        if (x == null)
          return x;
        if (g) {
          var C = r.children;
          if (C !== void 0)
            if (f)
              if (ee(C)) {
                for (var L = 0; L < C.length; L++)
                  Fe(C[L], e);
                Object.freeze && Object.freeze(C);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(C, e);
        }
        return e === n ? Ct(x) : Ot(x), x;
      }
    }
    function Pt(e, r, c) {
      return De(e, r, c, !0);
    }
    function It(e, r, c) {
      return De(e, r, c, !1);
    }
    var $t = It, Ft = Pt;
    Y.Fragment = n, Y.jsx = $t, Y.jsxs = Ft;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ce.exports = qt() : ce.exports = Lt();
var d = ce.exports;
const Nt = "_spice_wrapper_1b9je_1", kt = "_spice_wrapper_hidden_1b9je_10", Ne = {
  spice_wrapper: Nt,
  spice_wrapper_hidden: kt
}, ze = N(!0), Be = N((o) => !o), Wt = ({ children: o }) => {
  const [t, s] = $(!0);
  return /* @__PURE__ */ d.jsx(ze.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Be.Provider, { value: s, children: o }) });
}, Mt = ({ children: o }) => {
  const t = k(ze);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${Ne.spice_wrapper} ${t ? Ne.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Pr = ({ children: o }) => /* @__PURE__ */ d.jsx(Wt, { children: /* @__PURE__ */ d.jsx(Mt, { children: o }) }), Vt = () => k(Be), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", ie = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, Ir = ({
  className: o,
  children: t,
  aside: s,
  isSticky: n = !1
}) => {
  const i = Vt();
  return j(() => (n && i(() => !1), () => {
    i(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: o || "", children: [
    s.index === 1 && /* @__PURE__ */ d.jsx("div", { className: ie.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${ie.spice_aside_aside} ${s.className ? s.className : ""}`,
        children: s.chidren
      }
    ),
    s.index === 0 && /* @__PURE__ */ d.jsx("div", { className: ie.spice_aside_main, children: t })
  ] });
}, Bt = "_spice_form_input_yxowj_1", Ut = "_spice_form_select_yxowj_2", Ht = "_spice_form_radioCheckInput_yxowj_8", ue = {
  spice_form_input: Bt,
  spice_form_select: Ut,
  spice_form_radioCheckInput: Ht
}, ke = ({
  formProps: o,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...o,
    className: `${ue.spice_form_input} ${t || ""}`
  }
), Gt = ({ formProps: o }) => {
  const t = o.isSelect;
  if (!t)
    return;
  const s = t.options.map((a) => /* @__PURE__ */ d.jsx("option", { value: a, children: a }, a)), n = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: a }) : null;
  }, i = () => {
    const a = t.defaultSelectedIndex;
    if (a)
      return t.options[a];
  };
  return /* @__PURE__ */ d.jsxs(
    "select",
    {
      name: o.name,
      id: o.id,
      className: ue.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ d.jsx(n, {}),
        s
      ]
    }
  );
}, We = ({
  layoutType: o,
  formPropsArr: t,
  label: s,
  FormItem: n,
  errors: i
}) => {
  const a = (l) => !i || !i[l] ? null : i[l];
  if (o === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      s && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ d.jsx(n, { formProps: t[0] }),
      a(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      s && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(n, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(n, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        n,
        {
          formProps: u,
          className: ue.spice_form_radioCheckInput
        }
      ),
      /* @__PURE__ */ d.jsx("label", { htmlFor: u.id, children: u.value })
    ] }, u.id));
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      s && /* @__PURE__ */ d.jsx("label", { children: s }),
      /* @__PURE__ */ d.jsx("ul", { children: l }),
      a(0)
    ] });
  }
}, Jt = ({ formProps: o }) => {
  const t = o.isTextarea;
  if (t)
    return /* @__PURE__ */ d.jsx(
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
}, $r = ({
  className: o,
  label: t,
  formProps: s,
  errors: n
}) => {
  const i = s, a = i[0].type, l = i.length, u = !!i[0].isSelect, _ = !!i[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (n && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = (w) => We({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: i,
    label: t,
    FormItem: w,
    errors: n
  }), h = () => u ? v(Gt) : _ ? v(Jt) : a === "radio" || a === "checkbox" ? We({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: ke,
    errors: n
  }) : v(ke);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ d.jsx(h, {}) });
}, le = (o) => new Promise((t) => {
  o instanceof Promise ? o.then(() => {
    t(null);
  }) : t(null);
}), Kt = "_spice_dropdown_wrapper_1nq94_1", Xt = "_spice_dropdown_content_1nq94_5", Qt = "_spice_dropdown_content_hidden_1nq94_10", Zt = "_spice_dropdown_content_pointerPrevent_1nq94_15", z = {
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
}, Fr = ({
  position: o,
  parent: t,
  content: s,
  callback: n,
  className: i
}) => {
  const a = R(null), l = R(!1), [u, _] = $(!1), [v, h] = $(!0);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: () => {
        l.current = !0, h(!1), _(!0), n != null && n.enter && n.enter(a.current);
      },
      onMouseLeave: async () => {
        l.current = !1, h(!0), n != null && n.leave && await le(n.leave(a.current)), l.current || _(!1);
      },
      className: `${z.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: a,
            className: `${z.spice_dropdown_content} ${u ? "" : z.spice_dropdown_content_hidden} ${v ? z.spice_dropdown_content_pointerPrevent : ""} ${z["spice_dropdown_" + o]}`,
            children: s.children
          }
        )
      ]
    }
  );
}, er = (o) => {
  o > 60 && (o = 60);
  const t = Math.floor(1e3 / o);
  let s = performance.now();
  const n = (l) => {
    const u = l - s, _ = u <= t;
    return _ || (s = l - u % t), _;
  }, i = {
    callback: null,
    isPlay: !1,
    id: 0
  }, a = (l) => {
    i.id = requestAnimationFrame(a), !n(l) && i.callback && i.isPlay && i.callback();
  };
  return j(() => (i.id = requestAnimationFrame(a), () => {
    cancelAnimationFrame(i.id);
  }), []), (l, u) => {
    if (l === "play") {
      if (!u) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      i.callback = u, i.isPlay = !0;
    } else
      l === "pause" && (i.isPlay = !1);
  };
}, tr = "_spice_magnet_stopPropagation_99wvn_1", rr = {
  spice_magnet_stopPropagation: tr
}, Dr = ({
  className: o,
  children: t,
  callback: s,
  fps: n = 60,
  stopPropagation: i = !1
}) => {
  const a = R(null), l = R(null), u = R(), _ = er(n), v = {
    target: a.current,
    children: l.current,
    x: 0,
    y: 0
  }, h = (O) => {
    v.target = a.current, v.children = l.current;
  }, w = (O) => {
    u.current = O.currentTarget.getBoundingClientRect(), v.x = O.clientX - u.current.left - u.current.width / 2, v.y = O.clientY - u.current.top - u.current.height / 2;
  }, E = (O) => {
    O.stopPropagation(), h(), w(O), _("play", () => {
      s.move(v);
    });
  }, D = (O) => {
    O.stopPropagation(), w(O);
  }, B = (O) => {
    O.stopPropagation(), _("pause"), s.leave && s.leave(v);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: E,
      onMouseMove: D,
      onMouseLeave: B,
      className: o || "",
      ref: a,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: l,
          className: i ? rr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, nr = "_spice_bgImg_wrapper_12iq7_1", or = "_spice_bgImg_view_12iq7_6", ir = "_spice_bgImg_golden_12iq7_20", sr = "_spice_bgImg_silver_12iq7_24", ar = "_spice_bgImg_platinum_12iq7_28", cr = "_spice_bgImg_square_12iq7_36", se = {
  spice_bgImg_wrapper: nr,
  spice_bgImg_view: or,
  spice_bgImg_golden: ir,
  spice_bgImg_silver: sr,
  spice_bgImg_platinum: ar,
  "spice_bgImg_16-9": "_spice_bgImg_16-9_12iq7_32",
  spice_bgImg_square: cr,
  "spice_bgImg_3-2": "_spice_bgImg_3-2_12iq7_40",
  "spice_bgImg_4-3": "_spice_bgImg_4-3_12iq7_44"
}, Ar = ({
  ratio: o,
  children: t,
  className: s
}) => {
  const n = [
    "golden",
    "silver",
    "platinum",
    "16-9",
    "square",
    "3-2",
    "4-3"
  ];
  let i = n.includes(o), a = typeof o == "number" && o > 0;
  if (!i && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${n.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx("div", { className: `${se.spice_bgImg_wrapper} ${s || ""}`, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${se.spice_bgImg_view} ${i ? se["spice_bgImg_" + o] : ""}`,
      style: a ? { paddingTop: `${o}%` } : {},
      children: t
    }
  ) });
}, Me = (o) => {
  const t = document.documentElement.style, s = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", s.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", s.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, qr = ({ children: o, className: t, dialog: s, callback: n }) => {
  const i = R(null), a = () => {
    Me("add"), i.current.showModal(), n != null && n.open && n.open(i.current);
  }, l = async () => {
    n != null && n.close && await le(n.close(i.current)), Me("remove"), i.current.close();
  };
  return j(() => {
    const u = i.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((_) => {
      _.addEventListener("click", () => {
        l();
      });
    });
  }, []), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        className: t || "",
        onClick: () => {
          a();
        },
        children: o
      }
    ),
    /* @__PURE__ */ d.jsx(
      "dialog",
      {
        ref: i,
        onClick: (u) => {
          u.target === i.current && l();
        },
        className: `${lr.spice_modal_dialog} ${s.className ? s.className : ""}`,
        children: s.children
      }
    )
  ] });
}, dr = {
  isLeaving: !1,
  prev: "",
  current: "",
  next: ""
}, Ue = N(dr), He = N(
  () => {
  }
), fr = ({ children: o, defaultValue: t }) => {
  const [s, n] = $({
    isLeaving: !1,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Ue.Provider, { value: s, children: /* @__PURE__ */ d.jsx(He.Provider, { value: n, children: o }) });
}, Ge = () => k(Ue), Je = () => k(He), _r = ({ children: o, value: t, className: s }) => {
  const n = Je(), i = Ge(), a = () => {
    i.current === t || i.isLeaving || n((l) => ({
      ...l,
      isLeaving: !0,
      prev: l.current,
      next: t
    }));
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      className: s || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      children: o
    }
  );
}, pr = "_spice_tab_hidden_1r0oa_1", vr = {
  spice_tab_hidden: pr
}, Ke = ({ content: o, isOpen: t }) => {
  const s = o.querySelectorAll("a,button");
  if (!s)
    return;
  const n = t ? "0" : "-1";
  s.forEach((i) => {
    i.setAttribute("tabindex", n);
  });
}, gr = ({ children: o, value: t, className: s, callback: n }) => {
  const i = R(!0), a = R(null), l = Je(), u = Ge();
  return j(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    u.prev === t && (async () => (n != null && n.close && await le(n.close(a.current)), l((_) => ({
      isLeaving: !1,
      prev: "",
      current: _.next,
      next: ""
    }))))(), u.current === t && !u.isLeaving && n != null && n.open && n.open(a.current);
  }, [u, l, n, t]), j(() => {
    Ke({
      content: a.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${u.current !== t ? vr.spice_tab_hidden : ""} ${s || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: o
    }
  );
}, Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: _r,
  Content: gr,
  Context: fr
}, Symbol.toStringTag, { value: "Module" })), mr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Xe = N(mr), Qe = N(() => {
}), hr = ({ children: o, defaultValue: t }) => {
  const [s, n] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Xe.Provider, { value: s, children: /* @__PURE__ */ d.jsx(Qe.Provider, { value: n, children: o }) });
}, Ze = () => k(Xe), wr = () => k(Qe), br = ({ children: o, value: t, className: s }) => {
  const n = Ze(), i = wr(), a = !!n.defaultValue.find(
    (_) => _ === t
  ), [l, u] = $(a);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: s || "",
      onClick: () => {
        i((_) => ({
          ..._,
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
}, yr = "_spice_accordion_content_1wkzs_1", xr = "_spice_accordion_hidden_1wkzs_5", Ve = {
  spice_accordion_content: yr,
  spice_accordion_hidden: xr
}, Er = ({
  targetRef: o,
  callback: t,
  debounce: s,
  dependencies: n = []
}) => {
  const i = R(0), a = R(!0);
  j(() => {
    const l = new ResizeObserver((_) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(_[0].target);
      }, s);
    }), u = o.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(i.current);
      };
  }, n);
}, Rr = ({ value: o, callback: t, children: s, className: n }) => {
  const i = R(!0), a = R(null), l = R(null), u = Ze(), _ = !!u.defaultValue.find(
    (w) => w === o
  ), [v, h] = $(_);
  return j(() => {
    u.target === o && h(!v);
  }, [u.target, u.toggle]), j(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    const w = {
      height: l.current.getBoundingClientRect().height,
      target: a.current
    };
    v ? t.open(w) : t.close(w);
  }, [v]), j(() => {
    Ke({ content: a.current, isOpen: v });
  }, [v]), Er({
    targetRef: l,
    callback: (w) => {
      const E = w.getBoundingClientRect().height;
      v && (a.current.style.height = `${E}px`);
    },
    dependencies: [v],
    debounce: 100
  }), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${Ve.spice_accordion_content} ${_ ? "" : Ve.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: n || "", children: s })
    }
  );
}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: br,
  Content: Rr,
  Context: hr
}, Symbol.toStringTag, { value: "Module" })), kr = typeof document < "u" ? Dt : j, Wr = ({
  targetRef: o,
  rootMargin: t = "0px",
  threshold: s = 0,
  once: n,
  callback: i,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: s
  };
  j(() => {
    const u = o.current;
    if (!u)
      return;
    const _ = (h, w) => {
      h.forEach((E) => {
        E.isIntersecting && i.enter ? (i.enter(E.target), n && w.unobserve(E.target)) : !E.isIntersecting && i.leave && i.leave(E.target);
      });
    }, v = new IntersectionObserver(_, l);
    return v.observe(u), () => {
      v.unobserve(u);
    };
  }, a);
}, de = ({
  callback: o,
  debounce: t,
  dependencies: s = []
}) => {
  const n = R(0), i = R(0), a = () => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: n.current
      });
    }, t);
  };
  j(() => (n.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(i.current);
  }), s);
}, jr = ({ initWinW: o, winW: t, threshold: s }) => {
  let n = !(o <= s);
  t <= s ? n && window.location.reload() : !n && window.location.reload();
}, Sr = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
https://funtech.inc/

`, Tr = () => {
  console.log(Sr);
}, Or = (o) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const s = o > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== s && t.setAttribute("content", s);
}, Mr = ({
  reloadThresholds: o,
  isFixViewportForSmall: t = !0,
  areYouFun: s = !1
}) => {
  const n = (i) => {
    t && Or(i);
  };
  de({
    callback({ initWinW: i, winW: a }) {
      o && o.forEach((l) => {
        jr({
          initWinW: i,
          winW: a,
          threshold: l
        });
      }), n(a);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), s && process.env.NODE_ENV !== "development" && Tr();
  }, []);
}, Vr = () => {
  const [o, t] = $(null), s = () => {
    const n = window.ontouchstart, i = navigator.maxTouchPoints;
    n !== void 0 && 0 < i ? t(!0) : t(!1);
  };
  return de({
    callback() {
      s();
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    s();
  }, []), o;
}, ae = "scroll", Yr = ({
  threshold: o = 0,
  debounce: t,
  dependencies: s = []
}) => {
  const n = R(null), [i, a] = At(
    (h, w) => {
      switch (w.type) {
        case ae:
          return n.current = w.payload, w.payload;
        default:
          return h;
      }
    },
    n.current
  ), l = R(0), u = R(0), _ = () => window.scrollY || document.documentElement.scrollTop, v = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const h = _();
      h > l.current + o && n.current !== "down" ? a({ type: ae, payload: "down" }) : h < l.current - o && n.current !== "up" && a({ type: ae, payload: "up" }), l.current = h;
    }, t);
  };
  return j(() => (l.current = _(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(u.current);
  }), s), i;
}, zr = ({ type: o, width: t }) => {
  const [s, n] = $(null), i = (a) => {
    switch (o) {
      case "max":
        n(t <= a);
        break;
      case "min":
        n(t >= a);
        break;
    }
  };
  return de({
    callback: ({ winW: a }) => {
      i(a);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    i(window.innerWidth);
  }, []), s;
};
export {
  Nr as Accordion,
  Ir as AsideLayout,
  Ar as BackgroundImage,
  Fr as Dropdown,
  $r as FormField,
  Dr as Magnet,
  qr as Modal,
  Lr as Tab,
  Pr as WrapperLayout,
  er as useAnimationFrame,
  Wr as useIntersectionObserver,
  Vr as useIsTouchDevice,
  kr as useIsomorphicLayoutEffect,
  zr as useMediaQuery,
  Er as useResizeObserver,
  Yr as useScrollDirection,
  Mr as useStarter,
  de as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
