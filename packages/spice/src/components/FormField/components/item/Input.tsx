import { FormProps } from "../..";
import s from "../../spice.module.scss";

export const Input = ({
   formProps,
   className,
}: {
   formProps: FormProps;
   className?: string;
}) => {
   return (
      <input
         {...formProps}
         className={`${s.spice_form_input} ${className ? className : ""}`}
      />
   );
};
