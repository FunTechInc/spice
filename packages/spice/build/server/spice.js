import { jsx as s, jsxs as l, Fragment as f } from "react/jsx-runtime";
import { useMemo as E, Fragment as y, forwardRef as B } from "react";
const S = ({ formProps: e }) => {
  const { style: t, ...r } = e;
  return /* @__PURE__ */ s(
    "input",
    {
      ...r,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, k = ({ formProps: e }) => {
  const { isSelect: t, style: r, ...n } = e;
  if (!t)
    return null;
  const { defaultSelectedIndex: a, options: u } = t;
  return /* @__PURE__ */ s(
    "select",
    {
      ...n,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: a && u[a],
      children: u.map((c, o) => /* @__PURE__ */ s("option", { value: c, children: c }, o))
    }
  );
}, R = {
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
}, T = ({
  layoutType: e,
  formPropsArr: t,
  label: r,
  FormItem: n,
  errors: a
}) => {
  const u = ({ index: c }) => a ? Array.isArray(a) ? a[c] : a : null;
  if (e === "block")
    return /* @__PURE__ */ l(f, { children: [
      r && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ s(n, { formProps: t[0] }),
      /* @__PURE__ */ s(u, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ l(f, { children: [
      r && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ l("ul", { children: [
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ s(n, { formProps: t[0] }),
          /* @__PURE__ */ s(u, { index: 0 })
        ] }),
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ s(n, { formProps: t[1] }),
          /* @__PURE__ */ s(u, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const c = t.map(
      ({ id: o, value: i, style: h, optionLabel: b, ...p }) => /* @__PURE__ */ l("li", { style: { position: "relative" }, children: [
        /* @__PURE__ */ s(
          n,
          {
            formProps: {
              id: o,
              value: i,
              style: {
                ...R,
                ...h || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ s("label", { htmlFor: o, children: b || i })
      ] }, o)
    );
    return /* @__PURE__ */ l(f, { children: [
      r && /* @__PURE__ */ s("label", { children: r }),
      /* @__PURE__ */ s("ul", { children: c }),
      /* @__PURE__ */ s(u, { index: 0 })
    ] });
  }
}, v = ({ formProps: e }) => {
  const { isTextarea: t, ...r } = e;
  return t ? /* @__PURE__ */ s("textarea", { ...r, ...t }) : null;
}, K = ({
  label: e,
  formProps: t,
  errors: r,
  ...n
}) => {
  if (r && Array.isArray(r) && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const a = Array.isArray(t) ? t : [t], { type: u, isSelect: c, isTextarea: o } = a[0], i = a.length;
  if (!(u === "radio" || u === "checkbox") && i > 2)
    throw new Error("The length of formProps is up to 2.");
  const h = ["radio", "checkbox"].includes(u || "") ? "radio-check" : i === 1 ? "block" : "flex";
  return /* @__PURE__ */ s("fieldset", { ...n, children: /* @__PURE__ */ s(
    T,
    {
      layoutType: h,
      formPropsArr: a,
      label: e,
      errors: r,
      FormItem: c ? k : o ? v : S
    }
  ) });
}, A = /(\n|###br\.[^#]+###|###br###)/, _ = [`
`, "###br###"], $ = /###br\.(.*?)###/, d = {
  regex: A,
  isRegularBreak: (e) => _.includes(e),
  isSpecificBreak: (e) => $.test(e),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, V = ({
  children: e
}) => {
  const t = E(() => e ? e.split(d.regex).map((r, n) => d.isRegularBreak(r) ? /* @__PURE__ */ s("br", {}, n) : d.isSpecificBreak(r) ? /* @__PURE__ */ s(
    "br",
    {
      className: d.getClassName(r)
    },
    n
  ) : /* @__PURE__ */ s(y, { children: r }, n)) : null, [e]);
  return /* @__PURE__ */ s(f, { children: t });
}, Q = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ s("span", { ...e, children: /* @__PURE__ */ s("span", { ...t }) }) : /* @__PURE__ */ s("span", { ...t }), F = (e, t) => {
  var r;
  return (r = e == null ? void 0 : e.find((n) => n.selector === t)) == null ? void 0 : r.attributes;
}, m = (e, t, r, n, a, u, c) => /* @__PURE__ */ l(
  Q,
  {
    containerProps: r,
    ...n,
    ...a,
    children: [
      e === " " ? " " : e,
      Array.from({ length: u }, (o, i) => {
        const h = typeof c == "function" ? c(i) : c;
        return /* @__PURE__ */ s("span", { ...h, children: e === " " ? " " : e }, `${t}-clone-${i}`);
      })
    ]
  },
  t
), L = (e, t, {
  type: r,
  exception: n,
  containerProps: a,
  rest: u,
  clone: c,
  cloneContainerProps: o
}) => {
  if (d.isRegularBreak(e))
    return [null, /* @__PURE__ */ s("br", {}, t)];
  if (d.isSpecificBreak(e))
    return [
      null,
      /* @__PURE__ */ s(
        "br",
        {
          className: d.getClassName(e)
        },
        t
      )
    ];
  switch (r) {
    case "lines":
      return [
        m(
          e,
          `l-${t}`,
          a,
          u,
          void 0,
          c,
          o
        ),
        null
      ];
    case "words":
    case "chars": {
      const i = r === "words", h = i ? e.split(" ") : Array.from(e);
      return [...h.flatMap((p, g) => {
        const M = [];
        return M.push(
          m(
            p,
            `l${t}-p${g}`,
            a,
            u,
            F(n, p),
            c,
            o
          )
        ), i && g !== h.length - 1 && M.push(
          m(
            " ",
            `l${t}-p${g}-space`,
            a,
            u,
            void 0,
            c,
            o
          )
        ), M;
      }), null];
    }
    default:
      return [];
  }
}, X = ({
  type: e = "chars",
  children: t,
  exception: r,
  containerProps: n,
  clone: a,
  cloneContainerProps: u,
  ...c
}) => E(() => t.split(d.regex).flatMap(
  (i, h) => L(i, h, {
    type: e,
    exception: r,
    containerProps: n,
    rest: c,
    clone: a ?? 0,
    cloneContainerProps: u
  })
), [
  t,
  e,
  r,
  n,
  c,
  a,
  u
]), C = B((e, t) => {
  const { fill: r, style: n, ...a } = e;
  return /* @__PURE__ */ s(
    "video",
    {
      ref: t,
      style: r ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...n
      } : n,
      ...a
    }
  );
});
C.displayName = "Video";
const I = (e, t) => {
  if (t < e)
    throw Error(
      `End number must be higher then start number: start ${e}, end ${e}`
    );
  const r = t - e + 1;
  return Array(r).fill(0).map((n, a) => a + e);
}, O = (e, t, r) => Math.min(Math.max(e, t), r), N = (e, t) => I(1, Math.ceil(e / t)), j = (e, t, r, n = 5, a = "...") => {
  if (t = Math.ceil(t / r), t < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  e < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), e = 1), e > t && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    t
  ), e = t), n % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), n += 1), n < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), n = 5);
  const u = (n - 1) / 2, c = t > n, o = {
    start: O(
      e - u,
      1,
      c ? t - n + 1 : 1
    ),
    end: O(e + u, n, t)
  }, i = I(o.start, o.end);
  return c && i[0] !== 1 && (i[0] = 1, i[1] = a), c && i[i.length - 1] !== t && (i[i.length - 1] = t, i[i.length - 2] = a), i;
}, w = Object.freeze({
  easeInSine(e) {
    return 1 - Math.cos(e * Math.PI / 2);
  },
  easeOutSine(e) {
    return Math.sin(e * Math.PI / 2);
  },
  easeInOutSine(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
  },
  easeInQuad(e) {
    return e * e;
  },
  easeOutQuad(e) {
    return 1 - (1 - e) * (1 - e);
  },
  easeInOutQuad(e) {
    return e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
  },
  easeInCubic(e) {
    return e * e * e;
  },
  easeOutCubic(e) {
    return 1 - Math.pow(1 - e, 3);
  },
  easeInOutCubic(e) {
    return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
  },
  easeInQuart(e) {
    return e * e * e * e;
  },
  easeOutQuart(e) {
    return 1 - Math.pow(1 - e, 4);
  },
  easeInOutQuart(e) {
    return e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2;
  },
  easeInQuint(e) {
    return e * e * e * e * e;
  },
  easeOutQuint(e) {
    return 1 - Math.pow(1 - e, 5);
  },
  easeInOutQuint(e) {
    return e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
  },
  easeInExpo(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * e - 10);
  },
  easeOutExpo(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
  },
  easeInOutExpo(e) {
    return e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
  },
  easeInCirc(e) {
    return 1 - Math.sqrt(1 - Math.pow(e, 2));
  },
  easeOutCirc(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  },
  easeInOutCirc(e) {
    return e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
  },
  easeInBack(e) {
    return 2.70158 * e * e * e - 1.70158 * e * e;
  },
  easeOutBack(e) {
    return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
  },
  easeInOutBack(e) {
    const r = 2.5949095;
    return e < 0.5 ? Math.pow(2 * e, 2) * ((r + 1) * 2 * e - r) / 2 : (Math.pow(2 * e - 2, 2) * ((r + 1) * (e * 2 - 2) + r) + 2) / 2;
  },
  easeInElastic(e) {
    const t = 2 * Math.PI / 3;
    return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * t);
  },
  easeOutElastic(e) {
    const t = 2 * Math.PI / 3;
    return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * t) + 1;
  },
  easeInOutElastic(e) {
    const t = 2 * Math.PI / 4.5;
    return e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * t)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * t) / 2 + 1;
  },
  easeInBounce(e) {
    return 1 - w.easeOutBounce(1 - e);
  },
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce(e) {
    return e < 0.5 ? (1 - w.easeOutBounce(1 - 2 * e)) / 2 : (1 + w.easeOutBounce(2 * e - 1)) / 2;
  }
}), U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: w,
  getPageRange: N,
  getPaginationRange: j
}, Symbol.toStringTag, { value: "Module" }));
export {
  V as CustomBreakLineParser,
  d as CustomBreakLineUtils,
  K as FormField,
  X as SplitText,
  C as Video,
  U as utils
};
//# sourceMappingURL=spice.js.map
