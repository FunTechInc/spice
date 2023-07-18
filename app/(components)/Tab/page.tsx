"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Tab } from "@/packages/spice/src";
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
         callback={{
            close: (target) => {
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
            open: (target) => {
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
         }}>
         <p>{`tab_${i}`}</p>
         <button>ボタン</button>
      </Tab.Content>
   ));
   return (
      <Tab.Context defaultValue="tab_0">
         <div className={s.buttonWrapper}>{Buttons}</div>
         <div className={s.contentWrapper}>{Contents}</div>
      </Tab.Context>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`interface IContext {
   children: React.ReactNode;
   defaultValue: string;
}
interface IButton {
   children: React.ReactNode;
   value: string;
   className?: string;
}
interface IContent {
   children: React.ReactNode;
   value: string;
   className?: string;
   callback?: {
      open?: (target: Element) => void;
      close?: (target: Element) => void;
   };
}
			`}></CodeBlock>
         <CodeBlock
            code={`const Demo = () => {
   const Buttons = [...Array(5)].map((_, i) => (
      <Tab.Button className={s.button} value={\`tab_\${i}\`} key={\`tab_\${i}\`}>
         ボタン
      </Tab.Button>
   ));
   const Contents = [...Array(5)].map((_, i) => (
      <Tab.Content
         className={s.content}
         value={\`tab_\${i}\`}
         key={\`tab_\${i}\`}
         callback={{
            close: (target) => {
               return new Promise((resolve) => {
                  gsap.context(() => {
                     gsap.to("p", {
                        opacity: 0,
                        y: -16,
                        onComplete: () => {
                           resolve(null);
                        },
                     });
                  }, target);
               });
            },
            open: (target) => {
               gsap.context(() => {
                  gsap.fromTo(
                     "p",
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
         }}>
         <p>{\`tab_\${i}\`}</p>
      </Tab.Content>
   ));
   return (
      <Tab.Context defaultValue="tab_0">
         <div className={s.buttonWrapper}>{Buttons}</div>
         <div className={s.contentWrapper}>{Contents}</div>
      </Tab.Context>
   );
};
`}></CodeBlock>
      </>
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
