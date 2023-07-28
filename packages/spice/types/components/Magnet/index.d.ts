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
    isOnClickReset?: boolean;
}
/**
 * @param callback move,leave
 * @param stopPropagation if true , set "pointer-events: none;" to children
 * @param isOnClickReset if true , reset on click
 */
export declare const Magnet: ({ className, children, callback, fps, stopPropagation, isOnClickReset, }: IMagnet) => import("react/jsx-runtime").JSX.Element;
export {};
