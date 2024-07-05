type ReloadOnResizeProps = {
   initWinW: number;
   winW: number;
   threshold: number;
};

export const reloadOnResize = ({
   initWinW,
   winW,
   threshold,
}: ReloadOnResizeProps) => {
   let resizeFlag = initWinW <= threshold ? false : true;
   if (winW <= threshold) {
      resizeFlag && window.location.reload();
   } else {
      !resizeFlag && window.location.reload();
   }
};
