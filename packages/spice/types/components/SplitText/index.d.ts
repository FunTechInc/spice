/// <reference types="react" />
export type SplitTextProps = {
    /** Use "\n" to insert line break tags */
    text: string;
    /** Split by character or by word . For `words`, split by whitespace. */
    type?: "chars" | "words";
    /** It is possible to set exceptional attributes for certain characters only */
    exception?: {
        selector: string;
        attributes?: Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
    }[];
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
export declare const SplitText: ({ type, text, exception, ...rest }: SplitTextProps) => (import("react/jsx-runtime").JSX.Element | null)[];
