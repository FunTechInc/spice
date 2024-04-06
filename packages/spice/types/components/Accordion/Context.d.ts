import { Dispatch, SetStateAction } from "react";
type AccordionState = {
    target: string;
    toggle: boolean;
    defaultValue: string[];
};
export type ContextProps = {
    children: React.ReactNode;
    /** Please set the value that you want to open by default. */
    defaultValue: string[];
};
export declare const Context: ({ children, defaultValue }: ContextProps) => import("react/jsx-runtime").JSX.Element;
export declare const useAccordionState: () => AccordionState;
export declare const useSetAccordionState: () => Dispatch<SetStateAction<AccordionState>>;
export {};
