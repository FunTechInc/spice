interface IUseStarter {
    reloadThresholds?: number[];
    isFixViewportForSmall?: boolean;
    areYouFun?: boolean;
}
/**
 * When page rendering is complete, data-set "spice-rendered" to the body tag.
 * @param reloadThresholds number[] Reload when crossing this threshold
 * @param isFixViewportForSmall boolean If set to true, "width=360" will be set in "meta[name="viewport"]"
 */
export declare const useStarter: ({ reloadThresholds, isFixViewportForSmall, areYouFun, }: IUseStarter) => void;
export {};
