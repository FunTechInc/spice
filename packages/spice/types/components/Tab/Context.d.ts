import { Dispatch, SetStateAction } from "react";
type TabState = {
    isLeaving: boolean;
    isAnimation: boolean;
    prev: string;
    current: string;
    next: string;
};
export type ContextProps = {
    children: React.ReactNode;
    /** Please set the value that you want to open by default. */
    defaultValue: string;
};
export declare const Context: ({ children, defaultValue }: ContextProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTabState: () => TabState;
export declare const useSetTabState: () => Dispatch<SetStateAction<TabState>>;
export {};
