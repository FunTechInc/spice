"use client";
import { useForm, SubmitHandler, useWatch, Control } from "react-hook-form";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { FormField } from "@/packages/spice/src/client";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>
            Please integrate with your favorite validation library. This sample
            uses{" "}
            <a href="https://www.react-hook-form.com/" target="_blank">
               React Hook Form
            </a>
            .
         </li>
         <li>
            Please integrate with your favorite headless form service. This
            sample uses{" "}
            <a href="https://hyperform.jp/" target="_blank">
               HyperForm
            </a>
            .
         </li>
         <li>Radio and checkbox inputs are set to be hidden by default.</li>
      </ul>
   );
};

type TInputs = {
   watchExample: string;
   firstName: string;
   lastName: string;
   email: string;
   tel: string;
   radio: string;
   selectBlock: string;
   lengthWatch: string;
};

const WatchTest = ({ control }: { control: Control<TInputs> }) => {
   const txt = useWatch({
      control,
      name: "watchExample",
      defaultValue: "",
   });
   return <p className={s.watchExample}>Watch Example: {txt}</p>;
};

const LengthWatch = ({ control }: { control: Control<TInputs> }) => {
   const txt = useWatch({
      control,
      name: "lengthWatch",
      defaultValue: "",
   });
   return <p className={s.watchExample}>Watch Example: {txt.length}</p>;
};

const Error = ({ error }: { error?: string }) => {
   return error ? <p className={s.error}>{error}</p> : null;
};

const VALIDATION = {
   emailRegExp: /^[^\s]+@[^\s]+$/,
   telRegExp: /^[0-9-]*$/,
   maxLength: "20文字以内で入力してください",
   required: "必須項目です",
   email: "メールアドレスの形式で入力してください",
   select: "選択してください",
   tel: "数字とハイフンのみ入力してください",
   defaultSelect: "選択してください",
};

