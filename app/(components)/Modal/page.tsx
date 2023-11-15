"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Modal } from "@/packages/spice/src";
import { useStore } from "@/app/_context/store";
import { ModalContent } from "./ModalContent";
import s from "./style.module.scss";

import { gsap } from "gsap";

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
   return (
      <div className={s.wrapper}>
         <Modal
            className={s.button}
            dialog={{ children: <ModalContent />, className: s.dialog }}
            callback={{
               onOpen: (dialog) => {
                  setIsModal(true);
                  const content =
                     dialog.getElementsByClassName("js_modal_content")[0];
                  content.scrollTop = 0;
               },
               onClose: () => {
                  setIsModal(false);
               },
            }}>
            <span>Show Modal</span>
         </Modal>
         <Modal
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
               onOpen: (props) => {
                  setIsModal(true);
                  const content =
                     props.getElementsByClassName("js_modal_content")[0];
                  content.scrollTop = 0;
                  gsap.context(() => {
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
                  }, props);
               },
               onClose: (props) => {
                  setIsModal(false);
                  return new Promise((resolve) => {
                     gsap.context(() => {
                        gsap.to([".js_modal_backdrop", ".js_modal_content"], {
                           opacity: 0,
                           duration: 0.6,
                           ease: "power3.out",
                           onComplete: () => {
                              resolve(null);
                           },
                        });
                     }, props);
                  });
               },
            }}>
            <span>with Animation</span>
         </Modal>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<Modal
	className={s.button}
	dialog={{
		children: (
			<div
				className={"js_modal_backdrop"}>
				<ModalContent />
			</div>
		),
	}}
	callback={{
		onOpen: (props) => {
			setIsModal(true);
			const content =
				props.getElementsByClassName("js_modal_content")[0];
			content.scrollTop = 0;
			gsap.context(() => {
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
			}, props);
		},
		onClose: (props) => {
			setIsModal(false);
			return new Promise((resolve) => {
				gsap.context(() => {
					gsap.to([".js_modal_backdrop", ".js_modal_content"], {
						opacity: 0,
						duration: 0.6,
						ease: "power3.out",
						onComplete: () => {
							resolve(null);
						},
					});
				}, props);
			});
		},
	}}>
	<span>with Animation</span>
</Modal>`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="Modal"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
