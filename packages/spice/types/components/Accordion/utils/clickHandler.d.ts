type TClickHandler = {
    height: number;
    target: HTMLDivElement;
};
export type TCallback = {
    open: (props: TClickHandler) => void;
    close: (props: TClickHandler) => void;
};
interface IClickHandler {
    wrapper: HTMLDivElement;
    inner: HTMLDivElement;
    isOpen: boolean;
    callback: TCallback;
}
export declare const clickHandler: ({ wrapper, inner, isOpen, callback, }: IClickHandler) => void;
export {};
