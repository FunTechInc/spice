type ActionType = "down" | "up" | null;
type UseScrollDirectionProps = {
    threshold: number;
    debounce: number;
    dependencies?: any[];
};
export declare const useScrollDirection: ({ threshold, debounce, dependencies, }: UseScrollDirectionProps) => ActionType;
export {};
