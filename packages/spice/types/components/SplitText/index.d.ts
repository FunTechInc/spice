import { ReactElement } from "react";
type SpanOmittedChildren = Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
export type SplitTextProps = {
    /**
     * Split strategy.
     * - "chars": split every character
     * - "words": split by whitespace (words)
     * - "lines": treat each logical line as a single unit
     */
    type?: "chars" | "words" | "lines";
    /** It is possible to set exceptional attributes for certain words/chars only */
    exception?: {
        selector: string;
        attributes?: SpanOmittedChildren;
    }[];
    /** It is possible to set exceptional attributes for certain chars only. Takes precedence over exception in chars mode */
    exceptionChar?: {
        selector: string;
        attributes?: SpanOmittedChildren;
    }[];
    containerProps?: SpanOmittedChildren;
    /** Duplicate original content n times inside each SplitContainer */
    clone?: number;
    /**
     * Attributes applied to each cloned span.
     * Can be a static attribute object or a callback that returns attributes per clone index.
     */
    cloneContainerProps?: SpanOmittedChildren | ((index: number) => SpanOmittedChildren);
    /** The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class */
    children: string;
} & SpanOmittedChildren;
export declare const SplitText: ({ type, children, exception, exceptionChar, containerProps, clone, cloneContainerProps, ...rest }: SplitTextProps) => (ReactElement<any, string | import("react").JSXElementConstructor<any>> | null)[];
export {};
