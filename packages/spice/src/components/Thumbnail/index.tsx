import s from "./spice.module.scss";

export type ThumbnailRatio =
   | "golden"
   | "silver"
   | "platinum"
   | "16-9"
   | "square"
   | "3-2"
   | "4-3"
   | number;

export type ThumbnailProps = {
   ratio: ThumbnailRatio;
   children: React.ReactNode;
   className?: string;
};

/**
 * ```jsx
 * <Thumbnail ratio={"16-9"}>
		<Image
			src={"src"}
			fill
			sizes="(max-width: 768px) 100vw, 50vw"
			priority
			alt="FunTech Inc"
		/>
	</Thumbnail>
	```
 */
export const Thumbnail = ({ ratio, children, className }: ThumbnailProps) => {
   const validRatios = [
      "golden",
      "silver",
      "platinum",
      "16-9",
      "square",
      "3-2",
      "4-3",
   ];

   let isRatio: boolean = validRatios.includes(ratio as string);
   let isNumber: boolean = typeof ratio === "number" && ratio > 0;

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
