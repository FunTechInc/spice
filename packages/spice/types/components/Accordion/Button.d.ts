/// <reference types="react" />
interface IButton {
    children: React.ReactNode;
    value: string;
    className?: string;
}
export declare const Button: ({ children, value, className }: IButton) => import("react/jsx-runtime").JSX.Element;
export {};
