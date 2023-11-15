"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Dropdown } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <ul>
         <li>
            If a promise is returned in the callback, it will wait for that
            promise to resolve before making the switch.
         </li>
      </ul>
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
         parent={{
            children: <button className={s.button}>{position}</button>,
         }}
         content={{
            children: (
               <div className={s.content}>
                  <p>content</p>
                  <p>content</p>
               </div>
            ),
         }}
         callback={{
            onEnter: (target) => {
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
            onLeave: (target) => {
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
      <CodeBlock
         code={`<Dropdown
	position={position}
	parent={{
		children: <button className={s.button}>{position}</button>,
	}}
	content={{
		children: (
			<div className={s.content}>
				<p>content</p>
				<p>content</p>
			</div>
		),
	}}
	callback={{
		onEnter: (target) => {
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
		onLeave: (target) => {
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
/>`}
      />
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
