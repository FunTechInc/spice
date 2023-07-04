import { IFormProps } from "../..";
import s from "../../spice.module.scss";

export const Select = ({ formProps }: { formProps: IFormProps }) => {
   const selectProp = formProps.isSelect;
   if (!selectProp) {
      return;
   }
   /*===============================================
	create options
	===============================================*/
   const Options = selectProp.options.map((option) => {
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
      const defaultValue = selectProp.defaultValue;
      if (!defaultValue) {
         return null;
      }
      return <option hidden>{defaultValue}</option>;
   };
   /*===============================================
	set defalt selected option
	===============================================*/
   const getSelectedIndex = () => {
      const i = selectProp.defaultSelectedIndex;
      if (!i) {
         return undefined;
      }
      return selectProp.options[i];
   };

   return (
      <select
         name={formProps.name}
         id={formProps.id}
         className={s.spice_form_select}
         defaultValue={getSelectedIndex()}>
         <DefaultValue />
         {Options}
      </select>
   );
};
