/// <reference types="react" />
export type SplitTextProps = {
    /** Use "\n" to insert line break tags */
    text: string;
    /** Split by character or by word . For `words`, split by whitespace. */
    type?: "chars" | "words";
    splitClassName?: string;
    splitStyle?: React.CSSProperties;
};
export declare const SplitText: ({ text, type, splitClassName, splitStyle, }: SplitTextProps) => (import("react/jsx-runtime").JSX.Element | null)[];
