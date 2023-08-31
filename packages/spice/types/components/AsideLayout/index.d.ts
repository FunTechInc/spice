/// <reference types="react" />
interface IAsideLayout {
    className?: string;
    children: React.ReactNode;
    aside: {
        chidren: React.ReactNode;
        className?: string;
        index: 0 | 1;
    };
    isSticky: boolean;
}
/**
 * @param isSticky If set to true, handles the overflow of the WrapperLayout
 */
export declare const AsideLayout: ({ className, children, aside, isSticky, }: IAsideLayout) => import("react/jsx-runtime").JSX.Element;
export {};
