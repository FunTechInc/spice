import { Dispatch, SetStateAction } from "react";
/**
 * @description The first main tag of the child elements within SpiceWrapper has flex: 1; applied, allowing the footer to always be fixed at the bottom of the screen. If you set isSticky to true in AsideLayout, overflow is disabled, making sticky positioning simple.
 */
export declare const SpiceWrapper: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useOverflowDispatch: () => Dispatch<SetStateAction<boolean>>;
