"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Tab } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <>
         <p>Tab</p>
      </>
   );
};

const Demo = () => {
   /*===============================================
	list
	===============================================*/
   const listArr = ["list1", "list2", "list3", "list4", "list5"];
   const List = ({ title }: { title: string }) => {
      return <span>{title}</span>;
   };
   const listChildren = listArr.map((title) => (
      <List title={title} key={title} />
   ));

   /*===============================================
	content
	===============================================*/
   const contentArr = [
      "content1content1content1",
      "content2content2content2",
      "content3content3content3",
      "content4content4content4",
      "content5content5content5",
   ];
   const Content = ({ title }: { title: string }) => {
      const titles = [...Array(10)].map((_, i) => <p key={i}>{title}</p>);
      return <div className={s.content}>{titles}</div>;
   };
   const contentChildren = contentArr.map((title) => (
      <Content title={title} key={title} />
   ));

   return (
      <Tab
         lists={{
            wrapperClassName: s.wrapper,
            buttonClassName: s.button,
            isViewClassName: s.isView,
            children: listChildren,
         }}
         contents={{
            children: contentChildren,
         }}
         callback={{
            leave: (target) => {
               return new Promise((resolve) => {
                  gsap.context(() => {
                     gsap.to("p", {
                        y: 80,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.03,
                        },
                        onComplete: () => {
                           resolve(null);
                        },
                     });
                  }, target);
               });
            },
            enter: (target) => {
               gsap.context(() => {
                  gsap.fromTo(
                     "p",
                     {
                        y: 80,
                        opacity: 0,
                     },
                     {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.03,
                        },
                     }
                  );
               }, target);
            },
         }}
      />
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Demo = () => {
   /*===============================================
	list
	===============================================*/
   const listArr = ["list1", "list2", "list3", "list4", "list5"];
   const List = ({ title }: { title: string }) => {
      return <span>{title}</span>;
   };
   const listChildren = listArr.map((title) => (
      <List title={title} key={title} />
   ));

   /*===============================================
	content
	===============================================*/
   const contentArr = [
      "content1content1content1",
      "content2content2content2",
      "content3content3content3",
      "content4content4content4",
      "content5content5content5",
   ];
   const Content = ({ title }: { title: string }) => {
      const titles = [...Array(10)].map((_, i) => <p key={i}>{title}</p>);
      return <div className={s.content}>{titles}</div>;
   };
   const contentChildren = contentArr.map((title) => (
      <Content title={title} key={title} />
   ));

   return (
      <Tab
         lists={{
            wrapperClassName: s.wrapper,
            buttonClassName: s.button,
            isViewClassName: s.isView,
            children: listChildren,
         }}
         contents={{
            children: contentChildren,
         }}
         callback={{
            leave: (target) => {
               return new Promise((resolve) => {
                  gsap.context(() => {
                     gsap.to("p", {
                        y: 80,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.03,
                        },
                        onComplete: () => {
                           resolve(null);
                        },
                     });
                  }, target);
               });
            },
            enter: (target) => {
               gsap.context(() => {
                  gsap.fromTo(
                     "p",
                     {
                        y: 80,
                        opacity: 0,
                     },
                     {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: {
                           each: 0.03,
                        },
                     }
                  );
               }, target);
            },
         }}
      />
   );
};`}
         />
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
