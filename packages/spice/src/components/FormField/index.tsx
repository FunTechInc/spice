"use client";

import { Input } from "./components/item/Input";
import { Select } from "./components/item/Select";
import { FieldLayout, FormItem } from "./components/FieldLayout";
import { Textarea } from "./components/item/Textarea";
import { useCallback } from "react";

type SelectOptions = {
   defaultValue?: string;
   defaultSelectedIndex?: number;
   options: string[];
};
export interface FormProps extends React.InputHTMLAttributes<HTMLInputElement> {
   isSelect?: SelectOptions;
   isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export type SelectProps = {
   isSelect?: SelectOptions;
};

export type TextareaProps = {
   isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

export type FormFieldsProps = {
   className: string;
   label?: string;
   /**  param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively. */
   formProps: FormProps[];
   /** React.ReactNode[] for validation */
   errors?: React.ReactNode[];
};

/** 
 * 
 * ```jsx
 * <FormField
		className={s.field}
		label="Mail"
		formProps={[
			{
				type: "email",
				id: "e-mail",
				placeholder: "t.hashimoto@funtech.inc",
				...register("email", {
					required: true,
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
```
 */
export const FormField = ({
   className,
   label,
   formProps,
   errors,
}: FormFieldsProps) => {
   const formPropsArr = formProps;

   const type = formPropsArr[0].type;
   const propsLength = formPropsArr.length;

   const isSelect = formPropsArr[0].isSelect ? true : false;
   const isTextarea = formPropsArr[0].isTextarea ? true : false;

   if (!(type === "radio" || type === "checkbox") && propsLength > 2) {
      throw new Error("The length of formProps is up to 2.");
   }
   if (errors && errors.length > 2) {
      throw new Error("The length of error is up to 2.");
   }

   const switchLayout = useCallback(
      (FormItem: FormItem) => {
         const layoutType = propsLength === 1 ? "block" : "flex";
         return FieldLayout({
            layoutType,
            formPropsArr,
            label,
            FormItem,
            errors,
         });
      },
      [errors, formPropsArr, label, propsLength]
   );

   const Field = useCallback(() => {
      if (isSelect) {
         return switchLayout(Select);
      }

      if (isTextarea) {
         return switchLayout(Textarea);
      }

      if (type === "radio" || type === "checkbox") {
         const layoutType = "radio-check";
         return FieldLayout({
            layoutType,
            formPropsArr,
            label,
            FormItem: Input,
            errors,
         });
      }

      return switchLayout(Input);
   }, [errors, formPropsArr, label, isSelect, isTextarea, switchLayout, type]);

   return (
      <fieldset className={`${className}`}>
         <Field />
      </fieldset>
   );
};
