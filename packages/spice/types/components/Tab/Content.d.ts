/// <reference types="react" />
type ContentProps = {
    children: React.ReactNode;
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    className?: string;
    /** onOpen,onClose,onReset(onReset is callback if isAnimation is false when use useTabSwitch) */
    callback?: {
        onOpen?: (target: Element) => void;
        onClose?: (target: Element) => void;
        onReset?: (target: Element) => void;
    };
};
export declare const Content: ({ children, value, className, callback, }: ContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
