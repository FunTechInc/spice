/// <reference types="react" />
export type ButtonProps = {
    /** Please make sure to set it with the value of the Content component. */
    value: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ children, value, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
