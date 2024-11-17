"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { getPageRange, getPaginationRange } from "@/packages/spice/src/server";

const Description = () => {
   return <ul></ul>;
};

const Demo = () => {
   console.log(getPageRange(10, 2));
   console.log(getPaginationRange(1, 20, 1));
   return <p>console log</p>;
};

const Page = () => {
   return (
      <MainView title="paging" demo={<Demo />} description={<Description />} />
   );
};

export default Page;
