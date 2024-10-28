import Se, { useMemo as Ce, forwardRef as cr } from "react";
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
var je;
function fr() {
  if (je)
    return $;
  je = 1;
  var s = Se, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, h = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(y, d, x) {
    var E, j = {}, w = null, N = null;
    x !== void 0 && (w = "" + x), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (N = d.ref);
    for (E in d)
      v.call(d, E) && !m.hasOwnProperty(E) && (j[E] = d[E]);
    if (y && y.defaultProps)
      for (E in d = y.defaultProps, d)
        j[E] === void 0 && (j[E] = d[E]);
    return { $$typeof: a, type: y, key: w, ref: N, props: j, _owner: h.current };
  }
  return $.Fragment = c, $.jsx = p, $.jsxs = p, $;
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
var Te;
function dr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Se, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Q = Symbol.iterator, Oe = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var k = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, De = !1, Ae = !1, Ie = !1, $e = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === m || $e || e === h || e === x || e === E || Ie || e === N || Fe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === j || e.$$typeof === p || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case c:
          return "Portal";
        case m:
          return "Profiler";
        case h:
          return "StrictMode";
        case x:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return re(r) + ".Consumer";
          case p:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Ne(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case w: {
            var l = e, f = l._payload, u = l._init;
            try {
              return S(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, te, ne, ae, ie, oe, se, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function We() {
      {
        if (A === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, se = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
    function Ye() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: ie
            }),
            group: P({}, e, {
              value: oe
            }),
            groupCollapsed: P({}, e, {
              value: se
            }),
            groupEnd: P({}, e, {
              value: ue
            })
          });
        }
        A < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = k.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, Y;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ve();
    }
    function ce(e, r) {
      if (!e || z)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = U.current, U.current = null, We();
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
              n = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              n = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), _ = n.stack.split(`
`), g = o.length - 1, b = _.length - 1; g >= 1 && b >= 0 && o[g] !== _[b]; )
            b--;
          for (; g >= 1 && b >= 0; g--, b--)
            if (o[g] !== _[b]) {
              if (g !== 1 || b !== 1)
                do
                  if (g--, b--, b < 0 || o[g] !== _[b]) {
                    var T = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, T), T;
                  }
                while (g >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = f, Ye(), Error.prepareStackTrace = l;
      }
      var D = e ? e.displayName || e.name : "", _e = D ? W(D) : "";
      return typeof e == "function" && Y.set(e, _e), _e;
    }
    function Be(e, r, t) {
      return ce(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Me(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case x:
          return W("Suspense");
        case E:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case j:
            return V(e.type, r, t);
          case w: {
            var n = e, l = n._payload, f = n._init;
            try {
              return V(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, fe = {}, de = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, l) {
      {
        var f = Function.call.bind(B);
        for (var u in e)
          if (f(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (M(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof o), M(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, M(l), R("Failed %s type: %s", t, o.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Je(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ve(e);
    }
    var I = k.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, G;
    G = {};
    function Ke(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = S(I.current.type);
        G[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, l, f, u) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, l) {
      {
        var f, u = {}, o = null, _ = null;
        t !== void 0 && (pe(t), o = "" + t), He(r) && (pe(r.key), o = "" + r.key), Ke(r) && (_ = r.ref, Xe(r, l));
        for (f in r)
          B.call(r, f) && !Ge.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            u[f] === void 0 && (u[f] = g[f]);
        }
        if (o || _) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(u, b), _ && Qe(u, b);
        }
        return er(e, o, _, l, n, I.current, u);
      }
    }
    var K = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function me() {
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
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function nr(e) {
      {
        var r = me();
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
        var t = nr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + S(e._owner.type) + "."), F(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = Pe(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), u; !(u = f.next()).done; )
              X(u.value) && Ee(u.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var l = S(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Re(e, r, t, n, l, f) {
      {
        var u = Le(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = tr(l);
          _ ? o += _ : o += me();
          var g;
          e === null ? g = "null" : J(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var b = rr(e, r, t, l, f);
        if (b == null)
          return b;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (J(T)) {
                for (var D = 0; D < T.length; D++)
                  xe(T[D], e);
                Object.freeze && Object.freeze(T);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(T, e);
        }
        return e === v ? ir(b) : ar(b), b;
      }
    }
    function or(e, r, t) {
      return Re(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ur = sr, lr = or;
    L.Fragment = v, L.jsx = ur, L.jsxs = lr;
  }()), L;
}
process.env.NODE_ENV === "production" ? Z.exports = fr() : Z.exports = dr();
var i = Z.exports;
const vr = ({ formProps: s }) => {
  const { style: a, ...c } = s;
  return /* @__PURE__ */ i.jsx(
    "input",
    {
      ...c,
      style: {
        overflow: "hidden",
        ...a
      }
    }
  );
}, pr = ({ formProps: s }) => {
  const { isSelect: a, style: c, ...v } = s;
  if (!a)
    return;
  const h = () => {
    const p = a.defaultValue;
    return p ? /* @__PURE__ */ i.jsx("option", { hidden: !0, children: p }) : null;
  }, m = () => {
    const p = a.defaultSelectedIndex;
    if (p)
      return a.options[p];
  };
  return /* @__PURE__ */ i.jsxs(
    "select",
    {
      ...v,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...c || {}
      },
      defaultValue: m(),
      children: [
        /* @__PURE__ */ i.jsx(h, {}),
        a.options.map((p) => /* @__PURE__ */ i.jsx("option", { value: p, children: p }, p))
      ]
    }
  );
}, hr = {
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  border: "0",
  padding: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  zIndex: "-99999"
}, gr = ({
  layoutType: s,
  formPropsArr: a,
  label: c,
  FormItem: v,
  errors: h
}) => {
  const m = ({ index: p }) => h ? Array.isArray(h) ? h[p] : h : null;
  if (s === "block")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      c && /* @__PURE__ */ i.jsx("label", { htmlFor: a[0].id, children: c }),
      /* @__PURE__ */ i.jsx(v, { formProps: a[0] }),
      /* @__PURE__ */ i.jsx(m, { index: 0 })
    ] });
  if (s === "flex")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      c && /* @__PURE__ */ i.jsx("label", { htmlFor: a[0].id, children: c }),
      /* @__PURE__ */ i.jsxs("ul", { children: [
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(v, { formProps: a[0] }),
          /* @__PURE__ */ i.jsx(m, { index: 0 })
        ] }),
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(v, { formProps: a[1] }),
          /* @__PURE__ */ i.jsx(m, { index: 1 })
        ] })
      ] })
    ] });
  if (s === "radio-check") {
    const p = a.map(
      ({ id: y, value: d, style: x, optionLabel: E, ...j }) => /* @__PURE__ */ i.jsxs("li", { children: [
        /* @__PURE__ */ i.jsx(
          v,
          {
            formProps: {
              id: y,
              value: d,
              style: {
                ...hr,
                ...x || {}
              },
              ...j
            }
          }
        ),
        /* @__PURE__ */ i.jsx("label", { htmlFor: y, children: E || d })
      ] }, y)
    );
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      c && /* @__PURE__ */ i.jsx("label", { children: c }),
      /* @__PURE__ */ i.jsx("ul", { children: p }),
      /* @__PURE__ */ i.jsx(m, { index: 0 })
    ] });
  }
}, br = ({ formProps: s }) => {
  const { isTextarea: a, ...c } = s;
  if (a)
    return /* @__PURE__ */ i.jsx("textarea", { ...c, ...a });
}, xr = ({
  label: s,
  formProps: a,
  errors: c,
  ...v
}) => {
  if (c && Array.isArray(c) && c.length > 2)
    throw new Error("The length of error is up to 2.");
  const h = Array.isArray(a) ? a : [a], { type: m, isSelect: p, isTextarea: y } = h[0], d = h.length;
  if (!(m === "radio" || m === "checkbox") && d > 2)
    throw new Error("The length of formProps is up to 2.");
  const x = ["radio", "checkbox"].includes(m || "") ? "radio-check" : d === 1 ? "block" : "flex";
  return /* @__PURE__ */ i.jsx("fieldset", { ...v, children: /* @__PURE__ */ i.jsx(
    gr,
    {
      layoutType: x,
      formPropsArr: h,
      label: s,
      errors: c,
      FormItem: p ? pr : y ? br : vr
    }
  ) });
}, O = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (s) => s === `
` || s === "###br###",
  isSpecificBreak: (s) => s.match(/###br\.(.*?)###/),
  getClassName: (s) => {
    var a;
    return ((a = s.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : a[0]) || "";
  }
}, mr = (s) => Ce(
  () => s.split(O.regex).map((a, c) => O.isRegularBreak(a) ? /* @__PURE__ */ i.jsx("br", {}, c) : O.isSpecificBreak(a) ? /* @__PURE__ */ i.jsx(
    "br",
    {
      className: O.getClassName(a)
    },
    c
  ) : a),
  [s]
), Rr = ({
  text: s
}) => {
  const a = mr(s);
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: a });
}, we = ({
  containerProps: s,
  ...a
}) => s ? /* @__PURE__ */ i.jsx("span", { ...s, children: /* @__PURE__ */ i.jsx("span", { ...a }) }) : /* @__PURE__ */ i.jsx("span", { ...a }), _r = ({
  type: s = "chars",
  text: a,
  exception: c,
  containerProps: v,
  ...h
}) => {
  const m = s === "chars" ? "" : " ";
  return Ce(
    () => a.split(O.regex).flatMap((y, d) => O.isRegularBreak(y) ? [null, /* @__PURE__ */ i.jsx("br", {}, d)] : O.isSpecificBreak(y) ? [
      null,
      /* @__PURE__ */ i.jsx(
        "br",
        {
          className: O.getClassName(y)
        },
        d
      )
    ] : [
      ...y.split(m).map((x, E) => {
        if (c) {
          const j = c.find(
            (w) => w.selector === x
          );
          if (j)
            return /* @__PURE__ */ i.jsx(
              we,
              {
                containerProps: v,
                ...h,
                ...j.attributes,
                children: x
              },
              `${d}-${E}`
            );
        }
        return /* @__PURE__ */ i.jsx(
          we,
          {
            containerProps: v,
            ...h,
            children: x === " " ? " " : x
          },
          `${d}-${E}`
        );
      }),
      null
    ]),
    [m, a, h, c, v]
  );
}, yr = cr((s, a) => {
  const { fill: c, style: v, ...h } = s;
  return /* @__PURE__ */ i.jsx(
    "video",
    {
      ref: a,
      style: c ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...v
      } : v,
      ...h
    }
  );
});
yr.displayName = "Video";
export {
  Rr as CustomBreakLineParser,
  O as CustomBreakLineUtils,
  xr as FormField,
  _r as SplitText,
  yr as Video,
  mr as useParseBreakLine
};
//# sourceMappingURL=spice.js.map
