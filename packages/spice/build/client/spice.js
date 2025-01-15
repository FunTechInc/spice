"use client";
import { jsx as c, jsxs as v, Fragment as O } from "react/jsx-runtime";
import { forwardRef as B, useRef as p, useCallback as I, useEffect as b, createContext as T, useState as w, useContext as $, useLayoutEffect as Z, useMemo as M } from "react";
import y from "gsap";
import L from "gsap/ScrollTrigger";
const tt = ({ formProps: t }) => {
  const { style: e, ...n } = t;
  return /* @__PURE__ */ c(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...e
      }
    }
  );
}, et = ({ formProps: t }) => {
  const { isSelect: e, style: n, ...r } = t;
  if (!e)
    return null;
  const { defaultSelectedIndex: i, options: o } = e;
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
      children: o.map((u, a) => /* @__PURE__ */ c("option", { value: u, children: u }, a))
    }
  );
}, nt = {
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
}, rt = ({
  layoutType: t,
  formPropsArr: e,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: u }) => i ? Array.isArray(i) ? i[u] : i : null;
  if (t === "block")
    return /* @__PURE__ */ v(O, { children: [
      n && /* @__PURE__ */ c("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ c(r, { formProps: e[0] }),
      /* @__PURE__ */ c(o, { index: 0 })
    ] });
  if (t === "flex")
    return /* @__PURE__ */ v(O, { children: [
      n && /* @__PURE__ */ c("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ v("ul", { children: [
        /* @__PURE__ */ v("li", { children: [
          /* @__PURE__ */ c(r, { formProps: e[0] }),
          /* @__PURE__ */ c(o, { index: 0 })
        ] }),
        /* @__PURE__ */ v("li", { children: [
          /* @__PURE__ */ c(r, { formProps: e[1] }),
          /* @__PURE__ */ c(o, { index: 1 })
        ] })
      ] })
    ] });
  if (t === "radio-check") {
    const u = e.map(
      ({ id: a, value: s, style: f, optionLabel: d, ...l }) => /* @__PURE__ */ v("li", { children: [
        /* @__PURE__ */ c(
          r,
          {
            formProps: {
              id: a,
              value: s,
              style: {
                ...nt,
                ...f || {}
              },
              ...l
            }
          }
        ),
        /* @__PURE__ */ c("label", { htmlFor: a, children: d || s })
      ] }, a)
    );
    return /* @__PURE__ */ v(O, { children: [
      n && /* @__PURE__ */ c("label", { children: n }),
      /* @__PURE__ */ c("ul", { children: u }),
      /* @__PURE__ */ c(o, { index: 0 })
    ] });
  }
}, it = ({ formProps: t }) => {
  const { isTextarea: e, ...n } = t;
  return e ? /* @__PURE__ */ c("textarea", { ...n, ...e }) : null;
}, _t = ({
  label: t,
  formProps: e,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: o, isSelect: u, isTextarea: a } = i[0], s = i.length;
  if (!(o === "radio" || o === "checkbox") && s > 2)
    throw new Error("The length of formProps is up to 2.");
  const f = ["radio", "checkbox"].includes(o || "") ? "radio-check" : s === 1 ? "block" : "flex";
  return /* @__PURE__ */ c("fieldset", { ...r, children: /* @__PURE__ */ c(
    rt,
    {
      layoutType: f,
      formPropsArr: i,
      label: t,
      errors: n,
      FormItem: u ? et : a ? it : tt
    }
  ) });
}, j = (t) => new Promise((e) => {
  t instanceof Promise ? t.then(() => {
    e(null);
  }) : e(null);
}), ot = {
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
}, _ = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, st = () => window.innerWidth - document.documentElement.clientWidth, F = (t, { paddingRight: e, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = t ? e + n : e - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = t ? "auto" : "", i.overflow = t ? "hidden" : "";
}, ct = B(
  ({ dialog: t, onOpen: e, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, u) => {
    const a = p(null), s = p({
      paddingRight: 0,
      scrollbarWidth: 0
    }), f = I(() => {
      var l, h, m;
      i && (s.current.paddingRight = _(), s.current.scrollbarWidth = st(), F(!0, s.current)), a.current.showModal(), (l = r == null ? void 0 : r.current) == null || l.focus(), (m = (h = a.current) == null ? void 0 : h.getElementsByClassName(P.scrollArea)[0]) == null || m.scrollTo(0, 0), e == null || e(a.current);
    }, [e, r, i]), d = I(async () => {
      n && await j(n(a.current)), i && (s.current.paddingRight = _(), F(!1, s.current)), a.current.close();
    }, [n, i]);
    return b(() => {
      const l = a.current.querySelectorAll(
        `.${P.close}`
      );
      if (l)
        return l.forEach(
          (h) => h.addEventListener("click", d)
        ), () => l.forEach(
          (h) => h.removeEventListener("click", d)
        );
    }, [d]), b(() => {
      const l = (h) => {
        var g;
        ((g = a.current) == null ? void 0 : g.hasAttribute("open")) && h.key === "Escape" && d();
      };
      return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
    }, [d]), /* @__PURE__ */ v(O, { children: [
      /* @__PURE__ */ c(
        "button",
        {
          ref: u,
          ...o,
          onClick: (l) => {
            var h;
            f(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, l);
          }
        }
      ),
      /* @__PURE__ */ c(
        "dialog",
        {
          ref: a,
          ...t,
          onClick: (l) => {
            var h;
            l.target === a.current && d(), (h = t.onClick) == null || h.call(t, l);
          },
          style: {
            ...ot,
            ...t.style || {}
          }
        }
      )
    ] });
  }
);
ct.displayName = "ModalButton";
const at = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, H = T(at), Q = T(
  () => {
  }
), ut = ({ children: t, defaultValue: e }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = w({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: e,
    next: ""
  });
  return /* @__PURE__ */ c(H.Provider, { value: n, children: /* @__PURE__ */ c(Q.Provider, { value: r, children: t }) });
}, X = () => $(H), k = () => $(Q), lt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = k(), i = X(), o = I(() => {
    i.current === e || i.isLeaving || r((u) => ({
      ...u,
      isLeaving: !0,
      isAnimation: !0,
      prev: u.current,
      next: e
    }));
  }, [r, i, e]);
  return /* @__PURE__ */ c(
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
}, q = ({ content: t, isOpen: e }) => {
  const n = t.querySelectorAll("a,button");
  if (!n)
    return;
  const r = e ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, dt = ({
  children: t,
  value: e,
  onOpen: n,
  onClose: r,
  onReset: i,
  style: o,
  ...u
}) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const a = p(!0), s = p(null), f = k(), d = X(), l = d.current === e && !d.isLeaving;
  return b(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (!d.isAnimation) {
      l && i && i(s.current);
      return;
    }
    d.prev === e && (async () => (r && await j(r(s.current)), f((h) => ({
      ...h,
      isLeaving: !1,
      prev: "",
      current: h.next,
      next: ""
    }))))(), l && n && n(s.current);
  }, [d, f, n, r, i, e, l]), b(() => {
    q({
      content: s.current,
      isOpen: d.current === e
    });
  }, [d, e]), /* @__PURE__ */ c(
    "div",
    {
      ref: s,
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
      ...u,
      children: t
    }
  );
}, ht = () => {
  const t = k();
  return (e, n) => {
    t((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : e,
      next: n ? e : ""
    }));
  };
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: lt,
  Content: dt,
  Context: ut,
  useTabSwitch: ht
}, Symbol.toStringTag, { value: "Module" })), ft = {
  target: "",
  toggle: !1,
  defaultValue: []
}, z = T(ft), x = T(() => {
}), pt = ({ children: t, defaultValue: e = [] }) => {
  const [n, r] = w({
    target: "",
    toggle: !1,
    defaultValue: e
  });
  return /* @__PURE__ */ c(z.Provider, { value: n, children: /* @__PURE__ */ c(x.Provider, { value: r, children: t }) });
}, V = () => $(z), gt = () => $(x), mt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = V(), i = gt(), [o, u] = w(
    () => !!r.defaultValue.find((a) => a === e)
  );
  return /* @__PURE__ */ c(
    "button",
    {
      onClick: () => {
        i((a) => ({
          ...a,
          toggle: o,
          target: e
        })), u(!o);
      },
      "aria-controls": `content-${e}`,
      id: `button-${e}`,
      "aria-expanded": o,
      ...n,
      children: t
    }
  );
}, S = typeof window < "u" ? Z : b, wt = ({ target: t, onResize: e, debounce: n = 100 } = {}, r) => {
  const i = p(null), o = p(0), u = p(!0);
  return S(() => {
    const a = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? i.current;
    if (!a)
      return;
    const s = new ResizeObserver((f) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (u.current) {
          u.current = !1;
          return;
        }
        e == null || e(f[0].target);
      }, n);
    });
    return s.observe(a), () => {
      s.unobserve(a), clearTimeout(o.current);
    };
  }, r), i;
}, bt = ({
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
  const o = V(), [u, a] = w(
    () => !!o.defaultValue.find((h) => h === t)
  ), s = p(u);
  b(() => {
    o.target === t && a(!u);
  }, [o.target, o.toggle]);
  const f = p(!0), d = p(null), l = p(null);
  return b(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const h = {
      height: l.current.getBoundingClientRect().height,
      target: d.current
    };
    u ? e(h) : n(h);
  }, [u, e, n]), b(() => {
    q({ content: d.current, isOpen: u });
  }, [u]), wt(
    {
      target: l,
      onResize: (h) => {
        const m = h.getBoundingClientRect().height;
        u && (d.current.style.height = `${m}px`);
      },
      debounce: 100
    },
    [u]
  ), /* @__PURE__ */ c(
    "div",
    {
      ref: d,
      style: {
        overflowY: "clip",
        height: s.current ? "auto" : "0px"
      },
      id: `content-${t}`,
      "aria-labelledby": `button-${t}`,
      "aria-hidden": !u,
      children: /* @__PURE__ */ c("div", { ref: l, ...i, children: r })
    }
  );
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: mt,
  Content: bt,
  Context: pt
}, Symbol.toStringTag, { value: "Module" })), Y = ({
  target: t,
  options: e,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const u = p(null), [a, s] = w(!1);
  return S(() => {
    const f = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? u.current;
    if (!f)
      return;
    const d = (h, m) => {
      h.forEach((g) => {
        s(g.isIntersecting), g.isIntersecting ? (r && r(g), n && m.unobserve(g.target)) : g.isIntersecting || i && i(g);
      });
    }, l = new IntersectionObserver(d, e);
    return l.observe(f), () => {
      l.unobserve(f);
    };
  }, o), { ref: u, isIntersecting: a };
};
function vt(t) {
  const e = p(t);
  return S(() => void (e.current = t), [t]), e;
}
const A = (t, e, n) => {
  const r = vt(t);
  S(() => {
    const i = (...o) => r.current(...o);
    return y.ticker.add(i, e, n), () => y.ticker.remove(i);
  }, [e, n]);
}, G = B(
  ({ active: t = !1, speed: e = 1, children: n, ...r }, i) => {
    const o = p(null), u = p(null), a = p(null), s = p(0);
    return A(() => {
      if (!t)
        return;
      const f = o.current, d = u.current, l = a.current;
      if (!(f && d && l))
        return;
      const h = y.ticker.deltaRatio() / 1e3, m = f.clientWidth / d.clientWidth;
      if (s.current += h * Math.abs(e) * m, s.current >= 1 && (s.current = 0), e < 0) {
        const g = s.current * -100;
        d.style.transform = `translateX(${g}%)`, l.style.transform = `translateX(${g}%)`;
      } else {
        const g = s.current * 100;
        d.style.transform = `translateX(${g}%)`, l.style.transform = `translateX(${g - 200}%)`;
      }
    }), /* @__PURE__ */ c("div", { ref: i, ...r, children: /* @__PURE__ */ c(
      "div",
      {
        ref: o,
        style: {
          overflow: "hidden",
          width: "100%"
        },
        children: /* @__PURE__ */ v(
          "div",
          {
            style: {
              whiteSpace: "nowrap",
              display: "flex"
            },
            children: [
              /* @__PURE__ */ c("div", { ref: u, children: n }),
              /* @__PURE__ */ c("div", { ref: a, children: n })
            ]
          }
        )
      }
    ) });
  }
);
G.displayName = "InfinityLoop";
const Nt = (t) => {
  const { isIntersecting: e, ref: n } = Y({
    once: !1
  });
  return /* @__PURE__ */ c(G, { ref: n, ...t, active: e });
}, E = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (t) => t === `
` || t === "###br###",
  isSpecificBreak: (t) => t.match(/###br\.(.*?)###/),
  getClassName: (t) => {
    var e;
    return ((e = t.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, yt = (t) => M(
  () => t.split(E.regex).map((e, n) => E.isRegularBreak(e) ? /* @__PURE__ */ c("br", {}, n) : E.isSpecificBreak(e) ? /* @__PURE__ */ c(
    "br",
    {
      className: E.getClassName(e)
    },
    n
  ) : e),
  [t]
), Wt = ({
  children: t
}) => {
  const e = yt(t);
  return /* @__PURE__ */ c(O, { children: e });
}, D = ({
  containerProps: t,
  ...e
}) => t ? /* @__PURE__ */ c("span", { ...t, children: /* @__PURE__ */ c("span", { ...e }) }) : /* @__PURE__ */ c("span", { ...e }), jt = ({
  type: t = "chars",
  children: e,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = t === "chars" ? "" : " ";
  return M(
    () => e.split(E.regex).flatMap((a, s) => E.isRegularBreak(a) ? [null, /* @__PURE__ */ c("br", {}, s)] : E.isSpecificBreak(a) ? [
      null,
      /* @__PURE__ */ c(
        "br",
        {
          className: E.getClassName(a)
        },
        s
      )
    ] : [
      ...a.split(o).map((f, d) => {
        if (n) {
          const l = n.find(
            (h) => h.selector === f
          );
          if (l)
            return /* @__PURE__ */ c(
              D,
              {
                containerProps: r,
                ...i,
                ...l.attributes,
                children: f
              },
              `${s}-${d}`
            );
        }
        return /* @__PURE__ */ c(
          D,
          {
            containerProps: r,
            ...i,
            children: f === " " ? " " : f
          },
          `${s}-${d}`
        );
      }),
      null
    ]),
    [o, e, i, n, r]
  );
}, St = B((t, e) => {
  const { fill: n, style: r, ...i } = t;
  return /* @__PURE__ */ c(
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
St.displayName = "Video";
const Mt = B(
  ({
    loader: t = "skeleton",
    delay: e = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: u,
    ...a
  }, s) => {
    const [f, d] = w(e === 0), l = !!o;
    return b(() => {
      e !== 0 && setTimeout(() => d(!0), e);
    }, [e]), /* @__PURE__ */ c(
      "div",
      {
        ref: s,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...l ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...u
        },
        ...a,
        children: /* @__PURE__ */ v(
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
              t === "skeleton" ? /* @__PURE__ */ c(
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
              ) : t === "circular" ? /* @__PURE__ */ c(
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
              ) : t,
              l && /* @__PURE__ */ c("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
Mt.displayName = "Loader";
const U = T(
  void 0
), Ht = () => $(U), Qt = ({
  active: t,
  style: e,
  ...n
}) => {
  const r = p(null), [i, o] = w(
    void 0
  );
  return S(() => {
    t && r.current ? o(r.current) : o(void 0);
  }, [t]), /* @__PURE__ */ c(U.Provider, { value: i, children: /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      style: {
        ...t ? {
          height: "100svh",
          overflowY: "auto"
        } : {},
        ...e
      },
      ...n
    }
  ) });
}, K = ({
  onResize: t,
  debounce: e = 100,
  dependencies: n = []
}) => {
  const r = p(0), i = p(0), o = I(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      t({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, e);
  }, [t, e]);
  S(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, It = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, Et = (t) => {
  let e = It;
  typeof t == "string" && (e += t), console.log(e);
}, Ct = (t) => {
  const e = document.querySelector('meta[name="viewport"]');
  if (!e)
    return;
  const n = t > 360 ? "width=device-width,initial-scale=1" : "width=360";
  e.getAttribute("content") !== n && e.setAttribute("content", n);
}, Xt = ({
  fixViewport: t = !0,
  areYouFun: e = !1
} = {}) => {
  const n = I(
    (r) => {
      t && Ct(r);
    },
    [t]
  );
  return K({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), b(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), e && process.env.NODE_ENV !== "development" && Et(e);
  }, [e, n]), null;
}, Ot = (t, e) => {
  if (typeof t == "number")
    return t * e;
  const n = y.utils.getUnit(t) || "";
  return (parseFloat(t) || 0) * e + n;
}, Tt = ({
  y: t = "8%",
  scroller: e,
  scrub: n = 1,
  ...r
}) => {
  const i = p(null), o = p(y.context(() => {
  }));
  return S(() => (y.registerPlugin(L), o.current.add(() => {
    y.fromTo(
      i.current,
      { y: t },
      {
        y: Ot(t, -1),
        scrollTrigger: {
          trigger: i.current,
          scroller: e,
          start: "top bottom",
          end: "bottom top",
          scrub: n
        }
      }
    );
  }), () => o.current.revert()), [e]), /* @__PURE__ */ c("div", { ref: i, ...r });
}, $t = (t) => typeof t == "number" ? t : parseFloat(t) || 0, qt = ({
  children: t,
  style: e,
  y: n = "8%",
  scroller: r,
  scrub: i = 1,
  ...o
}) => /* @__PURE__ */ c(
  "div",
  {
    ...o,
    style: {
      overflow: "hidden",
      ...e
    },
    children: /* @__PURE__ */ c(
      Tt,
      {
        y: n,
        scroller: r,
        scrub: i,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          scale: 1 + $t(n) * 0.02
          // 1 + scale * 2 / 100
        },
        children: t
      }
    )
  }
), zt = ({
  speed: t = 1,
  range: e = "100px",
  ease: n = (i) => i,
  ...r
}) => {
  const { ref: i, isIntersecting: o } = Y(), u = typeof e == "string" && y.utils.getUnit(e) || "px", a = parseFloat(e.toString()) || 0;
  return A((s) => {
    if (!o)
      return;
    const f = (n((Math.sin(s * t) + 1) / 2) * 2 - 1) * a;
    i.current.style.transform = `translateY(${f}${u})`;
  }), /* @__PURE__ */ c("div", { ref: i, ...r });
}, xt = () => {
  const [t, e] = w(null);
  return S(() => {
    e(
      window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints
    );
  }, []), t;
}, Vt = (t, e) => {
  const [n, r] = w(null), i = I(
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
  return K({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), S(
    () => i(window.innerWidth),
    [i]
  ), n;
}, Yt = ({
  shareUrl: t,
  sharePath: e,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = M(() => encodeURIComponent(t), [t]), u = M(
    () => `height=${i},width=${r}`,
    [i, r]
  ), a = M(
    () => ({
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer.php?u=${o}&t=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [o, n, u]
  ), s = M(
    () => ({
      onClick: () => {
        window.open(
          `https:////twitter.com/share?url=${o}&text=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [o, u, n]
  ), f = M(
    () => ({
      onClick: () => {
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${o}&text=${n}`,
          "newwindow",
          u
        );
      }
    }),
    [o, u, n]
  ), d = M(
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
  ), [l, h] = w(!1), m = M(
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
    Facebook: a,
    X: s,
    LINE: f,
    share: d,
    copy: m,
    isCopied: l
  };
}, Gt = (t, e) => {
  const [n, r] = w(!1), i = p();
  A(() => {
    n && i.current && t(i.current);
  });
  const o = I(() => {
    i.current = void 0, r(!1);
  }, []), u = I(
    (a) => {
      n || (r(!0), e == null || e(a)), i.current = a;
    },
    [n, e]
  );
  return {
    onPointerLeave: o,
    onPointerMove: u
  };
}, Ut = (t) => {
  const [e, n] = w();
  return b(() => {
    t && t.current && n(t.current);
  }, [t]), e;
}, N = (t, e) => !!(t != null && t.includes(e)), Kt = (t, {
  reactive: e = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = w(!1), [o, u] = w(!1), a = p(), s = p(null), f = I(
    (d, l = 4, h = 1e-3) => {
      if (!a.current)
        return 0;
      l = Math.max(l, 0);
      const { progress: m } = a.current;
      s.current === null && (s.current = m), s.current = y.utils.interpolate(s.current, m, d);
      const g = Math.pow(10, l);
      return s.current = Math.round(s.current * g) / g, s.current < h ? 0 : 1 - s.current < h ? 1 : s.current;
    },
    []
  );
  return S(() => {
    const { onUpdate: d, onToggle: l, trigger: h, ...m } = t;
    if (!h)
      return;
    y.registerPlugin(L);
    const g = L.create({
      ...m,
      trigger: h,
      onToggle: (C) => {
        l == null || l(C), N(e, "isActive") && i(C.isActive);
      },
      onUpdate: (C) => {
        a.current = C, d == null || d(C), N(e, "direction") && u(C.direction);
      }
    });
    return () => g.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: f,
    scrollTrigger: a
  };
}, J = (t, e) => {
  if (e < t)
    throw Error(
      `End number must be higher then start number: start ${t}, end ${t}`
    );
  const n = e - t + 1;
  return Array(n).fill(0).map((r, i) => i + t);
}, W = (t, e, n) => Math.min(Math.max(t, e), n), Rt = (t, e) => J(1, Math.ceil(t / e)), Bt = (t, e, n, r = 5, i = "...") => {
  if (e = Math.ceil(e / n), e < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  t < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), t = 1), t > e && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    e
  ), t = e), r % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), r += 1), r < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), r = 5);
  const o = (r - 1) / 2, u = e > r, a = {
    start: W(
      t - o,
      1,
      u ? e - r + 1 : 1
    ),
    end: W(t + o, r, e)
  }, s = J(a.start, a.end);
  return u && s[0] !== 1 && (s[0] = 1, s[1] = i), u && s[s.length - 1] !== e && (s[s.length - 1] = e, s[s.length - 2] = i), s;
}, R = Object.freeze({
  easeInSine(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  },
  easeOutSine(t) {
    return Math.sin(t * Math.PI / 2);
  },
  easeInOutSine(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  },
  easeInQuad(t) {
    return t * t;
  },
  easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t);
  },
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  },
  easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  },
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },
  easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  },
  easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  },
  easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  },
  easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  },
  easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
  },
  easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  },
  easeInOutExpo(t) {
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  },
  easeInCirc(t) {
    return 1 - Math.sqrt(1 - Math.pow(t, 2));
  },
  easeOutCirc(t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  },
  easeInOutCirc(t) {
    return t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
  },
  easeInBack(t) {
    return 2.70158 * t * t * t - 1.70158 * t * t;
  },
  easeOutBack(t) {
    return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);
  },
  easeInOutBack(t) {
    const n = 2.5949095;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((n + 1) * 2 * t - n) / 2 : (Math.pow(2 * t - 2, 2) * ((n + 1) * (t * 2 - 2) + n) + 2) / 2;
  },
  easeInElastic(t) {
    const e = 2 * Math.PI / 3;
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * e);
  },
  easeOutElastic(t) {
    const e = 2 * Math.PI / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * e) + 1;
  },
  easeInOutElastic(t) {
    const e = 2 * Math.PI / 4.5;
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * e)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * e) / 2 + 1;
  },
  easeInBounce(t) {
    return 1 - R.easeOutBounce(1 - t);
  },
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce(t) {
    return t < 0.5 ? (1 - R.easeOutBounce(1 - 2 * t)) / 2 : (1 + R.easeOutBounce(2 * t - 1)) / 2;
  }
}), Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: R,
  getPageRange: Rt,
  getPaginationRange: Bt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dt as Accordion,
  Wt as CustomBreakLineParser,
  E as CustomBreakLineUtils,
  zt as Float,
  _t as FormField,
  G as InfinityLoop,
  Nt as InfinityLoopOnView,
  Mt as Loader,
  P as MODAL_CLASSNAME,
  ct as ModalButton,
  Tt as Parallax,
  qt as ParallaxThumbnail,
  Xt as SpiceStarter,
  jt as SplitText,
  Qt as StableScroller,
  Ft as Tab,
  St as Video,
  A as useFrame,
  Y as useIntersectionObserver,
  xt as useIsTouchDevice,
  S as useIsomorphicLayoutEffect,
  Vt as useMediaQuery,
  Gt as useOnHovering,
  yt as useParsedBreakLine,
  wt as useResizeObserver,
  Kt as useScrollTrigger,
  Yt as useShare,
  Ht as useStableScroller,
  Ut as useValidElement,
  K as useWindowResizeObserver,
  Jt as utils
};
//# sourceMappingURL=spice.js.map
