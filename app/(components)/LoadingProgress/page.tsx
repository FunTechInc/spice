"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { LoadingProgress } from "@/packages/spice/src/client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import s from "./index.module.scss";

const Description = () => {
   return (
      <>
         <ul>
            <li>Component that counts up to 100</li>
         </ul>
      </>
   );
};

const Demo = () => {
   const onesRef = useRef<HTMLDivElement>(null);
   const tensRef = useRef<HTMLDivElement>(null);
   const hundredsRef = useRef<HTMLDivElement>(null);
   const barRef = useRef<HTMLDivElement>(null);

   const updateProgress = LoadingProgress.useLoadingProgress({
      onesRef: onesRef,
      tensRef: tensRef,
      hundredsRef: hundredsRef,
      onProgress: ({ digitContainer, duration, digit, percent }) => {
         gsap.set(digitContainer, {
            y: 0,
            overwrite: true,
         });
         gsap.to(digitContainer, {
            y: "-50%",
            duration: duration,
            ease: digit === 1 ? "power0" : "power2.out",
         });
         barRef.current!.style.width = `${percent}%`;
      },
      onStart: (targets) => {
         gsap.fromTo(
            targets,
            {
               y: "8",
               opacity: 0,
            },
            {
               y: "-0.05em",
               opacity: 1,
               duration: 1.2,
               ease: "power2.out",
               stagger: {
                  each: 0.05,
               },
            }
         );
      },
      onComplete: (targets) => {
         return new Promise((resolve) => {
            gsap.to(targets, {
               y: -8,
               opacity: 0,
               duration: 1.2,
               ease: "power2.out",
               stagger: {
                  each: 0.05,
               },
               onComplete: () => {
                  resolve(null);
               },
            });
            gsap.to(barRef.current, {
               width: "0%",
               opacity: 0,
               duration: 1.2,
               ease: "power2.out",
            });
         });
      },
   });

   useEffect(() => {
      (async () => {
         const percent = await updateProgress(100);
         console.log(percent);
      })();
   }, [updateProgress]);

   return (
      <div className={s.wrapper}>
         <div className={s.percentage}>
            <LoadingProgress.Digit className={s.num} ref={hundredsRef} />
            <LoadingProgress.Digit className={s.num} ref={tensRef} />
            <LoadingProgress.Digit className={s.num} ref={onesRef} />
         </div>
         <div ref={barRef} className={s.bar}></div>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   const onesRef = useRef<HTMLDivElement>(null);
   const tensRef = useRef<HTMLDivElement>(null);
   const hundredsRef = useRef<HTMLDivElement>(null);
   const barRef = useRef<HTMLDivElement>(null);

   const updateProgress = LoadingProgress.useLoadingProgress({
      onesRef: onesRef,
      tensRef: tensRef,
      hundredsRef: hundredsRef,
      onProgress: ({ digitContainer, duration, digit, percent }) => {
         gsap.set(digitContainer, {
            y: 0,
            overwrite: true,
         });
         gsap.to(digitContainer, {
            y: "-50%",
            duration: duration,
            ease: digit === 1 ? "power0" : "power2.out",
         });
         barRef.current!.style.width = \`\${percent}%\`;
      },
      onStart: (targets) => {
         gsap.fromTo(
            targets,
            {
               y: "8",
               opacity: 0,
            },
            {
               y: "-0.05em",
               opacity: 1,
               duration: 1.2,
               ease: "power2.out",
               stagger: {
                  each: 0.05,
               },
            }
         );
      },
      onComplete: (targets) => {
         gsap.to(targets, {
            y: -8,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: {
               each: 0.05,
            },
         });
         gsap.to(barRef.current, {
            width: "0%",
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
         });
      },
   });

   useEffect(() => {
      (async () => {
         const percent = await updateProgress(100);
         console.log(percent);
      })();
   }, [updateProgress]);

   return (
      <div className={s.wrapper}>
         <div className={s.percentage}>
            <LoadingProgress.Digit className={s.num} ref={hundredsRef} />
            <LoadingProgress.Digit className={s.num} ref={tensRef} />
            <LoadingProgress.Digit className={s.num} ref={onesRef} />
         </div>
         <div ref={barRef} className={s.bar}></div>
      </div>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="LoadingProgress"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
