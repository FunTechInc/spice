"use client";
import { jsx as s, jsxs as y, Fragment as E } from "react/jsx-runtime";
import { forwardRef as R, useRef as p, useCallback as v, useEffect as w, createContext as T, useState as b, useContext as $, useLayoutEffect as K, useMemo as S } from "react";
import I from "gsap";
import _ from "gsap/ScrollTrigger";
const J = ({ formProps: e }) => {
  const { style: t, ...n } = e;
  return /* @__PURE__ */ s(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, Q = ({ formProps: e }) => {
  const { isSelect: t, style: n, ...r } = e;
  if (!t)
    return null;
  const { defaultSelectedIndex: i, options: o } = t;
  return /* @__PURE__ */ s(
    "select",
    {
      ...r,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: i && o[i],
      children: o.map((a, c) => /* @__PURE__ */ s("option", { value: a, children: a }, c))
    }
  );
}, U = {
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
}, Z = ({
  layoutType: e,
  formPropsArr: t,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: a }) => i ? Array.isArray(i) ? i[a] : i : null;
  if (e === "block")
    return /* @__PURE__ */ y(E, { children: [
      n && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ s(r, { formProps: t[0] }),
      /* @__PURE__ */ s(o, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ y(E, { children: [
      n && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ y("ul", { children: [
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ s(r, { formProps: t[0] }),
          /* @__PURE__ */ s(o, { index: 0 })
        ] }),
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ s(r, { formProps: t[1] }),
          /* @__PURE__ */ s(o, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const a = t.map(
      ({ id: c, value: u, style: f, optionLabel: d, ...l }) => /* @__PURE__ */ y("li", { children: [
        /* @__PURE__ */ s(
          r,
          {
            formProps: {
              id: c,
              value: u,
              style: {
                ...U,
                ...f || {}
              },
              ...l
            }
          }
        ),
        /* @__PURE__ */ s("label", { htmlFor: c, children: d || u })
      ] }, c)
    );
    return /* @__PURE__ */ y(E, { children: [
      n && /* @__PURE__ */ s("label", { children: n }),
      /* @__PURE__ */ s("ul", { children: a }),
      /* @__PURE__ */ s(o, { index: 0 })
    ] });
  }
}, tt = ({ formProps: e }) => {
  const { isTextarea: t, ...n } = e;
  return t ? /* @__PURE__ */ s("textarea", { ...n, ...t }) : null;
}, $t = ({
  label: e,
  formProps: t,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(t) ? t : [t], { type: o, isSelect: a, isTextarea: c } = i[0], u = i.length;
  if (!(o === "radio" || o === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  const f = ["radio", "checkbox"].includes(o || "") ? "radio-check" : u === 1 ? "block" : "flex";
  return /* @__PURE__ */ s("fieldset", { ...r, children: /* @__PURE__ */ s(
    Z,
    {
      layoutType: f,
      formPropsArr: i,
      label: e,
      errors: n,
      FormItem: a ? Q : c ? tt : J
    }
  ) });
}, F = (e) => new Promise((t) => {
  e instanceof Promise ? e.then(() => {
    t(null);
  }) : t(null);
}), et = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, P = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, B = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, nt = () => window.innerWidth - document.documentElement.clientWidth, M = (e, { paddingRight: t, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = e ? t + n : t - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = e ? "auto" : "", i.overflow = e ? "hidden" : "";
}, rt = R(
  ({ dialog: e, onOpen: t, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, a) => {
    const c = p(null), u = p({
      paddingRight: 0,
      scrollbarWidth: 0
    }), f = v(() => {
      var l, h, m;
      i && (u.current.paddingRight = B(), u.current.scrollbarWidth = nt(), M(!0, u.current)), c.current.showModal(), (l = r == null ? void 0 : r.current) == null || l.focus(), (m = (h = c.current) == null ? void 0 : h.getElementsByClassName(P.scrollArea)[0]) == null || m.scrollTo(0, 0), t == null || t(c.current);
    }, [t, r, i]), d = v(async () => {
      n && await F(n(c.current)), i && (u.current.paddingRight = B(), M(!1, u.current)), c.current.close();
    }, [n, i]);
    return w(() => {
      const l = c.current.querySelectorAll(
        `.${P.close}`
      );
      if (l)
        return l.forEach(
          (h) => h.addEventListener("click", d)
        ), () => l.forEach(
          (h) => h.removeEventListener("click", d)
        );
    }, [d]), w(() => {
      const l = (h) => {
        var g;
        ((g = c.current) == null ? void 0 : g.hasAttribute("open")) && h.key === "Escape" && d();
      };
      return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
    }, [d]), /* @__PURE__ */ y(E, { children: [
      /* @__PURE__ */ s(
        "button",
        {
          ref: a,
          ...o,
          onClick: (l) => {
            var h;
            f(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, l);
          }
        }
      ),
      /* @__PURE__ */ s(
        "dialog",
        {
          ref: c,
          ...e,
          onClick: (l) => {
            var h;
            l.target === c.current && d(), (h = e.onClick) == null || h.call(e, l);
          },
          style: {
            ...et,
            ...e.style || {}
          }
        }
      )
    ] });
  }
);
rt.displayName = "ModalButton";
const it = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, N = T(it), W = T(
  () => {
  }
), ot = ({ children: e, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = b({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ s(N.Provider, { value: n, children: /* @__PURE__ */ s(W.Provider, { value: r, children: e }) });
}, H = () => $(N), A = () => $(W), st = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = A(), i = H(), o = v(() => {
    i.current === t || i.isLeaving || r((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ s(
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
}, z = ({ content: e, isOpen: t }) => {
  const n = e.querySelectorAll("a,button");
  if (!n)
    return;
  const r = t ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, ct = ({
  children: e,
  value: t,
  onOpen: n,
  onClose: r,
  onReset: i,
  style: o,
  ...a
}) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const c = p(!0), u = p(null), f = A(), d = H(), l = d.current === t && !d.isLeaving;
  return w(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    if (!d.isAnimation) {
      l && i && i(u.current);
      return;
    }
    d.prev === t && (async () => (r && await F(r(u.current)), f((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), l && n && n(u.current);
  }, [d, f, n, r, i, t, l]), w(() => {
    z({
      content: u.current,
      isOpen: d.current === t
    });
  }, [d, t]), /* @__PURE__ */ s(
    "div",
    {
      ref: u,
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
      ...a,
      children: e
    }
  );
}, at = () => {
  const e = A();
  return (t, n) => {
    e((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : t,
      next: n ? t : ""
    }));
  };
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: st,
  Content: ct,
  Context: ot,
  useTabSwitch: at
}, Symbol.toStringTag, { value: "Module" })), ut = {
  target: "",
  toggle: !1,
  defaultValue: []
}, j = T(ut), X = T(() => {
}), lt = ({ children: e, defaultValue: t = [] }) => {
  const [n, r] = b({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ s(j.Provider, { value: n, children: /* @__PURE__ */ s(X.Provider, { value: r, children: e }) });
}, q = () => $(j), dt = () => $(X), ht = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = q(), i = dt(), [o, a] = b(
    () => !!r.defaultValue.find((c) => c === t)
  );
  return /* @__PURE__ */ s(
    "button",
    {
      onClick: () => {
        i((c) => ({
          ...c,
          toggle: o,
          target: t
        })), a(!o);
      },
      "aria-controls": `content-${t}`,
      id: `button-${t}`,
      "aria-expanded": o,
      ...n,
      children: e
    }
  );
}, ft = ({ target: e, onResize: t, debounce: n = 100 } = {}, r) => {
  const i = p(null), o = p(0), a = p(!0);
  return w(() => {
    const c = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? i.current;
    if (!c)
      return;
    const u = new ResizeObserver((f) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (a.current) {
          a.current = !1;
          return;
        }
        t == null || t(f[0].target);
      }, n);
    });
    return u.observe(c), () => {
      u.unobserve(c), clearTimeout(o.current);
    };
  }, r), i;
}, pt = ({
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
  const o = q(), [a, c] = b(
    () => !!o.defaultValue.find((h) => h === e)
  ), u = p(a);
  w(() => {
    o.target === e && c(!a);
  }, [o.target, o.toggle]);
  const f = p(!0), d = p(null), l = p(null);
  return w(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const h = {
      height: l.current.getBoundingClientRect().height,
      target: d.current
    };
    a ? t(h) : n(h);
  }, [a, t, n]), w(() => {
    z({ content: d.current, isOpen: a });
  }, [a]), ft(
    {
      target: l,
      onResize: (h) => {
        const m = h.getBoundingClientRect().height;
        a && (d.current.style.height = `${m}px`);
      },
      debounce: 100
    },
    [a]
  ), /* @__PURE__ */ s(
    "div",
    {
      ref: d,
      style: {
        overflowY: "clip",
        height: u.current ? "auto" : "0px"
      },
      id: `content-${e}`,
      "aria-labelledby": `button-${e}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ s("div", { ref: l, ...i, children: r })
    }
  );
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ht,
  Content: pt,
  Context: lt
}, Symbol.toStringTag, { value: "Module" })), gt = ({
  target: e,
  options: t,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const a = p(null), [c, u] = b(!1);
  return w(() => {
    const f = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? a.current;
    if (!f)
      return;
    const d = (h, m) => {
      h.forEach((g) => {
        u(g.isIntersecting), g.isIntersecting ? (r && r(g), n && m.unobserve(g.target)) : g.isIntersecting || i && i(g);
      });
    }, l = new IntersectionObserver(d, t);
    return l.observe(f), () => {
      l.unobserve(f);
    };
  }, o), { ref: a, isIntersecting: c };
}, L = typeof window < "u" ? K : w;
function mt(e) {
  const t = p(e);
  return L(() => void (t.current = e), [e]), t;
}
const G = (e, t, n) => {
  const r = mt(e);
  L(() => {
    const i = (...o) => r.current(...o);
    return I.ticker.add(i, t, n), () => I.ticker.remove(i);
  }, [t, n]);
}, V = R(
  ({ active: e = !1, speed: t = 1, children: n, ...r }, i) => {
    const o = p(null), a = p(null), c = p(null), u = p(0);
    return G(() => {
      if (!e)
        return;
      const f = o.current, d = a.current, l = c.current;
      if (!(f && d && l))
        return;
      const h = I.ticker.deltaRatio() / 1e3, m = f.clientWidth / d.clientWidth;
      if (u.current += h * Math.abs(t) * m, u.current >= 1 && (u.current = 0), t < 0) {
        const g = u.current * -100;
        d.style.transform = `translateX(${g}%)`, l.style.transform = `translateX(${g}%)`;
      } else {
        const g = u.current * 100;
        d.style.transform = `translateX(${g}%)`, l.style.transform = `translateX(${g - 200}%)`;
      }
    }), /* @__PURE__ */ s("div", { ref: i, ...r, children: /* @__PURE__ */ s(
      "div",
      {
        ref: o,
        style: {
          overflow: "hidden",
          width: "100%"
        },
        children: /* @__PURE__ */ y(
          "div",
          {
            style: {
              whiteSpace: "nowrap",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ s("div", { ref: a, children: n }),
              /* @__PURE__ */ s("div", { ref: c, children: n })
            ]
          }
        )
      }
    ) });
  }
);
V.displayName = "InfinityLoop";
const At = (e) => {
  const { isIntersecting: t, ref: n } = gt({
    once: !1
  });
  return /* @__PURE__ */ s(V, { ref: n, ...e, active: t });
}, x = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (e) => e === `
` || e === "###br###",
  isSpecificBreak: (e) => e.match(/###br\.(.*?)###/),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, wt = (e) => S(
  () => e.split(x.regex).map((t, n) => x.isRegularBreak(t) ? /* @__PURE__ */ s("br", {}, n) : x.isSpecificBreak(t) ? /* @__PURE__ */ s(
    "br",
    {
      className: x.getClassName(t)
    },
    n
  ) : t),
  [e]
), kt = ({
  children: e
}) => {
  const t = wt(e);
  return /* @__PURE__ */ s(E, { children: t });
}, D = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ s("span", { ...e, children: /* @__PURE__ */ s("span", { ...t }) }) : /* @__PURE__ */ s("span", { ...t }), _t = ({
  type: e = "chars",
  children: t,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = e === "chars" ? "" : " ";
  return S(
    () => t.split(x.regex).flatMap((c, u) => x.isRegularBreak(c) ? [null, /* @__PURE__ */ s("br", {}, u)] : x.isSpecificBreak(c) ? [
      null,
      /* @__PURE__ */ s(
        "br",
        {
          className: x.getClassName(c)
        },
        u
      )
    ] : [
      ...c.split(o).map((f, d) => {
        if (n) {
          const l = n.find(
            (h) => h.selector === f
          );
          if (l)
            return /* @__PURE__ */ s(
              D,
              {
                containerProps: r,
                ...i,
                ...l.attributes,
                children: f
              },
              `${u}-${d}`
            );
        }
        return /* @__PURE__ */ s(
          D,
          {
            containerProps: r,
            ...i,
            children: f === " " ? " " : f
          },
          `${u}-${d}`
        );
      }),
      null
    ]),
    [o, t, i, n, r]
  );
}, bt = R((e, t) => {
  const { fill: n, style: r, ...i } = e;
  return /* @__PURE__ */ s(
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
bt.displayName = "Video";
const vt = R(
  ({
    loader: e = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: a,
    ...c
  }, u) => {
    const [f, d] = b(t === 0), l = !!o;
    return w(() => {
      t !== 0 && setTimeout(() => d(!0), t);
    }, [t]), /* @__PURE__ */ s(
      "div",
      {
        ref: u,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...l ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...a
        },
        ...c,
        children: /* @__PURE__ */ y(
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
              e === "skeleton" ? /* @__PURE__ */ s(
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
                  children: /* @__PURE__ */ s("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : e === "circular" ? /* @__PURE__ */ s(
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
                  children: /* @__PURE__ */ s("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : e,
              l && /* @__PURE__ */ s("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
vt.displayName = "Loader";
const Y = T(
  void 0
), Pt = () => $(Y), Bt = ({
  active: e,
  style: t,
  ...n
}) => {
  const r = p(null), [i, o] = b(
    void 0
  );
  return L(() => {
    e && r.current ? o(r.current) : o(void 0);
  }, [e]), /* @__PURE__ */ s(Y.Provider, { value: i, children: /* @__PURE__ */ s(
    "div",
    {
      ref: r,
      style: {
        ...e ? {
          height: "100svh",
          overflowY: "auto"
        } : {},
        ...t
      },
      ...n
    }
  ) });
}, k = ({
  onResize: e,
  debounce: t = 100,
  dependencies: n = []
}) => {
  const r = p(0), i = p(0), o = v(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      e({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, t);
  }, [e, t]);
  w(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, yt = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, St = (e) => {
  let t = yt;
  typeof e == "string" && (t += e), console.log(t);
}, xt = (e) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = e > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Mt = ({
  fixViewport: e = !0,
  areYouFun: t = !1
} = {}) => {
  const n = v(
    (r) => {
      e && xt(r);
    },
    [e]
  );
  return k({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), w(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && St(t);
  }, [t, n]), null;
}, Dt = () => {
  const [e, t] = b(null), n = v(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return k({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), w(() => n(), [n]), e;
}, Ot = (e, t) => {
  const [n, r] = b(null), i = v(
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
  return k({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), w(() => i(window.innerWidth), [i]), n;
}, Ft = ({
  shareUrl: e,
  sharePath: t,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = S(() => encodeURIComponent(e), [e]), a = S(
    () => `height=${i},width=${r}`,
    [i, r]
  ), c = S(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${o}&t=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [o, n, a]
  ), u = S(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${o}&text=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [o, a, n]
  ), f = S(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${o}&text=${n}`,
          "newwindow",
          a
        );
      }
    }),
    [o, a, n]
  ), d = S(
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
  ), [l, h] = b(!1), m = S(
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
    X: u,
    LINE: f,
    share: d,
    copy: m,
    isCopied: l
  };
}, Nt = (e) => {
  const [t, n] = b(!1), r = p();
  G(() => {
    t && r.current && e(r.current);
  });
  const i = v((c) => {
    r.current = c, n(!0);
  }, []), o = v(() => {
    r.current = void 0, n(!1);
  }, []), a = v((c) => {
    r.current = c;
  }, []);
  return {
    onPointerEnter: i,
    onPointerLeave: o,
    onPointerMove: a
  };
}, Wt = (e) => {
  const [t, n] = b();
  return w(() => {
    e && e.current && n(e.current);
  }, [e]), t;
}, O = (e, t) => !!(e != null && e.includes(t)), Ht = (e, {
  reactive: t = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = b(!1), [o, a] = b(!1), c = p(), u = p(null), f = v(
    (d, l = 4, h = 1e-3) => {
      if (!c.current)
        return 0;
      l = Math.max(l, 0);
      const { progress: m } = c.current;
      u.current === null && (u.current = m), u.current = I.utils.interpolate(u.current, m, d);
      const g = Math.pow(10, l);
      return u.current = Math.round(u.current * g) / g, u.current < h ? 0 : 1 - u.current < h ? 1 : u.current;
    },
    []
  );
  return L(() => {
    const { onUpdate: d, onToggle: l, trigger: h, ...m } = e;
    if (!h)
      return;
    I.registerPlugin(_);
    const g = _.create({
      ...m,
      trigger: h,
      onToggle: (C) => {
        l == null || l(C), O(t, "isActive") && i(C.isActive);
      },
      onUpdate: (C) => {
        c.current = C, d == null || d(C), O(t, "direction") && a(C.direction);
      }
    });
    return () => g.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: f,
    scrollTrigger: c
  };
};
export {
  Lt as Accordion,
  kt as CustomBreakLineParser,
  x as CustomBreakLineUtils,
  $t as FormField,
  V as InfinityLoop,
  At as InfinityLoopOnView,
  vt as Loader,
  P as MODAL_CLASSNAME,
  rt as ModalButton,
  Mt as SpiceStarter,
  _t as SplitText,
  Bt as StableScroller,
  Rt as Tab,
  bt as Video,
  G as useFrame,
  gt as useIntersectionObserver,
  Dt as useIsTouchDevice,
  L as useIsomorphicLayoutEffect,
  Ot as useMediaQuery,
  Nt as useOnHovering,
  wt as useParsedBreakLine,
  ft as useResizeObserver,
  Ht as useScrollTrigger,
  Ft as useShare,
  Pt as useStableScroller,
  Wt as useValidElement,
  k as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
