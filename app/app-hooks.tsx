"use client";

import { useDeviceDetector, useStarter } from "@/packages/spice/src";

export const AppHooks = () => {
   useStarter({
      // reloadThresholds: [960, 560],
      isFixViewportForSmall: true,
      areYouFun: true,
   });
   return null;
};
