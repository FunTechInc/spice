"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { ModalButton } from "@/packages/spice/src";
import { useStore } from "@/app/_context/store";
import { ModalContent } from "./ModalContent";
import s from "./style.module.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

const Demo = () => {
   const setIsModal = useStore((state: any) => state.setIsModalOpen);
   const ref = useRef<HTMLDivElement>(null);

   const { contextSafe } = useGSAP({ scope: ref });
   const openHandler = contextSafe(() => {
      gsap.fromTo(
         [".js_modal_backdrop", ".js_modal_content"],
         {
            opacity: 0,
         },
         {
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
         }
      );
   });
   const closeHandler = contextSafe((resolve: (value: unknown) => void) => {
      gsap.to([".js_modal_backdrop", ".js_modal_content"], {
         opacity: 0,
         duration: 0.6,
         ease: "power3.out",
         onComplete: () => {
            resolve(null);
         },
      });
   });

   return (
      <div ref={ref} className={s.wrapper}>
         <ModalButton
            className={s.button}
            dialog={{
               children: (
                  <div
                     className={`${s.modal_content_wrapper} js_modal_backdrop`}>
                     <ModalContent />
                  </div>
               ),
            }}
            callback={{
               onOpen: (dialog) => {
                  setIsModal(true);
                  const content =
                     dialog.getElementsByClassName("js_modal_content")[0];
                  content.scrollTop = 0;
                  openHandler();
               },
               onClose: () => {
                  setIsModal(false);
                  return new Promise((resolve) => {
                     closeHandler(resolve);
                  });
               },
            }}>
            <span>with Animation</span>
         </ModalButton>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   const setIsModal = useStore((state: any) => state.setIsModalOpen);
   const ref = useRef<HTMLDivElement>(null);

   const { contextSafe } = useGSAP({ scope: ref });
   const openHandler = contextSafe(() => {
      gsap.fromTo(
         [".js_modal_backdrop", ".js_modal_content"],
         {
            opacity: 0,
         },
         {
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
         }
      );
   });
   const closeHandler = contextSafe((resolve: (value: unknown) => void) => {
      gsap.to([".js_modal_backdrop", ".js_modal_content"], {
         opacity: 0,
         duration: 0.6,
         ease: "power3.out",
         onComplete: () => {
            resolve(null);
         },
      });
   });

   return (
      <div ref={ref} className={s.wrapper}>
         <ModalButton
            className={s.button}
            dialog={{
               children: (
                  <div
                     className={\`${s.modal_content_wrapper} js_modal_backdrop\`}>
                     <ModalContent />
                  </div>
               ),
            }}
            callback={{
               onOpen: (dialog) => {
                  setIsModal(true);
                  const content =
                     dialog.getElementsByClassName("js_modal_content")[0];
                  content.scrollTop = 0;
                  openHandler();
               },
               onClose: () => {
                  setIsModal(false);
                  return new Promise((resolve) => {
                     closeHandler(resolve);
                  });
               },
            }}>
            <span>with Animation</span>
         </ModalButton>
      </div>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="ModalButton"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
