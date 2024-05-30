/// <reference types="react" />
type ClickHandler = {
    height: number;
    target: HTMLDivElement;
};
export type ContentProps = {
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    /** onOpen,onClose */
    callback: {
        onOpen: (props: ClickHandler) => void;
        onClose: (props: ClickHandler) => void;
    };
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Content: ({ value, callback, children, ...rest }: ContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
