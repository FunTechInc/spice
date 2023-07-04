/// <reference types="react" />
import { IFormProps } from "..";
export type TFormItem = React.FC<{
    formProps: IFormProps;
    className?: string;
}>;
interface IFieldLayout {
    layoutType: "block" | "flex" | "radio-check";
    formPropsArr: IFormProps[];
    label?: string;
    FormItem: TFormItem;
    errors?: React.ReactNode[];
}
export declare const FieldLayout: ({ layoutType, formPropsArr, label, FormItem, errors, }: IFieldLayout) => import("react/jsx-runtime").JSX.Element | undefined;
export {};
