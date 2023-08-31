/// <reference types="react" />
interface IModal {
    className?: string;
    children: React.ReactNode;
    dialog: {
        children: React.ReactNode;
        className?: string;
    };
    callback?: {
        onOpen?: (target: Element) => void;
        onClose?: (target: Element) => void;
    };
}
/**
 * @param callback onOpen,onClose
 */
export declare const Modal: ({ children, className, dialog, callback }: IModal) => import("react/jsx-runtime").JSX.Element;
export {};
