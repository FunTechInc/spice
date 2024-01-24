/// <reference types="react" />
type ModalProps = {
    className?: string;
    /** default is button */
    tag?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    dialog: {
        children: React.ReactNode;
        className?: string;
    };
    /** onOpen,onClose */
    callback?: {
        onOpen?: (dialog: Element) => void;
        onClose?: (dialog: Element) => void;
    };
};
export declare const Modal: ({ children, tag, className, dialog, callback, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
