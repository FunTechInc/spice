type UseStarterProps = {
    /** Reload when crossing this threshold */
    reloadThresholds?: number[];
    /** If set to true, `width=360` will be set in `meta[name="viewport"]` , default : `true` */
    isFixViewportForSmall?: boolean;
    /** default : `false` */
    areYouFun?: boolean;
};
/**
 * When page rendering is complete, data-set `spice-rendered` to the body tag.
 */
export declare const useStarter: ({ reloadThresholds, isFixViewportForSmall, areYouFun, }?: UseStarterProps) => void;
export {};
