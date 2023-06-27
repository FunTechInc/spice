import s from "./spice.module.scss";
import { Input } from "./components/item/Input";
import { RadioCheckOptions } from "./components/RadioCheckOptions";
import { Select } from "./components/item/Select";
import { FieldLayout, TFormItem } from "./components/FieldLayout";

interface ISelectOptions {
   defaultValue?: string;
   defaultSelectedIndex?: number;
   options: string[];
}

export interface IFormProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   isSelect?: ISelectOptions;
}

interface IFormFieldsProps {
   className: string;
   label: string;
   formProps: IFormProps[];
}

export const FormField = ({
   className,
   label,
   formProps,
}: IFormFieldsProps) => {
   const formPropsArr = formProps;
   const isSelect = formPropsArr[0].isSelect ? true : false;
   const type = formPropsArr[0].type;
   const propsLength = formPropsArr.length;

   const switchLayout = (FormItem: TFormItem) => {
      const layoutType = propsLength === 1 ? "block" : "flex";
      if (propsLength > 2) {
         console.error("The length of formProps is up to 2.");
         return;
      }
      return FieldLayout({
         layoutType,
         formPropsArr,
         label,
         FormItem,
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
		radio || checkbox
		===============================================*/
      if (type === "radio" || type === "checkbox") {
         const layoutType = "radio-check";
         return FieldLayout({
            layoutType,
            formPropsArr,
            label,
            FormItem: Input,
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
