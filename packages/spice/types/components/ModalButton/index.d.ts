/// <reference types="react" />
export type ModalButtonProps = {
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    /** set focus to `focusTarget` when the modal is opened */
    focusTarget?: React.RefObject<HTMLElement>;
    /** onOpen,onClose */
    callback?: {
        onOpen?: (dialog: Element) => void;
        onClose?: (dialog: Element) => void;
    };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const ModalButton: ({ children, dialog, callback, focusTarget, ...rest }: ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
