"use client";
import { jsx as a, jsxs as S, Fragment as A } from "react/jsx-runtime";
import { createContext as T, useContext as I, useState as v, forwardRef as k, useRef as m, useCallback as b, useEffect as w, useMemo as x, memo as nt, useLayoutEffect as rt, useReducer as it } from "react";
import L from "gsap";
import B from "gsap/ScrollTrigger";
const z = T(!0), X = T((t) => !t), ot = ({ children: t }) => {
  const [e, n] = v(!0);
  return /* @__PURE__ */ a(z.Provider, { value: e, children: /* @__PURE__ */ a(X.Provider, { value: n, children: t }) });
}, st = ({ children: t }) => {
  const e = I(z);
  return /* @__PURE__ */ a(
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
}, jt = ({ children: t }) => /* @__PURE__ */ a(ot, { children: /* @__PURE__ */ a(st, { children: t }) }), ct = () => I(X), ut = ({ formProps: t }) => {
  const { style: e, ...n } = t;
  return /* @__PURE__ */ a(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...e
      }
    }
  );
}, at = ({ formProps: t }) => {
  const { isSelect: e, style: n, ...r } = t;
  if (!e)
    return;
  const i = () => {
    const s = e.defaultValue;
    return s ? /* @__PURE__ */ a("option", { hidden: !0, children: s }) : null;
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
        /* @__PURE__ */ a(i, {}),
        e.options.map((s) => /* @__PURE__ */ a("option", { value: s, children: s }, s))
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
      n && /* @__PURE__ */ a("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ a(r, { formProps: e[0] }),
      /* @__PURE__ */ a(o, { index: 0 })
    ] });
  if (t === "flex")
    return /* @__PURE__ */ S(A, { children: [
      n && /* @__PURE__ */ a("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ S("ul", { children: [
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ a(r, { formProps: e[0] }),
          /* @__PURE__ */ a(o, { index: 0 })
        ] }),
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ a(r, { formProps: e[1] }),
          /* @__PURE__ */ a(o, { index: 1 })
        ] })
      ] })
    ] });
  if (t === "radio-check") {
    const s = e.map(
      ({ id: u, value: l, style: h, optionLabel: d, ...c }) => /* @__PURE__ */ S("li", { children: [
        /* @__PURE__ */ a(
          r,
          {
            formProps: {
              id: u,
              value: l,
              style: {
                ...lt,
                ...h || {}
              },
              ...c
            }
          }
        ),
        /* @__PURE__ */ a("label", { htmlFor: u, children: d || l })
      ] }, u)
    );
    return /* @__PURE__ */ S(A, { children: [
      n && /* @__PURE__ */ a("label", { children: n }),
      /* @__PURE__ */ a("ul", { children: s }),
      /* @__PURE__ */ a(o, { index: 0 })
    ] });
  }
}, ft = ({ formProps: t }) => {
  const { isTextarea: e, ...n } = t;
  if (e)
    return /* @__PURE__ */ a("textarea", { ...n, ...e });
}, zt = ({
  label: t,
  formProps: e,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: o, isSelect: s, isTextarea: u } = i[0], l = i.length;
  if (!(o === "radio" || o === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  const h = ["radio", "checkbox"].includes(o || "") ? "radio-check" : l === 1 ? "block" : "flex";
  return /* @__PURE__ */ a("fieldset", { ...r, children: /* @__PURE__ */ a(
    dt,
    {
      layoutType: h,
      formPropsArr: i,
      label: t,
      errors: n,
      FormItem: s ? at : u ? ft : ut
    }
  ) });
}, _ = (t) => new Promise((e) => {
  t instanceof Promise ? t.then(() => {
    e(null);
  }) : e(null);
}), ht = {
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
    const u = m(null), l = m({
      paddingRight: 0,
      scrollbarWidth: 0
    }), h = b(() => {
      var c, f, g;
      i && (l.current.paddingRight = W(), l.current.scrollbarWidth = pt(), F(!0, l.current)), u.current.showModal(), (c = r == null ? void 0 : r.current) == null || c.focus(), (g = (f = u.current) == null ? void 0 : f.getElementsByClassName(N.scrollArea)[0]) == null || g.scrollTo(0, 0), e == null || e(u.current);
    }, [e, r, i]), d = b(async () => {
      n && await _(n(u.current)), i && (l.current.paddingRight = W(), F(!1, l.current)), u.current.close();
    }, [n, i]);
    return w(() => {
      const c = u.current.querySelectorAll(
        `.${N.close}`
      );
      if (c)
        return c.forEach(
          (f) => f.addEventListener("click", d)
        ), () => c.forEach(
          (f) => f.removeEventListener("click", d)
        );
    }, [d]), w(() => {
      const c = (f) => {
        var p;
        ((p = u.current) == null ? void 0 : p.hasAttribute("open")) && f.key === "Escape" && d();
      };
      return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
    }, [d]), /* @__PURE__ */ S(A, { children: [
      /* @__PURE__ */ a(
        "button",
        {
          ref: s,
          ...o,
          onClick: (c) => {
            var f;
            h(), (f = o == null ? void 0 : o.onClick) == null || f.call(o, c);
          }
        }
      ),
      /* @__PURE__ */ a(
        "dialog",
        {
          ref: u,
          ...t,
          onClick: (c) => {
            var f;
            c.target === u.current && d(), (f = t.onClick) == null || f.call(t, c);
          },
          style: {
            ...ht,
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
    }), [r]), /* @__PURE__ */ a("div", { ref: n, ...e, children: t });
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
  return /* @__PURE__ */ a(q.Provider, { value: n, children: /* @__PURE__ */ a(G.Provider, { value: r, children: t }) });
}, V = () => I(q), P = () => I(G), bt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = P(), i = V(), o = b(() => {
    i.current === e || i.isLeaving || r((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: e
    }));
  }, [r, i, e]);
  return /* @__PURE__ */ a(
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
  const u = m(!0), l = m(null), h = P(), d = V(), c = d.current === e && !d.isLeaving;
  return w(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    if (!d.isAnimation) {
      c && i && i(l.current);
      return;
    }
    d.prev === e && (async () => (r && await _(r(l.current)), h((f) => ({
      ...f,
      isLeaving: !1,
      prev: "",
      current: f.next,
      next: ""
    }))))(), c && n && n(l.current);
  }, [d, h, n, r, i, e, c]), w(() => {
    K({
      content: l.current,
      isOpen: d.current === e
    });
  }, [d, e]), /* @__PURE__ */ a(
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
  const t = P();
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
  return /* @__PURE__ */ a(Y.Provider, { value: n, children: /* @__PURE__ */ a(U.Provider, { value: r, children: t }) });
}, J = () => I(Y), Et = () => I(U), Tt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = J(), i = Et(), [o, s] = v(
    () => !!r.defaultValue.find((u) => u === e)
  );
  return /* @__PURE__ */ a(
    "button",
    {
      onClick: () => {
        i((u) => ({
          ...u,
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
  const i = m(null), o = m(0), s = m(!0);
  return w(() => {
    const u = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? i.current;
    if (!u)
      return;
    const l = new ResizeObserver((h) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        e == null || e(h[0].target);
      }, n);
    });
    return l.observe(u), () => {
      l.unobserve(u), clearTimeout(o.current);
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
  const o = J(), [s, u] = v(
    () => !!o.defaultValue.find((f) => f === t)
  ), l = m(s);
  w(() => {
    o.target === t && u(!s);
  }, [o.target, o.toggle]);
  const h = m(!0), d = m(null), c = m(null);
  return w(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const f = {
      height: c.current.getBoundingClientRect().height,
      target: d.current
    };
    s ? e(f) : n(f);
  }, [s, e, n]), w(() => {
    K({ content: d.current, isOpen: s });
  }, [s]), It(
    {
      target: c,
      onResize: (f) => {
        const g = f.getBoundingClientRect().height;
        s && (d.current.style.height = `${g}px`);
      },
      debounce: 100
    },
    [s]
  ), /* @__PURE__ */ a(
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
      children: /* @__PURE__ */ a("div", { ref: c, ...i, children: r })
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
  const u = x(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = m(null), h = b(
    ({
      digitContainer: c,
      numbersTarget: f,
      digit: g,
      digitNumber: p,
      currentPercent: y,
      limit: E,
      destination: D
    }) => {
      if (u[g] !== p && y <= E) {
        const O = p.toString(), tt = (Math.min(8, p) + 1).toString(), et = y >= E;
        f[0].innerText = O, f[1].innerText = et ? "0" : tt, i && i({
          digitContainer: c,
          percent: y,
          digit: g,
          destination: D,
          duration: t / (D / g)
        }), u[g] = p;
      }
    },
    [u, i, t]
  ), d = b(
    (c) => (c > 100 && (c = 100), new Promise((f) => {
      if (c === 0)
        return;
      const g = {
        ones: e.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const p = u.to += 1, y = async () => {
          clearInterval(l.current), p > 100 && s && await _(s(g.getAll())), f(p - 1);
        };
        p === 1 && o && o(g.getAll()), p > c && await y();
        const E = Math.floor(p / 100) % 100, D = Math.floor(p / 10) % 10, O = p % 10;
        h({
          digitContainer: e.current,
          digit: 1,
          digitNumber: O,
          currentPercent: p,
          numbersTarget: g.ones,
          limit: 90,
          destination: c
        }), h({
          digitContainer: n.current,
          digit: 10,
          digitNumber: D,
          currentPercent: p,
          numbersTarget: g.tens,
          limit: 90,
          destination: c
        }), u[100] !== E && (g.hundreds[1].innerText = E.toString(), i && i({
          digitContainer: r.current,
          percent: p,
          digit: 100,
          destination: c,
          duration: t / (c / 10)
        }), u[100] = E);
      }, Math.max(1e3 / 60, t / c * 1e3));
    })),
    [
      u,
      h,
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
        /* @__PURE__ */ a("div", { ...t, children: "0" }),
        /* @__PURE__ */ a("div", { ...t, children: "0" })
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
  const s = m(null), [u, l] = v(!1);
  return w(() => {
    const h = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? s.current;
    if (!h)
      return;
    const d = (f, g) => {
      f.forEach((p) => {
        l(p.isIntersecting), p.isIntersecting ? (r && r(p), n && g.unobserve(p.target)) : p.isIntersecting || i && i(p);
      });
    }, c = new IntersectionObserver(d, e);
    return c.observe(h), () => {
      c.unobserve(h);
    };
  }, o), { ref: s, isIntersecting: u };
}, $ = typeof window < "u" ? rt : w, Z = (t, e, n) => {
  const r = m(t);
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
  const i = m(null), o = m(null), s = m(null), { isIntersecting: u } = kt({
    target: i,
    once: !1
  }), l = m(0);
  return Z(() => {
    if (!u)
      return;
    const h = i.current, d = o.current, c = s.current;
    if (!h || !d || !c)
      return;
    const f = L.ticker.deltaRatio() / 1e3, g = h.clientWidth / d.clientWidth;
    if (l.current += f * Math.abs(e) * g, l.current >= 1 && (l.current = 0), e < 0) {
      const p = l.current * -100;
      d.style.transform = `translateX(${p}%)`, c.style.transform = `translateX(${p}%)`;
    } else {
      const p = l.current * 100;
      d.style.transform = `translateX(${p}%)`, c.style.transform = `translateX(${p - 200}%)`;
    }
  }), /* @__PURE__ */ a(
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
            /* @__PURE__ */ a("div", { ref: o, children: t }),
            /* @__PURE__ */ a("div", { ref: s, children: t })
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
  () => t.split(C.regex).map((e, n) => C.isRegularBreak(e) ? /* @__PURE__ */ a("br", {}, n) : C.isSpecificBreak(e) ? /* @__PURE__ */ a(
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
  return /* @__PURE__ */ a(A, { children: e });
}, H = ({
  containerProps: t,
  ...e
}) => t ? /* @__PURE__ */ a("span", { ...t, children: /* @__PURE__ */ a("span", { ...e }) }) : /* @__PURE__ */ a("span", { ...e }), Yt = ({
  type: t = "chars",
  text: e,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = t === "chars" ? "" : " ";
  return x(
    () => e.split(C.regex).flatMap((u, l) => C.isRegularBreak(u) ? [null, /* @__PURE__ */ a("br", {}, l)] : C.isSpecificBreak(u) ? [
      null,
      /* @__PURE__ */ a(
        "br",
        {
          className: C.getClassName(u)
        },
        l
      )
    ] : [
      ...u.split(o).map((h, d) => {
        if (n) {
          const c = n.find(
            (f) => f.selector === h
          );
          if (c)
            return /* @__PURE__ */ a(
              H,
              {
                containerProps: r,
                ...i,
                ...c.attributes,
                children: h
              },
              `${l}-${d}`
            );
        }
        return /* @__PURE__ */ a(
          H,
          {
            containerProps: r,
            ...i,
            children: h === " " ? " " : h
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
  return /* @__PURE__ */ a(
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
    ...u
  }, l) => {
    const [h, d] = v(e === 0), c = !!o;
    return w(() => {
      e !== 0 && setTimeout(() => d(!0), e);
    }, [e]), /* @__PURE__ */ a(
      "div",
      {
        ref: l,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...c ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...s
        },
        ...u,
        children: /* @__PURE__ */ S(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...h ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              t === "skeleton" ? /* @__PURE__ */ a(
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
                  children: /* @__PURE__ */ a("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : t === "circular" ? /* @__PURE__ */ a(
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
                  children: /* @__PURE__ */ a("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : t,
              c && /* @__PURE__ */ a("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
Ot.displayName = "Loader";
const R = ({
  onResize: t,
  debounce: e = 100,
  dependencies: n = []
}) => {
  const r = m(0), i = m(0), o = b(() => {
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
}, Mt = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, _t = (t) => {
  let e = Mt;
  typeof t == "string" && (e += t), console.log(e);
}, Pt = (t) => {
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
      t && Pt(r);
    },
    [t]
  );
  R({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), w(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), e && process.env.NODE_ENV !== "development" && _t(e);
  }, [e, n]);
}, Jt = () => {
  const [t, e] = v(null), n = b(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? e(!0) : e(!1);
  }, []);
  return R({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), w(() => n(), [n]), t;
}, M = "scroll", Qt = ({
  threshold: t = 0,
  debounce: e = 10,
  dependencies: n = []
}) => {
  const r = m(null), [i, o] = it(
    (d, c) => {
      switch (c.type) {
        case M:
          return r.current = c.payload, c.payload;
        default:
          return d;
      }
    },
    r.current
  ), s = m(0), u = m(0), l = () => window.scrollY || document.documentElement.scrollTop, h = b(() => {
    clearTimeout(u.current), u.current = setTimeout(() => {
      const d = l();
      d > s.current + t && r.current !== "down" ? o({ type: M, payload: "down" }) : d < s.current - t && r.current !== "up" && o({ type: M, payload: "up" }), s.current = d;
    }, e);
  }, [e, t]);
  return w(() => (s.current = l(), window.addEventListener("scroll", h, { passive: !0 }), () => {
    window.removeEventListener("scroll", h), clearTimeout(u.current);
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
  return R({
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
  ), u = x(
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
  ), h = x(
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
  ), [c, f] = v(!1), g = x(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(t).then(() => {
          f(!0);
        });
      }
    }),
    [t]
  );
  return {
    Facebook: u,
    X: l,
    LINE: h,
    share: d,
    copy: g,
    isCopied: c
  };
}, Rt = (t) => {
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
    const r = navigator.userAgent, i = Rt(r), o = Bt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: t && t(r)
    });
  }, []), e;
}, ne = (t) => {
  const [e, n] = v(!1), r = m();
  Z(() => {
    e && r.current && t(r.current);
  });
  const i = b((u) => {
    r.current = u, n(!0);
  }, []), o = b(() => {
    r.current = void 0, n(!1);
  }, []), s = b((u) => {
    r.current = u;
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
  const [r, i] = v(!1), [o, s] = v(!1), u = m(), l = m(null), h = b(
    (d, c = 4, f = 1e-3) => {
      if (!u.current)
        return 0;
      c = Math.max(c, 0);
      const { progress: g } = u.current;
      l.current === null && (l.current = g), l.current = L.utils.interpolate(l.current, g, d);
      const p = Math.pow(10, c);
      return l.current = Math.round(l.current * p) / p, l.current < f ? 0 : 1 - l.current < f ? 1 : l.current;
    },
    []
  );
  return $(() => {
    const { onUpdate: d, onToggle: c, trigger: f, ...g } = t;
    if (!f)
      return;
    L.registerPlugin(B);
    const p = B.create({
      ...g,
      trigger: f,
      onToggle: (y) => {
        c == null || c(y), j(e, "isActive") && i(y.isActive);
      },
      onUpdate: (y) => {
        u.current = y, d == null || d(y), j(e, "direction") && s(y.direction);
      }
    });
    return () => p.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: h,
    scrollTrigger: u
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
  R as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
