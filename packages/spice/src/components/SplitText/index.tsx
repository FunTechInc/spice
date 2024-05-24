import { useMemo } from "react";

export type SplitTextProps = {
   /** Use "\n" to insert line break tags */
   text: string;
   /** Split by character or by word . For `words`, split by whitespace. */
   type?: "chars" | "words";
} & React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLSpanElement>,
   HTMLSpanElement
>;

export const SplitText = ({
   type = "chars",
   text,
   ...rest
}: SplitTextProps) => {
   const splitTag = type === "chars" ? "" : " ";

   const wrappedText = useMemo(
      () =>
         text.split("\n").flatMap((segment, i, arr) => [
            ...segment.split(splitTag).map((char, charI) =>
               char === " " ? (
                  <span key={`${i}-${charI}`} {...rest}>
                     &nbsp;
                  </span>
               ) : (
                  <span key={`${i}-${charI}`} {...rest}>
                     {char}
                  </span>
               )
            ),
            i < arr.length - 1 ? <br key={i} /> : null,
         ]),
      [splitTag, text, rest]
   );

   return wrappedText;
};
