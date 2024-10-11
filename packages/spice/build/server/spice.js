import Pe, { useMemo as Q, useCallback as Te, forwardRef as vr } from "react";
var Z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function pr() {
  if (we)
    return $;
  we = 1;
  var o = Pe, n = Symbol.for("react.element"), l = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(x, v, E) {
    var m, R = {}, w = null, N = null;
    E !== void 0 && (w = "" + E), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (N = v.ref);
    for (m in v)
      h.call(v, m) && !y.hasOwnProperty(m) && (R[m] = v[m]);
    if (x && x.defaultProps)
      for (m in v = x.defaultProps, v)
        R[m] === void 0 && (R[m] = v[m]);
    return { $$typeof: n, type: x, key: w, ref: N, props: R, _owner: d.current };
  }
  return $.Fragment = l, $.jsx = p, $.jsxs = p, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function hr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Pe, n = Symbol.for("react.element"), l = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), x = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ee = Symbol.iterator, Fe = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ie = !1, $e = !1, Le = !1, Ne = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === y || We || e === d || e === E || e === m || Ne || e === N || Ie || $e || Le || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === p || e.$$typeof === x || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case l:
          return "Portal";
        case y:
          return "Profiler";
        case d:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return te(r) + ".Consumer";
          case p:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case w: {
            var c = e, f = c._payload, u = c._init;
            try {
              return S(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, A = 0, ne, ae, ie, oe, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        A++;
      }
    }
    function Be() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ne
            }),
            info: k({}, e, {
              value: ae
            }),
            warn: k({}, e, {
              value: ie
            }),
            error: k({}, e, {
              value: oe
            }),
            group: k({}, e, {
              value: se
            }),
            groupCollapsed: k({}, e, {
              value: ue
            }),
            groupEnd: k({}, e, {
              value: le
            })
          });
        }
        A < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = U.current, U.current = null, Me();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              a = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), j = a.stack.split(`
`), g = s.length - 1, b = j.length - 1; g >= 1 && b >= 0 && s[g] !== j[b]; )
            b--;
          for (; g >= 1 && b >= 0; g--, b--)
            if (s[g] !== j[b]) {
              if (g !== 1 || b !== 1)
                do
                  if (g--, b--, b < 0 || s[g] !== j[b]) {
                    var T = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (g >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = f, Be(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", je = D ? W(D) : "";
      return typeof e == "function" && V.set(e, je), je;
    }
    function qe(e, r, t) {
      return fe(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, ze(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case E:
          return W("Suspense");
        case m:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return qe(e.render);
          case R:
            return Y(e.type, r, t);
          case w: {
            var a = e, c = a._payload, f = a._init;
            try {
              return Y(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, c) {
      {
        var f = Function.call.bind(M);
        for (var u in e)
          if (f(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (B(c), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof s), B(null)), s instanceof Error && !(s.message in de) && (de[s.message] = !0, B(c), _("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var Ge = Array.isArray;
    function J(e) {
      return Ge(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (He(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var I = P.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, G;
    G = {};
    function Ze(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = S(I.current.type);
        G[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), G[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, c, f, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ar(e, r, t, a, c) {
      {
        var f, u = {}, s = null, j = null;
        t !== void 0 && (he(t), s = "" + t), Qe(r) && (he(r.key), s = "" + r.key), Ze(r) && (j = r.ref, er(r, c));
        for (f in r)
          M.call(r, f) && !Xe.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            u[f] === void 0 && (u[f] = g[f]);
        }
        if (s || j) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && rr(u, b), j && tr(u, b);
        }
        return nr(e, s, j, c, a, I.current, u);
      }
    }
    var K = P.ReactCurrentOwner, me = P.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function be() {
      {
        if (K.current) {
          var e = S(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function or(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + S(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && Ee(a, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = De(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              X(u.value) && Ee(u.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var c = S(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function _e(e, r, t, a, c, f) {
      {
        var u = Ve(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ir(c);
          j ? s += j : s += be();
          var g;
          e === null ? g = "null" : J(e) ? g = "array" : e !== void 0 && e.$$typeof === n ? (g = "<" + (S(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var b = ar(e, r, t, c, f);
        if (b == null)
          return b;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (J(T)) {
                for (var D = 0; D < T.length; D++)
                  Re(T[D], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(T, e);
        }
        return e === h ? ur(b) : sr(b), b;
      }
    }
    function lr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function cr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    L.Fragment = h, L.jsx = fr, L.jsxs = dr;
  }()), L;
}
process.env.NODE_ENV === "production" ? Z.exports = pr() : Z.exports = hr();
var i = Z.exports;
const Ce = ({ formProps: o }) => {
  const { style: n, ...l } = o;
  return /* @__PURE__ */ i.jsx(
    "input",
    {
      ...l,
      style: {
        overflow: "hidden",
        ...n
      }
    }
  );
}, gr = ({ formProps: o }) => {
  const { isSelect: n, style: l, ...h } = o;
  if (!n)
    return;
  const d = () => {
    const p = n.defaultValue;
    return p ? /* @__PURE__ */ i.jsx("option", { hidden: !0, children: p }) : null;
  }, y = () => {
    const p = n.defaultSelectedIndex;
    if (p)
      return n.options[p];
  };
  return /* @__PURE__ */ i.jsxs(
    "select",
    {
      ...h,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...l || {}
      },
      defaultValue: y(),
      children: [
        /* @__PURE__ */ i.jsx(d, {}),
        n.options.map((p) => /* @__PURE__ */ i.jsx("option", { value: p, children: p }, p))
      ]
    }
  );
}, Oe = ({
  layoutType: o,
  formPropsArr: n,
  label: l,
  FormItem: h,
  errors: d
}) => {
  const y = ({ index: p }) => d ? Array.isArray(d) ? d[p] : d : null;
  if (o === "block")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { htmlFor: n[0].id, children: l }),
      /* @__PURE__ */ i.jsx(h, { formProps: n[0] }),
      /* @__PURE__ */ i.jsx(y, { index: 0 })
    ] });
  if (o === "flex")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { htmlFor: n[0].id, children: l }),
      /* @__PURE__ */ i.jsxs("ul", { children: [
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(h, { formProps: n[0] }),
          /* @__PURE__ */ i.jsx(y, { index: 0 })
        ] }),
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(h, { formProps: n[1] }),
          /* @__PURE__ */ i.jsx(y, { index: 1 })
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const p = n.map(
      ({ id: x, value: v, style: E, optionLabel: m, ...R }) => /* @__PURE__ */ i.jsxs("li", { children: [
        /* @__PURE__ */ i.jsx(
          h,
          {
            formProps: {
              id: x,
              value: v,
              style: {
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                border: "0",
                padding: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                zIndex: "-99999",
                ...E || {}
              },
              ...R
            }
          }
        ),
        /* @__PURE__ */ i.jsx("label", { htmlFor: x, children: m || v })
      ] }, x)
    );
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { children: l }),
      /* @__PURE__ */ i.jsx("ul", { children: p }),
      /* @__PURE__ */ i.jsx(y, { index: 0 })
    ] });
  }
}, yr = ({ formProps: o }) => {
  const { isTextarea: n, ...l } = o;
  if (n)
    return /* @__PURE__ */ i.jsx("textarea", { ...l, ...n });
}, Er = ({
  label: o,
  formProps: n,
  errors: l,
  ...h
}) => {
  const d = Q(
    () => Array.isArray(n) ? n : [n],
    [n]
  ), y = d[0].type, p = d.length, x = !!d[0].isSelect, v = !!d[0].isTextarea;
  if (!(y === "radio" || y === "checkbox") && p > 2)
    throw new Error("The length of formProps is up to 2.");
  if (l && Array.isArray(l) && l.length > 2)
    throw new Error("The length of error is up to 2.");
  const E = Te(
    (R) => Oe({
      layoutType: p === 1 ? "block" : "flex",
      formPropsArr: d,
      label: o,
      FormItem: R,
      errors: l
    }),
    [l, d, o, p]
  ), m = Te(() => x ? E(gr) : v ? E(yr) : y === "radio" || y === "checkbox" ? Oe({
    layoutType: "radio-check",
    formPropsArr: d,
    label: o,
    FormItem: Ce,
    errors: l
  }) : E(Ce), [l, d, o, x, v, E, y]);
  return /* @__PURE__ */ i.jsx("fieldset", { ...h, children: /* @__PURE__ */ i.jsx(m, {}) });
}, O = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (o) => o === `
` || o === "###br###",
  isSpecificBreak: (o) => o.match(/###br\.(.*?)###/),
  getClassName: (o) => {
    var n;
    return ((n = o.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : n[0]) || "";
  }
}, mr = (o) => Q(
  () => o.split(O.regex).map((n, l) => O.isRegularBreak(n) ? /* @__PURE__ */ i.jsx("br", {}, l) : O.isSpecificBreak(n) ? /* @__PURE__ */ i.jsx(
    "br",
    {
      className: O.getClassName(n)
    },
    l
  ) : n),
  [o]
), Rr = ({
  text: o
}) => {
  const n = mr(o);
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: n });
}, ke = ({
  containerProps: o,
  ...n
}) => o ? /* @__PURE__ */ i.jsx("span", { ...o, children: /* @__PURE__ */ i.jsx("span", { ...n }) }) : /* @__PURE__ */ i.jsx("span", { ...n }), _r = ({
  type: o = "chars",
  text: n,
  exception: l,
  containerProps: h,
  ...d
}) => {
  const y = o === "chars" ? "" : " ";
  return Q(
    () => n.split(O.regex).flatMap((x, v) => O.isRegularBreak(x) ? [null, /* @__PURE__ */ i.jsx("br", {}, v)] : O.isSpecificBreak(x) ? [
      null,
      /* @__PURE__ */ i.jsx(
        "br",
        {
          className: O.getClassName(x)
        },
        v
      )
    ] : [
      ...x.split(y).map((E, m) => {
        if (l) {
          const R = l.find(
            (w) => w.selector === E
          );
          if (R)
            return /* @__PURE__ */ i.jsx(
              ke,
              {
                containerProps: h,
                ...d,
                ...R.attributes,
                children: E
              },
              `${v}-${m}`
            );
        }
        return /* @__PURE__ */ i.jsx(
          ke,
          {
            containerProps: h,
            ...d,
            children: E === " " ? " " : E
          },
          `${v}-${m}`
        );
      }),
      null
    ]),
    [y, n, d, l, h]
  );
}, br = vr((o, n) => {
  const { fill: l, style: h, ...d } = o;
  return /* @__PURE__ */ i.jsx(
    "video",
    {
      ref: n,
      style: l ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "transparent",
        ...h
      } : h,
      ...d
    }
  );
});
br.displayName = "Video";
const jr = ({
  focusTarget: o
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    onFocus: () => {
      var n;
      return (n = o.current) == null ? void 0 : n.focus();
    },
    tabIndex: 0,
    style: {
      opacity: 0,
      width: 0,
      height: 0,
      position: "absolute",
      zIndex: "-99999999",
      pointerEvents: "none"
    }
  }
);
export {
  Rr as CustomBreakLineParser,
  O as CustomBreakLineUtils,
  jr as FocusTrap,
  Er as FormField,
  _r as SplitText,
  br as Video,
  mr as useParseBreakLine
};
//# sourceMappingURL=spice.js.map
