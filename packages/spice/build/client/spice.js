"use client";
import { jsx as u, jsxs as S, Fragment as T } from "react/jsx-runtime";
import { forwardRef as M, useRef as m, useCallback as w, useEffect as b, createContext as $, useState as v, useContext as k, useMemo as x, memo as tt, useLayoutEffect as et } from "react";
import A from "gsap";
import O from "gsap/ScrollTrigger";
const nt = ({ formProps: e }) => {
  const { style: t, ...n } = e;
  return /* @__PURE__ */ u(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, rt = ({ formProps: e }) => {
  const { isSelect: t, style: n, ...r } = e;
  if (!t)
    return;
  const i = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ u("option", { hidden: !0, children: s }) : null;
  }, o = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
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
        t.options.map((s) => /* @__PURE__ */ u("option", { value: s, children: s }, s))
      ]
    }
  );
}, it = {
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
}, ot = ({
  layoutType: e,
  formPropsArr: t,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (e === "block")
    return /* @__PURE__ */ S(T, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ u(r, { formProps: t[0] }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ S(T, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ S("ul", { children: [
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ u(r, { formProps: t[0] }),
          /* @__PURE__ */ u(o, { index: 0 })
        ] }),
        /* @__PURE__ */ S("li", { children: [
          /* @__PURE__ */ u(r, { formProps: t[1] }),
          /* @__PURE__ */ u(o, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const s = t.map(
      ({ id: c, value: l, style: g, optionLabel: d, ...a }) => /* @__PURE__ */ S("li", { children: [
        /* @__PURE__ */ u(
          r,
          {
            formProps: {
              id: c,
              value: l,
              style: {
                ...it,
                ...g || {}
              },
              ...a
            }
          }
        ),
        /* @__PURE__ */ u("label", { htmlFor: c, children: d || l })
      ] }, c)
    );
    return /* @__PURE__ */ S(T, { children: [
      n && /* @__PURE__ */ u("label", { children: n }),
      /* @__PURE__ */ u("ul", { children: s }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  }
}, st = ({ formProps: e }) => {
  const { isTextarea: t, ...n } = e;
  if (t)
    return /* @__PURE__ */ u("textarea", { ...n, ...t });
}, Ot = ({
  label: e,
  formProps: t,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(t) ? t : [t], { type: o, isSelect: s, isTextarea: c } = i[0], l = i.length;
  if (!(o === "radio" || o === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  const g = ["radio", "checkbox"].includes(o || "") ? "radio-check" : l === 1 ? "block" : "flex";
  return /* @__PURE__ */ u("fieldset", { ...r, children: /* @__PURE__ */ u(
    ot,
    {
      layoutType: g,
      formPropsArr: i,
      label: e,
      errors: n,
      FormItem: s ? rt : c ? st : nt
    }
  ) });
}, D = (e) => new Promise((t) => {
  e instanceof Promise ? e.then(() => {
    t(null);
  }) : t(null);
}), ct = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, B = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, N = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, at = () => window.innerWidth - document.documentElement.clientWidth, W = (e, { paddingRight: t, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = e ? t + n : t - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = e ? "auto" : "", i.overflow = e ? "hidden" : "";
}, ut = M(
  ({ dialog: e, onOpen: t, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, s) => {
    const c = m(null), l = m({
      paddingRight: 0,
      scrollbarWidth: 0
    }), g = w(() => {
      var a, h, p;
      i && (l.current.paddingRight = N(), l.current.scrollbarWidth = at(), W(!0, l.current)), c.current.showModal(), (a = r == null ? void 0 : r.current) == null || a.focus(), (p = (h = c.current) == null ? void 0 : h.getElementsByClassName(B.scrollArea)[0]) == null || p.scrollTo(0, 0), t == null || t(c.current);
    }, [t, r, i]), d = w(async () => {
      n && await D(n(c.current)), i && (l.current.paddingRight = N(), W(!1, l.current)), c.current.close();
    }, [n, i]);
    return b(() => {
      const a = c.current.querySelectorAll(
        `.${B.close}`
      );
      if (a)
        return a.forEach(
          (h) => h.addEventListener("click", d)
        ), () => a.forEach(
          (h) => h.removeEventListener("click", d)
        );
    }, [d]), b(() => {
      const a = (h) => {
        var f;
        ((f = c.current) == null ? void 0 : f.hasAttribute("open")) && h.key === "Escape" && d();
      };
      return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
    }, [d]), /* @__PURE__ */ S(T, { children: [
      /* @__PURE__ */ u(
        "button",
        {
          ref: s,
          ...o,
          onClick: (a) => {
            var h;
            g(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, a);
          }
        }
      ),
      /* @__PURE__ */ u(
        "dialog",
        {
          ref: c,
          ...e,
          onClick: (a) => {
            var h;
            a.target === c.current && d(), (h = e.onClick) == null || h.call(e, a);
          },
          style: {
            ...ct,
            ...e.style || {}
          }
        }
      )
    ] });
  }
);
ut.displayName = "ModalButton";
const lt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, j = $(lt), z = $(
  () => {
  }
), dt = ({ children: e, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = v({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ u(j.Provider, { value: n, children: /* @__PURE__ */ u(z.Provider, { value: r, children: e }) });
}, X = () => k(j), P = () => k(z), ht = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = P(), i = X(), o = w(() => {
    i.current === t || i.isLeaving || r((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: o,
      role: "tab",
      "aria-controls": `tab-${t}`,
      "aria-selected": i.current === t,
      ...n,
      children: e
    }
  );
}, q = ({ content: e, isOpen: t }) => {
  const n = e.querySelectorAll("a,button");
  if (!n)
    return;
  const r = t ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, ft = ({
  children: e,
  value: t,
  onOpen: n,
  onClose: r,
  onReset: i,
  style: o,
  ...s
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = m(!0), l = m(null), g = P(), d = X(), a = d.current === t && !d.isLeaving;
  return b(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    if (!d.isAnimation) {
      a && i && i(l.current);
      return;
    }
    d.prev === t && (async () => (r && await D(r(l.current)), g((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), a && n && n(l.current);
  }, [d, g, n, r, i, t, a]), b(() => {
    q({
      content: l.current,
      isOpen: d.current === t
    });
  }, [d, t]), /* @__PURE__ */ u(
    "div",
    {
      ref: l,
      style: {
        ...d.current !== t ? {
          pointerEvents: "none",
          position: "absolute",
          visibility: "hidden",
          opacity: 0,
          display: "none"
        } : {},
        ...o
      },
      role: "tabpanel",
      id: `tab-${t}`,
      "aria-hidden": d.current !== t,
      ...s,
      children: e
    }
  );
}, gt = () => {
  const e = P();
  return (t, n) => {
    e((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : t,
      next: n ? t : ""
    }));
  };
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ht,
  Content: ft,
  Context: dt,
  useTabSwitch: gt
}, Symbol.toStringTag, { value: "Module" })), pt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, G = $(pt), V = $(() => {
}), mt = ({ children: e, defaultValue: t }) => {
  const [n, r] = v({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ u(G.Provider, { value: n, children: /* @__PURE__ */ u(V.Provider, { value: r, children: e }) });
}, K = () => k(G), bt = () => k(V), vt = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = K(), i = bt(), [o, s] = v(
    () => !!r.defaultValue.find((c) => c === t)
  );
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: () => {
        i((c) => ({
          ...c,
          toggle: o,
          target: t
        })), s(!o);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": o,
      ...n,
      children: e
    }
  );
}, wt = ({ target: e, onResize: t, debounce: n = 100 } = {}, r) => {
  const i = m(null), o = m(0), s = m(!0);
  return b(() => {
    const c = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? i.current;
    if (!c)
      return;
    const l = new ResizeObserver((g) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t == null || t(g[0].target);
      }, n);
    });
    return l.observe(c), () => {
      l.unobserve(c), clearTimeout(o.current);
    };
  }, r), i;
}, yt = ({
  value: e,
  onOpen: t,
  onClose: n,
  children: r,
  ...i
}) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const o = K(), [s, c] = v(
    () => !!o.defaultValue.find((h) => h === e)
  ), l = m(s);
  b(() => {
    o.target === e && c(!s);
  }, [o.target, o.toggle]);
  const g = m(!0), d = m(null), a = m(null);
  return b(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const h = {
      height: a.current.getBoundingClientRect().height,
      target: d.current
    };
    s ? t(h) : n(h);
  }, [s, t, n]), b(() => {
    q({ content: d.current, isOpen: s });
  }, [s]), wt(
    {
      target: a,
      onResize: (h) => {
        const p = h.getBoundingClientRect().height;
        s && (d.current.style.height = `${p}px`);
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
      id: `content-${e}`,
      "aria-labelledby": `button-${e}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ u("div", { ref: a, ...i, children: r })
    }
  );
}, Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: vt,
  Content: yt,
  Context: mt
}, Symbol.toStringTag, { value: "Module" })), St = ({
  tempo: e = 3,
  onesRef: t,
  tensRef: n,
  hundredsRef: r,
  onProgress: i,
  onStart: o,
  onComplete: s
}) => {
  const c = x(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []), l = m(null), g = w(
    ({
      digitContainer: a,
      numbersTarget: h,
      digit: p,
      digitNumber: f,
      currentPercent: y,
      limit: E,
      destination: L
    }) => {
      if (c[p] !== f && y <= E) {
        const _ = f.toString(), Q = (Math.min(8, f) + 1).toString(), Z = y >= E;
        h[0].innerText = _, h[1].innerText = Z ? "0" : Q, i && i({
          digitContainer: a,
          percent: y,
          digit: p,
          destination: L,
          duration: e / (L / p)
        }), c[p] = f;
      }
    },
    [c, i, e]
  ), d = w(
    (a) => (a > 100 && (a = 100), new Promise((h) => {
      if (a === 0)
        return;
      const p = {
        ones: t.current.querySelectorAll("div"),
        tens: n.current.querySelectorAll("div"),
        hundreds: r.current.querySelectorAll("div"),
        getAll: function() {
          return [this.ones, this.tens, this.hundreds];
        }
      };
      clearInterval(l.current), l.current = setInterval(async () => {
        const f = c.to += 1, y = async () => {
          clearInterval(l.current), f > 100 && s && await D(s(p.getAll())), h(f - 1);
        };
        f === 1 && o && o(p.getAll()), f > a && await y();
        const E = Math.floor(f / 100) % 100, L = Math.floor(f / 10) % 10, _ = f % 10;
        g({
          digitContainer: t.current,
          digit: 1,
          digitNumber: _,
          currentPercent: f,
          numbersTarget: p.ones,
          limit: 90,
          destination: a
        }), g({
          digitContainer: n.current,
          digit: 10,
          digitNumber: L,
          currentPercent: f,
          numbersTarget: p.tens,
          limit: 90,
          destination: a
        }), c[100] !== E && (p.hundreds[1].innerText = E.toString(), i && i({
          digitContainer: r.current,
          percent: f,
          digit: 100,
          destination: a,
          duration: e / (a / 10)
        }), c[100] = E);
      }, Math.max(1e3 / 60, e / a * 1e3));
    })),
    [
      c,
      g,
      n,
      r,
      t,
      s,
      i,
      o,
      e
    ]
  );
  return b(() => () => {
    clearInterval(l.current);
  }, []), d;
}, U = tt(
  M((e, t) => /* @__PURE__ */ S(
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
        /* @__PURE__ */ u("div", { ...e, children: "0" }),
        /* @__PURE__ */ u("div", { ...e, children: "0" })
      ]
    }
  ))
);
U.displayName = "Digit";
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digit: U,
  useLoadingProgress: St
}, Symbol.toStringTag, { value: "Module" })), xt = ({
  target: e,
  options: t,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const s = m(null), [c, l] = v(!1);
  return b(() => {
    const g = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? s.current;
    if (!g)
      return;
    const d = (h, p) => {
      h.forEach((f) => {
        l(f.isIntersecting), f.isIntersecting ? (r && r(f), n && p.unobserve(f.target)) : f.isIntersecting || i && i(f);
      });
    }, a = new IntersectionObserver(d, t);
    return a.observe(g), () => {
      a.unobserve(g);
    };
  }, o), { ref: s, isIntersecting: c };
}, I = typeof window < "u" ? et : b, Y = (e, t, n) => {
  const r = m(e);
  I(() => void (r.current = e), [e]), I(() => {
    const i = (...o) => r.current(...o);
    return A.ticker.add(i, t, n), () => A.ticker.remove(i);
  }, [t, n]);
}, Ft = ({
  children: e,
  speed: t = 1,
  style: n,
  ...r
}) => {
  const i = m(null), o = m(null), s = m(null), { isIntersecting: c } = xt({
    target: i,
    once: !1
  }), l = m(0);
  return Y(() => {
    if (!c)
      return;
    const g = i.current, d = o.current, a = s.current;
    if (!g || !d || !a)
      return;
    const h = A.ticker.deltaRatio() / 1e3, p = g.clientWidth / d.clientWidth;
    if (l.current += h * Math.abs(t) * p, l.current >= 1 && (l.current = 0), t < 0) {
      const f = l.current * -100;
      d.style.transform = `translateX(${f}%)`, a.style.transform = `translateX(${f}%)`;
    } else {
      const f = l.current * 100;
      d.style.transform = `translateX(${f}%)`, a.style.transform = `translateX(${f - 200}%)`;
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
            /* @__PURE__ */ u("div", { ref: o, children: e }),
            /* @__PURE__ */ u("div", { ref: s, children: e })
          ]
        }
      )
    }
  );
}, C = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (e) => e === `
` || e === "###br###",
  isSpecificBreak: (e) => e.match(/###br\.(.*?)###/),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, Ct = (e) => x(
  () => e.split(C.regex).map((t, n) => C.isRegularBreak(t) ? /* @__PURE__ */ u("br", {}, n) : C.isSpecificBreak(t) ? /* @__PURE__ */ u(
    "br",
    {
      className: C.getClassName(t)
    },
    n
  ) : t),
  [e]
), Ht = ({
  text: e
}) => {
  const t = Ct(e);
  return /* @__PURE__ */ u(T, { children: t });
}, F = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ u("span", { ...e, children: /* @__PURE__ */ u("span", { ...t }) }) : /* @__PURE__ */ u("span", { ...t }), jt = ({
  type: e = "chars",
  text: t,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = e === "chars" ? "" : " ";
  return x(
    () => t.split(C.regex).flatMap((c, l) => C.isRegularBreak(c) ? [null, /* @__PURE__ */ u("br", {}, l)] : C.isSpecificBreak(c) ? [
      null,
      /* @__PURE__ */ u(
        "br",
        {
          className: C.getClassName(c)
        },
        l
      )
    ] : [
      ...c.split(o).map((g, d) => {
        if (n) {
          const a = n.find(
            (h) => h.selector === g
          );
          if (a)
            return /* @__PURE__ */ u(
              F,
              {
                containerProps: r,
                ...i,
                ...a.attributes,
                children: g
              },
              `${l}-${d}`
            );
        }
        return /* @__PURE__ */ u(
          F,
          {
            containerProps: r,
            ...i,
            children: g === " " ? " " : g
          },
          `${l}-${d}`
        );
      }),
      null
    ]),
    [o, t, i, n, r]
  );
}, Et = M((e, t) => {
  const { fill: n, style: r, ...i } = e;
  return /* @__PURE__ */ u(
    "video",
    {
      ref: t,
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
Et.displayName = "Video";
const Tt = M(
  ({
    loader: e = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: s,
    ...c
  }, l) => {
    const [g, d] = v(t === 0), a = !!o;
    return b(() => {
      t !== 0 && setTimeout(() => d(!0), t);
    }, [t]), /* @__PURE__ */ u(
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
              ...g ? {
                opacity: 1,
                transitionProperty: "opacity",
                transitionDuration: (n == null ? void 0 : n.transitionDuration) || "0.3s",
                transitionTimingFunction: (n == null ? void 0 : n.transitionTimingFunction) || "ease-in-out"
              } : {}
            },
            children: [
              e === "skeleton" ? /* @__PURE__ */ u(
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
              ) : e === "circular" ? /* @__PURE__ */ u(
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
              ) : e,
              a && /* @__PURE__ */ u("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
Tt.displayName = "Loader";
const R = ({
  onResize: e,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const r = m(0), i = m(0), o = w(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      e({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [e, t]);
  b(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, At = () => {
  const [e, t] = v(null), n = w(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return R({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), b(() => n(), [n]), e;
}, J = $(
  void 0
), zt = () => k(J), Xt = ({
  active: e = !0,
  style: t,
  ...n
}) => {
  const r = m(null), i = At(), o = e && i, [s, c] = v(
    void 0
  );
  return I(() => {
    o && r.current ? c(r.current) : c(void 0);
  }, [o]), /* @__PURE__ */ u(J.Provider, { value: s, children: /* @__PURE__ */ u(
    "div",
    {
      ref: r,
      style: {
        ...o ? {
          height: "100vh",
          overflowY: "auto"
        } : {},
        ...t
      },
      ...n
    }
  ) });
}, It = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, $t = (e) => {
  let t = It;
  typeof e == "string" && (t += e), console.log(t);
}, kt = (e) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = e > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, qt = ({
  isFixViewportForSmall: e = !0,
  areYouFun: t = !1
} = {}) => {
  const n = w(
    (r) => {
      e && kt(r);
    },
    [e]
  );
  R({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), b(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && $t(t);
  }, [t, n]);
}, Gt = (e, t) => {
  const [n, r] = v(null), i = w(
    (o) => {
      switch (e) {
        case "max":
          r(t >= o);
          break;
        case "min":
          r(t <= o);
          break;
      }
    },
    [e, t]
  );
  return R({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), b(() => i(window.innerWidth), [i]), n;
}, Vt = ({
  shareUrl: e,
  sharePath: t,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = x(() => encodeURIComponent(e), [e]), s = x(
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
  ), g = x(
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
            url: t || o
          });
        } catch {
          return;
        }
      }
    }),
    [n, o, t]
  ), [a, h] = v(!1), p = x(
    () => ({
      onClick: () => {
        navigator.clipboard.writeText(e).then(() => {
          h(!0);
        });
      }
    }),
    [e]
  );
  return {
    Facebook: c,
    X: l,
    LINE: g,
    share: d,
    copy: p,
    isCopied: a
  };
}, Lt = (e) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(e))
    return "iOS";
  if (/\bAndroid\b/i.test(e))
    return "Android";
}, Mt = (e) => {
  if (/Gecko\/\d+/i.test(e) && !/like Gecko/i.test(e))
    return "Gecko";
  if (/AppleWebKit\/\d+/i.test(e) && /like Gecko/i.test(e))
    return "WebKit";
  if (/Opera\/\d+/i.test(e))
    return "Presto";
  if (/Trident\/\d+/i.test(e))
    return "Trident";
  if (/Edge\/\d+/i.test(e))
    return "EdgeHTML";
  if (/Chrome\/\d+/i.test(e))
    return "Blink";
}, Kt = (e) => {
  const [t, n] = v({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return I(() => {
    const r = navigator.userAgent, i = Lt(r), o = Mt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: e && e(r)
    });
  }, []), t;
}, Ut = (e) => {
  const [t, n] = v(!1), r = m();
  Y(() => {
    t && r.current && e(r.current);
  });
  const i = w((c) => {
    r.current = c, n(!0);
  }, []), o = w(() => {
    r.current = void 0, n(!1);
  }, []), s = w((c) => {
    r.current = c;
  }, []);
  return {
    onPointerEnter: i,
    onPointerLeave: o,
    onPointerMove: s
  };
}, Yt = (e) => {
  const [t, n] = v();
  return b(() => {
    e && e.current && n(e.current);
  }, [e]), t;
}, H = (e, t) => !!(e != null && e.includes(t)), Jt = (e, {
  reactive: t = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = v(!1), [o, s] = v(!1), c = m(), l = m(null), g = w(
    (d, a = 4, h = 1e-3) => {
      if (!c.current)
        return 0;
      a = Math.max(a, 0);
      const { progress: p } = c.current;
      l.current === null && (l.current = p), l.current = A.utils.interpolate(l.current, p, d);
      const f = Math.pow(10, a);
      return l.current = Math.round(l.current * f) / f, l.current < h ? 0 : 1 - l.current < h ? 1 : l.current;
    },
    []
  );
  return I(() => {
    const { onUpdate: d, onToggle: a, trigger: h, ...p } = e;
    if (!h)
      return;
    A.registerPlugin(O);
    const f = O.create({
      ...p,
      trigger: h,
      onToggle: (y) => {
        a == null || a(y), H(t, "isActive") && i(y.isActive);
      },
      onUpdate: (y) => {
        c.current = y, d == null || d(y), H(t, "direction") && s(y.direction);
      }
    });
    return () => f.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: g,
    scrollTrigger: c
  };
};
export {
  Nt as Accordion,
  Ft as AutoScrollContainer,
  Ht as CustomBreakLineParser,
  C as CustomBreakLineUtils,
  Ot as FormField,
  Tt as Loader,
  Wt as LoadingProgress,
  B as MODAL_CLASSNAME,
  ut as ModalButton,
  jt as SplitText,
  Bt as Tab,
  Xt as TouchScroller,
  Et as Video,
  Kt as useDeviceDetector,
  Y as useFrame,
  xt as useIntersectionObserver,
  At as useIsTouchDevice,
  I as useIsomorphicLayoutEffect,
  Gt as useMediaQuery,
  Ut as useOnHovering,
  Ct as useParseBreakLine,
  wt as useResizeObserver,
  Jt as useScrollTrigger,
  Vt as useShare,
  qt as useStarter,
  zt as useTouchScroller,
  Yt as useValidElement,
  R as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
