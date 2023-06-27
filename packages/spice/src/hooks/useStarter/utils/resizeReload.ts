interface IResizeReload {
   initWinW: number;
   winW: number;
   threshold: number;
}

export const resizeReload = ({ initWinW, winW, threshold }: IResizeReload) => {
   let resizeFlag = initWinW <= threshold ? false : true;
   if (winW <= threshold) {
      resizeFlag && window.location.reload();
   } else {
      !resizeFlag && window.location.reload();
   }
};
