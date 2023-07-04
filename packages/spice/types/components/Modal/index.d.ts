/// <reference types="react" />
interface IModal {
    className?: string;
    children: React.ReactNode;
    dialog: {
        children: React.ReactNode;
        className?: string;
    };
    callback?: {
        open?: (target: Element) => void;
        close?: (target: Element) => void;
    };
}
export declare const Modal: ({ children, className, dialog, callback }: IModal) => import("react/jsx-runtime").JSX.Element;
export {};
