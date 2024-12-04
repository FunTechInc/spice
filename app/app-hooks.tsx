"use client";

import { SpiceStarter } from "@/packages/spice/src/client";
import { useLenisRegister } from "./useLenis";

export const AppHooks = () => {
   useLenisRegister();
   return <SpiceStarter areYouFun />;
};
