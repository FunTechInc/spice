/// <reference types="react" />
export type TThumbnailRatio = "golden" | "silver" | "platinum" | "16-9" | "square" | "3-2" | "4-3" | number;
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
export declare const Thumbnail: ({ ratio, children, className }: IThumbnail) => import("react/jsx-runtime").JSX.Element;
export {};
