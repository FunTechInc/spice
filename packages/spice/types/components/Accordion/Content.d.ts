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
        onOpen: (props: TClickHandler) => void;
        onClose: (props: TClickHandler) => void;
    };
}
/**
 * @param value string Please make sure to set it with the value of the Button component.
 * @param callback onOpen,onClose
 */
export declare const Content: ({ value, callback, children, className }: IContent) => import("react/jsx-runtime").JSX.Element;
export {};
