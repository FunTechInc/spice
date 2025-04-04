type CustomBreakLineParserProps = {
    children: string;
};
export declare const CustomBreakLineUtils: {
    regex: RegExp;
    isRegularBreak: (line: string) => boolean;
    isSpecificBreak: (line: string) => RegExpMatchArray | null;
    getClassName: (line: string) => string;
};
/**
 * @returns {(string | JSX.Element)[]} - A React fragment containing the formatted string with line breaks represented as `<br>` elements.
 */
declare const useParsedBreakLine: (string: string) => (string | JSX.Element)[];
/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} children - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - The formatted string
 */
declare const CustomBreakLineParser: ({ children, }: CustomBreakLineParserProps) => React.ReactElement;
export { useParsedBreakLine, CustomBreakLineParser };
