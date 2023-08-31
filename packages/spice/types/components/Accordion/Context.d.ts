import { Dispatch, SetStateAction } from "react";
type TAccordionState = {
    target: string;
    toggle: boolean;
    defaultValue: string[];
};
interface IContext {
    children: React.ReactNode;
    defaultValue: string[];
}
/**
 * @param defaultValue string[] Please set the value that you want to open by default.
 */
export declare const Context: ({ children, defaultValue }: IContext) => import("react/jsx-runtime").JSX.Element;
export declare const useAccordionState: () => TAccordionState;
export declare const useSetAccordionState: () => Dispatch<SetStateAction<TAccordionState>>;
export {};
