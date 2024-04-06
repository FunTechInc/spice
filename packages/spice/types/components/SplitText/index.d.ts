export type SplitTextProps = {
    /** Use "\n" to insert line break tags */
    text: string;
    /** Split by character or by word . For `words`, split by whitespace. */
    type?: "chars" | "words";
    splitClassName?: string;
};
export declare const SplitText: ({ text, type, splitClassName, }: SplitTextProps) => (import("react/jsx-runtime").JSX.Element | null)[];
