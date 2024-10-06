import { useMemo } from "react";
import { CustomBreakLineUtils } from "../CustomBreakLineParser";

type SpanOmittedChildren = Omit<
   React.HTMLAttributes<HTMLSpanElement>,
   "children"
>;

export type SplitTextProps = {
   /** The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class. */
   text: string;
   /** Split by character or by word . For `words`, split by whitespace. */
   type?: "chars" | "words";
   /** It is possible to set exceptional attributes for certain characters only */
   exception?: {
      selector: string;
      attributes?: SpanOmittedChildren;
   }[];
   containerProps?: SpanOmittedChildren;
} & SpanOmittedChildren;

const SplitContainer = ({
   containerProps,
   ...props
}: {
   containerProps?: SpanOmittedChildren;
} & React.HTMLAttributes<HTMLSpanElement>) => {
   if (containerProps) {
      return (
         <span {...containerProps}>
            <span {...props} />
         </span>
      );
   }
   return <span {...props} />;
};

export const SplitText = ({
   type = "chars",
   text,
   exception,
   containerProps,
   ...rest
}: SplitTextProps) => {
   const splitTag = type === "chars" ? "" : " ";

   const wrappedText = useMemo(
      () =>
         text.split(CustomBreakLineUtils.regex).flatMap((line, i) => {
            if (CustomBreakLineUtils.isRegularBreak(line)) {
               return [null, <br key={i} />];
            }
            if (CustomBreakLineUtils.isSpecificBreak(line)) {
               return [
                  null,
                  <br
                     key={i}
                     className={CustomBreakLineUtils.getClassName(line)}
                  />,
               ];
            }
            return [
               ...line.split(splitTag).map((char, charI) => {
                  if (exception) {
                     const match = exception.find(
                        (item) => item.selector === char
                     );
                     if (match) {
                        return (
                           <SplitContainer
                              key={`${i}-${charI}`}
                              containerProps={containerProps}
                              {...rest}
                              {...match.attributes}>
                              {char}
                           </SplitContainer>
                        );
                     }
                  }
                  return (
                     <SplitContainer
                        key={`${i}-${charI}`}
                        containerProps={containerProps}
                        {...rest}>
                        {char === " " ? "&nbsp;" : char}
                     </SplitContainer>
                  );
               }),
               null,
            ];
         }),
      [splitTag, text, rest, exception, containerProps]
   );

   return wrappedText;
};
