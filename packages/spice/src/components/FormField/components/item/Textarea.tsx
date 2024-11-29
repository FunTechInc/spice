import { TextareaProps } from "../..";

export const Textarea = ({ formProps }: { formProps: TextareaProps }) => {
   const { isTextarea, ...rest } = formProps;
   if (!isTextarea) return null;
   return <textarea {...rest} {...isTextarea}></textarea>;
};
