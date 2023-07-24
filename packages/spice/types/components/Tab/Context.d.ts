import { Dispatch, SetStateAction } from "react";
type TTabState = {
    isLeaving: boolean;
    isAnimation: boolean;
    prev: string;
    current: string;
    next: string;
};
interface IContext {
    children: React.ReactNode;
    defaultValue: string;
}
/**
 * @param defaultValue string
 */
export declare const Context: ({ children, defaultValue }: IContext) => import("react/jsx-runtime").JSX.Element;
export declare const useTabState: () => TTabState;
export declare const useSetTabState: () => Dispatch<SetStateAction<TTabState>>;
export {};
