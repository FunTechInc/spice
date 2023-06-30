"use client";
import { useForm, SubmitHandler, useWatch, Control } from "react-hook-form";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { FormField } from "@/packages/spice/src";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul className={s.description}>
         <li>
            You can use validation library. this sample use &quot;React Hook
            Form&quot;
         </li>
      </ul>
   );
};

type TInputs = {
   watchExample: string;
};

const WatchTest = ({ control }: { control: Control<TInputs> }) => {
   const txt = useWatch({
      control,
      name: "watchExample",
      defaultValue: "",
   });
   return <p className={s.watchExample}>Watch Example: {txt}</p>;
};

const Demo = () => {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<TInputs>();
   const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <FormField
            className={s.field}
            label="Block"
            formProps={[
               {
                  type: "text",
                  id: "block-1",
                  placeholder: "hoge",
                  ...register("watchExample"),
               },
            ]}
         />
         <WatchTest control={control} />
         <FormField
            className={`${s.field} ${s.flex}`}
            label="Flex"
            formProps={[
               {
                  type: "text",
                  id: "flex-1",
                  placeholder: "piyo",
               },
               {
                  type: "text",
                  id: "flex-2",
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
                     defaultValue: "--Please choose an option--",
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
                     options: ["option1", "初期値にする", "option3"],
                     defaultSelectedIndex: 1,
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
         <FormField
            className={s.field}
            label="Textarea"
            formProps={[
               {
                  isTextarea: {
                     rows: 10,
                     cols: 33,
                     defaultValue: "It was a dark and stormy night...",
                  },
                  placeholder: "Your text here",
                  name: "textarea-sample",
                  id: "textarea-sample",
               },
            ]}
         />
         <FormField
            className={`${s.field} ${s.submit}`}
            formProps={[
               {
                  type: "submit",
                  value: "Send Request",
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
         title="FormField"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
