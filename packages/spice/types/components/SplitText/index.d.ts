/// <reference types="react" />
export type SplitTextProps = {
    /** Use "\n" to insert line break tags */
    text: string;
    /** Split by character or by word . For `words`, split by whitespace. */
    type?: "chars" | "words";
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
export declare const SplitText: ({ type, text, ...rest }: SplitTextProps) => (import("react/jsx-runtime").JSX.Element | null)[];
