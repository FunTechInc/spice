import { Input } from "./components/item/Input";
import { Select } from "./components/item/Select";
import { FieldLayout, TFormItem } from "./components/FieldLayout";
import { Textarea } from "./components/item/Textarea";

interface ISelectOptions {
   defaultValue?: string;
   defaultSelectedIndex?: number;
   options: string[];
}
export interface IFormProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   isSelect?: ISelectOptions;
   isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export interface ISelectProps {
   isSelect?: ISelectOptions;
}

export interface ITextareaProps {
   isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

interface IFormFieldsProps {
   className: string;
   label?: string;
   formProps: IFormProps[];
   errors?: React.ReactNode[];
}

/** 
 * 
 * @param label string
 * @param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively.
 * @param errors　React.ReactNode[] for validation
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
}: IFormFieldsProps) => {
   const formPropsArr = formProps;
   const type = formPropsArr[0].type;
   const propsLength = formPropsArr.length;
   //check select | textarea
   const isSelect = formPropsArr[0].isSelect ? true : false;
   const isTextarea = formPropsArr[0].isTextarea ? true : false;

   /*===============================================
	error handling
	===============================================*/
   if (!(type === "radio" || type === "checkbox") && propsLength > 2) {
      throw new Error("The length of formProps is up to 2.");
   }
   if (errors && errors.length > 2) {
      throw new Error("The length of error is up to 2.");
   }

   /*===============================================
	switch flex or block
	===============================================*/
   const switchLayout = (FormItem: TFormItem) => {
      const layoutType = propsLength === 1 ? "block" : "flex";
      return FieldLayout({
         layoutType,
         formPropsArr,
         label,
         FormItem,
         errors,
      });
   };

   const Field = () => {
      /*===============================================
		select
		===============================================*/
      if (isSelect) {
         return switchLayout(Select);
      }
      /*===============================================
		textarea
		===============================================*/
      if (isTextarea) {
         return switchLayout(Textarea);
      }
      /*===============================================
		radio || checkbox
		===============================================*/
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
      /*===============================================
		else
		===============================================*/
      return switchLayout(Input);
   };
   return (
      <fieldset className={`${className}`}>
         <Field />
      </fieldset>
   );
};
