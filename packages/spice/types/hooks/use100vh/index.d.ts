import { RefObject } from "react";
/**
 * For some mobile browsers, if the CSS is 100vh or 100lvh, the navigation bar may not be included, so by using window.screen.height, it will be displayed to fill the screen.
 */
export declare const use100vh: (ref: RefObject<HTMLElement>) => void;
