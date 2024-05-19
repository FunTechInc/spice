export type SplitTextProps = {
   /** Use "\n" to insert line break tags */
   text: string;
   /** Split by character or by word . For `words`, split by whitespace. */
   type?: "chars" | "words";
   splitClassName?: string;
   splitStyle?: React.CSSProperties;
};

export const SplitText = ({
   text,
   type = "chars",
   splitClassName,
   splitStyle,
}: SplitTextProps) => {
   const splitTag = type === "chars" ? "" : " ";
   const wrappedText = text.split("\n").flatMap((segment, i, arr) => [
      ...segment.split(splitTag).map((char, charI) =>
         char === " " ? (
            <span
               key={`${i}-${charI}`}
               style={splitStyle}
               className={`${splitClassName ? splitClassName : ""}`}>
               &nbsp;
            </span>
         ) : (
            <span
               key={`${i}-${charI}`}
               style={splitStyle}
               className={`${splitClassName ? splitClassName : ""}`}>
               {char}
            </span>
         )
      ),
      i < arr.length - 1 ? <br key={i} /> : null,
   ]);
   return wrappedText;
};
