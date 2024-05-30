import { forwardRef, memo } from "react";

type DigitProps = React.HTMLAttributes<HTMLDivElement>;

export const Digit = memo(
   forwardRef<HTMLDivElement, DigitProps>((props, ref) => {
      return (
         <div
            style={{
               width: "1ch",
               lineHeight: 1,
               float: "left",
               textAlign: "center",
            }}
            ref={ref}>
            <div {...props}>0</div>
            <div {...props}>0</div>
         </div>
      );
   })
);

Digit.displayName = "Digit";
