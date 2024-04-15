/// <reference types="react" />
export type ThumbnailRatio = "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | string | number;
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
export declare const Thumbnail: ({ ratio, children, className }: ThumbnailProps) => import("react/jsx-runtime").JSX.Element;
