/// <reference types="react" />
type TCallbackProps = {
    target: Element;
    children: Element;
    x: number;
    y: number;
};
interface IMagnet {
    fps?: number;
    className?: string;
    children: React.ReactNode;
    callback: {
        move: (props: TCallbackProps) => void;
        leave?: (props: TCallbackProps) => void;
    };
    stopPropagation?: boolean;
}
export declare const Magnet: ({ className, children, callback, fps, stopPropagation, }: IMagnet) => import("react/jsx-runtime").JSX.Element;
export {};
