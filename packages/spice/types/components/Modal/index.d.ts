/// <reference types="react" />
type ModalProps = {
    className?: string;
    children: React.ReactNode;
    dialog: {
        children: React.ReactNode;
        className?: string;
    };
    /** onOpen,onClose */
    callback?: {
        onOpen?: (target: Element) => void;
        onClose?: (target: Element) => void;
    };
};
export declare const Modal: ({ children, className, dialog, callback, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
