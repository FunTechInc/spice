import { useMemo } from "react";

type CustomBreakLineParserProps = {
   text: string;
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
const useParseBreakLine = (text: string): (string | JSX.Element)[] =>
   useMemo(
      () =>
         text.split(CustomBreakLineUtils.regex).map((line, index) => {
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
      [text]
   );

/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} text - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - The formatted string
 */
const CustomBreakLineParser = ({
   text,
}: CustomBreakLineParserProps): React.ReactElement => {
   const parsedText = useParseBreakLine(text);
   return <>{parsedText}</>;
};

export { useParseBreakLine, CustomBreakLineParser };
