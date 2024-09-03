import Oe, { useCallback as X, useMemo as cr, forwardRef as fr } from "react";
var Z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  if (Te)
    return I;
  Te = 1;
  var d = Oe, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, v = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(g, h, R) {
    var m, _ = {}, w = null, W = null;
    R !== void 0 && (w = "" + R), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (m in h)
      c.call(h, m) && !b.hasOwnProperty(m) && (_[m] = h[m]);
    if (g && g.defaultProps)
      for (m in h = g.defaultProps, h)
        _[m] === void 0 && (_[m] = h[m]);
    return { $$typeof: i, type: g, key: w, ref: W, props: _, _owner: v.current };
  }
  return I.Fragment = l, I.jsx = s, I.jsxs = s, I;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function vr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Oe, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), g = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var P = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var p = t.map(function(u) {
          return String(u);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Fe = !1, De = !1, $e = !1, Ie = !1, Ae = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === b || Ae || e === v || e === R || e === m || Ie || e === W || Fe || De || $e || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === s || e.$$typeof === g || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case l:
          return "Portal";
        case b:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return re(r) + ".Consumer";
          case s:
            var t = e;
            return re(t._context) + ".Provider";
          case h:
            return Le(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case w: {
            var f = e, p = f._payload, u = f._init;
            try {
              return S(u(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, te, ne, ae, oe, ie, se, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ve() {
      {
        if (D === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, ue = console.groupEnd;
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
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: te
            }),
            info: C({}, e, {
              value: ne
            }),
            warn: C({}, e, {
              value: ae
            }),
            error: C({}, e, {
              value: oe
            }),
            group: C({}, e, {
              value: ie
            }),
            groupCollapsed: C({}, e, {
              value: se
            }),
            groupEnd: C({}, e, {
              value: ue
            })
          });
        }
        D < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, B;
    function L(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, V;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ne();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = U.current, U.current = null, Ve();
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
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              n = O;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var o = O.stack.split(`
`), T = n.stack.split(`
`), y = o.length - 1, E = T.length - 1; y >= 1 && E >= 0 && o[y] !== T[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (o[y] !== T[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || o[y] !== T[E]) {
                    var j = `
` + o[y].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, j), j;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = p, Ye(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", xe = F ? L(F) : "";
      return typeof e == "function" && V.set(e, xe), xe;
    }
    function Me(e, r, t) {
      return ce(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ue(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case R:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Me(e.render);
          case _:
            return Y(e.type, r, t);
          case w: {
            var n = e, f = n._payload, p = n._init;
            try {
              return Y(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, fe = {}, de = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, f) {
      {
        var p = Function.call.bind(N);
        for (var u in e)
          if (p(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var T = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              o = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              o = y;
            }
            o && !(o instanceof Error) && (M(f), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof o), M(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, M(f), x("Failed %s type: %s", t, o.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ve(e);
    }
    var $ = P.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, J;
    J = {};
    function Ke(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = S($.current.type);
        J[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S($.current.type), e.ref), J[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          be || (be = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, f, p, u) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: p
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
        value: f
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, f) {
      {
        var p, u = {}, o = null, T = null;
        t !== void 0 && (pe(t), o = "" + t), He(r) && (pe(r.key), o = "" + r.key), Ke(r) && (T = r.ref, Xe(r, f));
        for (p in r)
          N.call(r, p) && !Ge.hasOwnProperty(p) && (u[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            u[p] === void 0 && (u[p] = y[p]);
        }
        if (o || T) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(u, E), T && Qe(u, E);
        }
        return er(e, o, T, f, n, $.current, u);
      }
    }
    var G = P.ReactCurrentOwner, me = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ye() {
      {
        if (G.current) {
          var e = S(G.current.type);
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
    var ge = {};
    function nr(e) {
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
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + S(e._owner.type) + "."), k(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Pe(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), u; !(u = p.next()).done; )
              H(u.value) && Ee(u.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var f = S(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function _e(e, r, t, n, f, p) {
      {
        var u = We(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = tr(f);
          T ? o += T : o += ye();
          var y;
          e === null ? y = "null" : z(e) ? y = "array" : e !== void 0 && e.$$typeof === i ? (y = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, o);
        }
        var E = rr(e, r, t, f, p);
        if (E == null)
          return E;
        if (u) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (z(j)) {
                for (var F = 0; F < j.length; F++)
                  Re(j[F], e);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(j, e);
        }
        return e === c ? or(E) : ar(E), E;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function sr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    A.Fragment = c, A.jsx = ur, A.jsxs = lr;
  }()), A;
}
process.env.NODE_ENV === "production" ? Z.exports = dr() : Z.exports = vr();
var a = Z.exports;
const we = ({ formProps: d }) => {
  const { style: i, ...l } = d;
  return /* @__PURE__ */ a.jsx(
    "input",
    {
      ...l,
      style: {
        overflow: "hidden",
        ...i
      }
    }
  );
}, pr = ({ formProps: d }) => {
  const { isSelect: i, style: l, ...c } = d;
  if (!i)
    return;
  const v = () => {
    const s = i.defaultValue;
    return s ? /* @__PURE__ */ a.jsx("option", { hidden: !0, children: s }) : null;
  }, b = () => {
    const s = i.defaultSelectedIndex;
    if (s)
      return i.options[s];
  };
  return /* @__PURE__ */ a.jsxs(
    "select",
    {
      ...c,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...l || {}
      },
      defaultValue: b(),
      children: [
        /* @__PURE__ */ a.jsx(v, {}),
        i.options.map((s) => /* @__PURE__ */ a.jsx("option", { value: s, children: s }, s))
      ]
    }
  );
}, Se = ({
  layoutType: d,
  formPropsArr: i,
  label: l,
  FormItem: c,
  errors: v
}) => {
  const b = X(
    (s) => !v || !v[s] ? null : v[s],
    [v]
  );
  if (d === "block")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      l && /* @__PURE__ */ a.jsx("label", { htmlFor: i[0].id, children: l }),
      /* @__PURE__ */ a.jsx(c, { formProps: i[0] }),
      b(0)
    ] });
  if (d === "flex")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      l && /* @__PURE__ */ a.jsx("label", { htmlFor: i[0].id, children: l }),
      /* @__PURE__ */ a.jsxs("ul", { children: [
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(c, { formProps: i[0] }),
          b(0)
        ] }),
        /* @__PURE__ */ a.jsxs("li", { children: [
          /* @__PURE__ */ a.jsx(c, { formProps: i[1] }),
          b(1)
        ] })
      ] })
    ] });
  if (d === "radio-check") {
    const s = i.map(
      ({ id: g, value: h, style: R, optionLabel: m, ..._ }) => /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsx(
          c,
          {
            formProps: {
              id: g,
              value: h,
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
              ..._
            }
          }
        ),
        /* @__PURE__ */ a.jsx("label", { htmlFor: g, children: m || h })
      ] }, g)
    );
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      l && /* @__PURE__ */ a.jsx("label", { children: l }),
      /* @__PURE__ */ a.jsx("ul", { children: s }),
      b(0)
    ] });
  }
}, hr = ({ formProps: d }) => {
  const { isTextarea: i, ...l } = d;
  if (i)
    return /* @__PURE__ */ a.jsx("textarea", { ...l, ...i });
}, gr = ({
  label: d,
  formProps: i,
  errors: l,
  ...c
}) => {
  const v = i, b = v[0].type, s = v.length, g = !!v[0].isSelect, h = !!v[0].isTextarea;
  if (!(b === "radio" || b === "checkbox") && s > 2)
    throw new Error("The length of formProps is up to 2.");
  if (l && l.length > 2)
    throw new Error("The length of error is up to 2.");
  const R = X(
    (_) => Se({
      layoutType: s === 1 ? "block" : "flex",
      formPropsArr: v,
      label: d,
      FormItem: _,
      errors: l
    }),
    [l, v, d, s]
  ), m = X(() => g ? R(pr) : h ? R(hr) : b === "radio" || b === "checkbox" ? Se({
    layoutType: "radio-check",
    formPropsArr: v,
    label: d,
    FormItem: we,
    errors: l
  }) : R(we), [l, v, d, g, h, R, b]);
  return /* @__PURE__ */ a.jsx("fieldset", { ...c, children: /* @__PURE__ */ a.jsx(m, {}) });
}, Er = ({
  type: d = "chars",
  text: i,
  exception: l,
  ...c
}) => {
  const v = d === "chars" ? "" : " ";
  return cr(
    () => i.split(/(\n|###br\.[^#]+###|###br###)/).flatMap((s, g) => {
      var h;
      return s === `
` || s === "###br###" ? [null, /* @__PURE__ */ a.jsx("br", {}, g)] : s != null && s.match(/###br\.(.*?)###/) ? [
        null,
        /* @__PURE__ */ a.jsx(
          "br",
          {
            className: ((h = s.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : h[0]) || ""
          },
          g
        )
      ] : [
        ...s.split(v).map((R, m) => {
          if (l) {
            const _ = l.find(
              (w) => w.selector === R
            );
            if (_)
              return /* @__PURE__ */ a.jsx(
                "span",
                {
                  ...c,
                  ..._.attributes,
                  children: R
                },
                `${g}-${m}`
              );
          }
          return R === " " ? /* @__PURE__ */ a.jsx("span", { ...c, children: " " }, `${g}-${m}`) : /* @__PURE__ */ a.jsx("span", { ...c, children: R }, `${g}-${m}`);
        }),
        null
      ];
    }),
    [v, i, c, l]
  );
}, br = fr((d, i) => {
  const { fill: l, style: c, ...v } = d;
  return /* @__PURE__ */ a.jsx(
    "video",
    {
      ref: i,
      style: l ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "transparent",
        ...c
      } : c,
      ...v
    }
  );
});
br.displayName = "Video";
const Rr = ({
  focusTarget: d
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    onFocus: () => {
      var i;
      return (i = d.current) == null ? void 0 : i.focus();
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
), mr = (d) => {
  const l = d.split(/(\n|###br\.[^#]+###|###br###)/).map((c, v) => {
    var b;
    if (c === `
` || c === "###br###")
      return /* @__PURE__ */ a.jsx("br", {}, v);
    if (c != null && c.match(/###br\.(.*?)###/)) {
      const s = ((b = c.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : b[0]) || "";
      return /* @__PURE__ */ a.jsx("br", { className: s }, v);
    } else
      return c;
  });
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: l });
}, _r = ({
  content: d
}) => mr(d);
export {
  _r as CustomBreakLineParser,
  Rr as FocusTrap,
  gr as FormField,
  Er as SplitText,
  br as Video,
  mr as parseBreakLine
};
//# sourceMappingURL=spice.js.map
