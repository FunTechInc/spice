import { jsx as a, jsxs as h, Fragment as E } from "react/jsx-runtime";
import { useMemo as I, Fragment as R, forwardRef as T } from "react";
const A = ({ formProps: e }) => {
  const { style: t, ...r } = e;
  return /* @__PURE__ */ a(
    "input",
    {
      ...r,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, v = ({ formProps: e }) => {
  const { isSelect: t, style: r, ...n } = e;
  if (!t)
    return null;
  const { defaultSelectedIndex: s, options: i } = t;
  return /* @__PURE__ */ a(
    "select",
    {
      ...n,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: s && i[s],
      children: i.map((u, o) => /* @__PURE__ */ a("option", { value: u, children: u }, o))
    }
  );
}, _ = {
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
}, Q = ({
  layoutType: e,
  formPropsArr: t,
  label: r,
  FormItem: n,
  errors: s
}) => {
  const i = ({ index: u }) => s ? Array.isArray(s) ? s[u] : s : null;
  if (e === "block")
    return /* @__PURE__ */ h(E, { children: [
      r && /* @__PURE__ */ a("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ a(n, { formProps: t[0] }),
      /* @__PURE__ */ a(i, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ h(E, { children: [
      r && /* @__PURE__ */ a("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ h("ul", { children: [
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ a(n, { formProps: t[0] }),
          /* @__PURE__ */ a(i, { index: 0 })
        ] }),
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ a(n, { formProps: t[1] }),
          /* @__PURE__ */ a(i, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const u = t.map(
      ({ id: o, value: c, style: l, optionLabel: d, ...y }) => /* @__PURE__ */ h("li", { style: { position: "relative" }, children: [
        /* @__PURE__ */ a(
          n,
          {
            formProps: {
              id: o,
              value: c,
              style: {
                ..._,
                ...l || {}
              },
              ...y
            }
          }
        ),
        /* @__PURE__ */ a("label", { htmlFor: o, children: d || c })
      ] }, o)
    );
    return /* @__PURE__ */ h(E, { children: [
      r && /* @__PURE__ */ a("label", { children: r }),
      /* @__PURE__ */ a("ul", { children: u }),
      /* @__PURE__ */ a(i, { index: 0 })
    ] });
  }
}, F = ({ formProps: e }) => {
  const { isTextarea: t, ...r } = e;
  return t ? /* @__PURE__ */ a("textarea", { ...r, ...t }) : null;
}, D = ({
  label: e,
  formProps: t,
  errors: r,
  ...n
}) => {
  if (r && Array.isArray(r) && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const s = Array.isArray(t) ? t : [t], { type: i, isSelect: u, isTextarea: o } = s[0], c = s.length;
  if (!(i === "radio" || i === "checkbox") && c > 2)
    throw new Error("The length of formProps is up to 2.");
  const l = ["radio", "checkbox"].includes(i || "") ? "radio-check" : c === 1 ? "block" : "flex";
  return /* @__PURE__ */ a("fieldset", { ...n, children: /* @__PURE__ */ a(
    Q,
    {
      layoutType: l,
      formPropsArr: s,
      label: e,
      errors: r,
      FormItem: u ? v : o ? F : A
    }
  ) });
}, L = /(\n|###br\.[^#]+###|###br###)/, N = [`
`, "###br###"], j = /###br\.(.*?)###/, p = {
  regex: L,
  isRegularBreak: (e) => N.includes(e),
  isSpecificBreak: (e) => j.test(e),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, H = ({
  children: e
}) => {
  const t = I(() => e ? e.split(p.regex).map((r, n) => p.isRegularBreak(r) ? /* @__PURE__ */ a("br", {}, n) : p.isSpecificBreak(r) ? /* @__PURE__ */ a(
    "br",
    {
      className: p.getClassName(r)
    },
    n
  ) : /* @__PURE__ */ a(R, { children: r }, n)) : null, [e]);
  return /* @__PURE__ */ a(E, { children: t });
}, q = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ a("span", { ...e, children: /* @__PURE__ */ a("span", { ...t }) }) : /* @__PURE__ */ a("span", { ...t }), w = (e, t) => {
  var r;
  return (r = e == null ? void 0 : e.find((n) => n.selector === t)) == null ? void 0 : r.attributes;
}, m = (e, t, r, n, s, i, u) => /* @__PURE__ */ h(
  q,
  {
    containerProps: r,
    ...n,
    ...s,
    children: [
      typeof e == "string" && e === " " ? " " : e,
      Array.from({ length: i }, (o, c) => {
        const l = typeof u == "function" ? u(c) : u;
        return /* @__PURE__ */ a("span", { ...l, children: typeof e == "string" && e === " " ? " " : e }, `${t}-clone-${c}`);
      })
    ]
  },
  t
), C = (e, t) => {
  if (!t || t.length === 0)
    return [{ content: e, isException: !1 }];
  const r = [];
  let n = "";
  for (const s of e)
    !!w(t, s) ? (n && (r.push({ content: n, isException: !1 }), n = ""), r.push({ content: s, isException: !0 })) : n += s;
  return n && r.push({ content: n, isException: !1 }), r;
}, B = (e, t, r) => {
  const n = C(e, r);
  return n.length === 1 && !n[0].isException ? e : n.map(
    (s, i) => s.isException ? /* @__PURE__ */ a(
      "span",
      {
        ...w(r, s.content),
        children: s.content
      },
      `${t}-ex${i}`
    ) : s.content
  );
}, G = (e, t, {
  type: r,
  exception: n,
  exceptionChar: s,
  containerProps: i,
  rest: u,
  clone: o,
  cloneContainerProps: c
}) => {
  if (p.isRegularBreak(e))
    return [null, /* @__PURE__ */ a("br", {}, t)];
  if (p.isSpecificBreak(e))
    return [
      null,
      /* @__PURE__ */ a(
        "br",
        {
          className: p.getClassName(e)
        },
        t
      )
    ];
  switch (r) {
    case "lines": {
      const l = B(
        e,
        `l${t}`,
        s
      );
      return [
        m(
          l,
          `l-${t}`,
          i,
          u,
          void 0,
          o,
          c
        ),
        null
      ];
    }
    case "words":
    case "chars": {
      const l = r === "words", d = l ? e.split(" ") : Array.from(e);
      return [...d.flatMap((f, g) => {
        const M = [];
        if (l) {
          const O = B(
            f,
            `l${t}-p${g}`,
            s
          ), k = w(n, f);
          M.push(
            m(
              O,
              `l${t}-p${g}`,
              i,
              u,
              k,
              o,
              c
            )
          );
        } else {
          const O = w(s, f) ?? w(n, f);
          M.push(
            m(
              f,
              `l${t}-p${g}`,
              i,
              u,
              O,
              o,
              c
            )
          );
        }
        return l && g !== d.length - 1 && M.push(
          m(
            " ",
            `l${t}-p${g}-space`,
            i,
            u,
            void 0,
            o,
            c
          )
        ), M;
      }), null];
    }
    default:
      return [];
  }
}, W = ({
  type: e = "chars",
  children: t,
  exception: r,
  exceptionChar: n,
  containerProps: s,
  clone: i,
  cloneContainerProps: u,
  ...o
}) => I(() => t.split(p.regex).flatMap(
  (l, d) => G(l, d, {
    type: e,
    exception: r,
    exceptionChar: n,
    containerProps: s,
    rest: o,
    clone: i ?? 0,
    cloneContainerProps: u
  })
), [
  t,
  e,
  r,
  n,
  s,
  o,
  i,
  u
]), K = T((e, t) => {
  const { fill: r, style: n, ...s } = e;
  return /* @__PURE__ */ a(
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
      ...s
    }
  );
});
K.displayName = "Video";
const $ = (e, t) => {
  if (t < e)
    throw Error(
      `End number must be higher then start number: start ${e}, end ${e}`
    );
  const r = t - e + 1;
  return Array(r).fill(0).map((n, s) => s + e);
}, S = (e, t, r) => Math.min(Math.max(e, t), r), V = (e, t) => $(1, Math.ceil(e / t)), X = (e, t, r, n = 5, s = "...") => {
  if (t = Math.ceil(t / r), t < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  e < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), e = 1), e > t && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    t
  ), e = t), n % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), n += 1), n < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), n = 5);
  const i = (n - 1) / 2, u = t > n, o = {
    start: S(
      e - i,
      1,
      u ? t - n + 1 : 1
    ),
    end: S(e + i, n, t)
  }, c = $(o.start, o.end);
  return u && c[0] !== 1 && (c[0] = 1, c[1] = s), u && c[c.length - 1] !== t && (c[c.length - 1] = t, c[c.length - 2] = s), c;
}, b = Object.freeze({
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
    return 1 - b.easeOutBounce(1 - e);
  },
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce(e) {
    return e < 0.5 ? (1 - b.easeOutBounce(1 - 2 * e)) / 2 : (1 + b.easeOutBounce(2 * e - 1)) / 2;
  }
}), Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: b,
  getPageRange: V,
  getPaginationRange: X
}, Symbol.toStringTag, { value: "Module" }));
export {
  H as CustomBreakLineParser,
  p as CustomBreakLineUtils,
  D as FormField,
  W as SplitText,
  K as Video,
  Y as utils
};
//# sourceMappingURL=spice.js.map
