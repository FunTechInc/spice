/// <reference types="react" />
type AccordionToggleEvent = {
    height: number;
    target: HTMLDivElement;
};
export type ContentProps = {
    /** Please make sure to set it with the value of the Button component. */
    value: string;
    onOpen: (props: AccordionToggleEvent) => void;
    onClose: (props: AccordionToggleEvent) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Content: ({ value, onOpen, onClose, children, ...rest }: ContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
