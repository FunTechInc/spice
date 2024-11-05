"use client";
import { useForm, SubmitHandler, useWatch, Control } from "react-hook-form";

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
   privacyCheck: string;
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
   } = useForm<TInputs>({ mode: "onChange" });

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
            formProps={{
               type: "text",
               id: "block-1",
               placeholder: "hoge",
               ...register("watchExample"),
            }}
         />
         <WatchTest control={control} />
         <FormField
            className={s.field}
            label="Mail"
            formProps={{
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
            }}
            errors={<Error error={errors?.email?.message || ""} />}
         />
         <FormField
            className={s.field}
            label="Tel"
            formProps={{
               type: "tel",
               id: "tel",
               placeholder: "000-0000-000",
               ...register("tel", {
                  required: VALIDATION.required,
                  pattern: {
                     value: VALIDATION.telRegExp,
                     message: VALIDATION.tel,
                  },
               }),
            }}
            errors={<Error error={errors?.tel?.message || ""} />}
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
               <Error key={0} error={errors?.firstName?.message || ""} />,
               <Error key={1} error={errors?.lastName?.message || ""} />,
            ]}
         />
         <FormField
            className={`${s.field} ${s.radio}`}
            label="Radio"
            formProps={[...Array(3)].map((_, i) => ({
               type: "radio",
               id: `radio-${i + 1}`,
               value: `option${i + 1}`,
               name: "radio",
            }))}
         />
         <FormField
            className={`${s.field} ${s.check}`}
            label="Checkbox"
            formProps={[...Array(3)].map((_, i) => ({
               type: "checkbox",
               id: `checkbox-${i + 1}`,
               value: `option${i + 1}`,
               name: "checkbox",
            }))}
         />
         <FormField
            className={`${s.field} ${s.select}`}
            label="Select Block"
            formProps={{
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
            }}
            errors={<Error error={errors?.selectBlock?.message || ""} />}
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
            formProps={{
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
            }}
            errors={<Error error={errors?.lengthWatch?.message || ""} />}
         />
         <LengthWatch control={control} />
         <FormField
            className={s.privacyCheck}
            formProps={{
               type: "checkbox",
               optionLabel: (
                  <p className={s.privacyCheckLink}>
                     <a href="#">個人情報の取り扱い</a>に同意する
                  </p>
               ),
               id: "privacyCheck",
               ...register("privacyCheck", {
                  required: VALIDATION.required,
               }),
            }}
         />
         <FormField
            className={`${s.field} ${s.submit}`}
            formProps={{
               type: "submit",
               value: "Send Request",
               disabled: !allFieldsFilled,
            }}
         />
      </form>
   );
};

const Page = () => {
   return (
      <MainView
         title="FormField"
         description={<Description />}
         demo={<Demo />}
      />
   );
};

export default Page;
