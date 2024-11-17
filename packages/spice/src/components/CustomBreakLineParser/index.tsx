import { useMemo } from "react";

type CustomBreakLineParserProps = {
   children: string;
};

export const CustomBreakLineUtils = {
   regex: /(\n|###br\.[^#]+###|###br###)/,
   isRegularBreak: (line: string) => line === "\n" || line === "###br###",
   isSpecificBreak: (line: string) => line.match(/###br\.(.*?)###/),
   getClassName: (line: string) =>
      line.match(/(?<=###br\.).+?(?=###)/)?.[0] || "",
};

/**
 * @returns {(string | JSX.Element)[]} - A React fragment containing the formatted string with line breaks represented as `<br>` elements.
 */
const useParsedBreakLine = (string: string): (string | JSX.Element)[] =>
   useMemo(
      () =>
         string.split(CustomBreakLineUtils.regex).map((line, index) => {
            // \n or ###br### is a regular line break
            if (CustomBreakLineUtils.isRegularBreak(line)) {
               return <br key={index} />;
            }
            // ###br.className### is a line break with a specified class name
            if (CustomBreakLineUtils.isSpecificBreak(line)) {
               return (
                  <br
                     className={CustomBreakLineUtils.getClassName(line)}
                     key={index}
                  />
               );
            }
            // Regular text
            return line;
         }),
      [string]
   );

/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} children - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - The formatted string
 */
const CustomBreakLineParser = ({
   children,
}: CustomBreakLineParserProps): React.ReactElement => {
   const parsedText = useParsedBreakLine(children);
   return <>{parsedText}</>;
};

export { useParsedBreakLine, CustomBreakLineParser };
