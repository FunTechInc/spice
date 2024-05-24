import { forwardRef, memo } from "react";

type DigitProps = {
   className?: string;
};

export const Digit = memo(
   forwardRef<HTMLDivElement, DigitProps>(({ className }, ref) => {
      return (
         <div
            style={{
               width: "1ch",
               lineHeight: 1,
               float: "left",
               textAlign: "center",
            }}
            ref={ref}>
            <div className={className ? className : ""}>0</div>
            <div className={className ? className : ""}>0</div>
         </div>
      );
   })
);

Digit.displayName = "Digit";
