type UseShareProps = {
    shareUrl: string;
    /** window.navigator.share API seems to automatically insert siteorigin, so just pass the path */
    sharePath?: string;
    shareTitle?: string;
    /** size of new window , default:600 */
    width?: number;
    /** size of new window , default:800 */
    height?: number;
};
export declare const useShare: ({ shareUrl, sharePath, shareTitle, width, height, }: UseShareProps) => {
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
