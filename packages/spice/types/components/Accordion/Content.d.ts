/// <reference types="react" />
type ClickHandler = {
    height: number;
    target: HTMLDivElement;
};
export type ContentProps = {
    children: React.ReactNode;
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    className?: string;
    /** onOpen,onClose */
    callback: {
        onOpen: (props: ClickHandler) => void;
        onClose: (props: ClickHandler) => void;
    };
};
export declare const Content: ({ value, callback, children, className, }: ContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
