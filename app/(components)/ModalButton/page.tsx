"use client";
import { MainView } from "@/app/_component/MainView";
import { ModalButton, MODAL_CLASSNAME } from "@/packages/spice/src/client";
import { useStore } from "@/app/_context/store";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useCallback, useRef } from "react";
import classNames from "classnames";
import { FocusTrap } from "@mui/base";
import s from "./style.module.scss";

const Description = () => {
   return (
      <>
         <ul>
            <li>
               If you return a promise to the close() in the callback, you can
               make it wait for the dialog to close.
            </li>
            <li>
               Please apply the spice__modal_close class to the close button
               within the content.
            </li>
            <li>
               Since it is implemented using a dialog, you can use
               overscroll-behavior to prevent the background from scrolling even
               on smartphones. However, scrolling becomes enabled when the nav
               bar shifts, etc. To avoid this, you should do something like
               setting the body to 100svh when opening and save and restore the
               scroll position when opening and closing. In this demo,{" "}
               <a
                  href="https://github.com/studio-freight/react-lenis"
                  target="_blank">
                  Lenis
               </a>{" "}
               is operated according to the state managed globally with{" "}
               <a href="https://github.com/pmndrs/zustand" target="_blank">
                  zustand
               </a>
               .
            </li>
         </ul>
      </>
   );
};

const CONTENT_CLASSNAME = "js_modal_content";

const Demo = () => {
   const setIsModal = useStore((state: any) => state.setIsModalOpen);
   const closeBtnRef = useRef<HTMLButtonElement>(null);
   const scopeRef = useRef<HTMLDivElement>(null);

   const { contextSafe } = useGSAP({ scope: scopeRef });

   const handleOpen = useCallback(() => {
      setIsModal(true);
      contextSafe(() => {
         gsap.fromTo(
            `.${CONTENT_CLASSNAME}`,
            {
               opacity: 0,
            },
            {
               opacity: 1,
               duration: 0.3,
               ease: "power3.out",
            }
         );
      })();
   }, [contextSafe, setIsModal]);

   const handleClose = useCallback(() => {
      setIsModal(false);
      return new Promise((resolve) => {
         contextSafe((resolve: (value: unknown) => void) => {
            gsap.to(`.${CONTENT_CLASSNAME}`, {
               opacity: 0,
               duration: 0.3,
               ease: "power1.out",
               onComplete: () => {
                  resolve(null);
               },
            });
         })(resolve);
      });
   }, [contextSafe, setIsModal]);

   return (
      <div ref={scopeRef} className={s.wrapper}>
         <ModalButton
            focusTarget={closeBtnRef}
            className={s.button}
            dialog={{
               children: (
                  <FocusTrap open={true}>
                     <div
                        tabIndex={-1}
                        className={classNames(
                           s.modalContentContainer,
                           CONTENT_CLASSNAME
                        )}>
                        <div
                           className={classNames(
                              s.modalContent,
                              MODAL_CLASSNAME.scrollArea
                           )}
                           data-lenis-prevent>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ex dolor nostrum ea accusantium
                              magni quisquam esse minima provident ut odio
                              delectus iste, tenetur nobis corrupti laborum
                              mollitia vitae vero ipsam.Lorem ipsum dolor sit
                              amet, consectetur adipisicing elit. Ex dolor
                              nostrum ea accusantium magni quisquam esse minima
                              provident ut odio delectus iste, tenetur nobis
                              corrupti laborum mollitia vitae vero ipsam.Lorem
                              ipsum dolor sit amet, consectetur adipisicing
                              elit. Ex dolor nostrum ea accusantium magni
                              quisquam esse minima provident ut odio delectus
                              iste, tenetur nobis corrupti laborum mollitia
                              vitae vero ipsam.
                              <button>hogehoge</button>
                           </p>
                           <button
                              ref={closeBtnRef}
                              className={classNames(
                                 s.modalClose,
                                 MODAL_CLASSNAME.close
                              )}>
                              close
                           </button>
                        </div>
                     </div>
                  </FocusTrap>
               ),
            }}
            onOpen={handleOpen}
            onClose={handleClose}>
            <span>with Animation</span>
         </ModalButton>
      </div>
   );
};

const Page = () => {
   return (
      <MainView
         title="ModalButton"
         description={<Description />}
         demo={<Demo />}
      />
   );
};

export default Page;
