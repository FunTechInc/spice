/// <reference types="react" />
export type FloatProps = {
    speed?: number;
    range?: number | string;
    ease?: (x: number) => number;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Float: ({ speed, range, ease, ...rest }: FloatProps) => import("react/jsx-runtime").JSX.Element;
