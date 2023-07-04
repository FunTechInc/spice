/// <reference types="react" />
interface IBackgroundImage {
    ratio: "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | number;
    children: React.ReactNode;
    className?: string;
}
export declare const BackgroundImage: ({ ratio, children, className, }: IBackgroundImage) => import("react/jsx-runtime").JSX.Element;
export {};
