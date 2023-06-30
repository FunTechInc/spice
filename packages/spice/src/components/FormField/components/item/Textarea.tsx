import { IFormProps } from "../..";

export const Textarea = ({ formProps }: { formProps: IFormProps }) => {
   const textareaProp = formProps.isTextarea;
   if (!textareaProp) {
      return;
   }
   return (
      <textarea
         name={formProps.name}
         id={formProps.id}
         cols={textareaProp.cols}
         rows={textareaProp.rows}
         placeholder={formProps.placeholder}
         defaultValue={textareaProp.defaultValue}></textarea>
   );
};
