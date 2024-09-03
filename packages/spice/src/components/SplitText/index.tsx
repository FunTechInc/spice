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
   }[];
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
         text.split(/(\n|###br\.[^#]+###|###br###)/).flatMap((segment, i) => {
            if (segment === "\n" || segment === "###br###") {
               return [null, <br key={i} />];
            }
            if (segment?.match(/###br\.(.*?)###/)) {
               return [
                  null,
                  <br
                     key={i}
                     className={
                        segment.match(/(?<=###br\.).+?(?=###)/)?.[0] || ""
                     }
                  />,
               ];
            }
            return [
               ...segment.split(splitTag).map((char, charI) => {
                  if (exception) {
                     const match = exception.find(
                        (item) => item.selector === char
                     );
                     if (match) {
                        return (
                           <span
                              key={`${i}-${charI}`}
                              {...rest}
                              {...match.attributes}>
                              {char}
                           </span>
                        );
                     }
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
               null,
            ];
         }),
      [splitTag, text, rest, exception]
   );

   return wrappedText;
};
