/// <reference types="react" />
interface IContent {
    children: React.ReactNode;
    value: string;
    className?: string;
    callback?: {
        open?: (target: Element) => void;
        close?: (target: Element) => void;
        reset?: (target: Element) => void;
    };
}
/**
 * @param callback open,close,reset(callback if isAnimation is false when use useTabSwitch)
 */
export declare const Content: ({ children, value, className, callback }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
