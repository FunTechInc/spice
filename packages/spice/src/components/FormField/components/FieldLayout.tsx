import { useCallback } from "react";
import { FormProps } from "..";

export type FormItem = React.FC<{ formProps: FormProps; className?: string }>;

type FieldLayoutProps = {
   layoutType: "block" | "flex" | "radio-check";
   formPropsArr: FormProps[];
   label?: string;
   FormItem: FormItem;
   errors?: React.ReactNode[];
};

export const FieldLayout = ({
   layoutType,
   formPropsArr,
   label,
   FormItem,
   errors,
}: FieldLayoutProps) => {
   const createErrorMessage = useCallback(
      (index: number) => {
         if (!errors || !errors[index]) {
            return null;
         }
         return errors[index];
      },
      [errors]
   );

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
                  formProps={{
                     ...props,
                     style: {
                        position: "absolute",
                        whiteSpace: "nowrap",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                        border: "0",
                        padding: 0,
                        clip: "rect(0 0 0 0)",
                        clipPath: "inset(50%)",
                        zIndex: "-99999",
                     },
                  }}
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
