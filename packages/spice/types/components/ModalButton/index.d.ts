/// <reference types="react" />
export type ModalButtonProps = {
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    /** onOpen,onClose */
    callback?: {
        onOpen?: (dialog: Element) => void;
        onClose?: (dialog: Element) => void;
    };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const ModalButton: ({ children, dialog, callback, ...rest }: ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
