import { jsx as r, jsxs as d, Fragment as M } from "react/jsx-runtime";
import { useMemo as b, forwardRef as y } from "react";
const B = ({ formProps: e }) => {
  const { style: t, ...n } = e;
  return /* @__PURE__ */ r(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...t
      }
    }
  );
}, k = ({ formProps: e }) => {
  const { isSelect: t, style: n, ...a } = e;
  if (!t)
    return null;
  const { defaultSelectedIndex: s, options: c } = t;
  return /* @__PURE__ */ r(
    "select",
    {
      ...a,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: s && c[s],
      children: c.map((o, u) => /* @__PURE__ */ r("option", { value: o, children: o }, u))
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
}, E = ({
  layoutType: e,
  formPropsArr: t,
  label: n,
  FormItem: a,
  errors: s
}) => {
  const c = ({ index: o }) => s ? Array.isArray(s) ? s[o] : s : null;
  if (e === "block")
    return /* @__PURE__ */ d(M, { children: [
      n && /* @__PURE__ */ r("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ r(a, { formProps: t[0] }),
      /* @__PURE__ */ r(c, { index: 0 })
    ] });
  if (e === "flex")
    return /* @__PURE__ */ d(M, { children: [
      n && /* @__PURE__ */ r("label", { htmlFor: t[0].id, children: n }),
      /* @__PURE__ */ d("ul", { children: [
        /* @__PURE__ */ d("li", { children: [
          /* @__PURE__ */ r(a, { formProps: t[0] }),
          /* @__PURE__ */ r(c, { index: 0 })
        ] }),
        /* @__PURE__ */ d("li", { children: [
          /* @__PURE__ */ r(a, { formProps: t[1] }),
          /* @__PURE__ */ r(c, { index: 1 })
        ] })
      ] })
    ] });
  if (e === "radio-check") {
    const o = t.map(
      ({ id: u, value: i, style: l, optionLabel: p, ...f }) => /* @__PURE__ */ d("li", { children: [
        /* @__PURE__ */ r(
          a,
          {
            formProps: {
              id: u,
              value: i,
              style: {
                ...S,
                ...l || {}
              },
              ...f
            }
          }
        ),
        /* @__PURE__ */ r("label", { htmlFor: u, children: p || i })
      ] }, u)
    );
    return /* @__PURE__ */ d(M, { children: [
      n && /* @__PURE__ */ r("label", { children: n }),
      /* @__PURE__ */ r("ul", { children: o }),
      /* @__PURE__ */ r(c, { index: 0 })
    ] });
  }
}, T = ({ formProps: e }) => {
  const { isTextarea: t, ...n } = e;
  return t ? /* @__PURE__ */ r("textarea", { ...n, ...t }) : null;
}, N = ({
  label: e,
  formProps: t,
  errors: n,
  ...a
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const s = Array.isArray(t) ? t : [t], { type: c, isSelect: o, isTextarea: u } = s[0], i = s.length;
  if (!(c === "radio" || c === "checkbox") && i > 2)
    throw new Error("The length of formProps is up to 2.");
  const l = ["radio", "checkbox"].includes(c || "") ? "radio-check" : i === 1 ? "block" : "flex";
  return /* @__PURE__ */ r("fieldset", { ...a, children: /* @__PURE__ */ r(
    E,
    {
      layoutType: l,
      formPropsArr: s,
      label: e,
      errors: n,
      FormItem: o ? k : u ? T : B
    }
  ) });
}, h = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (e) => e === `
` || e === "###br###",
  isSpecificBreak: (e) => e.match(/###br\.(.*?)###/),
  getClassName: (e) => {
    var t;
    return ((t = e.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : t[0]) || "";
  }
}, v = (e) => b(
  () => e.split(h.regex).map((t, n) => h.isRegularBreak(t) ? /* @__PURE__ */ r("br", {}, n) : h.isSpecificBreak(t) ? /* @__PURE__ */ r(
    "br",
    {
      className: h.getClassName(t)
    },
    n
  ) : t),
  [e]
), $ = ({
  children: e
}) => {
  const t = v(e);
  return /* @__PURE__ */ r(M, { children: t });
}, g = ({
  containerProps: e,
  ...t
}) => e ? /* @__PURE__ */ r("span", { ...e, children: /* @__PURE__ */ r("span", { ...t }) }) : /* @__PURE__ */ r("span", { ...t }), j = ({
  type: e = "chars",
  children: t,
  exception: n,
  containerProps: a,
  ...s
}) => {
  const c = e === "chars" ? "" : " ";
  return b(
    () => t.split(h.regex).flatMap((u, i) => h.isRegularBreak(u) ? [null, /* @__PURE__ */ r("br", {}, i)] : h.isSpecificBreak(u) ? [
      null,
      /* @__PURE__ */ r(
        "br",
        {
          className: h.getClassName(u)
        },
        i
      )
    ] : [
      ...u.split(c).map((l, p) => {
        if (n) {
          const f = n.find(
            (I) => I.selector === l
          );
          if (f)
            return /* @__PURE__ */ r(
              g,
              {
                containerProps: a,
                ...s,
                ...f.attributes,
                children: l
              },
              `${i}-${p}`
            );
        }
        return /* @__PURE__ */ r(
          g,
          {
            containerProps: a,
            ...s,
            children: l === " " ? " " : l
          },
          `${i}-${p}`
        );
      }),
      null
    ]),
    [c, t, s, n, a]
  );
}, C = y((e, t) => {
  const { fill: n, style: a, ...s } = e;
  return /* @__PURE__ */ r(
    "video",
    {
      ref: t,
      style: n ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...a
      } : a,
      ...s
    }
  );
});
C.displayName = "Video";
const O = (e, t) => {
  if (t < e)
    throw Error(
      `End number must be higher then start number: start ${e}, end ${e}`
    );
  const n = t - e + 1;
  return Array(n).fill(0).map((a, s) => s + e);
}, m = (e, t, n) => Math.min(Math.max(e, t), n), Q = (e, t) => O(1, Math.ceil(e / t)), R = (e, t, n, a = 5, s = "...") => {
  if (t = Math.ceil(t / n), t < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  e < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), e = 1), e > t && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    t
  ), e = t), a % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), a += 1), a < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), a = 5);
  const c = (a - 1) / 2, o = t > a, u = {
    start: m(
      e - c,
      1,
      o ? t - a + 1 : 1
    ),
    end: m(e + c, a, t)
  }, i = O(u.start, u.end);
  return o && i[0] !== 1 && (i[0] = 1, i[1] = s), o && i[i.length - 1] !== t && (i[i.length - 1] = t, i[i.length - 2] = s), i;
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
    const n = 2.5949095;
    return e < 0.5 ? Math.pow(2 * e, 2) * ((n + 1) * 2 * e - n) / 2 : (Math.pow(2 * e - 2, 2) * ((n + 1) * (e * 2 - 2) + n) + 2) / 2;
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
}), A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Easing: w,
  getPageRange: Q,
  getPaginationRange: R
}, Symbol.toStringTag, { value: "Module" }));
export {
  $ as CustomBreakLineParser,
  h as CustomBreakLineUtils,
  N as FormField,
  j as SplitText,
  C as Video,
  v as useParsedBreakLine,
  A as utils
};
//# sourceMappingURL=spice.js.map
