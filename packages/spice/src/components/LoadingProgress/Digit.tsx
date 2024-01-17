import { forwardRef, memo } from "react";
import s from "./spice.module.scss";

type DigitProps = {
   className?: string;
};

export const Digit = memo(
   forwardRef<HTMLDivElement, DigitProps>(({ className }, ref) => {
      return (
         <div className={s.spice_loadingProgress_digit} ref={ref}>
            <div className={className ? className : ""}>0</div>
            <div className={className ? className : ""}>0</div>
         </div>
      );
   })
);

Digit.displayName = "Digit";
