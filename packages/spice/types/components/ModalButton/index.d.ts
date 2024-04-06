/// <reference types="react" />
export type ModalButtonProps = {
    className?: string;
    /** default is `button` */
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
export declare const ModalButton: ({ children, tag, className, dialog, callback, }: ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
