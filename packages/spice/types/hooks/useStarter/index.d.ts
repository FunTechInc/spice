type UseStarterProps = {
    /** If set to true, `width=360` will be set in `meta[name="viewport"]` , default : `true` */
    isFixViewportForSmall?: boolean;
    /** If a string is set, it is concatenated with the default string. default : `false` */
    areYouFun?: boolean | string;
};
/**
 * When page rendering is complete, data-set `spice-rendered` to the body tag.
 */
export declare const useStarter: ({ isFixViewportForSmall, areYouFun, }?: UseStarterProps) => void;
export {};
