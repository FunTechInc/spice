import { IFormProps } from "../..";
import s from "../../spice.module.scss";

export const Select = ({ formProps }: { formProps: IFormProps }) => {
   const Options = formProps.isSelect?.options.map((option) => {
      return (
         <option key={option} value={option}>
            {option}
         </option>
      );
   });
   return (
      <select
         name={formProps.name}
         id={formProps.id}
         className={s._form_select}>
         {Options}
      </select>
   );
};
