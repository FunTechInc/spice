import Link from "next/link";
import s from "./header.module.scss";
import { MainInner } from "@/app/_layout/MainInner/MainInner";
import { useScrollDirection } from "@/packages/spice/src";
import { Dropdown } from "@/packages/spice/src";
import { gsap } from "gsap";

export const Header = () => {
   const direction = useScrollDirection({
      debounce: 10,
      threshold: 10,
   });

   return (
      <header
         className={`${s.header} ${direction === "down" ? s.scorll_down : ""}`}>
         <MainInner className={s.inner}>
            <Link href="/">(hidden)spice</Link>
            <Dropdown
               position="bottom-center"
               parent={{
                  children: (
                     <button className={s.dropdown_button}>View Source</button>
                  ),
               }}
               content={{
                  children: (
                     <div className={s.dropdown_content}>
                        <a
                           href="https://github.com/FunTechInc/spice"
                           target="_blank">
                           GitHub
                        </a>
                        <a
                           href="https://github.com/FunTechInc/spice"
                           target="_blank">
                           npm
                        </a>
                     </div>
                  ),
               }}
               callback={{
                  enter: (target) => {
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
                     });
                  },
               }}
            />
         </MainInner>
      </header>
   );
};
