/// <reference types="react" />
export type ThumbnailRatio = "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | number;
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
export declare const Thumbnail: ({ ratio, children, className }: ThumbnailProps) => import("react/jsx-runtime").JSX.Element;
