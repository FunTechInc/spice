import { FormProps } from "../..";

export const Input = ({ formProps }: { formProps: FormProps }) => {
   const { style, ...rest } = formProps;
   return (
      <input
         {...rest}
         style={{
            overflow: "hidden",
            ...style,
         }}
      />
   );
};
