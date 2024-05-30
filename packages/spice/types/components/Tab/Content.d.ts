/// <reference types="react" />
export type ContentProps = {
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    /** onOpen,onClose,onReset(onReset is callback if isAnimation is false when use useTabSwitch) */
    callback?: {
        onOpen?: (target: Element) => void;
        onClose?: (target: Element) => void;
        onReset?: (target: Element) => void;
    };
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Content: ({ children, value, callback, style, ...rest }: ContentProps) => import("react/jsx-runtime").JSX.Element;
