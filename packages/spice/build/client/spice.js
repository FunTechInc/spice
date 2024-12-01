"use client";
import { jsx as c, jsxs as y, Fragment as E } from "react/jsx-runtime";
import { forwardRef as R, useRef as p, useCallback as v, useEffect as b, createContext as I, useState as w, useContext as A, useLayoutEffect as Y, useMemo as S } from "react";
import T from "gsap";
import P from "gsap/ScrollTrigger";
const J = ({ formProps: e }) => {
  const { style: t, ...n } = e;
  return /* @__PURE__ */ c(
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
  return /* @__PURE__ */ c(
    "select",
    {
      ...r,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: i && o[i],
      children: o.map((a, s) => /* @__PURE__ */ c("option", { value: a, children: a }, s))
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
      n && /* @__PURE__ */ c("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ c(r, { formProps: t[0] }),
      /* @__PURE__ */ c(o, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ y(E, { children: [
      n && /* @__PURE__ */ c("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ y("ul", { children: [
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ c(r, { formProps: t[0] }),
          /* @__PURE__ */ c(o, { index: 0 })
        ] }),
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ c(r, { formProps: t[1] }),
          /* @__PURE__ */ c(o, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const a = t.map(
      ({ id: s, value: u, style: f, optionLabel: l, ...d }) => /* @__PURE__ */ y("li", { children: [
        /* @__PURE__ */ c(
          r,
          {
            formProps: {
              id: s,
              value: u,
              style: {
                ...U,
                ...f || {}
              },
              ...d
            }
          }
        ),
        /* @__PURE__ */ c("label", { htmlFor: s, children: l || u })
      ] }, s)
    );
    return /* @__PURE__ */ y(E, { children: [
      n && /* @__PURE__ */ c("label", { children: n }),
      /* @__PURE__ */ c("ul", { children: a }),
      /* @__PURE__ */ c(o, { index: 0 })
    ] });
  }
}, tt = ({ formProps: e }) => {
  const { isTextarea: t, ...n } = e;
  return t ? /* @__PURE__ */ c("textarea", { ...n, ...t }) : null;
}, $t = ({
  label: e,
  formProps: t,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(t) ? t : [t], { type: o, isSelect: a, isTextarea: s } = i[0], u = i.length;
  if (!(o === "radio" || o === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  const f = ["radio", "checkbox"].includes(o || "") ? "radio-check" : u === 1 ? "block" : "flex";
  return /* @__PURE__ */ c("fieldset", { ...r, children: /* @__PURE__ */ c(
    Z,
    {
      layoutType: f,
      formPropsArr: i,
      label: e,
      errors: n,
      FormItem: a ? Q : s ? tt : J
    }
  ) });
}, W = (e) => new Promise((t) => {
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
}, M = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, _ = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, nt = () => window.innerWidth - document.documentElement.clientWidth, B = (e, { paddingRight: t, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = e ? t + n : t - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = e ? "auto" : "", i.overflow = e ? "hidden" : "";
}, rt = R(
  ({ dialog: e, onOpen: t, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, a) => {
    const s = p(null), u = p({
      paddingRight: 0,
      scrollbarWidth: 0
    }), f = v(() => {
      var d, h, m;
      i && (u.current.paddingRight = _(), u.current.scrollbarWidth = nt(), B(!0, u.current)), s.current.showModal(), (d = r == null ? void 0 : r.current) == null || d.focus(), (m = (h = s.current) == null ? void 0 : h.getElementsByClassName(M.scrollArea)[0]) == null || m.scrollTo(0, 0), t == null || t(s.current);
    }, [t, r, i]), l = v(async () => {
      n && await W(n(s.current)), i && (u.current.paddingRight = _(), B(!1, u.current)), s.current.close();
    }, [n, i]);
    return b(() => {
      const d = s.current.querySelectorAll(
        `.${M.close}`
      );
      if (d)
        return d.forEach(
          (h) => h.addEventListener("click", l)
        ), () => d.forEach(
          (h) => h.removeEventListener("click", l)
        );
    }, [l]), b(() => {
      const d = (h) => {
        var g;
        ((g = s.current) == null ? void 0 : g.hasAttribute("open")) && h.key === "Escape" && l();
      };
      return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
    }, [l]), /* @__PURE__ */ y(E, { children: [
      /* @__PURE__ */ c(
        "button",
        {
          ref: a,
          ...o,
          onClick: (d) => {
            var h;
            f(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, d);
          }
        }
      ),
      /* @__PURE__ */ c(
        "dialog",
        {
          ref: s,
          ...e,
          onClick: (d) => {
            var h;
            d.target === s.current && l(), (h = e.onClick) == null || h.call(e, d);
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
}, N = I(it), F = I(
  () => {
  }
), ot = ({ children: e, defaultValue: t }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = w({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: t,
    next: ""
  });
  return /* @__PURE__ */ c(N.Provider, { value: n, children: /* @__PURE__ */ c(F.Provider, { value: r, children: e }) });
}, H = () => A(N), $ = () => A(F), st = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = $(), i = H(), o = v(() => {
    i.current === t || i.isLeaving || r((a) => ({
      ...a,
      isLeaving: !0,
      isAnimation: !0,
      prev: a.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ c(
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
  const s = p(!0), u = p(null), f = $(), l = H(), d = l.current === t && !l.isLeaving;
  return b(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    if (!l.isAnimation) {
      d && i && i(u.current);
      return;
    }
    l.prev === t && (async () => (r && await W(r(u.current)), f((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), d && n && n(u.current);
  }, [l, f, n, r, i, t, d]), b(() => {
    z({
      content: u.current,
      isOpen: l.current === t
    });
  }, [l, t]), /* @__PURE__ */ c(
    "div",
    {
      ref: u,
      style: {
        ...l.current !== t ? {
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
      "aria-hidden": l.current !== t,
      ...a,
      children: e
    }
  );
}, at = () => {
  const e = $();
  return (t, n) => {
    e((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : t,
      next: n ? t : ""
    }));
  };
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: st,
  Content: ct,
  Context: ot,
  useTabSwitch: at
}, Symbol.toStringTag, { value: "Module" })), ut = {
  target: "",
  toggle: !1,
  defaultValue: []
}, j = I(ut), X = I(() => {
}), dt = ({ children: e, defaultValue: t = [] }) => {
  const [n, r] = w({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ c(j.Provider, { value: n, children: /* @__PURE__ */ c(X.Provider, { value: r, children: e }) });
}, G = () => A(j), lt = () => A(X), ht = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = G(), i = lt(), [o, a] = w(
    () => !!r.defaultValue.find((s) => s === t)
  );
  return /* @__PURE__ */ c(
    "button",
    {
      onClick: () => {
        i((s) => ({
          ...s,
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
  return b(() => {
    const s = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? i.current;
    if (!s)
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
    return u.observe(s), () => {
      u.unobserve(s), clearTimeout(o.current);
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
  const o = G(), [a, s] = w(
    () => !!o.defaultValue.find((h) => h === e)
  ), u = p(a);
  b(() => {
    o.target === e && s(!a);
  }, [o.target, o.toggle]);
  const f = p(!0), l = p(null), d = p(null);
  return b(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const h = {
      height: d.current.getBoundingClientRect().height,
      target: l.current
    };
    a ? t(h) : n(h);
  }, [a, t, n]), b(() => {
    z({ content: l.current, isOpen: a });
  }, [a]), ft(
    {
      target: d,
      onResize: (h) => {
        const m = h.getBoundingClientRect().height;
        a && (l.current.style.height = `${m}px`);
      },
      debounce: 100
    },
    [a]
  ), /* @__PURE__ */ c(
    "div",
    {
      ref: l,
      style: {
        overflow: "hidden",
        height: u.current ? "auto" : "0px"
      },
      id: `content-${e}`,
      "aria-labelledby": `button-${e}`,
      "aria-hidden": !a,
      children: /* @__PURE__ */ c("div", { ref: d, ...i, children: r })
    }
  );
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ht,
  Content: pt,
  Context: dt
}, Symbol.toStringTag, { value: "Module" })), gt = ({
  target: e,
  options: t,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const a = p(null), [s, u] = w(!1);
  return b(() => {
    const f = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? a.current;
    if (!f)
      return;
    const l = (h, m) => {
      h.forEach((g) => {
        u(g.isIntersecting), g.isIntersecting ? (r && r(g), n && m.unobserve(g.target)) : g.isIntersecting || i && i(g);
      });
    }, d = new IntersectionObserver(l, t);
    return d.observe(f), () => {
      d.unobserve(f);
    };
  }, o), { ref: a, isIntersecting: s };
}, k = typeof window < "u" ? Y : b;
function mt(e) {
  const t = p(e);
  return k(() => void (t.current = e), [e]), t;
}
const q = (e, t, n) => {
  const r = mt(e);
  k(() => {
    const i = (...o) => r.current(...o);
    return T.ticker.add(i, t, n), () => T.ticker.remove(i);
  }, [t, n]);
}, K = R(
  ({ active: e = !1, speed: t = 1, children: n, ...r }, i) => {
    const o = p(null), a = p(null), s = p(null), u = p(0);
    return q(() => {
      if (!e)
        return;
      const f = o.current, l = a.current, d = s.current;
      if (!(f && l && d))
        return;
      const h = T.ticker.deltaRatio() / 1e3, m = f.clientWidth / l.clientWidth;
      if (u.current += h * Math.abs(t) * m, u.current >= 1 && (u.current = 0), t < 0) {
        const g = u.current * -100;
        l.style.transform = `translateX(${g}%)`, d.style.transform = `translateX(${g}%)`;
      } else {
        const g = u.current * 100;
        l.style.transform = `translateX(${g}%)`, d.style.transform = `translateX(${g - 200}%)`;
      }
    }), /* @__PURE__ */ c("div", { ref: i, ...r, children: /* @__PURE__ */ c(
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
              /* @__PURE__ */ c("div", { ref: a, children: n }),
              /* @__PURE__ */ c("div", { ref: s, children: n })
            ]
          }
        )
      }
    ) });
  }
);
K.displayName = "InfinityLoop";
const Mt = (e) => {
  const { isIntersecting: t, ref: n } = gt({
    once: !1
  });
  return /* @__PURE__ */ c(K, { ref: n, ...e, active: t });
}, x = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (e) => e === `
` || e === "###br###",
  isSpecificBreak: (e) => e.match(/###br\.(.*?)###/),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, bt = (e) => S(
  () => e.split(x.regex).map((t, n) => x.isRegularBreak(t) ? /* @__PURE__ */ c("br", {}, n) : x.isSpecificBreak(t) ? /* @__PURE__ */ c(
    "br",
    {
      className: x.getClassName(t)
    },
    n
  ) : t),
  [e]
), _t = ({
  children: e
}) => {
  const t = bt(e);
  return /* @__PURE__ */ c(E, { children: t });
}, O = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ c("span", { ...e, children: /* @__PURE__ */ c("span", { ...t }) }) : /* @__PURE__ */ c("span", { ...t }), Bt = ({
  type: e = "chars",
  children: t,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = e === "chars" ? "" : " ";
  return S(
    () => t.split(x.regex).flatMap((s, u) => x.isRegularBreak(s) ? [null, /* @__PURE__ */ c("br", {}, u)] : x.isSpecificBreak(s) ? [
      null,
      /* @__PURE__ */ c(
        "br",
        {
          className: x.getClassName(s)
        },
        u
      )
    ] : [
      ...s.split(o).map((f, l) => {
        if (n) {
          const d = n.find(
            (h) => h.selector === f
          );
          if (d)
            return /* @__PURE__ */ c(
              O,
              {
                containerProps: r,
                ...i,
                ...d.attributes,
                children: f
              },
              `${u}-${l}`
            );
        }
        return /* @__PURE__ */ c(
          O,
          {
            containerProps: r,
            ...i,
            children: f === " " ? " " : f
          },
          `${u}-${l}`
        );
      }),
      null
    ]),
    [o, t, i, n, r]
  );
}, wt = R((e, t) => {
  const { fill: n, style: r, ...i } = e;
  return /* @__PURE__ */ c(
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
wt.displayName = "Video";
const vt = R(
  ({
    loader: e = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: a,
    ...s
  }, u) => {
    const [f, l] = w(t === 0), d = !!o;
    return b(() => {
      t !== 0 && setTimeout(() => l(!0), t);
    }, [t]), /* @__PURE__ */ c(
      "div",
      {
        ref: u,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...d ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...a
        },
        ...s,
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
              e === "skeleton" ? /* @__PURE__ */ c(
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
                  children: /* @__PURE__ */ c("style", { children: "@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}" })
                }
              ) : e === "circular" ? /* @__PURE__ */ c(
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
                  children: /* @__PURE__ */ c("style", { children: "@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}" })
                }
              ) : e,
              d && /* @__PURE__ */ c("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
vt.displayName = "Loader";
const V = I(
  void 0
), Ot = () => A(V), Dt = ({
  active: e = !0,
  style: t,
  ...n
}) => {
  const r = p(null), { isMobile: i } = Tt(), o = e && i, [a, s] = w(
    void 0
  );
  return k(() => {
    o && r.current ? s(r.current) : s(void 0);
  }, [o]), /* @__PURE__ */ c(V.Provider, { value: a, children: /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      style: {
        ...o ? {
          height: "100svh",
          overflowY: "auto"
        } : {},
        ...t
      },
      ...n
    }
  ) });
}, L = ({
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
  b(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
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
}, Wt = ({
  isFixViewportForSmall: e = !0,
  areYouFun: t = !1
} = {}) => {
  const n = v(
    (r) => {
      e && xt(r);
    },
    [e]
  );
  L({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), b(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && St(t);
  }, [t, n]);
}, Nt = () => {
  const [e, t] = w(null), n = v(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return L({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), b(() => n(), [n]), e;
}, Ft = (e, t) => {
  const [n, r] = w(null), i = v(
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
  return L({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), b(() => i(window.innerWidth), [i]), n;
}, Ht = ({
  shareUrl: e,
  sharePath: t,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = S(() => encodeURIComponent(e), [e]), a = S(
    () => `height=${i},width=${r}`,
    [i, r]
  ), s = S(
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
  ), l = S(
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
  ), [d, h] = w(!1), m = S(
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
    Facebook: s,
    X: u,
    LINE: f,
    share: l,
    copy: m,
    isCopied: d
  };
}, Ct = (e) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(e))
    return "iOS";
  if (/\bAndroid\b/i.test(e))
    return "Android";
}, Et = (e) => {
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
}, Tt = (e) => {
  const [t, n] = w({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return k(() => {
    const r = navigator.userAgent, i = Ct(r), o = Et(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: e && e(r)
    });
  }, []), t;
}, zt = (e) => {
  const [t, n] = w(!1), r = p();
  q(() => {
    t && r.current && e(r.current);
  });
  const i = v((s) => {
    r.current = s, n(!0);
  }, []), o = v(() => {
    r.current = void 0, n(!1);
  }, []), a = v((s) => {
    r.current = s;
  }, []);
  return {
    onPointerEnter: i,
    onPointerLeave: o,
    onPointerMove: a
  };
}, jt = (e) => {
  const [t, n] = w();
  return b(() => {
    e && e.current && n(e.current);
  }, [e]), t;
}, D = (e, t) => !!(e != null && e.includes(t)), Xt = (e, {
  reactive: t = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = w(!1), [o, a] = w(!1), s = p(), u = p(null), f = v(
    (l, d = 4, h = 1e-3) => {
      if (!s.current)
        return 0;
      d = Math.max(d, 0);
      const { progress: m } = s.current;
      u.current === null && (u.current = m), u.current = T.utils.interpolate(u.current, m, l);
      const g = Math.pow(10, d);
      return u.current = Math.round(u.current * g) / g, u.current < h ? 0 : 1 - u.current < h ? 1 : u.current;
    },
    []
  );
  return k(() => {
    const { onUpdate: l, onToggle: d, trigger: h, ...m } = e;
    if (!h)
      return;
    T.registerPlugin(P);
    const g = P.create({
      ...m,
      trigger: h,
      onToggle: (C) => {
        d == null || d(C), D(t, "isActive") && i(C.isActive);
      },
      onUpdate: (C) => {
        s.current = C, l == null || l(C), D(t, "direction") && a(C.direction);
      }
    });
    return () => g.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: f,
    scrollTrigger: s
  };
};
export {
  Pt as Accordion,
  _t as CustomBreakLineParser,
  x as CustomBreakLineUtils,
  $t as FormField,
  K as InfinityLoop,
  Mt as InfinityLoopOnView,
  vt as Loader,
  M as MODAL_CLASSNAME,
  rt as ModalButton,
  Bt as SplitText,
  Dt as StableScroller,
  Lt as Tab,
  wt as Video,
  Tt as useDeviceDetector,
  q as useFrame,
  gt as useIntersectionObserver,
  Nt as useIsTouchDevice,
  k as useIsomorphicLayoutEffect,
  Ft as useMediaQuery,
  zt as useOnHovering,
  bt as useParsedBreakLine,
  ft as useResizeObserver,
  Xt as useScrollTrigger,
  Ht as useShare,
  Ot as useStableScroller,
  Wt as useStarter,
  jt as useValidElement,
  L as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
