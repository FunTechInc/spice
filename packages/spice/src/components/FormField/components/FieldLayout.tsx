import { IFormProps } from "..";
import s from "../spice.module.scss";

export type TFormItem = React.FC<{ formProps: IFormProps; className?: string }>;

interface IFieldLayout {
   layoutType: "block" | "flex" | "radio-check";
   formPropsArr: IFormProps[];
   label?: string;
   FormItem: TFormItem;
   errors?: React.ReactNode[];
}

export const FieldLayout = ({
   layoutType,
   formPropsArr,
   label,
   FormItem,
   errors,
}: IFieldLayout) => {
   const createErrorMessage = (index: number) => {
      if (!errors || !errors[index]) {
         return null;
      }
      return errors[index];
   };

   if (layoutType === "block") {
      return (
         <>
            {label && <label htmlFor={formPropsArr[0].id}>{label}</label>}
            <FormItem formProps={formPropsArr[0]} />
            {createErrorMessage(0)}
         </>
      );
   }

   if (layoutType === "flex") {
      return (
         <>
            {label && <label htmlFor={formPropsArr[0].id}>{label}</label>}
            <ul>
               <li>
                  <FormItem formProps={formPropsArr[0]} />
                  {createErrorMessage(0)}
               </li>
               <li>
                  <FormItem formProps={formPropsArr[1]} />
                  {createErrorMessage(1)}
               </li>
            </ul>
         </>
      );
   }

   if (layoutType === "radio-check") {
      const Options = formPropsArr.map((props) => {
         return (
            <li key={props.id}>
               <FormItem
                  formProps={props}
                  className={s.spice_form_radioCheckInput}
               />
               <label htmlFor={props.id}>{props.value}</label>
            </li>
         );
      });
      return (
         <>
            {label && <label>{label}</label>}
            <ul>{Options}</ul>
            {createErrorMessage(0)}
         </>
      );
   }
};
