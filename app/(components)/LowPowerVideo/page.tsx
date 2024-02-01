"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { LowPowerVideo } from "@/packages/spice/src";
import Image from "next/image";
import s from "./index.module.scss";

const Description = () => {
   return (
      <>
         <ul>
            <li>
               In the low power mode of the iPhone, the video is not
               automatically played, so the fallback of the image is displayed
               instead.
            </li>
         </ul>
      </>
   );
};

const Demo = () => {
   return (
      <LowPowerVideo
         className={s.content}
         autoPlay
         loop
         muted
         preload={"none"}
         playsInline
         poster="/logo-l.jpg"
         src="/logo.mp4"
         fallback={
            <Image
               className={s.content}
               src={"/logo-l.jpg"}
               width={1440}
               height={966}
               alt=""
            />
         }
      />
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<LowPowerVideo
         className={s.content}
         autoPlay
         loop
         muted
         preload={"none"}
         playsInline
         poster="/logo-l.jpg"
         src="/logo.mp4"
         fallback={
            <Image
               className={s.content}
               src={"/logo-l.jpg"}
               width={1440}
               height={966}
               alt=""
            />
         }
      />`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="LowPowerVideo"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
