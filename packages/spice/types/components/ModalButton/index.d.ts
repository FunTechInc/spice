/// <reference types="react" />
export type ModalButtonProps = {
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    /** set focus to `focusTarget` when the modal is opened */
    focusTarget?: React.RefObject<HTMLElement>;
    onOpen?: (dialog: Element) => void;
    onClose?: (dialog: Element) => void;
    /** scroll lock behavior. default : `true` */
    scrollLock?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const MODAL_CLASSNAME: {
    close: string;
    scrollArea: string;
};
export declare const ModalButton: import("react").ForwardRefExoticComponent<{
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    /** set focus to `focusTarget` when the modal is opened */
    focusTarget?: import("react").RefObject<HTMLElement> | undefined;
    onOpen?: ((dialog: Element) => void) | undefined;
    onClose?: ((dialog: Element) => void) | undefined;
    /** scroll lock behavior. default : `true` */
    scrollLock?: boolean | undefined;
} & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
