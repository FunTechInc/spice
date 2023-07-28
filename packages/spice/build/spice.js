import ze, { createContext as W, useState as $, useContext as M, useEffect as R, useRef as j, useLayoutEffect as Dt, useReducer as At } from "react";
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
var Ne;
function Lt() {
  if (Ne)
    return V;
  Ne = 1;
  var o = ze, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(u, f, _) {
    var m, w = {}, y = null, D = null;
    _ !== void 0 && (y = "" + _), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (m in f)
      r.call(f, m) && !s.hasOwnProperty(m) && (w[m] = f[m]);
    if (u && u.defaultProps)
      for (m in f = u.defaultProps, f)
        w[m] === void 0 && (w[m] = f[m]);
    return { $$typeof: t, type: u, key: y, ref: D, props: w, _owner: a.current };
  }
  return V.Fragment = i, V.jsx = d, V.jsxs = d, V;
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
var We;
function Nt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var o = ze, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, P = "@@iterator";
    function et(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = B && e[B] || e[P];
      return typeof n == "function" ? n : null;
    }
    var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          c[p - 1] = arguments[p];
        tt("error", e, c);
      }
    }
    function tt(e, n, c) {
      {
        var p = A.ReactDebugCurrentFrame, h = p.getStackAddendum();
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
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === s || st || e === a || e === _ || e === m || it || e === D || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === w || e.$$typeof === d || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function ct(e, n, c) {
      var p = e.displayName;
      if (p)
        return p;
      var h = n.displayName || n.name || "";
      return h !== "" ? c + "(" + h + ")" : c;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function O(e) {
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
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case _:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return _e(n) + ".Consumer";
          case d:
            var c = e;
            return _e(c._context) + ".Provider";
          case f:
            return ct(e, e.render, "ForwardRef");
          case w:
            var p = e.displayName || null;
            return p !== null ? p : O(e.type) || "Memo";
          case y: {
            var h = e, b = h._payload, g = h._init;
            try {
              return O(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, q = 0, ve, ge, he, me, we, be, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function ut() {
      {
        if (q === 0) {
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
        q++;
      }
    }
    function lt() {
      {
        if (q--, q === 0) {
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
        q < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, Q;
    function U(e, n, c) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (h) {
            var p = h.stack.trim().match(/\n( *(at )?)/);
            Q = p && p[1] || "";
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
      var p;
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
              p = I;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              p = I;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            p = I;
          }
          e();
        }
      } catch (I) {
        if (I && p && typeof I.stack == "string") {
          for (var v = I.stack.split(`
`), T = p.stack.split(`
`), x = v.length - 1, E = T.length - 1; x >= 1 && E >= 0 && v[x] !== T[E]; )
            E--;
          for (; x >= 1 && E >= 0; x--, E--)
            if (v[x] !== T[E]) {
              if (x !== 1 || E !== 1)
                do
                  if (x--, E--, E < 0 || v[x] !== T[E]) {
                    var C = `
` + v[x].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (x >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = b, lt(), Error.prepareStackTrace = h;
      }
      var N = e ? e.displayName || e.name : "", Le = N ? U(N) : "";
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
        case _:
          return U("Suspense");
        case m:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ft(e.render);
          case w:
            return G(e.type, n, c);
          case y: {
            var p = e, h = p._payload, b = p._init;
            try {
              return G(b(h), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, je = {}, Re = A.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        Re.setExtraStackFrame(c);
      } else
        Re.setExtraStackFrame(null);
    }
    function _t(e, n, c, p, h) {
      {
        var b = Function.call.bind(J);
        for (var g in e)
          if (b(e, g)) {
            var v = void 0;
            try {
              if (typeof e[g] != "function") {
                var T = Error((p || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = e[g](n, g, p, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              v = x;
            }
            v && !(v instanceof Error) && (K(h), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", c, g, typeof v), K(null)), v instanceof Error && !(v.message in je) && (je[v.message] = !0, K(h), S("Failed %s type: %s", c, v.message), K(null));
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
    }, Pe, Ce, te;
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
        var c = O(k.current.type);
        te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(k.current.type), e.ref), te[c] = !0);
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
          Ce || (Ce = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var jt = function(e, n, c, p, h, b, g) {
      var v = {
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
        value: h
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Rt(e, n, c, p, h) {
      {
        var b, g = {}, v = null, T = null;
        c !== void 0 && (Te(c), v = "" + c), bt(n) && (Te(n.key), v = "" + n.key), wt(n) && (T = n.ref, yt(n, h));
        for (b in n)
          J.call(n, b) && !mt.hasOwnProperty(b) && (g[b] = n[b]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (b in x)
            g[b] === void 0 && (g[b] = x[b]);
        }
        if (v || T) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && xt(g, E), T && Et(g, E);
        }
        return jt(e, v, T, h, p, k.current, g);
      }
    }
    var re = A.ReactCurrentOwner, Oe = A.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var n = e._owner, c = G(e.type, e._source, n ? n.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ie() {
      {
        if (re.current) {
          var e = O(re.current.type);
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
        var p = "";
        e && e._owner && e._owner !== re.current && (p = " It was passed a child from " + O(e._owner.type) + "."), L(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, p), L(null);
      }
    }
    function De(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var c = 0; c < e.length; c++) {
            var p = e[c];
            oe(p) && Fe(p, n);
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
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === w))
          c = n.propTypes;
        else
          return;
        if (c) {
          var p = O(n);
          _t(c, e.props, "prop", p, e);
        } else if (n.PropTypes !== void 0 && !ne) {
          ne = !0;
          var h = O(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var p = n[c];
          if (p !== "children" && p !== "key") {
            L(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ae(e, n, c, p, h, b) {
      {
        var g = at(e);
        if (!g) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(h);
          T ? v += T : v += Ie();
          var x;
          e === null ? x = "null" : ee(e) ? x = "array" : e !== void 0 && e.$$typeof === t ? (x = "<" + (O(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, v);
        }
        var E = Rt(e, n, c, h, b);
        if (E == null)
          return E;
        if (g) {
          var C = n.children;
          if (C !== void 0)
            if (p)
              if (ee(C)) {
                for (var N = 0; N < C.length; N++)
                  De(C[N], e);
                Object.freeze && Object.freeze(C);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(C, e);
        }
        return e === r ? Ct(E) : Pt(E), E;
      }
    }
    function Ot(e, n, c) {
      return Ae(e, n, c, !0);
    }
    function It(e, n, c) {
      return Ae(e, n, c, !1);
    }
    var $t = It, Ft = Ot;
    Y.Fragment = r, Y.jsx = $t, Y.jsxs = Ft;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ce.exports = Lt() : ce.exports = Nt();
var l = ce.exports;
const Wt = "_spice_wrapper_1b9je_1", Mt = "_spice_wrapper_hidden_1b9je_10", Me = {
  spice_wrapper: Wt,
  spice_wrapper_hidden: Mt
}, Be = W(!0), Ue = W((o) => !o), qt = ({ children: o }) => {
  const [t, i] = $(!0);
  return /* @__PURE__ */ l.jsx(Be.Provider, { value: t, children: /* @__PURE__ */ l.jsx(Ue.Provider, { value: i, children: o }) });
}, kt = ({ children: o }) => {
  const t = M(Be);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `${Me.spice_wrapper} ${t ? Me.spice_wrapper_hidden : ""}`,
      children: o
    }
  );
}, Ir = ({ children: o }) => /* @__PURE__ */ l.jsx(qt, { children: /* @__PURE__ */ l.jsx(kt, { children: o }) }), Vt = () => M(Ue), Yt = "_spice_aside_aside_4cj7n_1", zt = "_spice_aside_main_4cj7n_5", ie = {
  spice_aside_aside: Yt,
  spice_aside_main: zt
}, $r = ({
  className: o,
  children: t,
  aside: i,
  isSticky: r = !1
}) => {
  const a = Vt();
  return R(() => (r && a(() => !1), () => {
    a(() => !0);
  }), []), /* @__PURE__ */ l.jsxs("div", { className: o || "", children: [
    i.index === 1 && /* @__PURE__ */ l.jsx("div", { className: ie.spice_aside_main, children: t }),
    /* @__PURE__ */ l.jsx(
      "aside",
      {
        className: `${ie.spice_aside_aside} ${i.className ? i.className : ""}`,
        children: i.chidren
      }
    ),
    i.index === 0 && /* @__PURE__ */ l.jsx("div", { className: ie.spice_aside_main, children: t })
  ] });
}, Bt = "_spice_form_input_yxowj_1", Ut = "_spice_form_select_yxowj_2", Ht = "_spice_form_radioCheckInput_yxowj_8", ue = {
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
    className: `${ue.spice_form_input} ${t || ""}`
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
      className: ue.spice_form_select,
      defaultValue: a(),
      children: [
        /* @__PURE__ */ l.jsx(r, {}),
        i
      ]
    }
  );
}, ke = ({
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
          className: ue.spice_form_radioCheckInput
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
  const _ = (w) => ke({
    layoutType: d === 1 ? "block" : "flex",
    formPropsArr: a,
    label: t,
    FormItem: w,
    errors: r
  }), m = () => u ? _(Gt) : f ? _(Jt) : s === "radio" || s === "checkbox" ? ke({
    layoutType: "radio-check",
    formPropsArr: a,
    label: t,
    FormItem: qe,
    errors: r
  }) : _(qe);
  return /* @__PURE__ */ l.jsx("fieldset", { className: `${o}`, children: /* @__PURE__ */ l.jsx(m, {}) });
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
  className: a
}) => {
  const s = j(null), d = j(!1), [u, f] = $(!1), [_, m] = $(!0), w = () => {
    d.current = !0, m(!1), f(!0), r != null && r.enter && r.enter(s.current);
  }, y = async () => {
    d.current = !1, m(!0), r != null && r.leave && await le(r.leave(s.current)), d.current || f(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      onMouseEnter: w,
      onMouseLeave: y,
      onClick: y,
      className: `${z.spice_dropdown_wrapper} ${a || ""}`,
      children: [
        t.children,
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: s,
            className: `${z.spice_dropdown_content} ${u ? "" : z.spice_dropdown_content_hidden} ${_ ? z.spice_dropdown_content_pointerPrevent : ""} ${z["spice_dropdown_" + o]}`,
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
  return R(() => (s.id = requestAnimationFrame(d), () => {
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
  stopPropagation: a = !1
}) => {
  const s = j(null), d = j(null), u = j(), f = er(r), _ = {
    target: s.current,
    children: d.current,
    x: 0,
    y: 0
  }, m = (P) => {
    _.target = s.current, _.children = d.current;
  }, w = (P) => {
    u.current = P.currentTarget.getBoundingClientRect(), _.x = P.clientX - u.current.left - u.current.width / 2, _.y = P.clientY - u.current.top - u.current.height / 2;
  }, y = (P) => {
    P.stopPropagation(), m(), w(P), f("play", () => {
      i.move(_);
    });
  }, D = (P) => {
    P.stopPropagation(), w(P);
  }, B = (P) => {
    P.stopPropagation(), f("pause"), i.leave && i.leave(_);
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      onMouseEnter: y,
      onMouseMove: D,
      onMouseLeave: B,
      className: o || "",
      ref: s,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: d,
          className: a ? rr.spice_magnet_stopPropagation : "",
          children: t
        }
      )
    }
  );
}, nr = "_spice_bgImg_wrapper_164nj_1", or = "_spice_bgImg_view_164nj_5", ir = "_spice_bgImg_golden_164nj_22", sr = "_spice_bgImg_silver_164nj_26", ar = "_spice_bgImg_platinum_164nj_30", cr = "_spice_bgImg_square_164nj_38", se = {
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
  return /* @__PURE__ */ l.jsx("div", { className: `${se.spice_bgImg_wrapper} ${i || ""}`, children: /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `${se.spice_bgImg_view} ${a ? se["spice_bgImg_" + o] : ""}`,
      style: s ? { paddingTop: `${o}%` } : {},
      children: t
    }
  ) });
}, Ve = (o) => {
  const t = document.documentElement.style, i = document.body.style;
  o === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", i.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", i.overflow = "");
}, ur = "_spice_modal_dialog_1t31c_1", lr = {
  spice_modal_dialog: ur
}, Nr = ({ children: o, className: t, dialog: i, callback: r }) => {
  const a = j(null), s = () => {
    Ve("add"), a.current.showModal(), r != null && r.open && r.open(a.current);
  }, d = async () => {
    r != null && r.close && await le(r.close(a.current)), Ve("remove"), a.current.close();
  };
  return R(() => {
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
}, He = W(dr), Ge = W(
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
  return /* @__PURE__ */ l.jsx(He.Provider, { value: i, children: /* @__PURE__ */ l.jsx(Ge.Provider, { value: r, children: o }) });
}, Je = () => M(He), de = () => M(Ge), pr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = de(), a = Je(), s = () => {
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
}, Ke = ({ content: o, isOpen: t }) => {
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
  const a = j(!0), s = j(null), d = de(), u = Je(), f = u.current === t && !u.isLeaving;
  return R(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (!u.isAnimation) {
      f && r != null && r.reset && r.reset(s.current);
      return;
    }
    u.prev === t && (async () => (r != null && r.close && await le(r.close(s.current)), d((_) => ({
      ..._,
      isLeaving: !1,
      prev: "",
      current: _.next,
      next: ""
    }))))(), f && r != null && r.open && r.open(s.current);
  }, [u, d, r, t, f]), R(() => {
    Ke({
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
  const o = de();
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
}, Xe = W(mr), Qe = W(() => {
}), wr = ({ children: o, defaultValue: t }) => {
  const [i, r] = $({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ l.jsx(Xe.Provider, { value: i, children: /* @__PURE__ */ l.jsx(Qe.Provider, { value: r, children: o }) });
}, Ze = () => M(Xe), br = () => M(Qe), yr = ({ children: o, value: t, className: i }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = Ze(), a = br(), s = !!r.defaultValue.find(
    (f) => f === t
  ), [d, u] = $(s);
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
}, xr = "_spice_accordion_content_1wkzs_1", Er = "_spice_accordion_hidden_1wkzs_5", Ye = {
  spice_accordion_content: xr,
  spice_accordion_hidden: Er
}, jr = ({
  targetRef: o,
  callback: t,
  debounce: i,
  dependencies: r = []
}) => {
  const a = j(0), s = j(!0);
  R(() => {
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
  const a = j(!0), s = j(null), d = j(null), u = Ze(), f = !!u.defaultValue.find(
    (w) => w === o
  ), [_, m] = $(f);
  return R(() => {
    u.target === o && m(!_);
  }, [u.target, u.toggle]), R(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    const w = {
      height: d.current.getBoundingClientRect().height,
      target: s.current
    };
    _ ? t.open(w) : t.close(w);
  }, [_]), R(() => {
    Ke({ content: s.current, isOpen: _ });
  }, [_]), jr({
    targetRef: d,
    callback: (w) => {
      const y = w.getBoundingClientRect().height;
      _ && (s.current.style.height = `${y}px`);
    },
    dependencies: [_],
    debounce: 100
  }), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: s,
      className: `${Ye.spice_accordion_content} ${f ? "" : Ye.spice_accordion_hidden}`,
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
}, Symbol.toStringTag, { value: "Module" })), qr = typeof document < "u" ? Dt : R, kr = ({
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
  R(() => {
    const u = o == null ? void 0 : o.current;
    if (!u)
      return;
    const f = (m, w) => {
      m.forEach((y) => {
        y.isIntersecting && a.enter ? (a.enter(y.target), r && w.unobserve(y.target)) : !y.isIntersecting && a.leave && a.leave(y.target);
      });
    }, _ = new IntersectionObserver(f, d);
    return _.observe(u), () => {
      _.unobserve(u);
    };
  }, s);
}, fe = ({
  callback: o,
  debounce: t,
  dependencies: i = []
}) => {
  const r = j(0), a = j(0), s = () => {
    clearTimeout(a.current), a.current = setTimeout(() => {
      o({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  };
  R(() => (r.current = window.innerWidth, window.addEventListener("resize", s), () => {
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
  fe({
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
  }), R(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), i && process.env.NODE_ENV !== "development" && Pr();
  }, []);
}, Yr = () => {
  const [o, t] = $(null), i = () => {
    const r = window.ontouchstart, a = navigator.maxTouchPoints;
    r !== void 0 && 0 < a ? t(!0) : t(!1);
  };
  return fe({
    callback() {
      i();
    },
    debounce: 100,
    dependencies: []
  }), R(() => {
    i();
  }, []), o;
}, ae = "scroll", zr = ({
  threshold: o = 0,
  debounce: t,
  dependencies: i = []
}) => {
  const r = j(null), [a, s] = At(
    (m, w) => {
      switch (w.type) {
        case ae:
          return r.current = w.payload, w.payload;
        default:
          return m;
      }
    },
    r.current
  ), d = j(0), u = j(0), f = () => window.scrollY || document.documentElement.scrollTop, _ = () => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const m = f();
      m > d.current + o && r.current !== "down" ? s({ type: ae, payload: "down" }) : m < d.current - o && r.current !== "up" && s({ type: ae, payload: "up" }), d.current = m;
    }, t);
  };
  return R(() => (d.current = f(), window.addEventListener("scroll", _, { passive: !0 }), () => {
    window.removeEventListener("scroll", _), clearTimeout(u.current);
  }), i), a;
}, Br = ({ type: o, width: t }) => {
  const [i, r] = $(null), a = (s) => {
    switch (o) {
      case "max":
        r(t <= s);
        break;
      case "min":
        r(t >= s);
        break;
    }
  };
  return fe({
    callback: ({ winW: s }) => {
      a(s);
    },
    debounce: 100,
    dependencies: []
  }), R(() => {
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
  kr as useIntersectionObserver,
  Yr as useIsTouchDevice,
  qr as useIsomorphicLayoutEffect,
  Br as useMediaQuery,
  jr as useResizeObserver,
  zr as useScrollDirection,
  Vr as useStarter,
  fe as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
