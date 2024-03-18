export const toggleScroll = (action: "add" | "remove") => {
   const htmlRootStyle = document.documentElement.style;
   const bodyStyle = document.body.style;

   if (action === "add") {
      htmlRootStyle.scrollbarGutter = "stable";
      htmlRootStyle.overflow = "hidden";
      bodyStyle.overflow = "hidden";
   } else {
      htmlRootStyle.scrollbarGutter = "";
      htmlRootStyle.overflow = "";
      bodyStyle.overflow = "";
   }
};
