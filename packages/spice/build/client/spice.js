"use client";
import { jsx as u, jsxs as b, Fragment as T } from "react/jsx-runtime";
import { forwardRef as B, useRef as p, useCallback as I, useEffect as v, createContext as A, useState as w, useContext as C, useLayoutEffect as Q, useMemo as M, Fragment as rt } from "react";
import S from "gsap";
import L from "gsap/ScrollTrigger";
const it = ({ formProps: t }) => {
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
}, ot = ({ formProps: t }) => {
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
      children: o.map((s, a) => /* @__PURE__ */ u("option", { value: s, children: s }, a))
    }
  );
}, st = {
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
}, ct = ({
  layoutType: t,
  formPropsArr: e,
  label: n,
  FormItem: r,
  errors: i
}) => {
  const o = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (t === "block")
    return /* @__PURE__ */ b(T, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ u(r, { formProps: e[0] }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  if (t === "flex")
    return /* @__PURE__ */ b(T, { children: [
      n && /* @__PURE__ */ u("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ b("ul", { children: [
        /* @__PURE__ */ b("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[0] }),
          /* @__PURE__ */ u(o, { index: 0 })
        ] }),
        /* @__PURE__ */ b("li", { children: [
          /* @__PURE__ */ u(r, { formProps: e[1] }),
          /* @__PURE__ */ u(o, { index: 1 })
        ] })
      ] })
    ] });
  if (t === "radio-check") {
    const s = e.map(
      ({ id: a, value: c, style: d, optionLabel: h, ...l }) => /* @__PURE__ */ b("li", { style: { position: "relative" }, children: [
        /* @__PURE__ */ u(
          r,
          {
            formProps: {
              id: a,
              value: c,
              style: {
                ...st,
                ...d || {}
              },
              ...l
            }
          }
        ),
        /* @__PURE__ */ u("label", { htmlFor: a, children: h || c })
      ] }, a)
    );
    return /* @__PURE__ */ b(T, { children: [
      n && /* @__PURE__ */ u("label", { children: n }),
      /* @__PURE__ */ u("ul", { children: s }),
      /* @__PURE__ */ u(o, { index: 0 })
    ] });
  }
}, at = ({ formProps: t }) => {
  const { isTextarea: e, ...n } = t;
  return e ? /* @__PURE__ */ u("textarea", { ...n, ...e }) : null;
}, Vt = ({
  label: t,
  formProps: e,
  errors: n,
  ...r
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: o, isSelect: s, isTextarea: a } = i[0], c = i.length;
  if (!(o === "radio" || o === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  const d = ["radio", "checkbox"].includes(o || "") ? "radio-check" : c === 1 ? "block" : "flex";
  return /* @__PURE__ */ u("fieldset", { ...r, children: /* @__PURE__ */ u(
    ct,
    {
      layoutType: d,
      formPropsArr: i,
      label: t,
      errors: n,
      FormItem: s ? ot : a ? at : it
    }
  ) });
}, z = (t) => new Promise((e) => {
  t instanceof Promise ? t.then(() => {
    e(null);
  }) : e(null);
}), ut = {
  border: "none",
  background: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  padding: "0",
  pointerEvents: "auto"
}, F = {
  close: "spice__modal_close",
  scrollArea: "js_modal_scroll_area"
}, D = () => parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0, lt = () => window.innerWidth - document.documentElement.clientWidth, W = (t, { paddingRight: e, scrollbarWidth: n }) => {
  const r = document.documentElement.style, i = document.body.style, o = t ? e + n : e - n;
  r.paddingRight = `${o}px`, r.scrollbarGutter = t ? "auto" : "", i.overflow = t ? "hidden" : "";
}, dt = B(
  ({ dialog: t, onOpen: e, onClose: n, focusTarget: r, scrollLock: i = !0, ...o }, s) => {
    const a = p(null), c = p({
      paddingRight: 0,
      scrollbarWidth: 0
    }), d = I(() => {
      var l, f, g;
      i && (c.current.paddingRight = D(), c.current.scrollbarWidth = lt(), W(!0, c.current)), a.current.showModal(), (l = r == null ? void 0 : r.current) == null || l.focus(), (g = (f = a.current) == null ? void 0 : f.getElementsByClassName(F.scrollArea)[0]) == null || g.scrollTo(0, 0), e == null || e(a.current);
    }, [e, r, i]), h = I(async () => {
      n && await z(n(a.current)), i && (c.current.paddingRight = D(), W(!1, c.current)), a.current.close();
    }, [n, i]);
    return v(() => {
      const l = a.current.querySelectorAll(
        `.${F.close}`
      );
      if (l)
        return l.forEach(
          (f) => f.addEventListener("click", h)
        ), () => l.forEach(
          (f) => f.removeEventListener("click", h)
        );
    }, [h]), v(() => {
      const l = (f) => {
        var m;
        ((m = a.current) == null ? void 0 : m.hasAttribute("open")) && f.key === "Escape" && h();
      };
      return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
    }, [h]), /* @__PURE__ */ b(T, { children: [
      /* @__PURE__ */ u(
        "button",
        {
          ref: s,
          ...o,
          onClick: (l) => {
            var f;
            d(), (f = o == null ? void 0 : o.onClick) == null || f.call(o, l);
          }
        }
      ),
      /* @__PURE__ */ u(
        "dialog",
        {
          ref: a,
          ...t,
          onClick: (l) => {
            var f;
            l.target === a.current && h(), (f = t.onClick) == null || f.call(t, l);
          },
          style: {
            ...ut,
            ...t.style || {}
          }
        }
      )
    ] });
  }
);
dt.displayName = "ModalButton";
const ht = {
  isLeaving: !1,
  isAnimation: !0,
  prev: "",
  current: "",
  next: ""
}, G = A(ht), q = A(
  () => {
  }
), ft = ({ children: t, defaultValue: e }) => {
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
  return /* @__PURE__ */ u(G.Provider, { value: n, children: /* @__PURE__ */ u(q.Provider, { value: r, children: t }) });
}, X = () => C(G), _ = () => C(q), pt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = _(), i = X(), o = I(() => {
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
}, gt = ({
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
  const a = p(!0), c = p(null), d = _(), h = X(), l = h.current === e && !h.isLeaving;
  return v(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    if (!h.isAnimation) {
      l && i && i(c.current);
      return;
    }
    h.prev === e && (async () => (r && await z(r(c.current)), d((f) => ({
      ...f,
      isLeaving: !1,
      prev: "",
      current: f.next,
      next: ""
    }))))(), l && n && n(c.current);
  }, [h, d, n, r, i, e, l]), v(() => {
    K({
      content: c.current,
      isOpen: h.current === e
    });
  }, [h, e]), /* @__PURE__ */ u(
    "div",
    {
      ref: c,
      style: {
        ...h.current !== e ? {
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
      "aria-hidden": h.current !== e,
      ...s,
      children: t
    }
  );
}, mt = () => {
  const t = _();
  return (e, n) => {
    t((r) => ({
      isAnimation: n,
      isLeaving: n,
      prev: n ? r.current : "",
      current: n ? r.current : e,
      next: n ? e : ""
    }));
  };
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: pt,
  Content: gt,
  Context: ft,
  useTabSwitch: mt
}, Symbol.toStringTag, { value: "Module" })), wt = {
  target: "",
  toggle: !1,
  defaultValue: []
}, V = A(wt), U = A(() => {
}), bt = ({ children: t, defaultValue: e = [] }) => {
  const [n, r] = w({
    target: "",
    toggle: !1,
    defaultValue: e
  });
  return /* @__PURE__ */ u(V.Provider, { value: n, children: /* @__PURE__ */ u(U.Provider, { value: r, children: t }) });
}, Y = () => C(V), vt = () => C(U), yt = ({ children: t, value: e, ...n }) => {
  if (e === "")
    throw new Error(
      "Please set the value to something other than an empty string."
    );
  const r = Y(), i = vt(), [o, s] = w(
    () => !!r.defaultValue.find((a) => a === e)
  );
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: () => {
        i((a) => ({
          ...a,
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
}, y = typeof window < "u" ? Q : v, Et = ({ target: t, onResize: e, debounce: n = 100 } = {}, r) => {
  const i = p(null), o = p(0), s = p(!0);
  return y(() => {
    const a = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? i.current;
    if (!a)
      return;
    const c = new ResizeObserver((d) => {
      clearTimeout(o.current), o.current = setTimeout(() => {
        if (s.current) {
          s.current = !1;
          return;
        }
        e == null || e(d[0].target);
      }, n);
    });
    return c.observe(a), () => {
      c.unobserve(a), clearTimeout(o.current);
    };
  }, r), i;
}, St = ({
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
  const o = Y(), [s, a] = w(
    () => !!o.defaultValue.find((f) => f === t)
  ), c = p(s);
  v(() => {
    o.target === t && a(!s);
  }, [o.target, o.toggle]);
  const d = p(!0), h = p(null), l = p(null);
  return v(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const f = {
      height: l.current.getBoundingClientRect().height,
      target: h.current
    };
    s ? e(f) : n(f);
  }, [s, e, n]), v(() => {
    K({ content: h.current, isOpen: s });
  }, [s]), Et(
    {
      target: l,
      onResize: (f) => {
        const g = f.getBoundingClientRect().height;
        s && (h.current.style.height = `${g}px`);
      },
      debounce: 100
    },
    [s]
  ), /* @__PURE__ */ u(
    "div",
    {
      ref: h,
      style: {
        overflowY: "clip",
        height: c.current ? "auto" : "0px"
      },
      id: `content-${t}`,
      "aria-labelledby": `button-${t}`,
      "aria-hidden": !s,
      children: /* @__PURE__ */ u("div", { ref: l, ...i, children: r })
    }
  );
}, Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: yt,
  Content: St,
  Context: bt
}, Symbol.toStringTag, { value: "Module" })), J = ({
  target: t,
  options: e,
  once: n = !1,
  onEnter: r,
  onLeave: i
} = {}, o) => {
  const s = p(null), [a, c] = w(!1);
  return y(() => {
    const d = t instanceof Element ? t : (t == null ? void 0 : t.current) ?? s.current;
    if (!d)
      return;
    const h = (f, g) => {
      f.forEach((m) => {
        c(m.isIntersecting), m.isIntersecting ? (r && r(m), n && g.unobserve(m.target)) : m.isIntersecting || i && i(m);
      });
    }, l = new IntersectionObserver(h, e);
    return l.observe(d), () => {
      l.unobserve(d);
    };
  }, o), { ref: s, isIntersecting: a };
};
function Mt(t) {
  const e = p(t);
  return y(() => void (e.current = t), [t]), e;
}
const P = (t, e, n) => {
  const r = Mt(t);
  y(() => {
    const i = (...o) => r.current(...o);
    return S.ticker.add(i, e, n), () => S.ticker.remove(i);
  }, [e, n]);
}, Z = B(
  ({ active: t = !1, speed: e = 1, children: n, ...r }, i) => {
    const o = p(null), s = p(null), a = p(0), c = p(0);
    return Q(() => {
      const d = () => {
        s.current && (c.current = s.current.clientWidth / 2);
      };
      return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
    }, []), P(() => {
      if (!t)
        return;
      const d = s.current;
      if (!d || c.current === 0)
        return;
      const h = S.ticker.deltaRatio() / 1e3, l = typeof e == "number" ? e : (e == null ? void 0 : e.current) ?? 1;
      a.current += h * l * c.current, a.current = (a.current % c.current + c.current) % c.current, d.style.transform = `translateX(${-a.current}px)`;
    }), /* @__PURE__ */ u("div", { ref: i, ...r, children: /* @__PURE__ */ u(
      "div",
      {
        ref: o,
        style: {
          overflow: "hidden",
          width: "100%"
        },
        children: /* @__PURE__ */ b(
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
Z.displayName = "InfinityLoop";
const Jt = (t) => {
  const { isIntersecting: e, ref: n } = J({
    once: !1
  });
  return /* @__PURE__ */ u(Z, { ref: n, ...t, active: e });
}, It = /(\n|###br\.[^#]+###|###br###)/, Ot = [`
`, "###br###"], Tt = /###br\.(.*?)###/, O = {
  regex: It,
  isRegularBreak: (t) => Ot.includes(t),
  isSpecificBreak: (t) => Tt.test(t),
  getClassName: (t) => {
    var e;
    return ((e = t.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, Zt = ({
  children: t
}) => {
  const e = M(() => t ? t.split(O.regex).map((n, r) => O.isRegularBreak(n) ? /* @__PURE__ */ u("br", {}, r) : O.isSpecificBreak(n) ? /* @__PURE__ */ u(
    "br",
    {
      className: O.getClassName(n)
    },
    r
  ) : /* @__PURE__ */ u(rt, { children: n }, r)) : null, [t]);
  return /* @__PURE__ */ u(T, { children: e });
}, $t = ({
  containerProps: t,
  ...e
}) => t ? /* @__PURE__ */ u("span", { ...t, children: /* @__PURE__ */ u("span", { ...e }) }) : /* @__PURE__ */ u("span", { ...e }), $ = (t, e) => {
  var n;
  return (n = t == null ? void 0 : t.find((r) => r.selector === e)) == null ? void 0 : n.attributes;
}, R = (t, e, n, r, i, o, s) => /* @__PURE__ */ b(
  $t,
  {
    containerProps: n,
    ...r,
    ...i,
    children: [
      typeof t == "string" && t === " " ? " " : t,
      Array.from({ length: o }, (a, c) => {
        const d = typeof s == "function" ? s(c) : s;
        return /* @__PURE__ */ u("span", { ...d, children: typeof t == "string" && t === " " ? " " : t }, `${e}-clone-${c}`);
      })
    ]
  },
  e
), At = (t, e) => {
  if (!e || e.length === 0)
    return [{ content: t, isException: !1 }];
  const n = [];
  let r = "";
  for (const i of t)
    !!$(e, i) ? (r && (n.push({ content: r, isException: !1 }), r = ""), n.push({ content: i, isException: !0 })) : r += i;
  return r && n.push({ content: r, isException: !1 }), n;
}, N = (t, e, n) => {
  const r = At(t, n);
  return r.length === 1 && !r[0].isException ? t : r.map(
    (i, o) => i.isException ? /* @__PURE__ */ u(
      "span",
      {
        ...$(n, i.content),
        children: i.content
      },
      `${e}-ex${o}`
    ) : i.content
  );
}, Ct = (t, e, {
  type: n,
  exception: r,
  exceptionChar: i,
  containerProps: o,
  rest: s,
  clone: a,
  cloneContainerProps: c
}) => {
  if (O.isRegularBreak(t))
    return [null, /* @__PURE__ */ u("br", {}, e)];
  if (O.isSpecificBreak(t))
    return [
      null,
      /* @__PURE__ */ u(
        "br",
        {
          className: O.getClassName(t)
        },
        e
      )
    ];
  switch (n) {
    case "lines": {
      const d = N(
        t,
        `l${e}`,
        i
      );
      return [
        R(
          d,
          `l-${e}`,
          o,
          s,
          void 0,
          a,
          c
        ),
        null
      ];
    }
    case "words":
    case "chars": {
      const d = n === "words", h = d ? t.split(" ") : Array.from(t);
      return [...h.flatMap((f, g) => {
        const m = [];
        if (d) {
          const E = N(
            f,
            `l${e}-p${g}`,
            i
          ), nt = $(r, f);
          m.push(
            R(
              E,
              `l${e}-p${g}`,
              o,
              s,
              nt,
              a,
              c
            )
          );
        } else {
          const E = $(i, f) ?? $(r, f);
          m.push(
            R(
              f,
              `l${e}-p${g}`,
              o,
              s,
              E,
              a,
              c
            )
          );
        }
        return d && g !== h.length - 1 && m.push(
          R(
            " ",
            `l${e}-p${g}-space`,
            o,
            s,
            void 0,
            a,
            c
          )
        ), m;
      }), null];
    }
    default:
      return [];
  }
}, xt = ({
  type: t = "chars",
  children: e,
  exception: n,
  exceptionChar: r,
  containerProps: i,
  clone: o,
  cloneContainerProps: s,
  ...a
}) => M(() => e.split(O.regex).flatMap(
  (d, h) => Ct(d, h, {
    type: t,
    exception: n,
    exceptionChar: r,
    containerProps: i,
    rest: a,
    clone: o ?? 0,
    cloneContainerProps: s
  })
), [
  e,
  t,
  n,
  r,
  i,
  a,
  o,
  s
]), Rt = B((t, e) => {
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
Rt.displayName = "Video";
const kt = B(
  ({
    loader: t = "skeleton",
    delay: e = 1e3,
    onView: n,
    skeleton: r,
    circular: i,
    children: o,
    style: s,
    ...a
  }, c) => {
    const [d, h] = w(e === 0), l = !!o;
    return v(() => {
      e !== 0 && setTimeout(() => h(!0), e);
    }, [e]), /* @__PURE__ */ u(
      "div",
      {
        ref: c,
        style: {
          overflow: "hidden",
          pointerEvents: "none",
          ...l ? {
            maxWidth: "fit-content",
            height: "auto"
          } : {},
          ...s
        },
        ...a,
        children: /* @__PURE__ */ b(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "100%",
              opacity: 0,
              ...d ? {
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
kt.displayName = "Loader";
const Bt = (t) => {
  if (/\b(iPad|iPhone|iPod)\b/.test(t))
    return "iOS";
  if (/\bAndroid\b/i.test(t))
    return "Android";
}, Lt = (t) => {
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
}, _t = (t) => {
  const [e, n] = w({
    mobileOS: void 0,
    isMobile: void 0,
    renderingEngine: void 0,
    userAgent: "",
    testing: void 0
  });
  return y(() => {
    const r = navigator.userAgent, i = Bt(r), o = Lt(r);
    n({
      mobileOS: i,
      isMobile: /Mobi/.test(r),
      renderingEngine: o,
      userAgent: r,
      testing: t && t(r)
    });
  }, []), e;
}, x = A(
  void 0
), te = () => C(x), ee = ({
  style: t,
  ...e
}) => {
  const { isMobile: n } = _t(), r = p(null), [i, o] = w(
    void 0
  );
  return y(() => {
    n && r.current ? o(r.current) : o(void 0);
  }, [n]), /* @__PURE__ */ u(x.Provider, { value: i, children: /* @__PURE__ */ u(
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
}, tt = ({
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
  y(() => (r.current = window.innerWidth, window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), clearTimeout(i.current);
  }), n);
}, Pt = `
Created by FunTech with 😘

👉 https://funtech.inc/
👉 https://github.com/FunTechInc

`, Ft = (t) => {
  let e = Pt;
  typeof t == "string" && (e += t), console.log(e);
}, Dt = (t) => {
  const e = document.querySelector('meta[name="viewport"]');
  if (!e)
    return;
  const n = t > 360 ? "width=device-width,initial-scale=1" : "width=360";
  e.getAttribute("content") !== n && e.setAttribute("content", n);
}, ne = ({
  fixViewport: t = !0,
  areYouFun: e = !1
} = {}) => {
  const n = I(
    (r) => {
      t && Dt(r);
    },
    [t]
  );
  return tt({
    onResize: ({ winW: r }) => n(r),
    debounce: 100,
    dependencies: []
  }), v(() => {
    document.body.dataset.spiceRendered = "true", n(window.innerWidth), e && process.env.NODE_ENV !== "development" && Ft(e);
  }, [e, n]), null;
}, Wt = (t, e) => {
  if (typeof t == "number")
    return t * e;
  const n = S.utils.getUnit(t) || "";
  return (parseFloat(t) || 0) * e + n;
}, Nt = ({
  y: t = "8%",
  scroller: e,
  scrub: n = 1,
  ...r
}) => {
  const i = p(null), o = p(S.context(() => {
  }));
  return y(() => (S.registerPlugin(L), o.current.add(() => {
    S.fromTo(
      i.current,
      { y: t },
      {
        y: Wt(t, -1),
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
}, jt = (t) => typeof t == "number" ? t : parseFloat(t) || 0, re = ({
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
      Nt,
      {
        y: n,
        scroller: r,
        scrub: i,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          scale: 1 + jt(n) * 0.02
          // 1 + scale * 2 / 100
        },
        children: t
      }
    )
  }
), ie = ({
  speed: t = 1,
  range: e = "100px",
  ease: n = (i) => i,
  ...r
}) => {
  const { ref: i, isIntersecting: o } = J(), s = typeof e == "string" && S.utils.getUnit(e) || "px", a = parseFloat(e.toString()) || 0;
  return P((c) => {
    if (!o)
      return;
    const d = (n((Math.sin(c * t) + 1) / 2) * 2 - 1) * a;
    i.current.style.transform = `translateY(${d}${s})`;
  }), /* @__PURE__ */ u("div", { ref: i, ...r });
}, Ht = (t, e) => {
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
  return tt({
    onResize: ({ winW: o }) => i(o),
    debounce: 100,
    dependencies: [i]
  }), y(
    () => i(window.innerWidth),
    [i]
  ), n;
}, oe = ({
  mediaQueryType: t,
  breakpoint: e,
  children: n,
  fallback: r
}) => {
  const i = Ht(t, e);
  return i === null ? null : i ? n : r ?? null;
}, se = () => {
  const [t, e] = w(null);
  return y(() => {
    e(
      window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints
    );
  }, []), t;
}, ce = ({
  shareUrl: t,
  sharePath: e,
  shareTitle: n = "",
  width: r = 600,
  height: i = 800
}) => {
  const o = M(() => encodeURIComponent(t), [t]), s = M(
    () => `height=${i},width=${r}`,
    [i, r]
  ), a = M(
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
  ), c = M(
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
  ), d = M(
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
  ), h = M(
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
  ), [l, f] = w(!1), g = M(
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
    Facebook: a,
    X: c,
    LINE: d,
    share: h,
    copy: g,
    isCopied: l
  };
}, ae = (t, e) => {
  const [n, r] = w(!1), i = p();
  P(() => {
    n && i.current && t(i.current);
  });
  const o = I(() => {
    i.current = void 0, r(!1);
  }, []), s = I(
    (a) => {
      n || (r(!0), e == null || e(a)), i.current = a;
    },
    [n, e]
  );
  return {
    onPointerLeave: o,
    onPointerMove: s
  };
}, ue = (t) => {
  const [e, n] = w();
  return v(() => {
    t && t.current && n(t.current);
  }, [t]), e;
}, j = (t, e) => !!(t != null && t.includes(e)), le = (t, {
  reactive: e = [],
  dependencies: n = []
} = {}) => {
  const [r, i] = w(!1), [o, s] = w(!1), a = p(), c = p(null), d = I(
    (h, l = 4, f = 1e-3) => {
      if (!a.current)
        return 0;
      l = Math.max(l, 0);
      const { progress: g } = a.current;
      c.current === null && (c.current = g), c.current = S.utils.interpolate(c.current, g, h);
      const m = Math.pow(10, l);
      return c.current = Math.round(c.current * m) / m, c.current < f ? 0 : 1 - c.current < f ? 1 : c.current;
    },
    []
  );
  return y(() => {
    const { onUpdate: h, onToggle: l, trigger: f, ...g } = t;
    if (!f)
      return;
    S.registerPlugin(L);
    const m = L.create({
      ...g,
      trigger: f,
      onToggle: (E) => {
        l == null || l(E), j(e, "isActive") && i(E.isActive);
      },
      onUpdate: (E) => {
        a.current = E, h == null || h(E), j(e, "direction") && s(E.direction);
      }
    });
    return () => m.kill();
  }, n), {
    isActive: r,
    direction: o,
    lerpProgress: d,
    scrollTrigger: a
  };
}, et = (t, e) => {
  if (e < t)
    throw Error(
      `End number must be higher then start number: start ${t}, end ${t}`
    );
  const n = e - t + 1;
  return Array(n).fill(0).map((r, i) => i + t);
}, H = (t, e, n) => Math.min(Math.max(t, e), n), Qt = (t, e) => et(1, Math.ceil(t / e)), zt = (t, e, n, r = 5, i = "...") => {
  if (e = Math.ceil(e / n), e < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  t < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), t = 1), t > e && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    e
  ), t = e), r % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), r += 1), r < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), r = 5);
  const o = (r - 1) / 2, s = e > r, a = {
    start: H(
      t - o,
      1,
      s ? e - r + 1 : 1
    ),
    end: H(t + o, r, e)
  }, c = et(a.start, a.end);
  return s && c[0] !== 1 && (c[0] = 1, c[1] = i), s && c[c.length - 1] !== e && (c[c.length - 1] = e, c[c.length - 2] = i), c;
}, k = Object.freeze({
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
    return 1 - k.easeOutBounce(1 - t);
  },
  easeOutBounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce(t) {
    return t < 0.5 ? (1 - k.easeOutBounce(1 - 2 * t)) / 2 : (1 + k.easeOutBounce(2 * t - 1)) / 2;
  }
}), de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: k,
  getPageRange: Qt,
  getPaginationRange: zt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yt as Accordion,
  Zt as CustomBreakLineParser,
  O as CustomBreakLineUtils,
  ie as Float,
  Vt as FormField,
  Z as InfinityLoop,
  Jt as InfinityLoopOnView,
  kt as Loader,
  F as MODAL_CLASSNAME,
  oe as MediaQuery,
  dt as ModalButton,
  Nt as Parallax,
  re as ParallaxThumbnail,
  ne as SpiceStarter,
  xt as SplitText,
  ee as StableScroller,
  Ut as Tab,
  Rt as Video,
  _t as useDeviceDetector,
  P as useFrame,
  J as useIntersectionObserver,
  se as useIsTouchDevice,
  y as useIsomorphicLayoutEffect,
  Ht as useMediaQuery,
  ae as useOnHovering,
  Et as useResizeObserver,
  le as useScrollTrigger,
  ce as useShare,
  te as useStableScroller,
  ue as useValidElement,
  tt as useWindowResizeObserver,
  de as utils
};
//# sourceMappingURL=spice.js.map
