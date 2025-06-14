import { useMemo, ReactElement } from "react";
import { CustomBreakLineUtils } from "../CustomBreakLineParser";

type SpanOmittedChildren = Omit<
   React.HTMLAttributes<HTMLSpanElement>,
   "children"
>;

export type SplitTextProps = {
   /**
    * Split strategy.
    * - "chars": split every character
    * - "words": split by whitespace (words)
    * - "lines": treat each logical line as a single unit
    */
   type?: "chars" | "words" | "lines";
   /** It is possible to set exceptional attributes for certain characters only */
   exception?: {
      selector: string;
      attributes?: SpanOmittedChildren;
   }[];
   containerProps?: SpanOmittedChildren;
   /** The input string to be parsed and formatted. Use `\n` or `###br###` for regular line breaks, and `###br.className###` for a line break with a specific class */
   children: string;
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

const getExceptionAttrs = (
   exception: SplitTextProps["exception"] | undefined,
   target: string
): SpanOmittedChildren | undefined =>
   exception?.find((item) => item.selector === target)?.attributes;

const wrap = (
   content: string,
   key: string,
   containerProps: SpanOmittedChildren | undefined,
   rest: SpanOmittedChildren,
   extraAttrs?: SpanOmittedChildren
): ReactElement => (
   <SplitContainer
      key={key}
      containerProps={containerProps}
      {...rest}
      {...extraAttrs}>
      {content === " " ? "\u00A0" : content}
   </SplitContainer>
);

interface ProcessParams {
   type: NonNullable<SplitTextProps["type"]>;
   exception?: SplitTextProps["exception"];
   containerProps?: SpanOmittedChildren;
   rest: SpanOmittedChildren;
}

const processLine = (
   line: string,
   lineIndex: number,
   { type, exception, containerProps, rest }: ProcessParams
): (ReactElement | null)[] => {
   if (CustomBreakLineUtils.isRegularBreak(line)) {
      return [null, <br key={lineIndex} />];
   }
   if (CustomBreakLineUtils.isSpecificBreak(line)) {
      return [
         null,
         <br
            key={lineIndex}
            className={CustomBreakLineUtils.getClassName(line)}
         />,
      ];
   }

   switch (type) {
      case "lines": {
         return [wrap(line, `l-${lineIndex}`, containerProps, rest), null];
      }

      case "words":
      case "chars": {
         const isWords = type === "words";
         const parts = isWords ? line.split(" ") : Array.from(line);

         const rendered = parts.flatMap((part, partIndex) => {
            const nodes: ReactElement[] = [];

            nodes.push(
               wrap(
                  part,
                  `l${lineIndex}-p${partIndex}`,
                  containerProps,
                  rest,
                  getExceptionAttrs(exception, part)
               )
            );

            if (isWords && partIndex !== parts.length - 1) {
               nodes.push(
                  wrap(
                     "\u00A0",
                     `l${lineIndex}-p${partIndex}-space`,
                     containerProps,
                     rest
                  )
               );
            }

            return nodes;
         });

         return [...rendered, null];
      }

      default:
         return [];
   }
};

export const SplitText = ({
   type = "chars",
   children,
   exception,
   containerProps,
   ...rest
}: SplitTextProps) => {
   const wrappedText = useMemo(() => {
      return children.split(CustomBreakLineUtils.regex).flatMap((line, idx) =>
         processLine(line, idx, {
            type,
            exception,
            containerProps,
            rest,
         })
      );
   }, [children, type, exception, containerProps, rest]);

   return wrappedText;
};
