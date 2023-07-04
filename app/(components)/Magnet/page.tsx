"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Magnet } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <>
         <ul>
            <li>You can pass FPS.</li>
            <li>
               If you set stopPropagation to true, pointer-event:none; will be
               applied to children.
            </li>
         </ul>
      </>
   );
};

const Demo = () => {
   return (
      <>
         <Magnet
            className={s.wrapper}
            callback={{
               move: (props) => {
                  const animProps = { duration: 0.6, ease: "power1.out" };
                  let xTo = gsap.quickTo(props.target, "x", animProps),
                     yTo = gsap.quickTo(props.target, "y", animProps);
                  let childXTo = gsap.quickTo(props.children, "x", animProps),
                     childYTo = gsap.quickTo(props.children, "y", animProps);
                  xTo(props.x * 0.1);
                  yTo(props.y * 0.1);
                  childXTo(props.x * 0.3);
                  childYTo(props.y * 0.3);
               },
               leave: ({ target, children }) => {
                  gsap.to([target, children], {
                     x: 0,
                     y: 0,
                     duration: 0.6,
                     ease: "back.out(4)",
                     overwrite: true,
                  });
               },
            }}>
            <div className={s.magnetBall}></div>
         </Magnet>
         <Magnet
            fps={30}
            className={s.button_wrapper}
            callback={{
               move: ({ target, x, y }) => {
                  const animProps = { duration: 0.6, ease: "power1.out" };
                  let xTo = gsap.quickTo(target, "x", animProps),
                     yTo = gsap.quickTo(target, "y", animProps);
                  xTo(x * 0.3);
                  yTo(y * 0.3);
               },
               leave: ({ target }) => {
                  gsap.to(target, {
                     x: 0,
                     y: 0,
                     duration: 0.6,
                     ease: "back.out(4)",
                     overwrite: true,
                  });
               },
            }}>
            <a
               href="https://github.com/FunTechInc/spice"
               target="_blank"
               className={s.magnet_button}>
               Button
            </a>
         </Magnet>
         <Magnet
            className={s.balls_wrapper}
            callback={{
               move: ({ children, x, y }) => {
                  gsap.context(() => {
                     gsap.to("span", {
                        x: x * 0.6,
                        y: y * 0.6,
                        stagger: {
                           each: 0.02,
                        },
                     });
                  }, children);
               },
               leave: ({ children }) => {
                  gsap.context(() => {
                     gsap.to("span", {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(4)",
                        stagger: {
                           each: 0.02,
                        },
                     });
                  }, children);
               },
            }}>
            <div className={s.balls}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </Magnet>
         <Magnet
            fps={60}
            className={s.stalkerWrapper}
            callback={{
               move: ({ children, x, y }) => {
                  const animProps = { duration: 0.2, ease: "power1.out" };
                  let xTo = gsap.quickTo(children, "x", animProps),
                     yTo = gsap.quickTo(children, "y", animProps);
                  xTo(x * 1);
                  yTo(y * 1);
               },
               leave: ({ target, children }) => {
                  gsap.to([target, children], {
                     x: 0,
                     y: 0,
                     duration: 0.6,
                     ease: "back.out(4)",
                     overwrite: true,
                  });
               },
            }}
            stopPropagation={true}>
            <div className={s.stalker}></div>
         </Magnet>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`interface IMagnet {
   fps?: number;
   className?: string;
   children: React.ReactNode;
   callback: {
      move: (props: TCallbackProps) => void;
      leave?: (props: TCallbackProps) => void;
   };
   stopPropagation?: boolean;
}`}
         />
         <CodeBlock
            code={`<Magnet
	fps={60}
	className={s.stalkerWrapper}
	callback={{
		move: ({ children, x, y }) => {
			const animProps = { duration: 0.2, ease: "power1.out" };
			let xTo = gsap.quickTo(children, "x", animProps),
				yTo = gsap.quickTo(children, "y", animProps);
			xTo(x * 1);
			yTo(y * 1);
		},
		leave: ({ target, children }) => {
			gsap.to([target, children], {
				x: 0,
				y: 0,
				duration: 0.6,
				ease: "back.out(4)",
				overwrite: true,
			});
		},
	}}
	stopPropagation={true}>
	<div className={s.stalker}></div>
</Magnet>`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="Magnet"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
