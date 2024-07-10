type UseStarterProps = {
    /** If set to true, `width=360` will be set in `meta[name="viewport"]` , default : `true` */
    isFixViewportForSmall?: boolean;
    /** default : `false` */
    areYouFun?: boolean;
};
/**
 * When page rendering is complete, data-set `spice-rendered` to the body tag.
 */
export declare const useStarter: ({ isFixViewportForSmall, areYouFun, }?: UseStarterProps) => void;
export {};
