import { useMemo, useState } from "react";

type UseShareProps = {
   shareUrl: string;
   /** window.navigator.share API seems to automatically insert siteorigin, so just pass the path */
   sharePath?: string;
   shareTitle?: string;
   /** size of new window , default:600 */
   width?: number;
   /** size of new window , default:800 */
   height?: number;
};

export const useShare = ({
   shareUrl,
   sharePath,
   shareTitle = "",
   width = 600,
   height = 800,
}: UseShareProps) => {
   const encodedUrl = useMemo(() => encodeURIComponent(shareUrl), [shareUrl]);
   const windowSize = useMemo(
      () => `height=${height},width=${width}`,
      [height, width]
   );

   const Facebook = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https://www.facebook.com/sharer.php?u=${encodedUrl}&t=${shareTitle}`,
               "newwindow",
               windowSize
            );
         },
      }),
      [encodedUrl, shareTitle, windowSize]
   );

   const X = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https:////twitter.com/share?url=${encodedUrl}&text=${shareTitle}`,
               "newwindow",
               windowSize
            );
         },
      }),
      [encodedUrl, windowSize, shareTitle]
   );

   const LINE = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${shareTitle}`,
               "newwindow",
               windowSize
            );
         },
      }),
      [encodedUrl, windowSize, shareTitle]
   );

   const share = useMemo(
      () => ({
         onClick: async () => {
            if (!navigator.share) {
               alert("このブラウザは共有機能に対応していません。");
               return;
            }
            try {
               await window.navigator.share({
                  title: shareTitle,
                  url: sharePath ? sharePath : encodedUrl,
               });
            } catch (e) {
               return;
            }
         },
      }),
      [shareTitle, encodedUrl, sharePath]
   );

   const [isCopied, setIsCopied] = useState(false);
   const copy = useMemo(
      () => ({
         onClick: () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
               setIsCopied(true);
            });
         },
      }),
      [shareUrl]
   );

   return {
      Facebook,
      X,
      LINE,
      share,
      copy,
      isCopied,
   };
};
