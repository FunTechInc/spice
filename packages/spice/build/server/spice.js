import Oe, { useCallback as Z, useMemo as Pe, forwardRef as dr } from "react";
var Q = { exports: {} }, A = {};
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
function vr() {
  if (je)
    return A;
  je = 1;
  var o = Oe, a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, v, R) {
    var b, x = {}, C = null, N = null;
    R !== void 0 && (C = "" + R), v.key !== void 0 && (C = "" + v.key), v.ref !== void 0 && (N = v.ref);
    for (b in v)
      h.call(v, b) && !E.hasOwnProperty(b) && (x[b] = v[b]);
    if (m && m.defaultProps)
      for (b in v = m.defaultProps, v)
        x[b] === void 0 && (x[b] = v[b]);
    return { $$typeof: a, type: m, key: C, ref: N, props: x, _owner: p.current };
  }
  return A.Fragment = l, A.jsx = f, A.jsxs = f, A;
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
var we;
function pr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Oe, a = Symbol.for("react.element"), l = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var $e = !1, Ie = !1, Ae = !1, Le = !1, Ne = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === E || Ne || e === p || e === R || e === b || Le || e === N || $e || Ie || Ae || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === f || e.$$typeof === m || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function w(e) {
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
        case E:
          return "Profiler";
        case p:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return te(r) + ".Consumer";
          case f:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return Ve(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case C: {
            var c = e, d = c._payload, u = c._init;
            try {
              return w(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, ne, ae, ie, oe, se, ue, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if ($ === 0) {
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
        $++;
      }
    }
    function Me() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: le
            })
          });
        }
        $ < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = k.ReactCurrentDispatcher, q;
    function W(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, V;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Be();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = U.current, U.current = null, Ye();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (S) {
              n = S;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var s = S.stack.split(`
`), T = n.stack.split(`
`), g = s.length - 1, y = T.length - 1; g >= 1 && y >= 0 && s[g] !== T[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (s[g] !== T[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || s[g] !== T[y]) {
                    var j = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, j), j;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = d, Me(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", Te = D ? W(D) : "";
      return typeof e == "function" && V.set(e, Te), Te;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, qe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case R:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ue(e.render);
          case x:
            return Y(e.type, r, t);
          case C: {
            var n = e, c = n._payload, d = n._init;
            try {
              return Y(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, c) {
      {
        var d = Function.call.bind(M);
        for (var u in e)
          if (d(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var T = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              s = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (B(c), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof s), B(null)), s instanceof Error && !(s.message in de) && (de[s.message] = !0, B(c), _("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
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
      if (Ke(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var I = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, me, G;
    G = {};
    function Xe(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = w(I.current.type);
        G[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(I.current.type), e.ref), G[t] = !0);
      }
    }
    function er(e, r) {
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
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, c, d, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
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
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function nr(e, r, t, n, c) {
      {
        var d, u = {}, s = null, T = null;
        t !== void 0 && (he(t), s = "" + t), Ze(r) && (he(r.key), s = "" + r.key), Xe(r) && (T = r.ref, Qe(r, c));
        for (d in r)
          M.call(r, d) && !He.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            u[d] === void 0 && (u[d] = g[d]);
        }
        if (s || T) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && er(u, y), T && rr(u, y);
        }
        return tr(e, s, T, c, n, I.current, u);
      }
    }
    var K = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function ye() {
      {
        if (K.current) {
          var e = w(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function ir(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + w(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Fe(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), u; !(u = d.next()).done; )
              X(u.value) && Re(u.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var c = w(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function _e(e, r, t, n, c, d) {
      {
        var u = We(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ar(c);
          T ? s += T : s += ye();
          var g;
          e === null ? g = "null" : J(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var y = nr(e, r, t, c, d);
        if (y == null)
          return y;
        if (u) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (J(j)) {
                for (var D = 0; D < j.length; D++)
                  xe(j[D], e);
                Object.freeze && Object.freeze(j);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(j, e);
        }
        return e === h ? sr(y) : or(y), y;
      }
    }
    function ur(e, r, t) {
      return _e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    L.Fragment = h, L.jsx = cr, L.jsxs = fr;
  }()), L;
}
process.env.NODE_ENV === "production" ? Q.exports = vr() : Q.exports = pr();
var i = Q.exports;
const Se = ({ formProps: o }) => {
  const { style: a, ...l } = o;
  return /* @__PURE__ */ i.jsx(
    "input",
    {
      ...l,
      style: {
        overflow: "hidden",
        ...a
      }
    }
  );
}, hr = ({ formProps: o }) => {
  const { isSelect: a, style: l, ...h } = o;
  if (!a)
    return;
  const p = () => {
    const f = a.defaultValue;
    return f ? /* @__PURE__ */ i.jsx("option", { hidden: !0, children: f }) : null;
  }, E = () => {
    const f = a.defaultSelectedIndex;
    if (f)
      return a.options[f];
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
      defaultValue: E(),
      children: [
        /* @__PURE__ */ i.jsx(p, {}),
        a.options.map((f) => /* @__PURE__ */ i.jsx("option", { value: f, children: f }, f))
      ]
    }
  );
}, Ce = ({
  layoutType: o,
  formPropsArr: a,
  label: l,
  FormItem: h,
  errors: p
}) => {
  const E = Z(
    (f) => !p || !p[f] ? null : p[f],
    [p]
  );
  if (o === "block")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { htmlFor: a[0].id, children: l }),
      /* @__PURE__ */ i.jsx(h, { formProps: a[0] }),
      E(0)
    ] });
  if (o === "flex")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { htmlFor: a[0].id, children: l }),
      /* @__PURE__ */ i.jsxs("ul", { children: [
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(h, { formProps: a[0] }),
          E(0)
        ] }),
        /* @__PURE__ */ i.jsxs("li", { children: [
          /* @__PURE__ */ i.jsx(h, { formProps: a[1] }),
          E(1)
        ] })
      ] })
    ] });
  if (o === "radio-check") {
    const f = a.map(
      ({ id: m, value: v, style: R, optionLabel: b, ...x }) => /* @__PURE__ */ i.jsxs("li", { children: [
        /* @__PURE__ */ i.jsx(
          h,
          {
            formProps: {
              id: m,
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
                ...R || {}
              },
              ...x
            }
          }
        ),
        /* @__PURE__ */ i.jsx("label", { htmlFor: m, children: b || v })
      ] }, m)
    );
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      l && /* @__PURE__ */ i.jsx("label", { children: l }),
      /* @__PURE__ */ i.jsx("ul", { children: f }),
      E(0)
    ] });
  }
}, gr = ({ formProps: o }) => {
  const { isTextarea: a, ...l } = o;
  if (a)
    return /* @__PURE__ */ i.jsx("textarea", { ...l, ...a });
}, Er = ({
  label: o,
  formProps: a,
  errors: l,
  ...h
}) => {
  const p = a, E = p[0].type, f = p.length, m = !!p[0].isSelect, v = !!p[0].isTextarea;
  if (!(E === "radio" || E === "checkbox") && f > 2)
    throw new Error("The length of formProps is up to 2.");
  if (l && l.length > 2)
    throw new Error("The length of error is up to 2.");
  const R = Z(
    (x) => Ce({
      layoutType: f === 1 ? "block" : "flex",
      formPropsArr: p,
      label: o,
      FormItem: x,
      errors: l
    }),
    [l, p, o, f]
  ), b = Z(() => m ? R(hr) : v ? R(gr) : E === "radio" || E === "checkbox" ? Ce({
    layoutType: "radio-check",
    formPropsArr: p,
    label: o,
    FormItem: Se,
    errors: l
  }) : R(Se), [l, p, o, m, v, R, E]);
  return /* @__PURE__ */ i.jsx("fieldset", { ...h, children: /* @__PURE__ */ i.jsx(b, {}) });
}, O = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (o) => o === `
` || o === "###br###",
  isSpecificBreak: (o) => o.match(/###br\.(.*?)###/),
  getClassName: (o) => {
    var a;
    return ((a = o.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : a[0]) || "";
  }
}, mr = (o) => Pe(
  () => o.split(O.regex).map((a, l) => O.isRegularBreak(a) ? /* @__PURE__ */ i.jsx("br", {}, l) : O.isSpecificBreak(a) ? /* @__PURE__ */ i.jsx(
    "br",
    {
      className: O.getClassName(a)
    },
    l
  ) : a),
  [o]
), Rr = ({
  text: o
}) => {
  const a = mr(o);
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: a });
}, xr = ({
  type: o = "chars",
  text: a,
  exception: l,
  ...h
}) => {
  const p = o === "chars" ? "" : " ";
  return Pe(
    () => a.split(O.regex).flatMap((f, m) => O.isRegularBreak(f) ? [null, /* @__PURE__ */ i.jsx("br", {}, m)] : O.isSpecificBreak(f) ? [
      null,
      /* @__PURE__ */ i.jsx(
        "br",
        {
          className: O.getClassName(f)
        },
        m
      )
    ] : [
      ...f.split(p).map((v, R) => {
        if (l) {
          const b = l.find(
            (x) => x.selector === v
          );
          if (b)
            return /* @__PURE__ */ i.jsx(
              "span",
              {
                ...h,
                ...b.attributes,
                children: v
              },
              `${m}-${R}`
            );
        }
        return v === " " ? /* @__PURE__ */ i.jsx("span", { ...h, children: " " }, `${m}-${R}`) : /* @__PURE__ */ i.jsx("span", { ...h, children: v }, `${m}-${R}`);
      }),
      null
    ]),
    [p, a, h, l]
  );
}, br = dr((o, a) => {
  const { fill: l, style: h, ...p } = o;
  return /* @__PURE__ */ i.jsx(
    "video",
    {
      ref: a,
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
      ...p
    }
  );
});
br.displayName = "Video";
const _r = ({
  focusTarget: o
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    onFocus: () => {
      var a;
      return (a = o.current) == null ? void 0 : a.focus();
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
  _r as FocusTrap,
  Er as FormField,
  xr as SplitText,
  br as Video,
  mr as useParseBreakLine
};
//# sourceMappingURL=spice.js.map
