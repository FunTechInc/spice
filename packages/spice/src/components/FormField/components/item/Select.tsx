import { SelectProps } from "../..";
import s from "../../spice.module.scss";

export const Select = ({ formProps }: { formProps: SelectProps }) => {
   const { isSelect, ...otherProp } = formProps;
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
         {...otherProp}
         className={s.spice_form_select}
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
