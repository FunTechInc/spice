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
export declare const AsideLayout: ({ className, children, aside, isSticky, }: IAsideLayout) => import("react/jsx-runtime").JSX.Element;
export {};
