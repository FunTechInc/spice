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
export declare const ModalButton: import("react").ForwardRefExoticComponent<{
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    /** set focus to `focusTarget` when the modal is opened */
    focusTarget?: import("react").RefObject<HTMLElement> | undefined;
    /** onOpen,onClose */
    callback?: {
        onOpen?: ((dialog: Element) => void) | undefined;
        onClose?: ((dialog: Element) => void) | undefined;
    } | undefined;
} & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
