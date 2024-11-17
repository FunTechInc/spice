/// <reference types="react" />
type SpanOmittedChildren = Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
export type SplitTextProps = {
    /** Split by character or by word . For `words`, split by whitespace. */
    type?: "chars" | "words";
    /** It is possible to set exceptional attributes for certain characters only */
    exception?: {
        selector: string;
        attributes?: SpanOmittedChildren;
    }[];
    containerProps?: SpanOmittedChildren;
    children: string;
} & SpanOmittedChildren;
/**
 * @param children - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 */
export declare const SplitText: ({ type, children, exception, containerProps, ...rest }: SplitTextProps) => (import("react/jsx-runtime").JSX.Element | null)[];
export {};
