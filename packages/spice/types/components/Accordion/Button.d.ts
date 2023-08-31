/// <reference types="react" />
interface IButton {
    children: React.ReactNode;
    value: string;
    className?: string;
}
/**
 * @param value string Please make sure to set it with the value of the Content component.
 */
export declare const Button: ({ children, value, className }: IButton) => import("react/jsx-runtime").JSX.Element;
export {};
