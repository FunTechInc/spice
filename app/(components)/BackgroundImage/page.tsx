"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import {
   BackgroundImage,
   useIsomorphicLayoutEffect,
} from "@/packages/spice/src";
import s from "./style.module.scss";
import { useRef } from "react";

const Description = () => {
   return (
      <ul>
         <li>
            When you wrap an image with BackgroundImage, it will always be fixed
            in the center.
         </li>
         <li>
            You can set the ratio. If you enter a number, it will be set as
            padding-top.
         </li>
      </ul>
   );
};

const Demo = () => {
   const ref = useRef(null);
   useIsomorphicLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const parallax = gsap.to(ref.current, {
         y: "-8%",
         scrollTrigger: {
            start: "top bottom-=10%",
            trigger: ref.current,
            scrub: 2.4,
            markers: true,
         },
      });
      return () => {
         parallax.revert();
      };
   }, []);
   return (
      <>
         <BackgroundImage ratio={"16-9"} className={s.hover}>
            <Image
               src={"/logo-l.jpg"}
               width={1200}
               height={630}
               alt="FunTech Inc"
            />
            <div className={s.mask}></div>
         </BackgroundImage>
         <p>hover sample</p>
         <BackgroundImage ratio={"silver"} className={s.parallax}>
            <Image
               ref={ref}
               src={"/logo-l.jpg"}
               width={1200}
               height={630}
               alt="FunTech Inc"
            />
         </BackgroundImage>
         <p>parallax sample</p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`interface IBackgroundImage {
   ratio:
      | "golden"
      | "silver"
      | "platinum"
      | "16-9"
      | "square"
      | "3-2"
      | "4-3"
      | number;
   children: React.ReactNode;
   className?: string;
}`}
         />
         <CodeBlock
            code={`const Demo = () => {
   const ref = useRef(null);
   useIsomorphicLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const parallax = gsap.to(ref.current, {
         y: "-8%",
         scrollTrigger: {
            start: "top bottom-=10%",
            trigger: ref.current,
            scrub: 2.4,
            markers: true,
         },
      });
      return () => {
         parallax.revert();
      };
   }, []);
   return (
      <>
         <BackgroundImage ratio={"16-9"} className={s.hover}>
            <Image
               src={"/ogp.jpg"}
               width={1200}
               height={630}
               alt="FunTech Inc"
            />
            <div className={s.mask}></div>
         </BackgroundImage>
         <p>hover sample</p>
         <BackgroundImage ratio={"16-9"} className={s.parallax}>
            <Image
               ref={ref}
               src={"/ogp.jpg"}
               width={1200}
               height={630}
               alt="FunTech Inc"
            />
         </BackgroundImage>
         <p>parallax sample</p>
      </>
   );
};`}></CodeBlock>
         <CodeBlock
            code={`.hover {
   img {
      transition: 0.6s;
      transition-property: transform;
   }
   &:hover {
      img {
         transform: scale(1.1);
      }
   }
}
.parallax {
   img {
      height: 116%;
   }
}
.mask {
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   top: 0;
   left: 0;
   z-index: 10;
}
`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="BackgroundImage"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
