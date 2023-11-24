import { useCallback, useEffect, useMemo, useRef } from "react";

type UseLoadingProgressProps = {
   onesRef: React.RefObject<HTMLElement>;
   tensRef: React.RefObject<HTMLElement>;
   hundredsRef: React.RefObject<HTMLElement>;
   /** Tempo to update. Fallback to at least 60fps. defaul:3.0 */
   tempo?: number;
   onProgress?: ({
      digitContainer,
      digit,
      percent,
      destination,
      duration,
   }: {
      /** container element. Animate the digits by transforming this */
      digitContainer: HTMLElement;
      percent: number;
      digit: 1 | 10 | 100;
      destination: number;
      duration: number;
   }) => void;
   onStart?: (targets: NodeListOf<HTMLDivElement>[]) => void;
   onComplete?: (targets: NodeListOf<HTMLDivElement>[]) => void;
};

type UpdateDigitProps = {
   digitContainer: HTMLElement;
   numbersTarget: NodeListOf<HTMLElement>;
   digit: 1 | 10 | 100;
   digitNumber: number;
   currentPercent: number;
   limit: number;
   destination: number;
};

type UpdateProgress = (destination: number) => Promise<number>;

/**
 * Returns an update function for counting up. Pass the target number you want to count up to the update function.
 * @returns updateProgress:(destination: number) => Promise<number>
 */
export const useLoadingProgress = ({
   tempo = 3.0,
   onesRef,
   tensRef,
   hundredsRef,
   onProgress,
   onStart,
   onComplete,
}: UseLoadingProgressProps): UpdateProgress => {
   const percent = useMemo(() => ({ to: 0, 1: -1, 10: -1, 100: 0 }), []);
   const countUpID = useRef<any>(null);

   const updateDigit = useCallback(
      ({
         digitContainer,
         numbersTarget,
         digit,
         digitNumber,
         currentPercent,
         limit,
         destination,
      }: UpdateDigitProps) => {
         if (percent[digit] !== digitNumber && currentPercent <= limit) {
            const number = digitNumber.toString();
            const nextNumber = (Math.min(8, digitNumber) + 1).toString();
            const isEnd = currentPercent >= limit;
            numbersTarget[0].innerText = number;
            numbersTarget[1].innerText = isEnd ? "0" : nextNumber;

            onProgress &&
               onProgress({
                  digitContainer,
                  percent: currentPercent,
                  digit: digit,
                  destination,
                  duration: tempo / (destination / digit),
               });

            percent[digit] = digitNumber;
         }
      },
      [percent, onProgress, tempo]
   );

   const updateProgress = useCallback<UpdateProgress>(
      (destination) => {
         if (destination > 100) {
            destination = 100;
         }
         return new Promise((resolve) => {
            const numberElement = {
               ones: onesRef.current!.querySelectorAll("div"),
               tens: tensRef.current!.querySelectorAll("div"),
               hundreds: hundredsRef.current!.querySelectorAll("div"),
               getAll: function () {
                  return [this.ones, this.tens, this.hundreds];
               },
            };
            clearInterval(countUpID.current);
            countUpID.current = setInterval(() => {
               const currentPercent = (percent.to += 1);

               if (currentPercent >= destination) {
                  clearInterval(countUpID.current);
                  resolve(currentPercent);
               }

               if (currentPercent === 1) {
                  onStart && onStart(numberElement.getAll());
               } else if (currentPercent === 100) {
                  onComplete && onComplete(numberElement.getAll());
               }

               const hundredsNumber = Math.floor(currentPercent / 100) % 100;
               const tensNumber = Math.floor(currentPercent / 10) % 10;
               const onesNumber = currentPercent % 10;

               updateDigit({
                  digitContainer: onesRef.current!,
                  digit: 1,
                  digitNumber: onesNumber,
                  currentPercent: currentPercent,
                  numbersTarget: numberElement.ones,
                  limit: 90,
                  destination: destination,
               });

               updateDigit({
                  digitContainer: tensRef.current!,
                  digit: 10,
                  digitNumber: tensNumber,
                  currentPercent: currentPercent,
                  numbersTarget: numberElement.tens,
                  limit: 90,
                  destination: destination,
               });

               if (percent[100] !== hundredsNumber) {
                  numberElement.hundreds[1].innerText =
                     hundredsNumber.toString();
                  onProgress &&
                     onProgress({
                        digitContainer: hundredsRef.current!,
                        percent: currentPercent,
                        digit: 100,
                        destination,
                        duration: tempo / (destination / 10),
                     });
                  percent[100] = hundredsNumber;
               }
            }, Math.max(1000 / 60, (tempo / destination) * 1000));
         });
      },
      [
         percent,
         updateDigit,
         tensRef,
         hundredsRef,
         onesRef,
         onComplete,
         onProgress,
         onStart,
         tempo,
      ]
   );

   useEffect(() => {
      return () => {
         clearInterval(countUpID.current);
      };
   }, []);

   return updateProgress;
};
