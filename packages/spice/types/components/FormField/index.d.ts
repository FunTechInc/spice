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
export declare const FormField: ({ className, label, formProps, errors, }: IFormFieldsProps) => import("react/jsx-runtime").JSX.Element;
export {};
