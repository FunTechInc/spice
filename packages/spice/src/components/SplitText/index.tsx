import { useMemo, ReactElement } from "react";
import { CustomBreakLineUtils } from "@funtech-inc/spice";

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
   /** Duplicate original content n times inside each SplitContainer */
   clone?: number;
   /**
    * Attributes applied to each cloned span.
    * Can be a static attribute object or a callback that returns attributes per clone index.
    */
   cloneContainerProps?:
      | SpanOmittedChildren
      | ((index: number) => SpanOmittedChildren);
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
   extraAttrs: SpanOmittedChildren | undefined,
   clone: number,
   cloneContainerProps?:
      | SpanOmittedChildren
      | ((index: number) => SpanOmittedChildren)
): ReactElement => (
   <SplitContainer
      key={key}
      containerProps={containerProps}
      {...rest}
      {...extraAttrs}>
      {content === " " ? "\u00A0" : content}
      {Array.from({ length: clone }, (_, cIdx) => {
         const dynamicProps =
            typeof cloneContainerProps === "function"
               ? cloneContainerProps(cIdx)
               : cloneContainerProps;
         return (
            <span key={`${key}-clone-${cIdx}`} {...dynamicProps}>
               {content === " " ? "\u00A0" : content}
            </span>
         );
      })}
   </SplitContainer>
);

interface ProcessParams {
   type: NonNullable<SplitTextProps["type"]>;
   exception?: SplitTextProps["exception"];
   containerProps?: SpanOmittedChildren;
   rest: SpanOmittedChildren;
   clone: number;
   cloneContainerProps?:
      | SpanOmittedChildren
      | ((index: number) => SpanOmittedChildren);
}

const processLine = (
   line: string,
   lineIndex: number,
   {
      type,
      exception,
      containerProps,
      rest,
      clone,
      cloneContainerProps,
   }: ProcessParams
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
         return [
            wrap(
               line,
               `l-${lineIndex}`,
               containerProps,
               rest,
               undefined,
               clone,
               cloneContainerProps
            ),
            null,
         ];
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
                  getExceptionAttrs(exception, part),
                  clone,
                  cloneContainerProps
               )
            );

            if (isWords && partIndex !== parts.length - 1) {
               nodes.push(
                  wrap(
                     "\u00A0",
                     `l${lineIndex}-p${partIndex}-space`,
                     containerProps,
                     rest,
                     undefined,
                     clone,
                     cloneContainerProps
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
   clone,
   cloneContainerProps,
   ...rest
}: SplitTextProps) => {
   const wrappedText = useMemo(() => {
      return children.split(CustomBreakLineUtils.regex).flatMap((line, idx) =>
         processLine(line, idx, {
            type,
            exception,
            containerProps,
            rest,
            clone: clone ?? 0,
            cloneContainerProps,
         })
      );
   }, [
      children,
      type,
      exception,
      containerProps,
      rest,
      clone,
      cloneContainerProps,
   ]);

   return wrappedText;
};
