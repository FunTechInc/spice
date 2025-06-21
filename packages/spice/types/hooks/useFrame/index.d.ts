import gsap from "gsap";
/**
 * Add callbacks to `gsap.ticker`. Automatically `remove` on unmounting.
 */
export declare const useFrame: (callback: gsap.TickerCallback, once?: boolean | undefined, prioritize?: boolean | undefined) => void;
