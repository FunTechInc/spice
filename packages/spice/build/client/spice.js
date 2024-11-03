"use client";
import { jsx as u, jsxs as S, Fragment as A } from "react/jsx-runtime";
import { createContext as T, useContext as I, useState as v, forwardRef as k, useRef as g, useCallback as b, useEffect as w, useMemo as x, memo as nt, useLayoutEffect as rt, useReducer as it } from "react";
import L from "gsap";
import B from "gsap/ScrollTrigger";
const z = T(!0), X = T((t) => !t), ot = ({ children: t }) => {
  const [e, n] = v(!0);
  return /* @__PURE__ */ u(z.Provider, { value: e, children: /* @__PURE__ */ u(X.Provider, { value: n, children: t }) });
}, st = ({ children: t }) => {
  const e = I(z);
  return /* @__PURE__ */ u(
    "div",
    {
      style: {
        flexDirection: "column",
        display: "flex",
        minHeight: "100vh",
        ...e && {
          overflow: "hidden"
        }
      },
      children: t
    }
  );
}, jt = ({ children: t }) => /* @__PURE__ */ u(ot, { children: /* @__PURE__ */ u(st, { children: t }) }), ct = () => I(X), at = ({ formProps: t }) => {
  const { style: e, ...n } = t;
  return /* @__PURE__ */ u(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...e
      }
    }
  );
}, ut = ({ formProps: t }) => {
  const { isSelect: e, style: n, ...r } = t;
  if (!e)
    return;
  const i = () => {
    const s = e.defaultValue;
    return s ? /* @__PURE__ */ u("option", { hidden: !0, children: s }) : null;
  }, o = () => {
    const s = e.defaultSelectedIndex;
    if (s)
      return e.options[s];
  };
  return /* @__PURE__ */ S(
    "select",
    {
      ...r,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: o(),
      children: [
        /* @__PURE__ */ u(i, {}),
        e.options.map((s) => /* @__PURE__ */ u("option", { value: s, children: s }, s))
      ]
    }
  );
}, lt = {
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
}, dt = ({
  layoutType: t,
  formPropsArr: e,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (t === "block")
    return /* @__PURE__ */ S(A, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ u(r, { formProps: e[0] }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  if (t === "flex")
    return /* @__PURE__ */ S(A, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ S("ul", { children: [
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[0] }),
          /* @__PURE__ */ u(o, { index: 0 })
        ] }),
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[1] }),
          /* @__PURE__ */ u(o, { index: 1 })
        ] })
      ] })
    ] });
  if (t === "radio-check") {
    const s = e.map(
      ({ id: c, value: l, style: f, optionLabel: d, ...a }) => /* @__PURE__ */ S("li", { children: [
        /* @__PURE__ */ u(
          r,
          {
            formProps: {
              id: c,
              value: l,
              style: {
                ...lt,
                ...f || {}
              },
              ...a
            }
          }
        ),
        /* @__PURE__ */ u("label", { htmlFor: c, children: d || l })
      ] }, c)
    );
    return /* @__PURE__ */ S(A, { children: [
      n && /* @__PURE__ */ u("label", { children: n }),
      /* @__PURE__ */ u("ul", { children: s }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  }
}, ht = ({ formProps: t }) => {
  const { isTextarea: e, ...n } = t;
  if (e)
    return /* @__PURE__ */ u("textarea", { ...n, ...e });
}, zt = ({
  label: t,
  formProps: e,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: o, isSelect: s, isTextarea: c } = i[0], l = i.length;
  if (!(o === "radio" || o === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  const f = ["radio", "checkbox"].includes(o || "") ? "radio-check" : l === 1 ? "block" : "flex";
  return /* @__PURE__ */ u("fieldset", { ...r, children: /* @__PURE__ */ u(
    dt,
    {
      layoutType: f,
      formPropsArr: i,
      label: t,
      errors: n,
      FormItem: s ? ut : c ? ht : at
    }
  ) });
}, P = (t) => new Promise((e) => {
  t instanceof Promise ? t.then(() => {
    e(null);
  }) : e(null);
}), ft = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, N = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, W = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, pt = () => window.innerWidth - document.documentElement.clientWidth, F = (t, { paddingRight: e, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = t ? e + n : e - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = t ? "auto" : "", i.overflow = t ? "hidden" : "";
}, gt = k(
  ({ dialog: t, onOpen: e, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, s) => {
    const c = g(null), l = g({
      paddingRight: 0,
      scrollbarWidth: 0
    }), f = b(() => {
      var a, h, m;
      i && (l.current.paddingRight = W(), l.current.scrollbarWidth = pt(), F(!0, l.current)), c.current.showModal(), (a = r == null ? void 0 : r.current) == null || a.focus(), (m = (h = c.current) == null ? void 0 : h.getElementsByClassName(N.scrollArea)[0]) == null || m.scrollTo(0, 0), e == null || e(c.current);
    }, [e, r, i]), d = b(async () => {
      n && await P(n(c.current)), i && (l.current.paddingRight = W(), F(!1, l.current)), c.current.close();
    }, [n, i]);
    return w(() => {
      const a = c.current.querySelectorAll(
        `.${N.close}`
      );
      if (a)
        return a.forEach(
          (h) => h.addEventListener("click", d)
        ), () => a.forEach(
          (h) => h.removeEventListener("click", d)
        );
    }, [d]), w(() => {
      const a = (h) => {
        var p;
        ((p = c.current) == null ? void 0 : p.hasAttribute("open")) && h.key === "Escape" && d();
      };
      return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
    }, [d]), /* @__PURE__ */ S(A, { children: [
      /* @__PURE__ */ u(
        "button",
        {
          ref: s,
          ...o,
          onClick: (a) => {
            var h;
            f(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, a);
          }
        }
      ),
      /* @__PURE__ */ u(
        "dialog",
        {
          ref: c,
          ...t,
          onClick: (a) => {
            var h;
            a.target === c.current && d(), (h = t.onClick) == null || h.call(t, a);
          },
          style: {
            ...ft,
            ...t.style || {}
          }
        }
      )
    ] });
  }
);
gt.displayName = "ModalButton";
const mt = k(
  ({ children: t, ...e }, n) => {
    const r = ct();
    return w(() => (r(() => !1), () => {
      r(() => !0);
    }), [r]), /* @__PURE__ */ u("div", { ref: n, ...e, children: t });
  }
);
mt.displayName = "StickyItem";
const wt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, q = T(wt), G = T(
  () => {
  }
), vt = ({ children: t, defaultValue: e }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = v({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: e,
    next: ""
  });
  return /* @__PURE__ */ u(q.Provider, { value: n, children: /* @__PURE__ */ u(G.Provider, { value: r, children: t }) });
}, V = () => I(q), R = () => I(G), bt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = R(), i = V(), o = b(() => {
    i.current === e || i.isLeaving || r((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: e
    }));
  }, [r, i, e]);
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: o,
      role: "tab",
      "aria-controls": `tab-${e}`,
      "aria-selected": i.current === e,
      ...n,
      children: t
    }
  );
}, K = ({ content: t, isOpen: e }) => {
  const n = t.querySelectorAll("a,button");
  if (!n)
    return;
  const r = e ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, yt = ({
  children: t,
  value: e,
  onOpen: n,
  onClose: r,
  onReset: i,
  style: o,
  ...s
}) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = g(!0), l = g(null), f = R(), d = V(), a = d.current === e && !d.isLeaving;
  return w(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    if (!d.isAnimation) {
      a && i && i(l.current);
      return;
    }
    d.prev === e && (async () => (r && await P(r(l.current)), f((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), a && n && n(l.current);
  }, [d, f, n, r, i, e, a]), w(() => {
    K({
      content: l.current,
      isOpen: d.current === e
    });
  }, [d, e]), /* @__PURE__ */ u(
    "div",
    {
      ref: l,
      style: {
        ...d.current !== e ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...o
      },
      role: "tabpanel",
      id: `tab-${e}`,
      "aria-hidden": d.current !== e,
      ...s,
      children: t
    }
  );
}, St = () => {
  const t = R();
  return (e, n) => {
    t((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : e,
      next: n ? e : ""
    }));
  };
}, Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: bt,
  Content: yt,
  Context: vt,
  useTabSwitch: St
}, Symbol.toStringTag, { value: "Module" })), xt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, Y = T(xt), U = T(() => {
}), Ct = ({ children: t, defaultValue: e }) => {
  const [n, r] = v({
    target: "",
    toggle: !1,
    defaultValue: e
  });
  return /* @__PURE__ */ u(Y.Provider, { value: n, children: /* @__PURE__ */ u(U.Provider, { value: r, children: t }) });
}, J = () => I(Y), Et = () => I(U), Tt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = J(), i = Et(), [o, s] = v(
    () => !!r.defaultValue.find((c) => c === e)
  );
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: () => {
        i((c) => ({
          ...c,
          toggle: o,
          target: e
        })), s(!o);
      },
      "aria-controls": `content-${e}`,
      id: `button-${e}`,
      "aria-expanded": o,
      ...n,
      children: t
    }
  );
}, It = ({ target: t, onResize: e, debounce: n = 100 } = {}, r) => {
  const i = g(null), o = g(0), s = g(!0);
  return w(() => {
    const c = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? i.current;
    if (!c)
      return;
    const l = new ResizeObserver((f) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        e == null || e(f[0].target);
      }, n);
    });
    return l.observe(c), () => {
      l.unobserve(c), clearTimeout(o.current);
    };
  }, r), i;
}, At = ({
  value: t,
  onOpen: e,
  onClose: n,
  children: r,
  ...i
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = J(), [s, c] = v(
    () => !!o.defaultValue.find((h) => h === t)
  ), l = g(s);
  w(() => {
    o.target === t && c(!s);
  }, [o.target, o.toggle]);
  const f = g(!0), d = g(null), a = g(null);
  return w(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const h = {
      height: a.current.getBoundingClientRect().height,
      target: d.current
    };
    s ? e(h) : n(h);
  }, [s, e, n]), w(() => {
    K({ content: d.current, isOpen: s });
  }, [s]), It(
    {
      target: a,
      onResize: (h) => {
        const m = h.getBoundingClientRect().height;
        s && (d.current.style.height = `${m}px`);
      },
      debounce: 100
    },
    [s]
  ), /* @__PURE__ */ u(
    "div",
    {
      ref: d,
      style: {
        overflow: "hidden",
        height: l.current ? "auto" : "0px"
      },
      id: `content-${t}`,
      "aria-labelledby": `button-${t}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ u("div", { ref: a, ...i, children: r })
    }
  );
}, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Tt,
  Content: At,
  Context: Ct
}, Symbol.toStringTag, { value: "Module" })), Lt = ({
  tempo: t = 3,
  onesRef: e,
  tensRef: n,
  hundredsRef: r,
  onProgress: i,
  onStart: o,
  onComplete: s
}) => {
  const c = x(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = g(null), f = b(
    ({
      digitContainer: a,
      numbersTarget: h,
      digit: m,
      digitNumber: p,
      currentPercent: y,
      limit: E,
      destination: D
    }) => {
      if (c[m] !== p && y <= E) {
        const O = p.toString(), tt = (Math.min(8, p) + 1).toString(), et = y >= E;
        h[0].innerText = O, h[1].innerText = et ? "0" : tt, i && i({
          digitContainer: a,
          percent: y,
          digit: m,
          destination: D,
          duration: t / (D / m)
        }), c[m] = p;
      }
    },
    [c, i, t]
  ), d = b(
    (a) => (a > 100 && (a = 100), new Promise((h) => {
      if (a === 0)
        return;
      const m = {
        ones: e.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const p = c.to += 1, y = async () => {
          clearInterval(l.current), p > 100 && s && await P(s(m.getAll())), h(p - 1);
        };
        p === 1 && o && o(m.getAll()), p > a && await y();
        const E = Math.floor(p / 100) % 100, D = Math.floor(p / 10) % 10, O = p % 10;
        f({
          digitContainer: e.current,
          digit: 1,
          digitNumber: O,
          currentPercent: p,
          numbersTarget: m.ones,
          limit: 90,
          destination: a
        }), f({
          digitContainer: n.current,
          digit: 10,
          digitNumber: D,
          currentPercent: p,
          numbersTarget: m.tens,
          limit: 90,
          destination: a
        }), c[100] !== E && (m.hundreds[1].innerText = E.toString(), i && i({
          digitContainer: r.current,
          percent: p,
          digit: 100,
          destination: a,
          duration: t / (a / 10)
        }), c[100] = E);
      }, Math.max(1e3 / 60, t / a * 1e3));
    })),
    [
      c,
      f,
      n,
      r,
      e,
      s,
      i,
      o,
      t
    ]
  );
  return w(() => () => {
    clearInterval(l.current);
  }, []), d;
}, Q = nt(
  k((t, e) => /* @__PURE__ */ S(
    "div",
    {
      style: {
        width: "1ch",
        lineHeight: 1,
        float: "left",
        textAlign: "center"
      },
      ref: e,
      children: [
        /* @__PURE__ */ u("div", { ...t, children: "0" }),
        /* @__PURE__ */ u("div", { ...t, children: "0" })
      ]
    }
  ))
);
Q.displayName = "Digit";
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: Q,
  useLoadingProgress: Lt
}, Symbol.toStringTag, { value: "Module" })), kt = ({
  target: t,
  options: e,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const s = g(null), [c, l] = v(!1);
  return w(() => {
    const f = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? s.current;
    if (!f)
      return;
    const d = (h, m) => {
      h.forEach((p) => {
        l(p.isIntersecting), p.isIntersecting ? (r && r(p), n && m.unobserve(p.target)) : p.isIntersecting || i && i(p);
      });
    }, a = new IntersectionObserver(d, e);
    return a.observe(f), () => {
      a.unobserve(f);
    };
  }, o), { ref: s, isIntersecting: c };
}, $ = typeof window < "u" ? rt : w, Z = (t, e, n) => {
  const r = g(t);
  $(() => void (r.current = t), [t]), $(() => {
    const i = (...o) => r.current(...o);
    return L.ticker.add(i, e, n), () => L.ticker.remove(i);
  }, [e, n]);
}, Vt = ({
  children: t,
  speed: e = 1,
  style: n,
  ...r
}) => {
  const i = g(null), o = g(null), s = g(null), { isIntersecting: c } = kt({
    target: i,
    once: !1
  }), l = g(0);
  return Z(() => {
    if (!c)
      return;
    const f = i.current, d = o.current, a = s.current;
    if (!f || !d || !a)
      return;
    const h = L.ticker.deltaRatio() / 1e3, m = f.clientWidth / d.clientWidth;
    if (l.current += h * Math.abs(e) * m, l.current >= 1 && (l.current = 0), e < 0) {
      const p = l.current * -100;
      d.style.transform = `translateX(${p}%)`, a.style.transform = `translateX(${p}%)`;
    } else {
      const p = l.current * 100;
      d.style.transform = `translateX(${p}%)`, a.style.transform = `translateX(${p - 200}%)`;
    }
  }), /* @__PURE__ */ u(
    "div",
    {
      ref: i,
      style: {
        overflow: "hidden",
        ...n || {}
      },
      ...r,
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ u("div", { ref: o, children: t }),
            /* @__PURE__ */ u("div", { ref: s, children: t })
          ]
        }
      )
    }
  );
}, C = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (t) => t === `
` || t === "###br###",
  isSpecificBreak: (t) => t.match(/###br\.(.*?)###/),
  getClassName: (t) => {
    var e;
    return ((e = t.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, Dt = (t) => x(
  () => t.split(C.regex).map((e, n) => C.isRegularBreak(e) ? /* @__PURE__ */ u("br", {}, n) : C.isSpecificBreak(e) ? /* @__PURE__ */ u(
    "br",
    {
      className: C.getClassName(e)
    },
    n
  ) : e),
  [t]
), Kt = ({
  text: t
}) => {
  const e = Dt(t);
  return /* @__PURE__ */ u(A, { children: e });
}, H = ({
  containerProps: t,
  ...e
}) => t ? /* @__PURE__ */ u("span", { ...t, children: /* @__PURE__ */ u("span", { ...e }) }) : /* @__PURE__ */ u("span", { ...e }), Yt = ({
  type: t = "chars",
  text: e,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = t === "chars" ? "" : " ";
  return x(
    () => e.split(C.regex).flatMap((c, l) => C.isRegularBreak(c) ? [null, /* @__PURE__ */ u("br", {}, l)] : C.isSpecificBreak(c) ? [
      null,
      /* @__PURE__ */ u(
        "br",
        {
          className: C.getClassName(c)
        },
        l
      )
    ] : [
      ...c.split(o).map((f, d) => {
        if (n) {
          const a = n.find(
            (h) => h.selector === f
          );
          if (a)
            return /* @__PURE__ */ u(
              H,
              {
                containerProps: r,
                ...i,
                ...a.attributes,
                children: f
              },
              `${l}-${d}`
            );
        }
        return /* @__PURE__ */ u(
          H,
          {
            containerProps: r,
            ...i,
            children: f === " " ? " " : f
          },
          `${l}-${d}`
        );
      }),
      null
    ]),
    [o, e, i, n, r]
  );
}, $t = k((t, e) => {
  const { fill: n, style: r, ...i } = t;
  return /* @__PURE__ */ u(
    "video",
    {
      ref: e,
      style: n ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...r
      } : r,
      ...i
    }
  );
});
$t.displayName = "Video";
const Ot = k(
  ({
    loader: t = "skeleton",
    delay: e = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: s,
    ...c
  }, l) => {
    const [f, d] = v(e === 0), a = !!o;
    return w(() => {
      e !== 0 && setTimeout(() => d(!0), e);
    }, [e]), /* @__PURE__ */ u(
      "div",
      {
        ref: l,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...a ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...s
        },
        ...c,
        children: /* @__PURE__ */ S(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...f ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              t === "skeleton" ? /* @__PURE__ */ u(
                "div",
                {
                  style: {
                    background: `linear-gradient(90deg,transparent,${(r == null ? void 0 : r.waveColor) || "rgba(255,255,255,0.64)"},transparent)`,
                    animationDuration: (r == null ? void 0 : r.animationDuration) || "1.6s",
                    animationTimingFunction: (r == null ? void 0 : r.animationTimingFunction) || "ease-in-out",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animationName: "skeleton",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ u("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : t === "circular" ? /* @__PURE__ */ u(
                "div",
                {
                  style: {
                    width: i != null && i.width ? i == null ? void 0 : i.width : "24px",
                    height: i != null && i.height ? i == null ? void 0 : i.height : "24px",
                    border: (i == null ? void 0 : i.border) || "2px solid #fff",
                    borderBottomColor: "transparent",
                    animationDuration: (r == null ? void 0 : r.animationDuration) || "1.6s",
                    animationTimingFunction: (r == null ? void 0 : r.animationTimingFunction) || "linear",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    borderRadius: "50%",
                    animationName: "circular",
                    animationIterationCount: "infinite"
                  },
                  children: /* @__PURE__ */ u("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : t,
              a && /* @__PURE__ */ u("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
Ot.displayName = "Loader";
const M = ({
  onResize: t,
  debounce: e = 100,
  dependencies: n = []
}) => {
  const r = g(0), i = g(0), o = b(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      t({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, e);
  }, [t, e]);
  w(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, _t = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, Pt = (t) => {
  let e = _t;
  typeof t == "string" && (e += t), console.log(e);
}, Rt = (t) => {
  const e = document.querySelector('meta[name="viewport"]');
  if (!e)
    return;
  const n = t > 360 ? "width=device-width,initial-scale=1" : "width=360";
  e.getAttribute("content") !== n && e.setAttribute("content", n);
}, Ut = ({
  isFixViewportForSmall: t = !0,
  areYouFun: e = !1
} = {}) => {
  const n = b(
    (r) => {
      t && Rt(r);
    },
    [t]
  );
  M({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), w(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), e && process.env.NODE_ENV !== "development" && Pt(e);
  }, [e, n]);
}, Jt = () => {
  const [t, e] = v(null), n = b(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? e(!0) : e(!1);
  }, []);
  return M({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), w(() => n(), [n]), t;
}, _ = "scroll", Qt = ({
  threshold: t = 0,
  debounce: e = 10,
  dependencies: n = []
}) => {
  const r = g(null), [i, o] = it(
    (d, a) => {
      switch (a.type) {
        case _:
          return r.current = a.payload, a.payload;
        default:
          return d;
      }
    },
    r.current
  ), s = g(0), c = g(0), l = () => window.scrollY || document.documentElement.scrollTop, f = b(() => {
    clearTimeout(c.current), c.current = setTimeout(() => {
      const d = l();
      d > s.current + t && r.current !== "down" ? o({ type: _, payload: "down" }) : d < s.current - t && r.current !== "up" && o({ type: _, payload: "up" }), s.current = d;
    }, e);
  }, [e, t]);
  return w(() => (s.current = l(), window.addEventListener("scroll", f, { passive: !0 }), () => {
    window.removeEventListener("scroll", f), clearTimeout(c.current);
  }), n), i;
}, Zt = (t, e) => {
  const [n, r] = v(null), i = b(
    (o) => {
      switch (t) {
        case "max":
          r(e >= o);
          break;
        case "min":
          r(e <= o);
          break;
      }
    },
    [t, e]
  );
  return M({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), w(() => i(window.innerWidth), [i]), n;
}, te = ({
  shareUrl: t,
  sharePath: e,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = x(() => encodeURIComponent(t), [t]), s = x(
    () => `height=${i},width=${r}`,
    [i, r]
  ), c = x(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${o}&t=${n}`,
          "newwindow",
          s
        );
      }
    }),
    [o, n, s]
  ), l = x(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${o}&text=${n}`,
          "newwindow",
          s
        );
      }
    }),
    [o, s, n]
  ), f = x(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${o}&text=${n}`,
          "newwindow",
          s
        );
      }
    }),
    [o, s, n]
  ), d = x(
    () => ({
      onClick: async () => {
        if (!navigator.share) {
          alert("このブラウザは共有機能に対応していません。");
          return;
        }
        try {
          await window.navigator.share({
            title: n,
            url: e || o
          });
        } catch {
          return;
        }
      }
    }),
    [n, o, e]
  ), [a, h] = v(!1), m = x(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(t).then(() => {
          h(!0);
        });
      }
    }),
    [t]
  );
  return {
    Facebook: c,
    X: l,
    LINE: f,
    share: d,
    copy: m,
    isCopied: a
  };
}, Mt = (t) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(t))
    return "iOS";
  if (/\bAndroid\b/i.test(t))
    return "Android";
}, Bt = (t) => {
  if (/Gecko\/\d+/i.test(t) && !/like Gecko/i.test(t))
    return "Gecko";
  if (/AppleWebKit\/\d+/i.test(t) && /like Gecko/i.test(t))
    return "WebKit";
  if (/Opera\/\d+/i.test(t))
    return "Presto";
  if (/Trident\/\d+/i.test(t))
    return "Trident";
  if (/Edge\/\d+/i.test(t))
    return "EdgeHTML";
  if (/Chrome\/\d+/i.test(t))
    return "Blink";
}, ee = (t) => {
  const [e, n] = v({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return $(() => {
    const r = navigator.userAgent, i = Mt(r), o = Bt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: t && t(r)
    });
  }, []), e;
}, ne = (t) => {
  const [e, n] = v(!1), r = g();
  Z(() => {
    e && r.current && t(r.current);
  });
  const i = b((c) => {
    r.current = c, n(!0);
  }, []), o = b(() => {
    r.current = void 0, n(!1);
  }, []), s = b((c) => {
    r.current = c;
  }, []);
  return {
    onPointerEnter: i,
    onPointerLeave: o,
    onPointerMove: s
  };
}, re = (t) => {
  const [e, n] = v();
  return w(() => {
    t && t.current && n(t.current);
  }, [t]), e;
}, j = (t, e) => !!(t != null && t.includes(e)), ie = (t, {
  reactive: e = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = v(!1), [o, s] = v(!1), c = g(), l = g(null), f = b((d) => {
    if (!c.current)
      return 0;
    const { progress: a } = c.current;
    return l.current === null && (l.current = a), l.current = L.utils.interpolate(l.current, a, d), l.current;
  }, []);
  return $(() => {
    const { onUpdate: d, onToggle: a, trigger: h, ...m } = t;
    if (!h)
      return;
    L.registerPlugin(B);
    const p = B.create({
      ...m,
      trigger: h,
      onToggle: (y) => {
        a == null || a(y), j(e, "isActive") && i(y.isActive);
      },
      onUpdate: (y) => {
        c.current = y, d == null || d(y), j(e, "direction") && s(y.direction);
      }
    });
    return () => p.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: f,
    scrollTrigger: c
  };
};
export {
  qt as Accordion,
  Vt as AutoScrollContainer,
  Kt as CustomBreakLineParser,
  C as CustomBreakLineUtils,
  zt as FormField,
  Ot as Loader,
  Gt as LoadingProgress,
  N as MODAL_CLASSNAME,
  gt as ModalButton,
  jt as SpiceWrapper,
  Yt as SplitText,
  mt as StickyItem,
  Xt as Tab,
  $t as Video,
  ee as useDeviceDetector,
  Z as useFrame,
  kt as useIntersectionObserver,
  Jt as useIsTouchDevice,
  $ as useIsomorphicLayoutEffect,
  Zt as useMediaQuery,
  ne as useOnHovering,
  ct as useOverflowDispatch,
  Dt as useParseBreakLine,
  It as useResizeObserver,
  Qt as useScrollDirection,
  ie as useScrollTrigger,
  te as useShare,
  Ut as useStarter,
  re as useValidElement,
  M as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
