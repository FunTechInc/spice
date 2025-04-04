/// <reference types="react" />
export type SelectProps = {
    isSelect?: {
        defaultSelectedIndex?: number;
        options: string[];
    };
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export type TextareaProps = {
    isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type OptionLabel = {
    optionLabel?: React.ReactNode;
};
export type FormProps = React.InputHTMLAttributes<HTMLInputElement> & SelectProps & TextareaProps & OptionLabel;
export type FormFieldsProps = {
    label?: string | React.ReactNode;
    /**  param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively. */
    formProps: FormProps[] | FormProps;
    /** React.ReactNode[] for validation */
    errors?: React.ReactNode[] | React.ReactNode;
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
/**
 *
 * ```jsx
 * <FormField
        className={s.field}
        label="Mail"
        formProps={{
            type: "email",
            id: "e-mail",
            placeholder: "t.hashimoto@funtech.inc",
            ...register("email", {
                required: VALIDATION.required,
                pattern: {
                    value: VALIDATION.emailRegExp,
                    message: VALIDATION.email,
                },
            }),
        }}
        errors={<Error error={errors?.email?.message || ""} />}
    />
```
 */
export declare const FormField: ({ label, formProps, errors, ...rest }: FormFieldsProps) => import("react/jsx-runtime").JSX.Element;
export {};
