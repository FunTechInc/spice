"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useLenis } from "@/app/useLenis";
import { InfinityLoopOnView } from "@/packages/spice/src/client";
import { useEffect, useRef } from "react";

const Demo = () => {
   const lenis = useLenis((s) => s.lenis);
   const speedRef = useRef(1);

   useEffect(() => {
      if (!lenis) return;

      const onScroll = (lenis: { direction: number; velocity: number }) => {
         speedRef.current = lenis.velocity + lenis.direction;
      };

      lenis.on("scroll", onScroll);
      return () => lenis.off("scroll", onScroll);
   }, [lenis]);

   return (
      <InfinityLoopOnView
         speed={speedRef}
         style={{ backgroundColor: "yellow", width: "500px" }}>
         <p
            style={{
               fontSize: "120px",
               textAlign: "justify",
            }}>
            hgoehogheoghgoeh
         </p>
      </InfinityLoopOnView>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<InfinityLoopOnView>
            <p style={{ fontSize: "120px" }}>hgoehogheogheoghoehgoehgo</p>
         </InfinityLoopOnView>`}
      />
   );
};

const Page = () => {
   return <MainView title="InfinityLoop" demo={<Demo />} code={<Code />} />;
};

export default Page;
