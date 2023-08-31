/// <reference types="react" />
interface ISelectOptions {
    defaultValue?: string;
    defaultSelectedIndex?: number;
    options: string[];
}
export interface IFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isSelect?: ISelectOptions;
    isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
export interface ISelectProps {
    isSelect?: ISelectOptions;
}
export interface ITextareaProps {
    isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
interface IFormFieldsProps {
    className: string;
    label?: string;
    formProps: IFormProps[];
    errors?: React.ReactNode[];
}
/**
 *
 * @param label string
 * @param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively.
 * @param errors　React.ReactNode[] for validation
 *
 * ```jsx
 * <FormField
            className={s.field}
            label="Mail"
            formProps={[
               {
                  type: "email",
                  id: "e-mail",
                  placeholder: "t.hashimoto@funtech.inc",
                  ...register("email", {
                     required: true,
                     pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                     },
                  }),
               },
            ]}
            errors={[
               <>
                  {errors?.email?.type === "required" ? (
                     <Error error="This field is required" />
                  ) : null}
                  {errors?.email?.type === "pattern" ? (
                     <Error error="this is not valid main patter." />
                  ) : null}
               </>,
            ]}
         />
    ```
 */
export declare const FormField: ({ className, label, formProps, errors, }: IFormFieldsProps) => import("react/jsx-runtime").JSX.Element;
export {};
