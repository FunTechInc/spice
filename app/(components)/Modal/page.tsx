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
               callbackのclose()にpromiseを返すと、dialogのcloseを待たせることができます
            </li>
            <li>
               content内にいれるcloseボタンには、spice__modal_closeクラスをつけてください
            </li>
            <li>
               dialogを使って実装してるので、overscroll-behaviorを使えば、スマホ時も背景のスクロールを禁止できるのですが、navバーがずれる時などで、スクロールが有効になってしまいます。これを回避するには、open時にbodyを100svhにして、スクロール位置の保存と復元を開閉時にする、みたいなことをすればいいと思います。このデモではzustandでグローバルで管理したstateに応じて、lenisを操作しています。
               <br />
               <a
                  href="https://github.com/studio-freight/react-lenis"
                  target="_blank">
                  https://github.com/studio-freight/react-lenis
               </a>
               <br />
               <a href="https://github.com/pmndrs/zustand" target="_blank">
                  https://github.com/pmndrs/zustand
               </a>
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
               open: (dialog) => {
                  setIsModal(true);
                  const content =
                     dialog.getElementsByClassName("js_modal_content")[0];
                  content.scrollTop = 0;
               },
               close: () => {
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
               open: (props) => {
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
               close: (props) => {
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
      <>
         <CodeBlock code={`overscroll-behavior: contain;`} />
         <p>
            Inside the dialog, dont forget to apply this style to the content
            you want to scroll.
         </p>
         <CodeBlock
            code={`interface IModal {
   className?: string;
   children: React.ReactNode;
   dialog: {
      children: React.ReactNode;
      className?: string;
   };
   callback?: {
      open?: (target: Element) => void;
      close?: (target: Element) => void;
   };
}`}
         />
         <CodeBlock
            code={`<Modal
	className={s.button}
	dialog={{ children: <ModalContent />, className: s.dialog }}>
	<span>Show Modal</span>
</Modal>`}
         />
      </>
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
