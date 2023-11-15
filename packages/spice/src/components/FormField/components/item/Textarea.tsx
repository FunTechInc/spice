import { TextareaProps } from "../..";

export const Textarea = ({ formProps }: { formProps: TextareaProps }) => {
   const { isTextarea, ...otherProp } = formProps;
   if (!isTextarea) {
      return;
   }
   return <textarea {...otherProp} {...isTextarea}></textarea>;
};
