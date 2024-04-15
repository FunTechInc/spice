import s from "./spice.module.scss";

export type ThumbnailRatio =
   | "golden"
   | "silver"
   | "platinum"
   | "16-9"
   | "square"
   | "3-2"
   | "4-3"
   | string
   | number;

export type ThumbnailProps = {
   /** "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | string | number */
   ratio: ThumbnailRatio;
   children: React.ReactNode;
   className?: string;
};

/**
 * @param ratio You can specify "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" as preset. Everything else is passed to the `aspect-ratio` property as is.
 * 
 * ```jsx
 * <Thumbnail ratio={"golden"}>
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
   let aspectRatio;
   switch (ratio) {
      case "golden":
         aspectRatio = "1.618/1";
         break;
      case "silver":
         aspectRatio = "1.414/1";
         break;
      case "platinum":
         aspectRatio = "1.732/1";
         break;
      case "16-9":
         aspectRatio = "16/9";
         break;
      case "square":
         aspectRatio = "1/1";
         break;
      case "3-2":
         aspectRatio = "3/2";
         break;
      case "4-3":
         aspectRatio = "4/3";
         break;
      default:
         aspectRatio = ratio;
         break;
   }
   return (
      <div
         className={`${s.spice_thumbnail_container} ${
            className ? className : ""
         }`}
         style={{
            aspectRatio: aspectRatio,
         }}>
         {children}
      </div>
   );
};
