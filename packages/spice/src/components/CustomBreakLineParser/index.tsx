import { useMemo, Fragment } from "react";

type CustomBreakLineParserProps = {
   children?: string | null;
};

const REGEX = /(\n|###br\.[^#]+###|###br###)/;
const REGULAR_BREAKS = ["\n", "###br###"];
const SPECIFIC_BREAK_REGEX = /###br\.(.*?)###/;

export const CustomBreakLineUtils = {
   regex: REGEX,
   isRegularBreak: (line: string) => REGULAR_BREAKS.includes(line),
   isSpecificBreak: (line: string) => SPECIFIC_BREAK_REGEX.test(line),
   getClassName: (line: string) =>
      line.match(/(?<=###br\.).+?(?=###)/)?.[0] || "",
};

/**
 * Converts specific markers in a string into HTML line breaks for React components.
 * @param {string} children - The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class.
 * @returns {React.ReactElement} - The formatted string
 */
export const CustomBreakLineParser = ({
   children,
}: CustomBreakLineParserProps): React.ReactElement | null => {
   const parsedText = useMemo(() => {
      if (!children) return null;
      return children.split(CustomBreakLineUtils.regex).map((line, index) => {
         if (CustomBreakLineUtils.isRegularBreak(line)) {
            return <br key={index} />;
         }
         if (CustomBreakLineUtils.isSpecificBreak(line)) {
            return (
               <br
                  className={CustomBreakLineUtils.getClassName(line)}
                  key={index}
               />
            );
         }
         return <Fragment key={index}>{line}</Fragment>;
      });
   }, [children]);
   return <>{parsedText}</>;
};
