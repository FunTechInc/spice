"use client";

import { useDeviceDetector, useStarter } from "@/packages/spice/src/client";
import { useLenisRegister } from "./useLenis";

export const AppHooks = () => {
   useLenisRegister();
   useStarter({
      // reloadThresholds: [960, 560],
      isFixViewportForSmall: true,
      areYouFun: true,
   });
   return null;
};
