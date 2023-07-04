/// <reference types="react" />
import { TCallback } from "./utils/clickHandler";
interface IAccordion {
    isView?: boolean;
    value: string;
    className: string;
    callback: TCallback;
    button: {
        children: React.ReactNode;
        className?: string;
    };
    content: {
        children: React.ReactNode;
        className?: string;
    };
}
export declare const Accordion: ({ isView, value, className, button, callback, content, }: IAccordion) => import("react/jsx-runtime").JSX.Element;
export {};
