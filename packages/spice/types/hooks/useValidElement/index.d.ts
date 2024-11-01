/// <reference types="react" />
/**
 * When passing a reference to a parent component's Element to a child component, it cannot be referenced by the child component's `useLayoutEffect` due to the rendering order. The `useGSAP` uses `useLayoutEffect` and therefore gets the reference with `useValidElement`.
 */
export declare const useValidElement: <T extends Element>(ref?: import("react").RefObject<T> | undefined) => T | undefined;
