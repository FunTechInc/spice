/// <reference types="react" />
export declare const MediaQuery: ({ mediaQueryType, breakpoint, children, fallback, }: {
    mediaQueryType: "max" | "min";
    breakpoint: number;
    children: React.ReactNode;
    fallback?: React.ReactNode | null;
}) => import("react").ReactNode;
