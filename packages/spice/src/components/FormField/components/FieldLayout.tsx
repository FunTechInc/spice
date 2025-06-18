import { FormProps } from "..";

export type FormItem = React.FC<{
   formProps: FormProps;
}>;

type FieldLayoutProps = {
   layoutType: "block" | "flex" | "radio-check";
   formPropsArr: FormProps[];
   label?: string | React.ReactNode;
   FormItem: FormItem;
   errors?: React.ReactNode[] | React.ReactNode;
};

const RADIO_CHECKBOX_STYLE = {
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
} as React.CSSProperties;

export const FieldLayout = ({
   layoutType,
   formPropsArr,
   label,
   FormItem,
   errors,
}: FieldLayoutProps) => {
   const ErrorMessage = ({ index }: { index: number }) => {
      if (!errors) {
         return null;
      }
      if (Array.isArray(errors)) {
         return errors[index];
      }
      return errors;
   };

   if (layoutType === "block") {
      return (
         <>
            {label && <label htmlFor={formPropsArr[0].id}>{label}</label>}
            <FormItem formProps={formPropsArr[0]} />
            <ErrorMessage index={0} />
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
                  <ErrorMessage index={0} />
               </li>
               <li>
                  <FormItem formProps={formPropsArr[1]} />
                  <ErrorMessage index={1} />
               </li>
            </ul>
         </>
      );
   }

   if (layoutType === "radio-check") {
      const Options = formPropsArr.map(
         ({ id, value, style, optionLabel, ...rest }) => {
            // ※親のpositionをrelativeにする
            return (
               <li key={id} style={{ position: "relative" }}>
                  <FormItem
                     formProps={{
                        id,
                        value,
                        style: {
                           ...RADIO_CHECKBOX_STYLE,
                           ...(style || {}),
                        },
                        ...rest,
                     }}
                  />
                  <label htmlFor={id}>{optionLabel || value}</label>
               </li>
            );
         }
      );
      return (
         <>
            {label && <label>{label}</label>}
            <ul>{Options}</ul>
            <ErrorMessage index={0} />
         </>
      );
   }
};
