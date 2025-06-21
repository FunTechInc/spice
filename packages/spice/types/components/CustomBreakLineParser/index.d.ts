type CustomBreakLineParserProps = {
    children?: string | null;
};
export declare const CustomBreakLineUtils: {
    regex: RegExp;
    isRegularBreak: (line: string) => boolean;
    isSpecificBreak: (line: string) => boolean;
    getClassName: (line: string) => string;
};
/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} children - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - The formatted string
 */
export declare const CustomBreakLineParser: ({ children, }: CustomBreakLineParserProps) => React.ReactElement | null;
export {};
