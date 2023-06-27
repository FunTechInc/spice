import { IFormProps } from "../..";
import s from "../../spice.module.scss";

export const Input = ({
   formProps,
   className,
}: {
   formProps: IFormProps;
   className?: string;
}) => {
   return <input {...formProps} className={`${s._form_input} ${className}`} />;
};
