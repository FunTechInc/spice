/// <reference types="react" />
type AutoScrollContainerProps = {
    isReverse?: boolean;
    speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const AutoScrollContainer: ({ children, isReverse, speed, style, ...rest }: AutoScrollContainerProps) => import("react/jsx-runtime").JSX.Element;
export {};
