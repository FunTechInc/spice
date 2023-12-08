type UseShareProps = {
    shareUrl: string;
    shareTitle?: string;
    /** size of new window , default:600 */
    width?: number;
    /** size of new window , default:800 */
    height?: number;
};
export declare const useShare: ({ shareUrl, shareTitle, width, height, }: UseShareProps) => {
    Facebook: {
        onClick: () => void;
    };
    X: {
        onClick: () => void;
    };
    LINE: {
        onClick: () => void;
    };
    share: {
        onClick: () => Promise<void>;
    };
    copy: {
        onClick: () => void;
    };
    isCopied: boolean;
};
export {};
