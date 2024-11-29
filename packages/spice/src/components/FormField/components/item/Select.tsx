import { SelectProps } from "../..";

export const Select = ({ formProps }: { formProps: SelectProps }) => {
   const { isSelect, style, ...rest } = formProps;
   if (!isSelect) return null;
   const { defaultSelectedIndex, options } = isSelect;

   return (
      <select
         {...rest}
         style={{
            overflow: "hidden",
            fontSize: "16px",
            ...(style || {}),
         }}
         defaultValue={defaultSelectedIndex && options[defaultSelectedIndex]}>
         {options.map((option, i) => (
            <option key={i} value={option}>
               {option}
            </option>
         ))}
      </select>
   );
};
