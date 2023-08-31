/// <reference types="react" />
interface IDropdown {
    position: "bottom-left" | "bottom-center" | "bottom-right" | "left-top" | "left-center" | "left-bottom" | "right-top" | "right-center" | "right-bottom" | "top-left" | "top-center" | "top-right";
    parent: {
        children: React.ReactNode;
    };
    content: {
        children: React.ReactNode;
    };
    callback?: {
        onEnter?: (target: Element) => void;
        onLeave?: (target: Element) => void;
    };
    className?: string;
}
/**
 * @param position | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "left-top"
      | "left-center"
      | "left-bottom"
      | "right-top"
      | "right-center"
      | "right-bottom"
      | "top-left"
      | "top-center"
      | "top-right"
    @param callback onEnter,onLeave
 */
export declare const Dropdown: ({ position, parent, content, callback, className, }: IDropdown) => import("react/jsx-runtime").JSX.Element;
export {};
