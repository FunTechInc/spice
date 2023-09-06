import s from "./spice.module.scss";

export type TThumbnailRatio =
   | "golden"
   | "silver"
   | "platinum"
   | "16-9"
   | "square"
   | "3-2"
   | "4-3"
   | number;

interface IThumbnail {
   ratio: TThumbnailRatio;
   children: React.ReactNode;
   className?: string;
}

/**
 * @param ratio | "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | number;
 * 
 * ```jsx
 * <BackgroundImage ratio={"16-9"}>
		<Image
			src={"src"}
			fill
			sizes="(max-width: 768px) 100vw, 50vw"
			priority
			alt="FunTech Inc"
		/>
	</BackgroundImage>
	```
 */
export const Thumbnail = ({ ratio, children, className }: IThumbnail) => {
   // Define the valid ratio types for better reusability and readability
   const validRatios = [
      "golden",
      "silver",
      "platinum",
      "16-9",
      "square",
      "3-2",
      "4-3",
   ];

   // Check if the ratio is valid only once and store the result
   let isRatio: boolean = validRatios.includes(ratio as string);
   let isNumber: boolean = typeof ratio === "number" && ratio > 0;

   // Throw an error and stop rendering if the ratio is not valid
   if (!isRatio && !isNumber) {
      throw new Error(
         `Invalid ratio value. The 'ratio' argument should be either ${validRatios.join(
            " | "
         )} or a number greater than 0.`
      );
   }

   return (
      <div
         className={`${s.spice_thumbnail_wrapper} ${
            className ? className : ""
         }`}>
         <div
            className={`${s.spice_thumbnail_view} ${
               isRatio ? s["spice_thumbnail_" + ratio] : ""
            }`}
            style={isNumber ? { paddingTop: `${ratio}%` } : {}}>
            {children}
         </div>
      </div>
   );
};
