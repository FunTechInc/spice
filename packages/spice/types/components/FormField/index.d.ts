/// <reference types="react" />
type SelectOptions = {
    defaultValue?: string;
    defaultSelectedIndex?: number;
    options: string[];
};
export interface FormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isSelect?: SelectOptions;
    isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
export type SelectProps = {
    isSelect?: SelectOptions;
};
export type TextareaProps = {
    isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};
export type FormFieldsProps = {
    className: string;
    label?: string;
    /**  param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively. */
    formProps: FormProps[];
    /** React.ReactNode[] for validation */
    errors?: React.ReactNode[];
};
/**
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
export declare const FormField: ({ className, label, formProps, errors, }: FormFieldsProps) => import("react/jsx-runtime").JSX.Element;
export {};
