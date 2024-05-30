import { SelectProps } from "../..";

export const Select = ({ formProps }: { formProps: SelectProps }) => {
   const { isSelect, style, ...rest } = formProps;
   if (!isSelect) {
      return;
   }

   const DefaultValue = () => {
      const defaultValue = isSelect.defaultValue;
      if (!defaultValue) {
         return null;
      }
      return <option hidden>{defaultValue}</option>;
   };

   const getSelectedIndex = () => {
      const i = isSelect.defaultSelectedIndex;
      if (!i) {
         return undefined;
      }
      return isSelect.options[i];
   };

   return (
      <select
         {...rest}
         style={{
            overflow: "hidden",
            fontSize: "16px",
            ...(style || {}),
         }}
         defaultValue={getSelectedIndex()}>
         <DefaultValue />
         {isSelect.options.map((option: any) => {
            return (
               <option key={option} value={option}>
                  {option}
               </option>
            );
         })}
      </select>
   );
};
