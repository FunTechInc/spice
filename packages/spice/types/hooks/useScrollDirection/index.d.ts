type ActionType = "down" | "up" | null;
type UseScrollDirectionProps = {
    /** default:0 */
    threshold?: number;
    /** default:10 */
    debounce?: number;
    dependencies?: any[];
};
export declare const useScrollDirection: ({ threshold, debounce, dependencies, }: UseScrollDirectionProps) => ActionType;
export {};
