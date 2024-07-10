import { useMemo } from "react";

export type SplitTextProps = {
   /** Use "\n" to insert line break tags */
   text: string;
   /** Split by character or by word . For `words`, split by whitespace. */
   type?: "chars" | "words";
   /** It is possible to set exceptional attributes for certain characters only */
   exception?: {
      selector: string;
      attributes?: Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
   };
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

export const SplitText = ({
   type = "chars",
   text,
   exception,
   ...rest
}: SplitTextProps) => {
   const splitTag = type === "chars" ? "" : " ";

   const wrappedText = useMemo(
      () =>
         text.split("\n").flatMap((segment, i, arr) => [
            ...segment.split(splitTag).map((char, charI) => {
               if (exception && exception.selector === char) {
                  return (
                     <span
                        key={`${i}-${charI}`}
                        {...rest}
                        {...exception.attributes}>
                        {char}
                     </span>
                  );
               }
               return char === " " ? (
                  <span key={`${i}-${charI}`} {...rest}>
                     &nbsp;
                  </span>
               ) : (
                  <span key={`${i}-${charI}`} {...rest}>
                     {char}
                  </span>
               );
            }),
            i < arr.length - 1 ? <br key={i} /> : null,
         ]),
      [splitTag, text, rest, exception]
   );

   return wrappedText;
};
