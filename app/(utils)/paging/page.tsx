"use client";

import { MainView } from "@/app/_component/MainView";
import { utils } from "@/packages/spice/src/server";

const Description = () => {
   return <ul></ul>;
};

const Demo = () => {
   console.log(utils.getPageRange(10, 2));
   console.log(utils.getPaginationRange(1, 20, 1));
   return <p>console log</p>;
};

const Page = () => {
   return (
      <MainView title="paging" demo={<Demo />} description={<Description />} />
   );
};

export default Page;
