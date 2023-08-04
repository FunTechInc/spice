import { ITextareaProps } from "../..";

export const Textarea = ({ formProps }: { formProps: ITextareaProps }) => {
   const { isTextarea, ...otherProp } = formProps;
   if (!isTextarea) {
      return;
   }
   return <textarea {...otherProp} {...isTextarea}></textarea>;
};
