import { ITextareaProps } from "../..";

export const Textarea = ({ formProps }: { formProps: ITextareaProps }) => {
   const { isTextarea, ...otherProp } = formProps;
   if (!isTextarea) {
      return;
   }
   return (
      <textarea
         {...otherProp}
         cols={isTextarea.cols}
         rows={isTextarea.rows}
         defaultValue={isTextarea.defaultValue}></textarea>
   );
};
