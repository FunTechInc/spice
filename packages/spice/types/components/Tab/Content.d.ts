/// <reference types="react" />
interface IContent {
    children: React.ReactNode;
    value: string;
    className?: string;
    callback?: {
        onOpen?: (target: Element) => void;
        onClose?: (target: Element) => void;
        onReset?: (target: Element) => void;
    };
}
/**
 * @param value string Please make sure to set it with the value of the Button component.
 * @param callback onOpen,onClose,onReset(callback if isAnimation is false when use useTabSwitch)
 */
export declare const Content: ({ children, value, className, callback }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
