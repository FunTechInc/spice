interface IUseMediaQuery {
    type: "max" | "min";
    width: number;
}
/**
 * @param type "max" | "min"
 * @param width number
 */
export declare const useMediaQuery: ({ type, width }: IUseMediaQuery) => boolean | null;
export {};
