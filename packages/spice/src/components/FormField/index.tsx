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

interface IFormFieldsProps {
   className: string;
   label?: string;
   formProps: IFormProps[];
   errors?: React.ReactNode[];
}

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
