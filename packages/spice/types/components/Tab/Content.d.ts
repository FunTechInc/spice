/// <reference types="react" />
export type ContentProps = {
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    onOpen?: (target: Element) => void;
    onClose?: (target: Element) => void;
    /** callback if isAnimation is false when use useTabSwitch */
    onReset?: (target: Element) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Content: ({ children, value, onOpen, onClose, onReset, style, ...rest }: ContentProps) => import("react/jsx-runtime").JSX.Element;
