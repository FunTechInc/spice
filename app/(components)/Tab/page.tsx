"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Tab } from "@/packages/spice/src/client";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <ul>
         <li>
            If you return a promise in the callback, it will wait for that
            promise to complete before switching.
         </li>
      </ul>
   );
};

const SwitchButton = () => {
   const tabSwitch = Tab.useTabSwitch();
   return (
      <div className={s.switchButtonWrapper}>
         <button
            onClick={() => {
               tabSwitch("tab_2", false);
            }}>
            tag_2
         </button>
         <button
            onClick={() => {
               tabSwitch("tab_3", true);
            }}>
            tag_3
         </button>
      </div>
   );
};

const Demo = () => {
   const Buttons = [...Array(5)].map((_, i) => (
      <Tab.Button className={s.button} value={`tab_${i}`} key={`tab_${i}`}>
         ボタン
      </Tab.Button>
   ));
   const Contents = [...Array(5)].map((_, i) => (
      <Tab.Content
         className={s.content}
         value={`tab_${i}`}
         key={`tab_${i}`}
         onClose={(target) => {
            return new Promise((resolve) => {
               gsap.context(() => {
                  gsap.to("p,button", {
                     opacity: 0,
                     y: -16,
                     onComplete: () => {
                        resolve(null);
                     },
                  });
               }, target);
            });
         }}
         onOpen={(target) => {
            gsap.context(() => {
               gsap.fromTo(
                  "p,button",
                  {
                     opacity: 0,
                     y: 16,
                  },
                  {
                     opacity: 1,
                     y: 0,
                  }
               );
            }, target);
         }}
         onReset={(target) => {
            gsap.context(() => {
               gsap.set("p,button", {
                  opacity: 1,
                  y: 0,
               });
            }, target);
         }}>
         <p>{`tab_${i}`}</p>
         <button>ボタン</button>
      </Tab.Content>
   ));

   return (
      <Tab.Context defaultValue="tab_0">
         <SwitchButton />
         <div className={s.buttonWrapper}>{Buttons}</div>
         <div className={s.contentWrapper}>{Contents}</div>
      </Tab.Context>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   const Buttons = [...Array(5)].map((_, i) => (
      <Tab.Button className={s.button} value={"value"} key={"key"}>
         ボタン
      </Tab.Button>
   ));
   const Contents = [...Array(5)].map((_, i) => (
      <Tab.Content
         className={s.content}
         value={"value"}
         key={"key"}
         callback={{
            onClose: (target) => {
               return new Promise((resolve) => {
                  gsap.context(() => {
                     gsap.to("p,button", {
                        opacity: 0,
                        y: -16,
                        onComplete: () => {
                           resolve(null);
                        },
                     });
                  }, target);
               });
            },
            onOpen: (target) => {
               gsap.context(() => {
                  gsap.fromTo(
                     "p,button",
                     {
                        opacity: 0,
                        y: 16,
                     },
                     {
                        opacity: 1,
                        y: 0,
                     }
                  );
               }, target);
            },
            onReset: (target) => {
               gsap.context(() => {
                  gsap.set("p,button", {
                     opacity: 1,
                     y: 0,
                  });
               }, target);
            },
         }}>
         <p>{}</p>
         <button>ボタン</button>
      </Tab.Content>
   ));

   return (
      <Tab.Context defaultValue="tab_0">
         <SwitchButton />
         <div className={s.buttonWrapper}>{Buttons}</div>
         <div className={s.contentWrapper}>{Contents}</div>
      </Tab.Context>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="Tab"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
