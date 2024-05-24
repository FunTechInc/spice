import { FormProps } from "../..";

export const Input = ({
   formProps,
   className,
}: {
   formProps: FormProps;
   className?: string;
}) => {
   const { style, ...rest } = formProps;
   return (
      <input
         {...rest}
         className={className ? className : ""}
         style={{
            overflow: "hidden",
            fontSize: "16px",
            ...style,
         }}
      />
   );
};
