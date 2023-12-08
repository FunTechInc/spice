/// <reference types="react" />
type AsideLayoutProps = {
    className?: string;
    children: React.ReactNode;
    aside: {
        chidren: React.ReactNode;
        className?: string;
        index: 0 | 1;
    };
    /** If set to true, handles the overflow of the WrapperLayout */
    isSticky: boolean;
};
export declare const AsideLayout: ({ className, children, aside, isSticky, }: AsideLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