const Demo = () => {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm<TInputs>({ mode: "onBlur" });

   // const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

   const allFieldsFilled = Object.keys(errors).length === 0 && isValid;

   return (
      <form
         // onSubmit={handleSubmit(onSubmit)}
         action="https://hyperform.jp/api/bcSznryS"
         method="post">
         <FormField
            className={s.field}
            label="Watch input"
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
            className={s.field}
            label="Mail"
            formProps={[
               {
                  type: "email",
                  id: "e-mail",
                  placeholder: "t.hashimoto@funtech.inc",
                  ...register("email", {
                     required: VALIDATION.required,
                     pattern: {
                        value: VALIDATION.emailRegExp,
                        message: VALIDATION.email,
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  <Error error={errors?.email?.message || ""} />
               </>,
            ]}
         />
         <FormField
            className={s.field}
            label="Tel"
            formProps={[
               {
                  type: "tel",
                  id: "tel",
                  placeholder: "000-0000-000",
                  ...register("tel", {
                     required: VALIDATION.required,
                     pattern: {
                        value: /^[0-9-]*$/,
                        message: VALIDATION.tel,
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  <Error error={errors?.tel?.message || ""} />
               </>,
            ]}
         />
         <FormField
            className={`${s.field} ${s.flex}`}
            label="Name"
            formProps={[
               {
                  type: "text",
                  id: "firstName",
                  placeholder: "firstName",
                  ...register("firstName", {
                     required: VALIDATION.required,
                     maxLength: {
                        value: 20,
                        message: VALIDATION.maxLength,
                     },
                  }),
               },
               {
                  type: "text",
                  id: "lastName",
                  placeholder: "lastName",
                  ...register("lastName", {
                     required: VALIDATION.required,
                     maxLength: {
                        value: 20,
                        message: VALIDATION.maxLength,
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  <Error error={errors?.firstName?.message || ""} />
               </>,
               <>
                  <Error error={errors?.lastName?.message || ""} />
               </>,
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
               },
               {
                  type: "radio",
                  id: "radio-2",
                  value: "option2",
               },
               {
                  type: "radio",
                  id: "radio-3",
                  value: "option3",
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
                  id: "selectBlock",
                  isSelect: {
                     defaultValue: VALIDATION.defaultSelect,
                     options: ["option1", "option2", "option3"],
                  },
                  ...register("selectBlock", {
                     required: VALIDATION.required,
                     validate: (value) =>
                        value !== VALIDATION.defaultSelect || VALIDATION.select,
                  }),
               },
            ]}
            errors={[
               <>
                  <Error error={errors?.selectBlock?.message || ""} />
               </>,
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
                     defaultValue: "hogehogehogehoge",
                  },
                  placeholder: "Your text here",
                  id: "lengthWatch",
                  ...register("lengthWatch", {
                     maxLength: {
                        value: 20,
                        message: VALIDATION.maxLength,
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  <Error error={errors?.lengthWatch?.message || ""} />
               </>,
            ]}
         />
         <LengthWatch control={control} />
         <FormField
            className={`${s.field} ${s.submit}`}
            formProps={[
               {
                  type: "submit",
                  value: "Send Request",
                  disabled: !allFieldsFilled,
               },
            ]}
         />
      </form>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<TInputs>({ mode: "onBlur" });

   return (
      <form
         action="https://hyperform.jp/api/bcSznryS"
         method="post">
         <FormField
            className={s.field}
            label="Watch input"
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
            className={s.field}
            label="Mail"
            formProps={[
               {
                  type: "email",
                  id: "e-mail",
                  placeholder: "t.hashimoto@funtech.inc",
                  ...register("email", {
                     required: VALIDATION.required,
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  {errors?.email?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
                  {errors?.email?.type === "pattern" ? (
                     <Error error="this is not valid main patter." />
                  ) : null}
               </>,
            ]}
         />
         <FormField
            label="Name"
            formProps={[
               {
                  type: "text",
                  id: "firstName",
                  placeholder: "firstName",
                  ...register("firstName", {
                     required: VALIDATION.required,
                     maxLength: 20,
                  }),
               },
               {
                  type: "text",
                  id: "lastName",
                  placeholder: "lastName",
                  ...register("lastName", {
                     required: VALIDATION.required,
                     maxLength: 20,
                  }),
               },
            ]}
            errors={[
               <>
                  {errors?.firstName?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
                  {errors?.firstName?.type === "maxLength" ? (
                     <Error error="First name cannot exceed 20 characters" />
                  ) : null}
               </>,
               <>
                  {errors?.lastName?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
                  {errors?.lastName?.type === "maxLength" ? (
                     <Error error="First name cannot exceed 20 characters" />
                  ) : null}
               </>,
            ]}
         />
         <FormField
            label="Radio"
            formProps={[
               {
                  type: "radio",
                  id: "radio-1",
                  value: "option1",
                  ...register("radio", {
                     required: VALIDATION.required,
                  }),
               },
               {
                  type: "radio",
                  id: "radio-2",
                  value: "option2",
                  ...register("radio", {
                     required: VALIDATION.required,
                  }),
               },
               {
                  type: "radio",
                  id: "radio-3",
                  value: "option3",
                  ...register("radio", {
                     required: VALIDATION.required,
                  }),
               },
            ]}
            errors={[
               <>
                  {errors?.radio?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
               </>,
            ]}
         />
         <FormField
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
            label="Select Block"
            formProps={[
               {
                  isSelect: {
                     defaultValue: "--Please choose an option--",
                     options: ["option1", "option2", "option3"],
                  },
                  ...register("selectBlock", { required: VALIDATION.required }),
               },
            ]}
            errors={[
               <>
                  {errors?.selectBlock?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
               </>,
            ]}
         />
         <FormField
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
                     defaultValue: "hogehogehogehoge",
                  },
                  placeholder: "Your text here",
                  id: "lengthWatch",
                  ...register("lengthWatch", {
                     maxLength: 20,
                  }),
               },
            ]}
            errors={[
               <>
                  {errors?.lengthWatch?.type === "maxLength" ? (
                     <Error error="20文字以上です" />
                  ) : null}
               </>,
            ]}
         />
         <LengthWatch control={control} />
         <FormField
            formProps={[
               {
                  type: "submit",
                  value: "Send Request",
               },
            ]}
         />
      </form>
   );
};`}
      />
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
