"use client";
import { jsx as u, jsxs as y, Fragment as O } from "react/jsx-runtime";
import { forwardRef as k, useRef as p, useCallback as E, useEffect as b, createContext as T, useState as m, useContext as A, useLayoutEffect as j, useMemo as M, Fragment as tt } from "react";
import S from "gsap";
import L from "gsap/ScrollTrigger";
const et = ({ formProps: t }) => {
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
}, nt = ({ formProps: t }) => {
  const { isSelect: e, style: n, ...r } = t;
  if (!e)
    return null;
  const { defaultSelectedIndex: i, options: o } = e;
  return /* @__PURE__ */ u(
    "select",
    {
      ...r,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: i && o[i],
      children: o.map((s, c) => /* @__PURE__ */ u("option", { value: s, children: s }, c))
    }
  );
}, rt = {
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
}, it = ({
  layoutType: t,
  formPropsArr: e,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (t === "block")
    return /* @__PURE__ */ y(O, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ u(r, { formProps: e[0] }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  if (t === "flex")
    return /* @__PURE__ */ y(O, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ y("ul", { children: [
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[0] }),
          /* @__PURE__ */ u(o, { index: 0 })
        ] }),
        /* @__PURE__ */ y("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[1] }),
          /* @__PURE__ */ u(o, { index: 1 })
        ] })
      ] })
    ] });
  if (t === "radio-check") {
    const s = e.map(
      ({ id: c, value: a, style: h, optionLabel: d, ...l }) => /* @__PURE__ */ y("li", { children: [
        /* @__PURE__ */ u(
          r,
          {
            formProps: {
              id: c,
              value: a,
              style: {
                ...rt,
                ...h || {}
              },
              ...l
            }
          }
        ),
        /* @__PURE__ */ u("label", { htmlFor: c, children: d || a })
      ] }, c)
    );
    return /* @__PURE__ */ y(O, { children: [
      n && /* @__PURE__ */ u("label", { children: n }),
      /* @__PURE__ */ u("ul", { children: s }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  }
}, ot = ({ formProps: t }) => {
  const { isTextarea: e, ...n } = t;
  return e ? /* @__PURE__ */ u("textarea", { ...n, ...e }) : null;
}, qt = ({
  label: t,
  formProps: e,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: o, isSelect: s, isTextarea: c } = i[0], a = i.length;
  if (!(o === "radio" || o === "checkbox") && a > 2)
    throw new Error("The length of formProps is up to 2.");
  const h = ["radio", "checkbox"].includes(o || "") ? "radio-check" : a === 1 ? "block" : "flex";
  return /* @__PURE__ */ u("fieldset", { ...r, children: /* @__PURE__ */ u(
    it,
    {
      layoutType: h,
      formPropsArr: i,
      label: t,
      errors: n,
      FormItem: s ? nt : c ? ot : et
    }
  ) });
}, H = (t) => new Promise((e) => {
  t instanceof Promise ? t.then(() => {
    e(null);
  }) : e(null);
}), st = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, _ = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, F = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, ct = () => window.innerWidth - document.documentElement.clientWidth, D = (t, { paddingRight: e, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = t ? e + n : e - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = t ? "auto" : "", i.overflow = t ? "hidden" : "";
}, at = k(
  ({ dialog: t, onOpen: e, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, s) => {
    const c = p(null), a = p({
      paddingRight: 0,
      scrollbarWidth: 0
    }), h = E(() => {
      var l, f, w;
      i && (a.current.paddingRight = F(), a.current.scrollbarWidth = ct(), D(!0, a.current)), c.current.showModal(), (l = r == null ? void 0 : r.current) == null || l.focus(), (w = (f = c.current) == null ? void 0 : f.getElementsByClassName(_.scrollArea)[0]) == null || w.scrollTo(0, 0), e == null || e(c.current);
    }, [e, r, i]), d = E(async () => {
      n && await H(n(c.current)), i && (a.current.paddingRight = F(), D(!1, a.current)), c.current.close();
    }, [n, i]);
    return b(() => {
      const l = c.current.querySelectorAll(
        `.${_.close}`
      );
      if (l)
        return l.forEach(
          (f) => f.addEventListener("click", d)
        ), () => l.forEach(
          (f) => f.removeEventListener("click", d)
        );
    }, [d]), b(() => {
      const l = (f) => {
        var g;
        ((g = c.current) == null ? void 0 : g.hasAttribute("open")) && f.key === "Escape" && d();
      };
      return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
    }, [d]), /* @__PURE__ */ y(O, { children: [
      /* @__PURE__ */ u(
        "button",
        {
          ref: s,
          ...o,
          onClick: (l) => {
            var f;
            h(), (f = o == null ? void 0 : o.onClick) == null || f.call(o, l);
          }
        }
      ),
      /* @__PURE__ */ u(
        "dialog",
        {
          ref: c,
          ...t,
          onClick: (l) => {
            var f;
            l.target === c.current && d(), (f = t.onClick) == null || f.call(t, l);
          },
          style: {
            ...st,
            ...t.style || {}
          }
        }
      )
    ] });
  }
);
at.displayName = "ModalButton";
const ut = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, Q = T(ut), z = T(
  () => {
  }
), lt = ({ children: t, defaultValue: e }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const [n, r] = m({
    isLeaving: !1,
    isAnimation: !0,
    prev: "",
    current: e,
    next: ""
  });
  return /* @__PURE__ */ u(Q.Provider, { value: n, children: /* @__PURE__ */ u(z.Provider, { value: r, children: t }) });
}, G = () => A(Q), B = () => A(z), dt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = B(), i = G(), o = E(() => {
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
}, q = ({ content: t, isOpen: e }) => {
  const n = t.querySelectorAll("a,button");
  if (!n)
    return;
  const r = e ? "0" : "-1";
  n.forEach((i) => {
    i.setAttribute("tabindex", r);
  });
}, ht = ({
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
  const c = p(!0), a = p(null), h = B(), d = G(), l = d.current === e && !d.isLeaving;
  return b(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    if (!d.isAnimation) {
      l && i && i(a.current);
      return;
    }
    d.prev === e && (async () => (r && await H(r(a.current)), h((f) => ({
      ...f,
      isLeaving: !1,
      prev: "",
      current: f.next,
      next: ""
    }))))(), l && n && n(a.current);
  }, [d, h, n, r, i, e, l]), b(() => {
    q({
      content: a.current,
      isOpen: d.current === e
    });
  }, [d, e]), /* @__PURE__ */ u(
    "div",
    {
      ref: a,
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
}, ft = () => {
  const t = B();
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
  Button: dt,
  Content: ht,
  Context: lt,
  useTabSwitch: ft
}, Symbol.toStringTag, { value: "Module" })), pt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, X = T(pt), K = T(() => {
}), gt = ({ children: t, defaultValue: e = [] }) => {
  const [n, r] = m({
    target: "",
    toggle: !1,
    defaultValue: e
  });
  return /* @__PURE__ */ u(X.Provider, { value: n, children: /* @__PURE__ */ u(K.Provider, { value: r, children: t }) });
}, V = () => A(X), mt = () => A(K), wt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = V(), i = mt(), [o, s] = m(
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
}, v = typeof window < "u" ? j : b, bt = ({ target: t, onResize: e, debounce: n = 100 } = {}, r) => {
  const i = p(null), o = p(0), s = p(!0);
  return v(() => {
    const c = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? i.current;
    if (!c)
      return;
    const a = new ResizeObserver((h) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        e == null || e(h[0].target);
      }, n);
    });
    return a.observe(c), () => {
      a.unobserve(c), clearTimeout(o.current);
    };
  }, r), i;
}, vt = ({
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
  const o = V(), [s, c] = m(
    () => !!o.defaultValue.find((f) => f === t)
  ), a = p(s);
  b(() => {
    o.target === t && c(!s);
  }, [o.target, o.toggle]);
  const h = p(!0), d = p(null), l = p(null);
  return b(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const f = {
      height: l.current.getBoundingClientRect().height,
      target: d.current
    };
    s ? e(f) : n(f);
  }, [s, e, n]), b(() => {
    q({ content: d.current, isOpen: s });
  }, [s]), bt(
    {
      target: l,
      onResize: (f) => {
        const w = f.getBoundingClientRect().height;
        s && (d.current.style.height = `${w}px`);
      },
      debounce: 100
    },
    [s]
  ), /* @__PURE__ */ u(
    "div",
    {
      ref: d,
      style: {
        overflowY: "clip",
        height: a.current ? "auto" : "0px"
      },
      id: `content-${t}`,
      "aria-labelledby": `button-${t}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ u("div", { ref: l, ...i, children: r })
    }
  );
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: wt,
  Content: vt,
  Context: gt
}, Symbol.toStringTag, { value: "Module" })), U = ({
  target: t,
  options: e,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const s = p(null), [c, a] = m(!1);
  return v(() => {
    const h = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? s.current;
    if (!h)
      return;
    const d = (f, w) => {
      f.forEach((g) => {
        a(g.isIntersecting), g.isIntersecting ? (r && r(g), n && w.unobserve(g.target)) : g.isIntersecting || i && i(g);
      });
    }, l = new IntersectionObserver(d, e);
    return l.observe(h), () => {
      l.unobserve(h);
    };
  }, o), { ref: s, isIntersecting: c };
};
function yt(t) {
  const e = p(t);
  return v(() => void (e.current = t), [t]), e;
}
const P = (t, e, n) => {
  const r = yt(t);
  v(() => {
    const i = (...o) => r.current(...o);
    return S.ticker.add(i, e, n), () => S.ticker.remove(i);
  }, [e, n]);
}, Y = k(
  ({ active: t = !1, speed: e = 1, children: n, ...r }, i) => {
    const o = p(null), s = p(null), c = p(0), a = p(0);
    return j(() => {
      const h = () => {
        s.current && (a.current = s.current.clientWidth / 2);
      };
      return h(), window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
    }, []), P(() => {
      if (!t)
        return;
      const h = s.current;
      if (!h || a.current === 0)
        return;
      const d = S.ticker.deltaRatio() / 1e3, l = typeof e == "number" ? e : (e == null ? void 0 : e.current) ?? 1;
      c.current += d * l * a.current, c.current = (c.current % a.current + a.current) % a.current, h.style.transform = `translateX(${-c.current}px)`;
    }), /* @__PURE__ */ u("div", { ref: i, ...r, children: /* @__PURE__ */ u(
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
            ref: s,
            style: {
              display: "flex",
              width: "fit-content",
              willChange: "transform"
            },
            children: [
              n,
              n
            ]
          }
        )
      }
    ) });
  }
);
Y.displayName = "InfinityLoop";
const Vt = (t) => {
  const { isIntersecting: e, ref: n } = U({
    once: !1
  });
  return /* @__PURE__ */ u(Y, { ref: n, ...t, active: e });
}, St = /(\n|###br\.[^#]+###|###br###)/, Mt = [`
`, "###br###"], Et = /###br\.(.*?)###/, I = {
  regex: St,
  isRegularBreak: (t) => Mt.includes(t),
  isSpecificBreak: (t) => Et.test(t),
  getClassName: (t) => {
    var e;
    return ((e = t.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, Ut = ({
  children: t
}) => {
  const e = M(() => t ? t.split(I.regex).map((n, r) => I.isRegularBreak(n) ? /* @__PURE__ */ u("br", {}, r) : I.isSpecificBreak(n) ? /* @__PURE__ */ u(
    "br",
    {
      className: I.getClassName(n)
    },
    r
  ) : /* @__PURE__ */ u(tt, { children: n }, r)) : null, [t]);
  return /* @__PURE__ */ u(O, { children: e });
}, It = ({
  containerProps: t,
  ...e
}) => t ? /* @__PURE__ */ u("span", { ...t, children: /* @__PURE__ */ u("span", { ...e }) }) : /* @__PURE__ */ u("span", { ...e }), Ct = (t, e) => {
  var n;
  return (n = t == null ? void 0 : t.find((r) => r.selector === e)) == null ? void 0 : n.attributes;
}, $ = (t, e, n, r, i) => /* @__PURE__ */ u(
  It,
  {
    containerProps: n,
    ...r,
    ...i,
    children: t === " " ? " " : t
  },
  e
), Ot = (t, e, { type: n, exception: r, containerProps: i, rest: o }) => {
  if (I.isRegularBreak(t))
    return [null, /* @__PURE__ */ u("br", {}, e)];
  if (I.isSpecificBreak(t))
    return [
      null,
      /* @__PURE__ */ u(
        "br",
        {
          className: I.getClassName(t)
        },
        e
      )
    ];
  switch (n) {
    case "lines":
      return [$(t, `l-${e}`, i, o), null];
    case "words":
    case "chars": {
      const s = n === "words", c = s ? t.split(" ") : Array.from(t);
      return [...c.flatMap((h, d) => {
        const l = [];
        return l.push(
          $(
            h,
            `l${e}-p${d}`,
            i,
            o,
            Ct(r, h)
          )
        ), s && d !== c.length - 1 && l.push(
          $(
            " ",
            `l${e}-p${d}-space`,
            i,
            o
          )
        ), l;
      }), null];
    }
    default:
      return [];
  }
}, Yt = ({
  type: t = "chars",
  children: e,
  exception: n,
  containerProps: r,
  ...i
}) => M(() => e.split(I.regex).flatMap(
  (s, c) => Ot(s, c, {
    type: t,
    exception: n,
    containerProps: r,
    rest: i
  })
), [e, t, n, r, i]), Tt = k((t, e) => {
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
Tt.displayName = "Video";
const At = k(
  ({
    loader: t = "skeleton",
    delay: e = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: s,
    ...c
  }, a) => {
    const [h, d] = m(e === 0), l = !!o;
    return b(() => {
      e !== 0 && setTimeout(() => d(!0), e);
    }, [e]), /* @__PURE__ */ u(
      "div",
      {
        ref: a,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...l ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...s
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
              ...h ? {
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
              l && /* @__PURE__ */ u("div", { style: { visibility: "hidden" }, children: o })
            ]
          }
        )
      }
    );
  }
);
At.displayName = "Loader";
const Rt = (t) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(t))
    return "iOS";
  if (/\bAndroid\b/i.test(t))
    return "Android";
}, kt = (t) => {
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
}, $t = (t) => {
  const [e, n] = m({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return v(() => {
    const r = navigator.userAgent, i = Rt(r), o = kt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: t && t(r)
    });
  }, []), e;
}, J = T(
  void 0
), Jt = () => A(J), Zt = ({
  style: t,
  ...e
}) => {
  const { isMobile: n } = $t(), r = p(null), [i, o] = m(
    void 0
  );
  return v(() => {
    n && r.current ? o(r.current) : o(void 0);
  }, [n]), /* @__PURE__ */ u(J.Provider, { value: i, children: /* @__PURE__ */ u(
    "div",
    {
      ref: r,
      style: {
        ...n ? {
          height: "100svh",
          overflowY: "auto"
        } : {},
        ...t
      },
      ...e
    }
  ) });
}, Z = ({
  onResize: t,
  debounce: e = 100,
  dependencies: n = []
}) => {
  const r = p(0), i = p(0), o = E(() => {
    clearTimeout(i.current), i.current = setTimeout(() => {
      t({
        winW: window.innerWidth,
        winH: window.innerHeight,
        initWinW: r.current
      });
    }, e);
  }, [t, e]);
  v(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, Lt = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, Bt = (t) => {
  let e = Lt;
  typeof t == "string" && (e += t), console.log(e);
}, Pt = (t) => {
  const e = document.querySelector('meta[name="viewport"]');
  if (!e)
    return;
  const n = t > 360 ? "width=device-width,initial-scale=1" : "width=360";
  e.getAttribute("content") !== n && e.setAttribute("content", n);
}, xt = ({
  fixViewport: t = !0,
  areYouFun: e = !1
} = {}) => {
  const n = E(
    (r) => {
      t && Pt(r);
    },
    [t]
  );
  return Z({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), b(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), e && process.env.NODE_ENV !== "development" && Bt(e);
  }, [e, n]), null;
}, _t = (t, e) => {
  if (typeof t == "number")
    return t * e;
  const n = S.utils.getUnit(t) || "";
  return (parseFloat(t) || 0) * e + n;
}, Ft = ({
  y: t = "8%",
  scroller: e,
  scrub: n = 1,
  ...r
}) => {
  const i = p(null), o = p(S.context(() => {
  }));
  return v(() => (S.registerPlugin(L), o.current.add(() => {
    S.fromTo(
      i.current,
      { y: t },
      {
        y: _t(t, -1),
        scrollTrigger: {
          trigger: i.current,
          scroller: e,
          start: "top bottom",
          end: "bottom top",
          scrub: n
        }
      }
    );
  }), () => o.current.revert()), [e]), /* @__PURE__ */ u("div", { ref: i, ...r });
}, Dt = (t) => typeof t == "number" ? t : parseFloat(t) || 0, te = ({
  children: t,
  style: e,
  y: n = "8%",
  scroller: r,
  scrub: i = 1,
  ...o
}) => /* @__PURE__ */ u(
  "div",
  {
    ...o,
    style: {
      overflow: "hidden",
      ...e
    },
    children: /* @__PURE__ */ u(
      Ft,
      {
        y: n,
        scroller: r,
        scrub: i,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          scale: 1 + Dt(n) * 0.02
          // 1 + scale * 2 / 100
        },
        children: t
      }
    )
  }
), ee = ({
  speed: t = 1,
  range: e = "100px",
  ease: n = (i) => i,
  ...r
}) => {
  const { ref: i, isIntersecting: o } = U(), s = typeof e == "string" && S.utils.getUnit(e) || "px", c = parseFloat(e.toString()) || 0;
  return P((a) => {
    if (!o)
      return;
    const h = (n((Math.sin(a * t) + 1) / 2) * 2 - 1) * c;
    i.current.style.transform = `translateY(${h}${s})`;
  }), /* @__PURE__ */ u("div", { ref: i, ...r });
}, Wt = (t, e) => {
  const [n, r] = m(null), i = E(
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
  return Z({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), v(
    () => i(window.innerWidth),
    [i]
  ), n;
}, ne = ({
  mediaQueryType: t,
  breakpoint: e,
  children: n,
  fallback: r
}) => Wt(t, e) ? n : r ?? null, re = () => {
  const [t, e] = m(null);
  return v(() => {
    e(
      window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints
    );
  }, []), t;
}, ie = ({
  shareUrl: t,
  sharePath: e,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = M(() => encodeURIComponent(t), [t]), s = M(
    () => `height=${i},width=${r}`,
    [i, r]
  ), c = M(
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
  ), a = M(
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
  ), h = M(
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
  ), [l, f] = m(!1), w = M(
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
    Facebook: c,
    X: a,
    LINE: h,
    share: d,
    copy: w,
    isCopied: l
  };
}, oe = (t, e) => {
  const [n, r] = m(!1), i = p();
  P(() => {
    n && i.current && t(i.current);
  });
  const o = E(() => {
    i.current = void 0, r(!1);
  }, []), s = E(
    (c) => {
      n || (r(!0), e == null || e(c)), i.current = c;
    },
    [n, e]
  );
  return {
    onPointerLeave: o,
    onPointerMove: s
  };
}, se = (t) => {
  const [e, n] = m();
  return b(() => {
    t && t.current && n(t.current);
  }, [t]), e;
}, W = (t, e) => !!(t != null && t.includes(e)), ce = (t, {
  reactive: e = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = m(!1), [o, s] = m(!1), c = p(), a = p(null), h = E(
    (d, l = 4, f = 1e-3) => {
      if (!c.current)
        return 0;
      l = Math.max(l, 0);
      const { progress: w } = c.current;
      a.current === null && (a.current = w), a.current = S.utils.interpolate(a.current, w, d);
      const g = Math.pow(10, l);
      return a.current = Math.round(a.current * g) / g, a.current < f ? 0 : 1 - a.current < f ? 1 : a.current;
    },
    []
  );
  return v(() => {
    const { onUpdate: d, onToggle: l, trigger: f, ...w } = t;
    if (!f)
      return;
    S.registerPlugin(L);
    const g = L.create({
      ...w,
      trigger: f,
      onToggle: (C) => {
        l == null || l(C), W(e, "isActive") && i(C.isActive);
      },
      onUpdate: (C) => {
        c.current = C, d == null || d(C), W(e, "direction") && s(C.direction);
      }
    });
    return () => g.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: h,
    scrollTrigger: c
  };
}, x = (t, e) => {
  if (e < t)
    throw Error(
      `End number must be higher then start number: start ${t}, end ${t}`
    );
  const n = e - t + 1;
  return Array(n).fill(0).map((r, i) => i + t);
}, N = (t, e, n) => Math.min(Math.max(t, e), n), Nt = (t, e) => x(1, Math.ceil(t / e)), jt = (t, e, n, r = 5, i = "...") => {
  if (e = Math.ceil(e / n), e < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  t < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), t = 1), t > e && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    e
  ), t = e), r % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), r += 1), r < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), r = 5);
  const o = (r - 1) / 2, s = e > r, c = {
    start: N(
      t - o,
      1,
      s ? e - r + 1 : 1
    ),
    end: N(t + o, r, e)
  }, a = x(c.start, c.end);
  return s && a[0] !== 1 && (a[0] = 1, a[1] = i), s && a[a.length - 1] !== e && (a[a.length - 1] = e, a[a.length - 2] = i), a;
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
}), ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: R,
  getPageRange: Nt,
  getPaginationRange: jt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Kt as Accordion,
  Ut as CustomBreakLineParser,
  I as CustomBreakLineUtils,
  ee as Float,
  qt as FormField,
  Y as InfinityLoop,
  Vt as InfinityLoopOnView,
  At as Loader,
  _ as MODAL_CLASSNAME,
  ne as MediaQuery,
  at as ModalButton,
  Ft as Parallax,
  te as ParallaxThumbnail,
  xt as SpiceStarter,
  Yt as SplitText,
  Zt as StableScroller,
  Xt as Tab,
  Tt as Video,
  $t as useDeviceDetector,
  P as useFrame,
  U as useIntersectionObserver,
  re as useIsTouchDevice,
  v as useIsomorphicLayoutEffect,
  Wt as useMediaQuery,
  oe as useOnHovering,
  bt as useResizeObserver,
  ce as useScrollTrigger,
  ie as useShare,
  Jt as useStableScroller,
  se as useValidElement,
  Z as useWindowResizeObserver,
  ae as utils
};
//# sourceMappingURL=spice.js.map
