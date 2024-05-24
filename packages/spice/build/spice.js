"use client";
import Wn, { createContext as Te, useContext as be, useState as Ft, useCallback as yt, useRef as tt, useEffect as rt, forwardRef as Un, useMemo as bt, memo as Ss, useLayoutEffect as Os, useReducer as Cs } from "react";
var Pr = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Ps() {
  if (bn)
    return Ce;
  bn = 1;
  var a = Wn, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, f) {
    var l, c = {}, d = null, p = null;
    f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (l in u)
      r.call(u, l) && !i.hasOwnProperty(l) && (c[l] = u[l]);
    if (o && o.defaultProps)
      for (l in u = o.defaultProps, u)
        c[l] === void 0 && (c[l] = u[l]);
    return { $$typeof: t, type: o, key: d, ref: p, props: c, _owner: n.current };
  }
  return Ce.Fragment = e, Ce.jsx = s, Ce.jsxs = s, Ce;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function Es() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Wn, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, _ = "@@iterator";
    function g(h) {
      if (h === null || typeof h != "object")
        return null;
      var x = m && h[m] || h[_];
      return typeof x == "function" ? x : null;
    }
    var y = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(h) {
      {
        for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), k = 1; k < x; k++)
          O[k - 1] = arguments[k];
        T("error", h, O);
      }
    }
    function T(h, x, O) {
      {
        var k = y.ReactDebugCurrentFrame, j = k.getStackAddendum();
        j !== "" && (x += "%s", O = O.concat([j]));
        var z = O.map(function(F) {
          return String(F);
        });
        z.unshift("Warning: " + x), Function.prototype.apply.call(console[h], console, z);
      }
    }
    var b = !1, w = !1, C = !1, P = !1, E = !1, S;
    S = Symbol.for("react.module.reference");
    function I(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || E || h === n || h === f || h === l || P || h === p || b || w || C || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === c || h.$$typeof === s || h.$$typeof === o || h.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === S || h.getModuleId !== void 0));
    }
    function B(h, x, O) {
      var k = h.displayName;
      if (k)
        return k;
      var j = x.displayName || x.name || "";
      return j !== "" ? O + "(" + j + ")" : O;
    }
    function L(h) {
      return h.displayName || "Context";
    }
    function D(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case o:
            var x = h;
            return L(x) + ".Consumer";
          case s:
            var O = h;
            return L(O._context) + ".Provider";
          case u:
            return B(h, h.render, "ForwardRef");
          case c:
            var k = h.displayName || null;
            return k !== null ? k : D(h.type) || "Memo";
          case d: {
            var j = h, z = j._payload, F = j._init;
            try {
              return D(F(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, Y = 0, U, H, ft, Qt, Vt, $t, Et;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Pt() {
      {
        if (Y === 0) {
          U = console.log, H = console.info, ft = console.warn, Qt = console.error, Vt = console.group, $t = console.groupCollapsed, Et = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        Y++;
      }
    }
    function It() {
      {
        if (Y--, Y === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, h, {
              value: U
            }),
            info: $({}, h, {
              value: H
            }),
            warn: $({}, h, {
              value: ft
            }),
            error: $({}, h, {
              value: Qt
            }),
            group: $({}, h, {
              value: Vt
            }),
            groupCollapsed: $({}, h, {
              value: $t
            }),
            groupEnd: $({}, h, {
              value: Et
            })
          });
        }
        Y < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fr = y.ReactCurrentDispatcher, lr;
    function $e(h, x, O) {
      {
        if (lr === void 0)
          try {
            throw Error();
          } catch (j) {
            var k = j.stack.trim().match(/\n( *(at )?)/);
            lr = k && k[1] || "";
          }
        return `
` + lr + h;
      }
    }
    var cr = !1, Ye;
    {
      var es = typeof WeakMap == "function" ? WeakMap : Map;
      Ye = new es();
    }
    function fn(h, x) {
      if (!h || cr)
        return "";
      {
        var O = Ye.get(h);
        if (O !== void 0)
          return O;
      }
      var k;
      cr = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = fr.current, fr.current = null, Pt();
      try {
        if (x) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (jt) {
              k = jt;
            }
            Reflect.construct(h, [], F);
          } else {
            try {
              F.call();
            } catch (jt) {
              k = jt;
            }
            h.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            k = jt;
          }
          h();
        }
      } catch (jt) {
        if (jt && k && typeof jt.stack == "string") {
          for (var A = jt.stack.split(`
`), at = k.stack.split(`
`), K = A.length - 1, J = at.length - 1; K >= 1 && J >= 0 && A[K] !== at[J]; )
            J--;
          for (; K >= 1 && J >= 0; K--, J--)
            if (A[K] !== at[J]) {
              if (K !== 1 || J !== 1)
                do
                  if (K--, J--, J < 0 || A[K] !== at[J]) {
                    var wt = `
` + A[K].replace(" at new ", " at ");
                    return h.displayName && wt.includes("<anonymous>") && (wt = wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Ye.set(h, wt), wt;
                  }
                while (K >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        cr = !1, fr.current = z, It(), Error.prepareStackTrace = j;
      }
      var le = h ? h.displayName || h.name : "", Tn = le ? $e(le) : "";
      return typeof h == "function" && Ye.set(h, Tn), Tn;
    }
    function rs(h, x, O) {
      return fn(h, !1);
    }
    function ns(h) {
      var x = h.prototype;
      return !!(x && x.isReactComponent);
    }
    function We(h, x, O) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return fn(h, ns(h));
      if (typeof h == "string")
        return $e(h);
      switch (h) {
        case f:
          return $e("Suspense");
        case l:
          return $e("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            return rs(h.render);
          case c:
            return We(h.type, x, O);
          case d: {
            var k = h, j = k._payload, z = k._init;
            try {
              return We(z(j), x, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, ln = {}, cn = y.ReactDebugCurrentFrame;
    function qe(h) {
      if (h) {
        var x = h._owner, O = We(h.type, h._source, x ? x.type : null);
        cn.setExtraStackFrame(O);
      } else
        cn.setExtraStackFrame(null);
    }
    function is(h, x, O, k, j) {
      {
        var z = Function.call.bind(Ue);
        for (var F in h)
          if (z(h, F)) {
            var A = void 0;
            try {
              if (typeof h[F] != "function") {
                var at = Error((k || "React class") + ": " + O + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw at.name = "Invariant Violation", at;
              }
              A = h[F](x, F, k, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              A = K;
            }
            A && !(A instanceof Error) && (qe(j), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", O, F, typeof A), qe(null)), A instanceof Error && !(A.message in ln) && (ln[A.message] = !0, qe(j), v("Failed %s type: %s", O, A.message), qe(null));
          }
      }
    }
    var ss = Array.isArray;
    function hr(h) {
      return ss(h);
    }
    function os(h) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, O = x && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return O;
      }
    }
    function as(h) {
      try {
        return hn(h), !1;
      } catch {
        return !0;
      }
    }
    function hn(h) {
      return "" + h;
    }
    function _n(h) {
      if (as(h))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", os(h)), hn(h);
    }
    var Oe = y.ReactCurrentOwner, us = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dn, pn, _r;
    _r = {};
    function fs(h) {
      if (Ue.call(h, "ref")) {
        var x = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function ls(h) {
      if (Ue.call(h, "key")) {
        var x = Object.getOwnPropertyDescriptor(h, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function cs(h, x) {
      if (typeof h.ref == "string" && Oe.current && x && Oe.current.stateNode !== x) {
        var O = D(Oe.current.type);
        _r[O] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Oe.current.type), h.ref), _r[O] = !0);
      }
    }
    function hs(h, x) {
      {
        var O = function() {
          dn || (dn = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function _s(h, x) {
      {
        var O = function() {
          pn || (pn = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var ds = function(h, x, O, k, j, z, F) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: x,
        ref: O,
        props: F,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function ps(h, x, O, k, j) {
      {
        var z, F = {}, A = null, at = null;
        O !== void 0 && (_n(O), A = "" + O), ls(x) && (_n(x.key), A = "" + x.key), fs(x) && (at = x.ref, cs(x, j));
        for (z in x)
          Ue.call(x, z) && !us.hasOwnProperty(z) && (F[z] = x[z]);
        if (h && h.defaultProps) {
          var K = h.defaultProps;
          for (z in K)
            F[z] === void 0 && (F[z] = K[z]);
        }
        if (A || at) {
          var J = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          A && hs(F, J), at && _s(F, J);
        }
        return ds(h, A, at, j, k, Oe.current, F);
      }
    }
    var dr = y.ReactCurrentOwner, mn = y.ReactDebugCurrentFrame;
    function fe(h) {
      if (h) {
        var x = h._owner, O = We(h.type, h._source, x ? x.type : null);
        mn.setExtraStackFrame(O);
      } else
        mn.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function mr(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function gn() {
      {
        if (dr.current) {
          var h = D(dr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ms(h) {
      {
        if (h !== void 0) {
          var x = h.fileName.replace(/^.*[\\\/]/, ""), O = h.lineNumber;
          return `

Check your code at ` + x + ":" + O + ".";
        }
        return "";
      }
    }
    var vn = {};
    function gs(h) {
      {
        var x = gn();
        if (!x) {
          var O = typeof h == "string" ? h : h.displayName || h.name;
          O && (x = `

Check the top-level render call using <` + O + ">.");
        }
        return x;
      }
    }
    function yn(h, x) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var O = gs(x);
        if (vn[O])
          return;
        vn[O] = !0;
        var k = "";
        h && h._owner && h._owner !== dr.current && (k = " It was passed a child from " + D(h._owner.type) + "."), fe(h), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, k), fe(null);
      }
    }
    function xn(h, x) {
      {
        if (typeof h != "object")
          return;
        if (hr(h))
          for (var O = 0; O < h.length; O++) {
            var k = h[O];
            mr(k) && yn(k, x);
          }
        else if (mr(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var j = g(h);
          if (typeof j == "function" && j !== h.entries)
            for (var z = j.call(h), F; !(F = z.next()).done; )
              mr(F.value) && yn(F.value, x);
        }
      }
    }
    function vs(h) {
      {
        var x = h.type;
        if (x == null || typeof x == "string")
          return;
        var O;
        if (typeof x == "function")
          O = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === c))
          O = x.propTypes;
        else
          return;
        if (O) {
          var k = D(x);
          is(O, h.props, "prop", k, h);
        } else if (x.PropTypes !== void 0 && !pr) {
          pr = !0;
          var j = D(x);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ys(h) {
      {
        for (var x = Object.keys(h.props), O = 0; O < x.length; O++) {
          var k = x[O];
          if (k !== "children" && k !== "key") {
            fe(h), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), fe(null);
            break;
          }
        }
        h.ref !== null && (fe(h), v("Invalid attribute `ref` supplied to `React.Fragment`."), fe(null));
      }
    }
    function wn(h, x, O, k, j, z) {
      {
        var F = I(h);
        if (!F) {
          var A = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = ms(j);
          at ? A += at : A += gn();
          var K;
          h === null ? K = "null" : hr(h) ? K = "array" : h !== void 0 && h.$$typeof === t ? (K = "<" + (D(h.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : K = typeof h, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, A);
        }
        var J = ps(h, x, O, j, z);
        if (J == null)
          return J;
        if (F) {
          var wt = x.children;
          if (wt !== void 0)
            if (k)
              if (hr(wt)) {
                for (var le = 0; le < wt.length; le++)
                  xn(wt[le], h);
                Object.freeze && Object.freeze(wt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xn(wt, h);
        }
        return h === r ? ys(J) : vs(J), J;
      }
    }
    function xs(h, x, O) {
      return wn(h, x, O, !0);
    }
    function ws(h, x, O) {
      return wn(h, x, O, !1);
    }
    var Ts = ws, bs = xs;
    Pe.Fragment = r, Pe.jsx = Ts, Pe.jsxs = bs;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? Pr.exports = Ps() : Pr.exports = Es();
var R = Pr.exports;
const qn = Te(!0), Xn = Te((a) => !a), Rs = ({ children: a }) => {
  const [t, e] = Ft(!0);
  return /* @__PURE__ */ R.jsx(qn.Provider, { value: t, children: /* @__PURE__ */ R.jsx(Xn.Provider, { value: e, children: a }) });
}, ks = ({ children: a }) => {
  const t = be(qn);
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      style: {
        flexDirection: "column",
        display: "flex",
        minHeight: "100vh",
        ...t && {
          overflow: "hidden"
        }
      },
      children: a
    }
  );
}, ya = ({ children: a }) => /* @__PURE__ */ R.jsx(Rs, { children: /* @__PURE__ */ R.jsx(ks, { children: a }) }), Ds = () => be(Xn), On = ({
  formProps: a,
  className: t
}) => {
  const { style: e, ...r } = a;
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      ...r,
      className: t || "",
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...e
      }
    }
  );
}, As = ({ formProps: a }) => {
  const { isSelect: t, ...e } = a;
  if (!t)
    return;
  const r = () => {
    const i = t.defaultValue;
    return i ? /* @__PURE__ */ R.jsx("option", { hidden: !0, children: i }) : null;
  }, n = () => {
    const i = t.defaultSelectedIndex;
    if (i)
      return t.options[i];
  };
  return /* @__PURE__ */ R.jsxs(
    "select",
    {
      ...e,
      style: {
        overflow: "hidden",
        fontSize: "16px"
      },
      defaultValue: n(),
      children: [
        /* @__PURE__ */ R.jsx(r, {}),
        t.options.map((i) => /* @__PURE__ */ R.jsx("option", { value: i, children: i }, i))
      ]
    }
  );
}, Cn = ({
  layoutType: a,
  formPropsArr: t,
  label: e,
  FormItem: r,
  errors: n
}) => {
  const i = yt(
    (s) => !n || !n[s] ? null : n[s],
    [n]
  );
  if (a === "block")
    return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      e && /* @__PURE__ */ R.jsx("label", { htmlFor: t[0].id, children: e }),
      /* @__PURE__ */ R.jsx(r, { formProps: t[0] }),
      i(0)
    ] });
  if (a === "flex")
    return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      e && /* @__PURE__ */ R.jsx("label", { htmlFor: t[0].id, children: e }),
      /* @__PURE__ */ R.jsxs("ul", { children: [
        /* @__PURE__ */ R.jsxs("li", { children: [
          /* @__PURE__ */ R.jsx(r, { formProps: t[0] }),
          i(0)
        ] }),
        /* @__PURE__ */ R.jsxs("li", { children: [
          /* @__PURE__ */ R.jsx(r, { formProps: t[1] }),
          i(1)
        ] })
      ] })
    ] });
  if (a === "radio-check") {
    const s = t.map((o) => /* @__PURE__ */ R.jsxs("li", { children: [
      /* @__PURE__ */ R.jsx(
        r,
        {
          formProps: {
            ...o,
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
              zIndex: "-99999"
            }
          }
        }
      ),
      /* @__PURE__ */ R.jsx("label", { htmlFor: o.id, children: o.value })
    ] }, o.id));
    return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      e && /* @__PURE__ */ R.jsx("label", { children: e }),
      /* @__PURE__ */ R.jsx("ul", { children: s }),
      i(0)
    ] });
  }
}, Ms = ({ formProps: a }) => {
  const { isTextarea: t, ...e } = a;
  if (t)
    return /* @__PURE__ */ R.jsx("textarea", { ...e, ...t });
}, xa = ({
  className: a,
  label: t,
  formProps: e,
  errors: r
}) => {
  const n = e, i = n[0].type, s = n.length, o = !!n[0].isSelect, u = !!n[0].isTextarea;
  if (!(i === "radio" || i === "checkbox") && s > 2)
    throw new Error("The length of formProps is up to 2.");
  if (r && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const f = yt(
    (c) => Cn({
      layoutType: s === 1 ? "block" : "flex",
      formPropsArr: n,
      label: t,
      FormItem: c,
      errors: r
    }),
    [r, n, t, s]
  ), l = yt(() => o ? f(As) : u ? f(Ms) : i === "radio" || i === "checkbox" ? Cn({
    layoutType: "radio-check",
    formPropsArr: n,
    label: t,
    FormItem: On,
    errors: r
  }) : f(On), [r, n, t, o, u, f, i]);
  return /* @__PURE__ */ R.jsx("fieldset", { className: `${a}`, children: /* @__PURE__ */ R.jsx(l, {}) });
}, Yr = (a) => new Promise((t) => {
  a instanceof Promise ? a.then(() => {
    t(null);
  }) : t(null);
}), Pn = (a) => {
  const t = document.documentElement.style, e = document.body.style;
  a === "add" ? (t.scrollbarGutter = "stable", t.overflow = "hidden", e.overflow = "hidden") : (t.scrollbarGutter = "", t.overflow = "", e.overflow = "");
}, Fs = ".spice__modal_close", wa = ({
  children: a,
  tag: t,
  className: e,
  dialog: r,
  callback: n
}) => {
  const i = t || "button", s = tt(null), o = yt(() => {
    Pn("add"), s.current.showModal(), n != null && n.onOpen && n.onOpen(s.current);
  }, [n]), u = yt(async () => {
    n != null && n.onClose && await Yr(n.onClose(s.current)), Pn("remove"), s.current.close();
  }, [n]);
  return rt(() => {
    const f = s.current.querySelectorAll(Fs);
    if (f)
      return f.forEach(
        (l) => l.addEventListener("click", u)
      ), () => {
        f.forEach(
          (l) => l.removeEventListener("click", u)
        );
      };
  }, [u]), rt(() => {
    const f = (l) => {
      var d;
      ((d = s.current) == null ? void 0 : d.hasAttribute("open")) && l.key === "Escape" && u();
    };
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [u]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      i,
      {
        className: e || "",
        onClick: () => {
          o();
        },
        children: a
      }
    ),
    /* @__PURE__ */ R.jsx(
      "dialog",
      {
        ref: s,
        onClick: (f) => {
          f.target === s.current && u();
        },
        style: {
          border: "none",
          background: "none",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "100%",
          padding: "0"
        },
        className: r.className ? r.className : "",
        children: r.children
      }
    )
  ] });
}, Is = Un(
  ({ children: a, ...t }, e) => {
    const r = Ds();
    return rt(() => (r(() => !1), () => {
      r(() => !0);
    }), [r]), /* @__PURE__ */ R.jsx("div", { ref: e, ...t, children: a });
  }
);
Is.displayName = "StickyItem";
const Ta = (a) => {
  const t = tt(null), [e, r] = Ft(!1), { fallback: n, ...i } = a;
  return rt(() => {
    var s;
    (s = t.current) == null || s.play().then(() => {
      r(!1);
    }).catch(() => {
      r(!0);
    });
  }, []), e ? n : /* @__PURE__ */ R.jsx("video", { ref: t, ...i });
}, js = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Gn = Te(js), Hn = Te(
  () => {
  }
), Ls = ({ children: a, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [e, r] = Ft({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ R.jsx(Gn.Provider, { value: e, children: /* @__PURE__ */ R.jsx(Hn.Provider, { value: r, children: a }) });
}, Kn = () => be(Gn), Wr = () => be(Hn), zs = ({ children: a, value: t, className: e }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = Wr(), n = Kn(), i = yt(() => {
    n.current === t || n.isLeaving || r((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: t
    }));
  }, [r, n, t]);
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      onClick: i,
      className: e || "",
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": n.current === t,
      children: a
    }
  );
}, Qn = ({ content: a, isOpen: t }) => {
  const e = a.querySelectorAll("a,button");
  if (!e)
    return;
  const r = t ? "0" : "-1";
  e.forEach((n) => {
    n.setAttribute("tabindex", r);
  });
}, Ns = ({
  children: a,
  value: t,
  className: e,
  callback: r
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = tt(!0), i = tt(null), s = Wr(), o = Kn(), u = o.current === t && !o.isLeaving;
  return rt(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    if (!o.isAnimation) {
      u && r != null && r.onReset && r.onReset(i.current);
      return;
    }
    o.prev === t && (async () => (r != null && r.onClose && await Yr(r.onClose(i.current)), s((f) => ({
      ...f,
      isLeaving: !1,
      prev: "",
      current: f.next,
      next: ""
    }))))(), u && r != null && r.onOpen && r.onOpen(i.current);
  }, [o, s, r, t, u]), rt(() => {
    Qn({
      content: i.current,
      isOpen: o.current === t
    });
  }, [o, t]), /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: i,
      className: e || "",
      style: o.current !== t ? {
        pointerEvents: "none",
        position: "absolute",
        visibility: "hidden",
        opacity: 0,
        display: "none"
      } : {},
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": o.current !== t,
      children: a
    }
  );
}, Bs = () => {
  const a = Wr();
  return (t, e) => {
    a((r) => ({
      isAnimation: e,
      isLeaving: e,
      prev: e ? r.current : "",
      current: e ? r.current : t,
      next: e ? t : ""
    }));
  };
}, ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: zs,
  Content: Ns,
  Context: Ls,
  useTabSwitch: Bs
}, Symbol.toStringTag, { value: "Module" })), Vs = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Jn = Te(Vs), Zn = Te(() => {
}), $s = ({ children: a, defaultValue: t }) => {
  const [e, r] = Ft({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ R.jsx(Jn.Provider, { value: e, children: /* @__PURE__ */ R.jsx(Zn.Provider, { value: r, children: a }) });
}, ti = () => be(Jn), Ys = () => be(Zn), Ws = ({ children: a, value: t, className: e }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = ti(), n = Ys(), i = bt(
    () => !!r.defaultValue.find((u) => u === t),
    [r, t]
  ), [s, o] = Ft(i);
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      className: e || "",
      onClick: () => {
        n((u) => ({
          ...u,
          toggle: s,
          target: t
        })), o(!s);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": s,
      children: a
    }
  );
}, Us = ({
  targetRef: a,
  callback: t,
  debounce: e = 100,
  dependencies: r = []
}) => {
  const n = tt(0), i = tt(!0);
  rt(() => {
    const s = new ResizeObserver((u) => {
      clearTimeout(n.current), n.current = setTimeout(() => {
        if (i.current) {
          i.current = !1;
          return;
        }
        t(u[0].target);
      }, e);
    }), o = a.current;
    if (o)
      return s.observe(o), () => {
        s.unobserve(o), clearTimeout(n.current);
      };
  }, r);
}, qs = ({
  value: a,
  callback: t,
  children: e,
  className: r
}) => {
  if (a === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const n = ti(), i = bt(
    () => !!n.defaultValue.find((c) => c === a),
    [n, a]
  ), [s, o] = Ft(i);
  bt(() => {
    n.target === a && o(!s);
  }, [n.target, n.toggle]);
  const u = tt(!0), f = tt(null), l = tt(null);
  return rt(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const c = {
      height: l.current.getBoundingClientRect().height,
      target: f.current
    };
    s ? t.onOpen(c) : t.onClose(c);
  }, [s, t]), rt(() => {
    Qn({ content: f.current, isOpen: s });
  }, [s]), Us({
    targetRef: l,
    callback: (c) => {
      const d = c.getBoundingClientRect().height;
      s && (f.current.style.height = `${d}px`);
    },
    dependencies: [s],
    debounce: 100
  }), /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: f,
      style: {
        overflow: "hidden",
        height: i ? "auto" : "0px"
      },
      id: `content-${a}`,
      "aria-labelledby": `button-${a}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ R.jsx("div", { ref: l, className: r || "", children: e })
    }
  );
}, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ws,
  Content: qs,
  Context: $s
}, Symbol.toStringTag, { value: "Module" })), Xs = ({
  tempo: a = 3,
  onesRef: t,
  tensRef: e,
  hundredsRef: r,
  onProgress: n,
  onStart: i,
  onComplete: s
}) => {
  const o = bt(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), u = tt(null), f = yt(
    ({
      digitContainer: c,
      numbersTarget: d,
      digit: p,
      digitNumber: m,
      currentPercent: _,
      limit: g,
      destination: y
    }) => {
      if (o[p] !== m && _ <= g) {
        const v = m.toString(), T = (Math.min(8, m) + 1).toString(), b = _ >= g;
        d[0].innerText = v, d[1].innerText = b ? "0" : T, n && n({
          digitContainer: c,
          percent: _,
          digit: p,
          destination: y,
          duration: a / (y / p)
        }), o[p] = m;
      }
    },
    [o, n, a]
  ), l = yt(
    (c) => (c > 100 && (c = 100), new Promise((d) => {
      if (c === 0)
        return;
      const p = {
        ones: t.current.querySelectorAll("div"),
        tens: e.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(u.current), u.current = setInterval(async () => {
        const m = o.to += 1, _ = async () => {
          clearInterval(u.current), m > 100 && s && await Yr(s(p.getAll())), d(m - 1);
        };
        m === 1 && i && i(p.getAll()), m > c && await _();
        const g = Math.floor(m / 100) % 100, y = Math.floor(m / 10) % 10, v = m % 10;
        f({
          digitContainer: t.current,
          digit: 1,
          digitNumber: v,
          currentPercent: m,
          numbersTarget: p.ones,
          limit: 90,
          destination: c
        }), f({
          digitContainer: e.current,
          digit: 10,
          digitNumber: y,
          currentPercent: m,
          numbersTarget: p.tens,
          limit: 90,
          destination: c
        }), o[100] !== g && (p.hundreds[1].innerText = g.toString(), n && n({
          digitContainer: r.current,
          percent: m,
          digit: 100,
          destination: c,
          duration: a / (c / 10)
        }), o[100] = g);
      }, Math.max(1e3 / 60, a / c * 1e3));
    })),
    [
      o,
      f,
      e,
      r,
      t,
      s,
      n,
      i,
      a
    ]
  );
  return rt(() => () => {
    clearInterval(u.current);
  }, []), l;
}, ei = Ss(
  Un(({ className: a }, t) => /* @__PURE__ */ R.jsxs(
    "div",
    {
      style: {
        width: "1ch",
        lineHeight: 1,
        float: "left",
        textAlign: "center"
      },
      ref: t,
      children: [
        /* @__PURE__ */ R.jsx("div", { className: a || "", children: "0" }),
        /* @__PURE__ */ R.jsx("div", { className: a || "", children: "0" })
      ]
    }
  ))
);
ei.displayName = "Digit";
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: ei,
  useLoadingProgress: Xs
}, Symbol.toStringTag, { value: "Module" }));
function Lt(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function ri(a, t) {
  a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var vt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ge = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ur, st, W, St = 1e8, V = 1 / St, Er = Math.PI * 2, Gs = Er / 4, Hs = 0, ni = Math.sqrt, Ks = Math.cos, Qs = Math.sin, nt = function(t) {
  return typeof t == "string";
}, G = function(t) {
  return typeof t == "function";
}, Nt = function(t) {
  return typeof t == "number";
}, qr = function(t) {
  return typeof t > "u";
}, Mt = function(t) {
  return typeof t == "object";
}, lt = function(t) {
  return t !== !1;
}, Xr = function() {
  return typeof window < "u";
}, Xe = function(t) {
  return G(t) || nt(t);
}, ii = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ot = Array.isArray, Rr = /(?:-?\.?\d|\.)+/gi, si = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, he = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, gr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, oi = /[+-]=-?[.\d]+/, ai = /[^,'"\[\]\s]+/gi, Js = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, q, Rt, kr, Gr, xt = {}, Qe = {}, ui, fi = function(t) {
  return (Qe = oe(t, xt)) && dt;
}, Hr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Fe = function(t, e) {
  return !e && console.warn(t);
}, li = function(t, e) {
  return t && (xt[t] = e) && Qe && (Qe[t] = e) || xt;
}, Ie = function() {
  return 0;
}, Zs = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ge = {
  suppressEvents: !0,
  kill: !1
}, to = {
  suppressEvents: !0
}, Kr = {}, qt = [], Dr = {}, ci, pt = {}, vr = {}, En = 30, He = [], Qr = "", Jr = function(t) {
  var e = t[0], r, n;
  if (Mt(e) || G(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (n = He.length; n-- && !He[n].targetTest(e); )
      ;
    r = He[n];
  }
  for (n = t.length; n--; )
    t[n] && (t[n]._gsap || (t[n]._gsap = new Ii(t[n], r))) || t.splice(n, 1);
  return t;
}, re = function(t) {
  return t._gsap || Jr(Ot(t))[0]._gsap;
}, hi = function(t, e, r) {
  return (r = t[e]) && G(r) ? t[e]() : qr(r) && t.getAttribute && t.getAttribute(e) || r;
}, ct = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Q = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, et = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, de = function(t, e) {
  var r = e.charAt(0), n = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + n : r === "-" ? t - n : r === "*" ? t * n : t / n;
}, eo = function(t, e) {
  for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, Je = function() {
  var t = qt.length, e = qt.slice(0), r, n;
  for (Dr = {}, qt.length = 0, r = 0; r < t; r++)
    n = e[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, _i = function(t, e, r, n) {
  qt.length && !st && Je(), t.render(e, r, n || st && e < 0 && (t._initted || t._startAt)), qt.length && !st && Je();
}, di = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(ai).length < 2 ? e : nt(t) ? t.trim() : t;
}, pi = function(t) {
  return t;
}, Ct = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, ro = function(t) {
  return function(e, r) {
    for (var n in r)
      n in e || n === "duration" && t || n === "ease" || (e[n] = r[n]);
  };
}, oe = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Rn = function a(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Mt(e[r]) ? a(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Ze = function(t, e) {
  var r = {}, n;
  for (n in t)
    n in e || (r[n] = t[n]);
  return r;
}, De = function(t) {
  var e = t.parent || q, r = t.keyframes ? ro(ot(t.keyframes)) : Ct;
  if (lt(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, no = function(t, e) {
  for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, mi = function(t, e, r, n, i) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = t[n], o;
  if (i)
    for (o = e[i]; s && s[i] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e;
}, sr = function(t, e, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var i = e._prev, s = e._next;
  i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null;
}, Gt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, ne = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, io = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ar = function(t, e, r, n) {
  return t._startAt && (st ? t._startAt.revert(Ge) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n));
}, so = function a(t) {
  return !t || t._ts && a(t.parent);
}, kn = function(t) {
  return t._repeat ? ve(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ve = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, tr = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, or = function(t) {
  return t._end = et(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
}, ar = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = et(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), or(t), r._dirty || ne(r, t)), t;
}, gi = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = tr(t.rawTime(), e), (!e._dur || Ve(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), ne(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -V;
  }
}, kt = function(t, e, r, n) {
  return e.parent && Gt(e), e._start = et((Nt(r) ? r : r || t !== q ? Tt(t, r, e) : t._time) + e._delay), e._end = et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), mi(t, e, "_first", "_last", t._sort ? "_start" : 0), Mr(e) || (t._recent = e), n || gi(t, e), t._ts < 0 && ar(t, t._tTime), t;
}, vi = function(t, e) {
  return (xt.ScrollTrigger || Hr("scrollTrigger", e)) && xt.ScrollTrigger.create(e, t);
}, yi = function(t, e, r, n, i) {
  if (tn(t, e, i), !t._initted)
    return 1;
  if (!r && t._pt && !st && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ci !== mt.frame)
    return qt.push(t), t._lazy = [i, n], 1;
}, oo = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, Mr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, ao = function(t, e, r, n) {
  var i = t.ratio, s = e < 0 || !e && (!t._start && oo(t) && !(!t._initted && Mr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Mr(t)) ? 0 : 1, o = t._rDelay, u = 0, f, l, c;
  if (o && t._repeat && (u = Ve(0, t._tDur, e), l = ve(u, o), t._yoyo && l & 1 && (s = 1 - s), l !== ve(t._tTime, o) && (i = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== i || st || n || t._zTime === V || !e && t._zTime) {
    if (!t._initted && yi(t, e, n, r, u))
      return;
    for (c = t._zTime, t._zTime = e || (r ? V : 0), r || (r = e && !c), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Ar(t, e, r, !0), t._onUpdate && !r && gt(t, "onUpdate"), u && t._repeat && !r && t.parent && gt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Gt(t, 1), !r && !st && (gt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, uo = function(t, e, r) {
  var n;
  if (r > e)
    for (n = t._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > e)
        return n;
      n = n._next;
    }
  else
    for (n = t._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < e)
        return n;
      n = n._prev;
    }
}, ye = function(t, e, r, n) {
  var i = t._repeat, s = et(e) || 0, o = t._tTime / t._tDur;
  return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : et(s * (i + 1) + t._rDelay * i) : s, o > 0 && !n && ar(t, t._tTime = t._tDur * o), t.parent && or(t), r || ne(t.parent, t), t;
}, Dn = function(t) {
  return t instanceof ut ? ne(t) : ye(t, t._dur);
}, fo = {
  _start: 0,
  endTime: Ie,
  totalDuration: Ie
}, Tt = function a(t, e, r) {
  var n = t.labels, i = t._recent || fo, s = t.duration() >= St ? i.endTime(!1) : t._dur, o, u, f;
  return nt(e) && (isNaN(e) || e in n) ? (u = e.charAt(0), f = e.substr(-1) === "%", o = e.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (u === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (o < 0 ? i : r).totalDuration() / 100 : 1)) : o < 0 ? (e in n || (n[e] = s), n[e]) : (u = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), f && r && (u = u / 100 * (ot(r) ? r[0] : r).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), r) + u : s + u)) : e == null ? s : +e;
}, Ae = function(t, e, r) {
  var n = Nt(e[1]), i = (n ? 2 : 1) + (t < 2 ? 0 : 1), s = e[i], o, u;
  if (n && (s.duration = e[1]), s.parent = r, t) {
    for (o = s, u = r; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = lt(u.vars.inherit) && u.parent;
    s.immediateRender = lt(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[i - 1];
  }
  return new Z(e[0], s, e[i + 1]);
}, Kt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Ve = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, it = function(t, e) {
  return !nt(t) || !(e = Js.exec(t)) ? "" : e[1];
}, lo = function(t, e, r) {
  return Kt(r, function(n) {
    return Ve(t, e, n);
  });
}, Fr = [].slice, xi = function(t, e) {
  return t && Mt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Mt(t[0])) && !t.nodeType && t !== Rt;
}, co = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(n) {
    var i;
    return nt(n) && !e || xi(n, 1) ? (i = r).push.apply(i, Ot(n)) : r.push(n);
  }) || r;
}, Ot = function(t, e, r) {
  return W && !e && W.selector ? W.selector(t) : nt(t) && !r && (kr || !xe()) ? Fr.call((e || Gr).querySelectorAll(t), 0) : ot(t) ? co(t, r) : xi(t) ? Fr.call(t, 0) : t ? [t] : [];
}, Ir = function(t) {
  return t = Ot(t)[0] || Fe("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Ot(e, r.querySelectorAll ? r : r === t ? Fe("Invalid scope") || Gr.createElement("div") : t);
  };
}, wi = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ti = function(t) {
  if (G(t))
    return t;
  var e = Mt(t) ? t : {
    each: t
  }, r = ie(e.ease), n = e.from || 0, i = parseFloat(e.base) || 0, s = {}, o = n > 0 && n < 1, u = isNaN(n) || o, f = e.axis, l = n, c = n;
  return nt(n) ? l = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !o && u && (l = n[0], c = n[1]), function(d, p, m) {
    var _ = (m || e).length, g = s[_], y, v, T, b, w, C, P, E, S;
    if (!g) {
      if (S = e.grid === "auto" ? 0 : (e.grid || [1, St])[1], !S) {
        for (P = -St; P < (P = m[S++].getBoundingClientRect().left) && S < _; )
          ;
        S < _ && S--;
      }
      for (g = s[_] = [], y = u ? Math.min(S, _) * l - 0.5 : n % S, v = S === St ? 0 : u ? _ * c / S - 0.5 : n / S | 0, P = 0, E = St, C = 0; C < _; C++)
        T = C % S - y, b = v - (C / S | 0), g[C] = w = f ? Math.abs(f === "y" ? b : T) : ni(T * T + b * b), w > P && (P = w), w < E && (E = w);
      n === "random" && wi(g), g.max = P - E, g.min = E, g.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (S > _ ? _ - 1 : f ? f === "y" ? _ / S : S : Math.max(S, _ / S)) || 0) * (n === "edges" ? -1 : 1), g.b = _ < 0 ? i - _ : i, g.u = it(e.amount || e.each) || 0, r = r && _ < 0 ? Ai(r) : r;
    }
    return _ = (g[d] - g.min) / g.max || 0, et(g.b + (r ? r(_) : _) * g.v) + g.u;
  };
}, jr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var n = et(Math.round(parseFloat(r) / t) * t * e);
    return (n - n % 1) / e + (Nt(r) ? 0 : it(r));
  };
}, bi = function(t, e) {
  var r = ot(t), n, i;
  return !r && Mt(t) && (n = r = t.radius || St, t.values ? (t = Ot(t.values), (i = !Nt(t[0])) && (n *= n)) : t = jr(t.increment)), Kt(e, r ? G(t) ? function(s) {
    return i = t(s), Math.abs(i - s) <= n ? i : s;
  } : function(s) {
    for (var o = parseFloat(i ? s.x : s), u = parseFloat(i ? s.y : 0), f = St, l = 0, c = t.length, d, p; c--; )
      i ? (d = t[c].x - o, p = t[c].y - u, d = d * d + p * p) : d = Math.abs(t[c] - o), d < f && (f = d, l = c);
    return l = !n || f <= n ? t[l] : s, i || l === s || Nt(s) ? l : l + it(s);
  } : jr(t));
}, Si = function(t, e, r, n) {
  return Kt(ot(t) ? !e : r === !0 ? !!(r = 0) : !n, function() {
    return ot(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * n) / n;
  });
}, ho = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(n) {
    return e.reduce(function(i, s) {
      return s(i);
    }, n);
  };
}, _o = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || it(r));
  };
}, po = function(t, e, r) {
  return Ci(t, e, 0, 1, r);
}, Oi = function(t, e, r) {
  return Kt(r, function(n) {
    return t[~~e(n)];
  });
}, mo = function a(t, e, r) {
  var n = e - t;
  return ot(t) ? Oi(t, a(0, t.length), e) : Kt(r, function(i) {
    return (n + (i - t) % n) % n + t;
  });
}, go = function a(t, e, r) {
  var n = e - t, i = n * 2;
  return ot(t) ? Oi(t, a(0, t.length - 1), e) : Kt(r, function(s) {
    return s = (i + (s - t) % i) % i || 0, t + (s > n ? i - s : s);
  });
}, je = function(t) {
  for (var e = 0, r = "", n, i, s, o; ~(n = t.indexOf("random(", e)); )
    s = t.indexOf(")", n), o = t.charAt(n + 7) === "[", i = t.substr(n + 7, s - n - 7).match(o ? ai : Rr), r += t.substr(e, n - e) + Si(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, Ci = function(t, e, r, n, i) {
  var s = e - t, o = n - r;
  return Kt(i, function(u) {
    return r + ((u - t) / s * o || 0);
  });
}, vo = function a(t, e, r, n) {
  var i = isNaN(t + e) ? 0 : function(p) {
    return (1 - p) * t + p * e;
  };
  if (!i) {
    var s = nt(t), o = {}, u, f, l, c, d;
    if (r === !0 && (n = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (ot(t) && !ot(e)) {
      for (l = [], c = t.length, d = c - 2, f = 1; f < c; f++)
        l.push(a(t[f - 1], t[f]));
      c--, i = function(m) {
        m *= c;
        var _ = Math.min(d, ~~m);
        return l[_](m - _);
      }, r = e;
    } else
      n || (t = oe(ot(t) ? [] : {}, t));
    if (!l) {
      for (u in e)
        Zr.call(o, t, u, "get", e[u]);
      i = function(m) {
        return nn(m, o) || (s ? t.p : t);
      };
    }
  }
  return Kt(r, i);
}, An = function(t, e, r) {
  var n = t.labels, i = St, s, o, u;
  for (s in n)
    o = n[s] - e, o < 0 == !!r && o && i > (o = Math.abs(o)) && (u = s, i = o);
  return u;
}, gt = function(t, e, r) {
  var n = t.vars, i = n[e], s = W, o = t._ctx, u, f, l;
  if (i)
    return u = n[e + "Params"], f = n.callbackScope || t, r && qt.length && Je(), o && (W = o), l = u ? i.apply(f, u) : i.call(f), W = s, l;
}, Re = function(t) {
  return Gt(t), t.scrollTrigger && t.scrollTrigger.kill(!!st), t.progress() < 1 && gt(t, "onInterrupt"), t;
}, _e, Pi = [], Ei = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Xr() || t.headless) {
      var e = t.name, r = G(t), n = e && !r && t.init ? function() {
        this._props = [];
      } : t, i = {
        init: Ie,
        render: nn,
        add: Zr,
        kill: Fo,
        modifier: Mo,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: rn,
        aliases: {},
        register: 0
      };
      if (xe(), t !== n) {
        if (pt[e])
          return;
        Ct(n, Ct(Ze(t, i), s)), oe(n.prototype, oe(i, Ze(t, s))), pt[n.prop = e] = n, t.targetTest && (He.push(n), Kr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      li(e, n), t.register && t.register(dt, n, ht);
    } else
      Pi.push(t);
}, N = 255, ke = {
  aqua: [0, N, N],
  lime: [0, N, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, N],
  navy: [0, 0, 128],
  white: [N, N, N],
  olive: [128, 128, 0],
  yellow: [N, N, 0],
  orange: [N, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [N, 0, 0],
  pink: [N, 192, 203],
  cyan: [0, N, N],
  transparent: [N, N, N, 0]
}, yr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * N + 0.5 | 0;
}, Ri = function(t, e, r) {
  var n = t ? Nt(t) ? [t >> 16, t >> 8 & N, t & N] : 0 : ke.black, i, s, o, u, f, l, c, d, p, m;
  if (!n) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ke[t])
      n = ke[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (i = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + i + i + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & N, n & N, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & N, t & N];
    } else if (t.substr(0, 3) === "hsl") {
      if (n = m = t.match(Rr), !e)
        u = +n[0] % 360 / 360, f = +n[1] / 100, l = +n[2] / 100, s = l <= 0.5 ? l * (f + 1) : l + f - l * f, i = l * 2 - s, n.length > 3 && (n[3] *= 1), n[0] = yr(u + 1 / 3, i, s), n[1] = yr(u, i, s), n[2] = yr(u - 1 / 3, i, s);
      else if (~t.indexOf("="))
        return n = t.match(si), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = t.match(Rr) || ke.transparent;
    n = n.map(Number);
  }
  return e && !m && (i = n[0] / N, s = n[1] / N, o = n[2] / N, c = Math.max(i, s, o), d = Math.min(i, s, o), l = (c + d) / 2, c === d ? u = f = 0 : (p = c - d, f = l > 0.5 ? p / (2 - c - d) : p / (c + d), u = c === i ? (s - o) / p + (s < o ? 6 : 0) : c === s ? (o - i) / p + 2 : (i - s) / p + 4, u *= 60), n[0] = ~~(u + 0.5), n[1] = ~~(f * 100 + 0.5), n[2] = ~~(l * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, ki = function(t) {
  var e = [], r = [], n = -1;
  return t.split(Xt).forEach(function(i) {
    var s = i.match(he) || [];
    e.push.apply(e, s), r.push(n += s.length + 1);
  }), e.c = r, e;
}, Mn = function(t, e, r) {
  var n = "", i = (t + n).match(Xt), s = e ? "hsla(" : "rgba(", o = 0, u, f, l, c;
  if (!i)
    return t;
  if (i = i.map(function(d) {
    return (d = Ri(d, e, 1)) && s + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (l = ki(t), u = r.c, u.join(n) !== l.c.join(n)))
    for (f = t.replace(Xt, "1").split(he), c = f.length - 1; o < c; o++)
      n += f[o] + (~u.indexOf(o) ? i.shift() || s + "0,0,0,0)" : (l.length ? l : i.length ? i : r).shift());
  if (!f)
    for (f = t.split(Xt), c = f.length - 1; o < c; o++)
      n += f[o] + i[o];
  return n + f[c];
}, Xt = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ke)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), yo = /hsl[a]?\(/, Di = function(t) {
  var e = t.join(" "), r;
  if (Xt.lastIndex = 0, Xt.test(e))
    return r = yo.test(e), t[1] = Mn(t[1], r), t[0] = Mn(t[0], r, ki(t[1])), !0;
}, Le, mt = function() {
  var a = Date.now, t = 500, e = 33, r = a(), n = r, i = 1e3 / 240, s = i, o = [], u, f, l, c, d, p, m = function _(g) {
    var y = a() - n, v = g === !0, T, b, w, C;
    if ((y > t || y < 0) && (r += y - e), n += y, w = n - r, T = w - s, (T > 0 || v) && (C = ++c.frame, d = w - c.time * 1e3, c.time = w = w / 1e3, s += T + (T >= i ? 4 : i - T), b = 1), v || (u = f(_)), b)
      for (p = 0; p < o.length; p++)
        o[p](w, d, C, g);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(g) {
      return d / (1e3 / (g || 60));
    },
    wake: function() {
      ui && (!kr && Xr() && (Rt = kr = window, Gr = Rt.document || {}, xt.gsap = dt, (Rt.gsapVersions || (Rt.gsapVersions = [])).push(dt.version), fi(Qe || Rt.GreenSockGlobals || !Rt.gsap && Rt || {}), Pi.forEach(Ei)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && c.sleep(), f = l || function(g) {
        return setTimeout(g, s - c.time * 1e3 + 1 | 0);
      }, Le = 1, m(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(u), Le = 0, f = Ie;
    },
    lagSmoothing: function(g, y) {
      t = g || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(g) {
      i = 1e3 / (g || 240), s = c.time * 1e3 + i;
    },
    add: function(g, y, v) {
      var T = y ? function(b, w, C, P) {
        g(b, w, C, P), c.remove(T);
      } : g;
      return c.remove(g), o[v ? "unshift" : "push"](T), xe(), T;
    },
    remove: function(g, y) {
      ~(y = o.indexOf(g)) && o.splice(y, 1) && p >= y && p--;
    },
    _listeners: o
  }, c;
}(), xe = function() {
  return !Le && mt.wake();
}, M = {}, xo = /^[\d.\-M][\d.\-,\s]/, wo = /["']/g, To = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), n = r[0], i = 1, s = r.length, o, u, f; i < s; i++)
    u = r[i], o = i !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, o), e[n] = isNaN(f) ? f.replace(wo, "").trim() : +f, n = u.substr(o + 1).trim();
  return e;
}, bo = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", e);
  return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
}, So = function(t) {
  var e = (t + "").split("("), r = M[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [To(e[1])] : bo(t).split(",").map(di)) : M._CE && xo.test(t) ? M._CE("", t) : r;
}, Ai = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Mi = function a(t, e) {
  for (var r = t._first, n; r; )
    r instanceof ut ? a(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? a(r.timeline, e) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = e)), r = r._next;
}, ie = function(t, e) {
  return t && (G(t) ? t : M[t] || So(t)) || e;
}, ue = function(t, e, r, n) {
  r === void 0 && (r = function(u) {
    return 1 - e(1 - u);
  }), n === void 0 && (n = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var i = {
    easeIn: e,
    easeOut: r,
    easeInOut: n
  }, s;
  return ct(t, function(o) {
    M[o] = xt[o] = i, M[s = o.toLowerCase()] = r;
    for (var u in i)
      M[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = M[o + "." + u] = i[u];
  }), i;
}, Fi = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, xr = function a(t, e, r) {
  var n = e >= 1 ? e : 1, i = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = i / Er * (Math.asin(1 / n) || 0), o = function(l) {
    return l === 1 ? 1 : n * Math.pow(2, -10 * l) * Qs((l - s) * i) + 1;
  }, u = t === "out" ? o : t === "in" ? function(f) {
    return 1 - o(1 - f);
  } : Fi(o);
  return i = Er / i, u.config = function(f, l) {
    return a(t, f, l);
  }, u;
}, wr = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, n = t === "out" ? r : t === "in" ? function(i) {
    return 1 - r(1 - i);
  } : Fi(r);
  return n.config = function(i) {
    return a(t, i);
  }, n;
};
ct("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  ue(a + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
M.Linear.easeNone = M.none = M.Linear.easeIn;
ue("Elastic", xr("in"), xr("out"), xr());
(function(a, t) {
  var e = 1 / t, r = 2 * e, n = 2.5 * e, i = function(o) {
    return o < e ? a * o * o : o < r ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < n ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  ue("Bounce", function(s) {
    return 1 - i(1 - s);
  }, i);
})(7.5625, 2.75);
ue("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
ue("Circ", function(a) {
  return -(ni(1 - a * a) - 1);
});
ue("Sine", function(a) {
  return a === 1 ? 1 : -Ks(a * Gs) + 1;
});
ue("Back", wr("in"), wr("out"), wr());
M.SteppedEase = M.steps = xt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, n = t + (e ? 0 : 1), i = e ? 1 : 0, s = 1 - V;
    return function(o) {
      return ((n * Ve(0, s, o) | 0) + i) * r;
    };
  }
};
ge.ease = M["quad.out"];
ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return Qr += a + "," + a + "Params,";
});
var Ii = function(t, e) {
  this.id = Hs++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : hi, this.set = e ? e.getSetter : rn;
}, ze = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ye(this, +e.duration, 1, 1), this.data = e.data, W && (this._ctx = W, W.data.push(this)), Le || mt.wake();
  }
  var t = a.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, ye(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, n) {
    if (xe(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (ar(this, r), !i._dp || i.parent || gi(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && kt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === V || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), _i(this, r, n)), this;
  }, t.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + kn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, t.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + kn(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, n) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * i, n) : this._repeat ? ve(this._tTime, i) + 1 : 1;
  }, t.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -V ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? tr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -V ? 0 : this._rts, this.totalTime(Ve(-Math.abs(this._delay), this._tDur, i), n !== !1), or(this), io(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && kt(n, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (lt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tr(n.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = to);
    var n = st;
    return st = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), st = n, this;
  }, t.globalTime = function(r) {
    for (var n = this, i = arguments.length ? r : n.rawTime(); n; )
      i = n._start + i / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : i;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Dn(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, Dn(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, n) {
    return this.totalTime(Tt(this, r), lt(n));
  }, t.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, lt(n));
  }, t.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, t.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -V : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, n = this._start, i;
    return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= n && i < this.endTime(!0) - V);
  }, t.eventCallback = function(r, n, i) {
    var s = this.vars;
    return arguments.length > 1 ? (n ? (s[r] = n, i && (s[r + "Params"] = i), r === "onUpdate" && (this._onUpdate = n)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var n = this;
    return new Promise(function(i) {
      var s = G(r) ? r : pi, o = function() {
        var f = n.then;
        n.then = null, G(s) && (s = s(n)) && (s.then || s === n) && (n.then = f), i(s), n.then = f;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? o() : n._prom = o;
    });
  }, t.kill = function() {
    Re(this);
  }, a;
}();
Ct(ze.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -V,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ut = /* @__PURE__ */ function(a) {
  ri(t, a);
  function t(r, n) {
    var i;
    return r === void 0 && (r = {}), i = a.call(this, r) || this, i.labels = {}, i.smoothChildTiming = !!r.smoothChildTiming, i.autoRemoveChildren = !!r.autoRemoveChildren, i._sort = lt(r.sortChildren), q && kt(r.parent || q, Lt(i), n), r.reversed && i.reverse(), r.paused && i.paused(!0), r.scrollTrigger && vi(Lt(i), r.scrollTrigger), i;
  }
  var e = t.prototype;
  return e.to = function(n, i, s) {
    return Ae(0, arguments, this), this;
  }, e.from = function(n, i, s) {
    return Ae(1, arguments, this), this;
  }, e.fromTo = function(n, i, s, o) {
    return Ae(2, arguments, this), this;
  }, e.set = function(n, i, s) {
    return i.duration = 0, i.parent = this, De(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new Z(n, i, Tt(this, s), 1), this;
  }, e.call = function(n, i, s) {
    return kt(this, Z.delayedCall(0, n, i), s);
  }, e.staggerTo = function(n, i, s, o, u, f, l) {
    return s.duration = i, s.stagger = s.stagger || o, s.onComplete = f, s.onCompleteParams = l, s.parent = this, new Z(n, s, Tt(this, u)), this;
  }, e.staggerFrom = function(n, i, s, o, u, f, l) {
    return s.runBackwards = 1, De(s).immediateRender = lt(s.immediateRender), this.staggerTo(n, i, s, o, u, f, l);
  }, e.staggerFromTo = function(n, i, s, o, u, f, l, c) {
    return o.startAt = s, De(o).immediateRender = lt(o.immediateRender), this.staggerTo(n, i, o, u, f, l, c);
  }, e.render = function(n, i, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = n <= 0 ? 0 : et(n), c = this._zTime < 0 != n < 0 && (this._initted || !f), d, p, m, _, g, y, v, T, b, w, C, P;
    if (this !== q && l > u && n >= 0 && (l = u), l !== this._tTime || s || c) {
      if (o !== this._time && f && (l += this._time - o, n += this._time - o), d = l, b = this._start, T = this._ts, y = !T, c && (f || (o = this._zTime), (n || !i) && (this._zTime = n)), this._repeat) {
        if (C = this._yoyo, g = f + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(g * 100 + n, i, s);
        if (d = et(l % g), l === u ? (_ = this._repeat, d = f) : (_ = ~~(l / g), _ && _ === l / g && (d = f, _--), d > f && (d = f)), w = ve(this._tTime, g), !o && this._tTime && w !== _ && this._tTime - w * g - this._dur <= 0 && (w = _), C && _ & 1 && (d = f - d, P = 1), _ !== w && !this._lock) {
          var E = C && w & 1, S = E === (C && _ & 1);
          if (_ < w && (E = !E), o = E ? 0 : l % f ? f : l, this._lock = 1, this.render(o || (P ? 0 : et(_ * g)), i, !f)._lock = 0, this._tTime = l, !i && this.parent && gt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, S && (this._lock = 2, o = E ? f : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Mi(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = uo(this, et(o), et(d)), v && (l -= d - (d = v._start))), this._tTime = l, this._time = d, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, o = 0), !o && d && !i && !_ && (gt(this, "onStart"), this._tTime !== l))
        return this;
      if (d >= o && n >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(n, i, s);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, i, s), d !== this._time || !this._ts && !y) {
              v = 0, m && (l += this._zTime = -V);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var I = n < 0 ? n : d; p; ) {
          if (m = p._prev, (p._act || I <= p._end) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(n, i, s);
            if (p.render(p._ts > 0 ? (I - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (I - p._start) * p._ts, i, s || st && (p._initted || p._startAt)), d !== this._time || !this._ts && !y) {
              v = 0, m && (l += this._zTime = I ? -V : V);
              break;
            }
          }
          p = m;
        }
      }
      if (v && !i && (this.pause(), v.render(d >= o ? 0 : -V)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = b, or(this), this.render(n, i, s);
      this._onUpdate && !i && gt(this, "onUpdate", !0), (l === u && this._tTime >= this.totalDuration() || !l && o) && (b === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((n || !f) && (l === u && this._ts > 0 || !l && this._ts < 0) && Gt(this, 1), !i && !(n < 0 && !o) && (l || o || !u) && (gt(this, l === u && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(n, i) {
    var s = this;
    if (Nt(i) || (i = Tt(this, i, n)), !(n instanceof ze)) {
      if (ot(n))
        return n.forEach(function(o) {
          return s.add(o, i);
        }), this;
      if (nt(n))
        return this.addLabel(n, i);
      if (G(n))
        n = Z.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? kt(this, n, i) : this;
  }, e.getChildren = function(n, i, s, o) {
    n === void 0 && (n = !0), i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = -St);
    for (var u = [], f = this._first; f; )
      f._start >= o && (f instanceof Z ? i && u.push(f) : (s && u.push(f), n && u.push.apply(u, f.getChildren(!0, i, s)))), f = f._next;
    return u;
  }, e.getById = function(n) {
    for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
      if (i[s].vars.id === n)
        return i[s];
  }, e.remove = function(n) {
    return nt(n) ? this.removeLabel(n) : G(n) ? this.killTweensOf(n) : (sr(this, n), n === this._recent && (this._recent = this._last), ne(this));
  }, e.totalTime = function(n, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = et(mt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), a.prototype.totalTime.call(this, n, i), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(n, i) {
    return this.labels[n] = Tt(this, i), this;
  }, e.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, e.addPause = function(n, i, s) {
    var o = Z.delayedCall(0, i || Ie, s);
    return o.data = "isPause", this._hasPause = 1, kt(this, o, Tt(this, n));
  }, e.removePause = function(n) {
    var i = this._first;
    for (n = Tt(this, n); i; )
      i._start === n && i.data === "isPause" && Gt(i), i = i._next;
  }, e.killTweensOf = function(n, i, s) {
    for (var o = this.getTweensOf(n, s), u = o.length; u--; )
      Yt !== o[u] && o[u].kill(n, i);
    return this;
  }, e.getTweensOf = function(n, i) {
    for (var s = [], o = Ot(n), u = this._first, f = Nt(i), l; u; )
      u instanceof Z ? eo(u._targets, o) && (f ? (!Yt || u._initted && u._ts) && u.globalTime(0) <= i && u.globalTime(u.totalDuration()) > i : !i || u.isActive()) && s.push(u) : (l = u.getTweensOf(o, i)).length && s.push.apply(s, l), u = u._next;
    return s;
  }, e.tweenTo = function(n, i) {
    i = i || {};
    var s = this, o = Tt(s, n), u = i, f = u.startAt, l = u.onStart, c = u.onStartParams, d = u.immediateRender, p, m = Z.to(s, Ct({
      ease: i.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: i.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || V,
      onStart: function() {
        if (s.pause(), !p) {
          var g = i.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          m._dur !== g && ye(m, g, 0, 1).render(m._time, !0, !0), p = 1;
        }
        l && l.apply(m, c || []);
      }
    }, i));
    return d ? m.render(0) : m;
  }, e.tweenFromTo = function(n, i, s) {
    return this.tweenTo(i, Ct({
      startAt: {
        time: Tt(this, n)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(n) {
    return n === void 0 && (n = this._time), An(this, Tt(this, n));
  }, e.previousLabel = function(n) {
    return n === void 0 && (n = this._time), An(this, Tt(this, n), 1);
  }, e.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + V);
  }, e.shiftChildren = function(n, i, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, u = this.labels, f; o; )
      o._start >= s && (o._start += n, o._end += n), o = o._next;
    if (i)
      for (f in u)
        u[f] >= s && (u[f] += n);
    return ne(this);
  }, e.invalidate = function(n) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(n), i = i._next;
    return a.prototype.invalidate.call(this, n);
  }, e.clear = function(n) {
    n === void 0 && (n = !0);
    for (var i = this._first, s; i; )
      s = i._next, this.remove(i), i = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), ne(this);
  }, e.totalDuration = function(n) {
    var i = 0, s = this, o = s._last, u = St, f, l, c;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -n : n));
    if (s._dirty) {
      for (c = s.parent; o; )
        f = o._prev, o._dirty && o.totalDuration(), l = o._start, l > u && s._sort && o._ts && !s._lock ? (s._lock = 1, kt(s, o, l - o._delay, 1)._lock = 0) : u = l, l < 0 && o._ts && (i -= l, (!c && !s._dp || c && c.smoothChildTiming) && (s._start += l / s._ts, s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), u = 0), o._end > i && o._ts && (i = o._end), o = f;
      ye(s, s === q && s._time > i ? s._time : i, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(n) {
    if (q._ts && (_i(q, tr(n, q)), ci = mt.frame), mt.frame >= En) {
      En += vt.autoSleep || 120;
      var i = q._first;
      if ((!i || !i._ts) && vt.autoSleep && mt._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || mt.sleep();
      }
    }
  }, t;
}(ze);
Ct(ut.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Oo = function(t, e, r, n, i, s, o) {
  var u = new ht(this._pt, t, e, 0, 1, Vi, null, i), f = 0, l = 0, c, d, p, m, _, g, y, v;
  for (u.b = r, u.e = n, r += "", n += "", (y = ~n.indexOf("random(")) && (n = je(n)), s && (v = [r, n], s(v, t, e), r = v[0], n = v[1]), d = r.match(gr) || []; c = gr.exec(n); )
    m = c[0], _ = n.substring(f, c.index), p ? p = (p + 1) % 5 : _.substr(-5) === "rgba(" && (p = 1), m !== d[l++] && (g = parseFloat(d[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: _ || l === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? de(g, m) - g : parseFloat(m) - g,
      m: p && p < 4 ? Math.round : 0
    }, f = gr.lastIndex);
  return u.c = f < n.length ? n.substring(f, n.length) : "", u.fp = o, (oi.test(n) || y) && (u.e = 0), this._pt = u, u;
}, Zr = function(t, e, r, n, i, s, o, u, f, l) {
  G(n) && (n = n(i || 0, t, s));
  var c = t[e], d = r !== "get" ? r : G(c) ? f ? t[e.indexOf("set") || !G(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : c, p = G(c) ? f ? ko : Ni : en, m;
  if (nt(n) && (~n.indexOf("random(") && (n = je(n)), n.charAt(1) === "=" && (m = de(d, n) + (it(d) || 0), (m || m === 0) && (n = m))), !l || d !== n || Lr)
    return !isNaN(d * n) && n !== "" ? (m = new ht(this._pt, t, e, +d || 0, n - (d || 0), typeof c == "boolean" ? Ao : Bi, 0, p), f && (m.fp = f), o && m.modifier(o, this, t), this._pt = m) : (!c && !(e in t) && Hr(e, n), Oo.call(this, t, e, d, n, p, u || vt.stringFilter, f));
}, Co = function(t, e, r, n, i) {
  if (G(t) && (t = Me(t, i, e, r, n)), !Mt(t) || t.style && t.nodeType || ot(t) || ii(t))
    return nt(t) ? Me(t, i, e, r, n) : t;
  var s = {}, o;
  for (o in t)
    s[o] = Me(t[o], i, e, r, n);
  return s;
}, ji = function(t, e, r, n, i, s) {
  var o, u, f, l;
  if (pt[t] && (o = new pt[t]()).init(i, o.rawVars ? e[t] : Co(e[t], n, i, s, r), r, n, s) !== !1 && (r._pt = u = new ht(r._pt, i, t, 0, 1, o.render, o, 0, o.priority), r !== _e))
    for (f = r._ptLookup[r._targets.indexOf(i)], l = o._props.length; l--; )
      f[o._props[l]] = u;
  return o;
}, Yt, Lr, tn = function a(t, e, r) {
  var n = t.vars, i = n.ease, s = n.startAt, o = n.immediateRender, u = n.lazy, f = n.onUpdate, l = n.runBackwards, c = n.yoyoEase, d = n.keyframes, p = n.autoRevert, m = t._dur, _ = t._startAt, g = t._targets, y = t.parent, v = y && y.data === "nested" ? y.vars.targets : g, T = t._overwrite === "auto" && !Ur, b = t.timeline, w, C, P, E, S, I, B, L, D, $, Y, U, H;
  if (b && (!d || !i) && (i = "none"), t._ease = ie(i, ge.ease), t._yEase = c ? Ai(ie(c === !0 ? i : c, ge.ease)) : 0, c && t._yoyo && !t._repeat && (c = t._yEase, t._yEase = t._ease, t._ease = c), t._from = !b && !!n.runBackwards, !b || d && !n.stagger) {
    if (L = g[0] ? re(g[0]).harness : 0, U = L && n[L.prop], w = Ze(n, Kr), _ && (_._zTime < 0 && _.progress(1), e < 0 && l && o && !p ? _.render(-1, !0) : _.revert(l && m ? Ge : Zs), _._lazy = 0), s) {
      if (Gt(t._startAt = Z.set(g, Ct({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !_ && lt(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return gt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st || !o && !p) && t._startAt.revert(Ge), o && m && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && m && !_) {
      if (e && (o = !1), P = Ct({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !_ && lt(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), U && (P[L.prop] = U), Gt(t._startAt = Z.set(g, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st ? t._startAt.revert(Ge) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, V, V);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = m && lt(u) || u && !m, C = 0; C < g.length; C++) {
      if (S = g[C], B = S._gsap || Jr(g)[C]._gsap, t._ptLookup[C] = $ = {}, Dr[B.id] && qt.length && Je(), Y = v === g ? C : v.indexOf(S), L && (D = new L()).init(S, U || w, t, Y, v) !== !1 && (t._pt = E = new ht(t._pt, S, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach(function(ft) {
        $[ft] = E;
      }), D.priority && (I = 1)), !L || U)
        for (P in w)
          pt[P] && (D = ji(P, w, t, Y, S, v)) ? D.priority && (I = 1) : $[P] = E = Zr.call(t, S, P, "get", w[P], Y, v, 0, n.stringFilter);
      t._op && t._op[C] && t.kill(S, t._op[C]), T && t._pt && (Yt = t, q.killTweensOf(S, $, t.globalTime(e)), H = !t.parent, Yt = 0), t._pt && u && (Dr[B.id] = 1);
    }
    I && $i(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !H, d && e <= 0 && b.render(St, !0, !0);
}, Po = function(t, e, r, n, i, s, o, u) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, c, d, p;
  if (!f)
    for (f = t._ptCache[e] = [], d = t._ptLookup, p = t._targets.length; p--; ) {
      if (l = d[p][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return Lr = 1, t.vars[e] = "+=0", tn(t, o), Lr = 0, u ? Fe(e + " not eligible for reset") : 1;
      f.push(l);
    }
  for (p = f.length; p--; )
    c = f[p], l = c._pt || c, l.s = (n || n === 0) && !i ? n : l.s + (n || 0) + s * l.c, l.c = r - l.s, c.e && (c.e = Q(r) + it(c.e)), c.b && (c.b = l.s + it(c.b));
}, Eo = function(t, e) {
  var r = t[0] ? re(t[0]).harness : 0, n = r && r.aliases, i, s, o, u;
  if (!n)
    return e;
  i = oe({}, e);
  for (s in n)
    if (s in i)
      for (u = n[s].split(","), o = u.length; o--; )
        i[u[o]] = i[s];
  return i;
}, Ro = function(t, e, r, n) {
  var i = e.ease || n || "power1.inOut", s, o;
  if (ot(e))
    o = r[t] || (r[t] = []), e.forEach(function(u, f) {
      return o.push({
        t: f / (e.length - 1) * 100,
        v: u,
        e: i
      });
    });
  else
    for (s in e)
      o = r[s] || (r[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: i
      });
}, Me = function(t, e, r, n, i) {
  return G(t) ? t.call(e, r, n, i) : nt(t) && ~t.indexOf("random(") ? je(t) : t;
}, Li = Qr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", zi = {};
ct(Li + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return zi[a] = 1;
});
var Z = /* @__PURE__ */ function(a) {
  ri(t, a);
  function t(r, n, i, s) {
    var o;
    typeof n == "number" && (i.duration = n, n = i, i = null), o = a.call(this, s ? n : De(n)) || this;
    var u = o.vars, f = u.duration, l = u.delay, c = u.immediateRender, d = u.stagger, p = u.overwrite, m = u.keyframes, _ = u.defaults, g = u.scrollTrigger, y = u.yoyoEase, v = n.parent || q, T = (ot(r) || ii(r) ? Nt(r[0]) : "length" in n) ? [r] : Ot(r), b, w, C, P, E, S, I, B;
    if (o._targets = T.length ? Jr(T) : Fe("GSAP target " + r + " not found. https://gsap.com", !vt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, m || d || Xe(f) || Xe(l)) {
      if (n = o.vars, b = o.timeline = new ut({
        data: "nested",
        defaults: _ || {},
        targets: v && v.data === "nested" ? v.vars.targets : T
      }), b.kill(), b.parent = b._dp = Lt(o), b._start = 0, d || Xe(f) || Xe(l)) {
        if (P = T.length, I = d && Ti(d), Mt(d))
          for (E in d)
            ~Li.indexOf(E) && (B || (B = {}), B[E] = d[E]);
        for (w = 0; w < P; w++)
          C = Ze(n, zi), C.stagger = 0, y && (C.yoyoEase = y), B && oe(C, B), S = T[w], C.duration = +Me(f, Lt(o), w, S, T), C.delay = (+Me(l, Lt(o), w, S, T) || 0) - o._delay, !d && P === 1 && C.delay && (o._delay = l = C.delay, o._start += l, C.delay = 0), b.to(S, C, I ? I(w, S, T) : 0), b._ease = M.none;
        b.duration() ? f = l = 0 : o.timeline = 0;
      } else if (m) {
        De(Ct(b.vars.defaults, {
          ease: "none"
        })), b._ease = ie(m.ease || n.ease || "none");
        var L = 0, D, $, Y;
        if (ot(m))
          m.forEach(function(U) {
            return b.to(T, U, ">");
          }), b.duration();
        else {
          C = {};
          for (E in m)
            E === "ease" || E === "easeEach" || Ro(E, m[E], C, m.easeEach);
          for (E in C)
            for (D = C[E].sort(function(U, H) {
              return U.t - H.t;
            }), L = 0, w = 0; w < D.length; w++)
              $ = D[w], Y = {
                ease: $.e,
                duration: ($.t - (w ? D[w - 1].t : 0)) / 100 * f
              }, Y[E] = $.v, b.to(T, Y, L), L += Y.duration;
          b.duration() < f && b.to({}, {
            duration: f - b.duration()
          });
        }
      }
      f || o.duration(f = b.duration());
    } else
      o.timeline = 0;
    return p === !0 && !Ur && (Yt = Lt(o), q.killTweensOf(T), Yt = 0), kt(v, Lt(o), i), n.reversed && o.reverse(), n.paused && o.paused(!0), (c || !f && !m && o._start === et(v._time) && lt(c) && so(Lt(o)) && v.data !== "nested") && (o._tTime = -V, o.render(Math.max(0, -l) || 0)), g && vi(Lt(o), g), o;
  }
  var e = t.prototype;
  return e.render = function(n, i, s) {
    var o = this._time, u = this._tDur, f = this._dur, l = n < 0, c = n > u - V && !l ? u : n < V ? 0 : n, d, p, m, _, g, y, v, T, b;
    if (!f)
      ao(this, n, i, s);
    else if (c !== this._tTime || !n || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l) {
      if (d = c, T = this.timeline, this._repeat) {
        if (_ = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(_ * 100 + n, i, s);
        if (d = et(c % _), c === u ? (m = this._repeat, d = f) : (m = ~~(c / _), m && m === et(c / _) && (d = f, m--), d > f && (d = f)), y = this._yoyo && m & 1, y && (b = this._yEase, d = f - d), g = ve(this._tTime, _), d === o && !s && this._initted && m === g)
          return this._tTime = c, this;
        m !== g && (T && this._yEase && Mi(T, y), this.vars.repeatRefresh && !y && !this._lock && this._time !== _ && this._initted && (this._lock = s = 1, this.render(et(_ * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (yi(this, l ? n : d, s, i, c))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && m !== g))
          return this;
        if (f !== this._dur)
          return this.render(n, i, s);
      }
      if (this._tTime = c, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (b || this._ease)(d / f), this._from && (this.ratio = v = 1 - v), d && !o && !i && !m && (gt(this, "onStart"), this._tTime !== c))
        return this;
      for (p = this._pt; p; )
        p.r(v, p.d), p = p._next;
      T && T.render(n < 0 ? n : T._dur * T._ease(d / this._dur), i, s) || this._startAt && (this._zTime = n), this._onUpdate && !i && (l && Ar(this, n, i, s), gt(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !i && this.parent && gt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (l && !this._onUpdate && Ar(this, n, !0, !0), (n || !f) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Gt(this, 1), !i && !(l && !o) && (c || o || y) && (gt(this, c === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), a.prototype.invalidate.call(this, n);
  }, e.resetTo = function(n, i, s, o, u) {
    Le || mt.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || tn(this, f), l = this._ease(f / this._dur), Po(this, n, i, s, o, l, f, u) ? this.resetTo(n, i, s, o, 1) : (ar(this, 0), this.parent || mi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(n, i) {
    if (i === void 0 && (i = "all"), !n && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? Re(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, i, Yt && Yt.vars.overwrite !== !0)._first || Re(this), this.parent && s !== this.timeline.totalDuration() && ye(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = n ? Ot(n) : o, f = this._ptLookup, l = this._pt, c, d, p, m, _, g, y;
    if ((!i || i === "all") && no(o, u))
      return i === "all" && (this._pt = 0), Re(this);
    for (c = this._op = this._op || [], i !== "all" && (nt(i) && (_ = {}, ct(i, function(v) {
      return _[v] = 1;
    }), i = _), i = Eo(o, i)), y = o.length; y--; )
      if (~u.indexOf(o[y])) {
        d = f[y], i === "all" ? (c[y] = i, m = d, p = {}) : (p = c[y] = c[y] || {}, m = i);
        for (_ in m)
          g = d && d[_], g && ((!("kill" in g.d) || g.d.kill(_) === !0) && sr(this, g, "_pt"), delete d[_]), p !== "all" && (p[_] = 1);
      }
    return this._initted && !this._pt && l && Re(this), this;
  }, t.to = function(n, i) {
    return new t(n, i, arguments[2]);
  }, t.from = function(n, i) {
    return Ae(1, arguments);
  }, t.delayedCall = function(n, i, s, o) {
    return new t(i, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(n, i, s) {
    return Ae(2, arguments);
  }, t.set = function(n, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new t(n, i);
  }, t.killTweensOf = function(n, i, s) {
    return q.killTweensOf(n, i, s);
  }, t;
}(ze);
Ct(Z.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ct("staggerTo,staggerFrom,staggerFromTo", function(a) {
  Z[a] = function() {
    var t = new ut(), e = Fr.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var en = function(t, e, r) {
  return t[e] = r;
}, Ni = function(t, e, r) {
  return t[e](r);
}, ko = function(t, e, r, n) {
  return t[e](n.fp, r);
}, Do = function(t, e, r) {
  return t.setAttribute(e, r);
}, rn = function(t, e) {
  return G(t[e]) ? Ni : qr(t[e]) && t.setAttribute ? Do : en;
}, Bi = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Ao = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Vi = function(t, e) {
  var r = e._pt, n = "";
  if (!t && e.b)
    n = e.b;
  else if (t === 1 && e.e)
    n = e.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
    n += e.c;
  }
  e.set(e.t, e.p, n, e);
}, nn = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, Mo = function(t, e, r, n) {
  for (var i = this._pt, s; i; )
    s = i._next, i.p === n && i.modifier(t, e, r), i = s;
}, Fo = function(t) {
  for (var e = this._pt, r, n; e; )
    n = e._next, e.p === t && !e.op || e.op === t ? sr(this, e, "_pt") : e.dep || (r = 1), e = n;
  return !r;
}, Io = function(t, e, r, n) {
  n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
}, $i = function(t) {
  for (var e = t._pt, r, n, i, s; e; ) {
    for (r = e._next, n = i; n && n.pr > e.pr; )
      n = n._next;
    (e._prev = n ? n._prev : s) ? e._prev._next = e : i = e, (e._next = n) ? n._prev = e : s = e, e = r;
  }
  t._pt = i;
}, ht = /* @__PURE__ */ function() {
  function a(e, r, n, i, s, o, u, f, l) {
    this.t = r, this.s = i, this.c = s, this.p = n, this.r = o || Bi, this.d = u || this, this.set = f || en, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(r, n, i) {
    this.mSet = this.mSet || this.set, this.set = Io, this.m = r, this.mt = i, this.tween = n;
  }, a;
}();
ct(Qr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return Kr[a] = 1;
});
xt.TweenMax = xt.TweenLite = Z;
xt.TimelineLite = xt.TimelineMax = ut;
q = new ut({
  sortChildren: !1,
  defaults: ge,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
vt.stringFilter = Di;
var se = [], Ke = {}, jo = [], Fn = 0, Lo = 0, Tr = function(t) {
  return (Ke[t] || jo).map(function(e) {
    return e();
  });
}, zr = function() {
  var t = Date.now(), e = [];
  t - Fn > 2 && (Tr("matchMediaInit"), se.forEach(function(r) {
    var n = r.queries, i = r.conditions, s, o, u, f;
    for (o in n)
      s = Rt.matchMedia(n[o]).matches, s && (u = 1), s !== i[o] && (i[o] = s, f = 1);
    f && (r.revert(), u && e.push(r));
  }), Tr("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), Fn = t, Tr("matchMedia"));
}, Yi = /* @__PURE__ */ function() {
  function a(e, r) {
    this.selector = r && Ir(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Lo++, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(r, n, i) {
    G(r) && (i = n, n = r, r = G);
    var s = this, o = function() {
      var f = W, l = s.selector, c;
      return f && f !== s && f.data.push(s), i && (s.selector = Ir(i)), W = s, c = n.apply(s, arguments), G(c) && s._r.push(c), W = f, s.selector = l, s.isReverted = !1, c;
    };
    return s.last = o, r === G ? o(s, function(u) {
      return s.add(null, u);
    }) : r ? s[r] = o : o;
  }, t.ignore = function(r) {
    var n = W;
    W = null, r(this), W = n;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof a ? r.push.apply(r, n.getTweens()) : n instanceof Z && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, n) {
    var i = this;
    if (r ? function() {
      for (var o = i.getTweens(), u = i.data.length, f; u--; )
        f = i.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return o.splice(o.indexOf(l), 1);
        }));
      for (o.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, c) {
        return c.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(r);
      }), u = i.data.length; u--; )
        f = i.data[u], f instanceof ut ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof Z) && f.revert && f.revert(r);
      i._r.forEach(function(l) {
        return l(r, i);
      }), i.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), n)
      for (var s = se.length; s--; )
        se[s].id === this.id && se.splice(s, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, a;
}(), zo = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, W && W.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(r, n, i) {
    Mt(r) || (r = {
      matches: r
    });
    var s = new Yi(0, i || this.scope), o = s.conditions = {}, u, f, l;
    W && !s.selector && (s.selector = W.selector), this.contexts.push(s), n = s.add("onMatch", n), s.queries = r;
    for (f in r)
      f === "all" ? l = 1 : (u = Rt.matchMedia(r[f]), u && (se.indexOf(s) < 0 && se.push(s), (o[f] = u.matches) && (l = 1), u.addListener ? u.addListener(zr) : u.addEventListener("change", zr)));
    return l && n(s, function(c) {
      return s.add(null, c);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, a;
}(), er = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(n) {
      return Ei(n);
    });
  },
  timeline: function(t) {
    return new ut(t);
  },
  getTweensOf: function(t, e) {
    return q.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, n) {
    nt(t) && (t = Ot(t)[0]);
    var i = re(t || {}).get, s = r ? pi : di;
    return r === "native" && (r = ""), t && (e ? s((pt[e] && pt[e].get || i)(t, e, r, n)) : function(o, u, f) {
      return s((pt[o] && pt[o].get || i)(t, o, u, f));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Ot(t), t.length > 1) {
      var n = t.map(function(l) {
        return dt.quickSetter(l, e, r);
      }), i = n.length;
      return function(l) {
        for (var c = i; c--; )
          n[c](l);
      };
    }
    t = t[0] || {};
    var s = pt[e], o = re(t), u = o.harness && (o.harness.aliases || {})[e] || e, f = s ? function(l) {
      var c = new s();
      _e._pt = 0, c.init(t, r ? l + r : l, _e, 0, [t]), c.render(1, c), _e._pt && nn(1, _e);
    } : o.set(t, u);
    return s ? f : function(l) {
      return f(t, u, r ? l + r : l, o, 1);
    };
  },
  quickTo: function(t, e, r) {
    var n, i = dt.to(t, oe((n = {}, n[e] = "+=0.1", n.paused = !0, n), r || {})), s = function(u, f, l) {
      return i.resetTo(e, u, f, l);
    };
    return s.tween = i, s;
  },
  isTweening: function(t) {
    return q.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = ie(t.ease, ge.ease)), Rn(ge, t || {});
  },
  config: function(t) {
    return Rn(vt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, n = t.plugins, i = t.defaults, s = t.extendTimeline;
    (n || "").split(",").forEach(function(o) {
      return o && !pt[o] && !xt[o] && Fe(e + " effect requires " + o + " plugin.");
    }), vr[e] = function(o, u, f) {
      return r(Ot(o), Ct(u || {}, i), f);
    }, s && (ut.prototype[e] = function(o, u, f) {
      return this.add(vr[e](o, Mt(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    M[t] = ie(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? ie(t, e) : M;
  },
  getById: function(t) {
    return q.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ut(t), n, i;
    for (r.smoothChildTiming = lt(t.smoothChildTiming), q.remove(r), r._dp = 0, r._time = r._tTime = q._time, n = q._first; n; )
      i = n._next, (e || !(!n._dur && n instanceof Z && n.vars.onComplete === n._targets[0])) && kt(r, n, n._start - n._delay), n = i;
    return kt(q, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Yi(t, e) : W;
  },
  matchMedia: function(t) {
    return new zo(t);
  },
  matchMediaRefresh: function() {
    return se.forEach(function(t) {
      var e = t.conditions, r, n;
      for (n in e)
        e[n] && (e[n] = !1, r = 1);
      r && t.revert();
    }) || zr();
  },
  addEventListener: function(t, e) {
    var r = Ke[t] || (Ke[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Ke[t], n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: mo,
    wrapYoyo: go,
    distribute: Ti,
    random: Si,
    snap: bi,
    normalize: po,
    getUnit: it,
    clamp: lo,
    splitColor: Ri,
    toArray: Ot,
    selector: Ir,
    mapRange: Ci,
    pipe: ho,
    unitize: _o,
    interpolate: vo,
    shuffle: wi
  },
  install: fi,
  effects: vr,
  ticker: mt,
  updateRoot: ut.updateRoot,
  plugins: pt,
  globalTimeline: q,
  core: {
    PropTween: ht,
    globals: li,
    Tween: Z,
    Timeline: ut,
    Animation: ze,
    getCache: re,
    _removeLinkedListItem: sr,
    reverting: function() {
      return st;
    },
    context: function(t) {
      return t && W && (W.data.push(t), t._ctx = W), W;
    },
    suppressOverwrites: function(t) {
      return Ur = t;
    }
  }
};
ct("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return er[a] = Z[a];
});
mt.add(ut.updateRoot);
_e = er.to({}, {
  duration: 0
});
var No = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Bo = function(t, e) {
  var r = t._targets, n, i, s;
  for (n in e)
    for (i = r.length; i--; )
      s = t._ptLookup[i][n], s && (s = s.d) && (s._pt && (s = No(s, n)), s && s.modifier && s.modifier(e[n], t, r[i], n));
}, br = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, i, s) {
      s._onInit = function(o) {
        var u, f;
        if (nt(i) && (u = {}, ct(i, function(l) {
          return u[l] = 1;
        }), i = u), e) {
          u = {};
          for (f in i)
            u[f] = e(i[f]);
          i = u;
        }
        Bo(o, i);
      };
    }
  };
}, dt = er.registerPlugin({
  name: "attr",
  init: function(t, e, r, n, i) {
    var s, o, u;
    this.tween = r;
    for (s in e)
      u = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (u || 0) + "", e[s], n, i, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      st ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, br("roundProps", jr), br("modifiers"), br("snap", bi)) || er;
Z.version = ut.version = dt.version = "3.12.5";
ui = 1;
Xr() && xe();
M.Power0;
M.Power1;
M.Power2;
M.Power3;
M.Power4;
M.Linear;
M.Quad;
M.Cubic;
M.Quart;
M.Quint;
M.Strong;
M.Elastic;
M.Back;
M.SteppedEase;
M.Bounce;
M.Sine;
M.Expo;
M.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var In, Wt, pe, sn, ee, jn, on, Vo = function() {
  return typeof window < "u";
}, Bt = {}, te = 180 / Math.PI, me = Math.PI / 180, ce = Math.atan2, Ln = 1e8, an = /([A-Z])/g, $o = /(left|right|width|margin|padding|x)/i, Yo = /[\s,\(]\S/, Dt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Nr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Wo = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Uo = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, qo = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Wi = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Ui = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Xo = function(t, e, r) {
  return t.style[e] = r;
}, Go = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Ho = function(t, e, r) {
  return t._gsap[e] = r;
}, Ko = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Qo = function(t, e, r, n, i) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(i, s);
}, Jo = function(t, e, r, n, i) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(i, s);
}, X = "transform", _t = X + "Origin", Zo = function a(t, e) {
  var r = this, n = this.target, i = n.style, s = n._gsap;
  if (t in Bt && i) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Dt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = zt(n, o);
      }) : this.tfm[t] = s.x ? s[t] : zt(n, t), t === _t && (this.tfm.zOrigin = s.zOrigin);
    else
      return Dt.transform.split(",").forEach(function(o) {
        return a.call(r, o, e);
      });
    if (this.props.indexOf(X) >= 0)
      return;
    s.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(_t, e, "")), t = X;
  }
  (i || e) && this.props.push(t, e, i[t]);
}, qi = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, ta = function() {
  var t = this.props, e = this.target, r = e.style, n = e._gsap, i, s;
  for (i = 0; i < t.length; i += 3)
    t[i + 1] ? e[t[i]] = t[i + 2] : t[i + 2] ? r[t[i]] = t[i + 2] : r.removeProperty(t[i].substr(0, 2) === "--" ? t[i] : t[i].replace(an, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      n[s] = this.tfm[s];
    n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), i = on(), (!i || !i.isStart) && !r[X] && (qi(r), n.zOrigin && r[_t] && (r[_t] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, Xi = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: ta,
    save: Zo
  };
  return t._gsap || dt.core.getCache(t), e && e.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, Gi, Br = function(t, e) {
  var r = Wt.createElementNS ? Wt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Wt.createElement(t);
  return r && r.style ? r : Wt.createElement(t);
}, At = function a(t, e, r) {
  var n = getComputedStyle(t);
  return n[e] || n.getPropertyValue(e.replace(an, "-$1").toLowerCase()) || n.getPropertyValue(e) || !r && a(t, we(e) || e, 1) || "";
}, zn = "O,Moz,ms,Ms,Webkit".split(","), we = function(t, e, r) {
  var n = e || ee, i = n.style, s = 5;
  if (t in i && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(zn[s] + t in i); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? zn[s] : "") + t;
}, Vr = function() {
  Vo() && window.document && (In = window, Wt = In.document, pe = Wt.documentElement, ee = Br("div") || {
    style: {}
  }, Br("div"), X = we(X), _t = X + "Origin", ee.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Gi = !!we("perspective"), on = dt.core.reverting, sn = 1);
}, Sr = function a(t) {
  var e = Br("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, n = this.nextSibling, i = this.style.cssText, s;
  if (pe.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), pe.removeChild(e), this.style.cssText = i, s;
}, Nn = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, Hi = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Sr.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Sr || (e = Sr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Nn(t, ["x", "cx", "x1"]) || 0,
    y: +Nn(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Ki = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Hi(t));
}, ae = function(t, e) {
  if (e) {
    var r = t.style, n;
    e in Bt && e !== _t && (e = X), r.removeProperty ? (n = e.substr(0, 2), (n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(n === "--" ? e : e.replace(an, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Ut = function(t, e, r, n, i, s) {
  var o = new ht(t._pt, e, r, 0, 1, s ? Ui : Wi);
  return t._pt = o, o.b = n, o.e = i, t._props.push(r), o;
}, Bn = {
  deg: 1,
  rad: 1,
  turn: 1
}, ea = {
  grid: 1,
  flex: 1
}, Ht = function a(t, e, r, n) {
  var i = parseFloat(r) || 0, s = (r + "").trim().substr((i + "").length) || "px", o = ee.style, u = $o.test(e), f = t.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (u ? "Width" : "Height"), c = 100, d = n === "px", p = n === "%", m, _, g, y;
  if (n === s || !i || Bn[n] || Bn[s])
    return i;
  if (s !== "px" && !d && (i = a(t, e, r, "px")), y = t.getCTM && Ki(t), (p || s === "%") && (Bt[e] || ~e.indexOf("adius")))
    return m = y ? t.getBBox()[u ? "width" : "height"] : t[l], Q(p ? i / m * c : i / 100 * m);
  if (o[u ? "width" : "height"] = c + (d ? s : n), _ = ~e.indexOf("adius") || n === "em" && t.appendChild && !f ? t : t.parentNode, y && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Wt || !_.appendChild) && (_ = Wt.body), g = _._gsap, g && p && g.width && u && g.time === mt.time && !g.uncache)
    return Q(i / g.width * c);
  if (p && (e === "height" || e === "width")) {
    var v = t.style[e];
    t.style[e] = c + n, m = t[l], v ? t.style[e] = v : ae(t, e);
  } else
    (p || s === "%") && !ea[At(_, "display")] && (o.position = At(t, "position")), _ === t && (o.position = "static"), _.appendChild(ee), m = ee[l], _.removeChild(ee), o.position = "absolute";
  return u && p && (g = re(_), g.time = mt.time, g.width = _[l]), Q(d ? m * i / c : m && i ? c / m * i : 0);
}, zt = function(t, e, r, n) {
  var i;
  return sn || Vr(), e in Dt && e !== "transform" && (e = Dt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Bt[e] && e !== "transform" ? (i = Be(t, n), i = e !== "transformOrigin" ? i[e] : i.svg ? i.origin : nr(At(t, _t)) + " " + i.zOrigin + "px") : (i = t.style[e], (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = rr[e] && rr[e](t, e, r) || At(t, e) || hi(t, e) || (e === "opacity" ? 1 : 0))), r && !~(i + "").trim().indexOf(" ") ? Ht(t, e, i, r) + r : i;
}, ra = function(t, e, r, n) {
  if (!r || r === "none") {
    var i = we(e, t, 1), s = i && At(t, i, 1);
    s && s !== r ? (e = i, r = s) : e === "borderColor" && (r = At(t, "borderTopColor"));
  }
  var o = new ht(this._pt, t.style, e, 0, 1, Vi), u = 0, f = 0, l, c, d, p, m, _, g, y, v, T, b, w;
  if (o.b = r, o.e = n, r += "", n += "", n === "auto" && (_ = t.style[e], t.style[e] = n, n = At(t, e) || n, _ ? t.style[e] = _ : ae(t, e)), l = [r, n], Di(l), r = l[0], n = l[1], d = r.match(he) || [], w = n.match(he) || [], w.length) {
    for (; c = he.exec(n); )
      g = c[0], v = n.substring(u, c.index), m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1), g !== (_ = d[f++] || "") && (p = parseFloat(_) || 0, b = _.substr((p + "").length), g.charAt(1) === "=" && (g = de(p, g) + b), y = parseFloat(g), T = g.substr((y + "").length), u = he.lastIndex - T.length, T || (T = T || vt.units[e] || b, u === n.length && (n += T, o.e += T)), b !== T && (p = Ht(t, e, _, T) || 0), o._pt = {
        _next: o._pt,
        p: v || f === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: y - p,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = u < n.length ? n.substring(u, n.length) : "";
  } else
    o.r = e === "display" && n === "none" ? Ui : Wi;
  return oi.test(n) && (o.e = 0), this._pt = o, o;
}, Vn = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, na = function(t) {
  var e = t.split(" "), r = e[0], n = e[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (t = r, r = n, n = t), e[0] = Vn[r] || r, e[1] = Vn[n] || n, e.join(" ");
}, ia = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, n = r.style, i = e.u, s = r._gsap, o, u, f;
    if (i === "all" || i === !0)
      n.cssText = "", u = 1;
    else
      for (i = i.split(","), f = i.length; --f > -1; )
        o = i[f], Bt[o] && (u = 1, o = o === "transformOrigin" ? _t : X), ae(r, o);
    u && (ae(r, X), s && (s.svg && r.removeAttribute("transform"), Be(r, 1), s.uncache = 1, qi(n)));
  }
}, rr = {
  clearProps: function(t, e, r, n, i) {
    if (i.data !== "isFromStart") {
      var s = t._pt = new ht(t._pt, e, r, 0, 0, ia);
      return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ne = [1, 0, 0, 1, 0, 0], Qi = {}, Ji = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, $n = function(t) {
  var e = At(t, X);
  return Ji(e) ? Ne : e.substr(7).match(si).map(Q);
}, un = function(t, e) {
  var r = t._gsap || re(t), n = t.style, i = $n(t), s, o, u, f;
  return r.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, i = [u.a, u.b, u.c, u.d, u.e, u.f], i.join(",") === "1,0,0,1,0,0" ? Ne : i) : (i === Ne && !t.offsetParent && t !== pe && !r.svg && (u = n.display, n.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (f = 1, o = t.nextElementSibling, pe.appendChild(t)), i = $n(t), u ? n.display = u : ae(t, "display"), f && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : pe.removeChild(t))), e && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, $r = function(t, e, r, n, i, s) {
  var o = t._gsap, u = i || un(t, !0), f = o.xOrigin || 0, l = o.yOrigin || 0, c = o.xOffset || 0, d = o.yOffset || 0, p = u[0], m = u[1], _ = u[2], g = u[3], y = u[4], v = u[5], T = e.split(" "), b = parseFloat(T[0]) || 0, w = parseFloat(T[1]) || 0, C, P, E, S;
  r ? u !== Ne && (P = p * g - m * _) && (E = b * (g / P) + w * (-_ / P) + (_ * v - g * y) / P, S = b * (-m / P) + w * (p / P) - (p * v - m * y) / P, b = E, w = S) : (C = Hi(t), b = C.x + (~T[0].indexOf("%") ? b / 100 * C.width : b), w = C.y + (~(T[1] || T[0]).indexOf("%") ? w / 100 * C.height : w)), n || n !== !1 && o.smooth ? (y = b - f, v = w - l, o.xOffset = c + (y * p + v * _) - y, o.yOffset = d + (y * m + v * g) - v) : o.xOffset = o.yOffset = 0, o.xOrigin = b, o.yOrigin = w, o.smooth = !!n, o.origin = e, o.originIsAbsolute = !!r, t.style[_t] = "0px 0px", s && (Ut(s, o, "xOrigin", f, b), Ut(s, o, "yOrigin", l, w), Ut(s, o, "xOffset", c, o.xOffset), Ut(s, o, "yOffset", d, o.yOffset)), t.setAttribute("data-svg-origin", b + " " + w);
}, Be = function(t, e) {
  var r = t._gsap || new Ii(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var n = t.style, i = r.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(t), f = At(t, _t) || "0", l, c, d, p, m, _, g, y, v, T, b, w, C, P, E, S, I, B, L, D, $, Y, U, H, ft, Qt, Vt, $t, Et, Se, Pt, It;
  return l = c = d = _ = g = y = v = T = b = 0, p = m = 1, r.svg = !!(t.getCTM && Ki(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (n[X] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[X] !== "none" ? u[X] : "")), n.scale = n.rotate = n.translate = "none"), P = un(t, r.svg), r.svg && (r.uncache ? (ft = t.getBBox(), f = r.xOrigin - ft.x + "px " + (r.yOrigin - ft.y) + "px", H = "") : H = !e && t.getAttribute("data-svg-origin"), $r(t, H || f, !!H || r.originIsAbsolute, r.smooth !== !1, P)), w = r.xOrigin || 0, C = r.yOrigin || 0, P !== Ne && (B = P[0], L = P[1], D = P[2], $ = P[3], l = Y = P[4], c = U = P[5], P.length === 6 ? (p = Math.sqrt(B * B + L * L), m = Math.sqrt($ * $ + D * D), _ = B || L ? ce(L, B) * te : 0, v = D || $ ? ce(D, $) * te + _ : 0, v && (m *= Math.abs(Math.cos(v * me))), r.svg && (l -= w - (w * B + C * D), c -= C - (w * L + C * $))) : (It = P[6], Se = P[7], Vt = P[8], $t = P[9], Et = P[10], Pt = P[11], l = P[12], c = P[13], d = P[14], E = ce(It, Et), g = E * te, E && (S = Math.cos(-E), I = Math.sin(-E), H = Y * S + Vt * I, ft = U * S + $t * I, Qt = It * S + Et * I, Vt = Y * -I + Vt * S, $t = U * -I + $t * S, Et = It * -I + Et * S, Pt = Se * -I + Pt * S, Y = H, U = ft, It = Qt), E = ce(-D, Et), y = E * te, E && (S = Math.cos(-E), I = Math.sin(-E), H = B * S - Vt * I, ft = L * S - $t * I, Qt = D * S - Et * I, Pt = $ * I + Pt * S, B = H, L = ft, D = Qt), E = ce(L, B), _ = E * te, E && (S = Math.cos(E), I = Math.sin(E), H = B * S + L * I, ft = Y * S + U * I, L = L * S - B * I, U = U * S - Y * I, B = H, Y = ft), g && Math.abs(g) + Math.abs(_) > 359.9 && (g = _ = 0, y = 180 - y), p = Q(Math.sqrt(B * B + L * L + D * D)), m = Q(Math.sqrt(U * U + It * It)), E = ce(Y, U), v = Math.abs(E) > 2e-4 ? E * te : 0, b = Pt ? 1 / (Pt < 0 ? -Pt : Pt) : 0), r.svg && (H = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ji(At(t, X)), H && t.setAttribute("transform", H))), Math.abs(v) > 90 && Math.abs(v) < 270 && (i ? (p *= -1, v += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (m *= -1, v += v <= 0 ? 180 : -180)), e = e || r.uncache, r.x = l - ((r.xPercent = l && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = c - ((r.yPercent = c && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = d + s, r.scaleX = Q(p), r.scaleY = Q(m), r.rotation = Q(_) + o, r.rotationX = Q(g) + o, r.rotationY = Q(y) + o, r.skewX = v + o, r.skewY = T + o, r.transformPerspective = b + s, (r.zOrigin = parseFloat(f.split(" ")[2]) || !e && r.zOrigin || 0) && (n[_t] = nr(f)), r.xOffset = r.yOffset = 0, r.force3D = vt.force3D, r.renderTransform = r.svg ? oa : Gi ? Zi : sa, r.uncache = 0, r;
}, nr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Or = function(t, e, r) {
  var n = it(e);
  return Q(parseFloat(e) + parseFloat(Ht(t, "x", r + "px", n))) + n;
}, sa = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Zi(t, e);
}, Jt = "0deg", Ee = "0px", Zt = ") ", Zi = function(t, e) {
  var r = e || this, n = r.xPercent, i = r.yPercent, s = r.x, o = r.y, u = r.z, f = r.rotation, l = r.rotationY, c = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, _ = r.scaleY, g = r.transformPerspective, y = r.force3D, v = r.target, T = r.zOrigin, b = "", w = y === "auto" && t && t !== 1 || y === !0;
  if (T && (c !== Jt || l !== Jt)) {
    var C = parseFloat(l) * me, P = Math.sin(C), E = Math.cos(C), S;
    C = parseFloat(c) * me, S = Math.cos(C), s = Or(v, s, P * S * -T), o = Or(v, o, -Math.sin(C) * -T), u = Or(v, u, E * S * -T + T);
  }
  g !== Ee && (b += "perspective(" + g + Zt), (n || i) && (b += "translate(" + n + "%, " + i + "%) "), (w || s !== Ee || o !== Ee || u !== Ee) && (b += u !== Ee || w ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Zt), f !== Jt && (b += "rotate(" + f + Zt), l !== Jt && (b += "rotateY(" + l + Zt), c !== Jt && (b += "rotateX(" + c + Zt), (d !== Jt || p !== Jt) && (b += "skew(" + d + ", " + p + Zt), (m !== 1 || _ !== 1) && (b += "scale(" + m + ", " + _ + Zt), v.style[X] = b || "translate(0, 0)";
}, oa = function(t, e) {
  var r = e || this, n = r.xPercent, i = r.yPercent, s = r.x, o = r.y, u = r.rotation, f = r.skewX, l = r.skewY, c = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, _ = r.yOrigin, g = r.xOffset, y = r.yOffset, v = r.forceCSS, T = parseFloat(s), b = parseFloat(o), w, C, P, E, S;
  u = parseFloat(u), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, u += l), u || f ? (u *= me, f *= me, w = Math.cos(u) * c, C = Math.sin(u) * c, P = Math.sin(u - f) * -d, E = Math.cos(u - f) * d, f && (l *= me, S = Math.tan(f - l), S = Math.sqrt(1 + S * S), P *= S, E *= S, l && (S = Math.tan(l), S = Math.sqrt(1 + S * S), w *= S, C *= S)), w = Q(w), C = Q(C), P = Q(P), E = Q(E)) : (w = c, E = d, C = P = 0), (T && !~(s + "").indexOf("px") || b && !~(o + "").indexOf("px")) && (T = Ht(p, "x", s, "px"), b = Ht(p, "y", o, "px")), (m || _ || g || y) && (T = Q(T + m - (m * w + _ * P) + g), b = Q(b + _ - (m * C + _ * E) + y)), (n || i) && (S = p.getBBox(), T = Q(T + n / 100 * S.width), b = Q(b + i / 100 * S.height)), S = "matrix(" + w + "," + C + "," + P + "," + E + "," + T + "," + b + ")", p.setAttribute("transform", S), v && (p.style[X] = S);
}, aa = function(t, e, r, n, i) {
  var s = 360, o = nt(i), u = parseFloat(i) * (o && ~i.indexOf("rad") ? te : 1), f = u - n, l = n + f + "deg", c, d;
  return o && (c = i.split("_")[1], c === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), c === "cw" && f < 0 ? f = (f + s * Ln) % s - ~~(f / s) * s : c === "ccw" && f > 0 && (f = (f - s * Ln) % s - ~~(f / s) * s)), t._pt = d = new ht(t._pt, e, r, n, f, Wo), d.e = l, d.u = "deg", t._props.push(r), d;
}, Yn = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, ua = function(t, e, r) {
  var n = Yn({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, u, f, l, c, d, p, m;
  n.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), s[X] = e, o = Be(r, 1), ae(r, X), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[X], s[X] = e, o = Be(r, 1), s[X] = f);
  for (u in Bt)
    f = n[u], l = o[u], f !== l && i.indexOf(u) < 0 && (p = it(f), m = it(l), c = p !== m ? Ht(r, u, f, m) : parseFloat(f), d = parseFloat(l), t._pt = new ht(t._pt, o, u, c, d - c, Nr), t._pt.u = m || 0, t._props.push(u));
  Yn(o, n);
};
ct("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", r = "Right", n = "Bottom", i = "Left", s = (t < 3 ? [e, r, n, i] : [e + i, e + r, n + r, n + i]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  rr[t > 1 ? "border" + a : a] = function(o, u, f, l, c) {
    var d, p;
    if (arguments.length < 4)
      return d = s.map(function(m) {
        return zt(o, m, f);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (l + "").split(" "), p = {}, s.forEach(function(m, _) {
      return p[m] = d[_] = d[_] || d[(_ - 1) / 2 | 0];
    }), o.init(u, p, c);
  };
});
var ts = {
  name: "css",
  register: Vr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, n, i) {
    var s = this._props, o = t.style, u = r.vars.startAt, f, l, c, d, p, m, _, g, y, v, T, b, w, C, P, E;
    sn || Vr(), this.styles = this.styles || Xi(t), E = this.styles.props, this.tween = r;
    for (_ in e)
      if (_ !== "autoRound" && (l = e[_], !(pt[_] && ji(_, e, r, n, t, i)))) {
        if (p = typeof l, m = rr[_], p === "function" && (l = l.call(r, n, t, i), p = typeof l), p === "string" && ~l.indexOf("random(") && (l = je(l)), m)
          m(this, t, _, l, r) && (P = 1);
        else if (_.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(_) + "").trim(), l += "", Xt.lastIndex = 0, Xt.test(f) || (g = it(f), y = it(l)), y ? g !== y && (f = Ht(t, _, f, y) + y) : g && (l += g), this.add(o, "setProperty", f, l, n, i, 0, 0, _), s.push(_), E.push(_, 0, o[_]);
        else if (p !== "undefined") {
          if (u && _ in u ? (f = typeof u[_] == "function" ? u[_].call(r, n, t, i) : u[_], nt(f) && ~f.indexOf("random(") && (f = je(f)), it(f + "") || f === "auto" || (f += vt.units[_] || it(zt(t, _)) || ""), (f + "").charAt(1) === "=" && (f = zt(t, _))) : f = zt(t, _), d = parseFloat(f), v = p === "string" && l.charAt(1) === "=" && l.substr(0, 2), v && (l = l.substr(2)), c = parseFloat(l), _ in Dt && (_ === "autoAlpha" && (d === 1 && zt(t, "visibility") === "hidden" && c && (d = 0), E.push("visibility", 0, o.visibility), Ut(this, o, "visibility", d ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), _ !== "scale" && _ !== "transform" && (_ = Dt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), T = _ in Bt, T) {
            if (this.styles.save(_), b || (w = t._gsap, w.renderTransform && !e.parseTransform || Be(t, e.parseTransform), C = e.smoothOrigin !== !1 && w.smooth, b = this._pt = new ht(this._pt, o, X, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), _ === "scale")
              this._pt = new ht(this._pt, w, "scaleY", w.scaleY, (v ? de(w.scaleY, v + c) : c) - w.scaleY || 0, Nr), this._pt.u = 0, s.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              E.push(_t, 0, o[_t]), l = na(l), w.svg ? $r(t, l, 0, C, 0, this) : (y = parseFloat(l.split(" ")[2]) || 0, y !== w.zOrigin && Ut(this, w, "zOrigin", w.zOrigin, y), Ut(this, o, _, nr(f), nr(l)));
              continue;
            } else if (_ === "svgOrigin") {
              $r(t, l, 1, C, 0, this);
              continue;
            } else if (_ in Qi) {
              aa(this, w, _, d, v ? de(d, v + l) : l);
              continue;
            } else if (_ === "smoothOrigin") {
              Ut(this, w, "smooth", w.smooth, l);
              continue;
            } else if (_ === "force3D") {
              w[_] = l;
              continue;
            } else if (_ === "transform") {
              ua(this, l, t);
              continue;
            }
          } else
            _ in o || (_ = we(_) || _);
          if (T || (c || c === 0) && (d || d === 0) && !Yo.test(l) && _ in o)
            g = (f + "").substr((d + "").length), c || (c = 0), y = it(l) || (_ in vt.units ? vt.units[_] : g), g !== y && (d = Ht(t, _, f, y)), this._pt = new ht(this._pt, T ? w : o, _, d, (v ? de(d, v + c) : c) - d, !T && (y === "px" || _ === "zIndex") && e.autoRound !== !1 ? qo : Nr), this._pt.u = y || 0, g !== y && y !== "%" && (this._pt.b = f, this._pt.r = Uo);
          else if (_ in o)
            ra.call(this, t, _, f, v ? v + l : l);
          else if (_ in t)
            this.add(t, _, f || t[_], v ? v + l : l, n, i);
          else if (_ !== "parseTransform") {
            Hr(_, l);
            continue;
          }
          T || (_ in o ? E.push(_, 0, o[_]) : E.push(_, 1, f || t[_])), s.push(_);
        }
      }
    P && $i(this);
  },
  render: function(t, e) {
    if (e.tween._time || !on())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: zt,
  aliases: Dt,
  getSetter: function(t, e, r) {
    var n = Dt[e];
    return n && n.indexOf(",") < 0 && (e = n), e in Bt && e !== _t && (t._gsap.x || zt(t, "x")) ? r && jn === r ? e === "scale" ? Ko : Ho : (jn = r || {}) && (e === "scale" ? Qo : Jo) : t.style && !qr(t.style[e]) ? Xo : ~e.indexOf("-") ? Go : rn(t, e);
  },
  core: {
    _removeProperty: ae,
    _getMatrix: un
  }
};
dt.utils.checkPrefix = we;
dt.core.getStyleSaver = Xi;
(function(a, t, e, r) {
  var n = ct(a + "," + t + "," + e, function(i) {
    Bt[i] = 1;
  });
  ct(t, function(i) {
    vt.units[i] = "deg", Qi[i] = 1;
  }), Dt[n[13]] = a + "," + t, ct(r, function(i) {
    var s = i.split(":");
    Dt[s[1]] = n[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  vt.units[a] = "px";
});
dt.registerPlugin(ts);
var ir = dt.registerPlugin(ts) || dt;
ir.core.Tween;
const fa = ({
  targetRef: a,
  rootMargin: t = "0px",
  threshold: e = 0,
  once: r = !1,
  callback: n,
  dependencies: i = []
}) => {
  const s = {
    rootMargin: t,
    threshold: e
  };
  rt(() => {
    const o = a == null ? void 0 : a.current;
    if (!o)
      return;
    const u = (l, c) => {
      l.forEach((d) => {
        d.isIntersecting && n.onEnter ? (n.onEnter(d), r && c.unobserve(d.target)) : !d.isIntersecting && n.onLeave && n.onLeave(d);
      });
    }, f = new IntersectionObserver(u, s);
    return f.observe(o), () => {
      f.unobserve(o);
    };
  }, i);
}, la = (a) => {
  const [t, e] = Ft(!1);
  return fa({
    ...a,
    callback: {
      onEnter: () => e(!0),
      onLeave: () => e(!1)
    }
  }), t;
}, ca = (a, t, e) => {
  rt(() => (ir.ticker.add(a, t, e), () => ir.ticker.remove(a)), [t, e, a]);
}, Ca = ({
  children: a,
  className: t,
  style: e = {},
  isReverse: r = !1,
  speed: n = 1
}) => {
  const i = tt(null), s = tt(null), o = tt(null), u = la({
    targetRef: i,
    once: !1
  }), f = tt(0);
  return ca(() => {
    if (!u)
      return;
    const l = i.current, c = s.current, d = o.current;
    if (!l || !c || !d)
      return;
    const p = ir.ticker.deltaRatio() / 1e3, m = l.clientWidth / c.clientWidth;
    f.current += p * n * m, f.current >= 1 && (f.current = 0), r ? (c.style.transform = `translateX(${f.current * -100}%)`, d.style.transform = `translateX(${100 - f.current * 100}%)`) : (c.style.transform = `translateX(${f.current * 100}%)`, d.style.transform = `translateX(${f.current * 100 - 200}%)`);
  }), /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: i,
      className: t || "",
      style: {
        overflow: "hidden",
        ...e
      },
      children: /* @__PURE__ */ R.jsxs(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ R.jsx("div", { ref: s, children: a }),
            /* @__PURE__ */ R.jsx("div", { ref: o, children: a })
          ]
        }
      )
    }
  );
}, Pa = ({
  type: a = "chars",
  text: t,
  ...e
}) => {
  const r = a === "chars" ? "" : " ";
  return bt(
    () => t.split(`
`).flatMap((i, s, o) => [
      ...i.split(r).map(
        (u, f) => u === " " ? /* @__PURE__ */ R.jsx("span", { ...e, children: " " }, `${s}-${f}`) : /* @__PURE__ */ R.jsx("span", { ...e, children: u }, `${s}-${f}`)
      ),
      s < o.length - 1 ? /* @__PURE__ */ R.jsx("br", {}, s) : null
    ]),
    [r, t, e]
  );
}, ha = typeof document < "u" ? Os : rt, ur = ({
  callback: a,
  debounce: t = 100,
  dependencies: e = []
}) => {
  const r = tt(0), n = tt(0), i = yt(() => {
    clearTimeout(n.current), n.current = setTimeout(() => {
      a({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [a, t]);
  rt(() => (r.current = window.innerWidth, window.addEventListener("resize", i), () => {
    window.removeEventListener("resize", i), clearTimeout(n.current);
  }), e);
}, _a = ({
  initWinW: a,
  winW: t,
  threshold: e
}) => {
  let r = !(a <= e);
  t <= e ? r && window.location.reload() : !r && window.location.reload();
}, da = `
███████╗██╗   ██╗███╗   ██╗████████╗███████╗ ██████╗██╗  ██╗
██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
█████╗  ██║   ██║██╔██╗ ██║   ██║   █████╗  ██║     ███████║
██╔══╝  ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██╔══██║
██║     ╚██████╔╝██║ ╚████║   ██║   ███████╗╚██████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                            
Created by FunTech: https://funtech.inc/

`, pa = () => {
  console.log(da);
}, ma = (a) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const e = a > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== e && t.setAttribute("content", e);
}, Ea = ({
  reloadThresholds: a,
  isFixViewportForSmall: t = !0,
  areYouFun: e = !1
}) => {
  const r = yt(
    (n) => {
      t && ma(n);
    },
    [t]
  );
  ur({
    callback: ({ initWinW: n, winW: i }) => {
      a && a.forEach(
        (s) => _a({
          initWinW: n,
          winW: i,
          threshold: s
        })
      ), r(i);
    },
    debounce: 100,
    dependencies: []
  }), rt(() => {
    document.body.dataset.spiceRendered = "true", r(window.innerWidth), e && process.env.NODE_ENV !== "development" && pa();
  }, [e, r]);
}, ga = () => {
  const [a, t] = Ft(null), e = yt(() => {
    const r = window.ontouchstart, n = navigator.maxTouchPoints;
    r !== void 0 && 0 < n ? t(!0) : t(!1);
  }, []);
  return ur({
    callback: () => e(),
    debounce: 100,
    dependencies: []
  }), rt(() => e(), [e]), a;
}, Cr = "scroll", Ra = ({
  threshold: a = 0,
  debounce: t = 10,
  dependencies: e = []
}) => {
  const r = tt(null), [n, i] = Cs(
    (l, c) => {
      switch (c.type) {
        case Cr:
          return r.current = c.payload, c.payload;
        default:
          return l;
      }
    },
    r.current
  ), s = tt(0), o = tt(0), u = () => window.scrollY || document.documentElement.scrollTop, f = yt(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      const l = u();
      l > s.current + a && r.current !== "down" ? i({ type: Cr, payload: "down" }) : l < s.current - a && r.current !== "up" && i({ type: Cr, payload: "up" }), s.current = l;
    }, t);
  }, [t, a]);
  return rt(() => (s.current = u(), window.addEventListener("scroll", f, { passive: !0 }), () => {
    window.removeEventListener("scroll", f), clearTimeout(o.current);
  }), e), n;
}, ka = ({ type: a, width: t }) => {
  const [e, r] = Ft(null), n = yt(
    (i) => {
      switch (a) {
        case "max":
          r(t >= i);
          break;
        case "min":
          r(t <= i);
          break;
      }
    },
    [a, t]
  );
  return ur({
    callback: ({ winW: i }) => n(i),
    debounce: 100,
    dependencies: []
  }), rt(() => n(window.innerWidth), [n]), e;
}, Da = ({
  shareUrl: a,
  sharePath: t,
  shareTitle: e = "",
  width: r = 600,
  height: n = 800
}) => {
  const i = bt(() => encodeURIComponent(a), [a]), s = bt(
    () => `height=${n},width=${r}`,
    [n, r]
  ), o = bt(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${i}&t=${e}`,
          "newwindow",
          s
        );
      }
    }),
    [i, e, s]
  ), u = bt(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${i}&text=${e}`,
          "newwindow",
          s
        );
      }
    }),
    [i, s, e]
  ), f = bt(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${i}&text=${e}`,
          "newwindow",
          s
        );
      }
    }),
    [i, s, e]
  ), l = bt(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: e,
            url: t || i
          });
        } catch {
          return;
        }
      }
    }),
    [e, i, t]
  ), [c, d] = Ft(!1), p = bt(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(a).then(() => {
          d(!0);
        });
      }
    }),
    [a]
  );
  return {
    Facebook: o,
    X: u,
    LINE: f,
    share: l,
    copy: p,
    isCopied: c
  };
}, Aa = (a) => {
  const t = ga();
  ha(() => {
    !t || !a.current || (a.current.style.height = `${window.screen.height}px`);
  }, [t, a]), ur({
    callback: ({ winH: e }) => {
      a.current && (t ? a.current.style.height = `${window.screen.height}px` : a.current.style.height = `${e}px`);
    },
    dependencies: [t]
  });
};
export {
  Sa as Accordion,
  Ca as AutoScrollContainer,
  xa as FormField,
  Oa as LoadingProgress,
  Ta as LowPowerVideo,
  wa as ModalButton,
  ya as SpiceWrapper,
  Pa as SplitText,
  Is as StickyItem,
  ba as Tab,
  Aa as use100vh,
  ca as useFrame,
  fa as useIntersectionObserver,
  la as useIsIntersecting,
  ga as useIsTouchDevice,
  ha as useIsomorphicLayoutEffect,
  ka as useMediaQuery,
  Ds as useOverflowDispatch,
  Us as useResizeObserver,
  Ra as useScrollDirection,
  Da as useShare,
  Ea as useStarter,
  ur as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
