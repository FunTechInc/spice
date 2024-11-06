"use client";
import { jsx as a, jsxs as v, Fragment as E } from "react/jsx-runtime";
import { forwardRef as $, useRef as g, useCallback as S, useEffect as b, createContext as I, useState as w, useContext as R, useLayoutEffect as K, useMemo as y } from "react";
import T from "gsap";
import P from "gsap/ScrollTrigger";
const Y = ({ formProps: e }) => {
  const { style: t, ...n } = e;
  return /* @__PURE__ */ a(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, J = ({ formProps: e }) => {
  const { isSelect: t, style: n, ...r } = e;
  if (!t)
    return;
  const i = () => {
    const s = t.defaultValue;
    return s ? /* @__PURE__ */ a("option", { hidden: !0, children: s }) : null;
  }, o = () => {
    const s = t.defaultSelectedIndex;
    if (s)
      return t.options[s];
  };
  return /* @__PURE__ */ v(
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
        t.options.map((s) => /* @__PURE__ */ a("option", { value: s, children: s }, s))
      ]
    }
  );
}, Q = {
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
}, U = ({
  layoutType: e,
  formPropsArr: t,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (e === "block")
    return /* @__PURE__ */ v(E, { children: [
      n && /* @__PURE__ */ a("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ a(r, { formProps: t[0] }),
      /* @__PURE__ */ a(o, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ v(E, { children: [
      n && /* @__PURE__ */ a("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ v("ul", { children: [
        /* @__PURE__ */ v("li", { children: [
          /* @__PURE__ */ a(r, { formProps: t[0] }),
          /* @__PURE__ */ a(o, { index: 0 })
        ] }),
        /* @__PURE__ */ v("li", { children: [
          /* @__PURE__ */ a(r, { formProps: t[1] }),
          /* @__PURE__ */ a(o, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const s = t.map(
      ({ id: c, value: u, style: f, optionLabel: l, ...d }) => /* @__PURE__ */ v("li", { children: [
        /* @__PURE__ */ a(
          r,
          {
            formProps: {
              id: c,
              value: u,
              style: {
                ...Q,
                ...f || {}
              },
              ...d
            }
          }
        ),
        /* @__PURE__ */ a("label", { htmlFor: c, children: l || u })
      ] }, c)
    );
    return /* @__PURE__ */ v(E, { children: [
      n && /* @__PURE__ */ a("label", { children: n }),
      /* @__PURE__ */ a("ul", { children: s }),
      /* @__PURE__ */ a(o, { index: 0 })
    ] });
  }
}, Z = ({ formProps: e }) => {
  const { isTextarea: t, ...n } = e;
  if (t)
    return /* @__PURE__ */ a("textarea", { ...n, ...t });
}, Rt = ({
  label: e,
  formProps: t,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(t) ? t : [t], { type: o, isSelect: s, isTextarea: c } = i[0], u = i.length;
  if (!(o === "radio" || o === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  const f = ["radio", "checkbox"].includes(o || "") ? "radio-check" : u === 1 ? "block" : "flex";
  return /* @__PURE__ */ a("fieldset", { ...r, children: /* @__PURE__ */ a(
    U,
    {
      layoutType: f,
      formPropsArr: i,
      label: e,
      errors: n,
      FormItem: s ? J : c ? Z : Y
    }
  ) });
}, W = (e) => new Promise((t) => {
  e instanceof Promise ? e.then(() => {
    t(null);
  }) : t(null);
}), tt = {
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
}, _ = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, et = () => window.innerWidth - document.documentElement.clientWidth, B = (e, { paddingRight: t, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = e ? t + n : t - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = e ? "auto" : "", i.overflow = e ? "hidden" : "";
}, nt = $(
  ({ dialog: e, onOpen: t, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, s) => {
    const c = g(null), u = g({
      paddingRight: 0,
      scrollbarWidth: 0
    }), f = S(() => {
      var d, h, m;
      i && (u.current.paddingRight = _(), u.current.scrollbarWidth = et(), B(!0, u.current)), c.current.showModal(), (d = r == null ? void 0 : r.current) == null || d.focus(), (m = (h = c.current) == null ? void 0 : h.getElementsByClassName(M.scrollArea)[0]) == null || m.scrollTo(0, 0), t == null || t(c.current);
    }, [t, r, i]), l = S(async () => {
      n && await W(n(c.current)), i && (u.current.paddingRight = _(), B(!1, u.current)), c.current.close();
    }, [n, i]);
    return b(() => {
      const d = c.current.querySelectorAll(
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
        var p;
        ((p = c.current) == null ? void 0 : p.hasAttribute("open")) && h.key === "Escape" && l();
      };
      return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
    }, [l]), /* @__PURE__ */ v(E, { children: [
      /* @__PURE__ */ a(
        "button",
        {
          ref: s,
          ...o,
          onClick: (d) => {
            var h;
            f(), (h = o == null ? void 0 : o.onClick) == null || h.call(o, d);
          }
        }
      ),
      /* @__PURE__ */ a(
        "dialog",
        {
          ref: c,
          ...e,
          onClick: (d) => {
            var h;
            d.target === c.current && l(), (h = e.onClick) == null || h.call(e, d);
          },
          style: {
            ...tt,
            ...e.style || {}
          }
        }
      )
    ] });
  }
);
nt.displayName = "ModalButton";
const rt = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, F = I(rt), N = I(
  () => {
  }
), it = ({ children: e, defaultValue: t }) => {
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
  return /* @__PURE__ */ a(F.Provider, { value: n, children: /* @__PURE__ */ a(N.Provider, { value: r, children: e }) });
}, H = () => R(F), k = () => R(N), ot = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = k(), i = H(), o = S(() => {
    i.current === t || i.isLeaving || r((s) => ({
      ...s,
      isLeaving: !0,
      isAnimation: !0,
      prev: s.current,
      next: t
    }));
  }, [r, i, t]);
  return /* @__PURE__ */ a(
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
}, st = ({
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
  const c = g(!0), u = g(null), f = k(), l = H(), d = l.current === t && !l.isLeaving;
  return b(() => {
    if (c.current) {
      c.current = !1;
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
  }, [l, t]), /* @__PURE__ */ a(
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
      ...s,
      children: e
    }
  );
}, ct = () => {
  const e = k();
  return (t, n) => {
    e((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : t,
      next: n ? t : ""
    }));
  };
}, $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ot,
  Content: st,
  Context: it,
  useTabSwitch: ct
}, Symbol.toStringTag, { value: "Module" })), at = {
  target: "",
  toggle: !1,
  defaultValue: []
}, j = I(at), X = I(() => {
}), ut = ({ children: e, defaultValue: t }) => {
  const [n, r] = w({
    target: "",
    toggle: !1,
    defaultValue: t
  });
  return /* @__PURE__ */ a(j.Provider, { value: n, children: /* @__PURE__ */ a(X.Provider, { value: r, children: e }) });
}, G = () => R(j), dt = () => R(X), lt = ({ children: e, value: t, ...n }) => {
  if (t === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = G(), i = dt(), [o, s] = w(
    () => !!r.defaultValue.find((c) => c === t)
  );
  return /* @__PURE__ */ a(
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
}, ht = ({ target: e, onResize: t, debounce: n = 100 } = {}, r) => {
  const i = g(null), o = g(0), s = g(!0);
  return b(() => {
    const c = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? i.current;
    if (!c)
      return;
    const u = new ResizeObserver((f) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        t == null || t(f[0].target);
      }, n);
    });
    return u.observe(c), () => {
      u.unobserve(c), clearTimeout(o.current);
    };
  }, r), i;
}, ft = ({
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
  const o = G(), [s, c] = w(
    () => !!o.defaultValue.find((h) => h === e)
  ), u = g(s);
  b(() => {
    o.target === e && c(!s);
  }, [o.target, o.toggle]);
  const f = g(!0), l = g(null), d = g(null);
  return b(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const h = {
      height: d.current.getBoundingClientRect().height,
      target: l.current
    };
    s ? t(h) : n(h);
  }, [s, t, n]), b(() => {
    z({ content: l.current, isOpen: s });
  }, [s]), ht(
    {
      target: d,
      onResize: (h) => {
        const m = h.getBoundingClientRect().height;
        s && (l.current.style.height = `${m}px`);
      },
      debounce: 100
    },
    [s]
  ), /* @__PURE__ */ a(
    "div",
    {
      ref: l,
      style: {
        overflow: "hidden",
        height: u.current ? "auto" : "0px"
      },
      id: `content-${e}`,
      "aria-labelledby": `button-${e}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ a("div", { ref: d, ...i, children: r })
    }
  );
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: lt,
  Content: ft,
  Context: ut
}, Symbol.toStringTag, { value: "Module" })), gt = ({
  target: e,
  options: t,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const s = g(null), [c, u] = w(!1);
  return b(() => {
    const f = e instanceof Element ? e : (e == null ? void 0 : e.current) ?? s.current;
    if (!f)
      return;
    const l = (h, m) => {
      h.forEach((p) => {
        u(p.isIntersecting), p.isIntersecting ? (r && r(p), n && m.unobserve(p.target)) : p.isIntersecting || i && i(p);
      });
    }, d = new IntersectionObserver(l, t);
    return d.observe(f), () => {
      d.unobserve(f);
    };
  }, o), { ref: s, isIntersecting: c };
}, A = typeof window < "u" ? K : b, V = (e, t, n) => {
  const r = g(e);
  A(() => void (r.current = e), [e]), A(() => {
    const i = (...o) => r.current(...o);
    return T.ticker.add(i, t, n), () => T.ticker.remove(i);
  }, [t, n]);
}, Lt = ({
  children: e,
  speed: t = 1,
  style: n,
  ...r
}) => {
  const i = g(null), o = g(null), s = g(null), { isIntersecting: c } = gt({
    target: i,
    once: !1
  }), u = g(0);
  return V(() => {
    if (!c)
      return;
    const f = i.current, l = o.current, d = s.current;
    if (!f || !l || !d)
      return;
    const h = T.ticker.deltaRatio() / 1e3, m = f.clientWidth / l.clientWidth;
    if (u.current += h * Math.abs(t) * m, u.current >= 1 && (u.current = 0), t < 0) {
      const p = u.current * -100;
      l.style.transform = `translateX(${p}%)`, d.style.transform = `translateX(${p}%)`;
    } else {
      const p = u.current * 100;
      l.style.transform = `translateX(${p}%)`, d.style.transform = `translateX(${p - 200}%)`;
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
      children: /* @__PURE__ */ v(
        "div",
        {
          style: {
            whiteSpace: "nowrap",
            display: "flex"
          },
          children: [
            /* @__PURE__ */ a("div", { ref: o, children: e }),
            /* @__PURE__ */ a("div", { ref: s, children: e })
          ]
        }
      )
    }
  );
}, x = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (e) => e === `
` || e === "###br###",
  isSpecificBreak: (e) => e.match(/###br\.(.*?)###/),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, pt = (e) => y(
  () => e.split(x.regex).map((t, n) => x.isRegularBreak(t) ? /* @__PURE__ */ a("br", {}, n) : x.isSpecificBreak(t) ? /* @__PURE__ */ a(
    "br",
    {
      className: x.getClassName(t)
    },
    n
  ) : t),
  [e]
), Pt = ({
  text: e
}) => {
  const t = pt(e);
  return /* @__PURE__ */ a(E, { children: t });
}, D = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ a("span", { ...e, children: /* @__PURE__ */ a("span", { ...t }) }) : /* @__PURE__ */ a("span", { ...t }), Mt = ({
  type: e = "chars",
  text: t,
  exception: n,
  containerProps: r,
  ...i
}) => {
  const o = e === "chars" ? "" : " ";
  return y(
    () => t.split(x.regex).flatMap((c, u) => x.isRegularBreak(c) ? [null, /* @__PURE__ */ a("br", {}, u)] : x.isSpecificBreak(c) ? [
      null,
      /* @__PURE__ */ a(
        "br",
        {
          className: x.getClassName(c)
        },
        u
      )
    ] : [
      ...c.split(o).map((f, l) => {
        if (n) {
          const d = n.find(
            (h) => h.selector === f
          );
          if (d)
            return /* @__PURE__ */ a(
              D,
              {
                containerProps: r,
                ...i,
                ...d.attributes,
                children: f
              },
              `${u}-${l}`
            );
        }
        return /* @__PURE__ */ a(
          D,
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
}, mt = $((e, t) => {
  const { fill: n, style: r, ...i } = e;
  return /* @__PURE__ */ a(
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
mt.displayName = "Video";
const bt = $(
  ({
    loader: e = "skeleton",
    delay: t = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: s,
    ...c
  }, u) => {
    const [f, l] = w(t === 0), d = !!o;
    return b(() => {
      t !== 0 && setTimeout(() => l(!0), t);
    }, [t]), /* @__PURE__ */ a(
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
          ...s
        },
        ...c,
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
              e === "skeleton" ? /* @__PURE__ */ a(
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
              ) : e === "circular" ? /* @__PURE__ */ a(
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
              ) : e,
              d && /* @__PURE__ */ a("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
bt.displayName = "Loader";
const q = I(
  void 0
), _t = () => R(q), Bt = ({
  active: e = !0,
  style: t,
  ...n
}) => {
  const r = g(null), { isMobile: i } = Ct(), o = e && i, [s, c] = w(
    void 0
  );
  return A(() => {
    o && r.current ? c(r.current) : c(void 0);
  }, [o]), /* @__PURE__ */ a(q.Provider, { value: s, children: /* @__PURE__ */ a(
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
  const r = g(0), i = g(0), o = S(() => {
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
}, wt = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, vt = (e) => {
  let t = wt;
  typeof e == "string" && (t += e), console.log(t);
}, St = (e) => {
  const t = document.querySelector('meta[name="viewport"]');
  if (!t)
    return;
  const n = e > 360 ? "width=device-width,initial-scale=1" : "width=360";
  t.getAttribute("content") !== n && t.setAttribute("content", n);
}, Dt = ({
  isFixViewportForSmall: e = !0,
  areYouFun: t = !1
} = {}) => {
  const n = S(
    (r) => {
      e && St(r);
    },
    [e]
  );
  L({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), b(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), t && process.env.NODE_ENV !== "development" && vt(t);
  }, [t, n]);
}, Ot = () => {
  const [e, t] = w(null), n = S(() => {
    const r = window.ontouchstart, i = navigator.maxTouchPoints;
    r !== void 0 && 0 < i ? t(!0) : t(!1);
  }, []);
  return L({
    onResize: () => n(),
    debounce: 100,
    dependencies: []
  }), b(() => n(), [n]), e;
}, Wt = (e, t) => {
  const [n, r] = w(null), i = S(
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
}, Ft = ({
  shareUrl: e,
  sharePath: t,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = y(() => encodeURIComponent(e), [e]), s = y(
    () => `height=${i},width=${r}`,
    [i, r]
  ), c = y(
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
  ), u = y(
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
  ), f = y(
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
  ), l = y(
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
  ), [d, h] = w(!1), m = y(
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
    share: l,
    copy: m,
    isCopied: d
  };
}, yt = (e) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(e))
    return "iOS";
  if (/\bAndroid\b/i.test(e))
    return "Android";
}, xt = (e) => {
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
}, Ct = (e) => {
  const [t, n] = w({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return A(() => {
    const r = navigator.userAgent, i = yt(r), o = xt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: e && e(r)
    });
  }, []), t;
}, Nt = (e) => {
  const [t, n] = w(!1), r = g();
  V(() => {
    t && r.current && e(r.current);
  });
  const i = S((c) => {
    r.current = c, n(!0);
  }, []), o = S(() => {
    r.current = void 0, n(!1);
  }, []), s = S((c) => {
    r.current = c;
  }, []);
  return {
    onPointerEnter: i,
    onPointerLeave: o,
    onPointerMove: s
  };
}, Ht = (e) => {
  const [t, n] = w();
  return b(() => {
    e && e.current && n(e.current);
  }, [e]), t;
}, O = (e, t) => !!(e != null && e.includes(t)), zt = (e, {
  reactive: t = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = w(!1), [o, s] = w(!1), c = g(), u = g(null), f = S(
    (l, d = 4, h = 1e-3) => {
      if (!c.current)
        return 0;
      d = Math.max(d, 0);
      const { progress: m } = c.current;
      u.current === null && (u.current = m), u.current = T.utils.interpolate(u.current, m, l);
      const p = Math.pow(10, d);
      return u.current = Math.round(u.current * p) / p, u.current < h ? 0 : 1 - u.current < h ? 1 : u.current;
    },
    []
  );
  return A(() => {
    const { onUpdate: l, onToggle: d, trigger: h, ...m } = e;
    if (!h)
      return;
    T.registerPlugin(P);
    const p = P.create({
      ...m,
      trigger: h,
      onToggle: (C) => {
        d == null || d(C), O(t, "isActive") && i(C.isActive);
      },
      onUpdate: (C) => {
        c.current = C, l == null || l(C), O(t, "direction") && s(C.direction);
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
  kt as Accordion,
  Lt as AutoScrollContainer,
  Pt as CustomBreakLineParser,
  x as CustomBreakLineUtils,
  Rt as FormField,
  bt as Loader,
  M as MODAL_CLASSNAME,
  nt as ModalButton,
  Mt as SplitText,
  Bt as StableScroller,
  $t as Tab,
  mt as Video,
  Ct as useDeviceDetector,
  V as useFrame,
  gt as useIntersectionObserver,
  Ot as useIsTouchDevice,
  A as useIsomorphicLayoutEffect,
  Wt as useMediaQuery,
  Nt as useOnHovering,
  pt as useParseBreakLine,
  ht as useResizeObserver,
  zt as useScrollTrigger,
  Ft as useShare,
  _t as useStableScroller,
  Dt as useStarter,
  Ht as useValidElement,
  L as useWindowResizeObserver
};
//# sourceMappingURL=spice.js.map
