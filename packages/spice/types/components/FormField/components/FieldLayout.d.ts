/// <reference types="react" />
import { FormProps } from "..";
export type FormItem = React.FC<{
    formProps: FormProps;
}>;
type FieldLayoutProps = {
    layoutType: "block" | "flex" | "radio-check";
    formPropsArr: FormProps[];
    label?: string | React.ReactNode;
    FormItem: FormItem;
    errors?: React.ReactNode[];
};
export declare const FieldLayout: ({ layoutType, formPropsArr, label, FormItem, errors, }: FieldLayoutProps) => import("react/jsx-runtime").JSX.Element | undefined;
export {};
