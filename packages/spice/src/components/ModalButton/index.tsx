"use client";

import { useRef, useEffect, useCallback, forwardRef } from "react";
import { promiseMaker } from "../../utils/promiseMaker";

function toggleScroll(action: "add" | "remove") {
   const htmlRootStyle = document.documentElement.style;
   const bodyStyle = document.body.style;

   if (action === "add") {
      htmlRootStyle.scrollbarGutter = "stable";
      htmlRootStyle.overflow = "hidden";
      bodyStyle.overflow = "hidden";
   } else {
      htmlRootStyle.scrollbarGutter = "";
      htmlRootStyle.overflow = "";
      bodyStyle.overflow = "";
   }
}

export type ModalButtonProps = {
   dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
   /** set focus to `focusTarget` when the modal is opened */
   focusTarget?: React.RefObject<HTMLElement>;
   onOpen?: (dialog: Element) => void;
   onClose?: (dialog: Element) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CLOSE_BUTTON = "spice__modal_close";

const DIALOG_STYLE = {
   border: "none",
   background: "none",
   maxWidth: "100%",
   maxHeight: "100%",
   width: "100%",
   height: "100%",
   padding: "0",
   pointerEvents: "auto",
} as React.CSSProperties;

export const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(
   ({ dialog, onOpen, onClose, focusTarget, ...rest }, ref) => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      const showModal = useCallback(() => {
         toggleScroll("add");
         dialogRef.current!.showModal();
         focusTarget?.current?.focus();
         onOpen?.(dialogRef.current!);
      }, [onOpen, focusTarget]);

      const closeModal = useCallback(async () => {
         onClose && (await promiseMaker(onClose(dialogRef.current!)));
         toggleScroll("remove");
         dialogRef.current!.close();
      }, [onClose]);

      // close the modal when ‘spice__modal_close’ is clicked.
      useEffect(() => {
         const closeBtn = dialogRef.current!.querySelectorAll(
            `.${CLOSE_BUTTON}`
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
