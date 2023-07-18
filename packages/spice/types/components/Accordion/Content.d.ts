/// <reference types="react" />
type TClickHandler = {
    height: number;
    target: HTMLDivElement;
};
interface IContent {
    children: React.ReactNode;
    value: string;
    className?: string;
    callback: {
        open: (props: TClickHandler) => void;
        close: (props: TClickHandler) => void;
    };
}
export declare const Content: ({ value, callback, children, className }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
