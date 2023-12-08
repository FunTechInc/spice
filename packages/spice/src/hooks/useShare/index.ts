import { useMemo } from "react";

type UseShareProps = {
   shareUrl: string;
   width?: number;
   height?: number;
};

export const useShare = ({
   shareUrl,
   width = 600,
   height = 800,
}: UseShareProps) => {
   const url = useMemo(() => encodeURIComponent(shareUrl), [shareUrl]);

   const Facebook = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https://www.facebook.com/sharer.php?u=${url}`,
               "newwindow",
               `height=${height},width=${width}}`
            );
         },
      }),
      [url, width, height]
   );

   const X = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https:////twitter.com/share?url=${url}`,
               "newwindow",
               `height=${height},width=${width}}`
            );
         },
      }),
      [url, width, height]
   );

   const LINE = useMemo(
      () => ({
         onClick: () => {
            window.open(
               `https://social-plugins.line.me/lineit/share?url=${url}`,
               "newwindow",
               `height=${height},width=${width}}`
            );
         },
      }),
      [url, width, height]
   );

   const share = useMemo(
      () => ({
         onClick: async () => {
            if (!navigator.share) {
               alert("ご利用のブラウザでは共有できません。");
               return;
            }
            try {
               await window.navigator.share({
                  title: "Share API で共有！",
                  text: "ご覧の通り、お手軽にSNSにリンクを供することができます。",
                  url: "https://example.com/hogehoge",
               });
               alert("共有が完了しました。");
            } catch (e) {
               console.log("error");
            }
         },
      }),
      []
   );

   return {
      Facebook,
      X,
      LINE,
      share,
   };
};
