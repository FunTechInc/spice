import { ISelectProps } from "../..";
import s from "../../spice.module.scss";

export const Select = ({ formProps }: { formProps: ISelectProps }) => {
   const { isSelect, ...otherProp } = formProps;
   if (!isSelect) {
      return;
   }
   /*===============================================
	create options
	===============================================*/
   const Options = isSelect.options.map((option: any) => {
      return (
         <option key={option} value={option}>
            {option}
         </option>
      );
   });
   /*===============================================
	create default value option
	===============================================*/
   const DefaultValue = () => {
      const defaultValue = isSelect.defaultValue;
      if (!defaultValue) {
         return null;
      }
      return <option hidden>{defaultValue}</option>;
   };
   /*===============================================
	set defalt selected option
	===============================================*/
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
         {Options}
      </select>
   );
};
