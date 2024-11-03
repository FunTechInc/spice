import { jsx as t, jsxs as u, Fragment as x } from "react/jsx-runtime";
import { useMemo as m, forwardRef as k } from "react";
const w = ({ formProps: r }) => {
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
}, y = ({ formProps: r }) => {
  const { isSelect: e, style: n, ...l } = r;
  if (!e)
    return;
  const i = () => {
    const s = e.defaultValue;
    return s ? /* @__PURE__ */ t("option", { hidden: !0, children: s }) : null;
  }, c = () => {
    const s = e.defaultSelectedIndex;
    if (s)
      return e.options[s];
  };
  return /* @__PURE__ */ u(
    "select",
    {
      ...l,
      style: {
        overflow: "hidden",
        fontSize: "16px",
        ...n || {}
      },
      defaultValue: c(),
      children: [
        /* @__PURE__ */ t(i, {}),
        e.options.map((s) => /* @__PURE__ */ t("option", { value: s, children: s }, s))
      ]
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
}, B = ({
  layoutType: r,
  formPropsArr: e,
  label: n,
  FormItem: l,
  errors: i
}) => {
  const c = ({ index: s }) => i ? Array.isArray(i) ? i[s] : i : null;
  if (r === "block")
    return /* @__PURE__ */ u(x, { children: [
      n && /* @__PURE__ */ t("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ t(l, { formProps: e[0] }),
      /* @__PURE__ */ t(c, { index: 0 })
    ] });
  if (r === "flex")
    return /* @__PURE__ */ u(x, { children: [
      n && /* @__PURE__ */ t("label", { htmlFor: e[0].id, children: n }),
      /* @__PURE__ */ u("ul", { children: [
        /* @__PURE__ */ u("li", { children: [
          /* @__PURE__ */ t(l, { formProps: e[0] }),
          /* @__PURE__ */ t(c, { index: 0 })
        ] }),
        /* @__PURE__ */ u("li", { children: [
          /* @__PURE__ */ t(l, { formProps: e[1] }),
          /* @__PURE__ */ t(c, { index: 1 })
        ] })
      ] })
    ] });
  if (r === "radio-check") {
    const s = e.map(
      ({ id: a, value: o, style: d, optionLabel: f, ...p }) => /* @__PURE__ */ u("li", { children: [
        /* @__PURE__ */ t(
          l,
          {
            formProps: {
              id: a,
              value: o,
              style: {
                ...S,
                ...d || {}
              },
              ...p
            }
          }
        ),
        /* @__PURE__ */ t("label", { htmlFor: a, children: f || o })
      ] }, a)
    );
    return /* @__PURE__ */ u(x, { children: [
      n && /* @__PURE__ */ t("label", { children: n }),
      /* @__PURE__ */ t("ul", { children: s }),
      /* @__PURE__ */ t(c, { index: 0 })
    ] });
  }
}, T = ({ formProps: r }) => {
  const { isTextarea: e, ...n } = r;
  if (e)
    return /* @__PURE__ */ t("textarea", { ...n, ...e });
}, v = ({
  label: r,
  formProps: e,
  errors: n,
  ...l
}) => {
  if (n && Array.isArray(n) && n.length > 2)
    throw new Error("The length of error is up to 2.");
  const i = Array.isArray(e) ? e : [e], { type: c, isSelect: s, isTextarea: a } = i[0], o = i.length;
  if (!(c === "radio" || c === "checkbox") && o > 2)
    throw new Error("The length of formProps is up to 2.");
  const d = ["radio", "checkbox"].includes(c || "") ? "radio-check" : o === 1 ? "block" : "flex";
  return /* @__PURE__ */ t("fieldset", { ...l, children: /* @__PURE__ */ t(
    B,
    {
      layoutType: d,
      formPropsArr: i,
      label: r,
      errors: n,
      FormItem: s ? y : a ? T : w
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
}, C = (r) => m(
  () => r.split(h.regex).map((e, n) => h.isRegularBreak(e) ? /* @__PURE__ */ t("br", {}, n) : h.isSpecificBreak(e) ? /* @__PURE__ */ t(
    "br",
    {
      className: h.getClassName(e)
    },
    n
  ) : e),
  [r]
), E = ({
  text: r
}) => {
  const e = C(r);
  return /* @__PURE__ */ t(x, { children: e });
}, g = ({
  containerProps: r,
  ...e
}) => r ? /* @__PURE__ */ t("span", { ...r, children: /* @__PURE__ */ t("span", { ...e }) }) : /* @__PURE__ */ t("span", { ...e }), F = ({
  type: r = "chars",
  text: e,
  exception: n,
  containerProps: l,
  ...i
}) => {
  const c = r === "chars" ? "" : " ";
  return m(
    () => e.split(h.regex).flatMap((a, o) => h.isRegularBreak(a) ? [null, /* @__PURE__ */ t("br", {}, o)] : h.isSpecificBreak(a) ? [
      null,
      /* @__PURE__ */ t(
        "br",
        {
          className: h.getClassName(a)
        },
        o
      )
    ] : [
      ...a.split(c).map((d, f) => {
        if (n) {
          const p = n.find(
            (b) => b.selector === d
          );
          if (p)
            return /* @__PURE__ */ t(
              g,
              {
                containerProps: l,
                ...i,
                ...p.attributes,
                children: d
              },
              `${o}-${f}`
            );
        }
        return /* @__PURE__ */ t(
          g,
          {
            containerProps: l,
            ...i,
            children: d === " " ? " " : d
          },
          `${o}-${f}`
        );
      }),
      null
    ]),
    [c, e, i, n, l]
  );
}, L = k((r, e) => {
  const { fill: n, style: l, ...i } = r;
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
        ...l
      } : l,
      ...i
    }
  );
});
L.displayName = "Video";
export {
  E as CustomBreakLineParser,
  h as CustomBreakLineUtils,
  v as FormField,
  F as SplitText,
  L as Video,
  C as useParseBreakLine
};
//# sourceMappingURL=spice.js.map
