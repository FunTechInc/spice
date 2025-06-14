"use client";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const MediaQuery = ({
   mediaQueryType,
   breakpoint,
   children,
   fallback,
}: {
   mediaQueryType: "max" | "min";
   breakpoint: number;
   children: React.ReactNode;
   fallback?: React.ReactNode | null;
}) => {
   const isMatch = useMediaQuery(mediaQueryType, breakpoint);
   return isMatch ? children : fallback ?? null;
};
