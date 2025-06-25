import { useMemo, ReactElement, ReactNode } from "react";
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
   /** It is possible to set exceptional attributes for certain words/chars only */
   exception?: {
      selector: string;
      attributes?: SpanOmittedChildren;
   }[];
   /** It is possible to set exceptional attributes for certain chars only. Takes precedence over exception in chars mode */
   exceptionChar?: {
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

type ExceptionArray = { selector: string; attributes?: SpanOmittedChildren }[];

const getExceptionAttrs = (
   exception: ExceptionArray | undefined,
   target: string
): SpanOmittedChildren | undefined =>
   exception?.find((item) => item.selector === target)?.attributes;

const wrap = (
   content: string | ReactNode,
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
      {typeof content === "string" && content === " " ? "\u00A0" : content}
      {Array.from({ length: clone }, (_, cIdx) => {
         const dynamicProps =
            typeof cloneContainerProps === "function"
               ? cloneContainerProps(cIdx)
               : cloneContainerProps;
         return (
            <span key={`${key}-clone-${cIdx}`} {...dynamicProps}>
               {typeof content === "string" && content === " "
                  ? "\u00A0"
                  : content}
            </span>
         );
      })}
   </SplitContainer>
);

interface ProcessParams {
   type: NonNullable<SplitTextProps["type"]>;
   exception?: SplitTextProps["exception"];
   exceptionChar?: SplitTextProps["exceptionChar"];
   containerProps?: SpanOmittedChildren;
   rest: SpanOmittedChildren;
   clone: number;
   cloneContainerProps?:
      | SpanOmittedChildren
      | ((index: number) => SpanOmittedChildren);
}

/**
 * Split text into segments considering exceptionChar. Each segment will either be
 *   a single exception character or a contiguous string of non-exception characters.
 */
const segmentByExceptionChars = (
   text: string,
   exceptionChar: SplitTextProps["exceptionChar"] | undefined
): { content: string; isException: boolean }[] => {
   if (!exceptionChar || exceptionChar.length === 0) {
      return [{ content: text, isException: false }];
   }

   const segments: { content: string; isException: boolean }[] = [];
   let buffer = "";

   for (const ch of text) {
      const isEx = !!getExceptionAttrs(exceptionChar, ch);

      if (isEx) {
         // flush buffer first
         if (buffer) {
            segments.push({ content: buffer, isException: false });
            buffer = "";
         }
         segments.push({ content: ch, isException: true });
      } else {
         buffer += ch;
      }
   }

   if (buffer) {
      segments.push({ content: buffer, isException: false });
   }

   return segments;
};

/**
 * Decorate a given string with <span> wrapping for each exceptionChar and return ReactNode.
 * This avoids duplicating the same mapping logic in "lines" / "words" mode.
 */
const applyExceptionChar = (
   text: string,
   keyBase: string,
   exceptionChar: SplitTextProps["exceptionChar"] | undefined
): ReactNode => {
   const segments = segmentByExceptionChars(text, exceptionChar);
   // 例外指定が無い場合はそのまま文字列を返す（segments は 1 要素）
   if (segments.length === 1 && !segments[0].isException) return text;

   return segments.map((seg, idx) =>
      seg.isException ? (
         <span
            key={`${keyBase}-ex${idx}`}
            {...getExceptionAttrs(exceptionChar, seg.content)}>
            {seg.content}
         </span>
      ) : (
         seg.content
      )
   );
};

const processLine = (
   line: string,
   lineIndex: number,
   {
      type,
      exception,
      exceptionChar,
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
         // Always wrap the entire logical line once.

         const innerContent = applyExceptionChar(
            line,
            `l${lineIndex}`,
            exceptionChar
         );

         return [
            wrap(
               innerContent,
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

            if (isWords) {
               // words モード: 各単語を 1 回だけ wrap し、その内部で exceptionChar を展開
               const wordContent = applyExceptionChar(
                  part,
                  `l${lineIndex}-p${partIndex}`,
                  exceptionChar
               );

               const outerAttrs = getExceptionAttrs(exception, part);

               nodes.push(
                  wrap(
                     wordContent,
                     `l${lineIndex}-p${partIndex}`,
                     containerProps,
                     rest,
                     outerAttrs,
                     clone,
                     cloneContainerProps
                  )
               );
            } else {
               // chars モードまたは words モードで exceptionChar 指定なし
               const extraAttrs =
                  getExceptionAttrs(exceptionChar, part) ??
                  getExceptionAttrs(exception, part);

               nodes.push(
                  wrap(
                     part,
                     `l${lineIndex}-p${partIndex}`,
                     containerProps,
                     rest,
                     extraAttrs,
                     clone,
                     cloneContainerProps
                  )
               );
            }

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
   exceptionChar,
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
            exceptionChar,
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
      exceptionChar,
      containerProps,
      rest,
      clone,
      cloneContainerProps,
   ]);

   return wrappedText;
};
