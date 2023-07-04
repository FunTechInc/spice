interface IUseMediaQuery {
    type: "max" | "min";
    width: number;
}
export declare const useMediaQuery: ({ type, width }: IUseMediaQuery) => boolean | null;
export {};
