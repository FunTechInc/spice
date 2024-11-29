import { jsx as t, jsxs as u, Fragment as g } from "react/jsx-runtime";
import { useMemo as x, forwardRef as k } from "react";
const T = ({ formProps: r }) => {
  const { style: e, ...n } = r;
  return /* @__PURE__ */ t(
    "input",
    {
      ...n,
      style: {
        overflow: "hidden",
        ...e
      }
    }
  );
}, S = ({ formProps: r }) => {
  const { isSelect: e, style: n, ...i } = r;
  if (!e)
    return null;
  const { defaultSelectedIndex: s, options: a } = e;
  return /* @__PURE__ */ t(
    "select",
    {
      ...i,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: s && a[s],
      children: a.map((o, c) => /* @__PURE__ */ t("option", { value: o, children: o }, c))
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
  label: n,
  FormItem: i,
  errors: s
}) => {
  const a = ({ index: o }) => s ? Array.isArray(s) ? s[o] : s : null;
  if (r === "block")
    return /* @__PURE__ */ u(g, { children: [
      n && /* @__PURE__ */ t("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ t(i, { formProps: e[0] }),
      /* @__PURE__ */ t(a, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ u(g, { children: [
      n && /* @__PURE__ */ t("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ u("ul", { children: [
        /* @__PURE__ */ u("li", { children: [
          /* @__PURE__ */ t(i, { formProps: e[0] }),
          /* @__PURE__ */ t(a, { index: 0 })
        ] }),
        /* @__PURE__ */ u("li", { children: [
          /* @__PURE__ */ t(i, { formProps: e[1] }),
          /* @__PURE__ */ t(a, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const o = e.map(
      ({ id: c, value: l, style: d, optionLabel: f, ...p }) => /* @__PURE__ */ u("li", { children: [
        /* @__PURE__ */ t(
          i,
          {
            formProps: {
              id: c,
              value: l,
              style: {
                ...B,
                ...d || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ t("label", { htmlFor: c, children: f || l })
      ] }, c)
    );
    return /* @__PURE__ */ u(g, { children: [
      n && /* @__PURE__ */ t("label", { children: n }),
      /* @__PURE__ */ t("ul", { children: o }),
      /* @__PURE__ */ t(a, { index: 0 })
    ] });
  }
}, R = ({ formProps: r }) => {
  const { isTextarea: e, ...n } = r;
  return e ? /* @__PURE__ */ t("textarea", { ...n, ...e }) : null;
}, A = ({
  label: r,
  formProps: e,
  errors: n,
  ...i
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const s = Array.isArray(e) ? e : [e], { type: a, isSelect: o, isTextarea: c } = s[0], l = s.length;
  if (!(a === "radio" || a === "checkbox") && l > 2)
    throw new Error("The length of formProps is up to 2.");
  const d = ["radio", "checkbox"].includes(a || "") ? "radio-check" : l === 1 ? "block" : "flex";
  return /* @__PURE__ */ t("fieldset", { ...i, children: /* @__PURE__ */ t(
    v,
    {
      layoutType: d,
      formPropsArr: s,
      label: r,
      errors: n,
      FormItem: o ? S : c ? R : T
    }
  ) });
}, h = {
  regex: /(\n|###br\.[^#]+###|###br###)/,
  isRegularBreak: (r) => r === `
` || r === "###br###",
  isSpecificBreak: (r) => r.match(/###br\.(.*?)###/),
  getClassName: (r) => {
    var e;
    return ((e = r.match(new RegExp("(?<=###br\\.).+?(?=###)"))) == null ? void 0 : e[0]) || "";
  }
}, E = (r) => x(
  () => r.split(h.regex).map((e, n) => h.isRegularBreak(e) ? /* @__PURE__ */ t("br", {}, n) : h.isSpecificBreak(e) ? /* @__PURE__ */ t(
    "br",
    {
      className: h.getClassName(e)
    },
    n
  ) : e),
  [r]
), F = ({
  children: r
}) => {
  const e = E(r);
  return /* @__PURE__ */ t(g, { children: e });
}, m = ({
  containerProps: r,
  ...e
}) => r ? /* @__PURE__ */ t("span", { ...r, children: /* @__PURE__ */ t("span", { ...e }) }) : /* @__PURE__ */ t("span", { ...e }), O = ({
  type: r = "chars",
  children: e,
  exception: n,
  containerProps: i,
  ...s
}) => {
  const a = r === "chars" ? "" : " ";
  return x(
    () => e.split(h.regex).flatMap((c, l) => h.isRegularBreak(c) ? [null, /* @__PURE__ */ t("br", {}, l)] : h.isSpecificBreak(c) ? [
      null,
      /* @__PURE__ */ t(
        "br",
        {
          className: h.getClassName(c)
        },
        l
      )
    ] : [
      ...c.split(a).map((d, f) => {
        if (n) {
          const p = n.find(
            (y) => y.selector === d
          );
          if (p)
            return /* @__PURE__ */ t(
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
        return /* @__PURE__ */ t(
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
    [a, e, s, n, i]
  );
}, M = k((r, e) => {
  const { fill: n, style: i, ...s } = r;
  return /* @__PURE__ */ t(
    "video",
    {
      ref: e,
      style: n ? {
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
M.displayName = "Video";
const w = (r, e) => {
  if (e < r)
    throw Error(
      `End number must be higher then start number: start ${r}, end ${r}`
    );
  const n = e - r + 1;
  return Array(n).fill(0).map((i, s) => s + r);
}, b = (r, e, n) => Math.min(Math.max(r, e), n), L = (r, e) => w(1, Math.ceil(r / e)), _ = (r, e, n, i = 5, s = "...") => {
  if (e = Math.ceil(e / n), e < 1)
    return console.warn("Page count has negative value. Returning empty array."), [];
  r < 1 && (console.warn(
    "Current page has negative value. Current page will be set to 1"
  ), r = 1), r > e && (console.warn(
    "Current page is higher than page count. Current page will be set to page count:",
    e
  ), r = e), i % 2 === 0 && (console.warn("The size must be odd. The size will be increased by 1"), i += 1), i < 5 && (console.warn("The minimum size is 5. The size will be increased to 5"), i = 5);
  const a = (i - 1) / 2, o = e > i, c = {
    start: b(
      r - a,
      1,
      o ? e - i + 1 : 1
    ),
    end: b(r + a, i, e)
  }, l = w(c.start, c.end);
  return o && l[0] !== 1 && (l[0] = 1, l[1] = s), o && l[l.length - 1] !== e && (l[l.length - 1] = e, l[l.length - 2] = s), l;
}, j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getPageRange: L,
  getPaginationRange: _
}, Symbol.toStringTag, { value: "Module" }));
export {
  F as CustomBreakLineParser,
  h as CustomBreakLineUtils,
  A as FormField,
  O as SplitText,
  M as Video,
  E as useParsedBreakLine,
  j as utils
};
//# sourceMappingURL=spice.js.map
