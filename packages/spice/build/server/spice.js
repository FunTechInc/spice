import { jsx as n, jsxs as h, Fragment as g } from "react/jsx-runtime";
import { useMemo as b, forwardRef as k } from "react";
const T = ({ formProps: r }) => {
  const { style: e, ...t } = r;
  return /* @__PURE__ */ n(
    "input",
    {
      ...t,
      style: {
        overflow: "hidden",
        ...e
      }
    }
  );
}, S = ({ formProps: r }) => {
  const { isSelect: e, style: t, ...i } = r;
  if (!e)
    return;
  const s = () => {
    const a = e.defaultValue;
    return a ? /* @__PURE__ */ n("option", { hidden: !0, children: a }) : null;
  }, c = () => {
    const a = e.defaultSelectedIndex;
    if (a)
      return e.options[a];
  };
  return /* @__PURE__ */ h(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...t || {}
      },
      defaultValue: c(),
      children: [
        /* @__PURE__ */ n(s, {}),
        e.options.map((a) => /* @__PURE__ */ n("option", { value: a, children: a }, a))
      ]
    }
  );
}, B = {
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
}, v = ({
  layoutType: r,
  formPropsArr: e,
  label: t,
  FormItem: i,
  errors: s
}) => {
  const c = ({ index: a }) => s ? Array.isArray(s) ? s[a] : s : null;
  if (r === "block")
    return /* @__PURE__ */ h(g, { children: [
      t && /* @__PURE__ */ n("label", { htmlFor: e[0].id, children: t }),
      /* @__PURE__ */ n(i, { formProps: e[0] }),
      /* @__PURE__ */ n(c, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ h(g, { children: [
      t && /* @__PURE__ */ n("label", { htmlFor: e[0].id, children: t }),
      /* @__PURE__ */ h("ul", { children: [
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ n(i, { formProps: e[0] }),
          /* @__PURE__ */ n(c, { index: 0 })
        ] }),
        /* @__PURE__ */ h("li", { children: [
          /* @__PURE__ */ n(i, { formProps: e[1] }),
          /* @__PURE__ */ n(c, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const a = e.map(
      ({ id: o, value: l, style: d, optionLabel: f, ...p }) => /* @__PURE__ */ h("li", { children: [
        /* @__PURE__ */ n(
          i,
          {
            formProps: {
              id: o,
              value: l,
              style: {
                ...B,
                ...d || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ n("label", { htmlFor: o, children: f || l })
      ] }, o)
    );
    return /* @__PURE__ */ h(g, { children: [
      t && /* @__PURE__ */ n("label", { children: t }),
      /* @__PURE__ */ n("ul", { children: a }),
      /* @__PURE__ */ n(c, { index: 0 })
    ] });
  }
}, R = ({ formProps: r }) => {
  const { isTextarea: e, ...t } = r;
  if (e)
    return /* @__PURE__ */ n("textarea", { ...t, ...e });
}, V = ({
  label: r,
  formProps: e,
  errors: t,
  ...i
}) => {
  if (t && Array.isArray(t) && t.length > 2)
    throw new Error("The length of error is up to 2.");
  const s = Array.isArray(e) ? e : [e], { type: c, isSelect: a, isTextarea: o } = s[0], l = s.length;
  if (!(c === "radio" || c === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  const d = ["radio", "checkbox"].includes(c || "") ? "radio-check" : l === 1 ? "block" : "flex";
  return /* @__PURE__ */ n("fieldset", { ...i, children: /* @__PURE__ */ n(
    v,
    {
      layoutType: d,
      formPropsArr: s,
      label: r,
      errors: t,
      FormItem: a ? S : o ? R : T
    }
  ) });
}, u = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (r) => r === `
` || r === "###br###",
  isSpecificBreak: (r) => r.match(/###br\.(.*?)###/),
  getClassName: (r) => {
    var e;
    return ((e = r.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, E = (r) => b(
  () => r.split(u.regex).map((e, t) => u.isRegularBreak(e) ? /* @__PURE__ */ n("br", {}, t) : u.isSpecificBreak(e) ? /* @__PURE__ */ n(
    "br",
    {
      className: u.getClassName(e)
    },
    t
  ) : e),
  [r]
), $ = ({
  children: r
}) => {
  const e = E(r);
  return /* @__PURE__ */ n(g, { children: e });
}, m = ({
  containerProps: r,
  ...e
}) => r ? /* @__PURE__ */ n("span", { ...r, children: /* @__PURE__ */ n("span", { ...e }) }) : /* @__PURE__ */ n("span", { ...e }), A = ({
  type: r = "chars",
  children: e,
  exception: t,
  containerProps: i,
  ...s
}) => {
  const c = r === "chars" ? "" : " ";
  return b(
    () => e.split(u.regex).flatMap((o, l) => u.isRegularBreak(o) ? [null, /* @__PURE__ */ n("br", {}, l)] : u.isSpecificBreak(o) ? [
      null,
      /* @__PURE__ */ n(
        "br",
        {
          className: u.getClassName(o)
        },
        l
      )
    ] : [
      ...o.split(c).map((d, f) => {
        if (t) {
          const p = t.find(
            (y) => y.selector === d
          );
          if (p)
            return /* @__PURE__ */ n(
              m,
              {
                containerProps: i,
                ...s,
                ...p.attributes,
                children: d
              },
              `${l}-${f}`
            );
        }
        return /* @__PURE__ */ n(
          m,
          {
            containerProps: i,
            ...s,
            children: d === " " ? " " : d
          },
          `${l}-${f}`
        );
      }),
      null
    ]),
    [c, e, s, t, i]
  );
}, L = k((r, e) => {
  const { fill: t, style: i, ...s } = r;
  return /* @__PURE__ */ n(
    "video",
    {
      ref: e,
      style: t ? {
        position: "absolute",
        width: "100%",
        height: "100%",
        inset: 0,
        color: "transparent",
        ...i
      } : i,
      ...s
    }
  );
});
L.displayName = "Video";
const w = (r, e) => {
  if (e < r)
    throw Error(
      `End number must be higher then start number: start ${r}, end ${r}`
    );
  const t = e - r + 1;
  return Array(t).fill(0).map((i, s) => s + r);
}, x = (r, e, t) => Math.min(Math.max(r, e), t), F = (r, e) => w(1, Math.ceil(r / e)), C = (r, e, t, i = 5, s = "...") => {
  if (e = Math.ceil(e / t), e < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  r < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), r = 1), r > e && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    e
  ), r = e), i % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), i += 1), i < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), i = 5);
  const c = (i - 1) / 2, a = e > i, o = {
    start: x(
      r - c,
      1,
      a ? e - i + 1 : 1
    ),
    end: x(r + c, i, e)
  }, l = w(o.start, o.end);
  return a && l[0] !== 1 && (l[0] = 1, l[1] = s), a && l[l.length - 1] !== e && (l[l.length - 1] = e, l[l.length - 2] = s), l;
};
export {
  $ as CustomBreakLineParser,
  u as CustomBreakLineUtils,
  V as FormField,
  A as SplitText,
  L as Video,
  F as getPageRange,
  C as getPaginationRange,
  E as useParsedBreakLine
};
//# sourceMappingURL=spice.js.map
