export const fixViewportForSmall = (winW: number) => {
   const viewport = document.querySelector('meta[name="viewport"]');
   if (!viewport) {
      return;
   }
   const value =
      winW > 360 ? "width=device-width,initial-scale=1" : "width=360";
   if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
   }
};
