/// <reference types="react" />
interface ITab {
    lists: {
        wrapperClassName?: string;
        buttonClassName?: string;
        isViewClassName?: string;
        children: React.ReactNode[];
    };
    contents: {
        children: React.ReactNode[];
    };
    callback: {
        leave: (target: Element) => void;
        enter: (target: Element) => void;
    };
}
export declare const Tab: ({ lists, contents, callback }: ITab) => import("react/jsx-runtime").JSX.Element;
export {};
