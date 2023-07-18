/// <reference types="react" />
interface IContent {
    children: React.ReactNode;
    value: string;
    className?: string;
    callback?: {
        close?: (target: Element) => void;
        open?: (target: Element) => void;
    };
}
export declare const Content: ({ children, value, className, callback }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
