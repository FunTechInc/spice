"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Dropdown } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <>
         <p>dropdown menu </p>
      </>
   );
};

const DropdownBlock = ({
   position,
}: {
   position: "bottom-center" | "top-left" | "right-center" | "left-top";
}) => {
   return (
      <Dropdown
         position={position}
         buttonComponent={<button className={s.button}>{position}</button>}
         contentComponent={
            <div className={s.content}>
               <p>content</p>
               <p>content</p>
            </div>
         }
         callback={{
            enter: (target) => {
               gsap.context(() => {
                  gsap.fromTo(
                     "p",
                     {
                        x: 16,
                     },
                     {
                        x: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.05,
                        },
                     }
                  );
               }, target);
               gsap.fromTo(
                  target,
                  {
                     opacity: 0,
                     y: 16,
                  },
                  {
                     opacity: 1,
                     y: 0,
                     duration: 0.6,
                     ease: "power3.out",
                  }
               );
            },
            leave: (target) => {
               return new Promise((resolve) => {
                  gsap.to(target, {
                     y: 16,
                     opacity: 0,
                     duration: 0.6,
                     ease: "power3.out",
                     onComplete: () => {
                        resolve(null);
                     },
                  });
                  gsap.context(() => {
                     gsap.to("p", {
                        x: -16,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.05,
                        },
                     });
                  }, target);
               });
            },
         }}
      />
   );
};

const Demo = () => {
   return (
      <div className={s.wrapper}>
         <DropdownBlock position="left-top" />
         <DropdownBlock position="top-left" />
         <DropdownBlock position="right-center" />
         <DropdownBlock position="bottom-center" />
      </div>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`position:
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left-top"
| "left-center"
| "left-bottom"
| "right-top"
| "right-center"
| "right-bottom"
| "top-left"
| "top-center"
| "top-right";`}
         />
         <p>options you can use.</p>
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="Dropdown"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
