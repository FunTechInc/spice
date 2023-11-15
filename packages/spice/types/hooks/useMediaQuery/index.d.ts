type UseMediaQueryProps = {
    type: "max" | "min";
    width: number;
};
export declare const useMediaQuery: ({ type, width }: UseMediaQueryProps) => boolean | null;
export {};
