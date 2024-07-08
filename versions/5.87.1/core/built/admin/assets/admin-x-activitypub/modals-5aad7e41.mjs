import { u as ie, a as de, c as s, j as e, H as J, b as me, B as A, d as se, e as ue, f as K, g as I, N as M, h as X, i as te, k as xe, l as pe, s as be, m as fe, L as oe, n as ae, o as R, A as le, p as ge, q as he } from "./index-9a6a8e4b.mjs";
const we = ({
  type: o = "text",
  inputRef: l,
  title: t,
  hideTitle: r,
  value: a,
  error: m,
  placeholder: f,
  rightPlaceholder: n,
  hint: d,
  onChange: x,
  onFocus: g,
  onBlur: b,
  clearBg: h = !1,
  className: p = "",
  maxLength: F,
  containerClassName: _ = "",
  hintClassName: k = "",
  unstyled: w = !1,
  disabled: z,
  ...C
}) => {
  const T = ie(), { setFocusState: H } = de(), O = (L) => {
    g == null || g(L), H(!0);
  }, U = (L) => {
    b == null || b(L), H(!1);
  }, V = s(
    "relative order-2 flex w-full items-center",
    t && !r && "mt-1.5"
  ), D = !w && s(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    m ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    z && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), N = !w && s(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    z ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    n ? "w-0 grow rounded-l-lg" : "rounded-lg",
    p
  ), q = !w && s(
    "z-[1] order-3 rounded-r-lg",
    n ? typeof n == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let j = /* @__PURE__ */ e.jsx(e.Fragment, {});
  const Q = /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      className: N || p,
      disabled: z,
      id: T,
      maxLength: F,
      placeholder: f,
      type: o,
      value: a,
      onBlur: U,
      onChange: x,
      onFocus: O,
      ...C
    }
  );
  return j = /* @__PURE__ */ e.jsxs("div", { className: V, children: [
    Q,
    !w && !h && /* @__PURE__ */ e.jsx("div", { className: D || "" }),
    n && /* @__PURE__ */ e.jsx("span", { className: q || "", children: n })
  ] }), k = s(
    "order-3",
    k
  ), _ = s(
    "flex flex-col",
    _
  ), t || d ? /* @__PURE__ */ e.jsxs("div", { className: _, children: [
    j,
    t && /* @__PURE__ */ e.jsx(J, { className: r ? "sr-only" : "order-1", htmlFor: T, useLabelTag: !0, children: t }),
    d && /* @__PURE__ */ e.jsx(me, { className: k, color: m ? "red" : "default", children: d })
  ] }) : j;
}, ye = ({ size: o = "md", buttons: l, link: t, linkWithPadding: r, clearBg: a = !0, outlineOnMobile: m, className: f }) => {
  let n = s(
    "flex items-center justify-start rounded",
    t ? "gap-4" : "gap-2",
    f
  );
  return t && !a && (n = s(
    "transition-all hover:bg-grey-200 dark:hover:bg-grey-900",
    o === "sm" ? "h-7 px-3" : "h-[34px] px-4",
    m && "border border-grey-300 hover:border-transparent md:border-transparent",
    n
  )), /* @__PURE__ */ e.jsx("div", { className: n, children: l.map(({ key: d, ...x }) => /* @__PURE__ */ e.jsx(A, { link: t, linkWithPadding: r, size: o, ...x }, d)) });
}, ve = ({
  shiftY: o,
  footerBgColorClass: l = "bg-white dark:bg-black",
  contentBgColorClass: t = "bg-white dark:bg-black",
  height: r = 96,
  children: a
}) => {
  const m = s(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), f = o ? `calc(${o} - 24px)` : "-24px", n = `${r + 24}px`, d = s(
    "sticky z-[298] block h-[24px]",
    t
  ), x = "0", g = s(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    l
  ), b = "0", h = `${r}px`, p = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", F = o ? `calc(${o} + ${r - 24}px)` : `${r - 24}px`;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: m,
      style: {
        bottom: f,
        height: n
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: d,
            style: {
              bottom: x
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: g,
            style: {
              bottom: b,
              height: h
            },
            children: a
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: p,
            style: {
              bottom: F
            }
          }
        )
      ]
    }
  );
};
function ee(o, l, t = {}) {
  o ? M.show(Fe, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ e.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (r) => {
      l(), r == null || r.remove();
    },
    ...t
  }) : l();
}
const ke = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", G = ({
  size: o = "md",
  width: l,
  height: t,
  testId: r,
  title: a,
  okLabel: m = "OK",
  okLoading: f = !1,
  cancelLabel: n = "Cancel",
  footer: d,
  header: x,
  leftButtonProps: g,
  buttonsDisabled: b,
  okDisabled: h,
  padding: p = !0,
  onOk: F,
  okColor: _ = "black",
  onCancel: k,
  topRightContent: w,
  hideXOnMobile: z = !1,
  afterClose: C,
  children: T,
  backDrop: H = !0,
  backDropClick: O = !0,
  stickyFooter: U = !1,
  stickyHeader: V = !1,
  scrolling: D = !0,
  dirty: N = !1,
  animate: q = !0,
  formSheet: j = !1,
  enableCMDS: Q = !0
}) => {
  const L = se(), { setGlobalDirtyState: Z } = ue(), [Y, re] = K(!1);
  I(() => {
    Z(N);
  }, [N, Z]), I(() => {
    const v = (B) => {
      B.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        k ? k() : ee(N, () => {
          L.remove(), C == null || C();
        });
      }), B.stopPropagation());
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [L, N, C, k]), I(() => {
    const v = setTimeout(() => {
      re(!0);
    }, 250);
    return () => clearTimeout(v);
  }, []), I(() => {
    if (F) {
      const v = (B) => {
        (B.metaKey || B.ctrlKey) && B.key === "s" && (B.preventDefault(), F());
      };
      if (Q)
        return window.addEventListener("keydown", v), () => {
          window.removeEventListener("keydown", v);
        };
    }
  });
  const P = [];
  let S;
  const W = () => {
    ee(N, () => {
      L.remove(), C == null || C();
    });
  };
  d || (n && P.push({
    key: "cancel-modal",
    label: n,
    color: "outline",
    onClick: k || (() => {
      W();
    }),
    disabled: b
  }), m && P.push({
    key: "ok-modal",
    label: m,
    color: _,
    className: "min-w-[80px]",
    onClick: F,
    disabled: b || h,
    loading: f
  }));
  let i = s(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    o !== "bleed" && "rounded",
    j ? "shadow-md" : "shadow-xl",
    q && !j && !Y && "animate-modal-in",
    j && !Y && "animate-modal-in-reverse",
    D ? "overflow-y-auto" : "overflow-y-hidden"
  ), u = s(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), y = "", c = s(
    !w || w === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (V && (c = s(
    c,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), o) {
    case "sm":
      i = s(
        i,
        "max-w-[480px]"
      ), u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), y = "p-8", c = s(
        c,
        "-inset-x-8"
      );
      break;
    case "md":
      i = s(
        i,
        "max-w-[720px]"
      ), u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), y = "p-8", c = s(
        c,
        "-inset-x-8"
      );
      break;
    case "lg":
      i = s(
        i,
        "max-w-[1020px]"
      ), u = s(
        u,
        "p-4 md:p-[4vmin]"
      ), y = "p-7", c = s(
        c,
        "-inset-x-8"
      );
      break;
    case "xl":
      i = s(
        i,
        "max-w-[1240px]0"
      ), u = s(
        u,
        "p-4 md:p-[3vmin]"
      ), y = "p-10", c = s(
        c,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      i = s(
        i,
        "h-full"
      ), u = s(
        u,
        "p-4 md:p-[3vmin]"
      ), y = "p-10", c = s(
        c,
        "-inset-x-10"
      );
      break;
    case "bleed":
      i = s(
        i,
        "h-full"
      ), y = "p-10", c = s(
        c,
        "-inset-x-10"
      );
      break;
    default:
      u = s(
        u,
        "p-4 md:p-[8vmin]"
      ), y = "p-8", c = s(
        c,
        "-inset-x-8"
      );
      break;
  }
  p || (y = "p-0"), i = s(
    i
  ), c = s(
    c,
    y,
    "pb-0"
  ), S = s(
    y,
    "py-0"
  ), u = s(
    u,
    "max-[800px]:!pb-20"
  );
  const ne = s(
    `${y} ${U ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  S = s(
    S,
    (o === "full" || o === "bleed" || t === "full" || typeof t == "number") && "grow"
  );
  const ce = (v) => {
    v.target === v.currentTarget && O && W();
  }, $ = {};
  typeof l == "number" ? ($.width = "100%", $.maxWidth = l + "px") : l === "full" && (i = s(
    i,
    "w-full"
  )), typeof t == "number" ? ($.height = "100%", $.maxHeight = t + "px") : t === "full" && (i = s(
    i,
    "h-full"
  ));
  let E;
  return d ? E = d : d === !1 ? S += " pb-0 " : E = /* @__PURE__ */ e.jsxs("div", { className: ne, children: [
    /* @__PURE__ */ e.jsx("div", { children: g && /* @__PURE__ */ e.jsx(A, { ...g }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ e.jsx(ye, { buttons: P }) })
  ] }), E = U ? /* @__PURE__ */ e.jsx(ve, { height: 84, children: E }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: E }), /* @__PURE__ */ e.jsxs("div", { className: u, id: "modal-backdrop", onMouseDown: ce, children: [
    /* @__PURE__ */ e.jsx("div", { className: s(
      "pointer-events-none fixed inset-0 z-0",
      H && !j && ke,
      j && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ e.jsxs("section", { className: i, "data-testid": r, style: $, children: [
      x === !1 ? "" : !w || w === "close" ? /* @__PURE__ */ e.jsxs("header", { className: c, children: [
        a && /* @__PURE__ */ e.jsx(J, { level: 3, children: a }),
        /* @__PURE__ */ e.jsx("div", { className: `${w !== "close" && "md:!invisible md:!hidden"} ${z && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ e.jsx(A, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: W }) })
      ] }) : /* @__PURE__ */ e.jsxs("header", { className: c, children: [
        a && /* @__PURE__ */ e.jsx(J, { level: 3, children: a }),
        w
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: S, children: T }),
      E
    ] })
  ] });
}, je = ({
  title: o = "Are you sure?",
  prompt: l,
  cancelLabel: t = "Cancel",
  okLabel: r = "OK",
  okRunningLabel: a = "...",
  okColor: m = "black",
  onCancel: f,
  onOk: n,
  customFooter: d,
  formSheet: x = !0
}) => {
  const g = se(), [b, h] = K("");
  return /* @__PURE__ */ e.jsx(
    G,
    {
      backDropClick: !1,
      buttonsDisabled: b === "running",
      cancelLabel: t,
      footer: d,
      formSheet: x,
      okColor: m,
      okLabel: b === "running" ? a : r,
      testId: "confirmation-modal",
      title: o,
      width: 540,
      onCancel: f,
      onOk: async () => {
        h("running");
        try {
          await (n == null ? void 0 : n(g));
        } catch (p) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", p);
        }
        h("");
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "py-4 leading-9", children: l })
    }
  );
}, Fe = M.create(je), Ce = M.create(() => {
  var h;
  const { updateRoute: o } = X(), l = M.useModal(), t = te(), r = xe(), m = (h = pe().data) == null ? void 0 : h.site, f = (m == null ? void 0 : m.url) ?? window.location.origin, [n, d] = K(""), [x, g] = K(null), b = async () => {
    try {
      const p = new URL(`.ghost/activitypub/actions/follow/${n}`, f);
      await fetch(p, {
        method: "POST"
      }), be({
        message: "Site followed",
        type: "success"
      }), l.remove(), await r.refetchQueries({ queryKey: ["FollowingResponseData"], type: "active" }), o("");
    } catch {
      g(x);
    }
  };
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        t.reset(), o("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: b,
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ e.jsx(
        we,
        {
          autoFocus: !0,
          error: !!x,
          hint: x,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: n,
          "data-test-new-follower": !0,
          onChange: (p) => d(p.target.value)
        }
      ) })
    }
  );
}), Ne = ({}) => {
  const { updateRoute: o } = X(), l = te(), { data: { items: t = [] } = {} } = fe("inbox"), r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        l.reset(), o("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(oe, { children: r.map((a) => /* @__PURE__ */ e.jsx(ae, { action: /* @__PURE__ */ e.jsx(A, { color: "grey", label: "Follow back", link: !0, onClick: () => l.mutate({ username: R(a) }) }), avatar: /* @__PURE__ */ e.jsx(le, { image: a.icon, size: "sm" }), detail: R(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Le = M.create(Ne), Be = ({}) => {
  const { updateRoute: o } = X(), l = ge(), { data: { items: t = [] } = {} } = he("inbox"), r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        l.reset(), o("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(oe, { children: r.map((a) => /* @__PURE__ */ e.jsx(ae, { action: /* @__PURE__ */ e.jsx(A, { color: "grey", label: "Unfollow", link: !0, onClick: () => l.mutate({ username: R(a) }) }), avatar: /* @__PURE__ */ e.jsx(le, { image: a.icon, size: "sm" }), detail: R(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Ee = M.create(Be), _e = { FollowSite: Ce, ViewFollowing: Ee, ViewFollowers: Le };
export {
  _e as default
};
//# sourceMappingURL=modals-5aad7e41.mjs.map
