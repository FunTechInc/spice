import ze, { createContext as N, useState as $, useContext as W, useEffect as j, useRef as R, useLayoutEffect as Dt, useReducer as At } from "react";
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
function Lt() {
  if (qe)
    return V;
  qe = 1;
  var o = ze, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, p, v) {
    var m, w = {}, E = null, D = null;
    v !== void 0 && (E = "" + v), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (m in p)
      r.call(p, m) && !a.hasOwnProperty(m) && (w[m] = p[m]);
    if (u && u.defaultProps)
      for (m in p = u.defaultProps, p)
        w[m] === void 0 && (w[m] = p[m]);
    return { $$typeof: t, type: u, key: E, ref: D, props: w, _owner: s.current };
  }
  return V.Fragment = i, V.jsx = l, V.jsxs = l, V;
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
var Ne;
function qt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var o = ze, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, P = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = B && e[B] || e[P];
      return typeof n == "function" ? n : null;
    }
    var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          c[f - 1] = arguments[f];
        tt("error", e, c);
      }
    }
    function tt(e, n, c) {
      {
        var f = A.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (n += "%s", c = c.concat([h]));
        var b = c.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var rt = !1, nt = !1, ot = !1, it = !1, st = !1, pe;
    pe = Symbol.for("react.module.reference");
    function at(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || st || e === s || e === v || e === m || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === w || e.$$typeof === l || e.$$typeof === u || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function ct(e, n, c) {
      var f = e.displayName;
      if (f)
        return f;
      var h = n.displayName || n.name || "";
      return h !== "" ? c + "(" + h + ")" : c;
    }
    function _e(e) {
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
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return _e(n) + ".Consumer";
          case l:
            var c = e;
            return _e(c._context) + ".Provider";
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
    var F = Object.assign, M = 0, ve, ge, he, me, we, be, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function ut() {
      {
        if (M === 0) {
          ve = console.log, ge = console.info, he = console.warn, me = console.error, we = console.group, be = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
              value: ve
            }),
            info: F({}, e, {
              value: ge
            }),
            warn: F({}, e, {
              value: he
            }),
            error: F({}, e, {
              value: me
            }),
            group: F({}, e, {
              value: we
            }),
            groupCollapsed: F({}, e, {
              value: be
            }),
            groupEnd: F({}, e, {
              value: ye
            })
          });
        }
        M < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, Q;
    function U(e, n, c) {
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
    function Ee(e, n) {
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
        if (n) {
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
      var q = e ? e.displayName || e.name : "", Le = q ? U(q) : "";
      return typeof e == "function" && H.set(e, Le), Le;
    }
    function ft(e, n, c) {
      return Ee(e, !1);
    }
    function pt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, pt(e));
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
            return G(e.type, n, c);
          case E: {
            var f = e, h = f._payload, b = f._init;
            try {
              return G(b(h), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, je = A.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        je.setExtraStackFrame(c);
      } else
        je.setExtraStackFrame(null);
    }
    function _t(e, n, c, f, h) {
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
              _ = e[g](n, g, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              _ = y;
            }
            _ && !(_ instanceof Error) && (K(h), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, g, typeof _), K(null)), _ instanceof Error && !(_.message in Re) && (Re[_.message] = !0, K(h), S("Failed %s type: %s", c, _.message), K(null));
          }
      }
    }
    var vt = Array.isArray;
    function ee(e) {
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
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Te(e) {
      if (ht(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Se(e);
    }
    var k = A.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, te;
    te = {};
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
        te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(k.current.type), e.ref), te[c] = !0);
      }
    }
    function xt(e, n) {
      {
        var c = function() {
          Pe || (Pe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
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
          Oe || (Oe = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Rt = function(e, n, c, f, h, b, g) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
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
    function jt(e, n, c, f, h) {
      {
        var b, g = {}, _ = null, T = null;
        c !== void 0 && (Te(c), _ = "" + c), bt(n) && (Te(n.key), _ = "" + n.key), wt(n) && (T = n.ref, yt(n, h));
        for (b in n)
          J.call(n, b) && !mt.hasOwnProperty(b) && (g[b] = n[b]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (b in y)
            g[b] === void 0 && (g[b] = y[b]);
        }
        if (_ || T) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && xt(g, x), T && Et(g, x);
        }
        return Rt(e, _, T, h, f, k.current, g);
      }
    }
    var re = A.ReactCurrentOwner, Ce = A.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        Ce.setExtraStackFrame(c);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ie() {
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
          var n = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + n + ":" + c + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Tt(e) {
      {
        var n = Ie();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function Fe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Tt(n);
        if ($e[c])
          return;
        $e[c] = !0;
        var f = "";
        e && e._owner && e._owner !== re.current && (f = " It was passed a child from " + C(e._owner.type) + "."), L(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), L(null);
      }
    }
    function De(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var c = 0; c < e.length; c++) {
            var f = e[c];
            oe(f) && Fe(f, n);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = et(e);
          if (typeof h == "function" && h !== e.entries)
            for (var b = h.call(e), g; !(g = b.next()).done; )
              oe(g.value) && Fe(g.value, n);
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
        else if (typeof n == "object" && (n.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === w))
          c = n.propTypes;
        else
          return;
        if (c) {
          var f = C(n);
          _t(c, e.props, "prop", f, e);
        } else if (n.PropTypes !== void 0 && !ne) {
          ne = !0;
          var h = C(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var f = n[c];
          if (f !== "children" && f !== "key") {
            L(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ae(e, n, c, f, h, b) {
      {
        var g = at(e);
        if (!g) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(h);
          T ? _ += T : _ += Ie();
          var y;
          e === null ? y = "null" : ee(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (C(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, _);
        }
        var x = jt(e, n, c, h, b);
        if (x == null)
          return x;
        if (g) {
          var O = n.children;
          if (O !== void 0)
            if (f)
              if (ee(O)) {
                for (var q = 0; q < O.length; q++)
                  De(O[q], e);
                Object.freeze && Object.freeze(O);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(O, e);
        }
        return e === r ? Ot(x) : Pt(x), x;
      }
    }
    function Ct(e, n, c) {
      return Ae(e, n, c, !0);
    }
    function It(e, n, c) {
      return Ae(e, n, c, !1);
    }
    var $t = It, Ft = Ct;
    Y.Fragment = r, Y.jsx = $t, Y.jsxs = Ft;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ce.exports = Lt() : ce.exports = qt();
var d = ce.exports;
const Nt = "_spice_wrapper_1b9je_1", Wt = "_spice_wrapper_hidden_1b9je_10", We = {
  spice_wrapper: Nt,
  spice_wrapper_hidden: Wt
}, Be = N(!0), Ue = N((o) => !o), Mt = ({ children: o }) => {
  const [t, i] = $(!0);
  return /* @__PURE__ */ d.jsx(Be.Provider, { value: t, children: /* @__PURE__ */ d.jsx(Ue.Provider, { value: i, children: o }) });
}, kt = ({ children: o }) => {
  const t = W(Be);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${We.spice_wrapper} ${t ? We.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Ir = ({ children: o }) => /* @__PURE__ */ d.jsx(Mt, { children: /* @__PURE__ */ d.jsx(kt, { children: o }) }), Vt = () => W(Ue), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", ie = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, $r = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const s = Vt();
  return j(() => (r && s(() => !1), () => {
    s(() => !0);
  }), []), /* @__PURE__ */ d.jsxs("div", { className: o || "", children: [
    i.index === 1 && /* @__PURE__ */ d.jsx("div", { className: ie.spice_aside_main, children: t }),
    /* @__PURE__ */ d.jsx(
      "aside",
      {
        className: `${ie.spice_aside_aside} ${i.className ? i.className : ""}`,
        children: i.chidren
      }
    ),
    i.index === 0 && /* @__PURE__ */ d.jsx("div", { className: ie.spice_aside_main, children: t })
  ] });
}, Bt = "_spice_form_input_yxowj_1", Ut = "_spice_form_select_yxowj_2", Ht = "_spice_form_radioCheckInput_yxowj_8", ue = {
  spice_form_input: Bt,
  spice_form_select: Ut,
  spice_form_radioCheckInput: Ht
}, Me = ({
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
  const i = t.options.map((a) => /* @__PURE__ */ d.jsx("option", { value: a, children: a }, a)), r = () => {
    const a = t.defaultValue;
    return a ? /* @__PURE__ */ d.jsx("option", { hidden: !0, children: a }) : null;
  }, s = () => {
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
      defaultValue: s(),
      children: [
        /* @__PURE__ */ d.jsx(r, {}),
        i
      ]
    }
  );
}, ke = ({
  layoutType: o,
  formPropsArr: t,
  label: i,
  FormItem: r,
  errors: s
}) => {
  const a = (l) => !s || !s[l] ? null : s[l];
  if (o === "block")
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      i && /* @__PURE__ */ d.jsx("label", { htmlFor: t[0].id, children: i }),
      /* @__PURE__ */ d.jsx(r, { formProps: t[0] }),
      a(0)
    ] });
  if (o === "flex")
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
  if (o === "radio-check") {
    const l = t.map((u) => /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx(
        r,
        {
          formProps: u,
          className: ue.spice_form_radioCheckInput
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
}, Fr = ({
  className: o,
  label: t,
  formProps: i,
  errors: r
}) => {
  const s = i, a = s[0].type, l = s.length, u = !!s[0].isSelect, p = !!s[0].isTextarea;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const v = (w) => ke({
    layoutType: l === 1 ? "block" : "flex",
    formPropsArr: s,
    label: t,
    FormItem: w,
    errors: r
  }), m = () => u ? v(Gt) : p ? v(Jt) : a === "radio" || a === "checkbox" ? ke({
    layoutType: "radio-check",
    formPropsArr: s,
    label: t,
    FormItem: Me,
    errors: r
  }) : v(Me);
  return /* @__PURE__ */ d.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ d.jsx(m, {}) });
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
}, Dr = ({
  position: o,
  parent: t,
  content: i,
  callback: r,
  className: s
}) => {
  const a = R(null), l = R(!1), [u, p] = $(!1), [v, m] = $(!0);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      onMouseEnter: () => {
        l.current = !0, m(!1), p(!0), r != null && r.enter && r.enter(a.current);
      },
      onMouseLeave: async () => {
        l.current = !1, m(!0), r != null && r.leave && await le(r.leave(a.current)), l.current || p(!1);
      },
      className: `${z.spice_dropdown_wrapper} ${s || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: a,
            className: `${z.spice_dropdown_content} ${u ? "" : z.spice_dropdown_content_hidden} ${v ? z.spice_dropdown_content_pointerPrevent : ""} ${z["spice_dropdown_" + o]}`,
            children: i.children
          }
        )
      ]
    }
  );
}, er = (o) => {
  o > 60 && (o = 60);
  const t = Math.floor(1e3 / o);
  let i = performance.now();
  const r = (l) => {
    const u = l - i, p = u <= t;
    return p || (i = l - u % t), p;
  }, s = {
    callback: null,
    isPlay: !1,
    id: 0
  }, a = (l) => {
    s.id = requestAnimationFrame(a), !r(l) && s.callback && s.isPlay && s.callback();
  };
  return j(() => (s.id = requestAnimationFrame(a), () => {
    cancelAnimationFrame(s.id);
  }), []), (l, u) => {
    if (l === "play") {
      if (!u) {
        console.warn("Callback function is required when 'play'");
        return;
      }
      s.callback = u, s.isPlay = !0;
    } else
      l === "pause" && (s.isPlay = !1);
  };
}, tr = "_spice_magnet_stopPropagation_99wvn_1", rr = {
  spice_magnet_stopPropagation: tr
}, Ar = ({
  className: o,
  children: t,
  callback: i,
  fps: r = 60,
  stopPropagation: s = !1
}) => {
  const a = R(null), l = R(null), u = R(), p = er(r), v = {
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
      i.move(v);
    });
  }, D = (P) => {
    P.stopPropagation(), w(P);
  }, B = (P) => {
    P.stopPropagation(), p("pause"), i.leave && i.leave(v);
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
          className: s ? rr.spice_magnet_stopPropagation : "",
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
  let s = r.includes(o), a = typeof o == "number" && o > 0;
  if (!s && !a)
    throw new Error(
      `Invalid ratio value. The 'ratio' argument should be either ${r.join(
        " | "
      )} or a number greater than 0.`
    );
  return /* @__PURE__ */ d.jsx("div", { className: `${se.spice_bgImg_wrapper} ${i || ""}`, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      className: `${se.spice_bgImg_view} ${s ? se["spice_bgImg_" + o] : ""}`,
      style: a ? { paddingTop: `${o}%` } : {},
      children: t
    }
  ) });
}, Ve = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, qr = ({ children: o, className: t, dialog: i, callback: r }) => {
  const s = R(null), a = () => {
    Ve("add"), s.current.showModal(), r != null && r.open && r.open(s.current);
  }, l = async () => {
    r != null && r.close && await le(r.close(s.current)), Ve("remove"), s.current.close();
  };
  return j(() => {
    const u = s.current.querySelectorAll(".spice__modal_close");
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
}, He = N(dr), Ge = N(
  () => {
  }
), fr = ({ children: o, defaultValue: t }) => {
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
  return /* @__PURE__ */ d.jsx(He.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Ge.Provider, { value: r, children: o }) });
}, Je = () => W(He), de = () => W(Ge), pr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = de(), s = Je(), a = () => {
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
      children: o
    }
  );
}, _r = "_spice_tab_hidden_1r0oa_1", vr = {
  spice_tab_hidden: _r
}, Ke = ({ content: o, isOpen: t }) => {
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
  const s = R(!0), a = R(null), l = de(), u = Je();
  return j(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!u.isAnimation) {
      u.current === t && !u.isLeaving && r != null && r.reset && r.reset(a.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.close && await le(r.close(a.current)), l((p) => ({
      isLeaving: !1,
      isAnimation: !0,
      prev: "",
      current: p.next,
      next: ""
    }))))(), u.current === t && !u.isLeaving && r != null && r.open && r.open(a.current);
  }, [u, l, r, t]), j(() => {
    Ke({
      content: a.current,
      isOpen: u.current === t
    });
  }, [u, t]), /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: a,
      className: `${u.current !== t ? vr.spice_tab_hidden : ""} ${i || ""}`,
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": u.current !== t,
      children: o
    }
  );
}, hr = () => {
  const o = de();
  return (t, i) => {
    o((r) => ({
      isAnimation: i,
      isLeaving: i,
      prev: i ? r.current : "",
      next: i ? t : "",
      current: i ? r.current : t
    }));
  };
}, Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: pr,
  Content: gr,
  Context: fr,
  useTabSwitch: hr
}, Symbol.toStringTag, { value: "Module" })), mr = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Xe = N(mr), Qe = N(() => {
}), wr = ({ children: o, defaultValue: t }) => {
  const [i, r] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ d.jsx(Xe.Provider, { value: i, children: /* @__PURE__ */ d.jsx(Qe.Provider, { value: r, children: o }) });
}, Ze = () => W(Xe), br = () => W(Qe), yr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = Ze(), s = br(), a = !!r.defaultValue.find(
    (p) => p === t
  ), [l, u] = $(a);
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: i || "",
      onClick: () => {
        s((p) => ({
          ...p,
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
}, xr = "_spice_accordion_content_1wkzs_1", Er = "_spice_accordion_hidden_1wkzs_5", Ye = {
  spice_accordion_content: xr,
  spice_accordion_hidden: Er
}, Rr = ({
  targetRef: o,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const s = R(0), a = R(!0);
  j(() => {
    const l = new ResizeObserver((p) => {
      clearTimeout(s.current), s.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t(p[0].target);
      }, i);
    }), u = o.current;
    if (u)
      return l.observe(u), () => {
        l.unobserve(u), clearTimeout(s.current);
      };
  }, r);
}, jr = ({ value: o, callback: t, children: i, className: r }) => {
  if (o === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const s = R(!0), a = R(null), l = R(null), u = Ze(), p = !!u.defaultValue.find(
    (w) => w === o
  ), [v, m] = $(p);
  return j(() => {
    u.target === o && m(!v);
  }, [u.target, u.toggle]), j(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    const w = {
      height: l.current.getBoundingClientRect().height,
      target: a.current
    };
    v ? t.open(w) : t.close(w);
  }, [v]), j(() => {
    Ke({ content: a.current, isOpen: v });
  }, [v]), Rr({
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
      className: `${Ye.spice_accordion_content} ${p ? "" : Ye.spice_accordion_hidden}`,
      id: `content-${o}`,
      "aria-labelledby": `button-${o}`,
      "aria-hidden": !v,
      children: /* @__PURE__ */ d.jsx("div", { ref: l, className: r || "", children: i })
    }
  );
}, Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yr,
  Content: jr,
  Context: wr
}, Symbol.toStringTag, { value: "Module" })), Mr = typeof document < "u" ? Dt : j, kr = ({
  targetRef: o,
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
  j(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const p = (m, w) => {
      m.forEach((E) => {
        E.isIntersecting && s.enter ? (s.enter(E.target), r && w.unobserve(E.target)) : !E.isIntersecting && s.leave && s.leave(E.target);
      });
    }, v = new IntersectionObserver(p, l);
    return v.observe(u), () => {
      v.unobserve(u);
    };
  }, a);
}, fe = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(0), s = R(0), a = () => {
    clearTimeout(s.current), s.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  j(() => (r.current = window.innerWidth, window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a), clearTimeout(s.current);
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
}, Or = (o) => {
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
    t && Or(s);
  };
  fe({
    callback({ initWinW: s, winW: a }) {
      o && o.forEach((l) => {
        Sr({
          initWinW: s,
          winW: a,
          threshold: l
        });
      }), r(a);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Pr();
  }, []);
}, Yr = () => {
  const [o, t] = $(null), i = () => {
    const r = window.ontouchstart, s = navigator.maxTouchPoints;
    r !== void 0 && 0 < s ? t(!0) : t(!1);
  };
  return fe({
    callback() {
      i();
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    i();
  }, []), o;
}, ae = "scroll", zr = ({
  threshold: o = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = R(null), [s, a] = At(
    (m, w) => {
      switch (w.type) {
        case ae:
          return r.current = w.payload, w.payload;
        default:
          return m;
      }
    },
    r.current
  ), l = R(0), u = R(0), p = () => window.scrollY || document.documentElement.scrollTop, v = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const m = p();
      m > l.current + o && r.current !== "down" ? a({ type: ae, payload: "down" }) : m < l.current - o && r.current !== "up" && a({ type: ae, payload: "up" }), l.current = m;
    }, t);
  };
  return j(() => (l.current = p(), window.addEventListener("scroll", v, { passive: !0 }), () => {
    window.removeEventListener("scroll", v), clearTimeout(u.current);
  }), i), s;
}, Br = ({ type: o, width: t }) => {
  const [i, r] = $(null), s = (a) => {
    switch (o) {
      case "max":
        r(t <= a);
        break;
      case "min":
        r(t >= a);
        break;
    }
  };
  return fe({
    callback: ({ winW: a }) => {
      s(a);
    },
    debounce: 100,
    dependencies: []
  }), j(() => {
    s(window.innerWidth);
  }, []), i;
};
export {
  Wr as Accordion,
  $r as AsideLayout,
  Lr as BackgroundImage,
  Dr as Dropdown,
  Fr as FormField,
  Ar as Magnet,
  qr as Modal,
  Nr as Tab,
  Ir as WrapperLayout,
  er as useAnimationFrame,
  kr as useIntersectionObserver,
  Yr as useIsTouchDevice,
  Mr as useIsomorphicLayoutEffect,
  Br as useMediaQuery,
  Rr as useResizeObserver,
  zr as useScrollDirection,
  Vr as useStarter,
  fe as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
