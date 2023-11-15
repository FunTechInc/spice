type ResizeReloadProps = {
   initWinW: number;
   winW: number;
   threshold: number;
};

export const resizeReload = ({
   initWinW,
   winW,
   threshold,
}: ResizeReloadProps) => {
   let resizeFlag = initWinW <= threshold ? false : true;
   if (winW <= threshold) {
      resizeFlag && window.location.reload();
   } else {
      !resizeFlag && window.location.reload();
   }
};
