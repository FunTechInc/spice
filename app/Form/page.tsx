"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { FormField } from "@/packages/spice/src";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul className={s.description}>
         <li>props配列のlengthを2以上にするとリストになる</li>
      </ul>
   );
};

const Demo = () => {
   return (
      <form>
         <FormField
            className={s.field}
            label="One Column"
            formProps={[
               {
                  type: "text",
                  id: "form1",
                  placeholder: "hoge",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.flex}`}
            label="Two Column"
            formProps={[
               {
                  type: "text",
                  id: "form2-1",
                  placeholder: "piyo",
               },
               {
                  type: "text",
                  id: "form2-2",
                  placeholder: "piyo",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.radio}`}
            label="Radio"
            formProps={[
               {
                  type: "radio",
                  id: "radio-1",
                  value: "option1",
                  name: "radio-sample",
               },
               {
                  type: "radio",
                  id: "radio-2",
                  value: "option2",
                  name: "radio-sample",
               },
               {
                  type: "radio",
                  id: "radio-3",
                  value: "option3",
                  name: "radio-sample",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.check}`}
            label="Checkbox"
            formProps={[
               {
                  type: "checkbox",
                  id: "check-1",
                  value: "option1",
                  name: "check-sample",
               },
               {
                  type: "checkbox",
                  id: "check-2",
                  value: "option2",
                  name: "check-sample",
               },
               {
                  type: "checkbox",
                  id: "check-3",
                  value: "option3",
                  name: "check-sample",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.select}`}
            label="Select Block"
            formProps={[
               {
                  isSelect: {
                     options: ["option1", "option2", "option3"],
                  },
                  name: "select block",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.select} ${s.flex}`}
            label="Select flex"
            formProps={[
               {
                  isSelect: {
                     options: ["option1", "option2", "option3"],
                  },
                  name: "select flex 1",
               },
               {
                  isSelect: {
                     options: ["option1", "option2", "option3"],
                  },
                  name: "select flex 2",
               },
            ]}
         />
      </form>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock code={``} />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="Form"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
