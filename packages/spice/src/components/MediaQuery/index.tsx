"use client";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const MediaQuery = (
   mediaQueryType: "max" | "min",
   breakpoint: number,
   children: React.ReactNode
) => (useMediaQuery(mediaQueryType, breakpoint) ? children : null);
