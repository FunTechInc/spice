"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { ParallaxThumbnail, Parallax } from "@/packages/spice/src/client";
import Image from "next/image";

const Demo = () => {
   return (
      <ParallaxThumbnail
         y={"20%"}
         style={{ width: "100%", height: "400px", position: "relative" }}>
         <Image
            src={"/app-head.jpg"}
            fill
            alt=""
            sizes="50vw"
            style={{ objectFit: "cover" }}
         />
      </ParallaxThumbnail>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<ParallaxThumbnail
         y={"20%"}
         style={{ width: "100%", height: "400px", position: "relative" }}>
         <Image
            src={"/app-head.jpg"}
            fill
            alt=""
            sizes="50vw"
            style={{ objectFit: "cover" }}
         />
      </ParallaxThumbnail>`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="Parallax/ParallxThumbnail"
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
