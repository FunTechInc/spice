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
  var n = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, p, v) {
    var m, w = {}, E = null, D = null;
    v !== void 0 && (E = "" + v), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (m in p)
      o.call(p, m) && !a.hasOwnProperty(m) && (w[m] = p[m]);
    if (u && u.defaultProps)
      for (m in p = u.defaultProps, p)
        w[m] === void 0 && (w[m] = p[m]);
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
    var n = Ye, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, P = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[P];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          c[f - 1] = arguments[f];
        tt("error", e, c);
      }
    }
    function tt(e, r, c) {
      {
        var f = A.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (r += "%s", c = c.concat([h]));
        var b = c.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, fe;
    fe = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === a || st || e === i || e === v || e === m || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === w || e.$$typeof === l || e.$$typeof === u || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function ct(e, r, c) {
      var f = e.displayName;
      if (f)
        return f;
      var h = r.displayName || r.name || "";
      return h !== "" ? c + "(" + h + ")" : c;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var r = e;
            return pe(r) + ".Consumer";
          case l:
            var c = e;
            return pe(c._context) + ".Provider";
          case p:
            return ct(e, e.render, "ForwardRef");
          case w:
            var f = e.displayName || null;
            return f !== null ? f : C(e.type) || "Memo";
          case E: {
            var h = e, b = h._payload, g = h._init;
            try {
              return C(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, _e, ve, ge, he, me, we, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function ut() {
      {
        if (W === 0) {
          _e = console.log, ve = console.info, ge = console.warn, he = console.error, me = console.group, we = console.groupCollapsed, be = console.groupEnd;
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
              value: _e
            }),
            info: F({}, e, {
              value: ve
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: he
            }),
            group: F({}, e, {
              value: me
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
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
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
      var h = Error.prepareStackTrace;
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
          for (var _ = I.stack.split(`
`), T = f.stack.split(`
`), y = _.length - 1, x = T.length - 1; y >= 1 && x >= 0 && _[y] !== T[x]; )
            x--;
          for (; y >= 1 && x >= 0; y--, x--)
            if (_[y] !== T[x]) {
              if (y !== 1 || x !== 1)
                do
                  if (y--, x--, x < 0 || _[y] !== T[x]) {
                    var O = `
` + _[y].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, O), O;
                  }
                while (y >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = b, lt(), Error.prepareStackTrace = h;
      }
      var L = e ? e.displayName || e.name : "", Ae = L ? U(L) : "";
      return typeof e == "function" && H.set(e, Ae), Ae;
    }
    function ft(e, r, c) {
      return xe(e, !1);
    }
    function pt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, pt(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case v:
          return U("Suspense");
        case m:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return ft(e.render);
          case w:
            return G(e.type, r, c);
          case E: {
            var f = e, h = f._payload, b = f._init;
            try {
              return G(b(h), r, c);
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
    function _t(e, r, c, f, h) {
      {
        var b = Function.call.bind(J);
        for (var g in e)
          if (b(e, g)) {
            var _ = void 0;
            try {
              if (typeof e[g] != "function") {
                var T = Error((f || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              _ = e[g](r, g, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              _ = y;
            }
            _ && !(_ instanceof Error) && (K(h), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, g, typeof _), K(null)), _ instanceof Error && !(_.message in Ee) && (Ee[_.message] = !0, K(h), S("Failed %s type: %s", c, _.message), K(null));
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
    function ht(e) {
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
      if (ht(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), je(e);
    }
    var M = A.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe, te;
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
        var c = C(M.current.type);
        te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(M.current.type), e.ref), te[c] = !0);
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
          Pe || (Pe = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rt = function(e, r, c, f, h, b, g) {
      var _ = {
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
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function jt(e, r, c, f, h) {
      {
        var b, g = {}, _ = null, T = null;
        c !== void 0 && (Se(c), _ = "" + c), bt(r) && (Se(r.key), _ = "" + r.key), wt(r) && (T = r.ref, yt(r, h));
        for (b in r)
          J.call(r, b) && !mt.hasOwnProperty(b) && (g[b] = r[b]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (b in y)
            g[b] === void 0 && (g[b] = y[b]);
        }
        if (_ || T) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && xt(g, x), T && Et(g, x);
        }
        return Rt(e, _, T, h, f, M.current, g);
      }
    }
    var re = A.ReactCurrentOwner, Oe = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, c = G(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ce() {
      {
        if (re.current) {
          var e = C(re.current.type);
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
        var r = Ce();
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
        e && e._owner && e._owner !== re.current && (f = " It was passed a child from " + C(e._owner.type) + "."), q(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), q(null);
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
          var h = et(e);
          if (typeof h == "function" && h !== e.entries)
            for (var b = h.call(e), g; !(g = b.next()).done; )
              oe(g.value) && $e(g.value, r);
        }
      }
    }
    function Pt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var c;
        if (typeof r == "function")
          c = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          c = r.propTypes;
        else
          return;
        if (c) {
          var f = C(r);
          _t(c, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var h = C(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
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
    function De(e, r, c, f, h, b) {
      {
        var g = at(e);
        if (!g) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(h);
          T ? _ += T : _ += Ce();
          var y;
          e === null ? y = "null" : ee(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (C(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, _);
        }
        var x = jt(e, r, c, h, b);
        if (x == null)
          return x;
        if (g) {
          var O = r.children;
          if (O !== void 0)
            if (f)
              if (ee(O)) {
                for (var L = 0; L < O.length; L++)
                  Fe(O[L], e);
                Object.freeze && Object.freeze(O);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(O, e);
        }
        return e === o ? Ot(x) : Pt(x), x;
      }
    }
    function Ct(e, r, c) {
      return De(e, r, c, !0);
    }
    function It(e, r, c) {
      return De(e, r, c, !1);
    }
    var $t = It, Ft = Ct;
    Y.Fragment = o, Y.jsx = $t, Y.jsxs = Ft;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ce.exports = qt() : ce.exports = Lt();
var d = ce.exports;
const Nt = "_spice_wrapper_1b9je_1", kt = "_spice_wrapper_hidden_1b9je_10", Ne = {
  spice_wrapper: Nt,
  spice_wrapper_hidden: kt
}, ze = N(!0), Be = N((n) => !n), Wt = ({ children: n }) => {
  const [t, s] = $(!0);
  return /* @__PURE__ */ d.jsx(ze.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Be.Provider, { value: s, children: n }) });
}, Mt = ({ children: n }) => {
  const t = k(ze);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${Ne.spice_wrapper} ${t ? Ne.spice_wrapper_hidden : ""}`,
      children: n
    }
  );
}, Cr = ({ children: n }) => /* @__PURE__ */ d.jsx(Wt, { children: /* @__PURE__ */ d.jsx(Mt, { children: n }) }), Vt = () => k(Be), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", ie = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, Ir = ({
  className: n,
  children: t,
  aside: s,
  isSticky: o = !1
}) => {
  const i = Vt();
  return j(() => (o && i(() => !1), () => {
    i(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: n || "", children: [
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
  formProps: n,
  className: t
}) => /* @__PURE__ */ d.jsx(
  "input",
  {
    ...n,
    className: `${ue.spice_form_input} ${t || ""}`
  }
), Gt = ({ formProps: n }) => {
  const t = n.isSelect;
  if (!t)
    return;
  const s = t.options.map((a) => /* @__PURE__ */ d.jsx("option", { value: a, children: a }, a)), o = () => {
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
      name: n.name,
      id: n.id,
      className: ue.spice_form_select,
      defaultValue: i(),
      children: [
        /* @__PURE__ */ d.jsx(o, {}),
        s
      ]
    }
  );
}, We = ({
  layoutType: n,
  formPropsArr: t,
  label: s,
  FormItem: o,
  errors: i
}) => {
  const a = (l) => !i || !i[l] ? null : i[l];
  if (n === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      s && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ d.jsx(o, { formProps: t[0] }),
      a(0)
    ] });
  if (n === "flex")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      s && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: s }),
      /* @__PURE__ */ d.jsxs("ul", { children: [
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(o, { formProps: t[0] }),
          a(0)
        ] }),
        /* @__PURE__ */ d.jsxs("li", { children: [
          /* @__PURE__ */ d.jsx(o, { formProps: t[1] }),
          a(1)
        ] })
      ] })
    ] });
  if (n === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        o,
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
}, Jt = ({ formProps: n }) => {
  const t = n.isTextarea;
  if (t)
    return /* @__PURE__ */ d.jsx(
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
}, $r = ({
  className: n,
  label: t,
  formProps: s,
  errors: o
}) => {
  const i = s, a = i[0].type, l = i.length, u = !!i[0].isSelect, p = !!i[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (o && o.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = (w) => We({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: i,
    label: t,
    FormItem: w,
    errors: o
  }), m = () => u ? v(Gt) : p ? v(Jt) : a === "radio" || a === "checkbox" ? We({
    layoutType: "radio-check",
    formPropsArr: i,
    label: t,
    FormItem: ke,
    errors: o
  }) : v(ke);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${n}`, children: /* @__PURE__ */ d.jsx(m, {}) });
}, le = (n) => new Promise((t) => {
  n instanceof Promise ? n.then(() => {
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
  position: n,
  parent: t,
  content: s,
  callback: o,
  className: i
}) => {
  const a = R(null), l = R(!1), [u, p] = $(!1), [v, m] = $(!0);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: () => {
        l.current = !0, m(!1), p(!0), o != null && o.enter && o.enter(a.current);
      },
      onMouseLeave: async () => {
        l.current = !1, m(!0), o != null && o.leave && await le(o.leave(a.current)), l.current || p(!1);
      },
      className: `${z.spice_dropdown_wrapper} ${i || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: a,
            className: `${z.spice_dropdown_content} ${u ? "" : z.spice_dropdown_content_hidden} ${v ? z.spice_dropdown_content_pointerPrevent : ""} ${z["spice_dropdown_" + n]}`,
            children: s.children
          }
        )
      ]
    }
  );
}, er = (n) => {
  n > 60 && (n = 60);
  const t = Math.floor(1e3 / n);
  let s = performance.now();
  const o = (l) => {
    const u = l - s, p = u <= t;
    return p || (s = l - u % t), p;
  }, i = {
    callback: null,
    isPlay: !1,
    id: 0
  }, a = (l) => {
    i.id = requestAnimationFrame(a), !o(l) && i.callback && i.isPlay && i.callback();
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
  className: n,
  children: t,
  callback: s,
  fps: o = 60,
  stopPropagation: i = !1
}) => {
  const a = R(null), l = R(null), u = R(), p = er(o), v = {
    target: a.current,
    children: l.current,
    x: 0,
    y: 0
  }, m = (P) => {
    v.target = a.current, v.children = l.current;
  }, w = (P) => {
    u.current = P.currentTarget.getBoundingClientRect(), v.x = P.clientX - u.current.left - u.current.width / 2, v.y = P.clientY - u.current.top - u.current.height / 2;
  }, E = (P) => {
    P.stopPropagation(), m(), w(P), p("play", () => {
      s.move(v);
    });
  }, D = (P) => {
    P.stopPropagation(), w(P);
  }, B = (P) => {
    P.stopPropagation(), p("pause"), s.leave && s.leave(v);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      onMouseEnter: E,
      onMouseMove: D,
      onMouseLeave: B,
      className: n || "",
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
  return /* @__PURE__ */ d.jsx("div", { className: `${se.spice_bgImg_wrapper} ${s || ""}`, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${se.spice_bgImg_view} ${i ? se["spice_bgImg_" + n] : ""}`,
      style: a ? { paddingTop: `${n}%` } : {},
      children: t
    }
  ) });
}, Me = (n) => {
  const t = document.documentElement.style, s = document.body.style;
  n === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", s.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", s.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, qr = ({ children: n, className: t, dialog: s, callback: o }) => {
  const i = R(null), a = () => {
    Me("add"), i.current.showModal(), o != null && o.open && o.open(i.current);
  }, l = async () => {
    o != null && o.close && await le(o.close(i.current)), Me("remove"), i.current.close();
  };
  return j(() => {
    const u = i.current.querySelectorAll(".spice__modal_close");
    u && u.forEach((p) => {
      p.addEventListener("click", () => {
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
        children: n
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
), fr = ({ children: n, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [s, o] = $({
    isLeaving: !1,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ d.jsx(Ue.Provider, { value: s, children: /* @__PURE__ */ d.jsx(He.Provider, { value: o, children: n }) });
}, Ge = () => k(Ue), Je = () => k(He), pr = ({ children: n, value: t, className: s }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = Je(), i = Ge(), a = () => {
    i.current === t || i.isLeaving || o((l) => ({
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
      children: n
    }
  );
}, _r = "_spice_tab_hidden_1r0oa_1", vr = {
  spice_tab_hidden: _r
}, Ke = ({ content: n, isOpen: t }) => {
  const s = n.querySelectorAll("a,button");
  if (!s)
    return;
  const o = t ? "0" : "-1";
  s.forEach((i) => {
    i.setAttribute("tabindex", o);
  });
}, gr = ({ children: n, value: t, className: s, callback: o }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = R(!0), a = R(null), l = Je(), u = Ge();
  return j(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    u.prev === t && (async () => (o != null && o.close && await le(o.close(a.current)), l((p) => ({
      isLeaving: !1,
      prev: "",
      current: p.next,
      next: ""
    }))))(), u.current === t && !u.isLeaving && o != null && o.open && o.open(a.current);
  }, [u, l, o, t]), j(() => {
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
      children: n
    }
  );
}, Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: pr,
  Content: gr,
  Context: fr
}, Symbol.toStringTag, { value: "Module" })), hr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Xe = N(hr), Qe = N(() => {
}), mr = ({ children: n, defaultValue: t }) => {
  const [s, o] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Xe.Provider, { value: s, children: /* @__PURE__ */ d.jsx(Qe.Provider, { value: o, children: n }) });
}, Ze = () => k(Xe), wr = () => k(Qe), br = ({ children: n, value: t, className: s }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = Ze(), i = wr(), a = !!o.defaultValue.find(
    (p) => p === t
  ), [l, u] = $(a);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: s || "",
      onClick: () => {
        i((p) => ({
          ...p,
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
}, yr = "_spice_accordion_content_1wkzs_1", xr = "_spice_accordion_hidden_1wkzs_5", Ve = {
  spice_accordion_content: yr,
  spice_accordion_hidden: xr
}, Er = ({
  targetRef: n,
  callback: t,
  debounce: s,
  dependencies: o = []
}) => {
  const i = R(0), a = R(!0);
  j(() => {
    const l = new ResizeObserver((p) => {
      clearTimeout(i.current), i.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(p[0].target);
      }, s);
    }), u = n.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(i.current);
      };
  }, o);
}, Rr = ({ value: n, callback: t, children: s, className: o }) => {
  if (n === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const i = R(!0), a = R(null), l = R(null), u = Ze(), p = !!u.defaultValue.find(
    (w) => w === n
  ), [v, m] = $(p);
  return j(() => {
    u.target === n && m(!v);
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
      className: `${Ve.spice_accordion_content} ${p ? "" : Ve.spice_accordion_hidden}`,
      id: `content-${n}`,
      "aria-labelledby": `button-${n}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: o || "", children: s })
    }
  );
}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: br,
  Content: Rr,
  Context: mr
}, Symbol.toStringTag, { value: "Module" })), kr = typeof document < "u" ? Dt : j, Wr = ({
  targetRef: n,
  rootMargin: t = "0px",
  threshold: s = 0,
  once: o,
  callback: i,
  dependencies: a = []
}) => {
  const l = {
    rootMargin: t,
    threshold: s
  };
  j(() => {
    const u = n.current;
    if (!u)
      return;
    const p = (m, w) => {
      m.forEach((E) => {
        E.isIntersecting && i.enter ? (i.enter(E.target), o && w.unobserve(E.target)) : !E.isIntersecting && i.leave && i.leave(E.target);
      });
    }, v = new IntersectionObserver(p, l);
    return v.observe(u), () => {
      v.unobserve(u);
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
  j(() => (o.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(i.current);
  }), s);
}, jr = ({ initWinW: n, winW: t, threshold: s }) => {
  let o = !(n <= s);
  t <= s ? o && window.location.reload() : !o && window.location.reload();
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
}, Pr = (n) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const s = n > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== s && t.setAttribute("content", s);
}, Mr = ({
  reloadThresholds: n,
  isFixViewportForSmall: t = !0,
  areYouFun: s = !1
}) => {
  const o = (i) => {
    t && Pr(i);
  };
  de({
    callback({ initWinW: i, winW: a }) {
      n && n.forEach((l) => {
        jr({
          initWinW: i,
          winW: a,
          threshold: l
        });
      }), o(a);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    document.body.dataset.spiceRendered = "true", o(window.innerWidth), s && process.env.NODE_ENV !== "development" && Tr();
  }, []);
}, Vr = () => {
  const [n, t] = $(null), s = () => {
    const o = window.ontouchstart, i = navigator.maxTouchPoints;
    o !== void 0 && 0 < i ? t(!0) : t(!1);
  };
  return de({
    callback() {
      s();
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    s();
  }, []), n;
}, ae = "scroll", Yr = ({
  threshold: n = 0,
  debounce: t,
  dependencies: s = []
}) => {
  const o = R(null), [i, a] = At(
    (m, w) => {
      switch (w.type) {
        case ae:
          return o.current = w.payload, w.payload;
        default:
          return m;
      }
    },
    o.current
  ), l = R(0), u = R(0), p = () => window.scrollY || document.documentElement.scrollTop, v = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const m = p();
      m > l.current + n && o.current !== "down" ? a({ type: ae, payload: "down" }) : m < l.current - n && o.current !== "up" && a({ type: ae, payload: "up" }), l.current = m;
    }, t);
  };
  return j(() => (l.current = p(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(u.current);
  }), s), i;
}, zr = ({ type: n, width: t }) => {
  const [s, o] = $(null), i = (a) => {
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
  Cr as WrapperLayout,
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
