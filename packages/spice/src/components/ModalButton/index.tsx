"use client";

import { useRef, useEffect, useCallback, forwardRef } from "react";
import { promiseMaker } from "../../utils/promiseMaker";

export type ModalButtonProps = {
   dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
   /** set focus to `focusTarget` when the modal is opened */
   focusTarget?: React.RefObject<HTMLElement>;
   onOpen?: (dialog: Element) => void;
   onClose?: (dialog: Element) => void;
   /** scroll lock behavior. default : `true` */
   scrollLock?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type StyleStore = {
   paddingRight: number;
   scrollbarWidth: number;
};

const DIALOG_STYLE: React.CSSProperties = {
   border: "none",
   background: "none",
   maxWidth: "100%",
   maxHeight: "100%",
   width: "100%",
   height: "100%",
   padding: "0",
   pointerEvents: "auto",
};

export const MODAL_CLASSNAME = {
   close: "spice__modal_close",
   scrollArea: "js_modal_scroll_area",
};

const getPaddingRight = () =>
   parseInt(getComputedStyle(document.documentElement).paddingRight, 10) || 0;
const getScrollbarWidth = () =>
   window.innerWidth - document.documentElement.clientWidth;

const toggleScrollLock = (
   lock: boolean,
   { paddingRight, scrollbarWidth }: StyleStore
) => {
   const htmlRootStyle = document.documentElement.style;
   const bodyStyle = document.body.style;
   const adjustedPaddingRight = lock
      ? paddingRight + scrollbarWidth
      : paddingRight - scrollbarWidth;
   htmlRootStyle.paddingRight = `${adjustedPaddingRight}px`;
   htmlRootStyle.scrollbarGutter = lock ? "auto" : "";
   bodyStyle.overflow = lock ? "hidden" : "";
};

export const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(
   (
      { dialog, onOpen, onClose, focusTarget, scrollLock = true, ...rest },
      ref
   ) => {
      const dialogRef = useRef<HTMLDialogElement>(null);
      const styleStore = useRef<StyleStore>({
         paddingRight: 0,
         scrollbarWidth: 0,
      });

      const showModal = useCallback(() => {
         if (scrollLock) {
            styleStore.current.paddingRight = getPaddingRight();
            styleStore.current.scrollbarWidth = getScrollbarWidth();
            toggleScrollLock(true, styleStore.current);
         }
         dialogRef.current!.showModal();
         focusTarget?.current?.focus();
         dialogRef.current
            ?.getElementsByClassName(MODAL_CLASSNAME.scrollArea)[0]
            ?.scrollTo(0, 0);
         onOpen?.(dialogRef.current!);
      }, [onOpen, focusTarget, scrollLock]);

      const closeModal = useCallback(async () => {
         if (onClose) {
            await promiseMaker(onClose(dialogRef.current!));
         }
         if (scrollLock) {
            styleStore.current.paddingRight = getPaddingRight();
            toggleScrollLock(false, styleStore.current);
         }
         dialogRef.current!.close();
      }, [onClose, scrollLock]);

      // close the modal when ‘spice__modal_close’ is clicked.
      useEffect(() => {
         const closeBtn = dialogRef.current!.querySelectorAll(
            `.${MODAL_CLASSNAME.close}`
         );
         if (!closeBtn) return;
         closeBtn.forEach((element) =>
            element.addEventListener("click", closeModal)
         );
         return () =>
            closeBtn.forEach((element) =>
               element.removeEventListener("click", closeModal)
            );
      }, [closeModal]);

      // close the modal when the Esc key on the keyboard is pressed.
      useEffect(() => {
         const keyDownHandler = (event: globalThis.KeyboardEvent) => {
            const isOpen = dialogRef.current?.hasAttribute("open");
            if (isOpen && event.key === "Escape") closeModal();
         };
         window.addEventListener("keydown", keyDownHandler);
         return () => window.removeEventListener("keydown", keyDownHandler);
      }, [closeModal]);

      return (
         <>
            <button
               ref={ref}
               {...rest}
               onClick={(e) => {
                  showModal();
                  rest?.onClick?.(e);
               }}
            />
            <dialog
               ref={dialogRef}
               {...dialog}
               onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
                  if (e.target === dialogRef.current) closeModal();
                  dialog.onClick?.(e);
               }}
               style={{
                  ...DIALOG_STYLE,
                  ...(dialog.style || {}),
               }}
            />
         </>
      );
   }
);

ModalButton.displayName = "ModalButton";
