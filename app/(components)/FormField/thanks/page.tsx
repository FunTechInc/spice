"use client";

import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return <h1>Thank you!</h1>;
};

const Page = () => {
   return <MainView title="Thank you!" description={<Description />} />;
};

export default Page;
