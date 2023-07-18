/// <reference types="react" />
interface IContent {
    children: React.ReactNode;
    value: string;
    className?: string;
    callback?: {
        open?: (target: Element) => void;
        close?: (target: Element) => void;
    };
}
export declare const Content: ({ children, value, className, callback }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
