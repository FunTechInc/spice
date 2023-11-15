/// <reference types="react" />
type CallbackProps = {
    target: Element;
    children: Element;
    x: number;
    y: number;
};
type MagnetProps = {
    /** you can custom FPS , default:60 */
    fps?: number;
    className?: string;
    children: React.ReactNode;
    /** onMove,onLeave */
    callback: {
        onMove: (props: CallbackProps) => void;
        onLeave?: (props: CallbackProps) => void;
    };
    /** if true , set "pointer-events: none;" to children , default:false */
    stopPropagation?: boolean;
    /** if true , reset on click , default:false */
    isOnClickReset?: boolean;
    dependencies?: any[];
};
export declare const Magnet: ({ className, children, callback, fps, stopPropagation, isOnClickReset, dependencies, }: MagnetProps) => import("react/jsx-runtime").JSX.Element;
export {};
