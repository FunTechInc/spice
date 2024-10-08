type CustomBreakLineParserProps = {
    text: string;
};
export declare const CustomBreakLineUtils: {
    regex: RegExp;
    isRegularBreak: (line: string) => boolean;
    isSpecificBreak: (line: string) => RegExpMatchArray | null;
    getClassName: (line: string) => string;
};
/**
 * Parses a string and formats it by converting specific markers into HTML line breaks.
 * @param {string} content - The input string to be parsed and formatted.
 *                           Use `\n` or `###br###` for regular line breaks,
 *                           and `###br.className###` for a line break with a specific class.
 * @returns {(string | JSX.Element)[]} - A React fragment containing the formatted string with line breaks represented as `<br>` elements.
 */
declare const useParseBreakLine: (text: string) => (string | JSX.Element)[];
/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} content - The string to format; use \n or ###br.className### for line breaks
 * @returns {React.ReactElement} - The formatted string
 */
declare const CustomBreakLineParser: ({ text, }: CustomBreakLineParserProps) => React.ReactElement;
export { useParseBreakLine, CustomBreakLineParser };
