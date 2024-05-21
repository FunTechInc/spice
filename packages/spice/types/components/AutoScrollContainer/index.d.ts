/// <reference types="react" />
type AutoScrollContainerProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    isReverse?: boolean;
    speed?: number;
};
export declare const AutoScrollContainer: ({ children, className, style, isReverse, speed, }: AutoScrollContainerProps) => import("react/jsx-runtime").JSX.Element;
export {};
