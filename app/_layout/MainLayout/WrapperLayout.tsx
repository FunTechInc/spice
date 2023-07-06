"use client";

import { WrapperLayout as MyWrapper } from "@/packages/spice/src";

export const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
   return <MyWrapper>{children}</MyWrapper>;
};
