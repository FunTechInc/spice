import { Dispatch, SetStateAction } from "react";
type TTabState = {
    isLeaving: boolean;
    prev: string;
    current: string;
    next: string;
};
interface IContext {
    children: React.ReactNode;
    defaultValue: string;
}
export declare const Context: ({ children, defaultValue }: IContext) => import("react/jsx-runtime").JSX.Element;
export declare const useTabState: () => TTabState;
export declare const useSetTabState: () => Dispatch<SetStateAction<TTabState>>;
export {};
