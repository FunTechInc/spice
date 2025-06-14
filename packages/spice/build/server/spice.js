import { jsx as s, jsxs as h, Fragment as w } from "react/jsx-runtime";
import { useMemo as b, Fragment as E, forwardRef as I } from "react";
const B = ({ formProps: e }) => {
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
}, y = ({ formProps: e }) => {
  const { isSelect: t, style: r, ...n } = e;
  if (!t)
    return null;
  const { defaultSelectedIndex: a, options: c } = t;
  return /* @__PURE__ */ s(
    "select",
    {
      ...n,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...r || {}
      },
      defaultValue: a && c[a],
      children: c.map((i, o) => /* @__PURE__ */ s("option", { value: i, children: i }, o))
    }
  );
}, S = {
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
}, k = ({
  layoutType: e,
  formPropsArr: t,
  label: r,
  FormItem: n,
  errors: a
}) => {
  const c = ({ index: i }) => a ? Array.isArray(a) ? a[i] : a : null;
  if (e === "block")
    return /* @__PURE__ */ h(w, { children: [
      r && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ s(n, { formProps: t[0] }),
      /* @__PURE__ */ s(c, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ h(w, { children: [
      r && /* @__PURE__ */ s("label", { htmlFor: t[0].id, children: r }),
      /* @__PURE__ */ h("ul", { children: [
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ s(n, { formProps: t[0] }),
          /* @__PURE__ */ s(c, { index: 0 })
        ] }),
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ s(n, { formProps: t[1] }),
          /* @__PURE__ */ s(c, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const i = t.map(
      ({ id: o, value: u, style: d, optionLabel: p, ...f }) => /* @__PURE__ */ h("li", { children: [
        /* @__PURE__ */ s(
          n,
          {
            formProps: {
              id: o,
              value: u,
              style: {
                ...S,
                ...d || {}
              },
              ...f
            }
          }
        ),
        /* @__PURE__ */ s("label", { htmlFor: o, children: p || u })
      ] }, o)
    );
    return /* @__PURE__ */ h(w, { children: [
      r && /* @__PURE__ */ s("label", { children: r }),
      /* @__PURE__ */ s("ul", { children: i }),
      /* @__PURE__ */ s(c, { index: 0 })
    ] });
  }
}, R = ({ formProps: e }) => {
  const { isTextarea: t, ...r } = e;
  return t ? /* @__PURE__ */ s("textarea", { ...r, ...t }) : null;
}, q = ({
  label: e,
  formProps: t,
  errors: r,
  ...n
}) => {
  if (r && Array.isArray(r) && r.length > 2)
    throw new Error("The length of error is up to 2.");
  const a = Array.isArray(t) ? t : [t], { type: c, isSelect: i, isTextarea: o } = a[0], u = a.length;
  if (!(c === "radio" || c === "checkbox") && u > 2)
    throw new Error("The length of formProps is up to 2.");
  const d = ["radio", "checkbox"].includes(c || "") ? "radio-check" : u === 1 ? "block" : "flex";
  return /* @__PURE__ */ s("fieldset", { ...n, children: /* @__PURE__ */ s(
    k,
    {
      layoutType: d,
      formPropsArr: a,
      label: e,
      errors: r,
      FormItem: i ? y : o ? R : B
    }
  ) });
}, T = /(\n|###br\.[^#]+###|###br###)/, C = [`
`, "###br###"], A = /###br\.(.*?)###/, l = {
  regex: T,
  isRegularBreak: (e) => C.includes(e),
  isSpecificBreak: (e) => A.test(e),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, G = ({
  children: e
}) => {
  const t = b(() => e ? e.split(l.regex).map((r, n) => l.isRegularBreak(r) ? /* @__PURE__ */ s("br", {}, n) : l.isSpecificBreak(r) ? /* @__PURE__ */ s(
    "br",
    {
      className: l.getClassName(r)
    },
    n
  ) : /* @__PURE__ */ s(E, { children: r }, n)) : null, [e]);
  return /* @__PURE__ */ s(w, { children: t });
}, _ = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ s("span", { ...e, children: /* @__PURE__ */ s("span", { ...t }) }) : /* @__PURE__ */ s("span", { ...t }), v = (e, t) => {
  var r;
  return (r = e == null ? void 0 : e.find((n) => n.selector === t)) == null ? void 0 : r.attributes;
}, M = (e, t, r, n, a) => /* @__PURE__ */ s(
  _,
  {
    containerProps: r,
    ...n,
    ...a,
    children: e === " " ? " " : e
  },
  t
), Q = (e, t, { type: r, exception: n, containerProps: a, rest: c }) => {
  if (l.isRegularBreak(e))
    return [null, /* @__PURE__ */ s("br", {}, t)];
  if (l.isSpecificBreak(e))
    return [
      null,
      /* @__PURE__ */ s(
        "br",
        {
          className: l.getClassName(e)
        },
        t
      )
    ];
  switch (r) {
    case "lines":
      return [M(e, `l-${t}`, a, c), null];
    case "words":
    case "chars": {
      const i = r === "words", o = i ? e.split(" ") : Array.from(e);
      return [...o.flatMap((d, p) => {
        const f = [];
        return f.push(
          M(
            d,
            `l${t}-p${p}`,
            a,
            c,
            v(n, d)
          )
        ), i && p !== o.length - 1 && f.push(
          M(
            " ",
            `l${t}-p${p}-space`,
            a,
            c
          )
        ), f;
      }), null];
    }
    default:
      return [];
  }
}, K = ({
  type: e = "chars",
  children: t,
  exception: r,
  containerProps: n,
  ...a
}) => b(() => t.split(l.regex).flatMap(
  (i, o) => Q(i, o, {
    type: e,
    exception: r,
    containerProps: n,
    rest: a
  })
), [t, e, r, n, a]), F = I((e, t) => {
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
F.displayName = "Video";
const O = (e, t) => {
  if (t < e)
    throw Error(
      `End number must be higher then start number: start ${e}, end ${e}`
    );
  const r = t - e + 1;
  return Array(r).fill(0).map((n, a) => a + e);
}, m = (e, t, r) => Math.min(Math.max(e, t), r), L = (e, t) => O(1, Math.ceil(e / t)), $ = (e, t, r, n = 5, a = "...") => {
  if (t = Math.ceil(t / r), t < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  e < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), e = 1), e > t && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    t
  ), e = t), n % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), n += 1), n < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), n = 5);
  const c = (n - 1) / 2, i = t > n, o = {
    start: m(
      e - c,
      1,
      i ? t - n + 1 : 1
    ),
    end: m(e + c, n, t)
  }, u = O(o.start, o.end);
  return i && u[0] !== 1 && (u[0] = 1, u[1] = a), i && u[u.length - 1] !== t && (u[u.length - 1] = t, u[u.length - 2] = a), u;
}, g = Object.freeze({
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
    return 1 - g.easeOutBounce(1 - e);
  },
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce(e) {
    return e < 0.5 ? (1 - g.easeOutBounce(1 - 2 * e)) / 2 : (1 + g.easeOutBounce(2 * e - 1)) / 2;
  }
}), P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: g,
  getPageRange: L,
  getPaginationRange: $
}, Symbol.toStringTag, { value: "Module" }));
export {
  G as CustomBreakLineParser,
  l as CustomBreakLineUtils,
  q as FormField,
  K as SplitText,
  F as Video,
  P as utils
};
//# sourceMappingURL=spice.js.map
