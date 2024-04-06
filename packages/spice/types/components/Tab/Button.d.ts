/// <reference types="react" />
export type ButtonProps = {
    children: React.ReactNode;
    /** Please make sure to set it with the value of the Content component. */
    value: string;
    className?: string;
};
export declare const Button: ({ children, value, className }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
