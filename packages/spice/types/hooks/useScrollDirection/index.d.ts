type TState = "down" | "up" | null;
interface IUseScrollDirection {
    threshold: number;
    debounce: number;
    dependencies?: any[];
}
/**
 * @returns direction "up" | "down"
 */
export declare const useScrollDirection: ({ threshold, debounce, dependencies, }: IUseScrollDirection) => TState;
export {};
